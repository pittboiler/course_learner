# Distributed Systems · Lesson 2.1: Linearizability

> ⏱ ~15 min · Module 2: Consistency and Replication · Builds on: [1.4 (physical clocks)](01-04-physical-clocks-and-synchronization.md), [1.6 (consistent cuts)](01-06-consistent-cuts-and-global-snapshots.md) · Unlocks: [2.2 (sequential and causal consistency)](02-02-sequential-causal-and-session-consistency.md), [3.5 (CAP)](03-05-the-cap-theorem-and-pacelc.md)

## Why this matters

Once data lives on several machines, "the value of $x$" stops being a well-defined phrase. Two clients can read at the same moment and get different answers, and neither replica is broken. So before you can say a replicated system is *correct*, you need a definition of correct — and "it behaves like a single machine" is the one people mean but rarely state.

Linearizability is that statement, made precise. It is the guarantee you are implicitly assuming every time you write "write, then read, and you'll see your write". It is also expensive, and [3.5](03-05-the-cap-theorem-and-pacelc.md) will show it is the exact thing CAP forces you to surrender during a partition — so it is worth knowing precisely what you are giving up.

## The idea

Here is the whole definition in one sentence: **each operation appears to take effect instantaneously at some single moment between when it was invoked and when it returned.**

Unpack that. A real operation takes time — the request travels, replicas coordinate, the response comes back — so it occupies an *interval*, not a point. Linearizability says you may pretend it happened at one point inside its own interval. You get to choose where, and you must choose consistently: pick one point per operation such that reading the operations off in that order produces a legal sequence for a single-machine object.

The one-word summary is **atomic**. The operation has no observable inside; nobody can catch it half-done.

The teeth are in "inside its own interval". If operation $a$ **returns before** operation $b$ is **invoked**, then $a$'s point is before $b$'s point — you have no freedom there. That is the *real-time* constraint, and it is what separates linearizability from everything weaker. Once a write has returned, every read that starts afterwards must see it or something later. There is no window of staleness, however small.

For overlapping operations you have complete freedom. Two operations that were in flight at the same time may be ordered either way, and a system is free to choose whichever makes its history legal. That freedom is not a loophole; it is the whole reason the definition is satisfiable at all.

## The formal version

> **History.** A sequence of **invocation** and **response** events, each tagged with a process and an operation. A history is *sequential* if every invocation is immediately followed by its own response.

> **Real-time order.** For operations $a$ and $b$ in a history $H$, write $a <_H b$ when $a$'s response precedes $b$'s invocation. Operations that overlap are unordered by $<_H$, so $<_H$ is a partial order.

> **Linearizability.** A history $H$ is linearizable if it can be extended (by adding responses for some pending operations and discarding others) to a history $H'$, and there is a sequential history $S$ such that
> 1. $S$ contains the same operations as $H'$ and is **legal** for the object's sequential specification, and
> 2. $<_{H'} \subseteq <_S$ — $S$ respects every real-time ordering in $H'$.

In words: you can shuffle the operations into a single sequence that a one-machine implementation could have produced, without ever moving an operation before something that had already finished when it started.

> **Linearization point.** The chosen instant inside an operation's interval where it is deemed to take effect.

> **Composability (locality).** A history $H$ is linearizable **if and only if** $H|_x$ is linearizable for every object $x$.

In words: linearizable objects compose for free. If each of your registers, queues and counters is individually linearizable, the whole system is, with no extra coordination between them. **This is the property that makes linearizability the standard and it is not shared by the weaker models below** — two sequentially consistent objects can be combined into a system that is not sequentially consistent, which means you cannot build a large sequentially consistent system out of small ones and must reason globally instead.

**How the definition is used in practice**, in three moves:

1. Draw the operation intervals on a time axis.
2. Read off the forced constraints: every read that returns a value $v$ forces $\mathrm{write}(v)$'s point to be earlier than the read's, and every write whose response precedes another operation's invocation has its point earlier.
3. Try to satisfy them all with points inside the intervals. If the constraints are cyclic, no assignment exists and the history is not linearizable.

**A note on "the same moment".** Linearizability is defined with respect to real time, which [1.4](01-04-physical-clocks-and-synchronization.md) showed no node can observe. That is fine: it is a *specification*, not an algorithm. The system does not need to know the real-time order; it needs to behave as if some valid assignment of points exists. An external observer with a perfect clock would be unable to catch it out — and that observer is the definition's device, not a component you have to build.

## Picture

![Two panels, each showing three operation intervals as horizontal bars on a shared time axis. In both, client A's write of 1 spans a long interval and client B's read overlaps it near the middle and returns 1. In the top panel client C reads later and returns 1, and linearization points are marked inside each interval, showing a valid order. In the bottom panel client C's later read returns 0, and no points can be placed, because B's read of 1 forces the write to take effect before C's read begins.](assets/02-01-fig1.svg)

The two panels differ in one returned value. In the top one the points can be placed — the write takes effect somewhere in the overlap with B's read, and both reads see 1. In the bottom one B's read of 1 **pins** the write's point to before B's response, and C's read of 0 then demands the write had *not* taken effect by a later time. The constraints contradict, and the history is out.

## Worked examples

**Example 1 — deciding three histories by hand.**

Notation: $W(v)[s, f]$ is a write of $v$ invoked at $s$ and returning at $f$; $R(v)[s,f]$ is a read returning $v$. The register starts at 0.

**History 1:** $A{:}\,W(1)[0,2]$, $B{:}\,R(0)[3,5]$.

$A$'s write **returned at 2**, and $B$'s read **began at 3**. Real time forces the write's point before the read's. But the read returned 0, the pre-write value. **Not linearizable.**

Note how little is required for the verdict: one completed write and one later read of a stale value. This is the shape of every "I wrote it and then couldn't read it back" bug, and it is the single most common way an eventually consistent store surprises someone.

**History 2:** $A{:}\,W(1)[0,4]$, $B{:}\,R(1)[2,3]$, $C{:}\,R(1)[5,7]$.

$B$'s read overlaps the write, so the two may be ordered either way — and since $B$ returned 1, we order the write first, placing its point somewhere in $[2,3]$'s overlap. $C$ starts at 5, after everything, and returns 1, which is consistent. **Linearizable**, by the order $W(1), R(1), R(1)$.

**History 3:** $A{:}\,W(1)[0,4]$, $B{:}\,W(2)[2,6]$, $C{:}\,R(2)[7,9]$, $D{:}\,R(1)[10,12]$.

Work the constraints in order.

1. Both writes return before $C$ is invoked — $W(1)$ at 4 and $W(2)$ at 6, against $C$'s invocation at 7. So **both** writes' points precede $C$'s point, and $C$ returning 2 means $W(2)$ is the later of the two.
2. $C$ returns at 9 and $D$ is invoked at 10, so $D$'s point follows $C$'s. **No write's interval reaches past 6**, so no write can be placed between the two reads.
3. Therefore $D$ must return whatever $C$ returned, namely 2. It returns 1.

**Not linearizable**, and the slogan is: a write cannot become the latest write again after being superseded.

**Example 2 — why a quorum read alone is not linearizable.**

Three replicas, $R + W > N$ with $N = 3$, $W = 2$, $R = 2$ — the configuration [`databases` 4.6](../../databases/lessons/04-06-nosql-and-distributed-data.md) calls strongly consistent.

1. A client writes $x = 1$. Replicas 1 and 2 acknowledge; the write **returns**. Replica 3 is slow and still holds $x = 0$.
2. Client $B$ reads. It contacts replicas 1 and 3, sees $\{1, 0\}$, takes the one with the higher version, and returns **1**. Correct.
3. Client $C$ reads *after* $B$ returned. It contacts replicas 2 and 3, sees $\{1, 0\}$, returns **1**. Also correct.

So far so good. Now a different run.

1. A client writes $x = 1$. The write reaches replica 1 and **has not yet reached replica 2** — it is still in flight, so the write has **not returned**.
2. Client $B$ reads replicas 1 and 3, sees $\{1, 0\}$, returns **1**.
3. Client $C$ reads replicas 2 and 3 — neither has the write yet — sees $\{0, 0\}$, returns **0**.

$B$ returned 1 before $C$ was invoked, and $C$ returned 0. **Not linearizable.** And the quorum condition was satisfied at every step: both reads contacted two of three replicas.

**The point is that $R + W > N$ guarantees a read overlaps a *completed* write, and says nothing about a write still in progress.** During the window where a write has reached some replicas and not yet returned, successive reads can go forwards and then backwards. The standard fix is **read repair with write-back**: a reader that sees a newer version at one replica writes it back to a quorum *before returning*, which pins the value and makes the next read see it. That is the ABD register construction, and [2.6](02-06-quorum-systems.md) builds it properly — the lesson to carry here is that **quorums give you a strong read, not a linearizable one, until the reader also writes.**

## Watch out

- **You might think linearizability is about ordering *all* operations.** It constrains only operations that do not overlap. Two concurrent operations may be linearized in either order, and a system that always resolves them the same way is *permitted*, not *required*, to do so.
- **You might think it requires synchronized clocks.** It is defined using real time but implemented without it. Nothing in a linearizable system reads a clock to decide correctness — the definition is a specification an external observer could check, not a mechanism.
- **You might think "strongly consistent" always means linearizable.** The phrase is used for at least three different guarantees in different products. When it matters, ask the operational question instead: *if I write and get an acknowledgement, and then a different client starts a read, is that client guaranteed to see my write?* Linearizability is exactly yes; everything weaker is some form of "usually".

## One-liner

> Linearizability says every operation can be pinned to a single instant inside its own interval so that the whole system reads like one machine — and its teeth are that an operation which has already returned is in the past for everybody, with no window of staleness anywhere.

## Problems

**P1 (🟢)** A register starts at 0. For each history, state whether it is linearizable, and if not, give the two operations whose constraints conflict.

(a) $A{:}\,W(5)[0,3]$, $B{:}\,R(5)[4,6]$
(b) $A{:}\,W(5)[0,3]$, $B{:}\,R(0)[1,2]$
(c) $A{:}\,W(5)[0,3]$, $B{:}\,R(0)[4,6]$
(d) $A{:}\,W(5)[0,8]$, $B{:}\,R(5)[2,4]$, $C{:}\,R(0)[5,7]$

**P2 (🟡)** A register starts at 0. Four clients run:

$$A{:}\,W(1)[0,6], \quad B{:}\,W(2)[4,10], \quad C{:}\,R(2)[7,9], \quad D{:}\,R(1)[11,13]$$

(a) List every pair of operations ordered by real time, and every pair that overlaps.
(b) State whether the history is linearizable, and give the linearization order if it is or the contradiction if it is not.
(c) Change **exactly one returned value** to make the history linearizable, and give the resulting linearization order with a valid point for each operation.
(d) State what the original history tells you about the system that produced it, in one sentence.

**P3 (🔴, optional)** A three-replica store uses $N = 3$, $W = 2$, $R = 2$ and no read repair.

(a) Give an ordered step list, naming which replicas each operation contacts, in which two non-overlapping reads return 1 and then 0, with no replica failing.
(b) State which clause of the linearizability definition your history violates.
(c) The team adds read repair: a reader that observes a stale replica writes the newer value back to it, **after** returning the value to the client. State whether this fixes (a), with the reason.
(d) Give the change that does fix it, and state the cost it adds to every read.

<details>
<summary>Solutions</summary>

**P1**

(a) **Linearizable.** The write returns at 3, the read begins at 4, and the read returns the written value. Order: $W(5)$ then $R(5)$, points anywhere in $[0,3]$ and $[4,6]$.

(b) **Linearizable.** The read $[1,2]$ lies *inside* the write's interval $[0,3]$, so they overlap and may be ordered either way. Order them $R(0)$ then $W(5)$: the read's point at 1.5, the write's at 2.5. A read returning the old value during a write is entirely legal.

(c) **Not linearizable.** The conflicting pair is $W(5)$ and $R(0)$: the write **returned at 3**, the read **began at 4**, so real time forces the write's point earlier — and then the read cannot return the pre-write value.

(d) **Not linearizable.** The conflicting pair is $B{:}\,R(5)$ and $C{:}\,R(0)$. $B$ returned 5, which pins $W(5)$'s point before $B$'s response at 4. $C$ begins at 5, strictly after, and returns 0 — requiring the write not to have taken effect by then. A value cannot be written and then un-written.

Note that the write is still in progress at $C$'s read (it returns at 8), which feels like it should grant freedom — and it does not. The freedom was already spent: $B$ observed the write, so its point is fixed in the past.

**P2**

(a) Real-time ordered pairs ($a$ returns before $b$ is invoked):

| pair | reason |
|---|---|
| $A \to C$ | $A$ returns 6, $C$ begins 7 |
| $A \to D$ | 6 before 11 |
| $B \to D$ | $B$ returns 10, $D$ begins 11 |
| $C \to D$ | $C$ returns 9, $D$ begins 11 |

Overlapping pairs: $A$ and $B$ (intervals $[0,6]$ and $[4,10]$ share $[4,6]$), and $B$ and $C$ ($[4,10]$ and $[7,9]$).

(b) **Not linearizable**, and the argument is three lines.

1. $C$ returns 2, so $W(2)$'s point precedes $C$'s point. $W(1)$'s interval ends at 6, before $C$ begins at 7, so $W(1)$'s point precedes $C$'s point too. **Both writes are already in effect when $C$ reads**, and $C$ reading 2 means $W(2)$ is the later of the two.
2. $C$ returns at 9 and $D$ is invoked at 11, so $D$'s point follows $C$'s point. **No write's interval extends past 10**, so no write can be placed between them.
3. With no write in between, $D$ must return whatever $C$ returned. $C$ returned 2; $D$ returned 1.

**The conflicting pair is $C{:}\,R(2)$ and $D{:}\,R(1)$**, and the general form is the one from Example 1: once a value has been superseded and someone has observed the successor, no later read can see the old value again.

(c) Change $D$'s return from 1 to **2**.

Linearization order and points:

| operation | point |
|---|---|
| $A{:}\,W(1)$ | 3 |
| $B{:}\,W(2)$ | 5 |
| $C{:}\,R(2)$ | 8 |
| $D{:}\,R(2)$ | 12 |

Every point lies inside its own interval, the real-time order of (a) is respected, and the sequence $W(1), W(2), R(2), R(2)$ is legal for a register.

**The other single-value fix is to change $C$'s return to 1**, giving the order $W(2), W(1), R(1), R(1)$ with points at 4.5, 5.5, 8 and 12. This one is worth checking carefully, because it linearizes the two writes in the *opposite* order to the one their invocation times suggest — and that is legal precisely because $A$ and $B$ overlap on $[4,6]$, so real time does not order them. **Overlapping writes may be committed in either order; a reader who has seen one of them is what fixes it.**

(d) **The system let a client observe a value that had already been superseded by a write another client had observed** — in one sentence, a read went backwards in time, which means the store is not linearizable and a client cannot rely on "once anyone has seen the new value, nobody sees the old one".

**P3**

*Accept criterion for (a): any step list in which a write is in progress (not yet returned), one read's quorum happens to include a replica that has it, and a strictly later read's quorum happens to include only replicas that do not. Which replicas are named is free.*

(a)

1. Replicas $r_1, r_2, r_3$ all hold $x = 0$ at version 0.
2. Client $P$ invokes $W(1)$. Its update reaches $r_1$, which stores $x = 1$ at version 1. The updates to $r_2$ and $r_3$ are delayed in the network. **$P$'s write has not returned** — it is still waiting for its second acknowledgement.
3. Client $B$ invokes a read, contacts $\{r_1, r_3\}$, sees version 1 with value 1 and version 0 with value 0, takes the higher version, and **returns 1**.
4. $B$'s read returns. Client $C$ then invokes a read, contacts $\{r_2, r_3\}$, sees version 0 at both, and **returns 0**.
5. The delayed updates land, $P$'s write collects its second acknowledgement, and returns.

No replica failed, both reads met $R = 2$, and the write will meet $W = 2$.

(b) It violates the **real-time order** clause: $B$'s response precedes $C$'s invocation, so $<_H$ requires $B$'s linearization point to precede $C$'s. $B$ returning 1 pins $W(1)$ before $B$'s point; $C$ returning 0 requires $W(1)$ to be after $C$'s point. The two demands are contradictory, so no legal sequential order exists.

(c) **It does not fix it.** Repairing *after* returning leaves the window open: in step 4, $C$ contacts $\{r_2, r_3\}$ before $B$'s repair has reached either of them, and returns 0 exactly as before. The repair improves convergence and shrinks the window; it does not close it, because the client has already been told an answer that the repair then contradicts.

This is a general pattern worth naming: **any fix that runs after the response cannot restore a real-time property**, because the response is the event the property is about.

(d) **Repair before returning**: the reader, on observing that its quorum disagrees, writes the winning version back to a write quorum and only then returns the value to the client. This is the read phase of the ABD register algorithm.

With it, $B$ cannot return 1 until version 1 is on two replicas, so $C$'s read quorum of any two replicas necessarily intersects those two and sees version 1. The history becomes linearizable.

**The cost is that every read becomes a potential write.** A read that finds disagreement performs a second round trip and a quorum write before answering, roughly doubling its latency and adding write load proportional to read load. Systems that want linearizable reads without this either route all reads through a leader holding a lease ([3.6](03-06-state-machine-replication.md)) or accept the weaker guarantee — and that choice, made explicitly, is what most of Module 2 is about.

</details>

## Flashback

**From Lesson 1.6 (consistent cuts and global snapshots):** Two processes $P$ and $Q$ run: $P$ has $p_1$, $p_2$ (send $m$ to $Q$), $p_3$ (send $m'$ to $Q$); $Q$ has $q_1$, $q_2$ (receive $m$), $q_3$ (receive $m'$).

(a) State whether the cut $\{p_1, p_2, p_3\}, \{q_1, q_2\}$ is consistent, and list the in-flight messages.
(b) State whether the cut $\{p_1, p_2\}, \{q_1, q_2, q_3\}$ is consistent, naming the violation if not.
(c) The channel $P \to Q$ is FIFO. State what Chandy–Lamport would record as the channel state for the cut in (a), and how it would know.

<details>
<summary>Solution</summary>

(a) **Consistent.** Both message sends ($p_2$, $p_3$) are inside the cut; $m$'s receive ($q_2$) is inside and $m'$'s receive ($q_3$) is outside. Nothing crosses right to left.

**In flight: $m'$** — sent at $p_3$, not yet received.

(b) **Inconsistent.** The cut contains $q_3$, the receipt of $m'$, but not $p_3$, its send. A message is recorded as received that was never sent.

(c) Chandy–Lamport would record the state of channel $P \to Q$ as $\{m'\}$.

How it knows: $P$ records its own state at the moment corresponding to this cut and immediately sends a **marker** on $P \to Q$, before any further application message. $Q$, having recorded its own state after receiving $m$ but before receiving $m'$, then counts every application message arriving on that channel until the marker appears. Because the channel is FIFO and $m'$ was sent before the marker, $m'$ arrives first and is counted; the marker then closes the channel state at exactly $\{m'\}$.

The FIFO requirement is what makes this work — on a reordering channel $m'$ could arrive after the marker and be silently dropped from the snapshot, losing a message that was genuinely in flight.

</details>

## Connections

- **Backward:** the real-time constraint is the one thing [1.4](01-04-physical-clocks-and-synchronization.md) said no node can observe, which is why linearizability is a specification rather than an algorithm — and why every implementation of it substitutes a quorum or a leader for the clock.
- **Forward:** [2.2](02-02-sequential-causal-and-session-consistency.md) removes the real-time constraint and keeps the rest, producing sequential consistency; [2.6](02-06-quorum-systems.md) builds Example 2's fix properly; and [3.5](03-05-the-cap-theorem-and-pacelc.md) shows that during a partition you must abandon linearizability or availability, with this definition as the one being abandoned.
- **Sideways:** the sequential specification here plays the role that [`databases` 4.2](../../databases/lessons/04-02-serializability-and-precedence-graphs.md)'s serial schedule plays for transactions, and the two guarantees are genuinely different: serializability is about *multi-object transactions* in some serial order with no real-time requirement, linearizability is about *single objects* with one. A system offering both — strict serializability — is paying for both, which is why it is the most expensive guarantee on offer.

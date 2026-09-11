# Distributed Systems · Lesson 1.6: Consistent cuts and global snapshots

> ⏱ ~15 min · Module 1: Models, Time, and Global State · Builds on: [1.5 (logical time)](01-05-logical-time-lamport-and-vector-clocks.md) · Unlocks: [1.7 (ordered broadcast)](01-07-ordered-broadcast-fifo-causal-total.md), [3.6 (state-machine replication)](03-06-state-machine-replication.md)

## Why this matters

[1.1](01-01-why-distributed-systems-are-hard.md) said a distributed system has no global state, and left it there. But you keep needing one. Has the computation finished? Is the cluster deadlocked? Does the ledger still balance? Every one of those is a question about the state of *all* the machines at *one* moment — and there is no such moment.

What Chandy and Lamport showed in 1985 is that you can take a photograph anyway. The photograph will not correspond to any instant that actually occurred, and — this is the surprising part — that turns out not to matter. It is a state the system *could* have been in, which is enough to answer a large and useful class of questions. Checkpointing, distributed garbage collection, deadlock detection and termination detection are all this algorithm wearing different hats.

## The idea

A **cut** is the obvious thing: pick a point on each process's timeline and take everything before it. Each process records its own state at its own moment, and the collection of those records is your snapshot.

Most such collections are garbage. Suppose P sends a message and Q receives it. If your cut includes Q's *receive* but excludes P's *send*, you have recorded a state in which a message exists that nobody ever sent. No execution of the system, ever, passes through that state. The snapshot is not merely imprecise; it is a description of an impossible world, and any conclusion drawn from it is worthless.

The condition that rules this out is exactly [1.5](01-05-logical-time-lamport-and-vector-clocks.md)'s happens-before. **A cut is consistent when it is closed under $\to$**: if an event is in the cut, everything that could have caused it is in the cut too. Equivalently, and more usefully for eyeballing a diagram: **no message may cross the cut from right to left** — from outside the cut into it.

The reverse crossing is fine and is where the second idea lives. A message sent inside the cut and received outside it is **in flight** at the moment of the snapshot. It is part of the system's state, it is sitting in a channel, and a snapshot that records only the nodes has lost it. So a complete snapshot is *node states plus channel states*, and the whole cleverness of Chandy–Lamport is a trick for capturing the channel states without stopping anything.

The trick is a **marker** message. When a process takes its own snapshot, it immediately sends a marker down every outgoing channel — before any further application message. The marker is a fence: everything a receiver got on that channel *before* the marker was in flight at snapshot time, and everything after it was not. Receivers record what arrives between snapshotting themselves and seeing each marker, and that recording *is* the channel state.

## The formal version

> **Cut.** Given processes $p_1, \dots, p_n$, a cut is a tuple $(c_1, \dots, c_n)$ where $c_i$ is a prefix of $p_i$'s event sequence. The cut's event set is $C = \bigcup_i c_i$.

> **Consistent cut.** $C$ is consistent when it is *left-closed* under happens-before:
> $$e \in C \ \text{ and } \ f \to e \implies f \in C.$$

In words: everything in the snapshot's causal past is also in the snapshot. A cut fails exactly when it contains a receive whose send it excludes.

> **In-flight messages.** For a consistent cut $C$, the state of the channel from $p_i$ to $p_j$ is the set of messages whose send is in $C$ and whose receive is not.

> **Chandy–Lamport snapshot** (assuming FIFO channels and no message loss).
>
> 1. **Initiation.** Some process records its own state, then sends a marker on every outgoing channel before sending any further application message.
> 2. **On receiving a marker on channel $c$:**
>    - *if this is the first marker this process has seen*: record its own state, record the state of $c$ as **empty**, and send markers on all its outgoing channels before any further application message;
>    - *otherwise*: record the state of $c$ as exactly the application messages received on $c$ since this process recorded its own state.
> 3. **Termination.** A process is done when it has received a marker on every incoming channel. The snapshot is the union of all recorded node and channel states.

> **Theorem.** The recorded snapshot is a consistent cut. Moreover if $S_{\text{init}}$ is the state at the start of the algorithm and $S_{\text{final}}$ the state when it completes, the recorded state $S^*$ is **reachable from $S_{\text{init}}$**, and $S_{\text{final}}$ **is reachable from $S^*$**.

In words: the snapshot sits somewhere on *a* legal path between where the system was and where it ended up — possibly not the path it actually took, but a path it could have taken. That is the precise sense in which the photograph is trustworthy.

> **Stable property.** A predicate $\Phi$ on global states such that once $\Phi$ holds, it holds in every subsequent state.

Termination, deadlock, and "the token has been lost" are stable; "queue length exceeds 10" is not. **A snapshot decides stable properties correctly**: if $\Phi$ holds in $S^*$ then it holds in $S_{\text{final}}$ (since $S_{\text{final}}$ is reachable from $S^*$), and if $\Phi$ does not hold in $S^*$ then it did not hold in $S_{\text{init}}$. Unstable properties get no such guarantee — the snapshot may report a queue length that was never observed by anybody.

**Why FIFO channels are required.** The marker's job is to be a fence, and a fence works only if nothing overtakes it. On a non-FIFO channel an application message sent before the marker can arrive after it, and it would be wrongly excluded from the channel state. Variants exist for non-FIFO channels; they work by tagging every message rather than by fencing.

## Picture

![A space-time diagram with three lifelines P, Q and R, each carrying four events, a message a from P's second event to Q's second event, and a message b from Q's third event to R's third event. Two dashed cut lines zigzag down through all three lifelines. The first includes P's first three events, Q's first event and R's first two, and no message crosses it from right to left. The second includes P's first event, Q's first three and R's first two, and message a crosses it backwards because the cut contains the receipt of a without its send.](assets/01-06-fig1.svg)

Trace message $a$ against each line. Against the consistent cut it goes **left to right** — sent inside, received outside — so it is in flight, and a complete snapshot records it as channel state. Against the inconsistent cut it goes **right to left**, which is the visual signature of impossibility: the snapshot claims Q has received something P has not yet sent.

## Worked examples

**Example 1 — the bank audit, and where the money goes.**

Two branches, $A$ and $B$, each holding 100. $A$ transfers 50 to $B$; the money leaves $A$ immediately and arrives at $B$ some time later. The invariant is that the total is always 200.

**Cut 1: record $A$ after the send, $B$ before the receipt.** This is consistent — the only message crosses left to right. The node states are $A = 50$, $B = 100$, summing to **150**.

The audit appears to have lost 50, and it has not: the 50 is **in the channel**, and the snapshot is incomplete rather than wrong. Adding the channel state restores the invariant:

$$50 + 100 + \underbrace{50}_{\text{in flight}} = 200 \quad\checkmark$$

**This is why a snapshot is node states *plus* channel states, and it is the single most common thing people leave out.** Without the channel term, a perfectly correct snapshot of a perfectly correct system reports missing money.

**Cut 2: record $A$ before the send, $B$ after the receipt.** The node states are $A = 100$, $B = 150$, summing to **250**.

Now 50 has been *created*, and no bookkeeping fixes it, because there is nothing to add: the channel is empty in this cut — the message was received, not in flight. The cut is **inconsistent**: it contains $B$'s receive without $A$'s send, so it describes a state in which $B$ was paid by nobody. The system was never in it and never could be.

**The asymmetry is the lesson.** A consistent cut can *look* wrong, and the fix is more bookkeeping. An inconsistent cut is wrong, and there is no fix.

**Example 2 — running the markers on a three-node ring.**

Processes $P \to Q \to R \to P$, each with one outgoing and one incoming channel, FIFO.

1. **$P$ initiates.** It records its own state, then immediately sends a marker on $P \to Q$. Note the ordering requirement: the marker must go out before any further application message, or that message would land on the wrong side of the fence.
2. **$P$ then sends application message $m_1$ to $Q$** — after the marker, so $m_1$ is *not* part of the snapshot's channel state.
3. **Meanwhile $R$ sends $m_2$ to $P$.** $P$ has already recorded its state, and $m_2$ arrives on channel $R \to P$ *before* any marker does. So $P$ records $m_2$ as the state of channel $R \to P$: it was in flight at snapshot time, which is exactly right.
4. **$Q$ receives $P$'s marker.** First marker, so $Q$ records its own state, records channel $P \to Q$ as **empty** — nothing arrived on it between $Q$'s snapshot and the marker, because the marker *was* the first thing — and forwards a marker on $Q \to R$.
5. **$R$ receives $Q$'s marker**, does the same, and forwards a marker on $R \to P$.
6. **$P$ receives $R$'s marker.** Not its first, so it records channel $R \to P$ as the messages received on it since $P$ snapshotted — namely $\{m_2\}$, as collected in step 3.
7. Every process has now seen a marker on its one incoming channel. **Done.**

The recorded global state is: $P$, $Q$ and $R$'s local states at their respective recording moments, channels $P\to Q$ and $Q \to R$ empty, and channel $R \to P$ containing $m_2$.

**Nothing stopped.** No process was paused, no clock was consulted, and $m_1$ continued on its way throughout. The cost is $O(|E|)$ markers — one per channel — and the answer is a state the system could genuinely have been in.

## Watch out

- **You might think a consistent snapshot is a state the system actually passed through.** It generally is not. It is a state *reachable* from the start and *from which* the end is reachable — an interleaving that could have happened. For stable properties that is exactly as good; for anything else it is not, and "our monitoring took a global snapshot and saw a queue depth of 40" is a claim about a possible world, not an observed one.
- **You might think a snapshot is just the node states.** Leave out the channels and a system in perfect health reports a broken invariant, as Example 1 shows. The in-flight messages are state, and they are usually the hardest state to get at.
- **You might think the markers can be sent lazily.** The rule "send markers on all outgoing channels **before** any further application message" is load-bearing. Send one application message first and the receiver counts it as in-flight-at-snapshot-time when it was not, and the snapshot double-counts it — once in the sender's post-snapshot state and once in the channel.

## One-liner

> You cannot photograph a distributed system at an instant, but you can assemble a photograph that is internally consistent — no effect without its cause, every in-flight message accounted for — and that turns out to be enough to answer any question whose answer, once true, stays true.

## Problems

**P1 (🟢)** Three processes run: P has events $p_1, p_2 (\text{send } m \text{ to } Q), p_3$; Q has $q_1, q_2 (\text{receive } m), q_3 (\text{send } n \text{ to } R)$; R has $r_1, r_2, r_3 (\text{receive } n)$.

For each cut below, state whether it is consistent, and if not, name the specific send-receive pair that violates the condition.

(a) $\{p_1, p_2\},\ \{q_1\},\ \{r_1, r_2\}$
(b) $\{p_1\},\ \{q_1, q_2\},\ \{r_1\}$
(c) $\{p_1, p_2, p_3\},\ \{q_1, q_2, q_3\},\ \{r_1, r_2\}$
(d) For each consistent cut above, list the messages in flight.

**P2 (🟡)** A distributed ledger has three nodes holding 400, 250 and 350. A snapshot taken by Chandy–Lamport records node states 400, 180 and 350, with channel $B \to C$ holding one message of value 70 and all other channels empty.

(a) Give the total the snapshot accounts for, and state whether the ledger's invariant holds.
(b) State what the snapshot would have totalled had channel states been omitted, and what an auditor would wrongly conclude.
(c) A second run of the audit reports node states 400, 250 and 420 with all channels empty. State whether this is a possible Chandy–Lamport output, with the reason.
(d) Name one property of this ledger that a snapshot can decide correctly and one it cannot, with a one-clause reason for each.

**P3 (🔴, optional)** A four-node cluster runs a task system in which a node holding work may send some of it to an idle peer. The team wants to detect **termination**: every node idle and no work in transit.

(a) State why checking "all four nodes report idle" is insufficient, giving a concrete two-node scenario as an ordered step list.
(b) State whether termination is a stable property, and what that buys for snapshot-based detection.
(c) The team implements Chandy–Lamport but drops the rule that markers must be sent before any further application message. Give an ordered step list in which the resulting snapshot reports termination while work is still in progress.
(d) The cluster's channels are not FIFO. Give the specific way this breaks the algorithm, and state what must be added to the messages to repair it.

<details>
<summary>Solutions</summary>

**P1**

(a) **Consistent.** The only message whose receive could be at issue is $m$, and the cut contains its send ($p_2$) but not its receive ($q_2$) — a left-to-right crossing, which is permitted. Message $n$ is entirely outside the cut.

(b) **Inconsistent.** The violating pair is **$p_2$ (send of $m$) and $q_2$ (receive of $m$)**: the cut contains $q_2$ but not $p_2$, so it records a message received that was never sent.

(c) **Consistent.** Check both messages. $m$: send $p_2$ in, receive $q_2$ in — both sides included, fine. $n$: send $q_3$ in, receive $r_3$ out — left to right, fine. Nothing crosses backwards.

(d) In flight for (a): **$m$** — sent at $p_2$, not yet received. In flight for (c): **$n$** — sent at $q_3$, not yet received at $r_3$. (Cut (b) is inconsistent, so the question does not arise.)

**P2**

(a) $400 + 180 + 350 + 70 = \mathbf{1000}$.

The initial total is $400 + 250 + 350 = 1000$, so **the invariant holds**. Node $B$ is recorded at 180 because it had already sent 70 away; that 70 is sitting in the channel to $C$, which the snapshot captured.

(b) Without channel states the snapshot totals $400 + 180 + 350 = \mathbf{930}$.

The auditor would wrongly conclude that **70 has been lost** and that the ledger is broken — when in fact the ledger is fine and the *audit* is incomplete. This is the single most common snapshot bug, and note how convincing the wrong answer is: three healthy nodes, a clean report, and a number that does not add up.

(c) **Not a possible output.**

$C = 420$ means $C$'s recorded state is *after* it received the 70. $B = 250$ means $B$'s recorded state is *before* it sent the 70. So the cut contains the **receive without the send** — precisely the violating pattern — and it is inconsistent. Chandy–Lamport provably produces only consistent cuts, so it cannot report this.

The arithmetic corroborates: $400 + 250 + 420 = 1070 \ne 1000$, with 70 counted twice. **Money created, in the manner of Example 1's Cut 2, and no channel bookkeeping can remove it** — the channels are empty because the message really was delivered.

One caution about using the total as the test. A balancing total is not evidence of consistency, and an imbalanced one is not evidence of inconsistency: Example 1's *consistent* Cut 1 totalled 150. **Check the cut condition; the arithmetic is a corroborating signal, not the criterion.**

(d) **Can decide correctly:** "the ledger total is not 1000", or "node $A$ has been permanently removed" — **stable** properties, true forever once true, so a snapshot that sees them proves the final state has them too.

**Cannot decide correctly:** "node $B$'s balance dropped below 200 at some point" or "no node ever held more than 500" — **unstable** properties about transient values. The snapshot reports a state the system may never have occupied, so a threshold crossing it reports may never have happened, and one it misses may still have.

**P3**

*Accept criterion for (a) and (c): any ordered step list in which every node is idle at some moment while work is still in transit. The specific counts are free.*

(a) "All four report idle" misses work sitting in a channel.

1. Node $A$ holds the last unit of work; nodes $B$, $C$, $D$ are idle.
2. $A$ sends the work to $B$ and immediately becomes idle.
3. The detector polls. $A$ reports idle (it just finished handing off), and $B$, $C$, $D$ report idle (the work has not arrived yet).
4. **The detector declares termination.** All four nodes are genuinely idle at this moment.
5. The work arrives at $B$, which starts computing.

Termination was declared while a unit of work was in flight. **Node states alone are never enough; the channels are part of the state.**

(b) **Termination is stable.** Once every node is idle and no work is in transit, no node can produce work — work is only ever created by a node doing work — so the condition persists forever.

What this buys: if the snapshot's global state satisfies "all idle and all channels empty", then since $S_{\text{final}}$ is reachable from $S^*$ and the property is stable, **the system really has terminated**, even though $S^*$ may not be a state the system passed through. A snapshot-based detector is therefore correct, not merely heuristic — which is exactly the guarantee an unstable property would not give.

(c) Dropping the marker-ordering rule, with $A$ initiating:

1. $A$ records its own state: idle.
2. $A$ receives a unit of work from nowhere in particular — say it was already queued — and **sends it to $B$** on channel $A \to B$.
3. **Only now** does $A$ send its marker on $A \to B$. (This is the violated rule.)
4. $B$ receives the work first, since the channel is FIFO and the work was sent first. $B$ has not yet snapshotted, so it processes it and finishes, becoming idle again.
5. $B$ receives the marker, records its state — **idle** — and records channel $A \to B$ as empty, since nothing arrived on it *after* $B$ recorded its state.
6. Markers propagate; every node records idle and every channel empty.

**The snapshot reports termination.** But at the recorded instant on $A$'s timeline, the work unit existed and was about to be sent. It was counted nowhere: not in $A$'s state (recorded before the send), not in the channel (recorded as empty by $B$), not in $B$'s state (recorded after $B$ finished it). The cut is inconsistent, and the algorithm's guarantee is void.

(d) **Non-FIFO channels destroy the marker's role as a fence.** An application message sent *before* the marker can overtake it and arrive *after* it. The receiver then sees the marker, closes the channel state, and the late message is excluded — yet it was in flight at snapshot time, so it is lost from the global state exactly as in (c).

**The repair is to tag every application message with a snapshot epoch number** — a colour. Each process carries a colour (white before snapshotting, red after), stamps every message it sends with its current colour, and records as channel state precisely the *white* messages it receives after it has turned red. Order no longer matters, because each message carries the information the fence was supplying positionally. The cost is a tag on every message rather than one marker per channel, which is why the FIFO version is preferred where FIFO is available — and TCP gives it to you per connection.

</details>

## Flashback

**From Lesson 1.5 (logical time):** Two processes $S$ and $T$ run: $S$ has $s_1$ (local), $s_2$ (send $u$ to $T$), $s_3$ (receive $v$); $T$ has $t_1$ (send $v$ to $S$), $t_2$ (receive $u$), $t_3$ (local).

(a) Give the vector timestamp of every event, coordinates ordered $(S, T)$.
(b) State whether $s_2$ and $t_1$ are concurrent, with the comparison.
(c) Give the Lamport timestamps of $s_3$ and $t_3$, and state what their comparison does and does not establish.

<details>
<summary>Solution</summary>

(a) The two messages cross, which is what makes this interesting.

| event | computation | vector |
|---|---|---|
| $s_1$ | S increments | $(1,0)$ |
| $s_2$ | S increments | $(2,0)$ |
| $t_1$ | T increments | $(0,1)$ |
| $t_2$ | receives $u$ carrying $(2,0)$: max with $(0,1)$ is $(2,1)$, then T++ | $(2,2)$ |
| $t_3$ | T increments | $(2,3)$ |
| $s_3$ | receives $v$ carrying $(0,1)$: max with $(2,0)$ is $(2,1)$, then S++ | $(3,1)$ |

Note $v$ was sent at $t_1$, so it carries $(0,1)$ — not $T$'s later state. **A message carries the sender's vector at the moment of sending**, which is the whole reason crossing messages do not create a false ordering.

(b) **Concurrent.** $V(s_2) = (2,0)$ and $V(t_1) = (0,1)$: the $S$ coordinate gives $2 > 0$ and the $T$ coordinate gives $0 < 1$, so neither dominates.

This is right by construction — each was sent before its sender had heard anything from the other.

(c) Lamport: $L(s_1) = 1$, $L(s_2) = 2$; $L(t_1) = 1$, $L(t_2) = \max(1,2)+1 = 3$, $L(t_3) = 4$; $L(s_3) = \max(2,1)+1 = \mathbf{3}$.

So $L(s_3) = 3 < 4 = L(t_3)$.

**What it establishes:** nothing about the order of $s_3$ and $t_3$. The vectors are $(3,1)$ and $(2,3)$ — incomparable, so the two events are **concurrent**.

**What it does establish** is the contrapositive: since $L(t_3) > L(s_3)$, it is *not* the case that $t_3 \to s_3$. The clock condition says causal precedence forces a strictly smaller number, so a larger-or-equal number rules causal precedence out in that direction. **Lamport clocks are useful for what they forbid, not for what they assert.**

</details>

## Connections

- **Backward:** consistency of a cut is [1.5](01-05-logical-time-lamport-and-vector-clocks.md)'s happens-before, used as a closure condition. A cut is consistent exactly when its event set is a *down-set* of the happens-before partial order.
- **Forward:** [3.6](03-06-state-machine-replication.md) takes periodic snapshots of a replicated state machine so the consensus log can be truncated, and the reachability guarantee here is what makes a snapshot a legitimate replacement for the prefix of the log it replaces.
- **Sideways:** [`operating-systems` 4.3](../../operating-systems/lessons/04-03-crash-consistency-and-journaling.md) faces the identical problem inside one machine — capturing a consistent file-system image while writes are in progress — and reaches for the same two tools, a fence and a record of what was in flight. [`databases` 4.5](../../databases/lessons/04-05-recovery-write-ahead-logging-and-aries.md)'s fuzzy checkpoint is a snapshot that does not stop the system, for exactly these reasons.
- **Sideways:** the down-set characterisation makes this a statement about order theory ([`discrete-mathematics` 2.2](../../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md)): the consistent cuts of a run, ordered by inclusion, form a lattice, and moving through that lattice one event at a time is precisely enumerating the interleavings the system could have exhibited.

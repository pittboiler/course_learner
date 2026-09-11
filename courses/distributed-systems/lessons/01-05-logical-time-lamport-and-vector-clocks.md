# Distributed Systems · Lesson 1.5: Logical time

> ⏱ ~15 min · Module 1: Models, Time, and Global State · Builds on: [1.4 (physical clocks)](01-04-physical-clocks-and-synchronization.md) · Unlocks: [1.6 (consistent cuts)](01-06-consistent-cuts-and-global-snapshots.md), [2.2 (causal consistency)](02-02-sequential-causal-and-session-consistency.md), [2.3 (version vectors)](02-03-eventual-consistency-and-anti-entropy.md)

## Why this matters

[1.4](01-04-physical-clocks-and-synchronization.md) ended badly: clocks give you an ordering with an error bar, and inside the bar you are guessing. Lamport's insight in 1978 was to stop trying to fix the clocks and ask what "before" is actually *for*.

The answer is causality. When you say event $a$ happened before event $b$, the reason you care is almost always that $a$ could have **influenced** $b$. And influence, unlike time, is something a distributed system can track exactly — because influence travels only in messages, and messages are things the system itself sends.

This is one of the genuinely great ideas in computer science, it needs no hardware, and it is exactly right rather than approximately right. The price is that it orders fewer pairs of events, and learning which pairs it leaves unordered — and why that is a feature — is the content of this lesson.

## The idea

Forget clocks. Ask instead: could $a$ have affected $b$?

There are exactly two ways it could. Either $a$ and $b$ happened on the same machine with $a$ first, so $a$ is in $b$'s past on that machine; or $a$ was the sending of a message and $b$ was its receipt. Chain those together and you have everything.

That relation — call it **happens-before** — is a *partial* order, and the partiality is the honest part. Two events on different machines with no chain of messages between them are **concurrent**: neither could have influenced the other, so asking which came first is asking a question with no operational content. It may have a physical answer; nothing in the system depends on it.

Two mechanisms implement this.

A **Lamport clock** is one integer per process. Increment it on every event; stamp outgoing messages with it; on receipt, jump to one past the maximum of your counter and the message's. This gives you a number per event with the property that **if $a$ happens before $b$ then $L(a) < L(b)$**. Cheap, one integer, and the implication runs in exactly one direction — the converse is false, and that is the thing to hold on to.

A **vector clock** is one integer *per process*, held by every process. Increment your own entry on every event; send the whole vector; on receipt take the element-wise maximum and then increment your own. Now the comparison is exact: $a$ happens before $b$ **if and only if** $V(a) \le V(b)$ component-wise with at least one strict. If neither vector dominates the other, the events are concurrent, and you can read that straight off.

**The trade is size against precision.** Lamport gives you one number and a one-way implication; vectors give you $n$ numbers and an exact answer. Systems that only need to *not violate* causality use Lamport; systems that need to *detect* concurrency — which means every conflict-resolution scheme in Module 2 — must use vectors.

## The formal version

> **Happens-before ($\to$).** The smallest relation on events such that:
> 1. if $a$ and $b$ are on the same process and $a$ precedes $b$ in program order, then $a \to b$;
> 2. if $a$ is the send of a message and $b$ is its receive, then $a \to b$;
> 3. if $a \to b$ and $b \to c$ then $a \to c$.
>
> Events $a$ and $b$ are **concurrent**, written $a \parallel b$, when neither $a \to b$ nor $b \to a$.

In words: $\to$ is "could have influenced", and it is an irreflexive partial order — not a total one, because most pairs in a real system are simply unrelated.

> **Lamport clock.** Each process holds $C \in \mathbb{N}$, initially 0.
> - Before any event: $C \leftarrow C + 1$; the event's timestamp is the new $C$.
> - A message carries its sender's timestamp $t$.
> - On receiving $t$: $C \leftarrow \max(C, t) + 1$ before timestamping the receive.
>
> **Clock condition:** $a \to b \implies L(a) < L(b)$. The converse does **not** hold.

> **Vector clock.** Each process $i$ holds $V \in \mathbb{N}^n$, initially all zero.
> - Before any event at $i$: $V[i] \leftarrow V[i] + 1$.
> - A message carries the sender's whole vector $W$.
> - On receipt at $i$: $V[k] \leftarrow \max(V[k], W[k])$ for all $k$, then $V[i] \leftarrow V[i] + 1$.
>
> Define $V \le V'$ when $V[k] \le V'[k]$ for every $k$, and $V < V'$ when additionally $V \ne V'$. Then
> $$a \to b \iff V(a) < V(b), \qquad a \parallel b \iff V(a) \not\le V(b) \text{ and } V(b) \not\le V(a).$$

In words: the vector at an event records, for each process, **how many of that process's events are in this event's causal past**. Domination in every coordinate means "everything you know, I know, and more" — which is precisely what causal precedence means.

**Breaking Lamport ties for a total order.** Where an application needs *some* total order and does not care which, order by $(L(a), \text{process id})$ — lexicographically, with the process id as tiebreaker. This is a genuine total order and it **extends** happens-before, so it never contradicts causality. It also invents an order for concurrent events, which is fine if and only if the application genuinely does not care.

**The size problem.** A vector clock is $n$ integers for $n$ processes, and it is carried on **every message**. In a system with a fixed handful of replicas this is free; in a system where every client is a process it is not, which is why practical systems apply vectors to replicas (a **version vector**, [2.3](02-03-eventual-consistency-and-anti-entropy.md)) rather than to clients, and why compressed variants exist.

## Picture

![A space-time diagram with three process lifelines labelled P, Q and R, each carrying three events. Each event is annotated with its Lamport number and its three-component vector timestamp. A message m1 runs from P's second event to Q's second event, and a message m2 from Q's third event to R's second event. The events P3, with Lamport 3 and vector 3 comma 0 comma 0, and Q3, with Lamport 4 and vector 2 comma 3 comma 0, are highlighted: neither vector dominates, so they are concurrent, yet their Lamport numbers are strictly ordered.](assets/01-05-fig1.svg)

The highlighted pair is the whole point. Lamport says $3 < 4$ and it is not wrong — the clock condition only ever claimed the forward implication — but a program that reads $3 < 4$ as "P3 came first" has invented a fact. The vectors $(3,0,0)$ and $(2,3,0)$ are incomparable, and the correct reading is that these two events are unrelated.

## Worked examples

**Example 1 — running both clocks over the diagram, event by event.**

Take the run in the figure, with $n = 3$ processes ordered $(P, Q, R)$.

**P's three events** are local, so each just increments. Lamport $1, 2, 3$; vectors $(1,0,0)$, $(2,0,0)$, $(3,0,0)$. P has heard from nobody, so the other two coordinates stay zero — and that is already informative: **P3's vector says P knows nothing of Q or R**.

**Q1** is local: Lamport 1, vector $(0,1,0)$.

**Q2 receives $m_1$**, which P sent at its second event, carrying Lamport 2 and vector $(2,0,0)$.

- Lamport: $\max(1, 2) + 1 = 3$.
- Vector: element-wise max of $(0,1,0)$ and $(2,0,0)$ is $(2,1,0)$; then increment Q's own entry: $(2,2,0)$.

Read $(2,2,0)$ aloud: *two of P's events and two of Q's are in my past, none of R's.* That is exactly true.

**Q3** is a local send: Lamport 4, vector $(2,3,0)$.

**R1** is local: Lamport 1, vector $(0,0,1)$.

**R2 receives $m_2$**, sent by Q3 with Lamport 4 and vector $(2,3,0)$.

- Lamport: $\max(1,4)+1 = 5$.
- Vector: max of $(0,0,1)$ and $(2,3,0)$ is $(2,3,1)$, then increment R: $(2,3,2)$.

**R3**: Lamport 6, vector $(2,3,3)$.

Now compare **P3 $(3,0,0)$ against Q3 $(2,3,0)$**. Coordinate P: $3 > 2$. Coordinate Q: $0 < 3$. Neither dominates, so $P3 \parallel Q3$ — **concurrent**, confirmed by construction: the only message P ever sent left at P2, before P3 happened, so nothing P3 did can have reached Q.

And compare **P2 $(2,0,0)$ against R3 $(2,3,3)$**: $2 \le 2$, $0 \le 3$, $0 \le 3$, with strict somewhere, so $P2 \to R3$. The chain is $P2 \to Q2 \to Q3 \to R2 \to R3$ — four hops, read off in one comparison.

**Example 2 — the bug that vector clocks exist to prevent.**

A social app replicates comments. Alice posts "The build is broken." Bob reads it and replies "Fixed it." Carol's replica receives Bob's reply before Alice's post, and displays:

> Bob: Fixed it.
> Alice: The build is broken.

Nonsense, and the cause is that the replica delivered a message whose cause had not yet arrived.

**With Lamport timestamps you cannot detect this.** Suppose Alice's post carries $L = 7$ and Bob's reply $L = 12$. Carol sees 12 arrive first and 7 arrive second. She could sort by Lamport and get the right answer here — but she cannot *know* she is missing something, because a message with a smaller Lamport number may always still be in flight. **Sorting by Lamport requires waiting forever, or waiting a guess.**

**With vector clocks the check is exact.** Alice's post carries $V_A = (1,0,0)$ (Alice, Bob, Carol). Bob's reply carries $V_B = (1,1,0)$: it records that one of Alice's events is in its causal past.

Carol, holding $(0,0,0)$, receives Bob's reply first and applies the **causal-delivery rule**: deliver a message from process $j$ with vector $W$ only when

$$W[j] = V_{\text{Carol}}[j] + 1 \quad\text{and}\quad W[k] \le V_{\text{Carol}}[k] \ \text{for all } k \ne j.$$

Bob's message has $W[\text{Alice}] = 1 > 0 = V_{\text{Carol}}[\text{Alice}]$, so the second condition fails. **Carol buffers it.** Alice's post then arrives, satisfies the rule, is delivered, and Carol's vector becomes $(1,0,0)$ — at which point Bob's buffered message passes the test and is delivered.

The order on screen is now correct, and crucially Carol **knew** to wait rather than guessing. The two conditions say "this is the very next message I expect from $j$" and "I have already seen everything $j$ had seen when it sent". That is the whole of causal delivery, and [1.7](01-07-ordered-broadcast-fifo-causal-total.md) builds it into a proper broadcast abstraction.

## Watch out

- **You might think $L(a) < L(b)$ means $a$ happened before $b$.** It means *either* $a \to b$ *or* they are concurrent. The implication runs one way only, and every "sort by logical timestamp and take the latest" conflict resolution is quietly assuming the converse.
- **You might think concurrent means simultaneous.** It means causally unrelated. Two concurrent events can be an hour apart in physical time — they simply had no path of influence between them. Conversely, two events a microsecond apart with a message between them are strictly ordered.
- **You might think a vector clock tells you about wall-clock time.** It contains no time at all, only counts of events. It cannot say how long ago something happened, cannot expire stale data, and cannot be compared against a deadline. Systems that need both carry both — a hybrid logical clock is exactly a physical timestamp with a logical counter bolted on to break ties.

## One-liner

> Stop asking when things happened and start asking what could have influenced what: causality travels only in messages, messages are yours to stamp, and so the ordering you can actually compute is exact where the clock was only approximate — at the cost of admitting that most pairs of events are genuinely unordered.

## Problems

**P1 (🟢)** Two processes exchange messages. Process X's events in order: $x_1$ (local), $x_2$ (send $m$ to Y), $x_3$ (local). Process Y's events in order: $y_1$ (local), $y_2$ (local), $y_3$ (receive $m$).

(a) Give the Lamport timestamp of every event.
(b) Give the vector timestamp of every event, with coordinates ordered $(X, Y)$.
(c) List every pair of concurrent events.
(d) Give one pair that is concurrent but whose Lamport timestamps are strictly ordered, or state that none exists.

**P2 (🟡)** Three processes A, B, C run the following, with each process's events listed in program order:

- A: $a_1$ (send $p$ to B), $a_2$ (local), $a_3$ (receive $r$)
- B: $b_1$ (receive $p$), $b_2$ (send $q$ to C), $b_3$ (local)
- C: $c_1$ (local), $c_2$ (receive $q$), $c_3$ (send $r$ to A)

(a) Give the vector timestamp of every event, coordinates ordered $(A, B, C)$.
(b) List every event concurrent with $a_2$.
(c) Give the Lamport timestamps of $b_3$ and $c_3$, and state what the comparison between them wrongly suggests.
(d) State whether $a_1 \to c_3$, giving the chain or the dominating comparison that settles it.

**P3 (🔴, optional)** A key-value store replicates to three replicas and resolves conflicts by keeping the write with the larger Lamport timestamp, breaking ties by replica id.

(a) Construct a concrete two-write execution — as an ordered step list — in which this rule silently discards a write that was **not** overwritten by anything causally later. State the two Lamport timestamps.
(b) State what the vector timestamps of the two writes would be in your execution, and what a vector-clock-based store would do instead.
(c) The team argues that discarding is fine because "some write has to win." Give the precise circumstance in which that argument is correct, and the circumstance in which it destroys data.
(d) Give one kind of data for which last-writer-wins is genuinely safe, and one for which it is not, with a one-clause reason for each.

<details>
<summary>Solutions</summary>

**P1**

(a) X's events are all local except the send, which is still an ordinary event: $L(x_1) = 1$, $L(x_2) = 2$, $L(x_3) = 3$.

Y: $L(y_1) = 1$, $L(y_2) = 2$. Then $y_3$ receives $m$ carrying 2, so $L(y_3) = \max(2, 2) + 1 = \mathbf{3}$.

(b) $V(x_1) = (1,0)$, $V(x_2) = (2,0)$, $V(x_3) = (3,0)$.

$V(y_1) = (0,1)$, $V(y_2) = (0,2)$. For $y_3$: element-wise max of $(0,2)$ and the message's $(2,0)$ is $(2,2)$, then increment Y: $\mathbf{(2,3)}$.

(c) Compare each cross-process pair:

| pair | vectors | verdict |
|---|---|---|
| $x_1, y_1$ | $(1,0)$ vs $(0,1)$ | concurrent |
| $x_1, y_2$ | $(1,0)$ vs $(0,2)$ | concurrent |
| $x_1, y_3$ | $(1,0)$ vs $(2,3)$ | $x_1 \to y_3$ |
| $x_2, y_1$ | $(2,0)$ vs $(0,1)$ | concurrent |
| $x_2, y_2$ | $(2,0)$ vs $(0,2)$ | concurrent |
| $x_2, y_3$ | $(2,0)$ vs $(2,3)$ | $x_2 \to y_3$ |
| $x_3, y_1$ | $(3,0)$ vs $(0,1)$ | concurrent |
| $x_3, y_2$ | $(3,0)$ vs $(0,2)$ | concurrent |
| $x_3, y_3$ | $(3,0)$ vs $(2,3)$ | concurrent |

**Seven concurrent pairs:** $x_1\|y_1$, $x_1\|y_2$, $x_2\|y_1$, $x_2\|y_2$, $x_3\|y_1$, $x_3\|y_2$, $x_3\|y_3$.

Only two of the nine cross-process pairs are ordered, and both are ordered by the single message. **One message buys you two ordered pairs and leaves seven unordered** — which is a fair picture of how sparse causality is in a real system.

(d) **$x_3 \| y_3$ with $L(x_3) = 3$ and $L(y_3) = 3$** — a tie, not a strict order. Looking for a strictly ordered concurrent pair: $x_2\|y_1$ has $L = 2$ against $L = 1$, so **$y_1$ and $x_2$ are concurrent while Lamport puts $y_1$ strictly first**. Also $x_3\|y_2$: $3$ against $2$.

Either is a correct answer. The general fact: Lamport assigns a strict order to *most* concurrent pairs, and the ties are the accident, not the rule.

**P2**

(a) Work forward.

| event | computation | vector |
|---|---|---|
| $a_1$ | A increments | $(1,0,0)$ |
| $a_2$ | A increments | $(2,0,0)$ |
| $b_1$ | max$((0,0,0),(1,0,0))$ then B++ | $(1,1,0)$ |
| $b_2$ | B increments | $(1,2,0)$ |
| $b_3$ | B increments | $(1,3,0)$ |
| $c_1$ | C increments | $(0,0,1)$ |
| $c_2$ | max$((0,0,1),(1,2,0))$ then C++ | $(1,2,2)$ |
| $c_3$ | C increments | $(1,2,3)$ |
| $a_3$ | max$((2,0,0),(1,2,3))$ then A++ | $(3,2,3)$ |

(b) $a_2$ has vector $(2,0,0)$. Compare against each event on B and C:

- $b_1 = (1,1,0)$: $2 > 1$ but $0 < 1$ — **concurrent**.
- $b_2 = (1,2,0)$, $b_3 = (1,3,0)$: same shape — **concurrent**.
- $c_1 = (0,0,1)$: **concurrent**.
- $c_2 = (1,2,2)$, $c_3 = (1,2,3)$: A-coordinate 1 against 2, C-coordinate 0 against 2 — **concurrent** in both.

**Every event on B and C is concurrent with $a_2$: $b_1, b_2, b_3, c_1, c_2, c_3$ — six events.**

The reason is structural and worth stating: A's only outgoing message left at $a_1$, *before* $a_2$, and A's only incoming message arrived at $a_3$, *after* it. So $a_2$ sits in a causal gap — nothing it did reached anyone, and nothing anyone did had reached it.

(c) Lamport: A gives $1, 2$ for $a_1, a_2$. B: $b_1 = \max(0,1)+1 = 2$, $b_2 = 3$, $b_3 = \mathbf{4}$. C: $c_1 = 1$, $c_2 = \max(1,3)+1 = 4$, $c_3 = \mathbf{5}$.

$L(b_3) = 4 < 5 = L(c_3)$, which **wrongly suggests that $b_3$ causally precedes $c_3$**. It does not: $(1,3,0)$ and $(1,2,3)$ are incomparable — B's coordinate is 3 against 2, C's is 0 against 3 — so $b_3 \parallel c_3$. B's third event happened after B sent $q$, so nothing about it ever reached C.

(d) **Yes, $a_1 \to c_3$.**

By the chain: $a_1 \to b_1$ (message $p$), $b_1 \to b_2$ (program order), $b_2 \to c_2$ (message $q$), $c_2 \to c_3$ (program order).

By the vectors: $V(a_1) = (1,0,0) \le (1,2,3) = V(c_3)$ component-wise, with strict inequality in the B and C coordinates. One comparison replaces the four-hop chain, which is exactly what vectors are for.

**P3**

*Accept criterion for (a): any execution in which two writes to the same key are concurrent — neither in the other's causal past — and their Lamport timestamps differ. The specific values are free.*

(a) Two replicas, $R_1$ and $R_2$, both holding key `cart` for the same user, starting from a common state with Lamport clocks at 4 on $R_1$ and 6 on $R_2$.

1. The network partitions $R_1$ from $R_2$.
2. A client writes `cart = [book]` at $R_1$. $R_1$ stamps it $L = 5$.
3. A different client writes `cart = [lamp]` at $R_2$. $R_2$ stamps it $L = 7$.
4. The partition heals and the replicas exchange writes.
5. The rule compares $7 > 5$ and keeps `[lamp]`, discarding `[book]`.

**The two timestamps are 5 and 7.** Neither write saw the other — there was no message between them, by construction — so `[lamp]` did not overwrite `[book]` in any causal sense. The larger number reflects only that $R_2$'s counter happened to be further along.

(b) The vectors, with coordinates $(R_1, R_2)$ and a shared prior state of $(2,3)$: the `[book]` write is $(3,3)$ and the `[lamp]` write is $(2,4)$. **Neither dominates** — $3 > 2$ in the first coordinate, $3 < 4$ in the second — so a vector-based store detects the conflict rather than resolving it.

What it does instead is **keep both versions as siblings** and surface them: to the application on the next read, to a merge function, or to the user ("you have two carts"). The store's job becomes *reporting* the conflict accurately, which it can do, rather than *resolving* it, which it cannot.

(c) **The argument is correct when the two writes are causally ordered.** If write $w_2$ genuinely happened after $w_1$ and could have seen it, then $w_2$ *is* the intended latest value, discarding $w_1$ is exactly right, and Lamport's clock condition guarantees $L(w_1) < L(w_2)$, so the rule picks correctly.

**It destroys data when the writes are concurrent.** Then both are current, neither supersedes the other, and the rule discards one on the strength of a number that carries no information about their relationship. Note the sharp form: **last-writer-wins is not wrong on the cases it can decide, it is wrong on the cases it cannot, and it does not know which is which.**

(d) **Safe: a user's display-name field**, or any single-valued setting where the semantics really are "the most recent intent wins" and losing an older concurrent edit costs nothing but a re-edit.

**Not safe: a shopping cart, a set of collaborators, or any accumulating collection** — concurrent additions are both genuinely intended, and discarding one silently removes an item the user added. These are exactly the types with a natural merge, which is what [2.4](02-04-crdts-and-strong-eventual-consistency.md) formalises: union the two carts instead of choosing between them.

</details>

## Flashback

**From Lesson 1.4 (physical clocks):** Two data centres synchronize against the same NTP source. A client in each records an event, and the exchange used to set each local clock had a round-trip delay of 90 ms in one case and 30 ms in the other.

(a) Give the worst-case uncertainty in each clock's offset, and the worst-case uncertainty in the *difference* between the two readings.
(b) The two events are logged 40 ms apart. State whether the physical timestamps determine their order.
(c) State what vector clocks would report about the same pair, and why the two answers are not in conflict.

<details>
<summary>Solution</summary>

(a) Each NTP exchange bounds its own offset to $\pm \delta/2$: **$\pm 45$ ms** for the 90 ms round trip and **$\pm 15$ ms** for the 30 ms one.

Comparing two readings involves both corrections, so the uncertainties add: the difference between the two clocks is known only to $\pm(45 + 15) = \mathbf{\pm 60 \text{ ms}}$, a window 120 ms wide.

(b) **No.** The observed gap of 40 ms is smaller than the 60 ms half-width, so the true gap could be anywhere from $-20$ ms to $+100$ ms — including zero and including a reversal. The physical timestamps are consistent with either order.

(c) Vector clocks would report one of two things, and **neither is a refinement of the physical answer**.

If there is a chain of messages from one event to the other, the vectors are comparable and report a definite order — an order the clocks could not establish, obtained without any clock at all.

If there is no such chain, the vectors are incomparable and report **concurrent** — which is not a weaker version of "we cannot tell", it is a stronger and different statement: no causal relationship exists, so there is nothing for the system to get wrong.

The two answers are not in conflict because they answer different questions. Physical time asks *which occurred first in the world*, and answers with an error bar. Logical time asks *which could have influenced the other*, and answers exactly.

</details>

## Connections

- **Backward:** this lesson replaces [1.4](01-04-physical-clocks-and-synchronization.md)'s approximate ordering with an exact partial one, and Example 2's discarded write is the concrete harm the clock uncertainty in 1.4 caused.
- **Forward:** happens-before is the definition [1.6](01-06-consistent-cuts-and-global-snapshots.md) uses to say which global snapshots are meaningful, and the causal-delivery rule of Example 2 becomes a first-class abstraction in [1.7](01-07-ordered-broadcast-fifo-causal-total.md). Vector clocks applied to replicas rather than events are the **version vectors** of [2.3](02-03-eventual-consistency-and-anti-entropy.md), and causal consistency in [2.2](02-02-sequential-causal-and-session-consistency.md) is happens-before promoted to a correctness condition.
- **Sideways:** happens-before is a partial order in the sense of [`discrete-mathematics` 2.2](../../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md), and concurrency is precisely incomparability in that order. Extending it to a total order by a tiebreaker is a linear extension — and the fact that many linear extensions exist is another way of saying the system genuinely does not determine one.

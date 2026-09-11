# Distributed Systems · Lesson 1.7: Ordered broadcast

> ⏱ ~15 min · Module 1: Models, Time, and Global State · Builds on: [1.3 (RPC and delivery semantics)](01-03-rpc-and-delivery-semantics.md), [1.5 (logical time)](01-05-logical-time-lamport-and-vector-clocks.md), [1.6 (consistent cuts)](01-06-consistent-cuts-and-global-snapshots.md) · Unlocks: [2.2 (causal consistency)](02-02-sequential-causal-and-session-consistency.md), [3.1 (consensus and FLP)](03-01-the-consensus-problem-and-flp.md)

## Why this matters

Almost nothing in a replicated system is a point-to-point call. The real primitive is "tell everybody", and the hard part is not getting the message there — [1.3](01-03-rpc-and-delivery-semantics.md) solved that with retries and dedup — but getting everybody to agree on **what order things happened in**.

This lesson lays out the ladder of ordering guarantees, from "the message probably arrives" to "every machine sees the same sequence". It is worth climbing carefully, because each rung costs more than the last, most systems need only the middle, and the top rung turns out to be the whole of Module 3 in disguise: **total-order broadcast is exactly as hard as consensus.** Knowing that in advance tells you why so much engineering effort goes into avoiding it.

## The idea

First, a distinction that everything else depends on. A process **receives** a message when it arrives off the network. It **delivers** it when the broadcast layer hands it up to the application. Between the two sits a buffer, and **every ordering guarantee in this lesson is implemented by holding messages in that buffer**. The network delivers what it likes, in whatever order it likes; the middleware reorders.

Now the ladder, from the bottom.

**Best-effort broadcast** is a loop over `send`. If the sender is correct, every correct process gets it. If the sender crashes halfway through the loop, some processes have the message and some never will.

**Reliable broadcast** fixes that: if *any* correct process delivers a message, *every* correct process does. The classic implementation is embarrassingly simple — when you deliver a message for the first time, re-broadcast it to everyone. A crashed sender no longer matters, because whoever did receive it finishes the job.

**FIFO broadcast** adds: messages from a single sender are delivered in the order that sender sent them. One sequence number per sender, and a buffer that holds message $k+1$ until $k$ has been delivered.

**Causal broadcast** adds: if the sending of $m$ happens-before the sending of $m'$, then no process delivers $m'$ before $m$. This is [1.5](01-05-logical-time-lamport-and-vector-clocks.md)'s comment-before-reply problem, solved once at the broadcast layer instead of by every application. FIFO is not enough here, because the causal chain can run *through* another process — A posts, B reads it and replies, and A's post and B's reply have different senders.

**Total-order broadcast** (also called atomic broadcast) adds: all processes deliver all messages in the *same* order. Note what this does and does not say — it does not require that order to respect causality unless you ask for both, and it does require agreement on a single sequence, which is the expensive part.

Each rung implies every rung beneath it, and the costs are not evenly spaced: reliable is cheap, FIFO is nearly free, causal costs a vector on every message, and total order costs a round of agreement.

## The formal version

Write $\mathrm{broadcast}(m)$ and $\mathrm{deliver}(m)$ for the two interface events.

> **Best-effort broadcast.** *Validity:* if a correct process broadcasts $m$, every correct process eventually delivers $m$. *No duplication:* $m$ is delivered at most once. *No creation:* $m$ is delivered only if it was broadcast.

> **Reliable broadcast.** Best-effort, with *validity* strengthened to **agreement**: if a **correct** process delivers $m$, then every correct process delivers $m$.

> **Uniform reliable broadcast.** Agreement strengthened to: if **any** process delivers $m$ — correct or not — every correct process delivers $m$.

In words: the uniform version covers the case where a process delivers a message, acts on it visibly (prints a receipt, ships a parcel), and *then* crashes. Plain reliable broadcast allows the rest of the cluster never to see that message, which is fine if the crashed process's actions vanished with it and catastrophic if they did not. **Uniformity is about externally visible side effects**, and it is the property [4.1](04-01-distributed-transactions-and-2pc.md)'s atomic commit needs.

> **FIFO broadcast.** Reliable, plus: if a process broadcasts $m$ before it broadcasts $m'$, no process delivers $m'$ before $m$.

> **Causal broadcast.** Reliable, plus: if $\mathrm{broadcast}(m) \to \mathrm{broadcast}(m')$ then no process delivers $m'$ before $m$.

> **Total-order broadcast.** Reliable, plus: if processes $p$ and $q$ both deliver $m$ and $m'$, they deliver them in the same order.

**The causal-delivery rule**, implemented with vector clocks. Each process $i$ keeps $V_i$ counting messages delivered from each sender. A message from $j$ carrying vector $W$ is delivered when

$$W[j] = V_i[j] + 1 \qquad\text{and}\qquad W[k] \le V_i[k] \ \ \text{for all } k \ne j,$$

and otherwise buffered. The first condition says "this is the next message I expect from $j$" — that is FIFO. The second says "I have already delivered everything $j$ had delivered when it sent this" — that is the causal part. On delivery, $V_i[j] \mathbin{+}= 1$, which may release buffered messages.

> **Equivalence with consensus.** Total-order broadcast and consensus are reducible to each other in an asynchronous system with crash faults.

The reduction each way is short. *Consensus from total-order broadcast:* everybody broadcasts its proposal and decides the first message delivered — all processes deliver the same first message, so all decide the same value. *Total-order broadcast from consensus:* run a sequence of consensus instances, the $k$-th deciding which message is number $k$.

**The consequence is the reason this lesson ends where it does.** Since consensus is impossible in an asynchronous system with even one crash ([3.1](03-01-the-consensus-problem-and-flp.md)), **total-order broadcast is impossible there too**. Every implementation of it — Raft's log, Paxos's sequence, ZooKeeper's Zab, Kafka's partition — is a consensus protocol, and pays consensus's price.

**Message costs.** Eager reliable broadcast has every process re-broadcast on first delivery: $n(n-1) \approx n^2$ messages. A **sequencer**-based total order sends the message to one designated node which stamps it and forwards, costing about $n+1$ messages per broadcast — far cheaper, at the price of a single point of failure whose replacement is itself a consensus problem.

## Picture

![Five stacked boxes forming a ladder, from best-effort broadcast at the bottom through reliable, FIFO and causal to total order at the top, with arrows pointing upward. Each box states the guarantee in one line, and to the right of each is a short delivery trace that the guarantee rejects: for total order, two processes delivering m1 and m2 in opposite orders; for causal, a process delivering m3 before the m1 that caused it; for FIFO, a process delivering m2 before m1 when one sender sent m1 first; for reliable, one process delivering a message that another never does.](assets/01-07-fig1.svg)

The right-hand column is the useful one when debugging: each rung is defined by the one bad run it excludes, so identifying which bad run you are looking at tells you which rung you failed to buy.

## Worked examples

**Example 1 — naming the strongest guarantee a trace satisfies.**

Processes $A$ and $B$ broadcast; processes $C$ and $D$ deliver. $A$ broadcasts $m_1$ then $m_2$. $B$ delivers $m_1$ and then broadcasts $m_3$ — so $\mathrm{broadcast}(m_1) \to \mathrm{broadcast}(m_3)$.

**Trace 1.** $C$ delivers $m_2, m_1, m_3$; $D$ delivers $m_2, m_1, m_3$.

$A$ sent $m_1$ before $m_2$ and both are delivered in the opposite order at both processes. **FIFO is violated**, so the strongest guarantee satisfied is **reliable broadcast** — every message reaches both processes, and both agree on the order, but the agreed order contradicts the sender's own.

Note the trap: $C$ and $D$ agree, so this trace *is* totally ordered in the "everyone agrees" sense. **Total order does not imply FIFO**, and a system that provides only total order may reorder one sender's own messages. In practice you want both, and protocols that provide total order almost always provide FIFO too, which is why the ladder's implication arrows are easy to misread.

**Trace 2.** $C$ delivers $m_1, m_2, m_3$; $D$ delivers $m_3, m_1, m_2$.

Each process respects $A$'s order, so **FIFO holds**. But $D$ delivers $m_3$ before $m_1$, and $m_1$ causally precedes $m_3$ — **causal order is violated**. And $C$ and $D$ disagree, so total order fails too. Strongest guarantee: **FIFO broadcast**.

This is the standard demonstration that FIFO does not imply causal: the violated ordering runs between *different senders*, which per-sender sequence numbers cannot see.

**Trace 3.** $C$ delivers $m_1, m_3, m_2$; $D$ delivers $m_1, m_2, m_3$.

Both respect $A$'s order ($m_1$ before $m_2$), so FIFO holds. Both deliver $m_1$ before $m_3$, so causality holds. But $C$ says $m_3, m_2$ and $D$ says $m_2, m_3$ — **total order fails**. Strongest guarantee: **causal broadcast**.

And this is exactly the gap between causal and total: $m_2$ and $m_3$ are *concurrent*, so causality permits either order, and permitting either order means different processes may pick differently. **Buying total order means paying to decide something causality says does not matter** — which is precisely why it costs a round of agreement.

**Example 2 — the causal-delivery buffer, step by step.**

Three processes $(A, B, C)$, all vectors starting at $(0,0,0)$. Process $C$ is the one we watch.

1. $A$ broadcasts $m_1$, carrying $W = (1,0,0)$.
2. $B$ delivers $m_1$, so $V_B = (1,0,0)$; then $B$ broadcasts $m_2$, carrying $W = (1,1,0)$.
3. **$C$ receives $m_2$ first** (the network is free to do this).

$C$ checks the rule with $V_C = (0,0,0)$, sender $j = B$: is $W[B] = V_C[B] + 1$? Yes, $1 = 0 + 1$. Is $W[A] \le V_C[A]$? **No** — $1 > 0$. **Buffer it.**

4. $C$ receives $m_1$, sender $j = A$, $W = (1,0,0)$: $W[A] = 1 = V_C[A]+1$ ✓, and $W[B] = 0 \le 0$ ✓, $W[C] = 0 \le 0$ ✓. **Deliver.** Now $V_C = (1,0,0)$.
5. $C$ re-examines the buffer. $m_2$ has $W = (1,1,0)$: $W[B] = 1 = V_C[B]+1$ ✓, $W[A] = 1 \le 1$ ✓. **Deliver.** Now $V_C = (1,1,0)$.

$C$ delivered $m_1$ then $m_2$, which is causal order, despite receiving them backwards. **The second condition is doing all the work**: it is the test "have I already seen everything the sender had seen?", and the answer came from the vector the sender shipped with the message.

One more observation, which matters for cost. Suppose $A$ had broadcast $m_1$ and $C$ had simply never received it — the message was lost, and the underlying broadcast is not reliable. Then $m_2$ stays buffered **forever**, and $C$ stops delivering anything from $B$. **Causal order built on an unreliable broadcast converts message loss into a permanent stall**, which is why the ladder puts reliable below causal rather than beside it.

## Watch out

- **You might think receiving and delivering are the same thing.** Every guarantee above is implemented by the gap between them. If a system gives you "the message arrived", you have best-effort; ordering is what the buffer above the network adds, and it always costs latency — a message that satisfies the rule is delivered immediately, one that does not waits for its cause.
- **You might think total order implies causal order.** It does not, as Trace 1 shows: everyone can agree on an order that reverses a single sender's own sequence. The property that combines both is usually called *causal total order*, and it is what a replicated log actually provides.
- **You might think reliable broadcast is enough for a system with external effects.** Plain reliable broadcast makes no promise about a message delivered only by a process that then crashed. If that process printed a receipt before dying, the receipt exists and the cluster has no record of why. That gap is what **uniform** reliable broadcast closes, and it is the difference between "all survivors agree" and "everything anyone did is accounted for".

## One-liner

> Broadcast is a ladder and you should climb no higher than you need: reliability is cheap, FIFO is nearly free, causality costs a vector on every message, and total order costs consensus — because total order *is* consensus, wearing a different interface.

## Problems

**P1 (🟢)** Process $A$ broadcasts $x_1$ then $x_2$. Process $B$, after delivering $x_1$, broadcasts $y_1$. For each delivery trace, name the **strongest** guarantee on the ladder that it satisfies, and name the property it violates.

(a) $C: x_1, x_2, y_1$ and $D: x_1, x_2, y_1$
(b) $C: x_1, y_1, x_2$ and $D: x_1, x_2, y_1$
(c) $C: x_2, x_1, y_1$ and $D: x_2, x_1, y_1$
(d) $C: y_1, x_1, x_2$ and $D: y_1, x_1, x_2$

**P2 (🟡)** Three processes $(P, Q, R)$ run causal broadcast with vector clocks, all starting at $(0,0,0)$. Process $R$ receives, in this order: $m_c$ from $Q$ with vector $(2,1,0)$; $m_a$ from $P$ with vector $(1,0,0)$; $m_b$ from $P$ with vector $(2,0,0)$.

(a) For each message as it is received, state whether $R$ delivers or buffers it, with the failing condition where it buffers.
(b) Give $R$'s delivery order and its vector after each delivery.
(c) Give the total number of messages $R$ held in its buffer at the moment of peak buffering.
(d) Suppose $m_b$ is lost by the network and never arrives. State what $R$ delivers, and name the ladder rung whose absence causes the problem.

**P3 (🔴, optional)** A team implements total-order broadcast with a **sequencer**: every broadcast is sent to a designated node, which assigns the next sequence number and forwards the message to all $n$ processes, which deliver strictly in sequence-number order.

(a) Give the message count per broadcast, and compare it with eager reliable broadcast's count at $n = 50$.
(b) Give an ordered step list in which the sequencer crashes and the surviving processes hold delivery orders that cannot both be extended to one common order, or argue that no such list exists.
(c) The team's fix is: "if the sequencer is unreachable for 3 seconds, the node with the lowest id becomes the new sequencer." Give the failure scenario from [1.2](01-02-failure-models-and-the-network.md) that breaks this, with the resulting damage.
(d) State the general result this exercise is an instance of, and what it implies about building total-order broadcast without a consensus protocol.

<details>
<summary>Solutions</summary>

**P1**

Throughout, the causal relation is $\mathrm{broadcast}(x_1) \to \mathrm{broadcast}(y_1)$, since $B$ delivered $x_1$ before broadcasting $y_1$. And $A$'s own order is $x_1$ before $x_2$.

(a) Both processes deliver $x_1$ before $x_2$ (FIFO ✓), both deliver $x_1$ before $y_1$ (causal ✓), and both agree (total ✓). **Strongest: total order.** Nothing is violated.

(b) FIFO holds at both ($x_1$ before $x_2$ everywhere). Causal holds at both ($x_1$ before $y_1$). But $C$ says $y_1, x_2$ and $D$ says $x_2, y_1$. **Strongest: causal broadcast**, violating **total order**.

$x_2$ and $y_1$ are concurrent, so causality permits either order and the two processes chose differently.

(c) Both deliver $x_2$ before $x_1$, so **FIFO is violated** — $A$ sent them the other way. Causality is fine ($x_1$ before $y_1$ at both), and the two processes agree, so total order holds. **Strongest: reliable broadcast**, violating **FIFO**.

This is Trace 1 of Example 1, and it is the case people find most surprising: a totally ordered delivery can still contradict a single sender's sequence.

(d) Both deliver $y_1$ before $x_1$. Since $\mathrm{broadcast}(x_1) \to \mathrm{broadcast}(y_1)$, **causal order is violated**. FIFO holds ($x_1$ before $x_2$ at both) and the processes agree with each other. **Strongest: FIFO broadcast**, violating **causal order**.

**P2**

(a) $R$ starts at $V_R = (0,0,0)$.

**$m_c$ from $Q$, $W = (2,1,0)$.** Own-sender test: $W[Q] = 1 = V_R[Q] + 1$ ✓. Other-coordinate test: $W[P] = 2 \le V_R[P] = 0$? **Fails.** **Buffer** — $Q$ had already delivered two of $P$'s messages when it sent this, and $R$ has delivered none.

**$m_a$ from $P$, $W = (1,0,0)$.** $W[P] = 1 = 0+1$ ✓; $W[Q] = 0 \le 0$ ✓; $W[R] = 0 \le 0$ ✓. **Deliver.**

**$m_b$ from $P$, $W = (2,0,0)$.** $W[P] = 2 = 1+1$ ✓; $W[Q] = 0 \le 0$ ✓. **Deliver.** And now recheck the buffer: $m_c$ has $W[P] = 2 \le 2$ ✓ and $W[Q] = 1 = 0+1$ ✓. **Deliver.**

(b) Delivery order and $R$'s vector after each:

| delivered | $V_R$ after |
|---|---|
| $m_a$ | $(1,0,0)$ |
| $m_b$ | $(2,0,0)$ |
| $m_c$ | $(2,1,0)$ |

The received order was $m_c, m_a, m_b$ and the delivered order is $m_a, m_b, m_c$ — the buffer reordered a message past two others.

(c) **One.** Only $m_c$ was ever buffered, and it was released as soon as its last missing cause ($m_b$) was delivered.

(d) With $m_b$ lost, $R$ delivers **$m_a$ only**. $m_c$ waits for $W[P] = 2 \le V_R[P]$, and $V_R[P]$ never reaches 2, so $m_c$ is buffered forever — and so is every subsequent message from $Q$, since FIFO on $Q$ is also enforced.

The missing rung is **reliable broadcast**. Causal ordering assumes every broadcast message eventually arrives everywhere; without that, a single loss does not degrade the ordering, it **halts delivery permanently**. This is why the ladder is a ladder — you cannot buy causal ordering without buying reliability first.

**P3**

(a) One message to the sequencer plus $n$ forwarded messages: $\mathbf{n+1}$ per broadcast.

Eager reliable broadcast costs $n(n-1)$. At $n = 50$: sequencer $= 51$ messages, eager $= 50 \times 49 = 2450$ messages — a factor of **48** cheaper. That ratio is why real systems centralise ordering on a leader and accept the availability problem that follows.

(b) *Accept criterion: any step list in which the sequencer's forwards reach different subsets of the processes before it crashes, so two processes hold disjoint knowledge of a sequence position.*

1. Processes $C$ and $D$ are both waiting for sequence number 7.
2. A broadcast of $m$ reaches the sequencer, which assigns it number 7 and begins forwarding.
3. The forward reaches $C$. $C$ delivers $m$ as number 7, and returns it to a client.
4. **The sequencer crashes** before the forward reaches $D$.
5. $D$ has never heard of $m$, and neither has anyone else.

$C$'s order is $\ldots, m$ at position 7; $D$'s order has nothing at position 7 and will assign the next message it learns of to that slot. **The two orders are not extensions of a common order** — position 7 is $m$ for $C$ and something else for $D$ — and $C$ has already acted on it externally, so this violates even uniform agreement.

(c) The breaking scenario is a **network partition** ([1.2](01-02-failure-models-and-the-network.md)), not a crash. Suppose the sequencer is node 3 and a partition separates it from nodes 1, 2 while leaving it connected to nodes 4, 5 and their clients.

Nodes 1 and 2 see silence for 3 seconds and promote node 1. Node 3 is perfectly healthy, still receiving broadcasts from its side, and **still assigning sequence numbers**. Two sequencers now assign number 7, 8, 9 to different messages, and the two halves of the cluster deliver irreconcilably different sequences.

**The damage is the worst kind**: not a stall but divergence, with both halves acknowledging writes. This is split brain, and the timeout is doing exactly what [1.1](01-01-why-distributed-systems-are-hard.md) said a timeout cannot do — distinguishing a dead node from an unreachable one.

(d) This is an instance of the equivalence **total-order broadcast $\equiv$ consensus**. The team has not avoided consensus; they have moved it into the question "who is the sequencer?", which is itself a consensus problem, and solved it with a timeout — which is to say, not solved it.

The implication: **there is no shortcut.** Any total-order broadcast implementation must contain a consensus protocol somewhere, because a correct answer to "who sequences?" under partitions requires the majority machinery of Module 3. The sequencer design is not wrong — it is how real systems get the $n+1$ message cost — but it is only correct when the sequencer is *elected by consensus* and holds a fenced lease ([3.6](03-06-state-machine-replication.md)), rather than claimed by a timeout.

</details>

## Flashback

**From Lesson 1.3 (RPC and delivery semantics):** A broadcast library re-sends any message it has not seen acknowledged within 2 seconds, and receivers apply every message they receive.

(a) Name the delivery semantics this provides.
(b) The application uses the broadcast to replicate the operation `add 10 to the total`. Give the total after one broadcast in which one receiver's acknowledgement is lost twice before succeeding, starting from 0.
(c) Give the change that makes the replicated total correct, and name the property it gives the operation.

<details>
<summary>Solution</summary>

(a) **At-least-once.** The library retries until acknowledged and receivers have no way to recognise a repeat, so a message is applied one or more times.

(b) The receiver applies the operation on the first delivery, and again on each re-send it receives:

| event | applications at that receiver | total there |
|---|---|---|
| first delivery, ack lost | 1 | 10 |
| first re-send, ack lost | 2 | 20 |
| second re-send, ack succeeds | 3 | **30** |

**That receiver's total is 30** while every receiver whose acknowledgement arrived first time holds 10. The replicas have diverged, and the divergence is invisible until somebody compares them.

Note where the failure is: nothing was lost and no receiver misbehaved. The *acknowledgement* was lost, and the sender's only correct response to a lost acknowledgement is to retry ([1.1](01-01-why-distributed-systems-are-hard.md)) — so the retry is not the bug.

(c) **Give each broadcast a unique message id, and have each receiver record the ids it has already applied and discard repeats** — deduplication at the receiver, exactly as in [1.3](01-03-rpc-and-delivery-semantics.md).

The property this gives the operation is **idempotency**: applying it twice leaves the same state as applying it once. `add 10` is not idempotent on its own, and wrapping it in a dedup check makes the *delivered operation* idempotent without changing its meaning.

The alternative, worth noting because it appears constantly in replication: make the operation carry an absolute value rather than a delta — `set total to 10` instead of `add 10`. That is idempotent by construction, and it is why replicated state machines ([3.6](03-06-state-machine-replication.md)) prefer to replicate deterministic commands applied at a known log position rather than raw increments.

</details>

## Connections

- **Backward:** the causal-delivery rule is [1.5](01-05-logical-time-lamport-and-vector-clocks.md)'s vector clocks used as an admission test rather than a comparison, and reliable broadcast's re-send-on-delivery is [1.3](01-03-rpc-and-delivery-semantics.md)'s retry pattern lifted from one receiver to all of them.
- **Forward:** [2.2](02-02-sequential-causal-and-session-consistency.md)'s causal consistency is what you get when replicas apply updates delivered by causal broadcast, and [3.1](03-01-the-consensus-problem-and-flp.md)'s impossibility applies verbatim to total-order broadcast through the equivalence proved here. [3.6](03-06-state-machine-replication.md) is total-order broadcast plus a deterministic state machine, and nothing else.
- **Sideways:** the receive-versus-deliver buffer is the same mechanism as TCP's receive window reordering out-of-order segments ([`computer-networks` 2.3](../../computer-networks/lessons/02-03-tcp-segments-connections-flow-control.md)) — sequence numbers, a buffer, and delivery held back until the gap fills. The difference is scope: TCP orders one sender's bytes to one receiver, and causal broadcast orders many senders' messages to many receivers, which is why one integer suffices there and a vector is needed here.

# Distributed Systems · Lesson 3.2: Failure detectors and escaping FLP

> ⏱ ~15 min · Module 3: Consensus and the CAP Theorem · Builds on: [3.1 (consensus and FLP)](03-01-the-consensus-problem-and-flp.md), [1.2 (failure models)](01-02-failure-models-and-the-network.md), [2.6 (quorum systems)](02-06-quorum-systems.md) · Unlocks: [3.3 (Paxos)](03-03-paxos.md), [3.4 (Raft)](03-04-raft.md)

## Why this matters

[3.1](03-01-the-consensus-problem-and-flp.md) proved consensus impossible and then said every real protocol violates one of the theorem's assumptions. That sentence is where most treatments stop, and stopping there leaves the most operationally useful fact in the course unsaid.

The useful fact is this: the extra assumption every working protocol adds is **almost embarrassingly weak**. Not a synchronised clock. Not a reliable network. Not even a failure detector that is ever *right*. What suffices is an oracle that is allowed to be wrong arbitrarily often, for arbitrarily long, as long as it eventually stops being wrong about **one** process — and you never find out when.

Once you can name that assumption, you can say precisely why your cluster stops making progress during an incident, and why it is still safe while it does.

## The idea

Abstract the timeout. Instead of writing `if no heartbeat in 500 ms, assume dead`, give every process a black box — a **failure detector** — that outputs a set of processes it currently *suspects*. The box may be wrong in both directions: it may suspect a healthy process, and it may fail to suspect a dead one. Algorithms are then written against the box's guarantees rather than against a timeout, and the guarantees come in two independent kinds.

**Completeness** is about not missing crashes: dead processes are eventually suspected. This half is easy — a timeout that eventually fires gives it to you, since a crashed process really does stop sending forever.

**Accuracy** is about not crying wolf: live processes are not suspected. This half is the hard one, and it is precisely what [1.1](01-01-why-distributed-systems-are-hard.md) said you cannot have in an asynchronous system, because no silence proves death.

The move that rescues everything is to weaken accuracy to **eventual** accuracy: the detector may make any number of mistakes, but there is some unknown time after which it stops. And it does not even have to stop being wrong about everybody — it is enough that **some one correct process is eventually never suspected by anyone**. That is the class called $\Diamond S$, and an equivalent and more intuitive formulation is $\Omega$: eventually, all correct processes agree on the identity of some correct process, which they call the **leader**.

Two results make this the centre of the subject. $\Omega$ is the **weakest** failure detector that solves consensus — anything that solves consensus can be used to build it, so it is not one option among many but the precise boundary. And with eventual accuracy, consensus requires a **majority** of correct processes, $n > 2f$, where a perfect detector would need only $n > f$.

**Eventual accuracy is buildable with an adaptive timeout**, and that is the whole trick. Start with a guess; whenever you suspect a process and then hear from it, you were wrong, so increase the timeout. If message delays are eventually bounded — partial synchrony — the timeout eventually exceeds the true bound and the false suspicions stop. **You never learn when that happened, and you never need to**, because the algorithm is safe throughout and merely becomes live afterwards.

## The formal version

> **Failure detector.** A module at each process outputting a set of suspected processes, which may change over time and may differ between processes.

> **Completeness.**
> - *Strong:* eventually every crashed process is permanently suspected by **every** correct process.
> - *Weak:* eventually every crashed process is permanently suspected by **some** correct process.

> **Accuracy.**
> - *Strong:* no correct process is **ever** suspected by any process.
> - *Weak:* some correct process is never suspected by any process.
> - *Eventually strong:* there is a time after which no correct process is suspected.
> - *Eventually weak:* there is a time after which some correct process is never suspected by any correct process.

The classes are the combinations. Strong completeness with the four accuracies gives $P$ (perfect), $S$ (strong), $\Diamond P$ (eventually perfect) and $\Diamond S$ (eventually strong); weak completeness gives $Q, W, \Diamond Q, \Diamond W$.

> **Reduction.** Weak completeness can be boosted to strong completeness by gossiping suspicions, so $Q, W, \Diamond Q, \Diamond W$ are equivalent to $P, S, \Diamond P, \Diamond S$ respectively. **Only the accuracy column really matters.**

> **$\Omega$ (eventual leader).** Each process outputs one process id. Eventually all correct processes output the **same** id, and it is the id of a correct process.

> **Chandra–Hadzilacos–Toueg (1996).** $\Diamond S$ and $\Omega$ are equivalent, and $\Omega$ is the **weakest** failure detector with which consensus is solvable in an asynchronous system with crash faults.

> **Majority requirement.** With eventual accuracy, consensus is solvable if and only if $n > 2f$. With real (non-eventual) accuracy, $n > f$ suffices.

**Why the majority is forced.** Suppose $n \le 2f$ and split the processes into two groups $A$ and $B$, each of size at most $f$. Run an execution in which every process in $B$ has crashed: $A$ must decide by itself, since all of $A$ is correct and termination demands it. Symmetrically run one where all of $A$ has crashed and $B$ decides alone. Now run a third execution where **nobody crashes but the network partitions $A$ from $B$** and the detectors, being only eventually accurate, suspect the other side throughout the relevant period. **$A$ cannot distinguish this from the first execution, and $B$ cannot distinguish it from the second**, so each decides as before — and with different inputs they decide different values, violating agreement. Requiring $n > 2f$ makes at most one side a majority, and the [2.6](02-06-quorum-systems.md) intersection argument does the rest.

> **Chandra–Toueg consensus with $\Diamond S$** (sketch). Processes proceed in asynchronous rounds with a **rotating coordinator**: in round $r$, process $r \bmod n$ is coordinator. Each process sends the coordinator its current estimate with a timestamp; the coordinator picks the most recent estimate and broadcasts it; processes acknowledge or suspect. When the coordinator collects acknowledgements from a majority, it broadcasts a decision.

Safety comes from the majority: any two "locked" majorities intersect, so a later coordinator's estimate cannot contradict an earlier decision. **Liveness comes from $\Diamond S$:** eventually some correct process is never suspected, and eventually the rotation reaches it, and from then on nobody abandons it — so that round completes.

> **Partial synchrony** (Dwork, Lynch, Stockmeyer, 1988). Bounds on message delay and processing exist but are unknown, or are known but hold only after an unknown **global stabilization time**.

Partial synchrony implements $\Diamond P$ with an adaptive timeout, which implements $\Diamond S$, which solves consensus. **This is the chain every production system relies on**, and each link is worth being able to name.

> **Randomised consensus** (Ben-Or, 1983). Processes flip local coins to break symmetry; terminates with probability 1 in a fully asynchronous system with $n > 2f$.

This escapes FLP through the *determinism* assumption rather than the timing one. With only local coins the expected round count is exponential in $n$ for the worst case; with a shared coin it is constant. **The fact that no timing assumption is needed at all is the theoretically interesting part** — randomisation alone is enough.

## Picture

![A two by four grid. The columns are accuracy — strong, weak, eventually strong, eventually weak — and the rows are strong and weak completeness. The eight cells name the classes: P, S, eventually-P and eventually-S on the top row, and Q, W, eventually-Q and eventually-W beneath. The two left columns are marked as requiring only n greater than f but being unbuildable in an asynchronous system; the two right columns as requiring n greater than 2f and being buildable with adaptive timeouts. A note records that eventually-S, and the equivalent eventual-leader detector Omega, is the weakest detector that solves consensus.](assets/03-02-fig1.svg)

The vertical split is the one that matters. The left half is what you would *like* — a detector that is never wrong about a live process — and [1.1](01-01-why-distributed-systems-are-hard.md) forbids building it asynchronously. The right half is what you can actually have, and it costs one extra thing: a majority instead of a bare survivor.

## Worked examples

**Example 1 — an adaptive timeout becomes eventually accurate.**

A process monitors a peer with a heartbeat every 100 ms and a suspicion timeout $T$, initially 200 ms. The rule: if a suspected peer is later heard from, the suspicion was wrong, so set $T \leftarrow T + 100$ ms.

Suppose the network is congested for a while, with delays reaching 900 ms, and then settles to a maximum of 250 ms.

| episode | $T$ before | delay seen | outcome |
|---|---|---|---|
| 1 | 200 | 640 | false suspicion, $T \to 300$ |
| 2 | 300 | 900 | false suspicion, $T \to 400$ |
| 3 | 400 | 520 | false suspicion, $T \to 500$ |
| 4 | 500 | 880 | false suspicion, $T \to 600$ |
| 5 | 600 | 240 | correct: no suspicion |
| 6+ | 600 | $\le 250$ | correct, forever |

**Four false suspicions, and then never again.** That is eventual accuracy precisely: an unbounded but finite number of mistakes, followed by permanent correctness.

Three things to read off. **The number of mistakes is unbounded** — a longer congestion period means more of them, and no fixed $T$ avoids this. **Nothing signals the transition** — at episode 5 the process has no way to know this is the last mistake, and that is fine, because the algorithm never needed to know. And **the detector was complete throughout**: had the peer genuinely crashed, $T$ would have expired and the suspicion would have been permanent, because no later message would ever arrive to correct it.

**Why the algorithm survives the mistakes.** During episodes 1–4 a Chandra–Toueg round abandons its coordinator and rotates. Each abandonment wastes a round and **decides nothing wrongly**, because safety rests on majority intersection, not on the detector. The detector only ever affects *when* a round succeeds.

**Example 2 — where each real system sits.**

**Raft** ([3.4](03-04-raft.md)) implements $\Omega$ approximately with a randomised election timeout. A follower that hears nothing for its timeout becomes a candidate; the randomisation makes it unlikely that two candidates start together and split the vote repeatedly. The assumption is partial synchrony, and its operational signature is exact: **when the network degrades past the timeout, the cluster elects, fails, and elects again — flapping without progress, while never committing conflicting entries.** That is FLP's non-terminating execution, visible in a dashboard.

**Paxos** ([3.3](03-03-paxos.md)) separates the two concerns more explicitly than any other protocol. Its safety argument mentions no detector at all — two proposals cannot both be chosen, whatever the timing. Liveness requires a **distinguished proposer**, which is $\Omega$ by another name; with two proposers duelling, each can invalidate the other's prepare phase forever, and that livelock is FLP arriving on schedule.

**A blockchain** ([4.6](04-06-nakamoto-consensus-and-blockchains.md)) takes the randomisation escape instead. There is no failure detector and no timeout deciding anything; proof-of-work is a randomised leader election with no membership list at all, and the cost is that agreement becomes probabilistic rather than certain.

**The pattern across all three: safety is unconditional, liveness is conditional, and the condition is always an assumption about timing or randomness that the network is free to violate.** When an operator says "the cluster is up but not committing", they are describing the condition being violated — not a bug.

## Watch out

- **You might think a failure detector must be right to be useful.** $\Diamond S$ permits unboundedly many mistakes and requires only that they eventually stop about one process. That is enough for consensus, and it is why a crude adaptive timeout is a legitimate implementation of a deep theoretical object.
- **You might think the majority requirement comes from the detector's mistakes.** It comes from the impossibility of distinguishing a partition from a set of crashes ([1.1](01-01-why-distributed-systems-are-hard.md)). With a *perfect* detector, $n > f$ suffices, because the detector by definition never lies about a live process and so a partition cannot masquerade as a crash.
- **You might think a false suspicion can cause a wrong decision.** In a correctly built protocol it cannot. The detector influences which process leads and when a round is abandoned — liveness — and safety rests entirely on quorum intersection. Any protocol where a timeout can change the *decided value* is broken, and [3.1](03-01-the-consensus-problem-and-flp.md)'s P3(d) is the canonical example.

## One-liner

> The escape from FLP is not a better clock but a weaker demand: an oracle allowed to be wrong arbitrarily often, provided it eventually stops being wrong about one process — which an adaptive timeout gives you for free, at the price of needing a majority rather than a survivor.

## Problems

**P1 (🟢)** For each detector behaviour, name the completeness and accuracy properties it satisfies, and the resulting class among $P$, $S$, $\Diamond P$, $\Diamond S$.

(a) Every crashed process is eventually permanently suspected by everyone, and no correct process is ever suspected.
(b) Every crashed process is eventually permanently suspected by everyone, and after some unknown time no correct process is suspected.
(c) Every crashed process is eventually permanently suspected by everyone, and one particular correct process is never suspected by anyone from the start.
(d) A detector that suspects nobody, ever. State which property it satisfies and which it fails, and whether it is useful.

**P2 (🟡)** A cluster of $n$ nodes uses an eventually accurate failure detector.

(a) Give the maximum $f$ for $n = 4$, $n = 5$ and $n = 6$.
(b) Give the maximum $f$ for $n = 5$ if a **perfect** detector were available.
(c) Give the sizes of the two groups in the indistinguishability argument that forces $n > 2f$, at $n = 6$, $f = 3$, and state what each group does in the three executions.
(d) State why a perfect detector escapes that argument, in one sentence.

**P3 (🔴, optional)** A monitoring process uses a fixed 400 ms timeout, and its peer's message delays are bounded by 250 ms after some unknown time but unbounded before it.

(a) State whether this detector satisfies strong completeness, eventual strong accuracy, both or neither, with the reason for each.
(b) The team switches to an additive adaptive timeout starting at 200 ms and increasing by 100 ms per false suspicion. Give the number of false suspicions if the pre-stabilisation delays observed are 350, 610, 480 and 900 ms in that order, and the final timeout value.
(c) State whether the adaptive scheme can suffer an unbounded number of false suspicions, and what that implies for the consensus protocol above it.
(d) A colleague proposes never increasing the timeout, arguing that a large fixed timeout of 30 seconds is "eventually accurate in practice". State whether the resulting detector is in $\Diamond P$, with the reason, and name the cost of the 30-second choice when a node genuinely crashes.

<details>
<summary>Solutions</summary>

**P1**

(a) **Strong completeness** and **strong accuracy**. Class $\mathbf{P}$ — the perfect detector, which cannot be implemented in an asynchronous system.

(b) **Strong completeness** and **eventually strong accuracy**. Class $\mathbf{\Diamond P}$ — the eventually perfect detector, and the one an adaptive timeout under partial synchrony gives you.

(c) **Strong completeness** and **weak accuracy** — some correct process is never suspected, from the beginning rather than eventually. Class $\mathbf{S}$.

Note that $S$ sits in the left half of the grid: real, non-eventual accuracy, so it needs only $n > f$ and is likewise unimplementable asynchronously.

(d) It satisfies **strong accuracy** vacuously — no correct process is ever suspected, because nothing is ever suspected. It fails **completeness** entirely: crashed processes are never suspected either.

**Not useful.** A protocol relying on it waits forever on a crashed process, which is exactly the wrong answer of [3.1](03-01-the-consensus-problem-and-flp.md) P1(c). The lesson is that accuracy alone is worthless — the two properties are independent, and both are needed.

**P2**

(a) $n > 2f$ gives $f < n/2$:

| $n$ | max $f$ |
|---|---|
| 4 | 1 |
| 5 | 2 |
| 6 | 2 |

Note 6 tolerates no more than 5 does — the even-size waste from [1.2](01-02-failure-models-and-the-network.md), reappearing.

(b) With a perfect detector, $n > f$ suffices, so at $n = 5$ the maximum is $\mathbf{f = 4}$: consensus among the survivors even if only one process remains.

The gap between 2 and 4 is the entire price of eventual rather than real accuracy, and it is a large price — twice the fault tolerance, for an assumption nobody can implement.

(c) At $n = 6$, $f = 3$: split into $A$ and $B$ of size **3 each**, both at most $f$.

- **Execution 1:** all of $B$ has crashed. $A$ is entirely correct, so termination forces $A$ to decide alone; suppose its inputs are all 0 and it decides 0.
- **Execution 2:** all of $A$ has crashed. $B$ decides alone; suppose its inputs are all 1 and it decides 1.
- **Execution 3:** nobody crashes, but the network partitions $A$ from $B$, and each side's eventually-accurate detector suspects the other side throughout. $A$ receives exactly the messages it received in execution 1 and decides 0; $B$ receives exactly what it did in execution 2 and decides 1.

**Two correct processes decide differently — agreement fails.** With $n > 2f$ at least one of the two groups is under the fault bound, so the symmetric argument cannot be run on both sides.

(d) **Because a perfect detector never suspects a correct process, so in execution 3 neither side would suspect the other** — the partition could not masquerade as a set of crashes, and $A$ would wait for $B$ rather than deciding alone.

**P3**

(a) **Strong completeness: yes.** A genuinely crashed peer sends nothing more, so after 400 ms the suspicion fires and, receiving no later message, never lifts.

**Eventual strong accuracy: yes**, but only because of the specific numbers. After stabilisation, delays never exceed 250 ms, which is under the fixed 400 ms timeout, so no false suspicion ever occurs again. The detector is in $\Diamond P$ **for this peer** — and the reason to be uneasy is that the 400 ms was a lucky guess: had the post-stabilisation bound been 450 ms, the detector would suspect forever and satisfy no accuracy property at all.

(b) Walk the timeout up:

| delay | $T$ before | outcome | $T$ after |
|---|---|---|---|
| 350 | 200 | false suspicion | 300 |
| 610 | 300 | false suspicion | 400 |
| 480 | 400 | false suspicion | 500 |
| 900 | 500 | false suspicion | 600 |

**Four false suspicions**, final timeout **600 ms**. Since the post-stabilisation bound is 250 ms, 600 ms is comfortably above it and no further mistakes occur.

(c) **Yes, unboundedly many** — a longer or worse pre-stabilisation period produces more of them, and nothing bounds how long that period lasts.

What it implies: **the consensus protocol makes no progress during that period and remains safe throughout.** Each false suspicion abandons a coordinator and starts a new round; no value is ever decided incorrectly, because safety rests on quorum intersection rather than on the detector. The observable symptom is a cluster that is up, accepting connections, and committing nothing.

(d) **The 30-second fixed detector is not in $\Diamond P$, and the reason is that it makes no guarantee at all.**

Eventual strong accuracy requires that after *some* time no correct process is suspected. A fixed timeout achieves that only if the post-stabilisation delay bound happens to be below 30 seconds — which is an assumption about the network, not a property of the detector. If some peer's steady-state delay is 31 seconds, the detector suspects it forever and satisfies no accuracy property. The adaptive scheme, by contrast, satisfies eventual accuracy for **any** finite bound, which is why it is the correct implementation rather than merely the more careful one.

**The cost when a node genuinely crashes is 30 seconds of unavailability.** No new leader is elected until the timeout expires, so every write blocks for half a minute. This is the real trade with detector timeouts and it points both ways: short timeouts mean frequent false suspicions and wasted elections, long ones mean slow failover. The adaptive scheme resolves it by starting short and only lengthening when proved wrong, which converges on the smallest timeout the network actually justifies.

</details>

## Flashback

**From Lesson 3.1 (consensus and FLP):** A synchronous system of 9 processes tolerates at most $f$ crashes using the flooding algorithm and runs for 5 rounds.

(a) Give the largest $f$ the 5-round run is correct for.
(b) Give the number of messages sent in a crash-free execution, counting one per ordered pair per round.
(c) State the property of the run that the round count guarantees, in one sentence.

<details>
<summary>Solution</summary>

(a) The algorithm needs $f+1$ rounds, so $f + 1 = 5$ gives $\mathbf{f = 4}$.

(b) Each round every process sends to the other 8: $9 \times 8 = 72$ messages per round.

$$5 \times 72 = \mathbf{360 \text{ messages}}.$$

(c) **With at most 4 crashes and 5 rounds, at least one round contains no crash, and in a crash-free round every surviving process receives every other's set — so they all end that round holding identical sets, and every later round adds the same thing to all of them.**

That is the whole correctness argument, and it is a pigeonhole count: $f$ crashes cannot spoil $f+1$ rounds. Note how completely it depends on synchrony — the guarantee "every message sent in a round arrives before the next" is exactly the assumption FLP removes, and removing it takes the algorithm from four lines to impossible.

</details>

## Connections

- **Backward:** [3.1](03-01-the-consensus-problem-and-flp.md) proved the impossibility; this lesson names the minimum you must add to escape it. The majority requirement is [2.6](02-06-quorum-systems.md)'s intersection property arriving as a necessary condition rather than a design choice.
- **Forward:** [3.3](03-03-paxos.md) is the protocol whose safety needs no detector at all and whose liveness needs exactly $\Omega$; [3.4](03-04-raft.md) implements $\Omega$ with a randomised election timeout and makes the leader explicit; [4.6](04-06-nakamoto-consensus-and-blockchains.md) takes the randomisation escape instead of the timing one.
- **Sideways:** the completeness/accuracy pair is the same false-negative versus false-positive trade as a diagnostic test, and the adaptive timeout is a controller raising its threshold until the false-positive rate reaches zero — the integral-action idea from [`control-systems` 4.1](../../control-systems/lessons/04-01-pid-control.md), applied to a threshold rather than a setpoint.

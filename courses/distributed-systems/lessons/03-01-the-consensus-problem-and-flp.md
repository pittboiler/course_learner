# Distributed Systems · Lesson 3.1: The consensus problem and FLP

> ⏱ ~15 min · Module 3: Consensus and the CAP Theorem · Builds on: [1.1 (why it's hard)](01-01-why-distributed-systems-are-hard.md), [1.2 (failure models)](01-02-failure-models-and-the-network.md), [1.7 (ordered broadcast)](01-07-ordered-broadcast-fifo-causal-total.md) · Unlocks: [3.2 (failure detectors)](03-02-failure-detectors-and-escaping-flp.md), [3.3 (Paxos)](03-03-paxos.md)

## Why this matters

Consensus is the one primitive everything else in this course reduces to. Electing a leader is consensus. Deciding whether a distributed transaction commits is consensus. Agreeing on the next entry in a replicated log — which [1.7](01-07-ordered-broadcast-fifo-causal-total.md) proved is total-order broadcast — is consensus. Solve it once and you have solved all of them.

And in 1985 Fischer, Lynch and Paterson proved it cannot be solved. Not "is expensive", not "needs care" — **no deterministic algorithm solves consensus in an asynchronous system if even one process may crash.**

Every working consensus protocol therefore violates one of FLP's assumptions, and knowing which one is not academic trivia: it tells you exactly what has to be true of your network for your cluster to make progress, and exactly what happens when that stops being true. This lesson states the problem precisely and proves the half of FLP that fits in fifteen minutes.

## The idea

Consensus: every process starts with a proposed value and must **decide** on one, and they must all decide the same one. Three requirements, and the whole subject lives in the tension between them.

**Agreement** — no two processes decide differently. **Validity** — the decided value was proposed by somebody, which rules out the cheat of always deciding 0. **Termination** — every correct process eventually decides, which rules out the other cheat of never deciding at all.

Drop any one and it becomes trivial. Together, in an asynchronous system, they are impossible.

Here is the intuition for why, and it is [1.1](01-01-why-distributed-systems-are-hard.md)'s indistinguishability argument doing all the work. At some moment the system must commit to an outcome. The commitment has to happen when some particular message is delivered — call it the **critical step**. But the algorithm cannot know whether the process that was about to send some *other* message has crashed or is merely slow, so it cannot wait for it, and it cannot proceed without it either.

More precisely: an adversary who controls only message *timing* — not message content, not process behaviour, not which processes are faulty — can always find one more message to delay, keeping the system in a state where both outcomes are still reachable, forever. The processes never behave incorrectly. They simply never finish.

**The decisive thing to notice is which property fails.** FLP kills **termination**, not agreement or validity. A protocol can always be *safe*: never decide two different values, never decide a value nobody proposed. What it cannot do is guarantee that it decides at all. That distinction shapes every real system — Paxos and Raft are always safe and make progress only when the network cooperates, which is a design choice forced by this theorem rather than an implementation shortcut.

## The formal version

> **Consensus.** Each process $p_i$ starts with an input $v_i$ and may irrevocably **decide** a value. An algorithm solves consensus if every execution satisfies:
> - **Agreement.** No two correct processes decide different values.
> - **Validity.** A decided value is the input of some process.
> - **Termination.** Every correct process eventually decides.
>
> *Uniform agreement* strengthens the first to: no two processes decide differently, including ones that later crash.

> **Configuration.** The state of every process together with the set of messages in transit. An **event** is the delivery of one message to one process, which is deterministic given the configuration.

> **Valence.** A configuration $C$ is **0-valent** if every execution from $C$ decides 0; **1-valent** if every execution decides 1; **bivalent** if some execution reaches each.

> **FLP (Fischer, Lynch, Paterson, 1985).** In an asynchronous message-passing system where at most one process may crash, no deterministic algorithm solves consensus.

**The proof has two lemmas.**

> **Lemma 1.** Some initial configuration is bivalent.

*Proof.* List the initial configurations in a chain from all-inputs-0 to all-inputs-1, changing one process's input at each step. The first is 0-valent by validity, the last is 1-valent. Suppose no configuration in the chain is bivalent. Then somewhere in the chain an adjacent pair $C$, $C'$ is 0-valent and 1-valent respectively, differing only in the input of one process $p$.

Now consider the execution in which **$p$ crashes before taking any step**. This is permitted — at most one crash. From $C$ and from $C'$, every other process has identical inputs and receives identical messages, so the two executions are **indistinguishable** to them and reach the same decision. But one must decide 0 and the other 1. Contradiction, so some initial configuration is bivalent. $\square$

> **Lemma 2.** From any bivalent configuration $C$ and any event $e$ applicable to it, there is a finite schedule $\sigma$ not containing $e$ such that applying $e$ to $\sigma(C)$ yields a bivalent configuration.

*Sketch.* Suppose not: every way of eventually applying $e$ leads to a univalent configuration. Then there is a **critical step** at which the system commits. Two events at *different* processes commute — delivering $m$ to $p$ and $m'$ to $q$ in either order gives the same configuration — and using that, one constructs two schedules whose outcomes must differ yet which are indistinguishable to all but one process. Crashing that one process (again, the single permitted crash) completes the contradiction. $\square$

**Putting them together.** Start at a bivalent initial configuration (Lemma 1). Repeatedly use Lemma 2 to deliver the oldest pending message while *staying bivalent*. Every message is eventually delivered, so the execution is legal, and no process ever decides — because a decided configuration is univalent. **Termination fails, and it fails in an execution where nobody crashes at all.**

**What FLP assumes, and therefore what a real protocol must break:**

| assumption | how real systems violate it |
|---|---|
| fully asynchronous (no timing bounds) | assume **partial synchrony** — bounds hold eventually ([3.2](03-02-failure-detectors-and-escaping-flp.md)) |
| deterministic algorithm | use **randomisation** — coin flips give termination with probability 1 |
| no external oracle | add a **failure detector** — an unreliable one suffices ([3.2](03-02-failure-detectors-and-escaping-flp.md)) |

**By contrast, synchrony makes it easy.** In a synchronous system with at most $f$ crashes, consensus is solved by flooding: for $f+1$ rounds, every process broadcasts every value it has seen, and after the last round each decides the minimum. The bound is tight — $f+1$ rounds are necessary and sufficient — and the reason is exactly one round per possible crash: a process that crashes mid-broadcast may inform some processes and not others, so **each crash can cost one round of uncertainty**, and after $f+1$ rounds at least one round was crash-free, in which everyone learned everything.

## Picture

![A row of five initial configurations, from all-zero on the left through intermediate configurations to all-one on the right, each connected to the next by an arrow labelled flip one input. The leftmost is marked 0-valent by validity and the rightmost 1-valent; the middle three are marked with question marks. Text below explains that if none of them is bivalent then some adjacent pair is 0-valent and 1-valent differing in only one process p's input, and that crashing p at the very start makes the two runs identical to every other process, so they must decide the same value — a contradiction.](assets/03-01-fig1.svg)

The walk is a discrete intermediate-value argument: a property that is true at one end and false at the other must change somewhere, and the single permitted crash is what makes the changeover point impossible. **One crash is the entire budget the theorem needs.**

## Worked examples

**Example 1 — Lemma 1 on three processes, in full.**

Processes $p_1, p_2, p_3$ with binary inputs. The chain of initial configurations:

$$(0,0,0) \to (1,0,0) \to (1,1,0) \to (1,1,1)$$

By validity, $(0,0,0)$ is 0-valent — only 0 was proposed — and $(1,1,1)$ is 1-valent.

Assume for contradiction that none of the four is bivalent. Then each is 0- or 1-valent, and since the chain starts 0-valent and ends 1-valent there is an adjacent pair that differs. Suppose it is $(1,0,0)$ being 0-valent and $(1,1,0)$ being 1-valent; these differ **only in $p_2$'s input**.

Now run both configurations with **$p_2$ crashing before its first step**.

- In both runs, $p_1$ has input 1 and $p_3$ has input 0.
- In both runs, $p_2$ sends nothing, ever.
- So $p_1$ and $p_3$ receive exactly the same messages in the same order in both runs.

Being deterministic, they take exactly the same steps and **decide the same value**. But the first configuration is 0-valent, so they decide 0, and the second is 1-valent, so they decide 1. Contradiction.

**Hence one of the four configurations is bivalent** — the system starts out with both outcomes genuinely on the table, and no amount of cleverness in the algorithm removes that. Notice that validity is what forces the two ends, and the crash is what forbids a sharp transition: **remove either and the lemma fails.**

**Example 2 — the same problem, made easy by synchrony.**

Five processes, at most $f = 2$ crashes, **synchronous** rounds: every message sent in a round arrives before the next round begins.

*Algorithm.* Each process keeps a set $V$, initially its own input. For $f+1 = 3$ rounds it broadcasts $V$ and unions in everything it receives. After round 3 it decides $\min V$.

*Why it works.* If some round is **crash-free**, every surviving process ends that round holding the same set, and every later round preserves equality — so they all decide the same minimum. With at most 2 crashes and 3 rounds, at least one round has no crash in it. **Pigeonhole, and that is the whole proof.**

*Why $f$ rounds would not do.* Suppose only 2 rounds. An adversary crashes one process mid-broadcast in each round, so that in each round some process learns a value others do not. The uncertainty survives to the end, and with a careful construction two processes hold different sets after round 2 and decide differently. **Each crash buys the adversary exactly one round of confusion; $f+1$ rounds outlast a budget of $f$.**

**Now compare the two lessons.** The synchronous algorithm is four lines and obviously correct. Delete one assumption — that a message sent in a round arrives before the next — and no algorithm exists at all. **The gap between "trivial" and "impossible" is one timing assumption**, which is why [1.1](01-01-why-distributed-systems-are-hard.md) insisted that the first question about any protocol is which model it was proved in.

## Watch out

- **You might think FLP means consensus protocols do not work.** They work every day. FLP forbids a *guarantee* of termination in the worst case; it says nothing about the common case. Paxos and Raft are always safe and terminate whenever the network behaves for long enough, and the executions FLP constructs require an adversary with perfect control of timing forever.
- **You might think more failures make it worse.** One crash is enough for the impossibility, and it is the *possibility* of a crash that does the damage, not an actual crash — the bad execution FLP builds has no crash in it. What the single permitted crash buys is the inability to wait for any particular process.
- **You might think synchrony is the only escape.** There are three, and they are genuinely different. Randomisation keeps full asynchrony and gives termination with probability 1. Failure detectors keep asynchrony and add an oracle that may be wrong. Partial synchrony assumes the network eventually behaves. [3.2](03-02-failure-detectors-and-escaping-flp.md) sorts out which real systems use which.

## One-liner

> Consensus wants agreement, validity and termination; in an asynchronous system where one process might crash, an adversary who controls nothing but message timing can keep both outcomes alive forever — so every real protocol keeps safety unconditionally and buys liveness by assuming the network eventually cooperates.

## Problems

**P1 (🟢)** For each proposed algorithm, state which of agreement, validity or termination it violates, and give the execution that shows it.

(a) Every process immediately decides 0.
(b) Every process decides its own input.
(c) Every process waits to hear from all $n$ processes, then decides the minimum of the inputs received.
(d) Every process broadcasts its input, waits for $n-1$ messages including its own, then decides the minimum of what it received.

**P2 (🟡)** A synchronous system has 7 processes and tolerates at most $f = 3$ crashes, using the flooding algorithm.

(a) Give the number of rounds required.
(b) Give the total number of messages sent in a crash-free execution, counting one message per ordered pair per round.
(c) State the property of a *crash-free round* that makes the algorithm correct, in one sentence.
(d) The team reduces the algorithm to 3 rounds, arguing that three crashes "essentially never happen at once". State what guarantee is lost and what is retained.

**P3 (🔴, optional)** Four processes $p_1, \ldots, p_4$ run a deterministic consensus algorithm in an asynchronous system with at most one crash.

(a) Write the chain of initial configurations from all-zero to all-one, and state the valence of the two ends with the property that forces each.
(b) Suppose $(1,1,0,0)$ is 0-valent and $(1,1,1,0)$ is 1-valent. Give the execution that contradicts this, naming the process crashed and the reason the two runs are indistinguishable.
(c) State which of FLP's three assumptions a Raft cluster violates, and name the concrete mechanism.
(d) A colleague proposes defeating FLP by having each process decide after a fixed 10-second timeout. State which property this buys, which it destroys, and give the execution.

<details>
<summary>Solutions</summary>

**P1**

(a) **Validity.** Agreement holds (everyone decides 0) and termination holds (immediately). But in an execution where every process proposes 1, the decided value 0 was proposed by nobody.

This is the cheat validity exists to forbid, and it is why validity is stated in terms of *some process's input* rather than merely "a legal value".

(b) **Agreement.** Validity and termination both hold trivially. But if $p_1$ proposes 0 and $p_2$ proposes 1, they decide differently.

(c) **Termination.** Agreement holds — everyone who decides computes the minimum over the same set of $n$ inputs — and validity holds. But in an execution where one process crashes before sending anything, every other process waits forever.

This is the most instructive wrong answer, because it is the algorithm people write first, and its flaw is exactly the one [1.1](01-01-why-distributed-systems-are-hard.md) named: it waits for a process it cannot distinguish from a slow one.

(d) **Agreement.** Waiting for only $n-1$ messages fixes termination under one crash. But different processes may receive different subsets of size $n-1$: with inputs $(0, 1, 1)$, process $p_2$ might receive $\{p_2, p_3\}$ and decide $\min\{1,1\} = 1$, while $p_3$ receives $\{p_1, p_3\}$ and decides $\min\{0,1\} = 0$.

**Taken together, (c) and (d) are FLP in miniature**: wait for everyone and lose termination, wait for fewer and lose agreement. Every real protocol escapes this bind by adding rounds and a quorum-intersection argument, not by choosing a better threshold.

**P2**

(a) $f + 1 = \mathbf{4}$ rounds.

(b) Each round, every process sends to every other: $7 \times 6 = 42$ messages. Over 4 rounds:

$$4 \times 42 = \mathbf{168 \text{ messages}}.$$

(This is the cost that makes flooding impractical at scale and is why Paxos and Raft route through a leader instead — $O(n)$ per decision rather than $O(f n^2)$.)

(c) **In a crash-free round, every process sends its whole set to every other process and every one of those messages arrives, so all surviving processes end the round holding exactly the same set — and a later round can only add what everyone adds together, so equality is never broken.**

(d) **Lost: agreement**, in the worst case. With 3 rounds and 3 possible crashes, an adversary can arrange one partial broadcast per round, so no round is guaranteed crash-free and two processes can finish with different sets and decide different values.

**Retained: validity and termination.** The algorithm still halts after 3 rounds and still decides a proposed value. So the failure mode is not a hang — it is a **silent disagreement**, which is strictly worse to operate, because the cluster continues confidently with two different answers.

The argument "three crashes essentially never happen at once" also mis-states the risk: the algorithm needs three crashes *placed adversarially across rounds*, and a rolling deploy or a rack power event produces exactly that pattern.

**P3**

(a) $$(0,0,0,0) \to (1,0,0,0) \to (1,1,0,0) \to (1,1,1,0) \to (1,1,1,1)$$

$(0,0,0,0)$ is **0-valent** and $(1,1,1,1)$ is **1-valent**, both forced by **validity**: when every input is the same value, that is the only value any process may decide.

(b) The two configurations differ only in **$p_3$'s input**.

Run both with **$p_3$ crashing before taking any step**. This is permitted, since at most one crash is allowed. In both runs $p_1$ and $p_2$ have input 1, $p_4$ has input 0, and $p_3$ sends nothing — so $p_1, p_2, p_4$ receive an identical sequence of messages in both runs.

The algorithm is deterministic, so those three processes take identical steps and **decide the same value** in both runs. But $(1,1,0,0)$ being 0-valent forces that value to be 0, and $(1,1,1,0)$ being 1-valent forces it to be 1. Contradiction, so at least one of the configurations in the chain is bivalent.

(c) Raft violates the **asynchrony** assumption: it assumes **partial synchrony**, meaning message delays and processing times are eventually bounded.

The concrete mechanism is the **election timeout**. A follower that hears nothing for a randomised interval becomes a candidate, and the protocol makes progress only when that timeout eventually exceeds the real round-trip time for long enough to complete an election. When the network misbehaves, elections repeat and the cluster makes no progress — which is FLP's non-terminating execution appearing in production as a leadership flap.

(The randomised timeout also gives it a second escape: randomisation breaks the symmetry of two candidates repeatedly splitting the vote.)

(d) **Buys termination. Destroys agreement.**

The execution: processes $p_1$ and $p_2$ propose 0 and 1. The network delays all messages by 11 seconds. At $t = 10$, every process decides on whatever it knows, which is only its own input — so $p_1$ decides 0 and $p_2$ decides 1. At $t = 11$ the messages arrive, far too late to matter, and the decisions are irrevocable.

**This is the general shape of every attempt to defeat FLP with a timeout**, and it is worth stating as a rule: a timeout converts an asynchronous system into a system that *assumes* synchrony, and when the assumption is wrong, the protocol does not slow down — it becomes incorrect. That is exactly why Paxos and Raft use timeouts **only to trigger a new attempt**, never to decide anything. The timeout affects liveness and is never allowed to affect safety.

</details>

## Flashback

**From Lesson 1.7 (ordered broadcast):** A team implements a replicated log by having every process broadcast its entries with **causal broadcast** and apply them in delivery order.

(a) State whether two processes are guaranteed to hold the same log, with the reason.
(b) State the strongest broadcast guarantee that would give identical logs, and name its cost.
(c) Give the reduction from consensus to that guarantee, in two sentences.

<details>
<summary>Solution</summary>

(a) **No.** Causal broadcast orders only causally related messages. Two entries broadcast concurrently — neither in the other's causal past — may be delivered in either order, independently at each process, so two logs can differ in the relative position of those entries and both be correct.

(b) **Total-order broadcast**, which requires every process to deliver every message in the same order.

Its cost is that it is **exactly as hard as consensus**: the two are reducible to each other, so total-order broadcast inherits FLP's impossibility in an asynchronous system and, in practice, the latency of a coordination round per entry.

(c) Every process broadcasts its proposed value using total-order broadcast, and every process decides **the first message it delivers**. Since all processes deliver the same first message, they all decide the same value, and since every delivered message was some process's proposal, validity holds too.

(The reduction in the other direction is just as short: run consensus instance $k$ to decide which message occupies position $k$ of the delivery order. That is precisely what [3.6](03-06-state-machine-replication.md) builds.)

</details>

## Connections

- **Backward:** the proof is [1.1](01-01-why-distributed-systems-are-hard.md)'s indistinguishability argument used twice, and the crash it needs is the crash-stop model of [1.2](01-02-failure-models-and-the-network.md) — the weakest failure in the lattice, which makes the impossibility as strong as possible.
- **Forward:** [3.2](03-02-failure-detectors-and-escaping-flp.md) works through the three escapes and names exactly which extra assumption each real protocol buys; [3.3](03-03-paxos.md) and [3.4](03-04-raft.md) are protocols built to be safe unconditionally and live only under partial synchrony.
- **Sideways:** Lemma 1 is a discrete intermediate-value argument — a property true at one end of a chain and false at the other must change somewhere — the same move as the proof techniques in [`discrete-mathematics` 1.3](../../discrete-mathematics/lessons/01-03-proof-techniques.md). And the $f+1$ round bound in Example 2 is pigeonhole: $f$ crashes cannot spoil $f+1$ rounds.
- **Sideways:** FLP belongs to the same family as the undecidability results in `theory-of-computation` (unbuilt) — a proof that no algorithm exists, established by showing any candidate can be defeated by an adversary construction, rather than by exhibiting a hard instance.

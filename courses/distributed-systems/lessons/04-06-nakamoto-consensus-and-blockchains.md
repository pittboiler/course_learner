# Distributed Systems · Lesson 4.6: Nakamoto consensus and blockchains

> ⏱ ~15 min · Module 4: Fault Tolerance and Distributed Data · Builds on: [4.5 (Byzantine fault tolerance)](04-05-byzantine-fault-tolerance.md), [2.3 (anti-entropy)](02-03-eventual-consistency-and-anti-entropy.md), [3.5 (CAP)](03-05-the-cap-theorem-and-pacelc.md) · Unlocks: this is the course's final lesson

## Why this matters

[4.5](04-05-byzantine-fault-tolerance.md) tolerated $f$ liars among $n$ nodes — and every word of that depends on knowing $n$. Byzantine quorums are counted, so the membership must be fixed and known, and an adversary who can manufacture identities can manufacture a quorum. That is the **Sybil attack**, and it is not a defect in PBFT so much as the boundary of what a counted quorum can mean.

Open systems have no membership list. Anyone may join, identities are free, and nobody can be excluded. Nakamoto consensus is the answer that made those systems work, and it earns its place in this course for a reason independent of cryptocurrency: **it is the only protocol here that abandons deterministic agreement entirely**, replacing "this is decided" with "this is exponentially unlikely to be undecided", and seeing why it has to is the cleanest way to understand what the rest of Module 3 was buying.

## The idea

If identities are free, stop counting them. Count something that is not free.

**Proof of work.** A block contains the hash of its predecessor, a batch of transactions, and a **nonce**. A block is valid only if its own hash falls below a target — so producing one requires trying enormous numbers of nonces, and finding one is evidence that real computation happened. Votes are now weighted by **hash rate**, not by identity, and creating a million fake identities buys nothing because they share the same processor.

**The longest chain rule.** Miners extend the chain with the most accumulated work. Two miners finding blocks at nearly the same time creates a fork; the fork is resolved when one branch gets the next block, and every honest miner abandons the shorter branch. **This is why blocks come slowly on purpose** — Bitcoin's ten-minute target is far longer than the time to propagate a block worldwide, so forks are rare and short.

**And the price: nothing is ever final.** A transaction six blocks deep can still be reverted, if an attacker mining privately produces a longer chain and releases it. What the protocol offers is that the probability of that falls exponentially in the depth — provided the attacker holds less than half the hash power. At 10 percent, six blocks puts the reversal risk at about 1 in 4,000. At 45 percent, you would need to wait **340** blocks for the same assurance, and at 50 percent no depth is enough.

**Compare it with everything before.** PBFT gives you a decision that is final the instant it is made, with $O(n^2)$ messages among a known committee. Nakamoto gives you a decision that is never final, with gossip among an unbounded and unknown set. **The trade is open membership against deterministic finality**, and it is a genuine trade rather than a better answer.

## The formal version

> **Block.** $B = (\mathrm{prev}, \mathrm{root}, \mathrm{nonce})$, where $\mathrm{prev}$ is the hash of the preceding block and $\mathrm{root}$ is a **Merkle root** over the block's transactions ([2.3](02-03-eventual-consistency-and-anti-entropy.md)). $B$ is valid when $H(B) < T$ for a difficulty target $T$.

The hash function is assumed **collision-resistant and preimage-resistant**, so the only way to find a qualifying nonce is to try them, and the only way to alter a block is to redo its work and every block after it. (These are the assumptions `cryptography` will establish; they are listed as assumed on the reference card.)

> **Mining.** Finding a nonce is a Bernoulli trial per attempt with success probability $T/2^{256}$, so block discovery is a Poisson process. The difficulty target is adjusted periodically to hold the mean inter-block time constant — ten minutes for Bitcoin, regardless of how the total hash rate changes.

> **Longest-chain (most-work) rule.** An honest node adopts the valid chain with the greatest total work and mines on its tip.

> **Nakamoto's double-spend bound.** Let $q$ be the attacker's share of hash power and $p = 1 - q$. An attacker mining privately from $z$ blocks behind catches up with probability
> $$P(z) = 1 - \sum_{k=0}^{z} \frac{\lambda^k e^{-\lambda}}{k!}\left(1 - \left(\tfrac{q}{p}\right)^{z-k}\right), \qquad \lambda = z\,\frac{q}{p}.$$

The structure: the Poisson term is how many blocks the attacker found while the honest chain advanced $z$, and the $(q/p)^{z-k}$ factor is the gambler's-ruin probability of closing the remaining gap. **When $q < p$ that ratio is below 1 and the probability decays exponentially in $z$; when $q \ge p$ it is 1 and no depth helps.**

Blocks needed for a reversal risk below 0.1 percent:

| attacker share $q$ | blocks $z$ | time at 10 min/block |
|---|---|---|
| 10% | 5 | 50 min |
| 20% | 11 | 1.8 h |
| 25% | 15 | 2.5 h |
| 30% | 24 | 4.0 h |
| 40% | 89 | 14.8 h |
| 45% | 340 | 2.4 days |

**Notice the shape.** From 10 to 25 percent the cost triples; from 25 to 45 percent it rises by a factor of 23. The security is not linear in the attacker's share — it collapses as $q$ approaches one half, which is why "51 percent attack" names a threshold rather than a gradual degradation.

> **What Nakamoto consensus assumes.** An honest **majority of hash power**; block interval much longer than network propagation delay, so forks are rare; and participants economically motivated to extend the longest chain rather than to attack it.

The second assumption is a synchrony assumption in disguise, and the third is not a distributed-systems assumption at all — it is an economic one, and it is doing real work in the security argument.

## Picture

![A chain of six blocks numbered 0 to 5 forming the honest chain, with each block pointing back to its predecessor, labelled as five blocks ahead. Below it, branching from block 0, a shorter chain of three blocks marked with primes represents the attacker's private chain, two blocks behind. To the right, a table gives the number of blocks to wait for a one-in-a-thousand reversal risk against the attacker's share of hash power: 5 blocks at 10 percent, 11 at 20 percent, 24 at 30 percent, 89 at 40 percent and 340 at 45 percent. Text notes that each extra block makes a reversal exponentially less likely only while the attacker holds under half the hash power, and that at 50 percent no waiting time suffices.](assets/04-06-fig1.svg)

The table is the lesson. **The same protocol, the same six blocks, means completely different things depending on a quantity you cannot measure** — the attacker's share of hash power. Every other protocol in this course states its fault bound as a number you choose when you size the cluster; this one states it as an assumption about a market.

## Worked examples

**Example 1 — how deep is deep enough?**

A merchant accepts a payment and wants the risk of reversal below one in a thousand.

**Against an attacker with 10 percent of hash power.** From the formula, $P(5) = 0.00091$, so **5 confirmations** suffice — about 50 minutes. The conventional six-confirmation rule is this calculation with a small safety margin.

**Against 30 percent.** $P(24) = 0.00081$, so **24 confirmations** — four hours. Waiting six blocks against a 30 percent attacker leaves a reversal probability of $P(6) = 0.132$: **better than one chance in eight**, which for a large payment is not a risk anyone should accept.

**Against 45 percent.** **340 confirmations**, 2.4 days. The protocol still works, in the sense that the probability still decays; it has simply stopped being usable.

**What the merchant must actually decide.** Not "how many confirmations is standard" but **"what share of hash power could plausibly be turned against this transaction, and what is the transaction worth?"** A coffee is safe with zero confirmations, because nobody rents hash power to steal a coffee. A large settlement is not safe at six, because the attack becomes worth financing.

**And notice what this is not.** It is not a fault bound. Every other protocol in the course says "tolerates $f$ faults" and $f$ is a number you chose when you bought the machines. Here the tolerance depends on an adversary's *budget*, which is unobservable and can change between when you accept the payment and when you ship the goods.

**Example 2 — why the block interval is ten minutes.**

A fork happens when two miners find blocks before hearing about each other's. If a block takes $\Delta$ seconds to propagate to most of the network and blocks arrive on average every $\tau$ seconds, the chance that a competing block appears during propagation is roughly $\Delta/\tau$.

**Bitcoin:** $\Delta \approx 10$ s, $\tau = 600$ s, so about **1.7 percent** of blocks are orphaned. Small enough to ignore.

**Cut $\tau$ to 10 seconds** for faster confirmations. Now $\Delta/\tau \approx 1$ — comparable numbers — and forks become routine rather than rare.

**Why frequent forks are not merely wasteful.** Honest hash power splits across competing branches while the attacker, mining privately on one branch, does not split at all. So the *effective* honest majority shrinks, and the security threshold falls below 50 percent — meaning an attacker with, say, 40 percent can win. **Shortening the block interval does not merely trade throughput for orphan rate; it weakens the security bound itself**, which is why the protocols that do achieve fast confirmation change the fork-choice rule (GHOST and its descendants count the work in abandoned subtrees) rather than just turning the interval down.

**The general shape, and the reason this closes Module 4.** Nakamoto consensus needs the block interval to dominate the propagation delay, which is a **synchrony assumption**. It is the same bargain [3.2](03-02-failure-detectors-and-escaping-flp.md) described: safety is conditional on the network behaving, and the protocol degrades — here, continuously, rather than by halting — when it does not. **Every protocol in this course escapes FLP by assuming something about timing, randomness, or both. Nakamoto uses both at once**: randomness to elect a leader without an election, and synchrony to make the leader's block reach everyone before the next one is found.

## Watch out

- **You might think six confirmations is a rule.** It is one calculation, for one attacker share. Against 30 percent of hash power, six blocks leaves a 13 percent reversal probability. The number of confirmations should be a function of the value at stake and the hash power that could be hired against it.
- **You might think proof of work provides Byzantine agreement.** It provides **probabilistic** agreement with no finality, under an honest-majority-of-hash-power assumption and a synchrony assumption. PBFT provides deterministic agreement, with finality, among a known committee. They solve different problems, and "blockchain solves Byzantine generals" flattens the difference that matters most.
- **You might think the honest majority is a majority of nodes.** It is a majority of **hash power**. Running more nodes changes nothing, which is the entire point of the Sybil defence — and it means the security depends on a distribution nobody can observe directly.

## One-liner

> When identities are free, quorums stop meaning anything, so Nakamoto weights votes by work instead of by identity and accepts the consequence: agreement is never final, only exponentially unlikely to be reversed — and only while the attacker holds less than half the hash power.

## Problems

**P1 (🟢)** Use the confirmation table.

(a) Give the confirmations needed for a 0.1 percent reversal risk against a 20 percent attacker, and the wall-clock time at 10 minutes per block.
(b) Give the same for a 40 percent attacker.
(c) State the factor by which the required wait grows between (a) and (b), and whether it is proportional to the change in attacker share.
(d) State what happens to the required depth as the attacker share approaches 50 percent, and why.

**P2 (🟡)** A chain has a mean block interval $\tau$ and a block propagation time $\Delta \approx 12$ seconds.

(a) Give the approximate orphan rate for $\tau = 600$ s and for $\tau = 15$ s.
(b) State why a high orphan rate weakens security rather than merely wasting work, in one sentence.
(c) A designer proposes $\tau = 60$ s. Give the orphan rate and state whether it is acceptable, with a reason.
(d) Name the change to the fork-choice rule that lets a chain shorten $\tau$ without the security loss, and state what it counts.

**P3 (🔴, optional)** A consortium of 10 known banks must agree on a shared ledger.

(a) State whether Nakamoto consensus or PBFT is the right choice, with two reasons.
(b) Give the PBFT fault tolerance and quorum size for 10 nodes, and the messages per request.
(c) One bank argues for proof of work "because it is more secure". State what that would actually buy and what it would cost, in this setting.
(d) Now change the setting: the ledger is open to anyone. State which of PBFT's requirements fails and why no amount of extra nodes repairs it.

<details>
<summary>Solutions</summary>

**P1**

(a) **11 confirmations**, which at 10 minutes per block is $110$ minutes $= \mathbf{1.8 \text{ hours}}$.

(b) **89 confirmations**, $890$ minutes $= \mathbf{14.8 \text{ hours}}$.

(c) $89/11 = \mathbf{8.1 \text{ times}}$ longer.

**Not remotely proportional.** The attacker's share doubled, from 20 to 40 percent, and the required wait grew eightfold. The reason is the $(q/p)^{z-k}$ term in the bound: $q/p$ goes from $0.25$ to $0.667$, and since the decay is exponential with that ratio as the base, a modest change in the base produces a large change in the exponent needed for a fixed probability.

(d) The required depth **diverges to infinity**.

As $q \to 0.5$, $q/p \to 1$, and $(q/p)^{z-k} \to 1$ for every $z$ — so the gambler's-ruin factor stops decaying and the reversal probability no longer falls with depth. Intuitively, at equal hash power the private chain is a symmetric random walk relative to the honest chain, and a symmetric random walk returns to any level with probability 1 given unlimited time. **The attacker does not need luck, only patience**, which is why the security argument is a strict-majority argument and not a margin.

**P2**

(a) The orphan rate is roughly $\Delta/\tau$:

- $\tau = 600$: $12/600 = \mathbf{2\%}$.
- $\tau = 15$: $12/15 = \mathbf{80\%}$ — four blocks in five are orphaned, and the chain barely advances.

(b) **Because honest hash power splits across competing branches while an attacker mining privately on a single branch does not, so the effective honest majority shrinks and the 50 percent security threshold falls with it.**

(c) $12/60 = \mathbf{20\%}$ orphaned.

**Not acceptable.** One block in five is wasted, so a fifth of all honest work is discarded and the effective honest share drops by roughly that factor — an attacker with about 40 percent of raw hash power would be competing against an honest 48 percent of *effective* power, which is uncomfortably close to parity. The throughput gain is also less than the tenfold the interval suggests, since a fifth of the blocks produced are thrown away.

(d) **GHOST** — Greedy Heaviest-Observed Sub-Tree — and its descendants.

What it counts: instead of the work on the longest *chain*, it counts the work in the **entire subtree** rooted at each branch, so blocks that were orphaned still contribute to the weight of the branch they were built on. Honest work spent on a fork is no longer discarded from the security calculation, which restores the effective honest majority and lets the block interval come down without the threshold falling with it.

**P3**

(a) **PBFT.**

Two reasons. First, **the membership is known and fixed** — ten identified banks — which is precisely the precondition PBFT needs and Nakamoto exists to work around. Second, **finality is required**: a settlement ledger cannot offer "probably not reversed, and more probably as time passes"; participants need to know when a transfer is done, which is what deterministic agreement provides and Nakamoto structurally cannot.

A third reason worth noting: PBFT's cost at $n = 10$ is trivial, while proof of work's cost is enormous and buys nothing here.

(b) $10 \ge 3f+1$ gives $\mathbf{f = 3}$. Quorum $= 2f+1 = \mathbf{7}$. Prepare and commit are all-to-all: $2 \times 10 \times 9 = \mathbf{180 \text{ messages}}$ per request.

(c) **What proof of work would buy: nothing that is needed here.** Its only unique contribution is Sybil resistance — making identities expensive so that an unknown, unbounded population can be reasoned about. The consortium already knows exactly who the ten participants are, so identities are not free and there is nothing to defend against.

**What it would cost:** the energy of continuous mining; a throughput ceiling set by the block interval; and — the decisive one — **the loss of finality**, replacing PBFT's immediate irrevocable decision with a probability that decays over hours. For a settlement system that is a strict downgrade.

The phrase "more secure" is doing the damage. PBFT tolerates 3 of 10 banks being arbitrarily malicious, *deterministically*. Proof of work would tolerate under half the hash power being malicious, *probabilistically*, and the hash power distribution among ten banks is not something anyone would prefer to rely on.

(d) **The failing requirement is a known, fixed membership.**

PBFT's safety rests on counting: quorums of $2f+1$ out of $3f+1$, intersecting in at least one honest node. Both numbers presuppose that $n$ is known and that each participant is one identity. In an open system an adversary creates as many identities as it likes at negligible cost — the **Sybil attack** — and can therefore manufacture a quorum consisting entirely of itself.

**No amount of extra nodes repairs it** because the adversary's identity count scales with yours at zero marginal cost: raising $n$ raises the quorum size, and the adversary simply creates more identities to meet it. The bound $n \ge 3f+1$ is not violated so much as rendered meaningless, since $f$ is no longer a property of the world but a variable the adversary sets.

**The repair has to make identities expensive** — proof of work, or a stake that can be forfeited — which is a different mechanism from anything in [4.5](04-05-byzantine-fault-tolerance.md) and is exactly what this lesson is about.

</details>

## Flashback

**From Lesson 4.5 (Byzantine fault tolerance):** A permissioned network sizes itself for $f = 4$ Byzantine faults.

(a) Give the minimum node count and the quorum size.
(b) Give the guaranteed number of honest nodes in the intersection of two quorums, with the arithmetic.
(c) State how many **crash** faults the same node count would tolerate, and the clause that explains the gap.

<details>
<summary>Solution</summary>

(a) $n \ge 3f+1 = 3(4)+1 = \mathbf{13}$ nodes, quorum $2f+1 = \mathbf{9}$.

(b) Two quorums of 9 from 13 intersect in at least $2(9) - 13 = 5$ nodes. At most $f = 4$ of those are faulty, so at least $5 - 4 = \mathbf{1}$ is honest.

The margin is exactly one node, which is what "tight bound" means: with 12 nodes the intersection would be $2(9) - 12 = 6$... but the quorum would also change, and at $n = 12$ the tolerable $f$ drops to 3. **The bound leaves no slack at $3f+1$, and that is the whole design.**

(c) Crash faults need $n \ge 2f+1$, so $13 \ge 2f+1$ gives $\mathbf{f = 6}$.

The gap — 6 crashes against 4 liars on the same hardware — exists because **a crash-tolerant quorum only needs two quorums to share a node, while a Byzantine quorum needs them to share an honest node**, which forces the overlap past $f$ rather than merely past zero.

</details>

## Connections

- **Backward:** the Merkle root in each block is [2.3](02-03-eventual-consistency-and-anti-entropy.md)'s tree used for inclusion proofs rather than difference-finding; the Sybil problem is what [4.5](04-05-byzantine-fault-tolerance.md)'s counted quorums cannot survive; and the longest-chain rule is an availability-first choice in the sense of [3.5](03-05-the-cap-theorem-and-pacelc.md) — both sides of a partition keep mining, and the chains reconcile afterwards with the shorter one's transactions discarded.
- **Sideways:** the double-spend bound is a gambler's-ruin calculation over a random walk with drift, the same machinery as first-passage problems in [`probability-theory` 5.3](../../probability-theory/lessons/05-03-martingales.md) — and the reason the security collapses at exactly one half is that the drift vanishes there and the walk becomes recurrent.
- **Sideways:** the cryptographic assumptions this lesson leans on — collision resistance, preimage resistance, digital signatures — are stated and not derived here, and are recorded under "Assumed, not taught here" on the reference card, pointing at `cryptography` when it is built.

## Closing the course

Look back at what the four modules did, because there is one argument running through all of them.

**Module 1** established that a node cannot tell a crashed peer from a slow one, and built the tools for reasoning without that knowledge: causality instead of clocks, consistent cuts instead of global state, delivery guarantees instead of hope.

**Module 2** applied it to data and found a ladder. Linearizability is what a single machine gives you free and a distributed system charges a round trip for; every rung below it licenses one specific anomaly, and the right question is never "how consistent" but "which anomaly can this application survive".

**Module 3** proved that the strongest rung cannot always be reached — FLP for termination, CAP for availability — and then built the protocols that get there anyway by assuming the network eventually behaves. **Safety unconditional, liveness conditional** is the shape of every one of them.

**Module 4** scaled it up, and the recurring lesson was that the expensive mechanisms should be used as little as possible: commit protocols only where atomicity is genuinely needed, re-execution instead of agreement where the work is deterministic, hashing instead of coordination where placement is all you need.

If one idea deserves to survive the year, it is the one from [1.1](01-01-why-distributed-systems-are-hard.md) that every later lesson used again: **stop trying to learn what happened, and make the next thing you do correct in every world consistent with what you observed.** Idempotent retries do it. Paxos's phase 1 does it. A quorum read does it. Fencing tokens do it. It is the whole discipline in one sentence, and it works precisely because the thing you wanted to know — what is happening on the other machine, right now — is the one thing you can never have.

# Quantum Computing · Lesson 5.5: Fault tolerance, the threshold, and the surface code

> ⏱ ~15 min · Module 5: Noise and quantum error correction · Builds on: [5.4 (stabilizer codes)](05-04-stabilizer-codes-and-the-css-construction.md), [5.1 (quantum channels)](05-01-quantum-channels-and-decoherence.md), [1.6 (universal gate sets)](01-06-universal-gate-sets-and-circuit-synthesis.md) · Unlocks: [6.6 (resource estimation)](06-06-resource-estimation-and-the-state-of-the-field.md)

## Why this matters

Everything in Module 5 so far assumed the *correction* machinery was perfect. It is not. The syndrome circuits are made of the same noisy gates as everything else, the ancillas decohere, the measurements misread. So the honest question is not "can we correct errors?" but "**can we correct errors faster than we create them?**"

The answer is the **threshold theorem**, and it is the most important theorem in the field. If the physical error rate is below a critical value $p_{\text{th}}$, then arbitrarily long computations are possible with only polylogarithmic overhead. Above it, encoding makes things worse. One number decides whether quantum computing is an engineering problem or an impossibility.

Three things follow, and they set every number in [6.6](06-06-resource-estimation-and-the-state-of-the-field.md).

- **Error propagation must be controlled.** A single fault must not spread into two, which forces a discipline called transversality.
- **A universal gate set cannot be transversal** (Eastin–Knill), so at least one gate must be implemented another way. That way is **magic-state distillation**, and it dominates the cost of every large quantum computation.
- **The surface code wins**, despite being far less efficient per logical qubit than the codes of [5.4](05-04-stabilizer-codes-and-the-css-construction.md), because its checks are geometrically local and its threshold is around 1 percent.

## The idea

**The threshold, in one calculation.** Encode a qubit in a distance-3 code. A single error is corrected, so failure needs two, and the probability of two independent errors among the roughly $c$ locations in one round is about $c\,p^2$. So the logical error rate is

$$p_L \approx c\,p^2,$$

and encoding helps exactly when $cp^2 < p$, that is $p < 1/c$. **That $1/c$ is the threshold**, and $c$ counts the ways a round can go wrong — gate count, measurement count, idle time.

Now nest: encode the *logical* qubits of one layer into another copy of the code. The new logical error rate is $c\,p_L^2 = c(cp^2)^2$, and iterating $L$ times gives

$$p_L^{(L)} \approx \frac{1}{c}\left(cp\right)^{2^L}.$$

Doubly exponential suppression for exponential-in-$L$ overhead — that is, **polylogarithmic overhead for any target error rate**, provided $cp < 1$. That is the threshold theorem in miniature.

**Why one fault must not become two.** A distance-3 code corrects one error. If a single faulty gate inside your syndrome circuit produces two errors on the data, the code fails and the whole scheme collapses back to $p_L \sim p$. So circuits must be designed so that **one fault causes at most one error per code block**. The standard discipline is *transversality*: act qubit-wise, never coupling two qubits within a block. From [5.4](05-04-stabilizer-codes-and-the-css-construction.md) P3, the Steane code's whole Clifford group is transversal.

**Why that is not enough.** Eastin and Knill proved that no error-detecting code has a *universal* transversal gate set. The Cliffords can be transversal; the gate that leaves the Clifford group — the $T$ gate of [1.6](01-06-universal-gate-sets-and-circuit-synthesis.md) — cannot. So $T$ gates must be produced by a different route: prepare a noisy "magic state," purify many of them into one good one, and teleport the gate onto the data ([2.4](02-04-quantum-teleportation.md)). **Magic-state factories are where the qubits go** in every serious resource estimate.

## The formal version

> **Threshold theorem (Aharonov–Ben-Or, Kitaev, Knill–Laflamme–Zurek).** There exists a constant $p_{\text{th}} > 0$ such that if every physical operation fails with probability at most $p < p_{\text{th}}$, then any quantum circuit of $G$ gates can be simulated to accuracy $\epsilon$ using $O\!\left(G\,\mathrm{polylog}(G/\epsilon)\right)$ physical operations.

In words: below threshold, arbitrary-length computation costs only a polylogarithmic factor more. The theorem says nothing about the *size* of $p_{\text{th}}$, and the whole engineering game is finding codes with large thresholds and hardware with small $p$.

> **Fault tolerance requirements.** A circuit is fault-tolerant if (i) one fault produces at most one error per code block, (ii) syndrome extraction is repeated enough times to tolerate faulty measurements, and (iii) gates are applied without decoding the data.

> **Eastin–Knill theorem.** For any error-detecting code, the set of transversally implementable gates is a finite group, hence not universal.

In words: you cannot have both. This is the same counting argument as [1.6](01-06-universal-gate-sets-and-circuit-synthesis.md)'s "no finite set is exactly universal," now forced on you by the code rather than chosen.

> **Magic-state distillation.** The $\lvert T\rangle$ state $\lvert T\rangle \propto \lvert0\rangle + e^{i\pi/4}\lvert1\rangle$ suffices to apply a $T$ gate by gate teleportation using only Clifford operations. The 15-to-1 protocol consumes 15 copies with error $p$ and outputs one with error $\approx 35p^3$.

Iterating that cubic suppression is dramatic:

| distillation round | input error | output error |
|---|---|---|
| 1 | $10^{-3}$ | $3.5\times10^{-8}$ |
| 2 | $3.5\times10^{-8}$ | $1.5\times10^{-21}$ |

Two rounds take you from $10^{-3}$ to $10^{-21}$ at a cost of $15^2 = 225$ input states per output — cheap in principle, and in practice the factory's qubit footprint often exceeds the computation's.

Now the code that gets built:

> **The surface code.** Data qubits sit on a $d\times d$ lattice; each check is a weight-4 Pauli acting on the four qubits around a face ($Z$-type) or a vertex ($X$-type). It is a $[[d^2, 1, d]]$ CSS code needing about $2d^2$ physical qubits per logical qubit including ancillas. Its threshold under realistic circuit-level noise is
> $$p_{\text{th}}\approx 1\%,$$
> and its logical error rate is well fitted by
> $$p_L \approx 0.1\left(\frac{p}{p_{\text{th}}}\right)^{(d+1)/2}.$$

In words: every increase of the code distance by 2 divides the logical error rate by $p_{\text{th}}/p$. At $p = 10^{-3}$, one tenth of threshold, that means **an order of magnitude per two units of distance** — the exponential suppression that makes everything possible.

| $d$ | physical per logical $\approx2d^2$ | $p_L$ at $p = 10^{-3}$ |
|---|---|---|
| 7 | 98 | $10^{-5}$ |
| 15 | 450 | $10^{-9}$ |
| 21 | 882 | $10^{-12}$ |
| 27 | 1,458 | $10^{-15}$ |

> **Why the surface code, given its terrible rate?** Three reasons: its checks are **weight 4 and nearest-neighbour**, matching what planar hardware can build; its threshold is the highest known for a practical code, an order of magnitude better than concatenated small codes; and its decoding is a tractable classical problem (minimum-weight perfect matching on the syndrome graph).

## Picture

![Left: a log-log plot of logical error rate against physical error rate, with four curves for code distances 3, 7, 15 and 27, all passing through a common crossing point marked by a red dashed vertical line labelled p-threshold approximately 1 percent. A grey dashed diagonal marks the break-even line where the logical rate equals the physical rate. Captions note that below threshold bigger codes help exponentially, and above it bigger codes make things worse. Right: a five-by-five grid of blue dots representing data qubits, with alternating green and orange shaded squares between them representing Z-type and X-type checks, labelled surface code at distance 5. Notes say there are d-squared equals 25 data qubits, d-squared minus one checks, about 2 d-squared physical qubits per logical qubit, that every check touches only nearest neighbours, and that this is why it is the code people build. A small table gives distance 7, 15 and 27 against physical qubits per logical of 98, 450 and 1,458 and logical error rates of ten to the minus five, minus nine and minus fifteen at a physical error rate of ten to the minus three.](assets/05-05-fig1.svg)

The crossing point on the left is the whole theorem. To the left of it, more qubits buy you exponentially better logical qubits. To the right, more qubits buy you more ways to fail. **Hardware development is the project of getting and staying to the left of that line**, and current superconducting and trapped-ion devices are just barely there.

## Worked examples

**Example 1 — what distance does Shor's algorithm need?**

From [4.4](04-04-shors-factoring-algorithm.md), factoring RSA-2048 needs about 6,200 logical qubits and $2.6\times10^9$ Toffoli gates. Call the total number of logical operations $\mathcal N \approx 10^{10}$ once you count the Clifford overhead.

*The requirement.* For the whole computation to succeed with decent probability, the expected number of logical errors must be below 1:

$$\mathcal N \times p_L < 1 \implies p_L < 10^{-10}.$$

*The distance.* At a physical error rate $p = 10^{-3}$, solve $0.1\,(0.1)^{(d+1)/2} < 10^{-10}$:

$$(d+1)/2 > 9 \implies d > 17,$$

so take $d = 19$ or, with margin for the routing and factory overhead, $d \approx 25$–$27$.

*The qubit count.*

$$6{,}200 \text{ logical} \times 2d^2 \approx 6{,}200\times1{,}458 \approx 9\times10^6 \text{ physical qubits},$$

and adding magic-state factories, routing space, and idle regions brings the canonical figure to about **20 million physical qubits** — the Gidney–Ekerå estimate quoted in [4.4](04-04-shors-factoring-algorithm.md).

*Wall clock.* A surface-code round takes about 1 µs (limited by measurement, not gates), and a logical operation takes $O(d)$ rounds, so $\approx 25$ µs per logical gate. With $10^{10}$ logical operations, running sequentially, that would be $2.5\times10^5$ s — about three days. Parallelizing across the lattice brings it to the quoted **8 hours**.

**The arithmetic to remember**: physical error rate sets the distance, distance squared sets the qubit overhead, and the number of logical operations sets the required logical error rate. Change $p$ from $10^{-3}$ to $10^{-4}$ and $d$ drops from 27 to about 13, cutting the qubit count by a factor of 4. **A tenfold improvement in gate fidelity is worth more than a fourfold increase in qubit count**, which is why hardware roadmaps emphasize fidelity.

**Example 2 — why a universal transversal gate set is impossible, and what it costs.**

*The obstruction.* Suppose every gate in a universal set were transversal. Transversal gates on a code form a group, and the Eastin–Knill argument shows that group must be finite (roughly: the code's error-detection property forces the transversal group to act discretely on the code space). But a universal gate set generates a dense, infinite subgroup ([1.6](01-06-universal-gate-sets-and-circuit-synthesis.md)). A finite group cannot be dense. Contradiction.

*The workaround.* Keep the Cliffords transversal, and get $T$ gates by **gate teleportation**:

1. Prepare a magic state $\lvert T\rangle \propto \lvert0\rangle + e^{i\pi/4}\lvert1\rangle$, encoded. Noisy preparation is fine.
2. **Distill:** consume 15 noisy copies with error $p$ via a Clifford circuit, output one with error $\approx35p^3$. Repeat if needed.
3. **Teleport:** consume the good magic state in a Clifford circuit that applies $T$ to the data ([2.4](02-04-quantum-teleportation.md)).

*The cost.* Every $T$ gate consumes one distilled magic state. Shor on RSA-2048 needs roughly $10^{10}$ of them, and each distillation round costs 15 inputs plus a Clifford circuit at full code distance. In published layouts the magic-state factories occupy a **comparable or larger footprint than the computation itself** — often cited as 10 to 50 percent of the total qubit budget, and sometimes the majority.

Which is why one number dominates fault-tolerant compilation:

$$\textbf{the } T\textbf{-count.}$$

Clifford gates are nearly free (transversal, no distillation); $T$ gates cost a factory. Every serious compiler optimization for a fault-tolerant machine is a scheme to reduce $T$-count — and it is why [1.6](01-06-universal-gate-sets-and-circuit-synthesis.md)'s "about $3\log_2(1/\epsilon)$ $T$ gates per rotation" is the exchange rate that sets the bill. The whole discipline reduces to: minimize $T$ gates, then buy qubits.

## Watch out

- You might think the threshold theorem says quantum computers are easy. It says they are *possible*, with polylogarithmic overhead, provided $p < p_{\text{th}}$. The constants are brutal: a thousand-plus physical qubits per logical qubit at today's error rates, and the polylog hides factors of hundreds. The theorem converts an impossibility into an engineering problem, which is a great deal less than converting it into a product.
- You might think you can improve the logical error rate by adding physical qubits at any error rate. Above threshold, adding qubits makes it **worse** — more locations to fail, and the correction cannot keep up. The left-of-the-line condition is not negotiable, and demonstrating it experimentally (a logical qubit outperforming its physical constituents) was a landmark result, not a formality.
- You might think error correction happens once per circuit. It happens **continuously**, every microsecond, for the whole computation. A distance-27 surface code runs 27 rounds of syndrome extraction per logical gate, each round measuring all $d^2-1$ checks, with a classical decoder keeping up in real time. The classical computing requirement is itself substantial.
- You might think reducing qubit count is the main goal. The binding constraints in order are: physical error rate (sets $d$, which enters squared), $T$-count (sets factory size), and connectivity (rules codes in or out). Raw qubit count is a consequence of those three, not an independent lever.

## One-liner

> Below a threshold of about one percent, each two units of code distance divides the logical error rate by ten — so fault tolerance is possible, costs a thousand physical qubits per logical qubit, and bills you per $T$ gate.

## Problems

**P1 (🟢)** Using $p_L \approx 0.1(p/p_{\text{th}})^{(d+1)/2}$ with $p_{\text{th}} = 10^{-2}$, compute the logical error rate at $p = 10^{-3}$ for $d = 5$, $d = 11$, and $d = 21$, together with the physical qubits per logical qubit ($\approx 2d^2$) in each case. Then state the pattern relating distance to error suppression.

**P2 (🟡)** A computation needs $10^{8}$ logical operations to succeed with probability at least 0.9. (a) Determine the required logical error rate. (b) Find the smallest odd distance achieving it at physical error rates $p = 10^{-3}$ and $p = 10^{-4}$. (c) Compute the physical qubits per logical qubit in each case, and state how much a tenfold fidelity improvement is worth in qubits.

**P3 (🔴, optional)** Work through the two-layer threshold argument. Suppose one round of distance-3 error correction has logical error rate $p_L = c\,p^2$ for a constant $c$ counting fault locations. (a) Derive the level-$L$ concatenated error rate and identify the threshold condition. (b) With $c = 100$, compute the number of concatenation levels needed to reach $p_L < 10^{-15}$ starting from $p = 10^{-3}$, and the resulting qubit overhead if each level multiplies the qubit count by 7 (Steane code). (c) Compare with the surface code's overhead for the same target and explain why the surface code wins despite both schemes being "below threshold."

<details>
<summary>Solutions</summary>

**P1** With $p/p_{\text{th}} = 10^{-3}/10^{-2} = 0.1$, the formula reads $p_L \approx 0.1\times(0.1)^{(d+1)/2} = 10^{-1-(d+1)/2}$.

| $d$ | $(d+1)/2$ | $p_L$ | physical per logical $\approx 2d^2$ |
|---|---|---|---|
| 5 | 3 | $10^{-4}$ | 50 |
| 11 | 6 | $10^{-7}$ | 242 |
| 21 | 11 | $10^{-12}$ | 882 |

*The pattern.* Each increase of $d$ by 2 multiplies $p_L$ by $p/p_{\text{th}} = 0.1$ — **one order of magnitude of error suppression per two units of distance.** Meanwhile the qubit cost grows only quadratically in $d$. So error suppression is *exponential* in distance while cost is *polynomial*: going from $d=5$ to $d=21$ costs 18 times more qubits and buys $10^8$ times better error rate. That favourable trade is the entire reason fault tolerance is viable, and it holds only below threshold — at $p > p_{\text{th}}$ the base of the exponential exceeds 1 and the same formula runs the other way.

**P2**

(a) For $10^8$ logical operations to produce no error with probability 0.9, the expected error count must satisfy $\mathcal N p_L \le -\ln(0.9) \approx 0.105$, so

$$p_L \le \frac{0.105}{10^8} \approx 10^{-9}.$$

(b) *At $p = 10^{-3}$* ($p/p_{\text{th}} = 0.1$): need $10^{-1-(d+1)/2} < 10^{-9}$, so $(d+1)/2 > 8$, giving $d > 15$ and hence $d = 17$.

*At $p = 10^{-4}$* ($p/p_{\text{th}} = 0.01$): the formula is $p_L \approx 0.1\times(0.01)^{(d+1)/2} = 10^{-1-(d+1)}$, so we need $(d+1) > 8$, giving $d > 7$ and hence $d = 9$.

(c) Qubits per logical qubit:

| $p$ | $d$ | $2d^2$ |
|---|---|---|
| $10^{-3}$ | 17 | 578 |
| $10^{-4}$ | 9 | 162 |

*What the fidelity improvement is worth.* A tenfold reduction in physical error rate cuts the overhead by a factor of

$$\frac{578}{162} \approx 3.6,$$

so it is worth roughly a 3.6-fold reduction in qubit count — and the saving compounds, since the *total* machine also needs fewer factory qubits and fewer rounds. Going from $10^{-3}$ to $10^{-5}$ would take $d$ to about 7 and the overhead to 98, nearly a sixfold saving off the $10^{-3}$ figure.

The asymmetry is the reason hardware roadmaps lead with fidelity: **a qubit that is ten times better is worth about four qubits that are not**, and improving fidelity also shortens the computation (fewer rounds per logical gate) while adding qubits does not.

**P3**

(a) Let $p_0 = p$ be the physical error rate and $p_{\ell+1} = c\,p_\ell^2$ the rate after $\ell+1$ levels of concatenation. Substitute $q_\ell = c\,p_\ell$:

$$q_{\ell+1} = c\,p_{\ell+1} = c^2p_\ell^2 = q_\ell^2 \implies q_L = q_0^{2^L} = (cp)^{2^L}.$$

Therefore

$$p_L = \frac{1}{c}\left(cp\right)^{2^L}.$$

The rate goes to zero as $L\to\infty$ exactly when $cp < 1$, so the **threshold** is

$$p_{\text{th}} = \frac1c.$$

Below it, the suppression is doubly exponential in $L$; above it, $(cp)^{2^L}$ blows up and concatenation is actively harmful. Note the theorem's shape: the overhead is exponential in $L$ while the error is doubly exponential in $L$, so achieving error $\epsilon$ needs $L \approx \log\log(1/\epsilon)$ levels and hence $\mathrm{polylog}(1/\epsilon)$ overhead — which is the threshold theorem's polylog.

(b) With $c = 100$, the threshold is $p_{\text{th}} = 10^{-2}$ and $cp = 100\times10^{-3} = 0.1$. So

$$p_L = 10^{-2}\times(0.1)^{2^L}.$$

| $L$ | $p_L$ |
|---|---|
| 1 | $10^{-4}$ |
| 2 | $10^{-6}$ |
| 3 | $10^{-10}$ |
| 4 | $10^{-18}$ |

Four levels clears $10^{-15}$ (three does not). Qubit overhead at seven qubits per level:

$$7^4 = 2{,}401 \text{ physical qubits per logical qubit.}$$

(c) The surface code reaches $p_L = 10^{-15}$ at $p = 10^{-3}$ with $d = 27$, costing $2d^2 \approx 1{,}458$ physical qubits per logical qubit — about 40 percent less than concatenated Steane's 2,401. But the qubit count is the *smaller* part of the advantage. Three others dominate.

1. **Threshold.** Concatenated Steane's realistic threshold under circuit-level noise is around $10^{-4}$ to $10^{-3}$, uncomfortably close to today's hardware; the surface code's is around $10^{-2}$. That is an order of magnitude more headroom, and headroom enters the overhead exponentially (part (a)'s $cp$).
2. **Locality.** Steane's checks are weight-4 among seven qubits, and concatenation requires coupling qubits across code blocks at every level — so a level-4 concatenated code needs long-range connections spanning 2,401 qubits. The surface code's checks touch only **nearest neighbours on a plane**, which is exactly what lithographed superconducting chips and 2D atom arrays provide. Connectivity is a hard physical constraint, not a compilation detail.
3. **Granularity.** Concatenation only offers error rates at discrete levels, each a factor of 7 in qubits; the surface code's distance is tunable in steps of 2, so you buy exactly the protection you need.

**The lesson generalizes past this comparison:** code selection is decided by threshold and connectivity, with qubit efficiency a distant third. It is why quantum LDPC codes — which promise far better rates with non-local but still bounded-degree checks — are the current research frontier, and why any claim about a better code should be read for its threshold and its connectivity requirement first.

</details>

## Connections

- **Backward:** transversality and the Steane code's Clifford gates are [5.4](05-04-stabilizer-codes-and-the-css-construction.md) P3; the error-rate budget is [5.1](05-01-quantum-channels-and-decoherence.md) Example 2; the Clifford/$T$ split and the impossibility of exact universality from a finite set are [1.6](01-06-universal-gate-sets-and-circuit-synthesis.md). Gate teleportation is [2.4](02-04-quantum-teleportation.md) with a resource state in place of a Bell pair.
- **Forward:** [6.6](06-06-resource-estimation-and-the-state-of-the-field.md) turns Example 1's arithmetic into full estimates for Shor and for chemistry, and uses it to judge vendor claims. [6.4](06-04-variational-algorithms-vqe-and-qaoa.md) is what people run *instead*, precisely because none of this machinery exists yet.
- **Sideways:** the threshold is a phase transition — the surface code's decoding problem maps exactly onto a random-bond Ising model, and $p_{\text{th}}$ is its critical point, which is how the first threshold estimates were computed ([`stat-mech` 5.3](../../stat-mech/lessons/05-03-ising-mean-field.md)). The decoder itself is minimum-weight perfect matching, a classical graph algorithm in the family of [`algorithms` 3.5](../../algorithms/lessons/03-05-max-flow-and-min-cut.md).

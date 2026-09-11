# Quantum Computing · Lesson 2.6: The CHSH game and device-independence

> ⏱ ~15 min · Module 2: Entanglement as a resource · Builds on: [2.1 (Bell states)](02-01-bell-states-and-generating-entanglement.md), [1.3 (measurement and the Born rule)](01-03-measurement-and-the-born-rule.md), [`quantum-mechanics` 5.3 (Bell's inequality and nonlocality)](../../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md) · Unlocks: [3.1 (oracles and phase kickback)](03-01-oracles-reversibility-and-phase-kickback.md)

## Why this matters

Everything in this module has assumed entanglement is real and useful. This lesson proves the first half — and does it in the register a computer scientist can audit, as **a game with a payoff and a provable optimum**.

[`quantum-mechanics` 5.3](../../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md) covers Bell's inequality as physics: spin correlations, hidden variables, Aspect's experiments. That material is assumed here. What this lesson adds is the computational reframing that Clauser, Horne, Shimony and Holt's inequality permits:

$$\text{classical strategies win 75 percent}, \qquad \text{quantum strategies win } 85.36 \text{ percent}, \qquad \text{and quantum cannot do better}.$$

Three numbers, all provable, all experimentally confirmed. And the reframing pays: a game with a known optimum can be used as a **test**. If your two boxes win more than 75 percent of the time, they are entangled — you do not need to know what is inside them, trust the manufacturer, or believe their datasheet. That is **device-independence**, and it is the strongest form of certification in quantum information.

## The idea

Two players, Alice and Bob, are separated and cannot communicate. A referee hands each a random bit: $x$ to Alice, $y$ to Bob. Each must output a bit: $a$ from Alice, $b$ from Bob. They win if

$$a \oplus b = x \wedge y,$$

that is: **output different bits when both inputs are 1, and equal bits otherwise.**

*The classical ceiling.* Since they cannot talk, Alice's output can depend only on $x$ and Bob's only on $y$ (plus any shared randomness agreed in advance, which turns out not to help). Try the simplest strategy: both always output 0. Then $a\oplus b = 0$, which is correct on the three inputs where $x\wedge y = 0$, and wrong on $(1,1)$. **Three out of four, 75 percent.** Checking all sixteen deterministic strategies shows none does better, and randomizing cannot beat the best deterministic choice because a random mixture's average never exceeds its best ingredient.

*The quantum strategy.* Now give them a shared Bell pair. Each player, on receiving their bit, measures their qubit along an axis chosen by that bit — Alice along one of two axes, Bob along one of two others, arranged so that **every Alice–Bob pairing sits 45 degrees apart**. Report $+1$ as 0 and $-1$ as 1.

Each individual measurement is still random; nothing is communicated; no rule is bent. But the *correlations* between the pairs of axes conspire so that the winning pattern is favoured, and the win rate climbs to $\cos^2(\pi/8) = 0.8536$.

The gap is the whole point. **A win rate above 75 percent cannot be produced by any two boxes that carry pre-agreed answers**, so observing 85 percent in a lab is direct evidence that nature does not work that way.

## The formal version

Encode the outputs as $\pm1$ instead of bits, with $A_x, B_y \in \{+1,-1\}$ the results for inputs $x,y$. Define the **CHSH correlator**

$$S = \langle A_0B_0\rangle + \langle A_0B_1\rangle + \langle A_1B_0\rangle - \langle A_1B_1\rangle.$$

The win probability of the game is related to it by

$$P(\text{win}) = \frac12 + \frac{S}{8}.$$

In words: one number summarizes the four correlations, with one term subtracted because the winning condition flips on the input $(1,1)$.

> **Bell–CHSH inequality (the classical bound).** If each output is determined by a local hidden variable $\lambda$ shared in advance, so that $A_x = A_x(\lambda)$ and $B_y = B_y(\lambda)$ independently of the other side's input, then
> $$\lvert S\rvert \le 2, \qquad\text{equivalently}\qquad P(\text{win}) \le \tfrac34.$$

**Proof in one line.** For fixed $\lambda$, factor the expression:
$$A_0B_0 + A_0B_1 + A_1B_0 - A_1B_1 = A_0(B_0+B_1) + A_1(B_0 - B_1).$$
Since $B_0, B_1 \in \{\pm1\}$, one of $B_0+B_1$ and $B_0-B_1$ is $0$ and the other is $\pm2$. So the whole expression is $\pm2$ for every $\lambda$, and averaging over $\lambda$ keeps $\lvert S\rvert\le 2$. $\blacksquare$

The proof is worth appreciating: it uses **no physics**, only that each box has a definite answer to both of its possible questions, whether asked or not. That assumption — called *realism*, combined with the no-communication assumption *locality* — is what the experiment refutes.

> **The quantum strategy.** Share $\lvert\Phi^+\rangle$. Alice measures $A_0 = Z$, $A_1 = X$; Bob measures $B_0 = \tfrac{1}{\sqrt2}(Z+X)$, $B_1 = \tfrac{1}{\sqrt2}(Z - X)$. Then every correlator is
> $$\langle A_0B_0\rangle = \langle A_0B_1\rangle = \langle A_1B_0\rangle = \tfrac{1}{\sqrt2}, \qquad \langle A_1B_1\rangle = -\tfrac{1}{\sqrt2},$$
> so $S = 4\cdot\tfrac{1}{\sqrt2} = 2\sqrt2 \approx 2.828$ and $P(\text{win}) = \tfrac12 + \tfrac{2\sqrt2}{8} = \cos^2\tfrac\pi8 \approx 0.8536$.

> **Tsirelson bound.** For *any* quantum state and *any* measurements, $\lvert S\rvert \le 2\sqrt2$. The strategy above is optimal.

In words: quantum mechanics beats the classical bound by exactly a factor of $\sqrt2$ in the correlator, and not one bit more. Worth noting that $\lvert S\rvert\le 4$ is what mere no-signaling would allow — so nature is neither classical nor maximally nonlocal, and *why* it stops at $2\sqrt2$ is an open research question with no satisfying answer.

Finally the application that makes this a tool rather than a curiosity:

> **Self-testing (rigidity).** Observing $S = 2\sqrt2$ certifies, with no assumptions about the devices' internals, that the shared state is a Bell pair and the measurements are anticommuting observables — up to local unitaries. Intermediate values of $S$ give quantitative bounds.

In words: **the number alone pins down the physics.** You can buy two sealed boxes from an adversary, play the game, and if they win at 85 percent you know they contain a Bell pair. That is the basis of device-independent quantum key distribution and of certified randomness generation, where the security rests on statistics rather than on trusting hardware.

## Picture

![Left: a flow diagram. A box labelled REFEREE at the top sends arrows labelled x and y down to two boxes labelled ALICE, who measures A-sub-x, and BOB, who measures B-sub-y, joined by a red dashed line labelled shared ket Phi plus. Arrows labelled a and b come down from the two players to a box reading win if a XOR b equals x AND y, with a note that there is no communication once x and y are handed out. Right: a circle with four radial lines from the centre. Two green lines labelled A-zero equals Z and A-one equals X sit at 0 and 90 degrees; two blue lines labelled B-zero and B-one sit at 45 and minus 45 degrees. An orange arc marks the 45 degree gap, with the note that every A-B pair sits 45 degrees apart so each correlator is cosine 45 degrees equals 0.707. Below, three horizontal bars compare best classical at 0.75, best quantum at 0.8536 highlighted in red, and logically possible at 1.0.](assets/02-06-fig1.svg)

The right-hand panel is the design insight. If Alice and Bob used the *same* axis they would get perfect correlation, correlator 1, and $S = 1+1+1-1 = 2$: exactly the classical bound, no advantage. Choosing axes 45 degrees apart sacrifices each individual correlation down to $0.707$ but makes **all four terms contribute with the right sign simultaneously**, giving $4\times0.707 = 2.83$. Quantum mechanics wins not by being more correlated but by being *evenly* correlated across incompatible questions — which is precisely what a hidden-variable table cannot arrange.

## Worked examples

**Example 1 — the classical optimum, exhaustively.**

A deterministic classical strategy is a pair of functions: $a = f(x)$ and $b = g(y)$, each of $\{0,1\}\to\{0,1\}$. There are four choices of $f$ and four of $g$, so sixteen strategies. Tabulate the wins for a representative few, where each row counts how many of the four equally likely inputs are won:

| strategy | wins on $(0,0)$ | $(0,1)$ | $(1,0)$ | $(1,1)$ | total |
|---|---|---|---|---|---|
| $a=0$, $b=0$ | ✓ | ✓ | ✓ | ✗ | 3/4 |
| $a=x$, $b=0$ | ✓ | ✓ | ✗ | ✓ | 3/4 |
| $a=0$, $b=1$ | ✗ | ✗ | ✗ | ✓ | 1/4 |
| $a=x$, $b=y$ | ✓ | ✗ | ✗ | ✓ | 2/4 |

The requirement is $f(x)\oplus g(y) = x\wedge y$ for all four inputs. Summing that equation over all four inputs, the left side gives each of $f(0), f(1), g(0), g(1)$ twice, so it is $0$ modulo 2; the right side is $x\wedge y$ summed over the four inputs, which is 1. **So $0 = 1$ modulo 2** — the four constraints are inconsistent, and no strategy wins all four. At most three, hence 3/4.

Shared randomness does not help: a randomized strategy is a probability distribution over the sixteen deterministic ones, and its win rate is the corresponding average, which cannot exceed the maximum ingredient. This is the parity argument, and it is exactly the same counting trick as the classical bound proof — the structure of CHSH is a linear-algebra-over-$\mathbb{F}_2$ obstruction.

**Example 2 — the quantum correlators, computed.**

On $\lvert\Phi^+\rangle$ the only correlators needed are ([2.1](02-01-bell-states-and-generating-entanglement.md) Example 1)

$$\langle Z\otimes Z\rangle = 1, \qquad \langle X\otimes X\rangle = 1, \qquad \langle Z\otimes X\rangle = \langle X\otimes Z\rangle = 0.$$

The last two vanish because, for instance, $Z\otimes X$ maps $\lvert00\rangle\mapsto\lvert01\rangle$, orthogonal to everything in the state. Now expand Bob's observables by linearity:

$$\langle A_0B_0\rangle = \left\langle Z\otimes\tfrac{Z+X}{\sqrt2}\right\rangle = \frac{\langle ZZ\rangle + \langle ZX\rangle}{\sqrt2} = \frac{1+0}{\sqrt2} = \frac{1}{\sqrt2},$$

$$\langle A_0B_1\rangle = \frac{\langle ZZ\rangle - \langle ZX\rangle}{\sqrt2} = \frac{1}{\sqrt2}, \qquad \langle A_1B_0\rangle = \frac{\langle XZ\rangle+\langle XX\rangle}{\sqrt2} = \frac{1}{\sqrt2}, \qquad \langle A_1B_1\rangle = \frac{\langle XZ\rangle - \langle XX\rangle}{\sqrt2} = -\frac{1}{\sqrt2}.$$

Assemble:
$$S = \tfrac{1}{\sqrt2} + \tfrac{1}{\sqrt2} + \tfrac{1}{\sqrt2} - \left(-\tfrac{1}{\sqrt2}\right) = \frac{4}{\sqrt2} = 2\sqrt2 \approx 2.828.$$

And $P(\text{win}) = \tfrac12 + \tfrac{2\sqrt2}{8} = \tfrac12 + \tfrac{1}{2\sqrt2} \approx 0.8536$.

Two sanity checks worth doing. First, the classical bound: $2.828 > 2$, so the inequality is violated by 41 percent. Second, note that **each of Alice's and Bob's individual outcomes is still exactly 50/50** — the reduced state is $I/2$ ([2.2](02-02-density-matrices-and-the-partial-trace.md)) — so no signal is sent and the players learn nothing about each other's input. The advantage is invisible in the marginals and lives entirely in the joint statistics, which is how nonlocality coexists with relativity.

A practical note on how this is measured. The correlators are expectation values, so they cost shots ([1.3](01-03-measurement-and-the-born-rule.md)): estimating $S$ to $\pm0.05$ means each of four correlators to about $\pm0.025$, so roughly $1/0.025^2 \approx 1{,}600$ shots each, about 6,400 runs in total. This is why Bell tests report thousands or millions of trials, and why the loophole-free experiments of 2015 were hard — they needed the shots *and* fast random basis choices *and* high detector efficiency, all at once.

## Watch out

- You might think a Bell violation means information travels faster than light. It does not: each side's marginal is uniform, so neither player can detect the other's input choice ([2.2](02-02-density-matrices-and-the-partial-trace.md)). What is refuted is not relativity but **local realism** — the assumption that each box has a definite answer to a question that was not asked.
- You might think the perfect same-basis correlations of [2.1](02-01-bell-states-and-generating-entanglement.md) already prove nonlocality. They do not, and that lesson said so: perfect correlation is trivially reproduced by pre-agreed answers. The proof requires **incompatible** measurement choices on each side, which is why the axes are at 45 degrees and why Bell's insight took thirty years to arrive.
- You might think experiments have loopholes worth worrying about. The three that mattered — locality (can the boxes signal?), detection efficiency (are the observed events a biased sample?), and freedom of choice (were the inputs really random?) — were closed simultaneously in 2015, and the 2022 Nobel Prize recognized the programme. Residual loopholes require retrocausality or a conspiracy in the random number generators.
- You might think winning above 75 percent proves the boxes contain a Bell pair *exactly*. Self-testing certifies the state up to local isometries, which is the strongest possible claim — you cannot distinguish a Bell pair from a Bell pair plus unused junk by any statistics, and you do not need to.

## One-liner

> Two boxes with pre-written answers win 75 percent of CHSH and two entangled boxes win 85.36 percent, so the win rate is a device-independent certificate that nature keeps no hidden answer sheet.

## Problems

**P1 (🟢)** Show that the strategy "Alice always outputs 0, Bob always outputs 0" wins exactly three of the four input pairs, naming which one it loses. Then compute the CHSH correlator $S$ for this strategy directly (treating outputs as $+1$) and confirm it equals the classical bound of 2.

**P2 (🟡)** Prove the classical bound. For a fixed hidden variable $\lambda$, factor $A_0B_0 + A_0B_1 + A_1B_0 - A_1B_1$ as $A_0(B_0+B_1) + A_1(B_0-B_1)$ and argue that it is always $\pm2$. Then explain precisely which two assumptions the proof uses, and identify which one a quantum strategy violates.

**P3 (🔴, optional)** Suppose Alice and Bob use the same axis structure but their shared state is only partially entangled, $\lvert\psi(t)\rangle = \cos t\lvert00\rangle + \sin t\lvert11\rangle$. (a) Compute $\langle Z\otimes Z\rangle$, $\langle X\otimes X\rangle$, and $\langle Z\otimes X\rangle$ for this state. (b) Using the same four observables as the optimal strategy, compute $S(t)$ and find the smallest $t$ for which the classical bound is violated. (c) Explain what your answer means for an experimentalist whose entanglement source is imperfect, and state which quantity from [2.2](02-02-density-matrices-and-the-partial-trace.md) predicts the threshold.

<details>
<summary>Solutions</summary>

**P1** With $a = b = 0$ always, $a\oplus b = 0$. The winning condition requires $a\oplus b = x\wedge y$, so they win exactly when $x\wedge y = 0$: the inputs $(0,0)$, $(0,1)$, $(1,0)$. They **lose on $(1,1)$**, where the condition demands $a \oplus b = 1$. Three of four, so 75 percent.

As correlators: output 0 corresponds to $+1$, so $A_0 = A_1 = B_0 = B_1 = +1$ deterministically and every correlator $\langle A_xB_y\rangle = +1$. Then

$$S = 1 + 1 + 1 - 1 = 2,$$

exactly the classical bound, and $P(\text{win}) = \tfrac12 + \tfrac28 = \tfrac34$. ✓ The formula and the direct count agree, which is a good check that the $P = \tfrac12 + S/8$ conversion is right.

**P2** Fix $\lambda$. Each of $A_0, A_1, B_0, B_1$ is then a definite number in $\{+1,-1\}$. Factor:

$$A_0B_0 + A_0B_1 + A_1B_0 - A_1B_1 = A_0(B_0 + B_1) + A_1(B_0 - B_1).$$

Case 1: $B_0 = B_1$. Then $B_0 + B_1 = \pm2$ and $B_0 - B_1 = 0$, so the expression is $\pm 2A_0 = \pm2$.
Case 2: $B_0 = -B_1$. Then $B_0+B_1 = 0$ and $B_0 - B_1 = \pm2$, so the expression is $\pm2A_1 = \pm2$.

Either way the value is exactly $\pm2$. Averaging over the distribution of $\lambda$ gives $\lvert S\rvert\le 2$. $\blacksquare$

*The two assumptions.*

1. **Locality (no-signaling):** $A_x$ depends on $x$ and $\lambda$ but not on $y$, and symmetrically for $B_y$. Without this the factoring is meaningless because the four correlators would not refer to one consistent set of four values.
2. **Realism (definite values):** all four of $A_0, A_1, B_0, B_1$ have definite values simultaneously for each $\lambda$, even though only two of them are measured in any run.

*Which one quantum mechanics breaks.* **Realism.** Quantum mechanics respects locality exactly — the marginals are input-independent, so no signaling is possible ([2.2](02-02-density-matrices-and-the-partial-trace.md)). What has no counterpart is the simultaneous definite value: $A_0 = Z$ and $A_1 = X$ do not commute, so "the value Alice would have got had she measured the other one" is not a well-defined quantity. Notice the whole proof hinged on writing down four numbers at once, which is exactly the step that fails. This is the same incompatibility that the uncertainty relation of [`quantum-mechanics` 3.3](../../quantum-mechanics/lessons/03-03-commutators-uncertainty.md) quantifies, and it is worth seeing that nonlocality and non-commutativity are not two mysteries but one.

**P3**

(a) For $\lvert\psi(t)\rangle = \cos t\lvert00\rangle + \sin t\lvert11\rangle$:

$$\langle Z\otimes Z\rangle = \cos^2 t\,(+1)(+1) + \sin^2 t\,(-1)(-1) = 1,$$

independent of $t$ — the $Z$ correlation is perfect for the whole family.

$$\langle X\otimes X\rangle: \quad (X\otimes X)\lvert00\rangle = \lvert11\rangle,\ (X\otimes X)\lvert11\rangle = \lvert00\rangle \implies \langle X\otimes X\rangle = 2\cos t\sin t = \sin 2t.$$

$$\langle Z\otimes X\rangle: \quad (Z\otimes X)\lvert00\rangle = \lvert01\rangle,\ (Z\otimes X)\lvert11\rangle = -\lvert10\rangle,$$
both orthogonal to the state's components, so $\langle Z\otimes X\rangle = 0$, and likewise $\langle X\otimes Z\rangle = 0$.

(b) Reusing Example 2's expansion with the new values:

$$\langle A_0B_0\rangle = \frac{1 + 0}{\sqrt2} = \frac{1}{\sqrt2}, \quad \langle A_0B_1\rangle = \frac{1}{\sqrt2}, \quad \langle A_1B_0\rangle = \frac{0 + \sin2t}{\sqrt2} = \frac{\sin2t}{\sqrt2}, \quad \langle A_1B_1\rangle = -\frac{\sin 2t}{\sqrt2}.$$

$$S(t) = \frac{2 + 2\sin 2t}{\sqrt2} = \sqrt2\left(1 + \sin 2t\right).$$

Check the endpoints: at $t = \pi/4$, $S = 2\sqrt2$ ✓; at $t = 0$ (no entanglement), $S = \sqrt2 \approx 1.41 < 2$ ✓. Violation requires

$$\sqrt2\left(1+\sin2t\right) > 2 \implies \sin 2t > \sqrt2 - 1 = 0.4142 \implies 2t > 24.5^\circ \implies t > 12.2^\circ.$$

So the classical bound falls once $t$ exceeds about 12.2 degrees. (These axes are optimal only at $t = \pi/4$; re-optimizing the angles for smaller $t$ lets *any* nonzero entanglement violate the inequality, a result due to Gisin. But with fixed optimal-for-Bell-pair axes, 12.2 degrees is the threshold.)

(c) For an experimentalist this is good news in one respect and a warning in another. **Good:** violation does not require perfect entanglement. A source producing $t = 20$ degrees still shows $S = \sqrt2(1 + \sin 40^\circ) = 2.32$, comfortably above 2, so a mediocre source still refutes local realism. **Warning:** the *amount* of violation is a quantitative measure, so any application whose security scales with $S$ — device-independent key distribution, certified randomness — gets weaker as the source degrades, and near the threshold the required number of shots explodes because you are resolving a small gap.

The predicting quantity is the **purity of the reduced state** from [2.2](02-02-density-matrices-and-the-partial-trace.md): $\mathrm{tr}\,\rho_A^2 = 1 - \tfrac12\sin^2 2t$. Every figure of merit in this module is a function of the same $\sin 2t$ — superdense coding's success rate $\tfrac12(1+\sin2t)$ from [2.5](02-05-superdense-coding.md) P3 and the CHSH value $\sqrt2(1+\sin2t)$ here are literally proportional. **One number, the local purity, prices the entanglement**, and every protocol in Module 2 pays the same exchange rate on it.

</details>

## Connections

- **Backward:** the physics — Bell's theorem, hidden variables, the singlet correlations and the experimental history — is [`quantum-mechanics` 5.3](../../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md). This lesson reuses the correlators of [2.1](02-01-bell-states-and-generating-entanglement.md) and the "measure along any axis" rule of [1.3](01-03-measurement-and-the-born-rule.md); the failure of realism is the non-commutativity of [`quantum-mechanics` 3.3](../../quantum-mechanics/lessons/03-03-commutators-uncertainty.md).
- **Forward:** Module 3 turns from "entanglement is real" to "what can it compute," starting with the interference mechanism in [3.1](03-01-oracles-reversibility-and-phase-kickback.md). It is worth knowing that everything in Module 2 is a **Clifford** circuit ([1.6](01-06-universal-gate-sets-and-circuit-synthesis.md)) and therefore classically simulable — these protocols are physically deep and computationally free, and the first real speedup arrives in [3.2](03-02-deutsch-jozsa.md).
- **Sideways:** CHSH is a **nonlocal game**, and the study of such games is a field bridging quantum information and complexity theory — the value of a game with entangled players defines the class MIP*, whose surprising characterization (MIP* = RE, 2020) resolved a decades-old problem in operator algebras. Device-independent protocols built on this certification are the security backbone of the strongest quantum key distribution schemes, whose non-device-independent cousin BB84 is in [`photonics-quantum-optics` 4.5](../../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md), and the experimental Bell tests themselves are in [4.4](../../photonics-quantum-optics/lessons/04-04-entangled-photons-bell-tests.md) of that course.

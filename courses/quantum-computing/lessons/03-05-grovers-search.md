# Quantum Computing · Lesson 3.5: Grover's search

> ⏱ ~15 min · Module 3: Oracles, interference, and search · Builds on: [3.1 (oracles and phase kickback)](03-01-oracles-reversibility-and-phase-kickback.md), [1.3 (measurement and the Born rule)](01-03-measurement-and-the-born-rule.md) · Unlocks: [3.6 (amplitude amplification and optimality)](03-06-amplitude-amplification-counting-and-optimality.md)

## Why this matters

Every algorithm so far needed a **promise**: $f$ is constant or balanced, $f$ is linear, $f$ has a hidden XOR period. Grover needs nothing. Given a black box that recognizes the answer, it finds the answer among $N$ possibilities in $O(\sqrt N)$ queries instead of $O(N)$.

That generality is the point, and so is its price. The speedup is **quadratic, not exponential**, and [3.6](03-06-amplitude-amplification-counting-and-optimality.md) proves nothing better is possible for unstructured search. So Grover marks the boundary of the subject: exponential speedups require structure, and where there is no structure you get a square root. Since a huge fraction of hard computational problems are "search for a certificate," this single fact largely determines what quantum computers will and will not do — in particular it is why nobody expects quantum computers to solve NP-complete problems efficiently.

Grover is also the most reusable primitive in the field. As **amplitude amplification** it turns any procedure that succeeds with probability $p$ into one that succeeds with probability near 1 using $O(1/\sqrt p)$ repetitions instead of $O(1/p)$ — a generic quadratic saving that shows up inside dozens of other algorithms.

## The idea

You have $N = 2^n$ items and an oracle that says "yes" on exactly one of them, the marked item $w$. No structure, no promise, no hints: classically you must try items one at a time and expect $N/2$ tries.

Grover's circuit starts in the uniform superposition, where every item has amplitude $1/\sqrt N$, and then repeats a two-step move:

1. **Mark:** the phase oracle flips the sign of the marked item's amplitude and leaves the others alone.
2. **Diffuse:** invert every amplitude about their mean.

Watch what those two steps do together. Flipping one amplitude to $-1/\sqrt N$ barely moves the mean — it drops by about $2/(N\sqrt N)$. But inverting about the mean maps $a \mapsto 2\bar a - a$, so the marked item, sitting far *below* the mean, is thrown far *above* it, while the $N-1$ others, sitting just above the mean, barely move down. Net effect: the marked amplitude grows by about $2/\sqrt N$ each round.

Starting at $1/\sqrt N$ and growing by $2/\sqrt N$ per round, you reach amplitude 1 after about $\sqrt N/2$ rounds. That is the $\sqrt N$, and the factor-of-two-per-step accounting is worth keeping in mind because it explains why the answer is a square root and not something else.

The precise version is even nicer. **The whole algorithm lives in a two-dimensional plane**, spanned by "the marked item" and "everything else," and each iteration is a *rotation* in that plane by a fixed angle $2\theta$ with $\sin\theta = 1/\sqrt N$. You start at angle $\theta$ from the "everything else" axis and need to reach $90^\circ$, so the number of rotations is about $\frac{\pi/2}{2\theta} \approx \frac{\pi}{4}\sqrt N$.

And because it is a rotation, **you must stop at the right time.** Keep going and you rotate past the answer and back down toward zero. That is the "soufflé problem," and it is the main practical trap in using Grover.

## The formal version

> **Unstructured search.** Given a phase oracle $O_w\lvert x\rangle = (-1)^{[x = w]}\lvert x\rangle$ for an unknown $w\in\{0,1\}^n$, find $w$.

> **Classical complexity.** $\Theta(N)$ queries: $N/2$ on average and $N-1$ worst case for a deterministic search, and $\Theta(N)$ even with randomness and bounded error.

Define the two operators, with $\lvert s\rangle = \frac{1}{\sqrt N}\sum_x\lvert x\rangle$ the uniform superposition:

> **Oracle (reflection about the unmarked subspace).** $O_w = I - 2\lvert w\rangle\langle w\rvert$.
> **Diffusion (reflection about $\lvert s\rangle$).** $D = 2\lvert s\rangle\langle s\rvert - I = H^{\otimes n}\left(2\lvert0\rangle\langle0\rvert - I\right)H^{\otimes n}$.
> **One Grover iteration.** $G = D\,O_w$.

In words: both are reflections, and the second is implementable because $2\lvert0\rangle\langle0\rvert - I$ is just "flip the sign of everything except $\lvert0^n\rangle$," which is a multi-controlled $Z$. Concretely $D$ acts on amplitudes as

$$D: a_x \longmapsto 2\bar a - a_x, \qquad \bar a = \frac1N\sum_x a_x,$$

which is exactly "invert about the mean."

> **The algorithm.** Prepare $\lvert s\rangle = H^{\otimes n}\lvert0\rangle^{\otimes n}$, apply $G$ exactly $k$ times, measure. With $\sin\theta = 1/\sqrt N$, the probability of measuring $w$ is
> $$P_k = \sin^2\!\big((2k+1)\theta\big),$$
> maximized at $k^\star = \left\lfloor\dfrac{\pi}{4\theta} - \dfrac12\right\rfloor \approx \dfrac{\pi}{4}\sqrt N$.

**Why the formula.** Write $\lvert u\rangle = \frac{1}{\sqrt{N-1}}\sum_{x\ne w}\lvert x\rangle$, so $\lvert s\rangle = \sin\theta\,\lvert w\rangle + \cos\theta\,\lvert u\rangle$ with $\sin\theta = 1/\sqrt N$. Both $O_w$ and $D$ map this two-dimensional plane to itself: $O_w$ is a reflection about $\lvert u\rangle$, and $D$ is a reflection about $\lvert s\rangle$. **The composition of two reflections is a rotation by twice the angle between their axes**, and the angle between $\lvert u\rangle$ and $\lvert s\rangle$ is $\theta$, so $G$ rotates by $2\theta$ toward $\lvert w\rangle$. After $k$ iterations the state is at angle $(2k+1)\theta$ and the overlap with $\lvert w\rangle$ is $\sin\big((2k+1)\theta\big)$. $\blacksquare$

The numbers, with the optimal stopping point:

| $N$ | $\theta$ | $k^\star$ | $P_{k^\star}$ |
|---|---|---|---|
| 4 | $30^\circ$ | 1 | 1.000 |
| 16 | $14.48^\circ$ | 3 | 0.961 |
| 64 | $7.18^\circ$ | 6 | 0.997 |
| 1,024 | $1.79^\circ$ | 25 | 0.9995 |
| $10^6$ | $0.057^\circ$ | 785 | 1.000 |

In words: the success probability at the optimum is very close to 1 and never exactly 1 except at $N=4$, because $\pi/(4\theta)$ is generally not an integer. A failed run is detectable (check the answer with one more oracle call) and cheap to retry.

> **The soufflé problem.** $P_k$ is periodic in $k$, not increasing. Running $2k^\star$ iterations returns the marked item with probability near **zero**. Knowing when to stop requires knowing $N$ and the number of solutions $M$, which is what quantum counting supplies ([3.6](03-06-amplitude-amplification-counting-and-optimality.md)).

## Picture

![Left: a quarter-circle diagram with a horizontal axis labelled ket unmarked and a vertical axis labelled ket marked. A blue arrow at 30 degrees is labelled start ket s, with a blue arc marking the angle theta. A dashed orange arrow at minus 30 degrees is labelled after oracle. A red arrow at 90 degrees is labelled after diffusion, with a red arc marking the plus 2 theta rotation. Captions read that one Grover iteration equals two reflections equals a rotation by 2 theta, and that sine theta equals the square root of M over N, so theta is about 1 over root N and you need about pi over 4 times root N turns. Right: three stacked rows of eight amplitude bars for N equals 8 with one marked item shown in red, labelled k equals 0 with probability 0.13, k equals 1 with probability 0.78, and k equals 2 with probability 0.95, showing the marked bar growing while the other seven shrink and then go negative](assets/03-05-fig1.svg)

The left panel is the whole algorithm. Two reflections make a rotation; the rotation angle is fixed by $N$; and the target is 90 degrees away. Everything quantitative about Grover — the $\sqrt N$, the optimal stopping point, the overshoot — reads off that picture.

## Worked examples

**Example 1 — $N = 4$, exactly, in one iteration.**

Take $n=2$, $N=4$, marked item $w = 10$ (index 2). Amplitudes as a vector over $(00, 01, 10, 11)$.

*Start.* $\lvert s\rangle = \tfrac12(1,1,1,1)$.

*Oracle.* Flip the sign of the marked amplitude:
$$\tfrac12\left(1, 1, -1, 1\right).$$

*Diffusion.* The mean is $\bar a = \tfrac12\cdot\tfrac{1+1-1+1}{4} = \tfrac14$. Invert about it, $a\mapsto 2\bar a - a = \tfrac12 - a$:

$$a_{00} = \tfrac12 - \tfrac12 = 0,\quad a_{01} = 0, \quad a_{10} = \tfrac12 - \left(-\tfrac12\right) = 1, \quad a_{11} = 0.$$

Result: $(0,0,1,0) = \lvert10\rangle$. **Probability 1**, in a single query.

Check against the formula: $\sin\theta = 1/\sqrt4 = 1/2$ so $\theta = 30^\circ$, and $P_1 = \sin^2(3\times30^\circ) = \sin^2 90^\circ = 1$. ✓ The $N=4$ case is exact precisely because $3\theta$ lands exactly on $90^\circ$.

*Now over-iterate.* Apply $G$ once more. Oracle: $(0,0,-1,0)$. Mean $= -1/4$. Invert: $a \mapsto -\tfrac12 - a$, giving $\left(-\tfrac12,-\tfrac12,\tfrac12,-\tfrac12\right)$ and $P(w) = 1/4$. The probability fell from 1 to 0.25 by doing more work — a vivid demonstration that Grover is a rotation and not a ratchet.

Explicit matrices, for hand-simulation practice:
$$O_w = \mathrm{diag}(1,1,-1,1), \qquad D = \frac12\begin{pmatrix}-1&1&1&1\\1&-1&1&1\\1&1&-1&1\\1&1&1&-1\end{pmatrix}.$$

**Example 2 — the diffusion operator, three ways to see it.**

*(i) As a reflection.* $D = 2\lvert s\rangle\langle s\rvert - I$ fixes $\lvert s\rangle$ and negates everything orthogonal to it — the definition of a reflection about the $\lvert s\rangle$ axis.

*(ii) As inversion about the mean.* Acting on a state $\sum_x a_x\lvert x\rangle$, the term $2\lvert s\rangle\langle s\rvert$ contributes $2\lvert s\rangle\cdot\frac{1}{\sqrt N}\sum_x a_x = 2\bar a\sum_x\lvert x\rangle$, so
$$D\sum_x a_x\lvert x\rangle = \sum_x\left(2\bar a - a_x\right)\lvert x\rangle.$$
Verify on $(0.3, 0.5, -0.2, 0.4)$: mean $0.25$, so the image is $(0.2, 0.0, 0.7, 0.1)$, which is $0.5 - a_x$ componentwise. ✓

*(iii) As a circuit.* $D = H^{\otimes n}\left(2\lvert0\rangle\langle0\rvert - I\right)H^{\otimes n}$, because $H^{\otimes n}\lvert0^n\rangle = \lvert s\rangle$ and conjugation carries reflections to reflections. The middle operator negates every basis state except $\lvert0^n\rangle$, which up to an overall sign is a multi-controlled $Z$ — implementable with $O(n)$ Toffolis and one ancilla.

The cost accounting that follows is the honest bottom line for Grover:

| per iteration | cost |
|---|---|
| oracle call | 1 query (whatever the oracle costs to build) |
| diffusion | $O(n)$ gates, no extra queries |
| total for the algorithm | $O(\sqrt N)$ queries, $O(\sqrt N\, n)$ gates |

**So the gate count is $\tilde O(\sqrt N)$ and the qubit count is $n + O(1)$** — Grover is extremely cheap in space and expensive only in depth. That profile is the worst possible one for a noisy machine, since depth is what decoherence punishes ([5.1](05-01-quantum-channels-and-decoherence.md)): a $\sqrt N$-deep circuit at $N = 2^{80}$ needs $10^{12}$ sequential error-free iterations. This is why Grover-based attacks on 128-bit keys are a fault-tolerance problem and not a near-term threat, and why the standard advice is merely to double symmetric key lengths ([`cryptography` 4.5](../../cryptography/lessons/04-05-post-quantum-cryptography.md)).

## Watch out

- You might think more iterations means a better answer. The success probability is $\sin^2((2k+1)\theta)$ — periodic. Past $k^\star$ it falls, reaching nearly zero at $2k^\star$. **Grover must be stopped, not run to convergence.**
- You might think Grover "searches a database." It does not read a list; it needs an oracle that *recognizes* the answer, implemented as a circuit. If you have an actual $N$-entry database in memory, loading it into a quantum state costs $\Omega(N)$ anyway and the speedup evaporates. Grover is for searching *implicitly defined* spaces — satisfying assignments, hash preimages, keys — where the oracle is a small circuit.
- You might think a quadratic speedup on search means NP-complete problems become tractable. Applying Grover to $2^n$ candidate assignments gives $2^{n/2}$, still exponential. It changes the constant in the exponent, not the shape, which is the honest statement of Grover's impact on complexity ([6.1](06-01-bqp-and-the-complexity-landscape.md)).
- You might think the $\sqrt N$ could be improved with a cleverer circuit. It cannot: $\Omega(\sqrt N)$ queries are required for any quantum algorithm, proved in [3.6](03-06-amplitude-amplification-counting-and-optimality.md). Grover is optimal, which is unusual and worth savouring — very few algorithms in any field are known to be exactly optimal.

## One-liner

> Two reflections make a rotation, the rotation angle is $2/\sqrt N$, and ninety degrees away sits the answer — so unstructured search costs $\frac\pi4\sqrt N$ queries and not one fewer.

## Problems

**P1 (🟢)** For $N = 4$ with the marked item $w = 01$, write the amplitude vector at each stage of one Grover iteration and confirm the final probability of measuring $01$ is 1. Then apply a second iteration and report the new probability.

**P2 (🟡)** For $N = 64$ with one marked item, compute $\theta$, the optimal iteration count $k^\star$, and $P_{k^\star}$. Then compute $P_k$ for $k = 3$ and $k = 12$, and explain in terms of the rotation picture why $k=12$ is so much worse than $k=3$ despite being twice as much work.

**P3 (🔴, optional)** Generalize to $M$ marked items. (a) Show that the algorithm still lives in a two-dimensional plane, now spanned by the normalized uniform superposition over marked items and over unmarked items, and that $\sin\theta = \sqrt{M/N}$. (b) Derive the optimal iteration count and show it scales as $\frac\pi4\sqrt{N/M}$. (c) Evaluate $k^\star$ for $N = 1024$ with $M = 1, 4, 16, 64$, and state the practical problem this creates for someone who does not know $M$ in advance.

<details>
<summary>Solutions</summary>

**P1** Amplitudes over $(00, 01, 10, 11)$, with $w = 01$ at index 1.

*Start.* $\tfrac12(1,1,1,1)$.

*Oracle.* $\tfrac12(1,-1,1,1)$.

*Diffusion.* Mean $= \tfrac12\cdot\tfrac{1-1+1+1}{4} = \tfrac14$, so $a\mapsto\tfrac12 - a$:
$$\left(\tfrac12-\tfrac12,\ \tfrac12+\tfrac12,\ \tfrac12-\tfrac12,\ \tfrac12-\tfrac12\right) = (0,1,0,0).$$
The state is exactly $\lvert01\rangle$, so $P(01) = 1$. ✓

*Second iteration.* Oracle: $(0,-1,0,0)$. Mean $=-\tfrac14$, so $a\mapsto-\tfrac12-a$:
$$\left(-\tfrac12,\ \tfrac12,\ -\tfrac12,\ -\tfrac12\right), \qquad P(01) = \tfrac14.$$
The probability dropped from 1 to 0.25. In the rotation picture the state was at $90^\circ$ and has been carried to $150^\circ$, whose sine squared is $\sin^2 150^\circ = 1/4$.

**P2** With $N = 64$, $M=1$: $\sin\theta = 1/8$, so

$$\theta = \arcsin(0.125) = 7.181^\circ = 0.12533\ \text{rad}.$$

Optimal count:
$$k^\star = \left\lfloor\frac{\pi}{4\theta} - \frac12\right\rfloor = \left\lfloor\frac{\pi}{0.50133} - 0.5\right\rfloor = \lfloor 6.766\rfloor = 6,$$
and
$$P_6 = \sin^2(13\times 7.181^\circ) = \sin^2(93.35^\circ) = 0.9966.$$

(Note $\tfrac\pi4\sqrt{64} = 6.28$, which rounds to the same answer — the two formulas agree here and generally differ by at most one.)

The other two:
$$P_3 = \sin^2(7\times7.181^\circ) = \sin^2(50.27^\circ) = 0.5914, \qquad P_{12} = \sin^2(25\times7.181^\circ) = \sin^2(179.5^\circ) = 0.0001.$$

*Why $k=12$ is a disaster.* Each iteration advances the state's angle by $2\theta = 14.36^\circ$. At $k=6$ the angle is $93.35^\circ$, essentially on the marked axis. At $k=12$ it is $179.5^\circ$ — the state has rotated all the way around to be **anti-aligned with $\lvert u\rangle$**, which up to a sign is where it started, so the overlap with $\lvert w\rangle$ is nearly zero. Twice the work returns the state almost exactly to its initial (useless) configuration, because $12 \approx 2k^\star$ and a rotation by $180^\circ$ is a sign flip. **The algorithm has no notion of "closer" — only of angle**, and doing more of it is not doing better.

**P3**

(a) Let $\mathcal M$ be the set of $M$ marked items and define

$$\lvert m\rangle = \frac{1}{\sqrt M}\sum_{x\in\mathcal M}\lvert x\rangle, \qquad \lvert u\rangle = \frac{1}{\sqrt{N-M}}\sum_{x\notin\mathcal M}\lvert x\rangle.$$

These are orthonormal, and the uniform superposition decomposes as

$$\lvert s\rangle = \sqrt{\frac{M}{N}}\lvert m\rangle + \sqrt{\frac{N-M}{N}}\lvert u\rangle = \sin\theta\,\lvert m\rangle + \cos\theta\,\lvert u\rangle, \qquad \sin\theta = \sqrt{\frac MN}.$$

The oracle $O = I - 2\sum_{x\in\mathcal M}\lvert x\rangle\langle x\rvert$ acts as $-1$ on $\lvert m\rangle$ and $+1$ on $\lvert u\rangle$: a reflection about $\lvert u\rangle$ inside the plane. The diffusion $D = 2\lvert s\rangle\langle s\rvert - I$ is a reflection about $\lvert s\rangle$, also in the plane (since $\lvert s\rangle$ lies in it). Both preserve the plane, so the whole evolution stays two-dimensional and $G = DO$ is again a rotation by $2\theta$. Everything is identical to the $M=1$ case with a bigger starting angle.

(b) The state after $k$ iterations is at angle $(2k+1)\theta$, so $P_k = \sin^2\big((2k+1)\theta\big)$ and the optimum is where $(2k+1)\theta \approx \pi/2$:

$$k^\star = \left\lfloor\frac{\pi}{4\theta}-\frac12\right\rfloor, \qquad \theta = \arcsin\sqrt{M/N} \approx \sqrt{M/N}\ \text{ for } M\ll N,$$

giving

$$k^\star \approx \frac{\pi}{4}\sqrt{\frac NM}.$$

More solutions, fewer queries — and the scaling is the square root of the classical expected count $N/M$, so the quadratic speedup is preserved for any $M$.

(c) At $N = 1024$:

| $M$ | $\sqrt{N/M}$ | $k^\star$ | $P_{k^\star}$ |
|---|---|---|---|
| 1 | 32.0 | 25 | 0.9995 |
| 4 | 16.0 | 12 | 0.99995 |
| 16 | 8.0 | 6 | 0.9966 |
| 64 | 4.0 | 3 | 0.9613 |

*The practical problem.* The optimal $k^\star$ depends on $M$, and $M$ is exactly the sort of thing you do not know — if you knew how many solutions a SAT instance had, you would already know a great deal. Guess $M$ too small and you over-rotate; too large and you stop early. With $M$ unknown, running $k^\star$ for $M=1$ when actually $M = 64$ means 25 iterations where 3 were wanted, landing the state at angle $51\times 14.5^\circ \approx 738^\circ \equiv 18^\circ$ and a success probability of about 0.1.

Two standard fixes, both in [3.6](03-06-amplitude-amplification-counting-and-optimality.md). **Quantum counting** estimates $M$ first, using phase estimation on the Grover operator $G$ (whose rotation angle *is* $2\theta$, and hence encodes $M$), at a cost of $O(\sqrt N)$ queries. Or **exponential guessing**: run with $k$ drawn randomly below $2^j$ for $j = 0,1,2,\dots$, checking the answer each time; this finds a solution in $O(\sqrt{N/M})$ expected queries with no knowledge of $M$ at all. The second is what you would actually implement, and its analysis is a nice illustration that a quadratic speedup survives a fair amount of ignorance.

</details>

## Connections

- **Backward:** the oracle is the phase oracle of [3.1](03-01-oracles-reversibility-and-phase-kickback.md); the uniform superposition and $H^{\otimes n}$ conjugation come from the same lesson; the multi-controlled $Z$ inside the diffusion operator is built from Toffolis as in [1.5](01-05-multi-qubit-gates-and-quantum-circuits.md). "Two reflections compose to a rotation by twice the angle between their axes" is the same fact that makes $XY = iZ$ true in [1.2](01-02-single-qubit-gates.md).
- **Forward:** [3.6](03-06-amplitude-amplification-counting-and-optimality.md) generalizes the two-reflection trick to any procedure with a success probability, uses phase estimation on $G$ to count solutions, and proves the $\Omega(\sqrt N)$ lower bound that makes Grover optimal. [4.2](04-02-quantum-phase-estimation.md) supplies the phase-estimation machinery that counting needs.
- **Sideways:** Grover halves the effective key length of any symmetric cipher, which is why the post-quantum recommendation is to double key sizes rather than to change algorithms ([`cryptography` 4.5](../../cryptography/lessons/04-05-post-quantum-cryptography.md)). It also speeds up collision-finding from the classical $\sqrt N$ birthday bound of [`cryptography` 2.2](../../cryptography/lessons/02-02-the-birthday-bound-and-merkle-damgard.md) to $N^{1/3}$, which at $N = 2^{60}$ is the difference between $10^9$ and $10^6$ operations.

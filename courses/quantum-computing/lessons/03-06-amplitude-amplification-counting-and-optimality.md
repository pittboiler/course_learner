# Quantum Computing · Lesson 3.6: Amplitude amplification, counting, and optimality

> ⏱ ~15 min · Module 3: Oracles, interference, and search · Builds on: [3.5 (Grover's search)](03-05-grovers-search.md) · Unlocks: [4.2 (quantum phase estimation)](04-02-quantum-phase-estimation.md), [6.1 (BQP and the complexity landscape)](06-01-bqp-and-the-complexity-landscape.md)

## Why this matters

Grover solved one artificial problem. This lesson turns it into three things you will use constantly.

- **Amplitude amplification.** Grover's two-reflection trick works on *any* quantum procedure that succeeds with probability $p$, not just on uniform search. It turns $O(1/p)$ repetitions into $O(1/\sqrt p)$ — a free quadratic speedup wrapped around almost any randomized algorithm you can make coherent. This is the single most reusable primitive in quantum algorithms.
- **Quantum counting.** Grover's rotation angle *is* the answer to "how many solutions are there," so measuring the angle counts the solutions. This fixes the stopping problem from [3.5](03-05-grovers-search.md) P3 and gives an approximate-counting algorithm in its own right.
- **Optimality.** $\Omega(\sqrt N)$ queries are *necessary*. Grover cannot be improved, and the proof is short enough to follow. That lower bound is why nobody expects quantum computers to crack NP-complete problems, and it is the most important negative result in the subject.

The third item is what makes this lesson more than a bag of tricks. Knowing what quantum computers **cannot** do is what separates a useful judgement about a claimed speedup from credulity, and this is the cleanest such theorem available.

## The idea

**Amplitude amplification.** Grover's circuit needed only two ingredients: a starting state with some amplitude on the answer, and a way to recognize the answer. It never used the fact that the starting state was uniform.

So replace "uniform superposition" with "whatever state your algorithm $\mathcal A$ produces." If $\mathcal A\lvert0\rangle$ has amplitude $\sqrt p$ on the good subspace, write $\sin\theta = \sqrt p$ and everything goes through: two reflections, a rotation by $2\theta$, about $\frac{\pi}{4\theta} \approx \frac{\pi}{4\sqrt p}$ iterations. Classically you would rerun $\mathcal A$ about $1/p$ times; quantumly you run it about $1/\sqrt p$ times.

**Counting.** Here is the neat part. The Grover operator $G$ is a rotation by $2\theta$ in a two-dimensional plane, so as a matrix it has eigenvalues $e^{\pm 2i\theta}$. And $\sin^2\theta = M/N$. So **if you can measure the eigenvalue of $G$, you have counted the solutions** — without finding any of them. Measuring an eigenvalue is what phase estimation does ([4.2](04-02-quantum-phase-estimation.md)), and running it on $G$ is the whole algorithm.

**Optimality.** Why can't you do better than $\sqrt N$? The intuition is an accounting argument. Each query can only "notice" the marked item in proportion to the amplitude currently sitting on it. Start uniform and that amplitude is $1/\sqrt N$, so one query moves at most about $1/\sqrt N$ worth of amplitude toward the answer. To accumulate amplitude of order 1 you therefore need about $\sqrt N$ queries. Making this rigorous is the **hybrid argument**, and it does not care how clever your circuit is.

## The formal version

> **Amplitude amplification.** Let $\mathcal A$ be a unitary with $\mathcal A\lvert0\rangle = \sin\theta\,\lvert\text{good}\rangle + \cos\theta\,\lvert\text{bad}\rangle$, so the success probability of measuring immediately is $p = \sin^2\theta$. Let $S_{\text{good}}$ flip the sign of the good subspace and $S_0 = I - 2\lvert0\rangle\langle0\rvert$. Then
> $$Q = -\,\mathcal A\,S_0\,\mathcal A^\dagger\,S_{\text{good}}$$
> rotates by $2\theta$ in the plane spanned by $\lvert\text{good}\rangle$ and $\lvert\text{bad}\rangle$, and after $k = \left\lfloor\frac{\pi}{4\theta}-\frac12\right\rfloor$ applications the success probability is $\sin^2\big((2k+1)\theta\big) \ge 1 - p$.

In words: sandwich the sign-flip between your algorithm and its inverse and you have Grover's diffusion operator for a non-uniform starting state. Grover is the special case $\mathcal A = H^{\otimes n}$, where $\mathcal A^\dagger = \mathcal A$ and $p = 1/N$.

$$\text{classical: } \Theta(1/p) \text{ runs of } \mathcal A, \qquad \text{quantum: } \Theta(1/\sqrt p) \text{ runs of } \mathcal A \text{ and } \mathcal A^\dagger.$$

Two conditions are easy to miss and fatal to forget. $\mathcal A$ must be **coherent** — no measurements inside it, since $\mathcal A^\dagger$ must undo it — and you need a **checker** that recognizes success as a unitary sign flip.

> **Quantum counting.** The Grover operator $G$ for $M$ marked items out of $N$ has eigenvalues $e^{\pm2i\theta}$ with $\sin^2\theta = M/N$. Applying phase estimation to $G$ with $m$ ancilla bits yields an estimate $\tilde\theta$, and
> $$\tilde M = N\sin^2\tilde\theta.$$
> Achieving relative accuracy $\epsilon$ in $M$ costs $O\!\left(\frac1\epsilon\sqrt{\frac NM}\right)$ queries.

In words: count without searching, at the same $\sqrt{N/M}$ price as one search. Special case worth naming: deciding whether $M = 0$ or $M \ge 1$ — the *decision* version of search — also costs $\Theta(\sqrt N)$, so you cannot detect the existence of a solution more cheaply than finding one.

> **Optimality (Bennett–Bernstein–Brassard–Vazirani).** Any quantum algorithm that finds a marked item among $N$ with probability at least $2/3$ must make $\Omega(\sqrt N)$ oracle queries. Grover's $\frac\pi4\sqrt N$ is therefore optimal up to the constant.

**The hybrid argument, in outline.** Run the algorithm with the *empty* oracle (nothing marked) and record, for each query $t$ and each item $x$, the squared amplitude $\lvert\alpha_{t,x}\rvert^2$ that the query sees on $x$. Since the state is normalized, $\sum_x\lvert\alpha_{t,x}\rvert^2 = 1$ for each $t$, so over $T$ queries the total "attention" paid is exactly $T$ — and by averaging there must be some item $w$ receiving at most $T/N$ of it. Now switch to the oracle that marks *that* $w$. A standard hybrid bound says the two runs' final states differ in norm by at most $2\sum_t\lvert\alpha_{t,w}\rvert$, which by Cauchy–Schwarz is at most $2\sqrt{T\cdot T/N} = 2T/\sqrt N$. For the algorithm to distinguish the two cases (it must, to find $w$) this difference must be $\Omega(1)$, so

$$T = \Omega(\sqrt N). \qquad\blacksquare$$

In words: the algorithm's total ability to notice any particular item is bounded by its query count, and it cannot concentrate that attention where it matters without already knowing where that is.

> **Consequence for NP.** Relative to a random oracle, $\mathrm{NP}\not\subseteq\mathrm{BQP}$. Brute-force search over $2^n$ certificates costs $2^{n/2}$ quantum queries — still exponential. So a quantum computer solving NP-complete problems efficiently would have to exploit problem *structure*, exactly as a classical one would; searching faster is provably not enough.

## Picture

![A plot of the probability of finding the marked item against the number of Grover iterations k, for N equal to 64. The curve is a sine-squared shape rising from near zero, peaking at a red marked point labelled k-star equals 6 with probability 0.997, then falling back down to an orange marked point labelled k equals 12 with probability 0.0001, and beginning to rise again. Captions read that this is the soufflé problem, stop at k-star or the amplitude rotates straight past the answer; that the curve is sine squared of two-k-plus-one times theta, periodic and not monotone, so more work is not more likely; and that knowing k-star needs M, the number of solutions, which is what quantum counting supplies.](assets/03-06-fig1.svg)

Everything in this lesson is that curve. Amplitude amplification is the curve with a different $\theta$; counting is measuring $\theta$ by measuring the curve's frequency; and optimality is the statement that $\theta$ cannot exceed $\arcsin\sqrt{M/N}$, so the peak cannot be reached sooner.

## Worked examples

**Example 1 — wrap amplification around a randomized algorithm.**

Suppose you have a randomized procedure that succeeds with probability $p = 1/100$ and a cheap way to check success. Classically you rerun it about 100 times.

Quantumly, make it coherent (replace the coin flips with Hadamards, keep all randomness in superposition, uncompute all scratch as in [3.1](03-01-oracles-reversibility-and-phase-kickback.md)), and amplify:

$$\theta = \arcsin\sqrt{0.01} = \arcsin(0.1) = 5.739^\circ, \qquad k^\star = \left\lfloor\frac{\pi}{4\theta}-\frac12\right\rfloor = \lfloor 7.34\rfloor = 7,$$

and the resulting success probability is $\sin^2(15\times5.739^\circ) = \sin^2(86.1^\circ) = 0.995$.

**Seven runs instead of a hundred**, with a higher success probability than 100 classical tries would give. The general table:

| $p$ | classical reps $\approx 1/p$ | quantum $k^\star$ | $P$ at $k^\star$ |
|---|---|---|---|
| $1/4$ | 4 | 1 | 1.000 |
| $10^{-2}$ | 100 | 7 | 0.995 |
| $10^{-3}$ | 1,000 | 24 | 0.9996 |
| $10^{-6}$ | $10^6$ | 784 | 1.000 |

The saving grows as the success probability falls, which is the opposite of the usual situation and makes amplification most valuable exactly where classical repetition is most painful.

Two caveats to keep with the table. The coherence requirement is real work — a classical randomized routine with a measurement in the middle must be rewritten so that all branches stay in superposition, which can cost gates and ancillas. And $\mathcal A^\dagger$ must be implementable, which it is for any circuit but not for a physical process you merely observe.

**Example 2 — count the solutions without finding one.**

Take $N = 1024$ and suppose the true number of solutions is $M = 37$, unknown to you. Then

$$\theta = \arcsin\sqrt{37/1024} = \arcsin(0.1901) = 10.958^\circ,$$

and the Grover operator $G$ has eigenvalues $e^{\pm2i\theta}$, i.e. phase $2\theta/2\pi = 0.060877$ in units of a full turn.

Run phase estimation on $G$ with $m$ ancilla bits, which resolves the phase to $2^{-m}$:

| $m$ | estimated phase | $\tilde\theta$ | $\tilde M = N\sin^2\tilde\theta$ |
|---|---|---|---|
| 6 | 0.062500 | $11.250^\circ$ | 38.97 |
| 10 | 0.060547 | $10.898^\circ$ | 36.60 |

Six bits already gets you "about 39 solutions" and ten bits "about 37." Note the query cost: phase estimation with $m$ bits applies $G$ about $2^m$ times, so $m = 6$ costs 64 Grover iterations — the same order as the $\frac\pi4\sqrt{N/M} \approx 4$ iterations one *search* would take, times the extra precision factor. The general cost, $O\!\left(\epsilon^{-1}\sqrt{N/M}\right)$, says accuracy is bought linearly.

Why this is genuinely useful, beyond fixing Grover's stopping problem: **approximate counting is a hard classical problem with many disguises.** Estimating the number of satisfying assignments, computing a partition function, evaluating a high-dimensional integral by Monte Carlo — all are counting problems, and all get the same quadratic speedup by this route. That is the content of "quantum Monte Carlo speedups" you may see advertised: a quadratic reduction in the number of samples, no more, and with the coherence requirement above making it far from free.

## Watch out

- You might think amplitude amplification can be nested to get a quartic speedup. It cannot. Amplifying an already-amplified routine gives $\sqrt{1/\sqrt p} $ only if the inner routine's success probability is what you are amplifying, and the composition just re-derives $1/\sqrt p$. The quadratic is a ceiling, and the BBBV bound is why.
- You might think the $\Omega(\sqrt N)$ bound only applies to Grover-like circuits. It applies to **every** quantum algorithm that accesses the input only through the oracle, including ones not yet invented. That is what makes it a theorem rather than an observation.
- You might think an oracle lower bound settles what quantum computers can do about NP. It does not settle the real question: $\mathrm{P}$ versus $\mathrm{NP}$ and $\mathrm{BQP}$ versus $\mathrm{NP}$ are open, and an oracle separation is evidence rather than proof ([6.1](06-01-bqp-and-the-complexity-landscape.md)). What it does settle is that *search-based* approaches cannot work — and every known general attack on NP-complete problems is search-based.
- You might think a quadratic speedup is a practical speedup. Often it is not, once error correction is priced in. A fault-tolerant quantum gate is many orders of magnitude slower than a classical one ([6.6](06-06-resource-estimation-and-the-state-of-the-field.md)), so a $\sqrt N$ algorithm with a large constant and a slow clock can lose to an $N$ algorithm on real hardware for any $N$ of interest. Grover-type speedups need enormous problem sizes to pay off.

## One-liner

> Two reflections amplify any success probability from $p$ to 1 in $1/\sqrt p$ tries, the rotation angle counts the solutions, and no quantum algorithm can beat $\sqrt N$ — so unstructured problems yield a square root and nothing more.

## Problems

**P1 (🟢)** A randomized subroutine succeeds with probability $p = 1/1000$. Compute $\theta$, the optimal number of amplitude-amplification iterations $k^\star$, and the resulting success probability. Compare the total number of calls to the subroutine against the classical expected count, and state the two structural requirements the subroutine must satisfy for this to work at all.

**P2 (🟡)** Quantum counting on $N = 1024$ returns a phase estimate corresponding to $\tilde\theta = 4.74^\circ$. Compute the estimated number of solutions $\tilde M$. Then, using that estimate, compute the Grover iteration count you would use to actually find a solution, and the probability of success at that count. Finally, state what happens to your search if the true $M$ were 14 rather than your estimate.

**P3 (🔴, optional)** Work through the hybrid argument. An algorithm makes $T$ oracle queries and must find the marked item with probability at least $2/3$. Run it with the all-zero oracle (no item marked) and let $\lvert\alpha_{t,x}\rvert^2$ be the squared amplitude on item $x$ just before query $t$. (a) Explain why $\sum_x\lvert\alpha_{t,x}\rvert^2 = 1$ for every $t$, and conclude that some item $w$ satisfies $\sum_t\lvert\alpha_{t,w}\rvert^2 \le T/N$. (b) Using the hybrid bound that changing the oracle at item $w$ changes the final state by at most $2\sum_t\lvert\alpha_{t,w}\rvert$ in norm, apply Cauchy–Schwarz to bound this by $2T/\sqrt N$. (c) Conclude $T = \Omega(\sqrt N)$, and state precisely what the theorem does and does not say about $\mathrm{NP}$ versus $\mathrm{BQP}$.

<details>
<summary>Solutions</summary>

**P1** With $p = 10^{-3}$:

$$\theta = \arcsin\sqrt{0.001} = \arcsin(0.031623) = 1.8121^\circ = 0.031629\ \text{rad},$$

$$k^\star = \left\lfloor\frac{\pi}{4\theta} - \frac12\right\rfloor = \left\lfloor\frac{3.14159}{0.126516} - 0.5\right\rfloor = \lfloor 24.34\rfloor = 24,$$

$$P = \sin^2\big(49\times1.8121^\circ\big) = \sin^2(88.79^\circ) = 0.99956.$$

*Call count.* Each amplification iteration uses $\mathcal A$ once and $\mathcal A^\dagger$ once, so 24 iterations cost about 48 calls to the subroutine (plus the initial $\mathcal A$, so 49). Classically you expect $1/p = 1000$ runs for a single success, and about 1,000 more to reach the same confidence. So roughly **49 calls versus a few thousand**, a saving of about $\sqrt{1/p} \approx 32$ — as expected, since the speedup is quadratic.

*The two requirements.*

1. **Coherence.** $\mathcal A$ must be a unitary circuit with no intermediate measurements and no unerased scratch, because $Q$ applies $\mathcal A^\dagger$. A subroutine that measures internally cannot be inverted, and leftover scratch destroys the interference exactly as in [3.1](03-01-oracles-reversibility-and-phase-kickback.md) P3.
2. **A checker.** You need a unitary $S_{\text{good}}$ that flips the sign of successful outcomes, which means success must be *recognizable* by a circuit. Amplification cannot help with a problem whose answers you cannot verify.

**P2** *The count.* With $\tilde\theta = 4.74^\circ$ and $N = 1024$:

$$\tilde M = N\sin^2\tilde\theta = 1024\times\sin^2(4.74^\circ) = 1024\times(0.08266)^2 = 1024\times0.006833 = 7.00.$$

So $\tilde M = 7$ solutions.

*The search.* Using $\theta = 4.7426^\circ$ (the exact value for $M=7$):

$$k^\star = \left\lfloor\frac{\pi}{4\theta}-\frac12\right\rfloor = \left\lfloor\frac{3.14159}{0.33105} - 0.5\right\rfloor = \lfloor 8.99\rfloor = 8,$$

and the success probability is

$$P_8 = \sin^2\big(17\times 4.7426^\circ\big) = \sin^2(80.62^\circ) = 0.9737.$$

*If the truth were $M = 14$.* Then the real rotation angle is $\theta_{\text{true}} = \arcsin\sqrt{14/1024} = 6.716^\circ$, and running 8 iterations puts the state at $17\times6.716^\circ = 114.2^\circ$:

$$P = \sin^2(114.2^\circ) = 0.832.$$

You have over-rotated past the peak, and the success probability falls from the intended 0.97 to 0.83. **Still perfectly usable**, which is the reassuring part: the sine is flat near its maximum, so a factor-of-two error in $M$ (which is a factor $\sqrt2$ in $\theta$) costs only about 14 percentage points. Over-rotation becomes catastrophic only when the angle error accumulates to a multiple of $90^\circ$, which requires being wrong about $M$ by a large factor — the $k = 12$ case of [3.5](03-05-grovers-search.md) P2. And in practice you verify the answer with one extra oracle call and retry on failure, so a probability of 0.83 costs about 1.2 attempts on average.

**P3**

(a) At each step of the algorithm the state is a unit vector, and $\alpha_{t,x}$ are its amplitudes in the basis indexed by the query register's value $x$ (together with any workspace, over which we may sum). Normalization gives $\sum_x\lvert\alpha_{t,x}\rvert^2 = 1$ for every $t = 1,\dots,T$. Summing over $t$,

$$\sum_{t=1}^T\sum_{x}\lvert\alpha_{t,x}\rvert^2 = T.$$

The double sum has $N$ values of $x$, so by averaging there exists some $w$ with

$$\sum_{t=1}^T\lvert\alpha_{t,w}\rvert^2 \le \frac TN.$$

In words: the algorithm's total "attention" is $T$, spread over $N$ items, so some item is nearly ignored — and the adversary marks that one.

(b) The hybrid bound says the final states of the run with no marked item and the run with $w$ marked satisfy

$$\left\lVert\lvert\psi^{(0)}_T\rangle - \lvert\psi^{(w)}_T\rangle\right\rVert \le 2\sum_{t=1}^T\lvert\alpha_{t,w}\rvert.$$

Apply Cauchy–Schwarz to the sum, pairing $\lvert\alpha_{t,w}\rvert$ with the all-ones vector of length $T$:

$$\sum_{t=1}^T\lvert\alpha_{t,w}\rvert \le \sqrt{T}\cdot\sqrt{\sum_{t=1}^T\lvert\alpha_{t,w}\rvert^2} \le \sqrt T\cdot\sqrt{\frac TN} = \frac{T}{\sqrt N}.$$

So the two final states differ by at most $2T/\sqrt N$ in norm.

(c) For the algorithm to output $w$ with probability $\ge 2/3$ in the marked case, while the unmarked run has probability $1/N$ of outputting $w$ by chance, the two final states must be distinguishable — their norm difference must exceed some constant $c > 0$ (a careful treatment gives $c$ around $1/2$). Hence

$$\frac{2T}{\sqrt N}\ge c \implies T \ge \frac{c}{2}\sqrt N = \Omega(\sqrt N). \qquad\blacksquare$$

*What the theorem says.* Any quantum algorithm whose **only** access to the input is through the oracle needs $\Omega(\sqrt N)$ queries. Grover's $\frac\pi4\sqrt N$ matches it, so Grover is optimal up to a constant factor. Applied to brute-force search over $2^n$ certificates, this gives $\Omega(2^{n/2})$ — exponential, so **search-based approaches cannot put NP-complete problems in BQP**, and this holds for all future algorithms of that type, not just known ones.

*What it does not say.* It says nothing about algorithms that exploit the *structure* of a specific problem. Shor's algorithm ([4.4](04-04-shors-factoring-algorithm.md)) is exponentially faster than any known classical factoring algorithm precisely because it does not treat the problem as a search — it uses the group structure of modular arithmetic. Factoring is not known to be NP-complete, and the question $\mathrm{NP}\subseteq\mathrm{BQP}$ remains **open**, as does $\mathrm{P}$ versus $\mathrm{NP}$ ([6.1](06-01-bqp-and-the-complexity-landscape.md)). The honest summary: quantum computers get a square root on brute force, provably and no more, and any larger speedup must come from structure — which is why "we'll just Grover it" is never a plan.

</details>

## Connections

- **Backward:** the two-reflection rotation and the $\sin^2((2k+1)\theta)$ formula are [3.5](03-05-grovers-search.md)'s, generalized by swapping $H^{\otimes n}$ for an arbitrary $\mathcal A$. The coherence requirement on $\mathcal A$ is the uncomputation discipline of [3.1](03-01-oracles-reversibility-and-phase-kickback.md).
- **Forward:** counting needs [4.2](04-02-quantum-phase-estimation.md), which is introduced there for its own sake and then powers order-finding and Shor. The optimality result is the key input to the complexity discussion in [6.1](06-01-bqp-and-the-complexity-landscape.md), and the "quadratic speedups may not survive fault-tolerance overhead" caveat is quantified in [6.6](06-06-resource-estimation-and-the-state-of-the-field.md).
- **Sideways:** the $1/p \to 1/\sqrt p$ improvement is the quantum version of variance reduction, and applied to Monte Carlo integration it gives a quadratic reduction in samples — the same $1/\sqrt N$-to-$1/N$ error scaling that quantum metrology chases past the central limit theorem of [`prob-stat-refresher` 3.3](../../prob-stat-refresher/lessons/03-03-central-limit-theorem.md). The hybrid argument is an adversary argument in the style of [`algorithms` 1.4](../../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md), adapted to amplitudes instead of comparisons.

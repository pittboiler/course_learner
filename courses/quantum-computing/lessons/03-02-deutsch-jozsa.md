# Quantum Computing · Lesson 3.2: Deutsch–Jozsa

> ⏱ ~15 min · Module 3: Oracles, interference, and search · Builds on: [3.1 (oracles, reversibility, and phase kickback)](03-01-oracles-reversibility-and-phase-kickback.md) · Unlocks: [3.3 (Bernstein–Vazirani)](03-03-bernstein-vazirani.md)

## Why this matters

This is the first algorithm in history that provably beat every classical one, and it is still the cleanest demonstration of *how* quantum algorithms work. One query where a classical machine needs exponentially many — with certainty, no probability anywhere.

It is also the first place to be honest about what a speedup claim means. The exponential separation is real, but it is against **deterministic** classical algorithms. A randomized classical algorithm solves the same problem with a handful of queries and tiny error probability, so the practical advantage is nearly nil. Understanding exactly which classical model is being beaten is a skill this lesson installs and Module 6 will test repeatedly.

What you should take away is the *mechanism*: kick the function into phases, then use one layer of Hadamards to compute the **average of those phases**. Every algorithm in Module 3 is a variation on that sentence.

## The idea

You are handed a black box computing $f:\{0,1\}^n\to\{0,1\}$, with a promise: either $f$ is **constant** (the same value on all $2^n$ inputs) or **balanced** (exactly half the inputs give 0 and half give 1). Decide which.

Classically and deterministically, this is bad news. Suppose you have queried $2^{n-1}$ inputs and they all returned 0. Is $f$ constant? You cannot say: the remaining half might all be 1, making $f$ balanced. You need $2^{n-1}+1$ queries in the worst case.

Quantumly, one query does it. The circuit is three steps:

1. **Hadamards** on all $n$ input qubits, producing a uniform superposition of every input.
2. **One phase query**, which stamps $(-1)^{f(x)}$ onto each of the $2^n$ amplitudes ([3.1](03-01-oracles-reversibility-and-phase-kickback.md)).
3. **Hadamards again**, then measure.

The second layer of Hadamards is where the work happens. Applying $H^{\otimes n}$ to a uniform-magnitude superposition and asking for the amplitude of the all-zeros outcome computes the **average of all the signs**:

$$\langle 0^n\vert\psi\rangle = \frac{1}{2^n}\sum_{x}(-1)^{f(x)}.$$

If $f$ is constant, every sign is the same and the average is $\pm1$: you measure all zeros with **probability 1**. If $f$ is balanced, half the signs are $+1$ and half are $-1$, so they cancel exactly and the average is 0: you measure all zeros with **probability 0**.

So one glance at the output settles it. All zeros means constant; anything else means balanced. The exponentially many function values never had to be read — they only had to cancel.

## The formal version

> **Deutsch–Jozsa problem.** Given $f:\{0,1\}^n\to\{0,1\}$ promised to be either constant or balanced, decide which.

> **Deterministic classical complexity.** $2^{n-1}+1$ queries, exactly. Any fewer leaves both cases possible.

> **The algorithm.** Prepare $\lvert0\rangle^{\otimes n}\lvert-\rangle$. Apply $H^{\otimes n}$ to the input register, then one call to $U_f$, then $H^{\otimes n}$ again, then measure the input register. Output "constant" if the result is $0^n$ and "balanced" otherwise.

Trace the state. After the first Hadamards,

$$\frac{1}{\sqrt{2^n}}\sum_x\lvert x\rangle.$$

After the query, by phase kickback,

$$\frac{1}{\sqrt{2^n}}\sum_x (-1)^{f(x)}\lvert x\rangle.$$

After the second Hadamards, using $H^{\otimes n}\lvert x\rangle = 2^{-n/2}\sum_z(-1)^{x\cdot z}\lvert z\rangle$,

$$\lvert\psi\rangle = \frac{1}{2^n}\sum_z\left[\sum_x(-1)^{f(x) + x\cdot z}\right]\lvert z\rangle.$$

> **Correctness.** The amplitude of $\lvert 0^n\rangle$ is $\displaystyle\frac{1}{2^n}\sum_x(-1)^{f(x)}$, since $x\cdot 0 = 0$. Therefore
> $$P(0^n) = \begin{cases} 1 & f \text{ constant},\\ 0 & f\text{ balanced}.\end{cases}$$

In words: the all-zeros amplitude is the average of the signs, and the promise makes that average either extreme. Note the algorithm is **exact** — not "with high probability," but always right, which is rare and is what makes the separation so clean.

Now the honest accounting, which is the other half of this lesson:

| model | queries needed |
|---|---|
| classical deterministic | $2^{n-1}+1$ |
| classical randomized, error $\le 1/3$ | $O(1)$ — about 3 queries suffices |
| quantum, exact | $1$ |

In words: against deterministic classical algorithms the separation is exponential; against randomized ones it is a constant factor. The randomized algorithm is embarrassingly simple: query a few random inputs, and if you ever see two different values, $f$ is balanced; if all $k$ agree, guess constant. A balanced $f$ fools you with probability $2^{-(k-1)}$, so three queries give error 1/4 and ten give error under 0.2 percent.

> **Why the honest version still matters.** Deutsch–Jozsa proves an exponential separation between quantum and **exact** classical computation, and it introduced the technique. Simon's problem ([3.4](03-04-simons-algorithm.md)) upgrades the separation to exponential against *randomized* classical algorithms too, which is the version that leads to Shor.

## Picture

![A four-wire circuit. Three input wires start at ket 0 and one ancilla wire at ket minus. Each input wire passes through an H box, then all four pass through a tall orange box labelled U sub f, then each input wire passes through a second H box and ends in a meter. Annotations read one query, n equals 3, and on the right, all zeros means constant while anything else means balanced. Below, text states that the amplitude of the all-zeros outcome is the average of the signs, giving the formula bracket zero-to-the-n bra psi equals one over two-to-the-n times the sum over x of minus-one to the f of x, and notes that for a constant function all signs agree so the average is plus or minus one and the probability is one, while for a balanced function half the signs are plus and half minus so the average is zero and the probability is zero.](assets/03-02-fig1.svg)

The circuit has a shape you will see four more times in this module: **Hadamards, one oracle, Hadamards, measure.** In group-theoretic language it is "Fourier transform, multiply by a function, inverse Fourier transform" — and since $H^{\otimes n}$ is its own inverse, the two layers look identical. Bernstein–Vazirani and Simon use exactly this circuit with different promises on $f$; Shor uses it with $\mathbb{Z}_{2^n}$ in place of $\mathbb{Z}_2^n$.

## Worked examples

**Example 1 — run it on $n = 2$, both cases, by hand.**

*Constant, $f \equiv 0$.* Start from $\lvert00\rangle$. After $H\otimes H$:
$$\tfrac12\left(\lvert00\rangle+\lvert01\rangle+\lvert10\rangle+\lvert11\rangle\right).$$
The oracle multiplies every term by $(-1)^0 = +1$, so nothing changes. The second $H\otimes H$ undoes the first exactly (since $H^2 = I$), returning $\lvert00\rangle$. Measure: $00$ with probability 1. ✓

*Balanced, $f(x_1x_2) = x_1$.* The signs are $+1$ on $\lvert00\rangle,\lvert01\rangle$ and $-1$ on $\lvert10\rangle,\lvert11\rangle$:
$$\tfrac12\left(\lvert00\rangle+\lvert01\rangle-\lvert10\rangle-\lvert11\rangle\right) = \left(\tfrac{1}{\sqrt2}(\lvert0\rangle-\lvert1\rangle)\right)\otimes\left(\tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)\right) = \lvert-\rangle\lvert+\rangle.$$
The state factored, which makes the last step easy: $H\lvert-\rangle = \lvert1\rangle$ and $H\lvert+\rangle = \lvert0\rangle$, so the output is $\lvert10\rangle$. Measure: $10$ with probability 1 — **not** all zeros, so "balanced." ✓

*Balanced, $f(x_1x_2) = x_1\oplus x_2$.* The signs are $+,-,-,+$, giving $\lvert-\rangle\lvert-\rangle$ by the same factoring, and the output is $\lvert11\rangle$. Again not all zeros. ✓

Notice what the non-zero outcomes are telling you. For $f = x_1$ the answer was $10$; for $f = x_1\oplus x_2$ it was $11$. In both cases the output string is exactly the **coefficient vector of $f$ as a linear function**, which is not a coincidence — it is the content of Bernstein–Vazirani ([3.3](03-03-bernstein-vazirani.md)).

**Example 2 — what the randomized classical algorithm actually costs, and why the comparison matters.**

*The classical randomized algorithm.* Query $k$ distinct inputs chosen at random. If any two values differ, answer "balanced" (certainly correct). If all $k$ agree, answer "constant."

The only way to be wrong is for $f$ to be balanced and for all $k$ sampled inputs to land in the same half. For $2^n \gg k$ the probability is about $2\cdot 2^{-k}$ for the first choice being free and the rest matching, i.e. $2^{-(k-1)}$:

| $k$ queries | error probability |
|---|---|
| 2 | 0.5 |
| 3 | 0.25 |
| 10 | 0.002 |
| 20 | $2\times10^{-6}$ |

So twenty queries give an error rate below one in a million, for any $n$ — a billion inputs or a googol, it makes no difference.

*The comparison, stated carefully.* Against a classical machine required to be **always right**, the quantum algorithm is exponentially better: 1 versus $2^{n-1}+1$. Against a classical machine allowed to be wrong one time in a million, it is better by a factor of 20. Both statements are true; only the first one is what "exponential speedup" refers to here.

This distinction is not pedantry, and it is the reason to learn it now. The complexity classes that matter are the *bounded-error* ones — BPP classically, BQP quantumly ([6.1](06-01-bqp-and-the-complexity-landscape.md)) — because nobody in practice insists on zero error. **A separation that disappears when you allow randomness is not evidence of quantum advantage.** Deutsch–Jozsa's historical importance is the technique it introduced, not the speedup it delivers; Simon's algorithm ([3.4](03-04-simons-algorithm.md)) is the one that survives this test.

## Watch out

- You might think the algorithm "checks all $2^n$ inputs in parallel." It evaluates the oracle once, on a superposition, and then *averages* the results into one number. Averaging is much weaker than checking: it tells you whether the signs cancel and nothing about any individual value. Any algorithm that needed to know a specific $f(x)$ would gain nothing here.
- You might think the exponential speedup makes this a useful algorithm. It does not — the problem is artificial, the promise is unrealistic, and randomized classical algorithms handle it in a few queries. Nobody runs Deutsch–Jozsa for an answer.
- You might think the two constant cases are distinguished by the algorithm. They are not: $f\equiv0$ gives amplitude $+1$ and $f\equiv1$ gives $-1$ on $\lvert 0^n\rangle$, a global phase ([3.1](03-01-oracles-reversibility-and-phase-kickback.md) P1). Both measure as $0^n$ with probability 1, which is why the problem asks "constant or balanced" and not "which constant."
- You might think the second Hadamard layer is optional bookkeeping. Without it you would measure a uniformly random $x$ regardless of $f$, since all $2^n$ amplitudes have magnitude $2^{-n/2}$. **The interference is the algorithm**, and it lives entirely in that layer.

## One-liner

> Kick $f$ into signs, then let Hadamards average them: constant functions survive the average and balanced ones annihilate, so one query and one look decide it.

## Problems

**P1 (🟢)** Run the algorithm for $n=2$ with $f(x_1x_2) = x_2$. Write the state after each of the three stages, give the measurement outcome and its probability, and state the verdict. Then confirm your answer against the general claim that the output string is the coefficient vector of $f$.

**P2 (🟡)** Prove the deterministic classical lower bound: show that for any deterministic algorithm making at most $2^{n-1}$ queries there exist a constant $f$ and a balanced $f$ consistent with every answer it received, so it cannot decide correctly. Then compute the exact error probability of a randomized algorithm that queries $k$ distinct inputs and answers "constant" if all agree, for $f$ balanced on $N = 2^n$ inputs.

**P3 (🔴, optional)** Suppose the promise is weakened: $f$ is either constant or **$\epsilon$-far from constant**, meaning a fraction $\epsilon$ of inputs disagree with the majority value, where $0 < \epsilon \le 1/2$. (a) Compute $P(0^n)$ for the quantum algorithm in terms of $\epsilon$. (b) Determine how many repetitions of the one-query circuit are needed to detect a non-constant $f$ with probability at least $1-\delta$. (c) Compare with the classical randomized cost for the same task, and state what happens to the quantum advantage as $\epsilon$ shrinks.

<details>
<summary>Solutions</summary>

**P1** *Stage 1.* $H\otimes H$ on $\lvert00\rangle$ gives $\tfrac12\left(\lvert00\rangle+\lvert01\rangle+\lvert10\rangle+\lvert11\rangle\right)$.

*Stage 2.* $f(x_1x_2) = x_2$, so $f = 0$ on $\lvert00\rangle,\lvert10\rangle$ and $f=1$ on $\lvert01\rangle,\lvert11\rangle$:
$$\tfrac12\left(\lvert00\rangle - \lvert01\rangle + \lvert10\rangle - \lvert11\rangle\right) = \left(\tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)\right)\otimes\left(\tfrac{1}{\sqrt2}(\lvert0\rangle-\lvert1\rangle)\right) = \lvert+\rangle\lvert-\rangle.$$

*Stage 3.* $H\lvert+\rangle = \lvert0\rangle$, $H\lvert-\rangle = \lvert1\rangle$, so the state is $\lvert01\rangle$.

Measurement gives $01$ with **probability 1**. Not all zeros, so the verdict is **balanced** — correct, since $f = x_2$ takes each value on two of the four inputs.

Against the general claim: $f(x) = x_2 = s\cdot x$ with $s = 01$, and the output string is $01$. ✓ The same check works for the two cases in Example 1: $f = x_1$ has $s = 10$ and output $10$; $f = x_1\oplus x_2$ has $s = 11$ and output $11$.

**P2** *The lower bound.* Fix a deterministic algorithm and imagine an adversary answering its queries. The adversary answers 0 to the first $2^{n-1}$ queries. Now consider the two functions:

- $f_1 \equiv 0$, constant.
- $f_2$ defined to be 0 on the $2^{n-1}$ queried inputs and 1 on all the others — which is balanced, since exactly half the inputs are queried.

Both are consistent with every answer the algorithm received, and both satisfy the promise. Since the algorithm is deterministic, its output depends only on the answers it saw, so it produces the same verdict for $f_1$ and $f_2$ — and one of those verdicts is wrong. Hence $2^{n-1}$ queries never suffice, and $2^{n-1}+1$ do (if the first $2^{n-1}+1$ answers all agree, $f$ cannot be balanced, since a balanced function has only $2^{n-1}$ inputs of each value).

*The randomized error.* Let $f$ be balanced on $N = 2^n$ inputs, so each value occurs $N/2$ times. Query $k$ distinct inputs uniformly at random. The algorithm errs exactly when all $k$ land in one half. Counting:

$$P(\text{all in the 0-half}) = \frac{\binom{N/2}{k}}{\binom{N}{k}} = \prod_{j=0}^{k-1}\frac{N/2 - j}{N-j},$$

and doubling for the two halves,

$$P(\text{error}) = 2\prod_{j=0}^{k-1}\frac{N/2-j}{N-j}.$$

For $N \gg k$ each factor is close to $1/2$, giving $P(\text{error})\approx 2\cdot 2^{-k} = 2^{-(k-1)}$. Exactly: $k=2$ gives $2\cdot\tfrac12\cdot\tfrac{N/2-1}{N-1}\approx\tfrac12$; $k=10$ gives about $0.002$. **The error decays exponentially in $k$ and does not depend on $n$**, which is the whole reason the exponential separation evaporates under randomness.

**P3**

(a) Let the majority value be 0 (the other case is a global phase). Then a fraction $1-\epsilon$ of inputs have $f=0$ and a fraction $\epsilon$ have $f=1$, so

$$\langle 0^n\vert\psi\rangle = \frac{1}{2^n}\sum_x(-1)^{f(x)} = (1-\epsilon)(+1) + \epsilon(-1) = 1-2\epsilon,$$

giving

$$P(0^n) = (1-2\epsilon)^2.$$

Sanity checks: $\epsilon = 0$ (constant) gives 1; $\epsilon = 1/2$ (balanced) gives 0. ✓

(b) A non-constant $f$ is *detected* when the outcome is anything other than $0^n$, which happens with probability $1 - (1-2\epsilon)^2 = 4\epsilon(1-\epsilon)$ per run. After $r$ independent runs the chance of never detecting it is $\left[(1-2\epsilon)^2\right]^r$, so to get below $\delta$:

$$r \ge \frac{\ln(1/\delta)}{2\ln\!\left(\frac{1}{1-2\epsilon}\right)} \approx \frac{\ln(1/\delta)}{4\epsilon} \quad\text{for small }\epsilon,$$

using $\ln(1/(1-2\epsilon)) \approx 2\epsilon$. So the quantum cost is $O\!\left(\epsilon^{-1}\log(1/\delta)\right)$ queries.

(c) Classically, querying random inputs finds a disagreeing input with probability $\epsilon$ per query, so detection with confidence $1-\delta$ takes $O\!\left(\epsilon^{-1}\log(1/\delta)\right)$ queries — **the same scaling.**

So once the promise is relaxed from "exactly balanced" to "$\epsilon$-far," **the quantum advantage vanishes entirely.** The advantage existed only at the knife-edge $\epsilon = 1/2$, where perfect cancellation made the quantum answer exact while the classical answer stayed probabilistic. This is the sharpest possible statement of what Deutsch–Jozsa does and does not show, and it is why the field moved on to Simon's problem ([3.4](03-04-simons-algorithm.md)), where the structure being exploited is a hidden *periodicity* rather than a knife-edge promise, and the separation survives randomness.

(Worth noting for later: amplitude amplification ([3.6](03-06-amplitude-amplification-counting-and-optimality.md)) *can* restore an advantage here, getting $O(\epsilon^{-1/2})$ instead of $O(\epsilon^{-1})$ — a quadratic speedup, which is the generic amount of quantum advantage available for problems with no algebraic structure.)

</details>

## Connections

- **Backward:** the whole algorithm is phase kickback from [3.1](03-01-oracles-reversibility-and-phase-kickback.md) plus the Hadamard transform identity from the same lesson. The "amplitude of $\lvert0^n\rangle$ is the average" step is the $z = 0$ term of the Fourier sum, and the $\epsilon$-far calculation in P3 is a statistical-distance estimate of the kind that recurs in [`information-theory` 1.4](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md).
- **Forward:** [3.3](03-03-bernstein-vazirani.md) keeps the identical circuit and changes the promise, extracting a whole hidden string instead of one bit. [3.4](03-04-simons-algorithm.md) upgrades the separation to one that survives randomization. [3.5](03-05-grovers-search.md) drops the promise entirely and gets only a quadratic speedup, which is the honest generic case.
- **Sideways:** the deterministic lower bound is an **adversary argument** — answer queries so as to keep two possibilities alive — the same technique used for comparison-sorting lower bounds in [`algorithms` 1.4](../../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md). The gap between deterministic and randomized costs here is the same phenomenon as the gap in randomized algorithms generally ([`algorithms` 4.4](../../algorithms/lessons/04-04-randomized-algorithms.md)).

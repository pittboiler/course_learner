# Quantum Computing · Lesson 3.4: Simon's algorithm

> ⏱ ~15 min · Module 3: Oracles, interference, and search · Builds on: [3.3 (Bernstein–Vazirani)](03-03-bernstein-vazirani.md), [3.1 (oracles and phase kickback)](03-01-oracles-reversibility-and-phase-kickback.md) · Unlocks: [3.5 (Grover's search)](03-05-grovers-search.md), [4.5 (the hidden subgroup problem)](04-05-the-hidden-subgroup-problem.md)

## Why this matters

This is the one. Deutsch–Jozsa beat only deterministic classical algorithms; Bernstein–Vazirani gained a factor of $n$. **Simon's algorithm is exponentially faster than any classical algorithm, randomized or not**, and it was the first result of that kind.

It also mattered historically in the most direct way possible. Peter Shor read Simon's 1994 preprint, recognized that "find a hidden XOR period" and "find the period of $a^k \bmod N$" are the same problem with a different group underneath, and produced the factoring algorithm within months. **Simon is Shor with $\mathbb{Z}_2^n$ in place of $\mathbb{Z}_{2^m}$**, and understanding it well is the cheapest possible preparation for Module 4.

The mechanism is also the first genuinely new one: instead of the answer appearing as a single spike, each run returns a **random linear constraint** on the answer, and you collect enough constraints to solve a linear system. Quantum sampling plus classical post-processing is the template for nearly every algorithm that follows.

## The idea

The oracle computes $f:\{0,1\}^n\to\{0,1\}^n$ with a promise: there is a hidden nonzero string $s$ such that

$$f(x) = f(y) \iff y = x \text{ or } y = x\oplus s.$$

So $f$ is **two-to-one**, and the inputs that collide are exactly those differing by $s$. Find $s$.

*Classically this is a birthday problem.* You learn nothing until you find a collision, and collisions are rare: with $2^n$ inputs and $2^{n-1}$ distinct output values, random querying needs about $\sqrt{2^n} = 2^{n/2}$ queries before two inputs collide. That is the best possible classically — and unlike Deutsch–Jozsa, **randomness does not rescue you**, because the difficulty is not a knife-edge promise but a genuine needle-in-haystack.

*Quantumly,* one query plus one Hadamard layer gives you a random string $z$ satisfying

$$z\cdot s = 0 \pmod 2.$$

That is one linear equation on the $n$ unknown bits of $s$. Run the circuit again for another, independent equation. Once you have $n-1$ independent equations, the solution space is two-dimensional over $\mathbb{F}_2$ — containing only $0$ and $s$ — so $s$ is determined. Gaussian elimination finishes it off classically.

Expected number of runs: $O(n)$, because a random $z$ from the right distribution is independent of the previous ones with probability at least $1/2$. So $O(n)$ quantum queries against $\Omega(2^{n/2})$ classical ones. At $n = 100$ that is a hundred queries versus $10^{15}$.

## The formal version

> **Simon's problem.** Given oracle access to $f:\{0,1\}^n\to\{0,1\}^n$ promised to satisfy $f(x) = f(x\oplus s)$ for a hidden nonzero $s$, and to be otherwise injective, find $s$.

> **The algorithm (one round).** Prepare $\lvert0\rangle^{\otimes n}\lvert0\rangle^{\otimes n}$. Apply $H^{\otimes n}$ to the first register, call the bit oracle $U_f$, apply $H^{\otimes n}$ to the first register again, and measure the first register.

Trace it. After the Hadamards and the oracle:

$$\frac{1}{\sqrt{2^n}}\sum_x\lvert x\rangle\lvert f(x)\rangle.$$

Note this uses the **bit** oracle, not phase kickback — the output register genuinely holds $f(x)$, and that entanglement is the point. Group the sum by output value: each value $v$ in the image comes from exactly two inputs, $x_v$ and $x_v\oplus s$, so

$$= \frac{1}{\sqrt{2^n}}\sum_{v\in\mathrm{im}f}\left(\lvert x_v\rangle + \lvert x_v\oplus s\rangle\right)\lvert v\rangle.$$

Now apply $H^{\otimes n}$ to the first register. Using $H^{\otimes n}\lvert x\rangle = 2^{-n/2}\sum_z(-1)^{x\cdot z}\lvert z\rangle$, the pair becomes

$$\lvert x_v\rangle+\lvert x_v\oplus s\rangle \;\longmapsto\; \frac{1}{\sqrt{2^n}}\sum_z\left[(-1)^{x_v\cdot z} + (-1)^{(x_v\oplus s)\cdot z}\right]\lvert z\rangle = \frac{1}{\sqrt{2^n}}\sum_z(-1)^{x_v\cdot z}\left[1 + (-1)^{s\cdot z}\right]\lvert z\rangle.$$

> **The selection rule.** The bracket is 2 when $s\cdot z = 0$ and **0** when $s\cdot z = 1$. So every measurement outcome $z$ satisfies $z\cdot s = 0$, and the distribution is uniform over the $2^{n-1}$ such strings.

In words: the two colliding inputs interfere, and the interference is destructive on exactly the strings that would have told you the wrong thing. You cannot get $s$ directly, but you learn one bit of information about it — a constraint — for free, every run.

> **Classical post-processing.** Collect strings $z_1,\dots,z_k$. They span a subspace of the orthogonal complement of $s$ in $\mathbb{F}_2^n$. Once $n-1$ of them are linearly independent, solve the homogeneous system $Zs = 0$ by Gaussian elimination; the solution space is $\{0, s\}$, so the unique nonzero solution is $s$.

> **Query cost.** Quantum: $O(n)$ queries in expectation, plus $O(n^3)$ classical time for the elimination. Classical: $\Theta(2^{n/2})$ queries, even with randomness and bounded error. (Compare the whole family on the card: [algorithm costs](../reference.md#algorithm-costs-and-their-classical-baselines).)

In words: each round gives an independent uniform sample from an $(n-1)$-dimensional subspace, and the coupon-collector-style analysis says $n + O(1)$ samples give $n-1$ independent ones with high probability. The separation is exponential and it is against the realistic classical model, which is why this result changed the field's expectations.

## Picture

![Left: two columns of three-bit strings. The left column lists x from 000 through 111 and the right column lists f of x. Thin curves connect each x to its image, showing that the strings pair up so that x and x XOR 110 land on the same output value, with a caption stating that f is two-to-one with hidden period s equal to 110 so that x and x XOR s collide. Right: a list of the four measurement outcomes z equal to 000, 001, 110 and 111, each at probability one quarter, under a heading saying that measuring the input register returns a random z with z dot s equal to zero. Below, notes state that each z is one linear equation over the field with two elements, that n minus 1 independent ones pin down s, that the quantum cost is order n queries, and that the classical cost is order 2 to the n over 2 by the birthday bound.](assets/03-04-fig1.svg)

The four sampled strings in the right-hand panel are exactly the orthogonal complement of $s = 110$: check $000\cdot110 = 0$, $001\cdot110 = 0$, $110\cdot110 = 1+1 = 0$, $111\cdot110 = 1+1 = 0$. The other four strings — $010, 011, 100, 101$ — all have odd overlap with $s$ and appear with probability exactly zero. **The algorithm's output distribution is supported precisely on a subgroup, and the subgroup determines $s$.** That sentence is the bridge to [4.5](04-05-the-hidden-subgroup-problem.md).

## Worked examples

**Example 1 — a full run at $n = 3$ with $s = 110$.**

Take $f(x) = \min(x, x\oplus 110)$, a valid Simon function: it is constant on each pair $\{x, x\oplus s\}$ and distinct across pairs. The four pairs are

$$\{000, 110\},\quad \{001,111\},\quad \{010,100\},\quad \{011,101\}.$$

*After the Hadamards and the oracle,* grouping by output value:

$$\frac{1}{\sqrt8}\Big[\left(\lvert000\rangle+\lvert110\rangle\right)\lvert000\rangle + \left(\lvert001\rangle+\lvert111\rangle\right)\lvert001\rangle + \left(\lvert010\rangle+\lvert100\rangle\right)\lvert010\rangle + \left(\lvert011\rangle+\lvert101\rangle\right)\lvert011\rangle\Big].$$

*After the second Hadamard layer,* the selection rule kills every $z$ with $z\cdot s = 1$, leaving a uniform distribution over the four strings with $z\cdot 110 = 0$:

| outcome $z$ | probability | equation on $s = s_1s_2s_3$ |
|---|---|---|
| $000$ | 1/4 | $0 = 0$ (useless) |
| $001$ | 1/4 | $s_3 = 0$ |
| $110$ | 1/4 | $s_1 \oplus s_2 = 0$ |
| $111$ | 1/4 | $s_1\oplus s_2\oplus s_3 = 0$ |

*Solving.* Suppose three runs give $001$, $110$, and $111$. The third is the XOR of the first two, so it is **dependent** and adds nothing — this is why $O(n)$ runs are needed rather than exactly $n-1$. Keep $001$ and $110$: two independent equations in three unknowns, leaving a one-dimensional solution space spanned by... solve directly: $s_3 = 0$ and $s_1 = s_2$, so $s \in \{000, 110\}$. Discarding the trivial solution gives

$$s = 110. \checkmark$$

Note the $000$ outcome, which occurs a fraction $2^{-(n-1)} = 1/4$ of the time here, conveys nothing. It is the price of a uniform sampler and it is why the expected round count exceeds $n-1$.

**Example 2 — the classical lower bound, and why randomness does not help.**

*The classical algorithm.* You must find two inputs with the same output; until then, every answer you have seen is consistent with *many* values of $s$. Concretely, after $k$ queries with all distinct outputs, the pairs you have ruled out are the $\binom{k}{2}$ XORs of queried inputs, leaving about $2^n - \binom{k}{2}$ candidate values of $s$ still possible.

*The birthday estimate.* With $k$ random queries there are $\binom k2 \approx k^2/2$ pairs, each colliding with probability $\approx 2^{-n}$ (since for a collision you need the pair's XOR to equal $s$, one specific value out of $2^n$). So the expected number of collisions is about

$$\frac{k^2}{2}\cdot\frac{1}{2^n},$$

which reaches 1 when $k \approx 2^{(n+1)/2}$. Below that, collisions are unlikely and you have learned essentially nothing.

*Why randomness does not help.* This is the key contrast with Deutsch–Jozsa. There, the difficulty was a promise poised exactly at the boundary, so a random sample detected imbalance immediately. Here the difficulty is that the *information you need is exponentially rare in the sample space* — there is exactly one good XOR out of $2^n$, and no distribution of queries makes it common. A rigorous version of this argument gives $\Omega(2^{n/2})$ for any bounded-error randomized algorithm.

*Tabulate the scale.*

| $n$ | quantum queries ($\approx n+3$) | classical queries ($\approx 2^{n/2}$) |
|---|---|---|
| 10 | 13 | 32 |
| 30 | 33 | 32,768 |
| 60 | 63 | $1.1\times10^{9}$ |
| 100 | 103 | $1.1\times10^{15}$ |

At $n=100$: a hundred queries versus a quadrillion. **This is what an exponential separation looks like when it is real.** And the reason it is real is structural — the promise gives $f$ a hidden *periodicity*, the Hadamard transform is exactly the tool that detects periodicity, and no classical sampling procedure can see a period without stumbling on a collision first.

## Watch out

- You might think the algorithm finds $s$ directly. It never does. Each run returns a random $z$ perpendicular to $s$, and you have to do linear algebra afterwards. **Quantum sampling plus classical post-processing** is the real shape of the algorithm, and the same shape recurs in order-finding ([4.3](04-03-order-finding-and-period-finding.md)), where the post-processing is continued fractions rather than Gaussian elimination.
- You might think $n-1$ runs suffice. They suffice only if every sample is independent, which it is not — you can draw $000$, or repeat, or draw a dependent combination. The expected count is $n + O(1)$ and the tail is well controlled, but "exactly $n-1$" is wrong.
- You might think phase kickback is used here. It is not: this algorithm calls the **bit** oracle and leaves $f(x)$ in the second register on purpose. That deliberate entanglement is what groups the inputs into colliding pairs, and the interference happens *within each pair*. It is the one algorithm in this module where the output register does real work.
- You might think Simon's problem is a natural computational task. It is not — it is a promise problem with a black box, and nobody needs to solve it. Its importance is entirely that it is the $\mathbb{Z}_2^n$ case of a general phenomenon whose $\mathbb{Z}_N$ case breaks RSA ([4.4](04-04-shors-factoring-algorithm.md)).

## One-liner

> Colliding inputs interfere, and the interference kills every string not perpendicular to the hidden period — so each run hands you one linear equation, and $n$ of them hand you $s$.

## Problems

**P1 (🟢)** For $n = 3$ and $s = 101$, list the four colliding pairs of inputs, then list all strings $z$ with $z\cdot s = 0$ and state the probability of each as a measurement outcome. Suppose two runs return $z = 010$ and $z = 101$; write the resulting linear system and solve for $s$.

**P2 (🟡)** Derive the selection rule. Starting from the state $\tfrac{1}{\sqrt{2}}\left(\lvert x_v\rangle + \lvert x_v\oplus s\rangle\right)$ on the input register, apply $H^{\otimes n}$ and show that the amplitude of $\lvert z\rangle$ is proportional to $1 + (-1)^{s\cdot z}$. Then explain why the resulting distribution is uniform over the orthogonal complement of $s$, and why it carries no information about which pair $v$ you happened to be in.

**P3 (🔴, optional)** Analyse the round count. Each run returns a uniform random element of the $(n-1)$-dimensional subspace $s^\perp \subseteq \mathbb{F}_2^n$. (a) Show that if you already have $j$ linearly independent samples, the probability that the next sample is independent of them is $1 - 2^{j-(n-1)}$. (b) Use this to show the expected number of runs to collect $n-1$ independent samples is less than $n+1$. (c) Explain why the total classical post-processing cost is $O(n^3)$, and state what the total resource count is for $n = 100$ compared with the classical query count.

<details>
<summary>Solutions</summary>

**P1** With $s = 101$, the pairs are $\{x, x\oplus 101\}$:

$$\{000, 101\},\quad\{001,100\},\quad\{010,111\},\quad\{011,110\}.$$

Strings with $z\cdot s = z_1\oplus z_3 = 0$ — that is, $z_1 = z_3$:

$$000,\quad 010,\quad 101,\quad 111,$$

each with probability $1/4$ (uniform over the $2^{n-1} = 4$ elements of $s^\perp$). The other four strings have probability 0.

*Solving.* Runs give $010$ and $101$:
$$z=010:\ s_2 = 0, \qquad z = 101:\ s_1\oplus s_3 = 0.$$
Two independent equations in three unknowns, so the solution space has dimension 1 and contains $\{000, s\}$. From $s_2 = 0$ and $s_1 = s_3$, the nonzero solution is $s_1=s_3=1$, $s_2=0$:
$$s = 101. \checkmark$$

**P2** Apply $H^{\otimes n}$ to each term:

$$\frac{1}{\sqrt2}\left(\lvert x_v\rangle+\lvert x_v\oplus s\rangle\right) \;\longmapsto\; \frac{1}{\sqrt2}\cdot\frac{1}{\sqrt{2^n}}\sum_z\left[(-1)^{x_v\cdot z} + (-1)^{(x_v\oplus s)\cdot z}\right]\lvert z\rangle.$$

Since the dot product is linear over $\mathbb{F}_2$, $(x_v\oplus s)\cdot z = x_v\cdot z \oplus s\cdot z$, and therefore $(-1)^{(x_v\oplus s)\cdot z} = (-1)^{x_v\cdot z}(-1)^{s\cdot z}$. Factor:

$$= \frac{1}{\sqrt{2^{n+1}}}\sum_z(-1)^{x_v\cdot z}\left[1 + (-1)^{s\cdot z}\right]\lvert z\rangle.$$

The bracket is $2$ if $s\cdot z = 0$ and $0$ if $s\cdot z = 1$. So the surviving amplitudes are

$$\frac{2(-1)^{x_v\cdot z}}{\sqrt{2^{n+1}}} = \frac{(-1)^{x_v\cdot z}}{\sqrt{2^{n-1}}} \quad\text{for } z\in s^\perp,$$

whose squared magnitude is $2^{-(n-1)}$ — **uniform over the $2^{n-1}$ strings in $s^\perp$**, independent of $v$.

*Why $v$ is invisible.* The pair index $v$ enters only through the sign $(-1)^{x_v\cdot z}$, which is a phase of modulus 1 and therefore cancels in the probability. This is essential to the algorithm: the output register (holding $v$) is measured or discarded, and because the input-register distribution does not depend on $v$, that measurement does not disturb anything. Had the probabilities depended on $v$, the distribution over $z$ would be conditioned on an unknown value and the linear-equation interpretation would fail.

**P3**

(a) Suppose you hold $j$ independent samples inside $s^\perp$, which is an $(n-1)$-dimensional vector space over $\mathbb{F}_2$. They span a subspace of size $2^j$. A fresh uniform sample from $s^\perp$ (of size $2^{n-1}$) is *dependent* exactly when it falls in that span, which happens with probability

$$\frac{2^j}{2^{n-1}} = 2^{\,j-(n-1)}.$$

So the probability it is independent is $1 - 2^{j-(n-1)}$. For small $j$ this is nearly 1; the hard step is the last one, $j = n-2$, where the probability is $1 - 1/2 = 1/2$.

(b) The number of runs needed to advance from $j$ to $j+1$ independent samples is geometric with success probability $p_j = 1-2^{j-(n-1)}$, so its expectation is $1/p_j$. Total expected runs:

$$\mathbb{E}[\text{runs}] = \sum_{j=0}^{n-2}\frac{1}{1 - 2^{\,j-(n-1)}} = \sum_{m=1}^{n-1}\frac{1}{1-2^{-m}} \quad (m = n-1-j).$$

Bound each term: $\frac{1}{1-2^{-m}} = 1 + \frac{2^{-m}}{1-2^{-m}} \le 1 + 2^{-m+1}$ for $m\ge1$. Summing,

$$\mathbb{E}[\text{runs}] \le (n-1) + \sum_{m\ge1}2^{-m+1} = (n-1) + 2 = n+1.$$

So fewer than $n+1$ runs in expectation — the overhead above the information-theoretic minimum $n-1$ is a constant, about 2 extra runs, and it is concentrated in the final few steps where the subspace is nearly full.

(c) *Post-processing.* Gaussian elimination on an $(n-1)\times n$ matrix over $\mathbb{F}_2$ costs $O(n^3)$ bit operations (or $O(n^2)$ machine words with bit-packing). Extracting the unique nonzero kernel vector is then immediate.

*The scale at $n = 100$.*

| resource | count |
|---|---|
| quantum oracle queries | $\approx 101$ |
| quantum gates per query (plus Hadamards) | $O(n)$ beyond the oracle |
| classical post-processing | $\approx 10^6$ bit operations |
| **classical queries required instead** | $\approx 1.1\times10^{15}$ |

A hundred queries and a millisecond of linear algebra, against a quadrillion oracle calls. And note where the cost sits: the quantum part is *cheap and shallow* while the classical part is negligible, which is exactly the profile of Shor's algorithm too ([4.4](04-04-shors-factoring-algorithm.md)) — a modest quantum subroutine called $O(n)$ times, wrapped in classical number theory. **The lesson for algorithm design: use the quantum computer only for the step that needs interference, and do everything else classically.** Every practical proposal in Module 6 follows that rule.

</details>

## Connections

- **Backward:** the machinery is [3.1](03-01-oracles-reversibility-and-phase-kickback.md)'s Hadamard transform and [3.3](03-03-bernstein-vazirani.md)'s character orthogonality, applied to a state whose input register is entangled with the output register — the partial-measurement reasoning of [1.4](01-04-two-qubits-tensor-products-and-entanglement.md) and [2.2](02-02-density-matrices-and-the-partial-trace.md). The linear algebra over $\mathbb{F}_2$ is the same field as the classical codes of [`communications` 4.3](../../communications/lessons/04-03-block-codes.md).
- **Forward:** [4.1](04-01-the-quantum-fourier-transform.md) replaces $H^{\otimes n}$, the Fourier transform over $\mathbb{Z}_2^n$, with the Fourier transform over $\mathbb{Z}_{2^m}$ — and with that single substitution Simon's period-finding becomes [4.3](04-03-order-finding-and-period-finding.md)'s order-finding and then Shor's factoring. [4.5](04-05-the-hidden-subgroup-problem.md) states the general frame both belong to.
- **Sideways:** the classical lower bound is the birthday bound, the same $\sqrt N$ collision estimate that sets hash-function security in [`cryptography` 2.2](../../cryptography/lessons/02-02-the-birthday-bound-and-merkle-damgard.md) — and it is worth noticing that Grover's algorithm ([3.5](03-05-grovers-search.md)) attacks that bound too, taking collision-finding from $2^{n/2}$ to $2^{n/3}$ with quantum queries.

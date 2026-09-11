# Quantum Computing · Lesson 4.3: Order-finding and the period-finding core

> ⏱ ~15 min · Module 4: Fourier, phase, and factoring · Builds on: [4.2 (quantum phase estimation)](04-02-quantum-phase-estimation.md), [4.1 (the quantum Fourier transform)](04-01-the-quantum-fourier-transform.md), [`number-theory` 3.3 (order and the unit group)](../../number-theory/lessons/03-03-order-and-the-unit-group.md) · Unlocks: [4.4 (Shor's factoring algorithm)](04-04-shors-factoring-algorithm.md)

## Why this matters

This is the quantum heart of Shor's algorithm. Everything else in [4.4](04-04-shors-factoring-algorithm.md) is classical number theory that has been known since Euclid; the only step no classical computer can do efficiently is the one built here.

The problem: given integers $a$ and $N$ with $\gcd(a,N) = 1$, find the smallest $r > 0$ with $a^r \equiv 1 \pmod N$. That $r$ is the **order** of $a$ modulo $N$, and the best known classical algorithms for it are as slow as factoring itself.

Two ideas make it quantum-easy, and both are worth the effort of understanding properly.

- **A period is an eigenphase.** The operator "multiply by $a$ mod $N$" has eigenvalues $e^{2\pi is/r}$. So phase estimation ([4.2](04-02-quantum-phase-estimation.md)) reads out $s/r$, and the period is hiding in a denominator.
- **Modular exponentiation is cheap at exponential scale.** Phase estimation needs controlled-$U^{2^k}$, which looks like $2^k$ multiplications. It is not: $a^{2^k}\bmod N$ is computed classically by $k$ squarings, so each controlled power costs **one** modular multiplication. This is the trick that makes the algorithm polynomial, and it is the single most important implementation detail in the subject.

Then one piece of classical machinery finishes the job: continued fractions recover the exact fraction $s/r$ from a noisy decimal estimate.

## The idea

Fix $a$ and $N$ and look at the sequence $a^0, a^1, a^2,\dots \bmod N$. It cycles, with period $r$. For $a = 2$, $N = 21$:

$$1,\ 2,\ 4,\ 8,\ 16,\ 11,\ 1,\ 2,\ 4,\dots$$

so $r = 6$. Finding $r$ classically means walking the sequence, which takes up to $r$ steps, and $r$ can be as large as $N$ — exponential in the number of digits.

Now consider the unitary that steps the sequence forward:

$$U_a\lvert y\rangle = \lvert ay \bmod N\rangle.$$

It permutes the residues in cycles of length $r$, so it is a **cyclic shift** on each cycle, and the eigenvectors of a cyclic shift are plane waves. Concretely, take the cycle containing 1 and build

$$\lvert u_s\rangle = \frac{1}{\sqrt r}\sum_{k=0}^{r-1}e^{-2\pi isk/r}\big\lvert a^k\bmod N\big\rangle, \qquad U_a\lvert u_s\rangle = e^{2\pi is/r}\lvert u_s\rangle.$$

**The eigenphases are $s/r$.** So the period, which was a global property of a long sequence, has become a number you can measure with phase estimation.

One problem: you cannot prepare $\lvert u_s\rangle$, because building it requires knowing $r$. The fix is elegant — feed in $\lvert1\rangle$ instead. Since $\lvert1\rangle = \frac{1}{\sqrt r}\sum_s\lvert u_s\rangle$ is an equal superposition of all $r$ eigenvectors, phase estimation returns a **random** $s$ with $s$ uniform in $\{0,\dots,r-1\}$, along with an estimate of $s/r$ ([4.2](04-02-quantum-phase-estimation.md)). That is exactly what you want: a random rational with denominator $r$.

Recovering $r$ from a decimal approximation to $s/r$ is the continued-fraction step. Given $11/64 \approx 0.1719$ and the promise that the true value is $s/r$ with $r < N = 21$, the convergents of $11/64$ are

$$0,\quad \tfrac15,\quad \tfrac16,\quad \tfrac{5}{29},\quad \tfrac{11}{64},$$

and the one with denominator under 21 that is close enough is $1/6$. So $r = 6$. Check: $2^6 = 64 = 3\times21 + 1$. ✓

## The formal version

> **Order-finding.** Given $a, N$ with $\gcd(a,N)=1$, find the order $r = \mathrm{ord}_N(a)$, the least positive integer with $a^r\equiv1\pmod N$.

> **The shift operator.** Define $U_a\lvert y\rangle = \lvert ay\bmod N\rangle$ for $0\le y < N$ (and the identity on $y \ge N$ to make it unitary on $n = \lceil\log_2 N\rceil$ qubits). It is a permutation, hence unitary.

> **Its eigenvectors.** For $s = 0,\dots,r-1$,
> $$\lvert u_s\rangle = \frac{1}{\sqrt r}\sum_{k=0}^{r-1}e^{-2\pi isk/r}\lvert a^k\bmod N\rangle \quad\text{satisfies}\quad U_a\lvert u_s\rangle = e^{2\pi is/r}\lvert u_s\rangle.$$

**Proof.** $U_a$ maps $\lvert a^k\rangle\to\lvert a^{k+1}\rangle$, so
$$U_a\lvert u_s\rangle = \frac{1}{\sqrt r}\sum_k e^{-2\pi isk/r}\lvert a^{k+1}\rangle = \frac{1}{\sqrt r}\sum_{k'}e^{-2\pi is(k'-1)/r}\lvert a^{k'}\rangle = e^{2\pi is/r}\lvert u_s\rangle,$$
using $a^r = a^0$ to close the cycle. $\blacksquare$

> **The starting state.** $\displaystyle\lvert1\rangle = \frac{1}{\sqrt r}\sum_{s=0}^{r-1}\lvert u_s\rangle$, so feeding $\lvert1\rangle$ into phase estimation yields a uniformly random $s\in\{0,\dots,r-1\}$ together with an estimate of $s/r$.

In words: $\lvert1\rangle$ is an unbiased mixture of every eigenvector, and the measurement picks one at random. No knowledge of $r$ is needed to prepare it.

> **The algorithm.** With $m = 2n + \lceil\log_2(2 + 1/2\epsilon)\rceil$ ancillas, run phase estimation on $U_a$ with target $\lvert1\rangle$, obtaining $j/2^m \approx s/r$. Apply the continued-fraction expansion to $j/2^m$ and return the denominator of the first convergent $p/q$ with $q < N$ and $\lvert j/2^m - p/q\rvert < 1/2^{m}$. Verify by checking $a^q\equiv1$; if not, repeat.

> **Why $m \approx 2n$ bits.** Two distinct fractions with denominators below $N$ differ by at least $1/N^2$, so you need phase accuracy better than $1/2N^2$, hence about $2\log_2 N = 2n$ bits.

> **Continued fractions (the classical guarantee).** If $\lvert x - p/q\rvert < 1/2q^2$ with $\gcd(p,q) = 1$, then $p/q$ appears among the convergents of $x$'s continued-fraction expansion, computable in $O(\log^3 N)$ time.

In words: a good enough decimal approximation determines the fraction uniquely, and Euclid's algorithm finds it. This theorem is what converts "a number near $s/r$" into "$r$ exactly."

Now the cost, which is where the algorithm is won:

> **Modular exponentiation by repeated squaring.** Controlled-$U_a^{2^k}$ is controlled multiplication by the classically precomputed constant $a^{2^k}\bmod N$, which takes $k$ squarings to compute on a classical machine. So each of the $m$ controlled powers costs **one** controlled modular multiplication, not $2^k$ of them.

> **Total cost.** $O(n)$ controlled modular multiplications, each $O(n^2)$ gates with schoolbook arithmetic, so $O(n^3)$ gates overall; $2n + O(1)$ qubits with the tightest known constructions.

In words: the whole quantum circuit is polynomial. The apparent exponential in phase estimation's $2^m$ applications of $U$ disappears because the powers of $a$ can be precomputed classically — **the exponentiation happens on your laptop, and only the multiplication happens on the quantum computer.**

Finally, the success probability:

> **Failure modes and their fix.** The measurement can return $s = 0$ (useless, probability $1/r$), or $s$ sharing a factor with $r$ (giving a divisor of $r$ rather than $r$). Both are detected by testing $a^q\equiv1\pmod N$, and a constant number of repetitions succeeds with high probability. Taking the least common multiple of two runs' answers also works.

## Picture

![Top: a row of thirteen boxes showing 2 to the power k mod 21 for k from 0 to 12, giving the values 1, 2, 4, 8, 16, 11 and then repeating, with the boxes at multiples of six drawn in red and a red arc underneath spanning six positions labelled period r equals 6. Below, a five-step chain: phase-estimate the operator that maps ket y to ket a-y mod N; its eigenphases are s over r for s from zero to r minus one; measure approximately 11 over 64 equals 0.171875; take continued fractions of 11 over 64 giving the convergents 0, one fifth, one sixth, five twenty-ninths and eleven sixty-fourths; and read off that the convergent with small denominator is one sixth so r equals 6. A closing check notes that 2 to the sixth is 64 which is 3 times 21 plus 1.](assets/04-03-fig1.svg)

The five-step chain is the algorithm. Note that only step 1 is quantum: steps 2 through 5 are number theory and arithmetic. **The quantum computer's entire contribution is turning a periodicity into a measurable phase**, and everything before and after is classical.

## Worked examples

**Example 1 — order of 2 modulo 21, end to end.**

*The sequence.* $2^0 = 1$, then $2, 4, 8, 16$, then $2^5 = 32 = 11 \bmod 21$, then $2^6 = 22 = 1\bmod21$. So $r = 6$.

*The eigenphases.* $U_2$'s eigenvalues on the cycle containing 1 are $e^{2\pi is/6}$ for $s = 0,\dots,5$, so the possible phases are

$$0,\quad \tfrac16 = 0.1667,\quad \tfrac26 = 0.3333,\quad \tfrac36 = 0.5,\quad \tfrac46 = 0.6667,\quad \tfrac56 = 0.8333.$$

*Phase estimation with $m = 6$.* Suppose the run returns $s = 1$, so the true phase is $1/6$. From [4.2](04-02-quantum-phase-estimation.md) Example 1, the measurement gives $j = 11$ with probability 0.684, so

$$\frac{j}{2^m} = \frac{11}{64} = 0.171875.$$

*Continued fractions.* Expand $11/64$ by repeated division:
$$\frac{64}{11} = 5 + \frac{9}{11},\quad \frac{11}{9} = 1 + \frac29,\quad \frac92 = 4+\frac12,\quad \frac21 = 2,$$
giving the coefficient list $[0; 5, 1, 4, 2]$ and convergents
$$\frac01,\quad \frac15,\quad \frac16,\quad \frac{5}{29},\quad \frac{11}{64}.$$

Scan them for a denominator below $N = 21$ that approximates $0.171875$ well: $1/5 = 0.2$ is off by $0.028$, too much for $m=6$ bits; $1/6 = 0.1667$ is off by $0.0052$, within one bin width $1/64 = 0.0156$. Take $r = 6$.

*Verify.* $2^6 = 64 = 3\times21 + 1 \equiv 1 \pmod{21}$. ✓

*What if the run had returned $s = 2$?* Then the phase is $2/6 = 1/3$, whose convergents give $1/3$, and you would conclude $r = 3$. Checking: $2^3 = 8 \not\equiv1\pmod{21}$, so the test fails and you repeat. This is the "$s$ shares a factor with $r$" failure mode, and the verification step catches it. (Alternatively, $\mathrm{lcm}(3, \text{next run's answer})$ usually recovers 6 immediately.)

**Example 2 — where the polynomial cost actually comes from.**

Phase estimation with $m$ ancillas needs controlled-$U^{2^0}, U^{2^1},\dots,U^{2^{m-1}}$. Written naively that is $1 + 2 + 4 + \cdots + 2^{m-1} = 2^m - 1$ applications of $U$ — exponential, and the algorithm would be worthless.

The escape: $U_a^{2^k}$ is not $2^k$ copies of $U_a$. It is a single operator, namely multiplication by the constant

$$c_k = a^{2^k}\bmod N,$$

and that constant is computed **classically** by $k$ successive squarings:

$$c_0 = a, \quad c_1 = c_0^2\bmod N, \quad c_2 = c_1^2\bmod N,\ \dots$$

Each squaring is one multiplication of $n$-bit numbers on a laptop. So:

| stage | where | cost |
|---|---|---|
| compute $c_0,\dots,c_{m-1}$ | classical | $m$ modular squarings, $O(n^3)$ bit ops total |
| controlled-multiply by $c_k$ | quantum | 1 controlled modular multiplication each |
| total quantum | quantum | $m = O(n)$ modular multiplications, $O(n^3)$ gates |

**This is the whole reason Shor's algorithm is efficient.** The exponentially large power is handled by classical repeated squaring; the quantum computer only ever performs $O(n)$ multiplications. Phase estimation applied to a *generic* unitary really would cost $2^m$ applications, and would be useless — the trick works because $U_a$ has the group structure $U_a^{2^k} = U_{a^{2^k}}$.

Concrete scale for RSA-2048, where $n = 2048$:

| quantity | value |
|---|---|
| ancillas $m$ | $\approx 4{,}100$ |
| controlled modular multiplications | $\approx 4{,}100$ |
| qubits (logical) | $\approx 2n + 3 \approx 4{,}100$ |
| gates (Toffoli-dominated) | $\approx 3\times10^{9}$ |

Four thousand logical qubits and a few billion Toffolis — utterly out of reach today, but **polynomial**, which is the point. [6.6](06-06-resource-estimation-and-the-state-of-the-field.md) converts these logical numbers into physical ones and the answer is roughly twenty million physical qubits.

## Watch out

- You might think you need to prepare an eigenstate $\lvert u_s\rangle$. You cannot — building it needs $r$ — and you do not: $\lvert1\rangle$ is an equal superposition of all of them, and phase estimation happily collapses onto a random one. **The state you can prepare is exactly the state you need.**
- You might think the measured $j/2^m$ is $s/r$. It is an approximation, and the actual fraction must be recovered by continued fractions. Reporting $2^m/j$ as the period is a common and total failure.
- You might think a single run gives $r$. It gives $r$ divided by a common factor with a random $s$, so about $\phi(r)/r$ of runs succeed — a constant fraction, but not all. Always verify $a^q\equiv1\pmod N$ and repeat on failure.
- You might think controlled-$U^{2^k}$ costs exponentially. It does for a generic $U$, and that would sink the algorithm. It is cheap here only because $a^{2^k}\bmod N$ is classically precomputable — a structural gift of modular arithmetic, not a general feature of phase estimation.

## One-liner

> Multiplication by $a$ shifts a cycle of length $r$, so its eigenphases are $s/r$ — phase-estimate one, run continued fractions, and the period falls out of a denominator.

## Problems

**P1 (🟢)** Compute the order of $a = 5$ modulo $N = 21$ by listing powers. Then list the six possible eigenphases $s/r$ of $U_5$, and state which of them would be useless if measured and why.

**P2 (🟡)** A phase-estimation run on $U_a$ with $N = 33$ and $m = 8$ ancillas returns $j = 51$. Compute $j/2^m$, find its continued-fraction convergents, and identify the order $r$ given the constraint $r < 33$. Then state the arithmetic check you would perform to confirm it, and what you would do if the check failed.

**P3 (🔴, optional)** Prove the eigenvector claim and the decomposition of $\lvert1\rangle$. (a) Verify directly that $U_a\lvert u_s\rangle = e^{2\pi is/r}\lvert u_s\rangle$, being explicit about where $a^r \equiv 1$ is used. (b) Show $\frac{1}{\sqrt r}\sum_{s=0}^{r-1}\lvert u_s\rangle = \lvert1\rangle$, using the character orthogonality identity for $\mathbb{Z}_r$. (c) Explain why the resulting distribution over $s$ is uniform, and compute the probability that a single run returns an $s$ coprime to $r$ when $r = 12$ — that is, the probability the run yields $r$ directly rather than a proper divisor.

<details>
<summary>Solutions</summary>

**P1** Powers of 5 mod 21:
$$5^1 = 5,\quad 5^2 = 25 = 4,\quad 5^3 = 20,\quad 5^4 = 100 = 16,\quad 5^5 = 80 = 17,\quad 5^6 = 85 = 1.$$
So $r = 6$. (Note $\gcd(5,21) = 1$, as required.)

The eigenphases of $U_5$ are $s/6$ for $s = 0,\dots,5$:
$$0,\quad \tfrac16,\quad \tfrac13,\quad \tfrac12,\quad \tfrac23,\quad \tfrac56.$$

*Which are useless.* Measuring $s = 0$ gives phase 0, whose only convergent is $0/1$, and you learn nothing at all. Measuring $s = 2$ or $s = 4$ gives $1/3$ or $2/3$, whose denominators are 3 — a **proper divisor** of $r$, so you get $r = 3$, which fails the check $5^3 \equiv 20 \not\equiv 1$. Likewise $s = 3$ gives $1/2$ and the false answer $r = 2$.

Only $s = 1$ and $s = 5$, the values coprime to 6, give $r = 6$ directly: that is $\phi(6)/6 = 2/6 = 1/3$ of runs. So roughly one run in three succeeds outright, and the rest are caught by the verification. Taking the LCM of a few runs' answers recovers 6 quickly — e.g. $\mathrm{lcm}(2,3) = 6$.

**P2** *The estimate.* $j/2^m = 51/256 = 0.19921875$.

*Continued fractions of $51/256$.* Repeated division:
$$\frac{256}{51} = 5 + \frac{1}{51},\quad \frac{51}{1} = 51,$$
so the coefficient list is $[0; 5, 51]$. Convergents:
$$\frac01,\quad \frac15,\quad \frac{51}{256}.$$

*The order.* With $r < 33$, the only nontrivial candidate is $q = 5$, and $1/5 = 0.2$ differs from $0.19921875$ by $0.00078$, well within one bin width $1/256 = 0.0039$. So $r = 5$.

*The check.* Compute $a^5 \bmod 33$ and confirm it equals 1. (For instance $a = 2$: $2^5 = 32\ne1$, so that $a$ would be inconsistent with the answer; $a = 4$: $4^5 = 1024 = 31\times33 + 1 \equiv 1$ ✓, so $a = 4$ has order 5 mod 33.)

*If the check failed.* The run returned an $s$ sharing a factor with $r$, so the recovered $q$ is a proper divisor of the true order. Two remedies: multiply $q$ by small integers and re-test ($2q$, $3q$, …), or run the algorithm again and take $\mathrm{lcm}$ of the two answers. Either way a constant number of repetitions suffices, so the expected cost is still polynomial.

**P3**

(a) Apply $U_a$ term by term. Since $U_a\lvert a^k\bmod N\rangle = \lvert a^{k+1}\bmod N\rangle$,

$$U_a\lvert u_s\rangle = \frac{1}{\sqrt r}\sum_{k=0}^{r-1}e^{-2\pi isk/r}\lvert a^{k+1}\rangle.$$

Substitute $k' = k+1$, so $k = k'-1$ and the sum runs over $k' = 1,\dots,r$:

$$= \frac{1}{\sqrt r}\sum_{k'=1}^{r}e^{-2\pi is(k'-1)/r}\lvert a^{k'}\rangle = e^{2\pi is/r}\cdot\frac{1}{\sqrt r}\sum_{k'=1}^{r}e^{-2\pi isk'/r}\lvert a^{k'}\rangle.$$

Now the $k' = r$ term: **here is where $a^r\equiv1$ enters.** We have $\lvert a^r\rangle = \lvert a^0\rangle = \lvert1\rangle$, and $e^{-2\pi isr/r} = e^{-2\pi is} = 1 = e^{-2\pi is\cdot0/r}$, so the $k'=r$ term is identical to the $k'=0$ term. The sum over $k' = 1,\dots,r$ therefore equals the sum over $k'=0,\dots,r-1$, which is $\lvert u_s\rangle$ again:

$$U_a\lvert u_s\rangle = e^{2\pi is/r}\lvert u_s\rangle. \qquad\blacksquare$$

Without $a^r\equiv1$ the cycle would not close and the plane wave would not be an eigenvector — periodicity is exactly the hypothesis that makes the shift diagonalizable by Fourier modes.

(b) Sum the eigenvectors:

$$\frac{1}{\sqrt r}\sum_{s=0}^{r-1}\lvert u_s\rangle = \frac1r\sum_{s=0}^{r-1}\sum_{k=0}^{r-1}e^{-2\pi isk/r}\lvert a^k\rangle = \frac1r\sum_{k=0}^{r-1}\left[\sum_{s=0}^{r-1}e^{-2\pi isk/r}\right]\lvert a^k\rangle.$$

The inner sum is the character orthogonality relation for $\mathbb{Z}_r$: it equals $r$ when $k \equiv 0$ and 0 otherwise (a geometric series whose ratio is an $r$-th root of unity, as in [4.1](04-01-the-quantum-fourier-transform.md) P3). So only $k = 0$ survives:

$$= \frac1r\cdot r\cdot\lvert a^0\rangle = \lvert1\rangle. \qquad\blacksquare$$

(c) Since $\lvert1\rangle = \frac{1}{\sqrt r}\sum_s\lvert u_s\rangle$ has equal amplitude $1/\sqrt r$ on each of the $r$ orthonormal eigenvectors, phase estimation collapses the target onto $\lvert u_s\rangle$ with probability $\lvert1/\sqrt r\rvert^2 = 1/r$ — **uniform over $s$** ([4.2](04-02-quantum-phase-estimation.md)).

For $r = 12$: a run yields $r$ directly exactly when $\gcd(s,r) = 1$, because then the fraction $s/r$ is already in lowest terms and its continued-fraction convergent has denominator $r$. The number of such $s$ in $\{0,\dots,11\}$ is Euler's totient

$$\phi(12) = 12\left(1-\tfrac12\right)\left(1-\tfrac13\right) = 4,$$

namely $s = 1, 5, 7, 11$. So

$$P(\text{success in one run}) = \frac{\phi(12)}{12} = \frac{4}{12} = \frac13.$$

Three runs in expectation, and it never gets much worse: $\phi(r)/r \ge c/\log\log r$ for a constant $c$, so the success probability decays only doubly-logarithmically and $O(\log\log r)$ repetitions always suffice. Combined with the LCM trick — a few partial answers whose least common multiple is $r$ — the practical repetition count is 2 or 3. **The randomness in $s$ costs a small constant factor and nothing more**, which is exactly the kind of failure mode a bounded-error algorithm is allowed ([6.1](06-01-bqp-and-the-complexity-landscape.md)).

</details>

## Connections

- **Backward:** the eigenvector construction is the discrete Fourier basis of [4.1](04-01-the-quantum-fourier-transform.md) applied to a cyclic shift, and the measurement is phase estimation from [4.2](04-02-quantum-phase-estimation.md). The order of an element, the unit group $\mathbb{Z}_N^*$, and Euler's totient are [`number-theory` 3.2](../../number-theory/lessons/03-02-euler-totient-and-theorem.md)–[3.3](../../number-theory/lessons/03-03-order-and-the-unit-group.md); continued fractions are [`number-theory` 5.2](../../number-theory/lessons/05-02-pell-equation-and-continued-fractions.md).
- **Forward:** [4.4](04-04-shors-factoring-algorithm.md) wraps four classical steps around this subroutine to factor. [4.5](04-05-the-hidden-subgroup-problem.md) names the general frame: this is the hidden subgroup problem for $G = \mathbb{Z}$ with $H = r\mathbb{Z}$, and Simon's problem was the same thing over $\mathbb{Z}_2^n$.
- **Sideways:** "the eigenvectors of a shift are plane waves" is the discrete version of why Fourier modes diagonalize translation-invariant operators — the same fact that makes Fourier methods work for differential equations ([`fourier-analysis` 4.3](../../fourier-analysis/lessons/04-03-heat-wave-equations.md)) and that gives Bloch's theorem its form in a periodic crystal ([`condensed-matter` 3.3](../../condensed-matter/lessons/03-03-blochs-theorem.md)). The hardness of order-finding classically is what RSA's security rests on ([`cryptography` 3.3](../../cryptography/lessons/03-03-rsa-encryption.md)).

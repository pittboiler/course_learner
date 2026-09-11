# Quantum Computing · Lesson 4.4: Shor's factoring algorithm

> ⏱ ~15 min · Module 4: Fourier, phase, and factoring · Builds on: [4.3 (order-finding)](04-03-order-finding-and-period-finding.md), [`number-theory` 3.2 (Euler's totient)](../../number-theory/lessons/03-02-euler-totient-and-theorem.md) · Unlocks: [4.5 (the hidden subgroup problem)](04-05-the-hidden-subgroup-problem.md), [6.6 (resource estimation)](06-06-resource-estimation-and-the-state-of-the-field.md)

## Why this matters

This is the algorithm that made quantum computing a funded field rather than a curiosity. In 1994 Peter Shor showed that factoring — the problem RSA's security rests on — is efficiently solvable on a quantum computer. Overnight the question stopped being "is this interesting?" and became "how soon?"

Two things are worth getting straight, and this lesson exists to get them straight.

**The algorithm is mostly classical.** Four of its five steps are number theory Gauss would have recognized. The quantum computer does one thing: find the order of an element modulo $N$ ([4.3](04-03-order-finding-and-period-finding.md)). That reduction — factoring to order-finding — is the intellectual core, and it is entirely classical.

**The speedup is over the best known classical algorithm, not over a black box.** Unlike everything in Module 3, this is not a query-complexity result with an artificial oracle. Shor beats the general number field sieve, humanity's best factoring algorithm, from subexponential to polynomial. That is why it is in a different league from Deutsch–Jozsa or Bernstein–Vazirani, and why its resource requirements are studied so carefully ([6.6](06-06-resource-estimation-and-the-state-of-the-field.md)).

## The idea

Suppose you want to factor $N = 15$, and you happen to know that $4^2 = 16 \equiv 1 \pmod{15}$.

That congruence says $4^2 - 1 \equiv 0$, so $15$ divides $(4-1)(4+1) = 3\times5$. But 15 does not divide 3 and does not divide 5, so **its factors must be split between the two terms**. Compute $\gcd(3, 15) = 3$ and $\gcd(5,15) = 5$, and you have factored 15.

That is the entire trick, and it generalizes. If you can find any $x$ with

$$x^2 \equiv 1 \pmod N, \qquad x \not\equiv \pm1 \pmod N,$$

then $N \mid (x-1)(x+1)$ while dividing neither factor, so $\gcd(x-1, N)$ is a nontrivial factor. Such an $x$ is called a **nontrivial square root of 1**, and finding one is as good as factoring.

Where do you get one? Pick a random $a$ coprime to $N$ and find its order $r$, so $a^r\equiv1$. If $r$ is **even**, then $x = a^{r/2}$ satisfies $x^2 \equiv 1$. It might be the trivial root $-1$, in which case you retry with a different $a$ — but for a composite $N$ with at least two distinct prime factors, a random $a$ works at least half the time.

So: factoring reduces to order-finding, and order-finding is what a quantum computer does. **The quantum computer never sees the number you are factoring as a factoring problem** — it sees a periodic sequence and reports the period.

## The formal version

> **Shor's algorithm.** To factor an odd composite $N$ that is not a perfect power:
> 1. Pick $a$ uniformly at random from $\{2,\dots,N-1\}$.
> 2. Compute $g = \gcd(a,N)$. If $g > 1$, return $g$ — you got lucky.
> 3. **[Quantum]** Find the order $r$ of $a$ modulo $N$ by phase estimation on $U_a$ ([4.3](04-03-order-finding-and-period-finding.md)).
> 4. If $r$ is odd, or if $a^{r/2}\equiv-1\pmod N$, go back to step 1.
> 5. Return $\gcd(a^{r/2}-1,\,N)$ and $\gcd(a^{r/2}+1,\,N)$.

The preconditions in the first line are cheap to arrange classically: even $N$ is factored by 2, and perfect powers $N = m^k$ are detected by taking $k$-th roots for $k \le \log_2 N$.

> **Why step 5 works.** If $r$ is even and $x = a^{r/2}$, then $x^2 \equiv 1$, so $N \mid (x-1)(x+1)$. Since $r$ is the *least* exponent with $a^r\equiv1$, we have $x\not\equiv1$; and step 4 rules out $x\equiv-1$. So $N$ divides the product but neither factor, meaning each factor contains part of $N$: both gcds are nontrivial.

> **Success probability.** If $N$ has $k\ge2$ distinct odd prime factors, a random $a$ coprime to $N$ passes step 4 with probability at least $1 - 2^{-(k-1)} \ge 1/2$. (The card summarizes the recipe and this bound under [Shor and the HSP table](../reference.md#shors-algorithm-and-the-hsp-table).)

In words: at least half of all bases work, so a constant number of attempts suffices. The proof counts square roots of 1 modulo $N$ using the Chinese remainder theorem: there are $2^k$ of them, and only two ($\pm1$) are useless.

> **Cost.** The quantum part runs in $O(n^3)$ gates with schoolbook modular arithmetic ($n = \log_2 N$), or $\tilde O(n^2)$ with fast multiplication, using $2n + O(1)$ to $3n$ qubits. The classical steps cost $O(n^3)$ bit operations. Overall: **polynomial in $n$.**

Compare with the classical state of the art:

$$\text{GNFS: } \exp\!\left(\left(\tfrac{64}{9}\right)^{1/3}(\ln N)^{1/3}(\ln\ln N)^{2/3}\right) \quad\text{versus}\quad \text{Shor: } O(n^3).$$

At $n = 2048$ the sieve needs roughly $2^{112}$ operations — the "112-bit security level" NIST assigns to RSA-2048 — while Shor's circuit needs a few billion Toffoli gates. **Subexponential to polynomial** is the shape of the win, and it is the only known exponential speedup over a classical algorithm for a problem people actually want solved.

One clarification that matters for how you talk about this:

> **Factoring is not known to be NP-complete.** It sits in NP and in co-NP, which makes NP-completeness unlikely. So Shor's algorithm is *not* evidence that quantum computers crack NP-complete problems — and [3.6](03-06-amplitude-amplification-counting-and-optimality.md) gives positive reason to think they do not.

## Picture

![Left: a five-box vertical flow chart. Pick random a less than N, labelled classical. Then is gcd of a and N greater than one, labelled classical, lucky, done. Then find the order r of a mod N, drawn in red and labelled QUANTUM, phase estimation. Then is r even and a to the r over two not congruent to minus one, labelled classical, else retry. Finally gcd of a to the r over two plus or minus one with N are the factors, labelled classical, Euclid. Right: a worked example for N equals 15 and a equals 7, showing that 7, 49, 343 and 2401 reduce to 7, 4, 13 and 1 mod 15, so r equals 4 which is even; that 7 squared is 4 and 4 is not congruent to minus 1 which is 14 mod 15; that gcd of 3 and 15 is 3 and gcd of 5 and 15 is 5; and that 15 equals 3 times 5. A closing orange note says only step 3 is quantum, and it is the only step nobody can do classically.](assets/04-04-fig1.svg)

Count the boxes: one red, four grey. **Shor's algorithm is four classical steps wrapped around one quantum subroutine**, and the subroutine is not about factoring at all. This is the normal shape of a useful quantum algorithm, and it is worth expecting: the quantum computer is a coprocessor for one specific interference task.

## Worked examples

**Example 1 — factor 15 with $a = 7$, every step.**

*Step 1.* Take $a = 7$.

*Step 2.* $\gcd(7,15) = 1$, so no luck; continue.

*Step 3 (quantum).* Find the order of 7 mod 15. The powers:
$$7^1 = 7, \quad 7^2 = 49 = 4, \quad 7^3 = 28 = 13, \quad 7^4 = 91 = 1 \pmod{15}.$$
So $r = 4$. (On a real machine this comes from phase estimation returning an approximation to $s/4$ for random $s\in\{0,1,2,3\}$, followed by continued fractions — [4.3](04-03-order-finding-and-period-finding.md) Example 1.)

*Step 4.* Is $r$ even? Yes, $r = 4$. Is $a^{r/2}\equiv -1$? Compute $7^2 = 49 = 4 \pmod{15}$, and $-1 \equiv 14 \pmod{15}$. Since $4\ne14$, the test passes.

*Step 5.* The nontrivial square root of 1 is $x = 4$, and
$$\gcd(4-1, 15) = \gcd(3,15) = 3, \qquad \gcd(4+1,15) = \gcd(5,15) = 5.$$

$$15 = 3\times5. \checkmark$$

*How lucky was $a = 7$?* Check every coprime base:

| $a$ | $r$ | $a^{r/2}$ | useful? | factors found |
|---|---|---|---|---|
| 2 | 4 | 4 | yes | 3, 5 |
| 4 | 2 | 4 | yes | 3, 5 |
| 7 | 4 | 4 | yes | 3, 5 |
| 8 | 4 | 4 | yes | 3, 5 |
| 11 | 2 | 11 | yes | 5, 3 |
| 13 | 4 | 4 | yes | 3, 5 |
| 14 | 2 | 14 | **no** ($\equiv-1$) | — |

Six of seven bases work; only $a = 14 \equiv -1$ fails, and it fails for the obvious reason that its square root of 1 is the trivial one. The theoretical guarantee was "at least half," and reality here is 86 percent — the bound is loose but safe.

**Example 2 — a second run, and the resource reality check.**

*Factor 21 with $a = 2$.* From [4.3](04-03-order-finding-and-period-finding.md), $r = 6$. Even ✓. Then $a^{r/2} = 2^3 = 8$, and $-1\equiv20\pmod{21}$, so $8\ne20$ ✓. Finally

$$\gcd(8-1,21) = \gcd(7,21) = 7, \qquad \gcd(8+1,21) = \gcd(9,21) = 3, \qquad 21 = 3\times7.\ \checkmark$$

*Now scale to RSA-2048*, with $n = 2048$ bits. The logical resources, using the tightest published constructions:

| resource | value |
|---|---|
| logical qubits | $\approx 3n \approx 6{,}200$ |
| Toffoli gates | $\approx 0.3\,n^3 \approx 2.6\times10^{9}$ |
| circuit depth | comparable, since the multiplications are sequential |
| classical work | negligible |

And now the conversion nobody can skip. Those are **logical** qubits — perfect, noiseless abstractions. Each one must be encoded in many physical qubits by an error-correcting code ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)), and each Toffoli must be executed fault-tolerantly. The canonical estimate (Gidney and Ekerå, 2019) for a superconducting machine with a physical error rate of $10^{-3}$:

$$\textbf{20 million physical qubits, running for about 8 hours.}$$

Compare with today: the largest devices have a few hundred to about a thousand physical qubits with error rates near $10^{-3}$. **The gap is four to five orders of magnitude in qubit count**, and closing it is an engineering programme measured in decades, not product cycles.

Two honest observations follow, and they are the ones to carry forward. First, "RSA is broken" is a statement about the future, not the present, and the relevant number is not qubit count alone but qubits **times** error rate times gate speed ([6.6](06-06-resource-estimation-and-the-state-of-the-field.md)). Second, the threat is nonetheless real *today* for long-lived secrets, because an adversary can record encrypted traffic now and decrypt it when the machine exists. That "harvest now, decrypt later" argument is the entire justification for migrating to post-quantum cryptography before any quantum computer can factor anything ([`cryptography` 4.5](../../cryptography/lessons/04-05-post-quantum-cryptography.md)).

## Watch out

- You might think Shor's algorithm directly searches for factors. It never mentions factors. It finds the **order** of a random element, and the connection to factors is classical algebra from step 5. Describing it as "quantum search for divisors" gets the mechanism exactly wrong.
- You might think a single quantum run factors $N$. A run can fail three ways: the phase estimate can land badly, the recovered order can be a proper divisor of the true order, or $r$ can be odd or give $a^{r/2}\equiv-1$. Each failure is detected classically and costs a retry, so the expected number of runs is a small constant.
- You might think factoring being in BQP means NP-complete problems are too. Factoring is in $\mathrm{NP}\cap\mathrm{co\text{-}NP}$, which strongly suggests it is *not* NP-complete. Shor exploits the group structure of $\mathbb{Z}_N^*$; NP-complete problems have no such structure to exploit, and [3.6](03-06-amplitude-amplification-counting-and-optimality.md) shows brute force gets only a square root.
- You might think 4,000 logical qubits means 4,000 physical qubits are nearly enough. The overhead is roughly a thousand physical qubits per logical qubit at current error rates, and that factor is the real barrier. Quoting logical counts without the conversion is the most common way resource estimates get misreported.

## One-liner

> Find a nontrivial square root of 1 and Euclid hands you the factors; the order of a random element gives you one half the time; and finding orders is the one thing a quantum computer does that nobody can do classically.

## Problems

**P1 (🟢)** Factor $N = 33$ using $a = 5$. Find the order $r$ by listing powers, check the two conditions of step 4, and compute both gcds to recover the factors. Then state which step would have been the quantum one.

**P2 (🟡)** Show that $a = 14$ fails for $N = 15$, and explain exactly which condition it violates. Then, using the fact that $N = pq$ for distinct odd primes has exactly four square roots of 1 modulo $N$, compute the fraction of bases $a$ coprime to 15 whose order leads to a nontrivial square root, and compare with the guaranteed bound of $1/2$.

**P3 (🔴, optional)** Prove the reduction and count the failures. (a) Show that if $x^2\equiv1\pmod N$ with $x\not\equiv\pm1$, then $\gcd(x-1,N)$ is a nontrivial factor of $N$. (b) For $N = pq$ with $p,q$ distinct odd primes, use the Chinese remainder theorem to show there are exactly four square roots of 1 mod $N$, and identify them. (c) Argue that a random $a$ coprime to $N$ yields one of the two *nontrivial* roots with probability at least $1/2$, and state how the bound generalizes to $N$ with $k$ distinct odd prime factors.

<details>
<summary>Solutions</summary>

**P1** *Step 1–2.* $a = 5$, and $\gcd(5,33) = 1$, so continue.

*Step 3 (the quantum step).* Powers of 5 mod 33:
$$5^1 = 5,\quad 5^2 = 25,\quad 5^3 = 125 = 26,\quad 5^4 = 130 = 31,\quad 5^5 = 155 = 23,\quad 5^6 = 115 = 16,$$
$$5^7 = 80 = 14,\quad 5^8 = 70 = 4,\quad 5^9 = 20,\quad 5^{10} = 100 = 1.$$
So $r = 10$.

*Step 4.* Is $r$ even? Yes. Is $a^{r/2} \equiv -1$? Compute $5^5 = 23 \pmod{33}$, and $-1 \equiv 32\pmod{33}$. Since $23\ne32$, the test passes.

*Step 5.*
$$\gcd(23-1, 33) = \gcd(22,33) = 11, \qquad \gcd(23+1,33) = \gcd(24,33) = 3.$$

$$33 = 3\times11. \checkmark$$

**Step 3 is the quantum one** — finding that $r = 10$. Everything else is arithmetic that a classical machine does instantly; listing the powers by hand as above is exactly what becomes infeasible when $N$ has 2,048 bits, since $r$ can be as large as $N$.

**P2** *Why $a = 14$ fails.* $14 \equiv -1\pmod{15}$, so $14^2 = 196 = 1\pmod{15}$ and $r = 2$. Then $a^{r/2} = 14^1 = 14 \equiv -1\pmod{15}$, which is exactly the condition step 4 rejects. The square root of 1 produced is the **trivial** one, and indeed
$$\gcd(14-1,15) = \gcd(13,15) = 1, \qquad \gcd(14+1,15) = \gcd(15,15) = 15,$$
giving the useless factorization $15 = 1\times15$. The condition $a^{r/2}\not\equiv-1$ is precisely the check that rules this out.

*Counting the good bases.* $N = 15 = 3\times5$, so there are four square roots of 1 modulo 15: $\pm1$ and two nontrivial ones. By the Chinese remainder theorem they are the elements congruent to $\pm1$ mod 3 and $\pm1$ mod 5, namely
$$1,\quad 14\ (\equiv -1),\quad 4\ (\equiv 1 \bmod 3,\ -1\bmod 5),\quad 11\ (\equiv -1\bmod3,\ 1\bmod5).$$
Two are trivial and two ($4$ and $11$) are useful.

From the table in Example 1, the coprime bases $a\in\{2,4,7,8,11,13,14\}$ (excluding $a=1$) give $a^{r/2}$ equal to $4, 4, 4, 4, 11, 4, 14$. Six of seven yield a nontrivial root:
$$\frac67 \approx 0.857,$$
comfortably above the guaranteed $1 - 2^{-(k-1)} = 1 - 2^{-1} = 1/2$ for $k=2$. The bound is worst-case over all $N$ of this form and is loose for small $N$; what matters is that it is bounded away from 0 uniformly, so the expected retry count is $O(1)$ for every $N$.

**P3**

(a) From $x^2\equiv1\pmod N$ we get $N \mid x^2 - 1 = (x-1)(x+1)$. Let $d = \gcd(x-1,N)$.

Suppose $d = 1$. Then $N$ is coprime to $x-1$, so $N\mid(x-1)(x+1)$ forces $N\mid x+1$, i.e. $x\equiv-1\pmod N$ — excluded by hypothesis.

Suppose $d = N$. Then $N \mid x-1$, i.e. $x\equiv1\pmod N$ — also excluded.

So $1 < d < N$, and $d$ is a nontrivial factor. $\blacksquare$ (By the same argument $\gcd(x+1,N)$ is nontrivial, and in fact $d\cdot\gcd(x+1,N) = N$ when $N = pq$.)

(b) By the Chinese remainder theorem, $\mathbb{Z}_N^* \cong \mathbb{Z}_p^*\times\mathbb{Z}_q^*$, so solving $x^2\equiv1\pmod N$ is equivalent to solving the pair
$$x^2\equiv1\pmod p \quad\text{and}\quad x^2\equiv1\pmod q.$$
Since $p$ is an odd prime, $\mathbb{Z}_p$ is a field and $x^2 - 1 = (x-1)(x+1)$ has exactly two roots, $x\equiv\pm1\pmod p$ (distinct because $p$ is odd). Same for $q$. So there are $2\times2 = 4$ combinations, each giving exactly one residue mod $N$ by CRT:

$$x\equiv(+1,+1) \Rightarrow x\equiv1, \qquad x\equiv(-1,-1)\Rightarrow x\equiv-1,$$
$$x\equiv(+1,-1) \quad\text{and}\quad x\equiv(-1,+1) \Rightarrow \text{the two nontrivial roots}.$$

Exactly two of the four are useful, and each of them yields the full factorization via (a) — for instance $x\equiv(+1,-1)$ has $p \mid x-1$ and $q\mid x+1$, so $\gcd(x-1,N) = p$.

(c) Here is the standard argument. Write $r = \mathrm{ord}_N(a)$ and let $r_p = \mathrm{ord}_p(a)$, $r_q = \mathrm{ord}_q(a)$, so $r = \mathrm{lcm}(r_p, r_q)$. Let $2^{e_p}$ and $2^{e_q}$ be the largest powers of 2 dividing $r_p$ and $r_q$.

The algorithm **fails** exactly when $r$ is odd or $a^{r/2}\equiv-1\pmod N$, and a short calculation shows both happen only when $e_p = e_q$: if the two 2-adic valuations differ, then $r/2$ is a multiple of one of $r_p, r_q$ but not the other, so $a^{r/2}$ is $+1$ modulo one prime and $-1$ modulo the other — a **nontrivial** root, exactly what we want.

Now the counting. Because $\mathbb{Z}_p^*$ is cyclic of even order, a uniformly random element has $e_p$ equal to each achievable value with the "half-the-time" distribution characteristic of cyclic groups, and the same independently for $q$ via CRT. So $P(e_p = e_q) \le 1/2$, giving

$$P(\text{success}) \ge \tfrac12.$$

*Generalization.* For $N$ with $k$ distinct odd prime factors there are $2^k$ square roots of 1, of which 2 are trivial, and the same valuation argument gives

$$P(\text{success}) \ge 1 - \frac{1}{2^{k-1}}.$$

So more prime factors make the algorithm *more* likely to succeed on the first try — $k = 3$ gives 75 percent, $k=4$ gives 87.5 percent — and the hardest case is the two-prime case, which is exactly the case RSA uses. That is not a coincidence: RSA moduli are chosen as products of two primes precisely because that maximizes the difficulty of classical factoring, and it happens also to be Shor's worst case. It is still only a factor of two.

</details>

## Connections

- **Backward:** step 3 is [4.3](04-03-order-finding-and-period-finding.md) entire, which rests on [4.2](04-02-quantum-phase-estimation.md) and [4.1](04-01-the-quantum-fourier-transform.md). The classical reduction uses Euclid's algorithm ([`number-theory` 1.2](../../number-theory/lessons/01-02-euclidean-algorithm-and-bezout.md)), the Chinese remainder theorem ([`number-theory` 2.4](../../number-theory/lessons/02-04-chinese-remainder-theorem.md)), and Euler's totient ([`number-theory` 3.2](../../number-theory/lessons/03-02-euler-totient-and-theorem.md)).
- **Forward:** [4.5](04-05-the-hidden-subgroup-problem.md) shows that the same method also breaks Diffie–Hellman and elliptic-curve cryptography, because discrete logarithm is another abelian hidden subgroup problem. [6.6](06-06-resource-estimation-and-the-state-of-the-field.md) turns the logical resource count above into physical qubits, code distances, and wall-clock time.
- **Sideways:** the scheme this breaks is built in [`cryptography` 3.3](../../cryptography/lessons/03-03-rsa-encryption.md), and the migration it forces is [`cryptography` 4.5](../../cryptography/lessons/04-05-post-quantum-cryptography.md) — which explicitly defers the quantum machinery to this course. The classical competitor, the general number field sieve, is the state of the art whose subexponential $L_N[1/3]$ running time sets today's key-size recommendations ([`cryptography` 3.1](../../cryptography/lessons/03-01-the-number-theoretic-toolkit.md)).

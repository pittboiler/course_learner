# Number Theory · Lesson 3.1: Fermat's little theorem

> ⏱ ~15 min · Module 3: The multiplicative group modulo n · Builds on: 2.1 (congruences: arithmetic modulo n) · Unlocks: 3.2 (Euler's totient and Euler's theorem)

## Why this matters

You will constantly need to know what an astronomically large power *is* modulo a prime — the last two digits of $7^{222}$, whether a 300-digit number is prime, whether RSA decryption actually returns your message. Computing the power outright is hopeless. Fermat's little theorem is the shortcut: modulo a prime $p$, exponents live not in the integers but in a world of size $p-1$, so a tower like $a^{1000000}$ collapses to something you can do on a napkin. It is also the first crack of light into *why* the units mod $n$ form a group — the structural fact that runs the rest of this course and all of `abstract-algebra`.

## The idea

Fix a prime $p$ and a number $a$ that $p$ doesn't divide. Start multiplying $a$ by itself: $a, a^2, a^3, \dots$, always reducing mod $p$. You're walking around a finite set of nonzero remainders — only $p-1$ of them exist — so the walk must eventually cycle. Fermat pins down the cycle exactly: **by the time you reach the $(p-1)$-th power, you're back at $1$.** Raise $a$ to the $(p-1)$, and no matter what nonzero $a$ you picked, mod $p$ you land on $1$ on the nose.

The practical payoff falls straight out. If $a^{p-1}\equiv 1$, then $a^{p-1}$ is "invisible" to the modulus — you can insert or delete it for free. So only the exponent's remainder mod $p-1$ matters. Big exponent, small world.

## The formal version

**Fermat's little theorem.** Let $p$ be prime.

$$a^{p} \equiv a \pmod{p} \quad \text{for every integer } a.$$

And if in addition $p \nmid a$ (read: "$p$ does not divide $a$"), then

$$a^{p-1} \equiv 1 \pmod{p}.$$

In words: raising to the $p$-th power fixes every residue mod $p$; and for any $a$ that isn't a multiple of $p$, raising to the $(p-1)$-th power lands you exactly on $1$.

The two forms are almost the same statement. If $p\nmid a$ then $a$ is a **unit** mod $p$ (it has a multiplicative inverse, because $\gcd(a,p)=1$ — Lesson 2.2), so we may cancel one factor of $a$ from $a^p\equiv a$ to get $a^{p-1}\equiv 1$. Going back, multiply by $a$. The $a^p\equiv a$ form is the more general one: it holds *even when* $p\mid a$, since then both sides are $\equiv 0$.

### Proof (i): rearranging the residues

This is the proof to remember; it is the whole course in miniature. Take $p\nmid a$ and look at the list of the first $p-1$ multiples of $a$:

$$a,\ 2a,\ 3a,\ \dots,\ (p-1)a \pmod{p}.$$

**Claim: reduced mod $p$, this list is just $\{1, 2, \dots, p-1\}$ shuffled into a new order.** Two things to check:

- *None is $\equiv 0$.* If $p \mid ka$ with $1\le k\le p-1$, then since $p$ is prime, $p\mid k$ or $p\mid a$ (Euclid's lemma, Lesson 1.3). But $p\nmid a$ by assumption, and $0<k<p$ forces $p\nmid k$. Contradiction.
- *No two collide.* If $ia \equiv ja \pmod p$, cancel the unit $a$ (legal because $\gcd(a,p)=1$) to get $i\equiv j\pmod p$, hence $i=j$ in the range $1..p-1$.

So we have $p-1$ distinct nonzero residues — and there are exactly $p-1$ of those available, so the list *is* all of them. Now multiply the whole list together, two ways:

$$(a)(2a)\cdots((p-1)a) \equiv 1\cdot 2 \cdots (p-1) \pmod{p}.$$

The left side is $a^{p-1}\,(p-1)!$; the right side is $(p-1)!$. Since $(p-1)!$ is a product of units, it's itself a unit — cancel it from both sides:

$$a^{p-1} \equiv 1 \pmod{p}. \qquad \blacksquare$$

### Proof (ii): induction with the binomial theorem

A completely different flavor, and it proves the $a^p\equiv a$ form directly for $a\ge 0$. Induct on $a$. Base case $a=0$: $0^p\equiv 0$. For the step, expand:

$$(a+1)^p = \sum_{k=0}^{p}\binom{p}{k}a^k.$$

For every *middle* term $0<k<p$, the coefficient $\binom{p}{k}=\dfrac{p!}{k!\,(p-k)!}$ is divisible by $p$: the numerator carries a factor of $p$, while the denominator is a product of numbers all smaller than $p$, so (prime $p$) it carries none to cancel it. Every middle term vanishes mod $p$, leaving only the ends:

$$(a+1)^p \equiv a^p + 1 \pmod{p}.$$

By the inductive hypothesis $a^p\equiv a$, so $(a+1)^p\equiv a+1$. That closes the induction for $a\ge 0$, and every residue class is represented by such an $a$, so $a^p\equiv a$ for all integers. $\blacksquare$

The deep reason behind both proofs, which you'll meet in `abstract-algebra`: the nonzero residues mod $p$ form a group of size $p-1$ under multiplication, and **Lagrange's theorem** says any element raised to the group's size gives the identity. Fermat is that theorem's very first special case.

## Concrete instance

**Compute $3^{100}\bmod 7$.** Here $p=7$ and $3$ is not a multiple of $7$, so Fermat says $3^{6}\equiv 1\pmod 7$. The exponent $100$ therefore only matters *modulo $6$*:

1. **Reduce the exponent mod $p-1=6$:** divide $100 = 6\cdot 16 + 4$, so the remainder is $4$.
2. **Delete the free part:** $\displaystyle 3^{100} = \big(3^{6}\big)^{16}\cdot 3^{4} \equiv 1^{16}\cdot 3^{4} = 3^{4}\pmod 7.$
3. **Finish the small power:** $3^4 = 81 = 7\cdot 11 + 4$, so $3^4\equiv 4\pmod 7$.

$$3^{100}\equiv 4 \pmod 7.$$

We turned a 48-digit number into a one-line arithmetic. Notice the exponent got reduced mod $6$ (that's $p-1$), while the base and answer live mod $7$ (that's $p$) — mixing those two moduli up is the single most common Fermat mistake.

## Worked examples

**Example 1 (mechanical).** Compute $2^{100}\bmod 13$. Since $13$ is prime and $13\nmid 2$, Fermat gives $2^{12}\equiv 1\pmod{13}$. Reduce the exponent mod $12$: $100 = 12\cdot 8 + 4$. So

$$2^{100} = (2^{12})^8\cdot 2^4 \equiv 2^4 = 16 \equiv 3 \pmod{13}.$$

**Example 2 (why you'd care — a primality *test*).** Fermat's theorem is a promise every prime keeps. Turn it around into a screening test: to check whether $n$ might be prime, pick a base $a$ and compute $a^{n-1}\bmod n$. If the answer *isn't* $1$, then $n$ **cannot** be prime — you've caught a composite without factoring it.

Try $n=15$, $a=2$: compute $2^{14}\bmod 15$. Now $2^4=16\equiv 1\pmod{15}$, so $2^{14}=(2^4)^3\cdot 2^2\equiv 1\cdot 4 = 4\not\equiv 1$. The test returns "not $1$," certifying $15$ composite — and we never mentioned $15 = 3\cdot 5$. This is the germ of the Fermat primality test (Lesson 5.3), the workhorse that screens 300-digit RSA prime candidates. The catch — a "$1$" is only *evidence* of primality, not proof — is exactly what P3 exposes.

## Watch out

- **You might think the exponent reduces mod $p$** — it reduces mod $p-1$. The base, the multiplications, and the final answer happen mod $p$; only the exponent lives in the size-$(p-1)$ world. Keep the two moduli in separate hands.
- **You might think $a^{p-1}\equiv 1$ holds for every $a$** — it needs $p\nmid a$. If $p\mid a$ then $a\equiv 0$ and $a^{p-1}\equiv 0$, not $1$. The universally-true form is $a^p\equiv a$.
- **You might think it works for any modulus** — Fermat requires the modulus to be **prime**. $2^{3}=8\equiv 2\pmod 6$ is fine, but $a^{n-1}\equiv 1\pmod n$ routinely fails for composite $n$ (that failure is precisely what the primality test exploits). The fix for composite moduli is Euler's theorem, next lesson.

## One-liner

> Modulo a prime $p$, exponents secretly live mod $p-1$: raise any non-multiple of $p$ to the $(p-1)$ and you always land on $1$.

## Problems

**P1 (🟢)** Compute $5^{123}\bmod 11$ by reducing the exponent mod $p-1$.

**P2 (🟡)** Let $p$ be a prime. Using Fermat, prove that
$$1^{p-1} + 2^{p-1} + \cdots + (p-1)^{p-1} \equiv -1 \pmod{p}.$$

**P3 (🔴, optional — previews Lesson 5.3)** The number $341 = 11\cdot 31$ is composite. Show nevertheless that $2^{340}\equiv 1\pmod{341}$, so the Fermat test with base $2$ *fails to detect* that $341$ is composite. (Hint: what is $2^{10}\bmod 341$?) One sentence: what does this teach you about the reliability of a "pass"?

<details>
<summary>Solutions</summary>

**P1** $p=11$, so $p-1=10$ and (as $11\nmid 5$) $5^{10}\equiv 1\pmod{11}$. Reduce the exponent: $123 = 10\cdot 12 + 3$, so
$$5^{123} = (5^{10})^{12}\cdot 5^3 \equiv 5^3 = 125 \pmod{11}.$$
And $125 = 11\cdot 11 + 4$, so $5^{123}\equiv \boxed{4}\pmod{11}$.

**P2** For each base $k$ with $1\le k\le p-1$ we have $p\nmid k$, so Fermat gives $k^{p-1}\equiv 1\pmod p$. The sum therefore reduces to a count of $1$'s:
$$\sum_{k=1}^{p-1} k^{p-1} \equiv \sum_{k=1}^{p-1} 1 = p-1 \equiv -1 \pmod p,$$
since $p-1\equiv -1\pmod p$. $\blacksquare$

**P3** Follow the hint: $2^{10} = 1024 = 3\cdot 341 + 1 = 1023 + 1$, so $2^{10}\equiv 1\pmod{341}$. Raise both sides to the $34$th power (note $340 = 10\cdot 34$):
$$2^{340} = (2^{10})^{34} \equiv 1^{34} = 1 \pmod{341}.$$
So base-$2$ Fermat returns $1$, exactly as it would for a prime — yet $341 = 11\cdot 31$ is composite. **Lesson: passing the Fermat test proves nothing; it is evidence, not a certificate.** Composites that fool it (Fermat pseudoprimes, and the worse Carmichael numbers) are the reason Lesson 5.3 upgrades to the Miller–Rabin test.

*(Aside: $341$ passes for base $2$ but is caught by base $3$, since $3^{340}\not\equiv 1\pmod{341}$ — trying several bases is what makes the test practical.)*

</details>

## Flashback

**From Lesson 1.3 (Primes and the Fundamental Theorem of Arithmetic):** You're handed two integers by their prime factorizations,
$$a = 2^{3}\cdot 3^{2}\cdot 5, \qquad b = 2^{2}\cdot 3^{4}\cdot 7.$$
Write down $\gcd(a,b)$ and $\operatorname{lcm}(a,b)$ directly from the factorizations, then verify $\gcd(a,b)\cdot\operatorname{lcm}(a,b) = a\,b$.

<details>
<summary>Solution</summary>

By unique factorization, the gcd takes the **minimum** exponent on each prime and the lcm takes the **maximum**; primes appearing in only one number contribute their full power to the lcm and $p^0=1$ to the gcd.

$$\gcd(a,b) = 2^{\min(3,2)}\,3^{\min(2,4)}\,5^{\min(1,0)}\,7^{\min(0,1)} = 2^2\cdot 3^2 = 36.$$
$$\operatorname{lcm}(a,b) = 2^{\max(3,2)}\,3^{\max(2,4)}\,5^{\max(1,0)}\,7^{\max(0,1)} = 2^3\cdot 3^4\cdot 5\cdot 7 = 22680.$$

Check: $a = 8\cdot 9\cdot 5 = 360$ and $b = 4\cdot 81\cdot 7 = 2268$, so $ab = 360\cdot 2268 = 816480$; and $\gcd\cdot\operatorname{lcm} = 36\cdot 22680 = 816480$. They match. The identity holds prime-by-prime because $\min(i,j)+\max(i,j) = i+j$ for every exponent pair. $\blacksquare$

</details>

## Connections

- **Backward:** This is congruence arithmetic (Lesson 2.1) plus the cancellation-by-a-unit rule (Lesson 2.2) and Euclid's lemma (Lesson 1.3) — Fermat is what those tools *build*.
- **Forward:** Lesson 3.2 (Euler's theorem) generalizes $a^{p-1}\equiv 1$ to any modulus $n$ via $a^{\varphi(n)}\equiv 1$, with $\varphi(p)=p-1$ recovering this case; Lesson 4.2 sharpens the exponent to $(p-1)/2$ for Euler's criterion on quadratic residues; Lesson 5.3 builds the Fermat primality test on Example 2 and P3; and Lesson 5.4 uses Euler's extension to prove RSA decryption actually inverts encryption.
- **Sideways (`abstract-algebra`):** the "rearranging residues" proof is Lagrange's theorem in disguise — the units mod $p$ form a group of order $p-1$, and every element raised to the group's order returns the identity. Fermat is your first honest group-theoretic fact.

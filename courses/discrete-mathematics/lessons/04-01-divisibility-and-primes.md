# Discrete Mathematics · Lesson 4.1: Divisibility & primes

> ⏱ ~15 min · Module 4: Number Theory & Modular Arithmetic · Builds on: 1.3 (proof techniques) · Unlocks: 4.2 (Euclid's algorithm, gcd & Bézout)

## Why this matters

The integers look simple, but their multiplicative structure is where number theory — and modern cryptography — lives. Every RSA key is a promise that you can multiply two big primes together fast but can't pull them back apart. Before any of that, you need two reflexes: reading "$a$ divides $b$" as a clean logical statement you can manipulate, and seeing every integer as a product of primes in exactly one way. This lesson installs both, plus the two theorems (unique factorization, infinitude of primes) that the rest of Module 4 leans on.

## The idea

Divisibility is just multiplication asked backwards. Saying **$3$ divides $12$** means $12$ is a whole number of $3$s stacked up — $12 = 3 \cdot 4$, no remainder, no fractions. That's it: "$a \mid b$" means $b$ is exactly some integer copies of $a$.

Two facts make the integers tick. First, even when division *doesn't* come out clean, you get a tidy leftover: $47$ oranges into bags of $5$ gives $9$ full bags and $2$ left over — and that quotient-and-remainder pair is forced, never a choice. Second, the **primes** ($2, 3, 5, 7, 11, \dots$) are the atoms: every integer above $1$ is built by multiplying primes, and — crucially — there's only *one* recipe. $360$ is $2^3 \cdot 3^2 \cdot 5$ and nothing else. Primes are to integers what prime-colored Lego bricks are to a model: the model determines exactly which bricks you used.

## The formal version

**Divisibility.** For integers $a, b$ with $a \neq 0$, we say $a \mid b$ ("$a$ divides $b$") when there exists an integer $k$ with $b = a k$. We write $a \nmid b$ when no such integer exists.

In words: $b$ is an exact integer multiple of $a$. Note $a \mid b$ is a *statement* (true/false), not the fraction $b/a$ — don't confuse the two.

**A basic property (proved directly).** If $a \mid b$ and $a \mid c$, then $a \mid (b + c)$.

*Proof.* Suppose $a \mid b$ and $a \mid c$. By definition there are integers $j, k$ with $b = aj$ and $c = ak$. Then $b + c = aj + ak = a(j + k)$. Since $j + k$ is an integer, $b + c$ is an integer multiple of $a$, so $a \mid (b+c)$. $\blacksquare$

The same one-line move ($b = aj$, substitute, factor out $a$) proves the whole starter kit: $a\mid b \Rightarrow a \mid bc$ for any integer $c$; and if $a\mid b$ and $b\mid c$ then $a\mid c$.

**The division algorithm.** For any integer $a$ and any integer $d > 0$, there exist **unique** integers $q$ (the quotient) and $r$ (the remainder) with
$$a = dq + r, \qquad 0 \le r < d.$$

In words: dividing $a$ by $d$ always leaves a remainder that's forced and pinned into the window $[0, d)$. "$d \mid a$" is exactly the case $r = 0$.

**Primes.** An integer $p > 1$ is **prime** if its only positive divisors are $1$ and $p$; otherwise $p > 1$ is **composite**. (Note $1$ is neither — a deliberate convention we'll see the reason for.)

**Fundamental Theorem of Arithmetic (FTA).** Every integer $n > 1$ can be written as a product of primes, and this factorization is **unique** up to the order of the factors.

In words: the prime factorization is a fingerprint. *Existence* we prove below; *uniqueness* is the deeper half (it needs Euclid's lemma, which falls out of Bézout in Lesson 4.2, so we'll state it here and settle it there).

**Existence, by strong induction (ties to 1.4).** Claim: every $n \ge 2$ is a product of primes. *Base:* $n = 2$ is prime — a product of one prime. *Step:* fix $n > 2$ and assume every integer $m$ with $2 \le m < n$ is a product of primes. If $n$ is prime, done. Otherwise $n$ is composite, so $n = ab$ with $2 \le a, b < n$. By the strong hypothesis, each of $a$ and $b$ is a product of primes; concatenating those two products expresses $n$ as a product of primes. $\blacksquare$

## Concrete instance

**Division algorithm on $47 \div 5$.** We want $q, r$ with $47 = 5q + r$ and $0 \le r < 5$. The largest multiple of $5$ not exceeding $47$ is $5 \cdot 9 = 45$, so
$$47 = 5 \cdot 9 + 2, \qquad q = 9,\ r = 2.$$
The remainder $2$ sits in $[0,5)$, and it's the *only* pair that works: $q=8$ gives $r=7$ (too big), $q=10$ gives $r=-3$ (negative). Since $r = 2 \neq 0$, we have $5 \nmid 47$.

**Prime factorization of $360$.** Peel off the smallest prime repeatedly:
$$360 = 2 \cdot 180 = 2 \cdot 2 \cdot 90 = 2^2 \cdot 2 \cdot 45 = 2^3 \cdot 45 = 2^3 \cdot 3 \cdot 15 = 2^3 \cdot 3^2 \cdot 5.$$
So $\displaystyle 360 = 2^3 \cdot 3^2 \cdot 5 = \prod_{p} p^{e_p}$ with exponents $(e_2, e_3, e_5) = (3, 2, 1)$. By FTA this is the *only* prime factorization of $360$ — start with $3$ or $5$ instead and you'll land on the exact same multiset $\{2,2,2,3,3,5\}$, just discovered in a different order.

## Worked examples

**Example 1 (mechanical — using the definition).** Show that if $a \mid b$, then $a \mid 5b$.

By definition $a \mid b$ gives an integer $k$ with $b = ak$. Then $5b = 5(ak) = a(5k)$, and $5k$ is an integer, so $a \mid 5b$. (This is the general fact $a\mid b \Rightarrow a\mid bc$ with $c=5$: divisibility survives multiplying the dividend by anything.)

**Example 2 (why you'd care — gcd from factorizations, a bridge to 4.2).** Use prime factorizations to find $\gcd(360, 84)$.
$$360 = 2^3 \cdot 3^2 \cdot 5, \qquad 84 = 2^2 \cdot 3 \cdot 7.$$
A common divisor can only use primes both numbers share, and only to the smaller power each supplies. Take the min exponent prime-by-prime: for $2$, $\min(3,2)=2$; for $3$, $\min(2,1)=1$; $5$ and $7$ appear in only one number, so they contribute exponent $0$. Hence
$$\gcd(360,84) = 2^2 \cdot 3^1 = 12.$$
This *works* but is expensive — it needs both full factorizations, which is exactly the hard problem cryptography relies on. Lesson 4.2's Euclidean algorithm gets the same $12$ without factoring either number, which is why it's the workhorse.

## Watch out

- You might think $a \mid b$ *is* the fraction $b/a$. It's not — it's a true-or-false claim ("$b$ is a whole number of $a$s"). $6/4 = 1.5$ is a number; "$4 \mid 6$" is the (false) statement that it's an integer.
- You might read $a \mid b$ left-to-right as "$a$ over $b$." Careful: the divisor is on the *left*. $3 \mid 12$ is true; $12 \mid 3$ is false. The bar is not a fraction slash.
- You might want $1$ to count as prime. It's deliberately excluded so FTA's *uniqueness* holds: if $1$ were prime you could pad any factorization with extra $1$s ($6 = 2\cdot 3 = 1\cdot 2\cdot 3 = \dots$) and the fingerprint would no longer be unique.

## One-liner

> Divisibility is multiplication run backwards; the primes are the integers' atoms, and every integer above $1$ has exactly one atomic recipe.

## Problems

**P1 (🟢)** Prove directly: if $a \mid b$ and $a \mid c$, then $a \mid (b - c)$. Then use it to explain in one line why, if $a \mid b$ and $a \mid (b+c)$, it must be that $a \mid c$.

**P2 (🟡)** Find the prime factorization of $600$, then use it (with $\gcd(600, 84)$ via prime factorizations) to state $\gcd(600, 84)$. Which primes does the gcd get to use, and to what power?

**P3 (🔴, optional)** Prove that if $p$ is prime and $p \mid n^2$ for some integer $n$, then $p \mid n$. (You may use the fact — provable from FTA — that a prime appears in $n^2$'s factorization only if it appears in $n$'s. This is the "Euclid's lemma" flavor that powers the classic irrationality proofs and gets settled fully in 4.2.)

<details>
<summary>Solutions</summary>

**P1** Suppose $a \mid b$ and $a \mid c$: there are integers $j, k$ with $b = aj$, $c = ak$. Then $b - c = aj - ak = a(j - k)$, and $j - k$ is an integer, so $a \mid (b - c)$. $\blacksquare$

For the one-liner: if $a \mid b$ and $a \mid (b+c)$, apply the just-proved fact to the pair $(b+c)$ and $b$: $a \mid \big((b+c) - b\big) = c$. So $a \mid c$.

**P2** Peel off smallest primes: $600 = 2 \cdot 300 = 2^2 \cdot 150 = 2^3 \cdot 75 = 2^3 \cdot 3 \cdot 25 = 2^3 \cdot 3 \cdot 5^2$. So $600 = 2^3 \cdot 3 \cdot 5^2$.
With $84 = 2^2 \cdot 3 \cdot 7$, take the min exponent on each shared prime: $2 \to \min(3,2) = 2$; $3 \to \min(1,1) = 1$; $5$ and $7$ are each in only one number (exponent $0$). So $\gcd(600, 84) = 2^2 \cdot 3 = 12$. The gcd uses only the primes both numbers share ($2$ and $3$), each to the smaller of the two powers.

**P3** Write the prime factorization of $n$ as $n = p_1^{a_1} \cdots p_k^{a_k}$ (empty product if $n = \pm 1$). Squaring, $n^2 = p_1^{2a_1} \cdots p_k^{2a_k}$, so by FTA the primes dividing $n^2$ are *exactly* the primes dividing $n$ — squaring changes exponents, never introduces a new prime. Now $p \mid n^2$ means $p$ appears in $n^2$'s factorization, hence $p$ is one of the $p_i$, hence $p \mid n$. $\blacksquare$

(This is precisely the step that makes $\sqrt 2$ irrational: $2 \mid n^2 \Rightarrow 2 \mid n$ — see the Flashback.)

</details>

## Flashback

**From Lesson 1.3 (Proof techniques):** Prove that $\sqrt{3}$ is irrational, using proof by contradiction. (You may use the prime fact from P3: for a prime $p$, if $p \mid n^2$ then $p \mid n$.)

<details>
<summary>Solution</summary>

Suppose, for contradiction, that $\sqrt 3$ is rational. Then $\sqrt 3 = \frac{a}{b}$ for integers $a, b$ with $b \neq 0$, and we may take the fraction in **lowest terms**, so $a$ and $b$ share no common factor greater than $1$ (in particular not both divisible by $3$).

Squaring: $3 = \dfrac{a^2}{b^2}$, i.e. $a^2 = 3b^2$. So $3 \mid a^2$. By the prime fact (P3 with $p = 3$), $3 \mid a$, say $a = 3c$ for some integer $c$.

Substitute: $(3c)^2 = 3b^2 \Rightarrow 9c^2 = 3b^2 \Rightarrow b^2 = 3c^2$. So $3 \mid b^2$, and again by the prime fact $3 \mid b$.

But now $3 \mid a$ and $3 \mid b$, contradicting that the fraction was in lowest terms. The assumption that $\sqrt 3$ is rational is therefore false, so $\sqrt 3$ is irrational. $\blacksquare$

(The argument is identical to the $\sqrt 2$ proof — swap $2$ for $3$. It breaks for $\sqrt 4$ precisely because $4$ isn't prime: $4 \mid a^2$ does *not* force $4 \mid a$.)

</details>

## Connections

- **Backward (1.3, 1.4):** existence of prime factorizations is a clean strong-induction argument (1.4), and Euclid's infinitude proof below is a textbook proof-by-contradiction (1.3) — this lesson is Module 1's proof techniques applied to the integers.
- **Forward (4.2, 4.3):** Lesson 4.2 computes $\gcd$ without factoring (Euclidean algorithm) and proves the uniqueness half of FTA via Bézout; Lesson 4.3 builds modular arithmetic on top of the division algorithm's remainder $r$.
- **Sideways (`cryptography`, hashing):** RSA's security is the gap between multiplying primes (easy) and factoring their product (hard) — the FTA fingerprint is real but expensive to read. Prime moduli also give hash functions their even spread. See the `number-theory` course for the deep version of everything here.

---

## Appendix — Euclid's theorem: there are infinitely many primes

Worth one more page, because the proof is a jewel and it's pure Lesson 1.3.

**Theorem (Euclid).** There are infinitely many primes.

*Proof by contradiction.* Suppose not — suppose there are only finitely many primes, and list them all: $p_1, p_2, \dots, p_n$. Consider
$$N = p_1 p_2 \cdots p_n + 1 = \left(\prod_{i=1}^{n} p_i\right) + 1.$$
Now $N > 1$, so by FTA (existence) $N$ has some prime divisor $p$. Since our list is *all* the primes, $p = p_j$ for some $j$, and so $p_j \mid \prod_i p_i$. But $p_j \mid N$ too, so $p_j$ divides the difference:
$$p_j \mid \left(N - \prod_i p_i\right) = 1.$$
No prime divides $1$ (primes exceed $1$) — contradiction. Hence the assumption of finitely many primes is false, and there are infinitely many. $\blacksquare$

The engine is the divisibility fact from the top of the lesson: if $p \mid x$ and $p \mid y$ then $p \mid (x - y)$. Euclid just picks $x = N$ and $y = \prod_i p_i$ so that the difference is the one number no prime can divide.

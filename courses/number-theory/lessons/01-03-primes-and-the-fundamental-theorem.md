# Number Theory · Lesson 1.3: Primes and the Fundamental Theorem of Arithmetic

> ⏱ ~15 min · Module 1: Divisibility and primes · Builds on: 1.2 (the Euclidean algorithm and Bézout) · Unlocks: 1.4 (counting the primes)

## Why this matters

Every integer you'll ever factor breaks into primes in *exactly one way* — and that "exactly one way" is the quiet bedrock the whole course stands on. It's why $\gcd$ and $\mathrm{lcm}$ are trivial once you know the factorizations, why the counting functions $\tau,\sigma$ later factor across coprime pieces (Lesson 4.1), and why RSA's security (Lesson 5.4) rests on factoring being *hard* despite the answer being *unique*. Uniqueness feels obvious, but it is a theorem — and the tool that proves it, Euclid's lemma, is the payoff of last lesson's Bézout identity.

## The idea

A **prime** is an integer $p>1$ whose only positive divisors are $1$ and $p$ itself — it can't be broken down. Everything else greater than $1$ is **composite**: it splits. Primes are the atoms; composites are molecules built from them.

Two claims sit at the heart of this lesson, and only the second is deep.

- **Existence:** every integer $>1$ is a product of primes. Keep splitting composites until nothing splits further — you must stop, because the factors shrink.
- **Uniqueness:** there's only *one* such product (up to reordering). This is not obvious. Why couldn't some number factor as a product of primes in two genuinely different ways? The reason it can't is a single, sharp fact — **Euclid's lemma**: if a prime divides a product, it divides one of the factors. A prime can't be "smeared" across two numbers; it has to land wholly inside one of them.

Hold onto that image: primes are indivisible not just in the sense that you can't factor them, but in the stronger sense that they can't hide inside a product without committing to a factor.

## The formal version

**Definition (prime / composite).** An integer $p>1$ is *prime* if its only positive divisors are $1$ and $p$. An integer $n>1$ that is not prime is *composite*: $n=ab$ with $1<a,b<n$.

**Euclid's lemma.** If $p$ is prime and $p \mid ab$, then $p \mid a$ or $p \mid b$.

*In words:* a prime dividing a product must divide one of the factors — it can't split its allegiance.

*Proof (from Bézout).* Suppose $p \mid ab$ but $p \nmid a$. Since $p$ is prime, the only positive divisors of $p$ are $1$ and $p$; as $p\nmid a$, the divisor shared by $p$ and $a$ can only be $1$, so $\gcd(p,a)=1$. By Bézout (Lesson 1.2) there are integers $x,y$ with

$$px + ay = 1.$$

Multiply through by $b$: $\; pbx + aby = b$. Now $p \mid pbx$ (obviously) and $p \mid aby$ (because $p \mid ab$), so $p$ divides their sum, which is $b$. Hence $p \mid b$. $\blacksquare$

The lemma extends by induction: if $p \mid a_1 a_2 \cdots a_k$ then $p$ divides some $a_i$.

**Fundamental Theorem of Arithmetic (FTA).** Every integer $n>1$ can be written as a product of primes,

$$n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k} = \prod_{i=1}^{k} p_i^{e_i}, \qquad p_1 < p_2 < \cdots < p_k,$$

and this factorization is **unique**: the set of primes $p_i$ and their exponents $e_i$ are determined by $n$.

*In words:* every number has one and only one prime "fingerprint."

*Proof of existence (strong induction).* Base: $2$ is prime. Suppose every integer in $\{2,\dots,n-1\}$ is a product of primes. If $n$ is prime, done. If $n$ is composite, $n=ab$ with $1<a,b<n$; by the inductive hypothesis each of $a,b$ is a product of primes, so $n$ is too. $\blacksquare$

*Proof of uniqueness (via Euclid's lemma).* Suppose some $n$ had two prime factorizations; take the smallest such $n$ and write

$$p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s.$$

Then $p_1$ divides the right side, so by Euclid's lemma $p_1 \mid q_j$ for some $j$. But $q_j$ is prime, so its only divisors are $1$ and $q_j$ — forcing $p_1 = q_j$. Cancel that common prime from both sides. What remains is a smaller integer with two factorizations, contradicting minimality (or, if everything cancels, the two lists were identical all along). $\blacksquare$

Notice uniqueness is *entirely* powered by Euclid's lemma — that one step, "$p_1 \mid q_j \Rightarrow p_1 = q_j$," is where the whole theorem turns.

## Concrete instance

Take $600$ and factor it by repeated splitting:

$$600 = 8 \cdot 75 = 2^3 \cdot (3 \cdot 25) = 2^3 \cdot 3 \cdot 5^2.$$

Now pair it with $540 = 2^2 \cdot 3^3 \cdot 5$. Line up the exponents prime by prime:

| prime $p$ | in $600$ | in $540$ | min (for $\gcd$) | max (for $\mathrm{lcm}$) |
|---|---|---|---|---|
| $2$ | $3$ | $2$ | $2$ | $3$ |
| $3$ | $1$ | $3$ | $1$ | $3$ |
| $5$ | $2$ | $1$ | $1$ | $2$ |

Read the $\gcd$ off the **min** column and the $\mathrm{lcm}$ off the **max** column:

$$\gcd(600,540) = 2^2 \cdot 3^1 \cdot 5^1 = 60, \qquad \mathrm{lcm}(600,540) = 2^3 \cdot 3^3 \cdot 5^2 = 27000.$$

Sanity check: $\gcd \cdot \mathrm{lcm} = 60 \cdot 27000 = 1{,}620{,}000 = 600 \cdot 540$. ✓ (That identity, $\gcd(a,b)\cdot\mathrm{lcm}(a,b)=ab$, drops out because for each prime, $\min+\max$ of two exponents equals their sum.)

And Euclid's lemma on a concrete case: $6 \mid 4 \cdot 9 = 36$, yet $6\nmid 4$ **and** $6\nmid 9$ — because $6$ isn't prime, it *smears* across the factors ($6=2\cdot3$, one atom in each). Contrast the prime $3$: $3\mid 36$, and indeed $3\mid 9$. The lemma is exactly the property that separates atoms from molecules.

## Worked examples

**Example 1 (mechanical).** Factor $84$ and $360$, then read off $\gcd$ and $\mathrm{lcm}$.

$84 = 4\cdot21 = 2^2 \cdot 3 \cdot 7$ and $360 = 8\cdot45 = 2^3 \cdot 3^2 \cdot 5$. Align exponents (treat a missing prime as exponent $0$):

- $2$: $\min(2,3)=2$, $\max=3$
- $3$: $\min(1,2)=1$, $\max=2$
- $5$: $\min(0,1)=0$, $\max=1$
- $7$: $\min(1,0)=0$, $\max=1$

$$\gcd(84,360)=2^2\cdot3 = 12, \qquad \mathrm{lcm}(84,360)=2^3\cdot3^2\cdot5\cdot7 = 2520.$$

**Example 2 (why you'd care).** Why can't $\sqrt{2}$ be a fraction? Uniqueness of factorization decides it instantly. Suppose $\sqrt2 = a/b$, so $a^2 = 2b^2$. Count the number of times the prime $2$ appears on each side. In *any* square $m^2$, the exponent of $2$ is $2\cdot(\text{its exponent in }m)$ — always **even**, since squaring doubles every exponent. So $a^2$ has an even power of $2$, while $2b^2$ has an odd one (one factor of $2$ plus the even power in $b^2$). Even $=$ odd is impossible. The contradiction is purely a statement about the *uniqueness* of the exponent of $2$ — with no unique factorization, this argument evaporates. This same parity-of-exponents move powers irrationality proofs throughout `real-analysis`.

## Watch out

- **You might think existence and uniqueness are the same claim — they're not.** Existence is easy (keep splitting); uniqueness is the theorem, and it *fails* in other number systems. In the ring $\mathbb{Z}[\sqrt{-5}]$, $6 = 2\cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$ are two honestly different factorizations. Our integers get away with it only because Euclid's lemma holds — a fact you'll formalize as "$\mathbb{Z}$ is a UFD" in `abstract-algebra`.
- **You might think "$p \mid ab \Rightarrow p\mid a$ or $p\mid b$" holds for any divisor — it needs $p$ prime.** The $6 \mid 4\cdot9$ case above is the counterexample. Composite numbers can smear.
- **$1$ is not prime, by convention and for good reason.** If $1$ counted, factorizations would stop being unique ($6 = 2\cdot3 = 1\cdot2\cdot3 = 1\cdot1\cdot2\cdot3\dots$). Excluding it keeps the fingerprint clean.

## One-liner

> Every integer has exactly one prime fingerprint — and "exactly one" is a theorem, bought entirely with Euclid's lemma: a prime dividing a product must divide a factor.

## Problems

**P1 (🟢)** Factor $792$ and $600$ into primes, then compute $\gcd(792,600)$ and $\mathrm{lcm}(792,600)$ from the factorizations. Verify $\gcd\cdot\mathrm{lcm}=792\cdot600$.

**P2 (🟡)** Give an explicit counterexample showing Euclid's lemma fails for a composite divisor: find $n,a,b$ with $n\mid ab$ but $n\nmid a$ and $n\nmid b$. Then explain in one sentence, using the factorization of your $n$, *why* it can smear.

**P3 (🔴, optional)** Prove that $\log_2 3$ is irrational. (Hint: suppose $\log_2 3 = p/q$ with $p,q$ positive integers, rewrite without logs, and let the Fundamental Theorem of Arithmetic do the work.)

<details>
<summary>Solutions</summary>

**P1** $792 = 8\cdot99 = 2^3\cdot 3^2\cdot 11$ and $600 = 2^3\cdot3\cdot5^2$. Exponent table:

| $p$ | $792$ | $600$ | min | max |
|---|---|---|---|---|
| $2$ | $3$ | $3$ | $3$ | $3$ |
| $3$ | $2$ | $1$ | $1$ | $2$ |
| $5$ | $0$ | $2$ | $0$ | $2$ |
| $11$ | $1$ | $0$ | $0$ | $1$ |

$\gcd = 2^3\cdot3 = 24$; $\mathrm{lcm} = 2^3\cdot3^2\cdot5^2\cdot11 = 8\cdot9\cdot25\cdot11 = 19800$. Check: $24\cdot19800 = 475200$ and $792\cdot600 = 475200$. ✓

**P2** Take $n=4,\ a=2,\ b=6$: then $ab=12$ and $4\mid 12$, but $4\nmid 2$ and $4\nmid 6$. Why it smears: $4=2^2$, and the two factors of $2$ it needs are split one into $a=2$ and one into $b=6=2\cdot3$ — neither factor alone contains both. A prime, having a single atom, has nowhere to split. (Many answers work, e.g. $6\mid 4\cdot 9$.)

**P3** Suppose $\log_2 3 = p/q$ with positive integers $p,q$. By definition $2^{p/q}=3$, so raising to the $q$: $2^p = 3^q$. But the left side is an integer whose unique prime factorization contains only the prime $2$, while the right side's unique factorization contains only the prime $3$. By the Fundamental Theorem of Arithmetic a number has *one* prime fingerprint, so $2^p = 3^q$ is impossible for positive $p,q$ (the smallest case aside, $2^p=3^q\ge 2$ forces a genuine clash of primes). Hence no such $p,q$ exist and $\log_2 3$ is irrational. $\blacksquare$

</details>

## Flashback

**From Lesson 1.2 (The Euclidean algorithm and Bézout):** Compute $\gcd(154, 84)$ using the Euclidean algorithm, then back-substitute to find integers $x,y$ with $154x + 84y = \gcd(154,84)$.

<details>
<summary>Solution</summary>

Euclidean algorithm:

$$154 = 1\cdot 84 + 70$$
$$84 = 1\cdot 70 + 14$$
$$70 = 5\cdot 14 + 0.$$

The last nonzero remainder is $14$, so $\gcd(154,84)=14$.

Back-substitute from the second line: $14 = 84 - 1\cdot70$. Replace $70 = 154 - 1\cdot84$ from the first line:

$$14 = 84 - (154 - 84) = 2\cdot 84 - 1\cdot 154.$$

So $x=-1,\ y=2$: $\;154(-1) + 84(2) = -154 + 168 = 14$. ✓

(Cross-check with this lesson's method: $154 = 2\cdot7\cdot11$, $84 = 2^2\cdot3\cdot7$, so $\gcd = 2\cdot7 = 14$ — same answer, read off the min exponents.)

</details>

## Connections

- **Backward:** uniqueness runs *entirely* on Bézout from Lesson 1.2 — the identity $px+ay=1$ for coprime $p,a$ is what makes Euclid's lemma true. And $\gcd/\mathrm{lcm}$, defined abstractly in Lesson 1.1, now have a mechanical formula once you have factorizations.
- **Forward:** Lesson 1.4 asks how *many* primes there are (infinitely many — Euclid again) and how they thin out. In Module 4, the multiplicativity of $\tau,\sigma$ (Lesson 4.1) and of the Legendre symbol (4.2) is *possible only because* factorizations split uniquely across coprime factors — FTA is the load-bearing wall under all of it.
- **Sideways (abstract algebra):** "$\mathbb{Z}$ has unique factorization" is the statement that $\mathbb{Z}$ is a **UFD** (unique factorization domain) in `abstract-algebra`; the $\mathbb{Z}[\sqrt{-5}]$ counterexample above is where that course shows FTA is a privilege, not a law of nature.
- **Sideways (cryptography):** FTA guarantees $n=pq$ has one factorization, but *finding* it is believed hard — that gap between "unique" and "easy to compute" is exactly the trapdoor RSA is built on (Lesson 5.4).

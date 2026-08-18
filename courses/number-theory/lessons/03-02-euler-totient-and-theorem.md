# Number Theory · Lesson 3.2: Euler's totient and Euler's theorem

> ⏱ ~15 min · Module 3: The multiplicative group modulo n · Builds on: 3.1 (Fermat's little theorem) · Unlocks: 3.3 (order and the group of units)

## Why this matters

Fermat's little theorem let you collapse a monstrous power in one line — but *only* modulo a prime. Real moduli aren't prime: RSA runs modulo $n = pq$, clocks run modulo $12$, hash tables modulo whatever. Euler's totient $\varphi(n)$ is the one number that makes Fermat work for *any* modulus, and the theorem it powers — $a^{\varphi(n)}\equiv 1 \pmod{n}$ — is the exact identity that makes RSA decryption return your message. Learn to compute $\varphi(n)$ from a factorization and you can reduce any exponent, anywhere.

## The idea

Fermat's engine was really about **the units**: the residues you're allowed to divide by, i.e. those coprime to the modulus. Modulo a prime $p$, *everything* nonzero is a unit — that's why $p-1$ showed up. Modulo a general $n$, only *some* residues are units, and $\varphi(n)$ simply **counts them**.

Once you have that count, Fermat's whole argument reruns verbatim: multiplying every unit by a fixed unit $a$ just shuffles the units among themselves, and comparing the "before" and "after" products forces $a$ raised to *the number of units* back to $1$. So the magic exponent is no longer $p-1$; it's $\varphi(n)$, the size of the unit crowd. Everything hinges on being able to *count* that crowd fast — which factorization makes almost free.

## The formal version

**Definition (Euler's totient).**
$$\varphi(n) = \bigl|\{\,a : 1 \le a \le n,\ \gcd(a,n)=1\,\}\bigr|.$$
In words: $\varphi(n)$ is how many integers from $1$ to $n$ share no factor with $n$ — the number of **units** modulo $n$.

**Prime and prime-power values.** For a prime $p$, every one of $1,\dots,p-1$ is coprime to $p$, so
$$\varphi(p) = p-1.$$
For a prime power $p^k$, the *non*-units in $1,\dots,p^k$ are exactly the multiples of $p$ — there are $p^{k-1}$ of them — so
$$\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1).$$
In words: throw out the multiples of $p$; what's left is coprime to $p^k$.

**Multiplicativity.** If $\gcd(m,n)=1$ then
$$\varphi(mn) = \varphi(m)\,\varphi(n).$$
In words: totients of coprime pieces multiply. This is the Chinese Remainder Theorem (Lesson [2.4](../../number-theory/lessons/02-04-chinese-remainder-theorem.md)) in disguise: CRT gives a bijection $\mathbb{Z}/mn \cong \mathbb{Z}/m \times \mathbb{Z}/n$, and $a$ is coprime to $mn$ **iff** it's coprime to $m$ *and* to $n$ — so units pair up with units, and $\varphi(mn) = \varphi(m)\varphi(n)$ by counting the pairs. (Coprimality of $m,n$ is exactly what CRT needs; drop it and the formula fails, e.g. $\varphi(4)=2 \ne \varphi(2)^2=1$.)

**The product formula.** Factor $n = \prod_{p\mid n} p^{k_p}$. Multiplicativity over the prime-power pieces gives
$$\varphi(n) = \prod_{p\mid n}\bigl(p^{k_p}-p^{k_p-1}\bigr) = n\prod_{p\mid n}\left(1-\frac{1}{p}\right).$$
In words: start from $n$ and shave off the fraction $1/p$ for each *distinct* prime dividing $n$ — the exponents don't matter, only which primes appear.

**Euler's theorem.** If $\gcd(a,n)=1$ then
$$a^{\varphi(n)} \equiv 1 \pmod{n}.$$
In words: any unit, raised to the number of units, is $1$. Modulo a prime this reads $a^{p-1}\equiv 1$ — Fermat, recovered.

*Proof (rearranging the units).* Let $r_1,\dots,r_{\varphi(n)}$ be the units modulo $n$. Multiply each by a fixed unit $a$. Every product $a r_i$ is again a unit (a product of units), and the map $x\mapsto ax$ is injective mod $n$ (cancel $a$, legal because $a$ is a unit), so $\{a r_1,\dots,a r_{\varphi(n)}\}$ is just the same set of units reshuffled. Taking the product of each list:
$$\prod_{i} (a r_i) \equiv \prod_i r_i \pmod n \quad\Longrightarrow\quad a^{\varphi(n)}\prod_i r_i \equiv \prod_i r_i \pmod n.$$
The product $\prod_i r_i$ is itself a unit (units are closed under multiplication), so cancel it from both sides: $a^{\varphi(n)}\equiv 1 \pmod n$. $\blacksquare$

## Concrete instance

**Count the units of $360$.** Factor $360 = 2^3 \cdot 3^2 \cdot 5$. The distinct primes are $2, 3, 5$, so the product formula gives
$$\varphi(360) = 360\left(1-\tfrac12\right)\left(1-\tfrac13\right)\left(1-\tfrac15\right) = 360\cdot\tfrac12\cdot\tfrac23\cdot\tfrac45 = 96.$$
Cross-check via multiplicativity over prime powers: $\varphi(2^3)\,\varphi(3^2)\,\varphi(5) = (8-4)(9-3)(4) = 4\cdot 6\cdot 4 = 96$. ✓ So $360$ has exactly $96$ units.

**Reduce a power with Euler.** Compute $2^{100} \bmod 15$. First check the hypothesis: $\gcd(2,15)=1$, so $2$ is a unit and Euler applies. Since $15 = 3\cdot 5$,
$$\varphi(15) = \varphi(3)\,\varphi(5) = 2\cdot 4 = 8, \qquad\text{so}\qquad 2^{8}\equiv 1 \pmod{15}.$$
Now reduce the *exponent* modulo $8$: since $100 = 8\cdot 12 + 4$,
$$2^{100} = \bigl(2^{8}\bigr)^{12}\cdot 2^{4} \equiv 1^{12}\cdot 16 \equiv 16 \equiv 1 \pmod{15}.$$
A 31-digit number, pinned to $1$, using nothing but a factorization and one division of exponents.

## Worked examples

**Example 1 (mechanical).** Compute $\varphi(72)$. Factor $72 = 2^3\cdot 3^2$. Two distinct primes, $2$ and $3$:
$$\varphi(72) = 72\left(1-\tfrac12\right)\left(1-\tfrac13\right) = 72\cdot\tfrac12\cdot\tfrac23 = 24.$$
Sanity check: $\varphi(2^3)\varphi(3^2) = (8-4)(9-3) = 4\cdot 6 = 24$. ✓ Notice the exponents $3$ and $2$ never entered the *fraction* $\left(1-\tfrac1p\right)$ — only the base primes did. That's the shape of the formula: one factor per **distinct** prime.

**Example 2 (why you'd care).** Find the last two digits of $7^{803}$ — that is, $7^{803}\bmod 100$. Last-two-digits problems are power-reductions mod $100$, and mod $100$ is not prime, so Fermat is useless but Euler is not. Since $100 = 2^2\cdot 5^2$,
$$\varphi(100) = 100\left(1-\tfrac12\right)\left(1-\tfrac15\right) = 100\cdot\tfrac12\cdot\tfrac45 = 40.$$
$\gcd(7,100)=1$, so $7^{40}\equiv 1 \pmod{100}$. Reduce the exponent mod $40$: $803 = 40\cdot 20 + 3$, hence
$$7^{803} \equiv 7^{3} = 343 \equiv 43 \pmod{100}.$$
The last two digits are $\mathbf{43}$. This "reduce the exponent modulo $\varphi(n)$" move is *exactly* the identity RSA decryption leans on (Lesson [5.4](../../number-theory/lessons/05-04-rsa-cryptosystem.md)): a decryption exponent is chosen so that raising to it undoes encryption, precisely because exponents live mod $\varphi(n)$.

## Watch out

- You might think Euler's theorem holds for every $a$ — it needs $\gcd(a,n)=1$. Take $a=6$, $n=15$: $6^{\varphi(15)}=6^8$ is a multiple of $3$, so it can't be $\equiv 1 \pmod{15}$. Non-units are locked out; check coprimality *first*.
- You might think you reduce the *base* modulo $\varphi(n)$. No — you reduce the **exponent** modulo $\varphi(n)$, and the base modulo $n$. Mixing those two moduli up is the single most common power-reduction error.
- You might think $\varphi(p^k)=(p-1)^k$ by analogy with $\varphi(p)=p-1$. It's $p^{k-1}(p-1)$, not $(p-1)^k$: e.g. $\varphi(9)=6$, not $4$. The formula multiplies across *distinct* primes, never across repeated ones.

## One-liner

> $\varphi(n)$ counts the units modulo $n$, and every unit raised to that count lands back on $1$ — Fermat, freed from needing a prime.

## Problems

**P1 (🟢)** Compute $\varphi(1000)$ and $\varphi(97)$.

**P2 (🟡)** Use Euler's theorem to find $3^{1000} \bmod 14$. (Show the coprimality check, the value of $\varphi(14)$, and the exponent reduction.)

**P3 (🔴, optional)** RSA preview. Let $n = 55 = 5\cdot 11$. Compute $\varphi(n)$, then find the integer $d$ with $1\le d < \varphi(n)$ satisfying $7d \equiv 1 \pmod{\varphi(n)}$. (This $d$ is the "decryption exponent" for public exponent $e=7$; you're inverting $7$ modulo $\varphi(n)$ exactly as in Lesson [5.4](../../number-theory/lessons/05-04-rsa-cryptosystem.md).)

<details>
<summary>Solutions</summary>

**P1** Factor $1000 = 2^3\cdot 5^3$; distinct primes $2,5$:
$$\varphi(1000) = 1000\left(1-\tfrac12\right)\left(1-\tfrac15\right) = 1000\cdot\tfrac12\cdot\tfrac45 = 400.$$
And $97$ is prime, so $\varphi(97) = 97-1 = 96$.

**P2** $\gcd(3,14)=1$, so Euler applies. Factor $14 = 2\cdot 7$, giving $\varphi(14)=\varphi(2)\varphi(7)=1\cdot 6 = 6$, so $3^{6}\equiv 1 \pmod{14}$. Reduce the exponent mod $6$: $1000 = 6\cdot 166 + 4$, hence
$$3^{1000}\equiv 3^{4} = 81 \equiv 81 - 70 = 11 \pmod{14}.$$
So $3^{1000}\equiv \boxed{11}\pmod{14}$.

**P3** $\varphi(55) = \varphi(5)\varphi(11) = 4\cdot 10 = 40$. Now invert $7$ modulo $40$: solve $7d\equiv 1\pmod{40}$. By trial or the extended Euclidean algorithm, $7\cdot 23 = 161 = 4\cdot 40 + 1 \equiv 1 \pmod{40}$, so $d = 23$. (Check: $161 - 160 = 1$. ✓) Thus $d=\boxed{23}$ — the private exponent partnering $e=7$ for modulus $55$.

</details>

## Flashback

**From Lesson 3.1 (Fermat's little theorem):** Compute $3^{100} \bmod 7$.

<details>
<summary>Solution</summary>

$7$ is prime and $7\nmid 3$, so Fermat gives $3^{6}\equiv 1 \pmod 7$. Reduce the exponent modulo $6$: $100 = 6\cdot 16 + 4$, so
$$3^{100} \equiv 3^{4} = 81 \equiv 81 - 77 = 4 \pmod 7.$$
Hence $3^{100}\equiv \boxed{4} \pmod 7$. (Euler's theorem agrees here, since $\varphi(7)=6$ — Fermat is just the prime case of what you learned today.)

</details>

## Connections

- **Backward:** this is Fermat's little theorem (Lesson [3.1](../../number-theory/lessons/03-01-fermats-little-theorem.md)) generalized — the residue-rearrangement proof is the same argument, run over the units instead of over all nonzero residues. Multiplicativity of $\varphi$ is the Chinese Remainder Theorem (Lesson [2.4](../../number-theory/lessons/02-04-chinese-remainder-theorem.md)) counting units on both sides of the isomorphism.
- **Forward:** Lesson [3.3](../../number-theory/lessons/03-03-order-and-group-of-units.md) sharpens "$a^{\varphi(n)}\equiv 1$" into "the **order** of $a$ *divides* $\varphi(n)$," which pins down the smallest exponent that works. Lesson [4.1](../../number-theory/lessons/04-01-arithmetic-functions-mobius.md) makes multiplicativity a first-class object — $\varphi$ joins $\tau,\sigma,\mu$ as a *multiplicative function*. Lesson [5.4](../../number-theory/lessons/05-04-rsa-cryptosystem.md) uses $ed\equiv 1 \pmod{\varphi(n)}$ (exactly P3) to make RSA decryption correct.
- **Sideways (algebra):** $\varphi(n)$ is the *order* (size) of the group of units $(\mathbb{Z}/n\mathbb{Z})^\times$, and Euler's theorem is Lagrange's theorem for that group — "element raised to the group's order is the identity." You'll meet this as a general fact about finite groups in [abstract-algebra](../../abstract-algebra/syllabus.md); here you're getting a fully concrete first instance.

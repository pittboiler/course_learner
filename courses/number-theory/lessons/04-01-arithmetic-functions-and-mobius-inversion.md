# Number Theory · Lesson 4.1: Arithmetic functions and Möbius inversion

> ⏱ ~15 min · Module 4: Multiplicative functions and quadratic reciprocity · Builds on: 3.2 (Euler's totient and Euler's theorem) · Unlocks: 4.2 (quadratic residues and the Legendre symbol)

## Why this matters

You already met one function that reads structure straight off a prime factorization: Euler's $\varphi$. It's not a fluke. A whole family of number-theoretic functions — how many divisors $n$ has, how big they sum to, whether $n$ is "square-free with an odd number of primes" — all decode $n$ prime by prime. The organizing principle is **multiplicativity**, and its sharpest tool, **Möbius inversion**, is the number theorist's version of inclusion–exclusion: given a quantity summed over divisors, it hands back the raw ingredient. This is the machinery behind the Legendre symbol you meet next lesson, behind sieve methods that count primes, and behind the same inclusion–exclusion you'll see on posets in `combinatorics`.

## The idea

An **arithmetic function** is just any function $f\colon \mathbb{Z}^+ \to \mathbb{C}$ — a rule assigning a number to each positive integer. Most of the useful ones share a magic property: to know $f(n)$, you only need to know $f$ on the prime-power pieces of $n$, and then multiply.

Call $f$ **multiplicative** if $f(mn) = f(m)f(n)$ whenever $\gcd(m,n)=1$ — *coprime* inputs, not all inputs. So if $n = p_1^{a_1}\cdots p_k^{a_k}$, the pieces $p_i^{a_i}$ are pairwise coprime and
$$f(n) = f(p_1^{a_1})\cdots f(p_k^{a_k}).$$
The factorization does the heavy lifting; you only have to understand $f$ on prime powers. That single idea turns "count the divisors of $360$" from a chore into a one-line product.

## The formal version

Three headline functions, all multiplicative.

**Divisor count** $\tau(n)$ — the number of positive divisors of $n$ (also written $d(n)$). A divisor of $p_1^{a_1}\cdots p_k^{a_k}$ chooses each exponent independently in $\{0,1,\dots,a_i\}$, giving $a_i+1$ choices, so
$$\tau(n) = \prod_{i=1}^{k}(a_i+1).$$
In words: multiply together "(each exponent) plus one."

**Divisor sum** $\sigma(n) = \sum_{d\mid n} d$ — the sum of the positive divisors. Each prime power contributes a geometric series, and the series multiply out:
$$\sigma(n) = \prod_{i=1}^{k}\bigl(1 + p_i + p_i^2 + \cdots + p_i^{a_i}\bigr) = \prod_{i=1}^{k}\frac{p_i^{a_i+1}-1}{p_i-1}.$$
In words: for each prime, sum $1$ up through its full power, then multiply.

**Möbius function** $\mu(n)$ — the sign-tracker of square-free-ness:
$$\mu(n) = \begin{cases} 1 & n=1,\\ (-1)^k & n \text{ is a product of } k \text{ distinct primes},\\ 0 & n \text{ is divisible by a square } p^2. \end{cases}$$
In words: $\mu$ is $0$ the moment any prime repeats; otherwise it's $\pm1$ by the parity of how many distinct primes appear.

The keystone identity — the reason $\mu$ exists at all:
$$\sum_{d\mid n}\mu(d) = [n=1] = \begin{cases}1 & n=1,\\ 0 & n>1.\end{cases}$$
In words: sum $\mu$ over all divisors of $n$ and everything cancels unless $n=1$. (The bracket $[P]$ is $1$ when statement $P$ is true, $0$ otherwise.)

This identity powers **Möbius inversion**. If a function $g$ is built by summing another function $f$ over divisors, you can undo the sum:
$$g(n) = \sum_{d\mid n} f(d) \quad\Longleftrightarrow\quad f(n) = \sum_{d\mid n}\mu(d)\,g\!\left(\tfrac{n}{d}\right).$$
In words: the divisor-sum relation is invertible, and $\mu$ is exactly the coefficient bookkeeping that inverts it.

## Concrete instance

**Factor once, read everything off.** Take $n = 360 = 2^3 \cdot 3^2 \cdot 5^1$.

Divisor count — one factor per prime, each "(exponent)+1":
$$\tau(360) = (3+1)(2+1)(1+1) = 4\cdot 3\cdot 2 = 24.$$

Divisor sum — one geometric series per prime:
$$\sigma(360) = \underbrace{(1+2+4+8)}_{2^3}\cdot\underbrace{(1+3+9)}_{3^2}\cdot\underbrace{(1+5)}_{5^1} = 15\cdot 13\cdot 6 = 1170.$$
So $360$ has $24$ divisors summing to $1170$ — without listing a single one.

**The keystone identity, checked.** For $n=1$: the only divisor is $1$, and $\sum_{d\mid 1}\mu(d) = \mu(1) = 1$. For $n=12 = 2^2\cdot 3$, the divisors are $1,2,3,4,6,12$:
$$\sum_{d\mid 12}\mu(d) = \underbrace{\mu(1)}_{1} + \underbrace{\mu(2)}_{-1} + \underbrace{\mu(3)}_{-1} + \underbrace{\mu(4)}_{0} + \underbrace{\mu(6)}_{+1} + \underbrace{\mu(12)}_{0} = 1-1-1+0+1+0 = 0.$$
($\mu(4)=\mu(2^2)=0$ and $\mu(12)=\mu(2^2\cdot3)=0$ die on the repeated prime; the survivors $1,-1,-1,+1$ cancel in pairs.) Exactly $[n=1]$: one for $n=1$, zero otherwise.

## Worked examples

**Example 1 (mechanical).** Recover $\tau$ and $\sigma$ for $n = 84 = 2^2\cdot 3\cdot 7$:
$$\tau(84) = (2+1)(1+1)(1+1) = 3\cdot 2\cdot 2 = 12,$$
$$\sigma(84) = (1+2+4)(1+3)(1+7) = 7\cdot 4\cdot 8 = 224.$$
That's the entire technique: never enumerate divisors, just multiply prime-power contributions.

**Example 2 (why you'd care — inversion recovers $\varphi$).** There is a beautiful summatory identity for the totient:
$$\sum_{d\mid n}\varphi(d) = n.$$
(Reason: partition the fractions $\tfrac{1}{n},\tfrac{2}{n},\dots,\tfrac{n}{n}$ by their reduced denominator $d$; exactly $\varphi(d)$ of them reduce to denominator $d$, and every $d\mid n$ occurs.) Read this as $g(n)=n$ being the divisor-sum of $f=\varphi$. Möbius inversion then *reconstructs* $\varphi$ from scratch:
$$\varphi(n) = \sum_{d\mid n}\mu(d)\,\frac{n}{d}.$$
Test it on $n=12$ (nonzero $\mu$ only on the square-free divisors $1,2,3,6$):
$$\varphi(12) = \mu(1)\tfrac{12}{1} + \mu(2)\tfrac{12}{2} + \mu(3)\tfrac{12}{3} + \mu(6)\tfrac{12}{6} = 12 - 6 - 4 + 2 = 4.$$
Correct — the units mod $12$ are $\{1,5,7,11\}$. Distributing the $n$ and factoring gives back the familiar $\varphi(n) = n\prod_{p\mid n}\bigl(1-\tfrac1p\bigr)$ you used in Lesson 3.2. Inversion isn't just verification; it *derives* the product formula.

## Watch out

- You might think multiplicative means $f(mn)=f(m)f(n)$ for *all* $m,n$ — but it's only required for **coprime** $m,n$. $\tau(2\cdot 2)=\tau(4)=3$, not $\tau(2)\tau(2)=4$. (The all-inputs version is called *completely* multiplicative; $\tau,\sigma,\varphi,\mu$ are not that.)
- You might think $\mu(n)=(-1)^{(\text{number of prime factors})}$ always — but it's $0$ whenever a prime is **repeated**. $\mu$ only sees square-free numbers; everything else is annihilated. Check square-free-ness *before* counting primes.
- You might read $\sum_{d\mid n}\mu(d)\,g(n/d)$ as summing over "some" divisors — it's over **all** of them, and the zero terms (non-square-free $d$) are what make it tractable, not what you skip silently. Keep them in the ledger and watch them vanish.

## One-liner

> Every well-behaved arithmetic function reads $n$ off prime by prime; Möbius inversion is the $\pm1$ bookkeeping that turns a sum-over-divisors back into its ingredient.

## Problems

**P1 (🟢)** Let $n = 600$. Factor it, then compute $\tau(600)$ and $\sigma(600)$ using only the product formulas — do not list divisors.

**P2 (🟡)** Define $f$ by the relation $\sum_{d\mid n} f(d) = n^2$ for every $n$. Use Möbius inversion to write $f(n)$ as a single sum, then compute $f(12)$.

**P3 (🔴, optional)** Prove the keystone identity $\sum_{d\mid n}\mu(d) = 0$ for every $n>1$. (Hint: only square-free divisors contribute; if $n$'s distinct primes are $p_1,\dots,p_k$, a square-free divisor is a *subset* of them. Connect the resulting sum to the binomial theorem.)

<details>
<summary>Solutions</summary>

**P1** $600 = 2^3\cdot 3\cdot 5^2$. Then
$$\tau(600) = (3+1)(1+1)(2+1) = 4\cdot 2\cdot 3 = 24,$$
$$\sigma(600) = (1+2+4+8)(1+3)(1+5+25) = 15\cdot 4\cdot 31 = 1860.$$

**P2** The relation says $g(n)=n^2$ is the divisor-sum of $f$, so inversion gives
$$f(n) = \sum_{d\mid n}\mu(d)\,\Bigl(\tfrac{n}{d}\Bigr)^2.$$
For $n=12$, only the square-free divisors $1,2,3,6$ have $\mu\neq 0$:
$$f(12) = \mu(1)\,12^2 + \mu(2)\,6^2 + \mu(3)\,4^2 + \mu(6)\,2^2 = 144 - 36 - 16 + 4 = 96.$$
(This $f$ is the Jordan totient $J_2$ — it counts pairs $(a,b)$ with $1\le a,b\le n$ and $\gcd(a,b,n)=1$.)

**P3** Write the square-free part of $n$'s factorization as the distinct primes $p_1,\dots,p_k$ (with $k\ge 1$ since $n>1$). Any divisor $d$ with $\mu(d)\ne 0$ must be square-free, hence a product of some subset $S\subseteq\{p_1,\dots,p_k\}$, and for such $d$ we have $\mu(d)=(-1)^{|S|}$. Divisors carrying a repeated prime contribute $\mu(d)=0$ and drop out. So
$$\sum_{d\mid n}\mu(d) = \sum_{S\subseteq\{p_1,\dots,p_k\}}(-1)^{|S|} = \sum_{j=0}^{k}\binom{k}{j}(-1)^j = (1-1)^k = 0^k = 0,$$
using the binomial theorem on $(1+(-1))^k$; this is $0$ for every $k\ge 1$. For $n=1$ there are no primes, the empty product gives the single term $\mu(1)=1$, matching $[n=1]$. This is inclusion–exclusion in disguise: the alternating subset sum is exactly why $\mu$ inverts divisor sums. $\blacksquare$

</details>

## Flashback

**From Lesson 3.2 (Euler's totient and Euler's theorem):** Compute $\varphi(100)$, then use Euler's theorem to reduce $3^{100} \bmod 100$ to a small power and finish the computation.

<details>
<summary>Solution</summary>

Factor $100 = 2^2\cdot 5^2$. By multiplicativity of $\varphi$ and $\varphi(p^k)=p^k-p^{k-1}$:
$$\varphi(100) = \varphi(2^2)\,\varphi(5^2) = (4-2)(25-5) = 2\cdot 20 = 40.$$
Since $\gcd(3,100)=1$, Euler's theorem gives $3^{40}\equiv 1 \pmod{100}$. Reduce the exponent mod $40$: $100 = 2\cdot 40 + 20$, so
$$3^{100} \equiv 3^{20} \pmod{100}.$$
Square up quickly: $3^5 = 243 \equiv 43$, then $3^{10} \equiv 43^2 = 1849 \equiv 49$, then $3^{20} \equiv 49^2 = 2401 \equiv 1 \pmod{100}$. Hence $3^{100} \equiv \boxed{1} \pmod{100}$. (In passing, $\mathrm{ord}_{100}(3)=20$, a proper divisor of $\varphi(100)=40$ — exactly as "order divides $\varphi(n)$" from Lesson 3.3 predicts.)

</details>

## Connections

- **Backward:** $\varphi$ from Lesson 3.2 is the flagship multiplicative function; here Möbius inversion *re-derives* its product formula from $\sum_{d\mid n}\varphi(d)=n$, so nothing about the totient was ad hoc.
- **Forward:** Lesson 4.2's Legendre symbol $\left(\tfrac{a}{p}\right)$ is multiplicative in its top argument — same "factor the input, multiply the pieces" reflex — which is what makes quadratic reciprocity computable.
- **Sideways (combinatorics):** the keystone identity $\sum_{d\mid n}\mu(d)=[n=1]$ and its inversion are the divisibility-poset case of the general **Möbius function of a poset** in `combinatorics`; over the subset lattice the very same alternating sum is **inclusion–exclusion**. The same $\mu$ also appears as the kernel of **Dirichlet convolution** ($\mu * \mathbf{1} = \varepsilon$), the algebraic backbone of **sieve methods** for counting primes.

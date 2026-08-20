# Number Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Number theory is one question asked over and over: *what survives when you only
keep the remainder?* Divisibility and the gcd set up the question (Module 1),
congruences make remainders into an arithmetic you can compute in (Module 2), the
unit group $(\mathbb{Z}/n\mathbb{Z})^\times$ gives that arithmetic a shape —
orders, generators, Fermat, Euler (Module 3) — and multiplicativity plus
reciprocity turn the shape into fast algorithms (Module 4) that pay off in RSA
(Module 5). Mid-problem, the two tables you probably want are
[the congruence toolkit](#the-congruence-toolkit--what-each-theorem-needs) (which
theorem is legal right now) and [which theorem cracks this](#which-theorem-cracks-this)
(which theorem to reach for at all).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $a \mid b$ | $a$ divides $b$ exactly — a yes/no relation, not the number $b/a$ | [1.1](lessons/01-01-divisibility-and-the-division-algorithm.md) |
| $a \nmid b$ | $a$ does not divide $b$ | [1.1](lessons/01-01-divisibility-and-the-division-algorithm.md) |
| $q,\ r$ | quotient and remainder from $a = bq + r$, with $r$ forced into $[0,b)$ | [1.1](lessons/01-01-divisibility-and-the-division-algorithm.md) |
| $\gcd(a,b)$, $\mathrm{lcm}(a,b)$ | largest common divisor; smallest positive common multiple | [1.1](lessons/01-01-divisibility-and-the-division-algorithm.md) |
| $ax+by$ | an *integer combination* of $a,b$ — the only values reachable are multiples of $\gcd(a,b)$ | [1.2](lessons/01-02-euclidean-algorithm-and-bezout.md) |
| $p$ | reserved for a prime (and $q$ for a second prime, once primes are in play) | [1.3](lessons/01-03-primes-and-the-fundamental-theorem.md) |
| $\pi(x)$ | how many primes are $\le x$ — a counting staircase | [1.4](lessons/01-04-counting-the-primes.md) |
| $f \sim g$ | asymptotic: the *ratio* $f/g \to 1$. Not a bound, not an estimate for your particular $x$ | [1.4](lessons/01-04-counting-the-primes.md) |
| $a \equiv b \pmod n$ | $a$ and $b$ land in the same remainder-bucket mod $n$, i.e. $n \mid (a-b)$ | [2.1](lessons/02-01-congruences-arithmetic-mod-n.md) |
| $a \bmod n$ | the *number* — the one remainder in $\{0,\dots,n-1\}$ | [1.1](lessons/01-01-divisibility-and-the-division-algorithm.md) |
| $\overline{a}$ | the residue class of $a$: the whole set $\{a+kn\}$ | [2.1](lessons/02-01-congruences-arithmetic-mod-n.md) |
| $\mathbb{Z}/n\mathbb{Z}$ | the $n$ residue classes, with $+$ and $\times$ inherited from $\mathbb{Z}$ | [2.1](lessons/02-01-congruences-arithmetic-mod-n.md) |
| $a^{-1}$ | modular inverse: the residue with $a\,a^{-1}\equiv 1$. Exists only when $\gcd(a,n)=1$ | [2.2](lessons/02-02-linear-congruences-and-modular-inverses.md) |
| $d$ | in Module 2, almost always $\gcd$ of the coefficient and the modulus — the number that decides everything | [2.2](lessons/02-02-linear-congruences-and-modular-inverses.md) |
| $N,\ M_i,\ y_i$ | CRT bookkeeping: $N=\prod n_i$, $M_i = N/n_i$, $y_i \equiv M_i^{-1} \pmod{n_i}$ | [2.4](lessons/02-04-chinese-remainder-theorem.md) |
| $\cong$ | isomorphic — a bijection respecting $+$ and $\times$, as in $\mathbb{Z}/mn\mathbb{Z} \cong \mathbb{Z}/m\mathbb{Z}\times\mathbb{Z}/n\mathbb{Z}$ | [2.4](lessons/02-04-chinese-remainder-theorem.md) |
| $\varphi(n)$ | Euler's totient — how many residues mod $n$ are units | [3.2](lessons/03-02-euler-totient-and-theorem.md) |
| $(\mathbb{Z}/n\mathbb{Z})^\times$ | the units mod $n$ under multiplication — a group of size $\varphi(n)$ | [3.3](lessons/03-03-order-and-the-unit-group.md) |
| $\mathrm{ord}_n(a)$ | multiplicative order: the smallest $k>0$ with $a^k\equiv 1 \pmod n$ | [3.3](lessons/03-03-order-and-the-unit-group.md) |
| $g$ | a primitive root — a unit whose powers sweep the whole group | [3.4](lessons/03-04-primitive-roots.md) |
| $\mathrm{ind}_g(a)$ | index (discrete log): the exponent $k$ with $g^k\equiv a$, read modulo $\varphi(n)$ | [3.4](lessons/03-04-primitive-roots.md) |
| $\tau(n)$, $\sigma(n)$ | how many divisors $n$ has; what they sum to | [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md) |
| $\mu(n)$ | Möbius: $\pm1$ by parity of distinct primes, and $0$ the moment a prime repeats | [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md) |
| $\sum_{d \mid n}$ | sum over **all** positive divisors of $n$, including $1$ and $n$ | [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md) |
| $[P]$ | Iverson bracket: $1$ if the statement $P$ is true, $0$ otherwise | [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md) |
| $\left(\frac{a}{p}\right)$ | Legendre symbol — a $\pm1$ flag for "is $a$ a nonzero square mod $p$?" (never a fraction) | [4.2](lessons/04-02-quadratic-residues-and-legendre-symbol.md) |
| $\mu$ (in Gauss's lemma) | a *count* of top-half residues — unrelated to the Möbius $\mu$ of 4.1 | [4.3](lessons/04-03-gauss-lemma-and-quadratic-reciprocity.md) |
| $(m,n)$ | the generating pair for a primitive triple, coprime and of opposite parity | [5.1](lessons/05-01-pythagorean-triples.md) |
| $N(x+y\sqrt D)$ | the norm $x^2-Dy^2$ — Pell's left-hand side, and it multiplies | [5.2](lessons/05-02-pell-equation-and-continued-fractions.md) |
| $[a_0; \overline{a_1,\dots,a_\ell}\,]$ | continued fraction with a repeating block of length $\ell$ | [5.2](lessons/05-02-pell-equation-and-continued-fractions.md) |
| $p_k/q_k$ | the $k$-th convergent — the best rational approximation at that size | [5.2](lessons/05-02-pell-equation-and-continued-fractions.md) |
| $(n,e)$, $(n,d)$ | RSA public key and private key. $m,c$ live mod $n$; $e,d$ live mod $\varphi(n)$ | [5.4](lessons/05-04-the-rsa-cryptosystem.md) |

## Definitions

### Divides

$b$ is a whole number of $a$-sized steps, with nothing left over.

$$a \mid b \iff b = ak \text{ for some } k\in\mathbb{Z}, \qquad a \neq 0.$$

Every nonzero $a$ divides $0$; nothing divides by $0$.

*Introduced:* [1.1](lessons/01-01-divisibility-and-the-division-algorithm.md)

### Greatest common divisor

The largest number that measures both — and, by Bézout, the smallest positive
amount you can build out of them.

$$\gcd(a,b) = \max\{\,c : c \mid a \text{ and } c \mid b\,\} = \min\{\,ax+by > 0\,\}$$

*Introduced:* [1.1](lessons/01-01-divisibility-and-the-division-algorithm.md), second form [1.2](lessons/01-02-euclidean-algorithm-and-bezout.md)

### Coprime

Two integers sharing no prime factor, so their gcd is $1$. The certificate of
coprimality is an explicit $ax+by=1$.

*Introduced:* [1.1](lessons/01-01-divisibility-and-the-division-algorithm.md), [1.2](lessons/01-02-euclidean-algorithm-and-bezout.md)

### Prime

An integer bigger than $1$ that can't be split. Its sharper property — the one
that actually does the work — is Euclid's lemma: a prime inside a product must
live wholly inside one factor.

$$p > 1 \text{ and its only positive divisors are } 1, p; \qquad p \mid ab \Rightarrow p\mid a \text{ or } p \mid b.$$

$1$ is deliberately not prime: it would wreck uniqueness of factorization.

*Introduced:* [1.3](lessons/01-03-primes-and-the-fundamental-theorem.md)

### Prime-counting function

A staircase that counts primes and nothing else: flat, then a unit jump at each
prime.

$$\pi(x) = \#\{\,p \le x : p \text{ prime}\,\}$$

*Introduced:* [1.4](lessons/01-04-counting-the-primes.md)

### Congruence

Two integers are the same, as far as the modulus is concerned, if they differ by
a whole number of laps.

$$a \equiv b \pmod n \iff n \mid (a-b) \iff a,b \text{ have the same remainder mod } n$$

It is an equivalence relation, so it partitions $\mathbb{Z}$ into $n$ classes.

*Introduced:* [2.1](lessons/02-01-congruences-arithmetic-mod-n.md)

### Residue class

One bucket: every integer congruent to $a$. The set of buckets is
$\mathbb{Z}/n\mathbb{Z}$, and $+$ and $\times$ are well-defined on it.

$$\overline{a} = \{\,a + kn : k \in \mathbb{Z}\,\}, \qquad \mathbb{Z}/n\mathbb{Z} = \{\overline{0},\overline{1},\dots,\overline{n-1}\}$$

*Introduced:* [2.1](lessons/02-01-congruences-arithmetic-mod-n.md)

### Unit

A residue you're allowed to divide by. Being a unit, having an inverse, and being
coprime to the modulus are three names for one condition.

$$a \text{ is a unit mod } n \iff \gcd(a,n)=1 \iff \exists\, a^{-1} \text{ with } a\,a^{-1}\equiv 1 \pmod n$$

*Introduced:* [2.2](lessons/02-02-linear-congruences-and-modular-inverses.md)

### Modular inverse

The whole number that acts like a reciprocal. It *is* the Bézout coefficient of
$a$ read modulo $n$.

$$ax + ny = 1 \;\Longrightarrow\; a^{-1} \equiv x \pmod n$$

*Introduced:* [2.2](lessons/02-02-linear-congruences-and-modular-inverses.md)

### Linear Diophantine equation

A straight line, but you only accept the points where it pierces the integer
grid.

$$ax + by = c, \qquad x,y \in \mathbb{Z}$$

*Introduced:* [2.3](lessons/02-03-linear-diophantine-equations.md)

### Euler's totient

How many residues mod $n$ are units — the size of the crowd Euler's theorem
marches around.

$$\varphi(n) = \bigl|\{\,a : 1\le a\le n,\ \gcd(a,n)=1\,\}\bigr| = \bigl|(\mathbb{Z}/n\mathbb{Z})^\times\bigr|$$

*Introduced:* [3.2](lessons/03-02-euler-totient-and-theorem.md)

### Multiplicative order

A unit's private cycle length: how many steps of "multiply by $a$" it takes to
get home to $1$. Defined only for units.

$$\mathrm{ord}_n(a) = \min\{\,k>0 : a^k \equiv 1 \pmod n\,\}$$

*Introduced:* [3.3](lessons/03-03-order-and-the-unit-group.md)

### Group of units

The coprime residues form a self-contained multiplicative world: closed,
associative, with identity $1$ and every element invertible. Its size is
$\varphi(n)$, and that single fact is why orders divide $\varphi(n)$.

$$(\mathbb{Z}/n\mathbb{Z})^\times = \{\,a \bmod n : \gcd(a,n)=1\,\}$$

*Introduced:* [3.3](lessons/03-03-order-and-the-unit-group.md)

### Primitive root

One unit whose powers hit everything — a crank that turns the whole group. Saying
"$g$ is a primitive root" and "the unit group is cyclic" is saying one thing.

$$\mathrm{ord}_n(g) = \varphi(n)$$

*Introduced:* [3.4](lessons/03-04-primitive-roots.md)

### Index (discrete logarithm)

Once a generator is fixed, every unit is a power of it, and that exponent behaves
like a logarithm: it turns multiplication mod $n$ into addition mod $\varphi(n)$.

$$a \equiv g^{\,\mathrm{ind}_g(a)} \pmod n, \qquad \mathrm{ind}_g(ab) \equiv \mathrm{ind}_g(a) + \mathrm{ind}_g(b) \pmod{\varphi(n)}$$

*Introduced:* [3.4](lessons/03-04-primitive-roots.md)

### Multiplicative function

A function on positive integers that you can evaluate one prime power at a time —
but only across **coprime** pieces. If it splits across *all* pairs it is
**completely (fully) multiplicative**.

$$f(mn) = f(m)f(n) \ \text{ whenever } \gcd(m,n)=1 \quad \Longrightarrow \quad f(n) = \prod_i f\!\left(p_i^{a_i}\right)$$

*Introduced:* [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md)

### Möbius function

A sign-tracker that annihilates anything with a repeated prime factor.

$$\mu(n) = \begin{cases} 1 & n=1,\\ (-1)^k & n \text{ is a product of } k \text{ distinct primes},\\ 0 & p^2 \mid n \text{ for some prime } p.\end{cases}$$

*Introduced:* [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md)

### Quadratic residue

A residue that is somebody's square. Modulo an odd prime, exactly half the units
are.

$$a \text{ is a QR mod } p \iff x^2 \equiv a \pmod p \text{ has a solution}, \quad p \nmid a$$

*Introduced:* [4.2](lessons/04-02-quadratic-residues-and-legendre-symbol.md)

### Legendre symbol

The $\pm1$ ID card of "is $a$ a square mod $p$?" — and it multiplies like a sign.

$$\left(\frac{a}{p}\right) = \begin{cases} +1 & a \text{ a nonzero QR mod } p,\\ -1 & a \text{ a non-residue},\\ 0 & p \mid a,\end{cases} \qquad p \text{ an odd prime.}$$

*Introduced:* [4.2](lessons/04-02-quadratic-residues-and-legendre-symbol.md)

### Primitive Pythagorean triple

A whole-number right triangle that isn't a scaled copy of a smaller one.

$$a^2+b^2=c^2, \qquad \gcd(a,b,c)=1$$

*Introduced:* [5.1](lessons/05-01-pythagorean-triples.md)

### Norm

The size attached to $x+y\sqrt D$ — which is exactly Pell's left-hand side, and
which multiplies when you multiply.

$$N(x+y\sqrt D) = (x+y\sqrt D)(x-y\sqrt D) = x^2 - Dy^2, \qquad N(\alpha\beta)=N(\alpha)N(\beta)$$

*Introduced:* [5.2](lessons/05-02-pell-equation-and-continued-fractions.md)

### Fundamental solution

The smallest nontrivial Pell solution — the seed whose powers generate every
other solution.

$$(x_1,y_1): \text{ the solution of } x^2-Dy^2=1 \text{ with smallest } x_1 + y_1\sqrt D > 1$$

*Introduced:* [5.2](lessons/05-02-pell-equation-and-continued-fractions.md)

### Fermat pseudoprime

A composite that passes the Fermat test for one particular base — a liar that
fooled that base and nothing more.

$$n \text{ composite},\ \gcd(a,n)=1,\ a^{n-1}\equiv 1 \pmod n$$

*Introduced:* [5.3](lessons/05-03-primality-testing.md)

### Carmichael number

A composite that passes the Fermat test for **every** coprime base — the reason
the Fermat test alone is not enough. Smallest is $561 = 3\cdot 11\cdot 17$.

$$a^{n-1}\equiv 1 \pmod n \ \text{ for all } a \text{ with } \gcd(a,n)=1$$

*Introduced:* [5.3](lessons/05-03-primality-testing.md)

### Witness

A base that *proves* $n$ composite — either by failing Fermat's congruence, or
(Miller–Rabin) by exposing a square root of $1$ that isn't $\pm 1$. A witness is
conclusive; a "pass" never is.

*Introduced:* [5.3](lessons/05-03-primality-testing.md)

### RSA key pair

Two exponents built from the factorization, undoing each other because they are
inverses modulo $\varphi(n)$.

$$n = pq, \quad \varphi(n) = (p-1)(q-1), \quad \gcd(e,\varphi(n))=1, \quad d \equiv e^{-1} \pmod{\varphi(n)}$$

*Introduced:* [5.4](lessons/05-04-the-rsa-cryptosystem.md)

## Formulas and rules

### The congruence toolkit — what each theorem needs

The hypothesis column is the whole point: almost every wrong answer in this
course is a legal theorem applied where its hypothesis fails.

| Move | Statement | Exact hypothesis |
|---|---|---|
| Reduce the base | $a\equiv a',\ b\equiv b' \Rightarrow a+b\equiv a'+b',\ ab\equiv a'b'$ | none — always legal for $+$ and $\times$ |
| Reduce the **exponent** | never mod $n$; see the three rows below | — |
| Cancel a factor | $ca\equiv cb \Rightarrow a\equiv b \pmod n$ | $\gcd(c,n)=1$. Otherwise only $a\equiv b \pmod{n/\gcd(c,n)}$ |
| Invert | $a^{-1}$ exists mod $n$ | $\gcd(a,n)=1$ |
| Fermat (strong form) | $a^{p-1}\equiv 1 \pmod p$ | $p$ **prime** and $p \nmid a$ |
| Fermat (universal form) | $a^{p}\equiv a \pmod p$ | $p$ **prime**; any $a$ at all |
| Euler | $a^{\varphi(n)}\equiv 1 \pmod n$ | $\gcd(a,n)=1$; $n$ arbitrary |
| Order divides | $\mathrm{ord}_n(a) \mid \varphi(n)$, and $a^m\equiv 1 \iff \mathrm{ord}_n(a)\mid m$ | $\gcd(a,n)=1$ |
| Sharpest exponent cut | $a^{m} \equiv a^{\,m \bmod \mathrm{ord}_n(a)} \pmod n$ | $\gcd(a,n)=1$ |
| Wilson | $(p-1)! \equiv -1 \pmod p$, and this **characterizes** primes | $p$ prime (converse holds too, for $p>1$) |
| Euler's criterion | $a^{(p-1)/2} \equiv \left(\frac{a}{p}\right) \pmod p$ | $p$ an **odd** prime, $p\nmid a$ |
| CRT | the system has a unique solution mod $\prod n_i$ | moduli **pairwise** coprime |
| Quadratic reciprocity | $\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2}\frac{q-1}{2}}$ | $p,q$ **distinct odd primes** |

Wilson's theorem is the one row no lesson states; it is included because it is
standard equipment for this material and is the fastest way to certify a small
modulus is prime by hand. Everything else on this table is proved in the lessons
cited below.

*From* [2.1](lessons/02-01-congruences-arithmetic-mod-n.md), [2.2](lessons/02-02-linear-congruences-and-modular-inverses.md), [2.4](lessons/02-04-chinese-remainder-theorem.md), [3.1](lessons/03-01-fermats-little-theorem.md), [3.2](lessons/03-02-euler-totient-and-theorem.md), [3.3](lessons/03-03-order-and-the-unit-group.md), [4.2](lessons/04-02-quadratic-residues-and-legendre-symbol.md), [4.3](lessons/04-03-gauss-lemma-and-quadratic-reciprocity.md)

### Which theorem cracks this

| The shape in front of you | Reach for | Where |
|---|---|---|
| $a^{\text{huge}} \bmod p$, $p$ prime, $p\nmid a$ | Fermat: reduce the exponent mod $p-1$ | [3.1](lessons/03-01-fermats-little-theorem.md) |
| $a^{\text{huge}} \bmod n$, $\gcd(a,n)=1$ | Euler: factor $n$, get $\varphi(n)$, reduce the exponent mod $\varphi(n)$ | [3.2](lessons/03-02-euler-totient-and-theorem.md) |
| Same, but you want the *exact* period | find $\mathrm{ord}_n(a)$ among the divisors of $\varphi(n)$, reduce mod that | [3.3](lessons/03-03-order-and-the-unit-group.md) |
| $a^{\text{huge}} \bmod n$ with $\gcd(a,n)>1$ | Euler is illegal — split $n$ into prime powers and glue with CRT | [2.4](lessons/02-04-chinese-remainder-theorem.md), [5.4](lessons/05-04-the-rsa-cryptosystem.md) |
| A power you must actually compute | repeated squaring, reducing after every step | [3.3](lessons/03-03-order-and-the-unit-group.md) |
| $ax \equiv b \pmod n$ | $d=\gcd(a,n)$: solvable iff $d \mid b$, then exactly $d$ solutions | [2.2](lessons/02-02-linear-congruences-and-modular-inverses.md) |
| $ax + by = c$ over $\mathbb{Z}$ | solvable iff $\gcd(a,b)\mid c$; scale Bézout, then step | [2.3](lessons/02-03-linear-diophantine-equations.md) |
| Several congruences, coprime moduli | CRT — construct with the $M_i y_i$ switches | [2.4](lessons/02-04-chinese-remainder-theorem.md) |
| Several congruences, **non**-coprime moduli | solvable iff the targets agree mod $\gcd$; unique mod $\mathrm{lcm}$ | [2.4](lessons/02-04-chinese-remainder-theorem.md) |
| $x^2 \equiv a \pmod p$ — solvable? | Legendre symbol: reciprocity for speed, Euler's criterion for certainty | [4.3](lessons/04-03-gauss-lemma-and-quadratic-reciprocity.md), [4.2](lessons/04-02-quadratic-residues-and-legendre-symbol.md) |
| $x^2 \equiv a \pmod{pq}$ — count the roots | CRT: two roots per prime, so four residues mod $pq$ | [2.4](lessons/02-04-chinese-remainder-theorem.md) |
| Count or sum the divisors of $n$ | factor once, then $\tau,\sigma$ product formulas — never list divisors | [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md) |
| "$g(n) = \sum_{d\mid n} f(d)$, recover $f$" | Möbius inversion | [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md) |
| Is this small number prime? | trial division by primes up to $\sqrt n$ | [1.4](lessons/01-04-counting-the-primes.md) |
| Is this 300-digit number prime? | Fermat test to screen, Miller–Rabin to decide | [5.3](lessons/05-03-primality-testing.md) |
| Does this modulus have a generator? | only if $n \in \{1,2,4,p^k,2p^k\}$ | [3.4](lessons/03-04-primitive-roots.md) |
| Solve a multiplicative congruence with a known generator | take indices; multiplication becomes addition mod $\varphi(n)$ | [3.4](lessons/03-04-primitive-roots.md) |
| $a^2+b^2=c^2$ in integers | the $(m^2-n^2,\,2mn,\,m^2+n^2)$ parametrization | [5.1](lessons/05-01-pythagorean-triples.md) |
| $x^2 - Dy^2 = 1$ in integers | find the fundamental solution, then take powers | [5.2](lessons/05-02-pell-equation-and-continued-fractions.md) |
| Build or break a keypair | RSA: $d = e^{-1} \bmod \varphi(n)$; breaking it is factoring $n$ | [5.4](lessons/05-04-the-rsa-cryptosystem.md) |

### Divisibility, gcd, and factorization

$$\text{division algorithm: } a = bq+r,\quad 0 \le r < b,\quad q = \left\lfloor a/b \right\rfloor \ \text{ — unique.}$$

$$\text{transitivity: } a\mid b,\ b\mid c \Rightarrow a\mid c \qquad\qquad \text{linearity: } a\mid b,\ a\mid c \Rightarrow a \mid (bx+cy)\ \forall x,y$$

$$\text{Euclid: } \gcd(a,b) = \gcd(b,\ a \bmod b), \qquad \gcd(a,0) = |a| \quad(\text{the base case, not an error})$$

$$\text{Bézout: } \gcd(a,b) = ax+by \ \text{ for some } x,y \in \mathbb{Z}; \qquad \gcd(a,b)=1 \iff \exists\,x,y: ax+by=1$$

Bézout coefficients are **not** unique: from one solution, $(x + \tfrac{b}{d}t,\ y - \tfrac{a}{d}t)$ works for every $t\in\mathbb{Z}$.

From factorizations $a=\prod p^{\alpha_p}$, $b=\prod p^{\beta_p}$:

$$\gcd(a,b) = \prod_p p^{\min(\alpha_p,\beta_p)}, \qquad \mathrm{lcm}(a,b) = \prod_p p^{\max(\alpha_p,\beta_p)}, \qquad \gcd(a,b)\cdot\mathrm{lcm}(a,b) = ab.$$

Cost: Euclid runs in $O(\log \min(a,b))$ divisions (worst case: consecutive Fibonacci numbers). Factoring does not.

*From* [1.1](lessons/01-01-divisibility-and-the-division-algorithm.md), [1.2](lessons/01-02-euclidean-algorithm-and-bezout.md), [1.3](lessons/01-03-primes-and-the-fundamental-theorem.md)

### Primes: the three facts

$$\text{FTA: } n = p_1^{e_1}\cdots p_k^{e_k} \text{ exists and is unique (up to order), for every } n>1.$$

$$\text{Every composite } n \text{ has a prime factor } \le \sqrt n \ \Rightarrow\ \text{trial division may stop at } \sqrt n.$$

$$\text{Infinitely many primes (Euclid); } \quad \pi(x) \sim \frac{x}{\ln x} \quad (\text{PNT — stated, not proved}).$$

Read the PNT as a **density**: near $x$, about one integer in $\ln x$ is prime. That is why a random 2048-bit RSA prime is found in a few hundred draws. It says nothing about where any particular prime sits, and it is neither an upper nor a lower bound ($x/\ln x$ undershoots at $x=10^6$ by about 8 percent).

*From* [1.3](lessons/01-03-primes-and-the-fundamental-theorem.md), [1.4](lessons/01-04-counting-the-primes.md)

### Solving linear congruences and Diophantine equations

Both are the same theorem in two costumes; $ax\equiv b \pmod n$ *is* $ax+ny=b$.

| Problem | Solvable iff | Solution set |
|---|---|---|
| $ax \equiv b \pmod n$, $d = \gcd(a,n)$ | $d \mid b$ | divide through by $d$ to $a'x\equiv b' \pmod{n'}$, solve uniquely as $x_0 \equiv (a')^{-1}b'$, then lift: $x_0, x_0+n', \dots, x_0+(d-1)n' \pmod n$ — exactly $d$ classes |
| $ax + by = c$, $d = \gcd(a,b)$ | $d \mid c$ | $x = x_0 + \tfrac{b}{d}t,\quad y = y_0 - \tfrac{a}{d}t,\quad t\in\mathbb{Z}$ |

To get $(x_0,y_0)$: run extended Euclid for $ax+by=d$, then scale **both** coefficients by $c/d$ (not by $c$). Non-negativity is a separate question — clip the range of $t$; integer solutions can exist with no non-negative ones.

*From* [2.2](lessons/02-02-linear-congruences-and-modular-inverses.md), [2.3](lessons/02-03-linear-diophantine-equations.md)

### Chinese Remainder Theorem — the recipe

For pairwise coprime $n_1,\dots,n_k$ with $N = \prod n_i$, the system $x\equiv a_i \pmod{n_i}$ has a unique solution mod $N$:

$$M_i = \frac{N}{n_i}, \qquad y_i \equiv M_i^{-1} \pmod{n_i}, \qquad x \equiv \sum_{i=1}^{k} a_i M_i y_i \pmod N.$$

Each $M_i y_i$ is a switch reading $1$ mod $n_i$ and $0$ mod every other modulus. Reduce the final sum mod $N$ to get the smallest non-negative answer.

$$\mathbb{Z}/N\mathbb{Z} \;\cong\; \mathbb{Z}/n_1\mathbb{Z}\times\cdots\times\mathbb{Z}/n_k\mathbb{Z} \qquad (\text{a ring isomorphism: } + \text{ and } \times \text{ go componentwise}).$$

**Non-coprime fallback.** For two moduli with $\gcd(m,n)=g>1$: solvable iff $a_1 \equiv a_2 \pmod g$, and then unique modulo $\mathrm{lcm}(m,n)$, not $mn$.

*From* [2.4](lessons/02-04-chinese-remainder-theorem.md)

### Fast modular exponentiation

Square, don't multiply. Write the exponent in binary, build the squares, and reduce mod $n$ **after every squaring**.

$$a^{13} = a^{8}\cdot a^{4}\cdot a^{1} \quad (13 = 1101_2), \qquad \text{cost } \approx \log_2 m \text{ multiplications for } a^m.$$

*From* [3.3](lessons/03-03-order-and-the-unit-group.md)

### Euler's totient — computing it

$$\varphi(p) = p-1, \qquad \varphi(p^k) = p^{k}-p^{k-1} = p^{k-1}(p-1) \quad(\textbf{not } (p-1)^k),$$

$$\varphi(mn) = \varphi(m)\varphi(n) \ \text{ for } \gcd(m,n)=1, \qquad \varphi(n) = n\prod_{p \mid n}\left(1 - \frac{1}{p}\right).$$

One factor per **distinct** prime; the exponents never enter the fractions. Also $\sum_{d\mid n}\varphi(d) = n$, which is what Möbius inversion turns back into the product formula. Sanity check: $\varphi(n)$ is even for every $n > 2$.

*From* [3.2](lessons/03-02-euler-totient-and-theorem.md), [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md)

### Multiplicative functions at a glance

"Multiplicative" means $f(mn)=f(m)f(n)$ for **coprime** $m,n$ only. The last column is the difference that trips people: $\tau(2\cdot2)=3$, not $\tau(2)^2=4$.

| $f$ | Value on $p^k$ | Closed form on $n = \prod p_i^{a_i}$ | Multiplicative | Completely multiplicative |
|---|---|---|---|---|
| $\varphi$ | $p^{k-1}(p-1)$ | $n\prod_{p\mid n}(1-1/p)$ | yes | **no** ($\varphi(4)=2 \ne \varphi(2)^2=1$) |
| $\tau$ (divisor count) | $k+1$ | $\prod_i (a_i+1)$ | yes | **no** |
| $\sigma$ (divisor sum) | $\dfrac{p^{k+1}-1}{p-1}$ | $\prod_i \dfrac{p_i^{a_i+1}-1}{p_i-1}$ | yes | **no** |
| $\mu$ (Möbius) | $-1$ if $k=1$, else $0$ | $(-1)^{\#\text{primes}}$ or $0$ | yes | **no** ($\mu(4)=0$) |
| $\varepsilon(n) = [n=1]$ | $0$ for $k\ge 1$ | $[n=1]$ | yes | yes |
| $\mathbf{1}(n) = 1$ | $1$ | $1$ | yes | yes |
| $\mathrm{Id}(n) = n$ | $p^k$ | $n$ | yes | yes |
| $a \mapsto \left(\frac{a}{p}\right)$ | — | — | yes | **yes** — the symbol splits across *any* factorization of its top |

Small values, for checking work:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $\varphi(n)$ | 1 | 1 | 2 | 2 | 4 | 2 | 6 | 4 | 6 | 4 | 10 | 4 |
| $\tau(n)$ | 1 | 2 | 2 | 3 | 2 | 4 | 2 | 4 | 3 | 4 | 2 | 6 |
| $\sigma(n)$ | 1 | 3 | 4 | 7 | 6 | 12 | 8 | 15 | 13 | 18 | 12 | 28 |
| $\mu(n)$ | 1 | $-1$ | $-1$ | 0 | $-1$ | 1 | $-1$ | 0 | 0 | 1 | $-1$ | 0 |

*From* [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md), [3.2](lessons/03-02-euler-totient-and-theorem.md), [4.2](lessons/04-02-quadratic-residues-and-legendre-symbol.md)

### Möbius inversion

$$\sum_{d \mid n} \mu(d) = [n=1] \qquad\text{(the keystone identity — everything cancels unless } n=1).$$

$$g(n) = \sum_{d\mid n} f(d) \quad\Longleftrightarrow\quad f(n) = \sum_{d\mid n}\mu(d)\,g\!\left(\frac{n}{d}\right).$$

Worked instance to imitate: $\sum_{d\mid n}\varphi(d) = n$ inverts to $\varphi(n) = \sum_{d\mid n}\mu(d)\tfrac{n}{d}$. Sum over **all** divisors; the non-square-free ones contribute $0$ and that is what makes it short, not a licence to skip them.

*From* [4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md)

### Order and primitive roots

$$\mathrm{ord}_n(a) \mid \varphi(n) \quad\Rightarrow\quad \text{test only the divisors of } \varphi(n), \text{ never } 1,2,3,\dots$$

$$g \text{ is a primitive root} \iff g^{\varphi(n)/q} \not\equiv 1 \pmod n \text{ for every distinct prime } q \mid \varphi(n).$$

$$\text{A primitive root exists} \iff n \in \{1,\,2,\,4,\,p^k,\,2p^k\},\ p \text{ an odd prime.}$$

When one exists there are $\varphi(\varphi(n))$ of them. A unit of order $d$ generates exactly $d$ distinct residues $a^0,\dots,a^{d-1}$.

Smallest primitive root, for the primes you'll meet by hand:

| $p$ | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 |
|---|---|---|---|---|---|---|---|---|---|---|
| smallest $g$ | 2 | 2 | 3 | 2 | 2 | 3 | 2 | 5 | 2 | 3 |
| count $\varphi(p-1)$ | 1 | 2 | 2 | 4 | 4 | 8 | 6 | 10 | 12 | 8 |

*From* [3.3](lessons/03-03-order-and-the-unit-group.md), [3.4](lessons/03-04-primitive-roots.md)

### Evaluating a Legendre symbol

The loop: **reduce the top mod $p$ → factor it → pull out $-1$ and $2$ with the supplements → flip the remaining odd primes → repeat.** Each round shrinks the numbers; it is the Euclidean algorithm wearing a new hat.

$$\left(\frac{ab}{p}\right) = \left(\frac{a}{p}\right)\left(\frac{b}{p}\right), \qquad \left(\frac{a}{p}\right) \equiv a^{(p-1)/2} \pmod p, \qquad \left(\frac{x^2}{p}\right) = +1 \text{ for } p \nmid x.$$

$$\textbf{First supplement: } \left(\frac{-1}{p}\right) = (-1)^{(p-1)/2} = \begin{cases} +1 & p \equiv 1 \pmod 4\\ -1 & p \equiv 3 \pmod 4\end{cases}$$

$$\textbf{Second supplement: } \left(\frac{2}{p}\right) = (-1)^{(p^2-1)/8} = \begin{cases} +1 & p \equiv \pm 1 \pmod 8 \ \ (1,7)\\ -1 & p \equiv \pm 3 \pmod 8 \ \ (3,5)\end{cases}$$

$$\textbf{Reciprocity: } \left(\frac{p}{q}\right) = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}\left(\frac{q}{p}\right) \quad\Longrightarrow\quad \text{the two agree } \textbf{unless both } p\equiv q \equiv 3 \pmod 4.$$

$$\textbf{Gauss's lemma: } \left(\frac{a}{p}\right) = (-1)^{\mu}, \quad \mu = \#\{\text{least residues of } a,2a,\dots,\tfrac{p-1}{2}a \text{ exceeding } p/2\}.$$

Exactly $(p-1)/2$ of the units are residues and $(p-1)/2$ are not; a solvable $x^2\equiv a$ has exactly two roots, $\pm x$. Quadratic reciprocity is **stated, not proved**, in this course; Gauss's lemma is sketched.

Squares mod the small primes, for a fast sanity check:

| $p$ | quadratic residues (nonzero) |
|---|---|
| $3$ | $1$ |
| $5$ | $1, 4$ |
| $7$ | $1, 2, 4$ |
| $11$ | $1, 3, 4, 5, 9$ |
| $13$ | $1, 3, 4, 9, 10, 12$ |
| $17$ | $1, 2, 4, 8, 9, 13, 15, 16$ |

*From* [4.2](lessons/04-02-quadratic-residues-and-legendre-symbol.md), [4.3](lessons/04-03-gauss-lemma-and-quadratic-reciprocity.md)

### Pythagorean triples

$$a = m^2-n^2, \qquad b = 2mn, \qquad c = m^2+n^2, \qquad m > n > 0,\ \gcd(m,n)=1,\ m \not\equiv n \pmod 2.$$

Those conditions are exactly what makes the output primitive and stops double-counting. Every triple is $k$ times a primitive one, so pull out $\gcd(a,b,c)$ first. In a primitive triple $c$ is odd and exactly one leg is even (that leg is $b=2mn$).

Source of the parametrization: lines of rational slope $t=n/m$ through $(-1,0)$ meet the unit circle at $\left(\frac{1-t^2}{1+t^2},\ \frac{2t}{1+t^2}\right)$ — one rational slope in, one rational point out, so nothing is missed.

Small primitive triples: $(3,4,5),\ (5,12,13),\ (8,15,17),\ (7,24,25),\ (20,21,29),\ (9,40,41),\ (12,35,37),\ (11,60,61)$.

*From* [5.1](lessons/05-01-pythagorean-triples.md)

### Pell's equation

$$x^2 - Dy^2 = 1, \quad D>0 \text{ non-square}; \qquad x_k + y_k\sqrt D = \left(x_1 + y_1\sqrt D\right)^{k}.$$

Because the norm multiplies, every power of the seed is again a solution — infinitely many, in increasing order, with no searching. Equivalent recurrence, radical-free:

$$x_{k+1} = x_1 x_k + D\,y_1 y_k, \qquad y_{k+1} = x_1 y_k + y_1 x_k.$$

**Finding the seed** (the lessons call this step "light" — here is the actual procedure). Set $a_0 = \lfloor\sqrt D\rfloor$, $m_0 = 0$, $d_0 = 1$, and iterate

$$m_{k+1} = d_k a_k - m_k, \qquad d_{k+1} = \frac{D - m_{k+1}^2}{d_k}, \qquad a_{k+1} = \left\lfloor \frac{a_0 + m_{k+1}}{d_{k+1}} \right\rfloor,$$

which produces the periodic expansion $\sqrt D = [a_0; \overline{a_1,\dots,a_\ell}\,]$. Build convergents by $p_k = a_k p_{k-1} + p_{k-2}$ and $q_k = a_k q_{k-1} + q_{k-2}$ (with $p_{-1}=1,\,p_{-2}=0,\,q_{-1}=0,\,q_{-2}=1$). Then $p_{k}^2 - D q_{k}^2 = (-1)^{k+1}$ at the ends of periods, so the fundamental solution is $(p_{\ell-1}, q_{\ell-1})$ when $\ell$ is even and $(p_{2\ell-1}, q_{2\ell-1})$ when $\ell$ is odd.

| $D$ | 2 | 3 | 5 | 6 | 7 | 8 | 10 | 13 | 61 |
|---|---|---|---|---|---|---|---|---|---|
| $(x_1,y_1)$ | $(3,2)$ | $(2,1)$ | $(9,4)$ | $(5,2)$ | $(8,3)$ | $(3,1)$ | $(19,6)$ | $(649,180)$ | $(1766319049,\,226153980)$ |

The $D=13$ and $D=61$ entries are the warning: the seed can be enormous even when $D$ is small, which is why you run the continued fraction instead of searching. And $x^2-Dy^2=-1$ is a genuinely different equation — solvable for $D=2$, unsolvable for $D=3$.

*From* [5.2](lessons/05-02-pell-equation-and-continued-fractions.md)

### Primality testing

| Test | What it does | What a "pass" means |
|---|---|---|
| Trial division to $\sqrt n$ | finds a factor or proves there is none | **proof** of primality; hopeless past ~$10^{18}$ |
| Fermat, base $a$ | computes $a^{n-1} \bmod n$; $\ne 1$ proves composite | nothing certain — $n$ is a *probable prime, base $a$* |
| Miller–Rabin, base $a$ | writes $n-1 = 2^s t$, checks $a^t$ then the squarings for a root of $1$ that isn't $\pm 1$ | probably prime; at least $3/4$ of bases are witnesses, so $k$ random bases leave error below $(1/4)^k$ |

$$\text{Miller--Rabin's extra fact: modulo a prime, } x^2\equiv 1 \Rightarrow x \equiv \pm 1. \text{ Any other square root of } 1 \text{ certifies composite.}$$

Both tests are **one-sided**: "composite" is certain, "prime" is not. Carmichael numbers ($561, 1105, 1729, 2465, \dots$ — infinitely many) defeat Fermat at *every* coprime base; Korselt's criterion says $n$ is Carmichael exactly when $n$ is square-free and $(p-1)\mid(n-1)$ for every prime $p\mid n$. Miller–Rabin catches them anyway, because the road to $a^{n-1}$ gives them away even when the endpoint doesn't.

*From* [5.3](lessons/05-03-primality-testing.md), [1.4](lessons/01-04-counting-the-primes.md)

### RSA at a glance

| Step | Formula | Which theorem |
|---|---|---|
| Keygen | $n = pq$, $\varphi(n) = (p-1)(q-1)$, $\gcd(e,\varphi(n))=1$, $d \equiv e^{-1} \pmod{\varphi(n)}$ | extended Euclid / Bézout [2.2](lessons/02-02-linear-congruences-and-modular-inverses.md) |
| Find $p,q$ | random odd candidates until Miller–Rabin passes | [5.3](lessons/05-03-primality-testing.md), density from PNT [1.4](lessons/01-04-counting-the-primes.md) |
| Encrypt | $c \equiv m^{e} \pmod n$, $\ 0 \le m < n$ | repeated squaring [3.3](lessons/03-03-order-and-the-unit-group.md) |
| Decrypt | $m \equiv c^{d} \pmod n$ | Euler [3.2](lessons/03-02-euler-totient-and-theorem.md); CRT + Fermat patch for $\gcd(m,n)\ne 1$ [2.4](lessons/02-04-chinese-remainder-theorem.md), [3.1](lessons/03-01-fermats-little-theorem.md) |
| Why it works | $ed = 1 + k\varphi(n) \Rightarrow m^{ed} = m\left(m^{\varphi(n)}\right)^{k} \equiv m$ | [5.4](lessons/05-04-the-rsa-cryptosystem.md) |
| Why it's safe | knowing $\varphi(n) \iff$ factoring $n$: $p+q = n - \varphi(n) + 1$ and $pq = n$, so $p,q$ are roots of $x^2 - (p+q)x + n = 0$ | [5.4](lessons/05-04-the-rsa-cryptosystem.md) |

Secrets are $p, q, \varphi(n), d$ — leaking any one leaks all of them.

*From* [5.4](lessons/05-04-the-rsa-cryptosystem.md)

## Assumed, not taught here

This is a Tier 1 course, so the list is short — but each of these is genuinely
*used* in a proof without being established in a lesson.

| Fact | Where it's taught |
|---|---|
| Well-ordering: every nonempty set of non-negative integers has a least element (existence in the division algorithm, and the minimal element in the Bézout proof) | [proofs-primer 3.3](../proofs-primer/lessons/03-03-induction.md) |
| Strong induction (existence half of the FTA) | [proofs-primer 3.3](../proofs-primer/lessons/03-03-induction.md), [discrete-mathematics 1.4](../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md) |
| Proof by contradiction and minimal-counterexample (Euclid's infinitude, uniqueness in the FTA, the contrapositive form of the Fermat test) | [proofs-primer 2.2](../proofs-primer/lessons/02-02-contrapositive-and-contradiction.md) |
| Equivalence relations partition a set into classes (why $\mathbb{Z}/n\mathbb{Z}$ is well-formed) | [discrete-mathematics 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md) |
| Binomial theorem and the divisibility of $\binom{p}{k}$ by $p$ (second proof of Fermat) | [discrete-mathematics 3.2](../discrete-mathematics/lessons/03-02-binomial-theorem-and-identities.md) |
| Finite geometric sum $1+p+\cdots+p^{k} = \frac{p^{k+1}-1}{p-1}$ (the closed form for $\sigma$) | [precalculus 3.3](../precalculus/lessons/03-03-series-and-infinite-geometric-sum.md) |
| The natural logarithm and its growth (reading the PNT and its density estimate) | [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) |
| **A polynomial of degree $k$ over a field has at most $k$ roots** — used silently to close the proof of Euler's criterion in 4.2, and it fails over $\mathbb{Z}/n\mathbb{Z}$ for composite $n$ | [abstract-algebra 3.4](../abstract-algebra/lessons/03-04-polynomial-rings.md) |
| Group axioms; Lagrange's theorem ("order of an element divides the order of the group") — the lessons prove the two special cases they need and name the general theorem | [abstract-algebra 1.1](../abstract-algebra/lessons/01-01-group-axioms-first-examples.md), [1.5](../abstract-algebra/lessons/01-05-cosets-lagrange.md) |
| Cyclic group, generator (the vocabulary 3.4 uses for "has a primitive root") | [abstract-algebra 1.2](../abstract-algebra/lessons/01-02-cyclic-groups-order.md) |
| Ring isomorphism (the $\cong$ in the CRT statement) | [abstract-algebra 3.1](../abstract-algebra/lessons/03-01-rings-ring-homomorphisms.md) |

Two things are *deliberately* not proved anywhere and are meant to be taken on
faith here: the Prime Number Theorem (needs complex analysis), and quadratic
reciprocity itself (Gauss's lemma is only sketched in 4.3). The
continued-fraction machinery 5.2 leans on is not developed in any course in this
library, which is why the algorithm is spelled out on this card above.

## Pitfalls

### Remainders and gcd

- $-17 \bmod 5$ is $3$, not $-2$: the remainder is forced into $[0,b)$, unlike many programming languages' `%`. The quotient is the **floor**, not "rounded toward zero." *([1.1](lessons/01-01-divisibility-and-the-division-algorithm.md))*
- $a \mid b$ is a relation, not the number $b/a$ — never write one when you mean the other. *([1.1](lessons/01-01-divisibility-and-the-division-algorithm.md))*
- $ax+by$ cannot produce just any integer: only multiples of $\gcd(a,b)$ are reachable. That single fact is the solvability test in 2.2 and 2.3. *([1.2](lessons/01-02-euclidean-algorithm-and-bezout.md))*
- Bézout coefficients are not unique — two correct answers can look nothing alike. *([1.2](lessons/01-02-euclidean-algorithm-and-bezout.md))*
- In back-substitution, keep each remainder symbolic as "(earlier number) − (multiple)(other number)"; multiply out early and you lose the $ax+by$ form. *([1.2](lessons/01-02-euclidean-algorithm-and-bezout.md))*
- $\gcd(a,0) = |a|$ is the loop's legitimate base case, not an error state. *([1.2](lessons/01-02-euclidean-algorithm-and-bezout.md))*
- Scale Bézout by $c/d$, never by $c$. *([2.3](lessons/02-03-linear-diophantine-equations.md))*

### Primes and factorization

- Existence and uniqueness of factorization are different claims; uniqueness is the theorem, it is bought entirely with Euclid's lemma, and it *fails* in other rings ($6 = 2\cdot3 = (1+\sqrt{-5})(1-\sqrt{-5})$). *([1.3](lessons/01-03-primes-and-the-fundamental-theorem.md))*
- "$n \mid ab \Rightarrow n\mid a$ or $n\mid b$" needs $n$ **prime**: $6 \mid 4\cdot 9$ but $6$ divides neither. Composites smear across factors. *([1.3](lessons/01-03-primes-and-the-fundamental-theorem.md))*
- Euclid's proof does not claim $p_1\cdots p_k + 1$ is prime — only that it has a prime factor outside your list ($30031 = 59\cdot 509$). *([1.4](lessons/01-04-counting-the-primes.md))*
- $x/\ln x$ is an asymptotic, not a bound; it can land on either side for finite $x$. *([1.4](lessons/01-04-counting-the-primes.md))*

### Congruence hygiene

- A congruence without its modulus is meaningless: $3\equiv 8$ is false mod $10$, true mod $5$. *([2.1](lessons/02-01-congruences-arithmetic-mod-n.md))*
- **The course's most common error:** cancelling a common factor needs $\gcd(c,n)=1$. Otherwise the modulus shrinks — $2\cdot3 \equiv 2\cdot 8 \pmod{10}$ gives $3\equiv 8 \pmod 5$, not mod $10$. Do not "divide both sides" without checking. *([2.1](lessons/02-01-congruences-arithmetic-mod-n.md), [2.2](lessons/02-02-linear-congruences-and-modular-inverses.md))*
- **The second most common error:** you may reduce the *base* mod $n$ freely, but you may never reduce the *exponent* mod $n$. Exponents reduce mod $p-1$ (Fermat), mod $\varphi(n)$ (Euler), or mod $\mathrm{ord}_n(a)$ — always a different modulus from the one the arithmetic lives in. *([2.1](lessons/02-01-congruences-arithmetic-mod-n.md), [3.1](lessons/03-01-fermats-little-theorem.md), [3.2](lessons/03-02-euler-totient-and-theorem.md), [3.4](lessons/03-04-primitive-roots.md), [5.4](lessons/05-04-the-rsa-cryptosystem.md))*
- $\gcd(a,n)>1$ means "$a$ has no inverse," not "no solutions." Solvability depends on $b$: if $\gcd(a,n)\mid b$ you get $\gcd(a,n)$ solutions. *([2.2](lessons/02-02-linear-congruences-and-modular-inverses.md))*
- A negative Bézout coefficient is a correct inverse but not yet a residue — reduce into $\{0,\dots,n-1\}$ and then *check* by multiplying. *([2.2](lessons/02-02-linear-congruences-and-modular-inverses.md))*
- CRT needs **pairwise** coprime moduli: $x\equiv 1 \pmod 2$ with $x \equiv 0 \pmod 4$ has no solution. *([2.4](lessons/02-04-chinese-remainder-theorem.md))*
- Reduce the assembled CRT sum mod $N$ — the raw $\sum a_i M_i y_i$ is valid but is not the answer asked for. *([2.4](lessons/02-04-chinese-remainder-theorem.md))*

### Fermat, Euler, order

- $a^{p-1}\equiv 1$ needs $p \nmid a$; the form that survives for every $a$ is $a^{p}\equiv a$. *([3.1](lessons/03-01-fermats-little-theorem.md))*
- Fermat needs the modulus **prime**; for composite moduli use Euler, and Euler in turn needs $\gcd(a,n)=1$ ($6^{\varphi(15)} \not\equiv 1 \pmod{15}$). *([3.1](lessons/03-01-fermats-little-theorem.md), [3.2](lessons/03-02-euler-totient-and-theorem.md))*
- $\varphi(p^k) = p^{k-1}(p-1)$, not $(p-1)^k$ — $\varphi(9)=6$, not $4$. The product runs over *distinct* primes only. *([3.2](lessons/03-02-euler-totient-and-theorem.md))*
- $\mathrm{ord}_n(a)$ only *divides* $\varphi(n)$; equality is the special case called a primitive root ($\mathrm{ord}_{100}(7)=4$, while $\varphi(100)=40$). *([3.3](lessons/03-03-order-and-the-unit-group.md))*
- From $a^m \equiv a^k$ you get $m \equiv k$ modulo the **order**, not modulo $n$ — and only for units. *([3.3](lessons/03-03-order-and-the-unit-group.md))*
- Non-units have no order at all: their powers never reach $1$. *([3.3](lessons/03-03-order-and-the-unit-group.md))*
- In repeated squaring, reduce after **every** squaring, not once at the end. *([3.3](lessons/03-03-order-and-the-unit-group.md))*
- $g^{\varphi(n)}\equiv 1$ confirms nothing — it holds for every unit. The real test is $g^{\varphi(n)/q}\not\equiv 1$ for each prime $q \mid \varphi(n)$. *([3.4](lessons/03-04-primitive-roots.md))*
- Not every modulus has a generator ($8, 12, 15$ do not), and when one exists it is not unique — there are $\varphi(\varphi(n))$ of them. *([3.4](lessons/03-04-primitive-roots.md))*

### Multiplicative functions

- Multiplicative means coprime inputs only: $\tau(4) = 3 \ne \tau(2)^2$. *Completely* multiplicative is a strictly stronger property that $\tau,\sigma,\varphi,\mu$ do **not** have. *([4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md))*
- $\mu(n)$ is $0$ whenever any prime repeats — check square-free-ness *before* counting primes. *([4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md))*
- Möbius inversion sums over **all** divisors; the zero terms are part of the ledger, not terms you skip. *([4.1](lessons/04-01-arithmetic-functions-and-mobius-inversion.md))*

### Quadratic residues

- $-1$ can absolutely be a square mod $p$ — whenever $p\equiv 1 \pmod 4$. Real-number intuition does not transfer. *([4.2](lessons/04-02-quadratic-residues-and-legendre-symbol.md))*
- Non-residue times non-residue is a **residue**: the symbols multiply like signs. *([4.2](lessons/04-02-quadratic-residues-and-legendre-symbol.md))*
- Reciprocity needs both arguments to be **distinct odd primes**. Factor a composite top first, and handle $-1$ and $2$ with the supplements — those cannot be flipped. *([4.3](lessons/04-03-gauss-lemma-and-quadratic-reciprocity.md))*
- The $2$-supplement is decided mod $8$ (good: $1,7$; bad: $3,5$), not mod $4$. *([4.3](lessons/04-03-gauss-lemma-and-quadratic-reciprocity.md))*
- The flip costs a sign *only* when both primes are $\equiv 3 \pmod 4$ — check it explicitly every time. And reduce the top freely, never the bottom. *([4.3](lessons/04-03-gauss-lemma-and-quadratic-reciprocity.md))*

### Diophantine equations

- Integer solutions existing does not mean *usable* solutions exist: stamps, coins, and people also need $x,y \ge 0$, which you enforce by clipping $t$, not by any gcd test. *([2.3](lessons/02-03-linear-diophantine-equations.md))*
- The step is $+b/d$ in $x$ and $-a/d$ in $y$ — note the swap, the sign flip, **and** the division by $d$. *([2.3](lessons/02-03-linear-diophantine-equations.md))*
- The triple formula produces **primitive** triples only; pull out $\gcd(a,b,c)$ first, and keep the opposite-parity rule or you just re-emit doubled copies. *([5.1](lessons/05-01-pythagorean-triples.md))*
- Pell has infinitely many solutions, and the fundamental one can be astronomically large — search fails where the continued fraction succeeds. $D$ must be non-square, and the $-1$ version is a different equation that may have no solutions at all. *([5.2](lessons/05-02-pell-equation-and-continued-fractions.md))*

### Primality and RSA

- Passing the Fermat test proves nothing; only a *failing* base is conclusive, and it conclusively says composite. *([5.3](lessons/05-03-primality-testing.md))*
- Trying more bases does not eventually crack every composite — Carmichael numbers pass for all coprime bases. Upgrade to Miller–Rabin. *([5.3](lessons/05-03-primality-testing.md))*
- Miller–Rabin's error is one-sided: it never calls a prime composite; only its "probably prime" verdict carries risk. *([5.3](lessons/05-03-primality-testing.md))*
- In RSA, $m$ and $c$ live mod $n$ while $e$ and $d$ live mod $\varphi(n)$ — two moduli in one system. *([5.4](lessons/05-04-the-rsa-cryptosystem.md))*
- Decryption is exact for **every** message, not only those coprime to $n$ — the CRT patch covers the rest. *([5.4](lessons/05-04-the-rsa-cryptosystem.md))*
- Publishing $\varphi(n)$ is fatal, not harmless: it yields $d$ and the factorization immediately. *([5.4](lessons/05-04-the-rsa-cryptosystem.md))*

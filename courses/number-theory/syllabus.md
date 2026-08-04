# Number Theory — Syllabus

> Mathematics · Tier 1 · ~19 lessons · Prereqs: [proofs-primer](../proofs-primer/syllabus.md) · Roadmap id: `number-theory`

## Goal

Number theory is the study of the plain integers — divisibility, primes, and the arithmetic of remainders — and it repays a proof-fluent reader with results that are both beautiful and, through RSA, load-bearing for the modern internet. By the end you can factor and prove uniqueness, solve congruences, wield Fermat / Euler / the Chinese Remainder Theorem, evaluate any Legendre symbol by quadratic reciprocity, and build a working toy RSA keypair. Deliberately skipped: the analytic machinery behind the Prime Number Theorem (we *state* it, we don't prove it), algebraic number theory's rings of integers, and elliptic curves beyond a passing mention — those wait for later courses. The unit group $(\mathbb{Z}/n\mathbb{Z})^\times$ you meet here is your first honest group, the bridge into [abstract-algebra](../abstract-algebra/syllabus.md); the RSA finale is the bridge into cryptography and [information-theory](../information-theory/syllabus.md).

## Dangerous Checklist

When you finish, you can:

- [ ] Compute $\gcd(a,b)$ with the Euclidean algorithm and write it as $ax+by$ (Bézout), by hand
- [ ] Factor an integer into primes and justify uniqueness using Euclid's lemma
- [ ] Prove there are infinitely many primes, and state precisely what the Prime Number Theorem does and does not promise
- [ ] Solve a linear congruence $ax\equiv b\ (\mathrm{mod}\ n)$ — and say up front whether it has $0$, $1$, or several solutions
- [ ] Solve simultaneous congruences with the Chinese Remainder Theorem and return the smallest positive answer
- [ ] Reduce an astronomically large power modulo $n$ using Fermat's and Euler's theorems
- [ ] Compute $\varphi(n)$, find the multiplicative order of a unit, and decide whether a modulus has a primitive root
- [ ] Evaluate a Legendre symbol via quadratic reciprocity to decide whether $x^2\equiv a\ (\mathrm{mod}\ p)$ is solvable
- [ ] Compute $\tau(n)$ and $\sigma(n)$ using multiplicativity, and run a Möbius inversion
- [ ] Generate all primitive Pythagorean triples and find the fundamental solution of a Pell equation
- [ ] Screen a large number for primality with the Fermat / Miller–Rabin test, and explain why Carmichael numbers fool the naive test
- [ ] Build a toy RSA keypair, encrypt and decrypt a message, and explain why its security rests on the hardness of factoring

## Modules

### Module 1: Divisibility and primes

The foundations: when one integer divides another, how to compute gcds fast, and why every integer factors into primes in exactly one way.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Divisibility and the division algorithm | Manipulate $a\mid b$ fluently and produce the unique quotient and remainder | $a\mid b$, division algorithm $a=bq+r$ with $0\le r<b$, $\gcd$ and $\mathrm{lcm}$ definitions |
| 1.2 | The Euclidean algorithm and Bézout | Compute $\gcd(a,b)$ in a few steps and write it as $ax+by$ | Euclidean algorithm, back-substitution, Bézout's identity, coprimality |
| 1.3 | Primes and the Fundamental Theorem of Arithmetic | Factor uniquely and use $p\mid ab \Rightarrow p\mid a$ or $p\mid b$ | prime vs. composite, Euclid's lemma, FTA (existence + uniqueness), factoring gcd/lcm |
| 1.4 | Counting the primes | Prove the primes are infinite and read the Prime Number Theorem honestly | Euclid's proof, trial division to $\sqrt n$, $\pi(x)$, PNT $\pi(x)\sim x/\ln x$ (stated, not proved), prime gaps |

**Boss problem 1:** Prove that every composite $n$ has a prime factor $\le \sqrt n$. Use it to certify that $211$ is prime by trial division (list exactly which primes you must test and why you may stop). Then compute $\gcd(1071,462)$ with the Euclidean algorithm and, by back-substitution, produce integers $x,y$ with $1071x+462y=\gcd(1071,462)$. *(Worked answer: the tested primes are $2,3,5,7,11,13$; $\gcd=21=7\cdot462-3\cdot1071$.)*

### Module 2: Congruences and the Chinese Remainder Theorem

Arithmetic where only remainders matter. This is the engine room for everything that follows.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Congruences: arithmetic modulo $n$ | Add, multiply, and reduce in $\mathbb{Z}/n\mathbb{Z}$ and know when cancellation is legal | $a\equiv b\ (\mathrm{mod}\ n)$, residue classes, well-defined $+,\times$, the cancellation caveat |
| 2.2 | Linear congruences and modular inverses | Solve $ax\equiv b\ (\mathrm{mod}\ n)$ and invert a unit | modular inverse, unit, solvability iff $\gcd(a,n)\mid b$, number of solutions |
| 2.3 | Linear Diophantine equations | Find *all* integer solutions of $ax+by=c$ | solvability iff $\gcd(a,b)\mid c$, one particular + homogeneous solution, the parametrized family |
| 2.4 | The Chinese Remainder Theorem | Stitch congruences with coprime moduli into a single one | CRT, pairwise-coprime moduli, constructive solution, $\mathbb{Z}/mn\cong\mathbb{Z}/m\times\mathbb{Z}/n$ |

**Boss problem 2:** Find the smallest positive integer that leaves remainder $1$ modulo $4$, $2$ modulo $5$, and $3$ modulo $7$. Prove your answer is the unique solution modulo $140$, and point to the exact step in your argument that needs the moduli to be pairwise coprime. *(Worked answer: $x\equiv 17\ (\mathrm{mod}\ 140)$; smallest positive is $17$.)*

### Module 3: The multiplicative group modulo $n$

The heart of the course: the units mod $n$ form a group, and its arithmetic (Fermat, Euler, order, primitive roots) powers both reciprocity and RSA. This is the concrete rehearsal for [abstract-algebra](../abstract-algebra/syllabus.md).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Fermat's little theorem | Collapse a huge power mod a prime in one line | $a^{p}\equiv a\ (\mathrm{mod}\ p)$, $a^{p-1}\equiv1$ for $p\nmid a$, two proofs (induction; rearranging residues) |
| 3.2 | Euler's totient and Euler's theorem | Count the units and extend Fermat to any modulus | $\varphi(n)$, its multiplicativity, $\varphi(p^k)$, Euler's theorem $a^{\varphi(n)}\equiv1$ for units |
| 3.3 | Order and the group $(\mathbb{Z}/n\mathbb{Z})^\times$ | Find the order of a unit and exploit "order divides $\varphi(n)$" | multiplicative order $\mathrm{ord}_n(a)$, $\mathrm{ord}_n(a)\mid\varphi(n)$, the group of units, fast modular exponentiation |
| 3.4 | Primitive roots | Decide when a generator exists and read off a discrete logarithm | primitive root, cyclic group, existence mod $p$, which $n$ have one ($2,4,p^k,2p^k$), index/discrete log |

**Boss problem 3:** Compute $7^{222} \bmod 100$ two ways — first by reducing the exponent with Euler's theorem ($\varphi(100)=40$), then by finding the *true* order of $7$ modulo $100$. Reconcile the two reductions, state $\mathrm{ord}_{100}(7)$, and say whether $7$ is a primitive root mod $100$ (and whether $100$ has one *at all*). *(Worked answer: $7^{222}\equiv49$; $\mathrm{ord}_{100}(7)=4$, which properly divides $40$; $100=4\cdot25$ has no primitive root.)*

### Module 4: Multiplicative functions and quadratic reciprocity

One theme — *multiplicativity* — ties together the counting functions $\tau,\sigma,\mu$ and the Legendre symbol, and pays off in the crown jewel of elementary number theory.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Arithmetic functions and Möbius inversion | Compute $\tau,\sigma$ by multiplicativity and invert a summatory relation | arithmetic / multiplicative function, $\tau,\sigma$, Möbius $\mu$, $\sum_{d\mid n}\mu(d)$, Möbius inversion |
| 4.2 | Quadratic residues and the Legendre symbol | Decide solvability of $x^2\equiv a\ (\mathrm{mod}\ p)$ and use $(a/p)$'s multiplicativity | quadratic residue, Legendre symbol $\left(\tfrac{a}{p}\right)$, Euler's criterion $a^{(p-1)/2}\equiv\left(\tfrac{a}{p}\right)$ |
| 4.3 | Gauss's lemma and quadratic reciprocity | Flip $\left(\tfrac{p}{q}\right)$ to evaluate any Legendre symbol quickly | Gauss's lemma (sketch), supplements $\left(\tfrac{-1}{p}\right),\left(\tfrac{2}{p}\right)$, the law of quadratic reciprocity |

**Boss problem 4:** Decide whether $x^2\equiv 42\ (\mathrm{mod}\ 61)$ has a solution by evaluating the Legendre symbol $\left(\tfrac{42}{61}\right)$ with quadratic reciprocity and its supplements — show every flip. Then, using multiplicativity only, compute $\sigma(360)$. *(Worked answer: $\left(\tfrac{42}{61}\right)=+1$, so it is solvable; $\sigma(360)=15\cdot13\cdot6=1170$.)*

### Module 5: Diophantine equations and cryptography

Where the machinery meets famous equations and the algorithm that guards your bank login. The finale connects to [information-theory](../information-theory/syllabus.md).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Pythagorean triples | Generate every primitive triple and prove the parametrization is complete | primitive Pythagorean triples, $(m^2-n^2,\,2mn,\,m^2+n^2)$, coprimality/parity, rational points on the unit circle |
| 5.2 | Pell's equation and continued fractions | Find the fundamental solution and manufacture the rest | Pell $x^2-Dy^2=1$, continued fraction of $\sqrt D$ (light), fundamental solution, powers $(x+y\sqrt D)^k$ |
| 5.3 | Primality testing | Screen a large number for primality without factoring it | Fermat primality test, pseudoprimes, Carmichael numbers, Miller–Rabin idea, probabilistic vs. deterministic |
| 5.4 | The RSA cryptosystem | Build keys, encrypt, decrypt, and see exactly where the security lives | RSA, public/private key, $ed\equiv1\ (\mathrm{mod}\ \varphi(n))$, correctness via Euler's theorem, hardness of factoring $n=pq$ |

**Boss problem 5:** Set up a toy RSA with primes $p=11,\ q=13$ (so $n=143$) and public exponent $e=7$. Compute $\varphi(n)$, find the private exponent $d=e^{-1}\bmod\varphi(n)$, and encrypt the message $m=9$; then confirm decryption returns $9$. Finally, verify that $(3,2)$ is the fundamental solution of $x^2-2y^2=1$ and use it to produce the next solution. *(Worked answer: $\varphi(143)=120$, $d=103$, ciphertext $c=48$; next Pell solution $(17,12)$ from $(3+2\sqrt2)^2=17+12\sqrt2$.)*

## Sources of truth

- Niven, Zuckerman & Montgomery, *An Introduction to the Theory of Numbers* — rigor level and notation.
- Silverman, *A Friendly Introduction to Number Theory* — intuition-first exposition and worked examples.
- Hardy & Wright, *An Introduction to the Theory of Numbers* — classical results and the Prime Number Theorem statement.
- Ireland & Rosen, *A Classical Introduction to Modern Number Theory* — Legendre symbol / reciprocity conventions and the algebraic bridge.

<!-- 2026-08-04: 19 lessons across 5 modules (target ~16); the extra breadth keeps quadratic reciprocity and the RSA/primality material from being crammed. -->

# Number Theory · Lesson 4.2: Quadratic residues and the Legendre symbol

> ⏱ ~15 min · Module 4: Multiplicative functions and quadratic reciprocity · Builds on: 3.1 (Fermat's little theorem) · Unlocks: 4.3 (Gauss's lemma and quadratic reciprocity)

## Why this matters

You already know how to solve *linear* congruences $ax\equiv b\pmod p$. The obvious next question — when does $x^2\equiv a\pmod p$ have a solution? — turns out to be deep, beautiful, and load-bearing. It's the gateway to quadratic reciprocity (next lesson, the crown jewel of elementary number theory) and to a whole family of cryptographic schemes whose security rests on the fact that deciding "is $a$ a square mod $n$?" is *easy* when you know the factorization of $n$ and *hard* when you don't. The Legendre symbol is the compact bookkeeping device that makes all of this computable.

## The idea

Fix an odd prime $p$. Some nonzero residues are perfect squares mod $p$ and some aren't. Call $a$ a **quadratic residue (QR)** if $x^2\equiv a\pmod p$ has a solution, and a **non-residue** otherwise. Here's the key intuition: squaring pairs up the units. Since $x$ and $-x$ have the *same* square (and $x\not\equiv -x$ when $p$ is odd), the squaring map is exactly two-to-one onto its image. So of the $p-1$ nonzero residues, exactly half — $(p-1)/2$ — are squares, and the other half aren't. Squares are a rare, structured minority: precisely one in two.

The **Legendre symbol** $\left(\frac{a}{p}\right)$ is just a $\pm 1$ flag for "is $a$ a square?", and its one magical property is that it's **multiplicative**: the flag for a product is the product of the flags. That lets you break any number into prime factors and read off its square-ness factor by factor — the same divide-and-conquer that made $\tau$ and $\sigma$ tractable in 4.1.

## The formal version

Let $p$ be an odd prime and $a$ an integer. The **Legendre symbol** is

$$\left(\frac{a}{p}\right)=\begin{cases}+1 & \text{if } p\nmid a \text{ and } a \text{ is a quadratic residue mod } p,\\ -1 & \text{if } a \text{ is a quadratic non-residue mod } p,\\ \;\;0 & \text{if } p\mid a.\end{cases}$$

In words: $+1$ means "$a$ is a nonzero square mod $p$," $-1$ means "$a$ is a nonzero non-square," and $0$ is the degenerate case $a\equiv 0$.

**Count.** Among the $p-1$ units, exactly $(p-1)/2$ have symbol $+1$ and $(p-1)/2$ have symbol $-1$.

**Multiplicativity.**
$$\left(\frac{ab}{p}\right)=\left(\frac{a}{p}\right)\left(\frac{b}{p}\right).$$
In words: QR $\times$ QR = QR, non-residue $\times$ non-residue = QR, and QR $\times$ non-residue = non-residue — the sign rule of multiplication. (Squares form an index-2 subgroup of the units; the symbol is the group homomorphism onto $\{\pm 1\}$ with that subgroup as kernel.)

**Euler's criterion.** For $p\nmid a$,
$$\left(\frac{a}{p}\right)\equiv a^{(p-1)/2}\pmod{p}.$$
In words: raise $a$ to the half-power $(p-1)/2$; the result is congruent to exactly $+1$ or $-1$, and that sign *is* the Legendre symbol. This is the computational engine, and it comes straight out of Fermat.

*Why it's true (from Lesson 3.1).* Fermat's little theorem says $a^{p-1}\equiv 1\pmod p$ for a unit $a$. Factor: $\big(a^{(p-1)/2}-1\big)\big(a^{(p-1)/2}+1\big)\equiv 0\pmod p$. Since $p$ is prime, $a^{(p-1)/2}\equiv \pm 1$. Now if $a\equiv x^2$ is a residue, then $a^{(p-1)/2}\equiv x^{p-1}\equiv 1$ by Fermat — so squares give $+1$. That accounts for all $(p-1)/2$ residues as roots of $t^{(p-1)/2}-1\equiv 0$, a polynomial of degree $(p-1)/2$ with at most that many roots. So the residues are *exactly* the $+1$ cases, and every non-residue must land on $-1$. $\blacksquare$

**First supplement.** Setting $a=-1$ in Euler's criterion:
$$\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}=\begin{cases}+1 & p\equiv 1\pmod 4,\\ -1 & p\equiv 3\pmod 4.\end{cases}$$
In words: $-1$ is a square mod $p$ exactly when $p$ leaves remainder $1$ on division by $4$. (Both sides are $\pm1$ and congruent mod the odd prime $p$, so they're *equal*, not just congruent — a move worth remembering.)

## Concrete instance

Take $p=7$. Square the units $1,\dots,6$ and reduce mod $7$:

$$1^2\equiv 1,\quad 2^2\equiv 4,\quad 3^2\equiv 2,\quad 4^2\equiv 2,\quad 5^2\equiv 4,\quad 6^2\equiv 1.$$

The list repeats in a palindrome (because $k$ and $7-k$ share a square), and the distinct values are

$$\text{QRs mod } 7:\ \{1,2,4\},\qquad \text{non-residues:}\ \{3,5,6\}.$$

Exactly $(7-1)/2=3$ of each — as promised.

Now a case you *can't* read off by eye: **is $3$ a quadratic residue mod $7$?** Apply Euler's criterion with $a=3$, $(p-1)/2=3$:

$$3^{3}=27\equiv 27-21=6\equiv -1\pmod 7\quad\Longrightarrow\quad \left(\frac{3}{7}\right)=-1.$$

So $3$ is a **non-residue** — no $x$ satisfies $x^2\equiv 3\pmod 7$. And indeed $3\notin\{1,2,4\}$. The criterion decided it with one exponentiation, no table needed.

## Worked examples

**Example 1 (mechanical — Euler's criterion).** Is $5$ a square mod $7$? Compute
$$5^{3}=125\equiv 125-119=6\equiv -1\pmod 7\ \Rightarrow\ \left(\tfrac{5}{7}\right)=-1.$$
Non-residue — consistent with $5\in\{3,5,6\}$. Notice you never had to find a square root or fail to; the half-power settles it outright.

**Example 2 (why you'd care — multiplicativity).** Evaluate $\left(\frac{6}{7}\right)$ *without* a fresh computation, by factoring $6=2\cdot 3$:
$$\left(\frac{6}{7}\right)=\left(\frac{2}{7}\right)\left(\frac{3}{7}\right).$$
From the table $2$ is a QR, so $\left(\tfrac{2}{7}\right)=+1$; we just found $\left(\tfrac{3}{7}\right)=-1$. Hence $\left(\tfrac{6}{7}\right)=(+1)(-1)=-1$, so $6$ is a non-residue — matching $6\in\{3,5,6\}$. This is the whole game plan for big numbers: factor into primes, evaluate each small symbol, multiply the signs. Next lesson, quadratic reciprocity lets you *flip* each $\left(\tfrac{q}{p}\right)$ into an easier $\left(\tfrac{p}{q}\right)$, so even large primes fall in a few strokes.

## Watch out

- **You might think $-1$ is never a square mod $p$** (after all, "you can't square a real number to get a negative"). But mod $p$ there's no order — $\left(\tfrac{-1}{p}\right)=+1$ whenever $p\equiv 1\pmod 4$. E.g. mod $13$, $5^2=25\equiv -1$. Real-number intuition does not transfer.
- **The product rule flips your expectation for non-residues.** Non-residue $\times$ non-residue is a *residue*, not a non-residue: the signs multiply, they don't "stay bad." $(-1)(-1)=+1$.
- **Euler's criterion gives a congruence; upgrade it to equality carefully.** $a^{(p-1)/2}$ is some number mod $p$; you're claiming it equals $\pm 1$. That's legitimate because the two candidate values $+1,-1$ are distinct mod the odd prime $p$ — so a residue congruent to one of them *is* that one. This "$\pm 1$ are distinguishable because $p$ is odd" step is exactly why $p=2$ is excluded from the whole theory.

## One-liner

> Exactly half the units mod an odd prime are squares; the Legendre symbol is their $\pm 1$ ID card, it multiplies like signs, and $a^{(p-1)/2}$ prints it on demand.

## Problems

**P1 (🟢)** By squaring the units $1,\dots,10$, list the quadratic residues mod $11$. Then use Euler's criterion to confirm whether $5$ is a QR mod $11$ (compute $5^{5}\bmod 11$).

**P2 (🟡)** Use the first supplement to decide, for each of $p=11$ and $p=13$, whether $x^2\equiv -1\pmod p$ has a solution. For whichever prime does, *exhibit* an explicit solution $x$.

**P3 (🔴, optional)** Prove the multiplicativity of the Legendre symbol, $\left(\frac{ab}{p}\right)=\left(\frac{a}{p}\right)\left(\frac{b}{p}\right)$, directly from Euler's criterion. (Handle the case $p\mid ab$ too.)

<details>
<summary>Solutions</summary>

**P1** Square and reduce mod $11$:
$$1,4,9,16\!\equiv\!5,25\!\equiv\!3,36\!\equiv\!3,49\!\equiv\!5,64\!\equiv\!9,81\!\equiv\!4,100\!\equiv\!1.$$
Distinct values: $\boxed{\{1,3,4,5,9\}}$ — exactly $(11-1)/2=5$ residues. Since $5$ appears (e.g. $4^2\equiv 5$), it should be a QR. Check by Euler: $5^2=25\equiv 3$, so $5^4\equiv 3^2=9$, and $5^5\equiv 9\cdot 5=45\equiv 1\pmod{11}$. Thus $\left(\tfrac{5}{11}\right)=+1$ — a residue, as expected.

**P2** First supplement: $\left(\tfrac{-1}{p}\right)=(-1)^{(p-1)/2}$.
- $p=11$: $(11-1)/2=5$, so $(-1)^5=-1$. No solution ($11\equiv 3\bmod 4$).
- $p=13$: $(13-1)/2=6$, so $(-1)^6=+1$. Solvable ($13\equiv 1\bmod 4$). Find $x$: test $5^2=25\equiv -1\pmod{13}$. So $\boxed{x\equiv \pm 5}$ (i.e. $5$ or $8$) solves $x^2\equiv -1\pmod{13}$.

**P3** Assume first $p\nmid ab$, so $p\nmid a$ and $p\nmid b$ (both units). By Euler's criterion,
$$\left(\frac{ab}{p}\right)\equiv (ab)^{(p-1)/2}=a^{(p-1)/2}\,b^{(p-1)/2}\equiv \left(\frac{a}{p}\right)\left(\frac{b}{p}\right)\pmod p.$$
Both sides lie in $\{+1,-1\}$, and they're congruent mod $p$. The two possible values differ by $2$, which is not divisible by the odd prime $p$, so $+1\not\equiv -1\pmod p$ — congruent elements of $\{\pm 1\}$ must therefore be *equal*. Hence $\left(\frac{ab}{p}\right)=\left(\frac{a}{p}\right)\left(\frac{b}{p}\right)$.

If instead $p\mid ab$, then (as $p$ is prime) $p\mid a$ or $p\mid b$, so at least one factor's symbol is $0$; and $p\mid ab$ makes the left side $0$ as well. Both sides equal $0$. $\blacksquare$

</details>

## Flashback

**From Lesson 3.1 (Fermat's little theorem):** Compute $2^{1000}\bmod 13$.

<details>
<summary>Solution</summary>

$13$ is prime and $13\nmid 2$, so Fermat gives $2^{12}\equiv 1\pmod{13}$ — the exponent lives mod $12$. Divide: $1000=12\cdot 83+4$. Therefore
$$2^{1000}=\big(2^{12}\big)^{83}\cdot 2^{4}\equiv 1^{83}\cdot 16\equiv 16\equiv \boxed{3}\pmod{13}.$$
The whole point: Fermat lets you throw away $996$ of the $1000$ multiplications by reducing the exponent modulo $p-1$.

</details>

## Connections

- **Backward:** Euler's criterion is Fermat's little theorem (3.1) with one extra factoring step — $a^{p-1}-1=(a^{(p-1)/2}-1)(a^{(p-1)/2}+1)$ — so this lesson is 3.1 pushed one level deeper. Multiplicativity is the same divide-and-conquer that powered $\tau,\sigma$ in 4.1.
- **Forward:** Lesson 4.3 (Gauss's lemma and quadratic reciprocity) turns the symbol from *computable in principle* into *computable fast*: reciprocity lets you flip $\left(\tfrac{q}{p}\right)\leftrightarrow\left(\tfrac{p}{q}\right)$, shrinking the top until it factors into the supplements you now have. Boss problem 4 is exactly this pipeline.
- **Sideways (abstract-algebra):** the quadratic residues form an **index-2 subgroup** of the unit group $(\mathbb{Z}/p\mathbb{Z})^\times$, and $\left(\tfrac{\cdot}{p}\right)$ is the quotient homomorphism onto $\{\pm 1\}$ — your first concrete character, previewing `abstract-algebra`.
- **Sideways (cryptography):** "is $a$ a square mod $n$?" is easy given $n$'s factorization and believed hard without it — the quadratic-residuosity assumption behind Goldwasser–Micali encryption and related schemes, downstream of the RSA finale in Module 5.

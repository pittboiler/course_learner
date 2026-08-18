# Number Theory · Lesson 4.3: Gauss's lemma and quadratic reciprocity

> ⏱ ~15 min · Module 4: Multiplicative functions and quadratic reciprocity · Builds on: 4.2 (quadratic residues and the Legendre symbol) · Unlocks: 5.1 (Pythagorean triples)

## Why this matters

In 4.2 you learned to *ask* whether $x^2\equiv a\ (\mathrm{mod}\ p)$ has a solution, and to answer it with Euler's criterion — raising $a$ to the $(p-1)/2$ power. That works, but for a big prime it's real labor. Quadratic reciprocity is the shortcut Gauss called his *theorema aureum* (golden theorem): it lets you evaluate any Legendre symbol by a handful of flips and reductions, no exponentiation. It's the deepest elementary fact about the integers, the seed of all of class field theory, and it's exactly what you invoke when deciding which residues are "safe" in a cryptographic modulus.

## The idea

Here's the shocking part, stated in plain English. Pick two odd primes $p$ and $q$. You want to know: is $p$ a square mod $q$? Reciprocity says that question is *almost the same question* as: is $q$ a square mod $p$? The two Legendre symbols $\left(\frac{p}{q}\right)$ and $\left(\frac{q}{p}\right)$ are either equal or exact opposites — and which one happens depends only on whether $p$ and $q$ are $\equiv 1$ or $\equiv 3 \pmod 4$. They disagree in only one case: when **both** primes are $\equiv 3\pmod 4$. Otherwise they agree.

Why is that useful? Because $\left(\frac{p}{q}\right)$ has a *big* number on top ($p$) sitting over a modulus $q$, and you can't reduce $p$ yet. But after flipping to $\left(\frac{q}{p}\right)$, you now reduce $q$ mod $p$ — shrinking it — factor the result, and flip again. Each round the numbers get smaller. It's the Euclidean algorithm wearing a new hat: reduce, factor, flip, repeat, until the top is $-1$ or $2$ (handled by the supplements) and you read off the sign.

## The formal version

Let $p,q$ be **distinct odd primes**. Write $\left(\frac{a}{p}\right)$ for the Legendre symbol from 4.2: $+1$ if $a$ is a nonzero square mod $p$, $-1$ if a non-square, $0$ if $p\mid a$.

**Gauss's lemma.** Fix an odd prime $p$ and an $a$ coprime to $p$. List the multiples $a, 2a, 3a, \dots, \tfrac{p-1}{2}a$, reduce each to its least residue in $\{1,\dots,p-1\}$, and let $\mu$ be how many of those residues exceed $p/2$. Then
$$\left(\frac{a}{p}\right) = (-1)^{\mu}.$$
*In words:* march the first half of the multiples of $a$ around the clock; the symbol's sign is just the parity of how many landed in the "top half." (Sketch of why: each least residue in the top half, $r$, can be written as $p-r'$ with $r'$ in the bottom half; matching the $\pm$ signs across all $\tfrac{p-1}{2}$ multiples shows the product $a^{(p-1)/2}\cdot\tfrac{p-1}{2}!$ equals $(-1)^\mu\cdot\tfrac{p-1}{2}!$, and cancelling the factorial with Euler's criterion gives $(-1)^\mu$.)

**The two supplements** (the cases the flip can't reach, derived directly from Gauss's lemma):
$$\left(\frac{-1}{p}\right) = (-1)^{(p-1)/2} = \begin{cases} +1 & p\equiv 1 \pmod 4\\ -1 & p\equiv 3 \pmod 4\end{cases}$$
*In words:* $-1$ is a square mod $p$ exactly when $p\equiv 1\pmod 4$.
$$\left(\frac{2}{p}\right) = (-1)^{(p^2-1)/8} = \begin{cases} +1 & p\equiv \pm 1 \pmod 8\\ -1 & p\equiv \pm 3 \pmod 8\end{cases}$$
*In words:* $2$ is a square mod $p$ exactly when $p$ is $\equiv 1$ or $7 \pmod 8$.

**The law of quadratic reciprocity.**
$$\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}.$$
*In words:* the two symbols are equal unless both $p\equiv 3$ and $q\equiv 3\pmod 4$, in which case they're opposite. Rearranged for computing, since each symbol is $\pm 1$:
$$\left(\frac{p}{q}\right) = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}\left(\frac{q}{p}\right).$$

## Concrete instance

Let's evaluate $\left(\frac{7}{11}\right)$ end to end — is $7$ a square mod $11$?

Both $7$ and $11$ are $\equiv 3 \pmod 4$ (since $7=4\cdot1+3$, $11=4\cdot2+3$). Both $\equiv 3\pmod 4$ is the one case where the symbols **disagree**, so
$$\left(\frac{7}{11}\right) = -\left(\frac{11}{7}\right).$$
Now reduce the top mod the bottom: $11\equiv 4 \pmod 7$, so
$$\left(\frac{11}{7}\right) = \left(\frac{4}{7}\right).$$
And $4 = 2^2$ is a perfect square, so $\left(\frac{4}{7}\right) = +1$ outright (a square is a residue mod anything coprime to it). Therefore
$$\left(\frac{7}{11}\right) = -(+1) = -1.$$
**Not solvable:** $x^2\equiv 7\pmod{11}$ has no solution. (Check by brute force: the squares mod $11$ are $1,4,9,5,3$ — indeed $7$ isn't among them.)

## Worked examples

**Example 1 (mechanical — a single flip with a supplement).** Evaluate $\left(\frac{3}{p}\right)$ for $p=13$.

$3$ and $13$: here $13\equiv 1\pmod 4$, so at least one prime is $\equiv 1\pmod 4$ and the symbols **agree**:
$$\left(\frac{3}{13}\right) = \left(\frac{13}{3}\right).$$
Reduce: $13\equiv 1\pmod 3$, so $\left(\frac{13}{3}\right)=\left(\frac{1}{3}\right)=+1$. So $3$ is a square mod $13$ — indeed $4^2=16\equiv 3$. Done in one flip.

**Example 2 (why you'd care — a multi-flip evaluation).** Is $x^2 \equiv 30 \pmod{53}$ solvable? Evaluate $\left(\frac{30}{53}\right)$. ($53$ is prime.)

Factor the top and use multiplicativity (from 4.2): $30 = 2\cdot 3\cdot 5$, so
$$\left(\frac{30}{53}\right) = \left(\frac{2}{53}\right)\left(\frac{3}{53}\right)\left(\frac{5}{53}\right).$$

*The $2$:* $53 = 6\cdot 8 + 5$, so $53\equiv 5\pmod 8$, which is $\equiv -3$. The supplement gives $\left(\frac{2}{53}\right) = -1$.

*The $3$:* $53\equiv 1\pmod 4$, so the symbols agree: $\left(\frac{3}{53}\right)=\left(\frac{53}{3}\right)$. Reduce: $53\equiv 2\pmod 3$, so $\left(\frac{53}{3}\right)=\left(\frac{2}{3}\right)$. Apply the $2$-supplement with $p=3\equiv 3\pmod 8$: $\left(\frac{2}{3}\right)=-1$. So $\left(\frac{3}{53}\right)=-1$.

*The $5$:* $5\equiv 1\pmod 4$, so the symbols agree: $\left(\frac{5}{53}\right)=\left(\frac{53}{5}\right)$. Reduce: $53\equiv 3\pmod 5$, so $=\left(\frac{3}{5}\right)$. The squares mod $5$ are $1,4$, so $3$ is a non-residue: $\left(\frac{3}{5}\right)=-1$. So $\left(\frac{5}{53}\right)=-1$.

Multiply the three signs:
$$\left(\frac{30}{53}\right) = (-1)(-1)(-1) = -1.$$
**Not solvable.** Notice what happened: no exponentiation, just reductions and flips. Euler's criterion would have asked you to compute $30^{26}\bmod 53$ — reciprocity replaces that with schoolbook arithmetic.

## Watch out

- **You might think you can flip $\left(\frac{a}{p}\right)$ for any $a$** — but reciprocity requires **both** arguments to be odd primes. If the top is composite, *factor first* and flip each prime factor separately. If a factor is $2$ or the sign $-1$, use a supplement — you can't "flip" those.
- **You might think the $\pmod 8$ classes for the $2$-supplement are $1$ and $3$** — it's $\pm 1$ (i.e. $1,7$) that give $+1$, and $\pm 3$ (i.e. $3,5$) that give $-1$. Reduce $p$ mod $8$, not mod $4$, for this one.
- **Don't drop a minus sign across a flip.** The reciprocity factor $(-1)^{\frac{p-1}{2}\frac{q-1}{2}}$ is $-1$ *only* when both primes are $\equiv 3\pmod 4$. Check that condition explicitly every flip; it's the single most common slip.
- **$\left(\frac{a}{p}\right)$ needs $a$ reduced mod $p$ but the *modulus* $p$ stays fixed** — reduce the top freely, never the bottom.

## One-liner

> Quadratic reciprocity is the Euclidean algorithm for Legendre symbols: reduce the top, factor it, flip $\left(\frac{p}{q}\right)\leftrightarrow\left(\frac{q}{p}\right)$ (with a sign only when both primes are $3\bmod 4$), and repeat until $-1$ or $2$ lets a supplement read off the answer.

## Problems

**P1 (🟢)** Evaluate $\left(\frac{5}{7}\right)$ using reciprocity, and confirm your answer against the list of squares mod $7$.

**P2 (🟡)** Decide whether $x^2 \equiv 46 \pmod{53}$ is solvable by evaluating $\left(\frac{46}{53}\right)$. (Reuse the pieces from Example 2 where you can.)

**P3 (🔴, optional)** Show that $\left(\frac{-1}{p}\right) = 1$ for $p=29$ and $\left(\frac{-1}{p}\right)=-1$ for $p=31$ using the supplement, then use the first to conclude *without any further computation* that if $a$ is a quadratic residue mod $29$ then so is $-a$. Explain in one sentence why this fails mod $31$.

<details>
<summary>Solutions</summary>

**P1** $5\equiv 1\pmod 4$, so the symbols agree: $\left(\frac{5}{7}\right)=\left(\frac{7}{5}\right)$. Reduce the top: $7\equiv 2\pmod 5$, so $=\left(\frac{2}{5}\right)$. Apply the $2$-supplement with $p=5\equiv 5\pmod 8$ (which is $\equiv -3$): $\left(\frac{2}{5}\right)=-1$. So $\left(\frac{5}{7}\right)=\boxed{-1}$. Check: squares mod $7$ are $1,4,2,2,4,1$, i.e. $\{1,2,4\}$; $5\notin\{1,2,4\}$, confirming non-residue. ✓

**P2** Factor: $46 = 2\cdot 23$, so $\left(\frac{46}{53}\right)=\left(\frac{2}{53}\right)\left(\frac{23}{53}\right)$.

From Example 2, $\left(\frac{2}{53}\right)=-1$ (since $53\equiv 5\pmod 8$).

For $\left(\frac{23}{53}\right)$: both $23$ and $53$ — check mod $4$: $23\equiv 3$, $53\equiv 1$. Not both $\equiv 3\pmod 4$, so symbols agree: $\left(\frac{23}{53}\right)=\left(\frac{53}{23}\right)$. Reduce: $53 = 2\cdot 23 + 7$, so $53\equiv 7\pmod{23}$, giving $\left(\frac{7}{23}\right)$. Flip again: $7\equiv 3\pmod 4$ **and** $23\equiv 3\pmod 4$ — both $\equiv 3$, so the symbols **disagree**: $\left(\frac{7}{23}\right)=-\left(\frac{23}{7}\right)$. Reduce: $23\equiv 2\pmod 7$, so $=-\left(\frac{2}{7}\right)$. Apply the $2$-supplement with $p=7\equiv 7\equiv -1\pmod 8$: $\left(\frac{2}{7}\right)=+1$. So $\left(\frac{7}{23}\right)=-(+1)=-1$, hence $\left(\frac{23}{53}\right)=-1$.

Combine: $\left(\frac{46}{53}\right)=(-1)(-1)=+1$. **Solvable.** ✓

**P3** $p=29$: $\frac{p-1}{2}=14$, even, so $\left(\frac{-1}{29}\right)=(-1)^{14}=+1$. (Consistent with $29\equiv 1\pmod 4$.) $p=31$: $\frac{p-1}{2}=15$, odd, so $\left(\frac{-1}{31}\right)=(-1)^{15}=-1$. (Consistent with $31\equiv 3\pmod 4$.)

Now suppose $a$ is a residue mod $29$, i.e. $\left(\frac{a}{29}\right)=+1$. By multiplicativity, $\left(\frac{-a}{29}\right)=\left(\frac{-1}{29}\right)\left(\frac{a}{29}\right)=(+1)(+1)=+1$, so $-a$ is also a residue. Mod $31$ this fails because $\left(\frac{-1}{31}\right)=-1$: negating a residue *flips* it to a non-residue, since $\left(\frac{-a}{31}\right)=(-1)\left(\frac{a}{31}\right)$.

</details>

## Flashback

**From Lesson 4.2 (Quadratic residues and the Legendre symbol):** Use Euler's criterion and the multiplicativity of the Legendre symbol to evaluate $\left(\frac{6}{11}\right)$ *without* reciprocity. Then confirm the sign directly with Euler's criterion by computing $6^{5}\bmod 11$.

<details>
<summary>Solution</summary>

By multiplicativity, $\left(\frac{6}{11}\right)=\left(\frac{2}{11}\right)\left(\frac{3}{11}\right)$. Compute each with Euler's criterion, exponent $\frac{11-1}{2}=5$.

$\left(\frac{2}{11}\right)$: $2^5 = 32 \equiv 32-22=10\equiv -1\pmod{11}$, so $\left(\frac{2}{11}\right)=-1$.

$\left(\frac{3}{11}\right)$: $3^5 = 243$. Reduce: $243 = 22\cdot 11 + 1$, so $3^5\equiv 1\pmod{11}$, giving $\left(\frac{3}{11}\right)=+1$.

So $\left(\frac{6}{11}\right)=(-1)(+1)=-1$: $6$ is a non-residue mod $11$.

Direct check: $6^5 = 6\cdot 6^4$. $6^2=36\equiv 3$, $6^4\equiv 3^2=9$, so $6^5\equiv 6\cdot 9 = 54\equiv 54-44=10\equiv -1\pmod{11}$. Euler's criterion returns $-1$, matching. ✓ (And indeed the squares mod $11$ are $\{1,3,4,5,9\}$, which excludes $6$.)

</details>

## Connections

- **Backward:** this is the payoff of 4.2 — Euler's criterion $a^{(p-1)/2}\equiv\left(\frac{a}{p}\right)$ *proves* Gauss's lemma and the supplements, and the symbol's multiplicativity is what lets you factor the top before flipping. Reciprocity turns that expensive exponentiation into cheap flips.
- **Forward:** Lesson 5.1 (Pythagorean triples) and the primality/RSA material in Module 5 lean on knowing which residues are squares; in `cryptography`, quadratic residuosity is itself a hardness assumption (deciding $\left(\frac{a}{n}\right)$ for composite $n=pq$ without the factorization underlies Goldwasser–Micali encryption and Blum–Blum–Shub).
- **Sideways (algebra):** reciprocity is the first case of a vast pattern. In `abstract-algebra` and algebraic number theory, the Legendre symbol becomes the Artin symbol and quadratic reciprocity becomes a statement about how primes split in $\mathbb{Q}(\sqrt{q})$; the general theorem — Artin reciprocity, the heart of class field theory — is the "higher reciprocity law" Gauss's golden theorem was the first glimpse of.

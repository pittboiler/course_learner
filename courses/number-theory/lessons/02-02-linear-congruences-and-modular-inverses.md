# Number Theory · Lesson 2.2: Linear congruences and modular inverses

> ⏱ ~15 min · Module 2: Congruences and the Chinese Remainder Theorem · Builds on: 1.2 (the Euclidean algorithm and Bézout) · Unlocks: 2.3 (linear Diophantine equations)

## Why this matters

Every "solve for $x$" you did in grade-school algebra secretly relied on dividing — and modular arithmetic doesn't let you divide freely. So the natural question "solve $ax\equiv b\pmod n$" turns out to have three possible answers: *no solutions, one, or several*, and which one you get is decided by a single gcd you already know how to compute. This is the exact machine that inverts the public exponent in RSA (Lesson 5.4), that CRT calls to stitch congruences together (Lesson 2.4), and that gives you your first "units" — the invertible elements — a preview of group theory in [abstract-algebra](../../abstract-algebra/syllabus.md).

## The idea

You want to undo multiplication modulo $n$. In ordinary arithmetic, to solve $7x = 1$ you multiply by $\tfrac17$. Modulo $n$ there are no fractions — but there can be a whole number that *acts* like $\tfrac17$: an integer $a^{-1}$ with $a\cdot a^{-1}\equiv 1\pmod n$. Call it the **modular inverse** of $a$. If it exists, solving $ax\equiv b$ is a one-liner: multiply both sides by $a^{-1}$.

When does such an inverse exist? Exactly when $a$ shares no factor with $n$ — when $\gcd(a,n)=1$. The intuition: Bézout (Lesson 1.2) hands you integers with $ax+ny=1$, and reading that equation modulo $n$ kills the $ny$ term and leaves $ax\equiv 1$. So that Bézout coefficient $x$ *is* the inverse. The gcd being $1$ isn't a technicality — it's the whole reason the inverse exists, delivered for free by the Euclidean algorithm.

And when $\gcd(a,n)>1$? Then $a$ has no inverse, but $ax\equiv b$ can still be solvable — provided $b$ carries that common factor too. It then splits into *several* solutions. One number, $\gcd(a,n)$, governs the entire story.

## The formal version

A **linear congruence** is $ax\equiv b\pmod n$, with $a,b,n$ given integers, $n\ge 1$, and $x$ the unknown residue. Write $d=\gcd(a,n)$.

**Solvability theorem.** $ax\equiv b\pmod n$ has a solution if and only if $d\mid b$. When it is solvable, there are exactly $d$ solutions modulo $n$ (i.e. $d$ distinct residue classes).

In words: the congruence is solvable exactly when the common factor of $a$ and $n$ also divides $b$ — and then the number of distinct answers mod $n$ is precisely that common factor.

**Modular inverse.** An integer $a$ has an inverse modulo $n$ — an $a^{-1}$ with $a\,a^{-1}\equiv 1\pmod n$ — if and only if $\gcd(a,n)=1$. Such an $a$ is called a **unit** modulo $n$. In words: you can "divide by $a$" mod $n$ exactly when $a$ is coprime to $n$.

*Why the inverse exists (from Bézout).* If $\gcd(a,n)=1$, Bézout gives integers $x,y$ with $ax+ny=1$. Reduce mod $n$: the $ny$ vanishes, so $ax\equiv 1\pmod n$, and $x=a^{-1}$. Conversely, if $a a^{-1}\equiv 1\pmod n$ then $a a^{-1}-1=nk$ for some $k$, i.e. $a a^{-1}-nk=1$, and any common divisor of $a$ and $n$ divides the left side, hence divides $1$ — so $\gcd(a,n)=1$.

*Why exactly $d$ solutions (the counting proof).* Suppose $d\mid b$. Divide through: let $a=d a'$, $b=d b'$, $n=d n'$, so that $\gcd(a',n')=1$. The congruence $ax\equiv b\pmod n$ says $n\mid (ax-b)$, i.e. $d n'\mid d(a'x-b')$, i.e. $n'\mid (a'x-b')$, i.e. $a'x\equiv b'\pmod{n'}$. Since $\gcd(a',n')=1$, $a'$ is a unit mod $n'$, so this reduced congruence has the **unique** solution $x\equiv (a')^{-1}b'\pmod{n'}$ — call it $x_0$. Now lift back to modulus $n$: the residues mod $n$ that are $\equiv x_0\pmod{n'}$ are exactly
$$x_0,\; x_0+n',\; x_0+2n',\; \dots,\; x_0+(d-1)n' \pmod n,$$
and there are $d$ of them (the next one, $x_0+dn'=x_0+n$, wraps back). Conversely, if $d\nmid b$ then $n'\mid(a'x-b')$ is unreachable because $ax-b$ is never divisible by $n$ — no solution. $\blacksquare$

## Concrete instance

**An invertible coefficient: find $7^{-1}\bmod 26$**, i.e. solve $7x\equiv 1\pmod{26}$.

Here $\gcd(7,26)=1$, so an inverse exists. Run the **extended Euclidean algorithm** to get Bézout coefficients for $7$ and $26$:

$$26 = 3\cdot 7 + 5,\qquad 7 = 1\cdot 5 + 2,\qquad 5 = 2\cdot 2 + 1,\qquad 2 = 2\cdot 1 + 0.$$

Back-substitute from the last nonzero remainder $1$:
$$1 = 5 - 2\cdot 2 = 5 - 2(7 - 1\cdot 5) = 3\cdot 5 - 2\cdot 7 = 3(26 - 3\cdot 7) - 2\cdot 7 = 3\cdot 26 - 11\cdot 7.$$

So $-11\cdot 7 + 3\cdot 26 = 1$. Reduce mod $26$: $\;-11\cdot 7\equiv 1\pmod{26}$, giving $7^{-1}\equiv -11\equiv 15\pmod{26}$. **Check:** $7\cdot 15 = 105 = 4\cdot 26 + 1\equiv 1\pmod{26}$. ✓

(This is not a toy: $26$ is the alphabet size, and $15=7^{-1}$ is exactly the multiplier that decrypts an affine cipher whose encryption multiplied by $7$.)

**A non-invertible coefficient: solve $6x\equiv 9\pmod{15}$.**

Now $d=\gcd(6,15)=3$. Since $3\mid 9$, it *is* solvable, and the theorem promises exactly $3$ solutions mod $15$. Divide through by $3$: $2x\equiv 3\pmod 5$. Here $\gcd(2,5)=1$, and $2^{-1}\equiv 3\pmod 5$ (since $2\cdot 3=6\equiv 1$), so $x\equiv 3\cdot 3 = 9\equiv 4\pmod 5$. Lift back to mod $15$ by adding $n'=5$ repeatedly:
$$x\equiv 4,\; 9,\; 14\pmod{15}.$$
**Check:** $6\cdot 4=24\equiv 9$, $6\cdot 9=54\equiv 9$, $6\cdot 14=84\equiv 9\pmod{15}$. ✓ Three solutions, exactly as $d=3$ predicted. (And $6x\equiv 8\pmod{15}$ would have *no* solution, since $3\nmid 8$.)

## Worked examples

**Example 1 (mechanical — invert, then multiply).** Solve $5x\equiv 3\pmod{12}$.

$\gcd(5,12)=1$, so there's a unique solution. Find $5^{-1}\bmod 12$: by inspection $5\cdot 5=25\equiv 1\pmod{12}$, so $5^{-1}\equiv 5$. Multiply the congruence by $5$:
$$x\equiv 5\cdot 3 = 15\equiv 3\pmod{12}.$$
**Check:** $5\cdot 3=15\equiv 3\pmod{12}$. ✓ The single solution is $x\equiv 3\pmod{12}$.

**Example 2 (why you'd care — the RSA move in miniature).** In RSA you publish an exponent $e$ and must find the private $d$ with $ed\equiv 1\pmod{\varphi(n)}$ — that $d$ is just $e^{-1}$ modulo $\varphi(n)$, computed by exactly this method. Miniature version: with $e=7$ and $\varphi(n)=40$, find $d=7^{-1}\bmod 40$.

Extended Euclid on $7,40$: $40=5\cdot 7+5$, $7=1\cdot 5+2$, $5=2\cdot 2+1$. Back-substitute:
$$1=5-2\cdot 2=5-2(7-5)=3\cdot 5-2\cdot 7=3(40-5\cdot 7)-2\cdot 7=3\cdot 40-17\cdot 7.$$
So $-17\cdot 7\equiv 1\pmod{40}$, giving $d\equiv -17\equiv 23\pmod{40}$. **Check:** $7\cdot 23=161=4\cdot 40+1\equiv 1\pmod{40}$. ✓ That "find the inverse of the exponent" step *is* the private-key computation of Lesson 5.4 — same algorithm, bigger modulus.

## Watch out

- You might think you can always "divide both sides by $a$" in a congruence. You can't — cancellation is legal only when $a$ is a unit, i.e. $\gcd(a,n)=1$. Dividing by a non-unit either loses solutions or invents them; instead, divide the *whole congruence including the modulus* by $d=\gcd(a,n)$, as in the concrete instance.
- You might think "$\gcd(a,n)>1$" means "no solutions." It only means "no *inverse*." The congruence is still solvable whenever $d\mid b$ — you just get $d$ solutions, not one. Solvability depends on $b$; invertibility of $a$ does not.
- You might report a Bézout coefficient like $-11$ as the inverse and leave it negative. That's correct but not yet a residue — reduce into $\{0,\dots,n-1\}$ ($-11\equiv 15\pmod{26}$), and *check* by multiplying, since a single sign slip in back-substitution is the most common error here.

## One-liner

> $ax\equiv b\pmod n$ is solvable iff $\gcd(a,n)\mid b$, then has exactly $\gcd(a,n)$ solutions — and when that gcd is $1$, the Bézout coefficient of $a$ is its inverse, so you just multiply through by $a^{-1}$.

## Problems

**P1 (🟢)** Find $11^{-1}\bmod 30$ using the extended Euclidean algorithm, then use it to solve $11x\equiv 7\pmod{30}$.

**P2 (🟡)** Solve $8x\equiv 6\pmod{14}$. First state how many solutions to expect and why, then list them all as residues mod $14$.

**P3 (🔴, optional)** For which residues $b\in\{0,1,\dots,17\}$ is $12x\equiv b\pmod{18}$ solvable, and how many solutions does each solvable case have? Justify with the theorem, and give the solution set for one solvable $b$ of your choice.

<details>
<summary>Solutions</summary>

**P1** $\gcd(11,30)=1$, so an inverse exists. Extended Euclid: $30=2\cdot 11+8$, $11=1\cdot 8+3$, $8=2\cdot 3+2$, $3=1\cdot 2+1$. Back-substitute:
$$1=3-2=3-(8-2\cdot 3)=3\cdot 3-8=3(11-8)-8=3\cdot 11-4\cdot 8=3\cdot 11-4(30-2\cdot 11)=11\cdot 11-4\cdot 30.$$
So $11\cdot 11\equiv 1\pmod{30}$, i.e. $11^{-1}\equiv 11\pmod{30}$ (it's self-inverse). Check: $11\cdot 11=121=4\cdot 30+1\equiv 1$. ✓ Then $x\equiv 11^{-1}\cdot 7\equiv 11\cdot 7=77\equiv 77-60=17\pmod{30}$. Check: $11\cdot 17=187=6\cdot 30+7\equiv 7\pmod{30}$. ✓ Solution: $x\equiv 17\pmod{30}$.

**P2** $d=\gcd(8,14)=2$. Since $2\mid 6$, it's solvable with exactly $d=2$ solutions mod $14$. Divide through by $2$: $4x\equiv 3\pmod 7$. Now $\gcd(4,7)=1$; $4^{-1}\equiv 2\pmod 7$ (since $4\cdot 2=8\equiv 1$), so $x\equiv 2\cdot 3=6\pmod 7$. Lift to mod $14$ by adding $n'=7$: $x\equiv 6,\,13\pmod{14}$. Check: $8\cdot 6=48\equiv 6$, $8\cdot 13=104=7\cdot 14+6\equiv 6\pmod{14}$. ✓

**P3** $d=\gcd(12,18)=6$. By the theorem, $12x\equiv b\pmod{18}$ is solvable iff $6\mid b$, and each solvable case has exactly $6$ solutions mod $18$. In $\{0,\dots,17\}$ the multiples of $6$ are $b\in\{0,6,12\}$ — those three values are solvable; all others are not. Take $b=6$: divide by $6$ to get $2x\equiv 1\pmod 3$; $2^{-1}\equiv 2\pmod 3$, so $x\equiv 2\cdot 1=2\pmod 3$. Lift to mod $18$ by adding $n'=3$ six times: $x\equiv 2,5,8,11,14,17\pmod{18}$. Check one: $12\cdot 5=60=3\cdot 18+6\equiv 6\pmod{18}$. ✓ Six solutions, as $d=6$ predicts.

</details>

## Flashback

**From Lesson 1.2 (The Euclidean algorithm and Bézout):** Compute $\gcd(84,33)$ with the Euclidean algorithm, and by back-substitution find integers $x,y$ with $84x+33y=\gcd(84,33)$.

<details>
<summary>Solution</summary>

Euclidean algorithm:
$$84=2\cdot 33+18,\qquad 33=1\cdot 18+15,\qquad 18=1\cdot 15+3,\qquad 15=5\cdot 3+0.$$
Last nonzero remainder: $\gcd(84,33)=3$. Back-substitute:
$$3=18-1\cdot 15=18-(33-18)=2\cdot 18-33=2(84-2\cdot 33)-33=2\cdot 84-5\cdot 33.$$
So $x=2,\ y=-5$: $\;84\cdot 2+33\cdot(-5)=168-165=3=\gcd(84,33)$. ✓

</details>

## Connections

- **Backward:** this is Bézout from Lesson 1.2 read modulo $n$ — the extended Euclidean algorithm that produced $ax+ny=\gcd$ is the *only* engine needed to invert a unit; nothing new was added but the reinterpretation.
- **Forward:** Lesson 2.3 is the same theorem in its "linear Diophantine" costume — $ax\equiv b\pmod n$ is exactly $ax+ny=b$ solved for $x$, so the solvability condition $\gcd(a,n)\mid b$ and the one-particular-plus-family structure carry straight over. Lesson 2.4 (CRT) uses these inverses to build its stitching coefficients, and Lesson 5.4 computes RSA's private key as $d=e^{-1}\bmod\varphi(n)$ by this exact method.
- **Sideways ([discrete-mathematics](../../discrete-mathematics/syllabus.md) & [abstract-algebra](../../abstract-algebra/syllabus.md)):** the units mod $n$ — the coprime residues — are precisely the invertible elements, and they form the group $(\mathbb{Z}/n\mathbb{Z})^\times$ you'll meet in Module 3. "Has an inverse" is the defining property of a group element; this lesson is your first hands-on encounter with it.

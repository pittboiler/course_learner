# Number Theory · Lesson 2.1: Congruences — arithmetic modulo n

> ⏱ ~15 min · Module 2: Congruences and the Chinese Remainder Theorem · Builds on: 1.1 (divisibility and the division algorithm) · Unlocks: 2.2 (linear congruences and modular inverses)

## Why this matters

Almost everything that makes number theory *powerful* — Fermat, Euler, the Chinese Remainder Theorem, quadratic reciprocity, RSA — is arithmetic where only remainders survive. Congruence is the language for that arithmetic. Once you can add and multiply "up to a multiple of $n$" as fluently as you add ordinary integers, a $60$-digit exponent shrinks to a two-digit calculation, and the same machinery that tells time on a clock is what encrypts your bank login. This lesson builds the object — $\mathbb{Z}/n\mathbb{Z}$ — that the rest of the course lives inside.

## The idea

Fix a modulus $n$. Declare two integers **the same** if they leave the same remainder when divided by $n$. That's it — you've just glued the integers into $n$ buckets, one per remainder $0,1,\dots,n-1$, and agreed to stop caring which representative of a bucket you're holding.

A clock does exactly this with $n=12$: $15$ o'clock *is* $3$ o'clock, because $15$ and $3$ differ by a full lap of $12$. Nothing about "3 o'clock" cares whether you arrived by counting to $3$ or to $15$ or to $27$ — same bucket. The whole trick of modular arithmetic is that **the bucket you land in after adding or multiplying only depends on which buckets you started from**, never on the particular numbers. So you're free to swap any number for the smallest, friendliest member of its bucket at any moment — and that's what keeps the numbers small.

## The formal version

**Definition.** For a positive integer $n$, we say $a$ is **congruent to** $b$ **modulo** $n$, written
$$a \equiv b \pmod{n},$$
if $n \mid (a-b)$ — that is, $a-b$ is an integer multiple of $n$.

*In words:* $a$ and $b$ differ by a whole number of $n$-sized steps, so they sit in the same bucket. Equivalently (using the division algorithm from 1.1), $a$ and $b$ have the same remainder $a \bmod n$.

**Congruence is an equivalence relation.** It is:

- **reflexive** — $a\equiv a$, since $n\mid 0$;
- **symmetric** — if $n\mid(a-b)$ then $n\mid(b-a)$;
- **transitive** — if $n\mid(a-b)$ and $n\mid(b-c)$, then $n\mid\big((a-b)+(b-c)\big)=a-c$.

*In words:* it behaves like equality, so it carves $\mathbb{Z}$ into disjoint **residue classes**. The class of $a$ is $\overline{a}=\{a+kn : k\in\mathbb{Z}\}$, and there are exactly $n$ of them: $\overline{0},\overline{1},\dots,\overline{n-1}$. This set of classes is written $\mathbb{Z}/n\mathbb{Z}$.

**Addition and multiplication are well-defined on classes.** Suppose $a\equiv a'\pmod n$ and $b\equiv b'\pmod n$. Then
$$a+b \equiv a'+b' \pmod n \qquad\text{and}\qquad ab \equiv a'b' \pmod n.$$

*Proof.* Write $a'=a+sn$ and $b'=b+tn$ for integers $s,t$ (that's what the two congruences mean). Then
$$a'+b' = (a+b)+(s+t)n \implies n\mid\big((a'+b')-(a+b)\big),$$
$$a'b' = (a+sn)(b+tn) = ab + (at+bs+stn)\,n \implies n\mid\big(a'b'-ab\big).$$
So the sum and product land in the same class no matter which representatives you picked. $\blacksquare$

*In words:* you may replace any number by a congruent one **before** adding or multiplying and the answer's class is unchanged. This is the permission slip for "reduce early, reduce often."

**The cancellation rule.** From $ca\equiv cb\pmod n$ you may conclude $a\equiv b\pmod n$ **only when** $\gcd(c,n)=1$. In general,
$$ca\equiv cb\pmod n \iff a\equiv b\ \Big(\bmod\ \tfrac{n}{\gcd(c,n)}\Big).$$

*In words:* dividing both sides by a common factor $c$ is legal exactly when $c$ shares no factor with the modulus; otherwise you must shrink the modulus too. (Why 2.2 is titled "modular inverses": cancelling by $c$ is really *multiplying by $c^{-1}$*, and $c^{-1}$ exists mod $n$ precisely when $\gcd(c,n)=1$.)

## Concrete instance

**Reduce before you multiply.** Compute $17\cdot 23 \bmod 5$. The lazy route multiplies first: $17\cdot 23 = 391 = 78\cdot 5 + 1$, so the answer is $1$. The *smart* route reduces each factor into its bucket first — $17\equiv 2$ and $23\equiv 3\pmod 5$ — and then, because $\times$ is well-defined on classes, multiplies the small representatives:
$$17\cdot 23 \equiv 2\cdot 3 = 6 \equiv 1 \pmod 5.$$
Same answer, no three-digit product. On a big computation this is the difference between arithmetic you can do in your head and arithmetic you can't do at all.

**The cancellation caveat.** Watch a tempting move fail. Modulo $10$,
$$2\cdot 3 = 6 \equiv 6, \qquad 2\cdot 8 = 16 \equiv 6, \qquad\text{so}\qquad 2\cdot 3 \equiv 2\cdot 8 \pmod{10}.$$
Both sides are genuinely equal mod $10$. If cancellation were always legal we'd "divide by $2$" and get $3\equiv 8\pmod{10}$ — which is **false** ($10\nmid 5$). The rule flags exactly why: $\gcd(2,10)=2\ne 1$, so $2$ is *not* cancellable. What survives is the corrected law: $3\equiv 8\ \big(\bmod\ \tfrac{10}{2}\big)$, i.e. $3\equiv 8\pmod 5$ — true. The common factor didn't vanish; it shrank the modulus.

## Worked examples

**Example 1 (mechanical — reduce a power).** Find $7^{4} \bmod 5$. Reduce the base first: $7\equiv 2\pmod 5$. Then $7^4\equiv 2^4=16\equiv 1\pmod 5$. Even $2^4$ is optional — reduce as you square: $2^2=4\equiv -1$, so $2^4\equiv(-1)^2=1\pmod 5$. Negatives are legal representatives too, and often the friendliest: $-1$ beats $4$.

**Example 2 (why you'd care — a checksum).** Every book's ISBN-10 $d_1d_2\cdots d_{10}$ satisfies the check
$$\sum_{i=1}^{10} i\,d_i \equiv 0 \pmod{11}.$$
The final digit $d_{10}$ (sometimes written "X" for $10$) is *chosen* to force this. Suppose the first nine digits are $0\,3\,0\,6\,4\,0\,6\,1\,5$. The weighted sum of those is
$$1\cdot0+2\cdot3+3\cdot0+4\cdot6+5\cdot4+6\cdot0+7\cdot6+8\cdot1+9\cdot5 = 0+6+0+24+20+0+42+8+45=145.$$
Reduce: $145 = 13\cdot11 + 2$, so $145\equiv 2\pmod{11}$. We need $2 + 10\,d_{10}\equiv 0\pmod{11}$. Since $10\equiv -1\pmod{11}$, this is $2 - d_{10}\equiv 0$, giving $d_{10}=2$. If a single digit gets mistyped, the sum shifts by a nonzero amount mod $11$ and the check fails — the entire error-detecting power is one congruence.

## Watch out

- You might think the modulus in "$a\equiv b\pmod n$" is optional decoration. It isn't — $3\equiv 8$ is *false* mod $10$ but *true* mod $5$. A congruence without its modulus is meaningless; always carry the $\pmod n$.
- You might think you can cancel a common factor as freely as in ordinary algebra. You can't: cancelling $c$ needs $\gcd(c,n)=1$. This is the single most common mistake in the whole course — when in doubt, multiply out and check, don't divide.
- You might think reducing mid-computation could change the answer. For $+$ and $\times$ it never does (that's the well-definedness proof). But it does **not** extend to exponents — you may reduce the *base* freely, yet you may **not** reduce the *exponent* mod $n$ (e.g. $2^7\not\equiv 2^{7\bmod 5}\pmod{10}$). Exponents get their own reduction rule in 3.1–3.2.

## One-liner

> Congruence mod $n$ glues the integers into $n$ buckets on which $+$ and $\times$ still make sense; you may swap any number for a friendlier bucket-mate before adding or multiplying, but you may only cancel a factor coprime to $n$.

## Problems

**P1 (🟢)** Compute $34 \cdot 27 \bmod 7$ by reducing each factor *before* multiplying. Show the reduced product.

**P2 (🟡)** Is the cancellation $6\cdot 4 \equiv 6\cdot 9 \pmod{15}$ true? If so, verify it, then decide whether you may cancel the $6$ to conclude $4\equiv 9$. State the modulus in which the cancelled statement actually holds.

**P3 (🔴, optional)** Prove that for every integer $a$, $\ a^2 \equiv 0$ or $1 \pmod 4$. Use this to show that no integer of the form $4k+3$ is a sum of two perfect squares. *(This is a first taste of Module 4's quadratic-residue thinking.)*

<details>
<summary>Solutions</summary>

**P1** Reduce first: $34 = 4\cdot 7 + 6$ so $34\equiv 6\equiv -1\pmod 7$, and $27 = 3\cdot 7 + 6$ so $27\equiv 6\equiv -1\pmod 7$. Then $34\cdot 27\equiv(-1)(-1)=1\pmod 7$. (Check the long way: $34\cdot 27 = 918 = 131\cdot 7 + 1$. ✓) Using $-1$ instead of $6$ made the multiplication trivial.

**P2** True: $6\cdot 4 = 24 \equiv 9\pmod{15}$ (since $24-9=15$) and $6\cdot 9 = 54 \equiv 9\pmod{15}$ (since $54 = 3\cdot 15 + 9$). Both sides equal $9$, so the congruence holds. But $\gcd(6,15)=3\ne 1$, so you may **not** cancel the $6$ — indeed $4\not\equiv 9\pmod{15}$ (their difference $5$ is not a multiple of $15$). The correct reduced modulus is $\tfrac{15}{\gcd(6,15)}=\tfrac{15}{3}=5$: and there $4\equiv 9\pmod 5$ is true ($9-4=5$). The common factor $3$ shrank the modulus from $15$ to $5$.

**P3** Every integer is congruent to $0,1,2,$ or $3\pmod 4$. Square each representative and reduce:
$$0^2\equiv 0,\quad 1^2\equiv 1,\quad 2^2=4\equiv 0,\quad 3^2=9\equiv 1\pmod 4.$$
Because $\times$ is well-defined on classes, $a^2\bmod 4$ depends only on $a\bmod 4$, so *every* square is $\equiv 0$ or $1\pmod 4$. Now a sum of two squares is $\equiv 0+0,\,0+1,$ or $1+1$, i.e. $\equiv 0,1,$ or $2\pmod 4$ — never $3$. Since $4k+3\equiv 3\pmod 4$, no such integer is a sum of two squares. $\blacksquare$

</details>

## Flashback

**From Lesson 1.1 (Divisibility and the division algorithm):** By the division algorithm, dividing $-47$ by $6$ gives a unique quotient $q$ and remainder $r$ with $0\le r<6$. Find $q$ and $r$, and state the residue class $\overline{-47}$ in $\mathbb{Z}/6\mathbb{Z}$ (i.e. which of $\overline{0},\dots,\overline{5}$ it equals).

<details>
<summary>Solution</summary>

The remainder must satisfy $0\le r < 6$, so a negative dividend does *not* just get a negative remainder. We need $-47 = 6q + r$ with $0\le r<6$. Take $q=-8$: then $6\cdot(-8) = -48$ and $r = -47-(-48)=1$, which lies in $[0,6)$. ✓ So $q=-8,\ r=1$. (The tempting $q=-7,\ r=-5$ is wrong because $r$ must be nonnegative.) Hence $-47\equiv 1\pmod 6$, and $\overline{-47}=\overline{1}$ in $\mathbb{Z}/6\mathbb{Z}$.

</details>

## Connections

- **Backward:** the definition $a\equiv b\pmod n \iff n\mid(a-b)$ is built directly on divisibility (1.1), and "same remainder" is the division algorithm (1.1) read as an equivalence.
- **Forward:** 2.2 solves $ax\equiv b\pmod n$ by inverting $a$ — which is exactly *legalizing cancellation*, possible iff $\gcd(a,n)=1$, the caveat you met here. From there the well-definedness of $\times$ underwrites Fermat (3.1), Euler (3.2), CRT (2.4), and every reduction in Modules 3–5.
- **Sideways (`discrete-mathematics`):** "$\equiv \pmod n$ is an equivalence relation partitioning $\mathbb{Z}$ into classes" is the canonical example of equivalence relations and quotient sets; $\mathbb{Z}/n\mathbb{Z}$ is your first quotient structure, and its units become your first honest group in 3.3.
- **Sideways (everyday):** clock arithmetic ($n=12$ or $24$), days-of-the-week ($n=7$), and ISBN/UPC/credit-card checksums (Example 2) are all this lesson in disguise.

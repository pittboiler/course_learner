# Number Theory · Lesson 1.2: The Euclidean algorithm and Bézout

> ⏱ ~15 min · Module 1: Divisibility and primes · Builds on: 1.1 (divisibility and the division algorithm) · Unlocks: 1.3 (primes and the Fundamental Theorem of Arithmetic)

## Why this matters

The gcd is the single most reused subroutine in number theory: every modular inverse (Lesson 2.2), every solvable congruence (2.3), the Chinese Remainder Theorem (2.4), and RSA key generation (5.4) call it. And the *way* we compute it — Euclid's algorithm, unchanged for 2,300 years — comes with a bonus that turns out to matter even more than the gcd itself: **Bézout's identity**, which says the gcd is always a whole-number combination $ax+by$ of the two inputs. That one fact is the hinge the entire second half of the course swings on.

## The idea

You could find $\gcd(a,b)$ by factoring both numbers and comparing — but factoring is slow. Euclid's insight sidesteps it entirely: **the gcd doesn't change if you replace the larger number by its remainder against the smaller.** Why? Anything that divides both $a$ and $b$ also divides whatever is left over after you subtract copies of $b$ from $a$ — and vice versa. So the pair $(a,b)$ and the pair $(b,\ a \bmod b)$ share *exactly the same set of common divisors*, hence the same largest one.

That gives a shrinking loop: replace $(a,b)$ with $(b,\ a\bmod b)$, over and over. The second number strictly drops each round, so it can't shrink forever — it hits $0$. And $\gcd(a,0)=a$ (everything divides $0$). The last nonzero remainder is your answer.

The second idea: run that loop, then **walk it backwards**, and every remainder — including the gcd — reveals itself as $ax+by$ for some integers $x,y$. The gcd isn't just a common divisor; it's the smallest positive amount you can build by adding and subtracting copies of $a$ and $b$.

## The formal version

**Euclidean algorithm.** For integers $a,b$ with $b\neq 0$,
$$\gcd(a,b)=\gcd(b,\ a\bmod b).$$
*In words:* replacing the big number by its remainder leaves the gcd untouched. Iterating, you get a chain of divisions $r_{k-1}=q_{k+1}\,r_k+r_{k+1}$ with strictly decreasing remainders $b>r_1>r_2>\cdots\ge 0$; the last nonzero $r_k$ is $\gcd(a,b)$.

*Why it terminates:* the remainders are nonnegative integers that strictly decrease, so by well-ordering they reach $0$ in finitely many steps.

*Why it's fast:* every two steps, the remainder at least **halves** (if $r_{k+1}\ge r_k/2$ then the next remainder $r_{k+2}<r_{k+1}\le\ldots$ forces a drop below half within two rounds). So the number of divisions is $O(\log \min(a,b))$ — the worst case is consecutive Fibonacci numbers (Lamé's theorem). Computing $\gcd$ of two 300-digit numbers takes only a couple thousand divisions.

**Bézout's identity.** For integers $a,b$ not both zero,
$$\gcd(a,b)=ax+by\quad\text{for some integers }x,y.$$
*In words:* the gcd is reachable as an integer combination of the two inputs.

*Proof.* Let $S=\{ax+by : x,y\in\mathbb{Z}\}\cap\mathbb{Z}_{>0}$ be the set of **positive** values of $ax+by$. It's nonempty ($|a|$ is in it), so by well-ordering it has a least element $d=ax_0+by_0$. Claim: $d=\gcd(a,b)$.

- *$d$ is a common divisor.* Divide: $a=qd+r$ with $0\le r<d$. Then $r=a-qd=a-q(ax_0+by_0)=a(1-qx_0)+b(-qy_0)$ — itself a combination of $a$ and $b$. If $r>0$, then $r\in S$ and $r<d$, contradicting minimality. So $r=0$, i.e. $d\mid a$. The same argument gives $d\mid b$.
- *$d$ is the greatest.* Any common divisor $c$ of $a$ and $b$ divides $d=ax_0+by_0$, so $c\le d$.

Hence $d$ is the greatest common divisor. $\blacksquare$

**Coprimality.** As an immediate corollary, $\gcd(a,b)=1$ **iff** there exist integers $x,y$ with $ax+by=1$. (Forward: Bézout. Backward: any common divisor of $a,b$ divides $1$, so the gcd is $1$.) This "$1=ax+by$" certificate is how you *prove* two numbers are coprime — and, read modulo $b$, it's exactly a modular inverse of $a$.

## Concrete instance

Compute $\gcd(252,198)$ and write it as $252x+198y$.

**Forward — the division chain** (each line: divide, keep the remainder, feed it down):
$$
\begin{aligned}
252 &= 1\cdot 198 + 54\\
198 &= 3\cdot 54 + 36\\
54 &= 1\cdot 36 + 18\\
36 &= 2\cdot 18 + 0 \quad\longleftarrow\ \text{remainder }0,\ \text{stop}
\end{aligned}
$$
The last nonzero remainder is $\boxed{18}$, so $\gcd(252,198)=18$.

**Backward — back-substitution** (start at the line that produced the gcd, then substitute each earlier remainder, always keeping things as a combination of the two numbers on that line — never multiply the "carried" remainders out):
$$
\begin{aligned}
18 &= 54 - 1\cdot 36 &&\text{(from line 3)}\\
   &= 54 - 1\cdot(198 - 3\cdot 54) &&\text{(sub }36=198-3\cdot54)\\
   &= 4\cdot 54 - 1\cdot 198\\
   &= 4\cdot(252 - 1\cdot 198) - 1\cdot 198 &&\text{(sub }54=252-198)\\
   &= 4\cdot 252 - 5\cdot 198.
\end{aligned}
$$
So $x=4,\ y=-5$: check $4\cdot 252 - 5\cdot 198 = 1008-990=18$. ✓ Note $y$ is negative — that's normal, not a mistake.

## Worked examples

**Example 1 (mechanical — a coprime pair).** Find $\gcd(120,23)$ and Bézout coefficients.
$$
\begin{aligned}
120 &= 5\cdot 23 + 5\\
23 &= 4\cdot 5 + 3\\
5 &= 1\cdot 3 + 2\\
3 &= 1\cdot 2 + 1\\
2 &= 2\cdot 1 + 0
\end{aligned}
$$
Last nonzero remainder is $1$, so $\gcd(120,23)=1$: they're coprime. Back-substitute:
$$
\begin{aligned}
1 &= 3 - 1\cdot 2\\
  &= 3 - (5 - 3) = 2\cdot 3 - 5\\
  &= 2\cdot(23 - 4\cdot 5) - 5 = 2\cdot 23 - 9\cdot 5\\
  &= 2\cdot 23 - 9\cdot(120 - 5\cdot 23) = 47\cdot 23 - 9\cdot 120.
\end{aligned}
$$
So $23\cdot 47 + 120\cdot(-9)=1$. Read modulo $120$: $23\cdot 47\equiv 1$, so **$47$ is the inverse of $23$ mod $120$**. Coprimality *is* invertibility — the whole content of Lesson 2.2, previewed.

**Example 2 (why you'd care — an RSA key exponent).** In RSA you pick a public exponent $e$ coprime to $\varphi(n)$ and need the private exponent $d$ with $ed\equiv 1$. Take $e=7$, $\varphi(n)=120$ (the exact setup of Boss Problem 5). Because $\gcd(7,120)=1$, Bézout guarantees $d$ exists — and hands it to you:
$$120 = 17\cdot 7 + 1\ \Rightarrow\ 1 = 120 - 17\cdot 7 = 7\cdot(-17)+120\cdot 1.$$
So $7\cdot(-17)\equiv 1\pmod{120}$, and $d\equiv -17\equiv 103\pmod{120}$. Check: $7\cdot 103=721=6\cdot 120+1$. ✓ The private key drops straight out of one line of extended Euclid — no factoring, no search. This is not a toy analogy; it is literally the key-generation step (Lesson 5.4).

## Watch out

- **You might think $ax+by$ can equal any integer — actually it only ever produces multiples of $\gcd(a,b)$.** The gcd is the *smallest* positive value; everything reachable is a multiple of it. That's precisely why $ax+by=c$ is solvable only when $\gcd(a,b)\mid c$ (the whole story of linear Diophantine equations, Lesson 2.3).
- **You might think the Bézout coefficients are unique — they're not.** From one solution $(x,y)$ you get infinitely many: $\big(x+\tfrac{b}{d}t,\ y-\tfrac{a}{d}t\big)$ works for every integer $t$ (where $d=\gcd$). Two correct answers can look totally different.
- **During back-substitution, don't collapse the carried remainders into plain numbers.** The trick only works because you keep each remainder written as "(earlier number) − (multiple)(other number)" and substitute symbolically. Multiply everything out too early and you lose the $ax+by$ form.
- **Base case is $\gcd(a,0)=|a|$, not undefined.** The loop legitimately ends when the remainder is $0$; the answer is the *other* entry.

## One-liner

> Euclid shrinks the pair by remainders until one hits zero — and running that chain backwards writes the gcd as $ax+by$, which is the same as saying "coprime = invertible."

## Problems

**P1 (🟢)** Compute $\gcd(154,56)$ with the Euclidean algorithm, then use back-substitution to find integers $x,y$ with $154x+56y=\gcd(154,56)$.

**P2 (🟡)** Find the multiplicative inverse of $11$ modulo $26$ — i.e. an integer $t$ with $11t\equiv 1\pmod{26}$ — by running the extended Euclidean algorithm on $11$ and $26$. (First confirm an inverse *exists*.)

**P3 (🔴, optional)** Use Bézout to prove: if $\gcd(a,b)=1$ and $a\mid bc$, then $a\mid c$. (This is the coprime special case of Euclid's lemma, which you'll meet in full next lesson.)

<details>
<summary>Solutions</summary>

**P1** Division chain:
$$154=2\cdot 56+42,\qquad 56=1\cdot 42+14,\qquad 42=3\cdot 14+0.$$
Last nonzero remainder: $\gcd(154,56)=14$. Back-substitute from line 2:
$$14 = 56-1\cdot 42 = 56-(154-2\cdot 56)=3\cdot 56-1\cdot 154.$$
So $154\cdot(-1)+56\cdot 3=14$. Check: $-154+168=14$. ✓ Thus $x=-1,\ y=3$.

**P2** First, $\gcd(11,26)$: since $26=2\cdot 11+4$, $11=2\cdot 4+3$, $4=1\cdot 3+1$, $3=3\cdot 1+0$, the gcd is $1$ — so an inverse exists. Back-substitute:
$$
\begin{aligned}
1 &= 4-1\cdot 3\\
  &= 4-(11-2\cdot 4)=3\cdot 4-11\\
  &= 3\cdot(26-2\cdot 11)-11=3\cdot 26-7\cdot 11.
\end{aligned}
$$
So $11\cdot(-7)+26\cdot 3=1$, giving $11\cdot(-7)\equiv 1\pmod{26}$. Reduce: $-7\equiv 19\pmod{26}$, so $t=19$. Check: $11\cdot 19=209=8\cdot 26+1$. ✓

**P3** Since $\gcd(a,b)=1$, Bézout gives integers $x,y$ with $ax+by=1$. Multiply through by $c$:
$$acx+bcy=c.$$
Now $a\mid acx$ trivially, and $a\mid bc$ by hypothesis so $a\mid bcy$. Since $a$ divides both terms on the left, it divides their sum $c$. Hence $a\mid c$. $\blacksquare$ (Notice the coprimality hypothesis is load-bearing — without it, e.g. $a=4,b=2,c=2$: $4\mid 2\cdot 2$ but $4\nmid 2$.)

</details>

## Flashback

**From Lesson 1.1 (Divisibility and the division algorithm):** Using the division algorithm, prove that for every integer $n$, the square $n^2$ has the form $3k$ or $3k+1$ — it is **never** of the form $3k+2$.

<details>
<summary>Solution</summary>

By the division algorithm, write $n=3q+r$ with remainder $r\in\{0,1,2\}$. Square each case:

- $r=0$: $n^2=9q^2=3(3q^2)$ — form $3k$.
- $r=1$: $n^2=9q^2+6q+1=3(3q^2+2q)+1$ — form $3k+1$.
- $r=2$: $n^2=9q^2+12q+4=3(3q^2+4q+1)+1$ — form $3k+1$.

Every case lands on $3k$ or $3k+1$; none gives $3k+2$. $\blacksquare$ (Consequence: a number ending in the "$+2$" slot mod $3$ — like $2,5,8,11,\dots$ — can never be a perfect square.)

</details>

## Connections

- **Backward:** this is the division algorithm from Lesson 1.1 run in a loop — each step is one "$a=bq+r$", and the whole gcd/Bézout structure is that single identity iterated and reversed.
- **Forward:** Lesson 1.3 uses Bézout to prove **Euclid's lemma** ($p\mid ab\Rightarrow p\mid a$ or $p\mid b$), the keystone of unique factorization; P3 above is its warm-up. Lesson 2.2 turns "$1=ax+by$" directly into **modular inverses**, 2.3 generalizes to solving $ax+by=c$, and 2.4 (CRT) leans on coprime Bézout coefficients to stitch congruences together.
- **Sideways (algorithms):** the $O(\log\min(a,b))$ runtime and its Fibonacci worst case (Lamé's theorem) are a standard case study in the `algorithms` course — Euclid is the textbook example of analyzing a loop by how fast its quantity shrinks.
- **Sideways (cryptography):** Example 2 is exactly RSA key generation (Lesson 5.4) — the private exponent $d=e^{-1}\bmod\varphi(n)$ is produced by extended Euclid, the cheap step that makes the whole cryptosystem practical.

# Discrete Mathematics · Lesson 4.2: Euclid's algorithm, gcd & Bézout

> ⏱ ~15 min · Module 4: Number Theory & Modular Arithmetic · Builds on: 4.1 (divisibility & primes) · Unlocks: 4.3 (modular arithmetic & congruences)

## Why this matters

The greatest common divisor is the single most useful number attached to a pair of integers, and Euclid's 2,300-year-old algorithm computes it faster than you can factor either input — no primes required. But the real prize is the *extended* version: it doesn't just find $\gcd(a,b)$, it writes it as $ax+by$. That one identity is the engine behind modular inverses (next lesson), the reason RSA encryption can be undone by whoever holds the key, and the standard example of an algorithm whose speed you can actually prove. Learn it once and it pays out across number theory, cryptography, and algorithms.

## The idea

The **gcd** of two integers is the largest number dividing both — the biggest common "measuring stick." Euclid's insight is that you never need to know either number's factors to find it. Instead: repeatedly replace the bigger number by its remainder against the smaller. The pair shrinks fast, and the moment a remainder hits zero, the last nonzero number *is* the gcd.

Why does swapping in the remainder preserve the gcd? Because a common divisor of $a$ and $b$ is exactly a common divisor of $b$ and "$a$ with all the copies of $b$ subtracted out" — subtracting a multiple of $b$ can't create or destroy a shared factor. So each step keeps the full set of common divisors intact while making the numbers smaller.

The second idea — **Bézout** — is that if you record *how* you did the subtractions, you can run the whole chain backward and express the gcd as a whole-number combination $ax+by$. The gcd isn't just the biggest common divisor; it's the smallest positive value you can build by adding and subtracting copies of $a$ and $b$.

## The formal version

For integers $a,b$ (not both zero), $\gcd(a,b)$ is the largest $d$ with $d\mid a$ and $d\mid b$. The **least common multiple** $\mathrm{lcm}(a,b)$ is the smallest positive integer that both $a$ and $b$ divide. They are locked together:

$$\gcd(a,b)\cdot\mathrm{lcm}(a,b)=|ab|.$$

In words: every prime is split between the gcd (which takes the *smaller* power) and the lcm (the *larger*); together they reassemble the full product.

**Euclidean reduction.** For $b\neq 0$,

$$\gcd(a,b)=\gcd\!\big(b,\;a\bmod b\big),$$

where $a\bmod b$ is the remainder from the division algorithm ($a=qb+r$, $0\le r<|b|$). In words: replacing $a$ by its remainder against $b$ leaves the gcd unchanged. Iterate until the remainder is $0$; the last nonzero remainder is $\gcd(a,b)$ (using $\gcd(a,0)=|a|$).

*Why it's correct:* if $a=qb+r$, then any $d$ dividing both $a$ and $b$ divides $r=a-qb$; conversely any $d$ dividing both $b$ and $r$ divides $a=qb+r$. So the pairs $(a,b)$ and $(b,r)$ have **identical** sets of common divisors — hence the same greatest one.

*Why it's fast:* the remainder shrinks by more than half every two steps, so the number of divisions is $O(\log \min(|a|,|b|))$. The worst case is consecutive Fibonacci numbers (Lamé's theorem) — you'll meet this again as a runtime proof in `[algorithms](../../algorithms/syllabus.md)`.

**Bézout's identity.** For any integers $a,b$ not both zero, there exist integers $x,y$ with

$$\gcd(a,b)=ax+by.$$

In words: the gcd is an integer combination of the inputs — and it is the *smallest positive* integer expressible that way. When $\gcd(a,b)=1$ we call $a$ and $b$ **coprime** (relatively prime): there exist $x,y$ with $ax+by=1$.

The **extended Euclidean algorithm** produces those $x,y$: run Euclid forward, then back-substitute each remainder in terms of the previous pair (worked below).

## Concrete instance

Compute $\gcd(1071,462)$ by the chain of divisions:

$$
\begin{aligned}
1071 &= 2\cdot 462 + 147\\
462  &= 3\cdot 147 + 21\\
147  &= 7\cdot 21 + 0.
\end{aligned}
$$

The last nonzero remainder is $\boxed{21}$, so $\gcd(1071,462)=21$. (Three divisions — compare that to factoring both numbers.)

Now the **extended** step: solve each division line for its remainder, then back-substitute, starting from the last nonzero one.

$$
\begin{aligned}
21 &= 462 - 3\cdot 147 &&\text{(from line 2)}\\
147 &= 1071 - 2\cdot 462 &&\text{(from line 1)}\\[2pt]
\Rightarrow\quad 21 &= 462 - 3\big(1071 - 2\cdot 462\big)\\
&= 462 - 3\cdot 1071 + 6\cdot 462\\
&= (-3)\cdot 1071 + 7\cdot 462.
\end{aligned}
$$

So $x=-3,\ y=7$ give $\gcd(1071,462)=1071x+462y$. **Check:** $-3\cdot 1071 + 7\cdot 462 = -3213 + 3234 = 21.$ ✓

While we're here, $\mathrm{lcm}(1071,462)=\dfrac{1071\cdot 462}{21}=1071\cdot 22 = 23{,}562$.

## Worked examples

**Example 1 (mechanical).** Compute $\gcd(48,18)$ and its Bézout coefficients.

$$48 = 2\cdot 18 + 12,\qquad 18 = 1\cdot 12 + 6,\qquad 12 = 2\cdot 6 + 0.$$

So $\gcd=6$. Back-substitute: $6 = 18 - 1\cdot 12$, and $12 = 48 - 2\cdot 18$, so

$$6 = 18 - (48 - 2\cdot 18) = 3\cdot 18 - 1\cdot 48.$$

Thus $6 = 48\cdot(-1) + 18\cdot 3$. Check: $-48 + 54 = 6$. ✓

**Example 2 (why you'd care — a modular inverse).** In the next lesson you'll want to "divide by $7$ modulo $26$" — that means finding $x$ with $7x\equiv 1\pmod{26}$. Such an $x$ exists precisely because $\gcd(7,26)=1$, and Bézout hands it to you. Run Euclid:

$$26 = 3\cdot 7 + 5,\quad 7 = 1\cdot 5 + 2,\quad 5 = 2\cdot 2 + 1,\quad 2 = 2\cdot 1 + 0.$$

Back-substitute from $1 = 5 - 2\cdot 2$:

$$1 = 5 - 2(7 - 5) = 3\cdot 5 - 2\cdot 7 = 3(26 - 3\cdot 7) - 2\cdot 7 = 3\cdot 26 - 11\cdot 7.$$

So $-11\cdot 7 + 3\cdot 26 = 1$, meaning $7\cdot(-11)\equiv 1\pmod{26}$. Reducing $-11$ modulo $26$ gives $15$, and indeed $7\cdot 15 = 105 = 4\cdot 26 + 1$. The Bézout coefficient of $a$ *is* the inverse of $a$ mod $n$ — that's the whole mechanism, previewed.

## Watch out

- You might think you must factor $a$ and $b$ into primes to get their gcd. You *can* (take the smaller power of each shared prime — see the Flashback), but Euclid is far faster and never needs a factorization. For large numbers, factoring is infeasible while Euclid is instant.
- You might think Bézout's $x,y$ are unique. They aren't: if $ax+by=d$, then $x'=x+\tfrac{b}{d}$, $y'=y-\tfrac{a}{d}$ works too, for *any* integer shift. There are infinitely many solutions; the algorithm just returns one.
- You might read "$ax+by=1$" as saying $a$ or $b$ equals $1$. It says only that $a$ and $b$ are **coprime** — share no prime factor. $\gcd(9,4)=1$, yet neither is $1$.

## One-liner

> Euclid trades subtraction for factorization: keep replacing the bigger number by its remainder, and the last nonzero one is the gcd — read the steps backward and it's $ax+by$.

## Problems

**P1 (🟢)** Use the Euclidean algorithm to compute $\gcd(252,198)$, then find integers $x,y$ with $252x+198y=\gcd(252,198)$. Also give $\mathrm{lcm}(252,198)$.

**P2 (🟡)** Prove: if $\gcd(a,n)=1$, then there is an integer $x$ with $ax\equiv 1\pmod n$. (This is the existence-of-modular-inverse fact that Lesson 4.3 leans on. Hint: Bézout, then read the equation modulo $n$.)

**P3 (🔴, optional)** **Euclid's lemma.** Prove: if $p$ is prime and $p\mid ab$, then $p\mid a$ or $p\mid b$. (Hint: if $p\nmid a$, what is $\gcd(p,a)$? Apply Bézout and multiply through by $b$.)

<details>
<summary>Solutions</summary>

**P1** Euclidean algorithm:
$$252 = 1\cdot 198 + 54,\quad 198 = 3\cdot 54 + 36,\quad 54 = 1\cdot 36 + 18,\quad 36 = 2\cdot 18 + 0.$$
So $\gcd(252,198)=18$. Back-substitute, starting from $18 = 54 - 1\cdot 36$:
$$18 = 54 - (198 - 3\cdot 54) = 4\cdot 54 - 198 = 4(252 - 198) - 198 = 4\cdot 252 - 5\cdot 198.$$
So $x=4,\ y=-5$: check $4\cdot 252 - 5\cdot 198 = 1008 - 990 = 18$. ✓
And $\mathrm{lcm}(252,198)=\dfrac{252\cdot 198}{18}=252\cdot 11 = 2772$.

**P2** Since $\gcd(a,n)=1$, Bézout gives integers $x,y$ with $ax+ny=1$. Then $ax-1=-ny$, so $n\mid(ax-1)$, which is exactly the statement $ax\equiv 1\pmod n$. Hence $x$ (reduced modulo $n$) is a multiplicative inverse of $a$. $\blacksquare$

**P3** Suppose $p\mid ab$. If $p\mid a$ we're done, so assume $p\nmid a$. The only positive divisors of a prime $p$ are $1$ and $p$; since $p\nmid a$, the common divisors of $p$ and $a$ can only be $1$, so $\gcd(p,a)=1$. By Bézout there are integers $x,y$ with $px+ay=1$. Multiply by $b$:
$$pbx + aby = b.$$
Now $p\mid pbx$ trivially, and $p\mid ab$ by hypothesis so $p\mid aby$. Therefore $p$ divides the left side, hence $p\mid b$. So $p\mid a$ or $p\mid b$. $\blacksquare$
(This lemma is precisely what makes prime factorization *unique* — the backbone of Lesson 4.1's Fundamental Theorem of Arithmetic.)

</details>

## Flashback

**From Lesson 4.1 (Divisibility & primes):** Using prime factorizations, compute $\gcd(600,420)$ and $\mathrm{lcm}(600,420)$, and verify that their product equals $600\cdot 420$.

<details>
<summary>Solution</summary>

Factor: $600 = 2^3\cdot 3\cdot 5^2$ and $420 = 2^2\cdot 3\cdot 5\cdot 7$.

The gcd takes the **smaller** power of each shared prime: $\gcd = 2^2\cdot 3^1\cdot 5^1 = 60$.
The lcm takes the **larger** power of every prime that appears: $\mathrm{lcm} = 2^3\cdot 3^1\cdot 5^2\cdot 7^1 = 8\cdot 3\cdot 25\cdot 7 = 4200$.

Product: $\gcd\cdot\mathrm{lcm} = 60\cdot 4200 = 252{,}000$, and $600\cdot 420 = 252{,}000$. ✓ Each prime's exponent is split as $\min$ (to the gcd) and $\max$ (to the lcm), and $\min+\max$ equals the sum of the two original exponents — which is exactly the exponent in $600\cdot 420$.

</details>

## Connections

- **Backward:** this rests on Lesson 4.1's division algorithm ($a=qb+r$) and unique factorization — the Flashback computes the *same* gcd from primes, and P3 shows Euclid's lemma is what makes that factorization unique in the first place.
- **Forward:** Lesson 4.3 uses Bézout directly — $a$ has a **modular inverse** mod $n$ if and only if $\gcd(a,n)=1$, and the inverse *is* the Bézout coefficient of $a$ (Example 2 and P2 are the whole story previewed).
- **Sideways (crypto):** RSA key generation in `[cryptography](../../cryptography/syllabus.md)` / `[number-theory](../../number-theory/syllabus.md)` chooses an encryption exponent $e$ coprime to $\varphi(n)$ and computes the decryption key $d$ as its inverse — a single extended-Euclid run.
- **Sideways (algorithms):** the $O(\log \min(a,b))$ bound and its Fibonacci worst case (Lamé's theorem) are a standard runtime-analysis example in `[algorithms](../../algorithms/syllabus.md)`.

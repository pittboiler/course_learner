# Number Theory · Lesson 1.1: Divisibility and the division algorithm

> ⏱ ~15 min · Module 1: Divisibility and primes · Builds on: nothing (course start) · Unlocks: 1.2 (the Euclidean algorithm and Bézout)

## Why this matters

Every result in this course — Euclid's algorithm, unique factorization, congruences, RSA — is built on two bedrock facts you already half-know from grade school: one integer either divides another or it doesn't, and dividing with remainder always works and works in exactly one way. The payoff of making these precise now is that "remainder" becomes an *operation you can prove things about*, which is the whole engine of modular arithmetic (Module 2) and, eventually, of the hash functions that scatter keys across a table in constant time.

## The idea

Divisibility is about *exactness*: $a \mid b$ ("$a$ divides $b$") means $b$ is a whole number of $a$-sized steps — no fractional leftover. Six divides eighteen because eighteen is exactly three sixes; six does not divide twenty because you overshoot or fall short.

When exactness fails, the **division algorithm** tells you the best you can do: march in $b$-sized steps and record how many steps you took ($q$, the quotient) and how far past the last step you landed ($r$, the remainder). The one non-obvious insistence is that the remainder is always dragged into the range $0 \le r < b$ — even when the number you started with is negative. That single normalization is what makes remainders behave like a clean, repeatable operation instead of an ambiguous choice.

## The formal version

**Definition (divides).** For integers $a, b$ with $a \neq 0$, we say $a \mid b$ if there is an integer $k$ with $b = ak$. If no such $k$ exists we write $a \nmid b$. Here $a$ is a *divisor* (or *factor*) of $b$, and $b$ is a *multiple* of $a$.

*In words:* $a \mid b$ exactly when $b/a$ is an integer.

Two properties we'll lean on constantly, proved directly from the definition:

**Transitivity.** If $a \mid b$ and $b \mid c$, then $a \mid c$.
*Proof.* By hypothesis $b = ak$ and $c = bm$ for integers $k, m$. Substitute: $c = (ak)m = a(km)$. Since $km \in \mathbb{Z}$, this exhibits $c$ as an integer multiple of $a$, so $a \mid c$. $\blacksquare$

**Linearity (the divisor-of-a-combination rule).** If $a \mid b$ and $a \mid c$, then $a \mid (bx + cy)$ for *all* integers $x, y$.
*Proof.* Write $b = ak$ and $c = aj$ with $k, j \in \mathbb{Z}$. Then
$$bx + cy = (ak)x + (aj)y = a(kx + jy),$$
and $kx + jy \in \mathbb{Z}$, so $a \mid (bx + cy)$. $\blacksquare$

*In words:* a common divisor of two numbers divides every integer combination of them — the fact that makes the Euclidean algorithm (Lesson 1.2) even possible.

**The Division Algorithm.** For integers $a$ (the dividend) and $b > 0$ (the divisor), there exist **unique** integers $q$ (quotient) and $r$ (remainder) with
$$a = bq + r, \qquad 0 \le r < b.$$

*In words:* dividing $a$ by a positive $b$ produces one and only one quotient–remainder pair once you force the remainder into $[0, b)$.

*Why it's true (sketch).* **Existence:** among the multiples $\dots, -2b, -b, 0, b, 2b, \dots$ there is a largest one not exceeding $a$; call it $bq$. Then $r := a - bq \ge 0$, and $r < b$ because otherwise $b(q+1) = bq + b \le a$ would be a *larger* multiple below $a$, contradicting how we chose $bq$. **Uniqueness:** if $a = bq + r = bq' + r'$ with both remainders in $[0, b)$, subtract to get $b(q - q') = r' - r$. The right side satisfies $|r' - r| < b$, yet it is a multiple of $b$; the only multiple of $b$ with absolute value less than $b$ is $0$, so $r' = r$ and then $q' = q$. $\blacksquare$

Finally, the two quantities the rest of Module 1 revolves around:

**Definition (gcd and lcm).** For integers $a, b$ not both zero, the **greatest common divisor** $\gcd(a,b)$ is the largest integer dividing both. For nonzero $a, b$, the **least common multiple** $\mathrm{lcm}(a,b)$ is the smallest *positive* integer that both divide. Two integers are **coprime** (relatively prime) when $\gcd(a,b) = 1$.

## Concrete instance

**Division with a negative dividend.** Divide $a = -17$ by $b = 5$. The multiples of $5$ are $\dots, -20, -15, -10, \dots$; the largest one *not exceeding* $-17$ is $-20 = 5\cdot(-4)$. So
$$-17 = 5\cdot(-4) + 3, \qquad q = -4,\ r = 3, \quad 0 \le 3 < 5.$$
The tempting answer $-17 = 5\cdot(-3) + (-2)$ is *arithmetically* true but illegal: its remainder $-2$ is negative. Forcing $0 \le r < b$ is exactly what makes the pair $(q, r) = (-4, 3)$ the unique one. Note $q$ is *not* "$-17/5$ rounded toward zero" — it's the floor, $\lfloor -17/5 \rfloor = -4$.

**gcd and lcm straight from the definitions.** Take $a = 12$, $b = 18$.
- Divisors of $12$: $\{1,2,3,4,6,12\}$. Divisors of $18$: $\{1,2,3,6,9,18\}$. Common divisors: $\{1,2,3,6\}$; the greatest is $\gcd(12,18) = 6$.
- Positive multiples of both: the multiples of $12$ are $12,24,36,\dots$ and of $18$ are $18,36,\dots$; the smallest shared one is $\mathrm{lcm}(12,18) = 36$.

Sanity check: $\gcd \cdot \mathrm{lcm} = 6 \cdot 36 = 216 = 12 \cdot 18$. That $\gcd(a,b)\,\mathrm{lcm}(a,b) = ab$ identity is no accident — Lesson 1.3 proves it from unique factorization.

## Worked examples

**Example 1 (mechanical).** Find the unique $q, r$ for $a = -100$, $b = 7$.
Compute $\lfloor -100/7 \rfloor = \lfloor -14.28\ldots \rfloor = -15$, so $q = -15$ and
$$r = a - bq = -100 - 7(-15) = -100 + 105 = 5.$$
Thus $-100 = 7\cdot(-15) + 5$ with $0 \le 5 < 7$. Check the guardrail: the "round toward zero" quotient $-14$ would give $r = -100 + 98 = -2 < 0$ — rejected.

**Example 2 (why you'd care — remainders as a bucketing rule).** A hash table with $n = 7$ slots stores a key $k$ in slot $h(k) = k \bmod 7$, the remainder from the division algorithm. Keys $10$ and $24$ land in
$$10 = 7\cdot 1 + 3 \ \Rightarrow\ \text{slot } 3, \qquad 24 = 7\cdot 3 + 3 \ \Rightarrow\ \text{slot } 3.$$
They collide. Why? Because $24 - 10 = 14 = 7\cdot 2$, i.e. $7 \mid (24 - 10)$. This is the general law: two keys share a slot **iff** their difference is a multiple of $n$ — a direct corollary of the division algorithm's *uniqueness* (you'll prove it in P3), and precisely the definition of congruence mod $n$ that opens Module 2.

## Watch out

- You might think the remainder can be negative when the dividend is — but the division algorithm forbids it. $-17 \bmod 5 = 3$, not $-2$. Many programming languages' `%` operator *does* return $-2$ here (it truncates $q$ toward zero); the number-theorist's remainder is always in $[0, b)$.
- You might think $a \mid b$ and $\tfrac{b}{a}$ are the same statement — but $a \mid b$ is a yes/no *relation* between two integers, while $\tfrac{b}{a}$ is a number that may not even be an integer. Write $a \mid b$, never "$a/b$", when you mean divisibility.
- You might think $0 \mid 0$ is undefined or that every number divides $0$ is false — actually $a \mid 0$ for *every* nonzero $a$ (take $k = 0$: $0 = a\cdot 0$). What's genuinely disallowed is a *zero divisor*: $a \mid b$ requires $a \neq 0$, since "how many times does $0$ go into $b$" has no answer.

## One-liner

> Dividing by a positive $b$ always lands you in exactly one bucket $\{0, 1, \dots, b-1\}$ — and that forced, unique remainder is the seed of all modular arithmetic.

## Problems

**P1 (🟢)** (a) Find the unique quotient and remainder for $a = -100$ divided by $b = 9$. (b) Compute $\gcd(24, 36)$ and $\mathrm{lcm}(24, 36)$ directly from the definitions (list the divisors / multiples), and verify $\gcd \cdot \mathrm{lcm} = 24 \cdot 36$.

**P2 (🟡)** Prove: if $a \mid b$ and $b \neq 0$, then $|a| \le |b|$. (Hence a nonzero integer has only finitely many divisors — the reason "*greatest* common divisor" is well-defined.)

**P3 (🔴, optional)** Prove the collision law from Example 2: for a positive integer $n$, two integers $a$ and $a'$ leave the same remainder upon division by $n$ **if and only if** $n \mid (a - a')$. (This is the definition of $a \equiv a' \pmod n$ you'll meet in Lesson 2.1.)

<details>
<summary>Solutions</summary>

**P1** (a) $\lfloor -100/9 \rfloor = \lfloor -11.11\ldots \rfloor = -12$, so $q = -12$ and $r = -100 - 9(-12) = -100 + 108 = 8$. Thus $-100 = 9\cdot(-12) + 8$, with $0 \le 8 < 9$. (The truncated quotient $-11$ gives $r = -100 + 99 = -1 < 0$, illegal.)

(b) Divisors of $24$: $\{1,2,3,4,6,8,12,24\}$. Divisors of $36$: $\{1,2,3,4,6,9,12,18,36\}$. Common divisors: $\{1,2,3,4,6,12\}$, greatest is $\gcd(24,36) = 12$. Multiples of $24$: $24, 48, 72, \dots$; of $36$: $36, 72, \dots$; smallest shared is $\mathrm{lcm}(24,36) = 72$. Check: $12 \cdot 72 = 864 = 24 \cdot 36$. ✓

**P2** Since $a \mid b$, write $b = ak$ for some integer $k$. Because $b \neq 0$, we must have $k \neq 0$ (else $b = 0$), so $|k| \ge 1$. Taking absolute values, $|b| = |a|\,|k| \ge |a|\cdot 1 = |a|$. $\blacksquare$
Consequently every divisor $a$ of a nonzero $b$ satisfies $|a| \le |b|$, so there are at most $2|b|$ of them — a finite set with a genuine maximum, which is why $\gcd$ is well-defined.

**P3** By the division algorithm write $a = nq + r$ and $a' = nq' + r'$ with $0 \le r, r' < n$.

($\Rightarrow$) Suppose the remainders agree, $r = r'$. Then $a - a' = n(q - q') + (r - r') = n(q - q')$, so $n \mid (a - a')$.

($\Leftarrow$) Suppose $n \mid (a - a')$. Subtracting the two divisions, $a - a' = n(q - q') + (r - r')$, hence $r - r' = (a - a') - n(q - q')$ is a difference of two multiples of $n$, so $n \mid (r - r')$ (linearity). But $0 \le r, r' < n$ forces $|r - r'| < n$, and the only multiple of $n$ with absolute value strictly less than $n$ is $0$. Therefore $r - r' = 0$, i.e. $r = r'$. $\blacksquare$

Reading it back: keys collide in an $n$-slot table exactly when their difference is divisible by $n$ — the uniqueness half of the division algorithm doing the work.

</details>

## Flashback

*(None — course start.)*

## Connections

- **Forward:** Lesson 1.2 turns the linearity rule into the Euclidean algorithm — repeated division-with-remainder — and shows $\gcd(a,b)$ is always an integer combination $ax + by$ (Bézout), so you'll never hunt through divisor lists by hand again.
- **Forward:** Lesson 2.1 promotes P3's "same remainder" relation to congruence $a \equiv a' \pmod n$, the notation that runs the rest of the course.
- **Sideways (discrete math):** `discrete-mathematics` covers this same division algorithm and gcd, but stops at computation; here we prove existence/uniqueness and will build unique factorization on top of it.
- **Sideways (CS):** the hash slot $h(k) = k \bmod n$ in Example 2 is the division algorithm's remainder, and P3 is exactly the collision condition behind modular hashing.
</content>
</invoke>

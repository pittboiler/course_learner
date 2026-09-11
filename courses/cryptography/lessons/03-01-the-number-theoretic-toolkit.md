# Cryptography · Lesson 3.1: The number-theoretic toolkit

> ⏱ ~15 min · Module 3: Public-key cryptography · Builds on: [`number-theory` 3.3 (order and the unit group)](../../number-theory/lessons/03-03-order-and-the-unit-group.md), [`number-theory` 3.4 (primitive roots)](../../number-theory/lessons/03-04-primitive-roots.md) · Unlocks: [3.2 (Diffie–Hellman key exchange)](03-02-diffie-hellman-key-exchange.md)

## Why this matters

Module 3 rests on two beliefs: factoring is hard, and discrete logarithms are hard. Neither is proved. Both are *quantified* — by decades of algorithmic work that establishes how hard, as a function of parameter size, and those functions are what determine every key size in use today.

This lesson is not a re-derivation of modular arithmetic. [`number-theory`](../../number-theory/syllabus.md) owns that: Euler's theorem and the totient are its 3.2, the order of an element and the structure of $(\mathbb{Z}/n)^{\times}$ are its 3.3, primitive roots are its 3.4, primality testing is its 5.3, and the RSA construction itself is its 5.4. Open the [reference card](../reference.md#assumed-not-taught-here) for the pointers.

What this lesson adds is the part a cryptographer needs and a number theorist does not: **the cost accounting.** How expensive is the operation you perform honestly, how expensive is the attack, and what ratio between them does a given parameter size buy? That ratio is the entire argument for a key size, and it explains the fact that otherwise looks arbitrary — why RSA needs 3072 bits where an elliptic curve needs 256.

## The idea

Every public-key scheme in this module is the same shape. There is an operation that is **cheap forwards and believed expensive backwards**, and the secret is the thing you would need to go backwards.

Modular exponentiation is the canonical example. Computing $g^a \bmod p$ for a 3072-bit modulus takes a few thousand multiplications — milliseconds. Recovering $a$ from $g^a \bmod p$ is the **discrete logarithm problem**, and the best known algorithm takes about $2^{139}$ operations at that size.

Two facts make that gap usable, and both are worth stating carefully.

**The honest direction is cheap because of square-and-multiply.** You never multiply $g$ by itself $a$ times. You read $a$'s binary expansion and square repeatedly, multiplying in $g$ where the bits are 1, so the work is proportional to the *number of bits* in $a$ rather than to $a$. That is the difference between $2^{3072}$ multiplications and about 4,600.

**The attack's cost depends on the group, not just its size.** This is the fact that surprises people. In a *generic* group — one where the only thing you can do is multiply elements and test equality — the discrete log provably costs about $\sqrt{q}$ for a group of order $q$, and that bound is achieved by baby-step giant-step and by Pollard's rho. But $(\mathbb{Z}/p)^{\times}$ is not generic: its elements are integers, integers factor into small primes, and **index calculus** exploits that to run in *subexponential* time. Elliptic-curve groups have no such structure and no index calculus is known, so they stay at the generic $\sqrt{q}$ bound.

That single difference is why a 256-bit elliptic curve matches a 3072-bit prime.

## The formal version

> **Square-and-multiply.** To compute $g^{a} \bmod n$ with $a = \sum_{i=0}^{k-1} a_i 2^{i}$: set $r \leftarrow 1$ and, scanning the bits of $a$ from most significant to least, replace $r \leftarrow r^{2} \bmod n$ and then, if $a_i = 1$, $r \leftarrow r \cdot g \bmod n$.

Cost: $k$ squarings and $h - 1$ multiplications, where $k$ is the bit length of $a$ and $h$ its Hamming weight, so about $1.5k$ modular multiplications on average. Each modular multiplication of $k$-bit numbers costs $O(k^{2})$ bit operations with schoolbook arithmetic, so **modular exponentiation is $O(k^{3})$** — cubic, which is why 3072-bit RSA is slow but not impossible.

> **Definition (discrete logarithm problem).** Let $G$ be a cyclic group of order $q$ with generator $g$. Given $h \in G$, find the unique $a \in \{0, \dots, q-1\}$ with $g^{a} = h$. Write $a = \log_g h$.

> **Diffie–Hellman assumptions.** **CDH:** given $(g, g^{a}, g^{b})$, computing $g^{ab}$ is hard. **DDH:** given $(g, g^{a}, g^{b}, g^{c})$, deciding whether $c \equiv ab$ is hard.

In words: CDH says you cannot *build* the shared secret; DDH says you cannot *recognise* it. DDH is the stronger assumption and it implies CDH, which implies the discrete log is hard. Encryption schemes usually need DDH, because distinguishing is what an IND adversary does ([3.4](03-04-elgamal-encryption.md)); key exchange needs only CDH.

**A caution about DDH in $(\mathbb{Z}/p)^{\times}$:** it is *false* in the full group, because the Legendre symbol ([`number-theory` 4.2](../../number-theory/lessons/04-02-quadratic-residues-and-legendre-symbol.md)) is efficiently computable and leaks whether an exponent was even. Real protocols therefore work in the prime-order subgroup of quadratic residues, where the leak disappears. **The group you choose is part of the assumption.**

> **Factoring assumption.** Given $n = pq$ for random primes $p, q$ of equal bit length, finding $p$ is hard.

The two algorithm families that set every key size:

| Problem | Best algorithm | Running time | Consequence |
|---|---|---|---|
| Discrete log in a generic group of order $q$ | Pollard rho, BSGS | $\Theta(\sqrt{q})$ — **provably optimal generically** | 256-bit group gives 128-bit security |
| Discrete log in $(\mathbb{Z}/p)^{\times}$ | index calculus / NFS | $L_p[1/3, 1.923]$, subexponential | 3072-bit prime gives about 128-bit security |
| Factoring $n$ | number field sieve | $L_n[1/3, 1.923]$, subexponential | 3072-bit modulus gives about 128-bit security |

The notation $L_n[\alpha, c] = \exp\big(c (\ln n)^{\alpha} (\ln \ln n)^{1-\alpha} (1 + o(1))\big)$ interpolates between polynomial ($\alpha = 0$) and exponential ($\alpha = 1$). At $\alpha = 1/3$ these algorithms are much faster than exhaustive search and much slower than polynomial — which is exactly the awkward regime that makes key sizes grow faster than security levels.

Evaluating the formula at $c = 1.923$ gives roughly $2^{117}$ for a 2048-bit modulus and $2^{139}$ for 3072 bits, which brackets the standard claims of 112-bit and 128-bit security. (The $o(1)$ term is not negligible at these sizes, so treat these as order-of-magnitude checks, not measurements.)

Hardness must always be read as a statement about a **family** indexed by the security parameter, never about a single instance. "Factoring is hard" is meaningless for the number 15. The assumption is that for *randomly chosen* $n$ of $k$ bits, success probability is negligible in $k$ — and the words "randomly chosen" carry weight, since $n = pq$ with $p, q$ close together factors instantly by Fermat's method.

## Picture

![A grouped bar chart on a logarithmic scale with four groups, one per security level of 112, 128, 192 and 256 bits. Each group has three bars: symmetric key size, elliptic-curve key size, and RSA or finite-field Diffie-Hellman parameter size. The symmetric and elliptic-curve bars grow gently across the groups while the RSA bar grows steeply, from 2048 bits to 15360. A caption notes that index calculus and the number field sieve are why the third bar grows so fast.](assets/03-01-fig1.svg)

Look at how the three bars *grow*, not just how tall they are. The symmetric and elliptic-curve bars roughly double from the leftmost group to the rightmost; the RSA bar grows by a factor of seven and a half. **A subexponential attack means each extra bit of security costs more than the last**, and extrapolating the curve is what makes people uneasy about very high RSA security levels — 256-bit security needs a 15360-bit modulus, whose operations are $(15360/3072)^{3} = 125$ times slower than 3072-bit ones.

## Worked examples

**Example 1 — square-and-multiply by hand, and the cost count.**

Compute $5^{13} \bmod 23$. Write $13 = 1101_2$ and scan left to right, starting from $r = 1$:

| bit | square | multiply by 5 | $r \bmod 23$ |
|---|---|---|---|
| 1 | $1^2 = 1$ | $1 \cdot 5 = 5$ | 5 |
| 1 | $5^2 = 25 \equiv 2$ | $2 \cdot 5 = 10$ | 10 |
| 0 | $10^2 = 100 \equiv 8$ | — | 8 |
| 1 | $8^2 = 64 \equiv 18$ | $18 \cdot 5 = 90 \equiv 21$ | 21 |

So $5^{13} \equiv 21 \pmod{23}$. Four squarings and three multiplications — seven operations, against the twelve a naive repeated multiplication would use, and the gap becomes astronomical at real sizes.

At 3072 bits the count is about $3072 + 1536 = 4608$ modular multiplications. **Note the number never depends on the exponent's value, only on its bit length** — which is both the source of the efficiency and, when implemented carelessly, the source of a timing side channel, since the *number of multiplications* does depend on the Hamming weight. Constant-time implementations do a dummy multiply on zero bits.

**Example 2 — why elliptic curves win, priced in multiplications.**

Take 128-bit security both ways and count modular multiplications of the field size involved.

*Finite-field DH, 3072-bit prime.* One exponentiation is about 4,608 modular multiplications of 3072-bit numbers.

*Elliptic curve, 256-bit field.* One scalar multiplication is about $256$ doublings plus $128$ additions, so roughly 384 point operations, and a point operation in Jacobian coordinates costs on the order of 10 field multiplications — about 3,840 modular multiplications of 256-bit numbers.

The operation counts are within a factor of two. The difference is the **size** of each multiplication: schoolbook cost scales as the square of the operand length, and

$$\left(\frac{3072}{256}\right)^{2} = 144.$$

So the finite-field version does roughly $4608 \times 144 \approx 6.6 \times 10^{5}$ multiplication-units against the curve's $3.8 \times 10^{3}$ — about **170 times more work for the same security**. (Real implementations narrow this with Montgomery multiplication, windowing and vector instructions, so treat 170 as the shape of the answer rather than a benchmark. The direction and the order of magnitude are robust.)

The whole gap traces back to one absence: **no index calculus is known for elliptic curves**, so their group order need only defeat the generic $\sqrt{q}$ attack, and $\sqrt{2^{256}} = 2^{128}$ lands exactly on target.

## Watch out

- You might think a 3072-bit RSA key gives 3072 bits of security. It gives about 128. The key length and the security level are different numbers connected by the sieve's running time, and confusing them leads to absurd conclusions in both directions.
- You might think "the discrete log is hard" is a property of the *size* of the group. It is a property of the group *and* its representation. The additive group $\mathbb{Z}_q$ has trivially easy discrete logs — $\log_g h$ is just $h g^{-1} \bmod q$ — and it is exactly as large as a hard elliptic-curve group.
- You might think exponentiation cost depends on the exponent's magnitude. It depends on its bit length, which is the logarithm of its magnitude. This is why using a small public exponent such as $e = 65537$ makes RSA *encryption* fast while decryption with a full-size $d$ stays slow.

## One-liner

> Public-key cryptography lives in the gap between a cubic-time honest operation and a subexponential-time attack, and every key size in the standards is that gap's arithmetic written down.

## Problems

**P1 (🟢)** Compute $3^{11} \bmod 17$ by square-and-multiply, showing the binary expansion of the exponent and each intermediate value reduced mod 17. State the number of squarings and multiplications used, and compare with the naive count.

**P2 (🟡)** A system must choose between 2048-bit finite-field Diffie–Hellman and a 224-bit elliptic curve, both rated at 112-bit security. (a) Estimate the ratio of their exponentiation costs using the operation counts and the schoolbook squared-size rule of Example 2. (b) State the one structural fact that makes the smaller parameter safe. (c) Give one practical reason a team might still choose the finite-field option.

**P3 (🔴, optional)** An implementer generates an RSA modulus by picking a random 1536-bit prime $p$ and then taking $q$ to be the next prime above $p$. (a) Show that $n = pq$ factors quickly, by giving the method and the quantity that must be small for it to work. (b) Estimate the work, given that consecutive primes near $2^{1536}$ differ by roughly $\ln(2^{1536}) \approx 1065$ on average. (c) State the general principle about hardness assumptions this violates.

<details>
<summary>Solutions</summary>

**P1** $11 = 1011_2$. Scanning left to right from $r = 1$:

| bit | square | multiply by 3 | $r \bmod 17$ |
|---|---|---|---|
| 1 | $1^2 = 1$ | $1 \cdot 3 = 3$ | 3 |
| 0 | $3^2 = 9$ | — | 9 |
| 1 | $9^2 = 81 \equiv 81 - 68 = 13$ | $13 \cdot 3 = 39 \equiv 39 - 34 = 5$ | 5 |
| 1 | $5^2 = 25 \equiv 8$ | $8 \cdot 3 = 24 \equiv 7$ | 7 |

So $3^{11} \equiv 7 \pmod{17}$. Check independently: $3^4 = 81 \equiv 13$, $3^8 \equiv 13^2 = 169 \equiv 169 - 153 = 16 \equiv -1$, so $3^{11} = 3^8 \cdot 3^2 \cdot 3 \equiv (-1)(9)(3) = -27 \equiv -27 + 34 = 7$. It matches.

Operations used: **4 squarings and 3 multiplications**, seven in all. The naive approach multiplies by 3 ten times, so 10 operations — a modest saving here, but the counts are $1.5\log_2 a$ versus $a$, and at $a \approx 2^{256}$ that is 384 versus $10^{77}$.

**P2** (a) Operation counts: 2048-bit exponentiation is about $2048 + 1024 = 3072$ modular multiplications; a 224-bit scalar multiplication is about $224 + 112 = 336$ point operations at roughly 10 field multiplications each, so about 3,360. These are again within a factor of two. The size ratio gives

$$\left(\frac{2048}{224}\right)^{2} \approx 83.6,$$

so the finite-field cost is about $3072 \times 83.6 \approx 2.6 \times 10^{5}$ multiplication-units against the curve's $3.4 \times 10^{3}$ — roughly **75 times more work**. The ratio is smaller than Example 2's 170 because the parameter gap narrows at lower security levels, which is itself the subexponential-versus-generic story in miniature.

(b) **No index calculus algorithm is known for elliptic-curve groups.** Their best attack is the generic $\sqrt{q}$ bound, achieved by Pollard rho, so a 224-bit group order gives $\sqrt{2^{224}} = 2^{112}$ — exactly the rating. Finite fields must be far larger because the number field sieve attacks them subexponentially.

(c) Practical reasons to choose finite-field DH anyway: **compatibility** with old peers and hardware that predates curve support; **patent and standards caution**, historically a real constraint on curve adoption; **curve-choice risk**, since a badly chosen or maliciously chosen curve can hide weaknesses that a large prime cannot, which is why teams that distrust standardised curve parameters sometimes prefer the simpler-to-audit finite-field setting. Implementation risk also cuts both ways: curve arithmetic has more special cases (points at infinity, invalid-curve attacks) and correspondingly more ways to get wrong.

**P3** (a) Use **Fermat's factorisation**. Write $n = ab$ with $a = (p+q)/2$ and $b = (q-p)/2$, so

$$n = a^{2} - b^{2}.$$

Start at $a = \lceil \sqrt{n}\,\rceil$ and increment, testing at each step whether $a^{2} - n$ is a perfect square. When it is, $b = \sqrt{a^{2}-n}$ and $p = a - b$, $q = a + b$. The quantity that must be small is $b = (q-p)/2$, **half the gap between the primes** — the method succeeds after roughly $b^{2}/(2\sqrt{n})$ steps, which is tiny when the primes are close.

(b) With $q - p \approx 1065$, we have $b \approx 533$ and $a - \sqrt{n} \approx b^{2}/(2\sqrt{n})$, which for $\sqrt{n} \approx 2^{1536}$ is far below 1. So $\lceil \sqrt{n}\,\rceil$ is essentially already the right $a$: **the very first trial succeeds**, and the factorisation costs one integer square root and one perfect-square test on a 3072-bit number — microseconds. The 3072-bit modulus provides no security whatsoever.

(c) The principle: **a hardness assumption is a statement about a distribution, not about a size.** "Factoring 3072-bit integers is hard" is shorthand for "factoring $n = pq$ is hard when $p$ and $q$ are *independently and uniformly* drawn primes of 1536 bits each". Sampling $q$ as a function of $p$ leaves the size intact and destroys the distribution, and the assumption says nothing at all about the result.

This is not a hypothetical. Batch-GCD scans of deployed TLS certificates have repeatedly found RSA moduli sharing a prime factor — the result of weak entropy at key-generation time on embedded devices — and every such pair factors instantly by a single $\gcd$ ([`number-theory` 1.2](../../number-theory/lessons/01-02-euclidean-algorithm-and-bezout.md)). **Key generation is part of the scheme**, exactly as [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md) insisted for the one-time pad.

</details>

## Flashback

**From Lesson 2.3 (message authentication codes):** A service authenticates each request with a 64-bit tag and rate-limits verification to 100 attempts per second per client. (a) Compute the expected time for a blind forgery by one client. (b) The attacker controls a botnet of 100,000 clients and the rate limit is per-client. Recompute. (c) State the fix, and name the property of the rate limit that failed.

<details>
<summary>Solution</summary>

(a) A 64-bit tag is guessed with probability $2^{-64}$ per attempt, so the expected number of attempts is $2^{64} \approx 1.8 \times 10^{19}$. At 100 attempts per second,

$$\frac{1.8 \times 10^{19}}{100} = 1.8 \times 10^{17} \text{ seconds} \approx 5.8 \times 10^{9} \text{ years}.$$

Comfortably safe.

(b) With 100,000 clients the aggregate rate is $10^{7}$ attempts per second, so the expected time falls to

$$\frac{1.8 \times 10^{19}}{10^{7}} = 1.8 \times 10^{12} \text{ seconds} \approx 5.8 \times 10^{4} \text{ years}.$$

Still safe — a 64-bit tag has enough margin to absorb five orders of magnitude. **The arithmetic is worth doing rather than assuming**, because the same calculation with a 32-bit tag gives $2^{32}/10^{7} \approx 430$ seconds, seven minutes, and the botnet turns a defensible design into a broken one.

(c) The fix is to **lengthen the tag** to 96 or 128 bits, which costs a few bytes per request and removes the dependence on rate limiting entirely. The property that failed is that the rate limit was **per-client rather than global**, so it bounded each attacker's rate and not the attack's; a limit that an adversary can multiply by acquiring identities is not a security control, it is a cost. Rate limits should be treated as defence in depth behind an adequate tag length, never as the primary barrier — the same reasoning as [2.3](02-03-message-authentication-codes.md)'s Example 2.

</details>

## Connections

- **Backward:** all the modular machinery here is [`number-theory`](../../number-theory/syllabus.md) Modules 2 and 3, used rather than rebuilt; what is new is the cost model, which is [`algorithms` 1.1](../../algorithms/lessons/01-01-asymptotic-notation.md)'s asymptotics applied to an adversary's budget rather than a program's runtime.
- **Forward:** [3.2](03-02-diffie-hellman-key-exchange.md) turns the discrete-log gap into a key exchange, [3.3](03-03-rsa-encryption.md) turns the factoring gap into a trapdoor, and [3.5](03-05-elliptic-curve-cryptography.md) cashes in the missing index calculus for small keys.
- **Sideways:** the subexponential $L[1/3]$ running time sits between the polynomial and exponential classes of [`algorithms` 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md), which is why "factoring is not known to be NP-complete" is a genuine and important caveat rather than a technicality — and [4.5](04-05-post-quantum-cryptography.md) is what happens when a *quantum* polynomial-time algorithm enters this table.

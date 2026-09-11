# Cryptography · Lesson 3.5: Elliptic-curve cryptography

> ⏱ ~15 min · Module 3: Public-key cryptography · Builds on: [3.2 (Diffie–Hellman key exchange)](03-02-diffie-hellman-key-exchange.md), [3.1 (the number-theoretic toolkit)](03-01-the-number-theoretic-toolkit.md) · Unlocks: [3.6 (hybrid encryption: KEM/DEM)](03-06-hybrid-encryption-kem-dem.md)

## Why this matters

[3.1](03-01-the-number-theoretic-toolkit.md) left a number hanging: a 256-bit elliptic curve gives the same security as a 3072-bit prime, a twelvefold reduction that translates into roughly two orders of magnitude less work. This lesson explains where the curve group comes from and why the attack that punishes $(\mathbb{Z}/p)^{\times}$ has no analogue on it.

The practical stakes are large. Every modern TLS handshake, every SSH key generated this decade, Signal, Bitcoin, and the passkeys replacing passwords all run on curves. When people say "public-key cryptography" today they usually mean X25519 and Ed25519, not RSA.

And the protocols do not change. **Diffie–Hellman on a curve is the same protocol with a different group**, which is the payoff of having stated [3.2](03-02-diffie-hellman-key-exchange.md) and [3.4](03-04-elgamal-encryption.md) abstractly in the first place.

## The idea

An elliptic curve is the set of solutions to $y^{2} = x^{3} + ax + b$, plus one extra point "at infinity". Over the real numbers it is a smooth cubic; over a finite field it is a scatter of points. What makes it useful is that **you can add two points and get a third**, in a way that satisfies all the group axioms.

The addition rule is geometric and completely determined by one fact: **a line meets a cubic in exactly three points.** So given $P$ and $Q$, draw the line through them, find the third intersection, and reflect it across the $x$-axis. That reflection is $P + Q$.

Three details finish the definition. The point at infinity $\mathcal{O}$ is the identity, and it is where vertical lines "meet" the curve. The inverse of $(x, y)$ is $(x, -y)$, since the vertical line through them hits nothing else. And when $P = Q$ there is no chord, so you use the **tangent** at $P$ instead, which is the limiting position of the chord.

Reflection looks like an arbitrary extra step. It is what makes the operation associative: define $P + Q$ as the third intersection directly and associativity fails, whereas with the reflection the identity "three collinear points sum to $\mathcal{O}$" holds, and associativity follows.

Now the cryptography. The group operation is point addition; repeating it is **scalar multiplication**, $kP = P + P + \cdots + P$, computed by double-and-add — the exact analogue of square-and-multiply ([3.1](03-01-the-number-theoretic-toolkit.md)). The hard problem is to recover $k$ from $kP$, the **elliptic-curve discrete logarithm problem**.

The whole advantage comes from one absence. Index calculus works in $(\mathbb{Z}/p)^{\times}$ because the group's elements are *integers*, which factor into small primes, giving the algorithm a notion of "smooth" elements to build relations from. **Points on a curve are not numbers and do not factor.** No analogue of smoothness is known, no index calculus exists, and the best attack is the generic Pollard rho at $\sqrt{n}$ — which is exactly the bound [3.1](03-01-the-number-theoretic-toolkit.md) said is provably optimal for a generic group.

## The formal version

> **Definition (elliptic curve over $\mathbb{F}_p$).** For $p > 3$ prime and $a, b \in \mathbb{F}_p$ with $4a^{3} + 27b^{2} \ne 0$,
> $$E(\mathbb{F}_p) = \{(x,y) \in \mathbb{F}_p^{2} : y^{2} = x^{3} + ax + b\} \cup \{\mathcal{O}\}.$$

The condition $4a^{3} + 27b^{2} \ne 0$ says the cubic has no repeated root, so the curve is smooth. A singular curve's "group" is isomorphic to an additive or multiplicative group with easy discrete logs, so the condition is a security requirement, not a technicality.

> **Group law.** $\mathcal{O}$ is the identity; $-(x,y) = (x,-y)$. For $P = (x_1,y_1)$ and $Q = (x_2,y_2)$ with $P \ne -Q$, set
> $$\lambda = \begin{cases} \dfrac{y_2 - y_1}{x_2 - x_1} & P \ne Q \quad \text{(chord)}\\[2ex] \dfrac{3x_1^{2} + a}{2y_1} & P = Q \quad \text{(tangent)}\end{cases}$$
> and then
> $$x_3 = \lambda^{2} - x_1 - x_2, \qquad y_3 = \lambda(x_1 - x_3) - y_1.$$

All arithmetic is in $\mathbb{F}_p$, so division means multiplication by a modular inverse ([`number-theory` 2.2](../../number-theory/lessons/02-02-linear-congruences-and-modular-inverses.md)). Note the $y_3$ formula already includes the reflection.

> **Hasse's theorem.** $\big|\,\#E(\mathbb{F}_p) - (p+1)\,\big| \le 2\sqrt{p}$.

In words: the number of points is about $p$, within a window of width $4\sqrt{p}$. So a 256-bit prime gives a group of roughly $2^{256}$ elements — **the group order tracks the field size**, which is why the key size is the field size.

> **ECDLP.** Given $P$ and $Q = kP$ in a cyclic subgroup of order $n$, find $k$. The best known attack on a well-chosen curve is Pollard's rho at $\Theta(\sqrt{n})$ operations.

Consequences and requirements:

| Requirement | Why |
|---|---|
| Subgroup order $n$ prime, or cofactor $h = \#E/n$ small | Pohlig–Hellman reduces the ECDLP to its prime-power factors, so a smooth order is fatal |
| Avoid anomalous curves, where $\#E = p$ | these admit a polynomial-time attack via the $p$-adic logarithm |
| Avoid small **embedding degree** | the MOV attack maps the ECDLP into $\mathbb{F}_{p^{k}}^{\times}$, where index calculus does apply — this is what pairing-friendly curves deliberately enable |
| Validate received points | an "invalid-curve attack" sends a point on a *different*, weak curve; the addition formulas never check the equation, so the victim computes in the weak group and leaks its scalar |

The curves in use:

| Curve | Field size | Security | Notes |
|---|---|---|---|
| NIST P-256 | 256 bits | ~128 bits | Weierstrass form; ubiquitous in TLS and smartcards |
| Curve25519 | 255 bits | ~128 bits | Montgomery form; $x$-only ladder, cofactor 8, designed for safe implementation |
| Ed25519 | 255 bits | ~128 bits | the same curve in twisted Edwards form, used for signatures ([4.1](04-01-digital-signatures.md)) |

Curve25519's design goal was not speed but **implementation safety**: its Montgomery ladder runs the same sequence of operations regardless of the scalar's bits, so it is constant-time by construction, and every 32-byte string is a valid public key, so point validation cannot be forgotten.

**ECDH is [3.2](03-02-diffie-hellman-key-exchange.md) verbatim** with the group replaced: Alice sends $aG$, Bob sends $bG$, both compute $abG$, and the shared secret is hashed into a key. ElGamal on a curve, with the mask hashed and an AEAD applied, is ECIES. Nothing about the protocols changes.

## Picture

![A plot of an elliptic curve over the real numbers, a smooth cubic with a closed oval on the left and an unbounded branch on the right. Two points P and Q are marked on the upper branch, and a dashed line through them meets the curve at a third intersection point. A dashed vertical segment reflects that third point across the x-axis to a point labelled P plus Q. Captions explain that a cubic meets a line in exactly three points, that the reflection defines the sum, that the tangent is used when P equals Q, and that over a finite field the same formulas define the same group on a scatter of points.](assets/03-05-fig1.svg)

The picture is over the real numbers because that is where the geometry is visible. **Over $\mathbb{F}_p$ there is no picture worth drawing** — the points are scattered with no visual pattern — but the algebraic formulas are identical, and they are what the group law actually is. This is the standard move in algebraic geometry: define the operation geometrically where you can see it, then keep the equations when you change the field.

## Worked examples

**Example 1 — building a group by hand.**

Take $E : y^{2} = x^{3} + 2x + 2$ over $\mathbb{F}_{17}$. Check smoothness: $4a^{3} + 27b^{2} = 4(8) + 27(4) = 140 \equiv 140 - 136 = 4 \not\equiv 0 \pmod{17}$, so the curve is fine.

Counting solutions gives $\#E(\mathbb{F}_{17}) = 19$. Hasse's check: $|19 - 18| = 1 \le 2\sqrt{17} \approx 8.25$. Since 19 is prime, **every non-identity point generates the whole group**, so there is no cofactor to worry about.

Take $G = (5,1)$ and compute $2G$ by the tangent formula:

$$\lambda = \frac{3 \cdot 5^{2} + 2}{2 \cdot 1} = \frac{77}{2} \bmod 17.$$

Now $77 \equiv 77 - 68 = 9$, and $2^{-1} \equiv 9 \pmod{17}$ since $2 \cdot 9 = 18 \equiv 1$. So $\lambda \equiv 9 \cdot 9 = 81 \equiv 81 - 68 = 13$.

$$x_3 = \lambda^{2} - 2x_1 = 169 - 10 = 159 \equiv 159 - 153 = 6,$$
$$y_3 = \lambda(x_1 - x_3) - y_1 = 13(5 - 6) - 1 = -14 \equiv 3 \pmod{17}.$$

So $2G = (6,3)$. Verify it is on the curve: $3^{2} = 9$ and $6^{3} + 2 \cdot 6 + 2 = 216 + 14 = 230 \equiv 230 - 221 = 9$. It checks.

Now $3G = 2G + G$ by the chord formula, with $(x_1,y_1) = (5,1)$ and $(x_2,y_2) = (6,3)$:

$$\lambda = \frac{3-1}{6-5} = 2, \qquad x_3 = 4 - 5 - 6 = -7 \equiv 10, \qquad y_3 = 2(5-10) - 1 = -11 \equiv 6.$$

So $3G = (10,6)$. Continuing this way walks through all 19 elements and returns to $\mathcal{O}$ at $19G$ — which is the group's order doing what Lagrange's theorem says it must ([`abstract-algebra` 1.5](../../abstract-algebra/lessons/01-05-cosets-lagrange.md)).

**Example 2 — ECDH on the same curve, and what it costs at real sizes.**

Alice picks $a = 3$ and sends $A = 3G = (10,6)$. Bob picks $b = 7$ and sends $B = 7G = (0,6)$.

Alice computes $7A = 7 \cdot 3 G = 21G$. Since $19G = \mathcal{O}$, this is $21 - 19 = 2$, so $21G = 2G = (6,3)$.
Bob computes $3B = 3 \cdot 7 G = 21G = (6,3)$.

They agree on $(6,3)$, and the session key is a hash of it. An eavesdropper with $G$, $A$ and $B$ must solve the ECDLP — at this size by trying all 19 multiples, which is why the example is illustration and not security.

At real sizes the cost picture is [3.1](03-01-the-number-theoretic-toolkit.md)'s Example 2: about 384 point operations for a 256-bit scalar multiplication, against about 4,600 modular multiplications of 3072-bit numbers for equivalent finite-field Diffie–Hellman. The operation counts are comparable; the operand sizes differ by a factor of twelve, and schoolbook multiplication costs scale as the square, giving roughly $144\times$ per operation.

Two consequences that matter in practice. **Bandwidth:** an X25519 public key is 32 bytes against 384 bytes for 3072-bit DH, which is why curves reached constrained devices and TLS handshake sizes first. **Energy:** on a battery-powered sensor, the factor of a hundred or so in work is the difference between a key exchange being routine and being rationed.

## Watch out

- You might think curve points can be added coordinatewise. They cannot — $(x_1 + x_2, y_1 + y_2)$ is almost never on the curve. The group law is the chord-and-tangent rule and nothing simpler.
- You might think any curve equation with big parameters is safe. It is not. Anomalous curves, curves with small embedding degree, and curves with smooth group order are all broken, and checking for these is why standardised curves exist. Do not generate your own.
- You might think a public key can be accepted as given. It cannot. If you do not verify that a received point satisfies the curve equation and lies in the right subgroup, an **invalid-curve attack** feeds you a point from a weak curve whose group order is smooth, and your own scalar multiplication leaks your private key by Pohlig–Hellman plus the Chinese remainder theorem — the same assembly as [3.2](03-02-diffie-hellman-key-exchange.md)'s small-subgroup attack.

## One-liner

> Swap the group and the protocols survive unchanged: curve points do not factor, so no index calculus exists, so 256 bits buys what a 3072-bit prime buys.

## Problems

**P1 (🟢)** On $E : y^{2} = x^{3} + 2x + 2$ over $\mathbb{F}_{17}$ with $G = (5,1)$ and $2G = (6,3)$, compute $4G$ by doubling $2G$. Verify your answer lies on the curve.

**P2 (🟡)** A protocol designer proposes a curve over $\mathbb{F}_p$ with $p$ a 256-bit prime, and reports that the curve's group order is $\#E = 2^{3} \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot n$ where $n$ is a 240-bit prime. (a) State whether this is usable, and what the cofactor is. (b) Give the security level in bits against Pollard rho, and state what an attacker gains from the small factors. (c) State the two implementation requirements a non-trivial cofactor imposes.

**P3 (🔴, optional)** A server computes $S = d \cdot Q$ with its long-term private scalar $d$, where $Q$ is a point supplied by the client, and the server does not check that $Q$ lies on its curve. (a) Explain why the addition formulas succeed anyway, referring to which curve parameter never appears in them. (b) Describe the attack, including what the client chooses and what she learns per query. (c) State how she assembles the answer, and give the single line of code that prevents the whole attack.

<details>
<summary>Solutions</summary>

**P1** Double $P = 2G = (6,3)$ using the tangent formula with $a = 2$:

$$\lambda = \frac{3 \cdot 6^{2} + 2}{2 \cdot 3} = \frac{110}{6} \bmod 17.$$

Reduce the numerator: $110 = 6 \cdot 17 + 8$, so $110 \equiv 8$. Invert the denominator: $6^{-1} \bmod 17 = 3$, since $6 \cdot 3 = 18 \equiv 1$. So

$$\lambda \equiv 8 \cdot 3 = 24 \equiv 7 \pmod{17}.$$

Then

$$x_3 = \lambda^{2} - 2x_1 = 49 - 12 = 37 \equiv 37 - 34 = 3,$$
$$y_3 = \lambda(x_1 - x_3) - y_1 = 7(6 - 3) - 3 = 21 - 3 = 18 \equiv 1 \pmod{17}.$$

So $4G = (3,1)$.

Verify on the curve: $y^{2} = 1$ and $x^{3} + 2x + 2 = 27 + 6 + 2 = 35 \equiv 35 - 34 = 1$. It matches.

**P2** (a) It is **usable**, with care. The cofactor is

$$h = \frac{\#E}{n} = 2^{3} \cdot 3 \cdot 5 \cdot 7 \cdot 11 = 9240,$$

and the cryptographic work happens in the prime-order-$n$ subgroup. A cofactor of this size is larger than the 1, 4 or 8 that standard curves use, which is a smell — but it is not by itself disqualifying.

(b) Against Pollard rho in the order-$n$ subgroup the work is $\sqrt{n} = \sqrt{2^{240}} = 2^{120}$, so **120-bit security**.

From the small factors the attacker gains, via Pohlig–Hellman, the value of the secret scalar modulo each small prime — up to $d \bmod 9240$, roughly 13 bits — *if* she can induce computations in those small subgroups. That is not a break on its own; it reduces the residual rho search to $\sqrt{n}$ still, since $n$ is untouched. **The danger is not the 13 bits; it is that the small subgroups exist as a place to send malicious points**, which is what P3 exploits.

(c) A non-trivial cofactor imposes two requirements:

1. **Validate every received point**: confirm it satisfies the curve equation, is not $\mathcal{O}$, and satisfies $nQ = \mathcal{O}$ — that last check is what confines it to the prime-order subgroup.
2. **Multiply by the cofactor**, or use a scalar that is a multiple of $h$, so that any small-order component of a received point is annihilated before the secret scalar touches it. Curve25519 does exactly this by clamping the low three bits of every scalar to zero, which is why its cofactor of 8 is harmless in practice.

**P3** (a) Look at the addition and doubling formulas: they involve $x_1, x_2, y_1, y_2$ and the coefficient $a$ — and **$b$ never appears anywhere**. Since $b$ is the only parameter that distinguishes $y^{2} = x^{3} + ax + b$ from $y^{2} = x^{3} + ax + b'$, the arithmetic proceeds identically on any curve in that family. The server computes a perfectly valid scalar multiplication; it is simply on the wrong curve.

(b) The client picks a $b'$ such that the curve $E' : y^{2} = x^{3} + ax + b'$ has a **smooth group order**, chooses a point $Q$ on $E'$ of small prime order $t$, and sends it. The server computes $S = dQ$, which lands in the cyclic group of order $t$ generated by $Q$ — a set with only $t$ elements. Whatever the server does next with $S$ — derives a key, returns a MAC, reveals success or failure — lets the client test all $t$ candidates and identify which one occurred.

What she learns per query is **$d \bmod t$**, at a cost of at most $t$ offline trials.

(c) She repeats with points of small order $t_1, t_2, t_3, \dots$ on various curves $E'$, learning $d$ modulo each, and assembles $d$ modulo $\prod t_i$ by the **Chinese remainder theorem** ([`number-theory` 2.4](../../number-theory/lessons/02-04-chinese-remainder-theorem.md)). Once the product exceeds the order of $d$, she has $d$ exactly — typically a few dozen queries for a 256-bit scalar, since small primes multiply up quickly. This is the same assembly as [3.2](03-02-diffie-hellman-key-exchange.md)'s small-subgroup attack, and the curve setting makes it worse because the attacker gets to *choose the curve* and therefore the available small orders.

The preventing line is **point validation before use**:

```
if (Q == O) or (Q.y^2 != Q.x^3 + a*Q.x + b mod p) or (n*Q != O): reject
```

The middle test is the one that matters here: it recomputes $b$ from the supplied point and refuses anything that is not on the server's own curve. The third test additionally excludes small-order points within the correct curve. **Both are cheap, and omitting either has cost real deployments their private keys.**

</details>

## Flashback

**From Lesson 1.6 (modes of operation):** After an ECDH exchange, two parties hold the shared point $S = (x_S, y_S)$ and derive a session key as $k = x_S$ truncated to 128 bits, then encrypt with AES-CTR using a fixed all-zero nonce because "the key is fresh each session". (a) Identify the two separate errors. (b) State what an adversary learns if the two parties exchange more than one message in a session. (c) Give the corrected construction.

<details>
<summary>Solution</summary>

(a) Two errors, in different layers.

**The key derivation is wrong.** The $x$-coordinate of a curve point is not a uniform bit string: only about half the field elements are $x$-coordinates of curve points at all, so $x_S$ has a detectable bias, and truncating does not remove it. The symmetric layer's proofs assume a uniformly random key, and this one is not. The fix is a KDF, exactly as [3.2](03-02-diffie-hellman-key-exchange.md)'s step 4 insisted.

**The nonce discipline is wrong.** A fixed nonce is safe only if the key is used for exactly one message. "The key is fresh each session" is true and irrelevant, because a session carries many messages under that one key.

(b) With a fixed nonce, every message in the session is XOR-ed against the **same keystream** $E_k(0 \Vert 1), E_k(0 \Vert 2), \dots$. So for any two messages,

$$c \oplus c' = m \oplus m',$$

the two-time pad of [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md). One known or guessable plaintext — a protocol header, a fixed greeting — recovers the keystream and hence every other message in the session, in both directions if the same key serves both.

(c) The corrected construction:

1. Derive keys properly: $k_{\text{c}\to\text{s}} \,\Vert\, k_{\text{s}\to\text{c}} = \mathrm{HKDF}(x_S, \text{salt}, \text{transcript})$, binding the handshake transcript so the keys are tied to the exact exchange that produced them.
2. Use an **AEAD** ([2.4](02-04-authenticated-encryption.md)) rather than raw CTR, so tampering is detected rather than silently accepted.
3. Use a **per-message sequence number as the nonce**, distinct per direction, which is why separate send and receive keys are derived in step 1.

That is, in outline, the TLS 1.3 record layer — and each of its three parts answers a failure from a different lesson of this course.

</details>

## Connections

- **Backward:** ECDH is [3.2](03-02-diffie-hellman-key-exchange.md) with the group swapped, ECIES is [3.4](03-04-elgamal-encryption.md) hashed, and the security level is [3.1](03-01-the-number-theoretic-toolkit.md)'s generic $\sqrt{n}$ bound with no subexponential attack to spoil it.
- **Forward:** [3.6](03-06-hybrid-encryption-kem-dem.md) packages ECDH as a KEM, which is how it is actually deployed; [4.1](04-01-digital-signatures.md) builds ECDSA and Ed25519 on the same group and inherits its nonce hazards; [4.5](04-05-post-quantum-cryptography.md) is where curves lose their advantage entirely, since Shor's algorithm solves the ECDLP as easily as factoring.
- **Sideways:** the curve is a genus-one algebraic curve, and the group law is the divisor-class addition of [`algebraic-geometry` 4.3](../../algebraic-geometry/lessons/04-03-divisors-on-a-curve.md), which is where associativity is proved properly rather than asserted; the arithmetic lives in the finite fields of [`abstract-algebra` 4.3](../../abstract-algebra/lessons/04-03-finite-fields.md).

# Cryptography · Lesson 3.2: Diffie–Hellman key exchange

> ⏱ ~15 min · Module 3: Public-key cryptography · Builds on: [3.1 (the number-theoretic toolkit)](03-01-the-number-theoretic-toolkit.md) · Unlocks: [3.3 (RSA encryption)](03-03-rsa-encryption.md)

## Why this matters

Every scheme in Modules 1 and 2 assumed Alice and Bob already shared a key. Where did it come from? That question was, until 1976, answered by couriers and pre-arranged codebooks, and it capped the reach of cryptography at the set of parties who could physically meet.

Diffie and Hellman removed the cap. **Two strangers, with no prior secret, can agree on one over a channel an adversary reads completely.** It is the most counterintuitive result in the subject and the one that makes the open internet possible: every HTTPS connection you open performs a key exchange of this kind, usually on an elliptic curve ([3.5](03-05-elliptic-curve-cryptography.md)), before a byte of content moves.

The second half of the lesson is the equally important limitation. Diffie–Hellman agrees a key with **whoever answered**, and it has no opinion about who that is.

## The idea

The analogy that gets the mechanism across: mixing paint.

Alice and Bob agree publicly on a starting colour — yellow, say, in full view of Eve. Alice privately picks red and mixes it in; Bob privately picks blue and mixes it in. They exchange the mixtures, publicly. Alice adds her red to Bob's mixture; Bob adds his blue to Alice's. Both now hold yellow-plus-red-plus-blue. Eve has yellow, yellow-red and yellow-blue, and to get the shared colour she would have to **un-mix** a paint, which is the hard direction.

Mathematically the paint is exponentiation. Fix a public prime $p$ and a generator $g$. Alice picks a secret $a$ and publishes $g^{a}$; Bob picks $b$ and publishes $g^{b}$. Alice computes $(g^{b})^{a}$, Bob computes $(g^{a})^{b}$, and both equal $g^{ab}$.

Why it works is one line: **exponentiation commutes.** $(g^{b})^{a} = g^{ba} = g^{ab} = (g^{a})^{b}$. Why it is secure is the assumption from [3.1](03-01-the-number-theoretic-toolkit.md): Eve sees $g$, $g^{a}$ and $g^{b}$, and computing $g^{ab}$ from those is the computational Diffie–Hellman problem.

Now the limitation, and it is not a detail. The protocol never says who Alice is talking to. An attacker sitting in the middle runs **two** exchanges — one with Alice pretending to be Bob, one with Bob pretending to be Alice — and relays traffic between them, decrypting and re-encrypting as it goes. Both endpoints see a perfectly correct protocol run. Neither can tell.

The fix is not a better key exchange. It is **authentication**, which requires something Diffie–Hellman does not have: a way to know that a public value belongs to a particular party. That is signatures ([4.1](04-01-digital-signatures.md)) and certificates ([4.2](04-02-public-key-infrastructure-and-certificates.md)), and the combination is what a TLS handshake actually is.

## The formal version

> **Protocol (Diffie–Hellman).** Public parameters: a cyclic group $G$ of prime order $q$ with generator $g$.
> 1. Alice picks $a \leftarrow \{1, \dots, q-1\}$ and sends $A = g^{a}$.
> 2. Bob picks $b \leftarrow \{1, \dots, q-1\}$ and sends $B = g^{b}$.
> 3. Alice computes $s = B^{a}$; Bob computes $s = A^{b}$. Both equal $g^{ab}$.
> 4. The session key is $k = \mathrm{KDF}(s)$.

**Step 4 is not optional.** The raw $s$ is an element of $G$, not a uniform bit string — in $(\mathbb{Z}/p)^{\times}$ it is a number below $p$ with detectable structure, such as always being a quadratic residue when the exponents are even. Running it through a key derivation function, typically HKDF built on HMAC ([2.3](02-03-message-authentication-codes.md)), produces the uniform key the symmetric layer's proofs assume.

> **Security against a passive eavesdropper.** Eve observes $(g, A, B)$. Recovering $a$ is the discrete logarithm problem; computing $s$ without recovering $a$ is the **CDH** problem; distinguishing $s$ from a random group element is the **DDH** problem. Diffie–Hellman is secure against passive eavesdropping under CDH, and the derived key is indistinguishable from random under DDH.

In words: CDH keeps Eve from computing the key, and DDH is what you need if the security proof must argue the key *looks* random.

> **Man-in-the-middle.** An active adversary Eve with secret $e$ intercepts both messages, sends $g^{e}$ to each party in place of the other's value, and ends holding two keys: $g^{ae}$ with Alice and $g^{be}$ with Bob. She decrypts, reads, re-encrypts and forwards. Neither endpoint observes any anomaly.

**Unauthenticated Diffie–Hellman provides no security against an active attacker, at all.** Not reduced security — none. This is not a weakness in the mathematics; the protocol simply makes no claim about identity.

Three practical conditions, each of which has broken a real deployment when ignored:

> **Use a prime-order subgroup.** $(\mathbb{Z}/p)^{\times}$ has order $p - 1$, which is even and usually has small factors. If Bob accepts any $A$ Alice sends, a malicious Alice can send an element of small order $t$, forcing $s$ into a set of size $t$ that she can enumerate — a **small-subgroup attack** that leaks $b \bmod t$. Defences: use a safe prime $p = 2q+1$ with $q$ prime and work in the order-$q$ subgroup, and **validate received values** by checking $A \ne 1$ and $A^{q} = 1$.

> **Use ephemeral keys.** If $a$ and $b$ are long-term, every session under them shares one key, and an attacker who eventually obtains $a$ decrypts all past traffic she recorded. With fresh $a, b$ per session — **ephemeral Diffie–Hellman**, the DHE and ECDHE of TLS — the exponents are discarded afterwards, so a later key compromise reveals nothing about earlier sessions. That property is **forward secrecy**, and it is the main reason ephemeral exchange is mandatory in TLS 1.3.

> **Do not reuse parameters carelessly.** Precomputation for the number field sieve can be done once per prime $p$ and then amortised over every exchange using it, which is the Logjam attack — a few very widely shared 1024-bit primes made a single enormous precomputation worth an adversary's while.

## Picture

![Two space-time diagrams. The upper one shows Alice and Bob exchanging their public values g to the a and g to the b across a channel, then each computing the other's value raised to their own secret, with both arriving at g to the a b. The lower one shows an attacker in the middle who substitutes her own public value in both directions, ending with one shared key with Alice and a different shared key with Bob, while both endpoints believe the run succeeded.](assets/03-02-fig1.svg)

The two halves of the figure are the same protocol. The only difference is who answered — and **nothing in the messages distinguishes the two pictures from either endpoint's point of view.** That is the precise sense in which key exchange and authentication are separate problems.

## Worked examples

**Example 1 — a full exchange by hand.**

Public parameters: $p = 29$, $g = 2$. (Check: $2$ has order 28 modulo 29, so it generates the whole group.)

Alice's secret is $a = 8$:

$$A = 2^{8} = 256 = 8 \cdot 29 + 24 \equiv 24 \pmod{29}.$$

Bob's secret is $b = 11$. By square-and-multiply, $11 = 1011_2$: $2^{1} = 2$, $2^{2} = 4$, $2^{5} = 32 \equiv 3$, $2^{10} \equiv 9$, $2^{11} \equiv 18$. So $B = 18$.

Alice computes $s = B^{a} = 18^{8} \bmod 29$. Step up: $18^{2} = 324 = 11 \cdot 29 + 5 \equiv 5$; $18^{4} \equiv 5^{2} = 25$; $18^{8} \equiv 25^{2} = 625 = 21 \cdot 29 + 16 \equiv 16$.

Bob computes $s = A^{b} = 24^{11} \bmod 29$. Note $24 \equiv -5$, so $24^{11} \equiv -5^{11}$. Now $5^{2} = 25 \equiv -4$, $5^{4} \equiv 16$, $5^{8} \equiv 256 \equiv 24$, so $5^{11} = 5^{8} \cdot 5^{2} \cdot 5 \equiv 24 \cdot 25 \cdot 5$. Reduce: $24 \cdot 25 = 600 = 20 \cdot 29 + 20 \equiv 20$; $20 \cdot 5 = 100 \equiv 100 - 87 = 13$. So $24^{11} \equiv -13 \equiv 16 \pmod{29}$.

Both get $s = 16$. The session key is $\mathrm{KDF}(16)$, not 16.

What Eve has: $p = 29$, $g = 2$, $A = 24$, $B = 18$. At this size she solves $2^{a} \equiv 24$ by trying 28 values, so the example is a demonstration and not a security claim — that is the whole point of [3.1](03-01-the-number-theoretic-toolkit.md)'s parameter sizes.

**Example 2 — the middle, with numbers.**

Same parameters, same $a = 8$ and $b = 11$. Eve picks $e = 5$ and computes $E = 2^{5} = 32 \equiv 3 \pmod{29}$.

She intercepts $A = 24$ on its way to Bob and forwards $E = 3$ instead. She intercepts $B = 18$ on its way to Alice and again forwards $E = 3$.

- Alice computes $s_{A} = E^{a} = 3^{8} \bmod 29$: $3^{2} = 9$, $3^{4} = 81 \equiv 81 - 58 = 23$, $3^{8} \equiv 23^{2} = 529 = 18 \cdot 29 + 7 \equiv 7$. Alice's key derives from **7**.
- Eve computes $A^{e} = 24^{5} \bmod 29$: $24 \equiv -5$, so $24^{5} \equiv -5^{5} = -(5^{4} \cdot 5) \equiv -(16 \cdot 5) = -80 \equiv -80 + 87 = 7$. **Match.**
- Bob computes $s_{B} = E^{b} = 3^{11} \bmod 29$: $3^{8} \equiv 7$, $3^{2} = 9$, so $3^{11} \equiv 7 \cdot 9 \cdot 3 = 189 = 6 \cdot 29 + 15 \equiv 15$. Bob's key derives from **15**.
- Eve computes $B^{e} = 18^{5} \bmod 29$: $18^{2} \equiv 5$, $18^{4} \equiv 25$, $18^{5} \equiv 25 \cdot 18 = 450 = 15 \cdot 29 + 15 \equiv 15$. **Match.**

Eve holds both sides. Alice and Bob each ran a mathematically flawless exchange, and neither has any evidence of a problem, because **there is no evidence to have** — every message is well-formed and every computation checks out.

The fix, concretely: Bob signs his value, $\sigma = \mathrm{Sign}_{sk_B}(g^{b} \Vert \text{transcript})$, and Alice verifies it against a public key she trusts because a certificate authority vouched for it. Eve cannot produce that signature, so her substituted $g^{e}$ fails verification. **The key exchange is unchanged; what is added is a reason to believe who is on the other end.**

## Watch out

- You might think Diffie–Hellman encrypts something. It does not. It agrees on a shared secret and stops; encryption is a separate step using a key derived from that secret, with an AEAD from [2.4](02-04-authenticated-encryption.md).
- You might think the shared secret is a good key. It is not, directly — it is a group element with structure and non-uniform distribution. Always pass it through a KDF.
- You might think "we use Diffie–Hellman, so we are safe from eavesdroppers." You are safe from *passive* eavesdroppers only. An attacker who can modify traffic — anyone running the wireless access point, the ISP, or the compromised router — defeats unauthenticated DH completely, and that attacker is the realistic one.

## One-liner

> Exponentiation commutes, so two strangers can compute the same secret from each other's public values; what they cannot do, without help, is know whose values those were.

## Problems

**P1 (🟢)** Public parameters $p = 23$, $g = 7$. Alice's secret is $a = 4$ and Bob's is $b = 9$. (a) Compute $A$ and $B$. (b) Compute the shared secret two ways and confirm they agree. (c) State what an eavesdropper who sees $p, g, A, B$ would have to solve, by name.

**P2 (🟡)** A server uses a fixed long-term Diffie–Hellman exponent $b$ for all clients, arguing that it saves the cost of an exponentiation per connection. (a) Name the property this sacrifices and describe what an attacker who records traffic for a year and then compromises the server obtains. (b) Give the cost, in exponentiations per handshake, of the ephemeral alternative, and say whether the saving is worth it. (c) State what the server should do if it wants to keep some precomputation benefit.

**P3 (🔴, optional)** A server accepts any group element $A$ a client sends, works modulo the safe prime $p = 2q + 1$, and computes $s = A^{b} \bmod p$ with a long-term secret $b$, then reveals through its behaviour whether $s$ equals 1. (a) Give the element a malicious client sends to learn one bit of $b$, and state which bit. (b) Suppose instead $p - 1 = 2 \cdot 3 \cdot 5 \cdot 7 \cdot q'$ and the client may send elements of order 3, 5 and 7. State what she learns and how she combines the pieces. (c) Give the two validation checks the server must perform.

<details>
<summary>Solutions</summary>

**P1** (a) $A = 7^{4} \bmod 23$. Step up: $7^{2} = 49 \equiv 49 - 46 = 3$; $7^{4} \equiv 3^{2} = 9$. So $A = 9$.

$B = 7^{9} \bmod 23$. With $7^{4} \equiv 9$: $7^{8} \equiv 9^{2} = 81 \equiv 81 - 69 = 12$; $7^{9} \equiv 12 \cdot 7 = 84 \equiv 84 - 69 = 15$. So $B = 15$.

(b) Alice: $s = B^{a} = 15^{4} \bmod 23$. $15^{2} = 225 = 9 \cdot 23 + 18 \equiv 18$; $15^{4} \equiv 18^{2} = 324 = 14 \cdot 23 + 2 \equiv 2$.

Bob: $s = A^{b} = 9^{9} \bmod 23$. $9^{2} = 81 \equiv 12$; $9^{4} \equiv 12^{2} = 144 = 6 \cdot 23 + 6 \equiv 6$; $9^{8} \equiv 6^{2} = 36 \equiv 13$; $9^{9} \equiv 13 \cdot 9 = 117 = 5 \cdot 23 + 2 \equiv 2$.

Both give $s = 2$. They agree.

(c) The eavesdropper must solve the **computational Diffie–Hellman problem**: given $g, g^{a}, g^{b}$, compute $g^{ab}$. The standard route is to solve the **discrete logarithm problem** — find $a$ from $7^{a} \equiv 9 \pmod{23}$ — which at this size takes at most 22 trials, and at realistic sizes is the barrier the whole scheme rests on.

**P2** (a) The property sacrificed is **forward secrecy**. An attacker who records ciphertext for a year and then obtains $b$ — by server compromise, subpoena, or a stolen backup — recomputes $s = A^{b}$ for every recorded handshake, since each client's $A$ travelled in the clear. She then derives every session key and decrypts **the entire year's traffic retroactively**. The compromise is not limited to sessions after the breach; it is unbounded backwards.

(b) The ephemeral alternative costs the server **one extra exponentiation per handshake**: generating $g^{b}$ for a fresh $b$, in addition to the $A^{b}$ it computes either way. So the saving under consideration is a factor of two on the key-exchange step, which is itself a small fraction of a handshake's cost once signature verification and certificate parsing are counted. **The saving is not worth it**, and TLS 1.3 removed static Diffie–Hellman from the protocol entirely for exactly this reason.

(c) If the server wants precomputation benefit without giving up forward secrecy, it should **generate ephemeral key pairs in batches ahead of time** and consume one per connection, discarding each after use. The exponentiation still happens once per connection but off the latency path, and each exponent's lifetime is a single session. It must *not* reuse one ephemeral value across several connections, which reintroduces a smaller version of the same problem for the window of reuse.

**P3** (a) Modulo a safe prime $p = 2q+1$, the group $(\mathbb{Z}/p)^{\times}$ has order $2q$ and therefore contains exactly one element of order 2, namely $-1 \equiv p - 1$. The client sends $A = p - 1$. Then

$$s = (p-1)^{b} \equiv (-1)^{b} \pmod p,$$

which is $1$ when $b$ is even and $p-1$ when $b$ is odd. So the server's observable behaviour reveals **the least significant bit of $b$** — that is, $b \bmod 2$.

(b) With small factors 3, 5 and 7 available, the client sends an element of order 3, observes which of the three possible values $s$ takes, and thereby learns $b \bmod 3$; likewise $b \bmod 5$ and $b \bmod 7$. Each costs a handful of queries, since she only has to enumerate a set of size 3, 5 or 7.

She combines them with the **Chinese remainder theorem** ([`number-theory` 2.4](../../number-theory/lessons/02-04-chinese-remainder-theorem.md)): knowing $b$ modulo $2, 3, 5, 7$ gives $b$ modulo $210$. That is about 7.7 bits of the secret for almost no work, and it shrinks the remaining search accordingly — a Pollard-rho attack on the residual unknown now costs $\sqrt{q/210}$ rather than $\sqrt{q}$. **With enough small factors the whole exponent falls**, which is why small-subgroup attacks are taken seriously and why parameters are chosen so that $p-1$ has no small factors beyond the unavoidable 2.

(c) The server must check, for a received $A$:

1. **$A \not\equiv 0, 1, p-1 \pmod p$** — reject the degenerate elements, which are the order-1 and order-2 cases.
2. **$A^{q} \equiv 1 \pmod p$** — confirm $A$ lies in the prime-order-$q$ subgroup, which rules out every element of small order at the cost of one extra exponentiation.

The second check is the general one and subsumes the first for safe primes. In elliptic-curve settings the analogue is **point validation**: confirm the received point satisfies the curve equation and lies in the correct subgroup, without which invalid-curve attacks recover the private scalar by the same Chinese-remainder assembly.

</details>

## Flashback

**From Lesson 1.2 (perfect secrecy and the one-time pad):** After a Diffie–Hellman exchange, Alice and Bob hold a shared secret $s$ and want perfect secrecy for a 10-kilobyte message, so they propose using $s$ as a one-time pad key, repeating it as needed. (a) State whether the result is perfectly secret and give the theorem that settles it. (b) Describe what an eavesdropper learns from two such messages. (c) State what they should do instead and which security notion it achieves.

<details>
<summary>Solution</summary>

(a) **Not perfectly secret.** The shared secret $s$ is a single group element — at most $\log_2 p$ bits, say 3072 — and the message is 10 kilobytes, or 81,920 bits. So $|\mathcal K| \le 2^{3072} < 2^{81920} = |\mathcal M|$, and **Shannon's theorem** ([1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md)) says no scheme with a key space smaller than the message space can be perfectly secret. Repeating the key does not enlarge the key space; it only changes how the insufficient key is spread.

(b) Repeating a pad is precisely the reuse failure of [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md). Within a single message, blocks $i$ and $j$ separated by a multiple of the pad length satisfy $c_i \oplus c_j = m_i \oplus m_j$, so the message is a Vigenère cipher whose period is the key length — breakable by exactly the slicing attack of [1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md). Across two messages it is worse: $c \oplus c' = m \oplus m'$ everywhere, and one crib recovers both in full.

(c) They should derive a symmetric key $k = \mathrm{KDF}(s)$ and encrypt with an **AEAD** such as AES-GCM or ChaCha20-Poly1305 ([2.4](02-04-authenticated-encryption.md)), using a fresh nonce per message. This achieves **IND-CPA confidentiality plus ciphertext integrity**, hence CCA security — a computational guarantee rather than an information-theoretic one, which is the correct trade given that the key exchange itself was only computationally secure. Chasing perfect secrecy on top of a CDH-based exchange would be paying an enormous cost for a property the foundation cannot support anyway.

</details>

## Connections

- **Backward:** the security rests entirely on [3.1](03-01-the-number-theoretic-toolkit.md)'s discrete-log assumptions and its warning that the group must be chosen, not just sized; the group-theoretic fact that makes it work is commutativity of exponentiation in a cyclic group ([`abstract-algebra` 1.2](../../abstract-algebra/lessons/01-02-cyclic-groups-order.md)).
- **Forward:** [3.4](03-04-elgamal-encryption.md) turns this exchange into a public-key cipher by treating $g^{b}$ as a published key; [3.5](03-05-elliptic-curve-cryptography.md) replaces the group with an elliptic curve and keeps the protocol unchanged; [4.1](04-01-digital-signatures.md) and [4.2](04-02-public-key-infrastructure-and-certificates.md) supply the authentication that closes the man-in-the-middle hole.
- **Sideways:** the handshake this lesson describes is the cryptographic content of the TLS exchange traced at the packet level in [`computer-networks` 4.4](../../computer-networks/lessons/04-04-network-security-tls-firewalls-attacks.md) — that lesson orders the messages, this one explains why the middle two cannot be forged.

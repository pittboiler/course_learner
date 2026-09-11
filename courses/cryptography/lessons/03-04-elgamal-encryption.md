# Cryptography · Lesson 3.4: ElGamal encryption

> ⏱ ~15 min · Module 3: Public-key cryptography · Builds on: [3.2 (Diffie–Hellman key exchange)](03-02-diffie-hellman-key-exchange.md) · Unlocks: [3.5 (elliptic-curve cryptography)](03-05-elliptic-curve-cryptography.md)

## Why this matters

[3.3](03-03-rsa-encryption.md) ended badly for textbook RSA: deterministic, malleable, and rescued only by a padding scheme that itself needs a careful proof and a careful implementation.

ElGamal takes the other route. It starts from Diffie–Hellman and is **randomised by construction** — a fresh exponent per message, no padding required — and its IND-CPA proof is two lines long. That makes it the cleanest public-key encryption scheme to reason about, and the one to reach for when you want to understand what the security definitions actually demand.

It also has a property RSA has by accident and ElGamal has on purpose: it is **homomorphic**. Multiply two ciphertexts and you have encrypted the product. In [3.3](03-03-rsa-encryption.md) that was the flaw; here it is the foundation of electronic voting and of every scheme that computes on encrypted data.

## The idea

Look again at Diffie–Hellman. Alice sends $g^{a}$, Bob sends $g^{b}$, and both compute $g^{ab}$. Now notice that **Bob's half does not have to happen at the time of the conversation.** He can publish $h = g^{x}$ once, on a website, years in advance.

Anyone who wants to send Bob a message picks a fresh $y$, computes the shared value $s = h^{y} = g^{xy}$, uses it to mask the message, and sends the mask's other half $g^{y}$ along with the masked message. Bob recomputes $s = (g^{y})^{x}$ from his secret and unmasks.

That is the whole scheme. **ElGamal is Diffie–Hellman with one participant's contribution posted in advance**, and the masking is multiplication in the group rather than XOR.

Three consequences fall straight out.

**It is randomised.** The exponent $y$ is fresh per message, so encrypting the same plaintext twice gives unrelated ciphertexts. No padding scheme is needed to achieve what OAEP had to bolt onto RSA.

**Its security is DDH, not CDH.** An adversary who could merely *compute* $g^{xy}$ would break it, but so would one who could merely *distinguish* $g^{xy}$ from a random group element — because if the mask is distinguishable from random, the ciphertext leaks. So ElGamal needs the decisional assumption, which is why the group must be chosen where DDH plausibly holds ([3.1](03-01-the-number-theoretic-toolkit.md)).

**It is malleable, and that cuts both ways.** Multiply two ciphertexts componentwise and you get an encryption of the product of the plaintexts. For confidentiality against an active attacker this is fatal, exactly as in [3.3](03-03-rsa-encryption.md) — ElGamal is IND-CPA secure and **not** CCA secure. For applications that want to combine encrypted values without decrypting them, it is the point.

## The formal version

> **ElGamal encryption.** Let $G$ be a cyclic group of prime order $q$ with generator $g$, in which DDH is believed hard.
> - **Gen:** pick $x \leftarrow \{1, \dots, q-1\}$, set $h = g^{x}$. Public key $(G, q, g, h)$; private key $x$.
> - **Enc$(m)$** for $m \in G$: pick $y \leftarrow \{1, \dots, q-1\}$ and output $c = (c_1, c_2) = (g^{y},\; m \cdot h^{y})$.
> - **Dec$(c_1, c_2)$:** output $c_2 \cdot (c_1^{x})^{-1}$.

**Correctness.** $c_1^{x} = (g^{y})^{x} = g^{xy} = (g^{x})^{y} = h^{y}$, so

$$c_2 \cdot (c_1^{x})^{-1} = m \cdot h^{y} \cdot (h^{y})^{-1} = m.$$

The same commutativity that made Diffie–Hellman work is the whole of the proof.

> **Theorem.** ElGamal is IND-CPA secure if and only if DDH holds in $G$.

*Proof idea (one direction).* Under DDH, the triple $(g^{x}, g^{y}, g^{xy})$ is indistinguishable from $(g^{x}, g^{y}, g^{z})$ for uniform $z$. Replace the mask $h^{y}$ by a uniform group element $g^{z}$; the adversary cannot notice the swap. But $m \cdot g^{z}$ with uniform $z$ is a **one-time pad in the group** ([1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)) — perfectly hiding, because multiplication by a uniform group element is a uniformly random bijection. So her advantage after the swap is exactly zero, and before the swap it is at most the DDH advantage. $\blacksquare$

**That proof is worth rereading**, because it is the cleanest example in the course of the reduction pattern: replace a pseudorandom object with a truly random one, argue the adversary cannot tell, then observe that the truly random case is information-theoretically secure.

> **Homomorphism.** For ciphertexts $c = (g^{y}, m \cdot h^{y})$ and $c' = (g^{y'}, m' \cdot h^{y'})$, the componentwise product
> $$c \cdot c' = \big(g^{y+y'},\; (m m') \cdot h^{y+y'}\big)$$
> is a valid encryption of $m m'$ under randomness $y + y'$.

> **Exponential ElGamal.** Encrypt $g^{m}$ instead of $m$. Then the product of ciphertexts encrypts $g^{m + m'}$, so the scheme becomes **additively** homomorphic. Decryption recovers $g^{\sum m_i}$ and then requires a discrete log — feasible only because the total is small, which is exactly the situation in vote tallying.

Two practical facts, and one hazard:

- **Ciphertext expansion is a factor of two.** A ciphertext is two group elements for one group element of message, which matters for storage and bandwidth in a way RSA's does not.
- **Messages must be group elements.** Encoding an arbitrary bit string into $G$ invertibly is fiddly, which is one reason nobody encrypts data directly with ElGamal in practice; they use it as a KEM ([3.6](03-06-hybrid-encryption-kem-dem.md)).
- **Reusing $y$ is catastrophic.** Two ciphertexts under the same $y$ satisfy $c_2 / c'_2 = m / m'$, and one known plaintext reveals the other. This is [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md)'s two-time pad in multiplicative form.

The CCA-secure variants are **hashed ElGamal** — sometimes called DHIES or, over a curve, ECIES — which replaces the group-element mask by $k = H(h^{y})$ and encrypts with an AEAD ([2.4](02-04-authenticated-encryption.md)); and **Cramer–Shoup**, which achieves CCA security in the standard model without random oracles, at the cost of a larger ciphertext.

## Picture

![A diagram of ElGamal encryption laid out as a Diffie-Hellman exchange with one side published in advance. Bob publishes h equals g to the x. Alice picks a fresh exponent y, computes c one as g to the y and the mask h to the y, and sends the pair consisting of c one and the message multiplied by the mask. Bob recovers the mask by raising c one to his secret x. Annotations note that the fresh y makes encryption randomised without padding, and that the ciphertext is two group elements.](assets/03-04-fig1.svg)

The figure makes the relationship to [3.2](03-02-diffie-hellman-key-exchange.md) literal. **The pair $(c_1, s)$ is a complete Diffie–Hellman exchange**, with Bob's message sent ahead of time and Alice's carried in the ciphertext. Everything ElGamal inherits — its randomisation, its DDH dependence, its vulnerability to an unauthenticated public key — comes from that identification.

## Worked examples

**Example 1 — a full encryption and decryption.**

Parameters $p = 29$, $g = 2$, which has order 28 and generates the group. (A real deployment would use a prime-order subgroup; this is a demonstration.)

Bob's secret is $x = 11$, so his public key is

$$h = 2^{11} \bmod 29 = 18.$$

Alice encrypts $m = 20$ with fresh $y = 7$:

$$c_1 = 2^{7} = 128 = 4 \cdot 29 + 12 \equiv 12 \pmod{29}.$$

The mask is $s = h^{y} = 18^{7} \bmod 29$. Build up: $18^{2} = 324 \equiv 324 - 319 = 5$; $18^{4} \equiv 25$; $18^{6} \equiv 25 \cdot 5 = 125 \equiv 125 - 116 = 9$; $18^{7} \equiv 9 \cdot 18 = 162 \equiv 162 - 145 = 17$. So $s = 17$.

$$c_2 = m \cdot s = 20 \cdot 17 = 340 = 11 \cdot 29 + 21 \equiv 21 \pmod{29}.$$

The ciphertext is $(12, 21)$.

Bob decrypts. He computes $c_1^{x} = 12^{11} \bmod 29$: $12^{2} = 144 \equiv 144 - 116 = 28 \equiv -1$, so $12^{10} \equiv (-1)^{5} = -1 \equiv 28$ and $12^{11} \equiv 28 \cdot 12 = 336 \equiv 336 - 319 = 17$. The mask is 17, as expected.

Then $17^{-1} \bmod 29$: $17 \cdot 12 = 204 = 7 \cdot 29 + 1$, so $17^{-1} = 12$. Finally

$$m = c_2 \cdot 17^{-1} = 21 \cdot 12 = 252 = 8 \cdot 29 + 20 \equiv 20 \pmod{29}.$$

Recovered. Note that encrypting $m = 20$ again with a different $y$ gives a completely different ciphertext — **the randomisation is free, built into the scheme rather than added by a padding layer.**

**Example 2 — tallying votes without decrypting them.**

Same parameters. A second message $m' = 5$ is encrypted with $y' = 3$:

$$c'_1 = 2^{3} = 8, \qquad h^{3} = 18^{3} \equiv 5 \cdot 18 = 90 \equiv 3, \qquad c'_2 = 5 \cdot 3 = 15.$$

So $c' = (8, 15)$. Now multiply the two ciphertexts componentwise:

$$c \cdot c' = (12 \cdot 8, \; 21 \cdot 15) = (96, 315) \equiv (9, 25) \pmod{29}.$$

Decrypt the product: $9^{11} \bmod 29$. Step up: $9^{2} = 81 \equiv 81 - 58 = 23$; $9^{4} \equiv 23^{2} = 529 \equiv 529 - 522 = 7$; $9^{8} \equiv 49 \equiv 20$; $9^{11} = 9^{8} \cdot 9^{2} \cdot 9 \equiv 20 \cdot 23 \cdot 9$. Reduce: $20 \cdot 23 = 460 \equiv 460 - 435 = 25$; $25 \cdot 9 = 225 \equiv 225 - 203 = 22$. So the mask is 22, and $22^{-1} \bmod 29$ is 4 (since $22 \cdot 4 = 88 = 3 \cdot 29 + 1$). Then

$$25 \cdot 4 = 100 \equiv 100 - 87 = 13 \pmod{29}.$$

And indeed $m m' = 20 \cdot 5 = 100 \equiv 13 \pmod{29}$. **The product of the ciphertexts decrypted to the product of the plaintexts, and nobody decrypted anything along the way.**

For voting you want sums rather than products, so you encrypt $g^{v}$ with $v \in \{0, 1\}$ per ballot. Multiplying $n$ ciphertexts yields an encryption of $g^{\sum v_i}$, and the authority decrypts once, at the end, to obtain $g^{T}$ where $T$ is the tally. Recovering $T$ needs a discrete log, but $T$ lies between 0 and the number of voters, so a small search or a baby-step giant-step pass finds it in $O(\sqrt{n})$ — **the hard problem is deliberately made easy by bounding the range**, which is a nice example of choosing parameters so that an attacker's tool becomes your own.

The scheme also needs each ballot to come with a **zero-knowledge proof** that the encrypted value really is 0 or 1 and not, say, 1000 ([4.4](04-04-zero-knowledge-proofs.md)). Homomorphic encryption without proofs of well-formedness is an invitation to ballot stuffing.

## Watch out

- You might think ElGamal's randomisation makes it safe against active attackers. It does not. ElGamal is IND-CPA and **not** CCA secure, because it is malleable by design; an attacker who can get ciphertexts decrypted recovers plaintexts exactly as in [3.3](03-03-rsa-encryption.md)'s P2. Use hashed ElGamal or Cramer–Shoup when integrity is needed.
- You might think DDH holds wherever the discrete log is hard. It does not. In the full group $(\mathbb{Z}/p)^{\times}$ the Legendre symbol distinguishes $g^{xy}$ from random in polynomial time, breaking DDH while the discrete log stays hard — so plain ElGamal in that group is insecure and must be run in the prime-order subgroup.
- You might think reusing the ephemeral $y$ saves an exponentiation. It destroys the scheme: $c_2 / c'_2 = m/m'$, and one known plaintext gives the other. It is the two-time pad from [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md) with multiplication in place of XOR.

## One-liner

> Publish half a Diffie–Hellman exchange and you have a public-key cipher that is randomised for free, provably secure under DDH, and homomorphic — which is a bug for confidentiality and a feature for computing on ciphertexts.

## Problems

**P1 (🟢)** With $p = 23$, $g = 5$, and Bob's secret $x = 6$: (a) compute Bob's public key $h$. (b) Alice encrypts $m = 9$ with $y = 4$; compute the ciphertext $(c_1, c_2)$. (c) Verify decryption by computing $c_1^{x}$ and recovering $m$.

**P2 (🟡)** An auction service encrypts each sealed bid with exponential ElGamal, so bid $b$ is sent as an encryption of $g^{b}$. (a) State what the auctioneer can compute from the ciphertexts without decrypting. (b) A bidder submits a ciphertext she constructed by taking a rival's published ciphertext and multiplying its second component by $g$. State what she has achieved and what it costs her. (c) Name the two additions the protocol needs, and say which problem each solves.

**P3 (🔴, optional)** Alice encrypts two messages to Bob and, through an implementation bug, uses the same ephemeral exponent $y$ for both. The ciphertexts are $(c_1, c_2)$ and $(c_1, c'_2)$ — note the identical first component, which is the observable symptom. (a) State what an eavesdropper computes immediately. (b) Given that the first message is the known string encoded as $m = 7$, and that $c_2 = 15$ and $c'_2 = 20$ modulo $p = 29$, recover $m'$. (c) State the general rule, and name the two earlier lessons where the same rule appeared in different clothing.

<details>
<summary>Solutions</summary>

**P1** (a) $h = 5^{6} \bmod 23$. Build up: $5^{2} = 25 \equiv 2$; $5^{4} \equiv 2^{2} = 4$; $5^{6} = 5^{4} \cdot 5^{2} \equiv 4 \cdot 2 = 8$. So $h = 8$.

(b) $c_1 = g^{y} = 5^{4} \equiv 4 \pmod{23}$, from the working above.

The mask is $h^{y} = 8^{4} \bmod 23$: $8^{2} = 64 \equiv 64 - 46 = 18$; $8^{4} \equiv 18^{2} = 324 = 14 \cdot 23 + 2 \equiv 2$. So $s = 2$ and

$$c_2 = m \cdot s = 9 \cdot 2 = 18.$$

The ciphertext is $(4, 18)$.

(c) $c_1^{x} = 4^{6} \bmod 23$: $4^{2} = 16$; $4^{3} = 64 \equiv 18$; $4^{6} \equiv 18^{2} = 324 \equiv 2$. The mask is 2, matching. Now $2^{-1} \bmod 23 = 12$, since $2 \cdot 12 = 24 \equiv 1$. So

$$m = 18 \cdot 12 = 216 = 9 \cdot 23 + 9 \equiv 9 \pmod{23}.$$

Recovered.

**P2** (a) The auctioneer can compute an encryption of the **sum of all bids**, by multiplying the ciphertexts componentwise, without decrypting any individual bid. He can likewise compute an encryption of any fixed linear combination — the sum of a subset, or a bid scaled by a public constant, by exponentiating a ciphertext.

He cannot compute comparisons. Finding the **maximum** bid, which is what an auction actually needs, is not a homomorphic operation, and this is the standard gap between "additively homomorphic" and "useful": sums are cheap and comparisons are not.

(b) Multiplying the second component by $g$ turns an encryption of $g^{b}$ into an encryption of $g^{b+1}$. So she has produced a **valid sealed bid that is exactly one unit above her rival's**, without knowing what that bid was. It costs her nothing beyond one group multiplication, and the resulting ciphertext is indistinguishable from an honestly produced one.

(This is malleability used as an attack, and it is the auction analogue of [3.3](03-03-rsa-encryption.md)'s Example 1 — the same multiplicative structure, the same consequence.)

(c) The protocol needs two things:

- **Zero-knowledge proofs of well-formedness** ([4.4](04-04-zero-knowledge-proofs.md)): each bidder proves her ciphertext encrypts a value in the permitted range, and proves **knowledge of the plaintext**. The latter is what stops (b), because a bidder who derived her ciphertext from someone else's cannot prove she knows the value inside it.
- **A commitment or non-malleable submission stage** ([4.3](04-03-commitments-and-secret-sharing.md)): bids are committed first and opened later, so no bidder sees another's ciphertext while her own is still changeable. This solves the ordering problem that (b) exploits — she needed to see the rival's ciphertext before submitting.

Together these are the standard structure of a sealed-bid protocol, and neither is optional. Homomorphic encryption gives you the tallying; it gives you no protection against participants who misbehave.

**P3** (a) Because the first components are equal, the masks are equal: $h^{y}$ is the same value $s$ in both. So the eavesdropper computes

$$\frac{c_2}{c'_2} = \frac{m \cdot s}{m' \cdot s} = \frac{m}{m'},$$

the **ratio of the two plaintexts**, with no key material at all. That is [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md)'s $c_1 \oplus c_2 = m_1 \oplus m_2$ with multiplication replacing XOR.

(b) From $m = 7$, $c_2 = 15$, $c'_2 = 20$ modulo 29. First recover the mask:

$$s = c_2 \cdot m^{-1} = 15 \cdot 7^{-1} \bmod 29.$$

Find $7^{-1}$: $7 \cdot 25 = 175 = 6 \cdot 29 + 1$, so $7^{-1} = 25$. Then $s = 15 \cdot 25 = 375 = 12 \cdot 29 + 27 \equiv 27$.

Now unmask the second message. $27^{-1} \bmod 29$: $27 \equiv -2$, and $(-2) \cdot 14 = -28 \equiv 1$, so $27^{-1} = 14$. Then

$$m' = c'_2 \cdot s^{-1} = 20 \cdot 14 = 280 = 9 \cdot 29 + 19 \equiv 19 \pmod{29}.$$

Check: $m' \cdot s = 19 \cdot 27 = 513 = 17 \cdot 29 + 20 \equiv 20 = c'_2$. Correct.

(c) The rule: **the per-message randomness must never repeat under one key**, and a repeat is not a partial failure but a complete one for the affected messages.

The same rule appeared as the **two-time pad** in [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md), where reusing a one-time-pad key leaks $m_1 \oplus m_2$; and as the **nonce-reuse failure** in [1.6](01-06-modes-of-operation.md) and [2.4](02-04-authenticated-encryption.md), where a repeated CTR or GCM nonce leaks the plaintext XOR and, in GCM's case, the authentication key as well. It will appear once more, and most dangerously, as **ECDSA nonce reuse** in [4.1](04-01-digital-signatures.md), where a repeat leaks the *private signing key* rather than merely the messages.

</details>

## Flashback

**From Lesson 3.2 (Diffie–Hellman key exchange):** Bob publishes his ElGamal public key $h = g^{x}$ on his website, and Alice fetches it over an unauthenticated connection. (a) Describe the attack an active adversary mounts, and compare it to the man-in-the-middle attack on Diffie–Hellman. (b) State whether the attack is detectable by Alice, by Bob, or by neither, and why. (c) Name what must be added.

<details>
<summary>Solution</summary>

(a) The adversary replaces the published key with her own $h' = g^{e}$ for a secret $e$ she chose. Alice, believing $h'$ is Bob's, encrypts under it; the adversary intercepts the ciphertext $(g^{y}, m \cdot h'^{y})$, computes the mask as $(g^{y})^{e} = g^{ey} = h'^{y}$, and recovers $m$. If she wants the conversation to continue undetected she re-encrypts $m$ under Bob's genuine $h$ and forwards it.

This is **exactly the man-in-the-middle attack of [3.2](03-02-diffie-hellman-key-exchange.md)**, which is unsurprising given that ElGamal *is* Diffie–Hellman with one side published. The only difference is timing: the substitution happens once, at publication or fetch time, rather than during each session, which makes it *easier* to mount and longer-lived.

(b) **Neither party detects it, absent extra machinery.** Alice sees a well-formed public key and a successful encryption; nothing about $h'$ distinguishes it from $h$, since both are just group elements. Bob sees a valid ciphertext arrive and decrypt correctly, if the adversary re-encrypts. The mathematics is functioning perfectly in both directions — the protocol simply never asserted whose key $h$ was.

(c) **Authentication of the public key**: a digital signature over $h$ from an authority Alice already trusts, packaged as a certificate. That is [4.1](04-01-digital-signatures.md) and [4.2](04-02-public-key-infrastructure-and-certificates.md), and it is the same answer [3.2](03-02-diffie-hellman-key-exchange.md) gave — which is the point worth carrying forward. **Public-key cryptography converts the problem of distributing secrets into the problem of authenticating public values.** It does not eliminate the need for some prior trust; it reduces the amount of it and makes it shareable.

</details>

## Connections

- **Backward:** the construction is [3.2](03-02-diffie-hellman-key-exchange.md) with Bob's message published in advance, its proof reuses [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)'s one-time pad argument inside the group, and its DDH requirement is the assumption distinguished carefully in [3.1](03-01-the-number-theoretic-toolkit.md).
- **Forward:** [3.5](03-05-elliptic-curve-cryptography.md) runs this identical scheme on a curve, where it is called ECIES once hashed; [3.6](03-06-hybrid-encryption-kem-dem.md) shows the KEM form that is actually deployed; [4.3](04-03-commitments-and-secret-sharing.md)'s Pedersen commitment has the same shape with the roles of message and randomness exchanged.
- **Sideways:** the homomorphism is a group homomorphism from plaintexts to ciphertexts ([`abstract-algebra` 2.1](../../abstract-algebra/lessons/02-01-homomorphisms-kernels-images.md)), and the encrypted tallying it enables is the entry point to fully homomorphic encryption, which extends the idea from one operation to both.

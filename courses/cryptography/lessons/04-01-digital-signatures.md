# Cryptography · Lesson 4.1: Digital signatures

> ⏱ ~15 min · Module 4: Signatures, protocols, and zero-knowledge · Builds on: [2.3 (message authentication codes)](02-03-message-authentication-codes.md), [3.3 (RSA encryption)](03-03-rsa-encryption.md) · Unlocks: [4.2 (public-key infrastructure and certificates)](04-02-public-key-infrastructure-and-certificates.md)

## Why this matters

[3.2](03-02-diffie-hellman-key-exchange.md) and [3.4](03-04-elgamal-encryption.md) both ended in the same place: the mathematics works, and an active attacker still wins, because nothing binds a public value to a person. Signatures are what supplies that binding, and every remaining hole in Module 3 closes here.

A signature is a MAC whose verifying key is public. That one change buys **non-repudiation** — a third party who holds only the public key can confirm the signature, so the signer cannot later deny it. A MAC can never do this, because both parties hold the same key and either could have produced the tag.

The lesson also contains the sharpest operational hazard in the course. ECDSA requires a fresh random nonce per signature, and a single repeat does not leak the messages — it leaks **the private key**.

## The idea

Invert the roles. In RSA, the private exponent $d$ inverts the public map $x \mapsto x^{e}$. Encryption applies the public direction and only the key-holder can undo it; a signature applies the **private** direction first, and anyone can check it by applying the public one.

So: $\sigma = H(m)^{d} \bmod n$, and verification checks $\sigma^{e} \stackrel{?}{=} H(m)$. Only the holder of $d$ could have produced $\sigma$; the whole world can verify.

Why hash first? Three reasons, and each is load-bearing. Messages are longer than the modulus. Without a hash the scheme is **existentially forgeable for free**: pick any $\sigma$, compute $m = \sigma^{e} \bmod n$, and you have a valid pair for a message you did not choose but did not need to. And the multiplicative structure of [3.3](03-03-rsa-encryption.md) makes $\sigma_1 \sigma_2$ a valid signature on $m_1 m_2$.

Hashing destroys all three, but it **imports a requirement**: the hash must be collision-resistant, because a signature covers $H(m)$ and nothing else. An attacker who finds $H(m_{\text{good}}) = H(m_{\text{bad}})$ gets a benign document signed and transplants the signature ([2.1](02-01-cryptographic-hash-functions.md)). That is not theoretical — it is how forged certificates were built from MD5 collisions.

The discrete-log family works differently. **DSA and ECDSA sign with a per-signature random nonce $k$**, and the signature is a pair $(r, s)$ in which $s$ mixes the nonce, the message hash and the private key. The algebra is arranged so that a verifier can check consistency without learning $d$ — and so that anyone who learns $k$, or sees $k$ repeat, can solve for $d$ in two lines.

## The formal version

> **Definition (signature scheme).** $\mathrm{Gen}(1^{n}) \to (pk, sk)$; $\mathrm{Sign}_{sk}(m) \to \sigma$; $\mathrm{Vrfy}_{pk}(m, \sigma) \in \{0,1\}$, with $\mathrm{Vrfy}_{pk}(m, \mathrm{Sign}_{sk}(m)) = 1$ always.

> **EUF-CMA for signatures.** The adversary receives $pk$ and a signing oracle, recording queried messages in $Q$. She wins by outputting $(m^{*}, \sigma^{*})$ with $\mathrm{Vrfy}_{pk}(m^{*},\sigma^{*}) = 1$ and $m^{*} \notin Q$. Secure if every PPT adversary wins with negligible probability.

Identical in form to [2.3](02-03-message-authentication-codes.md)'s MAC definition, with one change that carries all the weight: **the adversary gets the verification key.** She can test candidate forgeries offline, as many as she likes, without asking anyone.

> **RSA-FDH (full domain hash).** $\sigma = H(m)^{d} \bmod n$, where $H : \{0,1\}^{*} \to \mathbb{Z}_n^{*}$ maps onto the full domain. Verify: $\sigma^{e} \equiv H(m) \pmod n$.

RSA-FDH is EUF-CMA secure in the random oracle model under the RSA assumption. Real deployments use RSA-PSS, a randomised padding with a tighter proof; **plain "sign the hash with PKCS#1 v1.5 padding" has no such proof** and has been broken by signature-forgery attacks when implementations parsed the padding sloppily.

> **ECDSA.** Curve group of prime order $n$ with generator $G$; private key $d$, public key $Q = dG$. To sign $m$ with hash $h = H(m)$ interpreted as an integer:
> 1. Pick $k \leftarrow \{1,\dots,n-1\}$ uniformly and compute $R = kG$.
> 2. Set $r = x_R \bmod n$; restart if $r = 0$.
> 3. Set $s = k^{-1}(h + r d) \bmod n$; restart if $s = 0$.
> 4. Output $(r, s)$.
>
> Verify: compute $w = s^{-1} \bmod n$, $u_1 = hw$, $u_2 = rw$, and $R' = u_1 G + u_2 Q$; accept if $x_{R'} \bmod n = r$.

*Why verification works.* Substituting $s = k^{-1}(h + rd)$ gives $w = s^{-1} = k(h+rd)^{-1}$, so

$$u_1 G + u_2 Q = hwG + rwQ = w(h + rd)G = k(h+rd)^{-1}(h+rd)G = kG = R.$$

So $R' = R$ and its $x$-coordinate reduces to $r$. The verifier reconstructs the nonce's point without knowing the nonce.

> **Nonce reuse recovers the private key.** If two signatures $(r, s_1)$ on $h_1$ and $(r, s_2)$ on $h_2$ share the same $k$ — visible immediately, because $r$ is the same — then
> $$k = \frac{h_1 - h_2}{s_1 - s_2} \bmod n, \qquad d = \frac{s_1 k - h_1}{r} \bmod n.$$

*Derivation.* $s_1 = k^{-1}(h_1 + rd)$ and $s_2 = k^{-1}(h_2 + rd)$. Subtract: $s_1 - s_2 = k^{-1}(h_1 - h_2)$, so $k = (h_1-h_2)(s_1-s_2)^{-1}$. Then rearrange $s_1 k = h_1 + rd$ to get $d$.

**This is the worst failure mode in the course.** A repeated nonce in CTR mode leaks two plaintexts ([1.6](01-06-modes-of-operation.md)); in GCM it leaks the authentication key ([2.4](02-04-authenticated-encryption.md)); here it leaks the **signing key itself**, permanently, from two public signatures. It broke the PlayStation 3's code-signing in 2010, where the nonce was a constant, and it has repeatedly drained cryptocurrency wallets whose random number generators were weak.

The fix is **deterministic nonces**: derive $k = \mathrm{HMAC}_{d}(h)$ from the private key and the message hash, as in RFC 6979 and, by design, in **Ed25519**. The nonce is then unpredictable to anyone without $d$, and identical messages give identical signatures, which is harmless. Ed25519 additionally avoids the modular inversion, uses a twisted Edwards curve with complete addition formulas (no special cases to get wrong), and is deterministic by specification rather than by convention.

| | MAC | Signature |
|---|---|---|
| Keys | one shared | private signs, public verifies |
| Who can verify | only key-holders | anyone |
| Non-repudiation | no | yes |
| Speed | nanoseconds per byte | ~50 microseconds per signature |
| Size | 16–32 bytes | 64 bytes (Ed25519), 256 (RSA-2048) |

## Picture

![Two panels. The left panel shows a MAC: Alice sends a message and tag to Bob, both hold the same key, and a note says either could have produced the tag, with a cross marking that no third party can adjudicate. The right panel shows a signature: Alice holds the private key and Bob verifies with the public key, and an arrow leads down to a third party or court which can also verify without holding any secret, so Alice cannot deny the signature.](assets/04-01-fig1.svg)

The asymmetry is the product. **A MAC answers "did someone with the key send this"; a signature answers "did *this specific party* send this, and can I prove it to someone else".** The second question is the one contracts, software updates and certificates need, and it is unanswerable with a shared secret no matter how the scheme is arranged.

## Worked examples

**Example 1 — forging textbook RSA signatures, two ways.**

Take $n = 391$ and $e = 3$, with the signer holding $d = 235$. Suppose signatures are $\sigma = m^{d} \bmod n$ with **no hash**, and verification checks $\sigma^{e} \equiv m$.

*Existential forgery, no queries at all.* Pick any $\sigma$ you like, say $\sigma = 5$, and compute

$$m = \sigma^{e} = 5^{3} = 125 \bmod 391 = 125.$$

The pair $(125, 5)$ verifies, because verification is exactly the computation you just performed. You have a valid signature on the message 125 from a signer who has never seen it. It is a message you did not choose — but EUF-CMA says **any** fresh message counts, and in a system where messages are numbers (an amount, an identifier, a version) the attacker often only needs one that is meaningful.

*Multiplicative forgery, two queries.* Ask for signatures on $m_1$ and $m_2$, receiving $\sigma_1, \sigma_2$. Then

$$(\sigma_1 \sigma_2)^{e} = \sigma_1^{e} \sigma_2^{e} = m_1 m_2 \pmod n,$$

so $\sigma_1 \sigma_2$ is a valid signature on $m_1 m_2 \bmod n$ — a message never queried. This is the same multiplicative structure that made textbook RSA encryption malleable in [3.3](03-03-rsa-encryption.md), read in the signing direction.

Both forgeries die once a hash is applied, because the attacker would have to find a message whose hash equals her chosen value — a preimage — or two messages whose hashes multiply correctly, neither of which a collision-resistant hash permits.

**Example 2 — recovering a private key from one repeated nonce.**

Curve $y^{2} = x^{3} + 2x + 2$ over $\mathbb{F}_{17}$, generator $G = (5,1)$ of prime order $n = 19$ ([3.5](03-05-elliptic-curve-cryptography.md)). The signer's private key is $d = 7$, so $Q = 7G = (0,6)$.

She signs two messages with hashes $h_1 = 11$ and $h_2 = 3$, and — through a broken random number generator — uses $k = 5$ both times. Then $R = 5G = (9,16)$ and $r = 9 \bmod 19 = 9$ in both signatures.

With $5^{-1} \equiv 4 \pmod{19}$:

$$s_1 = 4(11 + 9 \cdot 7) = 4 \cdot 74 \equiv 4 \cdot 17 = 68 \equiv 11 \pmod{19},$$
$$s_2 = 4(3 + 63) = 4 \cdot 66 \equiv 4 \cdot 9 = 36 \equiv 17 \pmod{19}.$$

The two published signatures are $(9, 11)$ and $(9, 17)$. **The repeated $r$ is visible to anyone**, which is how an attacker knows to try.

Recover the nonce:

$$k = \frac{h_1 - h_2}{s_1 - s_2} = \frac{11-3}{11-17} = \frac{8}{-6} \equiv \frac{8}{13} \pmod{19}.$$

Since $13 \cdot 3 = 39 \equiv 1 \pmod{19}$, we have $13^{-1} = 3$, so $k \equiv 8 \cdot 3 = 24 \equiv 5$. Correct.

Recover the key:

$$d = \frac{s_1 k - h_1}{r} = \frac{11 \cdot 5 - 11}{9} = \frac{44}{9} \equiv \frac{6}{9} \pmod{19}.$$

Since $9 \cdot 17 = 153 \equiv 1 \pmod{19}$, we have $9^{-1} = 17$, so $d \equiv 6 \cdot 17 = 102 \equiv 7 \pmod{19}$. **The private key, from two public signatures and four modular operations.**

At real sizes nothing changes but the arithmetic width. And the attacker does not need a full repeat: partial nonce leakage — a few known bits per signature, from a timing or cache side channel — recovers $d$ from a few dozen signatures by lattice reduction. **The nonce is as sensitive as the key**, which is why deterministic derivation is now the default.

## Watch out

- You might think signing is "encrypting with the private key". For RSA the formulas look alike, but the framing is wrong and leads to real errors: signature schemes need hashing and padding designed for *unforgeability*, not confidentiality, and using an encryption padding for signing has produced breaks. For DSA and ECDSA there is no encryption interpretation at all.
- You might think a signature guarantees the message is true, recent, or intended for you. It guarantees only that the key-holder produced it. Replay, key compromise and social engineering are all outside the guarantee; freshness needs a nonce or timestamp *inside* the signed data, exactly as in [2.3](02-03-message-authentication-codes.md).
- You might think a randomly generated nonce is safe because the generator "looks fine". Every ECDSA key-recovery incident began that way. Use RFC 6979 or Ed25519 so that correctness does not depend on a runtime entropy source that may be cold at boot, virtualised, or shared across cloned VM images.

## One-liner

> Sign with the private key so anyone can verify with the public one — and guard the per-signature nonce as fiercely as the key itself, because one repeat hands it over.

## Problems

**P1 (🟢)** A software vendor signs updates as $\sigma = H(\text{update})^{d} \bmod n$. For each situation, state whether an attacker can install a malicious update and give the reason in one sentence. (a) She finds a collision in $H$ before the vendor signs anything. (b) She finds a preimage of an existing signed update's hash. (c) She obtains one valid $(\text{update}, \sigma)$ pair and wants to sign a different update. (d) She learns the vendor's modulus $n$ and exponent $e$.

**P2 (🟡)** Two ECDSA signatures over a curve of prime order $n = 23$ are published: $(r, s_1) = (6, 9)$ on hash $h_1 = 4$ and $(r, s_2) = (6, 20)$ on hash $h_2 = 15$. (a) State what the equal $r$ values reveal. (b) Recover the nonce $k$. (c) Recover the private key $d$, and verify it by checking $s_1$.

**P3 (🔴, optional)** A team proposes deterministic ECDSA with $k = H(m)$ — the message hash alone, no private key involved. (a) State why this removes the nonce-reuse hazard for distinct messages. (b) Show the scheme is nonetheless completely broken, by giving the attack and the algebra. (c) State the one change that fixes it and explain why that change is sufficient.

<details>
<summary>Solutions</summary>

**P1** (a) **Yes.** She constructs a benign update and a malicious one with the same hash, persuades the vendor to sign the benign one, and transplants the signature — the signature covers $H(\text{update})$, which is identical for both. This is the collision-resistance requirement doing its job, and its absence is why MD5-signed code was retired.

(b) **Yes**, though this is a much harder attack. A preimage of an already-signed hash is a different update carrying an existing valid signature, so she needs no cooperation from the vendor at all. Preimage resistance is $2^{n}$ work against a collision's $2^{n/2}$ ([2.2](02-02-the-birthday-bound-and-merkle-damgard.md)), so this is the expensive route and the one nobody takes.

(c) **No**, assuming the hash is sound and the padding is proof-carrying. Producing $\sigma'$ for a different update means inverting $x \mapsto x^{e}$ at a point she cannot control, which is the RSA problem. Note that without a hash she *could*, by the multiplicative forgery of Example 1.

(d) **No.** The modulus and exponent are the public key; they are printed in the certificate and shipped with every client. Kerckhoffs's principle ([1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md)) says the design and public parameters are assumed known, and a scheme whose security depended on hiding $n$ would be broken by definition.

**P2** (a) The equal $r$ values mean both signatures used the **same nonce $k$**, since $r = x_{kG} \bmod n$ is determined by $k$. This is publicly visible in the signatures themselves, so an attacker scanning a blockchain or a certificate log finds these instances by simple search.

(b) Using $k = (h_1 - h_2)(s_1 - s_2)^{-1} \bmod 23$:

$$h_1 - h_2 = 4 - 15 = -11 \equiv 12, \qquad s_1 - s_2 = 9 - 20 = -11 \equiv 12 \pmod{23}.$$

So $k = 12 \cdot 12^{-1} = 1 \pmod{23}$. The nonce was $k = 1$ — a plausible failure for a generator returning a constant.

(c) Using $d = (s_1 k - h_1) r^{-1} \bmod 23$:

$$s_1 k - h_1 = 9 \cdot 1 - 4 = 5.$$

Find $6^{-1} \bmod 23$: $6 \cdot 4 = 24 \equiv 1$, so $6^{-1} = 4$. Then

$$d = 5 \cdot 4 = 20 \pmod{23}.$$

Verify by recomputing $s_1$: $s_1 = k^{-1}(h_1 + r d) = 1^{-1}(4 + 6 \cdot 20) = 4 + 120 = 124$, and $124 = 5 \cdot 23 + 9$, so $s_1 \equiv 9$. It matches the published value. The private key is $d = 20$.

**P3** (a) With $k = H(m)$, two **distinct** messages have distinct hashes with overwhelming probability, so they get distinct nonces and the repeated-$r$ attack of Example 2 never fires. Signing the same message twice gives the same signature, which is harmless. So the stated hazard is genuinely removed.

(b) The scheme is broken because **the nonce is public**. Anyone can compute $H(m)$ — the hash is an unkeyed public function ([2.1](02-01-cryptographic-hash-functions.md)) — so an attacker who sees any single signature $(r,s)$ on a known message $m$ computes $k = H(m)$ and then solves the signing equation directly:

$$s = k^{-1}(h + rd) \implies sk = h + rd \implies d = \frac{sk - h}{r} \bmod n.$$

**One signature on one known message yields the private key.** This is strictly worse than random-nonce ECDSA, which needs two signatures and a generator failure; here no failure is required, and the attack works on the very first signature ever published.

(c) The fix is to **make the nonce depend on the private key**:

$$k = \mathrm{HMAC}_{d}(H(m)),$$

which is RFC 6979's construction and, in spirit, Ed25519's. It is sufficient because HMAC is a PRF ([2.3](02-03-message-authentication-codes.md)): without $d$, its output at any point is indistinguishable from random, so the attacker cannot compute $k$ and is back to attacking the discrete log. At the same time the nonce remains a deterministic function of $(d, m)$, so it never repeats across distinct messages and never depends on a runtime entropy source — the two properties that the random and the hash-only variants each achieved only one of.

</details>

## Flashback

**From Lesson 2.1 (cryptographic hash functions):** A certificate authority signs certificates as $\sigma = H(\text{cert})^{d} \bmod n$ using MD5, for which collisions can be found in seconds. (a) Describe the attack an adversary mounts to obtain a fraudulent certificate, in the order she performs the steps. (b) State which of MD5's three properties she needs and which she does not. (c) State why moving to SHA-256 fixes it and why simply making the RSA key larger does not.

<details>
<summary>Solution</summary>

(a) The steps, in order:

1. She constructs **two certificates** with the same MD5 hash: one benign — say, a certificate for a domain she legitimately controls — and one fraudulent, naming a bank and, in the historical attack, carrying the flag that makes it a *certificate authority* certificate. Making two such structured documents collide requires a chosen-prefix collision, which for MD5 is practical.
2. She submits the **benign** certificate to the authority through the normal process and pays the fee. The authority inspects it, finds nothing wrong, and signs it.
3. She detaches the signature and attaches it to the **fraudulent** certificate. Verification computes $H(\text{fraudulent cert})$, which equals $H(\text{benign cert})$ by construction, and the signature checks out.

She now holds a certificate the authority never saw, signed by it. In the 2008 demonstration of this attack the result was a rogue intermediate CA, which could issue certificates for any domain at all.

(b) She needs **collision resistance to fail** — she chooses both documents, which is the weakest requirement on the attacker and the first property to break. She needs **neither preimage nor second-preimage resistance**: she never has to match a hash she did not choose, and she never has to find a partner for a document someone else fixed. MD5's preimage resistance remains unbroken to this day, and it is irrelevant to this attack.

(c) SHA-256 fixes it because no collision is known and the generic cost is $2^{128}$ ([2.2](02-02-the-birthday-bound-and-merkle-damgard.md)), putting the first step out of reach.

A larger RSA key does nothing, because **the attacker never attacked RSA.** She never computed a signature, never inverted the trapdoor, never touched $d$. She obtained a genuine signature through the front door and moved it to a different document that the signature already covered. Growing the modulus from 2048 to 8192 bits raises the cost of an attack she was not mounting. This is the clearest illustration in the course of a general rule: **strengthening the wrong component is not defence in depth, it is decoration.**

</details>

## Connections

- **Backward:** the definition is [2.3](02-03-message-authentication-codes.md)'s with a public verification key, the RSA construction inverts [3.3](03-03-rsa-encryption.md)'s trapdoor, ECDSA lives in [3.5](03-05-elliptic-curve-cryptography.md)'s group, and the hash-then-sign paradigm is where [2.1](02-01-cryptographic-hash-functions.md)'s collision resistance finally becomes load-bearing.
- **Forward:** [4.2](04-02-public-key-infrastructure-and-certificates.md) chains signatures into a trust hierarchy and finally closes the man-in-the-middle hole from [3.2](03-02-diffie-hellman-key-exchange.md); [4.4](04-04-zero-knowledge-proofs.md) shows that Schnorr signatures are a zero-knowledge proof with the challenge hashed, which explains where the $(r,s)$ shape comes from.
- **Sideways:** signature verification is what makes [`distributed-systems` 4.5](../../distributed-systems/lessons/04-05-byzantine-fault-tolerance.md)'s authenticated Byzantine protocols possible — an unforgeable, transferable statement is exactly what lets one honest node convince another of what a third said.

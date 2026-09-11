# Cryptography · Lesson 3.6: Hybrid encryption — KEM/DEM

> ⏱ ~15 min · Module 3: Public-key cryptography · Builds on: [2.4 (authenticated encryption)](02-04-authenticated-encryption.md), [3.3 (RSA encryption)](03-03-rsa-encryption.md) · Unlocks: [4.1 (digital signatures)](04-01-digital-signatures.md)

## Why this matters

Everything in Module 3 so far encrypts one group element or one integer below $n$. Real messages are megabytes.

The naive repair — chop the message into blocks and apply the public-key operation to each — is a disaster on three axes at once: it is thousands of times slower, it expands the ciphertext, and it reintroduces the block-by-block structure that [1.6](01-06-modes-of-operation.md) showed is fatal. Nobody does it.

What everybody does instead is **hybrid encryption**: use the public key once, to transport a short symmetric key, then use that key with an AEAD for the data. This lesson gives the construction its modern name and formal shape — KEM/DEM — and shows that the shape is not just efficient but *cleaner*, because a KEM needs no padding scheme and has no decryption-failure oracle.

## The idea

Split the job in two.

The **key encapsulation mechanism** produces a fresh symmetric key and a public-key ciphertext carrying it. Notice the crucial design choice: the KEM **generates** the key rather than accepting one as input. The caller does not get to choose it, which sounds like a restriction and is in fact the whole trick — because if the key is produced by the mechanism, it can be defined as the hash of an internal random value, and no message ever needs padding.

The **data encapsulation mechanism** is just an AEAD from [2.4](02-04-authenticated-encryption.md), keyed by whatever the KEM produced.

For RSA this removes OAEP entirely. Instead of padding a message and raising it to $e$, pick a uniform $r$ in $\mathbb{Z}_n$, send $c_0 = r^{e} \bmod n$, and set $k = \mathrm{KDF}(r)$. There is no structured plaintext to malleate, no padding check to leak through, and the Bleichenbacher family of attacks has nothing to attach to. **RSA-KEM is a simpler and safer object than RSA-OAEP**, and it is a good example of a problem solved by changing the interface rather than by strengthening the mechanism.

For Diffie–Hellman the KEM is even more natural, because ephemeral DH already *is* one: the encapsulation is $g^{y}$ and the key is $\mathrm{KDF}(h^{y})$. That is hashed ElGamal from [3.4](03-04-elgamal-encryption.md), and on a curve it is ECIES.

One more property worth naming. A KEM can be built so that **decapsulation never fails**: a malformed $c_0$ produces a key that is pseudorandom rather than an error. The recipient then fails at the AEAD tag check, which is constant-time and reveals nothing. That is **implicit rejection**, and it is how post-quantum KEMs are constructed ([4.5](04-05-post-quantum-cryptography.md)).

## The formal version

> **Definition (KEM).** Three algorithms: $\mathrm{Gen}(1^{n}) \to (pk, sk)$; $\mathrm{Encap}(pk) \to (c_0, k)$ with $k \in \{0,1\}^{\ell}$; $\mathrm{Decap}(sk, c_0) \to k$ or $\bot$. Correctness: $\mathrm{Decap}(sk, c_0) = k$ whenever $(c_0,k) \leftarrow \mathrm{Encap}(pk)$.

> **CCA security for a KEM.** The adversary receives $pk$, a challenge $(c_0^{*}, k_b)$ where $k_0$ is the real encapsulated key and $k_1$ is uniform, and a decapsulation oracle she may query on anything but $c_0^{*}$. She must guess $b$ with advantage at most negligible.

In words: the transported key is indistinguishable from a fresh random key, even to an adversary who can decapsulate other ciphertexts.

> **Hybrid construction.** $\mathrm{Enc}_{pk}(m)$: run $(c_0, k) \leftarrow \mathrm{Encap}(pk)$, then $c_1 \leftarrow \mathrm{DEM}.\mathrm{Enc}_{k}(m)$, and output $(c_0, c_1)$. Decryption decapsulates $c_0$ to get $k$, then decrypts $c_1$.

> **KEM/DEM composition theorem.** If the KEM is CCA-secure and the DEM is a one-time CCA-secure (authenticated) encryption scheme, then the hybrid scheme is CCA-secure.

*Proof idea.* Replace the real key $k$ with a uniform one; the KEM's CCA security says the adversary cannot notice. Now the DEM is running under a key independent of everything else, used once, so its own one-time security applies directly. $\blacksquare$

**The theorem is why the split is worth making formal.** It licenses mixing any CCA-secure KEM with any AEAD, so a post-quantum KEM can be dropped into an existing protocol without reproving the data layer — which is exactly how the current migration is proceeding.

Three KEMs in one table:

| KEM | Encapsulation $c_0$ | Key $k$ | Assumption |
|---|---|---|---|
| RSA-KEM | $r^{e} \bmod n$ for uniform $r \in \mathbb{Z}_n$ | $\mathrm{KDF}(r)$ | RSA |
| DHIES / ECIES | $g^{y}$ | $\mathrm{KDF}(h^{y})$ | CDH in the random oracle model, or gap-DH |
| ML-KEM (Kyber) | a lattice ciphertext | $\mathrm{KDF}(\text{shared polynomial})$ | Module-LWE ([4.5](04-05-post-quantum-cryptography.md)) |

**Implementation notes that are not optional.** The KDF must bind the encapsulation: $k = \mathrm{KDF}(r \,\Vert\, c_0)$ rather than $\mathrm{KDF}(r)$, so that a ciphertext cannot be mauled into another one yielding the same key. The DEM's nonce may be fixed — typically all zeros — precisely because the key is used for exactly one message, which is the one situation where [1.6](01-06-modes-of-operation.md)'s nonce rule is satisfied trivially. And **ephemeral-static ECDH gives forward secrecy only if the sender's $y$ is discarded**; the recipient's long-term $x$ still decrypts every past ciphertext, so file encryption with ECIES is not forward-secret, while an interactive handshake with ephemeral keys on both sides is.

## Picture

![A pipeline diagram. On the left a box labelled KEM encapsulate takes the public key, picks a random value, derives the symmetric key from it, and produces the encapsulation. An arrow carries the symmetric key to a box on the right labelled DEM, an authenticated encryption scheme, which encrypts the message of any length. Both boxes feed into a combined ciphertext consisting of the encapsulation and the encrypted data. Captions note that exactly one public-key operation occurs per message, that a malformed encapsulation yields a random-looking key rather than an error, and that a CCA-secure KEM plus a CCA-secure DEM composes to a CCA-secure scheme.](assets/03-06-fig1.svg)

The shape to remember: **one public-key operation, of fixed cost, regardless of message size.** Everything that scales with the data happens in the right-hand box, where a modern CPU runs at gigabytes per second. The asymmetric layer's job is reduced to moving 32 bytes.

## Worked examples

**Example 1 — pricing the naive alternative.**

Encrypt a one-megabyte file with RSA-2048 directly, using OAEP with SHA-256.

The modulus is 256 bytes. OAEP with a 32-byte hash reserves two hash outputs plus a leading byte, leaving

$$256 - 2(32) - 2 = 190 \text{ bytes of payload per operation}.$$

So the file needs

$$\left\lceil \frac{1{,}048{,}576}{190} \right\rceil = 5{,}519 \text{ RSA operations}.$$

At a typical 1,500 private-key operations per second, decryption takes about **3.7 seconds**. The same file under AES-GCM at 1 GB/s takes about **1 millisecond** — a factor of roughly 3,500.

Ciphertext expansion is the second cost: $5{,}519 \times 256$ bytes is 1.41 MB, a **35 percent expansion** for no benefit.

And the third cost is the one that should end the discussion. Encrypting block by block under a fixed key is a mode of operation, and this one is ECB — so an attacker learns which 190-byte chunks are identical, exactly as in [1.6](01-06-modes-of-operation.md)'s Example 1. OAEP's randomness prevents that here, but the construction is one careless optimisation ("cache the padding for speed") away from ECB, and it has no integrity at all.

The hybrid version: **one** RSA operation, under a millisecond, plus one AEAD pass. The ciphertext is 1 MB plus 256 bytes plus a 16-byte tag.

**Example 2 — why a KEM needs no padding.**

Compare the two RSA constructions side by side.

*RSA-OAEP.* Encrypting $m$ means constructing a padded block, hashing twice, and applying $x \mapsto x^{e}$. Decryption applies $x \mapsto x^{d}$, unpads, and **checks the structure**. That check has two outcomes, and the entire history of Bleichenbacher and ROBOT attacks is about an adversary learning which one occurred ([3.3](03-03-rsa-encryption.md)).

*RSA-KEM.* Encapsulation picks $r$ uniformly from $\mathbb{Z}_n$, sends $c_0 = r^{e} \bmod n$, and sets $k = \mathrm{KDF}(r \Vert c_0)$. Decapsulation computes $r = c_0^{d} \bmod n$ and rehashes.

Now ask what an adversary gains by submitting a malformed $c_0$. **Nothing, because there is no such thing as malformed.** Every element of $\mathbb{Z}_n$ is a valid ciphertext of *some* $r$, since $x \mapsto x^{e}$ is a permutation ([3.3](03-03-rsa-encryption.md)). Decapsulation always succeeds and always returns a key; a tampered $c_0$ simply yields a different, unpredictable key, and the failure surfaces later at the AEAD tag check — which is constant-time and returns one bit that the adversary already knew.

The security argument is correspondingly short. Under the RSA assumption, $r$ is unpredictable from $c_0$; modelling the KDF as a random oracle, $k$ is then indistinguishable from uniform. No padding, no structure, no oracle.

**The general principle is worth extracting: an interface that cannot represent an invalid input has no input-validation vulnerabilities.** OAEP defends a structured plaintext; the KEM removes the structure so there is nothing to defend.

## Watch out

- You might think hybrid encryption is a performance hack that costs some security. It costs none — the composition theorem gives CCA security for the whole — and in the RSA case it *gains* security by eliminating the padding oracle.
- You might think the DEM needs a fresh nonce per message. It needs a fresh **key** per message, which the KEM provides, and given that, a fixed nonce is correct. Reusing the KEM's key across messages is what breaks, and that is a protocol error, not a nonce error.
- You might think ECIES gives forward secrecy because it uses an ephemeral $y$. It does not, if the recipient's key is long-term: anyone who later obtains $x$ computes $(g^{y})^{x}$ for every recorded ciphertext. Forward secrecy needs *both* sides ephemeral, which requires interaction ([3.2](03-02-diffie-hellman-key-exchange.md)).

## One-liner

> Use the public key once, to ship 32 bytes, and let an AEAD carry the data — and because the KEM generates the key rather than accepting one, there is no padding and therefore no padding oracle.

## Problems

**P1 (🟢)** A service encrypts 10 MB backups. Using 190 usable bytes per RSA-2048 OAEP operation and 1,500 private-key operations per second: (a) compute the number of operations and the decryption time for the direct approach; (b) compute the ciphertext size and the expansion factor; (c) state the corresponding figures for the hybrid approach, with a 16-byte AEAD tag.

**P2 (🟡)** A developer implements ECIES with $k = \mathrm{KDF}(h^{y})$, omitting $c_0$ from the KDF input, and uses AES-GCM with an all-zero nonce. (a) State whether the zero nonce is a problem here and why. (b) State what is lost by omitting $c_0$ from the KDF, and describe the property an attacker might try to violate. (c) Give the corrected KDF call.

**P3 (🔴, optional)** A team wants to add a post-quantum KEM to an existing ECIES-based protocol without abandoning the curve, in case the new scheme turns out to be broken. (a) Give the construction that combines two KEMs so that the result is secure if **either** is, and state where the combination happens. (b) Prove informally that the combined scheme is secure if at least one component KEM is CCA-secure. (c) State the cost in bytes and in operations, and one reason a team might still hesitate.

<details>
<summary>Solutions</summary>

**P1** (a) A 10 MB backup is $10 \times 1{,}048{,}576 = 10{,}485{,}760$ bytes, so

$$\left\lceil \frac{10{,}485{,}760}{190} \right\rceil = 55{,}188 \text{ RSA operations}.$$

At 1,500 per second, decryption takes

$$\frac{55{,}188}{1{,}500} \approx 36.8 \text{ seconds}.$$

(b) Each operation emits a full 256-byte modulus, so the ciphertext is $55{,}188 \times 256 = 14{,}128{,}128$ bytes, about 13.5 MB. The expansion factor is

$$\frac{256}{190} \approx 1.35,$$

a 35 percent increase.

(c) Hybrid: **one** RSA operation, about 0.7 milliseconds, plus one AEAD pass over 10 MB at roughly 10 milliseconds at 1 GB/s. The ciphertext is $10{,}485{,}760 + 256 + 16 = 10{,}486{,}032$ bytes — an expansion of 272 bytes, or 0.0026 percent. **Three orders of magnitude faster and effectively no expansion**, for a construction that is also more secure.

**P2** (a) **The zero nonce is not a problem**, provided the key really is used for exactly one message. ECIES generates a fresh ephemeral $y$ per encryption, so $k = \mathrm{KDF}(h^{y})$ is fresh per message, and [1.6](01-06-modes-of-operation.md)'s rule — never repeat a (key, nonce) pair — is satisfied because the key never repeats. This is the one legitimate use of a fixed nonce.

The caveat is that it becomes wrong the moment anything reuses the key: a protocol that sends a reply under the same derived key, or caches the ephemeral value across messages for speed, breaks immediately. Deriving separate keys per direction removes the hazard.

(b) Omitting $c_0 = g^{y}$ from the KDF input loses the **binding between the key and the ciphertext that carried it**. The key then depends only on the shared secret $h^{y}$, so an attacker who can produce a different encapsulation $c'_0$ yielding the same shared secret obtains the same $k$ — and the property she is attacking is **non-malleability** of the encapsulation.

Concretely this matters in groups with a non-trivial cofactor ([3.5](03-05-elliptic-curve-cryptography.md)): if $c_0$ and $c'_0 = c_0 + T$ for a small-order point $T$ can yield the same shared secret after cofactor clearing, then two distinct ciphertexts decapsulate to one key, and the scheme is not CCA-secure even though no key was recovered. Binding $c_0$ into the KDF makes the keys differ and the attack vanish.

(c) The corrected call:

$$k = \mathrm{KDF}\big(\, h^{y} \,\Vert\, c_0 \,\Vert\, \text{context} \,\big),$$

where $c_0 = g^{y}$ is the encapsulation and *context* is a protocol label plus the recipient's public key. Including the recipient's key additionally prevents an attacker from replaying a ciphertext to a different recipient and having it decapsulate meaningfully.

**P3** (a) The construction is a **hybrid or combiner KEM**. Run both KEMs independently, producing $(c_0^{\mathrm{ec}}, k^{\mathrm{ec}})$ and $(c_0^{\mathrm{pq}}, k^{\mathrm{pq}})$, and derive the single DEM key by hashing both together:

$$k = \mathrm{KDF}\big(k^{\mathrm{ec}} \,\Vert\, k^{\mathrm{pq}} \,\Vert\, c_0^{\mathrm{ec}} \,\Vert\, c_0^{\mathrm{pq}}\big),$$

sending $(c_0^{\mathrm{ec}}, c_0^{\mathrm{pq}}, c_1)$. **The combination happens in the KDF**, not by encrypting one key under the other — nesting would make the result only as strong as the outer layer, which is the opposite of the goal.

(b) Suppose at least one component KEM is CCA-secure; say it is the post-quantum one. Then $k^{\mathrm{pq}}$ is indistinguishable from a uniform string to any efficient adversary, even one who knows $k^{\mathrm{ec}}$ entirely — because the two KEMs use independent randomness and independent keys.

Model the KDF as a random oracle. Its output on an input containing an unpredictable component is unpredictable: to learn anything about $k$ the adversary would have to query the oracle at the exact input, which requires knowing $k^{\mathrm{pq}}$. So $k$ is indistinguishable from uniform, and the composition theorem then gives CCA security for the whole hybrid. The argument is symmetric, so it runs identically if the curve KEM is the sound one and the lattice scheme is broken. $\blacksquare$

(c) Costs. **Bytes:** X25519 contributes 32 bytes of encapsulation and ML-KEM-768 about 1,088, so roughly 1.1 kB per message instead of 32 bytes — the dominant cost, and the reason handshake sizes rose noticeably during the migration. **Operations:** one scalar multiplication plus one lattice encapsulation, both sub-millisecond; the computational cost is not the problem.

A reason to hesitate: the extra kilobyte can push a handshake past a network's path MTU, causing fragmentation or, in the case of DNS and QUIC's initial flight, outright failure on middleboxes that assume small packets. **The migration's hard part has been packet sizes, not cryptography** — which is a fair summary of why this lesson's construction matters: the cryptographic composition was the easy, already-proved part.

</details>

## Flashback

**From Lesson 3.3 (RSA encryption):** A protocol uses RSA-KEM: the sender picks $r$ uniformly in $\mathbb{Z}_n$, sends $c_0 = r^{3} \bmod n$ with $e = 3$, and sets $k = \mathrm{KDF}(r \Vert c_0)$. (a) State whether the small-message cube-root attack of [3.3](03-03-rsa-encryption.md) applies, with reasoning. (b) State whether Håstad's broadcast attack applies if the same $k$ is sent to three recipients. (c) Say what this shows about where RSA's textbook weaknesses actually came from.

<details>
<summary>Solution</summary>

(a) **It does not apply.** The cube-root attack needs $r^{3} < n$, so that the modular reduction never occurs and an integer cube root recovers $r$. Here $r$ is drawn **uniformly from $\mathbb{Z}_n$**, so it is a full-size element: $r$ is about $\log_2 n$ bits, and $r^{3}$ exceeds $n$ with overwhelming probability. The probability that $r < n^{1/3}$ is $n^{1/3}/n = n^{-2/3}$, which for a 2048-bit modulus is about $2^{-1365}$ — never, in any practical sense.

(b) **It does not apply either**, and for a different reason. Håstad's attack needs the *same* value encrypted to all three recipients, so that the Chinese remainder theorem reassembles one integer $m^{3}$. In a KEM, each encapsulation draws its own independent $r$: three recipients means three distinct $r_i$, three unrelated ciphertexts, and nothing to reassemble. The sender would then encrypt the *data* once under a single DEM key and transport that key three times — and even the key is not directly encrypted, only derived from each $r_i$.

(c) It shows that textbook RSA's weaknesses were **not properties of the trapdoor permutation at all.** They were properties of feeding it structured, low-entropy, attacker-guessable inputs: small messages, related messages across recipients, messages an adversary could enumerate. The permutation was always fine; the input distribution was the problem.

That reframing is the reason KEMs replaced padded encryption. OAEP's approach is to *add* enough randomness and structure to a bad input to make it safe, and to prove that the addition suffices. A KEM's approach is to never have a bad input: the value entering the trapdoor is uniform by construction, because the mechanism generates it. **The second is a smaller thing to get right, and correspondingly fewer implementations have got it wrong.**

</details>

## Connections

- **Backward:** the DEM is exactly [2.4](02-04-authenticated-encryption.md)'s AEAD, RSA-KEM replaces [3.3](03-03-rsa-encryption.md)'s OAEP, and DH-KEM is [3.4](03-04-elgamal-encryption.md) hashed or [3.5](03-05-elliptic-curve-cryptography.md)'s ECDH packaged.
- **Forward:** [4.2](04-02-public-key-infrastructure-and-certificates.md) shows the KEM in place inside a TLS handshake, and [4.5](04-05-post-quantum-cryptography.md)'s ML-KEM is a drop-in for the KEM slot precisely because the composition theorem proved here makes the slot modular.
- **Sideways:** the separation of a small expensive step from a large cheap one is the same design move as [`computer-architecture`](../../computer-architecture/syllabus.md)'s caches and [`databases`](../../databases/syllabus.md)'s index-then-scan query plans — do the costly thing once, on a small object, and let a fast path handle the volume.

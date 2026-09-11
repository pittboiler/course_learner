# Cryptography · Lesson 2.4: Authenticated encryption

> ⏱ ~15 min · Module 2: Hash functions and message authentication · Builds on: [2.3 (message authentication codes)](02-03-message-authentication-codes.md) · Unlocks: [3.1 (the number-theoretic toolkit)](03-01-the-number-theoretic-toolkit.md)

## Why this matters

You now have confidentiality ([1.6](01-06-modes-of-operation.md)) and integrity ([2.3](02-03-message-authentication-codes.md)) as separate tools. Every real protocol needs both, so the question is how to combine them — and the answer is not "any way you like".

Two of the three obvious orderings are broken, and both were deployed at internet scale before anyone noticed. This lesson says which one is right, why, and what the modern primitive that packages it looks like.

The deeper point is about **chosen-ciphertext attacks**. An adversary who can submit ciphertexts and observe how a server reacts — even just whether it errors — is far more powerful than the eavesdropper of Module 1, and integrity turns out to be the thing that shuts that door. Confidentiality without integrity is not a weaker guarantee; in the presence of an active attacker it is frequently no guarantee at all.

## The idea

Three orderings, three fates.

**Encrypt-and-MAC.** Encrypt the message, MAC the message, send both. The flaw is immediate: a MAC makes **no confidentiality claim**, and standard MACs are deterministic. So the same plaintext always produces the same tag, and an eavesdropper who sees two messages with equal tags knows the plaintexts are equal. That is ECB's failure ([1.6](01-06-modes-of-operation.md)) wearing a different hat, and it breaks IND-CPA outright.

**MAC-then-encrypt.** MAC the message, then encrypt message and tag together. Better — the tag is hidden. But the receiver must **decrypt before it can check anything**, so an attacker's malformed ciphertext gets fed into the decryption routine, and whatever that routine does with garbage becomes an oracle. In CBC that routine strips padding, and a server that distinguishes "bad padding" from "bad MAC" — by error message, by timing, by anything — leaks the plaintext a byte at a time.

**Encrypt-then-MAC.** Encrypt the message, then MAC the *ciphertext*, send both. The receiver checks the tag first and **discards a failing ciphertext without ever decrypting it**. There is no oracle because there is no computation on attacker-controlled input beyond a constant-time tag comparison. This is the only order that is secure for *every* secure cipher and *every* secure MAC, which is the property you want from a construction rule.

One more requirement, easy to miss: the encryption key and the MAC key must be **independent**. Using one key for both puts the same secret into two primitives whose interaction nobody analysed, and there are contrived schemes where that alone is fatal. Derive two keys from one master with a KDF.

Modern practice packages all of this into a single primitive — **AEAD**, authenticated encryption with associated data — so the programmer never makes the composition choice at all. That is the real lesson: *the right answer to "how do I combine these" is "use the thing that already did".*

## The formal version

> **Definition (CCA security).** As in the IND-CPA experiment ([1.6](01-06-modes-of-operation.md)), but the adversary additionally gets a decryption oracle $\mathrm{Dec}_k(\cdot)$, which she may query on anything except the challenge ciphertext itself. $\Pi$ is **CCA-secure** if every PPT adversary wins with probability at most $\tfrac12 + \mathrm{negl}(n)$.

In words: even an attacker who can get ciphertexts of her choosing decrypted cannot learn which message the challenge encrypts. This models a server that decrypts whatever arrives and behaves observably.

> **Definition (ciphertext integrity, INT-CTXT).** An adversary with an encryption oracle cannot produce **any** ciphertext that decrypts successfully and was not output by the oracle, except with negligible probability.

> **Definition (authenticated encryption).** A scheme is an **AE scheme** if it is IND-CPA secure and INT-CTXT secure.

> **Theorem.** AE $\Rightarrow$ CCA security.

*Proof idea.* Ciphertext integrity means the adversary's decryption oracle is useless: any ciphertext she submits either came from the encryption oracle, in which case she already knows the answer, or fails to decrypt, in which case she learns only that. So the decryption oracle can be simulated without the key, and CCA security collapses to CPA security, which holds. $\blacksquare$

**Read that as the engineering claim it is:** integrity is what makes chosen-ciphertext attacks impossible, because a forged ciphertext never reaches the decryption logic. Confidentiality alone does not do it.

> **Composition theorem (Bellare–Namprempre).** With independent keys, **encrypt-then-MAC** is an AE scheme whenever the cipher is IND-CPA secure and the MAC is EUF-CMA secure with unique tags. Encrypt-and-MAC and MAC-then-encrypt are **not** generically secure: there exist secure components for which each composition fails.

The qualifier "generically" matters. MAC-then-encrypt is secure for *particular* choices — it is what TLS used for years, and with CBC plus careful constant-time processing it can be made to work. It is not secure for *all* secure choices, and a construction rule that requires a case analysis of your cipher is a bad rule.

> **AEAD.** $\mathrm{Enc}_k(N, A, m) \to c$ and $\mathrm{Dec}_k(N, A, c) \to m$ or $\bot$. Here $N$ is a nonce and $A$ is **associated data**: authenticated but not encrypted.

Associated data is for the parts of a message that must travel in the clear and must not be tampered with — packet headers, routing information, version numbers, record types. **Everything that must not change goes inside the authentication, whether or not it is encrypted**, which is the same principle as the sequence number in [2.3](02-03-message-authentication-codes.md)'s P1.

The two AEAD schemes worth knowing:

| | AES-GCM | ChaCha20-Poly1305 |
|---|---|---|
| Confidentiality | AES in CTR mode | ChaCha20 stream cipher |
| Authentication | GHASH, a polynomial MAC over $\mathrm{GF}(2^{128})$ | Poly1305, a polynomial MAC mod $2^{130}-5$ |
| Speed | fast with AES hardware instructions | fast without them |
| Nonce | 96 bits, must be unique | 96 bits, must be unique |

Both are **nonce-misuse-catastrophic**, and GCM is the worse of the two. Repeat a GCM nonce and you do not merely leak the XOR of two plaintexts — the polynomial structure lets an attacker solve for the authentication key $H = E_k(0^{128})$, after which she can forge tags on **arbitrary** ciphertexts under that key forever. That is the "forbidden attack", and it is why nonce management is the first thing to check in a GCM deployment.

GCM's data limits follow from the birthday arithmetic of [2.2](02-02-the-birthday-bound-and-merkle-damgard.md): at most $2^{39} - 256$ bits, about 64 GiB, per invocation, and at most $2^{32}$ invocations under one key when nonces are chosen randomly.

## Picture

![Three stacked panels comparing composition orders. The first, encrypt-and-MAC, computes the ciphertext from the message and the tag from the message, and is marked as leaking equality of plaintexts through a deterministic MAC. The second, MAC-then-encrypt, tags the message and encrypts message and tag together, and is marked because the receiver must decrypt before authenticating, so malformed ciphertexts are processed. The third, encrypt-then-MAC, tags the ciphertext, is highlighted as generically secure, and is annotated with the observation that the receiver rejects before decrypting.](assets/02-04-fig1.svg)

The distinguishing question for each panel is **what the receiver must do before it can reject a forgery.** Encrypt-and-MAC: it must decrypt, and it has already leaked on the sending side anyway. MAC-then-encrypt: it must decrypt and unpad. Encrypt-then-MAC: it must compare 16 bytes in constant time. Only the third gives the attacker nothing to probe.

## Worked examples

**Example 1 — the padding oracle, counted.**

A server uses CBC with MAC-then-encrypt. On receiving a ciphertext it decrypts, strips PKCS#7 padding, then checks the MAC — and returns a distinguishable response when the padding is malformed.

Recall CBC decryption: $m_i = E_k^{-1}(c_i) \oplus c_{i-1}$. The attacker controls $c_{i-1}$ because she is submitting the ciphertext, so she can XOR an arbitrary mask into the plaintext block the server will produce.

To recover the last byte of block $i$, she submits the two-block ciphertext $c'_{i-1} \Vert c_i$ with the last byte of $c'_{i-1}$ set to each of the 256 possible values. Exactly one value makes the final plaintext byte equal `0x01`, which is valid padding, and the server's response says so. From that value and her chosen byte she solves for $E_k^{-1}(c_i)$'s last byte, and hence for the real plaintext byte. She then targets `0x02 0x02` for the next byte, and so on.

Cost: at most 256 queries per byte, 128 on average, so a 16-byte block costs about

$$16 \times 128 = 2048 \text{ queries},$$

with 4096 as the worst case. **A few thousand requests decrypts a block, with no key and no cryptanalysis.**

Now run the same attack against encrypt-then-MAC. The attacker's modified ciphertext fails the MAC check, the server discards it, and the response is identical whatever she sent. **There is no oracle** — not because the padding logic improved, but because nothing reaches it.

**Example 2 — what a repeated GCM nonce actually costs.**

GCM computes its tag as a polynomial in the authentication key $H = E_k(0^{128})$, evaluated over $\mathrm{GF}(2^{128})$:

$$T = \big(c_1 H^{n} + c_2 H^{n-1} + \cdots + L H\big) \oplus E_k(N \Vert 1),$$

where $L$ encodes the lengths and $N$ is the nonce. The final term is the only place the nonce enters the tag.

Encrypt two different messages under the same nonce and subtract the two tag equations. The $E_k(N \Vert 1)$ terms are identical and cancel, leaving a polynomial equation in $H$ alone with known coefficients. Factor it over $\mathrm{GF}(2^{128})$ — routine — and the candidate roots include $H$. With a third message the ambiguity disappears.

The consequence is worse than a confidentiality loss. Holding $H$, the attacker can compute the tag of **any ciphertext she likes** under that key, for any nonce whose $E_k(N \Vert 1)$ she can cancel using a captured message. So a single nonce repeat converts into **unlimited forgery**, permanently, until the key is rotated.

Compare with CTR mode's nonce repeat ([1.6](01-06-modes-of-operation.md)), which leaks $m_1 \oplus m_2$ and nothing structural. **Adding authentication made the nonce requirement stricter, not looser** — and that is the trade a practitioner needs to know: AEAD removes the composition hazard and concentrates the remaining risk into one operational rule.

## Watch out

- You might think "we encrypt, so tampering is detected." It is not. Every mode in [1.6](01-06-modes-of-operation.md) is malleable; CTR lets an attacker flip any plaintext bit by flipping the corresponding ciphertext bit, and the receiver sees a perfectly well-formed message. Detection requires a MAC, full stop.
- You might think the MAC should cover the plaintext because that is what you care about. Cover the **ciphertext**. MAC-ing the plaintext forces the receiver to decrypt before it can judge, which is the oracle.
- You might think an error message that says only "decryption failed" leaks nothing. It leaks the *timing*, the response size, and sometimes the TCP behaviour. Lucky13 broke TLS by measuring a timing difference of a few microseconds in a MAC-then-encrypt construction that returned one uniform error. **Uniform errors are necessary and not sufficient**; not decrypting at all is what actually works.

## One-liner

> Encrypt then MAC the ciphertext with a separate key, so a forgery is thrown away before anything touches it — or better, use an AEAD and make the choice unavailable.

## Problems

**P1 (🟢)** For each design, name the composition order and state whether it is generically secure, with one sentence of reason. (a) A cookie is stored as $c \Vert \mathrm{HMAC}_{k_2}(c)$ where $c = \mathrm{Enc}_{k_1}(\text{session})$. (b) A message is sent as $\mathrm{Enc}_{k_1}(\text{session} \Vert \mathrm{HMAC}_{k_2}(\text{session}))$. (c) A message is sent as $\mathrm{Enc}_{k_1}(\text{session})$ alongside $\mathrm{HMAC}_{k_2}(\text{session})$.

**P2 (🟡)** A service uses AES-CBC with MAC-then-encrypt and a padding oracle is discovered. The attacker wants a 256-byte session token. (a) Compute the expected number of oracle queries, using 128 queries per byte. (b) At 50 requests per second, give the wall-clock time. (c) The team proposes returning a single generic error for both padding and MAC failures. Say whether this fixes the vulnerability and name the specific attack that defeats the proposal.

**P3 (🔴, optional)** A team deploys AES-GCM with a 96-bit nonce generated as $N = \mathrm{SHA256}(\text{message})$ truncated to 96 bits, arguing that distinct messages give distinct nonces and this removes the need to store counter state. (a) State the condition under which the argument is correct. (b) Give the scenario in which it fails, and compute the probability of failure after $2^{30}$ messages. (c) State the consequence of that failure for GCM specifically, and name the accepted construction that makes nonce derivation of this kind safe.

<details>
<summary>Solutions</summary>

**P1** (a) **Encrypt-then-MAC**, and **generically secure.** The tag covers the ciphertext, so the receiver verifies before decrypting; the Bellare–Namprempre theorem applies given independent keys, which the notation $k_1, k_2$ indicates.

(b) **MAC-then-encrypt**, and **not generically secure.** The receiver must decrypt to reach the tag, so any observable behaviour of the decryption or unpadding path becomes an oracle. It can be made to work with specific components and great care, which is not the same as being safe to build.

(c) **Encrypt-and-MAC**, and **not secure.** HMAC is deterministic, so the tag is a deterministic function of the plaintext, published in the clear: two sessions with equal contents produce equal tags, which breaks IND-CPA directly by the argument of [1.6](01-06-modes-of-operation.md)'s deterministic-encryption theorem.

**P2** (a) 256 bytes at 128 expected queries each:

$$256 \times 128 = 32{,}768 \text{ queries}.$$

(b) At 50 requests per second:

$$\frac{32{,}768}{50} \approx 655 \text{ seconds} \approx 11 \text{ minutes}.$$

Eleven minutes of ordinary-looking traffic to recover a complete session token.

(c) **It does not fix the vulnerability.** Returning one generic error removes the *content* channel but leaves the *timing* channel: when padding is malformed the server typically aborts early and never computes the MAC, or computes it over a different number of blocks, so the response arrives measurably sooner. The attack that defeats the proposal is **Lucky13**, which exploited exactly this residual timing difference in TLS's MAC-then-encrypt CBC construction — a difference of microseconds, recovered by averaging over many trials.

The real fix is structural: move to **encrypt-then-MAC** or to an AEAD, so a forged ciphertext is rejected by a constant-time tag comparison and the padding logic is never reached with attacker-controlled input.

**P3** (a) The argument is correct only if the derived nonce is **unique across every encryption under that key** — which requires that no two encryptions ever use the same message *and* that the truncated hash never collides. In practice it holds when messages are guaranteed distinct (they carry a unique identifier) and the collision probability over the 96-bit truncation is acceptable.

(b) It fails in two ways. The mundane one: **a repeated message produces a repeated nonce**, and applications resend identical payloads constantly — retries, heartbeats, idempotent writes. The subtler one: distinct messages can collide in the truncated hash, at the birthday rate of [2.2](02-02-the-birthday-bound-and-merkle-damgard.md). After $q = 2^{30}$ messages with $N = 2^{96}$:

$$\Pr[\text{collision}] \approx \frac{q^2}{2N} = \frac{2^{60}}{2^{97}} = 2^{-37} \approx 7 \times 10^{-12}.$$

So the hash collision is negligible and **the retry case is the real danger** — it is a certainty rather than a probability, and it is the one the argument overlooked entirely.

(c) For GCM the consequence is the **forbidden attack** of Example 2: two ciphertexts under one nonce let the attacker solve for the authentication key $H$, after which she forges tags on arbitrary ciphertexts under that key indefinitely. This is strictly worse than the plaintext-XOR leak a plain CTR nonce repeat causes, because it destroys integrity permanently rather than leaking two messages.

The accepted construction that makes derived nonces safe is **SIV mode** (synthetic IV), or more generally a nonce-misuse-resistant AEAD such as AES-GCM-SIV. There the synthetic nonce is derived by a PRF over the *entire* plaintext and associated data under the key, and repeating an input is designed to leak only that the two messages were identical — not to destroy the authentication key. If derived nonces are a requirement, use a mode built for them rather than bolting a hash onto one that is not.

</details>

## Flashback

**From Lesson 2.2 (the birthday bound and Merkle–Damgård):** AES-GCM is limited to about $2^{32}$ invocations under one key when 96-bit nonces are chosen at random, and to about $2^{39}$ bits of plaintext per invocation. (a) Derive the first limit by finding the number of random 96-bit nonces at which the collision probability reaches $2^{-32}$. (b) Explain why the second limit exists, given that GCM encrypts with CTR mode over 128-bit blocks.

<details>
<summary>Solution</summary>

(a) With $N = 2^{96}$ and $\Pr \approx q^2 / (2N)$, set the probability to $2^{-32}$:

$$\frac{q^2}{2^{97}} = 2^{-32} \iff q^2 = 2^{65} \iff q = 2^{32.5}.$$

So about $2^{32}$ invocations, which is where the standard's guidance comes from — it is the birthday bound with a $2^{-32}$ risk tolerance, not a property of AES. Note the shape once more: a 96-bit nonce delivers roughly 48 bits of collision resistance, and demanding a $2^{-32}$ safety margin costs a further 16, leaving 32.

(b) GCM encrypts with CTR mode, and CTR's security argument treats each pad block as a PRF output at a distinct counter value. By [1.5](01-05-pseudorandom-functions-and-block-ciphers.md)'s switching lemma, an adversary seeing $q$ blocks of a 128-bit **permutation** rather than a random function gains advantage about $q^2/2^{129}$. Keeping that below a target of roughly $2^{-33}$ requires $q^2 \le 2^{96}$, so $q \le 2^{48}$ blocks in total across the key's life; the per-invocation limit of $2^{32}$ blocks — that is, $2^{32} \times 128 = 2^{39}$ bits, or 64 GiB — is the conservative per-message slice of that budget, chosen so the counter field cannot overflow into the next nonce's space either.

**Both limits are birthday limits**, one over nonces and one over blocks, and neither is a statement about AES being weak. They are capacity numbers, and the correct response to approaching them is to rekey.

</details>

## Connections

- **Backward:** this lesson resolves the malleability [1.6](01-06-modes-of-operation.md) left open and puts [2.3](02-03-message-authentication-codes.md)'s MAC to work; GCM's data limits are [2.2](02-02-the-birthday-bound-and-merkle-damgard.md)'s birthday bound applied twice.
- **Forward:** [3.6](03-06-hybrid-encryption-kem-dem.md)'s DEM is exactly an AEAD scheme, so everything proved here is what public-key encryption delegates the bulk work to; and TLS's record layer, traced in [4.2](04-02-public-key-infrastructure-and-certificates.md), is an AEAD with the record header as associated data.
- **Sideways:** the padding oracle is an instance of the general principle that any observable difference is a channel, the same reasoning behind [`computer-networks` 4.4](../../computer-networks/lessons/04-04-network-security-tls-firewalls-attacks.md)'s account of protocol-level attacks; and GHASH's polynomial evaluation over a finite field is the construction of [`abstract-algebra` 4.3](../../abstract-algebra/lessons/04-03-finite-fields.md) used as a universal hash.

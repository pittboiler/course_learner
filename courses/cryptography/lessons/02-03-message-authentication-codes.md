# Cryptography · Lesson 2.3: Message authentication codes

> ⏱ ~15 min · Module 2: Hash functions and message authentication · Builds on: [2.2 (the birthday bound and Merkle–Damgård)](02-02-the-birthday-bound-and-merkle-damgard.md) · Unlocks: [2.4 (authenticated encryption)](02-04-authenticated-encryption.md)

## Why this matters

A hash detects accidental corruption. It detects nothing deliberate, because the attacker who changes the message simply recomputes the digest — the function is public.

What you need is a fingerprint only the key-holder can produce and anyone with the key can check. That is a **message authentication code**, and it is the integrity counterpart to the encryption of Module 1. Every authenticated channel on the internet runs one: TLS records, API request signing, session cookies, JSON web tokens.

The lesson also closes the loop on [2.2](02-02-the-birthday-bound-and-merkle-damgard.md). The obvious MAC, $t = H(k \Vert m)$, is broken by length extension; HMAC's odd-looking nested shape is the fix, and once you see what it is defending against, it stops looking odd.

## The idea

A MAC is a keyed tag. Alice computes $t = \mathrm{Mac}_k(m)$ and sends $(m, t)$. Bob, who shares $k$, recomputes and compares. Eve, who does not have $k$, cannot produce a tag that passes.

The security requirement is stated adversarially and it is deliberately harsh. Eve may ask Alice to tag **any messages she likes**, as many as she likes. She wins if she then produces a valid tag on **any message Alice never tagged** — it does not have to be meaningful, it does not have to be chosen in advance, and a single forgery counts as a total break. That standard is called **existential unforgeability under chosen-message attack**, EUF-CMA.

Why so harsh? Because the designer does not know which messages matter to the application. A definition that only forbade forging "important" messages would need a theory of importance, and attackers are creative about turning junk into leverage.

Now, constructions. A PRF is already a MAC: $t = F_k(m)$. If no efficient adversary can distinguish $F_k$ from a random function, she certainly cannot predict its value at a point she has not queried — and predicting the value at an unqueried point is precisely what forging means. **That is the whole proof, and it is why PRFs are the workhorse primitive of the subject.**

The catch is that a block cipher is a PRF on one block. Extending it to long messages is the same problem modes solved for encryption, and it has the same trap: the obvious chaining construction is secure only if you are careful about length.

## The formal version

> **Definition (MAC).** A pair $(\mathrm{Mac}, \mathrm{Vrfy})$ with $t \leftarrow \mathrm{Mac}_k(m)$ and $\mathrm{Vrfy}_k(m,t) \in \{0,1\}$. For a **deterministic** MAC, verification is *canonical*: recompute $\mathrm{Mac}_k(m)$ and check equality.

> **Definition (EUF-CMA).** In experiment $\mathrm{MacForge}_{A,\Pi}(n)$: the challenger picks $k \leftarrow \mathrm{Gen}(1^n)$; $A$ gets oracle access to $\mathrm{Mac}_k(\cdot)$, recording the set $Q$ of queried messages; $A$ outputs $(m^{*}, t^{*})$ and wins if $\mathrm{Vrfy}_k(m^{*}, t^{*}) = 1$ and $m^{*} \notin Q$. $\Pi$ is **EUF-CMA secure** if for every PPT $A$,
> $$\Pr[\mathrm{MacForge}_{A,\Pi}(n) = 1] \le \mathrm{negl}(n).$$

In words: no adversary, even one who has seen tags on messages of her choosing, can tag a fresh message. Note the bound is negligible rather than $\tfrac12 + \mathrm{negl}$ — forging is not a guessing game with a 50 percent baseline, so any non-negligible success is a break.

> **Theorem.** If $F$ is a PRF then $\mathrm{Mac}_k(m) = F_k(m)$ is an EUF-CMA secure MAC for fixed-length messages, with forgery probability at most $\mathrm{negl}(n) + 2^{-t}$ for a $t$-bit tag.

*Proof sketch.* Replace $F_k$ with a truly random function; by the PRF assumption this changes the adversary's success by at most a negligible amount. Against a random function, the value at any unqueried point is uniform and independent of everything the adversary has seen, so her chance of naming it is exactly $2^{-t}$. $\blacksquare$

**The $2^{-t}$ term is unavoidable and it sets tag length.** A 96-bit tag gives a per-attempt forgery probability of $2^{-96} \approx 1.3 \times 10^{-29}$; a 32-bit tag gives $2^{-32}$, so a million attempts succeed with probability $2.3 \times 10^{-4}$, which an attacker will happily take. Note this is *not* a birthday bound — the attacker must hit a specific value, not find any pair — so tag length is chosen against $2^{-t}$ directly and 96 or 128 bits is ample.

> **Raw CBC-MAC.** With IV fixed to zero and no length encoding: $t_0 = 0$, $t_i = E_k(m_i \oplus t_{i-1})$, output $t_\ell$.

This is EUF-CMA secure for messages of **one fixed length**, agreed in advance. For variable lengths it is catastrophically broken; the attack is in Example 1. The standard repairs are to prepend the message length as the first block, or to use **CMAC**, which XORs a key-derived value into the last block — both make the tag depend on length in a way the attacker cannot cancel.

> **HMAC.** For a hash $H$ with block size $B$ and a key $k$ padded to $B$ bytes,
> $$\mathrm{HMAC}_k(m) = H\big((k \oplus \mathrm{opad}) \,\Vert\, H((k \oplus \mathrm{ipad}) \,\Vert\, m)\big),$$
> with $\mathrm{ipad}$ the byte `0x36` repeated $B$ times and $\mathrm{opad}$ the byte `0x5c` repeated $B$ times.

In words: hash the message under one derived key, then hash the result under a second derived key. The two pads differ in many bit positions, so $k \oplus \mathrm{ipad}$ and $k \oplus \mathrm{opad}$ behave as independent keys while only one key is stored.

**Why this defeats length extension.** The attack of [2.2](02-02-the-birthday-bound-and-merkle-damgard.md) needs the published value to be a chaining state the attacker can resume, with the remaining input under her control. Here the published tag is the *outer* hash's output, and continuing that chain would produce a digest of $(k \oplus \mathrm{opad}) \Vert \mathrm{inner} \Vert \cdots$, which is not a tag of anything — the tag of any message must have the inner digest freshly recomputed, and she cannot produce an inner digest for a message she has not had tagged.

HMAC's security proof requires only that the compression function be a PRF, **not** that $H$ be collision-resistant. That is why HMAC-SHA1 remained sound after SHA-1's collision break while SHA-1 signatures did not.

## Picture

![A two-stage diagram of HMAC. The message and the key XOR-ed with the inner pad enter an inner hash box; its output, the inner digest, feeds an outer hash box that also takes the key XOR-ed with the outer pad; the outer hash emits the tag. Annotations explain that the visible tag is the outer hash's output rather than a resumable state over attacker-controlled input, that the two pads act as two independent derived keys, and that security rests on the compression function being a pseudorandom function rather than on collision resistance.](assets/02-03-fig1.svg)

The shape is the defence. **One hash would publish a state; two hashes publish a state over an input the attacker cannot extend**, because the thing she would need to append to is buried behind the outer key.

## Worked examples

**Example 1 — forging raw CBC-MAC on variable-length messages.**

The attacker queries two single-block messages and receives their tags:

$$t_1 = E_k(m_1), \qquad t_2 = E_k(m_2).$$

She now claims that the **two-block** message

$$m^{*} = m_1 \,\Vert\, (m_2 \oplus t_1)$$

has tag $t_2$. Verify by running CBC-MAC on $m^{*}$:

- Block 1: $E_k(m_1 \oplus 0) = E_k(m_1) = t_1$.
- Block 2: $E_k\big((m_2 \oplus t_1) \oplus t_1\big) = E_k(m_2) = t_2$.

The chaining value $t_1$ cancels exactly, and the output is $t_2$. **She has a valid tag on a message she never queried, from two queries and no computation.**

The reason is structural: raw CBC-MAC's state after the first block is a value the attacker *knows*, because it is a published tag, and she can steer the next block's input anywhere she likes by XOR-ing. Prepending the length as block zero breaks it — the first chaining value is then unpublished, and her two single-block queries produce tags over a different length prefix.

**Example 2 — choosing a tag length, and a trap that is not about length at all.**

An IoT device sends a telemetry reading every 10 seconds and appends a MAC. Bandwidth is precious. Is a 32-bit tag acceptable?

Per-attempt forgery probability is $2^{-32} \approx 2.3 \times 10^{-10}$. If the verifier accepts unlimited attempts, an attacker sending 10,000 forgeries per second succeeds within

$$\frac{2^{32}}{10^{4}} \approx 4.3 \times 10^{5} \text{ seconds} \approx 5 \text{ days}.$$

So a short tag is acceptable **only if verification attempts are rate-limited**, and the two decisions must be made together. At 10 attempts per second the same figure is 13 years, and 32 bits is defensible; with no limit it is not.

Now the trap that has nothing to do with length. The verifier compares tags with an ordinary equality check that returns as soon as two bytes differ. The time it takes therefore depends on **how many leading bytes are correct**, so an attacker measures response times and learns the tag one byte at a time — $256 \times 4$ trials instead of $2^{32}$, about a thousand attempts, seconds of work. The fix is a **constant-time comparison**: XOR all byte pairs, OR the results together, and test the accumulator once at the end, so the running time is independent of the data.

**This is the first place in the course where the mathematics is fine and the implementation leaks**, and it is worth noticing the shape: the definition quantifies over adversaries who see inputs and outputs, and a timing channel hands them something the model never accounted for.

## Watch out

- You might think a MAC prevents replay. It does not. $(m, t)$ stays valid forever, so an attacker who captures a legitimate "transfer 100 dollars" message can send it a thousand times. Freshness needs a counter, a timestamp, or a nonce **inside the authenticated message**.
- You might think a MAC provides non-repudiation. It does not, because the key is shared: Bob can produce any tag Alice can, so a third party cannot tell which of them made it. Non-repudiation needs a signature ([4.1](04-01-digital-signatures.md)), where only one party holds the signing key.
- You might think a MAC hides the message. It does not — MAC schemes make no confidentiality claim, and $(m,t)$ is usually sent with $m$ in the clear. Getting both properties is the composition problem of [2.4](02-04-authenticated-encryption.md), and doing it wrong is a classic failure.

## One-liner

> A MAC is a tag only the key-holder can produce, judged by the harshest standard available: one forged tag on any message, however meaningless, is a total break.

## Problems

**P1 (🟢)** A server verifies API requests with $t = \mathrm{HMAC}_k(m)$ where $m$ is the request body. An attacker captures a valid pair for a request that transfers funds. (a) Can she modify the amount and produce a valid tag? (b) Can she cause the transfer to happen twice? (c) Name the single field that must be added to $m$ to stop (b), and say why it must be inside the MAC rather than beside it.

**P2 (🟡)** A system uses raw CBC-MAC over AES with a fixed all-zero IV, on messages of exactly three blocks. An engineer proposes allowing one-block and three-block messages under the same key, "since three blocks was already safe". Give a concrete forgery this enables, with the queries the attacker makes and the message and tag she outputs, and verify that the tag is correct.

**P3 (🔴, optional)** A team builds $\mathrm{Mac}_k(m) = H(k \Vert m \Vert k)$ on a Merkle–Damgård hash, arguing that the trailing key blocks length extension and the leading key blocks the collision attack of [2.2](02-02-the-birthday-bound-and-merkle-damgard.md). (a) Evaluate both claims. (b) State why this is still not the recommended construction, referring to what HMAC's security proof assumes and what this construction's would have to assume. (c) Give the one-line rule a practitioner should follow instead.

<details>
<summary>Solutions</summary>

**P1** (a) **No.** Changing the amount changes $m$, and producing a valid tag for the new $m$ is exactly an existential forgery, which HMAC's EUF-CMA security forbids. She would have to guess a $t$-bit tag, succeeding with probability $2^{-t}$ per attempt.

(b) **Yes.** The captured pair $(m, t)$ remains valid indefinitely, and replaying it is not a forgery — it is a legitimate message, resent. The MAC verifies because it is supposed to.

(c) A **nonce, sequence number, or timestamp**, with the server rejecting values it has already accepted (or those outside a time window). It must be inside $m$ so that it is covered by the tag: a counter carried beside the MAC is attacker-modifiable, so she would simply rewrite it to a fresh value and replay the same tag, which would still verify against the unchanged $m$. **Anything that must not be tampered with must be inside the authenticated input** — the same principle that makes associated data part of AEAD in [2.4](02-04-authenticated-encryption.md).

**P2** The attacker makes **two one-block queries**, on distinct blocks $a$ and $b$, receiving

$$t_a = E_k(a), \qquad t_b = E_k(b).$$

She then outputs the three-block message

$$m^{*} = a \,\Vert\, (b \oplus t_a) \,\Vert\, (a \oplus t_b)$$

with tag $t^{*} = t_a$.

Verification, running CBC-MAC with a zero IV:

- Block 1: $E_k(a \oplus 0) = t_a$.
- Block 2: $E_k\big((b \oplus t_a) \oplus t_a\big) = E_k(b) = t_b$.
- Block 3: $E_k\big((a \oplus t_b) \oplus t_b\big) = E_k(a) = t_a$.

The output is $t_a = t^{*}$, so the tag verifies, and $m^{*}$ is a three-block message the attacker never queried. **Two queries, no computation, a valid three-block forgery.**

The engineer's error is that "three blocks was safe" is a statement about a scheme where *every* message has three blocks. Security of raw CBC-MAC depends on the message length being fixed across the entire key's lifetime; admitting a second length lets the attacker use short queries to learn chaining values and steer them, which is exactly what happened here. The fix is CMAC or length-prefixing, not a rule about which lengths are allowed.

**P3** (a) **Both claims are correct as far as they go.**

Length extension is blocked, for the reason given in [2.2](02-02-the-birthday-bound-and-merkle-damgard.md)'s P3: the published tag is the state after absorbing the trailing $k$, so continuing the chain does not produce a tag of any message whose format the verifier accepts.

The collision attack is also blocked. That attack needed the attacker to find $H(m_1) = H(m_2)$ *by herself*, using the public function, and then rely on identical suffix processing. Here the chain begins with the secret $k$, so she cannot compute the chaining values at all, and a collision in the public $H$ says nothing about a collision in $x \mapsto H(k \Vert x)$.

(b) The problem is what the security proof would have to assume. **HMAC's proof reduces to a single, well-studied assumption**: that the compression function is a PRF when keyed through its chaining input. The envelope construction $H(k \Vert m \Vert k)$ has no comparable reduction — proofs for it require additional, less standard assumptions about how the same key behaves at the front and the back of the chain, and related-key behaviour between the two occurrences is not something the compression function was designed or analysed for.

There is also a practical hazard: the two occurrences of $k$ are the *same* value rather than two independently derived ones, so any structure relating the front and back uses is available to an attacker, whereas HMAC's $\mathrm{ipad}$ and $\mathrm{opad}$ deliberately separate them.

(c) **Use HMAC, or a dedicated MAC such as CMAC or KMAC, and never invent a keyed-hash construction.** The two obvious constructions are both broken, the third is merely unproven, and the standard one costs the same and has a proof.

</details>

## Flashback

**From Lesson 2.1 (cryptographic hash functions):** A team stores password verifiers as $v = \mathrm{HMAC}_k(\text{password})$ with a server-side secret key $k$, calling it a "peppered hash". (a) State what this buys over a salted hash if the password database leaks but $k$ does not. (b) State what it fails to provide, and which property from [2.1](02-01-cryptographic-hash-functions.md) is being relied on. (c) Say what must be added and why.

<details>
<summary>Solution</summary>

(a) If the database leaks but $k$ stays secret — for example because $k$ lives in a hardware security module or a separate service — the attacker **cannot test password guesses at all.** Without $k$ she cannot compute $\mathrm{HMAC}_k(\text{guess})$, so the offline dictionary attack that defeats a salted hash is simply unavailable. This is a genuine and substantial improvement, and it is the main argument for peppering.

(b) It fails the moment $k$ leaks too, which is the realistic case for a server compromise that took the database with it. With $k$ in hand the construction becomes a fast keyed hash, and guessing proceeds at full speed — the 41-bit password space of [2.1](02-01-cryptographic-hash-functions.md)'s Example 2 falls in minutes. The property being leaned on is **pseudorandomness of the keyed function**, not preimage resistance: security here comes from the secret $k$, and HMAC's one-wayness against someone who *has* $k$ is no better than the underlying hash's, which is to say fast.

(c) Add a **per-user salt and a slow memory-hard KDF** — Argon2 or scrypt — with the pepper applied on top, so the stored verifier is something like $\mathrm{HMAC}_k(\mathrm{Argon2}(\text{salt}, \text{password}))$. The salt defeats precomputation across users, the KDF caps the guess rate even after $k$ leaks, and the pepper adds a layer that survives a database-only breach. Each of the three defends against a different failure, and none substitutes for the others.

</details>

## Connections

- **Backward:** the MAC-from-PRF theorem reuses [1.5](01-05-pseudorandom-functions-and-block-ciphers.md)'s primitive for a completely different job, and HMAC's design is a direct answer to [2.2](02-02-the-birthday-bound-and-merkle-damgard.md)'s length-extension attack.
- **Forward:** [2.4](02-04-authenticated-encryption.md) composes a MAC with a cipher and shows only one of the three orderings is safe; [4.1](04-01-digital-signatures.md) is the public-key analogue, where the "MAC key" splits into a private signing key and a public verifying one, which is what buys non-repudiation.
- **Sideways:** the timing-attack trap is the same observation that makes constant-time comparison standard in [`computer-networks` 4.4](../../computer-networks/lessons/04-04-network-security-tls-firewalls-attacks.md)'s TLS stack; and the EUF-CMA definition's "any forgery counts" stance is the same worst-case posture that [`algorithms` 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) takes toward inputs.

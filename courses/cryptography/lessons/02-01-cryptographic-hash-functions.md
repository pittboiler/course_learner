# Cryptography · Lesson 2.1: Cryptographic hash functions

> ⏱ ~15 min · Module 2: Hash functions and message authentication · Builds on: [1.5 (pseudorandom functions and block ciphers)](01-05-pseudorandom-functions-and-block-ciphers.md) · Unlocks: [2.2 (the birthday bound and Merkle–Damgård)](02-02-the-birthday-bound-and-merkle-damgard.md)

## Why this matters

Module 1 hid messages. It did nothing to stop an adversary from *changing* them — CTR mode is so malleable that flipping a ciphertext bit flips the corresponding plaintext bit, silently.

Integrity is the other half of the job, and its foundation is the cryptographic hash: a function that squeezes any amount of data down to a short, fixed-length fingerprint, such that nobody can produce two inputs with the same fingerprint. That one property underwrites digital signatures ([4.1](04-01-digital-signatures.md)), certificates ([4.2](04-02-public-key-infrastructure-and-certificates.md)), commitments ([4.3](04-03-commitments-and-secret-sharing.md)), password storage, content-addressed storage, and the Merkle structures that other courses already rely on and explicitly defer to this one — see [`distributed-systems` 4.6](../../distributed-systems/lessons/04-06-nakamoto-consensus-and-blockchains.md).

The subtlety worth arriving with: a hash function has **three** distinct hardness properties, they are not the same, and using the wrong one is how real systems fail.

## The idea

A hash $H$ maps arbitrarily long inputs to $n$ bits. Because the input space is infinite and the output space has $2^n$ elements, **collisions must exist** — infinitely many of them, by pigeonhole. There is no question of preventing them. The question is only whether anyone can *find* one.

That word "find" hides three different games, distinguished by what the attacker is handed and what she gets to choose.

**Preimage resistance.** You give her an output $y$. She must produce any input hashing to it. This is "the hash cannot be reversed" — the property you want when a password database leaks.

**Second-preimage resistance.** You give her an input $x$. She must produce a *different* input with the same hash. This is "given this document, you cannot forge a substitute" — the property behind file-integrity checking.

**Collision resistance.** You give her nothing. She must produce any two distinct inputs that collide. This is what signatures need, because in a signature the attacker often gets to choose *both* documents: the innocuous one you will sign and the damaging one she will attach your signature to.

Notice the progression: at each step the attacker is handed less and allowed to choose more. **More freedom means less work**, so collision resistance is the strongest requirement and the first to fall. For an $n$-bit hash, preimages and second preimages cost about $2^n$ work, while collisions cost only about $2^{n/2}$ — the birthday bound, derived in [2.2](02-02-the-birthday-bound-and-merkle-damgard.md). SHA-256 therefore offers 256 bits of preimage resistance and 128 bits of collision resistance, which is why the number in the name is twice the security level you usually care about.

One more idea, because half the literature uses it. In the **random oracle model** we pretend $H$ is a public random function — a giant book of random answers that everyone may look up but nobody can predict without looking. It is a heuristic and provably not literally achievable, but a proof in this model is real evidence, and the cleanest schemes in [4.1](04-01-digital-signatures.md) and [4.4](04-04-zero-knowledge-proofs.md) are proved there.

## The formal version

> **Definition (hash function).** $H : \{0,1\}^{*} \to \{0,1\}^{n}$, efficiently computable, compressing.

> **Collision resistance.** For every PPT adversary $A$,
> $$\Pr\big[\,(x, x') \leftarrow A(1^n) \;:\; x \ne x' \ \text{and} \ H(x) = H(x')\,\big] \le \mathrm{negl}(n).$$

In words: no efficient algorithm finds two inputs that hash alike.

There is a formal wrinkle here worth knowing, because it explains the notation in textbooks. For a *fixed* function $H$, a colliding pair exists, so the algorithm that simply prints that pair succeeds with probability 1 — it just cannot be written down by anyone who does not know the pair. To make the definition meaningful, theory works with a **keyed family** $H^s$ indexed by a public key $s$ chosen at random, so no fixed pair can be hard-wired. In practice SHA-256 is unkeyed and the definition is read as "humanity has not found a collision", which is a statement about effort rather than a theorem.

> **Second-preimage resistance.** Given uniform $x$, no PPT adversary finds $x' \ne x$ with $H(x') = H(x)$ except with negligible probability.

> **Preimage resistance (one-wayness).** Given $y = H(x)$ for uniform $x$, no PPT adversary finds any $x'$ with $H(x') = y$ except with negligible probability.

> **Proposition.** Collision resistance $\Rightarrow$ second-preimage resistance $\Rightarrow$ (for suitably compressing $H$) preimage resistance.

*Proof of the first implication.* Suppose $A$ breaks second-preimage resistance. Build a collision-finder $B$: choose $x$ uniformly, run $A$ on it to get $x' \ne x$ with $H(x') = H(x)$, and output $(x, x')$. Whenever $A$ succeeds, $B$ outputs a collision, so $B$'s success probability equals $A$'s. If that is non-negligible, collision resistance fails. $\blacksquare$

**The implications run one way only**, and this matters. A hash can be collision-resistant and useless for hiding: define $H'(x) = 0 \Vert x$ for short $x$ and $1 \Vert H(x)$ otherwise. It is collision-resistant if $H$ is, and it reveals short inputs outright. **Collision resistance is not secrecy**, which is the error behind every "we hashed the data so it is anonymised" claim.

The two families in use:

| | SHA-2 | SHA-3 |
|---|---|---|
| Structure | Merkle–Damgård ([2.2](02-02-the-birthday-bound-and-merkle-damgard.md)) | sponge (Keccak) |
| Common sizes | 256, 384, 512 bits | 256, 512 bits |
| Length-extension | vulnerable | immune |
| Status | unbroken; SHA-1 and MD5 are broken | unbroken |

MD5 collisions are found in seconds, and SHA-1 collisions were demonstrated in 2017 at a cost of about $2^{63}$ hash computations — below the $2^{80}$ its 160-bit output nominally promised, because cryptanalysis found structure. **Both were retired for collision failures, while their preimage resistance was still intact**, which is exactly the hierarchy above playing out in history.

## Picture

![Three side-by-side panels, one per hardness property. The first panel, preimage resistance, shows the attacker given an output y and asked to find any input hashing to it, at cost two to the n. The second, second-preimage resistance, shows the attacker given an input x and asked for a different input with the same hash, also at cost two to the n. The third, collision resistance, highlighted, shows the attacker given nothing and free to choose both inputs, at cost two to the n over two.](assets/02-01-fig1.svg)

Read the panels left to right and watch the attacker's constraints loosen: first she is pinned to a target output, then to a target input, then to nothing at all. **Work falls as freedom rises**, and the third panel's exponent is halved, which is the single most consequential fact about hash sizing.

## Worked examples

**Example 1 — which property does the application actually need?**

| Application | Property needed | Why |
|---|---|---|
| Verify a downloaded file against a published digest | second-preimage | the legitimate file is fixed; an attacker must match *it* |
| Sign a contract by signing its hash | collision | the attacker may draft both the benign and the malicious contract |
| Store password digests | preimage | the attacker has the digest and wants any matching input |
| Deduplicate storage blocks by digest | collision | two colliding blocks would silently overwrite each other |

The signature row is the one people get wrong, and the attack is concrete. If an attacker finds a colliding pair $(d_{\text{good}}, d_{\text{bad}})$ she asks you to sign the harmless contract and then presents your signature attached to the damaging one. The signature is over $H(d)$, the hashes are equal, and verification passes. **She never touched your key.** This is why MD5's collision break instantly invalidated MD5 signatures and certificates, while MD5's preimage resistance was and remains unbroken.

**Example 2 — why a raw hash is a bad password store, in numbers.**

A site stores $H(\text{password})$ with SHA-256 and leaks its database. Users' passwords are eight characters of lowercase letters and digits, so the space is

$$36^8 = 2.82 \times 10^{12} \approx 2^{41.4}.$$

A GPU rig computing $10^{10}$ SHA-256 hashes per second covers that space in

$$\frac{2.82 \times 10^{12}}{10^{10}} \approx 282 \text{ seconds}.$$

Under five minutes — for *every* user at once, because the same precomputed table matches every account with the same password. SHA-256's 256-bit preimage resistance was never the issue: **the input had only 41 bits of entropy, and no hash function can manufacture entropy that the input lacks.**

Two fixes, doing different jobs. A **salt** — a unique random value per user, stored alongside, hashed as $H(\text{salt} \Vert \text{password})$ — destroys precomputed tables and forces the attacker to attack each account separately, turning one 282-second job into a billion of them. A **slow KDF** — bcrypt, scrypt, Argon2, deliberately built to be expensive in time and memory — attacks the rate. At $10^4$ guesses per second instead of $10^{10}$, the same space takes

$$\frac{2.82 \times 10^{12}}{10^{4}} \approx 2.8 \times 10^{8} \text{ seconds} \approx 9 \text{ years},$$

per account. Salt and slow KDF are complementary and you need both.

## Watch out

- You might think hashing anonymises data. It does not. A hash is deterministic, so any low-entropy input — an email address, a phone number, a national ID — is recovered by hashing every candidate and matching. Hashing a 10-digit phone number requires $10^{10}$ guesses, which is under a second.
- You might think a longer hash is proportionally stronger against all attacks. It is, but the exponents differ: doubling output length doubles preimage security and doubles collision security, yet the collision level starts at half the output size. Pick the size against the *collision* requirement.
- You might think collision resistance implies the hash hides its input. It does not, as the $H'(x) = 0 \Vert x$ construction shows. Hiding is a separate property, achieved by adding secret randomness — which is what a commitment does ([4.3](04-03-commitments-and-secret-sharing.md)).

## One-liner

> Collisions always exist; the job is that nobody can find one — and an $n$-bit hash gives $n$ bits against preimages but only $n/2$ against collisions, because there the attacker chooses both sides.

## Problems

**P1 (🟢)** For each scenario, name the single hash property whose failure enables the attack, and state the attacker's move in one sentence. (a) An attacker substitutes a malicious installer for a published one whose SHA-256 digest is on the vendor's website. (b) An attacker gets a notary to sign a benign document and later attaches that signature to a fraudulent one. (c) An attacker with a leaked digest table recovers users' secret recovery codes.

**P2 (🟡)** A service wants to publish a digest of each user's email address so that partners can check membership without receiving the list. It uses SHA-256 with no salt. (a) Explain why this fails, and estimate the work to recover an address drawn from a known list of $10^{9}$ addresses. (b) The service adds a single site-wide salt. Say what this does and does not fix. (c) Give a construction that actually meets the stated goal, and name its cost.

**P3 (🔴, optional)** Define $H'(x) = H(x) \Vert H(H(x))$, where $H$ is a collision-resistant hash with $n$-bit output, so $H'$ has $2n$-bit output. (a) Prove $H'$ is collision-resistant. (b) State the collision security level of $H'$ in bits, and compare it to a genuine $2n$-bit hash. (c) State what this shows about inferring security level from output length.

<details>
<summary>Solutions</summary>

**P1** (a) **Second-preimage resistance.** The legitimate installer is fixed and published, so the attacker must find a *different* file with that exact digest — she has no freedom over the target.

(b) **Collision resistance.** She chooses both documents in advance, finds a colliding pair, gets the benign one signed, and transplants the signature. Because the signature covers only $H(d)$ and the hashes are equal, verification succeeds.

(c) **Preimage resistance.** She holds digests and wants inputs producing them. Note that in practice this attack usually succeeds not because the hash is weak but because recovery codes have low entropy — the property is the right name for the game, but the arithmetic is about the input distribution.

**P2** (a) It fails because hashing is **deterministic and unkeyed**, so anyone may hash a candidate and compare. Recovering an address drawn from a known list of $10^9$ costs at most $10^9$ SHA-256 evaluations — about **0.1 seconds** on a GPU at $10^{10}$ hashes per second. The published digests are, for practical purposes, the addresses.

(b) A single site-wide salt **prevents reuse of generic precomputed tables** — an attacker cannot use a rainbow table built for unsalted SHA-256. It fixes nothing else: she computes the $10^9$ salted digests once, for that one salt, and is back where she started, at the same 0.1 seconds. **A salt shared by everyone is a salt that protects nobody**, because its entire value lies in forcing per-target work.

(c) The stated goal — letting a partner test membership without learning the list — is **private set intersection**, and the cheap hash-based approximation cannot meet it when the item space is enumerable. Two constructions that do:

- **Keyed hash with a secret key held jointly.** Replace $H(x)$ with $\mathrm{HMAC}_k(x)$ ([2.3](02-03-message-authentication-codes.md)) where $k$ is secret. Now the partner cannot compute digests for guessed addresses. Cost: the partner must ask the service to compute digests for its own queries, so the service learns the query set — the privacy moved rather than vanished.
- **Diffie–Hellman-based PSI.** Both parties raise hashed items to their own secret exponents in a group where the discrete-log problem is hard ([3.2](03-02-diffie-hellman-key-exchange.md)) and exchange the results; the double-exponentiated values match exactly on shared items and reveal nothing about the rest. Cost: one exponentiation per item on each side — hundreds of times slower than a hash, and it requires an interactive protocol rather than a published file.

The honest summary: **the goal of "publish something that hides an enumerable set" is unachievable with an unkeyed deterministic function**, and the fix is either a secret key or an interactive protocol.

**P3** (a) Suppose $x \ne x'$ with $H'(x) = H'(x')$. Then the two $2n$-bit outputs agree, so in particular their first $n$ bits agree, giving $H(x) = H(x')$. So $(x, x')$ is a collision for $H$. Therefore any efficient algorithm finding a collision in $H'$ yields one in $H$ at the same cost, and collision resistance of $H$ transfers to $H'$. $\blacksquare$

(b) $H'$ has a $2n$-bit output but a collision security level of **$n/2$ bits, not $n$**. The second half is a deterministic function of the first, so the output has only $n$ bits of genuine variability; a birthday search over $H$ costing $2^{n/2}$ produces a pair colliding in the first half, and the second half then matches automatically. A genuine $2n$-bit hash would cost $2^{n}$. With $n = 128$, $H'$ outputs 256 bits and delivers 64-bit collision security, against a real SHA-256's 128.

(c) **Output length is an upper bound on security, never a measurement of it.** The security level is set by the entropy of the output and by the best known attack, and padding, truncating, or concatenating derived values can inflate the length while leaving both unchanged. The same warning applies in reverse to truncation: taking the first 128 bits of SHA-256 is a legitimate 128-bit hash with 64-bit collision security, which is fine if that is what you budgeted for and a disaster if you read "SHA-256" and assumed 128.

</details>

## Flashback

**From Lesson 1.5 (pseudorandom functions and block ciphers):** A developer proposes to build a hash function from AES as $H(x_1 \Vert x_2 \Vert \cdots \Vert x_t) = E_{k}(x_1) \oplus E_{k}(x_2) \oplus \cdots \oplus E_{k}(x_t)$, with $k$ a fixed public constant and each $x_i$ one block. (a) Give a collision in two blocks. (b) Name the structural property of the construction that causes the failure, and state which of the three hash properties survive.

<details>
<summary>Solution</summary>

(a) XOR is commutative, so **swapping any two blocks gives a collision**: for distinct blocks $a \ne b$,

$$H(a \Vert b) = E_k(a) \oplus E_k(b) = E_k(b) \oplus E_k(a) = H(b \Vert a),$$

and $a \Vert b \ne b \Vert a$. Finding this costs nothing — no search, no queries, two AES calls to exhibit it if you want the value. A second family: any block repeated twice contributes $E_k(x) \oplus E_k(x) = 0$, so $H(a \Vert b \Vert b) = H(a)$, giving collisions between messages of different lengths.

(b) The failure is that the construction is a **sum over an unordered, cancellable group operation**: the digest depends only on the multiset of blocks, and on that multiset only through XOR, so block order is invisible and pairs annihilate. A hash must be sensitive to position and length, which is exactly what Merkle–Damgård's chaining and length padding provide ([2.2](02-02-the-birthday-bound-and-merkle-damgard.md)).

Which properties survive: **none of the three, as stated.** Collision resistance fails by (a). Second-preimage resistance fails for the same reason — given $x = a \Vert b$, output $b \Vert a$. Preimage resistance also fails: given a target $y$, pick any $x_1$ and set $x_2 = E_k^{-1}(y \oplus E_k(x_1))$, which is computable because $k$ is public and AES is invertible, so a preimage is found in two operations. The last point is the sharpest one — **making the key public turned the PRP into a tool for the attacker**, and it is the reason hash compression functions use constructions such as Davies–Meyer, $h_i = E_{m_i}(h_{i-1}) \oplus h_{i-1}$, where the message enters as the key and the feed-forward XOR blocks inversion.

</details>

## Connections

- **Backward:** a hash is a PRF's unkeyed cousin — [1.5](01-05-pseudorandom-functions-and-block-ciphers.md) gave a keyed function that looks random to someone without the key, and here everyone has the function and the hardness lives in the output size instead.
- **Forward:** [2.2](02-02-the-birthday-bound-and-merkle-damgard.md) derives the $2^{n/2}$ collision bound and builds $H$ from a fixed-input compression function; [2.3](02-03-message-authentication-codes.md) re-keys a hash into a MAC; and [4.1](04-01-digital-signatures.md) signs $H(m)$ rather than $m$, which is where collision resistance becomes load-bearing.
- **Sideways:** [`distributed-systems` 4.6](../../distributed-systems/lessons/04-06-nakamoto-consensus-and-blockchains.md) assumes exactly the collision and preimage resistance defined here for its proof-of-work and Merkle roots; [`algorithms` 4.4](../../algorithms/lessons/04-04-randomized-algorithms.md)'s hash tables need only that collisions be *rare*, not that they be *unfindable*, which is the entire difference between a hash function and a cryptographic one.

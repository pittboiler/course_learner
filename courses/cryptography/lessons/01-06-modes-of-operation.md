# Cryptography · Lesson 1.6: Modes of operation

> ⏱ ~15 min · Module 1: Perfect secrecy and symmetric encryption · Builds on: [1.5 (pseudorandom functions and block ciphers)](01-05-pseudorandom-functions-and-block-ciphers.md) · Unlocks: [2.1 (cryptographic hash functions)](02-01-cryptographic-hash-functions.md)

## Why this matters

AES encrypts exactly 128 bits. Your messages are not 128 bits. Bridging that gap is the **mode of operation**, and it is where more real systems have failed than anywhere else in symmetric cryptography.

The reason is that the mode, not the cipher, is what determines whether encryption is *randomised*. A block cipher is a deterministic function, and this lesson proves that any deterministic encryption scheme is broken under the security definition real systems need. The mode is how you put the randomness back.

## The idea

The naive approach is to chop the message into blocks and encrypt each one. That is **ECB**, Electronic Code Book, and it fails immediately: the cipher is deterministic, so **two identical plaintext blocks produce two identical ciphertext blocks**, in plain view. An image encrypted in ECB still shows its own outline, because large blocks of one colour stay large blocks of one value.

That is not a subtle leak; it is the [1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md) substitution cipher again, one block at a time. And it is a special case of the general theorem below: **a deterministic scheme always leaks equality of plaintexts**, because equal inputs give equal outputs and an adversary can check.

So the mode must ensure that encrypting the same message twice gives different ciphertexts. There are two ways, and both real modes are one of them.

**Chain it.** CBC XORs each plaintext block with the *previous ciphertext* block before encrypting, and starts the chain with a random initialisation vector. Every block's input depends on all the plaintext before it, so a repeated block encrypts differently unless the entire prefix repeats too.

**Counter it.** CTR does not encrypt the plaintext at all. It encrypts a counter — nonce, nonce plus one, nonce plus two — and XORs the resulting stream into the plaintext. This turns the block cipher into a one-time pad generator, exactly the stream cipher of [1.4](01-04-computational-security-and-pseudorandomness.md), with the pad indexed by the nonce.

CTR is the modern default, and the reasons are worth listing: it needs no padding, it parallelises in both directions, it never calls the cipher's inverse, and it needs a PRF rather than a PRP. That last point is quietly important — **the security argument for CTR is the cleanest in symmetric cryptography**, because the pad blocks are just PRF outputs at distinct points.

The price is the nonce. Repeat one and you have repeated a pad, which is [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md)'s two-time pad with the same total failure.

## The formal version

> **Definition (IND-CPA).** In experiment $\mathrm{PrivK}^{\mathrm{cpa}}_{A,\Pi}(n)$: the challenger picks $k \leftarrow \mathrm{Gen}(1^n)$; the adversary $A$ gets oracle access to $\mathrm{Enc}_k(\cdot)$ and outputs two equal-length messages $m_0, m_1$; the challenger flips $b$ and returns $c \leftarrow \mathrm{Enc}_k(m_b)$; $A$ keeps its oracle, then outputs $b'$ and wins if $b' = b$. $\Pi$ is **IND-CPA secure** if for every PPT $A$,
> $$\Pr[\mathrm{PrivK}^{\mathrm{cpa}}_{A,\Pi}(n) = 1] \le \tfrac12 + \mathrm{negl}(n).$$

In words: even an adversary who can have anything she likes encrypted, before and after seeing the challenge, cannot tell which of her two chosen messages it is. This is [1.4](01-04-computational-security-and-pseudorandomness.md)'s EAV game plus the oracle, and the oracle is what makes it match reality — attackers routinely cause servers to encrypt data they chose.

> **Theorem.** No deterministic encryption scheme is IND-CPA secure.

*Proof.* Let $\mathrm{Enc}_k$ be deterministic. The adversary picks any two distinct equal-length messages $m_0 \ne m_1$, submits them, and receives $c = \mathrm{Enc}_k(m_b)$. She then queries her oracle on $m_0$, receiving $c_0 = \mathrm{Enc}_k(m_0)$. She outputs $b' = 0$ if $c = c_0$ and $b' = 1$ otherwise.

If $b = 0$ then $c = \mathrm{Enc}_k(m_0) = c_0$ by determinism, so she is right. If $b = 1$ then $c = \mathrm{Enc}_k(m_1) \ne c_0$, since $\mathrm{Enc}_k$ is injective on equal-length messages by correctness, so she is right again. She wins with probability 1, and $1 \ne \tfrac12 + \mathrm{negl}(n)$. $\blacksquare$

**This is a two-query proof that kills an entire design space.** Any scheme in which the ciphertext is a function of the key and message alone — ECB, textbook RSA ([3.3](03-03-rsa-encryption.md)), any "encrypt the database field so we can still index it" design — falls to it. The only escape is that $\mathrm{Enc}$ must consume fresh randomness or a never-repeating nonce.

The three modes, stated precisely. Write $m = m_1 \Vert m_2 \Vert \cdots \Vert m_t$ in blocks.

> **ECB.** $c_i = E_k(m_i)$. Deterministic, hence not IND-CPA secure.

> **CBC.** Choose a uniform $\mathrm{IV} = c_0$ and set $c_i = E_k(m_i \oplus c_{i-1})$. Transmit $c_0 \Vert c_1 \Vert \cdots \Vert c_t$. Decryption: $m_i = E_k^{-1}(c_i) \oplus c_{i-1}$.

> **CTR.** Choose a nonce $\mathrm{ctr}$ and set $c_i = m_i \oplus E_k(\mathrm{ctr} + i)$. Transmit $\mathrm{ctr} \Vert c_1 \Vert \cdots \Vert c_t$. Decryption is the identical XOR.

> **Theorem.** If $E$ is a PRF then CTR mode is IND-CPA secure, with advantage at most $\mathrm{negl}(n) + q^2/2^{\ell}$ over $q$ encrypted blocks with $\ell$-bit counter blocks. If $E$ is a PRP then CBC with uniform IVs is IND-CPA secure.

In words: CTR inherits security directly from the PRF assumption, and the extra $q^2/2^{\ell}$ term is the birthday cost of counter blocks colliding across messages. **Both theorems require the IV or nonce to be right, and both fail loudly when it is not.**

The two failure modes are different and both matter:

| Mode | Requirement on IV / nonce | What breaks if violated |
|---|---|---|
| CBC | uniform and **unpredictable** in advance | a predictable IV lets a chosen-plaintext adversary confirm guesses about earlier plaintext blocks (the BEAST attack) |
| CTR | **unique** per key, need not be secret or random | a repeated nonce repeats the pad, and $c \oplus c' = m \oplus m'$ |

**Practical comparison:**

| | ECB | CBC | CTR |
|---|---|---|---|
| IND-CPA | no | yes, with unpredictable IV | yes, with unique nonce |
| Padding needed | yes | yes | no |
| Encrypt in parallel | yes | no, chained | yes |
| Decrypt in parallel | yes | yes | yes |
| Needs $E^{-1}$ | yes | yes | no |

CBC needs the plaintext padded to a block boundary, usually by PKCS#7, which appends $p$ bytes each of value $p$. That padding must be checked on decryption, and a server that reveals whether the check passed leaks one byte at a time — the **padding oracle** attack, which is the motivating failure for [2.4](02-04-authenticated-encryption.md).

## Picture

![Two block diagrams. The upper diagram shows ECB mode: three plaintext blocks, the first and third identical, each fed independently into a box labelled with the block cipher under key k, producing three ciphertext blocks of which the first and third are also identical, joined by a dashed line marking the leak. The lower diagram shows CBC mode: an initialisation vector is XOR-ed into the first plaintext block before encryption, and each resulting ciphertext block is fed forward and XOR-ed into the next plaintext block, so the repeated plaintext block produces a different ciphertext.](assets/01-06-fig1.svg)

The dashed line in the upper half is the entire ECB failure. Follow the feedback arrows in the lower half and you can see why CBC escapes it: the third block is not encrypting $m_1$, it is encrypting $m_1 \oplus c_2$, and $c_2$ is a value the adversary cannot control or predict. **Randomisation is not sprinkled on top of the cipher; it is threaded through the input.**

## Worked examples

**Example 1 — reading an ECB ciphertext without the key.**

A payroll database encrypts each employee's department code as one AES block in ECB mode. The ciphertext column shows 4,000 rows over 180 distinct ciphertext values, with the most common appearing 1,240 times.

Without any key, the analyst already knows: there are exactly **180 departments**; the largest has **1,240 people**; and any two rows sharing a ciphertext share a department. Adding one known row — one employee whose department is public — labels an entire group of 1,240. The distribution of department sizes is a fingerprint, and matching it against a public org chart typically names most of the 180.

This is frequency analysis on a 128-bit alphabet, and it is the same attack that broke the substitution cipher in [1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md). **Enormous block size did not help, because the message space was tiny.**

**Example 2 — a repeated CTR nonce, worked through.**

Two messages are encrypted under the same key and, by mistake, the same nonce. The pad for block $i$ is $P_i = E_k(\mathrm{ctr} + i)$ in both cases, so

$$c_i \oplus c'_i = (m_i \oplus P_i) \oplus (m'_i \oplus P_i) = m_i \oplus m'_i.$$

Suppose the first block of one message is a known 16-byte HTTP header, `GET /index.html`. Then the adversary computes

$$P_1 = c_1 \oplus m_1$$

and immediately decrypts the *other* message's first block as $m'_1 = c'_1 \oplus P_1$ — and every subsequent message encrypted under this nonce, forever, at that block position.

Now the design question: how likely is a repeat? If nonces are chosen uniformly at random from $\ell$ bits and $q$ messages are sent, the birthday bound gives a collision probability of about $q^2 / 2^{\ell + 1}$. With a 96-bit nonce and $q = 2^{32}$ messages, that is about $2^{64}/2^{97} = 2^{-33}$, roughly one in eight billion — acceptable. With a **64-bit** nonce and the same traffic it is $2^{64}/2^{65} = 1/2$, a coin flip. **Nonce length is a capacity budget, and the safest implementations use a counter rather than randomness so the budget is exact rather than probabilistic.**

## Watch out

- You might think a mode's IV must be secret. It must not be — the receiver needs it, and it is transmitted in the clear. CBC needs it *unpredictable*, CTR needs it *unique*, and neither needs it confidential. Confusing "random" with "secret" is a common and expensive error.
- You might think CTR's lack of padding makes it safer, full stop. It removes padding-oracle attacks but leaves CTR **completely malleable**: flipping bit $j$ of the ciphertext flips bit $j$ of the plaintext, with no detection at all. IND-CPA says nothing about integrity, which is the entire subject of [Module 2](02-03-message-authentication-codes.md).
- You might think encrypting a short, low-entropy value in a good mode is safe. It is safe against *these* definitions, but a ciphertext of a randomised mode is still a target for guess-and-check if the adversary has an encryption oracle and the message space is small. Encrypt a Boolean and IND-CPA holds; encrypt a Boolean and let the adversary compare lengths or timings, and it does not.

## One-liner

> A block cipher is deterministic and deterministic encryption is always breakable, so the mode's real job is to inject a fresh IV or nonce into every message — and then never, ever repeat it.

## Problems

**P1 (🟢)** A message consists of four blocks $m_1 m_2 m_3 m_4$ where $m_1 = m_3$ and all others are distinct. State which ciphertext blocks are equal under (a) ECB, (b) CBC with a fresh random IV, (c) CTR with a fresh nonce. Then say what an adversary learns in each case from comparing ciphertext blocks.

**P2 (🟡)** A file-storage service encrypts each file with AES-CTR under a per-user key, using a 32-bit random nonce. (a) Using the birthday bound $q^2 / 2^{\ell+1}$, find the number of files after which a nonce collision is more likely than not. (b) Convert your answer to a plain statement of what a user would have to do to be at risk. (c) State the change you would make, and why a counter is better than a longer random nonce here.

**P3 (🔴, optional)** A system encrypts with CBC and derives the IV as $\mathrm{IV} = E_k(\text{message number})$, arguing this is unpredictable because it is a cipher output. An adversary can request encryptions and knows the message numbers. (a) Show the IV is in fact predictable to her, and give the two-step reason. (b) Build a concrete IND-CPA attack: give the messages she submits and the test she applies, and compute her success probability. (c) State the general rule this violates.

<details>
<summary>Solutions</summary>

**P1** (a) **ECB:** $c_1 = c_3$, since $c_i = E_k(m_i)$ and $m_1 = m_3$. All other blocks differ. The adversary learns that blocks 1 and 3 of the plaintext are identical, which for structured data is often enough to identify the message.

(b) **CBC:** in general **no two ciphertext blocks are equal.** Block 3 encrypts $m_3 \oplus c_2$, not $m_3$, and $c_2$ is effectively unpredictable, so $c_3 = E_k(m_1 \oplus c_2) \ne E_k(m_1 \oplus c_0) = c_1$ except by coincidence. The adversary learns nothing from block comparison. (A collision would occur only if $c_2 = c_0$, a birthday event of probability about $2^{-128}$.)

(c) **CTR:** again **no two equal**, and for a different reason: $c_i = m_i \oplus E_k(\mathrm{ctr}+i)$, so even two identical plaintext blocks are masked by pads at different counter values. Nothing is learned.

The contrast in (a) versus (b) and (c) is the whole content of the mode: identical inputs must not produce identical outputs.

**P2** (a) Set the collision probability to $1/2$ with $\ell = 32$:

$$\frac{q^2}{2^{33}} = \frac12 \iff q^2 = 2^{32} \iff q = 2^{16} = 65{,}536 \text{ files}.$$

(b) A user who uploads about **65,000 files** under one key is more likely than not to have two files sharing a nonce — and any two such files leak their XOR completely, per Example 2. Sixty-five thousand files is an ordinary photo library, not an extreme case, so this is a defect that will fire in normal use rather than under attack.

(c) Use a **96-bit nonce**, which is the standard size, and better still make it a **counter** rather than a random value. Randomness gives only a probabilistic guarantee, and the birthday bound means a random nonce delivers roughly $\ell/2$ bits of collision resistance rather than $\ell$. A counter, stored durably and incremented per encryption, gives a *guarantee* of uniqueness up to $2^{\ell}$ messages, which is twice the exponent for free. The caveat is that a counter must survive restarts and must not be duplicated across replicas — the failure mode moves from probability to state management, which is easier to reason about and to test.

**P3** (a) The IV is predictable in two steps. First, the adversary has an encryption oracle, so she can obtain the ciphertext of any message she likes — and a CBC ciphertext transmits its IV in the clear as $c_0$. Second, the IV for message number $j$ is $E_k(j)$, a **deterministic function of a value she knows**, so once she has observed the encryption of message $j$ she knows $E_k(j)$ for that $j$ — and, crucially, the IV of the *next* message is $E_k(j+1)$, which she can read off the previous transmission's ciphertext if message $j+1$'s IV was already exposed, or simply by requesting encryptions in order and recording each $c_0$. In short: the IV sequence is a published list, so before submitting her challenge she knows the IV that will be used on it.

(b) Let $\mathrm{IV}^{*}$ be the IV that will be used for the challenge, known to her by (a), and let $\mathrm{IV}_0$ be the IV of some earlier oracle query on a one-block message $x$, whose ciphertext block was $c = E_k(x \oplus \mathrm{IV}_0)$.

She submits the one-block pair

$$m_0 = x \oplus \mathrm{IV}_0 \oplus \mathrm{IV}^{*}, \qquad m_1 = \text{any other block}.$$

If $b = 0$, the challenge ciphertext block is

$$E_k(m_0 \oplus \mathrm{IV}^{*}) = E_k(x \oplus \mathrm{IV}_0 \oplus \mathrm{IV}^{*} \oplus \mathrm{IV}^{*}) = E_k(x \oplus \mathrm{IV}_0) = c,$$

which she recognises instantly. If $b = 1$ it equals $c$ only by a $2^{-128}$ coincidence. Her test is "is the challenge block equal to $c$", and she wins with probability $1 - 2^{-128}$, which is not $\tfrac12 + \mathrm{negl}$. The scheme is not IND-CPA secure.

(c) The rule: **CBC's IV must be unpredictable to the adversary at the time she chooses her plaintext**, not merely unique or merely a cipher output. "Looks random" is not the requirement; "is not known in advance to the person choosing the message" is. This is precisely the flaw exploited by the BEAST attack on TLS 1.0, which used the previous record's last ciphertext block as the next record's IV — an unpredictable-looking value that a chosen-plaintext adversary had already seen.

</details>

## Flashback

**From Lesson 1.4 (computational security and pseudorandomness):** CTR mode with a fixed nonce and key defines the function $y \mapsto E_k(\mathrm{ctr} + 1) \Vert E_k(\mathrm{ctr}+2) \Vert \cdots$, a pad generated from a short key. (a) Is this a PRG, and what plays the role of the seed? (b) A developer proposes appending a checksum to each pad block — the XOR of that block's bits — so the receiver can detect corruption. Give a distinguisher against the resulting generator and its advantage.

<details>
<summary>Solution</summary>

(a) **Yes**, and the seed is the key $k$ (with the nonce fixed and public). The map takes $n$ bits of key to $\ell(n)$ bits of pad with $\ell(n) > n$, it is deterministic and polynomial-time, and its output is indistinguishable from uniform whenever $E$ is a PRF — each pad block is $E_k$ evaluated at a distinct counter value, so a random-function oracle would return independent uniform blocks. This is exactly why CTR's security proof is short: the mode *is* a PRG, and the scheme *is* the stream cipher of [1.4](01-04-computational-security-and-pseudorandomness.md).

(b) The appended checksum is a function of bits already in the output, which is [1.4](01-04-computational-security-and-pseudorandomness.md)'s P2 in a new costume. Distinguisher $D$: read the first block and its appended bit, and output 1 if the bit equals the XOR of the block's bits.

- Real generator: the relation holds by construction, so $\Pr[D = 1] = 1$.
- Uniform string: the appended bit is independent and uniform, so it matches with probability $1/2$.

$$\text{advantage} = \left|1 - \tfrac12\right| = \tfrac12,$$

constant and thus not negligible. The generator is broken as a PRG.

The practical reading matters more than the arithmetic: **integrity must not be bolted on by publishing a function of the keystream.** The correct construction computes a MAC over the *ciphertext* under a separate key, which is [2.3](02-03-message-authentication-codes.md) and [2.4](02-04-authenticated-encryption.md).

</details>

## Connections

- **Backward:** CTR turns [1.5](01-05-pseudorandom-functions-and-block-ciphers.md)'s PRP into [1.4](01-04-computational-security-and-pseudorandomness.md)'s PRG, so its proof is the stream-cipher theorem with the pad indexed by a nonce; ECB's failure is [1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md)'s substitution cipher with a 128-bit alphabet.
- **Forward:** every mode here provides confidentiality and **no integrity**, and CTR's malleability is the specific hole [2.3](02-03-message-authentication-codes.md) and [2.4](02-04-authenticated-encryption.md) close; the padding oracle sketched above is the concrete reason those lessons exist.
- **Sideways:** the birthday arithmetic used for nonce collisions is derived properly in [2.2](02-02-the-birthday-bound-and-merkle-damgard.md); the parallelism table is a dependency-graph question of the sort [`algorithms` 3.2](../../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md) formalises, with CBC encryption being a chain and CTR an antichain.

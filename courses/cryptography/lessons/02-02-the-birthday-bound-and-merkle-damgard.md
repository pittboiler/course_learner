# Cryptography · Lesson 2.2: The birthday bound and Merkle–Damgård

> ⏱ ~15 min · Module 2: Hash functions and message authentication · Builds on: [2.1 (cryptographic hash functions)](02-01-cryptographic-hash-functions.md) · Unlocks: [2.3 (message authentication codes)](02-03-message-authentication-codes.md)

## Why this matters

[2.1](02-01-cryptographic-hash-functions.md) asserted that collisions in an $n$-bit hash cost about $2^{n/2}$ work rather than $2^n$. That factor is the difference between SHA-1 being safe and SHA-1 being broken, and this lesson derives it.

The same calculation sets the safe lifetime of a block cipher key ([1.5](01-05-pseudorandom-functions-and-block-ciphers.md)), the nonce budget of a mode ([1.6](01-06-modes-of-operation.md)), and the tag length of a MAC ([2.3](02-03-message-authentication-codes.md)). **It is the single most reused piece of arithmetic in cryptography**, and it is worth being able to do from memory.

Then, construction. A hash takes arbitrary-length input, but real compression functions take a fixed-size input. Merkle–Damgård is the classic bridge, and its one notorious flaw — length extension — is the reason HMAC has the shape it does.

## The idea

**The birthday bound.** Draw $q$ items uniformly at random from a set of $N$ possibilities. How large must $q$ be before two items coincide?

The intuition that gives the wrong answer is "you need about $N$ draws". The intuition that gives the right one is: collisions come from *pairs*, and $q$ items contain $\binom{q}{2} \approx q^2/2$ pairs. Each pair collides with probability $1/N$, so the expected number of colliding pairs is about $q^2/(2N)$, which reaches 1 when $q \approx \sqrt{N}$.

**Square root, not linear.** With 365 birthdays you need 23 people, not 183. With $2^{256}$ hash outputs you need about $2^{128}$ hashes, not $2^{256}$.

**Merkle–Damgård.** Start from a fixed initial value. Absorb the message one block at a time, each step feeding the previous chaining value and the next block into a compression function. Append a final block encoding the message length. Output the last chaining value.

That last sentence contains the flaw. **The output *is* the internal state.** So anyone holding $H(m)$ holds exactly the state the algorithm would have been in after absorbing $m$ — and can continue from there, absorbing more blocks, producing a valid digest of a longer message they never saw in full. That is the **length-extension attack**, and it is fatal to the tempting MAC construction $t = H(k \Vert m)$.

SHA-3 avoids it by construction. Its sponge keeps part of its state permanently hidden from the output, so the digest is not a resumable state.

## The formal version

> **Birthday bound.** Drawing $q$ values independently and uniformly from a set of size $N$, the probability that all are distinct is
> $$\Pr[\text{no collision}] = \prod_{i=0}^{q-1}\left(1 - \frac{i}{N}\right) \le \exp\!\left(-\frac{q(q-1)}{2N}\right).$$

*Derivation.* The $i$-th draw avoids the $i$ previous values with probability $1 - i/N$; multiply over $i = 0, \dots, q-1$. The bound uses $1 - x \le e^{-x}$ and $\sum_{i=0}^{q-1} i = q(q-1)/2$.

Setting the collision probability to $1/2$ and solving $\exp(-q^2/2N) = 1/2$ gives

$$q \approx \sqrt{2 \ln 2}\,\sqrt{N} \approx 1.177\sqrt{N}.$$

In words: about $1.18$ times the square root of the space size for even odds. For an $n$-bit hash, $N = 2^n$ and

$$q \approx 1.177 \cdot 2^{n/2}.$$

Two sanity checks. Birthdays: $N = 365$ gives $q \approx 1.177\sqrt{365} \approx 22.5$, and the exact computation gives a collision probability of $0.507$ at $q = 23$. SHA-256: $q \approx 1.177 \cdot 2^{128} \approx 4.0 \times 10^{38}$, which is $2^{128.2}$ — comfortably out of reach, and exactly why 256-bit outputs are the modern default.

A useful rearrangement for small probabilities, since you usually want a *tiny* collision chance rather than even odds:

$$\Pr[\text{collision}] \approx \frac{q^2}{2N}.$$

> **Merkle–Damgård construction.** Given a compression function $f : \{0,1\}^{n} \times \{0,1\}^{b} \to \{0,1\}^{n}$, fix a public $h_0 = \mathrm{IV}$. Pad the message $m$ so its length is a multiple of $b$, with the final block encoding $|m|$ (this is **MD strengthening**). Split into blocks $m_1, \dots, m_t$ and set
> $$h_i = f(h_{i-1}, m_i), \qquad H(m) = h_t.$$

> **Merkle–Damgård theorem.** If $f$ is collision-resistant, then $H$ is collision-resistant.

*Proof sketch.* Suppose $H(m) = H(m')$ with $m \ne m'$. Compare the chains from the end. If the messages have different lengths, the final blocks differ (they encode different lengths) while producing the same $h_t$ — a collision in $f$. If the lengths match, walk backwards: the last step where the inputs to $f$ differ but the outputs agree is a collision in $f$, and such a step must exist since the messages differ but the final values agree. $\blacksquare$

**This is why the theorem matters practically:** the designer only has to build one collision-resistant function on a fixed, small domain, and the construction extends it to all inputs for free. SHA-256 uses $b = 512$ and $n = 256$.

> **Length-extension attack.** Given $H(m)$ and $|m|$, but not $m$, an adversary computes $H(m \Vert \mathrm{pad}(m) \Vert m')$ for any $m'$ of her choosing, in time proportional to $|m'|$.

*How.* Set $h_t := H(m)$ — legitimate, because the digest is the chaining value. Continue the chain over the blocks of $m'$, apply the final padding for the new total length, and output. She never learns $m$; she does not need to.

The victim is the naive MAC $t = H(k \Vert m)$. An attacker who sees a valid $(m, t)$ pair and knows $|k|$ forges

$$t' = H(k \Vert m \Vert \mathrm{pad} \Vert m')$$

for a message of her choice — **a valid tag on a message the key-holder never authorised**. HMAC's nested two-key construction exists precisely to break this ([2.3](02-03-message-authentication-codes.md)).

## Picture

![A chain diagram of the Merkle-Damgard construction. An initial value enters the first compression function box, which also absorbs message block one; its output chains into a second box absorbing block two; a third box absorbs the padding and length block; the final output is labelled as the digest. Annotations explain that the digest is itself the chaining state, so an attacker holding it can resume the chain with her own blocks, and that the sponge construction of SHA-3 hides part of its state to prevent this.](assets/02-02-fig1.svg)

The picture makes the attack obvious once you look for it. **Every box takes a chaining value and a block, and the last box's output is published.** Publishing the state is exactly what lets someone else run the next box. Nothing is broken about $f$; the leak is structural.

## Worked examples

**Example 1 — how long until a hash is too small?**

A content-addressed store uses a 64-bit digest and holds $q$ objects. Using $\Pr[\text{collision}] \approx q^2/(2N)$ with $N = 2^{64}$:

| Objects $q$ | Collision probability |
|---|---|
| $10^6$ | $2.7 \times 10^{-8}$ |
| $10^9$ | $2.7 \times 10^{-2}$ |
| $4 \times 10^9 \approx 2^{32}$ | $0.39$ |

At a billion objects, roughly one store in 37 has a silent collision — and a collision here means one object **overwrites another**, because the store believes equal digests mean equal content. At four billion, it is nearly a coin flip.

Note the shape. Going from $10^6$ to $10^9$ is a factor of $10^3$ in objects and $10^6$ in risk, because the probability grows as $q^2$. **Birthday risk accelerates**, so a system that has been fine for years can fail shortly after it stops being fine. Moving to a 256-bit digest and truncating to 128 bits drops the billion-object probability to about $10^{-21}$.

And note what this is *not*: these numbers assume digests are effectively random, so they describe accidental collisions. An adversary who wants a collision does the $2^{32}$ work deliberately and gets one — which is the difference between the property [`algorithms` 4.4](../../algorithms/lessons/04-04-randomized-algorithms.md) needs from a hash table and the property a cryptographic hash must have.

**Example 2 — forging with length extension, step by step.**

A server authenticates API requests with $t = \mathrm{SHA256}(k \Vert m)$, where $k$ is a 16-byte secret and

$$m = \texttt{user=alice\&role=reader}.$$

An attacker observes one legitimate pair $(m, t)$. She does not know $k$, but she guesses its length is 16 bytes — and if she is wrong she simply tries other lengths, since each guess costs one request.

1. She sets her hash state to $t$, which is the state after absorbing $k \Vert m$.
2. She computes SHA-256's padding for a message of length $16 + 22 = 38$ bytes: the byte `0x80`, then zeros, then the 8-byte big-endian bit length. Call it $P$.
3. She absorbs her own suffix $m' = \texttt{\&role=admin}$ into the resumed state and reads out $t'$.
4. She sends the message $m \Vert P \Vert m'$ with tag $t'$.

The server computes $\mathrm{SHA256}(k \Vert m \Vert P \Vert m')$ and gets exactly $t'$, because that is the same chain. **The tag verifies.** The transmitted message contains some binary padding bytes in the middle, which most parsers skip over or which the attacker hides in a tolerant field — and the trailing `role=admin` wins in any parser that takes the last occurrence of a repeated key.

The correct construction is $t = \mathrm{HMAC}_k(m)$, whose outer hash re-hashes the inner digest under a second derived key, so what the attacker sees is not a resumable state ([2.3](02-03-message-authentication-codes.md)).

## Watch out

- You might think the birthday bound needs a large $q$ relative to $N$. It needs $q \approx \sqrt{N}$, which feels absurdly small — 23 out of 365 is 6 percent of the space. The instinct that "6 percent coverage cannot give even odds" is exactly the instinct the bound corrects.
- You might think length extension means SHA-256 is broken. It does not. SHA-256 is collision-resistant and preimage-resistant as advertised; length extension is a property of Merkle–Damgård that violates none of the three definitions in [2.1](02-01-cryptographic-hash-functions.md). It breaks a *use* that silently assumed a fourth property nobody stated.
- You might think MD strengthening's length block is a formality. It is load-bearing: without it, $H(m)$ and $H(m \Vert \text{extra zero blocks})$ can coincide, and the theorem's proof uses the length encoding in its first case. Do not omit it when designing.

## One-liner

> Collisions cost the square root of the output space because attackers exploit pairs, and Merkle–Damgård publishes its own internal state, which is a gift to anyone who wants to continue the message.

## Problems

**P1 (🟢)** A system issues random 48-bit identifiers. (a) Using $q \approx 1.177\sqrt{N}$, find how many identifiers can be issued before a collision is more likely than not. (b) Using $\Pr \approx q^2/(2N)$, find the largest $q$ keeping the collision probability below $10^{-6}$. (c) State in one sentence why (b) is so much smaller than (a).

**P2 (🟡)** A hash $H$ has a 160-bit output. (a) Give the work for a preimage attack and for a collision attack, in powers of two. (b) An attacker demonstrates a collision at $2^{63}$ work. State what this proves about $H$, what it does *not* prove, and which deployed uses must be retired immediately versus which may continue.

**P3 (🔴, optional)** A service authenticates messages as $t = H(m \Vert k)$ — the key **appended** rather than prepended, on a Merkle–Damgård hash with $n$-bit output. (a) Show that the length-extension attack of this lesson does not apply. (b) Show that the scheme is nonetheless broken if an attacker can find collisions in $H$, by giving the forgery explicitly. (c) State the work for that attack when $n = 128$, and compare it to the $2^{128}$ an attacker would need to recover $k$.

<details>
<summary>Solutions</summary>

**P1** (a) $N = 2^{48}$, so

$$q \approx 1.177 \cdot 2^{24} \approx 1.98 \times 10^{7},$$

about **20 million** identifiers for even odds.

(b) Solve $q^2/(2 \cdot 2^{48}) \le 10^{-6}$:

$$q^2 \le 2^{49} \times 10^{-6} = 5.63 \times 10^{8}, \qquad q \le 2.37 \times 10^{4},$$

about **24,000** identifiers.

(c) Because the probability grows as $q^2$, demanding a probability $10^{6}$ times smaller only permits $q$ to shrink by $\sqrt{10^{6}} = 10^{3}$ — but that thousand-fold shrink is applied to a threshold that was already only a square root of the space, so the usable range collapses from twenty million to twenty-four thousand. **Safe operating capacity is far below the even-odds point**, which is why identifier sizes are chosen against a target probability rather than against the birthday point.

**P2** (a) Preimage: about $2^{160}$ work. Collision: about $2^{80}$ work, by the birthday bound.

(b) A collision at $2^{63}$ proves that $H$'s **collision resistance is broken**, since $2^{63}$ is roughly $2^{17}$ times cheaper than the $2^{80}$ generic bound, which means the attacker found exploitable structure rather than getting lucky. (This is the real history of SHA-1, broken at about $2^{63}$ in 2017.)

It does **not** prove anything about preimage or second-preimage resistance. Those remain at their generic $2^{160}$ unless a separate attack is found, and for SHA-1 they have not been.

Must retire immediately: **anything where the attacker chooses both inputs** — digital signatures, certificates, code signing, commitment schemes. The attack in [2.1](02-01-cryptographic-hash-functions.md)'s Example 1 applies directly, and certificate authorities were forced off SHA-1 for exactly this.

May continue, with care: **HMAC-SHA1**, because HMAC's security proof rests on the compression function behaving as a PRF rather than on collision resistance, and no attack on HMAC-SHA1 follows from the collision result. Likewise second-preimage uses such as verifying a fixed published file remain sound. The distinction is not a technicality — it is the reason HMAC-SHA1 stayed in TLS for years after SHA-1 certificates were banned.

**P3** (a) Length extension requires the digest to be the state *after absorbing everything the attacker wants to extend*. Here the chain is $H(m \Vert k)$, so the published tag is the state after absorbing the **key**, which comes last. To extend, the attacker would have to insert her suffix before $k$, and the chaining value at that point is not something the tag reveals. So the attack does not apply.

(b) Suppose the attacker finds a collision $H(m_1) = H(m_2)$ with $m_1 \ne m_2$, where $m_1$ and $m_2$ are each a whole number of blocks long (so no padding intervenes between the message and the key). Merkle–Damgård is **iterative**: the chaining value after absorbing $m_1$ equals the chaining value after absorbing $m_2$, and everything appended afterwards is processed identically. Therefore

$$H(m_1 \Vert k) = H(m_2 \Vert k)$$

for **every** key $k$, without knowing $k$ at all. The forgery: get the victim to authenticate $m_1$, obtaining tag $t$, then submit $m_2$ with the same $t$. It verifies.

(c) With $n = 128$ the collision costs about $2^{64}$ hash evaluations — feasible for a well-resourced attacker and far below the $2^{128}$ needed to recover $k$ by search. So the append construction turns the scheme's security level from the key size down to **half the hash output**, and it does so via an attack that never touches the key.

The general lesson is the one HMAC's design encodes: **a MAC built from a hash must rest on the hash's keyed pseudorandomness, not on the accident of where the key is concatenated.** Prepending is broken by length extension, appending is broken by collisions, and nesting under two derived keys is broken by neither.

</details>

## Flashback

**From Lesson 1.6 (modes of operation):** A protocol encrypts with AES-CTR using a 96-bit nonce chosen uniformly at random for each message, under one key. (a) Give the number of messages after which a nonce repeat has probability $10^{-9}$. (b) The team proposes switching to a 48-bit nonce to save header space, keeping random selection. Compute the same figure and state whether the change is acceptable for a service sending a billion messages a day.

<details>
<summary>Solution</summary>

(a) With $N = 2^{96}$ and $\Pr \approx q^2/(2N)$, set the probability to $10^{-9}$:

$$q^2 \le 2 \cdot 2^{96} \cdot 10^{-9} = 2^{97} \times 10^{-9} \approx 1.58 \times 10^{20}, \qquad q \le 1.26 \times 10^{10}.$$

About **12.6 billion messages** before the repeat probability reaches one in a billion. For most services that is years of traffic under one key, which is why 96 bits is the standard nonce size.

(b) With $N = 2^{48}$:

$$q^2 \le 2^{49} \times 10^{-9} \approx 5.63 \times 10^{5}, \qquad q \le 750.$$

**Seven hundred and fifty messages.** The proposal is not acceptable by a factor of more than $10^{7}$. A service sending $10^{9}$ messages a day reaches even odds of a repeat at $q \approx 1.177 \cdot 2^{24} \approx 2 \times 10^{7}$, which is **under two seconds of traffic** — and by [1.6](01-06-modes-of-operation.md) a repeated CTR nonce leaks the XOR of the two plaintexts outright.

If the header space genuinely matters, the fix is a **counter** rather than a shorter random value: a 48-bit counter guarantees uniqueness for $2^{48}$ messages, about eight hundred years at a billion a day, provided the counter survives restarts and is never duplicated across senders. Randomness costs half the exponent; a counter costs none of it and buys state-management discipline instead.

</details>

## Connections

- **Backward:** [2.1](02-01-cryptographic-hash-functions.md) asserted the $2^{n/2}$ collision cost and this lesson proves it; the same bound already appeared in [1.5](01-05-pseudorandom-functions-and-block-ciphers.md) as the PRF/PRP switching lemma and in [1.6](01-06-modes-of-operation.md) as the nonce budget, and it is one calculation wearing three hats.
- **Forward:** length extension is the specific attack HMAC is designed to defeat ([2.3](02-03-message-authentication-codes.md)), and the birthday bound sets tag lengths there and GCM's data limits in [2.4](02-04-authenticated-encryption.md).
- **Sideways:** the derivation is the classic occupancy calculation of [`prob-stat-refresher` 1.1](../../prob-stat-refresher/lessons/01-01-sample-spaces-events-axioms.md), and the same $\sqrt{N}$ appears in Pollard's rho factoring method and in the meet-in-the-middle attacks of [`algorithms` 1.5](../../algorithms/lessons/01-05-divide-and-conquer-beyond-sorting.md) — whenever an attacker can trade memory for pairwise comparisons, the exponent halves.

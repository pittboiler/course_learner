# Cryptography · Lesson 1.5: Pseudorandom functions and block ciphers

> ⏱ ~15 min · Module 1: Perfect secrecy and symmetric encryption · Builds on: [1.4 (computational security and pseudorandomness)](01-04-computational-security-and-pseudorandomness.md) · Unlocks: [1.6 (modes of operation)](01-06-modes-of-operation.md)

## Why this matters

A PRG gives you one long pad from one short seed. Useful, but rigid: you must generate the stream from the beginning, in order, and you get exactly one of them per key.

Real systems want something more flexible — a keyed function you can evaluate at any input, in any order, as many times as you like, whose outputs look independent and random. That object is a **pseudorandom function**, and its invertible cousin the **pseudorandom permutation** is what a block cipher such as AES is trying to be.

Nearly everything symmetric in the rest of the course is built from one PRF: the encryption modes of [1.6](01-06-modes-of-operation.md), the message authentication of [2.3](02-03-message-authentication-codes.md), and the key derivation of [3.6](03-06-hybrid-encryption-kem-dem.md). It is the single most reused primitive in the subject.

## The idea

Imagine a book containing, for every one of the $2^{128}$ possible 128-bit inputs, a uniformly random 128-bit output. That book *is* a random function. It is also absurd — writing it down takes $2^{128} \times 128$ bits, more than there is matter to write on.

A **pseudorandom function** is a keyed function $F_k$ that behaves like a randomly chosen book, while being described by 128 bits of key and computed in microseconds. The test is the same distinguishing game as [1.4](01-04-computational-security-and-pseudorandomness.md), with one change that matters: the distinguisher gets **oracle access**. She may query the function at inputs of her choosing, adaptively, choosing each next query after seeing the previous answer. She must still be unable to tell whether she is talking to $F_k$ for a random key or to a genuinely random book.

A **pseudorandom permutation** is the same thing with the extra requirement that $F_k$ is a bijection for every key — so it can be inverted, which is what makes decryption possible. That is a block cipher.

Now, how do you build one? Two families, and both answer the same question: *how do you get a permutation out of components that need not be permutations?*

**Feistel networks** answer it with a trick. Split the block in half. Send one half through an arbitrary function, XOR the result into the other half, and swap. Because the arbitrary function's output is only ever XOR-ed — never inverted — **the round function can be anything at all** and the round remains invertible. DES is sixteen such rounds.

**Substitution-permutation networks** answer it by building only from invertible pieces: small invertible lookup tables (**S-boxes**) that provide *confusion*, then a mixing layer that spreads each S-box's output across many positions, providing *diffusion*. AES is ten such rounds.

Both aim at the same target, which Shannon named in the same 1949 paper as perfect secrecy. **Confusion** makes the relationship between key and ciphertext complicated; **diffusion** spreads the influence of every input bit over the whole output. A cipher achieving both shows the **avalanche effect**: flip one input bit and about half the output bits change.

## The formal version

> **Definition (pseudorandom function).** Let $F : \{0,1\}^n \times \{0,1\}^{m} \to \{0,1\}^{m}$ be efficiently computable, writing $F_k(x)$ for $F(k,x)$. $F$ is a **PRF** if for every PPT distinguisher $D$ with oracle access,
> $$\Big|\,\Pr_{k}\big[D^{F_k(\cdot)} = 1\big] \;-\; \Pr_{f}\big[D^{f(\cdot)} = 1\big]\,\Big| \le \mathrm{negl}(n),$$
> where $f$ is drawn uniformly from **all** functions $\{0,1\}^{m} \to \{0,1\}^{m}$.

In words: querying the keyed function is indistinguishable from querying a random book. The superscript notation $D^{F_k(\cdot)}$ means $D$ may call the function but not see the key.

> **Definition (pseudorandom permutation).** Same, except each $F_k$ is a bijection and $f$ is drawn uniformly from all *permutations* of $\{0,1\}^m$. $F$ is a **strong PRP** if the distinguisher additionally gets an oracle for $F_k^{-1}$.

In words: a PRP is a block cipher that looks like a random shuffle of the block space; a strong PRP still looks random to someone who can also decrypt. Real modes need the strong version, because a chosen-ciphertext adversary effectively has the inverse oracle ([2.4](02-04-authenticated-encryption.md)).

> **PRF/PRP switching lemma.** A distinguisher making $q$ queries to a random permutation on $m$-bit blocks, rather than a random function, gains advantage at most
> $$\frac{q(q-1)}{2^{m+1}} \approx \frac{q^2}{2^{m+1}}.$$

In words: permutations and functions are the same thing until you make enough queries to see a repeat — a random function returns collisions and a permutation never does. The two become distinguishable at $q \approx 2^{m/2}$, which for a 128-bit block is $2^{64}$ blocks. **This is the birthday bound arriving early** ([2.2](02-02-the-birthday-bound-and-merkle-damgard.md)), and it is the reason protocols rekey after a few hundred million gigabytes rather than running forever.

> **Feistel round.** With the block split as $(L_i, R_i)$,
> $$L_{i+1} = R_i, \qquad R_{i+1} = L_i \oplus F(k_i, R_i).$$

Inversion, and note it never calls $F^{-1}$: from $(L_{i+1}, R_{i+1})$, recover $R_i = L_{i+1}$, then $L_i = R_{i+1} \oplus F(k_i, L_{i+1})$. **Luby and Rackoff proved that three Feistel rounds with independent PRF round functions give a PRP, and four give a strong PRP** — a construction of an invertible pseudorandom object out of a non-invertible one.

The two ciphers worth knowing by their parameters:

| | DES | AES |
|---|---|---|
| Structure | Feistel, 16 rounds | SPN, 10 / 12 / 14 rounds |
| Block size | 64 bits | 128 bits |
| Key size | 56 bits | 128 / 192 / 256 bits |
| Status | broken by exhaustive search, 1998 | no practical attack |

DES fell to brute force, not cryptanalysis: $2^{56} \approx 7.2 \times 10^{16}$ keys were searched in 56 hours by purpose-built hardware in 1998, about $3.6 \times 10^{11}$ keys per second. Its design was never broken — its **key was too short**, which is a parameter choice, and the distinction matters because parameter choices are the part of a design that ages.

AES operates on bytes as elements of the finite field $\mathrm{GF}(2^8)$, and its S-box is essentially inversion in that field ([`abstract-algebra` 4.3](../../abstract-algebra/lessons/04-03-finite-fields.md)) — chosen because field inversion is maximally non-linear, which is what resists differential and linear cryptanalysis.

## Picture

![A diagram of one Feistel round. The block is split into a left half and a right half at the top. The right half feeds into a box labelled with the round function F applied to the round key, whose output is XOR-ed into the left half. The two halves then cross, so the old right half becomes the new left half and the XOR result becomes the new right half. Text below gives the round equations and their inverses.](assets/01-05-fig1.svg)

Trace the inverse with a finger and the trick becomes obvious. Going backwards you need $F$ evaluated at $L_{i+1}$, which you *have*, so you never need to undo $F$. **Invertibility of the round comes from the XOR and the swap, not from the round function** — which frees the designer to make $F$ as ugly and non-linear as they like.

## Worked examples

**Example 1 — why double encryption buys one bit, not $k$ bits.**

Faced with DES's 56-bit key, an obvious repair is to encrypt twice with independent keys: $c = E_{k_2}(E_{k_1}(m))$. The key space is now $2^{112}$, so surely the work is $2^{112}$?

No. The attacker holds one known pair $(m, c)$ and mounts a **meet-in-the-middle** attack. Observe that $E_{k_1}(m) = E^{-1}_{k_2}(c)$: both equal the intermediate value. So

1. For all $2^{56}$ values of $k_1$, compute $E_{k_1}(m)$ and store $(\text{value}, k_1)$ in a hash table. Cost: $2^{56}$ encryptions, $2^{56}$ table entries.
2. For all $2^{56}$ values of $k_2$, compute $E^{-1}_{k_2}(c)$ and look it up. Cost: $2^{56}$ decryptions, $2^{56}$ lookups.
3. Each hit gives a candidate $(k_1, k_2)$; confirm against a second known pair.

Total time about $2^{57}$ operations and memory about $2^{56}$ entries, against the naive $2^{112}$. **The effective key length of double encryption is 57 bits, one more than single.**

This is a time-memory trade-off of exactly the kind [`algorithms` 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) trades in: buy a factor of $2^{56}$ in time with $2^{56}$ in space. The fix is triple encryption — $3$DES computes $E_{k_3}(D_{k_2}(E_{k_1}(m)))$, whose meet-in-the-middle attack costs about $2^{112}$, giving the "112-bit" figure usually quoted. Note it is not 168, again because of meeting in the middle.

**Example 2 — how many blocks before a block cipher stops looking random?**

A protocol encrypts with a 128-bit block cipher in a mode that exposes $q$ independent block-cipher outputs to the adversary. By the switching lemma, the advantage from the permutation-versus-function gap is about $q^2 / 2^{129}$.

Set a tolerance of $2^{-32}$ for that advantage and solve:

$$\frac{q^2}{2^{129}} \le 2^{-32} \iff q^2 \le 2^{97} \iff q \le 2^{48.5}.$$

At 16 bytes per block that is about $2^{52.5}$ bytes, roughly 6 petabytes, after which a conservative protocol rekeys.

Run the same calculation for a **64-bit** block cipher such as 3DES, at the same tolerance: $q^2 \le 2^{65-32} = 2^{33}$, so $q \le 2^{16.5}$, under a megabyte. That gap is not academic — it is the Sweet32 attack, which recovered secrets from long-lived TLS connections using 64-bit block ciphers. **Block size is a security parameter in its own right, independent of key size**, and this is the calculation that shows it.

## Watch out

- You might think a PRF must be hard to invert. It need not be, and the definition says nothing about inversion — it is about *unpredictability of outputs at unqueried points*. A PRP is trivially invertible given the key and is still a fine PRF.
- You might think a bigger key always means a stronger cipher. Example 1 is the counterexample: 2DES has twice the key bits and one extra bit of security. The quantity that matters is the best known attack, never the key-space size — the same lesson [1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md) taught with the substitution cipher.
- You might think a block cipher is an encryption scheme. It is not. It encrypts exactly one block, deterministically, and using it directly on longer messages is ECB mode, which is broken ([1.6](01-06-modes-of-operation.md)). A block cipher is a *component*; the scheme is the cipher plus a mode.

## One-liner

> A block cipher is a keyed shuffle of the block space that no efficient adversary can tell from a random one, and its two design traditions — Feistel and SPN — are two ways to build a permutation out of parts that need not be permutations.

## Problems

**P1 (🟢)** A Feistel round uses the round function $F(k, x) = k \wedge x$, the bitwise AND, which is emphatically not invertible. With 4-bit halves, round key $k_0 = 1100$, and input $(L_0, R_0) = (1011, 0110)$: (a) compute $(L_1, R_1)$; (b) recover $(L_0, R_0)$ from $(L_1, R_1)$ using the inverse relations, and confirm you get the input back.

**P2 (🟡)** A vendor offers a cipher with a 256-bit key and a 32-bit block, arguing that the huge key makes it stronger than AES-128. Using the PRF/PRP switching lemma, compute the number of blocks after which an adversary gains advantage $1/2$, convert it to bytes, and state in one sentence what the vendor has misunderstood.

**P3 (🔴, optional)** Consider "double encryption" with the *same* key applied twice: $c = E_k(E_k(m))$. (a) Explain why the meet-in-the-middle attack of Example 1 does not apply, and give the cost of exhaustive search against this scheme. (b) Despite (a), this construction is a bad idea. Give a reason that has nothing to do with key search, using the fact that $E_k$ is a permutation of the block space, and say what property of the permutation would make the scheme collapse entirely.

<details>
<summary>Solutions</summary>

**P1** (a) $F(k_0, R_0) = 1100 \wedge 0110 = 0100$. Then

$$L_1 = R_0 = 0110, \qquad R_1 = L_0 \oplus F(k_0, R_0) = 1011 \oplus 0100 = 1111.$$

So $(L_1, R_1) = (0110, 1111)$.

(b) Inverting: $R_0 = L_1 = 0110$. Then $L_0 = R_1 \oplus F(k_0, L_1) = 1111 \oplus (1100 \wedge 0110) = 1111 \oplus 0100 = 1011$. Recovered $(L_0, R_0) = (1011, 0110)$, which is the input.

Note that AND destroys information — $1100 \wedge 0110$ and $1100 \wedge 0100$ are both $0100$ — and the round is still perfectly invertible, because inversion re-evaluates $F$ at a value it already knows rather than undoing it. (A cipher built from AND rounds would be weak for other reasons; invertibility is not the issue.)

**P2** With $m = 32$, the switching-lemma advantage is about $q^2 / 2^{33}$. Setting it to $1/2$:

$$\frac{q^2}{2^{33}} = \frac12 \iff q^2 = 2^{32} \iff q = 2^{16} = 65{,}536 \text{ blocks}.$$

At 4 bytes per block that is $2^{18}$ bytes, **262 kilobytes**. After a quarter of a megabyte under one key, the cipher's outputs are visibly a permutation rather than a random function — block collisions that a random function would produce simply never appear — and in a real mode this leaks plaintext relations directly.

What the vendor has misunderstood: **key size bounds the cost of finding the key, while block size bounds how much data may safely be processed under one key, and the two are independent.** A 256-bit key on a 32-bit block is a vault door on a cardboard wall.

**P3** (a) The meet-in-the-middle attack needs to guess the two halves **independently**, so that a table built over $k_1$ can be matched against a search over $k_2$. With a single key there is only one unknown, so there is nothing to split, no table to build, and no trade-off to exploit. Exhaustive search costs $2^{|k|}$ — exactly the same as single encryption, which is the point: the construction buys nothing.

(b) $E_k$ is a permutation of the $2^m$-element block space, so applying it twice is the permutation $E_k^2 = E_k \circ E_k$, which is another permutation drawn from the same group. This is [1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md)'s composition problem again: squaring inside a group gives you an element of the group, not a stronger object, and the "iterate to strengthen" intuition is simply wrong here.

The collapse case is concrete. Every permutation has an **order** $r$, the least $r > 0$ with $E_k^r = \mathrm{id}$ ([`abstract-algebra` 1.2](../../abstract-algebra/lessons/01-02-cyclic-groups-order.md)). If $E_k$ had order 2 — that is, if it were an involution, $E_k(E_k(m)) = m$ — the scheme would be the identity map and the ciphertext would equal the plaintext. Even short of that, small or structured order makes $E_k^2$ behave unlike a random permutation, and iterating a cipher under one key drifts the composite away from the uniform permutation it is supposed to imitate rather than toward it. **This is precisely why it mattered that DES was proved not to be a group**: had the DES permutations been closed under composition, triple-DES would have been a single DES with some other key, and the standard repair would have been worthless.

</details>

## Flashback

**From Lesson 1.3 (Shannon's theorem and the price of perfect secrecy):** AES-256 encrypts 128-bit blocks under a 256-bit key. A colleague argues that since the key is twice the block length, AES-256 achieves perfect secrecy for single-block messages. (a) Check the counting condition of Shannon's theorem for this case — does it pass? (b) State why the scheme is nonetheless not perfectly secret, and identify which hypothesis of the characterisation theorem fails.

<details>
<summary>Solution</summary>

(a) The counting condition **passes**. Here $|\mathcal M| = 2^{128}$ and $|\mathcal K| = 2^{256}$, so $|\mathcal K| \ge |\mathcal M|$ comfortably, with room to spare. Shannon's theorem gives a *necessary* condition, and nothing about this instance violates it.

(b) Necessary is not sufficient, and the colleague has confused the two. Perfect secrecy demands that for every message $m$ and ciphertext $c$, the number of keys mapping $m$ to $c$ be the same across all $m$ — so that $\Pr[\mathrm{Enc}_K(m) = c]$ is independent of $m$. With $2^{256}$ keys and $2^{128}$ ciphertexts, that would require every $(m,c)$ pair to be joined by exactly $2^{256}/2^{128} = 2^{128}$ keys, **on the nose, for all $2^{256}$ pairs**. AES was designed to be a pseudorandom permutation, not to satisfy this exact combinatorial balance, and it does not: the counts vary, so the distributions $\mathrm{Enc}_K(m)$ and $\mathrm{Enc}_K(m')$ differ slightly and the equivalent-form lemma of [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md) fails.

The hypothesis that fails in the characterisation theorem is the **exactly-one-key condition** (in its balanced form for $|\mathcal K| > |\mathcal M|$), not the key-size bound. And the practical reading is that AES does not need perfect secrecy: it aims at computational indistinguishability ([1.4](01-04-computational-security-and-pseudorandomness.md)), where the tiny imbalance is beneath any efficient adversary's notice, and 256 bits of key buy resistance to exhaustive search rather than an information-theoretic guarantee.

</details>

## Connections

- **Backward:** the PRF definition is [1.4](01-04-computational-security-and-pseudorandomness.md)'s distinguishing game with the single sample replaced by an adaptive oracle, and the same reduction template proves everything built on it.
- **Forward:** [1.6](01-06-modes-of-operation.md) turns this one-block permutation into a scheme for messages of any length and proves IND-CPA from the PRF assumption; [2.3](02-03-message-authentication-codes.md) reuses the same PRF for authentication rather than secrecy.
- **Sideways:** AES's S-box is inversion in $\mathrm{GF}(2^8)$, the finite field constructed in [`abstract-algebra` 4.3](../../abstract-algebra/lessons/04-03-finite-fields.md); the meet-in-the-middle attack is the time-memory trade-off that also powers the subset-sum and $k$-sum algorithms of [`algorithms` 1.5](../../algorithms/lessons/01-05-divide-and-conquer-beyond-sorting.md).

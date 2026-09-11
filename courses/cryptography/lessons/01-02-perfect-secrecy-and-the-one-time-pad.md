# Cryptography · Lesson 1.2: Perfect secrecy and the one-time pad

> ⏱ ~15 min · Module 1: Perfect secrecy and symmetric encryption · Builds on: [1.1 (classical ciphers)](01-01-classical-ciphers-and-the-cryptographers-mindset.md) · Unlocks: [1.3 (Shannon's theorem)](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md)

## Why this matters

[1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md) broke three ciphers by finding structure the designer left behind. The natural next question is whether *any* scheme can leave no structure at all — not "none that I can find", but provably none, against an adversary with unlimited time and unlimited computers.

The answer is yes, and it was settled by Shannon in 1949. A scheme exists whose ciphertexts are mathematically incapable of favouring one plaintext over another. This lesson defines that property and proves one scheme has it.

It matters for two opposite reasons. It is the only unconditional security guarantee in the entire course — everything from [1.4](01-04-computational-security-and-pseudorandomness.md) onward rests on an unproven hardness assumption instead. And it is almost unusable in practice, for a reason [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md) proves is unavoidable.

## The idea

Forget attacks for a moment and think about **belief**.

Before Eve sees anything, she has some prior opinion about the message. Maybe she knows Alice is a general, so ATTACK has probability 0.9 and RETREAT has probability 0.1. That prior is hers; the cipher does not get to choose it.

Then she sees the ciphertext. **Secrecy means her opinion is exactly unchanged.** Still 0.9 and 0.1. Not "harder to update", not "updated by a negligible amount" — identical, to the last digit.

That is a strong demand, and it has a clean mechanical characterisation. Eve's opinion can only move if the ciphertext she saw is *more likely* under one message than another. So perfect secrecy is precisely the statement that **every ciphertext is exactly as likely to arise from every message.**

Now the construction. Take a message of $n$ bits and a key of $n$ bits chosen uniformly at random. XOR them position by position. XOR is its own inverse, so Bob XORs the key back and recovers the message.

Why does this hide everything? Fix any message $m$ and any ciphertext $c$. There is exactly one key that carries $m$ to $c$, namely $k = m \oplus c$ — no more, no fewer. That is true for *every* message. So each message reaches each ciphertext through exactly one of the $2^n$ equally likely keys, giving every message the same probability $2^{-n}$ of producing that $c$. The ciphertext cannot favour anything because it is equally explained by everything.

Here is the sentence to carry away: **the ciphertext is consistent with every plaintext of the right length, and equally so.** A ciphertext of `1101` decrypts to `ATTACK` under one key and `RETREAT` under another, and nothing in the ciphertext prefers either.

## The formal version

> **Definition (perfect secrecy).** An encryption scheme over message space $\mathcal M$ is **perfectly secret** if for every probability distribution on $\mathcal M$, every $m \in \mathcal M$, and every $c \in \mathcal C$ with $\Pr[C = c] > 0$,
> $$\Pr[M = m \mid C = c] = \Pr[M = m].$$

In words: the posterior equals the prior. The ciphertext is statistically independent of the message. Note $M$ and $C$ are random variables — $M$ over the message distribution, $C$ over both that and the key — while $m$ and $c$ are fixed values.

That definition mentions the message distribution, which is inconvenient because the scheme's designer does not know it. This equivalent form removes it:

> **Lemma (equivalent form).** A scheme is perfectly secret if and only if for all $m, m' \in \mathcal M$ and all $c \in \mathcal C$,
> $$\Pr[\mathrm{Enc}_K(m) = c] = \Pr[\mathrm{Enc}_K(m') = c],$$
> where the probability is over the key $K$ alone.

In words: the ciphertext distribution is the same no matter which message you encrypt. This is a property of the scheme only, checkable without knowing anything about Eve's beliefs, and it is the form used in every proof below.

> **The one-time pad.** $\mathcal M = \mathcal K = \mathcal C = \{0,1\}^n$. $\mathrm{Gen}$ outputs $k$ uniformly from $\{0,1\}^n$. $\mathrm{Enc}_k(m) = m \oplus k$ and $\mathrm{Dec}_k(c) = c \oplus k$, where $\oplus$ is bitwise XOR.

**Correctness.** $\mathrm{Dec}_k(\mathrm{Enc}_k(m)) = (m \oplus k) \oplus k = m \oplus (k \oplus k) = m \oplus 0 = m$, using associativity and $k \oplus k = 0$.

**Theorem.** The one-time pad is perfectly secret.

*Proof.* Fix any $m \in \{0,1\}^n$ and any $c \in \{0,1\}^n$. Then

$$\Pr_K[\mathrm{Enc}_K(m) = c] = \Pr_K[m \oplus K = c] = \Pr_K[K = m \oplus c] = 2^{-n},$$

where the middle step XORs $m$ onto both sides (legal because XOR by $m$ is a bijection) and the last uses that $K$ is uniform on a set of size $2^n$. The value $2^{-n}$ does not depend on $m$, so $\Pr[\mathrm{Enc}_K(m) = c] = \Pr[\mathrm{Enc}_K(m') = c]$ for every pair $m, m'$, and the lemma's condition holds. $\blacksquare$

The proof is four lines and the whole content sits in "XOR by $m$ is a bijection." **Every perfectly secret scheme works this way: the key acts on the message space by a bijection chosen uniformly at random**, so the ciphertext's distribution is uniform regardless of the input.

## Picture

![A four-by-four table. Rows are labelled with the four two-bit messages and columns with the four two-bit keys; each cell holds the XOR of its row and column labels. Every row contains each of the four possible ciphertexts exactly once, forming a Latin square. The cells holding the ciphertext 01 are outlined and appear once in every row.](assets/01-02-fig1.svg)

Read the table by rows. **Each row is a permutation of all four ciphertexts**, because XOR-ing a fixed message with the four distinct keys gives four distinct results. So every row assigns probability $1/4$ to every ciphertext, and the rows are identical as distributions. The highlighted cells make the punchline visible: the ciphertext `01` occurs exactly once per row, so seeing it is equally likely under all four messages.

Read the table by columns and you get the attacker's view: the column for a fixed ciphertext contains every message, so every message remains live.

## Worked examples

**Example 1 — encrypt, decrypt, and count the keys.**

Message $m = 1011$, key $k = 0110$.

$$c = m \oplus k = 1011 \oplus 0110 = 1101.$$

Decryption: $c \oplus k = 1101 \oplus 0110 = 1011 = m$.

Now the attacker's position. She has $c = 1101$ and knows the scheme. Ask: which messages are consistent with it? For the candidate $m' = 0000$, the required key is $k' = m' \oplus c = 1101$, a perfectly legitimate key. For $m' = 1111$, the required key is $0010$, also legitimate. **All 16 four-bit messages are consistent, each via exactly one key**, and since the keys are equiprobable so are the messages. She has learned the *length*, and nothing else.

**Example 2 — the posterior really does not move, even when the prior is lopsided.**

Alice sends one bit: $m = 0$ means ATTACK, $m = 1$ means RETREAT. Eve's prior is $\Pr[M = 0] = 0.9$, $\Pr[M = 1] = 0.1$. The key is one uniform bit.

First the ciphertext's marginal probability:

$$\Pr[C = 0] = \Pr[M=0]\Pr[K=0] + \Pr[M=1]\Pr[K=1] = 0.9(0.5) + 0.1(0.5) = 0.5.$$

Now Bayes:

$$\Pr[M = 0 \mid C = 0] = \frac{\Pr[C = 0 \mid M = 0]\,\Pr[M=0]}{\Pr[C=0]} = \frac{(0.5)(0.9)}{0.5} = 0.9.$$

Unchanged. And that is the correct reading of perfect secrecy: **Eve still believes ATTACK with probability 0.9, and she is still right to.** Perfect secrecy does not make her ignorant; it guarantees the *ciphertext* contributed nothing to what she knows. If she can guess your message without the ciphertext, encryption was never the tool for that problem.

Contrast a scheme that fails. Keep everything but make the key biased: $\Pr[K=0] = 3/4$. Then $\Pr[C = 0 \mid M = 0] = 3/4$ while $\Pr[C = 0 \mid M = 1] = 1/4$, so the two differ and the lemma's condition breaks. Seeing $C = 0$ now triples the odds ratio in favour of ATTACK. **A non-uniform key destroys perfect secrecy even with the same algorithm**, which is why key generation is part of the scheme and not an implementation detail.

## Watch out

- You might think perfect secrecy means Eve cannot guess the message. It means only that the *ciphertext* does not help her. A scheme can be perfectly secret while Eve guesses correctly with probability 0.9, as Example 2 shows.
- You might think the XOR is what makes the pad secure. It is the **uniform, independent, message-length key** that does the work; XOR is merely a convenient group operation on bit strings. Addition mod 26 on letters, or mod $n$ on integers, gives an equally perfect pad — and a biased key ruins all of them.
- You might think perfect secrecy hides everything. It does not hide the **length**: $\mathcal C = \{0,1\}^n$ is length-preserving, so $|c| = |m|$ is public. Length leakage is real and exploitable, and it survives all the way into TLS ([4.2](04-02-public-key-infrastructure-and-certificates.md)) where message sizes alone have identified which page of a site a user loaded.

## One-liner

> Perfect secrecy means the posterior equals the prior, and the one-time pad achieves it because every message reaches every ciphertext through exactly one equally likely key.

## Problems

**P1 (🟢)** A one-time pad encrypts a 5-bit message to $c = 10110$. (a) Which key would make the plaintext $11001$? (b) Which key would make it $00000$? (c) How many of the 32 possible plaintexts are consistent with this ciphertext, and what does that say about what the ciphertext reveals?

**P2 (🟡)** Define a "shift pad" on single letters: $\mathcal M = \mathcal K = \mathcal C = \mathbb{Z}_{26}$, key uniform, $\mathrm{Enc}_k(m) = (m + k) \bmod 26$. Prove it is perfectly secret using the equivalent-form lemma. Then explain in one sentence why this does *not* contradict the frequency-analysis break of the shift cipher in [1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md).

**P3 (🔴, optional)** A designer builds a pad whose key space is only the 16 strings of length 5 with **even parity** (an even number of 1s), chosen uniformly. Messages are all 32 strings of length 5. Show the scheme is not perfectly secret by exhibiting a ciphertext and two messages whose conditional probabilities differ, and state exactly what an attacker learns from any ciphertext.

<details>
<summary>Solutions</summary>

**P1** (a) $k = m \oplus c = 11001 \oplus 10110 = 01111$. Check: $11001 \oplus 01111 = 10110$ ✓. (b) $k = 00000 \oplus 10110 = 10110$; XOR-ing with the all-zero message returns the key itself. (c) **All 32.** For each candidate $m'$ the key $k' = m' \oplus c$ exists, is unique, and is as likely as any other, so all 32 plaintexts are consistent and equally probable a posteriori. The ciphertext reveals only that the message had length 5.

**P2** Fix any $m \in \mathbb{Z}_{26}$ and any $c \in \mathbb{Z}_{26}$. Then

$$\Pr_K[(m + K) \bmod 26 = c] = \Pr_K[K = (c - m) \bmod 26] = \tfrac{1}{26},$$

because subtraction mod 26 is a bijection on $\mathbb{Z}_{26}$ (add $m$ back to invert it), so exactly one key value satisfies the equation, and $K$ is uniform over 26 values. The result $1/26$ is independent of $m$, so $\Pr[\mathrm{Enc}_K(m) = c] = \Pr[\mathrm{Enc}_K(m') = c]$ for all $m, m'$, and the lemma gives perfect secrecy. $\blacksquare$

Why no contradiction: **the scheme is perfectly secret for a message of exactly one letter, and [1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md) broke a shift cipher that reused one key across many letters** — which is a different scheme, with $\mathcal M = \mathbb{Z}_{26}^n$ and $|\mathcal K| = 26$, and frequency analysis is precisely an attack on the reuse.

**P3** The key set is $\mathcal K = \{k \in \{0,1\}^5 : \mathrm{parity}(k) = 0\}$, which has 16 elements, and parity is additive under XOR: $\mathrm{parity}(m \oplus k) = \mathrm{parity}(m) \oplus \mathrm{parity}(k) = \mathrm{parity}(m)$ since $\mathrm{parity}(k) = 0$. So **the ciphertext has the same parity as the message, always.**

Concretely take $c = 00001$, which has odd parity. For $m = 00000$ (even parity) the required key is $k = 00001$, which has odd parity and is not in $\mathcal K$, so

$$\Pr[\mathrm{Enc}_K(00000) = 00001] = 0.$$

For $m' = 10000$ (odd parity) the required key is $10001$, which has even parity and so *is* in $\mathcal K$, giving

$$\Pr[\mathrm{Enc}_K(10000) = 00001] = \tfrac{1}{16}.$$

The two conditional probabilities are $0$ and $1/16$, which differ, so the lemma's condition fails and the scheme is not perfectly secret.

What the attacker learns: **exactly one bit — the parity of the plaintext.** She can rule out half of all messages on sight. Her posterior over the surviving 16 messages is uniform, so the scheme is "perfectly secret conditioned on parity", which is a fair description of every partially-broken cipher: it leaks a function of the plaintext and hides the rest. The general lesson is that shrinking the key space below $|\mathcal M|$ forces exactly this kind of leak, and [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md) turns that observation into a theorem.

</details>

## Flashback

**From Lesson 1.1 (classical ciphers and the cryptographer's mindset):** A 300-letter ciphertext has index of coincidence 0.0389. Its author insists the cipher is a plain substitution cipher with a randomly chosen alphabet. Is that consistent with the measurement? State your reasoning and name the more likely scheme.

<details>
<summary>Solution</summary>

**No, it is not consistent.** A substitution cipher permutes letter labels, and the index of coincidence counts how often two randomly drawn positions carry the *same* letter — a quantity that relabelling cannot change. So a substitution cipher applied to English must show $\mathrm{IC} \approx 0.066$, regardless of which permutation was used or how random it was.

The measured 0.0389 is essentially the uniform-text value $1/26 \approx 0.0385$. A flat coincidence rate means many different alphabets were in play, so a given letter's image varies with position. The likely scheme is **polyalphabetic** — Vigenère with a reasonably long key, or a one-time pad. To tell those apart, slice at trial periods $t = 2, 3, 4, \dots$ and look for a $t$ where the slices jump back to 0.066; if no $t$ up to a few dozen works, the key is not repeating and you are looking at a pad.

</details>

## Connections

- **Backward:** [1.1](01-01-classical-ciphers-and-the-cryptographers-mindset.md)'s closing observation — that a key as long as the message starves frequency analysis — is now a theorem rather than a hunch, and the index of coincidence being a collision probability is the same counting move used in the proof here.
- **Forward:** [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md) proves that $|\mathcal K| \ge |\mathcal M|$ is *forced*, so the pad's inconvenient key length is not a design flaw to be engineered away. [1.4](01-04-computational-security-and-pseudorandomness.md) then relaxes "identical distributions" to "computationally indistinguishable" and buys short keys back.
- **Sideways:** the proof is a counting argument over a group action — the keys act on $\{0,1\}^n$ by XOR, which is the elementary abelian group of [`abstract-algebra` 1.1](../../abstract-algebra/lessons/01-01-group-axioms-first-examples.md) — and the statement "the ciphertext is independent of the message" is zero mutual information, $I(M;C) = 0$, in the sense of [`information-theory` 1.3](../../information-theory/lessons/01-03-mutual-information.md).

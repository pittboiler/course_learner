# Cryptography · Lesson 1.3: Shannon's theorem and the price of perfect secrecy

> ⏱ ~15 min · Module 1: Perfect secrecy and symmetric encryption · Builds on: [1.2 (perfect secrecy and the one-time pad)](01-02-perfect-secrecy-and-the-one-time-pad.md) · Unlocks: [1.4 (computational security and pseudorandomness)](01-04-computational-security-and-pseudorandomness.md)

## Why this matters

The one-time pad has an obvious practical problem: to send a gigabyte you must already share a gigabyte of secret key, which you had to deliver somehow — and if you had a secure channel for that, you could have sent the message.

The tempting response is to look for a cleverer perfectly secret scheme with a short key. **This lesson proves no such scheme exists.** The key must be at least as large as the message space, always, for every construction anyone will ever invent.

That is the hinge of the whole course. A theorem, not an engineering difficulty, is what forces the move to computational security in [1.4](01-04-computational-security-and-pseudorandomness.md), and everything after that lesson is conditional on unproven assumptions *because of what is proved here*.

## The idea

The proof is a pigeonhole argument, and it is short enough to hold in your head.

Suppose Eve has intercepted a ciphertext $c$. She asks a simple question: **which plaintexts could this be?** She runs decryption with every key she can imagine and collects the answers. That gives her at most $|\mathcal K|$ candidate plaintexts — one per key, possibly fewer if two keys agree.

Now suppose the key space is smaller than the message space. Then her candidate list is shorter than the list of possible messages, so **some message is on no key's list**. That message is now impossible. Eve's probability for it has dropped from whatever it was to exactly zero.

A probability that moved is a prior that changed, and a prior that changed is a violation of perfect secrecy. Done.

Notice what makes this airtight. It says nothing about the scheme's internals — not XOR, not permutations, not any structure. It only counts. **Perfect secrecy requires that every message stay alive, staying alive requires a key that maps it to the observed ciphertext, and there are only $|\mathcal K|$ keys to go around.**

The cost of reuse follows from the same accounting. A pad used twice is a key stretched across twice the message space, and the bound says that cannot work. It fails in a very specific, very exploitable way.

## The formal version

> **Shannon's theorem (key-length bound).** If an encryption scheme $(\mathrm{Gen}, \mathrm{Enc}, \mathrm{Dec})$ over message space $\mathcal M$ and key space $\mathcal K$ is perfectly secret, then $|\mathcal K| \ge |\mathcal M|$.

In words: you cannot have more possible messages than possible keys.

*Proof.* Suppose toward a contradiction that $|\mathcal K| < |\mathcal M|$. Take the uniform distribution on $\mathcal M$, so $\Pr[M = m] = 1/|\mathcal M| > 0$ for every $m$. Pick any ciphertext $c$ with $\Pr[C = c] > 0$; at least one exists. Define the set of plaintexts consistent with $c$:

$$\mathcal M(c) = \{\, \mathrm{Dec}_k(c) \;:\; k \in \mathcal K \,\}.$$

Since $\mathcal M(c)$ has one element per key at most, $|\mathcal M(c)| \le |\mathcal K| < |\mathcal M|$. So there is some $m^{*} \in \mathcal M$ with $m^{*} \notin \mathcal M(c)$. No key decrypts $c$ to $m^{*}$, and by correctness no key encrypts $m^{*}$ to $c$ either, so

$$\Pr[M = m^{*} \mid C = c] = 0 \neq \frac{1}{|\mathcal M|} = \Pr[M = m^{*}].$$

The posterior differs from the prior, contradicting perfect secrecy. $\blacksquare$

The entropy form of the same statement is worth knowing, because it is how the result is usually quoted:

> **Entropy form.** Perfect secrecy implies $H(K) \ge H(M)$, where $H$ is Shannon entropy ([`information-theory` 1.1](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md)).

In words: the key must carry at least as much uncertainty as the message. This is slightly stronger than the counting version in practice, because it says a large-but-predictable key space does not help — **what must be big is the entropy, not the cardinality.** A 256-bit key drawn from a list of a thousand passphrases has $|\mathcal K| = 2^{256}$ on paper and $H(K) \approx 10$ bits in reality.

> **Shannon's characterisation.** When $|\mathcal M| = |\mathcal K| = |\mathcal C|$, a scheme is perfectly secret **if and only if** the key is uniform and, for every $m$ and $c$, exactly one key $k$ satisfies $\mathrm{Enc}_k(m) = c$.

In words: at the minimum allowed key size, the one-time pad's structure is not one option — it is the *only* option up to relabelling. The pad is not a clever construction; it is the shape of the problem.

**The price, stated plainly.** Two parties running a perfectly secret channel at 1 Gb/s must pre-share $8.64 \times 10^{13}$ bits per day of traffic — about 10.8 terabytes of key, per day, delivered by some means other than the channel, used once, and destroyed. This is done, for a handful of links where it is worth it. It is not how the internet works.

**Key reuse, concretely.** Encrypt $m_1$ and $m_2$ under the same pad key $k$:

$$c_1 \oplus c_2 = (m_1 \oplus k) \oplus (m_2 \oplus k) = m_1 \oplus m_2 \oplus (k \oplus k) = m_1 \oplus m_2.$$

The key cancels. Eve, who knows neither message, now holds their XOR exactly — and if she ever learns or guesses one message she gets the other for free, since $m_2 = (m_1 \oplus m_2) \oplus m_1$. Even without a guess, $m_1 \oplus m_2$ has a 0 at every position where the two plaintexts agree, which for two English sentences is most positions. This is **crib dragging**, and it is why the scheme is called a *one-time* pad.

## Picture

![A diagram with a single circled ciphertext c on the left and four boxed candidate messages on the right. Three arrows leave the ciphertext, each labelled with decryption under a different key, and land on the first three messages. The fourth message has no incoming arrow and is highlighted, annotated with the statement that its conditional probability given c is zero.](assets/01-03-fig1.svg)

The picture is the proof. Three keys can explain the observed ciphertext in at most three ways; the fourth message is explained by none, so seeing $c$ rules it out. **Being ruled out is information**, and perfect secrecy forbids the ciphertext from carrying any. The only escape is to have at least as many arrows as targets.

## Worked examples

**Example 1 — a scheme that cannot be fixed.**

A team wants perfect secrecy for 128-bit messages but can only pre-share a 64-bit key. They propose to hash, stretch, chain, and permute the key in some elaborate way. Should they keep designing?

No. $|\mathcal M| = 2^{128}$ and $|\mathcal K| = 2^{64}$, so $|\mathcal K| < |\mathcal M|$ and Shannon's theorem applies regardless of the internals. For any ciphertext, at most $2^{64}$ of the $2^{128}$ messages are reachable, so **at least $2^{128} - 2^{64}$ messages are eliminated by observing the ciphertext** — that is over 99.99999999 percent of the message space ruled out. No amount of design changes this, because the argument never looked at the design.

The correct move is to abandon perfect secrecy and ask for something weaker: that the surviving $2^{64}$ candidates be *computationally* indistinguishable from the whole space. That is exactly [1.4](01-04-computational-security-and-pseudorandomness.md).

**Example 2 — two-time pad, worked end to end.**

Alice encrypts $m_1 = 10110$ and $m_2 = 11010$ under the same 5-bit key $k = 01101$:

$$c_1 = 10110 \oplus 01101 = 11011, \qquad c_2 = 11010 \oplus 01101 = 10111.$$

Eve intercepts both and computes

$$c_1 \oplus c_2 = 11011 \oplus 10111 = 01100.$$

Check that this is $m_1 \oplus m_2$: $10110 \oplus 11010 = 01100$. It matches, and Eve got it without touching $k$.

What has she learned? Positions 1, 4 and 5 are 0, so $m_1$ and $m_2$ **agree** in those three positions; positions 2 and 3 are 1, so they differ there. If she now guesses — from context, protocol boilerplate, or a known header — that $m_1 = 10110$, she recovers

$$m_2 = (m_1 \oplus m_2) \oplus m_1 = 01100 \oplus 10110 = 11010,$$

which is correct. **One guessed plaintext unmasks every other message sent under that key**, which is why real stream ciphers derive a fresh pad per message from a nonce ([1.6](01-06-modes-of-operation.md)).

## Watch out

- You might think Shannon's theorem rules out short keys in general. It rules out short keys *for perfect secrecy*. Every scheme from [1.4](01-04-computational-security-and-pseudorandomness.md) on has a 128- or 256-bit key and messages of unbounded length, and they are secure under a weaker, computational definition — which is not a loophole in the theorem but a change of goal.
- You might think $|\mathcal K| \ge |\mathcal M|$ is also sufficient. It is not. A scheme with a huge key that ignores half of it, or uses it non-uniformly, fails; the characterisation theorem shows sufficiency needs the uniform-key, unique-key conditions too.
- You might think "reused the pad twice" leaks only a little. It leaks $m_1 \oplus m_2$ **exactly and completely**, and for natural-language plaintexts that is usually enough to recover both by hand. The failure is not graceful degradation; it is total.

## One-liner

> Perfect secrecy costs a key at least as large as the message space, because every message must stay reachable from every ciphertext, and there are only as many routes as there are keys.

## Problems

**P1 (🟢)** A scheme encrypts messages from $\mathcal M = \{a, b, c, d, e\}$ using a key space of size 4. Without knowing anything else about the scheme, state whether it can be perfectly secret and give the argument in two sentences. Then say the smallest key space that leaves perfect secrecy possible, and whether that size *guarantees* it.

**P2 (🟡)** Two ciphertexts, produced under the same one-time-pad key, are $c_1 = 110100$ and $c_2 = 101110$. (a) Compute $m_1 \oplus m_2$ and state which positions the two plaintexts agree in. (b) A crib says $m_1 = 011001$. Recover $m_2$ and the key $k$, and verify both ciphertexts from them.

**P3 (🔴, optional)** A vendor sells a perfectly secret system with a 256-bit key for messages of any length, and explains that the key seeds a "cryptographically strong expander" that produces a pad as long as needed. (a) Name the theorem this violates and give the one-line contradiction. (b) The vendor then claims the entropy form is satisfied because $H(K) = 256$ bits and their messages "have only about 100 bits of real entropy after compression". Evaluate that defence: under what precise condition would it be correct, and why does it fail for a system that accepts arbitrary messages?

<details>
<summary>Solutions</summary>

**P1** **It cannot be perfectly secret.** With $|\mathcal K| = 4 < 5 = |\mathcal M|$, any fixed ciphertext $c$ is reachable by decryption under at most 4 keys, so at least one of the five messages is not among the candidates and gets posterior probability 0 while its prior was positive — Shannon's theorem, exactly.

The smallest permissible key space is $|\mathcal K| = 5$. That size does **not** guarantee perfect secrecy: it is necessary, not sufficient. A 5-key scheme in which two keys happen to encrypt $a$ to the same ciphertext still leaves some message unreachable from that ciphertext. By the characterisation theorem, sufficiency at $|\mathcal K| = |\mathcal M| = |\mathcal C|$ additionally requires the key to be uniform and each $(m, c)$ pair to be joined by exactly one key.

**P2** (a)

$$m_1 \oplus m_2 = c_1 \oplus c_2 = 110100 \oplus 101110 = 011010.$$

Zeros mark agreement, so the plaintexts **agree in positions 1, 4 and 6** (reading left to right) and differ in positions 2, 3 and 5.

(b) From the crib $m_1 = 011001$:

$$m_2 = (m_1 \oplus m_2) \oplus m_1 = 011010 \oplus 011001 = 000011.$$

$$k = m_1 \oplus c_1 = 011001 \oplus 110100 = 101101.$$

Verify: $m_1 \oplus k = 011001 \oplus 101101 = 110100 = c_1$, and $m_2 \oplus k = 000011 \oplus 101101 = 101110 = c_2$. Both check out. One crib, and the key plus every message under it are gone.

**P3** (a) **Shannon's theorem.** If the system accepts messages of any length then $|\mathcal M|$ is unbounded while $|\mathcal K| = 2^{256}$, so as soon as messages exceed 256 bits we have $|\mathcal K| < |\mathcal M|$ and perfect secrecy is impossible. Concretely, for a 1000-bit message at most $2^{256}$ of the $2^{1000}$ plaintexts are reachable from a given ciphertext, so observing the ciphertext eliminates almost all of them. The "expander" is irrelevant — it is a deterministic function of the key, so it cannot produce more than $2^{256}$ distinct pads no matter how strong it is.

(b) The defence would be correct **only if the message distribution were fixed, known, and of entropy at most 256 bits** — in which case the pigeonhole argument runs over the support of that distribution rather than over all strings, and $H(K) \ge H(M)$ can genuinely hold.

It fails here for two reasons. First, a system that **accepts arbitrary messages** has no such fixed distribution; the adversary in the definition of perfect secrecy gets to quantify over *every* distribution on $\mathcal M$, including uniform on all 1000-bit strings, and the vendor must beat all of them. Second, "about 100 bits after compression" is an average, and entropy bounds of this kind are not a promise about any particular message — a single high-entropy message, such as a photograph or another system's key, blows the budget immediately.

The honest version of what the vendor built is a **stream cipher**: a short key expanded pseudorandomly into a long pad. That is a genuinely useful and genuinely secure object — under a computational assumption, which is a different and weaker claim than perfect secrecy. Building it properly is [1.4](01-04-computational-security-and-pseudorandomness.md) and [1.6](01-06-modes-of-operation.md).

</details>

## Flashback

**From Lesson 1.1 (classical ciphers and the cryptographer's mindset):** A Vigenère cipher uses a key of length $t$ on a message of $n$ letters, with the key repeated as often as needed. (a) Give the size of the key space. (b) For what value of $t$, in terms of $n$, does the scheme stop being breakable by slicing-plus-frequency-analysis, and what is it then? (c) State the key-space size at that value and compare it to $|\mathcal M|$.

<details>
<summary>Solution</summary>

(a) Each of the $t$ key letters is free over the 26-letter alphabet, so $|\mathcal K| = 26^t$.

(b) The slicing attack works by cutting the ciphertext into $t$ subsequences, each encrypted under a single shift, and reading each one's letter histogram. It needs each slice to hold enough letters for the histogram to be meaningful. When $t = n$ every slice has exactly **one** letter, there is no histogram to read, and the attack has nothing to work with. At $t = n$ the key is a fresh uniform letter per position and never repeats, so the scheme **is the one-time pad** over $\mathbb{Z}_{26}$ — and by [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md) it is perfectly secret.

(c) At $t = n$ the key space is $26^n$, and the message space is also $26^n$. So $|\mathcal K| = |\mathcal M|$ exactly — the scheme sits precisely on the boundary Shannon's theorem sets, which is the only place a perfectly secret scheme can live without waste. Any shorter key, $t < n$, gives $|\mathcal K| = 26^t < 26^n = |\mathcal M|$ and perfect secrecy becomes impossible by the theorem, which is a far stronger statement than "frequency analysis eventually succeeds."

</details>

## Connections

- **Backward:** [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md) showed the pad achieves perfect secrecy; this lesson shows it is essentially the *only* way to, and that the awkward key length is mandatory rather than incidental.
- **Forward:** the impossibility proved here is precisely what [1.4](01-04-computational-security-and-pseudorandomness.md) sidesteps by weakening the definition from "identical distributions" to "indistinguishable by any efficient algorithm", which lets a 256-bit key protect unbounded traffic. The two-time-pad failure reappears as the nonce discipline of [1.6](01-06-modes-of-operation.md).
- **Sideways:** the entropy form $H(K) \ge H(M)$ is a direct application of [`information-theory` 1.2](../../information-theory/lessons/01-02-joint-conditional-entropy-chain-rule.md); and the counting argument is the same pigeonhole move that gives the compression lower bound there and the comparison-sort lower bound in [`algorithms` 1.4](../../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md) — a finite resource cannot cover a larger space.

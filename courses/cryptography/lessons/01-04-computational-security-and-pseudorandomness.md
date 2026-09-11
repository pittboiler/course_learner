# Cryptography · Lesson 1.4: Computational security and pseudorandomness

> ⏱ ~15 min · Module 1: Perfect secrecy and symmetric encryption · Builds on: [1.3 (Shannon's theorem)](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md) · Unlocks: [1.5 (pseudorandom functions and block ciphers)](01-05-pseudorandom-functions-and-block-ciphers.md)

## Why this matters

[1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md) closed a door: no perfectly secret scheme has a short key. Rather than accept terabytes of pre-shared pad, modern cryptography changes the question.

It makes two concessions, both deliberate and both quantified. The adversary is no longer allowed unlimited time — only *efficient* computation. And the ciphertext distributions no longer have to be identical — only indistinguishable *to such an adversary*, by a margin so small it may as well be zero.

This is where cryptography becomes a subject with proofs rather than a sequence of broken ciphers. Every theorem from here to the end of the course has the same shape: **if this problem is hard, then this scheme is secure.** Learning to read that shape is the point of this lesson.

## The idea

Two changes, made carefully.

**Concession one: efficient adversaries.** Eve runs in time polynomial in a **security parameter** $n$, which you should read as "the key length." A scheme is not asked to resist an attacker with $2^{256}$ steps, because nobody has $2^{256}$ steps. This is a real weakening — perfect secrecy resisted infinite computation — and it is what buys short keys.

**Concession two: small advantage.** Eve may succeed, but only with probability negligibly better than guessing. "Negligible" gets a precise meaning below, and the intuition is: shrinks faster than any polynomial, so doubling the key length crushes it.

Now the central object. A **pseudorandom generator** takes a short random seed and stretches it into a long string that *looks* random to anyone efficient. Not random — it cannot be, since $2^{n}$ seeds cannot cover $2^{\ell}$ outputs for $\ell > n$, so the vast majority of long strings are never produced. The output is thoroughly non-random as a set. **It is random as an experience.**

That distinction is the whole idea. Give an efficient algorithm a string and ask it which world it came from: the pseudorandom world, where a short seed was expanded, or the truly random world, where the string was drawn uniformly. If no efficient algorithm can answer better than a coin flip, the generator is a PRG — *even though a computationally unbounded algorithm could answer perfectly by simply trying all $2^n$ seeds.*

With a PRG in hand the one-time pad's problem evaporates. Share a 256-bit key, expand it to as many bits as you need, and XOR. That is a **stream cipher**, and it is the pad with the key cost removed and the unconditional guarantee traded away.

## The formal version

> **Definition (negligible).** A function $\mathrm{negl} : \mathbb{N} \to \mathbb{R}^{\ge 0}$ is **negligible** if for every positive integer $c$ there is an $N$ such that $\mathrm{negl}(n) < n^{-c}$ for all $n > N$.

In words: it eventually drops below every inverse polynomial. $2^{-n}$ and $n^{-\log n}$ are negligible; $n^{-100}$ is not, however small it looks at $n = 10$. The reason for this exact cutoff is closure: a polynomial number of negligible events still has negligible total probability, so a proof may take a union bound over all of an adversary's queries without losing anything.

> **Definition (PPT).** An adversary is **probabilistic polynomial-time** (PPT) if it is randomised and runs in time polynomial in $n$.

> **Definition (pseudorandom generator).** Let $G$ be a deterministic polynomial-time function with expansion $\ell(n) > n$, so $G$ maps $\{0,1\}^n$ to $\{0,1\}^{\ell(n)}$. $G$ is a **PRG** if for every PPT distinguisher $D$,
> $$\Big|\; \Pr_{s \leftarrow \{0,1\}^n}\!\big[D(G(s)) = 1\big] \;-\; \Pr_{r \leftarrow \{0,1\}^{\ell(n)}}\!\big[D(r) = 1\big] \;\Big| \le \mathrm{negl}(n).$$

In words: $D$ says 1 about as often on real outputs as on random strings. The quantity inside the bars is $D$'s **advantage**, and the definition quantifies over *all* PPT $D$ — you do not get to choose which tests it must pass.

Note what the definition does **not** say. It does not say outputs "look random" by any particular statistic. It says no efficient test of any kind, including ones nobody has invented, separates the two worlds.

> **Definition (indistinguishable encryption in the presence of an eavesdropper).** In experiment $\mathrm{PrivK}^{\mathrm{eav}}_{A,\Pi}(n)$: the adversary $A$ outputs two equal-length messages $m_0, m_1$; the challenger picks $k \leftarrow \mathrm{Gen}(1^n)$ and a uniform bit $b$, and returns $c \leftarrow \mathrm{Enc}_k(m_b)$; $A$ outputs a guess $b'$ and wins if $b' = b$. The scheme $\Pi$ is **EAV-secure** if for every PPT $A$,
> $$\Pr[\mathrm{PrivK}^{\mathrm{eav}}_{A,\Pi}(n) = 1] \le \tfrac12 + \mathrm{negl}(n).$$

In words: even when Eve names both candidate plaintexts herself, the ciphertext does not tell her which one was sent. This is the computational analogue of [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)'s definition — perfect secrecy is the same experiment with $\mathrm{negl}$ replaced by 0 and PPT dropped.

> **Theorem.** If $G$ is a PRG with expansion $\ell$, then the stream cipher $\mathrm{Enc}_k(m) = m \oplus G(k)$ on messages of length $\ell(n)$ is EAV-secure.

*Proof idea (a reduction).* Suppose some PPT $A$ wins the encryption experiment with probability $\tfrac12 + \varepsilon$ for non-negligible $\varepsilon$. Build a distinguisher $D$ for $G$: on input a string $y$ of length $\ell(n)$, run $A$ to get $m_0, m_1$, flip $b$, hand $A$ the ciphertext $m_b \oplus y$, and output 1 exactly when $A$ guesses $b$ correctly.

If $y = G(s)$, then $A$ sees a genuine ciphertext of the scheme, so $D$ outputs 1 with probability $\tfrac12 + \varepsilon$. If $y$ is uniform, then $m_b \oplus y$ is a one-time pad encryption, which by [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md) is perfectly secret, so $A$ cannot do better than chance and $D$ outputs 1 with probability exactly $\tfrac12$. So $D$'s advantage is $\varepsilon$, non-negligible, contradicting that $G$ is a PRG. $\blacksquare$

**Read the shape of that argument**, because every security proof in this course repeats it: *assume an attack on the scheme, and turn the attacker into an algorithm that solves the underlying hard problem.* The scheme's security is never established directly. It is transferred from an assumption.

## Picture

![A diagram of the distinguishing experiment. On the left are two boxes, one labelled world zero in which a uniform seed is expanded by G to produce the output, and one labelled world one in which the output is drawn uniformly at random. Arrows from both boxes feed a single string into a box labelled distinguisher D, which emits a one-bit guess. A caption defines the advantage as the difference between the probability D says one in each world.](assets/01-04-fig1.svg)

The figure is the definition drawn. **One string reaches $D$; two stories could explain it.** The advantage measures how much $D$'s behaviour changes between the stories, and the PRG requirement is that no efficient $D$ changes its behaviour appreciably. Notice the asymmetry hiding in plain sight: world 0 has only $2^n$ possible outputs and world 1 has $2^{\ell}$, so the worlds are wildly different as distributions — yet $D$ is too slow to notice.

## Worked examples

**Example 1 — a generator that fails, and its exact advantage.**

Define $G(s) = s \,\Vert\, s$ for $s \in \{0,1\}^n$, where $\Vert$ is concatenation. It expands $n$ bits to $2n$, so it is a candidate.

Distinguisher $D$: on input $y$ of length $2n$, output 1 if the first half equals the second half, else 0.

- World 0: $y = s \Vert s$ always has matching halves, so $\Pr[D = 1] = 1$.
- World 1: $y$ is uniform, and the two halves match with probability $2^{-n}$.

$$\text{advantage} = \left| 1 - 2^{-n} \right| = 1 - 2^{-n}.$$

At $n = 8$ that is 0.996, and it climbs toward 1. This is about as far from negligible as a number can be, so $G$ is not a PRG. $D$ runs in linear time — **the break is cheap, which is the normal case: real failures are found by one obvious test, not by a heroic one.**

**Example 2 — reading the numbers a security claim actually makes.**

A scheme is proved EAV-secure with advantage at most $2^{-128}$ against adversaries running $2^{80}$ steps. What has been promised?

$2^{-128} \approx 2.9 \times 10^{-39}$. For scale, the odds of guessing a specific atom out of the Earth are around $10^{-50}$; the odds of winning a national lottery twice in a row are around $10^{-15}$. An advantage of $10^{-39}$ is not "very unlikely"; it is outside the range where the word applies.

$2^{80}$ steps at a trillion operations per second is about $3.8 \times 10^{4}$ years. So the claim reads: **an attacker with a machine running for tens of thousands of years gains an edge of one part in $10^{39}$.**

And note what the claim does *not* say. It is conditional on the PRG assumption. If someone finds an efficient distinguisher for the underlying generator tomorrow, the theorem stays true and the scheme stops being secure, because the theorem was always an implication. **This is the honest state of the field: the only unconditional guarantee is the one Shannon gave us, and we cannot afford it.**

## Watch out

- You might think pseudorandom means "passes statistical tests." It means "passes *every* efficient test," which is enormously stronger. A generator can pass every test in a standard battery and still be a trivially breakable PRG, because the battery is a finite list and the definition quantifies over all algorithms.
- You might think a negligible advantage means the attacker learns a negligible amount. It means the attacker *distinguishes* negligibly. She may already know almost everything about the plaintext from context — as in [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)'s lopsided prior — and the guarantee is unchanged and still worth exactly what it says.
- You might think a scheme with advantage $n^{-100}$ is fine because that number is tiny. It is not negligible, and the distinction is not pedantry: non-negligible advantages **amplify**. Run the attack polynomially many times and the success probability approaches 1, which is why the definition is drawn at the polynomial boundary rather than at some threshold like $10^{-30}$.

## One-liner

> Give up on hiding everything from everyone, and instead hide enough from anyone efficient: security becomes a reduction, where breaking the scheme would mean solving a problem we believe is hard.

## Problems

**P1 (🟢)** Decide whether each function is negligible in $n$, with one line of justification each: (a) $2^{-n/2}$; (b) $1/n^{50}$; (c) $n^{-\log n}$; (d) $2^{-\log^2 n}$. For any that are not negligible, name the polynomial they fail to beat.

**P2 (🟡)** Let $G'$ be a PRG mapping $n$ bits to $2n$ bits. Define $G(s) = G'(s) \,\Vert\, \mathrm{parity}(G'(s))$, where the appended bit is the XOR of all $2n$ output bits, so $G$ maps $n$ bits to $2n+1$ bits. Give an efficient distinguisher for $G$, compute its exact advantage, and state the general principle about adding derived bits to a generator's output.

**P3 (🔴, optional)** A stream cipher is built from a PRG as $\mathrm{Enc}_k(m) = m \oplus G(k)$, with no nonce. (a) Show that this scheme is EAV-secure but fails badly once the adversary sees *two* ciphertexts under the same key, by giving an explicit attack and computing its success probability. (b) Explain precisely which clause of the EAV experiment lets the scheme pass despite that attack, and name the fix real stream ciphers use.

<details>
<summary>Solutions</summary>

**P1** (a) **Negligible.** $2^{-n/2}$ is exponentially decaying, and for any $c$ we have $2^{-n/2} < n^{-c}$ once $n/2 > c \log_2 n$, which holds for all large $n$.

(b) **Not negligible.** Take $c = 51$: we need $n^{-50} < n^{-51}$, which is false for every $n > 1$. It fails to beat the polynomial $n^{-51}$ (indeed any $n^{-c}$ with $c > 50$). Its decay is polynomial, and the definition demands super-polynomial decay.

(c) **Negligible.** $n^{-\log n} = n^{-c}$ exactly when $c = \log n$, and $\log n$ exceeds any fixed $c$ for large $n$. So for each fixed $c$, $n^{-\log n} < n^{-c}$ eventually. This is the standard example of a negligible function that is not exponentially small.

(d) **Negligible.** Write $2^{-\log^2 n} = n^{-\log n}$ when logs are base 2, since $n^{-\log n} = 2^{-\log n \cdot \log n}$. Same function as (c), so same conclusion.

**P2** Distinguisher $D$: on input $y$ of length $2n + 1$, output 1 if the last bit equals the XOR of the first $2n$ bits, else 0.

- World 0: the output is $G'(s) \Vert \mathrm{parity}(G'(s))$ by construction, so the check always passes and $\Pr[D=1] = 1$.
- World 1: $y$ is uniform on $2n+1$ bits, so its last bit is uniform and independent of the first $2n$, matching their parity with probability exactly $1/2$.

$$\text{advantage} = \left|1 - \tfrac12\right| = \tfrac12,$$

which is constant and therefore not negligible, so $G$ is not a PRG — **even though $G'$ is**, and even though the extra bit reveals nothing about the seed.

The principle: **a PRG's output must be unpredictable from itself, not merely from the seed.** Any function of the output appended to the output is instantly detectable, because a random string satisfies no such relation. More generally, pseudorandomness is destroyed by any efficiently checkable constraint among output bits, which is exactly why PRG constructions are judged by whether their outputs satisfy *no* relation an efficient test can find, rather than by whether the seed is recoverable.

**P3** (a) *EAV-security* follows from the theorem in this lesson: $G$ is a PRG, so the stream cipher is EAV-secure.

*The two-ciphertext attack.* Suppose the adversary sees $c_1 = m_1 \oplus G(k)$ and $c_2 = m_2 \oplus G(k)$. Then

$$c_1 \oplus c_2 = m_1 \oplus m_2,$$

exactly as in [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md)'s two-time pad, because $G(k)$ is the same pad both times. Concretely, an adversary who may choose $m_1 = 0^\ell$ (all zeros) recovers $G(k)$ itself from $c_1$, and then decrypts $c_2$ and every future ciphertext under that key. **Success probability 1**, in linear time.

(b) The EAV experiment gives the adversary **exactly one** ciphertext: she submits one pair $(m_0, m_1)$, receives one challenge $c$, and stops. She never obtains a second encryption under the same key, so the attack in (a) is outside the experiment's rules and does not contradict EAV-security. This is the definition being honest about its scope, not a bug — EAV models a one-shot eavesdropper and nothing more.

The fix is twofold. Strengthen the definition to **IND-CPA**, where the adversary gets an encryption oracle and may obtain many ciphertexts under the key ([1.6](01-06-modes-of-operation.md)); and strengthen the scheme to be **randomised or nonce-based**, deriving a fresh pad $G(k, \mathrm{IV})$ per message from a value that never repeats. Under CPA security the deterministic scheme above is immediately broken, which is the right outcome, since it is broken in reality.

</details>

## Flashback

**From Lesson 1.2 (perfect secrecy and the one-time pad):** A scheme has $\mathcal M = \mathcal K = \mathcal C = \{0,1\}^3$, the key is uniform, and $\mathrm{Enc}_k(m) = m \oplus k$ except that the key $000$ is replaced by $111$ before use (so the key $111$ occurs with probability $2/8$ and $000$ never does). Is the scheme perfectly secret? Give a ciphertext and two messages whose conditional probabilities differ, or prove that none exist.

<details>
<summary>Solution</summary>

**It is not perfectly secret.** The effective key distribution is no longer uniform: $\Pr[K = 111] = 2/8 = 1/4$, $\Pr[K = 000] = 0$, and each of the other six keys has probability $1/8$. By [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md), perfect secrecy at this size requires a uniform key, so the scheme must fail; here is the witness.

Take $c = 111$. For $m = 000$ the required key is $k = m \oplus c = 111$, which occurs with probability $1/4$:

$$\Pr[\mathrm{Enc}_K(000) = 111] = \tfrac14.$$

For $m' = 111$ the required key is $k = 111 \oplus 111 = 000$, which never occurs:

$$\Pr[\mathrm{Enc}_K(111) = 111] = 0.$$

Since $1/4 \ne 0$, the equivalent-form lemma fails and the scheme is not perfectly secret. Operationally, an adversary seeing $c = 111$ can rule out the plaintext $111$ outright, and should raise her estimate for $000$ by a factor of two relative to the other six messages.

The moral carries directly into this lesson: **the algorithm was untouched and only the key distribution changed**, and that alone was enough. Computational security inherits the sensitivity — a PRG seeded from a biased source is no better off than this pad.

</details>

## Connections

- **Backward:** the theorem's proof leans on [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)'s perfect secrecy for the random-world case, and exists at all because [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md) proved the short-key version of that guarantee impossible.
- **Forward:** [1.5](01-05-pseudorandom-functions-and-block-ciphers.md) upgrades a PRG to a pseudorandom *function*, which is what real block ciphers model, and [1.6](01-06-modes-of-operation.md) upgrades EAV to IND-CPA and builds schemes that meet it.
- **Sideways:** "polynomial time is the boundary of feasible" is the convention of [`algorithms` 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md), and the reduction technique here is the same object as an NP-hardness reduction with the direction reversed — there you reduce a hard problem *to* yours to prove hardness, and here you reduce a break *to* the assumption to prove security.

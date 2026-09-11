# Cryptography · Lesson 1.1: Classical ciphers and the cryptographer's mindset

> ⏱ ~15 min · Module 1: Perfect secrecy and symmetric encryption · Builds on: [`number-theory` 2.1 (arithmetic mod n)](../../number-theory/lessons/02-01-congruences-arithmetic-mod-n.md) · Unlocks: [1.2 (perfect secrecy and the one-time pad)](01-02-perfect-secrecy-and-the-one-time-pad.md)

## Why this matters

Every other lesson in this course is about *proving* a scheme secure. You cannot do that until you can say what "secure" means, and you cannot say that until you have watched a plausible-looking scheme die.

This lesson kills three of them with pen and paper. The point is not the ciphers — nobody uses them — but the two habits their deaths install. First: **security is a property of the key alone, never of the design's obscurity.** Second: **a big key space is not security**, because the attacker is not obliged to try the keys one at a time.

Get those two wrong and no amount of mathematics later will save you.

## The idea

A cipher is a pair of procedures that undo each other under a shared secret. Alice wants to send Bob a message while Eve watches the wire. They agreed on a key beforehand; Eve did not get it.

**Shift cipher (Caesar).** The key is a number $k$ from 0 to 25. Advance every letter $k$ places through the alphabet, wrapping around. THE with $k=7$ becomes AOL.

**Substitution cipher.** The key is an arbitrary permutation of the alphabet — A might go to Q, B to F, and so on, in any of the $26!$ ways. This is the shift cipher's big brother, and it *looks* vastly stronger: $26! \approx 4.03\times 10^{26}$, about $2^{88}$ keys. A machine testing a billion keys per second needs roughly ten billion years.

And you can break it over lunch.

The reason is that a substitution cipher **relabels letters but does not disturb their statistics.** E is the most common letter in English, at about 12.7 percent; whatever E maps to is the most common letter in the ciphertext, at about 12.7 percent. The key space was never the obstacle, because frequency analysis never enumerates keys — it reads the answer off a histogram.

**Vigenère** patches this by using a *word* as the key: letter $i$ of the message is shifted by letter $i \bmod t$ of a length-$t$ key. Now E does not always map to the same letter, and the single histogram flattens. It survived three centuries on that basis. It still falls, because once you guess the key length $t$ you have $t$ independent shift ciphers interleaved, and each of those is breakable by the histogram you already know how to read.

The pattern is worth naming. **Each cipher fails not to brute force but to structure the designer forgot was there.**

## The formal version

> **Definition (symmetric encryption scheme).** A triple of algorithms $(\mathrm{Gen}, \mathrm{Enc}, \mathrm{Dec})$: $\mathrm{Gen}$ outputs a key $k$ from the key space $\mathcal K$; $\mathrm{Enc}_k$ maps a message $m \in \mathcal M$ to a ciphertext $c \in \mathcal C$; $\mathrm{Dec}_k$ maps back. **Correctness** requires $\mathrm{Dec}_k(\mathrm{Enc}_k(m)) = m$ for every $k$ and every $m$.

In words: three procedures — make a key, lock, unlock — and unlocking a locked message must always return exactly what went in. Correctness is separate from security and is the easy half.

> **Kerckhoffs's principle.** The scheme $(\mathrm{Gen}, \mathrm{Enc}, \mathrm{Dec})$ is public. Only the key is secret.

In words: assume the adversary has read your source code, bought your hardware, and knows your algorithm exactly. The only thing they lack is $k$. This is not pessimism — it is the only assumption that is *checkable*, since you can rotate a leaked key but not a leaked design, and a design stays leaked forever.

The adversary's power is fixed by the **attack model**, and every security claim in this course is relative to one of these four:

| Model | Eve gets | Realistic when |
|---|---|---|
| Ciphertext-only | ciphertexts | passive wiretap |
| Known-plaintext (KPA) | some $(m, c)$ pairs | headers, greetings, boilerplate |
| Chosen-plaintext (CPA) | $\mathrm{Enc}_k(\cdot)$ on demand | she can cause you to encrypt |
| Chosen-ciphertext (CCA) | $\mathrm{Enc}_k(\cdot)$ and $\mathrm{Dec}_k(\cdot)$ | a server decrypts and reacts |

In words: the four rungs differ in how much Eve can *make happen*, not just observe. A scheme secure against a wiretap can be trivially broken by an attacker who can submit her own plaintexts, so the model has to be stated before "secure" means anything. The modern default is CPA at minimum ([1.4](01-04-computational-security-and-pseudorandomness.md)), and real protocols need CCA ([2.4](02-04-authenticated-encryption.md)).

One statistic does the work of breaking all three classical ciphers.

> **Index of coincidence.** For a string $s$ of length $n$ over a 26-letter alphabet with letter counts $n_A, \dots, n_Z$,
> $$\mathrm{IC}(s) = \frac{\sum_{\ell} n_\ell (n_\ell - 1)}{n(n-1)}.$$

In words: the probability that two letters drawn at random from the string, without replacement, are equal. Uniformly random text gives $1/26 \approx 0.038$; English gives about $0.066$, because English is lumpy. **Any single-alphabet substitution leaves the IC unchanged**, since permuting labels does not change how often two positions agree — which is exactly why the IC detects Vigenère's key length: slice the ciphertext into every $t$-th letter and the slices read as English only when $t$ is right.

## Picture

![Two stacked bar charts of letter frequency, A through Z. The top chart shows English plaintext frequencies with the tall bars at E and T highlighted. The bottom chart shows the frequencies of a ciphertext encrypted with a shift of 7; the entire profile is identical but slid seven places to the right, so the tall bars now sit at L and A. A dashed line connects the E bar above to the L bar below.](assets/01-01-fig1.svg)

The shift cipher does not destroy the histogram. It **translates** it. Finding the key is finding the offset that lines the bottom chart back up with the top one, and there are only 26 offsets to try — but you do not even try them, because the tallest bar tells you the answer in one look.

## Worked examples

**Example 1 — break a shift cipher without trying 26 keys.**

Ciphertext: `AOLLULTFRUVDZAOLZFZALT`. Count letters: L appears 5 times out of 22, or 23 percent, far above everything else. In English, E is the most frequent letter, so guess that L is the image of E. L is the 11th letter (index 11 counting from A = 0) and E is index 4, so

$$k \equiv 11 - 4 \equiv 7 \pmod{26}.$$

Shift back by 7: `THEENEMYKNOWSTHESYSTEM` — *the enemy knows the system*, which is Kerckhoffs's own phrasing of his principle. One histogram, one subtraction, no search.

**Example 2 — why the big key space bought nothing.**

Compare the two symmetric schemes as an attacker prices them:

| Scheme | Key space | Brute force | Actual attack |
|---|---|---|---|
| Shift | $26 = 2^{4.7}$ | 26 tries | 1 histogram |
| Substitution | $26! \approx 2^{88}$ | $10^{10}$ years at $10^9$/s | 1 histogram plus a little puzzle-solving |

The substitution cipher's key space is $10^{25}$ times larger and its security is essentially the same, because **brute force is an upper bound on the attacker's cost, never a lower bound.** The only lower bounds we will ever get are conditional: "breaking this is at least as hard as factoring" ([3.3](03-03-rsa-encryption.md)). That conditional shape — a **reduction** — is the through-line of the whole course, and it exists precisely because unconditional lower bounds are beyond anyone.

Now Vigenère with key length $t = 5$. The key space is $26^5 \approx 1.19 \times 10^7$, *smaller* than the substitution cipher's by nineteen orders of magnitude. Yet it is harder to break, because the attack that kills substitution needs a single stable histogram and Vigenère splits the text across five of them. **Key space and security are not merely unequal — they are not even correlated.**

## Watch out

- You might think a cipher that resists your best attack is secure. It is not — it is *unbroken*, which is a statement about you. Security claims must name the adversary's model and, from [1.4](01-04-computational-security-and-pseudorandomness.md) on, quantify their advantage.
- You might think keeping the algorithm secret adds a layer of defence. It adds a layer of *debt*: the secret is unrotatable, is shared with every employee and every binary you ship, and its loss is silent. Kerckhoffs says budget for it being gone from day one.
- You might think the IC of English being 0.066 versus 0.038 is a small gap. Across a few hundred letters it is overwhelming — that is roughly a 70 percent excess in coincidence rate, and the statistic concentrates fast enough that the right key length stands out unambiguously.

## One-liner

> The enemy knows the system; the only thing you get to keep is the key, and a big key space is not the same thing as a hard problem.

## Problems

**P1 (🟢)** The ciphertext `WKLVLVDVKLIW` was produced by a shift cipher. Its most common letter is L (3 of 12). Use the guess "the most common ciphertext letter is the image of E" to propose a key, decrypt, and state whether the guess was right. If it was not, say what the *second* guess should be and why.

**P2 (🟡)** A designer proposes: apply a substitution cipher, then apply a *different* substitution cipher to the result. He argues the key space is now $(26!)^2 \approx 2^{177}$, so the scheme is far stronger. Show that the composed scheme is exactly a substitution cipher again, give the size of the *effective* key space, and state the general principle about composition this illustrates.

**P3 (🔴, optional)** A 400-letter ciphertext has an index of coincidence of 0.0405. Slicing it into every 4th letter yields four subsequences whose ICs are 0.0662, 0.0651, 0.0673 and 0.0659. State what cipher this is, what the key length is, and the reasoning that gets you there. Then estimate how many letters of ciphertext you need before the per-slice IC is a trustworthy signal, given that each slice must hold enough letters for a frequency count to be meaningful — say, 40.

<details>
<summary>Solutions</summary>

**P1** L is index 11, E is index 4, so the proposed key is $k \equiv 11 - 4 = 7$. Shift `WKLVLVDVKLIW` back by 7, letter by letter: W (22) to 15 = P, K (10) to 3 = D, L (11) to 4 = E, V (21) to 14 = O, and so on, giving `PDEOEOWODEBP`. Not English, so the guess was wrong.

The second guess should be **T**, the next most frequent English letter at about 9.1 percent. T is index 19, so $k \equiv 11 - 19 \equiv -8 \equiv 18 \pmod{26}$. Shifting back by 18: W (22) to 4 = E, K (10) to 18 = S... that gives `ESTDTDLDSTQE`, also wrong. Third guess, **A** (index 0): $k = 11$. Shift back by 11: W (22) to 11 = L, K (10) to 25 = Z — no.

The clean route is to notice the ciphertext's pattern `WKLV LV DVKLIW` has a two-letter word repeated, and short English words are heavily constrained. Try $k = 3$ directly: W to T, K to H, L to I, V to S — `THIS IS A SHIFT`. Key $k = 3$, the literal Caesar cipher.

**The lesson of the failed guesses is the real answer:** on a 12-letter sample the most-frequent-letter heuristic is unreliable, because the law of large numbers has not had a chance to act. Frequency analysis is an asymptotic tool; on short texts you fall back on word patterns, or you simply try all 26 keys, which for a shift cipher is free.

**P2** Let the first cipher be the permutation $\pi_1$ and the second $\pi_2$, each a bijection from the alphabet to itself. Encryption of a letter $x$ is

$$\mathrm{Enc}(x) = \pi_2(\pi_1(x)) = (\pi_2 \circ \pi_1)(x).$$

The composition of two bijections on a finite set is a bijection, so $\pi_2 \circ \pi_1$ is itself a permutation of the 26 letters — that is, **a single substitution cipher with key $\pi = \pi_2 \circ \pi_1$**. The effective key space is therefore still $26!$, not $(26!)^2$: the map from key pairs to effective keys is $(26!)^2 \to 26!$, so it is $26!$-to-one and every doubled key is a single key in disguise. Frequency analysis works on the composition exactly as before, so security is unchanged too.

The general principle: **a cipher whose key space is closed under composition gains nothing from being iterated.** In group-theoretic language the permutations form a group ([`abstract-algebra` 1.1](../../abstract-algebra/lessons/01-01-group-axioms-first-examples.md)), and composing two group elements stays inside the group. This is not a curiosity — it is why it mattered enormously that DES was proved *not* to be a group, since if it had been, triple-DES would have been no stronger than single DES ([1.5](01-05-pseudorandom-functions-and-block-ciphers.md)).

**P3** The whole-text IC of 0.0405 is very close to the random-text value $1/26 \approx 0.0385$ and far from English's 0.066, so the ciphertext is **not** a single-alphabet substitution — those preserve the IC exactly. Flattening like this is the signature of a **polyalphabetic** cipher, and the four slices each coming back at English-like IC (0.065 to 0.067) says that every 4th letter was encrypted under the same alphabet. So it is a **Vigenère cipher with key length $t = 4$**, and each slice is now a plain shift cipher to be broken by the histogram of Example 1.

For the sample-size estimate: the text is split into $t$ slices of $n/t$ letters each, and each slice needs about 40 letters, so you need roughly $n \ge 40t$ letters of ciphertext. At $t = 4$ that is 160, comfortably satisfied by 400. At $t = 20$ it is 800, and a 400-letter sample would be too short to resolve the key length at all — **long keys defeat frequency analysis not by being hard to search but by starving each slice of data.** Pushed to its limit, this observation is the one-time pad ([1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)): a key as long as the message leaves each position with a sample of size one.

</details>

## Connections

- **Backward:** the shift cipher is addition in $\mathbb{Z}_{26}$ and nothing more — the modular arithmetic of [`number-theory` 2.1](../../number-theory/lessons/02-01-congruences-arithmetic-mod-n.md), with decryption being subtraction. Every symmetric scheme in this module is a more elaborate way to hide the same group operation.
- **Forward:** P3's closing observation — that a key as long as the message starves every statistical attack — is proved to be *exactly* what perfect secrecy requires in [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md) and [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md).
- **Sideways:** the index of coincidence is a collision probability, the same quantity that governs hash collisions in [2.2](02-02-the-birthday-bound-and-merkle-damgard.md); and its gap from uniform is a statistical distance, which becomes the formal measure of "distinguishable" in [1.4](01-04-computational-security-and-pseudorandomness.md). The lumpiness of English that makes the attack work is measured by its entropy in [`information-theory` 1.1](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md).

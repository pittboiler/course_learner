# Cryptography · Lesson 3.3: RSA encryption

> ⏱ ~15 min · Module 3: Public-key cryptography · Builds on: [`number-theory` 5.4 (the RSA cryptosystem)](../../number-theory/lessons/05-04-the-rsa-cryptosystem.md), [3.1 (the number-theoretic toolkit)](03-01-the-number-theoretic-toolkit.md) · Unlocks: [3.4 (ElGamal encryption)](03-04-elgamal-encryption.md)

## Why this matters

[`number-theory` 5.4](../../number-theory/lessons/05-04-the-rsa-cryptosystem.md) built RSA: key generation from two primes, the correctness proof via Euler's theorem with the Chinese-remainder patch, and the equivalence between knowing $\varphi(n)$ and factoring $n$. That construction is not repeated here — open it, or the [reference card](../reference.md#rsa-trapdoor-permutation), if the mechanics are cold.

This lesson asks the cryptographer's question instead: **is that scheme secure?** By the definitions of Module 1, the answer is no — textbook RSA fails IND-CPA for a reason proved in [1.6](01-06-modes-of-operation.md), and it fails in several further ways that have each broken deployed systems. Then it asks what must be added, and why the fix is padding rather than a bigger key.

The habit being trained is the one that matters most in applied cryptography: **a correct primitive is not a secure scheme.** RSA the trapdoor permutation is fine. RSA the encryption scheme, used naively, is a sequence of disasters.

## The idea

RSA is best understood as a **trapdoor permutation**: a bijection on $\mathbb{Z}_n$ that is easy to compute forwards with the public key, believed hard to invert without the trapdoor, and easy to invert with it. That abstraction is what the rest of the subject consumes — signatures ([4.1](04-01-digital-signatures.md)) invert it, encryption applies it, and both want it to behave like a random permutation.

It does not behave like one. Textbook RSA has three visible defects, and each maps to a real attack.

**It is deterministic.** By [1.6](01-06-modes-of-operation.md)'s theorem, no deterministic scheme is IND-CPA secure. Worse, the attack is practical whenever the message space is small: the adversary encrypts every candidate with the *public* key and compares. Encrypting a vote, a credit card number, or a session identifier this way is equivalent to publishing it.

**It is multiplicative.** $\mathrm{Enc}(m_1) \cdot \mathrm{Enc}(m_2) = (m_1 m_2)^{e} = \mathrm{Enc}(m_1 m_2)$. So an attacker who intercepts $c$ can produce a valid ciphertext of $2m$, or $rm$ for any $r$ she likes, without knowing $m$. That is malleability, and it also gives her a chosen-ciphertext attack: submit $c \cdot r^{e}$ for decryption, receive $rm$, divide by $r$.

**Small exponents expose small messages.** With $e = 3$, if $m^{3} < n$ then the modular reduction never happens and $c$ is $m^{3}$ **as an integer** — so the attacker takes an ordinary integer cube root. The same defect at protocol scale is Håstad's broadcast attack: send one message to three recipients under $e = 3$, and the Chinese remainder theorem reassembles $m^{3}$ from the three ciphertexts.

The fix for all three is **padding**, and specifically OAEP, which prepends structured redundancy and mixes in fresh randomness through two hash rounds before RSA is applied. Randomness kills determinism; structure kills malleability, because a modified ciphertext decrypts to something whose padding check fails.

## The formal version

> **RSA trapdoor permutation.** With $n = pq$, public $e$ coprime to $\varphi(n)$, and private $d = e^{-1} \bmod \varphi(n)$, the map $f(x) = x^{e} \bmod n$ is a permutation of $\mathbb{Z}_n$ with inverse $f^{-1}(y) = y^{d} \bmod n$.

> **The RSA problem.** Given $(n, e)$ and a uniform $y \in \mathbb{Z}_n^{*}$, compute $x$ with $x^{e} \equiv y$. The **RSA assumption** is that this is hard for suitably generated $n$.

**The RSA problem is not known to be equivalent to factoring.** Factoring $n$ certainly breaks RSA — you get $\varphi(n)$, hence $d$ — but no reduction in the other direction is known for general $e$. So RSA rests on a *stronger* assumption than factoring, which is a genuine, if usually ignored, caveat.

> **Textbook RSA is not IND-CPA secure.** Immediate from [1.6](01-06-modes-of-operation.md)'s theorem, since $\mathrm{Enc}(m) = m^{e} \bmod n$ is a deterministic function of the message and public key.

The four attacks worth being able to state:

| Attack | Condition | What the adversary does |
|---|---|---|
| Dictionary | small or guessable message space | encrypt every candidate with the public key and compare |
| Malleability / CCA | attacker can get things decrypted | submit $c \cdot r^{e}$, receive $r m$, divide out $r$ |
| Small-message cube root | $e = 3$ and $m^{e} < n$ | take an integer $e$-th root of $c$ |
| Håstad broadcast | one $m$ sent to $e$ recipients under the same small $e$ | Chinese-remainder the ciphertexts, then integer $e$-th root |

> **OAEP (Optimal Asymmetric Encryption Padding).** Let $G$ and $H$ be hash functions. To encrypt $m$ under $(n, e)$:
> 1. Form the data block $\mathrm{DB} = \mathrm{lHash} \,\Vert\, 0\cdots0 \,\Vert\, \texttt{0x01} \,\Vert\, m$.
> 2. Pick a random seed $r$.
> 3. $\mathrm{maskedDB} = \mathrm{DB} \oplus G(r)$ and $\mathrm{maskedSeed} = r \oplus H(\mathrm{maskedDB})$.
> 4. Output $c = (\texttt{0x00} \,\Vert\, \mathrm{maskedSeed} \,\Vert\, \mathrm{maskedDB})^{e} \bmod n$.

In words: a two-round Feistel network ([1.5](01-05-pseudorandom-functions-and-block-ciphers.md)) whose round functions are hashes, applied to the message and a fresh random seed before RSA touches anything. Decryption inverts the Feistel and then **checks the structure**; if the leading byte, the label hash or the `0x01` separator is wrong, it returns failure.

RSA-OAEP is CCA-secure in the random oracle model under the RSA assumption. The proof's shape is the one from [1.4](01-04-computational-security-and-pseudorandomness.md): an adversary who breaks the scheme is turned into an algorithm that inverts RSA, by watching her queries to $G$ and $H$.

**The decryption-failure path is itself a hazard.** The older PKCS#1 v1.5 padding gave rise to Bleichenbacher's attack, in which a server that distinguishes "padding wrong" from "decryption fine" lets an adversary recover a plaintext in about a million adaptive queries. This is [2.4](02-04-authenticated-encryption.md)'s padding oracle in public-key clothing, and the defence is the same: make the failure path indistinguishable, or avoid the construction.

**Practical note.** Modern systems rarely encrypt with RSA at all. They use RSA-KEM ([3.6](03-06-hybrid-encryption-kem-dem.md)) — encrypt a random group element and hash it into a symmetric key — which sidesteps padding entirely, and TLS 1.3 removed RSA key transport altogether in favour of ephemeral Diffie–Hellman ([3.2](03-02-diffie-hellman-key-exchange.md)).

## Picture

![A diagram of OAEP padding. A data block containing the message with padding and a label hash enters on the left; a random seed enters on the right. The seed passes through a hash G and is XOR-ed into the data block, producing the masked data block. The masked data block passes through a hash H and is XOR-ed into the seed, producing the masked seed. RSA is then applied to the concatenation of masked seed and masked data block. A caption notes that fresh randomness per message removes the determinism.](assets/03-03-fig1.svg)

Trace the two rounds and notice what each buys. **The first round randomises the message**, so the same plaintext never yields the same input to RSA. **The second round entangles the seed with the whole masked block**, so an adversary cannot alter one part without destroying the other — which is what makes a modified ciphertext fail the structure check rather than decrypt to a related message.

## Worked examples

**Example 1 — malleability, with numbers.**

Take $n = 391 = 17 \cdot 23$ and $e = 3$. Since $\varphi(391) = 16 \cdot 22 = 352$ and $\gcd(3, 352) = 1$, the key is valid, with $d = 3^{-1} \bmod 352 = 235$.

Alice encrypts $m = 12$:

$$c = 12^{3} = 1728 = 4 \cdot 391 + 164 \equiv 164 \pmod{391}.$$

Eve intercepts $c = 164$ and wants Bob to receive twice the value, without knowing $m$. She computes

$$c' = c \cdot 2^{e} = 164 \cdot 8 = 1312 = 3 \cdot 391 + 139 \equiv 139 \pmod{391}.$$

Bob decrypts $c'$ and obtains $139^{235} \bmod 391$. Check directly what that should be: $24^{3} = 13824 = 35 \cdot 391 + 139 \equiv 139$, so the plaintext is $24 = 2 \times 12$. **Eve doubled the message without ever learning it**, using only the public key.

If that message was an amount, a quantity, or an index, the consequence is obvious. And the same trick run in reverse is a chosen-ciphertext attack: Eve submits $c \cdot r^{e}$ for decryption, gets back $rm$, and divides by $r$ to recover $m$. **Textbook RSA hands the adversary a decryption oracle disguised as a multiplication.**

**Example 2 — Håstad's broadcast attack, worked.**

A message $m$ is sent to three recipients, each with public exponent $e = 3$ and moduli

$$n_1 = 391, \qquad n_2 = 1189 = 29 \cdot 41, \qquad n_3 = 3127 = 53 \cdot 59,$$

pairwise coprime, each with $\gcd(3, \varphi(n_i)) = 1$. Let $m = 100$.

The three ciphertexts are $c_i = 100^{3} \bmod n_i$, that is $10^{6} \bmod n_i$:

$$c_1 = 213, \qquad c_2 = 51, \qquad c_3 = 2487.$$

Eve collects all three. By the Chinese remainder theorem ([`number-theory` 2.4](../../number-theory/lessons/02-04-chinese-remainder-theorem.md)) there is a unique $x$ modulo $n_1 n_2 n_3 = 1{,}453{,}739{,}173$ with $x \equiv c_i \pmod{n_i}$ for each $i$. Solving gives

$$x = 1{,}000{,}000.$$

Now the key observation: $m < n_i$ for each $i$, so $m^{3} < n_1 n_2 n_3$, and therefore $x$ is not merely congruent to $m^{3}$ — it **equals** $m^{3}$ as an integer. Eve takes an ordinary integer cube root:

$$m = \sqrt[3]{1{,}000{,}000} = 100.$$

No factoring, no discrete log, no key. Three ciphertexts and a cube root.

The attack generalises to $e$ recipients for any small $e$, and Coppersmith's method extends it to cases where the messages differ by known padding. **The defect is that textbook RSA with small $e$ is barely a modular operation at all when the message is small**, and randomised padding fixes it by guaranteeing the padded value is comparable in size to $n$ and different for every recipient.

## Watch out

- You might think a 4096-bit modulus makes textbook RSA safe. It does not touch any attack in this lesson. Determinism, malleability and the broadcast attack are all independent of key size — they exploit structure, and structure does not shrink as the modulus grows.
- You might think $e = 3$ is the problem and $e = 65537$ is the fix. A larger $e$ defeats the small-message and broadcast attacks but leaves determinism and malleability untouched. $65537$ is chosen because it is prime and has only two set bits, making encryption fast; it is not a security measure.
- You might think OAEP is optional decoration. It is the scheme. "RSA encryption" without a proof-carrying padding is not an encryption scheme by any definition in this course, and every listed attack is a consequence of omitting it.

## One-liner

> RSA is a fine trapdoor permutation and a terrible encryption scheme: deterministic, multiplicative, and transparent to small exponents, so the padding is not packaging around the cryptography — it is the cryptography.

## Problems

**P1 (🟢)** A voting system encrypts each ballot with the election authority's public RSA key $(n, e)$ using textbook RSA. There are four candidates, encoded as the integers 1 through 4. Describe the attack an observer of the ciphertexts performs, state how many operations it costs, and name the property from [1.6](01-06-modes-of-operation.md) that is violated.

**P2 (🟡)** With $n = 391$ and $e = 3$ as in Example 1, Alice encrypts an unknown message $m$ and the ciphertext is $c = 64$. (a) Use the multiplicative property to construct a ciphertext that decrypts to $3m \bmod 391$. (b) Suppose a server will decrypt anything except $c$ itself and return the result. Give the two-step procedure Eve uses to recover $m$, and carry it out to find $m$, given that the server returns 12 for your ciphertext from (a).

**P3 (🔴, optional)** Two users share a modulus $n$ but have different public exponents $e_1 = 7$ and $e_2 = 11$, and the same message $m$ is sent to both, giving $c_1 = m^{7}$ and $c_2 = m^{11}$ mod $n$. (a) Show that an attacker who knows $c_1, c_2, e_1, e_2$ and $n$ recovers $m$, and name the algorithm that makes it work. (b) Carry out the key step, finding integers $u, v$ with $7u + 11v = 1$. (c) State the design rule this violates and why sharing a modulus is fatal even without this attack.

<details>
<summary>Solutions</summary>

**P1** The observer holds the public key, so she simply **encrypts all four candidate ballots herself**: she computes $1^{e}, 2^{e}, 3^{e}, 4^{e} \bmod n$ and builds a lookup table of four entries. Every intercepted ciphertext is then matched against the table, revealing that voter's choice exactly.

Cost: **four modular exponentiations**, done once, then one table lookup per ballot. Total work is independent of the number of voters and of the key size.

The property violated is **IND-CPA security**, and specifically the theorem of [1.6](01-06-modes-of-operation.md) that no deterministic encryption scheme achieves it. The fix is randomised encryption — OAEP, or better a scheme with homomorphic structure chosen on purpose, such as ElGamal ([3.4](03-04-elgamal-encryption.md)), which is randomised and lets ballots be tallied in encrypted form.

**P2** (a) The multiplicative property says $\mathrm{Enc}(r) \cdot \mathrm{Enc}(m) = \mathrm{Enc}(rm)$. With $r = 3$ and $e = 3$:

$$c' = c \cdot 3^{3} = 64 \cdot 27 = 1728 = 4 \cdot 391 + 164 \equiv 164 \pmod{391}.$$

So $c' = 164$ decrypts to $3m \bmod 391$.

(b) Eve's two-step procedure:

1. Choose any $r$ coprime to $n$, compute $c' = c \cdot r^{e} \bmod n$, and submit $c'$ to the server. Since $c' \ne c$, the server decrypts it and returns $m' = rm \bmod n$.
2. Compute $m = m' \cdot r^{-1} \bmod n$, using the extended Euclidean algorithm ([`number-theory` 1.2](../../number-theory/lessons/01-02-euclidean-algorithm-and-bezout.md)) to invert $r$.

Carrying it out with $r = 3$: the server returns $m' = 12$. We need $3^{-1} \bmod 391$. The extended Euclidean algorithm on $391 = 130 \cdot 3 + 1$ gives $1 = 391 - 130 \cdot 3$, so $3^{-1} \equiv -130 \equiv 261 \pmod{391}$. (Check: $3 \cdot 261 = 783 = 2 \cdot 391 + 1$.)

$$m = 12 \cdot 261 \bmod 391 = 3132 \bmod 391.$$

Since $391 \cdot 8 = 3128$, we get $m = 3132 - 3128 = 4$.

Verify against the original ciphertext: $4^{3} = 64 = c$. Correct. **Eve recovered $m$ with one oracle query and one modular inversion, never touching $d$ or the factorisation of $n$** — and note she would have succeeded just as easily with any other $r$, so a server that refuses one specific ciphertext defends against nothing.

**P3** (a) Because $\gcd(e_1, e_2) = \gcd(7, 11) = 1$, the **extended Euclidean algorithm** produces integers $u, v$ with $e_1 u + e_2 v = 1$. Then

$$c_1^{u} \cdot c_2^{v} = m^{e_1 u} \cdot m^{e_2 v} = m^{e_1 u + e_2 v} = m^{1} = m \pmod n.$$

One of $u, v$ is negative, which is fine: a negative exponent means using the modular inverse of that ciphertext, computable because $\gcd(c_i, n) = 1$ for a legitimate ciphertext. This is the **common-modulus attack**.

(b) Run the extended Euclidean algorithm on 11 and 7:

$$11 = 1 \cdot 7 + 4, \qquad 7 = 1 \cdot 4 + 3, \qquad 4 = 1 \cdot 3 + 1.$$

Back-substitute: $1 = 4 - 3 = 4 - (7 - 4) = 2 \cdot 4 - 7 = 2(11 - 7) - 7 = 2 \cdot 11 - 3 \cdot 7$.

So $7 \cdot (-3) + 11 \cdot 2 = 1$, giving $u = -3$ and $v = 2$. The attacker computes $m = (c_1^{-1})^{3} \cdot c_2^{2} \bmod n$.

(c) The rule violated is that **an RSA modulus must never be shared between users.** The attack above needs only two ciphertexts of one message, and it is not even the worst consequence.

The deeper problem is that any user who holds a private exponent $d_i$ for the shared $n$ can **factor $n$** — there is an efficient randomised algorithm that recovers $p$ and $q$ from any valid $(e, d)$ pair — and having factored it, can compute everyone else's private exponent. So sharing a modulus means every participant can decrypt every other participant's traffic and forge their signatures, with no cleverness required at all. The attack in (a) is what an *outsider* can do; the factoring consequence is what every *insider* can do, and it is why the rule is absolute.

</details>

## Flashback

**From Lesson 2.4 (authenticated encryption):** A server decrypts RSA ciphertexts padded with PKCS#1 v1.5 and returns a distinct error when the padding is malformed. (a) Name the attack this enables and state the analogue from Module 2. (b) Explain why returning a single generic error is insufficient, and name the general design principle that does work.

<details>
<summary>Solution</summary>

(a) This is **Bleichenbacher's attack**, sometimes called the million-message attack. The server acts as a **padding oracle**: for any ciphertext the adversary submits, it reports whether the decrypted value begins with the bytes `0x00 0x02`. Each answer confines the unknown plaintext to a narrower interval, and adaptively chosen multiples of the target ciphertext — using the multiplicative property of this lesson — shrink the interval until the plaintext is pinned exactly, in roughly a million queries.

The Module 2 analogue is the **CBC padding oracle** of [2.4](02-04-authenticated-encryption.md), where a server distinguishing bad padding from bad MAC leaks the plaintext one byte at a time. The mechanism differs — intervals rather than bytes, multiplication rather than XOR — but the shape is identical: *a decryption routine that behaves observably differently on malformed input is a decryption oracle.*

(b) A single generic error is insufficient because the **timing** still differs: the server that finds bad padding usually aborts before doing the remaining work, so its response arrives sooner, and the adversary recovers the same bit by measurement. This is the Lucky13 lesson transplanted, and variants of Bleichenbacher's attack have been rediscovered repeatedly in TLS stacks — as ROBOT in 2017 — precisely because each round of patching removed one distinguisher and left another.

The principle that works: **do not let attacker-controlled input reach a decision that branches observably.** In the symmetric setting that means encrypt-then-MAC, so a forgery is rejected by a constant-time tag comparison before decryption. In the RSA setting it means using OAEP, whose structure check is designed to be uniform, or better still abandoning RSA key transport for a KEM ([3.6](03-06-hybrid-encryption-kem-dem.md)), where a malformed ciphertext simply yields a random-looking key and the failure never becomes an observable branch at all.

</details>

## Connections

- **Backward:** the construction and correctness proof are [`number-theory` 5.4](../../number-theory/lessons/05-04-the-rsa-cryptosystem.md), and the cost of factoring a 3072-bit modulus is [3.1](03-01-the-number-theoretic-toolkit.md)'s sieve arithmetic; the deterministic-encryption theorem that condemns the textbook scheme is [1.6](01-06-modes-of-operation.md)'s.
- **Forward:** [3.4](03-04-elgamal-encryption.md) is the discrete-log counterpart and is randomised by construction rather than by padding; [3.6](03-06-hybrid-encryption-kem-dem.md) shows how public-key encryption is actually deployed; [4.1](04-01-digital-signatures.md) uses the same trapdoor in the opposite direction and inherits a parallel set of padding hazards.
- **Sideways:** the multiplicative property that makes textbook RSA malleable is exactly what makes RSA a **homomorphic** encryption scheme, and [3.4](03-04-elgamal-encryption.md) shows how the same structure becomes a feature when it is deliberate; the broadcast attack's reassembly step is the Chinese remainder theorem of [`number-theory` 2.4](../../number-theory/lessons/02-04-chinese-remainder-theorem.md) used as a weapon rather than a convenience.

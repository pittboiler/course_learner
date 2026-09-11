# Cryptography · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Cryptography is the business of building systems that survive an adversary who sees everything but the key, and of *proving* they do. This card holds what you would otherwise hunt for mid-problem: the security definitions and exactly which adversary each one models, the birthday and key-size arithmetic, every scheme's construction and correctness identity, the assumptions each one reduces to, and the attacks that punish the standard mistakes.

## Scope and ownership

Several built courses touch this material. The split is deliberate; the other card is often worth having open too.

| Topic | Owned by | Note |
|---|---|---|
| Modular arithmetic, inverses, CRT, Fermat, Euler's theorem and totient, order, primitive roots, quadratic residues, primality testing, **the RSA construction and its correctness proof** | [`number-theory`](../number-theory/syllabus.md), especially [5.4](../number-theory/lessons/05-04-the-rsa-cryptosystem.md) | [3.1](lessons/03-01-the-number-theoretic-toolkit.md) owns the **cost accounting** — how expensive the honest operation is, how expensive the best attack is, and what ratio a parameter size buys; [3.3](lessons/03-03-rsa-encryption.md) owns **why the textbook scheme is insecure** and what padding fixes |
| Groups, cyclic groups and order, Lagrange, homomorphisms, finite fields and $\mathrm{GF}(2^{8})$ | [`abstract-algebra`](../abstract-algebra/syllabus.md) | used here without re-derivation; AES's S-box and GHASH both live in finite fields |
| Entropy, mutual information, source coding | [`information-theory`](../information-theory/syllabus.md) | [1.2](lessons/01-02-perfect-secrecy-and-the-one-time-pad.md)–[1.3](lessons/01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md) own **perfect secrecy** and the key-length bound, which that course does not cover |
| The TLS handshake as a message sequence; spoofing, amplification, DNS poisoning, route hijacking, firewalls | [`computer-networks` 4.4](../computer-networks/lessons/04-04-network-security-tls-firewalls-attacks.md) | [4.2](lessons/04-02-public-key-infrastructure-and-certificates.md) owns the **cryptographic content**: what a certificate is as a signed object, chain verification, transcript signatures, revocation, Certificate Transparency |
| Merkle trees for anti-entropy and block validation; proof-of-work; Byzantine agreement with signatures | [`distributed-systems` 2.3](../distributed-systems/lessons/02-03-eventual-consistency-and-anti-entropy.md), [4.5](../distributed-systems/lessons/04-05-byzantine-fault-tolerance.md), [4.6](../distributed-systems/lessons/04-06-nakamoto-consensus-and-blockchains.md) | that course explicitly defers collision resistance, preimage resistance and signatures to [2.1](lessons/02-01-cryptographic-hash-functions.md) and [4.1](lessons/04-01-digital-signatures.md) |
| Asymptotic notation, reductions, P versus NP, hash tables, meet-in-the-middle | [`algorithms`](../algorithms/syllabus.md) | security reductions here are the same technique pointed the other way: assume a break, build a solver |
| Superposition, the quantum Fourier transform, Shor's and Grover's algorithms in detail | [`quantum-computing`](../quantum-computing/syllabus.md) | [4.5](lessons/04-05-post-quantum-cryptography.md) owns the **consequences** for each primitive and the migration argument, not the quantum machinery |
| Reed–Solomon and erasure coding over a finite field | [`communications` 4.3](../communications/lessons/04-03-block-codes.md) | [4.3](lessons/04-03-commitments-and-secret-sharing.md) owns Shamir sharing, which is the same interpolation used for confidentiality rather than redundancy |
| Everything else here | **this course** | |

**Convention warnings**, because two cards may be open at once.

- **"Security level" is not key length.** A 3072-bit RSA key gives about 128 bits of security; a 256-bit curve gives 128; a 128-bit AES key gives 128. The connecting function is the best known attack's running time, and it differs per primitive.
- **$n$ is overloaded by convention.** In Module 1 it is the security parameter (read: key length in bits). In Module 3 it is an RSA modulus. In hash discussions it is the digest length in bits. The context always disambiguates, but the collision is real and standard.
- **A "nonce" need not be random and must never repeat; an "IV" for CBC must additionally be unpredictable.** The two words are used loosely in the wild and the requirements genuinely differ.
- **Collision resistance is not secrecy.** A hash hides nothing about a guessable input. This trips up more real systems than any theorem on this card.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathcal M, \mathcal K, \mathcal C$ | the sets of possible messages, keys and ciphertexts | [1.1](lessons/01-01-classical-ciphers-and-the-cryptographers-mindset.md) |
| $\mathrm{Gen}, \mathrm{Enc}_k, \mathrm{Dec}_k$ | key generation, encryption and decryption under key $k$ | [1.1](lessons/01-01-classical-ciphers-and-the-cryptographers-mindset.md) |
| $\mathrm{IC}(s)$ | index of coincidence: chance two letters drawn from $s$ match | [1.1](lessons/01-01-classical-ciphers-and-the-cryptographers-mindset.md) |
| $\oplus$ | bitwise XOR, and the group operation of the one-time pad | [1.2](lessons/01-02-perfect-secrecy-and-the-one-time-pad.md) |
| $M, C, K$ | random variables for message, ciphertext and key (lower case = fixed values) | [1.2](lessons/01-02-perfect-secrecy-and-the-one-time-pad.md) |
| $H(X)$ | Shannon entropy of $X$ — *not* a hash function, which is $H(\cdot)$ on strings | [1.3](lessons/01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md) |
| $n$ (Module 1) | the security parameter; read it as "key length in bits" | [1.4](lessons/01-04-computational-security-and-pseudorandomness.md) |
| $\mathrm{negl}(n)$ | a negligible function: eventually below every inverse polynomial | [1.4](lessons/01-04-computational-security-and-pseudorandomness.md) |
| PPT | probabilistic polynomial-time, the model of an efficient adversary | [1.4](lessons/01-04-computational-security-and-pseudorandomness.md) |
| $G$ (Module 1) | a pseudorandom generator; $\ell(n)$ is its output length | [1.4](lessons/01-04-computational-security-and-pseudorandomness.md) |
| $D^{F_k(\cdot)}$ | a distinguisher with oracle access to $F_k$ but not to $k$ | [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md) |
| $F_k, E_k$ | a keyed pseudorandom function; a block cipher (a pseudorandom permutation) | [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md) |
| $\Vert$ | concatenation of strings | [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md) |
| $q$ (Module 1–2) | the number of queries or blocks an adversary sees | [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md) |
| IV, ctr | the initialisation vector of CBC; the nonce-plus-counter input of CTR | [1.6](lessons/01-06-modes-of-operation.md) |
| $\mathrm{PrivK}^{\mathrm{eav}}, \mathrm{PrivK}^{\mathrm{cpa}}$ | the eavesdropper and chosen-plaintext indistinguishability experiments | [1.4](lessons/01-04-computational-security-and-pseudorandomness.md), [1.6](lessons/01-06-modes-of-operation.md) |
| $H$ (Modules 2–4) | a cryptographic hash function with $n$-bit output | [2.1](lessons/02-01-cryptographic-hash-functions.md) |
| $N$ (birthday) | the size of the space being sampled from, so $N = 2^{n}$ for an $n$-bit hash | [2.2](lessons/02-02-the-birthday-bound-and-merkle-damgard.md) |
| $f, h_i$ | a compression function and the $i$-th chaining value of Merkle–Damgård | [2.2](lessons/02-02-the-birthday-bound-and-merkle-damgard.md) |
| $t$ (Modules 2) | a MAC tag, and $t$ bits is its length | [2.3](lessons/02-03-message-authentication-codes.md) |
| ipad, opad | HMAC's inner and outer pad bytes, `0x36` and `0x5c` repeated | [2.3](lessons/02-03-message-authentication-codes.md) |
| $A$ (AEAD) | associated data: authenticated but not encrypted | [2.4](lessons/02-04-authenticated-encryption.md) |
| $\bot$ | the decryption-failure symbol | [2.4](lessons/02-04-authenticated-encryption.md) |
| $L_n[\alpha, c]$ | subexponential running time interpolating polynomial and exponential | [3.1](lessons/03-01-the-number-theoretic-toolkit.md) |
| $g, q$ (Module 3) | a generator of a cyclic group, and the group's prime order | [3.1](lessons/03-01-the-number-theoretic-toolkit.md) |
| $\log_g h$ | the discrete logarithm of $h$ to base $g$ | [3.1](lessons/03-01-the-number-theoretic-toolkit.md) |
| $a, b$ (DH) | Alice's and Bob's private exponents; $A = g^{a}$, $B = g^{b}$ are public | [3.2](lessons/03-02-diffie-hellman-key-exchange.md) |
| KDF | key derivation function, turning a group element into a uniform key | [3.2](lessons/03-02-diffie-hellman-key-exchange.md) |
| $n, e, d$ (RSA) | modulus, public exponent, private exponent | [3.3](lessons/03-03-rsa-encryption.md) |
| $\varphi(n)$ | Euler's totient; for $n = pq$ it is $(p-1)(q-1)$ | [3.3](lessons/03-03-rsa-encryption.md) |
| $x, h$ (ElGamal) | the private key and the public key $h = g^{x}$ | [3.4](lessons/03-04-elgamal-encryption.md) |
| $y$ (ElGamal) | the fresh per-message exponent; $c_1 = g^{y}$ | [3.4](lessons/03-04-elgamal-encryption.md) |
| $E(\mathbb{F}_p)$, $\mathcal{O}$ | the group of points on a curve over $\mathbb{F}_p$; the point at infinity | [3.5](lessons/03-05-elliptic-curve-cryptography.md) |
| $\lambda$ (curves) | the chord or tangent slope in the group law | [3.5](lessons/03-05-elliptic-curve-cryptography.md) |
| $G, Q = dG$ | a curve generator and a public key from private scalar $d$ | [3.5](lessons/03-05-elliptic-curve-cryptography.md) |
| $c_0, c_1$ (KEM) | the encapsulation and the AEAD ciphertext | [3.6](lessons/03-06-hybrid-encryption-kem-dem.md) |
| $\sigma$ | a digital signature | [4.1](lessons/04-01-digital-signatures.md) |
| $k$ (ECDSA) | the per-signature nonce — as sensitive as the private key | [4.1](lessons/04-01-digital-signatures.md) |
| $(r,s)$ | an ECDSA or Schnorr signature pair | [4.1](lessons/04-01-digital-signatures.md) |
| $pk, sk$ | a public and private key pair | [4.2](lessons/04-02-public-key-infrastructure-and-certificates.md) |
| $\mathrm{Commit}(m,r)$ | a commitment to $m$ with randomness $r$ | [4.3](lessons/04-03-commitments-and-secret-sharing.md) |
| $(t,n)$ sharing | any $t$ of $n$ shares reconstruct; any $t-1$ reveal nothing | [4.3](lessons/04-03-commitments-and-secret-sharing.md) |
| $f(x)$ (Shamir) | the sharing polynomial, with the secret at $f(0)$ | [4.3](lessons/04-03-commitments-and-secret-sharing.md) |
| $t, c, s$ (Schnorr) | commitment, challenge and response of the three-move protocol | [4.4](lessons/04-04-zero-knowledge-proofs.md) |
| $A\mathbf{s} + \mathbf{e}$ | the Learning With Errors instance: noisy linear equations | [4.5](lessons/04-05-post-quantum-cryptography.md) |

## Definitions

### Kerckhoffs's principle

The scheme is public; only the key is secret. Assume the adversary has your source code and your hardware.

*Introduced:* [1.1](lessons/01-01-classical-ciphers-and-the-cryptographers-mindset.md)

### Attack models

What the adversary can *make happen*, not merely observe. Every security claim is relative to one of these.

| Model | Adversary gets |
|---|---|
| Ciphertext-only | ciphertexts |
| Known-plaintext (KPA) | some $(m,c)$ pairs |
| Chosen-plaintext (CPA) | an encryption oracle |
| Chosen-ciphertext (CCA) | encryption and decryption oracles |

*Introduced:* [1.1](lessons/01-01-classical-ciphers-and-the-cryptographers-mindset.md)

### Perfect secrecy

The ciphertext changes nothing about the adversary's beliefs: the posterior equals the prior.

$$\Pr[M = m \mid C = c] = \Pr[M = m] \quad \text{for all } m, c \text{ with } \Pr[C=c] > 0.$$

Equivalent, and the form used in proofs because it mentions no message distribution: for all $m, m', c$,

$$\Pr_K[\mathrm{Enc}_K(m) = c] = \Pr_K[\mathrm{Enc}_K(m') = c].$$

*Introduced:* [1.2](lessons/01-02-perfect-secrecy-and-the-one-time-pad.md)

### One-time pad

Uniform key as long as the message, XOR-ed in, used once. Perfectly secret, and by Shannon's theorem essentially the only shape a perfectly secret scheme can have.

$$\mathrm{Enc}_k(m) = m \oplus k, \qquad \mathrm{Dec}_k(c) = c \oplus k, \qquad k \leftarrow \{0,1\}^{n} \text{ uniform}.$$

*Introduced:* [1.2](lessons/01-02-perfect-secrecy-and-the-one-time-pad.md)

### Shannon's theorem

Perfect secrecy forces the key space to be at least as large as the message space, by pigeonhole: a ciphertext is reachable from at most $|\mathcal K|$ messages, and any unreachable message has had its probability driven to zero.

$$\text{perfectly secret} \implies |\mathcal K| \ge |\mathcal M|, \qquad H(K) \ge H(M).$$

*Introduced:* [1.3](lessons/01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md)

### Negligible function

Shrinks faster than every inverse polynomial. The cutoff is chosen for closure: polynomially many negligible events still have negligible total probability.

$$\forall c > 0 \ \exists N \ \forall n > N : \ \mathrm{negl}(n) < n^{-c}.$$

*Introduced:* [1.4](lessons/01-04-computational-security-and-pseudorandomness.md)

### Computational indistinguishability

Two distributions are indistinguishable if no efficient algorithm's output probability differs by more than a negligible amount. The difference is the **advantage**.

*Introduced:* [1.4](lessons/01-04-computational-security-and-pseudorandomness.md)

### Pseudorandom generator

A deterministic stretch $G : \{0,1\}^{n} \to \{0,1\}^{\ell(n)}$ with $\ell(n) > n$ whose output no PPT distinguisher separates from uniform. The output set is tiny; the *experience* is random.

*Introduced:* [1.4](lessons/01-04-computational-security-and-pseudorandomness.md)

### EAV security

Indistinguishable encryption against an eavesdropper: the adversary names two equal-length messages, gets one encrypted, and cannot guess which better than by a negligible margin. One ciphertext only.

*Introduced:* [1.4](lessons/01-04-computational-security-and-pseudorandomness.md)

### Pseudorandom function

A keyed function $F_k$ that an adaptive oracle-querying adversary cannot distinguish from a uniformly chosen function on the same domain.

*Introduced:* [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md)

### Pseudorandom permutation

The same, with each $F_k$ a bijection and the reference object a random permutation. A **strong** PRP additionally survives an inverse oracle. A block cipher is trying to be one.

*Introduced:* [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md)

### Feistel network

Split the block, run one half through an arbitrary function, XOR into the other, swap. Invertible **whatever the round function is**, because inversion re-evaluates it rather than undoing it.

$$L_{i+1} = R_i, \qquad R_{i+1} = L_i \oplus F(k_i, R_i).$$

*Introduced:* [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md)

### Confusion and diffusion

Shannon's two design goals: **confusion** makes the key-to-ciphertext relation complicated (S-boxes); **diffusion** spreads each input bit across the whole output (mixing layers). Together they produce the avalanche effect.

*Introduced:* [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md)

### Meet-in-the-middle

Double encryption is broken by matching a table of $E_{k_1}(m)$ against a search over $E^{-1}_{k_2}(c)$: time $2^{|k|+1}$ and memory $2^{|k|}$ rather than $2^{2|k|}$. This is why triple encryption exists and why 3DES is rated at 112 bits, not 168.

*Introduced:* [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md)

### IND-CPA security

Indistinguishability under chosen-plaintext attack: the adversary has an encryption oracle before and after seeing the challenge. The modern minimum for confidentiality.

*Introduced:* [1.6](lessons/01-06-modes-of-operation.md)

### Deterministic encryption is never IND-CPA

Two queries suffice: submit $m_0 \ne m_1$, receive the challenge, then ask the oracle for $\mathrm{Enc}_k(m_0)$ and compare. Success probability 1. This kills ECB, textbook RSA, and every "encrypt the field so we can still index it" design.

*Introduced:* [1.6](lessons/01-06-modes-of-operation.md)

### Mode of operation

The construction turning a one-block cipher into a scheme for arbitrary messages. Its real job is injecting fresh randomness per message.

*Introduced:* [1.6](lessons/01-06-modes-of-operation.md)

### Collision resistance

No efficient adversary finds $x \ne x'$ with $H(x) = H(x')$. The strongest of the three hash requirements and the cheapest to break, because the attacker chooses both inputs.

*Introduced:* [2.1](lessons/02-01-cryptographic-hash-functions.md)

### Second-preimage resistance

Given a random $x$, no efficient adversary finds a different $x'$ with the same hash. Implied by collision resistance; not equivalent to it.

*Introduced:* [2.1](lessons/02-01-cryptographic-hash-functions.md)

### Preimage resistance

Given $y = H(x)$ for random $x$, no efficient adversary finds any input hashing to $y$. Also called one-wayness. Note it says nothing about *guessable* inputs, which is where password and identifier hashing fails.

*Introduced:* [2.1](lessons/02-01-cryptographic-hash-functions.md)

### Random oracle model

Pretend $H$ is a public, uniformly random function everyone may query and nobody can predict. A heuristic, provably unachievable in general, and still the setting for the cleanest proofs (RSA-OAEP, RSA-FDH, Fiat–Shamir).

*Introduced:* [2.1](lessons/02-01-cryptographic-hash-functions.md)

### Birthday bound

Drawing $q$ items from a space of size $N$, a collision appears at $q \approx \sqrt{N}$, because $q$ items contain about $q^{2}/2$ pairs.

*Introduced:* [2.2](lessons/02-02-the-birthday-bound-and-merkle-damgard.md)

### Merkle–Damgård

Chain a fixed-input compression function over the message blocks, appending a final block encoding the length (**MD strengthening**). Collision resistance of $f$ lifts to collision resistance of $H$.

$$h_0 = \mathrm{IV}, \qquad h_i = f(h_{i-1}, m_i), \qquad H(m) = h_t.$$

*Introduced:* [2.2](lessons/02-02-the-birthday-bound-and-merkle-damgard.md)

### Length-extension attack

Because the digest **is** the chaining state, anyone holding $H(m)$ and $|m|$ computes $H(m \Vert \mathrm{pad} \Vert m')$ without knowing $m$. Fatal to the MAC $t = H(k \Vert m)$; the reason HMAC nests. SHA-3's sponge is immune.

*Introduced:* [2.2](lessons/02-02-the-birthday-bound-and-merkle-damgard.md)

### EUF-CMA

Existential unforgeability under chosen-message attack: after obtaining tags or signatures on messages of her choosing, the adversary cannot produce a valid pair on **any** fresh message, however meaningless.

*Introduced:* [2.3](lessons/02-03-message-authentication-codes.md)

### HMAC

A MAC from a hash, nested under two keys derived from one by XOR-ing with two fixed pads. Its proof needs only that the compression function is a PRF — **not** collision resistance, which is why HMAC-SHA1 outlived SHA-1 signatures.

$$\mathrm{HMAC}_k(m) = H\big((k \oplus \mathrm{opad}) \Vert H((k \oplus \mathrm{ipad}) \Vert m)\big).$$

*Introduced:* [2.3](lessons/02-03-message-authentication-codes.md)

### CBC-MAC

Chained encryption with a zero IV, output the last block. Secure only for messages of **one fixed length**; variable lengths admit a two-query forgery. Repaired by length-prefixing or by CMAC.

*Introduced:* [2.3](lessons/02-03-message-authentication-codes.md)

### Authenticated encryption

IND-CPA confidentiality plus ciphertext integrity (INT-CTXT). Together they imply CCA security, because a decryption oracle becomes useless when no forged ciphertext ever decrypts.

*Introduced:* [2.4](lessons/02-04-authenticated-encryption.md)

### Encrypt-then-MAC

Encrypt, then MAC the **ciphertext** under an independent key. The only composition order that is secure for every secure cipher and every secure MAC, because the receiver rejects a forgery before decrypting it.

*Introduced:* [2.4](lessons/02-04-authenticated-encryption.md)

### AEAD

Authenticated encryption with associated data: $\mathrm{Enc}_k(N, A, m)$, where $A$ is authenticated but sent in the clear. Headers, versions and record types belong in $A$.

*Introduced:* [2.4](lessons/02-04-authenticated-encryption.md)

### Padding oracle

Any observable difference between "bad padding" and "bad MAC" — content, timing, size — recovers plaintext a byte at a time, about 128 queries per byte. Encrypt-then-MAC removes the oracle by never reaching the padding logic.

*Introduced:* [2.4](lessons/02-04-authenticated-encryption.md)

### Discrete logarithm problem

Given $g$ and $h = g^{a}$ in a cyclic group of order $q$, find $a$. Generic cost $\Theta(\sqrt{q})$ and provably no better generically; subexponential in $(\mathbb{Z}/p)^{\times}$ via index calculus; polynomial on a quantum computer.

*Introduced:* [3.1](lessons/03-01-the-number-theoretic-toolkit.md)

### CDH and DDH

**Computational DH:** given $(g, g^{a}, g^{b})$, compute $g^{ab}$. **Decisional DH:** decide whether a fourth element equals $g^{ab}$. DDH implies CDH implies hard discrete log. Key exchange needs CDH; encryption proofs need DDH. **DDH is false in the full group $(\mathbb{Z}/p)^{\times}$** because the Legendre symbol leaks exponent parity, so work in the prime-order subgroup.

*Introduced:* [3.1](lessons/03-01-the-number-theoretic-toolkit.md)

### Square-and-multiply

Exponentiate by scanning the exponent's bits: square each step, multiply in the base where the bit is 1. Cost $\approx 1.5k$ modular multiplications for a $k$-bit exponent, so modular exponentiation is $O(k^{3})$ bit operations.

*Introduced:* [3.1](lessons/03-01-the-number-theoretic-toolkit.md)

### Diffie–Hellman key exchange

Publish $g^{a}$ and $g^{b}$, both compute $g^{ab}$ because exponentiation commutes, then run the result through a KDF. Secure against a **passive** eavesdropper under CDH, and offers no protection whatever against an active one.

*Introduced:* [3.2](lessons/03-02-diffie-hellman-key-exchange.md)

### Man-in-the-middle

An active attacker runs two exchanges, one with each party, substituting her own public value in both directions. Every message is well-formed and neither endpoint can tell. Fixed by authentication, never by a better exchange.

*Introduced:* [3.2](lessons/03-02-diffie-hellman-key-exchange.md)

### Forward secrecy

A later compromise of long-term keys does not reveal earlier sessions. Requires **ephemeral** exponents on both sides, discarded after use. Static Diffie–Hellman and RSA key transport both lack it.

*Introduced:* [3.2](lessons/03-02-diffie-hellman-key-exchange.md)

### Small-subgroup attack

Sending a group element of small order $t$ confines the shared secret to $t$ possibilities and leaks the victim's exponent mod $t$; the Chinese remainder theorem assembles the pieces. Defended by validating that a received element lies in the prime-order subgroup.

*Introduced:* [3.2](lessons/03-02-diffie-hellman-key-exchange.md)

### RSA trapdoor permutation

$f(x) = x^{e} \bmod n$ is a permutation of $\mathbb{Z}_n$ with inverse $f^{-1}(y) = y^{d}$. Easy forwards with the public key, easy backwards with the trapdoor $d$, believed hard backwards without it.

**The RSA problem is not known to be equivalent to factoring** — factoring breaks RSA, but no reduction is known in the other direction for general $e$.

*Introduced:* [3.3](lessons/03-03-rsa-encryption.md), constructed in [`number-theory` 5.4](../number-theory/lessons/05-04-the-rsa-cryptosystem.md)

### OAEP

A two-round Feistel over two hashes, applied to the message and a fresh random seed before RSA. Randomness kills determinism; structure makes a mauled ciphertext fail a check. RSA-OAEP is CCA-secure in the random oracle model.

*Introduced:* [3.3](lessons/03-03-rsa-encryption.md)

### ElGamal encryption

Diffie–Hellman with one side published in advance. Randomised by construction, IND-CPA secure **if and only if** DDH holds, malleable and therefore not CCA-secure.

$$\mathrm{Enc}(m) = (g^{y},\; m \cdot h^{y}), \qquad \mathrm{Dec}(c_1,c_2) = c_2 \cdot (c_1^{x})^{-1}.$$

*Introduced:* [3.4](lessons/03-04-elgamal-encryption.md)

### Homomorphic encryption

A scheme where an operation on ciphertexts induces an operation on plaintexts. ElGamal is multiplicative; **exponential ElGamal** — encrypting $g^{m}$ — is additive, which is what makes encrypted vote tallying possible.

*Introduced:* [3.4](lessons/03-04-elgamal-encryption.md)

### Elliptic curve group

The points of $y^{2} = x^{3} + ax + b$ over $\mathbb{F}_p$ plus $\mathcal{O}$, with the chord-and-tangent addition law. **No index calculus is known**, so the best attack is the generic $\sqrt{n}$ — which is the entire reason 256 bits suffices.

*Introduced:* [3.5](lessons/03-05-elliptic-curve-cryptography.md)

### Hasse's theorem

The point count is within $2\sqrt{p}$ of $p+1$, so the group order tracks the field size and the key size is the field size.

$$\big|\#E(\mathbb{F}_p) - (p+1)\big| \le 2\sqrt{p}.$$

*Introduced:* [3.5](lessons/03-05-elliptic-curve-cryptography.md)

### Invalid-curve attack

The addition formulas never mention $b$, so a point from a *different*, weak curve is processed happily; the victim's scalar multiplication then leaks its scalar modulo small primes. Prevented by checking the curve equation and the subgroup on every received point.

*Introduced:* [3.5](lessons/03-05-elliptic-curve-cryptography.md)

### KEM and DEM

The KEM **generates** a symmetric key and a public-key encapsulation of it; the DEM is an AEAD keyed by that. A CCA-secure KEM plus a CCA-secure DEM composes to a CCA-secure public-key scheme.

*Introduced:* [3.6](lessons/03-06-hybrid-encryption-kem-dem.md)

### Implicit rejection

A KEM in which malformed input yields a pseudorandom key rather than an error, so failure surfaces only at the AEAD tag check and there is no decryption-failure oracle. An interface that cannot represent an invalid input has no input-validation vulnerabilities.

*Introduced:* [3.6](lessons/03-06-hybrid-encryption-kem-dem.md)

### Digital signature

A MAC whose verification key is public: sign with $sk$, verify with $pk$. Buys **non-repudiation**, which a shared-key MAC can never provide because either party could have produced the tag.

*Introduced:* [4.1](lessons/04-01-digital-signatures.md)

### Hash-then-sign

Sign $H(m)$, not $m$. Necessary for long messages and to kill textbook RSA's free existential forgery; it imports a **collision-resistance** requirement, because the attacker often chooses both documents.

*Introduced:* [4.1](lessons/04-01-digital-signatures.md)

### ECDSA

Sign with a fresh nonce $k$: $r = x_{kG} \bmod n$ and $s = k^{-1}(h + rd)$. Verification reconstructs $kG$ from public values. **A repeated nonce — visible as a repeated $r$ — leaks the private key.**

*Introduced:* [4.1](lessons/04-01-digital-signatures.md)

### Deterministic nonce

Derive $k = \mathrm{HMAC}_{d}(H(m))$ from the private key and the message, as in RFC 6979 and Ed25519. Unpredictable to anyone without $d$, never repeated across distinct messages, and independent of a runtime entropy source.

*Introduced:* [4.1](lessons/04-01-digital-signatures.md)

### Certificate

A signed statement binding a public key to a name: subject, key, issuer, validity, extensions, and a signature by the issuer over all of it. Public and copyable, so presenting one proves nothing by itself.

*Introduced:* [4.2](lessons/04-02-public-key-infrastructure-and-certificates.md)

### Trust anchor

A root certificate trusted because it shipped with your software, not because of any cryptographic property. Every guarantee in the PKI is conditional on an honest trust store.

*Introduced:* [4.2](lessons/04-02-public-key-infrastructure-and-certificates.md)

### Transcript signature

The server proves possession of the leaf private key by signing a hash of the handshake so far (TLS 1.3's CertificateVerify). Binding to the transcript is what prevents replay into another connection and downgrade of the offered cipher suites.

*Introduced:* [4.2](lessons/04-02-public-key-infrastructure-and-certificates.md)

### Certificate Transparency

Append-only public Merkle logs of every issued certificate, with $\log_2 N$-sized inclusion proofs. It does not prevent misissuance; it makes misissuance **detectable** within hours by the domain owner.

*Introduced:* [4.2](lessons/04-02-public-key-infrastructure-and-certificates.md)

### Commitment scheme

A sealed envelope: **hiding** (reveals nothing about the value) and **binding** (cannot be opened two ways). No scheme is perfectly both, so one of the two is always computational.

*Introduced:* [4.3](lessons/04-03-commitments-and-secret-sharing.md)

### Pedersen commitment

$\mathrm{Commit}(m,r) = g^{m}h^{r}$ with $\log_g h$ unknown to the committer. **Perfectly hiding** (the mask $h^{r}$ is uniform) and **computationally binding** (two openings yield $\log_g h$). Additively homomorphic.

*Introduced:* [4.3](lessons/04-03-commitments-and-secret-sharing.md)

### Shamir secret sharing

Put the secret at $f(0)$ of a random degree-$(t-1)$ polynomial over $\mathbb{F}_q$ and hand out evaluations. Any $t$ shares interpolate; any $t-1$ leave every secret equally likely — **information-theoretically**, like the one-time pad.

*Introduced:* [4.3](lessons/04-03-commitments-and-secret-sharing.md)

### Zero-knowledge

There is an efficient **simulator** producing transcripts indistinguishable from real ones without the witness. A transcript anyone can forge cannot encode a secret only the prover has.

*Introduced:* [4.4](lessons/04-04-zero-knowledge-proofs.md)

### Special soundness

Two accepting transcripts sharing a commitment but with different challenges yield the witness. This is what upgrades a proof of a statement to a **proof of knowledge**.

*Introduced:* [4.4](lessons/04-04-zero-knowledge-proofs.md)

### Schnorr identification

Commit $t = g^{r}$, receive challenge $c$, respond $s = r + cx$; verify $g^{s} = t \cdot h^{c}$. The response is a one-time pad of $cx$ under $r$, and a repeated $r$ is the extractor's input.

*Introduced:* [4.4](lessons/04-04-zero-knowledge-proofs.md)

### Fiat–Shamir transform

Replace the verifier's random challenge with $c = H(\text{commitment} \Vert \text{statement} \Vert \text{message})$. Removes interaction; with the message hashed in, the proof **is** a signature. Secure in the random oracle model, and broken if anything is left out of the hash.

*Introduced:* [4.4](lessons/04-04-zero-knowledge-proofs.md)

### Shor's algorithm

Factors and computes discrete logs in $O(n^{3})$ quantum operations by period finding. Breaks RSA, finite-field Diffie–Hellman, ElGamal and all elliptic-curve schemes, with **no key size that helps**.

*Introduced:* [4.5](lessons/04-05-post-quantum-cryptography.md)

### Grover's algorithm

Unstructured search in $\Theta(\sqrt{N})$ quantum evaluations, and provably optimal. Halves symmetric security *exponents*; the iterations are sequential and expensive, so doubling the key is the complete response.

*Introduced:* [4.5](lessons/04-05-post-quantum-cryptography.md)

### Learning With Errors

Recover $\mathbf{s}$ from $A\mathbf{s} + \mathbf{e} \bmod q$ with small noise $\mathbf{e}$. Easy without the noise (Gaussian elimination), believed hard with it for classical and quantum adversaries, and backed by a worst-case lattice reduction.

*Introduced:* [4.5](lessons/04-05-post-quantum-cryptography.md)

### Harvest now, decrypt later

Traffic recorded today is readable the day a quantum computer exists, so the migration deadline for **key exchange** is today minus the secrecy lifetime of the data. Signatures have a later deadline, except for long-lived roots and firmware keys.

*Introduced:* [4.5](lessons/04-05-post-quantum-cryptography.md)

## Formulas and rules

### Security-level arithmetic

| Quantity | Formula | Note |
|---|---|---|
| Birthday collision point | $q \approx 1.177\sqrt{N}$ | even odds; $N = 2^{n}$ for an $n$-bit value |
| Birthday, small probability | $\Pr \approx q^{2}/(2N)$ | use this to size nonces and identifiers |
| Collision resistance of $n$-bit hash | $2^{n/2}$ | attacker chooses both inputs |
| Preimage resistance of $n$-bit hash | $2^{n}$ | |
| Blind forgery per attempt, $t$-bit tag | $2^{-t}$ | **not** a birthday bound; a specific value must be hit |
| PRF/PRP switching advantage | $q(q-1)/2^{m+1}$ | $m$-bit block; distinguishable at $q \approx 2^{m/2}$ |
| Generic discrete log in order-$q$ group | $\Theta(\sqrt{q})$ | Pollard rho; provably optimal generically |
| Factoring and finite-field DLP | $L_n[1/3, 1.923]$ | number field sieve / index calculus |

*From* [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md), [2.2](lessons/02-02-the-birthday-bound-and-merkle-damgard.md), [2.3](lessons/02-03-message-authentication-codes.md), [3.1](lessons/03-01-the-number-theoretic-toolkit.md)

### Equivalent key sizes

| Security level | Symmetric | Elliptic curve | RSA modulus / DH prime | Hash (collision) |
|---|---|---|---|---|
| 112 bits | 112 | 224 | 2048 | 224 |
| 128 bits | 128 | 256 | 3072 | 256 |
| 192 bits | 192 | 384 | 7680 | 384 |
| 256 bits | 256 | 512 | 15360 | 512 |

The right-hand column grows fastest because a subexponential attack makes each extra bit of security cost more than the last.

*From* [3.1](lessons/03-01-the-number-theoretic-toolkit.md), [3.5](lessons/03-05-elliptic-curve-cryptography.md)

### Modes of operation

| Mode | Encryption | IND-CPA | Padding | Parallel encrypt | Needs $E^{-1}$ |
|---|---|---|---|---|---|
| ECB | $c_i = E_k(m_i)$ | no | yes | yes | yes |
| CBC | $c_i = E_k(m_i \oplus c_{i-1})$, $c_0 = \mathrm{IV}$ | yes, with **unpredictable** IV | yes | no | yes |
| CTR | $c_i = m_i \oplus E_k(\mathrm{ctr}+i)$ | yes, with **unique** nonce | no | yes | no |

CBC decryption: $m_i = E_k^{-1}(c_i) \oplus c_{i-1}$. CTR decryption is the identical XOR.

*From* [1.6](lessons/01-06-modes-of-operation.md)

### Nonce and IV requirements

| Setting | Requirement | Failure if violated |
|---|---|---|
| CBC IV | uniform and unpredictable in advance | chosen-plaintext confirmation of guesses (BEAST) |
| CTR nonce | unique per key | $c \oplus c' = m \oplus m'$ |
| GCM nonce | unique per key | authentication key $H$ recovered; unlimited forgery |
| ElGamal $y$ | fresh per message | $c_2/c'_2 = m/m'$ |
| ECDSA $k$ | fresh, unpredictable | **private key recovered** |
| Schnorr $r$ | fresh, unpredictable | private key recovered by the extractor |

*From* [1.6](lessons/01-06-modes-of-operation.md), [2.4](lessons/02-04-authenticated-encryption.md), [3.4](lessons/03-04-elgamal-encryption.md), [4.1](lessons/04-01-digital-signatures.md), [4.4](lessons/04-04-zero-knowledge-proofs.md)

### Block cipher parameters

| | DES | 3DES | AES |
|---|---|---|---|
| Structure | Feistel, 16 rounds | three DES passes | SPN, 10 / 12 / 14 rounds |
| Block | 64 bits | 64 bits | 128 bits |
| Key | 56 bits | 168 stored, **112 effective** | 128 / 192 / 256 |
| Status | broken by exhaustive search (1998) | retired; 64-bit block is the problem | unbroken |

*From* [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md)

### Composition orders

| Order | Construction | Verdict |
|---|---|---|
| Encrypt-and-MAC | send $\mathrm{Enc}(m)$ and $\mathrm{Mac}(m)$ | insecure: a deterministic MAC leaks plaintext equality |
| MAC-then-encrypt | send $\mathrm{Enc}(m \Vert \mathrm{Mac}(m))$ | not generically secure: receiver must decrypt to judge |
| Encrypt-then-MAC | send $c = \mathrm{Enc}(m)$ and $\mathrm{Mac}(c)$ | **secure** for any secure cipher and MAC, independent keys |

*From* [2.4](lessons/02-04-authenticated-encryption.md)

### AEAD parameters

| | AES-GCM | ChaCha20-Poly1305 |
|---|---|---|
| Confidentiality | AES-CTR | ChaCha20 |
| Authentication | GHASH over $\mathrm{GF}(2^{128})$ | Poly1305 mod $2^{130}-5$ |
| Nonce | 96 bits, unique | 96 bits, unique |
| Data limit | $\approx 2^{39}$ bits (64 GiB) per invocation, $2^{32}$ random-nonce invocations per key | comparable |

*From* [2.4](lessons/02-04-authenticated-encryption.md)

### Public-key schemes at a glance

| Scheme | Construction | Assumption | Randomised | CCA-secure |
|---|---|---|---|---|
| Textbook RSA | $c = m^{e} \bmod n$ | RSA | no | no (not even CPA) |
| RSA-OAEP | padded, then $x^{e}$ | RSA, random oracle | yes | yes |
| RSA-KEM | $c_0 = r^{e}$, $k = \mathrm{KDF}(r \Vert c_0)$ | RSA, random oracle | yes | yes |
| ElGamal | $(g^{y},\, m h^{y})$ | DDH | yes | no (malleable) |
| Hashed ElGamal / ECIES | $(g^{y},\, \mathrm{AEAD}_{\mathrm{KDF}(h^{y})}(m))$ | CDH, random oracle | yes | yes |
| ECDH | exchange $aG$, $bG$; key $\mathrm{KDF}(abG)$ | CDH on the curve | ephemeral | key exchange only |

*From* [3.2](lessons/03-02-diffie-hellman-key-exchange.md)–[3.6](lessons/03-06-hybrid-encryption-kem-dem.md)

### Elliptic-curve group law

For $P = (x_1,y_1)$, $Q = (x_2,y_2)$ on $y^{2} = x^{3}+ax+b$ over $\mathbb{F}_p$, with $P \ne -Q$:

$$\lambda = \frac{y_2-y_1}{x_2-x_1} \ \ (P \ne Q), \qquad \lambda = \frac{3x_1^{2}+a}{2y_1} \ \ (P = Q),$$

$$x_3 = \lambda^{2}-x_1-x_2, \qquad y_3 = \lambda(x_1-x_3)-y_1.$$

Identity $\mathcal{O}$; inverse $-(x,y) = (x,-y)$; smoothness needs $4a^{3}+27b^{2} \ne 0$. The $y_3$ formula already includes the reflection, and **$b$ never appears** — which is what makes invalid-curve attacks possible.

*From* [3.5](lessons/03-05-elliptic-curve-cryptography.md)

### Signature schemes

| Scheme | Sign | Verify |
|---|---|---|
| RSA-FDH | $\sigma = H(m)^{d} \bmod n$ | $\sigma^{e} \equiv H(m)$ |
| ECDSA | $r = x_{kG} \bmod n$, $s = k^{-1}(h+rd)$ | $x_{u_1 G + u_2 Q} \bmod n = r$, with $w = s^{-1}$, $u_1 = hw$, $u_2 = rw$ |
| Schnorr | $t = g^{r}$, $c = H(t \Vert m)$, $s = r + cx$ | recompute $t' = g^{s}h^{-c}$, check $c = H(t' \Vert m)$ |

*From* [4.1](lessons/04-01-digital-signatures.md), [4.4](lessons/04-04-zero-knowledge-proofs.md)

### Key-recovery from a repeated nonce

Two ECDSA signatures $(r, s_1)$ on $h_1$ and $(r, s_2)$ on $h_2$ sharing $k$:

$$k = \frac{h_1-h_2}{s_1-s_2} \bmod n, \qquad d = \frac{s_1 k - h_1}{r} \bmod n.$$

The Schnorr form, from two challenges on one commitment, is the same algebra:

$$x = \frac{s-s'}{c-c'} \bmod q.$$

*From* [4.1](lessons/04-01-digital-signatures.md), [4.4](lessons/04-04-zero-knowledge-proofs.md)

### Shamir reconstruction

From any $t$ shares $\{(x_i,y_i)\}$ of a degree-$(t-1)$ polynomial over $\mathbb{F}_q$:

$$s = f(0) = \sum_{i} y_i \prod_{j \ne i} \frac{0-x_j}{x_i-x_j} \pmod q.$$

*From* [4.3](lessons/04-03-commitments-and-secret-sharing.md)

### Quantum impact

| Primitive | Classical | Quantum | Verdict |
|---|---|---|---|
| RSA, finite-field DH, ECDH, ECDSA | subexponential or $2^{k/2}$ | polynomial (Shor) | broken |
| AES-128 | $2^{128}$ | $2^{64}$ sequential iterations | acceptable |
| AES-256 | $2^{256}$ | $2^{128}$ | safe |
| SHA-256 preimage | $2^{256}$ | $2^{128}$ | safe |
| SHA-256 collision | $2^{128}$ | $\approx 2^{85}$ with $2^{85}$ quantum memory | safe in practice |
| One-time pad, Shamir sharing | — | — | unaffected (information-theoretic) |

*From* [4.5](lessons/04-05-post-quantum-cryptography.md)

### Post-quantum standards and sizes

| Standard | Scheme | Role | Public key | Ciphertext / signature |
|---|---|---|---|---|
| FIPS 203 | ML-KEM-768 | key encapsulation | 1,184 B | 1,088 B |
| FIPS 204 | ML-DSA-65 | signature | 1,952 B | 3,309 B |
| FIPS 205 | SLH-DSA-128s | signature, hash-based | 32 B | 7,856 B |
| — | Falcon-512 | signature, compact | 897 B | 666 B |
| (classical) | X25519 / Ed25519 | comparison | 32 B | 32 B / 64 B |

*From* [4.5](lessons/04-05-post-quantum-cryptography.md)

### English letter statistics

Useful only for [1.1](lessons/01-01-classical-ciphers-and-the-cryptographers-mindset.md)-style problems, and worth having rather than guessing.

| Letter | Frequency | | Quantity | Value |
|---|---|---|---|---|
| E | 12.7 percent | | IC of English | 0.066 |
| T | 9.1 | | IC of uniform text | $1/26 = 0.038$ |
| A | 8.2 | | substitution key space | $26! \approx 2^{88}$ |
| O | 7.5 | | Vigenère key space, period $t$ | $26^{t}$ |

*From* [1.1](lessons/01-01-classical-ciphers-and-the-cryptographers-mindset.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Modular arithmetic, congruences, reduction | [`number-theory` 2.1](../number-theory/lessons/02-01-congruences-arithmetic-mod-n.md) |
| Modular inverses and the extended Euclidean algorithm | [`number-theory` 2.2](../number-theory/lessons/02-02-linear-congruences-and-modular-inverses.md), [1.2](../number-theory/lessons/01-02-euclidean-algorithm-and-bezout.md) |
| Chinese remainder theorem | [`number-theory` 2.4](../number-theory/lessons/02-04-chinese-remainder-theorem.md) |
| Fermat's little theorem | [`number-theory` 3.1](../number-theory/lessons/03-01-fermats-little-theorem.md) |
| Euler's totient $\varphi(n)$ and Euler's theorem | [`number-theory` 3.2](../number-theory/lessons/03-02-euler-totient-and-theorem.md) |
| Order of an element; structure of $(\mathbb{Z}/n)^{\times}$ | [`number-theory` 3.3](../number-theory/lessons/03-03-order-and-the-unit-group.md) |
| Primitive roots and generators | [`number-theory` 3.4](../number-theory/lessons/03-04-primitive-roots.md) |
| Legendre symbol and quadratic residues | [`number-theory` 4.2](../number-theory/lessons/04-02-quadratic-residues-and-legendre-symbol.md) |
| Primality testing (Miller–Rabin) for key generation | [`number-theory` 5.3](../number-theory/lessons/05-03-primality-testing.md) |
| RSA key generation and its correctness proof | [`number-theory` 5.4](../number-theory/lessons/05-04-the-rsa-cryptosystem.md) |
| Group axioms, cyclic groups, order of a group element | [`abstract-algebra` 1.1](../abstract-algebra/lessons/01-01-group-axioms-first-examples.md), [1.2](../abstract-algebra/lessons/01-02-cyclic-groups-order.md) |
| Lagrange's theorem | [`abstract-algebra` 1.5](../abstract-algebra/lessons/01-05-cosets-lagrange.md) |
| Group homomorphisms | [`abstract-algebra` 2.1](../abstract-algebra/lessons/02-01-homomorphisms-kernels-images.md) |
| Finite fields and $\mathrm{GF}(2^{8})$, used by AES and GHASH | [`abstract-algebra` 4.3](../abstract-algebra/lessons/04-03-finite-fields.md) |
| Shannon entropy $H(X)$ and mutual information | [`information-theory` 1.1](../information-theory/lessons/01-01-entropy-uncertainty-surprise.md), [1.3](../information-theory/lessons/01-03-mutual-information.md) |
| Conditional entropy and the chain rule | [`information-theory` 1.2](../information-theory/lessons/01-02-joint-conditional-entropy-chain-rule.md) |
| Probability, conditioning, Bayes, occupancy counting | [`prob-stat-refresher` 1.1](../prob-stat-refresher/lessons/01-01-sample-spaces-events-axioms.md), [1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) |
| Asymptotic notation and polynomial-time as "feasible" | [`algorithms` 1.1](../algorithms/lessons/01-01-asymptotic-notation.md), [4.1](../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) |
| Time-memory trade-offs and divide-and-conquer meet-in-the-middle | [`algorithms` 1.5](../algorithms/lessons/01-05-divide-and-conquer-beyond-sorting.md) |
| The TLS handshake's message ordering; DNS and BGP attacks | [`computer-networks` 4.4](../computer-networks/lessons/04-04-network-security-tls-firewalls-attacks.md) |
| Merkle trees as a data structure | [`distributed-systems` 2.3](../distributed-systems/lessons/02-03-eventual-consistency-and-anti-entropy.md) |
| The divisor-class group law on a curve, where associativity is proved | [`algebraic-geometry` 4.3](../algebraic-geometry/lessons/04-03-divisors-on-a-curve.md) |
| Quantum superposition, the quantum Fourier transform, Shor and Grover in detail | [`quantum-computing`](../quantum-computing/syllabus.md) |
| Conditioning and the failure of Gaussian elimination under perturbation | [`numerical-analysis` 3.2](../numerical-analysis/lessons/03-02-cholesky-conditioning.md) |
| Lagrange interpolation over a finite field, as erasure coding | [`communications` 4.3](../communications/lessons/04-03-block-codes.md) |

## Pitfalls

### Confusing key size with security

- A big key space is not a hard problem: the substitution cipher has $2^{88}$ keys and falls to one histogram.
  *([1.1](lessons/01-01-classical-ciphers-and-the-cryptographers-mindset.md))*
- Brute force is an upper bound on the attacker's cost, never a lower bound; only a reduction gives a lower bound.
  *([1.1](lessons/01-01-classical-ciphers-and-the-cryptographers-mindset.md))*
- Doubling the key bits does not double the security: 2DES has 112 key bits and 57 bits of security.
  *([1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md))*
- Block size is a security parameter independent of key size, and it caps how much data one key may process.
  *([1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md))*
- A 3072-bit RSA key gives about 128 bits of security, not 3072.
  *([3.1](lessons/03-01-the-number-theoretic-toolkit.md))*
- Output length is an upper bound on a hash's security level, never a measurement: concatenating derived values inflates length without adding entropy.
  *([2.1](lessons/02-01-cryptographic-hash-functions.md))*
- Growing the wrong component is decoration, not defence in depth — a larger RSA modulus does nothing against a hash-collision certificate forgery.
  *([4.1](lessons/04-01-digital-signatures.md))*

### Randomness and reuse

- Perfect secrecy needs a **uniform** key; a biased key destroys it with the algorithm untouched.
  *([1.2](lessons/01-02-perfect-secrecy-and-the-one-time-pad.md))*
- Reusing a one-time pad leaks $m_1 \oplus m_2$ exactly, and one crib recovers both messages.
  *([1.3](lessons/01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md))*
- A repeated CTR nonce is a two-time pad; a repeated GCM nonce additionally hands over the authentication key permanently.
  *([1.6](lessons/01-06-modes-of-operation.md), [2.4](lessons/02-04-authenticated-encryption.md))*
- A repeated ElGamal exponent gives $m/m'$; a repeated ECDSA nonce gives the **private key**.
  *([3.4](lessons/03-04-elgamal-encryption.md), [4.1](lessons/04-01-digital-signatures.md))*
- Random nonces buy only half their bit-length against collisions; a durable counter buys all of it.
  *([1.6](lessons/01-06-modes-of-operation.md), [2.2](lessons/02-02-the-birthday-bound-and-merkle-damgard.md))*
- A nonce must be unique, an IV for CBC must additionally be unpredictable, and neither must be secret.
  *([1.6](lessons/01-06-modes-of-operation.md))*

### Definitions and what they actually promise

- Perfect secrecy does not stop the adversary guessing; it stops the *ciphertext* helping her.
  *([1.2](lessons/01-02-perfect-secrecy-and-the-one-time-pad.md))*
- Perfect secrecy does not hide message **length**, which has identified which page of a site a user loaded.
  *([1.2](lessons/01-02-perfect-secrecy-and-the-one-time-pad.md))*
- "Pseudorandom" means passing every efficient test, not passing a standard battery.
  *([1.4](lessons/01-04-computational-security-and-pseudorandomness.md))*
- $n^{-100}$ is not negligible, and non-negligible advantages amplify to certainty under repetition.
  *([1.4](lessons/01-04-computational-security-and-pseudorandomness.md))*
- EAV security permits exactly one ciphertext; a scheme can be EAV-secure and trivially broken by two.
  *([1.4](lessons/01-04-computational-security-and-pseudorandomness.md))*
- IND-CPA says nothing about integrity: CTR is IND-CPA and completely malleable.
  *([1.6](lessons/01-06-modes-of-operation.md))*
- A MAC does not prevent replay and does not provide non-repudiation; a signature does the second, and neither does the first without a counter inside the authenticated data.
  *([2.3](lessons/02-03-message-authentication-codes.md), [4.1](lessons/04-01-digital-signatures.md))*
- A signature guarantees only that the key-holder produced it — not that the message is true, fresh, or meant for you.
  *([4.1](lessons/04-01-digital-signatures.md))*
- Zero-knowledge does not mean the verifier learns nothing; he learns the statement is true, and nothing beyond.
  *([4.4](lessons/04-04-zero-knowledge-proofs.md))*

### Hashing is not secrecy

- Hashing does not anonymise: any enumerable input is recovered by hashing every candidate.
  *([2.1](lessons/02-01-cryptographic-hash-functions.md))*
- No hash manufactures entropy the input lacks; an 8-character password is 41 bits whatever the digest size.
  *([2.1](lessons/02-01-cryptographic-hash-functions.md))*
- A salt shared site-wide protects nobody; its value is forcing per-target work.
  *([2.3](lessons/02-03-message-authentication-codes.md))*
- Collision resistance does not imply hiding, so a commitment needs high-entropy randomness, not just a hash.
  *([2.1](lessons/02-01-cryptographic-hash-functions.md), [4.3](lessons/04-03-commitments-and-secret-sharing.md))*
- Length extension is not a break of SHA-256; it breaks a *use* that assumed a property nobody stated.
  *([2.2](lessons/02-02-the-birthday-bound-and-merkle-damgard.md))*

### Structure the adversary exploits

- Composing two ciphers from a group of permutations gains nothing — the composite is one element of the same group.
  *([1.1](lessons/01-01-classical-ciphers-and-the-cryptographers-mindset.md), [1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md))*
- Textbook RSA is deterministic, multiplicative and transparent to small exponents; none of that improves with key size.
  *([3.3](lessons/03-03-rsa-encryption.md))*
- Never share an RSA modulus between users: two exponents on one message recover it, and any private exponent factors the modulus.
  *([3.3](lessons/03-03-rsa-encryption.md))*
- A hardness assumption is about a **distribution**, not a size: primes chosen close together factor instantly.
  *([3.1](lessons/03-01-the-number-theoretic-toolkit.md))*
- DDH is false in the full group $(\mathbb{Z}/p)^{\times}$; work in the prime-order subgroup.
  *([3.1](lessons/03-01-the-number-theoretic-toolkit.md), [3.4](lessons/03-04-elgamal-encryption.md))*
- Validate every received group element or curve point, or a small-subgroup or invalid-curve attack recovers your scalar.
  *([3.2](lessons/03-02-diffie-hellman-key-exchange.md), [3.5](lessons/03-05-elliptic-curve-cryptography.md))*
- Do not generate your own curve: anomalous curves, small embedding degree and smooth group order are all broken.
  *([3.5](lessons/03-05-elliptic-curve-cryptography.md))*

### Composition and interface

- A correct primitive is not a secure scheme; a block cipher without a mode is ECB.
  *([1.5](lessons/01-05-pseudorandom-functions-and-block-ciphers.md), [1.6](lessons/01-06-modes-of-operation.md))*
- MAC the ciphertext, not the plaintext, so a forgery is discarded before anything processes it.
  *([2.4](lessons/02-04-authenticated-encryption.md))*
- A uniform error message is necessary and not sufficient: timing is a channel too (Lucky13, ROBOT).
  *([2.4](lessons/02-04-authenticated-encryption.md), [3.3](lessons/03-03-rsa-encryption.md))*
- Compare tags in constant time; an early-exit comparison recovers a tag byte by byte.
  *([2.3](lessons/02-03-message-authentication-codes.md))*
- Bind the encapsulation into the KDF, or two ciphertexts can yield one key.
  *([3.6](lessons/03-06-hybrid-encryption-kem-dem.md))*
- Prove key possession by responding to a challenge you randomise, never by operating your private key on data someone else chose.
  *([4.4](lessons/04-04-zero-knowledge-proofs.md))*
- Fiat–Shamir must hash the commitment, the statement and the message; omitting any of them is a real break.
  *([4.4](lessons/04-04-zero-knowledge-proofs.md))*

### Trust, deployment and the long term

- Ephemeral-looking is not ephemeral: ECIES to a long-term recipient key has no forward secrecy.
  *([3.6](lessons/03-06-hybrid-encryption-kem-dem.md))*
- A valid certificate means someone proved domain control, not that the site is honest.
  *([4.2](lessons/04-02-public-key-infrastructure-and-certificates.md))*
- A certificate is public and copyable; authentication comes from the transcript signature.
  *([4.2](lessons/04-02-public-key-infrastructure-and-certificates.md))*
- Assume revocation does not work against a network attacker, and design for short certificate lifetimes instead.
  *([4.2](lessons/04-02-public-key-infrastructure-and-certificates.md))*
- Adding a trusted CA can only lower security, because trust composes in series.
  *([4.2](lessons/04-02-public-key-infrastructure-and-certificates.md))*
- $(t,n)$ sharing does not detect a dishonest shareholder; that needs verifiable secret sharing.
  *([4.3](lessons/04-03-commitments-and-secret-sharing.md))*
- Larger RSA keys buy essentially no time against Shor; only a change of assumption helps.
  *([4.5](lessons/04-05-post-quantum-cryptography.md))*
- A NIST standard is not a guarantee: SIKE reached the final round and fell to a laptop in an hour. Deploy hybrid.
  *([4.5](lessons/04-05-post-quantum-cryptography.md))*
- An attack's exponent is not its cost — quantum collision bounds charge nothing for impossible memory, and Grover's iterations barely parallelise.
  *([4.5](lessons/04-05-post-quantum-cryptography.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links.
- **No prose dollar signs** — write "10 dollars", not the symbol.
- Length is not capped the way a lesson's is: this is a lookup surface, not a
  read-through.

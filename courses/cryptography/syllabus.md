# Cryptography — Syllabus

> Computer Science · Tier 2 · ~21 lessons · Prereqs: [number-theory](../number-theory/syllabus.md), [algorithms](../algorithms/syllabus.md) · Roadmap id: `cryptography`

## Goal

Cryptography is the discipline of building communication that survives an adversary who sees everything except your secret key — and, crucially, of *proving* it does. This course takes you from Caesar's shift cipher to the machinery guarding every HTTPS connection: you'll understand perfect secrecy and why Shannon proved it's too expensive to use, trade it for *computational* security built on pseudorandomness, and then climb the public-key stack — RSA, Diffie–Hellman, elliptic curves — that lets strangers agree on secrets in the open. You'll end with signatures, the certificate trust that underwrites the web, and a taste of the protocols (zero-knowledge proofs, secret sharing) that power modern privacy tech. The through-line is the reduction: security always means "breaking this is as hard as some problem we believe is hard." Deliberately skipped — side-channel and implementation attacks (timing, power analysis, fault injection) and hardware crypto engineering; we study the mathematics of the schemes, not the perils of shipping them. The number-theoretic hardness here is exactly the [number-theory](../number-theory/syllabus.md) toolkit made load-bearing, and the algorithmic cost accounting comes from [algorithms](../algorithms/syllabus.md); the reciprocal threat — Shor's algorithm on a quantum computer breaking RSA and Diffie–Hellman — is the bridge into [quantum-computing](../quantum-computing/syllabus.md), which we name explicitly in the closing module.

## Dangerous Checklist

When you finish, you can:

- [ ] Break a monoalphabetic substitution cipher by frequency analysis, and state Kerckhoffs's principle and why it matters
- [ ] Prove the one-time pad is perfectly secret, and explain via Shannon's theorem why the key must be as long as the message
- [ ] Define semantic / IND-CPA security and argue why a deterministic encryption scheme can never achieve it
- [ ] Explain what a PRG, PRF, and PRP are, and how a block cipher plus a mode of operation (CTR, CBC) builds a secure cipher from them
- [ ] Reason about a hash function's collision and preimage resistance, and compute the birthday bound for an $n$-bit output
- [ ] Build a MAC with HMAC, explain the length-extension attack it defends against, and combine it into authenticated encryption
- [ ] Run a Diffie–Hellman key exchange by hand and name the discrete-log assumption its security rests on
- [ ] Construct a toy RSA keypair, encrypt and decrypt, and explain why textbook (unpadded) RSA is insecure
- [ ] Explain why elliptic-curve crypto achieves the same security as RSA with far smaller keys
- [ ] Verify a digital signature and trace a certificate chain from a root CA to a website's public key
- [ ] Split a secret with Shamir's scheme and reconstruct it by Lagrange interpolation
- [ ] State the completeness, soundness, and zero-knowledge properties of a proof, and say why Shor's algorithm forces the move to post-quantum cryptography

## Modules

### Module 1: Perfect secrecy and symmetric encryption

From the ciphers you can break with pen and paper to the provably-unbreakable one-time pad, then the pivot every practical scheme makes: trade perfect secrecy for *computational* security and buy it back cheaply with pseudorandomness.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Classical ciphers and the cryptographer's mindset | Break a substitution cipher and adopt the adversary's viewpoint | shift / substitution / Vigenère ciphers, frequency analysis, Kerckhoffs's principle, threat models |
| 1.2 | Perfect secrecy and the one-time pad | Prove a scheme leaks *nothing* about the plaintext | Shannon secrecy, $\Pr[M=m\mid C=c]=\Pr[M=m]$, XOR one-time pad, proof of perfect secrecy |
| 1.3 | Shannon's theorem and the price of perfect secrecy | Explain why perfect secrecy forces $|\mathcal K|\ge|\mathcal M|$ | Shannon's theorem, key-length bound, two-time-pad reuse attack, why OTP is impractical |
| 1.4 | Computational security and pseudorandomness | Redefine "secure" so short keys suffice | negligible functions, PRG, computational indistinguishability, semantic / IND security |
| 1.5 | Pseudorandom functions and block ciphers | See how one keyed permutation powers real encryption | PRF vs PRP, Feistel networks & SPNs, DES → AES, ideal-cipher intuition |
| 1.6 | Modes of operation | Encrypt messages longer than one block, securely | ECB failure, CBC, CTR, nonces / IVs, IND-CPA from a PRF |

**Boss problem 1:** Two plaintexts are encrypted under the *same* one-time-pad key by XOR, giving $c_1 = 1010$ and $c_2 = 0110$. Compute $c_1\oplus c_2$, prove it equals $m_1\oplus m_2$, and say precisely what an attacker learns and why key reuse destroys perfect secrecy. Then explain why CTR mode with a fresh nonce avoids exactly this failure while ECB mode reproduces it. *(Worked answer: $c_1\oplus c_2 = 1100 = m_1\oplus m_2$ since the key cancels; the adversary learns the XOR of the plaintexts — every position where they agree is exposed. CTR derives a fresh pseudorandom pad per (key, nonce), so no pad is ever reused; ECB applies the *same* permutation to every block, so equal plaintext blocks yield equal ciphertext blocks — the same reuse leak.)*

### Module 2: Hash functions and message authentication

Confidentiality is only half the job — this module secures *integrity*, so a message arrives unaltered and provably from who you think. Hashes give fingerprints; MACs give unforgeable stamps; authenticated encryption bundles both.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Cryptographic hash functions | Use a hash as a collision-resistant fingerprint | preimage / second-preimage / collision resistance, SHA-2 & SHA-3, random-oracle heuristic |
| 2.2 | The birthday bound and Merkle–Damgård | Predict when collisions appear and how hashes are built | birthday paradox, $\approx 2^{n/2}$ work, Merkle–Damgård construction, length-extension pitfall |
| 2.3 | Message authentication codes | Stamp a message so only the key-holder could have | MAC, existential unforgeability (EUF-CMA), CBC-MAC, HMAC's nested construction |
| 2.4 | Authenticated encryption | Get confidentiality and integrity in one scheme | encrypt-then-MAC, AEAD, GCM, the "don't roll your own" reason integrity can't be an afterthought |

**Boss problem 2:** (a) For a hash with an $n=256$-bit output, estimate how many random inputs you must hash before a collision is more likely than not, and give the general formula in $n$. (b) Explain why the naive MAC $t = H(k\,\Vert\,m)$ built on a Merkle–Damgård hash is forgeable by a length-extension attack, and how HMAC's two-key nesting stops it. *(Worked answer: (a) roughly $1.177\cdot 2^{n/2}\approx 2^{128}$ hashes — the birthday bound $\sqrt{2^{n}}$. (b) Knowing $t=H(k\Vert m)$ hands the attacker the internal chaining state after $k\Vert m$, so they extend it to compute a valid $t' = H(k\Vert m\Vert \text{pad}\Vert m')$ without knowing $k$ — a forgery on a longer message. HMAC $= H\big((k\oplus\text{opad})\,\Vert\,H((k\oplus\text{ipad})\,\Vert\,m)\big)$ re-hashes the inner digest under a second derived key, so the value the attacker sees is not a chaining state they can continue.)*

### Module 3: Public-key cryptography

The conceptual leap that makes the open internet possible: two strangers who share *no* prior secret can still communicate privately. Every scheme here rests on a number-theoretic problem believed hard — the [number-theory](../number-theory/syllabus.md) toolkit finally earning its keep, with costs accounted à la [algorithms](../algorithms/syllabus.md).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The number-theoretic toolkit | Reload the hard problems public-key crypto stands on | fast modular exponentiation, groups & $(\mathbb Z/n)^\times$, discrete-log problem, factoring hardness |
| 3.2 | Diffie–Hellman key exchange | Agree on a shared secret over a public channel | DLP, computational/decisional DH (CDH/DDH), man-in-the-middle, ephemeral keys |
| 3.3 | RSA encryption | Build a trapdoor from the difficulty of factoring | RSA trapdoor, correctness via Euler's theorem, textbook-RSA insecurity, OAEP padding |
| 3.4 | ElGamal encryption | Turn Diffie–Hellman into a public-key cipher | ElGamal scheme, DDH-based security, randomized ciphertexts, multiplicative homomorphism |
| 3.5 | Elliptic-curve cryptography | Get RSA-strength security with tiny keys | elliptic-curve group law, ECDH, ECDLP, why 256-bit EC ≈ 3072-bit RSA |
| 3.6 | Hybrid encryption: KEM/DEM | Marry public-key agility to symmetric speed | key encapsulation, data encapsulation, why real systems never public-key-encrypt bulk data |

**Boss problem 3:** Work in $\mathbb Z_{23}^\times$ with generator $g=5$. Alice's secret is $a=6$, Bob's is $b=15$: compute both public values and the shared Diffie–Hellman secret *two ways* to confirm they match. Then set up textbook RSA with $p=5,\,q=11$ and public exponent $e=3$: find the private exponent $d$ and encrypt $m=7$. Finally, say what a passive man-in-the-middle can and cannot compute, and why textbook RSA needs padding. *(Worked answer: $A=5^6\equiv 8$, $B=5^{15}\equiv 19 \pmod{23}$; shared secret $s = B^{a} = A^{b} \equiv 2 \pmod{23}$. RSA: $n=55$, $\varphi(n)=40$, $d = 3^{-1}\equiv 27 \pmod{40}$, ciphertext $c = 7^3 = 343 \equiv 13 \pmod{55}$. The eavesdropper sees $g,p,A,B$ but recovering $a,b,$ or $s$ means solving the discrete log; textbook RSA is deterministic, so it leaks equality of plaintexts and is malleable — OAEP randomizes and binds it.)*

### Module 4: Signatures, protocols, and zero-knowledge

Encryption hides content; this module proves *identity and intent*. Signatures make a message undeniably yours, certificates scale that trust to the whole web, and the protocol taste — commitments, secret sharing, zero-knowledge — shows cryptography doing things that sound impossible. It closes on the quantum threat that reshapes the field.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Digital signatures | Sign so anyone can verify but no one can forge | RSA-FDH, (EC)DSA, EUF-CMA security, sign-with-private / verify-with-public |
| 4.2 | Public-key infrastructure and certificates | Trace real-world trust from a root CA to a website | certificates, certificate authorities, chains of trust, the TLS handshake at a glance |
| 4.3 | Commitments and secret sharing | Lock in a value privately; split a secret so $t$ of $n$ reveal it | hiding/binding commitments, Pedersen commitment, Shamir $(t,n)$ sharing, Lagrange reconstruction |
| 4.4 | Zero-knowledge proofs | Prove you know a secret while revealing nothing about it | completeness / soundness / zero-knowledge, Schnorr identification, Fiat–Shamir, a taste of MPC |
| 4.5 | Post-quantum cryptography | See what a quantum computer breaks and what replaces it | Shor vs. RSA/DH, Grover vs. symmetric keys, lattices & LWE, NIST standards |

**Boss problem 4:** (a) Run Shamir $(2,n)$ secret sharing over $\mathbb Z_{17}$ with polynomial $f(x)=s+3x$ and secret $s=10$: compute the shares at $x=1,2,3$, then reconstruct $s$ from the shares at $x=2$ and $x=3$ by Lagrange interpolation and confirm you recover $10$. (b) State the three properties a zero-knowledge proof of knowledge must satisfy, and explain how the Fiat–Shamir transform turns Schnorr's interactive identification protocol into a non-interactive signature. *(Worked answer: (a) shares $f(1)=13,\ f(2)=16,\ f(3)=19\equiv 2 \pmod{17}$; interpolating at $x=0$ from $(2,16),(3,2)$ gives $s = 16\cdot\frac{0-3}{2-3} + 2\cdot\frac{0-2}{3-2} \equiv 48 - 4 \equiv 10 \pmod{17}$. (b) Completeness — an honest prover convinces the verifier; soundness — a prover who lacks the secret fails except with negligible probability; zero-knowledge — the transcript can be simulated without the secret, so it leaks nothing. Fiat–Shamir replaces the verifier's random challenge with a hash of the prover's commitment (and the message), removing the interaction and yielding a signature secure in the random-oracle model.)*

## Sources of truth

- Katz & Lindell, *Introduction to Modern Cryptography* — the definitional and provable-security backbone; notation and rigor level.
- Boneh & Shoup, *A Graduate Course in Applied Cryptography* — construction details (modes, AEAD, KEM/DEM) and modern framing.
- Ferguson, Schneier & Kohno, *Cryptography Engineering* — practical intuition and the "why systems fail" perspective.
- Menezes, van Oorschot & Vanstone, *Handbook of Applied Cryptography* — reference for number-theoretic and public-key algorithms.

<!-- 2026-08-04: 21 lessons across 4 modules (target ~20); within tolerance. Module 1 runs to 6 lessons so Shannon's perfect-secrecy proof and the pseudorandomness pivot each get their own lesson rather than being crammed together. -->
</content>
</invoke>

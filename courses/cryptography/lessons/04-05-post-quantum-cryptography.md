# Cryptography · Lesson 4.5: Post-quantum cryptography

> ⏱ ~15 min · Module 4: Signatures, protocols, and zero-knowledge · Builds on: [3.1 (the number-theoretic toolkit)](03-01-the-number-theoretic-toolkit.md), [3.6 (hybrid encryption: KEM/DEM)](03-06-hybrid-encryption-kem-dem.md) · Unlocks: [`quantum-computing`](../../quantum-computing/syllabus.md)

## Why this matters

Every public-key scheme in Module 3 rests on one of two problems: factoring, or the discrete logarithm. Both are believed hard for classical computers, and [3.1](03-01-the-number-theoretic-toolkit.md) priced them carefully.

Shor's algorithm solves both in polynomial time on a quantum computer. Not faster — **polynomial**, which means no key size saves them. A cryptographically relevant quantum computer does not weaken RSA and elliptic curves; it ends them.

Symmetric cryptography fares far better, and the asymmetry between the two halves of this course is the most important practical fact in the lesson. It is also why the migration is happening now, years before any such machine is known to exist: traffic recorded today can be decrypted the day one arrives.

## The idea

**Shor, in one sentence.** Factoring reduces to finding the period of the function $f(a) = x^{a} \bmod N$, and a quantum computer finds periods efficiently using the quantum Fourier transform, because superposition lets it evaluate $f$ across all inputs at once and interference makes the period visible in the measurement statistics. The same machinery solves the discrete logarithm, in $(\mathbb{Z}/p)^{\times}$ and on elliptic curves alike. **Curves are not safer here — they are worse**, because their smaller parameters need fewer qubits.

**Grover, in one sentence.** Unstructured search over $N$ possibilities takes $\sqrt{N}$ quantum steps instead of $N$, so a $k$-bit key search drops from $2^{k}$ to $2^{k/2}$.

The consequence is a clean division:

- **Public-key cryptography built on factoring or discrete logs is broken.** RSA, finite-field Diffie–Hellman, ElGamal, ECDH, ECDSA, EdDSA — all of Module 3 and most of Module 4.
- **Symmetric cryptography is weakened, not broken.** Double the key and you are back where you started: AES-256 retains 128 bits of security against Grover. Hash functions likewise, so SHA-384 or SHA-512 replaces SHA-256 where a margin is wanted.

Then the timing argument, which is the part that drives budgets. **Harvest now, decrypt later.** An adversary recording encrypted traffic today decrypts it the day the machine works. So the deadline for key exchange is not "when quantum computers exist" but "now, minus the number of years your data must stay secret." Signatures are different: a signature only has to resist a machine existing at the moment of verification, so their deadline is genuinely later — except for keys with decade-long lifetimes, such as root certificates and firmware signing keys.

**What replaces them.** The leading family is **lattices**, and the intuition is one line: solving a system of linear equations is easy, and solving one with a little noise added is not. Recovering $\mathbf{s}$ from $A\mathbf{s} = \mathbf{b}$ is Gaussian elimination; recovering it from $A\mathbf{s} + \mathbf{e} = \mathbf{b}$ with small random $\mathbf{e}$ is **Learning With Errors**, believed hard for classical *and* quantum computers. Elimination fails because it amplifies the noise catastrophically.

The other family worth knowing is **hash-based signatures**, whose security rests on nothing but a hash function's collision and preimage resistance ([2.1](02-01-cryptographic-hash-functions.md)). They are the conservative choice: no new assumption, decades of confidence, at the cost of large signatures.

## The formal version

> **Shor's algorithm.** Factors an $n$-bit integer, and computes discrete logarithms in a group of $n$-bit order, in $O(n^{3})$ quantum gate operations (with polynomial classical post-processing).

Compare with [3.1](03-01-the-number-theoretic-toolkit.md)'s classical $L_n[1/3, 1.923]$, which is subexponential. **The move from subexponential to polynomial is the whole story**: at 3072 bits the classical work is about $2^{139}$ and Shor's is on the order of $3072^{3} \approx 2^{35}$ operations, modulo the very large constants and error-correction overhead that separate logical from physical qubits.

> **Grover's algorithm.** Finds a marked item among $N$ with $\Theta(\sqrt{N})$ evaluations of the test function, and this is **provably optimal** for unstructured search.

Two caveats that keep AES-128 in service. Grover's iterations are **inherently sequential** — the quadratic speedup does not parallelise the way classical brute force does, so $m$ machines give only a $\sqrt{m}$ improvement — and each iteration requires a full coherent evaluation of AES inside the quantum circuit, which is expensive. NIST's assessment is that AES-128 remains acceptable, with AES-256 recommended for long-lived data.

| Primitive | Classical | Quantum | Verdict |
|---|---|---|---|
| RSA-3072 | $\approx 2^{139}$ | polynomial (Shor) | broken |
| ECDH / ECDSA P-256 | $2^{128}$ | polynomial (Shor) | broken |
| AES-128 | $2^{128}$ | $2^{64}$ iterations (Grover) | acceptable |
| AES-256 | $2^{256}$ | $2^{128}$ iterations | safe |
| SHA-256 preimage | $2^{256}$ | $2^{128}$ | safe |
| SHA-256 collision | $2^{128}$ | $\approx 2^{85}$ (BHT, with huge memory) | safe in practice |

> **Learning With Errors (LWE).** Given $A \in \mathbb{Z}_q^{m \times n}$ and $\mathbf{b} = A\mathbf{s} + \mathbf{e} \bmod q$ with $\mathbf{s}$ secret and $\mathbf{e}$ drawn from a narrow distribution, recover $\mathbf{s}$. **Decisional LWE** asks only to distinguish $(A, \mathbf{b})$ from $(A, \mathbf{u})$ with $\mathbf{u}$ uniform.

Regev proved LWE is as hard as worst-case lattice problems under a quantum reduction — an unusually strong foundation, since most assumptions in this course are average-case with no worst-case backing. **Module-LWE**, used by the standards, adds polynomial-ring structure to shrink keys, trading a little of that confidence for practicality.

The standards, as of 2024:

| Standard | Scheme | Role | Public key | Ciphertext / signature |
|---|---|---|---|---|
| FIPS 203 | ML-KEM-768 (Kyber) | key encapsulation | 1,184 B | 1,088 B |
| FIPS 204 | ML-DSA-65 (Dilithium) | signature | 1,952 B | 3,309 B |
| FIPS 205 | SLH-DSA-128s (SPHINCS+) | signature, hash-based | 32 B | 7,856 B |
| — | Falcon-512 | signature, compact | 897 B | 666 B |

For scale, X25519's public key is 32 bytes and an Ed25519 signature is 64. **The migration's cost is bytes, not seconds** — these schemes are computationally fast, often faster than elliptic curves, and the pain is in handshake sizes, packet fragmentation, and certificate chains that suddenly do not fit.

**Hash-based signatures** deserve their own note because they assume nothing new. Lamport's one-time signature publishes $2k$ hash preimages and reveals one per message bit; Merkle trees ([2.2](02-02-the-birthday-bound-and-merkle-damgard.md)) combine many one-time keys under a single root; SPHINCS+ makes the whole thing stateless. Their security rests **only** on the hash function, so if lattices fall they are the fallback — which is exactly why NIST standardised one alongside the lattice schemes.

**Deployment is hybrid.** Current TLS deployments use X25519 combined with ML-KEM, with the shared secret derived from both, so the connection is secure if *either* holds — the combiner construction of [3.6](03-06-hybrid-encryption-kem-dem.md)'s P3. This hedges against both a quantum computer and a classical break of a young scheme, and the hedge is not paranoia: SIKE, a NIST alternate candidate, was broken **on a laptop in an hour** in 2022, by classical mathematics, after years of analysis.

## Picture

![A two-column comparison. The left column, headed Shor, lists RSA with factoring, finite-field Diffie-Hellman with discrete log, and elliptic-curve schemes with the curve discrete log, each marked broken, with a note that no key size helps because the attack drops to polynomial time. The right column, headed Grover, lists AES-128, AES-256 and SHA-256 with their square-root iteration counts, noting that doubling the key restores the original level and that the iterations are sequential. Below, a wide panel explains harvest now decrypt later and why key exchange must migrate before signatures.](assets/04-05-fig1.svg)

The figure is the migration plan in one image. **The left column has no engineering response** — there is no parameter to increase — so those schemes must be replaced. **The right column has a trivial one**: change a constant. And the panel below explains why the two columns have different deadlines, which is the question every organisation planning this work actually has to answer.

## Worked examples

**Example 1 — reading the timing argument as arithmetic.**

An organisation holds medical records that must stay confidential for 40 years. Suppose a cryptographically relevant quantum computer arrives in year $Q$, and the organisation migrates its key exchange in year $M$. Data encrypted in year $t$ is exposed if an adversary recorded it and $Q$ arrives before its secrecy requirement expires:

$$t + 40 > Q \quad \text{and} \quad t < M.$$

So every year of delay in migrating adds a year of records to the exposed set, and the set is non-empty as soon as $M > Q - 40$. Taking a plausible planning estimate of $Q = 2040$: to have **no** exposed records the organisation must have completed migration by $2000$ — which is impossible, so some exposure is already certain, and the only decision left is how much.

**This is Mosca's inequality**, usually written: if the time your data must stay secret, plus the time your migration takes, exceeds the time until a quantum computer exists, you are already late. The unusual feature of this deadline is that **it has partly passed**, which is a genuinely different planning situation from ordinary obsolescence and explains why national agencies began issuing migration timelines well before any machine existed.

Contrast signatures. A signature verified today needs only to be unforgeable today, so a forger with a machine in 2040 cannot retroactively forge a 2025 software update that was already installed. The exception is keys that are still trusted in 2040: **a root certificate issued now with a 25-year validity, or a firmware key burned into hardware, must be post-quantum today** — which is why code-signing and PKI roots are migrating on a faster clock than ordinary TLS certificates.

**Example 2 — sizing the handshake, and where it hurts.**

Compare a classical and a hybrid TLS key exchange, counting only the key-exchange material.

*Classical, X25519.* Client sends a 32-byte public key; server sends 32 bytes. Total on the wire: **64 bytes**.

*Hybrid, X25519 + ML-KEM-768.* Client sends $32 + 1{,}184 = 1{,}216$ bytes; server sends $32 + 1{,}088 = 1{,}120$ bytes. Total: **2,336 bytes**, a factor of 36.

Now the consequence that matters. A typical path MTU is 1,500 bytes, and the client's first flight must also carry the ClientHello's cipher suites, extensions and server name. At 1,216 bytes of key material the flight exceeds one packet, so it fragments — and for QUIC, whose initial packets have deliberately constrained amplification limits, and for DNS over UDP, this has caused measurable connection failures on paths with middleboxes that mishandle fragments.

**The cryptography was the easy part.** The schemes verify and encapsulate in microseconds; the deployment problem is that the internet's packet-size assumptions were set decades ago and a kilobyte of new key material violates them. That is worth sitting with, because it is the general shape of cryptographic migration: the mathematics lands years before the ecosystem does.

Signatures make it worse. A certificate chain with three ML-DSA signatures adds about $3 \times 3{,}309 \approx 10$ kB to a handshake that previously carried 192 bytes of Ed25519 signatures — which is why proposals to shorten chains, suppress intermediate certificates, and use Falcon's smaller signatures are all under active discussion.

## Watch out

- You might think doubling RSA key sizes buys time against a quantum computer. It buys essentially none. Shor's cost is cubic in the key length, so moving from 2048 to 4096 bits multiplies the quantum attacker's work by eight while multiplying your own by eight as well. Only a change of assumption helps.
- You might think Grover halves the security of everything symmetric, so AES-128 is dead. The $2^{64}$ figure counts sequential quantum iterations, each running a full AES circuit coherently, and the speedup barely parallelises. AES-128 is judged acceptable; the prudent response for long-lived data is AES-256, not panic.
- You might think a NIST standard means the scheme is safe forever. SIKE reached the final round and was then broken in an hour on one laptop, classically. Post-quantum schemes are young, which is precisely why deployments are hybrid — so that a break of the new scheme leaves the old one still standing.

## One-liner

> Shor ends factoring and discrete logs outright while Grover merely halves symmetric exponents, so the public-key half of this course must be rebuilt on lattices and hashes — and because traffic recorded today is decrypted later, the deadline for key exchange has already passed.

## Problems

**P1 (🟢)** For each, state whether a cryptographically relevant quantum computer breaks it, weakens it, or leaves it unaffected, with a one-line reason: (a) AES-256-GCM; (b) ECDSA on P-256; (c) SHA-256 used for file integrity; (d) a one-time pad; (e) RSA-4096 signatures; (f) Shamir secret sharing.

**P2 (🟡)** A company encrypts customer records with AES-256-GCM under keys transported by RSA-3072. (a) State which half is at risk and which is not. (b) Explain why an adversary who records the traffic today can read it in 2040, being explicit about which value she recovers first. (c) Give the minimal change that fixes it and say why the symmetric layer need not change.

**P3 (🔴, optional)** A team must choose a post-quantum signature for firmware images stored in read-only memory on devices with a 20-year service life, where the verification key is burned in at manufacture and the signature is stored in a fixed 8 kB region. (a) Evaluate ML-DSA-65, Falcon-512 and SLH-DSA-128s against the constraints, using the sizes in this lesson. (b) State the non-size consideration that should dominate here and which scheme it favours. (c) Give your recommendation and the one hedge you would add.

<details>
<summary>Solutions</summary>

**P1** (a) **Weakened, acceptably.** Grover reduces key search from $2^{256}$ to $2^{128}$ iterations, which leaves a full 128-bit margin. No change needed.

(b) **Broken.** Shor solves the elliptic-curve discrete logarithm in polynomial time, so the private key is recoverable from the public key. No parameter choice helps.

(c) **Weakened, harmlessly.** Grover reduces preimage search to $2^{128}$ and the best quantum collision attack (BHT) to around $2^{85}$ — but with memory requirements that make it uncompetitive in practice. File integrity is fine.

(d) **Unaffected.** The one-time pad is information-theoretically secure ([1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)), so no computational device of any kind touches it. Quantum computers are faster, not omniscient, and perfect secrecy is a statement about information rather than about effort.

(e) **Broken.** Shor factors the modulus in polynomial time, and 4096 bits is cubic-time work for the attacker. Note the *signature* framing matters for timing: existing signatures on already-installed software are not retroactively forgeable, but the key must not still be trusted when the machine exists.

(f) **Unaffected.** Shamir sharing is information-theoretically perfect ([4.3](04-03-commitments-and-secret-sharing.md)), so $t-1$ shares reveal nothing to any adversary whatsoever. Like the one-time pad, it survives by not relying on a hardness assumption in the first place.

**P2** (a) **The RSA key transport is at risk; the AES-256-GCM layer is not.** AES-256 retains 128 bits against Grover, and GCM's authentication inherits the same margin. The asymmetric half is the entire exposure.

(b) The adversary records the full session, including the RSA-encrypted key-transport message. In 2040 she runs Shor on the server's 3072-bit modulus, **recovering the private exponent $d$ first**; with $d$ she decrypts the recorded key-transport message to obtain the AES session key; with that she decrypts the recorded ciphertext.

Note that she never attacks AES. **The strong layer is bypassed because the weak layer carried its key**, which is the general shape of harvest-now-decrypt-later and the reason the strength of the symmetric layer offers no comfort at all here.

There is a second, independent reason this design is exposed: RSA key transport has **no forward secrecy** ([4.2](04-02-public-key-infrastructure-and-certificates.md)), so even classically, a single future compromise of the server's key decrypts all recorded sessions. The quantum threat makes that compromise a matter of time rather than of luck.

(c) The minimal change is to replace RSA key transport with a **hybrid key encapsulation**: X25519 combined with ML-KEM-768, with the session key derived from both shared secrets. This fixes the quantum exposure and, as a side effect, restores forward secrecy, since the classical half is ephemeral.

The symmetric layer need not change because AES-256-GCM is already at the recommended level. Keeping it is also what makes the migration cheap: the **KEM/DEM composition theorem** ([3.6](03-06-hybrid-encryption-kem-dem.md)) says a CCA-secure KEM plus a secure AEAD gives a CCA-secure scheme, so the KEM can be swapped without reproving or re-implementing anything in the data path. The modularity proved in that lesson is what makes this a configuration change rather than a rewrite.

**P3** (a) Against the 8 kB signature region:

- **ML-DSA-65**: 3,309-byte signature, 1,952-byte key. Fits comfortably, with room for the key and metadata. Fast to verify.
- **Falcon-512**: 666-byte signature, 897-byte key. Fits with enormous margin — the most space-efficient option by an order of magnitude.
- **SLH-DSA-128s**: 7,856-byte signature, 32-byte key. **Fits, but only just** — 98 percent of the region, leaving nothing for alignment, headers or a future parameter change. The tiny public key is attractive for a burned-in key, but the signature is the binding constraint.

(b) The dominant consideration is **assumption longevity**, not size. The device cannot be updated to a new algorithm — the verification key is in read-only memory and the service life is 20 years — so the scheme must still be trusted in 2045. Lattice cryptography is roughly a decade old in deployment terms, and SIKE's collapse is a live reminder that young assumptions fail.

This favours **SLH-DSA**, whose security rests only on the hash function's preimage and collision resistance ([2.1](02-01-cryptographic-hash-functions.md)) — the oldest and best-understood assumption in the course, and one Grover only halves. There is also an implementation argument: Falcon's signing uses floating-point Gaussian sampling that is notoriously difficult to make constant-time, though that affects the signer rather than the device.

(c) **Recommendation: SLH-DSA-128s, if the signature region can be enlarged to at least 12 kB; otherwise ML-DSA-65.** The 98 percent fit is not an engineering margin, and a device that cannot be updated is the wrong place to be one parameter change away from not fitting.

The hedge: **verify against two independent signatures**, one hash-based and one lattice-based, accepting the image only if both verify — or, if space forbids two, burn in **two verification keys** and accept either, so that a break of one scheme can be handled by re-signing future images under the other. This is the combiner idea from [3.6](03-06-hybrid-encryption-kem-dem.md) applied to signatures, and on a device that will outlive the current confidence in any single post-quantum assumption, it is the difference between a bad decade and a recall.

</details>

## Flashback

**From Lesson 2.2 (the birthday bound and Merkle–Damgård):** A system uses SHA-256 and wants 128 bits of collision resistance against a quantum adversary. (a) State the classical collision cost and the best quantum collision cost. (b) State whether SHA-256 still meets the requirement, and what the honest answer depends on. (c) State what a conservative designer does and what it costs.

<details>
<summary>Solution</summary>

(a) Classically, the birthday bound gives collisions at about $2^{n/2} = 2^{128}$ work for SHA-256.

The best known quantum collision algorithm is Brassard–Høyer–Tapp, which finds a collision in about $2^{n/3} = 2^{85}$ quantum operations — but it requires roughly $2^{85}$ **quantum-accessible memory** as well, storing and querying a table of that size in superposition.

(b) **On the raw exponent, no: $2^{85}$ is below the requested 128 bits.** On any realistic accounting, yes, and the honest answer depends entirely on **how you price memory.**

The $2^{85}$ figure charges nothing for a $2^{85}$-element quantum random-access memory, a device nobody knows how to build and whose existence is, by most estimates, a larger engineering problem than the quantum computer attached to it. Under models that charge for memory and for the physical wiring of large memories — which are the models taken seriously for cost estimation — BHT's advantage over classical collision search shrinks to almost nothing, and some analyses find it never beats a classical parallel birthday search at all.

So the answer depends on a modelling choice, not on a mathematical fact, and this is worth noticing as a general habit: **an attack's exponent is not its cost.** The same caution applies to Grover, whose sequential iterations and expensive circuits make $2^{64}$ a very different number from a classical $2^{64}$.

(c) A conservative designer **moves to SHA-384 or SHA-512** where a large margin is wanted, which restores $2^{128}$ collision resistance even under the aggressive BHT accounting.

The cost is small and worth stating precisely: digests grow from 32 to 48 or 64 bytes, which matters in certificate chains, Merkle proofs and anywhere hashes are stored in bulk; SHA-512 is actually *faster* than SHA-256 on 64-bit hardware, so throughput is usually unaffected or improved; and SHA-512 has the incidental benefit of immunity to length extension when truncated, as SHA-512/256 is. Compared with the public-key migration this is a trivially cheap precaution, which is exactly why it is the one most often taken early.

</details>

## Connections

- **Backward:** everything Shor breaks was priced classically in [3.1](03-01-the-number-theoretic-toolkit.md); everything that survives does so either by having no hardness assumption ([1.2](01-02-perfect-secrecy-and-the-one-time-pad.md), [4.3](04-03-commitments-and-secret-sharing.md)) or by resting on a hash ([2.1](02-01-cryptographic-hash-functions.md)); the drop-in migration is possible only because [3.6](03-06-hybrid-encryption-kem-dem.md) made the KEM a module.
- **Forward:** [`quantum-computing`](../../quantum-computing/syllabus.md) builds the machinery this lesson has only named — superposition, the quantum Fourier transform, period finding, and Grover's amplitude amplification — and proves the complexity claims taken on trust here.
- **Sideways:** the LWE problem is noisy linear algebra, so its hardness is the failure of Gaussian elimination under perturbation, a numerical-stability question in disguise ([`numerical-analysis` 3.2](../../numerical-analysis/lessons/03-02-cholesky-conditioning.md)); and Grover's optimality proof is a query lower bound of the same species as the comparison-sort bound in [`algorithms` 1.4](../../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md).

## Closing the course

You began by breaking a substitution cipher with a histogram and asking what "secure" could possibly mean. The answer took four modules.

**Perfect secrecy exists and is unaffordable** ([1.2](01-02-perfect-secrecy-and-the-one-time-pad.md), [1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md)). Shannon proved the key must be as large as the message, so everything practical trades that guarantee for a computational one: secure *against efficient adversaries*, under an assumption nobody has proved ([1.4](01-04-computational-security-and-pseudorandomness.md)).

**From that one trade, everything follows.** A pseudorandom function gives block ciphers and modes ([1.5](01-05-pseudorandom-functions-and-block-ciphers.md), [1.6](01-06-modes-of-operation.md)); hashing gives integrity, MACs and authenticated encryption ([2.1](02-01-cryptographic-hash-functions.md)–[2.4](02-04-authenticated-encryption.md)); number-theoretic hardness gives key exchange and public-key encryption ([3.1](03-01-the-number-theoretic-toolkit.md)–[3.6](03-06-hybrid-encryption-kem-dem.md)); signatures and certificates give identity ([4.1](04-01-digital-signatures.md), [4.2](04-02-public-key-infrastructure-and-certificates.md)); and commitments, sharing and zero-knowledge give protocols between parties who distrust each other ([4.3](04-03-commitments-and-secret-sharing.md), [4.4](04-04-zero-knowledge-proofs.md)).

Three habits are worth more than any construction in the course.

**Read the reduction, not the scheme.** Every security claim here has the form "breaking this is as hard as that." Ask what "that" is, and whether you believe it. A scheme with no such statement is not secure, it is merely unbroken.

**Watch the randomness.** The same failure appeared in six lessons wearing six costumes: the two-time pad ([1.3](01-03-shannons-theorem-and-the-price-of-perfect-secrecy.md)), the repeated CTR nonce ([1.6](01-06-modes-of-operation.md)), GCM's forbidden attack ([2.4](02-04-authenticated-encryption.md)), ElGamal's reused exponent ([3.4](03-04-elgamal-encryption.md)), ECDSA's repeated $k$ ([4.1](04-01-digital-signatures.md)), and Schnorr's rewound commitment ([4.4](04-04-zero-knowledge-proofs.md)). It is the most reliable way to lose a key.

**Correct primitives compose into broken systems.** Textbook RSA is a fine permutation and a terrible cipher. MAC-then-encrypt uses two secure pieces and yields a padding oracle. A valid certificate proves nothing without a transcript signature. The interesting failures are almost never in the mathematics.

And the field is not finished. [4.5](04-05-post-quantum-cryptography.md) is a live migration whose deadline has partly passed, zero-knowledge proofs are moving from theory into infrastructure, and the assumptions everything rests on remain, as they have since 1976, unproven and load-bearing.

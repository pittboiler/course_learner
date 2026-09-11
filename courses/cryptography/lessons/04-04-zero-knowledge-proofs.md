# Cryptography · Lesson 4.4: Zero-knowledge proofs

> ⏱ ~15 min · Module 4: Signatures, protocols, and zero-knowledge · Builds on: [4.3 (commitments and secret sharing)](04-03-commitments-and-secret-sharing.md), [4.1 (digital signatures)](04-01-digital-signatures.md) · Unlocks: [4.5 (post-quantum cryptography)](04-05-post-quantum-cryptography.md)

## Why this matters

Everything so far has been about hiding data or authenticating it. This lesson does something that sounds impossible: **convince someone that a statement is true while telling them nothing except that it is true.**

Not "tell them a little". Nothing — in the precise sense that they could have produced the entire conversation themselves, without you, from public information alone.

The idea was strange enough in 1985 to be doubted and is now infrastructure. It underlies anonymous credentials, private cryptocurrencies, and the succinct proofs that let a phone verify a computation it could never run. It is also where the shape of Schnorr and EdDSA signatures ([4.1](04-01-digital-signatures.md)) finally makes sense: **a signature is a zero-knowledge proof of key ownership with the interaction removed.**

## The idea

The cave, which is the standard picture and worth having.

A ring-shaped cave has one entrance and a door deep inside that opens only to a password. Peggy claims to know it. Victor waits outside while she enters and takes the left or right passage. He then shouts which side he wants her to come out of. If she knows the password she walks through the door and complies every time; if she does not, she can only come back the way she went in, and she is caught half the time.

Repeat twenty times and her chance of bluffing through is $2^{-20}$. And notice what Victor has learned: **nothing about the password.** He has watched her emerge from passages, which he could have filmed himself with an accomplice who was told the answers in advance.

That last observation is the definition, and it is the part people skip. Zero-knowledge is not "he didn't seem to learn anything". It is: **there is an efficient algorithm, the simulator, that produces transcripts indistinguishable from real ones without knowing the secret.** If a fake conversation is indistinguishable from a real one, the real one cannot contain information the fake one lacks.

Soundness is proved by a mirror-image thought experiment. Imagine rewinding the prover after the challenge and asking a different one. If she answers *both*, algebra extracts the secret — so anyone who could reliably answer any challenge must have known it. That is **special soundness**, and it upgrades a proof of a statement into a **proof of knowledge**.

Schnorr's protocol implements both ideas in three messages over a group where the discrete log is hard. Commit to randomness, receive a challenge, respond with a value that mixes the randomness, the challenge, and the secret. The response reveals nothing because the randomness masks the secret — a one-time pad again ([1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)) — and it proves everything because two responses to different challenges cancel the randomness and leave the secret.

Then **Fiat–Shamir** removes the interaction: replace the verifier's random challenge with a hash of the commitment. Nobody needs to be online, and if the message is hashed in too, the proof becomes a signature.

## The formal version

> **Definition.** An interactive proof system for a statement is **zero-knowledge** if it satisfies:
> - **Completeness.** An honest prover with a valid witness convinces an honest verifier with probability 1.
> - **Soundness.** A prover without a valid witness convinces the verifier with probability at most $\varepsilon$ (the soundness error).
> - **Zero-knowledge.** For every efficient verifier there is an efficient **simulator** that, given only the statement, outputs transcripts indistinguishable from real interactions.

In words: it always works, it cannot be faked, and it leaks nothing. The third is the subtle one, and the phrase to fix in memory is *"the verifier could have written the transcript himself."*

> **Proof of knowledge (special soundness).** There is an efficient **extractor** which, given two accepting transcripts sharing the same first message but with different challenges, outputs the witness.

> **Schnorr identification.** Public: group $G$ of prime order $q$, generator $g$, and $h = g^{x}$. The prover knows $x$.
> 1. **Commit.** Prover picks $r \leftarrow \mathbb{Z}_q$ and sends $t = g^{r}$.
> 2. **Challenge.** Verifier sends random $c \leftarrow \mathbb{Z}_q$.
> 3. **Response.** Prover sends $s = r + cx \bmod q$.
> 4. **Verify.** Accept if $g^{s} = t \cdot h^{c}$.

*Completeness.* $g^{s} = g^{r + cx} = g^{r}(g^{x})^{c} = t \cdot h^{c}$.

*Special soundness.* Given $(t, c, s)$ and $(t, c', s')$ both accepting with $c \ne c'$: subtracting the exponents gives $s - s' = (c - c')x$, so

$$x = \frac{s - s'}{c - c'} \bmod q.$$

Since $c \ne c'$ and $q$ is prime, the inverse exists. **Anyone who can answer two challenges on one commitment can compute $x$**, so a prover who succeeds with non-negligible probability must know it.

*Zero-knowledge (honest verifier).* The simulator runs **backwards**: pick $s \leftarrow \mathbb{Z}_q$ and $c \leftarrow \mathbb{Z}_q$ uniformly, then set

$$t := g^{s} h^{-c}.$$

The transcript $(t, c, s)$ satisfies the verification equation by construction, and its distribution is identical to a real one — in both cases $c$ and $s$ are uniform and independent, with $t$ determined by them. **The simulator never touches $x$.** So a real transcript contains exactly as much information about $x$ as a fake one, which is none.

> **Fiat–Shamir transform.** Replace the verifier's challenge with $c = H(g \Vert h \Vert t)$. The proof is then the non-interactive pair $(t, s)$, or equivalently $(c, s)$, verifiable by anyone. Secure in the random oracle model.

> **Schnorr signature.** Fiat–Shamir with the message hashed in: $c = H(t \Vert m)$, signature $(c, s)$ with $s = r + cx$. Verification recomputes $t' = g^{s}h^{-c}$ and checks $c = H(t' \Vert m)$.

**This is where [4.1](04-01-digital-signatures.md)'s $(r,s)$ shape comes from.** A signature is a proof of knowledge of the private key, bound to a message by hashing it into the challenge — and the nonce hazard is now transparent: $r$ is the commitment randomness, and reusing it across two different challenges is exactly the extractor's input, so an attacker runs the soundness proof against you to recover $x$.

Two ways the field extends this:

**Multiparty computation (MPC).** Several parties compute a function of their private inputs, learning the output and nothing else. Yao's millionaires' problem — who is richer, without revealing either fortune — is the founding example; constructions use garbled circuits or secret sharing ([4.3](04-03-commitments-and-secret-sharing.md)). MPC is deployed for private ad measurement, threshold signing, and cross-institution analytics.

**zk-SNARKs.** Succinct non-interactive arguments: a proof of an arbitrarily large computation that is a few hundred bytes and verifies in milliseconds. *Argument* rather than proof because soundness is computational; *succinct* because proof size does not grow with the statement. They power private transactions and rollups, at the cost of heavy proving time and, for some systems, a trusted setup whose discarded randomness would otherwise allow forging proofs.

## Picture

![A protocol diagram with a prover on the left and a verifier on the right. Three arrows cross between them: a commitment t equals g to the r going right, a random challenge c coming back left, and a response s equals r plus c x going right; the verifier accepts if g to the s equals t times h to the c. Below are two boxes. The left box, the extractor, explains that rewinding to get two challenges on the same commitment yields the secret as the ratio of response and challenge differences. The right box, the simulator, explains that choosing the response and challenge first and setting the commitment accordingly produces a verifying transcript without the secret.](assets/04-04-fig1.svg)

The two boxes are the whole lesson. **The extractor says the protocol is meaningful**: only someone who knows $x$ can handle an unpredictable challenge. **The simulator says it is safe**: the transcript can be manufactured, so it carries nothing. Both arguments use the same three values, read in different orders, and every zero-knowledge protocol you will meet has this pair at its core.

## Worked examples

**Example 1 — Schnorr, run and then broken.**

Work in the order-11 subgroup of $\mathbb{Z}_{23}^{\times}$ generated by $g = 2$; indeed $2^{11} = 2048 = 89 \cdot 23 + 1 \equiv 1$.

Peggy's secret is $x = 6$, so $h = 2^{6} = 64 \equiv 18 \pmod{23}$.

*An honest run.* Peggy picks $r = 4$ and sends $t = 2^{4} = 16$. Victor challenges with $c = 2$. Peggy responds

$$s = r + cx = 4 + 12 = 16 \equiv 5 \pmod{11}.$$

Victor checks: $g^{s} = 2^{5} = 32 \equiv 9$, and $t \cdot h^{c} = 16 \cdot 18^{2}$. Since $18^{2} = 324 = 14 \cdot 23 + 2 \equiv 2$, this is $16 \cdot 2 = 32 \equiv 9$. They match, so he accepts.

*The extractor.* Rewind Peggy to just after she sent $t = 16$ and challenge her with $c' = 5$ instead. Her response is $s' = 4 + 30 = 34 \equiv 1 \pmod{11}$. Now

$$x = \frac{s - s'}{c - c'} = \frac{5 - 1}{2 - 5} = \frac{4}{-3} \equiv \frac{4}{8} \pmod{11}.$$

Since $8 \cdot 7 = 56 = 5 \cdot 11 + 1$, we have $8^{-1} = 7$, so $x \equiv 4 \cdot 7 = 28 \equiv 6 \pmod{11}$. The secret, recovered.

**Rewinding is a thought experiment on paper and an actual attack in practice** — a prover who reuses her commitment randomness has handed the verifier both transcripts, which is precisely the ECDSA nonce failure of [4.1](04-01-digital-signatures.md) seen from the other side.

**Example 2 — the simulator, and what it proves.**

Same parameters, and now suppose you do **not** know $x$. Pick the response and challenge first: $s = 9$ and $c = 4$. Set

$$t := g^{s}h^{-c} = 2^{9} \cdot (18^{4})^{-1} \bmod 23.$$

Compute: $2^{9} = 512 = 22 \cdot 23 + 6 \equiv 6$. And $18^{4} = (18^{2})^{2} \equiv 2^{2} = 4$, whose inverse mod 23 is 6, since $4 \cdot 6 = 24 \equiv 1$. So $t = 6 \cdot 6 = 36 \equiv 13$.

Check the transcript $(13, 4, 9)$: $g^{s} = 2^{9} \equiv 6$, and $t \cdot h^{c} = 13 \cdot 4 = 52 \equiv 52 - 46 = 6$. **It verifies.**

So a complete, verifying Schnorr transcript was produced by someone with no knowledge of $x$ whatsoever. Two conclusions, and they must be held together.

**The transcript leaks nothing**, because a transcript anyone can forge cannot encode a secret only the prover has. That is the zero-knowledge property, proved rather than asserted.

**The transcript alone convinces nobody.** What convinced Victor in Example 1 was not the transcript but the *ordering*: he chose $c$ after seeing $t$, so Peggy could not have run the simulator. Strip the interaction away naively and the proof evaporates.

This is exactly what Fiat–Shamir repairs. Setting $c = H(t \Vert m)$ forces the challenge to depend on the commitment, so a simulator choosing $s$ and $c$ first would have to find $t$ with $H(t \Vert m) = c$ — a preimage, infeasible by [2.1](02-01-cryptographic-hash-functions.md). **The hash function replaces the verifier's freshness, which is why the transform needs the random oracle model and why it breaks if the commitment is left out of the hash.**

## Watch out

- You might think zero-knowledge means the verifier learns nothing at all. He learns the statement is true, which is often a great deal — that you hold an account, that you are over eighteen, that a transaction balances. The guarantee is that he learns **nothing beyond** it.
- You might think a single round with a small challenge space is fine. Soundness error is $1/|\mathcal{C}|$ per round: a one-bit challenge lets a cheat succeed half the time, and the cave needs twenty rounds. Schnorr gets away with one round because its challenge space is the full group order, so the error is $1/q$.
- You might think Fiat–Shamir is a free conversion. It is free only if the hash covers **everything** — the commitment, the statement, the public key, and the message. Omitting any of them has produced real breaks; the "frozen heart" class of vulnerabilities in proof systems was exactly this, a challenge that failed to bind part of the statement it was supposed to.

## One-liner

> A proof is zero-knowledge when the verifier could have written the transcript himself, and it is a proof of knowledge when answering two challenges on one commitment would give the secret away.

## Problems

**P1 (🟢)** In the order-11 subgroup of $\mathbb{Z}_{23}^{\times}$ with $g = 2$ and $h = g^{x} = 3$: (a) the prover commits $t = 2^{3} = 8$ and the verifier challenges $c = 4$; given that the prover's secret is $x = 8$, compute the response $s$ and verify the check equation. (b) State the probability that a prover who does not know $x$ passes a single round, and how that compares with the cave protocol.

**P2 (🟡)** A login system uses Schnorr identification instead of passwords: the server stores $h = g^{x}$ and the user proves knowledge of $x$ each time. (a) State the advantage over storing a password hash, being specific about what a server breach yields. (b) The implementer, wanting to save a round trip, has the server publish tomorrow's challenges in advance. Give the attack. (c) State the correct way to remove the round trip.

**P3 (🔴, optional)** A voting system encrypts each ballot with exponential ElGamal ([3.4](03-04-elgamal-encryption.md)) and requires a zero-knowledge proof that the encrypted value is 0 or 1. (a) State what a voter could do without the proof, and why the homomorphic tally makes it undetectable. (b) Explain why the proof must be a proof of *knowledge* of the plaintext, not merely a proof that a valid plaintext exists. (c) Name the transform that makes the proof non-interactive and state what must be hashed into the challenge, and why omitting it breaks the system.

<details>
<summary>Solutions</summary>

**P1** (a) First check the setup: $h = 3$ should equal $2^{x}$ for $x = 8$. The powers of 2 modulo 23 are $2, 4, 8, 16, 9, 18, 13, 3, 6, 12, 1$, so $2^{8} = 3$. Consistent.

The response, computed modulo the group order $q = 11$:

$$s = r + cx = 3 + 4 \cdot 8 = 35 \equiv 35 - 33 = 2 \pmod{11}.$$

Verification: $g^{s} = 2^{2} = 4$. And $t \cdot h^{c} = 8 \cdot 3^{4} \bmod 23$. Now $3^{4} = 81 = 3 \cdot 23 + 12 \equiv 12$, so $8 \cdot 12 = 96 = 4 \cdot 23 + 4 \equiv 4$. Both sides are 4, so the verifier accepts.

(b) A prover without $x$ can prepare for **one** challenge — by running the simulator, she fixes $t$ in a way that works for one particular $c$ — but the verifier picks $c$ uniformly from $\mathbb{Z}_{11}$ afterwards, so she succeeds with probability

$$\frac{1}{q} = \frac{1}{11} \approx 0.09.$$

The cave protocol has a **two**-element challenge space, so its per-round error is $1/2$ and it needs about twenty rounds to reach $2^{-20}$. Schnorr's challenge space is the whole group, so a single round at a realistic $q \approx 2^{256}$ has error $2^{-256}$. **Enlarging the challenge space is how you trade rounds for algebra**, and it is why practical protocols are three messages rather than forty.

**P2** (a) The server stores only $h = g^{x}$, a public value. A breach yields **nothing an attacker can use to log in**: recovering $x$ from $h$ is the discrete-log problem ([3.1](03-01-the-number-theoretic-toolkit.md)), not a dictionary search.

Contrast a password hash. Even salted and slowed with Argon2, a stolen verifier is attackable offline at whatever rate the KDF permits, and human passwords carry perhaps 30 to 40 bits of entropy ([2.1](02-01-cryptographic-hash-functions.md)). Here the secret is a uniform 256-bit scalar, so offline attack is not merely slow but impossible. **The breach stops being a password-cracking problem and becomes a discrete-log problem**, which is the whole point of the design — and it is precisely the reasoning behind passkeys.

(b) Publishing challenges in advance destroys the protocol, because the *only* thing preventing simulation is that the challenge is unpredictable when the commitment is chosen. An attacker who knows tomorrow's $c$ runs the simulator of Example 2: she picks $s$ at random, sets $t = g^{s}h^{-c}$ using the published $c$ and the public $h$, and sends $t$. When the server issues the expected $c$, she replies with $s$, and the check passes.

She has impersonated the user **using only public information**, with no knowledge of $x$ and no group operations beyond two exponentiations. Note that soundness fails completely rather than partially: her success probability is 1, not $1/q$.

(c) Remove the round trip with the **Fiat–Shamir transform**: the client computes its own challenge as

$$c = H(g \,\Vert\, h \,\Vert\, t \,\Vert\, \text{session context}),$$

and sends $(t, s)$ in a single message. Because $c$ depends on $t$ through a hash, the simulator's backwards construction is blocked — choosing $s$ and $c$ first would require finding a $t$ that hashes to the chosen $c$, a preimage.

The session context matters as much as the rest. Without a server-supplied nonce or session identifier inside the hash, the single-message proof is **replayable**: an eavesdropper captures $(t,s)$ and presents it again tomorrow. So the correct construction keeps one server-to-client message carrying a nonce, and saves the round trip on the proof itself rather than on freshness.

**P3** (a) Without the proof a voter can encrypt **any integer**, not just 0 or 1. Encrypting $g^{1000}$ adds a thousand votes to the tally; encrypting $g^{-500}$ subtracts five hundred from an opponent.

It is undetectable because the tally is computed homomorphically: the authority multiplies all ciphertexts and decrypts **once**, at the end, obtaining only the total. No individual ballot is ever decrypted — that is the privacy property the system is built around — so there is no stage at which a malformed ballot could be noticed. **The privacy mechanism and the fraud opportunity are the same mechanism**, which is why the proof is not an optional hardening step but a structural requirement.

(b) A proof that a valid plaintext *exists* is worthless here, because validity is a property of the ciphertext that an attacker can obtain without understanding it. Concretely, the attack of [3.4](03-04-elgamal-encryption.md)'s P2: take an honest voter's published ciphertext, which certainly encrypts 0 or 1, and **re-randomise** it by multiplying by an encryption of zero. The result is a different, valid ciphertext encrypting the same vote — so "there exists a valid plaintext" is true of it, and the copier never learned the vote.

That lets a ballot be copied, which breaks the election in two ways: it duplicates influence, and it correlates a coerced voter's ballot with a coercer's, defeating receipt-freeness. A **proof of knowledge** forces the submitter to demonstrate she can produce the plaintext and the encryption randomness — which the extractor would pull out of her — and a copier cannot, since she never had them.

(c) The **Fiat–Shamir transform** makes it non-interactive. The challenge must hash in:

- the **commitment** $t$, without which the simulator constructs a forged proof backwards (Example 2);
- the **ciphertext** being proved about, without which a proof can be detached from one ballot and attached to another;
- the **voter's identity** and the **election identifier**, without which a valid proof is replayable across voters or across elections.

Omitting any of these is a real break rather than a theoretical one. Omitting the commitment destroys soundness outright. Omitting the ciphertext or the voter identity restores exactly the ballot-copying attack the proof was added to prevent, since a proof that binds to nothing travels freely — and the system would then pass every cryptographic check while counting the wrong votes.

</details>

## Flashback

**From Lesson 3.2 (Diffie–Hellman key exchange):** A server wants to prove to a client that it knows the discrete log of its published value $h = g^{x}$, without revealing $x$, and proposes to do so by performing a Diffie–Hellman exchange and demonstrating it computed the right shared secret. (a) State whether this is a zero-knowledge proof, applying the definition. (b) State what the client learns, and whether that is a problem. (c) Compare with what Schnorr provides.

<details>
<summary>Solution</summary>

(a) **It is not zero-knowledge**, and the definition says why crisply. Zero-knowledge requires a simulator that produces indistinguishable transcripts without the witness. Here the transcript contains $g^{y}$, chosen by the client, together with the value $g^{xy}$ that only someone knowing $x$ (or $y$) can produce. A simulator that does not know $x$ **does** know $y$ if it is playing the client's role, so it can produce $g^{xy} = (g^{x})^{y}$ — meaning the protocol is simulatable for an *honest* client but not for a malicious one who supplies a group element without knowing its discrete log.

That is the gap. A cheating client can send a value $u$ whose discrete log she does not know — say, one derived from a third party's public key — and ask the server to raise it to $x$. The server then hands back $u^{x}$, which is a computation on an attacker-chosen input, and she has used the server as a **decryption oracle** rather than merely verifying it.

(b) The client learns $g^{xy}$, and in the honest case that is harmless since she could compute it herself from $g^{x}$ and her own $y$. In the cheating case she learns $u^{x}$ for a $u$ of her choosing, which is exactly a CDH oracle — enough to decrypt ElGamal ciphertexts addressed to the server ([3.4](03-04-elgamal-encryption.md)), and enough to break any scheme whose security rests on the server's $x$ staying unusable. **The problem is not information about $x$ itself but the capability the server has lent out**, which the zero-knowledge definition captures by requiring simulatability against *every* efficient verifier, not just honest ones.

(c) Schnorr provides exactly what is wanted with none of this exposure. The prover's response $s = r + cx$ is a scalar masked by fresh randomness, and the verifier's only input is a challenge $c$ — a number, not a group element the prover must operate on. There is nothing the verifier can hand over that turns the prover into an oracle, because **the prover never exponentiates an attacker-supplied value.**

The general design lesson, and it recurs throughout applied cryptography: **prove possession of a key by responding to a challenge you generate the randomness for, never by performing a private-key operation on data someone else chose.** The same principle explains why TLS 1.3's CertificateVerify signs a transcript the server itself helped build rather than decrypting a client-supplied blob ([4.2](04-02-public-key-infrastructure-and-certificates.md)).

</details>

## Connections

- **Backward:** the first move is a commitment ([4.3](04-03-commitments-and-secret-sharing.md)) and the response is a one-time pad over $\mathbb{Z}_q$ ([1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)); Fiat–Shamir needs [2.1](02-01-cryptographic-hash-functions.md)'s random-oracle heuristic, and the resulting object is [4.1](04-01-digital-signatures.md)'s Schnorr signature, whose nonce hazard is the extractor pointed at its owner.
- **Forward:** [4.5](04-05-post-quantum-cryptography.md) notes that Schnorr and Fiat–Shamir survive the move to post-quantum assumptions as a *template* — the three-move structure is reused over lattices — even though the discrete-log instance does not.
- **Sideways:** the simulation paradigm is a reduction in the sense of [`algorithms` 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md), and the theory of interactive proofs sits inside complexity theory as the class IP; zk-SNARKs are the constructive end of the same line, turning "verifying is easier than computing" from a complexity slogan into a deployed engineering property.

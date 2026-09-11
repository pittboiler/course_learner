# Cryptography · Lesson 4.2: Public-key infrastructure and certificates

> ⏱ ~15 min · Module 4: Signatures, protocols, and zero-knowledge · Builds on: [4.1 (digital signatures)](04-01-digital-signatures.md), [`computer-networks` 4.4 (network security, TLS)](../../computer-networks/lessons/04-04-network-security-tls-firewalls-attacks.md) · Unlocks: [4.3 (commitments and secret sharing)](04-03-commitments-and-secret-sharing.md)

## Why this matters

Three lessons have now ended with the same unpaid bill. Diffie–Hellman agrees a key with whoever answered ([3.2](03-02-diffie-hellman-key-exchange.md)). ElGamal encrypts to whatever public key you fetched ([3.4](03-04-elgamal-encryption.md)). Signatures verify against a public key you must already trust ([4.1](04-01-digital-signatures.md)).

Every one of them reduces the problem of *distributing secrets* to the problem of *authenticating public values* — and none of them solves that second problem. Public-key infrastructure is the answer the internet actually uses, and this lesson is about what it does, where it is fragile, and what has been bolted on to compensate.

[`computer-networks` 4.4](../../computer-networks/lessons/04-04-network-security-tls-firewalls-attacks.md) covers the TLS handshake as a message sequence — which record goes when, and what each supplies. This lesson covers the cryptographic content: what a certificate *is* as a signed object, how a chain is verified, why the server signs the transcript rather than merely presenting a certificate, and why revocation is the part that does not work.

## The idea

A **certificate** is not a credential in the everyday sense. It is a short document saying "this public key belongs to this name", signed by someone else. That is all it is: a data structure plus a signature over it.

That immediately raises the obvious objection. To verify the signature you need the signer's public key — so how do you trust *that* one? By another certificate, signed by someone further up. And that one? Eventually the recursion has to stop, and it stops at a **trust anchor**: a root certificate that arrived with your operating system or browser, signed by nobody who matters, trusted because it was shipped to you.

**The trust is bootstrapped by software distribution, not by mathematics.** Every guarantee in this lesson is conditional on your machine having received an honest trust store. That is a real and often-underappreciated assumption, and it is where the system's most serious failures have lived.

Verification then walks the chain upward: check the leaf's signature with the intermediate's key, the intermediate's with the root's, and stop when you reach a certificate already in the store. Along the way you check the things the signature does not automatically imply — that the name matches the site you asked for, that the validity dates bracket now, that each intermediate is actually permitted to issue certificates, and that the certificate has not been revoked.

One more step is easy to overlook and is the part that makes it work at all. **Presenting a certificate proves nothing** — certificates are public, and anyone can copy one. The server must additionally prove it holds the *private* key, which it does by signing the handshake transcript. Without that step a man-in-the-middle would simply forward the real server's certificate.

## The formal version

> **Certificate.** A signed statement $\mathrm{Cert} = \big(\text{subject}, pk_{\text{subject}}, \text{issuer}, \text{validity}, \text{extensions}, \sigma\big)$ where $\sigma = \mathrm{Sign}_{sk_{\text{issuer}}}(\text{everything else})$. In X.509 the body is the *to-be-signed* structure, and the signature covers it in full.

> **Chain verification.** Given a chain $C_0$ (leaf) $, C_1, \dots, C_k$ and a trust store $\mathcal{T}$, accept if and only if:
> 1. $\mathrm{Vrfy}_{pk_{i+1}}(C_i) = 1$ for each $i < k$, and $C_k \in \mathcal{T}$ or is signed by a member of it;
> 2. every certificate is within its validity window;
> 3. each $C_i$ for $i \ge 1$ carries `basicConstraints: CA = true`, with the path length within its stated limit;
> 4. the leaf's `subjectAltName` matches the requested host;
> 5. no certificate in the chain is revoked.

**Check 3 is not a formality.** A CA-capable certificate can sign further certificates for *any* name, so failing to check it means any site's ordinary leaf certificate can be used to mint a certificate for a bank. This exact omission was a widespread browser bug, and it is why the extension is marked critical.

> **The handshake's cryptographic content.** In TLS 1.3 the server sends its certificate chain, then
> $$\mathrm{CertificateVerify} = \mathrm{Sign}_{sk_{\text{site}}}\big(\text{context string} \,\Vert\, H(\text{handshake transcript so far})\big),$$
> followed by a Finished message carrying $\mathrm{HMAC}$ over the transcript under a handshake key derived from the ephemeral key exchange.

In words: the certificate says which key is authorised, the CertificateVerify proves possession of it, and both are bound to *this* handshake by covering the transcript. **Binding to the transcript is what prevents replay and downgrade**: an attacker cannot lift the signature into another connection, and cannot strip the strong cipher suites from the ClientHello without invalidating the hash the server signed.

Note the division of labour. The key exchange is ephemeral Diffie–Hellman ([3.2](03-02-diffie-hellman-key-exchange.md)), giving forward secrecy; the signature is used **only for authentication**, never to transport keys. TLS 1.3 removed RSA key transport entirely, so compromising the server's long-term key lets an attacker impersonate the server *going forward* but never decrypt recorded traffic.

**Revocation is the weak part**, and it is worth being precise about why.

| Mechanism | How it works | Problem |
|---|---|---|
| CRL | client downloads a list of revoked serial numbers | lists reach tens of megabytes; clients skip them |
| OCSP | client asks the CA whether a certificate is live | adds latency, leaks browsing to the CA, and fails open |
| OCSP stapling | the server presents a recent signed CA response | requires server support; still a freshness window |
| Short-lived certificates | validity of days, so revocation is expiry | requires automated issuance; now the dominant approach |

**Fails open is the crux.** A client that treats an unreachable OCSP responder as "not revoked" gives an attacker who can already intercept traffic the easy job of blocking one more connection. Since failing closed would take sites offline whenever a CA had an outage, browsers chose availability, and soft-fail revocation checking provides approximately no security against a network attacker. Short-lived certificates sidestep the problem rather than solving it.

> **Certificate Transparency.** Every issued certificate is submitted to public append-only logs built as Merkle trees ([2.2](02-02-the-birthday-bound-and-merkle-damgard.md)). A log returns a signed timestamp promising inclusion; anyone can request an **inclusion proof** ($\log_2 N$ hashes) that a certificate is in the tree, and a **consistency proof** that the tree only ever grew.

CT does not prevent misissuance. It makes misissuance **detectable**, because a domain owner monitoring the logs sees any certificate issued for their name. The 2011 DigiNotar compromise, in which a breached CA issued a working certificate for Google's domain used against Iranian users, went undetected for weeks; under CT it would have been visible within hours. **The design philosophy is worth naming: where prevention rests on hundreds of trusted parties all behaving, substitute detection plus accountability.**

## Picture

![A vertical chain of three certificate boxes. At the top is a self-signed root certificate, marked as present in the client's trust store. An arrow labelled signs runs down to an intermediate certificate, and another arrow runs down to a leaf certificate naming the website and carrying its public key. Annotations note that the server additionally proves possession of the leaf's private key by signing the handshake transcript, and that verification walks upward checking each signature with the parent's key until reaching a certificate already trusted.](assets/04-02-fig1.svg)

Two things the figure makes concrete. **Each arrow is one signature verification** — three certificates, two verifications, plus one for the transcript, so a handshake performs a handful of public-key operations regardless of how much data follows ([3.6](03-06-hybrid-encryption-kem-dem.md)'s division of labour again). And **the top box's trust has no cryptographic source**; it is trusted because it was installed.

## Worked examples

**Example 1 — what the trust store actually commits you to.**

A typical browser ships with roughly 150 root certificates, from dozens of organisations in many jurisdictions. Each root can sign intermediates; each intermediate can sign leaves. **Any one of them can issue a valid certificate for any domain name in the world.**

So the security of a connection to your bank is the security of the *weakest* of those roots and their delegated intermediates. Model it crudely: if each of $N$ independent authorities has probability $q$ of being compromised or coerced in a given year, the chance that at least one is, is $1 - (1-q)^{N}$. With $N = 150$ and $q = 0.001$, that is

$$1 - 0.999^{150} = 0.139,$$

about 14 percent per year. The numbers are invented and the model is crude, but the shape is not: **trust in this system is a series composition, so it multiplies the wrong way**, exactly as availability did in [`distributed-systems` 1.1](../../distributed-systems/lessons/01-01-why-distributed-systems-are-hard.md). Adding a trusted CA can only lower security.

The historical record bears this out — DigiNotar in 2011, Comodo the same year, TrustWave issuing an interception intermediate, Symantec's test certificates for domains it did not own. The responses have been structural rather than cryptographic: name constraints limiting an intermediate to particular domains, CAA records letting a domain name its permitted issuers, and above all Certificate Transparency.

**Example 2 — the size of a Certificate Transparency inclusion proof.**

A log holds $N = 10^{9}$ certificates in a Merkle tree. An inclusion proof is the sibling hash at each level from the leaf to the root:

$$\lceil \log_2 10^{9} \rceil = 30 \text{ hashes}.$$

At 32 bytes each that is **960 bytes** — under a kilobyte to prove that one specific certificate, out of a billion, is in a tree whose root the client already knows.

Compare the alternative. Downloading the log to check membership would be $10^{9} \times 32$ bytes of hashes alone, 32 gigabytes, and that is before the certificates themselves. **The logarithm is the entire reason the scheme is deployable**, and it is the same property that makes Merkle trees useful for anti-entropy and block validation in [`distributed-systems` 4.6](../../distributed-systems/lessons/04-06-nakamoto-consensus-and-blockchains.md).

Now compare with revocation, where no such structure exists. A CRL listing a million revoked certificates at roughly 20 bytes per entry is **20 megabytes**, and it grows monotonically, and every client must fetch all of it to answer one yes-or-no question. The asymmetry is instructive: proving a positive membership claim about an append-only structure is logarithmic, while proving a negative claim about a mutable set is linear. That difference, not any failure of cryptography, is why CT succeeded and CRLs did not.

## Watch out

- You might think a valid certificate means the site is safe or legitimate. It means the CA checked that someone controlled the domain — usually by an automated challenge. A phishing site with a correctly spelled lookalike domain gets a perfectly valid certificate in minutes, free.
- You might think a certificate alone authenticates the server. It does not; certificates are public and copyable. Authentication comes from the CertificateVerify signature over the transcript, which proves possession of the private key and binds it to this connection.
- You might think revocation works. Assume it does not, for a network attacker. Design for short certificate lifetimes and rapid rotation instead, and treat a compromised key as needing the certificate to *expire*, not to be revoked.

## One-liner

> A certificate is a signed claim that a key belongs to a name, trusted through a chain whose top link is trusted because it shipped with your software — and the system's hard parts are revoking that claim and noticing when it was issued wrongly.

## Problems

**P1 (🟢)** A browser receives a chain: a leaf for `shop.example.com`, an intermediate, and a root already in its trust store. List the checks the browser performs, in order, and for each say whether failing it is a cryptographic failure or a policy failure. Then state what the browser must receive *in addition to the chain* before it can conclude it is talking to the real server.

**P2 (🟡)** An attacker compromises a certificate authority and issues a certificate for `bank.example`. (a) State what she can do with it, and what she additionally needs in order to use it. (b) State whether revocation stops her against a browser doing soft-fail OCSP, with reasoning. (c) State how Certificate Transparency changes the outcome, and how quickly.

**P3 (🔴, optional)** A company runs an internal proxy that inspects TLS traffic. It installs its own root certificate on every employee machine and mints certificates for external sites on the fly. (a) Explain why this works, in terms of this lesson's verification procedure. (b) State the two guarantees employees lose, being precise about which lesson each came from. (c) A vendor claims the proxy is safe because it "re-validates the upstream certificate". Evaluate that claim, naming one property that cannot be restored no matter how carefully the proxy is implemented.

<details>
<summary>Solutions</summary>

**P1** In order:

1. **Verify the leaf's signature** using the intermediate's public key — *cryptographic*.
2. **Verify the intermediate's signature** using the root's public key — *cryptographic*.
3. **Confirm the root is in the trust store** — *policy*.
4. **Check validity dates** on every certificate in the chain — *policy*.
5. **Check `basicConstraints: CA = true`** and the path-length limit on each non-leaf — *policy*, and the one whose omission is catastrophic, since a leaf certificate could otherwise sign further certificates for any name.
6. **Check the leaf's `subjectAltName` covers `shop.example.com`** — *policy*, and the check that ties the cryptography to the user's intent.
7. **Check revocation status** — *policy*, and in practice the weakest link.

In addition to the chain the browser needs the **CertificateVerify**: a signature by the leaf's private key over the handshake transcript. Without it the chain proves only that such a certificate exists, which an attacker could have copied from the real server; with it the server proves it holds the matching private key *for this connection*.

**P2** (a) With a valid certificate for `bank.example` she can impersonate the bank to any client whose trust store contains that CA — mounting exactly the man-in-the-middle attack of [3.2](03-02-diffie-hellman-key-exchange.md), terminating TLS herself and relaying to the real bank.

She additionally needs **a network position**: the ability to intercept or redirect the victim's traffic, by DNS poisoning, BGP hijack, a controlled wireless network, or a compromised resolver. A certificate is a licence to impersonate; it is not a way to attract traffic. (Both halves were present in the DigiNotar case.)

(b) **Revocation does not stop her.** Under soft-fail OCSP the browser treats an unreachable responder as "not revoked". The attacker is already in a position to intercept traffic, so she simply drops or delays the client's OCSP request, and the browser proceeds. Blocking one extra connection is trivially within the capability of an adversary who is already rewriting the connection she is attacking. **Soft-fail revocation checking provides essentially no protection against precisely the attacker it was designed for.**

(c) Certificate Transparency does not stop the issuance, but it makes it **visible**. Modern browsers require the certificate to be accompanied by signed certificate timestamps from independent CT logs; a certificate with no SCTs is rejected outright, so the attacker must log her certificate to use it. Once logged, it is public, and the real domain owner — monitoring the logs, as most large organisations and many small ones do automatically — sees a certificate for their domain that they did not request.

Detection latency is governed by the log's maximum merge delay, typically 24 hours, and by monitoring frequency. So the realistic answer is **hours, not weeks**. The attacker then faces revocation of the certificate, distrust of the issuing CA by browser vendors, and public attribution — which is why the model is best described as accountability rather than prevention.

**P3** (a) It works because verification terminates at the trust store, and the company **put its own root in the trust store** on every machine. The browser walks the chain from the proxy's minted leaf up to the company root, finds a signature it can verify at each step, reaches a certificate it already trusts, and stops. Every check in P1 passes, honestly: the proxy's leaf genuinely names the site, is genuinely within its validity window, and is genuinely signed by a trusted root. **The cryptography is functioning exactly as specified; the trust assumption was changed.**

(b) Two guarantees are lost:

- **Confidentiality end-to-end** ([1.4](01-04-computational-security-and-pseudorandomness.md), [2.4](02-04-authenticated-encryption.md)). The proxy holds plaintext for every session, so the AEAD's guarantee now runs from the employee to the proxy and separately from the proxy to the site, never between employee and site. Passwords, session tokens and personal data are in the proxy's memory and, frequently, its logs.
- **Authentication of the endpoint** ([4.1](04-01-digital-signatures.md), and the whole of this lesson). The employee's browser is no longer verifying the site's identity; it is verifying the proxy's claim about the site's identity. The chain of accountability that CT and the CA ecosystem provide has been replaced by a single device.

(c) The claim is partly fair and fundamentally incomplete. A well-implemented proxy *can* re-validate upstream — check the real chain, dates, name, and CT proofs — and a careless one does not, which has been a recurring scandal in enterprise and antivirus TLS interception products, several of which accepted expired or self-signed upstream certificates and so were strictly worse than no TLS.

But one property cannot be restored: **non-repudiation and end-user verifiability**. The employee has no way to see, or to prove afterwards, what the real server presented. Whatever the proxy checked, its conclusion reaches the browser as an assertion, so the employee's security is now exactly the proxy's correctness and honesty. Additionally, the proxy's root key is a universal impersonation key for the whole organisation — if it leaks, every employee's traffic is interceptable by whoever holds it, which converts a distributed trust problem into a single very attractive target. **Interception does not weaken TLS; it relocates the trust, and relocation onto one box is the risk.**

</details>

## Flashback

**From Lesson 3.3 (RSA encryption):** Before TLS 1.3, a common handshake used RSA **key transport**: the client picked a random pre-master secret, encrypted it under the server's RSA public key from its certificate, and sent it. (a) State what an attacker who records traffic and later obtains the server's private key can do. (b) Name the property this lacks and the alternative that provides it. (c) State one additional attack class this mode exposed that ephemeral Diffie–Hellman does not.

<details>
<summary>Solution</summary>

(a) She can **decrypt every recorded session, retroactively and in full.** The pre-master secret travelled encrypted under the server's long-term RSA key and nothing else, so possessing $d$ lets her recover it from the recorded handshake, derive the session keys, and read the traffic. Years of captured connections all fall at once, from a single key compromise — by breach, seizure, or a stolen backup.

(b) The missing property is **forward secrecy** ([3.2](03-02-diffie-hellman-key-exchange.md)). The alternative is **ephemeral Diffie–Hellman**: both sides generate fresh exponents per connection and discard them afterwards, so the session key was never derivable from any stored long-term value. The server's signing key is then used only to authenticate, never to transport, and compromising it permits future impersonation but no retrospective decryption. TLS 1.3 makes this mandatory.

(c) RSA key transport exposed the **Bleichenbacher padding-oracle family** ([3.3](03-03-rsa-encryption.md), [2.4](02-04-authenticated-encryption.md)). Because the server decrypts a client-supplied RSA ciphertext with PKCS#1 v1.5 padding and then behaves observably — by error, by timing, or by how the handshake fails — an adversary can mount an adaptive attack recovering the pre-master secret of a *recorded* session without the private key at all, using the live server as an oracle. These attacks were rediscovered repeatedly across two decades, as ROBOT in 2017 and DROWN via an old SSLv2 endpoint in 2016.

Ephemeral Diffie–Hellman exposes nothing comparable, because **the server never decrypts anything the client chose.** It performs an exponentiation on a received group element and derives a key by hashing — and a malformed element yields a useless key rather than an observable failure, which is [3.6](03-06-hybrid-encryption-kem-dem.md)'s implicit-rejection idea arriving before it had a name.

</details>

## Connections

- **Backward:** every link in a chain is [4.1](04-01-digital-signatures.md)'s signature; the handshake it authenticates is [3.2](03-02-diffie-hellman-key-exchange.md)'s ephemeral exchange feeding [3.6](03-06-hybrid-encryption-kem-dem.md)'s KEM/DEM split into [2.4](02-04-authenticated-encryption.md)'s record layer — the whole course, assembled.
- **Forward:** [4.3](04-03-commitments-and-secret-sharing.md) splits a CA's signing key so no single machine holds it, and [4.5](04-05-post-quantum-cryptography.md) explains why certificate signature algorithms must migrate on a slower clock than key exchange.
- **Sideways:** [`computer-networks` 4.4](../../computer-networks/lessons/04-04-network-security-tls-firewalls-attacks.md) gives the handshake's message ordering and the network-layer attacks that surround it — DNS poisoning and BGP hijacking are how an attacker obtains the traffic position that a misissued certificate lets her exploit; Certificate Transparency's log is the Merkle tree of [`distributed-systems` 2.3](../../distributed-systems/lessons/02-03-eventual-consistency-and-anti-entropy.md) used for inclusion proofs rather than difference-finding.

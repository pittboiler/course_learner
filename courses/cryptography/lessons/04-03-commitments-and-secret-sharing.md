# Cryptography · Lesson 4.3: Commitments and secret sharing

> ⏱ ~15 min · Module 4: Signatures, protocols, and zero-knowledge · Builds on: [2.1 (cryptographic hash functions)](02-01-cryptographic-hash-functions.md), [3.4 (ElGamal encryption)](03-04-elgamal-encryption.md) · Unlocks: [4.4 (zero-knowledge proofs)](04-04-zero-knowledge-proofs.md)

## Why this matters

Everything so far has protected a message from an outsider. This lesson does something different: it protects participants **from each other**, which is what protocols with mutually distrustful parties require.

Two primitives do most of that work. A **commitment** is a sealed envelope — you fix a value now and reveal it later, and neither the sealing nor the opening can cheat. A **secret sharing scheme** splits a secret so that any $t$ of $n$ holders can reconstruct it and any $t-1$ learn absolutely nothing.

Both appear immediately afterwards. Commitments are the first move of every zero-knowledge proof ([4.4](04-04-zero-knowledge-proofs.md)) and of sealed-bid auctions ([3.4](03-04-elgamal-encryption.md)'s P2). Secret sharing is how a certificate authority's root key ([4.2](04-02-public-key-infrastructure-and-certificates.md)) survives being stored on any single machine, and it is the entry point to threshold cryptography.

Secret sharing is also the last place in the course where an **information-theoretic** guarantee appears. It is not "hard to break"; it is impossible, in Shannon's sense from [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md).

## The idea

**Commitments.** You want to fix a prediction now and reveal it later, in a way that satisfies your sceptical counterpart on two counts. **Hiding:** the commitment reveals nothing about the value. **Binding:** you cannot open it to a different value than the one you sealed.

The obvious construction is $c = H(m)$, and it fails hiding for any guessable $m$ — [2.1](02-01-cryptographic-hash-functions.md)'s lesson that hashing is not concealment. Fix it by adding randomness: $c = H(r \Vert m)$ for a long random $r$, revealed at opening time.

Here is the fact that gives the subject its shape. **You cannot have both properties unconditionally.** If a commitment is perfectly hiding, the commitment string is consistent with every possible value, so for each one there exists an opening — and binding must therefore rest on the *difficulty* of finding those openings. If it is perfectly binding, the value is determined by the commitment, so an unbounded adversary reads it off, and hiding must be computational. One of the two is always a computational assumption; the designer chooses which.

Hash commitments are computationally hiding and computationally binding. **Pedersen commitments**, $c = g^{m} h^{r}$, are *perfectly* hiding and computationally binding under the discrete log — which is the right trade when the committed value must stay private forever and only the opening window needs to be secure.

**Secret sharing.** Give five executives pieces of the master key such that any three can reconstruct it and any two cannot. Shamir's answer is one line of algebra: **a polynomial of degree $t-1$ is determined by exactly $t$ points, and by no fewer.**

Put the secret at $f(0)$, pick the other coefficients at random, and hand out $f(1), f(2), \dots, f(n)$. Any $t$ shares interpolate the polynomial and evaluate at zero. Any $t-1$ shares are consistent with a polynomial through *every* possible secret — one for each choice of the missing degree of freedom — and all are equally likely, so the shares carry **zero information**. That is the same "all plaintexts remain equally possible" argument as the one-time pad, and it is exactly as absolute.

## The formal version

> **Definition (commitment scheme).** $\mathrm{Commit}(m, r) \to c$ with opening $(m, r)$.
> - **Hiding:** for all $m_0, m_1$, the distributions $\mathrm{Commit}(m_0, r)$ and $\mathrm{Commit}(m_1, r)$ over uniform $r$ are indistinguishable (perfectly, statistically, or computationally).
> - **Binding:** no efficient adversary finds $(m, r) \ne (m', r')$ with $\mathrm{Commit}(m,r) = \mathrm{Commit}(m',r')$.

> **Theorem.** No commitment scheme is both perfectly hiding and perfectly binding.

*Proof.* Suppose perfectly hiding. Then for any $c$ in the support and any $m$, there is some $r$ with $\mathrm{Commit}(m, r) = c$ — otherwise a commitment to $m$ would be distinguishable from one to a value that can produce $c$. So every $c$ has openings to every message, and an unbounded adversary finds two, breaking perfect binding. $\blacksquare$

> **Hash commitment.** $c = H(r \Vert m)$ with $r$ uniform and long, say 256 bits. Binding follows from collision resistance; hiding from $H$ behaving as a random oracle, which requires $r$ to have enough entropy that guessing it is infeasible.

> **Pedersen commitment.** In a group of prime order $q$ with generators $g$ and $h$ whose relative discrete log $x = \log_g h$ is **unknown to the committer**,
> $$\mathrm{Commit}(m, r) = g^{m} h^{r}, \qquad r \leftarrow \mathbb{Z}_q \text{ uniform}.$$

*Perfectly hiding.* For fixed $m$, as $r$ ranges uniformly over $\mathbb{Z}_q$, $h^{r}$ is uniform over the group, so $c$ is uniform — **independent of $m$ entirely.** This is the one-time pad again, with multiplication by a uniform group element as the mask, exactly as in [3.4](03-04-elgamal-encryption.md)'s proof.

*Computationally binding.* Suppose the committer opens $c$ two ways: $g^{m}h^{r} = g^{m'}h^{r'}$ with $m \ne m'$. Then $g^{m-m'} = h^{r'-r}$, and writing $h = g^{x}$ gives $m - m' \equiv x(r' - r) \pmod q$. Since $r \ne r'$ (otherwise $m = m'$), we can invert and obtain

$$x = \frac{m - m'}{r' - r} \bmod q,$$

the discrete log of $h$. So **anyone who opens a Pedersen commitment two ways has solved a discrete log** — and conversely the scheme is binding exactly as long as that is hard. Note the corollary: whoever *chose* $h$ knowing its discrete log can cheat freely, which is why $h$ must come from a verifiable procedure such as hashing a public string to a group element.

Pedersen is also **additively homomorphic**: $\mathrm{Commit}(m_1,r_1)\cdot\mathrm{Commit}(m_2,r_2) = \mathrm{Commit}(m_1+m_2,\; r_1+r_2)$, which is what makes confidential-transaction systems possible.

> **Shamir $(t,n)$ secret sharing.** Work in $\mathbb{F}_q$ with $q > n$. To share $s$: pick $a_1, \dots, a_{t-1}$ uniformly and set
> $$f(x) = s + a_1 x + a_2 x^{2} + \cdots + a_{t-1}x^{t-1}.$$
> Share $i$ is $(i, f(i))$ for $i = 1, \dots, n$. To reconstruct from any $t$ shares $\{(x_i, y_i)\}$, Lagrange-interpolate at zero:
> $$s = f(0) = \sum_{i} y_i \prod_{j \ne i} \frac{0 - x_j}{x_i - x_j} \pmod q.$$

> **Perfect security.** Any $t-1$ shares leave every $s \in \mathbb{F}_q$ equally likely.

*Proof.* Fix $t-1$ shares and any candidate secret $s'$. Adding the point $(0, s')$ gives $t$ points, which determine a unique degree-$(t-1)$ polynomial. So each candidate $s'$ corresponds to exactly one polynomial consistent with the shares, and since the coefficients were chosen uniformly, all such polynomials are equally likely. The posterior over $s$ is therefore uniform — the prior — which is [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)'s definition of perfect secrecy. $\blacksquare$

**Shamir shares nothing with the rest of Module 4 in this respect:** it needs no hardness assumption, and it survives a quantum computer, an unlimited adversary, and the failure of every conjecture in this course.

Two limitations worth knowing. The scheme assumes **honest dealers and honest shareholders** — a shareholder who submits a wrong share corrupts the reconstruction undetectably, which is what *verifiable* secret sharing fixes by publishing Pedersen commitments to the coefficients. And it shares one secret, not a capability: reconstructing a signing key means the key exists in one place at that moment, which **threshold signatures** avoid by computing the signature from shares directly, never assembling the key at all.

## Picture

![A plot with share index on the horizontal axis and share value on the vertical. A single blue point marks the one share held. Several dashed grey lines all pass through that point, each meeting the vertical axis at a different height, with a grey dot marking each candidate secret. One solid coral line passes through the blue point and a second coral point at another index, meeting the axis at the true secret. Captions state that every dashed line is consistent with the single share so every intercept stays equally possible, and that one more point leaves exactly one line.](assets/04-03-fig1.svg)

The figure is the proof made visible for $t = 2$. **One point on a line tells you nothing about where the line crosses the axis**, because a line through it exists for every crossing. Two points determine the line completely. Raising $t$ raises the degree: three points are needed to pin a parabola, and two points leave a full one-parameter family of parabolas with every possible intercept.

## Worked examples

**Example 1 — flipping a coin over the phone.**

Alice and Bob are in different cities and must settle a bet on a fair coin. Neither trusts the other to call it.

*Protocol.* Alice picks a bit $a$ and a random 256-bit $r$, and sends $c = H(r \Vert a)$. Bob, having seen $c$ but unable to read it, announces his bit $b$. Alice then reveals $(a, r)$; Bob checks $H(r \Vert a) = c$. The result is $a \oplus b$.

*Why neither can cheat.* Alice cannot change $a$ after hearing $b$, because doing so needs $(a', r')$ with $a' \ne a$ and the same hash — a collision in $H$, ruled out by [2.1](02-01-cryptographic-hash-functions.md). Bob cannot choose $b$ to steer the result, because $c$ hides $a$: with $r$ uniform over $2^{256}$ values he cannot distinguish a commitment to 0 from one to 1.

*And the honest outcome.* If **either** party picks their bit uniformly, $a \oplus b$ is uniform, because XOR with a uniform independent bit randomises anything. So each party is protected by their *own* honesty and needs no assumption about the other — which is the design goal of every protocol in this module.

*The failure mode to notice.* Omit $r$ and commit as $c = H(a)$. Bob computes $H(0)$ and $H(1)$, compares, and reads Alice's bit instantly. **The message space has two elements, and a hash of a two-element space is a public lookup table** — [2.1](02-01-cryptographic-hash-functions.md)'s Example 2 in miniature.

**Example 2 — a $(3,5)$ split, shared and reconstructed.**

Work in $\mathbb{F}_{17}$. The secret is $s = 7$, and we want any 3 of 5 to recover it, so the polynomial has degree 2. Pick random coefficients $a_1 = 2$, $a_2 = 5$:

$$f(x) = 7 + 2x + 5x^{2} \bmod 17.$$

The shares:

| $x$ | $f(x)$ computation | share |
|---|---|---|
| 1 | $7+2+5 = 14$ | 14 |
| 2 | $7+4+20 = 31 \equiv 14$ | 14 |
| 3 | $7+6+45 = 58 \equiv 7$ | 7 |
| 4 | $7+8+80 = 95 \equiv 10$ | 10 |
| 5 | $7+10+125 = 142 \equiv 6$ | 6 |

Now reconstruct from shares 1, 3 and 4 — that is, $(1,14)$, $(3,7)$, $(4,10)$. The Lagrange coefficients at $x = 0$:

$$\ell_1 = \frac{(0-3)(0-4)}{(1-3)(1-4)} = \frac{12}{6} = 2, \quad \ell_3 = \frac{(0-1)(0-4)}{(3-1)(3-4)} = \frac{4}{-2} = -2, \quad \ell_4 = \frac{(0-1)(0-3)}{(4-1)(4-3)} = \frac{3}{3} = 1.$$

Then

$$s = 14(2) + 7(-2) + 10(1) = 28 - 14 + 10 = 24 \equiv 7 \pmod{17}.$$

Recovered.

Note that shares 1 and 2 are both 14 — a coincidence of the small field, and harmless: the shares are distinguished by their *indices*, which are part of the share. And notice what two shares alone give you. From $(1,14)$ and $(3,7)$, every candidate secret $s'$ yields exactly one quadratic through $(0,s'), (1,14), (3,7)$, so all 17 candidates remain live and equally likely. **Two shares narrow the secret from 17 possibilities to 17.**

## Watch out

- You might think $c = H(m)$ is a commitment. It binds but does not hide anything guessable, and most committed values — a bid, a vote, a bit — are guessable. Always include a high-entropy random $r$, and reveal it at opening.
- You might think a Pedersen commitment is unconditionally secure. It is unconditionally *hiding* and only computationally *binding*, and by the theorem above no scheme can be both. Choose which property must survive a future break: Pedersen for secrets that must stay private forever, hash commitments when binding matters most.
- You might think $(t,n)$ sharing protects against dishonest shareholders. It does not. A holder who submits a corrupted share makes reconstruction produce a wrong secret, silently, and the honest parties cannot tell who lied. That needs verifiable secret sharing, where the dealer publishes commitments to the coefficients so every share can be checked against them.

## One-liner

> A commitment is an envelope that can be neither peeked into nor swapped, and you must choose which of those two is only computational; a $(t,n)$ sharing puts the secret at a polynomial's intercept, where $t-1$ points say nothing at all.

## Problems

**P1 (🟢)** A $(2,4)$ Shamir scheme over $\mathbb{F}_{13}$ uses $f(x) = s + 4x$ with secret $s = 9$. (a) Compute the four shares. (b) Reconstruct $s$ from the shares at $x = 2$ and $x = 4$ by Lagrange interpolation, showing the coefficients. (c) State how many candidate secrets remain consistent with the share at $x = 2$ alone.

**P2 (🟡)** An auction takes sealed bids as $c_i = H(b_i)$ with no randomness, where bids are whole numbers of dollars between 1 and 10,000. (a) State the attack and its cost in hash evaluations. (b) The organiser adds a random 8-bit $r_i$. Compute the new attack cost and say whether it helps. (c) Give the correct construction and the property it achieves, naming the minimum size of $r$.

**P3 (🔴, optional)** A certificate authority splits its root signing key with a $(3,5)$ Shamir scheme across five hardware modules. (a) State what must physically happen for a certificate to be signed, and name the security property that is lost during that window. (b) One module is destroyed in a fire and a second is found to have a corrupted share. State whether the key is recoverable, and what the scheme cannot tell the operators. (c) Name the two upgrades that fix (a) and (b) respectively, and say what each one changes.

<details>
<summary>Solutions</summary>

**P1** (a) $f(x) = 9 + 4x \bmod 13$:

| $x$ | $f(x)$ | share |
|---|---|---|
| 1 | $13 \equiv 0$ | 0 |
| 2 | $17 \equiv 4$ | 4 |
| 3 | $21 \equiv 8$ | 8 |
| 4 | $25 \equiv 12$ | 12 |

(b) From $(2,4)$ and $(4,12)$, the Lagrange coefficients at $x = 0$ are

$$\ell_2 = \frac{0-4}{2-4} = \frac{-4}{-2} = 2, \qquad \ell_4 = \frac{0-2}{4-2} = \frac{-2}{2} = -1.$$

So

$$s = 4(2) + 12(-1) = 8 - 12 = -4 \equiv 9 \pmod{13}.$$

Recovered.

(c) **All 13.** For each candidate $s' \in \mathbb{F}_{13}$ there is exactly one line through $(0, s')$ and $(2, 4)$ — namely the one with slope $(4 - s')/2$ — and since the slope was chosen uniformly, all 13 are equally likely. A single share of a $(2,n)$ scheme carries zero information about the secret.

**P2** (a) The attack: the auctioneer, or anyone who sees the commitments, **hashes every possible bid** and builds a lookup table, then reads each bidder's number directly. Cost is **10,000 hash evaluations**, done once — microseconds. The scheme provides no hiding whatever, and the auctioneer can then place a winning bid himself.

(b) With an 8-bit $r_i$ there are 256 possibilities per bid, so the attacker tries every $(r, b)$ pair:

$$10{,}000 \times 256 = 2{,}560{,}000 \text{ hashes},$$

still well under a second on any machine. **It does not help.** The randomness must make the search infeasible, not merely larger, and 8 bits multiplies the work by 256 when the requirement is a factor of $2^{100}$ or more.

(c) The correct construction is

$$c_i = H(r_i \,\Vert\, b_i), \qquad r_i \leftarrow \{0,1\}^{256} \text{ uniform},$$

with $r_i$ revealed at opening. **The minimum size of $r$ is enough that guessing it is infeasible — at least 128 bits, and 256 is standard**, since the cost of the extra bytes is nothing and the cost of getting it wrong is the whole scheme. The property achieved is **computational hiding**: with $r$ unguessable, a commitment to one bid is indistinguishable from a commitment to another, in the random oracle model.

A Pedersen commitment $g^{b}h^{r}$ would be an alternative, buying *perfect* hiding — the bids stay private even against an unbounded future adversary — plus the homomorphic property that lets the total be computed without opening any single bid.

**P3** (a) Three of the five modules must **bring their shares together in one place** and reconstruct the polynomial's value at zero, producing the actual root private key in the memory of one machine, which then signs.

The property lost during that window is the whole point of the split: **for as long as the key is assembled, it exists as a single object that can be stolen, copied, or misused by whoever controls that machine.** The ceremony reduces the window to minutes, in a room with witnesses and air-gapped hardware, but the window is real and the threat model during it is single-machine compromise.

(b) **The key is not recoverable.** A $(3,5)$ scheme needs three valid shares; one is destroyed and one is corrupt, leaving two. Two shares of a $(3,n)$ scheme determine nothing — every candidate secret remains equally likely, exactly as in P1(c) one rung up.

Worse, the scheme **cannot tell the operators which share is corrupt.** Any three shares interpolate to *some* polynomial and yield *some* value at zero; with one bad share the result is simply wrong, with no indication. The operators would discover it only by trying to use the reconstructed key and finding that signatures do not verify — and even then, with only two good shares among three offered, they cannot identify the liar by elimination.

(c) Two upgrades, each addressing one failure:

- **Threshold signatures** fix (a). Each module computes a partial signature from its share, and the partials are combined into a valid signature **without the key ever being reconstructed**. There is no moment at which the private key exists anywhere, so the ceremony window disappears. What changes is that the scheme must be built for the signature algorithm in use — threshold ECDSA is considerably more intricate than threshold Schnorr, which is one reason Schnorr-based signatures are gaining ground.

- **Verifiable secret sharing** fixes (b). The dealer publishes Pedersen commitments to each polynomial coefficient, $C_j = g^{a_j}h^{b_j}$, and any shareholder can check their own share against them, since the commitments let anyone verify that $(i, f(i))$ lies on the committed polynomial. A corrupt share is then **detected and attributed** rather than silently poisoning the result. What changes is that share validity becomes a public, checkable property, so the operators would have known which module to replace long before the fire.

Note that neither upgrade recovers from having too few shares. That is a choice of parameters — a $(3,5)$ scheme tolerates two losses, and an organisation that expects fires should pick $(3,7)$.

</details>

## Flashback

**From Lesson 1.3 (Shannon's theorem and the price of perfect secrecy):** A $(2,2)$ Shamir sharing over $\mathbb{F}_q$ gives each of two parties one share of a secret $s$. (a) Show that this scheme is equivalent to a one-time pad, identifying what plays the role of the key. (b) Use Shannon's theorem to state the relationship between the share size and the secret size, and confirm the scheme meets it exactly.

<details>
<summary>Solution</summary>

(a) With $t = 2$ the polynomial is $f(x) = s + a_1 x$ with $a_1$ uniform in $\mathbb{F}_q$. The two shares are

$$f(1) = s + a_1, \qquad f(2) = s + 2a_1.$$

Look at the first one: $s + a_1$ with $a_1$ uniform is the secret masked by a uniform field element — **a one-time pad over $\mathbb{F}_q$ with $a_1$ as the key**, using addition mod $q$ in place of XOR, which is exactly the "shift pad" of [1.2](01-02-perfect-secrecy-and-the-one-time-pad.md)'s P2. The same holds for the second share with key $2a_1$, itself uniform since $2$ is invertible.

So each individual share is a perfectly secret encryption of $s$ under a key the holder does not have, and reconstruction is the two parties cancelling the mask: $2f(1) - f(2) = 2s + 2a_1 - s - 2a_1 = s$.

(The simplest $(2,2)$ scheme is usually stated directly in this form: give one party $r$ and the other $s \oplus r$.)

(b) Shannon's theorem says a perfectly secret scheme needs $|\mathcal K| \ge |\mathcal M|$, equivalently $H(K) \ge H(M)$. Here the "key" hidden from a single shareholder is the other share, and the message is the secret, so the theorem predicts that **each share must be at least as large as the secret.**

The scheme meets this exactly: the secret is one element of $\mathbb{F}_q$ and each share is one element of $\mathbb{F}_q$, so $|\mathcal K| = |\mathcal M| = q$, sitting precisely on the bound with no waste — the same place the one-time pad sits, and the only place a perfectly secure scheme can be efficient.

The general consequence is worth remembering when sizing a deployment: **in any perfect $(t,n)$ scheme every share is at least the size of the secret**, so $n$ shares cost $n$ times the storage. Schemes that beat that bound exist only by weakening perfection to computational security — for instance by sharing a short symmetric key perfectly and encrypting the bulk data under it, which is [3.6](03-06-hybrid-encryption-kem-dem.md)'s hybrid idea applied to sharing.

</details>

## Connections

- **Backward:** the hash commitment needs [2.1](02-01-cryptographic-hash-functions.md)'s collision resistance for binding and its random-oracle behaviour for hiding; Pedersen's perfect hiding is [3.4](03-04-elgamal-encryption.md)'s one-time-pad-in-the-group argument, and its binding is [3.1](03-01-the-number-theoretic-toolkit.md)'s discrete-log assumption stated as a reduction.
- **Forward:** [4.4](04-04-zero-knowledge-proofs.md) opens every protocol with a commitment and closes it with a selective opening — that is precisely what makes a proof zero-knowledge; threshold signatures built on this sharing are how modern custody systems hold keys.
- **Sideways:** Lagrange interpolation over a finite field is the same machinery as Reed–Solomon erasure coding in [`communications` 4.3](../../communications/lessons/04-03-block-codes.md) — there you recover a message from any $k$ of $n$ symbols, here you recover a secret from any $t$ of $n$ shares, and it is one theorem serving redundancy in one setting and confidentiality in the other.

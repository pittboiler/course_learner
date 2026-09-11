# Quantum Computing · Lesson 4.5: The hidden subgroup problem

> ⏱ ~15 min · Module 4: Fourier, phase, and factoring · Builds on: [3.4 (Simon's algorithm)](03-04-simons-algorithm.md), [4.4 (Shor's factoring algorithm)](04-04-shors-factoring-algorithm.md), [`abstract-algebra` 1.5 (cosets and Lagrange)](../../abstract-algebra/lessons/01-05-cosets-lagrange.md) · Unlocks: [6.1 (BQP and the complexity landscape)](06-01-bqp-and-the-complexity-landscape.md)

## Why this matters

You have now seen four algorithms with exponential or near-exponential quantum advantage: Bernstein–Vazirani, Simon, order-finding, and Shor. They look like four tricks. They are one trick, applied to four groups.

The unifying statement is the **hidden subgroup problem**, and learning it buys three things.

- **Compression.** One algorithm to remember instead of four, with the group as the only parameter. The recipe is: Fourier transform over $G$, query, Fourier transform, sample, solve classically.
- **A boundary.** Abelian groups are solved; non-abelian groups are open, after thirty years of effort. That boundary tells you where to expect future quantum algorithms and where not to.
- **The reason post-quantum cryptography looks the way it does.** Lattice-based schemes — the basis of the NIST standards — are secure against quantum attack *precisely because* the relevant hidden subgroup problem is over a **dihedral** group, which is non-abelian. The frame explains the design choice.

## The idea

A function is **constant on cosets** when it cannot distinguish two inputs that differ by an element of some subgroup. That is the pattern behind all four algorithms.

- Simon's $f$ satisfies $f(x) = f(x\oplus s)$: it cannot distinguish $x$ from $x\oplus s$, so it is constant on the cosets of the two-element subgroup $H = \{0, s\}$ inside $G = \mathbb{Z}_2^n$.
- Order-finding's $f(k) = a^k\bmod N$ satisfies $f(k) = f(k+r)$: it is constant on the cosets of $H = r\mathbb{Z}$ inside $G = \mathbb{Z}$.
- Bernstein–Vazirani's $f(x) = s\cdot x$ is constant on the cosets of the index-2 subgroup $\{x : s\cdot x = 0\}$.

So the general problem is: a function hides a subgroup $H \le G$ by being constant exactly on its cosets. **Find $H$.**

The quantum algorithm is one sentence. Prepare a uniform superposition over $G$, query $f$, and measure the output register. The input register collapses to a uniform superposition over a **single coset** $gH$ — which you cannot identify, because $g$ is random and unknown. Then Fourier transform over $G$. The unknown coset representative $g$ appears only as a phase and drops out of the probabilities; what survives is a random character that is **trivial on $H$**. Each sample is one constraint on $H$, and enough samples pin it down.

That is exactly the structure of Simon ([3.4](03-04-simons-algorithm.md)) and of order-finding ([4.3](04-03-order-finding-and-period-finding.md)), including the "unknown offset hides in a phase" step both lessons flagged. It works because a Fourier transform over an abelian group is exactly the tool that converts coset structure into orthogonality structure.

And it stops working for non-abelian $G$, for a concrete reason: the representation theory is no longer one-dimensional, so the Fourier transform's output is a matrix-valued object rather than a character, and the coset representative no longer cancels. Nobody has found a measurement that extracts the subgroup efficiently in general.

## The formal version

> **Hidden subgroup problem (HSP).** Given a group $G$, a set $S$, and oracle access to $f: G\to S$ with the promise
> $$f(g_1) = f(g_2) \iff g_1H = g_2H$$
> for some unknown subgroup $H\le G$, find a generating set for $H$.

In words: $f$ is a labelling of the cosets, with distinct labels for distinct cosets. The promise is exactly "$f$ hides $H$ and nothing more."

> **The standard algorithm.** Prepare $\frac{1}{\sqrt{\lvert G\rvert}}\sum_{g}\lvert g\rangle\lvert0\rangle$, apply $f$, and measure the second register. The first register is left in a **coset state**
> $$\lvert gH\rangle = \frac{1}{\sqrt{\lvert H\rvert}}\sum_{h\in H}\lvert gh\rangle$$
> for a uniformly random $g$. Apply the Fourier transform over $G$ and measure.

> **Abelian HSP is solved.** For abelian $G$, the Fourier transform of a coset state is supported exactly on the characters $\chi$ that are trivial on $H$ — the **annihilator** $H^\perp = \{\chi : \chi(h) = 1 \ \forall h\in H\}$ — uniformly, with the coset representative appearing only as a global phase. Sampling $O(\log\lvert G\rvert)$ characters and solving the resulting linear system determines $H$ in polynomial time.

In words: sample the annihilator, then take its annihilator back to get $H$. The "coset representative is only a phase" step is what makes the unknown offset harmless, and it is the same computation as [3.4](03-04-simons-algorithm.md) P2 and [4.1](04-01-the-quantum-fourier-transform.md) P3.

Now the table that is the real content of this lesson, also on the card as [Shor and the HSP table](../reference.md#shors-algorithm-and-the-hsp-table):

| algorithm | group $G$ | hidden subgroup $H$ | status |
|---|---|---|---|
| Bernstein–Vazirani | $\mathbb{Z}_2^n$ | $\{x : s\cdot x = 0\}$, index 2 | solved |
| Simon | $\mathbb{Z}_2^n$ | $\{0, s\}$ | solved |
| order-finding, Shor | $\mathbb{Z}$ | $r\mathbb{Z}$ | solved |
| discrete logarithm | $\mathbb{Z}_N\times\mathbb{Z}_N$ | $\{(kx, k)\}$, generated by $(x,1)$ | solved |
| Pell's equation, class groups | $\mathbb{R}$, $\mathbb{Z}^d$ | various | solved |
| **graph isomorphism** | $S_n$ (non-abelian) | automorphism group | **open** |
| **shortest lattice vector** | dihedral $D_N$ (non-abelian) | an order-2 subgroup | **open** |

> **The dividing line.** Abelian $G$: polynomial-time quantum algorithm. Non-abelian $G$: no efficient algorithm known in general, despite three decades of work. The best result for the dihedral case is Kuperberg's $2^{O(\sqrt{\log N})}$ algorithm — subexponential but not polynomial.

Two consequences worth stating explicitly, because they are what the frame is for.

> **Why Shor breaks more than RSA.** Discrete logarithm is an abelian HSP, so the same machinery breaks Diffie–Hellman and elliptic-curve cryptography, not merely RSA. Every widely deployed public-key scheme in use today rests on either factoring or discrete log, and both fall.

> **Why lattice cryptography is the post-quantum answer.** Regev showed that an efficient algorithm for the **dihedral** HSP would give an efficient quantum algorithm for the shortest vector problem, on which lattice cryptography rests. The dihedral group is non-abelian, the problem has resisted attack, and that resistance is the security argument behind the NIST post-quantum standards.

## Picture

![A table with four columns: algorithm, group G, hidden subgroup H, and status. The rows are Bernstein–Vazirani over the group of bit strings with H the kernel of the map x to s dot x of index 2, solved; Simon over the same group with H the two-element set containing zero and s, solved; order-finding and Shor over the integers with H equal to r times the integers, solved; discrete log over a product of two cyclic groups with H generated by the pair x comma one, solved; graph isomorphism over the symmetric group, which is non-abelian, with H the automorphism group, marked OPEN in red; and shortest lattice vector over the dihedral group with H an order-two subgroup, also marked OPEN. A dashed line separates the solved abelian rows from the open non-abelian ones. Closing lines state that for abelian G the problem is efficient via the Fourier transform of G, and that for non-abelian G no efficient algorithm is known, which is why lattice cryptography survives.](assets/04-05-fig1.svg)

The dashed line is the most informative object in Module 4. Above it: every known exponential quantum speedup with a real-world application. Below it: the problems people have wanted to solve for thirty years and cannot. **The line is drawn exactly at commutativity**, and no one knows whether that is a fact about quantum algorithms or a fact about our imagination.

## Worked examples

**Example 1 — fit two known algorithms into the frame.**

*Simon.* Take $G = \mathbb{Z}_2^n$ (bit strings under XOR), $S = \{0,1\}^n$, and $H = \{0, s\}$, a subgroup of order 2. The cosets of $H$ are the pairs $\{x, x\oplus s\}$, and Simon's promise — $f(x) = f(y)$ exactly when $y \in\{x, x\oplus s\}$ — is precisely "$f$ labels the cosets of $H$ injectively."

What does the algorithm produce? The characters of $\mathbb{Z}_2^n$ are $\chi_z(x) = (-1)^{z\cdot x}$, and $\chi_z$ is trivial on $H$ exactly when $(-1)^{z\cdot s} = 1$, that is $z\cdot s = 0$. So

$$H^\perp = \{z : z\cdot s = 0\},$$

and the algorithm samples uniformly from it — which is exactly the selection rule derived in [3.4](03-04-simons-algorithm.md). The Fourier transform over $\mathbb{Z}_2^n$ is $H^{\otimes n}$, and "solve the linear system" is taking the annihilator of $H^\perp$ to recover $H$.

*Order-finding.* Take $G = \mathbb{Z}$ (or $\mathbb{Z}_{2^m}$ in the implementation), $S = \mathbb{Z}_N$, $f(k) = a^k\bmod N$, and $H = r\mathbb{Z}$. The cosets are the residue classes mod $r$, and $f$ labels them injectively because $a^k = a^{k'}$ exactly when $k\equiv k'\pmod r$.

The characters of $\mathbb{Z}_{2^m}$ are $\chi_j(k) = e^{2\pi ijk/2^m}$, and those trivial on $r\mathbb{Z}$ are the ones with $jr/2^m$ an integer — the multiples of $2^m/r$. That is exactly the comb of peaks computed in [4.1](04-01-the-quantum-fourier-transform.md) P3, and "solve classically" is the continued-fraction step.

**Same algorithm, twice.** The only differences are which group's Fourier transform you apply and which classical routine converts samples into the subgroup.

**Example 2 — discrete logarithm, and why every deployed public-key scheme falls.**

*The problem.* In a cyclic group of order $N$ with generator $g$, given $h = g^x$, find $x$. This is the security assumption behind Diffie–Hellman and elliptic-curve cryptography ([`cryptography` 3.2](../../cryptography/lessons/03-02-diffie-hellman-key-exchange.md), [3.5](../../cryptography/lessons/03-05-elliptic-curve-cryptography.md)).

*As an HSP.* Take $G = \mathbb{Z}_N\times\mathbb{Z}_N$ and define

$$f(a,b) = g^a h^{-b} = g^{a - bx}.$$

Then $f(a,b) = f(a',b')$ exactly when $a - bx \equiv a' - b'x \pmod N$, i.e. when $(a-a', b-b')$ lies in

$$H = \{(kx, k) : k\in\mathbb{Z}_N\},$$

the cyclic subgroup generated by $(x, 1)$. **Finding $H$ gives $x$ immediately** — read off the generator. And $G$ is abelian, so the standard algorithm applies.

*Concrete check, $p = 11$, $g = 2$, $x = 3$.* Then $h = 2^3 = 8$, and $g$ has order $N = 10$. The set of $(a,b)$ with $f(a,b) = 1$ is

$$\{(0,0), (3,1), (6,2), (9,3), (2,4), (5,5), (8,6), (1,7), (4,8), (7,9)\},$$

which is precisely $\{(3k \bmod 10, k)\}$ — the subgroup generated by $(3,1)$, with the secret $x = 3$ sitting in the first coordinate. There are 10 distinct values of $f$, each on a coset of size 10, as the promise requires. ✓

*What falls.* Tally the deployed public-key cryptography:

| scheme | hard problem | abelian HSP? | broken by Shor? |
|---|---|---|---|
| RSA | factoring | yes (order-finding) | yes |
| Diffie–Hellman | discrete log mod $p$ | yes | yes |
| ECDH / ECDSA | discrete log on a curve | yes | yes |
| DSA | discrete log | yes | yes |
| Lattice (Kyber, Dilithium) | SVP / LWE | **dihedral, non-abelian** | not known |
| Hash-based signatures | preimage resistance | no group structure | only Grover's $\sqrt{}$ |

Every scheme in the top block is an abelian hidden subgroup problem and falls to the same algorithm. The bottom block is what the migration is toward, and the reason for the choice is the line in the table above. **Post-quantum cryptography is, in large part, the practice of building on non-abelian or non-group-theoretic hardness.**

## Watch out

- You might think abelian HSP being easy means all structured problems are easy. It does not. The promise is strong — $f$ must label cosets *exactly*, with no noise and no collisions across cosets — and real problems rarely arrive that way. Fitting a problem into the frame is usually the hard part.
- You might think the non-abelian case is open because nobody has tried. It is one of the most-attacked open problems in quantum algorithms, with thirty years of work, several partial results (normal subgroups, groups with small commutator, Kuperberg's subexponential dihedral algorithm), and no general solution. The difficulty is structural: measuring coset states in the non-abelian case provably requires *entangled* measurements across many copies, and no efficient such measurement is known.
- You might think solving graph-isomorphism HSP would be a breakthrough. It would be interesting, but Babai's 2015 classical algorithm already solves graph isomorphism in quasipolynomial time, so the quantum prize there has shrunk considerably. The dihedral case, with its lattice connection, is the one that matters.
- You might think that because lattice problems are "only" not-known-to-be-easy, post-quantum cryptography rests on nothing. It rests on the same kind of assumption all cryptography rests on — an unproven hardness conjecture ([`cryptography` 1.4](../../cryptography/lessons/01-04-computational-security-and-pseudorandomness.md)) — with the additional evidence that the natural quantum attack route runs into the non-abelian wall.

## One-liner

> Every exponential quantum speedup we know is one algorithm — Fourier transform over $G$, query, transform, sample, solve — and it works exactly when $G$ commutes.

## Problems

**P1 (🟢)** Identify $G$, $H$, and the hiding function $f$ for each of: (a) Bernstein–Vazirani with hidden string $s$; (b) Simon with hidden period $s$. For each, state the annihilator $H^\perp$ that the algorithm samples from, and how many samples are needed.

**P2 (🟡)** Show that order-finding is the HSP for $G = \mathbb{Z}$ and $H = r\mathbb{Z}$. Give the hiding function, verify the promise (that $f$ is constant exactly on cosets), identify the characters trivial on $H$, and explain how the continued-fraction step of [4.3](04-03-order-finding-and-period-finding.md) is the "solve classically" step of the general recipe.

**P3 (🔴, optional)** Work out the discrete-logarithm instance and its consequence. (a) With $G = \mathbb{Z}_N\times\mathbb{Z}_N$ and $f(a,b) = g^ah^{-b}$ where $h = g^x$, verify that $f$ hides $H = \langle(x,1)\rangle$ and that the promise holds. (b) Verify the instance $p = 11$, $g = 2$, $x = 3$ by computing $f(3,1)$ and $f(6,2)$ and checking both equal $f(0,0)$. (c) Explain why the dihedral group $D_N$ being non-abelian is the load-bearing fact for lattice-based cryptography, naming what Regev's reduction says and what it does *not* say.

<details>
<summary>Solutions</summary>

**P1**

(a) *Bernstein–Vazirani.* $G = \mathbb{Z}_2^n$, and $f(x) = s\cdot x \bmod 2$ maps into $S = \{0,1\}$. The hidden subgroup is

$$H = \{x : s\cdot x = 0\},$$

a subgroup of index 2 (it is the kernel of the group homomorphism $x\mapsto s\cdot x$, so by the first isomorphism theorem $G/H \cong \mathbb{Z}_2$). The two cosets are $H$ and its complement, and $f$ labels them 0 and 1.

The annihilator: characters $\chi_z(x) = (-1)^{z\cdot x}$ trivial on $H$. Since $H$ has index 2 and is the kernel of $\chi_s$, the only characters trivial on all of $H$ are $\chi_0$ and $\chi_s$, so $H^\perp = \{0, s\}$. The algorithm samples from $\{0,s\}$ — and indeed [3.3](03-03-bernstein-vazirani.md) showed it returns $s$ deterministically (the $\chi_0$ outcome is suppressed by the phase-oracle formulation). **One sample.**

(b) *Simon.* $G = \mathbb{Z}_2^n$, $f:G\to\{0,1\}^n$ two-to-one with $f(x) = f(x\oplus s)$, so

$$H = \{0, s\}, \qquad H^\perp = \{z : z\cdot s = 0\},$$

a subgroup of index 2 and size $2^{n-1}$. The algorithm samples uniformly from $H^\perp$, and you need $n-1$ linearly independent samples, so about $n+1$ runs in expectation ([3.4](03-04-simons-algorithm.md) P3). **About $n$ samples.**

Note the pleasing duality: the two problems are each other's annihilators. BV hides a large subgroup and samples from a two-element set; Simon hides a two-element subgroup and samples from a large set. Same group, same transform, opposite ends.

**P2** *The hiding function.* $G = \mathbb{Z}$ under addition, $S = \mathbb{Z}_N$, and

$$f(k) = a^k \bmod N.$$

*The promise.* $f(k) = f(k')$ iff $a^{k-k'}\equiv1\pmod N$ iff $r \mid (k-k')$, by the definition of the order as the least such exponent (and the standard fact that the set of exponents with $a^e\equiv1$ is exactly $r\mathbb{Z}$ — [`number-theory` 3.3](../../number-theory/lessons/03-03-order-and-the-unit-group.md)). So $f(k) = f(k')$ exactly when $k$ and $k'$ lie in the same coset of $H = r\mathbb{Z}$, and distinct cosets get distinct labels. The promise holds. ✓

*The characters.* In the implementation $G$ is truncated to $\mathbb{Z}_{2^m}$, whose characters are $\chi_j(k) = e^{2\pi ijk/2^m}$. Such a character is trivial on $H = r\mathbb{Z}$ when $\chi_j(r) = e^{2\pi ijr/2^m} = 1$, i.e. when

$$\frac{jr}{2^m}\in\mathbb{Z} \iff j \text{ is a multiple of } \frac{2^m}{r}.$$

So $H^\perp$ is the set of multiples of $2^m/r$ — **the comb of peaks** computed in [4.1](04-01-the-quantum-fourier-transform.md) P3, and exactly what phase estimation samples.

*The classical step.* The general recipe says: collect samples from $H^\perp$ and compute its annihilator to get $H$. Here a single sample is a multiple $j = m\cdot 2^m/r$, so $j/2^m = m/r$ — a rational with denominator $r$. Recovering $r$ from that rational is the annihilator computation, and because $r$ generally does not divide $2^m$ the sample is only *approximately* $m/r$, so the recovery needs the continued-fraction theorem rather than exact division. **Continued fractions are the $\mathbb{Z}$-case of "solve classically," just as Gaussian elimination over $\mathbb{F}_2$ is the $\mathbb{Z}_2^n$-case.**

**P3**

(a) Compute when two inputs collide:

$$f(a,b) = f(a',b') \iff g^{a-bx} = g^{a'-b'x} \iff a - bx \equiv a' - b'x \pmod N,$$

using that $g$ has order $N$. Rearranging, this says $(a-a') \equiv (b-b')x \pmod N$, i.e. the difference $(a-a', b-b')$ has the form $(kx, k)$ with $k = b-b'$. So the collisions are exactly the pairs differing by an element of

$$H = \{(kx, k) : k\in\mathbb{Z}_N\} = \langle(x,1)\rangle,$$

a cyclic subgroup of order $N$ inside a group of order $N^2$, so there are $N$ cosets. The promise holds: distinct cosets give distinct values, since the argument above is an "if and only if." ✓ And **$H$'s generator is $(x,1)$, so reading the generator reads the secret.**

(b) With $p = 11$, $g = 2$, $x = 3$, $h = 2^3 = 8$, and $N = 10$ (the order of 2 mod 11, since its powers are $2,4,8,5,10,9,7,3,6,1$).

$f(0,0) = g^0h^0 = 1$.

$f(3,1) = 2^3\cdot 8^{-1} \bmod 11$. Now $8^{-1} \equiv 7 \pmod{11}$ since $8\times7 = 56 = 5\times11+1$. So $f(3,1) = 8\times7 = 56 \equiv 1\pmod{11}$. ✓

$f(6,2) = 2^6\cdot(8^{-1})^2 = 64\times49 \bmod 11$. Reduce: $64 \equiv 9$, $49\equiv5$, and $9\times5 = 45 \equiv 1\pmod{11}$. ✓

All three equal 1, confirming $(0,0), (3,1), (6,2)$ lie in the same coset — namely $H$ itself.

(c) *What Regev showed.* In 2002 Regev proved that an efficient quantum algorithm for the **dihedral** hidden subgroup problem (specifically, for the case of order-2 hidden subgroups, with a suitable "coset sampling" access model) would yield an efficient quantum algorithm for the **poly$(n)$-unique shortest vector problem** on lattices. Since lattice-based encryption and signatures (Kyber, Dilithium, and the rest of the NIST post-quantum suite) reduce their security to lattice problems of that flavour, dihedral HSP is the natural quantum attack route.

The dihedral group $D_N$ — symmetries of a regular $N$-gon — is **non-abelian**, which is why the standard abelian algorithm does not apply. Concretely, the coset states for $D_N$ cannot be distinguished by measuring one copy at a time; the known approaches must combine many copies with entangled measurements, and Kuperberg's algorithm does this at a cost of $2^{O(\sqrt{\log N})}$ — subexponential, but superpolynomial, and requiring subexponential *quantum memory*.

*What the reduction does not say.* Three things, and each matters for how much comfort to take from it.

1. It is a **one-way** reduction. Solving dihedral HSP would break lattices; it does **not** follow that breaking lattices requires solving dihedral HSP. A completely different quantum attack could exist.
2. It does not prove lattice problems are hard. Lattice cryptography rests on an unproven conjecture, exactly as RSA rested on the conjectured hardness of factoring — and that conjecture turned out to be false against quantum computers.
3. Kuperberg's subexponential result shows the non-abelian wall is not infinitely high. It is a wall against *polynomial* attacks, and the security margins of deployed parameters are set with that in mind.

**The honest summary:** post-quantum cryptography is a bet that the abelian-to-non-abelian gap is real and durable, backed by thirty years of failed attempts and by the structural obstruction that non-abelian coset states resist single-copy measurement. It is the best available bet, and it is a bet.

</details>

## Connections

- **Backward:** this lesson is the abstraction of [3.3](03-03-bernstein-vazirani.md), [3.4](03-04-simons-algorithm.md), [4.3](04-03-order-finding-and-period-finding.md), and [4.4](04-04-shors-factoring-algorithm.md). The group theory — cosets, Lagrange's theorem, kernels, quotients, characters of abelian groups — is [`abstract-algebra` 1.5](../../abstract-algebra/lessons/01-05-cosets-lagrange.md) and [2.1](../../abstract-algebra/lessons/02-01-homomorphisms-kernels-images.md)–[2.2](../../abstract-algebra/lessons/02-02-normal-subgroups-quotients.md).
- **Forward:** [6.1](06-01-bqp-and-the-complexity-landscape.md) uses this table to say precisely what is and is not known about BQP's power — every exponential separation we can point to lives above the dashed line, and that is a narrow base for a general claim.
- **Sideways:** the schemes this breaks are [`cryptography` 3.2](../../cryptography/lessons/03-02-diffie-hellman-key-exchange.md), [3.3](../../cryptography/lessons/03-03-rsa-encryption.md), and [3.5](../../cryptography/lessons/03-05-elliptic-curve-cryptography.md); the lattice-based replacements and the migration argument are [`cryptography` 4.5](../../cryptography/lessons/04-05-post-quantum-cryptography.md), which defers exactly this machinery to this course. The characters of a finite abelian group are the representation theory that makes its Fourier transform work, and the same decomposition underlies Burnside counting in [`abstract-algebra` 2.6](../../abstract-algebra/lessons/02-06-burnside-counting.md).

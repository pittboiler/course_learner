# Group & Representation Theory · Lesson 2.2: Orthogonality relations

> ⏱ ~15 min · Module 2: Character theory · Builds on: [2.1 Characters](02-01-characters.md) · Unlocks: [2.3 Building a character table](02-03-building-character-table.md)

## Why this matters

In 2.1 you learned that a character $\chi_\rho(g) = \operatorname{tr}\rho(g)$ is a compact fingerprint of a representation — a single list of numbers, one per conjugacy class, that survives change of basis. That's nice, but a fingerprint is only useful if you can *compare* fingerprints. This lesson supplies the comparison tool: an inner product on characters. With it, characters stop being a passive record and become an instrument. You can point it at a representation and read off, mechanically, whether it's irreducible, and if not, exactly which irreducibles it's built from and how many copies of each. One formula does all of it. It is the single most-used computation in the whole module.

## The idea

Think of the "sound" a representation makes as a waveform. The irreducible representations are the pure tones — the fundamental frequencies. A general representation is a chord: some superposition of pure tones. In Fourier analysis you extract "how much of frequency $k$ is in this signal?" by *integrating the signal against $e^{ik x}$* — an inner product with a basis wave. Orthogonality of the basis waves is what makes that extraction clean: each one picks off its own coefficient and ignores the rest.

Character theory is exactly this, with the group playing the role of the domain. Characters are functions on the group, we average (the group's version of integrating) a character against another, and **the irreducible characters turn out to be an orthonormal basis of pure tones.** So to ask "how much of the irreducible $\chi_i$ is inside my representation?" you just take one inner product. The whole edifice of Fourier analysis on a finite group sits inside this one orthogonality fact.

## The formal version

Let $G$ be a finite group. A **class function** is any function $f: G \to \mathbb{C}$ that is constant on conjugacy classes ($f(hgh^{-1}) = f(g)$) — characters are the primary example. Define the **inner product of class functions**:

$$\langle \chi, \psi \rangle = \frac{1}{|G|} \sum_{g \in G} \chi(g)\,\overline{\psi(g)}.$$

In words: run over every group element, multiply the two characters (conjugating the second), and average. Because both are constant on classes, this collapses to a much shorter **class-weighted sum**: if the conjugacy classes are $C_1, \dots, C_k$ with sizes $|C_j|$ and representatives $g_j$,

$$\langle \chi, \psi \rangle = \frac{1}{|G|} \sum_{j=1}^{k} |C_j|\,\chi(g_j)\,\overline{\psi(g_j)}.$$

That's the form you actually compute with — one term per column of the character table, weighted by class size.

**First orthogonality relation (row orthogonality).** Let $\chi_1, \dots, \chi_k$ be the distinct irreducible characters of $G$. Then

$$\langle \chi_i, \chi_j \rangle = \delta_{ij} \quad\left(= \begin{cases}1 & i = j\\ 0 & i \neq j\end{cases}\right).$$

In words: the irreducible characters are **orthonormal** — distinct ones are perpendicular, each has length one. The *rows* of the character table (weighted by class size) form an orthonormal set. This is the mathematical spine of the module.

**Proof sketch (from Schur's lemma).** This is worth seeing, because it shows orthogonality is really Schur's lemma [1.5](01-05-schur-lemma.md) wearing a trace. Take irreducibles $\rho: G \to GL(V)$ and $\sigma: G \to GL(W)$. Start with *any* linear map $T: V \to W$ and **average it into an intertwiner**:

$$\tilde{T} = \frac{1}{|G|}\sum_{g \in G} \sigma(g)\,T\,\rho(g)^{-1}.$$

A one-line check shows $\sigma(h)\tilde{T} = \tilde{T}\rho(h)$ for all $h$ — the averaging symmetrizes $T$ into a genuine $G$-map. Now Schur decides its fate: if $\rho \not\cong \sigma$, then $\tilde{T} = 0$; if $\rho = \sigma$, then $\tilde{T} = \lambda I$ with $\lambda = \frac{\operatorname{tr}T}{\dim V}$ (a scalar, by the algebraically-closed case of Schur). Feeding in the elementary matrix units for $T$ and reading off entries gives the **matrix-element orthogonality relations** — the individual matrix entries $\rho(g)_{ab}$, viewed as functions on $G$, are orthogonal. Finally, **take traces** (set the matrix indices equal and sum): the matrix-entry relations contract exactly into $\langle \chi_i, \chi_j\rangle = \delta_{ij}$. Trace is the bridge from Schur to characters. (You reconstruct this in P3.)

**The irreducibility test.** Any representation decomposes as $\rho \cong m_1 \rho_1 \oplus \cdots \oplus m_k \rho_k$ (Maschke [1.4](01-04-maschke-theorem.md)), so its character is $\chi = \sum_i m_i \chi_i$ with non-negative integer multiplicities $m_i$. Because the $\chi_i$ are orthonormal, expanding the inner product gives a Pythagorean identity:

$$\langle \chi, \chi \rangle = \sum_{i} m_i^2.$$

In words: the self-inner-product of *any* character is a **sum of squares of whole numbers**. In particular:

$$\boxed{\;\langle \chi, \chi \rangle = 1 \iff \chi \text{ is irreducible}.\;}$$

The only way a sum of squared non-negative integers equals $1$ is a single $m_i = 1$ and the rest $0$ — one copy of one irreducible. And the *value* of $\langle\chi,\chi\rangle$ diagnoses the reducible case too: $\langle\chi,\chi\rangle = 2$ means $1^2+1^2$ (two distinct irreducibles) — it can't be $2^2$ — while $\langle\chi,\chi\rangle = 4$ could be $2^2$ (two copies of one) or... no, only $2^2$, since $4$ isn't a sum of two smaller distinct squares plus room; you learn to read these partitions. This is the workhorse: it tests irreducibility here, extracts individual multiplicities via $m_i = \langle \chi, \chi_i\rangle$ in [2.4](02-04-decomposing-a-representation.md), and validates a finished character table in [2.3](02-03-building-character-table.md).

**The viewpoint shift.** Representations have become **vectors** in the space of class functions, and the irreducibles are an **orthonormal basis** of that space. Every question about "what is this representation made of" is now a question about coordinates in an orthonormal basis — the most comfortable situation in all of linear algebra.

## Concrete instance

Take $G = S_3$ (order 6), whose three conjugacy classes are the identity $\{e\}$, the transpositions, and the 3-cycles, with **sizes $1, 3, 2$**. Its three irreducible characters — trivial $\chi_{\text{triv}}$, sign $\chi_{\text{sgn}}$, and the 2-dimensional standard $\chi_{\text{std}}$ — are:

| | $\{e\}$ (size 1) | transpositions (size 3) | 3-cycles (size 2) |
|---|:---:|:---:|:---:|
| $\chi_{\text{triv}}$ | $1$ | $1$ | $1$ |
| $\chi_{\text{sgn}}$ | $1$ | $-1$ | $1$ |
| $\chi_{\text{std}}$ | $2$ | $0$ | $-1$ |

Check that $\chi_{\text{std}}$ is a genuine pure tone using the class-weighted sum:

$$\langle \chi_{\text{std}}, \chi_{\text{std}} \rangle = \frac{1}{6}\Big(1\cdot 2^2 + 3\cdot 0^2 + 2\cdot(-1)^2\Big) = \frac{1}{6}(4 + 0 + 2) = 1. \quad\checkmark\ \text{irreducible}$$

And check that trivial and standard are perpendicular:

$$\langle \chi_{\text{triv}}, \chi_{\text{std}} \rangle = \frac{1}{6}\Big(1\cdot 1\cdot 2 + 3\cdot 1\cdot 0 + 2\cdot 1\cdot(-1)\Big) = \frac{1}{6}(2 + 0 - 2) = 0. \quad\checkmark\ \text{orthogonal}$$

Two lines confirm both orthonormality relations for this corner of the table. (Since these characters are real, the conjugation bar does nothing here — it only bites for genuinely complex characters, e.g. in cyclic groups.)

## Worked examples

**Example 1 (the irreducibility test in action).** Is the standard 2-dimensional representation of $S_3$ irreducible? We already have its character $\chi_{\text{std}} = (2, 0, -1)$ on the three classes. Compute $\langle \chi_{\text{std}}, \chi_{\text{std}}\rangle$ using class sizes $(1,3,2)$:

$$\langle \chi_{\text{std}}, \chi_{\text{std}} \rangle = \frac{1}{6}\big(1\cdot 4 + 3\cdot 0 + 2\cdot 1\big) = \frac{6}{6} = 1.$$

A self-inner-product of exactly $1$ ⟹ **irreducible**. No need to hunt for invariant subspaces by hand — the trace fingerprint settles it.

**Example 2 (detecting a reducible rep and its pieces).** Let $\rho_{\text{perm}}$ be the 3-dimensional permutation representation of $S_3$: each permutation acts by shuffling the coordinates of $\mathbb{C}^3$. Its character is easy — $\chi_{\text{perm}}(g) = (\text{number of points } g \text{ fixes})$:

- $e$ fixes all $3$ points → $3$
- a transposition fixes $1$ point → $1$
- a 3-cycle fixes $0$ points → $0$

So $\chi_{\text{perm}} = (3, 1, 0)$ on classes of size $(1,3,2)$. Test it:

$$\langle \chi_{\text{perm}}, \chi_{\text{perm}} \rangle = \frac{1}{6}\big(1\cdot 3^2 + 3\cdot 1^2 + 2\cdot 0^2\big) = \frac{1}{6}(9 + 3 + 0) = \frac{12}{6} = 2.$$

Not $1$, so **reducible** — and the value $2 = 1^2 + 1^2$ says it's a sum of **two distinct irreducibles, each with multiplicity one**. Which two? Project onto the basis:

$$m_{\text{triv}} = \langle \chi_{\text{perm}}, \chi_{\text{triv}}\rangle = \tfrac{1}{6}(1\cdot 3\cdot 1 + 3\cdot 1\cdot 1 + 2\cdot 0\cdot 1) = \tfrac{1}{6}(3+3+0) = 1,$$
$$m_{\text{std}} = \langle \chi_{\text{perm}}, \chi_{\text{std}}\rangle = \tfrac{1}{6}(1\cdot 3\cdot 2 + 3\cdot 1\cdot 0 + 2\cdot 0\cdot(-1)) = \tfrac{1}{6}(6+0+0) = 1,$$
$$m_{\text{sgn}} = \langle \chi_{\text{perm}}, \chi_{\text{sgn}}\rangle = \tfrac{1}{6}(1\cdot 3\cdot 1 + 3\cdot 1\cdot(-1) + 2\cdot 0\cdot 1) = \tfrac{1}{6}(3-3+0) = 0.$$

So $\rho_{\text{perm}} \cong \rho_{\text{triv}} \oplus \rho_{\text{std}}$. Sanity checks: dimensions $3 = 1 + 2$ ✓, and $\sum m_i^2 = 1^2 + 0^2 + 1^2 = 2 = \langle\chi_{\text{perm}},\chi_{\text{perm}}\rangle$ ✓. This is the full decomposition machine of [2.4](02-04-decomposing-a-representation.md) previewed — the permutation rep always contains one trivial copy (the all-ones vector everyone fixes) with the standard rep as its complement.

## Watch out

- **The bar is not optional.** Over $\mathbb{C}$ you must conjugate the second character: $\langle\chi,\psi\rangle = \frac{1}{|G|}\sum \chi(g)\overline{\psi(g)}$. For real characters (like all of $S_3$'s) it's invisible, so it's easy to forget — but cyclic groups have characters valued in roots of unity, and dropping the bar there gives wrong, even non-real, "inner products."
- **Don't forget the class sizes.** The compressed sum is $\sum_j |C_j|\,\chi(g_j)\overline{\psi(g_j)}$, *weighted*. A common slip is to sum one term per class with weight $1$. For $S_3$ that would give $\frac{1}{6}(4+0+1)$ instead of $\frac{1}{6}(4+0+2)$ — you'd conclude $\chi_{\text{std}}$ has length$^2$ $\frac{5}{6}$ and panic. Every column carries its multiplicity $|C_j|$.
- **$\langle\chi,\chi\rangle$ must be a positive integer for a true character.** If you ever get a non-integer, or something less than $1$, you've made an arithmetic error or written down an impossible character — it can't be $\sum m_i^2$. Use this as a built-in checksum.
- **Row orthogonality $\neq$ column orthogonality.** This lesson is about *rows* (characters against characters). There's a companion relation for *columns* (classes against classes), which you'll meet in [2.3](02-03-building-character-table.md) as the second tool for filling in a table. Don't conflate them.

## One-liner

> Average one character against another and the irreducibles behave like an orthonormal basis — so a single inner product $\langle\chi,\chi\rangle = \sum m_i^2$ tells you if a rep is a pure tone ($=1$) or, by projecting, exactly which chord it is.

## Problems

**P1 (🟢)** A representation of $S_3$ has character $\chi = (4, 0, 1)$ on the classes $\{e\}$, transpositions, 3-cycles (sizes $1, 3, 2$). Compute $\langle\chi,\chi\rangle$ and state whether the representation is irreducible.

**P2 (🟡)** Working in the group $G = C_4 = \{e, r, r^2, r^3\}$ (cyclic, so every element is its own class, all class sizes $1$, $|G| = 4$), two of its irreducible characters are
$$\chi_1 = (1,\ i,\ -1,\ -i), \qquad \chi_2 = (1,\ -i,\ -1,\ i)$$
on $(e, r, r^2, r^3)$.
(a) Verify $\langle\chi_1,\chi_2\rangle = 0$ (mind the conjugation).
(b) A reducible character of $C_4$ is $\psi = (3,\ i,\ -1,\ -i)$. Compute $\langle\psi,\psi\rangle$ and write it as $\sum m_i^2$ to say how many irreducible pieces $\psi$ has and with what multiplicities.

**P3 (🔴)** Sketch the derivation of the first orthogonality relation from Schur's lemma. Specifically: (a) given irreducibles $\rho, \sigma$ and *any* linear map $T$, show the average $\tilde{T} = \frac{1}{|G|}\sum_g \sigma(g)T\rho(g)^{-1}$ satisfies $\sigma(h)\tilde{T} = \tilde{T}\rho(h)$ for all $h \in G$ (so it's an intertwiner). (b) State what Schur's lemma then forces $\tilde{T}$ to be in the two cases $\rho\not\cong\sigma$ and $\rho=\sigma$, and find the scalar in the second case by taking a trace. (c) Explain in one or two sentences how taking traces turns the resulting matrix-element relations into $\langle\chi_\rho,\chi_\sigma\rangle = \delta_{\rho\sigma}$.

<details>
<summary>Solutions</summary>

**P1.** Weighted self-inner-product with sizes $(1,3,2)$:
$$\langle\chi,\chi\rangle = \frac{1}{6}\big(1\cdot 4^2 + 3\cdot 0^2 + 2\cdot 1^2\big) = \frac{1}{6}(16 + 0 + 2) = \frac{18}{6} = 3.$$
Since $3 \neq 1$, the representation is **reducible**. (Bonus: $3 = 1^2 + 1^2 + 1^2$, so it's a sum of three distinct irreducibles each once — which for $S_3$ must be $\rho_{\text{triv}}\oplus\rho_{\text{sgn}}\oplus\rho_{\text{std}}$, dimension $1+1+2 = 4$ ✓ matching $\chi(e) = 4$.)

**P2.** All class sizes are $1$ and $|G| = 4$.

(a) Conjugate the *second* argument. $\overline{\chi_2} = (1,\ \overline{-i},\ \overline{-1},\ \overline{i}) = (1,\ i,\ -1,\ -i)$. Then
$$\langle\chi_1,\chi_2\rangle = \frac{1}{4}\big(1\cdot 1 + i\cdot i + (-1)(-1) + (-i)(-i)\big) = \frac{1}{4}\big(1 + i^2 + 1 + i^2\big) = \frac{1}{4}(1 - 1 + 1 - 1) = 0.\ \checkmark$$

(b) $\overline{\psi} = (3,\ -i,\ -1,\ i)$, so $\psi(g)\overline{\psi(g)} = |\psi(g)|^2$:
$$\langle\psi,\psi\rangle = \frac{1}{4}\big(|3|^2 + |i|^2 + |-1|^2 + |-i|^2\big) = \frac{1}{4}(9 + 1 + 1 + 1) = \frac{12}{4} = 3.$$
$3 = 1^2 + 1^2 + 1^2$, so $\psi$ is a sum of **three distinct irreducible characters, each with multiplicity one**. (Consistent with $\psi(e) = 3$: three 1-dimensional pieces.)

**P3.**

(a) Compute directly, using $\sigma$ and $\rho$ being homomorphisms. For any $h$,
$$\sigma(h)\tilde{T} = \frac{1}{|G|}\sum_{g}\sigma(h)\sigma(g)T\rho(g)^{-1} = \frac{1}{|G|}\sum_g \sigma(hg)\,T\,\rho(g)^{-1}.$$
Substitute $g' = hg$ (a bijection of $G$ as $g$ ranges over $G$), so $g = h^{-1}g'$ and $\rho(g)^{-1} = \rho(g')^{-1}\rho(h)$:
$$= \frac{1}{|G|}\sum_{g'}\sigma(g')\,T\,\rho(g')^{-1}\rho(h) = \left(\frac{1}{|G|}\sum_{g'}\sigma(g')T\rho(g')^{-1}\right)\rho(h) = \tilde{T}\rho(h).$$
So $\sigma(h)\tilde{T} = \tilde{T}\rho(h)$ — $\tilde{T}$ intertwines $\rho$ and $\sigma$. ∎

(b) By Schur's lemma [1.5](01-05-schur-lemma.md):
- If $\rho \not\cong \sigma$, an intertwiner between non-isomorphic irreducibles is zero: $\tilde{T} = 0$ for every choice of $T$.
- If $\rho = \sigma$ (same irreducible on the same space, over $\mathbb{C}$), an intertwiner is a scalar: $\tilde{T} = \lambda I$. Take the trace of the defining average: $\operatorname{tr}\tilde{T} = \frac{1}{|G|}\sum_g \operatorname{tr}(\rho(g)T\rho(g)^{-1}) = \frac{1}{|G|}\sum_g \operatorname{tr}T = \operatorname{tr}T$ (trace is conjugation-invariant). But $\operatorname{tr}(\lambda I) = \lambda\dim V$, so $\lambda = \dfrac{\operatorname{tr}T}{\dim V}$.

(c) Choosing $T$ to be the matrix units $E_{ab}$ and reading entry $(c,d)$ of the equation $\tilde{T} = 0$ or $\tilde T=\lambda I$ gives the **matrix-element orthogonality relations**: $\frac{1}{|G|}\sum_g \sigma(g)_{ca}\,\overline{\rho(g)_{db}} $ vanishes when $\rho\not\cong\sigma$ and equals $\frac{1}{\dim V}\delta_{cd}\delta_{ab}$ when $\rho=\sigma$ (using unitarity to write $\rho(g)^{-1}_{bd} = \overline{\rho(g)_{db}}$). Now **set $c = a$ and $d = b$ and sum over $a$ and $b$**: the left side becomes $\frac{1}{|G|}\sum_g \big(\sum_a \sigma(g)_{aa}\big)\overline{\big(\sum_b \rho(g)_{bb}\big)} = \frac{1}{|G|}\sum_g \chi_\sigma(g)\overline{\chi_\rho(g)} = \langle\chi_\sigma, \chi_\rho\rangle$, and the right side becomes $0$ (different irreducibles) or $\frac{1}{\dim V}\sum_{a,b}\delta_{ab}\delta_{ab} = \frac{\dim V}{\dim V} = 1$ (same). Hence $\langle\chi_i,\chi_j\rangle = \delta_{ij}$. Taking the trace — summing the diagonal matrix-element relations — is precisely what converts Schur into character orthogonality. ∎

</details>

## Flashback

**From Lesson 2.1 (Characters):** Let $\rho$ be the 2-dimensional standard representation of $S_3$, realized concretely on the plane $\{(x_1,x_2,x_3): x_1+x_2+x_3 = 0\}\subset\mathbb{C}^3$ where $S_3$ permutes coordinates. Compute the character value $\chi_{\text{std}}(g)$ on a transposition $g = (1\,2)$ directly from a matrix, and confirm it matches the table entry $0$.

<details>
<summary>Solution</summary>

Use the basis $u_1 = (1,-1,0)$, $u_2 = (0,1,-1)$ of the plane $x_1+x_2+x_3 = 0$. The transposition $(1\,2)$ swaps coordinates $1$ and $2$, sending $(x_1,x_2,x_3)\mapsto(x_2,x_1,x_3)$. Act on the basis:
- $u_1 = (1,-1,0) \mapsto (-1,1,0) = -u_1$.
- $u_2 = (0,1,-1) \mapsto (1,0,-1)$. Write in the basis: $(1,0,-1) = a u_1 + b u_2 = (a,\ -a+b,\ -b)$, so $a = 1$, $-b = -1 \Rightarrow b = 1$, and check the middle: $-a + b = -1+1 = 0$ ✓. So $u_2 \mapsto u_1 + u_2$.

The matrix in the basis $(u_1, u_2)$ is
$$\rho((1\,2)) = \begin{pmatrix} -1 & 1 \\ 0 & 1 \end{pmatrix},\qquad \chi_{\text{std}}((1\,2)) = \operatorname{tr} = -1 + 1 = 0.$$
Matches the table entry $0$ for transpositions. ✓ (The character is basis-independent, so any faithful realization of the standard rep gives the same trace — the point of 2.1.)

</details>

## Connections

- **Backward:** the engine is Schur's lemma [1.5](01-05-schur-lemma.md) — orthogonality is Schur averaged into an intertwiner and then traced (P3 makes this explicit). The inputs are the characters themselves from [2.1](02-01-characters.md), and the "every rep is a sum of irreducibles" that makes $\langle\chi,\chi\rangle = \sum m_i^2$ meaningful is Maschke [1.4](01-04-maschke-theorem.md).
- **Forward:** [2.3](02-03-building-character-table.md) builds character tables from scratch using row orthogonality (this lesson) *plus* a companion column-orthogonality relation. [2.4](02-04-decomposing-a-representation.md) is Example 2 industrialized — extract every multiplicity by $m_i = \langle\chi,\chi_i\rangle$. [2.5](02-05-regular-representation.md) applies all of this to the regular representation, where the multiplicities come out equal to the dimensions.
- **Sideways (linear algebra):** this is the [linalg-refresher](../../linalg-refresher/syllabus.md) theory of orthonormal bases and inner-product spaces, transplanted to the space of class functions — projecting a vector onto an orthonormal basis via inner products is *literally* what decomposition is here.
- **Sideways (Fourier analysis):** for an abelian group the irreducible characters are the group's "frequencies," and this orthogonality relation is exactly the orthogonality of the Fourier basis $e^{2\pi i k n/N}$ — character theory is the non-abelian generalization of Fourier analysis, with $\langle\chi,\chi_i\rangle$ playing the role of computing a Fourier coefficient.

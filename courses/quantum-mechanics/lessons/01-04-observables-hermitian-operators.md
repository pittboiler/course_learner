# Quantum Mechanics · Lesson 1.4: Observables as Hermitian operators

> ⏱ ~15 min · Module 1: The quantum framework · Builds on: [1.3 Hilbert space and Dirac notation](#/lesson/quantum-mechanics/01-03-hilbert-space-dirac-notation.md), [1.2 The wavefunction and the Born rule](#/lesson/quantum-mechanics/01-02-wavefunction-born-rule.md) · Unlocks: 1.5 measurement & expectation values; every dynamical operator in Module 2 onward

## Why this matters

You now have states as vectors in a Hilbert space. But a theory of *measurement* needs a second ingredient: a mathematical object for each measurable quantity — energy, position, momentum, spin. Quantum mechanics makes a single, decisive choice: **every observable is a linear operator, and not just any operator — a Hermitian one.** That one adjective is doing enormous work. It is what guarantees that measured values come out *real* (you never read an imaginary number off a voltmeter), that the possible outcomes form a clean *spectrum*, and that the outcome-states form an *orthonormal basis* you can expand any state in. This lesson is where the linear algebra you drilled becomes physics.

## The idea

A measurement takes a state and returns a number — one of a menu of allowed values. So to each observable we attach an operator $\hat A$ whose **eigenvalues are exactly that menu of allowed values**, and whose **eigenvectors are the states that give a definite reading**. If the system is in eigenstate $|a\rangle$ with $\hat A|a\rangle = a|a\rangle$, then measuring $A$ yields $a$ with certainty.

Why Hermitian specifically? Two demands force it. First, real world readings: the eigenvalues had better be real numbers. Second, distinguishability: two different definite-outcome states (say "energy 3" and "energy 5") should be perfectly telling-apart-able — orthogonal. Hermitian operators are precisely the operators that deliver **both** for free, via the spectral theorem you proved in linear algebra. Everything else in this lesson is unpacking that sentence.

## The formal version

**Observable = Hermitian operator.** Let $\hat A$ be a linear operator on the Hilbert space $\mathcal H$. Its **adjoint** $\hat A^\dagger$ is the operator satisfying, for all states $|\phi\rangle,|\psi\rangle$,

$$\langle \phi \,|\, \hat A \psi\rangle = \langle \hat A^\dagger \phi \,|\, \psi\rangle .$$

In words: $\hat A^\dagger$ is what you get when you move $\hat A$ across the inner product to the other slot. In matrix language $\hat A^\dagger = (\hat A^*)^{\mathsf T}$ — conjugate every entry **and** transpose. The operator is **Hermitian** (self-adjoint) when it is its own adjoint:

$$\hat A = \hat A^\dagger \quad\Longleftrightarrow\quad \langle \phi \,|\, \hat A \psi\rangle = \langle \hat A \phi \,|\, \psi\rangle \ \ \text{for all } |\phi\rangle,|\psi\rangle .$$

In words: it doesn't matter which vector $\hat A$ acts on — you may let it act to the right or to the left, same answer.

**The eigenvalue equation and the spectrum.** The allowed outcomes of measuring $A$ are the solutions $a$ of

$$\hat A\,|a\rangle = a\,|a\rangle , \qquad |a\rangle \neq 0 .$$

In words: $a$ is a value the apparatus can return, and $|a\rangle$ is the state that returns it every time. The set of all such $a$ is the **spectrum** of $\hat A$ — for the finite-dimensional and discrete cases here, just its eigenvalues.

**The two guarantees (spectral theorem).** For a Hermitian $\hat A$:

1. **Real eigenvalues.** Every $a$ is real. Quick proof: from $\hat A|a\rangle = a|a\rangle$, take the inner product with $|a\rangle$: $\langle a|\hat A|a\rangle = a\langle a|a\rangle$. Hermiticity means $\langle a|\hat A|a\rangle$ equals its own conjugate (it's real), and $\langle a|a\rangle>0$, so $a$ is real.
2. **Orthogonal eigenvectors** for distinct eigenvalues, and they can be assembled into a **complete orthonormal basis** of $\mathcal H$.

This is exactly the spectral theorem from [linalg-refresher 5.1](#/lesson/linalg-refresher/05-01-spectral-theorem-quadratic-forms.md), now wearing a physics uniform. Completeness lets us write the **spectral decomposition**:

$$\hat A = \sum_a a\,|a\rangle\langle a| , \qquad \sum_a |a\rangle\langle a| = \hat{\mathbb 1} .$$

In words: $\hat A$ is nothing but "for each allowed outcome $a$, project onto its eigenstate and weight by $a$." The projectors $\hat P_a = |a\rangle\langle a|$ sum to the identity (the completeness relation from 1.3) — this is the mathematical spine of the measurement rule you'll meet in 1.5.

**The canonical operators.** On wavefunctions $\psi(x)$ (the position representation), the two workhorse observables are

$$\hat x\,\psi(x) = x\,\psi(x), \qquad \hat p\,\psi(x) = -i\hbar\,\frac{\partial \psi}{\partial x}.$$

In words: **position** acts by multiplying by the coordinate; **momentum** acts by differentiating and multiplying by $-i\hbar$. That factor of $-i\hbar$ is not decoration — it is exactly what makes $\hat p$ Hermitian (Problem 3), and it seeds the commutator $[\hat x,\hat p]=i\hbar$ that Module 3 turns into the uncertainty principle.

**Unitary operators (a preview).** A close cousin is the **unitary** operator, defined by $\hat U^\dagger \hat U = \hat{\mathbb 1}$, equivalently $\hat U^\dagger = \hat U^{-1}$. Where Hermitian operators are the *observables*, unitary operators are the *transformations*: they preserve every inner product, $\langle \hat U\phi|\hat U\psi\rangle = \langle\phi|\psi\rangle$, hence preserve norms and probabilities. Time evolution $\hat U(t)=e^{-i\hat H t/\hbar}$ is unitary and built from the Hermitian Hamiltonian — we'll meet it properly in Module 2.

## Concrete instance

Take the Hermitian matrix (a hydrogen-of-formalism example — small enough to do fully by hand)

$$A = \begin{pmatrix} 2 & i \\ -i & 2 \end{pmatrix}.$$

It is Hermitian: the diagonal is real, and the off-diagonals are conjugates, $A_{21} = -i = \overline{A_{12}} = \overline{\,i\,}$. Equivalently $(A^*)^{\mathsf T} = A$.

**Eigenvalues (must come out real).**

$$\det(A-\lambda\mathbb 1) = (2-\lambda)^2 - (i)(-i) = (2-\lambda)^2 - 1 = 0 \ \Rightarrow\ 2-\lambda = \pm 1 \ \Rightarrow\ \boxed{\lambda = 3,\ 1.}$$

Both real. ✓

**Eigenvectors (must come out orthogonal).**

- $\lambda=3$: $(A-3\mathbb 1)v=0$ gives $-v_1 + i v_2 = 0$, so $v_1 = i v_2$. Take $|3\rangle = \tfrac{1}{\sqrt 2}\begin{pmatrix} i \\ 1\end{pmatrix}$ (the $\tfrac{1}{\sqrt2}$ normalizes: $|i|^2+|1|^2=2$).
- $\lambda=1$: $(A-\mathbb 1)v=0$ gives $v_1 + i v_2 = 0$, so $v_1 = -i v_2$. Take $|1\rangle = \tfrac{1}{\sqrt 2}\begin{pmatrix} -i \\ 1\end{pmatrix}$.

Orthogonality check (remember the bra conjugates):

$$\langle 3 | 1\rangle = \tfrac12\big[\,\overline{i}\,(-i) + \overline{1}\,(1)\,\big] = \tfrac12\big[(-i)(-i) + 1\big] = \tfrac12\big[i^2 + 1\big] = \tfrac12(-1+1) = 0. \ ✓$$

**Spectral decomposition.** Build the projectors $\hat P_a = |a\rangle\langle a|$:

$$P_3 = \tfrac12\begin{pmatrix} i \\ 1\end{pmatrix}\begin{pmatrix} -i & 1\end{pmatrix} = \tfrac12\begin{pmatrix} 1 & i \\ -i & 1\end{pmatrix}, \qquad P_1 = \tfrac12\begin{pmatrix} -i \\ 1\end{pmatrix}\begin{pmatrix} i & 1\end{pmatrix} = \tfrac12\begin{pmatrix} 1 & -i \\ i & 1\end{pmatrix}.$$

Completeness: $P_3 + P_1 = \tfrac12\begin{pmatrix} 2 & 0 \\ 0 & 2\end{pmatrix} = \mathbb 1$. ✓ And reconstruction:

$$3P_3 + 1\,P_1 = \tfrac12\begin{pmatrix} 3+1 & 3i - i \\ -3i + i & 3+1\end{pmatrix} = \tfrac12\begin{pmatrix} 4 & 2i \\ -2i & 4\end{pmatrix} = \begin{pmatrix} 2 & i \\ -i & 2\end{pmatrix} = A. \ ✓$$

Every promise of the spectral theorem, cashed out in one $2\times 2$.

## Worked examples

**Example 1 (mechanical — is it Hermitian, and what does it measure?).** Consider $\hat A = \begin{pmatrix} 0 & -i \\ i & 0\end{pmatrix}$ (this is the Pauli matrix $\sigma_y$, the $y$-spin observable of Module 4). Check: diagonal real ✓, and $A_{21} = i = \overline{-i} = \overline{A_{12}}$ ✓ — Hermitian. Eigenvalues: $\det\!\begin{pmatrix} -\lambda & -i \\ i & -\lambda\end{pmatrix} = \lambda^2 - (-i)(i) = \lambda^2 - 1 = 0$, so $\lambda = \pm 1$. **Interpretation:** measuring $y$-spin can only return $+1$ or $-1$ (in units of $\hbar/2$) — the two-valuedness of spin is the two-point spectrum of a $2\times2$ Hermitian operator. Nothing else is possible; the spectrum *is* the physics.

**Example 2 (why you'd care — expectation value from the decomposition).** Suppose a system is in the normalized state $|\psi\rangle = \tfrac{1}{\sqrt2}\big(|3\rangle + |1\rangle\big)$, using the eigenstates of the concrete-instance $A$ above. What's the average of $A$ over many measurements? Using the spectral decomposition and orthonormality of $\{|3\rangle,|1\rangle\}$,

$$\langle \hat A\rangle = \langle\psi|\hat A|\psi\rangle = \sum_a a\,|\langle a|\psi\rangle|^2 = 3\cdot\left|\tfrac{1}{\sqrt2}\right|^2 + 1\cdot\left|\tfrac{1}{\sqrt2}\right|^2 = 3\cdot\tfrac12 + 1\cdot\tfrac12 = 2.$$

In words: the eigenvalues, weighted by the probabilities $|\langle a|\psi\rangle|^2$ of landing in each eigenstate. This *is* the Born rule read through operators, and it's the whole content of Lesson 1.5 — the expectation value is a spectral sum.

## Watch out

- You might think "Hermitian just means symmetric." For **complex** matrices that's wrong: $\begin{pmatrix} 1 & i \\ i & 1\end{pmatrix}$ is symmetric but **not** Hermitian ($A_{21}=i\neq\overline{A_{12}}=-i$), and it has complex eigenvalues $1\pm i$. You need conjugate-*and*-transpose, i.e. $\hat A = (\hat A^*)^{\mathsf T}$.
- You might think real eigenvalues alone certify an observable. They don't: a non-Hermitian matrix can have real eigenvalues (e.g. any real upper-triangular matrix), but its eigenvectors won't be orthogonal, so you lose the clean measurement structure. Hermiticity is the property that buys *both* real spectrum and orthonormal eigenbasis.
- You might think $\tfrac{d}{dx}$ is an observable — it's a natural operator, after all. But $\tfrac{d}{dx}$ by itself is **anti**-Hermitian ($(\tfrac{d}{dx})^\dagger = -\tfrac{d}{dx}$); its "eigenvalues" would be imaginary. The physical momentum is $\hat p=-i\hbar\tfrac{d}{dx}$, and the factor $-i\hbar$ is exactly the fix (Problem 3).
- A subtlety we'll mostly wave past: for unbounded operators like $\hat p$, "Hermitian" also carries a **domain** condition — the boundary terms in the integration by parts must vanish (functions decaying at $\pm\infty$, or matching at box walls). Where that fails, $\hat A=\hat A^\dagger$ can quietly break. Griffiths calls the safe version "Hermitian"; the fully careful version is "self-adjoint."

## One-liner

> Observables are Hermitian operators because Hermiticity is the exact price of admission for real measurement outcomes and an orthonormal basis of definite-outcome states — and $\hat A = \sum_a a\,|a\rangle\langle a|$ says an observable *is* its spectrum.

## Problems

**P1 (🟢)** For each matrix, decide whether it is Hermitian (show the check), and if so state whether its eigenvalues must be real without computing them:

$$\text{(a) } \begin{pmatrix} 2 & 3-i \\ 3+i & 5\end{pmatrix}, \qquad \text{(b) } \begin{pmatrix} 1 & 2i \\ 2i & 1\end{pmatrix}, \qquad \text{(c) } \begin{pmatrix} 0 & 4 \\ 4 & -1\end{pmatrix}.$$

**P2 (🟡)** Diagonalize the Hermitian operator $\hat B = \begin{pmatrix} 0 & -i \\ i & 0\end{pmatrix}$ (Pauli $\sigma_y$): find both eigenvalues, a normalized eigenvector for each, verify the two are orthogonal, and write the spectral decomposition $\hat B = \sum_b b\,|b\rangle\langle b|$. (These eigenstates are the spin-pointing-along-$\pm y$ states you'll use in Module 4.)

**P3 (🔴, optional)** Show that $\hat p = -i\hbar\dfrac{d}{dx}$ is Hermitian on the space of square-integrable functions that vanish as $x\to\pm\infty$. That is, prove $\langle \phi|\hat p\,\psi\rangle = \langle \hat p\,\phi|\psi\rangle$ using integration by parts, and identify exactly where the boundary condition is used. (This is the boundary-term care from the calculus refresher, now load-bearing.) Then explain in one line why $\tfrac{d}{dx}$ alone fails the test.

<details>
<summary>Solutions</summary>

**P1**
- (a) Diagonal $2,5$ real; $A_{21}=3+i = \overline{3-i} = \overline{A_{12}}$. **Hermitian** ✓ → eigenvalues guaranteed real.
- (b) Diagonal $1,1$ real, but $A_{21}=2i \neq \overline{A_{12}} = \overline{2i} = -2i$. **Not Hermitian** (it's symmetric, not Hermitian). No guarantee — in fact its eigenvalues are $1\pm 2i$, complex.
- (c) Real and symmetric, so it equals its own conjugate-transpose. **Hermitian** ✓ (a real symmetric matrix is automatically Hermitian) → eigenvalues real.

**P2** Eigenvalues: $\det\!\begin{pmatrix} -b & -i \\ i & -b\end{pmatrix} = b^2 - (-i)(i) = b^2 - 1 = 0 \Rightarrow b = \pm 1$.

- $b=+1$: $(\hat B-\mathbb 1)v=0$ gives $-v_1 - i v_2 = 0$, so $v_1 = -i v_2$. Normalized: $|{+}\rangle = \tfrac{1}{\sqrt2}\begin{pmatrix} -i \\ 1\end{pmatrix}$.
- $b=-1$: $(\hat B+\mathbb 1)v=0$ gives $v_1 - i v_2 = 0$, so $v_1 = i v_2$. Normalized: $|{-}\rangle = \tfrac{1}{\sqrt2}\begin{pmatrix} i \\ 1\end{pmatrix}$.

Orthogonality: $\langle +|-\rangle = \tfrac12\big[\overline{(-i)}\,(i) + \overline{1}\,(1)\big] = \tfrac12\big[(i)(i)+1\big] = \tfrac12(-1+1) = 0$. ✓

Projectors:
$$P_+ = |{+}\rangle\langle{+}| = \tfrac12\begin{pmatrix} -i \\ 1\end{pmatrix}\begin{pmatrix} i & 1\end{pmatrix} = \tfrac12\begin{pmatrix} 1 & -i \\ i & 1\end{pmatrix}, \qquad P_- = \tfrac12\begin{pmatrix} 1 & i \\ -i & 1\end{pmatrix}.$$
Spectral decomposition: $\hat B = (+1)P_+ + (-1)P_- = \tfrac12\begin{pmatrix} 0 & -2i \\ 2i & 0\end{pmatrix} = \begin{pmatrix} 0 & -i \\ i & 0\end{pmatrix}$. ✓ (And $P_++P_-=\mathbb 1$.)

**P3** Compute the left side and integrate by parts. Write $\langle\phi|\hat p\,\psi\rangle = \int_{-\infty}^{\infty}\phi^*(x)\big(-i\hbar\,\psi'(x)\big)\,dx = -i\hbar\int_{-\infty}^{\infty}\phi^*\psi'\,dx.$ Integration by parts with $u=\phi^*,\ dv=\psi'\,dx$:

$$-i\hbar\int_{-\infty}^{\infty}\phi^*\psi'\,dx = -i\hbar\Big[\phi^*\psi\Big]_{-\infty}^{\infty} + i\hbar\int_{-\infty}^{\infty}(\phi^*)'\,\psi\,dx.$$

The boundary term $\big[\phi^*\psi\big]_{-\infty}^{\infty}$ **vanishes** precisely because $\phi,\psi\to 0$ as $x\to\pm\infty$ — this is the one place the decay condition is used. So

$$\langle\phi|\hat p\,\psi\rangle = i\hbar\int_{-\infty}^{\infty}(\phi^*)'\,\psi\,dx = \int_{-\infty}^{\infty}\big(-i\hbar\,\phi'\big)^{*}\psi\,dx = \langle \hat p\,\phi|\psi\rangle,$$

using $\big(-i\hbar\,\phi'\big)^* = +i\hbar\,(\phi')^* = i\hbar(\phi^*)'$. Hence $\hat p = \hat p^\dagger$ on this space. ✓

The factor $-i$ is essential: for $\hat D = \tfrac{d}{dx}$ the same steps give $\langle\phi|\hat D\psi\rangle = -\langle \hat D\phi|\psi\rangle$ (no conjugated $i$ to flip the sign back), so $\hat D^\dagger = -\hat D$ — anti-Hermitian, and unfit to be an observable. Multiplying by $-i\hbar$ rotates the anti-Hermitian $\tfrac{d}{dx}$ into a Hermitian operator.

</details>

## Flashback

**From Lesson 1.3 (Hilbert space and Dirac notation):** In an orthonormal basis $\{|0\rangle,|1\rangle\}$, let $|\psi\rangle = 3|0\rangle - 4i\,|1\rangle$. (a) Write the bra $\langle\psi|$. (b) Compute $\langle\psi|\psi\rangle$ and give the normalized state. (c) Compute the amplitude $\langle 0|\psi\rangle$.

<details>
<summary>Solution</summary>

(a) The bra conjugates every coefficient: $\langle\psi| = 3\langle 0| + 4i\,\langle 1|$ (since $\overline{-4i} = +4i$).

(b) By orthonormality ($\langle 0|0\rangle=\langle 1|1\rangle=1$, $\langle 0|1\rangle=0$):
$$\langle\psi|\psi\rangle = |3|^2 + |{-}4i|^2 = 9 + 16 = 25.$$
The norm is $5$, so the normalized state is $|\hat\psi\rangle = \tfrac15\big(3|0\rangle - 4i\,|1\rangle\big)$.

(c) $\langle 0|\psi\rangle = 3\langle 0|0\rangle - 4i\langle 0|1\rangle = 3$. (This is the amplitude for outcome "$0$"; its modulus-squared over the norm, $9/25$, is the Born probability — foreshadowing 1.5.)

</details>

## Connections

- **Backward:** this is the [linalg-refresher spectral theorem](#/lesson/linalg-refresher/05-01-spectral-theorem-quadratic-forms.md) and [eigenvalue machinery](#/lesson/linalg-refresher/03-01-eigenvalues-eigenvectors.md) applied to physics — real eigenvalues + orthonormal eigenbasis are theorems you already own. The bra-as-conjugate and completeness relation come straight from [1.3](#/lesson/quantum-mechanics/01-03-hilbert-space-dirac-notation.md).
- **Forward:** Lesson 1.5 turns the spectral decomposition into the measurement postulate ($|\langle a|\psi\rangle|^2$ = probability, $\langle\hat A\rangle = \sum_a a\,|\langle a|\psi\rangle|^2$). The Hamiltonian $\hat H$ (Module 2), angular momentum $\hat L^2,\hat L_z$ (Module 4), and spin/Pauli matrices (4.5) are all just specific Hermitian operators; unitary time evolution $e^{-i\hat H t/\hbar}$ (Module 2) is the observable's exponentiated cousin.
- **Sideways (analytical mechanics):** the position/momentum pair $\hat x,\hat p$ quantizes the classical canonical pair $(x,p)$; the commutator $[\hat x,\hat p]=i\hbar$ that Module 3 builds is the operator echo of the Poisson bracket $\{x,p\}=1$ — the bridge from Hamiltonian mechanics into quantum mechanics.

# Quantum Mechanics · Lesson 3.4: Compatible observables and complete sets

> ⏱ ~15 min · Module 3: The harmonic oscillator and operator formalism · Builds on: [3.3 Commutators and the uncertainty principle](#/lesson/quantum-mechanics/03-03-commutators-uncertainty.md), [1.4 Observables as Hermitian operators](#/lesson/quantum-mechanics/01-04-observables-hermitian-operators.md) · Unlocks: [3.5 The Heisenberg picture and Ehrenfest's theorem](#/lesson/quantum-mechanics/03-05-heisenberg-picture-ehrenfest.md), the hydrogen quantum numbers of Module 4

## Why this matters

In 3.3 you learned that $\hat x$ and $\hat p$ can't both be sharp at once — their non-commutation *is* the uncertainty principle. But quantum mechanics isn't only about what you *can't* co-measure. Every atom is labeled by a tidy tuple of quantum numbers $(n,\ell,m,m_s)$, and the periodic table is clean precisely because those four quantities **can** all be sharp together. Which observables share that privilege, and which fight like $\hat x$ and $\hat p$? The answer is startlingly simple and entirely algebraic: two observables are jointly measurable **exactly when their operators commute**. This one criterion tells you which measurements disturb each other, why some energy levels need more than one label (degeneracy), and how a *complete set of commuting observables* pins down every state uniquely — the bookkeeping that organizes all of atomic physics.

## The idea

Call two observables **compatible** if a state can have a sharp value of both at the same time — a **simultaneous eigenstate**, one arrow that is an eigenvector of both operators. If such states form a full basis, then measuring one observable never scrambles the other: you can know both, forever, and the order you measure them in doesn't matter.

When does this happen? Picture each observable as a machine that sorts states into bins by eigenvalue. Two machines are compatible when they can sort along the *same* set of reference arrows — a **common eigenbasis**. Diagonal matrices in a shared basis always commute, so compatibility forces $[\hat A,\hat B]=0$; and it turns out the converse holds too. Commuting is the fingerprint of a shared eigenbasis.

Two complications make this rich rather than trivial:

- **Incompatibility.** $\hat x$ and $\hat p$ don't commute, so they have *no* common eigenbasis: a state sharp in one is a spread-out superposition in the other. Non-commutation and uncertainty are the same fact.
- **Degeneracy.** Sometimes one observable's eigenvalue is shared by many independent states (a **degenerate** eigenvalue). Then "$\hat A = a$" doesn't name a unique state — like knowing someone's last name in a big family. You bring in a *second* commuting observable whose eigenvalue breaks the tie, and if ties remain, a third. A **complete set of commuting observables (CSCO)** is enough labels to name every state exactly once.

## The formal version

**Compatible observables.** Two observables with Hermitian operators $\hat A,\hat B$ are **compatible** if there is an orthonormal basis of states that are eigenvectors of *both*: $\hat A|k\rangle = a_k|k\rangle$ and $\hat B|k\rangle = b_k|k\rangle$ for every basis vector $|k\rangle$.

*In words:* you can build the whole state space out of states that carry a sharp value of $A$ **and** a sharp value of $B$ simultaneously.

**The compatibility theorem (simultaneous diagonalization).** For Hermitian $\hat A,\hat B$,

$$[\hat A,\hat B]\equiv \hat A\hat B - \hat B\hat A = 0 \quad\Longleftrightarrow\quad \hat A,\hat B \text{ share a common orthonormal eigenbasis.}$$

*In words:* commuting is exactly the condition for joint measurability — no more, no less.

*Why (⇐):* if $\{|k\rangle\}$ is a common eigenbasis, then on each basis vector $\hat A\hat B|k\rangle = a_k b_k|k\rangle = \hat B\hat A|k\rangle$. Two operators that agree on a basis agree everywhere, so $[\hat A,\hat B]=0$.

*Why (⇒):* suppose $[\hat A,\hat B]=0$ and $\hat A|a\rangle = a|a\rangle$. Then

$$\hat A\big(\hat B|a\rangle\big) = \hat B\hat A|a\rangle = a\big(\hat B|a\rangle\big),$$

so $\hat B|a\rangle$ lives in the same $a$-eigenspace — **$\hat B$ maps each eigenspace of $\hat A$ into itself.** If $a$ is non-degenerate, that eigenspace is one-dimensional, so $\hat B|a\rangle \propto |a\rangle$ and $|a\rangle$ is *automatically* an eigenstate of $\hat B$. If $a$ is degenerate, restrict $\hat B$ to that eigenspace: it is still Hermitian there, so by the **spectral theorem** ([`linalg-refresher` 5.1](#/lesson/linalg-refresher/05-01-spectral-theorem-quadratic-forms.md)) it has an orthonormal eigenbasis *within* the subspace — and every vector in that subspace is already an $\hat A$-eigenstate. Collecting these across all eigenspaces builds a common orthonormal eigenbasis. $\blacksquare$

**Incompatible observables.** If $[\hat A,\hat B]\neq 0$ there is no common eigenbasis, and the generalized uncertainty relation from 3.3,

$$\Delta A\,\Delta B \ \ge\ \tfrac12\big|\langle[\hat A,\hat B]\rangle\big|,$$

forbids both spreads from vanishing wherever $\langle[\hat A,\hat B]\rangle\neq 0$. The canonical case $[\hat x,\hat p]=i\hbar$ has *no* simultaneous eigenstate anywhere: position and momentum can never be jointly sharp.

*In words:* non-commuting observables trade certainty — sharpening one blurs the other.

**Degeneracy and the CSCO.** An eigenvalue $a$ of $\hat A$ is **degenerate** if its eigenspace has dimension $> 1$; then $a$ alone fails to specify a state. A **complete set of commuting observables** is a set $\{\hat A,\hat B,\hat C,\dots\}$ that is (i) **mutually commuting** — every pair commutes, so all share one eigenbasis — and (ii) **maximal**: the joint eigenvalue tuple $(a,b,c,\dots)$ singles out a unique simultaneous eigenstate (up to phase), and no further independent commuting observable is needed.

*In words:* a CSCO is the shortest list of co-measurable labels that gives every state a unique address. For the hydrogen atom that address is $(n,\ell,m,m_s)$ — the eigenvalues of energy, $\hat L^2$, $\hat L_z$, and $\hat S_z$, four mutually commuting observables (Module 4).

**Measurement of a commuting set is non-disturbing.** If the state is a joint eigenstate $|a,b\rangle$, measuring $\hat A$ returns $a$ with certainty and leaves the state $|a,b\rangle$ untouched — so $B$ is *still* sharp afterward. Sequential measurements of compatible observables commute as physical operations: the order doesn't matter and neither erases the other's result.

## Concrete instance

Take a three-state system. Let

$$\hat A = \begin{bmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix}, \qquad \hat B = \begin{bmatrix} 0 & 2 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 4 \end{bmatrix}.$$

**$\hat A$ is degenerate.** Its eigenvalue $a=3$ is shared by the entire plane $\mathrm{span}\{e_1,e_2\}$: *any* combination $\alpha e_1 + \beta e_2$ gives $\hat A(\alpha e_1+\beta e_2) = 3(\alpha e_1+\beta e_2)$. So "$\hat A = 3$" names a whole 2D subspace, not a state — the label is ambiguous.

**They commute.** $\hat B$ is *block-diagonal in the same pattern as $\hat A$* (a $2\times 2$ block acting inside the degenerate plane, a $1\times 1$ block on $e_3$), which is exactly the "$\hat B$ preserves each $\hat A$-eigenspace" condition from the proof. Directly,

$$\hat A\hat B = \begin{bmatrix} 0 & 6 & 0 \\ 6 & 0 & 0 \\ 0 & 0 & 4 \end{bmatrix} = \hat B\hat A \quad\Longrightarrow\quad [\hat A,\hat B]=0.$$

**$\hat B$ resolves the degeneracy.** Diagonalize $\hat B$ inside the ambiguous plane: the block $\begin{bmatrix}0&2\\2&0\end{bmatrix}$ has eigenvalues $\pm 2$ with eigenvectors $(1,1)$ and $(1,-1)$. This carves the plane into two distinct directions. The common orthonormal eigenbasis is

$$u_1 = \tfrac{1}{\sqrt2}(e_1+e_2), \quad u_2 = \tfrac{1}{\sqrt2}(e_1-e_2), \quad u_3 = e_3,$$

with joint eigenvalues

| state | $\hat A$ (value $a$) | $\hat B$ (value $b$) | label $(a,b)$ |
|---|---|---|---|
| $u_1$ | $3$ | $+2$ | $(3,+2)$ |
| $u_2$ | $3$ | $-2$ | $(3,-2)$ |
| $u_3$ | $1$ | $+4$ | $(1,+4)$ |

Now every state has a **unique** address: $u_1$ and $u_2$ were indistinguishable to $\hat A$ (both $a=3$), but $\hat B$ tells them apart ($+2$ vs $-2$). All three pairs $(a,b)$ are distinct, so $\{\hat A,\hat B\}$ is a **CSCO** for this system — a single observable ($\hat A$) was not enough, two mutually commuting ones are. That is degeneracy resolution in miniature, and it is precisely how $\hat L^2$ and $\hat L_z$ jointly label angular-momentum states in Module 4.

## Worked examples

**Example 1 (mechanical — commute, then co-diagonalize).** Are

$$\hat A = \begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix}, \qquad \hat B = \begin{bmatrix} 4 & 3 \\ 3 & 4 \end{bmatrix}$$

compatible, and if so what is their common eigenbasis? Test the commutator:

$$\hat A\hat B = \begin{bmatrix} 10 & 11 \\ 11 & 10 \end{bmatrix} = \hat B\hat A \quad\Rightarrow\quad [\hat A,\hat B]=0.$$

Compatible. By the theorem they share an eigenbasis; both are symmetric with the same structure, so try $(1,1)$ and $(1,-1)$:

$$\hat A(1,1)^\top = 3\,(1,1)^\top,\quad \hat A(1,-1)^\top = -1\,(1,-1)^\top; \qquad \hat B(1,1)^\top = 7\,(1,1)^\top,\quad \hat B(1,-1)^\top = 1\,(1,-1)^\top.$$

In the normalized shared basis $\{\tfrac{1}{\sqrt2}(1,1),\ \tfrac{1}{\sqrt2}(1,-1)\}$ *both* operators are diagonal at once, $\hat A = \mathrm{diag}(3,-1)$ and $\hat B = \mathrm{diag}(7,1)$. A state in this basis carries a sharp $A$ and a sharp $B$ together — e.g. the first basis vector is the unique state with $(a,b)=(3,7)$.

**Example 2 (why you'd care — incompatibility is uncertainty).** Two components of spin, $\hat S_x = \tfrac{\hbar}{2}\sigma_x$ and $\hat S_z = \tfrac{\hbar}{2}\sigma_z$ with $\sigma_x=\begin{bmatrix}0&1\\1&0\end{bmatrix}$, $\sigma_z=\begin{bmatrix}1&0\\0&-1\end{bmatrix}$. Compute

$$[\sigma_x,\sigma_z] = \begin{bmatrix}0&-1\\1&0\end{bmatrix} - \begin{bmatrix}0&1\\-1&0\end{bmatrix} = \begin{bmatrix}0&-2\\2&0\end{bmatrix} = -2i\,\sigma_y \ \neq 0.$$

So $[\hat S_x,\hat S_z]=-i\hbar\hat S_y \neq 0$: **incompatible.** The eigenstates of $\hat S_z$ are spin-up/down $|{\uparrow}\rangle,|{\downarrow}\rangle$ — perfectly sharp $z$-spin. But in those states $\hat S_x$ is maximally uncertain: $|{\uparrow}\rangle = \tfrac{1}{\sqrt2}(|{+}x\rangle + |{-}x\rangle)$ is a 50/50 superposition of $\hat S_x$'s eigenstates. There is no state with both sharp, so measuring $S_x$ *destroys* any definite $S_z$ you had — the operational face of $\Delta S_x\,\Delta S_z \ge \tfrac{\hbar}{2}|\langle \hat S_y\rangle|$. This is the engine of the Stern–Gerlach sequential experiments you'll meet in [4.5](#/lesson/quantum-mechanics/04-05-spin-pauli-stern-gerlach.md).

## Watch out

- You might think "commuting means the two matrices are equal, or one is a multiple of the other." No — commuting means they share *eigenvectors*, not eigenvalues. In Example 1, $\hat A$ and $\hat B$ have completely different spectra ($\{3,-1\}$ vs $\{7,1\}$); they only agree on which directions are the eigen-directions.
- You might think a common eigenbasis means *every* eigenstate of $\hat A$ is automatically an eigenstate of $\hat B$. Only when $\hat A$ is **non-degenerate**. In a degenerate eigenspace of $\hat A$, most vectors are *not* $\hat B$-eigenstates — you must diagonalize $\hat B$ inside that subspace to pick the ones that are. (In the Concrete instance, $e_1$ is an $\hat A$-eigenstate but *not* a $\hat B$-eigenstate; only the combinations $u_1,u_2$ work.)
- You might think incompatible observables can *never* share even a single eigenstate. They can share some (e.g. $\hat L^2$ and $\hat L_x$ share the $\ell=0$ state) — what they cannot have is a *complete basis* of common eigenstates. "Compatible" is the all-or-nothing basis statement, controlled by $\langle[\hat A,\hat B]\rangle$ state by state.
- You might think adding more commuting observables always shrinks ambiguity. Only *independent* ones do. Throwing in $\hat A^2$ alongside $\hat A$ adds no new labels — a CSCO must be a set of functionally independent operators.

## One-liner

> Two observables are jointly measurable exactly when their operators commute; a complete set of commuting observables is the shortest list of co-measurable labels that gives every state a unique address.

## Problems

**P1 (🟢)** Determine whether

$$\hat A = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}, \qquad \hat B = \begin{bmatrix} 5 & 3 \\ 3 & 5 \end{bmatrix}$$

are compatible by computing $[\hat A,\hat B]$. If they are, give their common orthonormal eigenbasis and write both operators in that basis (i.e. list the joint eigenvalue pairs $(a,b)$).

**P2 (🟡)** A three-state system has

$$\hat A = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 5 \end{bmatrix}, \qquad \hat B = \begin{bmatrix} 1 & 3 & 0 \\ 3 & 1 & 0 \\ 0 & 0 & 7 \end{bmatrix}.$$

(a) Confirm $[\hat A,\hat B]=0$. (b) $\hat A$ has a degenerate eigenvalue — which one, and why can't $\hat A$ alone label those states? (c) Find the common eigenbasis and the joint labels $(a,b)$, and state whether $\{\hat A,\hat B\}$ is a CSCO for this system.

**P3 (🔴, optional — symmetry and conservation)** Let $\hat H$ be the Hamiltonian and $\hat A$ a time-independent Hermitian observable with $[\hat A,\hat H]=0$.
(a) Starting from the time-dependent Schrödinger equation $i\hbar\,\partial_t|\psi\rangle = \hat H|\psi\rangle$, show that $\dfrac{d}{dt}\langle \hat A\rangle = \dfrac{i}{\hbar}\langle[\hat H,\hat A]\rangle$, and conclude $\langle \hat A\rangle$ is **conserved**.
(b) Argue that the energy eigenstates can be chosen to be eigenstates of $\hat A$ as well, so every energy level can be labeled by an $\hat A$-eigenvalue. (c) In one sentence, connect this to Noether's theorem in classical mechanics.

<details>
<summary>Solutions</summary>

**P1** Compute both products:
$$\hat A\hat B = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}\begin{bmatrix} 5 & 3 \\ 3 & 5 \end{bmatrix} = \begin{bmatrix} 13 & 11 \\ 11 & 13 \end{bmatrix}, \qquad \hat B\hat A = \begin{bmatrix} 5 & 3 \\ 3 & 5 \end{bmatrix}\begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix} = \begin{bmatrix} 13 & 11 \\ 11 & 13 \end{bmatrix}.$$
Equal, so $[\hat A,\hat B]=0$ — **compatible.** Both symmetric with the $(1,1)/(1,-1)$ structure; the common orthonormal eigenbasis is $u_+ = \tfrac{1}{\sqrt2}(1,1)^\top$, $u_- = \tfrac{1}{\sqrt2}(1,-1)^\top$. Eigenvalues: $\hat A u_+ = 3u_+$, $\hat A u_- = 1u_-$ (from $2\pm1$); $\hat B u_+ = 8u_+$, $\hat B u_- = 2u_-$ (from $5\pm3$). So in this basis $\hat A = \mathrm{diag}(3,1)$, $\hat B = \mathrm{diag}(8,2)$, with joint labels $(a,b) = (3,8)$ for $u_+$ and $(1,2)$ for $u_-$. The labels are distinct, so $\{\hat A,\hat B\}$ already resolves this (non-degenerate) system — here $\hat A$ alone would have sufficed, but the co-diagonalization is the point.

**P2** (a) $\hat B$ is block-diagonal in $\hat A$'s eigenspace pattern (a $2\times2$ block on $\mathrm{span}\{e_1,e_2\}$, a scalar on $e_3$), so it preserves each $\hat A$-eigenspace. Explicitly,
$$\hat A\hat B = \begin{bmatrix} 2 & 6 & 0 \\ 6 & 2 & 0 \\ 0 & 0 & 35 \end{bmatrix} = \hat B\hat A,$$
so $[\hat A,\hat B]=0$. ✓

(b) The eigenvalue $a=2$ is **doubly degenerate**: every vector in $\mathrm{span}\{e_1,e_2\}$ satisfies $\hat A v = 2v$. So "$\hat A = 2$" names a 2D plane, not a state — $\hat A$ cannot distinguish the two independent states living there.

(c) Diagonalize $\hat B$'s block $\begin{bmatrix}1&3\\3&1\end{bmatrix}$: eigenvalues $1\pm3 = 4,\,-2$ with eigenvectors $(1,1),(1,-1)$; on $e_3$, $\hat B$ gives $7$. The common eigenbasis and labels:
$$w_1 = \tfrac{1}{\sqrt2}(e_1+e_2):\ (a,b)=(2,4), \quad w_2 = \tfrac{1}{\sqrt2}(e_1-e_2):\ (2,-2), \quad w_3 = e_3:\ (5,7).$$
All three $(a,b)$ pairs are distinct, so each state has a unique address and $\hat B$ splits the degenerate plane. **$\{\hat A,\hat B\}$ is a CSCO** for this system.

**P3** (a) With $\hat A$ time-independent, differentiate $\langle\hat A\rangle = \langle\psi|\hat A|\psi\rangle$:
$$\frac{d}{dt}\langle\hat A\rangle = \Big(\partial_t\langle\psi|\Big)\hat A|\psi\rangle + \langle\psi|\hat A\Big(\partial_t|\psi\rangle\Big).$$
From $i\hbar\,\partial_t|\psi\rangle = \hat H|\psi\rangle$ we get $\partial_t|\psi\rangle = \tfrac{1}{i\hbar}\hat H|\psi\rangle$, and taking the dagger (with $\hat H^\dagger=\hat H$) $\partial_t\langle\psi| = -\tfrac{1}{i\hbar}\langle\psi|\hat H$. Substitute:
$$\frac{d}{dt}\langle\hat A\rangle = -\frac{1}{i\hbar}\langle\psi|\hat H\hat A|\psi\rangle + \frac{1}{i\hbar}\langle\psi|\hat A\hat H|\psi\rangle = \frac{1}{i\hbar}\langle\psi|(\hat A\hat H - \hat H\hat A)|\psi\rangle = \frac{i}{\hbar}\langle[\hat H,\hat A]\rangle,$$
using $\tfrac{1}{i\hbar} = -\tfrac{i}{\hbar}$ and $\hat A\hat H-\hat H\hat A = -[\hat H,\hat A]$. If $[\hat A,\hat H]=0$ then $[\hat H,\hat A]=0$, so $\tfrac{d}{dt}\langle\hat A\rangle = 0$ — $\langle\hat A\rangle$ is **conserved** in any state. (This is the general expectation-value evolution law developed fully in [3.5](#/lesson/quantum-mechanics/03-05-heisenberg-picture-ehrenfest.md).)

(b) Since $[\hat A,\hat H]=0$ and both are Hermitian, the compatibility theorem gives a common eigenbasis. Concretely: within each energy eigenspace $\hat A$ restricts to a Hermitian operator, so by the spectral theorem we can pick an orthonormal basis of that eigenspace consisting of $\hat A$-eigenstates. Every such vector is still an energy eigenstate (the eigenspace is $\hat H$-invariant), so energy eigenstates can be chosen to carry a definite $\hat A$-value too — the extra label $a$ tags each level. (This is exactly how degeneracy gets resolved by a symmetry: $\hat L^2,\hat L_z$ label the hydrogen levels because they commute with $\hat H$.)

(c) A conserved observable commuting with $\hat H$ is the generator of a continuous symmetry of the dynamics, so this is the quantum echo of **Noether's theorem** — continuous symmetry $\Leftrightarrow$ conservation law (classical [`analytical-mechanics` 2.2](#/lesson/analytical-mechanics/02-02-noethers-theorem.md)) — with the Poisson bracket $\{A,H\}=0$ replaced by the commutator $[\hat A,\hat H]=0$.

</details>

## Flashback

**From Lesson 3.3 (Commutators and the uncertainty principle):** Using the canonical relation $[\hat x,\hat p]=i\hbar$ and the commutator product rule $[\hat A,\hat B\hat C] = [\hat A,\hat B]\hat C + \hat B[\hat A,\hat C]$, compute $[\hat x,\hat p^{\,2}]$.

<details>
<summary>Solution</summary>

Apply the product rule with $\hat B = \hat C = \hat p$:
$$[\hat x,\hat p^{\,2}] = [\hat x,\hat p]\hat p + \hat p[\hat x,\hat p] = (i\hbar)\hat p + \hat p(i\hbar) = 2i\hbar\,\hat p.$$
Since $[\hat x,\hat p^{\,2}]\neq 0$, position is incompatible with $\hat p^2$ (hence with kinetic energy $\hat p^2/2m$) — you cannot have a state with both a sharp position and a sharp kinetic energy. (This same commutator is the workhorse behind Ehrenfest's $\tfrac{d}{dt}\langle\hat x\rangle = \langle\hat p\rangle/m$ in [3.5](#/lesson/quantum-mechanics/03-05-heisenberg-picture-ehrenfest.md).)

</details>

## Connections

- **Backward:** this is [3.3](#/lesson/quantum-mechanics/03-03-commutators-uncertainty.md) read the other way — 3.3 asked what non-commutation *forbids* (joint sharpness), this asks what commutation *permits* (a shared eigenbasis). The whole theorem rides on the **spectral theorem** for Hermitian operators from [`linalg-refresher` 5.1](#/lesson/linalg-refresher/05-01-spectral-theorem-quadratic-forms.md): "commuting Hermitians co-diagonalize" is that theorem applied inside each eigenspace, and the orthonormal eigenbases are the ones [1.4](#/lesson/quantum-mechanics/01-04-observables-hermitian-operators.md) attached to every observable.
- **Forward:** the CSCO idea organizes all of Module 4 — $\{\hat H,\hat L^2,\hat L_z,\hat S_z\}$ commute and their joint eigenvalues *are* the hydrogen quantum numbers $(n,\ell,m,m_s)$ in [4.4](#/lesson/quantum-mechanics/04-04-hydrogen-atom.md); the angular-momentum algebra of [4.2](#/lesson/quantum-mechanics/04-02-angular-momentum-algebra.md) is one long study of which components of $\hat{\mathbf L}$ are compatible ($\hat L^2$ with any one $\hat L_i$, but not two $\hat L_i$ with each other). P3's "$[\hat A,\hat H]=0\Rightarrow$ conserved" is generalized in [3.5](#/lesson/quantum-mechanics/03-05-heisenberg-picture-ehrenfest.md).
- **Sideways (classical mechanics):** compatibility ↔ commuting operators is the quantum image of **Poisson-bracket involution** — two classical quantities are simultaneously "action-angle labelable" when their Poisson bracket vanishes, and $[\hat A,\hat H]=0$ is the quantized version of the conserved-charge condition $\{A,H\}=0$ behind [Noether's theorem](#/lesson/analytical-mechanics/02-02-noethers-theorem.md). Symmetry, degeneracy, and conservation are one package in both mechanics.

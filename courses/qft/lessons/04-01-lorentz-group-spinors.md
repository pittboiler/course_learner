# Quantum Field Theory · Lesson 4.1: The Lorentz group and spinors

> ⏱ ~15 min · Module 4: Fermions and the Dirac field · Builds on: [3.6 Cross-sections and decay rates](03-06-cross-sections-decay-rates.md), [`relativity`](../../relativity/syllabus.md) · Unlocks: [4.2 The Dirac equation](04-02-dirac-equation.md)

## Why this matters

Where does **spin** come from? Not from any classical picture of a spinning ball — it comes from the *representation theory of the Lorentz group*. Fields must transform in some definite way under rotations and boosts, and the Lorentz group's representations come in a discrete list labeled by two half-integers. The scalar field ([1.4](01-04-klein-gordon-field.md)) was the simplest (spin $0$); the next ones are **spinors** (spin $\tfrac12$) — the electron, quarks, all matter fields. This lesson explains why spinors exist, why they're two-component "Weyl" objects that combine into the four-component Dirac spinor, and the strange fact that rotating a spinor by $360°$ gives *minus* itself. Spin is a relativistic-symmetry fact, and this is where the electron's field is born.

## The idea

A field is classified by how it transforms under the **Lorentz group** — the rotations and boosts of special relativity ([`relativity`](../../relativity/syllabus.md)). A scalar doesn't change ($\phi \to \phi$); a vector transforms with the Lorentz matrix ($A^\mu \to \Lambda^\mu{}_\nu A^\nu$). But there are *more* representations, and they're organized by a beautiful trick.

The Lorentz group has six generators: three rotations $\mathbf{J}$ and three boosts $\mathbf{K}$. Form the complex combinations $\mathbf{J}_\pm = \tfrac12(\mathbf{J} \pm i\mathbf{K})$, and — remarkably — they satisfy **two independent copies of the angular-momentum (su(2)) algebra**. Since you already know su(2)'s representations from [`quantum-mechanics`](../../quantum-mechanics/syllabus.md) (labeled by a spin $j = 0, \tfrac12, 1, \ldots$), the Lorentz group's representations are labeled by a *pair* $(j_1, j_2)$ (the picture):

- $(0, 0)$ = **scalar** (spin $0$) — the Klein–Gordon field.
- $(\tfrac12, 0)$ = **left-handed Weyl spinor**; $(0, \tfrac12)$ = **right-handed Weyl spinor** — two-component objects, spin $\tfrac12$.
- $(\tfrac12, 0) \oplus (0, \tfrac12)$ = **Dirac spinor** — left + right combined, four components, the electron field.
- $(\tfrac12, \tfrac12)$ = **vector** $A^\mu$ (spin $1$) — the photon field.

The defining weirdness of spinors: they live in a **double-valued** representation. A spinor rotated by $360°$ comes back as *minus* itself, not itself — you need $720°$ to return. This is because the group relevant to spinors is $SL(2, \mathbb{C})$ (the *double cover* of the Lorentz group), just as spin-$\tfrac12$ in QM uses $SU(2)$, the double cover of the rotation group $SO(3)$. Spinors are the objects that "know" about this double cover, and that double-valuedness is intimately tied to Fermi statistics ([4.4](04-04-quantizing-dirac-anticommutators.md)).

## The formal version

The **Lorentz group** $SO(1,3)$ has generators $J^{\mu\nu}$ ($6$ of them): rotations $J^i = \tfrac12\epsilon^{ijk}J^{jk}$ and boosts $K^i = J^{0i}$, with the algebra $[J^i, J^j] = i\epsilon^{ijk}J^k$, $[J^i, K^j] = i\epsilon^{ijk}K^k$, $[K^i, K^j] = -i\epsilon^{ijk}J^k$. Define

$$\mathbf{J}_\pm = \tfrac12(\mathbf{J} \pm i\mathbf{K}) \quad\Longrightarrow\quad [J_\pm^i, J_\pm^j] = i\epsilon^{ijk}J_\pm^k, \quad [J_+^i, J_-^j] = 0.$$

*In words:* the complexified algebra splits into **two commuting $su(2)$'s**, so irreducible representations are labeled by a pair $(j_1, j_2)$ with $j_1, j_2 \in \{0, \tfrac12, 1, \ldots\}$; the field has $(2j_1+1)(2j_2+1)$ components, and its **spin** (under ordinary rotations $\mathbf{J} = \mathbf{J}_+ + \mathbf{J}_-$) ranges over $|j_1 - j_2|, \ldots, j_1 + j_2$.

**Weyl spinors:** $\psi_L$ in $(\tfrac12, 0)$ transforms under rotations/boosts with the $SL(2,\mathbb{C})$ matrices $\exp(i\boldsymbol{\theta}\cdot\frac{\boldsymbol\sigma}{2} \pm \boldsymbol{\eta}\cdot\frac{\boldsymbol\sigma}{2})$ (the $\pm$ distinguishing $L, R$), where $\boldsymbol\sigma$ are the Pauli matrices, $\boldsymbol\theta$ rotation angles, $\boldsymbol\eta$ boost rapidities. *In words:* spinors transform with $2\times2$ Pauli-matrix exponentials — half-angle rotations, which is why a $2\pi$ rotation ($\boldsymbol\theta = 2\pi\hat n$) gives $e^{i\pi\boldsymbol\sigma\cdot\hat n} = -\mathbb{1}$. The **Dirac spinor** stacks both: $\psi = \begin{pmatrix}\psi_L \\ \psi_R\end{pmatrix}$ in $(\tfrac12,0) \oplus (0,\tfrac12)$, four components — the representation the electron lives in ([4.2](04-02-dirac-equation.md)).

## Picture

![A table of Lorentz-group representations (j1, j2) and their physical fields: (0,0) scalar spin 0, (1/2,0) and (0,1/2) left- and right-handed Weyl spinors, their sum the Dirac spinor, and (1/2,1/2) the spin-1 vector, with a note that spinor representations are double-valued](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (a $2\pi$ rotation flips a spinor's sign).** Under a rotation by angle $\theta$ about the $\hat z$-axis, a spinor transforms with $U = e^{i\theta\sigma_z/2}$ (half-angle — the hallmark of spin $\tfrac12$). At $\theta = 2\pi$:

$$U = e^{i\pi\sigma_z} = \cos\pi\,\mathbb{1} + i\sin\pi\,\sigma_z = -\mathbb{1}.$$

So $\psi \to -\psi$ under a full $360°$ rotation — the spinor is *double-valued*, returning to itself only after $720°$. (A vector or scalar, with integer spin, returns after $360°$.) This isn't a mathematical curiosity: it's measurable via neutron interferometry, and it's the group-theoretic root of the spin-statistics connection — the same minus sign that makes fermions anticommute ([4.4](04-04-quantizing-dirac-anticommutators.md)).

**Example 2 (building the Dirac spinor from Weyl pieces).** The two-component Weyl spinors $\psi_L \in (\tfrac12,0)$ and $\psi_R \in (0,\tfrac12)$ are the *irreducible* spin-$\tfrac12$ representations. Under a boost, $\psi_L$ transforms with $e^{-\boldsymbol\eta\cdot\boldsymbol\sigma/2}$ and $\psi_R$ with $e^{+\boldsymbol\eta\cdot\boldsymbol\sigma/2}$ (opposite signs — this is what "handedness" means). A **massless** particle can be a single Weyl spinor (definite handedness — like the neutrino in the old Standard Model). But a **mass** term couples $L$ and $R$ (it must, since mass connects the two boosts' behaviors), so a massive spin-$\tfrac12$ particle needs *both*: the four-component **Dirac spinor** $\psi = \begin{pmatrix}\psi_L\\\psi_R\end{pmatrix}$. The electron, being massive, is Dirac. This is why the electron field has four components — two for the particle's two spin states, and the doubling from combining both handednesses (which also encodes the antiparticle, [4.3](04-03-solutions-spin-antiparticles.md)).

## Watch out

- **You might think spin is a little rotating ball.** Spin is a *representation label* — how the field transforms under the Lorentz group — not literal rotation. The electron isn't spinning in space; it transforms in the $(\tfrac12,0)\oplus(0,\tfrac12)$ representation, which is what "spin $\tfrac12$" *means*. The classical picture fails (a spinning ball couldn't have the electron's magnetic moment without exceeding light speed).
- **You might expect a $2\pi$ rotation to be the identity.** For spinors it's $-\mathbb{1}$ — they're double-valued, transforming under $SL(2,\mathbb{C})$ (the double cover), not $SO(1,3)$ directly. This is exactly analogous to spin-$\tfrac12$ needing $SU(2)$ rather than $SO(3)$ in [`quantum-mechanics`](../../quantum-mechanics/syllabus.md).
- **You might conflate the Weyl (handedness) doubling with the particle/antiparticle doubling.** The Dirac spinor's four components encode *two* dualities: left/right handedness (from combining Weyl reps) and, upon quantization, particle/antiparticle. They're related but distinct; the four components are $2 \times 2$ = (spin up/down) $\times$ (particle/antiparticle) in the end ([4.3](04-03-solutions-spin-antiparticles.md)).

## One-liner

> Spin is a Lorentz-group representation label: the algebra splits into two $su(2)$'s, giving representations $(j_1, j_2)$ — scalars $(0,0)$, Weyl spinors $(\tfrac12,0)$ and $(0,\tfrac12)$ combining into the four-component Dirac spinor, and vectors $(\tfrac12,\tfrac12)$ — with spinors double-valued under $2\pi$ rotation.

## Problems

**P1 (🟢)** How many components does a field in the representation $(j_1, j_2)$ have? Evaluate for the scalar $(0,0)$, the Weyl spinor $(\tfrac12, 0)$, the Dirac spinor $(\tfrac12,0)\oplus(0,\tfrac12)$, and the vector $(\tfrac12,\tfrac12)$.

**P2 (🟡)** Verify that a rotation by $4\pi$ (i.e. $720°$) returns a spinor to itself: compute $e^{i(4\pi)\sigma_z/2}$. Then explain why this "double cover" structure means spinors are genuinely different from tensors (which always return after $2\pi$).

**P3 (🔴, optional)** The two $su(2)$ factors $\mathbf{J}_\pm$ are built from Hermitian $\mathbf{J}$ (rotations) and *anti*-Hermitian-generated boosts (boosts are not compact). Show that under complex conjugation, $(\tfrac12, 0)$ and $(0, \tfrac12)$ are exchanged — i.e. the complex conjugate of a left-handed spinor transforms as a right-handed one. Why does this mean a massless left-handed field and a massless right-handed field are related by conjugation (charge conjugation / antiparticles)?

<details>
<summary>Solutions</summary>

**P1** A field in $(j_1, j_2)$ has $(2j_1 + 1)(2j_2 + 1)$ components. Scalar $(0,0)$: $1\cdot1 = 1$. Weyl $(\tfrac12, 0)$: $2\cdot1 = 2$. Dirac $(\tfrac12,0)\oplus(0,\tfrac12)$: $2 + 2 = 4$ (direct sum adds). Vector $(\tfrac12,\tfrac12)$: $2\cdot2 = 4$ (matching the four components of $A^\mu$). ✓

**P2** $e^{i(4\pi)\sigma_z/2} = e^{i2\pi\sigma_z} = \cos(2\pi)\mathbb{1} + i\sin(2\pi)\sigma_z = \mathbb{1}$. So a $720°$ rotation is the identity — the spinor returns. Because $e^{i\pi\sigma_z}(2\pi) = -\mathbb{1}$ but $(-\mathbb{1})^2 = \mathbb{1}$ at $4\pi$, the spinor rep is *two-to-one* over the rotation group: each rotation corresponds to *two* spinor transformations ($\pm$). Tensors (integer spin) transform single-valuedly (return after $2\pi$); spinors need the double cover $SU(2)$ (or $SL(2,\mathbb{C})$ for full Lorentz). This genuine difference — no tensor can reproduce a spinor's $2\pi \to -1$ — is why spin-$\tfrac12$ is a distinct kind of object, not reducible to vectors and scalars.

**P3** The rotation generators $\mathbf{J}$ are Hermitian; the boost generators $\mathbf{K}$ are represented anti-Hermitianly (boosts are non-compact). So $\mathbf{J}_\pm = \tfrac12(\mathbf{J} \pm i\mathbf{K})$ satisfy $(\mathbf{J}_+)^* \leftrightarrow \mathbf{J}_-$ under complex conjugation (the $i\mathbf{K}$ flips sign, swapping $+ \leftrightarrow -$). Hence complex conjugation maps $(\tfrac12, 0) \to (0, \tfrac12)$: the conjugate of a left-handed Weyl spinor transforms as a right-handed one. Physically, this means a single massless left-handed field and its complex conjugate (a right-handed field) are the two "halves" related by **charge conjugation** — the antiparticle of a left-handed particle is right-handed. This is why, e.g., a left-handed neutrino's antiparticle is a right-handed antineutrino, and why a Weyl fermion automatically comes with its conjugate antiparticle. ∎

</details>

## Flashback

**From Lesson 3.6 (Cross-sections and decay rates):** State the total cross-section for tree-level $2\to2$ scattering in $\phi^4$ theory.

<details>
<summary>Solution</summary>

With $\mathcal{M} = -\lambda$ (constant), $\frac{d\sigma}{d\Omega} = \frac{\lambda^2}{64\pi^2 s}$; integrating over solid angle ($\int d\Omega = 4\pi$) and dividing by $2$ for the identical final scalars gives $\sigma = \frac{\lambda^2}{32\pi s}$. ✓

</details>

## Connections

- **Backward:** the Lorentz group is the symmetry of [`relativity`](../../relativity/syllabus.md); the $su(2)$ representation theory is the angular momentum of [`quantum-mechanics`](../../quantum-mechanics/syllabus.md), now doubled; the scalar $(0,0)$ is the field of Module 1.
- **Forward:** [4.2](04-02-dirac-equation.md) writes the wave equation for the Dirac spinor (gamma matrices realize the $(\tfrac12,0)\oplus(0,\tfrac12)$ structure); [4.4](04-04-quantizing-dirac-anticommutators.md) shows the $2\pi \to -1$ double-valuedness forces anticommutators (fermions).
- **Sideways (representation theory):** the systematic classification of these representations — and the appearance of $SL(2,\mathbb{C})$, $SU(2)$, and their reps — is the subject of [`representation-theory`](../../representation-theory/syllabus.md), which makes the Lorentz-group and gauge-group structure of QFT precise.

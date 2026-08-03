# Quantum Field Theory · Lesson 5.2: Minimal coupling and the QED Lagrangian

> ⏱ ~15 min · Module 5: Quantum electrodynamics · Builds on: [5.1 Gauge invariance and the photon](05-01-gauge-invariance-photon.md) · Unlocks: [5.3 Quantizing the photon; the photon propagator](05-03-quantizing-photon-propagator.md)

## Why this matters

This lesson writes down **the theory of light and matter** — the QED Lagrangian — in one line, and shows that its interaction is not a free choice but *forced* by gauge symmetry. The recipe is **minimal coupling**: replace every ordinary derivative in the Dirac Lagrangian with the covariant derivative $D_\mu = \partial_\mu + ieA_\mu$, and out pops the electron–photon interaction $-e\bar\psi\gamma^\mu\psi A_\mu$ — the fundamental QED vertex. This is the most precisely tested theory in physics (the electron's magnetic moment agrees with experiment to twelve digits), and it all follows from "make the phase symmetry local." Once you have this Lagrangian, the Feynman rules and every QED prediction follow mechanically.

## The idea

Gauge invariance ([5.1](05-01-gauge-invariance-photon.md)) told us the electron's phase symmetry, made local, requires a photon field $A_\mu$ and the covariant derivative $D_\mu = \partial_\mu + ieA_\mu$. **Minimal coupling** is the prescription: take the free Dirac Lagrangian and simply swap $\partial_\mu \to D_\mu$ (the picture). That's it — the interaction writes itself:

$$\bar\psi(i\not\partial - m)\psi \;\xrightarrow{\ \partial \to D\ }\; \bar\psi(i\not{D} - m)\psi = \underbrace{\bar\psi(i\not\partial - m)\psi}_{\text{free electron}} \;-\; \underbrace{e\bar\psi\gamma^\mu\psi\,A_\mu}_{\text{interaction}}.$$

The interaction term $-e\bar\psi\gamma^\mu\psi A_\mu = -e\,j^\mu A_\mu$ is the **electron's current coupled to the photon** — the QED vertex. Add the photon's own kinetic term $-\frac14 F_{\mu\nu}F^{\mu\nu}$ (Maxwell, gauge-invariant) and you have the complete QED Lagrangian. Nothing was chosen: the *form* of the interaction, its strength being the same $e$ that appears in the covariant derivative, and the coupling being to the conserved current — all dictated by gauge symmetry.

The single coupling constant $e$ is the electric charge, and it's **universal**: gauge invariance forces every charged field to couple to $A_\mu$ with the *same* $e$ (up to integer charge multiples), which is why charge is quantized and why the proton's charge exactly cancels the electron's. The dimensionless measure of the coupling's strength is the **fine-structure constant** $\alpha = \frac{e^2}{4\pi} \approx \frac{1}{137}$ — small, which is why QED perturbation theory works spectacularly well.

## The formal version

**Minimal coupling:** in the free Dirac Lagrangian, replace $\partial_\mu \to D_\mu = \partial_\mu + ieA_\mu$ (with $-e$ the electron's charge; sign conventions vary). Adding the Maxwell term gives the **QED Lagrangian**:

$$\boxed{\;\mathcal{L}_{\text{QED}} = \bar\psi(i\gamma^\mu D_\mu - m)\psi - \tfrac14 F_{\mu\nu}F^{\mu\nu} = \bar\psi(i\not\partial - m)\psi - \tfrac14 F_{\mu\nu}F^{\mu\nu} - e\bar\psi\gamma^\mu\psi\,A_\mu.\;}$$

*In words:* free electron + free photon + interaction, where the interaction $-e\bar\psi\gamma^\mu\psi A_\mu = -e j^\mu A_\mu$ couples the conserved Dirac current $j^\mu = \bar\psi\gamma^\mu\psi$ to the photon. This Lagrangian is **gauge-invariant** by construction ($\bar\psi\not{D}\psi$ is invariant, [5.1](05-01-gauge-invariance-photon.md); $F^2$ is invariant).

**The QED vertex.** The interaction term generates a single fundamental vertex — two fermion lines and one photon line meeting — with the Feynman-rule factor

$$-ie\gamma^\mu.$$

*In words:* every QED process is built from this one vertex (electron emits/absorbs a photon); the $\gamma^\mu$ carries the spinor/Lorentz structure, and the $e$ is the coupling. The equations of motion from $\mathcal{L}_{\text{QED}}$ are the coupled Dirac equation $(i\not{D} - m)\psi = 0$ and the **Maxwell equations with a source** $\partial_\mu F^{\mu\nu} = e j^\nu$ — the electron's current sources the electromagnetic field. **Coupling strength:** $\alpha = e^2/(4\pi) \approx 1/137$ (in natural units, Heaviside–Lorentz), the fine-structure constant.

## Picture

![The QED Lagrangian split into a free-electron term, a free-photon Maxwell term, and an interaction term minus e psi-bar gamma-mu psi A-mu; below, the fundamental QED vertex where two electron lines and a photon meet, with vertex factor minus i e gamma-mu, and the universal coupling alpha equals e squared over 4 pi approximately 1 over 137](assets/05-02-fig1.svg)

## Worked examples

**Example 1 (minimal coupling generates the interaction).** Start from $\bar\psi(i\gamma^\mu D_\mu - m)\psi$ and expand $D_\mu = \partial_\mu + ieA_\mu$:

$$\bar\psi(i\gamma^\mu D_\mu - m)\psi = \bar\psi\big(i\gamma^\mu\partial_\mu + i\gamma^\mu(ieA_\mu) - m\big)\psi = \bar\psi(i\not\partial - m)\psi - e\,\bar\psi\gamma^\mu\psi\,A_\mu.$$

The first term is the free Dirac Lagrangian; the second, $-e\bar\psi\gamma^\mu\psi A_\mu$, is the interaction — the photon $A_\mu$ coupled to the electron current $j^\mu = \bar\psi\gamma^\mu\psi$. **The interaction was not added by hand — it emerged from the single replacement $\partial \to D$.** This is the precise sense in which "gauge symmetry dictates the interaction": you don't get to choose how the electron couples to the photon; minimal coupling fixes it uniquely (form, strength, and the current it couples to).

**Example 2 (the vertex and the universality of charge).** The interaction $-e\bar\psi\gamma^\mu\psi A_\mu$ gives the QED Feynman vertex $-ie\gamma^\mu$: an electron line comes in, a photon attaches, an electron line goes out. Because this vertex came from the *covariant derivative*, the coupling $e$ is the **same** $e$ that appears in $D_\mu = \partial_\mu + ieA_\mu$ — and gauge invariance requires *every* charged field to be minimally coupled with its own charge $q$, always as $D_\mu = \partial_\mu + iqA_\mu$. This forces **charge universality and quantization**: all charges are integer multiples of a basic unit (in a theory with a compact $U(1)$), which is why the electron and proton charges are exactly equal and opposite (to 1 part in $10^{21}$), despite the proton being a complicated bound state. A theory where you could tune each particle's charge independently would violate gauge invariance. The single vertex $-ie\gamma^\mu$, with universal $e$, is the entire interaction content of QED.

## Watch out

- **You might think you can choose a different interaction.** Gauge invariance + minimal coupling *uniquely* fixes the QED interaction to $-e j^\mu A_\mu$ with $j^\mu$ the conserved current. You can't couple the electron to the photon any other way (at the renormalizable level) — e.g. a "$\bar\psi\sigma^{\mu\nu}\psi F_{\mu\nu}$" Pauli term is allowed by gauge symmetry but non-renormalizable and not *minimal* (it's a higher-dimension operator). Minimality is what makes QED predictive.
- **You might mis-sign the covariant derivative or charge.** Conventions differ: $D_\mu = \partial_\mu + ieA_\mu$ vs. $\partial_\mu - ieA_\mu$, and the electron's charge is $-e$ (with $e > 0$) in one common convention. Fix your convention and be consistent; the *physics* (like the sign of the Coulomb force) must come out right as a check.
- **You might forget the Maxwell term $-\frac14 F^2$.** Without it, the photon has no dynamics (no kinetic term) and can't propagate — it's essential and gauge-invariant. But note there's *no* mass term (forbidden, [5.1](05-01-gauge-invariance-photon.md)), and the gauge redundancy makes quantizing this kinetic term subtle ([5.3](05-03-quantizing-photon-propagator.md)).

## One-liner

> Minimal coupling ($\partial_\mu \to D_\mu = \partial_\mu + ieA_\mu$) turns the free Dirac + Maxwell Lagrangian into QED, forcing the interaction $-e\bar\psi\gamma^\mu\psi A_\mu$ and the universal vertex $-ie\gamma^\mu$ — the theory of light and matter, dictated entirely by gauge symmetry.

## Problems

**P1 (🟢)** Write out the full QED Lagrangian and label each term (free electron, free photon, interaction). State the Feynman vertex factor and the number of fundamental vertices in QED.

**P2 (🟡)** Vary the QED Lagrangian with respect to $A_\nu$ to derive the sourced Maxwell equation $\partial_\mu F^{\mu\nu} = e j^\nu$ with $j^\nu = \bar\psi\gamma^\nu\psi$. *Hint:* the $A$-dependence is in $-\frac14 F^2$ (gives $\partial_\mu F^{\mu\nu}$) and in $-e\bar\psi\gamma^\nu\psi A_\nu$ (gives $-e j^\nu$). Interpret physically.

**P3 (🔴, optional)** The fine-structure constant $\alpha = e^2/4\pi \approx 1/137$ is dimensionless (in 4D natural units). Verify that $e$ is dimensionless in four dimensions (using $[\psi] = 3/2$, $[A_\mu] = 1$ from the kinetic terms), so the QED interaction $-e\bar\psi\gamma^\mu\psi A_\mu$ has dimension $4$ (renormalizable). Why does the dimensionlessness of $e$ matter for renormalizability ([6.4](06-04-loops-uv-divergences.md))?

<details>
<summary>Solutions</summary>

**P1** $\mathcal{L}_{\text{QED}} = \underbrace{\bar\psi(i\not\partial - m)\psi}_{\text{free electron}} \underbrace{- \tfrac14 F_{\mu\nu}F^{\mu\nu}}_{\text{free photon}} \underbrace{- e\bar\psi\gamma^\mu\psi A_\mu}_{\text{interaction}}$. The Feynman vertex factor is $-ie\gamma^\mu$, and QED has exactly **one** fundamental vertex (electron–electron–photon). Every QED diagram is built from this single vertex plus electron and photon propagators — remarkable economy for a theory that describes all of electromagnetism.

**P2** The Euler–Lagrange equation for $A_\nu$: $\partial_\mu\frac{\partial\mathcal{L}}{\partial(\partial_\mu A_\nu)} - \frac{\partial\mathcal{L}}{\partial A_\nu} = 0$. From $-\frac14 F^2$: $\frac{\partial\mathcal{L}}{\partial(\partial_\mu A_\nu)} = -F^{\mu\nu}$, so $\partial_\mu(-F^{\mu\nu})$; from the interaction $-e\bar\psi\gamma^\nu\psi A_\nu$: $\frac{\partial\mathcal{L}}{\partial A_\nu} = -e\bar\psi\gamma^\nu\psi = -e j^\nu$. So $-\partial_\mu F^{\mu\nu} + e j^\nu = 0$... i.e. $\partial_\mu F^{\mu\nu} = e j^\nu$. This is **Maxwell's equations with the electron current as source**: $\nabla\cdot\mathbf{E} = e\rho$ (Gauss's law) and $\nabla\times\mathbf{B} - \partial_t\mathbf{E} = e\mathbf{j}$ (Ampère–Maxwell). The electron's charge current sources the electromagnetic field — the classical Maxwell theory emerges from the quantum Lagrangian, with the coupling being the same $e$ as the vertex.

**P3** In 4D, $[\psi] = 3/2$ and $[A_\mu] = 1$ (from the kinetic terms having dimension 4). The interaction $-e\bar\psi\gamma^\mu\psi A_\mu$ has dimension $[e] + 2\cdot\frac32 + 1 = [e] + 4$. For the Lagrangian to have dimension $4$, we need $[e] = 0$ — $e$ is **dimensionless**. The interaction operator itself then has dimension exactly $4$ (marginal). This matters for renormalizability: a coupling with *non-negative* mass dimension (here $[e] = 0$) gives a **renormalizable** theory — the divergences at all loop orders can be absorbed into a finite number of parameters. A coupling with *negative* mass dimension (like a dimension-5 Pauli term $\frac{c}{\Lambda}\bar\psi\sigma^{\mu\nu}\psi F_{\mu\nu}$) would be non-renormalizable, requiring infinitely many counterterms. The dimensionlessness of $e$ is precisely why QED is a predictive, renormalizable theory ([6.5](06-05-regularization-renormalization.md)). ∎

</details>

## Flashback

**From Lesson 5.1 (Gauge invariance and the photon):** Show that a photon mass term $\frac12 m_\gamma^2 A_\mu A^\mu$ is not gauge-invariant, hence forbidden.

<details>
<summary>Solution</summary>

Under $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$: $A_\mu A^\mu \to (A_\mu - \frac1e\partial_\mu\alpha)(A^\mu - \frac1e\partial^\mu\alpha) = A_\mu A^\mu - \frac2e A_\mu\partial^\mu\alpha + \frac1{e^2}(\partial\alpha)^2 \neq A_\mu A^\mu$. The extra terms don't vanish, so the mass term breaks gauge invariance and is forbidden. Hence the photon is exactly massless — protected by gauge symmetry. ✓

</details>

## Connections

- **Backward:** minimal coupling uses the covariant derivative of [5.1](05-01-gauge-invariance-photon.md); the current $j^\mu = \bar\psi\gamma^\mu\psi$ is the Noether current of [1.3](01-03-symmetries-noether-for-fields.md)/[4.2](04-02-dirac-equation.md); the electron field is Module 4's Dirac field.
- **Forward:** [5.3](05-03-quantizing-photon-propagator.md) quantizes the photon and finds its propagator; [5.4](05-04-qed-feynman-rules.md) assembles the QED Feynman rules (the vertex $-ie\gamma^\mu$ plus propagators); [5.5](05-05-tree-level-qed-amplitude.md)–[5.6](05-06-squaring-amplitude-cross-section.md) run a full process; [6.6](06-06-running-couplings-renormalization-group.md) shows $\alpha$ runs with energy.
- **Sideways (Standard Model):** minimal coupling generalizes to non-abelian gauge groups ([6.7](06-07-taste-non-abelian-gauge-theory.md)) — the weak force ($SU(2)$) and strong force ($SU(3)$) couple to their charged fields by exactly the same $\partial \to D$ prescription, making the gauge principle the organizing idea of all fundamental interactions.

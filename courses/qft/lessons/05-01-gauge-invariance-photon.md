# Quantum Field Theory · Lesson 5.1: Gauge invariance and the photon

> ⏱ ~15 min · Module 5: Quantum electrodynamics · Builds on: [4.5 The Dirac propagator](04-05-dirac-propagator.md), [1.3 Symmetries and Noether's theorem for fields](01-03-symmetries-noether-for-fields.md) · Unlocks: [5.2 Minimal coupling and the QED Lagrangian](05-02-minimal-coupling-qed-lagrangian.md)

## Why this matters

This is the conceptual summit of the course: **gauge symmetry dictates the forces.** Take the free Dirac electron and *demand* that its phase symmetry hold *locally* — independently at every point of spacetime — and you are forced to introduce a new field to compensate. That field is the **photon**, and the interaction it must have is exactly electromagnetism. The force isn't put in by hand; it's *conjured* by a symmetry requirement. This "gauge principle" is the template for all of the Standard Model — the weak and strong forces arise the same way, from local $SU(2)$ and $SU(3)$ symmetries. This lesson shows how demanding local $U(1)$ invariance produces the photon and forces it to be massless.

## The idea

The free Dirac Lagrangian $\mathcal{L} = \bar\psi(i\not\partial - m)\psi$ has a **global** phase symmetry $\psi \to e^{i\alpha}\psi$ (constant $\alpha$), whose Noether charge is the electric charge ([1.3](01-03-symmetries-noether-for-fields.md)). "Global" means you rotate the phase by the *same* $\alpha$ everywhere. Now ask a bold question: why should the phase convention be locked together across all of spacetime? Demand instead a **local** symmetry — let $\alpha = \alpha(x)$ vary from point to point (the picture).

The mass term $-m\bar\psi\psi$ is fine (the phases cancel), but the derivative term breaks: $\partial_\mu(e^{i\alpha(x)}\psi) = e^{i\alpha}(\partial_\mu\psi + i(\partial_\mu\alpha)\psi)$ — the extra $\partial_\mu\alpha$ term spoils invariance. The derivative "notices" that the phase convention changes from point to point, and complains.

The fix is inspired: introduce a new **gauge field** $A_\mu$ and replace the ordinary derivative with a **covariant derivative** $D_\mu = \partial_\mu + ieA_\mu$, where $A_\mu$ transforms as $A_\mu \to A_\mu - \frac{1}{e}\partial_\mu\alpha$. The gauge field's transformation is designed to *exactly cancel* the offending $\partial_\mu\alpha$, so that $D_\mu\psi \to e^{i\alpha}D_\mu\psi$ transforms covariantly (like $\psi$ itself). Invariance restored — but at the price of a new field $A_\mu$, which turns out to be the **photon**. The interaction between electron and photon is *forced* by this construction (minimal coupling, [5.2](05-02-minimal-coupling-qed-lagrangian.md)).

Two profound consequences. First, the photon's own dynamics must be gauge-invariant, which singles out the field strength $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ and the Lagrangian $-\frac14 F_{\mu\nu}F^{\mu\nu}$ (Maxwell!). Second, a photon **mass** term $\frac12 m^2 A_\mu A^\mu$ is *not* gauge-invariant — so gauge symmetry *forbids* it, and **the photon must be massless**. Gauge invariance explains why light has no mass and why the electromagnetic force has infinite range.

## The formal version

The free Dirac Lagrangian has the **global $U(1)$ symmetry** $\psi \to e^{i\alpha}\psi$ (constant $\alpha$). Promote it to a **local (gauge) symmetry** $\psi(x) \to e^{i\alpha(x)}\psi(x)$. The derivative fails to be covariant:

$$\partial_\mu\big(e^{i\alpha(x)}\psi\big) = e^{i\alpha}\big(\partial_\mu + i\partial_\mu\alpha\big)\psi \neq e^{i\alpha}\partial_\mu\psi.$$

**Fix:** introduce a gauge field $A_\mu$ and the **covariant derivative**

$$D_\mu = \partial_\mu + ieA_\mu, \qquad A_\mu \to A_\mu - \tfrac1e\partial_\mu\alpha,$$

so that $D_\mu\psi \to e^{i\alpha}D_\mu\psi$ (covariant). *In words:* $A_\mu$'s inhomogeneous transformation cancels the $\partial_\mu\alpha$ from the phase, restoring invariance. The **field strength**

$$F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu = -\tfrac{i}{e}[D_\mu, D_\nu]$$

is **gauge-invariant** ($F_{\mu\nu} \to F_{\mu\nu}$, since $\partial_\mu\partial_\nu\alpha$ is symmetric and cancels), and the unique gauge-invariant, Lorentz-invariant, dimension-4 kinetic term for $A_\mu$ is $\mathcal{L}_{\text{Maxwell}} = -\frac14 F_{\mu\nu}F^{\mu\nu}$. **Masslessness:** a term $\frac12 m_\gamma^2 A_\mu A^\mu$ transforms as $A_\mu A^\mu \to A_\mu A^\mu - \frac2e A^\mu\partial_\mu\alpha + \cdots \neq A_\mu A^\mu$ — *not* gauge-invariant. *In words:* gauge symmetry forbids a photon mass; the photon is exactly massless, and electromagnetism has infinite range.

## Picture

![The gauge principle: a global phase symmetry (constant alpha) leaves the Dirac Lagrangian invariant, but promoting to a local symmetry alpha(x) breaks it via a derivative term; the fix is a covariant derivative D = partial + i e A introducing the gauge field A, the photon, which must be massless because a mass term is not gauge invariant](assets/05-01-fig1.svg)

## Worked examples

**Example 1 (the covariant derivative fixes local invariance).** Check that $D_\mu\psi = (\partial_\mu + ieA_\mu)\psi$ transforms covariantly. Under the gauge transformation $\psi \to e^{i\alpha}\psi$, $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$:

$$D_\mu\psi \to \big(\partial_\mu + ie(A_\mu - \tfrac1e\partial_\mu\alpha)\big)e^{i\alpha}\psi = e^{i\alpha}\big(\partial_\mu\psi + i(\partial_\mu\alpha)\psi + ieA_\mu\psi - i(\partial_\mu\alpha)\psi\big) = e^{i\alpha}(\partial_\mu + ieA_\mu)\psi = e^{i\alpha}D_\mu\psi.$$

The $i(\partial_\mu\alpha)\psi$ from differentiating the phase is **exactly cancelled** by the $-i(\partial_\mu\alpha)\psi$ from $A_\mu$'s shift. So $D_\mu\psi$ transforms just like $\psi$ (picks up the same phase), and any Lagrangian built from $\bar\psi$, $\psi$, and $D_\mu\psi$ is gauge-invariant. The gauge field's transformation was *reverse-engineered* to make this cancellation work — that's the whole trick.

**Example 2 (why the photon is massless).** Suppose we tried to give the photon a mass with a term $\mathcal{L}_m = \frac12 m_\gamma^2 A_\mu A^\mu$. Under the gauge transformation $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$:

$$A_\mu A^\mu \to \Big(A_\mu - \tfrac1e\partial_\mu\alpha\Big)\Big(A^\mu - \tfrac1e\partial^\mu\alpha\Big) = A_\mu A^\mu - \tfrac2e A_\mu\partial^\mu\alpha + \tfrac1{e^2}(\partial\alpha)^2 \neq A_\mu A^\mu.$$

The extra terms don't vanish, so $\mathcal{L}_m$ is **not gauge-invariant** — it's forbidden. Gauge symmetry therefore *requires* $m_\gamma = 0$: the photon is massless, and this is *protected* by the symmetry (no quantum corrections can generate a photon mass without breaking gauge invariance). This is why light travels at exactly $c$ and electromagnetism has infinite range (a massive photon would give a Yukawa-suppressed, short-range force). Experimentally $m_\gamma < 10^{-18}$ eV — consistent with exactly zero, as gauge symmetry demands.

## Watch out

- **You might think the gauge field is optional.** Once you *demand* local $U(1)$ invariance, the gauge field $A_\mu$ is **forced** — there's no local-invariant theory of a charged fermion without it. The photon isn't added by hand; it's the necessary compensator. This is the deep content of "gauge symmetry dictates the interaction."
- **You might treat $A_\mu$ as physical/observable.** $A_\mu$ itself is *gauge-dependent* (it shifts by $\partial_\mu\alpha$) — only gauge-invariant quantities like $F_{\mu\nu}$ (the $\mathbf{E}, \mathbf{B}$ fields) are physical. This "redundancy" of $A_\mu$ is a feature (it's what makes the theory consistent) but requires care when quantizing ([5.3](05-03-quantizing-photon-propagator.md)).
- **You might expect gauge symmetry to be a symmetry like others.** It's a **redundancy** of description, not a physical symmetry relating distinct states — gauge-equivalent configurations $A_\mu$ and $A_\mu - \frac1e\partial_\mu\alpha$ are the *same* physical state. This distinction matters for counting photon polarizations (only 2 physical, not 4) and for quantization.

## One-liner

> Demanding the electron's phase symmetry hold *locally* forces a compensating gauge field — the photon — via the covariant derivative $D_\mu = \partial_\mu + ieA_\mu$; and since a photon mass term isn't gauge-invariant, the photon must be massless.

## Problems

**P1 (🟢)** Verify that the field strength $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ is gauge-invariant under $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$. *Hint:* the extra terms involve $\partial_\mu\partial_\nu\alpha$, which is symmetric in $\mu\nu$.

**P2 (🟡)** Show that $\bar\psi\gamma^\mu D_\mu\psi = \bar\psi\gamma^\mu(\partial_\mu + ieA_\mu)\psi$ is gauge-invariant, and identify the interaction term hidden inside it. *Hint:* expand $D_\mu$; the $ieA_\mu$ piece gives $-e\bar\psi\gamma^\mu\psi\,A_\mu = -e j^\mu A_\mu$ (current coupled to the photon). Which Noether current is $j^\mu$?

**P3 (🔴, optional)** In differential-geometry language, the gauge field $A_\mu$ is a **connection** and $F_{\mu\nu}$ its **curvature**. Show that $F_{\mu\nu} = -\frac{i}{e}[D_\mu, D_\nu]$ (the field strength is the commutator of covariant derivatives). Why does this identify $F$ as a curvature, and what is the analog for the covariant derivative on a curved manifold? (Cross-link [`differential-geometry`](../../differential-geometry/syllabus.md).)

<details>
<summary>Solutions</summary>

**P1** Under $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$: $F_{\mu\nu} \to \partial_\mu(A_\nu - \frac1e\partial_\nu\alpha) - \partial_\nu(A_\mu - \frac1e\partial_\mu\alpha) = (\partial_\mu A_\nu - \partial_\nu A_\mu) - \frac1e(\partial_\mu\partial_\nu\alpha - \partial_\nu\partial_\mu\alpha) = F_{\mu\nu} - 0 = F_{\mu\nu}$, since mixed partials commute ($\partial_\mu\partial_\nu\alpha = \partial_\nu\partial_\mu\alpha$). So $F_{\mu\nu}$ is gauge-invariant — it's built from the physical $\mathbf{E}$ and $\mathbf{B}$ fields, which are observable. ✓

**P2** Since $D_\mu\psi \to e^{i\alpha}D_\mu\psi$ (Example 1) and $\bar\psi \to e^{-i\alpha}\bar\psi$, the bilinear $\bar\psi\gamma^\mu D_\mu\psi \to e^{-i\alpha}\bar\psi\gamma^\mu e^{i\alpha}D_\mu\psi = \bar\psi\gamma^\mu D_\mu\psi$ — invariant. Expanding: $\bar\psi\gamma^\mu D_\mu\psi = \bar\psi\gamma^\mu\partial_\mu\psi + ie\bar\psi\gamma^\mu\psi\,A_\mu = \bar\psi\gamma^\mu\partial_\mu\psi + ie\,j^\mu A_\mu$, where $j^\mu = \bar\psi\gamma^\mu\psi$ is the **electromagnetic (Dirac) current** — exactly the Noether current of the $U(1)$ phase symmetry ([1.3](01-03-symmetries-noether-for-fields.md), [4.2](04-02-dirac-equation.md)). The interaction term $-e j^\mu A_\mu$ (in the Lagrangian) is the coupling of the electron's current to the photon — the fundamental QED vertex ([5.2](05-02-minimal-coupling-qed-lagrangian.md)). Gauge symmetry *produced* this interaction from the free theory.

**P3** Compute $[D_\mu, D_\nu]\psi = (\partial_\mu + ieA_\mu)(\partial_\nu + ieA_\nu)\psi - (\mu \leftrightarrow \nu)$. The $\partial\partial$ terms cancel (symmetric); the cross terms give $ie(\partial_\mu A_\nu - \partial_\nu A_\mu)\psi = ieF_{\mu\nu}\psi$ (the $A A$ terms cancel for abelian $U(1)$). So $[D_\mu, D_\nu] = ieF_{\mu\nu}$, i.e. $F_{\mu\nu} = -\frac{i}{e}[D_\mu, D_\nu]$. This identifies $F$ as a **curvature**: exactly as in [`differential-geometry`](../../differential-geometry/syllabus.md), the curvature of a connection is the commutator of covariant derivatives (the Riemann tensor is $[\nabla_\mu, \nabla_\nu]$ acting on a vector). The gauge field $A_\mu$ is the connection (like the Christoffel symbols $\Gamma$), the covariant derivative $D_\mu = \partial_\mu + ieA_\mu$ mirrors $\nabla_\mu = \partial_\mu + \Gamma_\mu$, and $F_{\mu\nu}$ is the field-strength curvature — the same geometry, with the electromagnetic $U(1)$ "internal" bundle replacing the tangent bundle. This is the deep unity of gauge theory and gravity. ∎

</details>

## Flashback

**From Lesson 4.5 (The Dirac propagator):** Write the momentum-space Dirac propagator and identify its numerator.

<details>
<summary>Solution</summary>

$\widetilde S_F(p) = \dfrac{i(\not{p} + m)}{p^2 - m^2 + i\varepsilon}$. The numerator $\not{p} + m$ is the spin-sum projector $\sum_s u^s\bar u^s$ — the matrix structure that carries the fermion's spin, obtained by rationalizing $\frac{i}{\not{p} - m}$ using $\not{p}\not{p} = p^2$. ✓

</details>

## Connections

- **Backward:** the global $U(1)$ symmetry and its charge current are from [1.3](01-03-symmetries-noether-for-fields.md)/[4.2](04-02-dirac-equation.md); the electron field is the Dirac field of Module 4; the covariant-derivative idea mirrors the connection of [`differential-geometry`](../../differential-geometry/syllabus.md).
- **Forward:** [5.2](05-02-minimal-coupling-qed-lagrangian.md) writes the full QED Lagrangian (with the forced interaction $-e j^\mu A_\mu$); [5.3](05-03-quantizing-photon-propagator.md) quantizes the photon (handling the gauge redundancy); [6.7](06-07-taste-non-abelian-gauge-theory.md) generalizes to non-abelian gauge groups (the weak and strong forces).
- **Sideways (geometry/Standard Model):** the gauge principle — local symmetry forces a connection (gauge field) whose curvature is the field strength — is the geometry of [`differential-geometry`](../../differential-geometry/syllabus.md)'s fiber bundles; the entire Standard Model is $U(1) \times SU(2) \times SU(3)$ gauge theory built this way.

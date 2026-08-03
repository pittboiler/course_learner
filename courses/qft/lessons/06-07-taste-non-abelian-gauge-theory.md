# Quantum Field Theory · Lesson 6.7: A taste of non-abelian gauge theory

> ⏱ ~15 min · Module 6: The path integral and renormalization · Builds on: [6.6 Running couplings and the renormalization group](06-06-running-couplings-renormalization-group.md), [5.1 Gauge invariance and the photon](05-01-gauge-invariance-photon.md) · Unlocks: the Standard Model, [`representation-theory`](../../representation-theory/syllabus.md), [`differential-geometry`](../../differential-geometry/syllabus.md)

## Why this matters

This is the summit. QED was built on the *abelian* gauge group $U(1)$ (phases commute). The weak and strong forces are built on **non-abelian** groups — $SU(2)$ and $SU(3)$ — where the symmetry transformations *don't commute*, and that single change has spectacular consequences: the gauge bosons (gluons, $W$/$Z$) become **charged and self-interacting**, which produces **asymptotic freedom** (why the strong force weakens at high energy) and, ultimately, **confinement** (why quarks are never seen alone). The entire **Standard Model** — every known fundamental interaction except gravity — is $SU(3) \times SU(2) \times U(1)$ gauge theory built by exactly the machinery of this course. This lesson glimpses what lies just beyond QED, tying the whole course to the frontier of fundamental physics.

## The idea

In QED, gauge transformations are phases $e^{i\alpha}$ — and phases **commute** ($e^{i\alpha}e^{i\beta} = e^{i\beta}e^{i\alpha}$), so $U(1)$ is *abelian*. Yang and Mills asked: what if the gauge group is *non-abelian*, like $SU(N)$, whose transformations are matrices that **don't commute**? The gauge field becomes a matrix $A_\mu = A_\mu^a T^a$ (with $T^a$ the group generators, $a$ running over the $N^2 - 1$ generators — $8$ for $SU(3)$), and the covariant derivative is $D_\mu = \partial_\mu + igA_\mu^a T^a$.

The dramatic new feature is in the **field strength** (the picture). For $U(1)$ it was linear: $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$. For non-abelian $G$, the non-commuting generators add an extra term:

$$F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a - g\,f^{abc}A_\mu^b A_\nu^c,$$

where $f^{abc}$ are the group's structure constants ($[T^a, T^b] = if^{abc}T^c$). That extra $g f^{abc}A A$ term is **quadratic in the gauge field**, so the Yang–Mills Lagrangian $-\frac14 F_{\mu\nu}^a F^{a\mu\nu}$ contains **cubic and quartic self-interactions** of the gauge bosons — 3-gluon and 4-gluon vertices. The gauge bosons carry the very charge they mediate: **gluons are colored**, unlike the photon which is electrically neutral.

This self-interaction is *the* difference between QED and QCD, and it drives everything. The gluon self-coupling **antiscreens** the color charge, flipping the sign of the beta function ([6.6](06-06-running-couplings-renormalization-group.md)) to negative — **asymptotic freedom**: the strong force gets weaker at high energy (quarks nearly free inside protons) and stronger at low energy (**confinement**: pulling quarks apart costs ever more energy, so they're permanently bound into hadrons). The photon, being neutral, does none of this. Non-abelian gauge theory is where the gauge principle of [5.1](05-01-gauge-invariance-photon.md) reaches its full, world-building power.

## The formal version

A **non-abelian (Yang–Mills) gauge theory** has gauge group $G$ (e.g. $SU(N)$) with generators $T^a$ satisfying $[T^a, T^b] = if^{abc}T^c$ (structure constants $f^{abc}$). The gauge field $A_\mu = A_\mu^a T^a$ transforms under a local gauge transformation $U(x) = e^{i\alpha^a(x)T^a}$ as

$$A_\mu \to U A_\mu U^{-1} - \tfrac{i}{g}(\partial_\mu U)U^{-1},$$

and the **covariant derivative** is $D_\mu = \partial_\mu + igA_\mu^a T^a$. The **field strength**

$$F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a - g\,f^{abc}A_\mu^b A_\nu^c, \qquad F_{\mu\nu} = -\tfrac{i}{g}[D_\mu, D_\nu],$$

is **not** gauge-invariant (it transforms covariantly, $F_{\mu\nu} \to UF_{\mu\nu}U^{-1}$), but the trace $\text{Tr}[F_{\mu\nu}F^{\mu\nu}]$ is invariant, giving the **Yang–Mills Lagrangian** $\mathcal{L} = -\frac14 F_{\mu\nu}^a F^{a\mu\nu}$. *In words:* the $gf^{abc}AA$ term makes $-\frac14 F^2$ contain cubic ($\sim g$) and quartic ($\sim g^2$) **gauge-boson self-interactions** — absent in abelian QED.

**Consequences.** The self-interaction gives the negative beta function $\beta = -\frac{g^3}{16\pi^2}(\frac{11}{3}C_2(G) - \frac43 n_f T(R)) < 0$ — **asymptotic freedom** ([6.6](06-06-running-couplings-renormalization-group.md)). Quantizing via the path integral requires **Faddeev–Popov ghosts** (unphysical fields from gauge-fixing the non-abelian measure, [6.3](06-03-recovering-propagators-feynman-rules.md) P3). **The Standard Model** is $SU(3)_C \times SU(2)_L \times U(1)_Y$: $SU(3)$ color (QCD, 8 gluons, strong force), $SU(2)_L \times U(1)_Y$ electroweak (the $W^\pm, Z, \gamma$, unified weak + electromagnetic), with masses from the Higgs mechanism. *In words:* every known non-gravitational force is a gauge theory built by this course's machinery, differing only in the group.

## Picture

![Non-abelian gauge theory's new feature: the 3-gluon self-interaction vertex (proportional to g times the structure constants f-abc) and the 4-gluon vertex (proportional to g squared), arising from the extra nonlinear term in the field strength F = partial A minus partial A minus g f A A; below, the Standard Model gauge group SU(3) times SU(2) times U(1) for the strong, weak, and electromagnetic forces](assets/06-07-fig1.svg)

## Worked examples

**Example 1 (self-interaction from the non-abelian field strength).** Compare the field strengths. **Abelian ($U(1)$, QED):** $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ — *linear* in $A$, so $-\frac14 F^2$ is *quadratic* in $A$: only a propagator, no photon self-interaction. The photon is neutral. **Non-abelian ($SU(N)$):** $F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a - gf^{abc}A_\mu^b A_\nu^c$ — the extra term is *quadratic* in $A$, so $-\frac14 F^2 = -\frac14(\partial A - \partial A - gf AA)^2$ contains:

$$\underbrace{(\partial A)^2}_{\text{propagator}} + \underbrace{g\,f^{abc}(\partial A)AA}_{\text{3-gluon vertex}} + \underbrace{g^2 f^{abc}f^{ade}AAAA}_{\text{4-gluon vertex}}.$$

The cubic and quartic terms are **gauge-boson self-interactions** — gluons scatter off gluons. This is impossible for the abelian photon (no $f^{abc}$; $U(1)$ has one generator that commutes with itself, $f = 0$). The gluons *carry color charge* (they transform in the adjoint representation), so they source and feel the strong force themselves — the defining feature of QCD.

**Example 2 (the Standard Model in one breath).** Everything in this course assembles into the Standard Model, one gauge theory:

- **Strong force (QCD):** gauge group $SU(3)_C$, 8 self-interacting **gluons**, coupling to quarks (which carry color). Asymptotically free ([6.6](06-06-running-couplings-renormalization-group.md)) → quarks free at high energy, confined at low energy into protons, neutrons, pions.
- **Electroweak force:** gauge group $SU(2)_L \times U(1)_Y$, unifying the **weak** force ($W^\pm, Z$ bosons) and **electromagnetism** ($\gamma$). The $W, Z$ are *massive* (short-range weak force), their masses generated by the **Higgs mechanism** (spontaneous symmetry breaking) — the one piece this course didn't build.
- **Matter:** three generations of quarks and leptons (Dirac fermions, Module 4), coupled to the gauge fields by minimal coupling ([5.2](05-02-minimal-coupling-qed-lagrangian.md)).

Every interaction is $D_\mu = \partial_\mu + igA_\mu^a T^a$ — the gauge principle of [5.1](05-01-gauge-invariance-photon.md), with the group deciding the force. QED (Module 5) is the $U(1)$ corner of this structure. **The whole of fundamental physics (minus gravity) is this course's machinery, scaled up to non-abelian groups** — a stunning unification, and the reason QFT is called the deepest framework in physics.

## Watch out

- **You might think the photon self-interacts like the gluon.** It doesn't — $U(1)$ is abelian ($f^{abc} = 0$), so there's no photon self-interaction (light doesn't scatter off light at tree level; the leading effect is a tiny loop-induced process). Gluon self-interaction is the *non-abelian* feature, and it's what makes QCD qualitatively different (asymptotic freedom, confinement).
- **You might expect non-abelian theories to be simple extensions of QED.** The self-interactions make them far richer and harder: confinement is non-perturbative and *still not rigorously proven* (a Millennium Prize problem — the "Yang–Mills mass gap"), gauge-fixing requires ghosts, and the physics (jets, hadrons, the QCD vacuum) has no QED analog.
- **You might think gauge theory is the whole story.** The Standard Model is gauge theory *plus* the Higgs mechanism (mass generation via spontaneous symmetry breaking) *plus* three generations and their mixing — and it leaves out **gravity** (non-renormalizable, [6.5](06-05-regularization-renormalization.md)), dark matter, and more. Gauge theory is the framework; the frontier is why *these* groups and *these* particles, and how to include gravity.

## One-liner

> Non-abelian gauge theory ($SU(N)$) makes the gauge bosons carry charge and self-interact (from the extra $gf^{abc}AA$ term in $F_{\mu\nu}$), producing asymptotic freedom and confinement — and the Standard Model is $SU(3)\times SU(2)\times U(1)$, every fundamental force but gravity, built by this course's machinery.

## Problems

**P1 (🟢)** What is the crucial extra term in the non-abelian field strength $F_{\mu\nu}^a$ compared to the abelian (QED) case, and what physical interaction does it produce? Why does the photon *not* have this self-interaction?

**P2 (🟡)** The Standard Model gauge group is $SU(3) \times SU(2) \times U(1)$. Match each factor to a force and its gauge bosons: (a) $SU(3)$, (b) $SU(2) \times U(1)$ (after electroweak symmetry breaking). How many gauge bosons does $SU(3)$ have (recall $SU(N)$ has $N^2 - 1$ generators)?

**P3 (🔴, optional)** Connect to [`differential-geometry`](../../differential-geometry/syllabus.md): the non-abelian gauge field $A_\mu$ is a **connection** on a principal bundle with structure group $G$, and $F_{\mu\nu} = -\frac{i}{g}[D_\mu, D_\nu]$ is its **curvature**. Explain the analogy to the Riemann curvature of general relativity ($R = [\nabla, \nabla]$), and why the non-abelian $F$'s extra $[A, A]$ term is analogous to the $\Gamma\Gamma$ term in the Riemann tensor. What does this say about the unity of gauge theory and gravity?

<details>
<summary>Solution</summary>

**P1** The extra term is $-gf^{abc}A_\mu^b A_\nu^c$ — quadratic in the gauge field, built from the structure constants $f^{abc}$ (which encode the non-commuting generators, $[T^a, T^b] = if^{abc}T^c$). When squared in $-\frac14 F^2$, it produces **gauge-boson self-interactions** (3-gluon and 4-gluon vertices) — the gluons scatter off each other. The **photon lacks this** because $U(1)$ is abelian: it has a single generator that commutes with itself, so $f^{abc} = 0$ and the extra term vanishes. The photon is electrically neutral (carries no charge), so it doesn't source or feel electromagnetism itself; gluons are colored (carry the strong charge) and do.

**P2** (a) $SU(3)_C$ = the **strong force** (QCD), with $3^2 - 1 = 8$ **gluons** (self-interacting, coupling to color-charged quarks). (b) $SU(2)_L \times U(1)_Y$ = the **electroweak force**; after spontaneous symmetry breaking (Higgs mechanism), it yields the **weak force** ($W^+, W^-, Z$ bosons — massive, short-range) and **electromagnetism** ($\gamma$ — massless, long-range). So $SU(3)$ has **8 gauge bosons** (gluons); the electroweak sector has 4 ($W^\pm, Z, \gamma$), for 12 gauge bosons total in the Standard Model.

**P3** In [`differential-geometry`](../../differential-geometry/syllabus.md), a connection $\nabla_\mu = \partial_\mu + \Gamma_\mu$ has curvature given by the commutator $[\nabla_\mu, \nabla_\nu] = R_{\mu\nu}$ (the Riemann tensor), and $R \sim \partial\Gamma - \partial\Gamma + \Gamma\Gamma - \Gamma\Gamma$ has both a $\partial\Gamma$ (linear) and a $\Gamma\Gamma$ (nonlinear) part. **Exactly parallel:** the gauge covariant derivative $D_\mu = \partial_\mu + igA_\mu$ has curvature $F_{\mu\nu} = -\frac{i}{g}[D_\mu, D_\nu] = \partial_\mu A_\nu - \partial_\nu A_\mu + ig[A_\mu, A_\nu]$, where the commutator $[A_\mu, A_\nu] = f^{abc}A_\mu^b A_\nu^c T^a$ is the $\partial A$ (linear) plus $AA$ (nonlinear) structure. The gauge field $A_\mu$ ↔ connection $\Gamma_\mu$; the field strength $F_{\mu\nu}$ ↔ Riemann curvature $R_{\mu\nu}$; the $[A, A]$ self-interaction term ↔ the $\Gamma\Gamma$ term (which encodes gravity's self-interaction — gravity gravitates, just as gluons are colored). This reveals a **profound unity**: general relativity is a gauge theory of the local Lorentz/diffeomorphism symmetry, with the metric connection as its gauge field, and Yang–Mills theory is the same geometry with an internal group replacing the tangent-space group. Both forces are curvatures of connections on bundles — the deepest reason gauge theory and gravity share a mathematical language (fiber bundles, [`differential-geometry`](../../differential-geometry/syllabus.md)), and a central clue in the search for quantum gravity. ∎

</details>

## Flashback

**From Lesson 6.6 (Running couplings and the renormalization group):** Explain why QCD is asymptotically free — what makes its beta function negative?

<details>
<summary>Solution</summary>

QCD's beta function is $\propto -(11 - \frac23 n_f)$, negative for $n_f < 16.5$ (the real world has $n_f = 6$). The $11$ comes from **gluon self-interaction** (antiscreening — a non-abelian effect from the gluons carrying color charge), and the $\frac23 n_f$ from quark loops (screening, like QED). Antiscreening beats screening, so $\beta < 0$: the coupling *decreases* at high energy (asymptotic freedom, quarks nearly free inside protons) and *increases* at low energy (confinement). The gluon self-interaction — the topic of this lesson — is exactly what makes this possible. ✓

</details>

## Connections

- **Backward:** non-abelian gauge theory generalizes the gauge principle of [5.1](05-01-gauge-invariance-photon.md)–[5.2](05-02-minimal-coupling-qed-lagrangian.md) to non-commuting groups; the self-interaction drives the asymptotic freedom of [6.6](06-06-running-couplings-renormalization-group.md); ghosts arise from the path-integral gauge-fixing of [6.3](06-03-recovering-propagators-feynman-rules.md).
- **Forward (beyond the course):** the Standard Model, the Higgs mechanism, grand unification, and the open problems (confinement/mass gap, quantum gravity) — this lesson is the doorway to the frontier of fundamental physics.
- **Sideways (mathematics):** the connection/curvature structure is the fiber-bundle geometry of [`differential-geometry`](../../differential-geometry/syllabus.md) (P3), and the group theory of $SU(N)$, its representations, and structure constants is [`representation-theory`](../../representation-theory/syllabus.md) — QFT's summit rests on both.

*Module 6 note: Boss Problem 6 (the one-loop $\phi^4$ vertex renormalization and running coupling) is completed across [6.4](06-04-loops-uv-divergences.md)–[6.6](06-06-running-couplings-renormalization-group.md); this finale lesson glimpses the non-abelian generalization — Yang–Mills theory and the Standard Model — that the whole course has been climbing toward.*

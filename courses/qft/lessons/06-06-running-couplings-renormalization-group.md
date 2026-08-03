# Quantum Field Theory · Lesson 6.6: Running couplings and the renormalization group

> ⏱ ~15 min · Module 6: The path integral and renormalization · Builds on: [6.5 Regularization and renormalization](06-05-regularization-renormalization.md) · Unlocks: [6.7 A taste of non-abelian gauge theory](06-07-taste-non-abelian-gauge-theory.md)

## Why this matters

Renormalization left a remarkable fingerprint: the "constants" of nature aren't constant — **coupling strengths depend on the energy scale** at which you measure them. The electric charge is slightly *larger* at high energy; the strong-force coupling gets *weaker* at high energy (**asymptotic freedom**, the 2004 Nobel Prize, which is why quarks behave almost freely inside protons at high energy but are permanently confined at low energy). This "running" is governed by the **renormalization group** and its **beta function**, and it's genuinely measured at accelerators. Conceptually, it's the deepest lesson of Module 6: a QFT is not one theory but a *family* connected by scale, and the running coupling tells you how the physics changes as you zoom in or out. This lesson explains why couplings run and what it means.

## The idea

When we renormalized ([6.5](06-05-regularization-renormalization.md)), the finite leftover depended on an arbitrary reference scale $\mu$ (the energy at which we *defined* the renormalized coupling). Physical predictions can't depend on our arbitrary choice of $\mu$ — so if we change $\mu$, the coupling $\lambda_R(\mu)$ must change to compensate. That compensating change *is* the running of the coupling (the picture), and the requirement "physics is $\mu$-independent" is the **renormalization group equation**.

The rate of running is the **beta function**:

$$\beta(g) = \mu\frac{dg}{d\mu} \quad(\text{how the coupling changes per unit log-energy}).$$

Its *sign* is everything:

- **$\beta > 0$ (QED):** the coupling **grows** with energy. The electromagnetic $\alpha \approx 1/137$ at low energy becomes $\approx 1/128$ at the $Z$-boson mass ($\sim 91$ GeV) — measured, and confirmed. Physically, quantum vacuum polarization *screens* charge: at short distances (high energy) you penetrate the screening cloud and see a larger effective charge. (At extreme energy this leads to a **Landau pole** where the coupling formally blows up — signaling QED is incomplete at ultra-high energy.)
- **$\beta < 0$ (QCD):** the coupling **shrinks** with energy — **asymptotic freedom**. The strong coupling $\alpha_s$ is large at low energy (confining quarks and gluons into hadrons) but becomes *weak* at high energy, so quarks inside a proton behave nearly freely when probed hard. This counterintuitive antiscreening comes from the gluon self-interaction ([6.7](06-07-taste-non-abelian-gauge-theory.md)) and is why perturbative QCD works at colliders while confinement dominates at low energy.

So the "constants" run, their behavior set by the beta function's sign — and this running is not a mathematical artifact but a measured, physical phenomenon.

## The formal version

Physical quantities must be independent of the arbitrary renormalization scale $\mu$. For a dimensionless observable, this gives the **renormalization group (Callan–Symanzik) equation**:

$$\left(\mu\frac{\partial}{\partial\mu} + \beta(g)\frac{\partial}{\partial g} + \gamma\cdots\right)(\text{observable}) = 0,$$

with the **beta function**

$$\beta(g) = \mu\frac{dg}{d\mu}$$

controlling the **running coupling** $g(\mu)$. *In words:* as you change the scale $\mu$, the coupling flows according to $\beta$ so that physics stays fixed. **One-loop solution.** For $\beta(g) = b\,g^3$ (typical one-loop form for a gauge coupling), integrating gives

$$\frac{1}{g^2(\mu)} = \frac{1}{g^2(\mu_0)} - 2b\ln\frac{\mu}{\mu_0},$$

so the coupling runs logarithmically with energy. *In words:* the sign of $b$ decides everything: $b > 0$ → coupling grows with $\mu$ (screening, QED); $b < 0$ → coupling shrinks with $\mu$ (asymptotic freedom, QCD).

- **QED:** $\beta_{\text{QED}} = \frac{e^3}{12\pi^2} > 0$ — the coupling **increases** with energy; $\alpha(m_Z) \approx 1/128 > \alpha(0) \approx 1/137$.
- **QCD:** $\beta_{\text{QCD}} = -\frac{g^3}{16\pi^2}\left(11 - \frac23 n_f\right) < 0$ (for $n_f < 16.5$ quark flavors) — the coupling **decreases** with energy: **asymptotic freedom**.

*In words:* the beta function is computed from the loop divergences (the same $\ln\Lambda \to \ln\mu$ of [6.5](06-05-regularization-renormalization.md)); its sign is a one-loop calculation with profound consequences.

## Picture

![A plot of coupling strength versus energy scale (log): the QCD coupling alpha-s (beta less than zero) decreasing with energy — asymptotic freedom — while the QED coupling alpha (beta greater than zero) slowly increases with energy, with the beta function mu d-g d-mu governing the running](assets/06-06-fig1.svg)

## Worked examples

**Example 1 (solving the running — Boss Problem 6's punchline).** The $\ln\mu$-dependence of the renormalized coupling ([6.5](06-05-regularization-renormalization.md)) is exactly the running. For $\phi^4$, the one-loop beta function is $\beta(\lambda) = \frac{3\lambda^2}{16\pi^2} > 0$. Solve $\mu\frac{d\lambda}{d\mu} = \frac{3\lambda^2}{16\pi^2}$:

$$-\frac{1}{\lambda(\mu)} + \frac{1}{\lambda(\mu_0)} = \frac{3}{16\pi^2}\ln\frac{\mu}{\mu_0} \quad\Longrightarrow\quad \lambda(\mu) = \frac{\lambda(\mu_0)}{1 - \frac{3\lambda(\mu_0)}{16\pi^2}\ln\frac{\mu}{\mu_0}}.$$

The coupling **grows** with energy (denominator shrinks as $\mu$ rises), reaching a **Landau pole** where the denominator hits zero (the coupling formally diverges) — signaling $\phi^4$ theory (like QED) is only an effective theory, valid below that scale. Physically, the running says: **the strength of the interaction you measure depends on the energy of your probe.** "What is $\lambda$?" is an incomplete question — you must say *at what scale*. This is the resolution of the renormalization "puzzle": the leftover finite piece of the loop correction is the physically meaningful, scale-dependent running.

**Example 2 (asymptotic freedom — why quarks are free at high energy).** For QCD, the beta function is *negative*: $\beta(g_s) = -\frac{g_s^3}{16\pi^2}(11 - \frac23 n_f)$, which is $< 0$ as long as the number of quark flavors $n_f < 16.5$ (the real world has $n_f = 6$). Solving the running:

$$\alpha_s(\mu) = \frac{\alpha_s(\mu_0)}{1 + \frac{\alpha_s(\mu_0)}{2\pi}(11 - \frac23 n_f)\ln\frac{\mu}{\mu_0}},$$

the coupling **decreases** as $\mu \to \infty$ — quarks and gluons interact *weakly* at high energy (**asymptotic freedom**), so perturbation theory works at colliders and quarks inside a hard-probed proton behave almost freely (deep inelastic scattering). Conversely, as $\mu$ *decreases* toward $\Lambda_{\text{QCD}} \sim 200$ MeV, $\alpha_s$ **grows** without bound — the coupling becomes strong, quarks are permanently bound into hadrons (**confinement**), and perturbation theory fails. The single sign of the beta function explains both: the freedom of quarks at high energy and their imprisonment at low energy. The $11$ (from gluon self-interaction, non-abelian) beats the $\frac23 n_f$ (from quark screening) — antiscreening wins, and that's why the strong force is asymptotically free. (Gross, Politzer, Wilczek, Nobel 2004.)

## Watch out

- **You might think the running coupling is a mathematical artifact.** It's **physical and measured**: $\alpha_s(\mu)$ is extracted at many energy scales at colliders and traces out exactly the predicted logarithmic decrease; $\alpha_{\text{QED}}(m_Z) \approx 1/128$ is measured and differs from the low-energy $1/137$. The running is real physics — how effective interaction strength depends on probe energy.
- **You might confuse the sign conventions of the beta function.** $\beta > 0$ means the coupling *grows* with energy (screening, QED, $\phi^4$); $\beta < 0$ means it *shrinks* (asymptotic freedom, QCD). The sign comes from a competition between matter loops (screening, $+$) and gauge-boson self-interactions (antiscreening, $-$, only for non-abelian). Track which dominates.
- **You might extrapolate a running coupling naively to all energies.** QED's coupling formally hits a Landau pole at absurdly high energy — but long before that, new physics (or the coupling's growth) invalidates the perturbative one-loop running. A growing coupling signals the theory is *effective*, needing UV completion; a shrinking one (QCD) is self-consistent to arbitrarily high energy.

## One-liner

> Renormalization makes couplings depend on the energy scale $\mu$, running according to the beta function $\beta(g) = \mu\frac{dg}{d\mu}$: $\beta > 0$ (QED) means the coupling grows with energy, $\beta < 0$ (QCD) means asymptotic freedom — quarks weakly coupled at high energy, confined at low.

## Problems

**P1 (🟢)** Given the one-loop QED beta function $\beta = +\frac{e^3}{12\pi^2} > 0$, does the electromagnetic coupling increase or decrease with energy? Is this consistent with $\alpha(m_Z) \approx 1/128$ being larger than $\alpha(0) \approx 1/137$?

**P2 (🟡)** For QCD with $\beta(g_s) < 0$, solve the running qualitatively: as energy $\mu \to \infty$, does $\alpha_s$ grow or shrink? As $\mu \to \Lambda_{\text{QCD}}$ from above? Connect these to (a) why perturbative QCD works at colliders and (b) confinement of quarks.

**P3 (🔴, optional)** The QCD beta-function coefficient is $\propto -(11 - \frac23 n_f)$, where $11$ comes from gluon self-interaction and $\frac23 n_f$ from $n_f$ quark flavors. For what value of $n_f$ would QCD *lose* asymptotic freedom (beta function turns positive)? The real world has $n_f = 6$; is QCD asymptotically free? What physical effect does each term represent (screening vs. antiscreening)?

<details>
<summary>Solutions</summary>

**P1** $\beta = \mu\frac{de}{d\mu} > 0$ means $e$ (and hence $\alpha = e^2/4\pi$) **increases** with energy $\mu$. This is consistent: $\alpha(m_Z) \approx 1/128$ (at $\mu = m_Z \approx 91$ GeV) is *larger* than $\alpha(0) \approx 1/137$ (low energy) — $1/128 > 1/137$. The coupling grows because vacuum polarization (electron–positron loops) screens the bare charge: probing at higher energy penetrates closer, inside the screening cloud, revealing more of the (larger) bare charge. Measured and confirmed.

**P2** With $\beta < 0$, the running $\alpha_s(\mu) = \frac{\alpha_s(\mu_0)}{1 + (\text{positive})\ln(\mu/\mu_0)}$: as $\mu \to \infty$, the denominator grows, so $\alpha_s \to 0$ — the coupling **shrinks** (asymptotic freedom). As $\mu \to \Lambda_{\text{QCD}}$ from above, the denominator $\to 0$ and $\alpha_s \to \infty$ — the coupling **grows** strong. Consequences: (a) at collider energies ($\mu \gg \Lambda_{\text{QCD}}$), $\alpha_s$ is small, so **perturbation theory works** — quarks and gluons are weakly coupled and QCD predictions (jets, cross-sections) are calculable. (b) At low energy ($\mu \sim \Lambda_{\text{QCD}} \sim 200$ MeV), $\alpha_s$ is large — quarks and gluons are strongly bound into color-neutral hadrons and cannot be isolated (**confinement**); perturbation theory fails and non-perturbative methods (lattice QCD) are needed.

**P3** The beta function is $\propto -(11 - \frac23 n_f)$, which is negative (asymptotically free) as long as $11 - \frac23 n_f > 0$, i.e. $n_f < \frac{33}{2} = 16.5$. So QCD loses asymptotic freedom at $n_f \geq 17$ quark flavors. The real world has $n_f = 6$ (up, down, strange, charm, bottom, top), far below $16.5$, so **QCD is asymptotically free**. Physical meaning: the $\frac23 n_f$ term is **screening** from quark–antiquark loops (like QED's vacuum polarization — matter loops screen the charge, pushing $\beta$ positive), while the $11$ is **antiscreening** from gluon self-interaction (gluons carry color charge and interact with each other — a purely non-abelian effect, [6.7](06-07-taste-non-abelian-gauge-theory.md) — which *anti*screens, pushing $\beta$ negative). Antiscreening ($11$) beats screening ($\frac23 \cdot 6 = 4$), so $\beta < 0$: the gluon self-coupling is what makes the strong force get *weaker* at short distances — the essence of asymptotic freedom, impossible in an abelian theory like QED. ∎

</details>

## Flashback

**From Lesson 6.5 (Regularization and renormalization):** Explain the two steps of renormalization and what a counterterm does.

<details>
<summary>Solution</summary>

**Regularize:** make the divergent loop integral temporarily finite with a regulator (cutoff $\Lambda$ or $d = 4 - \epsilon$), so the divergence appears as $\ln\Lambda$ or a pole $\frac1\epsilon$. **Renormalize:** absorb the divergence into counterterms that redefine the unobservable bare parameters ($\lambda_0 = \lambda_R + \delta\lambda$), leaving finite predictions in terms of measured renormalized quantities. A **counterterm** ($\delta\lambda$) is the divergent piece added to the bare parameter to cancel the loop divergence; its finite part is fixed by the renormalization scheme/scale $\mu$ — and the $\mu$-dependence is exactly the running coupling of this lesson. ✓

</details>

## Connections

- **Backward:** the running is the $\mu$-dependence left over from renormalization ([6.5](06-05-regularization-renormalization.md)); the beta function is computed from the loop divergences of [6.4](06-04-loops-uv-divergences.md); the couplings are QED's $e$ ([5.2](05-02-minimal-coupling-qed-lagrangian.md)) and $\phi^4$'s $\lambda$.
- **Forward:** [6.7](06-07-taste-non-abelian-gauge-theory.md) explains *why* QCD's beta function is negative (gluon self-interaction from the non-abelian gauge group) — the origin of asymptotic freedom.
- **Sideways (stat-mech / grand unification):** the renormalization group originated in [`stat-mech`](../../stat-mech/syllabus.md) (Wilson, critical phenomena) — running couplings ↔ scale-dependent effective interactions near critical points; extrapolating the Standard Model couplings suggests they nearly *unify* at $\sim 10^{16}$ GeV (grand unification), a tantalizing hint of physics beyond.

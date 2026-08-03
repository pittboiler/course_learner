# Quantum Field Theory · Lesson 6.5: Regularization and renormalization

> ⏱ ~15 min · Module 6: The path integral and renormalization · Builds on: [6.4 Loops and ultraviolet divergences](06-04-loops-uv-divergences.md) · Unlocks: [6.6 Running couplings and the renormalization group](06-06-running-couplings-renormalization-group.md)

## Why this matters

QFT's loop divergences ([6.4](06-04-loops-uv-divergences.md)) looked fatal — infinite predictions. **Renormalization** is the resolution, and it's one of the great conceptual triumphs of physics: the infinities are absorbed into the redefinition of a few unobservable ("bare") parameters, leaving *finite*, *predictive* answers for everything measurable. This is why QED can predict the electron's magnetic moment to twelve digits despite its divergent loops. The procedure has two steps: **regularize** (make the divergence temporarily finite with a cutoff or by working in $d = 4 - \epsilon$ dimensions) and **renormalize** (absorb the divergent piece into counterterms that redefine the bare parameters). This lesson explains what renormalization *does* — not magic, but a precise statement that physics is insensitive to unknown short-distance details.

## The idea

The divergent loop integral ([6.4](06-04-loops-uv-divergences.md)) is infinite because we integrated the loop momentum out to $\ell = \infty$. **Regularization** is a temporary bookkeeping device to make it finite (the picture): impose a **cutoff** $\Lambda$ (integrate only $\ell < \Lambda$), or use **dimensional regularization** (compute in $d = 4 - \epsilon$ dimensions, where the integral converges, and the divergence appears as a pole $\frac1\epsilon$). Now the loop correction is finite but *cutoff-dependent*: e.g. the $\phi^4$ vertex correction is $\sim \lambda^2\ln\Lambda$.

Here's the key insight of **renormalization**: the parameters in the Lagrangian — the "bare" mass $m_0$, coupling $\lambda_0$, field normalization — are **not physical/observable**. What you measure is the *renormalized* coupling $\lambda_R$ (e.g. the actual scattering strength at some energy). So split the bare parameter into a finite renormalized part plus a divergent **counterterm**:

$$\lambda_0 = \lambda_R + \delta\lambda,$$

and *choose* $\delta\lambda$ to exactly cancel the loop's $\ln\Lambda$. The divergence disappears into the (unobservable) bare coupling; the renormalized $\lambda_R$ is finite and is what you measure. The cutoff $\Lambda$ can then be sent to infinity with all physical predictions finite. **The infinities are absorbed, not eliminated** — they hide in the relationship between the fictitious bare parameters and the real measured ones.

This works cleanly *only* for **renormalizable** theories ([6.4](06-04-loops-uv-divergences.md)): there, finitely many counterterms (mass, coupling, field normalization) suffice to absorb *all* divergences at *all* loop orders. You fix the finite parts by **renormalization conditions** — demand the theory reproduce a few measured quantities (a mass, a coupling at some energy) — and everything else is a finite prediction. QED needs just three counterterms; from three measured inputs, it predicts everything else to extraordinary precision.

## The formal version

**Regularization** makes divergent integrals finite by a regulator:

- **Momentum cutoff** $\Lambda$: integrate $|\ell| < \Lambda$; divergences appear as $\ln\Lambda$ or powers of $\Lambda$. (Breaks Lorentz/gauge invariance — inconvenient.)
- **Dimensional regularization**: compute in $d = 4 - \epsilon$ dimensions; divergences appear as poles $\frac1\epsilon$ as $\epsilon \to 0$. (Preserves Lorentz and gauge invariance — the modern standard.)

**Renormalization** splits bare parameters into renormalized + counterterm:

$$\lambda_0 = \lambda_R + \delta\lambda, \qquad m_0^2 = m_R^2 + \delta m^2, \qquad \phi_0 = \sqrt{Z}\,\phi_R,$$

with counterterms $\delta\lambda, \delta m^2, (Z - 1)$ chosen to cancel the divergences order by order. *In words:* the divergent loop corrections are absorbed into the (unobservable) bare parameters; the renormalized parameters are finite and physical. The **renormalization conditions** fix the finite parts by matching to measurements (e.g. "the coupling equals $\lambda_R$ at energy scale $\mu$," "the propagator has a pole at the physical mass"). *In words:* you trade a few infinities for a few measured inputs, then predict everything else finitely.

**Renormalizability** ([6.4](06-04-loops-uv-divergences.md)): a theory is renormalizable iff a *finite* number of counterterms (fixed by a finite number of measurements) absorbs *all* divergences to *all* orders — true iff couplings have mass-dimension $\geq 0$. *In words:* $\phi^4$ and QED need finitely many inputs; non-renormalizable theories need infinitely many (no predictivity, though they still work as *effective* theories below a cutoff).

## Picture

![The renormalization flow: a divergent loop of order lambda-squared log-Lambda is made finite by adding a counterterm, splitting the bare coupling lambda-zero into the renormalized lambda-R plus delta-lambda, with delta-lambda cancelling the log-Lambda, leaving a finite prediction lambda-R at a measurement scale mu; the bare coupling is unobservable, and renormalizability means finitely many counterterms suffice](assets/06-05-fig1.svg)

## Worked examples

**Example 1 (renormalizing the $\phi^4$ coupling — Boss Problem 6).** The one-loop $\phi^4$ vertex, regulated with a cutoff $\Lambda$, gives (schematically)

$$\mathcal{M} = -\lambda_0 + C\lambda_0^2\ln\frac{\Lambda}{\mu} + \cdots$$

for some constant $C$ and reference scale $\mu$. This diverges as $\Lambda \to \infty$. Now write the bare coupling as $\lambda_0 = \lambda_R + \delta\lambda$ and choose the counterterm $\delta\lambda = C\lambda_R^2\ln\frac{\Lambda}{\mu} + (\text{finite})$ to cancel the $\ln\Lambda$. Substituting (and working to order $\lambda_R^2$):

$$\mathcal{M} = -\lambda_R - \delta\lambda + C\lambda_R^2\ln\frac\Lambda\mu = -\lambda_R + (\text{finite}),$$

with the $\ln\Lambda$ gone. The **renormalized coupling** $\lambda_R$ is finite — it's *defined* as the physical scattering amplitude at the scale $\mu$ (a renormalization condition). The cutoff $\Lambda$ has dropped out of the physical amplitude entirely. **This is renormalization:** the loop divergence was absorbed into the (unmeasurable) bare $\lambda_0$, leaving the measured $\lambda_R$ finite. The leftover finite piece is a genuine, *predictive* quantum correction to scattering — and its $\mu$-dependence is the running coupling ([6.6](06-06-running-couplings-renormalization-group.md)).

**Example 2 (bare vs. renormalized — what's physical).** The bare Lagrangian has parameters $m_0, \lambda_0$ that appear infinite (they depend on $\Lambda$ and diverge as $\Lambda \to \infty$). This sounds alarming, but the bare parameters are **not observable** — you can never measure $\lambda_0$ directly. What you measure is a *physical* quantity: a cross-section, a mass, a coupling strength at a definite energy. These are the *renormalized* quantities, and they're finite. The renormalization conditions *define* the renormalized parameters by matching to measurement: e.g. "$m_R$ is the physical particle mass (the pole of the propagator)" and "$\lambda_R$ is the $2\to2$ amplitude at CM energy $\mu$." Once you fix these few numbers from experiment, every *other* prediction (other energies, other processes) is finite and parameter-free. The apparent infinity of the bare parameters is the price of insisting on a fundamental theory valid to arbitrarily short distances; the finiteness of physical predictions is the payoff. QED does this with 3 inputs (electron mass, electron charge, field normalization) and then predicts $g-2$, the Lamb shift, and all cross-sections.

## Watch out

- **You might think renormalization "hides" or "sweeps away" the infinities dishonestly.** It doesn't — it's the precise, physical statement that observables don't depend on unknown short-distance physics. The bare parameters were never measurable; expressing predictions in terms of *measured* (renormalized) quantities is not a trick but the correct way to compare theory to experiment. The finite predictions (like $g-2$) are unambiguous and spectacularly confirmed.
- **You might confuse the regulator with physics.** The cutoff $\Lambda$ (or $\epsilon$) is a *temporary* device; it must drop out of all physical predictions. If a final answer depends on $\Lambda$, you haven't renormalized correctly (or the theory is non-renormalizable). Different regulators (cutoff, dim reg) give the same physics.
- **You might expect all theories to be renormalizable.** They're not — only couplings of mass-dimension $\geq 0$. Non-renormalizable theories (gravity, Fermi's weak theory) still make sense as **effective field theories** valid below some scale $\Lambda$, with predictions organized in powers of $E/\Lambda$; they just can't be extrapolated to arbitrarily high energy without new physics.

## One-liner

> Renormalization regulates the loop divergence (cutoff or $d = 4 - \epsilon$) and absorbs it into counterterms that redefine the unobservable bare parameters, leaving finite predictions in terms of measured renormalized quantities — the reason QFT is predictive despite its infinities.

## Problems

**P1 (🟢)** Explain the two steps of renormalization (regularize, renormalize) in one sentence each, and state what a "counterterm" does. Why must the regulator ($\Lambda$ or $\epsilon$) drop out of physical predictions?

**P2 (🟡)** A one-loop amplitude is $\mathcal{M} = -\lambda_0 + C\lambda_0^2\ln(\Lambda/\mu)$. Write $\lambda_0 = \lambda_R + \delta\lambda$ and find the $\delta\lambda$ (to order $\lambda_R^2$) that renders $\mathcal{M}$ finite (cancels the $\ln\Lambda$). What determines the *finite* part of $\delta\lambda$?

**P3 (🔴, optional)** Explain why QED (dimensionless $e$) is renormalizable with finitely many counterterms, while a theory of gravity (Newton's constant $G_N$ has mass-dimension $-2$ in 4D) is not. *Hint:* relate the coupling's mass dimension to whether higher-loop diagrams generate new divergent structures. What does "effective field theory" salvage for gravity?

<details>
<summary>Solutions</summary>

**P1** **Regularize:** temporarily make the divergent loop integral finite by introducing a regulator (a momentum cutoff $\Lambda$, or working in $d = 4 - \epsilon$ dimensions), so the divergence appears as $\ln\Lambda$ or a pole $\frac1\epsilon$. **Renormalize:** absorb the divergent piece into counterterms that redefine the unobservable bare parameters ($\lambda_0 = \lambda_R + \delta\lambda$, etc.), leaving finite predictions in terms of the measured renormalized parameters. A **counterterm** is the divergent piece added to the bare parameter to cancel the loop divergence. The regulator must drop out of physical predictions because it was an artificial device — a fictitious short-distance modification; observables are the same regardless of how (or whether) you regulate, since they're expressed in terms of *measured* quantities, not the regulator.

**P2** Substitute $\lambda_0 = \lambda_R + \delta\lambda$: $\mathcal{M} = -(\lambda_R + \delta\lambda) + C(\lambda_R + \delta\lambda)^2\ln(\Lambda/\mu)$. To order $\lambda_R^2$ (treating $\delta\lambda \sim \lambda_R^2$): $\mathcal{M} = -\lambda_R - \delta\lambda + C\lambda_R^2\ln(\Lambda/\mu) + O(\lambda_R^3)$. For the $\ln\Lambda$ to cancel, choose $\delta\lambda = C\lambda_R^2\ln(\Lambda/\mu) + (\text{finite})$. Then $\mathcal{M} = -\lambda_R + (\text{finite})$ — cutoff-independent. The **finite part** of $\delta\lambda$ is determined by the **renormalization scheme / condition** (e.g. minimal subtraction keeps only the pole/log, or on-shell subtraction demands $\mathcal{M} = -\lambda_R$ exactly at a chosen scale $\mu$). Different schemes shuffle finite pieces between $\lambda_R$ and the counterterm but give the same physics.

**P3** Renormalizability hinges on the coupling's mass dimension. **QED**: $e$ is dimensionless ([5.2](05-02-minimal-coupling-qed-lagrangian.md) P3), so the superficial degree of divergence of a diagram does *not* grow with the number of loops/vertices — only a fixed, finite set of amplitude structures (electron self-energy, photon self-energy, vertex) diverge, absorbable into 3 counterterms (mass, charge, field normalizations). Adding loops doesn't create new divergent structures. **Gravity**: $G_N$ has mass-dimension $-2$, so each additional graviton vertex *raises* the degree of divergence — higher-loop diagrams generate divergences in ever-higher-dimension operators (curvature-squared, -cubed, ...), each needing its own counterterm and its own measured input. Infinitely many counterterms ⟹ infinitely many inputs ⟹ no predictivity: non-renormalizable. What's salvaged: gravity works as an **effective field theory** valid below the Planck scale $M_{\text{Pl}} \sim 1/\sqrt{G_N}$ — predictions are organized as a power series in $E/M_{\text{Pl}}$, and at accessible energies only the leading (Einstein) term matters, giving finite, predictive low-energy quantum-gravity corrections. The non-renormalizability signals that gravity needs a UV completion (string theory, etc.) at the Planck scale, not that it's useless. ∎

</details>

## Flashback

**From Lesson 6.4 (Loops and ultraviolet divergences):** Compute the superficial degree of divergence of the one-loop $\phi^4$ vertex correction ($L=1$, $I=2$) and state the divergence type.

<details>
<summary>Solution</summary>

$D = 4L - 2I = 4(1) - 2(2) = 0$. Since $D = 0$, the divergence is **logarithmic** ($\sim \ln\Lambda$). This is exactly the divergence absorbed into the renormalized $\phi^4$ coupling — and its scale-dependence gives the running coupling. ✓

</details>

## Connections

- **Backward:** renormalization tames the divergences of [6.4](06-04-loops-uv-divergences.md); the loop integral is the fish diagram of [3.4](03-04-feynman-diagrams-phi4.md)/[3.5](03-05-feynman-rules-amplitude.md); renormalizability is decided by the coupling dimension of [5.2](05-02-minimal-coupling-qed-lagrangian.md) P3.
- **Forward:** [6.6](06-06-running-couplings-renormalization-group.md) shows the leftover $\mu$-dependence makes couplings *run* with energy (the renormalization group); [6.7](06-07-taste-non-abelian-gauge-theory.md) applies it to non-abelian theories (asymptotic freedom).
- **Sideways (condensed matter):** Wilson's renormalization group reframes renormalization as *integrating out* short-distance modes, unifying QFT divergences with critical phenomena in [`stat-mech`](../../stat-mech/syllabus.md) — the "effective field theory" viewpoint (P3) is now the dominant modern understanding of *all* QFT, fundamental or emergent.

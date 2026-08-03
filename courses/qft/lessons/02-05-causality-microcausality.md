# Quantum Field Theory · Lesson 2.5: Causality and microcausality

> ⏱ ~15 min · Module 2: Canonical quantization of the scalar field · Builds on: [2.4 The Feynman propagator](02-04-feynman-propagator.md) · Unlocks: [3.1 The interaction picture and the S-matrix](03-01-interaction-picture-s-matrix.md)

## Why this matters

Relativity's non-negotiable rule is that nothing — no signal, no influence — travels faster than light. In quantum theory, "$A$ cannot influence $B$" means the operators for measurements at $A$ and $B$ must **commute**. So a causal QFT must satisfy $[\phi(x), \phi(y)] = 0$ whenever $x$ and $y$ are **spacelike separated** (outside each other's light cones). This is **microcausality**, and checking it is the moment QFT proves it's genuinely relativistic. The punchline delivers on a promise from [1.1](01-01-why-qm-relativity-forces-fields.md): the commutator vanishes only because the particle amplitude going one way *exactly cancels* the antiparticle amplitude going the other. **Antiparticles are not optional — causality demands them.** This closes Module 2's construction of a consistent free field.

## The idea

A measurement of the field at $x$ is represented by the operator $\phi(x)$; at $y$, by $\phi(y)$. In quantum mechanics, two observables can be measured without interfering iff their operators commute. Relativity says measurements at **spacelike-separated** points — points neither of which is in the other's past or future light cone (the picture) — *cannot* interfere, because no signal connects them. So consistency requires

$$[\phi(x), \phi(y)] = 0 \quad\text{whenever } (x - y)^2 < 0 \text{ (spacelike)}.$$

Now compute the commutator from the mode expansion. It splits into two pieces: a **particle** amplitude $\sim e^{-ip\cdot(x-y)}$ (from $[a, a^\dagger]$) and an **antiparticle** amplitude $\sim e^{+ip\cdot(x-y)}$ (the negative-frequency part). Individually neither vanishes outside the light cone — a single-particle amplitude *does* leak across, the causality violation of [1.1](01-01-why-qm-relativity-forces-fields.md). But for spacelike separation you can perform a Lorentz transformation that flips $(x - y) \to -(x - y)$ (spacelike vectors can be reversed by a continuous boost), which swaps the two amplitudes. Because they enter with opposite signs, they **cancel exactly**. The particle propagating from $y$ to $x$ and the antiparticle propagating from $x$ to $y$ are indistinguishable and interfere destructively — leaving zero net influence. Causality is restored, and it *required* the antiparticle term to do it.

For **timelike** separation the same boost is impossible (you can't reverse a timelike vector without time reversal), the cancellation fails, and the commutator is nonzero — as it must be, since timelike-separated points *can* be in causal contact.

## The formal version

**Microcausality (local commutativity).** For the real scalar field,

$$[\phi(x), \phi(y)] = 0 \qquad\text{for spacelike separation } (x - y)^2 < 0.$$

Compute it from the mode expansion. Define the two-point (Wightman) function $D(x - y) = \langle 0|\phi(x)\phi(y)|0\rangle = \int\frac{d^3p}{(2\pi)^3}\frac{1}{2\omega_{\mathbf p}}e^{-ip\cdot(x-y)}$. Then the commutator (a $c$-number, since $[a, a^\dagger]$ is) is

$$[\phi(x), \phi(y)] = D(x - y) - D(y - x) = \int\frac{d^3p}{(2\pi)^3}\frac{1}{2\omega_{\mathbf p}}\Big(e^{-ip\cdot(x-y)} - e^{+ip\cdot(x-y)}\Big).$$

*In words:* the commutator is the particle amplitude minus the antiparticle amplitude. **For spacelike $(x-y)$:** a Lorentz transformation continuously connected to the identity sends $(x-y) \to -(x-y)$, which swaps the two exponentials; since each integral is Lorentz-invariant, $D(x-y) = D(y-x)$, so the commutator **vanishes**. **For timelike $(x-y)$:** no such transformation exists (it would require time reversal), $D(x-y) \neq D(y-x)$, and the commutator is nonzero. *In words:* the field is causal precisely because the two terms — particle and antiparticle — cancel outside the light cone.

For a **complex** field, the relevant statement is $[\phi(x), \phi^\dagger(y)] = 0$ at spacelike separation; here $\phi$ annihilates particles and creates antiparticles, and the cancellation ties the particle and antiparticle masses together — they must be **equal**.

## Picture

![A light cone from event y; a timelike-separated event x inside the future cone (which can be causally influenced) and a spacelike-separated event x-prime outside the cone, where the field commutator vanishes because particle and antiparticle amplitudes cancel](assets/02-05-fig1.svg)

## Worked examples

**Example 1 (the commutator vanishes outside the light cone — Boss Problem 2).** Take $x$ and $y$ spacelike separated. In the commutator

$$[\phi(x), \phi(y)] = \int\frac{d^3p}{(2\pi)^3}\frac{1}{2\omega_{\mathbf p}}\Big(e^{-ip\cdot(x-y)} - e^{+ip\cdot(x-y)}\Big),$$

each term is a Lorentz-invariant integral over the mass shell. Pick a frame (a Lorentz boost, achievable for spacelike separation) in which $(x - y) \to -(x - y)$, i.e. the spatial separation reverses and the time separation stays zero. Under this, the first exponential becomes the second and vice versa, so the integral maps to *minus itself* — hence it is zero. Therefore $[\phi(x), \phi(y)] = 0$: spacelike-separated field measurements commute. **QFT is causal.** (The equal-time case $x^0 = y^0$, $\mathbf{x} \neq \mathbf{y}$ is a special spacelike case, consistent with $[\phi(\mathbf{x}), \phi(\mathbf{y})] = 0$ from [2.1](02-01-canonical-quantization-field-operators.md).)

**Example 2 (antiparticles are required — the cancellation needs both terms).** Suppose, hypothetically, the field had *only* the particle (positive-frequency) part: $\phi(x) \sim \int a_{\mathbf p}e^{-ip\cdot x}$, with no $a^\dagger$ creation term. Then $[\phi(x), \phi^\dagger(y)] \sim \int\frac{d^3p}{2\omega_{\mathbf p}}e^{-ip\cdot(x-y)} = D(x-y)$, which does **not** vanish for spacelike separation (a single-particle amplitude leaks outside the light cone — Yukawa-like, decaying over a Compton wavelength but nonzero). Causality would be violated. Restoring the antiparticle term ($a^\dagger$, negative frequency) adds $-D(y-x)$, and the two cancel. **So the negative-energy solutions of [1.4](01-04-klein-gordon-field.md) aren't a bug to discard — reinterpreted as antiparticle creation, they are exactly what causality needs.** This is why every particle has an antiparticle of equal mass: without it, no consistent relativistic quantum field.

## Watch out

- **You might expect the *propagator* to vanish outside the light cone.** It doesn't — the Feynman propagator $D_F$ (time-ordered, [2.4](02-04-feynman-propagator.md)) is nonzero for spacelike separation. It's the **commutator** (not the time-ordered product) that vanishes. Causality is about commutators (measurements), not about amplitudes being confined to the cone.
- **You might think a single-particle relativistic theory could be causal with more care.** It can't — the leakage in Example 2 is generic to *any* positive-energy-only amplitude. Only the full field, with both particle and antiparticle content, cancels it. This is the sharpest form of "single-particle QM fails relativistically."
- **You might conflate microcausality with the equal-time commutator.** The equal-time $[\phi, \pi] = i\delta^3$ ([2.1](02-01-canonical-quantization-field-operators.md)) is an *input* (quantization). Microcausality $[\phi(x), \phi(y)] = 0$ spacelike is a *derived, unequal-time* result — a nontrivial consequence, and the real test of relativistic consistency.

## One-liner

> Causality demands $[\phi(x), \phi(y)] = 0$ for spacelike separation, and it holds because the particle amplitude going one way exactly cancels the antiparticle amplitude going the other — so antiparticles (equal mass) are forced by relativity, not optional.

## Problems

**P1 (🟢)** Explain why $[\phi(x), \phi(y)] = 0$ at spacelike separation is the correct mathematical statement of "measurements at $x$ and $y$ cannot influence each other." What would a *nonzero* spacelike commutator physically permit?

**P2 (🟡)** For the equal-time case $x^0 = y^0$ (a special spacelike separation when $\mathbf{x} \neq \mathbf{y}$), show $[\phi(\mathbf{x}), \phi(\mathbf{y})] = 0$ directly from the commutator integral $\int\frac{d^3p}{(2\pi)^3}\frac{1}{2\omega_{\mathbf p}}(e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})} - e^{-i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})})$. *Hint:* substitute $\mathbf{p} \to -\mathbf{p}$ in the second term.

**P3 (🔴, optional)** For a complex scalar field, microcausality $[\phi(x), \phi^\dagger(y)] = 0$ (spacelike) ties the particle and antiparticle masses together. Sketch why: if the particle (annihilated by $\phi$) had mass $m_1$ and the antiparticle (created by $\phi$) had mass $m_2 \neq m_1$, the two amplitudes would live on *different* mass shells and could not cancel for all spacelike separations. What symmetry does "particle and antiparticle have equal mass" reflect? (This is the CPT theorem in embryo.)

<details>
<summary>Solutions</summary>

**P1** In quantum mechanics, two observables can be simultaneously measured without one disturbing the other iff their operators commute; if $[\hat A, \hat B] \neq 0$, measuring $\hat A$ affects the outcome distribution of $\hat B$. So $[\phi(x), \phi(y)] = 0$ means a measurement of the field at $x$ has *no effect* on a measurement at $y$ — no influence propagates between them. A **nonzero** spacelike commutator would mean a measurement at $x$ could alter results at a spacelike-separated $y$, i.e. instantaneous (faster-than-light) signaling — a violation of relativistic causality. Microcausality is exactly the no-superluminal-signaling condition.

**P2** At equal times, the commutator integral is $\int\frac{d^3p}{(2\pi)^3}\frac{1}{2\omega_{\mathbf p}}(e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})} - e^{-i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})})$ (the $p^0$ time-parts are equal so cancel in the exponent). Substitute $\mathbf{p} \to -\mathbf{p}$ in the second term: $e^{-i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})} \to e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})}$, and $\omega_{\mathbf p} = \omega_{-\mathbf p}$, $d^3p$ invariant. So the second term becomes identical to the first, and the difference is $0$. Hence $[\phi(\mathbf{x}), \phi(\mathbf{y})] = 0$ at equal times for $\mathbf{x} \neq \mathbf{y}$ — consistent with (and a special case of) microcausality, and with the input $[\phi, \phi] = 0$.

**P3** The commutator $[\phi(x), \phi^\dagger(y)]$ contains a particle amplitude on the mass shell $p^2 = m_1^2$ and an antiparticle amplitude on $p^2 = m_2^2$. The cancellation for *all* spacelike separations requires the two Lorentz-invariant integrals to be equal after the $(x-y)\to-(x-y)$ boost — which works only if they're integrals over the *same* mass shell, i.e. $m_1 = m_2$. If the masses differed, the amplitudes would have different spatial decay lengths (different Compton wavelengths) and couldn't cancel everywhere outside the cone. "Particle and antiparticle have equal mass" reflects **CPT symmetry** (the combined charge-conjugation, parity, time-reversal symmetry that any local, Lorentz-invariant QFT must possess) — of which equal particle/antiparticle masses (and lifetimes) is the most famous consequence. ∎

</details>

## Flashback

**From Lesson 2.4 (The Feynman propagator):** Write the momentum-space Feynman propagator, and state what the pole at $p^2 = m^2$ represents.

<details>
<summary>Solution</summary>

$\widetilde D_F(p) = \dfrac{i}{p^2 - m^2 + i\varepsilon}$. The pole at $p^2 = m^2$ is the **mass shell** — where a *real, on-shell* particle of mass $m$ can propagate (energy and momentum satisfying $E^2 = \mathbf{p}^2 + m^2$). Off the pole ($p^2 \neq m^2$), the propagator describes *virtual* particles on internal diagram lines; the $+i\varepsilon$ fixes the causal contour around the pole. ✓

</details>

## Connections

- **Backward:** microcausality delivers the causality promised in [1.1](01-01-why-qm-relativity-forces-fields.md); it uses the mode expansion of [2.2](02-02-creation-annihilation-fock-space.md) and reinterprets the negative-energy solutions of [1.4](01-04-klein-gordon-field.md) as the essential antiparticle amplitude; contrast with the (nonvanishing) propagator of [2.4](02-04-feynman-propagator.md).
- **Forward:** this completes the free scalar field; [3.1](03-01-interaction-picture-s-matrix.md) turns on interactions and sets up scattering; for fermions, requiring microcausality with *commutators* fails, forcing **anti**commutators — the spin-statistics theorem ([4.4](04-04-quantizing-dirac-anticommutators.md)).
- **Sideways (foundations):** microcausality is the QFT form of no-superluminal-signaling; combined with Lorentz invariance and locality it yields the CPT theorem (P3) and the spin-statistics connection — the deep structural theorems that any relativistic quantum theory must obey.

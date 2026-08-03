# Quantum Field Theory · Lesson 5.3: Quantizing the photon; the photon propagator

> ⏱ ~15 min · Module 5: Quantum electrodynamics · Builds on: [5.2 Minimal coupling and the QED Lagrangian](05-02-minimal-coupling-qed-lagrangian.md) · Unlocks: [5.4 QED Feynman rules](05-04-qed-feynman-rules.md)

## Why this matters

To compute QED amplitudes we need the **photon propagator** — the internal photon line — but quantizing the photon is subtly harder than the scalar or fermion, because of **gauge redundancy**. The gauge field $A_\mu$ has four components, but a photon has only **two** physical polarizations (the transverse ones); the extra components are unphysical gauge artifacts. Naively, the Maxwell kinetic term can't even be inverted to get a propagator. The resolution — **gauge fixing** — is a beautiful piece of machinery that lets us extract a clean propagator while keeping physical results gauge-independent. This lesson delivers the last propagator needed for QED, and it introduces the gauge-fixing idea that becomes essential (and much subtler) for the non-abelian theories of Module 6.

## The idea

The photon's kinetic term $-\frac14 F_{\mu\nu}F^{\mu\nu}$ has a problem: it's **gauge-invariant**, which means it doesn't fully constrain $A_\mu$ — you can always shift $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$ without changing anything. In momentum space, the kinetic operator has a *zero eigenvalue* (along the gauge direction $k_\mu$), so it's not invertible, and there's no propagator. The redundancy that made the theory consistent now blocks the calculation.

The fix is **gauge fixing** (the picture): add a term that "picks a gauge," breaking the redundancy just enough to invert the kinetic operator. The standard choice adds $-\frac{1}{2\xi}(\partial_\mu A^\mu)^2$ (the $R_\xi$ gauge), with $\xi$ a free parameter. In the convenient **Feynman gauge** ($\xi = 1$), the photon propagator comes out strikingly simple:

$$\widetilde D_{\mu\nu}(k) = \frac{-i\eta_{\mu\nu}}{k^2 + i\varepsilon}.$$

Same massless pole ($k^2 = 0$, the photon is massless) as expected, dressed with a metric $\eta_{\mu\nu}$ carrying the Lorentz index structure.

The physical polarization count: $A_\mu$ has 4 components, but gauge invariance removes 1 (the gauge freedom) and the equations of motion impose 1 constraint, leaving $4 - 2 = 2$ physical **transverse** polarizations — the photon's two helicities $\pm1$ (right- and left-circularly polarized light). The unphysical (timelike and longitudinal) components are pure gauge and cancel out of physical amplitudes. Crucially, the gauge parameter $\xi$ drops out of any physical result — a powerful **consistency check**: if your final cross-section depends on $\xi$, you've made an error.

## The formal version

**The problem.** The Maxwell Lagrangian in momentum space gives a kinetic operator $(k^2\eta_{\mu\nu} - k_\mu k_\nu)$ acting on $A^\nu$; it annihilates $k_\nu$ (i.e. $(k^2\eta_{\mu\nu} - k_\mu k_\nu)k^\nu = 0$), so it has a zero eigenvalue and **cannot be inverted** — no propagator.

**Gauge fixing.** Add $\mathcal{L}_{\text{gf}} = -\frac{1}{2\xi}(\partial_\mu A^\mu)^2$. The kinetic operator becomes $k^2\eta_{\mu\nu} - (1 - \frac1\xi)k_\mu k_\nu$, now invertible, giving the **photon propagator**

$$\widetilde D_{\mu\nu}(k) = \frac{-i}{k^2 + i\varepsilon}\left(\eta_{\mu\nu} - (1 - \xi)\frac{k_\mu k_\nu}{k^2}\right).$$

*In words:* a massless pole with a Lorentz-index structure depending on the gauge $\xi$. Common choices: **Feynman gauge** $\xi = 1$ gives the simplest form $\widetilde D_{\mu\nu} = \frac{-i\eta_{\mu\nu}}{k^2 + i\varepsilon}$; **Landau gauge** $\xi = 0$ gives the transverse form $\frac{-i}{k^2}(\eta_{\mu\nu} - \frac{k_\mu k_\nu}{k^2})$.

**Physical polarizations.** $A_\mu$ has $4$ components; gauge invariance removes $1$, the constraint (Gauss's law / $\partial_\mu A^\mu$ condition) removes $1$, leaving $\mathbf{2}$ physical **transverse** polarizations $\epsilon_\mu^{(1,2)}$ with $\epsilon\cdot k = 0$ — the photon's two helicity states. The **Ward identity** (from gauge invariance) guarantees that the unphysical polarizations decouple: $k_\mu\mathcal{M}^\mu = 0$ for any amplitude with an external photon, so replacing $\sum_{\text{pol}}\epsilon_\mu\epsilon_\nu^* \to -\eta_{\mu\nu}$ in $|\mathcal{M}|^2$ is legitimate (the $k_\mu k_\nu$ pieces drop). *In words:* only the 2 transverse photons are physical, and gauge invariance (the Ward identity) ensures the rest never contribute to observables — and that $\xi$ cancels.

## Picture

![A wavy photon line carrying momentum k with its propagator minus i eta-mu-nu over k squared plus i epsilon in Feynman gauge; below, the polarization count showing A-mu's 4 components minus gauge minus constraint equals 2 physical transverse polarizations (the photon's two helicities), with physical results independent of the gauge parameter xi](assets/05-03-fig1.svg)

## Worked examples

**Example 1 (why gauge fixing is needed).** The Maxwell kinetic term, integrated by parts, is $\frac12 A_\mu(\partial^2\eta^{\mu\nu} - \partial^\mu\partial^\nu)A_\nu$, so in momentum space the operator is $M^{\mu\nu} = -k^2\eta^{\mu\nu} + k^\mu k^\nu$. Test invertibility by acting on $k_\nu$: $M^{\mu\nu}k_\nu = -k^2 k^\mu + k^\mu k^2 = 0$. So $k_\nu$ is a **zero eigenvector** — the operator is singular (non-invertible), reflecting that gauge-equivalent $A_\mu$'s (differing by $\partial_\mu\alpha \sim k_\mu$) are physically identical. You cannot define $M^{-1}$ (the propagator) on this degenerate operator. Adding the gauge-fixing term $-\frac{1}{2\xi}(\partial\cdot A)^2$ shifts the operator to $-k^2\eta^{\mu\nu} + (1 - \frac1\xi)k^\mu k^\nu$, which *is* invertible (the $\frac1\xi k^\mu k^\nu$ lifts the zero eigenvalue) — hence a propagator exists. Gauge fixing is the price of the gauge redundancy.

**Example 2 (counting the photon's two polarizations).** A massless spin-1 field naively has $4$ components ($A_\mu$, $\mu = 0,1,2,3$). Remove the redundancy: gauge invariance $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$ lets you eliminate $1$ component (e.g. set $A^0 = 0$, temporal gauge, using $\alpha$); the residual constraint from the equations of motion (Gauss's law $\nabla\cdot\mathbf{E} = 0$ in vacuum, or $\partial_\mu A^\mu = 0$ Lorenz condition) removes $1$ more. That leaves $4 - 2 = \mathbf{2}$ physical, **transverse** polarizations — light polarized perpendicular to its propagation, the two helicity states $\pm1$. This is why light has two polarizations (horizontal/vertical, or left/right circular) and no "longitudinal" mode. Contrast a *massive* spin-1 particle (like the $W, Z$), which has $3$ polarizations (the extra longitudinal one) — masslessness is exactly what removes the third. The photon's masslessness (gauge symmetry) and its 2 polarizations are the same fact.

## Watch out

- **You might think the gauge parameter $\xi$ is physical.** It's not — $\xi$ is a calculational convenience, and every physical result (cross-sections, decay rates) is **independent of $\xi$**. If a final answer depends on $\xi$, there's an error. Different gauges ($\xi = 1$ Feynman, $\xi = 0$ Landau) are just different intermediate bookkeeping.
- **You might use all 4 photon polarizations as physical.** Only $2$ are physical (transverse). The timelike and longitudinal polarizations are gauge artifacts; the Ward identity ($k_\mu\mathcal{M}^\mu = 0$) guarantees they cancel in physical amplitudes, which justifies the replacement $\sum_{\text{pol}}\epsilon_\mu\epsilon_\nu^* \to -\eta_{\mu\nu}$ in spin sums ([5.6](05-06-squaring-amplitude-cross-section.md)).
- **You might forget the photon is massless in the propagator.** The photon propagator has $k^2$ (not $k^2 - m^2$) in the denominator — a massless pole. This is forced by gauge invariance ([5.1](05-01-gauge-invariance-photon.md)) and gives the $1/r$ Coulomb potential (a massive photon would give a Yukawa $e^{-mr}/r$).

## One-liner

> Gauge redundancy makes the Maxwell kinetic term non-invertible, so we gauge-fix (adding $-\frac1{2\xi}(\partial\cdot A)^2$) to get the photon propagator $\frac{-i\eta_{\mu\nu}}{k^2+i\varepsilon}$ (Feynman gauge); the photon has just 2 physical transverse polarizations, and physical results are $\xi$-independent.

## Problems

**P1 (🟢)** Write the photon propagator in Feynman gauge ($\xi = 1$) and in Landau gauge ($\xi = 0$). Confirm both have a massless pole at $k^2 = 0$, and note which is simpler for calculations.

**P2 (🟡)** Verify that the Maxwell kinetic operator $M^{\mu\nu} = -k^2\eta^{\mu\nu} + k^\mu k^\nu$ annihilates $k_\nu$ (has a zero eigenvalue), and explain why this makes it non-invertible. How does the gauge-fixing term remove the zero eigenvalue?

**P3 (🔴, optional)** The Ward identity says $k_\mu\mathcal{M}^\mu = 0$ for any QED amplitude $\mathcal{M}^\mu$ with an external photon of momentum $k$. Explain why this guarantees that (a) the gauge parameter $\xi$ cancels from physical amplitudes (the $k_\mu k_\nu/k^2$ term in the propagator drops), and (b) the unphysical photon polarizations decouple. What symmetry is the Ward identity a consequence of?

<details>
<summary>Solutions</summary>

**P1** Feynman gauge ($\xi = 1$): $\widetilde D_{\mu\nu}(k) = \frac{-i\eta_{\mu\nu}}{k^2 + i\varepsilon}$. Landau gauge ($\xi = 0$): $\widetilde D_{\mu\nu}(k) = \frac{-i}{k^2 + i\varepsilon}\left(\eta_{\mu\nu} - \frac{k_\mu k_\nu}{k^2}\right)$ (transverse — it satisfies $k^\mu D_{\mu\nu} = 0$). Both have the pole at $k^2 = 0$ (massless photon). **Feynman gauge is simpler** (no $k_\mu k_\nu$ term), so it's the usual choice for tree-level calculations; Landau gauge is manifestly transverse, convenient for some loop computations.

**P2** $M^{\mu\nu}k_\nu = -k^2\eta^{\mu\nu}k_\nu + k^\mu k^\nu k_\nu = -k^2 k^\mu + k^\mu k^2 = 0$. So $k_\nu$ is a zero eigenvector: $M$ maps it to $0$. A matrix (operator) with a zero eigenvalue is singular — it has no inverse (you can't undo mapping a nonzero vector to zero). Physically, the zero eigenvalue corresponds to the gauge direction: $A_\mu \sim k_\mu$ (i.e. $A_\mu = \partial_\mu\alpha$ in position space) is pure gauge, physically equivalent to zero, so the operator can't distinguish it. Adding $-\frac1{2\xi}(\partial\cdot A)^2$ contributes $+\frac1\xi k^\mu k^\nu$ to the operator, so $M^{\mu\nu} \to -k^2\eta^{\mu\nu} + (1 - \frac1\xi)k^\mu k^\nu$; now acting on $k_\nu$ gives $-k^2 k^\mu + (1-\frac1\xi)k^\mu k^2 = -\frac1\xi k^\mu k^2 \neq 0$ — the zero eigenvalue is lifted, and the operator is invertible.

**P3** The Ward identity $k_\mu\mathcal{M}^\mu = 0$ means the amplitude is transverse to the photon momentum. (a) The $\xi$-dependent part of the propagator is $\propto k_\mu k_\nu$; when this internal photon connects to the rest of the amplitude, one end contracts with a sub-amplitude $\mathcal{M}^\mu$, giving $k_\mu\mathcal{M}^\mu = 0$ by the Ward identity — so the $k_\mu k_\nu$ term contributes zero, and only the $\xi$-independent $\eta_{\mu\nu}$ part survives. Hence physical amplitudes don't depend on $\xi$. (b) For an *external* photon, the unphysical (longitudinal/timelike) polarizations are $\propto k_\mu$, and $k_\mu\mathcal{M}^\mu = 0$ means they don't contribute — only the 2 transverse polarizations do. The Ward identity is a consequence of **gauge invariance** (equivalently, current conservation $\partial_\mu j^\mu = 0$, [1.3](01-03-symmetries-noether-for-fields.md)) — it's the quantum statement that the redundant gauge degrees of freedom are truly unphysical. ∎

</details>

## Flashback

**From Lesson 5.2 (Minimal coupling and the QED Lagrangian):** Write the QED interaction term and the fundamental vertex factor.

<details>
<summary>Solution</summary>

The interaction term is $-e\bar\psi\gamma^\mu\psi\,A_\mu = -e j^\mu A_\mu$ (the electron current coupled to the photon), and the Feynman vertex factor is $-ie\gamma^\mu$ (two electron lines and one photon meeting). This single vertex, plus the electron and photon propagators, generates every QED diagram. ✓

</details>

## Connections

- **Backward:** the photon is the gauge field of [5.1](05-01-gauge-invariance-photon.md); its masslessness (no $m^2$ in the propagator) is forced by gauge invariance; the propagator is the inverse of the (gauge-fixed) Maxwell kinetic term from [5.2](05-02-minimal-coupling-qed-lagrangian.md).
- **Forward:** [5.4](05-04-qed-feynman-rules.md) collects the vertex, electron propagator, and photon propagator into the full QED Feynman rules; [5.6](05-06-squaring-amplitude-cross-section.md) uses the polarization sum $\sum\epsilon_\mu\epsilon_\nu^* \to -\eta_{\mu\nu}$ (justified by the Ward identity); [6.7](06-07-taste-non-abelian-gauge-theory.md) meets the subtler non-abelian gauge fixing (Faddeev–Popov ghosts).
- **Sideways (classical EM):** gauge fixing is the quantum echo of choosing a gauge (Lorenz, Coulomb) in classical electromagnetism; the 2 transverse polarizations are the two polarizations of a classical light wave, and the massless propagator gives the $1/r$ Coulomb potential.

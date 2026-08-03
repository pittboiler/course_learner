# Quantum Field Theory · Lesson 5.6: Squaring the amplitude and the cross-section

> ⏱ ~15 min · Module 5: Quantum electrodynamics · Builds on: [5.5 A tree-level QED process: the amplitude](05-05-tree-level-qed-amplitude.md) · Unlocks: [6.1 The path integral in quantum mechanics](06-01-path-integral-quantum-mechanics.md)

## Why this matters

An amplitude $\mathcal{M}$ still isn't a number you measure — you need $|\mathcal{M}|^2$, spin-averaged, converted to a cross-section. For fermions this squaring involves sums over spin states of spinor bilinears, which would be a nightmare to do spinor-component by component. The magic tool is **Casimir's trick**: the spin sums $\sum u\bar u = \not{p} + m$ ([4.3](04-03-solutions-spin-antiparticles.md)) turn the whole mess into **traces of gamma matrices**, which a handful of trace theorems evaluate mechanically. This is *the* computational technique of QED — it's how the electron $g-2$ and every scattering cross-section get computed. This lesson completes the electron–muon calculation (Boss Problem 5) and, with it, the arc from "QED is a theory" to "QED predicts a number."

## The idea

Real experiments usually don't measure spin, so you **average over initial spins** (divide by the number of initial spin states) and **sum over final spins**. The amplitude $\mathcal{M} = \frac{e^2}{q^2}[\bar u_3\gamma^\mu u_1][\bar u_4\gamma_\mu u_2]$ ([5.5](05-05-tree-level-qed-amplitude.md)) has spinor bilinears; squaring gives products like $[\bar u_3\gamma^\mu u_1][\bar u_1\gamma^\nu u_3]$ (the second bracket is the complex conjugate, with $u_3\bar u_3$ appearing).

Here's Casimir's trick (the picture). When you sum over the spins of, say, particle 3, the combination $\sum_{s_3} u_3\bar u_3 = \not{p}_3 + m$ appears — a matrix, not a sum of components. Chaining these, the spin-summed square becomes a **trace** over the spinor indices:

$$\sum_{\text{spins}}[\bar u_3\gamma^\mu u_1][\bar u_1\gamma^\nu u_3] = \text{Tr}\big[(\not{p}_3 + m)\gamma^\mu(\not{p}_1 + m)\gamma^\nu\big].$$

The spinor sum is gone — replaced by a trace of gamma matrices, which is pure algebra. A few **trace theorems** evaluate it: the trace of an odd number of gammas vanishes, $\text{Tr}[\gamma^\mu\gamma^\nu] = 4\eta^{\mu\nu}$, and $\text{Tr}[\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma] = 4(\eta^{\mu\nu}\eta^{\rho\sigma} - \eta^{\mu\rho}\eta^{\nu\sigma} + \eta^{\mu\sigma}\eta^{\nu\rho})$. Apply them and you get a clean expression in terms of momentum dot products (Mandelstam variables $s, t, u$). Divide the result into the cross-section formula from [3.6](03-06-cross-sections-decay-rates.md), and you have $\frac{d\sigma}{d\Omega}$ — a measurable number. For $e^-\mu^-$ scattering at high energy, the spin-averaged square comes out to the elegant $\overline{|\mathcal{M}|^2} = \frac{2e^4(s^2 + u^2)}{t^2}$.

## The formal version

**Spin averaging.** For $2 \to 2$ with spin-$\tfrac12$ initial particles, average over the $2 \times 2 = 4$ initial spin states and sum over final:

$$\overline{|\mathcal{M}|^2} = \frac14\sum_{\text{all spins}}|\mathcal{M}|^2.$$

**Casimir's trick.** Spinor bilinear sums become traces via $\sum_s u^s(p)\bar u^s(p) = \not{p} + m$ (and $\sum_s v^s\bar v^s = \not{p} - m$):

$$\sum_{\text{spins}}\big[\bar u(p')\Gamma u(p)\big]\big[\bar u(p')\Gamma' u(p)\big]^* = \text{Tr}\big[(\not{p}' + m)\Gamma(\not{p} + m)\bar\Gamma'\big],$$

with $\bar\Gamma' = \gamma^0\Gamma'^\dagger\gamma^0$. *In words:* summing over spins collapses the spinor structure into a single trace of gamma matrices.

**Trace theorems** (the toolkit):

$$\text{Tr}[\mathbb{1}] = 4, \quad \text{Tr}[\text{odd \# of }\gamma] = 0, \quad \text{Tr}[\gamma^\mu\gamma^\nu] = 4\eta^{\mu\nu},$$
$$\text{Tr}[\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma] = 4(\eta^{\mu\nu}\eta^{\rho\sigma} - \eta^{\mu\rho}\eta^{\nu\sigma} + \eta^{\mu\sigma}\eta^{\nu\rho}).$$

**Photon polarization sum** (justified by the Ward identity, [5.3](05-03-quantizing-photon-propagator.md)): $\sum_\lambda\epsilon_\mu^\lambda\epsilon_\nu^{\lambda*} \to -\eta_{\mu\nu}$.

**Result for $e^-\mu^- \to e^-\mu^-$** (high-energy / massless limit): with the leptonic tensors $L_e^{\mu\nu} = \text{Tr}[\not{p}_3\gamma^\mu\not{p}_1\gamma^\nu]$ etc.,

$$\overline{|\mathcal{M}|^2} = \frac{2e^4}{t^2}\big(s^2 + u^2\big), \qquad \frac{d\sigma}{d\Omega} = \frac{\overline{|\mathcal{M}|^2}}{64\pi^2 s} = \frac{e^4(s^2 + u^2)}{32\pi^2 s\,t^2}.$$

*In words:* the differential cross-section for electron–muon scattering, from Feynman diagram to measurable — the QED prediction, verified experimentally.

## Picture

![Casimir's trick: a spin sum over the modulus-squared of a spinor bilinear u-bar gamma u is converted, via the completeness relation sum u u-bar equals gamma-dot-p plus m, into a trace of gamma matrices; trace theorems then evaluate it, giving the high-energy result 2 e-to-the-4 times (s squared plus u squared) over t squared, and the differential cross-section over 64 pi squared s](assets/05-06-fig1.svg)

## Worked examples

**Example 1 (Casimir's trick in action — Boss Problem 5).** Square the electron current factor of $\mathcal{M}$ and sum over the electron spins. The electron part of $|\mathcal{M}|^2$ is $[\bar u_3\gamma^\mu u_1][\bar u_3\gamma^\nu u_1]^*$; the complex conjugate is $[\bar u_1\gamma^\nu u_3]$ (using $(\bar u_3\gamma^\nu u_1)^* = \bar u_1\gamma^\nu u_3$). Summing over spins $s_1, s_3$:

$$\sum_{s_1, s_3}[\bar u_3\gamma^\mu u_1][\bar u_1\gamma^\nu u_3] = \text{Tr}\big[(\not{p}_3 + m_e)\gamma^\mu(\not{p}_1 + m_e)\gamma^\nu\big] =: L_e^{\mu\nu}.$$

The two $u_1\bar u_1 = \not{p}_1 + m_e$ and $u_3\bar u_3 = \not{p}_3 + m_e$ closed the spinor indices into a trace. Expand and use the trace theorems: the $m_e^2\,\text{Tr}[\gamma^\mu\gamma^\nu]$ term gives $4m_e^2\eta^{\mu\nu}$, and the $\text{Tr}[\not{p}_3\gamma^\mu\not{p}_1\gamma^\nu] = 4(p_3^\mu p_1^\nu + p_3^\nu p_1^\mu - (p_1\cdot p_3)\eta^{\mu\nu})$ (four-gamma theorem). So

$$L_e^{\mu\nu} = 4\big(p_3^\mu p_1^\nu + p_3^\nu p_1^\mu - (p_1\cdot p_3 - m_e^2)\eta^{\mu\nu}\big).$$

The muon tensor $L_\mu^{\mu\nu}$ is identical with $1\to2$, $3\to4$, $m_e\to m_\mu$. Contracting $\overline{|\mathcal{M}|^2} = \frac14\frac{e^4}{t^2}L_e^{\mu\nu}L^{\mu}_{\mu\nu}$ (photon $\eta_{\mu\nu}$ contractions) and simplifying in the massless limit gives $\frac{2e^4(s^2 + u^2)}{t^2}$. **The spinor nightmare became four traces.**

**Example 2 (from square to cross-section).** With $\overline{|\mathcal{M}|^2} = \frac{2e^4(s^2 + u^2)}{t^2}$ (massless limit), plug into the CM $2\to2$ formula ([3.6](03-06-cross-sections-decay-rates.md), $\frac{d\sigma}{d\Omega} = \frac{\overline{|\mathcal{M}|^2}}{64\pi^2 s}$, elastic so $|\mathbf{p}_f| = |\mathbf{p}_i|$):

$$\frac{d\sigma}{d\Omega} = \frac{1}{64\pi^2 s}\cdot\frac{2e^4(s^2 + u^2)}{t^2} = \frac{e^4(s^2 + u^2)}{32\pi^2 s\,t^2} = \frac{\alpha^2(s^2 + u^2)}{2s\,t^2},$$

using $e^2 = 4\pi\alpha$. This is the **QED prediction for electron–muon scattering** — a real, dimensionally-correct differential cross-section as a function of the scattering kinematics ($s, t, u$), verified in accelerator experiments. The $1/t^2$ is the photon-propagator pole (small-angle Coulomb enhancement); the $s^2 + u^2$ is the spin structure. **From gauge symmetry to a measured number** — this is the whole point of Modules 4–5, delivered.

## Watch out

- **You might sum spins before recognizing the trace structure.** The power of Casimir's trick is to *never* write out individual spinor components — recognize the $\sum u\bar u = \not{p} + m$ pattern and go straight to a trace. Component-by-component summing is hopeless (and error-prone) for anything beyond the simplest process.
- **You might drop mass terms inconsistently.** The full $L^{\mu\nu}$ has $m^2$ terms; the clean $\frac{2e^4(s^2+u^2)}{t^2}$ is the *massless (high-energy) limit* ($s, |t|, |u| \gg m^2$). Keep or drop the masses consistently depending on the energy regime — at low energy the mass terms give the Mott/Rutherford corrections.
- **You might use the wrong photon polarization sum.** Replacing $\sum_\lambda\epsilon_\mu\epsilon_\nu^* \to -\eta_{\mu\nu}$ is valid *only because* the Ward identity ([5.3](05-03-quantizing-photon-propagator.md)) makes the extra $k_\mu k_\nu$ terms drop. For processes with external photons (Compton), you must invoke the Ward identity to justify this; blindly using $-\eta_{\mu\nu}$ without it can mislead.

## One-liner

> Casimir's trick converts spin-summed $|\mathcal{M}|^2$ into gamma-matrix traces via $\sum u\bar u = \not{p} + m$; trace theorems evaluate them, giving $\overline{|\mathcal{M}|^2} = \frac{2e^4(s^2+u^2)}{t^2}$ for $e^-\mu^-$ scattering and, folded with phase space, the measurable $\frac{d\sigma}{d\Omega}$.

## Problems

**P1 (🟢)** Using the trace theorems, evaluate $\text{Tr}[\gamma^\mu\gamma^\nu]$ and $\text{Tr}[\gamma^\mu\gamma^\nu\gamma^\rho]$. Why does the trace of an odd number of gamma matrices vanish? *Hint:* insert $\mathbb{1} = (\gamma^5)^2$ and use $\{\gamma^5, \gamma^\mu\} = 0$ and cyclicity of the trace.

**P2 (🟡)** Compute $\text{Tr}[\not{a}\not{b}]$ for two four-vectors $a, b$ (where $\not{a} = \gamma^\mu a_\mu$). *Hint:* $\text{Tr}[\not{a}\not{b}] = a_\mu b_\nu\text{Tr}[\gamma^\mu\gamma^\nu] = 4a_\mu b_\nu\eta^{\mu\nu} = 4(a\cdot b)$. Then use this to state $\text{Tr}[\not{p}_3\gamma^\mu\not{p}_1\gamma_\mu]$ (a common contraction).

**P3 (🔴, optional)** From $\frac{d\sigma}{d\Omega} = \frac{\alpha^2(s^2 + u^2)}{2s\,t^2}$, take the non-relativistic / small-angle limit and recover the Rutherford $\frac{1}{\sin^4(\theta/2)}$ angular dependence. *Hint:* at small scattering angle, $t = (p_1 - p_3)^2 \approx -|\mathbf{p}|^2\theta^2 \cdot(\ldots)$; more precisely $t = -4|\mathbf{p}|^2\sin^2(\theta/2)$ in the CM frame, so $t^2 \propto \sin^4(\theta/2)$. Why does the $1/t^2$ photon-propagator factor produce the forward (small-angle) divergence characteristic of a long-range force?

<details>
<summary>Solutions</summary>

**P1** $\text{Tr}[\gamma^\mu\gamma^\nu] = 4\eta^{\mu\nu}$ (given). $\text{Tr}[\gamma^\mu\gamma^\nu\gamma^\rho] = 0$ (odd number). **Why odd traces vanish:** insert $(\gamma^5)^2 = \mathbb{1}$: $\text{Tr}[\gamma^{\mu_1}\cdots\gamma^{\mu_n}] = \text{Tr}[\gamma^5\gamma^5\gamma^{\mu_1}\cdots\gamma^{\mu_n}]$. Move the first $\gamma^5$ to the right through all $n$ gammas (each anticommutation gives $-1$, total $(-1)^n$) and use cyclicity to bring it back: $= (-1)^n\text{Tr}[\gamma^5\gamma^{\mu_1}\cdots\gamma^{\mu_n}\gamma^5] = (-1)^n\text{Tr}[\gamma^{\mu_1}\cdots\gamma^{\mu_n}]$. For odd $n$, this gives $\text{Tr} = -\text{Tr}$, so $\text{Tr} = 0$. ✓

**P2** $\text{Tr}[\not{a}\not{b}] = \text{Tr}[\gamma^\mu a_\mu\gamma^\nu b_\nu] = a_\mu b_\nu\text{Tr}[\gamma^\mu\gamma^\nu] = a_\mu b_\nu\cdot 4\eta^{\mu\nu} = 4a_\mu b^\mu = 4(a\cdot b)$. For the contraction $\text{Tr}[\not{p}_3\gamma^\mu\not{p}_1\gamma_\mu]$: use the gamma-contraction identity $\gamma^\mu\not{p}_1\gamma_\mu = -2\not{p}_1$ (in 4D), so $\text{Tr}[\not{p}_3(-2\not{p}_1)] = -2\text{Tr}[\not{p}_3\not{p}_1] = -2\cdot 4(p_1\cdot p_3) = -8(p_1\cdot p_3)$.

**P3** In the CM frame, the momentum transfer squared is $t = -4|\mathbf{p}|^2\sin^2(\theta/2)$ (with $|\mathbf{p}|$ the CM momentum, $\theta$ the scattering angle), so $t^2 = 16|\mathbf{p}|^4\sin^4(\theta/2)$. The cross-section $\frac{d\sigma}{d\Omega} \propto \frac{1}{t^2} \propto \frac{1}{\sin^4(\theta/2)}$ — the **Rutherford angular dependence**. (In the non-relativistic limit $s^2 + u^2 \to \text{const}$, leaving the $1/t^2$ as the dominant angular factor.) The $1/t^2$ comes from the photon propagator squared ($|\frac{1}{q^2}|^2 = \frac{1}{t^2}$): the massless photon gives a long-range ($1/r$) Coulomb force, whose Fourier transform $\frac{1}{|\mathbf{q}|^2}$ diverges at small momentum transfer (forward/small-angle scattering). Physically, the long-range force deflects even distant particles slightly, producing the strong forward peak — the signature of a massless mediator. (A massive mediator would give $\frac{1}{t - m^2}$, cutting off the forward divergence — a short-range force.) ∎

</details>

## Flashback

**From Lesson 5.5 (A tree-level QED process: the amplitude):** Write the amplitude $\mathcal{M}$ for $e^-\mu^- \to e^-\mu^-$ from the QED Feynman rules.

<details>
<summary>Solution</summary>

Single $t$-channel photon exchange: $\mathcal{M} = \frac{e^2}{q^2}[\bar u(p_3)\gamma^\mu u(p_1)][\bar u(p_4)\gamma_\mu u(p_2)]$, with $q = p_1 - p_3$ and $q^2 = t$. The electron and muon currents are joined by the photon propagator $1/q^2$. Squaring and spin-averaging this (via Casimir's trick) gives $\overline{|\mathcal{M}|^2} = \frac{2e^4(s^2+u^2)}{t^2}$. ✓

</details>

## Connections

- **Backward:** Casimir's trick uses the spin sums of [4.3](04-03-solutions-spin-antiparticles.md); the amplitude is from [5.5](05-05-tree-level-qed-amplitude.md); the cross-section formula is [3.6](03-06-cross-sections-decay-rates.md); the photon polarization sum uses the Ward identity of [5.3](05-03-quantizing-photon-propagator.md).
- **Forward:** Module 6 rebuilds QFT via the path integral and confronts loop corrections to these tree amplitudes ([6.4](06-04-loops-uv-divergences.md)); the running coupling ([6.6](06-06-running-couplings-renormalization-group.md)) makes $\alpha$ energy-dependent, refining these predictions.
- **Sideways (experiment):** trace technology computes every QED cross-section measured at colliders (Bhabha, Møller, Compton, $e^+e^- \to \mu^+\mu^-$); the same methods, extended to loops, give the electron $g - 2$ to twelve digits — QED's crowning precision test.

*Module 5 capstone (Boss Problem 5) complete: from the amplitude $\mathcal{M}$ ([5.5](05-05-tree-level-qed-amplitude.md)) to $\overline{|\mathcal{M}|^2} = \frac{2e^4(s^2+u^2)}{t^2}$ via trace technology to the differential cross-section — turning "QED is a theory" into "QED predicts a number."*

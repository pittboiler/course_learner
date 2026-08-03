# Quantum Field Theory · Lesson 5.5: A tree-level QED process: the amplitude

> ⏱ ~15 min · Module 5: Quantum electrodynamics · Builds on: [5.4 QED Feynman rules](05-04-qed-feynman-rules.md) · Unlocks: [5.6 Squaring the amplitude and the cross-section](05-06-squaring-amplitude-cross-section.md)

## Why this matters

Now we run a **real QED process** end to end. Electron–muon scattering $e^-\mu^- \to e^-\mu^-$ is the cleanest example: two distinct charged fermions exchange a single photon, giving exactly one tree diagram — no identical-particle subtleties, no interference to track. This is the first *physical* amplitude of the course, and it's the concrete payoff of everything in Modules 4–5: gauge symmetry gave the vertex, the Dirac theory gave the spinors, and now the Feynman rules assemble them into $\mathcal{M}$ for a process you could measure at an accelerator. It's the first half of Boss Problem 5 (the second half, squaring it, is next lesson) and the template for every QED scattering calculation.

## The idea

In $e^-\mu^- \to e^-\mu^-$, an electron (momentum $p_1$) and a muon (momentum $p_2$) scatter into an electron ($p_3$) and a muon ($p_4$). Since the electron and muon are *different* particles, there's only one way to connect the diagram: the electron and muon each emit/absorb a photon, exchanging a single virtual photon between them (the picture). This is the **$t$-channel** photon-exchange diagram — the relativistic, quantum version of two charges scattering off their electromagnetic field.

Assemble it with the QED rules ([5.4](05-04-qed-feynman-rules.md)):

- The **electron line** contributes a current $\bar u(p_3)\gamma^\mu u(p_1)$ — outgoing electron spinor, vertex, incoming electron spinor.
- The **muon line** contributes $\bar u(p_4)\gamma^\nu u(p_2)$ — same structure with the muon's mass.
- The **exchanged photon** contributes the propagator $\frac{-i\eta_{\mu\nu}}{q^2}$, where $q = p_1 - p_3$ is the momentum transfer (and $q^2 = t$, the Mandelstam variable).

Multiply and contract the photon indices: the two currents are joined by the photon into a single number, the amplitude $\mathcal{M}$. Its structure — (current) $\times \frac{1}{q^2} \times$ (current) — is exactly "two charge distributions interacting through the photon field," and the $\frac{1}{q^2}$ is the momentum-space Coulomb potential. In the non-relativistic limit this amplitude reproduces **Rutherford/Mott scattering** (the $1/q^4$ cross-section of charged-particle scattering), connecting QED back to classical Coulomb physics.

## The formal version

**The process** $e^-(p_1)\,\mu^-(p_2) \to e^-(p_3)\,\mu^-(p_4)$ has a single tree diagram: $t$-channel photon exchange with momentum transfer $q = p_1 - p_3 = p_4 - p_2$. Applying the QED Feynman rules ([5.4](05-04-qed-feynman-rules.md)):

$$i\mathcal{M} = \big[\bar u(p_3)(-ie\gamma^\mu)u(p_1)\big]\,\frac{-i\eta_{\mu\nu}}{q^2}\,\big[\bar u(p_4)(-ie\gamma^\nu)u(p_2)\big].$$

Contracting the Lorentz indices with $\eta_{\mu\nu}$ (lowering $\gamma^\nu \to \gamma_\mu$) and collecting factors of $i$ and $e$:

$$\boxed{\;\mathcal{M} = \frac{e^2}{q^2}\,\big[\bar u(p_3)\gamma^\mu u(p_1)\big]\big[\bar u(p_4)\gamma_\mu u(p_2)\big], \qquad q^2 = t = (p_1 - p_3)^2.\;}$$

*In words:* the amplitude is the electron current times the muon current, joined by the photon propagator $1/q^2$; each bracket is a "transition current" $j^\mu = \bar u\gamma^\mu u$ for that fermion. **Structure:** the two currents are conserved ($q_\mu[\bar u(p_3)\gamma^\mu u(p_1)] = 0$ by the Dirac equation — the Ward identity), which is why the $q_\mu q_\nu$ piece of the photon propagator (in a general gauge) drops and the result is gauge-independent. **Kinematics:** in terms of Mandelstam variables $s = (p_1+p_2)^2$, $t = (p_1-p_3)^2$, $u = (p_1-p_4)^2$, this amplitude has a $1/t$ pole from the massless photon — the long-range Coulomb tail.

## Picture

![The tree-level electron–muon scattering diagram: an electron line from p1 to p3 at top, a muon line from p2 to p4 at bottom, connected by a single exchanged photon carrying momentum q = p1 - p3, with the amplitude i M equal to i e squared over q squared times the electron current times the muon current](assets/05-05-fig1.svg)

## Worked examples

**Example 1 (writing the amplitude — Boss Problem 5, part 1).** Follow the rules step by step. Draw the one diagram: electron $p_1 \to p_3$ (top), muon $p_2 \to p_4$ (bottom), photon between the two vertices. Read the electron line against its arrow: outgoing $\bar u(p_3)$, vertex $-ie\gamma^\mu$, incoming $u(p_1)$ — giving $\bar u(p_3)(-ie\gamma^\mu)u(p_1)$. Read the muon line: $\bar u(p_4)(-ie\gamma^\nu)u(p_2)$. Insert the photon propagator $\frac{-i\eta_{\mu\nu}}{q^2}$ (momentum $q = p_1 - p_3$). Multiply:

$$i\mathcal{M} = \bar u(p_3)(-ie\gamma^\mu)u(p_1)\cdot\frac{-i\eta_{\mu\nu}}{q^2}\cdot\bar u(p_4)(-ie\gamma^\nu)u(p_2).$$

Collect: $(-ie)(-ie)(-i) = (-i)(i^2 e^2)(-1)$... carefully, $(-ie)^2 = -e^2$ and times $(-i) = ie^2$; the $\eta_{\mu\nu}$ contracts $\gamma^\nu$ down to $\gamma_\mu$. So $\mathcal{M} = \frac{e^2}{q^2}[\bar u(p_3)\gamma^\mu u(p_1)][\bar u(p_4)\gamma_\mu u(p_2)]$. **That's the amplitude** — a clean product of two currents divided by the photon's $q^2$. No loop, no ambiguity; the physics of one-photon exchange, exact at tree level.

**Example 2 (the Coulomb/Rutherford limit).** In the non-relativistic limit (slow particles, small momentum transfer), the currents simplify: $\bar u(p_3)\gamma^0 u(p_1) \approx 2m_e\,\xi^\dagger\xi$ (the time component dominates, giving essentially the charge density $2m_e$ times a spin overlap), and similarly for the muon. The momentum transfer is spacelike, $q^2 = t \approx -|\mathbf{q}|^2$, so

$$\mathcal{M} \approx \frac{e^2}{-|\mathbf{q}|^2}(2m_e)(2m_\mu) \;\propto\; \frac{1}{|\mathbf{q}|^2}.$$

The $\frac{1}{|\mathbf{q}|^2}$ is the **Fourier transform of the Coulomb potential** $\frac{e^2}{4\pi r}$ — the amplitude *is* Coulomb scattering. Squaring and folding in phase space ([5.6](05-06-squaring-amplitude-cross-section.md)) gives $\frac{d\sigma}{d\Omega} \propto \frac{1}{|\mathbf{q}|^4} \propto \frac{1}{\sin^4(\theta/2)}$ — the **Rutherford cross-section** (Mott, with spin corrections). So QED's one-photon exchange contains classical Coulomb scattering as its low-energy limit — the quantum field theory reproduces Rutherford's 1911 result and corrects it relativistically.

## Watch out

- **You might include extra diagrams.** For $e^-\mu^-$ (distinct particles), there's exactly **one** tree diagram ($t$-channel photon exchange) — no $s$-channel (the electron and muon can't annihilate into a single photon; that would violate charge/flavor), no exchange diagram (distinct particles). Contrast $e^-e^-$ (two diagrams, [5.4](05-04-qed-feynman-rules.md) P3) and $e^+e^-$ (annihilation adds an $s$-channel).
- **You might mishandle the current ordering or index contraction.** Each fermion line is a separate spinor sandwich ($\bar u \gamma^\mu u$); the photon propagator's $\eta_{\mu\nu}$ contracts the electron's $\mu$ with the muon's $\nu$. Don't mix the electron and muon spinors into one chain — they're on separate lines, joined only through the photon's Lorentz index.
- **You might forget current conservation (the Ward identity).** $q_\mu[\bar u(p_3)\gamma^\mu u(p_1)] = 0$ (follows from the Dirac equation for on-shell spinors) — this is what makes the amplitude gauge-independent and the $q_\mu q_\nu$ propagator term irrelevant. It's also a useful check: if your current isn't conserved, you've erred.

## One-liner

> Electron–muon scattering is one $t$-channel photon-exchange diagram: $\mathcal{M} = \frac{e^2}{q^2}[\bar u(p_3)\gamma^\mu u(p_1)][\bar u(p_4)\gamma_\mu u(p_2)]$ — two conserved currents joined by the photon's $1/q^2$, reproducing Coulomb/Rutherford scattering in the low-energy limit.

## Problems

**P1 (🟢)** How many tree-level diagrams contribute to $e^-\mu^- \to e^-\mu^-$? Identify the exchanged particle and the Mandelstam variable that equals the photon's $q^2$. Why is there no $s$-channel diagram?

**P2 (🟡)** For $e^+e^- \to \mu^+\mu^-$ (electron–positron annihilation to a muon pair), there is one tree diagram, but it's **$s$-channel** (annihilation into a virtual photon that produces the muon pair). Write the amplitude, and identify why $q^2 = s$ (timelike) here, unlike the $t$-channel ($q^2 = t$, spacelike) of $e^-\mu^-$ scattering. *Hint:* the electron and positron annihilate into the photon; the photon momentum is $q = p_1 + p_2$.

**P3 (🔴, optional)** Show that the transition current $j^\mu = \bar u(p_3)\gamma^\mu u(p_1)$ is conserved, $q_\mu j^\mu = 0$ with $q = p_1 - p_3$. *Hint:* $q_\mu\bar u(p_3)\gamma^\mu u(p_1) = \bar u(p_3)(\not{p}_1 - \not{p}_3)u(p_1)$; use the Dirac equations $\not{p}_1 u(p_1) = m u(p_1)$ and $\bar u(p_3)\not{p}_3 = m\bar u(p_3)$. Why is this the Ward identity, and what does it guarantee?

<details>
<summary>Solutions</summary>

**P1** Exactly **one** tree diagram: $t$-channel single-photon exchange, with the photon carrying $q^2 = t = (p_1 - p_3)^2$. There's no $s$-channel because an $s$-channel would require the electron and muon to *annihilate* into a single virtual photon — but the electron and muon are distinct particles (different flavors) and can't annihilate each other (they'd have to become a state of zero electron number and zero muon number, which one photon isn't). The electron and muon merely scatter by exchanging a photon; each keeps its identity.

**P2** For $e^+(p_2)e^-(p_1) \to \mu^+(p_4)\mu^-(p_3)$: the electron and positron annihilate at one vertex into a virtual photon of momentum $q = p_1 + p_2$, which then creates the muon pair at the other vertex. Amplitude: $i\mathcal{M} = [\bar v(p_2)(-ie\gamma^\mu)u(p_1)]\frac{-i\eta_{\mu\nu}}{q^2}[\bar u(p_3)(-ie\gamma^\nu)v(p_4)]$, i.e. $\mathcal{M} = \frac{e^2}{s}[\bar v(p_2)\gamma^\mu u(p_1)][\bar u(p_3)\gamma_\mu v(p_4)]$. Here $q = p_1 + p_2$ is the *total* incoming momentum, so $q^2 = (p_1+p_2)^2 = s$ (the squared CM energy, timelike, $s > 0$) — unlike the $t$-channel where $q = p_1 - p_3$ is a momentum *transfer* (spacelike, $t < 0$). The $s$-channel photon can go on-shell only if $s = 0$ (impossible for massive final states), but near resonances (like the $Z$) the analogous $s$-channel diagram produces the famous resonance peak.

**P3** $q_\mu j^\mu = q_\mu\bar u(p_3)\gamma^\mu u(p_1) = \bar u(p_3)\not{q}u(p_1) = \bar u(p_3)(\not{p}_1 - \not{p}_3)u(p_1)$. Using the Dirac equation for the incoming spinor $\not{p}_1 u(p_1) = m\,u(p_1)$ and for the outgoing $\bar u(p_3)\not{p}_3 = m\,\bar u(p_3)$: $\bar u(p_3)(\not{p}_1 - \not{p}_3)u(p_1) = \bar u(p_3)(m - m)u(p_1) = 0$. So the current is conserved: $q_\mu j^\mu = 0$. This is the **Ward identity** (current conservation at the amplitude level), a consequence of gauge invariance / the $U(1)$ symmetry. It guarantees: (i) the amplitude is gauge-independent (the $q_\mu q_\nu$ part of a general-gauge photon propagator contracts to zero), and (ii) unphysical photon polarizations decouple — the deep consistency of QED. ∎

</details>

## Flashback

**From Lesson 5.4 (QED Feynman rules):** State the external-line factors for an incoming electron, an outgoing electron, and an incoming photon.

<details>
<summary>Solution</summary>

Incoming electron: $u^s(p)$. Outgoing electron: $\bar u^s(p)$. Incoming photon: $\epsilon_\mu^\lambda(k)$. (Outgoing photon would be $\epsilon_\mu^{\lambda*}(k)$, incoming positron $\bar v$, outgoing positron $v$.) These are the factors attached to the external legs when assembling the amplitude. ✓

</details>

## Connections

- **Backward:** the amplitude is built from the QED rules of [5.4](05-04-qed-feynman-rules.md) — the vertex ([5.2](05-02-minimal-coupling-qed-lagrangian.md)), photon propagator ([5.3](05-03-quantizing-photon-propagator.md)), and Dirac spinors ([4.3](04-03-solutions-spin-antiparticles.md)); the currents are the Noether currents of [1.3](01-03-symmetries-noether-for-fields.md).
- **Forward:** [5.6](05-06-squaring-amplitude-cross-section.md) computes $\overline{|\mathcal{M}|^2}$ with spin sums and trace technology, then the differential cross-section — completing Boss Problem 5; the same skeleton handles Compton, Bhabha, and Møller scattering.
- **Sideways (nuclear/atomic physics):** the Coulomb/Rutherford limit (Example 2) is how Rutherford discovered the nucleus and how electron-scattering experiments (form factors) map the charge distributions of nuclei and protons — this one amplitude underlies a century of scattering experiments.

*Module 5 capstone (Boss Problem 5), part 1: writing $\mathcal{M}$ for $e^-\mu^- \to e^-\mu^-$ from the Feynman rules — Example 1 above is exactly this; the spin-averaged square and cross-section follow in [5.6](05-06-squaring-amplitude-cross-section.md).*

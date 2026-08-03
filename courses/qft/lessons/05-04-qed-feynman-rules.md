# Quantum Field Theory · Lesson 5.4: QED Feynman rules

> ⏱ ~15 min · Module 5: Quantum electrodynamics · Builds on: [5.3 Quantizing the photon; the photon propagator](05-03-quantizing-photon-propagator.md) · Unlocks: [5.5 A tree-level QED process: the amplitude](05-05-tree-level-qed-amplitude.md)

## Why this matters

This lesson assembles the complete **QED toolkit** — every factor you need to compute any electromagnetic process, gathered into one dictionary. QED is the most accurately verified theory in all of science (the electron's anomalous magnetic moment matches experiment to twelve significant figures), and these rules are how that precision is achieved. With the vertex $-ie\gamma^\mu$, the electron and photon propagators, and the external-line spinors and polarization vectors, you can write down the amplitude for electron–electron scattering, Compton scattering, pair annihilation — anything. The next two lessons run a real process end to end; this lesson is the reference card that makes it possible.

## The idea

The QED Feynman rules combine everything from Modules 4–5 into a single recipe (the picture). To compute $i\mathcal{M}$ for a process: draw all diagrams, and assign each element a factor:

- **Vertex** ($-ie\gamma^\mu$): the one QED interaction — an electron line and a photon meet ([5.2](05-02-minimal-coupling-qed-lagrangian.md)).
- **Internal electron line** ($\frac{i(\not{p}+m)}{p^2-m^2+i\varepsilon}$): the Dirac propagator ([4.5](04-05-dirac-propagator.md)).
- **Internal photon line** ($\frac{-i\eta_{\mu\nu}}{k^2+i\varepsilon}$): the photon propagator in Feynman gauge ([5.3](05-03-quantizing-photon-propagator.md)).
- **External lines**: real particles get spinors or polarization vectors — incoming electron $u(p)$, outgoing electron $\bar u(p)$, incoming positron $\bar v(p)$, outgoing positron $v(p)$, incoming photon $\epsilon_\mu(k)$, outgoing photon $\epsilon_\mu^*(k)$.
- **Bookkeeping**: momentum conservation at each vertex, $\int\frac{d^4\ell}{(2\pi)^4}$ per loop, $(-1)$ per closed fermion loop, and read fermion lines *against the arrow* (so spinor factors chain as $\bar u \cdots u$).

The one piece of care unique to fermions: **order matters**. Spinors and gamma matrices don't commute, so you write each fermion line as a chain, starting from the outgoing $\bar u$ (or $\bar v$), reading *backwards* along the fermion arrow through the vertices and propagators, ending at the incoming $u$ (or $v$). The result is a number (the spinor indices all contract). Photon indices from vertices contract with propagators or external polarizations. Assemble, and you have $i\mathcal{M}$.

## The formal version

**QED Feynman rules** (momentum space, Feynman gauge). For each diagram contributing to a process, multiply:

| Element | Factor |
|---|---|
| Vertex | $-ie\gamma^\mu$ |
| Internal electron (momentum $p$) | $\dfrac{i(\not{p} + m)}{p^2 - m^2 + i\varepsilon}$ |
| Internal photon (momentum $k$) | $\dfrac{-i\eta_{\mu\nu}}{k^2 + i\varepsilon}$ |
| Incoming electron | $u^s(p)$ |
| Outgoing electron | $\bar u^s(p)$ |
| Incoming positron | $\bar v^s(p)$ |
| Outgoing positron | $v^s(p)$ |
| Incoming photon | $\epsilon_\mu^\lambda(k)$ |
| Outgoing photon | $\epsilon_\mu^{\lambda*}(k)$ |

plus: **momentum conservation** $(2\pi)^4\delta^4(\sum p)$ at each vertex; **loop integral** $\int\frac{d^4\ell}{(2\pi)^4}$ per loop; a factor $(-1)$ per **closed fermion loop**; and a relative $(-1)$ between diagrams differing by exchange of identical external fermions. *In words:* one vertex, two propagators, external spinors/polarizations, and the fermionic sign rules.

**Reading fermion lines.** Along each fermion line, write factors *right-to-left against the arrow*: start with the outgoing $\bar u$ (leftmost), then each vertex $-ie\gamma^\mu$ and propagator in order, ending with the incoming $u$ (rightmost). *In words:* spinor factors chain as $\bar u\,(\text{vertex})\,(\text{propagator})\cdots(\text{vertex})\,u$ — a matrix sandwich yielding a number. Photon (Lorentz) indices from the vertices contract with photon propagators or external polarization vectors.

## Picture

![The QED Feynman rules dictionary: the vertex minus i e gamma-mu, the electron propagator i(gamma-dot-p+m)/(p^2-m^2), the photon propagator minus i eta over k^2, and external-line factors — u and u-bar for electrons, v-bar and v for positrons, epsilon and epsilon-star for photons — plus loop integrals, a minus sign per fermion loop, and reading fermion lines against the arrow](assets/05-04-fig1.svg)

## Worked examples

**Example 1 (setting up an amplitude — reading the fermion line).** Consider a single fermion line: an incoming electron $u(p)$ absorbs a photon at a vertex, propagates, emits a photon at a second vertex, and exits as $\bar u(p')$. Reading *against the arrow* (right to left):

$$\bar u(p')\,(-ie\gamma^\nu)\,\frac{i(\not{q} + m)}{q^2 - m^2 + i\varepsilon}\,(-ie\gamma^\mu)\,u(p),$$

where $q$ is the internal electron momentum and $\mu, \nu$ are the two photon indices (to be contracted with external polarizations or photon propagators). This is a $1\times4 \times 4\times4 \times 4\times4 \times 4\times1$ matrix chain = a number. The ordering — outgoing $\bar u$ on the left, incoming $u$ on the right, vertices and propagators sandwiched in between — is dictated by matrix multiplication of the spinor indices. This is the skeleton of Compton scattering ($e\gamma \to e\gamma$).

**Example 2 (why the fermion-line ordering and signs matter).** Suppose a process has two diagrams differing by the exchange of two identical outgoing electrons (as in Møller scattering $e^-e^- \to e^-e^-$). The Feynman rules assign a **relative minus sign** between them: $\mathcal{M} = \mathcal{M}_1 - \mathcal{M}_2$. This is Fermi statistics — the amplitude must be antisymmetric under exchange of identical fermions ([4.4](04-04-quantizing-dirac-anticommutators.md)). Getting this sign wrong changes the interference and hence the cross-section (it's the difference between constructive and destructive interference in the identical-particle channels). Likewise, a diagram with a *closed* fermion loop (e.g. vacuum polarization, an electron loop correcting the photon propagator) carries an overall $(-1)$ and a trace $\text{Tr}[\cdots]$ over the loop's spinor indices. These signs are the diagrammatic fingerprint of anticommutation, and QED's precision agreement with experiment is a stringent test that they're exactly right.

## Watch out

- **You might chain spinor factors in the wrong order.** Fermion factors must be written *against the arrow*, outgoing $\bar u$ first (left), incoming $u$ last (right), with matrices sandwiched. Writing them in reading order (left to right along the arrow) gives the transpose/wrong contraction — the spinor indices won't close.
- **You might drop the fermion-loop or exchange minus signs.** $(-1)$ per closed fermion loop and relative $(-1)$ for exchanged identical fermions are mandatory (Fermi statistics). Omitting them is a classic error that spoils gauge invariance and gives wrong cross-sections.
- **You might use the wrong external factor for antiparticles.** Incoming electron is $u$, but incoming positron is $\bar v$; outgoing electron is $\bar u$, outgoing positron is $v$. The positron assignments are "backwards" because the antiparticle travels against the fermion arrow. Mixing these up flips antiparticle amplitudes.

## One-liner

> QED's rules: one vertex $-ie\gamma^\mu$, the electron propagator $\frac{i(\not{p}+m)}{p^2-m^2}$, the photon propagator $\frac{-i\eta_{\mu\nu}}{k^2}$, external spinors ($u, \bar u, v, \bar v$) and polarizations ($\epsilon, \epsilon^*$), with loop integrals, a $(-1)$ per fermion loop, and fermion lines read against the arrow.

## Problems

**P1 (🟢)** Write down the external-line factor for each: (a) an incoming electron, (b) an outgoing electron, (c) an incoming positron, (d) an outgoing photon. Why do the positron factors seem "reversed" relative to the electron?

**P2 (🟡)** For the tree-level process $e^-\mu^- \to e^-\mu^-$ (electron–muon scattering, distinct particles), there is a single diagram: the electron and muon exchange one photon. Write down the amplitude $i\mathcal{M}$ using the QED rules (two fermion lines, one internal photon), before contracting. *Hint:* each fermion line gives a $\bar u\gamma^\mu u$ current; the photon propagator connects their Lorentz indices.

**P3 (🔴, optional)** Explain why the process $e^-e^- \to e^-e^-$ (Møller scattering) has *two* tree diagrams with a relative minus sign, while $e^-\mu^- \to e^-\mu^-$ has only one. *Hint:* which outgoing particles are identical? Relate the minus sign to the antisymmetry of the fermionic amplitude.

<details>
<summary>Solutions</summary>

**P1** (a) Incoming electron: $u^s(p)$. (b) Outgoing electron: $\bar u^s(p)$. (c) Incoming positron: $\bar v^s(p)$. (d) Outgoing photon: $\epsilon_\mu^{\lambda*}(k)$. The positron factors are "reversed" (incoming gets $\bar v$, outgoing gets $v$ — opposite to the electron's $u/\bar u$) because a positron is an antiparticle traveling *against* the fermion-number arrow: in the diagram, the fermion line for an incoming positron points *outward*, so it's read as if it were an "outgoing" fermion, picking up $\bar v$. The arrow direction (fermion number, not momentum) dictates the assignment.

**P2** Single-photon exchange. Electron line (momenta $p_1 \to p_3$): $\bar u(p_3)(-ie\gamma^\mu)u(p_1)$. Muon line (momenta $p_2 \to p_4$): $\bar u(p_4)(-ie\gamma^\nu)u(p_2)$ (with muon mass $M$). Internal photon (momentum $q = p_1 - p_3$): $\frac{-i\eta_{\mu\nu}}{q^2}$. Assembling:

$$i\mathcal{M} = \big[\bar u(p_3)(-ie\gamma^\mu)u(p_1)\big]\,\frac{-i\eta_{\mu\nu}}{q^2}\,\big[\bar u(p_4)(-ie\gamma^\nu)u(p_2)\big] = \frac{ie^2}{q^2}\,\big[\bar u(p_3)\gamma^\mu u(p_1)\big]\big[\bar u(p_4)\gamma_\mu u(p_2)\big].$$

The two electron/muon currents are joined by the photon propagator (the $\eta_{\mu\nu}$ contracts the two $\gamma$'s). This is the amplitude to be squared in [5.5](05-05-tree-level-qed-amplitude.md)–[5.6](05-06-squaring-amplitude-cross-section.md).

**P3** In $e^-\mu^- \to e^-\mu^-$, the outgoing electron and muon are *distinct* particles, so there's only one way to assign the final state to the diagram — a single $t$-channel photon-exchange diagram. In $e^-e^- \to e^-e^-$, the two outgoing electrons are **identical**, so there are *two* ways to connect the final electrons to the initial ones: the "direct" ($t$-channel) and "exchanged" ($u$-channel) diagrams. Because the amplitude must be **antisymmetric** under exchange of the identical outgoing fermions (Fermi statistics, [4.4](04-04-quantizing-dirac-anticommutators.md)), the two diagrams enter with a **relative minus sign**: $\mathcal{M} = \mathcal{M}_t - \mathcal{M}_u$. This antisymmetry produces the characteristic interference of identical-fermion scattering (and, e.g., the exchange hole in electron gases). Distinct particles ($e, \mu$) have no such exchange diagram or sign. ∎

</details>

## Flashback

**From Lesson 5.3 (Quantizing the photon; the photon propagator):** Write the photon propagator in Feynman gauge and state how many physical polarizations the photon has.

<details>
<summary>Solution</summary>

Feynman-gauge photon propagator: $\widetilde D_{\mu\nu}(k) = \dfrac{-i\eta_{\mu\nu}}{k^2 + i\varepsilon}$ (massless pole at $k^2 = 0$). The photon has **2 physical polarizations** (the transverse ones, $\perp$ to its momentum) — its two helicity states $\pm1$ — out of the 4 components of $A_\mu$, with the other 2 removed by gauge freedom and the constraint. ✓

</details>

## Connections

- **Backward:** the rules collect the vertex of [5.2](05-02-minimal-coupling-qed-lagrangian.md), the electron propagator of [4.5](04-05-dirac-propagator.md), the photon propagator of [5.3](05-03-quantizing-photon-propagator.md), and the spinors of [4.3](04-03-solutions-spin-antiparticles.md); the fermion signs come from [4.4](04-04-quantizing-dirac-anticommutators.md); the structure mirrors the $\phi^4$ rules of [3.5](03-05-feynman-rules-amplitude.md).
- **Forward:** [5.5](05-05-tree-level-qed-amplitude.md) writes $\mathcal{M}$ for a real process from these rules; [5.6](05-06-squaring-amplitude-cross-section.md) squares it with trace technology; [6.4](06-04-loops-uv-divergences.md) applies the rules at one loop (where the fermion-loop $(-1)$ and trace matter).
- **Sideways (precision tests):** these exact rules underlie the twelve-digit agreement of the electron $g-2$ and the Lamb shift — QED's status as the most precisely tested theory rests on getting every factor, sign, and propagator here correct.

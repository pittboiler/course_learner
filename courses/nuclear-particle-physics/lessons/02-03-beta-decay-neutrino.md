# Nuclear & Particle Physics · Lesson 2.3: Beta decay & the neutrino

> ⏱ ~15 min · Module 2: Radioactivity & nuclear reactions · Builds on: [2.2 Alpha decay & tunneling](02-02-alpha-decay-tunneling.md) · Unlocks: [2.4 Gamma decay & the excited nucleus](02-04-gamma-decay.md)

## Why this matters

Alpha decay ([2.2](02-02-alpha-decay-tunneling.md)) let a nucleus shed mass; it could not change a neutron into a proton. But most unstable nuclei are unstable precisely because their neutron-to-proton ratio is off — they sit on the wrong side of the valley of stability ([1.4](01-04-stability-valley.md)). **Beta decay** is how a nucleus fixes that: it converts one nucleon into the other, sliding along an isobar toward the stable floor. It is also the birthplace of two of the deepest ideas in physics. The energy spectrum of the emitted electrons refused to make sense in 1930, and rescuing energy conservation forced Pauli to invent a brand-new particle — the **neutrino** — twenty-six years before anyone saw one. And the force behind it, the **weak interaction**, is the only one that changes a particle's identity. This lesson is your first contact with both.

## The idea

A neutron left alone lives about 15 minutes and then falls apart: $n \to p + e^- + \bar{\nu}_e$. Inside a neutron-rich nucleus the same conversion can happen, turning $Z \to Z+1$ while $A$ stays fixed. That's **beta-minus** decay, and the ejected electron is the "beta ray." A proton-rich nucleus does the mirror move, $p \to n + e^+ + \nu_e$, emitting a positron ($\beta^+$). Which way a given nucleus goes is set entirely by which wall of the mass parabola ([1.4](01-04-stability-valley.md)) it is climbing down — beta decay always runs *downhill in mass* toward the stable isobar.

Here is the puzzle that made beta decay famous. If a decay is genuinely two-body — parent goes to daughter plus one electron — then energy and momentum conservation *fix* the electron's energy to a single sharp value, exactly as the alpha comes out at one energy in [2.2](02-02-alpha-decay-tunneling.md). But beta electrons don't do that. They come out with **every** energy from zero up to a maximum, a smooth continuous hump. Energy seemed to vanish. Rather than abandon energy conservation, Pauli proposed a third, invisible particle sharing the released energy with the electron in continuously variable proportions. Sometimes the electron takes almost everything; sometimes it takes almost nothing and the invisible partner carries the rest. Average the shares and you get a spectrum, not a spike. That partner is the neutrino.

## The formal version

**The three beta processes.** Each conserves charge, and each conserves lepton number once you assign the neutrino its bookkeeping (the electron and neutrino count $+1$, their antiparticles $-1$):

$$\beta^-:\quad {}^{A}_{Z}\mathrm{X} \to {}^{\;A}_{Z+1}\mathrm{Y} + e^- + \bar{\nu}_e \qquad (n \to p + e^- + \bar{\nu}_e)$$
$$\beta^+:\quad {}^{A}_{Z}\mathrm{X} \to {}^{\;A}_{Z-1}\mathrm{Y} + e^+ + \nu_e \qquad (p \to n + e^+ + \nu_e)$$
$$\text{EC}:\quad {}^{A}_{Z}\mathrm{X} + e^- \to {}^{\;A}_{Z-1}\mathrm{Y} + \nu_e \qquad (p + e^- \to n + \nu_e)$$

*In words: $\beta^-$ raises the atomic number by one, $\beta^+$ lowers it, and electron capture (EC) achieves the same $Z\to Z-1$ as $\beta^+$ by swallowing an atomic electron instead of emitting a positron.* All three are driven by the **weak interaction** — the force that turns one flavor of quark into another (a $d$ quark into a $u$ inside the neutron). It is feeble and slow compared to the electromagnetic and strong forces, which is why beta half-lives range from seconds to billions of years; the full account waits for [5.1](05-01-weak-interaction.md).

**Q-values from atomic masses.** The energy released is $Q = (\text{initial mass} - \text{final mass})c^2$. The trick is that tabulated masses are **atomic** masses $M$ (nucleus + $Z$ electrons), so the electron masses must be tracked. Doing the bookkeeping (derived in the Watch-out):

$$Q_{\beta^-} = \big[M(A,Z) - M(A,Z+1)\big]c^2$$
$$Q_{\beta^+} = \big[M(A,Z) - M(A,Z-1) - 2m_e\big]c^2$$
$$Q_{\text{EC}} = \big[M(A,Z) - M(A,Z-1)\big]c^2$$

*In words: for $\beta^-$ the atomic electron counts cancel and you just difference the atomic masses; for $\beta^+$ you pay an extra $2m_ec^2 = 1.022\ \text{MeV}$, so $\beta^+$ is energetically forbidden unless the atomic mass difference exceeds $1.022\ \text{MeV}/c^2$.* When it doesn't — when $0 < \Delta M c^2 < 1.022\ \text{MeV}$ — **electron capture is the only option**, since $Q_{\text{EC}}$ needs merely $M(A,Z) > M(A,Z-1)$. Proton-rich nuclei with modest energy release therefore decay purely by EC; with larger release, $\beta^+$ and EC compete. (Here $m_e$ is the electron mass, $m_ec^2 = 0.511\ \text{MeV}$; the atomic-electron binding energies are a few eV and are neglected.)

**The endpoint is Q.** The released energy $Q$ is shared among the electron, the (nearly massless) neutrino, and the recoiling daughter. The daughter is thousands of times heavier than the electron, so its recoil kinetic energy is negligible (Problem 3), and essentially all of $Q$ goes to the electron–neutrino pair:

$$T_e + E_\nu \approx Q.$$

*In words: the electron's kinetic energy is largest exactly when the neutrino carries away nothing.* That maximum, the **endpoint** of the spectrum, therefore equals $Q$ — which is why measuring the endpoint measures the decay's Q-value directly.

**Fermi theory and the Kurie plot (sketch).** Fermi (1934) modeled the decay as a **four-fermion point interaction**: the neutron, proton, electron, and neutrino all touch at a single spacetime point with a coupling strength $G_F$. The decay rate is then the coupling squared times the density of available final states (**phase space**). Counting the ways to split momentum between electron and neutrino gives the spectrum shape

$$N(T_e)\ \propto\ p_e E_e\,(Q - T_e)^2\,F(Z,E_e),$$

where $p_e,E_e$ are the electron momentum and total energy and $F(Z,E_e)$ is the Coulomb "Fermi function" correcting for the daughter's pull on the outgoing electron. *In words: the number of electrons at energy $T_e$ is set purely by how much room phase space leaves for the neutrino, $(Q-T_e)^2$, which vanishes at the endpoint.* Rearranged, the spectrum **linearizes**:

$$\sqrt{\frac{N(T_e)}{p_e E_e F(Z,E_e)}}\ \propto\ (Q - T_e).$$

Plotting the left side against $T_e$ — the **Kurie plot** — gives a straight line hitting zero at $T_e = Q$, the cleanest way to read off the endpoint. And it is the premier test of neutrino mass: a nonzero $m_\nu$ replaces $(Q-T_e)$ with a factor that **bends the line down** in the last few eV before the endpoint. Straining to see that tiny bend is exactly what modern experiments like **KATRIN** do to bound $m_\nu$ (currently below about $0.8\ \text{eV}/c^2$).

## Picture

![Continuous beta energy spectrum: number of electrons versus kinetic energy, a smooth blue hump rising from zero and falling to the endpoint Q, with the missing energy carried by the antineutrino shaded, contrasted against the single coral line a two-body decay would produce at Q](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (Q-value and endpoint from atomic masses).** Find $Q$ for ${}^{14}_{6}\mathrm{C} \to {}^{14}_{7}\mathrm{N} + e^- + \bar\nu_e$ and the maximum electron kinetic energy. Atomic masses: $M({}^{14}\mathrm{C}) = 14.003242\ \text{u}$, $M({}^{14}\mathrm{N}) = 14.003074\ \text{u}$, with $1\ \text{u} = 931.494\ \text{MeV}/c^2$.

This is $\beta^-$, so the electron masses cancel and we simply difference the atomic masses:

$$Q_{\beta^-} = \big[M({}^{14}\mathrm{C}) - M({}^{14}\mathrm{N})\big]c^2 = (14.003242 - 14.003074)(931.494)\ \text{MeV}$$
$$= (0.000168)(931.494)\ \text{MeV} = 0.156\ \text{MeV} = 156\ \text{keV}.$$

The endpoint of the electron spectrum equals $Q$, so the fastest electrons come out with $T_{e,\max} = 156\ \text{keV}$. (This is the ${}^{14}\mathrm{C}$ used in radiocarbon dating; its measured endpoint is indeed 156 keV.)

**Example 2 (which mode? proton-rich nucleus).** ${}^{11}_{6}\mathrm{C}$ sits one proton to the rich side of stable ${}^{11}_{5}\mathrm{B}$. Atomic masses: $M({}^{11}\mathrm{C}) = 11.011434\ \text{u}$, $M({}^{11}\mathrm{B}) = 11.009305\ \text{u}$. Which mode(s) are open?

Being proton-rich, it must lower $Z$: candidates are $\beta^+$ and EC. The atomic mass difference is

$$\Delta M c^2 = (11.011434 - 11.009305)(931.494) = (0.002129)(931.494) = 1.983\ \text{MeV}.$$

EC needs only $\Delta M c^2 > 0$: open, with $Q_{\text{EC}} = 1.983\ \text{MeV}$. For $\beta^+$ subtract the $2m_ec^2 = 1.022\ \text{MeV}$ penalty:

$$Q_{\beta^+} = 1.983 - 1.022 = 0.961\ \text{MeV} > 0,$$

so $\beta^+$ is also open, with a positron endpoint of 0.961 MeV. Both channels operate; because the release comfortably clears 1.022 MeV, $\beta^+$ dominates. (Had $\Delta Mc^2$ been, say, 0.8 MeV, only EC would have been possible.)

## Watch out

- **You might think you add an electron mass for $\beta^-$.** You don't — the emitted electron is *already inside* the daughter's atomic mass count. Parent ${}^{A}_{Z}\mathrm{X}$ has $Z$ atomic electrons; daughter ${}^{A}_{Z+1}\mathrm{Y}$ has $Z+1$; the extra one in the daughter's tally is precisely the beta electron, so $Q_{\beta^-} = [M_{\text{parent}} - M_{\text{daughter}}]c^2$ with nothing added. For $\beta^+$ the daughter has *one fewer* electron yet you also *emit* a positron, and the two missing electron-mass units combine into the $-2m_e c^2$ penalty.
- **You might think a continuous spectrum means energy isn't conserved.** That was the 1930 fear. Energy *is* conserved; it is shared with an unseen neutrino. The continuity is the signature of a three-body final state, not a violation.
- **You might expect the endpoint to sag below $Q$ from daughter recoil.** The recoil is real but utterly negligible — a heavy daughter carries momentum but almost no kinetic energy ($T \sim p^2/2M$ with huge $M$; see Problem 3). To eV precision the endpoint *is* $Q$, which is what makes it a mass measurement.
- **Neutrino vs antineutrino.** $\beta^-$ emits an *anti*neutrino $\bar\nu_e$; $\beta^+$ and EC emit a neutrino $\nu_e$. The distinction is lepton-number bookkeeping, and it is real — it took until the 1956 Reines–Cowan experiment to detect (anti)neutrinos at all, and their tiny mass and mixing only emerged decades later ([5.4](05-04-neutrinos-oscillations.md)).

## One-liner

> Beta decay converts a nucleon via the weak force and shares its energy $Q$ with a neutrino, so the electron emerges anywhere from 0 up to an endpoint equal to $Q$ — the continuous spectrum that forced the neutrino into existence.

## Problems

**P1 (🟢)** ${}^{32}_{15}\mathrm{P}$ beta-decays to ${}^{32}_{16}\mathrm{S}$. Given atomic masses $M({}^{32}\mathrm{P}) = 31.973907\ \text{u}$ and $M({}^{32}\mathrm{S}) = 31.972071\ \text{u}$ ($1\ \text{u} = 931.494\ \text{MeV}/c^2$), identify the mode, compute $Q$, and state the maximum kinetic energy of the emitted electron.

**P2 (🟡)** A nucleus is found to lie **neutron-rich** of the stable isobar at its mass number. (a) Which beta mode does it undergo, and does $Z$ go up or down? (b) A different nucleus lies proton-rich, and its atomic mass exceeds the daughter's by $0.70\ \text{MeV}/c^2$. Can it decay by $\beta^+$? By electron capture? Explain using the $2m_ec^2$ threshold.

**P3 (🔴, optional)** Show that the daughter recoil is why the endpoint equals $Q$. For the ${}^{14}\mathrm{C}$ decay of Example 1, take the electron at its endpoint ($T_e = 0.156\ \text{MeV}$, so the neutrino energy is $\approx 0$) and estimate the recoil kinetic energy of the ${}^{14}\mathrm{N}$ daughter. Use $p_e c = \sqrt{T_e^2 + 2T_e m_e c^2}$ with $m_e c^2 = 0.511\ \text{MeV}$, and $M_{\mathrm{N}}c^2 \approx 14 \times 931.5\ \text{MeV}$. Compare it to $Q$.

<details>
<summary>Solutions</summary>

**P1** ${}^{32}\mathrm{P}$ ($Z=15$) goes to ${}^{32}\mathrm{S}$ ($Z=16$): $Z$ rises by one, so this is $\beta^-$, ${}^{32}_{15}\mathrm{P} \to {}^{32}_{16}\mathrm{S} + e^- + \bar\nu_e$. For $\beta^-$ the electron masses cancel:

$$Q_{\beta^-} = \big[M({}^{32}\mathrm{P}) - M({}^{32}\mathrm{S})\big]c^2 = (31.973907 - 31.972071)(931.494)\ \text{MeV}$$
$$= (0.001836)(931.494)\ \text{MeV} = 1.71\ \text{MeV}.$$

The endpoint equals $Q$, so $T_{e,\max} = 1.71\ \text{MeV}$.

*Check.* Neutron-rich phosphorus should indeed go $\beta^-$ toward sulfur, and the released mass fraction $\sim 0.0018/32 \approx 6\times10^{-5}$ times $\sim 30{,}000\ \text{MeV}$ gives $\sim 2\ \text{MeV}$ — right order. (This is the real ${}^{32}\mathrm{P}$ used as a biology tracer; measured endpoint 1.71 MeV. ✓)

**P2** (a) A neutron-rich nucleus has too many neutrons, so it converts a neutron to a proton: $\beta^-$ decay, and $Z$ goes **up** by one (toward the stable isobar with more protons). (b) For $\beta^+$ the atomic mass difference must exceed $2m_ec^2 = 1.022\ \text{MeV}/c^2$. Here $\Delta M c^2 = 0.70\ \text{MeV} < 1.022\ \text{MeV}$, so $Q_{\beta^+} = 0.70 - 1.022 < 0$: **$\beta^+$ is forbidden.** But EC needs only $\Delta M c^2 > 0$, giving $Q_{\text{EC}} = 0.70\ \text{MeV} > 0$: **electron capture is allowed** and is the sole decay path. This is exactly the window $0 < \Delta Mc^2 < 1.022\ \text{MeV}$ where EC is the only option.

*Check.* The two proton-rich modes achieve the same $Z\to Z-1$, but $\beta^+$ must additionally materialize a positron *and* is bookkept against a lost atomic electron — a 1.022 MeV surcharge EC never pays. So whenever the budget is tight, EC wins. ✓

**P3** Momentum conservation at the endpoint (neutrino energy $\approx 0$): the daughter recoils with momentum equal and opposite to the electron's, $p_{\mathrm{N}} = p_e$. First the electron momentum:

$$p_e c = \sqrt{T_e^2 + 2T_e m_e c^2} = \sqrt{(0.156)^2 + 2(0.156)(0.511)}\ \text{MeV} = \sqrt{0.0243 + 0.1595} = 0.429\ \text{MeV}.$$

The heavy daughter is nonrelativistic, so its recoil kinetic energy is

$$T_{\mathrm{N}} = \frac{p_{\mathrm{N}}^2}{2M_{\mathrm{N}}} = \frac{(p_e c)^2}{2 M_{\mathrm{N}}c^2} = \frac{(0.429)^2}{2(14 \times 931.5)}\ \text{MeV} = \frac{0.184}{26082}\ \text{MeV} \approx 7\times10^{-6}\ \text{MeV} = 7\ \text{eV}.$$

Compared to $Q = 156{,}000\ \text{eV}$, the recoil is about $4\times10^{-5}$ of the total — utterly negligible. That is why $T_{e,\max} \approx Q$: the daughter absorbs momentum but essentially no energy.

*Check.* The ratio $T_{\mathrm{N}}/T_e \sim m_e/M_{\mathrm{N}} \sim (0.5)/(13000) \sim 4\times10^{-5}$ — consistent, and it is small precisely because a heavy body carries momentum cheaply in energy. ✓

</details>

## Flashback

**From Lesson 2.1 (The decay law & chains):** The ${}^{32}\mathrm{P}$ from Problem 1 has a half-life $t_{1/2} = 14.3$ days. Starting from a pure sample, what fraction of the nuclei remain after 30 days, and what is the mean lifetime $\tau$? (Fresh variant — different isotope and elapsed time than the lesson.)

<details>
<summary>Solution</summary>

The mean life is $\tau = t_{1/2}/\ln 2 = 14.3/0.693 = 20.6$ days. The surviving fraction after $t = 30$ days is

$$\frac{N(t)}{N_0} = e^{-t/\tau} = e^{-30/20.6} = e^{-1.456} = 0.233,$$

or equivalently $(1/2)^{30/14.3} = (1/2)^{2.10} = 0.233$. About **23%** remain.

*Check.* Thirty days is just over two half-lives, and $(1/2)^2 = 0.25$, so a value a little under 0.25 is right. ✓ The two routes (via $\tau$ and via counting half-lives) agree, as they must since $\tau = t_{1/2}/\ln2$.

</details>

## Connections

- **Backward:** which beta mode a nucleus takes is dictated by which side of the isobaric mass parabola it occupies — the valley of stability from [1.4](01-04-stability-valley.md). Neutron-rich → $\beta^-$ (climb up in $Z$); proton-rich → $\beta^+$/EC (climb down). The Q-value machinery is the same mass-defect accounting as [1.2](01-02-binding-energy-mass-defect.md), now with careful electron bookkeeping.
- **Forward:** [2.4 Gamma decay & the excited nucleus](02-04-gamma-decay.md) handles what happens when a beta decay lands in an *excited* state of the daughter — it then sheds the leftover energy as a gamma ray, so beta and gamma spectra are often seen together.
- **Sideways (the weak force & neutrinos):** the interaction driving every process here is the **weak interaction**, developed fully in [5.1 The weak interaction](05-01-weak-interaction.md) — where Fermi's point coupling $G_F$ is revealed as the low-energy shadow of $W$-boson exchange, and its parity violation is explained. The neutrino Pauli invented turns out to have a tiny mass and to oscillate between flavors, the subject of [5.4 Neutrinos & oscillations](05-04-neutrinos-oscillations.md); the Kurie-plot endpoint bend is still today's most direct handle on that mass.

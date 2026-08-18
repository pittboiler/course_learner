# Materials Science & Engineering · Lesson 5.1: Electronic properties & the band picture

> ⏱ ~15 min · Module 5: Functional Properties & the Materials Classes · Builds on: [1.1 Bonding & the energy well](01-01-bonding-energy-well.md) · Unlocks: [5.2 Semiconductors, optics & thermal response](05-02-semiconductors-optics-thermal.md)

## Why this matters

Why is copper a conductor, silicon a switch, and diamond an insulator when all three are just atoms in a crystal? The answer is one picture — **energy bands** — and it's the single most useful idea in functional materials. It tells you which materials carry current, which glow or change color, which turn a solar cell or a transistor. Get the band picture and the whole electronic/optical world of Module 5 falls out of a single diagram. This lesson builds the picture and pins down *conductors*; [5.2](05-02-semiconductors-optics-thermal.md) uses it to explain semiconductors, doping, and the light a material absorbs.

## The idea

Back in [1.1](01-01-bonding-energy-well.md) a single atom had **discrete** energy levels — sharp rungs an electron can sit on, nothing in between. Now bring $10^{23}$ atoms together into a crystal and bond them. Each sharp level can't stay sharp: the Pauli principle forbids two electrons from sharing a state, so every atomic level splits into as many slightly-shifted copies as there are atoms. Cram $10^{23}$ copies into a narrow energy range and they smear into a near-continuous **band** — a thick "shelf" of allowed states. Between bands sit **gaps**: energy ranges with *no* allowed states at all, a no-fly zone for electrons.

Here's the punchline. An electron only carries current if it can *nudge into a nearby empty state* — accelerate a little under a voltage. So the question "does it conduct?" becomes "is there an empty state right next door?" A band that's **partly filled** has empty states just above the filled ones — electrons slide right up: **metal**. A band that's **completely full**, with the next empty band a big gap away, traps its electrons — they'd have to leap the gap to move, and at room temperature they can't. If the gap is *small*, a few electrons get thermally kicked across: **semiconductor**. If it's *large*, essentially none do: **insulator**. Same picture, three materials, one number — the gap.

## The formal version

**Bands and the gap.** When $N$ atoms bond, each atomic level broadens into a band of $N$ closely spaced states. Two bands matter:

- The **valence band** — the highest band that is filled (or was filled) by the bonding electrons.
- The **conduction band** — the next band up, normally empty.

The energy width of the forbidden zone between them is the **band gap** $E_g$ (in electron-volts, eV; $1\ \mathrm{eV} = 1.602\times10^{-19}\ \mathrm{J}$). *In words: $E_g$ is the energy an electron must gain to jump from the full band into the empty one and become mobile.*

**The Fermi level** $E_F$ (eV) marks, loosely, the top of the filled states at absolute zero — the "water line" of the electron sea. *In words: states below $E_F$ are occupied, states above are empty.* Where $E_F$ falls sets everything:

$$
\begin{aligned}
\textbf{Metal:} &\quad E_F \text{ lies } \textit{inside} \text{ a band (partly filled, or two bands overlap)} \;\Rightarrow\; \text{no gap, always conducts.}\\
\textbf{Semiconductor:} &\quad E_F \text{ in a } \textit{small} \text{ gap, } E_g \approx 0.1\text{–}3\ \mathrm{eV} \;\Rightarrow\; \text{weakly conducts, strongly } T\text{-dependent.}\\
\textbf{Insulator:} &\quad E_F \text{ in a } \textit{large} \text{ gap, } E_g \gtrsim 4\ \mathrm{eV} \;\Rightarrow\; \text{effectively no carriers.}
\end{aligned}
$$

The boundary is fuzzy — a "semiconductor" is just an insulator with a gap small enough that heat, light, or doping can populate the conduction band.

**Conductivity.** How well a material carries current is captured by

$$\boxed{\;\sigma = n\,e\,\mu\;}$$

where $\sigma$ is the **conductivity** (siemens per meter, S/m, equivalently $\Omega^{-1}\mathrm{m^{-1}}$); $n$ is the **carrier density** (mobile electrons per cubic meter, $\mathrm{m^{-3}}$); $e = 1.602\times10^{-19}\ \mathrm{C}$ is the electron charge; and $\mu$ is the **mobility** (drift speed per unit field, $\mathrm{m^2\,V^{-1}s^{-1}}$) — how freely a carrier moves before scattering. *In words: conductivity is how many carriers you have times how nimble each one is.* Its reciprocal is the **resistivity** $\rho = 1/\sigma$ (ohm-meters, $\Omega\cdot\mathrm{m}$).

**Why a metal's $\sigma$ falls as it heats.** In a metal $n$ is enormous and essentially fixed — the band is partly filled regardless of temperature, so heating adds no new carriers. What heating *does* is shake the lattice: thermal vibrations (**phonons**) scatter the drifting electrons more often, cutting the mobility $\mu$. More scattering, lower $\mu$, lower $\sigma$:

$$n \approx \text{const}, \qquad \mu \downarrow \text{ as } T \uparrow \quad\Longrightarrow\quad \sigma \downarrow, \quad \rho \uparrow \text{ (roughly linearly in } T\text{)}.$$

*In words: a hot metal is a worse conductor, because its jiggling atoms trip up the electrons.* (Semiconductors do the opposite — heat *creates* carriers faster than it hurts mobility — which is [5.2](05-02-semiconductors-optics-thermal.md)'s story.)

## Picture

![Three band diagrams side by side — a metal with a partly filled band and no gap, a semiconductor with a small gap, and an insulator with a large gap, each showing filled valence states in blue, the empty conduction band, the band gap in coral, and the Fermi level E_F](assets/05-01-fig1.svg)

## Worked examples

**Example 1 (classify from the gap).** Three crystals have band gaps $E_g = 0$, $1.1\ \mathrm{eV}$, and $5.5\ \mathrm{eV}$. Classify each.

- $E_g = 0$: bands touch or overlap — $E_F$ sits inside a band, empty states are immediately adjacent. **Metal** (this is essentially a metal or semimetal; e.g. the overlapping bands of a divalent metal).
- $E_g = 1.1\ \mathrm{eV}$: a small gap in the semiconductor range. Room-temperature thermal energy ($k_BT \approx 0.026\ \mathrm{eV}$) is far below $1.1\ \mathrm{eV}$, but a tiny tail of electrons still crosses, and doping or light can add many more. **Semiconductor** — this is silicon.
- $E_g = 5.5\ \mathrm{eV}$: far larger than anything heat or visible light supplies, so the conduction band stays empty. **Insulator** — this is diamond.

The lesson: you can predict a material's whole electrical character from one number, the gap.

**Example 2 (a metal's conductivity, and the sign of its temperature slope).** Copper has carrier density $n = 8.5\times10^{28}\ \mathrm{m^{-3}}$ and electron mobility $\mu = 4.3\times10^{-3}\ \mathrm{m^2\,V^{-1}s^{-1}}$. Find $\sigma$ and $\rho$, then say whether $\sigma$ rises or falls with temperature.

$$\sigma = n e \mu = (8.5\times10^{28})(1.602\times10^{-19})(4.3\times10^{-3}) \approx 5.9\times10^{7}\ \mathrm{S/m}.$$

$$\rho = \frac{1}{\sigma} \approx \frac{1}{5.9\times10^{7}} \approx 1.7\times10^{-8}\ \mathrm{\Omega\cdot m}.$$

Both match copper's textbook values ($\sigma \approx 6.0\times10^{7}\ \mathrm{S/m}$, $\rho \approx 1.7\times10^{-8}\ \mathrm{\Omega\cdot m}$) — a good sanity check.

Sign of $d\sigma/dT$: copper is a **metal**, so $n$ is fixed by the partly filled band and doesn't grow with heating. Rising $T$ means more phonon scattering, which lowers $\mu$. Since $\sigma = ne\mu$ with $n,e$ constant, $\sigma$ **falls** as $T$ rises: $d\sigma/dT < 0$ (equivalently $\rho$ climbs, roughly linearly). This is why power lines and motor windings lose efficiency when they run hot.

## Watch out

- **You might think an insulator has no electrons in its valence band — that it's "empty."** Backwards: an insulator's valence band is completely *full*. That's exactly the problem — a full band has no empty neighbor state to nudge into, so no net current. Conduction needs *empty* states nearby, not more electrons.
- **You might think heating always helps conduction (more energy, more current).** True for a semiconductor, false for a metal. In a metal, heat doesn't add carriers (the band is already partly full); it only adds scattering, so a hot metal conducts *worse*. The direction of $d\sigma/dT$ is the fastest way to tell a metal from a semiconductor.
- **You might read $\sigma = ne\mu$ as "more mobility beats everything."** Carrier density $n$ usually dominates: a metal and a semiconductor can have similar $\mu$, but the metal's $n$ is larger by ten-plus orders of magnitude — which is the whole gap between a conductor and a near-insulator.

## One-liner

> Bonding smears sharp atomic levels into bands separated by gaps; whether the Fermi level lands *inside* a band (metal), just under a *small* gap (semiconductor), or under a *large* gap (insulator) decides everything — and a metal, with $n$ fixed, only ever conducts *worse* when heated.

## Problems

**P1 (🟢)** Four materials have band gaps $E_g = 0.7$, $0$, $3.4$, and $2.3\ \mathrm{eV}$. Label each as metal, semiconductor, or insulator, and order them from most to least conductive at room temperature (all else equal).

**P2 (🟡)** A metal wire has carrier density $n = 6.0\times10^{28}\ \mathrm{m^{-3}}$ and mobility $\mu = 3.0\times10^{-3}\ \mathrm{m^2\,V^{-1}s^{-1}}$. (a) Find $\sigma$ and $\rho$. (b) The wire is warmed and its mobility drops to $2.7\times10^{-3}\ \mathrm{m^2\,V^{-1}s^{-1}}$ while $n$ is unchanged. Find the new $\sigma$ and the percent change. Is this consistent with it being a metal?

**P3 (🔴)** At room temperature $k_B T \approx 0.026\ \mathrm{eV}$. Roughly what factor separates the fraction of electrons thermally able to cross a $1.1\ \mathrm{eV}$ gap (silicon) versus a $5.5\ \mathrm{eV}$ gap (diamond), if that fraction scales like $e^{-E_g/2k_BT}$? What does the answer say about why one is a usable semiconductor and the other an insulator?

<details>
<summary>Solutions</summary>

**P1** Using the ranges — metal ($E_g = 0$), semiconductor ($\approx 0.1$–$3\ \mathrm{eV}$), insulator ($\gtrsim 4\ \mathrm{eV}$, though $3.4$ sits at the wide-semiconductor/insulator border):

- $E_g = 0$: **metal.**
- $E_g = 0.7\ \mathrm{eV}$: **semiconductor** (small gap).
- $E_g = 2.3\ \mathrm{eV}$: **semiconductor** (wide-gap; e.g. a colored one).
- $E_g = 3.4\ \mathrm{eV}$: **insulator / wide-gap semiconductor** (e.g. GaN) — treat as the least conductive here.

Conductivity is set by how many carriers reach the conduction band, and the thermal carrier fraction falls as the gap grows. So most to least conductive: $\mathbf{0 > 0.7 > 2.3 > 3.4\ \mathrm{eV}}$ (metal, then increasing gap). *Check:* the order is simply "smaller gap conducts more," with the metal ($E_g=0$) on top — consistent with the classification scheme.

**P2** (a) $\sigma = ne\mu = (6.0\times10^{28})(1.602\times10^{-19})(3.0\times10^{-3}) \approx 2.88\times10^{7}\ \mathrm{S/m}$, so $\rho = 1/\sigma \approx 3.5\times10^{-8}\ \mathrm{\Omega\cdot m}$.

(b) Only $\mu$ changed, and $\sigma \propto \mu$ at fixed $n$, so scale directly:
$$\sigma_{\text{new}} = 2.88\times10^{7}\times\frac{2.7\times10^{-3}}{3.0\times10^{-3}} = 2.88\times10^{7}\times 0.90 \approx 2.59\times10^{7}\ \mathrm{S/m}.$$
Percent change $= (0.90 - 1)\times100\% = \mathbf{-10\%}$. Conductivity *dropped* when warmed with $n$ held constant — exactly the metal signature ($d\sigma/dT < 0$). **Consistent with a metal.**

*Check:* units of $\sigma$: $\mathrm{m^{-3}\cdot C\cdot m^2 V^{-1}s^{-1}} = \mathrm{C\,V^{-1}s^{-1}m^{-1}} = \mathrm{A\,V^{-1}m^{-1}} = \mathrm{S/m}$ ✓ (using $\mathrm{C/s = A}$ and $\mathrm{A/V = S}$).

**P3** Ratio of the two exponential factors:
$$\frac{e^{-E_{g,\mathrm{Si}}/2k_BT}}{e^{-E_{g,\mathrm{C}}/2k_BT}} = \exp\!\left(\frac{E_{g,\mathrm{C}} - E_{g,\mathrm{Si}}}{2k_BT}\right) = \exp\!\left(\frac{5.5 - 1.1}{2(0.026)}\right) = \exp\!\left(\frac{4.4}{0.052}\right) = e^{84.6}.$$
That's about $10^{37}$. *Check:* even silicon's own factor is tiny — $e^{-1.1/0.052} = e^{-21.2} \approx 6\times10^{-10}$, a minuscule intrinsic carrier fraction — but diamond's is smaller by a further $\sim 10^{37}$, i.e. utterly negligible. So a $1.1\ \mathrm{eV}$ gap leaves *just* enough thermally-excited (and, with doping, far more) carriers to be useful, while a $5.5\ \mathrm{eV}$ gap leaves essentially none: the exponential sensitivity to $E_g$ is exactly why a small change in gap flips a material from workhorse semiconductor to dead insulator.

</details>

## Flashback

**From Lesson 4.4 (Failure: fracture, fatigue & creep):** An aluminum alloy has fracture toughness $K_{IC} = 24\ \mathrm{MPa\sqrt{m}}$ and operates under a tensile stress $\sigma = 200\ \mathrm{MPa}$. Treating the geometry factor as $Y = 1$, estimate the critical surface-crack length $a_c$ at which fast fracture occurs. (Fresh variant — solve for the crack size, not the stress.)

<details>
<summary>Solution</summary>

Fast fracture happens when the stress intensity reaches the toughness, $K_{IC} = Y\sigma\sqrt{\pi a_c}$. Solve for $a_c$:

$$a_c = \frac{1}{\pi}\left(\frac{K_{IC}}{Y\sigma}\right)^2 = \frac{1}{\pi}\left(\frac{24}{(1)(200)}\right)^2 = \frac{1}{\pi}(0.12)^2 = \frac{0.0144}{\pi} \approx 4.6\times10^{-3}\ \mathrm{m} \approx 4.6\ \mathrm{mm}.$$

*Check:* units — $(\mathrm{MPa\sqrt{m}}/\mathrm{MPa})^2 = (\sqrt{\mathrm m})^2 = \mathrm{m}$ ✓. Sanity: a tougher alloy (larger $K_{IC}$) or a lower stress would tolerate a *longer* crack, as the formula's $\propto (K_{IC}/\sigma)^2$ dependence says. A few-millimeter critical crack is why aircraft aluminum needs regular inspection — cracks this size are detectable, which is the point of a damage-tolerant design.

</details>

## Connections

- **Backward:** the sharp, discrete atomic energy levels this lesson smears into bands are exactly the quantized levels behind bonding in [1.1](01-01-bonding-energy-well.md) — bonding is what forces the levels to split and broaden in the first place. The overlap that makes a metal is the extreme of the same orbital overlap that made metallic bonds delocalize their electrons.
- **Forward:** [5.2 Semiconductors, optics & thermal response](05-02-semiconductors-optics-thermal.md) runs with the small-gap case — doping to move $E_F$, and relating $E_g$ to the wavelength of light a material absorbs or emits ($E_g = hc/\lambda$), plus why a semiconductor's $\sigma$ *rises* with $T$.
- **Sideways:** the band picture here is the cartoon version of full solid-state band theory — the periodic potential, Bloch states, and $E$-vs-$k$ dispersion that fill the [`condensed-matter`](../../condensed-matter/syllabus.md) course. This lesson gives you the working model an engineer needs; that course derives where the bands and gaps actually come from.

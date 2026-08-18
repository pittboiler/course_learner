# Condensed Matter · Lesson 4.5: The p–n junction

> ⏱ ~15 min · Module 4: Semiconductors · Builds on: [4.4 Transport: mobility, conductivity, and the Hall effect](04-04-transport-mobility-hall.md), [4.3 The Fermi level vs temperature and doping](04-03-fermi-level-temperature-doping.md) · Unlocks: [5.1 Diamagnetism and paramagnetism](05-01-dia-paramagnetism.md), and all of semiconductor devices

## Why this matters

Everything electronic you own runs on one trick: press a slab of $p$-type silicon against a slab of $n$-type silicon and the interface becomes a **one-way valve for current**. That valve is the **diode**, and the same junction physics — dressed up slightly — becomes the solar cell, the LED, and the transistor. This lesson is the payoff of the whole module: carrier statistics (4.1), doping (4.2), Fermi-level bookkeeping (4.3), and drift/diffusion transport (4.4) all converge here to explain *rectification* — why the junction conducts one way and blocks the other. It is also the finale of **Boss problem 4**.

## The idea

Bring the two sides into contact. On the $n$-side, electrons are everywhere; on the $p$-side, almost none. That is a monstrous concentration gradient, so **electrons diffuse from $n \to p$** and **holes diffuse from $p \to n$**, and they recombine near the interface. But diffusing carriers leave something behind: the **fixed, ionized dopant atoms** — positively charged donors stranded on the $n$-side, negatively charged acceptors stranded on the $p$-side. These ions can't move. What's left near the junction is a thin layer swept clean of *mobile* carriers but full of *fixed* charge — the **depletion region** (or space-charge layer).

That exposed charge builds an electric field pointing from the $n$-side (+) to the $p$-side (−). The field pushes electrons *back* toward $n$ and holes *back* toward $p$ — it **opposes** the diffusion that created it. Diffusion keeps trying to smear carriers across; the field keeps shoving them back. Equilibrium is the truce: the field grows until the **drift current it drives exactly cancels the diffusion current**, and net current is zero. In band language, that field tilts the bands — **band bending** — by just enough that the **Fermi level is flat all the way across** (recall 4.3: in equilibrium $E_F$ is uniform, or carriers would flow). The height of the bend is the **built-in potential** $V_{bi}$.

Now bias it. Push the $p$-side *positive* (**forward bias**): you fight the built-in field, *lowering* the barrier, and diffusion floods across — big current. Push the $p$-side *negative* (**reverse bias**): you reinforce the field, *raising* the barrier, and diffusion is shut off — only a trickle of minority carriers drifts through. Conducts one way, blocks the other. That asymmetry *is* the diode.

## The formal version

**The built-in potential.** Deep in the $n$-side, $n_n \approx N_d$ (donor density); deep in the $p$-side the electron density is the minority value $n_p = n_i^2/N_a$ (from mass action, 4.1, with $N_a$ the acceptor density and $n_i$ the intrinsic concentration). The two are connected across the junction by a Boltzmann factor set by the electrostatic energy barrier $eV_{bi}$:

$$\frac{n_n}{n_p} = \exp\!\left(\frac{eV_{bi}}{k_B T}\right).$$

*In words: the barrier is exactly tall enough that the crowded-$n$ to sparse-$p$ population ratio is thermally suppressed.* Solve for $V_{bi}$, using $n_n = N_d$ and $n_p = n_i^2/N_a$:

$$\boxed{\,V_{bi} = \frac{k_B T}{e}\,\ln\!\frac{N_a N_d}{n_i^{2}}\,}$$

where $e$ is the elementary charge, $k_B$ Boltzmann's constant, $T$ temperature. *In words: heavier doping on either side (bigger $N_a N_d$) means a taller barrier; a bigger intrinsic $n_i$ — a narrower gap or hotter crystal — shrinks it.* Equivalently, this is just the statement that the *same* $E_F$ must serve both sides: the bands shift by $eV_{bi}$ to align it.

**The depletion width.** Model the space charge as fully depleted: charge density $+eN_d$ over $0 < x < x_n$ on the $n$-side and $-eN_a$ over $-x_p < x < 0$ on the $p$-side. Charge neutrality demands the two exposed charges balance, $N_a x_p = N_d x_n$. Integrating Poisson's equation $d^2\phi/dx^2 = -\rho/\varepsilon$ twice across the layer (the standard capacitor-like calculation) and matching the total potential drop to $V_{bi}$ gives the total width $W = x_n + x_p$:

$$\boxed{\,W = \sqrt{\frac{2\varepsilon V_{bi}}{e}\left(\frac{1}{N_a} + \frac{1}{N_d}\right)}\,}$$

with $\varepsilon = \varepsilon_r \varepsilon_0$ the semiconductor's permittivity. *In words: the layer is a nanoscale parallel-plate capacitor whose plates are the exposed ionic charges; the lighter-doped side has to expose a wider slab to muster the same charge, so it holds most of the depletion width.*

**The diode.** Bias voltage $V$ (positive = forward, $p$-side raised) adds to the barrier as $V_{bi} - V$, and the diffusion current — which is thermally activated over that barrier — scales as $e^{eV/k_B T}$. Subtracting the (nearly fixed) reverse minority-drift current gives the **ideal diode equation**:

$$\boxed{\,I = I_0\!\left(e^{\,eV/k_B T} - 1\right)}$$

where $I_0$ (the saturation current) is set by minority carriers. *In words: forward bias ($V>0$) blows the current up exponentially; reverse bias ($V<0$) drives the exponential to zero, leaving only $-I_0$.* At room temperature $k_B T/e \approx 0.0259$ V, so the current changes by roughly $\times 10$ for every $\sim 60$ mV of forward bias.

## Picture

![p–n junction band diagram at equilibrium: conduction and valence bands bend downward across a shaded depletion region while the Fermi level stays flat; the band offset equals eV_bi, with negative acceptor ions on the p-side and positive donor ions on the n-side](assets/04-05-fig1.svg)

The bands bend *down* going from $p$ (high) to $n$ (low) because the $n$-side sits at lower electron potential energy; the drop is $eV_{bi}$. Notice $E_F$ (grey) is dead flat — that's the equilibrium condition. An electron trying to diffuse $n \to p$ must climb the coral barrier.

## Worked examples

**Example 1 (built-in potential — the Boss-problem finale).** Silicon at $T = 300$ K has $n_i = 1.0\times10^{10}\ \mathrm{cm^{-3}}$. Form a junction with $N_a = 1.0\times10^{17}\ \mathrm{cm^{-3}}$ ($p$-side) and $N_d = 1.0\times10^{16}\ \mathrm{cm^{-3}}$ ($n$-side). Then

$$V_{bi} = (0.0259\ \mathrm{V})\ln\frac{(10^{17})(10^{16})}{(10^{10})^2} = (0.0259)\ln(10^{13}) = (0.0259)(29.9) \approx 0.77\ \mathrm{V}.$$

A typical silicon junction sits near $0.7$–$0.8$ V — which is why a silicon diode "turns on" around there.

**Example 2 (depletion width — where the layer lives).** Same junction, silicon $\varepsilon_r = 11.7$ so $\varepsilon = 11.7 \times 8.85\times10^{-12} = 1.04\times10^{-10}\ \mathrm{F/m}$. Convert densities to SI: $N_a = 10^{23}\ \mathrm{m^{-3}}$, $N_d = 10^{22}\ \mathrm{m^{-3}}$, so $1/N_a + 1/N_d = (0.1 + 1.0)\times10^{-22} = 1.1\times10^{-22}\ \mathrm{m^3}$. Then

$$W = \sqrt{\frac{2(1.04\times10^{-10})(0.77)}{1.60\times10^{-19}}\,(1.1\times10^{-22})} = \sqrt{1.10\times10^{-13}} \approx 3.3\times10^{-7}\ \mathrm{m} = 0.33\ \mu\mathrm{m}.$$

Sub-micron — thinner than a wavelength of visible light. And since $x_n/x_p = N_a/N_d = 10$, about $90\%$ of the depletion sits on the lightly-doped $n$-side. *This is why device engineers control junction thickness through doping.*

## Watch out

- **You might think the depletion region is where the carriers pile up.** It's the opposite: it's *swept clean* of mobile carriers, leaving only the fixed ionized dopants. The mobile charge piled up elsewhere and recombined.
- **You might think "$E_F$ flat" means "bands flat."** No — flat $E_F$ *forces* the bands to bend, because the two sides start with $E_F$ at different heights relative to their bands ($p$: near $E_v$; $n$: near $E_c$). Aligning $E_F$ is exactly what tilts the bands by $eV_{bi}$.
- **You might think reverse bias carries no current at all.** It carries a tiny saturation current $-I_0$: minority carriers that wander into the depletion field get *swept across* (drift, not diffusion). Raising the barrier does nothing to them — they're rolling *downhill*. That's why $I_0$ barely depends on $V$, and why it's set by minority-carrier supply.

## One-liner

> Diffusion strips a layer bare and leaves fixed charge whose field bends the bands until $E_F$ is flat; bias tips that barrier one way to flood current, the other way to block it — a diode.

## Problems

**P1 (🟢 — Boss 4 finale)** A silicon junction at $300$ K ($n_i = 1.0\times10^{10}\ \mathrm{cm^{-3}}$, $k_BT/e = 0.0259$ V) is doped $N_a = 5\times10^{17}\ \mathrm{cm^{-3}}$ and $N_d = 2\times10^{15}\ \mathrm{cm^{-3}}$. Find the built-in potential $V_{bi}$.

**P2 (🟡)** For the junction in Worked Example 2 ($V_{bi}=0.77$ V, $\varepsilon_r=11.7$), suppose instead **both** sides are doped equally at $N_a = N_d = 1.0\times10^{16}\ \mathrm{cm^{-3}}$. Recompute the depletion width $W$ (recompute $V_{bi}$ first). Does the layer get wider or narrower than the asymmetric case, and physically why?

**P3 (🔴, optional)** A diode at $300$ K ($k_BT/e = 0.0259$ V) is biased first to $V = +0.30$ V, then to $V = -0.30$ V. Using the ideal diode equation, find the ratio of the forward current to the magnitude of the reverse current. Comment on what this number *is*.

<details>
<summary>Solutions</summary>

**P1** Directly from $V_{bi} = (k_BT/e)\ln(N_a N_d/n_i^2)$:

$$\frac{N_a N_d}{n_i^2} = \frac{(5\times10^{17})(2\times10^{15})}{(10^{10})^2} = \frac{10^{33}}{10^{20}} = 10^{13},$$

$$V_{bi} = (0.0259)\ln(10^{13}) = (0.0259)(13\times2.303) = (0.0259)(29.9) \approx 0.77\ \mathrm{V}.$$

*Check.* $N_a N_d$ is the same $10^{33}$ as Example 1, so $V_{bi}$ lands at the same $0.77$ V — $V_{bi}$ depends only on the *product* of the dopings (through the logarithm), not how it's split. Silicon-typical magnitude ✓.

**P2** First $V_{bi} = (0.0259)\ln\!\dfrac{(10^{16})(10^{16})}{(10^{10})^2} = (0.0259)\ln(10^{12}) = (0.0259)(27.6) = 0.715$ V.

Now $N_a = N_d = 10^{22}\ \mathrm{m^{-3}}$, so $1/N_a + 1/N_d = 2\times10^{-22}\ \mathrm{m^3}$. With $\varepsilon = 1.04\times10^{-10}$ F/m:

$$W = \sqrt{\frac{2(1.04\times10^{-10})(0.715)}{1.60\times10^{-19}}(2\times10^{-22})} = \sqrt{1.86\times10^{-13}} \approx 4.3\times10^{-7}\ \mathrm{m} = 0.43\ \mu\mathrm{m}.$$

**Wider** than the $0.33\ \mu$m asymmetric case. Physically: the depletion width is dominated by the *lightly*-doped side, which must expose a thick slab of ions to build the field. Here both sides are lightly doped ($10^{16}$, vs the asymmetric case's heavy $10^{17}$ $p$-side that stayed thin), so the layer spreads out more even though $V_{bi}$ is slightly smaller.

*Check.* Units under the root: $(\mathrm{F/m}\cdot\mathrm{V}/\mathrm{C})\cdot\mathrm{m^3} = (\mathrm{C/m}/\mathrm{C})\cdot\mathrm{m^3} = \mathrm{m^2}$, so $W$ is in metres ✓. Sub-micron, order-of-magnitude sensible ✓.

**P3** Forward, $V = +0.30$ V:

$$\frac{eV}{k_BT} = \frac{0.30}{0.0259} = 11.6, \qquad I_{\text{fwd}} = I_0(e^{11.6} - 1) \approx I_0\,(1.1\times10^{5}).$$

Reverse, $V = -0.30$ V:

$$I_{\text{rev}} = I_0(e^{-11.6} - 1) \approx I_0(0 - 1) = -I_0.$$

Ratio of magnitudes:

$$\left|\frac{I_{\text{fwd}}}{I_{\text{rev}}}\right| = \frac{1.1\times10^{5}\,I_0}{I_0} \approx 1.1\times10^{5}.$$

This number *is the rectification ratio* — the junction passes forward current about a hundred thousand times more freely than it passes reverse current at the same voltage magnitude. That asymmetry, straight out of the $e^{eV/k_BT}$, is the entire reason a diode is useful.

*Check.* Reverse saturates at exactly $-I_0$ because $e^{-11.6}\approx 9\times10^{-6}\ll 1$ — the "$-1$" dominates, confirming the tiny fixed reverse leakage. ✓

</details>

## Flashback

**From Lesson 4.4 (Transport and the Hall effect):** A doped semiconductor bar in a magnetic field gives a measured Hall coefficient $R_H = -6.25\times10^{-4}\ \mathrm{m^3/C}$. State the sign of the majority carrier and compute their concentration $n$. ($e = 1.60\times10^{-19}$ C.)

<details>
<summary>Solution</summary>

The Hall coefficient is $R_H = 1/(nq)$ with $q$ the carrier charge (sign included). $R_H < 0$ means $q < 0$: the majority carriers are **electrons**, so the sample is $n$-type. The concentration follows from the magnitude:

$$n = \frac{1}{|R_H|\,e} = \frac{1}{(6.25\times10^{-4})(1.60\times10^{-19})} = \frac{1}{1.00\times10^{-22}} = 1.0\times10^{22}\ \mathrm{m^{-3}} = 1.0\times10^{16}\ \mathrm{cm^{-3}}.$$

*Check.* Units: $1/[(\mathrm{m^3/C})(\mathrm{C})] = \mathrm{m^{-3}}$ ✓. A donor density of $10^{16}\ \mathrm{cm^{-3}}$ is exactly the lightly-doped $n$-side of this lesson's junction — the Hall effect is how you'd *measure* the $N_d$ that sets $V_{bi}$. ✓

</details>

## Connections

- **Backward:** this junction is where every earlier semiconductor lesson cashes out — mass action $np = n_i^2$ (4.1) gives $V_{bi}$, doping (4.2) sets $N_a,N_d$, the flat-$E_F$ equilibrium condition (4.3) *is* the band-bending picture, and minority-carrier drift (4.4) is the reverse saturation current $I_0$.
- **Forward:** the depletion-layer Poisson calculation and the diode equation are the launch point for [`semiconductor-devices`](../../semiconductor-devices/syllabus.md) — the solar cell (illuminate the depletion field), the LED (forward-bias recombination emits photons), and the bipolar/field-effect transistors that stack two junctions.
- **Sideways (E&M):** the depletion region is solved by integrating **Poisson's equation** for a fixed charge slab — the identical parallel-plate/space-charge calculation from [`em-refresher`](../../em-refresher/syllabus.md); the junction is literally a voltage-dependent capacitor (the basis of the varactor).

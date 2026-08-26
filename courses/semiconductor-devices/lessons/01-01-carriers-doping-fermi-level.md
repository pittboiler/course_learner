# Semiconductor Devices · Lesson 1.1: Carriers, doping and the Fermi level, reloaded

> ⏱ ~15 min · Module 1: Carriers and transport · Builds on: [`condensed-matter` 4.1](../../condensed-matter/lessons/04-01-intrinsic-carriers.md), [4.2](../../condensed-matter/lessons/04-02-doping-extrinsic.md), [4.3](../../condensed-matter/lessons/04-03-fermi-level-temperature-doping.md) · Unlocks: [1.2 Drift, diffusion and the Einstein relation](01-02-drift-diffusion-einstein.md), [2.1 Junction electrostatics](02-01-junction-electrostatics.md)

## Why this matters

This lesson does not teach you carrier statistics — [`condensed-matter` 4.1–4.3](../../condensed-matter/lessons/04-01-intrinsic-carriers.md) already did, from Fermi–Dirac statistics and the density of states. This is a **reload**: the four facts a device engineer actually reaches for, pinned to the numbers this course will use for the next eighteen lessons, plus the one habit that separates device work from solid-state physics.

That habit is this: **a device is a place where the carrier concentrations vary with position.** Everything from here on is a story about $n(x)$ and $p(x)$ — how doping sets them, how fields and gradients move them, how junctions bend them. So the equilibrium formulas below are not the destination. They are the boundary conditions.

## The idea

Four facts, in the order you will use them.

**A semiconductor at room temperature has some carriers even undoped.** Thermal energy kicks a few electrons across the gap, leaving holes behind. Silicon's gap of 1.12 eV against $k_BT = 0.0259$ eV makes this a rare event — about one atom in $10^{13}$ — but the number, $n_i$, is the yardstick everything else is measured against.

**Doping changes that by orders of magnitude, and the product is fixed** ([law of mass action](../reference.md#law-of-mass-action))**.** Add donors and $n$ jumps to $N_d$; but the *product* $np$ stays pinned at $n_i^2$, so the minority carrier is crushed to $n_i^2/N_d$. One part per million of phosphorus raises $n$ by six orders of magnitude and lowers $p$ by six. That asymmetry — majority carriers a millionfold more numerous than minority ones — is what makes a junction rectify.

**The Fermi level is the bookkeeping device that tracks it.** $E_F$ is wherever it must be to make the charge balance. Dope $n$-type and it rises toward the conduction band; heat the sample and it slides back toward midgap. In a device it becomes a *level you draw on a band diagram*, and its flatness or slope is how you read the device at a glance.

**Room temperature is a lucky accident.** Silicon's dopants ionize at about 45 meV, comfortably below $k_BT$ = 26 meV × ~2, so essentially all of them are ionized at 300 K — while $n_i$ is still far below any useful doping. Both conditions hold across a wide plateau, the **extrinsic regime**, and every formula in this course lives on it. Cool the device and dopants freeze out; heat it and $n_i$ swamps the doping. Devices fail at both ends, and knowing where those ends are is a design constraint, not trivia.

## The formal version

**Carrier concentrations (non-degenerate, Boltzmann approximation).**

$$n = N_c\,e^{-(E_c-E_F)/k_BT}, \qquad p = N_v\,e^{-(E_F-E_v)/k_BT}.$$

*In words: the carrier count is the effective number of available states at the band edge, discounted by the Boltzmann factor for how far that edge sits above the Fermi level.* Derived in [`condensed-matter` 4.1](../../condensed-matter/lessons/04-01-intrinsic-carriers.md); $N_c$ and $N_v$ are the **effective densities of states**, which package the density of states and the effective mass into one number per band.

**Law of mass action.**

$$np = N_cN_v\,e^{-E_g/k_BT} = n_i^2,$$

**independent of $E_F$ and therefore of doping.** *In words: the carrier product is a fixed budget set by the material and the temperature; doping decides how it is split, never how big it is.* This is the single most-used equation in the course.

**Charge neutrality.** In a uniformly doped region with no net charge,

$$p + N_d^+ = n + N_a^-.$$

Combining with mass action gives the exact solution

$$n = \frac{N_d-N_a}{2}+\sqrt{\left(\frac{N_d-N_a}{2}\right)^2+n_i^2},$$

which in the extrinsic regime ($|N_d-N_a|\gg n_i$, full ionization) collapses to the two lines you will actually use:

$$\boxed{\;n\text{-type: } n\approx N_d,\quad p\approx \frac{n_i^2}{N_d}; \qquad p\text{-type: } p\approx N_a,\quad n\approx\frac{n_i^2}{N_a}.\;}$$

**Fermi level placement.** Inverting the concentration formulas,

$$E_c-E_F = k_BT\ln\frac{N_c}{n}, \qquad E_F-E_v = k_BT\ln\frac{N_v}{p}.$$

It is often more convenient to measure from the **intrinsic level** $E_i$ (where $E_F$ sits in an undoped sample):

$$\boxed{\;n = n_i\,e^{(E_F-E_i)/k_BT}, \qquad p = n_i\,e^{(E_i-E_F)/k_BT}.\;}$$

*In words: how far $E_F$ has moved off midgap, in units of $k_BT$, is the log of how far the carrier count has moved off $n_i$.* This pair is the workhorse form — it is what you use to read a band diagram, and it generalizes directly to the quasi-Fermi levels of [1.2](01-02-drift-diffusion-einstein.md).

**The three temperature regimes.**

| Regime | Condition | Behaviour |
|---|---|---|
| **Freeze-out** | $k_BT \lesssim E_d$ | dopants not ionized; $n < N_d$ and falls as $T$ drops |
| **Extrinsic** | $E_d \ll k_BT$, $n_i\ll N_d$ | $n\approx N_d$, flat over a wide range — **all device operation lives here** |
| **Intrinsic** | $n_i \gtrsim N_d$ | thermal pairs swamp the doping; the junction stops working |

For silicon doped at $10^{16}\ \mathrm{cm^{-3}}$ the extrinsic plateau runs from roughly 100 K to about 500 K. Push a silicon device past ~200 °C and it stops being a device — which is why silicon carbide ($E_g = 3.3$ eV, so $n_i$ is fantastically smaller) owns high-temperature power electronics.

**The course's silicon numbers.** Pinned here and used throughout, matching [`condensed-matter` 4.1](../../condensed-matter/lessons/04-01-intrinsic-carriers.md):

| Quantity | Value at 300 K |
|---|---|
| $E_g$ | 1.12 eV |
| $n_i$ | $1.0\times10^{10}\ \mathrm{cm^{-3}}$ |
| $N_c$ | $2.8\times10^{19}\ \mathrm{cm^{-3}}$ |
| $N_v$ | $1.04\times10^{19}\ \mathrm{cm^{-3}}$ |
| $k_BT/q$ | 0.0259 V |
| $\varepsilon_s = 11.7\varepsilon_0$ | $1.04\times10^{-12}$ F/cm |
| $q$ | $1.602\times10^{-19}$ C |

## Picture

![A band diagram strip shown three times side by side at the same energy scale. Left: intrinsic silicon, with E_F sitting at midgap labelled E_i. Middle: n-type, with E_F risen close to the conduction band edge E_c and a dashed donor level just below E_c. Right: p-type, with E_F fallen close to the valence band edge E_v and a dashed acceptor level just above E_v. Below each, a bar chart on a log scale shows n and p, with the n times p product marked as equal in all three.](assets/01-01-fig1.svg)

The three panels are the same material — only $E_F$ has moved. Read them the way you will read every band diagram from now on: **the distance from $E_F$ to a band edge is the log of that carrier's scarcity**. In the $n$-type panel $E_F$ is near $E_c$, so electrons are plentiful and holes are exponentially rare. The bar charts underneath make the invariant visible: the two bars change enormously, and the shaded area representing their product does not move at all.

## Worked examples

**Example 1 (the standard doping calculation, and where the Fermi level lands).** Silicon is doped with $N_d = 1\times10^{17}\ \mathrm{cm^{-3}}$ phosphorus at 300 K.

*Carriers.* Extrinsic regime, full ionization:

$$n \approx N_d = 1\times10^{17}\ \mathrm{cm^{-3}}, \qquad p = \frac{n_i^2}{n} = \frac{(10^{10})^2}{10^{17}} = 1\times10^{3}\ \mathrm{cm^{-3}}.$$

Fourteen orders of magnitude between majority and minority. A cubic micron of this silicon holds $10^5$ electrons and, on average, **one hole per thousand cubic microns**.

*Fermi level.*

$$E_c-E_F = k_BT\ln\frac{N_c}{n} = 0.0259\ln\frac{2.8\times10^{19}}{10^{17}} = 0.0259\ln(280) = 0.0259(5.63) = 0.146\ \mathrm{eV}.$$

So $E_F$ sits 146 meV below $E_c$ — about 13% of the way across the gap, comfortably non-degenerate (the Boltzmann approximation needs $E_c-E_F \gtrsim 3k_BT = 78$ meV ✓).

*Same result from the intrinsic form.* $E_F-E_i = k_BT\ln(n/n_i) = 0.0259\ln(10^7) = 0.0259(16.12) = 0.417$ eV above midgap. Check: midgap is $E_g/2 = 0.56$ eV below $E_c$, so $E_c-E_F = 0.56-0.417 = 0.143$ eV ✓ (the 3 meV difference is because $E_i$ is not exactly at midgap — it is offset by $\tfrac12 k_BT\ln(N_v/N_c) = -13$ meV, a detail worth knowing exists and never worth carrying).

**Example 2 (compensation, and why the *net* doping is what matters).** A silicon wafer is doped $N_a = 3\times10^{16}$, then a device region is counter-doped with $N_d = 1\times10^{17}$. What are the carriers there?

The temptation is to treat the two separately. They do not act separately: donors give electrons to acceptors until both are ionized and only the **net** doping remains free.

$$N_d - N_a = 1\times10^{17}-3\times10^{16} = 7\times10^{16}\ \mathrm{cm^{-3}} \ (n\text{-type}).$$

$$n\approx 7\times10^{16}\ \mathrm{cm^{-3}}, \qquad p = \frac{10^{20}}{7\times10^{16}} = 1.4\times10^{3}\ \mathrm{cm^{-3}}.$$

*Why this matters practically.* Every silicon device is built by counter-doping: you start with a lightly doped wafer and implant successively heavier, opposite-type regions on top. The $p^+$ source of a MOSFET is $10^{20}$ boron implanted into $10^{17}$ phosphorus — and it behaves as $p$-type at $10^{20}$, because the net is $10^{20}$ to three figures. Counter-doping is why a planar process can build both device types side by side on one wafer ([4.4](04-04-device-fabrication.md)).

*The hidden cost, which the net-doping formula does not show.* Mobility depends on the **total** ionized impurity concentration $N_a+N_d$, not the net, because every ionized atom scatters regardless of its sign. The compensated region above has net $7\times10^{16}$ but $1.3\times10^{17}$ scattering centres, so its mobility is that of a $1.3\times10^{17}$-doped sample — noticeably lower than an uncompensated $7\times10^{16}$ one. **Net doping sets the carrier count; total doping sets how well they move.** [1.2](01-02-drift-diffusion-einstein.md) makes that quantitative.

## Watch out

- **You might think $n_i$ computed from $\sqrt{N_cN_v}e^{-E_g/2k_BT}$ gives $10^{10}$.** Plug in the numbers above and you get $6.7\times10^9$. The measured value is $1.0\times10^{10}$; the gap comes from temperature-dependent effective masses and from $E_g$ itself shrinking with temperature. **Use the measured $n_i$**, and treat the formula as showing the exponential *scaling*, not as a precision calculator.
- **You might think mass action always holds.** $np = n_i^2$ is an **equilibrium** statement. Shine light on the sample, forward-bias a junction, or inject carriers any other way and $np > n_i^2$; sweep carriers out and $np < n_i^2$. Every interesting device operates where mass action is *violated* — which is exactly why [1.2](01-02-drift-diffusion-einstein.md) has to introduce quasi-Fermi levels to replace it.
- **You might think doping adds free carriers to the material.** It adds *net charge-neutral* atoms — a donor contributes one electron and one fixed positive ion. The sample stays neutral overall; that fixed ionic charge is invisible until a junction sweeps the electrons away and leaves it behind, which is the entire mechanism of [2.1](02-01-junction-electrostatics.md).
- **You might think a compensated region is "less doped".** Its carrier count follows $|N_d-N_a|$ but its scattering follows $N_d+N_a$. Compensation is the worst of both worlds and is avoided when it can be.

## One-liner

> Doping splits a fixed budget: $np = n_i^2$ never moves, the majority carrier equals the net doping, the minority carrier is crushed to $n_i^2/N$ — and the Fermi level's distance from a band edge is the logarithm of that scarcity.

## Problems

**P1 (🟢)** Silicon at 300 K is doped with $N_a = 5\times10^{16}\ \mathrm{cm^{-3}}$ boron. (a) Find $p$ and $n$. (b) Find $E_F-E_v$. (c) Find $E_i-E_F$. (d) Confirm the Boltzmann approximation is valid.

**P2 (🟡)** A silicon sample is doped $N_d = 2\times10^{15}\ \mathrm{cm^{-3}}$. (a) Find $n$ and $p$ at 300 K. (b) At what temperature does $n_i$ reach $N_d$, ending the extrinsic regime? Use $n_i(T) = 3.9\times10^{16}\,T^{3/2}e^{-E_g/2k_BT}\ \mathrm{cm^{-3}}$ with $T$ in kelvin and $E_g = 1.12$ eV held constant, and solve by iteration. (c) Comment on what this means for a silicon device in an engine bay at 150 °C, and for one on Venus at 460 °C.

**P3 (🔴)** A silicon region is doped $N_d = 1\times10^{16}$ and $N_a = 9\times10^{15}\ \mathrm{cm^{-3}}$ simultaneously. (a) Find the net doping and estimate $n$ with the extrinsic formula. (b) Now use the exact charge-neutrality solution and compare. (c) At what net doping does the extrinsic approximation start to fail by more than 1%? (d) Explain why this heavily compensated region is a poor place to build a device, giving two distinct reasons.

<details>
<summary>Solutions</summary>

**P1** (a) $p$-type, extrinsic:

$$p\approx N_a = 5\times10^{16}\ \mathrm{cm^{-3}}, \qquad n = \frac{n_i^2}{p} = \frac{10^{20}}{5\times10^{16}} = 2\times10^{3}\ \mathrm{cm^{-3}}.$$

(b) $$E_F-E_v = k_BT\ln\frac{N_v}{p} = 0.0259\ln\frac{1.04\times10^{19}}{5\times10^{16}} = 0.0259\ln(208) = 0.0259(5.34) = 0.138\ \mathrm{eV}.$$

(c) $$E_i-E_F = k_BT\ln\frac{p}{n_i} = 0.0259\ln\frac{5\times10^{16}}{10^{10}} = 0.0259\ln(5\times10^6) = 0.0259(15.42) = 0.399\ \mathrm{eV}.$$

$E_F$ sits 399 meV below midgap, i.e. 138 meV above $E_v$ ✓ (consistent to within the $E_i$ offset noted in Example 1: $0.56-0.399 = 0.161$ vs 0.138, differing by the 13 meV $E_i$ shift plus rounding — the two routes agree once $E_i$ is placed exactly).

(d) Boltzmann needs the Fermi level at least about $3k_BT = 78$ meV from the band edge. Here $E_F-E_v = 138$ meV $> 78$ meV ✓ — non-degenerate, comfortably. (Degeneracy would set in around $N_a\sim10^{19}$, where $E_F$ enters the valence band and the Boltzmann factor must be replaced by the full Fermi–Dirac integral.)

**P2** (a) $n\approx 2\times10^{15}\ \mathrm{cm^{-3}}$, $p = 10^{20}/(2\times10^{15}) = 5\times10^{4}\ \mathrm{cm^{-3}}$.

(b) Solve $n_i(T) = 2\times10^{15}$ with $n_i = 3.9\times10^{16}T^{3/2}e^{-6.5\times10^3/T}$, where the exponent is $E_g/2k_B = 1.12/(2\times8.617\times10^{-5}) = 6498$ K.

*Iterate.* At $T=600$: $T^{3/2} = 14697$, exponent $e^{-10.83} = 1.98\times10^{-5}$, so $n_i = 3.9\times10^{16}(14697)(1.98\times10^{-5}) = 1.13\times10^{16}$ — too big.

At $T=500$: $T^{3/2} = 11180$, $e^{-13.00} = 2.26\times10^{-6}$, $n_i = 3.9\times10^{16}(11180)(2.26\times10^{-6}) = 9.85\times10^{14}$ — too small.

At $T=530$: $T^{3/2}=12200$, $e^{-12.26} = 4.73\times10^{-6}$, $n_i = 3.9\times10^{16}(12200)(4.73\times10^{-6}) = 2.25\times10^{15}$ — just above.

At $T=525$: $T^{3/2}=12030$, $e^{-12.38} = 4.20\times10^{-6}$, $n_i = 1.97\times10^{15}$ ✓.

$$T \approx 525\ \mathrm{K} = 252\ ^\circ\mathrm{C}.$$

(c) At 150 °C (423 K) the sample is still comfortably extrinsic — $n_i$ there is about $7.2\times10^{13}$, still some 28 times below the doping, so the device works, though leakage currents (which scale as $n_i^2$ for diffusion and $n_i$ for generation, see [2.2](02-02-ideal-diode-equation.md)) are already thousands of times worse than at room temperature. An engine-bay device is fine but must be designed for that leakage.

On Venus at 460 °C (733 K), $n_i \approx 1.1\times10^{17}$ — fifty-five times the doping. The material is **intrinsic**: there is no longer a meaningful $n$-side or $p$-side, so a junction has no built-in potential and does not rectify. Silicon simply cannot work there, which is why Venus-surface probe electronics are built in silicon carbide.

Note also the direction of the fix implied by the formula: lower doping fails *sooner* (a $10^{14}$-doped region goes intrinsic around 400 K), so high-temperature silicon devices use heavier doping — at the cost of lower breakdown voltage, a trade [2.4](02-04-reverse-breakdown.md) makes precise.

**P3** (a) Net doping $N_d-N_a = 1\times10^{16}-9\times10^{15} = 1\times10^{15}\ \mathrm{cm^{-3}}$, $n$-type.

$$n\approx 1\times10^{15}\ \mathrm{cm^{-3}}.$$

(b) Exact:

$$n = \frac{N_d-N_a}{2}+\sqrt{\left(\frac{N_d-N_a}{2}\right)^2+n_i^2} = 5\times10^{14}+\sqrt{(5\times10^{14})^2+(10^{10})^2}.$$

The $n_i^2 = 10^{20}$ term is utterly negligible against $(5\times10^{14})^2 = 2.5\times10^{29}$ — nine orders of magnitude down. So

$$n = 5\times10^{14}+5\times10^{14}\sqrt{1+4\times10^{-10}} = 1.0000000002\times10^{15}.$$

The approximation is exact to ten figures. **Compensation does not threaten the extrinsic approximation at all** — only proximity to $n_i$ does.

(c) The correction factor is $\sqrt{1+(2n_i/\Delta N)^2}$ with $\Delta N$ the net doping. A 1% error needs $(2n_i/\Delta N)^2\approx 0.02$, i.e.

$$\Delta N \approx \frac{2n_i}{0.141} = 14\,n_i \approx 1.4\times10^{11}\ \mathrm{cm^{-3}}.$$

So the extrinsic formula holds down to net dopings around $10^{11}$ — far below anything used in a device (the lightest practical silicon is $\sim10^{13}$, in a detector or a high-voltage drift region). In practice the formula never fails at 300 K; it fails when *temperature* raises $n_i$ to meet the doping, which is P2.

(d) Two distinct reasons:

1. **Mobility.** Scattering counts *total* ionized impurities, $N_a+N_d = 1.9\times10^{16}$, not the net $10^{15}$. So the region has the mobility of a $2\times10^{16}$ sample (roughly 1200 cm²/V·s for electrons) while having only the carrier count of a $10^{15}$ one. Its conductivity $\sigma = qn\mu$ is therefore far below what either number alone would suggest — you pay full scattering price for a twentieth of the carriers.

2. **Doping control.** The net is a *small difference of two large numbers*. A 5% process variation in either implant — entirely routine — shifts $N_d$ by $5\times10^{14}$ and moves the net from $10^{15}$ to anywhere between $5\times10^{14}$ and $1.5\times10^{15}$, a 3:1 spread. Every quantity that depends on doping ($V_{bi}$, $W$, $V_T$, breakdown voltage) inherits that spread. Worse, a slightly larger variation flips the region's **type** entirely.

Both are why real processes counter-dope by large factors ($10^{20}$ into $10^{17}$), where the net equals the heavy dose to three figures and neither problem arises, and why lightly doped regions are grown by epitaxy at the intended concentration rather than made by cancellation.

</details>

## Flashback

*(First lesson of the course — retrieval practice starts in [1.3](01-03-generation-recombination.md).)*

## Connections

- **Backward:** every formula here is derived in [`condensed-matter` 4.1–4.3](../../condensed-matter/lessons/04-01-intrinsic-carriers.md); the Boltzmann approximation to Fermi–Dirac is [`stat-mech` 4.2](../../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md).
- **Forward:** [1.2](01-02-drift-diffusion-einstein.md) breaks equilibrium and replaces $E_F$ with two quasi-Fermi levels; [2.1](02-01-junction-electrostatics.md) puts an $n$-region and a $p$-region in contact and lets the fixed ionic charge left behind do the work.
- **Sideways:** the law of mass action is the same statement as a chemical equilibrium constant — electrons and holes are reagents in the reaction $\varnothing \rightleftharpoons e^- + h^+$, and $n_i^2$ is its equilibrium constant. The Arrhenius-looking $e^{-E_g/2k_BT}$ is exactly that analogy paying off.

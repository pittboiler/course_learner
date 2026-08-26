# Semiconductor Devices · Lesson 4.4: A taste of device fabrication

> ⏱ ~15 min · Module 4: Optoelectronic devices and fabrication · Builds on: [3.6 Short-channel effects and scaling](03-06-short-channel-effects-scaling.md), [1.1 Carriers, doping and the Fermi level](01-01-carriers-doping-fermi-level.md) · Unlocks: end of course

## Why this matters

Every lesson so far has taken a structure as given: "an abrupt junction with $N_a$ on one side", "an oxide of thickness $t_{ox}$", "a base 0.3 µm wide". This one asks how any of that is actually made.

It matters for three reasons. The [planar process](../reference.md#planar-process) — build everything from the top surface of a flat wafer, using masks — is what made integrated circuits possible at all, and its constraints shape every device you have studied. Several results from earlier lessons were process facts in disguise: the shallow junctions of [3.6](03-06-short-channel-effects-scaling.md), the threshold-adjust implant of [3.4](03-04-threshold-voltage-cv.md), the passivation of [1.3](01-03-generation-recombination.md), the interface quality that delayed the MOSFET by thirty years and SiC by twenty. And the economics of the whole industry — why a chip costs what it does, why a fab costs 20 billion dollars — follow directly from the process steps below.

## The idea

The planar process is a loop, repeated tens or hundreds of times.

**Deposit or grow** a layer. **Coat** it with photoresist. **Expose** the resist through a mask, so a pattern of light defines which regions are chemically altered. **Develop** away the exposed (or unexposed) resist. **Etch** or **implant** through the resulting stencil. **Strip** the resist. Repeat.

Everything is done from the top surface, and every layer is aligned to the ones beneath it. That is the whole architecture, and its power is that the *cost of a step does not depend on how many devices it patterns* — printing a billion transistors costs the same as printing one. That single economic fact is what makes Moore's law an economic law as well as a technical one.

Three steps deserve special attention because they define what devices are possible.

**Oxidation.** Silicon grown in oxygen forms SiO₂ — an excellent insulator, a diffusion barrier, and, critically, an interface with silicon so clean that surface recombination drops by four orders of magnitude ([1.3](01-03-generation-recombination.md)). No other semiconductor has a native oxide this good. **Silicon's dominance is a chemistry accident, not an electronics one.**

**Lithography.** The mask pattern is projected optically, so the smallest feature is set by diffraction: roughly $\lambda/2\mathrm{NA}$. Shrinking features has meant shortening the wavelength — visible, then deep ultraviolet at 248 and 193 nm, and after a twenty-year stall, extreme ultraviolet at 13.5 nm. That stall, and the tricks used to survive it, is the most consequential engineering story in the industry.

**Doping by ion implantation.** Rather than diffusing dopants in from a gas (slow, hot, poorly controlled), fire them in as an ion beam. The dose is an *electrical measurement* — you count the charge — so it is controllable to a fraction of a percent, and the depth is set by the accelerating voltage. That precision is what makes the threshold-adjust implant of [3.4](03-04-threshold-voltage-cv.md) a routine, repeatable operation.

## The formal version

**Crystal growth.** Electronic-grade silicon starts as a boule pulled from a melt by the **Czochralski** method: a seed crystal is dipped and withdrawn while rotating, growing a single crystal 300 mm in diameter and two metres long. Dopant is added to the melt to set the substrate resistivity. **Float-zone** growth, which never touches a crucible, gives lower oxygen and much longer minority-carrier lifetime — which is why float-zone silicon is used for power devices and high-efficiency solar cells, where $\tau$ matters ([1.3](01-03-generation-recombination.md)).

**Thermal oxidation.** Silicon consumed at the interface, oxide grown outward:

$$\mathrm{Si}+\mathrm{O_2}\to\mathrm{SiO_2}\ (\text{dry}), \qquad \mathrm{Si}+2\mathrm{H_2O}\to\mathrm{SiO_2}+2\mathrm{H_2}\ (\text{wet}).$$

The **Deal–Grove** model gives the thickness $x$ after time $t$:

$$x^2+Ax = B(t+\tau) \quad\Longrightarrow\quad \begin{cases} x\approx\dfrac{B}{A}t & \text{thin, reaction-limited (linear)}\\[6pt] x\approx\sqrt{Bt} & \text{thick, diffusion-limited (parabolic)}\end{cases}$$

*In words: at first the surface reaction limits growth so thickness is linear in time; once the oxide is thick, oxidant must diffuse through it, so growth slows to a square root.*

Note that oxidation **consumes** silicon: growing $x$ of oxide eats $0.44x$ of substrate. That is why an oxidized wafer's surface steps down where oxide was grown, and it is the basis of **LOCOS** isolation.

Wet oxidation is much faster (water diffuses through SiO₂ far better than O₂) and is used for thick field oxides; dry oxidation is slower but gives a better interface and is used for gate oxides. **You grow the electrically critical oxide slowly.**

**Photolithography.** The resolution and depth of focus of a projection system:

$$\boxed{\;\mathrm{CD} = k_1\frac{\lambda}{\mathrm{NA}}, \qquad \mathrm{DOF} = k_2\frac{\lambda}{\mathrm{NA}^2}.\;}$$

$k_1$ is a process factor, physically limited to 0.25 for a single exposure. The tension is immediate: raising NA improves resolution linearly but destroys depth of focus **quadratically**.

| Generation | $\lambda$ | NA | Typical CD |
|---|---|---|---|
| g-line | 436 nm | 0.4 | ~800 nm |
| i-line | 365 nm | 0.5 | ~350 nm |
| KrF | 248 nm | 0.7 | ~150 nm |
| ArF | 193 nm | 0.9 | ~65 nm |
| **ArF immersion** | 193 nm | **1.35** | ~38 nm |
| EUV | 13.5 nm | 0.33 | ~13 nm |
| High-NA EUV | 13.5 nm | 0.55 | ~8 nm |

**The 193 nm stall is worth understanding**, because it shaped two decades of the industry. After ArF at 193 nm, the next natural step was 157 nm — but no usable transparent lens material exists there, and the programme was abandoned around 2003. EUV was not ready (it took until 2019). So the industry printed 38 nm, then 20 nm, then 10 nm features *with 193 nm light*, using:

- **Immersion.** Fill the gap between lens and wafer with water ($n = 1.44$), raising the effective NA to 1.35. A single change of medium bought a whole generation.
- **Optical proximity correction.** Deliberately distort the mask — add serifs, hammerheads, sub-resolution assist features — so that diffraction *reconstructs* the intended shape. Mask patterns stopped resembling the circuit.
- **Multiple patterning.** Print half the features, then print the other half in a second exposure, interleaved. Double patterning halves the effective pitch; quadruple patterning quarters it. Each additional pass multiplies cost and tightens overlay requirements brutally.

**Ion implantation.** A beam of dopant ions is accelerated to 10–200 keV and fired into the wafer. The depth profile is approximately Gaussian:

$$N(x) = \frac{D}{\sqrt{2\pi}\,\Delta R_p}\exp\left[-\frac{(x-R_p)^2}{2\Delta R_p^2}\right], \qquad N_{\rm peak} = \frac{D}{\sqrt{2\pi}\,\Delta R_p} \approx \frac{0.4D}{\Delta R_p},$$

with $D$ the **dose** (ions/cm²), $R_p$ the **projected range**, and $\Delta R_p$ the **straggle**. Both $R_p$ and $\Delta R_p$ rise with energy and fall with ion mass — boron (light) goes deep, arsenic (heavy) stays shallow, which is exactly why arsenic is preferred for the ultra-shallow source/drain extensions that [3.6](03-06-short-channel-effects-scaling.md) demanded.

Implantation **damages** the lattice, so an **anneal** follows to repair it and to move dopants onto substitutional sites where they are electrically active. But annealing also diffuses the dopants, blurring the profile — the central tension of modern doping. The response has been ever-shorter anneals: furnace (hours) → rapid thermal (seconds) → **spike** (sub-second) → **laser** (nanoseconds, melting the surface). *In words: heat it hot enough to activate but briefly enough not to diffuse.*

**Diffusion.** Where dopants do move, Fick's law from [1.2](01-02-drift-diffusion-einstein.md) governs it, with $D = D_0e^{-E_A/k_BT}$. The characteristic length is $\sqrt{Dt}$, and $E_A\approx3.5$ eV for boron in silicon means the diffusivity changes by orders of magnitude over a few hundred degrees — which is why thermal budget, quoted as $\sum\sqrt{D_it_i}$, is tracked obsessively through a process flow.

**Deposition and etch.**

| Process | Method | Use |
|---|---|---|
| CVD | gas reacts on a hot surface | oxide, nitride, polysilicon |
| PECVD | plasma lowers the temperature | low-thermal-budget layers |
| ALD | one atomic layer per cycle, self-limiting | high-$\kappa$ gate dielectrics, conformal liners |
| Sputtering / evaporation | physical vapour | metals |
| Electroplating | electrochemical | copper interconnect |
| Wet etch | chemical bath | isotropic; blanket removal |
| **Plasma (RIE) etch** | directional ions | **anisotropic** — vertical sidewalls |
| CMP | chemical–mechanical polish | planarization between layers |

Two of these enabled specific device generations. **ALD** made high-$\kappa$ gate stacks possible, because depositing 2 nm of hafnium oxide uniformly over a 300 mm wafer requires atomic-layer control. And **anisotropic plasma etch** is what allows a FinFET to exist at all — you cannot etch a tall, vertical-walled fin with a wet chemical, which attacks sideways as fast as downward.

**CMOS process flow, abbreviated.** Roughly 400–1000 steps in a modern flow, but the skeleton is:

1. Starting wafer, epitaxial layer if needed.
2. **Isolation** — shallow trench isolation (STI): etch trenches, fill with oxide, polish flat.
3. **Well** implants ($n$-well, $p$-well) and threshold-adjust implants ([3.4](03-04-threshold-voltage-cv.md)).
4. **Gate stack** — grow/deposit the dielectric, deposit the gate, pattern it. (Modern flows use **gate-last**: build a dummy polysilicon gate, do the high-temperature steps, then remove it and fill with the real high-$\kappa$/metal stack, which cannot survive the heat.)
5. **Extensions** — light, ultra-shallow source/drain implants self-aligned to the gate.
6. **Spacers** — deposit and anisotropically etch a dielectric, leaving sidewalls on the gate.
7. **Deep source/drain** implants, self-aligned to the spacers, then anneal.
8. **Silicide** — react a metal with exposed silicon to cut contact resistance ([2.5](02-05-metal-semiconductor-heterojunctions.md)).
9. **Back end of line** — 10–15 layers of copper interconnect, each with dielectric deposition, trench/via etch, barrier and copper fill, and CMP.

**The self-aligned gate**, step 5, deserves emphasis. Implanting the source and drain *after* patterning the gate, using the gate itself as the implant mask, guarantees the channel is exactly the gate length with no overlap error. Before this (1968), gates had to be drawn oversized to guarantee overlap under alignment tolerance, which added huge parasitic capacitance. **Self-alignment removed a tolerance from the critical dimension**, and it is arguably the single most important process invention after the planar process itself.

**Yield and economics.** With defect density $D_0$ (defects/cm²) and die area $A$, a common model gives

$$Y \approx \frac{1}{(1+AD_0)^2}\ \text{(Bose–Einstein)}, \qquad\text{or}\qquad Y\approx e^{-AD_0}\ \text{(Poisson, pessimistic)}.$$

*In words: yield falls steeply with die area, which is why large chips are expensive out of proportion to their size.* A 600 mm² GPU die at $D_0 = 0.1\ \mathrm{cm^{-2}}$ yields about 62% by the Bose–Einstein model, while a 100 mm² die yields 91%. **This is the entire economic argument for chiplets** — dividing a large design into several small dies raises composite yield dramatically, at the cost of packaging complexity.

## Picture

![A two-part figure. Top: the photolithography loop shown as a sequence of six cross-sections — oxide grown on silicon, photoresist coated, ultraviolet exposed through a patterned mask, resist developed away in the exposed regions, oxide etched through the resist stencil, and finally resist stripped leaving a patterned oxide window. Bottom: a self-aligned MOSFET built in four steps — gate stack patterned, shallow extension implants fired in using the gate as its own mask, sidewall spacers formed by deposit-and-anisotropic-etch, and deep source-drain implants placed outside the spacers, with the resulting graded junction profile drawn beneath.](assets/04-04-fig1.svg)

Top: the loop that everything is built from. Note that the mask never touches the wafer and the pattern is optical, so a single mask prints millions of identical structures at once — the economic engine of the whole industry.

Bottom: self-alignment, the trick that removed alignment tolerance from the channel length. The gate masks its own source/drain implants, so the channel is exactly the gate length by construction, regardless of how well the lithography aligned. The spacers then create a second, deeper implant set back from the gate edge, giving the graded junction that [3.6](03-06-short-channel-effects-scaling.md) wanted: shallow near the channel to control short-channel effects, deep further out to cut resistance.

## Worked examples

**Example 1 (an implant profile and a threshold adjust).** Boron is implanted at 40 keV with dose $D = 2\times10^{12}\ \mathrm{cm^{-2}}$, giving $R_p = 140$ nm and $\Delta R_p = 55$ nm. Find the peak concentration, the concentration at the surface, and the threshold shift for an oxide with $C_{ox} = 3.45\times10^{-7}\ \mathrm{F/cm^2}$.

*Peak concentration.*

$$N_{\rm peak} = \frac{D}{\sqrt{2\pi}\,\Delta R_p} = \frac{2\times10^{12}}{(2.5066)(55\times10^{-7}\ \mathrm{cm})} = \frac{2\times10^{12}}{1.379\times10^{-5}} = 1.45\times10^{17}\ \mathrm{cm^{-3}}.$$

*Surface concentration* ($x=0$, i.e. $R_p/\Delta R_p = 140/55 = 2.545$ straggles from the peak):

$$N(0) = N_{\rm peak}\exp\left[-\frac{(2.545)^2}{2}\right] = (1.45\times10^{17})e^{-3.239} = (1.45\times10^{17})(0.0392) = 5.68\times10^{15}\ \mathrm{cm^{-3}}.$$

*Threshold shift.* Treating the implant as a sheet of acceptor charge near the surface ([3.4](03-04-threshold-voltage-cv.md)):

$$\Delta V_T = \frac{qD}{C_{ox}} = \frac{(1.602\times10^{-19})(2\times10^{12})}{3.45\times10^{-7}} = \frac{3.204\times10^{-7}}{3.45\times10^{-7}} = 0.929\ \mathrm{V}.$$

**Nearly a volt of threshold shift** from an implant that adds only $1.45\times10^{17}$ at its peak — a modest perturbation to a substrate already doped $10^{17}$.

*A caveat worth stating.* The sheet-charge approximation assumes the implant sits well inside the depletion region. Here $R_p = 140$ nm against a typical $W_{\max}$ of about 100 nm ([3.3](03-03-mos-capacitor.md)), so the peak is actually *below* the depletion edge — part of the dose is outside the region the gate controls, and the real shift will be somewhat less than 0.93 V. Lowering the implant energy to place $R_p$ nearer 50 nm would put the whole dose inside and make the sheet approximation good.

That is a real design consideration: **threshold-adjust implants are placed shallow deliberately**, not merely for convenience, so that the entire dose contributes.

**Example 2 (why lithography stalled, and what it cost).** Compare printing a 40 nm feature by ArF immersion (193 nm, NA = 1.35), by ArF double patterning, and by EUV (13.5 nm, NA = 0.33). Take $k_1 = 0.30$ as a practical single-exposure limit and $k_2 = 0.5$.

*ArF immersion, single exposure.*

$$\mathrm{CD} = k_1\frac{\lambda}{\mathrm{NA}} = 0.30\times\frac{193}{1.35} = 0.30(143) = 42.9\ \mathrm{nm}.$$

Just barely — 43 nm against a 40 nm target. **Single exposure fails.**

*Depth of focus:*

$$\mathrm{DOF} = k_2\frac{\lambda}{\mathrm{NA}^2} = 0.5\times\frac{193}{1.8225} = 0.5(105.9) = 53\ \mathrm{nm}.$$

Fifty-three nanometres of focus latitude across a 300 mm wafer — which is why wafer flatness and stage control are specified in nanometres.

*ArF double patterning.* Split the pattern into two masks, each printing features at twice the pitch, then interleave. Effective CD halves to ~21 nm, comfortably meeting 40 nm.

*The cost.* Two masks, two exposures, two etches, plus a hard-mask sequence — roughly **doubling the cost and cycle time of that layer**, and requiring overlay (alignment between the two exposures) accurate to a few nanometres, since any misalignment appears directly as line-placement error. Quadruple patterning, used at 10 nm and below, multiplies this by four and pushes overlay budgets under 2 nm.

*EUV.*

$$\mathrm{CD} = 0.30\times\frac{13.5}{0.33} = 0.30(40.9) = 12.3\ \mathrm{nm},$$

$$\mathrm{DOF} = 0.5\times\frac{13.5}{0.1089} = 62\ \mathrm{nm}.$$

**A single EUV exposure prints 12 nm with better depth of focus than immersion managed at 43 nm.** One exposure replaces four, collapsing a quadruple-patterning sequence back to a single step.

*Why it took until 2019.* At 13.5 nm every material absorbs — including air, and including glass. So EUV needs: a vacuum system; **reflective** optics (multilayer Mo/Si Bragg mirrors, each about 70% reflective, with ten in the path giving ~2% throughput); and a light source made by hitting tin droplets with a high-power laser fifty thousand times a second. Each machine costs roughly 150–350 million dollars and weighs 180 tonnes.

*The economics, which is the actual point.* EUV is enormously expensive per tool, and it is adopted anyway because the *alternative* — quadruple patterning at 193 nm — is more expensive still once you count masks, steps, cycle time and yield loss from overlay errors. **The industry did not switch to EUV when it became good; it switched when it became cheaper than the workaround.** That crossover, rather than any physics, set the timing.

## Watch out

- **You might think oxidation adds a layer on top.** It **consumes** silicon: $0.44x$ of substrate is eaten for every $x$ of oxide grown. The interface moves *into* the wafer, which is why the resulting interface is clean — it was never exposed to air.
- **You might think higher NA is unambiguously better.** Resolution improves as $1/\mathrm{NA}$ but depth of focus degrades as $1/\mathrm{NA}^2$. Past a point the wafer cannot be held flat enough to stay in focus, which is a real limit on high-NA EUV.
- **You might treat implant dose and concentration as interchangeable.** Dose is ions/cm² (a sheet density, what the machine controls and measures); concentration is ions/cm³ (what the device sees), and converting between them requires the straggle.
- **You might forget that annealing diffuses.** Every thermal step after an implant blurs it, so the profile you designed is not the profile you get. Thermal budget is cumulative and is tracked across the whole flow; this is why high-temperature steps are front-loaded and why gate-last integration exists.
- **You might assume yield is a fixed process number.** It falls steeply with die area, so the same process gives 91% on a small die and 62% on a large one. Design choices — die size, redundancy, chiplet partitioning — move yield as much as process improvements do.

## One-liner

> Build everything from the top surface through patterned stencils, and one mask prints a billion devices for the price of one — which is why the constraints that shape modern transistors are lithographic and thermal, not electronic.

## Problems

**P1 (🟢)** Arsenic is implanted at a dose of $5\times10^{15}\ \mathrm{cm^{-2}}$ with $R_p = 40$ nm and $\Delta R_p = 15$ nm. (a) Find the peak concentration. (b) Find the concentration at the surface. (c) Is this a source/drain implant or a threshold adjust? Justify. (d) At what depth does the concentration fall to the substrate level of $10^{17}\ \mathrm{cm^{-3}}$ — that is, where is the metallurgical junction?

**P2 (🟡)** A lithography tool uses $\lambda = 193$ nm with NA = 1.35 and achieves $k_1 = 0.28$. (a) Find the minimum printable feature and the depth of focus with $k_2 = 0.5$. (b) A new tool raises NA to 1.50 (hypothetically). Find both. (c) Comment on whether the trade is worthwhile. (d) EUV at 13.5 nm with NA = 0.33 — find both and compare with (a).

**P3 (🔴)** A die measuring $15\times20$ mm is made in a process with defect density $D_0 = 0.08\ \mathrm{cm^{-2}}$. (a) Find the yield using both the Poisson and Bose–Einstein models. (b) A 300 mm wafer holds how many such dies (ignore edge loss and use a simple area estimate)? How many are good? (c) The design is split into four chiplets of equal total area plus 10% area overhead for interfaces. Find the composite yield of a four-chiplet assembly, assuming packaging yield of 99%. (d) State the break-even condition and comment on when chiplets stop paying.

<details>
<summary>Solutions</summary>

**P1** (a) $$N_{\rm peak} = \frac{D}{\sqrt{2\pi}\,\Delta R_p} = \frac{5\times10^{15}}{(2.5066)(15\times10^{-7})} = \frac{5\times10^{15}}{3.760\times10^{-6}} = 1.33\times10^{21}\ \mathrm{cm^{-3}}.$$

(b) $x=0$ is $R_p/\Delta R_p = 40/15 = 2.667$ straggles from the peak:

$$N(0) = (1.33\times10^{21})\exp\left[-\frac{(2.667)^2}{2}\right] = (1.33\times10^{21})e^{-3.556} = (1.33\times10^{21})(0.0285) = 3.79\times10^{19}\ \mathrm{cm^{-3}}.$$

(c) **A source/drain implant**, unambiguously. Three signs: the dose is $5\times10^{15}$ — four orders of magnitude above the $\sim10^{11}$–$10^{12}$ of a threshold adjust; the peak concentration $1.3\times10^{21}$ is at (indeed above) the solid-solubility limit, which is what you want for a low-resistance contact region ([2.5](02-05-metal-semiconductor-heterojunctions.md)); and arsenic is the standard shallow $n^+$ species.

(A threshold adjust must be *light*, because its whole purpose is to shift $V_T$ by a fraction of a volt without materially changing the substrate doping or wrecking channel mobility.)

(d) Set $N(x) = 10^{17}$:

$$10^{17} = (1.33\times10^{21})\exp\left[-\frac{(x-40)^2}{2(15)^2}\right] \quad\Longrightarrow\quad \exp\left[-\frac{(x-40)^2}{450}\right] = 7.52\times10^{-5},$$

$$\frac{(x-40)^2}{450} = \ln(1.33\times10^{4}) = 9.495 \quad\Longrightarrow\quad (x-40)^2 = 4273, \qquad x-40 = 65.4.$$

$$x_j = 40+65.4 = 105\ \mathrm{nm}.$$

A junction about 105 nm deep — reasonable for a mature node, and far too deep for a modern one, which would use lower energy plus a spike anneal to reach 15–20 nm.

**P2** (a) $$\mathrm{CD} = 0.28\times\frac{193}{1.35} = 0.28(143.0) = 40.0\ \mathrm{nm},$$
$$\mathrm{DOF} = 0.5\times\frac{193}{(1.35)^2} = 0.5\times\frac{193}{1.8225} = 0.5(105.9) = 53.0\ \mathrm{nm}.$$

(b) NA = 1.50:
$$\mathrm{CD} = 0.28\times\frac{193}{1.50} = 0.28(128.7) = 36.0\ \mathrm{nm},$$
$$\mathrm{DOF} = 0.5\times\frac{193}{2.25} = 0.5(85.8) = 42.9\ \mathrm{nm}.$$

(c) Resolution improved by 10% (40 → 36 nm) while depth of focus fell by 19% (53 → 43 nm) — the asymmetry is the $1/\mathrm{NA}$ versus $1/\mathrm{NA}^2$ scaling.

**Probably not worthwhile**, for a reason beyond the numbers: NA = 1.35 is already near the physical ceiling for water immersion, since NA cannot exceed the immersion fluid's refractive index (1.44 for water at 193 nm). Reaching 1.50 would require a higher-index fluid *and* a higher-index final lens element, both of which were researched and abandoned — no material with adequate index, transparency and lifetime was found.

And the 10% resolution gain would not even be transformative: it does not remove the need for double patterning at aggressive nodes. The industry judged, correctly, that the money was better spent on EUV.

(d) EUV:
$$\mathrm{CD} = 0.28\times\frac{13.5}{0.33} = 0.28(40.9) = 11.5\ \mathrm{nm},$$
$$\mathrm{DOF} = 0.5\times\frac{13.5}{0.1089} = 0.5(124.0) = 62.0\ \mathrm{nm}.$$

**Both better**: 3.5× the resolution *and* 17% more depth of focus. That combination is unusual — normally resolution and DOF trade — and it happens because EUV wins on wavelength (a factor of 14) while giving back only a factor of 4 on NA. Since CD $\propto\lambda/\mathrm{NA}$ and DOF $\propto\lambda/\mathrm{NA}^2$, the low NA that would normally be a handicap becomes an advantage for focus latitude.

That is precisely why EUV was worth two decades of development: it is not an incremental improvement on the same trade curve but a move to a better one.

**P3** (a) $A = 1.5\ \mathrm{cm}\times2.0\ \mathrm{cm} = 3.0\ \mathrm{cm^2}$, $AD_0 = (3.0)(0.08) = 0.24$.

$$Y_{\rm Poisson} = e^{-0.24} = 0.787 = 78.7\%,$$
$$Y_{\rm BE} = \frac{1}{(1+0.24)^2} = \frac{1}{1.5376} = 0.650 = 65.0\%.$$

(The Bose–Einstein form is the more realistic of the two for modern processes, because defects cluster rather than being independently random; Poisson assumes independence and is optimistic.)

(b) Wafer area: $\pi(15)^2 = 706.9\ \mathrm{cm^2}$. Dies per wafer, by simple area division:

$$\frac{706.9}{3.0} = 235\ \text{dies (gross)}.$$

Good dies, using the Bose–Einstein yield:

$$235\times0.650 = 153\ \text{good dies}.$$

(c) Four chiplets, total area $3.0\times1.10 = 3.3\ \mathrm{cm^2}$, so each is $3.3/4 = 0.825\ \mathrm{cm^2}$.

Per-chiplet yield:
$$A D_0 = (0.825)(0.08) = 0.066, \qquad Y_{\rm chiplet} = \frac{1}{(1.066)^2} = 0.880.$$

An assembly needs all four to be good, plus the packaging step:

$$Y_{\rm assembly} = (0.880)^4\times0.99 = 0.600\times0.99 = 0.594 = 59.4\%.$$

Gross assemblies per wafer: $706.9/3.3 = 214$ worth of chiplet area, i.e. $214$ potential assemblies' worth of silicon, of which 59.4% yield:

$$214\times0.594 = 127\ \text{good assemblies}.$$

**Fewer than the 153 monolithic dies.** At this defect density and die size, chiplets *lose*.

(d) *Break-even condition.* Chiplets pay when the yield gain from smaller dies exceeds the combined cost of the area overhead and the assembly yield:

$$\underbrace{\left(\frac{Y_{\rm chip}^{N}}{Y_{\rm mono}}\right)}_{\text{yield gain}}\times\underbrace{Y_{\rm pkg}}_{\text{packaging}} > \underbrace{(1+f_{\rm overhead})}_{\text{extra silicon}},$$

where $N$ is the chiplet count and $f$ the area overhead.

Here: yield ratio $= 0.600/0.650 = 0.923$, times 0.99 = 0.914, against an overhead cost of 1.10. Since $0.914 < 1.10$, monolithic wins — and by the ratio $1.10/0.914 = 1.20$, i.e. chiplets cost 20% more silicon per working unit.

*When do chiplets start paying?* The yield gain grows steeply with $AD_0$, since $Y_{\rm mono}$ collapses while the per-chiplet yield barely moves. Redo the comparison for a $600\ \mathrm{mm^2}$ die ($A = 6.0\ \mathrm{cm^2}$) at $D_0 = 0.15\ \mathrm{cm^{-2}}$:

$$Y_{\rm mono} = \frac{1}{(1+0.9)^2} = 0.277, \qquad Y_{\rm chiplet} = \frac{1}{(1+0.2475)^2} = 0.642, \qquad (0.642)^4(0.99) = 0.168.$$

Yield ratio $= 0.168/0.277 = 0.606$ — still below 1.10, so *four* chiplets is too many at 10% overhead. But with **two** chiplets ($A = 3.3\ \mathrm{cm^2}$ each, $AD_0 = 0.495$):

$$Y = \frac{1}{(1.495)^2} = 0.447, \qquad (0.447)^2(0.99) = 0.198, \qquad \text{ratio} = \frac{0.198}{0.277} = 0.715.$$

Still short. The honest conclusion from this model is that **pure yield arithmetic rarely justifies chiplets on its own** — the overhead and the "all must work" multiplication are brutal.

The real drivers are different and are worth naming: **reticle limit** (a monolithic die simply cannot exceed ~830 mm², so anything larger *must* be partitioned); **process heterogeneity** (put logic on an expensive leading node and I/O or analog on a cheap mature one, which this model does not capture at all, since it assumes one $D_0$); **design reuse** across product lines; and **binning flexibility** (assemble whatever good chiplets you have into whatever product tier they support). AMD's chiplet strategy is driven far more by the second and third of those than by yield.

</details>

## Flashback

**From Lesson 3.4 (Threshold voltage and the C–V curve):** A MOSFET needs its threshold raised from 0.15 V to 0.45 V, with $t_{ox} = 5$ nm. (a) Find $C_{ox}$. (b) Find the required implant dose and species. (c) Estimate the peak concentration if $\Delta R_p = 30$ nm, and compare with a substrate doping of $5\times10^{17}\ \mathrm{cm^{-3}}$.

<details>
<summary>Solution</summary>

(a) $$C_{ox} = \frac{\varepsilon_{ox}}{t_{ox}} = \frac{3.45\times10^{-13}}{5\times10^{-7}} = 6.90\times10^{-7}\ \mathrm{F/cm^2}.$$

(b) $\Delta V_T = +0.30$ V requires **acceptors** (boron) for an $n$-channel device:

$$D = \frac{\Delta V_T\,C_{ox}}{q} = \frac{(0.30)(6.90\times10^{-7})}{1.602\times10^{-19}} = \frac{2.070\times10^{-7}}{1.602\times10^{-19}} = 1.29\times10^{12}\ \mathrm{cm^{-2}}.$$

(c) $$N_{\rm peak} = \frac{D}{\sqrt{2\pi}\Delta R_p} = \frac{1.29\times10^{12}}{(2.5066)(30\times10^{-7})} = \frac{1.29\times10^{12}}{7.520\times10^{-6}} = 1.72\times10^{17}\ \mathrm{cm^{-3}}.$$

Against a substrate at $5\times10^{17}$, the implant adds a peak of $1.72\times10^{17}$ — a **34% local increase** in doping near the surface, tapering away with depth.

Two things worth noting. First, the perturbation is modest, which is why the sheet-charge approximation of [3.4](03-04-threshold-voltage-cv.md) works reasonably: the implant does not change the substrate's character, it just adds a controlled sheet of charge where the gate field is strongest.

Second, that 34% local increase does cost something — mobility. Channel carriers travel through this enriched surface layer, and the extra ionized impurities scatter them ([1.2](01-02-drift-diffusion-einstein.md)), cutting the drive current by a few percent. That is the standing trade of every threshold-adjust implant: precise threshold control paid for in transconductance, and it is one reason processes that can avoid the implant — by using a **work-function-engineered metal gate** to set $V_T$ instead — do so. Choosing the gate metal's work function to land $V_T$ where you want it shifts $V_{FB}$ directly ([3.3](03-03-mos-capacitor.md)) and leaves the channel undoped, which is exactly what fully depleted SOI and modern gate-all-around devices do.

</details>

## Connections

- **Backward:** this lesson supplies the *how* for structures assumed throughout — the shallow junctions of [3.6](03-06-short-channel-effects-scaling.md), the threshold implant of [3.4](03-04-threshold-voltage-cv.md), the passivating oxide of [1.3](01-03-generation-recombination.md), the silicide contacts of [2.5](02-05-metal-semiconductor-heterojunctions.md).
- **Forward:** this is the end of the course. The natural continuations are [`computer-architecture`](../../computer-architecture/syllabus.md) for what gets built from these transistors, and [`materials-science`](../../materials-science/syllabus.md) for the defect and diffusion physics underlying the process steps.
- **Sideways:** the Deal–Grove linear-then-parabolic law is the same reaction-limited-then-diffusion-limited crossover as oxide growth on any metal, and as the shrinking-core model in [`reaction-engineering`](../../reaction-engineering/syllabus.md); the implant Gaussian is the stopping-range statistics of [`radiation-detection-shielding`](../../radiation-detection-shielding/syllabus.md), where $R_p$ and straggle carry exactly the same meaning for ions in matter.

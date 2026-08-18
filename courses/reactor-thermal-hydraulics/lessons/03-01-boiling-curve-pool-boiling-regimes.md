# Reactor Thermal-Hydraulics · Lesson 3.1: The boiling curve and pool-boiling regimes

> ⏱ ~15 min · Module 3: Boiling and two-phase flow · Builds on: [2.2 Convective film drop](02-02-convective-heat-transfer-film-drop.md), [`heat-transfer` 3.6 boiling & condensation](../../heat-transfer/lessons/03-06-boiling-condensation.md), [`engineering-thermodynamics` 1.2 phase behavior](../../engineering-thermodynamics/lessons/01-02-phase-behavior-pure-substance.md) · Unlocks: [3.2 Onset of nucleate boiling](03-02-onset-nucleate-boiling-subcooled.md), [3.6 Critical heat flux / DNB](03-06-critical-heat-flux-dnb.md)

## Why this matters

Everything up to now treated the coolant as a liquid that just gets *hotter* — the film drop $\Delta T_{film}=q''/h$ from [2.2](02-02-convective-heat-transfer-film-drop.md) was a tame few tens of kelvin because water's single-phase $h$ is large. This lesson is where the coolant is allowed to **boil**, and boiling is a double-edged sword. On one edge: bubbles move heat so violently that $h$ jumps another order of magnitude, which is exactly why a BWR *deliberately* boils water right on the fuel rods. On the other edge: the boiling curve has a **peak** — the critical heat flux — and a reactor fuel rod is a **flux-controlled** surface, so crossing that peak isn't a gentle rolloff, it's a cliff that ends in a melted rod. This one non-monotonic curve is the object the entire back half of the course circles. Read it correctly and you understand both why we boil on purpose and why we lie awake about it.

## The idea

Submerge a heater in a still pool of liquid at its boiling point and slowly turn up the wall temperature. What happens is not one thing but a sequence of five distinct *regimes*, and the surprise is that heat flux does **not** rise monotonically with wall temperature.

At first, only a few degrees of superheat, nothing boils — the hot wall just drives ordinary buoyant convection, sluggish and single-phase. Push hotter and bubbles start popping off cavities in the surface: **nucleate boiling**. This is the magic regime. Each bubble nucleates, grows, tears away, and drags cool liquid in behind it, stirring the boundary layer far harder than any pump — so flux climbs *steeply* for only a small rise in wall temperature. This is where you want to run.

But bubbles are being made faster and faster, and eventually they merge into a **vapor blanket** that seals the wall off from the liquid. Vapor is a lousy conductor. The moment that blanket forms, the wall can barely shed heat — flux actually *falls* as you push the temperature higher (the unstable **transition** regime), until a stable insulating film takes over (**film boiling**), where the wall runs hundreds of degrees hot to pass even a modest flux. The top of the hump, right before the blanket wins, is the **critical heat flux (CHF)**: the most heat the surface can move. Everything hinges on what you're holding fixed as you climb — and on a fuel rod, you hold the *flux* fixed.

## The formal version

**The excess temperature (wall superheat).** Newton's law of cooling still holds, $q''=h\,\Delta T_e$, but the driving difference is now measured from saturation:

$$\Delta T_e \equiv T_s - T_{sat},$$

where $T_s$ is the heated-surface temperature ($^\circ$C or K), $T_{sat}$ the saturation temperature of the liquid at the system pressure ($^\circ$C), and $q''$ the surface heat flux ($\mathrm{W/m^2}$). *In words: what drives boiling is not how far the wall is above the bulk, but how far it is above the boiling point.*

**The pool-boiling curve.** Plot $q''$ against $\Delta T_e$ on log–log axes for a heater in a still, saturated pool. The curve (see figure) passes through five regions, with representative water-at-1-atm numbers:

- **Natural convection** ($\Delta T_e \lesssim 5\,^\circ$C): no bubbles; single-phase buoyant flow, the [2.2](02-02-convective-heat-transfer-film-drop.md) physics with a weak $h$.
- **Nucleate boiling** ($\approx 5$–$30\,^\circ$C): isolated bubbles, then merging columns and jets. $q''$ climbs steeply — the efficient, useful regime, with $h\sim 10^4$–$10^5\ \mathrm{W/(m^2\,K)}$.
- **CHF peak** ($\Delta T_e\approx 30\,^\circ$C, $q''_{max}\approx 1\ \mathrm{MW/m^2}$): the maximum flux the surface can pass. Also called the **boiling crisis**; in flow boiling it is **departure from nucleate boiling (DNB)**.
- **Transition boiling** ($\approx 30$–$120\,^\circ$C): a flickering, unstable vapor film; the one regime where $q''$ *falls* as $\Delta T_e$ rises.
- **Film boiling** (past the **Leidenfrost minimum**, $\Delta T_e\gtrsim 120\,^\circ$C): a continuous, insulating vapor blanket; $q''$ creeps back up while $T_s$ is enormous.

*In words: flux rises to a peak, collapses through an unstable middle, and limps back up once a vapor film has taken over — it is not one-to-one with temperature.*

**Nukiyama's experiment — why the boundary condition is everything.** In 1934 Nukiyama heated a wire by passing current through it. An electrically heated wire is **flux-controlled**: you set the power (and hence $q''$), and $T_s$ settles to whatever the curve demands. Trace what a flux-controlled surface can do. As you raise $q''$ up the nucleate branch, $\Delta T_e$ follows along — stable. But when you nudge $q''$ *just past* the CHF peak, there is no longer any point on the nucleate branch that can carry that flux. The only place on the curve at that flux is way over on the **film-boiling branch**, at $\Delta T_e$ of many hundreds of degrees. So the wall temperature **jumps horizontally across the peak** (the coral arrow in the figure) — instantly, by hundreds of kelvin — into film boiling. For water near $q''_{max}$ that overshoot passes the melting point of most metals: Nukiyama's wires *burned out*. The transition and film-boiling branches are only reachable by instead controlling the *temperature* (e.g. a condensing-vapor bath on the other side); a flux-controlled path can never sit on them, which is precisely why CHF is a cliff and not a slope.

**Why boiling moves so much heat.** Two effects stack. First, **latent heat**: vaporizing liquid stores energy at nearly constant temperature, and $h_{fg}$ is large — for water, vaporization costs several times what heating it to boiling does (from [`engineering-thermodynamics` 1.2](../../engineering-thermodynamics/lessons/01-02-phase-behavior-pure-substance.md), [`heat-transfer` 3.6](../../heat-transfer/lessons/03-06-boiling-condensation.md)). Second, **bubble agitation**: departing bubbles stir the boundary layer violently. Together they push the effective $h$ one to two orders of magnitude above single-phase convection — a huge flux for a tiny superheat.

## Picture

![Pool-boiling curve on log-log axes: heat flux versus wall superheat, showing natural convection, nucleate boiling rising to the critical-heat-flux peak, transition boiling falling to the Leidenfrost minimum, then film boiling, with the flux-controlled horizontal jump across the peak marked in coral](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (read the curve — the fuel-rod cliff).** A fuel rod sits in nucleate boiling at $q''=0.9\,q''_{max}$, a comfortable superheat of about $\Delta T_e\approx 25\,^\circ$C. A power transient nudges the local flux up past the CHF peak. What happens?

Follow the curve on the figure. Below the peak, each small rise in $q''$ is answered by a small rise in $\Delta T_e$ along the steep nucleate branch — self-correcting, benign. At the **peak** the nucleate branch simply *ends*. Because the rod is **flux-controlled** (the fission power is set by neutronics, not by the wall temperature), the wall must find *some* state that carries the imposed flux — and the only one available is far out on the film-boiling branch. So the surface temperature **jumps horizontally across the peak** at fixed $q''$, from $\Delta T_e\approx 30\,^\circ$C to many hundreds of degrees, essentially instantaneously, as an insulating vapor blanket clamps onto the clad.

Numerically: the clad-surface temperature leaps by, say, $\Delta T_e:30\to 700\,^\circ$C — an increase of order $700\ \mathrm{K}$ — putting the clad well past its safe limit. With $T_{sat}\approx 345\,^\circ$C in a PWR, that lands the clad surface near $345+700\approx 1045\,^\circ$C, hot enough to balloon and oxidize Zircaloy ([`nuclear-materials` 4.1](../../nuclear-materials/lessons/04-01-zirconium-alloys-cladding.md)) and, if the flux stays high, to march the fuel toward melt. *There is no gentle version of this.* That single horizontal jump — burnout — is the event the whole safety case is built to prevent, quantified as the critical heat flux ratio in [3.6](03-06-critical-heat-flux-dnb.md).

**Example 2 (order of magnitude — why a BWR boils on purpose).** Line up the coefficients. From [2.2](02-02-convective-heat-transfer-film-drop.md), turbulent single-phase water in a rod bundle gave $h\approx 3\times 10^4\ \mathrm{W/(m^2\,K)}$. Nucleate boiling runs $h\sim 10^4$–$10^5\ \mathrm{W/(m^2\,K)}$ — comparable at the bottom of its range, but climbing toward $10^5$ near CHF, several times the single-phase value.

Put it in flux terms at a modest superheat $\Delta T_e = 15\,^\circ$C. Single-phase convection would pass

$$q''_{sp} = h\,\Delta T_e \approx (3\times 10^4)(15) = 4.5\times 10^5\ \mathrm{W/m^2}\approx 0.45\ \mathrm{MW/m^2},$$

whereas nucleate boiling near its peak reaches $q''_{max}\approx 1\ \mathrm{MW/m^2}$ — and note the *superheat*: boiling delivers roughly twice the flux at a fraction of the wall-temperature excess, because latent heat and bubble stirring carry the load instead of a raw temperature difference. That is the BWR bargain: a Boiling Water Reactor lets the coolant reach $T_{sat}\approx 286\,^\circ$C at 7 MPa and boil directly on the rods, harvesting nucleate boiling's enormous $h$ and the latent heat $h_{fg}\approx 1505\ \mathrm{kJ/kg}$ to pull megawatts per square metre off the clad at a gentle superheat. Boiling is not a hazard to be avoided here — it is the *design point*. The catch is only that the same curve that gives you this gift has a peak a short distance above where you run, which is why a BWR watches its margin to *dryout* as carefully as a PWR watches DNB.

*Sanity check.* Units: $(\mathrm{W/(m^2\,K)})(\mathrm{K}) = \mathrm{W/m^2}$ ✓. The single-phase $3\times 10^4$ is exactly the [2.2](02-02-convective-heat-transfer-film-drop.md) number; nucleate boiling reaches the same $\sim 1\ \mathrm{MW/m^2}$ CHF ceiling quoted in [`heat-transfer` 3.6](../../heat-transfer/lessons/03-06-boiling-condensation.md). ✓

## Watch out

- **You might think hotter surface always means more heat.** True only on the nucleate branch. Past CHF, in transition boiling, $q''$ *decreases* as $\Delta T_e$ rises, and in film boiling the wall is scaldingly hot yet passes little flux. The hump is the whole safety story — the curve is not one-to-one.
- **You might think film boiling is just "vigorous boiling."** It is nearly the opposite — a *continuous vapor blanket* that insulates the wall, collapsing $h$ and sending $T_s$ soaring. The Leidenfrost droplet skating on a hot pan survives precisely because it rides its own insulating vapor cushion.
- **You might think the CHF cliff is inevitable for any boiling surface.** It is only a cliff for a **flux-controlled** surface (fuel rod, electric heater), where the flux is imposed and the temperature must follow. A **temperature-controlled** surface (e.g. condensing steam on the far side) can traverse the peak and sit smoothly on the transition and film branches. The reactor's danger comes from its boundary condition, not from boiling itself.

## One-liner

> Boiling moves enormous heat at small superheat because latent heat and bubbles do the work — but the boiling curve peaks at CHF, and a flux-controlled fuel rod that crosses that peak jumps to film boiling and burns out.

## Problems

**P1 (🟢)** A heater in a saturated water pool operates in nucleate boiling at $q'' = 0.60\ \mathrm{MW/m^2}$ with a measured wall superheat $\Delta T_e = 18\,^\circ$C. (a) Find the effective boiling coefficient $h$. (b) The critical heat flux is $q''_{max}\approx 1.0\ \mathrm{MW/m^2}$; is this heater safe to keep pushing? Name the regime it is in and the limit it approaches.

**P2 (🟡)** On the pool-boiling curve, a flux-controlled electric heater is slowly ramped in power from zero. Describe, in order, the regimes its operating point passes through, and state exactly what happens to the *wall temperature* at the instant the imposed flux exceeds $q''_{max}$. Why can this same heater never be operated *in* the transition-boiling regime?

**P3 (🔴, optional)** A BWR rod passes $q'' = 0.5\ \mathrm{MW/m^2}$ into water at $T_{sat}=286\,^\circ$C (7 MPa). In nucleate boiling the surface sits at superheat $\Delta T_e\approx 12\,^\circ$C. Estimate the clad-surface temperature. Then suppose the flux is held fixed but the rod dries out and jumps to film boiling, where the effective coefficient collapses to $h_{film}\approx 300\ \mathrm{W/(m^2\,K)}$; estimate the new surface temperature and comment on the clad.

<details>
<summary>Solutions</summary>

**P1** (a) From $q''=h\,\Delta T_e$,

$$h = \frac{q''}{\Delta T_e} = \frac{0.60\times 10^6\ \mathrm{W/m^2}}{18\ \mathrm{K}} = 3.3\times 10^4\ \mathrm{W/(m^2\,K)}.$$

(b) This is **nucleate boiling** ($h$ in the $10^4$–$10^5$ range, on the steep branch). It is at $0.60/1.0 = 60\%$ of the **critical heat flux**. It is not yet in danger, but further power increases march toward the CHF peak; crossing it on this flux-controlled heater triggers the jump to film boiling (**burnout**). *Check.* Units $(\mathrm{W/m^2})/\mathrm{K}=\mathrm{W/(m^2\,K)}$ ✓; $3.3\times 10^4$ sits squarely in the nucleate range. ✓

**P2** In order of increasing power: **natural convection** (no bubbles) → **nucleate boiling** (steep, efficient branch) → the **CHF peak** at $q''_{max}$. At the instant the imposed flux exceeds $q''_{max}$, the nucleate branch has no state that can carry it, so the wall temperature **jumps discontinuously** — hundreds of kelvin, essentially instantaneously — onto the **film-boiling** branch (burnout). The heater can never sit *in* transition boiling because that branch has $dq''/d\Delta T_e < 0$: at a fixed imposed flux, the only points that carry it are one on the nucleate branch and one on the film branch, never the transition branch in between. Transition boiling is only accessible under **temperature control**, where you set $\Delta T_e$ directly. *Check.* Reasoning matches Nukiyama's flux-controlled path in the lesson. ✓

**P3** Nucleate case: $T_s = T_{sat}+\Delta T_e = 286 + 12 = 298\,^\circ$C — barely above saturation, a healthy operating point.

Film-boiling case at the *same* flux but collapsed coefficient:

$$\Delta T_e = \frac{q''}{h_{film}} = \frac{0.5\times 10^6}{300} = 1667\ \mathrm{K},\qquad T_s = 286 + 1667 \approx 1950\,^\circ\mathrm{C}.$$

That is catastrophic — far above Zircaloy's safe limit (~1200 °C onset of runaway steam oxidation, [`nuclear-materials` 4.1](../../nuclear-materials/lessons/04-01-zirconium-alloys-cladding.md)) and approaching UO$_2$ concerns; the clad would balloon, oxidize, and likely fail. *Check.* Units $(\mathrm{W/m^2})/(\mathrm{W/(m^2\,K)})=\mathrm{K}$ ✓. Same $q''$, two coefficients two orders apart, gives two surface temperatures over 1600 K apart — the exact jump the boiling curve predicts. ✓

</details>

## Flashback

**From Lesson 2.4 (The full radial temperature drop):** A PWR pin runs at $q' = 30\ \mathrm{kW/m}$ into coolant at bulk temperature $T_b = 318\,^\circ$C. Properties: fuel $k_f = 3\ \mathrm{W/(m\cdot K)}$; gap $h_g = 6000\ \mathrm{W/(m^2\,K)}$ at $r_g = 4.2\ \mathrm{mm}$; clad $r_{ci}=4.18\ \mathrm{mm}$, $r_{co}=4.75\ \mathrm{mm}$, $k_c = 17\ \mathrm{W/(m\cdot K)}$; film $h = 34{,}000\ \mathrm{W/(m^2\,K)}$ at $r_{co}$. Find the clad **outer-surface** temperature $T_{co}$ (the number Module 3 tests against boiling), and confirm it sits above $T_{sat}\approx 345\,^\circ$C or below it.

<details>
<summary>Solution</summary>

Only the film leg separates the coolant bulk from the clad surface, so $T_{co} = T_b + \Delta T_{film}$ with

$$\Delta T_{film} = \frac{q'}{2\pi r_{co} h} = \frac{30{,}000}{2\pi (0.00475)(34{,}000)} = \frac{30{,}000}{1014.5} \approx 29.6\ \mathrm{K}.$$

$$T_{co} = 318 + 29.6 \approx 348\,^\circ\mathrm{C}.$$

*Check.* Units $\mathrm{(W/m)}/[\mathrm{m}\cdot\mathrm{W/(m^2 K)}]=\mathrm{K}$ ✓. The clad surface at $\approx 348\,^\circ$C just edges *above* $T_{sat}\approx 345\,^\circ$C at 15.5 MPa — meaning this node has crossed into **subcooled nucleate boiling** even though the bulk coolant is still 27 K subcooled. That is exactly the situation [3.2](03-02-onset-nucleate-boiling-subcooled.md) takes up next: boiling begins at the *wall* long before the bulk reaches saturation. ✓

</details>

## Connections

- **Backward:** the benign film drop $\Delta T_{film}=q''/h$ of [2.2](02-02-convective-heat-transfer-film-drop.md) is the *left foot* of this curve — the natural-convection and low-superheat regimes — and the whole plot still runs on Newton's law of cooling $q''=h\,\Delta T_e$, only now $h$ is a boiling coefficient and $\Delta T$ is a superheat. Latent heat and the constant-temperature character of phase change come from [`engineering-thermodynamics` 1.2](../../engineering-thermodynamics/lessons/01-02-phase-behavior-pure-substance.md); the curve itself is the reactor reframing of [`heat-transfer` 3.6](../../heat-transfer/lessons/03-06-boiling-condensation.md).
- **Forward:** [3.2](03-02-onset-nucleate-boiling-subcooled.md) zooms into the *onset* of nucleate boiling (ONB) on a subcooled wall — the left knee of this curve — and [3.6](03-06-critical-heat-flux-dnb.md) makes the peak quantitative as the critical heat flux and the DNB ratio, the single limit this whole module is built to respect.
- **Sideways:** the flux-controlled jump is the same "imposed source, temperature must follow" logic as the fuel-conduction problem in [`nuclear-materials` 3.2](../../nuclear-materials/lessons/03-02-fuel-temperature-profile-restructuring.md) — the fission rate sets $q'''$, and every temperature downstream, clad included, is forced to whatever value carries it away. When the coolant can no longer carry it, that forcing is what turns a small flux excursion into a burnout.

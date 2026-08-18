# Reactor Thermal-Hydraulics · Lesson 3.4: Two-phase flow regimes

> ⏱ ~15 min · Module 3: Boiling, quality, and critical heat flux · Builds on: [3.3 Quality, void fraction, and slip](03-03-quality-void-fraction-slip.md), [3.2 Onset of nucleate boiling](03-02-onset-nucleate-boiling-subcooled.md) · Unlocks: [3.5 Two-phase pressure drop](03-05-two-phase-pressure-drop.md), [3.6 Critical heat flux and DNB](03-06-critical-heat-flux-dnb.md)

## Why this matters

Once the coolant boils, "how much vapor" ([void fraction](03-03-quality-void-fraction-slip.md)) is only half the story — the other half is **how the vapor is arranged**. The same 50% void can be a fizz of tiny bubbles or a fast vapor core with a thin liquid skin on the wall, and those two look nothing alike to the wall: one is cooled by liquid touching hot metal, the other by a film that can *run out*. The geometric pattern — the **flow regime** — sets the heat-transfer coefficient, the pressure drop, and, critically, *which* mechanism ends cooling. A BWR lives and dies by this: its fuel dries out because the wall film in **annular** flow evaporates away. This lesson is the map from "a channel state" to "what the two phases are doing," and it's the setup for both the regime-dependent pressure drop of [3.5](03-05-two-phase-pressure-drop.md) and the dryout CHF of [3.6](03-06-critical-heat-flux-dnb.md).

## The idea

Feed subcooled water into the bottom of a vertical heated channel and watch it climb. As it absorbs heat, quality $x$ and void $\alpha$ rise monotonically, and the vapor keeps *reorganizing itself* into whatever shape is mechanically stable at that void:

- **Bubbly** — a little vapor, dispersed as discrete bubbles in a continuous liquid. Bubbles are small, the wall is bathed in liquid. Great heat transfer.
- **Slug / plug** — as void grows, bubbles collide and merge into big bullet-nosed **Taylor bubbles** that nearly span the channel, separated by liquid "slugs." The flow now pulses.
- **Churn** — push harder and the Taylor bubbles break down into a chaotic, oscillating froth. Neither phase is cleanly continuous; the interface thrashes.
- **Annular** — at high void the vapor wins the middle: a fast **vapor core** runs up the center while the liquid is pinned to the wall as a thin **film**, often shedding droplets that ride along entrained in the core. The wall is cooled *only* by that film.
- **Mist / dispersed** — if the film finally evaporates, you're left with vapor carrying scattered droplets, and the wall is dry.

The controlling intuition: **you can't arrange vapor however you like.** You cannot pack 78% vapor as separate little bubbles — geometry forces them to touch and merge long before that. High void *demands* a continuous vapor phase, i.e. annular. Low void *forbids* it. So void fraction is the primary dial that selects the regime, with mass flux $G$ as the second dial (more on that below).

## The formal version

To place a channel state we need the velocity each phase *would* have if it flowed alone through the whole cross-section — the **superficial velocities**. With mass flux $G=\dot m/A$ (kg·m⁻²·s⁻¹, from [2.1](02-01-coolant-energy-balance-bulk-temperature.md)), quality $x$, and saturated densities $\rho_g,\rho_f$ (kg·m⁻³):

$$j_g = \frac{G x}{\rho_g}\quad[\mathrm{m/s}], \qquad j_f = \frac{G(1-x)}{\rho_f}\quad[\mathrm{m/s}].$$

*In words: $j_g$ is the vapor volumetric flow per unit total area; $j_f$ is the liquid's.* Their sum $j=j_g+j_f$ is the total volumetric flux. These are **not** the real phase velocities — the vapor really occupies only the fraction $\alpha$ of the area, so its **actual** velocity is

$$u_g = \frac{j_g}{\alpha}, \qquad u_f = \frac{j_f}{1-\alpha}, \qquad S \equiv \frac{u_g}{u_f}\ \text{(slip ratio, from [3.3](03-03-quality-void-fraction-slip.md))}.$$

*In words: divide each superficial velocity by the area fraction that phase actually gets, and their ratio is the slip.*

**Flow-regime map.** A regime map is a phase diagram for *arrangement*. Plot the channel's operating point on axes of the two superficial velocities — the classic **Hewitt–Roberts map** uses the momentum fluxes $\rho_g j_g^2$ and $\rho_f j_f^2$ (each in Pa) — and read off which region it lands in: bubbly, slug, churn, annular, mist. Equivalently, for reactor work, a **quality-vs-mass-flux** map ($x$ horizontal, $G$ vertical) shows the same territory in the variables we already track.

$$\text{regime} = \mathcal{F}(j_g,\, j_f)\ \ \equiv\ \ \mathcal{F}(G,\, x,\ \text{geometry, orientation}).$$

*In words: the regime is a function of the flow state, not a single threshold — transitions are boundary curves on a 2-D map, and they shift with channel size and whether the flow is vertical, horizontal, up, or down.* Two rules of thumb worth carrying: bubbly generally survives only to $\alpha \lesssim 0.3$ before coalescence starts slug flow, and annular is firmly established by high void, $\alpha \gtrsim 0.7\text{–}0.8$.

## Picture

![Vertical heated channel showing the flow-regime column bottom to top: bubbly (dispersed bubbles), slug/plug (Taylor bubbles spanning the channel), churn (chaotic), and annular (thin liquid film on the walls with a vapor core and entrained droplets), with quality and void fraction rising upward and the wall film thinning toward the top](assets/03-04-fig1.svg)

## Worked examples

**Example 1 — name the regime at the channel exit (Boss problem 3 flavor).** A BWR channel at ~7 MPa: saturated densities $\rho_f\approx 740$, $\rho_g\approx 36.5\ \mathrm{kg/m^3}$. Take a representative core mass flux $G = 1500\ \mathrm{kg\,m^{-2}s^{-1}}$. At the exit the quality is $x=0.15$ and — from the [3.3](03-03-quality-void-fraction-slip.md) void model — $\alpha\approx 0.78$. What regime is this, and why does the answer matter?

*Superficial velocities:*

$$j_g = \frac{Gx}{\rho_g} = \frac{1500\times 0.15}{36.5} = \frac{225}{36.5} \approx 6.16\ \mathrm{m/s},$$

$$j_f = \frac{G(1-x)}{\rho_f} = \frac{1500\times 0.85}{740} = \frac{1275}{740} \approx 1.72\ \mathrm{m/s}.$$

*Actual phase velocities* (divide by the area fraction each phase holds):

$$u_g = \frac{j_g}{\alpha} = \frac{6.16}{0.78} \approx 7.90\ \mathrm{m/s}, \qquad u_f = \frac{j_f}{1-\alpha} = \frac{1.72}{0.22} \approx 7.82\ \mathrm{m/s},$$

so the slip $S = u_g/u_f \approx 1.01$ — essentially no slip, consistent with the near-homogeneous $\alpha\approx 0.78$ that [3.3](03-03-quality-void-fraction-slip.md) returned at this quality.

*Regime.* The decisive number is $\alpha\approx 0.78$: **78% of the cross-section is vapor.** There is no way to hold that much vapor as discrete bubbles — they must merge into a connected phase. So the vapor is a continuous core and the liquid is driven to the wall: this is **annular flow** (with churn just below it in the channel). As a cross-check, the Hewitt–Roberts momentum fluxes $\rho_g j_g^2 = 36.5\times 6.16^2 \approx 1.4\times 10^3\ \mathrm{Pa}$ and $\rho_f j_f^2 = 740\times 1.72^2 \approx 2.2\times 10^3\ \mathrm{Pa}$ land squarely in the map's annular region.

*Why the wall film matters.* In annular flow the only liquid touching the heated cladding is the thin film. The wall stays wet and cool **only as long as that film survives**. Evaporation thins it from the inside and entrainment strips droplets off its surface; if those outpace the droplets redepositing from the core, the film vanishes and vapor — a poor conductor — contacts the wall. The heat-transfer coefficient collapses and the wall temperature spikes. That failure is **dryout**, the BWR critical-heat-flux mechanism ([3.6](03-06-critical-heat-flux-dnb.md)). So identifying "annular" isn't trivia: it tells you the wall is living on a film budget.

*Check.* Units: $Gx/\rho_g = \frac{\mathrm{kg\,m^{-2}s^{-1}}}{\mathrm{kg\,m^{-3}}} = \mathrm{m/s}$ ✓. Sense: $u_g\approx u_f$ because slip is ~1 here; the vapor isn't outrunning the liquid much, yet it still dominates the *area* because it is ~20× less dense — that is exactly why a modest 15% quality buys 78% void. ✓

**Example 2 — trace a BWR channel, bottom to top.** Follow one channel from inlet to outlet as heat is added and quality climbs. Elevations are illustrative for a ~3.7 m active height; the *sequence* is the point.

| Elevation | Thermodynamic quality $x$ | Void $\alpha$ | Regime | What the wall sees |
|---|---|---|---|---|
| Inlet, ~0.0 m | $<0$ (subcooled) | ~0 | single-phase liquid | liquid convection ([2.2](02-02-convective-heat-transfer-film-drop.md)) |
| ~0.6 m | $\approx 0$ | small | **bubbly** (onset of boiling, [3.2](03-02-onset-nucleate-boiling-subcooled.md)) | bubbles nucleate, wall bathed in liquid |
| ~1.3 m | $\approx 0.03$ | ~0.3 | **slug / plug** | Taylor bubbles, pulsing flow |
| ~1.9 m | $\approx 0.06$ | ~0.5 | **churn** | chaotic froth |
| ~2.6 m | $\approx 0.10$ | ~0.7 | **annular** (film established) | thin wall film + vapor core |
| Outlet, ~3.7 m | $\approx 0.15$ | ~0.78 | **annular** with entrainment | film thinning, droplets in core |

The channel runs bubbly at the bottom to annular at the top — and it deliberately stops *short* of mist/dryout. The whole safety game is keeping the outlet in wetted annular flow with the film intact; the margin to burning through that film is the critical power ratio you will meet in [3.6](03-06-critical-heat-flux-dnb.md).

*Check.* Monotonic and consistent: $x$, $\alpha$, and the regime index all climb together up the channel, and the void jumps from ~0.3 to ~0.7 across a tiny quality window (0.03 to 0.10) — the steep low-$x$ part of the [3.3](03-03-quality-void-fraction-slip.md) $\alpha(x)$ curve, where a small amount of boiling reorganizes the flow fast. ✓

## Watch out

- **You might think quality alone fixes the regime — but mass flux $G$ is the second axis of the map.** At the *same* quality, a low-$G$ channel sits in slug/churn while a high-$G$ channel is already dispersed or annular; that is why a regime map is 2-D. Orientation matters too: everything here is *vertical up-flow*. Turn the channel horizontal and gravity stratifies the phases — vapor rides on top, you get stratified and wavy regimes that don't exist in a vertical rod bundle.
- **You might picture annular flow as the "worst, most vapor-choked" regime, like DNB — but its CHF mechanism is the opposite.** DNB (departure from nucleate boiling, the PWR limit) happens at *low* quality when so many bubbles crowd the wall that they blanket it in vapor — *too much* vapor at the wall. Dryout happens at *high* quality in annular flow when the liquid film is exhausted — *too little* liquid at the wall. Same endpoint (dry, hot wall), opposite cause. Do not import DNB intuition into annular flow ([3.6](03-06-critical-heat-flux-dnb.md) separates them).
- **You might conflate void fraction with flow regime — they are different questions.** $\alpha$ is *how much* vapor; the regime is *how it is arranged*. They correlate strongly (high $\alpha$ ⇒ annular), but $\alpha$ is a scalar and the regime is a geometry — and it's the geometry, not the scalar, that decides whether the wall is cooled by bulk liquid or a fragile film.

## One-liner

> Up a heated channel the vapor reorganizes bubbly → slug → churn → annular as void climbs, and annular — where the wall wears only a thin liquid film — is where a BWR dries out.

## Problems

**P1 (🟢)** A BWR channel (7 MPa: $\rho_f = 740$, $\rho_g = 36.5\ \mathrm{kg/m^3}$) runs at $G = 1200\ \mathrm{kg\,m^{-2}s^{-1}}$ with local quality $x = 0.10$, giving void $\alpha \approx 0.69$. Compute the superficial velocities $j_g$ and $j_f$, and name the flow regime with a one-line justification.

**P2 (🟡)** Bubbly flow generally gives way to slug flow once the void reaches about $\alpha \approx 0.3$ (bubbles start coalescing). Using the homogeneous void model $\alpha = \left[1 + \frac{1-x}{x}\frac{\rho_g}{\rho_f}\right]^{-1}$ with the 7 MPa BWR densities above, find the quality $x$ at which $\alpha = 0.3$ — i.e. the approximate bubbly→slug boundary. Comment on how little boiling it takes.

**P3 (🔴)** In annular flow the wall film carries a liquid mass flow of $\Gamma = 0.10\ \mathrm{kg\,m^{-1}s^{-1}}$ *per unit wall perimeter*. The local heat flux is $q'' = 1.0\ \mathrm{MW/m^2}$ and $h_{fg} = 1505\ \mathrm{kJ/kg}$. If **no droplets redeposit** onto the film, estimate the axial length over which pure evaporation would consume the entire film. What does the tiny answer tell you about what actually keeps a BWR channel wet?

<details>
<summary>Solutions</summary>

**P1** Superficial velocities:

$$j_g = \frac{Gx}{\rho_g} = \frac{1200\times 0.10}{36.5} = \frac{120}{36.5} \approx 3.29\ \mathrm{m/s},$$

$$j_f = \frac{G(1-x)}{\rho_f} = \frac{1200\times 0.90}{740} = \frac{1080}{740} \approx 1.46\ \mathrm{m/s}.$$

Regime: $\alpha \approx 0.69$ means over two-thirds of the area is vapor — far too much to hold as discrete bubbles, so the vapor must be continuous. This is **annular** (or churn-annular right at the transition): a vapor core with the liquid pushed to the wall as a film.

*Check.* Units $\mathrm{m/s}$ ✓. The vapor superficial velocity is ~2× the liquid's even though liquid outmasses vapor 9:1 by flow — because vapor is ~20× lighter, it moves through far more volume, which is exactly why it seizes the core. ✓

**P2** Set $\alpha = 0.3$ and solve for the quality. Let $r = \rho_g/\rho_f = 36.5/740 = 0.0493$. From the homogeneous model,

$$\frac{1}{\alpha} = 1 + \frac{1-x}{x}\,r \;\Longrightarrow\; \frac{1-x}{x} = \frac{1/\alpha - 1}{r} = \frac{1/0.3 - 1}{0.0493} = \frac{2.333}{0.0493} \approx 47.3.$$

Then $\frac{1}{x} - 1 = 47.3 \Rightarrow \frac{1}{x} = 48.3 \Rightarrow x \approx 0.021.$

So the bubbly→slug boundary sits near $x \approx 0.021$, about 2% quality.

*Check.* Units dimensionless ✓. The lesson: because vapor is so much lighter than liquid, a mere ~2% quality already fills ~30% of the channel with vapor and ends the bubbly regime. Two-phase flow reorganizes *extremely* early — most of a boiling channel's height is not bubbly. ✓

**P3** Per unit wall perimeter, evaporation removes mass at rate $q''/h_{fg}$ per unit wall *area*, i.e. over an axial length $L$ it removes $(q''/h_{fg})\,L$ per unit perimeter. Setting that equal to the film's supply $\Gamma$:

$$\Gamma = \frac{q''}{h_{fg}}\,L \;\Longrightarrow\; L = \frac{\Gamma\, h_{fg}}{q''} = \frac{0.10 \times 1.505\times 10^6}{1.0\times 10^6} \approx 0.15\ \mathrm{m}.$$

*Check.* Units: $\frac{\mathrm{kg\,m^{-1}s^{-1}}\cdot \mathrm{J/kg}}{\mathrm{W/m^2}} = \frac{\mathrm{W/m}}{\mathrm{W/m^2}} = \mathrm{m}$ ✓. The point: ~15 cm is minuscule against a ~3.7 m channel — an unreplenished film would evaporate almost immediately. So the film survives only because **entrained droplets continuously redeposit** onto it, refilling it as fast as evaporation and entrainment drain it. Dryout — the BWR CHF — occurs precisely where that deposition can no longer keep up. This is the mechanism [3.6](03-06-critical-heat-flux-dnb.md) formalizes. ✓

</details>

## Flashback

**From Lesson 3.3 (Quality, void fraction, and slip):** A BWR channel at 7 MPa ($\rho_f = 740$, $\rho_g = 36.5\ \mathrm{kg/m^3}$) reaches a local thermodynamic quality of $x = 0.08$. Using the **homogeneous** void-fraction model (slip ratio $S = 1$), find the void fraction $\alpha$. (Fresh variant — different quality from the lesson.)

<details>
<summary>Solution</summary>

Homogeneous void fraction:

$$\alpha = \frac{1}{1 + \dfrac{1-x}{x}\dfrac{\rho_g}{\rho_f}} = \frac{1}{1 + \dfrac{0.92}{0.08}\cdot\dfrac{36.5}{740}}.$$

The ratio $\frac{1-x}{x} = \frac{0.92}{0.08} = 11.5$ and $\frac{\rho_g}{\rho_f} = 0.0493$, so the denominator is $1 + 11.5\times 0.0493 = 1 + 0.567 = 1.567$:

$$\alpha = \frac{1}{1.567} \approx 0.64.$$

*Check.* Dimensionless ✓, and $0 < \alpha < 1$ ✓. At just 8% quality the channel is already ~64% vapor by area — the steep low-$x$ climb of $\alpha(x)$ driven by the ~20:1 density ratio. With real slip ($S>1$) the vapor moves faster, holds less area, and $\alpha$ would come out somewhat *lower* — the correction 3.3 adds. By this lesson's rule of thumb, $\alpha\approx 0.64$ already means annular flow. ✓

</details>

## Connections

- **Backward:** the regime is read off the [3.3](03-03-quality-void-fraction-slip.md) state variables — void $\alpha$, quality $x$, slip $S$ — and the sequence *starts* at the onset of nucleate boiling from [3.2](03-02-onset-nucleate-boiling-subcooled.md), where the first bubbles cling to the wall. Superficial velocity is just mass flux $G$ from [2.1](02-01-coolant-energy-balance-bulk-temperature.md) split between the phases.
- **Forward:** [3.5 Two-phase pressure drop](03-05-two-phase-pressure-drop.md) needs the regime because the two-phase friction multiplier $\phi^2$ and the acceleration term depend on the arrangement — annular flow, with a fast vapor core shearing a wall film, carries the highest wall shear. [3.6 Critical heat flux](03-06-critical-heat-flux-dnb.md) splits CHF into two regimes' failures: **DNB** in bubbly/subcooled flow (PWR) and **dryout** in annular flow (BWR) — the film-budget picture from Example 1 and P3.
- **Sideways:** a flow-regime map is a *phase diagram for flow geometry*, the same kind of look-up as the pressure–temperature phase diagram for a pure substance in [`engineering-thermodynamics` 1.2](../../engineering-thermodynamics/lessons/01-02-phase-behavior-pure-substance.md) — except the "phases" here are arrangements (bubbly, slug, annular) rather than solid/liquid/gas. And the bottom-to-top boiling channel of Example 2 *is* the BWR core in cross-section, the reactor type surveyed in [`intro-nuclear-engineering` 4.5](../../intro-nuclear-engineering/lessons/04-05-reactor-types-nuclear-landscape.md).

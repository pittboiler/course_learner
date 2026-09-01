# Physical Oceanography · Lesson 1.1: Temperature, salinity and pressure — the state of seawater

> ⏱ ~15 min · Module 1: Seawater and its structure · Builds on: [`fluid-dynamics`](../../fluid-dynamics/syllabus.md) · Unlocks: [1.2](01-02-density-equation-of-state.md), [1.3](01-03-ts-diagrams-water-masses.md)

## Why this matters

Everything in this course is downstream of density, and density is a function of exactly three things: temperature, salinity and pressure. Get those three right and you can compute stratification, geostrophic currents, water-mass origin, sound speed and the freezing point. Get them subtly wrong — and there are two classic ways to get them subtly wrong, one for temperature and one for salinity — and your deep ocean will appear to be upside down.

That is not a rhetorical flourish. Measure the raw temperature of the deep Pacific and it *increases* with depth below about 4000 m. Taken at face value, that says warm water sits under cold water, which would be violently unstable. It isn't; the thermometer is telling the truth and the interpretation is wrong. Fixing it is this lesson.

## The idea

**Temperature: the ocean squeezes itself warm.** Push a parcel of water down and the pressure compresses it. Compression does work on the parcel, and with no heat exchange that work goes into internal energy — the parcel warms. Nothing has been added; move it back up and the warming is undone. So the raw ("in-situ") thermometer reading at depth includes a bookkeeping artefact: part of it is just the pressure the parcel happens to be under.

The fix is the same one [atmospheric-science 1.4](../../atmospheric-science/lessons/01-04-potential-temperature.md) applies to air: define **potential temperature** $\theta$ as the temperature a parcel *would* have if brought adiabatically to the surface. That strips out the compression and leaves a property that only changes when the parcel actually exchanges heat. The effect is small in the ocean — about half a degree over 5 km — but so are the temperature differences in the abyss, so half a degree is the whole signal.

**Salinity: the ocean's salt is a fixed recipe.** Seawater contains many dissolved ions, but their *ratios* to one another are nearly constant everywhere — the same chloride-to-sodium-to-sulfate proportions in the Weddell Sea and the Bay of Bengal. That constancy is the gift that makes oceanography tractable: one number suffices. Measure any single property that scales with total salt content — in practice, electrical conductivity — and you have all of them.

**Pressure: depth in disguise.** Seawater is nearly incompressible, so pressure rises almost exactly linearly with depth. One decibar of pressure corresponds to almost exactly one metre. Oceanographers therefore use pressure *as* the vertical coordinate, and report profiles against decibars without apology.

**Conservative or not.** $\theta$ and $S$ share a property nothing else in the ocean has: away from the surface, they change **only by mixing**. No interior process creates or destroys salt, and (once compression is removed) none creates or destroys heat. Oxygen is consumed by respiration; nutrients are produced by remineralization; carbon-14 decays. Those are useful precisely because they are *not* conservative — they act as clocks. But $\theta$ and $S$ are the coordinates in which the ocean's plumbing is legible, which is why the next two lessons are built on them.

## The formal version

**Pressure as depth.** With the hydrostatic balance $dp/dz = -\rho g$ (from [`fluid-dynamics`](../../fluid-dynamics/syllabus.md)) and $\rho \approx 1025\ \mathrm{kg\,m^{-3}}$,

$$\frac{dp}{dz} = \rho g = 1025 \times 9.81 = 1.005\times10^{4}\ \mathrm{Pa\,m^{-1}} = 1.005\ \mathrm{dbar\,m^{-1}}.$$

*In words: one decibar per metre, to within half a percent.* ($1\ \mathrm{dbar} = 10^{4}\ \mathrm{Pa}$.) A profile labelled "2000 dbar" is at about 1990 m; the difference matters for precise work and never for intuition.

**The adiabatic lapse rate of seawater.** For a parcel moved adiabatically and without salt exchange, the first law plus the thermodynamic identity give

$$\Gamma \;\equiv\; \left(\frac{\partial T}{\partial z}\right)_{\text{adiabatic}} \;=\; \frac{\alpha\, g\, T}{c_p},$$

with $\alpha$ the thermal expansion coefficient (K⁻¹, defined properly in [1.2](01-02-density-equation-of-state.md)), $T$ the **absolute** temperature in kelvin, and $c_p \approx 3990\ \mathrm{J\,kg^{-1}\,K^{-1}}$ the specific heat.

*In words: how fast a parcel warms as you push it down, purely from being squeezed.*

Evaluate it for deep water, $T = 275\ \mathrm{K}$ and $\alpha = 1.6\times10^{-4}\ \mathrm{K^{-1}}$:

$$\Gamma = \frac{1.6\times10^{-4}\times 9.81 \times 275}{3990} = 1.08\times10^{-4}\ \mathrm{K\,m^{-1}} = 0.11\ \mathrm{K\,km^{-1}}.$$

About a tenth of a degree per kilometre. Note that $\Gamma \propto \alpha$, and $\alpha$ itself grows with pressure ([1.2](01-02-density-equation-of-state.md)), so the effect accelerates downward.

**Potential temperature.**

$$\boxed{\ \theta(S,T,p) \;=\; T \;-\; \int_{p_{\text{ref}}}^{p} \Gamma\, dp' \ }$$

*In words: the in-situ temperature minus all the adiabatic warming the parcel picked up on the way down; equivalently, what the thermometer would read after hauling the sample to the surface with no heat exchange.* The reference $p_{\text{ref}}$ is the surface unless stated otherwise. Because $\Gamma > 0$ always, $\theta < T$ always at depth.

**Salinity, in three vintages.** You will meet all three and they are not interchangeable.

| Quantity | Definition | Units | Typical open-ocean value |
|---|---|---|---|
| Practical salinity $S_P$ | conductivity ratio to a standard KCl solution, PSS-78 | **dimensionless** | 34.7 |
| Absolute salinity $S_A$ | mass of dissolved material per kg of seawater, TEOS-10 | g kg⁻¹ | 34.9 |
| Conservative temperature $\Theta$ | potential enthalpy divided by a fixed $c_p^0$ | °C | within 0.05 K of $\theta$ |

The bridge is $S_A \approx 1.0047\,S_P$ plus a small regional correction for the parts of the ocean where the recipe *isn't* quite constant (silicate-rich North Pacific deep water, mainly). Historical data and most working intuition are in $S_P$ and $\theta$; the modern standard is $S_A$ and $\Theta$. **This course uses $S$ for practical salinity and $\theta$ for potential temperature throughout**, which is the convention of every figure you will see reproduced from before about 2010.

**The constancy of composition** is why one number works. It has a name — the principle of constant proportions, or Marcet's principle — and a mechanism: the residence times of the major ions in the ocean (millions of years) are enormously longer than the ocean's mixing time (about 1000 years), so the ocean stirs the salts to uniformity thousands of times over before their sources and sinks can differentiate them. Everything with a *short* residence time — oxygen, nutrients, carbon — is therefore not uniform, and that is exactly what makes those tracers informative.

**The instrument.** A CTD (Conductivity–Temperature–Depth) profiler lowered on a wire returns $C$, $T$ and $p$ at centimetre vertical resolution, from which $S$, $\theta$ and $\rho$ are computed. Water bottles on the same frame close at chosen depths for anything the sensors can't measure. Accuracies: temperature $\pm 0.001$ K, salinity $\pm 0.002$, pressure $\pm 0.5$ dbar. Those numbers are worth remembering, because deep-ocean signals live right at the edge of them.

## Picture

![Deep Pacific profiles from 2000 to 5500 m. The blue curve, potential temperature, decreases monotonically downward from about 2.1 degrees to 1.1 degrees. The coral curve, in-situ temperature, decreases to a minimum of about 1.72 degrees near 4000 m and then increases downward to 1.86 degrees at 5500 m. The gap between the two curves at the bottom is the accumulated adiabatic offset of 0.76 degrees](assets/01-01-fig1.svg)

The coral curve is what the thermometer says. The blue curve is what the ocean means.

## Worked examples

**Example 1 (mechanical — undoing the squeeze).** A CTD reports $T = 1.86\,^\circ\mathrm{C}$ at $5500$ dbar in the deep Pacific. Estimate $\theta$, taking a depth-mean adiabatic lapse rate of $\Gamma = 1.39\times10^{-4}\ \mathrm{K\,m^{-1}}$ over the column.

Convert pressure to depth: $z \approx 5500/1.005 = 5473\ \mathrm{m}$.

$$\Delta = \Gamma z = 1.39\times10^{-4}\times 5473 = 0.76\ \mathrm{K},$$
$$\theta = T - \Delta = 1.86 - 0.76 = 1.10\,^\circ\mathrm{C}.$$

Now compare with the same station at 4000 m, where $T = 1.72\,^\circ\mathrm{C}$ and the accumulated offset is $0.52$ K, giving $\theta = 1.20\,^\circ\mathrm{C}$.

**In situ, the water at 5500 m is 0.14 K *warmer* than the water at 4000 m. In potential temperature it is 0.10 K *colder*.** The apparent inversion was entirely an artefact of compression, and the true stratification is the right way up.

**Example 2 (why you'd care — reading an ocean basin's plumbing).** Two deep stations, one in the North Atlantic at 3000 m and one in the North Pacific at 3000 m:

| | $\theta$ | $S$ | Oxygen | CFC-12 |
|---|---|---|---|---|
| N. Atlantic | 2.5 °C | 34.95 | 260 $\mu$mol kg⁻¹ | detectable |
| N. Pacific | 1.5 °C | 34.68 | 90 $\mu$mol kg⁻¹ | none |

What does this pair tell you, and which columns are doing the work?

*The conservative pair* $(\theta, S)$ says these are **different water masses** — not the same water at different times, but water that acquired different properties at the surface, at different places. Because $\theta$ and $S$ change only by mixing, the pair is an indelible label; [1.3](01-03-ts-diagrams-water-masses.md) turns this into a full identification method.

*The non-conservative pair* (oxygen, CFC) says something $(\theta,S)$ cannot: **which one was at the surface more recently.** Both were oxygen-saturated when they last touched the atmosphere. The Atlantic sample has retained most of that oxygen and carries chlorofluorocarbons, which did not exist before the 1930s; the Pacific sample has had two-thirds of its oxygen consumed by respiration and contains no CFCs at all. The Atlantic water is decades old, the Pacific water is centuries to a millennium old.

*The point.* The two kinds of tracer answer two different questions. Conservative properties tell you **where water came from**. Non-conservative properties tell you **when it left**. You need both, and confusing them is the commonest beginner's error in reading a hydrographic section. Module 4 builds the whole global overturning out of exactly this pairing.

## Watch out

- **You might think** the deep-Pacific temperature inversion means the water column is unstable. **Actually** stability is judged on *potential* density referenced to a nearby pressure ([1.2](01-02-density-equation-of-state.md), [1.4](01-04-stratification-buoyancy-frequency.md)), never on in-situ temperature. In-situ temperature increasing downward at $10^{-4}\ \mathrm{K\,m^{-1}}$ is exactly what a neutrally stratified, adiabatic column looks like.
- **You might think** practical salinity has units of parts per thousand. **Actually** PSS-78 salinity is a *ratio* and is formally dimensionless — "34.7", not "34.7 ppt" and not "34.7 psu" (the "psu" suffix is widespread but is not an SI unit and TEOS-10 deprecates it). Absolute salinity, in g kg⁻¹, is the one with genuine units.
- **You might think** the potential-temperature correction is negligible because it is only tenths of a degree. **Actually** whether it matters depends entirely on the signal you are chasing. In the thermocline, where $\theta$ falls 20 K over 1 km, a 0.1 K correction is noise. In the abyss, where the entire pole-to-pole $\theta$ contrast is under 2 K, it is the signal. The rule is to compare the correction to the *gradient you care about*, never to the absolute temperature.

## One-liner

> Seawater is fully specified by temperature, salinity and pressure — and the two that carry the ocean's memory are potential temperature and salinity, because in the interior they change only by mixing, which makes them the coordinates in which the whole circulation becomes readable.

## Problems

**P1 (🟢)** A mooring records $T = 4.100\,^\circ\mathrm{C}$ at 2000 dbar. Take $\alpha = 1.55\times10^{-4}\ \mathrm{K^{-1}}$, $c_p = 3990\ \mathrm{J\,kg^{-1}\,K^{-1}}$, $g = 9.81\ \mathrm{m\,s^{-2}}$ and treat $\Gamma$ as constant over the column. (a) Compute $\Gamma$ in K km⁻¹. (b) Convert 2000 dbar to depth. (c) Compute $\theta$.

**P2 (🟡)** Two samples from the same station: sample A at 1000 dbar has $T = 4.30\,^\circ\mathrm{C}$, and sample B at 3000 dbar has $T = 2.50\,^\circ\mathrm{C}$. Use $\Gamma = 1.1\times10^{-4}\ \mathrm{K\,m^{-1}}$ throughout. (a) Compute $\theta$ for both. (b) A colleague claims the two samples could be the same water mass, one parcel of which has simply sunk from 1000 m to 3000 m without exchanging heat. Test the claim quantitatively and state your verdict.

**P3 (🔴, optional)** The ocean's mixing time is about 1000 years and the residence time of sodium is about $7\times10^{7}$ years. (a) Explain in two sentences why this ratio is what makes a single salinity number sufficient. (b) Dissolved silicate has a residence time of about $1.5\times10^{4}$ years and is strongly depleted at the surface by diatoms. Predict qualitatively whether silicate is uniform in the deep ocean, and whether it is more useful as a water-mass label or as an age indicator. (c) The North Pacific deep water is the one place where the constant-proportions assumption measurably fails, and $S_A/S_P$ departs from 1.0047 by up to 0.02 g kg⁻¹. Given (b), propose the culprit.

<details>
<summary>Solutions</summary>

**P1** (a) Absolute temperature $T = 4.100 + 273.15 = 277.25\ \mathrm{K}$:

$$\Gamma = \frac{\alpha g T}{c_p} = \frac{1.55\times10^{-4}\times 9.81\times 277.25}{3990} = \frac{0.42155}{3990} = 1.0565\times10^{-4}\ \mathrm{K\,m^{-1}},$$

so $\Gamma = 0.106\ \mathrm{K\,km^{-1}}$.

(b) $z = 2000/1.005 = 1990\ \mathrm{m}$.

(c) $$\Delta = 1.0565\times10^{-4}\times 1990 = 0.210\ \mathrm{K}, \qquad \theta = 4.100 - 0.210 = 3.890\,^\circ\mathrm{C}.$$

**P2** (a) Depths: $1000\ \mathrm{dbar} \to 995\ \mathrm{m}$ and $3000\ \mathrm{dbar} \to 2985\ \mathrm{m}$.

$$\theta_A = 4.30 - (1.1\times10^{-4})(995) = 4.30 - 0.109 = 4.19\,^\circ\mathrm{C},$$
$$\theta_B = 2.50 - (1.1\times10^{-4})(2985) = 2.50 - 0.328 = 2.17\,^\circ\mathrm{C}.$$

(b) The claim is that A, moved adiabatically from 995 m to 2985 m, would become B. An adiabatic displacement conserves $\theta$ exactly — that is the entire point of the variable. So the test is simply whether $\theta_A = \theta_B$:

$$\theta_A - \theta_B = 4.19 - 2.17 = 2.02\ \mathrm{K}.$$

**Verdict: the claim fails, and it fails by a factor of about twenty.** The adiabatic warming available over that displacement is $0.219$ K; the observed in-situ difference is $1.80$ K. To reconcile them, sample A would have to lose about 1.8 K of actual heat, which is not an adiabatic displacement but a genuine cooling. Comparing raw temperatures ($4.30$ vs $2.50$) would have made the discrepancy look like $1.80$ K; comparing potential temperatures makes it $2.02$ K and — more importantly — makes it *interpretable*, because $\theta$ differences are real property differences with no pressure contamination in them.

**P3** (a) A dissolved constituent is stirred to uniformity if the ocean mixes it around faster than its sources and sinks can create regional differences. Sodium's residence time exceeds the mixing time by a factor of $7\times10^{4}$, so any parcel of seawater has been mixed through the whole ocean tens of thousands of times before its sodium is appreciably added to or removed — hence the ion ratios are constant and a single scalar (total salt, measured as conductivity) captures the entire composition.

(b) The ratio is now $1.5\times10^{4}/10^{3} = 15$, only fifteen mixing times. That is far too short for uniformity, and the strong biological surface sink guarantees a large vertical gradient: silicate is near zero at the surface and rises to $150\ \mathrm{\mu mol\,kg^{-1}}$ or more in the deep North Pacific. It is therefore **not** conservative, so it is a poor water-mass label taken alone — but its steady accumulation along the deep flow path makes it an excellent **age and pathway indicator**, and in practice it is used exactly that way (silicate is the classic tracer distinguishing Antarctic Bottom Water from North Atlantic Deep Water).

(c) The culprit is silicate itself, together with the other non-conservative nutrients. The deep North Pacific is the **oldest** water in the ocean — the far end of the global conveyor — so it has accumulated the most remineralized material: silicate, nitrate, phosphate and dissolved inorganic carbon. This material contributes mass to $S_A$ but is very poorly detected by conductivity, because dissolved silica is largely uncharged at seawater pH and therefore nearly invisible to a conductivity cell. So $S_P$ systematically underestimates the true dissolved mass exactly where nutrients are highest, which is precisely the anomaly TEOS-10's regional correction was built to repair.

*Check.* Note the pleasing consistency: the same fact — old water accumulates remineralized nutrients — appears in (b) as a *useful* tracer signal and in (c) as an *error* in a different measurement. That is generic. One field's signal is another's systematic bias.

</details>

## Connections

- **Backward:** the hydrostatic balance converting pressure to depth is [`fluid-dynamics`](../../fluid-dynamics/syllabus.md)'s; the potential-temperature construction is the ocean's copy of [atmospheric-science 1.4](../../atmospheric-science/lessons/01-04-potential-temperature.md), with the crucial difference that here the correction is a tenth of a degree per kilometre rather than ten degrees.
- **Forward:** $(\theta, S, p)$ are the three arguments of the equation of state in [1.2](01-02-density-equation-of-state.md); the conservative pair $(\theta,S)$ becomes the axes of the T–S diagram in [1.3](01-03-ts-diagrams-water-masses.md) and the identification method of [4.1](04-01-water-masses-world-ocean.md); the non-conservative tracers become the age clocks of [4.1](04-01-water-masses-world-ocean.md) and the observing systems of [6.5](06-05-observing-the-ocean.md).
- **Sideways (thermodynamics):** $\Gamma = \alpha g T/c_p$ is a pure thermodynamic identity, not an oceanographic fact — it follows from $ds = 0$ and a Maxwell relation, and the atmospheric dry adiabatic lapse rate $g/c_p$ is the same expression with the ideal-gas value $\alpha = 1/T$ substituted. See [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md).

# Atmospheric Science · Lesson 6.3: Tropical cyclones & the tropics

> ⏱ ~15 min · Module 6: Weather systems & forecasting · Builds on: [6.1 The atmospheric boundary layer](06-01-atmospheric-boundary-layer.md), [5.2 Potential vorticity](05-02-potential-vorticity.md) · Unlocks: 6.4 (observing the atmosphere), [`climate-science`](../../climate-science/syllabus.md)

## Why this matters

The hurricane has appeared as an example in nine lessons of this course and been the subject of none. It deserves one, because it is the atmosphere's most efficient machine and because it works on a principle nothing else in this course uses. A mid-latitude cyclone ([4.5](04-05-air-masses-fronts-cyclones.md)) *redistributes* energy that a temperature gradient had already stored, and dies when it has finished doing so. A tropical cyclone **manufactures** its own energy from a reservoir that is continuously replenished — the thermodynamic disequilibrium between a warm ocean and the air above it — and can therefore run for two weeks. Treating it as a Carnot engine gives a genuine prediction of its maximum wind, from three temperatures and a thermodynamic argument. The tropics more broadly work differently too: with $f$ small, geostrophy fails, and the organizing principle becomes heating rather than balance.

## The idea

**Why the tropics are different.** Two facts follow from being near the equator. First, $f$ is small, so by [4.3](04-03-geostrophic-gradient-wind.md) geostrophic balance is weak or absent and horizontal temperature gradients cannot be sustained — the free troposphere is nearly *isothermal* along any given pressure surface across the whole tropical belt. Second, with no temperature gradients to store available potential energy, there is no baroclinic instability. Tropical weather is therefore organized not by balance and instability but by **where the heating is**, which means by where the deep convection is.

**The hurricane as a heat engine.** Follow a parcel around the storm. It spirals inward along the sea surface at high speed, and as it goes it picks up heat and moisture from the ocean *at nearly constant temperature* — the sea is a huge thermal reservoir at about 300 K. Reaching the eyewall, it ascends, its moisture condensing and releasing latent heat, and it does so nearly adiabatically. At the tropopause it flows outward and radiates its heat to space at about 200 K. Then it sinks and returns.

Isothermal heat intake, adiabatic expansion, isothermal heat rejection, adiabatic compression: **that is a Carnot cycle**, and its efficiency is $(T_s - T_o)/T_s = 100/300 = 33$ percent. The work the cycle produces goes into maintaining the winds against surface friction — and the same friction is what drives the evaporation that supplies the heat. That closed loop is the storm.

**The feedback, named.** Stronger winds pull more heat and moisture from the sea; more heat means more latent release in the eyewall; more release means a warmer core, a lower central pressure, and stronger winds. This is **WISHE** — Wind-Induced Surface Heat Exchange — and it is why hurricanes intensify explosively once started and why they need warm water, not merely warm air. It also explains the sharp cut-offs: below about 26.5 °C sea surface temperature the reservoir is too weak; over land the reservoir is gone entirely, and a hurricane weakens within hours.

**The warm core, and what it does.** Latent heat released in the eyewall warms the column, and by the hypsometric relation of [1.2](01-02-hydrostatic-equation-barometric-law.md) a warm column is a *thick* column, so the pressure surfaces bulge upward over the centre. That means the horizontal pressure gradient — and hence the wind — *weakens* with height and eventually reverses. A hurricane is intense at the surface and crowned by an **anticyclone** aloft. A mid-latitude cyclone, with its cold core, does the opposite and strengthens with height. That single difference is diagnostic, and it follows directly from thermal wind ([4.4](04-04-thermal-wind-general-circulation.md)).

## The formal version

**Formation criteria.** All must be satisfied:

| Requirement | Threshold | Why |
|---|---|---|
| Sea surface temperature | $\ge 26.5\ ^\circ\mathrm{C}$ through the top 50 m | enough enthalpy in the reservoir |
| Latitude | $\lvert\phi\rvert \gtrsim 5^\circ$ | non-zero $f$ to seed rotation ([5.1](05-01-vorticity-circulation.md), Example 2) |
| Vertical wind shear | $\lesssim 10\ \mathrm{m\,s^{-1}}$ over 0–12 km | shear tilts and ventilates the warm core, destroying it |
| Mid-level humidity | high | dry air entrained into the eyewall kills convection by evaporative cooling |
| Pre-existing disturbance | e.g. an easterly wave | something to organize the convection |

Note that shear is required to be **small** — the exact opposite of [6.2](06-02-mesoscale-convection-thunderstorms-tornadoes.md)'s supercell requirement. A supercell needs its updraft separated from its downdraft; a hurricane needs its warm core stacked vertically and undisturbed.

**Structure.**

| Feature | Scale | Description |
|---|---|---|
| Eye | 20–60 km across | subsiding, warm, nearly cloud-free; lowest pressure |
| Eyewall | 10–20 km wide ring | the deep convection; strongest winds at the **radius of maximum wind** |
| Rainbands | spiral, out to 300 km | outer convection |
| Outflow anticyclone | 500–1000 km | at the tropopause, the exhaust |

**Carnot efficiency.** With intake at the sea surface temperature $T_s$ and rejection at the outflow temperature $T_o$,

$$\varepsilon = \frac{T_s - T_o}{T_s} = \frac{300 - 200}{300} = 0.33.$$

*In words: a third of the heat drawn from the sea can be converted into the kinetic energy of the wind.* That is a remarkably high efficiency for a natural engine — comparable to a car engine — and it is why hurricanes are so violent.

**Potential intensity.** Equating the rate at which the cycle generates energy to the rate at which surface friction dissipates it, Emanuel's result is

$$\boxed{\ V_{\max}^2 = \frac{C_k}{C_D}\cdot\frac{T_s - T_o}{T_o}\cdot\Delta k\ }$$

where $C_k$ and $C_D$ are the surface exchange coefficients for enthalpy and momentum, and $\Delta k = k_0^* - k$ is the **air–sea enthalpy disequilibrium** — how much more enthalpy saturated air at the sea temperature holds than the actual near-surface air. Evaluating with $C_k/C_D = 0.9$, $(T_s-T_o)/T_o = 100/200 = 0.5$, and $\Delta k = 10^{4}\ \mathrm{J\,kg^{-1}}$:

$$V_{\max} = \sqrt{0.9\times0.5\times10^{4}} = \sqrt{4500} = 67\ \mathrm{m\,s^{-1}},$$

which is 241 km h⁻¹ — a **Category 4** hurricane. Real storms usually fall short of their potential intensity (shear, dry air, ocean cooling by the storm's own mixing), so PI acts as a ceiling; storms that reach it are the ones that undergo rapid intensification.

Note the ratio $(T_s-T_o)/T_o$, not the Carnot $(T_s-T_o)/T_s$ — the extra factor arises because the dissipated heat is itself recycled into the cycle at the sea surface.

**Monsoons.** A monsoon is a **seasonally reversing** circulation driven by the contrast in heat capacity between land and ocean: land warms and cools far faster, so in summer a continent becomes a heat low that draws in moist maritime air, and in winter a cold high that pushes dry air offshore. It is a sea breeze on a continental scale, with Coriolis turning the flow. The Asian monsoon is amplified by the Tibetan Plateau, which heats an elevated surface directly in the mid-troposphere, and it is inseparable from the seasonal migration of the ITCZ ([4.4](04-04-thermal-wind-general-circulation.md)) that follows the insolation maximum of [3.5](03-05-solar-geometry-seasons-insolation.md).

**Easterly waves.** Weak troughs propagating westward in the trade winds off Africa, spaced every 3 to 5 days. Roughly 60 percent of Atlantic tropical cyclones and nearly all major hurricanes begin as one, which is why forecasters watch the African coast in August. (The interannual modulation of all this by ENSO belongs to [`oceanography`](../../oceanography/syllabus.md) and [`climate-science`](../../climate-science/syllabus.md), which own that coupled-mode physics.)

## Picture

![A hurricane as a Carnot engine: inflow spiralling along a 300 K sea surface gaining heat, ascending through the eyewall towers with subsidence in the clear eye between them, and outflow at a 200 K tropopause layer shedding heat to space, with the efficiency and the WISHE feedback labelled](assets/06-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — potential intensity in a warming ocean).** A storm's environment has $T_s = 302$ K, $T_o = 200$ K, $C_k/C_D = 0.9$ and $\Delta k = 1.1\times10^{4}\ \mathrm{J\,kg^{-1}}$. (a) Compute the Carnot efficiency and the potential intensity. (b) The sea warms by 1 K, raising $\Delta k$ to $1.2\times10^{4}$ (by Clausius–Clapeyron, the saturation enthalpy rises steeply). Recompute.

(a) $$\varepsilon = \frac{302-200}{302} = 0.338, \qquad V_{\max} = \sqrt{0.9\times\frac{102}{200}\times1.1\times10^{4}} = \sqrt{0.9\times0.51\times1.1\times10^{4}} = \sqrt{5049} = 71\ \mathrm{m\,s^{-1}}.$$

(b) With $T_s = 303$ K and $\Delta k = 1.2\times10^{4}$:

$$V_{\max} = \sqrt{0.9\times\frac{103}{200}\times1.2\times10^{4}} = \sqrt{0.9\times0.515\times1.2\times10^{4}} = \sqrt{5562} = 74.6\ \mathrm{m\,s^{-1}}.$$

*Interpretation.* One kelvin of ocean warming raises the potential intensity by 3.6 m s⁻¹, about 5 percent. Since damage scales roughly as $V^3$, that is a **16 percent increase in destructive potential** per kelvin. The dominant term is not the efficiency (which barely moved, 0.338 to 0.340) but $\Delta k$ — the disequilibrium — because saturation enthalpy climbs with the Clausius–Clapeyron steepness of [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md). This is why the projected response of tropical cyclones to warming is *stronger storms* rather than *more* storms, and it is quantified in [`climate-science`](../../climate-science/syllabus.md).

**Example 2 (why you'd care — the warm core, read off a thermal-wind argument).** A hurricane has a surface wind of 60 m s⁻¹ at a 40 km radius. Its core is 10 K warmer than its surroundings, averaged through the troposphere, over a horizontal distance of 200 km. Estimate how the wind changes with height at 20°N, and interpret.

At 20°N, $f = 1.4584\times10^{-4}\sin20^\circ = 4.99\times10^{-5}\ \mathrm{s^{-1}}$. Using the thermal-wind shear formula of [4.4](04-04-thermal-wind-general-circulation.md) with $\overline{T} = 250$ K:

$$\frac{\partial V}{\partial z} = \frac{g}{fT}\left|\frac{\partial T}{\partial n}\right| = \frac{9.81}{4.99\times10^{-5}\times250}\times\frac{10}{2\times10^{5}} = 786.4\times5.0\times10^{-5} = 3.93\times10^{-2}\ \mathrm{s^{-1}}.$$

Over 12 km of troposphere that is a change of $3.93\times10^{-2}\times1.2\times10^{4} = 472\ \mathrm{m\,s^{-1}}$ in magnitude — absurd as a literal number, and the absurdity is informative twice over.

*First, the sign.* The warm air is at the *centre*, so the thermal wind opposes the surface cyclonic flow, and the wind must **weaken rapidly with height** — reaching zero and reversing into the outflow anticyclone. That is the correct and observed structure, and it is the exact opposite of the cold-core mid-latitude cyclone whose westerlies *strengthen* with height ([4.4](04-04-thermal-wind-general-circulation.md)).

*Second, the magnitude.* 472 m s⁻¹ is nonsense because thermal wind assumes **geostrophic** balance, and at $\mathrm{Ro} = V/(fL) = 60/(4.99\times10^{-5}\times4\times10^{4}) = 30$ the hurricane is nowhere near geostrophic — it is in gradient-wind or cyclostrophic balance ([4.3](04-03-geostrophic-gradient-wind.md)). The correct version is the *gradient*-wind thermal relation, which includes the centrifugal term and gives a far smaller shear.

*The lesson.* A formula applied outside its Rossby-number regime gives the right qualitative answer — warm core means the wind decays upward — and a quantitatively meaningless one. Knowing which half to trust is the skill Module 4's scale analysis was for.

## Watch out

- **You might think** a hurricane is a tropical version of a mid-latitude cyclone. **Actually** they are opposite machines. Hurricane: warm core, winds strongest at the surface, energy manufactured from an ocean reservoir, killed by shear, needs warm water. Mid-latitude cyclone: cold core, winds strongest aloft, energy borrowed from a pre-existing temperature gradient, *created* by shear, needs a temperature contrast. Almost every property inverts.
- **You might think** the storm needs warm *air*. **Actually** it needs warm **water** — a reservoir with enormous heat capacity that the storm cannot exhaust in a few hours. A hurricane moving over cool water or over land weakens within a day even if the air temperature is unchanged, and even a slow-moving storm can weaken itself by churning cold water up from below.
- **You might think** the eye is calm because it is the centre. **Actually** it is calm because it is **subsiding** — air from the outflow descends there, warming adiabatically ([1.3](01-03-adiabatic-parcels-dry-lapse-rate.md)) and evaporating the cloud. That subsidence warming is a large part of what makes the core warm and the central pressure so low.
- **You might think** the Saffir–Simpson category measures a storm's destructiveness. **Actually** it measures only the maximum sustained wind. Storm surge scales with the storm's *size* and forward speed as much as its peak wind, and freshwater flooding depends on rainfall and terrain. Several of the deadliest recent storms were low-category and enormous.

## One-liner

> A hurricane is a Carnot engine drawing heat from a 300 K sea and rejecting it at a 200 K tropopause at 33 percent efficiency — its own winds drive the evaporation that fuels it, so it intensifies until friction or the loss of the reservoir stops it.

## Problems

**P1 (🟢)** A storm has $T_s = 301$ K and an outflow temperature of 203 K. (a) Compute its Carnot efficiency. (b) Compute the ratio $(T_s-T_o)/T_o$ that appears in the potential-intensity formula, and say why it is the larger of the two.

**P2 (🟡)** Compute the potential intensity for $C_k/C_D = 0.85$, $T_s = 299$ K, $T_o = 205$ K, and $\Delta k = 9\times10^{3}\ \mathrm{J\,kg^{-1}}$. (a) Give $V_{\max}$ in m s⁻¹ and km h⁻¹. (b) Which Saffir–Simpson category is that (Cat 1: 33–42; Cat 2: 43–49; Cat 3: 50–58; Cat 4: 58–70; Cat 5: over 70 m s⁻¹)? (c) The environment has 15 m s⁻¹ of deep-layer shear. What do you expect the storm to actually achieve, and why?

**P3 (🔴, optional)** A hurricane's eye subsides. Air from the outflow layer at 200 hPa and 200 K descends dry-adiabatically to 950 hPa in the eye. (a) Compute its potential temperature and its temperature on arrival. (b) The environmental air at 950 hPa outside the storm is 300 K. Compare, and comment on whether the subsidence alone explains the warm core. (c) Explain what is wrong with the calculation as a model of the real eye, and name the process that actually limits the descent.

<details>
<summary>Solutions</summary>

**P1** (a) $$\varepsilon = \frac{T_s-T_o}{T_s} = \frac{301-203}{301} = \frac{98}{301} = 0.326.$$

(b) $$\frac{T_s-T_o}{T_o} = \frac{98}{203} = 0.483.$$

The second is larger because it divides by the *smaller* temperature. Physically, the extra factor of $T_s/T_o = 1.48$ appears in the potential-intensity derivation because the kinetic energy dissipated by surface friction is turned back into heat **at the sea surface**, where the cycle can pick it up again. The storm recycles its own dissipation — a genuine feature, not a bookkeeping trick, and it raises the achievable wind by about 22 percent over the naive Carnot estimate.

**P2** (a) $$V_{\max} = \sqrt{0.85 \times \frac{299-205}{205} \times 9\times10^{3}} = \sqrt{0.85 \times 0.4585 \times 9\times10^{3}} = \sqrt{3508} = 59.2\ \mathrm{m\,s^{-1}},$$

which is $59.2 \times 3.6 = 213\ \mathrm{km\,h^{-1}}$.

(b) 59.2 m s⁻¹ falls in the **Category 4** band (58–70 m s⁻¹), just above the threshold.

(c) **Considerably less — probably Category 1 or 2, or no development at all.** Deep-layer shear of 15 m s⁻¹ exceeds the roughly 10 m s⁻¹ tolerance: shear tilts the vortex, so the warm core is displaced from the low-level circulation and ventilated by drier environmental air, which cuts the eyewall's latent heat release. Potential intensity is a **ceiling** set by thermodynamics; shear is the most common reason storms fall far below it. This is why intensity forecasts improved much more slowly than track forecasts — the track depends on the large-scale steering flow, which models handle well, while the intensity depends on this shear-and-dry-air competition at the storm's own scale.

**P3** (a) With $\kappa = 0.286$ and $p_0 = 1000$ hPa:

$$\theta = 200\left(\frac{1000}{200}\right)^{0.286} = 200 \times 5^{0.286} = 200 \times 1.5842 = 316.8\ \mathrm{K}.$$

Descending adiabatically conserves $\theta$, so at 950 hPa:

$$T = 316.8\left(\frac{950}{1000}\right)^{0.286} = 316.8 \times 0.98543 = 312.2\ \mathrm{K}.$$

(b) The descended air arrives at 312 K against an environment at 300 K — **12 K warmer**. So subsidence from the outflow layer *can*, in principle, produce a warm core of the observed magnitude, and this is a real contribution.

(c) Two things are wrong. First, the calculation assumes the air descends **all the way** from 200 hPa to the surface, which it does not: the eye's subsidence is slow and is opposed by the fact that the descending air becomes ever warmer and therefore ever more positively buoyant relative to its surroundings — exactly the subsidence-inversion resistance of [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)'s flashback. Second, it is **dry** adiabatic, but the lower eye is capped by a low stratocumulus deck and the boundary layer beneath it is moist, so the bottom kilometre is not following a dry adiabat at all.

What actually limits the descent is that a **hydrostatic balance must be maintained** between the eye and the eyewall: the eye's temperature profile adjusts until its column weight matches the central pressure that the eyewall's gradient-wind balance demands. The subsidence is a *consequence* of that constraint, not a free process — which is why the eye's warmth and the storm's central pressure are two views of the same thing, and why measuring the eye temperature from a reconnaissance aircraft gives the intensity.

</details>

## Flashback

**From Lesson 5.2 (Potential vorticity):** A column of air 7 km deep at 30°N has $\zeta = 0$. It is stretched to 10 km by deep convection while remaining at 30°N. (a) Compute its new relative vorticity. (b) Estimate the tangential wind at a 100 km radius, taking $\zeta \approx 2V/r$.

<details>
<summary>Solution</summary>

(a) At 30°N, $f = 1.4584\times10^{-4}\times0.5 = 7.292\times10^{-5}\ \mathrm{s^{-1}}$. Conserving $(\zeta+f)/h$:

$$\zeta + f = 7.292\times10^{-5}\times\frac{10}{7} = 1.0417\times10^{-4}\ \mathrm{s^{-1}},$$

$$\zeta = 1.0417\times10^{-4} - 7.292\times10^{-5} = 3.13\times10^{-5}\ \mathrm{s^{-1}} \quad\text{(cyclonic)}.$$

(b) $$V = \frac{\zeta r}{2} = \frac{3.13\times10^{-5}\times10^{5}}{2} = 1.56\ \mathrm{m\,s^{-1}}.$$

*Check.* Only 1.6 m s⁻¹ — a very weak circulation, far from a tropical storm. That is the honest scale of what a *single* episode of stretching achieves, and it shows why tropical cyclogenesis takes days: it requires sustained, repeated convective stretching over a large area, each cycle amplifying the last, as [5.1](05-01-vorticity-circulation.md)'s Example 2 modelled with exponential growth. Note also the role of $f$ at 30°N as the seed; at the equator this calculation yields exactly zero however much you stretch, which is the 5-degree rule again.

</details>

## Connections

- **Backward:** the Carnot cycle is [`thermodynamics-physics` 2.1](../../thermodynamics-physics/lessons/02-01-heat-engines-carnot-cycle.md)'s applied to a storm; the surface enthalpy flux is [6.1](06-01-atmospheric-boundary-layer.md)'s $LE$; the warm-core wind structure is [4.4](04-04-thermal-wind-general-circulation.md)'s thermal wind with the sign reversed; and the vortex is built by the diabatic PV generation of [5.2](05-02-potential-vorticity.md), P3.
- **Forward:** [6.4](06-04-observing-the-atmosphere.md) covers the satellite and reconnaissance methods used to estimate intensity; [`climate-science`](../../climate-science/syllabus.md) takes the potential-intensity formula and asks what a warming ocean does to it.
- **Sideways (oceanography):** the storm's own winds mix cold water up from below, cooling the reservoir and limiting its own intensity — an ocean-atmosphere feedback developed in [`oceanography`](../../oceanography/syllabus.md), which also owns ENSO and its strong modulation of Atlantic hurricane seasons.

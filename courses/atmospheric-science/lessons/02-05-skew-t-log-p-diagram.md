# Atmospheric Science · Lesson 2.5: The skew-T log-p diagram

> ⏱ ~15 min · Module 2: Moisture, clouds & stability · Builds on: [2.4 Stability, parcel theory & CAPE](02-04-stability-parcel-theory-cape.md), [2.1 Humidity variables](02-01-humidity-variables.md) · Unlocks: 2.6 (cloud classification), 6.4 (observing the atmosphere)

## Why this matters

Lesson 2.4 computed a sounding's CAPE by integrating buoyancy numerically. No forecaster has ever done that. They plot the sounding on one chart — the **skew-T log-p diagram** — and read the LCL, LFC, EL, CAPE and CIN off it by eye in about fifteen seconds. This is the characteristic literacy of the subject, the way a geologic map is the characteristic literacy of geology, and it is worth a lesson on its own because the diagram is *designed*: every choice in its construction, including the odd 45-degree skew that gives it its name, exists to make a particular physical quantity readable. Understand the design and the chart stops being a thicket of coloured lines.

## The idea

Start with the obvious plot: temperature horizontally, pressure vertically. Two immediate problems.

**Problem one: the vertical axis.** Pressure falls exponentially with height, so a linear pressure axis crams the whole upper troposphere into a sliver at the top. Fix it by plotting against $-\ln p$ — which, since $z \approx -H\ln(p/p_0)$, makes the vertical axis very nearly **linear in height**. Now 500 hPa sits halfway up, where it belongs.

**Problem two: everything is parallel.** On that plot, isotherms are vertical lines and dry adiabats lean only slightly off vertical. A parcel path and an isotherm look almost the same, and the small angle between them is exactly the thing you are trying to measure. Precision is wasted on a chart where the interesting lines nearly coincide.

The fix is the trick in the name: **skew the isotherms 45 degrees to the right**. Slide every row of the chart rightward in proportion to its height. Isotherms, which were vertical, now run diagonally up-right; dry adiabats, which leaned left of vertical, now lean strongly up-*left*. The angle between them opens to nearly 90 degrees, and the eye can finally judge which of the two a sounding is following.

**And the payoff you might have expected to lose, you keep.** Skewing is a *shear*, and a shear preserves area — its matrix has determinant 1 ([`linalg-refresher` 2.3](../../linalg-refresher/lessons/02-03-determinants.md)). Since area on the unskewed $T$ versus $-\ln p$ chart is proportional to energy, area on the skewed chart is proportional to energy too. **CAPE is still literally the area** between the parcel's path and the environment's temperature trace. That is why forecasters can eyeball a storm's severity: they are eyeballing an integral.

## The formal version

**Why area is energy.** From [2.4](02-04-stability-parcel-theory-cape.md), $\mathrm{CAPE} = \int g\,(T_v'-T_v)/T_v\,dz$. Use the hydrostatic equation and the gas law to change the variable of integration from height to pressure: $dz = -\dfrac{R_dT_v}{g\,p}\,dp = -\dfrac{R_dT_v}{g}\,d\ln p$. Substituting,

$$\boxed{\ \mathrm{CAPE} = -\int_{\ln p_{\mathrm{LFC}}}^{\ln p_{\mathrm{EL}}} R_d\,(T_v' - T_v)\,d\ln p\ }$$

*In words: CAPE is $R_d$ times the area between the parcel curve and the environment curve, on a chart whose axes are temperature and $-\ln p$.* Everything that made $z$ awkward has vanished; the constant out front is just $R_d$. A chart built on these two axes turns an energy integral into a shape you can look at.

**The five line families.** Every skew-T carries five sets of curves. Learn to tell them apart by their slope, and the chart becomes readable:

| Family | Appearance | What it is |
|---|---|---|
| **Isobars** | horizontal straight lines | constant pressure; labelled in hPa |
| **Isotherms** | straight, 45 degrees up to the *right* | constant temperature |
| **Dry adiabats** | curved, steeply up to the *left* | constant $\theta$ — the path of an unsaturated parcel |
| **Moist adiabats** | curved, up-left but *less* steep, straightening toward the dry adiabats at the cold top | the path of a saturated parcel |
| **Saturation mixing-ratio lines** | dashed, slightly up-right | constant $w_s$, labelled in g kg⁻¹ |

The moist adiabats bending toward the dry adiabats at low temperature is not a drawing convention — it is [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)'s result that $\Gamma_m \to \Gamma_d$ as $w_s \to 0$, drawn.

**Plotting a sounding.** A radiosonde reports $p$, $T$, $T_d$ and wind at each level. You plot **two traces**: temperature and dew point. Their separation *is* the dew-point depression, so at a glance you see where the air is moist (traces together) and where it is dry (traces far apart).

**The construction, step by step.** To lift a surface parcel:

1. From the surface temperature, follow a **dry adiabat** upward.
2. From the surface dew point, follow a **saturation mixing-ratio line** upward. (The parcel's actual mixing ratio is conserved, so this line tracks the saturation level its water content corresponds to.)
3. Where those two meet is the **LCL** — the parcel's temperature has fallen to its dew point. Cloud base.
4. From the LCL upward, follow a **moist adiabat**.
5. Where the moist adiabat first crosses to the *warm* side of the environment trace is the **LFC**; where it crosses back is the **EL**.
6. The area between the two curves is negative below the LFC (**CIN**) and positive above it (**CAPE**).

Step 3 is worth pausing on: it is the graphical version of [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)'s 125 m per kelvin rule. Two lines converging on the chart *are* the parcel's temperature falling at 9.8 K km⁻¹ and its dew point falling at 1.8.

**Wind and hodographs.** Wind barbs are plotted up the right-hand edge — a half barb is 5 knots, a full barb 10, a pennant 50. Whether the wind **veers** with height (warm advection, [4.4](04-04-thermal-wind-general-circulation.md)) is visible instantly. Replotting those same winds as a curve in the $u$–$v$ plane gives a **hodograph**, whose shape decides whether convection will organize into supercells — the subject of [6.2](06-02-mesoscale-convection-thunderstorms-tornadoes.md).

## Picture

![A skew-T log-p diagram with pressure on a logarithmic vertical axis from 1000 to 200 hPa and temperature skewed 45 degrees to the right, showing the dry adiabats as dotted curves, moist adiabats as solid faint curves and saturation mixing-ratio lines as dashed curves, with a plotted temperature and dew-point sounding, the lifted parcel path, the LCL, LFC and EL marked, and the CAPE area shaded between the parcel and the environment](assets/02-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — reading the plotted sounding).** The figure shows a surface parcel at 1000 hPa with $T = 28$ °C and $T_d = 19$ °C. Read off the LCL, LFC and EL, and check the LCL against the rule of thumb.

Following the construction: the dry adiabat from 28 °C and the mixing-ratio line from 19 °C meet at **878 hPa**, temperature 17 °C. That is the LCL, and converting with the hypsometric equation it sits at about **1125 m** — cloud base.

*Check against [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md).* Depression $= 28 - 19 = 9$ K, so $125 \times 9 = 1125$ m. Exact agreement, because the chart's converging lines and the 125 m rule are the same two slopes.

From the LCL the parcel follows a moist adiabat, crossing the environment trace at the **LFC near 761 hPa (2325 m)** and recrossing at the **EL near 228 hPa (11.4 km)**. The shaded area gives $\mathrm{CAPE} \approx 1870\ \mathrm{J\,kg^{-1}}$ with $\mathrm{CIN} \approx 120\ \mathrm{J\,kg^{-1}}$ — the same storm [2.4](02-04-stability-parcel-theory-cape.md) integrated numerically, now read off a chart.

**Example 2 (why you'd care — three sounding shapes and their weather).** The *shape* of the two traces is a diagnosis. Three archetypes cover most days:

*The **loaded gun**.* Traces close together near the surface (moist boundary layer), a warm dry layer just above (the two traces splay apart and $T$ briefly *rises* with height), then steep lapse rates aloft. The warm nose is the cap; the moist bottom is the fuel; the steep top is the instability. Large CAPE hidden under real CIN — [2.4](02-04-stability-parcel-theory-cape.md)'s severe-weather setup, and it is recognizable at a glance.

*The **saturated column**.* The two traces lie almost on top of each other from the surface to 400 hPa, running parallel to a moist adiabat. Saturated and neutrally stable through a great depth: no CAPE to speak of, but rain everywhere. This is a warm-frontal or tropical-maritime sounding — grey, wet, and completely unexciting.

*The **inverted-V**.* The traces diverge sharply downward: dry at the surface, moist aloft, with a steep near-dry-adiabatic low level. Rain falling into that dry layer evaporates, cooling the air and accelerating it downward. This is the high-plains **downburst** sounding — little rain reaches the ground, but the winds beneath it can exceed 30 m s⁻¹.

*The point.* None of the three required a calculation. A trained reader gets air-mass type, cloud base, storm potential and storm *mode* from the geometry of two curves, which is exactly what the chart was designed for.

## Watch out

- **You might think** the skew is cosmetic. **Actually** it is the whole point: unskewed, dry adiabats and isotherms differ by a small angle and the eye cannot resolve which one a sounding parallels. The 45-degree shear opens that angle to near 90 degrees while preserving area, so you lose nothing and gain resolution.
- **You might think** you follow a mixing-ratio line to find the LCL because the parcel's *saturation* mixing ratio is conserved. **Actually** it is the *actual* mixing ratio $w$ that is conserved on ascent; you follow the saturation line labelled with that value, and the LCL is where the parcel's falling temperature makes $w_s$ equal $w$. Saturation is achieved by the ceiling coming down, not the water going up.
- **You might think** dry adiabats and moist adiabats converge at the top by drawing convention. **Actually** it is physics: $\Gamma_m \to \Gamma_d$ as the air gets too cold to hold condensable water ([2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)). At −40 °C there is nothing left to condense and the two paths are the same path.
- **You might think** the parcel you lift should always be the surface one. **Actually** operational practice lifts several — the surface parcel, the mean parcel of the lowest 100 hPa, and the *most unstable* parcel in the lowest 300 hPa — because which parcel actually reaches its LFC depends on how the storm gets triggered. Quoting "the CAPE" without saying which parcel is ambiguous.

## One-liner

> The skew-T shears the isotherms 45 degrees to pull the adiabats apart — and because a shear preserves area, CAPE stays readable as the shaded region between the parcel and the sounding.

## Problems

**P1 (🟢)** A sounding has a surface temperature of 24 °C and a dew point of 8 °C at 1000 hPa. (a) Estimate the LCL height. (b) On the chart, which two line families do you follow from the surface to find it, and from which starting point does each one begin?

**P2 (🟡)** On a skew-T, a sounding's temperature trace runs exactly parallel to a moist adiabat from 900 to 600 hPa, and the dew-point trace lies on top of it. (a) What is the relative humidity in that layer? (b) Classify the layer's stability for a saturated parcel and for a dry parcel. (c) What weather would you expect, and what would you *not* expect?

**P3 (🔴, optional)** Show that skewing preserves area. Represent a point on the unskewed diagram by coordinates $(x, y) = (T, -\ln p)$, and let the skew be the map $(x, y) \mapsto (x + ky,\ y)$ for a constant $k$. (a) Write the matrix of this transformation and compute its determinant. (b) State what that determinant implies for CAPE read as an area. (c) Explain why a transformation that *scaled* the temperature axis instead — say $(x,y) \mapsto (2x, y)$ — would still allow CAPE to be read as an area, and what would have to change.

<details>
<summary>Solutions</summary>

**P1** (a) The dew-point depression is $24 - 8 = 16$ K, so

$$z_{\mathrm{LCL}} = 125 \times 16 = 2000\ \mathrm{m}.$$

A high cloud base — typical of a dry continental afternoon, and a warning sign for downbursts, since there is a deep sub-cloud layer for rain to evaporate into.

(b) From the surface **temperature** (24 °C) you follow a **dry adiabat** upward; from the surface **dew point** (8 °C) you follow a **saturation mixing-ratio line** upward. Their intersection is the LCL. The two starting points are different, which is the whole reason the construction works — one line tracks how fast the parcel cools, the other how fast its saturation threshold falls.

**P2** (a) The dew-point trace lying on the temperature trace means $T_d = T$, so $e = e_s$ and the relative humidity is **100 percent** — the layer is saturated throughout.

(b) The environment's lapse rate equals $\Gamma_m$ exactly. So:
- For a **saturated** parcel: **neutral**. A lifted saturated parcel cools at precisely the environment's rate and stays at the environment's temperature — no buoyancy either way, and it goes wherever it is put.
- For a **dry** parcel: **stable**, since $\Gamma = \Gamma_m < \Gamma_d$. But the point is moot: the layer is already saturated, so no parcel in it is dry.

(c) Expect **cloud and steady rain** through the layer — it is saturated over a 300 hPa depth, which is a deep nimbostratus deck. Do **not** expect thunderstorms: there is no CAPE, because a neutral layer stores no buoyant energy. This is the "saturated column" archetype of Example 2 — the wettest sounding shapes are often the least violent, which is a genuinely counter-intuitive fact worth carrying.

**P3** (a) The map $(x,y) \mapsto (x+ky,\ y)$ has matrix

$$M = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}, \qquad \det M = (1)(1) - (k)(0) = 1.$$

(b) A linear map multiplies areas by $|\det M|$ ([`linalg-refresher` 2.3](../../linalg-refresher/lessons/02-03-determinants.md)). Since $\det M = 1$, **areas are unchanged**. So the region between the parcel and environment curves has the same area before and after skewing, and $\mathrm{CAPE} = R_d \times (\text{that area})$ still holds exactly on the skewed chart. The skew buys angular resolution for free.

(c) A pure scaling $(x,y)\mapsto(2x,y)$ has matrix $\mathrm{diag}(2,1)$ and determinant 2, so it **doubles** every area. CAPE would still be proportional to the plotted area — but the constant of proportionality changes from $R_d$ to $R_d/2$. So you could still read CAPE off, provided you recalibrated. What matters is not that the determinant is 1 but that it is *constant*: any linear map rescales all areas by the same factor, so the correspondence between area and energy survives. The shear is chosen because that constant is exactly 1, which means no recalibration at all — and, more importantly, because a shear is the transformation that maximizes the angle between the isotherms and the adiabats.

*Check.* The composite of the two, a shear followed by a scaling, has determinant $1\times2 = 2$ — determinants multiply, so any chain of linear redrawings of the chart still leaves area proportional to energy.

</details>

## Flashback

**From Lesson 2.1 (Humidity variables):** A parcel at 1000 hPa has $T = 30$ °C and a mixing ratio of $w = 18\ \mathrm{g\,kg^{-1}}$. (a) Compute its virtual temperature. (b) The dry air beside it is also at 30 °C. Which parcel is denser, and what is the buoyancy in kelvin-equivalent terms?

<details>
<summary>Solution</summary>

(a) $$T_v = T(1 + 0.61w) = 303.15\,(1 + 0.61 \times 0.018) = 303.15 \times 1.01098 = 306.5\ \mathrm{K}.$$

(b) The **dry** parcel is denser. At equal pressure, density goes as $1/T_v$, and the moist parcel's virtual temperature is 3.3 K higher, so it is lighter by a factor $303.15/306.5$, that is by 1.1 percent.

In buoyancy terms the moist parcel behaves as though it were **3.3 K warmer** than its surroundings — a real push, comparable to the thermal excess that launches a thermal off a sunlit field, and obtained purely from the water it carries.

*Check.* The coefficient 0.61 is $(1-\varepsilon)/\varepsilon = 0.378/0.622$, so the virtual increment is $0.61\,wT = 0.61 \times 0.018 \times 303.15 = 3.33$ K, matching. This is exactly why [2.4](02-04-stability-parcel-theory-cape.md) insists on $T_v$ rather than $T$ in the CAPE integral: in a tropical sounding this correction is a substantial fraction of the total buoyancy.

</details>

## Connections

- **Backward:** the diagram is [2.4](02-04-stability-parcel-theory-cape.md)'s parcel theory drawn rather than integrated; the LCL construction is [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)'s converging slopes, and the two plotted traces are [2.1](02-01-humidity-variables.md)'s $T$ and $T_d$.
- **Forward:** [2.6](02-06-cloud-classification.md) reads the *clouds* that a given sounding shape produces; [6.2](06-02-mesoscale-convection-thunderstorms-tornadoes.md) adds the hodograph, which decides whether that CAPE becomes a shower or a supercell; [6.4](06-04-observing-the-atmosphere.md) covers the radiosonde that supplies the data.
- **Sideways (linear algebra):** the chart works because a shear has determinant 1, so it preserves area — the geometric reading of the determinant from [`linalg-refresher` 2.3](../../linalg-refresher/lessons/02-03-determinants.md), doing real work in an applied setting.

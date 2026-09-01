# Physical Oceanography · Lesson 1.2: Density and the nonlinear equation of state

> ⏱ ~15 min · Module 1: Seawater and its structure · Builds on: [1.1](01-01-temperature-salinity-pressure.md) · Unlocks: [1.3](01-03-ts-diagrams-water-masses.md), [1.4](01-04-stratification-buoyancy-frequency.md)

## Why this matters

Density is the ocean's master variable. It decides what floats on what, which is stratification; horizontal density gradients are pressure gradients, which is every current in Module 2; and buoyancy loss at the surface is what drives the deep circulation of Module 4. If seawater's density were a simple linear function of temperature and salinity, this lesson would be one line.

It isn't, and the departures are not a rounding error — they are physical mechanisms with names. **Cabbeling** lets you mix two water parcels of *identical* density and get something denser than both, which sinks. **Thermobaricity** lets two parcels swap which one is denser purely by being moved to a different depth. Both are direct consequences of the curvature of the equation of state, both matter for how the deep ocean fills, and neither exists in a linear world.

## The idea

**Two knobs and a squeeze.** Warm water is lighter; salty water is heavier; pressure compresses everything. Write those three sensitivities as coefficients and you have a linearized equation of state, which is accurate enough for most of the dynamics in this course and is the version you should carry in your head.

**But the temperature knob has a variable gear ratio.** The thermal expansion coefficient $\alpha$ — how much density you lose per degree of warming — is not a constant. It is about $0.5\times10^{-4}\ \mathrm{K^{-1}}$ in freezing polar water and about $3.3\times10^{-4}\ \mathrm{K^{-1}}$ in the tropics. **A factor of six.** Cooling tropical water by one degree changes its density six times more than cooling polar water by one degree. The haline coefficient $\beta$, by contrast, is nearly constant at $7.5$ to $7.8\times10^{-4}$. So all the interesting nonlinearity lives in temperature.

**Cabbeling: the mean of two things on a curve is not on the curve.** Lines of constant density on a temperature–salinity plot are curved, because their slope is $\alpha/\beta$ and $\alpha$ grows with temperature. Mix two parcels and the mixture sits at the arithmetic mean — a point on the *straight chord* between them. A straight chord across a curve does not lie on the curve. Here it lies on the dense side, so the mixture is denser than either parent and sinks. This is not a small effect at fronts, where warm and cold water of similar density are pressed together and mixed vigorously.

**Thermobaricity: the gear ratio also depends on pressure.** $\alpha$ increases with pressure — cold water especially becomes much more expandable when squeezed. Take a cold-fresh parcel and a warm-salty parcel with exactly equal density at the surface, and lower them both. The temperature contribution grows relative to the salinity contribution, and the **cold** one becomes the denser. Which parcel wins depends on where you ask, which is why "potential density" needs a reference pressure attached and why comparing abyssal water masses using a surface reference is wrong.

## The formal version

**The coefficients.** For $\rho = \rho(S,\theta,p)$,

$$\alpha \equiv -\frac{1}{\rho}\left(\frac{\partial\rho}{\partial\theta}\right)_{S,p}, \qquad \beta \equiv \frac{1}{\rho}\left(\frac{\partial\rho}{\partial S}\right)_{\theta,p}.$$

*In words: $\alpha$ is the fractional density loss per degree of warming, $\beta$ the fractional density gain per unit of salinity.* The minus sign in $\alpha$ is a convention that makes it positive for water warmer than about 4 °C, which is all seawater of oceanographic interest.

**The linearized equation of state.** About a reference state $(\theta_0, S_0, p_0)$,

$$\boxed{\ \rho \;\approx\; \rho_0\left[\,1 \;-\; \alpha\,(\theta-\theta_0) \;+\; \beta\,(S-S_0)\,\right]\ }$$

*In words: start from a reference density and adjust it down for warmth and up for salt.* Pressure is dropped because we will almost always compare parcels at the same depth, or use potential density (below). This course's standard reference set, used unless stated otherwise:

$$\rho_0 = 1026\ \mathrm{kg\,m^{-3}}, \quad \theta_0 = 15\,^\circ\mathrm{C}, \quad S_0 = 35, \quad \alpha = 2.0\times10^{-4}\ \mathrm{K^{-1}}, \quad \beta = 7.6\times10^{-4}.$$

**How badly $\alpha$ varies.** At the surface and $S = 35$:

| $\theta$ (°C) | 0 | 5 | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|---|---|
| $\alpha$ ($10^{-4}\ \mathrm{K^{-1}}$) | 0.52 | 1.14 | 1.67 | 2.14 | 2.57 | 2.97 | 3.34 |

Nearly linear in $\theta$ over this range, with slope about $0.10\times10^{-4}\ \mathrm{K^{-2}}$. That slope *is* the cabbeling effect.

**The $\sigma$ shorthand.** Seawater densities are all near $1027\ \mathrm{kg\,m^{-3}}$, so oceanographers subtract the leading 1000:

$$\sigma \equiv \rho - 1000\ \mathrm{kg\,m^{-3}}.$$

The important variants differ in what pressure they reference:

| Symbol | Definition | Used for |
|---|---|---|
| $\sigma_t$ | $\rho(S, T, 0) - 1000$ using *in-situ* $T$ | obsolete; still on old figures |
| $\sigma_\theta$ or $\sigma_0$ | $\rho(S,\theta,0) - 1000$ | the upper ocean, above roughly 1000 m |
| $\sigma_2$ | $\rho$ referenced to 2000 dbar | intermediate depths |
| $\sigma_4$ | $\rho$ referenced to 4000 dbar | the abyss |

*In words: potential density is the density a parcel would have if brought adiabatically to the reference pressure — the density analogue of potential temperature.* Typical open-ocean values run $\sigma_\theta = 22$ in the warm tropics to $28$ in polar surface water.

**Why more than one reference is needed — thermobaricity, quantitatively.** Compare North Atlantic Deep Water and Antarctic Bottom Water:

| | $\theta$ | $S$ | $\sigma_\theta$ | $\sigma_4$ |
|---|---|---|---|---|
| NADW | 2.5 °C | 34.95 | about 27.85 | about 45.85 |
| AABW | $-0.5$ °C | 34.65 | about 27.85 | about 46.05 |

Referenced to the surface they are indistinguishable. Referenced to 4000 dbar — where they actually live — AABW is clearly denser, which is why AABW floors every basin it can reach and NADW rides above it. **Using $\sigma_\theta$ in the abyss would get the ocean's vertical order wrong.** The honest fix is a **neutral surface**: the surface a parcel can move along with no buoyancy work, which is locally defined by $-\alpha\,d\theta + \beta\,dS = 0$ evaluated at the *local* pressure. Neutral surfaces are not globally well-defined — follow one around a basin and it fails to close on itself — which is a genuine and irreducible awkwardness of the subject, not a gap in your understanding.

**Cabbeling, quantitatively.** An isopycnal on the $(S,\theta)$ plane satisfies $d\rho = 0$, so

$$\frac{dS}{d\theta}\bigg|_{\rho} = \frac{\alpha(\theta)}{\beta}.$$

*In words: to stay at constant density while warming, you must get saltier — and the warmer you already are, the more salt each extra degree costs.* Since $\alpha$ increases with $\theta$, the slope increases, the isopycnal is convex, and the chord between any two points on it lies at higher salinity — hence higher density — than the isopycnal itself.

## Picture

![The temperature-salinity plane with salinity from 34.2 to 36.0 and potential temperature from 0 to 14 degrees. Three isopycnals curve upward to the right, becoming steeper at higher temperature. Two points A and B sit on the middle isopycnal, at 1 degree and salinity 34.40 and at 9 degrees and salinity 35.57. A straight coral mixing line joins them, and its midpoint at 5 degrees lies to the right of the isopycnal, at salinity 34.99 rather than 34.87 — saltier and therefore denser than either parent](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — is the column stable?).** Surface water is $(\theta, S) = (25\,^\circ\mathrm{C}, 36.5)$ and deep water is $(3\,^\circ\mathrm{C}, 34.7)$. Using the course reference set, compute both densities.

$$\rho_{\text{surf}} = 1026\left[1 - 2.0\times10^{-4}(25-15) + 7.6\times10^{-4}(36.5-35)\right]$$
$$= 1026\left[1 - 0.00200 + 0.00114\right] = 1026 \times 0.99914 = 1025.12\ \mathrm{kg\,m^{-3}}.$$

$$\rho_{\text{deep}} = 1026\left[1 - 2.0\times10^{-4}(3-15) + 7.6\times10^{-4}(34.7-35)\right]$$
$$= 1026\left[1 + 0.00240 - 0.000228\right] = 1026\times1.002172 = 1028.23\ \mathrm{kg\,m^{-3}}.$$

Dense water below light water by $3.11\ \mathrm{kg\,m^{-3}}$: **statically stable**, comfortably.

Worth noticing which term did the work. The temperature contrast contributes $-1026\times2.0\times10^{-4}\times22 = -4.51\ \mathrm{kg\,m^{-3}}$ and the salinity contrast $+1026\times7.6\times10^{-4}\times1.8 = +1.40\ \mathrm{kg\,m^{-3}}$. The surface water is 22 degrees warmer *and* 1.8 saltier; temperature wins by a factor of three. That is the normal state of the low-latitude ocean, and it is why the tropical ocean is thermally stratified. At high latitudes, where temperature contrasts collapse toward the freezing point, salinity takes over — and that reversal is the seed of every result in Module 4.

**Example 2 (why you'd care — mixing two equal-density parcels and getting sinking).** Parcel A is $(1\,^\circ\mathrm{C},\ 34.40)$. Parcel B is at $9\,^\circ\mathrm{C}$ and has been chosen to have exactly the same density as A. Find B's salinity, then compute the density of a 50:50 mixture, using the tabulated $\alpha(\theta)$ above and $\beta = 7.6\times10^{-4}$.

*B's salinity.* Integrate the isopycnal slope from 1 °C to 9 °C. Using Simpson's rule with $\alpha(1) = 0.66$, $\alpha(5) = 1.12$, $\alpha(9) = 1.55$ (all $\times10^{-4}$):

$$\int_1^9 \alpha\,d\theta = \frac{8}{6}\left[0.66 + 4(1.12) + 1.55\right]\times10^{-4} = \frac{8}{6}(6.69)\times10^{-4} = 8.92\times10^{-4}.$$

$$\Delta S = \frac{8.92\times10^{-4}}{7.6\times10^{-4}} = 1.17 \qquad\Longrightarrow\qquad S_B = 34.40 + 1.17 = 35.57.$$

*The mixture.* Both $\theta$ and $S$ mix linearly, so the 50:50 mixture is at $(5\,^\circ\mathrm{C},\ 34.99)$.

*Where the isopycnal actually is at 5 °C.* Same integral, from 1 to 5:

$$\int_1^5\alpha\,d\theta = \frac{4}{6}\left[0.66 + 4(0.89) + 1.12\right]\times10^{-4} = 3.55\times10^{-4}, \qquad \Delta S = 0.47,$$

so the isopycnal passes through $(5\,^\circ\mathrm{C},\ 34.87)$.

*The excess.* The mixture is $34.99 - 34.87 = 0.12$ saltier than the isopycnal at its own temperature, hence denser by

$$\Delta\rho = \rho\,\beta\,\Delta S = 1027 \times 7.6\times10^{-4}\times 0.12 = 0.09\ \mathrm{kg\,m^{-3}}.$$

*The point.* Two parcels with **identical** density mixed to produce water denser than both — a density increase created from nothing but stirring. Nine hundredths of a kilogram per cubic metre sounds trivial, and in the open thermocline it is. But it is the same size as the density contrast that drives the deep circulation, and it is generated *continuously* wherever a sharp front mixes water of similar density and different temperature. That describes the Antarctic Polar Front and the Subantarctic Front almost exactly, and cabbeling there is a recognized contributor to the formation of the dense water that ventilates the abyss ([4.2](04-02-deep-water-formation-convection.md)).

## Watch out

- **You might think** you can compare the densities of two deep samples using $\sigma_\theta$. **Actually** you must reference potential density to a pressure near where the water actually is. NADW and AABW have the same $\sigma_\theta$ to two decimals and differ clearly in $\sigma_4$. The rule of thumb: reference within about 1000 m of the depth of interest.
- **You might think** $\alpha$ and $\beta$ are physical constants. **Actually** $\alpha$ varies by a factor of six across the ocean's temperature range and grows further with pressure; only $\beta$ is nearly constant. Every "surprising" effect in this lesson is $\alpha$ refusing to hold still.
- **You might think** cabbeling violates something, since mixing two equal-density parcels produces a parcel denser than either. **Actually** nothing is violated: mass and salt and heat are all conserved exactly, and *volume* is not a conserved quantity for a nonlinear fluid. The mixture contracts. The corresponding release of potential energy is real, and it is what drives the sinking.

## One-liner

> Seawater's density depends on temperature through a coefficient that varies sixfold with temperature and further with pressure, and every consequence of that curvature — cabbeling, thermobaricity, the need to say which pressure a potential density is referenced to — is a real mechanism in the deep ocean rather than a numerical nicety.

## Problems

**P1 (🟢)** Using the course reference set ($\rho_0 = 1026$, $\theta_0 = 15$, $S_0 = 35$, $\alpha = 2.0\times10^{-4}$, $\beta = 7.6\times10^{-4}$), compute $\rho$ and $\sigma$ for: (a) Mediterranean outflow water, $(13\,^\circ\mathrm{C},\ 38.4)$; (b) Antarctic surface water, $(-1\,^\circ\mathrm{C},\ 34.0)$. (c) Which is denser, and by how much?

**P2 (🟡)** A parcel at $(10\,^\circ\mathrm{C}, 35.00)$ is cooled by 1 K. (a) Using $\alpha(10) = 1.67\times10^{-4}$, compute the density increase. (b) How much would salinity have to increase to produce the same density change? (c) Repeat (a) for a parcel at $(28\,^\circ\mathrm{C}, 35.00)$ with $\alpha(28) = 3.19\times10^{-4}$, and state in one sentence what this implies about where in the ocean surface *cooling* is an efficient way to make dense water and where surface *salinification* has to do the job instead.

**P3 (🔴, optional)** Two parcels sit side by side at 1000 dbar with exactly equal in-situ density: parcel C is $(0\,^\circ\mathrm{C}, 34.60)$ and parcel W is $(4\,^\circ\mathrm{C}, S_W)$. Take $\beta = 7.6\times10^{-4}$ throughout, and take the mean $\alpha$ over the interval 0 to 4 °C to be $0.95\times10^{-4}\ \mathrm{K^{-1}}$ at 1000 dbar and $1.45\times10^{-4}\ \mathrm{K^{-1}}$ at 4000 dbar. (a) Find $S_W$. (b) Both parcels are now displaced to 4000 dbar. Compute the density difference $\rho_C - \rho_W$ there, taking $\rho = 1035\ \mathrm{kg\,m^{-3}}$. (c) State which parcel sinks and give the name of the effect. (d) Explain in two sentences why this makes AABW, which is colder and *fresher* than NADW, the water mass that occupies the very bottom of the Atlantic.

<details>
<summary>Solutions</summary>

**P1** (a) $$\rho = 1026\left[1 - 2.0\times10^{-4}(13-15) + 7.6\times10^{-4}(38.4-35)\right]$$
$$= 1026\left[1 + 0.00040 + 0.002584\right] = 1026\times1.002984 = 1029.06\ \mathrm{kg\,m^{-3}},$$
so $\sigma = 29.06$.

(b) $$\rho = 1026\left[1 - 2.0\times10^{-4}(-1-15) + 7.6\times10^{-4}(34.0-35)\right]$$
$$= 1026\left[1 + 0.00320 - 0.00076\right] = 1026\times1.00244 = 1028.50\ \mathrm{kg\,m^{-3}},$$
so $\sigma = 28.50$.

(c) The Mediterranean water is denser, by $0.56\ \mathrm{kg\,m^{-3}}$ — despite being 14 degrees warmer. Salinity is doing all the work: a salinity excess of 4.4 beats a temperature excess of 14 K. This is exactly why Mediterranean outflow, which pours over the Gibraltar sill at 13 °C, sinks to about 1000 m in the Atlantic rather than floating.

**P2** (a) $$\Delta\rho = \rho\,\alpha\,\Delta\theta = 1027\times1.67\times10^{-4}\times1 = 0.172\ \mathrm{kg\,m^{-3}}.$$

(b) Setting $\rho\beta\,\Delta S = 0.172$:
$$\Delta S = \frac{\alpha}{\beta}\Delta\theta = \frac{1.67\times10^{-4}}{7.6\times10^{-4}} = 0.220.$$

(c) $$\Delta\rho = 1027\times3.19\times10^{-4}\times1 = 0.328\ \mathrm{kg\,m^{-3}},$$ nearly twice as much, and about six times what the same cooling achieves at 0 °C.

The implication: **cooling is an efficient densification mechanism only where the water is already warm.** In the tropics one degree of cooling buys $0.33\ \mathrm{kg\,m^{-3}}$; in the Weddell Sea at the freezing point it buys under $0.06$, and there is essentially no room left to cool anyway. So polar dense-water formation cannot be driven by cooling and must be driven by *salinification* — which in practice means brine rejection during sea-ice growth ([4.2](04-02-deep-water-formation-convection.md)).

**P3** (a) Equal density at 1000 dbar requires the salinity term to cancel the temperature term:

$$\alpha_{1000}\,(\theta_W - \theta_C) = \beta\,(S_W - S_C),$$
$$S_W - S_C = \frac{0.95\times10^{-4}}{7.6\times10^{-4}}\times 4 = 0.125\times4 = 0.500,$$
so $S_W = 34.60 + 0.500 = 35.10$.

(b) At 4000 dbar the salinity difference is unchanged (salinity is a material property) but $\alpha$ is larger:

$$\rho_C - \rho_W = \rho\left[\alpha_{4000}(\theta_W - \theta_C) - \beta(S_W - S_C)\right]$$
$$= 1035\left[1.45\times10^{-4}\times4 - 7.6\times10^{-4}\times0.500\right]$$
$$= 1035\left[5.80\times10^{-4} - 3.80\times10^{-4}\right] = 1035\times2.00\times10^{-4} = 0.207\ \mathrm{kg\,m^{-3}}.$$

(c) $\rho_C > \rho_W$: the **cold** parcel is now denser by about $0.21\ \mathrm{kg\,m^{-3}}$, and it sinks. The effect is **thermobaricity** — the pressure dependence of the thermal expansion coefficient.

(d) AABW is colder and fresher than NADW, so at the surface the two effects nearly cancel and their potential densities referenced to 0 dbar are indistinguishable. But at abyssal pressures $\alpha$ has grown enough that the temperature term outweighs the salinity term, AABW becomes definitively the denser of the two, and it therefore occupies the very bottom of the Atlantic with NADW layered above it — a vertical ordering that is invisible in $\sigma_\theta$ and obvious in $\sigma_4$.

*Check.* Note the internal consistency of (a) and (b): the whole reversal came from $\alpha$ growing by roughly 50 percent, which flipped a term that had been exactly balanced. Any time a physical outcome depends on the near-cancellation of two comparable terms, expect the sign to be fragile — and expect the fragility itself to be the interesting physics.

</details>

## Connections

- **Backward:** $\theta$ and $S$ are [1.1](01-01-temperature-salinity-pressure.md)'s conservative pair, and potential density is built by exactly the same adiabatic-displacement construction as potential temperature.
- **Forward:** the curved isopycnals of this lesson are the background grid of the T–S diagram in [1.3](01-03-ts-diagrams-water-masses.md); $d\rho/dz$ becomes the buoyancy frequency in [1.4](01-04-stratification-buoyancy-frequency.md); horizontal density gradients become the thermal wind of [2.2](02-02-thermal-wind-acc.md); and cabbeling, thermobaricity and brine rejection are the three routes to abyssal density in [4.2](04-02-deep-water-formation-convection.md).
- **Sideways (atmospheric science):** air has a linear equation of state — the ideal gas law with $\alpha = 1/T$ exactly — so nothing in this lesson has an atmospheric counterpart. There is no atmospheric cabbeling. That single structural difference is worth holding onto, because it is one of the few places where the ocean is genuinely harder than the atmosphere rather than merely slower ([atmospheric-science 1.4](../../atmospheric-science/lessons/01-04-potential-temperature.md)).

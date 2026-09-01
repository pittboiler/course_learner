# Atmospheric Science · Lesson 3.1: Solar & terrestrial radiation

> ⏱ ~15 min · Module 3: Radiation & the atmospheric energy budget · Builds on: [1.1 Composition & vertical structure](01-01-composition-vertical-structure.md), [`stat-mech` 4.3](../../stat-mech/lessons/04-03-photon-gas-blackbody.md) · Unlocks: 3.2 (greenhouse effect), 3.3 (radiative transfer)

## Why this matters

Everything the atmosphere does mechanically — every wind, every storm, every cell of the general circulation — is powered by a single energy source and drained by a single sink. Sunlight comes in, infrared goes out, and the difference between where they arrive and where they leave is what the atmosphere spends its time trying to fix. This lesson establishes the accounting: how much comes in, at what wavelengths, and what temperature the planet must run at to get rid of it again. The headline result, Earth's **effective emission temperature** of 255 K, is 33 K colder than the surface actually is — and that 33 K gap is the greenhouse effect, which Lesson 3.2 then explains.

## The idea

Everything warmer than absolute zero radiates, and two rules govern the radiation.

**Rule one: hotter things radiate much more.** The total flux goes as the *fourth power* of temperature. Double the temperature and you radiate sixteen times as much. This steepness is what makes radiative balance so stable: if a planet absorbs a little too much energy it warms slightly, and that slight warming raises its emission sharply until balance is restored. Radiation is a very stiff thermostat.

**Rule two: hotter things radiate at shorter wavelengths.** The peak wavelength is inversely proportional to temperature. The Sun's photosphere at 5772 K peaks at half a micrometre — visible light, which is no coincidence, since eyes evolved where the photons are. Earth at 255 K peaks near 11 micrometres, deep in the thermal infrared, twenty times longer.

That factor of twenty is the most consequential number in atmospheric radiation, because it means **incoming and outgoing radiation barely overlap in wavelength**. Conventionally the split is at 4 micrometres: essentially all solar energy arrives below it (*shortwave*), and essentially all terrestrial energy leaves above it (*longwave*). And because a gas's absorption depends strongly on wavelength, the atmosphere can be — and is — almost transparent to one and quite opaque to the other. A greenhouse effect is only possible because of this separation.

**Getting the planet's temperature.** Earth intercepts sunlight as a *disc* of area $\pi R^2$ but radiates from a *sphere* of area $4\pi R^2$. That factor of 4 is pure geometry, and it is the single most common slip in this calculation. Reflect away 30 percent as albedo, balance the rest against $\sigma T^4$, and you get 255 K — the temperature Earth would have with no greenhouse effect at all. It is 18 degrees below freezing.

## The formal version

**The blackbody laws.** A blackbody is a perfect absorber and therefore, by Kirchhoff's law, a perfect emitter at every wavelength. Its spectral radiance is Planck's function, derived in [`stat-mech` 4.3](../../stat-mech/lessons/04-03-photon-gas-blackbody.md); the two consequences we need are:

$$\boxed{\ F = \sigma T^4\ }\qquad \sigma = 5.67\times10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}} \quad\text{(Stefan–Boltzmann)}$$

$$\boxed{\ \lambda_{\max} = \frac{2898\ \mathrm{\mu m\,K}}{T}\ }\quad\text{(Wien's displacement law)}$$

*In words: the total emitted flux rises as the fourth power of temperature, and the wavelength of peak emission falls as its inverse.* Real surfaces emit a fraction $\epsilon \le 1$ of the blackbody flux, the **emissivity**; for Earth's land, ocean and cloud in the infrared, $\epsilon \approx 0.95$–$0.99$, so treating them as black is a good approximation. Applied:

| Body | $T$ | $\lambda_{\max}$ | $\sigma T^4$ |
|---|---|---|---|
| Sun's photosphere | 5772 K | 0.50 micrometres (green) | $6.3\times10^{7}\ \mathrm{W\,m^{-2}}$ |
| Earth's surface | 288 K | 10.1 micrometres | 390 W m⁻² |
| Earth as seen from space | 255 K | 11.4 micrometres | 240 W m⁻² |

**The solar constant.** The Sun's output spreads over a sphere of radius $d = 1.496\times10^{11}$ m (one astronomical unit), so the flux arriving at Earth's orbit is

$$S = \sigma T_{\odot}^4\left(\frac{R_{\odot}}{d}\right)^2 = 6.29\times10^{7}\times\left(\frac{6.957\times10^{8}}{1.496\times10^{11}}\right)^2 = 1361\ \mathrm{W\,m^{-2}},$$

the **solar constant** (which varies by about 0.1 percent over the solar cycle, and by 6.9 percent over the year from Earth's orbital eccentricity — so "constant" is generous). *In words: the inverse-square law applied to the photosphere's flux gives the sunlight arriving above the atmosphere.*

**Effective emission temperature.** Earth presents a disc to the Sun and absorbs a fraction $1-\alpha$, where $\alpha \approx 0.30$ is the **planetary albedo** (about two-thirds of it from clouds, the rest from ice, desert and the air itself). In steady state, absorbed equals emitted:

$$\underbrace{\pi R^2 S(1-\alpha)}_{\text{absorbed by a disc}} = \underbrace{4\pi R^2 \sigma T_e^4}_{\text{emitted by a sphere}} \qquad\Longrightarrow\qquad \boxed{\ T_e = \left[\frac{S(1-\alpha)}{4\sigma}\right]^{1/4}\ }$$

*In words: the temperature at which the planet radiates away exactly the sunlight it absorbs, averaged over its whole surface.* Numerically,

$$T_e = \left[\frac{1361 \times 0.70}{4 \times 5.67\times10^{-8}}\right]^{1/4} = \left[\frac{952.7}{2.268\times10^{-7}}\right]^{1/4} = (4.201\times10^{9})^{1/4} = 254.6\ \mathrm{K}.$$

The observed global-mean surface temperature is 288 K. **The 33 K difference is the greenhouse effect**, and it is the subject of the next lesson. Note carefully what $T_e$ is: not the surface temperature, but the temperature of whatever level the planet's infrared actually escapes from — around 5 km up, as [3.3](03-03-radiative-transfer-vertical-profile.md) will show.

**Shortwave and longwave.** Because the two Planck curves are separated by a factor of twenty in wavelength, their fluxes are conventionally split at 4 micrometres:

- **Shortwave** (under 4 micrometres): incoming solar. The atmosphere is largely *transparent* here, except for ozone in the ultraviolet and some water-vapor absorption in the near infrared. Most of it reaches the ground.
- **Longwave** (over 4 micrometres): outgoing terrestrial. The atmosphere is largely *opaque* here, thanks to water vapor, carbon dioxide, methane and clouds — except in the 8-to-12 micrometre "atmospheric window."

This asymmetry — transparent in, opaque out — *is* the greenhouse effect stated in one line.

## Picture

![Two normalized blackbody emission curves on a logarithmic wavelength axis: the Sun at 5772 K peaking near 0.5 micrometres and Earth at 255 K peaking near 11 micrometres, barely overlapping, with a dashed line at 4 micrometres dividing shortwave from longwave](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — Venus and Mars).** Compute $T_e$ for Venus ($S = 2601\ \mathrm{W\,m^{-2}}$, $\alpha = 0.77$) and Mars ($S = 586\ \mathrm{W\,m^{-2}}$, $\alpha = 0.25$).

$$T_{e,\text{Venus}} = \left[\frac{2601\times0.23}{4\times5.67\times10^{-8}}\right]^{1/4} = \left[\frac{598.2}{2.268\times10^{-7}}\right]^{1/4} = (2.638\times10^{9})^{1/4} = 226.7\ \mathrm{K},$$

$$T_{e,\text{Mars}} = \left[\frac{586\times0.75}{2.268\times10^{-7}}\right]^{1/4} = (1.938\times10^{9})^{1/4} = 209.8\ \mathrm{K}.$$

*The point.* Venus receives nearly twice Earth's sunlight, yet its effective temperature is *lower* than Earth's 255 K, because its bright cloud deck reflects 77 percent of it away. And yet Venus's surface is 737 K — a greenhouse effect of over 500 K, from an atmosphere ninety times as massive as ours and nearly all $\mathrm{CO_2}$. Mars, with a thin atmosphere, sits at 210 K effective against a 210 K surface: almost no greenhouse effect at all. Three planets, three answers, one equation.

**Example 2 (why you'd care — how sensitive is $T_e$ to albedo?).** Suppose a feedback changes Earth's albedo from 0.30 to 0.28 — say, less sea ice. What happens to $T_e$?

Differentiate $T_e \propto (1-\alpha)^{1/4}$ logarithmically:

$$\frac{dT_e}{T_e} = \frac{1}{4}\frac{d(1-\alpha)}{1-\alpha} = \frac{1}{4}\frac{0.02}{0.70} = 7.14\times10^{-3},$$

$$dT_e = 254.6 \times 7.14\times10^{-3} = 1.8\ \mathrm{K}.$$

A two-percentage-point albedo change moves the planet's radiating temperature by nearly 2 K — comparable to a century of greenhouse warming. This is the ice–albedo feedback in miniature: warming melts ice, ice is bright, less ice means less reflection, which means more warming. Note also the factor of $1/4$ from the fourth-power law, which is exactly the stiffness mentioned in "The idea": a 2.9 percent change in absorbed energy buys only a 0.71 percent change in temperature.

## Watch out

- **You might think** the factor of 4 in $T_e$ accounts for day and night. **Actually** it is the ratio of the sphere's *emitting* area to the disc's *intercepting* area, $4\pi R^2/\pi R^2$. It would be there even for a tidally locked planet — though such a planet would have a wildly non-uniform temperature and the single-$T_e$ calculation would be a poor description of it.
- **You might think** $T_e$ is the temperature of anything you could touch. **Actually** it is a bookkeeping temperature: the one a blackbody sphere would need to emit 240 W m⁻². It happens to correspond to a real level in Earth's atmosphere, around 5 km, but that is a result of [3.3](03-03-radiative-transfer-vertical-profile.md), not part of this definition.
- **You might think** Wien's law tells you where most of the *energy* is. **Actually** it tells you where the peak of the spectral radiance per unit wavelength is, which depends on whether you plot per unit wavelength or per unit frequency — the two peaks differ by nearly a factor of two. Use it as a scale-setter, not a precise statement, and never quote a Wien peak without saying which variable it is per.
- **You might think** albedo is a fixed property of the planet. **Actually** two-thirds of it is *clouds*, which respond to the climate they are in. This is why cloud feedback is the largest single uncertainty in climate sensitivity, as [`climate-science`](../../climate-science/syllabus.md) explores.

## One-liner

> The Sun sends 1361 W m⁻² of half-micrometre light at a disc; Earth returns 240 W m⁻² of eleven-micrometre light from a sphere, which requires only 255 K — leaving a 33 K gap that the atmosphere must explain.

## Problems

**P1 (🟢)** A snowball Earth has albedo $\alpha = 0.60$. Compute its effective emission temperature, taking $S = 1361\ \mathrm{W\,m^{-2}}$. Compare with the present 255 K.

**P2 (🟡)** (a) Use Wien's law to find the peak emission wavelength of a 2.7 K blackbody. (b) Which part of the electromagnetic spectrum is that, and what physical object in the universe has this temperature? (c) Compute its Stefan–Boltzmann flux and compare with Earth's 240 W m⁻².

**P3 (🔴, optional)** A planet orbits at distance $d$ from a star of radius $R_\star$ and surface temperature $T_\star$. (a) Show that the planet's effective temperature is $T_e = T_\star\sqrt{R_\star/2d}\,(1-\alpha)^{1/4}$, independent of the planet's own radius. (b) Explain physically why the planet's size drops out. (c) An Earth-albedo planet orbits a red dwarf with $T_\star = 3200$ K and $R_\star = 0.21R_{\odot}$. How close must it orbit, in astronomical units, to have $T_e = 255$ K?

<details>
<summary>Solutions</summary>

**P1** $$T_e = \left[\frac{1361\times0.40}{4\times5.67\times10^{-8}}\right]^{1/4} = \left[\frac{544.4}{2.268\times10^{-7}}\right]^{1/4} = (2.400\times10^{9})^{1/4} = 221.4\ \mathrm{K}.$$

That is 33 K colder than the present 255 K — a colossal drop for a change in one number. The reason it matters so much is the feedback loop: ice raises albedo, higher albedo lowers temperature, lower temperature makes more ice. Once the ice reaches low latitudes, the loop closes on itself and the planet freezes over completely — and, crucially, is then very hard to thaw, because a bright planet stays cold even as the Sun brightens. That bistability is Snowball Earth, and [`climate-science`](../../climate-science/syllabus.md) treats it as a saddle-node bifurcation.

*Check.* Scaling: $T_e \propto (1-\alpha)^{1/4}$, so $221.4/254.6 = (0.40/0.70)^{1/4} = (0.5714)^{1/4} = 0.8696$, and $254.6\times0.8696 = 221.4$. Consistent.

**P2** (a) $$\lambda_{\max} = \frac{2898}{2.7} = 1073\ \mathrm{\mu m} \approx 1.1\ \mathrm{mm}.$$

(b) That is the **microwave** band, and the object is the **cosmic microwave background** — the relic radiation of the hot early universe, redshifted down to 2.7 K. It is the most perfect blackbody ever measured.

(c) $$F = \sigma T^4 = 5.67\times10^{-8}\times(2.7)^4 = 5.67\times10^{-8}\times53.1 = 3.0\times10^{-6}\ \mathrm{W\,m^{-2}},$$

which is $3.0\times10^{-6}/240 = 1.3\times10^{-8}$ of Earth's outgoing flux — about one part in eighty million. The fourth-power law is brutal: dropping the temperature by a factor of 94 cuts the flux by a factor of $94^4 \approx 8\times10^{7}$.

**P3** (a) The star emits $4\pi R_\star^2\sigma T_\star^4$ in total; at distance $d$ that spreads over $4\pi d^2$, so the flux at the planet is

$$S = \sigma T_\star^4\frac{R_\star^2}{d^2}.$$

Substituting into $T_e = [S(1-\alpha)/4\sigma]^{1/4}$:

$$T_e = \left[\frac{\sigma T_\star^4 R_\star^2 (1-\alpha)}{4\sigma d^2}\right]^{1/4} = T_\star\left(\frac{R_\star^2}{4d^2}\right)^{1/4}(1-\alpha)^{1/4} = T_\star\sqrt{\frac{R_\star}{2d}}\,(1-\alpha)^{1/4}.$$

(b) The planet's radius drops out because it appears on *both* sides: a bigger planet intercepts more starlight ($\propto R^2$) but also has more area to radiate from ($\propto R^2$), and the two scale identically. Effective temperature is an intensive property, set by the radiation environment, not by the object's size.

(c) With $R_\star = 0.21 \times 6.957\times10^{8} = 1.461\times10^{8}$ m and $(1-\alpha)^{1/4} = (0.70)^{1/4} = 0.9147$, solve for $d$:

$$\sqrt{\frac{R_\star}{2d}} = \frac{T_e}{T_\star(1-\alpha)^{1/4}} = \frac{255}{3200\times0.9147} = \frac{255}{2927} = 0.08712,$$

$$\frac{R_\star}{2d} = 7.590\times10^{-3} \qquad\Longrightarrow\qquad d = \frac{1.461\times10^{8}}{2\times7.590\times10^{-3}} = 9.62\times10^{9}\ \mathrm{m}.$$

In astronomical units, $9.62\times10^{9}/1.496\times10^{11} = 0.064$ AU — about one sixth of Mercury's orbit. This is why the habitable zones of red dwarfs are so tight, and why the planets found there are typically tidally locked: at 0.064 AU, tidal braking is overwhelming.

*Check.* Sanity against Earth: $T_\star = 5772$, $R_\star/2d = 6.957\times10^{8}/(2\times1.496\times10^{11}) = 2.325\times10^{-3}$, so $T_e = 5772\times\sqrt{2.325\times10^{-3}}\times0.9147 = 5772\times0.04822\times0.9147 = 254.6$ K. The general formula reproduces the direct calculation exactly.

</details>

## Flashback

**From Lesson 2.3 (Cloud & precipitation formation):** A cloud contains 0.8 g of liquid water per cubic metre, divided among $2\times10^{8}$ droplets per cubic metre. (a) Find the mean droplet radius. (b) Would you expect this cloud to produce rain by collision–coalescence? Justify with the size threshold.

<details>
<summary>Solution</summary>

(a) Volume of liquid per droplet:

$$V = \frac{M}{\rho_w N} = \frac{0.8\times10^{-3}\ \mathrm{kg\,m^{-3}}}{1000\ \mathrm{kg\,m^{-3}} \times 2\times10^{8}\ \mathrm{m^{-3}}} = 4.0\times10^{-15}\ \mathrm{m^3}.$$

Then from $V = \tfrac43\pi r^3$,

$$r = \left(\frac{3 \times 4.0\times10^{-15}}{4\pi}\right)^{1/3} = (9.55\times10^{-16})^{1/3} = 9.85\times10^{-6}\ \mathrm{m} \approx 9.9\ \mathrm{\mu m}.$$

(b) **Probably not, or only slowly.** Collection efficiency becomes appreciable only above about 20 micrometres radius, and these droplets are at 10 — comfortably below the threshold, so they are swept around one another rather than colliding. This cloud needs either a longer lifetime with a broad droplet spectrum (so that a few outliers get past 20 micrometres and start the runaway), or a cold top where the Bergeron process can operate.

*Check.* A droplet number density of $2\times10^{8}\ \mathrm{m^{-3}}$ is 200 per cm³, typical of a moderately clean continental cloud, and a mean radius near 10 micrometres is exactly the textbook cloud-droplet size — so the arithmetic lands where it should.

</details>

## Connections

- **Backward:** the atmosphere's transparency to shortwave and opacity to longwave is the reason the troposphere is heated from below, which is where [1.1](01-01-composition-vertical-structure.md)'s temperature profile came from. The blackbody laws themselves are derived in [`stat-mech` 4.3](../../stat-mech/lessons/04-03-photon-gas-blackbody.md).
- **Forward:** [3.2](03-02-greenhouse-effect-energy-budget.md) closes the 33 K gap with a slab-atmosphere model and a full energy budget; [3.3](03-03-radiative-transfer-vertical-profile.md) explains which wavelengths the atmosphere is opaque at and why the emission level sits at 5 km.
- **Sideways (astrophysics):** the same $\sigma T^4$ and Wien machinery classifies stars by color in [`astrophysics` 1.2](../../astrophysics/lessons/01-02-blackbody-spectra-hr-diagram.md); the solar constant calculation here is just the inverse-square dimming of a star's luminosity, which is [`astrophysics` 1.1](../../astrophysics/lessons/01-01-scales-luminosity-distance-ladder.md)'s distance ladder run one step.

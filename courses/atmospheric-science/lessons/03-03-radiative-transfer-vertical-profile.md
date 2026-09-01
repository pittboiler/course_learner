# Atmospheric Science · Lesson 3.3: Radiative transfer & the vertical temperature profile

> ⏱ ~15 min · Module 3: Radiation & the atmospheric energy budget · Builds on: [3.2 The greenhouse effect & the global energy budget](03-02-greenhouse-effect-energy-budget.md), [1.1 Composition & vertical structure](01-01-composition-vertical-structure.md) · Unlocks: 4.1 (equations of motion)

## Why this matters

The slab model of Lesson 3.2 has one fatal simplification: it treats the atmosphere as a single layer at a single temperature. The real atmosphere is a continuous absorbing medium whose opacity varies enormously with wavelength and whose temperature varies with height — and once you allow that, two things fall out that the slab could never explain. First, a genuinely mechanistic account of why adding $\mathrm{CO_2}$ warms the surface, in terms of *where* the planet's infrared escapes from. Second, the temperature profile of Lesson 1.1 — including the reversal at the tropopause — derived rather than described. This lesson closes the loop opened in the course's first ten minutes.

## The idea

**Optical depth is the honest measure of thickness.** A beam passing through an absorbing gas loses a fixed *fraction* per unit path, so its intensity decays exponentially. The natural coordinate is not metres but the number of $e$-foldings — the **optical depth** $\tau$. At $\tau = 1$ about 63 percent has been absorbed; at $\tau = 3$, 95 percent. Optical depth depends on wavelength, and for the atmosphere it varies over many orders of magnitude across the infrared: near-transparent between 8 and 12 micrometres, essentially opaque in the $\mathrm{CO_2}$ band at 15 micrometres and in the water-vapor bands.

**The emission level.** Now turn the beam around and look *down* from space. Photons emitted deep in an opaque atmosphere are reabsorbed before they escape; only photons emitted from where the remaining optical depth to space is about 1 or less get out. So at each wavelength, space effectively sees a particular *level* — the **emission level** — and the outgoing radiation carries that level's temperature. Where the atmosphere is transparent (the window), the emission level is the ground and space sees 288 K. Where it is opaque, the emission level is high and cold.

**Why adding $\mathrm{CO_2}$ warms the surface.** This is the mechanism the slab model hides. Add absorber, and at every wavelength the level where $\tau = 1$ moves *upward*. Because the troposphere cools with height, the new emission level is **colder**, so it radiates *less*. The planet is now emitting less than it absorbs. It must warm — and it warms until the whole profile has shifted up in temperature enough that the new, higher emission level is back at 255 K. The surface, sitting at the bottom of a lapse rate that is anchored higher up, comes along for the ride.

Averaged over all wavelengths, Earth's emission level sits at about 5 km: the temperature there, in a 6.5 K km⁻¹ troposphere starting from 288 K, is $288 - 6.5\times5.1 = 255$ K. That is not a coincidence — it *is* the definition of the emission level, and it is why $T_e$ from [3.1](03-01-solar-terrestrial-radiation.md) turned out to be a real atmospheric temperature rather than an abstraction.

**Where the profile comes from.** Let radiation alone set the temperature at every level and you get **radiative equilibrium**: each layer absorbs and emits until it balances. Solve it and the answer is wrong in a specific, informative way — the lower atmosphere comes out far too steep, with a surface near 333 K and a lapse rate exceeding the dry adiabat. Such a profile is convectively unstable by [2.4](02-04-stability-parcel-theory-cape.md), so it cannot survive: convection fires, carries the excess heat upward, and flattens the profile back to roughly the moist adiabat. The troposphere's 6.5 K km⁻¹ is the result — **radiative–convective equilibrium**. Above the tropopause, where solar heating happens *in place* rather than at the bottom, the profile is stable and radiation is left alone to set it. That is the dividing line between the two layers, and it is what "tropopause" fundamentally means.

## The formal version

**Beer's law.** For a beam of intensity $I$ travelling a path $s$ through a gas of density $\rho$ and mass absorption coefficient $k_\lambda$ (m² kg⁻¹, wavelength-dependent),

$$dI = -k_\lambda\rho I\,ds \qquad\Longrightarrow\qquad I(\tau) = I_0e^{-\tau}, \qquad \tau_\lambda \equiv \int k_\lambda\rho\,ds.$$

*In words: absorption removes a fixed fraction of the beam per unit optical depth, so intensity decays exponentially in $\tau$.* The dimensionless $\tau$ is the **optical depth** — call it the number of absorption lengths. Two immediate consequences:

| $\tau$ | transmitted | absorbed |
|---|---|---|
| 0.1 | 90 percent | 10 percent |
| 1 | 37 percent | 63 percent |
| 3 | 5 percent | 95 percent |

For a slant path at solar zenith angle $\theta$, the path through a horizontally uniform atmosphere is longer by the **airmass factor** $1/\cos\theta$, so $\tau_{\text{slant}} = \tau_{\text{vertical}}/\cos\theta$ — which is why the sun is dimmer and redder at low elevation, and why UV exposure peaks at local noon.

**The Schwarzschild equation.** Beer's law only removes; a warm gas also *emits*. Adding emission at the local Planck function $B_\lambda(T)$ gives

$$\frac{dI_\lambda}{d\tau_\lambda} = -I_\lambda + B_\lambda(T),$$

the fundamental equation of radiative transfer. *In words: along a ray, intensity relaxes toward the local blackbody value, at a rate of one $e$-folding per unit optical depth.* Two limits are worth carrying. Where the medium is optically thick ($\tau \gg 1$), $I \to B(T)$: the radiation forgets where it came from and simply reports the local temperature. Where it is thin ($\tau \ll 1$), $I$ passes through nearly unchanged. The transition — the region within about one optical depth of space — is the **emission level**, and it is what an infrared satellite channel actually measures.

**The absorption spectrum.** Which gases absorb where is set by molecular structure. A molecule absorbs infrared only if the vibration or rotation changes its **dipole moment**, which is why the atmosphere's two dominant gases are irrelevant here: $\mathrm{N_2}$ and $\mathrm{O_2}$ are symmetric diatomics with no dipole and essentially no infrared absorption. The trace gases do all the work:

| Absorber | Bands |
|---|---|
| $\mathrm{H_2O}$ | 6.3 micrometres (bending), plus a rotational continuum beyond 18 micrometres — the single largest contributor |
| $\mathrm{CO_2}$ | 15 micrometres (bending) — right on the peak of Earth's Planck curve |
| $\mathrm{O_3}$ | 9.6 micrometres in the infrared; 0.2–0.3 micrometres (Hartley band) in the ultraviolet |
| $\mathrm{CH_4}$, $\mathrm{N_2O}$ | narrow bands, but in the window where they have leverage |

Between about 8 and 12 micrometres nothing much absorbs: the **atmospheric window**, through which roughly 22 percent of the surface's emission escapes directly to space. It is exactly the shortfall that made the slab emissivity $\epsilon = 0.78$ rather than 1 in [3.2](03-02-greenhouse-effect-energy-budget.md), and it is where thermal-infrared satellites look to measure surface temperature.

**Quantifying the emission-level shift.** Outgoing longwave radiation is $\sigma T^4$ at the emission level's temperature, and that temperature falls with height at $\Gamma$. So raising the emission level by $\delta z$ reduces the outgoing flux by

$$\delta F = 4\sigma T_e^3\,\Gamma\,\delta z = 4(5.67\times10^{-8})(254.6)^3(6.5\times10^{-3})\,\delta z = 0.0243\,\delta z\ \mathrm{W\,m^{-2}\ per\ metre}.$$

A doubling of $\mathrm{CO_2}$ is measured to give a forcing of about 3.7 W m⁻², so

$$\delta z = \frac{3.7}{0.0243} \approx 150\ \mathrm{m}.$$

*In words: doubling $\mathrm{CO_2}$ raises the level from which Earth's infrared escapes by about 150 metres.* That is the entire physical content of the forcing — a 150 m shift in an 8 km-deep atmosphere, which then requires the whole profile to warm by roughly 1 K to restore balance.

**Why the stratosphere is warm, and why it is stable.** Ozone absorbs ultraviolet between 0.2 and 0.3 micrometres, a band where nothing else in the atmosphere absorbs and where the surface never sees the photons at all. The absorption therefore deposits solar energy *inside* the layer, near 30–50 km. Two features make the resulting warming large. The energy is absorbed where the air is thin, so a modest flux heats a small mass a great deal. And there is no convection to carry it away, because a layer heated internally has its maximum temperature at the top, giving $d\theta/dz \gg 0$ — the most stable arrangement there is. Radiation alone therefore sets the stratospheric profile, and the temperature rises to the stratopause where the ozone runs out.

This is the general rule the whole vertical profile obeys: **wherever the heating enters at the bottom, convection takes over and the lapse rate is set by an adiabat; wherever it enters in place, radiation is left in charge.**

## Picture

![Left, a schematic of atmospheric absorptivity against wavelength showing strong water-vapor bands, the carbon dioxide band at 15 micrometres, an ozone band at 9.6, and the transparent window between 8 and 12 micrometres; right, a column with the surface at 288 K, the emission level at 255 K about 5 km up radiating to space, and a raised emission level after adding carbon dioxide, which is colder and therefore radiates less](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — slant paths and sunburn).** At a wavelength where the vertical optical depth of the ozone layer is $\tau = 0.4$, what fraction of the ultraviolet reaches the ground with the Sun overhead, and what fraction at a solar zenith angle of 60 degrees?

Overhead ($\theta = 0$): $I/I_0 = e^{-0.4} = 0.670$, so 67 percent gets through.

At 60 degrees: the airmass factor is $1/\cos 60^\circ = 2$, so $\tau_{\text{slant}} = 0.8$ and $I/I_0 = e^{-0.8} = 0.449$, so 45 percent gets through.

*The point.* Doubling the path cut the transmitted ultraviolet by a third. This is why sunburn risk collapses within a couple of hours of solar noon, why the UV index is quoted for local noon, and — the same physics — why the setting sun is red: the airmass factor at the horizon exceeds 30, and short wavelengths, which scatter most, are removed almost entirely.

**Example 2 (why you'd care — reading a satellite's infrared channels).** A satellite measures brightness temperature (the blackbody temperature matching the observed intensity) in two channels over the same clear tropical scene: 297 K at 11 micrometres, 220 K at 15 micrometres. What is each channel seeing?

The **11 micrometre** channel sits in the atmospheric window, where $\tau$ to space is small. The emission level is the surface, so 297 K is the sea-surface temperature. This is how satellites map ocean temperature.

The **15 micrometre** channel sits on the $\mathrm{CO_2}$ band, where the atmosphere is opaque. Radiation from below is absorbed long before it reaches space, so the emission level is high — and taking 288 K at the surface with a 6.5 K km⁻¹ lapse rate,

$$z = \frac{297 - 220}{6.5} = 11.8\ \mathrm{km},$$

near the tropical tropopause. The channel is measuring upper-troposphere temperature, not the ground.

*The general principle.* By choosing wavelengths at different distances from the centre of an absorption band you choose different emission levels, and so **sound the atmosphere in the vertical from orbit** — which is exactly how operational temperature soundings are made over the oceans, where balloons are scarce. Note also the consequence for the greenhouse effect: a satellite looking at Earth's spectrum sees a deep bite taken out of the Planck curve at 15 micrometres, because that band is radiating from 220 K instead of 288 K. That bite is the greenhouse effect, photographed.

## Watch out

- **You might think** optical depth is a property of the atmosphere alone. **Actually** it is a property of the atmosphere *and a wavelength and a path*. The same air is optically thin at 10 micrometres and optically thick at 15, and the vertical $\tau$ differs from the slant $\tau$ by the airmass factor. Never quote a $\tau$ without saying at what wavelength and along what path.
- **You might think** the $\mathrm{CO_2}$ band is "saturated," so more $\mathrm{CO_2}$ cannot matter. **Actually** saturation at the band *centre* is exactly why additional $\mathrm{CO_2}$ works at the band *edges* and by raising the emission level — the effect becomes logarithmic in concentration rather than vanishing. Each doubling gives roughly the same 3.7 W m⁻², which is why the forcing keeps coming.
- **You might think** the greenhouse effect is about the atmosphere "trapping heat." **Actually** the mechanism is a shift in *where* the emission happens. Energy is not trapped; the escape point moves up into colder air, so less escapes at a given surface temperature, and the surface warms until it escapes again. That framing is what makes the 150 m calculation possible.
- **You might think** the troposphere's lapse rate is set by radiation. **Actually** radiation alone would make it much steeper (and the surface about 45 K warmer). Convection is what holds it near 6.5 K km⁻¹, and the tropopause is precisely the level where the atmosphere becomes stable enough for radiation to take over again.

## One-liner

> Space sees down to optical depth one; adding a greenhouse gas raises that level into colder air, so the planet emits less and must warm — and everywhere the heating enters from below, convection, not radiation, sets the lapse rate.

## Problems

**P1 (🟢)** A layer has vertical optical depth $\tau = 1.6$ at some wavelength. (a) What fraction of a vertical beam is transmitted? (b) What fraction is transmitted at a zenith angle of 60 degrees?

**P2 (🟡)** A satellite channel measures a brightness temperature of 243 K in a clear column whose surface is at 300 K and whose lapse rate is 6.8 K km⁻¹. (a) Estimate the height of the emission level for that channel. (b) A second channel over the same column reads 262 K — is its emission level higher or lower, and is the atmosphere more or less opaque at that wavelength? Explain.

**P3 (🔴, optional)** Suppose a greenhouse-gas increase raises the mean emission level by 300 m, with $\Gamma = 6.5\ \mathrm{K\,km^{-1}}$ and $T_e = 254.6$ K. (a) Compute the reduction in outgoing longwave radiation. (b) Compute the surface warming needed to restore balance, assuming the whole profile shifts uniformly and the lapse rate does not change. (c) Explain why the *actual* expected warming is larger than your answer to (b), naming the mechanism.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{I}{I_0} = e^{-1.6} = 0.202,$$ about 20 percent transmitted (80 percent absorbed).

(b) The airmass factor at 60 degrees is $1/\cos 60^\circ = 2$, so $\tau_{\text{slant}} = 3.2$:

$$\frac{I}{I_0} = e^{-3.2} = 0.041,$$

about 4 percent. Doubling the path did not halve the transmission — it *squared* it, since $e^{-2\tau} = (e^{-\tau})^2$. That is the signature of exponential attenuation, and it is why slant paths matter so much more than intuition suggests.

**P2** (a) The brightness temperature is the emission level's temperature, so

$$z = \frac{300 - 243}{6.8} = \frac{57}{6.8} = 8.4\ \mathrm{km}.$$

(b) The second channel reads a *warmer* 262 K, so by the same lapse rate its emission level is at $(300-262)/6.8 = 5.6$ km — **lower**. A lower emission level means space can see further down, which means the atmosphere is **less opaque** at that wavelength (a smaller absorption coefficient, so it takes more path to accumulate $\tau = 1$).

*Check.* The logic is monotone and worth stating as a rule: *warmer brightness temperature means lower emission level means more transparent*. In the atmospheric window the brightness temperature approaches the surface temperature itself, which is the limiting case.

**P3** (a) $$\delta F = 4\sigma T_e^3\Gamma\,\delta z = 4 \times 5.67\times10^{-8} \times (254.6)^3 \times 6.5\times10^{-3} \times 300.$$

Working it: $4\sigma T_e^3 = 4\times5.67\times10^{-8}\times1.651\times10^{7} = 3.743\ \mathrm{W\,m^{-2}\,K^{-1}}$, then $3.743\times6.5\times10^{-3} = 0.02433\ \mathrm{W\,m^{-2}}$ per metre, so

$$\delta F = 0.02433 \times 300 = 7.3\ \mathrm{W\,m^{-2}}.$$

(b) To restore balance the emission level must warm back to 254.6 K, and if the profile shifts uniformly the surface warms by the same amount. The temperature change needed to supply 7.3 W m⁻² is

$$\delta T = \frac{\delta F}{4\sigma T_e^3} = \frac{7.3}{3.743} = 1.95\ \mathrm{K}.$$

(Equivalently and more directly: the level rose 300 m, so it cooled by $6.5\times0.3 = 1.95$ K, and it must be warmed back by exactly that.)

(c) The actual warming is larger because of **feedbacks**, which the calculation above deliberately excludes. The dominant one is **water vapor**: a warmer atmosphere holds more water vapor by Clausius–Clapeyron ([2.2](02-02-saturation-moist-adiabatic-lapse-rate.md), about 7 percent per kelvin), water vapor is itself a strong infrared absorber, so it raises the emission level *again*, requiring more warming. **Ice–albedo** works the same direction by lowering $\alpha$ ([3.1](03-01-solar-terrestrial-radiation.md), Example 2). Together these roughly double to triple the no-feedback response — which is how a 1.95 K direct response becomes an equilibrium sensitivity nearer 3 K. Quantifying the sum is the business of [`climate-science`](../../climate-science/syllabus.md).

*Check.* Both routes to $\delta T$ in (b) agree exactly, which they must — one asks how much the level cooled, the other how much flux that costs, and they are the same statement divided by $4\sigma T_e^3$.

</details>

## Flashback

**From Lesson 3.1 (Solar & terrestrial radiation):** A cloud top radiates at 230 K. (a) Compute its emitted longwave flux. (b) Compute its Wien peak wavelength. (c) Compare the flux with that of the 288 K surface beneath it, and say in one sentence what this does to the outgoing longwave radiation when the cloud moves in.

<details>
<summary>Solution</summary>

(a) $$F = \sigma T^4 = 5.67\times10^{-8} \times (230)^4 = 5.67\times10^{-8} \times 2.798\times10^{9} = 159\ \mathrm{W\,m^{-2}}.$$

(b) $$\lambda_{\max} = \frac{2898}{230} = 12.6\ \mathrm{\mu m}.$$

(c) The surface at 288 K emits $5.67\times10^{-8}\times(288)^4 = 390\ \mathrm{W\,m^{-2}}$, so the cloud top emits only 41 percent as much. When a high cold cloud moves in, the outgoing longwave radiation drops sharply — the planet loses less heat, which is a *warming* influence (the longwave cloud effect), partly offsetting the cooling from the same cloud's albedo.

*Check.* The ratio should be $(230/288)^4 = (0.7986)^4 = 0.407$, matching the 41 percent computed from the fluxes directly. Whether a given cloud warms or cools on balance depends on which effect wins — high thin cirrus warm, low thick stratocumulus cool — and this competition is why cloud feedback is the largest open uncertainty in climate sensitivity.

</details>

## Connections

- **Backward:** this lesson explains the emissivity $\epsilon = 0.78$ and the effective slab count that [3.2](03-02-greenhouse-effect-energy-budget.md) had to fit empirically, and it finally derives the temperature reversals that [1.1](01-01-composition-vertical-structure.md) only described. The instability argument that caps the troposphere's lapse rate is [2.4](02-04-stability-parcel-theory-cape.md)'s.
- **Forward:** Module 4 leaves radiation behind and asks what the *latitudinal* imbalance in this budget makes the air do; [4.4](04-04-thermal-wind-general-circulation.md) turns the tropics-warm, poles-cold contrast into the general circulation and the jet streams.
- **Sideways (astrophysics):** the Schwarzschild equation and the "you see down to $\tau = 1$" rule are exactly the machinery of stellar atmospheres in [`astrophysics` 1.3](../../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md) — an absorption line in a stellar spectrum is dark for the same reason the 15 micrometre band is cold in Earth's: at that wavelength you are seeing a higher, cooler layer.

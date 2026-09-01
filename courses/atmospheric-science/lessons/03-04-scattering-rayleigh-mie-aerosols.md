# Atmospheric Science · Lesson 3.4: Scattering — Rayleigh, Mie & aerosols

> ⏱ ~15 min · Module 3: Radiation & the atmospheric energy budget · Builds on: [3.3 Radiative transfer & the vertical temperature profile](03-03-radiative-transfer-vertical-profile.md), [2.3 Cloud & precipitation formation](02-03-cloud-precipitation-formation.md) · Unlocks: 3.5 (insolation), 6.4 (observing the atmosphere)

## Why this matters

Lesson 3.3 handled two of the three ways radiation interacts with the atmosphere: absorption and emission. The third is **scattering**, and it is the one you can see. Scattering makes the sky blue, sunsets red, clouds white and haze grey; it puts a third of the reflected sunlight in Earth's albedo budget; and it is how aerosols — volcanic, industrial and desert — cool the planet. It is also, unlike absorption, *elastic*: the photon changes direction without changing energy, so scattering never heats anything. That distinction matters for the energy budget of [3.2](03-02-greenhouse-effect-energy-budget.md), where scattered sunlight leaves the planet entirely while absorbed sunlight stays.

## The idea

**Scattering redirects; absorption converts.** An absorbed photon is gone — its energy becomes molecular motion, and the gas warms. A scattered photon carries on in a new direction with the same energy. That is why a hazy sky is bright rather than warm, and why the 30 percent albedo of [3.1](03-01-solar-terrestrial-radiation.md) represents energy the planet never had a chance to use.

**One number decides the regime.** Compare the scatterer's size $r$ to the wavelength $\lambda$ through the **size parameter** $x = 2\pi r/\lambda$. Three regimes:

- $x \ll 1$ — the scatterer is far smaller than a wavelength, so it sits in an essentially uniform oscillating field, is polarized by it, and re-radiates as a tiny dipole antenna. This is **Rayleigh scattering**, and its cross-section goes as $\lambda^{-4}$.
- $x \sim 1$ — the scatterer is comparable to a wavelength and different parts of it see different phases. Interference between them produces a complicated, strongly forward-peaked pattern with weak wavelength dependence. This is the **Mie** regime, and it is where aerosols live.
- $x \gg 1$ — the scatterer is huge compared with a wavelength and you can use ray optics. Rainbows and halos live here.

**Why the sky is blue.** Air molecules have $x \approx 0.002$, deep in the Rayleigh regime, so short wavelengths scatter far more strongly: blue at 450 nm scatters $(650/450)^4 = 4.4$ times as much as red at 650 nm. Looking anywhere but at the sun, you see scattered light, and that light is blue.

**Why sunsets are red.** Same fact, opposite question. Looking *at* the low sun you see the light that was *not* scattered out of the beam — and at a grazing path length nearly forty times the vertical one, blue has been almost entirely removed while red survives. The colour of the sky and the colour of the sunset are two sides of one $\lambda^{-4}$.

**Why clouds are white.** Cloud droplets have $x \approx 126$ — far outside the Rayleigh regime, where scattering is nearly wavelength-independent. All colours scatter equally, so the cloud is white. It is *bright* because a cloud is optically thick: a photon is scattered dozens of times and most eventually come back out the top. And a thick cloud's base is dark for the same reason — the photons ran out of chances to get through.

## The formal version

**The Rayleigh cross-section.** For a particle of polarizability $\alpha_p$, dipole radiation gives a scattering cross-section

$$\sigma_s = \frac{128\pi^5}{3}\frac{\alpha_p^2}{\lambda^4} \;\propto\; \frac{r^6}{\lambda^4}.$$

*In words: scattering by a small particle rises as the sixth power of its size and falls as the fourth power of wavelength.* The $\lambda^{-4}$ is the famous part; the $r^6$ is why a small number of large particles scatters far more than the same mass in small ones.

The **Rayleigh optical depth** of the whole atmosphere, vertically, is well fitted by $\tau_R \approx 0.0086\,\lambda^{-4}$ with $\lambda$ in micrometres:

| $\lambda$ | colour | $\tau_R$ | vertical transmission |
|---|---|---|---|
| 0.45 micrometres | blue | 0.221 | 80 percent |
| 0.55 micrometres | green | 0.097 | 91 percent |
| 0.65 micrometres | red | 0.049 | 95 percent |

Even overhead, a fifth of the blue is scattered out of the direct beam and only a twentieth of the red. Note these are small optical depths — the atmosphere is *nearly* transparent, which is exactly the assumption Module 3 has been making.

**The sunset, quantified.** At the horizon the airmass factor of [3.3](03-03-radiative-transfer-vertical-profile.md) reaches about 38 (refraction limits it; the naive $1/\cos\theta$ would diverge). Then

$$\frac{I}{I_0}\bigg|_{\text{blue}} = e^{-0.221\times38} = e^{-8.40} = 2.2\times10^{-4}, \qquad \frac{I}{I_0}\bigg|_{\text{red}} = e^{-0.049\times38} = e^{-1.87} = 0.153.$$

The transmitted beam is **690 times richer in red than in blue** than it started. That ratio is the sunset.

**The Mie regime and aerosols.** For $x \sim 1$ there is no simple power law — the full Mie solution to Maxwell's equations is required, and the cross-section oscillates with $x$. Two practical facts survive:

- **Weak wavelength dependence.** Aerosol scattering typically goes as $\lambda^{-1}$ to $\lambda^{-1.5}$ rather than $\lambda^{-4}$, which is why polluted or humid skies look *white* or grey rather than blue: the aerosol contribution is nearly colourless and dilutes the molecular blue.
- **Strong forward peaking.** The **asymmetry parameter** $g = \langle\cos\Theta\rangle$ is 0 for Rayleigh scattering (perfectly symmetric, forward and backward equally) but about 0.85 for cloud droplets, meaning most light continues nearly forward. This is why you can see the sun's position through thin cloud, and it enters every radiative-transfer calculation as the fraction of scattering that effectively "does not count."

**Aerosol optical depth and climate.** Aerosol optical depth (AOD) at 550 nm runs about 0.05 over clean ocean, 0.1 to 0.3 over industrial regions, and above 1 in a dust storm or smoke plume. Because scattered sunlight is reflected away rather than absorbed, this is the **direct aerosol effect**, a cooling. Volcanoes make the point dramatically: Pinatubo in 1991 injected sulfate into the *stratosphere*, where nothing rains it out, raising global AOD by about 0.15 and cooling the planet roughly 0.5 K for two years. (There is also an **indirect** effect — the cloud-brightening of [2.3](02-03-cloud-precipitation-formation.md)'s Example 2 — which is larger and far more uncertain. Both are quantified in [`climate-science`](../../climate-science/syllabus.md).)

## Picture

![Left, a logarithmic size-parameter axis divided into the Rayleigh, Mie and geometric regimes, with air molecules at 0.002, aerosols near 6 and cloud droplets near 126 marked; right, the Rayleigh cross-section plotted against wavelength across the visible band, falling steeply as lambda to the minus four, with blue, green and red marked on the curve](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — classifying scatterers).** Compute the size parameter at $\lambda = 0.5$ micrometres for a nitrogen molecule ($r \approx 1.5\times10^{-10}$ m), an accumulation-mode aerosol ($r = 0.5$ micrometres), and a cloud droplet ($r = 10$ micrometres). Name each regime.

$$x_{\mathrm{N_2}} = \frac{2\pi \times 1.5\times10^{-10}}{5\times10^{-7}} = 1.9\times10^{-3} \quad\Rightarrow\quad \text{Rayleigh},$$
$$x_{\text{aerosol}} = \frac{2\pi \times 5\times10^{-7}}{5\times10^{-7}} = 6.3 \quad\Rightarrow\quad \text{Mie},$$
$$x_{\text{droplet}} = \frac{2\pi \times 1\times10^{-5}}{5\times10^{-7}} = 126 \quad\Rightarrow\quad \text{geometric}.$$

*The point.* Five orders of magnitude in particle size span all three regimes, and the atmosphere contains all of them at once. Which regime dominates the sky's appearance on a given day is simply which population is most abundant — molecules on a clean day (blue), aerosols on a hazy one (white), droplets when there is cloud.

**Example 2 (why you'd care — why the sky is not violet).** Violet light (400 nm) has a shorter wavelength than blue (450 nm), so by $\lambda^{-4}$ it should scatter $(450/400)^4 = 1.60$ times *more*. Why isn't the sky violet?

Three reasons compound, and none is the scattering physics:

1. **The solar spectrum falls off.** The Sun's 5772 K Planck curve peaks near 500 nm and has less power at 400 nm than at 450, so there is less violet to scatter in the first place.
2. **Ozone absorbs in the Chappuis band.** A weak but broad absorption across 450 to 700 nm preferentially removes some longer wavelengths, and stratospheric ozone measurably deepens the sky's blue — the subject of [3.6](03-06-ozone-photochemistry-stratosphere.md).
3. **Human colour vision.** The eye's three cone types respond to the whole scattered spectrum at once. A mixture rich in violet *and* blue *and* containing some green is perceived as sky-blue, not violet — our S-cones peak near 420 nm but are far less sensitive than the M- and L-cones, so a violet-dominant physical spectrum still reads as blue.

*The general lesson.* "Blue sky" is the composition of a physical law, a source spectrum, an absorber and a detector. Getting the $\lambda^{-4}$ right predicts that short wavelengths dominate; predicting the actual perceived colour needs all four. This is worth remembering whenever a clean scaling law is asked to explain an observation.

## Watch out

- **You might think** scattering heats the atmosphere. **Actually** it is elastic — the photon keeps its energy and only changes direction. Scattering contributes to *albedo*, not to heating. Only absorption heats, which is why [3.3](03-03-radiative-transfer-vertical-profile.md)'s temperature profile depended on absorbers and this lesson's phenomena are all visual.
- **You might think** the $\lambda^{-4}$ law applies to clouds, so clouds should be blue. **Actually** cloud droplets have $x \approx 126$, thousands of times outside the Rayleigh regime where that law holds. Applying a formula outside its size range is the error; in the geometric regime scattering is essentially wavelength-flat, hence white.
- **You might think** a white or grey sky means thin cloud. **Actually** it often means *aerosol*: Mie scattering is nearly colourless and dilutes the molecular blue, so a hazy summer sky is white on a completely cloud-free day. Whiteness measures particle size, not the presence of cloud.
- **You might think** clouds are white because they are made of water, which is clear. **Actually** the whiteness comes from *multiple* scattering off many droplet surfaces, not from the water's own colour. The same physics makes snow, foam, crushed glass and milk white while ice, water, glass and butterfat are all transparent.

## One-liner

> Compare the particle to the wavelength: much smaller gives Rayleigh's $\lambda^{-4}$ and a blue sky, comparable gives Mie's near-colourless haze, much larger gives white cloud — and none of it heats anything.

## Problems

**P1 (🟢)** Using $\tau_R \approx 0.0086\,\lambda^{-4}$ with $\lambda$ in micrometres, compute the vertical Rayleigh optical depth at 0.40 micrometres (violet) and at 0.70 micrometres (deep red). What fraction of each is transmitted with the sun overhead?

**P2 (🟡)** A dust storm raises the aerosol optical depth at 550 nm from 0.08 to 1.4. (a) By what factor is the direct solar beam at that wavelength reduced, with the sun at a 30-degree zenith angle? (b) The dust particles have $r \approx 2$ micrometres — compute the size parameter and name the regime. (c) Would you expect the sky during the storm to look blue, white or brown, and why?

**P3 (🔴, optional)** Rayleigh scattering by a small particle goes as $r^6$, while the *number* of particles you get from a fixed mass of material goes as $r^{-3}$. (a) Show that, at fixed total mass, the scattered intensity scales as $r^3$. (b) A pollution-control measure converts a given mass of aerosol from 1-micrometre particles into 0.1-micrometre particles. What happens to the scattered intensity, assuming Rayleigh scattering applies to both? (c) State the one physical reason this calculation must not be trusted for the 1-micrometre case, and what it means for the real answer.

<details>
<summary>Solutions</summary>

**P1** At 0.40 micrometres:

$$\tau_R = 0.0086 \times (0.40)^{-4} = \frac{0.0086}{0.0256} = 0.336, \qquad e^{-0.336} = 0.715.$$

At 0.70 micrometres:

$$\tau_R = 0.0086 \times (0.70)^{-4} = \frac{0.0086}{0.2401} = 0.0358, \qquad e^{-0.0358} = 0.965.$$

So **28 percent of the violet** but only **3.5 percent of the deep red** is scattered out of the overhead beam — a factor of 8 difference, which is $(0.70/0.40)^4 = 9.4$ once you account for the small departure from the linearized exponential.

*Check.* Both are consistent with the tabulated values in the lesson (0.221 at 0.45, 0.049 at 0.65), and the trend is monotone and steep, as $\lambda^{-4}$ demands.

**P2** (a) The airmass factor at 30 degrees is $1/\cos30^\circ = 1.155$. The optical depth rose by $\Delta\tau = 1.4 - 0.08 = 1.32$, so the slant increase is $1.32 \times 1.155 = 1.525$:

$$\frac{I_{\text{storm}}}{I_{\text{clean}}} = e^{-1.525} = 0.218.$$

The direct beam is cut to **22 percent** — reduced by a factor of about 4.6.

(b) $$x = \frac{2\pi \times 2\times10^{-6}}{5.5\times10^{-7}} = 22.8,$$

comfortably above 1, so this is the **large end of the Mie regime**, edging toward geometric optics.

(c) **Brown or ochre.** Two effects. First, at $x \approx 23$ the scattering is nearly wavelength-independent, so the dust contributes no blue — it whitens the sky, just as haze does. Second, and decisively, mineral dust also *absorbs*, and it absorbs preferentially at short wavelengths (iron oxides), removing blue from the transmitted light. Non-absorbing large particles give white; absorbing ones give the characteristic brown-orange of a dust event. This is why smoke from wildfires reddens a sun that haze merely dims.

**P3** (a) Let a fixed total mass $M$ be divided into particles of radius $r$. Each has volume $\propto r^3$, so the number of particles is $N \propto M/r^3$. Each scatters with cross-section $\sigma \propto r^6$. The total scattering is

$$N\sigma \;\propto\; \frac{M}{r^3}\times r^6 = M\,r^3.$$

So at fixed mass, **scattered intensity scales as $r^3$** — bigger particles scatter far more, even though there are fewer of them.

(b) Shrinking the particles from 1 micrometre to 0.1 micrometres is a factor of 10 in radius, hence

$$\left(\frac{0.1}{1.0}\right)^3 = 10^{-3},$$

a **thousandfold reduction** in scattered intensity. The same mass of pollutant, finely divided, would be nearly invisible.

(c) The calculation must not be trusted for the 1-micrometre particles because **they are not in the Rayleigh regime**: $x = 2\pi(1)/0.55 = 11.4$, well into Mie. The $r^6$ law simply does not apply there — Mie cross-sections grow roughly as $r^2$ (geometric area) once $x \gtrsim 1$, not $r^6$.

Redoing it honestly: the 1-micrometre particles scatter with $\sigma \propto r^2$, so their total is $N\sigma \propto M/r$, while the 0.1-micrometre particles ($x = 1.14$, marginally Rayleigh) follow $M r^3$. The real reduction is therefore far smaller than a thousandfold — and in fact fine particles near $x \sim 1$ are close to the *peak* of scattering efficiency per unit mass, which is precisely why sub-micrometre "PM2.5" aerosol is both the biggest visibility problem and the biggest climate-cooling agent. The naive scaling gets the sign right and the magnitude badly wrong.

*Check.* The general moral matches Example 1's: a power law is only valid inside its regime, and the size parameter is what tells you which regime you are in.

</details>

## Flashback

**From Lesson 3.1 (Solar & terrestrial radiation):** Mars has a solar constant of $586\ \mathrm{W\,m^{-2}}$ and an albedo of 0.25. (a) Compute its effective emission temperature. (b) During a global dust storm the albedo rises to 0.35. Compute the new $T_e$ and the change.

<details>
<summary>Solution</summary>

(a) $$T_e = \left[\frac{586 \times 0.75}{4 \times 5.67\times10^{-8}}\right]^{1/4} = \left[\frac{439.5}{2.268\times10^{-7}}\right]^{1/4} = (1.938\times10^{9})^{1/4} = 209.8\ \mathrm{K}.$$

(b) With $\alpha = 0.35$:

$$T_e = \left[\frac{586\times0.65}{2.268\times10^{-7}}\right]^{1/4} = (1.679\times10^{9})^{1/4} = 202.4\ \mathrm{K},$$

a drop of **7.4 K**.

*Check.* The scaling $T_e \propto (1-\alpha)^{1/4}$ gives $209.8\times(0.65/0.75)^{1/4} = 209.8 \times 0.9647 = 202.4$ K, confirming the arithmetic.

Note the connection to this lesson: the albedo rose because suspended dust *scattered* sunlight back to space. Scattering by aerosol is a cooling influence on Mars for exactly the reason it is on Earth — the redirected photons leave without ever depositing their energy. (The full story on Mars is more complex, since dust also absorbs and warms the upper atmosphere while cooling the surface, which is the same absorbing-aerosol distinction drawn in P2.)

</details>

## Connections

- **Backward:** this completes the trio of radiative interactions begun in [3.3](03-03-radiative-transfer-vertical-profile.md) — absorption, emission, and now scattering; the optical-depth and airmass machinery is that lesson's, and the droplet sizes are [2.3](02-03-cloud-precipitation-formation.md)'s.
- **Forward:** [3.5](03-05-solar-geometry-seasons-insolation.md) works out how much sunlight arrives where, which is what all this scattering acts on; [6.4](06-04-observing-the-atmosphere.md) uses scattering deliberately, since a weather radar measures exactly the backscatter from precipitation particles.
- **Sideways (optics):** the Rayleigh dipole picture is an oscillating charge radiating, the same physics as the antenna pattern in [`waves-optics` 2.4](../../waves-optics/lessons/02-04-light-as-em-wave.md), and it also explains why skylight is polarized 90 degrees from the sun — the dipole cannot radiate along its own axis, as [`waves-optics` 4.3](../../waves-optics/lessons/04-03-polarization.md) shows.

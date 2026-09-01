# Physical Oceanography · Lesson 5.4: Equatorial waves and the undercurrent

> ⏱ ~15 min · Module 5: Waves, tides and the equatorial ocean · Builds on: [2.5](02-05-potential-vorticity-stratified-ocean.md), [2.4](02-04-ekman-pumping-wind-stress-curl.md) · Unlocks: [5.5](05-05-walker-bjerknes-enso.md)

## Why this matters

Every result in Modules 2 and 3 assumed $f \ne 0$ and quietly failed at the equator: geostrophy is undefined there, Ekman transport diverges, the Sverdrup balance breaks down. That is not a technical inconvenience to be patched. The equator is a genuinely different dynamical regime, and it is the one place where the ocean responds to a wind change in *months* rather than decades.

The reason is the **equatorial waveguide**. Because $f$ vanishes at the equator and changes sign across it, a band a few hundred kilometres wide traps waves that would otherwise disperse away — and the fastest of them, the equatorial Kelvin wave, crosses the entire Pacific in 73 days at 2.4 m s⁻¹. A mid-latitude baroclinic Rossby wave would take a decade ([2.5](02-05-potential-vorticity-stratified-ocean.md)). **That factor of fifty in speed is why El Niño is an interannual phenomenon and the Pacific Decadal Oscillation is a decadal one.**

The waveguide also supports a current that has no analogue anywhere else: the **Equatorial Undercurrent**, a ribbon of water 300 km wide and 100 m thick flowing *eastward* at a metre a second, directly beneath a surface flow going west. It carries 30 to 40 Sv, and it exists because at the equator there is no Coriolis force to stop water running straight down a pressure gradient.

## The idea

**The trades tilt the thermocline, and the tilt is the whole setup.** Easterly trade winds push surface water westward across the Pacific. It piles up in the west, raising sea level by about half a metre and pressing the thermocline down to 150 m; in the east the thermocline shoals to 50 m and cold water is close to the surface. That configuration — a warm pool in the west, a cold tongue in the east, and a sloping thermocline between — is the equatorial Pacific's basic state, and everything in this lesson and the next is about how it is maintained and how it breaks down.

**At the equator, a pressure gradient drives flow straight down it.** Away from the equator a zonal pressure gradient is balanced by Coriolis and produces a *meridional* geostrophic flow. At the equator there is no Coriolis, so the same pressure gradient simply accelerates water eastward — until friction balances it. That eastward jet is the Equatorial Undercurrent, and it sits in the thermocline where the pressure gradient is largest and the surface wind stress cannot reach.

**Coriolis vanishing at the equator makes a waveguide.** A disturbance that strays north of the equator feels a northern-hemisphere Coriolis force pushing it back; south of the equator, a southern-hemisphere one, also pushing it back. The equator is a **restoring line**, and waves are trapped within a few hundred kilometres of it — the **equatorial deformation radius**, about 320 km.

**The Kelvin wave goes east, and only east.** An equatorial Kelvin wave has no meridional velocity at all; it is a pure zonal oscillation whose amplitude decays as a Gaussian away from the equator. The trapping only works for eastward propagation: the westward-propagating solution grows exponentially away from the equator instead of decaying, so it is inadmissible. **The direction is forced by the boundary condition at infinity**, exactly as [3.2](03-02-western-boundary-currents-stommel-munk.md)'s western boundary layer was.

**And Rossby waves go west, at a third the speed.** The gravest equatorial Rossby wave travels westward at exactly $c/3$. So a disturbance at the western boundary sends a Kelvin wave east in 73 days, and a disturbance at the eastern boundary sends a Rossby wave west in 7 months. **Add the two and you have a round trip of about nine months** — which is the delay in the delayed-oscillator theory of ENSO ([5.5](05-05-walker-bjerknes-enso.md)).

## The formal version

**The equatorial $\beta$-plane.** Near the equator,

$$f = \beta y, \qquad \beta = \frac{2\Omega}{R_E} = \frac{2\times7.292\times10^{-5}}{6.371\times10^{6}} = 2.29\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}.$$

**Reduced gravity and the two-layer model.** For an upper layer of depth $H$ over a much deeper lower layer with density contrast $\Delta\rho$:

$$g' = \frac{g\,\Delta\rho}{\rho_0}, \qquad c = \sqrt{g'H}.$$

*In words: internal waves on the thermocline behave like surface waves on a planet with gravity reduced by the density ratio.* With $\Delta\rho = 4\ \mathrm{kg\,m^{-3}}$, $\rho_0 = 1027$, $H = 150\ \mathrm{m}$:

$$g' = \frac{9.81\times4}{1027} = 0.0382\ \mathrm{m\,s^{-2}}, \qquad c = \sqrt{0.0382\times150} = 2.39\ \mathrm{m\,s^{-1}}.$$

Compare $\sqrt{gH} = 38\ \mathrm{m\,s^{-1}}$ for a barotropic wave in the same layer: the reduced gravity slows internal waves by a factor of 16.

**The equatorial deformation radius.**

$$\boxed{\ L_{\text{eq}} = \sqrt{\frac{c}{\beta}} = \sqrt{\frac{2.39}{2.29\times10^{-11}}} = 3.23\times10^{5}\ \mathrm{m} = 323\ \mathrm{km}\ }$$

*In words: the distance from the equator at which the wave's own speed and the growth of $f$ balance — the width of the waveguide.* Note that it is ten times the mid-latitude deformation radius of [3.4](03-04-mesoscale-eddies-baroclinic-instability.md), which is why equatorial features are broad and mid-latitude eddies are not.

**The equatorial Kelvin wave.** Setting $v = 0$ identically in the shallow-water equations on an equatorial $\beta$-plane leaves

$$\frac{\partial u}{\partial t} = -g'\frac{\partial h}{\partial x}, \qquad \beta y\,u = -g'\frac{\partial h}{\partial y}, \qquad \frac{\partial h}{\partial t} + H\frac{\partial u}{\partial x} = 0.$$

The solution is

$$u,\,h \;\propto\; \exp\!\left(-\frac{\beta y^2}{2c}\right)F(x - ct),$$

*In words: a non-dispersive eastward pulse whose amplitude falls off as a Gaussian with e-folding scale $L_{\text{eq}}$, and which has no north–south motion at all.*

Why eastward only: the second equation, combined with the first, requires $h \propto e^{\mp\beta y^2/2c}$ for propagation at $\pm c$. The westward solution takes the growing sign and is unbounded, so it does not exist. **One sign of $\beta$, one direction — the same argument as the western boundary current.**

**Equatorial Rossby waves.** The full equatorial wave spectrum has modes labelled by a meridional index $n$; the long-wave (non-dispersive) Rossby speeds are

$$c_n = -\frac{c}{2n+1}, \qquad n = 1, 2, 3,\ldots$$

so the gravest is $-c/3 = -0.80\ \mathrm{m\,s^{-1}}$. The Kelvin wave is the $n = -1$ member of the same family, and there is also a **mixed Rossby–gravity (Yanai) wave** at $n=0$.

| Wave | Speed | Direction | Pacific crossing (15,000 km) |
|---|---|---|---|
| Kelvin | $c = 2.39\ \mathrm{m\,s^{-1}}$ | east | **73 days** |
| Rossby, $n=1$ | $c/3 = 0.80$ | west | **7.2 months** |
| Rossby, $n=2$ | $c/5 = 0.48$ | west | 12 months |
| Mid-latitude Rossby (30°N) | 0.026 | west | 18 years |

**Reflections.** At the eastern boundary a Kelvin wave reflects into westward Rossby waves; at the western boundary Rossby waves reflect into an eastward Kelvin wave. The waveguide is therefore a **resonant cavity with a round-trip time** of about 73 days plus 7.2 months, or roughly nine months.

**The thermocline tilt.** The trade-wind stress is balanced by the pressure gradient in the upper layer:

$$\tau_x = \rho_0 g' H\frac{\partial h}{\partial x} \qquad\Longrightarrow\qquad \frac{\partial h}{\partial x} = \frac{\tau_x}{\rho_0 g' H}.$$

With $\tau_x = -0.05\ \mathrm{N\,m^{-2}}$ (easterly):

$$\frac{\partial h}{\partial x} = \frac{-0.05}{1027\times0.0382\times150} = \frac{-0.05}{5885} = -8.5\times10^{-6},$$

so across 15,000 km the thermocline deepens westward by $\Delta h = 127\ \mathrm{m}$ — against the observed 150 m in the west and 50 m in the east. The accompanying sea-surface tilt is smaller by the density ratio:

$$\Delta\eta = \frac{\Delta\rho}{\rho_0}\Delta h = \frac{4}{1027}\times127 = 0.49\ \mathrm{m},$$

against an observed 0.5 to 0.6 m. **Two numbers from one wind stress, both right.**

**The Equatorial Undercurrent.**

| Property | Value |
|---|---|
| Core depth | 100–200 m (in the thermocline, shoaling eastward) |
| Core speed | 1.0–1.5 m s⁻¹ eastward |
| Width | about 300 km, i.e. $\approx L_{\text{eq}}$ |
| Thickness | about 100 m |
| Transport | 30–40 Sv |

Check: $3\times10^{5}\times100\times1.0 = 3\times10^{7}\ \mathrm{m^3\,s^{-1}} = 30\ \mathrm{Sv}$. $\checkmark$

*Why it is there.* The zonal pressure gradient set up by the trades exists at every depth in the upper layer. At the surface, the wind stress opposes it and wins, so the surface flow is westward. Below the reach of the wind's direct stress but still above the thermocline, the pressure gradient is unopposed — and at the equator there is no Coriolis force to deflect the resulting flow. Water accelerates eastward until friction balances the gradient. **The undercurrent is what a pressure gradient does when nothing turns it.**

## Picture

![A zonal section along the equator across the Pacific from 150 east to 90 west. The sea surface slopes down toward the east, 0.49 m higher in the west. The thermocline slopes the opposite way, 127 m deeper in the west, from about 150 m depth in the west to 50 m in the east. A grey arrow at the top shows the easterly trades blowing westward; a blue arrow just below the surface shows the westward surface flow. A thick blue arrow within the thermocline shows the Equatorial Undercurrent flowing eastward at 1 m per second carrying 30 sverdrups. A coral arrow at the eastern end marks upwelling. The warm pool at 29 degrees is labelled in the west and the cold tongue at 23 degrees in the east](assets/05-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the waveguide's clock).** Model the equatorial Pacific as two layers with an upper layer of 150 m and a density contrast of $4\ \mathrm{kg\,m^{-3}}$, with $\rho_0 = 1027$ and $\beta = 2.29\times10^{-11}$.

(a) *Reduced gravity and wave speed.*
$$g' = \frac{9.81\times4}{1027} = 0.0382\ \mathrm{m\,s^{-2}}, \qquad c = \sqrt{0.0382\times150} = 2.39\ \mathrm{m\,s^{-1}}.$$

(b) *Waveguide width.*
$$L_{\text{eq}} = \sqrt{c/\beta} = 323\ \mathrm{km}.$$

(c) *Kelvin crossing.*
$$t_K = \frac{1.5\times10^{7}}{2.39} = 6.27\times10^{6}\ \mathrm{s} = 72.5\ \mathrm{days}.$$

(d) *Rossby return at $c/3$.*
$$t_R = \frac{1.5\times10^{7}}{0.798} = 1.88\times10^{7}\ \mathrm{s} = 217.6\ \mathrm{days} = 7.15\ \mathrm{months}.$$

(e) *Round trip.*
$$t_K + t_R = 290\ \mathrm{days} = 9.5\ \mathrm{months}.$$

**Nine and a half months**, against ENSO's observed period of two to seven years. The round trip is not the period — it is the *delay*, and a delayed feedback with a nine-month lag produces an oscillation with a period of several times that ([5.5](05-05-walker-bjerknes-enso.md)). That the two numbers are within a factor of a few, rather than a factor of a hundred, is the evidence that the waveguide is what sets ENSO's timescale.

**Example 2 (why you'd care — reading a Kelvin wave off a sea-level record).** In late 2014 a westerly wind burst over the western Pacific launched a downwelling Kelvin wave. Altimetry shows a positive sea-level anomaly of 15 cm crossing the basin. (a) Estimate the associated thermocline displacement. (b) Predict when it reaches the South American coast, 13,000 km away. (c) State what it does when it arrives. (d) Why does it not simply disperse?

(a) *The thermocline displacement.* For a first-baroclinic mode, sea-surface and thermocline anomalies are related by the density ratio:

$$\Delta h = \frac{\rho_0}{\Delta\rho}\Delta\eta = \frac{1027}{4}\times0.15 = 38.5\ \mathrm{m}.$$

**A 15 cm bump on the sea surface is a 39 m depression of the thermocline** — the internal displacement is 260 times the surface one, which is exactly why altimetry is such a sensitive tool for the equatorial ocean.

(b) $$t = \frac{1.3\times10^{7}}{2.39} = 5.44\times10^{6}\ \mathrm{s} = 63\ \mathrm{days},$$

about two months.

(c) *On arrival.* A downwelling Kelvin wave deepens the thermocline at the eastern boundary. The upwelling driven by the local trades ([3.5](03-05-coastal-upwelling-eastern-boundary.md)) then draws from *within* the warm layer instead of from below it, so the water that reaches the surface is warm and nutrient-poor. Sea surface temperature rises by 2 to 4 K; the anchoveta fishery collapses. Part of the energy also propagates poleward along the coast as a coastal Kelvin wave, deepening the thermocline as far as California within a few more months.

(d) *Why it does not disperse.* Two independent reasons, and both matter.

First, the equatorial Kelvin wave is **non-dispersive**: its speed $c$ is independent of wavelength, so a pulse of any shape propagates unchanged. Compare the swell of [5.2](05-02-swell-and-the-sea-state.md), which sorts itself out over a few thousand kilometres precisely because its speed depends on period.

Second, it is **trapped**: the Gaussian meridional structure is an exact solution, not an initial condition that spreads. Energy cannot leak poleward, because the restoring effect of $\beta y$ confines it.

*The point.* A wave that is both non-dispersive and trapped is a nearly perfect delay line. It carries a signal 13,000 km with its shape and amplitude largely intact and delivers it two months later — which is why the equatorial Pacific has genuine *predictability* at seasonal lead times, while the mid-latitude atmosphere does not ([atmospheric-science 6.5](../../atmospheric-science/lessons/06-05-predictability-two-week-limit.md)). Operational ENSO forecasting is, at its core, the observation that a signal launched in the west arrives in the east two months later and can be watched crossing.

## Watch out

- **You might think** the equator's dynamics are a small correction to mid-latitude dynamics. **Actually** they are a different regime: geostrophy fails, the deformation radius is ten times larger, waves are fifty times faster, and the dominant current has no mid-latitude analogue. Nothing from Modules 2 and 3 transfers unmodified.
- **You might think** the Equatorial Undercurrent is driven by the wind. **Actually** the wind drives the *surface* flow, which goes the other way. The undercurrent is driven by the pressure gradient the wind builds up, and it flows against the wind — which is why it took until 1952 to be discovered, by a fisherman's longline being dragged east.
- **You might think** the eastward-only Kelvin wave is a modelling artefact. **Actually** it is forced by requiring bounded solutions as $y\to\pm\infty$, exactly as [3.2](03-02-western-boundary-currents-stommel-munk.md)'s exponential argument forces the boundary layer onto the west. Both are instances of a boundary condition at infinity selecting one of two mathematical solutions.

## One-liner

> At the equator the Coriolis force vanishes, which traps waves in a 320 km waveguide, lets a pressure gradient drive a metre-per-second jet straight eastward beneath a westward surface flow, and — because a Kelvin wave crosses the Pacific in 73 days and a Rossby wave returns in seven months — gives the ocean a nine-month delay line that sets the timescale of El Niño.

## Problems

**P1 (🟢)** An equatorial ocean has an upper layer of 120 m with a density contrast of $3.5\ \mathrm{kg\,m^{-3}}$, $\rho_0 = 1026$, $\beta = 2.29\times10^{-11}$. (a) Compute $g'$ and the Kelvin wave speed. (b) Compute the equatorial deformation radius. (c) Compute the time for a Kelvin wave to cross a 6000 km basin, and the time for the gravest Rossby wave to return.

**P2 (🟡)** Trade winds of $\tau_x = -0.06\ \mathrm{N\,m^{-2}}$ blow across a 12,000 km equatorial basin with an upper layer $H = 140\ \mathrm{m}$, $\Delta\rho = 4.5\ \mathrm{kg\,m^{-3}}$, $\rho_0 = 1027$. (a) Compute $g'$. (b) Compute the thermocline slope and the total east–west thermocline displacement. (c) Compute the sea-surface height difference. (d) The trades weaken by 50 percent. Compute the new displacement and state what happens to the eastern thermocline depth if it was 50 m before.

**P3 (🔴, optional)** Kelvin wave trapping. The meridional structure is $\exp(-\beta y^2/2c)$. (a) Show that the e-folding scale is $L_{\text{eq}} = \sqrt{c/\beta}$. (b) For $c = 2.39\ \mathrm{m\,s^{-1}}$, compute the latitude at which the amplitude has fallen to 10 percent of its equatorial value. (c) A coastal Kelvin wave travelling along an eastern boundary has trapping scale $L_R = c/|f|$ instead. Compute it at 5°N, 15°N and 30°N. (d) Comment on how the trapping scale changes as the wave travels poleward along the coast, and what that implies for the amplitude of the sea-level signal, given that the energy flux is conserved.

<details>
<summary>Solutions</summary>

**P1** (a) $$g' = \frac{9.81\times3.5}{1026} = 0.03347\ \mathrm{m\,s^{-2}}, \qquad c = \sqrt{0.03347\times120} = \sqrt{4.016} = 2.00\ \mathrm{m\,s^{-1}}.$$

(b) $$L_{\text{eq}} = \sqrt{\frac{2.00}{2.29\times10^{-11}}} = \sqrt{8.74\times10^{10}} = 2.96\times10^{5}\ \mathrm{m} = 296\ \mathrm{km}.$$

(c) $$t_K = \frac{6\times10^{6}}{2.00} = 3.00\times10^{6}\ \mathrm{s} = 34.7\ \mathrm{days},$$
$$t_R = \frac{6\times10^{6}}{2.00/3} = 9.00\times10^{6}\ \mathrm{s} = 104\ \mathrm{days} = 3.4\ \mathrm{months}.$$

Round trip 139 days, about 4.6 months — roughly half the Pacific's, because the basin is 40 percent as wide and the stratification a little weaker. This is one reason the Atlantic and Indian Oceans have ENSO-like modes with shorter periods and smaller amplitudes than the Pacific's.

**P2** (a) $$g' = \frac{9.81\times4.5}{1027} = 0.04298\ \mathrm{m\,s^{-2}}.$$

(b) $$\frac{\partial h}{\partial x} = \frac{\tau_x}{\rho_0 g'H} = \frac{-0.06}{1027\times0.04298\times140} = \frac{-0.06}{6180} = -9.71\times10^{-6},$$
$$\Delta h = 9.71\times10^{-6}\times1.2\times10^{7} = 116\ \mathrm{m}.$$

The thermocline is 116 m deeper in the west.

(c) $$\Delta\eta = \frac{\Delta\rho}{\rho_0}\Delta h = \frac{4.5}{1027}\times116 = 0.51\ \mathrm{m}.$$

(d) Halving $\tau_x$ halves the slope, so $\Delta h = 58\ \mathrm{m}$ and $\Delta\eta = 0.25\ \mathrm{m}$.

The tilt relaxes about a pivot near the basin's centre, so the eastern thermocline deepens by roughly half the change in the total displacement:

$$\Delta h_{\text{east}} \approx \frac{116-58}{2} = 29\ \mathrm{m},$$

taking the eastern thermocline from 50 m to about **79 m**.

That is the whole of El Niño's ocean signature in one number. A thermocline at 79 m is below the reach of the local upwelling, which draws from 50 to 60 m; the upwelled water is therefore warm, the cold tongue disappears, sea surface temperature rises by several kelvin, and the atmosphere responds by weakening the trades further ([5.5](05-05-walker-bjerknes-enso.md)). Note that the *cause* posited here — a 50 percent weakening of the trades — is itself an effect in the coupled problem, which is precisely what makes ENSO an oscillation rather than a forced response.

**P3** (a) Write the structure as $\exp(-y^2/2L^2)$ and compare with $\exp(-\beta y^2/2c)$:

$$\frac{1}{2L^2} = \frac{\beta}{2c} \;\Longrightarrow\; L^2 = \frac{c}{\beta} \;\Longrightarrow\; L = \sqrt{c/\beta}. \quad\checkmark$$

(b) Amplitude falls to 10 percent when

$$\exp\!\left(-\frac{y^2}{2L_{\text{eq}}^2}\right) = 0.1 \;\Longrightarrow\; \frac{y^2}{2L_{\text{eq}}^2} = \ln 10 = 2.303 \;\Longrightarrow\; y = L_{\text{eq}}\sqrt{4.605} = 2.146\,L_{\text{eq}}.$$

With $L_{\text{eq}} = 323\ \mathrm{km}$: $y = 693\ \mathrm{km}$, which at 111 km per degree is **6.2 degrees of latitude**.

So the Kelvin wave is effectively confined between about 6°N and 6°S — a narrow ribbon, and the reason equatorial moorings (the TAO/TRITON array) are deployed within a few degrees of the line.

(c) Coastal Kelvin wave trapping scale $L_R = c/|f|$, with $|f| = 2\Omega\sin\phi$:

| Latitude | $|f|$ (s⁻¹) | $L_R = c/|f|$ |
|---|---|---|
| 5°N | $1.271\times10^{-5}$ | 188 km |
| 15°N | $3.774\times10^{-5}$ | 63 km |
| 30°N | $7.292\times10^{-5}$ | 33 km |

(d) The trapping scale **shrinks** as the wave travels poleward, roughly as $1/\sin\phi$: from 188 km at 5°N to 33 km at 30°N, a factor of nearly six.

If the energy flux along the coast is conserved, the energy must be squeezed into a narrower band, so the energy density rises and the amplitude with it. Energy per unit length of coast goes as (amplitude)² times width, so conserving it requires

$$\eta \propto L_R^{-1/2} \propto \sqrt{|f|}.$$

From 5°N to 30°N that is a factor of $\sqrt{7.292/1.271} = 2.4$ in amplitude.

**A coastal Kelvin wave should therefore get taller and narrower as it runs poleward**, and this is observed: the sea-level and thermocline anomalies associated with an El Niño reach the North American coast as a narrow, intense signal hugging the shelf, detectable at San Francisco and beyond, with amplitudes comparable to or larger than those at the equator despite the enormous distance travelled.

Two honest caveats. Real coastal Kelvin waves lose energy continuously — to friction over the shelf, to scattering by coastline irregularities, and by radiating Rossby waves offshore — so the amplitude does not grow as fast as the conservation argument alone implies. And the narrowing eventually makes the wave narrow enough for friction to matter, which is what limits how far poleward the signal is detectable. The scaling gives the tendency, not the magnitude.

</details>

## Flashback

**From Lesson 5.2 (Surface waves, swell and the sea state):** A wave recorder sees the peak swell period fall from 22 s to 15 s over 62 hours. (a) Convert to frequencies and compute $df/dt$. (b) Compute the distance to the storm. (c) Compute the group speed of the 22 s swell and hence how long before the first observation the storm blew.

<details>
<summary>Solution</summary>

(a) $$f_1 = \frac{1}{22} = 0.04545\ \mathrm{Hz}, \qquad f_2 = \frac{1}{15} = 0.06667\ \mathrm{Hz},$$
$$\frac{df}{dt} = \frac{0.06667-0.04545}{62\times3600} = \frac{0.02121}{2.232\times10^{5}} = 9.504\times10^{-8}\ \mathrm{Hz\,s^{-1}}.$$

(b) $$D = \frac{g}{4\pi\,(df/dt)} = \frac{9.81}{4\pi\times9.504\times10^{-8}} = \frac{9.81}{1.1943\times10^{-6}} = 8.21\times10^{6}\ \mathrm{m} = 8210\ \mathrm{km}.$$

(c) $$c_g = \frac{gT}{4\pi} = \frac{9.81\times22}{12.566} = 17.17\ \mathrm{m\,s^{-1}},$$
$$t = \frac{8.21\times10^{6}}{17.17} = 4.78\times10^{5}\ \mathrm{s} = 133\ \mathrm{h} = 5.5\ \mathrm{days}.$$

The storm blew about **5.5 days before the first observation**.

*Check.* Compare the propagation speeds this lesson deals in. This swell crossed 8200 km at 17 m s⁻¹, taking 5.5 days. An equatorial Kelvin wave covers 8200 km at 2.4 m s⁻¹ in 40 days, and a mid-latitude baroclinic Rossby wave would need 10 years. **Three waves in the same ocean, spanning four orders of magnitude in speed** — surface gravity, equatorial internal gravity, and planetary — and each sets the timescale of a different phenomenon: swell forecasting in days, ENSO in months, gyre adjustment in decades.

</details>

## Connections

- **Backward:** the Rossby-wave machinery is [2.5](02-05-potential-vorticity-stratified-ocean.md)'s with $f = \beta y$; the equatorial upwelling that makes the cold tongue is [2.4](02-04-ekman-pumping-wind-stress-curl.md)'s divergence, which that lesson could only handle as a mass budget; the eastward-only selection is [3.2](03-02-western-boundary-currents-stommel-munk.md)'s boundedness argument in a new setting.
- **Forward:** [5.5](05-05-walker-bjerknes-enso.md) couples the thermocline tilt to the atmosphere and uses the nine-month round trip as the delay in an oscillator; the coastal Kelvin waves of P3 carry El Niño's signal to the eastern boundary upwelling systems of [3.5](03-05-coastal-upwelling-eastern-boundary.md).
- **Sideways (waveguides):** the equatorial waveguide is a genuine waveguide in the optical sense — a region where a spatially varying coefficient traps modes that would otherwise radiate — and the mode structure (Hermite functions in $y$, indexed by $n$) is the quantum harmonic oscillator's, because the trapping potential is quadratic. See [`quantum-mechanics`](../../quantum-mechanics/syllabus.md); the correspondence is exact, not an analogy.

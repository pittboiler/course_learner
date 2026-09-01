# Physical Oceanography · Lesson 1.4: Stratification, stability and the buoyancy frequency

> ⏱ ~15 min · Module 1: Seawater and its structure · Builds on: [1.2](01-02-density-equation-of-state.md), [1.3](01-03-ts-diagrams-water-masses.md) · Unlocks: [1.5](01-05-mixed-layer-air-sea-fluxes.md), [5.1](05-01-internal-waves.md)

## Why this matters

One number decides how hard it is to move water up and down, and almost everything downstream depends on it. The buoyancy frequency $N$ sets the speed of internal waves ([5.1](05-01-internal-waves.md)), the ocean's deformation radius and hence the size of its eddies ([3.4](03-04-mesoscale-eddies-baroclinic-instability.md)), how deep a storm can stir ([1.5](01-05-mixed-layer-air-sea-fluxes.md)), and how much energy it costs to lift abyssal water back toward the surface ([4.3](04-03-diapycnal-mixing-abyssal-recipe.md)) — which turns out to be the central unsolved-looking problem of the whole overturning.

It also carries the ocean's strangest instability. A water column can be perfectly stable in density and still overturn, driven purely by the fact that heat diffuses a hundred times faster than salt. That is **double diffusion**, it has no atmospheric analogue, and it is a direct consequence of the ocean being stratified by two substances instead of one.

## The idea

**Displace a parcel and see if it comes back.** Push a parcel of water down a small distance $\delta z$. It keeps its own $\theta$ and $S$ (both conservative), and it adjusts instantly to the local pressure. If it now finds itself denser than its new surroundings, it keeps sinking — unstable. If it finds itself lighter, buoyancy pushes it back up, it overshoots, and it oscillates. **The frequency of that oscillation is $N$.** It is the ocean's natural springiness in the vertical.

**Stratification is astonishingly stiff at the top and floppy at the bottom.** In a summer seasonal thermocline, $N$ corresponds to a buoyancy period of about six minutes: displace a parcel and it bobs like a cork. In the abyss the period is an hour or more. Between those, $N$ falls by an order of magnitude, and since the energy cost of mixing across a stratified layer goes as $N^2$, the abyss is *cheap* to mix and the thermocline is expensive. Hold that asymmetry; Module 4 is built on it.

**Two frequencies bracket everything.** Rotation supplies a second natural frequency, the Coriolis parameter $f$ (from [atmospheric-science 4.2](../../atmospheric-science/lessons/04-02-coriolis-effect.md)), whose period is about 17 hours at 45 degrees. Free internal waves in a rotating stratified fluid can only exist at frequencies **between $f$ and $N$**. Since $N \gg f$ everywhere in the ocean, this band is wide — three or four decades — and it is where most of the ocean's kinetic energy that is not in eddies actually lives.

**And stratification by two substances is not the same as stratification by one.** Density cares about $\theta$ and $S$ together, but molecular diffusion treats them very differently: heat diffuses about 100 times faster than salt. Put warm salty water over cold fresh water — a perfectly stable arrangement in density — and a downward-poking finger of the upper water loses its heat to its surroundings much faster than it loses its salt. It ends up cold *and* salty: denser than everything around it, and it accelerates downward. The result is a forest of millimetre-scale **salt fingers** transporting salt downward through a stably stratified column. Stability in density is not stability, when there are two stratifying agents with different diffusivities.

## The formal version

**The parcel argument.** Displace a parcel upward by $\delta z$ from a level where the environment has density $\bar\rho(z)$. The parcel conserves its potential density; the environment's changes by $\frac{d\bar\rho}{dz}\delta z$. The buoyancy force per unit mass is $-g(\rho_{\text{parcel}} - \rho_{\text{env}})/\rho_0$, so Newton's second law gives

$$\frac{d^2(\delta z)}{dt^2} = \frac{g}{\rho_0}\frac{d\bar\rho}{dz}\,\delta z \;=\; -N^2\,\delta z,$$

$$\boxed{\ N^2 \;\equiv\; -\frac{g}{\rho_0}\frac{d\bar\rho}{dz}\ }$$

*In words: the vertical density gradient, made into a squared frequency. $N^2>0$ means stable and oscillatory; $N^2<0$ means the displacement grows exponentially and the column overturns.* Note $z$ is positive upward, so a stable ocean has $d\bar\rho/dz < 0$ and $N^2 > 0$.

The density here must be **potential** density referenced near the level of interest, or equivalently the *local* density gradient with the adiabatic compression removed — otherwise you measure the compressibility of seawater rather than its stratification, and every ocean on Earth comes out unstable. This is [1.1](01-01-temperature-salinity-pressure.md) and [1.2](01-02-density-equation-of-state.md) cashing out.

**In terms of the state variables.** Substituting the linearized equation of state,

$$N^2 = g\left(\alpha\frac{d\theta}{dz} - \beta\frac{dS}{dz}\right).$$

*In words: warm-over-cold stabilizes, salty-over-fresh destabilizes, and the two compete.* This decomposition is the entrance to double diffusion, because it shows the stratification has two independent parts.

**Typical values.** Using $g = 9.81$ and $\rho_0 = 1027$:

| Region | $d\sigma/dz$ | $N$ (s⁻¹) | $N$ (cph) | Period $2\pi/N$ |
|---|---|---|---|---|
| Seasonal thermocline | $2\times10^{-2}\ \mathrm{kg\,m^{-4}}$ | $1.4\times10^{-2}$ | 8 | 7.5 min |
| Main pycnocline | $1\times10^{-3}$ | $3.1\times10^{-3}$ | 1.8 | 34 min |
| Abyss | $2\times10^{-4}$ | $1.4\times10^{-3}$ | 0.8 | 75 min |
| Coriolis at 45° | — | $1.03\times10^{-4}$ | 0.06 | 16.9 h |

"cph" is cycles per hour, $N\times3600/2\pi$, and is the unit you will see on published $N$ profiles.

**The density ratio and double diffusion.** Define

$$R_\rho \equiv \frac{\alpha\,d\theta/dz}{\beta\,dS/dz},$$

*In words: how much of the stratification is being done by temperature, relative to how much salinity is undoing it.* With $z$ upward, and warm salty water on top, both $d\theta/dz$ and $dS/dz$ are positive, so $R_\rho > 0$; the column is stable in density if $R_\rho > 1$.

| Regime | Condition | What happens |
|---|---|---|
| **Salt fingering** | $1 < R_\rho \lesssim 2$ | warm salty over cold fresh; millimetre fingers carry salt down; vigorous |
| Stable, doubly | $R_\rho \gg 2$ | ordinary stratification; double diffusion negligible |
| **Diffusive convection** | $0.5 \lesssim R_\rho < 1$, with $\theta$ and $S$ both increasing downward | cold fresh over warm salty; produces stacked well-mixed **thermohaline staircases** |
| Statically unstable | $R_\rho < 0$ or density inverted | ordinary convective overturning |

*In words: the closer $R_\rho$ is to 1, the more nearly the two stratifying agents cancel, and the more room molecular diffusivity has to break the tie.* Salt fingering is why the subtropical Atlantic — warm salty water flowing over fresher intermediate water — has an effective salt diffusivity several times its heat diffusivity, and diffusive convection is why the Arctic halocline is layered into a literal staircase of well-mixed steps tens of metres thick.

## Picture

![Two panels. On the left, potential density against depth from 0 to 2000 m: a uniform mixed layer to 60 m, a sharp seasonal thermocline between 60 and 150 m, a gradually steepening permanent pycnocline, then a nearly vertical weakly stratified abyss. On the right, the buoyancy frequency in cycles per hour against the same depth axis: near zero in the mixed layer, peaking at 9.3 cycles per hour at 70 m corresponding to a 6.5 minute buoyancy period, then falling to under 1 cycle per hour below 1000 m. A vertical dashed line at 0.06 cycles per hour marks the Coriolis frequency at 45 degrees, with the internal-wave band lying between the two](assets/01-04-fig1.svg)

The right panel is just the slope of the left panel, rescaled. That is all $N$ is.

## Worked examples

**Example 1 (mechanical — a pycnocline's stiffness).** In a pycnocline, $\sigma_\theta$ rises by $2\ \mathrm{kg\,m^{-3}}$ over $200\ \mathrm{m}$. Compute $N$, the buoyancy period, and state what the period physically represents.

$$\frac{d\bar\rho}{dz} = -\frac{2}{200} = -0.01\ \mathrm{kg\,m^{-4}} \quad(\text{negative because }z\text{ is up}),$$

$$N^2 = -\frac{g}{\rho_0}\frac{d\bar\rho}{dz} = \frac{9.81}{1026}(0.01) = 9.56\times10^{-5}\ \mathrm{s^{-2}},$$

$$N = 9.78\times10^{-3}\ \mathrm{s^{-1}}, \qquad \frac{2\pi}{N} = 643\ \mathrm{s} = 10.7\ \mathrm{min}.$$

*What it represents.* Displace a parcel from its equilibrium level and release it: it returns, overshoots, and completes a full up-and-down oscillation in 10.7 minutes. It is the shortest period at which the stratified fluid can oscillate freely — an internal wave propagating vertically has exactly this period, and one propagating at an angle has a longer one ([5.1](05-01-internal-waves.md)).

**Example 2 (why you'd care — a stable column that overturns anyway).** Beneath the Mediterranean outflow in the eastern North Atlantic, at about 1200 m, $d\theta/dz = +2.0\times10^{-3}\ \mathrm{K\,m^{-1}}$ and $dS/dz = +4.0\times10^{-4}\ \mathrm{m^{-1}}$ (both warmer and saltier upward). Take $\alpha = 1.6\times10^{-4}\ \mathrm{K^{-1}}$, $\beta = 7.6\times10^{-4}$. (a) Is the column statically stable? (b) Compute $R_\rho$ and diagnose. (c) Is this consistent with (a)?

(a) $$N^2 = g\left(\alpha\frac{d\theta}{dz} - \beta\frac{dS}{dz}\right) = 9.81\left(1.6\times10^{-4}\times2.0\times10^{-3} - 7.6\times10^{-4}\times4.0\times10^{-4}\right)$$
$$= 9.81\left(3.20\times10^{-7} - 3.04\times10^{-7}\right) = 9.81\times1.6\times10^{-8} = 1.57\times10^{-7}\ \mathrm{s^{-2}}.$$

Positive, so **statically stable** — but barely. $N = 3.96\times10^{-4}\ \mathrm{s^{-1}}$, a buoyancy period of 4.4 hours, which is extraordinarily weak stratification for 1200 m.

(b) $$R_\rho = \frac{\alpha\,d\theta/dz}{\beta\,dS/dz} = \frac{3.20\times10^{-7}}{3.04\times10^{-7}} = 1.05.$$

Squarely in the **salt-fingering** regime, and at the vigorous end of it.

(c) Entirely consistent, and that is the point. The column is stable in density, so no parcel displaced adiabatically will run away. But the finger instability is not adiabatic: a finger exchanges heat with its surroundings while retaining its salt, so it does not conserve density. It converts a stable salinity-versus-temperature *arrangement* into kinetic energy, and it does so precisely because the two contributions to $N^2$ nearly cancel — the destabilizing salt gradient has almost as much potential energy stored in it as the stabilizing thermal gradient has holding it down.

*The point.* The static stability criterion $N^2 > 0$ is necessary but not sufficient. It assumes the displaced parcel keeps all its properties, which is exactly what molecular diffusion refuses to do when a parcel is thin enough. The relevant scale is set by where diffusion beats advection — for salt fingers, a few centimetres wide, which is why they were not discovered until laboratory work in the 1960s despite being everywhere in the subtropical Atlantic. Whenever a stability criterion depends on a near-cancellation, ask what the criterion assumed was conserved.

## Watch out

- **You might think** you compute $N^2$ from the in-situ density gradient. **Actually** you must remove the adiabatic compression first, or the answer is dominated by the compressibility of seawater and every column looks unstable. Use potential density referenced near the level, or work directly from $N^2 = g(\alpha\theta_z - \beta S_z)$, which has the compression already removed.
- **You might think** a mixed layer has $N = 0$ so nothing can happen there. **Actually** $N \approx 0$ means the column offers no resistance to vertical motion, which is why the mixed layer is the one place surface forcing can penetrate freely — it is the maximum of activity, not the minimum. The $N=0$ statement is about restoring force, not about energy.
- **You might think** double diffusion is a laboratory curiosity. **Actually** salt fingering roughly triples the effective vertical salt flux in the subtropical Atlantic thermocline relative to turbulent mixing alone, and diffusive-convective staircases control the rate at which Atlantic-origin heat reaches the base of Arctic sea ice — a quantity of considerable current interest.

## One-liner

> The buoyancy frequency is the vertical springiness of the ocean, ranging from a six-minute period in the summer thermocline to over an hour in the abyss — and because the ocean is stratified by two substances with different molecular diffusivities, a column can satisfy the stability criterion and still overturn.

## Problems

**P1 (🟢)** In the abyssal Pacific, $\sigma_4$ increases by $0.10\ \mathrm{kg\,m^{-3}}$ over $1000\ \mathrm{m}$. Take $\rho_0 = 1045\ \mathrm{kg\,m^{-3}}$ at that pressure. (a) Compute $N^2$ and $N$. (b) Compute the buoyancy period in hours. (c) Compare with the inertial period at 30 degrees latitude ($f = 7.29\times10^{-5}\ \mathrm{s^{-1}}$) and state whether internal waves can exist at this location at a period of 10 hours.

**P2 (🟡)** An Arctic profile beneath the ice has $d\theta/dz = -1.5\times10^{-3}\ \mathrm{K\,m^{-1}}$ and $dS/dz = -6.0\times10^{-4}\ \mathrm{m^{-1}}$ (both colder and fresher upward, i.e. warmer and saltier downward). Take $\alpha = 0.6\times10^{-4}\ \mathrm{K^{-1}}$ and $\beta = 7.9\times10^{-4}$. (a) Compute $N^2$ and confirm the column is stable. (b) Compute $R_\rho$ and identify the double-diffusive regime. (c) Name the structure this regime produces and say, in one sentence, what it does to the upward heat flux from Atlantic water toward the ice.

**P3 (🔴, optional)** A storm deposits enough turbulent kinetic energy to mix the top of a stratified column. The potential energy required to homogenize a layer of thickness $h$ with a uniform buoyancy frequency $N$ is, per unit area,

$$\Delta PE = \frac{\rho_0 N^2 h^3}{12}.$$

(a) Derive this by computing the potential energy of a linear density profile over $[-h,0]$ and subtracting that of the homogenized layer with the same mean density. (b) Evaluate $\Delta PE$ for $N = 1.4\times10^{-2}\ \mathrm{s^{-1}}$ (seasonal thermocline) and $h = 50\ \mathrm{m}$, and again for $N = 3.1\times10^{-3}\ \mathrm{s^{-1}}$ (main pycnocline) and the same $h$. (c) Given that the cost scales as $N^2h^3$, explain in two sentences why the seasonal thermocline is such an effective barrier to storm mixing, and why the mixed layer nevertheless deepens dramatically in autumn.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{d\bar\rho}{dz} = -\frac{0.10}{1000} = -1.0\times10^{-4}\ \mathrm{kg\,m^{-4}},$$
$$N^2 = \frac{9.81}{1045}\times1.0\times10^{-4} = 9.39\times10^{-7}\ \mathrm{s^{-2}}, \qquad N = 9.69\times10^{-4}\ \mathrm{s^{-1}}.$$

(b) $$\frac{2\pi}{N} = \frac{6.2832}{9.69\times10^{-4}} = 6484\ \mathrm{s} = 1.80\ \mathrm{h}.$$

(c) Inertial period: $2\pi/f = 6.2832/7.29\times10^{-5} = 86\,180\ \mathrm{s} = 23.9\ \mathrm{h}$.

Free internal waves exist only for $f < \omega < N$, i.e. for periods between 1.80 h and 23.9 h. A 10-hour period falls inside that band, so **yes**, internal waves at that period can exist here. Note how narrow the band has become — in the abyss $N$ is only about 13 times $f$, whereas in the seasonal thermocline the ratio is over a hundred. The internal-wave band narrows with depth, which is one reason internal-wave energy accumulates and breaks near the bottom ([4.3](04-03-diapycnal-mixing-abyssal-recipe.md)).

**P2** (a) $$N^2 = g\left(\alpha\frac{d\theta}{dz} - \beta\frac{dS}{dz}\right) = 9.81\left(0.6\times10^{-4}(-1.5\times10^{-3}) - 7.9\times10^{-4}(-6.0\times10^{-4})\right)$$
$$= 9.81\left(-9.0\times10^{-8} + 4.74\times10^{-7}\right) = 9.81\times3.84\times10^{-7} = 3.77\times10^{-6}\ \mathrm{s^{-2}}.$$

Positive: **stable**, with $N = 1.94\times10^{-3}\ \mathrm{s^{-1}}$, a buoyancy period of 54 minutes. Here it is *salinity* holding the column up (the fresh layer on top) while temperature destabilizes it (warm water underneath) — the reverse of the subtropical case.

(b) $$R_\rho = \frac{\alpha\,d\theta/dz}{\beta\,dS/dz} = \frac{-9.0\times10^{-8}}{-4.74\times10^{-7}} = 0.190.$$

With $\theta$ and $S$ both increasing *downward* and $R_\rho < 1$, this is the **diffusive-convection** regime. (Note that $R_\rho = 0.19$ is well below the $0.5$ threshold quoted in the table for vigorous activity, so the double-diffusive flux here is modest — the column is strongly salinity-stratified and the thermal drive is comparatively weak.)

(c) It produces a **thermohaline staircase**: a stack of well-mixed layers, metres to tens of metres thick, separated by thin sharp interfaces across which heat is transported by molecular diffusion alone. Because the heat must cross those thin high-gradient interfaces one after another, the staircase acts as a strong *insulator* — it holds the several hundred watts per square metre of heat stored in the underlying Atlantic layer away from the sea ice, and any process that erodes the staircase would release that heat upward.

**P3** (a) Take $z$ from $-h$ to 0 with a linear profile $\bar\rho(z) = \rho_0 - \frac{\rho_0 N^2}{g}z$, so that $-\frac{g}{\rho_0}\frac{d\bar\rho}{dz} = N^2$ as required. Write $\rho(z) = \rho_0 - c z$ with $c = \rho_0N^2/g$.

Potential energy per unit area of the stratified layer:
$$PE_1 = \int_{-h}^{0} \rho(z)\,g\,z\,dz = g\int_{-h}^0 (\rho_0 - cz)z\,dz = g\left[\rho_0\frac{z^2}{2} - c\frac{z^3}{3}\right]_{-h}^{0} = g\left(-\rho_0\frac{h^2}{2} - c\frac{h^3}{3}\right).$$

The homogenized layer has the mean density $\bar\rho_m = \rho_0 + ch/2$ (the value at $z = -h/2$), and

$$PE_2 = g\,\bar\rho_m\int_{-h}^0 z\,dz = g\left(\rho_0 + \frac{ch}{2}\right)\left(-\frac{h^2}{2}\right) = g\left(-\rho_0\frac{h^2}{2} - c\frac{h^3}{4}\right).$$

$$\Delta PE = PE_2 - PE_1 = g\left(-c\frac{h^3}{4} + c\frac{h^3}{3}\right) = \frac{g\,c\,h^3}{12} = \frac{g h^3}{12}\cdot\frac{\rho_0N^2}{g} = \frac{\rho_0N^2h^3}{12}. \quad\checkmark$$

(b) Seasonal thermocline, $N = 1.4\times10^{-2}$, $h = 50$:
$$\Delta PE = \frac{1027\times(1.4\times10^{-2})^2\times(50)^3}{12} = \frac{1027\times1.96\times10^{-4}\times1.25\times10^{5}}{12} = \frac{2.517\times10^{4}}{12} = 2.10\times10^{3}\ \mathrm{J\,m^{-2}}.$$

Main pycnocline, $N = 3.1\times10^{-3}$, $h = 50$:
$$\Delta PE = \frac{1027\times9.61\times10^{-6}\times1.25\times10^{5}}{12} = \frac{1.234\times10^{3}}{12} = 103\ \mathrm{J\,m^{-2}}.$$

A factor of twenty cheaper, from the $N^2$ scaling alone.

(c) The seasonal thermocline is an effective barrier because the cost of mixing through it goes as $N^2$, and its $N$ is the largest anywhere in the ocean — mixing 50 m of summer thermocline costs twenty times what mixing 50 m of main pycnocline costs, so a storm's finite energy budget is exhausted before it can penetrate.

The autumn deepening happens because the barrier is removed rather than overcome: surface cooling erodes the seasonal thermocline from above, driving convection that homogenizes the upper layer for free, so $N$ within the deepening layer collapses toward zero and each further metre of deepening becomes nearly costless. Once the mixed layer reaches the top of the *permanent* pycnocline, where $N$ rises again, deepening stalls — which is why winter mixed-layer depth is set by the permanent pycnocline and not by the storms ([1.5](01-05-mixed-layer-air-sea-fluxes.md)).

</details>

## Flashback

**From Lesson 1.2 (Density and the nonlinear equation of state):** A parcel of Red Sea outflow water has $(\theta, S) = (22.0\,^\circ\mathrm{C},\ 40.5)$. Using the course reference set ($\rho_0 = 1026$, $\theta_0 = 15$, $S_0 = 35$, $\alpha = 2.0\times10^{-4}\ \mathrm{K^{-1}}$, $\beta = 7.6\times10^{-4}$): (a) compute $\sigma$; (b) the water it meets in the Gulf of Aden has $(\theta,S) = (15.0\,^\circ\mathrm{C},\ 35.5)$ — compute its $\sigma$ and say which sinks; (c) the Red Sea water is 7 degrees warmer, which should make it much lighter, and yet it sinks to about 800 m in the Indian Ocean. Identify the single number in the equation of state that decides this contest, and state the general rule it implies about where in the world ocean salinity rather than temperature controls density.

<details>
<summary>Solution</summary>

(a) $$\rho = 1026\left[1 - 2.0\times10^{-4}(22.0-15) + 7.6\times10^{-4}(40.5-35)\right]$$
$$= 1026\left[1 - 0.00140 + 0.00418\right] = 1026\times1.00278 = 1028.85\ \mathrm{kg\,m^{-3}}, \qquad \sigma = 28.85.$$

(b) $$\rho = 1026\left[1 - 0 + 7.6\times10^{-4}(0.5)\right] = 1026\times1.00038 = 1026.39\ \mathrm{kg\,m^{-3}}, \qquad \sigma = 26.39.$$

The Red Sea water is denser by $2.46\ \mathrm{kg\,m^{-3}}$ — a very large contrast — so it **sinks**, decisively.

(c) The deciding number is the **ratio $\beta/\alpha = 7.6/2.0 = 3.8$**: one unit of salinity is worth 3.8 degrees of cooling. The Red Sea water carries a salinity excess of 5.5 over the reference, worth $5.5\times3.8 = 20.9$ degrees of equivalent cooling, against a temperature excess of only 7 degrees. Salinity wins by a factor of three.

The general rule: since $\beta/\alpha \approx 4$ at mid temperatures — and much larger in cold water, where $\alpha$ collapses toward $0.5\times10^{-4}$ and the ratio exceeds 15 — **salinity controls density wherever the temperature range is compressed and the salinity range is not.** That describes two very different places: the evaporative marginal seas (Red Sea, Mediterranean, Persian Gulf), where salinity is extreme, and the polar oceans, where temperature is pinned near the freezing point and $\alpha$ is tiny. Both are dense-water formation sites, and both make dense water by salinity rather than by cooling ([4.2](04-02-deep-water-formation-convection.md)).

</details>

## Connections

- **Backward:** $N^2$ is nothing but the vertical derivative of [1.2](01-02-density-equation-of-state.md)'s potential density, and the requirement to use *potential* density is [1.1](01-01-temperature-salinity-pressure.md)'s adiabatic correction reappearing; the buoyancy-frequency concept itself is [atmospheric-science 1.4](../../atmospheric-science/lessons/01-04-potential-temperature.md)'s, extended here to a fluid with two stratifying agents.
- **Forward:** $N$ sets the internal-wave dispersion relation in [5.1](05-01-internal-waves.md), the deformation radius $L_d = NH/f$ in [3.4](03-04-mesoscale-eddies-baroclinic-instability.md), the mixing-energy budget in [4.3](04-03-diapycnal-mixing-abyssal-recipe.md), and the mixed-layer deepening problem in [1.5](01-05-mixed-layer-air-sea-fluxes.md).
- **Sideways (mechanics):** the parcel argument produces $\ddot{x} = -N^2x$, which is the simple harmonic oscillator exactly, with buoyancy playing the role of the spring constant — see [`mechanics-refresher` 3.1](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md). The identification is worth taking seriously, because the whole theory of internal waves is the theory of an anisotropic oscillator array.

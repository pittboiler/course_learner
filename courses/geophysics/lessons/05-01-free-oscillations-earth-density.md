# Geophysics · Lesson 5.1: Free oscillations and the Earth's density

> ⏱ ~15 min · Module 5: The deep Earth · Builds on: [1.4](01-04-travel-time-curves-deep-earth.md), [2.1](02-01-figure-of-the-earth.md), [1.1](01-01-the-elastic-earth.md) · Unlocks: [5.2](05-02-mineral-physics-transition-zone.md), [5.4](05-04-the-core.md)

## Why this matters

Module 1 built a velocity-depth profile from travel times and called it the structure of the Earth. It is not. Seismic velocities depend on **two** things — the elastic moduli and the density — and travel times constrain only their ratio. Two unknowns per depth, one equation. **Nothing in Module 1 determines density**, and without density there is no mass distribution, no pressure profile, no way to say what the core is made of.

This lesson supplies the missing information from three independent sources: the Earth's total mass, its moment of inertia, and its **free oscillations** — the ringing of the whole planet after a great earthquake, at periods up to nearly an hour. Together they give the density profile, and hence PREM, the reference model that all of modern seismology is a perturbation of.

## The idea

**A great earthquake makes the whole Earth ring.** Not metaphorically: a magnitude 9 event excites standing waves that persist for weeks, with the entire planet oscillating as a single elastic body. The gravest mode has a period of 54 minutes and the ground moves by a fraction of a millimetre — detectable by long-period seismometers and superconducting gravimeters.

**These are the same modes as a vibrating sphere, and there are two families.** **Spheroidal** modes involve radial motion and change the planet's shape, so they perturb gravity and are seen by gravimeters. **Toroidal** modes are pure twisting on spherical shells, involve no radial motion, no volume change, and — crucially — **cannot exist in a liquid**, so they are confined to the mantle and inner core.

**A mode's frequency depends on density, and this is why they matter.** A travel time is a path integral of slowness, which contains $\sqrt{\rho/M}$ for some modulus $M$ — the density and the modulus are inseparable. A normal-mode frequency, by contrast, depends on the *inertia* of the whole oscillating body as well as its stiffness. **Density enters differently, so the degeneracy is broken.**

**Two whole-planet constraints anchor everything.** The total mass follows from $G$ and the orbit of the Moon, giving a mean density of 5515 kg/m³ — more than twice the density of surface rock, so most of the mass is somewhere denser. The moment of inertia follows from the precession rate ([2.5](02-05-solid-earth-tides-rotation.md)), giving $C/MR^2 = 0.3307$ against 0.4 for a uniform sphere — so the mass is concentrated toward the centre. **Together these two numbers alone require a dense core**, before any seismology at all.

**And within a chemically uniform layer, density can be integrated from the velocities.** The Adams–Williamson equation converts a seismic velocity profile into a density gradient, assuming the layer is homogeneous and adiabatic. Where it works, it fills in the details between the anchors. **Where it fails, the failure locates a change in composition or a phase transition** — which is exactly what happens at 410 and 660 km ([5.2](05-02-mineral-physics-transition-zone.md)).

## The formal version

**Mode nomenclature.** ${}_nS_\ell^m$ and ${}_nT_\ell^m$, where $\ell$ is the angular order (number of nodal lines on the sphere), $m$ the azimuthal order, and $n$ the radial overtone number ($n=0$ is the fundamental).

| Mode | Period | Character |
|---|---|---|
| ${}_0S_2$ | 53.9 min | the "football mode" — the Earth alternately prolate and oblate |
| ${}_0S_0$ | 20.5 min | the "breathing mode" — purely radial expansion and contraction |
| ${}_0T_2$ | 44.2 min | gravest toroidal, a twisting of hemispheres |
| ${}_0S_{20}$ | ~9.9 min | short enough to overlap with surface waves |

*In words: the very longest-period surface waves, wrapped around a finite sphere and interfering with themselves, are free oscillations.* The two descriptions are the same physics.

**Mode splitting.** Rotation and ellipticity break the degeneracy among the $2\ell+1$ values of $m$, splitting each mode into a multiplet — the seismic analogue of Zeeman splitting. The splitting pattern constrains the Earth's rotation, its ellipticity at depth, and inner-core anisotropy ([5.5](05-05-anisotropy-mantle-flow.md)).

**The two integral constraints.**

$$M = \int_0^R 4\pi r^2\rho(r)\,dr = 5.974\times10^{24}\ \mathrm{kg}, \qquad \bar\rho = 5515\ \mathrm{kg\,m^{-3}},$$

$$C = \frac{8\pi}{3}\int_0^R r^4\rho(r)\,dr, \qquad \frac{C}{MR^2} = 0.3307.$$

*In words: the mass weights density by $r^2$ and the moment of inertia by $r^4$, so the two together separate "how much" from "how far out".* For reference: a uniform sphere gives 0.4; a sphere with all its mass at the centre approaches 0.

**The seismic parameter.**

$$\Phi = v_p^2 - \tfrac43 v_s^2 = \frac{K}{\rho}.$$

*In words: the combination of the two wave speeds that isolates the bulk modulus over density, with the shear modulus cancelled out.* This is the quantity travel times *can* deliver cleanly.

**The Adams–Williamson equation.** In a chemically homogeneous, adiabatic, hydrostatic layer,

$$\boxed{\ \frac{d\rho}{dr} = -\frac{\rho\,g(r)}{\Phi(r)}\ }$$

*In words: density increases downward at a rate set by self-compression — how much the weight of the overburden squeezes the material, divided by how hard it resists.* Integrating downward from a known surface density, with $g(r)$ computed from the mass enclosed, gives $\rho(r)$ throughout a homogeneous layer.

**The Bullen parameter.** Define

$$\eta_B = \frac{(d\rho/dr)_{\text{observed}}}{(d\rho/dr)_{\text{Adams-Williamson}}}.$$

*In words: how much faster or slower density actually increases than self-compression alone can explain.* $\eta_B = 1$ means a homogeneous adiabatic layer; $\eta_B > 1$ means density rises faster than compression allows, requiring a change of composition or phase; $\eta_B < 1$ means a superadiabatic temperature gradient or a boundary layer. Observed values are near 1 through most of the lower mantle and depart sharply in the transition zone.

**PREM.** The Preliminary Reference Earth Model (Dziewonski and Anderson, 1981) combines travel times, normal-mode frequencies, mass and moment of inertia into a single radially symmetric model of $\rho$, $v_p$, $v_s$, $Q_\mu$ and $Q_\kappa$. It remains the reference against which anomalies are quoted ([1.5](01-05-seismic-tomography.md)).

## Picture

![Left: two mode diagrams. A circle with two crossed dashed ellipses, one elongated horizontally and one vertically, labelled the football mode, 53.9 minutes. Beside it a circle with two concentric dashed circles, one larger and one smaller, labelled the breathing mode, 20.5 minutes. Notes state that a great earthquake makes the whole Earth ring for weeks, that each mode's frequency depends on density as well as on the moduli, which is exactly what travel times lack, and that two thousand measured frequencies give one density profile. Right: the PREM density profile plotted against depth, rising in steps through the upper mantle with small jumps marked at 410 and 660 kilometres, continuing to rise gradually through the lower mantle, then jumping almost twofold at the core–mantle boundary, marked in coral, and jumping again at the inner-core boundary. A caption calls PREM the reference profile that every later model is a perturbation of](assets/05-01-fig1.svg)

Velocity is what the waves measure. Density is what the whole planet's inertia measures.

## Worked examples

**Example 1 (mechanical — Adams–Williamson in the lower mantle).** At the top of the lower mantle, $v_p = 11.0\ \mathrm{km\,s^{-1}}$, $v_s = 6.2\ \mathrm{km\,s^{-1}}$, $\rho = 4400\ \mathrm{kg\,m^{-3}}$, $g = 10\ \mathrm{m\,s^{-2}}$. Compute the seismic parameter and the density increase over the next 100 km of depth.

*Seismic parameter.*
$$\Phi = v_p^2 - \tfrac43 v_s^2 = 121.0 - \tfrac43(38.44) = 121.0 - 51.25 = 69.75\ \mathrm{km^2\,s^{-2}} = 6.975\times10^{7}\ \mathrm{m^2\,s^{-2}}.$$

*Density gradient.*
$$\frac{d\rho}{dr} = -\frac{\rho g}{\Phi} = -\frac{4400\times10}{6.975\times10^{7}} = -6.31\times10^{-4}\ \mathrm{kg\,m^{-4}}.$$

The minus sign means density increases *downward* (as $r$ decreases). Over 100 km:

$$\Delta\rho = 6.31\times10^{-4}\times1.0\times10^{5} = 63\ \mathrm{kg\,m^{-3}}.$$

**A 1.4 percent increase per 100 km, purely from self-compression.** This is the rate that a homogeneous mantle must obey, and it is the yardstick against which every observed density jump is measured.

**Example 2 (why you'd care — the core from two numbers).** Model the Earth as a uniform core of radius 3480 km inside a uniform mantle. Using only $\bar\rho = 5515\ \mathrm{kg\,m^{-3}}$ and $C/MR^2 = 0.3307$, solve for the two densities.

*Set up.* Let $x = r_c/R = 3480/6371 = 0.54622$, so $x^3 = 0.16296$ and $x^5 = 0.048617$.

*Mass constraint.*
$$\rho_c x^3 + \rho_m(1-x^3) = \bar\rho \;\Longrightarrow\; 0.16296\,\rho_c + 0.83704\,\rho_m = 5515.$$

*Moment-of-inertia constraint.* For a two-shell sphere, $I = \tfrac{8\pi}{15}\left[\rho_c r_c^5 + \rho_m(R^5-r_c^5)\right]$, so

$$\frac{C}{MR^2} = \frac{2}{5}\cdot\frac{\rho_c x^5 + \rho_m(1-x^5)}{\bar\rho} \;\Longrightarrow\; 0.048617\,\rho_c + 0.951383\,\rho_m = \frac{0.3307\times5515}{0.4} = 4559.6.$$

*Solve.* From the mass equation, $\rho_c = 33{,}843 - 5.1365\,\rho_m$. Substituting:

$$0.048617(33{,}843 - 5.1365\rho_m) + 0.951383\rho_m = 4559.6$$
$$1645.4 - 0.24972\rho_m + 0.951383\rho_m = 4559.6$$
$$0.70166\,\rho_m = 2914.2 \;\Longrightarrow\; \rho_m = 4153\ \mathrm{kg\,m^{-3}},$$
$$\rho_c = 33{,}843 - 5.1365\times4153 = 33{,}843 - 21{,}333 = 12{,}510\ \mathrm{kg\,m^{-3}}.$$

*Compare with PREM:* mean mantle density about 4500, mean core about 10,900 kg/m³.

**Two numbers — the Earth's mass and its precession rate — put the core's density at 12,500 against a true 10,900, and require it to be roughly three times denser than the mantle.** No seismology whatever. That is enough to exclude every plausible silicate and to demand a metal, which is the argument that identified the core as iron long before its radius was measured.

*Why the model overshoots, and why that is informative.* The two-layer model forces all the mass concentration into a single step, so it must make the core denser than reality to satisfy the moment-of-inertia constraint. Reality distributes some of the concentration through the mantle itself, which is not uniform: it densifies downward both by self-compression (Example 1) and by the phase transitions at 410 and 660 km ([5.2](05-02-mineral-physics-transition-zone.md)). **Every bit of mantle stratification you add lets the core be less extreme.**

So the 15 percent overshoot is a *measurement* of how much the mantle is itself stratified. Run the calculation with a mantle whose density follows Adams–Williamson rather than being constant, and the required core density drops toward the true value. This is the logic by which the whole radial structure is assembled: **each constraint you add relaxes the demands on the layers you have not yet resolved**, and the process converges on PREM.

*And note the division of labour, which is the point of this module.* The mass and moment of inertia give the gross distribution; normal modes resolve it in depth; travel times give the velocities; Adams–Williamson links velocities to density within homogeneous layers; and the places where that link fails are where the mineral physics of [5.2](05-02-mineral-physics-transition-zone.md) takes over. **No single observation determines the Earth's interior. The model is the intersection of five.**

## Watch out

- **You might think** seismic travel times give the density structure. **Actually** they give velocities, which are ratios of moduli to density — two unknowns, one measurement. Every statement about the Earth's *density* traces back to normal modes, mass and moment of inertia, not to travel times.
- **You might think** toroidal modes are just a mathematical family. **Actually** their absence from the outer core is a hard observational constraint: toroidal motion requires shear rigidity, so the observed toroidal modes are confined to the mantle, and their frequencies therefore constrain mantle structure *without* any contamination from the core. That clean separation is a real analytical advantage.
- **You might think** Adams–Williamson can be integrated straight through the Earth. **Actually** it holds only within a chemically homogeneous, adiabatic layer. Integrating it across the 410, the 660 or the core–mantle boundary is meaningless, and Bullen's parameter exists precisely to flag where the assumption breaks — the breaks being the interesting part.

## One-liner

> Travel times give velocity but not density, so the Earth's mass, its precession, and the fifty-four-minute ringing of the whole planet after a great earthquake are what actually tell you what is down there.

## Problems

**P1 (🟢)** At 1000 km depth, $v_p = 11.5\ \mathrm{km\,s^{-1}}$, $v_s = 6.4\ \mathrm{km\,s^{-1}}$, $\rho = 4600\ \mathrm{kg\,m^{-3}}$, $g = 9.9\ \mathrm{m\,s^{-2}}$. (a) Compute the seismic parameter $\Phi$ in $\mathrm{m^2\,s^{-2}}$. (b) Compute the bulk modulus $K$. (c) Compute the density increase over the next 200 km of depth.

**P2 (🟡)** A hypothetical planet has $\bar\rho = 3900\ \mathrm{kg\,m^{-3}}$ and $C/MR^2 = 0.365$. (a) State qualitatively what the moment-of-inertia factor implies about its interior. (b) Model it as a uniform core of relative radius $x = 0.50$ inside a uniform mantle and solve for the two densities. (c) Comment on whether the result is consistent with an iron core and a silicate mantle.

**P3 (🔴, bridges to [5.2](05-02-mineral-physics-transition-zone.md))** Across the 660 km discontinuity, density jumps by about 5 percent — roughly $200\ \mathrm{kg\,m^{-3}}$ on a background of $4000\ \mathrm{kg\,m^{-3}}$ — over a depth interval of less than 5 km. Take $\Phi = 5.5\times10^{7}\ \mathrm{m^2\,s^{-2}}$ and $g = 9.9\ \mathrm{m\,s^{-2}}$ there. (a) Compute the density increase that self-compression alone would produce over 5 km. (b) Compute the Bullen parameter for the discontinuity. (c) State what the answer rules out and what it requires. (d) Explain why a *chemical* boundary and a *phase* boundary would both satisfy your answer to (c), and name one observation that distinguishes them.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Phi = v_p^2 - \tfrac43 v_s^2 = 132.25 - \tfrac43(40.96) = 132.25 - 54.61 = 77.64\ \mathrm{km^2\,s^{-2}} = 7.764\times10^{7}\ \mathrm{m^2\,s^{-2}}.$$

(b) $$K = \rho\Phi = 4600\times7.764\times10^{7} = 3.57\times10^{11}\ \mathrm{Pa} = 357\ \mathrm{GPa}.$$

(c) $$\frac{d\rho}{dr} = -\frac{\rho g}{\Phi} = -\frac{4600\times9.9}{7.764\times10^{7}} = -5.865\times10^{-4}\ \mathrm{kg\,m^{-4}},$$
$$\Delta\rho = 5.865\times10^{-4}\times2.0\times10^{5} = 117\ \mathrm{kg\,m^{-3}}.$$

**P2** (a) $C/MR^2 = 0.365$ is below the uniform-sphere value of 0.4, so **the mass is concentrated toward the centre** — the planet is differentiated. But it is much closer to 0.4 than the Earth's 0.3307, so the concentration is **mild**: either a small dense core, or a core not much denser than the mantle.

(b) $x = 0.50$, so $x^3 = 0.125$, $x^5 = 0.03125$.

Mass: $$0.125\rho_c + 0.875\rho_m = 3900.$$
Moment of inertia: $$0.03125\rho_c + 0.96875\rho_m = \frac{0.365\times3900}{0.4} = \frac{1423.5}{0.4} = 3558.75.$$

From the first, $\rho_c = (3900 - 0.875\rho_m)/0.125 = 31{,}200 - 7.0\rho_m$. Substituting:

$$0.03125(31{,}200 - 7.0\rho_m) + 0.96875\rho_m = 3558.75$$
$$975 - 0.21875\rho_m + 0.96875\rho_m = 3558.75$$
$$0.75\rho_m = 2583.75 \;\Longrightarrow\; \rho_m = 3445\ \mathrm{kg\,m^{-3}},$$
$$\rho_c = 31{,}200 - 7.0\times3445 = 31{,}200 - 24{,}115 = 7085\ \mathrm{kg\,m^{-3}}.$$

(c) A mantle at 3445 kg/m³ is entirely reasonable for uncompressed silicate. A core at 7085 kg/m³ is **too light for pure iron** at the pressures inside a body of this size — iron at a few tens of GPa would be nearer 9000 to 10,000 kg/m³.

Two readings are possible, and both are real situations in the solar system. Either the core is iron **alloyed with a substantial fraction of light elements** (sulphur is the usual candidate, and an FeS-rich core is much less dense than pure iron); or the core is **smaller than the assumed $x = 0.50$**, and the fitted density is being distorted by forcing the wrong radius. The two are not separable from these two numbers alone — a genuine non-uniqueness of exactly the kind [6.1](06-01-the-linear-inverse-problem.md) formalizes — and resolving it requires an independent measurement of the core radius, which for a body without seismometers means the tidal Love number $k_2$ ([2.5](02-05-solid-earth-tides-rotation.md)) or an induced magnetic response.

**P3** (a) $$\frac{d\rho}{dr} = -\frac{\rho g}{\Phi} = -\frac{4000\times9.9}{5.5\times10^{7}} = -7.2\times10^{-4}\ \mathrm{kg\,m^{-4}},$$
$$\Delta\rho_{\text{AW}} = 7.2\times10^{-4}\times5.0\times10^{3} = 3.6\ \mathrm{kg\,m^{-3}}.$$

(b) $$\eta_B = \frac{200}{3.6} = 56.$$

(c) **Self-compression is excluded outright** — it can supply less than 2 percent of the observed jump. The observation requires the *material itself* to change: either its chemical composition or its crystal structure. A homogeneous, adiabatic layer cannot densify by 5 percent in 5 km under any circumstances, because the only mechanism available to it is squeezing, and squeezing is quantitatively far too weak.

(d) Both a chemical boundary and a phase boundary change the material, and both can produce an arbitrary density jump. Nothing in the density observation alone distinguishes them.

**The distinguishing observation is how the boundary's depth responds to temperature.**

A *chemical* boundary is a compositional interface. Its depth is set by where the two materials happen to meet, and it does not care about local temperature — it may be deflected by flow, but not systematically by heat.

A *phase* boundary is a thermodynamic surface: it occurs where pressure and temperature satisfy the Clausius–Clapeyron relation for the transition. So its depth **must** shift where the temperature is anomalous, by an amount and in a direction set by the Clapeyron slope $dP/dT$ ([5.2](05-02-mineral-physics-transition-zone.md)). Seismically, this is observed directly: the 660 discontinuity is measurably **depressed** beneath cold subducting slabs, by 20 to 30 km, exactly as a negative Clapeyron slope predicts, and the 410 is **elevated** there because its slope has the opposite sign.

That correlated, opposite-signed deflection of two discontinuities in the same place is essentially impossible to arrange chemically and is exactly what phase transitions predict. It is also the observation that, together with tomographic slab imaging, settled the layered-convection debate of [4.4](04-04-mantle-convection-rayleigh-number.md): a chemical boundary would be a barrier, whereas a phase boundary merely imposes a buoyancy penalty that a cold slab can eventually overcome.

</details>

## Flashback

**From Lesson 4.6 (Mantle rheology and post-glacial rebound):** A formerly glaciated region has a load wavelength of 2500 km and a relaxation time of 5000 yr; $\rho = 3300\ \mathrm{kg\,m^{-3}}$, $g = 10\ \mathrm{m\,s^{-2}}$, $\mu = 1.4\times10^{11}$ Pa. (a) Compute the mantle viscosity. (b) Compute the Maxwell time. (c) State roughly what depth range this load samples.

<details>
<summary>Solution</summary>

(a) $$\tau = 5000\times3.156\times10^{7} = 1.578\times10^{11}\ \mathrm{s},$$
$$\eta = \frac{\tau\rho g\lambda}{4\pi} = \frac{1.578\times10^{11}\times3300\times10\times2.5\times10^{6}}{12.566} = \frac{1.578\times10^{11}\times8.25\times10^{10}}{12.566}$$
$$= \frac{1.302\times10^{22}}{12.566} = 1.04\times10^{21}\ \mathrm{Pa\,s}.$$

(b) $$\tau_M = \frac{1.04\times10^{21}}{1.4\times10^{11}} = 7.4\times10^{9}\ \mathrm{s} = 235\ \mathrm{yr}.$$

(c) A load of wavelength $\lambda$ drives flow to a depth of roughly $\lambda/2 \approx 1250$ km, so this measurement averages over the **whole upper mantle and transition zone and the top of the lower mantle** — essentially the same depth range as Fennoscandia, which is why it returns essentially the same viscosity.

</details>

## Connections

- **Backward:** the velocity profile that this lesson converts into a density profile is [1.4](01-04-travel-time-curves-deep-earth.md)'s; the moduli combined into $\Phi$ are [1.1](01-01-the-elastic-earth.md)'s; the moment of inertia comes from the precession of [2.5](02-05-solid-earth-tides-rotation.md) and the flattening of [2.1](02-01-figure-of-the-earth.md).
- **Forward:** [5.2](05-02-mineral-physics-transition-zone.md) explains the density jumps that Adams–Williamson cannot; [5.3](05-03-attenuation-anelasticity.md) covers the $Q$ values that PREM also contains; [5.4](05-04-the-core.md) uses the core density derived here, together with the density of pure iron, to establish that the core contains light elements.
- **Sideways:** normal modes of a sphere are the same eigenvalue problem as the vibrational modes of any bounded domain in [`pdes`](../../pdes/syllabus.md), and the splitting of a mode by rotation is formally the Zeeman effect of [`quantum-mechanics`](../../quantum-mechanics/syllabus.md) — a degeneracy broken by a preferred axis. [`geology` 5.1](../../geology/lessons/05-01-earths-internal-structure.md) runs the mass and moment-of-inertia argument for a general audience and cites this lesson for the seismic half.

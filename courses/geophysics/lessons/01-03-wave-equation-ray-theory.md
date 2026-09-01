# Geophysics · Lesson 1.3: The wave equation and ray theory

> ⏱ ~15 min · Module 1: Seismology & Earth structure · Builds on: [1.1](01-01-the-elastic-earth.md), [1.2](01-02-seismic-wave-zoo.md), [`pdes`](../../pdes/syllabus.md) · Unlocks: [1.4](01-04-travel-time-curves-deep-earth.md), [6.2](06-02-reflection-seismics.md)

## Why this matters

[1.2](01-02-seismic-wave-zoo.md) asserted two wave speeds and moved on. This lesson earns them, by putting Hooke's law into Newton's second law and finding that the resulting equation splits cleanly into two — one for compression, one for shear — with exactly the speeds claimed.

Then it does something more useful. Solving the wave equation everywhere inside a planet is hopeless; but in the high-frequency limit, energy travels along **rays**, and rays obey a single conserved quantity — the ray parameter — that turns a partial differential equation into secondary-school trigonometry. Every travel-time curve, every image of the deep Earth, and the entire core shadow zone follow from that one conserved number.

## The idea

**Newton plus Hooke gives a wave equation, and it factorizes.** Take a small cube of rock, add up the traction on its six faces, and set the net force equal to mass times acceleration. The result contains two kinds of spatial derivative, and a classical decomposition separates any vector field into a curl-free part and a divergence-free part. The curl-free part carries volume change and travels at $\alpha$; the divergence-free part carries shape change and travels at $\beta$. **P and S waves are not two phenomena — they are the two halves of one equation.**

**In the high-frequency limit, wavefronts become rays.** When the wavelength is much shorter than the scale over which velocity changes, energy travels along curves perpendicular to the wavefronts, exactly as in optics. Seismic wavelengths are 1 to 100 km and Earth structure varies over hundreds of kilometres, so this is usually — not always — a good approximation. When it fails, it fails informatively: the sharp shadow-zone edges predicted by ray theory are blurred in reality by diffraction, and the blur is itself measurable.

**Snell's law conserves one number, and that number is the whole subject.** At any interface, $\sin i / v$ is the same on both sides. Since this holds at *every* interface, it holds all the way down: a ray carries a fixed **ray parameter** $p = \sin i / v$ from source to receiver. Because velocity generally increases with depth, $\sin i = pv$ grows as the ray descends, the ray flattens, and eventually $i$ reaches 90 degrees — the ray turns horizontal and heads back up.

**Which gives the central trick of seismology.** The turning depth is set entirely by $p$: the ray bottoms out where $v = 1/p$. Steeper take-off means smaller $p$, deeper turning, and a more distant arrival. **So recording the same earthquake at successively greater distances samples successively deeper rock.** The Earth's interior is read by walking away from the source.

## The formal version

**The elastic wave equation.** Newton's second law for a continuum is $\rho\,\ddot u_i = \partial_j\sigma_{ij}$ (body forces omitted). Substituting isotropic Hooke's law from [1.1](01-01-the-elastic-earth.md), $\sigma_{ij} = \lambda\theta\delta_{ij} + 2\mu e_{ij}$, and taking $\lambda,\mu$ locally constant:

$$\rho\,\frac{\partial^2\mathbf u}{\partial t^2} = (\lambda+\mu)\,\nabla(\nabla\cdot\mathbf u) + \mu\,\nabla^2\mathbf u.$$

*In words: the acceleration of the rock has one term driven by how much the neighbourhood is compressing, and one driven by the curvature of the displacement field.*

**The Helmholtz split.** Write $\mathbf u = \nabla\phi + \nabla\times\boldsymbol\psi$ with $\nabla\cdot\boldsymbol\psi = 0$. The scalar potential $\phi$ carries all the divergence and none of the curl; the vector potential $\boldsymbol\psi$ the reverse. Substituting and separating:

$$\frac{\partial^2\phi}{\partial t^2} = \alpha^2\nabla^2\phi, \qquad \frac{\partial^2\boldsymbol\psi}{\partial t^2} = \beta^2\nabla^2\boldsymbol\psi,$$

$$\boxed{\ \alpha = v_p = \sqrt{\frac{\lambda+2\mu}{\rho}}, \qquad \beta = v_s = \sqrt{\frac{\mu}{\rho}}\ }$$

*In words: two ordinary wave equations, one for the compressional part travelling at $\alpha$, one for the shear part travelling at $\beta$.* Since $\lambda + 2\mu > \mu$ always, $\alpha > \beta$ always: **P is unconditionally faster than S**, in any material whatsoever.

**Snell's law and the ray parameter.** Across a horizontal interface,

$$\frac{\sin i_1}{v_1} = \frac{\sin i_2}{v_2} \equiv p,$$

with $i$ measured from the vertical. *In words: the horizontal slowness is continuous across an interface, so it is conserved along the whole ray.* In a flat Earth $p$ has units of s/km and equals the slope of the travel-time curve:

$$p = \frac{dT}{dx}.$$

**The critical angle and head waves.** Going into a faster medium, $\sin i_2 = (v_2/v_1)\sin i_1$ reaches 1 at

$$i_c = \arcsin\!\left(\frac{v_1}{v_2}\right).$$

At exactly $i_c$ the refracted ray runs along the interface, continuously leaking energy back up as a **head wave** — the phase called Pn when the interface is the Moho. Beyond $i_c$ there is total internal reflection.

**Turning rays in a smooth gradient.** If $v$ increases continuously with depth, a ray of parameter $p$ turns where

$$v(z_t) = \frac1p.$$

For the linear profile $v(z) = v_0 + kz$, rays are **circular arcs** of radius

$$R = \frac{1}{pk},$$

with turning depth

$$z_t = \frac{1}{k}\left(\frac1p - v_0\right).$$

**Spherical Earth.** The flat-Earth ray parameter generalizes to

$$p = \frac{r\sin i}{v(r)} = \frac{dT}{d\Delta},$$

now in units of s/radian (or s/degree), with $\Delta$ the epicentral angle. The turning radius satisfies $p = r_t/v(r_t)$. The quantity $r/v$ is often written $\eta$ and called the **vertical slowness**.

## Picture

![Left panel: a stack of four horizontal layers of increasing velocity below a free surface, with a blue ray entering steeply and kinking at each interface, bending progressively further from the vertical. Incidence angles i1 and i2 are marked against dashed verticals. Labels state that each interface bends the ray further from the vertical, that sine i over v is the same everywhere and equals the ray parameter p, and that p therefore labels the ray for its whole journey. Right panel: the same ray in a smooth velocity gradient, drawn as a smooth arc that descends, flattens and returns to the surface, with the turning point marked in coral where the ray is horizontal, incidence is 90 degrees, and p equals one over the local velocity. Two shallower rays are drawn faintly above it. Labels note that a steeper take-off means a smaller p, a deeper turning point and a longer range, so sampling the deep Earth is a matter of recording the same earthquake further away](assets/01-03-fig1.svg)

The left panel is Snell's law applied four times. The right panel is Snell's law applied infinitely many times. They are the same statement.

## Worked examples

**Example 1 (mechanical — the Moho refraction).** Continental crust has $v_1 = 6.2\ \mathrm{km\,s^{-1}}$ over mantle with $v_2 = 8.1\ \mathrm{km\,s^{-1}}$. (a) A P wave strikes the Moho at 30 degrees from vertical; find the refraction angle and the ray parameter. (b) Find the critical angle.

(a)
$$\sin i_2 = \frac{v_2}{v_1}\sin i_1 = \frac{8.1}{6.2}\times0.5000 = 1.3065\times0.5 = 0.6532 \;\Rightarrow\; i_2 = 40.8^\circ.$$
$$p = \frac{\sin i_1}{v_1} = \frac{0.5}{6.2} = 0.0806\ \mathrm{s\,km^{-1}}.$$
Check against the other side: $0.6532/8.1 = 0.0806$. ✓

(b)
$$i_c = \arcsin\!\left(\frac{6.2}{8.1}\right) = \arcsin(0.7654) = 49.9^\circ.$$

At and beyond 49.9 degrees no energy is transmitted downward as a body wave. The ray parameter at criticality is $p_c = 1/v_2 = 0.1235\ \mathrm{s\,km^{-1}}$ — and note that this is exactly the reciprocal of the *lower* medium's velocity, which is the general rule: **a ray turns where the local velocity equals $1/p$**, and total internal reflection is the degenerate case where that happens right at an interface.

**Example 2 (why you'd care — how deep does my array see?).** A refraction experiment shoots into a crust with $v(z) = 6.0 + 0.010\,z$ km/s ($z$ in km). A ray leaves the source at 60 degrees from vertical. Where does it bottom out, how far away does it come back up, and what does that tell you about designing the experiment?

*Ray parameter.*
$$p = \frac{\sin60^\circ}{6.0} = \frac{0.8660}{6.0} = 0.1443\ \mathrm{s\,km^{-1}}, \qquad \frac1p = 6.928\ \mathrm{km\,s^{-1}}.$$

*Turning depth.*
$$z_t = \frac{1}{k}\left(\frac1p - v_0\right) = \frac{6.928-6.0}{0.010} = 92.8\ \mathrm{km}.$$

*Range.* In a linear gradient the ray is a circular arc of radius $R = 1/(pk) = 1/(0.1443\times0.010) = 693\ \mathrm{km}$, whose centre lies a height $v_0/k = 600$ km *above* the surface. The horizontal distance from source to turning point is $\sqrt{R^2 - (v_0/k)^2} = \sqrt{693^2 - 600^2} = \sqrt{480{,}249-360{,}000} = \sqrt{120{,}249} = 347$ km, so the total range is

$$x = 2\times347 = 694\ \mathrm{km}.$$

*The design lesson.* To see 93 km down you must record 694 km away — a ratio of about seven to one. This is the single most important practical fact in controlled-source seismology and it drives every survey layout: **depth of penetration scales with the length of the recording line, not with the size of the source.** A bigger shot at a short offset gives you a louder record of the shallow subsurface and nothing more. It is also why global seismology needs a globe-spanning network rather than a very sensitive local one, and why the deep mantle was invisible until seismometers existed on several continents at once.

A caution worth carrying: this clean arithmetic assumed velocity increases monotonically. Where it does not — a **low-velocity zone** — rays refract *downward* instead of turning, no ray bottoms in the zone, and it becomes invisible to travel times. That failure mode is the subject of [1.4](01-04-travel-time-curves-deep-earth.md).

## Watch out

- **You might think** the ray parameter is a property of the medium. **Actually** it is a property of the *ray* — a label chosen by the take-off angle at the source, and then conserved. Different rays from the same earthquake have different $p$. What the medium supplies is the map from $p$ to turning depth.
- **You might think** rays bend toward the vertical as they go deeper, since they are heading into "stiffer" rock. **Actually** they bend *away* from the vertical. Snell's law puts velocity in the denominator: entering faster material increases $\sin i$. This is the opposite of light entering glass, because light slows down on entering a dense medium while seismic waves speed up on entering a deep one.
- **You might think** ray theory is exact and the wave equation is the approximation. **Actually** it is the other way around. Ray theory drops all terms involving derivatives of the velocity field, which is legitimate only when the wavelength is short compared with the scale of velocity variation. Near a sharp boundary, or at the edge of a shadow, it fails and diffraction takes over — which is why the core shadow zone has energy in it at all.

## One-liner

> Newton plus Hooke gives two wave equations and hence two speeds; Snell's law gives one conserved number per ray, and that number decides how deep the ray goes and how far away it emerges.

## Problems

**P1 (🟢)** Oceanic crust with $v_1 = 5.0\ \mathrm{km\,s^{-1}}$ overlies mantle with $v_2 = 8.0\ \mathrm{km\,s^{-1}}$. (a) Compute the critical angle. (b) A ray strikes the interface at 25 degrees from vertical; find the refraction angle and the ray parameter. (c) State what happens to a ray arriving at 60 degrees.

**P2 (🟡)** A mantle velocity profile is $v(z) = 8.0 + 0.004\,z$ km/s ($z$ in km below the Moho). A ray has $p = 0.115\ \mathrm{s\,km^{-1}}$. (a) Find its turning depth. (b) Find the radius of the circular ray path. (c) Find the horizontal range from source to receiver. (d) A colleague wants to sample 400 km depth with the same profile — what ray parameter is needed, and is that ray physically launchable from a surface source?

**P3 (🔴, bridges to [5.1](05-01-free-oscillations-earth-density.md))** (a) Starting from the spherical ray parameter $p = r\sin i / v(r)$, show that a ray turns at the radius where $p = r_t/v(r_t)$. (b) Take a simplified mantle in which $v \propto r^{-1}$ exactly. Show that in this case $r/v$ is the same at every radius, and describe what happens to rays. (c) Use (b) to explain why a region in which $v$ falls with depth faster than $r$ does — that is, where $r/v$ *decreases* upward — produces no turning rays at all, and name the observational consequence.

<details>
<summary>Solutions</summary>

**P1** (a) $$i_c = \arcsin(5.0/8.0) = \arcsin(0.625) = 38.7^\circ.$$

(b) $$\sin i_2 = \frac{8.0}{5.0}\sin25^\circ = 1.600\times0.4226 = 0.6762 \;\Rightarrow\; i_2 = 42.5^\circ.$$
$$p = \frac{\sin25^\circ}{5.0} = \frac{0.4226}{5.0} = 0.0845\ \mathrm{s\,km^{-1}}.$$

(c) 60 degrees exceeds the critical angle of 38.7 degrees, so $\sin i_2$ would have to be $1.600\times0.8660 = 1.386 > 1$, which is impossible. The ray is **totally internally reflected** back into the crust; no body-wave energy is transmitted into the mantle. (Energy still crosses as an evanescent field that decays exponentially below the interface, and at exactly $i_c$ the head wave Pn is generated — but past critical, no transmitted ray exists.)

**P2** (a) $$v(z_t) = \frac1p = \frac{1}{0.115} = 8.696\ \mathrm{km\,s^{-1}}.$$
$$z_t = \frac{8.696-8.0}{0.004} = \frac{0.696}{0.004} = 174\ \mathrm{km}.$$

(b) $$R = \frac{1}{pk} = \frac{1}{0.115\times0.004} = \frac{1}{4.6\times10^{-4}} = 2174\ \mathrm{km}.$$

(c) The arc's centre sits $v_0/k = 8.0/0.004 = 2000$ km above the reference level. Half-range:
$$\sqrt{R^2 - (v_0/k)^2} = \sqrt{2174^2 - 2000^2} = \sqrt{4{,}726{,}276 - 4{,}000{,}000} = \sqrt{726{,}276} = 852\ \mathrm{km}.$$
$$x = 2\times852 = 1704\ \mathrm{km}.$$

Again roughly a ten-to-one range-to-depth ratio.

(d) To bottom at 400 km, $v(400) = 8.0 + 1.6 = 9.6\ \mathrm{km\,s^{-1}}$, so $p = 1/9.6 = 0.1042\ \mathrm{s\,km^{-1}}$.

Is it launchable? At the source, $\sin i = p\,v_{\text{source}}$. Taking a source in the uppermost mantle at $v = 8.0$: $\sin i = 0.1042\times8.0 = 0.833$, so $i = 56.4^\circ$ — a perfectly ordinary take-off angle. **Yes.** In fact the constraint runs the other way: the *smallest* achievable $p$ from a surface source is $\sin(0)/v = 0$ (straight down), so arbitrarily deep turning points are launchable in principle; what limits real experiments is having a receiver at the required range and an event large enough to be recorded there.

**P3** (a) The ray turns where it is momentarily horizontal, i.e. where the incidence angle from the local vertical (the radial direction) is $i = 90^\circ$ and $\sin i = 1$. Substituting into $p = r\sin i/v(r)$ at that radius $r_t$:

$$p = \frac{r_t\cdot 1}{v(r_t)} = \frac{r_t}{v(r_t)}. \quad\checkmark$$

*In words: the ray bottoms where the medium's own value of $r/v$ has fallen to match the ray's label $p$.*

(b) If $v = C/r$ then $r/v = r^2/C$, which is **not** constant — it grows as $r^2$. The genuinely degenerate case is $v \propto r$, i.e. $v = Cr$, for which $r/v = 1/C$ everywhere. Then $p = r\sin i/v = \sin i/C$ is the same at all radii, so $\sin i$ is constant along the ray: the ray keeps a fixed angle to the radius and never turns. Such rays spiral inward forever and never return to the surface. (This is the seismological version of a critical refractive-index profile in optics, and $v\propto r$ is the exact boundary case separating turning behaviour from spiralling.)

(c) The quantity that matters is $\eta(r) = r/v(r)$. A turning point exists at $r_t$ only if $\eta(r_t) = p$ and $\eta$ is *increasing* outward there, so that rays with successively smaller $p$ bottom successively deeper in an orderly way. Where $v$ increases downward fast enough that $\eta$ decreases with depth more steeply than the geometry supplies — the spherical version of a **low-velocity zone** is the reverse case, where $v$ *drops* with depth — the map from $p$ to turning depth stops being monotonic. Rays that should have bottomed in the zone are instead refracted downward through it and emerge much further away.

The observational consequence is a **shadow zone**: a band of epicentral distances receiving no direct arrivals, bounded by a sharp drop in amplitude and, at its far edge, by a sudden reappearance of energy that has jumped over the gap. Two such features dominate global seismology — the upper-mantle low-velocity zone, and the great core shadow between about 103 and 143 degrees produced by the enormous velocity drop into the liquid outer core. Both are read in detail in [1.4](01-04-travel-time-curves-deep-earth.md). The general moral is worth keeping: **travel times can only see structure that produces turning rays, so a low-velocity layer is not merely hard to resolve — it is formally invisible**, and its existence must be inferred from the shadow it casts rather than from any ray that sampled it. Recovering density and structure in such regions is exactly why the independent constraints of [5.1](05-01-free-oscillations-earth-density.md) are needed.

</details>

## Flashback

**From Lesson 1.1 (The elastic Earth):** A gabbro sample has $\rho = 3000\ \mathrm{kg\,m^{-3}}$, $K = 88\ \mathrm{GPa}$ and $\mu = 45\ \mathrm{GPa}$. (a) Compute $v_p$ and $v_s$. (b) Compute Poisson's ratio. (c) The sample is then heated until it is 10 percent partially molten, and the melt sits in thin films along grain boundaries. State qualitatively what happens to $v_p$ and to $v_s$, and which is affected more.

<details>
<summary>Solution</summary>

(a) Using $v_p = \sqrt{(K+\tfrac43\mu)/\rho}$:

$$K + \tfrac43\mu = 88 + 60 = 148\ \mathrm{GPa}, \qquad v_p = \sqrt{\frac{1.48\times10^{11}}{3000}} = \sqrt{4.933\times10^{7}} = 7023\ \mathrm{m\,s^{-1}} = 7.02\ \mathrm{km\,s^{-1}}.$$

$$v_s = \sqrt{\frac{4.5\times10^{10}}{3000}} = \sqrt{1.5\times10^{7}} = 3873\ \mathrm{m\,s^{-1}} = 3.87\ \mathrm{km\,s^{-1}}.$$

(b) From $\lambda = K - \tfrac23\mu = 88 - 30 = 58$ GPa:

$$\nu = \frac{\lambda}{2(\lambda+\mu)} = \frac{58}{2(103)} = \frac{58}{206} = 0.282.$$

(A useful check: $v_p/v_s = 7.02/3.87 = 1.81$, and $\sqrt{2(1-0.282)/(1-0.564)} = \sqrt{1.436/0.436} = \sqrt{3.294} = 1.815$. ✓)

(c) **Both fall, but $v_s$ falls much more.** A thin melt film has zero rigidity, and because the films are interconnected along grain boundaries they short-circuit the shear resistance of the whole aggregate: $\mu$ drops sharply for a small melt fraction. The bulk modulus is far less affected, because the melt is itself nearly as incompressible as the solid — squeezing the aggregate still requires squeezing atoms together whether or not they are in a crystal.

So $v_s = \sqrt{\mu/\rho}$ takes the brunt, while $v_p = \sqrt{(K+\tfrac43\mu)/\rho}$ is only partly affected, through the $\tfrac43\mu$ term. Consequently $v_p/v_s$ and Poisson's ratio both **rise** — exactly the signature used to map partial melt beneath volcanic arcs and in the asthenosphere, and the same logic as the water-saturated sediment in P3 of [1.1](01-01-the-elastic-earth.md). The extreme limit is the outer core, where $\mu = 0$ exactly and $v_s$ has fallen all the way to zero.

</details>

## Connections

- **Backward:** the moduli in $\alpha$ and $\beta$ are [1.1](01-01-the-elastic-earth.md)'s, and the two wave types the split produces are [1.2](01-02-seismic-wave-zoo.md)'s. The wave equation itself, its d'Alembert solutions and the separation techniques behind them are [`pdes`](../../pdes/syllabus.md); the Helmholtz decomposition is the same one used to split fluid flow into potential and vortical parts in [fluid-dynamics 2.2](../../fluid-dynamics/lessons/02-02-vorticity-circulation.md).
- **Forward:** [1.4](01-04-travel-time-curves-deep-earth.md) turns $p = dT/d\Delta$ into a velocity-depth profile and reads the core shadow off it; [6.2](06-02-reflection-seismics.md) uses the same Snell geometry at short range, where the reflected rather than the turning ray is the signal.
- **Sideways:** this is Fermat's principle and Snell's law from [`waves-optics`](../../waves-optics/syllabus.md), transplanted whole — with the sign of the bending reversed, because the Earth speeds waves up with depth while glass slows light down. The high-frequency limit that licenses ray theory is the same WKB approximation used in [`quantum-mechanics`](../../quantum-mechanics/syllabus.md) for a slowly varying potential, and a seismic turning point is mathematically the same object as a quantum turning point.

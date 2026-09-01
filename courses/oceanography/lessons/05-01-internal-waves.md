# Physical Oceanography · Lesson 5.1: Internal waves

> ⏱ ~15 min · Module 5: Waves, tides and the equatorial ocean · Builds on: [1.4](01-04-stratification-buoyancy-frequency.md), [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) · Unlocks: [5.3](05-03-tides-equilibrium-dynamical.md), [4.3](04-03-diapycnal-mixing-abyssal-recipe.md)

## Why this matters

Internal waves are waves on the density surfaces *inside* the ocean rather than at its top. They are large — tens to hundreds of metres in amplitude, against a metre or two for surface waves — and invisible, because the sea surface barely moves above them. They are also the ocean's principal means of moving mechanical energy from where it is put in (tides sloshing over ridges, wind hammering the surface) to where it is dissipated (deep, over rough topography), and their breaking is what supplies the mixing that [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) showed the overturning requires.

They also behave in a way that no wave in ordinary experience does. Their frequency depends on the *direction* they travel, not on their wavelength. Their energy propagates at right angles to their crests. And when they reflect off a sloping bottom, the reflection is not mirror-like: the angle to the *horizontal* is preserved, not the angle to the surface, which means a slope can focus a broad beam into an intense one and rip it apart. That is where much of the ocean's mixing actually happens.

## The idea

**Buoyancy is the restoring force, and it is anisotropic.** [1.4](01-04-stratification-buoyancy-frequency.md) showed that a parcel displaced *vertically* in a stratified fluid oscillates at frequency $N$. Displace it along a *sloping* path instead and only the vertical component of the displacement generates a restoring force, so the oscillation is slower. **The frequency depends on the angle of the parcel's path.** That single sentence is the whole dispersion relation.

**So direction, not wavelength, sets the frequency.** A wave of any wavelength travelling along a given direction has the same frequency. This is the opposite of every wave most people have met — sound, light, surface waves — where frequency is set by wavelength and the direction is irrelevant. Here the geometry is everything.

**And energy travels along the crests, not across them.** In a normal wave, energy follows the phase. Here the group velocity is exactly **perpendicular** to the wavevector, so energy runs along the lines of constant phase, in narrow beams. The crests slide sideways through the beam while the energy travels down it. Because the vertical components have opposite signs, **upward-propagating phase means downward-propagating energy** — a signature that lets you read the direction of an energy source off a mooring record.

**Reflection is strange, and that is where the mixing comes from.** An internal wave reflecting off a slope must keep its frequency, and its frequency fixes its angle to the *horizontal*. So it cannot obey the usual law of reflection. On a slope whose steepness matches the beam's angle — a **critical slope** — the incoming and reflected beams coincide, the energy is compressed into a vanishing thickness, and the wave breaks. Continental slopes and mid-ocean ridge flanks are full of near-critical topography, which is precisely why [4.3](04-03-diapycnal-mixing-abyssal-recipe.md)'s mixing hot spots are where they are.

**They fill the ocean, at a nearly universal level.** Garrett and Munk showed in 1972 that internal-wave spectra from everywhere in the ocean collapse onto one shape with one amplitude, to within a factor of two or three. The ocean is saturated with internal waves at a level that appears to be set by their own breaking.

## The formal version

**The dispersion relation.** For a Boussinesq fluid with constant $N$, small-amplitude waves $\propto e^{i(kx+mz-\omega t)}$ (ignoring rotation for the moment) satisfy

$$\boxed{\ \omega^2 = \frac{N^2k^2}{k^2+m^2} \qquad\Longleftrightarrow\qquad \omega = N\cos\theta\ }$$

where $\theta$ is the angle between the **wavevector** and the horizontal. *In words: the frequency depends only on the direction of the wavevector, and equals $N$ when the wavevector is horizontal — because then the parcels move vertically and feel the full restoring force.*

Two immediate consequences:
- $\omega \le N$ always. **The buoyancy frequency is an upper bound on internal-wave frequency**, which is why the $N$ profile of [1.4](01-04-stratification-buoyancy-frequency.md) is drawn on internal-wave diagrams.
- With rotation included, $\omega^2 = N^2\cos^2\theta + f^2\sin^2\theta$, so $f \le \omega \le N$. The band is bounded at both ends.

**Group velocity.** With $\mathbf{k} = (k, m)$,

$$\mathbf{c}_g = \nabla_{\mathbf k}\omega = \frac{Nm}{(k^2+m^2)^{3/2}}\,(m,\,-k).$$

Two facts fall straight out:

$$\mathbf{c}_g\cdot\mathbf{k} = \frac{Nm}{(k^2+m^2)^{3/2}}(mk - km) = 0,$$

*In words: group velocity is exactly perpendicular to the wavevector — energy travels along the crests.* And the vertical components:

$$c_{p,z} \propto m, \qquad c_{g,z} \propto -km,$$

so for $k>0$ they have **opposite signs**. *In words: if the phase is going up, the energy is going down.*

**The beam angle.** Writing $\beta$ for the angle the beam (and hence $\mathbf{c}_g$) makes with the horizontal, $\beta = 90^\circ - \theta$ and

$$\sin\beta = \frac{\omega}{N}.$$

*In words: the beam's inclination is set entirely by the ratio of the wave's frequency to the local stratification.* Low-frequency waves travel nearly horizontally; waves at $\omega = N$ travel vertically.

| Wave | $\omega$ (s⁻¹) | $N$ | $\beta$ |
|---|---|---|---|
| M2 internal tide, thermocline | $1.405\times10^{-4}$ | $5\times10^{-3}$ | 1.6° |
| M2 internal tide, abyss | $1.405\times10^{-4}$ | $1\times10^{-3}$ | 8.1° |
| Near-inertial wave at 45° | $1.03\times10^{-4}$ | $3\times10^{-3}$ | 2.0° |
| High-frequency wave | $2.5\times10^{-3}$ | $5\times10^{-3}$ | 30° |

*In words: tidal and near-inertial beams travel almost horizontally, descending a few kilometres over hundreds of kilometres of horizontal distance.* Internal-tide beams radiating from the Hawaiian Ridge are tracked for over 1000 km in satellite altimetry for exactly this reason.

**Critical latitude.** Rotation requires $\omega > |f|$. For the M2 tide, $\omega = 1.405\times10^{-4}\ \mathrm{s^{-1}}$, so free M2 internal tides exist only where

$$|f| < 1.405\times10^{-4} \;\Longrightarrow\; |\sin\phi| < \frac{1.405\times10^{-4}}{1.4584\times10^{-4}} = 0.963 \;\Longrightarrow\; |\phi| < 74.5^\circ.$$

**Poleward of 74.5 degrees the semidiurnal internal tide cannot propagate at all.** This is a hard, observable boundary, and it means the Arctic receives essentially no internal-tide mixing — one reason its stratification is so persistent.

**Reflection off a slope.** Frequency is conserved on reflection, so $\beta$ is conserved. If the bottom slope is $\gamma$:

- $\gamma < \beta$ (**subcritical**): the beam reflects forward and downslope, spreading.
- $\gamma > \beta$ (**supercritical**): the beam reflects backward, spreading.
- $\gamma = \beta$ (**critical**): incident and reflected beams coincide; the energy density formally diverges and the wave breaks.

*In words: an internal wave cannot obey the usual mirror law, because its angle is fixed to gravity rather than to the boundary.* The energy-density amplification on reflection scales as $\left|\frac{\sin(\beta+\gamma)}{\sin(\beta-\gamma)}\right|$, which blows up as $\gamma\to\beta$.

**Generation and dissipation.**

| Source | Power | Mechanism |
|---|---|---|
| Internal tides | about 1 TW | barotropic tide flowing over ridges and shelf breaks |
| Near-inertial waves | 0.5–1 TW | wind stress fluctuations resonating with $f$ |
| Lee waves | 0.2–0.4 TW | geostrophic flow over small-scale topography, mostly Southern Ocean |

These are [4.3](04-03-diapycnal-mixing-abyssal-recipe.md)'s energy sources, and internal waves are the pipe connecting them to the mixing.

## Picture

![An internal wave beam radiating from a generation region at the sea surface, descending to the right at 30 degrees below the horizontal. Grey lines of constant phase run perpendicular to the beam, across it. A blue arrow along the beam marks the group velocity carrying energy downward and to the right; a coral arrow perpendicular to the beam marks the phase velocity carrying crests upward and to the right. A note records that the beam angle is set by the sine of the angle equalling omega over N, independent of wavelength](assets/05-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — where does the beam go?).** An internal tide at the M2 frequency $\omega = 1.405\times10^{-4}\ \mathrm{s^{-1}}$ is generated at a ridge crest at 1000 m depth in water where $N = 2.0\times10^{-3}\ \mathrm{s^{-1}}$. The sea floor is at 4500 m.

(a) *Beam angle.*
$$\sin\beta = \frac{\omega}{N} = \frac{1.405\times10^{-4}}{2.0\times10^{-3}} = 0.0703 \;\Longrightarrow\; \beta = 4.03^\circ.$$

(b) *Horizontal distance to reach the sea floor.* It must descend 3500 m:
$$x = \frac{3500}{\tan 4.03^\circ} = \frac{3500}{0.0705} = 4.97\times10^{4}\ \mathrm{m} = 50\ \mathrm{km}.$$

(c) *And to reach the surface after bouncing?* Another 4500 m of rise takes $4500/0.0705 = 64$ km, so the beam completes a full surface-to-bottom-to-surface circuit in about 114 km, having travelled a total path length of $8000/\sin4.03^\circ = 114\ \mathrm{km}$ — nearly all of it horizontal.

**This is why internal tides are visible in altimetry as coherent surface signals hundreds of kilometres from their source**: the beam takes so long to reach the bottom that it crosses a large part of the basin first, and each surface bounce leaves a few centimetres of sea-surface signature.

(d) *A caution.* The beam angle depends on $N$, which varies by a factor of five between the thermocline and the abyss. A beam entering weaker stratification steepens; entering stronger stratification it flattens. Real beams therefore curve, and in the thermocline where $N$ peaks they can become trapped and turn back — an internal-wave **turning point** at the depth where $N = \omega$.

**Example 2 (why you'd care — critical slopes make the mixing hot spots).** A continental slope descends at a gradient of $\gamma = 0.04$ (about 2.3 degrees). An M2 internal tide arrives with $\omega = 1.405\times10^{-4}$. At what stratification does the slope become critical, and what happens then?

*The criticality condition.* $\tan\beta = \gamma$, i.e. $\beta = \arctan(0.04) = 2.29^\circ$, so $\sin\beta = 0.0400$ and

$$N_{\text{crit}} = \frac{\omega}{\sin\beta} = \frac{1.405\times10^{-4}}{0.0400} = 3.51\times10^{-3}\ \mathrm{s^{-1}}.$$

Where the local $N$ equals $3.5\times10^{-3}\ \mathrm{s^{-1}}$ — which is a perfectly ordinary upper-slope value — **this slope is critical for the semidiurnal tide**.

*What happens.* The incident and reflected beams coincide. Formally the energy density diverges; physically the beam is compressed into a thin layer against the bottom, its shear grows until the Richardson number falls below $1/4$, and it breaks. Measured dissipation over near-critical slopes exceeds the open-ocean value by a factor of 100 to 1000.

*Why this reorganizes [4.3](04-03-diapycnal-mixing-abyssal-recipe.md)'s problem.* The "missing mixing" was missing because it was being looked for in the open ocean. It is on the slopes and ridges, and the mechanism is not turbulence generated locally by the mean flow but **internal-wave energy generated elsewhere, transported hundreds of kilometres as a beam, and deposited where the topography happens to match its angle.**

*The point.* Note the peculiar selectivity: whether a given slope mixes vigorously depends on a *coincidence* between the slope's gradient, the tidal frequency, and the local stratification — three quantities with no reason to be related. Where they happen to match, dissipation jumps by three orders of magnitude; a few hundred metres away, it does not. **This is what produces the extraordinarily heavy-tailed distribution of $\kappa$ that made the open-ocean average so misleading** ([4.3](04-03-diapycnal-mixing-abyssal-recipe.md), P2). And it has a testable consequence: since $\beta$ depends on $N$ and $N$ has changed over the glacial cycles, the *location* of the ocean's mixing hot spots should have moved, not merely their intensity.

## Watch out

- **You might think** internal waves are small because the sea surface barely moves. **Actually** their amplitudes on interior density surfaces are 10 to 100 m, a hundred times a typical surface wave. The surface expression is small because the density contrast across an internal interface is a thousand times smaller than across the air–sea interface, so the restoring force — and hence the surface displacement — is reduced by the same factor.
- **You might think** the group velocity being perpendicular to the phase velocity is a curiosity. **Actually** it is the operational fact that makes internal waves observable: seeing downward phase propagation in a mooring record tells you the energy source is *above*, and upward phase tells you it is *below*, which is how internal-tide generation at the sea floor was confirmed.
- **You might think** internal waves reflect like light. **Actually** they preserve their angle to the horizontal, not to the boundary. This is genuinely unlike every other wave, and it is the origin of critical-slope focusing and hence of most of the ocean's mixing.

## One-liner

> Internal waves are hundred-metre waves inside the ocean whose frequency is set by their direction rather than their wavelength, whose energy runs perpendicular to their crests in shallow beams, and which — because they preserve their angle to gravity rather than to the sea floor — break catastrophically wherever a slope happens to match their inclination.

## Problems

**P1 (🟢)** An internal wave has $\omega = 8.0\times10^{-4}\ \mathrm{s^{-1}}$ in water with $N = 4.0\times10^{-3}\ \mathrm{s^{-1}}$ and $f = 1.0\times10^{-4}\ \mathrm{s^{-1}}$. (a) Verify that the wave can exist. (b) Compute the angle of the wavevector from the horizontal and the angle of the beam from the horizontal. (c) Compute the horizontal distance the beam travels while descending 2000 m.

**P2 (🟡)** A mooring at 2000 m records an internal-wave packet whose phase surfaces move **downward** at $0.02\ \mathrm{m\,s^{-1}}$, with $\omega = 3.0\times10^{-4}\ \mathrm{s^{-1}}$ and local $N = 2.4\times10^{-3}\ \mathrm{s^{-1}}$. (a) Compute the beam angle. (b) State whether the energy source is above or below the mooring, and give the reason. (c) Compute the vertical wavelength, using $c_{p,z} = \omega/m$. (d) Compute the horizontal wavelength.

**P3 (🔴, optional)** Critical latitudes and the Arctic. (a) Compute the critical latitude for the M2 tide ($\omega = 1.405\times10^{-4}\ \mathrm{s^{-1}}$) and for the K1 diurnal tide ($\omega = 7.292\times10^{-5}\ \mathrm{s^{-1}}$), taking $\Omega = 7.292\times10^{-5}\ \mathrm{s^{-1}}$. (b) Comment on the K1 result. (c) The Arctic Ocean lies almost entirely poleward of 70°N. State what (a) and (b) together imply for internal-tide mixing there. (d) Arctic stratification is dominated by a strong salinity-controlled halocline that insulates the sea ice from warm Atlantic water beneath ([1.4](01-04-stratification-buoyancy-frequency.md), P2). Explain how (c) contributes to that insulation persisting, and state what would change if the halocline weakened enough for a different mixing process to take over.

<details>
<summary>Solutions</summary>

**P1** (a) The wave exists if $f < \omega < N$: $1.0\times10^{-4} < 8.0\times10^{-4} < 4.0\times10^{-3}$. $\checkmark$

(b) $$\cos\theta = \frac{\omega}{N} = \frac{8.0\times10^{-4}}{4.0\times10^{-3}} = 0.200 \;\Longrightarrow\; \theta = 78.5^\circ$$

from the horizontal for the wavevector, and the beam is at

$$\beta = 90^\circ - 78.5^\circ = 11.5^\circ$$

from the horizontal. (Check: $\sin 11.5^\circ = 0.199$. $\checkmark$)

(c) $$x = \frac{2000}{\tan 11.5^\circ} = \frac{2000}{0.2035} = 9.83\times10^{3}\ \mathrm{m} = 9.8\ \mathrm{km}.$$

Much steeper than a tidal beam, because the frequency is a fifth of $N$ rather than a fiftieth.

**P2** (a) $$\sin\beta = \frac{\omega}{N} = \frac{3.0\times10^{-4}}{2.4\times10^{-3}} = 0.125 \;\Longrightarrow\; \beta = 7.18^\circ.$$

(b) Phase moving **downward** means energy moving **upward**, since the vertical components of phase and group velocity have opposite signs. So the **energy source is below** the mooring — most likely internal tides generated at the sea floor, since the mooring is at 2000 m and the topography is beneath it.

(c) $$c_{p,z} = \frac{\omega}{m} \;\Longrightarrow\; m = \frac{\omega}{|c_{p,z}|} = \frac{3.0\times10^{-4}}{0.02} = 1.5\times10^{-2}\ \mathrm{m^{-1}},$$
$$\lambda_z = \frac{2\pi}{m} = \frac{6.2832}{1.5\times10^{-2}} = 419\ \mathrm{m}.$$

(d) The wavevector makes an angle $\theta = 90^\circ - 7.18^\circ = 82.8^\circ$ with the horizontal, so

$$\frac{k}{m} = \frac{\cos\theta}{\sin\theta} = \cot 82.8^\circ = 0.1260,$$
$$k = 0.1260\times1.5\times10^{-2} = 1.89\times10^{-3}\ \mathrm{m^{-1}}, \qquad \lambda_x = \frac{6.2832}{1.89\times10^{-3}} = 3.33\times10^{3}\ \mathrm{m} = 3.3\ \mathrm{km}.$$

A wave 3.3 km long horizontally and 420 m vertically — an aspect ratio of 8, which is just $1/\tan\beta$. Internal waves are always flat, and the flatter they are the lower their frequency.

**P3** (a) The critical latitude satisfies $|f| = \omega$, i.e. $2\Omega\sin\phi = \omega$:

M2: $$\sin\phi = \frac{1.405\times10^{-4}}{2\times7.292\times10^{-5}} = \frac{1.405\times10^{-4}}{1.4584\times10^{-4}} = 0.9634 \;\Longrightarrow\; \phi = 74.5^\circ.$$

K1: $$\sin\phi = \frac{7.292\times10^{-5}}{1.4584\times10^{-4}} = 0.5000 \;\Longrightarrow\; \phi = 30.0^\circ.$$

(b) The K1 result is exact and not a coincidence: the K1 tidal frequency **is** the Earth's rotation rate, $\Omega$, so the condition $2\Omega\sin\phi = \Omega$ gives $\sin\phi = 1/2$ exactly. **Diurnal internal tides cannot propagate poleward of 30 degrees** — a startlingly low latitude, excluding most of the world ocean. Where diurnal tidal forcing is strong at higher latitudes (the Sea of Okhotsk, the Kuril Straits) the energy goes into trapped waves and locally intense mixing instead of radiating away, which is why those regions are among the most vigorously mixed on Earth and are the formation site of North Pacific Intermediate Water ([4.1](04-01-water-masses-world-ocean.md)).

(c) The Arctic lies poleward of both critical latitudes, so **neither the semidiurnal nor the diurnal internal tide can propagate there**. The Arctic is essentially cut off from the internal-tide energy that mixes the rest of the world ocean. Measured Arctic diapycnal diffusivities are correspondingly tiny — $10^{-6}\ \mathrm{m^2\,s^{-1}}$ and below, an order of magnitude under the already-small open-ocean value, and approaching the molecular value in places.

(d) The Arctic halocline separates cold fresh surface water and sea ice from Atlantic-origin water at 200 to 800 m that is several degrees above freezing and carries enough heat to melt the entire ice cover many times over. That heat stays down there because nothing mixes it up — and (c) says that the absence of internal-tide energy is a large part of *why* nothing mixes it up. The insulation is not only a property of the strong stratification; it is also a property of the **energy supply**, which is nearly absent.

If the halocline weakened enough for a different process to take over — most plausibly, wind-driven mixing reaching deeper as summer sea ice retreats and leaves open water exposed to storms — then a positive feedback opens: more open water means more wind work on the ocean, means more mixing, means more Atlantic heat brought up, means less ice, means more open water. This is the **Atlantification** of the Arctic, it is observed most clearly in the Eurasian Basin where the halocline has measurably weakened since about 2010, and it is a candidate for a genuinely abrupt regional transition. The point worth carrying is structural: **a system insulated by the absence of an energy supply is stable until a different energy supply becomes available**, and the barrier's strength is a poor guide to its safety.

</details>

## Flashback

**From Lesson 4.4 (What drives the overturning — buoyancy or wind):** A deep basin below 2500 m has area $1.5\times10^{13}\ \mathrm{m^2}$ and is fed by 10 Sv. At 35°N, $f = 8.37\times10^{-5}\ \mathrm{s^{-1}}$ and $\beta = 1.87\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$; the abyssal layer is 2000 m thick. (a) Compute the uniform upwelling velocity. (b) Compute the Stommel–Arons interior meridional velocity and give its direction. (c) The basin is 4000 km wide; compute the interior transport and hence the transport the deep western boundary current must carry, stating its direction.

<details>
<summary>Solution</summary>

(a) $$w_0 = \frac{1.0\times10^{7}}{1.5\times10^{13}} = 6.67\times10^{-7}\ \mathrm{m\,s^{-1}} = 21\ \mathrm{m\,yr^{-1}}.$$

(b) $$v = \frac{f w_0}{\beta H} = \frac{8.37\times10^{-5}\times6.67\times10^{-7}}{1.87\times10^{-11}\times2000} = \frac{5.583\times10^{-11}}{3.74\times10^{-8}} = 1.49\times10^{-3}\ \mathrm{m\,s^{-1}},$$

**poleward** (northward, in the northern hemisphere), at about 1.5 mm s⁻¹.

(c) $$T_{\text{interior}} = 1.49\times10^{-3}\times4\times10^{6}\times2000 = 1.19\times10^{7}\ \mathrm{m^3\,s^{-1}} = 11.9\ \mathrm{Sv}\ \text{northward}.$$

The source supplies 10 Sv from the north, and the interior carries 11.9 Sv northward, so the boundary current must return

$$T_{\text{DWBC}} = 10 + 11.9 = 21.9\ \mathrm{Sv}\ \text{southward}.$$

More than twice the source. The pattern is the Stommel–Arons signature: **the deep western boundary current always carries more than the source feeding it**, because it must also return the poleward interior recirculation that uniform upwelling forces.

*Check.* Note that the answer is entirely determined by $w_0$, $f$, $\beta$ and geometry — no friction, no stratification, no buoyancy forcing enters. The prediction that the interior flows the "wrong" way and that a narrow boundary current does all the real work was made from a two-term vorticity balance before any deep current had been measured, and it was confirmed. It is worth remembering as an instance of how far a conservation law plus a geometry can get you.

</details>

## Connections

- **Backward:** the restoring force and the frequency $N$ are [1.4](01-04-stratification-buoyancy-frequency.md)'s; the mixing these waves produce on breaking is [4.3](04-03-diapycnal-mixing-abyssal-recipe.md)'s missing ingredient, and the energy sources listed here are the 2 TW that lesson had to account for.
- **Forward:** the barotropic tide that generates internal tides is [5.3](05-03-tides-equilibrium-dynamical.md)'s; the equatorial waveguide of [5.4](05-04-equatorial-waves-undercurrent.md) supports the same waves with $f\to0$, which removes the lower bound on the frequency band entirely.
- **Sideways (waves):** the perpendicularity of group and phase velocity, and frequency depending on direction rather than wavelength, both follow from the dispersion relation being homogeneous of degree zero in $\mathbf{k}$ — a property no isotropic wave system has. The general machinery of anisotropic dispersion is in [`waves-optics`](../../waves-optics/syllabus.md); internal waves are its most dramatic geophysical instance.

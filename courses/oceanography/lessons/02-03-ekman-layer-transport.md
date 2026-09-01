# Physical Oceanography · Lesson 2.3: The wind-driven Ekman layer and Ekman transport

> ⏱ ~15 min · Module 2: Rotating, stratified dynamics · Builds on: [1.5](01-05-mixed-layer-air-sea-fluxes.md), [atmospheric-science 6.1](../../atmospheric-science/lessons/06-01-atmospheric-boundary-layer.md) · Unlocks: [2.4](02-04-ekman-pumping-wind-stress-curl.md), [3.5](03-05-coastal-upwelling-eastern-boundary.md)

## Why this matters

In 1893 Fridtjof Nansen deliberately froze his ship into the Arctic ice and watched it drift. It did not drift downwind. It drifted consistently 20 to 40 degrees to the **right** of the wind, and Nansen — who was a biologist — could not explain it. He handed the problem to Vagn Walfrid Ekman, then a graduate student, who solved it in 1902 and in doing so wrote down the first correct theory of a rotating boundary layer.

The result matters far beyond ship drift. Wind blowing along a coast drives water offshore, which pulls cold nutrient-rich water up from below — that is coastal upwelling, and it supports roughly a fifth of the world's fish catch from about one percent of the ocean's area ([3.5](03-05-coastal-upwelling-eastern-boundary.md)). Wind with spatial structure drives vertical motion in the open ocean, which is what spins up every gyre ([2.4](02-04-ekman-pumping-wind-stress-curl.md)). All of it comes from one deceptively simple result.

## The idea

**The spiral belongs to atmospheric science; the transport belongs here.** [atmospheric-science 6.1](../../atmospheric-science/lessons/06-01-atmospheric-boundary-layer.md) derived the Ekman spiral for the atmospheric boundary layer — the velocity turning with height as friction and Coriolis compete. The mathematics is identical here. What differs is the *forcing geometry*: the atmosphere is dragged at the **bottom** by a fixed ground, while the ocean is dragged at the **top** by a moving stress. The ocean's spiral therefore hangs downward from the surface, and its boundary condition is a specified stress rather than a specified velocity.

**Why a spiral at all.** Wind stress pushes the very top of the ocean directly downwind. But that thin moving layer immediately feels the Coriolis force, which deflects it to the right (northern hemisphere). The layer just below is dragged by the layer above — so it moves in the direction the layer above is *now* going, and is itself deflected further right. Repeat downward, with the momentum weakening as it goes, and you get a spiral: rotating clockwise and shrinking exponentially with depth. At the surface the deflection is exactly 45 degrees.

**And here is the payoff.** The *depth-integrated* transport does not depend on the spiral's details at all. It is exactly 90 degrees to the right of the wind (in the northern hemisphere), with magnitude $\tau/(\rho f)$ — and crucially, **it does not contain the eddy viscosity**. That is a remarkable piece of luck, because the eddy viscosity is a fudge factor nobody can measure. The spiral's shape is a fiction; the transport it carries is not.

**Which is why the theory survived being wrong.** Real ocean spirals do not look like Ekman's. The observed surface deflection is 10 to 40 degrees, not 45, because the eddy viscosity is not constant with depth and because stratification and surface waves complicate things. But careful measurements — most famously Price, Weller and Schudlich in 1987 — confirmed the **transport** to within measurement error. The integral is robust; the profile is not.

## The formal version

**Wind stress.** The momentum flux from air to water:

$$\tau = \rho_a C_D U_{10}^2,$$

with $\rho_a = 1.22\ \mathrm{kg\,m^{-3}}$ and $C_D \approx 1.3\times10^{-3}$ (rising with wind speed). *In words: stress goes as the square of the wind, so a doubling of wind quadruples the forcing.* A moderate $10\ \mathrm{m\,s^{-1}}$ wind gives $\tau = 0.16\ \mathrm{N\,m^{-2}}$; a hurricane's $50\ \mathrm{m\,s^{-1}}$ gives several N m⁻².

**The Ekman equations.** In the surface layer, the momentum balance is between Coriolis and the vertical divergence of the turbulent stress, with pressure gradients set aside (they are handled separately, and the full solution is Ekman plus geostrophic):

$$-f v = \frac{1}{\rho_0}\frac{\partial\tau_x}{\partial z}, \qquad +f u = \frac{1}{\rho_0}\frac{\partial\tau_y}{\partial z}.$$

**The transport integral.** Integrate both from a depth $-d$ below the layer (where $\tau = 0$) to the surface (where $\tau = \boldsymbol\tau$), and define $\mathbf{M}_E = \int_{-d}^{0}(u,v)\,dz$:

$$-f\,M_{E,y} = \frac{\tau_x}{\rho_0}, \qquad +f\,M_{E,x} = \frac{\tau_y}{\rho_0},$$

$$\boxed{\ \mathbf{M}_E = \frac{1}{\rho_0 f}\left(\tau_y,\; -\tau_x\right) = \frac{\boldsymbol\tau\times\hat{\mathbf z}}{\rho_0 f}\ }$$

*In words: the depth-integrated Ekman transport is the wind stress rotated 90 degrees clockwise (northern hemisphere), divided by density and $f$.* Units are m² s⁻¹ — a volume flux per unit length of coastline or per unit width of ocean.

**The eddy viscosity never appeared.** This is worth pausing on. The derivation used only that the stress goes from $\boldsymbol\tau$ at the top to zero at the bottom of the layer; it never asked *how*. Any turbulence closure, any profile, any layer depth gives the same answer. **Whenever a result survives an integral of a divergence, it is telling you the answer depends only on the boundary values.** That structural fact is why this is one of the few quantitative results in ocean turbulence that can be trusted.

**The spiral, for completeness.** With a constant eddy viscosity $A_z$ and wind in the $+x$ direction:

$$u(z) = V_0\,e^{z/d}\cos\!\left(\frac{z}{d} - \frac{\pi}{4}\right), \qquad v(z) = V_0\,e^{z/d}\sin\!\left(\frac{z}{d} - \frac{\pi}{4}\right),$$

$$d = \sqrt{\frac{2A_z}{f}}, \qquad V_0 = \frac{\tau}{\rho_0\sqrt{A_z f}}, \qquad D_E = \pi d.$$

*In words: velocity rotates clockwise and decays exponentially with depth, starting 45 degrees right of the wind.* $D_E$, the **Ekman depth**, is where the velocity has turned a full 180 degrees and shrunk to $e^{-\pi} = 4.3$ percent of the surface value. For $A_z = 10^{-2}\ \mathrm{m^2\,s^{-1}}$ and $f = 10^{-4}$: $d = 14$ m and $D_E = 44$ m.

**Southern hemisphere.** $f<0$ flips everything: the deflection is to the **left**, and $\mathbf{M}_E = \boldsymbol\tau\times\hat{\mathbf z}/(\rho_0 f)$ handles it automatically because $f$ carries the sign. Never memorize "right"; memorize the formula.

## Picture

![A hodograph of the Ekman spiral seen from above, with eastward velocity on the horizontal axis and northward on the vertical. A coral arrow along the top shows the eastward wind stress. The blue spiral starts at the surface point 45 degrees to the right of the wind, at 0.069 m per second east and 0.069 south, then curls clockwise and inward: due south at 11 m depth, west-southwest at 22 m, and by 44 m it is reversed and down to 4 percent of the surface speed. A separate coral arrow at right points due south, labelled as the net transport of 0.98 square metres per second, exactly 90 degrees to the right whatever the eddy viscosity](assets/02-03-fig1.svg)

The spiral is a guess. The arrow on the right is a theorem.

## Worked examples

**Example 1 (mechanical — the trade winds' transport).** A steady easterly trade wind of $8\ \mathrm{m\,s^{-1}}$ blows westward at 15°N. Take $\rho_a = 1.22$, $C_D = 1.3\times10^{-3}$, $\rho_0 = 1025\ \mathrm{kg\,m^{-3}}$.

(a) *Stress.*
$$\tau = 1.22\times1.3\times10^{-3}\times8^2 = 1.586\times10^{-3}\times64 = 0.1015\ \mathrm{N\,m^{-2}},$$
directed westward, so $\tau_x = -0.1015$, $\tau_y = 0$.

(b) *Coriolis.*
$$f = 2\times7.292\times10^{-5}\times\sin15^\circ = 1.4584\times10^{-4}\times0.2588 = 3.774\times10^{-5}\ \mathrm{s^{-1}}.$$

(c) *Transport.*
$$M_{E,x} = \frac{\tau_y}{\rho_0 f} = 0, \qquad M_{E,y} = \frac{-\tau_x}{\rho_0 f} = \frac{+0.1015}{1025\times3.774\times10^{-5}} = \frac{0.1015}{0.03868} = 2.62\ \mathrm{m^2\,s^{-1}}.$$

Northward, at $2.62\ \mathrm{m^2\,s^{-1}}$ — which is 90 degrees to the right of a westward wind. Over a Pacific basin 15,000 km wide, that is

$$T = 2.62\times1.5\times10^{7} = 3.9\times10^{7}\ \mathrm{m^3\,s^{-1}} = 39\ \mathrm{Sv},$$

comparable to the entire Gulf Stream, moved poleward by nothing but the trades acting on a thin surface layer.

Note also how $f$ in the denominator amplifies things equatorward: the same wind at 45° gives $M_E = 0.96\ \mathrm{m^2\,s^{-1}}$, less than half. Ekman transports are largest in the tropics, and formally infinite at the equator — a genuine breakdown handled in [2.4](02-04-ekman-pumping-wind-stress-curl.md) and [5.4](05-04-equatorial-waves-undercurrent.md).

**Example 2 (why you'd care — the transport is right even when the spiral is wrong).** An observational campaign measures the velocity profile under a steady wind and finds the surface current only 22 degrees to the right of the wind, decaying over about 25 m, with no recognizable spiral below 15 m — nothing like Ekman's prediction of 45 degrees and a clean rotation over 44 m. A colleague concludes Ekman theory has been falsified. Diagnose.

*What the theory actually predicts.* Ekman's solution has two parts with very different status. The **spiral** depends on assuming a constant eddy viscosity $A_z$ throughout the layer, which is certainly false: turbulence near the surface is driven by breaking waves and is far more intense in the top few metres than at 30 m. Replacing the constant $A_z$ with a profile that decreases downward gives a surface deflection of 20 to 30 degrees and a compressed, distorted spiral — matching the observation. The 45 degrees is an artefact of a bad closure.

*What survives.* Integrate the observed profile:

$$\mathbf{M}_E^{\text{obs}} = \int (u,v)\,dz.$$

If the theory is right, this equals $\boldsymbol\tau\times\hat{\mathbf z}/(\rho_0 f)$ regardless of what the profile looks like. This is precisely the test Price, Weller and Schudlich performed in 1987 with a drifting mixed-layer buoy off California, and the integrated transport came out within about 10 percent of theory, at 90 degrees to the wind, while the spiral itself was visibly non-Ekman.

*The point.* **The theory has a robust part and a fragile part, and they are separated by the integral.** The fragile part encodes an unmeasurable turbulence parameter; the robust part encodes only a boundary condition and a conservation law. A "falsification" that targets the fragile part refutes the closure, not the physics. This distinction recurs throughout the course — the Sverdrup balance in [3.1](03-01-sverdrup-balance-interior-gyre.md) has exactly the same structure, being an integral result that is insensitive to the friction whose *form* determines the western boundary layer in [3.2](03-02-western-boundary-currents-stommel-munk.md). When you meet a geophysical result, ask which part of it would change if the turbulence closure changed.

## Watch out

- **You might think** the Ekman transport is carried by a layer of depth $D_E$, so you can get a velocity by dividing. **Actually** $M_E$ is a transport, full stop, and the depth over which it is distributed is not determined by the theory. In a stratified ocean it is carried within the mixed layer ([1.5](01-05-mixed-layer-air-sea-fluxes.md)), whose depth has nothing to do with $A_z$.
- **You might think** the 45-degree surface deflection is a robust prediction. **Actually** it is the most fragile thing in the lesson — it follows entirely from assuming $A_z$ is constant, and it is not observed. Quote the 90-degree transport with confidence and the 45-degree surface angle with a caveat.
- **You might think** Ekman transport is the same as the total wind-driven current. **Actually** the total flow is Ekman *plus* geostrophic, and in most of the ocean the geostrophic part is larger. The Ekman part is distinguished by being ageostrophic — it is precisely the piece that crosses pressure contours, which is why it, and only it, can produce a convergence.

## One-liner

> Wind stress drives a spiralling surface layer whose shape depends on turbulence nobody can measure, and whose depth-integrated transport — exactly ninety degrees to the right of the wind in the northern hemisphere, with magnitude stress over density times $f$ — depends on nothing but the wind.

## Problems

**P1 (🟢)** A $12\ \mathrm{m\,s^{-1}}$ westerly wind blows eastward at 40°N. Take $\rho_a = 1.22$, $C_D = 1.4\times10^{-3}$, $\rho_0 = 1025$, $f = 9.37\times10^{-5}\ \mathrm{s^{-1}}$. (a) Compute the wind stress. (b) Compute the magnitude and direction of the Ekman transport. (c) If this wind acts along a 3000 km stretch, compute the total transport in sverdrups.

**P2 (🟡)** A wind of $9\ \mathrm{m\,s^{-1}}$ blows equatorward along the California coast (i.e. southward, with the coast on the east). Take $\tau = 0.13\ \mathrm{N\,m^{-2}}$, latitude 36°N ($f = 8.57\times10^{-5}$), $\rho_0 = 1025$. (a) Compute the Ekman transport, with direction relative to the coast. (b) The offshore transport must be replaced by water rising within a coastal band 20 km wide. Compute the upwelling velocity in m per day. (c) The thermocline is at 60 m. Estimate how many days of this wind are needed to bring thermocline water to the surface, and comment on whether that is consistent with the observed onset of the California upwelling season.

**P3 (🔴, optional)** Show that the Ekman spiral satisfies the transport integral. Substitute $\zeta = -z/d$ (so $\zeta$ runs from 0 at the surface to $+\infty$ at depth) and use

$$\int_0^\infty e^{-\zeta}\cos(\zeta+\phi)\,d\zeta = \tfrac12(\cos\phi - \sin\phi), \qquad \int_0^\infty e^{-\zeta}\sin(\zeta+\phi)\,d\zeta = \tfrac12(\sin\phi+\cos\phi).$$

(a) Verify that $\int_{-\infty}^{0} u\,dz = 0$ and $\int_{-\infty}^{0}v\,dz = -\tau/(\rho_0 f)$. (b) Explain in two sentences why the answer had to come out independent of $A_z$, given that both $V_0$ and $d$ contain it. (c) Compute the ratio of the Ekman layer's kinetic energy to the kinetic energy of a slab of depth $D_E$ moving uniformly at $M_E/D_E$, and comment on what that says about where the momentum sits.

<details>
<summary>Solutions</summary>

**P1** (a) $$\tau = 1.22\times1.4\times10^{-3}\times12^2 = 1.708\times10^{-3}\times144 = 0.246\ \mathrm{N\,m^{-2}}, \quad \tau_x = +0.246.$$

(b) $$M_{E,y} = \frac{-\tau_x}{\rho_0 f} = \frac{-0.246}{1025\times9.37\times10^{-5}} = \frac{-0.246}{0.09604} = -2.56\ \mathrm{m^2\,s^{-1}},$$

so $2.56\ \mathrm{m^2\,s^{-1}}$ **southward** — 90 degrees to the right of an eastward wind, as required.

(c) $$T = 2.56\times3\times10^{6} = 7.68\times10^{6}\ \mathrm{m^3\,s^{-1}} = 7.7\ \mathrm{Sv}.$$

**P2** (a) The wind is southward: $\tau_y = -0.13$, $\tau_x = 0$.

$$M_{E,x} = \frac{\tau_y}{\rho_0 f} = \frac{-0.13}{1025\times8.57\times10^{-5}} = \frac{-0.13}{0.08784} = -1.48\ \mathrm{m^2\,s^{-1}}.$$

Westward at $1.48\ \mathrm{m^2\,s^{-1}}$. With the coast on the east, westward is **offshore** — 90 degrees to the right of the southward wind, exactly the upwelling-favourable configuration.

(b) Continuity: what leaves the coastal band horizontally must arrive vertically. Over a band of width $L = 20\ \mathrm{km}$,

$$w = \frac{M_E}{L} = \frac{1.48}{2\times10^{4}} = 7.40\times10^{-5}\ \mathrm{m\,s^{-1}} = 6.4\ \mathrm{m\,day^{-1}}.$$

(c) $$t = \frac{60\ \mathrm{m}}{6.4\ \mathrm{m\,day^{-1}}} = 9.4\ \mathrm{days}.$$

About ten days of sustained upwelling-favourable wind — which is consistent with observation, and specifically with the well-documented behaviour of the California system: the "spring transition" to upwelling-favourable winds is followed by cold sea-surface temperatures at the coast within one to two weeks, and individual upwelling events triggered by multi-day wind pulses produce visible cold filaments on roughly the same timescale. Note the calculation also explains why upwelling collapses so fast when the wind relaxes: there is no reservoir, the vertical velocity is directly proportional to the instantaneous stress, and the warm surface layer floods back inshore within days.

**P3** (a) Substitute $\zeta = -z/d$, so $z = -d\zeta$, $dz = -d\,d\zeta$, and $z/d = -\zeta$. The limits flip, cancelling the minus in $dz$:

$$\int_{-\infty}^0 u\,dz = dV_0\int_0^\infty e^{-\zeta}\cos\!\left(-\zeta-\tfrac{\pi}{4}\right)d\zeta = dV_0\int_0^\infty e^{-\zeta}\cos\!\left(\zeta+\tfrac{\pi}{4}\right)d\zeta,$$

using that cosine is even. With $\phi = \pi/4$:

$$= dV_0\cdot\tfrac12\left(\cos\tfrac\pi4 - \sin\tfrac\pi4\right) = dV_0\cdot\tfrac12\left(\tfrac{\sqrt2}{2}-\tfrac{\sqrt2}{2}\right) = 0. \quad\checkmark$$

For $v$, sine is **odd**, so the substitution carries a minus sign through:

$$\int_{-\infty}^0 v\,dz = dV_0\int_0^\infty e^{-\zeta}\sin\!\left(-\zeta-\tfrac\pi4\right)d\zeta = -dV_0\int_0^\infty e^{-\zeta}\sin\!\left(\zeta+\tfrac\pi4\right)d\zeta$$
$$= -dV_0\cdot\tfrac12\left(\tfrac{\sqrt2}{2}+\tfrac{\sqrt2}{2}\right) = -\frac{dV_0}{\sqrt2}.$$

Now substitute $d = \sqrt{2A_z/f}$ and $V_0 = \tau/(\rho_0\sqrt{A_zf})$:

$$\frac{dV_0}{\sqrt2} = \frac{1}{\sqrt2}\sqrt{\frac{2A_z}{f}}\cdot\frac{\tau}{\rho_0\sqrt{A_zf}} = \frac{1}{\sqrt2}\cdot\frac{\sqrt2}{f}\cdot\frac{\tau}{\rho_0} = \frac{\tau}{\rho_0 f}.$$

$$\int_{-\infty}^0 v\,dz = -\frac{\tau}{\rho_0f}. \quad\checkmark$$

Zero along the wind, $\tau/(\rho_0f)$ to the right of it. The whole sign question reduces to cosine being even and sine being odd, which is worth noticing: it is the *rotation sense* of the spiral, and nothing else, that puts the transport on the right rather than the left.

(b) $V_0 \propto A_z^{-1/2}$ and $d\propto A_z^{+1/2}$, so their product is independent of $A_z$ — and the transport is proportional to exactly that product. The deeper reason is the one given in the lesson: the transport is the integral of a stress divergence, so it depends only on the stress at the two ends, and $A_z$ can only redistribute the momentum within the layer, never change how much enters it.

(c) Kinetic energy of the spiral, per unit area:

$$KE = \frac{\rho_0}{2}\int_{-\infty}^0\left(u^2+v^2\right)dz = \frac{\rho_0}{2}\int_{-\infty}^{0}V_0^2e^{2z/d}\,dz = \frac{\rho_0V_0^2 d}{4}.$$

The uniform slab of depth $D_E = \pi d$ carrying the same transport moves at $M_E/D_E = \tau/(\rho_0f\pi d)$, and using $\tau/(\rho_0 f) = V_0d/\sqrt2$ this is $V_0/(\sqrt2\pi)$. Its kinetic energy is

$$KE_{\text{slab}} = \frac{\rho_0}{2}\cdot\frac{V_0^2}{2\pi^2}\cdot\pi d = \frac{\rho_0V_0^2d}{4\pi}.$$

$$\frac{KE_{\text{spiral}}}{KE_{\text{slab}}} = \pi \approx 3.14.$$

The spiral holds about three times the kinetic energy of the equivalent uniform slab. **The momentum is concentrated near the surface**, in a layer of order $d = 14$ m rather than $D_E = 44$ m, and energy — being quadratic — weights that concentration more heavily than transport does. Practically, this is why surface drifters and ship drift respond so strongly to wind while the net transport is spread over a much thicker layer, and it is Nansen's original observation restated: the ship sat in the top few metres, where the current is fastest and closest to 45 degrees, not in the depth-averaged flow.

</details>

## Flashback

**From Lesson 2.1 (Geostrophy in the ocean and the dynamic method):** Two stations 80 km apart at 25°N ($f = 6.16\times10^{-5}\ \mathrm{s^{-1}}$) give surface geopotential anomalies, relative to 1000 dbar, of $\Delta\Phi_A = 9.82$ and $\Delta\Phi_B = 9.55\ \mathrm{m^2\,s^{-2}}$. (a) Compute the mean geostrophic velocity between the surface and 1000 dbar normal to the station line. (b) Assuming a linear velocity profile vanishing at 1000 dbar, compute the surface velocity and the corresponding sea-surface height difference between the stations. (c) State one measurement that could test whether the 1000 dbar reference level is a good choice here.

<details>
<summary>Solution</summary>

(a) $$\bar v = \frac{\Delta\Phi_A - \Delta\Phi_B}{fL} = \frac{9.82-9.55}{6.16\times10^{-5}\times8\times10^{4}} = \frac{0.27}{4.928} = 0.0548\ \mathrm{m\,s^{-1}}.$$

(b) Linear profile: $v_{\text{surf}} = 2\bar v = 0.110\ \mathrm{m\,s^{-1}}$.

$$\left|\frac{\partial\eta}{\partial y}\right| = \frac{v_{\text{surf}}f}{g} = \frac{0.110\times6.16\times10^{-5}}{9.81} = 6.91\times10^{-7},$$
$$\Delta\eta = 6.91\times10^{-7}\times8\times10^{4} = 5.5\times10^{-2}\ \mathrm{m} = 5.5\ \mathrm{cm}.$$

(c) Several would work, and any one of the following is a complete answer:

- **A subsurface float parked at 1000 dbar.** An Argo float drifts at its parking depth and reports its displacement between surfacings, giving the reference-level velocity directly. This is the cleanest test and is exactly why Argo parks at 1000 m ([6.5](06-05-observing-the-ocean.md)).
- **Satellite altimetry.** The measured sea-surface height difference across the station pair gives the *absolute* surface geostrophic velocity; comparing it with the 0.110 m s⁻¹ inferred here isolates the reference-level error. Note the required precision: 5.5 cm across 80 km, against an altimeter accuracy of a few centimetres — marginal for a single pass, comfortable for a multi-year mean.
- **A moored current meter at 1000 m**, which measures the reference velocity directly but only at one point.

The general point is that the dynamic method leaves exactly one unknown per station pair, so exactly one independent measurement per pair is needed to close it — which is why the modern observing system is designed as a partnership rather than a replacement.

</details>

## Connections

- **Backward:** the spiral's mathematics is [atmospheric-science 6.1](../../atmospheric-science/lessons/06-01-atmospheric-boundary-layer.md)'s, inverted so the stress is applied at the top; the wind stress $\tau$ is the same quantity that drove mixed-layer deepening in [1.5](01-05-mixed-layer-air-sea-fluxes.md).
- **Forward:** taking the divergence of $\mathbf{M}_E$ gives the Ekman pumping of [2.4](02-04-ekman-pumping-wind-stress-curl.md), which is what forces every gyre; the coastal version is [3.5](03-05-coastal-upwelling-eastern-boundary.md); and the Southern Ocean's northward Ekman transport is the upper branch of the overturning in [6.1](06-01-southern-ocean-hinge.md).
- **Sideways (fluid dynamics):** the Ekman layer *is* a boundary layer in the sense of [`fluid-dynamics`](../../fluid-dynamics/syllabus.md) — a thin region where a neglected term (here friction) is restored to satisfy a boundary condition the interior solution cannot. What makes it distinctive is that rotation, not viscosity alone, sets its thickness, so the layer has a finite depth even as viscosity is reduced.

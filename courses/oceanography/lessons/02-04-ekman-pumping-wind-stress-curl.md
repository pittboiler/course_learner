# Physical Oceanography · Lesson 2.4: Ekman pumping and the wind-stress curl

> ⏱ ~15 min · Module 2: Rotating, stratified dynamics · Builds on: [2.3](02-03-ekman-layer-transport.md) · Unlocks: [3.1](03-01-sverdrup-balance-interior-gyre.md), [6.2](06-02-ocean-heat-uptake-circulation.md)

## Why this matters

[2.3](02-03-ekman-layer-transport.md) gave the transport at a point. This lesson asks what happens when it differs from point to point — and the answer is the mechanism that builds every gyre in the world ocean.

The logic is almost embarrassingly simple. Water is incompressible. If more water leaves a patch of the surface layer than enters it, the deficit must be made up from below; if more arrives than leaves, the excess must be pushed down. So a *spatially varying* wind field forces vertical motion at the base of the Ekman layer, at a rate of tens of metres per year. That sounds negligible. It is not: applied over an ocean basin for a decade, it depresses the thermocline by hundreds of metres, and the resulting pressure field is the subtropical gyre — the Gulf Stream, the Kuroshio, and the great warm lenses of the world's ocean, all forced by a vertical velocity of about a millionth of a metre per second.

## The idea

**Ekman transport with a gradient is a convergence.** In the northern hemisphere subtropics, easterly trades on the equatorward side drive Ekman transport *poleward*, and westerlies on the poleward side drive it *equatorward*. Both point at the same latitude band, roughly 30 degrees. Water piles into it from both sides. There is nowhere for it to go but down.

**What goes down bends the thermocline.** Sustained downward pumping pushes the warm surface layer deep in the centre of the gyre — a lens of light water hundreds of metres thick — and the sea surface bulges upward above it by about a metre. That bulge is the pressure gradient that drives the geostrophic gyre circulation of [2.1](02-01-geostrophy-dynamic-method.md). **Wind does not push the gyre around directly; it builds a hill and lets geostrophy do the rest.**

**And the sign flips in the subpolar gyre.** There the westerlies are on the equatorward side and polar easterlies on the poleward side, so the Ekman transports *diverge*, water is pumped up, the thermocline domes upward, sea level is low, and the gyre circulates the other way — cyclonically. The world's subpolar gyres are cold, nutrient-rich and biologically productive for exactly this reason.

**One formula covers both, and it is a curl.** The vertical velocity depends on the *curl* of the wind stress, not its magnitude or direction. A strong uniform wind pumps nothing at all; a weak wind whose direction varies with latitude pumps a great deal. It is the shear in the wind field that matters — which is why the mid-latitude ocean, sitting under the boundary between the trades and the westerlies, is the most strongly forced part of the world ocean.

## The formal version

**Continuity across the Ekman layer.** Integrate the incompressibility condition from the base of the Ekman layer at $z = -d$ to the surface at $z = 0$:

$$\int_{-d}^{0}\left(\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y}\right)dz + \left[w\right]_{-d}^{0} = 0.$$

With a rigid lid ($w = 0$ at the surface), and writing the first term as the divergence of the Ekman transport,

$$\boxed{\ w_E \;=\; \nabla_H\cdot\mathbf{M}_E \;=\; \frac{1}{\rho_0}\,\hat{\mathbf z}\cdot\nabla\times\left(\frac{\boldsymbol\tau}{f}\right)\ }$$

*In words: the vertical velocity at the base of the Ekman layer is the horizontal divergence of the Ekman transport — equivalently the curl of the wind stress divided by $f$.* Positive $w_E$ is **upward**: divergence at the surface must be fed from below.

Where $f$ can be treated as constant (any single mid-latitude basin, to leading order),

$$w_E \approx \frac{1}{\rho_0 f}\,\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau = \frac{1}{\rho_0 f}\left(\frac{\partial\tau_y}{\partial x} - \frac{\partial\tau_x}{\partial y}\right).$$

**The two gyres.**

| | Wind pattern | $\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau$ (NH) | $w_E$ | Thermocline | Sea level | Circulation |
|---|---|---|---|---|---|---|
| Subtropical gyre | trades below, westerlies above | negative | downward | pushed down | high | anticyclonic |
| Subpolar gyre | westerlies below, polar easterlies above | positive | upward | domed up | low | cyclonic |

*In words: the subtropics are a bowl and the subpolar regions are a dome, and the wind's curl decides which.*

**Magnitudes.** Take an idealized zonal stress $\tau_x(y) = -\tau_0\cos(\pi y/L)$ across a basin of meridional extent $L$ — easterlies at the equatorward edge, westerlies at the poleward. Then

$$\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau = -\frac{\partial\tau_x}{\partial y} = -\frac{\tau_0\pi}{L}\sin\!\left(\frac{\pi y}{L}\right),$$

$$w_E = -\frac{\tau_0\pi}{\rho_0 f L}\sin\!\left(\frac{\pi y}{L}\right).$$

With $\tau_0 = 0.1\ \mathrm{N\,m^{-2}}$, $L = 3000\ \mathrm{km}$, $f = 7.29\times10^{-5}$ at 30°N:

$$|w_E|_{\max} = \frac{0.1\times\pi}{1025\times7.29\times10^{-5}\times3\times10^{6}} = \frac{0.3142}{2.242\times10^{5}} = 1.40\times10^{-6}\ \mathrm{m\,s^{-1}} = 44\ \mathrm{m\,yr^{-1}}.$$

**Forty-four metres a year.** Compare with a typical horizontal speed of $0.1\ \mathrm{m\,s^{-1}} = 3\times10^{6}\ \mathrm{m\,yr^{-1}}$ — a ratio of $10^{-5}$, which is the aspect ratio of the ocean itself and is why vertical velocities are never measured directly. They are always inferred.

**The equatorial special case.** As $f\to0$ the formula diverges, which is a symptom rather than a disaster. The right way to see the equator is through the transport itself: under easterly trades, Ekman transport is poleward on *both* sides (right in the north, left in the south). That is a **divergence straddling the equator**, so water must rise, and it does — the equatorial cold tongue is fed by upwelling of order $2\ \mathrm{m\,day^{-1}}$, two orders of magnitude larger than the subtropical rate. The geostrophic machinery has broken down but the mass budget has not, and [5.4](05-04-equatorial-waves-undercurrent.md) supplies the replacement dynamics.

## Picture

![A meridional section from 15 degrees north on the left to 45 degrees north on the right. At the top, a circle with a cross marks the easterly trades blowing into the page at 15 N and a circle with a dot marks the westerlies blowing out of the page at 45 N. Below each, a blue arrow shows the Ekman transport 90 degrees to the right of the wind: both point inward toward 30 N. The sea surface bulges upward by about a metre over the convergence, a thick downward arrow marks Ekman pumping of about 44 m per year, and two coral thermocline surfaces are pressed down into a bowl beneath the convergence](assets/02-04-fig1.svg)

The bowl is the subtropical gyre. Everything in Module 3 is about what circulates around it.

## Worked examples

**Example 1 (mechanical — pumping from a wind profile).** A subtropical basin centred on 30°N has $\tau_x(y) = -\tau_0\cos(\pi y/L)$ with $\tau_0 = 0.2\ \mathrm{N\,m^{-2}}$ and $L = 2000\ \mathrm{km}$, $y$ measured from the basin's southern edge. Take $\rho_0 = 1025$ and $f = 7.29\times10^{-5}$.

(a) *The curl.*
$$\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau = -\frac{\partial\tau_x}{\partial y} = -\tau_0\frac{\pi}{L}\sin\!\left(\frac{\pi y}{L}\right).$$

Its magnitude peaks at mid-basin ($y = L/2$):
$$\left|\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau\right|_{\max} = \frac{0.2\times\pi}{2\times10^{6}} = 3.14\times10^{-7}\ \mathrm{N\,m^{-3}}.$$

(b) *The pumping.*
$$w_E = \frac{-3.14\times10^{-7}}{1025\times7.29\times10^{-5}} = \frac{-3.14\times10^{-7}}{0.0747} = -4.20\times10^{-6}\ \mathrm{m\,s^{-1}}.$$

Negative: **downward**, at $4.20\times10^{-6}\ \mathrm{m\,s^{-1}} = 133\ \mathrm{m\,yr^{-1}}$.

(c) *Locating the convergence.* The Ekman transport is $M_{E,y} = -\tau_x/(\rho_0 f) = \tau_0\cos(\pi y/L)/(\rho_0 f)$, which is **northward** in the southern half of the basin ($\cos > 0$) and **southward** in the northern half. It changes sign at $y = L/2$, where it converges — mid-basin, exactly where the pumping peaks. Note that the transport is *largest* at the basin edges and *zero* at the centre, while the pumping is the reverse: **convergence lives where the transport is changing, not where it is large.**

**Example 2 (why you'd care — how deep a gyre gets, and how long it takes).** Ekman pumping of $40\ \mathrm{m\,yr^{-1}}$ acts over a subtropical gyre. Why doesn't the thermocline get pushed down 40 m every year until it hits the sea floor?

*The naive extrapolation.* Forty metres a year for a century is 4 km — the depth of the ocean. Obviously wrong.

*What actually stops it.* Pushing the thermocline down creates a horizontal pressure gradient, which drives a geostrophic circulation, which carries the pumped water *away* horizontally. Equilibrium is reached when the horizontal divergence of the geostrophic flow exactly balances the pumping — and that condition, worked out properly, **is the Sverdrup balance of [3.1](03-01-sverdrup-balance-interior-gyre.md)**. The gyre is not a filling bathtub; it is a steady state in which what is pumped in at the top is exported sideways.

*How deep, and how long.* Estimate the equilibrium depth by asking how thick a warm lens must be for its geostrophic circulation to export the pumped water. For a gyre of half-width $R$, the water pumped into a disc of that radius is $\pi R^2 w_E$; the outflow around the rim, through a layer of thickness $H$ moving at the geostrophic speed $u_g$, is $2\pi R H u_g$. Setting them equal with $R = 1500\ \mathrm{km}$, $w_E = 1.3\times10^{-6}\ \mathrm{m\,s^{-1}}$ and $u_g = 0.02\ \mathrm{m\,s^{-1}}$:

$$H = \frac{R\,w_E}{2u_g} = \frac{1.5\times10^{6}\times1.3\times10^{-6}}{2\times0.02} = \frac{1.95}{0.04} = 49\ \mathrm{m}.$$

Too shallow by an order of magnitude against the observed 500 to 800 m — which is honest and instructive, because the estimate used a *uniform* interior speed, whereas the real gyre exports almost all of its water through a narrow, fast western boundary current ([3.2](03-02-western-boundary-currents-stommel-munk.md)). Redo it with the return flow confined to 5 percent of the rim at $1\ \mathrm{m\,s^{-1}}$ and the interior flow doing the rest, and $H$ comes out in the right range.

*The spin-up time.* The volume of the lens per unit area is $H$, filled at rate $w_E$:

$$t = \frac{H}{w_E} = \frac{600}{1.3\times10^{-6}} = 4.6\times10^{8}\ \mathrm{s} = 15\ \mathrm{yr}.$$

*The point.* **Ekman pumping sets the timescale, not the amplitude.** The gyre's depth is set by a dynamical balance involving the boundary currents; its *response time* to a change in the winds is $H/w_E$, about 15 years. That number does real work: it says the subtropical gyres re-equilibrate to decadal wind changes within a human career, which is why observed gyre spin-up and spin-down are a live signal in the altimetric record and why the North Atlantic gyre's response to the North Atlantic Oscillation is detectable at all.

## Watch out

- **You might think** strong winds mean strong pumping. **Actually** only the *curl* pumps. The Southern Ocean has the strongest winds on Earth and, in the latitude band where they are most uniform, very little Ekman pumping — the pumping there comes from the curl at the band's edges, which is what sets the Southern Ocean's upwelling ([6.1](06-01-southern-ocean-hinge.md)).
- **You might think** the $1/f$ inside the curl is a technicality. **Actually** at low latitudes $f$ varies rapidly and the $\beta$ term in $\nabla\times(\boldsymbol\tau/f)$ is comparable to the curl term itself. The constant-$f$ shortcut is fine at mid-latitudes and misleading in the tropics.
- **You might think** Ekman pumping directly drives the gyre's currents. **Actually** it drives a *vertical* velocity, which deforms the density field, which creates a pressure gradient, which drives geostrophic currents. Three steps, and skipping them makes the sign of the circulation impossible to reason about.

## One-liner

> Wind with spatial structure squeezes the surface Ekman layer, pumping water down at about forty metres a year in the subtropics and up in the subpolar seas — and the resulting bowls and domes in the thermocline are, via geostrophy, the entire wind-driven circulation of the ocean.

## Problems

**P1 (🟢)** At 40°N ($f = 9.37\times10^{-5}$), the zonal wind stress increases northward at $\partial\tau_x/\partial y = 4.0\times10^{-8}\ \mathrm{N\,m^{-3}}$, with no meridional stress. Take $\rho_0 = 1025$. (a) Compute the wind-stress curl. (b) Compute $w_E$, with sign and direction. (c) Convert to metres per year and state which gyre type this is.

**P2 (🟡)** A subpolar basin at 55°N ($f = 1.194\times10^{-4}$) spans $L = 1500\ \mathrm{km}$ meridionally with $\tau_x(y) = +\tau_0\cos(\pi y/L)$, $\tau_0 = 0.15\ \mathrm{N\,m^{-2}}$ — westerlies at the southern edge, easterlies at the northern. (a) Compute $w_E(y)$ and its maximum magnitude, in m yr⁻¹. (b) State the sign and what it does to the thermocline and to sea level. (c) The gyre's warm layer is 300 m thick. Estimate the spin-up time, and compare with the subtropical value of about 15 years.

**P3 (🔴, optional)** Near the equator the constant-$f$ approximation fails. Take a uniform easterly stress $\tau_x = -0.05\ \mathrm{N\,m^{-2}}$, independent of latitude, and $f = \beta y$ with $\beta = 2.29\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$. (a) Write down $M_{E,y}(y)$ and describe its behaviour on either side of the equator. (b) Compute the Ekman transport at $\pm2$ degrees latitude ($y = \pm222\ \mathrm{km}$). (c) The divergence must be supplied by upwelling within the band between $\pm2$ degrees. Compute the mean upwelling velocity in that band, in m per day, and compare with the subtropical value of $10^{-1}\ \mathrm{m\,day^{-1}}$. (d) State in one sentence why the formula $w_E = \nabla\times(\boldsymbol\tau/f)/\rho_0$ cannot be evaluated at $y=0$ even though the physical upwelling is perfectly finite.

<details>
<summary>Solutions</summary>

**P1** (a) With $\tau_y = 0$,
$$\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau = -\frac{\partial\tau_x}{\partial y} = -4.0\times10^{-8}\ \mathrm{N\,m^{-3}}.$$

(b) $$w_E = \frac{-4.0\times10^{-8}}{1025\times9.37\times10^{-5}} = \frac{-4.0\times10^{-8}}{0.09604} = -4.16\times10^{-7}\ \mathrm{m\,s^{-1}},$$
**downward**.

(c) $$4.16\times10^{-7}\times3.156\times10^{7} = 13.1\ \mathrm{m\,yr^{-1}}\ \text{downward}.$$

Downward pumping means a **subtropical** (anticyclonic) gyre. The sign chain is worth tracing once: eastward stress increasing northward means the westerlies strengthen poleward, so the Ekman transport (southward, magnitude $\tau_x/\rho_0f$) also strengthens poleward — more water leaving the north of the box than entering from the south is a convergence, hence downwelling.

**P2** (a) $$\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau = -\frac{\partial\tau_x}{\partial y} = +\tau_0\frac{\pi}{L}\sin\!\left(\frac{\pi y}{L}\right),$$
$$w_E = \frac{\tau_0\pi}{\rho_0 f L}\sin\!\left(\frac{\pi y}{L}\right).$$

Maximum at mid-basin:
$$|w_E|_{\max} = \frac{0.15\times\pi}{1025\times1.194\times10^{-4}\times1.5\times10^{6}} = \frac{0.4712}{1.836\times10^{5}} = 2.57\times10^{-6}\ \mathrm{m\,s^{-1}},$$
$$= 2.57\times10^{-6}\times3.156\times10^{7} = 81\ \mathrm{m\,yr^{-1}}.$$

(b) **Positive: upward.** The Ekman transports diverge, water is drawn up from below, the thermocline domes upward toward the surface and sea level is *low* over the gyre centre — a cyclonic, cold, nutrient-rich subpolar gyre. The doming brings deep nutrient-rich water into the euphotic zone, which is why the subpolar North Atlantic and North Pacific are among the most productive open-ocean regions on Earth.

(c) $$t = \frac{H}{w_E} = \frac{300}{2.57\times10^{-6}} = 1.17\times10^{8}\ \mathrm{s} = 3.7\ \mathrm{yr}.$$

Four times faster than the subtropical gyre, for two compounding reasons: the layer being adjusted is half as thick, and the pumping is twice as strong (a smaller basin concentrates the same wind contrast into a sharper curl). Subpolar gyres therefore track atmospheric variability much more closely than subtropical ones do — they respond within a few years to a shift in the North Atlantic Oscillation, whereas the subtropical gyre integrates over a decade and a half and acts as a low-pass filter on the same forcing.

**P3** (a) $$M_{E,y} = \frac{-\tau_x}{\rho_0 f} = \frac{+0.05}{\rho_0\beta y}.$$

For $y>0$ (northern hemisphere) this is positive: **northward**. For $y<0$ it is negative: **southward**. In both cases the transport is *away from the equator*, and it grows without bound as $y\to0$ — the signature of a formal breakdown.

(b) At $y = 222\ \mathrm{km}$:
$$f = \beta y = 2.29\times10^{-11}\times2.22\times10^{5} = 5.08\times10^{-6}\ \mathrm{s^{-1}},$$
$$M_{E,y} = \frac{0.05}{1025\times5.08\times10^{-6}} = \frac{0.05}{5.21\times10^{-3}} = 9.60\ \mathrm{m^2\,s^{-1}}.$$

Northward at $9.60\ \mathrm{m^2\,s^{-1}}$, and southward by the same amount at $y = -222\ \mathrm{km}$. For comparison, [2.3](02-03-ekman-layer-transport.md)'s Example 1 got $2.62\ \mathrm{m^2\,s^{-1}}$ at 15°N from a stronger wind — the $1/f$ factor has more than tripled the transport from a weaker stress.

(c) Total divergence out of the band: $9.60 + 9.60 = 19.2\ \mathrm{m^2\,s^{-1}}$ per metre of longitude, leaving through a band of width $444\ \mathrm{km}$:

$$w = \frac{19.2}{4.44\times10^{5}} = 4.32\times10^{-5}\ \mathrm{m\,s^{-1}} = 3.7\ \mathrm{m\,day^{-1}}.$$

About **forty times** the subtropical rate of $0.1\ \mathrm{m\,day^{-1}}$. This is why the equatorial ocean is cold at the surface despite receiving the most sunlight on the planet: the trades pump cold thermocline water up at a few metres a day, continuously, across the whole Pacific. That cold tongue is the object [5.5](05-05-walker-bjerknes-enso.md) turns into a coupled oscillator.

(d) The transport $M_E \propto 1/f$ diverges at the equator, so its derivative — the pumping — diverges faster. But the *physical* upwelling is a mass budget over a finite band, and mass budgets never diverge. The resolution is that the Ekman balance itself fails within a few degrees of the equator: the assumption that Coriolis balances the stress divergence breaks down when $f$ becomes comparable to the inverse of the frictional timescale, and the correct near-equatorial balance involves horizontal friction and the inertial terms. **The singularity is in the approximation, not in the ocean** — and the honest way to compute equatorial upwelling is exactly what part (c) did: apply the valid off-equatorial formula at the band's edges and close the budget in between.

</details>

## Flashback

**From Lesson 2.3 (The wind-driven Ekman layer and Ekman transport):** A $14\ \mathrm{m\,s^{-1}}$ wind blows from the north (i.e. southward) along a coast at 20°S, with the coastline running north–south and the ocean to the **west** of the land. Take $\rho_a = 1.22$, $C_D = 1.4\times10^{-3}$, $\rho_0 = 1025$, and $|f| = 4.99\times10^{-5}\ \mathrm{s^{-1}}$. (a) Compute the wind stress. (b) Compute the Ekman transport, being careful with the hemisphere, and state whether it is toward or away from the coast. (c) State whether this coast upwells or downwells under this wind, and name a real system with this geometry.

<details>
<summary>Solution</summary>

(a) $$\tau = 1.22\times1.4\times10^{-3}\times14^2 = 1.708\times10^{-3}\times196 = 0.335\ \mathrm{N\,m^{-2}},$$
directed southward: $\tau_y = -0.335$, $\tau_x = 0$.

(b) In the southern hemisphere $f$ is **negative**: $f = -4.99\times10^{-5}\ \mathrm{s^{-1}}$. Using the vector formula rather than a remembered handedness,

$$M_{E,x} = \frac{\tau_y}{\rho_0 f} = \frac{-0.335}{1025\times(-4.99\times10^{-5})} = \frac{-0.335}{-0.05115} = +6.55\ \mathrm{m^2\,s^{-1}}.$$

Positive $x$ is **eastward**. The land is to the east, so the transport is **toward the coast** — this is 90 degrees to the *left* of the southward wind, as the southern hemisphere requires.

(c) Transport toward the coast means water piles up against it and must sink: this coast **downwells**. Sea level rises at the shore, the thermocline is pushed down, and the surface layer is warm and nutrient-poor.

The real system with this geometry is the **west coast of South America** — Peru and Chile — where the ocean lies to the west and the land to the east. Note the sign carefully: the productive Peru upwelling system runs on winds from the *south* (equatorward, i.e. northward), which drive transport 90 degrees left of northward, hence **westward and offshore**. The southward wind posited in this problem is the *opposite* case, and it is exactly what happens during an El Niño, when the trades relax or reverse: coastal upwelling shuts down, the thermocline deepens, sea surface temperature rises, and the anchovy fishery collapses ([5.5](05-05-walker-bjerknes-enso.md)).

*Check.* If you found the transport pointing offshore, you almost certainly applied the northern-hemisphere "to the right" rule. This is the single most common error in the subject, and the defence is to carry $f$ with its sign rather than a memorized handedness.

</details>

## Connections

- **Backward:** this is the divergence of [2.3](02-03-ekman-layer-transport.md)'s transport integral, so it inherits the same independence from the eddy viscosity; the resulting pressure field drives geostrophic flow by [2.1](02-01-geostrophy-dynamic-method.md).
- **Forward:** $w_E$ is the forcing term on the right-hand side of the Sverdrup balance in [3.1](03-01-sverdrup-balance-interior-gyre.md), and it is the vertical velocity that subducts surface water into the thermocline in [6.2](06-02-ocean-heat-uptake-circulation.md); the equatorial breakdown noted here is repaired in [5.4](05-04-equatorial-waves-undercurrent.md).
- **Sideways (vector calculus):** $w_E = \nabla\cdot\mathbf{M}_E$ is the divergence theorem doing physical work — the vertical velocity through the bottom of a control volume equals the net horizontal outflow through its sides. The same argument in a different guise gives vortex stretching in [2.5](02-05-potential-vorticity-stratified-ocean.md).

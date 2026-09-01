# Physical Oceanography · Lesson 2.2: Ocean thermal wind and the Antarctic Circumpolar Current

> ⏱ ~15 min · Module 2: Rotating, stratified dynamics · Builds on: [2.1](02-01-geostrophy-dynamic-method.md), [atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md) · Unlocks: [3.1](03-01-sverdrup-balance-interior-gyre.md), [6.1](06-01-southern-ocean-hinge.md)

## Why this matters

Thermal wind is the single most useful diagnostic relation in geophysical fluid dynamics: it converts a *thermodynamic* measurement — the density field, which a ship can survey — into a *dynamical* one, the vertical shear of the current. [atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md) built it and used it to explain the jet stream. This lesson builds the ocean's version, which differs in one structural way and one practical way.

Structurally, the ocean's density gradient has **two** sources, temperature and salinity, and they can oppose. Practically, the payoff is that you can estimate the transport of the largest current on Earth — the Antarctic Circumpolar Current, moving more water than every river on the planet combined by a factor of a hundred — from a handful of hydrographic stations, and get within a factor of order one.

That current has been owed to you since [atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md) named it as the ocean's answer to the jet stream, and it is the one place in the ocean where the entire wind-driven gyre theory of Module 3 does not apply.

## The idea

**Tilted density surfaces mean vertical shear.** If layers of constant density are horizontal, the pressure gradient is the same at every depth and the current has no shear. Tilt them and the pressure gradient changes with depth, so the current must too. Thermal wind is nothing more than that statement made quantitative — and the constant of integration it leaves behind is exactly [2.1](02-01-geostrophy-dynamic-method.md)'s level-of-no-motion problem.

**The ocean has two ways to tilt them.** In the atmosphere, density and temperature are locked together by the ideal gas law, so "the isopycnals tilt" and "it is colder to the north" are the same statement. In the ocean they are not. A front can be warm on one side (making it lighter) and *also* salty on that side (making it heavier), and which effect wins decides the sign of the shear. The subtropical Atlantic does exactly this: the salinity gradient partially cancels the temperature gradient, and the resulting shear is weaker than the temperature field alone would suggest. **In the ocean, thermal wind is not a temperature diagnostic.**

**And the Antarctic Circumpolar Current is a wall of tilted isopycnals.** Go south across the Southern Ocean and the isopycnals rise steeply — surfaces that lie at 3000 m north of the current outcrop at the sea surface south of it. That is a slope of about one in a thousand, extraordinary for the ocean, sustained over a thousand kilometres and all the way around Antarctica. Thermal wind converts that tilt directly into the ACC's shear, and integrating it gives its transport.

**Why the ACC is different from every other current.** Every other ocean current is a closed gyre: water goes around and comes back, and the theory of Module 3 explains it as the wind's vorticity input balanced by what happens at the western boundary. The ACC has **no western boundary** — at the latitude of Drake Passage the water can circle the globe without hitting land. There is nothing to press against, so the balance that stops the wind accelerating it forever must be found somewhere else. It is found at the sea floor: the current pushes against submarine ridges, which push back. That is **topographic form stress**, and it makes the ACC's momentum budget structurally unlike any other current's.

## The formal version

**Thermal wind, in three equivalent forms.** From [2.1](02-01-geostrophy-dynamic-method.md),

$$\frac{\partial u}{\partial z} = \frac{g}{\rho_0 f}\frac{\partial\rho}{\partial y}, \qquad \frac{\partial v}{\partial z} = -\frac{g}{\rho_0 f}\frac{\partial\rho}{\partial x}.$$

*In words: the vertical shear of the geostrophic flow is set by the horizontal density gradient, rotated 90 degrees.*

**Form 2, in state variables.** Substituting the linearized equation of state $\rho = \rho_0[1-\alpha(\theta-\theta_0)+\beta(S-S_0)]$:

$$\boxed{\ \frac{\partial u}{\partial z} = -\frac{g}{f}\left(\alpha\frac{\partial\theta}{\partial y} - \beta\frac{\partial S}{\partial y}\right)\ }$$

*In words: a poleward temperature drop drives eastward shear; a poleward salinity drop opposes it.* The atmosphere has only the first term. **This is the whole structural difference**, and it is why an ocean front can have strong temperature contrast and weak shear.

**Form 3, in isopycnal slope.** Along an isopycnal $\rho$ is constant, so $\partial\rho/\partial y|_z = -(d\rho/dz)(\partial z_{\text{iso}}/\partial y)$, and using $N^2 = -(g/\rho_0)(d\rho/dz)$:

$$\frac{\partial u}{\partial z} = \frac{N^2}{f}\frac{\partial z_{\text{iso}}}{\partial y}.$$

*In words: shear equals stratification times isopycnal slope, over $f$.* This is the form to use when reading a published section, because isopycnal slopes are what a contoured section actually shows you. It is also the form that makes the ACC's magnitude obvious at a glance: everything else in the ocean has isopycnal slopes of $10^{-4}$ or less, and the ACC has $10^{-3}$.

**The Antarctic Circumpolar Current: the facts.**

| Quantity | Value |
|---|---|
| Transport through Drake Passage | 137 to 173 Sv (modern estimates cluster near 173) |
| Length | about 24,000 km, circumpolar |
| Latitude of Drake Passage | 56 to 62 °S, the narrowest gate |
| Isopycnal rise across the current | 2 to 3 km over 1000 to 2000 km |
| Depth of the flow | full water column, not surface-trapped |
| Structure | 2 to 3 narrow fronts, not a uniform stream |

The fronts — Subantarctic, Polar, and Southern ACC — carry most of the transport in jets tens of kilometres wide, exactly as the Gulf Stream does, and for the same reason ([3.4](03-04-mesoscale-eddies-baroclinic-instability.md)).

**Why Sverdrup theory fails here.** Module 3's central result gets the depth-integrated meridional transport in a gyre interior from the wind-stress curl alone, and it works because the gyre closes against a western boundary where the vorticity budget can be balanced by friction. In a **zonally unbounded** channel, integrating the zonal momentum equation all the way around a latitude circle makes the zonal pressure-gradient term vanish identically — a periodic function's integral over its period is zero — so there is no pressure force available to balance the wind. Something else must:

$$\underbrace{\tau_{\text{wind}}}_{\text{input}} = \underbrace{\oint p\,\frac{\partial h_b}{\partial x}\,dx}_{\text{topographic form stress}}$$

*In words: the westerly wind's momentum is not passed to a coastline but pressed against the sea floor, where the current piles water up on the upstream side of a ridge and hollows it on the downstream side.* The Southern Ocean's ridges — Macquarie, Pacific–Antarctic, Kerguelen, Scotia Arc — are what hold the ACC to 173 Sv rather than letting it accelerate indefinitely.

Consequently the ACC's transport is **not** proportional to the wind stress in any simple way, and increasing the Southern Hemisphere westerlies (which has been happening) does *not* straightforwardly speed it up. What increases instead is the eddy field ([6.1](06-01-southern-ocean-hinge.md)).

## Picture

![A meridional section across the Antarctic Circumpolar Current from 65 degrees south on the left to 55 degrees south on the right, 1000 km wide and 3000 m deep. Five coral isopycnals slope steeply upward toward the south, outcropping at the sea surface on the southern side, having been deep on the northern side; the vertical scale is exaggerated relative to the true slope of 1.2 in a thousand. Circles with dots mark the eastward flow out of the page: 0.11 m per second at the surface, 0.06 at 1500 m, zero at 3000 m. The width times depth times mean speed gives 170 sverdrups](assets/02-02-fig1.svg)

Every other current in this course would draw its isopycnals almost flat at this aspect ratio.

## Worked examples

**Example 1 (mechanical — the ACC's transport from a density section).** Across the ACC at 60°S, density at fixed depth increases poleward by $\Delta\rho = 0.5\ \mathrm{kg\,m^{-3}}$ over $1000\ \mathrm{km}$, from the surface down to $3000\ \mathrm{m}$; below that the current vanishes. Take $\rho_0 = 1027\ \mathrm{kg\,m^{-3}}$.

(a) *The Coriolis parameter.*
$$|f| = 2\Omega\sin 60^\circ = 2\times7.292\times10^{-5}\times0.8660 = 1.263\times10^{-4}\ \mathrm{s^{-1}}.$$

(b) *The shear.* With $|\partial\rho/\partial y| = 0.5/10^{6} = 5.0\times10^{-7}\ \mathrm{kg\,m^{-4}}$,

$$\left|\frac{\partial u}{\partial z}\right| = \frac{g}{\rho_0|f|}\left|\frac{\partial\rho}{\partial y}\right| = \frac{9.81\times5.0\times10^{-7}}{1027\times1.263\times10^{-4}} = \frac{4.905\times10^{-6}}{0.1297} = 3.78\times10^{-5}\ \mathrm{s^{-1}}.$$

(c) *Surface speed*, with the flow decaying linearly to zero at 3000 m:

$$u_{\text{surf}} = 3.78\times10^{-5}\times3000 = 0.113\ \mathrm{m\,s^{-1}}.$$

Eastward: dense water on the poleward side, which in the southern hemisphere ($f<0$) still gives an eastward surface-intensified jet — the mirror image of the northern-hemisphere case, because both $f$ and the direction of "poleward" flip.

(d) *Transport.* Mean speed over the column is $u_{\text{surf}}/2 = 0.0567\ \mathrm{m\,s^{-1}}$:

$$T = (10^{6}\ \mathrm{m})\times(3000\ \mathrm{m})\times0.0567 = 1.70\times10^{8}\ \mathrm{m^3\,s^{-1}} = \mathbf{170\ Sv}.$$

Against an observed 137 to 173 Sv. **A three-line calculation from one density contrast lands inside the observational range.** It is worth registering how unusual that is — this is a current whose transport is a hundred times the Amazon's, estimated to 20 percent accuracy from a number you could read off a contoured section with a ruler.

*Cross-check via isopycnal slope.* Taking $N^2 = 4.0\times10^{-6}\ \mathrm{s^{-2}}$, Form 3 requires an isopycnal slope of

$$\frac{\partial z_{\text{iso}}}{\partial y} = \frac{f}{N^2}\frac{\partial u}{\partial z} = \frac{1.263\times10^{-4}\times3.78\times10^{-5}}{4.0\times10^{-6}} = 1.19\times10^{-3},$$

which over 1000 km is a rise of 1.19 km — consistent with the observed 2 to 3 km once you allow that the real gradient is concentrated in fronts rather than spread uniformly.

**Example 2 (why you'd care — when salinity cancels the temperature).** Two hydrographic sections, both showing a poleward temperature drop of $4\ \mathrm{K}$ over $300\ \mathrm{km}$ at $40^\circ$ latitude ($|f| = 9.37\times10^{-5}$), through a layer 800 m thick.

- **Section A** (subtropical Atlantic): salinity also drops poleward, by $0.6$ over the same distance.
- **Section B** (Southern Ocean): salinity is uniform.

Take $\alpha = 1.8\times10^{-4}\ \mathrm{K^{-1}}$, $\beta = 7.6\times10^{-4}$. Compute the shear and the surface velocity in each, referenced to zero at 800 m.

*Section B (no salinity).* $\partial\theta/\partial y = -4/3\times10^{5} = -1.333\times10^{-5}\ \mathrm{K\,m^{-1}}$:

$$\left|\frac{\partial u}{\partial z}\right| = \frac{g\alpha}{|f|}\left|\frac{\partial\theta}{\partial y}\right| = \frac{9.81\times1.8\times10^{-4}\times1.333\times10^{-5}}{9.37\times10^{-5}} = \frac{2.354\times10^{-8}}{9.37\times10^{-5}} = 2.51\times10^{-4}\ \mathrm{s^{-1}},$$

$$u_{\text{surf}} = 2.51\times10^{-4}\times800 = 0.201\ \mathrm{m\,s^{-1}}.$$

*Section A (with salinity).* The salinity gradient is $\partial S/\partial y = -0.6/3\times10^{5} = -2.0\times10^{-6}\ \mathrm{m^{-1}}$, and the two contributions to $\partial\rho/\partial y$ are

$$-\rho_0\alpha\frac{\partial\theta}{\partial y} = -1027\times1.8\times10^{-4}\times(-1.333\times10^{-5}) = +2.464\times10^{-6},$$
$$+\rho_0\beta\frac{\partial S}{\partial y} = 1027\times7.6\times10^{-4}\times(-2.0\times10^{-6}) = -1.561\times10^{-6}.$$

Net: $\partial\rho/\partial y = 9.03\times10^{-7}\ \mathrm{kg\,m^{-4}}$, versus $2.464\times10^{-6}$ from temperature alone. The salinity gradient has cancelled **63 percent** of the density gradient.

$$\left|\frac{\partial u}{\partial z}\right| = \frac{9.81\times9.03\times10^{-7}}{1027\times9.37\times10^{-5}} = \frac{8.858\times10^{-6}}{0.09623} = 9.20\times10^{-5}\ \mathrm{s^{-1}},$$
$$u_{\text{surf}} = 9.20\times10^{-5}\times800 = 0.0736\ \mathrm{m\,s^{-1}}.$$

**Identical temperature sections; velocities differing by a factor of 2.7.**

*The point.* An atmospheric scientist who read Section A's temperature field and applied atmospheric thermal wind would overestimate the current by nearly a factor of three, and would have no way of knowing it from the temperature data. The error is not small and it is not random — it is systematic, and it always goes the same way in the subtropics, where evaporation makes the warm water salty and the two effects partly cancel by construction. Wherever the surface freshwater flux and the surface heat flux have the same spatial pattern, expect this compensation. Its extreme form is **density compensation**: fronts in which $\theta$ and $S$ cancel *exactly*, leaving a sharp thermal front with no density signature and no shear at all. These are common in the subtropics, invisible to altimetry, and a persistent nuisance for anyone inferring currents from satellite temperature.

## Watch out

- **You might think** thermal wind gives you the current. **Actually** it gives you the *shear*. The current requires an integration constant, which is [2.1](02-01-geostrophy-dynamic-method.md)'s level-of-no-motion problem and does not go away because you changed variables.
- **You might think** a strong temperature front implies a strong current. **Actually** in the ocean it implies a strong current only if the salinity does not compensate. Check both fields, always; density-compensated fronts are real and common.
- **You might think** the ACC is driven by the westerlies in the direct sense that more wind means more transport. **Actually** the wind sets the *isopycnal slope*, and the slope is limited by baroclinic instability and eddy fluxes rather than by the wind alone. Increased Southern Ocean westerlies over recent decades have produced very little change in ACC transport and a large change in eddy kinetic energy — the phenomenon called **eddy saturation** ([6.1](06-01-southern-ocean-hinge.md)).

## One-liner

> Tilted isopycnals mean vertical shear, and in the ocean the tilt comes from temperature and salinity together — which is why the Antarctic Circumpolar Current's one-in-a-thousand isopycnal slope yields 170 sverdrups from a three-line calculation, and why a subtropical front with an identical temperature gradient may carry almost no current at all.

## Problems

**P1 (🟢)** At 45°S ($|f| = 1.031\times10^{-4}\ \mathrm{s^{-1}}$), a section shows density at fixed depth increasing poleward by $0.30\ \mathrm{kg\,m^{-3}}$ over $500\ \mathrm{km}$, from the surface to $2000\ \mathrm{m}$, with $\rho_0 = 1027$. (a) Compute the thermal-wind shear. (b) Compute the surface speed assuming zero flow at 2000 m. (c) Compute the transport through a section 500 km wide, in sverdrups.

**P2 (🟡)** A subtropical front at 30°N ($f = 7.29\times10^{-5}$) has $\partial\theta/\partial y = -2.0\times10^{-5}\ \mathrm{K\,m^{-1}}$ and $\partial S/\partial y = -4.0\times10^{-6}\ \mathrm{m^{-1}}$, with $\alpha = 2.2\times10^{-4}\ \mathrm{K^{-1}}$, $\beta = 7.6\times10^{-4}$. (a) Compute the shear from the temperature term alone. (b) Compute the shear from both terms. (c) Find the salinity gradient that would make the front exactly density-compensated, and state what an altimeter would see in that case.

**P3 (🔴, optional)** The Sverdrup balance of [3.1](03-01-sverdrup-balance-interior-gyre.md) predicts every major current's interior transport from the wind-stress curl. (a) Write down, in two sentences, why it cannot be applied to the ACC. (b) In its place, the ACC's zonal momentum balance is between wind stress and topographic form stress. Given a mean westerly stress of $\tau = 0.15\ \mathrm{N\,m^{-2}}$ acting over the ACC's belt, from 50°S to 65°S and all the way around, estimate the total zonal momentum input in newtons. Take the Earth's radius as $6.371\times10^{6}\ \mathrm{m}$ and treat the belt as a spherical zone. (c) If that momentum had to be absorbed by lateral friction against a continental boundary instead, and the ACC's transport is 173 Sv at a mean speed of $0.10\ \mathrm{m\,s^{-1}}$, estimate the timescale on which the ACC would spin up from rest, and comment on whether it is short or long compared with the ocean's overturning timescale of about 1000 years.

<details>
<summary>Solutions</summary>

**P1** (a) $$\left|\frac{\partial\rho}{\partial y}\right| = \frac{0.30}{5\times10^{5}} = 6.0\times10^{-7}\ \mathrm{kg\,m^{-4}},$$
$$\left|\frac{\partial u}{\partial z}\right| = \frac{9.81\times6.0\times10^{-7}}{1027\times1.031\times10^{-4}} = \frac{5.886\times10^{-6}}{0.1059} = 5.56\times10^{-5}\ \mathrm{s^{-1}}.$$

(b) $$u_{\text{surf}} = 5.56\times10^{-5}\times2000 = 0.111\ \mathrm{m\,s^{-1}}.$$

(c) Mean speed $= 0.0556\ \mathrm{m\,s^{-1}}$:
$$T = 5\times10^{5}\times2000\times0.0556 = 5.56\times10^{7}\ \mathrm{m^3\,s^{-1}} = 55.6\ \mathrm{Sv}.$$

**P2** (a) $$\left|\frac{\partial u}{\partial z}\right|_\theta = \frac{g\alpha}{f}\left|\frac{\partial\theta}{\partial y}\right| = \frac{9.81\times2.2\times10^{-4}\times2.0\times10^{-5}}{7.29\times10^{-5}} = \frac{4.316\times10^{-8}}{7.29\times10^{-5}} = 5.92\times10^{-4}\ \mathrm{s^{-1}}.$$

(b) The two density-gradient contributions:
$$-\rho_0\alpha\frac{\partial\theta}{\partial y} = -1027\times2.2\times10^{-4}\times(-2.0\times10^{-5}) = +4.519\times10^{-6},$$
$$+\rho_0\beta\frac{\partial S}{\partial y} = 1027\times7.6\times10^{-4}\times(-4.0\times10^{-6}) = -3.122\times10^{-6}.$$
Net $\partial\rho/\partial y = 1.397\times10^{-6}\ \mathrm{kg\,m^{-4}}$, so
$$\left|\frac{\partial u}{\partial z}\right| = \frac{9.81\times1.397\times10^{-6}}{1027\times7.29\times10^{-5}} = \frac{1.370\times10^{-5}}{0.07487} = 1.83\times10^{-4}\ \mathrm{s^{-1}}.$$

The salinity term removes 69 percent of the shear.

(c) Exact compensation requires $\alpha\,\partial\theta/\partial y = \beta\,\partial S/\partial y$:
$$\frac{\partial S}{\partial y} = \frac{\alpha}{\beta}\frac{\partial\theta}{\partial y} = \frac{2.2\times10^{-4}}{7.6\times10^{-4}}\times(-2.0\times10^{-5}) = -5.79\times10^{-6}\ \mathrm{m^{-1}},$$

i.e. a salinity drop of $1.74$ over $300\ \mathrm{km}$ instead of the actual $1.20$.

An altimeter would see **nothing at all**. Sea surface height responds to the depth-integrated density field, and a perfectly compensated front has no density anomaly at any depth, hence no dynamic height signal, hence no geostrophic current. A satellite infrared image of the same front would show a sharp, dramatic temperature boundary. The two instruments would flatly disagree, and both would be right.

**P3** (a) The Sverdrup balance is derived by integrating the vorticity equation across a basin from an eastern boundary where the meridional transport is known to vanish, and it is closed by a western boundary current that returns the mass. The ACC's latitude band has no meridional boundaries at all, so neither the integration constant nor the return path exists, and the depth-integrated flow cannot be determined from the wind-stress curl.

(b) The area of a spherical zone between latitudes $\phi_1$ and $\phi_2$ is $A = 2\pi R^2(\sin\phi_2 - \sin\phi_1)$. With $\phi_1 = 50^\circ$, $\phi_2 = 65^\circ$:

$$\sin 65^\circ - \sin 50^\circ = 0.9063 - 0.7660 = 0.1403,$$
$$A = 2\pi(6.371\times10^{6})^2(0.1403) = 2\pi\times4.059\times10^{13}\times0.1403 = 3.578\times10^{13}\ \mathrm{m^2}.$$

$$F = \tau A = 0.15\times3.578\times10^{13} = 5.37\times10^{12}\ \mathrm{N}.$$

(c) The ACC's momentum: with transport $T = 173\ \mathrm{Sv} = 1.73\times10^{8}\ \mathrm{m^3\,s^{-1}}$ and mean speed $0.10\ \mathrm{m\,s^{-1}}$, the cross-sectional area is $A_{\text{cs}} = 1.73\times10^{9}\ \mathrm{m^2}$. The mass in the current, taken around a circumpolar path of length $L = 2\pi R\cos 57^\circ \approx 2.18\times10^{7}\ \mathrm{m}$:

$$M = \rho_0 A_{\text{cs}} L = 1027\times1.73\times10^{9}\times2.18\times10^{7} = 3.87\times10^{19}\ \mathrm{kg}.$$

Momentum: $p = Mu = 3.87\times10^{19}\times0.10 = 3.87\times10^{18}\ \mathrm{kg\,m\,s^{-1}}$.

Spin-up time:
$$t = \frac{p}{F} = \frac{3.87\times10^{18}}{5.37\times10^{12}} = 7.2\times10^{5}\ \mathrm{s} = 8.3\ \mathrm{days}.$$

**About a week** — extraordinarily short compared with the 1000-year overturning timescale, and short even compared with a season.

That is the crux of the problem, and it is why topographic form stress is not an optional refinement. If the wind's momentum had nowhere to go, the ACC would reach its observed speed in about eight days and then keep accelerating, doubling every week or so until some nonlinearity intervened. The observed ACC is steady on timescales of decades, so the sink must remove momentum as fast as the wind supplies it, continuously, and at a rate that is nearly independent of the current's speed. Lateral friction against a coastline cannot do it because there is no coastline; bottom friction acting on a $0.10\ \mathrm{m\,s^{-1}}$ abyssal flow is orders of magnitude too weak. Pressure differences across submarine ridges are the only candidate with the right magnitude, and measurements across the Scotia Arc and Macquarie Ridge confirm it.

</details>

## Flashback

**From Lesson 1.5 (The mixed layer and air–sea fluxes):** A subpolar site has $Q_{\text{SW}} = 40$, $Q_{\text{LW}} = 55$, $Q_{\text{LH}} = 70$, $Q_{\text{SH}} = 35\ \mathrm{W\,m^{-2}}$ (magnitudes) in midwinter, with a 200 m mixed layer, $\rho_0 = 1027\ \mathrm{kg\,m^{-3}}$ and $c_p = 3990\ \mathrm{J\,kg^{-1}\,K^{-1}}$. (a) Compute $Q_{\text{net}}$. (b) Compute the cooling rate in K per month. (c) The wind stress is $0.30\ \mathrm{N\,m^{-2}}$ and the stratification below the mixed layer has $N = 2.0\times10^{-3}\ \mathrm{s^{-1}}$. Using $h = (12\,m\,u_*^3 t/N^2)^{1/3}$ with $m=1$, compute how deep 5 days of that wind alone would mix, and comment on whether wind or cooling is doing more here.

<details>
<summary>Solution</summary>

(a) $$Q_{\text{net}} = 40 - 55 - 70 - 35 = -120\ \mathrm{W\,m^{-2}}.$$

(b) $$\frac{dT}{dt} = \frac{-120}{1027\times3990\times200} = -1.464\times10^{-7}\ \mathrm{K\,s^{-1}},$$

and per month ($2.63\times10^{6}$ s): $-0.385\ \mathrm{K\,month^{-1}}$.

(c) $$u_* = \sqrt{\frac{0.30}{1027}} = 0.01709\ \mathrm{m\,s^{-1}}, \qquad t = 5\times86\,400 = 4.32\times10^{5}\ \mathrm{s},$$

$$h = \left(\frac{12\times(0.01709)^3\times4.32\times10^{5}}{(2.0\times10^{-3})^2}\right)^{1/3} = \left(\frac{12\times4.991\times10^{-6}\times4.32\times10^{5}}{4.0\times10^{-6}}\right)^{1/3}$$
$$= \left(\frac{25.87}{4.0\times10^{-6}}\right)^{1/3} = (6.47\times10^{6})^{1/3} = 186\ \mathrm{m}.$$

So five days of steady wind would mix to about 186 m — comparable to, but not exceeding, the 200 m mixed layer already present.

**Cooling is doing more.** The wind's contribution has essentially saturated: it can maintain a layer of roughly this depth but cannot deepen it much further, because the cube-root scaling means doubling the depth would take eight times the wind work. Convection has no such penalty — buoyancy loss destroys the stratification rather than mixing across it, so the potential-energy cost of each additional metre falls toward zero as the column homogenizes. That asymmetry is why the deepest mixed layers on Earth (Labrador Sea, Weddell Sea, Gulf of Lions, all over 1000 m) are found where the winter buoyancy loss is largest, not where the winds are strongest, and it is the mechanism [4.2](04-02-deep-water-formation-convection.md) is built on.

</details>

## Connections

- **Backward:** thermal wind is the $z$-derivative of [2.1](02-01-geostrophy-dynamic-method.md)'s geostrophic velocity, with the barotropic term differentiated away; the two-term density gradient is [1.2](01-02-density-equation-of-state.md)'s equation of state, and $N^2$ in Form 3 is [1.4](01-04-stratification-buoyancy-frequency.md)'s.
- **Forward:** the ACC's steeply tilted isopycnals are what [6.1](06-01-southern-ocean-hinge.md) turns into the global overturning's upwelling branch; the eddies that limit the slope are [3.4](03-04-mesoscale-eddies-baroclinic-instability.md)'s; and the wind stress that sustains it drives the Ekman transport of [2.3](02-03-ekman-layer-transport.md).
- **Sideways (atmospheric science):** [atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md) explained the jet stream as thermal wind above a poleward temperature gradient, and named the ACC as its oceanic counterpart without building it. The analogy is genuinely close — both are zonally unbounded, eddy-saturated, baroclinically unstable jets — and it is closer than the analogy between any two other atmospheric and oceanic features.

# Heat Transfer · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Thermodynamics says *how much*; this course says *how fast*. Three modes carry
heat — conduction (Fourier), convection (Newton), radiation (Stefan–Boltzmann) —
and almost every problem is one of four moves: collapse the geometry into a
resistance network, decide with one dimensionless number which transient model
applies, look up the right correlation for a convection coefficient, or rate an
exchanger. This card holds the resistances, the dimensionless groups and their
criteria, and the correlations **with their validity ranges** — a correlation
quoted outside its range is a wrong answer that looks right.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $q$ | heat **rate** — energy per unit time, in watts (W) | [1.1](lessons/01-01-three-modes-fouriers-law.md) |
| $q''$ | heat **flux** — rate per unit area, $\mathrm{W/m^2}$ (double prime = "per area") | [1.1](lessons/01-01-three-modes-fouriers-law.md) |
| $q'$ | rate per unit **length**, W/m (single prime); likewise $R'$, $R''$ | [1.3](lessons/01-03-1d-steady-conduction.md) |
| $\dot q$ | volumetric heat **generation** — watts released per cubic metre, $\mathrm{W/m^3}$ | [1.2](lessons/01-02-heat-equation.md) |
| $k$ | thermal conductivity of the **material in question**, $\mathrm{W/(m\cdot K)}$ | [1.1](lessons/01-01-three-modes-fouriers-law.md) |
| $k_f$, $k_s$ | conductivity of the **fluid** / of the **solid** — the distinction that separates $Nu$ from $Bi$ | [3.1](lessons/03-01-convection-coefficient-boundary-layers.md) |
| $h$ | convection coefficient, $\mathrm{W/(m^2\cdot K)}$ — a property of the *flow*, not the solid | [1.1](lessons/01-01-three-modes-fouriers-law.md) |
| $\bar h$, $h_x$ | surface-**average** and **local** convection coefficient | [3.1](lessons/03-01-convection-coefficient-boundary-layers.md) |
| $\alpha$ | thermal diffusivity $k/(\rho c_p)$, $\mathrm{m^2/s}$ — how fast a *disturbance* spreads | [1.2](lessons/01-02-heat-equation.md) |
| $\alpha$ (radiation) | absorptivity — fraction of arriving radiation absorbed (context tells them apart) | [4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md) |
| $\rho$, $c_p$ | density $\mathrm{kg/m^3}$ and specific heat $\mathrm{J/(kg\cdot K)}$; $\rho c_p$ is volumetric heat capacity | [1.2](lessons/01-02-heat-equation.md) |
| $\nu$, $\mu$ | kinematic ($\mathrm{m^2/s}$) and dynamic ($\mathrm{Pa\cdot s}$) viscosity, $\nu=\mu/\rho$ | [3.2](lessons/03-02-dimensionless-groups-re-pr-nu.md) |
| $R_t$, $R''$, $R'$ | thermal resistance in K/W, per unit area $\mathrm{m^2K/W}$, per unit length $\mathrm{m\cdot K/W}$ | [1.4](lessons/01-04-thermal-resistance-networks.md) |
| $R''_{tc}$ | contact resistance per unit interface area, $\mathrm{m^2K/W}$ | [1.4](lessons/01-04-thermal-resistance-networks.md) |
| $U$, $UA$ | overall heat-transfer coefficient $\mathrm{W/(m^2K)}$; $UA$ (W/K) is the unambiguous one | [1.4](lessons/01-04-thermal-resistance-networks.md) |
| $\theta$, $\theta_b$, $\theta_i$ | temperature **excess** above ambient, $T-T_\infty$ (K); at a fin base; initially | [1.5](lessons/01-05-fins-extended-surfaces.md) |
| $m$ | fin parameter $\sqrt{hP/(kA_c)}$, units $\mathrm{m^{-1}}$ — inverse cooling length of a fin | [1.5](lessons/01-05-fins-extended-surfaces.md) |
| $P$, $A_c$, $A_f$, $A_t$ | fin perimeter (m), cross-section, fin surface area, total finned-surface area ($\mathrm{m^2}$) | [1.5](lessons/01-05-fins-extended-surfaces.md) |
| $\eta_f$, $\eta_o$ | fin efficiency and overall (array) surface efficiency | [1.5](lessons/01-05-fins-extended-surfaces.md) |
| $\varepsilon_f$ | fin **effectiveness** — fin heat over bare-patch heat (not emissivity, not exchanger $\varepsilon$) | [1.5](lessons/01-05-fins-extended-surfaces.md) |
| $L_c$ | characteristic length — $V/A_s$ for lumped $Bi$, half-thickness or $r_o$ for the charts | [2.1](lessons/02-01-lumped-capacitance-biot.md) |
| $\tau$ | thermal time constant $\rho V c_p/(hA_s)$, seconds | [2.1](lessons/02-01-lumped-capacitance-biot.md) |
| $\eta$ | similarity variable $x/(2\sqrt{\alpha t})$ — depth measured in penetration lengths | [2.2](lessons/02-02-semi-infinite-solid.md) |
| $\delta$ | penetration depth (transient) or boundary-layer thickness (convection), m | [2.2](lessons/02-02-semi-infinite-solid.md), [3.1](lessons/03-01-convection-coefficient-boundary-layers.md) |
| $\delta_t$ | **thermal** boundary-layer thickness, m | [3.1](lessons/03-01-convection-coefficient-boundary-layers.md) |
| $\theta^*$ | dimensionless temperature $(T-T_\infty)/(T_i-T_\infty)$, 1 at the start, 0 when done | [2.3](lessons/02-03-finite-bodies-heisler.md) |
| $\zeta_1$, $C_1$ | first eigenvalue (rad) and its coefficient in the one-term solution — functions of $Bi$ only | [2.3](lessons/02-03-finite-bodies-heisler.md) |
| $T_s$, $T_\infty$ | surface temperature and free-stream / far-fluid temperature | [1.1](lessons/01-01-three-modes-fouriers-law.md) |
| $T_f$ | film temperature $(T_s+T_\infty)/2$ — where external-flow properties are evaluated | [3.3](lessons/03-03-external-forced-convection.md) |
| $T_m$ | mean (mixing-cup) temperature of a stream inside a duct | [3.4](lessons/03-04-internal-forced-convection.md) |
| $u_\infty$, $u_m$ | free-stream velocity (external) and mean velocity (internal), m/s | [3.2](lessons/03-02-dimensionless-groups-re-pr-nu.md), [3.4](lessons/03-04-internal-forced-convection.md) |
| $\beta$ | volumetric thermal expansion coefficient, $\mathrm{K^{-1}}$ — the engine of buoyancy | [3.5](lessons/03-05-natural-convection.md) |
| $\Delta T_e$ | excess temperature (wall superheat) $T_s-T_{sat}$ | [3.6](lessons/03-06-boiling-condensation.md) |
| $h_{fg}$ | latent heat of vaporization, J/kg | [3.6](lessons/03-06-boiling-condensation.md) |
| $\sigma$ | Stefan–Boltzmann constant, $5.67\times10^{-8}\ \mathrm{W/(m^2\cdot K^4)}$ | [1.1](lessons/01-01-three-modes-fouriers-law.md) |
| $\varepsilon$ | emissivity, $0\le\varepsilon\le1$ (Module 4) | [1.1](lessons/01-01-three-modes-fouriers-law.md) |
| $E_b$, $E_{b,\lambda}$ | blackbody total emissive power $\mathrm{W/m^2}$; spectral, $\mathrm{W/(m^2\cdot\mu m)}$ | [4.1](lessons/04-01-blackbody-radiation.md) |
| $F_{0\to\lambda T}$ | band fraction — share of blackbody output below wavelength $\lambda$ | [4.1](lessons/04-01-blackbody-radiation.md) |
| $G$, $J$ | irradiation (arriving flux) and radiosity (all flux leaving), both $\mathrm{W/m^2}$ | [4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md), [4.3](lessons/04-03-view-factors-radiation-exchange.md) |
| $\rho$, $\tau$ (radiation) | reflectivity and transmissivity — dimensionless, not density and not a time constant | [4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md) |
| $F_{ij}$ | view factor — fraction of radiation leaving $i$ that lands on $j$ | [4.3](lessons/04-03-view-factors-radiation-exchange.md) |
| $T_{sur}$ | temperature of the large surroundings a surface radiates to (K) | [1.1](lessons/01-01-three-modes-fouriers-law.md) |
| $C=\dot m c_p$ | heat-capacity rate of a stream, W/K; $C_{\min}$, $C_{\max}$, $C_r=C_{\min}/C_{\max}$ | [4.4](lessons/04-04-heat-exchangers-lmtd.md) |
| $\Delta T_{lm}$ | log-mean temperature difference of an exchanger, K | [4.4](lessons/04-04-heat-exchangers-lmtd.md) |
| $F$ | LMTD correction factor for cross-flow / multipass, $F\le1$ | [4.4](lessons/04-04-heat-exchangers-lmtd.md) |
| $\varepsilon$ (exchanger) | effectiveness $q/q_{\max}$ — a *third* meaning of epsilon; read the context | [4.5](lessons/04-05-heat-exchangers-effectiveness-ntu.md) |
| $NTU$ | number of transfer units $UA/C_{\min}$ — the exchanger's dimensionless size | [4.5](lessons/04-05-heat-exchangers-effectiveness-ntu.md) |

## Definitions

### Fourier's law

Heat conducts downhill in temperature, at a rate proportional to how steeply the
temperature falls.

$$q'' = -k\,\frac{dT}{dx}, \qquad \mathbf{q''} = -k\,\nabla T \quad [\mathrm{W/m^2}]$$

The minus sign is the second law: flux points down the gradient, perpendicular to
isotherms.

*Introduced:* [1.1](lessons/01-01-three-modes-fouriers-law.md)

### Thermal conductivity

How readily a material passes heat along, in $\mathrm{W/(m\cdot K)}$. A material
property (weakly temperature-dependent), spanning five orders of magnitude from
copper to still air.

*Introduced:* [1.1](lessons/01-01-three-modes-fouriers-law.md)

### Thermal diffusivity

How fast a *temperature disturbance* travels — conduction divided by storage. Big
$\alpha$ means "conducts eagerly, stores reluctantly," so transients race through.

$$\alpha \equiv \frac{k}{\rho c_p} \quad [\mathrm{m^2/s}], \qquad t \sim \frac{L^2}{\alpha}$$

*Introduced:* [1.2](lessons/01-02-heat-equation.md)

### Heat equation

Energy bookkeeping on a shrinking box: what conducts in, minus what conducts out,
plus what is generated, equals what is stored.

$$\rho c_p\,\frac{\partial T}{\partial t} = \nabla\!\cdot(k\nabla T) + \dot q \;\;\xrightarrow{\;k\text{ constant}\;}\;\; \frac{\partial T}{\partial t} = \alpha\nabla^2 T + \frac{\dot q}{\rho c_p}$$

The only physics input is Fourier's law; everything else is conservation of energy.

*Introduced:* [1.2](lessons/01-02-heat-equation.md)

### Thermal resistance

The temperature drop it costs to push one watt through an element — Ohm's law with
temperature for voltage and heat rate for current.

$$R_t \equiv \frac{\Delta T}{q} \quad [\mathrm{K/W}], \qquad q = \frac{\Delta T}{R_t}$$

*Introduced:* [1.4](lessons/01-04-thermal-resistance-networks.md)

### Contact resistance

Two solids "in contact" touch only at scattered high spots with trapped air
between, so the joint drops temperature like a hidden insulating layer.

$$R_{tc} = \frac{R''_{tc}}{A}, \qquad R''_{tc}\ \text{tabulated in }\mathrm{m^2K/W}$$

*Introduced:* [1.4](lessons/01-04-thermal-resistance-networks.md)

### Overall heat-transfer coefficient

One convection-like number standing in for an entire sandwich — inside film, every
solid layer, outside film.

$$q = UA\,\Delta T_{overall}, \qquad UA = \frac{1}{R_{tot}}$$

Because inner and outer areas differ on a tube, $U$ alone is ambiguous; carry the
product $UA$ (W/K).

*Introduced:* [1.4](lessons/01-04-thermal-resistance-networks.md)

### Critical insulation radius

The radius at which added insulation stops helping and starts hurting: it thickens
the conduction path but also enlarges the outer surface, which *cuts* convective
resistance.

$$r_{cr} = \frac{k}{h}\ \ (\text{cylinder}), \qquad r_{cr} = \frac{2k}{h}\ \ (\text{sphere})$$

Total resistance is a *minimum* there, so heat loss is a *maximum*. Insulation only
ever helps if the bare radius already exceeds $r_{cr}$.

*Introduced:* [1.4](lessons/01-04-thermal-resistance-networks.md)

### Fin parameter

The tug-of-war number: convection stripping heat off the sides versus conduction
resupplying it from the base. Its reciprocal $1/m$ is the distance over which a fin
cools off.

$$m = \sqrt{\frac{hP}{kA_c}} \quad [\mathrm{m^{-1}}], \qquad \frac{d^2\theta}{dx^2} - m^2\theta = 0$$

Real, distinct roots $\pm m$ — so a fin **fades** ($\cosh$, $\sinh$) where an
oscillator rings.

*Introduced:* [1.5](lessons/01-05-fins-extended-surfaces.md)

### Fin efficiency

The fraction of "if the whole fin were base-hot" heat you actually get. Near 1 for a
short, fat, conductive fin.

$$\eta_f \equiv \frac{q_f}{hA_f\theta_b} = \frac{\tanh mL_c}{mL_c}, \qquad L_c = L + \frac{t}{2}$$

The **corrected length** $L_c$ lets one adiabatic-tip formula stand in for real tip
convection.

*Introduced:* [1.5](lessons/01-05-fins-extended-surfaces.md)

### Fin effectiveness

Was adding the fin *worth it* — heat with the fin over the heat that bare patch of
base would have shed.

$$\varepsilon_f \equiv \frac{q_f}{hA_c\theta_b}, \qquad \varepsilon_f \to \sqrt{\frac{kP}{hA_c}}\ \ (\text{long fin})$$

Rule: $\varepsilon_f>1$ to bother, $\gtrsim2$ to pay for manufacturing,
$\le1$ means the fin is an insulating plug. Fins pay off on the low-$h$, high-$k$
side — air-cooled aluminum, not water-cooled plastic.

*Introduced:* [1.5](lessons/01-05-fins-extended-surfaces.md)

### Overall surface efficiency

One number for a whole fin array: the weighted average of the (perfect) bare base
and the (imperfect) fins, which then collapses to a single resistor.

$$\eta_o = 1 - \frac{N A_f}{A_t}(1-\eta_f), \qquad A_t = NA_f + A_b, \qquad R_o = \frac{1}{\eta_o h A_t}$$

*Introduced:* [1.5](lessons/01-05-fins-extended-surfaces.md)

### Biot number

Does the body have *one* temperature or many? It compares the resistance to getting
heat out through the solid against the resistance to shedding it from the surface.

$$Bi = \frac{hL_c}{k_{s}} = \frac{L_c/(k_s A)}{1/(hA)}, \qquad L_c = \frac{V}{A_s}$$

$Bi<0.1$ means internal gradients are a few percent — lumped capacitance is legal.
Uses the **solid's** conductivity (contrast the Nusselt number).

*Introduced:* [2.1](lessons/02-01-lumped-capacitance-biot.md)

### Lumped capacitance

When the interior is effectively isothermal, the whole body is one blob whose
temperature excess decays exponentially — heat transfer's RC circuit.

$$\frac{\theta}{\theta_i} = \frac{T-T_\infty}{T_i-T_\infty} = e^{-t/\tau}, \qquad \tau = \frac{\rho V c_p}{hA_s} = R_t C_t$$

*Introduced:* [2.1](lessons/02-01-lumped-capacitance-biot.md)

### Penetration depth

How far inward the "the surface changed" news has diffused. It grows like the
*square root* of time, which is the fingerprint of diffusion.

$$\delta \approx 4\sqrt{\alpha t}$$

Beyond it the material still has not felt the surface — which is exactly the
thickness a real body must exceed for "semi-infinite" to be honest.

*Introduced:* [2.2](lessons/02-02-semi-infinite-solid.md)

### Fourier number

Dimensionless time: how far the thermal signal has diffused, measured in body
half-thicknesses squared.

$$Fo = \frac{\alpha t}{L^2}$$

$Fo\lesssim0.05$: still semi-infinite. $Fo>0.2$: higher modes are dead, the
one-term / Heisler solution is valid.

*Introduced:* [2.3](lessons/02-03-finite-bodies-heisler.md)

### One-term approximation

Separation of variables gives a Fourier series of decaying modes; the higher ones
die fast, so after a modest wait the centre temperature is a single exponential.

$$\theta_0^* = \frac{T_0-T_\infty}{T_i-T_\infty} = C_1\,e^{-\zeta_1^2 Fo} \quad (Fo>0.2)$$

The **Heisler charts** are this line drawn on log paper; the **Gröber chart** is the
companion energy fraction. Here $Bi$ and $Fo$ use the **half-thickness** (slab) or
**outer radius** (cylinder, sphere) — *not* $V/A_s$.

*Introduced:* [2.3](lessons/02-03-finite-bodies-heisler.md)

### Convection coefficient

Convection is conduction across the stationary fluid film at the wall, so $h$ is
just the wall temperature slope in the *fluid*, normalized by the overall gap. It is
a property of the **flow**, never of the solid.

$$q''_s = -k_f\left.\frac{\partial T}{\partial y}\right|_{y=0} = h\,(T_s-T_\infty) \;\Longrightarrow\; h = \frac{-k_f\,\partial T/\partial y|_{0}}{T_s-T_\infty}$$

*Introduced:* [3.1](lessons/03-01-convection-coefficient-boundary-layers.md)

### Boundary layer

The thin skin near a wall where the fluid has been slowed (velocity layer,
thickness $\delta$) or has had its temperature shifted (thermal layer, $\delta_t$).
Convection lives entirely inside them; a **thin** layer means a steep wall gradient
and a big $h$.

$$\frac{\delta}{\delta_t} \approx Pr^{1/3}, \qquad \delta \sim \frac{L}{\sqrt{Re}}$$

*Introduced:* [3.1](lessons/03-01-convection-coefficient-boundary-layers.md)

### Film temperature

The average of wall and free stream — where you evaluate every fluid property for
external forced and natural convection, because the fluid doing the work sits
between the two.

$$T_f = \frac{T_s+T_\infty}{2}$$

*Introduced:* [3.3](lessons/03-03-external-forced-convection.md)

### Nusselt number

Dimensionless $h$: how much better the moving fluid is than a stagnant slab of the
same fluid of thickness $L$. It is the **output** every correlation delivers.

$$Nu = \frac{hL}{k_f} = \frac{h}{k_f/L}$$

$Nu=1$ means motion bought nothing. Uses the **fluid's** conductivity — same algebra
as $Bi$, opposite material, opposite question.

*Introduced:* [3.2](lessons/03-02-dimensionless-groups-re-pr-nu.md)

### Dynamic similarity

Nondimensionalize the boundary-layer equations and only $Re$ and $Pr$ survive, so
two geometrically similar flows with matching $Re$ and $Pr$ have identical
dimensionless temperature fields — hence identical $Nu$.

$$Nu = f(Re,\,Pr) \quad \text{for a given geometry}$$

This is why one wind-tunnel curve sizes $h$ for a whole family of real hardware.

*Introduced:* [3.2](lessons/03-02-dimensionless-groups-re-pr-nu.md)

### Mean (bulk) temperature

Inside a duct there is no far-away $T_\infty$ — the reference keeps moving. $T_m$ is
the flow-weighted "mixing-cup" temperature: slice the pipe, catch the slice, stir.

$$\dot m c_p T_m = \int_{A_c}\rho\,u\,c_p\,T\;dA_c, \qquad q''_s = h\,(T_s - T_m(x))$$

*Introduced:* [3.4](lessons/03-04-internal-forced-convection.md)

### Fully developed flow and entry length

Past the entry region the (dimensionless) profile stops changing with distance —
and the payoff is that $Nu$ becomes a **constant**.

$$x_{fd,h} \approx 0.05\,Re_D D, \qquad x_{fd,t} \approx 0.05\,Re_D\,Pr\,D \quad (\text{laminar})$$

*Introduced:* [3.4](lessons/03-04-internal-forced-convection.md)

### Grashof number

The buoyancy-driven stand-in for $Re$ when nothing is pushing the fluid: how hard
buoyancy drives the flow versus how hard viscosity fights it.

$$Gr = \frac{g\beta(T_s-T_\infty)L^3}{\nu^2}$$

*Introduced:* [3.5](lessons/03-05-natural-convection.md)

### Rayleigh number

The single dial of natural convection — it sets both how strong the buoyant flow is
and how well that flow moves heat.

$$Ra = Gr\,Pr = \frac{g\beta(T_s-T_\infty)L^3}{\nu\,\alpha}$$

Most free-convection correlations are just $\overline{Nu} = C\,Ra^{n}$.

*Introduced:* [3.5](lessons/03-05-natural-convection.md)

### Volumetric thermal expansion coefficient

The fractional drop in density per degree of warming — the property that turns a
temperature difference into a force.

$$\beta = -\frac{1}{\rho}\left(\frac{\partial\rho}{\partial T}\right)_p \quad [\mathrm{K^{-1}}], \qquad \beta = \frac{1}{T_f}\ \ \textbf{ideal gas only}$$

For liquids $\beta$ is tabulated (water near 330 K: about $5\times10^{-4}\ \mathrm{K^{-1}}$).

*Introduced:* [3.5](lessons/03-05-natural-convection.md)

### Excess temperature (wall superheat)

In boiling, the driving difference is not wall-to-bulk but wall-to-**saturation** —
the bulk liquid is already at $T_{sat}$.

$$\Delta T_e \equiv T_s - T_{sat}, \qquad q'' = h\,\Delta T_e$$

*Introduced:* [3.6](lessons/03-06-boiling-condensation.md)

### Critical heat flux

The peak of the boiling curve — the wall makes vapour so fast that a blanket of gas
seals it off from the liquid. About $1\ \mathrm{MW/m^2}$ for water at 1 atm near
$\Delta T_e\approx30\ \mathrm{K}$.

On a **flux-controlled** surface (heater, fuel rod) crossing it is a cliff, not a
slope: the wall jumps to the film-boiling branch hundreds of degrees hotter
(*burnout*, *boiling crisis*, or in flow boiling **DNB**). Reactors run with a
critical-heat-flux ratio above 1 for exactly this reason.

*Introduced:* [3.6](lessons/03-06-boiling-condensation.md)

### Blackbody

The ideal surface: it absorbs every photon at every wavelength and angle — and
thermodynamics then forces it to be the perfect *emitter* too, since a body that
absorbed without emitting would spontaneously outheat its surroundings.

No real surface at the same temperature can out-radiate it at any wavelength. It is
the ceiling every real surface is scored against.

*Introduced:* [4.1](lessons/04-01-blackbody-radiation.md)

### Emissivity

The fraction of blackbody emission a real surface actually delivers.

$$\varepsilon \equiv \frac{E}{E_b} = \frac{E}{\sigma T^4} \in [0,1] \quad\Longrightarrow\quad E = \varepsilon\sigma T^4$$

*Introduced:* [4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md)

### Irradiation and the absorbed–reflected–transmitted split

Every watt landing on a surface is absorbed, bounced, or passed through — an energy
balance on the surface, nothing more.

$$\alpha + \rho + \tau = 1, \qquad \text{opaque: } \tau=0 \Rightarrow \alpha+\rho=1$$

$G$ is the irradiation ($\mathrm{W/m^2}$); the absorbed part is $\alpha G$.

*Introduced:* [4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md)

### Kirchhoff's law

At each wavelength, a surface absorbs exactly as good a fraction as it emits.

$$\varepsilon_\lambda = \alpha_\lambda \quad \text{(always)}, \qquad \varepsilon = \alpha \quad \text{(gray surfaces only)}$$

The total equality needs the gray assumption. A **selective** surface obeys
Kirchhoff perfectly while having solar $\alpha_s = 0.9$ and infrared
$\varepsilon = 0.1$ — different bands, no contradiction. That mismatch is what
solar-absorber and cool-roof coatings sell.

*Introduced:* [4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md)

### Gray, diffuse surface

**Gray**: properties do not vary with wavelength over the bands that matter.
**Diffuse**: emission and reflection are the same in all directions. Together they
let one number $\varepsilon = \alpha$ describe a surface, which is what makes the
exchange network solvable. State the assumption every time you lean on it.

*Introduced:* [4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md)

### View factor

The fraction of radiation leaving surface $i$ that lands directly on surface $j$.
**Pure geometry** — shapes, sizes, orientations, separation. Temperature and
emissivity never enter.

$$\sum_{j=1}^{N}F_{ij}=1 \ \ (\text{enclosure}), \qquad A_iF_{ij}=A_jF_{ji} \ \ (\text{reciprocity})$$

Flat or convex: $F_{ii}=0$. Concave: $F_{ii}>0$.

*Introduced:* [4.3](lessons/04-03-view-factors-radiation-exchange.md)

### Radiosity

*All* radiation leaving a surface per unit area — emitted **plus** reflected. Think
in radiosities and infinite reflection bounces collapse into a resistor network.

$$J_i = \varepsilon_i E_{b,i} + \rho_i G_i \quad [\mathrm{W/m^2}]$$

*Introduced:* [4.3](lessons/04-03-view-factors-radiation-exchange.md)

### Log-mean temperature difference

The correct average of a stream-to-stream gap that decays *exponentially* down the
exchanger. Always smaller than the arithmetic mean of the two end gaps.

$$\Delta T_{lm} = \frac{\Delta T_1-\Delta T_2}{\ln(\Delta T_1/\Delta T_2)}, \qquad q = UA\,\Delta T_{lm}$$

If $\Delta T_1=\Delta T_2$ the formula is $0/0$; the limit is $\Delta T_{lm}=\Delta T_1$.

*Introduced:* [4.4](lessons/04-04-heat-exchangers-lmtd.md)

### Heat-capacity rate

How many watts it takes to move a stream one kelvin. The smaller-$C$ stream is the
weak link — it swings most and saturates first.

$$C = \dot m c_p \ [\mathrm{W/K}], \qquad C_r = \frac{C_{\min}}{C_{\max}} \in [0,1]$$

A boiling or condensing stream holds constant temperature, so its effective
$C\to\infty$ and $C_r\to0$.

*Introduced:* [4.4](lessons/04-04-heat-exchangers-lmtd.md), [4.5](lessons/04-05-heat-exchangers-effectiveness-ntu.md)

### Effectiveness

The fraction of the thermodynamic best you actually achieved. The best case is the
weak stream traversing the *entire inlet gap*.

$$\varepsilon = \frac{q}{q_{\max}}, \qquad q_{\max} = C_{\min}(T_{h,i}-T_{c,i}) \;\Longrightarrow\; q = \varepsilon\,C_{\min}(T_{h,i}-T_{c,i})$$

$q_{\max}$ uses **inlet** temperatures only — that is what breaks the rating loop.

*Introduced:* [4.5](lessons/04-05-heat-exchangers-effectiveness-ntu.md)

### NTU

The exchanger's dimensionless size: how fast it can move heat versus how fast the
weak stream carries it away.

$$NTU = \frac{UA}{C_{\min}}$$

*Introduced:* [4.5](lessons/04-05-heat-exchangers-effectiveness-ntu.md)

## Formulas and rules

### The three flux laws

| Mode | Flux law | Notes |
|---|---|---|
| Conduction | $q'' = -k\,dT/dx$ | needs a medium; $k$ is the *material's* |
| Convection | $q'' = h\,(T_s-T_\infty)$ | $h$ set by the flow; inside a duct use $T_m$ in place of $T_\infty$ |
| Radiation (emission) | $q'' = \varepsilon\sigma T_s^4$ | **absolute** kelvin, always |
| Radiation (net, small object in large surroundings) | $q'' = \varepsilon\sigma\,(T_s^4-T_{sur}^4)$ | not $\varepsilon\sigma(\Delta T)^4$ |

Rule of thumb for which dominates: conduction inside solids; convection at any
solid–fluid boundary with flow; radiation once things are hot (it grows as $T^4$) or
when there is no fluid at all.

*From* [1.1](lessons/01-01-three-modes-fouriers-law.md)

### Boundary conditions for the heat equation

| Kind | Physical meaning | Form (outward normal $n$) |
|---|---|---|
| Dirichlet (1st) | surface held at a known temperature | $T_s = T_{\text{given}}$ |
| Neumann (2nd) | known flux; **insulated** is the special case | $-k\,\partial T/\partial n = q''_{\text{given}}$; insulated $\Rightarrow \partial T/\partial n = 0$ |
| Robin (3rd) | surface convects to a fluid | $-k\,\partial T/\partial n = h(T_s-T_\infty)$ |

One initial condition in time, one condition per spatial boundary. Steady state kills
the $\partial T/\partial t$ term.

*From* [1.2](lessons/01-02-heat-equation.md)

### 1-D steady conduction solutions

| Geometry | Profile | Heat rate |
|---|---|---|
| Plane wall, no generation | linear in $x$ | $q = kA\,(T_1-T_2)/L$; both $q$ and $q''$ constant |
| Cylindrical shell (length $L$) | $T \propto \ln r$ | $q = \dfrac{2\pi kL(T_1-T_2)}{\ln(r_2/r_1)}$; $q$ constant, $q''\propto 1/r$ |
| Spherical shell | $T \propto 1/r$ | $q = \dfrac{4\pi k(T_1-T_2)}{1/r_1 - 1/r_2}$; $q$ constant, $q''\propto1/r^2$ |
| Slab, half-thickness $L$, uniform $\dot q$, both faces at $T_s$ | parabola, peak at centre | $T_0-T_s = \dfrac{\dot q L^2}{2k}$ |
| Solid cylinder radius $r_o$, uniform $\dot q$, surface $T_s$ | parabola, peak at axis | $T_0-T_s = \dfrac{\dot q\,r_o^2}{4k}$ |

The last row is the fuel-pin equation: centreline temperature against the melting
limit, and the reason fuel is drawn into thin pins ($T_0-T_s \propto r_o^2$).

*From* [1.3](lessons/01-03-1d-steady-conduction.md)

### Thermal-resistance network

Every element is a resistor; $q = \Delta T/R_{tot}$. Series resistances **add**;
parallel **conductances** add, $1/R_{tot}=\sum 1/R_i$.

| Element | $R$ (K/W) | Per unit area $R''$ ($\mathrm{m^2K/W}$) | Per unit length $R'$ ($\mathrm{m\cdot K/W}$) |
|---|---|---|---|
| Plane wall (area $A$, thickness $L$) | $\dfrac{L}{kA}$ | $\dfrac{L}{k}$ | — |
| Cylindrical shell (length $L$) | $\dfrac{\ln(r_2/r_1)}{2\pi kL}$ | — | $\dfrac{\ln(r_2/r_1)}{2\pi k}$ |
| Spherical shell | $\dfrac{1}{4\pi k}\left(\dfrac{1}{r_1}-\dfrac{1}{r_2}\right)$ | — | — |
| Convection at a surface | $\dfrac{1}{hA}$ | $\dfrac{1}{h}$ | $\dfrac{1}{2\pi r h}$ |
| Contact between two solids | $\dfrac{R''_{tc}}{A}$ | $R''_{tc}$ | — |
| Finned surface (array) | $\dfrac{1}{\eta_o h A_t}$ | — | — |
| Radiation to large surroundings | $\dfrac{1}{h_r A}$ | $\dfrac{1}{h_r}$ | $\dfrac{1}{2\pi r h_r}$ |

The **linearized radiation coefficient** puts radiation in the same circuit as
everything else (it is exact for a small gray object in large surroundings, but
depends on the temperatures you are solving for, so iterate if they move):

$$h_r = \varepsilon\sigma\,(T_s+T_{sur})(T_s^2+T_{sur}^2) \quad [\mathrm{W/(m^2K)}]$$

Radiation and convection off the same surface act **in parallel**:
$1/R = h A + h_r A$.

*From* [1.4](lessons/01-04-thermal-resistance-networks.md), radiation coefficient
from [1.1](lessons/01-01-three-modes-fouriers-law.md) and
[4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md)

### Fin results (straight rectangular fin)

$$\frac{\theta(x)}{\theta_b} = \frac{\cosh m(L-x)}{\cosh mL} \quad(\text{adiabatic tip}), \qquad q_f = \sqrt{hPkA_c}\ \theta_b\tanh mL$$

$$\eta_f = \frac{\tanh mL_c}{mL_c},\quad L_c = L+\tfrac{t}{2}, \qquad q_f = \eta_f\,hA_f\theta_b,\quad A_f = PL_c$$

$\tanh$ saturates: $mL=1\to0.76$, $mL=2.5\to0.987$, $mL=3\to0.995$. Past
$mL\approx2.5$ extra length is dead metal.

*From* [1.5](lessons/01-05-fins-extended-surfaces.md)

### Dimensionless groups — what each compares, and the criterion it feeds

| Group | Definition | Compares | Criterion it feeds |
|---|---|---|---|
| Reynolds $Re$ | $\dfrac{\rho u L}{\mu} = \dfrac{uL}{\nu}$ | inertia vs viscous force | pipe: laminar $Re_D<2300$, fully turbulent $\gtrsim10^4$; flat plate: transition $Re_x\approx5\times10^5$ |
| Prandtl $Pr$ | $\dfrac{\nu}{\alpha} = \dfrac{\mu c_p}{k}$ | momentum vs heat diffusivity (fluid property alone) | $\delta/\delta_t\approx Pr^{1/3}$; gases $\approx0.7$, water 2–7, oils $\gg1$, liquid metals $\ll1$ |
| Nusselt $Nu$ | $\dfrac{hL}{k_f}$ | convection vs conduction across the same fluid layer | the **output** of every correlation; floors $Nu_D\to2$ (sphere), $\to0.3$ (cylinder), $=3.66/4.36$ (laminar tube) |
| Biot $Bi$ | $\dfrac{hL_c}{k_s}$ | internal conduction resistance vs surface convection resistance | $Bi<0.1$ $\Rightarrow$ lumped capacitance valid |
| Fourier $Fo$ | $\dfrac{\alpha t}{L^2}$ | elapsed time vs diffusion time across the body | $Fo\lesssim0.05$ semi-infinite; $Fo>0.2$ one-term / Heisler valid |
| Grashof $Gr$ | $\dfrac{g\beta\Delta T L^3}{\nu^2}$ | buoyancy vs viscous force (the $Re$ of free convection) | $Gr/Re^2\gg1$ natural, $\ll1$ forced, $\sim1$ **mixed** |
| Rayleigh $Ra$ | $Gr\,Pr = \dfrac{g\beta\Delta T L^3}{\nu\alpha}$ | buoyant driving vs diffusive damping | vertical plate: laminar $10^4$–$10^9$, turbulent $>10^9$ |
| Stanton $St$ | $\dfrac{Nu}{Re\,Pr} = \dfrac{\bar h}{\rho u_\infty c_p}$ | wall heat flux vs the stream's thermal capacity | Chilton–Colburn analogy $C_f/2 = St\,Pr^{2/3}$, $0.6<Pr<60$ |

$Bi$ and $Nu$ are the same algebra with **different conductivities** — solid for
$Bi$ ("is the solid uniform?"), fluid for $Nu$ ("how good is the convection?").
Every group must use the **same** characteristic length the correlation was fitted
with: $D$ for a tube, $x$ or $L$ for a plate, height for a vertical plate,
$A_s/P$ for a horizontal plate.

*From* [2.1](lessons/02-01-lumped-capacitance-biot.md), [2.3](lessons/02-03-finite-bodies-heisler.md), [3.2](lessons/03-02-dimensionless-groups-re-pr-nu.md), [3.3](lessons/03-03-external-forced-convection.md), [3.5](lessons/03-05-natural-convection.md)

### Transient conduction — pick the model in one line

| Question | Answer | Model |
|---|---|---|
| $Bi = hL_c/k_s < 0.1$? | yes | **lumped**: $\theta/\theta_i = e^{-t/\tau}$ |
| otherwise, is $Fo = \alpha t/L^2 \lesssim 0.05$ (front hasn't reached the far side)? | yes | **semi-infinite**: erfc solutions |
| otherwise, is $Fo > 0.2$? | yes | **one-term / Heisler** |
| $0.05 < Fo < 0.2$ | — | seam: keep more series terms, or accept a few percent |

**Lumped.** $\tau = \dfrac{\rho V c_p}{hA_s}$, $t = -\tau\ln(\theta/\theta_i)$,
$Q(t) = \rho V c_p\theta_i\,(1-e^{-t/\tau})$, $Q_{\max} = \rho V c_p\theta_i$.
Gap after $1\tau$: 37%; after $3\tau$: 5%; after $5\tau$: gone.
$L_c = V/A_s$: sphere $D/6$, long cylinder $D/4$, slab cooled both faces $=$ half-thickness.

**Semi-infinite**, with $\eta = \dfrac{x}{2\sqrt{\alpha t}}$:

$$\text{constant }T_s:\quad \frac{T(x,t)-T_i}{T_s-T_i} = \operatorname{erfc}(\eta), \qquad q''_s(t) = \frac{k(T_s-T_i)}{\sqrt{\pi\alpha t}}$$

$$\text{constant }q''_s:\quad T(x,t)-T_i = \frac{2q''_s\sqrt{\alpha t/\pi}}{k}e^{-x^2/4\alpha t} - \frac{q''_s x}{k}\operatorname{erfc}(\eta)$$

$$\text{convection: }\ \frac{T(x,t)-T_i}{T_\infty-T_i} = \operatorname{erfc}(\eta) - \exp\!\left(\frac{hx}{k}+\frac{h^2\alpha t}{k^2}\right)\operatorname{erfc}\!\left(\eta+\frac{h\sqrt{\alpha t}}{k}\right)$$

At the surface the convective case reduces to
$\dfrac{T_s-T_i}{T_\infty-T_i} = 1 - e^{Bi^2Fo}\operatorname{erfc}(Bi\sqrt{Fo})$,
using $h\sqrt{\alpha t}/k = Bi\sqrt{Fo}$ — the bridge to the finite-body groups.

**One-term** ($Fo>0.2$): $\theta_0^* = C_1 e^{-\zeta_1^2 Fo}$, and the profile keeps
its shape, $\theta^* = \theta_0^*\times$ (shape below).

| Geometry | Length used in $Bi$, $Fo$ | Shape factor | Eigenvalue equation | Energy fraction $Q/Q_{\max}$ |
|---|---|---|---|---|
| Plane wall | half-thickness $L$ | $\cos(\zeta_1 x^*)$ | $\zeta\tan\zeta = Bi$ | $1-\dfrac{\sin\zeta_1}{\zeta_1}\theta_0^*$ |
| Infinite cylinder | radius $r_o$ | $J_0(\zeta_1 r^*)$ | $\zeta\,J_1(\zeta)/J_0(\zeta) = Bi$ | $1-\dfrac{2\theta_0^*}{\zeta_1}J_1(\zeta_1)$ |
| Sphere | radius $r_o$ | $\dfrac{\sin(\zeta_1 r^*)}{\zeta_1 r^*}$ | $1-\zeta\cot\zeta = Bi$ | $1-\dfrac{3\theta_0^*}{\zeta_1^3}\left(\sin\zeta_1-\zeta_1\cos\zeta_1\right)$ |

*From* [2.1](lessons/02-01-lumped-capacitance-biot.md), [2.2](lessons/02-02-semi-infinite-solid.md), [2.3](lessons/02-03-finite-bodies-heisler.md)

### One-term coefficients $\zeta_1$ (rad) and $C_1$

Functions of $Bi$ alone. The lessons quote the plane-wall column; the other two are
the same table (Incropera 5.1) for the geometries the eigenvalue table above names.

| $Bi$ | wall $\zeta_1$ | wall $C_1$ | cyl $\zeta_1$ | cyl $C_1$ | sphere $\zeta_1$ | sphere $C_1$ |
|---|---|---|---|---|---|---|
| 0.1 | 0.3111 | 1.0161 | 0.4417 | 1.0246 | 0.5423 | 1.0298 |
| 0.5 | 0.6533 | 1.0701 | 0.9408 | 1.1143 | 1.1656 | 1.1441 |
| 1.0 | 0.8603 | 1.1191 | 1.2558 | 1.2071 | 1.5708 | 1.2732 |
| 2.0 | 1.0769 | 1.1785 | 1.5995 | 1.3384 | 2.0288 | 1.4793 |
| 5.0 | 1.3138 | 1.2402 | 1.9898 | 1.5029 | 2.5704 | 1.7870 |
| 10.0 | 1.4289 | 1.2620 | 2.1795 | 1.5677 | 2.8363 | 1.9249 |
| $\infty$ | 1.5708 | 1.2732 | 2.4048 | 1.6021 | 3.1416 | 2.0000 |

As $Bi\to0$, $\zeta_1^2\to Bi$ and $C_1\to1$, so
$\theta_0^*\to e^{-Bi\,Fo} = e^{-ht/(\rho c_p L)}$ — the lumped exponential, recovered.

*From* [2.3](lessons/02-03-finite-bodies-heisler.md)

### Error function table

Needed by every semi-infinite problem and stated nowhere else in the course.
$\operatorname{erf}(\eta) = \frac{2}{\sqrt\pi}\int_0^\eta e^{-s^2}ds$ and
$\operatorname{erfc} = 1-\operatorname{erf}$. Linear interpolation is fine to three
decimals.

| $\eta$ | $\operatorname{erf}$ | $\operatorname{erfc}$ | | $\eta$ | $\operatorname{erf}$ | $\operatorname{erfc}$ |
|---|---|---|---|---|---|---|
| 0.0 | 0.0000 | 1.0000 | | 0.7 | 0.6778 | 0.3222 |
| 0.1 | 0.1125 | 0.8875 | | 0.8 | 0.7421 | 0.2579 |
| 0.2 | 0.2227 | 0.7773 | | 0.9 | 0.7969 | 0.2031 |
| 0.3 | 0.3286 | 0.6714 | | 1.0 | 0.8427 | 0.1573 |
| 0.4 | 0.4284 | 0.5716 | | 1.2 | 0.9103 | 0.0897 |
| 0.5 | 0.5205 | 0.4795 | | 1.4 | 0.9523 | 0.0477 |
| 0.6 | 0.6039 | 0.3961 | | 1.6 | 0.9763 | 0.0237 |
| — | — | — | | 2.0 | 0.9953 | 0.0047 |

*Used by* [2.2](lessons/02-02-semi-infinite-solid.md), [2.3](lessons/02-03-finite-bodies-heisler.md)

### External forced convection — correlations and ranges

Properties at the **film temperature** $T_f=(T_s+T_\infty)/2$ unless noted.

| Geometry | Correlation | Valid for |
|---|---|---|
| Flat plate, laminar, **local** | $Nu_x = 0.332\,Re_x^{1/2}Pr^{1/3}$ | $Re_x<5\times10^5$, $Pr\gtrsim0.6$ |
| Flat plate, laminar, **average** | $\overline{Nu}_L = 0.664\,Re_L^{1/2}Pr^{1/3}$ | $Re_L<5\times10^5$, $Pr\gtrsim0.6$ |
| Flat plate, turbulent, **local** | $Nu_x = 0.0296\,Re_x^{4/5}Pr^{1/3}$ | $5\times10^5\le Re_x\le10^8$, $0.6\le Pr\le60$ |
| Flat plate, **mixed** average | $\overline{Nu}_L = (0.037\,Re_L^{4/5}-871)Pr^{1/3}$ | $5\times10^5\le Re_L\le10^8$, transition at $Re_{x,c}=5\times10^5$ |
| Cylinder in cross-flow (Hilpert) | $\overline{Nu}_D = C\,Re_D^{m}Pr^{1/3}$ | $Pr\gtrsim0.7$; $C,m$ from the table below (each row is its own $Re_D$ range) |
| Cylinder (Churchill–Bernstein) | $\overline{Nu}_D = 0.3 + \dfrac{0.62\,Re_D^{1/2}Pr^{1/3}}{[1+(0.4/Pr)^{2/3}]^{1/4}}\left[1+\left(\dfrac{Re_D}{282{,}000}\right)^{5/8}\right]^{4/5}$ | all $Re_D$ with $Re_D\,Pr>0.2$ |
| Sphere (Whitaker) | $\overline{Nu}_D = 2 + (0.4\,Re_D^{1/2}+0.06\,Re_D^{2/3})Pr^{0.4}\left(\dfrac{\mu}{\mu_s}\right)^{1/4}$ | $3.5\le Re_D\le7.6\times10^4$, $0.71\le Pr\le380$, $1.0\le\mu/\mu_s\le3.2$; properties at $T_\infty$, $\mu_s$ at $T_s$ |

Hilpert constants (the $Re_D$ range **is** the validity range — do not extrapolate a row):

| $Re_D$ | $C$ | $m$ |
|---|---|---|
| 0.4 – 4 | 0.989 | 0.330 |
| 4 – 40 | 0.911 | 0.385 |
| 40 – 4 000 | 0.683 | 0.466 |
| 4 000 – 40 000 | 0.193 | 0.618 |
| 40 000 – 400 000 | 0.027 | 0.805 |

Transition point and the average-vs-local relation:

$$x_c = \frac{Re_{x,c}\,\nu}{u_\infty}\ \ (Re_{x,c}\approx5\times10^5), \qquad \bar h = \frac1L\int_0^L h_x\,dx = 2h_L \ \ (\text{laminar plate})$$

Chilton–Colburn: $C_f/2 = St\,Pr^{2/3}$ for $0.6<Pr<60$ — a drag measurement is a
heat-transfer measurement.

*From* [3.3](lessons/03-03-external-forced-convection.md)

### Internal forced convection — correlations and ranges

| Situation | $Nu_D$ | Valid for |
|---|---|---|
| Fully developed **laminar**, constant $T_s$ | $3.66$ | $Re_D<2300$, circular tube, fully developed |
| Fully developed **laminar**, constant $q''_s$ | $4.36$ | same |
| Fully developed **turbulent** (Dittus–Boelter) | $0.023\,Re_D^{4/5}Pr^{\,n}$ | $Re_D\gtrsim10^4$, $0.6\le Pr\le160$, $L/D\gtrsim10$, smooth tube, moderate $\Delta T$ |

$n = 0.4$ when the fluid is **heated** ($T_s>T_m$), $n = 0.3$ when **cooled**.
Properties at the mean bulk temperature. In laminar flow $Nu$ does not depend on
$Re$ or $Pr$ at all — you cannot improve $h$ by nudging the flow rate, only by
turbulence, a smaller $D$, or a higher-$k$ fluid.

Axial bookkeeping (the steady-flow energy balance in a heat-transfer uniform):

$$q = \dot m c_p\,(T_{m,o}-T_{m,i}), \qquad \dot m = \rho u_m \frac{\pi D^2}{4}$$

| Wall condition | $T_m(x)$ | Gap $T_s-T_m$ |
|---|---|---|
| constant $q''_s$ | linear: $T_{m,i} + \dfrac{q''_s P}{\dot m c_p}x$, $P = \pi D$ | constant once fully developed; $T_s$ runs parallel to $T_m$ |
| constant $T_s$ | exponential approach | shrinks: $\dfrac{T_s-T_{m,o}}{T_s-T_{m,i}} = \exp\!\left(-\dfrac{hA_s}{\dot m c_p}\right)$, $A_s=\pi DL$ |

Length to hit a target outlet at constant $T_s$:
$L = -\dfrac{\dot m c_p}{h\pi D}\ln\dfrac{T_s-T_{m,o}}{T_s-T_{m,i}}$.

*From* [3.4](lessons/03-04-internal-forced-convection.md)

### Natural convection — correlations and ranges

Every property at $T_f=(T_s+T_\infty)/2$, including $\beta$. Then
$\bar h = \overline{Nu}\,k/L$.

| Geometry | Characteristic length | Correlation | Valid for |
|---|---|---|---|
| Vertical plate | height $L$ | $\overline{Nu} = 0.59\,Ra^{1/4}$ | $10^4\le Ra\le10^9$ (laminar) |
| Vertical plate, all $Ra$ | height $L$ | $\overline{Nu} = \left\{0.825 + \dfrac{0.387\,Ra^{1/6}}{[1+(0.492/Pr)^{9/16}]^{8/27}}\right\}^2$ | Churchill–Chu, laminar **and** turbulent |
| Horizontal cylinder | diameter $D$ | $\overline{Nu}_D = 0.53\,Ra_D^{1/4}$ | $10^4\le Ra_D\le10^9$ |
| Horizontal plate, hot face up | $A_s/P$ | $\overline{Nu} = 0.54\,Ra^{1/4}$ | $10^4\le Ra\le10^7$ |

**Mixed convection referee:** $Gr/Re^2\ll1$ forced wins, $\gg1$ natural wins,
$\sim1$ both matter and you combine
$Nu^n = Nu_{\text{forced}}^n \pm Nu_{\text{nat}}^n$ (sign per whether buoyancy aids
or opposes).

*From* [3.5](lessons/03-05-natural-convection.md)

### Typical magnitudes of $h$ ($\mathrm{W/(m^2\cdot K)}$)

The sanity check the lessons lean on constantly but never tabulate. If your answer
is outside its band, you picked the wrong correlation.

| Situation | $h$ |
|---|---|
| Free convection, gases | 2 – 25 |
| Free convection, liquids | 50 – 1 000 |
| Forced convection, gases | 25 – 250 |
| Forced convection, liquids | 100 – 20 000 |
| Boiling / condensation | 2 500 – 100 000 |

*Used by* [3.2](lessons/03-02-dimensionless-groups-re-pr-nu.md), [3.4](lessons/03-04-internal-forced-convection.md), [3.5](lessons/03-05-natural-convection.md), [3.6](lessons/03-06-boiling-condensation.md)

### Boiling and condensation

$$q = \dot m\,h_{fg}, \qquad q'' = h\,\Delta T_e, \qquad \Delta T_e = T_s - T_{sat}$$

Water at 1 atm: $h_{fg}\approx2257\ \mathrm{kJ/kg}$ against
$c_p\approx4.18\ \mathrm{kJ/(kg\cdot K)}$ — vaporizing a kilogram costs about seven
times heating it from room temperature to boiling.

The pool-boiling curve (water at 1 atm, log–log $q''$ vs $\Delta T_e$):

| Regime | $\Delta T_e$ | What happens |
|---|---|---|
| Free convection | $\lesssim5\ \mathrm{K}$ | no bubbles; ordinary natural convection |
| Nucleate boiling | 5 – 30 K | bubbles at surface cavities (ONB), then columns and jets; $q''$ climbs steeply (Rohsenow correlation); $h\sim10^4$–$10^5$ |
| **Critical heat flux** | $\approx30\ \mathrm{K}$ | peak, $q''_{\max}\approx1\ \mathrm{MW/m^2}$; boiling crisis / DNB |
| Transition boiling | 30 – 120 K | patchy unstable film; $q''$ **falls** as $\Delta T_e$ rises |
| Film boiling | $\gtrsim120\ \mathrm{K}$ (past Leidenfrost) | stable insulating vapour blanket; $q''$ creeps back up, $T_s$ enormous |

**Filmwise condensation (Nusselt).** The liquid film *is* the resistance:

$$h_x = \frac{k_\ell}{\delta(x)}, \qquad \delta\propto x^{1/4} \Rightarrow h_x\propto x^{-1/4}, \qquad \bar h = \tfrac43 h_L \propto L^{-1/4}$$

Dropwise condensation gives roughly $10\times$ more but needs a non-wetting surface
that real hardware fouls away — design for filmwise.

*From* [3.6](lessons/03-06-boiling-condensation.md)

### Blackbody radiation laws

$$E_{b,\lambda}(\lambda,T) = \frac{C_1}{\lambda^5\left[\exp(C_2/\lambda T)-1\right]}, \quad C_1 = 3.742\times10^{8}\ \mathrm{W\cdot\mu m^4/m^2},\ \ C_2 = 1.439\times10^{4}\ \mu\mathrm{m\cdot K}$$

$$\lambda_{\max}T = 2898\ \mu\mathrm{m\cdot K} \quad(\text{Wien}), \qquad E_b = \sigma T^4, \quad \sigma = 5.67\times10^{-8}\ \mathrm{W/(m^2K^4)}$$

$E_{b,\lambda}$ is the curve's **height** at one wavelength; $E_b$ is the **area**
under the whole curve. Absolute kelvin, always. Double $T$ and emission jumps
$16\times$.

**Band fraction** $F_{0\to\lambda T}$ — the share of output below wavelength
$\lambda$, keyed by the single product $\lambda T$:

| $\lambda T\ (\mu\mathrm{m\cdot K})$ | $F_{0\to\lambda T}$ | | $\lambda T$ | $F_{0\to\lambda T}$ |
|---|---|---|---|---|
| 1 000 | 0.0003 | | 3 600 | 0.4036 |
| 1 400 | 0.0078 | | 4 000 | 0.4809 |
| 1 800 | 0.0393 | | 4 400 | 0.5488 |
| 2 200 | 0.1009 | | 5 200 | 0.6579 |
| 2 600 | 0.1831 | | 6 000 | 0.7378 |
| **2 898** (Wien peak) | **0.2501** | | 8 000 | 0.8563 |
| 3 000 | 0.2732 | | 10 000 | 0.9142 |
| 3 200 | 0.3181 | | 12 000 | 0.9451 |
| 3 400 | 0.3617 | | 16 000 | 0.9738 |

Only about a quarter of the energy has come out by the Wien peak — the long-wavelength
tail carries a lot. Band between two wavelengths:
$F_{\lambda_1T\to\lambda_2T} = F_{0\to\lambda_2T}-F_{0\to\lambda_1T}$.

*From* [4.1](lessons/04-01-blackbody-radiation.md)

### Radiation exchange network

Same circuit idea as conduction, with $\sigma T^4$ as the potential. Note the odd
units: these resistances are $\mathrm{m^{-2}}$, because the potential is a flux.

| Resistance | Formula | Penalty it charges |
|---|---|---|
| Surface (one per gray surface) | $\dfrac{1-\varepsilon_i}{\varepsilon_i A_i}$ | for $\varepsilon<1$; zero for a blackbody |
| Space (one per gap) | $\dfrac{1}{A_iF_{ij}} = \dfrac{1}{A_jF_{ji}}$ | for imperfect view |

$$q_i = \frac{E_{b,i}-J_i}{(1-\varepsilon_i)/(\varepsilon_i A_i)}, \qquad q_{ij} = \frac{J_i-J_j}{1/(A_iF_{ij})}, \qquad E_{b,i} = \sigma T_i^4$$

**Two-surface enclosure** (surface-R, space-R, surface-R in series):

$$q_{12} = \frac{\sigma\left(T_1^4-T_2^4\right)}{\dfrac{1-\varepsilon_1}{\varepsilon_1A_1}+\dfrac{1}{A_1F_{12}}+\dfrac{1-\varepsilon_2}{\varepsilon_2A_2}}$$

| Special case | $F_{12}$ | Result |
|---|---|---|
| Large parallel plates, area $A$ each | 1 | $q''_{12} = \dfrac{\sigma(T_1^4-T_2^4)}{1/\varepsilon_1+1/\varepsilon_2-1}$ |
| Small convex body 1 in large enclosure 2 | 1 | $q = \varepsilon_1\sigma A_1(T_1^4-T_2^4)$ — geometry drops out, so the room's area never enters |
| Long concentric cylinders / spheres | 1 | denominator $\dfrac{1}{\varepsilon_1}+\dfrac{1-\varepsilon_2}{\varepsilon_2}\dfrac{A_1}{A_2}$, times $A_1$ |

**Radiation shields.** A shield inserts **two** more surface resistances in series.
With every surface at the same $\varepsilon$, $N$ shields give
$q''_N/q''_0 = 1/(N+1)$. A single low-$\varepsilon$ foil beats many black ones,
because $(1-\varepsilon)/\varepsilon$ blows up as $\varepsilon\to0$ — that is
superinsulation.

*From* [4.3](lessons/04-03-view-factors-radiation-exchange.md)

### Heat exchangers — LMTD (sizing)

$$q = \dot m_h c_{p,h}(T_{h,i}-T_{h,o}) = \dot m_c c_{p,c}(T_{c,o}-T_{c,i}) = UA\,\Delta T_{lm}$$

$$\frac{1}{UA} = \frac{1}{h_iA_i} + \frac{\ln(r_o/r_i)}{2\pi kL} + \frac{1}{h_oA_o}$$

| End gap | Parallel flow | Counterflow |
|---|---|---|
| $\Delta T_1$ | $T_{h,i}-T_{c,i}$ (both inlets) | $T_{h,i}-T_{c,o}$ (hot-inlet end) |
| $\Delta T_2$ | $T_{h,o}-T_{c,o}$ (both outlets) | $T_{h,o}-T_{c,i}$ (hot-outlet end) |

Cross-flow and multipass: $q = UA\,F\,\Delta T_{lm,CF}$ — compute the log-mean as if
counterflow, then discount by the chart factor $F\le1$. A design with $F<0.75$ is
usually rejected as wasteful.

**Why counterflow.** Parallel flow caps the cold outlet at the mixed temperature
$T_\infty = \dfrac{C_hT_{h,i}+C_cT_{c,i}}{C_h+C_c}$ no matter how much area you buy,
and can never let the cold outlet exceed the hot outlet. Counterflow has no such cap
— largest $\Delta T_{lm}$, least area, and a temperature cross is legal.

*From* [4.4](lessons/04-04-heat-exchangers-lmtd.md)

### Heat exchangers — effectiveness–NTU (rating)

$$q = \varepsilon\,C_{\min}(T_{h,i}-T_{c,i}), \qquad NTU = \frac{UA}{C_{\min}}, \qquad C_r = \frac{C_{\min}}{C_{\max}}$$

$$\text{counterflow:}\quad \varepsilon = \frac{1-e^{-NTU(1-C_r)}}{1-C_r\,e^{-NTU(1-C_r)}}$$

| Limit | Meaning | $\varepsilon$ |
|---|---|---|
| $C_r = 0$ | one stream phase-changing (boiler, condenser) — flow direction stops mattering | $1-e^{-NTU}$ (**any** arrangement) |
| $C_r = 1$ | perfectly matched streams — the hardest case, saturates slowest | $\dfrac{NTU}{1+NTU}$ (counterflow) |

Then the outlets fall out of $q = C_h(T_{h,i}-T_{h,o}) = C_c(T_{c,o}-T_{c,i})$.
Past $NTU\approx3$–5 the curve flattens: more area barely helps.

| Situation | Knowns | Unknowns | Method |
|---|---|---|---|
| **Sizing** (design) | both inlets **and** both outlets | $A$ or $UA$ | **LMTD** — direct |
| **Rating** (performance) | both inlets, $UA$, flows | outlets, $q$ | **ε–NTU** — direct |

The two are the same physics: on a counterflow unit
$\ln(\Delta T_1/\Delta T_2) = NTU(1-C_r)$ exactly.

*From* [4.4](lessons/04-04-heat-exchangers-lmtd.md), [4.5](lessons/04-05-heat-exchangers-effectiveness-ntu.md)

### Representative property values

Order-of-magnitude anchors the worked examples use; a real problem needs a table at
the right temperature.

| Material (≈300 K) | $k$ $\mathrm{W/(m\cdot K)}$ | $\alpha$ $\mathrm{m^2/s}$ |
|---|---|---|
| Copper | 400 | $1.17\times10^{-4}$ |
| Aluminum | 237 | $9.7\times10^{-5}$ |
| Carbon / stainless steel | 15 – 50 | $\sim(0.4$–$1.9)\times10^{-5}$ |
| Firebrick | 1.4 | — |
| Concrete | 1.4 | $5.7\times10^{-7}$ |
| Water (liquid) | 0.60 | $1.4\times10^{-7}$ |
| Oak | 0.17 | $1.3\times10^{-7}$ |
| Glass wool / foam insulation | 0.04 | — |
| Air (still) | 0.026 | $2.2\times10^{-5}$ |

Metals conduct well because free electrons carry heat as well as charge; gases
conduct poorly because their molecules are far apart — which is why trapped-air
insulation works. Note that **air's $\alpha$ exceeds water's** even though water's
$k$ is far larger: $\alpha$ is conduction relative to storage.

*From* [1.1](lessons/01-01-three-modes-fouriers-law.md), [1.2](lessons/01-02-heat-equation.md)

## Assumed, not taught here

Tier 1 course: it leans on these without deriving them.

| Fact | Where it's taught |
|---|---|
| Steady-flow energy balance $\dot q = \dot m c_p\,\Delta T$ (every convection and exchanger duty) | [engineering-thermodynamics 2.3](../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md), [2.5](../engineering-thermodynamics/lessons/02-05-steady-flow-devices-no-work.md) |
| Closed-system first law $dU/dt$ (the lumped-capacitance balance) | [engineering-thermodynamics 2.1](../engineering-thermodynamics/lessons/02-01-first-law-closed-systems.md) |
| Saturation temperature, latent heat $h_{fg}$, constant-$T$ phase change | [engineering-thermodynamics 1.2](../engineering-thermodynamics/lessons/01-02-phase-behavior-pure-substance.md) |
| Ideal-gas law $\rho = p/RT$ (used to get $\beta = 1/T_f$) | [engineering-thermodynamics 1.4](../engineering-thermodynamics/lessons/01-04-ideal-gas-model-limits.md) |
| Second law as the ban on spontaneous self-heating (Kirchhoff, blackbody argument) | [engineering-thermodynamics 3.1](../engineering-thermodynamics/lessons/03-01-second-law-carnot-limit.md) |
| $y''-m^2y=0$ and its $\cosh/\sinh$ solutions (the fin equation) | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| First-order decay $\dot\theta = -\theta/\tau$ (Newton cooling, lumped capacitance) | [ode-refresher 1.3](../ode-refresher/lessons/01-03-first-order-models.md) |
| Separation of variables for PDEs (the finite-body eigenvalue problem) | [ode-refresher 4.2](../ode-refresher/lessons/04-02-intro-pdes-separation.md) |
| Fourier series and orthogonal projection (the $C_n$ behind the Heisler solution) | [fourier-analysis 1.1](../fourier-analysis/lessons/01-01-periodic-functions-fourier-coefficients.md), [1.2](../fourier-analysis/lessons/01-02-orthogonal-systems-projection.md), [4.3](../fourier-analysis/lessons/04-03-heat-wave-equations.md) |
| Bessel functions $J_0$, $J_1$ (the cylinder eigenvalue equation and shape factor) | [mathematical-methods-physics 3.3](../mathematical-methods-physics/lessons/03-03-bessel-functions.md) |
| Gradient and divergence (the vector form of Fourier's law and the heat equation) | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) |
| Viscosity $\mu$, $\nu$, and the no-slip condition | [fluid-dynamics 1.4](../fluid-dynamics/lessons/01-04-stress-tensor.md), [3.4](../fluid-dynamics/lessons/03-04-boundary-layers.md) |
| Reynolds number, laminar–turbulent transition, dynamic similarity | [fluid-dynamics 3.1](../fluid-dynamics/lessons/03-01-reynolds-number.md) |
| Boundary-layer growth $\delta\sim\sqrt{x}$ and skin friction $C_f$ | [fluid-dynamics 3.4](../fluid-dynamics/lessons/03-04-boundary-layers.md) |
| Ohm's law and series/parallel resistance (the whole network analogy) | [circuits 1.2](../circuits/lessons/01-02-ohms-law-equivalent-resistance.md) |
| RC discharge $e^{-t/RC}$ (the structural twin of $\tau = R_tC_t$) | [circuits 3.2](../circuits/lessons/03-02-first-order-rc-rl-transients.md) |
| Fick's laws of mass diffusion (the identical erfc mathematics) | [materials-science 2.4](../materials-science/lessons/02-04-diffusion-i-ficks-first-law.md), [2.5](../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md) |
| Where the Planck distribution comes from (photon statistics) | [stat-mech 4.3](../stat-mech/lessons/04-03-photon-gas-blackbody.md) |
| $\operatorname{erf}$ / $\operatorname{erfc}$ values, and $\zeta_1$, $C_1$, $F_{0\to\lambda T}$ tables | no course derives them — **tabulated on this card above** |

## Pitfalls

### Units and temperature scales

- A temperature *difference* is the same in K or °C — but radiation needs **absolute kelvin**, because it is $T^4$, not $\Delta T$. *([1.1](lessons/01-01-three-modes-fouriers-law.md), [4.1](lessons/04-01-blackbody-radiation.md), [4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md))*
- $T_s^4-T_{sur}^4 \ne (T_s-T_{sur})^4$, and the same 100 K gap radiates far more at 700 K than at 400 K. *([1.1](lessons/01-01-three-modes-fouriers-law.md), [4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md))*
- Never mix $R$ (K/W), $R''$ ($\mathrm{m^2K/W}$), and $R'$ ($\mathrm{m\cdot K/W}$) in one sum — pick one and stay there. *([1.4](lessons/01-04-thermal-resistance-networks.md))*

### Conduction and resistance networks

- Keep the minus sign in Fourier's law; it is what sends heat toward cold. It only disappears once you have already written the hot temperature first. *([1.1](lessons/01-01-three-modes-fouriers-law.md))*
- $k$ leaves the divergence **only** if it is uniform — $\nabla\!\cdot(k\nabla T) = k\nabla^2T$ is not free. *([1.2](lessons/01-02-heat-equation.md))*
- $\alpha$ is not "how good a conductor" — it is conduction relative to storage. $k$ sets the steady *rate*, $\alpha$ sets the *speed* of transients. *([1.2](lessons/01-02-heat-equation.md))*
- In a pipe or sphere only the **total rate** $q$ is constant; the flux falls as the area grows. Only the plane wall has constant $q''$. *([1.3](lessons/01-03-1d-steady-conduction.md))*
- A pipe-wall profile is a **logarithm**, not a line — it only looks straight when the wall is thin. *([1.3](lessons/01-03-1d-steady-conduction.md))*
- With symmetric cooling and internal generation, the hottest point is the **centre** (where $dT/dx=0$), not the surface. *([1.3](lessons/01-03-1d-steady-conduction.md))*
- The layer with the biggest temperature drop is the biggest *resistor*, not the biggest heat carrier — in series every layer passes the identical $q$. *([1.4](lessons/01-04-thermal-resistance-networks.md))*
- Insulation does not always help: below $r_{cr}=k/h$ the first millimetres *raise* the loss. *([1.4](lessons/01-04-thermal-resistance-networks.md))*

### Fins

- Longer is not better: $q_f\propto\tanh mL$ saturates, so past $mL\approx2.5$ the tip is dead cold surface and wasted metal. *([1.5](lessons/01-05-fins-extended-surfaces.md))*
- Efficiency and effectiveness answer different questions — a rice-grain fin can have $\eta_f = 0.99$ and be useless. You want $\eta_f$ high **and** $\varepsilon_f>1$. *([1.5](lessons/01-05-fins-extended-surfaces.md))*
- A fin on a high-$h$, low-$k$ surface can be an insulating plug ($\varepsilon_f\le1$). Fin the low-$h$ side. *([1.5](lessons/01-05-fins-extended-surfaces.md))*

### Transient conduction

- $Bi$ uses the **solid's** $k$; $Nu$ uses the **fluid's**. Same algebra, opposite question. *([2.1](lessons/02-01-lumped-capacitance-biot.md), [3.2](lessons/03-02-dimensionless-groups-re-pr-nu.md))*
- Cranking up $h$ **hurts** lumped capacitance — a bigger $Bi$ means worse internal gradients. Vigorous quenching is exactly when the model breaks. *([2.1](lessons/02-01-lumped-capacitance-biot.md))*
- Characteristic length is $V/A_s$ for the lumped $Bi$ (sphere $D/6$), but **half-thickness or $r_o$** for the one-term / Heisler framework — and $Bi$ and $Fo$ must use the same one. *([2.1](lessons/02-01-lumped-capacitance-biot.md), [2.3](lessons/02-03-finite-bodies-heisler.md))*
- Penetration grows as $\sqrt{\alpha t}$, so doubling the depth costs four times the wait — and the surface flux decays as $1/\sqrt t$, not $1/t$. *([2.2](lessons/02-02-semi-infinite-solid.md))*
- The semi-infinite formula dies once the far side responds ($Fo$ no longer small); the one-term formula is invalid below $Fo=0.2$. They meet near $Fo\approx0.2$. *([2.2](lessons/02-02-semi-infinite-solid.md), [2.3](lessons/02-03-finite-bodies-heisler.md))*
- Pick a reference and hold it: $\dfrac{T-T_i}{T_s-T_i} = \operatorname{erfc}(\eta)$ but $\dfrac{T-T_s}{T_i-T_s} = \operatorname{erf}(\eta)$. *([2.2](lessons/02-02-semi-infinite-solid.md))*
- $C_1>1$ is not "hotter than the start" — it is the extrapolated intercept of a line only meant for $Fo>0.2$. *([2.3](lessons/02-03-finite-bodies-heisler.md))*

### Convection

- $h$ is not a material property. Change the fluid, the speed, or the geometry and $h$ changes with the same solid. The only conductivity in its definition is the **fluid's**. *([3.1](lessons/03-01-convection-coefficient-boundary-layers.md))*
- A **thicker** boundary layer means *less* heat transfer — it is an insulating blanket with a gentle wall gradient. Turbulence helps because it thins the wall sublayer. *([3.1](lessons/03-01-convection-coefficient-boundary-layers.md))*
- Local $h_x$ is not average $\bar h$: the $0.332$ correlation is local, the $0.664$ one is the plate average (exactly twice the trailing-edge local value). *([3.1](lessons/03-01-convection-coefficient-boundary-layers.md), [3.3](lessons/03-03-external-forced-convection.md))*
- Bigger $h$ does not always mean bigger $Nu$ — $Nu$ measures convection relative to *that fluid's own* conduction. *([3.2](lessons/03-02-dimensionless-groups-re-pr-nu.md))*
- One characteristic length per problem, and it must be the one the correlation was fitted with. Mixing lengths silently corrupts $Re$, $Nu$, and the answer. *([3.2](lessons/03-02-dimensionless-groups-re-pr-nu.md))*
- Compute $Re$ **before** choosing a correlation; the mixed-plate $-871$ term is flat wrong below $Re_L = 5\times10^5$. *([3.3](lessons/03-03-external-forced-convection.md))*
- Properties go at the **film temperature** for external forced and natural convection (exception: Whitaker's sphere, at $T_\infty$ with $\mu_s$ at the wall). Getting this wrong shifts $\nu$ by 20–30 percent. *([3.3](lessons/03-03-external-forced-convection.md), [3.5](lessons/03-05-natural-convection.md))*
- Inside a duct there is no $T_\infty$ — Newton's law reads $q''=h(T_s-T_m(x))$, and $T_m$ climbs as the fluid absorbs heat. *([3.4](lessons/03-04-internal-forced-convection.md))*
- Fully developed **laminar** $Nu$ is a constant (3.66 or 4.36) — no $Re$, no $Pr$. The wall condition, not the flow rate, picks which. *([3.4](lessons/03-04-internal-forced-convection.md))*
- Dittus–Boelter's exponent flips with direction of heat flow: $n=0.4$ heating, $n=0.3$ cooling. *([3.4](lessons/03-04-internal-forced-convection.md))*
- Constant $q''$ gives a linear $T_m(x)$ with a constant wall gap; constant $T_s$ gives an exponential approach with a shrinking gap. The exponential formula is for the isothermal wall only. *([3.4](lessons/03-04-internal-forced-convection.md))*
- $\beta = 1/T_f$ is **ideal gas only** — for water look it up, or you overstate buoyancy several-fold. And do not forget $\beta$ at all; it is the engine of the problem. *([3.5](lessons/03-05-natural-convection.md))*
- In free convection the velocity goes to **zero** far from the wall, not to a plateau — the profile has an interior peak. *([3.5](lessons/03-05-natural-convection.md))*
- Do not drop buoyancy just because a fan is on; check $Gr/Re^2$ first. *([3.5](lessons/03-05-natural-convection.md))*
- Boiling delivers a megawatt per square metre at a superheat of only ~30 K — huge flux for a *small* $\Delta T_e$, not a big one. *([3.6](lessons/03-06-boiling-condensation.md))*
- Hotter is not always more: past CHF, $q''$ *falls* with rising $\Delta T_e$ (transition boiling), and film boiling is an insulating vapour blanket, not vigorous boiling. *([3.6](lessons/03-06-boiling-condensation.md))*

### Radiation

- "Black" means it absorbs everything, which forces it to be the best possible *emitter* — the ceiling, not the floor. *([4.1](lessons/04-01-blackbody-radiation.md))*
- Wien is an inverse: hotter means a **shorter** peak wavelength. *([4.1](lessons/04-01-blackbody-radiation.md))*
- The spectral height $E_{b,\lambda}$ (per micrometre) and the total $E_b$ (whole area) are different quantities; only the total obeys the clean $T^4$ law. *([4.1](lessons/04-01-blackbody-radiation.md))*
- Kirchhoff binds $\varepsilon_\lambda = \alpha_\lambda$ **per wavelength**; the total $\varepsilon = \alpha$ needs the gray assumption, and selective coatings live in the gap. *([4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md))*
- "Shiny" is not automatically "cool" — ask *shiny in which band*: staying cool in sunlight wants low $\alpha_s$ **and** high infrared $\varepsilon$. *([4.2](lessons/04-02-real-surfaces-emissivity-kirchhoff.md))*
- View factors are pure geometry — temperature and emissivity never enter them. *([4.3](lessons/04-03-view-factors-radiation-exchange.md))*
- $F_{ii}=0$ only for flat or convex surfaces; a concave surface sees itself and the term must stay in $\sum_j F_{ij}=1$. *([4.3](lessons/04-03-view-factors-radiation-exchange.md))*
- More shields is not the only lever: one polished low-$\varepsilon$ foil beats dozens of black ones, because $(1-\varepsilon)/\varepsilon$ explodes as $\varepsilon\to0$. *([4.3](lessons/04-03-view-factors-radiation-exchange.md))*

### Heat exchangers

- The end gaps average **log**-mean, not arithmetic — the arithmetic mean overstates the driving gap and undersizes the hardware. *([4.4](lessons/04-04-heat-exchangers-lmtd.md))*
- In counterflow the hot inlet shares an end with the cold **outlet**: $\Delta T_1 = T_{h,i}-T_{c,o}$. Draw the box and read the gaps off the ends. A negative end gap means the arrangement cannot do that duty. *([4.4](lessons/04-04-heat-exchangers-lmtd.md))*
- Cross-flow and multipass units need the $F$ factor; skipping it overestimates performance. *([4.4](lessons/04-04-heat-exchangers-lmtd.md))*
- $q_{\max}$ uses **inlet** temperatures and $C_{\min}$ — never the outlets, never $C_{\max}$ (that would push the weak stream past the far inlet). *([4.5](lessons/04-05-heat-exchangers-effectiveness-ntu.md))*
- The $\varepsilon = f(NTU,C_r)$ relation is arrangement-specific; only $C_r=0$ giving $\varepsilon = 1-e^{-NTU}$ is universal. *([4.5](lessons/04-05-heat-exchangers-effectiveness-ntu.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links.
- **No prose dollar signs** — write "10 dollars", not the symbol (see CLAUDE.md).
- Length is not capped the way a lesson's is: this is a lookup surface, not a
  read-through. But every line still has to earn its place.

# Geophysics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The machinery of this course is a small set of physical laws — the elastic wave
equation, potential theory, the diffusion equation and Maxwell's equations —
applied to one object. What makes it hard is not the physics but the bookkeeping:
which correction has already been applied, which quantity is per unit length and
which per unit area, whether a rate is a half-rate or a full rate, and which of
five conventions for "thickness of the lithosphere" is in play. That is what this
card is for.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\sigma_{ij}$ | stress tensor — force per unit area on the plane whose normal is $j$, in direction $i$; **tension positive** | [1.1](lessons/01-01-the-elastic-earth.md) |
| $e_{ij}$ | infinitesimal strain tensor — relative displacement of neighbouring points, rotation removed | [1.1](lessons/01-01-the-elastic-earth.md) |
| $\theta$ | dilatation, $e_{kk} = \nabla\cdot\mathbf u$ — fractional volume change | [1.1](lessons/01-01-the-elastic-earth.md) |
| $\lambda,\mu$ | Lamé parameters; $\mu$ is the shear modulus (rigidity) | [1.1](lessons/01-01-the-elastic-earth.md) |
| $K$ | bulk modulus — resistance to volume change | [1.1](lessons/01-01-the-elastic-earth.md) |
| $\nu$ | Poisson's ratio — sideways bulge per unit axial squeeze | [1.1](lessons/01-01-the-elastic-earth.md) |
| $v_p, v_s$ (also $\alpha,\beta$) | P and S wave speeds | [1.2](lessons/01-02-seismic-wave-zoo.md) |
| $c_R$ | Rayleigh-wave speed, $0.9194\,v_s$ in a Poisson half-space | [1.2](lessons/01-02-seismic-wave-zoo.md) |
| $U$ vs $c$ | group velocity (energy, what you pick) vs phase velocity (a single wavefront) | [1.2](lessons/01-02-seismic-wave-zoo.md) |
| $p$ | ray parameter — $\sin i/v$ (flat) or $r\sin i/v$ (spherical); conserved along a ray | [1.3](lessons/01-03-wave-equation-ray-theory.md) |
| $i$ | angle of incidence, measured **from the vertical** | [1.3](lessons/01-03-wave-equation-ray-theory.md) |
| $\Delta$ | epicentral distance, in degrees or radians of arc | [1.4](lessons/01-04-travel-time-curves-deep-earth.md) |
| $\delta t$ | travel-time residual (observed minus predicted); positive = late | [1.5](lessons/01-05-seismic-tomography.md) |
| $\mathbf G, \mathbf m, \mathbf d$ | design matrix, model vector, data vector | [1.5](lessons/01-05-seismic-tomography.md), [6.1](lessons/06-01-the-linear-inverse-problem.md) |
| $M_0$ | seismic moment, $\mu A\bar d$, in N·m | [1.6](lessons/01-06-earthquake-sources-magnitude.md) |
| $M_w$ | moment magnitude | [1.6](lessons/01-06-earthquake-sources-magnitude.md) |
| $\phi,\delta,\lambda_r$ | fault strike, dip, rake | [1.6](lessons/01-06-earthquake-sources-magnitude.md) |
| $\Delta\sigma$ | static stress drop — the *change* in stress, not the stress | [1.7](lessons/01-07-rupture-physics-source-scaling.md) |
| $v_r$ | rupture velocity, typically $0.7$–$0.9\,v_s$ | [1.7](lessons/01-07-rupture-physics-source-scaling.md) |
| $f_c$ | corner frequency, $\sim1/T_{\text{dur}}$ | [1.7](lessons/01-07-rupture-physics-source-scaling.md) |
| $J_2$ | dynamical form factor, $(C-A)/Ma^2$ — the gravitational quadrupole | [2.1](lessons/02-01-figure-of-the-earth.md) |
| $f$ | flattening, $(a-c)/a$ | [2.1](lessons/02-01-figure-of-the-earth.md) |
| $m$ | rotation parameter, $\omega^2a/\gamma_e$ | [2.1](lessons/02-01-figure-of-the-earth.md) |
| $\gamma(\phi)$ | normal gravity on the reference ellipsoid at geodetic latitude $\phi$ | [2.1](lessons/02-01-figure-of-the-earth.md) |
| mGal | milligal, $10^{-5}\ \mathrm{m\,s^{-2}}$; Earth gravity is about 981,000 mGal | [2.2](lessons/02-02-gravity-anomalies-reductions.md) |
| $\Delta g_{FA}$, $\Delta g_B$ | free-air and Bouguer gravity anomalies | [2.2](lessons/02-02-gravity-anomalies-reductions.md) |
| $TC$ | terrain correction — **always positive** | [2.2](lessons/02-02-gravity-anomalies-reductions.md) |
| $r$ | Airy crustal root depth | [2.3](lessons/02-03-isostasy-airy-pratt.md) |
| $D$ (isostasy) | depth of compensation | [2.3](lessons/02-03-isostasy-airy-pratt.md) |
| $N$ | geoid height — separation of geoid from ellipsoid | [2.4](lessons/02-04-the-geoid.md) |
| $T$ (geodesy) | disturbing potential, $W-U$ | [2.4](lessons/02-04-the-geoid.md) |
| $h, H$ | ellipsoidal height (GNSS) and orthometric height (above sea level); $H = h-N$ | [2.4](lessons/02-04-the-geoid.md) |
| $\ell$ | spherical-harmonic degree; wavelength $\approx 2\pi R/\ell$ | [2.4](lessons/02-04-the-geoid.md), [3.1](lessons/03-01-the-main-field.md) |
| $h_2,k_2,l_2$ | Love numbers — radial, potential and horizontal tidal response | [2.5](lessons/02-05-solid-earth-tides-rotation.md) |
| $\delta$ (gravimetry) | gravimetric factor, $1+h_2-\tfrac32k_2 \approx 1.16$ | [2.5](lessons/02-05-solid-earth-tides-rotation.md) |
| $C, A$ | polar and equatorial moments of inertia | [2.5](lessons/02-05-solid-earth-tides-rotation.md), [5.1](lessons/05-01-free-oscillations-earth-density.md) |
| $D$ (flexure) | flexural rigidity, $ET_e^3/[12(1-\nu^2)]$ | [2.6](lessons/02-06-flexure-of-the-lithosphere.md) |
| $T_e$ | effective elastic thickness | [2.6](lessons/02-06-flexure-of-the-lithosphere.md) |
| $\alpha$ (flexure) | flexural parameter, $(4D/\Delta\rho g)^{1/4}$ | [2.6](lessons/02-06-flexure-of-the-lithosphere.md) |
| $w$ | plate deflection, positive downward | [2.6](lessons/02-06-flexure-of-the-lithosphere.md) |
| $V, D$ (faults) | far-field slip rate and locking depth | [2.7](lessons/02-07-space-geodesy.md) |
| $X,Y,Z,H,F,D,I$ | geomagnetic elements: north, east, down, horizontal, total, declination, inclination | [3.1](lessons/03-01-the-main-field.md) |
| $g_\ell^m, h_\ell^m$ | internal Gauss coefficients (IGRF) | [3.1](lessons/03-01-the-main-field.md) |
| $\eta$ (magnetic) | magnetic diffusivity, $1/(\mu_0\sigma)$ | [3.2](lessons/03-02-the-geodynamo.md) |
| $R_m$ | magnetic Reynolds number, $uL/\eta$ | [3.2](lessons/03-02-the-geodynamo.md) |
| $\Lambda$ | Elsasser number, $\sigma B^2/(2\rho\Omega)$ | [3.2](lessons/03-02-the-geodynamo.md) |
| $\lambda$ (palaeomag) | palaeolatitude | [3.3](lessons/03-03-paleomagnetism.md) |
| $Q$ (rock magnetism) | Königsberger ratio, remanent over induced magnetization | [3.4](lessons/03-04-magnetic-anomalies-reversals.md) |
| $\boldsymbol\omega$ | plate rotation vector; direction is the Euler pole, magnitude the rate | [3.5](lessons/03-05-plate-kinematics-euler-poles.md) |
| $q$ | heat flux, W/m²; often quoted in mW/m² | [4.1](lessons/04-01-conduction-and-the-geotherm.md) |
| $A$ (heat) | volumetric radiogenic heat production, W/m³ | [4.1](lessons/04-01-conduction-and-the-geotherm.md) |
| $q_r$ | reduced heat flow — heat arriving from below the radiogenic layer | [4.1](lessons/04-01-conduction-and-the-geotherm.md) |
| $k$ | thermal conductivity, W m⁻¹ K⁻¹ | [4.1](lessons/04-01-conduction-and-the-geotherm.md) |
| $\kappa$ | thermal diffusivity, $k/(\rho c_p)$, m²/s | [4.1](lessons/04-01-conduction-and-the-geotherm.md) |
| Ur | Urey ratio, radiogenic production over total heat loss | [4.2](lessons/04-02-radiogenic-heat-budget.md) |
| $y_T$ | thermal thickness of the plate, $2\sqrt{\kappa t}$ | [4.3](lessons/04-03-cooling-oceanic-lithosphere.md) |
| $Ra$ | Rayleigh number | [4.4](lessons/04-04-mantle-convection-rayleigh-number.md) |
| Nu | Nusselt number — convective over conductive heat transport | [4.4](lessons/04-04-mantle-convection-rayleigh-number.md) |
| $F_{RP}, F_{SP}, F_{DF}$ | ridge push, slab pull, basal drag — **per unit length of boundary**, N/m | [4.5](lessons/04-05-plate-driving-forces.md) |
| $\eta$ (rheology) | dynamic viscosity, Pa·s; $\nu = \eta/\rho$ is kinematic, m²/s | [4.6](lessons/04-06-mantle-rheology-post-glacial-rebound.md) |
| $\tau_M$ | Maxwell time, $\eta/\mu$ | [4.6](lessons/04-06-mantle-rheology-post-glacial-rebound.md) |
| ${}_nS_\ell$, ${}_nT_\ell$ | spheroidal and toroidal free oscillations | [5.1](lessons/05-01-free-oscillations-earth-density.md) |
| $\Phi$ | seismic parameter, $v_p^2-\tfrac43v_s^2 = K/\rho$ | [5.1](lessons/05-01-free-oscillations-earth-density.md) |
| $\eta_B$ | Bullen parameter — observed density gradient over the Adams–Williamson prediction | [5.1](lessons/05-01-free-oscillations-earth-density.md) |
| $\gamma$ (phase) | Clapeyron slope, $dP/dT$, MPa/K | [5.2](lessons/05-02-mineral-physics-transition-zone.md) |
| $Q_\mu, Q_\kappa$ | shear and bulk quality factors | [5.3](lessons/05-03-attenuation-anelasticity.md) |
| $t^*$ | attenuation operator, $\int dt/Q$ along a ray | [5.3](lessons/05-03-attenuation-anelasticity.md) |
| $\xi$ | radial anisotropy, $(v_{SH}/v_{SV})^2$ | [5.5](lessons/05-05-anisotropy-mantle-flow.md) |
| $\delta t$ (splitting) | shear-wave splitting delay time | [5.5](lessons/05-05-anisotropy-mantle-flow.md) |
| $\mathbf R$ | resolution matrix, $\mathbf G^{-g}\mathbf G$ | [6.1](lessons/06-01-the-linear-inverse-problem.md) |
| $\varepsilon$ | damping parameter in damped least squares | [6.1](lessons/06-01-the-linear-inverse-problem.md) |
| $Z$ (seismics) | acoustic impedance, $\rho v$ | [6.2](lessons/06-02-reflection-seismics.md) |
| $R$ (seismics) | reflection coefficient | [6.2](lessons/06-02-reflection-seismics.md) |
| $t_0$ | zero-offset two-way travel time | [6.2](lessons/06-02-reflection-seismics.md) |
| $\rho_a$ | apparent resistivity | [6.3](lessons/06-03-electrical-electromagnetic-methods.md) |
| $\delta$ (EM) | electromagnetic skin depth | [6.3](lessons/06-03-electrical-electromagnetic-methods.md) |

**Symbol collisions to watch.** $\alpha$ is the P-wave speed in Module 1, thermal
expansivity in Module 4, and the flexural parameter in [2.6](lessons/02-06-flexure-of-the-lithosphere.md).
$\eta$ is magnetic diffusivity in [3.2](lessons/03-02-the-geodynamo.md) and
viscosity in [4.6](lessons/04-06-mantle-rheology-post-glacial-rebound.md).
$D$ is the depth of compensation, the flexural rigidity, the locking depth and
the declination. $Q$ is the seismic quality factor and the Königsberger ratio.
$\delta t$ is a travel-time residual and a splitting delay. Context always
disambiguates; the collisions are standard in the literature and not worth fighting.

## Definitions

### Stress tensor

Force per unit area transmitted across an internal surface, which needs two
directions and hence two indices.

$$t_i = \sigma_{ij}n_j, \qquad \sigma_{ij}=\sigma_{ji}.$$

Symmetry follows from conservation of angular momentum, not from convention.
Geophysics uses **tension positive**, so most Earth stresses are negative.

*Introduced:* [1.1](lessons/01-01-the-elastic-earth.md)

### Strain tensor

How much neighbouring points move relative to one another, with rigid rotation
subtracted out.

$$e_{ij} = \tfrac12\left(\partial_j u_i + \partial_i u_j\right).$$

*Introduced:* [1.1](lessons/01-01-the-elastic-earth.md)

### Poisson solid

An idealized isotropic material with $\lambda = \mu$, hence $\nu = 1/4$ and
$v_p/v_s = \sqrt3$. Most crustal and mantle rock is close to this.

*Introduced:* [1.1](lessons/01-01-the-elastic-earth.md)

### Body wave

A wave travelling through the volume of the Earth: P (compressional, feels $K$
and $\mu$) or S (shear, feels only $\mu$, and cannot exist in a liquid).

*Introduced:* [1.2](lessons/01-02-seismic-wave-zoo.md)

### Surface wave

A wave trapped at the free surface, decaying exponentially with depth. **Rayleigh**
waves move in a retrograde vertical ellipse and exist at any free surface;
**Love** waves move horizontally and transversely and require a slow layer over a
fast one — their presence proves the Earth is layered.

*Introduced:* [1.2](lessons/01-02-seismic-wave-zoo.md)

### Dispersion

Velocity depending on frequency. For surface waves this is a property of the
*layered medium as sampled by that wavelength*, not of the wave: a uniform
half-space is non-dispersive.

*Introduced:* [1.2](lessons/01-02-seismic-wave-zoo.md)

### Ray parameter

The horizontal slowness of a ray, conserved along its whole path by Snell's law,
and equal to the slope of the travel-time curve.

$$p = \frac{\sin i}{v} = \frac{dT}{dx} \quad\text{(flat)}, \qquad p = \frac{r\sin i}{v(r)} = \frac{dT}{d\Delta} \quad\text{(spherical)}.$$

A ray turns where the local velocity reaches $1/p$ (flat) or where $r/v = p$
(spherical).

*Introduced:* [1.3](lessons/01-03-wave-equation-ray-theory.md)

### Critical angle

The incidence angle at which a refracted ray runs along the interface, generating
a head wave (Pn at the Moho). Beyond it, total internal reflection.

$$i_c = \arcsin(v_1/v_2).$$

*Introduced:* [1.3](lessons/01-03-wave-equation-ray-theory.md)

### Shadow zone

A range of epicentral distances receiving no direct arrivals. The core P shadow
runs 103°–143° and is produced by refraction, not absorption; the S shadow beyond
about 103° is total and proves the outer core is liquid.

*Introduced:* [1.4](lessons/01-04-travel-time-curves-deep-earth.md)

### Low-velocity zone

A layer in which velocity decreases with depth. No ray bottoms inside it, so it
is **formally invisible** to travel times — its existence is inferred from the
gap it produces, not from any arrival that sampled it.

*Introduced:* [1.4](lessons/01-04-travel-time-curves-deep-earth.md)

### Triplication

A fold in the travel-time curve produced by a velocity jump, giving three
arrivals over a range of distances. The diagnostic of a discontinuity.

*Introduced:* [1.4](lessons/01-04-travel-time-curves-deep-earth.md)

### Travel-time residual

Observed arrival time minus that predicted by a spherically symmetric reference
model. Positive means late, hence slow rock somewhere on the path.

*Introduced:* [1.5](lessons/01-05-seismic-tomography.md)

### Checkerboard test

A synthetic resolution test: invert data computed from a known alternating
pattern, using the real ray geometry and regularization, and compare the recovery
with the input. Where the checkers come back blurred or absent, the real image is
untrustworthy at that scale.

*Introduced:* [1.5](lessons/01-05-seismic-tomography.md)

### Elastic rebound

Plate motion loads elastic strain into rock, friction holds a fault locked, and
when the stress exceeds what friction can hold the fault slips and the rock
springs back. **The earthquake is the release, not the loading.**

*Introduced:* [1.6](lessons/01-06-earthquake-sources-magnitude.md)

### Seismic moment

The physically meaningful measure of an earthquake's size: rock stiffness times
ruptured area times average slip.

$$M_0 = \mu A\bar d \quad(\mathrm{N\,m}).$$

*Introduced:* [1.6](lessons/01-06-earthquake-sources-magnitude.md)

### Double couple

The far-field force system equivalent to shear slip on a plane: four quadrants of
alternating first motion separated by two perpendicular nodal planes. One nodal
plane is the fault, the other is the **auxiliary plane**, and seismograms cannot
distinguish them.

*Introduced:* [1.6](lessons/01-06-earthquake-sources-magnitude.md)

### Magnitude saturation

The failure of any magnitude scale defined at a fixed period once the source
duration exceeds that period. $m_b$ (1 s) dies near 6.5, $M_s$ (20 s) near 8.3;
$M_w$, being derived from the zero-frequency moment, never saturates.

*Introduced:* [1.6](lessons/01-06-earthquake-sources-magnitude.md), explained by
the corner frequency in [1.7](lessons/01-07-rupture-physics-source-scaling.md)

### Stress drop

The *change* in shear stress on a fault caused by an earthquake — a few MPa,
which is only a few percent of the ambient stress. Remarkably constant across
eight orders of magnitude in moment.

$$\Delta\sigma\approx\frac{\mu\bar d}{W}.$$

*Introduced:* [1.7](lessons/01-07-rupture-physics-source-scaling.md)

### Self-similarity (of earthquakes)

The empirical fact that stress drop is nearly size-independent, which forces
$\bar d\propto L$ and $M_0\propto L^3$: big earthquakes are longer and
longer-lasting, not locally more violent.

*Introduced:* [1.7](lessons/01-07-rupture-physics-source-scaling.md)

### Directivity

The Doppler compression of radiated energy ahead of a propagating rupture. Same
moment, same magnitude, up to three times the peak shaking on one side of the
fault. Produces the destructive near-fault velocity pulse.

*Introduced:* [1.7](lessons/01-07-rupture-physics-source-scaling.md)

### Coulomb stress change

How much closer an earthquake brings a neighbouring fault to failure, combining
shear loading and unclamping.

$$\Delta\mathrm{CFS} = \Delta\tau + \mu'\Delta\sigma_n, \qquad \mu'\approx0.4.$$

*Introduced:* [1.7](lessons/01-07-rupture-physics-source-scaling.md)

### Geopotential

The sum of gravitational and centrifugal potential. A rotating fluid planet takes
the shape of one of its level surfaces, so shape and gravity are two readings of
one field.

*Introduced:* [2.1](lessons/02-01-figure-of-the-earth.md)

### Reference ellipsoid

The oblate spheroid that best fits the sea-level surface globally. A mathematical
idealization, **not** sea level — the real equipotential is the geoid.

*Introduced:* [2.1](lessons/02-01-figure-of-the-earth.md)

### Free-air anomaly

Observed gravity minus normal gravity, corrected only for the station's height.
Still contains the attraction of the rock between the ellipsoid and the station.
**Asks: is the topography supported?**

*Introduced:* [2.2](lessons/02-02-gravity-anomalies-reductions.md)

### Bouguer anomaly

The free-air anomaly with the attraction of the intervening rock also removed,
plus the terrain correction. **Asks: what is underneath?**

*Introduced:* [2.2](lessons/02-02-gravity-anomalies-reductions.md)

### Terrain correction

Accounts for the departure of real topography from the infinite Bouguer slab.
**Always positive**: hills above pull up, valleys beside fail to pull down, and
both make the reading too small.

*Introduced:* [2.2](lessons/02-02-gravity-anomalies-reductions.md)

### Nettleton's method

Determining the reduction density by computing Bouguer anomalies over a
topographic feature for several trial densities and choosing the one giving least
correlation with topography.

*Introduced:* [2.2](lessons/02-02-gravity-anomalies-reductions.md)

### Isostasy

Below the depth of compensation the mantle cannot support lateral pressure
differences, so every column of rock down to that depth must weigh the same.
Mountains float.

*Introduced:* [2.3](lessons/02-03-isostasy-airy-pratt.md)

### Airy isostasy

Compensation by variable crustal *thickness* at constant density — a mountain is
the top of a thickened block with a deep light root. Right for crustal
thickening: mountain belts and continents.

*Introduced:* [2.3](lessons/02-03-isostasy-airy-pratt.md)

### Pratt isostasy

Compensation by variable *density* above a fixed compensation depth — tall
regions are tall because their rock is lighter. Right for thermal expansion:
mid-ocean ridges.

*Introduced:* [2.3](lessons/02-03-isostasy-airy-pratt.md)

### Isostatic anomaly

The residual after removing both the topography and the compensation it should
have. Near zero means equilibrium; significantly non-zero means active uplift,
dynamic support, or a load held by plate strength.

*Introduced:* [2.3](lessons/02-03-isostasy-airy-pratt.md)

### Geoid

The equipotential surface of the geopotential that mean sea level follows. Where
a plumb line hangs perpendicular and still water sits. Departs from the ellipsoid
by up to about 100 m.

*Introduced:* [2.4](lessons/02-04-the-geoid.md)

### Bruns' formula

Converts a potential anomaly into a height.

$$N = T/\gamma.$$

*Introduced:* [2.4](lessons/02-04-the-geoid.md)

### Deflection of the vertical

The tilt between the geoid and the ellipsoid normal, reaching tens of arcseconds
near mountain ranges. Its shortfall near the Himalaya is the observation that
launched isostasy.

*Introduced:* [2.4](lessons/02-04-the-geoid.md)

### Dynamic topography

Surface (and core–mantle boundary) deflection maintained by mantle flow rather
than by buoyancy of static loads. It carries the opposite sign to the internal
density anomaly that drives it, which is why the geoid over slabs constrains
viscosity.

*Introduced:* [2.4](lessons/02-04-the-geoid.md)

### Love numbers

Dimensionless ratios of the solid Earth's tidal response to the tidal forcing:
$h$ for radial displacement, $l$ for horizontal, $k$ for the induced potential.
A rigid Earth would have all three zero.

*Introduced:* [2.5](lessons/02-05-solid-earth-tides-rotation.md)

### Body tide

The deformation of the solid Earth by the tidal potential — about 33 cm
vertically, unnoticed because everything nearby moves together. Distinct from the
ocean tide, which belongs to [oceanography 5.3](../oceanography/lessons/05-03-tides-equilibrium-dynamical.md).

*Introduced:* [2.5](lessons/02-05-solid-earth-tides-rotation.md)

### Chandler wobble

The free oscillation of the rotation axis about the figure axis, at 433 days —
longer than the rigid-body Euler period of 306 days because the Earth deforms.

*Introduced:* [2.5](lessons/02-05-solid-earth-tides-rotation.md)

### Flexure

Support of a load by the *bending strength* of the lithosphere rather than by
local buoyancy, spreading the load over a distance set by the flexural parameter
and producing a peripheral forebulge.

*Introduced:* [2.6](lessons/02-06-flexure-of-the-lithosphere.md)

### Effective elastic thickness

The thickness of the equivalent purely elastic plate that would bend as the real
lithosphere does. **A thermal measurement in mechanical clothing** — it tracks the
depth to roughly the 450 °C isotherm.

*Introduced:* [2.6](lessons/02-06-flexure-of-the-lithosphere.md)

### Degree of compensation

The fraction of the Airy deflection actually achieved by a load of a given
wavelength. Tends to 1 at long wavelength (Airy is the $D\to0$ limit of flexure)
and to 0 at short.

*Introduced:* [2.6](lessons/02-06-flexure-of-the-lithosphere.md)

### Interseismic arctangent

The smooth surface velocity profile across a fault locked to depth $D$ and
slipping below. The width of the transition is the locking depth.

*Introduced:* [2.7](lessons/02-07-space-geodesy.md)

### Glacial isostatic adjustment

The ongoing viscous rebound of the mantle after the removal of Pleistocene ice.
Distinguished from present-day elastic unloading by the ratio of gravity change
to uplift.

*Introduced:* [2.7](lessons/02-07-space-geodesy.md), quantified in
[4.6](lessons/04-06-mantle-rheology-post-glacial-rebound.md)

### Geomagnetic elements

The three numbers describing the field at a point, in the mixed Cartesian–angular
form an instrument naturally measures: $H$, $Z$, $D$, $I$ (with $F$ and $X,Y$
derived).

*Introduced:* [3.1](lessons/03-01-the-main-field.md)

### Geocentric axial dipole (GAD)

The idealized field of a dipole at the Earth's centre aligned with the rotation
axis. Its defining consequence is $\tan I = 2\tan\lambda$. Assumed to hold *on
average over $10^4$–$10^5$ years*, which is the load-bearing hypothesis of
palaeomagnetism.

*Introduced:* [3.1](lessons/03-01-the-main-field.md)

### Gauss separation

Using the different radial dependence of internal and external spherical-harmonic
terms to determine, from surface measurements alone, that the field is
overwhelmingly internal.

*Introduced:* [3.1](lessons/03-01-the-main-field.md)

### Lowes–Mauersberger spectrum

The magnetic power per spherical-harmonic degree, continued to any radius.
Flattening the observed spectrum by downward continuation locates the source at
about 3300–3500 km — the core radius, found magnetically.

*Introduced:* [3.1](lessons/03-01-the-main-field.md)

### Induction equation

The evolution of magnetic field in a moving conductor: stretching against
diffusion.

$$\frac{\partial\mathbf B}{\partial t} = \nabla\times(\mathbf u\times\mathbf B) + \eta\nabla^2\mathbf B.$$

*Introduced:* [3.2](lessons/03-02-the-geodynamo.md)

### Cowling's theorem

A steady axisymmetric field cannot be maintained by dynamo action — so the flow
must break axial symmetry even though the mean field is nearly axisymmetric.

*Introduced:* [3.2](lessons/03-02-the-geodynamo.md)

### Blocking temperature

The temperature below which a magnetic grain's relaxation time becomes
geologically long, freezing in the field direction. The transition is sharp
because relaxation time depends exponentially on temperature.

*Introduced:* [3.3](lessons/03-03-paleomagnetism.md)

### Fold test

Sampling a folded bed at several sites: if directions cluster after untilting,
the magnetization predates the folding. **A field test ties the magnetization to a
datable event in a way no laboratory measurement can.**

*Introduced:* [3.3](lessons/03-03-paleomagnetism.md)

### Apparent polar wander path

The track of palaeomagnetic pole positions through time for one continent. The
pole did not move; the continent did. Two continents that were joined must share
one path, and the age at which paths diverge dates their separation.

*Introduced:* [3.3](lessons/03-03-paleomagnetism.md)

### Königsberger ratio

Remanent over induced magnetization. Below 1 for most continental rock (which
reports the present field); 5–50 for fresh ocean-floor basalt (which reports the
past).

*Introduced:* [3.4](lessons/03-04-magnetic-anomalies-reversals.md)

### Vine–Matthews hypothesis

New crust forms at a ridge, cools through its blocking temperature and records
the field's polarity, so the seafloor is a barcode of reversals — **symmetric
about the ridge**, which is what proved seafloor spreading.

*Introduced:* [3.4](lessons/03-04-magnetic-anomalies-reversals.md)

### Reduction to the pole

The transformation that recomputes a magnetic anomaly as it would appear at
$I = 90^\circ$, so that anomaly peaks lie over their sources rather than skewed
and displaced. Unstable at low magnetic latitudes.

*Introduced:* [3.4](lessons/03-04-magnetic-anomalies-reversals.md)

### Euler pole

The axis about which one plate rotates relative to another. Since a rigid cap on
a sphere cannot translate, three numbers — two for the pole, one for the rate —
specify a plate's entire velocity field.

*Introduced:* [3.5](lessons/03-05-plate-kinematics-euler-poles.md)

### Circuit closure

Instantaneous rotation vectors add, so around any closed loop of plates the sum
must vanish. A circuit that fails to close means a plate has been missed.

*Introduced:* [3.5](lessons/03-05-plate-kinematics-euler-poles.md)

### Reduced heat flow

The intercept of the observed heat-flow–heat-production line for a geological
province: the heat arriving from below the enriched upper crust. The slope of the
same line is the thickness of that layer.

*Introduced:* [4.1](lessons/04-01-conduction-and-the-geotherm.md)

### Mantle adiabat

The near-isothermal temperature gradient of a vigorously convecting layer,
$\alpha gT/c_p \approx 0.3$ K/km — fifty times flatter than the conductive
geotherm. The kink between them at about 100 km is the base of the plate.

*Introduced:* [4.1](lessons/04-01-conduction-and-the-geotherm.md)

### Urey ratio

Radiogenic heat production divided by total heat loss, about 0.43. **Less than
half the Earth's heat output is being made now**; the rest is stored heat.

*Introduced:* [4.2](lessons/04-02-radiogenic-heat-budget.md)

### Thermal catastrophe

The paradox that running the heat budget backwards — with production several
times larger and heat loss rising steeply with mantle temperature — makes the
mantle molten one to two billion years ago, which the rock record excludes.

*Introduced:* [4.2](lessons/04-02-radiogenic-heat-budget.md)

### Half-space cooling

The model of oceanic lithosphere as a semi-infinite solid cooling from the moment
of its creation at a ridge. Everything follows from the single length scale
$\sqrt{\kappa t}$.

*Introduced:* [4.3](lessons/04-03-cooling-oceanic-lithosphere.md)

### Plate model

The modification in which the lithosphere has a fixed basal temperature at a
fixed depth, so cooling stops and seafloor depth flattens beyond about 80 Myr.

*Introduced:* [4.3](lessons/04-03-cooling-oceanic-lithosphere.md)

### Hydrothermal heat flux

The heat carried out of young ocean crust by circulating seawater, bypassing
conductive probes. Measured as the deficit between predicted and observed heat
flow for crust younger than about 65 Myr; globally of order 10 TW.

*Introduced:* [4.3](lessons/04-03-cooling-oceanic-lithosphere.md)

### Rayleigh number

The ratio of buoyancy driving to the two dissipative effects, viscosity and
thermal diffusion. Convection begins above about 1700; the mantle runs at $10^8$.

*Introduced:* [4.4](lessons/04-04-mantle-convection-rayleigh-number.md)

### Thermal boundary layer

The thin zone at the top or bottom of a convecting layer across which nearly all
the temperature drop occurs. **The lithosphere is the mantle's cold upper thermal
boundary layer**, and D″ is its hot lower one.

*Introduced:* [4.4](lessons/04-04-mantle-convection-rayleigh-number.md)

### Slab pull

The negative buoyancy of a cold, dense subducted slab, and by an order of
magnitude the dominant plate driving force. Nearly all of it is consumed locally
by viscous resistance to the slab's own descent.

*Introduced:* [4.5](lessons/04-05-plate-driving-forces.md)

### Ridge push

The horizontal pressure-gradient force arising from elevated hot lithosphere
beside cold dense lithosphere. Despite the name it is a distributed body force,
not a push applied at the ridge, and it grows linearly with plate age.

*Introduced:* [4.5](lessons/04-05-plate-driving-forces.md)

### Maxwell time

The timescale dividing elastic from viscous behaviour, $\eta/\mu \approx 250$
years for the mantle. Seismic waves are eight orders of magnitude on the elastic
side; ice sheets two orders on the viscous side.

*Introduced:* [4.6](lessons/04-06-mantle-rheology-post-glacial-rebound.md)

### Diffusion vs dislocation creep

Diffusion creep is Newtonian and grain-size sensitive and produces **no** crystal
alignment; dislocation creep is non-Newtonian ($n\approx3.5$) and **does** align
crystals — which is why seismic anisotropy is evidence for dislocation creep as
well as for flow.

*Introduced:* [4.6](lessons/04-06-mantle-rheology-post-glacial-rebound.md)

### Free oscillations

Standing elastic waves of the whole planet, excited by great earthquakes and
persisting for weeks. **Spheroidal** modes change the shape and perturb gravity;
**toroidal** modes are pure twisting and cannot exist in a liquid.

*Introduced:* [5.1](lessons/05-01-free-oscillations-earth-density.md)

### Adams–Williamson equation

Converts a seismic velocity profile into a density gradient within a chemically
homogeneous, adiabatic layer.

$$\frac{d\rho}{dr} = -\frac{\rho g}{\Phi}.$$

*Introduced:* [5.1](lessons/05-01-free-oscillations-earth-density.md)

### Bullen parameter

The ratio of the observed density gradient to the Adams–Williamson prediction.
Equal to 1 in a homogeneous adiabatic layer; a large value flags a composition or
phase change.

*Introduced:* [5.1](lessons/05-01-free-oscillations-earth-density.md)

### PREM

The Preliminary Reference Earth Model (1981) — a radially symmetric model of
$\rho$, $v_p$, $v_s$, $Q_\mu$ and $Q_\kappa$ combining travel times, normal-mode
frequencies, mass and moment of inertia. The reference against which all
anomalies are quoted.

*Introduced:* [5.1](lessons/05-01-free-oscillations-earth-density.md)

### Clapeyron slope

The slope $dP/dT$ of a phase boundary. Positive (exothermic) transitions are
pushed **shallower** by cold material, negative (endothermic) ones **deeper** —
which is why the 410 and 660 deflect in opposite directions inside a slab.

*Introduced:* [5.2](lessons/05-02-mineral-physics-transition-zone.md)

### Transition zone

The mantle between 410 and 660 km, where olivine takes the denser wadsleyite and
ringwoodite structures. **Not a compositional layer** — the same atoms, repacked.
Its capacity to hold water makes it a potential reservoir comparable to the oceans.

*Introduced:* [5.2](lessons/05-02-mineral-physics-transition-zone.md)

### Quality factor $Q$

The inverse of the fractional energy lost per radian of oscillation. Almost all
of the Earth's loss is in shear ($Q_\mu$ of a few hundred) rather than in bulk
($Q_\kappa$ effectively infinite).

*Introduced:* [5.3](lessons/05-03-attenuation-anelasticity.md)

### Physical dispersion

The frequency dependence of velocity forced by causality in an attenuating medium
— about 1 percent between 1 s and 1000 s. Not optional: a medium that absorbs
without dispersing would respond before it was disturbed.

*Introduced:* [5.3](lessons/05-03-attenuation-anelasticity.md)

### New core paradox

The consequence of the upward revision of iron's thermal conductivity: conduction
along the core adiabat may carry more heat than the core supplies, making the top
of the core stratified and the inner core young — while palaeomagnetism shows a
field at 3.5 Ga.

*Introduced:* [5.4](lessons/05-04-the-core.md)

### D″

The lowermost few hundred kilometres of the mantle: a seismic discontinuity at
its top (probably post-perovskite), two large low-shear-velocity provinces, and
patchy ultra-low-velocity zones.

*Introduced:* [5.4](lessons/05-04-the-core.md), post-perovskite in
[5.2](lessons/05-02-mineral-physics-transition-zone.md)

### Seismic anisotropy

Velocity depending on propagation direction and polarization, produced in the
mantle by lattice-preferred orientation of olivine under dislocation creep.
**The only direct measurement of the direction of mantle flow.**

*Introduced:* [5.5](lessons/05-05-anisotropy-mantle-flow.md)

### Shear-wave splitting

The separation of a shear wave into fast and slow components on crossing
anisotropic rock — elastic birefringence. Returns a fast azimuth and a delay
time; has excellent lateral and essentially **no depth** resolution.

*Introduced:* [5.5](lessons/05-05-anisotropy-mantle-flow.md)

### Null space

The set of model vectors producing no data at all: $\mathbf{Gm}_0 = \mathbf 0$.
**Not noise and not a resolution limit** — a formal blind spot untouched by better
instruments.

*Introduced:* [6.1](lessons/06-01-the-linear-inverse-problem.md)

### Resolution matrix

$\mathbf R = \mathbf G^{-g}\mathbf G$, giving each recovered parameter as a
weighted average of the true ones. Its rows are resolving kernels, and their
width is the true resolution.

*Introduced:* [6.1](lessons/06-01-the-linear-inverse-problem.md)

### Regularization

The choice — damping toward small models, or smoothing toward simple ones — that
selects one answer from the family the data permit. **A defensible choice, not a
discovery**; the smoothness in a published image came from the analyst.

*Introduced:* [6.1](lessons/06-01-the-linear-inverse-problem.md)

### Acoustic impedance

$Z = \rho v$. Reflections occur where it changes, with a sign that reverses when
the wave passes into a lower-impedance medium — the basis of bright-spot gas
detection.

*Introduced:* [6.2](lessons/06-02-reflection-seismics.md)

### Normal moveout

The extra travel time at non-zero offset. Correcting for it flattens a CMP gather
so it can be stacked, and the curvature that had to be removed **is** the
velocity.

*Introduced:* [6.2](lessons/06-02-reflection-seismics.md)

### Migration

Repositioning reflected energy to where it came from and collapsing diffractions.
Changes reflector positions by hundreds of metres to kilometres in dipping
structures — an inversion, not a cosmetic step.

*Introduced:* [6.2](lessons/06-02-reflection-seismics.md)

### Fresnel zone

The region contributing to a single unmigrated trace, of radius
$\sqrt{\lambda z/2}$ — hundreds of metres at target depth. Migration collapses it
to about $\lambda/4$, which is the real reason migration matters.

*Introduced:* [6.2](lessons/06-02-reflection-seismics.md)

### Archie's law

Empirical relation making rock resistivity a measurement of porosity and pore-water
salinity rather than of mineralogy. Fails where clays conduct through surface ions.

*Introduced:* [6.3](lessons/06-03-electrical-electromagnetic-methods.md)

### Apparent resistivity

The resistivity of the uniform half-space that would give the same reading — a
weighted average over everything the current sampled, not the value at any depth.

*Introduced:* [6.3](lessons/06-03-electrical-electromagnetic-methods.md)

### Equivalence

The null space of DC resistivity: for a thin conductive layer only the
conductance $\sigma t$ is determined, not $\sigma$ and $t$ separately.

*Introduced:* [6.3](lessons/06-03-electrical-electromagnetic-methods.md)

### Skin depth

The depth to which a diffusive electromagnetic field penetrates,
$\delta \approx 503\sqrt{\rho/f}$ m. **Depth of investigation is bought with
frequency, not with power.**

*Introduced:* [6.3](lessons/06-03-electrical-electromagnetic-methods.md)

## Formulas and rules

### Elasticity and wave speeds

| Quantity | Formula |
|---|---|
| Hooke's law, isotropic | $\sigma_{ij} = \lambda\theta\delta_{ij} + 2\mu e_{ij}$ |
| bulk modulus | $K = \lambda + \tfrac23\mu$ |
| Young's modulus | $E = \mu(3\lambda+2\mu)/(\lambda+\mu)$ |
| Poisson's ratio | $\nu = \lambda/[2(\lambda+\mu)]$; bounded $-1<\nu<1/2$ |
| P speed | $v_p = \sqrt{(\lambda+2\mu)/\rho} = \sqrt{(K+\tfrac43\mu)/\rho}$ |
| S speed | $v_s = \sqrt{\mu/\rho}$ |
| speed ratio | $v_p/v_s = \sqrt{2(1-\nu)/(1-2\nu)}$; $=\sqrt3$ for $\nu=1/4$; $\ge\sqrt2$ for $\nu\ge0$ |
| Rayleigh speed | $c_R = 0.9194\,v_s$ (Poisson half-space) |
| Love speed | $v_{s1} < c < v_{s2}$; needs a slow layer over a fast one |
| geometric spreading | body $\propto1/r$; surface $\propto1/\sqrt r$ |

*From* [1.1](lessons/01-01-the-elastic-earth.md), [1.2](lessons/01-02-seismic-wave-zoo.md), [1.3](lessons/01-03-wave-equation-ray-theory.md)

### Rays and travel times

| Quantity | Formula |
|---|---|
| Snell / ray parameter | $\sin i_1/v_1 = \sin i_2/v_2 = p$ |
| critical angle | $i_c = \arcsin(v_1/v_2)$ |
| turning condition | $v(z_t) = 1/p$ (flat); $r_t/v(r_t) = p$ (spherical) |
| linear gradient $v = v_0+kz$ | ray is a circular arc of radius $R = 1/(pk)$, centre at height $v_0/k$ above the surface |
| turning depth, linear gradient | $z_t = (1/p - v_0)/k$ |
| range, linear gradient | $x = 2\sqrt{R^2-(v_0/k)^2}$ |
| slope of travel-time curve | $p = dT/dx$ (flat), $dT/d\Delta$ (spherical) |
| degrees to radians for $p$ | multiply s/degree by $57.30$ to get s/radian |
| S–P distance rule | $\Delta = (t_S-t_P)/(1/v_s - 1/v_p)$; with $v_p/v_s=\sqrt3$, $\Delta\approx8.2(t_S-t_P)$ km |

*From* [1.3](lessons/01-03-wave-equation-ray-theory.md), [1.4](lessons/01-04-travel-time-curves-deep-earth.md)

### Phase nomenclature

| Letter | Leg |
|---|---|
| P, S | compressional / shear leg in the mantle |
| c | reflection off the core–mantle boundary (PcP) |
| K | compressional leg through the outer core (PKP) |
| I | compressional leg through the inner core (PKIKP) |
| i | reflection off the inner-core boundary (PKiKP) |
| n | head wave along the Moho (Pn) |
| diff | diffracted around the core (Pdiff) |

*From* [1.4](lessons/01-04-travel-time-curves-deep-earth.md)

### Tomography

| Quantity | Formula |
|---|---|
| delay as a line integral | $\delta t = \int\delta s\,d\ell = -\int(\delta v/v^2)\,d\ell$ |
| delay from a fractional anomaly | $\delta t_i = -t_i\,(\delta v/v)$ |
| discretized | $\delta t_i = \sum_j G_{ij}m_j$, rows are rays, columns are cells |
| thermal sensitivity | $\partial\ln v_s/\partial T \approx -1\times10^{-4}\ \mathrm{K^{-1}}$; $\partial\ln v_p/\partial T\approx-0.5\times10^{-4}$ |
| thermal-only ratio | $\delta\ln v_s/\delta\ln v_p \approx 1.7$–$2.0$; higher implies melt or water |

*From* [1.5](lessons/01-05-seismic-tomography.md)

### Earthquake source

| Quantity | Formula |
|---|---|
| seismic moment | $M_0 = \mu A\bar d$ (N·m) |
| moment magnitude | $M_w = \tfrac23(\log_{10}M_0 - 9.1)$ |
| inverse | $\log_{10}M_0 = 1.5M_w + 9.1$ |
| per magnitude unit | amplitude $\times10$; moment and energy $\times31.6$ |
| radiated energy | $E_s \approx (\Delta\sigma/2\mu)M_0 \approx 5\times10^{-5}M_0$; $\log_{10}E_s\approx1.5M_w+4.8$ |
| stress drop | $\Delta\sigma \approx \mu\bar d/W$ ($W$ = smaller fault dimension); circular crack: $\tfrac{7\pi}{16}\mu\bar d/a$ |
| rupture duration | $T_{\text{dur}} \approx L/v_r$, $v_r\approx0.8v_s$ |
| corner frequency | $f_c \sim 1/T_{\text{dur}} \sim v_s/L$ |
| self-similar scaling | $\bar d\propto L$, $M_0\propto L^3$, $T_{\text{dur}}\propto M_0^{1/3}$ |
| apparent duration (directivity) | $T_{\text{app}}(\theta) = (L/v_r)\left[1-(v_r/c)\cos\theta\right]$ |
| Coulomb stress change | $\Delta\mathrm{CFS} = \Delta\tau + \mu'\Delta\sigma_n$, $\mu'\approx0.4$ |
| moment accumulation rate | $\dot M_0 = \mu A V$ with $A$ the locked area, $V$ the slip rate |

*From* [1.6](lessons/01-06-earthquake-sources-magnitude.md), [1.7](lessons/01-07-rupture-physics-source-scaling.md)

### The figure of the Earth

| Quantity | Formula / value |
|---|---|
| rotation parameter | $m = \omega^2a/\gamma_e = 3.4677\times10^{-3}$ |
| flattening | $f = (a-c)/a = 1/298.257 = 3.3528\times10^{-3}$ |
| first-order relation | $f \approx \tfrac32J_2 + m/2$ |
| Clairaut's theorem | $(\gamma_p-\gamma_e)/\gamma_e = \tfrac52m - f$ |
| $J_2$ | $1.08263\times10^{-3}$ |
| normal gravity (IGF 1967) | $\gamma(\phi) = 9.780327\left(1+0.0053024\sin^2\phi - 0.0000058\sin^22\phi\right)\ \mathrm{m\,s^{-2}}$ |

*From* [2.1](lessons/02-01-figure-of-the-earth.md)

### Gravity reductions

| Correction | Value |
|---|---|
| free-air gradient | $0.3086\ \mathrm{mGal\,m^{-1}}$ (added for height) |
| Bouguer slab | $2\pi G\rho h = 0.04193\,\rho h$ mGal ($\rho$ in g/cm³, $h$ in m) |
| Bouguer at $\rho=2670$ | $0.1119\ \mathrm{mGal\,m^{-1}}$ (subtracted) |
| combined elevation | $0.1967\ \mathrm{mGal\,m^{-1}}$ |
| terrain correction | always **positive** |
| Eötvös | $\approx7.5\,v\cos\phi\sin\alpha$ mGal, $v$ in knots |
| free-air anomaly | $\Delta g_{FA} = g_{\text{obs}} - \gamma(\phi) + 0.3086h$ |
| Bouguer anomaly | $\Delta g_B = \Delta g_{FA} - 0.1119h + TC$ |
| $2\pi G$ | $4.1932\times10^{-10}\ \mathrm{m^3\,kg^{-1}\,s^{-2}}$ |

### Forward models for simple bodies

| Body | Anomaly |
|---|---|
| infinite slab, thickness $t$ | $\Delta g = 2\pi G\Delta\rho\,t$ |
| sphere radius $R$, depth $d$ | $\Delta g_{\max} = \tfrac43\pi G\Delta\rho R^3/d^2$ |
| sphere half-width rule | $x_{1/2} \approx 0.766\,d$ |

*From* [2.2](lessons/02-02-gravity-anomalies-reductions.md)

### Isostasy and flexure

| Quantity | Formula |
|---|---|
| Airy root (subaerial) | $r = h\rho_c/(\rho_m-\rho_c)$ |
| Airy antiroot (submarine) | $r = d(\rho_c-\rho_w)/(\rho_m-\rho_c)$ |
| Pratt density | $\rho_h = \rho_0 D/(D+h)$ |
| load depression | $w = t\rho_L/\rho_m$ |
| plate equation | $D\,d^4w/dx^4 + \Delta\rho\,g\,w = q(x)$ |
| flexural rigidity | $D = ET_e^3/[12(1-\nu^2)]$ |
| flexural parameter | $\alpha = (4D/\Delta\rho g)^{1/4}$ |
| elastic thickness from $D$ | $T_e = [12D(1-\nu^2)/E]^{1/3}$ |
| line-load deflection | $w(x) = \dfrac{P\alpha^3}{8D}e^{-x/\alpha}\left(\cos\dfrac{x}{\alpha}+\sin\dfrac{x}{\alpha}\right)$ |
| zero crossing | $x = 3\pi\alpha/4 \approx 2.36\alpha$ |
| forebulge (continuous plate) | $x = \pi\alpha$, amplitude $-e^{-\pi}w_0 = -0.0432\,w_0$ |
| forebulge (broken plate) | $x = \pi\alpha/2$ |
| degree of compensation | $C(k) = 1/[1+(k\alpha)^4/4]$ |
| compensation crossover | $\lambda_c = 2\pi\alpha/\sqrt2 = 4.44\alpha$ |

*From* [2.3](lessons/02-03-isostasy-airy-pratt.md), [2.6](lessons/02-06-flexure-of-the-lithosphere.md)

### Geoid and tides

| Quantity | Formula |
|---|---|
| Bruns' formula | $N = T/\gamma$ |
| gravity–geoid by degree | $\Delta g_\ell = (\ell-1)\gamma N_\ell/R$, so $N_\ell = R\Delta g_\ell/[(\ell-1)\gamma]$ |
| Stokes' integral | $N = \dfrac{R}{4\pi\gamma}\iint\Delta g\,S(\psi)\,d\sigma$ — needs **global** data |
| height relation | $H = h - N$ |
| Love-number responses | $\delta r = h_2V_2/g$; $V_{\text{ind}} = k_2V_2$ |
| gravimetric factor | $\delta = 1 + h_2 - \tfrac32k_2 \approx 1.16$ |
| Euler wobble period | $A/(C-A) = 306$ sidereal days |
| Chandler period | $T_{\text{Ch}} = T_{\text{Euler}}/(1-k_2/k_s)$, $k_s\approx0.94$ |
| length of day | $\Delta\mathrm{LOD}/\mathrm{LOD} = \Delta C/C$ |
| $J_2$ to moment of inertia | $\dot C \approx Ma^2\dot J_2$ |

*From* [2.4](lessons/02-04-the-geoid.md), [2.5](lessons/02-05-solid-earth-tides-rotation.md)

### Space geodesy

| Quantity | Formula |
|---|---|
| interseismic profile | $v(x) = (V/\pi)\arctan(x/D)$; $v = V/4$ at $x=D$ |
| InSAR fringe | one fringe $=\lambda/2$ of range change ($2.8$ cm for C-band, 12 cm for L-band) |
| line-of-sight projection | $\Delta r = u_z\cos\theta_{\text{look}}$ for vertical motion |
| sea-level equivalent | 1 mm of global sea level $=361$ Gt |
| elastic gravity-to-uplift | $\dot g/\dot u \approx -0.26\ \mu\mathrm{Gal\,mm^{-1}}$ |
| GIA gravity-to-uplift | $\dot g/\dot u \approx -0.16\ \mu\mathrm{Gal\,mm^{-1}}$ |

*From* [2.7](lessons/02-07-space-geodesy.md)

### Geomagnetism

| Quantity | Formula |
|---|---|
| elements | $H=\sqrt{X^2+Y^2}$, $F=\sqrt{H^2+Z^2}$, $\tan D = Y/X$, $\tan I = Z/H$ |
| GAD field | $Z = 2B_0\sin\lambda$, $H = B_0\cos\lambda$, $F = B_0\sqrt{1+3\sin^2\lambda}$ |
| dip–latitude relation | $\tan I = 2\tan\lambda$ |
| dipole moment | $m = 4\pi a^3B_0/\mu_0 \approx 7.7\times10^{22}\ \mathrm{A\,m^2}$ |
| power spectrum | $R_\ell(r) = (\ell+1)(a/r)^{2\ell+4}\sum_m[(g_\ell^m)^2+(h_\ell^m)^2]$ |
| source radius from spectrum | $c = a\sqrt q$ where $R_\ell\propto q^\ell$ at the surface |
| magnetic diffusivity | $\eta = 1/(\mu_0\sigma)$ |
| free decay time | $\tau = \mu_0\sigma L^2/\pi^2 = L^2/(\pi^2\eta)$ |
| magnetic Reynolds number | $R_m = uL/\eta$; dynamo needs $R_m \gtrsim 40$ |
| Elsasser number | $\Lambda = \sigma B^2/(2\rho\Omega)$, saturates near 1 |
| palaeolatitude | $\tan\lambda = \tfrac12\tan I$ |
| palaeocolatitude | $p = 90^\circ - |\lambda|$ |
| spreading rate | half rate $=$ distance / age; full rate $=2\times$ half rate |
| Königsberger ratio | $Q = |M_{\text{rem}}|/|M_{\text{ind}}|$ |

*From* [3.1](lessons/03-01-the-main-field.md), [3.2](lessons/03-02-the-geodynamo.md), [3.3](lessons/03-03-paleomagnetism.md), [3.4](lessons/03-04-magnetic-anomalies-reversals.md)

### Polarity timescale

| Chron | Interval |
|---|---|
| Brunhes (normal) | 0 – 0.78 Ma |
| Matuyama (reversed) | 0.78 – 2.58 Ma |
| Gauss (normal) | 2.58 – 3.60 Ma |
| Gilbert (reversed) | 3.60 – 5.89 Ma |
| Cretaceous Normal Superchron | ~121 – 83 Ma, no reversals |

*From* [3.4](lessons/03-04-magnetic-anomalies-reversals.md)

### Plate kinematics

| Quantity | Formula |
|---|---|
| velocity field | $\mathbf v = \boldsymbol\omega\times\mathbf r$ |
| speed from a pole | $v = \omega R\sin\theta$, $\omega$ in **radians** per unit time |
| convenient constant | $\omega = 1^\circ/\mathrm{Myr}$ gives $v = 11.1\sin\theta$ cm/yr |
| composing rotations | $\boldsymbol\omega_{AC} = \boldsymbol\omega_{AB}+\boldsymbol\omega_{BC}$ (instantaneous only) |
| circuit closure | $\boldsymbol\omega_{AB}+\boldsymbol\omega_{BC}+\boldsymbol\omega_{CA} = \mathbf 0$ |
| pole from a rotation vector | $\lambda_p = \arcsin(\omega_z/\omega)$, $\varphi_p = \arctan(\omega_y/\omega_x)$ |
| transform geometry | transforms are small circles about the pole; the great circle to the pole is perpendicular to them |
| degrees to km | $1^\circ$ of arc $= 111.2$ km |

*From* [3.5](lessons/03-05-plate-kinematics-euler-poles.md)

### Heat conduction and the geotherm

| Quantity | Formula |
|---|---|
| Fourier's law | $q = -k\,dT/dz$ |
| steady state with sources | $k\,d^2T/dz^2 + A = 0$ |
| flux with depth | $q(z) = q_0 - Az$ |
| geotherm | $T(z) = T_0 + (q_0/k)z - (A/2k)z^2$ |
| reduced heat flow | $q_r = q_0 - AD$; province relation $q_0 = q_r + A_0D$ |
| mantle adiabat | $(dT/dz)_{\text{ad}} = \alpha gT/c_p \approx 0.3\ \mathrm{K\,km^{-1}}$ |
| secular cooling | $|dT/dt| = Q_{\text{cool}}/(Mc_p)$ |
| Urey ratio | $\mathrm{Ur} = H/Q$ |
| production back in time | $H(\tau)/H(0) = 2^{\tau/t_{1/2}}$ |

*From* [4.1](lessons/04-01-conduction-and-the-geotherm.md), [4.2](lessons/04-02-radiogenic-heat-budget.md)

### Half-space cooling

| Quantity | Formula |
|---|---|
| temperature | $T(z,t) = T_s + (T_m-T_s)\,\mathrm{erf}\!\left(z/2\sqrt{\kappa t}\right)$ |
| thermal thickness | $y_T \approx 2\sqrt{\kappa t}$ |
| heat flux | $q(t) = k(T_m-T_s)/\sqrt{\pi\kappa t}$ |
| numerically | $q \approx 480/\sqrt t\ \mathrm{mW\,m^{-2}}$, $t$ in Myr |
| subsidence | $d(t)-d_r = \dfrac{2\rho_m\alpha(T_m-T_s)}{\rho_m-\rho_w}\sqrt{\dfrac{\kappa t}{\pi}}$ |
| numerically | $d(t) \approx 2500 + 355\sqrt t$ metres, $t$ in Myr |
| plate-model time constant | $\tau = y_L^2/(\pi^2\kappa)$ |
| useful conversion | $1\ \mathrm{Myr} = 3.156\times10^{13}$ s |

*From* [4.3](lessons/04-03-cooling-oceanic-lithosphere.md)

### Convection and rheology

| Quantity | Formula |
|---|---|
| Rayleigh number | $Ra = \alpha g\Delta T d^3/(\kappa\nu)$ |
| critical value | 1708 (rigid–rigid), 657 (free–free), 1101 (mixed) |
| boundary-layer thickness | $\delta/d = (Ra_c/Ra)^{1/3}$ |
| Nusselt number | $\mathrm{Nu} = (Ra/Ra_c)^{1/3}$ |
| local instability criterion | $\delta = \left[Ra_c\kappa\nu/(\alpha g\Delta T)\right]^{1/3}$ |
| Maxwell viscoelasticity | $\dot\varepsilon = \dot\sigma/\mu + \sigma/\eta$ |
| Maxwell time | $\tau_M = \eta/\mu$ |
| rebound relaxation time | $\tau = 4\pi\eta/(\rho g\lambda)$ |
| depth sampled by a load | $\approx\lambda/2$ |
| viscosity temperature dependence | $\eta\propto\exp[(E^*+PV^*)/RT]$, $E^*\approx300\ \mathrm{kJ\,mol^{-1}}$ |

*From* [4.4](lessons/04-04-mantle-convection-rayleigh-number.md), [4.6](lessons/04-06-mantle-rheology-post-glacial-rebound.md)

### Plate forces (per unit length of boundary)

| Force | Formula / value |
|---|---|
| ridge push | $F_{RP} = g\rho_m\alpha\Delta T\left[1+\dfrac{2\rho_m\alpha\Delta T}{\pi(\rho_m-\rho_w)}\right]\kappa t$; $\propto t$ |
| ridge push at 100 Ma | $\approx4\times10^{12}$ N/m |
| slab pull | $F_{SP} = \Delta\rho\,g\,h\,L \approx 3$–$5\times10^{13}$ N/m |
| slab excess density | thermal $\rho_m\alpha\Delta T_{\text{slab}}\approx50$, plus eclogite $\approx20\ \mathrm{kg\,m^{-3}}$ |
| basal drag | $\tau_{DF} = \eta_a u/h_a$; **sign not fixed** |
| force balance | all forces sum to zero — no inertia |

*From* [4.5](lessons/04-05-plate-driving-forces.md)

### The deep Earth

| Quantity | Formula |
|---|---|
| seismic parameter | $\Phi = v_p^2-\tfrac43v_s^2 = K/\rho$ |
| Adams–Williamson | $d\rho/dr = -\rho g/\Phi$ |
| Bullen parameter | $\eta_B = (d\rho/dr)_{\text{obs}}/(d\rho/dr)_{\text{AW}}$ |
| mass constraint | $M = \int_0^R4\pi r^2\rho\,dr$; $\bar\rho = 5515\ \mathrm{kg\,m^{-3}}$ |
| moment of inertia | $C = \tfrac{8\pi}{3}\int_0^R r^4\rho\,dr$; $C/MR^2 = 0.3307$ |
| two-shell mass | $\rho_c x^3 + \rho_m(1-x^3) = \bar\rho$, $x=r_c/R$ |
| two-shell moment | $C/MR^2 = \tfrac25\left[\rho_cx^5+\rho_m(1-x^5)\right]/\bar\rho$ |
| Clapeyron deflection | $\Delta z = \gamma\Delta T/(\rho g)$ |
| phase buoyancy stress | $\sigma_{\text{phase}} = \Delta\rho\,g\,\Delta z$ |
| attenuation decay | $A = A_0\exp(-\omega t/2Q) = A_0\exp(-\pi x/Q\lambda)$ |
| $t^*$ operator | $t^* = \int dt/Q$; $A = A_0e^{-\pi ft^*}$ |
| P from S quality factor | $1/Q_\alpha = L/Q_\mu + (1-L)/Q_\kappa$, $L = \tfrac43v_s^2/v_p^2$; $Q_\alpha\approx\tfrac94Q_\mu$ |
| physical dispersion | $v(\omega) = v(\omega_0)\left[1+\dfrac{1}{\pi Q}\ln\dfrac{\omega}{\omega_0}\right]$ |
| adiabatic conductive flux | $q_{\text{ad}} = k\,|dT/dr|_{\text{ad}}$; convection needs $q > q_{\text{ad}}$ |
| radial anisotropy | $\xi = (v_{SH}/v_{SV})^2$ |
| splitting delay | $\delta t = L(1/v_s - 1/v_f) \approx (L/\bar v)(\Delta v/\bar v)$ |

*From* [5.1](lessons/05-01-free-oscillations-earth-density.md), [5.2](lessons/05-02-mineral-physics-transition-zone.md), [5.3](lessons/05-03-attenuation-anelasticity.md), [5.4](lessons/05-04-the-core.md), [5.5](lessons/05-05-anisotropy-mantle-flow.md)

### Inversion

| Case | Solution |
|---|---|
| overdetermined | $\hat{\mathbf m} = (\mathbf G^{\!\top}\mathbf G)^{-1}\mathbf G^{\!\top}\mathbf d$ |
| underdetermined | $\hat{\mathbf m} = \mathbf G^{\!\top}(\mathbf{GG}^{\!\top})^{-1}\mathbf d$ (minimum norm) |
| mixed / damped | $\hat{\mathbf m} = (\mathbf G^{\!\top}\mathbf G+\varepsilon^2\mathbf I)^{-1}\mathbf G^{\!\top}\mathbf d$ |
| null space | $\{\mathbf m_0:\mathbf{Gm}_0=\mathbf 0\}$ |
| resolution matrix | $\mathbf R = \mathbf G^{-g}\mathbf G$; perfect resolution is $\mathbf R = \mathbf I$ |
| choosing $\varepsilon$ | elbow of the trade-off curve, or $\chi^2/N\approx1$ |
| straight-line least squares | $b = S_{xt}/S_{xx}$, $a = \bar t - b\bar x$ |

*From* [6.1](lessons/06-01-the-linear-inverse-problem.md)

### Applied methods

| Quantity | Formula |
|---|---|
| reflection coefficient | $R = (Z_2-Z_1)/(Z_2+Z_1)$, $Z=\rho v$ |
| two-way time | $t_0 = 2z/V$ |
| moveout hyperbola | $t(x) = \sqrt{t_0^2 + x^2/V^2}$ |
| velocity from moveout | $V = x/\sqrt{t^2-t_0^2}$ |
| Dix equation | $V_{\text{int},n}^2 = \dfrac{V_{n}^2t_n - V_{n-1}^2t_{n-1}}{t_n-t_{n-1}}$ |
| stacking gain | signal-to-noise $\times\sqrt{\text{fold}}$ |
| apparent dip | $\tan\theta_a = \sin\theta$ — dips are always understated before migration |
| vertical resolution | $\lambda/4$ |
| Fresnel zone radius | $\sqrt{\lambda z/2}$; after 3-D migration, $\approx\lambda/4$ |
| Archie's law | $\rho = a\rho_w\phi^{-m}S^{-n}$, $a\approx1$, $m\approx n\approx2$ |
| apparent resistivity | $\rho_a = K\,\Delta V/I$; Wenner $K = 2\pi a$ |
| equivalence | only $S = \sigma t$ is determined for a thin conductive layer |
| chargeability | $M = (1/V_0)\int_{t_1}^{t_2}V(t)\,dt$ |
| skin depth | $\delta = \sqrt{2/(\omega\mu\sigma)} \approx 503\sqrt{\rho/f}$ m |
| MT apparent resistivity | $\rho_a = |Z|^2/(\omega\mu)$, $Z = E_x/H_y$ |
| wave–diffusion transition | $f_t = \sigma/(2\pi\varepsilon) = 1/(2\pi\rho\varepsilon_0\varepsilon_r)$ |
| GPR velocity | $v = c/\sqrt{\varepsilon_r}$ |

*From* [6.2](lessons/06-02-reflection-seismics.md), [6.3](lessons/06-03-electrical-electromagnetic-methods.md)

## Reference values

### The Earth, in numbers

| Quantity | Value |
|---|---|
| equatorial radius $a$ | 6378.137 km |
| polar radius $c$ | 6356.752 km |
| mean radius $R$ | 6371 km |
| mass $M$ | $5.974\times10^{24}$ kg |
| mean density | 5515 kg/m³ |
| $C/MR^2$ | 0.3307 |
| $\omega$ | $7.292\times10^{-5}$ rad/s |
| $\gamma_e$, $\gamma_p$ | 9.7803, 9.8322 m/s² |
| total heat loss | 46 TW (oceanic ~32, continental ~14) |
| dipole moment | $7.7\times10^{22}\ \mathrm{A\,m^2}$ |
| $G$ | $6.674\times10^{-11}\ \mathrm{m^3\,kg^{-1}\,s^{-2}}$ |

### Layer boundaries

| Boundary | Depth | Evidence |
|---|---|---|
| Moho | 5–70 km | Pn triplication (1909) |
| 410 discontinuity | 410 km, 13.4 GPa | triplication; olivine → wadsleyite |
| 660 discontinuity | 660 km, 23.4 GPa | triplication; ringwoodite → bridgmanite |
| post-perovskite / D″ top | ~2700 km | discontinuity in the lowermost mantle |
| core–mantle | 2891 km, 136 GPa, ~4000 K | P shadow 103°–143°, no S beyond ~103° (1913) |
| inner-core | 5150 km, 329 GPa, ~5700 K | PKIKP inside the shadow (1936) |
| centre | 6371 km, 364 GPa, ~6000 K | — |

### Material properties

| Material | $\rho$ (kg/m³) | $v_p$ (km/s) | $v_s$ (km/s) | $\mu$ (GPa) | $K$ (GPa) |
|---|---|---|---|---|---|
| upper crust | 2700 | 6.0 | 3.5 | 30 | 55 |
| lower crust | 2900 | 6.8 | 3.9 | 45 | 90 |
| upper mantle | 3300 | 8.1 | 4.5 | 67 | 127 |
| lower mantle (top) | 4400 | 11.0 | 6.2 | 170 | 310 |
| outer core | 10,900 | 8.0–10.4 | 0 | 0 | ~650 |
| inner core | 12,900 | 11.2 | 3.5 | 160 | 1300 |

### Thermal and rheological values

| Quantity | Value |
|---|---|
| crustal conductivity $k$ | 2.5–3.5 W m⁻¹ K⁻¹ |
| thermal diffusivity $\kappa$ | $\sim10^{-6}$ m²/s |
| thermal expansivity $\alpha$ | $2$–$3\times10^{-5}$ K⁻¹ |
| upper-crustal heat production | 1–3 μW/m³ |
| mantle heat production | ~0.02 μW/m³ |
| continental surface heat flow | ~65 mW/m² |
| oceanic surface heat flow | ~100 mW/m² (age-dependent) |
| upper-mantle viscosity | $\sim10^{21}$ Pa·s ($\sim10^{20}$ in the asthenosphere) |
| lower-mantle viscosity | $10^{22}$–$10^{23}$ Pa·s |
| Maxwell time | ~250 yr |
| mantle $Ra$ | $\sim1.5\times10^{8}$ |

### Quality factors (PREM)

| Region | $Q_\mu$ | $Q_\kappa$ |
|---|---|---|
| lithosphere | 600 | 57,823 |
| asthenosphere (80–220 km) | 80 | 57,823 |
| transition zone | 143 | 57,823 |
| lower mantle | 312 | 57,823 |
| inner core | 85 | 1328 |

### Elastic thicknesses

| Setting | $T_e$ |
|---|---|
| young oceanic (<10 Ma) | 5–15 km |
| old oceanic (>80 Ma) | 30–45 km |
| stable continental shield | 40–100 km |
| young hot continental crust | <10 km |

### Radiogenic heat sources

| Element | Half-life (Gyr) | Present contribution |
|---|---|---|
| $^{238}$U | 4.47 | 7.7 TW |
| $^{235}$U | 0.704 | 0.34 TW |
| $^{232}$Th | 14.0 | 8.0 TW |
| $^{40}$K | 1.25 | 4.0 TW |
| **total (BSE)** | | **~20 TW** (range 12–30) |

### Resistivities

| Material | $\rho$ (Ω·m) |
|---|---|
| seawater | 0.2 |
| clay | 1–100 |
| saturated sand | 50–500 |
| dry sand | $10^3$–$10^4$ |
| crystalline basement | $10^3$–$10^5$ |
| ice | $10^4$–$10^7$ |
| massive sulphide | $10^{-3}$–1 |

*Values collected from all six modules; see the individual lessons for provenance.*

## Assumed, not taught here

This course sits downstream of several built courses and uses their results
freely. Every row points at the course that derives the fact.

| Fact | Where it's taught |
|---|---|
| The wave equation, d'Alembert solutions, separation of variables | [`pdes`](../pdes/syllabus.md) |
| The heat equation and the semi-infinite solid, $\sqrt{\kappa t}$ penetration | [heat-transfer 2.2](../heat-transfer/lessons/02-02-semi-infinite-solid.md), [`pdes`](../pdes/syllabus.md) |
| Spherical harmonics, Legendre polynomials, multipole expansions | [`mathematical-methods-physics`](../mathematical-methods-physics/syllabus.md) |
| The Helmholtz decomposition into curl-free and divergence-free parts | [fluid-dynamics 2.2](../fluid-dynamics/lessons/02-02-vorticity-circulation.md) |
| Snell's law, Fermat's principle, phase vs group velocity, birefringence | [`waves-optics`](../waves-optics/syllabus.md) |
| The stress tensor, Mohr's circle, elastic moduli as material properties | [mechanics-of-materials 1.1](../mechanics-of-materials/lessons/01-01-normal-shear-stress.md), [4.2](../mechanics-of-materials/lessons/04-02-mohrs-circle.md), [materials-science 4.1](../materials-science/lessons/04-01-elastic-behavior-stress-strain.md) |
| Beam on an elastic foundation (the flexure equation's origin) | [`mechanics-of-materials`](../mechanics-of-materials/syllabus.md) |
| Creep mechanisms, dislocation motion, Arrhenius kinetics | [materials-science 4.2](../materials-science/lessons/04-02-plastic-deformation-schmid.md), [4.4](../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md) |
| Crystal structures, unit cells, polymorphic phase transitions | [materials-science 1.2](../materials-science/lessons/01-02-crystal-structures-unit-cells.md), [3.1](../materials-science/lessons/03-01-phase-diagrams-lever-rule.md) |
| The Clausius–Clapeyron relation | [`thermodynamics-physics`](../thermodynamics-physics/syllabus.md) |
| Rayleigh–Bénard instability, Stokes flow, boundary layers | [fluid-dynamics 4.3](../fluid-dynamics/lessons/04-03-instability-kh-rb.md), [3.3](../fluid-dynamics/lessons/03-03-stokes-flow.md), [3.4](../fluid-dynamics/lessons/03-04-boundary-layers.md) |
| Maxwell's equations, magnetostatics, skin effect, dipole fields | [`em-refresher`](../em-refresher/syllabus.md), [`circuits`](../circuits/syllabus.md) |
| Ideal MHD, frozen-in flux, the induction equation | [plasma-physics 3.2](../plasma-physics/lessons/03-02-ideal-mhd-frozen-flux.md) |
| The radioactive decay law and decay chains | [intro-nuclear-engineering 1.3](../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) |
| Least squares, normal equations, conditioning, the SVD | [numerical-analysis 5.1](../numerical-analysis/lessons/05-01-least-squares-normal-equations.md), [3.2](../numerical-analysis/lessons/03-02-cholesky-conditioning.md), [linalg-refresher 3.2](../linalg-refresher/lessons/03-02-diagonalization.md) |
| Ridge regression and the bias–variance trade-off | [`statistical-learning`](../statistical-learning/syllabus.md) |
| Fourier transforms, sampling, filtering, deconvolution | [`fourier-analysis`](../fourier-analysis/syllabus.md), [`signals-systems`](../signals-systems/syllabus.md) |
| Rigid-body rotation, Euler's theorem, free precession | [`mechanics-refresher`](../mechanics-refresher/syllabus.md) |
| Ocean tides — the tidal potential, equilibrium and dynamical tides, the 3.5 TW budget | [oceanography 5.3](../oceanography/lessons/05-03-tides-equilibrium-dynamical.md) |
| Satellite altimetry and GRACE as **ocean** instruments | [oceanography 6.5](../oceanography/lessons/06-05-observing-the-ocean.md) |
| Earthquake statistics and hazard — Gutenberg–Richter, recurrence, intensity, ground motion | [`geology` 2.7](../geology/lessons/02-07-earthquakes-seismic-hazard.md) |
| Rocks, minerals, structural geology, plate boundaries as field objects | [`geology`](../geology/syllabus.md) |
| Radiometric dating practice, closure temperature, isochrons | [`geology` 4.2](../geology/lessons/04-02-radiometric-dating.md) |
| Glacial history and the Pleistocene ice sheets | [`geology` 3.4](../geology/lessons/03-04-glaciers-ice-ages.md) |
| Partial melting and incompatible-element enrichment | [`geology` 1.3](../geology/lessons/01-03-how-the-earth-melts.md) |
| Differentiation, planetary thermal evolution, comparative planetology | [`planetary-science`](../planetary-science/syllabus.md) |
| Geostrophic balance and the Taylor–Proudman constraint in rotating fluids | [atmospheric-science 4.3](../atmospheric-science/lessons/04-03-geostrophic-gradient-wind.md), [oceanography 2.1](../oceanography/lessons/02-01-geostrophy-dynamic-method.md) |

## Pitfalls

### Signs and conventions

- Stress is **tension positive** in geophysics, so most Earth stresses are negative. *([1.1](lessons/01-01-the-elastic-earth.md))*
- Incidence angles are measured **from the vertical**, not from the interface. *([1.3](lessons/01-03-wave-equation-ray-theory.md))*
- Seismic rays bend **away** from the vertical with depth — the opposite of light entering glass, because the Earth speeds waves up. *([1.3](lessons/01-03-wave-equation-ray-theory.md))*
- The terrain correction is **always positive**, in every terrain: hills pull up, valleys fail to pull down. *([2.2](lessons/02-02-gravity-anomalies-reductions.md))*
- Inclination is **positive downward**, so a negative $I$ means the southern hemisphere. *([3.1](lessons/03-01-the-main-field.md))*
- Plate rotation rates must be in **radians** before use in $v = \omega R\sin\theta$. *([3.5](lessons/03-05-plate-kinematics-euler-poles.md))*
- Spreading rates are quoted as half-rates or full rates and the two differ by a factor of two — always check which. *([3.4](lessons/03-04-magnetic-anomalies-reversals.md))*
- Plate forces are per **unit length of boundary** (N/m), not per unit area. *([4.5](lessons/04-05-plate-driving-forces.md))*

### What a measurement actually measures

- Travel times give **velocity**, never density — density needs normal modes, mass and moment of inertia. *([1.4](lessons/01-04-travel-time-curves-deep-earth.md), [5.1](lessons/05-01-free-oscillations-earth-density.md))*
- A tomogram shows velocity, not temperature; the conversion assumes composition, melt and water are uniform. *([1.5](lessons/01-05-seismic-tomography.md))*
- Magnitude measures moment, not energy: the conversion runs through stress drop, which varies by an order of magnitude. *([1.6](lessons/01-06-earthquake-sources-magnitude.md))*
- A gravity anomaly determines only the **product** of density contrast and volume; depth comes from the anomaly's shape. *([2.2](lessons/02-02-gravity-anomalies-reductions.md))*
- Apparent resistivity is the resistivity of an equivalent uniform half-space, not the value at any depth. *([6.3](lessons/06-03-electrical-electromagnetic-methods.md))*
- Splitting delay measures the **amount** of aligned rock, not the rate of flow; alignment saturates. *([5.5](lessons/05-05-anisotropy-mantle-flow.md))*
- A seismic section is plotted in **two-way time**, not depth; converting needs the velocity model, with its own errors. *([6.2](lessons/06-02-reflection-seismics.md))*

### Things that are invisible, not merely hard

- A low-velocity zone produces no turning rays, so travel times can bound its depth but never resolve its interior. *([1.4](lessons/01-04-travel-time-curves-deep-earth.md))*
- Palaeomagnetism gives latitude and orientation but **never longitude** — an axially symmetric field cannot encode it. *([3.3](lessons/03-03-paleomagnetism.md))*
- Toroidal internal magnetic field has no external expression at all, and degrees above about 14 are attenuated to invisibility by the mantle. *([3.1](lessons/03-01-the-main-field.md), [3.2](lessons/03-02-the-geodynamo.md))*
- DC resistivity determines only the conductance $\sigma t$ of a thin layer — equivalence. *([6.3](lessons/06-03-electrical-electromagnetic-methods.md))*
- The checkerboard pattern in a row-and-column ray geometry produces exactly zero data change. *([6.1](lessons/06-01-the-linear-inverse-problem.md))*
- **In every case the remedy is a measurement with different sensitivity, not a better measurement of the same kind.** *([6.1](lessons/06-01-the-linear-inverse-problem.md))*

### Model limits worth remembering

- Linear elasticity is superb for seismic waves and wrong for the static compression of the deep Earth. *([1.1](lessons/01-01-the-elastic-earth.md))*
- Ray theory is the approximation and the wave equation is exact — diffraction fills the shadow zone. *([1.3](lessons/01-03-wave-equation-ray-theory.md))*
- Airy and Pratt isostasy are **local**: they fail for loads narrower than about $4.4\alpha$, where flexure takes over. *([2.3](lessons/02-03-isostasy-airy-pratt.md), [2.6](lessons/02-06-flexure-of-the-lithosphere.md))*
- Isostasy contains no time; how fast disequilibrium relaxes is a viscosity question. *([2.3](lessons/02-03-isostasy-airy-pratt.md), [4.6](lessons/04-06-mantle-rheology-post-glacial-rebound.md))*
- Adams–Williamson holds only within a homogeneous adiabatic layer; integrating it across a discontinuity is meaningless. *([5.1](lessons/05-01-free-oscillations-earth-density.md))*
- The half-space cooling model is excellent to about 70 Myr and over-predicts depth beyond it. *([4.3](lessons/04-03-cooling-oceanic-lithosphere.md))*
- Physical dispersion is about 1 percent between body-wave and normal-mode frequencies — larger than most tomographic anomalies. *([5.3](lessons/05-03-attenuation-anelasticity.md))*
- Finite rotations do not commute; only **instantaneous** rotation vectors add. *([3.5](lessons/03-05-plate-kinematics-euler-poles.md))*

### Confusions of name

- S stands for *secondary*, not *surface* — S waves are body waves. *([1.2](lessons/01-02-seismic-wave-zoo.md))*
- The "free-air" correction accounts for height alone, not for air. *([2.2](lessons/02-02-gravity-anomalies-reductions.md))*
- "Ridge push" is a distributed body force, not a push applied at the ridge. *([4.5](lessons/04-05-plate-driving-forces.md))*
- The ellipsoid is not sea level; the geoid is, and they differ by up to 100 m. *([2.1](lessons/02-01-figure-of-the-earth.md), [2.4](lessons/02-04-the-geoid.md))*
- Rigidity $\mu$ is elastic stiffness in shear, and says nothing about strength. *([1.1](lessons/01-01-the-elastic-earth.md))*
- Geodetic and geocentric latitude differ by up to 11 arcminutes — about 20 km on the ground. *([2.1](lessons/02-01-figure-of-the-earth.md))*
- "The Richter scale" has not been used for large earthquakes since the 1970s; the quoted number is $M_w$. *([1.6](lessons/01-06-earthquake-sources-magnitude.md))*
- The mantle's Rayleigh number is $10^8$ and its **Reynolds** number is $10^{-20}$ — vigorously convecting and completely non-turbulent. *([4.4](lessons/04-04-mantle-convection-rayleigh-number.md))*

### Interpretation traps

- The beachball shows two candidate fault planes and no way to choose between them. *([1.6](lessons/01-06-earthquake-sources-magnitude.md))*
- The shadow zone is refraction, not absorption — the energy reappears as PKP. *([1.4](lessons/01-04-travel-time-curves-deep-earth.md))*
- A null SKS measurement is a result (often vertical flow), not a failure. *([5.5](lessons/05-05-anisotropy-mantle-flow.md))*
- A wet-mantle B-type olivine fabric puts the fast axis **perpendicular** to the flow. *([5.5](lessons/05-05-anisotropy-mantle-flow.md))*
- Bright spots are produced by a few percent of gas as readily as by a commercial column; AVO is what separates them. *([6.2](lessons/06-02-reflection-seismics.md))*
- More transmitter power does not buy more depth in EM methods — frequency does. *([6.3](lessons/06-03-electrical-electromagnetic-methods.md))*
- A misfit better than the data uncertainty means the inversion has fitted the noise. *([6.1](lessons/06-01-the-linear-inverse-problem.md))*
- More data along directions already sampled improves precision, never resolution. *([1.5](lessons/01-05-seismic-tomography.md), [6.1](lessons/06-01-the-linear-inverse-problem.md))*
- Less than half the Earth's heat output is being generated now — the popular "the Earth is heated by radioactivity" is wrong by more than a factor of two. *([4.2](lessons/04-02-radiogenic-heat-budget.md))*
- The inner core is solid because pressure raises iron's melting point faster than the geotherm rises, not because it is cold. *([5.4](lessons/05-04-the-core.md))*

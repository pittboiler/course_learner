# Cosmology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Cosmology is one metric, three equations of motion, and a long list of things
that fell out of equilibrium. The FLRW metric fixes the geometry; the Friedmann,
fluid, and acceleration equations turn a list of ingredients into a history
$a(t)$; and every fossil we observe — helium, the neutrino sea, the CMB, the
cosmic web — is a moment when some reaction lost the race against $H$. This card
carries the conventions (signs, curvature, normalization), the dilution table
that decides which component rules when, the three distance measures side by
side, the thermal-history timeline with its temperatures and redshifts, and the
numbers you would otherwise go digging through twenty lessons for.

## Notation

Cosmology recycles letters ruthlessly. Check
[Symbols that collide](#symbols-that-collide) before trusting one out of context.

| Symbol | Means | First used |
|---|---|---|
| $H_0$ | Hubble constant — today's fractional expansion rate, quoted in km/s/Mpc | [1.1](lessons/01-01-cosmological-principle-hubble-law.md) |
| $t_H$, $d_H$ | Hubble time $1/H_0$ and Hubble distance $c/H_0$ — the crude age and size scales | [1.1](lessons/01-01-cosmological-principle-hubble-law.md) |
| $h$ | $H_0$ in units of 100 km/s/Mpc; soaks up the $H_0$ uncertainty in $\Omega h^2$ | [2.3](lessons/02-03-relics-neutrino-background.md) |
| $a(t)$ | scale factor — the one dial that stretches every distance; dimensionless, $a_0\equiv1$ today | [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md) |
| $\chi$, $r$ | comoving radial coordinate — the frozen grid label a galaxy keeps forever | [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md) |
| $d_p$ | proper distance $a(t)\chi$ — what a chain of rulers would read *now* | [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md) |
| $k$ | curvature constant: $>0$ closed, $=0$ flat, $<0$ open. Only its **sign** is physical | [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md) |
| $H(t)$, $H(z)$ | Hubble parameter $\dot a/a$ at any epoch — the running version of $H_0$ | [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md) |
| $z$ | redshift — how much light stretched in transit; $1+z=1/a$ | [1.3](lessons/01-03-redshift-cosmic-distances.md) |
| $D_C$, $D_L$, $D_A$ | comoving / luminosity / angular-diameter distance — three different numbers | [1.3](lessons/01-03-redshift-cosmic-distances.md) |
| $t_L$ | lookback time — how long ago the light left | [1.3](lessons/01-03-redshift-cosmic-distances.md) |
| $\rho$, $p$ | **mass** density (kg/m³) and pressure (Pa); $\rho$ always includes every component | [1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md) |
| $w$ | equation-of-state parameter $p/(\rho c^2)$ — the one number that sets dilution | [1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md) |
| $\Lambda$, $\rho_\Lambda$ | cosmological constant (m⁻²) and the dark-energy density it stands for | [1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md) |
| $\rho_c$ | critical density — the amount of stuff that makes space exactly flat | [1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md) |
| $\Omega_i$, $\Omega_k$ | each component's share of critical; $\Omega_k$ is bookkeeping, not a substance | [1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md) |
| $T_0$ | today's CMB temperature, 2.725 K — the thermometer everything is read against | [2.1](lessons/02-01-hot-big-bang-thermal-equilibrium.md) |
| $g_*$, $g_{*s}$ | effective relativistic degrees of freedom for energy / for entropy | [2.1](lessons/02-01-hot-big-bang-thermal-equilibrium.md) |
| $\Gamma$, $\langle\sigma v\rangle$ | reaction rate per particle (s⁻¹) and the thermally averaged cross-section times speed (m³/s) | [2.2](lessons/02-02-decoupling-freeze-out.md) |
| $T_\nu$, $N_{\rm eff}$ | neutrino background temperature, and the relativistic-species bookkeeping number | [2.3](lessons/02-03-relics-neutrino-background.md) |
| $\eta$ (baryons) | baryon-to-photon ratio $n_b/n_\gamma\approx6\times10^{-10}$ — the reason everything is late | [2.4](lessons/02-04-big-bang-nucleosynthesis.md) |
| $Y_p$ | primordial helium **mass** fraction, $\approx0.25$ | [2.4](lessons/02-04-big-bang-nucleosynthesis.md) |
| $x_e$ | free-electron fraction $n_e/n_b$: 1 fully ionized, 0 fully neutral | [3.1](lessons/03-01-recombination-origin-cmb.md) |
| $\sigma_{\rm T}$ | Thomson cross-section — how strongly a free electron scatters light | [3.1](lessons/03-01-recombination-origin-cmb.md) |
| $\delta$ | density contrast $(\rho-\bar\rho)/\bar\rho$ — the fractional lumpiness | [3.2](lessons/03-02-gravitational-instability-linear-growth.md) |
| $c_s$ | sound speed of the fluid in question (plasma, gas cloud) | [3.2](lessons/03-02-gravitational-instability-linear-growth.md) |
| $\lambda_J$, $k_J$, $M_J$ | Jeans length, wavenumber, and mass — the smallest thing gravity can collapse | [3.2](lessons/03-02-gravitational-instability-linear-growth.md) |
| $\sigma$ (cluster) | line-of-sight velocity dispersion — the spread of galaxy speeds in a cluster | [3.3](lessons/03-03-dark-matter-evidence-candidates.md) |
| $k$ (Fourier) | comoving wavenumber, $\lambda=2\pi/k$. **Large $k$ means small scales** | [3.4](lessons/03-04-matter-power-spectrum.md) |
| $P(k)$, $T(k)$ | matter power spectrum and the transfer function that processes it | [3.4](lessons/03-04-matter-power-spectrum.md) |
| $\delta_D$ | Dirac delta — enforces that distinct Fourier modes are independent | [3.4](lessons/03-04-matter-power-spectrum.md) |
| $n_s$, $\sigma_8$ | primordial spectral index, and the clustering amplitude on 8 $h^{-1}$Mpc spheres | [3.4](lessons/03-04-matter-power-spectrum.md) |
| $R$ (baryons) | baryon loading $3\rho_b/4\rho_\gamma$ — dead weight the photon pressure must push | [3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md) |
| $r_s$ | comoving sound horizon at last scattering, $\approx150$ Mpc — the standard ruler | [3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md) |
| $\ell$, $C_\ell$, $\mathcal D_\ell$ | multipole (angular scale $\approx\pi/\ell$), its variance, and the plotted $\ell(\ell+1)C_\ell/2\pi$ | [3.6](lessons/03-06-reading-cmb-power-spectrum.md) |
| $\chi_H$ | comoving particle horizon — everything that could ever have influenced you | [4.1](lessons/04-01-horizon-flatness-problems.md) |
| $\Omega$ (total) | total density parameter; $\Omega-1 = kc^2/(aH)^2$ measures departure from flat | [4.1](lessons/04-01-horizon-flatness-problems.md) |
| $\phi$, $V(\phi)$ | the inflaton field and its potential — the vacuum-like energy that inflates | [4.2](lessons/04-02-inflationary-mechanism.md) |
| $\epsilon$, $\eta$ (slow roll) | slope-squared and curvature of $V$, relative to its height; both must be $\ll1$ | [4.2](lessons/04-02-inflationary-mechanism.md) |
| $N$ | number of e-folds, $\ln(a_{\rm end}/a_{\rm start})$; need $N\gtrsim60$ | [4.2](lessons/04-02-inflationary-mechanism.md) |
| $M_{\rm Pl}$ | reduced Planck mass $\approx2.4\times10^{18}$ GeV; set to 1 in inflation problems | [4.2](lessons/04-02-inflationary-mechanism.md) |
| $R_H$ | comoving Hubble radius $1/(aH)$ — shrinks during inflation, grows after | [4.3](lessons/04-03-primordial-perturbations-inflation.md) |
| $\mathcal P_{\mathcal R}$, $r$ | scalar curvature power spectrum, and the tensor-to-scalar ratio $16\epsilon$ | [4.3](lessons/04-03-primordial-perturbations-inflation.md) |
| $\mu$, $m$, $M$ | distance modulus, apparent magnitude, absolute magnitude | [4.4](lessons/04-04-dark-energy-cosmic-acceleration.md) |
| $L$, $f$ | luminosity (W) and received flux (W/m²) | [4.5](lessons/04-05-cosmic-distance-ladder-observational.md) |
| $p$ (parallax) | parallax half-angle in arcseconds; $d[\text{pc}]=1/p$ | [4.5](lessons/04-05-cosmic-distance-ladder-observational.md) |

## Definitions

### Cosmological principle

Averaged over scales beyond about 100 Mpc, no place and no direction in the
universe is special. Formally: the matter distribution is **homogeneous**
(translation invariant) and **isotropic** (rotation invariant about any point).
Isotropy about *every* point implies homogeneity.

*Introduced:* [1.1](lessons/01-01-cosmological-principle-hubble-law.md)

### Hubble's law

Recession speed grows in exact proportion to distance — the only expansion law
with no center, because additivity of velocities forces linearity.

$$v = H_0\,d, \qquad H_0 \approx 70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$$

*Introduced:* [1.1](lessons/01-01-cosmological-principle-hubble-law.md)

### FLRW metric

The unique spacetime consistent with homogeneity and isotropy: a plain time
direction plus a frozen spatial map whose every length is multiplied by one
time-dependent factor.

$$ds^2 = -c^2\,dt^2 + a(t)^2\left[\frac{dr^2}{1-kr^2} + r^2\,d\Omega^2\right], \qquad d\Omega^2 = d\theta^2 + \sin^2\theta\,d\phi^2$$

Signature $(-,+,+,+)$; $t$ is cosmic time (the proper time of a comoving
observer); $k$ is the curvature constant. See
[Conventions this course fixes](#conventions-this-course-fixes).

*Introduced:* [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md)

### Scale factor

One dimensionless zoom knob, a function of time alone, that multiplies every
distance in the universe at once. Normalized to $a_0 = 1$ today, so $a = 0.5$
means every separation was half its present value.

$$d_p(t) = a(t)\,\chi$$

*Introduced:* [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md)

### Comoving coordinates

The frozen grid labels galaxies are painted on. A galaxy carried only by
expansion never changes its comoving position; only the scale factor multiplying
it changes. Because $a_0=1$, comoving distance is "proper distance in today's
units."

*Introduced:* [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md)

### Hubble parameter

The fractional growth rate of the scale factor — the percent-per-unit-time by
which every distance is currently swelling. Hubble's law is its time-derivative,
not a separate fact.

$$H(t) \equiv \frac{\dot a}{a}, \qquad \dot d_p = H\,d_p$$

*Introduced:* [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md)

### Cosmological redshift

Light is a wave riding a stretching sheet: the wavelength grows by exactly the
factor the universe grew. Not a Doppler shift — nothing is moving through space.

$$1+z = \frac{\lambda_{\rm obs}}{\lambda_{\rm emit}} = \frac{a_0}{a(t_{\rm e})} = \frac{1}{a}$$

*Introduced:* [1.3](lessons/01-03-redshift-cosmic-distances.md)

### Comoving distance

The ruler distance measured today, built by summing $c\,dz/H$ over redshift
shells. The one distance that keeps increasing monotonically with $z$.

$$D_C = \int_0^z \frac{c\,dz'}{H(z')}$$

*Introduced:* [1.3](lessons/01-03-redshift-cosmic-distances.md)

### Luminosity distance

Whatever distance makes a standard candle's brightness obey the inverse-square
law. Inflated by $(1+z)$ relative to $D_C$ because expansion both redshifts each
photon and slows their arrival rate.

$$f = \frac{L}{4\pi D_L^2}, \qquad D_L = (1+z)\,D_C \quad (\text{flat})$$

*Introduced:* [1.3](lessons/01-03-redshift-cosmic-distances.md)

### Angular-diameter distance

Whatever distance makes a standard ruler's angular size obey the small-angle
law. Shrunk by $(1+z)$ because the universe was smaller when the light left — so
it peaks and then *falls* at high $z$.

$$\theta = \frac{\ell_{\rm phys}}{D_A}, \qquad D_A = \frac{D_C}{1+z} \quad (\text{flat})$$

*Introduced:* [1.3](lessons/01-03-redshift-cosmic-distances.md)

### Distance duality

Brightness-distance and size-distance of the *same* source differ by exactly
$(1+z)^2$. It needs only photon conservation and null geodesics, so a measured
violation would mean exotic physics.

$$D_L = (1+z)^2 D_A$$

*Introduced:* [1.3](lessons/01-03-redshift-cosmic-distances.md)

### Friedmann equation

The universe's energy conservation law: the expansion rate squared is set by how
much stuff there is, minus the curvature, plus the cosmological constant.

$$H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3}$$

*Introduced:* [1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md)

### Fluid equation

The first law of thermodynamics for a comoving box: density falls both because
expansion dilutes it and because pressure does work pushing the boundary out.

$$\dot\rho + 3H\!\left(\rho + \frac{p}{c^2}\right) = 0$$

*Introduced:* [1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md)

### Acceleration equation

What brakes the universe is not density alone but density **plus three times
pressure** — which is why enough negative pressure flips gravity from a brake to
a throttle.

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\!\left(\rho + \frac{3p}{c^2}\right) + \frac{\Lambda c^2}{3}$$

Any two of Friedmann, fluid, and acceleration imply the third.

*Introduced:* [1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md)

### Equation of state

One number relating a component's pressure to its density, and the only thing
that decides how it dilutes.

$$w \equiv \frac{p}{\rho c^2} \quad\Longrightarrow\quad \rho \propto a^{-3(1+w)}$$

Matter $w=0$, radiation $w=\tfrac13$, cosmological constant $w=-1$; acceleration
requires $w<-\tfrac13$.

*Introduced:* [1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md)

### Critical density

The exact amount of stuff whose gravity makes space flat — more curves it
closed, less curves it open. About 5 protons per cubic metre.

$$\rho_c = \frac{3H^2}{8\pi G}, \qquad \rho_{c,0} \approx 9\times10^{-27}\ \mathrm{kg\,m^{-3}}$$

*Introduced:* [1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md)

### Density parameter

Each ingredient measured as a fraction of critical, so the Friedmann equation
becomes a bookkeeping identity that always sums to one.

$$\Omega_i \equiv \frac{\rho_i}{\rho_c}, \qquad \Omega_k \equiv -\frac{kc^2}{a^2H^2}, \qquad \Omega_m+\Omega_r+\Omega_\Lambda+\Omega_k = 1$$

*Introduced:* [1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md)

### Effective degrees of freedom

A weighted headcount of the *internal states* of every particle that is still
relativistic — bosons at full weight, fermions at $7/8$. It falls in steps as
the universe cools and species annihilate away.

$$g_* = \sum_{\text{bosons}} g_i + \frac78\sum_{\text{fermions}} g_i$$

$g_{*s}$ is the same headcount weighted for entropy; the two differ only once
some species have decoupled at a different temperature.

*Introduced:* [2.1](lessons/02-01-hot-big-bang-thermal-equilibrium.md)

### Freeze-out

A species stays glued to equilibrium only while it reacts faster than the
universe expands. When the reaction clock loses the race, its comoving
population locks in forever.

$$\Gamma = n\langle\sigma v\rangle, \qquad \Gamma \gtrsim H \Rightarrow \text{coupled}, \qquad \Gamma \lesssim H \Rightarrow \text{frozen out}$$

Because $\Gamma/H$ generically falls as $T$ drops, **everything** eventually
freezes out.

*Introduced:* [2.2](lessons/02-02-decoupling-freeze-out.md)

### Hot relic vs cold relic

Two fates, decided by whether the particle was still relativistic when it
decoupled.

- **Hot relic:** decouples while $T \gtrsim m$; its comoving number is simply
  frozen and it free-streams (neutrinos).
- **Cold relic:** decouples while $T \lesssim m$, after its equilibrium
  abundance has been Boltzmann-crushed as $n_{\rm eq}\propto(mT)^{3/2}e^{-m/T}$.
  The survivors satisfy $\Omega_{\rm relic}\propto1/\langle\sigma v\rangle$ —
  stronger annihilators leave *less* behind.

*Introduced:* [2.2](lessons/02-02-decoupling-freeze-out.md)

### Cosmic neutrino background

The oldest relic there is: neutrinos that stopped colliding at $T\approx1$ MeV,
one second in, and have coasted ever since — about 340 per cubic centimetre
today, permanently colder than the photons because only the photons were
reheated by electron–positron annihilation.

$$\frac{T_\nu}{T_\gamma} = \left(\frac{4}{11}\right)^{1/3} \approx 0.714, \qquad T_\nu \approx 1.95\ \mathrm{K}$$

*Introduced:* [2.3](lessons/02-03-relics-neutrino-background.md)

### Baryon-to-photon ratio

There are about a billion and a half photons for every baryon, and that single
number is why every reaction in the early universe completes far later than its
binding energy suggests.

$$\eta \equiv \frac{n_b}{n_\gamma} \approx 6\times10^{-10}, \qquad \eta_{10} \equiv 10^{10}\eta \approx 274\,\Omega_b h^2$$

*Introduced:* [2.4](lessons/02-04-big-bang-nucleosynthesis.md)

### Primordial helium mass fraction

The fraction of baryonic **mass** locked into helium-4 in the first three
minutes, fixed almost entirely by the neutron-to-proton ratio when fusion
finally started.

$$Y_p = \frac{2\,r}{1+r}, \qquad r \equiv \frac{n_n}{n_p} \approx \frac17 \;\Longrightarrow\; Y_p \approx 0.25$$

*Introduced:* [2.4](lessons/02-04-big-bang-nucleosynthesis.md)

### Saha equation

The ionization balance: how a Boltzmann factor favouring neutral atoms fights a
phase-space factor favouring free electrons. It is what locates recombination.

$$\frac{1-x_e}{x_e^2} = n_b\left(\frac{2\pi m_e k_BT}{h^2}\right)^{-3/2} e^{\,B/k_BT}, \qquad B = 13.6\ \mathrm{eV}$$

*Introduced:* [3.1](lessons/03-01-recombination-origin-cmb.md)

### Recombination and last scattering

Two distinct events a hair apart. **Recombination** is atoms forming, i.e. $x_e$
crashing, near $z\approx1100$. **Decoupling / last scattering** is photons
breaking free, when $\Gamma_{\rm T} = n_e\sigma_{\rm T}c$ drops below $H$, near
$z_{\rm ls}\approx1090$ — necessarily a touch later, since the scattering rate
is proportional to $x_e$.

*Introduced:* [3.1](lessons/03-01-recombination-origin-cmb.md)

### Density contrast

The fractional over- or under-density at a point — zero is exactly average, $+1$
is twice the mean, $-1$ is empty. Linear theory is $|\delta|\ll1$.

$$\delta(\mathbf x, t) \equiv \frac{\rho(\mathbf x,t) - \bar\rho(t)}{\bar\rho(t)}$$

*Introduced:* [3.2](lessons/03-02-gravitational-instability-linear-growth.md)

### Jeans length

The size at which self-gravity beats pressure. Bigger lumps collapse; smaller
ones just ring as sound waves.

$$\omega^2 = c_s^2k^2 - 4\pi G\bar\rho, \qquad k_J = \frac{\sqrt{4\pi G\bar\rho}}{c_s}, \qquad \lambda_J = c_s\sqrt{\frac{\pi}{G\bar\rho}}$$

Modes with $k<k_J$ (wavelength longer than $\lambda_J$) collapse. The enclosed
mass $M_J\approx\tfrac43\pi\bar\rho(\lambda_J/2)^3$ is the **Jeans mass**.

*Introduced:* [3.2](lessons/03-02-gravitational-instability-linear-growth.md)

### Linear growth equation

Gravitational runaway, throttled by the expansion. The middle term is **Hubble
friction** — the drag that turns exponential collapse into a power law.

$$\ddot\delta + 2H\dot\delta - 4\pi G\bar\rho_m\,\delta = 0$$

Two solutions: a growing mode $\delta_+$ and a decaying mode $\delta_-$; only
$\delta_+$ survives at late times.

*Introduced:* [3.2](lessons/03-02-gravitational-instability-linear-growth.md)

### Cold dark matter

Matter that is non-relativistic *when structure begins forming* (so its
free-streaming length is negligible) and does not feel photon pressure (so it
starts clumping at matter–radiation equality, long before baryons can). "Cold"
is a statement about speed then, not temperature now.

*Introduced:* [3.3](lessons/03-03-dark-matter-evidence-candidates.md)

### Matter power spectrum

The variance of density ripples per Fourier mode — how much the universe clumps
at each scale. Statistics is all you can predict: the phases are random.

$$\big\langle\tilde\delta(\mathbf k)\,\tilde\delta^*(\mathbf k')\big\rangle = (2\pi)^3\,\delta_D(\mathbf k-\mathbf k')\,P(k)$$

$P(k)$ is the Fourier partner of the two-point correlation function
$\xi(r) = \langle\delta(\mathbf x)\delta(\mathbf x+\mathbf r)\rangle$
(Wiener–Khinchin).

*Introduced:* [3.4](lessons/03-04-matter-power-spectrum.md)

### Transfer function

Everything that happened between the primordial spectrum and today, packaged
into one factor. Its whole content is Mészáros suppression: modes that entered
the horizon during radiation domination lost amplitude.

$$P(k) = P_i(k)\,T^2(k)\times(\text{growth}), \qquad P_i(k)\propto k^{n_s}$$

*Introduced:* [3.4](lessons/03-04-matter-power-spectrum.md)

### Spectral index

The tilt of the primordial spectrum away from perfect scale invariance.
$n_s = 1$ is the featureless Harrison–Zel'dovich case; the measured
$n_s\approx0.965$ is a slight **red tilt**, marginally more power on large
scales.

*Introduced:* [3.4](lessons/03-04-matter-power-spectrum.md), predicted in [4.3](lessons/04-03-primordial-perturbations-inflation.md)

### Sound horizon

The farthest a pressure wave could travel in the photon–baryon plasma before
recombination froze the music. A length we know from physics, hence cosmology's
**standard ruler**.

$$r_s = \int_0^{t_{\rm ls}} \frac{c_s\,dt}{a(t)} \approx 150\ \mathrm{Mpc\ (comoving)}$$

*Introduced:* [3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md)

### Baryon loading

The extra inertia baryons add to the photon–baryon fluid without adding any
pressure. It slows the sound and makes the fluid sag deeper into wells, breaking
the compression/rarefaction symmetry.

$$R \equiv \frac{3\rho_b}{4\rho_\gamma}, \qquad c_s = \frac{c}{\sqrt{3(1+R)}}$$

*Introduced:* [3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md)

### Sachs–Wolfe effect

On scales larger than the sound horizon nothing had time to oscillate, so the
temperature we see is just gravitational redshift from climbing out of the
primordial potential wells — the flat plateau at low multipole.

$$\frac{\Delta T}{T} = \frac13\Phi$$

*Introduced:* [3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md)

### Silk damping

Recombination is not instantaneous, so photons random-walk out of the smallest
hot and cold spots before it completes, erasing them. Power falls roughly
exponentially beyond the third peak — the **damping tail**.

*Introduced:* [3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md), read off in [3.6](lessons/03-06-reading-cmb-power-spectrum.md)

### Angular power spectrum

How much temperature variance lives at each angular scale — the CMB's tone
chart, and the only part of the map that carries cosmological information.

$$\frac{\Delta T}{T}(\hat n) = \sum_{\ell m} a_{\ell m}Y_{\ell m}(\hat n), \qquad C_\ell = \big\langle|a_{\ell m}|^2\big\rangle, \qquad \mathcal D_\ell \equiv \frac{\ell(\ell+1)}{2\pi}C_\ell$$

*Introduced:* [3.6](lessons/03-06-reading-cmb-power-spectrum.md)

### Cosmic variance

At low $\ell$ there are only $2\ell+1$ values of $m$ to average over, so $C_\ell$
is intrinsically noisy no matter how good the instrument. An irreducible
uncertainty from having only one sky.

*Introduced:* [3.6](lessons/03-06-reading-cmb-power-spectrum.md)

### Particle horizon

The largest comoving distance any signal could have crossed since $t=0$ — the
radius of everything that could possibly have influenced you. In radiation- or
matter-dominated expansion the integral converges, which is exactly what makes
the horizon problem sharp.

$$\chi_H(t) = \int_0^t \frac{c\,dt'}{a(t')}, \qquad d_H = a\,\chi_H \sim \frac{c}{H}$$

*Introduced:* [4.1](lessons/04-01-horizon-flatness-problems.md)

### Comoving Hubble radius

The reach of causal physics in one expansion time, in comoving units. It is the
single quantity behind the horizon problem, the flatness problem, and the
inflationary cure.

$$R_H = \frac{1}{aH} = \frac{1}{\dot a}$$

Decelerating expansion makes it **grow** (fresh regions keep entering the
horizon); accelerating expansion makes it **shrink**.

*Introduced:* [4.1](lessons/04-01-horizon-flatness-problems.md), central to [4.3](lessons/04-03-primordial-perturbations-inflation.md)

### Inflation

A brief early phase of accelerated expansion, driven by a scalar field stuck
high on a nearly flat potential so that it behaves like vacuum energy
($w\approx-1$) until it rolls off.

$$\rho c^2 = \tfrac12\dot\phi^2 + V(\phi), \qquad p = \tfrac12\dot\phi^2 - V(\phi), \qquad \ddot\phi + 3H\dot\phi + V'(\phi) = 0$$

With $V$ dominant, $H$ is nearly constant and $a\propto e^{Ht}$ (quasi–de
Sitter).

*Introduced:* [4.2](lessons/04-02-inflationary-mechanism.md)

### Slow-roll parameters

Two dimensionless measures of how flat the potential is: the squared steepness
of the slope and the curvature, each relative to the potential's height.
Inflation runs while both are small and **ends** when $\epsilon\approx1$.

$$\epsilon = \frac{M_{\rm Pl}^2}{2}\left(\frac{V'}{V}\right)^2, \qquad \eta = M_{\rm Pl}^2\,\frac{V''}{V}$$

*Introduced:* [4.2](lessons/04-02-inflationary-mechanism.md)

### E-folds

How many times the universe multiplied by $e$ in size during inflation. Solving
the horizon and flatness problems needs $N\gtrsim60$.

$$N \equiv \int H\,dt = \ln\frac{a_{\rm end}}{a_{\rm start}} = \int_{\phi_{\rm end}}^{\phi}\frac{V}{V'}\,d\phi' \quad (M_{\rm Pl}=1)$$

*Introduced:* [4.2](lessons/04-02-inflationary-mechanism.md)

### Reheating

Inflation leaves the universe cold and empty, so the inflaton must oscillate
about the minimum of $V$ and decay its stored energy into a thermal bath. That
bath is the initial condition for the standard hot Big Bang.

*Introduced:* [4.2](lessons/04-02-inflationary-mechanism.md)

### Horizon crossing and freezing

A comoving mode starts inside the horizon as quantum jitter, **exits** when
$k = aH$ as the comoving Hubble radius shrinks past it, freezes (causal physics
cannot act across it), and **re-enters** later as a classical density
perturbation of the frozen amplitude.

$$\langle\delta\phi^2\rangle_k \approx \left(\frac{H}{2\pi}\right)^2 \quad\text{at crossing}$$

*Introduced:* [4.3](lessons/04-03-primordial-perturbations-inflation.md)

### Tensor-to-scalar ratio

The amplitude of primordial gravitational waves (frozen quantum fluctuations of
the metric itself) relative to the density seeds. It depends only on $\epsilon$,
so it measures the energy scale of inflation directly.

$$r = 16\epsilon, \qquad r \lesssim 0.03 \ \text{(current bound, from CMB B-modes)}$$

*Introduced:* [4.3](lessons/04-03-primordial-perturbations-inflation.md)

### Dark energy

Any component with $w<-\tfrac13$, whose negative pressure makes gravity repel.
The simplest case is a cosmological constant ($w=-1$, density never dilutes);
**quintessence** replaces it with a slowly rolling scalar field and a mildly
time-varying $w$.

$$\rho_{\rm DE}\propto a^{-3(1+w)}, \qquad w(a) = w_0 + w_a(1-a), \qquad w_{\rm obs} = -1.0\pm0.05$$

*Introduced:* [4.4](lessons/04-04-dark-energy-cosmic-acceleration.md)

### Distance modulus

Distance expressed on a logarithmic brightness scale: how much fainter a source
looks than it would at 10 pc. Five magnitudes is a factor of ten in distance.

$$\mu \equiv m - M = 5\log_{10}\!\left(\frac{d}{10\ \mathrm{pc}}\right), \qquad d = 10^{(\mu+5)/5}\ \mathrm{pc}$$

For cosmological sources the $d$ here is the luminosity distance $D_L$.

*Introduced:* [4.4](lessons/04-04-dark-energy-cosmic-acceleration.md), used throughout [4.5](lessons/04-05-cosmic-distance-ladder-observational.md)

### Standard candle vs standard ruler

A **candle** has known luminosity, so its measured flux gives $D_L$ (Cepheids,
Type Ia supernovae). A **ruler** has known length, so its measured angle gives
$D_A$ (the BAO sound horizon). They fail in completely different ways, which is
why agreement between them is worth something.

*Introduced:* [4.5](lessons/04-05-cosmic-distance-ladder-observational.md)

### Hubble tension

The two roads to $H_0$ disagree by about 8 percent at roughly $5\sigma$: the
local distance ladder gives $73\pm1$, while fitting the CMB with $\Lambda$CDM
and evolving forward gives $67.4\pm0.5$ km/s/Mpc. Either a systematic hides in
one road, or $\Lambda$CDM is missing physics near recombination.

*Introduced:* [4.5](lessons/04-05-cosmic-distance-ladder-observational.md), previewed in [1.1](lessons/01-01-cosmological-principle-hubble-law.md)

## Formulas and rules

### Conventions this course fixes

Carry these into every problem; half the sign errors in cosmology are a
convention read the wrong way.

| Choice | This course |
|---|---|
| Metric signature | $(-,+,+,+)$: $ds^2 = -c^2dt^2 + a^2[\,\cdots]$ |
| Scale factor normalization | $a_0 \equiv a(t_0) = 1$ **today**, so $1+z = 1/a$ and $D_C$ is a present-day length |
| Curvature sign | $k>0$ closed (sphere, $\Omega>1$), $k=0$ flat, $k<0$ open (saddle, $\Omega<1$) |
| Curvature magnitude | unphysical — rescale $r$ and absorb $\lvert k\rvert$ into $a$; conventionally $k\in\{+1,0,-1\}$ |
| Curvature in Friedmann | enters as $-kc^2/a^2$, i.e. positive curvature *subtracts* from $H^2$ |
| Curvature as a parameter | $\Omega_k \equiv -kc^2/(a^2H^2)$, so $\Omega_k<0$ for a closed universe and $\Omega-1 = kc^2/(a^2H^2)$ |
| $\rho$ | **mass** density (kg/m³); an energy density must be divided by $c^2$ before adding |
| $\Lambda$ | units m⁻²; foldable into $\rho$ via $\rho_\Lambda = \Lambda c^2/(8\pi G)$, and then dropped from the equations |
| $w$ | $p/(\rho c^2)$, dimensionless — the $c^2$ is the bookkeeping check |

*From* [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md), [1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md), [1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md)

### The three geometries

| $k$ | $\Omega$ | Spatial slice | Triangle angles | Fate (matter only) |
|---|---|---|---|---|
| $k>0$ | $>1$ | sphere — finite, unbounded | sum $>180^\circ$ | recollapse |
| $k=0$ | $=1$ | plane — infinite | sum $=180^\circ$ | expand forever, asymptotically halting |
| $k<0$ | $<1$ | saddle — infinite | sum $<180^\circ$ | expand forever |

Measured: $\Omega_k\approx0$, flat to within a percent.

*From* [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md), [1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md)

### The master equation

Every distance, age, and growth calculation in this course runs on this one
line. Give it four $\Omega$'s and $H_0$ and it hands back the expansion rate at
any epoch.

$$H(z) = H_0\sqrt{\Omega_r(1+z)^4 + \Omega_m(1+z)^3 + \Omega_k(1+z)^2 + \Omega_\Lambda}$$

Time and redshift convert by

$$dt = \frac{da}{aH} = -\frac{dz}{(1+z)H(z)}, \qquad t_0 = \int_0^1\frac{da}{a\,H(a)}, \qquad t_L = \int_0^z \frac{dz'}{(1+z')H(z')}$$

*From* [1.3](lessons/01-03-redshift-cosmic-distances.md), [1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md)

### The dilution table — who wins when

The whole of cosmic history in one table: whoever dilutes slowest eventually
rules. Read right-to-left to run the clock backward.

| Component | $w$ | $\rho \propto$ | Term in $H(z)^2/H_0^2$ | $H \propto$ | Dominates | $a(t)$ while dominant |
|---|---|---|---|---|---|---|
| Radiation (photons, relativistic $\nu$) | $+\tfrac13$ | $a^{-4}$ | $\Omega_r(1+z)^4$ | $a^{-2}$ | $z \gtrsim 3400$ | $a\propto t^{1/2}$ |
| Matter (baryons + CDM) | $0$ | $a^{-3}$ | $\Omega_m(1+z)^3$ | $a^{-3/2}$ | $0.3 \lesssim z \lesssim 3400$ | $a\propto t^{2/3}$ |
| Curvature (bookkeeping, not a fluid) | $-\tfrac13$ effective | $a^{-2}$ | $\Omega_k(1+z)^2$ | $a^{-1}$ | never, if $\Omega_k\approx0$ | $a\propto t$ (coasting) |
| Dark energy ($\Lambda$) | $-1$ | $a^{0}$ | $\Omega_\Lambda$ | const | $z \lesssim 0.3$ | $a\propto e^{H_\Lambda t}$ |

The radiation exponent is one steeper than matter's because expansion both
spreads the photons over more volume *and* redshifts each one ($E\propto1/a$).
$w=-\tfrac13$ is the exact dividing line: above it the expansion decelerates,
below it accelerates, and on it the universe coasts.

*From* [1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md), [1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md)

### The turning points

| Event | Condition | Redshift |
|---|---|---|
| Matter–radiation equality | $\Omega_m(1+z)^3 = \Omega_r(1+z)^4$ | $1+z_{\rm eq} = \Omega_m/\Omega_r \approx 3400$ |
| Acceleration begins | $\rho_m = 2\rho_\Lambda$ (i.e. $\ddot a=0$) | $1+z_{\rm acc} = (2\Omega_\Lambda/\Omega_m)^{1/3} \approx 1.67$, so $z\approx0.67$ |
| Matter–$\Lambda$ equality | $\Omega_m(1+z)^3 = \Omega_\Lambda$ | $1+z_{m\Lambda} = (\Omega_\Lambda/\Omega_m)^{1/3} \approx 1.3$, so $z\approx0.3$ |

Acceleration switches on *before* the densities become equal — the factor of 2
comes from the $3p$ in the acceleration equation.

*From* [1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md), [4.4](lessons/04-04-dark-energy-cosmic-acceleration.md)

### The $\Lambda$CDM concordance budget

| Component | Symbol | Today | Physical density |
|---|---|---|---|
| Matter (total) | $\Omega_m$ | $\approx0.31$ | $\Omega_m h^2 \approx 0.14$ |
| — baryons | $\Omega_b$ | $\approx0.05$ | $\Omega_b h^2 \approx 0.022$ |
| — cold dark matter | $\Omega_c$ | $\approx0.26$ | $\Omega_c h^2 \approx 0.12$ |
| Dark energy | $\Omega_\Lambda$ | $\approx0.69$ | — |
| Radiation | $\Omega_r$ | $\approx9\times10^{-5}$ | $\Omega_r h^2$ fixed by $T_0$ |
| Curvature | $\Omega_k$ | $\approx0$ | — |

Ages and amplitudes: $t_0 \approx 13.8$ Gyr, $n_s\approx0.965$,
$\sigma_8\approx0.8$, $\ell_1\approx220$.

These are **today's** fractions, not constants of nature.

*From* [1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md), [3.6](lessons/03-06-reading-cmb-power-spectrum.md)

### The distance zoo, side by side

Confusing these is the classic error. At $z\gtrsim0.5$ they genuinely differ.

| Measure | Answers | Flat-FLRW formula | Ratio to $D_C$ | Behaviour with $z$ |
|---|---|---|---|---|
| Comoving $D_C$ | "how far, with a ruler laid down today?" | $\displaystyle\int_0^z \frac{c\,dz'}{H(z')}$ | $1$ | rises monotonically, tends to a finite horizon |
| Luminosity $D_L$ | "how far, from how dim?" — use with fluxes and magnitudes | $(1+z)\,D_C$ | $1+z$ | rises fastest |
| Angular-diameter $D_A$ | "how far, from how big it looks?" — use with angular sizes | $D_C/(1+z)$ | $1/(1+z)$ | rises, **peaks**, then falls |

Locked together by $D_L = (1+z)^2 D_A$. For $z\ll1$ all three collapse to
$cz/H_0$, recovering $cz \approx H_0 D$.

Worked benchmark (flat, matter-only Einstein–de Sitter, $H = H_0(1+z)^{3/2}$):

$$D_C = \frac{2c}{H_0}\left[1 - \frac{1}{\sqrt{1+z}}\right], \qquad D_A \text{ peaks at } z_\star = 1.25$$

Past that peak, more distant galaxies subtend a *larger* angle — their light left
when the space around them was tiny.

*From* [1.3](lessons/01-03-redshift-cosmic-distances.md)

### Thermal history: the thermometer and the clock

$$T(a) = \frac{T_0}{a} = (1+z)\,T_0, \qquad \rho_r c^2 = \frac{\pi^2}{30}\,\frac{(k_BT)^4}{(\hbar c)^3}\,g_*, \qquad H \propto \sqrt{g_*}\,T^2$$

In the radiation era $a\propto t^{1/2}$ so $H = 1/(2t)$, giving the clock

$$t \approx 2.4\,g_*^{-1/2}\left(\frac{k_BT}{1\ \mathrm{MeV}}\right)^{-2}\ \mathrm{s}, \qquad\text{rule of thumb: } 1\ \mathrm{MeV}\leftrightarrow1\ \mathrm{s}$$

Entropy in a comoving volume is conserved, $g_{*s}(aT)^3 = \text{const}$ — which
is what reheats the survivors when a species annihilates.

*From* [2.1](lessons/02-01-hot-big-bang-thermal-equilibrium.md)

### Counting $g_*$

The lessons state $g_*=10.75$ but not the rest of the ladder; here it is.

| Epoch | Relativistic species | $g_*$ | $g_{*s}$ |
|---|---|---|---|
| Above the electroweak scale | full Standard Model | $106.75$ | $106.75$ |
| Below the QCD transition, above $\sim1$ MeV | $\gamma$, $e^\pm$, $3\nu$ | $10.75$ | $10.75$ |
| Photons plus $e^\pm$ only (the coupled bath) | $\gamma$, $e^\pm$ | $11/2$ | $11/2$ |
| After $e^+e^-$ annihilation | $\gamma$ plus decoupled $\nu$ | $3.36$ | $3.94$ |
| Photons alone | $\gamma$ | $2$ | $2$ |

Per-species weights: photon $g=2$ (polarizations); $e^-$ and $e^+$ together
$g=4$; each neutrino flavour with its antineutrino $g=2$, so three flavours give
$g=6$. Fermions enter at $7/8$. Worked example:
$g_* = 2 + \tfrac78(4+6) = 10.75$.

The split between $g_*$ and $g_{*s}$ after annihilation is entirely the neutrino
temperature: energy carries $(4/11)^{4/3}$, entropy carries $(4/11)$.

*From* [2.1](lessons/02-01-hot-big-bang-thermal-equilibrium.md), [2.3](lessons/02-03-relics-neutrino-background.md)

### Freeze-out arithmetic

$$\frac{\Gamma}{H} \propto \frac{T^5}{T^2} = T^3 \quad \text{(weak interactions)} \;\Longrightarrow\; \text{decoupling is inevitable}$$

$$\Gamma \sim G_F^2T^5, \quad H \sim \frac{T^2}{M_{\rm Pl}} \;\Longrightarrow\; T_{\rm dec} \sim \left(G_F^2M_{\rm Pl}\right)^{-1/3} \approx 1\ \mathrm{MeV}$$

The governing equation, if you want the full dynamics:

$$\dot n + 3Hn = -\langle\sigma v\rangle\big(n^2 - n_{\rm eq}^2\big)$$

with $3Hn$ pure dilution and the right side driving $n$ toward equilibrium until
it shuts off. Cold-relic abundance:

$$\Omega_\chi h^2 \approx \frac{3\times10^{-27}\ \mathrm{cm^3\,s^{-1}}}{\langle\sigma v\rangle} \;\Longrightarrow\; \langle\sigma v\rangle \sim 3\times10^{-26}\ \mathrm{cm^3\,s^{-1}} \text{ gives } \Omega_\chi h^2 \approx 0.1$$

— the WIMP miracle: a weak-scale cross-section lands on the observed dark-matter
density with no tuning.

*From* [2.2](lessons/02-02-decoupling-freeze-out.md), [2.3](lessons/02-03-relics-neutrino-background.md)

### Neutrinos as radiation

$$\frac{T_\nu}{T_\gamma} = \left(\frac{4}{11}\right)^{1/3}, \qquad \rho_r = \rho_\gamma\left[1 + \frac78\left(\frac{4}{11}\right)^{4/3}N_{\rm eff}\right] = 1.69\,\rho_\gamma, \qquad N_{\rm eff} = 3.046$$

Neutrinos raise $\Omega_r$ by 69 percent over photons alone, which pushes
matter–radiation equality to *lower* redshift. Dropping them gets $z_{\rm eq}$
wrong.

*From* [2.3](lessons/02-03-relics-neutrino-background.md)

### Nucleosynthesis in four steps

| Step | Physics | Number |
|---|---|---|
| Equilibrium $n/p$ | Boltzmann factor in the mass gap | $r = e^{-\Delta mc^2/k_BT}$, $\Delta mc^2 = 1.293$ MeV |
| Freeze-out | $\Gamma_{\rm weak} = H$ | $T_f\approx0.8$ MeV, $t\approx1$ s, $r_f\approx1/5$ |
| Deuterium bottleneck | need the photon tail above $B_D$ to thin to $\sim\eta$ | $k_BT \lesssim B_D/\ln(1/\eta) \approx 0.1$ MeV; actual release $\approx0.07$ MeV, $t\approx250$ s |
| Neutron decay in the gap | $\tau_n = 880$ s, each lost neutron becomes a proton | $r$ falls $1/5 \to 1/7$ |

Then $Y_p = 2r/(1+r) \approx 0.25$. Leftover deuterium is the sensitive dial:
more baryons burn the chain further, so D/H **falls** as $\eta$ rises, and the
observed $\mathrm{D/H}\approx2.5\times10^{-5}$ gives $\Omega_b h^2\approx0.022$.
(Open problem: predicted ${}^7\mathrm{Li}$ is about three times what is
observed.)

*From* [2.4](lessons/02-04-big-bang-nucleosynthesis.md)

### Thermal-history timeline

The whole run, hot to cold. Temperatures in energy units unless stated.

| Epoch | $k_BT$ | $T$ (K) | $z$ | $t$ | What happens |
|---|---|---|---|---|---|
| GUT symmetry breaking | $\sim10^{16}$ GeV | — | — | $\sim10^{-38}$ s | monopoles would form here — inflation must dilute them away |
| Inflation and reheating | reheats to $\lesssim10^{16}$ GeV | — | — | ends $\sim10^{-34}$ s | $N\gtrsim60$ e-folds, then the inflaton decays into the hot bath |
| QCD transition | $\sim150$ MeV | $\sim10^{12}$ | — | $\sim10^{-5}$ s | quarks confine into hadrons; $g_*$ drops sharply |
| Neutrino decoupling | $\sim1$ MeV | $\sim10^{10}$ | $\sim4\times10^{9}$ | $\sim1$ s | weak $\Gamma$ falls below $H$; the C$\nu$B is born |
| $n/p$ freeze-out | $0.8$ MeV | $\sim10^{10}$ | — | $\approx1$ s | ratio locks at $\approx1/5$ |
| $e^+e^-$ annihilation | $\lesssim0.5$ MeV | $\sim6\times10^{9}$ | — | few s | photons reheated; $T_\nu/T_\gamma=(4/11)^{1/3}$ |
| Big Bang nucleosynthesis | $\approx0.07$ MeV | $\sim10^{9}$ | $\sim4\times10^{8}$ | $\approx3$ min | deuterium survives; $Y_p\approx0.25$ |
| Matter–radiation equality | $\approx0.8$ eV | $\approx9300$ | $\approx3400$ | $\sim5\times10^4$ yr | dark-matter perturbations start growing |
| Recombination | $\approx0.3$ eV | $\approx3000$ | $\approx1100$ | $\approx3.8\times10^5$ yr | atoms form, $x_e$ crashes |
| Last scattering | — | $\approx3000$ | $\approx1090$ | $\approx3.8\times10^5$ yr | photons free-stream; CMB released |
| Acceleration begins | — | $\approx4.6$ | $\approx0.67$ | $\sim7$ Gyr | $\ddot a$ turns positive |
| Matter–$\Lambda$ equality | — | $\approx3.6$ | $\approx0.3$ | $\sim10$ Gyr | dark energy takes the lead |
| Today | $\approx2.3\times10^{-4}$ eV | $2.725$ | $0$ | $13.8$ Gyr | — |

Note the two clocks: $t\propto T^{-2}$ holds only in the radiation era, so the
MeV-to-seconds rule gets BBN right but not the 380,000 years to recombination,
which happens in the matter era.

*From* [2.1](lessons/02-01-hot-big-bang-thermal-equilibrium.md), [2.2](lessons/02-02-decoupling-freeze-out.md), [2.3](lessons/02-03-relics-neutrino-background.md), [2.4](lessons/02-04-big-bang-nucleosynthesis.md), [3.1](lessons/03-01-recombination-origin-cmb.md), [4.1](lessons/04-01-horizon-flatness-problems.md), [4.2](lessons/04-02-inflationary-mechanism.md), [4.4](lessons/04-04-dark-energy-cosmic-acceleration.md)

### Why everything is late: the $\eta$ argument

Both nucleosynthesis and recombination stall far below their binding energies,
for the identical reason — there are $1/\eta\sim10^9$ photons per baryon, so the
exponential high-energy *tail* still holds enough destroyers long after the
average photon has gone soft. The condition is always "tail fraction
$\sim e^{-B/k_BT}$ drops to $\sim\eta$", i.e.

$$\frac{B}{k_BT} \sim \ln\frac{1}{\eta} \approx 21$$

| Reaction | Binding energy | Naive $k_BT$ | Actual $k_BT$ | Delay factor |
|---|---|---|---|---|
| $p+n\to d+\gamma$ | $B_D = 2.22$ MeV | $\sim2$ MeV | $\approx0.07$ MeV | $\sim30$ |
| $p+e^-\to H+\gamma$ | $B = 13.6$ eV | $\sim13.6$ eV | $\approx0.3$ eV | $\sim40$ |

*From* [2.4](lessons/02-04-big-bang-nucleosynthesis.md), [3.1](lessons/03-01-recombination-origin-cmb.md)

### Structure growth by era

| Era | Growing mode | Why |
|---|---|---|
| Radiation | $\delta \propto \ln a$ (essentially frozen) | Mészáros suppression: radiation drives fast expansion but is too smooth to clump |
| Matter (Einstein–de Sitter) | $\delta_+ \propto a \propto t^{2/3}$ | the workhorse regime; decaying mode is $\delta_-\propto t^{-1}$ |
| $\Lambda$ | $\delta_+ \to$ const | accelerated expansion outruns collapse |

Einstein–de Sitter background values for checking solutions:
$H = 2/(3t)$ and $\bar\rho_m = 1/(6\pi Gt^2)$.

Rough budget: dark matter grows from $a_{\rm eq}\approx3\times10^{-4}$ to
$a_\Lambda\approx0.75$, a factor $\sim2500$ — which takes CMB-era seeds of
$10^{-5}$ only to $\delta\sim0.03$. Everything beyond that is nonlinear
collapse, and it is why the head start before recombination (available only to
non-baryonic matter) is mandatory.

*From* [3.2](lessons/03-02-gravitational-instability-linear-growth.md), [3.3](lessons/03-03-dark-matter-evidence-candidates.md)

### Weighing dark matter

$$v(r) = \sqrt{\frac{GM(r)}{r}} \;\Longrightarrow\; v = \text{const} \Rightarrow M(r)\propto r,\ \ \rho(r) = \frac{v^2}{4\pi Gr^2}\propto r^{-2}$$

$$M_{\rm dyn} \sim \frac{\sigma^2 R}{G} \quad\text{(virial, cluster velocity dispersion } \sigma\text{, size } R)$$

Four independent probes, all agreeing: flat rotation curves, cluster velocity
dispersions and X-ray hydrostatic masses, gravitational lensing, and the CMB
peak heights. The Bullet Cluster adds the decisive one — the lensing mass is
spatially *offset* from the X-ray gas that carries most of the baryons, which no
force law tied to the visible baryons can reproduce.

Hot vs cold is a free-streaming question: hot dark matter erases everything
below $\lambda_{\rm fs}$ (top-down, ruled out); cold dark matter preserves all
scales (bottom-up hierarchical, observed).

*From* [3.3](lessons/03-03-dark-matter-evidence-candidates.md)

### The shape of $P(k)$

$$P(k) \propto \begin{cases} k^{\,n_s} & k \ll k_{\rm eq} \quad (T\to1)\\[4pt] k^{\,n_s-4} & k \gg k_{\rm eq} \quad (T\propto k^{-2})\end{cases}$$

The slope changes by exactly $-4$ across the turnover, whatever $n_s$ is. With
$n_s=1$ that is a $k^{+1}$ rise into a $k^{-3}$ fall. The bend sits at the scale
that entered the horizon at matter–radiation equality:

$$k_{\rm eq} = a_{\rm eq}H_{\rm eq} = \sqrt2\,H_0\frac{\Omega_m}{\sqrt{\Omega_r}} \propto \Omega_m h^2, \qquad k_{\rm eq} \approx 0.01\ h/\mathrm{Mpc}$$

so the *location* of the bend alone measures the physical matter density.
Amplitude conventions:

$$\Delta^2(k) = \frac{k^3P(k)}{2\pi^2}, \qquad \sigma_R^2 = \int\frac{dk}{k}\,\Delta^2(k)\,W^2(kR), \qquad \sigma_8 \equiv \sigma_{R=8h^{-1}\mathrm{Mpc}} \approx 0.8$$

$\Delta^2$ keeps rising toward small scales even where $P(k)$ falls — which is
why small structures go nonlinear first.

*From* [3.4](lessons/03-04-matter-power-spectrum.md)

### Reading the CMB spectrum

$$\theta \approx \frac{\pi}{\ell}, \qquad k_n r_s = n\pi \ (n=1,2,3,\dots), \qquad \theta_1 \approx \frac{r_s}{D_A}, \qquad \ell_1 \approx \frac{\pi D_A}{r_s}$$

| Feature of $\mathcal D_\ell$ | Physics | What it measures |
|---|---|---|
| Low-$\ell$ plateau | Sachs–Wolfe: gravitational redshift on super-horizon scales | overall fluctuation amplitude |
| First-peak location, $\ell_1\approx220$ | the sound horizon as a standard ruler | spatial curvature: $\Omega_k\approx0$ |
| Peak spacing | the acoustic scale $\pi D_A/r_s \approx 300$ | the same ruler, less contaminated by driving |
| 1st-to-2nd height ratio | baryon loading boosts compressions (odd peaks), not rarefactions (even) | $\Omega_b h^2 \approx 0.022$ |
| Third peak and overall heights | radiation driving, set by $z_{\rm eq}$ | $\Omega_m h^2$ |
| Damping tail | Silk / photon diffusion during a non-instantaneous recombination | the diffusion scale |

With $r_s\approx150$ Mpc and $D_A\approx14$ Gpc, $\theta_1\approx0.011$ rad
$\approx0.6^\circ$ and $\ell_1\approx290$; the observed first peak sits near 220
because radiation driving shifts it. Either way it is "a few hundred," and that
alone forces flatness — closed geometry would push it toward $\ell\sim100$, open
toward $\ell\sim400$–$600$.

*From* [3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md), [3.6](lessons/03-06-reading-cmb-power-spectrum.md)

### The initial-condition problems

$$|\Omega-1| = \frac{|k|c^2}{(aH)^2} \propto \begin{cases} a^2 & \text{radiation era}\\ a & \text{matter era}\end{cases}$$

so flatness is a **repeller**: today's $|\Omega_0-1|\lesssim10^{-2}$ extrapolates
back to $\sim10^{-60}$ at the Planck time. Meanwhile the causal patch at last
scattering subtends only

$$\theta_H \approx \frac{\chi_H(a_{\rm ls})}{\chi_{\rm ls}} \approx \frac{1}{\sqrt{1+z_{\rm ls}}} \approx 1.7^\circ,$$

tiling the sky with $\sim10^4$ never-connected patches that agree to
$10^{-5}$. Add the monopole problem and all three are the same statement: in
decelerating expansion $1/(aH)$ *grows*. Accelerated expansion reverses it —
$aH\propto e^{Ht}$ makes $|\Omega-1|\propto e^{-2Ht}$ and blows one thermalized
speck across the whole sky.

*From* [4.1](lessons/04-01-horizon-flatness-problems.md), [4.2](lessons/04-02-inflationary-mechanism.md)

### Inflationary observables

$$\mathcal P_{\mathcal R}(k) \approx \frac{1}{8\pi^2}\frac{H^2}{\epsilon M_{\rm Pl}^2}\bigg|_{k=aH}, \qquad n_s - 1 = -6\epsilon + 2\eta, \qquad r = 16\epsilon$$

Worked benchmark — chaotic inflation, $V = \tfrac12m^2\phi^2$, in $M_{\rm Pl}=1$
units:

| Quantity | Result |
|---|---|
| $\epsilon = \eta$ | $2/\phi^2$ |
| End of inflation | $\epsilon=1 \Rightarrow \phi_{\rm end} = \sqrt2$ |
| E-folds | $N(\phi) = (\phi^2 - 2)/4$, so $N=60 \Rightarrow \phi \approx 15.6$ |
| Spectral index | $n_s = 1 - 8/\phi^2 \approx 0.967$ — matches observation |
| Tensor ratio | $r = 32/\phi^2 \approx 0.13$ — **ruled out** by $r\lesssim0.03$ |

A model can pass one test and fail another. Note the tension of signs: a larger
$\epsilon$ *lowers* the scalar amplitude ($\mathcal P_{\mathcal R}\propto1/\epsilon$)
but *raises* $r$.

Inflation's three confirmed predictions: perturbations that are nearly
scale-invariant with a small red tilt, adiabatic, and Gaussian.

*From* [4.2](lessons/04-02-inflationary-mechanism.md), [4.3](lessons/04-03-primordial-perturbations-inflation.md)

### The distance ladder

$$f = \frac{L}{4\pi d^2}, \qquad d[\mathrm{pc}] = \frac{1}{p[\mathrm{arcsec}]}, \qquad M = a\log_{10}(P/\mathrm{day}) + b \ \text{(Leavitt law)}$$

| Rung | Method | Reach | Calibrated by |
|---|---|---|---|
| Parallax | pure geometry (Gaia) | $\sim1$ kpc | nothing — it is the tape measure |
| Cepheids | period–luminosity law | tens of Mpc | parallax, in the overlap |
| Type Ia supernovae | near-uniform peak brightness at the Chandrasekhar mass | Gpc, into the Hubble flow | Cepheids in shared host galaxies |
| BAO | the sound horizon $r_s$ as a standard **ruler** | Gpc | no candle calibration needed |

The ladder is serial: a systematic in any rung propagates undiluted into $H_0$.

$$D_L(z) = (1+z)\,c\int_0^z\frac{dz'}{H(z')}, \qquad \mu = 5\log_{10}\!\left(\frac{D_L}{10\ \mathrm{pc}}\right)$$

A universe with $\Omega_\Lambda>0$ predicts a *higher* Hubble diagram than a
decelerating one; the 1998 supernovae landed on the high curve
($\Delta\mu\approx0.25$ mag at $z=0.5$).

*From* [4.4](lessons/04-04-dark-energy-cosmic-acceleration.md), [4.5](lessons/04-05-cosmic-distance-ladder-observational.md)

### Constants and conversions

Used constantly, stated nowhere as a table.

| Quantity | Value |
|---|---|
| $c$ | $3.00\times10^5$ km/s |
| $G$ | $6.674\times10^{-11}\ \mathrm{m^3\,kg^{-1}\,s^{-2}}$ |
| 1 pc | $3.086\times10^{16}$ m $= 3.26$ ly |
| 1 Mpc | $3.086\times10^{19}$ km $= 3.086\times10^{22}$ m $= 3.26$ Mly |
| 1 yr | $3.156\times10^7$ s |
| $M_\odot$ | $1.99\times10^{30}$ kg |
| $H_0 = 70$ km/s/Mpc | $2.27\times10^{-18}\ \mathrm{s^{-1}}$ |
| $t_H = 1/H_0$ | $\approx14.0$ Gyr (at $h=0.7$); generally $9.78\,h^{-1}$ Gyr |
| $d_H = c/H_0$ | $\approx4300$ Mpc $\approx14$ Gly |
| $k_B$ | $8.617\times10^{-5}$ eV/K, i.e. $1\ \mathrm{eV}\leftrightarrow1.16\times10^4$ K |
| $T_0$, $T_\nu$ | $2.725$ K, $1.95$ K |
| $n_\gamma$, $n_\nu$ | $\approx411\ \mathrm{cm^{-3}}$, $\approx340\ \mathrm{cm^{-3}}$ (all flavours) |
| $\sigma_{\rm T}$ | $6.65\times10^{-25}\ \mathrm{cm^2}$ |
| $m_ec^2$ | $0.511$ MeV |
| $(m_n-m_p)c^2$ | $1.293$ MeV |
| $\tau_n$ | $880$ s |
| $B_D$, $B_{\rm H}$ | $2.22$ MeV, $13.6$ eV |
| $G_F$ | $1.17\times10^{-5}\ \mathrm{GeV^{-2}}$ |
| $M_{\rm Planck}$ | $1.22\times10^{19}$ GeV; reduced $M_{\rm Pl} = 2.4\times10^{18}$ GeV |

*Used throughout, first in* [1.1](lessons/01-01-cosmological-principle-hubble-law.md)

## Assumed, not taught here

This is a Tier 2 course: it uses the following without deriving them.

| Fact | Where it's taught |
|---|---|
| The FLRW metric as the unique homogeneous, isotropic solution | [relativity 6.6](../relativity/lessons/06-06-flrw-metric.md) |
| The Friedmann equations from the Einstein field equations | [relativity 6.7](../relativity/lessons/06-07-friedmann-equations.md), [5.3](../relativity/lessons/05-03-einstein-field-equations.md) |
| Null geodesics, proper time, and the meaning of a metric | [relativity 4.3](../relativity/lessons/04-03-metric-proper-time.md), [4.5](../relativity/lessons/04-05-geodesics.md) |
| Gravitational light bending (the basis of lensing masses) | [relativity 6.2](../relativity/lessons/06-02-orbits-precession-light-bending.md) |
| Gravitational redshift (behind the Sachs–Wolfe effect) | [relativity 5.5](../relativity/lessons/05-05-newtonian-limit-redshift.md) |
| The stress-energy tensor and how pressure gravitates | [relativity 3.3](../relativity/lessons/03-03-stress-energy-tensor.md) |
| Fermi–Dirac and Bose–Einstein occupation numbers, and the $7/8$ | [stat-mech 4.2](../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md) |
| The Boltzmann factor $e^{-E/k_BT}$ and the canonical ensemble | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md) |
| Blackbody / photon-gas thermodynamics and $\rho\propto T^4$ | [stat-mech 4.3](../stat-mech/lessons/04-03-photon-gas-blackbody.md) |
| Entropy and adiabatic (isentropic) expansion | [stat-mech 1.3](../stat-mech/lessons/01-03-entropy-microcanonical.md), [2.1](../stat-mech/lessons/02-01-laws-of-thermodynamics.md) |
| Chemical potential, and equilibrium for a reaction that changes particle number | [stat-mech 1.4](../stat-mech/lessons/01-04-temperature-pressure-chemical-potential.md), [3.5](../stat-mech/lessons/03-05-grand-canonical-ensemble.md) |
| The Saha ionization equilibrium in its stellar-atmosphere form | [astrophysics 1.3](../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md) |
| Thomson scattering and electron-scattering opacity | [astrophysics 2.2](../astrophysics/lessons/02-02-energy-transport-opacity.md) |
| The virial theorem used on a cluster of galaxies | [astrophysics 1.4](../astrophysics/lessons/01-04-gravitational-dynamics-virial.md) |
| Parallax, magnitudes, standard candles, and the ladder's astronomy | [astrophysics 1.1](../astrophysics/lessons/01-01-scales-luminosity-distance-ladder.md) |
| Type Ia supernovae and the Chandrasekhar mass | [astrophysics 3.4](../astrophysics/lessons/03-04-stellar-death-supernovae.md), [4.1](../astrophysics/lessons/04-01-white-dwarfs-chandrasekhar.md) |
| The Jeans criterion applied to a collapsing star-forming cloud | [astrophysics 3.1](../astrophysics/lessons/03-01-star-formation-jeans.md) |
| Weak interactions and the Fermi constant $G_F$ | [nuclear-particle 5.1](../nuclear-particle-physics/lessons/05-01-weak-interaction.md) |
| Cross-sections, and what $\langle\sigma v\rangle$ means microscopically | [nuclear-particle 3.3](../nuclear-particle-physics/lessons/03-03-cross-sections-count-rate.md) |
| Neutron beta decay, $n\to p+e^-+\bar\nu_e$, and $\tau_n$ | [nuclear-particle 2.3](../nuclear-particle-physics/lessons/02-03-beta-decay-neutrino.md) |
| Nuclear binding energies (deuterium, ${}^4$He) | [nuclear-particle 1.2](../nuclear-particle-physics/lessons/01-02-binding-energy-mass-defect.md) |
| GUTs, monopoles, and dark-matter candidates (WIMPs, axions, steriles) | [nuclear-particle 5.5](../nuclear-particle-physics/lessons/05-05-beyond-standard-model.md) |
| Neutrino masses and flavours | [nuclear-particle 5.4](../nuclear-particle-physics/lessons/05-04-neutrinos-oscillations.md) |
| Zero-point fluctuations of a quantum harmonic oscillator | [quantum-mechanics 3.2](../quantum-mechanics/lessons/03-02-harmonic-oscillator-ladder-operators.md) |
| Spherical harmonics as a basis on the sphere | [quantum-mechanics 4.3](../quantum-mechanics/lessons/04-03-spherical-harmonics-rigid-rotor.md) |
| Fourier transforms, spectral density, and Wiener–Khinchin | [fourier-analysis 2.1](../fourier-analysis/lessons/02-01-series-to-fourier-transform.md), [2.4](../fourier-analysis/lessons/02-04-plancherel-uncertainty.md) |
| The Dirac delta and its sifting property | [fourier-analysis 3.1](../fourier-analysis/lessons/03-01-dirac-delta-sifting.md) |
| The damped oscillator (the shape of both $\delta$ and $\phi$ equations) | [mechanics-refresher 3.2](../mechanics-refresher/lessons/03-02-damped-driven-oscillations.md) |
| Simple harmonic motion (the acoustic-oscillation analogy) | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |

## Pitfalls

### Symbols that collide

- $r$ is the comoving radial coordinate in [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md), the neutron-to-proton ratio in [2.4](lessons/02-04-big-bang-nucleosynthesis.md), and the tensor-to-scalar ratio in [4.3](lessons/04-03-primordial-perturbations-inflation.md).
- $\eta$ is the baryon-to-photon ratio in [2.4](lessons/02-04-big-bang-nucleosynthesis.md) and the second slow-roll parameter in [4.2](lessons/04-02-inflationary-mechanism.md). Nothing connects them.
- $R$ is a radius almost everywhere but the baryon loading $3\rho_b/4\rho_\gamma$ in [3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md); $R_H$ is the comoving Hubble radius in [4.3](lessons/04-03-primordial-perturbations-inflation.md).
- $k$ is the curvature constant in [1.2](lessons/01-02-flrw-metric-comoving-coordinates.md) and a Fourier wavenumber from [3.2](lessons/03-02-gravitational-instability-linear-growth.md) onward.
- $\delta$ is the density contrast, $\delta_D$ the Dirac delta — same letter, unrelated jobs. *([3.4](lessons/03-04-matter-power-spectrum.md))*
- $d_H$ is the Hubble distance $c/H_0$ in [1.1](lessons/01-01-cosmological-principle-hubble-law.md) and the proper particle horizon in [4.1](lessons/04-01-horizon-flatness-problems.md); they are comparable but not the same object.
- $p$ is pressure everywhere except [4.5](lessons/04-05-cosmic-distance-ladder-observational.md), where it is a parallax angle; $\sigma$ is a cross-section except in [3.3](lessons/03-03-dark-matter-evidence-candidates.md), where it is a velocity dispersion.

### Expansion, redshift, and distance

- Recession from everywhere is the signature of expanding space with *no* center, not of us sitting at one. *([1.1](lessons/01-01-cosmological-principle-hubble-law.md))*
- Cosmological redshift is not a Doppler shift — galaxies sit still on the comoving grid and the space between them stretches. The Doppler formula only reappears as the $z\ll1$ limit. *([1.1](lessons/01-01-cosmological-principle-hubble-law.md), [1.3](lessons/01-03-redshift-cosmic-distances.md))*
- Superluminal recession beyond $d_H$ violates nothing: relativity caps *local* motion through space, and no galaxy moves through its own local space at all. *([1.1](lessons/01-01-cosmological-principle-hubble-law.md))*
- Homogeneity is about places, isotropy about directions. A radial density profile is isotropic from its center and inhomogeneous. *([1.1](lessons/01-01-cosmological-principle-hubble-law.md))*
- Comoving distance $\chi$ is a fixed label; proper distance $a\chi$ changes with time. They coincide only today, by the $a_0=1$ convention. *([1.2](lessons/01-02-flrw-metric-comoving-coordinates.md))*
- Only the *sign* of $k$ is physical; its magnitude is a units choice absorbed into $a$. *([1.2](lessons/01-02-flrw-metric-comoving-coordinates.md))*
- "The distance" is not one number: fluxes need $D_L$, angular sizes need $D_A$, ruler comparisons need $D_C$. *([1.3](lessons/01-03-redshift-cosmic-distances.md))*
- $D_A$ turns over — past $z_\star$ distant galaxies look *bigger*, and $D_A$ falling does **not** mean the object is getting closer ($D_C$ still rises). *([1.3](lessons/01-03-redshift-cosmic-distances.md))*

### Dynamics and the budget

- Pressure does not push the universe apart. It enters the acceleration equation with a minus sign: positive pressure *decelerates*. There is no "outside" to push against. *([1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md), [4.4](lessons/04-04-dark-energy-cosmic-acceleration.md))*
- Friedmann, fluid, and acceleration are not independent — any two imply the third. Use whichever pair is convenient. *([1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md))*
- Keep the $c^2$ in $p/c^2$: $\rho$ is a *mass* density and $p$ an energy density. Checking that $w$ is dimensionless catches it. *([1.4](lessons/01-04-friedmann-fluid-acceleration-equations.md))*
- $\Omega_k$ is not a substance. There is no curvature fluid; it is defined to make the fractions sum to one. *([1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md))*
- "69 percent dark energy" is a statement about *now*. At $z=1$ matter already dominates; at recombination $\Lambda$ is negligible. *([1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md), [4.4](lessons/04-04-dark-energy-cosmic-acceleration.md))*
- "Cold" dark matter scales as matter ($a^{-3}$) because it is slow, not because it is invisible. The scaling power sorts the budget, not the visibility. *([1.5](lessons/01-05-cosmic-energy-budget-lambda-cdm.md), [3.3](lessons/03-03-dark-matter-evidence-candidates.md))*
- Acceleration is a recent handover, not a permanent feature — matter thins, $\Lambda$ does not. *([4.4](lessons/04-04-dark-energy-cosmic-acceleration.md))*

### Thermal history and relics

- $T\propto1/a$ is not an extra assumption — a stretched blackbody is just a cooler blackbody, and $h\nu/k_BT$ is invariant under expansion. *([2.1](lessons/02-01-hot-big-bang-thermal-equilibrium.md), [3.1](lessons/03-01-recombination-origin-cmb.md))*
- $g_*$ counts *internal states* of *relativistic* species, not particles. It drops in steps as species become non-relativistic and annihilate. *([2.1](lessons/02-01-hot-big-bang-thermal-equilibrium.md))*
- $t\propto T^{-2}$ is a radiation-era result. Recombination happens in the matter era, so the rule gives the ballpark, not 380,000 years. *([2.1](lessons/02-01-hot-big-bang-thermal-equilibrium.md))*
- A species freezes out because it runs out of *interactions*, not particles — and the benchmark is always $H$, never zero or $T$. *([2.2](lessons/02-02-decoupling-freeze-out.md))*
- For a **cold** relic, a bigger $\langle\sigma v\rangle$ leaves *less* behind: efficient annihilators destroy themselves for longer. (A hot relic's abundance is set by its number density at decoupling instead.) *([2.2](lessons/02-02-decoupling-freeze-out.md), [2.3](lessons/02-03-relics-neutrino-background.md))*
- Neutrinos are colder because the *photons were heated*, not because the neutrinos expanded more — both redshift identically. Timing is the whole point. *([2.3](lessons/02-03-relics-neutrino-background.md))*
- $N_{\rm eff}=3.046$ is not 3.046 species. There are exactly three; the excess encodes residual heating and QED corrections. *([2.3](lessons/02-03-relics-neutrino-background.md))*

### Binding energies, bottlenecks, and last scattering

- Fusion does not begin when $k_BT$ drops below $B_D=2.22$ MeV, and recombination does not happen at $13.6$ eV. The photon-to-baryon ratio delays both by a factor of tens. Ionization is a competition against photon *number*, not average energy. *([2.4](lessons/02-04-big-bang-nucleosynthesis.md), [3.1](lessons/03-01-recombination-origin-cmb.md))*
- "Three minutes" is when the deuterium bottleneck *breaks*, not when the $n/p$ ratio froze (that was one second). The gap between them is the neutron-decay window that turns $1/5$ into $1/7$. *([2.4](lessons/02-04-big-bang-nucleosynthesis.md))*
- $Y_p = 2r/(1+r)$ is a **mass** fraction; the 2 comes from four mass units per helium nucleus and one nucleus per two neutrons. *([2.4](lessons/02-04-big-bang-nucleosynthesis.md))*
- Recombination ($x_e$ crashing) and decoupling/last scattering (photons freeing) are two events, and decoupling trails slightly because $\Gamma_{\rm T}\propto x_e$. *([3.1](lessons/03-01-recombination-origin-cmb.md))*

### Structure and its statistics

- Not every overdensity collapses — only those longer than the Jeans length; shorter ones ring as sound waves. *([3.2](lessons/03-02-gravitational-instability-linear-growth.md))*
- Expect a power law, not exponential collapse: the $2H\dot\delta$ Hubble-friction term throttles growth to $\delta\propto a$ in the matter era. *([3.2](lessons/03-02-gravitational-instability-linear-growth.md))*
- Baryons and dark matter do *not* grow together. Baryons are pressure-locked to photons until recombination and then fall into pre-built wells. *([3.2](lessons/03-02-gravitational-instability-linear-growth.md), [3.3](lessons/03-03-dark-matter-evidence-candidates.md))*
- Do not confuse $\delta\propto a$ with $\rho\propto a$: the background density *falls* as $a^{-3}$ while the contrast grows. *([3.2](lessons/03-02-gravitational-instability-linear-growth.md))*
- A flat rotation curve means mass growing as $M(r)\propto r$, not constant mass; a *Keplerian falloff* is what signals a finite central mass. *([3.3](lessons/03-03-dark-matter-evidence-candidates.md))*
- Dark matter is not dim ordinary matter — microlensing rules out compact baryonic objects and the CMB fixes $\Omega_b$ independently. *([3.3](lessons/03-03-dark-matter-evidence-candidates.md))*
- Lensing and dynamics are independent evidence: dynamics assumes equilibrium orbits, lensing assumes nothing but light bending. *([3.3](lessons/03-03-dark-matter-evidence-candidates.md))*
- Large $k$ means *small* scales. The turnover $k_{\rm eq}\approx0.01\ h/\mathrm{Mpc}$ sits at the large-scale end. *([3.4](lessons/03-04-matter-power-spectrum.md))*
- $P(k)$ falling toward small scales does not mean less clumping there — the dimensionless $\Delta^2(k)$ keeps rising, which is why galaxies formed before clusters. *([3.4](lessons/03-04-matter-power-spectrum.md))*
- $P(k)$ (and $C_\ell$) are **variances**. Theory cannot say where a given cluster sits, only how clustered the map is. *([3.4](lessons/03-04-matter-power-spectrum.md), [3.6](lessons/03-06-reading-cmb-power-spectrum.md))*

### The CMB spectrum

- The peaks are frozen imprints photographed at one instant — nothing is oscillating today. *([3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md))*
- Higher peaks are higher *harmonics in wavenumber*, all caught at the same time, not later snapshots. *([3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md))*
- Compressions and rarefactions would give equal peaks with no baryons — the odd/even asymmetry *is* the baryon measurement. *([3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md), [3.6](lessons/03-06-reading-cmb-power-spectrum.md))*
- The low-$\ell$ plateau (Sachs–Wolfe, never oscillated) is different physics from the peaks (sub-horizon acoustics). *([3.5](lessons/03-05-cmb-anisotropies-acoustic-oscillations.md))*
- Averaging $a_{\ell m}$ into $C_\ell$ throws away nothing cosmological for a Gaussian isotropic field — only the luck of our particular sky (cosmic variance). *([3.6](lessons/03-06-reading-cmb-power-spectrum.md))*
- The first-peak location pins the *curvature*, not every parameter: the geometric degeneracy leaves $\Omega_m$, $\Omega_\Lambda$, $H_0$ shufflable at fixed $\ell_1$. *([3.6](lessons/03-06-reading-cmb-power-spectrum.md))*
- "$\ell_1\approx200$" is a mnemonic. The clean prediction $\pi D_A/r_s\approx300$ is the acoustic scale and peak *spacing*; radiation driving shifts the first peak down to 220. *([3.6](lessons/03-06-reading-cmb-power-spectrum.md))*

### Inflation and the initial conditions

- Flatness is a *repeller*, not an attractor, in every decelerating era — that is why finding $\Omega\approx1$ today is a puzzle, not a shrug. *([4.1](lessons/04-01-horizon-flatness-problems.md))*
- Particle horizon, Hubble radius, and event horizon are three different objects that happen to be comparable in size. *([4.1](lessons/04-01-horizon-flatness-problems.md))*
- The horizon problem is caused by causality having too *little* reach early on, not by expansion being too fast. *([4.1](lessons/04-01-horizon-flatness-problems.md))*
- Inflation needs something that *behaves* like a cosmological constant temporarily. A true $\Lambda$ never switches off, which is exactly why it cannot have run the early universe. *([4.2](lessons/04-02-inflationary-mechanism.md))*
- Inflation drives $|\Omega-1|$ toward zero but stops, leaving a residual $\sim e^{-2N}$. The prediction is "flat to observational precision." *([4.2](lessons/04-02-inflationary-mechanism.md))*
- $\epsilon$ (slope) controls acceleration and marks the exit at $\epsilon=1$; $\eta$ (curvature) controls how long slow roll lasts and shapes the tilt. Both must be small; only $\epsilon$ ends it. *([4.2](lessons/04-02-inflationary-mechanism.md))*
- Hubble friction dissipates nothing — $3H\dot\phi$ is expansion redshifting the field's kinetic energy, not heat loss. *([4.2](lessons/04-02-inflationary-mechanism.md))*
- A shrinking comoving Hubble radius does not mean a shrinking universe: $a$ races ahead of a nearly constant $H$. *([4.3](lessons/04-03-primordial-perturbations-inflation.md))*
- "Scale-invariant" means $n_s=1$, not $n_s=0$; the measured $0.965$ is a departure from **1**. *([4.3](lessons/04-03-primordial-perturbations-inflation.md))*
- A super-horizon fluctuation stops oscillating and *freezes* — that constancy is what links an inflationary calculation to a CMB measurement. *([4.3](lessons/04-03-primordial-perturbations-inflation.md))*

### Measuring it all

- Nothing pushes galaxies apart; the *scale factor's* growth rate increases, and bound systems do not expand at all. *([4.4](lessons/04-04-dark-energy-cosmic-acceleration.md))*
- Identifying $\Lambda$ with the quantum vacuum is not a solved problem — it is the $10^{120}$ discrepancy. Pair it with the coincidence problem: why is $\rho_m\sim\rho_\Lambda$ *now*? *([4.4](lessons/04-04-dark-energy-cosmic-acceleration.md))*
- Planck does not measure $H_0$; it measures the CMB and *infers* $H_0$ by assuming $\Lambda$CDM all the way down. That asymmetry is why the tension is interesting. *([4.5](lessons/04-05-cosmic-distance-ladder-observational.md))*
- Candles use known luminosity and flux; rulers use known length and angle. Do not swap the machinery. *([4.5](lessons/04-05-cosmic-distance-ladder-observational.md))*
- The ladder is serial: a 5 percent Cepheid zero-point error is a 5 percent $H_0$ error. Every rung's systematic is the whole ladder's. *([4.5](lessons/04-05-cosmic-distance-ladder-observational.md))*

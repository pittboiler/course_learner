# Astrophysics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Astrophysics is the whole curriculum pointed at the sky, and almost all of it is
inference from light: a flux and a distance give a luminosity, a color gives a
temperature, an orbit or a velocity spread gives a mass. This card carries the
things you'd otherwise stop and hunt for mid-problem — the units and constants,
the magnitude system, the stellar-structure equations, the main-sequence scaling
laws, the endpoint table, and the cosmological dilution laws — plus the
prerequisite facts (blackbody, Fermi gas, tunneling, FLRW) this course uses
without re-deriving.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $L$ | luminosity — total power a source emits, in watts | [1.1](lessons/01-01-scales-luminosity-distance-ladder.md) |
| $F$ | flux — power per unit area *you receive* | [1.1](lessons/01-01-scales-luminosity-distance-ladder.md) |
| $p$ | parallax — the annual angular wobble of a nearby star, in arcseconds | [1.1](lessons/01-01-scales-luminosity-distance-ladder.md) |
| $m$, $M$ | apparent and absolute magnitude — brightness as seen, and as it would be at 10 pc | [1.1](lessons/01-01-scales-luminosity-distance-ladder.md) |
| $\odot$ | subscript for the Sun: $M_\odot$, $R_\odot$, $L_\odot$ — the natural stellar units | [1.1](lessons/01-01-scales-luminosity-distance-ladder.md) |
| $T_{\rm eff}$ | effective temperature — the blackbody temperature of the star's surface | [1.2](lessons/01-02-blackbody-spectra-hr-diagram.md) |
| $\sigma$ | Stefan–Boltzmann constant **here**; velocity dispersion in Modules 1 and 5 (see the clash note) | [1.2](lessons/01-02-blackbody-spectra-hr-diagram.md) |
| $b$ | Wien displacement constant, $2.90\times10^{-3}$ m·K | [1.2](lessons/01-02-blackbody-spectra-hr-diagram.md) |
| $B_\lambda(T)$ | the Planck (blackbody) spectrum at temperature $T$ | [1.2](lessons/01-02-blackbody-spectra-hr-diagram.md) |
| $\tau$ | optical depth — the path length counted in photon mean free paths (dimensionless) | [1.3](lessons/01-03-radiative-transfer-spectral-lines.md) |
| $\kappa$ | opacity — absorbing cross-section *per gram*, cm²/g | [1.3](lessons/01-03-radiative-transfer-spectral-lines.md) |
| $I$, $S$ | specific intensity of a beam, and the source function it relaxes toward | [1.3](lessons/01-03-radiative-transfer-spectral-lines.md) |
| $\rho$ | mass density (later: also the cosmic energy density over $c^2$) | [1.3](lessons/01-03-radiative-transfer-spectral-lines.md) |
| $\sigma$ | line-of-sight velocity dispersion — the spread of Doppler shifts in a bound swarm | [1.4](lessons/01-04-gravitational-dynamics-virial.md) |
| $\langle K\rangle$, $\langle U\rangle$ | time-averaged kinetic and gravitational potential energy of a bound system | [1.4](lessons/01-04-gravitational-dynamics-virial.md) |
| $t_{\rm dyn}$, $t_{\rm ff}$ | dynamical and free-fall time — the master clock of a self-gravitating blob | [1.4](lessons/01-04-gravitational-dynamics-virial.md) |
| $m(r)$ | mass enclosed *inside* radius $r$ — not the star's total mass | [2.1](lessons/02-01-equations-stellar-structure.md) |
| $\mu$ | mean molecular weight — average mass per free particle, in units of $m_H$ | [2.1](lessons/02-01-equations-stellar-structure.md) |
| $P_c$, $T_c$, $\rho_c$ | central pressure, temperature, density | [2.1](lessons/02-01-equations-stellar-structure.md) |
| $a$ | radiation constant $4\sigma/c$ **here**; the cosmic scale factor in Module 6 | [2.2](lessons/02-02-energy-transport-opacity.md) |
| $\nabla$, $\nabla_{\rm ad}$, $\nabla_{\rm rad}$ | logarithmic gradient $d\ln T/d\ln P$, adiabatic and radiative versions | [2.2](lessons/02-02-energy-transport-opacity.md) |
| $\varepsilon$ | nuclear energy generation rate — joules per kilogram per second | [2.3](lessons/02-03-nuclear-energy-generation.md) |
| $E_0$, $E_G$ | the Gamow peak energy, and the Gamow energy setting the tunneling exponent | [2.3](lessons/02-03-nuclear-energy-generation.md) |
| $n$ | polytropic index **here**; number density in Module 5 | [2.4](lessons/02-04-polytropes-lane-emden.md) |
| $\gamma$ | polytropic exponent $1+1/n$ in $P = K\rho^\gamma$ | [2.4](lessons/02-04-polytropes-lane-emden.md) |
| $\theta$, $\xi$, $\xi_1$ | Lane–Emden density profile, dimensionless radius, and the surface (first zero) | [2.4](lessons/02-04-polytropes-lane-emden.md) |
| $t_{\rm MS}$ | main-sequence lifetime | [2.5](lessons/02-05-main-sequence.md) |
| $L_{\rm Edd}$, $\sigma_T$ | Eddington luminosity, and the Thomson cross-section it's built from | [2.5](lessons/02-05-main-sequence.md) |
| $M_J$, $\lambda_J$, $c_s$ | Jeans mass, Jeans length, isothermal sound speed | [3.1](lessons/03-01-star-formation-jeans.md) |
| $B/A$ | binding energy per nucleon — the curve that peaks at iron-56 | [3.3](lessons/03-03-nucleosynthesis-elements.md) |
| $Q$ | reaction energy release, $(\sum m_{\rm in}-\sum m_{\rm out})c^2$ | [3.3](lessons/03-03-nucleosynthesis-elements.md) |
| $M_{\rm Ch}$ | Chandrasekhar mass — the electron-degeneracy ceiling, $\approx 1.4\,M_\odot$ | [3.4](lessons/03-04-stellar-death-supernovae.md) |
| $\xi(M)$ | the initial mass function — stars born per unit mass interval | [3.5](lessons/03-05-imf-stellar-populations.md) |
| $Z$ | metallicity — mass fraction in everything heavier than helium | [3.5](lessons/03-05-imf-stellar-populations.md) |
| $\mu_e$ | baryons per electron ($\mu_e = 2$ for C/O or He) — sets the electron density | [4.1](lessons/04-01-white-dwarfs-chandrasekhar.md) |
| $\mathcal{C}$ | compactness $GM/Rc^2$ — how close an object is to being a black hole | [4.2](lessons/04-02-neutron-stars-pulsars.md) |
| $r_s$ | Schwarzschild radius $2GM/c^2$ — the event horizon | [4.3](lessons/04-03-black-holes-astrophysics.md) |
| $\eta$ | radiative efficiency of accretion, $L = \eta\dot m c^2$ (also the baryon-to-photon ratio in 6.2) | [4.4](lessons/04-04-accretion.md) |
| $\dot m$, $\dot M$ | mass accretion rate, kg/s | [4.4](lessons/04-04-accretion.md) |
| $h$ | gravitational-wave strain $\Delta L/L$ (also the reduced Hubble constant in 6.6) | [4.5](lessons/04-05-gravitational-waves-mergers.md) |
| $\mathcal{M}$ | chirp mass — the mass combination the inspiral hands you directly | [4.5](lessons/04-05-gravitational-waves-mergers.md) |
| $R_S$ | Strömgren radius of an HII region (capital $S$; not the Schwarzschild $r_s$) | [5.1](lessons/05-01-interstellar-medium.md) |
| $v(R)$, $M(R)$ | rotation curve, and the mass enclosed within galactocentric radius $R$ | [5.2](lessons/05-02-milky-way.md) |
| $\Upsilon$ | mass-to-light ratio $M/L$, in solar units | [5.3](lessons/05-03-galaxies-dark-matter.md) |
| $M_{\rm BH}$ | central supermassive black-hole mass | [5.4](lessons/05-04-galaxy-formation-agn.md) |
| $a(t)$ | cosmic scale factor — one universal stretch factor, $a=1$ today | [6.1](lessons/06-01-expanding-universe-friedmann.md) |
| $H$, $H_0$ | Hubble parameter $\dot a/a$, and its value today | [6.1](lessons/06-01-expanding-universe-friedmann.md) |
| $z$ | redshift, $1+z = 1/a$ | [6.1](lessons/06-01-expanding-universe-friedmann.md) |
| $k$, $\Lambda$ | spatial curvature, and the cosmological constant | [6.1](lessons/06-01-expanding-universe-friedmann.md) |
| $\rho_c$, $\Omega$ | critical density $3H^2/8\pi G$, and the density parameter $\rho/\rho_c$ | [6.1](lessons/06-01-expanding-universe-friedmann.md) |
| $w$ | equation-of-state parameter, $p = w\rho c^2$ | [6.1](lessons/06-01-expanding-universe-friedmann.md) |
| $\Gamma$ | interaction rate per particle, $n\sigma v$ — raced against $H$ at freeze-out | [6.2](lessons/06-02-thermal-history-bbn.md) |
| $Y$ | primordial helium mass fraction ($\approx 0.25$) | [6.2](lessons/06-02-thermal-history-bbn.md) |
| $\ell$ | CMB multipole — angular scale, roughly $180^\circ/\ell$ | [6.3](lessons/06-03-cosmic-microwave-background.md) |
| $\delta$ | density contrast $(\rho-\bar\rho)/\bar\rho$ | [6.4](lessons/06-04-structure-formation-dark-matter.md) |
| $P(k)$, $n_s$ | matter power spectrum, and the primordial spectral tilt | [6.4](lessons/06-04-structure-formation-dark-matter.md) |
| $h$ | reduced Hubble constant, $H_0/(100\ \mathrm{km\,s^{-1}Mpc^{-1}})$ | [6.6](lessons/06-06-concordance-model-frontiers.md) |

**Three symbol clashes this course lives with**, because both conventions are
standard: $\sigma$ is the Stefan–Boltzmann constant *and* a velocity dispersion
(and $\sigma_T$ is a cross-section); $a$ is the radiation constant in Module 2
*and* the scale factor in Module 6; $n$ is a polytropic index in 2.4 *and* a
number density in Module 5. Read the module, not the letter.

## Definitions

### Luminosity and flux

Luminosity is what a source *emits* (watts, intrinsic); flux is what *you catch*
per square meter (diluted by distance). One measured flux plus one known
luminosity is a distance.

$$F = \frac{L}{4\pi d^2}, \qquad d = \sqrt{\frac{L}{4\pi F}}$$

*Introduced:* [1.1](lessons/01-01-scales-luminosity-distance-ladder.md)

### Apparent magnitude

A backwards logarithmic brightness scale inherited from the Greeks: 5 magnitudes
is exactly a factor of 100 in flux, and **brighter means a smaller number**.

$$m_1 - m_2 = -2.5\log_{10}\frac{F_1}{F_2}$$

*Introduced:* [1.1](lessons/01-01-scales-luminosity-distance-ladder.md)

### Absolute magnitude

The apparent magnitude the object *would* have at a reference distance of 10 pc
— a bookkeeping trick that strips distance out, so $M$ measures intrinsic
luminosity alone.

*Introduced:* [1.1](lessons/01-01-scales-luminosity-distance-ladder.md)

### Distance modulus

The gap between how bright a thing looks and how bright it really is *is* its
distance. Know any two of $\{m, M, d\}$ and you have the third.

$$m - M = 5\log_{10}\!\left(\frac{d}{10\ \text{pc}}\right)$$

*Introduced:* [1.1](lessons/01-01-scales-luminosity-distance-ladder.md)

### Parsec

The distance at which one AU subtends one arcsecond — defined precisely so that
the parallax relation is a plain reciprocal.

$$d\,[\text{pc}] = \frac{1}{p\,[\text{arcsec}]}, \qquad 1\ \text{pc} = 3.086\times10^{16}\ \text{m}$$

*Introduced:* [1.1](lessons/01-01-scales-luminosity-distance-ladder.md)

### Standard candle

A source whose luminosity you know from its physics, so its measured flux
becomes a ruler. Cepheids (period–luminosity) and Type Ia supernovae (all
detonate at $M_{\rm Ch}$) are the workhorses; each rung is *calibrated* by the
rung below, so calibration errors compound upward.

*Introduced:* [1.1](lessons/01-01-scales-luminosity-distance-ladder.md)

### Effective temperature

Real stars have no single temperature, so we *define* one: the temperature a
blackbody of the star's radius would need to emit the star's actual luminosity.

$$L \equiv 4\pi R^2\sigma T_{\rm eff}^4$$

*Introduced:* [1.2](lessons/01-02-blackbody-spectra-hr-diagram.md)

### HR diagram

Luminosity (up) against effective temperature (**increasing leftward**), both
logarithmic. Stars don't scatter — they fall onto a main-sequence band, a giant
region, and a white-dwarf corner. Because $L = 4\pi R^2\sigma T^4$, lines of
constant radius are straight diagonals, so position on the diagram reads out
size.

*Introduced:* [1.2](lessons/01-02-blackbody-spectra-hr-diagram.md)

### Optical depth

How many times a beam expects to be absorbed on its way through — the path
measured in mean free paths, not meters. $\tau\ll1$ is transparent,
$\tau\gg1$ opaque; you see down to $\tau\approx1$.

$$d\tau = \kappa\rho\,ds, \qquad I = I_0 e^{-\tau}$$

*Introduced:* [1.3](lessons/01-03-radiative-transfer-spectral-lines.md)

### Opacity

How hard the gas is for light to cross, per gram of material (cm²/g). Local
resistance — pair it with a $\rho$ and a path before it means anything.

*Introduced:* [1.3](lessons/01-03-radiative-transfer-spectral-lines.md)

### Source function

The intensity the material is trying to add — the ratio of its emission to its
absorption. In thermal equilibrium it *is* the Planck function (Kirchhoff),
which is why an opaque layer glows as a blackbody.

$$S = B_\lambda(T)$$

*Introduced:* [1.3](lessons/01-03-radiative-transfer-spectral-lines.md)

### Photosphere

The one layer of a star you actually see: where the inward optical depth reaches
$\tau\approx1$, the "last mean free path." Its temperature is the $T_{\rm eff}$
you measured.

*Introduced:* [1.3](lessons/01-03-radiative-transfer-spectral-lines.md)

### Virial theorem

In a relaxed, bound, self-gravitating system, twice the kinetic energy exactly
cancels the potential well — which lets a velocity spread weigh a mass, luminous
or not.

$$2\langle K\rangle + \langle U\rangle = 0 \;\Longrightarrow\; E = \langle K\rangle + \langle U\rangle = -\langle K\rangle = \tfrac12\langle U\rangle < 0$$

*Introduced:* [1.4](lessons/01-04-gravitational-dynamics-virial.md)

### Negative heat capacity

A corollary of the virial theorem with no everyday analogue: since
$E = -\langle K\rangle$, **draining energy makes a self-gravitating system
hotter and smaller**. This is the Kelvin–Helmholtz mechanism, the main-sequence
thermostat, and the engine of all post-main-sequence evolution.

$$C = \frac{dE}{dT} = -\tfrac32 N k_B < 0$$

*Introduced:* [1.4](lessons/01-04-gravitational-dynamics-virial.md), used throughout [3.2](lessons/03-02-post-main-sequence.md)

### Dynamical time

The only clock a self-gravitating blob has, set by density alone — collapse
time, oscillation time, and surface orbital period are all this, to within a
factor of order one.

$$t_{\rm dyn}\sim\frac{1}{\sqrt{G\rho}}, \qquad t_{\rm ff} = \sqrt{\frac{3\pi}{32\,G\rho}}$$

*Introduced:* [1.4](lessons/01-04-gravitational-dynamics-virial.md)

### Hydrostatic equilibrium

Every shell of a stable star floats on a pressure *difference* that exactly
carries the weight above it. Uniform pressure supports nothing — only the
gradient does.

$$\frac{dP}{dr} = -\frac{G\,m(r)\,\rho(r)}{r^2}$$

*Introduced:* [2.1](lessons/02-01-equations-stellar-structure.md)

### Mean molecular weight

The average mass per *free particle*, in units of $m_H$. Ionization multiplies
the particle count, so it drops **below** 1: fully ionized hydrogen gives
$\mu = 0.5$, solar composition $\mu \approx 0.6$.

$$P = \frac{\rho\,k_B T}{\mu\,m_H}$$

*Introduced:* [2.1](lessons/02-01-equations-stellar-structure.md)

### Schwarzschild criterion

A displaced gas blob expands and cools adiabatically; if it is *still* lighter
than its new surroundings it keeps rising, and the region convects. Equivalently:
convection starts when radiation demands a steeper gradient than buoyancy can
hold.

$$\nabla_{\rm rad} > \nabla_{\rm ad}, \qquad \nabla \equiv \frac{d\ln T}{d\ln P}, \qquad \nabla_{\rm ad} = 1-\frac{1}{\gamma} = 0.4 \ (\text{monatomic})$$

*Introduced:* [2.2](lessons/02-02-energy-transport-opacity.md)

### Gamow peak

The narrow energy window where essentially all fusion happens: the product of a
*falling* Maxwell–Boltzmann tail and a *rising* tunneling probability. It sits a
few times $k_BT$ — well above the mean, and still ~150 times below the barrier.

$$E_0 = \left(\tfrac12\,k_B T\sqrt{E_G}\right)^{2/3} \approx 6\ \text{keV in the Sun}$$

*Introduced:* [2.3](lessons/02-03-nuclear-energy-generation.md)

### Polytrope

An equation of state that is a pure power of density, with temperature never
appearing — exact for degenerate matter and for a fully convective (adiabatic)
star, an assumption otherwise.

$$P = K\rho^{\gamma}, \qquad \gamma = \frac{n+1}{n}$$

*Introduced:* [2.4](lessons/02-04-polytropes-lane-emden.md)

### Lane–Emden equation

Strip out the units and every polytrope of index $n$ obeys one universal shape
equation; the length scale $\alpha$ is all that remembers which physical star you
meant.

$$\frac{1}{\xi^2}\frac{d}{d\xi}\!\left(\xi^2\frac{d\theta}{d\xi}\right) = -\theta^{\,n}, \qquad \rho = \rho_c\theta^{\,n},\ r = \alpha\xi,\ \theta(0)=1,\ \theta'(0)=0$$

*Introduced:* [2.4](lessons/02-04-polytropes-lane-emden.md)

### Main sequence

Not a type of star but a *phase* — the long era of core hydrogen burning, where
about 90 percent of stars sit. It is a **one-parameter family**: birth mass fixes
luminosity, radius, temperature, color, and lifetime.

*Introduced:* [2.5](lessons/02-05-main-sequence.md)

### Eddington luminosity

The brightness at which radiation pressure on the gas exactly balances gravity —
a ceiling on steady luminosity, and hence on accretion growth rate. Both forces
fall as $1/r^2$, so the balance holds at every radius.

$$L_{\rm Edd} = \frac{4\pi G M m_p c}{\sigma_T} \approx 1.26\times10^{31}\,\frac{M}{M_\odot}\ \text{W} \approx 3.3\times10^{4}\,\frac{M}{M_\odot}\,L_\odot$$

*Introduced:* [2.5](lessons/02-05-main-sequence.md), developed in [4.3](lessons/04-03-black-holes-astrophysics.md)

### Jeans mass

The lightest clump gravity can collapse at a given temperature and density.
Hotter raises the bar; denser lowers it. Trust the scaling
$M_J\propto T^{3/2}\rho^{-1/2}$ and treat the prefactor as order-of-magnitude.

$$M_J = \left(\frac{5k_BT}{G\mu m_H}\right)^{3/2}\left(\frac{3}{4\pi\rho}\right)^{1/2}$$

*Introduced:* [3.1](lessons/03-01-star-formation-jeans.md)

### Mirror principle

Once a burning shell separates core from envelope, the two behave like a see-saw:
**core contracts ⟺ envelope expands**. This is why a star with a dying core
becomes a *giant* rather than shrinking.

*Introduced:* [3.2](lessons/03-02-post-main-sequence.md)

### Helium flash

Degenerate matter's pressure ignores temperature, so ignition in a degenerate
core cannot expand-and-cool itself. With $\varepsilon\propto T^{40}$ for triple
alpha, the result is a thermonuclear runaway that halts only when degeneracy
*lifts* and the core can finally expand.

*Introduced:* [3.2](lessons/03-02-post-main-sequence.md)

### Binding energy per nucleon

How tightly bound each nucleon is, on average. The curve rises steeply from
hydrogen, peaks at iron-56 near 8.8 MeV/nucleon, then declines. **Energy is
released by moving toward iron** — fusion from the light side, fission from the
heavy side.

$$B(Z,N) = \big[Z m_p + N m_n - m(Z,N)\big]c^2, \qquad Q = \Big(\textstyle\sum m_{\rm in} - \sum m_{\rm out}\Big)c^2$$

*Introduced:* [3.3](lessons/03-03-nucleosynthesis-elements.md)

### s-process and r-process

Both build elements past iron by dripping on *neutrons* (no Coulomb barrier), and
differ only in whether capture beats beta decay. **s** (slow) hugs the valley of
stability in AGB stars; **r** (rapid) drags nuclei to the neutron-rich edge in
neutron-star mergers and some core-collapse supernovae.

$$(Z,A)\ \xrightarrow{\ +n\ }\ (Z,A+1)\ \xrightarrow{\ \beta^-\ }\ (Z+1,A+1)$$

*Introduced:* [3.3](lessons/03-03-nucleosynthesis-elements.md)

### Chandrasekhar mass

The maximum mass electron degeneracy can support — built entirely out of
fundamental constants and the nucleon mass. Above it *no equilibrium radius
exists*.

$$M_{\rm Ch}\sim\frac{1}{\mu_e^{2}}\frac{M_{\rm Pl}^3}{m_H^2},\quad M_{\rm Pl}\equiv\sqrt{\frac{\hbar c}{G}}; \qquad M_{\rm Ch} = 1.44\left(\frac{2}{\mu_e}\right)^{2}M_\odot \approx 1.4\,M_\odot$$

*Introduced:* [3.4](lessons/03-04-stellar-death-supernovae.md), derived in [4.1](lessons/04-01-white-dwarfs-chandrasekhar.md)

### Initial mass function

The birth mass distribution of stars — a steep power law, so by *number* stars
are overwhelmingly low-mass, while the light, metals, and feedback belong to the
rare massive minority.

$$\xi(M) = \xi_0 M^{-\alpha}, \qquad \alpha \approx 2.35 \ (\text{Salpeter, above} \sim 0.5\,M_\odot)$$

*Introduced:* [3.5](lessons/03-05-imf-stellar-populations.md)

### Main-sequence turnoff

In a coeval cluster, the most massive star *still* burning hydrogen. Its mass
satisfies $t_{\rm MS}(M_{\rm to}) = $ the cluster's age — so the turnoff read off
an HR diagram is a clock.

*Introduced:* [3.5](lessons/03-05-imf-stellar-populations.md), used in [5.2](lessons/05-02-milky-way.md)

### Degeneracy pressure

Pauli exclusion made mechanical: compress fermions and they are forced into
higher-momentum states, and that momentum flux is a pressure that survives at
$T=0$. Because it has **no temperature knob**, degenerate objects shrink when you
add mass and cannot self-regulate a runaway.

$$P_{\rm NR}\propto n^{5/3}\ (\gamma = \tfrac53), \qquad P_{\rm UR}\propto n^{4/3}\ (\gamma = \tfrac43)$$

*Introduced:* [4.1](lessons/04-01-white-dwarfs-chandrasekhar.md)

### Compactness

The single dimensionless number saying whether you may still use Newton:
$\mathcal{C}\sim10^{-6}$ for the Sun (Newton is flawless), $\sim0.2$ for a neutron
star (curvature is a 20 percent effect), $=1/2$ at a horizon.

$$\mathcal{C} \equiv \frac{GM}{Rc^2} = \frac{r_s}{2R}, \qquad v_{\rm esc} = \sqrt{2\mathcal{C}}\;c$$

*Introduced:* [4.2](lessons/04-02-neutron-stars-pulsars.md)

### TOV limit

The neutron-star analogue of the Chandrasekhar mass: above roughly 2–3 $M_\odot$
no equation of state holds the star up and it collapses to a black hole. It is a
*range*, not a number, because nuclear matter's stiffness is still unknown.

*Introduced:* [4.2](lessons/04-02-neutron-stars-pulsars.md)

### Schwarzschild radius

Cram a mass inside this radius and its escape speed reaches $c$ — nothing gets
out. The Newtonian escape-velocity derivation is a cheat that lands on the exact
general-relativistic answer.

$$r_s = \frac{2GM}{c^2} = 2.95\ \text{km}\times\frac{M}{M_\odot}$$

*Introduced:* [4.3](lessons/04-03-black-holes-astrophysics.md)

### Accretion efficiency

The fraction of infalling rest mass that comes back out as light — just the depth
of the gravitational well measured in units of $c^2$. About $0.1$, i.e. **more
than ten times better than hydrogen fusion's 0.007**.

$$L = \eta\,\dot m\,c^2, \qquad \eta = \frac{GM}{Rc^2} = \tfrac12\frac{r_s}{R}$$

*Introduced:* [4.4](lessons/04-04-accretion.md)

### Strain

The dimensionless stretch a passing gravitational wave produces in a ruler.
Astrophysical sources reach $h\sim10^{-21}$ at Earth — over LIGO's 4 km arms,
thousandths of a proton width.

$$h \equiv \frac{\Delta L}{L}$$

*Introduced:* [4.5](lessons/04-05-gravitational-waves-mergers.md)

### Chirp mass

The one mass combination the inspiral hands you directly, because it alone fixes
how fast the frequency sweeps up. The wave *amplitude* then gives the distance —
a "standard siren" needing no distance ladder.

$$\mathcal{M} = \frac{(m_1m_2)^{3/5}}{(m_1+m_2)^{1/5}}, \qquad f_{\rm GW} = 2f_{\rm orb}$$

*Introduced:* [4.5](lessons/04-05-gravitational-waves-mergers.md)

### Strömgren sphere

The ionized bubble a hot star carves out of neutral gas, sized where ionizations
balance recombinations. Seeing one means an O/B star formed here *recently*.

$$R_S = \left(\frac{3Q}{4\pi n^2\alpha}\right)^{1/3}, \qquad \alpha\approx2.6\times10^{-13}\ \mathrm{cm^3\,s^{-1}}$$

*Introduced:* [5.1](lessons/05-01-interstellar-medium.md)

### 21-cm line

The hyperfine spin-flip of neutral hydrogen (parallel → antiparallel proton and
electron spins, $5.9\ \mu$eV). Fiercely forbidden, but there is so much HI that
it lights up — and radio sails straight through dust, so it maps the Galactic
disk optical light cannot.

*Introduced:* [5.1](lessons/05-01-interstellar-medium.md)

### Rotation curve

Orbital speed as a function of galactocentric radius. Because a circular orbit
weighs everything inside it, $v(R)$ *is* a map of enclosed mass — which is why a
**flat** curve past the last star is the galactic case for dark matter.

$$\frac{v^2}{R} = \frac{GM(R)}{R^2} \;\Longrightarrow\; M(R) = \frac{v^2R}{G}$$

*Introduced:* [5.2](lessons/05-02-milky-way.md)

### Mass-to-light ratio

Total mass per unit starlight, in solar units. An ordinary stellar population
gives $\Upsilon\sim1$–$5$; a whole spiral gives $10$–$50$ and rises outward.
**Anything much above 5 is mass the stars cannot account for.**

$$\Upsilon \equiv \frac{M}{L}\ \left[\frac{M_\odot}{L_\odot}\right]$$

*Introduced:* [5.3](lessons/05-03-galaxies-dark-matter.md)

### M-sigma relation

The central black hole's mass tracks the *bulge's* stellar velocity dispersion to
the fourth power, with small scatter — a tiny object correlated with stars
thousands of light-years away, which is why AGN feedback must be coupling them.

$$M_{\rm BH}\approx10^{8}M_\odot\left(\frac{\sigma}{200\ \mathrm{km/s}}\right)^{4}, \qquad M_{\rm BH}\sim 0.1\%\ \text{of the bulge}$$

*Introduced:* [5.4](lessons/05-04-galaxy-formation-agn.md)

### Baryon acoustic oscillations

Sound waves ringing in the pre-recombination photon–baryon plasma froze when the
plasma neutralized, leaving one fixed comoving length ($\approx150$ Mpc) stamped
on the galaxy distribution and on the CMB. A **standard ruler**.

*Introduced:* [5.5](lessons/05-05-clusters-large-scale-structure.md), seen as CMB peaks in [6.3](lessons/06-03-cosmic-microwave-background.md)

### Cosmological principle

Averaged over scales beyond about 100 Mpc, the universe is the same everywhere
(homogeneous) and the same in every direction (isotropic). No center, no edge —
which is what forces expansion to be a single universal stretch factor.

*Introduced:* [6.1](lessons/06-01-expanding-universe-friedmann.md)

### Scale factor and redshift

One dimensionless number stretches every distance together, so recession is space
*expanding*, not galaxies moving through it. Wavelengths stretch with it, which
is what redshift measures.

$$d(t) = a(t)\,x, \qquad H\equiv\frac{\dot a}{a}, \qquad v = Hd, \qquad 1+z = \frac{1}{a}$$

*Introduced:* [6.1](lessons/06-01-expanding-universe-friedmann.md)

### Critical density

The density that puts the expanding universe exactly on the escape-velocity
knife-edge — total energy zero, space flat. The density parameter $\Omega$
compares everything to it.

$$\rho_c = \frac{3H^2}{8\pi G} \approx 9\times10^{-27}\ \mathrm{kg/m^3}, \qquad \Omega\equiv\frac{\rho}{\rho_c}$$

*Introduced:* [6.1](lessons/06-01-expanding-universe-friedmann.md)

### Freeze-out

A race, not a threshold: a reaction keeps its species in equilibrium only while
particles find each other faster than expansion pulls them apart. When
$\Gamma$ drops below $H$, whatever abundance held at that instant is frozen in
forever.

$$\Gamma = n\sigma v \;\gtrsim\; H$$

*Introduced:* [6.2](lessons/06-02-thermal-history-bbn.md)

### Recombination and last scattering

Electrons binding to nuclei at $T\approx3000$ K (*recombination*) removes the free
electrons that scattered light, so photons **decouple** and stream freely. The
shell they last scattered from is the surface we see as the CMB.

$$T\propto\frac{1}{a} = 1+z, \qquad z_{\rm rec}\approx1100,\ t\approx380{,}000\ \text{yr},\ T_0 = 2.725\ \text{K}$$

*Introduced:* [6.3](lessons/06-03-cosmic-microwave-background.md)

### Density contrast

The fractional overdensity — the one number structure formation tracks.
$\delta\sim10^{-5}$ at recombination, $\delta\sim1$ is turnaround and collapse,
$\delta\sim10^{5}$ inside a galaxy today.

$$\delta(\mathbf{x}) \equiv \frac{\rho(\mathbf{x})-\bar\rho}{\bar\rho}$$

*Introduced:* [6.4](lessons/06-04-structure-formation-dark-matter.md)

### Cold dark matter

"Cold" is about particle *speed*, not temperature: slow particles barely
free-stream, so small-scale bumps survive and structure builds **bottom-up**. Hot
(relativistic) dark matter would erase everything below supercluster scale and
force top-down formation — which observations rule out.

*Introduced:* [6.4](lessons/06-04-structure-formation-dark-matter.md)

### Equation-of-state parameter

One number fixes both how a component gravitates and how it dilutes. Acceleration
requires $w < -1/3$; a cosmological constant has $w = -1$ and therefore never
dilutes at all.

$$w \equiv \frac{p}{\rho c^2}, \qquad \rho \propto a^{-3(1+w)}$$

*Introduced:* [6.1](lessons/06-01-expanding-universe-friedmann.md), used in [6.5](lessons/06-05-dark-energy-acceleration.md)

### Lambda-CDM

The concordance model: a spatially flat, expanding universe of baryons, cold dark
matter, and a cosmological constant, specified by six free parameters that
simultaneously fit the CMB, the light-element abundances, galaxy clustering, and
the supernova Hubble diagram.

*Introduced:* [6.6](lessons/06-06-concordance-model-frontiers.md)

## Formulas and rules

### Astronomical units and constants

The table the whole course silently runs on. No lesson states it in one place;
this is that place.

| Quantity | Value |
|---|---|
| astronomical unit, 1 AU | $1.496\times10^{11}$ m |
| parsec, 1 pc | $3.086\times10^{16}$ m $= 3.26$ ly |
| light-year, 1 ly | $9.46\times10^{15}$ m |
| kpc, Mpc, Gpc | $10^3$, $10^6$, $10^9$ pc |
| arcsecond | $4.848\times10^{-6}$ rad |
| year | $3.156\times10^{7}$ s |
| solar mass $M_\odot$ | $1.99\times10^{30}$ kg |
| solar radius $R_\odot$ | $6.96\times10^{8}$ m |
| solar luminosity $L_\odot$ | $3.83\times10^{26}$ W |
| solar $T_{\rm eff}$ | $5772$ K |
| solar apparent / absolute magnitude | $m_\odot = -26.7$, $M_\odot = +4.8$ |
| solar constant (flux at 1 AU) | $1.36\times10^{3}\ \mathrm{W/m^2}$ |
| $G$ | $6.674\times10^{-11}\ \mathrm{N\,m^2\,kg^{-2}}$ |
| $c$ | $2.998\times10^{8}$ m/s |
| $\hbar$ | $1.055\times10^{-34}$ J·s |
| $k_B$ | $1.381\times10^{-23}$ J/K $= 8.62\times10^{-5}$ eV/K |
| $\sigma$ (Stefan–Boltzmann) | $5.67\times10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}}$ |
| $a = 4\sigma/c$ (radiation constant) | $7.57\times10^{-16}\ \mathrm{J\,m^{-3}\,K^{-4}}$ |
| $b$ (Wien) | $2.90\times10^{-3}$ m·K |
| $\sigma_T$ (Thomson) | $6.65\times10^{-29}\ \mathrm{m^2}$ |
| $m_H \approx m_p$ | $1.673\times10^{-27}$ kg |
| $m_e$ | $9.11\times10^{-31}$ kg |
| atomic mass unit | $1\ \mathrm{u}\,c^2 = 931.5$ MeV |
| Coulomb scale | $e^2/4\pi\epsilon_0 = 1.44$ MeV·fm |
| $H_0$ | $67$–$73\ \mathrm{km\,s^{-1}Mpc^{-1}}$; $70$ gives $t_H = 14$ Gyr, $D_H = 4.3$ Gpc |
| CMB today | $T_0 = 2.725$ K, $n_\gamma\approx4.1\times10^{8}\ \mathrm{m^{-3}}$ |

**Scale ladder** (order of magnitude, from [1.1](lessons/01-01-scales-luminosity-distance-ladder.md)): Earth radius $6\times10^6$ m · 1 AU
$1.5\times10^{11}$ m · nearest star 1.3 pc · Milky Way diameter 30 kpc ·
Andromeda 0.78 Mpc · observable universe 14 Gpc.

**Working in solar units beats SI.** Almost every stellar problem is a ratio to
the Sun, and the constants cancel:

$$\frac{L}{L_\odot} = \left(\frac{R}{R_\odot}\right)^2\left(\frac{T}{T_\odot}\right)^4, \qquad \frac{M}{M_\odot} = \frac{(a/\mathrm{AU})^3}{(P/\mathrm{yr})^2}$$

### Magnitudes — the three flavors

Astronomy's classic trap is which magnitude you're holding.

| Kind | Symbol | Means |
|---|---|---|
| apparent | $m$ | how bright it *looks* from Earth — depends on distance and extinction |
| absolute | $M$ | how bright it *would look* at 10 pc — intrinsic, distance removed |
| bolometric | $M_{\rm bol}$, $m_{\rm bol}$ | integrated over **all** wavelengths, not just one filter band |

$$m_1 - m_2 = -2.5\log_{10}\frac{F_1}{F_2}, \qquad \frac{F_1}{F_2} = 10^{-\Delta m/2.5}, \qquad \frac{L}{L_\odot} = 10^{(M_\odot - M)/2.5}$$

$$m - M = 5\log_{10}\!\left(\frac{d}{10\ \text{pc}}\right) \quad\Longleftrightarrow\quad d = 10\ \text{pc}\times10^{(m-M)/5}$$

Useful anchors: 1 mag $=$ a flux factor $100^{1/5} = 2.512$; 5 mag $=$ 100 in
flux $=$ 10 in distance; the Sun $-26.7$, Vega $\approx0$, naked eye $+6$, Hubble
$+30$, a Type Ia peak $M\approx-19.3$.

*From* [1.1](lessons/01-01-scales-luminosity-distance-ladder.md) *and* [3.4](lessons/03-04-stellar-death-supernovae.md)

### The distance ladder

Each rung is calibrated in its overlap with the one below, so errors compound
upward — which is why $H_0$ is fought over.

| Rung | Method | Reach |
|---|---|---|
| 1 | radar timing → the AU | solar system |
| 2 | trigonometric parallax, $d[\mathrm{pc}] = 1/p['']$ | to ~kpc |
| 3 | main-sequence fitting, Cepheid period–luminosity | to tens of Mpc |
| 4 | Type Ia supernovae ($M\approx-19.3$) | to Gpc |
| 5 | Hubble's law $v = H_0 d$ | cosmological |

*From* [1.1](lessons/01-01-scales-luminosity-distance-ladder.md)

### Reading a star's light

$$\lambda_{\rm peak}T = b \quad(\text{Wien}), \qquad F_{\rm surface} = \sigma T^4 \quad(\text{Stefan–Boltzmann}), \qquad L = 4\pi R^2\sigma T_{\rm eff}^4$$

Know any two of $L$, $R$, $T$ and the third follows. Doppler, for
$v_r\ll c$: $\Delta\lambda/\lambda_0 = v_r/c$ (radial component only).

*From* [1.2](lessons/01-02-blackbody-spectra-hr-diagram.md) *and* [1.3](lessons/01-03-radiative-transfer-spectral-lines.md)

### Spectral classes and HR-diagram vocabulary

| Class | $T_{\rm eff}$ | Color | Note |
|---|---|---|---|
| O | $\gtrsim30{,}000$ K | blue | rare, short-lived, ionizes HII regions |
| B | $10{,}000$–$30{,}000$ K | blue-white | |
| A | $\sim7500$–$10{,}000$ K | white | Balmer lines strongest here |
| F | $\sim6000$–$7500$ K | yellow-white | |
| G | $\sim5300$–$6000$ K | yellow | the Sun, 5772 K |
| K | $\sim3900$–$5300$ K | orange | |
| M | $\sim2400$–$3900$ K | red | most stars by number |

("Oh Be A Fine Girl/Guy, Kiss Me" — hot to cool.)

| Region of the HR diagram | $L$ | $T$ | Therefore $R$ |
|---|---|---|---|
| main sequence | full range | full range | $\approx 0.1$–$10\,R_\odot$; core H burning |
| giants / supergiants (upper right) | high | low | **large** — cool but luminous means enormous |
| white dwarfs (lower left) | low | high | **tiny** — hot but faint means Earth-sized |

$L\propto T^4$ at fixed $R$, so lines of constant radius are straight diagonals;
moving perpendicular to them is changing size.

*From* [1.2](lessons/01-02-blackbody-spectra-hr-diagram.md)

### Radiative transfer

$$\frac{dI}{d\tau} = -I + S \quad\Longrightarrow\quad I(\tau) = \underbrace{I_0e^{-\tau}}_{\text{background, dimmed}} + \underbrace{S(1-e^{-\tau})}_{\text{gas's own glow}}$$

Thin ($\tau\ll1$): $I\approx I_0 + \tau(S-I_0)$. Thick ($\tau\gg1$): $I\to S$ —
the beam forgets its past entirely.

**Kirchhoff's three laws.** Hot dense source ($\tau\gg1$) → continuum. That
continuum seen through *cooler* thin gas → **absorption** lines (the gas's
$S = B_\lambda(T_{\rm gas})$ is fainter than the backdrop). Thin gas alone
against the dark ($I_0=0$) → **emission** lines at the same wavelengths. Same
atoms; the geometry and the temperature contrast decide which.

*From* [1.3](lessons/01-03-radiative-transfer-spectral-lines.md)

### Saha ionization and Boltzmann excitation

Used constantly (line strengths in 1.3, recombination in 6.3) and derived
nowhere in this course — so here it is.

$$\frac{n_{\rm II}\,n_e}{n_{\rm I}} \propto T^{3/2}e^{-\chi/k_BT} \quad(\text{Saha; } \chi = 13.6\ \text{eV for H}), \qquad \frac{n_2}{n_1} = \frac{g_2}{g_1}e^{-\Delta E/k_BT} \quad(\text{Boltzmann})$$

Line strength is the **product** of these two competing factors, which is why
Balmer absorption peaks in A stars near $10^4$ K rather than tracking abundance:
Boltzmann favors hot (populate $n=2$), Saha favors cool (keep atoms neutral).
The same competition, with $10^{9}$ photons per baryon, is what delays
cosmological recombination until $k_BT \approx \chi/25$.

*Used by* [1.3](lessons/01-03-radiative-transfer-spectral-lines.md) *and* [6.3](lessons/06-03-cosmic-microwave-background.md)

### Weighing things with gravity

The four estimators, in increasing order of how little you need to assume.

| Situation | Estimator | Assumes |
|---|---|---|
| resolved orbit (binary, S2 around Sgr A\*) | $M = \dfrac{4\pi^2a^3}{GP^2}$, or $\dfrac{M}{M_\odot} = \dfrac{(a/\mathrm{AU})^3}{(P/\mathrm{yr})^2}$ | Kepler; a clean orbit |
| circular rotation (galaxy disk) | $M(R) = \dfrac{v^2R}{G}$ | circular orbits, shell theorem |
| velocity dispersion (cluster, elliptical) | $M \sim \dfrac{\sigma^2R}{G}$ | **relaxed, bound, virialized** |
| hot X-ray gas (cluster) | $M \sim \dfrac{k_BT\,R}{G\mu m_H}$ | **hydrostatic equilibrium** |
| gravitational lensing | shear/arc geometry | *nothing about dynamical state* |

$\sigma$ is one-dimensional: the full mean-square speed is
$\langle v^2\rangle = 3\sigma^2$, and dropping that 3 underestimates the mass
threefold. Lensing is the method that closes the skeptic's door, since it needs
no equilibrium assumption at all.

*From* [1.4](lessons/01-04-gravitational-dynamics-virial.md), [5.2](lessons/05-02-milky-way.md), [5.3](lessons/05-03-galaxies-dark-matter.md), [5.5](lessons/05-05-clusters-large-scale-structure.md)

### The equations of stellar structure

Four coupled ODEs plus an equation of state — a star, completely.

$$\text{hydrostatic:}\quad \frac{dP}{dr} = -\frac{Gm(r)\rho}{r^2} \qquad\qquad \text{mass:}\quad \frac{dm}{dr} = 4\pi r^2\rho$$

$$\text{energy generation:}\quad \frac{dL}{dr} = 4\pi r^2\rho\,\varepsilon \qquad\qquad \text{transport:}\quad \frac{dT}{dr} = -\frac{3\kappa\rho L}{16\pi ac\,r^2T^3}$$

$$\text{EOS (ideal gas):}\quad P = \frac{\rho k_BT}{\mu m_H} \qquad\qquad \text{(degenerate):}\quad P = K\rho^{5/3}\ \text{or}\ K\rho^{4/3}$$

**Boundary conditions.** Center: $m = 0$, $L = 0$. Surface: $m = M$,
$P\to0$, $\rho\to0$, and $L = 4\pi R^2\sigma T_{\rm eff}^4$.

*From* [2.1](lessons/02-01-equations-stellar-structure.md), [2.2](lessons/02-02-energy-transport-opacity.md), [2.3](lessons/02-03-nuclear-energy-generation.md)

### Order-of-magnitude stellar interiors

Replace $dP/dr\to P_c/R$, $m\to M$, $\rho\to M/R^3$, $r\to R$ and the whole star
collapses to two lines:

$$P_c \sim \frac{GM^2}{R^4} \qquad\left(\text{exact for uniform density: } P_c = \frac{3GM^2}{8\pi R^4}\right), \qquad T_c \sim \frac{GM\mu m_H}{k_B R} \;\propto\; \frac{M}{R}$$

For the Sun these give $P_c\sim10^{15}$ Pa (true: $2\times10^{16}$) and
$T_c\sim1.4\times10^7$ K (true: $1.5\times10^7$) — the estimate that says the
core is hot enough to fuse. The virial version, $k_BT\sim GMm_H/R$, agrees to
within a factor of a few.

*From* [2.1](lessons/02-01-equations-stellar-structure.md)

### Opacity sources

| Source | Scaling | Where it dominates |
|---|---|---|
| electron (Thomson) scattering | $\kappa_{\rm es}\approx0.2(1+X)\ \mathrm{cm^2/g}$, roughly constant | hot, fully ionized interiors |
| free–free (Kramers) | $\kappa\propto\rho\,T^{-3.5}$ | dense, cooler gas |
| bound–free | Kramers-like | partially ionized regions |
| H⁻ | enormous, steeply $T$-sensitive | cool envelopes near 6000 K — makes the Sun convect |

Counterintuitively, **hotter gas is usually more transparent** (ionization
switches off bound–free and free–free). Cool envelopes are the opaque, convective
ones. Photon escape time by random walk:
$t \sim R^2/(\ell c) = R^2\kappa\rho/c \sim 10^4$–$10^5$ yr for the Sun.

*From* [2.2](lessons/02-02-energy-transport-opacity.md)

### Nuclear burning

$$4\,{}^1\mathrm{H}\to{}^4\mathrm{He}: \quad \Delta E = 26.7\ \text{MeV} = 0.7\%\ \text{of the rest mass} = 6.4\times10^{14}\ \text{J per kg of H}$$

$$\text{Coulomb barrier: } U_C(r) = \frac{1.44\ \text{MeV·fm}}{r/\text{fm}}\ \sim1\ \text{MeV}, \qquad k_BT_c\approx1.3\ \text{keV} \ \Rightarrow\ \textbf{tunneling is mandatory}$$

$$P_{\rm tunnel}\propto e^{-\sqrt{E_G/E}}, \qquad \varepsilon \propto \rho\,T^{\,n}, \quad n\approx\frac{\tau-2}{3},\ \tau = \frac{3E_0}{k_BT}$$

| Chain | Runs at | $\varepsilon$ exponent $n$ | Bottleneck |
|---|---|---|---|
| pp-chain | $T\gtrsim10^7$ K (Sun and cooler) | $\approx4$ | $p+p\to{}^2\mathrm{H}+e^++\nu_e$ needs a **weak** conversion mid-collision |
| CNO cycle | $T\gtrsim1.7\times10^7$ K (massive stars) | $\approx17$–$20$ | none — C/N/O are catalysts, so it runs away |

The steep $T$ dependence is a thermostat while the gas is ideal (over-produce →
expand → cool → slow down) and a *bomb* once it is degenerate.

*From* [2.3](lessons/02-03-nuclear-energy-generation.md)

### Binding-energy and burning-stage tables

| Stage | $B/A$ climb (MeV/nucleon) | Yield per nucleon |
|---|---|---|
| H → He | $0\to7.07$ | $\approx7.1$ MeV |
| He → C | $7.07\to7.68$ | $\approx0.6$ MeV |
| C → O | $7.68\to7.98$ | $\approx0.3$ MeV |
| O → Si | $7.98\to8.45$ | $\approx0.5$ MeV |
| Si → Fe | $8.45\to8.79$ | $\approx0.3$ MeV |

Hydrogen burning outyields every later stage tenfold — which is why the main
sequence is 90 percent of a star's life. The shells of a $25\,M_\odot$ star:

| Shell | $T$ (K) | Duration |
|---|---|---|
| H | $3\times10^{7}$ | ~7 Myr |
| He | $2\times10^{8}$ | ~0.7 Myr |
| C | $8\times10^{8}$ | ~600 yr |
| Ne | $1.5\times10^{9}$ | ~1 yr |
| O | $2\times10^{9}$ | ~6 months |
| Si | $3\times10^{9}$ | ~1 day |

Bridging the **mass-5 and mass-8 gaps** (no stable nucleus there) requires the
three-body triple alpha, $3\,{}^4\mathrm{He}\to{}^{12}\mathrm{C}$,
$Q\approx7.27$ MeV, which works only because of the resonant Hoyle state.
Coulomb-barrier scaling between reactions:
$Z_1Z_2/(A_1^{1/3}+A_2^{1/3})$.

*From* [3.3](lessons/03-03-nucleosynthesis-elements.md), [2.3](lessons/02-03-nuclear-energy-generation.md)

### Polytrope results

| $n$ | $\gamma$ | $\theta(\xi)$ | $\xi_1$ | Physical case |
|---|---|---|---|---|
| $0$ | $\infty$ | $1-\xi^2/6$ | $\sqrt6\approx2.449$ | constant density |
| $1$ | $2$ | $\sin\xi/\xi$ | $\pi$ | — |
| $3/2$ | $5/3$ | numerical | $3.654$ | non-relativistic degenerate; fully convective star |
| $3$ | $4/3$ | numerical ($-\xi_1^2\theta_1' = 2.018$) | $6.897$ | ultra-relativistic degenerate; Eddington model |
| $5$ | $6/5$ | $(1+\xi^2/3)^{-1/2}$ | $\infty$ | pathological — infinite radius, finite mass |

$$M = 4\pi\alpha^3\rho_c\big(-\xi_1^2\theta'(\xi_1)\big), \qquad \alpha^2 = \frac{(n+1)K\rho_c^{(1-n)/n}}{4\pi G}, \qquad \boxed{R\propto M^{(1-n)/(3-n)}}$$

$$\frac{\rho_c}{\bar\rho} = \frac{\xi_1}{3(-\theta'(\xi_1))} \quad(\approx54\ \text{for } n=3)$$

$n = 3/2$ gives $R\propto M^{-1/3}$ (heavier is smaller). At $n = 3$ the
denominator $3-n$ vanishes: **mass becomes independent of radius**, fixed by $K$
alone — the algebraic skeleton of the Chandrasekhar mass.

*From* [2.4](lessons/02-04-polytropes-lane-emden.md)

### Main-sequence scaling relations

The whole ridge as a one-parameter family. Derived from radiative diffusion plus
$T_c\propto M/R$, with $R$ cancelling completely.

| Quantity | Scaling | Note |
|---|---|---|
| luminosity | $L\propto M^{3.5}$ | clean theory gives $M^3$; steepens to $\sim4$ at low mass, flattens toward $1$ above $20\,M_\odot$ |
| radius | $R\propto M^{0.6\text{–}0.8}$ | weak — radius varies far less than luminosity |
| surface temperature | $T_{\rm eff}\propto M^{0.5}$ | massive = hot = blue |
| lifetime | $t_{\rm MS}\propto M/L \propto M^{-2.5}$ | $t_{\rm MS}\approx10\ \mathrm{Gyr}\,(M/M_\odot)^{-2.5}$ |

Fuel budget: only the core burns, so about $0.1\,M_\odot$ of the Sun's hydrogen
ever fuses at 0.7 percent efficiency — which is what turns a naive 100 Gyr into
the real 10 Gyr.

**The two mass limits.** Upper $\sim100$–$150\,M_\odot$: the star's own $L$
approaches $L_{\rm Edd}\propto M$ and radiation blows it apart. Lower
$0.08\,M_\odot$: electron degeneracy halts contraction before the core reaches
$10^7$ K, giving a **brown dwarf**.

*From* [2.5](lessons/02-05-main-sequence.md), [2.2](lessons/02-02-energy-transport-opacity.md)

### Star formation

$$M_J = \left(\frac{5k_BT}{G\mu m_H}\right)^{3/2}\left(\frac{3}{4\pi\rho}\right)^{1/2} \;\propto\; T^{3/2}\rho^{-1/2}, \qquad \lambda_J\sim\frac{c_s}{\sqrt{G\rho}},\quad c_s = \sqrt{\frac{k_BT}{\mu m_H}}$$

Typical molecular cloud ($T = 10$ K, $n = 10^4\ \mathrm{cm^{-3}}$, $\mu = 2$):
$M_J\approx7\,M_\odot$, $t_{\rm ff}\approx4\times10^5$ yr.

**Cooling is the permission slip.** Collapse releases gravitational energy; if
the gas cannot radiate it away, $T$ rises, $M_J$ inflates, and the collapse
self-arrests. Efficient dust and molecular-line cooling holds $T$ fixed, so
$M_J\propto\rho^{-1/2}$ keeps falling and the cloud **fragments** into a cluster.
Fragmentation stops at the opacity limit, $\sim0.01$–$0.1\,M_\odot$.

*From* [3.1](lessons/03-01-star-formation-jeans.md)

### After the main sequence

| Phase | Core | Envelope | HR-diagram move |
|---|---|---|---|
| turnoff / subgiant | inert He, contracting and **heating** | starts expanding | right |
| red giant branch (RGB) | degenerate He (if $M\lesssim2\,M_\odot$) | $R\to\sim100\,R_\odot$, $T\to3000$–$3500$ K | up and right |
| helium flash | degenerate He ignites in runaway; degeneracy lifts | barely flinches | — |
| horizontal branch | quiet He → C, O burning, non-degenerate | contracted | left, near-constant $L$ |
| asymptotic giant branch (AGB) | inert C/O contracting; **two** burning shells | huge, thermally pulsing, strong dusty wind | up and right, brighter than RGB |
| planetary nebula → white dwarf | C/O core exposed | ejected | drop to lower left |

Above $\sim8\,M_\odot$ the core never goes degenerate, so burning continues
through C, Ne, O, Si to an **iron core** — and core collapse.

*From* [3.2](lessons/03-02-post-main-sequence.md), [3.4](lessons/03-04-stellar-death-supernovae.md)

### Stellar endpoints

The table this whole course builds toward.

| Progenitor | Endpoint | Held up by | Mass limit | Size / density |
|---|---|---|---|---|
| $M < 0.08\,M_\odot$ | brown dwarf | electron degeneracy | never ignites H | $\sim0.1\,R_\odot$ |
| $0.08\lesssim M\lesssim8\,M_\odot$ | **white dwarf** (C/O) | electron degeneracy | $M_{\rm Ch} = 1.44(2/\mu_e)^2M_\odot\approx1.4$ | $R\sim5000$–$8000$ km (Earth-sized), $\rho\sim10^{9}\ \mathrm{kg/m^3}$ |
| $8\lesssim M\lesssim20$–$25\,M_\odot$ | **neutron star** | neutron degeneracy + strong force | TOV limit $\approx2$–$3\,M_\odot$ | $R\sim10$–$12$ km, $\rho\sim10^{17}\ \mathrm{kg/m^3}$, $\mathcal{C}\sim0.2$ |
| $M\gtrsim20$–$25\,M_\odot$ | **black hole** | nothing | none | $r_s = 2.95\,\mathrm{km}\times M/M_\odot$ |

$$\text{white dwarf: } R\propto M^{-1/3}\ \text{(non-relativistic)} \;\longrightarrow\; R\to0\ \text{as } M\to M_{\rm Ch}\ \text{(pressure softens to }\rho^{4/3})$$

$M_{\rm Ch}$ depends on $\mu_e$ but **not** on $m_e$ — the electron mass cancels
out of the ultra-relativistic balance and only sets *where* the transition
happens.

*From* [4.1](lessons/04-01-white-dwarfs-chandrasekhar.md), [4.2](lessons/04-02-neutron-stars-pulsars.md), [4.3](lessons/04-03-black-holes-astrophysics.md), [3.4](lessons/03-04-stellar-death-supernovae.md)

### Supernova types

The historical labels are spectroscopic and cut across the physics.

| Type | Observation | Mechanism | Remnant | Candle? |
|---|---|---|---|---|
| Ia | no H, has Si | **thermonuclear** — accreting white dwarf reaches $M_{\rm Ch}$ | none | yes, $M_B\approx-19.3$ |
| Ib/c | no H (envelope lost) | core collapse | NS or BH | no |
| II | has H | core collapse | NS or BH | no |

Core-collapse energy budget: $\Delta U\sim GM^2/R\sim5\times10^{46}$ J, of which
**about 99 percent leaves as neutrinos**, $\sim10^{44}$ J is ejecta kinetic
energy, and only $\sim10^{43}$ J is light.

*From* [3.4](lessons/03-04-stellar-death-supernovae.md)

### The initial mass function, three ways

Weight the Salpeter IMF differently and "the typical star" changes completely:

$$\underbrace{\int\xi\,dM \propto M^{-2.35}}_{\text{number: low-mass wins}}, \qquad \underbrace{\int M\xi\,dM\propto M^{-1.35}}_{\text{mass: low-mass still wins}}, \qquad \underbrace{\int L\xi\,dM\propto M^{+1.15}}_{\text{light: high-mass wins}}$$

**Populations.** Pop I: young, metal-rich ($Z\sim0.014$ for the Sun), thin disk.
Pop II: old, metal-poor ($Z\sim10^{-4}$–$10^{-3}$), halo and globular clusters.
Pop III: hypothetical metal-free first stars. The numbering is historical, not
chronological — Pop I is the *late-comer*.

*From* [3.5](lessons/03-05-imf-stellar-populations.md)

### Compact-object relations

$$r_s = \frac{2GM}{c^2} = 2.95\ \mathrm{km}\times\frac{M}{M_\odot}, \qquad \mathcal{C} = \frac{GM}{Rc^2}, \qquad \Delta a_{\rm tide}\big|_{r_s} = \frac{c^6}{4G^2M^2}\Delta r \propto \frac{1}{M^2}$$

**Pulsars** (collapse conserves both, and $I\propto MR^2$, $\Phi\propto BR^2$):

$$\omega\propto R^{-2},\qquad B\propto R^{-2}, \qquad \tau_{\rm char}\sim\frac{P}{2\dot P}$$

**Accretion:** $L = \eta\dot mc^2$ with $\eta = GM/Rc^2 \approx 0.2$ for a
neutron-star surface and $\approx0.1$ radiated by a disk (half the released
energy stays as orbital kinetic energy — the virial split). Disk temperature
$T(r)\propto r^{-3/4}$, so the inner rim is hottest ($\sim10^7$ K, X-rays for a
stellar-mass accretor; UV for a supermassive one, since
$T_{\rm in}\propto M^{-1/4}$).

**Gravitational waves:** $L_{\rm GW}\sim (G/c^5)(\dddot Q)^2$ — the leading
multipole is the **quadrupole**, because mass conservation kills the monopole and
momentum conservation kills the dipole.

*From* [4.2](lessons/04-02-neutron-stars-pulsars.md), [4.3](lessons/04-03-black-holes-astrophysics.md), [4.4](lessons/04-04-accretion.md), [4.5](lessons/04-05-gravitational-waves-mergers.md)

### Phases of the interstellar medium

All near a common pressure $P/k_B = nT\approx$ a few thousand K·cm⁻³, so **cold
means dense and hot means diffuse**. Molecular clouds are the exception: they are
self-gravitating and over-pressured, which is exactly why they collapse.

| Phase | $T$ (K) | $n$ (cm⁻³) | Traced by |
|---|---|---|---|
| molecular clouds | 10–50 | $10^2$–$10^6$ | CO radio lines |
| cold neutral medium | ~80 | ~30 | 21-cm absorption |
| warm neutral medium | ~8000 | ~0.5 | 21-cm emission |
| warm ionized medium | ~8000 | ~0.1 | H-alpha, dispersion |
| hot ionized medium | ~$10^6$ | ~0.004 | X-rays, O VI |

Dust is ~1 percent of the mass but dominates extinction (worse in the blue,
hence reddening), reprocesses starlight into far-IR at $T\sim20$ K
($\lambda_{\rm peak}\approx145\ \mu$m), and catalyzes H₂ formation on grain
surfaces.

*From* [5.1](lessons/05-01-interstellar-medium.md)

### Galaxies, halos, and clusters

**Milky Way numbers:** Sun at $R = 8$ kpc, $v = 220$ km/s, one galactic year
$\approx230$ Myr; $M(<8\ \mathrm{kpc})\approx9\times10^{10}\,M_\odot$;
Sgr A\* $\approx4\times10^{6}\,M_\odot$; disk ~30 kpc across, a few hundred pc
thick; ~150 globular clusters, oldest 12–13 Gyr.

**The flat-rotation-curve chain**, the galactic case for dark matter:

$$v(R)\ \text{flat} \;\Longrightarrow\; M(R) = \frac{v^2}{G}R \propto R \;\Longrightarrow\; \rho(R) = \frac{v^2}{4\pi GR^2}\propto R^{-2}$$

versus the Keplerian prediction $v\propto R^{-1/2}$ once you are outside all the
mass. The observed excess is a factor of 5–10.

**Cluster budget** ($10^{14}$–$10^{15}\,M_\odot$): dark matter ~85 percent, hot
X-ray gas ~13 percent, galaxies and stars only a few percent — so the *visible*
mass is mostly gas, not galaxies. Total/baryonic $\approx6$, matching the cosmic
$\Omega_m/\Omega_b$.

**AGN:** $M_{\rm BH}\propto\sigma^4$; variability bound $R\lesssim c\,\Delta t$
(day-scale flicker → a solar-system-sized emitter outshining $10^{11}$ stars);
feedback budget $E_{\rm acc} = \eta M_{\rm BH}c^2$ against
$E_{\rm bind}\sim M_{\rm gal}\sigma^2$, a ratio of order $10^2$ — so ~1 percent
coupling unbinds the galaxy's gas.

*From* [5.2](lessons/05-02-milky-way.md), [5.3](lessons/05-03-galaxies-dark-matter.md), [5.4](lessons/05-04-galaxy-formation-agn.md), [5.5](lessons/05-05-clusters-large-scale-structure.md)

### The Friedmann equations

$$H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3}$$

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3p}{c^2}\right) + \frac{\Lambda c^2}{3} \qquad\qquad \dot\rho + 3\frac{\dot a}{a}\left(\rho + \frac{p}{c^2}\right) = 0$$

Newtonian energy conservation for an expanding sphere reproduces the first
equation exactly, with **curvature playing the role of total energy**
($k>0$ bound and recollapsing, $k=0$ the escape knife-edge, $k<0$ unbound). Only
the $\Lambda$ term has no Newtonian source. **Pressure gravitates**, which is why
$p < -\rho c^2/3$ (i.e. $w<-1/3$) is what it takes to accelerate.

*From* [6.1](lessons/06-01-expanding-universe-friedmann.md), [6.5](lessons/06-05-dark-energy-acceleration.md)

### How each component dilutes, and when it rules

| Component | $w$ | $\rho\propto$ | $a(t)$ while it dominates | Why |
|---|---|---|---|---|
| radiation | $+1/3$ | $a^{-4}$ | $a\propto t^{1/2}$, $H = 1/2t$ | volume dilution **plus** photon redshift |
| matter | $0$ | $a^{-3}$ | $a\propto t^{2/3}$, $H = 2/3t$ | fixed particle count in a growing volume |
| curvature | — | $a^{-2}$ | — | geometry, not a fluid |
| $\Lambda$ | $-1$ | $a^{0}$ = const | $a\propto e^{H_\Lambda t}$ (de Sitter) | energy of the vacuum itself |

Rewind and radiation always wins; run forward and $\Lambda$ always wins. Era
boundaries for $\Omega_m\approx0.3$, $\Omega_r\approx9\times10^{-5}$,
$\Omega_\Lambda\approx0.7$: radiation–matter equality at
$1+z_{\rm eq} = \Omega_m/\Omega_r\approx3300$; acceleration switches on
($\rho_m = 2\rho_\Lambda$) at $z\approx0.6$; matter–$\Lambda$ equality at
$z\approx0.3$.

*From* [6.1](lessons/06-01-expanding-universe-friedmann.md), [6.5](lessons/06-05-dark-energy-acceleration.md)

### Thermal history and BBN

$$T(a) = \frac{T_0}{a} = T_0(1+z), \qquad \Gamma = n\sigma v \gtrsim H \ \text{(equilibrium)}$$

| Epoch | $T$ | $k_BT$ | time | event |
|---|---|---|---|---|
| Planck | $10^{32}$ K | $10^{19}$ GeV | $10^{-43}$ s | theory runs out |
| quark–hadron | $10^{12}$ K | ~150 MeV | $10^{-5}$ s | quarks confine |
| neutrino decoupling | $10^{10}$ K | ~1 MeV | 1 s | neutrinos free-stream |
| $e^+e^-$ annihilation | $5\times10^{9}$ K | ~0.5 MeV | few s | photons reheated |
| **BBN** | $\sim10^{9}$ K | ~0.1 MeV | ~3 min | light nuclei form |
| recombination | 3000 K | ~0.3 eV | 380,000 yr | CMB released, $z\approx1100$ |

$$\frac{n_n}{n_p} = e^{-\Delta mc^2/k_BT},\ \Delta mc^2 = 1.293\ \text{MeV} \;\Rightarrow\; \tfrac15 \text{ at freeze-out} \to \tfrac17 \text{ at fusion}$$

$$Y = \frac{2(n_n/n_p)}{1+(n_n/n_p)} \approx 0.25$$

Robust, not fine-tuned: almost every surviving neutron ends up in $^4$He. BBN
stops at $^7$Li (the mass-5 and mass-8 gaps, plus no time or density for triple
alpha), and its deuterium abundance is a **baryometer** giving
$\Omega_b\approx0.05$ — far short of the dynamical $\Omega_m\approx0.3$, which is
the cosmological proof that dark matter is non-baryonic.

*From* [6.2](lessons/06-02-thermal-history-bbn.md)

### Structure growth

$$\ddot\delta + \underbrace{2H\dot\delta}_{\text{Hubble friction}} = 4\pi G\bar\rho\,\delta \qquad\Longrightarrow\qquad \delta_+\propto t^{2/3}\propto a, \quad \delta_-\propto t^{-1}$$

Expansion demotes the static Jeans exponential to a mere power law, so
perturbations grow only by a factor $\sim1100$ between recombination and now.
Baryons were pressure-locked to photons ($c_s\approx c/\sqrt3$) until
recombination and emerged still at $\delta\sim10^{-5}$ — which grows to only
$10^{-2}$. Cold dark matter, immune to radiation pressure, began growing at
$z_{\rm eq}$ and reached $\delta\sim10^{-3}$, which grows to $\sim1$: collapse,
just in time. **That factor of 100 head start is why galaxies exist.**

*From* [6.4](lessons/06-04-structure-formation-dark-matter.md), [6.3](lessons/06-03-cosmic-microwave-background.md)

### The concordance budget

$$\Omega_\Lambda\approx0.68, \qquad \Omega_{\rm dm}\approx0.27, \qquad \Omega_b\approx0.05, \qquad \Omega_{\rm total}\approx1.00, \qquad t_0 = 13.8\ \text{Gyr}$$

Six Lambda-CDM parameters — $\Omega_bh^2 = 0.0224$, $\Omega_ch^2 = 0.120$,
$H_0$ (via the sound-horizon angle), $\tau = 0.054$, $A_s = 2.1\times10^{-9}$,
$n_s = 0.965$ — fit dozens of independent numbers at once: CMB peak positions and
heights, BBN abundances, the galaxy power spectrum and BAO scale, and the
supernova Hubble diagram. **Inflation** supplies the initial conditions the model
assumes, solving the horizon problem (the CMB has $\sim10^4$ causally
disconnected patches at the same temperature) and the flatness problem
($\Omega = 1$ is unstable and would need 60-decimal tuning), while stretching
quantum fluctuations into the $\Delta T/T\sim10^{-5}$ seeds.

Open edges: what dark matter *is*, what dark energy *is* (the vacuum energy is
predicted $10^{120}$ times too large), the $\sim5\sigma$ **Hubble tension**
between early-universe ($H_0\approx67.4$) and ladder ($H_0\approx73$)
measurements, and the singularity at $t=0$.

*From* [6.6](lessons/06-06-concordance-model-frontiers.md), [6.5](lessons/06-05-dark-energy-acceleration.md)

## Assumed, not taught here

A Tier-2 capstone: this course *uses* its five prerequisites constantly rather
than re-deriving them. Where a fact has no home course, it is stated on this
card and the row says so.

| Fact | Where it's taught |
|---|---|
| Planck blackbody spectrum; $u = aT^4$; radiation pressure $P_{\rm rad} = \tfrac13aT^4$ | [stat-mech 4.3](../stat-mech/lessons/04-03-photon-gas-blackbody.md) |
| Degenerate Fermi gas: $P\propto n^{5/3}$ and its relativistic softening to $n^{4/3}$ | [stat-mech 4.4](../stat-mech/lessons/04-04-ideal-fermi-gas.md) |
| Pauli exclusion for identical fermions (why degeneracy pressure exists at all) | [quantum-mechanics 5.1](../quantum-mechanics/lessons/05-01-identical-particles.md) |
| Fermi–Dirac and Bose–Einstein occupation statistics | [stat-mech 4.2](../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md) |
| Boltzmann factor $e^{-E/k_BT}$ (n/p ratio, level populations) | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md) |
| Equipartition, $\tfrac32k_BT$ per particle | [stat-mech 3.4](../stat-mech/lessons/03-04-equipartition-theorem.md) |
| Ideal gas law (the stellar EOS) | [stat-mech 1.5](../stat-mech/lessons/01-05-ideal-gas-sackur-tetrode.md) |
| First law $dE = -p\,dV$; adiabatic processes and $\gamma$ (the cosmic fluid equation, $\nabla_{\rm ad}$) | [stat-mech 2.1](../stat-mech/lessons/02-01-laws-of-thermodynamics.md) |
| **Saha ionization equilibrium** — used in 1.3 and 6.3, derived in no course. Stated on this card; the chemical-potential machinery behind it is [stat-mech 3.5](../stat-mech/lessons/03-05-grand-canonical-ensemble.md) and [1.4](../stat-mech/lessons/01-04-temperature-pressure-chemical-potential.md) | *this card* |
| Quantum tunneling through a barrier (the Gamow factor is its smooth-Coulomb WKB limit) | [quantum-mechanics 2.5](../quantum-mechanics/lessons/02-05-scattering-barriers-tunneling.md), [6.4](../quantum-mechanics/lessons/06-04-wkb-approximation.md) |
| Hydrogen energy levels, $\chi = 13.6$ eV, the Balmer series and H-alpha | [quantum-mechanics 4.4](../quantum-mechanics/lessons/04-04-hydrogen-atom.md) |
| Electron/proton spin and hyperfine structure (the 21-cm line) | [quantum-mechanics 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md) |
| Radiative transition rates and selection rules (which lines form, and how strongly) | [quantum-mechanics 6.6](../quantum-mechanics/lessons/06-06-fermi-golden-rule-radiation.md) |
| Molecular rotational lines (cloud cooling) | [quantum-mechanics 4.3](../quantum-mechanics/lessons/04-03-spherical-harmonics-rigid-rotor.md) |
| Kepler's laws, $U = -GMm/r$, the shell theorem, uniform-sphere $U = -\tfrac35GM^2/R$ | [mechanics-refresher 5.1](../mechanics-refresher/lessons/05-01-gravitation-kepler.md) |
| Orbits and the effective potential (circular-orbit balance, inspiral energetics) | [mechanics-refresher 5.2](../mechanics-refresher/lessons/05-02-orbits-effective-potential.md) |
| Angular momentum $L = I\omega$ and its conservation (pulsar spin-up, accretion disks) | [mechanics-refresher 4.2](../mechanics-refresher/lessons/04-02-angular-momentum.md) |
| Escape velocity and energy conservation (the Newtonian Friedmann derivation, $r_s$) | [mechanics-refresher 2.2](../mechanics-refresher/lessons/02-02-potential-energy-conservation.md) |
| Radiated power spreading as $1/r^2$; that radiation carries momentum $E/c$ | [em-refresher 4.3](../em-refresher/lessons/04-03-energy-poynting.md), [4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md) |
| **Thomson cross-section** $\sigma_T = 6.65\times10^{-29}\ \mathrm{m^2}$ — the number behind $\kappa_{\rm es}$ and $L_{\rm Edd}$. Value stated on this card; the scattering picture is [em-refresher 4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md) | *this card* |
| Doppler shift, nonrelativistic and relativistic | [relativity 1.6](../relativity/lessons/01-06-relativistic-dynamics-optics.md) |
| Schwarzschild solution and the event horizon | [relativity 6.1](../relativity/lessons/06-01-schwarzschild-solution.md), [6.3](../relativity/lessons/06-03-black-holes-horizons.md) |
| Kerr (spinning) black holes and the no-hair statement | [relativity 6.4](../relativity/lessons/06-04-kerr-charged-holes.md) |
| Light bending — the basis of gravitational lensing as a mass estimator | [relativity 6.2](../relativity/lessons/06-02-orbits-precession-light-bending.md) |
| Gravitational waves and the quadrupole formula | [relativity 5.6](../relativity/lessons/05-06-linearized-gravity-waves.md) |
| FLRW metric and the Friedmann equations | [relativity 6.6](../relativity/lessons/06-06-flrw-metric.md), [6.7](../relativity/lessons/06-07-friedmann-equations.md) |
| Cosmic history, dark matter and dark energy in the GR framework | [relativity 6.8](../relativity/lessons/06-08-cosmic-history-dark-universe.md) |
| **TOV equation** (relativistic hydrostatic equilibrium for a neutron star) — used in 4.2, taught in no course on the roadmap. Quoted as a result; its ingredients are the Einstein equations, [relativity 5.3](../relativity/lessons/05-03-einstein-field-equations.md) | *gap* |

## Pitfalls

### Magnitudes and distances

- Bigger magnitude means **fainter** — the scale runs backwards and is logarithmic, so magnitude *differences* multiply fluxes rather than adding them. *([1.1](lessons/01-01-scales-luminosity-distance-ladder.md))*
- $d\,[\mathrm{pc}] = 1/p$ works **only** in arcseconds and parsecs; and the baseline is the orbital *radius* (1 AU), so $p$ is the semi-amplitude of the wobble, not its full swing. *([1.1](lessons/01-01-scales-luminosity-distance-ladder.md))*
- No standard candle is exactly standard — Cepheids need metallicity corrections, Type Ia are standard*ized* from light-curve shape, and each rung's error compounds upward. *([1.1](lessons/01-01-scales-luminosity-distance-ladder.md))*
- Flux alone is degenerate: a faint source is a dim bulb nearby *or* a searchlight far away. Break it with independent physics before quoting a distance. *([1.1](lessons/01-01-scales-luminosity-distance-ladder.md))*

### Reading a star's light

- Red is the **cool** end. Blue-white O stars are the furnaces; red M stars are the embers. *([1.2](lessons/01-02-blackbody-spectra-hr-diagram.md))*
- More luminous does not mean bigger: $L$ mixes $R$ and $T$, so you need both $L$ and $T$ to pin down $R$. That is exactly why the HR diagram is two-dimensional. *([1.2](lessons/01-02-blackbody-spectra-hr-diagram.md))*
- The HR diagram's temperature axis **increases leftward** — misread it and every star lands in the wrong place. *([1.2](lessons/01-02-blackbody-spectra-hr-diagram.md))*
- Wien locates the spectral *peak*, not the perceived hue; a star peaking in the UV still looks blue-white because its visible tail is enormous. *([1.2](lessons/01-02-blackbody-spectra-hr-diagram.md))*
- Line strength traces **temperature, not abundance** — Balmer lines peak in A stars because of the Saha/Boltzmann tug-of-war, not because those stars are hydrogen-rich. *([1.3](lessons/01-03-radiative-transfer-spectral-lines.md))*
- The Doppler formula gives the **radial** component only; transverse motion produces no first-order shift. *([1.3](lessons/01-03-radiative-transfer-spectral-lines.md))*

### Optical depth and opacity

- $\kappa$ is per *gram* (cm²/g), so only $\kappa\rho\,ds$ is dimensionless — always pair an opacity with a density and a path. *([1.3](lessons/01-03-radiative-transfer-spectral-lines.md))*
- Opacity is the *local* resistance; optical depth is that resistance accumulated along a path. Don't use one where you mean the other. *([1.3](lessons/01-03-radiative-transfer-spectral-lines.md), [2.2](lessons/02-02-energy-transport-opacity.md))*
- Absorption lines require the gas to be **cooler than the continuum behind it** — it's a temperature contrast, not an absolute property. *([1.3](lessons/01-03-radiative-transfer-spectral-lines.md))*
- Some texts measure $\tau$ inward from the surface and get $dI/d\tau = I - S$. Same physics, opposite bookkeeping — check which end $\tau = 0$ sits at. *([1.3](lessons/01-03-radiative-transfer-spectral-lines.md))*
- "Hotter means more opaque" is usually **backwards**: ionization switches off bound–free and free–free ($\kappa\propto T^{-3.5}$), so hot interiors are relatively transparent. *([2.2](lessons/02-02-energy-transport-opacity.md))*

### Gravitational mass estimates

- The virial theorem needs a **relaxed, bound, steady** system. Apply it to a merging or unbound one and you report a fictitious mass. *([1.4](lessons/01-04-gravitational-dynamics-virial.md), [5.5](lessons/05-05-clusters-large-scale-structure.md))*
- $\sigma$ is one-dimensional; $\langle v^2\rangle = 3\sigma^2$. Dropping the 3 underestimates the mass threefold. *([1.4](lessons/01-04-gravitational-dynamics-virial.md))*
- Losing energy makes a self-gravitating system **hotter** — negative heat capacity is not a sign error, it is the engine of stellar evolution. *([1.4](lessons/01-04-gravitational-dynamics-virial.md), [3.2](lessons/03-02-post-main-sequence.md))*
- Keplerian falloff $v\propto R^{-1/2}$ holds only *outside* essentially all the mass; inside a distributed mass only $M(R)$ pulls, and $v$ can even rise. *([5.2](lessons/05-02-milky-way.md))*
- A flat rotation curve is not "gravity levelling off" — read through $M = v^2R/G$ it means the enclosed mass keeps growing **linearly**. *([5.2](lessons/05-02-milky-way.md), [5.3](lessons/05-03-galaxies-dark-matter.md))*
- Three agreeing cluster masses are not three copies of one argument: dynamics assumes virialization, X-rays assume hydrostatic equilibrium, and **lensing assumes neither**. That independence is the whole force of the dark-matter case. *([5.5](lessons/05-05-clusters-large-scale-structure.md))*

### Stellar structure and energy transport

- Pressure does not hold a star up — the **gradient** does. Uniform pressure exerts zero net force on a shell. *([2.1](lessons/02-01-equations-stellar-structure.md))*
- The minus sign in $dP/dr$ means pressure *decreases outward*, not that pressure is negative. *([2.1](lessons/02-01-equations-stellar-structure.md))*
- $\mu < 1$ because ionization *multiplies* the particle count; using $\mu\approx1$ throws $T_c$ off by nearly a factor of two. *([2.1](lessons/02-01-equations-stellar-structure.md))*
- $m(r)$ is the mass *interior* to $r$, not the star's total — at the center it goes to zero, which flattens the pressure gradient there. *([2.1](lessons/02-01-equations-stellar-structure.md))*
- For a radiative star the furnace does **not** set the luminosity: $L$ is a *leakage rate* fixed by mass, opacity, and structure, and the core simply burns fast enough to replace it. *([2.2](lessons/02-02-energy-transport-opacity.md))*
- Convection is not "hot gas rises." A blob rises only if, *after* cooling adiabatically, it is still lighter than its **new** surroundings. *([2.2](lessons/02-02-energy-transport-opacity.md))*

### Nuclear burning

- Fusion happens at the **Gamow peak**, several times $k_BT$ — not at the mean thermal energy, because the rare fast protons tunnel so much more easily. *([2.3](lessons/02-03-nuclear-energy-generation.md))*
- "The barrier is 1 MeV" does not mean you need 1 MeV of thermal energy — tunneling lets keV protons through. The barrier sets the *difficulty*, not a threshold. *([2.3](lessons/02-03-nuclear-energy-generation.md))*
- The pp bottleneck is the **weak interaction**, not tunneling: $p+p$ makes deuterium only if a proton beta-converts mid-collision. Two independent rarities, multiplied. *([2.3](lessons/02-03-nuclear-energy-generation.md))*
- Iron ends fusion because it sits at the **peak of $B/A$**, not because it is heavy — products past it are *less* bound, so $Q<0$. *([3.3](lessons/03-03-nucleosynthesis-elements.md))*
- Supernovae do not forge the bulk of the heavy elements: most s-process material is made slowly in AGB stars, and C, N, O come from ordinary fusion. *([3.3](lessons/03-03-nucleosynthesis-elements.md))*

### Polytropes

- Higher $n$ gives a **more** centrally concentrated star, not a puffier one — density is $\theta^n$, and the exponent wins. *([2.4](lessons/02-04-polytropes-lane-emden.md))*
- $\theta$ is not the density: $\rho = \rho_c\theta^n$, $P = K\rho_c^{1+1/n}\theta^{n+1}$, and $T\propto\theta$ for an ideal gas. One profile, three fields. *([2.4](lessons/02-04-polytropes-lane-emden.md))*
- $\gamma = 1+1/n$ is a labeling convention, not a law of the gas. Whether a real star obeys $P\propto\rho^\gamma$ is a separate physical claim. *([2.4](lessons/02-04-polytropes-lane-emden.md))*

### Main sequence and evolution

- The main sequence is a **snapshot of many masses**, not a track one star climbs; a star sits at one spot for its whole hydrogen-burning life, then leaves entirely. *([2.5](lessons/02-05-main-sequence.md))*
- More massive means **shorter-lived**: fuel grows as $M$, burn rate as $M^{3.5}$. *([2.5](lessons/02-05-main-sequence.md))*
- The exponent in $L\propto M^{3.5}$ is not universal — steeper below $M_\odot$, flattening toward 1 above $20\,M_\odot$. *([2.5](lessons/02-05-main-sequence.md))*
- When fusion stops, only the **core** contracts; the envelope does the opposite (mirror principle), which is exactly why the star becomes a giant. *([3.2](lessons/03-02-post-main-sequence.md))*
- A red giant is luminous because it is **enormous**, not hot — its surface is cooler than the Sun's. *([3.2](lessons/03-02-post-main-sequence.md))*
- The helium flash does not blow the star apart; the runaway is spent lifting degeneracy, and from outside the star barely flinches. *([3.2](lessons/03-02-post-main-sequence.md))*

### Star formation and populations

- $M_J$ is the mass of the smallest *unstable region*, not of the star that forms — a cloud thousands of times $M_J$ fragments into a cluster. *([3.1](lessons/03-01-star-formation-jeans.md))*
- Hotter clouds collapse *less* easily: $M_J\propto T^{3/2}$, so heat is support. Cold gas is the fertile gas. *([3.1](lessons/03-01-star-formation-jeans.md))*
- Gravity supplies the energy but **cooling supplies the permission** — without radiation the released energy becomes pressure and self-arrests the collapse. *([3.1](lessons/03-01-star-formation-jeans.md))*
- Trust $M_J\propto T^{3/2}\rho^{-1/2}$; the leading numerical factor differs between books. *([3.1](lessons/03-01-star-formation-jeans.md))*
- "Most stars are like the Sun" is false — most are M dwarfs, and our sky is survivor's bias toward the rare bright ones. *([3.5](lessons/03-05-imf-stellar-populations.md))*
- Pop I / Pop II is **not** first/second generation: the numbering is historical, and Pop I is the metal-rich late-comer. Also, "metal" here means anything past helium. *([3.5](lessons/03-05-imf-stellar-populations.md), [5.2](lessons/05-02-milky-way.md))*
- A steep IMF does not make massive stars negligible — light, metals, and feedback all scale steeply *up* with mass. *([3.5](lessons/03-05-imf-stellar-populations.md))*

### Degeneracy and compact objects

- Degenerate matter's pressure **ignores temperature**, so there is no expand-and-cool valve. That single property causes both the helium flash and the Type Ia detonation. *([3.2](lessons/03-02-post-main-sequence.md), [3.4](lessons/03-04-stellar-death-supernovae.md))*
- A heavier white dwarf is a **smaller** one, $R\propto M^{-1/3}$ — the opposite of a rock. *([4.1](lessons/04-01-white-dwarfs-chandrasekhar.md))*
- $M_{\rm Ch}$ is not where pressure "runs out": degeneracy pressure keeps rising, but once relativistic it rises only *as fast as* gravity, so no stable margin remains. Softening, not vanishing, is the killer. *([4.1](lessons/04-01-white-dwarfs-chandrasekhar.md))*
- Neutron-star collapse halts by **Pauli exclusion**, not by neutrons being incompressible spheres — and the TOV limit is a range because the nuclear equation of state is unknown. *([4.2](lessons/04-02-neutron-stars-pulsars.md))*
- Pulsar pulses are a **beam sweeping past you**, not a beam switching on and off; and rotation is about the spin axis while the beam follows the *magnetic* axis. Misalignment is why pulsars exist. *([4.2](lessons/04-02-neutron-stars-pulsars.md))*
- Type I versus Type II is only "hydrogen lines or not." The physical divide is **Ia (thermonuclear) versus everything else (core collapse)**. *([3.4](lessons/03-04-stellar-death-supernovae.md))*
- The light of a core-collapse supernova carries under 0.01 percent of the energy; ~99 percent leaves as neutrinos. *([3.4](lessons/03-04-stellar-death-supernovae.md))*
- A "planetary nebula" has nothing to do with planets, and is physically unrelated to a supernova. *([3.4](lessons/03-04-stellar-death-supernovae.md))*

### Black holes, accretion, and waves

- Astrophysically the black hole **is its horizon**; what is inside is causally sealed off, and crossing a large horizon is locally uneventful. *([4.3](lessons/04-03-black-holes-astrophysics.md))*
- A black hole does not "suck" harder than an equal mass — swap the Sun for a solar-mass black hole and Earth's orbit is unchanged. It is extreme only *up close*. *([4.3](lessons/04-03-black-holes-astrophysics.md))*
- The escape-velocity derivation of $r_s$ is a mnemonic, not a proof — it misapplies Newtonian mechanics to light and gets the right answer by luck. *([4.3](lessons/04-03-black-holes-astrophysics.md))*
- Only about **half** of $GMm/R$ emerges as light from a disk; the rest is still orbital kinetic energy at the inner edge. *([4.4](lessons/04-04-accretion.md))*
- Angular momentum is not a detail — it is why a *disk* exists at all, and why accretion is slow, viscous, and luminous rather than a single impact flash. *([4.4](lessons/04-04-accretion.md))*
- $L_{\rm Edd}$ caps **steady** accretion; clumpy or anisotropic flows can briefly exceed it, so don't quote it as an inviolable maximum. *([4.4](lessons/04-04-accretion.md), [5.4](lessons/05-04-galaxy-formation-agn.md))*
- AGN luminosity is gravitational, not nuclear — a starving black hole is dark, which is why Sgr A\* is not a quasar. *([5.4](lessons/05-04-galaxy-formation-agn.md))*
- Gravitational waves are ripples **of** space, not waves travelling through a medium; and a perfectly axisymmetric spinning body radiates nothing, because its quadrupole is constant. *([4.5](lessons/04-05-gravitational-waves-mergers.md))*

### Galaxies and the ISM

- Interstellar space is a better vacuum than any laboratory, yet holds billions of solar masses — low density and small mass are different things when the volume is astronomical. *([5.1](lessons/05-01-interstellar-medium.md))*
- Dust is ~1 percent of the ISM by mass; extinction measures its **opacity**, not its quantity. *([5.1](lessons/05-01-interstellar-medium.md))*
- The ISM phases are intertwined at a common pressure, not separate regions — and stars form **only** in the cold molecular phase, never in the hot gas supernovae make. *([5.1](lessons/05-01-interstellar-medium.md))*
- The disk does not rotate rigidly: $\Omega = v/R$ falls with radius, so it shears continuously — which is why spiral arms must be density waves. *([5.2](lessons/05-02-milky-way.md))*
- Dark matter is not faint ordinary matter: cold gas would glow, MACHO microlensing searches came up short, and BBN plus the CMB cap the baryons at 5 percent. It must be **non-baryonic**. *([5.3](lessons/05-03-galaxies-dark-matter.md))*
- "Dark" means transparent, not black — it neither emits, absorbs, nor scatters. And the halo is a **sphere** enclosing the flat disk, not something in the spiral arms. *([5.3](lessons/05-03-galaxies-dark-matter.md))*
- A cluster's visible mass is mostly the hot X-ray gas, not its galaxies. *([5.5](lessons/05-05-clusters-large-scale-structure.md))*
- The cosmic web is **not** virialized — only the cluster nodes have detached from the expansion and relaxed. *([5.5](lessons/05-05-clusters-large-scale-structure.md))*
- Hierarchical assembly is bottom-up; and the $M$–$\sigma$ relation ties the black hole to the **bulge**, not to the whole galaxy. *([5.4](lessons/05-04-galaxy-formation-agn.md))*

### Cosmology

- Galaxies are not moving *through* space — space is stretching between them, which is why $v = Hd$ may exceed $c$ without contradiction, and why redshift is a stretching rather than a Doppler shift. *([6.1](lessons/06-01-expanding-universe-friedmann.md))*
- The Big Bang happened **everywhere**; there is no center and no edge. *([6.1](lessons/06-01-expanding-universe-friedmann.md))*
- $\Omega>1$ implies recollapse only when $\Lambda = 0$. With dark energy, geometry and destiny come apart — ours is flat *and* expands forever. *([6.1](lessons/06-01-expanding-universe-friedmann.md))*
- $H_0$ is a **rate** ($\mathrm{s^{-1}}$), not a velocity, and it changes with time; the subscript means "today." *([6.1](lessons/06-01-expanding-universe-friedmann.md))*
- Radiation dominated early because of the **scaling** $\rho_r/\rho_m\propto a^{-1}$, not because photons were numerous. *([6.2](lessons/06-02-thermal-history-bbn.md))*
- Freeze-out is a race ($\Gamma$ versus $H$), not a temperature threshold — a faster-expanding universe would freeze things out hotter. *([6.2](lessons/06-02-thermal-history-bbn.md))*
- The 25 percent helium yield is **robust, not fine-tuned** — which is exactly what makes measuring it a clean test. *([6.2](lessons/06-02-thermal-history-bbn.md))*
- Recombination (atoms forming) and decoupling (photons freed) are distinct statements, cause and consequence. *([6.3](lessons/06-03-cosmic-microwave-background.md))*
- The CMB is from 380,000 years *after* the beginning, not from the beginning; and redshifting a Planck curve leaves a Planck curve, just cooler. *([6.3](lessons/06-03-cosmic-microwave-background.md))*
- The $10^{-3}$ CMB dipole is **our own motion**; the primordial signal is the $10^{-5}$ pattern underneath. *([6.3](lessons/06-03-cosmic-microwave-background.md))*
- $\delta\propto a$ is *linear* growth, not collapse — real collapse begins at $\delta\sim1$, where the region turns around and virializes. *([6.4](lessons/06-04-structure-formation-dark-matter.md))*
- Expansion slows growth, it doesn't stop it — and dark matter is not interchangeable extra mass, because baryons were *forbidden* to grow before recombination. *([6.4](lessons/06-04-structure-formation-dark-matter.md))*
- "Hot" and "cold" dark matter refer to particle **speed** and free-streaming length, not to any gas temperature. *([6.4](lessons/06-04-structure-formation-dark-matter.md), [5.5](lessons/05-05-clusters-large-scale-structure.md))*
- Negative pressure is not suction: it is the combination $\rho + 3p/c^2$ that sources gravity, so a large negative $p$ makes gravity **repulsive**. *([6.5](lessons/06-05-dark-energy-acceleration.md))*
- Dark matter and dark energy are opposites, not two names for one mystery — one clumps and builds structure, the other is smooth and pulls it apart. *([6.5](lessons/06-05-dark-energy-acceleration.md))*
- The supernovae were not intrinsically dimmer; they are **farther** than deceleration allows. All the physics is in the distance–redshift relation. *([6.5](lessons/06-05-dark-energy-acceleration.md))*
- Dark energy does not mean new stuff appearing: the *density* of vacuum energy is constant, which is precisely why it eventually dominates. *([6.6](lessons/06-06-concordance-model-frontiers.md), [6.5](lessons/06-05-dark-energy-acceleration.md))*
- "Concordance" means *independent* probes agree, not that one experiment measured everything — remove any one and the rest still pin the model. *([6.6](lessons/06-06-concordance-model-frontiers.md))*
- Inflation is an episode *within* the first instant, not the Big Bang itself, and it says nothing about the singularity at $t=0$. *([6.6](lessons/06-06-concordance-model-frontiers.md))*

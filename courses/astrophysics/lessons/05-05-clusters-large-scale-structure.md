# Astrophysics · Lesson 5.5: Clusters and large-scale structure

> ⏱ ~15 min · Module 5: Galaxies and the interstellar medium · Builds on: [5.4 Galaxy formation & AGN](#/lesson/astrophysics/05-04-galaxy-formation-agn.md), [1.4 Gravitational dynamics & the virial theorem](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md) · Unlocks: Module 6 (cosmology) — Friedmann equations, the CMB, and structure formation

## Why this matters

Zoom all the way out. Stars clump into galaxies, galaxies clump into **clusters**, and clusters sit at the crossings of a vast filamentary **cosmic web** threaded around near-empty voids. Two payoffs live at this scale. First, clusters are the biggest objects gravity has managed to pull together and hold — the last rung where you can just *weigh the thing* — and here the case for dark matter stops being one clever argument and becomes **three independent measurements that agree**: galaxy motions, hot X-ray gas, and the bending of light. When methods with completely different assumptions land on the same answer, the answer is real. Second, the *pattern* of the web — how strongly matter clusters and on what scale — is a fossil of the early universe and one of cosmology's sharpest rulers. This lesson closes the galaxies module and hands you straight to Module 6: the same web whose mass you weigh here is what Module 6 explains how to *grow*.

## The idea

**The hierarchy is a competition between gravity and expansion.** The universe is expanding (Module 6); gravity fights back locally, pulling overdense regions together. Wherever gravity wins, it builds a bound, relaxed structure that has detached from the expansion; wherever it hasn't yet won, matter is still strung out along the flow.

- **Galaxy clusters** ($10^{14}$–$10^{15}\,M_\odot$, hundreds to thousands of galaxies) are the largest **gravitationally bound, virialized** systems — gravity has won, and they no longer expand. Their mass budget is a surprise: **dark matter dominates (~85%)**; the second-largest piece is not the galaxies but a **hot, X-ray-glowing gas** filling the space between them (the intracluster medium, ~13%); the galaxies and their stars are a mere **few percent**.
- **The cosmic web** — filaments, walls, and voids — is the largest structure of all, but it is *not* one bound object. It is the expanding universe caught mid-assembly: matter draining out of voids, along filaments, into the cluster nodes where it finally virializes.

The single most important trick in the lesson: **you can weigh a cluster three different ways.** Its galaxies orbit; time their jitter and use the virial theorem. Its gas is hot; the temperature tells you how deep the gravitational well is. Its mass bends light from galaxies behind it; measure the distortion. Three methods, three sets of assumptions, one answer — and every one of them needs five to six times more mass than the visible matter can supply.

## The formal version

**A cluster is a virialized ball.** From [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md), a relaxed self-gravitating system obeys $2\langle K\rangle + \langle U\rangle = 0$, which turns a velocity spread into a mass.

**Method 1 — galaxy dynamics (velocity dispersion).** Measure the line-of-sight velocity dispersion $\sigma$ (the spread of galaxy Doppler shifts) and the radius $R$. The virial estimate is
$$\boxed{\,M \sim \frac{\sigma^2 R}{G}\,}$$
*In words:* the mass is the jitter-speed squared times the size over $G$ — exactly Zwicky's 1933 calculation (Boss Problem 1). This assumes the cluster is **relaxed and bound**.

**Method 2 — hot gas (hydrostatic equilibrium).** The intracluster medium is a gas at $T\sim10^7$–$10^8$ K, held up in the cluster's potential just like the gas in a star ([2.1](#/lesson/astrophysics/02-01-equations-stellar-structure.md)):
$$\frac{dP}{dr} = -\frac{G\,M(r)\,\rho(r)}{r^2}, \qquad P = \frac{\rho\,k_B T}{\mu m_H}.$$
For a roughly isothermal gas these combine (dropping order-unity logarithmic-slope factors) into a **virial temperature**:
$$\boxed{\,k_B T \sim \frac{G M \mu m_H}{R}\,}\quad\Longrightarrow\quad M \sim \frac{k_B T\,R}{G\,\mu m_H}.$$
*In words:* the gas temperature *is* a thermometer for the depth of the gravitational well — hotter gas means more mass. Here $k_B=1.381\times10^{-23}$ J/K, $\mu\approx0.6$ is the mean molecular weight of fully ionized cluster gas, and $m_H=1.673\times10^{-27}$ kg. The hot gas radiates X-rays by **thermal bremsstrahlung** (electrons braking off ions) — a different mechanism than the blackbody of [1.2](#/lesson/astrophysics/01-02-blackbody-spectra-hr-diagram.md), but the same idea that a spectrum reads out a temperature. This assumes the gas is in **hydrostatic equilibrium**.

**Method 3 — gravitational lensing.** Mass bends light (general relativity; a deflection $\sim 4GM/(bc^2)$ for impact parameter $b$). A massive cluster distorts the images of galaxies *behind* it:
- **Strong lensing:** giant, stretched **arcs** and multiple images near the dense core.
- **Weak lensing:** a faint, coherent **shear** — background galaxies statistically stretched tangentially around the cluster.
The distortion maps the total mass directly. *In words:* lensing weighs the cluster from how much it warps spacetime, and — crucially — it assumes **nothing about the cluster's dynamical state**. No equilibrium, no relaxation: just gravity and geometry.

**They agree.** All three return $M \sim 10^{14}$–$10^{15}\,M_\odot$, five to six times the total baryonic (gas + stars) mass. That factor is the dark matter.

**The cosmic web and its ruler.** Redshift surveys (SDSS, mapping millions of galaxies by turning redshift into distance via Hubble's law) show galaxies traced onto **filaments** and sheet-like **walls** surrounding **voids** tens of Mpc across — the cosmic web. Frozen into this clustering is one special length: **baryon acoustic oscillations (BAO)**. Before the universe recombined, sound waves rang through the coupled photon–baryon plasma; when the plasma neutralized, the waves stopped, leaving a slight excess of galaxy pairs separated by a fixed comoving distance ($\approx150$ Mpc). *In words:* BAO is a **standard ruler** stamped on the matter distribution — the same acoustic physics you'll see as peaks in the CMB ([6.3](#/lesson/astrophysics/06-03-cosmic-microwave-background.md)), and measuring its apparent size at different redshifts charts the expansion history ([6.5](#/lesson/astrophysics/06-05-dark-energy-acceleration.md)).

## Picture

![Left: a single galaxy cluster shown as three nested mass components — a dark matter halo (~85%), a hot X-ray-emitting gas cloud (~13%, 10⁷–10⁸ K), and a sprinkle of galaxies (~2%). Right: the cosmic web on a dark background — bright nodes (clusters) linked by filaments around empty voids, with a BAO standard-ruler length marked](assets/05-05-fig1.svg)

Left is one cluster taken apart: almost all of its mass is the invisible halo, most of the *visible* mass is the diffuse hot gas, and the galaxies you actually see are the smallest slice. Right is the same matter one level up — clusters are the bright knots where filaments cross, and the dark gaps are voids. The little ruler is the BAO scale, one fixed length printed across the whole pattern.

## Worked examples

**Example 1 (weighing a cluster two ways, and watching them agree).** A rich cluster has velocity dispersion $\sigma\approx1000$ km/s over radius $R\approx1$ Mpc $=3.086\times10^{22}$ m, and its X-ray gas sits at $T\approx10^8$ K.

*Dynamics:* $\sigma=10^6$ m/s, so
$$M \sim \frac{\sigma^2 R}{G} = \frac{(10^6)^2(3.086\times10^{22})}{6.674\times10^{-11}} = 4.6\times10^{44}\ \mathrm{kg} \approx 2\times10^{14}\,M_\odot.$$

*Hot gas:* with $k_B T = 1.381\times10^{-15}$ J,
$$M \sim \frac{k_B T\,R}{G\,\mu m_H} = \frac{(1.381\times10^{-15})(3.086\times10^{22})}{(6.674\times10^{-11})(0.6)(1.673\times10^{-27})} = 6.4\times10^{44}\ \mathrm{kg} \approx 3\times10^{14}\,M_\odot.$$

Two utterly different observables — Doppler shifts of galaxies versus the temperature of gas — land within a factor of $1.5$ of each other. They would agree *exactly* if $k_B T = \mu m_H\sigma^2$; check: $\mu m_H\sigma^2 = 0.6\times1.673\times10^{-27}\times10^{12} = 1.0\times10^{-15}$ J, i.e. $T\approx7\times10^7$ K, right where the gas is observed. **The galaxies and the gas are two thermometers reading the same potential well.**

**Example 2 (why the mass budget forces dark matter — and matches the cosmos).** Take $M\approx2\times10^{14}\,M_\odot$. Count the baryons: the galaxies carry maybe $\sim10^{13}\,M_\odot$ in stars, and the hot gas — which X-ray brightness measures directly — carries a few times more, say $\sim2$–$3\times10^{13}\,M_\odot$. Total baryonic mass $\sim3\times10^{13}\,M_\odot$, so
$$\frac{M_{\rm total}}{M_{\rm baryonic}} \sim \frac{2\times10^{14}}{3\times10^{13}} \approx 6.$$
About $85\%$ of the cluster is neither stars nor gas. And that ratio $\sim6$ is no accident: it is close to the cosmic $\Omega_m/\Omega_b$ set independently by Big Bang nucleosynthesis and the CMB ([6.2](#/lesson/astrophysics/06-02-thermal-history-bbn.md), [6.3](#/lesson/astrophysics/06-03-cosmic-microwave-background.md)). Clusters are big enough to be **fair samples** of the universe's matter — weigh one and you have weighed the cosmic recipe.

## Watch out

- **You might think the visible mass of a cluster is its galaxies.** It isn't — the hot intracluster gas outweighs all the stars several times over. The galaxies are the *third*-largest component; dark matter is first, gas is second.
- **You might think three agreeing methods is just three copies of one argument.** The opposite: they share almost no assumptions. Dynamics needs virial equilibrium; hydrostatic gas needs a settled atmosphere; **lensing needs neither** — it weighs raw gravity through GR light-bending. Their agreement is what makes "unseen mass" survive the death of any single assumption (Problem 3).
- **You might think the cosmic web is a bound structure like a cluster.** It is not virialized. Filaments and superclusters are still forming — matter is flowing along them into the cluster nodes. Only the nodes (clusters) have detached from the expansion and relaxed.
- **Cold vs. hot dark matter is not about temperature you'd feel.** It's about particle *speed* in the early universe. "Hot" (fast, light) dark matter free-streams out of small clumps and erases small-scale structure; "cold" (slow, heavy) dark matter clumps on all scales and builds structure bottom-up. The observed web — small things forming first — says the dark matter is **cold** ([6.4](#/lesson/astrophysics/06-04-structure-formation-dark-matter.md)).

## One-liner

> A galaxy cluster is a dark-matter well ~85% invisible, filled with hot X-ray gas and a sprinkle of galaxies — weighed the same by their motions, their heat, and their bent light — sitting at a node of the cosmic web whose clustering is cosmology's fossil ruler.

## Problems

**P1 (🟢)** A cluster has line-of-sight velocity dispersion $\sigma=1000$ km/s and radius $R=1$ Mpc $=3.086\times10^{22}$ m. (a) Estimate its total mass from the virial relation $M\sim\sigma^2R/G$, in kg and in $M_\odot$ ($M_\odot=1.989\times10^{30}$ kg, $G=6.674\times10^{-11}$). (b) Its galaxies shine with about $10^{13}\,M_\odot$ of stars. By what factor does the dynamical mass exceed the stellar mass, and what does that imply?

**P2 (🟡)** The same cluster's intracluster gas is measured at $T=10^8$ K. Using the virial-temperature estimate $M\sim k_B T\,R/(G\,\mu m_H)$ with $\mu=0.6$, $m_H=1.673\times10^{-27}$ kg, $k_B=1.381\times10^{-23}$ J/K, estimate the mass independently and show it agrees with P1 to within the order-unity factors both estimates drop.

**P3 (🔴, optional)** Explain, in a short argument, why three independent methods (galaxy dynamics, X-ray gas, gravitational lensing) all returning a mass $\sim5$–$6\times$ the baryonic mass makes the dark-matter conclusion robust in a way that no single method could be. Address specifically: what assumption could a skeptic attack in *each* dynamical/hydrostatic method, and why does lensing close that door?

<details>
<summary>Solutions</summary>

**P1** (a) With $\sigma=10^6$ m/s, $\sigma^2=10^{12}\ \mathrm{m^2/s^2}$:
$$M \sim \frac{\sigma^2 R}{G} = \frac{(10^{12})(3.086\times10^{22})}{6.674\times10^{-11}} = \frac{3.086\times10^{34}}{6.674\times10^{-11}} = 4.6\times10^{44}\ \mathrm{kg}.$$
In solar masses: $4.6\times10^{44}/1.989\times10^{30} = 2.3\times10^{14}\,M_\odot$.
(b) $M/M_{\rm stars} \approx 2.3\times10^{14}/10^{13} \approx 20$. The gravitating mass is ~20 times the stellar mass. Even after adding the hot gas (a few $\times10^{13}\,M_\odot$), the total baryons fall ~6× short — most of the cluster is dark.
*Check:* units $(\mathrm{m^2/s^2})(\mathrm m)/(\mathrm{m^3\,kg^{-1}\,s^{-2}}) = \mathrm{kg}$ ✓; $\sim2\times10^{14}\,M_\odot$ is a textbook rich-cluster mass. ✓

**P2** With $k_B T = 1.381\times10^{-23}\times10^8 = 1.381\times10^{-15}$ J:
$$M \sim \frac{k_B T\,R}{G\,\mu m_H} = \frac{(1.381\times10^{-15})(3.086\times10^{22})}{(6.674\times10^{-11})(0.6)(1.673\times10^{-27})}.$$
Numerator: $1.381\times10^{-15}\times3.086\times10^{22} = 4.26\times10^{7}$.
Denominator: $6.674\times10^{-11}\times0.6\times1.673\times10^{-27} = 6.70\times10^{-38}$.
$$M \sim \frac{4.26\times10^{7}}{6.70\times10^{-38}} = 6.4\times10^{44}\ \mathrm{kg} \approx 3.2\times10^{14}\,M_\odot.$$
This is within a factor $\sim1.4$ of P1's $2.3\times10^{14}\,M_\odot$ — full agreement given that both formulas discard order-unity constants (the density profile's logarithmic slope, the exact geometry factor $\alpha$). In fact the two methods are the *same* estimate whenever $k_B T = \mu m_H\sigma^2$: here that would need $T = \mu m_H\sigma^2/k_B = 0.6\times1.673\times10^{-27}\times10^{12}/1.381\times10^{-23} = 7.3\times10^7$ K, essentially the observed $10^8$ K. The galaxies and the gas sit in — and report — one and the same potential well.
*Check:* units $(\mathrm J)(\mathrm m)/[(\mathrm{m^3\,kg^{-1}\,s^{-2}})(\mathrm{kg})] = (\mathrm{kg\,m^2\,s^{-2}})(\mathrm m)/(\mathrm{m^3\,s^{-2}}) = \mathrm{kg}$ ✓.

**P3** Each of the two "matter-in-motion" methods rests on an assumption a skeptic can name:
- **Galaxy dynamics** assumes the cluster is *virialized* — relaxed, bound, neither collapsing nor flying apart. If it were actually unbound or mid-merger, the large velocity dispersion would be transient, not gravitational, and the inferred mass would be a fiction.
- **X-ray gas** assumes the gas is in *hydrostatic equilibrium* — a settled atmosphere with pressure exactly balancing gravity. Bulk motions, turbulence, shocks, or magnetic support would break $dP/dr=-G M\rho/r^2$ and bias the mass.

Both assumptions concern the cluster's *dynamical state*, and a determined skeptic could argue either one away in a given cluster. **Gravitational lensing makes no such assumption at all.** It measures the deflection of light by the total mass along the line of sight — pure GR geometry, indifferent to whether the cluster is relaxed, turbulent, merging, or exploding. So when lensing returns the *same* $\sim5$–$6\times$ excess as dynamics and X-rays, the two equilibrium assumptions are vindicated rather than assumed, and the missing mass cannot be an artifact of any one of them. Robustness comes from the *independence of the failure modes*: for the conclusion to be wrong, three methods with disjoint assumptions would all have to fail and conspire to fail by the same factor. (The Bullet Cluster is the clean demonstration: in a collision, the lensing mass stays with the collisionless galaxies and dark matter while the X-ray gas is stripped and lags behind — the mass and the dominant baryons are physically *separated*, which no modified-gravity tweak of the visible matter can reproduce.)

</details>

## Flashback

**From Lesson 1.4 (Gravitational dynamics & the virial theorem):** A cluster of mass $M\approx2\times10^{14}\,M_\odot$ ($=4.0\times10^{44}$ kg) has radius $R=1$ Mpc $=3.086\times10^{22}$ m. Estimate its mean density $\rho$ and its dynamical time $t_{\rm dyn}\sim1/\sqrt{G\rho}$. Then explain in one sentence why clusters are relaxed (virialized) but the surrounding filaments and superclusters are not. (Recall $t_{\rm dyn}$ is the master clock of any self-gravitating blob, and the age of the universe is $\approx13.8$ Gyr.)

<details>
<summary>Solution</summary>

Mean density: $\rho = M/\tfrac43\pi R^3$. With $R^3=(3.086\times10^{22})^3 = 2.94\times10^{67}\ \mathrm{m^3}$ and $\tfrac43\pi=4.19$, the volume is $1.23\times10^{68}\ \mathrm{m^3}$, so
$$\rho = \frac{4.0\times10^{44}}{1.23\times10^{68}} = 3.2\times10^{-24}\ \mathrm{kg/m^3}.$$
Dynamical time:
$$t_{\rm dyn} \sim \frac{1}{\sqrt{G\rho}} = \frac{1}{\sqrt{(6.674\times10^{-11})(3.2\times10^{-24})}} = \frac{1}{\sqrt{2.1\times10^{-34}}} = \frac{1}{1.5\times10^{-17}} = 6.8\times10^{16}\ \mathrm s \approx 2\ \mathrm{Gyr}.$$
Since $t_{\rm dyn}\approx2$ Gyr is comfortably shorter than the $13.8$ Gyr age of the universe, a cluster has had several dynamical times to collapse, mix, and relax into virial equilibrium — whereas filaments and superclusters, being far less dense, have $t_{\rm dyn}$ comparable to or longer than the age of the universe and so have not yet finished collapsing.
*Check:* the density is $\sim$ a few hundred times the cosmic mean matter density ($\sim10^{-26}\ \mathrm{kg/m^3}$), consistent with the standard rule that an object virializes once its overdensity reaches a couple hundred. ✓

</details>

## Connections

- **Backward:** the cluster mass estimate is [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md)'s velocity-dispersion virial machine (Boss Problem 1) at its intended target, now cross-checked by hot-gas hydrostatic equilibrium — the very same $dP/dr=-G M\rho/r^2$ that holds up a star in [2.1](#/lesson/astrophysics/02-01-equations-stellar-structure.md), applied to a Mpc-scale gas ball. The dark-matter conclusion is the cluster-scale twin of the galaxy rotation curves in [5.3](#/lesson/astrophysics/05-03-galaxies-dark-matter.md) (Boss Problem 5).
- **Forward:** the cosmic web and its clustering statistics are the *output* of gravitational structure formation in [6.4](#/lesson/astrophysics/06-04-structure-formation-dark-matter.md); the BAO ruler is the same acoustic physics that peaks in the CMB ([6.3](#/lesson/astrophysics/06-03-cosmic-microwave-background.md)) and, tracked across redshift, becomes a distance probe for dark energy ([6.5](#/lesson/astrophysics/06-05-dark-energy-acceleration.md)). The amplitude and shape of the clustering constrains $\Omega_m$ and confirms the dark matter is cold.
- **Sideways (relativity):** gravitational lensing is Einstein light-bending used as a scale — the same deflection physics behind the [relativity](#/course/relativity) course's treatment of the Schwarzschild geometry, here turned into the one cluster-weighing method that needs no equilibrium assumption. The web's growth against cosmic expansion is set by the FLRW/Friedmann dynamics that open Module 6 ([6.1](#/lesson/astrophysics/06-01-expanding-universe-friedmann.md)).

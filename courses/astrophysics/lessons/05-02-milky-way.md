# Astrophysics · Lesson 5.2: The Milky Way

> ⏱ ~15 min · Module 5: Galaxies and the interstellar medium · Builds on: [5.1 The interstellar medium](#/lesson/astrophysics/05-01-interstellar-medium.md), [1.4 Gravitational dynamics](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md) · Unlocks: [5.3 Galaxies and dark matter](#/lesson/astrophysics/05-03-galaxies-dark-matter.md)

## Why this matters

We live inside the best-studied galaxy in the universe — and being inside it is both a gift and a curse. A gift, because we can resolve individual stars, weigh the central black hole by watching single stars orbit it, and read gas velocities cloud by cloud. A curse, because we see the Galaxy edge-on from a seat 8 kpc off-center, our view down the plane choked by dust. Yet from this one worm's-eye vantage came two of the twentieth century's biggest results: the **flat rotation curve** that first said, on galaxy scales, *most matter is dark*; and the four-million-solar-mass **black hole** at the center, weighed star by star, that won the 2020 Nobel Prize. This lesson is where the whole toolkit — Kepler, the enclosed-mass trick, stellar populations, cluster ages — comes home to our own address.

## The idea

Sort the Galaxy's stars by *where they are and how they move*, and three populations fall out — a structural fingerprint that repeats in every spiral:

- **A thin disk** (~30 kpc across, only a few hundred pc thick — a dinner plate, not a ball). This is where the Sun lives, ~8 kpc from center, threaded by spiral arms of gas and dust, still forming stars today. These are **Population I** stars: young, metal-rich (enriched by generations of prior supernovae), moving together on near-circular orbits like cars on a racetrack.

- **A central bulge and bar** — a dense, roughly spheroidal pile of mostly old stars a few kpc across, with a stellar bar funneling gas inward. At its very heart sits the black hole.

- **A diffuse halo** — a sparse, spherical cloud of the Galaxy's *oldest, most metal-poor* stars, plus ~150 **globular clusters** (tight balls of $10^5$–$10^6$ ancient stars). These are **Population II**: born before the Galaxy flattened into a disk, so they orbit every which way, plunging through the plane on random, elongated paths — the swarm, not the racetrack.

The reason the disk rotates and the halo swarms is angular momentum: gas can radiate away energy and settle into a spinning disk (its angular momentum is conserved, so it can't collapse further inward), but collisionless stars, once formed, keep their orbits forever. Two ways of being a galaxy, frozen in at birth.

And the disk does **not** turn like a record. It rotates *differentially* — inner material orbits faster (shorter period) than outer material. The Sun takes about one **galactic year** ($\sim$230 Myr) to circle once at 220 km/s; a star at half our radius laps us. How the orbital speed $v$ depends on radius $R$ — the **rotation curve** $v(R)$ — is the single most informative thing you can measure about a galaxy, because by Kepler it *is* a map of the enclosed mass.

## The formal version

**Mapping it (how we know the structure).** Optical light can't cross the dusty plane — extinction (from [5.1](#/lesson/astrophysics/05-01-interstellar-medium.md)) blots out distant disk stars and creates a "zone of avoidance" where the plane hides everything behind it. The breakthrough is the **21-cm line** of neutral atomic hydrogen (HI): a hyperfine spin-flip transition at $\lambda = 21\ \mathrm{cm}$, a radio wavelength that sails straight through dust. Radio surveys of 21-cm emission trace the disk gas everywhere, and its Doppler shifts give the gas *velocity* along each sightline — that is how the spiral arms and the rotation curve were mapped. (Historically, blind **star counts** by Herschel and Kapteyn tried and failed to find the center, precisely because dust made the counts fall off symmetrically in every direction — a mapping error, not a real edge.)

**Circular rotation = a scale.** A star on a near-circular orbit at radius $R$ feels the gravity of all mass *interior* to it, $M(R)$ (for a roughly spherical mass distribution — Newton's shell theorem). Centripetal balance:

$$\frac{v^2}{R} = \frac{G\,M(R)}{R^2}\quad\Longrightarrow\quad \boxed{\,M(R) = \frac{v^2 R}{G}\,}$$

*In words:* **the orbital speed at radius $R$ weighs everything inside $R$.** This is [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md)'s "weigh by orbit," now run as a function of radius. $G = 6.674\times10^{-11}\ \mathrm{N\,m^2/kg^2}$; take $1\ \mathrm{kpc} = 3.086\times10^{19}\ \mathrm m$, $M_\odot = 1.989\times10^{30}\ \mathrm{kg}$.

**What Kepler predicts, and what we see.** If (almost) all the mass sat interior to the Sun — as the *visible* disk and bulge do, their light petering out past ~15 kpc — then at larger $R$ the enclosed mass would be nearly constant $M(R)\approx M_{\rm tot}$, and

$$v(R) = \sqrt{\frac{G M_{\rm tot}}{R}} \;\propto\; R^{-1/2}\qquad(\textbf{Keplerian falloff}).$$

*In words:* past the edge of the light, speeds should **drop** like $1/\sqrt R$ — the same law that makes Neptune crawl while Mercury sprints (Kepler, [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md)). Instead, measured curves stay **flat**, $v(R)\approx\text{const}\approx 200$–$220$ km/s, far beyond the visible disk. Read backward through the boxed formula, flat $v$ forces

$$M(R) = \frac{v^2 R}{G} \;\propto\; R,\qquad \rho(R)\propto R^{-2},$$

i.e. the enclosed mass **keeps growing linearly with radius** even where there are no more stars to supply it. Something invisible, distributed in an extended **halo**, dominates the mass. This is the galactic-scale evidence for **dark matter** — the twin of [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md)'s cluster-scale (Zwicky) argument — and [5.3](#/lesson/astrophysics/05-03-galaxies-dark-matter.md) makes it the whole story.

**The Galactic center: Sgr A*.** At the dynamical center sits **Sagittarius A***, a compact radio source. Over two decades, infrared astronomers tracked *individual stars* — most famously **S2** — on complete Keplerian ellipses around it. One star's orbit fixes the central mass by [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md)'s $M = 4\pi^2 a^3/(GP^2)$:

$$M_{\rm Sgr\,A^{*}} \approx 4\times10^{6}\,M_\odot,$$

packed inside S2's closest approach ($\sim$120 AU). No star cluster that compact could survive — it is a **supermassive black hole** (the astrophysics of black holes as real objects is [4.3](#/lesson/astrophysics/04-03-black-holes-astrophysics.md)). Weighing it star-by-star won Genzel and Ghez the 2020 Nobel Prize.

**Globular clusters as clocks.** A globular cluster is a single-age population, so on its HR diagram the **main-sequence turnoff** — the point where stars are just now exhausting core hydrogen and peeling off toward the giant branch — reads its age directly (from [3.5](#/lesson/astrophysics/03-05-imf-stellar-populations.md): more massive stars burn out first, so the turnoff mass drops as the cluster ages). The oldest give $\sim$12–13 Gyr. That is a **lower bound on the age of the universe**, set entirely by stellar physics — and it must (and does) come in *under* the ~13.8 Gyr cosmology later derives.

## Picture

![Edge-on Milky Way showing a thin disk, central bulge and bar, and a diffuse halo of globular clusters, with the Sun marked at 8 kpc; alongside, a rotation curve v(R) that stays flat (observed) instead of falling like R to the minus one-half (Keplerian, visible mass only)](assets/05-02-fig1.svg)

Left: the Galaxy edge-on — the Sun sits far out in the thin disk, while old globular clusters swarm through the spherical halo. Right: the punchline. If the visible disk and bulge were all the mass, orbital speed past the Sun would slide down the dashed Keplerian curve; instead it stays flat, and that gap is the mass we can't see.

## Worked examples

**Example 1 (weigh the Galaxy inside the Sun's orbit).** The Sun orbits at $R = 8\ \mathrm{kpc}$ with $v = 220\ \mathrm{km/s}$. The enclosed mass is

$$M(R) = \frac{v^2 R}{G} = \frac{(2.2\times10^{5})^2\,(8\times3.086\times10^{19})}{6.674\times10^{-11}}.$$

Numerator: $v^2 = 4.84\times10^{10}\ \mathrm{m^2/s^2}$, $R = 2.469\times10^{20}\ \mathrm m$, product $= 1.195\times10^{31}$. Divide by $G$:

$$M(R) = \frac{1.195\times10^{31}}{6.674\times10^{-11}} = 1.79\times10^{41}\ \mathrm{kg} = \frac{1.79\times10^{41}}{1.989\times10^{30}} \approx 9\times10^{10}\,M_\odot.$$

About $10^{11}$ solar masses lie inside the Sun's orbit — roughly a hundred billion stars' worth, consistent with the visible disk. The surprise comes when you push $R$ outward and the number *keeps climbing*.

**Example 2 (the galactic year, and differential rotation).** How long is one orbit? $P = 2\pi R / v$:

$$P = \frac{2\pi\,(2.469\times10^{20}\ \mathrm m)}{2.2\times10^{5}\ \mathrm{m/s}} = \frac{1.551\times10^{21}}{2.2\times10^{5}} = 7.05\times10^{15}\ \mathrm s = \frac{7.05\times10^{15}}{3.156\times10^{7}} \approx 2.2\times10^{8}\ \mathrm{yr}.$$

One galactic year is $\sim$230 Myr — the Sun has made only ~20 laps in the Galaxy's whole life. Now compare a star at $R=4\ \mathrm{kpc}$: with $v$ still $\approx220$ km/s (flat curve!), its period is $P\propto R/v \approx$ half of ours, ~115 Myr. Inner stars circle faster in *angular* terms and lap outer ones — that is **differential rotation**, and it's exactly what winds up the spiral arms and shears apart any structure that isn't self-gravitating. A rigid record ($v\propto R$, constant angular speed) would keep neighbors neighbors forever; a real galaxy does not.

## Watch out

- **Flat $v(R)$ is not "no gravity" — it's *more* mass.** You might read a flat curve as speeds "leveling off" toward some natural cruising value. Backward through $M=v^2R/G$ it means the opposite: to hold $v$ fixed while $R$ grows, $M(R)$ must grow *linearly*. Constant speed is the signature of a mass that refuses to run out.
- **Keplerian falloff needs the mass to be interior.** $v\propto R^{-1/2}$ holds only *outside* essentially all the mass (like planets outside the Sun). Inside a distributed mass, only the interior part $M(R)$ pulls you (shell theorem), so a solid-body-like $v\propto R$ can even *rise*. Don't apply the point-mass Kepler law where the mass is spread out.
- **The disk does not rotate rigidly.** "The Galaxy spins" invites a merry-go-round picture where everything shares one angular speed. It doesn't: $\Omega = v/R$ falls with radius, so the disk continuously shears. This is why spiral arms are density waves, not fixed material structures — material arms would wind up into mush within a few galactic years.
- **"Metal" means anything past helium.** Population II being "metal-poor" doesn't mean low iron specifically — astronomers call every element heavier than He a *metal*. Old halo stars formed before much enrichment, so they're metal-poor; the metal-rich Sun is a later, recycled generation ([3.5](#/lesson/astrophysics/03-05-imf-stellar-populations.md)).

## One-liner

> Our Galaxy is a thin metal-rich disk (Sun at 8 kpc, 220 km/s, one lap per 230 Myr) inside an old metal-poor halo — and its flat rotation curve, read through $M=v^2R/G$, weighs an unseen mass that keeps growing past the last visible star.

## Problems

**P1 (🟢)** The Sun orbits the Galactic center at $R = 8\ \mathrm{kpc}$ with speed $v = 220\ \mathrm{km/s}$. Starting from circular-orbit balance $v^2/R = GM/R^2$, derive $M = v^2R/G$ and evaluate the mass of the Galaxy interior to the Sun, in $M_\odot$. ($1\ \mathrm{kpc} = 3.086\times10^{19}\ \mathrm m$.)

**P2 (🟡)** The star S2 orbits Sgr A* with semi-major axis $a \approx 1000\ \mathrm{AU}$ and period $P \approx 16\ \mathrm{yr}$. Use Kepler's third law in the solar-unit shortcut $M/M_\odot = (a/\mathrm{AU})^3/(P/\mathrm{yr})^2$ to find the central mass. Why does a *single* star's orbit suffice to prove a black hole, when weighing a star cluster needs a whole velocity dispersion?

**P3 (🔴, optional)** The Galaxy's rotation curve stays flat at $v\approx220\ \mathrm{km/s}$ from the Sun ($8\ \mathrm{kpc}$) out to at least $R\approx80\ \mathrm{kpc}$, traced by satellite gas and stars.
(a) Using $M(R)=v^2R/G$, find the factor by which the enclosed mass grows between 8 and 80 kpc.
(b) If instead *all* the mass were the visible $\sim9\times10^{10}\,M_\odot$ interior to the Sun, what speed would Kepler predict at 80 kpc? By what factor does the observed speed exceed it?
(c) From (b), estimate how many times more mass the flat curve demands at 80 kpc than the visible matter provides.

<details>
<summary>Solutions</summary>

**P1** For a circular orbit, gravity supplies the centripetal acceleration: $\dfrac{v^2}{R} = \dfrac{GM(R)}{R^2}$. Multiply both sides by $R^2/G$:

$$M(R) = \frac{v^2 R}{G}.$$

The orbiting mass cancels, so any circular orbit weighs the interior mass. Plug in $v = 2.2\times10^5\ \mathrm{m/s}$, $R = 8\times3.086\times10^{19} = 2.469\times10^{20}\ \mathrm m$:

$$M = \frac{(2.2\times10^5)^2\,(2.469\times10^{20})}{6.674\times10^{-11}} = \frac{(4.84\times10^{10})(2.469\times10^{20})}{6.674\times10^{-11}} = \frac{1.195\times10^{31}}{6.674\times10^{-11}} = 1.79\times10^{41}\ \mathrm{kg}.$$

In solar masses: $M = 1.79\times10^{41}/1.989\times10^{30} \approx 9.0\times10^{10}\,M_\odot$.
*Check:* units are $(\mathrm{m^2/s^2})(\mathrm m)/(\mathrm{m^3\,kg^{-1}\,s^{-2}}) = \mathrm{kg}$ ✓; $\sim10^{11}\,M_\odot$ is the textbook mass inside the solar circle. ✓

**P2** Direct substitution:

$$\frac{M}{M_\odot} = \frac{(1000)^3}{(16)^2} = \frac{10^{9}}{256} = 3.9\times10^{6}.$$

So $M_{\rm Sgr\,A^{*}}\approx 4\times10^6\,M_\odot$. One star suffices because it traces a *complete Keplerian ellipse* around a single point — $a$ and $P$ alone pin the central mass, no equilibrium assumption needed. A star cluster gives no such clean orbits: you see only a snapshot of random speeds, so you must invoke the **virial theorem** ([1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md)), which needs the system to be *relaxed and bound* and delivers only a statistical mass from the velocity dispersion $\sigma$. A resolved orbit is a direct measurement; a dispersion is a statistical inference.
*Check:* the two Galactic-center stars weigh the same object, so this must match [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md)'s $3.9\times10^6\,M_\odot$ — it does. ✓

**P3** (a) Since $M(R)=v^2R/G$ with $v$ fixed, $M\propto R$. From 8 to 80 kpc is a factor of 10 in radius, so

$$\frac{M(80)}{M(8)} = \frac{80}{8} = 10.$$

The enclosed mass grows to $\sim9\times10^{11}\,M_\odot$ — an order of magnitude more than sits inside the Sun's orbit, gathered from a region essentially empty of stars.

(b) If $M_{\rm tot}=9\times10^{10}\,M_\odot$ were all interior, Kepler gives $v\propto R^{-1/2}$:

$$v_{\rm Kep}(80) = v(8)\sqrt{\frac{8}{80}} = 220\times\sqrt{0.1} = 220\times0.316 \approx 70\ \mathrm{km/s}.$$

Observed $\approx220$ km/s exceeds this by a factor $220/70 \approx 3.2$ (which is just $\sqrt{10}$, as it must be).

(c) Mass scales as $v^2$ at fixed radius, so the flat curve demands

$$\frac{M_{\rm needed}}{M_{\rm visible}} = \left(\frac{v_{\rm obs}}{v_{\rm Kep}}\right)^2 = (3.2)^2 \approx 10.$$

About **ten times** more mass than the visible matter supplies — an extended dark halo, roughly isothermal ($\rho\propto R^{-2}$), outweighing the stars it envelops. This is Boss Problem 5 in miniature and the launch point for [5.3](#/lesson/astrophysics/05-03-galaxies-dark-matter.md).
*Check:* (a) and (c) agree — the enclosed mass grew 10-fold over a range where visible mass barely grew, so the excess is ~10×. ✓

</details>

## Flashback

**From Lesson 1.2 (Blackbody spectra and the HR diagram):** A young, hot blue star in a spiral arm has its blackbody spectrum peaking at $\lambda_{\max}\approx 145\ \mathrm{nm}$, while an old red giant in a globular cluster peaks at $\lambda_{\max}\approx 966\ \mathrm{nm}$. Use Wien's displacement law, $\lambda_{\max}T = 2.90\times10^{-3}\ \mathrm{m\,K}$, to find each surface temperature. Which population is which?

<details>
<summary>Solution</summary>

Wien's law rearranges to $T = (2.90\times10^{-3}\ \mathrm{m\,K})/\lambda_{\max}$:

$$T_{\rm blue} = \frac{2.90\times10^{-3}}{1.45\times10^{-7}} \approx 2.0\times10^{4}\ \mathrm K,\qquad T_{\rm red} = \frac{2.90\times10^{-3}}{9.66\times10^{-7}} \approx 3.0\times10^{3}\ \mathrm K.$$

The blue star at ~20,000 K is the hot, short-lived **Population I** disk star (spiral arms are lit by exactly these); the ~3,000 K red giant is the cool, ancient **Population II** halo/globular-cluster star. Hotter peaks bluer — shorter $\lambda_{\max}$ — precisely the inverse relation Wien encodes, and the reason star *color* is a thermometer.
*Check:* the shorter wavelength gives the higher temperature, and the factor $966/145\approx6.7$ in wavelength matches the inverse factor $\approx6.7$ in temperature. ✓

</details>

## Connections

- **Backward:** the entire lesson is [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md)'s "weigh by orbit" run as a function of radius — $M(R)=v^2R/G$ is circular-orbit Kepler, and Sgr A* reuses that lesson's S2 calculation verbatim. Reading the plane past the dust leans on the interstellar extinction of [5.1](#/lesson/astrophysics/05-01-interstellar-medium.md); dating globular clusters by their main-sequence turnoff is the stellar-populations clock of [3.5](#/lesson/astrophysics/03-05-imf-stellar-populations.md); star colors as thermometers is [1.2](#/lesson/astrophysics/01-02-blackbody-spectra-hr-diagram.md) (the Flashback).
- **Forward:** the flat rotation curve is the opening argument of [5.3 Galaxies and dark matter](#/lesson/astrophysics/05-03-galaxies-dark-matter.md) and its Boss Problem; Sgr A* as a real compact object is developed in [4.3 Black holes](#/lesson/astrophysics/04-03-black-holes-astrophysics.md), and the black-hole/bulge co-evolution it hints at is [5.4](#/lesson/astrophysics/05-04-galaxy-formation-agn.md); the globular-cluster age floor becomes a constraint the cosmology of Module 6 must respect.
- **Sideways (dark matter, two scales):** the galaxy-rotation-curve evidence here and the galaxy-cluster velocity-dispersion evidence of [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md) (Zwicky) are the same dynamical logic — visible motion demands invisible mass — measured on two different scales, and they converge with the cosmological case in [6.4](#/lesson/astrophysics/06-04-structure-formation-dark-matter.md).

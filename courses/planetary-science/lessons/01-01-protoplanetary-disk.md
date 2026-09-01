# Planetary Science · Lesson 1.1: The protoplanetary disk

> ⏱ ~15 min · Module 1: Solar-system formation · Builds on: [mechanics-refresher](../../mechanics-refresher/syllabus.md), [thermodynamics-physics](../../thermodynamics-physics/syllabus.md) · Unlocks: [1.2](01-02-condensation-frost-line.md), [1.3](01-03-accretion-dust-to-planetesimals.md), [1.4](01-04-giant-planets-migration.md)

## Why this matters

Every planet in this course was assembled out of the same object: a flat, rotating, cooling disk of gas and dust about 100 AU across that existed for a few million years and then vanished. Nothing about the solar system's architecture is arbitrary once you accept that starting condition — the planets orbit in one plane because the disk was flat, they orbit the same way because the disk spun one way, and the rocky ones are small and inside while the giant ones are large and outside because of where the disk was hot and where it was cold.

The disk is not a hypothesis you have to take on faith. Since the 1990s we have imaged hundreds of them around other young stars, resolved gaps carved by forming planets, and measured how long they last. What this lesson supplies is the reason a disk had to form at all — and it comes from one conservation law you already know.

## The idea

**Start with a cloud that is barely rotating and let gravity win.** Star formation begins in a cold molecular cloud core: roughly a solar mass of gas, about 0.05 parsecs across, at 10 K, turning so slowly that one rotation takes tens of millions of years. It is gravitationally unstable, so it collapses.

**Now ask what stops the collapse — and notice the answer depends on direction.** A parcel of gas sitting directly above the rotation axis has essentially no angular momentum about that axis. Nothing resists its fall; it drops straight onto the centre. A parcel out at the equator has all the angular momentum it started with, and that angular momentum is conserved as it falls. Its rotation speeds up as $1/r^2$ while gravity only strengthens as $1/r^2$ — but the centrifugal effect grows as $1/r^3$, so it wins eventually. That parcel does not reach the centre. It stalls at some radius and goes into orbit.

**So the collapse is anisotropic, and anisotropic collapse means a disk.** Material rains in freely along the poles and is held up in the equatorial plane. Within a free-fall time the core has turned into a central protostar surrounded by a thin, rotating, gas-rich disk. That is not a special outcome requiring fine-tuning; it is what *any* rotating collapse does, which is why essentially every young star has one.

**The disk is not static — it drains.** Gas in the disk has to lose angular momentum to fall onto the star, and it does so by passing that angular momentum outward to its neighbours through turbulence and magnetic stresses. So the disk simultaneously accretes inward and spreads outward, which is why the solar system is 100 AU wide when the core's angular momentum only called for about 30 AU. After a few million years the gas is gone — accreted, photoevaporated, or blown off — and whatever solid material has managed to clump together by then is all the planets you are ever going to get. **That deadline is the single hardest constraint in planet formation.**

## The formal version

**Specific angular momentum is conserved.** For a fluid parcel at cylindrical radius $\varpi$ from the rotation axis, moving with azimuthal speed $v_\phi$, the angular momentum per unit mass is

$$j = \varpi v_\phi = \varpi^2 \Omega,$$

where $\Omega$ is the angular velocity. *In words: how much "spin" a kilogram of gas carries.* With no external torque, $j$ is fixed for that parcel all the way down.

**The centrifugal radius.** A parcel falling from initial radius $R_0$ in the equatorial plane, in the gravity of a central mass $M$, cannot get closer than the radius where its conserved $j$ supports a circular orbit. Setting $j = \sqrt{GMr}$ and solving:

$$\boxed{\ R_c = \frac{j^2}{GM}\ }$$

*In words: all the infalling material piles up inside this radius, so $R_c$ sets the size of the disk that forms.*

**Where each parcel lands.** In the standard axisymmetric infall solution, a parcel starting at polar angle $\theta_0$ from the rotation axis has $j = \Omega R_0^2\sin^2\theta_0$, and it arrives in the midplane at

$$r_{\text{land}} = R_c\sin^2\theta_0 .$$

*In words: polar material ($\theta_0 \to 0$) lands on the star, equatorial material ($\theta_0 \to 90^\circ$) lands at the disk's outer edge, and everything else lands in between.* This is the figure below.

**The free-fall time.** A uniform sphere of density $\rho$ collapses under its own gravity in

$$t_{\text{ff}} = \sqrt{\frac{3\pi}{32 G\rho}} ,$$

independent of its radius. For the core above, $\rho \approx 1.3\times10^{-16}\ \mathrm{kg\,m^{-3}}$ and $t_{\text{ff}} \approx 1.9\times10^{5}$ yr.

**The disk's mass distribution.** Take the present planets, restore each to solar composition (Jupiter's rock and ice imply a much larger mass of the hydrogen and helium that came with it), and smear the result into annuli. The resulting **minimum-mass solar nebula** has surface density

$$\Sigma(r) \approx 1700 \left(\frac{r}{\text{AU}}\right)^{-3/2}\ \mathrm{g\,cm^{-2}},$$

totalling about $0.01\,M_\odot$. *In words: the least gas you could possibly have started with and still built these planets.* It is a floor, not a measurement — planet formation is inefficient, so the real disk was heavier.

**Two timescales you will keep meeting.**

| Timescale | Value | What it gates |
|---|---|---|
| Core free-fall | $\sim2\times10^5$ yr | how fast the disk appears |
| Disk lifetime (gas) | $1$–$10$ Myr, median $\sim3$ Myr | deadline for gas-giant formation ([1.4](01-04-giant-planets-migration.md)) |
| Terrestrial-planet assembly | $10$–$100$ Myr | happens *after* the gas is gone ([1.3](01-03-accretion-dust-to-planetesimals.md)) |

The disk lifetime is measured, not modelled: survey young clusters of known age, count what fraction of stars still show excess infrared emission from warm dust, and watch that fraction fall from nearly 100 percent below 1 Myr to nearly zero by 10 Myr.

## Picture

![Left panel, a slowly rotating spherical cloud core about 0.05 parsecs across with a dashed rotation axis, an arrow showing an angular velocity of about ten to the minus fourteen per second, and infall arrows pointing inward from all directions, labelled with a free-fall time of about two hundred thousand years. A curved arrow labelled collapse leads to the right panel, which shows four pairs of infall streamlines curving from high above and below the midplane down onto a flat disk around a central star. Streamlines starting near the poles land close to the star and streamlines starting near the equator land at the disk edge, marked as the centrifugal radius of about thirty AU, with the note that a parcel from polar angle theta-nought lands at r equals R sub c times sine squared theta-nought](assets/01-01-fig1.svg)

The streamlines are the real infall solution, not a sketch: each one starts at a different polar angle and every one of them terminates inside $R_c$.

## Worked examples

**Example 1 (mechanical — sizing the disk).** A core of $1\,M_\odot$ has radius $R_0 = 0.05\ \mathrm{pc} = 1.54\times10^{15}$ m and rotates at $\Omega = 1.0\times10^{-14}\ \mathrm{s^{-1}}$. What size disk does it make?

Specific angular momentum at the equator:

$$j = \Omega R_0^2 = 1.0\times10^{-14}\times(1.54\times10^{15})^2 = 2.38\times10^{16}\ \mathrm{m^2\,s^{-1}}.$$

Centrifugal radius:

$$R_c = \frac{j^2}{GM} = \frac{(2.38\times10^{16})^2}{6.674\times10^{-11}\times1.989\times10^{30}} = \frac{5.67\times10^{32}}{1.33\times10^{20}} = 4.27\times10^{12}\ \mathrm{m}.$$

$$R_c = \frac{4.27\times10^{12}}{1.496\times10^{11}} = 28.5\ \mathrm{AU}.$$

**Neptune's orbit is 30 AU.** A rotation rate so slow it is barely detectable, applied to a cloud 360 times larger than the resulting disk, lands you within ten percent of the size of the solar system. That agreement is the strongest single argument that the nebular picture is right.

**Example 2 (why you'd care — the angular momentum problem).** The Sun holds 99.86 percent of the solar system's mass. How much of its angular momentum?

Jupiter's orbital angular momentum, treating it as a circular orbit with $M_J = 1.90\times10^{27}$ kg, $a = 7.78\times10^{11}$ m, $v = 1.307\times10^{4}\ \mathrm{m\,s^{-1}}$:

$$L_J = M_J v a = 1.90\times10^{27}\times1.307\times10^{4}\times7.78\times10^{11} = 1.93\times10^{43}\ \mathrm{kg\,m^2\,s^{-1}}.$$

The Sun's spin, with $C_\odot \approx 0.07\,M_\odot R_\odot^2 = 0.07\times1.989\times10^{30}\times(6.96\times10^{8})^2 = 6.74\times10^{46}\ \mathrm{kg\,m^2}$ and $\Omega_\odot = 2.9\times10^{-6}\ \mathrm{s^{-1}}$:

$$L_\odot = C_\odot\Omega_\odot = 6.74\times10^{46}\times2.9\times10^{-6} = 1.96\times10^{41}\ \mathrm{kg\,m^2\,s^{-1}}.$$

So **Jupiter alone carries about 100 times the Sun's spin angular momentum**, and the planets together hold over 99 percent of the system's total while holding 0.14 percent of its mass.

This is not a curiosity, it is the central dynamical fact about disks. If the core's angular momentum had simply been shared out with the mass, the Sun would be spinning near break-up and there would be no star, just a fat rotating blob. Something moved almost all of the angular momentum outward while moving almost all of the mass inward. Turbulent and magnetic stresses in the disk do exactly that: they let a little material carry a lot of angular momentum out to large radius, so the rest can drain in. **A disk is an angular-momentum-sorting machine, and the planets are the residue it left at the far end.**

## Watch out

- **You might think centrifugal force stops the collapse everywhere, but it only acts perpendicular to the rotation axis.** There is no centrifugal support along the axis at all, which is precisely why the outcome is a flat disk rather than a slowly-shrinking sphere. Any argument that treats the collapse as spherically symmetric has thrown away the physics that makes planets possible.
- **You might think the minimum-mass solar nebula is a measurement of the early disk, but it is a lower bound reconstructed backwards from the planets that survived.** It assumes nothing migrated ([1.4](01-04-giant-planets-migration.md) will demolish that) and that formation was 100 percent efficient. Use it as a convenient reference profile, never as evidence.
- **You might think the disk lifetime is a theoretical estimate, but the 1–10 Myr number is observational** — infrared-excess fractions in clusters of known age. It is one of the few hard numbers in this subject, and it is the deadline every gas giant has to beat.

## One-liner

> A rotating cloud cannot fall to a point, so it falls to a disk — and everything else in this course is what happened to the leftovers.

## Problems

**P1 (🟢)** A cloud core of mass $0.5\,M_\odot$ and radius $R_0 = 3.0\times10^{15}$ m rotates at $\Omega = 4.0\times10^{-15}\ \mathrm{s^{-1}}$. (a) Compute $j$ for an equatorial parcel. (b) Compute the centrifugal radius in AU. (c) A parcel starting at polar angle $\theta_0 = 45^\circ$ lands where?

**P2 (🟡)** Using the minimum-mass solar nebula $\Sigma(r) = 1700\,(r/\text{AU})^{-3/2}\ \mathrm{g\,cm^{-2}}$, compute the total gas mass between 0.5 and 1.5 AU, in Earth masses ($M_\oplus = 5.97\times10^{24}$ kg). Compare with Earth's actual mass and comment on what fraction of the local gas ended up in the planet.

**P3 (🔴, optional)** Angular momentum transport is often parameterized as a viscosity $\nu = \alpha c_s H$, where $c_s$ is the sound speed, $H$ the disk's vertical scale height, and $\alpha \approx 10^{-2}$. The time for gas to drain from radius $r$ is $t_\nu \sim r^2/\nu$. At $r = 10$ AU take $c_s = 500\ \mathrm{m\,s^{-1}}$ and $H/r = 0.05$. (a) Compute $\nu$. (b) Compute $t_\nu$ in years. (c) Compare with the observed disk lifetime and say what that comparison establishes.

<details>
<summary>Solutions</summary>

**P1** (a) $$j = \Omega R_0^2 = 4.0\times10^{-15}\times(3.0\times10^{15})^2 = 4.0\times10^{-15}\times9.0\times10^{30} = 3.60\times10^{16}\ \mathrm{m^2\,s^{-1}}.$$

(b) With $M = 0.5\,M_\odot = 9.945\times10^{29}$ kg:

$$GM = 6.674\times10^{-11}\times9.945\times10^{29} = 6.638\times10^{19},$$
$$R_c = \frac{(3.60\times10^{16})^2}{6.638\times10^{19}} = \frac{1.296\times10^{33}}{6.638\times10^{19}} = 1.952\times10^{13}\ \mathrm{m}.$$

$$R_c = \frac{1.952\times10^{13}}{1.496\times10^{11}} = 130\ \mathrm{AU}.$$

A slower rotation than Example 1 but a much larger core — and $R_c \propto R_0^4$, so the core size dominates completely.

(c) $$r_{\text{land}} = R_c\sin^2 45^\circ = 130\times0.5 = 65\ \mathrm{AU}.$$

**P2** Work in SI. $\Sigma_0 = 1700\ \mathrm{g\,cm^{-2}} = 17{,}000\ \mathrm{kg\,m^{-2}}$ at 1 AU. With $r$ measured in AU and $a = 1.496\times10^{11}$ m per AU,

$$M = \int_{0.5}^{1.5} \Sigma\,2\pi r\,dr = 2\pi\Sigma_0 a^2\int_{0.5}^{1.5} r^{-3/2}\,r\,dr = 2\pi\Sigma_0 a^2\int_{0.5}^{1.5} r^{-1/2}\,dr.$$

$$\int_{0.5}^{1.5} r^{-1/2}\,dr = \left[2\sqrt r\right]_{0.5}^{1.5} = 2(1.2247 - 0.7071) = 1.0352.$$

$$M = 2\pi\times17{,}000\times(1.496\times10^{11})^2\times1.0352 = 2\pi\times17{,}000\times2.238\times10^{22}\times1.0352.$$

$$M = 2.474\times10^{27}\ \mathrm{kg} = \frac{2.474\times10^{27}}{5.97\times10^{24}} = 414\ M_\oplus.$$

Earth is $1\,M_\oplus$, so **Earth is about 0.24 percent of the gas that passed through its own feeding zone.** Almost all of it was hydrogen and helium that never condensed and was eventually swept away; even of the roughly 0.5 percent that was rock, most did not end up in Earth. Planet formation is a spectacularly lossy process, and this is the quantitative reason the minimum-mass nebula is only a floor.

**P3** (a) $$H = 0.05\times10\ \mathrm{AU} = 0.05\times1.496\times10^{12} = 7.48\times10^{10}\ \mathrm{m},$$
$$\nu = \alpha c_s H = 10^{-2}\times500\times7.48\times10^{10} = 3.74\times10^{11}\ \mathrm{m^2\,s^{-1}}.$$

(b) $$r^2 = (1.496\times10^{12})^2 = 2.238\times10^{24}\ \mathrm{m^2},$$
$$t_\nu = \frac{2.238\times10^{24}}{3.74\times10^{11}} = 5.98\times10^{12}\ \mathrm{s} = \frac{5.98\times10^{12}}{3.156\times10^{7}} = 1.9\times10^{5}\ \mathrm{yr}.$$

(c) About 0.2 Myr, against an observed disk lifetime of a few Myr. The two agree to within an order of magnitude, which is the point: **a turbulent viscosity with $\alpha\sim10^{-2}$ drains a disk on roughly the timescale disks are observed to last.** That is the evidence that the transport is real and roughly this strong — no independent measurement of $\alpha$ exists, so the disk lifetime is effectively how $\alpha$ is calibrated. Note the logic is circular if you try to use it as a prediction; it is a consistency check, and it fails to distinguish turbulence from magnetized disk winds, which is an active argument.

</details>

## Connections

- **Backward:** conservation of angular momentum and the free-fall problem are straight out of [`mechanics-refresher`](../../mechanics-refresher/syllabus.md); the disk's thermal structure needs the hydrostatic and adiabatic machinery of [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md).
- **Forward:** [1.2](01-02-condensation-frost-line.md) puts a temperature on each disk radius and asks what condenses there; [1.3](01-03-accretion-dust-to-planetesimals.md) grows those solids; [1.4](01-04-giant-planets-migration.md) races gas-giant formation against the disk lifetime derived here.
- **Sideways:** the collapse itself — Jeans instability, cloud fragmentation, the initial mass function — belongs to [astrophysics 3.1](../../astrophysics/lessons/03-01-star-formation-jeans.md), and the young Sun's luminosity to [astrophysics 2.5](../../astrophysics/lessons/02-05-main-sequence.md). This course starts where the star does and follows the leftovers. The same "angular momentum must go somewhere" argument governs accretion onto black holes and the spin-down of stars.

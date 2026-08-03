# Astrophysics · Lesson 5.4: Galaxy formation and active galaxies

> ⏱ ~15 min · Module 5: Galaxies and the interstellar medium · Builds on: [5.3 Galaxies and dark matter](#/lesson/astrophysics/05-03-galaxies-dark-matter.md), [5.2 The Milky Way](#/lesson/astrophysics/05-02-milky-way.md), [4.4 Accretion](#/lesson/astrophysics/04-04-accretion.md), [1.4 Gravitational dynamics & virial](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md) · Unlocks: 5.5 Clusters and large-scale structure, and Module 6 (cosmology)

## Why this matters

Galaxies are not permanent fixtures — they are *assembled*, and they are still growing. Lesson [5.3](#/lesson/astrophysics/05-03-galaxies-dark-matter.md) established that a galaxy is mostly an invisible dark-matter halo with some luminous debris at the bottom of its well. This lesson tells you where that structure came from (halos merge, gas cools, stars light up — **bottom-up**) and reveals the monster hiding in almost every big galaxy's core: a **supermassive black hole** that, when fed, can outshine its entire host galaxy of a hundred billion stars from a region smaller than the solar system. The punchline is the strangest correlation in extragalactic astronomy — the black hole's mass is locked to the velocity dispersion of stars orbiting *thousands of light-years away*, a tiny object somehow negotiating with a whole galaxy. That negotiation, **AGN feedback**, is now thought to be what shuts galaxies off. Everything here is gravity, accretion (from [4.4](#/lesson/astrophysics/04-04-accretion.md)), and energy bookkeeping — the same tools, aimed at the biggest objects that shine.

## The idea

Two intertwined stories, both driven by gravity pulling things together.

**Story 1 — galaxies are built by mergers (hierarchical assembly).** In the standard ΛCDM cosmology (which you'll set up properly in [6.4](#/lesson/astrophysics/06-04-structure-formation-dark-matter.md)), the universe starts nearly smooth, and gravity amplifies tiny density ripples. Because cold dark matter has no pressure to resist collapse, the *smallest* clumps go non-linear first: little halos form early, then **merge** into bigger ones, which merge into bigger ones still. Gas falls into these wells, radiates away its energy (it can cool; dark matter can't), and settles into a dense, cold blob at the center where it fragments into stars. So galaxies grow **bottom-up** — not by one giant cloud collapsing top-down, but by the repeated assembly of smaller pieces.

Mergers don't just add mass — they *reshape*. Slam two gas-rich spirals together and their ordered rotation is scrambled into random orbits: **spiral + spiral → elliptical**. The collision also torques gas to the center, igniting a **starburst** (and often feeding the central black hole). This is not hypothetical: the Milky Way and Andromeda are falling toward each other at ~110 km/s and will merge in ~4–5 billion years into a single elliptical, sometimes nicknamed "Milkomeda." And when we look *back* in time by looking at high redshift (light from long ago), we see the assembly in progress: early galaxies were **smaller, bluer, clumpier, and far more gas-rich** than today's — construction sites, not finished buildings.

**Story 2 — the engine in the core (AGN and quasars).** Feed a supermassive black hole ($10^6$–$10^{10}\,M_\odot$) and the infalling gas forms an accretion disk that converts gravitational energy into radiation with ferocious efficiency ([4.4](#/lesson/astrophysics/04-04-accretion.md)): up to $\eta \sim 10\%$ of the rest mass, versus fusion's measly $0.7\%$. The result is an **active galactic nucleus** — a quasar at the extreme — reaching luminosities of $\sim 10^{13}\,L_\odot$, brighter than the entire surrounding galaxy, all from a region only **light-days across** (we know it's tiny because the brightness flickers on timescales of hours to days — nothing can vary coherently faster than light crosses it). The same engine launches relativistic **jets** that inflate giant **radio lobes**. Depending on whether we look down the jet, at the disk, or edge-on through an obscuring dust torus, we call the *same object* a blazar, a quasar/Seyfert 1, or a Seyfert 2 — the **unification** picture: one engine, different viewing angles.

The two stories are one story. The black hole's mass tracks the host galaxy's stellar bulge so tightly (**the $M$–$\sigma$ relation**) that they must have grown up together, with the black hole's energy output **regulating** its host's star formation.

## The formal version

**Accretion luminosity and the Eddington limit.** A black hole accreting mass at rate $\dot M$ shines with
$$L = \eta\,\dot M c^2, \qquad \eta \approx 0.1,$$
where $\eta$ is the radiative efficiency and $c$ the speed of light. *In words: a fraction $\eta$ of the infalling rest-mass energy comes back out as light — about ten times more efficient than fusion.* Radiation pushes back on the infalling gas (radiation pressure on electrons), and when the outward push balances gravity you hit the **Eddington luminosity**, the steady-accretion ceiling (derived in [4.3](#/lesson/astrophysics/04-03-black-holes-astrophysics.md)/[4.4](#/lesson/astrophysics/04-04-accretion.md)):
$$L_{\rm Edd} = \frac{4\pi G M_{\rm BH} m_p c}{\sigma_T} \approx 1.3\times 10^{31}\,\frac{M_{\rm BH}}{M_\odot}\ \text{W} \;=\; 3.3\times 10^{4}\,\frac{M_{\rm BH}}{M_\odot}\,L_\odot,$$
with $m_p$ the proton mass and $\sigma_T = 6.65\times 10^{-29}\ \mathrm{m^2}$ the Thomson cross-section. *In words: the maximum luminosity scales linearly with black-hole mass.* A $10^9\,M_\odot$ hole can reach $\sim 3\times 10^{13}\,L_\odot$ — the observed quasar ceiling. Turn it around: a luminosity implies a **minimum black-hole mass**, which is how we first knew quasars needed supermassive holes.

**The variability size bound.** If a source's brightness varies significantly over a time $\Delta t$, its emitting region can be no larger than the distance light travels in that time:
$$R \lesssim c\,\Delta t.$$
*In words: a source can't brighten all-over faster than light can carry the "turn on" signal across it.* Quasar flickering on $\Delta t \sim$ 1 day pins $R \lesssim$ a few light-days $\sim 10^{13}$ m — smaller than the solar system, yet outshining $10^{11}$ stars.

**The $M$–$\sigma$ relation.** The central black-hole mass correlates tightly with the stellar velocity dispersion $\sigma$ of the host's bulge (the same $\sigma$ that weighs systems via the virial theorem, [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md)):
$$M_{\rm BH} \approx 10^{8}\,M_\odot\left(\frac{\sigma}{200\ \mathrm{km/s}}\right)^{4}.$$
*In words: fourth-power steep — measure how fast bulge stars jitter and you predict the mass of a black hole millions of times smaller and thousands of light-years away.* The black hole is typically $\sim 0.1\%$ of the bulge mass. The scatter is remarkably small, which is the whole mystery: the black hole's gravitational reach (its sphere of influence) is minuscule compared to the bulge, so it cannot pull the correlation into place directly. Something **couples** them.

**AGN feedback — the energy argument.** That coupling is energy. Growing a black hole to mass $M_{\rm BH}$ by accretion releases
$$E_{\rm acc} = \eta\,M_{\rm BH} c^2,$$
while the gravitational binding energy of the host galaxy (mass $M_{\rm gal}$, dispersion $\sigma$) is, by the virial theorem,
$$E_{\rm bind} \sim M_{\rm gal}\,\sigma^2.$$
*In words: the energy liberated in building the hole vastly exceeds the energy needed to unbind the galaxy's gas.* The ratio is $\sim \eta\,(M_{\rm BH}/M_{\rm gal})(c/\sigma)^2 \sim 10^2$ (Problem 3) — so even if only $\sim 1\%$ of the AGN's output couples to the surrounding gas, it can heat or eject that gas, **shutting down star formation** and starving the black hole itself. The hole grows until its feedback expels its own fuel supply, which is exactly the kind of self-limiting loop that could set the $M$–$\sigma$ relation.

**Quasars as cosmic beacons.** Because they are so luminous, quasars are visible across nearly the whole observable universe — we see them at redshift $z > 7$, when the universe was under a billion years old. That is a genuine puzzle and a probe: the universe managed to build $\sim 10^9\,M_\odot$ black holes *fast*, and their light, absorbed by intervening gas on its way to us, lets us X-ray the early intergalactic medium.

## Picture

![Left: small dark-matter halos merging bottom-up into one galaxy with a cooling gas core. Right: an AGN cross-section — supermassive black hole, accretion disk, obscuring torus, and bipolar jets with radio lobes — labeled with the three unification viewing angles (blazar down the jet, quasar/Seyfert 1 at the disk, Seyfert 2 edge-on through the torus).](assets/05-04-fig1.svg)

Two faces of this lesson. **Left:** hierarchical assembly — small halos (dashed, top) merge downward into one big halo; gas cools to the center (yellow core) and lights up as a galaxy. **Right:** the AGN engine — a supermassive black hole feeds an accretion disk, wrapped in a dusty torus, launching jets that inflate radio lobes. The *same* engine looks like three different beasts depending on your line of sight: straight down the jet (blazar), onto the exposed disk (quasar/Seyfert 1), or edge-on where the torus hides the disk (Seyfert 2). Note the scale label: the whole engine is smaller than light-days across.

## Worked examples

**Example 1 (a quasar's minimum mass from its luminosity).** A quasar shines at $L = 10^{13}\,L_\odot$. Assuming it accretes at or below the Eddington limit, what black hole does it need? Set $L \le L_{\rm Edd} = 3.3\times 10^{4}\,(M_{\rm BH}/M_\odot)\,L_\odot$:
$$\frac{M_{\rm BH}}{M_\odot} \ge \frac{L}{3.3\times 10^{4}\,L_\odot} = \frac{10^{13}}{3.3\times 10^{4}} = 3\times 10^{8}.$$
So $M_{\rm BH} \gtrsim 3\times 10^8\,M_\odot$ — a supermassive hole, unavoidably. No stellar-mass object comes within four orders of magnitude. This single inequality, applied in the 1960s, is why the "quasi-stellar" radio sources had to be black-hole powered.

**Example 2 (the feeding rate).** How fast must that same $L = 10^{13}\,L_\odot = 3.8\times 10^{39}$ W quasar swallow gas, at efficiency $\eta = 0.1$? Invert $L = \eta \dot M c^2$:
$$\dot M = \frac{L}{\eta c^2} = \frac{3.8\times 10^{39}}{0.1\,(3\times 10^8)^2} = \frac{3.8\times 10^{39}}{9\times 10^{15}} = 4.2\times 10^{23}\ \mathrm{kg/s}.$$
Convert to solar masses per year ($1\,M_\odot = 2\times 10^{30}$ kg, $1\,\mathrm{yr} = 3.15\times 10^7$ s):
$$\dot M = 4.2\times 10^{23}\,\frac{3.15\times 10^7}{2\times 10^{30}}\ \frac{M_\odot}{\mathrm{yr}} \approx 6.6\ M_\odot/\mathrm{yr}.$$
A few solar masses of gas per year — a modest galaxy's worth of star-formation fuel, redirected down the drain. Sustain it for $10^8$ yr and you've grown the hole by $\sim 10^8\,M_\odot$, roughly its whole mass. Quasars are therefore *brief, bright episodes*, not steady states — which is why luminous quasars were common at $z\sim 2$ and rare now, as the gas supply ran out.

## Watch out

- **Hierarchical means bottom-up, not top-down.** You might picture a galaxy as one huge cloud collapsing. In ΛCDM it's the opposite: small halos form *first* and merge *up*. (Confusingly, the resulting *ellipticals* — the most massive galaxies — form their stars early but assemble their mass late, through dry mergers. "Big galaxy" and "old stars" are not the same clock.)
- **AGN luminosity is not the black hole "burning."** The energy is gravitational — released by gas *falling in*, radiated *before* it crosses the horizon (see [4.4](#/lesson/astrophysics/04-04-accretion.md)). A starving black hole is dark. The Milky Way's own $4\times 10^6\,M_\odot$ hole is quiescent right now; it is not a quasar because nothing is feeding it.
- **The $M$–$\sigma$ correlation is with the *bulge*, not the whole galaxy.** Disk-dominated galaxies with little bulge have little to no central black hole. The relation ties the hole to the spheroidal, dispersion-supported component — a clue that mergers (which build bulges) build black holes too.
- **Eddington is a limit on *steady* accretion, not a hard wall.** Anisotropic or clumpy accretion can briefly exceed it ("super-Eddington"), which is one proposed escape hatch for building billion-solar-mass holes by $z>7$. Don't quote $L_{\rm Edd}$ as an inviolable maximum luminosity.

## One-liner

> Galaxies assemble bottom-up from merging halos, and the supermassive black hole each one grows in its core releases — via $E_{\rm acc}=\eta M_{\rm BH}c^2$ — far more energy than binds the galaxy, which is why a tiny hole can regulate a whole galaxy and why $M_{\rm BH}\propto\sigma^4$.

## Problems

**P1 (🟢)** A quasar has luminosity $L_{\rm Q} = 10^{13}\,L_\odot$; its host galaxy contains $10^{11}$ stars and shines like the Milky Way, $L_{\rm MW} \approx 3\times 10^{10}\,L_\odot$.
(a) By what factor does the quasar outshine its entire host galaxy?
(b) The quasar's brightness varies noticeably over $\Delta t = 1$ day. Put an upper bound on the size $R$ of the emitting region (in meters and in AU; $1\,\mathrm{AU}=1.5\times 10^{11}$ m), and compare it to the solar system. In one sentence, state the paradox this poses.

**P2 (🟡)** Use the $M$–$\sigma$ relation $M_{\rm BH}\approx 10^{8}\,M_\odot\,(\sigma/200\ \mathrm{km/s})^{4}$ to estimate the central black-hole mass in a galaxy with bulge velocity dispersion $\sigma = 100\ \mathrm{km/s}$. Then, if this galaxy's bulge stellar mass is $M_{\rm bulge} = 5\times 10^{9}\,M_\odot$, find the ratio $M_{\rm BH}/M_{\rm bulge}$ and compare it to the canonical $\sim 0.1\%$.

**P3 (🔴, optional)** Estimate the total energy released by growing a $M_{\rm BH} = 10^{9}\,M_\odot$ black hole via accretion at efficiency $\eta = 0.1$, using $E_{\rm acc} = \eta M_{\rm BH} c^2$. Compare it to the gravitational binding energy of its host galaxy, $E_{\rm bind}\sim M_{\rm gal}\sigma^2$, taking $M_{\rm gal} = 10^{12}\,M_\odot$ and $\sigma = 300\ \mathrm{km/s}$. What fraction of the accretion energy, if coupled to the galaxy's gas, would suffice to unbind it — and why does this make AGN feedback a plausible regulator of galaxy growth?

<details>
<summary>Solutions</summary>

**P1** (a) Direct ratio:
$$\frac{L_{\rm Q}}{L_{\rm MW}} = \frac{10^{13}}{3\times 10^{10}} \approx 330.$$
The quasar outshines its whole host by a factor of a few hundred — the galaxy is a faint smudge around a blazing point.

(b) The variability bound:
$$R \lesssim c\,\Delta t = (3\times 10^8\ \mathrm{m/s})(86{,}400\ \mathrm{s}) = 2.6\times 10^{13}\ \mathrm{m} = \frac{2.6\times 10^{13}}{1.5\times 10^{11}}\ \mathrm{AU} \approx 170\ \mathrm{AU}.$$
That is roughly the scale of the solar system (Neptune orbits at 30 AU; the heliosphere ends near 120 AU) — *not* a galaxy, which is $\sim 10^9$ AU across.
**The paradox:** an object no bigger than the solar system is radiating a few hundred times the power of a hundred-billion-star galaxy. No fusion-powered stellar process can do this; only gravitational accretion onto a supermassive black hole (where a small mass can release $\sim 0.1\,mc^2$) fits in the box. *Check:* $\sim$170 AU $\approx$ a light-day, consistent with a day-timescale variation. ✓

**P2** With $\sigma = 100\ \mathrm{km/s}$, the ratio $\sigma/200 = 1/2$, and the fourth power gives
$$M_{\rm BH} \approx 10^{8}\,M_\odot\left(\tfrac12\right)^{4} = 10^{8}\,M_\odot\cdot\frac{1}{16} = 6.3\times 10^{6}\,M_\odot.$$
Then
$$\frac{M_{\rm BH}}{M_{\rm bulge}} = \frac{6.3\times 10^{6}}{5\times 10^{9}} = 1.3\times 10^{-3} \approx 0.13\%,$$
right on the canonical $\sim 0.1\%$. *Check:* halving $\sigma$ cut $M_{\rm BH}$ by $2^4 = 16$, from the $10^8\,M_\odot$ anchor — the steep fourth power means a factor-of-2 measurement error in $\sigma$ becomes a factor-of-16 error in mass, which is exactly why $\sigma$ must be measured carefully. ✓

**P3** Accretion energy. With $M_{\rm BH} = 10^9\,M_\odot = 10^9\times 2\times 10^{30} = 2\times 10^{39}$ kg:
$$E_{\rm acc} = \eta M_{\rm BH} c^2 = 0.1\,(2\times 10^{39})(3\times 10^8)^2 = 0.1\,(2\times 10^{39})(9\times 10^{16}) \approx 1.8\times 10^{55}\ \mathrm{J}.$$
Binding energy. With $M_{\rm gal} = 10^{12}\,M_\odot = 2\times 10^{42}$ kg and $\sigma = 3\times 10^5$ m/s ($\sigma^2 = 9\times 10^{10}\ \mathrm{m^2/s^2}$):
$$E_{\rm bind} \sim M_{\rm gal}\,\sigma^2 = (2\times 10^{42})(9\times 10^{10}) = 1.8\times 10^{53}\ \mathrm{J}.$$
The ratio is
$$\frac{E_{\rm acc}}{E_{\rm bind}} = \frac{1.8\times 10^{55}}{1.8\times 10^{53}} = 100.$$
So building the black hole releases $\sim 100\times$ the energy that binds the entire galaxy's gas. **Only $\sim 1\%$ of the accretion energy needs to couple to the gas to unbind it** — a very modest coupling efficiency. Because the AGN can dump far more energy than the galaxy can hold, its feedback (radiation-driven winds, jets shock-heating the halo) can heat and expel the star-forming gas, quenching further star formation and cutting off its own fuel. That self-limiting loop — the hole grows until it blows away what feeds it — naturally ties the final black-hole mass to the galaxy's depth of potential well ($\propto\sigma^2$), which is the physical origin proposed for the $M$–$\sigma$ relation. *Check:* the ratio equals $\eta\,(M_{\rm BH}/M_{\rm gal})(c/\sigma)^2 = 0.1\times 10^{-3}\times(3\times10^8/3\times10^5)^2 = 0.1\times 10^{-3}\times 10^{6} = 10^2$. ✓

</details>

## Flashback

**From Lesson 1.4 (Gravitational dynamics & virial):** An elliptical galaxy has a stellar velocity dispersion $\sigma = 250\ \mathrm{km/s}$ and a half-light radius $R = 4\ \mathrm{kpc}$ ($1\ \mathrm{kpc} = 3.086\times 10^{19}$ m). Estimate its dynamical mass from the virial relation $M \sim \sigma^2 R/G$ (in kg and $M_\odot$). As a bonus, use this lesson's $M$–$\sigma$ relation to predict its central black hole, and confirm the black hole is a tiny fraction of the whole.

<details>
<summary>Solution</summary>

Virial mass with $\sigma = 2.5\times 10^5$ m/s ($\sigma^2 = 6.25\times 10^{10}$) and $R = 4\times 3.086\times 10^{19} = 1.23\times 10^{20}$ m:
$$M \sim \frac{\sigma^2 R}{G} = \frac{(6.25\times 10^{10})(1.23\times 10^{20})}{6.674\times 10^{-11}} = \frac{7.71\times 10^{30}}{6.674\times 10^{-11}} = 1.16\times 10^{41}\ \mathrm{kg} \approx 5.8\times 10^{10}\,M_\odot.$$
So $\sim 6\times 10^{10}\,M_\odot$ — a normal galaxy mass. **Bonus:** at $\sigma = 250\ \mathrm{km/s}$, $M_{\rm BH} \approx 10^8\,M_\odot\,(250/200)^4 = 10^8\times(1.25)^4 = 10^8\times 2.44 = 2.4\times 10^8\,M_\odot$. The ratio $M_{\rm BH}/M \approx 2.4\times 10^8/5.8\times 10^{10} \approx 0.4\%$ — the black hole is a few tenths of a percent of the galaxy, exactly the co-evolution scale, yet it can regulate the whole thing. *Check:* $6\times 10^{10}\,M_\odot$ is a textbook elliptical mass and units are $(\mathrm{m^2/s^2})(\mathrm m)/(\mathrm{m^3\,kg^{-1}\,s^{-2}}) = \mathrm{kg}$. ✓

</details>

## Connections

- **Backward:** the mass estimates lean entirely on the virial machinery of [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md) ($M\sim\sigma^2 R/G$, and $E_{\rm bind}\sim M_{\rm gal}\sigma^2$); the AGN engine and its Eddington ceiling are the accretion physics of [4.4](#/lesson/astrophysics/04-04-accretion.md) and the black holes of [4.3](#/lesson/astrophysics/04-03-black-holes-astrophysics.md), now scaled up to supermassive; the dark-matter halos that mergers assemble are the flat-rotation-curve halos of [5.3](#/lesson/astrophysics/05-03-galaxies-dark-matter.md), and the quiescent central hole is our own from [5.2](#/lesson/astrophysics/05-02-milky-way.md).
- **Forward:** hierarchical assembly is the galactic-scale face of cosmological **structure formation** in [6.4](#/lesson/astrophysics/06-04-structure-formation-dark-matter.md) — the same growth of density ripples under gravity, here followed down to individual galaxies; the merging of halos continues up to galaxy **clusters** and the cosmic web in [5.5](#/lesson/astrophysics/05-05-clusters-large-scale-structure.md).
- **Sideways (relativity):** the $\eta\sim 0.1$ radiative efficiency and the very existence of an event horizon are general-relativistic — accretion efficiency is set by how deep the innermost stable orbit sits in the Schwarzschild (or Kerr) geometry, developed in the [`relativity`](#/course/relativity) course; a maximally spinning hole reaches $\eta\approx 0.4$, quadrupling the feedback budget.
- **Sideways (thermodynamics):** AGN feedback "quenching" a galaxy is the same negative-feedback thermostat logic as the stellar main sequence ([2.5](#/lesson/astrophysics/02-05-main-sequence.md)) — a system whose energy output rises with its fuel supply until the output chokes off the supply — but written at galactic scale.

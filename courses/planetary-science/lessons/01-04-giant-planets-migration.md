# Planetary Science · Lesson 1.4: Giant planets and migration

> ⏱ ~15 min · Module 1: Solar-system formation · Builds on: [1.2](01-02-condensation-frost-line.md), [1.3](01-03-accretion-dust-to-planetesimals.md) · Unlocks: [1.6](01-06-cosmochemistry-volatile-delivery.md), [5.2](05-02-tides-resonances-orbital-evolution.md), [6.2](06-02-demographics-selection-effects.md)

## Why this matters

Jupiter is 318 Earth masses of mostly hydrogen. Everything solid in the solar system put together is about 450 Earth masses, of which Jupiter's core is maybe 15. So the dominant planet in the system is dominated in turn by a single process: at some moment it stopped accreting rock and started swallowing gas, and it did not stop until the gas ran out.

Two things make this hard. First, that moment has to arrive before the disk disperses — a deadline of a few million years, and the standard calculation takes most of it. Second, and worse, **a planet embedded in a gas disk does not stay where it formed.** It exchanges angular momentum with the gas and spirals inward, fast. For a 10-Earth-mass core at Jupiter's distance the migration time is about 130,000 years. That is 1 percent of the disk's life. Taken at face value, every planet should have fallen into its star.

The resolution to the first problem is a bottleneck you can see in the growth curve. The resolution to the second is still argued about — and the observation that settles which parts of the story are real comes from other stars, not this one.

## The idea

**Core accretion has three phases, and the middle one is nearly all of the time.**

*Phase 1 — the core builds.* Solid accretion runs as in [1.3](01-03-accretion-dust-to-planetesimals.md) until the body reaches its isolation mass and the local planetesimals are gone. Fast: a few hundred thousand years. Beyond the frost line this delivers a few Earth masses.

*Phase 2 — the bottleneck.* The core now has enough gravity to hold an atmosphere, so it acquires a thick envelope of nebular gas. But that envelope is *hot*, held up by the heat still being delivered by infalling planetesimals and by its own compression. It can only grow as fast as it can radiate that heat away and contract. This is a Kelvin–Helmholtz contraction problem, and it is slow — millions of years, with core and envelope creeping up together.

*Phase 3 — runaway.* Once the envelope mass equals the core mass — the **crossover mass**, around 10–15 Earth masses in total — the envelope's own weight starts compressing it faster than the heat can hold it up. Contraction accelerates, which lets in more gas, which accelerates contraction. Gas pours in at whatever rate the disk can supply, and the planet goes from 20 Earth masses to 300 in a few tens of thousands of years. It stops only when it has cleared a gap in the disk or the disk is gone.

**So the whole outcome hinges on whether phase 2 finishes in time.** A planet that reaches crossover at 3 Myr is Jupiter. One that reaches it at 3.5 Myr, after the gas has gone, is a bare 15-Earth-mass core — which is a fair description of Uranus and Neptune. **The ice giants are not a different kind of object; they are gas giants that missed the deadline.**

**Now the second problem: nothing stays put.** A planet raises spiral density waves in the disk, one interior to its orbit and one exterior. The two pull on it in opposite senses, and the outer one wins slightly, so the planet loses angular momentum and drifts inward. This is **Type I migration**, it scales linearly with planet mass, and for a growing core it is far too fast. Once a planet is massive enough to open a gap in the disk — roughly Saturn's mass — it is locked to the gap and moves with the disk's own slow viscous drainage instead. That is **Type II**, and it is slower but still substantial.

**The evidence that migration really happens is not in this solar system, it is in the others.** Hot Jupiters cannot have formed where they are found; there is no solid material at 0.05 AU and the temperature is far above any condensation point. And systems like TRAPPIST-1 have several planets sitting in an unbroken chain of mean-motion resonances — configurations that are essentially impossible to arrive at by chance and easy to arrive at by slow convergent migration. **A resonant chain is a migration fossil.**

## The formal version

**Critical core mass.** The envelope can remain in hydrostatic, quasi-static equilibrium only while the heat supplied by accreting planetesimals balances what it radiates. Above a critical mass no such solution exists and collapse begins:

$$M_{\text{crit}} \sim 10\,M_\oplus,$$

depending on envelope opacity and on the planetesimal accretion rate $\dot M_{\text{core}}$ — lower opacity or a starved core both *lower* $M_{\text{crit}}$, because both mean less heat to hold the envelope up. The spread in published values, roughly 5 to 20 $M_\oplus$, is genuine physical sensitivity, not sloppiness.

**Type I migration timescale.** For a planet of mass $M_p$ not massive enough to open a gap, in a disk of surface density $\Sigma$, aspect ratio $h = H/r$, at orbital frequency $\Omega$:

$$t_{\text{I}} \sim \frac{1}{C}\,\frac{M_\star}{M_p}\,\frac{M_\star}{\Sigma a^2}\,\frac{h^2}{\Omega}, \qquad C\approx2.7.$$

*In words: migration is faster for heavier planets, denser disks, and thinner (colder) disks.* At 5.2 AU in the minimum-mass nebula ($\Sigma = 143\ \mathrm{g\,cm^{-2}}$, $h = 0.05$):

| $M_p$ | $t_{\text{I}}$ |
|---|---|
| $1\,M_\oplus$ | $1.3\times10^{6}$ yr |
| $10\,M_\oplus$ | $1.3\times10^{5}$ yr |
| $318\,M_\oplus$ (if it did not open a gap) | $4\times10^{3}$ yr |

**This is the Type I migration problem in one table.** The core that is supposed to spend millions of years in phase 2 has a migration time of $10^5$ years. Either the formula overestimates the torque — and it does, in disks with realistic thermodynamics, where the sign can even reverse and produce migration *traps* — or cores routinely fall in and the ones we see are survivors.

**Gap opening.** A planet clears a gap when its tidal torque beats the disk's viscous and pressure resistance. The thermal criterion is

$$\frac{M_p}{M_\star} \gtrsim 3h^3,$$

*In words: the planet's Hill radius must exceed the disk's thickness.* For $h = 0.05$ this gives $M_p \gtrsim 125\,M_\oplus \approx 0.4\,M_{\text{J}}$ — Saturn's mass. Above it, migration switches to Type II at the viscous rate $t_\nu\sim a^2/\nu$, of order $10^5$ yr at 5 AU.

**Mean-motion resonance.** Two planets are in a $p{:}q$ mean-motion resonance when their periods satisfy $P_2/P_1 = p/q$ for small integers, so conjunctions always occur at the same place in the orbit and the perturbations add coherently instead of averaging out. Convergent migration — an outer planet drifting in faster than an inner one — drives pairs into resonance and holds them there. [5.2](05-02-tides-resonances-orbital-evolution.md) develops the dynamics.

**Two rearrangement models for our own system.**

- **Grand Tack.** Jupiter migrates inward to about 1.5 AU, Saturn grows, catches it in a 3:2 resonance, and the pair reverses and migrates back out. It truncates the inner disk at about 1 AU, which explains why Mars is small and why the asteroid belt is a low-mass mixture of dry inner and wet outer material ([1.6](01-06-cosmochemistry-volatile-delivery.md)).
- **Nice model.** The giants form compact, between roughly 5.5 and 17 AU, surrounded by a 35-Earth-mass planetesimal disk. Scattering planetesimals slowly migrates them until Jupiter and Saturn cross their 2:1 resonance; the system goes briefly unstable, the ice giants are thrown outward, and planetesimals are scattered everywhere. It predicts the Trojans, the irregular satellites, and the Kuiper belt's structure ([5.5](05-05-asteroids-comets-kuiper-belt.md)).

Both are reconstructions from present-day evidence, not observations, and both remain under active revision — the Nice model's original link to a spike in lunar bombardment at 3.9 Gyr has weakened considerably as that spike's reality has been questioned ([2.4](02-04-impact-cratering-chronology.md)).

## Picture

![A log-log plot of mass in Earth masses against time in millions of years since the disk formed. A blue curve labelled solid core rises steeply to about 5 Earth masses in the first half-million years, then creeps slowly upward. A coral curve labelled gas envelope starts far below and rises steadily, meeting the core curve at about 7.6 million years at a mass of 12.5 Earth masses, marked crossover: envelope equals core, after which it turns almost vertical and reaches 300 Earth masses, labelled Jupiter. Brackets below the axis mark three phases: core builds, the bottleneck of slow envelope contraction, and runaway. A vertical dashed line at 3 million years marks the median disk lifetime, with a note that a 10-million-year disk would be needed for this particular calculation](assets/01-04-fig1.svg)

Note where the vertical dashed line falls relative to the crossover. This calculation, run with the standard opacity, does **not** make Jupiter in time — and that discrepancy, not the success, is what drove twenty years of work on lowering the critical core mass through reduced opacity and pebble accretion.

## Worked examples

**Example 1 (mechanical — will this planet open a gap?).** A disk at 1 AU has $h = 0.033$. What is the least massive planet that can open a gap there, and how does it compare with the answer at 5.2 AU where $h = 0.05$?

$$\frac{M_p}{M_\star} \gtrsim 3h^3 = 3(0.033)^3 = 3\times3.59\times10^{-5} = 1.078\times10^{-4}.$$

With $M_\star = 3.33\times10^{5}\,M_\oplus$:

$$M_p \gtrsim 1.078\times10^{-4}\times3.33\times10^{5} = 36\ M_\oplus.$$

At 5.2 AU we computed $125\,M_\oplus$. **A colder, thinner disk is easier to open a gap in** — the criterion goes as $h^3$, so the factor 1.5 in aspect ratio becomes a factor 3.5 in threshold mass. This is why hot Jupiters, which end up in the very thin inner disk, are so effective at clearing their surroundings, and it is part of why the inner regions of planet-forming disks show gaps at lower planet masses than the outer regions do.

**Example 2 (why you'd care — reading a resonant chain).** The TRAPPIST-1 planets have period ratios, from the inside out, of approximately 1.603, 1.672, 1.506, 1.508, 1.342, 1.519. What do these numbers mean, and what do they establish?

Compare each with a small-integer ratio:

| Pair | Ratio | Nearest resonance | Value |
|---|---|---|---|
| b–c | 1.603 | 8:5 | 1.600 |
| c–d | 1.672 | 5:3 | 1.667 |
| d–e | 1.506 | 3:2 | 1.500 |
| e–f | 1.508 | 3:2 | 1.500 |
| f–g | 1.342 | 4:3 | 1.333 |
| g–h | 1.519 | 3:2 | 1.500 |

**Every single adjacent pair sits within 1.3 percent of a small-integer ratio, and five of the six within 0.7 percent.** Six independent period ratios, each of which could have taken any value between 1 and 2, all landing on resonances. If the planets had formed in place at random spacings, the probability of that is vanishingly small.

The inference is direct. Resonance capture requires *convergent* migration — the outer planet must approach the inner one slowly enough to be caught rather than sweep past. So the chain says: these planets formed further out, migrated inward through the gas disk, and locked into resonance one pair at a time as they converged. **The chain is a record of the migration that produced it**, preserved because after the gas dispersed there was nothing left to break it.

This is the cleanest evidence that migration is a real and common process. It also raises the obvious question for our own system, which has no resonant chain at all among the giants — Jupiter and Saturn's period ratio is 2.48, conspicuously *near but not in* the 5:2. On the Nice model that is exactly the signature expected of a chain that formed and was then broken by an instability.

## Watch out

- **You might think runaway gas accretion is triggered by reaching a magic core mass, but the trigger is the crossover between core and envelope mass**, and the envelope's growth depends on opacity, on how fast planetesimals are still raining in, and on the disk's supply. "Ten Earth masses" is a useful number, not a threshold in the physics.
- **You might think migration is a correction to be added on top of formation, but the timescales say it is faster than formation.** Any model that grows a planet in place for millions of years and then asks where it moved has the ordering wrong; growth and migration are simultaneous and coupled.
- **You might think the Grand Tack and the Nice model are established history, but they are reconstructions fitted to present-day constraints**, and they compete with alternatives — most seriously with the possibility that the terrestrial region simply had little mass beyond 1 AU to begin with, which explains small Mars without moving Jupiter anywhere. Treat both as well-motivated hypotheses with real predictive successes, not as the record.

## One-liner

> Whether a planet becomes Jupiter or Neptune is decided by whether its envelope reaches crossover before the gas runs out — and wherever it was when that happened, it is almost certainly not where it is now.

## Problems

**P1 (🟢)** A disk at 0.5 AU has $h = 0.030$ and the star is $1\,M_\odot = 3.33\times10^{5}\,M_\oplus$. (a) Compute the minimum gap-opening mass. (b) Express it in Jupiter masses ($1\,M_{\text{J}} = 318\,M_\oplus$). (c) A $20\,M_\oplus$ planet at this location: Type I or Type II?

**P2 (🟡)** Use $t_{\text{I}} = \frac{1}{2.7}\frac{M_\star}{M_p}\frac{M_\star}{\Sigma a^2}\frac{h^2}{\Omega}$ at 1 AU, where $\Sigma = 1700\ \mathrm{g\,cm^{-2}}$, $h = 0.033$, $\Omega = 1.99\times10^{-7}\ \mathrm{s^{-1}}$, $M_\star = 1.989\times10^{30}$ kg, $a = 1.496\times10^{11}$ m. (a) Compute $t_{\text{I}}$ for a $1\,M_\oplus$ planet, in years. (b) Compare with the disk lifetime. (c) Earth exists at 1 AU. Give the standard resolution in one sentence.

**P3 (🔴, optional)** Two planets migrate convergently and are captured into a 2:1 resonance. The inner one has $P_1 = 8.0$ d. (a) Give $P_2$. (b) The pair is then caught in a three-body Laplace-type chain with a third planet at the 3:2 exterior to the second; give $P_3$. (c) The observed periods are 8.0, 16.1 and 24.3 d. Compute the fractional offsets from exact resonance and explain, in two sentences, why real chains sit slightly *wide* of exact commensurability rather than exactly on it.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{M_p}{M_\star} \gtrsim 3h^3 = 3(0.030)^3 = 3\times2.70\times10^{-5} = 8.10\times10^{-5},$$
$$M_p \gtrsim 8.10\times10^{-5}\times3.33\times10^{5} = 27\ M_\oplus.$$

(b) $$\frac{27}{318} = 0.085\ M_{\text{J}}.$$

About a quarter of Saturn's mass — in this thin inner disk even a modest planet clears a gap.

(c) $20\,M_\oplus$ is below the 27 $M_\oplus$ threshold, so it does **not** open a gap: Type I. It is close enough to the boundary that it would be in the partial-gap regime where neither idealization is clean.

**P2** (a) $M_p = 5.97\times10^{24}$ kg, $\Sigma = 17{,}000\ \mathrm{kg\,m^{-2}}$, $a^2 = 2.238\times10^{22}\ \mathrm{m^2}$.

$$\frac{M_\star}{M_p} = \frac{1.989\times10^{30}}{5.97\times10^{24}} = 3.332\times10^{5},$$
$$\Sigma a^2 = 17{,}000\times2.238\times10^{22} = 3.805\times10^{26}\ \mathrm{kg}, \qquad \frac{M_\star}{\Sigma a^2} = \frac{1.989\times10^{30}}{3.805\times10^{26}} = 5227,$$
$$h^2 = (0.033)^2 = 1.089\times10^{-3}, \qquad \frac{1}{\Omega} = \frac{1}{1.99\times10^{-7}} = 5.025\times10^{6}\ \mathrm{s}.$$

$$t_{\text{I}} = \frac{1}{2.7}\times3.332\times10^{5}\times5227\times1.089\times10^{-3}\times5.025\times10^{6}.$$

$$= \frac{1}{2.7}\times3.332\times10^{5}\times5227 = 6.451\times10^{8}; \quad \times1.089\times10^{-3} = 7.025\times10^{5}; \quad \times5.025\times10^{6} = 3.53\times10^{12}\ \mathrm{s}.$$

$$t_{\text{I}} = \frac{3.53\times10^{12}}{3.156\times10^{7}} = 1.1\times10^{5}\ \mathrm{yr}.$$

(b) About 110,000 years against a disk lifetime of 3 Myr — **shorter by a factor of 30.** A full Earth mass at 1 AU would spiral into the Sun roughly thirty times over before the gas dispersed.

(c) The standard resolution: **Earth did not reach a full Earth mass until after the gas was gone.** Recall from [1.3](01-03-accretion-dust-to-planetesimals.md) that the isolation mass at 1 AU is only $0.07\,M_\oplus$, and $t_{\text{I}}\propto1/M_p$, so a Mars-sized embryo has $t_{\text{I}}\approx1.6$ Myr — comparable to the disk lifetime rather than far below it — and the final assembly into Earth happened over the next 30–100 Myr in a gas-free disk where Type I migration does not operate at all.

**P3** (a) $P_2 = 2P_1 = 16.0$ d.

(b) $P_3 = 1.5\,P_2 = 24.0$ d.

(c) Offsets from exact commensurability:

$$\frac{P_2}{P_1} = \frac{16.1}{8.0} = 2.0125, \qquad \Delta = \frac{2.0125-2}{2} = +0.63\%.$$
$$\frac{P_3}{P_2} = \frac{24.3}{16.1} = 1.5093, \qquad \Delta = \frac{1.5093-1.5}{1.5} = +0.62\%.$$

Both are wide of exact resonance by about 0.6 percent, and both in the same direction — exactly the pattern of the TRAPPIST-1 offsets above, every one of which is positive.

Why wide, and why systematically? Two reasons, and they are worth separating. **Dynamically,** a resonantly librating pair does not sit at exact commensurability at all — the equilibrium of the resonant argument is displaced by an amount set by the balance between the resonant torque and whatever is driving convergence, so a pair caught during migration parks slightly wide and stays there. **Dissipatively,** anything that removes orbital energy after the gas is gone pushes the pair further apart: tides raised on the inner planet by the star damp its eccentricity and expand its orbit, widening the ratio over gigayears. The consistent sign is the giveaway — random scattering would spread the offsets both ways, whereas tidal repulsion can only push wide. This is why an offset of a fraction of a percent is taken as *confirmation* of resonant capture rather than as evidence against it, and why the size of the offset is used to estimate the tidal quality factor $Q$ of the inner planets ([5.2](05-02-tides-resonances-orbital-evolution.md)).

</details>

## Flashback

**From Lesson 1.3 (Accretion — dust to planetesimals):** A planetesimal swarm at 2.5 AU has random velocity $v_{\text{rel}} = 200\ \mathrm{m\,s^{-1}}$. Bodies have density $2500\ \mathrm{kg\,m^{-3}}$. (a) Compute the radius at which gravitational focusing gives $F_g = 10$. (b) A body twice that radius: what is its $F_g$? (c) By what factor does the accretion rate $dM/dt \propto R^2F_g$ differ between the two, and what does that ratio illustrate?

<details>
<summary>Solution</summary>

(a) $F_g = 10$ requires $v_{\text{esc}}^2 = 9v_{\text{rel}}^2$, so $v_{\text{esc}} = 3\times200 = 600\ \mathrm{m\,s^{-1}}$. With $v_{\text{esc}}^2 = \frac{8}{3}\pi G\rho R^2$:

$$R = v_{\text{esc}}\sqrt{\frac{3}{8\pi G\rho}} = 600\sqrt{\frac{3}{8\pi\times6.674\times10^{-11}\times2500}} = 600\sqrt{\frac{3}{4.194\times10^{-6}}}.$$

$$R = 600\times\sqrt{7.153\times10^{5}} = 600\times845.8 = 5.07\times10^{5}\ \mathrm{m} = 507\ \mathrm{km}.$$

(b) At $2R$, $v_{\text{esc}}$ doubles to $1200\ \mathrm{m\,s^{-1}}$:

$$F_g = 1 + \left(\frac{1200}{200}\right)^2 = 1 + 36 = 37.$$

(c) $$\frac{(2R)^2\times37}{R^2\times10} = \frac{4\times37}{10} = 14.8.$$

**Doubling the radius multiplies the accretion rate by nearly 15**, not by 4. That is runaway growth stated as a number: the geometric cross-section contributes a factor 4 and gravitational focusing contributes the rest. It is also why the effect is self-terminating — the moment the growing body stirs $v_{\text{rel}}$ up toward its own escape speed, $F_g\to1$ and the extra factor of 3.7 evaporates.

</details>

## Connections

- **Backward:** [1.2](01-02-condensation-frost-line.md) explains why the raw material for a 10-Earth-mass core exists only beyond the frost line; [1.3](01-03-accretion-dust-to-planetesimals.md) supplies the isolation mass that phase 1 terminates at, and shows it falls short of $M_{\text{crit}}$ by a factor of five in a minimum-mass disk.
- **Forward:** [1.6](01-06-cosmochemistry-volatile-delivery.md) uses giant-planet migration to explain how outer-system material reached the inner planets; [5.1](05-01-giant-ice-giant-interiors.md) opens up the interiors that this lesson only weighed; [5.2](05-02-tides-resonances-orbital-evolution.md) does the resonance dynamics properly; [6.2](06-02-demographics-selection-effects.md) turns hot-Jupiter counts into an occurrence rate and asks how common this whole story is.
- **Sideways:** Kelvin–Helmholtz contraction of the envelope is the same quasi-static gravitational-energy-release problem as pre-main-sequence stellar contraction in [astrophysics 3.1](../../astrophysics/lessons/03-01-star-formation-jeans.md) — a giant planet is, for a while, a failed star that runs out of material rather than out of nuclear fuel. Resonance capture is an adiabatic-invariant argument of the sort used throughout [`analytical-mechanics`](../../analytical-mechanics/syllabus.md).

# Planetary Science · Lesson 5.2: Tides, resonances and orbital evolution

> ⏱ ~15 min · Module 5: The outer solar system and small bodies · Builds on: [2.7](02-07-moon-earth-moon-system.md), [3.2](03-02-gravity-topography-tidal-response.md), [5.1](05-01-giant-ice-giant-interiors.md) · Unlocks: [5.3](05-03-ocean-worlds.md), [5.4](05-04-rings-satellite-systems.md)

## Why this matters

[2.2](02-02-thermal-evolution-heat-transport.md) established that a body's geological lifetime scales with its radius, and that anything much smaller than Mars should be dead. **Io is smaller than the Moon and is the most volcanically active object in the solar system**, radiating 104 TW — twice Earth's total heat output — from a body with 2 percent of Earth's volume.

Tidal heating is the exception that breaks the size rule, and it is the reason the outer solar system is interesting at all. Without it Europa and Enceladus would be inert balls of ice. **And the mechanism has a subtlety that is easy to miss: tides alone would shut themselves off within a few thousand years.** What keeps them running is orbital resonance, and this lesson is about how the two are coupled.

## The idea

**A tide is a differential force, and a body responds by bulging.** The near side is pulled harder than the centre and the far side less, so the satellite stretches along the line to its primary. The bulge is a real deformation of the body — tens of metres for Europa ([3.2](03-02-gravity-topography-tidal-response.md)).

**A static bulge does not heat anything.** If a satellite is synchronously rotating on a perfectly circular orbit, it always presents the same face at the same distance. The bulge is frozen in place, the material never flexes, and no work is done. **Most satellites are in exactly this state**, which is why most are cold.

**Eccentricity is what makes tides heat.** On an eccentric orbit the distance varies, so the bulge grows and shrinks each orbit; and the satellite's rotation is uniform while its orbital angular velocity is not, so the bulge also rocks back and forth. **Both effects flex the interior, and flexing a viscoelastic body dissipates energy as heat.** The heating rate goes as $e^2$ — so a tiny eccentricity, if maintained, is enough.

**But tides also damp eccentricity, and fast.** The same dissipation that produces heat removes orbital energy, circularizing the orbit. **Io's eccentricity would decay to nothing in a few thousand years** if nothing were maintaining it. Since Io is manifestly still being heated, something is pumping the eccentricity back up.

**That something is the Laplace resonance.** Io, Europa and Ganymede have orbital periods in the exact ratio 1 : 2 : 4. Because of this, their mutual conjunctions always occur at the same points in their orbits, so the small gravitational tugs they exert on one another **add coherently instead of averaging away.** The resonance transfers angular momentum among the three and forces Io's eccentricity to a value where the resonant pumping balances the tidal damping.

**So the causal chain is: resonance → forced eccentricity → tidal flexing → heat → volcanism.** Break any link and Io goes cold. **Tidal heating is not a property of being close to Jupiter; it is a property of being in a resonance.**

**And resonances themselves are made by tides.** Tidal torques cause satellites to migrate outward at rates depending on their distance, so an inner moon migrates faster and catches up with an outer one in period ratio — *convergent* migration, which captures the pair into resonance and holds it there. **The system builds its own heat source**, which is why resonant chains are common around giant planets and around other stars ([1.4](01-04-giant-planets-migration.md)).

**One more consequence: spin.** Tidal torques also brake a satellite's rotation until it is synchronous, which is why almost every large moon shows one face to its planet. But if the orbit is eccentric enough, a higher-order **spin–orbit resonance** can be stable instead: Mercury rotates three times for every two orbits, a 3:2 spin–orbit lock, not a 1:1.

## The formal version

**The tidal potential.** A satellite of radius $R_s$ at distance $r$ from a primary of mass $M_p$ experiences a tide-raising potential whose leading term is

$$\Phi_T = -\frac{GM_pR_s^2}{r^3}P_2(\cos\theta),$$

with $\theta$ measured from the primary direction. *In words: the tide scales as $1/r^3$, not $1/r^2$ — it is a gradient of the force, so it falls off one power faster.*

**The tidal quality factor.** Real bodies respond with a lag. Defining $Q$ by the energy dissipated per cycle,

$$\frac{1}{Q} = \frac{1}{2\pi E_{\text{peak}}}\oint\left(-\frac{dE}{dt}\right)dt,$$

*In words: $Q$ is the number of radians of oscillation it takes to dissipate the stored energy; large $Q$ means low dissipation.* Together with the Love number $k_2$, the combination $k_2/Q$ controls everything.

| Body | $k_2/Q$ | Comment |
|---|---|---|
| Io | ~0.015 | very dissipative; partially molten |
| Earth (oceans) | ~0.0033 | dominated by shallow seas ([2.7](02-07-moon-earth-moon-system.md)) |
| Jupiter | $\sim1\times10^{-5}$ | measured from Io's orbital migration |
| a rigid rocky body | $\sim10^{-4}$ | for comparison |

**[Tidal heating](../reference.md#tidal-heating) rate.** For a synchronous satellite with small eccentricity:

$$\boxed{\ \dot E = \frac{21}{2}\,\frac{k_2}{Q}\,\frac{G M_p^2 R_s^5\,n\,e^2}{a^6}\ }$$

with $n = \sqrt{GM_p/a^3}$ the mean motion. *In words: heating goes as the fifth power of the satellite's radius, the inverse sixth power of its orbital distance, and the square of eccentricity.* **Those exponents are why the effect is so sharply localized** — Io is heated enormously, Europa a hundred times less, Ganymede negligibly.

**Eccentricity damping.** The same dissipation circularizes the orbit on a timescale

$$\tau_e = \frac{2}{21}\frac{Q}{k_2}\frac{M_s}{M_p}\left(\frac{a}{R_s}\right)^5\frac{1}{n}.$$

For Io this is of order $10^{3}$–$10^{4}$ years — **negligible compared with the age of the solar system**, which is the whole reason a maintaining mechanism is required.

**Mean-motion resonance.** Two satellites are in a $p{:}q$ resonance when

$$q\,n_1 - p\,n_2 \approx 0,$$

and the resonant argument (a combination of the mean longitudes and the longitudes of pericentre) librates rather than circulating. **The Laplace resonance is a three-body version:**

$$n_{\text{Io}} - 3n_{\text{Europa}} + 2n_{\text{Ganymede}} = 0.$$

With observed periods 1.769, 3.551 and 7.155 days, the residual is $-1.2\times10^{-9}\ \mathrm{s^{-1}}$ against $n_{\text{Io}} = 4.11\times10^{-5}$ — **a relative residual of $3\times10^{-5}$.** This is not approximate; it is an exact dynamical lock.

**Tidal migration of the satellite.** The torque from the primary's lagging bulge drives

$$\frac{da}{dt} = 3\frac{k_{2,p}}{Q_p}\frac{M_s}{M_p}\left(\frac{R_p}{a}\right)^5 n\,a \;\propto\; a^{-11/2},$$

the same law as the Moon's recession ([2.7](02-07-moon-earth-moon-system.md)). **Inner satellites migrate faster**, which produces the convergent migration that captures resonances.

**Spin–orbit resonance.** Tidal despinning drives rotation toward synchronous, but for an eccentric orbit the torque averaged over an orbit can favour a higher state. Mercury, with $e = 0.206$, is locked in a **3:2** spin–orbit resonance: it rotates 3 times per 2 orbits, so its solar day is 176 Earth days, two Mercury years.

## Picture

![Left, two orbit diagrams. The upper one shows a satellite on a circular dashed orbit around a central body, with the satellite drawn as an identical ellipse at four positions, and a caption noting that at the same distance and orientation the bulge never flexes so nothing is heated. The lower one shows an elliptical orbit with the primary at a focus; near pericentre the satellite is drawn as a strongly elongated ellipse labelled big bulge, and near apocentre as a nearly round one labelled small bulge, with a caption that the bulge grows and shrinks every orbit and the flexing dissipates energy as heat. Right, three horizontal bars showing the Laplace resonance: Io with one orbit block, Europa with two, Ganymede with four, at periods 1.769, 3.551 and 7.155 days, so that Io makes exactly four orbits while Ganymede makes one. Notes record that the measured combination n-one minus three n-two plus two n-three is zero to three parts in a hundred thousand, that conjunctions always occur at the same orbital phase so the tugs add instead of averaging out, and that this pumping maintains Io's eccentricity of 0.0041 against tidal damping that would erase it in a few thousand years. A boxed note adds that Io radiates 104 terawatts, about 100 times Earth's heat per unit volume, and that breaking the resonance would circularise Io and stop the volcanism](assets/05-02-fig1.svg)

The left panel is why eccentricity is necessary; the right panel is why it survives.

## Worked examples

**Example 1 (mechanical — Io's heat, and what it implies).** Io: $M_p = M_J = 1.898\times10^{27}$ kg, $R_s = 1822$ km, $a = 4.217\times10^{5}$ km, $e = 0.0041$, $P = 1.769$ d. Compute the tidal heating for a given $k_2/Q$, then invert using the observed 104 TW.

$$n = \frac{2\pi}{1.769\times86400} = \frac{6.2832}{1.528\times10^{5}} = 4.111\times10^{-5}\ \mathrm{s^{-1}}.$$

Assemble the pieces:

$$GM_p^2 = 6.674\times10^{-11}\times(1.898\times10^{27})^2 = 6.674\times10^{-11}\times3.602\times10^{54} = 2.404\times10^{44},$$
$$R_s^5 = (1.822\times10^{6})^5 = 2.007\times10^{31}, \qquad a^6 = (4.217\times10^{8})^6 = 5.623\times10^{51},$$
$$n\,e^2 = 4.111\times10^{-5}\times(0.0041)^2 = 4.111\times10^{-5}\times1.681\times10^{-5} = 6.910\times10^{-10}.$$

$$\dot E = \frac{21}{2}\frac{k_2}{Q}\cdot\frac{2.404\times10^{44}\times2.007\times10^{31}\times6.910\times10^{-10}}{5.623\times10^{51}} = 10.5\,\frac{k_2}{Q}\times5.929\times10^{14}.$$

$$\dot E = 6.22\times10^{15}\,\frac{k_2}{Q}\ \mathrm{W}.$$

Inverting with the observed $1.04\times10^{14}$ W:

$$\frac{k_2}{Q} = \frac{1.04\times10^{14}}{6.22\times10^{15}} = 0.0167.$$

**And that number is itself a measurement of Io's interior.** A rigid rocky body has $k_2\approx0.03$, which would demand $Q\approx1.8$ — physically impossible, since $Q$ below about 1 means the body dissipates more energy per cycle than it stores. So $k_2$ must be much larger, of order 0.5 to 1, and **a Love number that size requires a substantially molten interior** — a global magma ocean or a partially molten asthenosphere. That inference, made from an energy budget and a dynamical formula, was subsequently supported by Galileo's magnetometer detection of an induced field consistent with a conducting magma layer.

**Example 2 (why you'd care — why Europa is warm but Ganymede is not).** Apply the scaling $\dot E\propto R_s^5e^2/a^6$ (per unit mass, divide by $R_s^3$, giving $\propto R_s^2e^2/a^6$).

| | $R_s$ (km) | $a$ ($10^{5}$ km) | $e$ |
|---|---|---|---|
| Io | 1822 | 4.217 | 0.0041 |
| Europa | 1561 | 6.711 | 0.0094 |
| Ganymede | 2634 | 10.70 | 0.0013 |

Heating *per unit mass*, relative to Io:

$$\text{Europa: } \left(\frac{1561}{1822}\right)^2\left(\frac{0.0094}{0.0041}\right)^2\left(\frac{4.217}{6.711}\right)^6 = 0.734\times5.256\times0.0616 = 0.238,$$

$$\text{Ganymede: } \left(\frac{2634}{1822}\right)^2\left(\frac{0.0013}{0.0041}\right)^2\left(\frac{4.217}{10.70}\right)^6 = 2.090\times0.1006\times0.00376 = 7.9\times10^{-4}.$$

**Europa gets about a quarter of Io's specific heating; Ganymede gets about a thousandth of it.**

Notice how the terms fight. Europa's larger eccentricity gains it a factor of 5, but its greater distance costs a factor of 16 — the $a^{-6}$ dominates completely. Ganymede is bigger, which helps by a factor of 2, but it is 2.5 times further out, and $2.5^6 = 244$.

**The physical outcome matches exactly what is observed.** Io: 2.5 W m$^{-2}$, entirely molten, 400 active volcanoes. Europa: enough to keep an ocean liquid beneath a thin ice shell, but not enough to melt the surface. Ganymede: essentially none from tides today, and its ocean — which the induced field says exists — must be sustained by radiogenic heat plus, plausibly, a more eccentric past when the resonance was differently configured.

**The $a^{-6}$ is the whole story of the outer solar system's habitability.** Move a moon 60 percent further out and its tidal heating drops by a factor of 16.

## Watch out

- **You might think a moon close to a giant planet is tidally heated, but a circular synchronous orbit produces no heating at all.** Distance sets the *scale* of the effect; eccentricity decides whether there is any effect. Titan is close to Saturn and barely heated because its eccentricity is small.
- **You might think tidal heating is self-sustaining, but tides damp the eccentricity that drives them.** Io's would vanish in $10^{3}$–$10^{4}$ years. Every long-lived tidally heated body must be in a resonance, and finding one is the first thing to check.
- **You might think tidal locking always means 1:1, but Mercury is in a 3:2 spin–orbit resonance.** Eccentric orbits admit higher states, and capture into them is a probabilistic outcome of the despinning process.
- **You might think $k_2/Q$ is a material property, but it depends on the forcing frequency and on the body's internal structure**, especially whether there is a liquid layer. Io's inferred $k_2/Q = 0.017$ is not a rock property; it is evidence of a magma ocean.

## One-liner

> Tides heat only what flexes, flexing needs eccentricity, and eccentricity survives only inside a resonance — so the outer solar system's warm moons are the ones caught in orbital locks.

## Problems

**P1 (🟢)** A moon has $P = 2.5$ d around a planet of mass $6\times10^{26}$ kg. (a) Compute $n$. (b) Compute $a$ from $n^2a^3 = GM_p$. (c) A second moon is in a 2:1 resonance exterior to it; give its period and semi-major axis.

**P2 (🟡)** Two moons have the same $k_2/Q$, the same eccentricity and the same density. Moon B has twice the radius of moon A and orbits at 1.5 times the distance. (a) Compute the ratio of their total tidal heating $\dot E$. (b) Compute the ratio of their heating *per unit mass*. (c) Comment on which quantity determines whether a moon has a subsurface ocean.

**P3 (🔴, optional)** Enceladus: $R_s = 252$ km, $a = 2.38\times10^{5}$ km, $e = 0.0047$, $P = 1.370$ d, $M_p(\text{Saturn}) = 5.683\times10^{26}$ kg, and observed heat output $\approx1.6\times10^{10}$ W. (a) Compute $n$. (b) Compute the coefficient in $\dot E = C\,(k_2/Q)$. (c) Infer $k_2/Q$ and compare with Io's 0.0167, then state the standard difficulty with Enceladus's heat budget.

<details>
<summary>Solutions</summary>

**P1** (a) $$n = \frac{2\pi}{2.5\times86400} = \frac{6.2832}{2.16\times10^{5}} = 2.909\times10^{-5}\ \mathrm{s^{-1}}.$$

(b) $$a^3 = \frac{GM_p}{n^2} = \frac{6.674\times10^{-11}\times6\times10^{26}}{(2.909\times10^{-5})^2} = \frac{4.004\times10^{16}}{8.462\times10^{-10}} = 4.732\times10^{25}\ \mathrm{m^3},$$
$$a = (4.732\times10^{25})^{1/3} = 3.62\times10^{8}\ \mathrm{m} = 362{,}000\ \mathrm{km}.$$

(c) A 2:1 exterior resonance means $P_2 = 2P_1 = 5.0$ d, and by Kepler's third law $a\propto P^{2/3}$:

$$a_2 = 3.62\times10^{8}\times2^{2/3} = 3.62\times10^{8}\times1.5874 = 5.75\times10^{8}\ \mathrm{m} = 575{,}000\ \mathrm{km}.$$

**P2** (a) $$\frac{\dot E_B}{\dot E_A} = \left(\frac{R_B}{R_A}\right)^5\left(\frac{a_A}{a_B}\right)^6\frac{n_B}{n_A}.$$

With $n\propto a^{-3/2}$, $n_B/n_A = (1.5)^{-3/2} = 0.5443$:

$$= 2^5\times(1/1.5)^6\times0.5443 = 32\times0.08779\times0.5443 = 1.529.$$

**Moon B produces about 1.5 times moon A's total heat.**

(b) Per unit mass, divide by mass $\propto R^3$ (same density):

$$\frac{1.529}{2^3} = \frac{1.529}{8} = 0.191.$$

**Moon B is heated only a fifth as strongly per kilogram.**

(c) **Heating per unit mass is what matters** for whether the interior melts, since it is specific heating that sets the temperature rise against the body's own thermal balance — and to first order the loss also scales with surface area over volume, so a larger body loses less per kilogram, partially offsetting.

The important consequence is that the two quantities can point in opposite directions, as here: moon B is the *brighter* infrared source but the *colder* interior. Comparing satellites by total tidal power, which is what a distant thermal measurement gives, can therefore mislead about which one has an ocean.

**P3** (a) $$n = \frac{2\pi}{1.370\times86400} = \frac{6.2832}{1.1837\times10^{5}} = 5.308\times10^{-5}\ \mathrm{s^{-1}}.$$

(b) $$GM_p^2 = 6.674\times10^{-11}\times(5.683\times10^{26})^2 = 6.674\times10^{-11}\times3.230\times10^{53} = 2.156\times10^{43},$$
$$R_s^5 = (2.52\times10^{5})^5 = 1.017\times10^{27}, \qquad a^6 = (2.38\times10^{8})^6 = 1.816\times10^{50},$$
$$n\,e^2 = 5.308\times10^{-5}\times(0.0047)^2 = 5.308\times10^{-5}\times2.209\times10^{-5} = 1.173\times10^{-9}.$$

$$C = \frac{21}{2}\cdot\frac{2.156\times10^{43}\times1.017\times10^{27}\times1.173\times10^{-9}}{1.816\times10^{50}} = 10.5\times\frac{2.572\times10^{61}}{1.816\times10^{50}} = 10.5\times1.416\times10^{11}.$$

$$C = 1.487\times10^{12}\ \mathrm{W}.$$

(c) $$\frac{k_2}{Q} = \frac{1.6\times10^{10}}{1.487\times10^{12}} = 0.0108.$$

Comparable to Io's 0.0167 — both bodies are extraordinarily dissipative.

**The standard difficulty is that Enceladus's heat output is too large to be steady.** The heating rate depends on the eccentricity, which is maintained by the 2:1 resonance with Dione — but the resonance can only supply eccentricity at a rate set by how fast Saturn's tides push Enceladus outward, and that in turn depends on Saturn's own $k_2/Q$. For a long time the accepted value of Saturn's $Q$ (around $10^{4}$ or more, from the requirement that Mimas not have migrated out of the rings) implied an equilibrium heating rate of only about $1.1\times10^{9}$ W — **more than ten times too small.**

Two developments have largely resolved it. Astrometric measurements of the Saturnian moons' actual migration rates gave $Q\approx2000$ for Saturn, an order of magnitude more dissipative than assumed, raising the equilibrium supply. And a resonance-locking mechanism, in which a moon stays locked to a slowly drifting internal oscillation mode of the planet, allows much faster migration than the constant-$Q$ picture permits. Even so, the possibility remains that Enceladus is *not* in steady state — that it is in a transient hot phase, having stored eccentricity earlier, and that its output oscillates on a $10^{7}$–$10^{8}$ year cycle.

**Which matters directly for habitability**: an ocean maintained for four billion years is a very different prospect from one that has existed for ten million.

</details>

## Flashback

**From Lesson 5.1 (Giant and ice-giant interiors):** A giant planet has $M = 150\,M_\oplus$ and $R = 9\,R_\oplus$. (a) Compute its mean density. (b) Compute its uniform-sphere central pressure in GPa. (c) The metallic-hydrogen transition is near 100 GPa; using $P(r) = P_c[1-(r/R)^2]$, find the fractional radius at which it occurs and comment on the likely field.

<details>
<summary>Solution</summary>

(a) $$M = 150\times5.972\times10^{24} = 8.958\times10^{26}\ \mathrm{kg}, \qquad R = 9\times6.371\times10^{6} = 5.734\times10^{7}\ \mathrm{m}.$$

$$V = \tfrac43\pi(5.734\times10^{7})^3 = \tfrac43\pi\times1.885\times10^{23} = 7.897\times10^{23}\ \mathrm{m^3},$$
$$\bar\rho = \frac{8.958\times10^{26}}{7.897\times10^{23}} = 1134\ \mathrm{kg\,m^{-3}}.$$

Between Saturn's 687 and Jupiter's 1326 — a hydrogen-dominated gas giant.

(b) $$P_c = \frac{3GM^2}{8\pi R^4} = \frac{3\times6.674\times10^{-11}\times(8.958\times10^{26})^2}{8\pi(5.734\times10^{7})^4}.$$

Numerator: $3\times6.674\times10^{-11}\times8.025\times10^{53} = 1.607\times10^{44}$.

Denominator: $8\pi\times1.081\times10^{31} = 2.717\times10^{32}$.

$$P_c = 5.915\times10^{11}\ \mathrm{Pa} = 591\ \mathrm{GPa}.$$

(c) $$100 = 591\left[1-\left(\frac{r}{R}\right)^2\right], \qquad \left(\frac{r}{R}\right)^2 = 1-0.169 = 0.831, \qquad \frac{r}{R} = 0.912.$$

The metallic region reaches out to 91 percent of the radius — **an even deeper and thicker conducting shell than Jupiter's 78 percent.** By volume it is $0.912^3 = 76$ percent of the planet, and with central condensation it holds essentially all the mass.

The expected field is therefore **strong and cleanly dipolar**, like Jupiter's rather than like Uranus's: a thick, deep, vigorously convecting conducting region is exactly the geometry that produces a well-organized axial dipole ([2.3](02-03-magnetic-fields-dynamo.md), [5.1](05-01-giant-ice-giant-interiors.md)). The caveat from 5.1's problem set applies — a uniform-density profile understates central condensation, so the true transition is somewhat shallower than 0.91 — but the qualitative conclusion is robust.

</details>

## Connections

- **Backward:** [3.2](03-02-gravity-topography-tidal-response.md) introduced $k_2$ and the tidal bulge as a rigidity probe; [2.7](02-07-moon-earth-moon-system.md) derived the $a^{-11/2}$ migration law on the Earth–Moon system; [1.4](01-04-giant-planets-migration.md) met resonance capture as a migration fossil.
- **Forward:** [5.3](05-03-ocean-worlds.md) uses tidal heating to keep the oceans liquid; [5.4](05-04-rings-satellite-systems.md) uses resonances to explain ring gaps and shepherding.
- **Sideways:** [`orbital-mechanics`](../../orbital-mechanics/syllabus.md) owns two-body orbits, elements and the restricted three-body problem, and stops short of tidal evolution and mean-motion resonances, which this lesson owns. Resonance capture is an adiabatic-invariant argument from [`analytical-mechanics`](../../analytical-mechanics/syllabus.md), and the pendulum equation for the resonant argument is the same one as [`dynamical-systems`](../../dynamical-systems/syllabus.md)'s libration–circulation separatrix. The viscoelastic $Q$ is [mechanics-of-materials](../../mechanics-of-materials/syllabus.md)' damping, applied to a whole moon.

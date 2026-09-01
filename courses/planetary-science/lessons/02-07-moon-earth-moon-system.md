# Planetary Science · Lesson 2.7: The Moon and the Earth–Moon system

> ⏱ ~15 min · Module 2: Planetary interiors and surfaces · Builds on: [2.1](02-01-differentiation-interior-structure.md), [2.4](02-04-impact-cratering-chronology.md), [2.6](02-06-reading-planetary-surface.md) · Unlocks: [3.1](03-01-mass-density-moment-of-inertia.md), [5.2](05-02-tides-resonances-orbital-evolution.md)

## Why this matters

The Moon is the only body other than Earth from which we have samples collected from known, mapped, crater-counted locations. That single fact makes it the **calibration standard for the age of every surface in the solar system** — every Martian date, every Mercurian date, every estimate for Europa or Ganymede, is a lunar crater count carried abroad ([2.4](02-04-impact-cratering-chronology.md)).

It is also the best-constrained origin problem in planetary science, and the constraint that does most of the work is not chemical or geological but purely dynamical: the Earth–Moon system has far too much angular momentum to have formed quietly.

## The idea

**Start with what has to be explained.** Four facts, and no theory survives that misses any of them.

1. **The Moon is depleted in iron.** Its mean density is $3346\ \mathrm{kg\,m^{-3}}$ against Earth's 5513, and its moment-of-inertia factor is 0.3931 against Earth's 0.3307 ([2.1](02-01-differentiation-interior-structure.md)). Its core is a few percent of its mass; Earth's is 32.5 percent. **The Moon is made of mantle, not of planet.**
2. **The Moon is depleted in volatiles.** No water in its primary minerals, and elements like potassium, sodium and zinc are systematically depleted relative to Earth in a pattern that tracks their condensation temperature. Something drove them off.
3. **The Moon is isotopically identical to Earth.** Oxygen, titanium, chromium, tungsten — all match Earth to within measurement error, and match nothing else in the solar system. Mars and the meteorite groups are all distinguishably different ([1.6](01-06-cosmochemistry-volatile-delivery.md)).
4. **The system has enormous angular momentum.** This is the killer.

**Point 4 quantified.** The Moon's orbit carries 83 percent of the system's angular momentum while being 1.2 percent of its mass. Put all of it into Earth's spin instead and Earth's day is **4.1 hours** — near the rotational break-up limit for a body of Earth's density. **Whatever made the Moon delivered a colossal amount of spin.**

**Now test the theories against those four.**

- *Capture* — the Moon formed elsewhere and was gravitationally caught. Fails 3 badly: a body formed elsewhere would have its own isotopic signature. Also dynamically implausible without a third body to absorb energy.
- *Co-formation* — Earth and Moon accreted together as a binary. Passes 3, fails 1 (the two would have similar iron fractions) and fails 4 (no source for the spin).
- *Fission* — a rapidly spinning proto-Earth threw off a blob. Passes 1 and 3 elegantly, and was the leading idea for a century, but the spin required to make it happen is greater than the system now has, and there is no way to shed the excess.
- *Giant impact* — a Mars-sized body strikes the proto-Earth obliquely, late in accretion. **Passes all four.** The oblique geometry supplies the angular momentum; the impactor's and Earth's cores merge into Earth while the Moon accretes from ejected *mantle* material, giving the iron depletion; the ejecta is vaporized and hot, driving off volatiles.

**And then the isotopic problem returned to bite the winning theory.** The canonical impact simulation makes the Moon mostly out of the *impactor*, not out of Earth — something like 60–80 percent. But the impactor should have had its own isotopic signature, since every other body in the solar system does. **Why does the Moon match Earth so exactly?** Three live answers: the impactor happened to form at the same heliocentric distance and so shared Earth's composition; the impact was far more energetic than canonical, vaporizing and mixing both bodies thoroughly (the "synestia" family of models); or turbulent exchange between the vapour disk and Earth's atmosphere equilibrated them afterwards. **This is unresolved and is the central open problem in lunar origin.**

**Once the Moon exists, tides drive it away.** Earth's tidal bulge leads the Moon (because Earth rotates faster than the Moon orbits), so it exerts a forward torque, feeding angular momentum into the orbit. The Moon recedes, Earth's rotation slows, and the total is conserved. Lunar laser ranging off the Apollo retroreflectors measures the recession directly: **3.8 cm/yr**.

**Extrapolating that backward produces a famous contradiction.** The tidal rate scales steeply with distance, so the Moon receded much faster when it was close. Integrate the standard law backward from today's rate and the Moon was touching Earth **1.56 billion years ago** — but it is 4.5 billion years old. Something is wrong, and what is wrong is the assumption that today's dissipation is typical: **today's ocean basins happen to sit near resonance with the semidiurnal tide, making current dissipation anomalously high.** Averaged over Earth history it was lower, the recession was slower, and the age fits. Tidal rhythmites — laminated sediments recording ancient tidal cycles — confirm shorter days and a closer Moon in the Precambrian, at rates consistent with this.

## The formal version

**Angular momentum budget.**

$$L_{\text{spin}} = C_\oplus\,\omega_\oplus = 8.04\times10^{37}\times7.292\times10^{-5} = 5.86\times10^{33}\ \mathrm{kg\,m^2\,s^{-1}},$$

$$L_{\text{orb}} = M_m\sqrt{G(M_\oplus+M_m)\,a} = 7.346\times10^{22}\sqrt{4.035\times10^{14}\times3.844\times10^{8}} = 2.89\times10^{34},$$

$$L_{\text{tot}} = 3.48\times10^{34}\ \mathrm{kg\,m^2\,s^{-1}}.$$

Concentrating all of it in Earth's spin:

$$\omega = \frac{L_{\text{tot}}}{C_\oplus} = \frac{3.4\times10^{34}}{8.04\times10^{37}} = 4.23\times10^{-4}\ \mathrm{s^{-1}}, \qquad T = \frac{2\pi}{\omega} = 1.49\times10^{4}\ \mathrm{s} = 4.1\ \mathrm{h}.$$

**Tidal recession.** The torque from a bulge lagging by phase angle $\delta$, with $Q\approx1/(2\delta)$ the tidal quality factor and $k_2$ the Love number:

$$\frac{da}{dt} = 3\frac{k_2}{Q}\frac{M_m}{M_\oplus}\left(\frac{R_\oplus}{a}\right)^5 n\,a, \qquad n = \sqrt{\frac{GM_\oplus}{a^3}},$$

so $da/dt \propto a^{-11/2}$ and therefore

$$a^{13/2} \propto t \qquad\Longrightarrow\qquad t_{\text{to reach }a} = \frac{2}{13}\frac{a}{\dot a}.$$

*In words: because the rate falls so steeply with distance, the total elapsed time is only $2/13$ of the naive $a/\dot a$.* With $a = 3.844\times10^{8}$ m and $\dot a = 0.038\ \mathrm{m\,yr^{-1}}$:

$$t = \frac{2}{13}\times\frac{3.844\times10^{8}}{0.038} = \frac{2}{13}\times1.01\times10^{10} = 1.56\times10^{9}\ \mathrm{yr}.$$

**1.56 Gyr against an age of 4.5 Gyr — the timescale problem.** [5.2](05-02-tides-resonances-orbital-evolution.md) develops the tidal machinery properly.

**The Roche limit** sets how close the Moon can have formed without being torn apart:

$$d_{\text{Roche}} = 2.456\,R_\oplus\left(\frac{\rho_\oplus}{\rho_m}\right)^{1/3} = 2.456\times6371\times\left(\frac{5513}{3346}\right)^{1/3} = 18{,}500\ \mathrm{km} = 2.9\,R_\oplus.$$

The Moon is thought to have accreted just outside this, at 3–5 $R_\oplus$, against today's $60.3\,R_\oplus$.

**The lunar magma ocean.** The energy of accreting the Moon out of hot debris melted it to a depth of several hundred kilometres. As that ocean crystallized, dense minerals (olivine, pyroxene) sank and **plagioclase feldspar floated**, building a global anorthosite crust — the bright lunar highlands. The residual liquid, enriched in incompatible elements, froze last as the KREEP layer (potassium, Rare Earth Elements, Phosphorus). **The highlands are a flotation cumulate, and their existence is direct evidence that the whole Moon was once molten.**

**Lunar stratigraphy and the calibration.**

| Unit | Age | Crater density $N(1)$ | Evidence |
|---|---|---|---|
| Highlands (anorthosite) | 4.5–4.4 Ga | ~1 (near saturation) | Apollo 16 |
| Nectaris basin | ~3.9 Ga | — | Apollo 16 ejecta |
| Imbrium basin | 3.85 Ga | — | Apollo 14, 15 |
| Mare basalts | 3.9–3.1 Ga | $\sim3$–$5\times10^{-3}$ | Apollo 11, 12, 15, 17 |
| Copernicus | ~0.8 Ga | — | Apollo 12 ejecta (probable) |

**These pairs — a radiometric age and a crater count from the same place — are the entire empirical basis of solar-system surface chronology.** There are about half a dozen of them, they cluster badly in the 3.1–3.9 Ga interval, and there is a near-total gap between 3.1 and 0.8 Ga. That gap is why the middle of the chronology curve is the least constrained part of it, and it is a major motivation for sample-return missions to young mare units.

**Other lunar constraints.** The Moon carries **remanent crustal magnetization** implying an ancient dynamo from about 4.2 to 3.5 Ga, possibly longer — remarkable for a body with a core only 350 km across ([2.3](02-03-magnetic-fields-dynamo.md)). Candidate power sources include early core convection and mechanical stirring by precession while the Moon was still close to Earth.

## Picture

![Left panel, a horizontal bar showing the division of the Earth–Moon system's angular momentum: 83 percent in the Moon's orbit and 17 percent in Earth's spin, with the note that the Moon is only 1.2 percent of the mass. Beneath, the calculation that putting all 3.4 times ten to the thirty-four kilogram metre squared per second into Earth's spin gives an angular velocity of 4.23 times ten to the minus four per second, a 4.1-hour day, near the break-up limit; and the remark that capture and co-formation cannot supply this. Right panel, a plot of Earth–Moon distance in Earth radii against time before present in billions of years. A coral curve, labelled at today's dissipation rate, falls from 60 Earth radii at the present to zero only 1.56 billion years ago, marked with a dot. A blue dashed curve labelled what the age requires falls much more gently and is still above the Roche limit of 2.9 Earth radii at 4.5 billion years ago. A note explains that the gap between the curves is the timescale problem, resolved because today's ocean basins sit near resonance with the semidiurnal tide, making present dissipation unusually high](assets/02-07-fig1.svg)

The left panel is the argument for a giant impact; the right panel is a warning that a present-day rate measured to nine significant figures can still mislead by a factor of three when extrapolated.

## Worked examples

**Example 1 (mechanical — how fast was the day when the Moon formed?).** Take the Moon to have formed at $a = 4\,R_\oplus$ with the system's present total angular momentum. What was Earth's rotation period?

The Moon's orbital angular momentum at $a = 4\times6.371\times10^{6} = 2.548\times10^{7}$ m:

$$L_{\text{orb}} = M_m\sqrt{G(M_\oplus+M_m)a} = 7.346\times10^{22}\sqrt{4.035\times10^{14}\times2.548\times10^{7}}.$$

$$= 7.346\times10^{22}\sqrt{1.028\times10^{22}} = 7.346\times10^{22}\times1.014\times10^{11} = 7.45\times10^{33}.$$

Earth's spin then holds the remainder:

$$L_{\text{spin}} = 3.48\times10^{34} - 7.45\times10^{33} = 2.74\times10^{34}\ \mathrm{kg\,m^2\,s^{-1}},$$
$$\omega = \frac{2.74\times10^{34}}{8.04\times10^{37}} = 3.41\times10^{-4}\ \mathrm{s^{-1}}, \qquad T = \frac{2\pi}{3.41\times10^{-4}} = 1.84\times10^{4}\ \mathrm{s} = 5.1\ \mathrm{h}.$$

**A five-hour day.** And the Moon's orbital period at $4\,R_\oplus$:

$$P = 2\pi\sqrt{\frac{a^3}{GM_\oplus}} = 2\pi\sqrt{\frac{(2.548\times10^{7})^3}{3.986\times10^{14}}} = 2\pi\sqrt{4.152\times10^{7}} = 2\pi\times6444 = 4.05\times10^{4}\ \mathrm{s} = 11.3\ \mathrm{h}.$$

So a 5-hour day and an 11-hour month: the Moon, five times closer than today, would have loomed **fifteen times larger in area** in the sky and gone through its phases twice a day. The tides raised on Earth scale as $1/a^3$, so they were $(60.3/4)^3 = 3400$ times higher than today. That is the environment in which Earth's earliest history took place.

**Example 2 (why you'd care — the calibration that dates the solar system's surfaces).** Apollo 11 landed on Mare Tranquillitatis; its basalts date to 3.7 Ga, and the crater density there is $N(1)\approx3.2\times10^{-3}\ \mathrm{km^{-2}}$. Apollo 16 sampled the highlands, dating to about 4.4 Ga with $N(1)\approx0.95$. What do these two points buy, and what do they not?

*What they buy.* Two (age, density) pairs, three centuries apart in crater density but only 0.7 Gyr apart in age. Fitting them requires a function that is nearly flat in age and enormously steep in density over that interval — which is exactly the exponential term in the chronology function of [2.4](02-04-impact-cratering-chronology.md). **Two points fix the two parameters of that exponential**, and everything else — every crater age ever published for Mars, Mercury, Ganymede or Europa — descends from them.

*What they do not buy.* Three things worth being explicit about.

- **No coverage between 3.1 and 0.8 Ga.** Not one securely dated lunar sample falls in that interval, and it is exactly where the exponential and linear terms trade off. The chronology function is *interpolating across a 2-billion-year gap* using a functional form chosen for convenience.
- **No independent check on the transfer to other bodies.** The lunar calibration says nothing about the impactor flux at Mars ([2.4](02-04-impact-cratering-chronology.md)); that requires a dynamical model, and its uncertainty exceeds every measurement error here.
- **A sampling bias.** Apollo landing sites were chosen for safety and were all near-equatorial on the nearside, and a large fraction of the highland samples are Imbrium ejecta — the bias that undermines the case for a Late Heavy Bombardment.

**The Moon is simultaneously the strongest and the weakest link in planetary chronology.** Strongest because it is the only place where a radiometric age and a crater count are anchored to the same rock; weakest because there are so few such anchors, and the whole solar system hangs from them.

## Watch out

- **You might think the Moon's angular momentum is a detail of its orbit, but it is the primary evidence for its origin.** The 4.1-hour day it implies is what killed capture and co-formation, both of which otherwise explain plenty.
- **You might think the giant impact is settled, but the isotopic identity of Earth and Moon is a serious unsolved problem for it.** The theory that best explains the dynamics predicts a Moon made largely of impactor, and the observations say the Moon is made of Earth.
- **You might think 3.8 cm/yr extrapolates backward, but it gives 1.56 Gyr for a 4.5 Gyr system.** The present rate is anomalously high because of the current ocean-basin geometry. A precisely measured present-day rate is not a reliable guide to the past when the process is resonant.
- **You might think lunar samples date the whole Moon, but they date about half a dozen sites**, clustered in age and clustered in space, with a two-billion-year gap in the middle. Confidence in crater chronology should be calibrated to that.

## One-liner

> The Moon carries 83 percent of the system's spin on 1.2 percent of its mass, and no theory but a giant oblique impact can put it there.

## Problems

**P1 (🟢)** (a) Compute the Moon's orbital angular momentum at $a = 10\,R_\oplus$, taking $M_m = 7.346\times10^{22}$ kg, $G(M_\oplus+M_m) = 4.035\times10^{14}$, $R_\oplus = 6.371\times10^{6}$ m. (b) With $L_{\text{tot}} = 3.48\times10^{34}$, find Earth's spin angular momentum then. (c) Find Earth's rotation period, taking $C_\oplus = 8.04\times10^{37}\ \mathrm{kg\,m^2}$.

**P2 (🟡)** The Roche limit for a fluid satellite is $d = 2.456\,R_p(\rho_p/\rho_s)^{1/3}$. (a) Compute it for the Moon around Earth. (b) Compute it for a rocky satellite of density $3000\ \mathrm{kg\,m^{-3}}$ around Mars ($R_p = 3390$ km, $\rho_p = 3933\ \mathrm{kg\,m^{-3}}$). (c) Phobos orbits at 9376 km from Mars's centre; comment, given that Phobos is being dragged inward by tides.

**P3 (🔴, optional)** The tidal recession obeys $\dot a\propto a^{-11/2}$. (a) Show that $a^{13/2}$ is linear in time and derive $t = \frac{2}{13}(a/\dot a)$ for the time to grow from zero to $a$. (b) Compute it for the Moon with $\dot a = 3.8\ \mathrm{cm\,yr^{-1}}$. (c) The Moon is 4.5 Gyr old. By what constant factor would the past $k_2/Q$ have had to differ from today's to reconcile this, and give one independent line of evidence bearing on the answer.

<details>
<summary>Solutions</summary>

**P1** (a) $a = 10\times6.371\times10^{6} = 6.371\times10^{7}$ m.

$$L_{\text{orb}} = M_m\sqrt{G(M_\oplus+M_m)a} = 7.346\times10^{22}\sqrt{4.035\times10^{14}\times6.371\times10^{7}}.$$
$$= 7.346\times10^{22}\sqrt{2.571\times10^{22}} = 7.346\times10^{22}\times1.603\times10^{11} = 1.178\times10^{34}\ \mathrm{kg\,m^2\,s^{-1}}.$$

(b) $$L_{\text{spin}} = 3.48\times10^{34} - 1.178\times10^{34} = 2.30\times10^{34}\ \mathrm{kg\,m^2\,s^{-1}}.$$

(c) $$\omega = \frac{2.30\times10^{34}}{8.04\times10^{37}} = 2.861\times10^{-4}\ \mathrm{s^{-1}}, \qquad T = \frac{2\pi}{2.861\times10^{-4}} = 2.196\times10^{4}\ \mathrm{s} = 6.1\ \mathrm{h}.$$

A six-hour day with the Moon at ten Earth radii — between Example 1's 5.1 h at $4R_\oplus$ and today's 24 h at $60R_\oplus$.

**P2** (a) $$d = 2.456\times6371\times\left(\frac{5513}{3346}\right)^{1/3} = 2.456\times6371\times(1.6476)^{1/3} = 2.456\times6371\times1.1810.$$
$$d = 18{,}480\ \mathrm{km} = 2.90\,R_\oplus.$$

(b) $$d = 2.456\times3390\times\left(\frac{3933}{3000}\right)^{1/3} = 2.456\times3390\times(1.311)^{1/3} = 2.456\times3390\times1.0945.$$
$$d = 9114\ \mathrm{km} = 2.69\,R_{\text{Mars}}.$$

(c) Phobos at 9376 km is only **262 km outside** the fluid Roche limit of 9114 km — under 3 percent. And Phobos is spiralling *inward*, at about 1.8 cm/yr, because it orbits faster than Mars rotates, so Mars's tidal bulge lags behind it and drags it down. It will cross the limit in roughly 15 million years.

Two refinements matter. The fluid Roche limit applies to a body held together only by self-gravity; Phobos has some material strength, so it can survive somewhat inside the fluid limit — which is why it is still there. But it is a heavily fractured rubble pile with grooves that may already be tidal stress fractures, so its effective strength is low. The expected outcome is not a clean impact but **disruption into a transient ring**, followed by the debris either raining onto Mars or spreading. Mars's other moon, Deimos, orbits *outside* synchronous altitude and is receding instead, like our own Moon.

**P3** (a) With $\dot a = k a^{-11/2}$ for constant $k$:

$$a^{11/2}\,da = k\,dt \;\Longrightarrow\; \frac{2}{13}a^{13/2} = kt + \text{const}.$$

Taking $a = 0$ at $t = 0$, the constant vanishes and $a^{13/2} = \frac{13}{2}kt$, so $a^{13/2}$ is linear in $t$. For the time to reach the present $a$, substitute $k = \dot a\,a^{11/2}$ evaluated today:

$$t = \frac{2a^{13/2}}{13k} = \frac{2a^{13/2}}{13\,\dot a\,a^{11/2}} = \frac{2}{13}\frac{a}{\dot a}.$$

(b) $$\frac{a}{\dot a} = \frac{3.844\times10^{8}\ \mathrm{m}}{0.038\ \mathrm{m\,yr^{-1}}} = 1.011\times10^{10}\ \mathrm{yr},$$
$$t = \frac{2}{13}\times1.011\times10^{10} = 1.56\times10^{9}\ \mathrm{yr}.$$

(c) The elapsed time is inversely proportional to $k$, and $k\propto k_2/Q$. To stretch 1.56 Gyr to 4.5 Gyr:

$$\frac{(k_2/Q)_{\text{past}}}{(k_2/Q)_{\text{today}}} = \frac{1.56}{4.5} = 0.35.$$

**The time-averaged dissipation must have been about a third of today's** — equivalently, $Q$ about three times higher.

The independent evidence is **tidal rhythmites**: laminated sedimentary deposits in which each lamina records a tidal cycle, so counting laminae per neap–spring bundle gives the number of days per month directly at the time of deposition. Precambrian examples around 620 Ma give roughly 400 days per year (a 21.9-hour day) and around 900 Ma roughly 480 days. Both imply a Moon closer than today but *not nearly as close as the constant-rate extrapolation demands*, and the recession rates they imply average around 1.2–2 cm/yr rather than 3.8 — comfortably within the required factor of about three.

The physical reason is that tidal dissipation happens overwhelmingly in shallow seas and depends resonantly on ocean-basin geometry, which changes as continents drift. Today the North Atlantic's dimensions place it near resonance with the semidiurnal tide, an accident of the current continental configuration. Averaged over Earth history, with continents in other arrangements and a supercontinent for long stretches, dissipation was lower. **A precisely measured present-day rate is not evidence about the past when the mechanism is resonant** — which is the transferable lesson, and it applies equally to the tidal histories of the outer-planet satellites in [5.2](05-02-tides-resonances-orbital-evolution.md).

</details>

## Flashback

**From Lesson 2.4 (Impact cratering and chronology):** A surface has $N(1) = 1.5\times10^{-2}\ \mathrm{km^{-2}}$. Use $N(1) = 5.44\times10^{-14}(e^{6.93T}-1)+8.38\times10^{-4}T$. (a) Find its age. (b) A second surface has exactly half that density; find its age. (c) State what the ratio of the two ages tells you about the sensitivity of crater dating in this range.

<details>
<summary>Solution</summary>

(a) Try $T = 3.75$: exponential term $= 5.44\times10^{-14}e^{25.988} = 5.44\times10^{-14}\times1.940\times10^{11} = 1.055\times10^{-2}$; linear $= 3.14\times10^{-3}$; total $= 1.37\times10^{-2}$. Slightly low.

Try $T = 3.79$: $5.44\times10^{-14}e^{26.265} = 5.44\times10^{-14}\times2.559\times10^{11} = 1.392\times10^{-2}$; linear $= 3.18\times10^{-3}$; total $= 1.71\times10^{-2}$. Slightly high.

Try $T = 3.77$: $5.44\times10^{-14}e^{26.126} = 5.44\times10^{-14}\times2.227\times10^{11} = 1.212\times10^{-2}$; linear $= 3.16\times10^{-3}$; total $= 1.53\times10^{-2}$.

$$T \approx 3.77\ \mathrm{Gyr}.$$

(b) $N(1) = 7.5\times10^{-3}$. Try $T = 3.66$: $5.44\times10^{-14}e^{25.364} = 5.44\times10^{-14}\times1.039\times10^{11} = 5.65\times10^{-3}$; linear $= 3.07\times10^{-3}$; total $= 8.72\times10^{-3}$. High.

Try $T = 3.60$: $5.44\times10^{-14}e^{24.948} = 5.44\times10^{-14}\times6.85\times10^{10} = 3.73\times10^{-3}$; linear $= 3.02\times10^{-3}$; total $= 6.75\times10^{-3}$. Low.

Try $T = 3.63$: $5.44\times10^{-14}e^{25.156} = 5.44\times10^{-14}\times8.43\times10^{10} = 4.59\times10^{-3}$; linear $= 3.04\times10^{-3}$; total $= 7.63\times10^{-3}$.

$$T \approx 3.62\ \mathrm{Gyr}.$$

(c) **Halving the crater density changes the age by 0.15 Gyr, about 4 percent.** The two surfaces differ by a factor of two in crater count and by essentially nothing in age.

That is the exponential regime asserting itself, and it cuts both ways. Favourably: the age is *robust* — a 30 percent counting error, or a similarly sized error in the assumed impact flux, barely moves the answer. Unfavourably: the age is *unresolvable* — no crater count, however good, can distinguish a 3.6 from a 3.8 Gyr surface here, so the entire Hesperian on Mars and the entire late heavy bombardment epoch on the Moon compress into a narrow band of the chronology curve. This is precisely the interval where the lunar samples cluster, which is why it is well calibrated and, simultaneously, why crater counting cannot resolve events within it.

</details>

## Connections

- **Backward:** [2.1](02-01-differentiation-interior-structure.md) supplied the moment-of-inertia argument that reveals the Moon's tiny core, the first of the four constraints; [2.4](02-04-impact-cratering-chronology.md) supplied the chronology this lesson calibrates; [2.6](02-06-reading-planetary-surface.md) supplied the mapping that assigns crater counts to dated units.
- **Forward:** [3.1](03-01-mass-density-moment-of-inertia.md) shows how $C/MR^2$ is actually measured, including for the Moon by laser ranging; [5.2](05-02-tides-resonances-orbital-evolution.md) develops tidal dissipation, $k_2$ and $Q$ properly and applies them across the outer solar system.
- **Sideways:** [`geology` 5.2](../../geology/lessons/05-02-earth-history-hadean-proterozoic.md) covers the Hadean Earth that the giant impact left behind, and credits this course for the impact mechanics. The angular-momentum bookkeeping is straight [`mechanics-refresher`](../../mechanics-refresher/syllabus.md); the tidal torque is the same lagging-bulge argument as [geophysics 2.5](../../geophysics/lessons/02-05-solid-earth-tides-rotation.md)'s solid-Earth tides, run over gigayears instead of hours.

# Astrodynamics · Lesson 4.2: Interplanetary Hohmann & hyperbolic legs

> ⏱ ~15 min · Module 4: Interplanetary trajectories & perturbations · Builds on: [3.2](03-02-hohmann-transfers.md), [4.1](04-01-sphere-of-influence-patched-conics.md) · Unlocks: 4.3 (gravity assists)

## Why this matters

This is the lesson where a Mars mission becomes a number. Using patched conics from [4.1](04-01-sphere-of-influence-patched-conics.md) and the Hohmann geometry from [3.2](03-02-hohmann-transfers.md), you can compute the launch energy, the flight time, the arrival conditions, and — crucially — **when you're allowed to leave**.

That last part is what makes interplanetary missions different from Earth-orbit missions. You can launch to LEO any day of the year. You can launch to Mars for a few weeks every 26 months. Miss the window and the mission waits two years. Every schedule slip on a planetary mission is measured against that clock.

## The idea

Strip away the planets and the problem is a Hohmann transfer with the Sun as the primary: an ellipse with perihelion at Earth's orbit and aphelion at Mars's. That gives the heliocentric speeds you need at each end.

Now the crucial reframing. You don't start at rest — you start **on Earth, which is already moving at 29.8 km/s** around the Sun. The transfer needs 32.7 km/s at perihelion. So all you have to supply is the difference, 2.9 km/s. The Earth provides 91 percent of the speed needed to reach Mars, for free. This is the single most important fact in interplanetary mission design.

That 2.9 km/s is the **hyperbolic excess speed** $v_\infty$: the speed the spacecraft must still have *after* escaping Earth's gravity well. And here the Oberth effect ([3.1](03-01-impulsive-maneuvers-delta-v.md)) does you an enormous favor. To end up with 2.9 km/s at infinity, you don't need to add 2.9 km/s to escape speed — you need much less, because energies add rather than speeds, and you're burning deep in the well where you're moving fast. From LEO, escape costs 3.20 km/s and a 2.9 km/s excess costs only 3.59 km/s. **The last 2.9 km/s of interplanetary speed costs 0.39 km/s of propellant.**

The timing constraint comes from the transfer being $180^\circ$ of arc. You arrive on the far side of the Sun from where you left, so Mars had better be *there* when you show up. Since the trip takes 259 days and Mars moves at its own rate, Mars must start at a specific lead angle: $44.4^\circ$ ahead of Earth. That geometry recurs once per **synodic period** — 780 days for Earth and Mars, about 26 months.

## The formal version

**Heliocentric leg.** Treating both planetary orbits as circular and coplanar, with $\mu_\odot = 1.327\times10^{11}\ \mathrm{km^3/s^2}$, $r_1 = 1.496\times10^8$ km (Earth), $r_2 = 2.279\times10^8$ km (Mars):

$$a_t = \frac{r_1+r_2}{2}, \qquad v_{c1} = \sqrt{\frac{\mu_\odot}{r_1}}, \qquad v_{t,p} = \sqrt{\mu_\odot\left(\frac{2}{r_1}-\frac{1}{a_t}\right)},$$

and the two hyperbolic excess speeds are simply the mismatches between the transfer orbit and the planets' own orbits:

$$\boxed{\;v_{\infty,\rm dep} = v_{t,p} - v_{c1}, \qquad v_{\infty,\rm arr} = v_{c2} - v_{t,a}.\;}$$

*In words: what you need beyond what the planet already gives you, and what you have left over when you arrive.* Note the arrival one is a *deficit* the other way — you arrive at Mars's orbit moving slower than Mars, so Mars catches up to you, and $v_\infty$ is the speed of that relative approach.

**Characteristic energy.** Launch vehicles are advertised in terms of

$$C_3 \equiv v_\infty^2 \qquad (\mathrm{km^2/s^2}),$$

twice the specific energy of the departure hyperbola. *In words: the leftover energy per kilogram after escaping Earth.* For an Earth-to-Mars Hohmann, $C_3 = 2.944^2 = 8.66\ \mathrm{km^2/s^2}$, and a rocket's payload-versus-$C_3$ curve is how mission planners size the launch.

**Departure burn (planetocentric).** From a circular parking orbit of radius $r_p$, the escape hyperbola must have perigee speed

$$v_p = \sqrt{v_\infty^2 + \frac{2\mu_\oplus}{r_p}},$$

*in words: the escape speed and the excess add in quadrature, not linearly* — this is the Oberth effect made explicit. The injection burn is

$$\Delta v_{\rm dep} = v_p - \sqrt{\frac{\mu_\oplus}{r_p}}.$$

See [hyperbolic departure](../reference.md#hyperbolic-departure).

**Arrival burn (planetocentric).** Arriving at Mars with $v_{\infty,\rm arr}$, and aiming for a periapsis radius $r_{pM}$, the approach speed there is $v_{pM} = \sqrt{v_{\infty,\rm arr}^2 + 2\mu_M/r_{pM}}$, and capture into a circular orbit costs $v_{pM} - \sqrt{\mu_M/r_{pM}}$. Capture into a highly *elliptical* orbit costs far less, which is why almost every orbiter captures into a long ellipse first and trims later.

**Flight time and the phase angle.** The transfer takes half the transfer ellipse's period:

$$t_{12} = \pi\sqrt{\frac{a_t^3}{\mu_\odot}}.$$

During that time Mars moves through $n_M t_{12}$, where $n_M = 2\pi/T_M$. Since the spacecraft covers exactly $180^\circ$, Mars must start ahead by

$$\boxed{\;\phi_0 = 180^\circ - n_M\,t_{12}.\;}$$

*In words: the target planet's lead angle at launch is a half-turn minus however far it travels while you're in transit.* For an *inner* target (Venus), $n$ is larger than Earth's and $\phi_0$ comes out negative — the target must **trail** Earth.

**Synodic period.** The launch geometry repeats when the two planets' phase difference returns to $\phi_0$:

$$T_{\rm syn} = \frac{2\pi}{|n_1 - n_2|} = \left|\frac{1}{T_1} - \frac{1}{T_2}\right|^{-1}.$$

For Earth (365.25 d) and Mars (687 d): $T_{\rm syn} = 780$ days $= 2.14$ years.

## Picture

![Earth and Mars orbits about the Sun with the transfer ellipse spanning one hundred eighty degrees, showing Mars leading Earth by forty-four degrees at launch and arriving at the far end, beside a bar comparison showing Earth's orbital speed supplying most of the required perihelion speed](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — the full Earth-to-Mars budget).**

*Heliocentric.* $a_t = (1.496 + 2.279)\times10^8/2 = 1.8875\times10^8$ km.

$$v_{c1} = \sqrt{\frac{1.327\times10^{11}}{1.496\times10^8}} = 29.784\ \mathrm{km/s}, \qquad v_{c2} = \sqrt{\frac{1.327\times10^{11}}{2.279\times10^8}} = 24.131\ \mathrm{km/s},$$

$$v_{t,p} = \sqrt{1.327\times10^{11}\left(\frac{2}{1.496\times10^8}-\frac{1}{1.8875\times10^8}\right)} = 32.728\ \mathrm{km/s},$$
$$v_{t,a} = \sqrt{1.327\times10^{11}\left(\frac{2}{2.279\times10^8}-\frac{1}{1.8875\times10^8}\right)} = 21.484\ \mathrm{km/s}.$$

$$v_{\infty,\rm dep} = 32.728-29.784 = 2.944\ \mathrm{km/s}, \qquad v_{\infty,\rm arr} = 24.131-21.484 = 2.648\ \mathrm{km/s}.$$

$$C_3 = 2.944^2 = 8.66\ \mathrm{km^2/s^2}.$$

*Departure burn* from a 300-km parking orbit ($r_p = 6678$ km, $v_c = 7.726$ km/s):

$$v_p = \sqrt{2.944^2 + \frac{2(398{,}600)}{6678}} = \sqrt{8.66 + 119.38} = \sqrt{128.04} = 11.316\ \mathrm{km/s},$$
$$\Delta v_{\rm dep} = 11.316 - 7.726 = 3.590\ \mathrm{km/s}.$$

*Arrival* at Mars, capturing into a 500-km circular orbit ($r_{pM} = 3896$ km, $\mu_M = 42{,}828$):

$$v_{pM} = \sqrt{2.648^2 + \frac{2(42{,}828)}{3896}} = \sqrt{7.01+21.98} = 5.385\ \mathrm{km/s}, \quad v_{cM} = \sqrt{\frac{42{,}828}{3896}} = 3.316\ \mathrm{km/s},$$
$$\Delta v_{\rm arr} = 5.385-3.316 = 2.069\ \mathrm{km/s}.$$

*Timing.*

$$t_{12} = \pi\sqrt{\frac{(1.8875\times10^8)^3}{1.327\times10^{11}}} = 2.2363\times10^7\ \mathrm{s} = 258.8\ \mathrm{days}.$$

Mars sweeps $n_Mt_{12} = (360^\circ/687\ \mathrm d)(258.8\ \mathrm d) = 135.6^\circ$, so

$$\phi_0 = 180^\circ - 135.6^\circ = 44.4^\circ.$$

**Summary:** $C_3 = 8.66$, 3.59 km/s from LEO, 259 days, launch when Mars leads Earth by 44 degrees, windows every 26 months, plus 2.07 km/s to capture (or ~0.97 km/s into a 30,000-km-apoapsis ellipse). These numbers match real Mars missions closely.

**Example 2 (why you'd care — the Oberth effect, quantified).** Compare two ways of thinking about the departure burn.

*Naive:* escape from LEO costs 3.20 km/s ([1.4](01-04-energy-vis-viva-orbit-types.md)); then you need another 2.94 km/s to get $v_\infty$. Total by this reasoning: 6.14 km/s.

*Correct:* $\Delta v_{\rm dep} = 3.590$ km/s. The extra $v_\infty$ costs $3.590 - 3.200 = 0.390$ km/s, not 2.944.

**A factor of 7.5 cheaper than the naive estimate.** The reason is in the quadrature: $v_p^2 = v_{\rm esc}^2 + v_\infty^2$, so speeds add as the sides of a right triangle. At $v_{\rm esc} = 10.926$ km/s, tacking on a perpendicular 2.944 barely lengthens the hypotenuse.

*Where this bites hardest:* it means burning **deep in the gravity well** is enormously more efficient than burning after escape. A spacecraft that coasts to the SOI edge and then burns 2.944 km/s pays the full 2.944; the one that burns at 300 km altitude pays 0.390 for the same result. This is why interplanetary injection happens from LEO and not from a high orbit, and it is the same physics that makes a powered flyby (an "Oberth maneuver") at Jupiter so valuable.

## Watch out

- **You might add $v_\infty$ to escape speed linearly.** It adds in quadrature: $v_p^2 = v_\infty^2 + v_{\rm esc}^2$. The linear version overestimates the burn enormously.
- **You might forget the launch window.** A Mars trajectory computed for the wrong phase angle arrives at an empty patch of space. The $44.4^\circ$ is not optional.
- **You might expect a window every year.** It's every synodic period. For Mars that's 26 months; for Venus 584 days; for Jupiter 399 days (close to a year, because Jupiter barely moves).
- **You might assume circular coplanar orbits are good enough for real design.** Mars's $e = 0.093$ makes its distance vary by 19 million km, and its $1.85^\circ$ inclination costs real delta-v. Actual missions solve Lambert's problem for specific dates rather than using an idealized Hohmann, which is why real $C_3$ values range from about 8 to 20 across different windows.
- **You might capture into a circular orbit by default.** Capturing into a 30,000-km-apoapsis ellipse at Mars costs 0.97 km/s versus 2.07 for a circular orbit — less than half. Aerobraking down afterwards is nearly free, and is what Mars Global Surveyor, Odyssey, and MRO all did.

## One-liner

> Earth gives you 29.8 of the 32.7 km/s you need, the Oberth effect makes the remaining 2.9 cost only 0.39 from LEO, and the $180^\circ$ geometry means you can only leave when Mars leads by 44 degrees — every 26 months.

## Problems

**P1 (🟢)** Compute the heliocentric Hohmann transfer from Earth ($1.496\times10^8$ km) to Venus ($1.082\times10^8$ km): the transfer semi-major axis, both $v_\infty$ values, and the flight time. ($\mu_\odot = 1.327\times10^{11}$.)

**P2 (🟡)** Find the required phase angle at launch for the Earth-to-Venus transfer of P1 (Venus's period is 224.7 days), and the synodic period. Interpret the sign of the phase angle.

**P3 (🔴)** A mission departs LEO ($r_p = 6678$ km) for Jupiter, requiring $v_\infty = 8.8$ km/s. Compute $C_3$, the departure burn, and the eccentricity of the departure hyperbola. Compare the burn with the Mars case and comment on why Jupiter is so much more expensive.

<details>
<summary>Solutions</summary>

**P1** Venus is *inner*, so the transfer ellipse has aphelion at Earth and perihelion at Venus:

$$a_t = \frac{1.496\times10^8 + 1.082\times10^8}{2} = 1.289\times10^8\ \mathrm{km}.$$

$$v_{c,\oplus} = 29.784\ \mathrm{km/s}, \qquad v_{c,\rm Ven} = \sqrt{\frac{1.327\times10^{11}}{1.082\times10^8}} = 35.021\ \mathrm{km/s}.$$

At Earth (aphelion of the transfer):

$$v_{t,a} = \sqrt{1.327\times10^{11}\left(\frac{2}{1.496\times10^8}-\frac{1}{1.289\times10^8}\right)} = \sqrt{1.327\times10^{11}(1.33690\times10^{-8}-7.75795\times10^{-9})} = 27.288\ \mathrm{km/s}.$$

At Venus (perihelion):

$$v_{t,p} = \sqrt{1.327\times10^{11}\left(\frac{2}{1.082\times10^8}-7.75795\times10^{-9}\right)} = \sqrt{1.327\times10^{11}(1.84843\times10^{-8}-7.75795\times10^{-9})} = 37.729\ \mathrm{km/s}.$$

$$v_{\infty,\rm dep} = |27.288 - 29.784| = 2.496\ \mathrm{km/s}, \qquad v_{\infty,\rm arr} = |37.729-35.021| = 2.708\ \mathrm{km/s}.$$

$$t_{12} = \pi\sqrt{\frac{(1.289\times10^8)^3}{1.327\times10^{11}}} = \pi\sqrt{1.61336\times10^{13}} = \pi(4.0167\times10^{6}) = 1.2619\times10^{7}\ \mathrm{s} = 146.1\ \mathrm{days}.$$

*Check.* Departing for an inner planet you must **slow down** relative to Earth (the transfer's aphelion speed 27.29 is less than Earth's 29.78) ✓, so the burn is retrograde relative to Earth's motion — but $v_\infty$ is a magnitude, so it's still positive. And 146 days is much shorter than Mars's 259 ✓, since the transfer ellipse is smaller.

**P2** Venus's mean motion is $n_V = 360^\circ/224.7\ \mathrm d = 1.6021\ \mathrm{deg/d}$, so during the 146.1-day flight Venus sweeps

$$n_Vt_{12} = 1.6021\times146.1 = 234.1^\circ.$$

$$\phi_0 = 180^\circ - 234.1^\circ = -54.1^\circ.$$

**The negative sign means Venus must be $54.1^\circ$ *behind* Earth at launch.** That's the correct geometry: Venus moves faster than Earth (35.0 versus 29.8 km/s), so it laps around and gets ahead during the transit. Starting behind, it overtakes and reaches the rendezvous point just as the spacecraft arrives on the opposite side of the Sun.

Synodic period:

$$T_{\rm syn} = \left|\frac{1}{224.7} - \frac{1}{365.25}\right|^{-1} = \left|4.4504\times10^{-3} - 2.7378\times10^{-3}\right|^{-1} = \frac{1}{1.7126\times10^{-3}} = 584\ \mathrm{days}.$$

*Check.* 584 days $= 1.6$ years — the well-known Venus synodic period, shorter than Mars's 780 days because Venus's orbital rate differs more from Earth's ✓.

**P3**

$$C_3 = v_\infty^2 = 8.8^2 = 77.4\ \mathrm{km^2/s^2}.$$

$$v_p = \sqrt{v_\infty^2 + \frac{2\mu_\oplus}{r_p}} = \sqrt{77.44 + \frac{797{,}200}{6678}} = \sqrt{77.44 + 119.38} = \sqrt{196.82} = 14.029\ \mathrm{km/s}.$$

$$\Delta v_{\rm dep} = 14.029 - 7.726 = 6.303\ \mathrm{km/s}.$$

For the eccentricity, use $a = -\mu_\oplus/v_\infty^2 = -398{,}600/77.44 = -5147.7$ km, then

$$e = 1 - \frac{r_p}{a} = 1 - \frac{6678}{-5147.7} = 1 + 1.2973 = 2.297.$$

**Comparison and why.** Mars costs 3.590 km/s; Jupiter costs 6.303 — a difference of 2.71 km/s, which through the rocket equation ($v_e = 4.4$ km/s) means a mass ratio $e^{2.71/4.4} = 1.86$, so roughly **half the payload** for the same launcher.

The reason is the quadrature that helped so much for Mars. At $v_\infty = 2.94$, $v_\infty^2 = 8.7$ was negligible against $v_{\rm esc}^2 = 119.4$, so the marginal cost was tiny. At $v_\infty = 8.8$, $v_\infty^2 = 77.4$ is comparable to $119.4$, and the Oberth discount largely evaporates. **The Oberth effect is a discount on small excesses, not on large ones.** Beyond a certain $v_\infty$ every additional km/s costs nearly its full price — which is exactly why outer-planet missions use gravity assists ([4.3](04-03-gravity-assists.md)) instead of brute force. Galileo reached Jupiter on a $C_3$ of about 12, not 77, by flying Venus-Earth-Earth first.

*Check.* $e = 2.297 > 1$ ✓ hyperbolic, and much more so than Mars's departure hyperbola ($e = 1.145$) ✓ — a faster departure is a flatter, straighter hyperbola.

</details>

## Flashback

**From Lesson 3.2 (Hohmann transfers):** A Hohmann transfer runs between circular orbits of radii $1.496\times10^8$ km and $7.783\times10^8$ km about the Sun ($\mu_\odot = 1.327\times10^{11}\ \mathrm{km^3/s^2}$). Find the transfer time in years.

<details>
<summary>Solution</summary>

$$a_t = \frac{1.496\times10^8 + 7.783\times10^8}{2} = 4.6395\times10^8\ \mathrm{km}.$$

$$t_{12} = \pi\sqrt{\frac{a_t^3}{\mu_\odot}} = \pi\sqrt{\frac{(4.6395\times10^8)^3}{1.327\times10^{11}}} = \pi\sqrt{\frac{9.9862\times10^{25}}{1.327\times10^{11}}} = \pi\sqrt{7.5254\times10^{14}}$$
$$= \pi(2.7433\times10^7) = 8.618\times10^7\ \mathrm{s} = 997\ \mathrm{days} = 2.73\ \mathrm{years}.$$

*Check.* These are Earth's and Jupiter's orbital radii, so this is the minimum-energy Earth-to-Jupiter flight time. Kepler's third law gives it another way: $a_t = 3.10$ AU, so the full transfer period is $3.10^{1.5} = 5.46$ years and half of that is 2.73 years ✓. For comparison, Galileo's gravity-assist route took 6.2 years — the delta-v savings of [4.3](04-03-gravity-assists.md) are paid for in time. ✓

</details>

## Connections

- **Backward:** the heliocentric leg is [3.2](03-02-hohmann-transfers.md)'s Hohmann transfer with the Sun as primary; the patching and the $v_\infty$ bookkeeping are [4.1](04-01-sphere-of-influence-patched-conics.md)'s; the quadrature that makes departure cheap is [1.4](01-04-energy-vis-viva-orbit-types.md)'s hyperbolic energy relation.
- **Forward:** [4.3](04-03-gravity-assists.md) shows how to change $v_\infty$ without propellant, which is the only affordable route to the outer planets given P3's arithmetic.
- **Sideways (systems engineering):** the $C_3$-versus-payload curve is the interface between astrodynamics and launch-vehicle design, and the 26-month window is why planetary programs are budgeted and scheduled around opportunities rather than around fiscal years — a slip of a few weeks can cost two years.

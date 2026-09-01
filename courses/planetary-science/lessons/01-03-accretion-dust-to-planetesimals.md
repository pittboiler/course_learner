# Planetary Science · Lesson 1.3: Accretion — dust to planetesimals

> ⏱ ~15 min · Module 1: Solar-system formation · Builds on: [1.1](01-01-protoplanetary-disk.md), [1.2](01-02-condensation-frost-line.md) · Unlocks: [1.4](01-04-giant-planets-migration.md), [2.1](02-01-differentiation-interior-structure.md), [2.4](02-04-impact-cratering-chronology.md)

## Why this matters

You have a disk full of micron-sized dust and a deadline of a few million years to turn it into planets. The size gap you have to cross is fourteen orders of magnitude. Nature clearly manages it, and yet for thirty years the standard model of how it happens has had a hole in the middle of it that nobody could patch: **at roughly one metre, growth stops working and the material is destroyed or lost.**

This is the most interesting unsolved-then-solved problem in planet formation, and it repays study for a reason beyond planets. The failure is not a modelling detail — it is two independent physical effects that both peak at the same size, for related reasons, and the resolution required abandoning the assumption that growth is pairwise at all.

## The idea

**Stage one is easy: dust sticks.** Micron grains in a gas collide gently, at millimetres per second, and van der Waals forces are more than enough to hold them together. They build fluffy fractal aggregates, which compact as they grow. This works reliably up to about a millimetre, and we see the product: chondrules and matrix grains in primitive meteorites are exactly this size.

**Stage three is also easy: gravity takes over.** Once a body is a kilometre or so across, its own gravity both holds it together against collisions and *pulls in* material that would otherwise have missed — the bigger you are, the more you sweep up, so the big get bigger faster. That runaway is fast and robust.

**Stage two, in between, is where everything fails, and it fails twice over.**

*Failure one: collisions get violent.* Relative velocities between particles come from turbulence in the gas and grow with particle size. Small grains are glued to the gas and move with it, so they meet each other gently. Metre-sized boulders are decoupled enough to move differently from the gas and from each other, and they meet at tens of metres per second. Rock stops sticking above about 1 m/s; ice manages perhaps 10 m/s. So collisions in the middle of the size range shatter rather than build.

*Failure two: boulders fall into the star.* The gas in a disk is partly supported by its own pressure gradient, so it orbits slightly slower than a solid body at the same radius would. A solid body therefore feels a permanent headwind, loses angular momentum, and spirals inward. The drag is negligible for dust (it just moves with the gas) and negligible for a mountain (too much inertia) — but it is catastrophic for exactly the metre-scale bodies in between. **A boulder at 1 AU spirals into the Sun in about a hundred years.**

**Both problems peak at the same size because they have the same cause:** metre-sized objects are the ones that couple to the gas on precisely the orbital timescale, and that is the worst possible coupling. Physics has a name for it — the Stokes number, the ratio of a particle's drag stopping time to the orbital time, is $\sim1$ there.

**The resolution is to skip the middle entirely.** Solid particles settling toward the midplane and drifting inward are dense enough to push back on the gas, which slows the gas's headwind locally, which slows the drift of particles in that spot, which lets more particles pile up there. That positive feedback — the **streaming instability** — concentrates pebbles into dense clumps that exceed their own gravitational binding threshold and collapse directly into bodies 10–100 km across. **Nothing ever has to be one metre across.** Growth goes from centimetre pebbles to hundred-kilometre planetesimals in one gravitationally-driven step, and the asteroid belt's size distribution, which peaks near 100 km, is the fossil evidence.

## The formal version

**Stokes number.** For a particle of radius $s$ and internal density $\rho_s$ in gas of density $\rho_g$ with mean thermal speed $v_{\text{th}}$, the drag stopping time is $t_s = \rho_s s/(\rho_g v_{\text{th}})$, and

$$\mathrm{St} = t_s\,\Omega = \frac{\rho_s s\,\Omega}{\rho_g v_{\text{th}}}.$$

*In words: how many orbits it takes the gas to change the particle's velocity.* $\mathrm{St}\ll1$ means glued to the gas; $\mathrm{St}\gg1$ means the gas is irrelevant; $\mathrm{St}\approx1$ is the danger zone. At 1 AU in the minimum-mass nebula, $\mathrm{St} = 1$ at $s \approx 11$ m.

**Turbulent collision speeds.** For $\mathrm{St}<1$ in turbulence of strength $\alpha$,

$$\Delta v \approx \sqrt{3\alpha\,\mathrm{St}}\ c_s,$$

with $c_s$ the sound speed. With $\alpha = 10^{-3}$ and $c_s \approx 990\ \mathrm{m\,s^{-1}}$, this passes the 1 m/s rock-sticking threshold at $s\approx2$ mm and the 10 m/s ice threshold at $s\approx0.3$ m.

**Radial drift.** The gas orbits sub-Keplerian by a fraction $\eta$, where

$$\eta = -\frac{1}{2}\left(\frac{c_s}{v_K}\right)^2\frac{d\ln P}{d\ln r} \approx 1.5\times10^{-3}\ \text{at 1 AU},$$

giving a headwind $\eta v_K \approx 45\ \mathrm{m\,s^{-1}}$. The particle's inward drift speed is

$$\boxed{\ v_{\text{drift}} = \frac{2\eta v_K\,\mathrm{St}}{1+\mathrm{St}^2}\ }$$

*In words: drift is slow for dust, slow for big bodies, and fastest — equal to $\eta v_K$ — right at $\mathrm{St}=1$.* The corresponding survival time at 1 AU is

$$t_{\text{drift}} = \frac{r}{\eta v_K} = \frac{1.496\times10^{11}}{45.3} = 3.3\times10^{9}\ \mathrm{s} \approx 105\ \mathrm{yr}.$$

Against a disk lifetime of a few million years, that is instantaneous.

**Gravitational focusing.** Once bodies are large enough for their own gravity to matter, the collision cross-section is not the geometric $\pi R^2$ but

$$\sigma = \pi R^2\left(1 + \frac{v_{\text{esc}}^2}{v_{\text{rel}}^2}\right) \equiv \pi R^2 F_g,$$

*In words: a body pulls in projectiles that were never aimed at it, and the slower the encounter the more it gains.* Since $v_{\text{esc}}\propto R$, $F_g$ grows as $R^2$ when $v_{\text{esc}}\gg v_{\text{rel}}$, so

$$\frac{dM}{dt} \propto \sigma \propto R^4 \propto M^{4/3}.$$

That superlinear exponent is **runaway growth**: the largest body in a region pulls away from the pack.

**Oligarchic growth and the isolation mass.** Runaway ends when the growing body's own gravity stirs its neighbourhood, raising $v_{\text{rel}}$, collapsing $F_g$ and slowing growth to $dM/dt\propto M^{2/3}$. Growth finally stops when the body has consumed everything within its feeding zone, taken as $\pm b\,R_H$ with $b\approx5$ and $R_H = a(M/3M_\odot)^{1/3}$. Setting $M = 2\pi a\,(2bR_H)\,\Sigma_{\text{solid}}$ and solving:

$$M_{\text{iso}} = \left(\frac{4\pi b\,a^2\Sigma_{\text{solid}}}{(3M_\odot)^{1/3}}\right)^{3/2}.$$

| Location | $\Sigma_{\text{solid}}$ | $M_{\text{iso}}$ |
|---|---|---|
| 1 AU (inside the frost line) | $7.1\ \mathrm{g\,cm^{-2}}$ | $0.07\,M_\oplus$ — a Mars-sized embryo |
| 5.2 AU (outside it) | $2.5\ \mathrm{g\,cm^{-2}}$ | $2.0\,M_\oplus$ |

*In words: local accretion alone never builds a planet inside the frost line — it builds dozens of Moon-to-Mars-sized embryos, which then have to collide with each other over the next 100 Myr.* Outside the frost line it builds a couple of Earth masses in one go, which is why giant-planet cores are possible there and only there.

## Picture

![Upper panel, a log-log plot of collision speed in metres per second against particle radius from one micron to one kilometre. A blue curve labelled turbulent relative speed rises steadily with size. Two horizontal dashed lines mark the speeds above which rock stops sticking at 1 metre per second and ice stops sticking at 10 metres per second. A shaded coral band covering roughly two millimetres to twenty metres is labelled fragmentation, collisions shatter rather than stick. Lower panel, a log-log plot of the time for a particle to drift into the Sun, in years, against the same size axis. The curve dips to a sharp minimum of about one hundred years at a radius near eleven metres, marked with a dot, and a dashed horizontal line marks the few-million-year disk lifetime far above it](assets/01-03-fig1.svg)

The two panels are the two failures, and their minima line up. That coincidence is the meter barrier.

## Worked examples

**Example 1 (mechanical — how much focusing buys you).** A 500 km planetesimal of density $3000\ \mathrm{kg\,m^{-3}}$ sweeps up smaller bodies. Compare its accretion rate when random velocities are $50\ \mathrm{m\,s^{-1}}$ with when they are $500\ \mathrm{m\,s^{-1}}$.

$$M = \tfrac43\pi R^3\rho = \tfrac43\pi(5\times10^{5})^3\times3000 = 1.571\times10^{21}\ \mathrm{kg},$$
$$v_{\text{esc}} = \sqrt{\frac{2GM}{R}} = \sqrt{\frac{2\times6.674\times10^{-11}\times1.571\times10^{21}}{5\times10^{5}}} = \sqrt{4.194\times10^{5}} = 648\ \mathrm{m\,s^{-1}}.$$

$$F_g(50) = 1 + \left(\frac{648}{50}\right)^2 = 1 + 168 = 169, \qquad F_g(500) = 1 + \left(\frac{648}{500}\right)^2 = 2.68.$$

**A factor of 63 in growth rate, from a factor of 10 in stirring.** This is why runaway growth is so sensitive to dynamical temperature, and why it shuts off the moment the growing body starts stirring its own neighbourhood: growth is self-limiting through the velocity dispersion, not through running out of material.

**Example 2 (why you'd care — can Earth be built locally?).** Earth is $1\,M_\oplus$. The isolation mass at 1 AU is $0.07\,M_\oplus$. What does that imply?

It implies **Earth cannot have formed where it is by local accretion**. Oligarchic growth at 1 AU terminates with a swarm of roughly $0.07\,M_\oplus$ embryos — Mars is $0.107\,M_\oplus$, and on this picture Mars is not a failed planet but a *surviving embryo*, the only one left at its orbit. Building Earth requires collecting on the order of $1/0.07 \approx 14$ such embryos.

That merging happens by mutual gravitational scattering after the gas is gone, on a timescale set by how long it takes orbits to cross, which is 30–100 Myr. Two independent checks confirm it:

- The **Hf–W isotopic clock** ([1.5](01-05-meteorites-isotopic-clocks.md)) dates Earth's core formation — hence its last giant impacts — to 30–50 Myr after the solar system's start, not 3 Myr.
- The **Moon** ([2.7](02-07-moon-earth-moon-system.md)) is the direct product of the last of these collisions.

So the isolation mass is not an inconvenient technicality. It predicts that terrestrial planets are assembled violently, late, and out of order — and the evidence says they were.

## Watch out

- **You might think the meter barrier is about strength — that a boulder is too weak to survive a collision — but the drift half of the problem has nothing to do with collisions at all.** Even a perfectly indestructible metre-sized rock is lost, because it spirals into the star in a century. A proposed solution must beat both failures, which is why "make the collisions gentler" was never enough.
- **You might think gravitational focusing means bigger is always better, but $F_g$ depends on $v_{\text{rel}}$ just as strongly as on size** — and the growing body itself raises $v_{\text{rel}}$. Runaway growth contains the seed of its own termination; that transition is what "oligarchic" names.
- **You might think the streaming instability just makes clumps that then accrete normally, but the collapse is direct and gravitational.** It converts pebbles into 10–100 km bodies without passing through the intermediate sizes at all. The claim is specifically that the intermediate sizes are *skipped*, and the observed size distribution of asteroids and Kuiper belt objects — which turns over near 100 km rather than continuing to rise toward small sizes — is the fossil record of that.

## One-liner

> Growth from dust to planetesimals fails at one metre twice over, so nature does not go through one metre — pebbles collapse straight to hundred-kilometre bodies.

## Problems

**P1 (🟢)** At 5.2 AU the gas surface density is $140\ \mathrm{g\,cm^{-2}}$, $c_s = 430\ \mathrm{m\,s^{-1}}$ and $v_K = 13.1\ \mathrm{km\,s^{-1}}$. Take $|d\ln P/d\ln r| = 2.75$. (a) Compute $\eta$. (b) Compute the headwind speed in m/s. (c) Compute the shortest possible drift time to the Sun from 5.2 AU, in years, and compare it with the disk lifetime.

**P2 (🟡)** A protoplanet of radius $R$ and density $3000\ \mathrm{kg\,m^{-3}}$ grows in a swarm with random velocity $v_{\text{rel}} = 100\ \mathrm{m\,s^{-1}}$. (a) At what radius does gravitational focusing double the geometric cross-section? (b) At what radius is $F_g = 100$? (c) Explain in one sentence why the answers say runaway growth has a threshold size rather than starting immediately.

**P3 (🔴, optional)** Beyond the frost line at 5.2 AU, $\Sigma_{\text{solid}} = 2.5\ \mathrm{g\,cm^{-2}}$, and the isolation mass computed in the lesson is $2.0\,M_\oplus$. Suppose instead the disk were three times more massive than the minimum-mass nebula, so $\Sigma_{\text{solid}} = 7.5\ \mathrm{g\,cm^{-2}}$. (a) Compute the new isolation mass. (b) Gas-giant formation requires a core of about $10\,M_\oplus$ before the disk disperses. Does the heavier disk get there by isolation alone? (c) State what this tells you about how tightly gas-giant formation is tuned.

<details>
<summary>Solutions</summary>

**P1** (a) $$\eta = \frac{1}{2}\left(\frac{c_s}{v_K}\right)^2\left|\frac{d\ln P}{d\ln r}\right| = \frac12\left(\frac{430}{13{,}100}\right)^2\times2.75 = \frac12(3.282\times10^{-2})^2\times2.75.$$
$$\eta = \frac12\times1.077\times10^{-3}\times2.75 = 1.481\times10^{-3}.$$

(b) $$\eta v_K = 1.481\times10^{-3}\times13{,}100 = 19.4\ \mathrm{m\,s^{-1}}.$$

(c) Maximum drift speed is $\eta v_K$, at $\mathrm{St}=1$:

$$t = \frac{r}{\eta v_K} = \frac{5.2\times1.496\times10^{11}}{19.4} = \frac{7.779\times10^{11}}{19.4} = 4.01\times10^{10}\ \mathrm{s} = 1270\ \mathrm{yr}.$$

Still catastrophically short — about $10^{-3}$ of the disk lifetime. The headwind is weaker out here and the distance to fall is longer, so the drift time is ten times the 1 AU value, but the conclusion is unchanged: **the barrier is not a local problem of the inner disk.** It applies everywhere, which is part of why the resolution had to be a general mechanism rather than a special circumstance.

**P2** (a) $F_g = 2$ requires $v_{\text{esc}} = v_{\text{rel}} = 100\ \mathrm{m\,s^{-1}}$. With $v_{\text{esc}}^2 = 2GM/R = \frac{8}{3}\pi G\rho R^2$:

$$R = v_{\text{esc}}\sqrt{\frac{3}{8\pi G\rho}} = 100\sqrt{\frac{3}{8\pi\times6.674\times10^{-11}\times3000}} = 100\sqrt{\frac{3}{5.033\times10^{-6}}}.$$

$$R = 100\times\sqrt{5.961\times10^{5}} = 100\times772.1 = 7.72\times10^{4}\ \mathrm{m} = 77\ \mathrm{km}.$$

(b) $F_g = 100$ needs $v_{\text{esc}} = \sqrt{99}\times100 = 995\ \mathrm{m\,s^{-1}}$, and $R\propto v_{\text{esc}}$:

$$R = 77\ \mathrm{km}\times\frac{995}{100} = 768\ \mathrm{km}.$$

(c) Focusing is negligible until the body's escape speed reaches the swarm's random velocity, so **runaway growth cannot begin until some body has already reached roughly 100 km by other means** — which is exactly the size the streaming instability delivers, and exactly why that mechanism closes the gap rather than merely narrowing it.

**P3** (a) $M_{\text{iso}} \propto \Sigma^{3/2}$, so tripling $\Sigma$ multiplies $M_{\text{iso}}$ by $3^{3/2} = 5.196$:

$$M_{\text{iso}} = 2.0\times5.196 = 10.4\,M_\oplus.$$

(b) Yes — just barely. A disk three times the minimum mass reaches the $10\,M_\oplus$ core threshold by isolation alone at 5.2 AU.

(c) The tuning is uncomfortably tight in one respect and reassuringly loose in another, and it is worth being precise about which.

**Tight:** the required enhancement is a factor of about 3 in solid surface density, and $M_{\text{iso}}\propto\Sigma^{3/2}$ means the answer is quite sensitive to it — a minimum-mass disk gives $2\,M_\oplus$, five times short, while a $5\times$ disk gives $22\,M_\oplus$, comfortably over. So whether a given disk makes a gas giant at 5 AU turns on a factor of a few in a quantity we cannot measure directly for the solar nebula.

**Loose:** the dependence on *location* is much stronger than the dependence on disk mass, because $M_{\text{iso}} \propto (a^2\Sigma)^{3/2}$ and $\Sigma\propto a^{-3/2}$ give $M_{\text{iso}}\propto a^{3/4}$ — and on top of that the factor-4.2 step at the frost line ([1.2](01-02-condensation-frost-line.md)) enters as $4.2^{3/2} = 8.6$. **The frost line multiplies the isolation mass by nearly nine at a stroke.** So the robust prediction is not "giant planets are rare" but "giant planets form just outside the frost line, or not at all" — and the marginality in (a) is then the reason gas-giant occurrence rates around Sun-like stars come out at a few tens of percent rather than at zero or at one. [6.2](06-02-demographics-selection-effects.md) measures that number.

</details>

## Flashback

**From Lesson 1.2 (Condensation and the frost line):** A young star has luminosity $L = 0.25\,L_\odot$. (a) Write its equilibrium-temperature profile $T(r)$. (b) Locate its frost line at $T = 150$ K. (c) The star's disk has the same $\Sigma_{\text{solid}}$ coefficients as the solar nebula (7.1 inside, 30 outside, in $\mathrm{g\,cm^{-2}}$ at 1 AU, scaling as $r^{-3/2}$). Compute the solid surface density just inside and just outside this star's frost line, and compare both with the values at the Sun's 3.4 AU frost line.

<details>
<summary>Solution</summary>

(a) $$T = 278\,(0.25)^{1/4}r^{-1/2} = 278\times0.7071\times r^{-1/2} = 197\,r^{-1/2}\ \mathrm{K}.$$

(b) $$r^{1/2} = \frac{197}{150} = 1.3133 \;\Rightarrow\; r_{\text{frost}} = 1.72\ \mathrm{AU}.$$

The frost line scales as $\sqrt{L}$, so quartering the luminosity halves it — from 3.4 AU to 1.7 AU.

(c) At $r = 1.72$ AU, $r^{-3/2} = 1.72^{-1.5} = 0.4432$:

$$\Sigma_{\text{in}} = 7.1\times0.4432 = 3.15\ \mathrm{g\,cm^{-2}}, \qquad \Sigma_{\text{out}} = 30\times0.4432 = 13.3\ \mathrm{g\,cm^{-2}}.$$

At the Sun's frost line, $3.4^{-1.5} = 0.1595$:

$$\Sigma_{\text{in}} = 1.13\ \mathrm{g\,cm^{-2}}, \qquad \Sigma_{\text{out}} = 4.79\ \mathrm{g\,cm^{-2}}.$$

**The low-luminosity star has nearly three times more solid material at its frost line**, because the frost line moved inward to where the disk is denser and $\Sigma\propto r^{-3/2}$ rises faster than the luminosity falls. That is a real and much-discussed effect: it is one of the arguments for why low-mass stars efficiently make planets close in, and it connects directly to the high occurrence rate of compact planetary systems around M dwarfs measured in [6.2](06-02-demographics-selection-effects.md).

</details>

## Connections

- **Backward:** [1.2](01-02-condensation-frost-line.md) supplied $\Sigma_{\text{solid}}$ and its step at the frost line, which is what the isolation-mass formula eats; [1.1](01-01-protoplanetary-disk.md) supplied the disk lifetime that everything here is racing.
- **Forward:** [1.4](01-04-giant-planets-migration.md) takes the $2\,M_\oplus$ core from beyond the frost line and asks whether it can reach 10 before the gas goes; [2.4](02-04-impact-cratering-chronology.md) uses the leftover planetesimals as the impactors that crater every surface in the solar system; [5.5](05-05-asteroids-comets-kuiper-belt.md) studies the ones that never got swept up.
- **Sideways:** the runaway-then-oligarchic transition — superlinear growth that generates the very stirring that terminates it — is the same self-limiting-feedback structure as preferential attachment in network growth and as competitive exclusion in [`evolution-ecology`](../../evolution-ecology/syllabus.md). The drag physics is Stokes and Epstein flow from [`fluid-dynamics`](../../fluid-dynamics/syllabus.md), applied at Knudsen numbers where the continuum description fails.

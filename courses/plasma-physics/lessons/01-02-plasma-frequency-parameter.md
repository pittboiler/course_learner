# Plasma Physics · Lesson 1.2: Plasma frequency & the plasma parameter

> ⏱ ~15 min · Module 1: Plasma basics & single-particle motion · Builds on: [1.1 What is a plasma? Quasineutrality & Debye shielding](01-01-what-is-a-plasma-debye.md), [`mechanics-refresher` 3.1 (SHM)](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) · Unlocks: [1.3 Gyration & the E×B drift](01-03-gyration-exb-drift.md)

## Why this matters

Lesson 1.1 gave you one length — the Debye length $\lambda_D$, how far a plasma can hide a charge. This lesson gives you the other two numbers that pin down *any* plasma: a **frequency** (how fast it responds) and a **dimensionless count** (how ideal it is). Together, $\lambda_D$, the plasma frequency $\omega_p$, and the plasma parameter $\Lambda$ are the first thing a plasma physicist computes for a new system, before writing a single equation of motion. They also let you finally *test* whether a gas of charges deserves the name "plasma" at all — the three plasma criteria at the end. And one of them explains, cleanly, why your AM radio can hear a station over the horizon at night but your GPS signal punches straight through the sky.

## The idea

Push on a plasma and it pushes back — fast. Grab all the electrons in a slab and shove them sideways a little, leaving the heavy ions behind. Now one edge of the slab has bare positive ions and the other has piled-up electrons: two sheets of opposite charge, exactly like a charged capacitor. That capacitor's field points back through the electrons and *pulls them home*. But they overshoot (they have inertia), stream past equilibrium, build the opposite field, and get yanked back again — a spring with no spring, made entirely of electrostatics. The electrons **oscillate**, and the tempo of that oscillation is the **plasma frequency** $\omega_p$. It is the plasma's natural ring, the note it hums whenever you disturb it.

The second number answers a different question: *is this collection of charges even behaving collectively?* Debye shielding (1.1) only works if there are lots of particles inside a Debye sphere to do the shielding — one lonely electron can't screen anything. Count them: the **plasma parameter** $\Lambda = n\lambda_D^3$ is (roughly) the number of particles in a Debye sphere. When $\Lambda$ is huge, each particle feels the gentle *average* field of thousands of neighbors rather than the hard kick of any single one — collective, fluid-like, "ideal" behavior. When $\Lambda$ drops toward 1, particles feel each other individually, like a liquid or even a crystal. Big $\Lambda$ is the ordinary plasma; small $\Lambda$ is the exotic, strongly-coupled kind.

## The formal version

**Plasma oscillation → the plasma frequency.** Displace the electron slab (density $n$, in $\mathrm{m^{-3}}$; charge magnitude $e$) by a small distance $x$ relative to the fixed ions. The vacated column exposes a surface charge per area $\sigma = n e x$. Two such sheets make a uniform field (Gauss's law, [`em-refresher`](../../em-refresher/syllabus.md)):

$$E = \frac{\sigma}{\varepsilon_0} = \frac{n e\, x}{\varepsilon_0},$$

where $\varepsilon_0$ is the permittivity of free space. *In words: the further you push, the bigger the restoring field — a linear restoring force, the one ingredient SHM needs.* Newton's second law for an electron of mass $m_e$, with force $-eE$:

$$m_e \ddot x = -eE = -\frac{n e^2}{\varepsilon_0}\, x \qquad\Longrightarrow\qquad \ddot x + \omega_p^2\, x = 0,$$

which is *exactly* the SHM equation $\ddot x + \omega^2 x = 0$ from [`mechanics-refresher` 3.1](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md), read off with

$$\boxed{\ \omega_p = \sqrt{\dfrac{n e^2}{\varepsilon_0 m_e}}\ }$$

the **(electron) plasma frequency** (rad/s). *In words: pull the electrons aside and they slosh back at $\omega_p$ — the plasma's natural ring.* The ions oscillate too, but with $m_i \gg m_e$ their frequency $\omega_{pi} = \omega_p\sqrt{m_e/m_i}$ is far lower, so "the" plasma frequency means the electron one unless said otherwise.

**The numbers.** Plugging in $e$, $\varepsilon_0$, $m_e$ and switching to the density in $\mathrm{cm^{-3}}$ (the working unit in plasma physics):

$$\omega_p \approx 5.64\times10^{4}\,\sqrt{n\,[\mathrm{cm^{-3}}]}\ \ \mathrm{rad/s}, \qquad f_p = \frac{\omega_p}{2\pi} \approx 8.98\times10^{3}\,\sqrt{n\,[\mathrm{cm^{-3}}]}\ \ \mathrm{Hz}.$$

*In words: $f_p$ in kilohertz is about $9\sqrt{n[\mathrm{cm^{-3}}]}$.* Lab plasmas ($n\sim10^{12}\ \mathrm{cm^{-3}}$) ring at $f_p\sim$ GHz. This is why a plasma is a mirror below $f_p$ and a window above it: an electromagnetic wave of frequency $f$ can only pass if the electrons can't keep up, i.e. $f > f_p$; for $f < f_p$ the electrons respond fast enough to cancel the wave and it **reflects**. The ionosphere ($f_p\sim$ a few to $\sim$10 MHz) bounces AM radio (near 1 MHz, below cutoff) back down over the horizon but passes FM, TV, and GPS (all $\gg f_p$) straight out to space.

**One scale ties to the other.** Using $\lambda_D = \sqrt{\varepsilon_0 k_B T_e / n e^2}$ from 1.1 and the electron thermal speed $v_{th} \equiv \sqrt{k_B T_e / m_e}$ (from [`stat-mech`](../../stat-mech/syllabus.md); $k_B$ is Boltzmann's constant, $T_e$ the electron temperature):

$$\frac{v_{th}}{\lambda_D} = \sqrt{\frac{k_B T_e}{m_e}}\cdot\sqrt{\frac{n e^2}{\varepsilon_0 k_B T_e}} = \sqrt{\frac{n e^2}{\varepsilon_0 m_e}} = \omega_p.$$

*In words: a thermal electron crosses one Debye length in one plasma period (up to $2\pi$).* The shielding length and the oscillation time are the same physics wearing two hats.

**The plasma parameter.** Define

$$\Lambda \equiv n\,\lambda_D^3 \approx \text{number of particles in a Debye sphere.}$$

*In words: how many particles are available to do the collective shielding.* (The exact head-count in a sphere carries a geometric factor $\tfrac{4\pi}{3}$; $\Lambda = n\lambda_D^3$ is the standard order-of-magnitude version.) Its size sets the **coupling**:

- $\Lambda \gg 1$ — many particles per Debye sphere → **weakly coupled**. Each particle feels the smooth average field; collective, ideal, "gas-like" behavior dominates over hard binary collisions. This is the usual plasma.
- $\Lambda \lesssim 1$ — few particles → **strongly coupled**. Neighbors kick each other individually; the plasma behaves like a liquid or even freezes into a Coulomb crystal (white-dwarf cores, ultracold plasmas).

**The three plasma criteria.** A gas of charges *is* a plasma only if all three hold, over the system size $L$ and mean collision time $\tau$:

1. $\lambda_D \ll L$ — small-scale shielding leaves the bulk **quasineutral** (from 1.1).
2. $\Lambda = n\lambda_D^3 \gg 1$ — enough particles to shield **collectively**.
3. $\omega_p\,\tau \gg 1$ — plasma oscillations happen many times between collisions, so **collective behavior wins** over collisional randomization.

Criteria 2 and 3 are secretly linked: for a weakly-coupled plasma the collision rate is roughly $\nu \sim \omega_p\,\dfrac{\ln\Lambda}{\Lambda}$, so $\omega_p\tau \sim \Lambda/\ln\Lambda \gg 1$ follows from $\Lambda \gg 1$. Many particles per sphere both shield well *and* collide rarely.

## Picture

![A slab of electrons displaced by x from the fixed ion background, exposing a positive sheet on one side and a negative sheet on the other; the resulting field E points across the slab and the restoring force −eE pushes the electrons back, giving the SHM equation and the plasma frequency](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (the ring — $\omega_p$ and $f_p$).** A laboratory discharge has electron density $n = 10^{12}\ \mathrm{cm^{-3}}$ ($=10^{18}\ \mathrm{m^{-3}}$). Then

$$\omega_p \approx 5.64\times10^4\sqrt{10^{12}} = 5.64\times10^4 \times 10^6 = 5.64\times10^{10}\ \mathrm{rad/s},$$
$$f_p = \frac{\omega_p}{2\pi} \approx 9.0\times10^{9}\ \mathrm{Hz} = 9\ \mathrm{GHz}.$$

A 5 GHz microwave beam ($f < f_p$) would **reflect** off this plasma; a 20 GHz beam ($f > f_p$) would pass through. That cutoff is the working principle of microwave plasma diagnostics: sweep $f$, find where transmission returns, and you've measured $n$.

**Example 2 (the head-count — $\Lambda$ for lab vs. space).** Compare a glow discharge and the solar wind, using $\lambda_D \approx 7.43\times10^{3}\sqrt{T_e[\mathrm{eV}]/n[\mathrm{m^{-3}}]}\ \mathrm{m}$.

*Glow discharge:* $n = 10^{16}\ \mathrm{m^{-3}}$, $T_e = 2\ \mathrm{eV}$.
$$\lambda_D = 7.43\times10^3\sqrt{\tfrac{2}{10^{16}}} \approx 1.05\times10^{-4}\ \mathrm{m}\ (0.1\ \mathrm{mm}), \qquad \Lambda = n\lambda_D^3 \approx 10^{16}(1.05\times10^{-4})^3 \approx 1.2\times10^{4}.$$

*Solar wind at 1 AU:* $n = 5\ \mathrm{cm^{-3}} = 5\times10^{6}\ \mathrm{m^{-3}}$, $T_e = 10\ \mathrm{eV}$.
$$\lambda_D = 7.43\times10^3\sqrt{\tfrac{10}{5\times10^{6}}} \approx 10.5\ \mathrm{m}, \qquad \Lambda = 5\times10^{6}(10.5)^3 \approx 5.8\times10^{9}.$$

Both have $\Lambda \gg 1$, so both are weakly-coupled, ideal plasmas. The punchline: the solar wind is a near-vacuum — a *hundred-billion* times thinner than the lab discharge — yet it is the *more* ideal plasma ($\Lambda \sim 10^{10}$ vs. $10^4$), because its enormous temperature and low density blow the Debye sphere up to $10$ meters, packing billions of particles inside. Ideality is about $\Lambda$, not density.

## Watch out

- **You might think $\omega_p$ depends on temperature.** It doesn't — $\omega_p = \sqrt{ne^2/\varepsilon_0 m_e}$ has no $T$ in it. A *cold* plasma oscillates at exactly the same rate; temperature only enters $\lambda_D$ and $\Lambda$. (Temperature *does* return in Lesson 4.1 as a small correction, the Bohm–Gross term $3k^2\lambda_D^2$, when the oscillation propagates as a wave.)
- **You might think denser means "more of a plasma."** Coupling is set by $\Lambda = n\lambda_D^3$, and $\lambda_D$ shrinks with $n$, so cramming in particles can actually *lower* $\Lambda$ toward the strongly-coupled regime. Example 2 is the cautionary tale.
- **You might read $\Lambda = n\lambda_D^3$ as an exact particle count.** It's the standard order-of-magnitude version; the literal number in a sphere is $\tfrac{4\pi}{3}n\lambda_D^3$. For deciding "$\gg 1$ or not?" the factor is irrelevant — but don't quote it as exact.

## One-liner

> Every plasma has a ring and a head-count: it oscillates at $\omega_p = \sqrt{ne^2/\varepsilon_0 m_e}$ and is ideal only when $\Lambda = n\lambda_D^3 \gg 1$ particles crowd each Debye sphere.

## Problems

**P1 (🟢)** The ionosphere's F-layer has $n \approx 10^{6}\ \mathrm{cm^{-3}}$. Compute its plasma frequency $f_p$. An AM station broadcasts at $1\ \mathrm{MHz}$ and an FM station at $100\ \mathrm{MHz}$: which signal reflects back to the ground, and which escapes to space? (This is why AM carries over the horizon at night but FM doesn't.)

**P2 (🟡)** A tokamak core has $n = 10^{20}\ \mathrm{m^{-3}}$ and $T_e = 10\ \mathrm{keV}$. Using $\lambda_D \approx 7.43\times10^3\sqrt{T_e[\mathrm{eV}]/n[\mathrm{m^{-3}}]}\ \mathrm{m}$, find $\lambda_D$ and the plasma parameter $\Lambda = n\lambda_D^3$. Is it weakly or strongly coupled?

**P3 (🔴, optional)** An ultracold neutral plasma has $n = 2\times10^{15}\ \mathrm{m^{-3}}$ at $T_e = 1\ \mathrm{K}$. (a) Convert $T_e$ to eV and find $\lambda_D$ and $\Lambda$ — what coupling regime is this? (b) Separately, verify the identity $\omega_p = v_{th}/\lambda_D$ by showing algebraically that the definitions of $\omega_p$, $v_{th}=\sqrt{k_B T_e/m_e}$, and $\lambda_D$ force it, for *any* $n$ and $T_e$.

<details>
<summary>Solutions</summary>

**P1** With $n = 10^6\ \mathrm{cm^{-3}}$,
$$f_p \approx 8.98\times10^3\sqrt{10^6} = 8.98\times10^3 \times 10^3 \approx 9\times10^{6}\ \mathrm{Hz} = 9\ \mathrm{MHz}.$$
The AM signal at $1\ \mathrm{MHz} < f_p$ → **reflects** (bounces back down, carrying over the horizon). The FM signal at $100\ \mathrm{MHz} > f_p$ → **passes through** and escapes to space.

*Check.* Order of magnitude: ionospheric "critical frequencies" are quoted at a few–10 MHz, matching. The rule $f<f_p$ reflect / $f>f_p$ transmit is the whole point — AM below, FM above the $\sim$9 MHz cutoff. ✓

**P2** In eV, $T_e = 10\ \mathrm{keV} = 10^4\ \mathrm{eV}$.
$$\lambda_D = 7.43\times10^3\sqrt{\frac{10^4}{10^{20}}} = 7.43\times10^3\sqrt{10^{-16}} = 7.43\times10^3\times10^{-8} = 7.43\times10^{-5}\ \mathrm{m}\ (74\ \mu\mathrm{m}).$$
$$\Lambda = n\lambda_D^3 = 10^{20}\,(7.43\times10^{-5})^3 = 10^{20}\times4.1\times10^{-13} \approx 4.1\times10^{7}.$$
$\Lambda \approx 4\times10^7 \gg 1$, so the fusion core is **weakly coupled** — an ideal plasma, despite its density, because 10 keV is blazingly hot.

*Check.* Units: $\lambda_D$ from $\sqrt{\mathrm{eV}/\mathrm{m^{-3}}}$ with the tabulated coefficient gives meters ✓; $\Lambda = (\mathrm{m^{-3}})(\mathrm{m})^3$ is dimensionless ✓. A fusion plasma had better be weakly coupled, or MHD and kinetic theory (Modules 2–3) wouldn't apply. ✓

**P3** (a) $T_e = 1\ \mathrm{K}$: since $1\ \mathrm{eV} \leftrightarrow 11605\ \mathrm{K}$, $T_e = 1/11605 \approx 8.6\times10^{-5}\ \mathrm{eV}$.
$$\lambda_D = 7.43\times10^3\sqrt{\frac{8.6\times10^{-5}}{2\times10^{15}}} = 7.43\times10^3\sqrt{4.3\times10^{-20}} \approx 7.43\times10^3\times2.07\times10^{-10} \approx 1.5\times10^{-6}\ \mathrm{m}.$$
$$\Lambda = n\lambda_D^3 = 2\times10^{15}\,(1.5\times10^{-6})^3 \approx 2\times10^{15}\times3.4\times10^{-18} \approx 7\times10^{-3}.$$
$\Lambda \approx 0.007 \ll 1$: **strongly coupled**. That's exactly why ultracold neutral plasmas are made — to study the liquid/crystal-like regime that ordinary hot plasmas never reach.

(b) Start from the three definitions and multiply:
$$\frac{v_{th}}{\lambda_D} = \frac{\sqrt{k_B T_e/m_e}}{\sqrt{\varepsilon_0 k_B T_e/n e^2}} = \sqrt{\frac{k_B T_e}{m_e}\cdot\frac{n e^2}{\varepsilon_0 k_B T_e}} = \sqrt{\frac{n e^2}{\varepsilon_0 m_e}} = \omega_p.$$
The temperature cancels completely, so the identity holds for any $n$, $T_e$.

*Check.* (a) A metal-vapor plasma laser-cooled to $\sim$1 K sitting near a strongly-coupled state is the known experimental result. (b) Dimensionally $[v/\ell] = \mathrm{s^{-1}}$, matching $[\omega_p]$; and $T_e$ dropping out echoes the "$\omega_p$ has no temperature" warning above. ✓

</details>

## Connections

- **Backward:** this reuses the Debye length $\lambda_D$ from [1.1](01-01-what-is-a-plasma-debye.md) (both inside $\Lambda$ and via $\omega_p = v_{th}/\lambda_D$) and is, structurally, the simple harmonic motion of [`mechanics-refresher` 3.1](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) — a linear restoring force $-(ne^2/\varepsilon_0)x$ giving $\ddot x + \omega_p^2 x = 0$. The thermal speed $v_{th}$ comes from the Maxwellian in [`stat-mech`](../../stat-mech/syllabus.md).
- **Forward:** $\omega_p$ is the *cutoff frequency* of the Langmuir wave in [4.1](../../plasma-physics/syllabus.md) (the cold oscillation here, given a small pressure correction, becomes a propagating wave), and it sets the scale for the entire cold-plasma dielectric and every dispersion relation in Module 4. The plasma criteria justify the collisionless Vlasov equation of Module 2.
- **Sideways:** the "reflect below $f_p$, transmit above" rule governs ionospheric radio propagation and radio astronomy (interstellar plasma sets a low-frequency cutoff on what telescopes can see) — the astrophysical payoff arrives in [5.3–5.4](../../plasma-physics/syllabus.md), and the same electron inertia reappears as electron shielding failing at high frequency.

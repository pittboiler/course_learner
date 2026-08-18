# Nuclear Materials · Lesson 1.2: How radiation deposits energy

> ⏱ ~15 min · Module 1: Structure, defects, and radiation damage · Builds on: [1.1 Crystals and defects refresher](01-01-crystals-defects-refresher.md), [`intro-nuclear-engineering` 2.1 (microscopic cross section)](../../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md) · Unlocks: 1.3 (PKA and displacement cascades)

## Why this matters

A reactor's steel and cladding sit in a flux of radiation for decades and slowly turn into *different* materials — harder, more brittle, swollen. But radiation is not one thing, and it does not damage metal one way. Before you can predict how much a component degrades, you have to answer a prior question: **when a particle hits the metal, where does its energy go?** Some of it just heats the electron sea and does no lasting harm. Some of it knocks atoms clean off their lattice sites — and *that* is the channel that ages the metal. This lesson sorts the two channels, explains why neutrons are the worst offenders, and gives you the one kinematics formula that governs how much energy a single collision can dump into a lattice atom.

## The idea

Picture the energy of an incoming particle draining into the solid through **two separate pipes**.

The first pipe is **ionization** (and electronic excitation): the particle drags on the crystal's cloud of loosely-bound electrons, exciting or stripping them. In a *metal*, that energy just sloshes around the electron gas and thermalizes — it becomes heat, and the atoms stay put. Harmless. (In an *insulator* or a *polymer* the same energy breaks bonds and leaves damage, which is why plastics and oxides degrade under radiation that barely bothers steel — hold that thought for the fuel and fusion modules.)

The second pipe is **atomic displacement**: the particle collides hard enough with a *nucleus* to knock the whole atom off its lattice site, leaving behind an empty site and lodging the atom somewhere it doesn't belong — a **Frenkel pair** (vacancy + interstitial from [1.1](01-01-crystals-defects-refresher.md)). This is the pipe that damages metals. Everything in this course — loops, voids, swelling, embrittlement — grows from displaced atoms.

So the question "how bad is this radiation for my steel?" becomes "how much of its energy goes down the *displacement* pipe?" And that depends entirely on what the particle is. A gamma ray or a fast electron pours almost everything into the ionization pipe (light, charged, interacts with electrons) — gentle on metal. A **neutron** is the opposite: it carries no charge, so it ignores the electron cloud entirely and sails deep into the material untouched — until it happens to smack a nucleus dead-on and hand it a huge kick. Neutrons are the master key of the displacement pipe, and that is why they are the damage probe reactors care about.

## The formal version

**Two collision types.** A collision is **elastic** if kinetic energy is conserved — the projectile bounces and the struck atom recoils, like billiard balls. It is **inelastic** if some energy goes into internal excitation (exciting the nucleus, or ionizing electrons). Displacement damage in metals comes overwhelmingly from **elastic** nuclear scattering: a hard mechanical knock-on.

**Maximum energy transfer.** Take a projectile of mass $M_1$ (in atomic mass units, u) and kinetic energy $E$ (in eV or keV) striking a stationary lattice atom of mass $M_2$ (u). Conserving momentum and kinetic energy in a *head-on* elastic collision, the recoil energy handed to the struck atom is largest and equals

$$T_{\max} = \frac{4 M_1 M_2}{(M_1 + M_2)^2}\, E \;\equiv\; \gamma E,\qquad \gamma \equiv \frac{4 M_1 M_2}{(M_1 + M_2)^2}.$$

*In words: the most energy a single elastic hit can deposit is a fixed fraction $\gamma$ of the projectile's energy, and $\gamma$ depends only on the mass ratio.* Here $T$ is the **transferred (recoil) energy** and $\gamma$ is the dimensionless **energy-transfer efficiency**, $0 \le \gamma \le 1$. It peaks at $\gamma = 1$ when $M_1 = M_2$ (equal masses swap energy perfectly — a head-on billiard shot stops dead) and shrinks when the masses are mismatched.

**Average transfer.** A real collision is rarely head-on; the projectile scatters through some angle. For scattering that is isotropic in the center-of-mass frame (a good approximation for fast neutrons on nuclei), the recoil energy is spread *uniformly* between $0$ and $T_{\max}$, so the average is simply

$$\bar{T} = \tfrac{1}{2}\,T_{\max}.$$

*In words: over many collisions the struck atom picks up, on average, half of the head-on maximum.* This is the number you feed into a damage estimate.

**The displacement threshold (preview of [1.3](01-03-pka-displacement-cascades.md)).** Not every recoil displaces an atom — it must exceed a **displacement threshold energy** $E_d$, typically $\sim 25\text{–}50$ eV in metals (use $E_d \approx 40$ eV for iron). Below $E_d$ the struck atom just wobbles and returns home; above it, a permanent Frenkel pair is born. Keep this scale in mind: the recoils below run *thousands* of times over it.

**The four probes compared.** Same physics, wildly different consequences:

| Probe | Charge | Penetration | Typical $T$ into a lattice atom | Damage morphology |
|---|---|---|---|---|
| Neutron | 0 | very deep (cm) | large ($\sim$10–100 keV) | dense **cascades** |
| Heavy ion | + | shallow ($\mu$m) | large | dense cascades (near surface) |
| Electron | − | moderate | tiny ($\sim$ tens of eV) | isolated **Frenkel pairs** |
| Gamma | 0 | deep | negligible (via secondary electrons) | almost none in metal |

## Picture

![Left: a neutron elastically striking a lattice atom and knocking it off-site with recoil energy T, leaving a vacancy. Right: the energy-transfer efficiency gamma = 4 M1 M2 / (M1+M2)^2 plotted against target mass for a neutron projectile, falling from 1 at equal mass to about 0.07 for iron.](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (a fast neutron on iron — the workhorse number).** A $1$ MeV neutron ($M_1 = 1$ u) strikes an iron atom ($M_2 = 56$ u). The efficiency is

$$\gamma = \frac{4(1)(56)}{(1+56)^2} = \frac{224}{3249} = 0.069,$$

so the maximum recoil is

$$T_{\max} = \gamma E = 0.069 \times 1\ \text{MeV} = 6.9\times 10^{4}\ \text{eV} \approx 69\ \text{keV},$$

and the average recoil is $\bar T = T_{\max}/2 \approx 34\ \text{keV}$. Compare to $E_d \approx 40$ eV: even the *average* hit is about $860\times$ over threshold. That single recoiling iron atom carries enough energy to knock out hundreds of its neighbors — which is exactly the displacement cascade of [1.3](01-03-pka-displacement-cascades.md). This is why fast neutrons dominate structural damage.

**Example 2 (a 1 MeV electron — why it can't make a cascade).** Now the projectile is an electron, mass $M_1 = m_e \approx 5.5\times10^{-4}$ u, on the same iron. The mass mismatch is enormous, so $\gamma$ is tiny. The simple formula gives

$$T_{\max} = \frac{4 m_e M_2}{(m_e + M_2)^2}E \approx \frac{4 m_e}{M_2}E = \frac{4(5.5\times10^{-4})}{56}\,(1\ \text{MeV}) \approx 39\ \text{eV}.$$

(A 1 MeV electron is relativistic — $m_e c^2 = 0.511$ MeV — so the honest relativistic value is about twice this, $\sim 80$ eV; either way it lands *right at* $E_d \approx 40$ eV.) The lesson: an electron can *barely* clear the displacement threshold, so when it does displace an atom it produces a lone, isolated **Frenkel pair** with no energy left over to knock out a second atom. That is why electron irradiation (e.g. in a high-voltage electron microscope) is the clean way to study *single* point defects, whereas a neutron's 34 keV recoil detonates a whole **cascade**. Same displacement physics, opposite morphology — set entirely by $\gamma$.

## Watch out

- **You might think ionization is what damages the metal — it's the biggest energy loss, after all.** But in a *metal* that energy just heats the electron gas and dissipates; the lattice is untouched. The damage rides the small displacement channel. (In insulators and polymers the ionization channel *does* damage — don't carry the "ionization is harmless" rule out of metals.)
- **You might think a heavier, more energetic projectile always transfers more.** Energy transfer is about the *mass match* $\gamma$, not brute energy. A neutron gives up its energy most efficiently to a *light* nucleus ($\gamma \to 1$ as $M_2 \to 1$) — which is exactly why hydrogen moderates neutrons ([`intro-nuclear-engineering` 2.4](../../intro-nuclear-engineering/lessons/02-04-moderation-slowing-neutrons.md)) and why a neutron barely slows against heavy uranium.
- **You might think $T_{\max}$ is what a typical collision delivers.** $T_{\max}$ is the head-on ceiling; the *average* isotropic recoil is only half of it, $\bar T = T_{\max}/2$. Use $T_{\max}$ for "worst case," $\bar T$ for dose estimates.

## One-liner

> Radiation damages metal only through the atoms it *displaces*, and a single elastic hit can transfer at most $\gamma E = \dfrac{4M_1M_2}{(M_1+M_2)^2}E$ — which is why neutrons (deep-penetrating, mass-matched to nuclei) are the reactor's damage engine and electrons make only lonely Frenkel pairs.

## Problems

**P1 (🟢)** A $2$ MeV neutron ($M_1 = 1$ u) scatters elastically off a carbon atom ($M_2 = 12$ u). Find the energy-transfer efficiency $\gamma$, the maximum recoil energy $T_{\max}$, and the average recoil $\bar T$.

**P2 (🟡)** For a neutron ($M_1 = 1$ u), find the range of target masses $M_2$ for which a single collision can transfer at least *half* the neutron's energy in a head-on hit (i.e. $\gamma \ge 0.5$). What does your answer say about which elements make good neutron moderators?

**P3 (🔴)** The $1$ MeV neutron of Example 1 gives an iron atom a $69$ keV recoil (the "primary knock-on atom", or PKA). That fast iron atom now collides elastically with a *second, stationary iron atom*. What is the maximum energy it can hand off, and what does that imply about how a cascade spreads? (Preview of [1.3](01-03-pka-displacement-cascades.md).)

<details>
<summary>Solutions</summary>

**P1** With $M_1 = 1$, $M_2 = 12$:

$$\gamma = \frac{4(1)(12)}{(1+12)^2} = \frac{48}{169} = 0.284.$$

$$T_{\max} = \gamma E = 0.284 \times 2\ \text{MeV} = 0.568\ \text{MeV} \approx 568\ \text{keV}, \qquad \bar T = \tfrac12 T_{\max} \approx 284\ \text{keV}.$$

*Check.* $\gamma$ is dimensionless and $0<\gamma<1$ ✓; carbon is lighter than iron, so $\gamma = 0.284$ exceeds iron's $0.069$ — lighter targets take a bigger fraction, as the curve shows ✓. Units: (dimensionless)$\times$MeV = MeV ✓.

**P2** Set $\gamma = \dfrac{4M_2}{(1+M_2)^2} \ge \tfrac12$ (using $M_1 = 1$). Clearing the denominator:

$$8M_2 \ge (1+M_2)^2 \;\Longrightarrow\; M_2^2 - 6M_2 + 1 \le 0.$$

The roots of $M_2^2 - 6M_2 + 1 = 0$ are $M_2 = 3 \pm 2\sqrt2 = 3 \pm 2.83$, i.e. $M_2 \approx 0.17$ and $M_2 \approx 5.83$. The quadratic is $\le 0$ between them, so

$$0.17 \le M_2 \le 5.83.$$

Only *very light* nuclei — up through about mass 6 (hydrogen, deuterium, helium, lithium; carbon at 12 is already outside) — can receive half the neutron's energy in one hit. **That is precisely why good moderators are light** ([`intro-nuclear-engineering` 2.4](../../intro-nuclear-engineering/lessons/02-04-moderation-slowing-neutrons.md)): hydrogen ($M_2 = 1$, $\gamma = 1$) can stop a neutron in a single collision, while heavy nuclei barely dent its energy.

*Check.* At $M_2 = 1$, $\gamma = 4/4 = 1 \ge 0.5$ ✓ (inside the interval); at $M_2 = 12$, $\gamma = 0.284 < 0.5$ ✓ (outside). The interval brackets $M_2 = 1$ symmetrically in the transformed variable, as expected for a mass-ratio formula. ✓

**P3** Both atoms are iron, so $M_1 = M_2 = 56$ and

$$\gamma = \frac{4(56)(56)}{(112)^2} = \frac{12544}{12544} = 1.$$

The maximum transfer is $T_{\max} = \gamma E = 1 \times 69\ \text{keV} = 69\ \text{keV}$ — the moving iron atom can hand over *all* of its energy to the struck one. Equal-mass collisions are perfectly efficient, so a fast PKA loses its energy in a rapid succession of nearly-full-energy knock-ons among identical lattice atoms. Each recoil is still far above $E_d \approx 40$ eV, so each can displace *another* atom, and the process multiplies into a branching **displacement cascade** rather than a single defect. This same-mass efficiency is exactly why cascades develop the way they do in a monatomic metal.

*Check.* $\gamma = 1$ is the maximum possible, attained only at equal mass, consistent with the peak of the efficiency curve ✓. Energy conserved: transfer cannot exceed the $69$ keV the PKA carries ✓.

</details>

## Connections

- **Backward:** the displaced atom leaves a vacancy and becomes an interstitial — the **Frenkel pair** of [1.1](01-01-crystals-defects-refresher.md). The *rate* of these collisions is set by the elastic scattering cross section from [`intro-nuclear-engineering` 2.1](../../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md): $\gamma$ says how much energy each hit delivers, $\sigma$ says how often hits happen.
- **Forward:** the recoiling atom of Example 1 *is* the **primary knock-on atom (PKA)** that opens [1.3 (PKA and displacement cascades)](01-03-pka-displacement-cascades.md); its energy $\bar T$ feeds the Kinchin–Pease count and the **dpa** dose unit in [1.4](01-04-kinchin-pease-nrt-dpa.md). Gammas and charged particles, which stay in the ionization pipe, reappear when we treat them explicitly in [`intro-nuclear-engineering` 4.2](../../intro-nuclear-engineering/lessons/04-02-photons-through-matter.md) and [4.3](../../intro-nuclear-engineering/lessons/04-03-charged-particles-through-matter.md).
- **Sideways:** $T_{\max} = \gamma E$ is nothing but two-body **elastic-collision kinematics** — the same momentum-and-energy bookkeeping as billiard balls in Newtonian mechanics, and the same math that governs neutron **moderation** by light nuclei ([`intro-nuclear-engineering` 2.4](../../intro-nuclear-engineering/lessons/02-04-moderation-slowing-neutrons.md)). Slowing a neutron down and damaging a lattice are the *same collision* seen from the two atoms' points of view.

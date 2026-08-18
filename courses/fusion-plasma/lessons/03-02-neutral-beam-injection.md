# Fusion & Plasma Engineering · Lesson 3.2: Neutral-beam injection

> ⏱ ~15 min · Module 3: Heating, Transport & Plasma–Wall Interaction · Builds on: [3.1 Ohmic heating & its ceiling](03-01-ohmic-heating-ceiling.md), [2.3 The tokamak recipe](02-03-the-tokamak-recipe.md) · Unlocks: [3.3 RF heating & current drive](03-03-rf-heating-current-drive.md), [3.4 Transport & confinement scaling](03-04-transport-confinement-scaling.md)

## Why this matters

Ohmic heating quit on us. [Lesson 3.1](03-01-ohmic-heating-ceiling.md) showed that as the plasma warms, Spitzer resistivity collapses like $\eta\propto T^{-3/2}$, so the transformer-driven current heats less and less — the plasma stalls out around a few keV, far short of the ~15 keV you need for a burning D-T plasma. So you bolt on an *external* furnace. The workhorse is **neutral-beam injection (NBI)**: you literally fire a beam of fast atoms into the core. ITER's two injectors deliver 33 MW at 1 MeV; every big tokamak leans on beams not just to heat, but to *push* — to drive plasma current without a transformer, the key to running steady-state instead of in pulses. This lesson is how you shoot energy and momentum straight into a magnetically walled-off core.

## The idea

Here's the problem in one sentence: **you cannot throw a charged particle across a magnetic field.** The confining field that holds the plasma in ([2.3](02-03-the-tokamak-recipe.md)) works both ways — fire an ion at the plasma and the Lorentz force $q\mathbf{v}\times\mathbf{B}$ bends it into a tight little circle (its gyro-orbit) right at the edge. It never reaches the core. The field is a wall to anything carrying charge.

The trick is a shell game with the charge. A **neutral** atom feels no magnetic force at all — $q=0$, so $q\mathbf{v}\times\mathbf{B}=0$ — and sails straight through the field as if it weren't there. So the recipe is:

1. **Make ions** in a source (easy to grab and accelerate — they're charged).
2. **Accelerate them** to high energy with an electric field (tens to hundreds of keV, or 1 MeV for ITER).
3. **Neutralize them** — pass the fast ion beam through a gas cell where each ion snatches an electron (charge exchange) and becomes a fast *neutral* atom, same speed, now chargeless.
4. **Inject the neutrals** — they cross the confining field freely and drive deep into the plasma.
5. **Re-ionization** — in the hot dense core, each fast neutral gets stripped again (an electron or ion knocks its electron off). Now it's a fast *ion* — and being charged, it's instantly trapped by the same field it just flew through. It's stuck inside, right where you wanted it.
6. **Slowing down** — this fast ion is far faster than the thermal plasma, so it plows through, colliding, and gradually shares its energy and momentum with the background. Its **energy** heats the plasma; its **momentum** pushes the plasma current around the torus.

That last split is the whole payoff: **energy → heating, momentum → current drive.**

## The formal version

**Injected power.** An ion source that extracts a current $I$ (amperes) of singly-charged ions accelerated through a voltage $V$ (volts) delivers a beam power

$$P_{\text{ion}} = I\,V,$$

*In words: current times voltage — each ion of charge $e$ crosses the voltage $V$ and gains energy $eV$, i.e. $E_b = eV$ in electron-volts.* Only a fraction $\eta_n$ (the **neutralization efficiency**, dimensionless, $0<\eta_n<1$) becomes neutral in the gas cell; the leftover ions are bent aside by a magnet into a dump. So the power actually injected into the plasma is

$$P_0 = \eta_n\,P_{\text{ion}} = \eta_n I V .$$

**Beam deposition (penetration).** As the neutral beam bores in, it thins out — each atom has some chance per unit length of being ionized and captured. The surviving neutral flux falls off exponentially with depth $x$ into the plasma:

$$\frac{I_b(x)}{I_b(0)} = e^{-x/\lambda}, \qquad \lambda = \frac{1}{n_e\,\sigma_s},$$

where $n_e$ (m$^{-3}$) is the electron density, $\sigma_s$ (m$^2$) is the effective **beam-stopping cross section** (ionization + charge-exchange combined), and $\lambda$ (m) is the **mean free path** — the e-folding penetration depth. *In words: the beam loses $1/e$ of itself every $\lambda$ of travel, and it penetrates deep only when the plasma is thin ($n_e$ small) or the atoms are hard to ionize ($\sigma_s$ small).*

The engineering sweet spot is $\lambda \sim a$, the plasma minor radius — deposit across the profile, peaking near the core:

- $\lambda \ll a$: the beam ionizes at the **edge** and never reaches the core (weak, cold beam or very dense plasma). Wasted heating and edge trouble.
- $\lambda \gg a$: the beam flies straight **through** and hits the far wall — **shine-through**, wasted power and a damaged wall.

Since $\sigma_s$ *falls* as the beam gets faster, **higher beam energy $\Rightarrow$ smaller $\sigma_s \Rightarrow$ longer $\lambda \Rightarrow$ deeper penetration.** That's why bigger, denser machines (ITER) need MeV beams while small tokamaks get by with tens of keV.

**Current drive.** The fast ions are born moving in one direction (along the injection line, mostly toroidal for a tangentially-aimed beam). A directed stream of charge *is* a current. Injecting neutrals at rate $\dot N = P_0/E_b$ (atoms per second), each surviving as a fast ion for a slowing-down time $\tau_s$ before it thermalizes, gives a steady population $N_f = \dot N\,\tau_s$ of fast ions circulating the torus. Each carries charge $Ze$ around a loop of major radius $R$ at speed $v_b$, i.e. current $Ze\,v_b/(2\pi R)$ per ion, so the driven current is roughly

$$I_{\text{CD}} \;\approx\; N_f\,\frac{Z e\, v_b}{2\pi R}\,\bigl(1-\tfrac{Z_b}{Z_{\text{eff}}}\bigr).$$

*In words: total fast-ion charge, times how often each lap of the torus it completes, gives the current — reduced by the back-reaction of plasma electrons dragged along ($Z_b$ is the beam-ion charge, $Z_{\text{eff}}$ the plasma effective charge).* The point isn't the exact prefactor; it's that this current is **non-inductive** — it needs no transformer, so it does not run down. That is the ticket to steady-state operation (contrast the pulsed ohmic transformer of [3.1](03-01-ohmic-heating-ceiling.md)).

## Picture

![The NBI chain: an ion source and accelerator make fast D+ ions; a neutralizer gas cell turns them into fast neutral atoms that cross the confining B field freely, while leftover ions are bent to a dump; the neutral re-ionizes in the core and deposits energy and momentum in a coral starburst.](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (heating power and where it lands).** A positive-ion source accelerates deuterons through $V = 100\,\text{kV}$ (so $E_b = 100\,\text{keV}$) and extracts $I = 50\,\text{A}$ of ion current. The neutralizer runs at efficiency $\eta_n = 0.5$. The target plasma has $n_e = 5\times10^{19}\,\text{m}^{-3}$, minor radius $a = 1\,\text{m}$, and beam-stopping cross section $\sigma_s \approx 5\times10^{-20}\,\text{m}^2$. Find the injected power and the penetration depth.

*Power.* The ion-beam power is

$$P_{\text{ion}} = IV = (50\,\text{A})(100{,}000\,\text{V}) = 5\times10^{6}\,\text{W} = 5\,\text{MW}.$$

Only half survives neutralization, so the plasma actually sees

$$P_0 = \eta_n P_{\text{ion}} = 0.5\times 5\,\text{MW} = 2.5\,\text{MW}.$$

*Penetration.* The mean free path is

$$\lambda = \frac{1}{n_e\sigma_s} = \frac{1}{(5\times10^{19}\,\text{m}^{-3})(5\times10^{-20}\,\text{m}^2)} = \frac{1}{2.5\,\text{m}^{-1}} = 0.4\,\text{m}.$$

Compare to $a = 1\,\text{m}$: the beam e-folds at 0.4 m, so it deposits across the outer-to-mid plasma — decent, but peaked off-axis, not dead-center. To push the deposition deeper you'd *raise the beam energy* (which lowers $\sigma_s$ and lengthens $\lambda$). If instead you halved the energy, $\sigma_s$ roughly doubles, $\lambda$ drops to $\sim0.2\,\text{m}$, and the beam dumps its power near the edge — the wrong place.

**Example 2 (momentum → current, and why steady-state cares).** Same beam: $P_0 = 2.5\,\text{MW}$ of $E_b = 100\,\text{keV}$ deuterons into a tokamak with $R = 6\,\text{m}$. Estimate the driven current.

*Beam speed.* With deuteron mass $m_D = 2\times1.66\times10^{-27} = 3.34\times10^{-27}\,\text{kg}$ and $E_b = 100\,\text{keV} = 1.6\times10^{-14}\,\text{J}$,

$$v_b = \sqrt{\frac{2E_b}{m_D}} = \sqrt{\frac{2(1.6\times10^{-14})}{3.34\times10^{-27}}} = \sqrt{9.6\times10^{12}} \approx 3.1\times10^{6}\,\text{m/s}.$$

*Fast-ion supply rate.* $\displaystyle \dot N = \frac{P_0}{E_b} = \frac{2.5\times10^{6}}{1.6\times10^{-14}} \approx 1.6\times10^{20}\ \text{ions/s}.$

*Circulating population.* Take a slowing-down time $\tau_s \approx 0.1\,\text{s}$ (fast ions lose their directed speed by Coulomb collisions on the background electrons — the *same* collisional physics behind Spitzer resistivity in [3.1](03-01-ohmic-heating-ceiling.md)). Then $N_f = \dot N\,\tau_s \approx 1.6\times10^{20}\times 0.1 = 1.6\times10^{19}$ fast ions in flight.

*Gross current.* Each laps the torus at $v_b/(2\pi R)$, carrying $e$:

$$I_{\text{gross}} = N_f\,\frac{e\,v_b}{2\pi R} = (1.6\times10^{19})\frac{(1.6\times10^{-19})(3.1\times10^{6})}{2\pi(6)} \approx \frac{7.9\times10^{6}}{37.7} \approx 2.1\times10^{5}\,\text{A} \approx 0.2\,\text{MA}.$$

Electron shielding knocks this down by $(1-Z_b/Z_{\text{eff}})$; for $Z_b=1$, $Z_{\text{eff}}\approx2$ that's a factor $\approx0.5$, leaving **$\sim$0.1 MA of net non-inductive current for 2.5 MW.** That looks expensive — a 1 MA target would want $\sim$25 MW of beam. But every non-inductive amp is one the transformer doesn't have to supply, and unlike the ohmic current it never decays. Steady-state reactors close the gap with self-generated **bootstrap current** (a [3.4](03-04-transport-confinement-scaling.md) topic); NBI and RF ([3.3](03-03-rf-heating-current-drive.md)) top up the rest.

## Watch out

- **You might think you inject neutrals because they're "gentler."** No — you inject neutrals because *charged* particles physically cannot cross the confining field; the Lorentz force curls them back at the edge. Neutrality is the only way in. The atom re-ionizes and gets trapped the instant it's inside.
- **You might think a hotter/faster beam always heats better.** Push the energy too high (or the plasma too thin) and the beam *shines through* — straight out the far side into the wall, depositing nothing and eroding first-wall tiles. There's a Goldilocks band $\lambda\sim a$: too cold stops at the edge, too hot passes through.
- **You might think heating and current drive are the same knob.** Energy deposition heats regardless of beam direction; current drive needs *directed momentum*, so it depends on aiming the beam tangentially (along the torus). A perpendicular beam heats well but drives almost no current.

## One-liner

> Accelerate ions, strip them to neutrals so they can cross the field, let them re-ionize in the core — and their energy heats the plasma while their momentum drives a transformer-free current.

## Problems

**P1 (🟢)** A neutral-beam source accelerates deuterons through $V = 80\,\text{kV}$ and extracts $I = 30\,\text{A}$ of ion current, with neutralization efficiency $\eta_n = 0.5$. What is the beam energy $E_b$ (in keV), and how much power $P_0$ (in MW) is actually injected into the plasma?

**P2 (🟡)** A beam with stopping cross section $\sigma_s = 4\times10^{-20}\,\text{m}^2$ is fired into a plasma of density $n_e = 1\times10^{20}\,\text{m}^{-3}$ and minor radius $a = 1\,\text{m}$. (a) Find the penetration depth $\lambda$ and compare it to $a$. (b) An upgrade *doubles* the density to $2\times10^{20}\,\text{m}^{-3}$. What happens to $\lambda$, and to fix it should you raise or lower the beam energy? Explain in one line.

**P3 (🔴, connects to steady-state)** A reactor needs 1 MA of non-inductive current. From Example 2, roughly 2.5 MW of beam drives about 0.1 MA of net current. (a) Assuming the driven current scales linearly with injected power, how much beam power would 1 MA require? (b) A reactor's fusion output is $\sim$2 GW thermal, recirculating maybe 100–150 MW to all heating/current-drive systems combined. Comment on whether pure NBI current drive is affordable, and what has to help.

<details>
<summary>Solutions</summary>

**P1** The beam energy is set by the accelerating voltage: an ion of charge $e$ crossing $80\,\text{kV}$ gains $80\,\text{keV}$, so $E_b = 80\,\text{keV}$. The ion-beam power is

$$P_{\text{ion}} = IV = (30\,\text{A})(80{,}000\,\text{V}) = 2.4\times10^{6}\,\text{W} = 2.4\,\text{MW},$$

and after neutralization

$$P_0 = \eta_n P_{\text{ion}} = 0.5\times 2.4 = 1.2\,\text{MW}.$$

*Check.* Units: $\text{A}\cdot\text{V} = \text{W}$ ✓. Half the beam is lost in the neutralizer, so $P_0$ is half of $P_{\text{ion}}$ ✓.

**P2** (a) The penetration depth is

$$\lambda = \frac{1}{n_e\sigma_s} = \frac{1}{(1\times10^{20})(4\times10^{-20})} = \frac{1}{4}\,\text{m} = 0.25\,\text{m}.$$

That is only a quarter of $a = 1\,\text{m}$: the beam e-folds well before the core, so it deposits mostly in the outer plasma — shallow, edge-weighted heating.

(b) $\lambda = 1/(n_e\sigma_s)$ is inversely proportional to $n_e$, so doubling the density **halves** $\lambda$ to $0.125\,\text{m}$ — even shallower. To recover depth you must lengthen $\lambda$, which means shrinking $\sigma_s$; since the stopping cross section *falls* with beam speed, you **raise the beam energy**. (This is exactly why denser machines need higher-energy beams — ITER's 1 MeV.)

*Check.* $\lambda\propto 1/n_e$, so $\times2$ density $\Rightarrow \times\tfrac12$ depth ✓. Higher energy $\to$ smaller $\sigma_s \to$ larger $\lambda$ ✓.

**P3** (a) Linear scaling: $I_{\text{CD}}\propto P_0$, so

$$P_0(1\,\text{MA}) \approx 2.5\,\text{MW}\times\frac{1\,\text{MA}}{0.1\,\text{MA}} = 25\,\text{MW}.$$

(b) 25 MW out of a ~100–150 MW recirculating budget for a single job (the current) is a large but not crazy bite — real reactors do run tens of MW of NBI. Still, driving the *entire* plasma current this way would eat much of the auxiliary power and hurt the plant's net electricity. The fix is that a steady-state reactor generates most of its own current internally as **bootstrap current** (from the plasma pressure gradient, [3.4](03-04-transport-confinement-scaling.md)), so NBI and RF ([3.3](03-03-rf-heating-current-drive.md)) only have to supply the remaining fraction. Current drive is a top-up, not the whole supply.

*Check.* $25/2.5 = 10 = 1\,\text{MA}/0.1\,\text{MA}$ ✓. The takeaway — non-inductive current drive is power-hungry, so self-generated bootstrap current is essential for an economical steady-state reactor — matches the real design logic.

</details>

## Flashback

**From Lesson 3.1 (Ohmic heating & its ceiling):** Ohmic heating deposits power density $P_\Omega = \eta j^2$, with Spitzer resistivity $\eta = \eta_0\,(T/T_0)^{-3/2}$. Holding the current density $j$ fixed, by what factor does the ohmic heating power density change as the plasma temperature rises from $1\,\text{keV}$ to $4\,\text{keV}$? What does this say about reaching fusion temperatures on ohmic power alone?

<details>
<summary>Solution</summary>

At fixed $j$, $P_\Omega \propto \eta \propto T^{-3/2}$. Going from $T_0 = 1\,\text{keV}$ to $T = 4\,\text{keV}$,

$$\frac{P_\Omega(4\,\text{keV})}{P_\Omega(1\,\text{keV})} = \left(\frac{4}{1}\right)^{-3/2} = \frac{1}{4^{3/2}} = \frac{1}{8}.$$

The heating collapses to **one-eighth** of its value — a factor-8 drop for just a factor-4 rise in temperature. Ohmic heating fights a losing battle: the hotter the plasma gets, the feebler the heating becomes, so it stalls out around a few keV, far below the ~15 keV D-T needs. That vanishing ceiling is *precisely* why you bolt on neutral-beam injection (this lesson) and RF ([3.3](03-03-rf-heating-current-drive.md)) — auxiliary heating whose power does not fade as the plasma warms.

*Check.* $4^{3/2} = (4^{1/2})^3 = 2^3 = 8$ ✓; the exponent is negative, so heating drops as $T$ climbs ✓.

</details>

## Connections

- **Backward:** this lesson is the answer to the dead end of [3.1](03-01-ohmic-heating-ceiling.md) — ohmic heating fades as $T^{-3/2}$ and stalls near a few keV, so NBI supplies temperature-independent auxiliary power to push through to ignition conditions. The "can't cross the field" premise is the Lorentz-force confinement of [2.3](02-03-the-tokamak-recipe.md), used in reverse.
- **Forward:** [3.3 RF heating & current drive](03-03-rf-heating-current-drive.md) is the wave-based alternative (heat a resonance instead of firing particles), and [3.4 Transport & confinement scaling](03-04-transport-confinement-scaling.md) sets how much heating you actually need — the injected power must outrun the transport losses to hold ignition, and beam-driven current partners with bootstrap current for steady state.
- **Sideways (atomic & collisional physics):** the whole scheme rides on two atomic processes — charge exchange (neutralization) and electron-impact ionization (re-capture) — while the fast-ion slowing-down that delivers the heat is Coulomb collisions, the same physics that fixes Spitzer resistivity and underlies the [`plasma-physics` syllabus](../../plasma-physics/syllabus.md). The gyro-orbit that stops a charged beam at the edge is single-particle motion in $\mathbf{B}$, straight from the [`em-refresher` syllabus](../../em-refresher/syllabus.md).

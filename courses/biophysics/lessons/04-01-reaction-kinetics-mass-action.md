# Biophysics · Lesson 4.1: Reaction kinetics and mass action

> ⏱ ~15 min · Module 4: Motors, kinetics, and membrane potentials · Builds on: [3.6 Electrostatics in salt water](03-06-electrostatics-salt-water.md), [`ode-refresher` syllabus](../../ode-refresher/syllabus.md) · Unlocks: [4.2 Enzyme kinetics: Michaelis–Menten](04-02-michaelis-menten.md)

## Why this matters

A cell is a bag of reactions running at once — a protein grabs a ligand, an enzyme cuts a bond, a motor binds ATP. To predict what a cell *does*, you need to know how fast each of these happens and where they settle. In Module 2 you met the dissociation constant $K_d$ as a **thermodynamic** number: the concentration at half-occupancy, set by a binding energy. That was the equilibrium snapshot. This lesson opens the shutter and watches the *movie*: how concentrations change in time, governed by rate constants $k_{\text{on}}$ and $k_{\text{off}}$. The payoff is a beautiful consistency check — the equilibrium $K_d$ turns out to be nothing but the **ratio of those two rates**, $K_d = k_{\text{off}}/k_{\text{on}}$. Kinetics and thermodynamics tell the same story. And one deep constraint on rates — **detailed balance** — is exactly what forbids a passive machine from doing work for free, which is why a molecular motor must burn ATP ([4.3](04-03-molecular-motors-ratchet.md)).

## The idea

Two molecules react only if they *bump into each other*, and each bump is an independent event. So the rate at which $\mathrm{A}$ and $\mathrm{B}$ combine is proportional to how many of each are around — double $[\mathrm{A}]$ and you double the collision rate; double $[\mathrm{B}]$ too and you double it again. The forward rate goes as the **product** $[\mathrm{A}][\mathrm{B}]$. That single sentence is the **law of mass action**, and everything else is bookkeeping on top of it.

Now let the reaction run. Early on there's lots of $\mathrm{A}$ and $\mathrm{B}$, so the forward reaction dominates and product $\mathrm{C}$ piles up. But $\mathrm{C}$ falls apart too, at a rate proportional to how much $\mathrm{C}$ you've made. As $\mathrm{C}$ accumulates, the reverse reaction catches up — until the two rates are exactly equal and the concentrations stop changing. That standoff is **equilibrium**. It is not silence: both reactions are still firing at full tilt, just in perfect balance (a *dynamic* equilibrium). And the approach to that standoff is **exponential** — concentrations coast into equilibrium with a characteristic timescale $\tau$, the same way a hot cup cools toward room temperature.

## The formal version

### (a) Rate constants and the rate equation

Take the elementary reversible reaction

$$\mathrm{A} + \mathrm{B} \;\underset{k_{\text{off}}}{\overset{k_{\text{on}}}{\rightleftharpoons}}\; \mathrm{C}.$$

Mass action assigns each direction a rate (units: concentration per time, e.g. M/s):

- **Forward** (binding, *bimolecular*): rate $= k_{\text{on}}[\mathrm{A}][\mathrm{B}]$. The constant $k_{\text{on}}$ has units $\mathrm{M^{-1}s^{-1}}$ — it *must*, to turn a product of two concentrations into a rate.
- **Reverse** (unbinding, *unimolecular*): rate $= k_{\text{off}}[\mathrm{C}]$. Here $k_{\text{off}}$ has units $\mathrm{s^{-1}}$ — it is just a probability per unit time that a given complex lets go.

The net rate of change of $[\mathrm{C}]$ is forward minus reverse:

$$\boxed{\;\frac{d[\mathrm{C}]}{dt} = k_{\text{on}}[\mathrm{A}][\mathrm{B}] - k_{\text{off}}[\mathrm{C}]\;}$$

*In words: product builds at the collision rate and decays at the fall-apart rate; the difference is how fast $[\mathrm{C}]$ moves.* This is a **first-order ordinary differential equation** — the same object you solve in [`ode-refresher`](../../ode-refresher/syllabus.md), now wearing a biochemistry uniform.

**What sets the two constants.** $k_{\text{on}}$ is capped by *how fast diffusion can deliver* the partners: it cannot exceed the Smoluchowski limit $k_{\text{diff}} = 4\pi D a \sim 10^{9}\ \mathrm{M^{-1}s^{-1}}$ from [1.4](01-04-einstein-relation.md). Real on-rates run $10^{6}\text{–}10^{9}\ \mathrm{M^{-1}s^{-1}}$; a value near the ceiling means the reaction happens on essentially every encounter. $k_{\text{off}}$ is set by the *bond strength* through an Arrhenius/Kramers factor,

$$k_{\text{off}} \approx \nu\,e^{-\Delta G^{\ddagger}/k_BT},$$

where $\Delta G^{\ddagger}$ is the height of the energy barrier the complex must climb to break apart and $\nu$ is an attempt frequency. *In words: to come apart, a bond has to be thermally kicked over its barrier, and the odds of that kick are the Boltzmann factor $e^{-\Delta G^{\ddagger}/k_BT}$* — the $k_BT$ ruler again. Deepen the well by a few $k_BT$ and $k_{\text{off}}$ plummets exponentially.

### (b) Equilibrium is a ratio of rates

At equilibrium the concentrations stop moving, $d[\mathrm{C}]/dt = 0$, so the two rates balance:

$$k_{\text{on}}[\mathrm{A}][\mathrm{B}] = k_{\text{off}}[\mathrm{C}].$$

Rearrange:

$$\boxed{\;K_d \equiv \frac{k_{\text{off}}}{k_{\text{on}}} = \frac{[\mathrm{A}][\mathrm{B}]}{[\mathrm{C}]}\;}$$

*In words: the dissociation constant you met in [2.3](02-03-ligand-binding-occupancy.md) as a pure equilibrium quantity is really the ratio of two kinetic rates.* This is the consistency the whole course is built on: the equilibrium ratio $[\mathrm{A}][\mathrm{B}]/[\mathrm{C}]$ that thermodynamics fixes ($K_d = c^{\circ}e^{\Delta G_{\text{bind}}/k_BT}$) is forced to equal $k_{\text{off}}/k_{\text{on}}$ that kinetics fixes. Tight binding (small $K_d$) can come from a fast on-rate *or* a slow off-rate — and biology uses both.

The reciprocal $1/k_{\text{off}}$ is the mean **residence time** of the complex — how long, on average, $\mathrm{C}$ stays together before it dissociates. A drug with $k_{\text{off}} = 10^{-3}\ \mathrm{s^{-1}}$ sits on its target for about $1000$ s.

### (c) Relaxation: how fast equilibrium arrives

Watch a receptor $\mathrm{A}$ bind a ligand $\mathrm{L}$ held at (roughly) fixed concentration $[\mathrm{L}]$ — the excess-ligand or *pseudo-first-order* case. With total receptor $A_{\text{tot}} = [\mathrm{A}] + [\mathrm{C}]$ conserved, substitute $[\mathrm{A}] = A_{\text{tot}} - [\mathrm{C}]$ into the rate equation:

$$\frac{d[\mathrm{C}]}{dt} = k_{\text{on}}[\mathrm{L}]\big(A_{\text{tot}} - [\mathrm{C}]\big) - k_{\text{off}}[\mathrm{C}] = k_{\text{on}}[\mathrm{L}]\,A_{\text{tot}} - \big(k_{\text{on}}[\mathrm{L}] + k_{\text{off}}\big)[\mathrm{C}].$$

This is a linear ODE $\dot y = a - by$, whose solution decays exponentially to $y_{\text{eq}} = a/b$. So

$$[\mathrm{C}](t) = [\mathrm{C}]_{\text{eq}} + \big([\mathrm{C}]_0 - [\mathrm{C}]_{\text{eq}}\big)\,e^{-t/\tau}, \qquad \boxed{\;\frac{1}{\tau} = k_{\text{on}}[\mathrm{L}] + k_{\text{off}}\;}$$

*In words: the system slides into equilibrium exponentially, and the observed relaxation rate is the on-rate (scaled by ligand) plus the off-rate.* The striking prediction: **$\tau^{-1}$ grows linearly with $[\mathrm{L}]$**. Add more ligand and equilibrium arrives faster. This is the engine of **relaxation kinetics** (temperature-jump, stopped-flow): measure $\tau$ at several $[\mathrm{L}]$, plot $\tau^{-1}$ versus $[\mathrm{L}]$, and read off $k_{\text{on}}$ as the slope and $k_{\text{off}}$ as the intercept — both rate constants from one straight line.

### (d) Detailed balance — why passive cycles can't do work

Equilibrium's balance is stronger than "the total $[\mathrm{C}]$ stops changing." True thermodynamic equilibrium demands **detailed balance**: *every* elementary forward rate equals its *own* reverse rate, not merely the sum. Consider a three-state cycle a molecule can loop through,

$$1 \rightleftharpoons 2 \rightleftharpoons 3 \rightleftharpoons 1,$$

with rate constants $k_{12}, k_{21}, \dots$ Detailed balance says each link balances on its own: $k_{12}p_1 = k_{21}p_2$, $k_{23}p_2 = k_{32}p_3$, $k_{31}p_3 = k_{13}p_1$, where $p_i$ is the equilibrium occupancy of state $i$. Multiply all three and cancel the common $p_1p_2p_3$:

$$\boxed{\;k_{12}\,k_{23}\,k_{31} = k_{21}\,k_{32}\,k_{13}\;}$$

*In words: at equilibrium the product of rate constants going one way around the loop must equal the product going the other way* — the **Wegscheider (Kolmogorov) constraint**. Its consequence is profound: if it holds, there is **zero net circulation** around the cycle at equilibrium — no molecule preferentially loops $1\to2\to3\to1$. A closed loop with no net current can do no net work; a passive machine cannot pump, transport, or step in a preferred direction. To make a motor cycle *unidirectionally* and do work, something must **break** the Wegscheider constraint — and the only way to break it is to couple a step to an out-of-equilibrium fuel like ATP, whose hydrolysis free energy multiplies into one of the rate constants. That is the whole reason motors burn ATP, and it sets up [4.3](04-03-molecular-motors-ratchet.md).

## Picture

![Left: the complex concentration [C](t) rising exponentially to its equilibrium plateau with time constant tau, reaching 63 percent of the plateau at t equals tau. Right: the reaction A plus B reversibly forming C, with the forward rate k_on[A][B] and reverse rate k_off[C] balancing at equilibrium, and K_d equals k_off over k_on annotated.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (equilibrium and $K_d$ from the two rates).** An antibody binds its antigen with $k_{\text{on}} = 5\times10^{6}\ \mathrm{M^{-1}s^{-1}}$ and $k_{\text{off}} = 2\times10^{-3}\ \mathrm{s^{-1}}$. Find $K_d$, the residence time, and the binding free energy.

$$K_d = \frac{k_{\text{off}}}{k_{\text{on}}} = \frac{2\times10^{-3}\ \mathrm{s^{-1}}}{5\times10^{6}\ \mathrm{M^{-1}s^{-1}}} = 4\times10^{-10}\ \mathrm{M} = 0.4\ \mathrm{nM}.$$

Residence time $= 1/k_{\text{off}} = 1/(2\times10^{-3}) = 500\ \mathrm{s}$ — the complex holds together for about eight minutes once formed. The free energy (standard state $c^{\circ} = 1\ \mathrm{M}$, from [2.3](02-03-ligand-binding-occupancy.md)):

$$\Delta G_{\text{bind}} = k_BT\ln\frac{K_d}{c^{\circ}} = k_BT\ln(4\times10^{-10}) \approx -21.6\,k_BT.$$

*Check.* $K_d$ in the sub-nanomolar range is exactly where good antibodies live, and $-21.6\,k_BT \times 0.6\ \mathrm{kcal\,mol^{-1}}/k_BT \approx -13\ \mathrm{kcal/mol}$ is a plausible tight-binding free energy. Note $k_{\text{on}} = 5\times10^{6}$ sits comfortably below the diffusion ceiling $\sim10^{9}\ \mathrm{M^{-1}s^{-1}}$ ✓ — the tightness here comes from the *slow off-rate*, not a superfast on-rate.

**Example 2 (relaxation kinetics — extract both rates from $\tau$).** You do a stopped-flow experiment on a receptor–ligand pair and measure the relaxation time $\tau$ at two ligand concentrations:

$$[\mathrm{L}] = 0.2\ \mu\mathrm{M}\!: \ \tau = 0.99\ \mathrm{s}; \qquad [\mathrm{L}] = 1.0\ \mu\mathrm{M}\!: \ \tau = 0.20\ \mathrm{s}.$$

Since $\tau^{-1} = k_{\text{on}}[\mathrm{L}] + k_{\text{off}}$ is linear in $[\mathrm{L}]$, use the two points. The observed rates are $\tau^{-1} = 1.01\ \mathrm{s^{-1}}$ and $\tau^{-1} = 5.00\ \mathrm{s^{-1}}$. The **slope** gives $k_{\text{on}}$:

$$k_{\text{on}} = \frac{5.00 - 1.01}{(1.0 - 0.2)\times10^{-6}\ \mathrm{M}} = \frac{3.99}{0.8\times10^{-6}} \approx 5.0\times10^{6}\ \mathrm{M^{-1}s^{-1}}.$$

The **intercept** gives $k_{\text{off}}$; extrapolate one point back to $[\mathrm{L}]=0$:

$$k_{\text{off}} = \tau^{-1} - k_{\text{on}}[\mathrm{L}] = 1.01 - (5.0\times10^{6})(0.2\times10^{-6}) = 1.01 - 1.00 = 0.01\ \mathrm{s^{-1}}.$$

So $k_{\text{off}} \approx 0.01\ \mathrm{s^{-1}}$, giving $K_d = k_{\text{off}}/k_{\text{on}} = 2\ \mathrm{nM}$ — both rate constants pinned from a single straight line.

*Check.* The whole point of the slope/intercept method: the on-rate falls out of *how fast $\tau^{-1}$ rises with ligand*, the off-rate out of *where the line would sit at zero ligand*. Because the intercept is a small difference of larger numbers, $k_{\text{off}}$ is the noisy one to pin down — which is exactly why slow off-rates are measured by direct dissociation ("wash and watch $\mathrm{C}$ decay at $e^{-k_{\text{off}}t}$") rather than by extrapolation. ✓

## Watch out

- **You might compare $k_{\text{on}}$ and $k_{\text{off}}$ directly.** You can't — they carry different units ($\mathrm{M^{-1}s^{-1}}$ versus $\mathrm{s^{-1}}$) because one reaction is bimolecular and the other unimolecular. Only their *ratio* $K_d = k_{\text{off}}/k_{\text{on}}$ (units of concentration) is comparable to a concentration. This is the same units bookkeeping that made $\ln K_d$ illegal without a $c^{\circ}$ in [2.3](02-03-ligand-binding-occupancy.md).
- **You might think equilibrium means the reaction stopped.** It hasn't — forward and reverse both fire at full speed, $k_{\text{on}}[\mathrm{A}][\mathrm{B}] = k_{\text{off}}[\mathrm{C}]$, they just cancel. Equilibrium is a *dynamic* standoff, not a freeze.
- **You might set the relaxation rate to $k_{\text{off}}$ alone.** The observed rate is $\tau^{-1} = k_{\text{on}}[\mathrm{L}] + k_{\text{off}}$, and at high ligand the $k_{\text{on}}[\mathrm{L}]$ term dominates. Forgetting it makes you badly underestimate how fast a well-fed reaction equilibrates.

## One-liner

> An elementary reaction runs at rate = (rate constant) × (product of reactant concentrations); equilibrium is where forward equals reverse, so $K_d = k_{\text{off}}/k_{\text{on}}$, the approach is exponential with $\tau^{-1} = k_{\text{on}}[\mathrm{L}] + k_{\text{off}}$, and detailed balance forbids any passive cycle from doing net work.

## Problems

**P1 (🟢)** A transcription factor binds a DNA site with $k_{\text{on}} = 2\times10^{7}\ \mathrm{M^{-1}s^{-1}}$ and $k_{\text{off}} = 0.04\ \mathrm{s^{-1}}$. (a) Find $K_d$. (b) What is the mean residence time on the DNA? *Check:* $K_d$ should land in the nanomolar range typical of specific protein–DNA binding.

**P2 (🟡)** For a receptor–ligand pair with $k_{\text{on}} = 10^{7}\ \mathrm{M^{-1}s^{-1}}$ and $k_{\text{off}} = 1\ \mathrm{s^{-1}}$, compute the relaxation time $\tau$ at $[\mathrm{L}] = 0$, $[\mathrm{L}] = 100\ \mathrm{nM}$, and $[\mathrm{L}] = 1\ \mu\mathrm{M}$. Does the system reach equilibrium faster or slower as you add ligand, and why?

**P3 (🔴, optional)** A membrane pump cycles through three conformations $1\to2\to3\to1$. Suppose someone claims it moves ions "for free" at thermodynamic equilibrium, circulating steadily in the $1\to2\to3$ direction with rate constants satisfying $k_{12}=k_{23}=k_{31}=10\ \mathrm{s^{-1}}$ and $k_{21}=k_{32}=k_{13}=1\ \mathrm{s^{-1}}$. Use the Wegscheider constraint to show this cannot be an equilibrium, and state in one sentence what the pump must consume to sustain the cycle.

<details>
<summary>Solutions</summary>

**P1** (a) $K_d = k_{\text{off}}/k_{\text{on}} = 0.04 / (2\times10^{7}) = 2\times10^{-9}\ \mathrm{M} = 2\ \mathrm{nM}.$

(b) Residence time $= 1/k_{\text{off}} = 1/0.04 = 25\ \mathrm{s}.$

*Check.* $2\ \mathrm{nM}$ is squarely in the specific transcription-factor range (compare the 8 nM site of [2.3](02-03-ligand-binding-occupancy.md)); $k_{\text{on}} = 2\times10^{7}\ \mathrm{M^{-1}s^{-1}}$ is well under the $\sim10^{9}$ diffusion cap ✓. A 25 s grip is long enough to recruit the transcription machinery — the biological point of tight binding. ✓

**P2** Use $\tau^{-1} = k_{\text{on}}[\mathrm{L}] + k_{\text{off}}$ with $k_{\text{on}} = 10^{7}\ \mathrm{M^{-1}s^{-1}}$, $k_{\text{off}} = 1\ \mathrm{s^{-1}}$:

- $[\mathrm{L}] = 0$: $\tau^{-1} = 0 + 1 = 1\ \mathrm{s^{-1}} \Rightarrow \tau = 1\ \mathrm{s}.$
- $[\mathrm{L}] = 100\ \mathrm{nM} = 10^{-7}\ \mathrm{M}$: $k_{\text{on}}[\mathrm{L}] = 10^{7}\times10^{-7} = 1\ \mathrm{s^{-1}}$, so $\tau^{-1} = 1 + 1 = 2\ \mathrm{s^{-1}} \Rightarrow \tau = 0.5\ \mathrm{s}.$
- $[\mathrm{L}] = 1\ \mu\mathrm{M} = 10^{-6}\ \mathrm{M}$: $k_{\text{on}}[\mathrm{L}] = 10^{7}\times10^{-6} = 10\ \mathrm{s^{-1}}$, so $\tau^{-1} = 10 + 1 = 11\ \mathrm{s^{-1}} \Rightarrow \tau \approx 0.09\ \mathrm{s}.$

Equilibrium arrives **faster** as ligand rises, because more ligand means more frequent binding collisions — the $k_{\text{on}}[\mathrm{L}]$ term climbs while $k_{\text{off}}$ stays put.

*Check.* The dependence is linear in $[\mathrm{L}]$: at $1\ \mu\mathrm{M}$ the on-term ($10\ \mathrm{s^{-1}}$) swamps the off-term ($1\ \mathrm{s^{-1}}$), so $\tau$ is essentially set by how fast ligand arrives — the high-concentration limit exploited in stopped-flow. ✓

**P3** The Wegscheider constraint for a genuine equilibrium requires

$$k_{12}\,k_{23}\,k_{31} = k_{21}\,k_{32}\,k_{13}.$$

Plug in the claimed constants:

$$\text{forward: } 10\times10\times10 = 1000, \qquad \text{reverse: } 1\times1\times1 = 1.$$

Since $1000 \neq 1$, the constraint is **violated** — these rate constants describe a system with a strong preferred direction of circulation, which is impossible at thermodynamic equilibrium (where every link must detailed-balance and net circulation is exactly zero). A steadily circulating cycle is therefore *not* an equilibrium; it is a driven, dissipative steady state.

To sustain that circulation the pump must consume a source of free energy held away from equilibrium — in a cell, the hydrolysis of **ATP** (or an ion's electrochemical gradient), whose free energy multiplies into one of the rate constants and legitimately makes the loop product asymmetric.

*Check.* The forward/reverse ratio is $10^3$; the free energy dissipated per cycle is $k_BT\ln(1000) \approx 6.9\,k_BT$, comfortably less than the $\sim20\,k_BT$ that ATP hydrolysis delivers — so ATP can indeed pay for such a cycle. This is precisely the accounting behind molecular motors in [4.3](04-03-molecular-motors-ratchet.md). ✓

</details>

## Flashback

**From Lesson 3.6 (Electrostatics in salt water):** Physiological saline is about $150\ \mathrm{mM}$ monovalent salt. Using the room-temperature water approximation for the Debye screening length, $\lambda_D \approx \dfrac{0.30\ \mathrm{nm}}{\sqrt{I/\mathrm{M}}}$ with $I$ the ionic strength in molar, estimate $\lambda_D$ in a cell. What does it tell you about how far a charged ligand "feels" a receptor's charge? (Fresh variant — a physiological concentration.)

<details>
<summary>Solution</summary>

With $I = 0.15\ \mathrm{M}$,

$$\lambda_D \approx \frac{0.30\ \mathrm{nm}}{\sqrt{0.15}} = \frac{0.30}{0.387}\ \mathrm{nm} \approx 0.78\ \mathrm{nm}.$$

*Check.* The textbook value for physiological saline is $\lambda_D \approx 0.7\text{–}0.8\ \mathrm{nm}$ ✓ — under a nanometer, a couple of water diameters. Beyond that distance the salt cloud screens a charge almost completely, so a charged ligand only "feels" a receptor's bare electrostatics once it is within about a nanometer of contact. This is why electrostatic steering speeds up $k_{\text{on}}$ only over very short range, and why binding interfaces are dominated by short-range contacts rather than long-range Coulomb attraction. ✓

</details>

## Connections

- **Backward:** the equilibrium $K_d$ of [2.3](02-03-ligand-binding-occupancy.md) is revealed here as the *ratio of rates* $k_{\text{off}}/k_{\text{on}}$ — kinetics and thermodynamics agreeing — and the on-rate is capped by the diffusion-limited rate $4\pi D a$ of [1.4](01-04-einstein-relation.md). The off-rate's Boltzmann barrier factor $e^{-\Delta G^{\ddagger}/k_BT}$ is the $k_BT$ ruler from [`stat-mech`](../../stat-mech/syllabus.md).
- **Forward:** [4.2 Michaelis–Menten](04-02-michaelis-menten.md) stacks these mass-action steps into an enzyme cycle, where the composite constant $K_M$ plays $K_d$'s role; and the detailed-balance / Wegscheider constraint here is exactly what a motor must *break* to step directionally in [4.3](04-03-molecular-motors-ratchet.md).
- **Sideways (ODEs):** the rate equation $d[\mathrm{C}]/dt = k_{\text{on}}[\mathrm{A}][\mathrm{B}] - k_{\text{off}}[\mathrm{C}]$ is a first-order ODE, and its pseudo-first-order form $\dot y = a - by$ is the linear-relaxation equation solved in [`ode-refresher`](../../ode-refresher/syllabus.md) — the same exponential-approach math as RC-circuit charging and Newtonian cooling.

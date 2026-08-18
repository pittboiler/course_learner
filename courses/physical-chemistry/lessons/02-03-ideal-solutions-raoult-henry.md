# Physical Chemistry · Lesson 2.3: Ideal solutions: Raoult's and Henry's laws

> ⏱ ~15 min · Module 2: Phase equilibria, reactions, and solutions · Builds on: [2.1 Phase stability and one-component diagrams](02-01-phase-stability-one-component-diagrams.md), [1.5 Chemical potential](01-05-chemical-potential.md) · Unlocks: 2.4 (colligative properties)

## Why this matters

Almost nothing you care about is pure: seawater, blood, gasoline, the air dissolved in a lake, the ethanol in wine. To do thermodynamics on any of these you need one number per component — its **chemical potential** in the mixture, the escaping tendency you met in [1.5](01-05-chemical-potential.md). This lesson gets you that number by a beautifully simple trick: let the liquid sit under its own vapour, and *read the chemical potential off the vapour pressure*. Two limiting laws fall out — **Raoult's** (for the majority component, the solvent) and **Henry's** (for a trace component, the solute) — and together they are the foundation for colligative properties ([2.4](02-04-colligative-properties.md)), distillation and binary diagrams ([2.5](02-05-binary-phase-diagrams.md)), and every solution equilibrium after.

## The idea

Put a liquid mixture in a closed box. Molecules evaporate until the vapour pushes back as fast as they leave — equilibrium. At that point each species has the *same escaping tendency* in the liquid as in the gas above it. Since a gas's escaping tendency is just its partial pressure, **measuring the vapour pressure of each component tells you its chemical potential in the liquid.** Vapour pressure is a chemical-potential meter.

Now, what does adding a second component do to a molecule's urge to escape? Two clean limits:

- **The solvent (the majority).** Dilute it a little and its molecules mostly still see *their own kind* as neighbours — the same environment as in the pure liquid, just fewer of them per unit volume. So its vapour pressure drops in simple proportion to how much of it is left: $p_A = x_A p_A^*$. That's **Raoult's law**. An ideal solution is one where *both* components feel this way across the whole range — because A–B interactions are as friendly as A–A and B–B.
- **The solute (a trace).** A lone solute molecule is surrounded entirely by *solvent*, an environment nothing like pure solute. Its escaping tendency is still proportional to how much of it there is — but the constant of proportionality is set by the solvent it's drowning in, not by the pure solute. So $p_B = x_B K_B$ with an empirical slope $K_B$ (the **Henry constant**) that has nothing to do with $p_B^*$. That's **Henry's law**.

Same functional shape — pressure linear in mole fraction — but different slopes, because the solvent and the solute live in different neighbourhoods.

## The formal version

**Vapour–liquid equilibrium fixes the chemical potential.** Let component $i$ have mole fraction $x_i$ in the liquid and partial vapour pressure $p_i$ above it. At equilibrium the chemical potentials match ([1.5](01-05-chemical-potential.md)):

$$\mu_i^{\text{liq}} = \mu_i^{\text{vap}}.$$

For the vapour treated as a perfect gas, $\mu_i^{\text{vap}} = \mu_i^{\ominus} + RT\ln(p_i/p^{\ominus})$, where $p^{\ominus}$ is the standard pressure (1 bar) and $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$. Apply this both to the mixture (pressure $p_i$) and to the *pure* liquid $i$ (pressure $p_i^*$, mole fraction 1) and subtract to cancel the reference:

$$\boxed{\;\mu_i = \mu_i^* + RT\ln\frac{p_i}{p_i^*}\;}$$

*In words: a component's chemical potential in the liquid equals its pure-liquid value $\mu_i^*$ plus a correction set by how much its vapour pressure has dropped.* Here $\mu_i^*$ is the chemical potential of the pure liquid — a well-defined reference. The whole game is now: what is $p_i$?

**Raoult's law (ideal solution / solvent).**

$$p_i = x_i\,p_i^* \qquad\Longrightarrow\qquad \mu_i = \mu_i^* + RT\ln x_i.$$

*In words: each component's vapour pressure is its pure value scaled by its mole fraction; the chemical potential drops by $RT\ln x_i$ (always negative, since $x_i<1$).* A solution obeying this for all $x_i$ is an **ideal solution** — the model for A and B chemically alike (benzene/toluene, hexane/heptane).

**Henry's law (ideal-dilute solution / solute).** For a solute B at small $x_B$,

$$p_B = x_B\,K_B,$$

where $K_B$ (units of pressure) is the **Henry constant**, found by experiment — the slope of the real $p_B$-vs-$x_B$ curve *extrapolated from the dilute end*. Crucially $K_B \neq p_B^*$. The solute's chemical potential is still $\mu_B = \mu_B^* + RT\ln(p_B/p_B^*) = \mu_B^{\bullet} + RT\ln x_B$, where the constant $\mu_B^{\bullet} = \mu_B^* + RT\ln(K_B/p_B^*)$ absorbs the Henry/Raoult mismatch into a new (hypothetical) reference state.

*In words: a dilute solute's vapour pressure is also linear in its mole fraction, but the proportionality constant is the empirical $K_B$, not the pure-solute vapour pressure.* An **ideal-dilute solution** is the realistic middle ground: the solvent obeys Raoult, the solute obeys Henry.

**Thermodynamics of ideal mixing.** Mix $n_A$ of A with $n_B$ of B, both ideal, at constant $T,p$. Using $\mu_i = \mu_i^* + RT\ln x_i$ and $G = \sum n_i\mu_i$, the change on mixing (final minus the two pure liquids) is

$$\Delta_{\text{mix}}G = nRT\sum_i x_i\ln x_i \;<\;0, \qquad n = n_A+n_B.$$

Because every $\ln x_i<0$, mixing is always spontaneous. Differentiating ($S=-(\partial G/\partial T)_p$, and the sum has an explicit $T$):

$$\Delta_{\text{mix}}S = -\,nR\sum_i x_i\ln x_i \;>\;0, \qquad \Delta_{\text{mix}}H = \Delta_{\text{mix}}G + T\Delta_{\text{mix}}S = 0.$$

*In words: ideal mixing is driven entirely by entropy — molecules spreading into more configurations — with zero heat of mixing, because A–B contacts are energetically identical to A–A and B–B.* That $\Delta_{\text{mix}}S = -nR\sum x_i\ln x_i$ is the same configurational entropy the Boltzmann counting gives in [stat mech](../../stat-mech/syllabus.md) — the microscopic bridge under this macroscopic result.

**Real solutions deviate.** If A–B interactions are *less* favourable than A–A/B–B, molecules escape more eagerly: $p_i > x_i p_i^*$, a **positive deviation** (and $\Delta_{\text{mix}}H>0$). If A–B attractions are *stronger* (e.g. hydrogen bonding, acetone/chloroform), escape is suppressed: $p_i < x_i p_i^*$, a **negative deviation** ($\Delta_{\text{mix}}H<0$). Raoult and Henry survive as the two tangent limits: every real component obeys Raoult as $x_i\to1$ and Henry as $x_i\to0$.

## Picture

![Partial-pressure vs mole-fraction plot: two straight blue Raoult lines (solvent A falling to zero, solute B rising to its pure value) and the grey total-pressure line, with the coral dashed Henry tangent leaving the origin at a steeper slope K_B than the Raoult-B line](assets/02-03-fig1.svg)

The blue lines are the ideal (Raoult) partial pressures; their sum is the grey total. The coral dashed line is Henry's law for the solute — tangent to the *real* solute curve at the dilute end, with slope $K_B > p_B^*$ here (a positive deviation). Solvent-rich (right for B, or left for A) → Raoult; solute-dilute → Henry.

## Worked examples

**Example 1 (Raoult, mechanical).** An ideal solution of A and B has $x_A = 0.4$, with pure vapour pressures $p_A^* = 90\ \mathrm{kPa}$, $p_B^* = 30\ \mathrm{kPa}$. Then $x_B = 0.6$, and

$$p_A = x_A p_A^* = 0.4(90) = 36\ \mathrm{kPa}, \qquad p_B = x_B p_B^* = 0.6(30) = 18\ \mathrm{kPa},$$

so the total pressure is $p = 54\ \mathrm{kPa}$. By Dalton's law the vapour composition is $y_A = p_A/p = 36/54 = 0.667$ — the vapour is richer in the more volatile component A than the liquid ($0.4$) was. That enrichment is exactly what distillation exploits ([2.5](02-05-binary-phase-diagrams.md)).

**Example 2 (why $K_B\neq p_B^*$).** Fizzy water: $\ce{CO2}$ dissolved under pressure. Pure liquid $\ce{CO2}$ at 25 °C would have a vapour pressure of ~6400 kPa — but that number describes $\ce{CO2}$ molecules surrounded by *other $\ce{CO2}$*. In water, a $\ce{CO2}$ molecule is caged by $\ce{H2O}$; its escaping tendency is governed by the measured Henry constant $K_{\ce{CO2}}\approx 1.67\times10^5\ \mathrm{kPa}$, almost 30× larger. Using the *wrong* constant ($p_B^*$ instead of $K_B$) would misestimate the dissolved gas by that factor. The environment, not the pure-substance identity, sets the slope.

## Watch out

- **You might think $K_B$ is just $p_B^*$ for the solute.** It isn't — $K_B$ is a *different, empirical* constant because the solute's neighbours are solvent molecules. Only the solvent (own-kind neighbours, $x\to1$) gets the pure-substance slope $p^*$.
- **You might think $\Delta_{\text{mix}}H = 0$ means "no interactions."** It means A–B interactions are *equal* to the average of A–A and B–B, so the enthalpy bookkeeping cancels. Ideal mixing still has plenty of intermolecular forces; they just balance.
- **You might drop the sign and expect $\Delta_{\text{mix}}G>0$.** Every $\ln x_i$ is negative, so $\Delta_{\text{mix}}G<0$ always — mixing two ideal liquids is unconditionally spontaneous, purely on entropy.
- **Mole fraction, not concentration, in these laws.** Raoult and Henry are written in $x_i$. Converting to molarity/molality is a separate step (Problem 3).

## One-liner

> Vapour pressure is a chemical-potential meter: the solvent reads $p_A = x_A p_A^*$ (Raoult) and a dilute solute reads $p_B = x_B K_B$ (Henry, $K_B\neq p_B^*$), because each escapes into a different neighbourhood.

## Problems

**P1 (🟢)** An ideal binary solution of A and B has liquid mole fraction $x_A = 0.30$. The pure-component vapour pressures at this temperature are $p_A^* = 80\ \mathrm{kPa}$ and $p_B^* = 20\ \mathrm{kPa}$. Find the two partial pressures, the total vapour pressure, and the mole fractions of A and B **in the vapour**.

**P2 (🟡)** You mix $3.0\ \mathrm{mol}$ of liquid A with $1.0\ \mathrm{mol}$ of liquid B to form an ideal solution at $298\ \mathrm{K}$. Compute $\Delta_{\text{mix}}G$ and $\Delta_{\text{mix}}S$, and state $\Delta_{\text{mix}}H$. Confirm $\Delta_{\text{mix}}G = \Delta_{\text{mix}}H - T\Delta_{\text{mix}}S$.

**P3 (🔴)** Air over water at 25 °C: the partial pressure of $\ce{O2}$ is $p_{\ce{O2}} = 0.21\ \mathrm{atm}$. The mole-fraction Henry constant is $K_{\ce{O2}} = 4.3\times10^4\ \mathrm{atm}$. (a) Find the mole fraction of dissolved $\ce{O2}$, then convert to a concentration in mol/L and mg/L (take 1 L of water $= 55.5\ \mathrm{mol}$, $M_{\ce{O2}} = 32\ \mathrm{g/mol}$). (b) In one sentence, why is it wrong to use Raoult's law (with a pure-$\ce{O2}$ vapour pressure) here?

<details>
<summary>Solutions</summary>

**P1** With $x_A = 0.30$, $x_B = 0.70$, Raoult's law gives

$$p_A = x_A p_A^* = 0.30(80) = 24\ \mathrm{kPa}, \qquad p_B = x_B p_B^* = 0.70(20) = 14\ \mathrm{kPa},$$

$$p = p_A + p_B = 38\ \mathrm{kPa}.$$

Dalton's law for the vapour: $y_A = p_A/p = 24/38 = 0.63$, $y_B = 14/38 = 0.37$.

*Check.* $y_A + y_B = 1$ ✓, and $y_A = 0.63 > x_A = 0.30$ — the vapour is enriched in the more volatile A, as it must be. ✓

**P2** Total $n = 4.0\ \mathrm{mol}$; $x_A = 0.75$, $x_B = 0.25$. The mixing sum is

$$\sum_i x_i\ln x_i = 0.75\ln 0.75 + 0.25\ln 0.25 = 0.75(-0.2877) + 0.25(-1.3863) = -0.5623.$$

With $nRT = 4.0 \times 8.314 \times 298 = 9910\ \mathrm{J}$:

$$\Delta_{\text{mix}}G = nRT\sum x_i\ln x_i = 9910(-0.5623) = -5.57\times10^{3}\ \mathrm{J} = -5.57\ \mathrm{kJ}.$$

$$\Delta_{\text{mix}}S = -nR\sum x_i\ln x_i = -(4.0\times8.314)(-0.5623) = +18.7\ \mathrm{J\,K^{-1}}.$$

Ideal: $\Delta_{\text{mix}}H = 0$.

*Check.* $\Delta_{\text{mix}}H - T\Delta_{\text{mix}}S = 0 - 298(18.7) = -5.57\times10^{3}\ \mathrm{J} = \Delta_{\text{mix}}G$ ✓. Both signs are right: mixing is spontaneous ($\Delta G<0$) and entropy-driven ($\Delta S>0$). ✓

**P3** (a) Henry's law $p_{\ce{O2}} = x_{\ce{O2}}K_{\ce{O2}}$ inverts to

$$x_{\ce{O2}} = \frac{p_{\ce{O2}}}{K_{\ce{O2}}} = \frac{0.21}{4.3\times10^4} = 4.9\times10^{-6}.$$

In 1 L of water ($55.5\ \mathrm{mol}$, and $x_{\ce{O2}}\approx n_{\ce{O2}}/n_{\text{water}}$ since it's so dilute),

$$n_{\ce{O2}} = x_{\ce{O2}}\times 55.5 = 2.7\times10^{-4}\ \mathrm{mol} \;\Rightarrow\; 2.7\times10^{-4}\ \mathrm{mol/L},$$

$$\text{mass} = 2.7\times10^{-4}\times 32 = 8.7\times10^{-3}\ \mathrm{g} = 8.7\ \mathrm{mg/L}.$$

(b) Because the dissolved $\ce{O2}$ molecules are surrounded by *water*, not by other $\ce{O2}$ — their escaping tendency is set by the empirical Henry constant $K_{\ce{O2}}$, not by a pure-$\ce{O2}$ vapour pressure $p_{\ce{O2}}^*$ (which at 25 °C isn't even defined, since that's above $\ce{O2}$'s critical temperature).

*Check.* ~8.7 mg/L is the textbook dissolved-oxygen level of air-saturated water at 25 °C — the number aquarium and wastewater engineers quote. ✓

</details>

## Flashback

**From Lesson 2.2 (Clausius–Clapeyron):** A liquid has a vapour pressure of $60.0\ \mathrm{kPa}$ at $350\ \mathrm{K}$ and an enthalpy of vaporization $\Delta_{\text{vap}}H = 30.0\ \mathrm{kJ/mol}$ (assumed constant). Estimate its vapour pressure at $370\ \mathrm{K}$.

<details>
<summary>Solution</summary>

The Clausius–Clapeyron equation:

$$\ln\frac{p_2}{p_1} = -\frac{\Delta_{\text{vap}}H}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right).$$

With $T_1 = 350$, $T_2 = 370\ \mathrm{K}$:

$$\frac{1}{370}-\frac{1}{350} = 0.0027027 - 0.0028571 = -1.544\times10^{-4}\ \mathrm{K^{-1}},$$

$$\ln\frac{p_2}{p_1} = -\frac{30000}{8.314}(-1.544\times10^{-4}) = -3608(-1.544\times10^{-4}) = 0.557.$$

So $p_2 = 60.0\,e^{0.557} = 60.0(1.746) = 105\ \mathrm{kPa}$.

*Check.* Higher $T$ gives higher vapour pressure ✓, and it climbs steeply (nearly doubling over 20 K) — the exponential temperature dependence that also drives the boiling point. This is the same $\mu^{\text{liq}}=\mu^{\text{vap}}$ equilibrium as today's lesson, run along temperature instead of composition. ✓

</details>

## Connections

- **Backward:** the master relation $\mu_i = \mu_i^* + RT\ln(p_i/p_i^*)$ is [1.5](01-05-chemical-potential.md)'s chemical potential specialized to a real solution; the vapour–liquid equilibrium $\mu^{\text{liq}}=\mu^{\text{vap}}$ is the same equality [2.1](02-01-phase-stability-one-component-diagrams.md) used to draw phase boundaries. Raoult's ideal $\mu_i = \mu_i^* + RT\ln x_i$ is the activity-free limit of the fugacity/activity machinery from [1.6](01-06-fugacity-activity.md) (replace $x_i$ by the activity $a_i$ for real solutions).
- **Forward:** the solvent's lowered chemical potential $\mu_A = \mu_A^* + RT\ln x_A$ is *the* engine of [2.4 colligative properties](02-04-colligative-properties.md) — boiling-point elevation, freezing-point depression, osmosis all follow from that one $RT\ln x_A$. The Raoult total-pressure line and vapour enrichment feed the [2.5](02-05-binary-phase-diagrams.md) $T$–$x$ diagrams and distillation.
- **Sideways:** $\Delta_{\text{mix}}S = -nR\sum x_i\ln x_i$ is the configurational (mixing) entropy that Boltzmann's $S=k_B\ln W$ counting delivers in [stat mech](../../stat-mech/syllabus.md) — the same $-\sum x_i\ln x_i$ that appears as the Shannon/Gibbs entropy of a distribution. Henry's law is also the microscopic basis of the gas-solubility facts introduced in [general chemistry](../../general-chemistry/lessons/03-01-gases-ideal-gas-law-kinetic-theory.md).

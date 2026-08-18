# Classical Thermodynamics · Lesson 2.3: Entropy

> ⏱ ~15 min · Module 2: Engines, the second law & entropy · Builds on: [2.2 Carnot efficiency & the second law](02-02-carnot-efficiency-second-law.md) · Unlocks: [3.1 The four thermodynamic potentials](03-01-thermodynamic-potentials.md)

## Why this matters

The second law told you *which way* things go — heat flows hot-to-cold, engines can't be perfect — but it told you in words (Kelvin, Clausius). Words don't compute. **Entropy** turns the second law into an *equation* you can evaluate: a single number $S$, attached to each equilibrium state, that never decreases for an isolated system. With it you can rank two states, predict the direction of any process, and put a joule figure on *how much usable work you threw away* by letting something happen irreversibly. It's also the exact quantity that [stat-mech](../../stat-mech/syllabus.md) will later reveal as a headcount of microscopic arrangements — the bridge between the macroscopic laws you've been learning and the atoms underneath.

## The idea

Here's the trick Carnot handed us. In [2.2](02-02-carnot-efficiency-second-law.md) the reversible Carnot engine obeyed $Q_h/T_h = Q_c/T_c$ — the heats it swapped, each divided by the reservoir temperature, *balanced*. Rewrite that as: the heat-in over $T$ minus the heat-out over $T$ is zero. Go around the whole reversible cycle and the running total of $\delta Q/T$ comes back to zero.

But "a quantity whose total change around any closed loop is zero" is exactly what it means to be a **state function** — like altitude on a hiking map. Walk any loop and you end at your starting altitude; the *change* between two points depends only on the points, not the trail. So $\delta Q_\text{rev}/T$ isn't just heat — it's the change in some hidden state variable. Call it **entropy**, $S$.

That single fact — *entropy is a property of the state, not the path* — is the whole engine of this lesson. Heat $Q$ and work $W$ depend on how you got there; $S$, like energy $U$, does not. And it buys you a superpower: to find $\Delta S$ for a messy, violent, **irreversible** process, you don't touch the real process at all. You invent *any* gentle reversible path between the same two endpoints and integrate $\delta Q_\text{rev}/T$ along it. Same endpoints, same $\Delta S$.

*(Preview of the deep reason, from [stat-mech](../../stat-mech/syllabus.md): $S = k_B \ln \Omega$, where $\Omega$ counts the microscopic arrangements consistent with the macrostate. Entropy rises because there are overwhelmingly more ways to be spread out than concentrated. We'll take that on faith here and earn it later.)*

## The formal version

**Definition of entropy.** For a reversible process at temperature $T$ (kelvin),

$$dS = \frac{\delta Q_\text{rev}}{T}, \qquad [S] = \text{J/K}.$$

*In words: the entropy change is the reversibly-exchanged heat divided by the temperature it's exchanged at.* The subscript "rev" matters: $\delta Q$ is an inexact differential (path-dependent, hence the $\delta$ not $d$), but dividing the *reversible* heat by $T$ produces an **exact** differential $dS$ — a genuine state change. $S$ is defined only up to a constant, which is all we need for differences $\Delta S = \int \delta Q_\text{rev}/T$.

**Clausius inequality.** For *any* cycle whatsoever,

$$\oint \frac{\delta Q}{T} \le 0, \qquad \text{(= 0 reversible, < 0 irreversible).}$$

*In words: sum up heat-over-temperature around any loop and you never get a positive number; a real, irreversible loop comes up short.* This is the second law in one line. The reversible equality is what let us call $S$ a state function in the first place.

**The second law as an equation.** Apply Clausius to a system plus everything it touches — its surroundings — treating the pair as one isolated "universe." Then

$$\boxed{\;\Delta S_\text{univ} = \Delta S_\text{sys} + \Delta S_\text{surr} \ge 0,\;}$$

with equality **only** for a reversible process. *In words: the total entropy of an isolated system can rise or hold steady, but never fall.* Note the sleight of hand that makes this usable: $\Delta S_\text{sys}$ you get from a reversible path between the endpoints; $\Delta S_\text{surr}$ you get from the heat the surroundings *actually* absorbed (usually a big reservoir at fixed $T$, so $\Delta S_\text{surr} = Q_\text{surr}/T$).

**Four canonical results** you should be able to produce cold:

| Process | $\Delta S$ | Note |
|---|---|---|
| Heat $Q$ into a reservoir at fixed $T$ | $Q/T$ | reservoir stays at $T$, so just divide |
| Isothermal ideal-gas expansion $V_1\!\to\!V_2$ | $nR\ln(V_2/V_1)$ | derived below |
| **Free expansion** into vacuum $V_1\!\to\!V_2$ | $nR\ln(V_2/V_1)$ | same as above, yet $Q=0$! |
| Two equal-$C$ bodies equilibrating $T_h,T_c$ | $C\ln\!\dfrac{T_f^2}{T_h T_c}>0$ | $T_f=\tfrac{T_h+T_c}{2}$ |

Here $n$ is moles, $R = 8.314\ \text{J/(mol·K)}$ the gas constant, $C$ a heat capacity (J/K).

## Picture

![A Carnot cycle drawn in the temperature–entropy plane as a rectangle: the top edge is the hot isotherm at T_h where heat Q_h = T_h ΔS enters, the bottom edge the cold isotherm at T_c where Q_c = T_c ΔS leaves, the vertical sides are adiabats, and the enclosed area equals the net work.](assets/02-03-fig1.svg)

On a $T$–$S$ diagram the Carnot cycle — a mess of curves on a $P$–$V$ plot — becomes a clean **rectangle**. Isotherms are horizontal (constant $T$), adiabats are vertical (reversible + no heat $\Rightarrow dS = 0$, constant $S$). Heat absorbed on the top isotherm is $Q_h = T_h\,\Delta S$ (the area under the top edge); heat dumped below is $Q_c = T_c\,\Delta S$. The enclosed area $(T_h - T_c)\,\Delta S = Q_h - Q_c$ is the net heat, which by the first law over a cycle equals the net work. Efficiency $\eta = W/Q_h = (T_h-T_c)/T_h = 1 - T_c/T_h$ falls out by *reading the rectangle* — no calculus.

## Worked examples

**Example 1 (the definition in action — isothermal expansion).** One mole of ideal gas expands reversibly and isothermally at $T = 300\ \text{K}$ from $V_1$ to $V_2 = 3V_1$. Find $\Delta S$ of the gas.

Isothermal means $\Delta U = 0$ (ideal-gas energy depends on $T$ alone), so the first law gives $\delta Q_\text{rev} = \delta W = P\,dV$, and with $P = nRT/V$:

$$\Delta S = \int \frac{\delta Q_\text{rev}}{T} = \int_{V_1}^{V_2} \frac{P\,dV}{T} = \int_{V_1}^{V_2} \frac{nR}{V}\,dV = nR\ln\frac{V_2}{V_1} = (1)(8.314)\ln 3 \approx 9.13\ \text{J/K}.$$

The surroundings (a reservoir at $300\ \text{K}$) *supplied* that heat $Q = T\Delta S = 300 \times 9.13 \approx 2740\ \text{J}$, so $\Delta S_\text{surr} = -2740/300 = -9.13\ \text{J/K}$. Total: $\Delta S_\text{univ} = 9.13 - 9.13 = 0$ — as it must be, because the process was reversible.

**Example 2 (why you'd care — free expansion, the signature of irreversibility).** Now the *same* mole of gas doubles-plus into the *same* final volume $3V_1$, but by having a partition yanked out so it rushes into vacuum. No piston pushes anything ($W = 0$), the walls are insulated ($Q = 0$), so $\Delta U = 0$ and — for an ideal gas — $T$ doesn't even change.

You might expect $\Delta S = 0$ since $Q = 0$. **Wrong.** $S$ is a state function, and the endpoints (same $T$, volume $V_1 \to 3V_1$) are *identical* to Example 1. So you compute along the *reversible* path anyway:

$$\Delta S_\text{sys} = nR\ln\frac{V_2}{V_1} = 9.13\ \text{J/K}.$$

This time the surroundings exchanged nothing ($Q=0$), so $\Delta S_\text{surr} = 0$ and

$$\Delta S_\text{univ} = 9.13 + 0 = 9.13\ \text{J/K} > 0.$$

The universe's entropy jumped *with no heat flowing at all*. That positive $\Delta S_\text{univ}$ with $Q = 0$ is the fingerprint of an irreversible process — and the reason you can never suck the gas back into half the box for free.

## Watch out

- **You might think $Q = 0$ implies $\Delta S = 0$.** Only for a *reversible* adiabat. Free expansion is adiabatic ($Q=0$) yet has $\Delta S > 0$ — because $dS = \delta Q_\text{rev}/T$ uses the heat along a *reversible* replacement path, not the actual (zero) heat.
- **You might use the real irreversible heat in the integral.** Never. $\delta Q_\text{rev}/T$ demands a reversible path. For the *system's* $\Delta S$, invent one between the endpoints. For the *surroundings'* $\Delta S$, use the heat they actually absorbed (a reservoir absorbs it reversibly on its own terms, so $Q_\text{surr}/T$ is fine).
- **You might think entropy of the system can't decrease.** It can — a gas compressed or cooled has $\Delta S_\text{sys} < 0$. The law only forbids $\Delta S_\text{univ} < 0$; the surroundings must gain at least as much as the system loses.

## One-liner

> Because $\oint \delta Q_\text{rev}/T = 0$, entropy $S$ is a state function with $dS = \delta Q_\text{rev}/T$; compute $\Delta S$ for anything — even a violent irreversible process — along an invented reversible path, and for the universe it only ever goes up.

## Problems

**P1 (🟢)** Two moles of ideal gas undergo a free expansion into vacuum, doubling their volume. No heat enters and no work is done. Compute $\Delta S$ of the gas, and state $\Delta S_\text{univ}$.

**P2 (🟡)** A reservoir at $T_h = 500\ \text{K}$ conducts $Q = 1000\ \text{J}$ directly to a reservoir at $T_c = 300\ \text{K}$ (no engine in between). (a) Compute $\Delta S_\text{univ}$. (b) A Carnot engine fed the same 1000 J from the hot side would have delivered work $W = \eta_\text{C} Q$. Compute that forfeited work, and show it equals $T_c\,\Delta S_\text{univ}$ — the entropy you generated, priced in lost joules.

**P3 (🔴, optional)** Two identical blocks, each with heat capacity $C = 100\ \text{J/K}$, start at $T_h = 400\ \text{K}$ and $T_c = 200\ \text{K}$. Placed in contact (insulated from everything else), they equilibrate. Find the final temperature and $\Delta S_\text{univ}$, and argue it's positive for *any* unequal starting temperatures.

<details>
<summary>Solutions</summary>

**P1** Free expansion has $Q = W = 0 \Rightarrow \Delta U = 0 \Rightarrow \Delta T = 0$ (ideal gas). Use the reversible isothermal path between the same endpoints:

$$\Delta S_\text{gas} = nR\ln\frac{V_2}{V_1} = (2)(8.314)\ln 2 \approx 11.5\ \text{J/K}.$$

The surroundings exchange no heat, so $\Delta S_\text{surr} = 0$ and $\Delta S_\text{univ} = 11.5\ \text{J/K} > 0$.

*Check.* Units: $\text{mol} \cdot \text{J/(mol·K)} = \text{J/K}$ ✓. Sign: expansion increases accessible volume, so $\Delta S > 0$ ✓. Doubling ($\ln 2$) gives less than the tripling ($\ln 3$) of Example 1, as expected. ✓

**P2** (a) The hot reservoir loses $Q$ at $T_h$; the cold gains $Q$ at $T_c$. Reservoirs are huge, so each exchange is at fixed $T$:

$$\Delta S_\text{univ} = -\frac{Q}{T_h} + \frac{Q}{T_c} = 1000\left(\frac{1}{300} - \frac{1}{500}\right) = 1000(0.003333 - 0.002000) \approx 1.33\ \text{J/K} > 0.$$

(b) Carnot efficiency $\eta_\text{C} = 1 - T_c/T_h = 1 - 300/500 = 0.4$, so the forfeited work is

$$W = \eta_\text{C}\,Q = 0.4 \times 1000 = 400\ \text{J}.$$

And $T_c\,\Delta S_\text{univ} = 300 \times 1.33 = 400\ \text{J}$ — identical. (Algebraically $T_c \Delta S_\text{univ} = T_c Q(\tfrac{1}{T_c} - \tfrac{1}{T_h}) = Q(1 - T_c/T_h) = \eta_\text{C} Q$.)

*Check.* This is the Gouy–Stodola statement: lost work $= T_c\,\Delta S_\text{univ}$. Every unit of entropy you needlessly generate costs $T_c$ joules of work you can never recover. Letting heat "just flow" wasted 400 of the 1000 J. ✓

**P3** No heat leaves the pair, and equal $C$ means the final temperature is the average:

$$T_f = \frac{T_h + T_c}{2} = \frac{400 + 200}{2} = 300\ \text{K}.$$

Each block changes entropy by $\int C\,dT/T = C\ln(T_f/T_i)$. Summing:

$$\Delta S_\text{univ} = C\ln\frac{T_f}{T_h} + C\ln\frac{T_f}{T_c} = C\ln\frac{T_f^2}{T_h T_c} = 100\ln\frac{300^2}{400\cdot 200} = 100\ln\frac{90000}{80000} = 100\ln 1.125 \approx 11.8\ \text{J/K}.$$

Positive for any $T_h \ne T_c$: since $T_f = \tfrac{T_h+T_c}{2} \ge \sqrt{T_h T_c}$ (AM–GM), we get $T_f^2 \ge T_h T_c$, so the log is $\ge 0$, with equality only when $T_h = T_c$ (nothing happens).

*Check.* The hot block loses $C\ln(400/300) = -28.8\ \text{J/K}$; the cold gains $C\ln(300/200) = +40.5\ \text{J/K}$; net $+11.7\ \text{J/K}$ (rounding) ✓. The cold body's fractional temperature swing is larger, so its entropy gain dominates — the intuitive reason mixing is irreversible. ✓

</details>

## Flashback

**From Lesson 2.2 (Carnot efficiency & the second law):** A Carnot engine runs with its cold reservoir at $T_c = 290\ \text{K}$ and achieves efficiency $\eta = 0.25$. What is the hot-reservoir temperature $T_h$?

<details>
<summary>Solution</summary>

Carnot efficiency is $\eta = 1 - T_c/T_h$, so

$$\frac{T_c}{T_h} = 1 - \eta = 0.75 \quad\Longrightarrow\quad T_h = \frac{T_c}{0.75} = \frac{290}{0.75} \approx 387\ \text{K}.$$

*Check.* $T_h > T_c$ as required, and a modest $387\ \text{K}$ hot side gives a modest efficiency — you'd need a far hotter reservoir for high $\eta$. Verify: $1 - 290/387 = 1 - 0.749 \approx 0.25$ ✓.

</details>

## Connections

- **Backward:** entropy is *born* from [2.2](02-02-carnot-efficiency-second-law.md)'s Carnot relation $Q_h/T_h = Q_c/T_c$ — that balance is precisely $\oint \delta Q_\text{rev}/T = 0$, which is why $S$ exists. The reversible adiabats and isotherms you traced in [2.1](02-01-heat-engines-carnot-cycle.md) are the vertical and horizontal edges of the $T$–$S$ rectangle here.
- **Forward:** [3.1 The four thermodynamic potentials](03-01-thermodynamic-potentials.md) makes $S$ a *natural variable*: the combined first-and-second law $dU = T\,dS - P\,dV$ treats $S$ and $V$ as the independent handles on $U$, and every potential ($H, F, G$) is a repackaging of this. You can't write those potentials without today's $S$.
- **Sideways ([stat-mech](../../stat-mech/syllabus.md)):** the $S$ we defined operationally as $\int \delta Q_\text{rev}/T$ is the very same quantity Boltzmann writes as $S = k_B \ln \Omega$ — a count of microscopic states. "Entropy increases" becomes "the system drifts toward the macrostate realizable the most ways," and $\Delta S_\text{univ} > 0$ in free expansion is just: far more arrangements have the gas filling the box than crammed in half of it.

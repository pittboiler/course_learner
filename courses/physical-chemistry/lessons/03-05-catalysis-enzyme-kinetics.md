# Physical Chemistry · Lesson 3.5: Catalysis and enzyme kinetics

> ⏱ ~15 min · Module 3: Chemical kinetics · Builds on: [3.4 Arrhenius and transition-state theory](03-04-arrhenius-transition-state-theory.md), [3.3 Mechanisms: steady-state and pre-equilibrium](03-03-mechanisms-steady-state-pre-equilibrium.md) · Unlocks: [4.1 The Boltzmann distribution and the partition function](04-01-boltzmann-partition-function.md)

## Why this matters

Nearly every reaction your body runs at 37 °C would take years to happen on its own — an enzyme makes it go in milliseconds. Industrial ammonia, gasoline, and plastics all ride on catalysts. A catalyst is the single most powerful knob in kinetics because it attacks the one thing that dominates rate exponentially: the activation barrier from [3.4](03-04-arrhenius-transition-state-theory.md). This lesson closes Module 3 by turning that idea into the workhorse quantitative model of biochemistry — Michaelis–Menten kinetics — built entirely from the steady-state approximation you already know from [3.3](03-03-mechanisms-steady-state-pre-equilibrium.md).

## The idea

A **catalyst** is a substance that speeds up a reaction *without being consumed*. It doesn't shove the reactants harder; it opens a **different route** — a new mechanism with a **lower activation energy** $E_a$. Picture the reaction-coordinate barrier from [3.4](03-04-arrhenius-transition-state-theory.md): the catalyst digs a lower mountain pass between the same valleys. Because rate depends on $E_a$ through the Arrhenius factor $e^{-E_a/RT}$, shaving even 25 kJ/mol off the barrier can multiply the rate ten-thousand-fold.

Two things a catalyst does **not** do, and they matter:

1. **It doesn't move the valleys, only the pass.** Reactant and product energies are untouched, so $\Delta_r G$ and the equilibrium constant $K$ are *unchanged* — a callback to gen-chem thermodynamics and to [2.6](02-06-chemical-equilibrium-constant.md). A catalyst lowers the barrier for the forward and reverse directions by the **same** amount, so it accelerates both equally and just gets you to the *same* equilibrium *faster*. It changes kinetics, never thermodynamics.
2. **It's regenerated.** The catalyst is consumed in an early step and spat back out in a later one — a **catalytic cycle**. One catalyst molecule turns over substrate again and again.

Enzymes are nature's catalysts, and they have a signature behavior: pour in more substrate and the rate rises — but only up to a ceiling. Each enzyme can only work so fast; once every enzyme is busy, adding substrate does nothing. That "rises then saturates" curve is what Michaelis–Menten explains.

## The formal version

**Catalysis and the barrier.** From Arrhenius ([3.4](03-04-arrhenius-transition-state-theory.md)), $k = A e^{-E_a/RT}$. Replacing the mechanism with one of lower barrier $E_a' < E_a$ multiplies the rate by

$$\frac{k_{\text{cat}}}{k_{\text{uncat}}} \approx e^{(E_a - E_a')/RT}.$$

*In words: the rate boost is exponential in how much barrier you remove.* **Homogeneous catalysis:** catalyst and reactants share one phase (e.g. acid $\ce{H+}$ in solution). **Heterogeneous catalysis:** catalyst is a separate phase, reaction on its surface (e.g. $\ce{N2}$ + $\ce{H2}$ on solid iron in the Haber process).

**The Michaelis–Menten mechanism.** Enzyme $\ce{E}$ binds substrate $\ce{S}$ reversibly to a complex $\ce{ES}$, which either falls apart again or turns over to product $\ce{P}$, regenerating $\ce{E}$:

$$\ce{E + S <=>[k_1][k_{-1}] ES ->[k_2] E + P}.$$

The measured **rate** is the rate of product formation, $v = k_2[\ce{ES}]$. The trouble: $[\ce{ES}]$ is a fleeting intermediate we can't easily measure. Fix it with the **steady-state approximation** on $[\ce{ES}]$ (from [3.3](03-03-mechanisms-steady-state-pre-equilibrium.md)): the reactive intermediate is formed and destroyed so fast that its concentration barely changes, so set

$$\frac{d[\ce{ES}]}{dt} = k_1[\ce{E}][\ce{S}] - k_{-1}[\ce{ES}] - k_2[\ce{ES}] \approx 0.$$

*In words: $\ce{ES}$ is destroyed as fast as it's made.* Solving (full derivation is Problem 3) with the enzyme mass balance $[\ce{E}]_0 = [\ce{E}] + [\ce{ES}]$ gives the **Michaelis–Menten equation**:

$$\boxed{\,v = \frac{v_{\max}[\ce{S}]}{K_M + [\ce{S}]}\,}, \qquad v_{\max} = k_2[\ce{E}]_0, \qquad K_M = \frac{k_{-1}+k_2}{k_1}.$$

*In words: the rate is a hyperbola in substrate concentration, rising to a ceiling $v_{\max}$.* The two parameters:

- **$v_{\max}$** (units of rate, e.g. $\mathrm{\mu M\,s^{-1}}$): the maximum rate, reached when every enzyme is saturated. Note $v_{\max}=k_2[\ce{E}]_0$ scales with how much enzyme you have; $k_2$ alone is the **turnover number** (products per enzyme per second).
- **$K_M$**, the **Michaelis constant** (units of concentration): the $[\ce{S}]$ at which $v = \tfrac12 v_{\max}$ (set $[\ce{S}]=K_M$ above and check). A **small $K_M$** means half-speed is reached at low substrate — the enzyme grabs substrate tightly, i.e. **high affinity**.

**The two limits** (the whole shape in two sentences):

- **Low $[\ce{S}]\ll K_M$:** denominator $\approx K_M$, so $v \approx (v_{\max}/K_M)[\ce{S}]$ — **first-order in S**, rate rises linearly.
- **High $[\ce{S}]\gg K_M$:** denominator $\approx [\ce{S}]$, so $v \approx v_{\max}$ — **zero-order in S**, saturated, enzyme is the bottleneck.

**The Lineweaver–Burk plot.** Fitting a hyperbola by eye is hard, so invert the equation:

$$\frac{1}{v} = \frac{K_M}{v_{\max}}\,\frac{1}{[\ce{S}]} + \frac{1}{v_{\max}}.$$

*In words: plotting $1/v$ against $1/[\ce{S}]$ gives a straight line.* Read the parameters straight off it: the **$y$-intercept is $1/v_{\max}$**, the **slope is $K_M/v_{\max}$**, and the **$x$-intercept is $-1/K_M$**.

**Inhibition** (one line each). A **competitive** inhibitor resembles the substrate and binds the active site, blocking $\ce{S}$ — it raises the apparent $K_M$ (looks like weaker binding) but leaves $v_{\max}$ unchanged (enough substrate still outcompetes it). A **noncompetitive** inhibitor binds elsewhere and cripples turnover regardless of substrate — it lowers $v_{\max}$ but leaves $K_M$ unchanged.

## Picture

![Left: the Michaelis–Menten hyperbola of rate v against substrate concentration, rising and saturating at v_max, with K_M marked as the substrate concentration giving half of v_max. Right: the Lineweaver–Burk straight line of 1/v against 1/[S], with y-intercept 1/v_max, slope K_M/v_max, and x-intercept -1/K_M.](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — plug into the hyperbola).** An enzyme has $v_{\max} = 6.0\ \mathrm{\mu M\,s^{-1}}$ and $K_M = 2.0\ \mathrm{\mu M}$. At $[\ce{S}] = 2.0\ \mathrm{\mu M}$ (i.e. exactly $K_M$),

$$v = \frac{6.0 \times 2.0}{2.0 + 2.0} = \frac{12}{4.0} = 3.0\ \mathrm{\mu M\,s^{-1}} = \tfrac12 v_{\max},$$

confirming the defining fact: at $[\ce{S}] = K_M$ the rate is exactly half-maximal. Push to $[\ce{S}] = 18\ \mathrm{\mu M}$ ($=9K_M$) and $v = 6.0 \times 18/20 = 5.4\ \mathrm{\mu M\,s^{-1}}$ — already 90% of the ceiling. Saturation comes fast.

**Example 2 (why you'd care — reading a real experiment).** You can't measure $v_{\max}$ directly (you'd need infinite substrate), so you linearize. Suppose a Lineweaver–Burk fit gives $y$-intercept $0.020\ \mathrm{s\,\mu M^{-1}}$ and slope $0.10\ \mathrm{s}$. Then

$$v_{\max} = \frac{1}{\text{intercept}} = \frac{1}{0.020} = 50\ \mathrm{\mu M\,s^{-1}}, \qquad K_M = \text{slope}\times v_{\max} = 0.10 \times 50 = 5.0\ \mathrm{\mu M}.$$

Two numbers off a ruler give you the enzyme's speed *and* its substrate affinity — the payoff of straightening the hyperbola.

## Watch out

- **You might think a catalyst shifts equilibrium toward more product.** It doesn't — it lowers the forward and reverse barriers *equally*, so $K$ is untouched; you reach the *same* equilibrium mixture, just sooner. Anyone claiming a catalyst improves yield at equilibrium is mistaking kinetics for thermodynamics.
- **You might read a large $K_M$ as strong binding.** Backwards: $K_M$ is the substrate needed to hit *half*-speed, so a **large** $K_M$ means the enzyme needs lots of substrate — **weak** affinity. Small $K_M$ = tight binding.
- **You might treat $v_{\max}$ as a property of the enzyme alone.** It's $k_2[\ce{E}]_0$ — double the enzyme, double $v_{\max}$. The enzyme-intrinsic number is the turnover number $k_2$, not $v_{\max}$.

## One-liner

> A catalyst opens a lower-barrier detour (faster kinetics, same equilibrium); apply the steady-state approximation to the enzyme–substrate complex and that detour becomes the Michaelis–Menten hyperbola $v = v_{\max}[\ce{S}]/(K_M + [\ce{S}])$.

## Problems

**P1 (🟢)** An enzyme has $v_{\max} = 8.0\ \mathrm{\mu M\,min^{-1}}$ and $K_M = 4.0\ \mathrm{\mu M}$. (a) Find the rate $v$ at $[\ce{S}] = 12\ \mathrm{\mu M}$. (b) At what $[\ce{S}]$ does the reaction run at half its maximum rate?

**P2 (🟡)** A Lineweaver–Burk analysis of an enzyme gives a straight line with $y$-intercept $0.050\ \mathrm{min\,mM^{-1}}$ and slope $0.20\ \mathrm{min}$. Extract $v_{\max}$ and $K_M$.

**P3 (🔴)** Starting from the mechanism $\ce{E + S <=>[k_1][k_{-1}] ES ->[k_2] E + P}$, derive the Michaelis–Menten equation using the steady-state approximation on $[\ce{ES}]$ and the mass balance $[\ce{E}]_0 = [\ce{E}] + [\ce{ES}]$. Then state the low- and high-$[\ce{S}]$ limits and their reaction orders in $\ce{S}$.

<details>
<summary>Solutions</summary>

**P1** (a) Plug into the Michaelis–Menten equation:

$$v = \frac{v_{\max}[\ce{S}]}{K_M + [\ce{S}]} = \frac{8.0 \times 12}{4.0 + 12} = \frac{96}{16} = 6.0\ \mathrm{\mu M\,min^{-1}}.$$

(b) Half-maximal rate occurs, by definition of $K_M$, at $[\ce{S}] = K_M = 4.0\ \mathrm{\mu M}$. *Check:* $v = 8.0\times4.0/(4.0+4.0) = 32/8 = 4.0 = \tfrac12 v_{\max}$ ✓.

**P2** The Lineweaver–Burk line is $\dfrac1v = \dfrac{K_M}{v_{\max}}\dfrac{1}{[\ce{S}]} + \dfrac{1}{v_{\max}}$, so the $y$-intercept is $1/v_{\max}$ and the slope is $K_M/v_{\max}$:

$$v_{\max} = \frac{1}{\text{intercept}} = \frac{1}{0.050\ \mathrm{min\,mM^{-1}}} = 20\ \mathrm{mM\,min^{-1}},$$
$$K_M = \text{slope}\times v_{\max} = 0.20\ \mathrm{min} \times 20\ \mathrm{mM\,min^{-1}} = 4.0\ \mathrm{mM}.$$

*Check via units:* slope/intercept $= (0.20\ \mathrm{min})/(0.050\ \mathrm{min\,mM^{-1}}) = 4.0\ \mathrm{mM} = K_M$ ✓.

**P3** *Rate of product formation.* Product comes only from the $k_2$ step:

$$v = \frac{d[\ce{P}]}{dt} = k_2[\ce{ES}].$$

*Steady state on the intermediate.* $\ce{ES}$ is made by the forward binding step and destroyed by dissociation ($k_{-1}$) and turnover ($k_2$):

$$\frac{d[\ce{ES}]}{dt} = k_1[\ce{E}][\ce{S}] - k_{-1}[\ce{ES}] - k_2[\ce{ES}] = 0.$$

Solve for $[\ce{ES}]$:

$$k_1[\ce{E}][\ce{S}] = (k_{-1}+k_2)[\ce{ES}] \;\Longrightarrow\; [\ce{ES}] = \frac{k_1[\ce{E}][\ce{S}]}{k_{-1}+k_2} = \frac{[\ce{E}][\ce{S}]}{K_M}, \quad K_M \equiv \frac{k_{-1}+k_2}{k_1}.$$

*Eliminate free enzyme with the mass balance* $[\ce{E}] = [\ce{E}]_0 - [\ce{ES}]$:

$$[\ce{ES}] = \frac{([\ce{E}]_0 - [\ce{ES}])[\ce{S}]}{K_M} \;\Longrightarrow\; K_M[\ce{ES}] = [\ce{E}]_0[\ce{S}] - [\ce{ES}][\ce{S}].$$

Collect the $[\ce{ES}]$ terms:

$$[\ce{ES}]\,(K_M + [\ce{S}]) = [\ce{E}]_0[\ce{S}] \;\Longrightarrow\; [\ce{ES}] = \frac{[\ce{E}]_0[\ce{S}]}{K_M + [\ce{S}]}.$$

*Substitute back into $v = k_2[\ce{ES}]$* and write $v_{\max} \equiv k_2[\ce{E}]_0$:

$$v = k_2\frac{[\ce{E}]_0[\ce{S}]}{K_M + [\ce{S}]} = \frac{v_{\max}[\ce{S}]}{K_M + [\ce{S}]}. \qquad\blacksquare$$

*Limits.* Low substrate, $[\ce{S}]\ll K_M$: drop $[\ce{S}]$ in the denominator, $v \approx (v_{\max}/K_M)[\ce{S}]$ — **first-order in $\ce{S}$**. High substrate, $[\ce{S}]\gg K_M$: drop $K_M$, $v \approx v_{\max}$ — **zero-order in $\ce{S}$** (saturated). The crossover is at $[\ce{S}] = K_M$, where $v = \tfrac12 v_{\max}$.

</details>

## Flashback

**From Lesson 3.4 (Arrhenius and transition-state theory):** An uncatalyzed reaction has activation energy $E_a = 75\ \mathrm{kJ/mol}$. A catalyst provides an alternate path with $E_a' = 50\ \mathrm{kJ/mol}$. Assuming the pre-exponential factor $A$ is unchanged, by what factor does the catalyst speed the reaction at body temperature, $T = 310\ \mathrm{K}$? (Use $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$.)

<details>
<summary>Solution</summary>

The pre-exponential factors cancel in the ratio, leaving only the barrier difference in the Arrhenius exponents:

$$\frac{k_{\text{cat}}}{k_{\text{uncat}}} = \frac{A e^{-E_a'/RT}}{A e^{-E_a/RT}} = \exp\!\left(\frac{E_a - E_a'}{RT}\right).$$

The barrier drop is $E_a - E_a' = 75 - 50 = 25\ \mathrm{kJ/mol} = 2.5\times10^4\ \mathrm{J/mol}$. Then

$$\frac{E_a - E_a'}{RT} = \frac{2.5\times10^4}{8.314 \times 310} = \frac{2.5\times10^4}{2577} = 9.70,$$

$$\frac{k_{\text{cat}}}{k_{\text{uncat}}} = e^{9.70} \approx 1.6\times10^4.$$

*Check.* A 25 kJ/mol cut gives a ~16,000-fold speedup — the exponential sensitivity of rate to the barrier is exactly why catalysts are so potent. Note the equilibrium constant is *unaffected*: the catalyst lowers the reverse barrier by the same 25 kJ/mol, so $K = k_{\text{fwd}}/k_{\text{rev}}$ is unchanged. ✓

</details>

## Connections

- **Backward:** the whole lesson rests on [3.4](03-04-arrhenius-transition-state-theory.md)'s Arrhenius barrier (a catalyst lowers $E_a$) and [3.3](03-03-mechanisms-steady-state-pre-equilibrium.md)'s steady-state approximation (applied to $[\ce{ES}]$). "Catalyst doesn't change $K$" is [2.6](02-06-chemical-equilibrium-constant.md) and gen-chem thermodynamics — see the [taste of kinetics](../../general-chemistry/lessons/04-03-taste-of-kinetics.md) for where you first met catalysts.
- **Forward:** this closes Module 3 (kinetics). Module 4 pivots to *why* rates and equilibria have the temperature dependence they do — starting with [4.1 the Boltzmann distribution and partition function](04-01-boltzmann-partition-function.md), which puts the $e^{-E_a/RT}$ factor on a molecular-population footing: the fraction of molecules with enough energy to clear the barrier.
- **Sideways (biochemistry / applied math):** Michaelis–Menten is a saturating-response law that recurs far beyond enzymes — Langmuir adsorption on a catalyst surface, receptor–ligand binding, even Monod growth in ecology all share the exact form $y = y_{\max}x/(K+x)$. Recognize the hyperbola and you recognize a rate-limited resource being shared.

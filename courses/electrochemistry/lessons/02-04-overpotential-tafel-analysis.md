# Electrochemistry · Lesson 2.4: Overpotential regimes & Tafel analysis

> ⏱ ~15 min · Module 2: Electrode kinetics & overpotential · Builds on: [2.3 The Butler–Volmer equation](02-03-butler-volmer-equation.md), [2.2 Activation energy & exchange current](02-02-activation-exchange-current.md) · Unlocks: [3.1 Transport modes & the diffusion layer](03-01-transport-modes-diffusion-layer.md)

## Why this matters

The Butler–Volmer equation from [2.3](02-03-butler-volmer-equation.md) has two hidden parameters — the exchange current density $j_0$ (how fast the electrode idles at equilibrium) and the transfer coefficient $\alpha$ (how the applied voltage splits between pushing forward and pulling back). You can't read them off a datasheet; you *measure* them. This lesson is the wrench that opens the equation: push the electrode hard and its full transcendental curve collapses into a **straight line** whose slope hands you $\alpha$ and whose intercept hands you $j_0$. That straight-line trick — the **Tafel plot** — is how every real catalyst, battery electrode, and corrosion rate gets characterized in the lab. Nudge the electrode gently instead and it behaves like a plain resistor, giving a second handle on $j_0$. Same equation, two limits, two measurements.

## The idea

Butler–Volmer is a difference of two competing exponentials — the forward (anodic) reaction racing against the backward (cathodic) one. At equilibrium they tie, and the net current is zero. The **overpotential** $\eta$ (how far you've pushed the electrode past its equilibrium voltage) is the referee that tilts the race.

Two extremes make life simple:

- **Push hard** (large $|\eta|$): one exponential utterly dominates — the back-reaction becomes negligible, like a tug-of-war where one side has already been dragged across the line. A single exponential survives, and *taking its logarithm makes it a straight line*. That line is the Tafel plot, and its geometry spells out $j_0$ and $\alpha$.
- **Barely nudge** (tiny $\eta$): both exponentials are near 1, so their difference is nearly *linear* in $\eta$ — current is proportional to overpotential. The electrode acts like an ohmic resistor, and the proportionality constant is a **charge-transfer resistance** $R_{ct}$.

The beautiful part: the *same* $j_0$ controls both limits. A fast electrode (large $j_0$) has a shallow Tafel intercept high up the current axis *and* a tiny $R_{ct}$ — it barely resists current in either regime. This kinetic penalty, the $\eta$ you must pay to drive a given current across the interface, is called the **activation overpotential**. It is only the first of three overpotentials; Module 3 adds the cost of *delivering reactant* (concentration overpotential) and the plain $iR$ cost of pushing current through solution (ohmic overpotential).

## The formal version

Start from the Butler–Volmer equation ([2.3](02-03-butler-volmer-equation.md)), with $j$ the net current density, $j_0$ the exchange current density, $\alpha_a$ and $\alpha_c$ the anodic/cathodic transfer coefficients ($\alpha_a + \alpha_c = n$ for a one-step, $n$-electron process), $F = 96485\ \mathrm{C/mol}$, $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$, $T$ in kelvin, and $\eta$ the (activation) overpotential in volts:

$$j = j_0\left[\exp\!\left(\frac{\alpha_a F\eta}{RT}\right) - \exp\!\left(-\frac{\alpha_c F\eta}{RT}\right)\right].$$

**High-field (Tafel) limit.** For $\eta$ sufficiently positive (say $\eta \gtrsim 50$–$100\ \mathrm{mV}$), the second exponential is negligible and

$$j \approx j_0\,\exp\!\left(\frac{\alpha_a F\eta}{RT}\right).$$

*In words: drive it hard anodically and only the forward reaction is left.* Take base-10 logarithms and solve for $\eta$:

$$\log_{10} j = \log_{10} j_0 + \frac{\alpha_a F}{2.303\,RT}\,\eta \quad\Longleftrightarrow\quad \boxed{\;\eta = a + b\,\log_{10}|j|\;}$$

This is the **Tafel equation**, with the **Tafel slope**

$$b = \frac{2.303\,RT}{\alpha_a F}, \qquad a = -b\,\log_{10} j_0.$$

*In words: past the knee, overpotential rises by a fixed amount $b$ for every tenfold rise in current.* At $T = 298\ \mathrm{K}$, $\dfrac{2.303\,RT}{F} = 0.0592\ \mathrm{V}$, so $b = 0.0592/\alpha_a$ volts per decade. For $\alpha_a = 0.5$ that is **118 mV/decade** — the textbook value, and a *diagnostic fingerprint*: a measured slope of 118 vs 60 vs 40 mV/dec tells you how many electrons move in the rate-limiting step and which mechanism is operating.

A **Tafel plot** graphs $\log_{10}|j|$ against $\eta$ (see the Picture). Each branch is a straight line at high field:

- its **slope** is $\dfrac{\alpha_a F}{2.303\,RT} = 1/b$ (anodic, positive) or $-1/b$ (cathodic) — so $\alpha = 0.0592/b$ at 298 K;
- **extrapolating** the line back to $\eta = 0$ gives **intercept** $= \log_{10} j_0$, reading off the exchange current.

That is the standard recipe: measure a polarization curve, plot $\log|j|$ vs $\eta$, fit the straight part, and read $\alpha$ from the slope and $j_0$ from the intercept.

**Low-field (linear) limit.** For $|\eta|$ small (a few mV), expand each exponential as $e^x \approx 1 + x$. The constant $1$'s cancel and (with $\alpha_a + \alpha_c = n$):

$$j \approx j_0\left[\left(1 + \frac{\alpha_a F\eta}{RT}\right) - \left(1 - \frac{\alpha_c F\eta}{RT}\right)\right] = j_0\,\frac{(\alpha_a + \alpha_c)F\eta}{RT} = j_0\,\frac{nF\eta}{RT}.$$

*In words: near equilibrium the two exponentials nearly cancel and current is simply proportional to overpotential* — Ohm's law. Notice $\alpha$ has dropped out entirely; only $n$ and $j_0$ survive. Reading $\eta/j$ as a resistance-area product gives the **charge-transfer resistance**

$$R_{ct} = \frac{\eta}{j}\bigg|_{\eta\to 0} = \frac{RT}{nF\,j_0}.$$

*In words: a fast electrode (big $j_0$) has a tiny charge-transfer resistance — it passes current with almost no push.* This is why $R_{ct}$, measured near equilibrium, is an inverse proxy for catalytic activity, and why the low-field slope gives a second, independent route to $j_0$.

## Picture

![Tafel plot of log|j| versus overpotential eta: two straight high-field branches with slopes plus and minus one-over-b, extrapolated back to intersect at eta = 0 where the intercept equals log of the exchange current density; the real curve rounds off and dips toward minus infinity near equilibrium](assets/02-04-fig1.svg)

The two blue lines are the high-field Tafel asymptotes (anodic to the right, cathodic to the left). Their extrapolations (dashed) meet at the coral point $(\eta = 0,\ \log|j_0|)$. The real net-current curve hugs those lines when driven hard but peels *downward* near $\eta = 0$: the net current vanishes at equilibrium, so $\log|j| \to -\infty$ there. You fit the straight part, never the curved knee.

## Worked examples

**Example 1 (mechanical — slope, then intercept).** A polarization curve gives an anodic Tafel line of slope $0.060\ \mathrm{V/decade}$ that extrapolates to $\log_{10}|j| = -6$ (with $j$ in $\mathrm{A/cm^2}$) at $\eta = 0$, at $298\ \mathrm{K}$. Then

$$\alpha_a = \frac{0.0592}{b} = \frac{0.0592}{0.060} = 0.99 \approx 1.0, \qquad j_0 = 10^{-6}\ \mathrm{A/cm^2} = 1\ \mathrm{\mu A/cm^2}.$$

A 60 mV/dec slope with $\alpha \approx 1$ signals a one-electron rate-determining step; the tiny $j_0$ marks a *sluggish* electrode.

**Example 2 (why you'd care — the two limits agree).** Take $n = 1$, $j_0 = 1.0\times10^{-3}\ \mathrm{A/cm^2}$, $\alpha_a = 0.5$, $298\ \mathrm{K}$. Near equilibrium the charge-transfer resistance is

$$R_{ct} = \frac{RT}{nF j_0} = \frac{0.0257\ \mathrm{V}}{(1)(1.0\times10^{-3}\ \mathrm{A/cm^2})} = 25.7\ \mathrm{\Omega\,cm^2},$$

using $RT/F = 0.0257\ \mathrm{V}$. Push instead to $\eta = +0.20\ \mathrm{V}$ — far into the Tafel regime — and the *same* $j_0$ gives $j = j_0 e^{\alpha_a F\eta/RT} \approx 0.049\ \mathrm{A/cm^2}$ (worked in P3). One parameter, $j_0$, ties the gentle-resistor behavior to the hard-driven exponential: this is Arrhenius kinetics with the barrier tilted by voltage (the bridge from physical chemistry's [Arrhenius / transition-state theory](../../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md)), read two different ways.

## Watch out

- **You might think the Tafel intercept is the current at $\eta = 0$.** It is the *extrapolated* value of the straight high-field line back to $\eta = 0$ — a fiction, since the real net current there is exactly zero ($\log|j|\to-\infty$, the downward dip in the Picture). The intercept recovers $j_0$ precisely *because* $j_0$ is the common value both partial currents share at equilibrium, not the measured net current.
- **You might mix up $b$ and $1/b$.** The Tafel *equation* $\eta = a + b\log|j|$ puts the slope $b$ (volts/decade) on a plot of $\eta$ vs $\log|j|$. Flip the axes — the conventional Tafel *plot* of $\log|j|$ vs $\eta$ — and the visible slope is $1/b$. Same physics, reciprocal number; always check which axis is which.
- **You might apply the Tafel form near $\eta = 0$, or the linear form at large $\eta$.** Each is a one-sided approximation. Below ~50 mV the neglected back-reaction still matters (use the linear or full form); above it, the linear expansion $e^x\approx 1+x$ is hopeless. In between, only the full Butler–Volmer equation is honest.
- **A Tafel slope is a mechanism clue, not a constant of nature.** 118, 60, 40, 30 mV/dec each point to a different rate-determining step and electron count. Reporting "the" Tafel slope without the conditions is meaningless.

## One-liner

> In the Tafel (high-field) limit one exponential wins and $\log|j|$ vs $\eta$ goes straight — slope $1/b$ gives $\alpha$, intercept gives $j_0$ — while in the linear (low-field) limit the electrode is just a resistor $R_{ct} = RT/nFj_0$.

## Problems

**P1 (🟢)** At $298\ \mathrm{K}$, compute the anodic Tafel slope $b = 2.303RT/\alpha_a F$ in $\mathrm{mV/decade}$ for a transfer coefficient $\alpha_a = 0.40$.

**P2 (🟡)** An anodic Tafel plot of $\log_{10}|j|$ (with $j$ in $\mathrm{A/cm^2}$) vs $\eta$ has slope $12.5\ \mathrm{decade/V}$ and, extrapolated to $\eta = 0$, an intercept $\log_{10}|j| = -5$. At $298\ \mathrm{K}$, extract the Tafel slope $b$, the transfer coefficient $\alpha_a$, and the exchange current density $j_0$.

**P3 (🔴, Boss Problem 2)** A one-electron electrode ($n = 1$) has $j_0 = 1.0\times10^{-3}\ \mathrm{A/cm^2}$ and $\alpha_a = 0.5$ at $298\ \mathrm{K}$. (a) Find the anodic Tafel slope $b$. (b) Using the Tafel form, find the current density at $\eta = +0.20\ \mathrm{V}$. (c) What overpotential drives $j = 0.10\ \mathrm{A/cm^2}$?

<details>
<summary>Solutions</summary>

**P1** Use the 298 K shortcut $2.303RT/F = 0.0592\ \mathrm{V}$:

$$b = \frac{2.303\,RT}{\alpha_a F} = \frac{0.0592\ \mathrm{V}}{\alpha_a} = \frac{0.0592}{0.40} = 0.148\ \mathrm{V/decade} = 148\ \mathrm{mV/decade}.$$

*Check.* Directly: $b = \dfrac{2.303\,(8.314)(298)}{0.40\,(96485)} = \dfrac{5706}{38594} = 0.148\ \mathrm{V/dec}$ ✓. Smaller $\alpha$ means a steeper slope — more overpotential needed per decade of current — which makes sense: a low transfer coefficient means the applied voltage is used inefficiently to lower the barrier.

**P2** The plotted slope is $1/b = 12.5\ \mathrm{decade/V}$, so

$$b = \frac{1}{12.5} = 0.080\ \mathrm{V/decade} = 80\ \mathrm{mV/decade}.$$

Transfer coefficient from $b = 0.0592/\alpha_a$:

$$\alpha_a = \frac{0.0592}{b} = \frac{0.0592}{0.080} = 0.74.$$

Exchange current density from the intercept $\log_{10} j_0 = -5$:

$$j_0 = 10^{-5}\ \mathrm{A/cm^2} = 10\ \mathrm{\mu A/cm^2}.$$

*Check.* $\alpha_a = 0.74$ is a physically sensible value in $(0,1)$; the 80 mV/dec slope sits between the $\alpha=0.5$ (118 mV/dec) and $\alpha=1$ (59 mV/dec) benchmarks, consistent with $\alpha \approx 0.74$. ✓

**P3** *(a)* Same shortcut as P1 with $\alpha_a = 0.5$:

$$b = \frac{0.0592}{0.5} = 0.1184\ \mathrm{V/decade} \approx 118\ \mathrm{mV/decade}.$$

*(b)* Tafel form $j = j_0\,e^{\alpha_a F\eta/RT}$. The exponent, using $RT/F = 0.0257\ \mathrm{V}$:

$$\frac{\alpha_a F\eta}{RT} = \frac{(0.5)(0.20)}{0.0257} = \frac{0.10}{0.0257} = 3.89.$$

$$j = (1.0\times10^{-3})\,e^{3.89} = (1.0\times10^{-3})(49.1) = 0.049\ \mathrm{A/cm^2}.$$

*(c)* Invert the Tafel equation, $\eta = b\log_{10}(j/j_0)$:

$$\eta = (0.1184)\log_{10}\!\left(\frac{0.10}{1.0\times10^{-3}}\right) = (0.1184)\log_{10}(100) = (0.1184)(2) = 0.237\ \mathrm{V}.$$

*Check.* Consistency between (b) and (c): from (b), $\eta = 0.20\ \mathrm{V}$ gives $j = 0.049\ \mathrm{A/cm^2}$; doubling the current to $\sim0.10\ \mathrm{A/cm^2}$ is about a $0.3$-decade increase, needing an extra $0.3\times0.1184 \approx 0.036\ \mathrm{V}$, i.e. $\eta \approx 0.236\ \mathrm{V}$ — matching (c) ✓. And $\eta = 0.20\ \mathrm{V} \gg 50\ \mathrm{mV}$, so the Tafel (one-exponential) approximation is justified. ✓

</details>

## Flashback

**From Lesson 2.3 (The Butler–Volmer equation):** An electrode with $j_0 = 2.0\times10^{-4}\ \mathrm{A/cm^2}$, symmetric transfer coefficients $\alpha_a = \alpha_c = 0.5$, and $n = 1$ sits at $298\ \mathrm{K}$. Using the *full* Butler–Volmer equation (both exponentials — not the Tafel shortcut), find the net current density at $\eta = -0.10\ \mathrm{V}$, and state its direction.

<details>
<summary>Solution</summary>

With $RT/F = 0.0257\ \mathrm{V}$, the exponents are $\dfrac{\alpha F\eta}{RT} = \dfrac{(0.5)(-0.10)}{0.0257} = -1.95$ (anodic term) and its negative $+1.95$ (cathodic term):

$$j = j_0\left[e^{-1.95} - e^{+1.95}\right] = (2.0\times10^{-4})\,[\,0.143 - 7.01\,] = (2.0\times10^{-4})(-6.87) = -1.4\times10^{-3}\ \mathrm{A/cm^2}.$$

The sign is **negative**, so the current is **cathodic** (reduction) — exactly what a negative overpotential should drive. *Check.* At $\eta = -0.10\ \mathrm{V}$ the magnitude $|\eta|$ is roughly $4\times RT/F$, borderline into the Tafel regime; the cathodic Tafel estimate $j \approx -j_0 e^{-\alpha_c F\eta/RT} = -(2.0\times10^{-4})(7.01) = -1.4\times10^{-3}\ \mathrm{A/cm^2}$ agrees to two figures, since the anodic back-term (0.143) is already small. ✓

</details>

## Connections

- **Backward:** this is the payoff of [2.3](02-03-butler-volmer-equation.md) — the two limits are just the Butler–Volmer equation with one exponential dropped (high field) or both linearized (low field). The exchange current $j_0$ and transfer coefficient $\alpha$ you extract here were *defined* in [2.2](02-02-activation-exchange-current.md); Tafel analysis is how they get measured. Underneath, the exponential-in-$\eta$ form is Arrhenius kinetics with the activation barrier tilted by potential ([physical chemistry, Arrhenius / transition-state theory](../../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md)).
- **Forward:** the $\eta$ computed here is *only* the **activation** overpotential — the kinetic toll at the interface. [3.1](03-01-transport-modes-diffusion-layer.md) opens Module 3 by asking how reactant even reaches the surface; the resulting **concentration overpotential**, plus the ohmic $iR$ drop, add to activation overpotential to give the full polarization curve. The Tafel line you fit here is the low-current end of that curve, before transport bends it over into a limiting current.
- **Sideways (corrosion):** when a metal corrodes, an anodic Tafel line (metal dissolving) and a cathodic Tafel line (e.g. oxygen or $\ce{H+}$ reduction) intersect on a Tafel/Evans diagram, and that intersection sets the corrosion rate — the mixed-potential picture of [4.3](04-03-corrosion-mixed-potential.md) and the bridge to materials science ([materials-science syllabus](../../materials-science/syllabus.md)).

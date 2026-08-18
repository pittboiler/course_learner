# General Chemistry · Lesson 4.3: A Taste of Kinetics

> ⏱ ~15 min · Module 4: Acids, Bases & Intros to Kinetics and Electrochemistry · Builds on: [4.2 Buffers and titration](04-02-buffers-titration.md) · Unlocks: [4.4 A taste of electrochemistry](04-04-taste-of-electrochemistry.md)

## Why this matters

Equilibrium ([3.4](03-04-chemical-equilibrium-k-le-chatelier.md)) told you *where* a reaction ends up — the destination. It said nothing about *how long the trip takes*. A diamond is thermodynamically unstable relative to graphite, yet it doesn't crumble on your finger; the reaction is real but glacially slow. **Kinetics** is the study of reaction *speed*: what sets it, how to measure it, and why a spark, a warm-up, or a pinch of catalyst can turn a non-event into an explosion. This is also your first real chemical differential equation — concentration changing in time — which is why it bridges straight to the [calculus refresher](../../calc-refresher/syllabus.md).

## The idea

**Rate** just means "how fast a concentration changes per unit time." Watch a reactant disappear or a product appear, divide by the seconds elapsed, and you have a rate. The only subtlety is bookkeeping: if a reaction eats 2 molecules of one thing for every 1 it makes of another, those two concentrations change at different *numerical* speeds even though it's one reaction. We fix that by dividing each by its stoichiometric coefficient, so everyone reports the *same* rate.

The deeper question is what *controls* that rate. Experiment gives a beautifully simple answer for most reactions: **rate is proportional to concentrations raised to some powers** — the **rate law**. Crank up a reactant and you speed things up, because collisions get more frequent. But here's the trap that catches everyone: those powers are **not** the equation's coefficients. They're measured, not read off the balanced equation, because they encode the hidden *mechanism* — the actual sequence of molecular bumps — which the overall equation conceals.

And temperature is the master dial. Molecules only react when they collide *hard enough* to climb an energy hill — the **activation energy**. Heat them up and far more collisions clear the hill, so rate rockets. A **catalyst** cheats: it opens a lower hill (an alternate path), speeding the reaction without being consumed — and, crucially, without moving the equilibrium.

## The formal version

**Reaction rate.** For a general reaction $\ce{aA + bB -> cC + dD}$, the rate is any one concentration's rate of change divided by its coefficient (signs make it positive):

$$\text{rate} = -\frac{1}{a}\frac{\Delta[\ce{A}]}{\Delta t} = -\frac{1}{b}\frac{\Delta[\ce{B}]}{\Delta t} = +\frac{1}{c}\frac{\Delta[\ce{C}]}{\Delta t} = +\frac{1}{d}\frac{\Delta[\ce{D}]}{\Delta t}.$$

Here $[\ce{A}]$ is molar concentration (mol/L) and $t$ is time (s); square brackets mean "concentration of." *In words: reactants carry a minus (they vanish), products a plus (they appear), and dividing by the coefficient makes all four report one shared number.*

**Rate law.** Empirically,

$$\text{rate} = k[\ce{A}]^m[\ce{B}]^n,$$

where $k$ is the **rate constant** (its units depend on the overall order), and $m, n$ are the **orders** in $\ce{A}$ and $\ce{B}$ — found **experimentally**, not from $a, b$. The **overall order** is $m + n$. *In words: rate scales like each reactant's concentration to some measured power; the powers describe the mechanism, not the balanced equation.*

**Method of initial rates.** To find an order, change one reactant's starting concentration and watch how the initial rate responds. If doubling $[\ce{A}]$ multiplies the rate by $2^m$, then reading off the factor gives $m$: no change → $m=0$; doubles → $m=1$; quadruples → $m=2$.

**Integrated rate laws.** These come from *solving* $\text{rate} = -d[\ce{A}]/dt = k[\ce{A}]^m$ as a differential equation — a first taste of the ODEs in the [calculus refresher](../../calc-refresher/syllabus.md). The three common cases:

| Order | Integrated law | Linear plot | Half-life $t_{1/2}$ |
|---|---|---|---|
| 0 | $[\ce{A}] = [\ce{A}]_0 - kt$ | $[\ce{A}]$ vs $t$ | $[\ce{A}]_0 / 2k$ |
| 1 | $\ln[\ce{A}] = \ln[\ce{A}]_0 - kt$ | $\ln[\ce{A}]$ vs $t$ | $\dfrac{\ln 2}{k}$ |
| 2 | $\dfrac{1}{[\ce{A}]} = \dfrac{1}{[\ce{A}]_0} + kt$ | $1/[\ce{A}]$ vs $t$ | $\dfrac{1}{k[\ce{A}]_0}$ |

Here $[\ce{A}]_0$ is the concentration at $t=0$. *In words: each order makes a **different** quantity fall on a straight line — so you identify the order by seeing which plot is linear.* The first-order **half-life** $t_{1/2} = \ln 2 / k$ is special: it's **constant**, independent of how much you started with — exactly the signature of radioactive decay. Every half-life, half of what remains is gone, forever.

**Temperature — the Arrhenius equation.**

$$k = A\,e^{-E_a/RT},$$

where $E_a$ is the **activation energy** (J/mol) — the energy hill collisions must clear — $A$ is the **frequency factor** (how often properly-oriented collisions happen), $R = 8.314\ \mathrm{J/(mol\,K)}$, and $T$ is absolute temperature (K). *In words: only the fraction $e^{-E_a/RT}$ of collisions are energetic enough to react, and heating shrinks the penalty in that exponent.* Higher $T$ or lower $E_a$ → larger $k$ → faster. Comparing two temperatures kills the unknown $A$:

$$\ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right).$$

**Catalysts.** A catalyst provides an alternate pathway with a **lower** $E_a$, speeding the reaction — and its reverse — without being consumed. Because it lowers the forward and reverse barriers by the *same* amount, it changes only the *speed*, never the *position* of equilibrium: exactly the "a catalyst causes no shift" point from [3.4](03-04-chemical-equilibrium-k-le-chatelier.md).

## Picture

![Reaction-coordinate diagram: energy versus reaction progress, with reactants rising over an activation-energy barrier (transition state at the peak) down to lower-energy products; a blue uncatalyzed path with a high barrier and a coral catalyzed path with a lower barrier share the same start and end](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (method of initial rates).** For $\ce{A + B -> products}$, three experiments give:

| Exp | $[\ce{A}]_0$ | $[\ce{B}]_0$ | initial rate (M/s) |
|---|---|---|---|
| 1 | 0.10 | 0.10 | $2.0\times10^{-3}$ |
| 2 | 0.20 | 0.10 | $4.0\times10^{-3}$ |
| 3 | 0.10 | 0.20 | $8.0\times10^{-3}$ |

*Order in $\ce{A}$:* Exp 1→2 doubles $[\ce{A}]$ (B fixed); rate doubles ($2.0\to4.0$), factor $2 = 2^1$, so $m = 1$. *Order in $\ce{B}$:* Exp 1→3 doubles $[\ce{B}]$ (A fixed); rate quadruples ($2.0\to8.0$), factor $4 = 2^2$, so $n = 2$. The rate law is $\text{rate} = k[\ce{A}][\ce{B}]^2$, **overall order 3**. Solve for $k$ from Exp 1: $k = \dfrac{2.0\times10^{-3}}{(0.10)(0.10)^2} = 2.0\ \mathrm{M^{-2}\,s^{-1}}$. Note the coefficients in the balanced equation were both 1 — the orders $1$ and $2$ could only come from the data.

**Example 2 (first-order clock).** A drug clears the bloodstream by a first-order process with $k = 0.10\ \mathrm{h^{-1}}$. Its half-life is $t_{1/2} = \ln 2 / k = 0.693/0.10 = 6.93\ \mathrm{h}$ — and that's true whether the dose was large or small, because first-order half-lives don't depend on concentration. After 3 half-lives ($\approx 20.8$ h) only $(1/2)^3 = 1/8$ remains. This is the same math that dates a fossil by carbon-14: constant half-life, exponential decay.

## Watch out

- **You might read orders off the coefficients.** For $\ce{2A -> B}$ the order in $\ce{A}$ is **not** automatically 2 — it might be 1, or even 0. Orders come from experiment because they reflect the *mechanism*, which the balanced equation hides. (Elementary steps are the one exception, but you can't tell which steps are elementary from the overall equation.)
- **You might think a catalyst shifts equilibrium toward more product.** It doesn't. It speeds forward and reverse *equally*, so you reach the *same* equilibrium *faster* — $K$ is untouched, exactly as in [3.4](03-04-chemical-equilibrium-k-le-chatelier.md).
- **You might mix up "fast" and "far."** Kinetics ($k$, $E_a$) governs *speed*; thermodynamics ($K$, $\Delta G$) governs *extent*. A reaction can be wildly favorable yet immeasurably slow (diamond → graphite), or fast yet barely proceed. They answer different questions.

## One-liner

> Equilibrium says where; kinetics says how fast — rate $= k[\ce{A}]^m[\ce{B}]^n$ with experimental orders, and $k = A e^{-E_a/RT}$ says heat or a catalyst (a lower hill) speeds the climb without moving the finish line.

## Problems

**P1 (🟢)** A reaction has rate law $\text{rate} = k[\ce{A}][\ce{B}]^2$. State the order in $\ce{A}$, the order in $\ce{B}$, and the overall order. If $[\ce{B}]$ is tripled (with $[\ce{A}]$ held fixed), by what factor does the rate change?

**P2 (🟡)** A first-order reaction has $k = 0.0231\ \mathrm{s^{-1}}$. Find its half-life, and the time required for the concentration to fall to $1/4$ of its initial value.

**P3 (🔴)** For a reaction, the rate constant is $k_1 = 1.0\times10^{-3}\ \mathrm{s^{-1}}$ at $T_1 = 300\ \mathrm{K}$ and $k_2 = 2.0\times10^{-3}\ \mathrm{s^{-1}}$ at $T_2 = 310\ \mathrm{K}$. Use the two-temperature Arrhenius relation to find the activation energy $E_a$. (This is the classic "rate doubles per 10 °C" rule — you're finding the $E_a$ that produces it.)

<details>
<summary>Solutions</summary>

**P1** The exponents *are* the orders: order in $\ce{A}$ is $1$, order in $\ce{B}$ is $2$, overall order $1 + 2 = 3$. Rate depends on $[\ce{B}]^2$, so tripling $[\ce{B}]$ multiplies the rate by $3^2 = \boxed{9}$.

*Check.* Order is additive: $1+2=3$ ✓. Only $\ce{B}$'s concentration changed, and it enters squared, so the factor is $3^2$, not $3$.

**P2** Half-life (first order): $t_{1/2} = \dfrac{\ln 2}{k} = \dfrac{0.693}{0.0231} = 30.0\ \mathrm{s}$.

Falling to $1/4 = (1/2)^2$ is exactly **two** half-lives, so $t = 2\,t_{1/2} = 60.0\ \mathrm{s}$.

*Check via the integrated law.* $\ln([\ce{A}]/[\ce{A}]_0) = -kt \Rightarrow t = -\dfrac{\ln(1/4)}{k} = \dfrac{\ln 4}{0.0231} = \dfrac{1.386}{0.0231} = 60.0\ \mathrm{s}$ ✓.

**P3** Rearrange the two-temperature form for $E_a$:

$$\ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right) \;\Longrightarrow\; E_a = -\frac{R\,\ln(k_2/k_1)}{\frac{1}{T_2} - \frac{1}{T_1}}.$$

Compute the pieces. $\ln(k_2/k_1) = \ln 2 = 0.693$. And

$$\frac{1}{T_2} - \frac{1}{T_1} = \frac{1}{310} - \frac{1}{300} = \frac{300 - 310}{310 \times 300} = \frac{-10}{93000} = -1.075\times10^{-4}\ \mathrm{K^{-1}}.$$

So

$$E_a = -\frac{(8.314)(0.693)}{-1.075\times10^{-4}} = \frac{5.763}{1.075\times10^{-4}} \approx 5.36\times10^{4}\ \mathrm{J/mol} = \boxed{53.6\ \mathrm{kJ/mol}}.$$

*Check.* Positive $E_a$ ✓ (rate rose with temperature, as it must). The magnitude, tens of kJ/mol, is typical for a reaction whose rate roughly doubles per 10 °C near room temperature — the folk rule falls out of a moderate barrier.

</details>

## Flashback

**From Lesson 4.1 (Acids, bases, and pH):** Find the pH of a $5.0\times10^{-3}\ \mathrm{M}$ solution of the strong base $\ce{NaOH}$. (Fresh variant — a base this time, so you'll route through $\mathrm{pOH}$.)

<details>
<summary>Solution</summary>

$\ce{NaOH}$ is a strong base, fully dissociating: $[\ce{OH-}] = 5.0\times10^{-3}\ \mathrm{M}$. Then

$$\mathrm{pOH} = -\log_{10}(5.0\times10^{-3}) = 3 - \log_{10}5.0 = 3 - 0.70 = 2.30.$$

Using $\mathrm{pH} + \mathrm{pOH} = 14.00$ at 25 °C:

$$\mathrm{pH} = 14.00 - 2.30 = \boxed{11.70}.$$

*Check.* A dilute base should land above 7 but well below 14; $11.70$ is comfortably basic ✓. Equivalently $[\ce{H+}] = K_w/[\ce{OH-}] = 10^{-14}/(5.0\times10^{-3}) = 2.0\times10^{-12}$, giving $\mathrm{pH} = -\log(2.0\times10^{-12}) = 11.70$ ✓.

</details>

## Connections

- **Backward:** kinetics completes the story [3.4](03-04-chemical-equilibrium-k-le-chatelier.md) began — equilibrium fixed the *destination* ($K$), this lesson supplies the *travel time*, and the "catalyst causes no shift" claim there gets its mechanistic reason here (equal lowering of both barriers).
- **Forward:** [4.4 A taste of electrochemistry](04-04-taste-of-electrochemistry.md) turns to reactions driven by electron flow, where reaction *rate* becomes measurable *current*. Rate laws and mechanisms are developed in full in the [physical chemistry](../../physical-chemistry/syllabus.md) course.
- **Sideways (calculus):** the integrated rate laws are the solutions of simple first-order ODEs $d[\ce{A}]/dt = -k[\ce{A}]^m$ — the [calculus refresher](../../calc-refresher/syllabus.md)'s separable equations wearing lab coats. First-order decay $\ln[\ce{A}] = \ln[\ce{A}]_0 - kt$ is the *same* exponential that governs radioactive decay, RC-circuit discharge, and continuously-compounded interest: one differential equation, many disguises.

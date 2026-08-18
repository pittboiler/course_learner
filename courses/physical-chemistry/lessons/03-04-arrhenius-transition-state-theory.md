# Physical Chemistry · Lesson 3.4: Temperature dependence: Arrhenius and transition-state theory

> ⏱ ~15 min · Module 3: Chemical kinetics · Builds on: [3.3 Reaction mechanisms: steady-state and pre-equilibrium](03-03-mechanisms-steady-state-pre-equilibrium.md) · Unlocks: [3.5 Catalysis and enzyme kinetics](03-05-catalysis-enzyme-kinetics.md)

## Why this matters

Everyone knows food spoils faster in a warm kitchen and reactions run faster when you heat the flask — but the *steepness* of that dependence is the surprise. A modest 10 K rise near room temperature can double or triple a rate. That sensitivity is not accidental: it comes from an **energy barrier** every reaction must clear, and only the rare high-energy molecules have what it takes. This lesson turns "warmer is faster" into two quantitative tools — the empirical **Arrhenius equation**, which lets you *measure* a barrier from rate data, and **transition-state theory**, which explains where that barrier comes from in the language of thermodynamics you built in Module 1. It also feeds directly into Boss Problem 3.

## The idea

Picture a reaction as a hike over a mountain pass. Reactants sit in a valley; products sit in another valley on the far side; between them is a **pass** — the lowest ridge you must cross. The height of that pass above the reactant valley is the **activation energy** $E_a$: the energy toll every reacting molecule has to pay, regardless of whether the products end up higher or lower than the reactants.

Now, molecules in a flask don't all have the same energy — they share it out in a lopsided distribution (Module 4's Boltzmann distribution), with a few lucky ones carrying far more than average. The fraction with at least the toll energy $E_a$ is $e^{-E_a/RT}$. Heat the flask and you shift the whole distribution to higher energy, so *exponentially* more molecules clear the pass. That exponential is the entire story of why rates are so temperature-sensitive: you're not making each molecule a bit faster, you're multiplying the *number* that qualify.

Transition-state theory zooms in on the top of the pass. The fleeting arrangement of atoms right at the summit — bonds half-broken, half-formed — is the **transition state** or **activated complex**. Treat it as if it were a real (if very short-lived) species in equilibrium with the reactants, apply Module 1's thermodynamics to that equilibrium, and out pops a rate constant with an entropy and enthalpy of activation. The barrier stops being a mysterious number and becomes $\Delta^\ddagger G$: the Gibbs energy cost of assembling the transition state.

## The formal version

**The Arrhenius equation.** Empirically, almost every rate constant obeys

$$k = A\, e^{-E_a/RT},$$

where $E_a$ is the **activation energy** (in $\mathrm{J/mol}$, the barrier height), $A$ is the **pre-exponential factor** (same units as $k$), $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$, and $T$ is absolute temperature (K). *In words: the rate constant is a maximum possible rate $A$ knocked down by the Boltzmann fraction $e^{-E_a/RT}$ of molecules that clear the barrier.* The factor $A$ collects how often reactant partners collide or attempt the crossing (frequency) and whether they're pointed the right way (orientation); $e^{-E_a/RT}$ is the fraction with enough energy.

**Linearized form — the Arrhenius plot.** Take the natural log:

$$\ln k = \ln A - \frac{E_a}{R}\cdot\frac{1}{T}.$$

*In words: plot $\ln k$ (vertical) against $1/T$ (horizontal) and you get a straight line* — slope $-E_a/R$, intercept $\ln A$. This is the workhorse: measure $k$ at several temperatures, fit a line, read off the barrier. (See the Picture.)

**Two-temperature form.** With rate constants $k_1, k_2$ at two temperatures $T_1, T_2$, subtract the linear equation at the two points to cancel $\ln A$:

$$\boxed{\;\ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)\;}$$

*In words: the ratio of rate constants at two temperatures pins down $E_a$ with no need to know $A$.* Solve for $E_a$ when you have two data points.

**Transition-state theory (Eyring).** Write the crossing as reactants in quasi-equilibrium with an activated complex, which then falls apart into products at a universal frequency:

$$\text{R} \;\overset{K^{\ddagger}}{\rightleftharpoons}\; [\text{TS}]^{\ddagger} \;\xrightarrow{\;k_BT/h\;}\; \text{P}.$$

Carrying the equilibrium through gives the **Eyring equation**

$$k = \frac{k_B T}{h}\, e^{-\Delta^\ddagger G/RT} = \frac{k_B T}{h}\, e^{\Delta^\ddagger S/R}\, e^{-\Delta^\ddagger H/RT},$$

where $k_B = 1.381\times10^{-23}\ \mathrm{J/K}$, $h = 6.626\times10^{-34}\ \mathrm{J\,s}$, and $\Delta^\ddagger G$, $\Delta^\ddagger H$, $\Delta^\ddagger S$ are the **Gibbs energy, enthalpy, and entropy of activation** — the thermodynamic cost of building the transition state from reactants. *In words: the rate is a universal "attempt frequency" $k_BT/h$ (about $6\times10^{12}\ \mathrm{s^{-1}}$ at 298 K) times the probability $e^{-\Delta^\ddagger G/RT}$ that a given attempt has assembled the transition state.* The split $\Delta^\ddagger G = \Delta^\ddagger H - T\Delta^\ddagger S$ is exactly Gibbs's relation from [1.3](01-03-gibbs-helmholtz-energies.md), applied to the barrier.

**Reading the two theories against each other.** Arrhenius's $A$ and $E_a$ are what you *measure*; Eyring's $\Delta^\ddagger H$ and $\Delta^\ddagger S$ are what they *mean*. Differentiating both expressions and matching (for a unimolecular or solution-phase reaction) gives

$$E_a = \Delta^\ddagger H + RT, \qquad A = \frac{e\, k_B T}{h}\, e^{\Delta^\ddagger S/R}.$$

*In words: the measured activation energy is essentially the activation enthalpy (plus a small $RT \approx 2.5\ \mathrm{kJ/mol}$ correction at room temperature), and the pre-exponential factor is a thermometer for the activation entropy.* A **negative** $\Delta^\ddagger S$ means the transition state is *more ordered* than the reactants — two molecules clamping together, freezing translational and rotational freedom (a tight, associative TS, small $A$). A **positive** $\Delta^\ddagger S$ means a *looser* transition state — one molecule stretching apart, gaining freedom (large $A$).

## Picture

![Left: an Arrhenius plot of ln k versus 1/T, a straight line of slope minus Ea over R with intercept ln A. Right: a reaction-coordinate diagram showing reactants rising over a barrier to a transition state at the top, then down to products, with the barrier height marked as Ea and Gibbs energy of activation.](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (extract a barrier from two rates).** A reaction has $k_1 = 2.5\times10^{-3}\ \mathrm{s^{-1}}$ at $T_1 = 300\ \mathrm{K}$ and $k_2 = 5.0\times10^{-3}\ \mathrm{s^{-1}}$ at $T_2 = 310\ \mathrm{K}$ — the rate doubles over a 10 K rise. Find $E_a$.

Use the two-temperature form. First the pieces:

$$\ln\frac{k_2}{k_1} = \ln 2 = 0.693, \qquad \frac{1}{T_2}-\frac{1}{T_1} = \frac{1}{310}-\frac{1}{300} = -1.075\times10^{-4}\ \mathrm{K^{-1}}.$$

Then

$$E_a = -R\,\frac{\ln(k_2/k_1)}{\;1/T_2 - 1/T_1\;} = -8.314\cdot\frac{0.693}{-1.075\times10^{-4}} \approx 5.36\times10^{4}\ \mathrm{J/mol} = 53.6\ \mathrm{kJ/mol}.$$

A barrier of about 54 kJ/mol is exactly the size that makes a rate double near room temperature — a useful rule of thumb.

**Example 2 (predict a rate, and the 10 K factor).** A unimolecular reaction has $E_a = 75\ \mathrm{kJ/mol}$ and $A = 1.0\times10^{13}\ \mathrm{s^{-1}}$. Find $k$ at 298 K, and the factor by which $k$ grows on warming to 308 K.

The exponent at 298 K is $E_a/RT = 75000/(8.314\times298) = 30.27$, so

$$k = A\,e^{-E_a/RT} = (1.0\times10^{13})\,e^{-30.27} = (1.0\times10^{13})(7.14\times10^{-14}) \approx 0.71\ \mathrm{s^{-1}}.$$

For the 10 K jump, use the two-temperature form as a ratio:

$$\frac{k(308)}{k(298)} = \exp\!\left[-\frac{E_a}{R}\left(\frac{1}{308}-\frac{1}{298}\right)\right] = \exp\!\left[\frac{75000}{8.314}(1.09\times10^{-4})\right] = e^{0.983} \approx 2.7.$$

So a mere 3% rise in absolute temperature multiplies the rate by 2.7 — the exponential at work.

## Watch out

- **You might think $A$ has no temperature dependence.** Arrhenius treats $A$ as constant, and over a modest range it nearly is — but Eyring's $A \propto T\,e^{\Delta^\ddagger S/R}$ carries a mild $T$ factor. That's why $E_a$ and $\Delta^\ddagger H$ differ by $RT$, not by zero.
- **You might use $E_a$ as the reaction's energy change.** It isn't. $E_a$ is the barrier from reactants *up to the pass*; the overall $\Delta_r H$ is the *difference between the two valleys*. A reaction can be strongly exothermic yet still slow if the pass is high — thermodynamics sets the destination, kinetics sets the barrier.
- **You might expect a big $A$ always means a fast reaction.** $A$ only sets the ceiling; the exponential $e^{-E_a/RT}$ can crush a large $A$ by twelve orders of magnitude. Both factors matter, and near room temperature the barrier usually dominates.
- **Watch the sign in the two-point formula.** Since $1/T_2 - 1/T_1$ is *negative* when $T_2 > T_1$, the leading minus sign makes $\ln(k_2/k_1)$ come out positive — as it must, since the hotter rate is larger. If your $E_a$ comes out negative, you flipped a subtraction.

## One-liner

> Rates climb steeply with temperature because only the Boltzmann fraction $e^{-E_a/RT}$ of molecules clears the barrier; plot $\ln k$ vs $1/T$ to measure that barrier, and Eyring reads it as the Gibbs cost $\Delta^\ddagger G$ of reaching the transition state.

## Problems

**P1 (🟢)** A reaction's rate constant is $k_1 = 1.20\times10^{-2}\ \mathrm{s^{-1}}$ at $T_1 = 310\ \mathrm{K}$ and $k_2 = 4.80\times10^{-2}\ \mathrm{s^{-1}}$ at $T_2 = 330\ \mathrm{K}$. Compute the activation energy $E_a$ using the two-point Arrhenius form.

**P2 (🟡)** A reaction has $E_a = 90\ \mathrm{kJ/mol}$ and $A = 2.0\times10^{12}\ \mathrm{s^{-1}}$. (a) Find $k$ at 350 K. (b) By what factor does $k$ increase on warming from 350 K to 360 K?

**P3 (🔴, Eyring / Boss-3 tie-in)** A unimolecular reaction in solution has $\Delta^\ddagger H = 50\ \mathrm{kJ/mol}$ and $\Delta^\ddagger S = -30\ \mathrm{J\,K^{-1}\,mol^{-1}}$. (a) Use the Eyring equation to find $k$ at 298 K. (b) What is the corresponding Arrhenius $E_a$? (c) Interpret the sign of $\Delta^\ddagger S$ — what does it say about the transition state?

<details>
<summary>Solutions</summary>

**P1** The ratio is $k_2/k_1 = 4.80\times10^{-2}/1.20\times10^{-2} = 4.00$, so $\ln(k_2/k_1) = \ln 4 = 1.386$. The reciprocal-temperature difference is

$$\frac{1}{T_2}-\frac{1}{T_1} = \frac{1}{330}-\frac{1}{310} = 3.0303\times10^{-3} - 3.2258\times10^{-3} = -1.955\times10^{-4}\ \mathrm{K^{-1}}.$$

Then

$$E_a = -R\,\frac{\ln(k_2/k_1)}{1/T_2 - 1/T_1} = -8.314\cdot\frac{1.386}{-1.955\times10^{-4}} = \frac{11.52}{1.955\times10^{-4}} \approx 5.90\times10^{4}\ \mathrm{J/mol} = 59.0\ \mathrm{kJ/mol}.$$

*Check.* Positive $E_a$, and roughly-quadrupling over 20 K is consistent with a barrier a bit larger than the "double per 10 K" ($\approx 54\ \mathrm{kJ/mol}$) benchmark. ✓

**P2** (a) The exponent at 350 K:

$$\frac{E_a}{RT} = \frac{90000}{8.314\times350} = \frac{90000}{2909.9} = 30.93.$$

So

$$k = A\,e^{-E_a/RT} = (2.0\times10^{12})\,e^{-30.93} = (2.0\times10^{12})(3.68\times10^{-14}) \approx 7.4\times10^{-2}\ \mathrm{s^{-1}}.$$

(b) Ratio over the 10 K rise:

$$\frac{k(360)}{k(350)} = \exp\!\left[\frac{E_a}{R}\left(\frac{1}{350}-\frac{1}{360}\right)\right] = \exp\!\left[\frac{90000}{8.314}(7.94\times10^{-5})\right] = e^{0.859} \approx 2.36.$$

*Check.* A larger barrier (90 vs 54 kJ/mol) gives a *steeper* temperature response, so a factor above 2 per 10 K makes sense. ✓

**P3** (a) Eyring in the enthalpy–entropy form. The universal prefactor at 298 K:

$$\frac{k_B T}{h} = \frac{(1.381\times10^{-23})(298)}{6.626\times10^{-34}} = \frac{4.115\times10^{-21}}{6.626\times10^{-34}} = 6.21\times10^{12}\ \mathrm{s^{-1}}.$$

The entropy factor:

$$e^{\Delta^\ddagger S/R} = e^{-30/8.314} = e^{-3.608} = 2.71\times10^{-2}.$$

The enthalpy factor, with $\Delta^\ddagger H/RT = 50000/(8.314\times298) = 20.18$:

$$e^{-\Delta^\ddagger H/RT} = e^{-20.18} = 1.72\times10^{-9}.$$

Multiply:

$$k = (6.21\times10^{12})(2.71\times10^{-2})(1.72\times10^{-9}) \approx 2.9\times10^{2}\ \mathrm{s^{-1}}.$$

(b) For a unimolecular/solution reaction, $E_a = \Delta^\ddagger H + RT = 50000 + (8.314)(298) = 50000 + 2478 \approx 5.25\times10^{4}\ \mathrm{J/mol} = 52.5\ \mathrm{kJ/mol}$.

(c) $\Delta^\ddagger S = -30\ \mathrm{J\,K^{-1}\,mol^{-1}}$ is **negative**: the transition state is *more ordered* than the reactant — degrees of freedom are frozen out on the way to the barrier (a tight, associative activated complex, e.g. partners clamping together or a constrained ring closing). A negative $\Delta^\ddagger S$ also means a *smaller* pre-exponential factor $A$, since $A \propto e^{\Delta^\ddagger S/R}$, so the reaction is slower than a "loose" transition state of the same enthalpy would be.

*Check.* $\Delta^\ddagger G = \Delta^\ddagger H - T\Delta^\ddagger S = 50000 - 298(-30) = 50000 + 8940 = 58.9\ \mathrm{kJ/mol}$; then $k = (6.21\times10^{12})e^{-58940/2477.6} = (6.21\times10^{12})e^{-23.79} = (6.21\times10^{12})(4.65\times10^{-11}) \approx 2.9\times10^2\ \mathrm{s^{-1}}$, matching part (a). ✓

</details>

## Flashback

**From Lesson 3.2 (Integrated rate laws and half-lives):** A reaction is first order in the reactant A with rate constant $k = 5.0\times10^{-3}\ \mathrm{s^{-1}}$. (a) What is its half-life? (b) How long until 90% of A has been consumed? (Fresh variant — no temperature involved.)

<details>
<summary>Solution</summary>

For a first-order reaction $[A] = [A]_0\,e^{-kt}$, so $\ln([A]_0/[A]) = kt$.

(a) Half-life is when $[A]/[A]_0 = \tfrac12$, and for first order it's independent of starting concentration:

$$t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{5.0\times10^{-3}} \approx 139\ \mathrm{s}.$$

(b) 90% consumed means $[A]/[A]_0 = 0.10$:

$$t = \frac{1}{k}\ln\frac{[A]_0}{[A]} = \frac{\ln 10}{5.0\times10^{-3}} = \frac{2.303}{5.0\times10^{-3}} \approx 461\ \mathrm{s}.$$

*Check.* $461\ \mathrm{s} \approx 3.3\,t_{1/2}$: after 3 half-lives 87.5% is gone, after 3.32 exactly 90%, so the number is right. The constant half-life is the fingerprint of first-order kinetics. ✓

</details>

## Connections

- **Backward:** the pre-equilibrium step of [3.3](03-03-mechanisms-steady-state-pre-equilibrium.md) is exactly the logic of transition-state theory — reactants held in quasi-equilibrium with a fleeting intermediate — now applied to the activated complex itself. The activation-Gibbs split $\Delta^\ddagger G = \Delta^\ddagger H - T\Delta^\ddagger S$ is Gibbs's relation from [1.3](01-03-gibbs-helmholtz-energies.md) wearing a double-dagger.
- **Forward:** [3.5 Catalysis and enzyme kinetics](03-05-catalysis-enzyme-kinetics.md) is this lesson's payoff — a catalyst works by *lowering $E_a$* (offering a pass through a different, lower ridge), and $e^{-E_a/RT}$ shows why shaving even 20 kJ/mol off the barrier can speed a reaction a thousandfold. Boss Problem 3 combines this Arrhenius/Eyring machinery with a mechanism.
- **Sideways (statistical mechanics):** the Boltzmann fraction $e^{-E_a/RT}$ is the same $e^{-\varepsilon/k_BT}$ population weight that runs all of Module 4 — the partition function is the stat-mech bridge that turns "fraction above a threshold energy" into a rigorous count. The Eyring prefactor $k_BT/h$ likewise falls out of partition functions for the transition state, connecting to the general chemistry [taste of kinetics](../../general-chemistry/lessons/04-03-taste-of-kinetics.md).

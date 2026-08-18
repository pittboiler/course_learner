# Electrochemistry · Lesson 2.3: The Butler–Volmer equation

> ⏱ ~15 min · Module 2: Electrode kinetics & overpotential · Builds on: [2.2 Activation & exchange current](02-02-activation-exchange-current.md) · Unlocks: [2.4 Overpotential & Tafel analysis](02-04-overpotential-tafel-analysis.md)

## Why this matters

In Module 1 you learned what voltage a cell *wants* to sit at — the equilibrium potential $E_\text{eq}$ set by thermodynamics (Nernst, [1.5](01-05-nernst-equation-concentration-cells.md)). But a battery only does work when current flows, and the instant current flows the electrode is *pushed off* equilibrium. How hard do you have to push to get a given current? That push-versus-current law is the **Butler–Volmer equation**, and it is the single most important equation in electrode kinetics. It is the source of every "voltage droop" you see when a battery is loaded ([Module 4](04-01-batteries-energy-density.md)), it collapses into the Tafel law you'll use to read kinetics off a plot ([2.4](02-04-overpotential-tafel-analysis.md)), and it is the kinetic backbone of every polarization curve in [Module 3](03-03-mixed-control-kinetics-transport.md). This lesson assembles it from the two Arrhenius branches you built in [2.2](02-02-activation-exchange-current.md).

## The idea

At equilibrium an electrode is *not* asleep. Oxidation and reduction are both happening, flat out, at exactly equal rates — a two-way traffic jam with zero *net* flow. The size of that balanced traffic is the **exchange current density** $j_0$ from [2.2](02-02-activation-exchange-current.md).

Now apply a **push**: shift the electrode's potential away from $E_\text{eq}$. That push has a name — the **overpotential** $\eta$. Here is the key physical picture from [2.2](02-02-activation-exchange-current.md): changing the electrode potential *tilts the activation-energy barrier*. Push in the oxidizing (anodic) direction and you lower the barrier for electrons leaving the species and raise it for the reverse — so the forward (anodic) rate climbs exponentially while the back (cathodic) rate is throttled. Push the other way and the roles swap.

The net current is just **forward traffic minus back traffic**. Because each direction responds *exponentially* to the tilt (Arrhenius, [phys-chem 3.4](../../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md)), you get a difference of two exponentials that starts at zero (they cancel at $\eta=0$) and blows up in whichever direction you push. That is the entire equation.

## The formal version

**Overpotential.** Define the drive away from equilibrium as

$$\eta \equiv E - E_\text{eq},$$

where $E$ is the electrode's actual potential and $E_\text{eq}$ its equilibrium (Nernst) value, both in volts. *In words: overpotential is how far, and in which direction, you have shoved the electrode off the voltage it would rest at.* Sign convention: $\eta > 0$ is **anodic** (pushes oxidation, drives net positive/anodic current); $\eta < 0$ is **cathodic** (pushes reduction).

**The Butler–Volmer equation.** Taking the two Arrhenius branches from [2.2](02-02-activation-exchange-current.md), each with its barrier tilted by a fraction of $F\eta$, the net current density is

$$\boxed{\,j = j_0\left[\,e^{\,\alpha_a F\eta/RT} \;-\; e^{-\alpha_c F\eta/RT}\,\right]}$$

with these symbols:

- $j$ — net current density (current per electrode area, e.g. $\mathrm{A/cm^2}$). Positive = net anodic (oxidation).
- $j_0$ — **exchange current density** ([2.2](02-02-activation-exchange-current.md)): the balanced two-way current at equilibrium. It scales the *whole* curve.
- $\eta$ — overpotential (V), the drive defined above.
- $\alpha_a,\ \alpha_c$ — the anodic and cathodic **transfer (symmetry) coefficients**, dimensionless, with $\alpha_a + \alpha_c = 1$; for a symmetric barrier $\alpha_a = \alpha_c = 0.5$.
- $F = 96485\ \mathrm{C/mol}$ (Faraday constant), $R = 8.314\ \mathrm{J/(mol\,K)}$, $T$ absolute temperature. At $298\ \mathrm{K}$, $RT/F = 0.0257\ \mathrm{V}$ (so $F/RT \approx 38.9\ \mathrm{V^{-1}}$).

*In words: net current = (anodic forward term) − (cathodic back term), each an exponential in the overpotential, both scaled by the exchange current.*

**Reading the equation piece by piece:**

- **At $\eta = 0$:** both exponentials equal $1$, so $j = j_0(1-1) = 0$ — no *net* current, which is exactly equilibrium. But each branch individually equals $j_0$: the traffic is heavy, just balanced.
- **$\eta > 0$ (anodic):** $e^{+\alpha_a F\eta/RT}$ grows, $e^{-\alpha_c F\eta/RT}$ shrinks. Net oxidation current rises exponentially.
- **$\eta < 0$ (cathodic):** the second term dominates; $j$ goes negative (net reduction), growing exponentially in magnitude.
- **$j_0$ sets the steepness.** A *fast* (kinetically facile) couple has large $j_0$ and needs only a whisker of $\eta$ to pass a big current; a *sluggish* couple (large barrier, tiny $j_0$) demands a large $\eta$ for the same current.
- **$\alpha$ sets the asymmetry.** It fixes how the total tilt splits between helping the forward reaction and hindering the reverse, so it controls whether the anodic and cathodic sides of the curve rise equally steeply.

**Assumptions (its limits).** Butler–Volmer is pure *charge-transfer* kinetics: it assumes reactant is always available at the surface — i.e. **mass transport is not limiting** (that gets added in [Module 3](03-03-mixed-control-kinetics-transport.md)) — and that a **single elementary electron-transfer step** sets the rate. When the reaction outruns diffusion, the real current saturates below the exponential this predicts.

## Picture

![Butler–Volmer net current versus overpotential: a blue curve through the origin, rising anodically for positive eta and negative (cathodic) for negative eta, formed as the difference of two dashed coral exponential branches meeting at plus and minus j0 on the current axis](assets/02-03-fig1.svg)

The blue **net** current passes cleanly through the origin. It is the difference of the two coral dashed exponentials — the anodic term (sitting at $+j_0$ when $\eta=0$) and the cathodic term (at $-j_0$). Far to the right the anodic exponential is all that survives; far to the left, the cathodic one. Near the middle the two nearly cancel, so the net curve is almost straight through zero — that near-linear zone is Example 2.

## Worked examples

**Example 1 (mechanical — evaluate both terms).** A symmetric couple ($\alpha_a=\alpha_c=0.5$) has $j_0 = 2\ \mathrm{mA/cm^2}$ at $298\ \mathrm{K}$ ($RT/F = 0.0257\ \mathrm{V}$). Find $j$ at $\eta = +50\ \mathrm{mV}$.

The exponent argument is $\dfrac{\alpha F\eta}{RT} = \dfrac{0.5 \times 0.050}{0.0257} = 0.973$. So

$$j = 2\left[e^{0.973} - e^{-0.973}\right] = 2\,[\,2.645 - 0.378\,] = 2 \times 2.267 = 4.53\ \mathrm{mA/cm^2}.$$

The anodic term ($2 \times 2.645 = 5.29\ \mathrm{mA/cm^2}$) already dwarfs the cathodic ($2 \times 0.378 = 0.76\ \mathrm{mA/cm^2}$) at only 50 mV — the exponential asymmetry is fast. And plugging $\eta = 0$ gives $j = 2[1-1] = 0$: equilibrium confirmed.

**Example 2 (why you'd care — the small-$\eta$ straight line).** Near equilibrium, use $e^x \approx 1 + x$ for small $x$. With $\alpha_a+\alpha_c=1$,

$$j \approx j_0\big[(1 + \tfrac{\alpha_a F\eta}{RT}) - (1 - \tfrac{\alpha_c F\eta}{RT})\big] = j_0\,\frac{(\alpha_a+\alpha_c)F\eta}{RT} = j_0\,\frac{F\eta}{RT}.$$

So for tiny pushes the electrode behaves like an **ohmic resistor**: current is proportional to overpotential. Writing $\eta = R_{ct}\,j$ defines the **charge-transfer resistance**

$$R_{ct} = \frac{RT}{nF j_0},$$

($n$ = electrons transferred per step; $n=1$ here). With $j_0 = 2\ \mathrm{mA/cm^2}$: $R_{ct} = 0.0257\ \mathrm{V} / (2\times10^{-3}\ \mathrm{A/cm^2}) = 12.9\ \mathrm{\Omega\,cm^2}$. This is *the* number impedance spectroscopy measures to grade an electrode: small $R_{ct}$ = fast kinetics.

## Watch out

- **You might think $\eta=0$ means "nothing is happening."** No — the net current is zero, but each direction runs at the full exchange current $j_0$. Equilibrium is a *balance* of large opposing fluxes, not silence. (This is the same dynamic-equilibrium idea as [gen-chem 3.4](../../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md).)
- **You might confuse overpotential $\eta$ with cell voltage $E$.** $\eta$ is a *difference from equilibrium*, $E - E_\text{eq}$, not the electrode potential itself. A voltage droop under load is $\eta$, the kinetic tax you pay on top of the thermodynamic $E_\text{eq}$.
- **You might trust the exponential at any current.** Butler–Volmer assumes reactant is never starved. In reality, once the demanded current outpaces diffusion the current *plateaus* at a limiting value — the exponential is the kinetic ceiling, not the whole story ([Module 3](03-03-mixed-control-kinetics-transport.md)).
- **Sign slip:** the cathodic term carries a minus sign *and* a minus in its exponent. Drop either and the curve stops passing through the origin.

## One-liner

> Butler–Volmer is Arrhenius kinetics with the barrier tilted by potential: $j = j_0[e^{\alpha_a F\eta/RT} - e^{-\alpha_c F\eta/RT}]$ — net current is forward minus back exponentials, zero at $\eta=0$, exploding whichever way you push.

## Problems

**P1 (🟢)** A symmetric electrode ($\alpha_a=\alpha_c=0.5$) has $j_0 = 1.5\ \mathrm{mA/cm^2}$ at $298\ \mathrm{K}$ ($RT/F=0.0257\ \mathrm{V}$). Compute the anodic term, the cathodic term, and the net current $j$ at $\eta = +40\ \mathrm{mV}$. Then confirm $j=0$ at $\eta=0$.

**P2 (🟡)** Starting from Butler–Volmer, show that for small $\eta$ the current linearizes to $j \approx j_0 F\eta/RT$ (take $\alpha_a+\alpha_c=1$). Define the charge-transfer resistance and compute it for $j_0 = 5\ \mathrm{mA/cm^2}$, $n=1$, $298\ \mathrm{K}$. By what factor does $R_{ct}$ change if $j_0$ drops 100-fold?

**P3 (🔴, Boss-2 setup)** For a large positive overpotential, show the cathodic term becomes negligible so that $j \approx j_0\,e^{\alpha_a F\eta/RT}$ (the **Tafel limit**, → [2.4](02-04-overpotential-tafel-analysis.md)). For $j_0 = 2\ \mathrm{mA/cm^2}$, $\alpha_a=0.5$, $298\ \mathrm{K}$, evaluate the anodic current at $\eta = +300\ \mathrm{mV}$ and state what fraction of the full Butler–Volmer current the cathodic term accounts for.

<details>
<summary>Solutions</summary>

**P1** Exponent argument: $\dfrac{0.5 \times 0.040}{0.0257} = 0.7782$, so $e^{0.7782} = 2.177$ and $e^{-0.7782} = 0.4593$.

- Anodic term: $j_0 e^{+\cdots} = 1.5 \times 2.177 = 3.27\ \mathrm{mA/cm^2}$.
- Cathodic term: $j_0 e^{-\cdots} = 1.5 \times 0.4593 = 0.689\ \mathrm{mA/cm^2}$.
- Net: $j = 3.27 - 0.689 = 2.58\ \mathrm{mA/cm^2}$.

At $\eta=0$: both exponents are $0$, both terms $= j_0 = 1.5\ \mathrm{mA/cm^2}$, so $j = 1.5-1.5 = 0$ ✓ (equilibrium — balanced, not idle).

*Check.* Positive $\eta$ gave positive (anodic) net current, and the anodic term already exceeds the cathodic — consistent with a rightward push. Units: $\mathrm{mA/cm^2}$ throughout ✓.

**P2** Small-$\eta$ expansion $e^x \approx 1+x$ on each term:

$$j = j_0\big[e^{\alpha_a F\eta/RT} - e^{-\alpha_c F\eta/RT}\big] \approx j_0\Big[\big(1+\tfrac{\alpha_a F\eta}{RT}\big) - \big(1-\tfrac{\alpha_c F\eta}{RT}\big)\Big] = j_0\,\frac{(\alpha_a+\alpha_c)F\eta}{RT} = j_0\,\frac{F\eta}{RT},$$

using $\alpha_a+\alpha_c = 1$. The $1$'s cancel (that is why $j=0$ at $\eta=0$), leaving a term **linear** in $\eta$ — Ohm's law for the interface. Writing $\eta = R_{ct}j$ and reading off the slope,

$$R_{ct} = \frac{RT}{nF j_0}.$$

For $j_0 = 5\ \mathrm{mA/cm^2} = 5\times10^{-3}\ \mathrm{A/cm^2}$, $n=1$, $T=298\ \mathrm{K}$:

$$R_{ct} = \frac{0.0257\ \mathrm{V}}{1 \times 5\times10^{-3}\ \mathrm{A/cm^2}} = 5.14\ \mathrm{\Omega\,cm^2}.$$

$R_{ct} \propto 1/j_0$, so a 100-fold *drop* in $j_0$ makes $R_{ct}$ **100 times larger** ($\to 514\ \mathrm{\Omega\,cm^2}$): a sluggish electrode is a resistive one.

*Check.* Dimensions: $\dfrac{\mathrm{V}}{\mathrm{A/cm^2}} = \mathrm{\Omega\,cm^2}$ (area-specific resistance) ✓. Larger $j_0$ (faster kinetics) → smaller $R_{ct}$, matching intuition ✓.

**P3** At large positive $\eta$, the exponent $\alpha_a F\eta/RT$ is large and positive, while the cathodic exponent $-\alpha_c F\eta/RT$ is large and negative, so $e^{-\alpha_c F\eta/RT} \to 0$. Dropping it,

$$j \approx j_0\,e^{\alpha_a F\eta/RT} \qquad(\text{Tafel limit}).$$

Numerically at $\eta = 0.300\ \mathrm{V}$: exponent $= \dfrac{0.5 \times 0.300}{0.0257} = 5.837$, so $e^{5.837} = 342.6$ and

$$j \approx 2\ \mathrm{mA/cm^2} \times 342.6 = 685\ \mathrm{mA/cm^2} \;=\; 0.685\ \mathrm{A/cm^2}.$$

The cathodic term is $j_0 e^{-5.837} = 2 \times 0.00292 = 0.0058\ \mathrm{mA/cm^2}$ — a fraction $e^{-5.837}/e^{5.837} = e^{-11.67} \approx 8.5\times10^{-6}$ of the anodic term, i.e. about $0.001\%$. Utterly negligible: at 300 mV the electrode runs one-way. Taking $\ln$ of the surviving term gives $\ln j = \ln j_0 + \alpha_a F\eta/RT$ — a straight line of $\ln j$ (or $\log_{10}|j|$) versus $\eta$, which is exactly the **Tafel plot** you build in [2.4](02-04-overpotential-tafel-analysis.md).

*Check.* The cathodic-to-anodic ratio $e^{-2\alpha_a F\eta/RT}$ shrinks as $\eta$ grows, confirming the one-exponential approximation gets *better* at larger $\eta$ — precisely the regime where Tafel analysis lives ✓.

</details>

## Flashback

**From Lesson 2.2 (Activation & exchange current):** The exchange current density $j_0$ is the balanced two-way current flowing at equilibrium — no *net* current, but real charge crossing both ways. Hydrogen evolution has $j_0 \approx 10^{-3}\ \mathrm{A/cm^2}$ on platinum but only $\approx 10^{-12}\ \mathrm{A/cm^2}$ on mercury. For a $1\ \mathrm{cm^2}$ electrode of each *sitting at equilibrium*, how many electrons per second cross in each direction, and which electrode is the more kinetically reversible? (Elementary charge $e = 1.602\times10^{-19}\ \mathrm{C}$.)

<details>
<summary>Solution</summary>

Even at equilibrium the anodic and cathodic partial currents are each equal in magnitude to $j_0 \times A$. Electrons per second in *each* direction $= j_0 A / e$:

- **Platinum:** $\dfrac{10^{-3}\ \mathrm{A} \times 1\ \mathrm{cm^2}/\mathrm{cm^2}}{1.602\times10^{-19}\ \mathrm{C}} \approx 6.2\times10^{15}\ \mathrm{electrons/s}$ each way.
- **Mercury:** $\dfrac{10^{-12}}{1.602\times10^{-19}} \approx 6.2\times10^{6}\ \mathrm{electrons/s}$ each way.

Platinum turns over about $10^{9}$ times more traffic per second, so it is far more **kinetically reversible** (facile): it will deliver a given net current at a far smaller overpotential. From Butler–Volmer, larger $j_0$ scales the whole $j$–$\eta$ curve up, so Pt needs a tiny $\eta$ where Hg needs a huge one — which is exactly why practical hydrogen electrodes use Pt, not Hg.

*Check.* The two-way rate at equilibrium is huge yet the *net* is zero because the directions cancel — the point of $j_0$. Larger $j_0 \Rightarrow$ smaller $R_{ct} = RT/nFj_0 \Rightarrow$ more reversible, all consistent ✓.

</details>

## Connections

- **Backward:** this is the two Arrhenius branches of [2.2](02-02-activation-exchange-current.md) — barrier tilted by potential, [phys-chem 3.4](../../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) — subtracted from each other, with $j_0$ carried over intact. The equilibrium potential $E_\text{eq}$ that $\eta$ is measured from comes straight from Nernst ([1.5](01-05-nernst-equation-concentration-cells.md)) and the emf–Gibbs link ([1.4](01-04-cell-emf-gibbs-equilibrium.md)).
- **Forward:** taking the large-$\eta$ (one-exponential) limit and its logarithm gives the **Tafel equation** and Tafel slope in [2.4](02-04-overpotential-tafel-analysis.md); pairing this charge-transfer law with a mass-transport ceiling gives the full **polarization curve** of [Module 3](03-03-mixed-control-kinetics-transport.md).
- **Sideways:** the small-$\eta$ result $\eta = R_{ct}j$ makes the interface an ohmic resistor — the "activation" voltage loss whose droop shows up in every [battery](04-01-batteries-energy-density.md) and fuel cell under load, and whose two-directional competition underlies [corrosion](04-03-corrosion-mixed-potential.md).

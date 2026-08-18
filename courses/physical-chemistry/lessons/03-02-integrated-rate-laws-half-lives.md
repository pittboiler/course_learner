# Physical Chemistry · Lesson 3.2: Integrated rate laws and half-lives

> ⏱ ~15 min · Module 3: Chemical kinetics · Builds on: [3.1 Rate laws and reaction order](03-01-rate-laws-reaction-order.md) · Unlocks: [3.3 Mechanisms: steady-state and pre-equilibrium](03-03-mechanisms-steady-state-pre-equilibrium.md)

## Why this matters

The differential rate law from [3.1](03-01-rate-laws-reaction-order.md) tells you the *speed* of a reaction at one instant — useful, but you rarely get to watch an instant. What you actually want is **how much is left after ten minutes, or ten years**: the shelf life of a drug, the clearance of a toxin from blood, the age of a rock from its residual $\ce{^{14}C}$. That answer is a *function of time*, and you get it by integrating the rate law — each of which is a separable ODE you can solve by hand. The same integration, run backwards, is how chemists **determine the order from data**: transform your concentration measurements the right way and the correct order is the one that plots as a straight line. This is the bridge from "rate now" to "concentration then," and it feeds directly into the mechanism-fitting of [3.3](03-03-mechanisms-steady-state-pre-equilibrium.md).

## The idea

A rate law like $-\,d[\ce{A}]/dt = k[\ce{A}]^n$ is a *slope rule*: it says how fast $[\ce{A}]$ is dropping given where it is right now. Integrating turns the slope rule into the whole **trajectory** — the concentration at every future time. The lovely part is that each order integrates to a *different-shaped* function of time: a straight line, an exponential decay, a reciprocal that blows up. So if you can guess which shape your data has, you know the order.

The trick that makes this practical is **linearization**. Instead of eyeballing curves, you plot the transform that would *straighten* each candidate: raw $[\ce{A}]$ for zero order, $\ln[\ce{A}]$ for first order, $1/[\ce{A}]$ for second order. Whichever plot is a straight line names the order, and the slope of that line hands you $k$ for free. One more summary number ties it together — the **half-life** $t_{1/2}$, the time to burn through half your starting material. Whether that time depends on how much you started with is itself a fingerprint of the order.

## The formal version

Take a single-reactant reaction $\ce{A -> products}$ with rate law $-\dfrac{d[\ce{A}]}{dt} = k[\ce{A}]^n$. Each order is a separable first-order ODE: collect all the $[\ce{A}]$ on one side, all the $t$ on the other, and integrate from the start ($t=0$, concentration $[\ce{A}]_0$) to time $t$ (concentration $[\ce{A}]$). Here $[\ce{A}]_0$ is the initial concentration (mol/L, written M) and $k$ is the rate constant, whose units differ by order.

**Zero order ($n=0$).** The rate is constant, indifferent to concentration:

$$-\frac{d[\ce{A}]}{dt} = k \;\Longrightarrow\; \int_{[\ce{A}]_0}^{[\ce{A}]} d[\ce{A}] = -\int_0^t k\,dt \;\Longrightarrow\; \boxed{[\ce{A}] = [\ce{A}]_0 - kt.}$$

*In words: concentration falls in a straight line.* A plot of $[\ce{A}]$ vs $t$ is linear with slope $-k$; units of $k$ are $\mathrm{M\,s^{-1}}$. Half-life (set $[\ce{A}] = [\ce{A}]_0/2$): $[\ce{A}]_0/2 = [\ce{A}]_0 - k\,t_{1/2}$, so

$$t_{1/2} = \frac{[\ce{A}]_0}{2k} \qquad(\text{grows with } [\ce{A}]_0).$$

**First order ($n=1$).** Rate proportional to concentration:

$$-\frac{d[\ce{A}]}{dt} = k[\ce{A}] \;\Longrightarrow\; \int_{[\ce{A}]_0}^{[\ce{A}]} \frac{d[\ce{A}]}{[\ce{A}]} = -\int_0^t k\,dt \;\Longrightarrow\; \ln[\ce{A}] - \ln[\ce{A}]_0 = -kt,$$

$$\boxed{\ln[\ce{A}] = \ln[\ce{A}]_0 - kt} \qquad\Longleftrightarrow\qquad [\ce{A}] = [\ce{A}]_0\,e^{-kt}.$$

*In words: the logarithm of concentration falls in a straight line — equivalently, concentration decays exponentially.* A plot of $\ln[\ce{A}]$ vs $t$ is linear with slope $-k$; units of $k$ are $\mathrm{s^{-1}}$. Half-life: $\ln\!\big(\tfrac12\big) = -k\,t_{1/2}$, so

$$t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k} \qquad(\textbf{independent of } [\ce{A}]_0).$$

This constancy is exactly why **radioactive decay** — a first-order process — has a fixed half-life you can date rocks with: it never matters how much you started with.

**Second order ($n=2$, one reactant).** Rate proportional to concentration squared:

$$-\frac{d[\ce{A}]}{dt} = k[\ce{A}]^2 \;\Longrightarrow\; \int_{[\ce{A}]_0}^{[\ce{A}]} \frac{d[\ce{A}]}{[\ce{A}]^2} = -\int_0^t k\,dt \;\Longrightarrow\; -\frac{1}{[\ce{A}]} + \frac{1}{[\ce{A}]_0} = -kt,$$

$$\boxed{\frac{1}{[\ce{A}]} = \frac{1}{[\ce{A}]_0} + kt.}$$

*In words: the reciprocal of concentration climbs in a straight line.* A plot of $1/[\ce{A}]$ vs $t$ is linear with slope $+k$; units of $k$ are $\mathrm{M^{-1}\,s^{-1}}$. Half-life: $2/[\ce{A}]_0 = 1/[\ce{A}]_0 + k\,t_{1/2}$, so

$$t_{1/2} = \frac{1}{k[\ce{A}]_0} \qquad(\text{shrinks as } [\ce{A}]_0 \text{ grows}).$$

**The diagnostic (the point of the whole lesson).** Given a table of $[\ce{A}]$ vs $t$, make all three plots — $[\ce{A}]$, $\ln[\ce{A}]$, and $1/[\ce{A}]$ against $t$ — and see **which one is straight**. That plot's transform names the order, and the magnitude of its slope is $k$. No curve-fitting, no guessing.

**Pseudo-first-order (callback to [3.1](03-01-rate-laws-reaction-order.md)).** Most real reactions involve two reactants, e.g. $-d[\ce{A}]/dt = k[\ce{A}][\ce{B}]$, which does not integrate to any single-reactant form above. The fix from 3.1: flood the system with $\ce{B}$ so $[\ce{B}]\approx[\ce{B}]_0$ stays effectively constant. Then

$$-\frac{d[\ce{A}]}{dt} = \underbrace{k[\ce{B}]_0}_{\displaystyle k'}\,[\ce{A}] = k'[\ce{A}],$$

a clean first-order decay in $\ce{A}$ with **observed** rate constant $k' = k[\ce{B}]_0$ (units $\mathrm{s^{-1}}$). Measure $k'$ from the $\ln[\ce{A}]$-vs-$t$ slope, repeat at several fixed $[\ce{B}]_0$, and recover the true $k = k'/[\ce{B}]_0$. This is *the* standard way experimentalists tame a two-reactant rate law into the tidy integrated forms above.

**Half-life summary.** How $t_{1/2}$ moves with initial concentration is a fingerprint:

| Order | Integrated (linear) form | $t_{1/2}$ | As reaction proceeds |
|---|---|---|---|
| 0 | $[\ce{A}] = [\ce{A}]_0 - kt$ | $[\ce{A}]_0/2k$ | successive half-lives **shorten** |
| 1 | $\ln[\ce{A}] = \ln[\ce{A}]_0 - kt$ | $\ln 2/k$ | successive half-lives **constant** |
| 2 | $1/[\ce{A}] = 1/[\ce{A}]_0 + kt$ | $1/k[\ce{A}]_0$ | successive half-lives **lengthen** |

## Picture

![Three side-by-side linearized kinetics plots: [A] vs t as a straight descending grey line (zero order), ln[A] vs t as a straight descending blue line (first order), and 1/[A] vs t as a straight ascending coral line (second order), illustrating the which-plot-is-straight diagnostic](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — a first-order clock).** A compound decomposes by first-order kinetics with $k = 6.93\times10^{-3}\ \mathrm{s^{-1}}$. What is its half-life, and what fraction remains after $300\ \mathrm{s}$?

$$t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{6.93\times10^{-3}\ \mathrm{s^{-1}}} = 100\ \mathrm{s}.$$

After $300\ \mathrm{s} = 3\,t_{1/2}$, so the fraction should be $(1/2)^3 = 1/8$. Check with the exponential:

$$\frac{[\ce{A}]}{[\ce{A}]_0} = e^{-kt} = e^{-(6.93\times10^{-3})(300)} = e^{-2.079} = 0.125 = \tfrac18. \ \checkmark$$

Three half-lives, one eighth left — and note the half-life never once referenced how much we started with.

**Example 2 (why you'd care — reading order off data).** A reaction $\ce{A -> products}$ gives the following:

| $t$ (s) | 0 | 20 | 40 | 60 |
|---|---|---|---|---|
| $[\ce{A}]$ (M) | 0.100 | 0.050 | 0.0333 | 0.0250 |

Run the diagnostic. The raw $[\ce{A}]$ drops by $0.050,\ 0.017,\ 0.008$ — decelerating, so *not* zero order. The $\ln[\ce{A}]$ values are $-2.30,\ -3.00,\ -3.40,\ -3.69$, with gaps $-0.70,\ -0.40,\ -0.29$ — not constant, so *not* first order. Now $1/[\ce{A}]$: $10,\ 20,\ 30,\ 40$ — a **constant rise of $10$ every $20\ \mathrm{s}$**. Straight line ⇒ **second order**, and

$$k = \text{slope of } \tfrac{1}{[\ce{A}]}\text{ vs } t = \frac{10\ \mathrm{M^{-1}}}{20\ \mathrm{s}} = 0.50\ \mathrm{M^{-1}\,s^{-1}}.$$

The order came from *which transform straightened*, and $k$ came from the slope of that line — never from a single measured rate.

## Watch out

- **You might think every half-life ignores the starting concentration.** Only first order does. Zero-order $t_{1/2} = [\ce{A}]_0/2k$ *grows* with $[\ce{A}]_0$, and second-order $t_{1/2} = 1/k[\ce{A}]_0$ *shrinks* with it. So as a second-order reaction proceeds and $[\ce{A}]$ falls, each successive half-life is *twice* the last — the tail drags on forever, while a first-order tail clips off equal-time slices.
- **You might read the wrong sign or units off the slope.** The $\ln[\ce{A}]$-vs-$t$ slope is $-k$ (take the magnitude); the $1/[\ce{A}]$-vs-$t$ slope is $+k$. And the *units of $k$ themselves flag the order* — $\mathrm{M\,s^{-1}}$, $\mathrm{s^{-1}}$, $\mathrm{M^{-1}\,s^{-1}}$ for orders 0, 1, 2 — a free consistency check.
- **You might apply $1/[\ce{A}] = 1/[\ce{A}]_0 + kt$ to a two-reactant reaction.** That form assumes rate $=k[\ce{A}]^2$. If instead rate $=k[\ce{A}][\ce{B}]$ with comparable $[\ce{A}]$ and $[\ce{B}]$, the integration is different — either work under **pseudo-first-order** conditions (flood with one reactant) or use the proper two-reactant integrated law.

## One-liner

> Separate and integrate each rate law; whichever of $[\ce{A}]$, $\ln[\ce{A}]$, $1/[\ce{A}]$ plots straight against $t$ names the order and its slope gives $k$ — and only first-order's half-life ignores how much you started with.

## Problems

**P1 (🟢)** (a) A first-order reaction has $k = 2.5\times10^{-3}\ \mathrm{s^{-1}}$ and $[\ce{A}]_0 = 0.80\ \mathrm{M}$. Find its half-life, and the concentration remaining after $600\ \mathrm{s}$. (b) A *different* first-order reaction has $t_{1/2} = 45\ \mathrm{min}$. Find its rate constant $k$ in $\mathrm{s^{-1}}$.

**P2 (🟡)** For the reaction $\ce{A -> products}$, describe the diagnostic you would use to determine the order from a table of $[\ce{A}]$ vs $t$. Apply it to the data below, identify the order, and extract $k$ from the slope.

| $t$ (s) | 0 | 50 | 100 | 150 |
|---|---|---|---|---|
| $[\ce{A}]$ (M) | 0.200 | 0.124 | 0.077 | 0.048 |

**P3 (🔴)** A second-order reaction $\ce{A -> products}$ has $k = 0.25\ \mathrm{M^{-1}\,s^{-1}}$ and $[\ce{A}]_0 = 0.50\ \mathrm{M}$. (a) How long until $[\ce{A}]$ falls to one-fifth of its initial value ($0.10\ \mathrm{M}$)? (b) Find $t_{1/2}$. Then find $t_{1/2}$ if you had instead started at $[\ce{A}]_0 = 0.25\ \mathrm{M}$, and contrast this concentration dependence with the first-order case.

<details>
<summary>Solutions</summary>

**P1** (a) First order, so the half-life ignores $[\ce{A}]_0$:
$$t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{2.5\times10^{-3}\ \mathrm{s^{-1}}} = 277\ \mathrm{s}.$$
Concentration after $600\ \mathrm{s}$:
$$[\ce{A}] = [\ce{A}]_0\,e^{-kt} = 0.80\,e^{-(2.5\times10^{-3})(600)} = 0.80\,e^{-1.5} = 0.80(0.2231) = 0.179\ \mathrm{M}.$$
*Check.* $600\ \mathrm{s} \approx 2.2\,t_{1/2}$, so a bit under a quarter should remain: $0.179/0.80 = 0.22$. ✓

(b) $k = \dfrac{\ln 2}{t_{1/2}}$ with $t_{1/2} = 45\ \mathrm{min} = 2700\ \mathrm{s}$:
$$k = \frac{0.693}{2700\ \mathrm{s}} = 2.57\times10^{-4}\ \mathrm{s^{-1}}.$$
*Check.* Units $\mathrm{s^{-1}}$, correct for first order. ✓

**P2** **Diagnostic:** make three plots — $[\ce{A}]$, $\ln[\ce{A}]$, and $1/[\ce{A}]$ against $t$. Whichever is a straight line gives the order (zero, first, second respectively), and the magnitude of that line's slope is $k$.

Test the transforms:
- $[\ce{A}]$: $0.200,\ 0.124,\ 0.077,\ 0.048$ — drops of $0.076,\ 0.047,\ 0.029$, decelerating ⇒ not zero order.
- $\ln[\ce{A}]$: $-1.609,\ -2.087,\ -2.564,\ -3.037$ — gaps $-0.478,\ -0.477,\ -0.473$, **constant** ⇒ first order. ✓
- ($1/[\ce{A}]$: $5.0,\ 8.1,\ 13.0,\ 20.8$ — accelerating, not linear.)

So the reaction is **first order**, and $k$ is minus the slope of $\ln[\ce{A}]$ vs $t$. Over the full span $\ln[\ce{A}]$ goes from $-1.609$ to $-3.037$, a change of $-1.428$ over $150\ \mathrm{s}$:
$$k = -\frac{\Delta\ln[\ce{A}]}{\Delta t} = -\frac{-1.428}{150\ \mathrm{s}} = 9.5\times10^{-3}\ \mathrm{s^{-1}}.$$
*Check.* Then $t_{1/2} = 0.693/(9.5\times10^{-3}) = 73\ \mathrm{s}$; indeed $[\ce{A}]$ roughly halves from $0.200$ to $\approx0.10$ by $t\approx73\ \mathrm{s}$ (between the $50$ and $100\ \mathrm{s}$ points), consistent. ✓

**P3** (a) Use the second-order integrated law $\dfrac{1}{[\ce{A}]} = \dfrac{1}{[\ce{A}]_0} + kt$, solved for $t$:
$$t = \frac{1}{k}\left(\frac{1}{[\ce{A}]} - \frac{1}{[\ce{A}]_0}\right) = \frac{1}{0.25}\left(\frac{1}{0.10} - \frac{1}{0.50}\right) = \frac{1}{0.25}(10 - 2) = \frac{8}{0.25} = 32\ \mathrm{s}.$$

(b) Half-life at $[\ce{A}]_0 = 0.50\ \mathrm{M}$:
$$t_{1/2} = \frac{1}{k[\ce{A}]_0} = \frac{1}{(0.25)(0.50)} = \frac{1}{0.125} = 8\ \mathrm{s}.$$
At $[\ce{A}]_0 = 0.25\ \mathrm{M}$ (half the concentration):
$$t_{1/2} = \frac{1}{(0.25)(0.25)} = \frac{1}{0.0625} = 16\ \mathrm{s}.$$
**Contrast.** Halving the starting concentration *doubled* the second-order half-life ($8 \to 16\ \mathrm{s}$): $t_{1/2}\propto 1/[\ce{A}]_0$, because a dilute mixture collides less often, so each molecule waits longer to react. The **first-order** half-life, $t_{1/2}=\ln2/k$, would not budge — it is fixed by $k$ alone regardless of concentration. This is the operational way to tell the two orders apart: run the reaction at two initial concentrations and see whether $t_{1/2}$ changes.

*Check.* (a) Units: $\mathrm{M^{-1}}/(\mathrm{M^{-1}\,s^{-1}}) = \mathrm{s}$ ✓. And $32\ \mathrm{s}$ exceeds the first half-life $8\ \mathrm{s}$ severalfold, as expected for a second-order tail that keeps slowing down. ✓

</details>

## Flashback

**From Lesson 3.1 (Rate laws and reaction order):** For the reaction $\ce{A + B -> products}$, the method of initial rates gives:

| Exp | $[\ce{A}]_0$ (M) | $[\ce{B}]_0$ (M) | initial rate ($\mathrm{M\,s^{-1}}$) |
|---|---|---|---|
| 1 | 0.10 | 0.10 | $2.0\times10^{-3}$ |
| 2 | 0.20 | 0.10 | $8.0\times10^{-3}$ |
| 3 | 0.10 | 0.20 | $4.0\times10^{-3}$ |

Determine the order in each reactant, the overall order, and the rate constant $k$ (with units).

<details>
<summary>Solution</summary>

Vary one concentration at a time and watch the rate ratio.

**Order in $\ce{A}$** (Exp 1→2, $[\ce{B}]$ fixed): doubling $[\ce{A}]$ multiplies the rate by $8.0/2.0 = 4 = 2^2$, so the reaction is **second order in $\ce{A}$**.

**Order in $\ce{B}$** (Exp 1→3, $[\ce{A}]$ fixed): doubling $[\ce{B}]$ multiplies the rate by $4.0/2.0 = 2 = 2^1$, so **first order in $\ce{B}$**.

Rate law: $\text{rate} = k[\ce{A}]^2[\ce{B}]$, **overall order $2+1 = 3$**. Solve for $k$ from Exp 1:
$$k = \frac{\text{rate}}{[\ce{A}]^2[\ce{B}]} = \frac{2.0\times10^{-3}}{(0.10)^2(0.10)} = \frac{2.0\times10^{-3}}{1.0\times10^{-3}} = 2.0\ \mathrm{M^{-2}\,s^{-1}}.$$

*Check.* Units for an overall third-order rate constant: $\mathrm{M\,s^{-1}} = k\cdot\mathrm{M^3}$ ⇒ $k$ in $\mathrm{M^{-2}\,s^{-1}}$ ✓. Verify against Exp 2: $k(0.20)^2(0.10) = 2.0(0.04)(0.10) = 8.0\times10^{-3}\ \mathrm{M\,s^{-1}}$ ✓.

</details>

## Connections

- **Backward:** this integrates the differential rate laws of [3.1](03-01-rate-laws-reaction-order.md) — the order $n$ defined there is exactly what the linearized plots recover here, and the **pseudo-first-order** trick is 3.1's flooding approximation cashed out as an integrable form. The exponential $[\ce{A}] = [\ce{A}]_0 e^{-kt}$ is the same first-order decay ODE you have met in growth/decay problems everywhere.
- **Forward:** [3.3 Mechanisms: steady-state and pre-equilibrium](03-03-mechanisms-steady-state-pre-equilibrium.md) uses these integrated laws to test proposed multi-step mechanisms — the observed order and the shape of $[\ce{A}](t)$ are the evidence a mechanism must reproduce. [3.4](03-04-arrhenius-transition-state-theory.md) then asks how the extracted $k$ depends on temperature.
- **Sideways (physics + gen chem):** first-order kinetics *is* radioactive decay, $N = N_0 e^{-\lambda t}$ with a concentration-independent half-life — the basis of carbon dating. This lesson also sharpens the qualitative [taste of kinetics](../../general-chemistry/lessons/04-03-taste-of-kinetics.md) from general chemistry into quantitative, integrable form.

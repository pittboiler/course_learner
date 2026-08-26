# Semiconductor Devices · Lesson 2.1: Junction electrostatics — depletion, potential, width and field

> ⏱ ~15 min · Module 2: The p–n junction · Builds on: [1.1 Carriers, doping and the Fermi level](01-01-carriers-doping-fermi-level.md), [`condensed-matter` 4.5](../../condensed-matter/lessons/04-05-pn-junction.md), [`em-refresher` 1.2](../../em-refresher/lessons/01-02-gauss-law.md) · Unlocks: [2.2 The ideal-diode equation](02-02-ideal-diode-equation.md), [2.3 Junction and diffusion capacitance](02-03-junction-diffusion-capacitance.md)

## Why this matters

[`condensed-matter` 4.5](../../condensed-matter/lessons/04-05-pn-junction.md) told you a junction has a built-in potential $V_{bi}$ and a depletion width $W$, and stated the formulas. This lesson **derives** them from Poisson's equation, and — the part that actually matters for devices — extends them to arbitrary applied bias.

That extension is where the engineering lives. $W(V)$ is a *voltage-controlled length*, and almost every junction property inherits its bias dependence from that one fact: the capacitance (because $C = \varepsilon/W$), the breakdown voltage (because the peak field is $2V/W$), the varactor's tuning range, the way a MOSFET's threshold shifts with body bias, and the Early effect that limits a BJT's output resistance. Get $W(V)$ and the field profile right and half of Modules 2 and 3 follows.

## The idea

Put $n$-type and $p$-type silicon in contact. Electrons on the $n$-side face an enormous concentration gradient and diffuse left; holes diffuse right. But every electron that leaves the $n$-side abandons a fixed, ionized donor — a positive charge bolted to the lattice that cannot follow. Likewise the $p$-side is left with fixed negative acceptors.

So a **dipole layer** builds up: negative fixed charge on the $p$-side, positive on the $n$-side, with the mobile carriers swept out from between them. That charge creates a field pointing from $n$ to $p$, which opposes further diffusion. Equilibrium arrives when the drift it drives exactly cancels the diffusion — the same balance as [1.2](01-02-drift-diffusion-einstein.md), now with an abrupt doping step instead of a gentle grade.

The [depletion approximation](../reference.md#depletion-approximation) is what makes this solvable by hand: assume the transition from "fully depleted" to "fully neutral" is abrupt. Inside the depletion region, take the mobile carrier density as exactly zero, so the charge density is just the dopant charge. Outside, take it as exactly neutral, so the charge density is zero. That is a lie — the real transition is smeared over a few Debye lengths — but it is a very good lie, and it turns Poisson's equation into two lines of integration.

The result is a picture worth memorizing: **charge is two rectangles, field is a triangle, potential is two parabolas.** Each integration smooths the previous one by one power of $x$. And a small piece of bookkeeping does a lot of work: the two rectangles must have equal area, because the junction as a whole is neutral. That single constraint, $x_nN_d = x_pN_a$, is what makes a one-sided junction spread almost entirely into its lightly doped side — which is why the light side controls everything.

## The formal version

**Setup.** An abrupt junction at $x=0$: $p$-type with acceptor density $N_a$ for $x<0$, $n$-type with $N_d$ for $x>0$. Depletion extends from $-x_p$ to $+x_n$.

**Charge neutrality of the depletion region.** The total charge must vanish (there is no net charge to terminate field lines outside):

$$\boxed{\;qN_ax_p = qN_dx_n \quad\Longrightarrow\quad N_ax_p = N_dx_n.\;}$$

*In words: the lightly doped side must deplete further to expose the same amount of charge.* This is the whole of the one-sided junction story.

**Poisson's equation.** With $\rho = q(N_d-N_a)$ in the depletion region and $\mathcal{E} = -d\psi/dx$:

$$\frac{d\mathcal{E}}{dx} = \frac{\rho}{\varepsilon_s} = \begin{cases}-\dfrac{qN_a}{\varepsilon_s}, & -x_p<x<0,\\[6pt] +\dfrac{qN_d}{\varepsilon_s}, & 0<x<x_n.\end{cases}$$

**Integrating once: the field.** Using $\mathcal{E}(-x_p) = \mathcal{E}(x_n) = 0$ (no field in the neutral regions):

$$\mathcal{E}(x) = \begin{cases}-\dfrac{qN_a}{\varepsilon_s}(x+x_p), & -x_p<x<0,\\[6pt] -\dfrac{qN_d}{\varepsilon_s}(x_n-x), & 0<x<x_n.\end{cases}$$

*In words: the field ramps linearly on each side and peaks at the metallurgical junction.* Both expressions agree at $x=0$ **precisely because** $N_ax_p = N_dx_n$ — the neutrality condition is what makes the field continuous.

$$\boxed{\;\mathcal{E}_{\max} = \frac{qN_ax_p}{\varepsilon_s} = \frac{qN_dx_n}{\varepsilon_s}.\;}$$

The field is **negative** throughout (pointing from $n$ toward $p$, i.e. in the $-x$ direction), opposing the diffusion of holes to the right — as it must.

**Integrating twice: the potential.** The total potential drop is the area under the field triangle, whose base is $W = x_n+x_p$ and height $|\mathcal{E}_{\max}|$:

$$V_{bi}-V = \frac{1}{2}|\mathcal{E}_{\max}|\,W .$$

*In words: the potential across the junction is the area of the field triangle.* This one geometric fact replaces a page of algebra and is the fastest route to almost every result below.

**Built-in potential.** From requiring zero net current in equilibrium (or equivalently, a flat $E_F$):

$$\boxed{\;V_{bi} = \frac{k_BT}{q}\ln\frac{N_aN_d}{n_i^2} = V_T\ln\frac{N_aN_d}{n_i^2}.\;}$$

*In words: the barrier is the thermal voltage times the log of how far both sides are from intrinsic.* Note it is a *logarithm* — a hundredfold increase in doping raises $V_{bi}$ by only $V_T\ln100 = 119$ mV. For silicon at practical dopings, $V_{bi}$ is always 0.6–1.0 V. It can never exceed $E_g/q$, because $E_F$ cannot leave the gap.

**Depletion width under bias.** Combining $V_{bi}-V = \tfrac12|\mathcal{E}_{\max}|W$ with $\mathcal{E}_{\max} = qN_dx_n/\varepsilon_s$ and $N_ax_p = N_dx_n$:

$$\boxed{\;W(V) = \sqrt{\frac{2\varepsilon_s(V_{bi}-V)}{q}\left(\frac{1}{N_a}+\frac{1}{N_d}\right)}\;}$$

$$x_n = W\frac{N_a}{N_a+N_d}, \qquad x_p = W\frac{N_d}{N_a+N_d}, \qquad \mathcal{E}_{\max} = \frac{2(V_{bi}-V)}{W}.$$

**Sign convention, which matters.** $V$ is the applied bias, **positive for forward** ($p$-side positive). So:

- Reverse bias ($V<0$): $V_{bi}-V$ grows, $W$ grows, $\mathcal{E}_{\max}$ grows. The junction gets wider and harder.
- Forward bias ($V>0$): $V_{bi}-V$ shrinks, $W$ shrinks, the barrier lowers, and current floods across ([2.2](02-02-ideal-diode-equation.md)).

*In words: reverse bias pulls the junction open, forward bias squeezes it shut.* Note $W\propto\sqrt{V_{bi}-V}$ — a square root, so doubling the reverse bias widens the junction by only 41%.

**The one-sided junction.** If $N_a\gg N_d$ (a $p^+n$ junction), then $1/N_a$ is negligible and

$$W\approx\sqrt{\frac{2\varepsilon_s(V_{bi}-V)}{qN_d}}, \qquad x_n\approx W, \qquad x_p\approx \frac{N_d}{N_a}W\approx0.$$

*In words: the depletion region lives almost entirely in the lightly doped side, and that side's doping controls the width, the peak field, the capacitance and the breakdown voltage.* This is the single most useful simplification in junction engineering, and essentially every real diode is designed this way — one side heavily doped for low resistance, the other lightly doped to absorb the field.

**Numbers for silicon** (using the [1.1](01-01-carriers-doping-fermi-level.md) constants, $p^+n$ with $N_a=10^{18}$):

| $N_d$ (cm$^{-3}$) | $V_{bi}$ (V) | $W$ at 0 V | $\mathcal{E}_{\max}$ at 0 V |
|---|---|---|---|
| $10^{15}$ | 0.775 | 1.00 µm | $1.54\times10^4$ V/cm |
| $10^{16}$ | 0.835 | 0.331 µm | $5.05\times10^4$ V/cm |
| $10^{17}$ | 0.895 | 0.113 µm | $1.58\times10^5$ V/cm |

Two patterns worth absorbing: $V_{bi}$ barely moves (a logarithm), while $W$ falls as $1/\sqrt{N_d}$ and $\mathcal{E}_{\max}$ rises as $\sqrt{N_d}$. **Heavier doping means a thinner, fiercer junction** — good for capacitance density and bad for breakdown ([2.4](02-04-reverse-breakdown.md)).

**When the depletion approximation fails.** The transition from depleted to neutral is smeared over a few **Debye lengths**,

$$L_D = \sqrt{\frac{\varepsilon_sk_BT}{q^2N}},$$

which is 41 nm at $N=10^{16}$ and 13 nm at $10^{18}$. As long as $W\gg L_D$ the approximation is excellent. It degrades under heavy forward bias (where $W$ shrinks toward $L_D$) and in very heavily doped, very thin junctions — which is exactly the regime of modern scaled transistors, and one reason they are simulated rather than hand-calculated.

## Picture

![A four-panel stack sharing one horizontal position axis through a p-n junction. Top: the doping and the depletion region, showing mobile carriers swept out and fixed negative acceptor ions on the p side and fixed positive donor ions on the n side, with x_p and x_n marked and the n side narrower because it is more heavily doped. Second: charge density rho, two rectangles of opposite sign whose areas are equal. Third: electric field, a triangle peaking negatively at the junction. Fourth: potential, two parabolas joining smoothly and rising by V_bi from the p side to the n side.](assets/02-01-fig1.svg)

Read it top to bottom as successive integrations. The charge is two rectangles; integrating gives the triangular field; integrating again gives the smooth potential step. Two things to notice. **The rectangles have equal area** — that is $N_ax_p = N_dx_n$, and it is why the field is continuous at the junction. And **the lightly doped side is wider**: the same charge must be exposed on both sides, so the side with fewer dopants per unit volume must give up more volume. The potential's total rise is $V_{bi}$, and it equals the area of the field triangle.

## Worked examples

**Example 1 (a one-sided junction, zero bias to reverse bias).** A silicon $p^+n$ junction has $N_a = 10^{18}$, $N_d = 10^{16}\ \mathrm{cm^{-3}}$. Find $V_{bi}$, $W$, $\mathcal{E}_{\max}$, and $x_n$ versus $x_p$ at zero bias, then at $-5$ V.

*Built-in potential.*

$$V_{bi} = 0.0259\ln\frac{(10^{18})(10^{16})}{(10^{10})^2} = 0.0259\ln(10^{14}) = 0.0259(32.24) = 0.835\ \mathrm{V}.$$

*Zero-bias width.* Since $1/N_a = 10^{-18}$ is 1% of $1/N_d = 10^{-16}$, the one-sided form is good to 0.5%:

$$W = \sqrt{\frac{2(1.04\times10^{-12})(0.835)}{(1.602\times10^{-19})(10^{16})}} = \sqrt{\frac{1.737\times10^{-12}}{1.602\times10^{-3}}} = \sqrt{1.084\times10^{-9}} = 3.29\times10^{-5}\ \mathrm{cm} = 0.329\ \mu\mathrm{m}.$$

*Split.*

$$x_n = W\frac{N_a}{N_a+N_d} = 0.329\times\frac{10^{18}}{1.01\times10^{18}} = 0.326\ \mu\mathrm{m}, \qquad x_p = 0.329-0.326 = 0.0033\ \mu\mathrm{m} = 3.3\ \mathrm{nm}.$$

**99% of the depletion region sits in the lightly doped $n$-side**, and the $p^+$ side is depleted by only 3 nm — a dozen atomic layers.

*Peak field.*

$$\mathcal{E}_{\max} = \frac{2(V_{bi}-V)}{W} = \frac{2(0.835)}{3.29\times10^{-5}} = 5.07\times10^{4}\ \mathrm{V/cm}.$$

*At $V = -5$ V.* Now $V_{bi}-V = 0.835+5 = 5.835$ V:

$$W = 0.329\ \mu\mathrm{m}\times\sqrt{\frac{5.835}{0.835}} = 0.329\times\sqrt{6.99} = 0.329\times2.646 = 0.870\ \mu\mathrm{m},$$

$$\mathcal{E}_{\max} = \frac{2(5.835)}{8.70\times10^{-5}} = 1.34\times10^{5}\ \mathrm{V/cm}.$$

*The scaling worth internalizing.* Seven times the total junction voltage gave 2.65 times the width and 2.65 times the field — both go as $\sqrt{V_{bi}-V}$. So the field grows only as the square root of the applied voltage, which is precisely why a lightly doped drift region can hold off a large voltage: spread it over a wide depletion region and the field stays below the critical value. That is the entire design principle of a power diode ([2.4](02-04-reverse-breakdown.md)).

**Example 2 (extracting doping from a measurement, and reading a band diagram).** A junction's depletion width is measured as 1.00 µm at zero bias and 2.24 µm at $-4$ V reverse. Is it one-sided, and what is the light-side doping?

*Test the square-root law.* If the depletion approximation holds with a single $N$,

$$\frac{W(-4)}{W(0)} = \sqrt{\frac{V_{bi}+4}{V_{bi}}}.$$

Measured ratio: $2.24/1.00 = 2.24$, so $V_{bi}+4 = 5.02\,V_{bi}$, giving

$$V_{bi} = \frac{4}{4.02} = 0.995\ \mathrm{V}.$$

Hmm — that is high for silicon but not impossible; it implies $N_aN_d = n_i^2e^{V_{bi}/V_T} = 10^{20}e^{38.4} = 10^{20}(4.8\times10^{16}) = 4.8\times10^{36}$.

*Now get the light-side doping from the width.* Using the one-sided formula at zero bias:

$$N_d = \frac{2\varepsilon_sV_{bi}}{qW^2} = \frac{2(1.04\times10^{-12})(0.995)}{(1.602\times10^{-19})(10^{-4})^2} = \frac{2.070\times10^{-12}}{1.602\times10^{-27}} = 1.29\times10^{15}\ \mathrm{cm^{-3}}.$$

*Consistency check.* If $N_d = 1.29\times10^{15}$ and $N_aN_d = 4.8\times10^{36}$, then $N_a = 3.7\times10^{21}\ \mathrm{cm^{-3}}$ — **which is impossible**, exceeding silicon's atomic density of $5\times10^{22}$ by less than two orders of magnitude but far above the solid solubility limit of any dopant ($\sim10^{21}$ at best).

*What that tells you.* The measurement is inconsistent with an ideal abrupt one-sided junction. Real possibilities: the junction is **graded** rather than abrupt (for a linearly graded junction $W\propto(V_{bi}-V)^{1/3}$, not $^{1/2}$, which would change the extraction entirely); or there is a series resistance or a parasitic capacitance corrupting the measurement; or the light side is not uniformly doped.

This is exactly why the real technique is not two points but the **$1/C^2$ plot** of [2.3](02-03-junction-diffusion-capacitance.md): sweeping bias and plotting $1/C^2$ against $V$ gives a *straight line* for an abrupt uniform junction, whose slope gives the doping and whose intercept gives $V_{bi}$ — and, crucially, whose **curvature immediately reveals** non-uniform doping or grading. Two data points can always be fitted by two parameters; the value of the sweep is that it can *fail*, and tell you so.

## Watch out

- **You might think the depletion region is symmetric.** It almost never is. $N_ax_p = N_dx_n$ means the widths are in *inverse* ratio to the dopings, so a 100:1 doping ratio gives a 100:1 width ratio. In a $p^+n$ diode essentially all of it is on the $n$-side.
- **You might use $W\propto V$ instead of $\sqrt{V}$.** The square root is the whole character of the device: it is why capacitance varies as $V^{-1/2}$ (giving a varactor its tuning law), and why breakdown voltage goes as $1/N$ rather than $1/\sqrt N$.
- **You might get the bias sign backwards.** $V$ is positive in **forward** bias, and it appears as $V_{bi}-V$. Reverse bias means $V<0$, so $V_{bi}-V$ is *larger* than $V_{bi}$. Plugging a positive number in for a reverse bias will shrink your junction instead of widening it.
- **You might think $V_{bi}$ can be measured with a voltmeter.** It cannot. Connect leads and you create two metal–semiconductor contacts whose own built-in potentials exactly cancel it — the total loop EMF of a junction in equilibrium is zero, as thermodynamics requires. ($V_{bi}$ is inferred from the $1/C^2$ intercept instead.)
- **You might apply these formulas at heavy forward bias.** As $V\to V_{bi}$ the formula predicts $W\to0$, which is nonsense: the depletion approximation fails once $W$ approaches a few Debye lengths, and injected carriers can no longer be neglected. Forward-bias junction capacitance is conventionally approximated rather than computed from this formula.

## One-liner

> Diffusion strips a layer bare and leaves fixed dopant charge behind: charge is two equal-area rectangles, field is a triangle, potential is two parabolas — and $W\propto\sqrt{V_{bi}-V}$ makes the junction a voltage-controlled length.

## Problems

**P1 (🟢)** A silicon junction has $N_a = 5\times10^{17}$ and $N_d = 2\times10^{16}\ \mathrm{cm^{-3}}$. (a) Find $V_{bi}$. (b) Find $W$ at zero bias. (c) Find $x_n$ and $x_p$. (d) Find $\mathcal{E}_{\max}$.

**P2 (🟡)** A $p^+n$ silicon diode has $N_d = 10^{15}\ \mathrm{cm^{-3}}$ on the light side ($N_a = 10^{19}$). (a) Find $V_{bi}$, and $W$ and $\mathcal{E}_{\max}$ at zero bias. (b) Repeat at $-50$ V. (c) Silicon breaks down at about $3\times10^5$ V/cm. At what reverse voltage does this junction reach that field? (d) Compare with the same calculation for $N_d = 10^{17}$ and state the design rule.

**P3 (🔴)** A **linearly graded** junction has net doping $N_d-N_a = ax$ near $x=0$, with grading constant $a$ (cm$^{-4}$). (a) Solve Poisson's equation to find the field profile, taking the depletion region as $-W/2<x<W/2$ by symmetry. (b) Show that $W\propto(V_{bi}-V)^{1/3}$ and find the constant. (c) Find $\mathcal{E}_{\max}$ and its dependence on $(V_{bi}-V)$. (d) For $a = 10^{20}\ \mathrm{cm^{-4}}$ and $V_{bi}-V = 5$ V, compute $W$ and $\mathcal{E}_{\max}$, and compare the voltage-dependence exponents of the abrupt and graded cases in a sentence about what a capacitance measurement would show.

<details>
<summary>Solutions</summary>

**P1** (a) $$V_{bi} = 0.0259\ln\frac{(5\times10^{17})(2\times10^{16})}{10^{20}} = 0.0259\ln(10^{14}) = 0.0259(32.24) = 0.835\ \mathrm{V}.$$

(Note $N_aN_d = 10^{34}$, so $N_aN_d/n_i^2 = 10^{14}$ — the same as Example 1, hence essentially the same $V_{bi}$. Only the *product* matters.)

(b) $$\frac{1}{N_a}+\frac{1}{N_d} = \frac{1}{5\times10^{17}}+\frac{1}{2\times10^{16}} = 2\times10^{-18}+5\times10^{-17} = 5.2\times10^{-17}.$$

$$W = \sqrt{\frac{2(1.04\times10^{-12})(0.835)(5.2\times10^{-17})}{1.602\times10^{-19}}} = \sqrt{\frac{9.031\times10^{-29}}{1.602\times10^{-19}}} = \sqrt{5.637\times10^{-10}} = 2.374\times10^{-5}\ \mathrm{cm} = 0.237\ \mu\mathrm{m}.$$

(c) $$x_n = W\frac{N_a}{N_a+N_d} = 0.237\times\frac{5\times10^{17}}{5.2\times10^{17}} = 0.228\ \mu\mathrm{m},$$
$$x_p = W\frac{N_d}{N_a+N_d} = 0.237\times\frac{2\times10^{16}}{5.2\times10^{17}} = 0.0091\ \mu\mathrm{m} = 9.1\ \mathrm{nm}.$$

(Check: $N_ax_p = 5\times10^{17}\times9.1\times10^{-7} = 4.55\times10^{11}$; $N_dx_n = 2\times10^{16}\times2.28\times10^{-5} = 4.56\times10^{11}$ ✓.)

(d) $$\mathcal{E}_{\max} = \frac{2(V_{bi}-V)}{W} = \frac{2(0.835)}{2.374\times10^{-5}} = 7.04\times10^{4}\ \mathrm{V/cm}.$$

**P2** (a) $$V_{bi} = 0.0259\ln\frac{(10^{19})(10^{15})}{10^{20}} = 0.0259\ln(10^{14}) = 0.835\ \mathrm{V}.$$

One-sided ($N_a$ is $10^4$ times $N_d$):

$$W = \sqrt{\frac{2(1.04\times10^{-12})(0.835)}{(1.602\times10^{-19})(10^{15})}} = \sqrt{\frac{1.737\times10^{-12}}{1.602\times10^{-4}}} = \sqrt{1.084\times10^{-8}} = 1.041\times10^{-4}\ \mathrm{cm} = 1.04\ \mu\mathrm{m}.$$

$$\mathcal{E}_{\max} = \frac{2(0.835)}{1.041\times10^{-4}} = 1.60\times10^{4}\ \mathrm{V/cm}.$$

(b) At $-50$ V, $V_{bi}-V = 50.835$ V:

$$W = 1.04\ \mu\mathrm{m}\times\sqrt{\frac{50.835}{0.835}} = 1.04\times\sqrt{60.9} = 1.04\times7.80 = 8.12\ \mu\mathrm{m},$$

$$\mathcal{E}_{\max} = \frac{2(50.835)}{8.12\times10^{-4}} = 1.25\times10^{5}\ \mathrm{V/cm}.$$

(c) Set $\mathcal{E}_{\max} = 3\times10^5$. Since $\mathcal{E}_{\max} = \sqrt{2qN_d(V_{bi}-V)/\varepsilon_s}$,

$$V_{bi}-V_B = \frac{\varepsilon_s\mathcal{E}_{\rm crit}^2}{2qN_d} = \frac{(1.04\times10^{-12})(9\times10^{10})}{2(1.602\times10^{-19})(10^{15})} = \frac{9.36\times10^{-2}}{3.204\times10^{-4}} = 292\ \mathrm{V}.$$

$$V_B \approx -291\ \mathrm{V}.$$

(d) For $N_d = 10^{17}$ (a hundred times heavier):

$$V_{bi}-V_B = \frac{9.36\times10^{-2}}{3.204\times10^{-2}} = 2.92\ \mathrm{V} \quad\Longrightarrow\quad V_B\approx-2.0\ \mathrm{V}.$$

**The design rule:** breakdown voltage is inversely proportional to the light-side doping,

$$V_B = \frac{\varepsilon_s\mathcal{E}_{\rm crit}^2}{2qN_d} \propto \frac{1}{N_d}.$$

A hundredfold heavier doping costs a hundredfold in breakdown voltage. This is *the* fundamental trade of power-device design: a 1 kV diode needs a drift region doped around $10^{14}$ and tens of microns thick, which is also thick and lightly doped enough to have substantial on-resistance. The resulting $R_{on}\propto V_B^{2.5}$ relationship is the "silicon limit" that wide-band-gap materials (SiC, GaN) exist to beat, since $\mathcal{E}_{\rm crit}$ enters squared and is roughly ten times larger in SiC.

(A caveat worth flagging: at $N_d = 10^{17}$ the predicted $V_B = 2$ V is below about $6E_g/q = 6.7$ V, where the mechanism switches from avalanche to Zener tunneling and the constant-$\mathcal{E}_{\rm crit}$ model no longer applies — see [2.4](02-04-reverse-breakdown.md).)

**P3** (a) Poisson with $\rho = q\,ax$:

$$\frac{d\mathcal{E}}{dx} = \frac{qax}{\varepsilon_s} \quad\Longrightarrow\quad \mathcal{E}(x) = \frac{qa}{2\varepsilon_s}\left(x^2-\frac{W^2}{4}\right),$$

where the constant is fixed by $\mathcal{E}(\pm W/2) = 0$. The field is a **downward parabola**, most negative at $x=0$:

$$\mathcal{E}_{\max} = |\mathcal{E}(0)| = \frac{qaW^2}{8\varepsilon_s}.$$

(b) The potential is minus the integral of the field across the region:

$$V_{bi}-V = -\int_{-W/2}^{W/2}\mathcal{E}\,dx = -\frac{qa}{2\varepsilon_s}\int_{-W/2}^{W/2}\left(x^2-\frac{W^2}{4}\right)dx.$$

$$\int_{-W/2}^{W/2}x^2dx = \frac{W^3}{12}, \qquad \int_{-W/2}^{W/2}\frac{W^2}{4}dx = \frac{W^3}{4}.$$

$$V_{bi}-V = -\frac{qa}{2\varepsilon_s}\left(\frac{W^3}{12}-\frac{W^3}{4}\right) = -\frac{qa}{2\varepsilon_s}\left(-\frac{W^3}{6}\right) = \frac{qaW^3}{12\varepsilon_s}.$$

$$\boxed{\ W = \left[\frac{12\varepsilon_s(V_{bi}-V)}{qa}\right]^{1/3}\ }$$

— a **cube root**, not a square root.

(c) $$\mathcal{E}_{\max} = \frac{qaW^2}{8\varepsilon_s} = \frac{qa}{8\varepsilon_s}\left[\frac{12\varepsilon_s(V_{bi}-V)}{qa}\right]^{2/3} \propto (V_{bi}-V)^{2/3}.$$

(Equivalently and more usefully, $\mathcal{E}_{\max} = \tfrac32(V_{bi}-V)/W$ — the field profile is a parabola, whose area is $\tfrac23$ base × height, versus $\tfrac12$ for the abrupt junction's triangle.)

(d) With $a = 10^{20}\ \mathrm{cm^{-4}}$ and $V_{bi}-V = 5$ V:

$$W = \left[\frac{12(1.04\times10^{-12})(5)}{(1.602\times10^{-19})(10^{20})}\right]^{1/3} = \left[\frac{6.24\times10^{-11}}{1.602\times10^{1}}\right]^{1/3} = \left[3.895\times10^{-12}\right]^{1/3}.$$

$$W = 1.573\times10^{-4}\ \mathrm{cm} = 1.57\ \mu\mathrm{m}.$$

$$\mathcal{E}_{\max} = \frac{3(V_{bi}-V)}{2W} = \frac{3(5)}{2(1.573\times10^{-4})} = 4.77\times10^{4}\ \mathrm{V/cm}.$$

*What a capacitance measurement shows.* Since $C = \varepsilon_s/W$ per unit area:

- **Abrupt:** $W\propto(V_{bi}-V)^{1/2}$, so $C\propto(V_{bi}-V)^{-1/2}$ and $1/C^2$ is **linear** in $V$.
- **Graded:** $W\propto(V_{bi}-V)^{1/3}$, so $C\propto(V_{bi}-V)^{-1/3}$ and $1/C^3$ is linear in $V$.

So plotting $1/C^2$ versus $V$ and asking whether it is straight is a direct test of the junction profile — and it is exactly the diagnostic Example 2's two-point measurement could not perform. More generally, for a profile $N\propto x^m$ one finds $C\propto(V_{bi}-V)^{-1/(m+2)}$, so the measured exponent reads off the grading. This is a standard characterization technique, and it is why [2.3](02-03-junction-diffusion-capacitance.md) treats the $C$–$V$ sweep as a measurement instrument rather than merely a device parameter.

(Design footnote: the graded junction's gentler exponent is also *why* varactor diodes are made with deliberately engineered profiles — a "hyperabrupt" junction with $m<0$ gives a much steeper $C(V)$ and hence a wider tuning range for a voltage-controlled oscillator.)

</details>

## Flashback

**From Lesson 1.1 (Carriers, doping and the Fermi level):** A silicon junction has $N_a = 10^{17}$ and $N_d = 10^{15}\ \mathrm{cm^{-3}}$. (a) Find the majority and minority carrier densities on each side. (b) Find $V_{bi}$. (c) Show that $V_{bi} = V_T\ln(p_{p0}/p_{n0})$ as well, and explain why the two forms agree.

<details>
<summary>Solution</summary>

(a) $p$-side: $p_{p0} = N_a = 10^{17}$, $n_{p0} = n_i^2/N_a = 10^{20}/10^{17} = 10^3\ \mathrm{cm^{-3}}$.

$n$-side: $n_{n0} = N_d = 10^{15}$, $p_{n0} = n_i^2/N_d = 10^{20}/10^{15} = 10^5\ \mathrm{cm^{-3}}$.

(b) $$V_{bi} = 0.0259\ln\frac{(10^{17})(10^{15})}{10^{20}} = 0.0259\ln(10^{12}) = 0.0259(27.63) = 0.715\ \mathrm{V}.$$

(c) $$V_T\ln\frac{p_{p0}}{p_{n0}} = 0.0259\ln\frac{10^{17}}{10^{5}} = 0.0259\ln(10^{12}) = 0.715\ \mathrm{V} \ \checkmark.$$

They agree identically because

$$\frac{p_{p0}}{p_{n0}} = \frac{N_a}{n_i^2/N_d} = \frac{N_aN_d}{n_i^2},$$

so the two expressions are algebraically the same thing.

The second form is the more physical one, and it is the one [2.2](02-02-ideal-diode-equation.md) builds on: it says the barrier height is exactly what is needed to sustain a $10^{12}$-fold hole concentration ratio across the junction in equilibrium — a Boltzmann factor. Turn it around and you have the **law of the junction**: apply a forward bias $V$ and you lower that barrier, so the ratio changes by $e^{qV/k_BT}$, which is where the diode's exponential comes from.

</details>

## Connections

- **Backward:** the built-in potential and the drift–diffusion balance are [`condensed-matter` 4.5](../../condensed-matter/lessons/04-05-pn-junction.md) and [1.2](01-02-drift-diffusion-einstein.md); Poisson's equation is [`em-refresher` 1.2](../../em-refresher/lessons/01-02-gauss-law.md) in one dimension.
- **Forward:** [2.2](02-02-ideal-diode-equation.md) uses the barrier lowering to get the diode equation; [2.3](02-03-junction-diffusion-capacitance.md) turns $W(V)$ into $C(V)$; [2.4](02-04-reverse-breakdown.md) asks when $\mathcal{E}_{\max}$ gets dangerous; [3.3](03-03-mos-capacitor.md) runs the identical Poisson analysis under a gate oxide.
- **Sideways:** "charge → integrate → field → integrate → potential" is the standard electrostatics ladder of [`em-refresher` 1.3](../../em-refresher/lessons/01-03-electric-potential.md); the Debye length limiting the approximation is the same screening length as in a plasma ([`plasma-physics`](../../plasma-physics/syllabus.md)) and in an electrolyte.

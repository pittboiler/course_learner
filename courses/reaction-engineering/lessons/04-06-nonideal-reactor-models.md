# Chemical Reaction Engineering · Lesson 4.6: Nonideal reactor models & a taste of bio/polymer reactors

> ⏱ ~15 min · Module 4: Catalysis, Diffusion & Nonideal Flow · Builds on: [4.5 Residence-time distribution](04-05-residence-time-distribution.md), [1.5 CSTR](01-05-cstr.md), [1.6 PFR & packed bed](01-06-pfr-packed-bed.md) · Unlocks: **the end of the course** — you can now size a real, non-ideal reactor and see where the field branches next

## Why this matters

Last lesson you measured a reactor's **residence-time distribution** (RTD) — the spread of times molecules actually spend inside. That told you *how* non-ideal a vessel is. But a plant manager doesn't want a variance; she wants a **conversion**. This lesson closes the loop: take a measured RTD and turn it into a predicted $X$ for a reactor that is neither a perfect PFR nor a perfect CSTR. Two cheap models do almost all the work, and they need exactly one number each — a number the RTD hands you for free. Then, because this is the last stop, we peek at two reactor worlds that run on the same design equations but with new kinetics: the **bioreactor** and the **polymerization reactor**.

## The idea

An ideal PFR and an ideal CSTR are the two ends of a spectrum. A PFR is orderly: every molecule marches through in lockstep, all spending exactly $\tau$ inside — its RTD is a spike. A CSTR is chaotic: a molecule might short-circuit out immediately or linger forever — its RTD is a broad exponential. A real reactor lives somewhere in between, and its RTD's **width** tells you *where*.

The **tanks-in-series** picture makes this concrete. Imagine chopping your real vessel into $N$ identical little stirred tanks plumbed in a row (the figure). One big tank ($N=1$) is a CSTR — maximally messy. A hundred tiny tanks in a row ($N=100$) is almost a PFR — each tank is so small that the fluid barely mixes back before moving on. So a single knob $N$ slides you smoothly from CSTR to PFR, and the RTD's spread sets $N$: a narrow RTD means many effective tanks, a broad one means few. That's the whole model — pick $N$ from the data, then compute conversion as if you had $N$ real CSTRs in series (which you already know how to do from Module 1).

The **dispersion** model tells the same story with different words: start from plug flow and sprinkle in some back-mixing (axial dispersion). A little dispersion is a near-PFR; a lot is heading toward a CSTR. For mild non-ideality the two models agree, so you use whichever is handier.

One subtlety the RTD alone *cannot* settle: **when** molecules mix. Two vessels can share an identical RTD yet give different conversions, because how early or late fluid elements blend affects any reaction that isn't first order. The truth is trapped between two bookends — **segregation** and **maximum mixedness** — and you bound it.

## The formal version

**Tanks-in-series (TIS).** Model the real reactor as $N$ equal CSTRs in series, total space time $\tau = V/v_0$, so each tank has $\tau_i = \tau/N$. The one number you need comes from the RTD's dimensionless variance:

$$\boxed{\,N = \frac{\tau^2}{\sigma^2}\,}$$

where $\tau$ is the mean residence time ($\mathrm{s}$ or $\mathrm{min}$) and $\sigma^2$ is the RTD variance ($\mathrm{s^2}$), both measured in Lesson 4.5. *In words: the number of effective tanks is the square of the mean over the variance — a tight RTD (small $\sigma^2$) means many tanks, hence near-plug flow.* Sanity: a single CSTR has $\sigma^2=\tau^2$ so $N=1$; a PFR has $\sigma^2\to 0$ so $N\to\infty$.

For a **first-order** reaction $-r_A = kC_A$, one CSTR drops the concentration by a factor $1/(1+\tau_i k)$, so $N$ of them in series give

$$\boxed{\,X = 1 - \frac{1}{(1+\tau_i k)^N}\,}, \qquad \tau_i = \frac{\tau}{N}.$$

*In words: each tank knocks the survivors down by the same factor; chain $N$ of them.* Check the ends: $N=1$ gives the CSTR result $X = \tau_i k/(1+\tau_i k)$, and as $N\to\infty$, $(1+\tau k/N)^{N}\to e^{\tau k}$, recovering the PFR result $X = 1-e^{-\tau k}$.

**Dispersion model.** Add an axial-dispersion term (an effective diffusion of the mixture along the flow) to plug flow. At steady state the balance is

$$D_a\frac{d^2C_A}{dz^2} - u\frac{dC_A}{dz} + r_A = 0,$$

with $D_a$ the axial dispersion coefficient ($\mathrm{m^2/s}$), $u$ the superficial velocity ($\mathrm{m/s}$), $z$ position along the reactor. The single characteristic number is the **vessel dispersion number** $\dfrac{D_a}{uL}$ (its reciprocal is a Péclet number $Pe = uL/D_a$), $L$ = reactor length. *In words: it's the ratio of back-mixing to bulk flow.* Small $D_a/uL$ (large $Pe$) $\Rightarrow$ near-PFR; large $D_a/uL$ $\Rightarrow$ toward CSTR. For mild non-ideality it matches TIS through

$$\frac{\sigma^2}{\tau^2} = \frac{1}{N} \approx 2\,\frac{D_a}{uL}, \qquad\text{so}\qquad N \approx \frac{Pe}{2}.$$

Pick either model — they cross-calibrate.

**Segregation vs. maximum mixedness.** The RTD fixes *how long* each fluid element stays, not *when* it mixes with its neighbors. Two limits bracket reality:

- **Complete segregation:** fluid travels as isolated packets, each a tiny batch reactor for its own residence time, mixing only at the exit. Mean conversion is the RTD-weighted average of the batch conversion $X(t)$:
$$\bar X_{\text{seg}} = \int_0^\infty X(t)\,E(t)\,dt.$$
- **Maximum mixedness:** molecules mix as early as their common fate allows.

*In words: same distribution of ages, opposite mixing histories.* For a **first-order** reaction the two coincide — conversion depends only on the RTD, so TIS/dispersion are exact. For **non-first-order** kinetics they differ, and the real reactor sits between them; use the pair as bounds.

## Picture

![Top: a real vessel drawn as N equal stirred tanks plumbed in a row between a feed inlet and an outlet. Bottom: RTD curves E versus theta = t/tau, sharpening from a broad exponential for N=1 (labeled CSTR) through N=2 and N=5 to a tall narrow spike near theta=1 for N=20 (labeled near-PFR); a dashed line marks the mean at theta=1.](assets/04-06-fig1.svg)

## Worked examples

**Example 1 — TIS: from RTD spread to conversion.** A tracer test on a real tubular reactor gives mean residence time $\tau = 10\ \mathrm{min}$ and variance $\sigma^2 = 24\ \mathrm{min^2}$. A liquid first-order reaction with $k = 0.30\ \mathrm{min^{-1}}$ runs in it. Predict $X$, and bracket it with the ideal PFR and single-CSTR results.

*Number of tanks:*
$$N = \frac{\tau^2}{\sigma^2} = \frac{(10)^2}{24} = \frac{100}{24} = 4.17 \;\to\; N = 4 \ \text{(round to an integer).}$$

*Per-tank space time:* $\tau_i = \tau/N = 10/4 = 2.5\ \mathrm{min}$, so $\tau_i k = 2.5 \times 0.30 = 0.75$.

*TIS conversion:*
$$X_{\text{TIS}} = 1 - \frac{1}{(1+0.75)^4} = 1 - \frac{1}{1.75^4} = 1 - \frac{1}{9.38} = 1 - 0.107 = 0.893.$$

*Ideal bounds* (both use $\tau k = 10\times 0.30 = 3$):
$$X_{\text{PFR}} = 1 - e^{-3} = 1 - 0.050 = 0.950, \qquad X_{\text{CSTR}} = \frac{\tau k}{1+\tau k} = \frac{3}{4} = 0.750.$$

So $0.750 < \boxed{0.893} < 0.950$: the real reactor beats a single CSTR handily but falls short of an ideal PFR — exactly what an $N=4$ vessel should do. *Design read:* if you'd sized on the optimistic PFR number you'd have expected 95% conversion and been handed 89% — a real 6-point shortfall in product, the kind of gap that decides whether a column downstream meets spec.

*Sanity check:* dimensionless throughout ($X$ is a fraction, $\tau_i k$ dimensionless); $N$ landed between 1 and $\infty$; conversion landed between the CSTR and PFR limits. All consistent.

**Example 2 — Monod: the chemostat and washout.** A **chemostat** is a CSTR bioreactor: sterile feed of substrate flows in at $v_0$, cells grow inside on the substrate, broth flows out. Cells reproduce at specific growth rate $\mu$ ($\mathrm{h^{-1}}$) given by **Monod kinetics**

$$\mu = \frac{\mu_{max}\,S}{K_s + S},$$

with $S$ the substrate concentration ($\mathrm{g/L}$), $\mu_{max}$ the maximum specific growth rate ($\mathrm{h^{-1}}$), and $K_s$ the half-saturation constant ($\mathrm{g/L}$, the $S$ at which $\mu = \mu_{max}/2$). Define the **dilution rate** $D = v_0/V = 1/\tau$ ($\mathrm{h^{-1}}$). Find the steady-state substrate level, and the condition for washout. Take $\mu_{max} = 0.50\ \mathrm{h^{-1}}$, $K_s = 2.0\ \mathrm{g/L}$, $D = 0.30\ \mathrm{h^{-1}}$.

*Cell mass balance* (cell concentration $C_c$, sterile feed so inflow of cells $=0$), at steady state:
$$\underbrace{0}_{\text{in}} - \underbrace{v_0 C_c}_{\text{out}} + \underbrace{\mu C_c V}_{\text{growth}} = 0 \;\Longrightarrow\; \mu = \frac{v_0}{V} = D.$$
*In words: at steady state the bugs must divide exactly as fast as they're flushed out — the dilution rate sets the growth rate.* Now invert Monod at $\mu = D$:
$$D = \frac{\mu_{max} S}{K_s + S} \;\Longrightarrow\; D(K_s + S) = \mu_{max}S \;\Longrightarrow\; \boxed{\,S = \frac{K_s\,D}{\mu_{max} - D}\,}.$$
Plugging in: $S = \dfrac{2.0 \times 0.30}{0.50 - 0.30} = \dfrac{0.60}{0.20} = 3.0\ \mathrm{g/L}$.

*Washout.* As $D \to \mu_{max}$ from below, $S \to \infty$: the culture needs ever more substrate to keep pace. But $S$ can't exceed the feed value, so once $D > \mu_{max}$ the cells are flushed faster than they can possibly divide — $C_c \to 0$ and the reactor goes sterile. Here washout hits at $D = 0.50\ \mathrm{h^{-1}}$; run the pump faster and you lose the culture. *In words: pump too hard and you rinse the bugs out before they reproduce.*

*Sanity check:* $S = (K_s\,[\mathrm{g/L}]\cdot D\,[\mathrm{h^{-1}}])/([\mathrm{h^{-1}}]) = \mathrm{g/L}$ ✓; $S>0$ requires $D<\mu_{max}$, matching the washout threshold; at $D = \mu_{max}/2 = 0.25$, $S = K_s = 2.0\ \mathrm{g/L}$ as Monod demands ✓.

## Watch out

- **You might think** a bigger $N$ means a bigger, slower reactor. **Actually** $N$ is about *flow quality*, not size. Two reactors of identical volume and $\tau$ can have $N=2$ and $N=50$; the second is better-behaved (more plug-like) and converts more. $N$ comes from the RTD's shape, not from $V$.
- **You might think** TIS and dispersion always agree, so it never matters which you use. **Actually** they agree only for *mild* non-ideality (large $N$, small dispersion). For badly non-ideal vessels — big recirculation zones, short-circuiting — both are crude, and you may need a compartment model (dead zones + bypass) instead.
- **You might think** the RTD fully determines conversion. **Actually** it does so *only for first-order* reactions. For any other order, micromixing matters and conversion floats between the segregation and maximum-mixedness limits — the RTD gives you a bracket, not a point.
- **You might think** rounding $N$ to an integer is sloppy. **Actually** the integer-$N$ TIS formula requires it, and the underlying model is already an approximation; the RTD variance carries more uncertainty than the rounding does. (A non-integer $N$ version exists via the gamma function, but the rounded answer is what you report.)

## One-liner

> Measure the RTD's spread, read off $N = \tau^2/\sigma^2$, and a real reactor becomes $N$ CSTRs you already know how to size — sliding from CSTR ($N=1$) to PFR ($N=\infty$) on a single knob.

## Problems

**P1 (🟢)** A stirred vessel is tested with a tracer and behaves like an ideal CSTR. Without doing an integral, state its $N$ from the TIS model, and use the first-order TIS formula to confirm it reproduces the single-CSTR conversion for $\tau k = 2$.

**P2 (🟡)** A reactor has $\tau = 6\ \mathrm{min}$ and RTD variance $\sigma^2 = 4\ \mathrm{min^2}$. For a first-order reaction with $k = 0.5\ \mathrm{min^{-1}}$, find $N$, the per-tank $\tau_i$, and the TIS conversion. Is this reactor closer to a PFR or a CSTR? Back it up by comparing to both ideal limits.

**P3 (🔴)** A chemostat runs on Monod kinetics with $\mu_{max} = 0.8\ \mathrm{h^{-1}}$ and $K_s = 1.5\ \mathrm{g/L}$. (a) What dilution rate $D$ holds the steady-state substrate at $S = 0.5\ \mathrm{g/L}$? (b) By what factor could you increase $D$ before washout? (c) Qualitatively, why does pushing $D$ toward $\mu_{max}$ maximize the *rate of cell production* per unit volume even though it flirts with washout?

<details>
<summary>Solutions</summary>

**P1** An ideal CSTR is a single perfectly-mixed tank, so $N = 1$ by definition (equivalently its RTD has $\sigma^2 = \tau^2$, giving $N = \tau^2/\sigma^2 = 1$). The TIS formula with $N=1$ and $\tau_i = \tau$:
$$X = 1 - \frac{1}{(1+\tau k)^1} = 1 - \frac{1}{1+\tau k} = \frac{\tau k}{1+\tau k}.$$
At $\tau k = 2$: $X = 2/3 = 0.667$ — exactly the single-CSTR conversion. ✓

**P2** $N = \tau^2/\sigma^2 = 36/4 = 9$. Per-tank $\tau_i = \tau/N = 6/9 = 0.667\ \mathrm{min}$, so $\tau_i k = 0.667 \times 0.5 = 0.333$.
$$X_{\text{TIS}} = 1 - \frac{1}{(1.333)^9}.$$
$1.333^9$: $1.333^2 = 1.777$, $^4 = 3.16$, $^8 = 9.98$, $\times 1.333 = 13.3$. So $X = 1 - 1/13.3 = 1 - 0.075 = 0.925$.
Ideal limits with $\tau k = 3$: $X_{\text{PFR}} = 1 - e^{-3} = 0.950$; $X_{\text{CSTR}} = 3/4 = 0.750$. Since $0.925$ sits much nearer $0.950$ than $0.750$ — and $N = 9$ is fairly large — this reactor is **closer to a PFR**. ✓

**P3** (a) At steady state $\mu = D$, and $D = \mu_{max}S/(K_s+S) = 0.8 \times 0.5/(1.5+0.5) = 0.4/2.0 = 0.20\ \mathrm{h^{-1}}$.
(b) Washout occurs at $D = \mu_{max} = 0.8\ \mathrm{h^{-1}}$. Starting from $0.20\ \mathrm{h^{-1}}$, you could increase $D$ by a factor of $0.8/0.20 = 4$ before washout.
(c) Cell production rate per volume is (cells leaving per time)/$V = D\,C_c$. Raising $D$ increases the flush rate directly; the cell concentration $C_c$ stays roughly steady until $D$ nears $\mu_{max}$, where $S$ climbs and $C_c$ finally collapses. So the volumetric productivity $D\,C_c$ rises with $D$ almost up to washout, peaking just short of it — you run the pump as fast as you dare, then a hair slower for safety margin. ✓
</details>

## Flashback

**From Lesson 4.5 (RTD moments):** A pulse-tracer test on a reactor gives the exit-concentration readings

| $t$ (min) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $C$ (g/m³) | 0 | 1 | 2 | 1 | 0 |

Find the RTD $E(t)$, the mean residence time $t_m$, and the variance $\sigma^2$. Then report the tanks-in-series $N$ this reactor would have.

<details>
<summary>Solution</summary>

*Normalize.* Total area (trapezoid rule, $\Delta t = 1$): $\int_0^\infty C\,dt = \tfrac{0+1}{2} + \tfrac{1+2}{2} + \tfrac{2+1}{2} + \tfrac{1+0}{2} = 0.5+1.5+1.5+0.5 = 4\ \mathrm{g\,min/m^3}$. So $E(t) = C(t)/4$: values $0,\ 0.25,\ 0.50,\ 0.25,\ 0\ (\mathrm{min^{-1}})$.

*Mean.* $t_m = \int t\,E\,dt$. The integrand $tE$ is $0,\ 0.25,\ 1.0,\ 0.75,\ 0$; trapezoid sum $= 0.125+0.625+0.875+0.375 = 2.0\ \mathrm{min}$. (The data are symmetric about $t=2$, confirming $t_m = 2\ \mathrm{min} = \tau$.)

*Variance.* $\sigma^2 = \int (t-t_m)^2 E\,dt$. With $(t-2)^2 = 4,1,0,1,4$, the integrand $(t-2)^2E = 0,\ 0.25,\ 0,\ 0.25,\ 0$; trapezoid sum $= 0.125+0.125+0.125+0.125 = 0.5\ \mathrm{min^2}$.

*Tanks:* $N = t_m^2/\sigma^2 = 4/0.5 = 8$. A fairly narrow RTD — this vessel is well on its way toward plug flow, and you'd size it with the $N=8$ TIS formula, not as a single CSTR.
</details>

## Connections

- **Backward:** this is the payoff of [4.5 Residence-time distribution](04-05-residence-time-distribution.md) — the mean and variance you learned to extract from a tracer test are exactly the two inputs ($\tau$, $\sigma^2$) the TIS model consumes. The $N$-CSTR conversion reuses the single-CSTR algebra from [1.5 CSTR](01-05-cstr.md) and the PFR limit from [1.6 PFR & packed bed](01-06-pfr-packed-bed.md).
- **Sideways (bio):** Monod kinetics $\mu = \mu_{max}S/(K_s+S)$ is the **biological twin of the Langmuir isotherm** from [4.1 Catalysis & the Langmuir isotherm](04-01-catalysis-langmuir-isotherm.md) — same saturating hyperbola (a site or an enzyme that fills up), same math as saturation-limited catalytic rates. It is also the Michaelis–Menten form met in [physical chemistry 3.5 (catalysis & enzyme kinetics)](../../physical-chemistry/lessons/03-05-catalysis-enzyme-kinetics.md). A full bioreactor course adds a cell-growth balance and product formation to the design equations you already own.
- **Sideways (polymers):** **chain polymerization** runs on three coupled steps — *initiation* (a radical is born), *propagation* (monomer units add one by one, growing the chain), and *termination* (two chains quench each other). Their relative rates set the **kinetic chain length** (average monomers added per initiated chain) and hence the whole **molecular-weight distribution** — the property that decides whether the plastic is a film or a fiber. It's the same steady-state-on-intermediates reasoning as [physical chemistry 3.3 (mechanisms)](../../physical-chemistry/lessons/03-03-mechanisms-steady-state-pre-equilibrium.md), now applied to a growing macromolecule.
- **Forward:** this closes the course. You can now write a rate law, size ideal batch/CSTR/PFR/packed-bed reactors, add energy balances and worry about runaway, handle catalytic and diffusion-limited kinetics, and — as of this lesson — correct all of it for real, non-ideal flow. Where it goes next is *specialization*: bioreaction engineering, polymerization engineering, electrochemical and photocatalytic reactors — each a new kinetics bolted onto this same mole-balance skeleton.

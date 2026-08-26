# Semiconductor Devices · Lesson 3.1: The BJT — transistor action

> ⏱ ~15 min · Module 3: Transistors · Builds on: [1.4 The continuity equations](01-04-continuity-equations.md), [2.2 The ideal-diode equation](02-02-ideal-diode-equation.md) · Unlocks: [3.2 BJT currents and gain](03-02-bjt-currents-and-gain.md), [3.3 The MOS capacitor](03-03-mos-capacitor.md)

## Why this matters

[`electronics` 2.1](../../electronics/lessons/02-01-bjt-how-it-works.md) taught you to *use* a BJT: bias it, find $\beta$ on a datasheet, build an amplifier. This lesson explains why $\beta$ exists and what sets its value — and the answer is a single geometric fact you already derived in [1.4](01-04-continuity-equations.md).

The bipolar transistor was the first solid-state amplifier (Bardeen, Brattain and Shockley, 1947) and it remains the fastest silicon device for analog and RF work. But the reason to study it carefully here is structural: **it is the short-base diffusion problem with one boundary condition changed.** Understanding that makes the whole of Module 3 feel like one idea rather than two unrelated devices.

## The idea

Take two p–n junctions back to back, sharing a middle region. Forward-bias the first, reverse-bias the second. Naively you would expect nothing interesting: the reverse-biased junction blocks.

What makes it a transistor is that the shared middle region — the **base** — is made *very thin*, much thinner than a diffusion length.

Follow an electron. The forward-biased emitter–base junction injects it into the base, exactly as [2.2](02-02-ideal-diode-equation.md) describes. Now it is a minority carrier in the base, and it diffuses. In an ordinary diode it would wander for a diffusion length and recombine. But here, a fraction of a micron away, sits the reverse-biased base–collector junction — and a reverse-biased junction is a *sink* for minority carriers: any electron reaching its edge is swept across by the strong field, immediately and irreversibly.

So the base is a short-base region ([1.4](01-04-continuity-equations.md)) whose far boundary holds $\delta n = 0$ — not because of a contact, but because the collector junction vacuums carriers away. And you already know the consequence: **almost all of them make it across.** In Example 2 of [1.4](01-04-continuity-equations.md) that fraction was 99.5%.

That is [transistor action](../reference.md#transistor-action), and the gain follows immediately. The emitter injects a large current. Only the small fraction that recombines in the base has to be resupplied through the base terminal. So

$$\beta = \frac{\text{carriers that cross}}{\text{carriers that recombine}} \approx \frac{99.5\%}{0.5\%} \approx 200.$$

**The gain is the ratio of a diffusion length to a base width, squared.** Nothing more mysterious than that. And the *control* mechanism is that the emitter–base junction is a diode: a 60 mV change in $V_{BE}$ changes the injected current tenfold ([2.2](02-02-ideal-diode-equation.md)), and the collector current follows it. A small voltage commands a large current.

One more essential point, and it is the one beginners miss: **the collector current does not depend on the collector voltage.** The collector's job is only to be reverse-biased enough to collect; how much more reverse bias you apply changes nothing, because the carriers arriving were already all going to be collected. That is what makes the output a *current source*, and it is why a BJT has voltage gain at all.

## The formal version

**Structure and biasing.** An $npn$ transistor: $n^+$ **emitter**, thin $p$ **base** of width $W_B$, $n$ **collector**. (The $pnp$ is identical with all types and polarities reversed.)

| Mode | E–B junction | B–C junction | Use |
|---|---|---|---|
| **Forward active** | forward | reverse | amplification |
| Saturation | forward | forward | closed switch |
| Cutoff | reverse | reverse | open switch |
| Reverse active | reverse | forward | rarely useful, poor gain |

**The three design asymmetries.** A BJT is not symmetric, and each asymmetry does a job:

1. **Emitter doped far more heavily than the base** ($N_E\gg N_B$). Ensures the emitter–base current is carried almost entirely by electrons injected *into* the base, not holes back-injected into the emitter — the *emitter injection efficiency* of [3.2](03-02-bjt-currents-and-gain.md).
2. **Base very thin** ($W_B\ll L_n$). Ensures nearly all injected electrons cross before recombining.
3. **Collector lightly doped and large.** Absorbs the reverse bias without breaking down ([2.4](02-04-reverse-breakdown.md)), and its area exceeds the emitter's so stray carriers are still collected.

**Minority carrier profile in the base.** In forward active mode, the boundary conditions are the law of the junction at the emitter side and near-zero at the collector side:

$$n_p(0) = n_{p0}e^{qV_{BE}/k_BT}, \qquad n_p(W_B) = n_{p0}e^{qV_{BC}/k_BT}\approx 0,$$

the latter because $V_{BC}$ is a large negative number, so the exponential vanishes. Solving the diffusion equation of [1.4](01-04-continuity-equations.md) with $W_B\ll L_n$ gives a straight line:

$$\boxed{\;n_p(x) \approx n_{p0}e^{qV_{BE}/k_BT}\left(1-\frac{x}{W_B}\right).\;}$$

*In words: the base holds a triangular wedge of minority electrons, full at the emitter edge and empty at the collector edge.*

**Collector current.** The current is the diffusion current at the collector edge — and because the profile is a straight line, its slope is the same everywhere:

$$\boxed{\;I_C = qA D_n\frac{n_p(0)}{W_B} = \underbrace{\frac{qAD_nn_{p0}}{W_B}}_{I_S}e^{qV_{BE}/k_BT}.\;}$$

*In words: the collector current is a diode current controlled by $V_{BE}$, with the base width in the denominator instead of a diffusion length.* Writing $n_{p0} = n_i^2/N_B$:

$$I_S = \frac{qAD_nn_i^2}{W_BN_B} = \frac{qAD_nn_i^2}{Q_B/q}\ \ \text{where } Q_B = qN_BW_B$$

is the **base Gummel number** — the total dopant charge per unit area in the base. *In words: everything about the collector current depends on the base only through the integrated base doping.* That is a powerful statement: it does not matter how the base doping is distributed, only its integral, which is why the graded base of [1.2](01-02-drift-diffusion-einstein.md) P3 can improve speed without changing $I_C$.

**Two current gains.**

$$\alpha \equiv \frac{I_C}{I_E}\ \text{(common-base)}, \qquad \beta \equiv \frac{I_C}{I_B}\ \text{(common-emitter)}.$$

Since $I_E = I_C+I_B$ (Kirchhoff — the transistor stores no charge in steady state):

$$\boxed{\;\beta = \frac{\alpha}{1-\alpha}, \qquad \alpha = \frac{\beta}{\beta+1}.\;}$$

*In words: $\alpha$ is just below 1 and $\beta$ is its amplified complement.* The sensitivity is brutal and worth feeling: $\alpha = 0.99\Rightarrow\beta = 99$; $\alpha = 0.995\Rightarrow\beta = 199$; $\alpha = 0.999\Rightarrow\beta = 999$. **A 0.5% change in $\alpha$ doubles $\beta$**, which is exactly why $\beta$ varies by 3:1 across a production lot while $\alpha$ barely moves — and why good analog design never relies on a specific $\beta$.

**Why the output looks like a current source.** $I_C$ depends on $V_{BE}$ (through the injected concentration) and on $W_B$ (through the slope), but **not on $V_{CB}$**. Raising the collector voltage does not attract more carriers; they were already all arriving. So the output characteristic is flat — a current source — with output resistance ideally infinite.

Ideally. In reality, raising $V_{CB}$ widens the base–collector depletion region ([2.1](02-01-junction-electrostatics.md)), which eats into the neutral base and makes $W_B$ slightly smaller, which raises $I_C$. That is **base-width modulation**, the Early effect, and [3.2](03-02-bjt-currents-and-gain.md) quantifies it.

**Stored charge and speed.** The triangular wedge holds

$$Q_B^{\rm stored} = qA\frac{n_p(0)W_B}{2}, \qquad \tau_F = \frac{Q_B^{\rm stored}}{I_C} = \frac{W_B^2}{2D_n},$$

the **forward transit time** — exactly the short-base result of [2.3](02-03-junction-diffusion-capacitance.md). The transistor's intrinsic speed limit is

$$f_T = \frac{1}{2\pi\tau_F} = \frac{D_n}{\pi W_B^2},$$

so **halving the base width quadruples the cutoff frequency.** Every generation of bipolar technology has been an exercise in thinning the base: from ~10 µm in the 1950s to under 50 nm in a modern SiGe HBT.

**Why the base cannot simply be made arbitrarily thin.** Three limits:

- **Punch-through.** The base–collector depletion region grows with $V_{CB}$; if it reaches the emitter, the base vanishes and the device shorts.
- **Base resistance.** A thin base is a high-resistance lateral path, which degrades high-frequency performance and causes current crowding.
- **Process control.** $W_B$ is the difference between two diffusion depths, so its tolerance is worse than either.

The first two fight each other — thinning the base demands heavier base doping to avoid punch-through and resistance, but heavier base doping ruins the injection efficiency of asymmetry (1). **That deadlock is exactly what the heterojunction of [2.5](02-05-metal-semiconductor-heterojunctions.md) breaks.**

## Picture

![A two-panel figure. Left: an npn transistor cross-section with the n+ emitter, thin p base and n collector, showing the forward-biased emitter junction injecting electrons into the base and the reverse-biased collector junction sweeping them out, with a few electrons shown recombining in the base and the base current supplying those. Right: the minority electron concentration in the base, a straight line falling from the injected value at the emitter edge to zero at the collector edge, with the shaded area under it labelled as the stored charge and the slope labelled as the collector current.](assets/03-01-fig1.svg)

Left: the mechanism. The emitter injects a flood of electrons into the base; the collector's reverse-biased field vacuums up everything that reaches it. The handful that recombine on the way — drawn as the two that do not make it — are what the base terminal must resupply, and that small resupply current is what commands the large one.

Right: the same thing as a profile. The line is straight because the base is short compared with a diffusion length, so almost no carriers are lost in transit. Its **slope** is $I_C$; the **area beneath it** is the stored charge $Q_B$, and their ratio is the transit time $\tau_F = W_B^2/2D_n$. Everything about the device is in that one triangle.

## Worked examples

**Example 1 (a complete BJT from its geometry).** An $npn$ silicon transistor has $N_E = 10^{19}$, $N_B = 10^{17}\ \mathrm{cm^{-3}}$, base width $W_B = 0.5\ \mu$m, emitter area $A = 10^{-5}\ \mathrm{cm^2}$, base lifetime $\tau_n = 100$ ns. Find $I_S$, $I_C$ at $V_{BE} = 0.65$ V, the base transport factor, $\tau_F$ and $f_T$.

*Base parameters.* At $N_B = 10^{17}$, $D_n = 20.7\ \mathrm{cm^2/s}$ ([1.2](01-02-drift-diffusion-einstein.md) table).

$$n_{p0} = \frac{n_i^2}{N_B} = \frac{10^{20}}{10^{17}} = 10^{3}\ \mathrm{cm^{-3}}, \qquad L_n = \sqrt{D_n\tau_n} = \sqrt{(20.7)(10^{-7})} = 1.44\times10^{-3}\ \mathrm{cm} = 14.4\ \mu\mathrm{m}.$$

Check the short-base condition: $W_B/L_n = 0.5/14.4 = 0.0348 \ll 1$ ✓.

*Saturation current.*

$$I_S = \frac{qAD_nn_{p0}}{W_B} = \frac{(1.602\times10^{-19})(10^{-5})(20.7)(10^{3})}{0.5\times10^{-4}} = \frac{3.316\times10^{-20}}{5\times10^{-5}} = 6.63\times10^{-16}\ \mathrm{A}.$$

*Collector current at $V_{BE} = 0.65$ V.*

$$I_C = I_Se^{0.65/0.0259} = (6.63\times10^{-16})e^{25.10} = (6.63\times10^{-16})(7.93\times10^{10}) = 5.26\times10^{-5}\ \mathrm{A} = 52.6\ \mu\mathrm{A}.$$

*Base transport factor.* From [1.4](01-04-continuity-equations.md), the fraction lost to recombination is $\tfrac12(W_B/L_n)^2$:

$$\alpha_T = 1-\frac{1}{2}\left(\frac{W_B}{L_n}\right)^2 = 1-\frac{(0.0348)^2}{2} = 1-6.04\times10^{-4} = 0.999396.$$

Taken alone this would give $\beta_T = \alpha_T/(1-\alpha_T) = 1/6.04\times10^{-4} = 1655$ — but the real $\beta$ will be far lower, because emitter injection efficiency (not transport) is the binding constraint here. [3.2](03-02-bjt-currents-and-gain.md) does that calculation.

*Transit time and cutoff frequency.*

$$\tau_F = \frac{W_B^2}{2D_n} = \frac{(0.5\times10^{-4})^2}{2(20.7)} = \frac{2.5\times10^{-9}}{41.4} = 6.04\times10^{-11}\ \mathrm{s} = 60\ \mathrm{ps},$$

$$f_T = \frac{1}{2\pi\tau_F} = \frac{1}{2\pi(6.04\times10^{-11})} = 2.63\times10^{9}\ \mathrm{Hz} = 2.6\ \mathrm{GHz}.$$

*Sanity check on the whole picture:* the transistor injects carriers that take 60 ps to cross a half-micron base, during which time only 0.06% of them recombine. That is why it works.

**Example 2 (why the collector voltage does not matter — and when it does).** The same transistor is operated at $V_{BE} = 0.65$ V while $V_{CE}$ is swept from 0.2 V to 10 V. What happens to $I_C$?

*The ideal answer.* For $V_{CE}$ above about 0.3 V the collector junction is reverse-biased, the boundary condition $n_p(W_B)\approx0$ holds, and $I_C = 52.6\ \mu$A **regardless of $V_{CE}$**. The output characteristic is flat.

*Below 0.3 V — saturation.* When $V_{CE}$ falls so low that $V_{BC}$ becomes forward, the collector junction begins injecting carriers *back* into the base. The boundary condition $n_p(W_B) = n_{p0}e^{qV_{BC}/k_BT}$ is no longer zero, the profile's slope flattens, and $I_C$ collapses. The transistor is **saturated** — a closed switch with a small $V_{CE,\rm sat}$ of 0.1–0.2 V.

*Above 0.3 V, the real answer — Early effect.* Raising $V_{CB}$ widens the base–collector depletion region. Using [2.1](02-01-junction-electrostatics.md) with the base side as the lightly-doped-enough side, the depletion edge advances into the base, so the **neutral** base width shrinks:

$$W_B(V_{CB}) = W_{B0}-x_{p,BC}(V_{CB}).$$

Since $I_C\propto1/W_B$, the current rises slightly with $V_{CE}$. Quantitatively, with $N_B = 10^{17}$ and $N_C = 10^{16}$, the base-side depletion at $V_{CB} = 5$ V is

$$x_{p} = W\frac{N_C}{N_B+N_C} \approx \sqrt{\frac{2\varepsilon_s(V_{bi}+5)}{q}\cdot\frac{1}{N_B+N_C}}\cdot\frac{N_C}{\sqrt{\cdots}}\ \approx 0.024\ \mu\mathrm{m},$$

about 5% of $W_B$ — so $I_C$ rises about 5% over that sweep. That translates into a finite output resistance and an **Early voltage** of roughly $V_A\approx W_{B0}/(dx_p/dV_{CB})\approx100$ V, which is a typical value.

*Why this matters for a circuit.* A perfectly flat output would give infinite voltage gain. The Early effect sets the intrinsic gain ceiling:

$$A_v^{\max} = g_mr_o = \frac{I_C}{V_T}\cdot\frac{V_A}{I_C} = \frac{V_A}{V_T} = \frac{100}{0.0259} = 3860.$$

**Independent of bias current** — a remarkable and useful result. It says a single BJT stage cannot exceed about 4000 in voltage gain no matter how you bias it, and that the only way to raise the ceiling is to raise $V_A$ (a thicker or more heavily doped base). Compare a MOSFET's intrinsic gain, typically 10–50 in a modern process, and you see immediately why analog designers still reach for bipolars.

## Watch out

- **You might think the base current "controls" the collector current causally.** Both are consequences of $V_{BE}$. The physical control variable is the *voltage*, which sets the injected concentration; $I_B$ is a side-effect of recombination and back-injection. Modelling a BJT as current-controlled works for many circuits but hides the physics, and fails for the exponential temperature behaviour.
- **You might expect $\beta$ to be a reliable number.** $\beta = \alpha/(1-\alpha)$ magnifies tiny variations in $\alpha$ enormously — a 0.5% shift doubles $\beta$. Production spreads of 3:1 are normal, which is why circuits are designed to be $\beta$-independent.
- **You might think a thinner base is unambiguously better.** It raises gain and $f_T$ (quadratically), but worsens base resistance and punch-through. The optimum is a compromise, and the heterojunction exists to move it.
- **You might think the collector's doping is unimportant.** It sets the breakdown voltage ([2.4](02-04-reverse-breakdown.md)) and, through the Early effect, the output resistance. A lightly doped collector gives high $V_{CE}$ rating and high $V_A$ but adds series resistance and slows the device (via the collector transit time).
- **You might apply forward-active formulas in saturation.** Once $V_{BC}$ goes forward, the collector boundary condition changes completely and both junctions inject. The stored charge in saturation is much larger, which is why a saturated BJT is *slow* to turn off — the storage-time problem of [2.3](02-03-junction-diffusion-capacitance.md) again, and why Schottky-clamped TTL logic existed.

## One-liner

> A BJT is the short-base diffusion problem with the far boundary held empty by a reverse-biased junction: nearly every injected carrier crosses, so the few that recombine command the many that do not — and the gain is $(L_n/W_B)^2$.

## Problems

**P1 (🟢)** An $npn$ transistor has $\alpha = 0.992$. (a) Find $\beta$. (b) If $I_E = 2$ mA, find $I_C$ and $I_B$. (c) $\alpha$ improves to 0.996; find the new $\beta$. (d) Comment on the sensitivity.

**P2 (🟡)** A silicon $npn$ has $W_B = 0.3\ \mu$m, $N_B = 5\times10^{17}\ \mathrm{cm^{-3}}$, $A = 2\times10^{-5}\ \mathrm{cm^2}$, $D_n = 12\ \mathrm{cm^2/s}$ in the base, $\tau_n = 50$ ns. (a) Find $n_{p0}$, $L_n$ and confirm short-base. (b) Find $I_S$. (c) Find $I_C$ and the stored base charge at $V_{BE} = 0.7$ V. (d) Find $\tau_F$ and $f_T$.

**P3 (🔴)** A transistor's base width is reduced from 0.4 µm to 0.2 µm while the base doping is raised from $10^{17}$ to $4\times10^{17}\ \mathrm{cm^{-3}}$ to hold the Gummel number roughly constant. Take $D_n = 20.7$ at $10^{17}$ and $13$ at $4\times10^{17}$, $\tau_n = 100$ ns in both. (a) Compute the Gummel number in each case and confirm it is nearly unchanged. (b) Compute $I_S$ in each case. (c) Compute $\tau_F$ and $f_T$ in each. (d) Explain what was gained and what was paid, and identify which of [2.5](02-05-metal-semiconductor-heterojunctions.md)'s ideas would let you do better.

<details>
<summary>Solutions</summary>

**P1** (a) $$\beta = \frac{\alpha}{1-\alpha} = \frac{0.992}{0.008} = 124.$$

(b) $$I_C = \alpha I_E = 0.992(2\ \mathrm{mA}) = 1.984\ \mathrm{mA}, \qquad I_B = I_E-I_C = 2-1.984 = 0.016\ \mathrm{mA} = 16\ \mu\mathrm{A}.$$

(Check: $\beta = I_C/I_B = 1.984/0.016 = 124$ ✓.)

(c) $$\beta = \frac{0.996}{0.004} = 249.$$

(d) A change in $\alpha$ of **0.4%** (0.992 → 0.996) **doubled** $\beta$ (124 → 249). The reason is structural: $\beta = \alpha/(1-\alpha)$ and the denominator is a small difference, so its *fractional* uncertainty is enormous. If $\alpha$ is known to $\pm0.2\%$, then $1-\alpha$ is known only to $\pm50\%$.

This is why a BJT's $\beta$ is specified with a 3:1 or 4:1 min–max range on every datasheet, varies strongly with current and temperature, and must never appear as a design parameter that a circuit's accuracy depends on. Good bipolar design uses emitter degeneration, feedback, or current mirrors precisely to make the result $\beta$-independent.

**P2** (a) $$n_{p0} = \frac{n_i^2}{N_B} = \frac{10^{20}}{5\times10^{17}} = 200\ \mathrm{cm^{-3}},$$

$$L_n = \sqrt{D_n\tau_n} = \sqrt{(12)(5\times10^{-8})} = \sqrt{6\times10^{-7}} = 7.75\times10^{-4}\ \mathrm{cm} = 7.75\ \mu\mathrm{m}.$$

$$\frac{W_B}{L_n} = \frac{0.3}{7.75} = 0.039 \ll 1 \ \checkmark.$$

(b) $$I_S = \frac{qAD_nn_{p0}}{W_B} = \frac{(1.602\times10^{-19})(2\times10^{-5})(12)(200)}{0.3\times10^{-4}} = \frac{7.690\times10^{-21}}{3\times10^{-5}} = 2.56\times10^{-16}\ \mathrm{A}.$$

(c) $$I_C = I_Se^{0.7/0.0259} = (2.56\times10^{-16})e^{27.03} = (2.56\times10^{-16})(5.47\times10^{11}) = 1.40\times10^{-4}\ \mathrm{A} = 140\ \mu\mathrm{A}.$$

Stored charge — the triangle's area:

$$n_p(0) = n_{p0}e^{V_{BE}/V_T} = 200(5.47\times10^{11}) = 1.09\times10^{14}\ \mathrm{cm^{-3}},$$

$$Q_B = \frac{qAn_p(0)W_B}{2} = \frac{(1.602\times10^{-19})(2\times10^{-5})(1.09\times10^{14})(3\times10^{-5})}{2} = \frac{1.048\times10^{-14}}{2} = 5.24\times10^{-15}\ \mathrm{C}.$$

(About 33 000 electrons in transit at any instant — a striking number for a working amplifier.)

(d) $$\tau_F = \frac{W_B^2}{2D_n} = \frac{(3\times10^{-5})^2}{2(12)} = \frac{9\times10^{-10}}{24} = 3.75\times10^{-11}\ \mathrm{s} = 37.5\ \mathrm{ps}.$$

$$f_T = \frac{1}{2\pi\tau_F} = \frac{1}{2\pi(3.75\times10^{-11})} = 4.24\times10^{9} = 4.2\ \mathrm{GHz}.$$

(Cross-check: $\tau_F = Q_B/I_C = 5.24\times10^{-15}/1.40\times10^{-4} = 3.74\times10^{-11}$ s ✓ — the charge-control and geometric routes agree.)

**P3** (a) Gummel number $Q_B/q = N_BW_B$:

$$\text{Before: } (10^{17})(0.4\times10^{-4}) = 4.0\times10^{12}\ \mathrm{cm^{-2}},$$
$$\text{After: } (4\times10^{17})(0.2\times10^{-4}) = 8.0\times10^{12}\ \mathrm{cm^{-2}}.$$

Not equal — it **doubled**, because halving $W_B$ while quadrupling $N_B$ gives a net factor of 2. (To hold it exactly constant the doping should have gone to $2\times10^{17}$.) So the premise is only approximately satisfied, and part (b) will show the consequence.

(b) $$I_S = \frac{qAD_nn_i^2}{W_BN_B} = \frac{qAD_nn_i^2}{(\text{Gummel number})}.$$

Before: $\dfrac{qAD_nn_i^2}{4.0\times10^{12}}$ with $D_n = 20.7$; after: $\dfrac{qAD_nn_i^2}{8.0\times10^{12}}$ with $D_n = 13$.

$$\frac{I_S^{\rm after}}{I_S^{\rm before}} = \frac{13}{20.7}\cdot\frac{4.0\times10^{12}}{8.0\times10^{12}} = 0.628\times0.5 = 0.314.$$

$I_S$ **fell to 31%** of its original value, so at fixed $V_{BE}$ the collector current fell by the same factor — equivalently, $V_{BE}$ must rise by $V_T\ln(1/0.314) = 0.0259(1.158) = 30$ mV to restore the same current. A modest, acceptable cost.

(c) $$\tau_F^{\rm before} = \frac{(0.4\times10^{-4})^2}{2(20.7)} = \frac{1.6\times10^{-9}}{41.4} = 3.86\times10^{-11}\ \mathrm{s} = 38.6\ \mathrm{ps} \;\Rightarrow\; f_T = 4.12\ \mathrm{GHz}.$$

$$\tau_F^{\rm after} = \frac{(0.2\times10^{-4})^2}{2(13)} = \frac{4\times10^{-10}}{26} = 1.54\times10^{-11}\ \mathrm{s} = 15.4\ \mathrm{ps} \;\Rightarrow\; f_T = 10.3\ \mathrm{GHz}.$$

**$f_T$ rose by 2.5×** — less than the naive factor of 4 from $W_B^2$ alone, because the heavier base doping cut $D_n$ by 37%.

(d) *Gained:* 2.5× the cutoff frequency, and — importantly — the heavier base doping also cut the base sheet resistance by roughly $4\times$ at half the thickness, i.e. a net 2× reduction, improving the high-frequency figure of merit $f_{\max}$ further and reducing punch-through risk.

*Paid:* (i) $I_S$ fell to 31%, needing 30 mV more $V_{BE}$ — minor; (ii) mobility fell 37% with the heavier doping, eating into the speed gain; (iii) and the real cost, invisible in these numbers — **emitter injection efficiency**. Raising $N_B$ fourfold while $N_E$ stays fixed cuts the injection efficiency term $\propto N_E/N_B$ by four, so $\beta$ drops by roughly the same factor ([3.2](03-02-bjt-currents-and-gain.md)). Going from, say, $\beta = 200$ to $\beta = 50$ is a serious loss for an analog device.

*The better answer.* This is precisely the deadlock described at the end of the formal section: you want a heavily doped thin base for speed and resistance, but heavy base doping destroys $\beta$. The **heterojunction bipolar transistor** of [2.5](02-05-metal-semiconductor-heterojunctions.md) breaks it — a wider-gap emitter (or, in SiGe, a narrower-gap *base*) suppresses hole back-injection by $e^{\Delta E_g/k_BT}$, so injection efficiency no longer depends on the doping ratio. A 120 meV offset buys a factor of 103, more than covering the 4× lost here, and lets the base doping rise by an order of magnitude more.

Add a *graded* germanium profile ([1.2](01-02-drift-diffusion-einstein.md) P3) and you also get a built-in drift field that cuts the transit time further. That combination — heavy thin base, no injection penalty, plus a drift field — is why SiGe HBTs reach 300 GHz where this homojunction device struggles past 10.

</details>

## Flashback

**From Lesson 1.4 (The continuity equations):** A short-base region has $W = 0.5\ \mu$m and $L = 15\ \mu$m. (a) Find the fraction of injected carriers that recombine before crossing. (b) Find the resulting base transport factor $\alpha_T$ and the transport-limited $\beta$. (c) State how each scales if $W$ is halved.

<details>
<summary>Solution</summary>

(a) From [1.4](01-04-continuity-equations.md) Example 2, the recombination current relative to the injected current is

$$\frac{J_{\rm rec}}{J_{\rm inj}} = \frac{q\delta p_0W/2\tau}{qD\delta p_0/W} = \frac{W^2}{2D\tau} = \frac{1}{2}\left(\frac{W}{L}\right)^2 = \frac{1}{2}\left(\frac{0.5}{15}\right)^2 = \frac{(0.0333)^2}{2} = 5.56\times10^{-4}.$$

About **0.056%** — roughly one carrier in 1800.

(b) $$\alpha_T = 1-5.56\times10^{-4} = 0.999444, \qquad \beta_T = \frac{\alpha_T}{1-\alpha_T} = \frac{0.999444}{5.56\times10^{-4}} = 1800.$$

(c) Halving $W$ to 0.25 µm:

- Recombined fraction $\propto W^2$: falls **fourfold** to $1.39\times10^{-4}$.
- $\beta_T\propto1/W^2$: rises **fourfold** to 7200.
- Transit time $\tau_F = W^2/2D\propto W^2$: falls fourfold, so $f_T$ rises fourfold.

Everything scales as $W^2$, which is why base thinning is such a powerful lever — and why, once transport is this good, the *actual* $\beta$ is limited by emitter injection efficiency rather than by transport at all. A $\beta_T$ of 1800 is academic when the injection efficiency caps the device at 150.

</details>

## Connections

- **Backward:** the base profile is [1.4](01-04-continuity-equations.md)'s short-base solution; the emitter boundary condition is [2.2](02-02-ideal-diode-equation.md)'s law of the junction; the collector's base-width modulation is [2.1](02-01-junction-electrostatics.md)'s $W(V)$.
- **Forward:** [3.2](03-02-bjt-currents-and-gain.md) adds emitter injection efficiency and the Early effect to get the real $\beta$; [3.3](03-03-mos-capacitor.md) starts the MOSFET, which achieves the same amplification by an entirely different mechanism.
- **Sideways:** the "large flux through, small flux resupplied" structure is the same amplification logic as a vacuum triode's grid, and — in a different domain — as a catalytic cycle where a small catalyst inventory turns over a large throughput.

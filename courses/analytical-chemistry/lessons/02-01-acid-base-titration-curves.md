# Analytical & Instrumental Chemistry · Lesson 2.1: Acid–base equilibria & titration curves

> ⏱ ~15 min · Module 2: Equilibria, titrimetry & gravimetry · Builds on: [gen-chem 4.1 Acids, bases, pH & strength](../../general-chemistry/lessons/04-01-acids-bases-ph-strength.md), [gen-chem 4.2 Buffers & titration](../../general-chemistry/lessons/04-02-buffers-titration.md) · Unlocks: 2.2 (complexometric EDTA titrations)

## Why this matters

Titration is the workhorse of the wet lab: you deliver a reagent of known concentration until a reaction is exactly complete, read the volume, and back out an unknown concentration by stoichiometry. But *when* is it complete? The answer lives in a **titration curve** — a plot of pH against volume of titrant. Everything you learned about $K_a$, buffers, and Henderson–Hasselbalch in general chemistry was practice for one payoff: computing that curve point by point, seeing where it turns, and choosing an indicator that flags the turn. Get this and you understand every titration in the course — the EDTA curves of [2.2](02-02-complexometric-edta-titrations.md) and the redox curves of [2.4](02-04-redox-equilibria-titrations.md) are the same idea with a different equilibrium.

## The idea

Here is the whole secret: **a titration curve is nothing but the pH you already know how to compute, recalculated after each addition of titrant.** Nothing new happens — you just do the gen-chem pH calculation over and over as the amounts change.

Picture titrating a weak acid with NaOH. At first you have acid alone: acidic, low pH. As you add base, it eats acid and makes conjugate base — you've built a *buffer*, and pH creeps up slowly (buffers resist change; that's their job). Right at the middle of the buffer stretch, half the acid is neutralized, so acid and conjugate base are equal — and Henderson–Hasselbalch collapses to $\mathrm{pH} = \mathrm{p}K_a$. Keep going and the buffer runs out: near the point where the *last* bit of acid is consumed, one drop swings the pH violently — the **equivalence break**. Past it, you're just adding excess strong base to water, and pH climbs toward that base's own value.

So the curve is flat, flat, then a cliff, then flat again. The cliff is where you stop. The art is reading which pH the cliff sits at, because for a weak acid it does **not** sit at 7 — it sits *above* 7, and that changes which indicator you trust.

## The formal version

Recall the machinery from [gen-chem 4.1](../../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) and [4.2](../../general-chemistry/lessons/04-02-buffers-titration.md). A weak acid $\ce{HA}$ dissociates

$$\ce{HA <=> H+ + A-}, \qquad K_a = \frac{[\ce{H+}][\ce{A-}]}{[\ce{HA}]},$$

with $K_a$ the acid dissociation constant and $\mathrm{p}K_a = -\log K_a$. Its conjugate base $\ce{A-}$ has $K_b = K_w/K_a$, where $K_w = 1.0\times10^{-14}$ is the ion-product of water at 25 °C. The **Henderson–Hasselbalch** equation for a buffer is

$$\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\ce{A-}]}{[\ce{HA}]}.$$

*In words: pH sits at $\mathrm{p}K_a$, nudged up or down by the log of the base-to-acid ratio.* Because it's a ratio, you can use **moles instead of concentrations** (the shared volume cancels) — this is what makes it so handy mid-titration.

Now walk a **weak-acid / strong-base** titration in four regions. Let $C$ be a concentration and $n$ a number of moles; $V_e$ is the volume of titrant at equivalence.

**① Initial — weak acid alone.** Only $\ce{HA}$ is present at formal concentration $C$. Solving $K_a = x^2/(C-x)$ with the approximation $x \ll C$:

$$[\ce{H+}] \approx \sqrt{K_a\, C}, \qquad \mathrm{pH} = -\log\sqrt{K_a C}.$$

*In words: for a lone weak acid, take the square root of $K_a$ times its concentration.*

**② Buffer region — before equivalence.** You've added base to convert some acid into conjugate base; both are present, so it's a buffer. Use Henderson–Hasselbalch with the *remaining* moles:

$$\mathrm{pH} = \mathrm{p}K_a + \log\frac{n_{\ce{A-}}}{n_{\ce{HA}}} = \mathrm{p}K_a + \log\frac{n_{\text{OH}^-}\text{ added}}{n_{\ce{HA}}\text{ remaining}}.$$

At **half-equivalence** ($n_{\ce{A-}} = n_{\ce{HA}}$) the log is zero:

$$\boxed{\ \mathrm{pH} = \mathrm{p}K_a\ } \quad\text{(half-equivalence).}$$

*In words: when you've neutralized exactly half the acid, pH equals $\mathrm{p}K_a$ — the single most useful fact for measuring an unknown $K_a$.*

**③ Equivalence point — all conjugate base.** Every $\ce{HA}$ has become $\ce{A-}$. The solution is a weak base at its *diluted* concentration $C' = n_{\ce{A-}}/V_{\text{total}}$ (remember: total volume now includes all the titrant you added). It's basic:

$$[\text{OH}^-] \approx \sqrt{K_b\, C'}, \quad K_b = \frac{K_w}{K_a}, \qquad \mathrm{pH} = 14 - \mathrm{pOH}.$$

*In words: at equivalence you have a solution of the conjugate base alone, so compute its pOH from $K_b$ and flip to pH — the answer lands above 7.*

**④ Past equivalence — excess strong base.** The conjugate base's tiny contribution is swamped by leftover strong base. With $n_{\text{OH}^-}^{\text{excess}}$ moles of unreacted $\text{OH}^-$ in total volume $V_{\text{total}}$:

$$[\text{OH}^-] = \frac{n_{\text{OH}^-}^{\text{excess}}}{V_{\text{total}}}, \qquad \mathrm{pH} = 14 + \log[\text{OH}^-].$$

*In words: past equivalence, just divide the excess strong base by the total volume — the weak-acid chemistry no longer matters.*

**Contrast: strong acid / strong base.** No buffer region exists (there's no conjugate weak partner), and the equivalence point is a solution of a neutral salt in water: **pH = 7 exactly**. The break is also taller and steeper because a strong acid starts at a lower pH. The weak-acid curve is gentler on the way up (the buffer flattens it) and its equivalence sits above 7.

**Equivalence vs endpoint — the distinction that matters.** The **equivalence point** is the *stoichiometric* truth: moles of titrant exactly match moles of analyte. The **endpoint** is what you actually *observe* — an indicator changing color. They are not the same event; the gap between them is **indicator error**. An indicator is itself a weak acid $\ce{HIn}$ whose acid and base forms differ in color, switching over roughly $\mathrm{p}K_{\text{In}} \pm 1$. **Rule: choose an indicator whose transition range brackets the equivalence pH.** For a weak-acid / strong-base titration (equivalence pH ≈ 8–9), **phenolphthalein** (colorless → pink over pH 8.0–10.0) is ideal, while **methyl red** (red → yellow over pH 4.4–6.2) would flip far too early and badly underestimate the volume. For strong–strong (equivalence at 7), either works because the break is so steep it sweeps through both ranges in one drop.

**Sharpness of the break.** The vertical jump at equivalence shrinks when the acid is weaker (larger $K_a$ pushes the buffer higher and the equivalence pH lower, compressing the cliff) and when the solution is more dilute (smaller concentrations flatten everything). A very weak acid ($K_a \lesssim 10^{-8}$) or a very dilute one gives no usable break at all — no sharp endpoint, no reliable titration.

## Picture

![Weak-acid / strong-base titration curve: pH vs volume of base, showing the four regions — initial weak acid, buffer region with half-equivalence at pKa, a steep equivalence break above pH 7, and excess base — with a phenolphthalein indicator transition band](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — the buffer region and half-equivalence).** Titrate 25.00 mL of 0.100 M propanoic acid ($K_a = 1.3\times10^{-5}$, so $\mathrm{p}K_a = 4.89$) with 0.100 M NaOH. What is the pH after adding 10.00 mL of base?

Initial acid: $n_{\ce{HA}} = 0.02500\ \mathrm{L}\times0.100\ \mathrm{M} = 2.50\ \mathrm{mmol}$. Base added: $n_{\text{OH}^-} = 0.01000\times0.100 = 1.00\ \mathrm{mmol}$. The base converts 1.00 mmol of acid to conjugate base, leaving $n_{\ce{HA}} = 1.50\ \mathrm{mmol}$ and $n_{\ce{A-}} = 1.00\ \mathrm{mmol}$. By Henderson–Hasselbalch (moles, volume cancels):

$$\mathrm{pH} = 4.89 + \log\frac{1.00}{1.50} = 4.89 - 0.18 = 4.71.$$

Equivalence needs 25.00 mL of base (matched concentrations), so 10.00 mL is well inside the buffer region — pH sits just below $\mathrm{p}K_a$, as it should when acid still outnumbers conjugate base.

**Example 2 (why you'd care — locating and flagging equivalence).** Same titration, now at the equivalence point (25.00 mL added). Where is it, and which indicator?

All 2.50 mmol of acid is now propanoate $\ce{A-}$ in a total volume of $25.00 + 25.00 = 50.00\ \mathrm{mL}$, so $C' = 2.50\ \mathrm{mmol}/50.00\ \mathrm{mL} = 0.0500\ \mathrm{M}$. Its base constant is $K_b = K_w/K_a = 1.0\times10^{-14}/1.3\times10^{-5} = 7.7\times10^{-10}$. Then

$$[\text{OH}^-] = \sqrt{K_b C'} = \sqrt{7.7\times10^{-10}\times0.0500} = \sqrt{3.85\times10^{-11}} = 6.2\times10^{-6}\ \mathrm{M},$$
$$\mathrm{pOH} = -\log(6.2\times10^{-6}) = 5.21, \qquad \mathrm{pH} = 14 - 5.21 = 8.79.$$

Equivalence is basic (pH 8.79), so **phenolphthalein** (8.0–10.0) brackets it and turns pink right at the cliff. Methyl red would have finished changing near pH 5 — a full 20 mL too early — so you'd stop short and report an acid concentration far below the truth. The equivalence pH *dictates* the indicator.

## Watch out

- **You might think the equivalence point is pH 7. Only for strong–strong.** For a weak acid titrated with strong base, the flask at equivalence holds the conjugate base, which hydrolyzes water and pushes pH above 7. Reaching for pH 7 (or for methyl red) is the classic error.
- **You might forget to dilute at the equivalence point.** The conjugate base concentration $C'$ uses the *total* volume — original analyte plus all the titrant. Using the starting concentration overstates $[\text{OH}^-]$ and the pH.
- **You might confuse equivalence with endpoint.** Equivalence is stoichiometric (moles match, invisible); endpoint is observable (color change). A well-chosen indicator makes them nearly coincide, but they are different events, and the mismatch is a real source of titration error.
- **You might expect any weak acid to titrate cleanly.** If $K_a$ is too small or the solution too dilute, the equivalence break flattens into a gentle bend with no sharp jump — no usable endpoint.

## One-liner

> A titration curve is just the gen-chem pH calculation run at every volume: weak acid, then buffer (pH = p$K_a$ at half-equivalence), then a steep break *above* 7, then excess base — and you pick the indicator whose color change brackets that break.

## Problems

**P1 (🟢)** A weak acid has $K_a = 4.0\times10^{-6}$ and formal concentration 0.150 M. Compute the pH (a) at the very start of a titration with NaOH, and (b) at the half-equivalence point. State what fact makes part (b) a one-line calculation.

**P2 (🟡)** You titrate 25.00 mL of 0.100 M of a weak acid ($K_a = 1.0\times10^{-5}$) with 0.100 M NaOH. Compute the pH at the equivalence point (remember to dilute), and choose an indicator from this list whose range brackets it: methyl red (4.4–6.2), bromothymol blue (6.0–7.6), phenolphthalein (8.0–10.0).

**P3 (🔴, Boss-2 rehearsal)** Titrate 50.00 mL of 0.1000 M acetic acid ($K_a = 1.8\times10^{-5}$) with 0.1000 M NaOH. Compute the pH at 0%, 50%, 100%, and 150% of the equivalence volume. In one sentence, explain why the equivalence pH exceeds 7.

<details>
<summary>Solutions</summary>

**P1** (a) Weak acid alone: $[\ce{H+}] = \sqrt{K_a C} = \sqrt{4.0\times10^{-6}\times0.150} = \sqrt{6.0\times10^{-7}} = 7.75\times10^{-4}\ \mathrm{M}$, so

$$\mathrm{pH} = -\log(7.75\times10^{-4}) = 3.11.$$

(b) At half-equivalence, half the acid is converted to conjugate base, so $[\ce{A-}] = [\ce{HA}]$ and the Henderson–Hasselbalch log term is zero:

$$\mathrm{pH} = \mathrm{p}K_a = -\log(4.0\times10^{-6}) = 5.40.$$

The fact that makes it a one-liner: at half-equivalence the acid and conjugate base are present in equal amounts, so $\log([\ce{A-}]/[\ce{HA}]) = \log 1 = 0$. (Notice pH depends on neither the concentration nor the volume there — which is exactly why titrating to half-equivalence is the standard way to *measure* an unknown $\mathrm{p}K_a$.)

**P2** Initial acid: $n_{\ce{HA}} = 0.02500\times0.100 = 2.50\ \mathrm{mmol}$. Equivalence needs 25.00 mL of 0.100 M NaOH. All acid becomes $\ce{A-}$ in a total volume $25.00 + 25.00 = 50.00\ \mathrm{mL}$:

$$C' = \frac{2.50\ \mathrm{mmol}}{50.00\ \mathrm{mL}} = 0.0500\ \mathrm{M}, \qquad K_b = \frac{K_w}{K_a} = \frac{1.0\times10^{-14}}{1.0\times10^{-5}} = 1.0\times10^{-9}.$$

$$[\text{OH}^-] = \sqrt{K_b C'} = \sqrt{1.0\times10^{-9}\times0.0500} = \sqrt{5.0\times10^{-11}} = 7.07\times10^{-6}\ \mathrm{M},$$
$$\mathrm{pOH} = -\log(7.07\times10^{-6}) = 5.15, \qquad \mathrm{pH} = 14 - 5.15 = 8.85.$$

The equivalence pH is 8.85, so **phenolphthalein** (8.0–10.0) is the correct indicator — its range brackets 8.85. Bromothymol blue would flip about a pH unit early; methyl red, far too early.

**P3** Equivalence volume: $n_{\ce{HA}} = 0.05000\ \mathrm{L}\times0.1000\ \mathrm{M} = 5.000\ \mathrm{mmol}$, matched by 50.00 mL of 0.1000 M NaOH, so $V_e = 50.00\ \mathrm{mL}$.

*0% (0.00 mL, region ①):* weak acid alone.
$$[\ce{H+}] = \sqrt{K_a C} = \sqrt{1.8\times10^{-5}\times0.1000} = \sqrt{1.8\times10^{-6}} = 1.34\times10^{-3}, \quad \mathrm{pH} = 2.87.$$

*50% (25.00 mL, region ② half-equivalence):* $[\ce{A-}] = [\ce{HA}]$, so
$$\mathrm{pH} = \mathrm{p}K_a = -\log(1.8\times10^{-5}) = 4.74.$$

*100% (50.00 mL, region ③ equivalence):* all 5.000 mmol is acetate in $50.00 + 50.00 = 100.00\ \mathrm{mL}$, so $C' = 0.05000\ \mathrm{M}$. With $K_b = 1.0\times10^{-14}/1.8\times10^{-5} = 5.56\times10^{-10}$:
$$[\text{OH}^-] = \sqrt{5.56\times10^{-10}\times0.05000} = \sqrt{2.78\times10^{-11}} = 5.27\times10^{-6}, \quad \mathrm{pOH} = 5.28, \quad \mathrm{pH} = 8.72.$$

*150% (75.00 mL, region ④ excess base):* base added $= 0.07500\times0.1000 = 7.500\ \mathrm{mmol}$; 5.000 mmol consumed the acid, leaving 2.500 mmol excess $\text{OH}^-$ in $50.00 + 75.00 = 125.00\ \mathrm{mL}$:
$$[\text{OH}^-] = \frac{2.500\ \mathrm{mmol}}{125.00\ \mathrm{mL}} = 0.02000\ \mathrm{M}, \quad \mathrm{pOH} = 1.70, \quad \mathrm{pH} = 12.30.$$

Summary: **2.87 → 4.74 → 8.72 → 12.30**. The equivalence pH exceeds 7 because at that point the flask contains only acetate, the conjugate base of a weak acid, which reacts with water ($\ce{CH3COO- + H2O <=> CH3COOH + OH-}$) to make the solution basic.

</details>

## Flashback

**From Lesson 1.2 (Statistics of measurement):** Five replicate determinations of chloride in a water sample give 24.32, 24.38, 24.28, 24.35, 24.30 ppm. Report the mean and its 95% confidence interval. (Use $t = 2.776$ for 4 degrees of freedom.)

<details>
<summary>Solution</summary>

Mean: $\bar x = (24.32+24.38+24.28+24.35+24.30)/5 = 121.63/5 = 24.326\ \mathrm{ppm}$.

Deviations from the mean: $-0.006,\ +0.054,\ -0.046,\ +0.024,\ -0.026$; their squares sum to $3.6\times10^{-5}+2.916\times10^{-3}+2.116\times10^{-3}+5.76\times10^{-4}+6.76\times10^{-4} = 6.32\times10^{-3}$. Sample standard deviation:

$$s = \sqrt{\frac{\sum(x_i-\bar x)^2}{n-1}} = \sqrt{\frac{6.32\times10^{-3}}{4}} = \sqrt{1.58\times10^{-3}} = 0.0397\ \mathrm{ppm}.$$

The 95% confidence interval uses the standard error $s/\sqrt{n}$:

$$\mu = \bar x \pm \frac{t\,s}{\sqrt{n}} = 24.326 \pm \frac{2.776\times0.0397}{\sqrt{5}} = 24.326 \pm 0.049\ \mathrm{ppm}.$$

Report **$24.33 \pm 0.05$ ppm** (95% confidence). This is the same $t$-distribution machinery from statistics used to state how well a mean is pinned down — the analytical counterpart of "how sharp is my endpoint."

</details>

## Connections

- **Backward:** this is [gen-chem 4.2](../../general-chemistry/lessons/04-02-buffers-titration.md)'s buffer and Henderson–Hasselbalch computed systematically at every volume, resting on the $K_a$/$K_b$ equilibria of [gen-chem 4.1](../../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) and the equilibrium reasoning of [gen-chem 3.4](../../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md). Feeds **Boss Problem 2**.
- **Forward:** [2.2 Complexometric EDTA titrations](02-02-complexometric-edta-titrations.md) reuses this exact four-region logic with a metal–ligand equilibrium, plotting p$M$ (a "pM curve") instead of pH; [2.4](02-04-redox-equilibria-titrations.md) does it with electrode potential $E$ and the Nernst equation.
- **Sideways:** the underlying acid–base equilibria connect to the equilibrium and electrochemistry threads in [physical chemistry](../../physical-chemistry/syllabus.md); the confidence-interval flashback ties endpoint precision to the [probability & statistics](../../prob-stat-refresher/syllabus.md) treatment of the $t$-distribution.

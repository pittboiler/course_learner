# Control Systems · Lesson 3.3: Frequency response & Bode plots

> ⏱ ~15 min · Module 3: Root locus & frequency response · Builds on: [1.4 Transfer functions, poles & zeros](01-04-transfer-functions-poles-zeros.md), [1.5 Block-diagram algebra](01-05-block-diagram-algebra.md), [`signals-systems` 2.1](../../signals-systems/lessons/02-01-eigenfunctions-frequency-response.md) · Unlocks: [3.4 Gain & phase margins](03-04-gain-and-phase-margins.md), [3.5 The Nyquist criterion](03-05-nyquist-criterion.md), [4.3 Lead & lag compensators](04-03-lead-lag-compensators.md)

## Why this matters

Root locus ([3.1](03-01-root-locus-construction.md), [3.2](03-02-root-locus-design.md)) needs a model. You need the polynomial coefficients, and if you don't have them you have nothing. Frequency response needs no model at all: **wire a signal generator to the plant, sweep a sine, and record how much the output shrinks and how far it lags.** That is a measurement, taken on the real hardware — motor, amplifier, airframe, chemical reactor — including all the parasitics, flexible modes, and delays nobody wrote into the equations. It is the only classical method that survives contact with a plant you cannot model.

Two more gifts come with it. On log axes, **cascades add**: the response of $G_1G_2G_3$ is the sum of three plots you already know, so you sketch complicated loops with a pencil and no calculator. And the plot displays the thing time-domain plots hide — *how close to unstable you are*, which is the whole subject of [3.4](03-04-gain-and-phase-margins.md).

## The idea

Here is the entire physical basis, from [`signals-systems` 2.1](../../signals-systems/lessons/02-01-eigenfunctions-frequency-response.md): push a sinusoid at frequency $\omega$ into a stable LTI system and, once the transients die, a sinusoid at **the same frequency** comes out. All the system did was scale the amplitude by $|G(j\omega)|$ and shift the phase by $\angle G(j\omega)$ — the complex number you get by evaluating the transfer function at $s = j\omega$. That's the result; we won't re-derive it.

So the system's complete behavior is two real curves against frequency: a gain and a phase. Plot them and you're done.

The only design decision is *what scale to plot on*, and Bode's choice is the one that makes hand-sketching possible. Take the logarithm of the gain, and plot against the logarithm of frequency. Why the log of the gain? Because transfer functions are **products** of simple factors, and $\log$ turns products into sums — so instead of multiplying curves you stack them. Why the log of frequency? Because each simple factor, in log-log coordinates, stops being a curve at all: it becomes two **straight lines** that meet at a kink. Sketching a Bode plot is then bookkeeping — walk left to right along the frequency axis and change slope by a fixed amount at each kink.

That's the trick, and it's the whole lesson. The rest is the four kinds of kink.

## The formal version

### Decibels

$$\boxed{\;|G|_{\mathrm{dB}} = 20\log_{10}|G|\;}$$

*In words: report the gain as a power of ten, counted in twentieths.* The factor 20 rather than 10 is because decibels were defined for power and power goes as amplitude squared — the half-power ($-3$ dB) convention is worked through in [`signals-systems` 4.4](../../signals-systems/lessons/04-04-filter-design-basics.md). Anchor values worth memorizing:

| gain $\lvert G\rvert$ | 0.1 | 0.5 | 1 | $\sqrt2$ | 2 | 5 | 10 | 100 |
|---|---|---|---|---|---|---|---|---|
| dB | $-20$ | $-6.02$ | $0$ | $3.01$ | $6.02$ | $13.98$ | $20$ | $40$ |

The reason dB earn their place here is one line:

$$|G_1G_2|_{\mathrm{dB}} = 20\log_{10}|G_1||G_2| = |G_1|_{\mathrm{dB}} + |G_2|_{\mathrm{dB}}, \qquad \angle(G_1G_2) = \angle G_1 + \angle G_2 .$$

*In words: a cascade's Bode plot is the sum of its factors' Bode plots — magnitude and phase both.* Phase was already additive; dB makes magnitude additive too. Factor a transfer function into pieces, sketch each piece, add.

### The four building blocks

Every rational transfer function is a product of exactly four kinds of factor. Learn these four plots and you can draw anything.

**1. Constant $K$.** Magnitude flat at $20\log_{10}|K|$ dB. Phase $0^\circ$ if $K>0$, $180^\circ$ if $K<0$. Changing $K$ slides the whole magnitude plot vertically and never touches the phase — which is exactly why gain is such a blunt design knob.

**2. Pole or zero at the origin, $1/s$ or $s$.** Since $|1/(j\omega)| = 1/\omega$, we get $-20\log_{10}\omega$ dB: a **straight line of slope $-20$ dB/decade passing through 0 dB at $\omega = 1$**, exact at every frequency — no approximation anywhere. Phase is a constant $-90^\circ$, because $1/j = -j$. A differentiator $s$ mirrors it: $+20$ dB/dec, $+90^\circ$. A system with $N$ integrators (**type $N$**, from [2.3](02-03-steady-state-error-system-type.md)) therefore starts at low frequency on a $-20N$ dB/dec slope with phase $-90N^\circ$.

**3. Real pole, $\dfrac{1}{1 + s/\omega_c}$.** The **corner frequency** is $\omega_c$ (rad/s). Magnitude $|G| = 1/\sqrt{1+(\omega/\omega_c)^2}$, so:

- $\omega \ll \omega_c$: $|G| \to 1$, i.e. **0 dB, flat**.
- $\omega \gg \omega_c$: $|G| \to \omega_c/\omega$, i.e. **$-20$ dB/decade**.

Those two asymptotes cross at $\omega = \omega_c$. The exact error there is the one number to remember:

$$20\log_{10}\frac{1}{\sqrt2} = -3.01\ \text{dB}\quad\text{at }\omega=\omega_c, \qquad -0.97\ \text{dB at }\tfrac12\omega_c \text{ and at } 2\omega_c, \qquad -0.04\ \text{dB at }\tfrac1{10}\omega_c.$$

*In words: the true curve hugs the corner, dipping 3 dB below the kink and rejoining within a decade either side.* Phase runs $0^\circ \to -90^\circ$, passing **exactly $-45^\circ$ at $\omega_c$**; the standard straight-line approximation holds $0^\circ$ below $\omega_c/10$, ramps linearly (in $\log\omega$) to $-90^\circ$ at $10\omega_c$, and is never off by more than about $5.7^\circ$. A real **zero** $(1+s/\omega_c)$ mirrors all of it: $+20$ dB/dec above the corner, $+3.01$ dB at the corner, phase $0^\circ \to +90^\circ$ through $+45^\circ$.

**4. Complex pole pair,** $\dfrac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$, with damping ratio $\zeta$ and natural frequency $\omega_n$ (rad/s) as in [2.2](02-02-second-order-response.md). Two poles at one corner, so everything doubles: 0 dB flat below $\omega_n$, **$-40$ dB/decade** above it, phase $0^\circ \to -180^\circ$ through exactly $-90^\circ$ at $\omega_n$.

But here the asymptotes can lie badly, because a lightly damped pair **resonates**. Evaluating at $s = j\omega$ and maximizing gives

$$\boxed{\;\omega_r = \omega_n\sqrt{1-2\zeta^2}, \qquad M_r = \frac{1}{2\zeta\sqrt{1-\zeta^2}}\;}\qquad (\text{peak exists only for } \zeta < \tfrac{1}{\sqrt2} \approx 0.707).$$

*In words: below $\zeta = 0.707$ the response bulges above the asymptote near $\omega_n$, and the lighter the damping the taller and sharper the bulge.* For $\zeta \ge 0.707$ the square root goes imaginary — no peak, the magnitude just rolls off. At $\omega = \omega_n$ exactly the magnitude is always $1/(2\zeta)$, whatever $\zeta$ is.

Numbers, to calibrate how wrong the asymptotes can be. For $\zeta = 0.1$: $\omega_r = \omega_n\sqrt{0.98} = 0.990\,\omega_n$, and $M_r = 1/(2(0.1)\sqrt{0.99}) = 5.025$, which is $20\log_{10}5.025 = 14.0$ dB. The asymptotes say **0 dB** there. You would be 14 dB — a factor of 5 — wrong. **Always sketch the peak in by hand for $\zeta < 0.5$.**

### The sketching recipe

1. **Put $L(s)$ in Bode (time-constant) form.** Every factor must read $(1 + s/\omega_c)$, not $(s + \omega_c)$. Pull the constants out front and combine them into a single $K$. This is where most sketches die — see the box below.
2. **List the corner frequencies in increasing order**, tagging each as pole or zero, real or complex.
3. **Start below the lowest corner.** The low-frequency asymptote is $K/(j\omega)^N$ for a type-$N$ system: slope $-20N$ dB/dec, and it passes through $20\log_{10}|K|$ dB at $\omega = 1$. (Type 0? Flat at $20\log_{10}|K|$ — that's the DC gain.)
4. **Walk right.** At each corner, change the slope: $-20$ dB/dec per real pole, $+20$ per real zero, $\mp40$ for a complex pair. Slopes accumulate; they don't reset.
5. **Phase the same way**, using $-90N^\circ$ as the starting value and adding each factor's $0^\circ\!\to\!\mp90^\circ$ (or $\mp180^\circ$) ramp centered on its corner.
6. **Correct by hand:** $-3$ dB at each real pole corner, $+3$ dB at each zero corner, and the full $M_r$ bulge at any lightly damped pair.

> **The Bode-form conversion, because it is the #1 error.** $\dfrac{10}{s+2}$ is **not** a system with DC gain 10. Factor the 2 out of the denominator: $\dfrac{10}{2(1 + s/2)} = \dfrac{5}{1 + s/2}$. The DC gain is $5$, i.e. $+13.98$ dB, and *that* is where the low-frequency asymptote sits. Skip this step and your entire plot is shifted vertically by $20\log_{10}2 = 6$ dB — every gain you read off it is wrong by a factor of two.

## Picture

![Bode magnitude and phase plot of L(s)=5/[s(1+s/2)(1+s/10)], with coral straight-line asymptotes, the blue true response, and dashed verticals at the corner frequencies 2 and 10 rad/s](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (the mechanical drill — sketch $L(s)=\dfrac{100}{s(s+2)(s+10)}$).**

*Step 1, Bode form.* Pull out the 2 and the 10: $s(s+2)(s+10) = s\cdot 2(1+s/2)\cdot 10(1+s/10)$, so

$$L(s) = \frac{100}{20\,s(1+s/2)(1+s/10)} = \frac{5}{s\,(1+\tfrac{s}{2})(1+\tfrac{s}{10})}.$$

*Step 2, corners.* $\omega = 2$ (real pole), $\omega = 10$ (real pole). Type 1 — one integrator.

*Step 3, low-frequency asymptote.* $|L| \approx 5/\omega$: slope $-20$ dB/dec, through $20\log_{10}5 = 13.98$ dB at $\omega=1$. (Equivalently it crosses 0 dB at $\omega = 5$ — and $5$ is exactly $K_v = \lim_{s\to0} sL(s) = 100/20$ from [2.3](02-03-steady-state-error-system-type.md). For a type-1 system the low-frequency asymptote always cuts 0 dB at $\omega = K_v$; a free reading of steady-state accuracy off the Bode plot.)

*Step 4, slopes.* $-20$ dB/dec below $\omega=2$; $-40$ between 2 and 10; $-60$ above 10.

*Step 5, phase.* Starts at $-90^\circ$; each pole adds $-90^\circ$; ends at $-270^\circ$. Exactly: $\angle L = -90^\circ - \arctan(\omega/2) - \arctan(\omega/10)$.

*Step 6, check the approximation.* Asymptote value $A(\omega)$ is $5/\omega$ below 2, $10/\omega^2$ between, $100/\omega^3$ above:

| $\omega$ (rad/s) | 0.1 | 1 | 2 | 5 | 10 | 20 |
|---|---|---|---|---|---|---|
| asymptote (dB) | $33.98$ | $13.98$ | $7.96$ | $-7.96$ | $-20.00$ | $-38.06$ |
| exact (dB) | $33.97$ | $12.97$ | $4.78$ | $-9.57$ | $-23.18$ | $-39.07$ |
| error (dB) | $-0.01$ | $-1.01$ | $-3.18$ | $-1.61$ | $-3.18$ | $-1.01$ |

Worst case, 3.2 dB — the $-3.01$ dB from the corner you're standing on plus $-0.17$ dB of leakage from the other one. **The asymptotes are never off by more than a few dB, and that is why nobody bothers with the exact curve when sketching.** The one place they mislead: the asymptotes say $|L| = 1$ (0 dB) at $\omega = \sqrt{10} = 3.16$ rad/s, while the truth is $\omega = 2.80$ rad/s, where $\angle L = -160.1^\circ$. Hold that pair of numbers — [3.4](03-04-gain-and-phase-margins.md) turns them into a stability margin.

**Example 2 (why you'd care — the mode that isn't in your model).** You model a servo as rigid and get a tidy second-order plant. You measure it, and the Bode magnitude shows a spike near $\omega_n = 20$ rad/s: a flexible shaft mode with $\zeta \approx 0.1$ that no rigid-body model contains. How bad is it?

$$\omega_r = 20\sqrt{1-2(0.1)^2} = 20\sqrt{0.98} = 19.8\ \text{rad/s}, \qquad M_r = \frac{1}{2(0.1)\sqrt{1-0.01}} = 5.03 \;\Rightarrow\; 14.0\ \text{dB}.$$

Your model predicted 0 dB there; the hardware delivers $+14$ dB. If you then close the loop with a controller that assumed the rigid model, you have handed the loop a factor-of-5 gain surprise at 20 rad/s — and if the phase happens to be near $-180^\circ$ there, that is a loop that rings or howls. The same resonance shows up in a driven mass–spring–damper ([`mechanics-refresher` 3.2](../../mechanics-refresher/lessons/03-02-damped-driven-oscillations.md)) and in an $RLC$ circuit near its resonant frequency ([`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md)) — one formula, three disciplines. **This is the argument for frequency response in one picture: it found a mode the model didn't have.**

### One caveat: minimum phase

For a **minimum-phase** system — all poles *and all zeros* in the left half-plane, no time delay — Bode's gain–phase relation says the magnitude plot *determines* the phase. Sketch the slopes and the phase is already decided (roughly, $-20n$ dB/dec of slope buys you about $-90n$ degrees).

That guarantee fails in exactly the two cases that make plants hard to control, and it fails silently, because **neither leaves a fingerprint on the magnitude plot**:

- A **right-half-plane zero** $(1 - s/z)$ has $|1 - j\omega/z| = |1 + j\omega/z|$ — magnitude identical to the well-behaved version — but its phase runs $0^\circ \to -90^\circ$ instead of $0^\circ \to +90^\circ$. You lose $180^\circ$ of phase and gain nothing. This is the non-minimum-phase system flagged in [1.4](01-04-transfer-functions-poles-zeros.md), the one whose step response first goes the *wrong way*.
- A **time delay** $e^{-sT}$ has $|e^{-j\omega T}| = 1$ at every frequency — perfectly flat, invisible — while its phase is $-\omega T$ radians, growing without bound. Any transport lag (a conveyor, a pipe, a network hop, a sampler) eventually eats all your phase.

*In words: both add lag you must pay for and gain you can't spend.* Phase lag is what destabilizes a feedback loop, so a delay or an RHP zero puts a hard ceiling on achievable bandwidth — no controller removes it.

## Watch out

- **You might think a corner in $(s+10)$ contributes 20 dB somewhere.** It contributes a *corner* at $\omega = 10$ and a *constant* $1/10$ that belongs out front with $K$. Convert to $(1+s/10)$ form first, every time, or your whole plot is shifted vertically.
- **You might reset the slope at each corner.** Slopes **accumulate**. After a $-20$ region, a new pole makes it $-40$, not $-20$. Three poles past all corners means $-60$ dB/dec, period.
- **You might trust the asymptotes near a lightly damped pair.** For real poles they're good to 3 dB. For $\zeta = 0.1$ they're wrong by 14 dB — and the peak is precisely where the loop will bite you. Sketch it in.
- **You might read "$-40$ dB/decade" as "$-40$ dB/octave."** A decade is $\times 10$; an octave is $\times 2$. A $-20$ dB/dec slope is $-6.02$ dB/octave.

## One-liner

> On log–log axes every factor is two straight lines and multiplication is addition, so a Bode plot is just a walk left-to-right that changes slope by $\mp20$ dB/decade at each corner — with a 3 dB fudge at real corners and a $1/(2\zeta\sqrt{1-\zeta^2})$ spike at lightly damped ones.

## Problems

**P1 (🟢)** Put $G(s) = \dfrac{50}{(s+5)(s+100)}$ in Bode form. State the DC gain in dB, both corner frequencies, and the asymptotic slope in each of the three frequency regions. What is the *exact* magnitude in dB at $\omega = 5$ rad/s?

**P2 (🟡)** Sketch (by hand, on paper) the asymptotic Bode magnitude and phase of $G(s) = \dfrac{20(s+1)}{s(s+10)}$. Give the Bode form, the corner frequencies, the slope in each region, the constant dB level of the middle region, and the phase at $\omega\to0$ and $\omega\to\infty$. Then compute the exact magnitude at $\omega = 1$ and $\omega = 10$ and compare to your asymptote.

**P3 (🔴)** A plant has a complex pole pair with $\omega_n = 10$ rad/s and $\zeta = 0.3$. Find the resonant frequency $\omega_r$, the peak magnitude $M_r$ in dB, and the magnitude in dB at $\omega = \omega_n$ exactly. Then: for what $\zeta$ would the peak disappear entirely, and what does the asymptotic sketch claim the magnitude is at $\omega = \omega_n$?

<details>
<summary>Solutions</summary>

**P1** Factor the constants out of each denominator term: $(s+5) = 5(1+s/5)$ and $(s+100) = 100(1+s/100)$, so

$$G(s) = \frac{50}{5\cdot 100\,(1+\tfrac{s}{5})(1+\tfrac{s}{100})} = \frac{0.1}{(1+\tfrac{s}{5})(1+\tfrac{s}{100})}.$$

- **DC gain** $= 0.1 \Rightarrow 20\log_{10}(0.1) = -20$ dB. (Check directly: $G(0) = 50/(5\cdot100) = 0.1$. ✓)
- **Corners:** $\omega = 5$ and $\omega = 100$ rad/s, both real poles.
- **Slopes:** $0$ dB/dec below 5 (type 0, flat at $-20$ dB); $-20$ dB/dec between 5 and 100; $-40$ dB/dec above 100.

Exact magnitude at $\omega = 5$: $|G(j5)| = \dfrac{50}{|j5+5|\,|j5+100|} = \dfrac{50}{\sqrt{50}\cdot\sqrt{10025}} = \dfrac{50}{7.0711 \times 100.125} = 0.07062$, and $20\log_{10}(0.07062) = -23.02$ dB.

*Check.* The asymptote at $\omega=5$ is $-20$ dB, so the error is $-3.02$ dB — the expected $-3.01$ dB from sitting on a corner, plus $-0.01$ dB of leakage from the far-off corner at 100. ✓

**P2** Bode form: $20(s+1) = 20(1+s)$ and $s(s+10) = 10\,s(1+s/10)$, so

$$G(s) = \frac{20(1+s)}{10\,s\,(1+\tfrac{s}{10})} = \frac{2\,(1+s)}{s\,(1+\tfrac{s}{10})}.$$

- **Corners:** $\omega = 1$ (real **zero**), $\omega = 10$ (real pole). Type 1.
- **Low-frequency asymptote:** $|G|\approx 2/\omega$ — slope $-20$ dB/dec, passing $20\log_{10}2 = 6.02$ dB at $\omega=1$ and $0$ dB at $\omega=2$. At $\omega = 0.1$ it reads $20\log_{10}20 = 26.02$ dB.
- **Slopes:** $-20$ dB/dec below 1; the zero at 1 adds $+20$, giving **$0$ dB/dec (flat) between 1 and 10**; the pole at 10 adds $-20$, giving $-20$ dB/dec above 10.
- **Middle region level:** $|G| \approx 2\omega/\omega = 2$, i.e. a flat $6.02$ dB from $\omega=1$ to $\omega=10$.
- **Phase:** $\angle G = -90^\circ + \arctan\omega - \arctan(\omega/10)$. As $\omega\to0$: $-90^\circ$. As $\omega\to\infty$: $-90^\circ + 90^\circ - 90^\circ = -90^\circ$. It rises in between (the zero acts a decade before the pole), peaking at $\omega = \sqrt{10} = 3.16$ rad/s where $\angle G = -90^\circ + 72.45^\circ - 17.55^\circ = -35.1^\circ$ — a maximum phase *lead* of $54.9^\circ$ over the bare integrator.

Exact values:

$$|G(j1)| = \frac{20\,|j+1|}{1\cdot|j+10|} = \frac{20\sqrt2}{\sqrt{101}} = \frac{28.284}{10.0499} = 2.8144 \;\Rightarrow\; 8.99\ \text{dB},$$
$$|G(j10)| = \frac{20\,|j10+1|}{10\cdot|j10+10|} = \frac{20\sqrt{101}}{10\sqrt{200}} = \frac{201.00}{141.42} = 1.4213 \;\Rightarrow\; 3.05\ \text{dB}.$$

*Check.* Asymptote is $6.02$ dB at both frequencies. At $\omega=1$ the error is $+2.97$ dB $= +3.01$ (sitting on a **zero** corner) $-0.04$ (leakage from the pole a decade up). At $\omega=10$ it is $-2.97$ dB $= -3.01$ (on the pole corner) $+0.04$ (leakage from the zero a decade down). Both match the building-block corrections. ✓ The symmetry is expected: the zero and pole are placed symmetrically about $\omega=\sqrt{10}$ on the log axis. This shape — flat gain, phase *raised* over a band — is a **lead network**, the subject of [4.3](04-03-lead-lag-compensators.md).

**P3** With $\omega_n = 10$, $\zeta = 0.3$ (and $\zeta < 0.707$, so a peak exists):

$$\omega_r = \omega_n\sqrt{1-2\zeta^2} = 10\sqrt{1-0.18} = 10\sqrt{0.82} = 9.055\ \text{rad/s},$$
$$M_r = \frac{1}{2\zeta\sqrt{1-\zeta^2}} = \frac{1}{2(0.3)\sqrt{0.91}} = \frac{1}{0.6\times 0.95394} = \frac{1}{0.57236} = 1.7471 \;\Rightarrow\; 20\log_{10}(1.7471) = 4.85\ \text{dB}.$$

At $\omega = \omega_n$ exactly, the $s^2$ and $\omega_n^2$ terms cancel and only the damping term survives: $|G(j\omega_n)| = \omega_n^2/(2\zeta\omega_n^2) = 1/(2\zeta) = 1/0.6 = 1.6667 \Rightarrow 4.44$ dB.

The peak vanishes when $1 - 2\zeta^2 \le 0$, i.e. $\zeta \ge 1/\sqrt2 \approx 0.707$ — at which point $\omega_r = 0$ and the maximum has slid all the way down to DC.

The asymptotic sketch claims $0$ dB at $\omega = \omega_n$ (the two asymptotes cross there), so it is low by $4.44$ dB. Mild here; at $\zeta = 0.1$ the same claim is low by $14.0$ dB.

*Check.* $\omega_r = 9.055 < \omega_n = 10 <$ the undamped case, as it must be — damping pulls the peak below $\omega_n$. And $M_r = 1.747 > 1.667 = |G(j\omega_n)|$, consistent with the peak sitting slightly *before* $\omega_n$. ✓

</details>

## Flashback

**From Lesson 2.2 (Second-order response):** A closed loop has the standard second-order form with $\omega_n = 4$ rad/s and $\zeta = 0.5$. Find the percent overshoot $M_p$ of its unit-step response and the 2 percent settling time $t_s$. Then, using this lesson: does this system show a resonant peak in its Bode magnitude, and if so how big?

<details>
<summary>Solution</summary>

Percent overshoot depends on $\zeta$ alone:

$$M_p = \exp\!\left(\frac{-\pi\zeta}{\sqrt{1-\zeta^2}}\right) = \exp\!\left(\frac{-\pi(0.5)}{\sqrt{0.75}}\right) = \exp\!\left(\frac{-1.5708}{0.86603}\right) = e^{-1.8138} = 0.1630,$$

so $M_p = 16.3$ percent. Settling time to within 2 percent uses the envelope $e^{-\zeta\omega_n t}$:

$$t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{(0.5)(4)} = 2.0\ \text{s}.$$

Resonant peak: $\zeta = 0.5 < 0.707$, so yes, there is one.

$$\omega_r = 4\sqrt{1-2(0.25)} = 4\sqrt{0.5} = 2.83\ \text{rad/s}, \qquad M_r = \frac{1}{2(0.5)\sqrt{0.75}} = \frac{1}{0.86603} = 1.1547 \;\Rightarrow\; 1.25\ \text{dB}.$$

*Check.* Both peaks are governed by the same $\zeta$, and they move together: less damping gives more time-domain overshoot **and** a taller frequency-domain resonance. The two thresholds differ, though — overshoot disappears only at $\zeta = 1$, while the frequency-domain peak is already gone at $\zeta = 0.707$. So a system can overshoot in time (here 16 percent) while showing only a 1.25 dB bump in frequency. Units check: $\zeta\omega_n$ has units of $\mathrm{s^{-1}}$, so $t_s$ is in seconds. ✓

</details>

## Connections

- **Backward:** this is just $G(s)$ from [1.4](01-04-transfer-functions-poles-zeros.md) evaluated along $s = j\omega$ — the imaginary axis of the same $s$-plane the root locus lives in, read from a different direction. The type-$N$ low-frequency slope is [2.3](02-03-steady-state-error-system-type.md)'s system type in disguise, and for a type-1 loop the low-frequency asymptote crosses 0 dB exactly at $\omega = K_v$. The $\zeta,\omega_n$ pair driving the resonant peak is [2.2](02-02-second-order-response.md)'s.
- **Forward:** [3.4](03-04-gain-and-phase-margins.md) reads two numbers off this plot — how much extra gain, and how much extra phase lag, the loop can absorb before it goes unstable — which is why Example 1 stopped to record $\angle L = -160.1^\circ$ at the 0 dB crossing. [3.5](03-05-nyquist-criterion.md) replots the same data as one curve in the complex plane and proves *why* those margins mean what they mean. [4.3](04-03-lead-lag-compensators.md) is loop shaping: design becomes "add corners until the plot has the shape I want."
- **Sideways:** identical mathematics to filter design in [`signals-systems` 4.4](../../signals-systems/lessons/04-04-filter-design-basics.md) — a low-pass filter's cutoff *is* a real-pole corner frequency, and its $-3$ dB point is the same $-3.01$ dB error you correct by hand here. The resonant peak is the driven-oscillator resonance of [`mechanics-refresher` 3.2](../../mechanics-refresher/lessons/03-02-damped-driven-oscillations.md) and the $RLC$ resonance of [`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md), plotted on log axes.

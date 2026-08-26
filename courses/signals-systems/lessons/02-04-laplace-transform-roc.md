# Signals & Systems · Lesson 2.4: The Laplace transform and the ROC

> ⏱ ~15 min · Module 2: Frequency-domain analysis — Fourier and Laplace · Builds on: [2.3 The continuous-time Fourier transform](02-03-continuous-time-fourier-transform.md), [1.3 Systems and their properties](01-03-systems-and-properties.md), [`ode-refresher` 4.1](../../ode-refresher/lessons/04-01-laplace-transform.md) · Unlocks: 2.5 (transfer functions, poles and zeros)

## Why this matters

The Fourier transform of [2.3](02-03-continuous-time-fourier-transform.md) has a hole in it: it only exists for signals that don't blow up. Feed it $e^{2t}u(t)$ — a perfectly ordinary signal, the output of any unstable amplifier — and the integral diverges. No spectrum, no analysis, nothing. The Laplace transform patches the hole by adding one knob, and in exchange you get the tool that control engineers, circuit designers, and every ODE solver actually run on: poles, zeros, stability at a glance.

You already met Laplace as an ODE-solving trick in [`ode-refresher` 4.1](../../ode-refresher/lessons/04-01-laplace-transform.md) — transform, do algebra, invert. Two things are new here. First, the **bilateral** transform, which integrates over all of time instead of starting at $t=0$. Second, and far more important, the **region of convergence** — the piece ODE courses quietly drop and signals courses live on. Without it, a Laplace transform is genuinely ambiguous: the same formula describes two completely different signals.

## The idea

Here is the whole invention in one line: **Laplace is Fourier with a convergence knob.**

The Fourier transform multiplies $x(t)$ by $e^{-j\omega t}$ — a pure spin, magnitude exactly 1 — and integrates. Spin never shrinks anything, so if $x(t)$ grows, the integral diverges and there is no transform.

Laplace multiplies by $e^{-st}$ with $s = \sigma + j\omega$. Split it:

$$e^{-st} = \underbrace{e^{-\sigma t}}_{\text{shrink knob}}\cdot\underbrace{e^{-j\omega t}}_{\text{spin}}.$$

Same spin, but now with a real exponential envelope in front. Turn $\sigma$ up and $e^{-\sigma t}$ decays hard enough to tame a signal that grows — so $e^{2t}u(t)$, which has no Fourier transform, has a perfectly good Laplace transform as long as you pick $\sigma > 2$. In effect you Fourier-transform the *damped* signal $x(t)e^{-\sigma t}$ instead of $x(t)$ itself.

That immediately raises the question the whole lesson is about: **which values of $\sigma$ actually work?** That set of values is the region of convergence, and it is not decoration. It carries the information the algebraic formula throws away — whether the signal lives before $t=0$ or after, whether the system is causal, whether it is stable. Keep the ROC and you keep the signal. Drop it and you have half an answer.

## The formal version

**Bilateral Laplace transform.** For a continuous-time signal $x(t)$,

$$\boxed{\,X(s) = \int_{-\infty}^{\infty} x(t)\,e^{-st}\,dt\,},\qquad s = \sigma + j\omega,$$

where $\sigma = \mathrm{Re}\{s\}$ (nepers/s) is the damping knob and $\omega = \mathrm{Im}\{s\}$ (rad/s) is the usual angular frequency. *In words: weight the signal by a decaying-and-spinning exponential and total it over all time.*

The **unilateral** transform from [`ode-refresher` 4.1](../../ode-refresher/lessons/04-01-laplace-transform.md) integrates from $0$ instead: $\int_0^\infty x(t)e^{-st}dt$. That version exists to swallow initial conditions, which is what you want for an ODE that starts at $t=0$. Signals, though, don't politely start at the origin — a microphone was recording before you pressed the button, a channel carries traffic that arrived earlier — so **signals and systems uses the bilateral transform**. (For a signal that happens to be zero for $t<0$, the two agree exactly.)

**Relation to Fourier.** Setting $\sigma = 0$ gives $X(j\omega) = \int x(t)e^{-j\omega t}dt$ — exactly [2.3](02-03-continuous-time-fourier-transform.md)'s Fourier transform. *In words: the Fourier transform is the Laplace transform evaluated on the $j\omega$ axis* — **provided that axis is inside the ROC.** Hold on to that; it becomes the stability test.

**Region of convergence (ROC).** The ROC is the set of $s$ for which the defining integral converges absolutely:

$$\text{ROC} = \Big\{\,s : \int_{-\infty}^{\infty} |x(t)|\,e^{-\sigma t}\,dt < \infty \,\Big\}.$$

Note the right-hand side depends on $\sigma$ only, not $\omega$ — which is why the ROC is always made of *vertical* strips in the $s$-plane.

### The one example that matters

**Right-sided.** Let $a$ be real and $x(t) = e^{-at}u(t)$:

$$X(s) = \int_0^\infty e^{-at}e^{-st}\,dt = \int_0^\infty e^{-(s+a)t}\,dt = \left[\frac{e^{-(s+a)t}}{-(s+a)}\right]_0^\infty = \frac{1}{s+a},$$

where the upper limit dies only if $\mathrm{Re}\{s+a\} > 0$. So

$$e^{-at}u(t) \;\longleftrightarrow\; \frac{1}{s+a},\qquad \mathrm{Re}\{s\} > -a.$$

**Left-sided.** Now take $x(t) = -e^{-at}u(-t)$ — nonzero only for $t < 0$:

$$X(s) = -\int_{-\infty}^{0} e^{-(s+a)t}\,dt = -\left[\frac{e^{-(s+a)t}}{-(s+a)}\right]_{-\infty}^{0} = -\left(\frac{-1}{s+a} + \lim_{t\to-\infty}\frac{e^{-(s+a)t}}{s+a}\right).$$

As $t\to-\infty$, $|e^{-(s+a)t}| = e^{(\sigma+a)|t|}$, which dies only if $\sigma + a < 0$. Under that condition the limit is zero and

$$-e^{-at}u(-t) \;\longleftrightarrow\; \frac{1}{s+a},\qquad \mathrm{Re}\{s\} < -a.$$

**Look at what just happened.** Two signals that are not remotely alike — one lives entirely in the future, one entirely in the past — produce the **identical algebraic expression** $\frac{1}{s+a}$. The *only* thing distinguishing them is the ROC.

> A Laplace transform is the **pair** $\big(X(s),\ \text{ROC}\big)$. The expression alone does not determine the signal.

This is the single most important idea in the lesson. If someone hands you $X(s) = \frac{1}{s+2}$ and nothing else, you cannot tell them what $x(t)$ is. Ask for the ROC.

### ROC properties

For a rational $X(s) = N(s)/D(s)$ (a ratio of polynomials — the case that covers essentially every system you'll build), the ROC obeys:

1. **It is a vertical strip or half-plane**, bounded by lines $\mathrm{Re}\{s\} = \text{const}$. *(Because convergence depends on $\sigma$ alone.)*
2. **It contains no poles.** A pole is where $X(s)$ blows up; the integral cannot converge there. The ROC boundaries are always pole lines.
3. **Right-sided** signal ($x(t) = 0$ for $t < T_1$) $\Rightarrow$ ROC is a **right half-plane**, to the right of the **rightmost** pole.
4. **Left-sided** signal ($x(t) = 0$ for $t > T_2$) $\Rightarrow$ ROC is a **left half-plane**, to the left of the **leftmost** pole.
5. **Two-sided** signal $\Rightarrow$ ROC is a **strip** between two poles — and it may be **empty**, in which case the signal simply has no Laplace transform.
6. **Finite-duration** signal (nonzero only on a bounded interval, and absolutely integrable) $\Rightarrow$ ROC is the **entire $s$-plane**.

*In words: which side of time the signal lives on decides which side of each pole the ROC lives on.*

Rule 5's escape hatch is real. Take $x(t) = e^{2t}u(t) + e^{-t}u(-t)$: it grows without bound in *both* time directions. The right-sided piece needs $\mathrm{Re}\{s\} > 2$, the left-sided piece needs $\mathrm{Re}\{s\} < -1$, and nothing satisfies both. No transform exists.

### ROC ⟺ causality, ROC ⟺ stability

Apply all this to a system's impulse response $h(t)$, whose transform $H(s)$ is the **transfer function** ([2.5](02-05-transfer-functions-poles-zeros.md)'s whole subject).

**Causality.** Causal means $h(t) = 0$ for $t < 0$ — right-sided. By property 3:

$$\text{causal}\;\Longrightarrow\;\text{ROC is the half-plane right of the rightmost pole.}$$

**Stability.** From [1.3](01-03-systems-and-properties.md), BIBO stability means $\int|h(t)|\,dt < \infty$. That is exactly the convergence condition at $\sigma = 0$. Hence:

$$\boxed{\,\text{BIBO stable}\;\Longleftrightarrow\;\text{the ROC contains the } j\omega \text{ axis.}\,}$$

*In words: a system is stable exactly when its Fourier transform (its frequency response) exists.* Which is satisfying — an unstable system has no meaningful frequency response, because feeding it a sinusoid doesn't produce a steady sinusoid out.

**Both at once.** Causal pins the ROC to the right of the rightmost pole; stable requires that region to include $\sigma = 0$. Both hold only if the rightmost pole is left of the imaginary axis:

$$\text{causal and stable}\;\Longleftrightarrow\;\textbf{every pole has } \mathrm{Re}\{s\} < 0.$$

That one line — *all poles strictly in the left half-plane* — is the workhorse stability criterion of engineering, and [2.5](02-05-transfer-functions-poles-zeros.md) spends a whole lesson unpacking what each pole location does to the transient. It is also why `control-systems` ([syllabus](../../control-systems/syllabus.md)) obsesses over where feedback moves the poles.

### Standard pairs

All the right-sided entries assume $a, \omega_0$ real; each is verified by direct integration or by splitting a sinusoid into exponentials.

| $x(t)$ | $X(s)$ | ROC |
|---|---|---|
| $\delta(t)$ | $1$ | all $s$ |
| $\delta(t - t_0)$ | $e^{-st_0}$ | all $s$ |
| $u(t)$ | $\dfrac{1}{s}$ | $\mathrm{Re}\{s\} > 0$ |
| $-u(-t)$ | $\dfrac{1}{s}$ | $\mathrm{Re}\{s\} < 0$ |
| $e^{-at}u(t)$ | $\dfrac{1}{s+a}$ | $\mathrm{Re}\{s\} > -a$ |
| $-e^{-at}u(-t)$ | $\dfrac{1}{s+a}$ | $\mathrm{Re}\{s\} < -a$ |
| $t\,u(t)$ | $\dfrac{1}{s^{2}}$ | $\mathrm{Re}\{s\} > 0$ |
| $\dfrac{t^{n-1}}{(n-1)!}u(t)$ | $\dfrac{1}{s^{n}}$ | $\mathrm{Re}\{s\} > 0$ |
| $\cos(\omega_0 t)\,u(t)$ | $\dfrac{s}{s^{2}+\omega_0^{2}}$ | $\mathrm{Re}\{s\} > 0$ |
| $\sin(\omega_0 t)\,u(t)$ | $\dfrac{\omega_0}{s^{2}+\omega_0^{2}}$ | $\mathrm{Re}\{s\} > 0$ |
| $e^{-at}\cos(\omega_0 t)\,u(t)$ | $\dfrac{s+a}{(s+a)^{2}+\omega_0^{2}}$ | $\mathrm{Re}\{s\} > -a$ |
| $e^{-at}\sin(\omega_0 t)\,u(t)$ | $\dfrac{\omega_0}{(s+a)^{2}+\omega_0^{2}}$ | $\mathrm{Re}\{s\} > -a$ |

Spot-check the cosine row: write $\cos(\omega_0 t)u(t) = \tfrac12\big(e^{j\omega_0 t} + e^{-j\omega_0 t}\big)u(t)$ and apply the exponential rule twice (with $a = \mp j\omega_0$):

$$\frac12\left(\frac{1}{s - j\omega_0} + \frac{1}{s + j\omega_0}\right) = \frac12\cdot\frac{2s}{s^2 + \omega_0^2} = \frac{s}{s^2+\omega_0^2}.$$

The poles sit at $s = \pm j\omega_0$, *on* the $j\omega$ axis; the signal is right-sided, so the ROC is $\mathrm{Re}\{s\} > 0$ — which does **not** include the axis. Correct: an undying sinusoid is on the knife edge, neither decaying nor growing, and it is not absolutely integrable.

### Properties

Let $x(t) \leftrightarrow X(s)$ with region $R$.

| Property | Statement | ROC |
|---|---|---|
| Linearity | $\alpha x_1 + \beta x_2 \leftrightarrow \alpha X_1 + \beta X_2$ | $\supseteq R_1 \cap R_2$ |
| Time shift | $x(t - t_0) \leftrightarrow e^{-st_0}X(s)$ | $R$ (unchanged) |
| $s$-shift | $e^{s_0 t}x(t) \leftrightarrow X(s - s_0)$ | $R$ shifted by $\mathrm{Re}\{s_0\}$ |
| Time scaling | $x(\alpha t) \leftrightarrow \frac{1}{|\alpha|}X(s/\alpha)$ | $R$ scaled by $\alpha$ |
| Differentiation in $t$ | $\dfrac{dx}{dt} \leftrightarrow s\,X(s)$ | $\supseteq R$ |
| Differentiation in $s$ | $-t\,x(t) \leftrightarrow \dfrac{dX}{ds}$ | $R$ |
| Convolution | $x_1 * x_2 \leftrightarrow X_1(s)\,X_2(s)$ | $\supseteq R_1 \cap R_2$ |
| Integration | $\displaystyle\int_{-\infty}^{t}\! x(\tau)d\tau \leftrightarrow \frac{X(s)}{s}$ | $\supseteq R \cap \{\mathrm{Re}\{s\}>0\}$ |

Two of these carry the whole lesson's payload. **Differentiation becomes multiplication by $s$** — that is why an ODE turns into an algebraic equation, and note the bilateral version has *no* $x(0^-)$ term (the initial condition only appears in the unilateral transform, which is why [2.6](02-06-solving-systems-with-laplace.md) reaches for the unilateral one when initial conditions matter). **Convolution becomes multiplication** — the [1.4](01-04-convolution-continuous-time.md) integral you fought through becomes a product, extending [2.1](02-01-eigenfunctions-frequency-response.md)'s frequency-response idea from $j\omega$ to the entire $s$-plane.

The "$\supseteq$" in linearity and convolution matters: pole–zero cancellation can make the ROC *larger* than the intersection.

## Picture

![Three copies of the s-plane, each with poles at s = −1 and s = 2 marked by blue crosses, showing three different shaded regions of convergence: the right half-plane Re{s} > 2, the left half-plane Re{s} < −1, and the vertical strip −1 < Re{s} < 2 which alone contains the jω axis](assets/02-04-fig1.svg)

One expression, $X(s) = \frac{1}{(s+1)(s-2)}$; three legal ROCs; three genuinely different signals. Notice the pattern: the ROC boundaries are always pole lines, and the strip is the only one of the three that swallows the $j\omega$ axis — so the strip is the only stable option. Example 2 below writes out all three signals.

## Worked examples

**Example 1 (mechanical — a two-sided signal and its strip).** Find $X(s)$ and the ROC of

$$x(t) = e^{-t}u(t) + e^{2t}u(-t).$$

Transform each piece with the standard pairs.

*Right piece.* $e^{-t}u(t)$ matches $e^{-at}u(t)$ with $a = 1$:

$$e^{-t}u(t) \leftrightarrow \frac{1}{s+1},\qquad \mathrm{Re}\{s\} > -1.$$

*Left piece.* $e^{2t}u(-t) = -\big({-e^{-at}u(-t)}\big)$ with $a = -2$, so its transform is $-\frac{1}{s-2}$ with $\mathrm{Re}\{s\} < 2$. (Directly: $\int_{-\infty}^0 e^{2t}e^{-st}dt = \int_{-\infty}^0 e^{-(s-2)t}dt = -\frac{1}{s-2}$, converging when $\mathrm{Re}\{s\} < 2$.)

By linearity,

$$X(s) = \frac{1}{s+1} - \frac{1}{s-2} = \frac{(s-2)-(s+1)}{(s+1)(s-2)} = \frac{-3}{(s+1)(s-2)},$$

with ROC the **intersection** $-1 < \mathrm{Re}\{s\} < 2$ — a strip, exactly as property 5 predicts for a two-sided signal. The strip contains $\sigma = 0$, so this signal also has a Fourier transform: substitute $s = j\omega$ to get $X(j\omega) = \frac{-3}{(j\omega+1)(j\omega-2)}$. Sensible — the signal decays in both time directions, so it's absolutely integrable.

**Example 2 (why you'd care — inverting an ambiguous $X(s)$).** You are handed

$$X(s) = \frac{1}{(s+1)(s-2)}.$$

What is $x(t)$? **Unanswerable as stated.** There are three candidate ROCs, one per region carved out by the poles $s = -1$ and $s = 2$. Partial fractions first:

$$\frac{1}{(s+1)(s-2)} = \frac{A}{s+1} + \frac{B}{s-2},\quad A = \frac{1}{-1-2} = -\frac13,\quad B = \frac{1}{2+1} = \frac13,$$

so $X(s) = \frac{-1/3}{s+1} + \frac{1/3}{s-2}$. Now invert each term *according to which side of it the ROC lies* — right of a pole means the term is right-sided ($\frac{1}{s-p} \to e^{pt}u(t)$); left of it means left-sided ($\frac{1}{s-p} \to -e^{pt}u(-t)$).

**(a) ROC $\mathrm{Re}\{s\} > 2$.** Both poles are to the left of the ROC, so both terms are right-sided:

$$x(t) = \left(-\tfrac13 e^{-t} + \tfrac13 e^{2t}\right)u(t).$$

Causal (zero for $t<0$), but the ROC misses the $j\omega$ axis — **unstable**, and indeed $e^{2t}$ runs away.

**(b) ROC $\mathrm{Re}\{s\} < -1$.** Both poles are to the right, so both terms are left-sided:

$$x(t) = \left(\tfrac13 e^{-t} - \tfrac13 e^{2t}\right)u(-t).$$

Anticausal, and unstable ($e^{-t}$ explodes as $t\to-\infty$).

**(c) ROC $-1 < \mathrm{Re}\{s\} < 2$.** The pole at $-1$ is to the left of the strip (right-sided term); the pole at $2$ is to the right (left-sided term):

$$x(t) = -\tfrac13 e^{-t}u(t) - \tfrac13 e^{2t}u(-t).$$

Two-sided, decaying in both directions, and the ROC contains the $j\omega$ axis — the only **stable** reading. Three completely different time signals; one formula. This is the figure, in algebra.

## Watch out

- **You might think $X(s)$ *is* the transform.** It isn't — the transform is $\big(X(s), \text{ROC})$. Writing "$\mathcal{L}\{x\} = \frac{1}{s+3}$" with no ROC is like giving a magnitude with no units. Two different signals answer to it.
- **You might think poles in the left half-plane means stable, full stop.** Only for a **causal** system. $H(s) = \frac{1}{s+1}$ with ROC $\mathrm{Re}\{s\} < -1$ has its pole at $-1$ (left half-plane) and is *not* stable — the ROC misses the axis. The clean statement is always about the ROC; "all poles in the LHP" is the causal special case.
- **You might expect an initial-condition term in $\mathcal{L}\{x'\}$.** Bilateral gives plain $sX(s)$, with nothing subtracted. The familiar $sY(s) - y(0^-)$ belongs to the unilateral transform of [`ode-refresher` 4.1](../../ode-refresher/lessons/04-01-laplace-transform.md); mixing the two conventions is the most common Laplace bug there is.
- **You might assume every signal has a Laplace transform.** Two-sided signals that grow in both directions have an empty ROC and no transform at all — $e^{t^2}$ likewise beats every exponential knob.

## One-liner

> Laplace is Fourier with a damping knob $\sigma$; the set of $\sigma$ that makes the integral converge is the ROC, and the ROC — not the formula — is what tells you which signal you have, whether the system is causal, and whether it is stable.

## Problems

**P1 (🟢)** Find $X(s)$ and its ROC for (a) $x(t) = 2e^{-3t}u(t)$ and (b) $x(t) = -2e^{-3t}u(-t)$. What does the comparison illustrate?

**P2 (🟡)** For each signal, find $X(s)$ and the ROC, or explain why no Laplace transform exists.
(a) $x(t) = e^{-2t}u(t) + e^{t}u(-t)$.
(b) $x(t) = e^{2t}u(t) + e^{-3t}u(-t)$.

**P3 (🔴)** An LTI system has $H(s) = \dfrac{s+1}{(s+3)(s-2)}$. (a) Can this system be both causal and BIBO stable? (b) Choose the ROC that makes it stable and find the corresponding impulse response $h(t)$. (c) Is that $h(t)$ causal?

<details>
<summary>Solutions</summary>

**P1** (a) Right-sided, so integrate from $0$:

$$X(s) = \int_0^\infty 2e^{-3t}e^{-st}dt = 2\int_0^\infty e^{-(s+3)t}dt = \frac{2}{s+3},\qquad \mathrm{Re}\{s\} > -3,$$

since the upper limit vanishes only when $\mathrm{Re}\{s+3\} > 0$.

(b) Left-sided:

$$X(s) = -2\int_{-\infty}^{0} e^{-(s+3)t}dt = -2\cdot\left(\frac{-1}{s+3}\right) = \frac{2}{s+3},\qquad \mathrm{Re}\{s\} < -3,$$

because $|e^{-(s+3)t}| = e^{(\sigma+3)|t|} \to 0$ as $t \to -\infty$ only when $\sigma + 3 < 0$.

*What it illustrates.* The two signals — one a decaying exponential switched on at $t=0$, the other a negated exponential living entirely before $t=0$ — have **identical** algebraic transforms $\frac{2}{s+3}$ and are distinguished *only* by their ROCs. The transform is the pair (expression, ROC).

*Check.* Only (a) has $\sigma = 0$ inside its ROC, and only (a) is absolutely integrable: $\int_0^\infty 2e^{-3t}dt = \tfrac23 < \infty$, while (b)'s $2e^{-3t}$ for $t<0$ blows up. ✓

**P2** (a) The right piece $e^{-2t}u(t) \leftrightarrow \frac{1}{s+2}$ with $\mathrm{Re}\{s\} > -2$. The left piece:

$$\int_{-\infty}^{0} e^{t}e^{-st}dt = \int_{-\infty}^{0} e^{-(s-1)t}dt = \frac{-1}{s-1},\qquad \mathrm{Re}\{s\} < 1.$$

Adding,

$$X(s) = \frac{1}{s+2} - \frac{1}{s-1} = \frac{(s-1)-(s+2)}{(s+2)(s-1)} = \frac{-3}{(s+2)(s-1)},\qquad -2 < \mathrm{Re}\{s\} < 1.$$

A nonempty strip, and it contains the $j\omega$ axis — so this signal is absolutely integrable and has a Fourier transform too.

(b) The right piece $e^{2t}u(t)$ needs $\mathrm{Re}\{s\} > 2$. The left piece $e^{-3t}u(-t)$: $\int_{-\infty}^0 e^{-(s+3)t}dt$ converges only when $\mathrm{Re}\{s\} < -3$. The intersection of $\mathrm{Re}\{s\} > 2$ and $\mathrm{Re}\{s\} < -3$ is **empty**, so **no Laplace transform exists**.

*Check.* The intuition matches: in (b) the signal grows without bound in *both* time directions ($e^{2t}$ as $t\to+\infty$, and $e^{-3t} = e^{3|t|}$ as $t\to-\infty$), so no single value of $\sigma$ can damp both tails — one knob, two runaway ends. In (a) the signal decays in both directions, so a whole strip of $\sigma$ works. ✓

**P3** Poles at $s = -3$ and $s = 2$; a zero at $s = -1$.

(a) **No.** Causal forces the ROC to be the half-plane right of the rightmost pole, i.e. $\mathrm{Re}\{s\} > 2$. That region does not contain the $j\omega$ axis (it lies entirely right of $\sigma = 2$), so the system is not BIBO stable. Equivalently: causal-and-stable requires *all* poles to have $\mathrm{Re}\{s\} < 0$, and the pole at $s = +2$ violates that.

(b) Stability requires the ROC to contain the $j\omega$ axis. The three candidate regions are $\mathrm{Re}\{s\} > 2$, $-3 < \mathrm{Re}\{s\} < 2$, and $\mathrm{Re}\{s\} < -3$; only the strip $-3 < \mathrm{Re}\{s\} < 2$ contains $\sigma = 0$. Partial fractions:

$$\frac{s+1}{(s+3)(s-2)} = \frac{A}{s+3} + \frac{B}{s-2},\quad A = \frac{-3+1}{-3-2} = \frac{-2}{-5} = \frac{2}{5},\quad B = \frac{2+1}{2+3} = \frac{3}{5}.$$

(Check: $A + B = 1$ matches the coefficient of $s$; $-2A + 3B = -\tfrac45 + \tfrac95 = 1$ matches the constant term. ✓)

With ROC $-3 < \mathrm{Re}\{s\} < 2$: the pole at $-3$ lies **left** of the strip, so its term is right-sided; the pole at $+2$ lies **right** of the strip, so its term is left-sided:

$$h(t) = \tfrac25 e^{-3t}u(t) \;-\; \tfrac35 e^{2t}u(-t).$$

(c) **Not causal** — $h(t) = -\tfrac35 e^{2t}$ for $t < 0$, which is nonzero before the input arrives. This is the tradeoff in miniature: with a right-half-plane pole you may have causality or stability, never both.

*Check.* BIBO test directly: $\int_{-\infty}^{\infty}|h| = \tfrac25\int_0^\infty e^{-3t}dt + \tfrac35\int_{-\infty}^0 e^{2t}dt = \tfrac25\cdot\tfrac13 + \tfrac35\cdot\tfrac12 = \tfrac{2}{15} + \tfrac{3}{10} = \tfrac{13}{30} < \infty$ ✓ — stable, as the ROC promised.

</details>

## Flashback

**From Lesson 1.4 (Convolution in continuous time):** A system with impulse response $h(t) = e^{-t}u(t)$ is driven by the rectangular pulse $x(t) = u(t) - u(t-2)$ (on from $t=0$ to $t=2$, off otherwise). Find $y(t) = x * h$ for all $t$. *(Fresh variant — a pulse input, not an exponential.)*

<details>
<summary>Solution</summary>

Use $y(t) = \int_{-\infty}^{\infty} h(\tau)\,x(t-\tau)\,d\tau$, which puts the simple exponential in the fixed slot. Since $h(\tau) = 0$ for $\tau < 0$, and $x(t-\tau) = 1$ exactly when $0 \le t - \tau \le 2$, i.e. $t-2 \le \tau \le t$, the integrand is $e^{-\tau}$ on the overlap of $[0,\infty)$ and $[t-2,\,t]$.

**$t < 0$:** no overlap, so $y(t) = 0$.

**$0 \le t < 2$:** overlap is $\tau \in [0, t]$:

$$y(t) = \int_0^{t} e^{-\tau}d\tau = 1 - e^{-t}.$$

**$t \ge 2$:** overlap is $\tau \in [t-2,\, t]$:

$$y(t) = \int_{t-2}^{t} e^{-\tau}d\tau = e^{-(t-2)} - e^{-t} = \big(e^{2} - 1\big)e^{-t}.$$

So

$$y(t) = \begin{cases} 0, & t < 0,\\[2pt] 1 - e^{-t}, & 0 \le t < 2,\\[2pt] (e^{2}-1)e^{-t}, & t \ge 2.\end{cases}$$

*Check.* Continuity at $t=2$: the middle branch gives $1 - e^{-2} \approx 0.865$; the last gives $(e^2-1)e^{-2} = 1 - e^{-2}$ ✓ same value. While the pulse is on, the output charges toward 1 like an RC circuit; once it switches off, the output decays as $e^{-t}$ ✓. And $y$ is nonzero only for $t \ge 0$, as causality demands.

*Laplace preview.* Here $X(s) = \frac{1 - e^{-2s}}{s}$ and $H(s) = \frac{1}{s+1}$, so $Y(s) = \frac{1-e^{-2s}}{s(s+1)}$ — the convolution collapsed to a product, and the $e^{-2s}$ is exactly the time-shift factor that produces the switch-off at $t = 2$.

</details>

## Connections

- **Backward:** this generalizes [2.3](02-03-continuous-time-fourier-transform.md)'s Fourier transform by letting the exponent be complex — Fourier is Laplace restricted to $\sigma = 0$, legal only when the $j\omega$ axis is in the ROC. The stability criterion is [1.3](01-03-systems-and-properties.md)'s BIBO condition $\int|h| < \infty$ read in the $s$-plane, and the convolution property retires [1.4](01-04-convolution-continuous-time.md)'s integral in favor of a product. The eigenfunction argument of [2.1](02-01-eigenfunctions-frequency-response.md) is what makes $H(s)$ meaningful in the first place: $e^{st}$ in gives $H(s)e^{st}$ out.
- **Forward:** [2.5](02-05-transfer-functions-poles-zeros.md) takes the pole–zero picture seriously — each pole location becomes a transient mode, and "all poles in the left half-plane" becomes a design target. [2.6](02-06-solving-systems-with-laplace.md) inverts transforms by partial fractions to actually solve systems. Later, [4.1](04-01-z-transform-and-roc.md) replays this entire lesson in discrete time: the z-transform, whose ROC is an *annulus* instead of a strip, with the unit circle playing the role of the $j\omega$ axis.
- **Sideways:** you met the unilateral transform as an ODE solver in [`ode-refresher` 4.1](../../ode-refresher/lessons/04-01-laplace-transform.md) — same integral, no ROC discussion, because a causal ODE has only one sensible answer. The convergence bookkeeping here is the rigorous version of the "$s$ larger than the growth rate" hand-wave in that lesson, and it connects to the convergence conditions for the Fourier integral in [`fourier-analysis` 2.1](../../fourier-analysis/lessons/02-01-series-to-fourier-transform.md). In circuits, $s$-domain impedance ($1/sC$ for a capacitor, $sL$ for an inductor) is the phasor algebra of [`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md) with $j\omega$ promoted to $s$ — which is how transients and steady state get handled by one calculation.

# Signals & Systems · Lesson 1.1: Signals: the continuous and discrete worlds

> ⏱ ~15 min · Module 1: Signals and LTI systems · Builds on: [`ode-refresher` 2.2](../../ode-refresher/lessons/02-02-oscillations-damping.md), [`fourier-analysis` 1.1](../../fourier-analysis/lessons/01-01-periodic-functions-fourier-coefficients.md) · Unlocks: [1.2 The elementary signals](01-02-elementary-signals.md)

## Why this matters

Everything this course does — convolution, Fourier, Laplace, sampling, filters — is an operation performed *on a signal*. Before you push one through a system you need a vocabulary sharp enough to say what you're holding: does it live on a continuum or on a list of integers, does it repeat, does it carry finite total energy or a finite rate of energy, and what happens when you slide, flip, or squeeze its time axis. That last skill is not bookkeeping: convolution ([1.4](01-04-convolution-continuous-time.md)) is literally *flip one signal, shift it, multiply, integrate* — get flip-and-shift wrong and you cannot compute a single convolution.

There's also one genuine surprise here. Continuous-time sinusoids are always periodic. Discrete-time sinusoids usually are **not** — and that one fact reorganizes the entire discrete half of the course.

## The idea

A **signal** is just a function that carries information about how something varies. Two flavors, and the difference is not cosmetic:

- A **continuous-time** signal $x(t)$ is defined at *every* real instant $t$: a microphone diaphragm's displacement, a capacitor voltage. Ask for its value at $t = 4.5$ or $t = \pi$ and it answers.
- A **discrete-time** signal $x[n]$ is defined only at integer indices $n$: daily closing prices, the numbers in a WAV file, a sensor log. Square brackets, always — the bracket is the type declaration.

The crucial mental move: $x[n]$ is a **sequence**, an ordered list of numbers, not a function of a real variable you happen to inspect occasionally. There is no such thing as $x[4.5]$ — not "unknown", not "zero", *meaningless*, the way the 4.5th item on a grocery list is meaningless. Sequences often *arise* by sampling, and Module 3 is entirely about when that conversion loses nothing ([3.1](03-01-sampling-nyquist-shannon.md)) — but a sequence stands on its own, and treating it that way is what makes the discrete surprises below stop being surprises.

Second idea: we manipulate a signal in exactly two independent places — its **amplitude** (scale it, add signals) and its **independent variable** (slide it, flip it, stretch it). Amplitude operations are boring. Independent-variable operations are where every sign error in signal processing comes from, so we do them carefully.

## The formal version

### Transformations of the independent variable

Let $x(t)$ be a continuous-time signal. Three moves:

**Time shift.** $y(t) = x(t - t_0)$, with $t_0$ a real constant (seconds).

*In words: for $t_0 > 0$ this is a **delay** — the signal happens $t_0$ seconds later, so the graph slides **right**.*

The sign feels backwards; here is the fix that makes it permanent. With $t_0 = 3$, what is $y$ doing at $t = 5$? It equals $x(2)$ — at time 5 it is replaying what $x$ did at time 2, so $y$ runs three seconds behind. Behind means later means right. (Discrete version: $y[n] = x[n - n_0]$, and $n_0$ must be an **integer** — you cannot delay a sequence by half a sample.)

**Time reversal.** $y(t) = x(-t)$. *In words: play the signal backwards; the graph mirrors about the vertical axis $t = 0$.*

**Time scaling.** $y(t) = x(at)$ with $a$ a real constant, $a \neq 0$.

*In words: $|a| > 1$ **compresses** the signal toward $t=0$ (it plays faster, in less time); $|a| < 1$ **stretches** it.*

Same one-number trick: with $a = 2$, $y(1) = x(2)$ — $y$ has already reached at $t=1$ what $x$ only reached at $t=2$, so it's ahead of schedule, i.e. sped up, i.e. squeezed.

### The order of operations for $x(at + b)$

The general transformation combines all three. Write it two equivalent ways:

$$y(t) = x(at + b) = x\!\left(a\left(t + \tfrac{b}{a}\right)\right).$$

Both readings give correct recipes, and you must pick one and follow it exactly:

- **Shift first, then scale.** Let $v(t) = x(t + b)$ (shift by $b$). Then $y(t) = v(at)$ (scale by $a$).
- **Scale first, then shift.** Let $w(t) = x(at)$ (scale by $a$). Then $y(t) = w\!\left(t + \tfrac{b}{a}\right)$ — shift by $b/a$, **not** by $b$.

*In words: whichever operation you do second must use the amount that survives the first one.* Shifting after a scale requires dividing the shift by $a$, because the scale already compressed the time axis underneath it. "Scale by $a$, then shift by $b$" is the single most common error in this topic; Example 1 runs both correct routes to the same answer.

### Even and odd parts

A signal is **even** if $x(-t) = x(t)$ (mirror-symmetric, like $\cos$) and **odd** if $x(-t) = -x(t)$ (anti-symmetric, like $\sin$; note an odd signal must have $x(0)=0$). Almost no signal is either — but *every* signal splits uniquely into one of each:

$$\boxed{\;x(t) = \mathrm{Ev}\{x(t)\} + \mathrm{Od}\{x(t)\},\qquad \mathrm{Ev}\{x(t)\} = \frac{x(t) + x(-t)}{2},\qquad \mathrm{Od}\{x(t)\} = \frac{x(t) - x(-t)}{2}.\;}$$

*In words: average the signal with its own mirror image to get the even part; take half the difference to get the odd part.* Adding the two recovers $x(t)$ on sight, and swapping $t \to -t$ confirms the first piece is even and the second odd. The same formulas hold verbatim for $x[n]$ with $-n$ in place of $-t$. This is the split that later sends a real signal's Fourier transform into a real even part and an imaginary odd part ([2.3](02-03-continuous-time-fourier-transform.md)) — the same cosine/sine split from [`fourier-analysis` 1.1](../../fourier-analysis/lessons/01-01-periodic-functions-fourier-coefficients.md).

### Periodicity — and the discrete-time surprise

**Continuous time.** $x(t)$ is periodic if there exists $T > 0$ with $x(t + T) = x(t)$ for all $t$. The smallest such $T$ is the **fundamental period** $T_0$. The workhorse case:

$$x(t) = \cos(\omega t) \;\text{ is periodic for } \textbf{every}\ \omega > 0, \quad\text{with}\quad T_0 = \frac{2\pi}{\omega}.$$

*In words: pick any frequency you like, however ugly — the continuous sinusoid repeats.* Nothing constrains $T_0$ to be a nice number, because $t$ ranges over all reals and $2\pi/\omega$ is always an available real.

**Discrete time.** $x[n]$ is periodic if there is a **positive integer** $N$ with $x[n + N] = x[n]$ for all $n$. That word *integer* changes everything. Take $x[n] = \cos(\Omega n)$, where $\Omega$ is the discrete-time frequency in **radians per sample**. We need

$$\cos(\Omega(n+N)) = \cos(\Omega n + \Omega N) = \cos(\Omega n) \quad\Longleftrightarrow\quad \Omega N = 2\pi k \ \text{ for some integer } k,$$

that is, $\dfrac{\Omega}{2\pi} = \dfrac{k}{N}$. So:

$$\boxed{\;\cos(\Omega n)\ \text{is periodic} \iff \frac{\Omega}{2\pi}\ \text{is \textbf{rational}},\ \text{and then}\ N_0 = \text{denominator of}\ \frac{\Omega}{2\pi}\ \text{in lowest terms}.\;}$$

*In words: a discrete sinusoid repeats only if its frequency is a rational fraction of a full turn per sample — otherwise the samples never land on the same phase twice and the sequence never repeats, ever.* The values stay bounded and the stem plot looks perfectly sinusoidal, but the list of numbers is genuinely non-repeating; there is no continuous-time analogue of this failure. Note also that $N_0$ is *not* $2\pi/\Omega$ in general: for $\Omega = 3\pi/8$, $2\pi/\Omega = 16/3$, while the true period is the denominator $16$.

### Energy and power

Borrowing from a resistor dissipating $|v(t)|^2$ watts, define **total energy** and **average power**:

$$E_\infty = \int_{-\infty}^{\infty} |x(t)|^2\,dt, \qquad P_\infty = \lim_{T\to\infty} \frac{1}{2T}\int_{-T}^{T} |x(t)|^2\,dt,$$

$$E_\infty = \sum_{n=-\infty}^{\infty} |x[n]|^2, \qquad P_\infty = \lim_{N\to\infty} \frac{1}{2N+1}\sum_{n=-N}^{N} |x[n]|^2.$$

*In words: energy is the total accumulated squared size; power is that same quantity averaged over a window that grows to cover the whole time axis.* (Magnitude bars, because signals may be complex — see [1.2](01-02-elementary-signals.md).) Two clean classes:

- **Energy signal:** $E_\infty < \infty$, which forces $P_\infty = 0$ (a finite number divided by a growing window). Transients and pulses: they happen and are over.
- **Power signal:** $0 < P_\infty < \infty$, which forces $E_\infty = \infty$. Every periodic signal is one, and for those you can skip the limit and average over a single period: $P_\infty = \frac{1}{T_0}\int_{T_0} |x(t)|^2\,dt$.

*In words: a signal that stops has energy but no power; a signal that never stops has power but infinite energy.* The classes are exclusive but not exhaustive — an unbounded signal like $x(t) = t\,u(t)$ has both $E_\infty$ and $P_\infty$ infinite and is neither.

## Picture

![Left: a smooth continuous-time curve x(t) with a value marked at t = 4.5. Right: the same shape as a discrete-time stem plot x[n] with lollipop stems at integer indices, annotated that nothing exists between stems. Bottom: a triangular pulse shown shifted right by 3 (delay) and mirrored about t = 0 (reversal).](assets/01-01-fig1.svg)

The stem plot on the right is the visual idiom of every discrete-time picture in this course. A stem sits at each integer $n$; the space between stems is not "zero", it is *not part of the domain*.

## Worked examples

**Example 1 (mechanical — the order of operations, both routes).** Let $p(t)$ be the ramp pulse from the figure: $p(t) = t/2$ for $0 \le t \le 2$, and $p(t) = 0$ elsewhere. It rises from $0$ to $1$ over two seconds. Find $y(t) = p(3 - 2t)$.

Match to $x(at + b)$: here $a = -2$, $b = 3$.

*Route A — shift first, then scale.* Let $v(t) = p(t + 3)$: nonzero when $0 \le t + 3 \le 2$, i.e. $-3 \le t \le -1$, with $v(t) = (t+3)/2$. Now scale, $y(t) = v(-2t)$: nonzero when $-3 \le -2t \le -1$, i.e. $\tfrac12 \le t \le \tfrac32$, with value $y(t) = (-2t + 3)/2 = \tfrac32 - t$.

*Route B — scale first, then shift by $b/a$.* Let $w(t) = p(-2t)$: nonzero when $0 \le -2t \le 2$, i.e. $-1 \le t \le 0$, with $w(t) = (-2t)/2 = -t$. The remaining shift is $b/a = 3/(-2) = -\tfrac32$, so $y(t) = w\!\left(t - \tfrac32\right) = -\left(t - \tfrac32\right) = \tfrac32 - t$, nonzero when $-1 \le t - \tfrac32 \le 0$, i.e. $\tfrac12 \le t \le \tfrac32$.

Both routes agree: **$y(t) = \tfrac32 - t$ on $\tfrac12 \le t \le \tfrac32$, zero elsewhere.** Spot-check against the original expression: $y(1/2) = p(3-1) = p(2) = 1$ ✓ and $y(3/2) = p(0) = 0$ ✓. The result is reversed (it falls instead of rising, since $a < 0$) and compressed to width $1$ instead of $2$ (since $|a| = 2$).

*The wrong route,* for contrast: scale first, then shift by $b = 3$, and you get support $2 \le t \le 3$ — a pulse in the wrong place entirely.

**Example 2 (why you'd care — when does a digital tone repeat?).** Consider the two-tone sequence $x[n] = \cos\!\left(\tfrac{\pi n}{4}\right) + \cos\!\left(\tfrac{\pi n}{3}\right)$.

Check each term. First: $\Omega_1/2\pi = (\pi/4)/(2\pi) = 1/8$, rational, so $N_1 = 8$. Second: $\Omega_2/2\pi = (\pi/3)/(2\pi) = 1/6$, rational, so $N_2 = 6$. A common period must be a whole number of both, so the sum is periodic with

$$N_0 = \mathrm{lcm}(8, 6) = 24 \ \text{samples.}$$

Now change one frequency to $\Omega_2 = 1$ radian/sample. Then $\Omega_2/2\pi = 1/(2\pi)$ is **irrational**, $\cos(n)$ never repeats — and neither does the sum, no matter how long you record.

Why this bites: the DFT and FFT ([3.4](03-04-discrete-fourier-transform.md), [3.5](03-05-the-fft.md)) analyze a block of $N$ samples by implicitly assuming that block is one whole period repeated forever. If your tone's $\Omega/2\pi$ has no denominator dividing $N$, no block length is a whole period, the assumed repetition has a discontinuity at the seam, and the computed spectrum smears energy into neighboring frequencies — **spectral leakage**. Every windowing trick in practical spectrum analysis exists because of the rationality condition you just derived.

## Watch out

- **You might think $x(t - 3)$ shifts left** because of the minus sign, but it shifts **right**: at $t = 5$ it shows you $x(2)$, three seconds of old news. Test with one number instead of trusting the sign.
- **You might scale first and then shift by $b$** — but after scaling by $a$ the remaining shift is $b/a$. Either factor as $x(a(t + b/a))$, or shift by $b$ *before* you scale. Then verify one endpoint of the support against the original expression, as in Example 1.
- **You might assume a discrete sinusoid inherits periodicity from its continuous cousin.** It does not: $\cos(3t)$ is periodic with $T_0 = 2\pi/3$, while $\cos(3n)$ is not periodic at all — and even when it is, the period is the reduced denominator of $\Omega/2\pi$, not $2\pi/\Omega$. Relatedly, $\Omega$ matters only modulo $2\pi$, since $\cos((\Omega + 2\pi)n) = \cos(\Omega n + 2\pi n) = \cos(\Omega n)$; all distinct discrete frequencies fit in one interval of length $2\pi$, which is what drives [3.3](03-03-discrete-time-fourier-transform.md).
- **You might treat "energy signal" and "power signal" as a complete classification.** Exclusive, yes; exhaustive, no — a growing signal like $t\,u(t)$ is neither.

## One-liner

> A signal is a curve $x(t)$ or a list $x[n]$; you slide, flip, and squeeze its *input* (shift right for $t - t_0$, and if you scale before shifting, divide the shift by $a$), and you classify it by whether it repeats — which a discrete sinusoid does only when $\Omega/2\pi$ is rational — and by whether it stops (finite energy) or never does (finite power).

## Problems

**P1 (🟢)** A continuous-time signal $x(t)$ equals $1$ for $-1 \le t \le 3$ and $0$ everywhere else. For each of $x(t-2)$, $x(-t)$, and $x(2t)$, state the interval of $t$ on which it is nonzero, and name the transformation in one word.

**P2 (🟡)** Determine whether each of these discrete-time signals is periodic, and if so give the fundamental period $N_0$: (a) $x_1[n] = \cos\!\left(\tfrac{3\pi n}{8}\right)$; (b) $x_2[n] = \cos(3n)$. For contrast, is the continuous-time signal $\cos(3t)$ periodic, and with what fundamental period?

**P3 (🔴)** Classify each signal as an energy signal, a power signal, or neither, computing the finite quantity in each case: (a) $x(t) = e^{-2t}u(t)$, where $u(t)$ is the unit step (1 for $t \ge 0$, 0 for $t < 0$); (b) $x[n] = u[n]$, the discrete unit step (1 for $n \ge 0$, 0 for $n < 0$); (c) $x(t) = 3\cos(5t)$.

<details>
<summary>Solutions</summary>

**P1** The signal is nonzero exactly when its *argument* lies in $[-1, 3]$; solve that inequality in each case.

- $x(t-2)$: need $-1 \le t - 2 \le 3$, so $\boxed{1 \le t \le 5}$. This is a **shift** (a delay by 2, sliding right by 2). Width unchanged at 4. ✓
- $x(-t)$: need $-1 \le -t \le 3$. Multiplying by $-1$ flips both inequalities: $1 \ge t \ge -3$, i.e. $\boxed{-3 \le t \le 1}$. This is a **reversal**. Check: the original interval's endpoints $-1$ and $3$ map to $1$ and $-3$ — mirrored about $t=0$ ✓, width still 4 ✓.
- $x(2t)$: need $-1 \le 2t \le 3$, so $\boxed{-0.5 \le t \le 1.5}$. This is a **scaling** — a compression by a factor of 2, and indeed the width dropped from 4 to 2 ✓.

*Check.* Each answer keeps the pulse height at 1; only the independent variable was touched, so amplitude never changes.

**P2** Use the rule: $\cos(\Omega n)$ is periodic if and only if $\Omega/2\pi$ is rational, and then $N_0$ is that fraction's denominator in lowest terms.

**(a)** $\Omega = \dfrac{3\pi}{8}$, so

$$\frac{\Omega}{2\pi} = \frac{3\pi/8}{2\pi} = \frac{3}{16}.$$

This is rational and already in lowest terms ($\gcd(3,16) = 1$), so $x_1[n]$ **is periodic** with $\boxed{N_0 = 16}$.

*Verify directly:* $\Omega N_0 = \tfrac{3\pi}{8}\cdot 16 = 6\pi = 2\pi \cdot 3$, an exact whole number of turns ✓. And no smaller $N$ works, since $\tfrac{3\pi}{8}N = 2\pi k$ forces $3N = 16k$, and with $3$ and $16$ coprime, $N$ must be a multiple of $16$. Note that $2\pi/\Omega = 16/3 \approx 5.33$ is *not* the period — it isn't even an integer.

**(b)** $\Omega = 3$, so

$$\frac{\Omega}{2\pi} = \frac{3}{2\pi}.$$

Since $\pi$ is irrational, $3/(2\pi)$ is irrational, so there are no integers $N > 0$ and $k$ with $3N = 2\pi k$. Therefore $x_2[n]$ is **not periodic** — the samples never revisit the same phase, so the sequence of numbers never repeats even though it stays bounded in $[-1,1]$.

**Contrast:** $\cos(3t)$ in continuous time **is** periodic, with $T_0 = 2\pi/\omega = \boxed{2\pi/3 \approx 2.09}$. Nothing requires $T_0$ to be an integer, which is precisely why continuous sinusoids never fail this test and discrete ones frequently do.

**P3**

**(a)** $x(t) = e^{-2t}u(t)$ is zero for $t<0$, so

$$E_\infty = \int_{0}^{\infty} \left(e^{-2t}\right)^2 dt = \int_{0}^{\infty} e^{-4t}\,dt = \left[-\tfrac14 e^{-4t}\right]_0^{\infty} = 0 - \left(-\tfrac14\right) = \frac14.$$

Finite, so this is an **energy signal**, $E_\infty = 1/4$, and consequently $P_\infty = \lim_{T\to\infty} \frac{1/4}{2T} = 0$.

**(b)** $x[n] = u[n]$: the energy is $E_\infty = \sum_{n=0}^{\infty} 1^2 = \infty$, so it is not an energy signal. For the power, the window $-N \le n \le N$ contains the indices $0, 1, \dots, N$ — that's $N+1$ ones:

$$P_\infty = \lim_{N\to\infty} \frac{1}{2N+1}\sum_{n=-N}^{N} |u[n]|^2 = \lim_{N\to\infty} \frac{N+1}{2N+1} = \frac12.$$

Finite and nonzero, so it is a **power signal** with $P_\infty = 1/2$. *Sanity check:* the step is "on" for half of the (symmetric) time axis and has squared value 1 there, so an average of $1/2$ is exactly right — and note it is a power signal without being periodic.

**(c)** $x(t) = 3\cos(5t)$ is periodic with $T_0 = 2\pi/5$, so $E_\infty = \infty$ and we may average over one period. Using $\cos^2\theta = \tfrac12(1 + \cos 2\theta)$, whose second term integrates to zero over a whole number of periods:

$$P_\infty = \frac{1}{T_0}\int_0^{T_0} 9\cos^2(5t)\,dt = 9 \cdot \frac{1}{2} = \frac92 = 4.5.$$

A **power signal** with $P_\infty = 4.5$. *Sanity check:* this is the familiar "mean square of a sinusoid is amplitude-squared over two" — i.e. RMS $= 3/\sqrt2 \approx 2.12$ — the same rule behind RMS voltages in [`circuits` 4.1](../../circuits/lessons/04-01-sinusoids-and-phasors.md). ✓

</details>

## Connections

- **Backward:** the sinusoid you're classifying here is the undamped solution from [`ode-refresher` 2.2](../../ode-refresher/lessons/02-02-oscillations-damping.md), and the even/odd split is the cosine/sine split that organizes Fourier coefficients in [`fourier-analysis` 1.1](../../fourier-analysis/lessons/01-01-periodic-functions-fourier-coefficients.md). Energy $\int|x|^2$ is the squared $L^2$ norm from [`fourier-analysis` 1.4](../../fourier-analysis/lessons/01-04-mean-square-parseval.md) — Parseval will later let you compute it in the frequency domain instead.
- **Forward:** [1.2](01-02-elementary-signals.md) builds the standard kit (step, impulse, complex exponential) out of exactly these transformations, and [1.4](01-04-convolution-continuous-time.md) makes flip-and-shift the computational core of convolution. The energy/power split becomes the dividing line between Fourier transforms (energy signals) and Fourier series (power signals) in Module 2; the rationality condition on $\Omega$ returns in [3.3](03-03-discrete-time-fourier-transform.md) and [3.4](03-04-discrete-fourier-transform.md).
- **Sideways (circuits):** the energy integral is literally what a signal would dissipate in a 1-ohm resistor, which is why "power signal" and RMS voltage ([`circuits` 4.1](../../circuits/lessons/04-01-sinusoids-and-phasors.md)) are the same idea. The full map of where this leads is in the [syllabus](../syllabus.md).

# Signals & Systems · Lesson 2.1: Eigenfunctions and the frequency response

> ⏱ ~15 min · Module 2: Frequency-domain analysis — Fourier and Laplace · Builds on: [1.3 Systems and their properties](01-03-systems-and-properties.md), [1.4 Convolution in continuous time](01-04-convolution-continuous-time.md), [`linalg-refresher` 3.1](../../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) · Unlocks: [2.2 Fourier series](02-02-fourier-series-periodic-signals.md), [2.3 The Fourier transform](02-03-continuous-time-fourier-transform.md), [2.4 Laplace](02-04-laplace-transform-roc.md)

## Why this matters

Module 1 ended with a complete but exhausting answer: an LTI system is its impulse response, and the output is $y = x*h$ — an integral you grind out by flipping, shifting, multiplying, and integrating, once for every value of $t$. Correct, and nobody does it that way.

This lesson is the hinge of the course. It finds the *one family of inputs* for which an LTI system does something almost embarrassingly simple — it multiplies by a number and hands the signal back unchanged in shape. Once you know that, the whole strategy of engineering signals falls out: **write your input as a sum of those special signals, and convolution collapses into multiplication.** Fourier series, the Fourier transform, Laplace, and the z-transform are all just four ways of performing that decomposition. Everything in Modules 2–4 is downstream of the two lines of algebra below.

## The idea

You've met this pattern before, in linear algebra. A matrix $A$ generally mangles a vector — rotates it, stretches it, tilts it somewhere new. But a few special vectors, the **eigenvectors**, come out pointing the *same direction*, merely scaled: $A\mathbf v = \lambda \mathbf v$. Those are the directions in which the complicated operator $A$ acts like a single number. And in [`linalg-refresher` 3.1](../../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) you saw the payoff: expand any vector in the eigenbasis, and applying $A$ becomes "multiply each coordinate by its own $\lambda$" instead of a matrix product.

An LTI system is also a linear operator — it just eats functions instead of arrows. So ask the same question: *is there an input shape that comes out unchanged, only scaled?*

There is, and it's the complex exponential $e^{st}$. The reason is almost a trick of arithmetic: shifting an exponential in time doesn't reshape it, it only *rescales* it, because $e^{s(t-\tau)} = e^{-s\tau}e^{st}$. And convolution does nothing to its input but shift, scale, and add up copies. Feed a shape that survives shifting-and-scaling into a machine that only shifts and scales, and the shape comes out intact. Every other signal gets smeared; the exponential just gets multiplied.

The number it gets multiplied by depends on the system *and* on which exponential you sent in. Call it $H(s)$. That single complex number is the entire answer to "what does this system do at this frequency?"

## The formal version

### The eigenfunction property

Take an LTI system with impulse response $h(t)$ and feed it the everlasting complex exponential $x(t) = e^{st}$, where $s$ is a complex number (in general $s = \sigma + j\omega$, with $\sigma$ a growth/decay rate in $\mathrm{s^{-1}}$ and $\omega$ an angular frequency in rad/s; $j = \sqrt{-1}$ in the engineering convention). Run it through the convolution integral from [1.4](01-04-convolution-continuous-time.md):

$$y(t) = \int_{-\infty}^{\infty} h(\tau)\,x(t-\tau)\,d\tau = \int_{-\infty}^{\infty} h(\tau)\,e^{s(t-\tau)}\,d\tau.$$

Split the exponential, $e^{s(t-\tau)} = e^{st}e^{-s\tau}$. The factor $e^{st}$ carries no $\tau$, so it is a constant as far as the integral is concerned and comes straight out:

$$y(t) = e^{st}\underbrace{\int_{-\infty}^{\infty} h(\tau)\,e^{-s\tau}\,d\tau}_{\textstyle \equiv\, H(s)} \qquad\Longrightarrow\qquad \boxed{\,e^{st} \;\longmapsto\; H(s)\,e^{st}\,}$$

*In words: an everlasting complex exponential goes into an LTI system and the very same exponential comes out, multiplied by one complex number.* No new frequencies, no change of shape — only a rescale. That is precisely the definition of an **eigenfunction**, with **eigenvalue** $H(s)$. The dictionary with linear algebra is exact:

| Linear algebra | LTI systems |
|---|---|
| matrix $A$ | the system (convolution with $h$) |
| eigenvector $\mathbf v$ | complex exponential $e^{st}$ |
| eigenvalue $\lambda$ | transfer function value $H(s)$ |
| $A\mathbf v = \lambda\mathbf v$ | $e^{st} \mapsto H(s)e^{st}$ |
| expand $\mathbf x$ in the eigenbasis | expand $x(t)$ in exponentials (Fourier / Laplace) |

One difference worth naming: a matrix has finitely many eigenvalues, but here $s$ ranges over a continuum, so an LTI system has a whole *function* of eigenvalues, $H(s)$. That function is the system's **transfer function**, and it is the subject of [2.5](02-05-transfer-functions-poles-zeros.md).

**Why this is the whole game.** Convolution is hard; multiplication is easy. The eigenfunction property converts the first into the second — *provided you can write your input as a combination of exponentials.* By linearity, if $x(t) = \sum_k a_k e^{s_k t}$ then

$$y(t) = \sum_k a_k H(s_k)\, e^{s_k t}.$$

Each component is scaled by its own eigenvalue and re-summed. Producing that decomposition for an arbitrary signal is exactly what Fourier series ([2.2](02-02-fourier-series-periodic-signals.md)), the Fourier transform ([2.3](02-03-continuous-time-fourier-transform.md)) and Laplace ([2.4](02-04-laplace-transform-roc.md)) do. The rest of this module is machinery for one idea you already have.

### The frequency response

Now specialize to $s = j\omega$ — pure oscillation, no growth or decay ($\sigma = 0$). The eigenvalue becomes the **frequency response**:

$$\boxed{\,H(j\omega) = \int_{-\infty}^{\infty} h(t)\,e^{-j\omega t}\,dt\,}$$

*In words: the frequency response is the Fourier transform of the impulse response* — and by the boxed result above, it is the complex gain the system applies to the frequency $\omega$. (The integral needs to converge; it does whenever $h$ is absolutely integrable, $\int|h|\,dt < \infty$, which by [1.3](01-03-systems-and-properties.md) is exactly BIBO stability. Unstable systems still have a transfer function $H(s)$, just not on the $j\omega$ axis — that is the region-of-convergence story in [2.4](02-04-laplace-transform-roc.md).)

Being complex, $H(j\omega)$ carries two real pieces of information at each frequency:

- **Magnitude response** $|H(j\omega)|$ — the **gain**: how much a sinusoid of frequency $\omega$ is amplified ($>1$) or attenuated ($<1$). Dimensionless (output units per input units).
- **Phase response** $\angle H(j\omega)$ — the **phase shift** in radians: how far the output sinusoid is displaced in time. A shift of $\angle H$ radians at frequency $\omega$ is a time shift of $\angle H/\omega$ seconds; a *negative* phase means the output lags, i.e. is delayed.

### Real sinusoid in, real sinusoid out

The eigenfunction result is about complex exponentials, but you drive real systems with real cosines. The bridge is one symmetry. If $h(t)$ is **real** (every physical system's is), then conjugating the defining integral gives

$$H(j\omega)^* = \int h(t)\,\big(e^{-j\omega t}\big)^{*} dt = \int h(t)\,e^{+j\omega t}\,dt = H(-j\omega),$$

so $H(-j\omega) = H(j\omega)^*$ — **conjugate symmetry**. *In words: negative frequencies carry no new information for a real system; they mirror the positive ones.* (Consequently $|H|$ is even in $\omega$ and $\angle H$ is odd.)

Now write the cosine as two exponentials, $\cos\omega t = \tfrac12\big(e^{j\omega t} + e^{-j\omega t}\big)$, and apply the eigenfunction property to each half plus linearity:

$$y(t) = \tfrac12 H(j\omega)e^{j\omega t} + \tfrac12 H(-j\omega)e^{-j\omega t} = \tfrac12 H(j\omega)e^{j\omega t} + \tfrac12\big(H(j\omega)e^{j\omega t}\big)^{*} = \mathrm{Re}\big\{H(j\omega)e^{j\omega t}\big\},$$

using $z + z^* = 2\,\mathrm{Re}\{z\}$. Writing the complex number in polar form, $H(j\omega) = |H(j\omega)|\,e^{j\angle H(j\omega)}$:

$$\boxed{\,\cos(\omega t) \;\longmapsto\; |H(j\omega)|\,\cos\!\big(\omega t + \angle H(j\omega)\big)\,}$$

*In words: a sinusoid in gives a sinusoid out at exactly the same frequency — only its amplitude and its timing change.* This is the single most useful fact in the subject, and note what it forbids: an LTI system can never create a frequency that wasn't in the input. Hear a new tone and you are looking at a nonlinear or time-varying system (distortion, modulation — see [4.5](04-05-modulation.md)).

### Filtering is just choosing a curve

Since each frequency is independently scaled by $|H(j\omega)|$, designing a system *is* designing that curve. Want to kill hiss? Make $|H|$ small where the hiss lives. Want bass? Make $|H|$ large at low $\omega$. A **filter** is nothing more mysterious than a chosen magnitude response — low-pass, high-pass, band-pass are names for the shape. [4.4](04-04-filter-design-basics.md) makes this a design procedure, including why the perfect brick wall is unbuildable.

### The discrete twin

Everything above has a discrete-time mirror. Feed $x[n] = z^n$ into the convolution sum from [1.5](01-05-convolution-discrete-time.md):

$$y[n] = \sum_{k=-\infty}^{\infty} h[k]\,z^{\,n-k} = z^n \sum_{k=-\infty}^{\infty} h[k]\,z^{-k} = H(z)\,z^n.$$

Same one-line argument, same conclusion: $z^n$ is the eigenfunction, $H(z)$ the eigenvalue. Setting $z = e^{j\Omega}$ (on the unit circle, $\Omega$ in radians/sample) gives the discrete frequency response. Full treatment in [4.1](04-01-z-transform-and-roc.md).

## Picture

![Left: the RC low-pass magnitude response on a log frequency axis, flat near 1 in the passband, rolling off past the cutoff at omega = 1/RC where the gain is 0.707. Right: an input cosine entering an LTI block and emerging as a cosine of the same frequency with smaller amplitude and a rightward time shift](assets/02-01-fig1.svg)

## Worked examples

**Example 1 — the RC low-pass filter.** Take the first-order RC circuit from [`circuits` 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md), output taken across the capacitor. Its impulse response is

$$h(t) = \frac{1}{RC}e^{-t/RC}u(t),$$

where $R$ is resistance (ohms), $C$ capacitance (farads), the product $RC$ is the time constant $\tau$ (seconds), and $u(t)$ is the unit step. Apply the definition, using $u(t)$ to cut the lower limit to $0$:

$$H(j\omega) = \int_{0}^{\infty} \frac{1}{RC}e^{-t/RC}e^{-j\omega t}\,dt = \frac{1}{RC}\int_0^\infty e^{-\left(\frac{1}{RC}+j\omega\right)t}\,dt = \frac{1}{RC}\cdot\frac{1}{\frac{1}{RC}+j\omega}.$$

(The antiderivative evaluates cleanly because $e^{-(1/RC + j\omega)t} \to 0$ as $t\to\infty$: the real part $-t/RC$ drives it to zero while the oscillating part stays bounded.) Multiply top and bottom by $RC$:

$$H(j\omega) = \frac{1}{1 + j\omega RC}, \qquad |H(j\omega)| = \frac{1}{\sqrt{1+(\omega RC)^2}}, \qquad \angle H(j\omega) = -\arctan(\omega RC).$$

Read it off. At $\omega = 0$ (DC): $|H| = 1$, no phase shift — a slow signal passes untouched. As $\omega \to \infty$: $|H| \to 0$, phase $\to -90^\circ$ — fast wiggles are crushed. It is a **low-pass filter**, and the capacitor's physical story ("it needs time to charge, so it can't follow fast changes") is now a curve.

The crossover is at $\omega_c = 1/RC$, where $\omega RC = 1$ and

$$|H(j\omega_c)| = \frac{1}{\sqrt{1+1}} = \frac{1}{\sqrt2} \approx 0.707, \qquad 20\log_{10}\!\left(\tfrac{1}{\sqrt2}\right) = -3.01\ \mathrm{dB},$$

the famous **$-3$ dB cutoff**. It is also the *half-power* point, since power goes as amplitude squared and $|H|^2 = 1/2$ exactly. Phase there is $-\arctan 1 = -45^\circ$.

**Example 2 — why you'd care: this is phasor analysis, derived.** In [`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md) you got the same answer a completely different way: treat the RC pair as a voltage divider with impedances $Z_R = R$ and $Z_C = 1/(j\omega C)$, and

$$H = \frac{Z_C}{Z_R + Z_C} = \frac{1/(j\omega C)}{R + 1/(j\omega C)} = \frac{1}{1+j\omega RC}.$$

Identical. That is not a coincidence, and it retroactively explains *why* phasors work at all. Phasor analysis is the eigenfunction property in disguise: it assumes the steady-state response to $e^{j\omega t}$ is $H(j\omega)e^{j\omega t}$, which lets $d/dt \to j\omega$ and turns differential equations into algebra. Circuits taught you the recipe for one class of systems; this lesson shows the recipe holds for *every* LTI system — mechanical, thermal, financial, digital — because it never used anything but linearity and time-invariance.

## Watch out

- **You might think any sinusoid is an eigenfunction.** It isn't — $\cos\omega t$ generally comes out phase-shifted, so it is not "the same function scaled by a real number." Only the *complex* exponential $e^{st}$ is a true eigenfunction. Complex exponentials are what make the phase shift a scale factor: multiplying by $|H|e^{j\angle H}$ shrinks and rotates in one stroke. That is why engineers work in complex signals and take the real part at the very end.
- **You might read $H(j\omega)$ as a transient answer.** It isn't. The derivation used $e^{st}$ running from $t = -\infty$ — an *everlasting* exponential, no switch-on. So $H(j\omega)$ gives the **steady-state** response. Apply a cosine starting at $t = 0$ and you also get a transient from the system's own modes, which decays away (for a stable system) leaving exactly the boxed answer. Transients are what Laplace handles, in [2.6](02-06-solving-systems-with-laplace.md).
- **You might confuse phase shift with time delay.** They differ by a factor of $\omega$: a phase of $\angle H$ radians corresponds to $\angle H/\omega$ seconds. A constant phase shift means *different* delays for different frequencies (waveform distortion); a phase that is *linear* in $\omega$, $\angle H = -\omega T$, is what delays every frequency by the same $T$ and preserves the shape. See P2.

## One-liner

> Complex exponentials are the eigenvectors of every LTI system — $e^{st}$ goes in, $H(s)e^{st}$ comes out — so decomposing a signal into exponentials turns the convolution integral into ordinary multiplication by the frequency response.

## Problems

**P1 (🟢)** An RC low-pass filter has $R = 1\ \mathrm{k\Omega}$ and $C = 1\ \mathrm{\mu F}$.
(a) Find the cutoff $\omega_c$ in rad/s and $f_c$ in Hz.
(b) The input is $x(t) = \cos(1000\,t)$. Write the steady-state output.
(c) The input is $x(t) = \cos(3000\,t)$. Give the output amplitude, its value in dB, and the phase shift in degrees.

**P2 (🟡)** A pure delay system is defined by $y(t) = x(t - T)$ with $T > 0$ a fixed delay in seconds.
(a) Use the eigenfunction property directly (feed in $e^{j\omega t}$) to find $H(j\omega)$.
(b) Give $|H(j\omega)|$ and $\angle H(j\omega)$, and say what kind of filter this is.
(c) For $T = 2\ \mathrm{ms}$ and $\omega = 500$ rad/s, what is the phase shift in degrees?

**P3 (🔴)** A system has impulse response $h(t) = \delta(t) - \dfrac{1}{RC}e^{-t/RC}u(t)$ (the RC filter's output *subtracted* from the input).
(a) Find $H(j\omega)$. You may use $\int \delta(t)e^{-j\omega t}dt = 1$ from the sifting property in [1.2](01-02-elementary-signals.md).
(b) Find $|H(j\omega)|$, evaluate it at $\omega = 0$ and $\omega\to\infty$, and classify the filter.
(c) At what frequency is $|H| = 1/2$?

<details>
<summary>Solutions</summary>

**P1** The time constant is $RC = (10^{3}\ \Omega)(10^{-6}\ \mathrm{F}) = 10^{-3}$ s.

(a) $\displaystyle \omega_c = \frac{1}{RC} = 1000\ \mathrm{rad/s}$, and $\displaystyle f_c = \frac{\omega_c}{2\pi} = \frac{1000}{2\pi} \approx 159.2\ \mathrm{Hz}$.

(b) Here $\omega = 1000$, so $\omega RC = 1000 \times 10^{-3} = 1$ — the input sits exactly at cutoff.

$$|H| = \frac{1}{\sqrt{1+1^2}} = \frac{1}{\sqrt2} \approx 0.707, \qquad \angle H = -\arctan(1) = -45^\circ = -\frac{\pi}{4}\ \mathrm{rad}.$$

By the boxed sinusoid rule,

$$y(t) = 0.707\cos\!\left(1000\,t - \frac{\pi}{4}\right).$$

(c) Now $\omega RC = 3000 \times 10^{-3} = 3$:

$$|H| = \frac{1}{\sqrt{1+9}} = \frac{1}{\sqrt{10}} \approx 0.3162, \qquad 20\log_{10}\!\left(\tfrac{1}{\sqrt{10}}\right) = -20\log_{10}\!\big(10^{1/2}\big) = -10.00\ \mathrm{dB},$$

$$\angle H = -\arctan(3) \approx -71.57^\circ.$$

*Check.* Three times the cutoff frequency should be well into the rolloff, and $-10$ dB is indeed below the $-3$ dB cutoff value; the phase has moved from $-45^\circ$ toward its $-90^\circ$ asymptote, as it must. ✓

**P2** (a) Feed the eigenfunction $x(t) = e^{j\omega t}$. By the definition of the system,

$$y(t) = x(t-T) = e^{j\omega (t-T)} = e^{-j\omega T}\,e^{j\omega t}.$$

The output *is* the input times a constant, confirming the eigenfunction property, and the constant is the eigenvalue:

$$H(j\omega) = e^{-j\omega T}.$$

(b) $|H(j\omega)| = |e^{-j\omega T}| = 1$ for every $\omega$ — every frequency passes with unchanged amplitude, so this is an **all-pass** filter. Its phase is $\angle H(j\omega) = -\omega T$: linear in $\omega$, with slope $-T$. This is the "linear phase" case from the Watch out: the time shift $\angle H/\omega = -T$ is the same at every frequency, which is exactly why a pure delay reproduces the waveform undistorted.

(c) $\angle H = -\omega T = -(500)(0.002) = -1$ rad $= -\dfrac{180^\circ}{\pi} \approx -57.30^\circ$.

*Check.* Sanity on (c): $\omega = 500$ rad/s means a period of $2\pi/500 \approx 12.57$ ms, and a 2 ms delay is $2/12.57 \approx 15.9\%$ of a cycle, i.e. $0.159 \times 360^\circ \approx 57.3^\circ$ of lag. ✓

**P3** (a) Frequency response is linear in $h$, so transform term by term. The impulse contributes $1$ by sifting, and the second term is exactly Example 1's response with a minus sign:

$$H(j\omega) = 1 - \frac{1}{1+j\omega RC} = \frac{(1+j\omega RC) - 1}{1+j\omega RC} = \frac{j\omega RC}{1+j\omega RC}.$$

(b) Magnitude of a quotient is the quotient of magnitudes, with $|j\omega RC| = \omega RC$ (taking $\omega \ge 0$):

$$|H(j\omega)| = \frac{\omega RC}{\sqrt{1+(\omega RC)^2}}.$$

At $\omega = 0$: $|H| = 0$ — DC is completely blocked. As $\omega\to\infty$: divide top and bottom by $\omega RC$ to get $|H| \to 1$ — high frequencies pass untouched. This is a **first-order high-pass filter**, the exact complement of Example 1. (At $\omega = 1/RC$ it too gives $1/\sqrt2$, so the two filters cross at the same $-3$ dB point. Note also $|H_{\mathrm{lp}}|^2 + |H_{\mathrm{hp}}|^2 = \frac{1 + (\omega RC)^2}{1+(\omega RC)^2} = 1$ at every frequency: the pair splits the input's power, never creating or destroying any.)

(c) Set $x = \omega RC$ and square both sides to avoid the root:

$$\frac{x^2}{1+x^2} = \frac14 \;\Longrightarrow\; 4x^2 = 1 + x^2 \;\Longrightarrow\; 3x^2 = 1 \;\Longrightarrow\; x = \frac{1}{\sqrt3}.$$

So $\omega = \dfrac{1}{\sqrt{3}\,RC} \approx \dfrac{0.577}{RC}$.

*Check.* Substitute back: $\dfrac{0.5774}{\sqrt{1+0.3333}} = \dfrac{0.5774}{1.1547} = 0.500$ ✓. And it lands *below* the cutoff $1/RC$, which is right — a high-pass filter's gain drops as you go down in frequency, so half-gain must occur before the $0.707$ point. ✓

</details>

## Flashback

**From Lesson 1.4 (Convolution in continuous time):** A continuous-time LTI system has impulse response $h(t) = e^{-3t}u(t)$. Compute its step response, $y(t) = u * h$, by the convolution integral. Then evaluate $H(j0)$ from this lesson's definition and check that the two agree in the limit $t \to \infty$.

<details>
<summary>Solution</summary>

Convolve, putting the flip-and-shift on the step so the exponential stays put:

$$y(t) = \int_{-\infty}^{\infty} h(\tau)\,u(t-\tau)\,d\tau = \int_{-\infty}^{\infty} e^{-3\tau}u(\tau)\,u(t-\tau)\,d\tau.$$

The two steps pin down the limits: $u(\tau)$ forces $\tau \ge 0$, and $u(t-\tau)$ forces $\tau \le t$. For $t < 0$ these overlap nowhere, so $y(t) = 0$. For $t \ge 0$,

$$y(t) = \int_0^t e^{-3\tau}\,d\tau = \left[\frac{e^{-3\tau}}{-3}\right]_0^t = \frac{1 - e^{-3t}}{3}.$$

So $y(t) = \tfrac13\big(1-e^{-3t}\big)u(t)$ — the running integral of the impulse response, as the step response always is.

Now the cross-check. The DC gain from this lesson is

$$H(j0) = \int_{-\infty}^{\infty} h(t)e^{-j\cdot 0\cdot t}\,dt = \int_0^\infty e^{-3t}\,dt = \frac13.$$

A unit step is a constant (frequency zero) once it has settled, so the eigenfunction rule predicts a steady output of $H(j0)\times 1 = 1/3$. And indeed $y(t) \to \tfrac13$ as $t\to\infty$, since $e^{-3t}\to 0$. ✓ The time-domain grind and the one-line frequency-domain answer agree — which is the whole argument for changing coordinates.

</details>

## Connections

- **Backward:** the derivation is nothing but the convolution integral of [1.4](01-04-convolution-continuous-time.md) plus the linearity and time-invariance defined in [1.3](01-03-systems-and-properties.md) — no new assumptions. The convergence condition on $H(j\omega)$ *is* the BIBO-stability test $\int|h|\,dt<\infty$ from that same lesson, and the complex exponential itself was built in [1.2](01-02-elementary-signals.md).
- **Forward:** the eigenfunction property is only useful once you can decompose an input into exponentials, which is exactly what [2.2](02-02-fourier-series-periodic-signals.md) does for periodic signals and [2.3](02-03-continuous-time-fourier-transform.md) for aperiodic ones. Letting $s$ leave the imaginary axis gives Laplace ([2.4](02-04-laplace-transform-roc.md)) and, through $H(s)$, the pole–zero picture of [2.5](02-05-transfer-functions-poles-zeros.md). Choosing the $|H(j\omega)|$ curve on purpose is filter design, [4.4](04-04-filter-design-basics.md).
- **Sideways (linear algebra):** $e^{st}\mapsto H(s)e^{st}$ is $A\mathbf v = \lambda\mathbf v$ with the matrix replaced by a system and the eigenbasis replaced by a continuum of exponentials — see [`linalg-refresher` 3.1](../../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md). Diagonalizing a matrix and Fourier-transforming a signal are the same maneuver: change to the basis where the operator is just multiplication.
- **Sideways (circuits):** Example 2 shows that impedance and phasor analysis ([`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md)) are the eigenfunction property applied to one family of systems — the substitution $d/dt \to j\omega$ is legal precisely because $e^{j\omega t}$ is an eigenfunction. The RC time constant of [`circuits` 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md) reappears here as the cutoff frequency $1/RC$: fast decay in time means wide bandwidth in frequency.

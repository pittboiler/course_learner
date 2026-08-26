# Signals & Systems · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is one theorem wearing five costumes: an LTI system is completely
described by its impulse response, so its action is convolution — and in every
transform domain convolution becomes multiplication. This card holds the four
transform tables (Fourier, Laplace, DTFT/DFT, z), the pole-and-zero reading
rules for both planes, the sampling and aliasing arithmetic, and the sign and
convention bookkeeping that is where the real mistakes happen.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $x(t)$ | a continuous-time signal — a function of a real variable | [1.1](lessons/01-01-signals-continuous-discrete.md) |
| $x[n]$ | a discrete-time signal — a *sequence*, indexed by integers. Square brackets always | [1.1](lessons/01-01-signals-continuous-discrete.md) |
| $x(t-t_0)$ | delay by $t_0>0$ — shifts the graph **right** | [1.1](lessons/01-01-signals-continuous-discrete.md) |
| $E$, $P$ | total energy $\int\lvert x\rvert^2dt$ and average power — a signal has finite one or the other, sometimes neither | [1.1](lessons/01-01-signals-continuous-discrete.md) |
| $\mathrm{Ev}\{x\}$, $\mathrm{Od}\{x\}$ | the even and odd parts, $\tfrac12[x(t)\pm x(-t)]$ | [1.1](lessons/01-01-signals-continuous-discrete.md) |
| $T_0$, $N_0$ | fundamental period, continuous and discrete. $N_0$ must be an **integer** | [1.1](lessons/01-01-signals-continuous-discrete.md) |
| $u(t)$, $u[n]$ | unit step — 0 before the origin, 1 after | [1.2](lessons/01-02-elementary-signals.md) |
| $\delta(t)$ | continuous impulse — a *distribution* of unit **area**, not unit height | [1.2](lessons/01-02-elementary-signals.md) |
| $\delta[n]$ | discrete impulse — an ordinary sequence, 1 at $n=0$, else 0. No subtlety | [1.2](lessons/01-02-elementary-signals.md) |
| $e^{st}$, $z^n$ | the complex exponentials — the eigenfunctions of every LTI system | [1.2](lessons/01-02-elementary-signals.md) |
| $j$ | $\sqrt{-1}$ — engineers write $j$ because $i$ is already current | [1.2](lessons/01-02-elementary-signals.md) |
| $T\{\cdot\}$ | a system, viewed as an operator mapping a whole signal to a whole signal | [1.3](lessons/01-03-systems-and-properties.md) |
| $h(t)$, $h[n]$ | **impulse response** — the system's answer to $\delta$. Knowing it is knowing everything | [1.4](lessons/01-04-convolution-continuous-time.md) |
| $x*h$ | convolution — integral in continuous time, sum in discrete | [1.4](lessons/01-04-convolution-continuous-time.md) |
| $s(t)$ | **step response**, $\int_{-\infty}^{t}h(\tau)d\tau$. Note the clash with the Laplace variable $s$ | [1.4](lessons/01-04-convolution-continuous-time.md) |
| $\tau$, $k$ | the dummy variable being integrated/summed over; $t$ or $n$ is *frozen* inside | [1.4](lessons/01-04-convolution-continuous-time.md) |
| $N+M-1$ | length of the convolution of an $N$- and an $M$-point sequence — use it as an answer check | [1.5](lessons/01-05-convolution-discrete-time.md) |
| $H(s)$ | transfer function — the eigenvalue attached to $e^{st}$ | [2.1](lessons/02-01-eigenfunctions-frequency-response.md) |
| $H(j\omega)$ | **frequency response** — gain $\lvert H\rvert$ and phase $\angle H$ at each frequency | [2.1](lessons/02-01-eigenfunctions-frequency-response.md) |
| $\omega$, $f$ | angular frequency (rad/s) and ordinary frequency (Hz), $\omega=2\pi f$ | [2.1](lessons/02-01-eigenfunctions-frequency-response.md) |
| $\omega_0$, $a_k$ | fundamental frequency $2\pi/T$ of a periodic signal, and its $k$-th Fourier coefficient | [2.2](lessons/02-02-fourier-series-periodic-signals.md) |
| $X(j\omega)$ | the spectrum of an aperiodic signal — a *continuous* curve, not lines | [2.3](lessons/02-03-continuous-time-fourier-transform.md) |
| $\operatorname{sinc}\theta$ | **unnormalized** here: $\sin\theta/\theta$. Numerical libraries usually mean $\sin(\pi\theta)/(\pi\theta)$ | [2.3](lessons/02-03-continuous-time-fourier-transform.md) |
| $s=\sigma+j\omega$ | the Laplace variable; $\sigma$ is the convergence knob, $\omega$ the frequency axis | [2.4](lessons/02-04-laplace-transform-roc.md) |
| ROC | **region of convergence** — the half-plane or strip where the transform integral converges. Half of the transform | [2.4](lessons/02-04-laplace-transform-roc.md) |
| $\times$, $\circ$ | pole and zero, on a pole–zero plot | [2.5](lessons/02-05-transfer-functions-poles-zeros.md) |
| $\zeta$, $\omega_n$, $\omega_d$ | damping ratio, natural frequency, damped (actual ringing) frequency | [2.5](lessons/02-05-transfer-functions-poles-zeros.md) |
| $G(s)$ | the feedback-path transfer function; the closed loop is $H/(1+GH)$ | [2.6](lessons/02-06-solving-systems-with-laplace.md) |
| $0^-$, $0^+$ | just before and just after $t=0$; transform rules want $0^-$ | [2.6](lessons/02-06-solving-systems-with-laplace.md) |
| $T$, $\omega_s$, $f_s$ | sampling period and sampling frequency, $\omega_s=2\pi/T$, $f_s=1/T$ | [3.1](lessons/03-01-sampling-nyquist-shannon.md) |
| $\omega_M$ | the highest frequency present in a band-limited signal | [3.1](lessons/03-01-sampling-nyquist-shannon.md) |
| $f_{\text{apparent}}$ | the impostor frequency an undersampled tone masquerades as | [3.2](lessons/03-02-aliasing-and-reconstruction.md) |
| ZOH | zero-order hold — the staircase a real DAC produces | [3.2](lessons/03-02-aliasing-and-reconstruction.md) |
| $\Omega$ | discrete frequency, in radians **per sample**. $\Omega=\omega T=2\pi f/f_s$ | [3.3](lessons/03-03-discrete-time-fourier-transform.md) |
| $X(e^{j\Omega})$ | the DTFT — written this way because it is the z-transform on the unit circle | [3.3](lessons/03-03-discrete-time-fourier-transform.md) |
| $X[k]$, $N$ | the $k$-th DFT bin of an $N$-point record. Bin $k$ means $kf_s/N$ hertz | [3.4](lessons/03-04-discrete-fourier-transform.md) |
| $W_N=e^{-j2\pi/N}$ | the twiddle factor — the $N$-th root of unity the DFT is built from | [3.4](lessons/03-04-discrete-fourier-transform.md) |
| $O(N\log N)$ | the FFT's cost, versus $O(N^2)$ for the direct DFT | [3.5](lessons/03-05-the-fft.md) |
| $z$, $X(z)$ | the z-transform variable and transform; $\lvert z\rvert$ is the magnitude knob | [4.1](lessons/04-01-z-transform-and-roc.md) |
| $z^{-1}$ | **one sample of delay** — the reason the exponent is negative | [4.1](lessons/04-01-z-transform-and-roc.md) |
| $H(z)$ | discrete transfer function; stability is read against the **unit circle** | [4.2](lessons/04-02-discrete-transfer-functions-z-plane.md) |
| $a_k$, $b_m$ | feedback (denominator) and feed-forward (numerator) coefficients of a difference equation | [4.3](lessons/04-03-difference-equations-realizations.md) |
| FIR, IIR | finite / infinite impulse response — no feedback vs. feedback | [4.3](lessons/04-03-difference-equations-realizations.md) |
| dB | decibels: $20\log_{10}\lvert H\rvert$ for amplitude, $10\log_{10}$ for power | [4.4](lessons/04-04-filter-design-basics.md) |
| $\omega_c$ | cutoff frequency (filters) — and, in [4.5](lessons/04-05-modulation.md), the **carrier** frequency | [4.4](lessons/04-04-filter-design-basics.md) |
| $\alpha$ | the pole location in the one-pole smoother $y[n]=(1-\alpha)x[n]+\alpha y[n-1]$ | [4.4](lessons/04-04-filter-design-basics.md) |
| $W$, $B$ | message bandwidth and occupied transmission bandwidth ($B=2W$ for DSB) | [4.5](lessons/04-05-modulation.md) |

**Symbol collisions to keep straight.** $s$ is the Laplace variable but $s(t)$ is
the step response ([1.4](lessons/01-04-convolution-continuous-time.md)). $\omega_c$ is a
filter cutoff in [4.4](lessons/04-04-filter-design-basics.md) and a carrier in
[4.5](lessons/04-05-modulation.md). $a_k$ is a Fourier *coefficient* in
[2.2](lessons/02-02-fourier-series-periodic-signals.md) but a difference-equation
*feedback tap* in [4.3](lessons/04-03-difference-equations-realizations.md). And $M$ is a
bandwidth subscript in [3.1](lessons/03-01-sampling-nyquist-shannon.md) but a
feed-forward order in [4.3](lessons/04-03-difference-equations-realizations.md).

## Definitions

### Linearity

Scaling and adding the inputs does the same to the outputs — superposition.

$$T\{a_1x_1+a_2x_2\} = a_1T\{x_1\}+a_2T\{x_2\}$$

Test it by computing both sides and comparing. A quick necessary check: zero in
must give zero out, which is why $y=2x+3$ is *affine*, not linear.

*Introduced:* [1.3](lessons/01-03-systems-and-properties.md)

### Time invariance

Delaying the input just delays the output — the box doesn't change with time.

$$T\{x(t-t_0)\} = y(t-t_0) \quad \text{for every } x, t_0$$

Proved by the commuting test: delay-then-system must equal system-then-delay.

*Introduced:* [1.3](lessons/01-03-systems-and-properties.md)

### Causality

The output now depends only on the input now and earlier — no peeking ahead.
Equivalent to $h(t)=0$ for $t<0$ (or $h[n]=0$ for $n<0$).

*Introduced:* [1.3](lessons/01-03-systems-and-properties.md)

### BIBO stability

Every bounded input produces a bounded output. For an LTI system this is exactly
an absolute-area condition on the impulse response:

$$\int_{-\infty}^{\infty}\lvert h(t)\rvert\,dt<\infty \qquad\text{or}\qquad \sum_{n}\lvert h[n]\rvert<\infty$$

Decay of $h$ is **not** enough — $1/(t+1)$ decays and still diverges.

*Introduced:* [1.3](lessons/01-03-systems-and-properties.md), sharpened in [1.4](lessons/01-04-convolution-continuous-time.md) and [1.5](lessons/01-05-convolution-discrete-time.md)

### LTI system

Linear **and** time-invariant. This pair is what buys the whole course: it makes
the impulse response a complete description.

*Introduced:* [1.3](lessons/01-03-systems-and-properties.md)

### Impulse response

What comes out when you hit the system with $\delta$. For an LTI system it
determines the response to every other input.

*Introduced:* [1.4](lessons/01-04-convolution-continuous-time.md)

### Convolution

Flip one signal, slide it across the other, multiply, and accumulate the overlap.

$$y(t)=\int_{-\infty}^{\infty}x(\tau)h(t-\tau)\,d\tau \qquad y[n]=\sum_{k=-\infty}^{\infty}x[k]h[n-k]$$

In discrete time it is literally long multiplication without carries.

*Introduced:* [1.4](lessons/01-04-convolution-continuous-time.md), [1.5](lessons/01-05-convolution-discrete-time.md)

### Eigenfunction property

Feed an LTI system a complex exponential and the *same* exponential comes back
out, merely scaled by a complex number. Exponentials are to systems what
eigenvectors are to matrices.

$$e^{st}\;\longrightarrow\;H(s)\,e^{st}, \qquad H(s)=\int_{-\infty}^{\infty}h(\tau)e^{-s\tau}d\tau$$

*Introduced:* [2.1](lessons/02-01-eigenfunctions-frequency-response.md)

### Frequency response

$H(j\omega)$ — how much the system scales, and how far it shifts, a sinusoid of
each frequency. A real sinusoid in gives a sinusoid out **at the same frequency**:

$$\cos(\omega t)\;\longrightarrow\;\lvert H(j\omega)\rvert\cos\!\big(\omega t+\angle H(j\omega)\big)$$

This is the *steady-state* answer — it assumes an everlasting input, no switch-on.

*Introduced:* [2.1](lessons/02-01-eigenfunctions-frequency-response.md)

### Region of convergence (ROC)

The set of $s$ (or $z$) where the transform sum/integral actually converges. The
transform is the **pair** $(X, \text{ROC})$ — the formula alone is ambiguous,
because two different signals share it.

*Introduced:* [2.4](lessons/02-04-laplace-transform-roc.md), discrete version [4.1](lessons/04-01-z-transform-and-roc.md)

### Transfer function

$H(s)=Y(s)/X(s)$, the Laplace transform of $h$. For a system described by a
constant-coefficient ODE it is a ratio of polynomials, and its roots tell you
everything.

*Introduced:* [2.5](lessons/02-05-transfer-functions-poles-zeros.md)

### Poles and zeros

Poles are the denominator's roots, zeros the numerator's. **Poles are the modes**
of the system: a pole at $s=\sigma+j\omega$ contributes $e^{\sigma t}\cos(\omega t+\phi)$
to $h(t)$, so the real part sets decay and the imaginary part sets ringing. Zeros
contribute no modes; they block frequencies.

*Introduced:* [2.5](lessons/02-05-transfer-functions-poles-zeros.md), discrete counterpart [4.2](lessons/04-02-discrete-transfer-functions-z-plane.md)

### Negative feedback

Wrap the output back to the input through $G$ and subtract. The closed loop is

$$\frac{Y}{X}=\frac{H}{1+GH}$$

High loop gain makes this $\approx 1/G$ — insensitive to a sloppy $H$ — and,
crucially, feedback **moves the poles**, which is the entire premise of control.

*Introduced:* [2.6](lessons/02-06-solving-systems-with-laplace.md)

### Sampling theorem (Nyquist–Shannon)

Sampling replicates the spectrum at every multiple of $\omega_s$. If the signal is
band-limited to $\lvert\omega\rvert<\omega_M$ and $\omega_s>2\omega_M$ (strict), the copies
don't overlap and a low-pass filter recovers the original **exactly** — not
approximately.

*Introduced:* [3.1](lessons/03-01-sampling-nyquist-shannon.md)

### Nyquist rate vs. Nyquist frequency

Two different things, routinely confused. The **Nyquist rate** $=2\omega_M$ is a
property of the *signal* — the minimum speed you must sample at. The **Nyquist
frequency** $=\omega_s/2$ is a property of your *sampler* — the highest frequency it
can represent.

*Introduced:* [3.1](lessons/03-01-sampling-nyquist-shannon.md)

### Aliasing

When the spectral copies overlap, two frequencies get added into the same
numbers and become permanently indistinguishable. It is not blur, it is
**relabeling** — and no later filter can undo it.

*Introduced:* [3.2](lessons/03-02-aliasing-and-reconstruction.md)

### Discrete-time Fourier transform (DTFT)

The spectrum of a sequence. Necessarily $2\pi$-periodic in $\Omega$, because
$e^{-j(\Omega+2\pi)n}=e^{-j\Omega n}$ for integer $n$ — the same replication as
sampling, seen from the discrete side. A discrete signal has a *continuous*
spectrum.

$$X(e^{j\Omega})=\sum_{n=-\infty}^{\infty}x[n]e^{-j\Omega n}$$

*Introduced:* [3.3](lessons/03-03-discrete-time-fourier-transform.md)

### Discrete Fourier transform (DFT)

The DTFT sampled at $N$ evenly spaced frequencies — finite in, finite out, so a
computer can actually hold it.

$$X[k]=\sum_{n=0}^{N-1}x[n]e^{-j2\pi kn/N},\qquad k=0,\dots,N-1$$

*Introduced:* [3.4](lessons/03-04-discrete-fourier-transform.md)

### Fast Fourier transform (FFT)

An **algorithm**, not a transform. It computes the DFT exactly, in
$O(N\log N)$ instead of $O(N^2)$, by splitting into even- and odd-indexed
subsequences and exploiting $W_N^{N/2}=-1$ so one twiddle multiply serves two
output bins.

*Introduced:* [3.5](lessons/03-05-the-fft.md)

### z-transform

Laplace's discrete twin. The unit circle plays the role of the $j\omega$ axis; the
inside of the unit circle plays the role of the left half-plane.

$$X(z)=\sum_{n=-\infty}^{\infty}x[n]z^{-n}$$

*Introduced:* [4.1](lessons/04-01-z-transform-and-roc.md)

### FIR and IIR

**FIR** = all-zero, no feedback; $h[n]$ has finite length (it *is* the $b$
coefficients); always stable; can have exactly linear phase. **IIR** = has poles;
$h[n]$ runs forever; very cheap for a sharp response; can be unstable and cannot
have exactly linear phase.

*Introduced:* [4.3](lessons/04-03-difference-equations-realizations.md)

### Decibel and the $-3$ dB point

$20\log_{10}\lvert H\rvert$ for an amplitude ratio, $10\log_{10}$ for a power ratio.
The cutoff convention $\lvert H\rvert=1/\sqrt2\approx0.707$ is $-3$ dB, which is
**half power**, not half amplitude (that is $-6$ dB).

*Introduced:* [4.4](lessons/04-04-filter-design-basics.md)

### Amplitude modulation

Multiplying by a carrier picks the spectrum up and sets it down at $\pm\omega_c$
unchanged in shape — which is what lets many signals share one channel.

$$x(t)\cos(\omega_ct)\;\longleftrightarrow\;\tfrac12\big[X(j(\omega-\omega_c))+X(j(\omega+\omega_c))\big]$$

*Introduced:* [4.5](lessons/04-05-modulation.md)

## Formulas and rules

### Signal classification

| Question | Test |
|---|---|
| Energy or power signal? | $E=\int\lvert x\rvert^2dt$ finite $\Rightarrow$ energy; $P=\lim_{T\to\infty}\frac{1}{2T}\int_{-T}^{T}\lvert x\rvert^2dt$ finite and nonzero $\Rightarrow$ power. A signal can be neither |
| Is $x(at+b)$ right? | Factor as $x\big(a(t+b/a)\big)$, or shift **before** scaling. Then check one endpoint |
| Is $\cos(\Omega n)$ periodic? | Only if $\Omega/2\pi$ is **rational**. Then $N_0$ is the reduced denominator |
| Even/odd parts | $\mathrm{Ev}\{x\}=\tfrac12[x(t)+x(-t)]$, $\mathrm{Od}\{x\}=\tfrac12[x(t)-x(-t)]$ |

*From* [1.1](lessons/01-01-signals-continuous-discrete.md)

### The elementary signals

| Relation | Continuous | Discrete |
|---|---|---|
| Sifting | $\int x(t)\delta(t-t_0)dt=x(t_0)$ | $\sum_k x[k]\delta[n-k]=x[n]$ |
| Step from impulse | $u(t)=\int_{-\infty}^{t}\delta(\tau)d\tau$ | $u[n]=\sum_{k\le n}\delta[k]$ |
| Impulse from step | $\delta(t)=\dfrac{du}{dt}$ | $\delta[n]=u[n]-u[n-1]$ |
| Location | $\delta(t-t_0)$ spikes at $t=+t_0$ | $\delta[n-3]$ spikes at $n=+3$ |

*From* [1.2](lessons/01-02-elementary-signals.md)

### Convolution properties

| Property | Statement | What it buys |
|---|---|---|
| Commutative | $x*h=h*x$ | flip whichever signal is simpler |
| Associative | $(x*h_1)*h_2=x*(h_1*h_2)$ | a **cascade** has $h=h_1*h_2$ |
| Distributive | $x*(h_1+h_2)=x*h_1+x*h_2$ | a **parallel** connection adds impulse responses |
| Identity | $x*\delta=x$ | $\delta$ is the do-nothing system |
| Step response | $s(t)=\int_{-\infty}^{t}h(\tau)d\tau$, so $h=ds/dt$ | measure $s$, differentiate to get $h$ |
| Length | $N$-point $*$ $M$-point $=N+M-1$ points | an answer check that costs nothing |
| Area | $\int y=\big(\int x\big)\big(\int h\big)$ | another free check; discrete version at $z=1$ |

*From* [1.4](lessons/01-04-convolution-continuous-time.md), [1.5](lessons/01-05-convolution-discrete-time.md)

### Fourier series (periodic signals)

$$x(t)=\sum_{k=-\infty}^{\infty}a_ke^{jk\omega_0t},\qquad a_k=\frac{1}{T}\int_{T}x(t)e^{-jk\omega_0t}dt,\qquad \omega_0=\frac{2\pi}{T}$$

| Fact | Statement |
|---|---|
| Real signals | $a_{-k}=a_k^{*}$ — negative lines are redundant mirrors |
| Average power (Parseval) | $P=\frac{1}{T}\int_T\lvert x\rvert^2dt=\sum_k\lvert a_k\rvert^2$ |
| **Through an LTI system** | $b_k=a_kH(jk\omega_0)$ — multiply each harmonic by $H$ at *its own* frequency. No convolution |
| Square wave | odd harmonics only, $\lvert a_k\rvert\propto 1/\lvert k\rvert$ |

*From* [2.2](lessons/02-02-fourier-series-periodic-signals.md)

### Fourier transform pairs

$$X(j\omega)=\int_{-\infty}^{\infty}x(t)e^{-j\omega t}dt,\qquad x(t)=\frac{1}{2\pi}\int_{-\infty}^{\infty}X(j\omega)e^{j\omega t}d\omega$$

| $x(t)$ | $X(j\omega)$ |
|---|---|
| $\delta(t)$ | $1$ (flat — an impulse contains every frequency) |
| $1$ | $2\pi\delta(\omega)$ |
| $e^{-at}u(t)$, $a>0$ | $\dfrac{1}{a+j\omega}$ |
| rectangular pulse, width $T$, height 1 | $T\operatorname{sinc}(\omega T/2)$, first null at $\omega=2\pi/T$ |
| $e^{j\omega_0t}$ | $2\pi\delta(\omega-\omega_0)$ |
| $\cos(\omega_0t)$ | $\pi[\delta(\omega-\omega_0)+\delta(\omega+\omega_0)]$ |
| $x*h$ | $X(j\omega)H(j\omega)$ — convolution becomes multiplication |
| $x(t)\cos(\omega_ct)$ | $\tfrac12[X(j(\omega-\omega_c))+X(j(\omega+\omega_c))]$ |

**Time–bandwidth:** narrow in time $\Leftrightarrow$ wide in frequency, with
$T\cdot\omega_{\text{null}}=2\pi$. Short pulses need wide bands — which is why speed
costs bandwidth.

*From* [2.3](lessons/02-03-continuous-time-fourier-transform.md), modulation row from [4.5](lessons/04-05-modulation.md)

### Laplace transform pairs and properties

| $x(t)$ | $X(s)$ | ROC |
|---|---|---|
| $\delta(t)$ | $1$ | all $s$ |
| $u(t)$ | $1/s$ | $\mathrm{Re}\{s\}>0$ |
| $e^{-at}u(t)$ | $\dfrac{1}{s+a}$ | $\mathrm{Re}\{s\}>-a$ |
| $-e^{-at}u(-t)$ | $\dfrac{1}{s+a}$ | $\mathrm{Re}\{s\}<-a$ |
| $t\,u(t)$ | $1/s^2$ | $\mathrm{Re}\{s\}>0$ |
| $\cos(\omega_0t)u(t)$ | $\dfrac{s}{s^2+\omega_0^2}$ | $\mathrm{Re}\{s\}>0$ |
| $\sin(\omega_0t)u(t)$ | $\dfrac{\omega_0}{s^2+\omega_0^2}$ | $\mathrm{Re}\{s\}>0$ |

| Property | Statement |
|---|---|
| Time shift | $x(t-t_0)\leftrightarrow e^{-st_0}X(s)$ |
| Differentiation | $x'(t)\leftrightarrow sX(s)$ (bilateral) — why ODEs become algebra |
| With initial conditions | $\mathcal{L}\{x'\}=sX(s)-x(0^-)$, $\mathcal{L}\{x''\}=s^2X-sx(0^-)-x'(0^-)$ |
| Convolution | $x*h\leftrightarrow X(s)H(s)$ |
| Initial value | $x(0^+)=\lim_{s\to\infty}sX(s)$ |
| Final value | $x(\infty)=\lim_{s\to0}sX(s)$ — **only if the system is stable** |

**ROC shape rules:** right-sided $\Rightarrow$ right of the rightmost pole;
left-sided $\Rightarrow$ left of the leftmost pole; two-sided $\Rightarrow$ a strip
(possibly empty). The ROC never contains a pole.

*From* [2.4](lessons/02-04-laplace-transform-roc.md), IC rules and value theorems from [2.6](lessons/02-06-solving-systems-with-laplace.md)

### Reading the s-plane

| Pole location | Mode it contributes |
|---|---|
| real, negative | decaying exponential |
| real, positive | growing exponential — unstable |
| complex pair, left half | damped sinusoid; the imaginary part is the ringing rate |
| on the $j\omega$ axis | sustained oscillation — marginally stable, not stable |
| near the axis | slow decay, pronounced resonance |

**Stability (causal system):** all poles strictly in the open left half-plane.
The general statement is "the ROC contains the $j\omega$ axis."

**Magnitude, geometrically:** $\lvert H(j\omega)\rvert=\dfrac{\prod\text{distances to zeros}}{\prod\text{distances to poles}}$ — so passing near a pole peaks the gain, near a zero dips it.

**Second-order canonical form:**

$$H(s)=\frac{\omega_n^2}{s^2+2\zeta\omega_ns+\omega_n^2},\qquad \text{poles } s=-\zeta\omega_n\pm j\omega_n\sqrt{1-\zeta^2}$$

$\zeta>1$ overdamped, $\zeta=1$ critically damped, $\zeta<1$ underdamped (rings at
$\omega_d=\omega_n\sqrt{1-\zeta^2}$).

*From* [2.5](lessons/02-05-transfer-functions-poles-zeros.md)

### Partial fractions (inverting a Laplace transform)

| Case | Method |
|---|---|
| Improper ($\deg N\ge\deg D$) | **Long-divide first** — the constant term inverts to an impulse |
| Distinct real poles | Cover-up: $A_i=\big[(s-p_i)X(s)\big]_{s=p_i}$ |
| Repeated pole $(s+a)^m$ | Include every power; get the lower coefficients by differentiating |
| Complex-conjugate pair | Do **not** split into complex terms — complete the square and match to the $\cos$/$\sin$ pairs, giving a real damped sinusoid |

*From* [2.6](lessons/02-06-solving-systems-with-laplace.md)

### Sampling and aliasing arithmetic

$$X_p(j\omega)=\frac{1}{T}\sum_{k=-\infty}^{\infty}X\big(j(\omega-k\omega_s)\big)$$

| Quantity | Formula |
|---|---|
| Nyquist rate (of the signal) | $2\omega_M$ — sample **strictly** above this |
| Nyquist frequency (of the sampler) | $\omega_s/2$, i.e. $f_s/2$ |
| Alias of a tone at $f$ | $f_{\text{apparent}}=\big\lvert f-\operatorname{round}(f/f_s)\cdot f_s\big\rvert$ |
| Ideal reconstruction | $x(t)=\sum_n x[n]\operatorname{sinc}\!\big((t-nT)/T\big)$ — each sinc is 1 at its own sample, 0 at all others |
| ZOH droop | a $\operatorname{sinc}$ envelope; $2/\pi\approx0.637$ ($-3.9$ dB) at Nyquist |

Worked reference: at $f_s=800$ Hz — $300\to300$, $500\to300$, $900\to100$,
$1100\to300$, $1700\to100$. The alias doesn't grow with $f$, it **zig-zags**.

*From* [3.1](lessons/03-01-sampling-nyquist-shannon.md), [3.2](lessons/03-02-aliasing-and-reconstruction.md)

### DTFT pairs

| $x[n]$ | $X(e^{j\Omega})$ |
|---|---|
| $\delta[n]$ | $1$ |
| $\delta[n-n_0]$ | $e^{-j\Omega n_0}$ |
| $a^nu[n]$, $\lvert a\rvert<1$ | $\dfrac{1}{1-ae^{-j\Omega}}$ |
| length-$N$ rectangular pulse | $\dfrac{\sin(\Omega N/2)}{\sin(\Omega/2)}$ (Dirichlet — the discrete cousin of sinc) |
| $x*h$ | $X(e^{j\Omega})H(e^{j\Omega})$ |

**Frequency landmarks:** $\Omega=0$ is DC; $\Omega=\pi$ is the fastest possible
discrete oscillation, $(-1)^n$, corresponding to $f=f_s/2$. Past $\pi$ you are
folding back.

*From* [3.3](lessons/03-03-discrete-time-fourier-transform.md)

### DFT practicalities

| Quantity | Formula |
|---|---|
| Bin $k$ $\to$ physical frequency | $f_k=k f_s/N$ |
| Bin spacing (resolution) | $f_s/N=1/T_{\text{record}}$ — finer resolution needs a **longer record**, not a faster rate |
| DC bin | $X[0]=\sum_n x[n]=N\times$ the average |
| Real input symmetry | $X[N-k]=X[k]^{*}$ — the top half is redundant |
| Twiddle | $W_N=e^{-j2\pi/N}$; for $N=4$, $W_4=-j$ |
| Multiplying DFTs | gives **circular** convolution — zero-pad both to $\ge N+M-1$ to get linear |

Worked reference: $x[n]=\{1,2,3,4\}\Rightarrow X=\{10,\,-2+2j,\,-2,\,-2-2j\}$.

*From* [3.4](lessons/03-04-discrete-fourier-transform.md)

### FFT cost

| $N$ | $N^2$ | $N\log_2N$ | speedup |
|---|---|---|---|
| $1024$ | $1{,}048{,}576$ | $10{,}240$ | $\approx 100\times$ |
| $10^6$ | $10^{12}$ | $\approx 2\times10^{7}$ | $\approx 5\times10^{4}\times$ |

Butterfly: $X[k]=E[k]+W_N^kO[k]$ and $X[k+N/2]=E[k]-W_N^kO[k]$, using
$W_N^{N/2}=-1$.

*From* [3.5](lessons/03-05-the-fft.md)

### z-transform pairs and properties

| $x[n]$ | $X(z)$ | ROC |
|---|---|---|
| $\delta[n]$ | $1$ | all $z$ |
| $\delta[n-m]$ | $z^{-m}$ | all $z$ except $0$ or $\infty$ |
| $u[n]$ | $\dfrac{1}{1-z^{-1}}$ | $\lvert z\rvert>1$ |
| $a^nu[n]$ | $\dfrac{1}{1-az^{-1}}=\dfrac{z}{z-a}$ | $\lvert z\rvert>\lvert a\rvert$ |
| $-a^nu[-n-1]$ | same expression | $\lvert z\rvert<\lvert a\rvert$ |
| $na^nu[n]$ | $\dfrac{az^{-1}}{(1-az^{-1})^2}$ | $\lvert z\rvert>\lvert a\rvert$ |

| Property | Statement |
|---|---|
| **Time shift** | $x[n-m]\leftrightarrow z^{-m}X(z)$ — delay is multiply by $z^{-1}$ |
| Convolution | $x*h\leftrightarrow X(z)H(z)$ |
| DTFT | $X(e^{j\Omega})=X(z)\big\rvert_{z=e^{j\Omega}}$ — the DTFT lives on the unit circle |

**ROC shape rules:** an annulus centered at the origin, containing no poles;
right-sided $\Rightarrow$ **outside** the outermost pole; left-sided $\Rightarrow$
**inside** the innermost pole; finite-length $\Rightarrow$ everywhere.

*From* [4.1](lessons/04-01-z-transform-and-roc.md)

### Reading the z-plane

| Pole location | Mode it contributes |
|---|---|
| real, $0<p<1$ | smooth decay $p^n$ |
| real, $-1<p<0$ | **alternating-sign** decay — oscillates at $\Omega=\pi$. No continuous analogue |
| $\lvert p\rvert>1$ | grows — unstable |
| on the unit circle | not stable ($z=1$ gives $h[n]=u[n]$, whose sum diverges) |
| conjugate pair at radius $r$, angle $\Omega_0$ | $r^n\cos(\Omega_0n+\phi)$ — **angle sets frequency, radius sets decay** |

**Stability (causal):** all poles strictly **inside** the unit circle, $\lvert p\rvert<1$.

**Magnitude, geometrically:** walk $\Omega$ around the unit circle;
$\lvert H(e^{j\Omega})\rvert=\prod\text{dist to zeros}/\prod\text{dist to poles}$. Poles near
$\Omega=0$ give low-pass, near $\Omega=\pi$ high-pass, a pair at $\Omega_0$ band-pass.

Worked reference: a single pole at $z=0.9$ gives DC gain $1/0.1=10$ and Nyquist
gain $1/1.9\approx0.526$ — a low-pass filter.

*From* [4.2](lessons/04-02-discrete-transfer-functions-z-plane.md)

### Difference equations and realizations

$$\sum_{k=0}^{N}a_ky[n-k]=\sum_{m=0}^{M}b_mx[n-m] \quad\Longleftrightarrow\quad H(z)=\frac{\sum_m b_mz^{-m}}{\sum_k a_kz^{-k}}$$

| Reading | Meaning |
|---|---|
| numerator $b_m$ | feed-forward taps $\to$ **zeros** |
| denominator $a_k$ | feedback taps $\to$ **poles** |
| solving for $y[n]$ | flips the sign of every $a_k$, $k\ge1$ — diagram gains are $-a_1,-a_2,\dots$ |
| building blocks | unit delay $z^{-1}$, multiplier, adder — that is all there is |
| direct form II | shares the delay chain; same filter, half the memory |

Worked reference: $y[n]=x[n]+0.9y[n-1]$ gives $H(z)=\frac{1}{1-0.9z^{-1}}$, pole at
$z=0.9$, $h[n]=0.9^nu[n]=1,\,0.9,\,0.81,\,0.729,\dots$ — an infinite impulse
response from a two-term recipe.

*From* [4.3](lessons/04-03-difference-equations-realizations.md)

### Filter design

| Item | Value |
|---|---|
| Cutoff convention | $\lvert H\rvert=1/\sqrt2\approx0.707$, i.e. $-3$ dB, i.e. **half power** |
| RC low-pass | $H(s)=\dfrac{1}{1+sRC}$, pole at $-1/RC$, $\omega_c=1/RC$, rolloff $-20$ dB/decade |
| RC high-pass | $H(s)=\dfrac{sRC}{1+sRC}$ — same pole, plus a **zero at the origin** |
| One-pole discrete smoother | $y[n]=(1-\alpha)x[n]+\alpha y[n-1]$, $H(z)=\dfrac{1-\alpha}{1-\alpha z^{-1}}$, DC gain 1 |
| Design rule for $\alpha$ | $\alpha\approx e^{-\omega_cT}$ — the same $\alpha$ at a different $f_s$ is a different filter |
| Why no brick wall | an ideal rectangular $H$ has a **sinc** impulse response: infinite in extent and nonzero for $t<0$, hence non-causal |

The central tradeoff: sharper transition costs ripple, delay, or computation —
pick which. (Butterworth = maximally flat; Chebyshev = ripple for sharpness;
windowed-sinc / Parks–McClellan for FIR.)

*From* [4.4](lessons/04-04-filter-design-basics.md)

### Modulation

| Item | Value |
|---|---|
| AM spectral shift | $x(t)\cos\omega_ct\leftrightarrow\tfrac12[X(j(\omega-\omega_c))+X(j(\omega+\omega_c))]$ |
| Occupied bandwidth (DSB) | $B=2W$ — independent of the carrier frequency |
| Coherent demodulation | multiply by $\cos\omega_ct$ again, then low-pass: $x\cos^2=\tfrac{x}{2}(1+\cos2\omega_ct)$ |
| Phase-error penalty | output scales by $\cos(\Delta\phi)$; zero at $90^\circ$ |
| Instantaneous frequency (FM) | $\omega_i(t)=d\theta/dt$ — makes FM **nonlinear** in the message |
| Carson's rule | $B\approx2(\Delta f+f_m)$ — an engineering approximation, not a theorem |

*From* [4.5](lessons/04-05-modulation.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Euler's formula $e^{j\theta}=\cos\theta+j\sin\theta$; complex arithmetic, polar form, conjugates | [precalculus 2.4](../precalculus/lessons/02-04-complex-numbers.md), [complex-analysis 1.1](../complex-analysis/lessons/01-01-complex-numbers-geometry.md) |
| The complex exponential as a function; $\lvert e^{j\theta}\rvert=1$ | [complex-analysis 1.3](../complex-analysis/lessons/01-03-exponential-log-trig.md) |
| Sum of an infinite geometric series, $\sum_{n\ge0}r^n=\frac{1}{1-r}$ for $\lvert r\rvert<1$ | [precalculus 3.3](../precalculus/lessons/03-03-series-and-infinite-geometric-sum.md) |
| Improper integrals and when they converge | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| Integration by parts and substitution | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Taylor expansion (used for small-angle and rolloff approximations) | [calc-refresher 3.2](../calc-refresher/lessons/03-02-power-and-taylor-series.md) |
| Fourier series coefficients, orthogonality, and convergence | [fourier-analysis 1.1](../fourier-analysis/lessons/01-01-periodic-functions-fourier-coefficients.md), [1.2](../fourier-analysis/lessons/01-02-orthogonal-systems-projection.md) |
| Gibbs phenomenon at a jump | [fourier-analysis 1.3](../fourier-analysis/lessons/01-03-convergence-pointwise-uniform-gibbs.md) |
| Parseval / mean-square convergence | [fourier-analysis 1.4](../fourier-analysis/lessons/01-04-mean-square-parseval.md) |
| Fourier transform existence, Plancherel, the uncertainty bound | [fourier-analysis 2.4](../fourier-analysis/lessons/02-04-plancherel-uncertainty.md) |
| Proof of the convolution theorem | [fourier-analysis 2.3](../fourier-analysis/lessons/02-03-convolution-theorem.md) |
| $\delta$ as a distribution, rigorously; weak derivatives | [fourier-analysis 3.1](../fourier-analysis/lessons/03-01-dirac-delta-sifting.md), [3.2](../fourier-analysis/lessons/03-02-distributions-weak-derivatives.md) |
| Solving second-order constant-coefficient ODEs; characteristic roots | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Damping regimes and resonance in a driven oscillator | [ode-refresher 2.2](../ode-refresher/lessons/02-02-oscillations-damping.md), [2.3](../ode-refresher/lessons/02-03-forcing-resonance.md) |
| The unilateral Laplace transform as an IVP tool | [ode-refresher 4.1](../ode-refresher/lessons/04-01-laplace-transform.md) |
| Eigenvalues and eigenvectors (the analogy behind eigenfunctions) | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| RC transient behavior and the time constant | [circuits 3.2](../circuits/lessons/03-02-first-order-rc-rl-transients.md) |
| Impedance and phasor analysis of AC circuits | [circuits 4.2](../circuits/lessons/04-02-impedance-phasor-analysis.md) |

## Pitfalls

### Signals and shifting

- $x(t-3)$ shifts **right**, not left — at $t=5$ it shows you $x(2)$. Test with one number instead of trusting the sign. *([1.1](lessons/01-01-signals-continuous-discrete.md))*
- Scaling then shifting: after scaling by $a$ the remaining shift is $b/a$. Factor as $x(a(t+b/a))$, or shift before scaling. *([1.1](lessons/01-01-signals-continuous-discrete.md))*
- A discrete sinusoid does **not** inherit periodicity from its continuous cousin: $\cos(3t)$ is periodic, $\cos(3n)$ is not. *([1.1](lessons/01-01-signals-continuous-discrete.md))*
- Energy and power signals are exclusive but not exhaustive — $t\,u(t)$ is neither. *([1.1](lessons/01-01-signals-continuous-discrete.md))*
- The arrow drawn for $\delta(t)$ has unit **area**, not unit height; it has no pointwise value. $\delta[n]$, by contrast, really is 1. *([1.2](lessons/01-02-elementary-signals.md))*
- Sifting only fires if the impulse's location lies **inside** the limits of integration. *([1.2](lessons/01-02-elementary-signals.md))*

### System properties

- $y=2x+3$ is *affine*, not linear — it fails homogeneity and the zero-in-zero-out test. *([1.3](lessons/01-03-systems-and-properties.md))*
- Time-invariance is about whether the **box** changes with time, not whether the signals do. *([1.3](lessons/01-03-systems-and-properties.md))*
- One bounded input surviving proves nothing about BIBO stability — the definition quantifies over *every* bounded input. One failure, however, settles it. *([1.3](lessons/01-03-systems-and-properties.md))*
- $h\to0$ does **not** imply stable: $h(t)=\frac{1}{t+1}u(t)$ decays but has infinite area; $h[n]=\frac{1}{n+1}u[n]$ is the harmonic series. The test is on the **area/sum of $\lvert h\rvert$**. *([1.4](lessons/01-04-convolution-continuous-time.md), [1.5](lessons/01-05-convolution-discrete-time.md))*

### Convolution

- The limits of integration are the **intersection of two supports and they change with $t$** — skipping the case analysis is the single biggest source of wrong answers. *([1.4](lessons/01-04-convolution-continuous-time.md))*
- Inside the integral $t$ is a frozen constant and $\tau$ is the only variable. Writing $dt$ inside is a sign you've lost the thread. *([1.4](lessons/01-04-convolution-continuous-time.md))*
- $y[n]\ne x[n]h[n]$ — pointwise multiplication is a time-varying gain, not an LTI system. Convolution deliberately mixes across time. *([1.5](lessons/01-05-convolution-discrete-time.md))*
- The flip happens in the **dummy** index: $h[n-k]$, not $h[k-n]$. *([1.5](lessons/01-05-convolution-discrete-time.md))*

### Frequency domain

- A real sinusoid is **not** an eigenfunction — it generally comes out phase-shifted. Only $e^{st}$ is. *([2.1](lessons/02-01-eigenfunctions-frequency-response.md))*
- $H(j\omega)$ is the **steady-state** answer; it was derived with an everlasting exponential, no switch-on. *([2.1](lessons/02-01-eigenfunctions-frequency-response.md))*
- Phase shift and time delay differ by a factor of $\omega$: $\angle H$ radians is $\angle H/\omega$ seconds. *([2.1](lessons/02-01-eigenfunctions-frequency-response.md))*
- A periodic signal has no single frequency — evaluate $H$ separately at **every** harmonic $k\omega_0$. *([2.2](lessons/02-02-fourier-series-periodic-signals.md))*
- A line spectrum is genuinely **zero** between the lines, not "a small amount." *([2.2](lessons/02-02-fourier-series-periodic-signals.md))*
- Wider in time means **narrower** in frequency, not wider. Track width and area separately. *([2.3](lessons/02-03-continuous-time-fourier-transform.md))*
- Don't drop the $2\pi$: it is $1\leftrightarrow2\pi\delta(\omega)$ and $\cos\leftrightarrow\pi[\cdots]$. *([2.3](lessons/02-03-continuous-time-fourier-transform.md))*
- Magnitude is not the whole story — an all-pass filter has $\lvert H\rvert=1$ everywhere and can still smear a pulse. Phase carries the structure. *([2.3](lessons/02-03-continuous-time-fourier-transform.md), [2.2](lessons/02-02-fourier-series-periodic-signals.md))*

### ROC, poles, and stability

- $X(s)$ alone is **not** the transform — without its ROC, two different signals answer to it. *([2.4](lessons/02-04-laplace-transform-roc.md), [4.1](lessons/04-01-z-transform-and-roc.md))*
- "Poles in the left half-plane $\Rightarrow$ stable" holds **only for causal systems**. The real rule is "the ROC contains the $j\omega$ axis." *([2.4](lessons/02-04-laplace-transform-roc.md), [2.5](lessons/02-05-transfer-functions-poles-zeros.md))*
- A second-order system has **three** different frequencies: $\omega_n$, $\omega_d$, and the magnitude peak $\omega_{\text{peak}}$. They are not interchangeable. *([2.5](lessons/02-05-transfer-functions-poles-zeros.md))*
- A zero cannot rescue an unstable pole — cancelling a right-half-plane pole on paper leaves the mode there in the real system. *([2.5](lessons/02-05-transfer-functions-poles-zeros.md))*
- Don't import "left half-plane" into the z-plane: $z=-0.9$ is perfectly stable. What matters is **distance from the origin**. *([4.1](lessons/04-01-z-transform-and-roc.md))*
- A pole **on** the unit circle is not "close enough" — $z=1$ gives $h[n]=u[n]$, whose sum diverges. The inequality is strict. *([4.2](lessons/04-02-discrete-transfer-functions-z-plane.md))*
- Count poles from the **positive-power** form: $\frac{1+z^{-2}}{1-0.9z^{-1}}$ has two poles, not one. *([4.2](lessons/04-02-discrete-transfer-functions-z-plane.md), [4.1](lessons/04-01-z-transform-and-roc.md))*

### Solving and inverting

- The final value theorem fails **silently** on unstable or purely oscillatory systems — check stability before trusting it. *([2.6](lessons/02-06-solving-systems-with-laplace.md))*
- Transform rules want $y(0^-)$, the pre-kick value; $y(0^+)$ is an output of the calculation, not an input. *([2.6](lessons/02-06-solving-systems-with-laplace.md))*
- Partial fractions on an improper fraction is invalid — long-divide first, and expect an impulse term. *([2.6](lessons/02-06-solving-systems-with-laplace.md))*
- The "$+1$" in $H/(1+GH)$ is the entire content of feedback. Drop it and you lose stability limits and pole placement. *([2.6](lessons/02-06-solving-systems-with-laplace.md))*

### Sampling and discrete frequency

- **Nyquist rate** ($2\omega_M$, a property of the signal) is not the **Nyquist frequency** ($\omega_s/2$, a property of the sampler). *([3.1](lessons/03-01-sampling-nyquist-shannon.md))*
- $\omega_s=2\omega_M$ is **not** safe — the theorem needs a strict inequality; at equality the copies touch. *([3.1](lessons/03-01-sampling-nyquist-shannon.md))*
- "Sampled" does not mean "approximated" — under the theorem, reconstruction is exact. *([3.1](lessons/03-01-sampling-nyquist-shannon.md))*
- Nothing downstream can undo aliasing; band-limiting must happen **before** the sampler. *([3.1](lessons/03-01-sampling-nyquist-shannon.md), [3.2](lessons/03-02-aliasing-and-reconstruction.md))*
- The threshold is **twice** the highest frequency, not once. *([3.2](lessons/03-02-aliasing-and-reconstruction.md))*
- The alias frequency zig-zags rather than growing — 500 Hz and 1100 Hz both alias to 300 Hz at $f_s=800$. *([3.2](lessons/03-02-aliasing-and-reconstruction.md))*
- $\Omega$ is radians **per sample** — meaningless in hertz until someone hands you $f_s$. *([3.3](lessons/03-03-discrete-time-fourier-transform.md))*
- Bigger $\Omega$ means faster only up to $\pi$; past that you are on the way back down. Discrete frequency is a circle. *([3.3](lessons/03-03-discrete-time-fourier-transform.md))*
- A discrete signal has a **continuous** spectrum — getting a finite list back requires the DFT. *([3.3](lessons/03-03-discrete-time-fourier-transform.md))*

### DFT and FFT

- Multiplying two DFTs gives **circular** convolution — the tail wraps onto the head. Zero-pad to $\ge N+M-1$. This is a bug that ships. *([3.4](lessons/03-04-discrete-fourier-transform.md), [3.5](lessons/03-05-the-fft.md))*
- A faster sample rate buys a higher **maximum** frequency, not finer resolution. Resolution comes from a longer record. *([3.4](lessons/03-04-discrete-fourier-transform.md))*
- Bin $N-1$ is the frequency just **below** DC, not the highest. *([3.4](lessons/03-04-discrete-fourier-transform.md))*
- The FFT is not an approximation and not a different transform — it computes the DFT exactly. *([3.5](lessons/03-05-the-fft.md))*
- Only radix-2 needs a power-of-two length; zero-padding interpolates the display, it does not add resolution. *([3.5](lessons/03-05-the-fft.md))*

### Building and designing filters

- Solving the LCCDE for $y[n]$ flips the sign of every $a_k$, $k\ge1$ — diagram gains are $-a_1,-a_2,\dots$ *([4.3](lessons/04-03-difference-equations-realizations.md))*
- Direct form II's internal $w[n]$ is scratch, not a signal with meaning. *([4.3](lessons/04-03-difference-equations-realizations.md))*
- "FIR" means the memory **empties out**, not that there is none. *([4.3](lessons/04-03-difference-equations-realizations.md))*
- $-3$ dB is half **power** ($0.707$ amplitude); half amplitude is $-6$ dB. Use $20\log_{10}$ for amplitude, $10\log_{10}$ for power. *([4.4](lessons/04-04-filter-design-basics.md))*
- Sharper is not simply better — it buys ripple, group delay, or arithmetic, and a sharp filter rings. *([4.4](lessons/04-04-filter-design-basics.md))*
- $\alpha$ is a pole location, not a cutoff — the same $\alpha$ at a different $f_s$ is a different filter. *([4.4](lessons/04-04-filter-design-basics.md))*

### Modulation

- A higher carrier does not widen the transmission: $B=2W$ either way. *([4.5](lessons/04-05-modulation.md))*
- Coherent detection needs a phase-locked carrier — a static error costs $\cos(\Delta\phi)$, dead at $90^\circ$. *([4.5](lessons/04-05-modulation.md))*
- The spectral-shift rule does **not** apply to FM: the message sits inside a cosine, so FM is nonlinear and Carson's rule is an approximation. *([4.5](lessons/04-05-modulation.md))*

# Signals & Systems · Lesson 1.2: The elementary signals

> ⏱ ~15 min · Module 1: Signals and LTI systems · Builds on: [1.1 Signals: the continuous and discrete worlds](01-01-signals-continuous-discrete.md) · Unlocks: 1.3 (system properties), 1.4–1.5 (convolution)

## Why this matters

You will never analyze a system by throwing an arbitrary squiggle at it. Instead you keep a small kit of **test signals** on the workbench, and every real signal gets written as a combination of them. The kit has exactly two stars, and each is the seed of half this course. The **complex exponential** $e^{st}$ is the one shape a linear time-invariant system cannot distort — that single fact becomes Fourier and Laplace in Module 2. The **impulse** $\delta$ is the atom of time: slice any signal into infinitely thin slivers, and each sliver is a scaled, shifted impulse. That single fact becomes convolution in [1.4](01-04-convolution-continuous-time.md) and [1.5](01-05-convolution-discrete-time.md). Get this lesson right and the rest of the course is bookkeeping.

## The idea

Two building blocks, two different jobs.

**The complex exponential is the shape that survives.** Differentiate $e^{st}$ and you get $s\,e^{st}$ — the same function, just rescaled. Delay it and you get $e^{s(t-t_0)} = e^{-st_0}e^{st}$ — again the same function, rescaled. Nothing an LTI system does can change its shape; it can only multiply it by a number. And because a *complex* $s$ carries two independent knobs — a decay rate and a rotation rate — one formula covers growing exponentials, pure sinusoids, and the damped ringing of a plucked string or a struck RLC circuit. That is a lot of real-world behaviour packed into $e^{st}$.

**The impulse is the atom.** Picture a very narrow, very tall rectangular pulse whose *area* is always exactly 1. Squeeze the width toward zero and the height rises to compensate. In the limit you have something with no width, infinite height, and unit area — the continuous impulse $\delta(t)$. It's a strange object (we'll be honest about how strange below), but it does one thing beautifully: sliding it against a signal and integrating **plucks out a single sample**. Do that at every instant and you have chopped the signal into a continuum of impulses. Reassemble, and you'll have derived convolution.

The **unit step** $u$ is the humble third member: the mathematical "switch on at $t=0$." It's the impulse's integral, and it's how you write "this happens only after now."

## The formal version

### The complex exponential

$$x(t) = e^{st}, \qquad s = \sigma + j\omega,$$

where $j=\sqrt{-1}$ (engineering convention — not $i$), $\sigma$ is the **real part** (units of 1/second, a growth or decay rate) and $\omega$ is the **angular frequency** in radians per second. By **Euler's formula** $e^{j\theta} = \cos\theta + j\sin\theta$,

$$e^{st} = e^{\sigma t}\big(\cos\omega t + j\sin\omega t\big).$$

*In words: $e^{st}$ is a rotating unit vector whose length is scaled by $e^{\sigma t}$ — a spiral in the complex plane.* Three special cases are the signals you already know:

| $s$ | $e^{st}$ | name |
|---|---|---|
| $\sigma$ real, $\omega=0$ | $e^{\sigma t}$ | real exponential (growth if $\sigma>0$, decay if $\sigma<0$) |
| $\sigma=0$, $\omega\neq 0$ | $\cos\omega t + j\sin\omega t$ | pure sinusoid, constant amplitude |
| $\sigma<0$, $\omega\neq 0$ | $e^{\sigma t}(\cos\omega t + j\sin\omega t)$ | damped sinusoid — a ringdown |

Real-valued signals come out by taking real parts or by pairing conjugates:

$$\cos\omega t = \tfrac12\left(e^{j\omega t} + e^{-j\omega t}\right), \qquad e^{\sigma t}\cos\omega t = \mathrm{Re}\left\{e^{st}\right\}.$$

So the *whole* qualitative behaviour of a signal is one point $s$ in the complex plane: horizontal position sets how fast it dies, vertical position sets how fast it wiggles. In [2.5](02-05-transfer-functions-poles-zeros.md) those points get a name — poles.

### The discrete-time exponential

The discrete counterpart replaces "raise $e$ to a growing exponent" with "multiply by a fixed number each step":

$$x[n] = z^n, \qquad z = re^{j\Omega},$$

with $r=|z|\ge 0$ and $\Omega$ the **discrete-time frequency** in radians per *sample*. Then $z^n = r^n(\cos\Omega n + j\sin\Omega n)$. *In words: magnitude $r$ controls growth ($r>1$) or decay ($r<1$), and $\Omega$ controls the wiggle.* The bridge between the two worlds is one line of algebra: sample $e^{st}$ every $T$ seconds and

$$e^{s(nT)} = \left(e^{sT}\right)^{n} = z^{n}, \qquad z = e^{sT}.$$

That map — the imaginary axis of the $s$-plane wrapping onto the unit circle of the $z$-plane — is the backbone of Modules 3 and 4.

### Step and impulse in continuous time

$$u(t) = \begin{cases} 0, & t<0 \\ 1, & t>0 \end{cases}$$

with the value at $t=0$ left unspecified (it never matters inside an integral).

For the impulse, start with an honest, ordinary function: the narrow pulse

$$\delta_\Delta(t) = \begin{cases} 1/\Delta, & 0 \le t < \Delta \\ 0, & \text{otherwise,}\end{cases} \qquad \int_{-\infty}^{\infty}\delta_\Delta(t)\,dt = 1 \ \ \text{for every } \Delta>0.$$

Now let $\Delta \to 0$. The area stays pinned at 1 while the height runs to infinity, and $\delta(t)$ is the limiting object.

**Be honest: $\delta(t)$ is not a function.** No function can be zero everywhere except one point and still integrate to 1 — a single point has zero width, so any genuine function with that support integrates to 0. $\delta$ is a **distribution** (a generalized function): it is defined not by its values but by *what it does to other functions under an integral*. That is not hand-waving, it is a fully rigorous theory — and it is developed properly in [`fourier-analysis` 3.1](../../fourier-analysis/lessons/03-01-dirac-delta-sifting.md) and [`fourier-analysis` 3.2](../../fourier-analysis/lessons/03-02-distributions-weak-derivatives.md). In this course we will use $\delta$ freely and let those lessons hold the rigor.

### Step and impulse in discrete time — no subtlety at all

$$u[n] = \begin{cases} 0, & n<0\\ 1, & n\ge 0\end{cases} \qquad\qquad \delta[n] = \begin{cases} 1, & n=0\\ 0, & n\neq 0.\end{cases}$$

**Contrast this sharply with the continuous case.** $\delta[n]$ is a perfectly ordinary sequence. Its height genuinely *is* 1. It requires no limits, no distributions, no apologies. Every awkward thing about $\delta(t)$ — infinite height, undefined pointwise value, "it's really a distribution" — exists only because continuous time has no smallest interval to put a lone sample in. Discrete time does, so $\delta[n]$ is just a list of numbers. Whenever $\delta(t)$ feels slippery, check your intuition on $\delta[n]$ first: the *algebra* is identical, only the analysis is hard.

### The sifting property

$$\boxed{\ \int_{-\infty}^{\infty} x(t)\,\delta(t-t_0)\,dt = x(t_0), \qquad \sum_{k=-\infty}^{\infty} x[k]\,\delta[n-k] = x[n].\ }$$

*In words: integrating (or summing) a signal against an impulse parked at $t_0$ returns the signal's value there — the impulse reaches in and plucks out one sample.* The continuous version is really the **definition** of $\delta$; it holds whenever $x$ is continuous at $t_0$. The discrete version needs no caveat: in the sum $\sum_k x[k]\delta[n-k]$, the factor $\delta[n-k]$ is zero for every $k$ except $k=n$, where it is 1, leaving $x[n]$.

### Step and impulse are each other's calculus

$$u(t) = \int_{-\infty}^{t}\delta(\tau)\,d\tau, \qquad \delta(t) = \frac{du}{dt}; \qquad\qquad u[n] = \sum_{k=-\infty}^{n}\delta[k], \qquad \delta[n] = u[n]-u[n-1].$$

*In words: the step is the impulse's running total, and the impulse is the step's rate of change — the entire jump of size 1 concentrated at the instant it happens.* The continuous derivative is again a distributional (weak) derivative, since $u$ has no ordinary derivative at 0; that's exactly the machinery of [`fourier-analysis` 3.2](../../fourier-analysis/lessons/03-02-distributions-weak-derivatives.md). The discrete statements are elementary: $u[n]-u[n-1]$ is $1-0=1$ at $n=0$ and $1-1=0$ or $0-0=0$ everywhere else. Notice the pattern that will run through the whole course: **integral $\leftrightarrow$ sum, derivative $\leftrightarrow$ first difference.**

### The punchline

Read the discrete sifting property backwards. Instead of "the sum collapses to $x[n]$," read it as a recipe for *building* $x$:

$$\boxed{\ x[n] = \sum_{k=-\infty}^{\infty} x[k]\,\delta[n-k]\ }$$

*In words: any signal is a superposition of shifted impulses, the one at position $k$ weighted by the signal's own value there.* Concretely, the sequence $x[0]=5,\ x[1]=-2$, zero elsewhere, is literally $x[n] = 5\delta[n] - 2\delta[n-1]$. Nothing deep has happened yet — we've only rewritten a list of numbers as a weighted list of spikes.

But it is the sentence convolution comes from. In [1.3](01-03-systems-and-properties.md) you'll meet systems that are linear (they respect superposition) and time-invariant (a shifted input gives a shifted output). Hand such a system the line above: it must respond to each $\delta[n-k]$ with a shifted copy of its response to a single impulse, and then add them up, weighted by $x[k]$. That sum *is* the convolution sum. The continuous statement is the same idea with the sum replaced by an integral, $x(t) = \int_{-\infty}^{\infty}x(\tau)\delta(t-\tau)\,d\tau$.

## Picture

![Four panels: the unit step u(t) as a jump to height 1, the impulse delta(t) as an arrow labelled area (1), the discrete step u[n] and discrete impulse delta[n] as stem plots with true height 1, and a decaying oscillation with its exponential envelope](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — sifting in both worlds).**

$$\int_{-\infty}^{\infty}\left(t^3-2t\right)\delta(t+1)\,dt.$$

The impulse sits where its argument vanishes: $t+1=0$, so $t_0=-1$. Sifting gives $(-1)^3-2(-1) = -1+2 = \boxed{1}$.

$$\int_{-2}^{2} e^{t}\,\delta(t-5)\,dt = 0,$$

because $t_0=5$ lies outside the interval $[-2,2]$ — the impulse never gets integrated over, so there is nothing to pluck.

Discrete twin: $\displaystyle\sum_{k=-\infty}^{\infty} 3^{k}\,\delta[k-2] = 3^{2} = 9$. Only $k=2$ survives.

**Example 2 (why you'd care — one complex number describes a ringdown).** Strike an underdamped RLC circuit and the voltage rings down as $v(t) = V_0 e^{-\alpha t}\cos(\omega_d t)$ — the natural response you solved as an ODE in [`circuits` 3.3](../../circuits/lessons/03-03-second-order-rlc.md) and [`ode-refresher` 2.2](../../ode-refresher/lessons/02-02-oscillations-damping.md). In this lesson's language that is just $\mathrm{Re}\{V_0 e^{st}\}$ with $s = -\alpha + j\omega_d$.

Take $s = -20 + j400$ (units: $1/\mathrm{s}$ and $\mathrm{rad/s}$). Read off everything without solving anything:

- **Decay:** $e^{-20t}$, so the time constant is $\tau = 1/20 = 0.05$ s = 50 ms.
- **Ringing:** $\omega_d = 400$ rad/s, i.e. $f = \omega_d/2\pi = 400/6.2832 \approx 63.7$ Hz, period $T = 1/f \approx 15.7$ ms.
- **How many rings before it's essentially gone?** $\tau/T \approx 50/15.7 \approx 3.2$ cycles per $1/e$ of decay — a visibly ringing but quickly-settling response.

Move $s$ left and the ring dies faster; move it up and it wiggles faster; move it to the right of the imaginary axis ($\sigma>0$) and the circuit blows up. That is the entire content of stability, and in [2.5](02-05-transfer-functions-poles-zeros.md) you'll read it straight off a picture of the $s$-plane.

## Watch out

- **You might think the arrow drawn for $\delta(t)$ has height 1.** It doesn't — the "(1)" beside it labels the *area*. $\delta(t)$ has no pointwise value at all, and it carries units of 1/time (so $\int \delta\,dt$ can be dimensionless). Contrast $\delta[n]$, whose height really is 1 and which is dimensionless. A scaled impulse $3\delta(t)$ means area 3, drawn as an arrow labelled (3).
- **You might get the shift sign backwards.** $\delta[n-3]$ is the spike at $n=+3$ (its argument vanishes when $n=3$), and $\delta[n+3]$ sits at $n=-3$. Same for $\delta(t-t_0)$. And sifting only fires if that location lies *inside* the limits of integration — outside, the integral is 0, exactly as in Example 1.
- **You might worry about $u(0)$.** In continuous time the value at the single jump instant is irrelevant: a lone point has zero width and changes no integral, so authors set it to 0, 1, or $\tfrac12$ as convenient. In discrete time there is no such freedom — $u[0]=1$ is a real, load-bearing definition, and choosing $u[0]=0$ would break $\delta[n]=u[n]-u[n-1]$.

## One-liner

> $e^{st}$ is the one shape an LTI system can only rescale, and $\delta$ is the atom every other signal is built from: $x[n]=\sum_k x[k]\delta[n-k]$ — the sentence convolution comes from.

## Problems

**P1 (🟢)** Evaluate each, or state that it is zero and why.

(a) $\displaystyle\int_{-\infty}^{\infty}\left(t^2+3t\right)\delta(t-2)\,dt$  (b) $\displaystyle\int_{0}^{5} e^{-2t}\cos(\pi t)\,\delta(t-1)\,dt$  (c) $\displaystyle\int_{0}^{3}\sin(t)\,\delta(t-4)\,dt$

**P2 (🟡)** (a) A sequence has $x[-1]=4$, $x[0]=2$, $x[2]=-3$, and $x[n]=0$ for all other $n$. Write $x[n]$ as a sum of shifted, scaled impulses. (b) Write $w[n] = u[n-1]-u[n-5]$ as a sum of shifted impulses.

**P3 (🔴)** (a) For real $a\neq 0$, use the substitution $\tau = at$ to show $\displaystyle\int_{-\infty}^{\infty} x(t)\,\delta(at)\,dt = \frac{1}{|a|}x(0)$, and hence that $\delta(at) = \dfrac{1}{|a|}\delta(t)$. (b) Use it to evaluate $\displaystyle\int_{-\infty}^{\infty}\cos(\pi t)\,\delta(3t-6)\,dt$.

<details>
<summary>Solutions</summary>

**P1**

(a) The impulse sits at $t_0 = 2$, which is inside $(-\infty,\infty)$. Sifting evaluates the other factor there:

$$\int_{-\infty}^{\infty}(t^2+3t)\delta(t-2)\,dt = (2)^2 + 3(2) = 4+6 = 10.$$

(b) The impulse sits at $t_0=1$, inside $[0,5]$, so

$$\int_{0}^{5} e^{-2t}\cos(\pi t)\delta(t-1)\,dt = e^{-2}\cos(\pi) = -e^{-2} \approx -0.135.$$

*Check:* $\cos\pi = -1$ and $e^{-2}\approx 0.1353$, so the value is about $-0.135$. The sign comes entirely from the cosine.

(c) The impulse sits at $t_0=4$, which is **outside** the interval $[0,3]$. Over $[0,3]$ the integrand is identically zero, so the integral is $0$. (Nothing about $\sin t$ matters.)

**P2**

(a) Each nonzero sample becomes one impulse, placed at that index and scaled by the sample value. The sample at index $k$ contributes $x[k]\,\delta[n-k]$:

$$x[n] = 4\,\delta[n+1] + 2\,\delta[n] - 3\,\delta[n-2].$$

*Check:* evaluate at $n=-1$: $\delta[0]=1$ and the others vanish, giving $4$ ✓. At $n=0$: $\delta[1]=0$, $\delta[0]=1$, $\delta[-2]=0$, giving $2$ ✓. At $n=2$: only $\delta[0]$ from the last term survives, giving $-3$ ✓. At $n=1$: all three arguments ($2$, $1$, $-1$) are nonzero, so $x[1]=0$ ✓. Note the index-$-1$ sample needs $\delta[n+1]$, not $\delta[n-1]$.

(b) $u[n-1]$ is 1 for $n\ge 1$ and 0 otherwise; $u[n-5]$ is 1 for $n\ge 5$ and 0 otherwise. Subtracting, $w[n]=1$ exactly when $1\le n\le 4$ (for $n\ge 5$ both terms are 1 and cancel; for $n\le 0$ both are 0). So

$$w[n] = \delta[n-1]+\delta[n-2]+\delta[n-3]+\delta[n-4].$$

*Check:* four ones, at $n=1,2,3,4$ — a length-4 rectangular window. Sanity: $\sum_n w[n] = 4$, matching the four impulses.

**P3**

(a) Assume first $a>0$ and substitute $\tau = at$, so $t = \tau/a$ and $dt = d\tau/a$; as $t$ runs from $-\infty$ to $\infty$ so does $\tau$, and the limits keep their order:

$$\int_{-\infty}^{\infty} x(t)\delta(at)\,dt = \int_{-\infty}^{\infty} x\!\left(\frac{\tau}{a}\right)\delta(\tau)\,\frac{d\tau}{a} = \frac{1}{a}\,x(0),$$

using sifting at $\tau=0$ in the last step. If $a<0$, the same substitution reverses the limits (as $t\to-\infty$, $\tau\to+\infty$), and flipping them back contributes a minus sign, giving $-\frac{1}{a}x(0)$. Both cases are $\frac{1}{|a|}x(0)$.

Since $\int x(t)\left[\frac{1}{|a|}\delta(t)\right]dt = \frac{1}{|a|}x(0)$ as well, and a distribution is *defined* by what it does under an integral against every test signal $x$, the two objects are equal:

$$\delta(at) = \frac{1}{|a|}\delta(t).$$

*Intuition:* compressing the time axis by $a$ narrows the unit-area pulse without raising it, so its area drops by $|a|$; the $1/|a|$ restores it.

(b) First factor the argument so the scaling rule applies about the impulse's own location: $3t-6 = 3(t-2)$. With $a=3$ (applied to the shifted variable $t-2$),

$$\delta(3t-6) = \delta\big(3(t-2)\big) = \tfrac13\,\delta(t-2).$$

Therefore

$$\int_{-\infty}^{\infty}\cos(\pi t)\,\delta(3t-6)\,dt = \tfrac13\int_{-\infty}^{\infty}\cos(\pi t)\,\delta(t-2)\,dt = \tfrac13\cos(2\pi) = \tfrac13.$$

*Check:* $\cos 2\pi = 1$, so the answer is $1/3 \approx 0.333$. Forgetting the $\tfrac13$ — a very common slip — would give $1$; the factor is there because the impulse's argument runs three times as fast as $t$.

</details>

## Connections

- **Backward:** the shifting operation $x(t-t_0)$ and its discrete cousin $x[n-k]$ come straight from [1.1](01-01-signals-continuous-discrete.md); here they are applied to $\delta$ itself, which is the only thing a shift needs to act on to build everything else.
- **Forward:** [1.3](01-03-systems-and-properties.md) defines linearity and time-invariance, and then [1.4](01-04-convolution-continuous-time.md) and [1.5](01-05-convolution-discrete-time.md) feed the boxed decomposition into an LTI system to produce convolution. The exponential $e^{st}$ returns as the *eigenfunction* in [2.1](02-01-eigenfunctions-frequency-response.md), its $s$-plane location becomes a pole in [2.5](02-05-transfer-functions-poles-zeros.md), an infinite train of impulses does the sampling in [3.1](03-01-sampling-nyquist-shannon.md), and $z^n$ opens Module 4 in [4.1](04-01-z-transform-and-roc.md).
- **Sideways (analysis):** everything uncomfortable about $\delta(t)$ — that it isn't a function, that $u'(t)=\delta(t)$ needs a new notion of derivative — is made rigorous in [`fourier-analysis` 3.1](../../fourier-analysis/lessons/03-01-dirac-delta-sifting.md) and [`fourier-analysis` 3.2](../../fourier-analysis/lessons/03-02-distributions-weak-derivatives.md). **Sideways (circuits):** the damped sinusoid $\mathrm{Re}\{e^{st}\}$ is exactly the underdamped natural response of [`circuits` 3.3](../../circuits/lessons/03-03-second-order-rlc.md), and the same complex-roots case of the characteristic equation in [`ode-refresher` 2.2](../../ode-refresher/lessons/02-02-oscillations-damping.md).

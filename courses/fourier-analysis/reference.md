# Fourier & Harmonic Analysis · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One idea, four costumes: any reasonable function is a superposition of pure waves,
and in the wave picture the hard operations (differentiation, convolution, PDEs)
turn into arithmetic. Series handle periodic signals, the transform handles
one-off signals, distributions handle the objects integrals can't reach, and the
DFT handles the finite list of numbers a computer actually has. The two tables
you'll open this card for most are **[Transform pairs](#transform-pairs)** and
**[Transform properties](#transform-properties)** — everything else is the
scaffolding that tells you when you're allowed to use them.

## Notation

**Convention — read this before using any formula below.** This course uses
**ordinary frequency** $\xi$ (cycles per unit $x$), with the $2\pi$ **inside the
exponent** and a **minus sign on the forward transform**:

$$\hat f(\xi)=\int_{-\infty}^{\infty} f(x)\,e^{-2\pi i x\xi}\,dx,\qquad\qquad f(x)=\int_{-\infty}^{\infty} \hat f(\xi)\,e^{+2\pi i x\xi}\,d\xi.$$

Forward carries $e^{-2\pi i x\xi}$; inverse carries $e^{+2\pi i x\xi}$; **neither
one carries a prefactor.** That is what makes Plancherel prefactor-free, makes
$\widehat{f*g}=\hat f\hat g$ *and* $\widehat{fg}=\hat f*\hat g$ both clean, and
makes $e^{-\pi x^2}$ literally its own transform. Every constant on this card —
the $2\pi i\xi$ in the derivative rule, the $\tfrac{1}{4\pi}$ uncertainty floor —
is convention-locked to this choice. Translate a textbook formula with
$\omega=2\pi\xi$ before mixing it in ([2.1](lessons/02-01-series-to-fourier-transform.md)).

For **series** the default is period $2\pi$ on $[-\pi,\pi]$, complex form
$f=\sum_n c_n e^{inx}$ with $c_n=\tfrac{1}{2\pi}\int_{-\pi}^{\pi} f e^{-inx}dx$ —
same minus-in-the-forward-direction habit, with the $\tfrac{1}{2\pi}$ moved onto
the analysis side because the interval is finite ([1.1](lessons/01-01-periodic-functions-fourier-coefficients.md)).

| Symbol | Means | First used |
|---|---|---|
| $T$, $\omega=2\pi/T$ | fundamental period, and the fundamental angular frequency that goes with it | [1.1](lessons/01-01-periodic-functions-fourier-coefficients.md) |
| $a_n$, $b_n$ | real Fourier coefficients — how much $\cos nx$ and how much $\sin nx$ is in $f$ | [1.1](lessons/01-01-periodic-functions-fourier-coefficients.md) |
| $c_n$ | complex Fourier coefficient — the two real amplitudes at frequency $n$ fused into one complex number | [1.1](lessons/01-01-periodic-functions-fourier-coefficients.md) |
| $\delta_{mn}$ | Kronecker delta: $1$ when the indices match, $0$ otherwise (an index bookkeeper, unrelated to $\delta$) | [1.1](lessons/01-01-periodic-functions-fourier-coefficients.md) |
| $\langle f,g\rangle$ | function inner product $\int f\bar g$ — a continuous dot product saying how aligned two functions are | [1.2](lessons/01-02-orthogonal-systems-projection.md) |
| $\lVert f\rVert$ | $L^2$ norm; $\lVert f\rVert^2$ is the signal's **energy**, and $\lVert f-g\rVert$ is root-mean-square distance | [1.2](lessons/01-02-orthogonal-systems-projection.md) |
| $S_N f$, $V_N$ | the degree-$N$ partial sum, and the span of the frequencies $-N\dots N$ it lives in | [1.2](lessons/01-02-orthogonal-systems-projection.md) |
| $D_N$ | Dirichlet kernel — the fixed bump that every partial sum is a weighted average against | [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md) |
| $f(x^+)$, $f(x^-)$ | the one-sided limits at $x$; they differ exactly at a jump | [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md) |
| $\operatorname{Si}(z)=\int_0^z\frac{\sin t}{t}dt$ | the sine integral; $\operatorname{Si}(\pi)\approx1.852$ is the number behind the Gibbs overshoot | [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md) |
| $\xi$ | **ordinary** frequency — cycles per unit $x$ (Hz when $x$ is seconds). The course's default frequency variable | [2.1](lessons/02-01-series-to-fourier-transform.md) |
| $\omega=2\pi\xi$ | **angular** frequency — radians per unit $x$. Only appears when translating another text's formula | [2.1](lessons/02-01-series-to-fourier-transform.md) |
| $\hat f(\xi)$ | the Fourier transform of $f$ — how much of the pure wave at frequency $\xi$ is hiding inside $f$ | [2.1](lessons/02-01-series-to-fourier-transform.md) |
| $\operatorname{sinc}(x)=\frac{\sin\pi x}{\pi x}$ | the **normalized** sinc: value $1$ at $0$, zero at every nonzero integer | [2.1](lessons/02-01-series-to-fourier-transform.md) |
| $\mathcal S$ | Schwartz class — the "clean room" of smooth, faster-than-any-power-decaying functions | [2.1](lessons/02-01-series-to-fourier-transform.md) |
| $\Pi$ (also $B$) | the unit box: $1$ on $\lvert x\rvert<\tfrac12$, else $0$ | [2.1](lessons/02-01-series-to-fourier-transform.md) |
| $\Lambda$ | the unit triangle $1-\lvert x\rvert$ on $\lvert x\rvert<1$, else $0$ — the box convolved with itself | [2.1](lessons/02-01-series-to-fourier-transform.md) |
| $f*g$ | convolution — flip $g$, slide it to $x$, record the overlap | [2.3](lessons/02-03-convolution-theorem.md) |
| $h$, $\hat h$ | a filter's impulse response, and its **transfer function** (the per-frequency volume knob) | [2.3](lessons/02-03-convolution-theorem.md) |
| $\phi_\varepsilon$ | an approximate identity: a fixed unit-area bump squeezed to width $\varepsilon$ | [2.3](lessons/02-03-convolution-theorem.md) |
| $\Delta x$, $\Delta\xi$ | the spreads — standard deviations of the **energy** densities $\lvert f\rvert^2$ and $\lvert\hat f\rvert^2$ | [2.4](lessons/02-04-plancherel-uncertainty.md) |
| $\delta$, $\delta_a$ | the Dirac delta at the origin, and the unit spike at $x=a$ | [3.1](lessons/03-01-dirac-delta-sifting.md) |
| $H$ | Heaviside step — the switch that turns on at $0$ | [3.1](lessons/03-01-dirac-delta-sifting.md) |
| $\varphi$, $C_c^\infty$ | a test function (smooth probe), and the class of smooth compactly supported probes | [3.2](lessons/03-02-distributions-weak-derivatives.md) |
| $\langle T,\varphi\rangle$ | a distribution $T$ acting on the probe $\varphi$ — the *only* thing $T$ ever does | [3.2](lessons/03-02-distributions-weak-derivatives.md) |
| $\operatorname{III}_T$ | Dirac comb — an infinite train of unit spikes spaced $T$ apart | [3.3](lessons/03-03-fourier-transforms-distributions.md) |
| $T_s$, $f_s=1/T_s$ | sampling interval and sampling rate (samples per unit time) | [4.1](lessons/04-01-sampling-nyquist.md) |
| $B$ | bandwidth — the top frequency present in a band-limited signal (**not** the box here) | [4.1](lessons/04-01-sampling-nyquist.md) |
| $X_k$ | the $k$-th DFT bin: how much of the wave making $k$ turns over $N$ samples is present | [4.2](lessons/04-02-dft-fft.md) |
| $\omega_N=e^{-2\pi i/N}$ | the fundamental $N$-th root of unity — one clockwise notch around the circle | [4.2](lessons/04-02-dft-fft.md) |
| $F$ | the DFT matrix, $F_{kn}=\omega_N^{kn}$ | [4.2](lessons/04-02-dft-fft.md) |
| $\kappa$, $c$ | thermal diffusivity (heat equation) and wave speed (wave equation) | [4.3](lessons/04-03-heat-wave-equations.md) |
| $\lambda_n$, $X_n$ | the eigenvalue and eigenmode the boundary conditions allow | [4.3](lessons/04-03-heat-wave-equations.md) |

## Definitions

### Fundamental period and frequency

The shortest shift that leaves the function looking identical, and how many of
those repeats fit into one unit of $x$.

$$f(x+T)=f(x)\ \ \forall x,\qquad \omega=\frac{2\pi}{T}\ \text{(angular)},\qquad \frac1T\ \text{(ordinary)}$$

*Introduced:* [1.1](lessons/01-01-periodic-functions-fourier-coefficients.md)

### Fourier series

Write a periodic function in coordinates along the pure-wave "axes" — its average
value plus a stack of harmonics. Two equivalent languages: real (sines and
cosines) and complex (one exponential per signed frequency).

$$f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}\big(a_n\cos nx+b_n\sin nx\big)=\sum_{n=-\infty}^{\infty}c_n e^{inx}$$

*Introduced:* [1.1](lessons/01-01-periodic-functions-fourier-coefficients.md)

### Function inner product

The dot product with the sum over coordinates replaced by an integral over
points. Everything geometric — length, angle, perpendicular, projection —
transfers to functions through it.

$$\langle f,g\rangle=\int f(x)\,\overline{g(x)}\,dx,\qquad \lVert f\rVert^2=\langle f,f\rangle=\int\lvert f\rvert^2$$

**Watch the normalization:** [1.2](lessons/01-02-orthogonal-systems-projection.md)
uses the plain $\int_{-\pi}^{\pi}$ (so $\lVert e^{inx}\rVert^2=2\pi$), while
[1.4](lessons/01-04-mean-square-parseval.md) uses the $\tfrac{1}{2\pi}$-averaged
version (so $\lVert e^{inx}\rVert^2=1$ and Parseval reads $\sum\lvert c_n\rvert^2$
with no prefactor). Pick one and keep the axis and the coefficient consistent
with it — the reconstructed function is the same either way.

*Introduced:* [1.2](lessons/01-02-orthogonal-systems-projection.md)

### Orthonormal system

A family of functions that are mutually perpendicular and each of unit length —
a set of coordinate axes for function space.

$$\langle e_n,e_m\rangle=\delta_{nm},\qquad e_n(x)=\tfrac{1}{\sqrt{2\pi}}e^{inx}$$

*Introduced:* [1.2](lessons/01-02-orthogonal-systems-projection.md)

### Best approximation

Among everything you can build from the frequencies $-N\dots N$, the Fourier
partial sum is the closest to $f$ in energy — and it's the *only* closest one.
Reason: the error $f-S_Nf$ is perpendicular to the whole subspace, so Pythagoras
does the rest.

$$\lVert f-S_N f\rVert\le\lVert f-g\rVert\ \ \text{for all }g\in V_N,\ \text{equality only at } g=S_Nf$$

*Introduced:* [1.2](lessons/01-02-orthogonal-systems-projection.md)

### Dirichlet kernel

The one universal bump that every partial sum is a weighted local average
against — tall and narrow at the center, with side-ripples that never lose their
total strength.

$$D_N(u)=\sum_{n=-N}^{N}e^{inu}=\frac{\sin\!\big((N+\tfrac12)u\big)}{\sin(u/2)},\qquad S_Nf=f*D_N$$

*Introduced:* [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md)

### Three modes of convergence

Three genuinely different claims about "the series equals the function," from
weakest to strongest guarantee at a point.

- **Pointwise:** $S_Nf(x)\to$ something at each $x$ separately (at a jump, the midpoint).
- **Mean-square ($L^2$):** the *total* squared error $\lVert f-S_Nf\rVert\to0$; blind to any single point.
- **Uniform:** one error bar shrinks over the whole line at once. Impossible near a jump, since each $S_Nf$ is continuous.

*Introduced:* [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md), [1.4](lessons/01-04-mean-square-parseval.md)

### Gibbs phenomenon

Near a jump, the partial sums always shoot past the true value by a fixed
fraction of the jump height that no amount of extra terms removes. The spike
narrows and slides toward the jump; its height is frozen.

$$\text{overshoot}=\alpha J,\qquad \alpha=\tfrac{1}{\pi}\operatorname{Si}(\pi)-\tfrac12\approx0.0895$$

*Introduced:* [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md)

### Fourier transform

A Fourier series with the period cranked to infinity: the discrete overtones blur
into a continuum, and the reconstruction sum becomes an integral. Correlate $f$
against a pure wave and integrate.

$$\hat f(\xi)=\int_{-\infty}^{\infty} f(x)e^{-2\pi i x\xi}dx,\qquad f(x)=\int_{-\infty}^{\infty}\hat f(\xi)e^{2\pi i x\xi}d\xi$$

*Introduced:* [2.1](lessons/02-01-series-to-fourier-transform.md)

### Schwartz class

The clean room: smooth functions whose every derivative decays faster than any
power of $x$. The transform maps it onto itself, so all the algebra is rigorous
there. The Gaussian is the poster child; the box is **not** in it.

$$\mathcal S=\{f: \sup_x \lvert x\rvert^m\lvert f^{(k)}(x)\rvert<\infty\ \ \forall m,k\}$$

*Introduced:* [2.1](lessons/02-01-series-to-fourier-transform.md)

### Convolution

Sliding-and-averaging: flip one function, slide it to $x$, record how much it
overlaps the other. Smooths, and widens (supports add).

$$(f*g)(x)=\int_{-\infty}^{\infty} f(y)\,g(x-y)\,dy$$

*Introduced:* [2.3](lessons/02-03-convolution-theorem.md)

### Impulse response and transfer function

A linear time-invariant filter is fully described by what it outputs when fed a
single spike ($h$); in frequency it does nothing but multiply the spectrum by
$\hat h$, one volume knob per frequency.

$$\text{output}=\text{input}*h\quad\Longleftrightarrow\quad \widehat{\text{output}}=\hat h\cdot\widehat{\text{input}}$$

*Introduced:* [2.3](lessons/02-03-convolution-theorem.md)

### Approximate identity

A fixed unit-area bump squeezed narrower and narrower. Convolving with it changes
$f$ less and less, so in the limit it changes nothing — the honest stand-in for
$\delta$ before $\delta$ exists.

$$\phi_\varepsilon(x)=\tfrac1\varepsilon\phi\!\big(\tfrac{x}{\varepsilon}\big),\quad \textstyle\int\phi=1\ \Longrightarrow\ f*\phi_\varepsilon\to f$$

*Introduced:* [2.3](lessons/02-03-convolution-theorem.md)

### Energy spectral density

The energy per unit frequency. Integrate it over a band and you get how much of
the signal's energy lives in that band — literally what a spectrum analyzer
displays.

$$\lvert\hat f(\xi)\rvert^2,\qquad E_{[\xi_1,\xi_2]}=\int_{\xi_1}^{\xi_2}\lvert\hat f\rvert^2 d\xi$$

*Introduced:* [2.4](lessons/02-04-plancherel-uncertainty.md)

### Spread

How wide a normalized signal is, measured as the standard deviation of its
**energy** density — not of the function itself.

$$(\Delta x)^2=\frac{\int x^2\lvert f\rvert^2 dx}{\int\lvert f\rvert^2 dx},\qquad (\Delta\xi)^2=\frac{\int \xi^2\lvert\hat f\rvert^2 d\xi}{\int\lvert\hat f\rvert^2 d\xi}$$

*Introduced:* [2.4](lessons/02-04-plancherel-uncertainty.md)

### Dirac delta

Not a function you evaluate — a spike you integrate against, and all it ever does
is sample. "Zero width, infinite height, area exactly $1$" is a cartoon; the
sifting property is the definition.

$$\int_{-\infty}^{\infty} f(x)\,\delta(x-a)\,dx=f(a)$$

*Introduced:* [3.1](lessons/03-01-dirac-delta-sifting.md)

### Heaviside step

The switch that turns on at the origin. Its (weak) derivative is a delta sitting
exactly at the jump.

$$H(x)=\begin{cases}0,&x<0\\ 1,&x>0\end{cases},\qquad H'=\delta$$

*Introduced:* [3.1](lessons/03-01-dirac-delta-sifting.md), proved in [3.2](lessons/03-02-distributions-weak-derivatives.md)

### Test function

A smooth probe that switches off entirely far from the origin. Compact support is
load-bearing: it is the only reason boundary terms vanish when you integrate by
parts.

$$\varphi\in C_c^\infty(\mathbb{R}):\ \varphi\ \text{infinitely differentiable},\ \varphi\equiv0\ \text{outside a bounded interval}$$

*Introduced:* [3.2](lessons/03-02-distributions-weak-derivatives.md)

### Distribution

An object defined only by the weighted averages it produces — a machine that eats
a smooth probe and returns a number, linearly and continuously. Ordinary
functions are distributions in disguise (they act by integration); $\delta$ is
one that no function produces.

$$\langle T,\varphi\rangle\in\mathbb{R};\qquad \langle f,\varphi\rangle=\int f\varphi,\qquad \langle\delta_a,\varphi\rangle=\varphi(a)$$

Two distributions are **equal** exactly when they act identically on every probe
— which is how every identity in Module 3 is proved.

*Introduced:* [3.2](lessons/03-02-distributions-weak-derivatives.md)

### Weak derivative

To differentiate something too rough to differentiate, hand the derivative to the
smooth probe instead and flip the sign. Forced by integration by parts, so it
agrees with the classical derivative whenever that exists — and it lets you
differentiate *anything*, forever.

$$\langle T',\varphi\rangle=-\langle T,\varphi'\rangle,\qquad \langle T^{(k)},\varphi\rangle=(-1)^k\langle T,\varphi^{(k)}\rangle$$

*Introduced:* [3.2](lessons/03-02-distributions-weak-derivatives.md)

### Tempered distribution

A distribution tame enough to have a Fourier transform: it grows at most
polynomially, so it can be paired with rapidly-decaying Schwartz probes. Compact
support is too small a test class here — a transform spreads support everywhere —
so the probes are widened from $C_c^\infty$ to $\mathcal S$.

$$\langle\hat T,\varphi\rangle=\langle T,\hat\varphi\rangle\quad\text{for all }\varphi\in\mathcal S$$

Note the contrast with the weak derivative: the transform slides across the
pairing with **no** sign change.

*Introduced:* [3.3](lessons/03-03-fourier-transforms-distributions.md)

### Dirac comb

An infinite train of unit spikes at even spacing — the mathematical form of "read
the signal at every $T$ seconds."

$$\operatorname{III}_T(x)=\sum_{n=-\infty}^{\infty}\delta(x-nT)$$

*Introduced:* [3.3](lessons/03-03-fourier-transforms-distributions.md)

### Band-limited

A signal built only from frequencies below a ceiling $B$ — so it cannot wiggle
arbitrarily fast, which is exactly why finitely many dots can pin it down.

$$\hat f(\xi)=0\ \text{ for all }\lvert\xi\rvert>B$$

*Introduced:* [4.1](lessons/04-01-sampling-nyquist.md)

### Nyquist rate vs. Nyquist frequency

Two different things with confusingly similar names.

- **Nyquist rate** $=2B$: a *sampling speed* — how fast you must sample a signal of bandwidth $B$.
- **Nyquist frequency** $=f_s/2$: a *signal frequency* — the highest tone a given sampling rate can honestly carry.

*Introduced:* [4.1](lessons/04-01-sampling-nyquist.md)

### Aliasing

Undersample a tone and it disguises itself as a lower one: the spectral replicas
overlap and a high frequency folds down into the representable band, producing a
plausible wrong signal rather than audible noise. Irreversible.

$$f_{\text{alias}}=\lvert f_0-kf_s\rvert\quad\text{for the integer }k\text{ with }\lvert f_0-kf_s\rvert\le\tfrac{f_s}{2}$$

*Introduced:* [4.1](lessons/04-01-sampling-nyquist.md)

### Discrete Fourier transform

The honest Fourier analysis of a finite list: dot the $N$ samples against each of
the $N$ waves the grid can distinguish (the $N$-th roots of unity).

$$X_k=\sum_{n=0}^{N-1}x_n\,e^{-2\pi i kn/N},\qquad x_n=\frac1N\sum_{k=0}^{N-1}X_k\,e^{+2\pi i kn/N}$$

*Introduced:* [4.2](lessons/04-02-dft-fft.md)

### Spectral leakage

A sinusoid gives one clean spike only if a whole number of its periods fits the
window (its frequency is an exact multiple of the bin spacing $f_s/N$).
Otherwise no basis wave matches it and its energy smears across every bin; a
tapering window (Hann, Hamming) suppresses the sidelobes at the cost of blurrier
bins.

*Introduced:* [4.2](lessons/04-02-dft-fft.md)

### Eigenmode expansion

The shapes a boundary condition allows are the ones a second derivative
reproduces up to a constant. Expand the initial data in those modes, evolve each
one independently by its own scalar ODE, superpose. This is the whole method.

$$X''+\lambda X=0,\ X(0)=X(L)=0\ \Longrightarrow\ \lambda_n=\Big(\tfrac{n\pi}{L}\Big)^2,\ X_n=\sin\tfrac{n\pi x}{L}$$

*Introduced:* [4.3](lessons/04-03-heat-wave-equations.md)

## Formulas and rules

### Fourier coefficient formulas

Each coefficient is $f$ dotted with a single harmonic, normalized by that
harmonic's own length. On $[-\pi,\pi]$ (period $2\pi$):

$$a_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos nx\,dx,\qquad b_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin nx\,dx,\qquad c_n=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx$$

The $\tfrac{a_0}{2}$ in the series (rather than $a_0$) is exactly what makes the
$n=0$ case obey the same formula: $\tfrac{a_0}{2}=\tfrac{1}{2\pi}\int f$ is the mean.

On a general period $T$ (frequencies $\xi_n=n/T$), which is where Module 2 starts:

$$f(x)=\sum_n c_n e^{2\pi i\xi_n x},\qquad c_n=\frac1T\int_{-T/2}^{T/2}f(x)e^{-2\pi i\xi_n x}dx$$

*From* [1.1](lessons/01-01-periodic-functions-fourier-coefficients.md) *and* [2.1](lessons/02-01-series-to-fourier-transform.md)

### Orthogonality relations

The engine behind every coefficient formula: distinct harmonics are
perpendicular, and a harmonic against itself has length-squared $\pi$ (**not**
$2\pi$ — a cosine spends half its energy at each sign).

| Integral over $[-\pi,\pi]$ | Value ($m,n\ge1$) |
|---|---|
| $\int\cos mx\,\cos nx\,dx$ | $\pi\,\delta_{mn}$ |
| $\int\sin mx\,\sin nx\,dx$ | $\pi\,\delta_{mn}$ |
| $\int\sin mx\,\cos nx\,dx$ | $0$ (always — the integrand is odd) |
| $\int\cos nx\,dx=\int\sin nx\,dx$ | $0$ |
| $\int 1\,dx$ | $2\pi$ |
| $\int e^{imx}\overline{e^{inx}}\,dx$ | $2\pi\,\delta_{mn}$ |

All of them reduce to one fact: $\int_{-\pi}^{\pi}\cos kx\,dx$ is $0$ for a
nonzero integer $k$ (a whole number of periods) and $2\pi$ for $k=0$. Get there
with the product-to-sum identities.

*From* [1.1](lessons/01-01-periodic-functions-fourier-coefficients.md)

### Real ↔ complex dictionary

$$c_n=\frac{a_n-i\,b_n}{2},\quad c_{-n}=\frac{a_n+i\,b_n}{2}\ (n\ge1),\quad c_0=\frac{a_0}{2}$$
$$a_n=c_n+c_{-n},\qquad b_n=i\,(c_n-c_{-n})$$

For a **real** $f$ this collapses to $c_{-n}=\overline{c_n}$, hence
$a_n=2\,\Re c_n$ and $b_n=-2\,\Im c_n$. Use exponentials for $e^x$-like
integrands and for anything heading toward Module 2; use sines/cosines when
symmetry hands you a pure series.

**Symmetry shortcut — check this before computing anything.** $f$ even
$\Rightarrow$ all $b_n=0$ (pure cosine series); $f$ odd $\Rightarrow$ all
$a_n=0$ (pure sine series).

*From* [1.1](lessons/01-01-periodic-functions-fourier-coefficients.md)

### Series in the library

The three worked examples the course reuses constantly — worth recognizing on
sight.

| Function on $(-\pi,\pi)$, extended $2\pi$-periodically | Series | Coefficient decay |
|---|---|---|
| square wave $\operatorname{sgn}(x)$ | $\dfrac{4}{\pi}\displaystyle\sum_{k\ge0}\frac{\sin((2k+1)x)}{2k+1}$ | $1/n$ (jump) |
| sawtooth $x$ | $\displaystyle\sum_{n\ge1}\frac{2(-1)^{n+1}}{n}\sin nx$ | $1/n$ (jump at $\pm\pi$) |
| triangle $\lvert x\rvert$ | $\dfrac{\pi}{2}-\dfrac{4}{\pi}\displaystyle\sum_{k\ge0}\frac{\cos((2k+1)x)}{(2k+1)^2}$ | $1/n^2$ (corner) |
| $x^2$ | $\dfrac{\pi^2}{3}+4\displaystyle\sum_{n\ge1}\frac{(-1)^n}{n^2}\cos nx$ | $1/n^2$ |

*From* [1.1](lessons/01-01-periodic-functions-fourier-coefficients.md), [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md), [1.4](lessons/01-04-mean-square-parseval.md)

### Convergence verdicts

What you're allowed to claim, given what you know about $f$.

| If $f$ is… | Then the series… | Cite |
|---|---|---|
| piecewise $C^1$ (finitely many jumps, finite one-sided derivatives) | converges **pointwise** at every $x$ to $\tfrac12\big(f(x^+)+f(x^-)\big)$ — the midpoint at a jump | Dirichlet's theorem, [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md) |
| such that $\sum_n\lvert c_n\rvert<\infty$ | converges **uniformly**, to a continuous limit (Weierstrass $M$-test) | [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md) |
| continuous **and** piecewise $C^1$ | has absolutely summable coefficients, hence converges **uniformly** | [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md) |
| discontinuous anywhere | can **never** converge uniformly there (a uniform limit of continuous functions is continuous) | [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md) |
| square-integrable, nothing more | converges in **mean-square**: $\lVert f-S_Nf\rVert\to0$ (completeness of the trig system) | [1.4](lessons/01-04-mean-square-parseval.md) |

Near a jump of height $J$ the partial sums peak at $f(x_0^+)+0.0895\,J$, with the
peak at $\lvert x-x_0\rvert\approx\pi/(N+1)$ — height frozen, position and width
shrinking.

*From* [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md) *and* [1.4](lessons/01-04-mean-square-parseval.md)

### Bessel and Parseval for series

Bessel is the inequality you always have; Parseval is the equality you get once
the system is **complete** (nothing left over). Both say: energy is Pythagoras in
infinitely many dimensions.

$$\text{Bessel:}\quad \sum_{n=-N}^{N}\lvert c_n\rvert^2\le\lVert f\rVert^2\qquad\text{(any orthonormal system, even a deficient one)}$$
$$\text{Parseval (complex):}\quad \frac{1}{2\pi}\int_{-\pi}^{\pi}\lvert f\rvert^2 dx=\sum_{n=-\infty}^{\infty}\lvert c_n\rvert^2$$
$$\text{Parseval (real):}\quad \frac{1}{\pi}\int_{-\pi}^{\pi}\lvert f\rvert^2 dx=\frac{a_0^2}{2}+\sum_{n=1}^{\infty}\big(a_n^2+b_n^2\big)$$

The gap $\lVert f\rVert^2-\sum\lvert c_n\rvert^2$ is exactly the leftover error
$\lVert f-S_Nf\rVert^2$. The lone $\tfrac{a_0^2}{2}$ carries half-weight because
$\cos 0x=1$ has twice the norm of the other cosines.

**The trick worth remembering:** pick a function you can both find coefficients
for *and* integrate the square of, and Parseval hands you a numerical series.
Standard harvests: $\sum 1/n^2=\pi^2/6$ (sawtooth), $\sum 1/(2k+1)^2=\pi^2/8$
(square/triangle wave), $\sum 1/n^4=\pi^4/90$ (from $x^2$).

*From* [1.2](lessons/01-02-orthogonal-systems-projection.md) *and* [1.4](lessons/01-04-mean-square-parseval.md)

### Smoothness ↔ decay

The single most useful rule of thumb in the subject, and it holds in both the
series and the transform world: **roughness in $x$ means a fat high-frequency
tail; smoothness means the spectrum collapses toward the origin.** Each extra
derivative of smoothness buys another factor of $1/n$ (or $1/\xi$).

| Regularity of $f$ | Coefficient / spectrum decay |
|---|---|
| jump discontinuity | $\sim 1/n$, $\sim1/\xi$ — not summable, so Gibbs survives |
| continuous with a corner (jump in $f'$) | $\sim1/n^2$, $\sim1/\xi^2$ — summable, so uniform convergence |
| $k$ integrable derivatives | $\lvert\hat f(\xi)\rvert\le M/(2\pi\lvert\xi\rvert)^k$ |
| $C^\infty$ / Schwartz (Gaussian) | faster than any power |

*From* [1.4](lessons/01-04-mean-square-parseval.md) *and* [2.2](lessons/02-02-properties-derivative-rule.md)

### Transform pairs

Every pair below is in **this course's convention** ($2\pi$ in the exponent,
minus sign forward). Read it in either direction: the table's right column is
also a *function* whose transform is the reflected left column.

| $f(x)$ | $\hat f(\xi)$ | Note |
|---|---|---|
| $\Pi(x)$: $1$ on $\lvert x\rvert<\tfrac12$ | $\operatorname{sinc}(\xi)=\dfrac{\sin\pi\xi}{\pi\xi}$ | zeros at every nonzero integer; $1/\xi$ tail |
| $1$ on $\lvert x\rvert<T$ (half-width $T$) | $2T\operatorname{sinc}(2T\xi)=\dfrac{\sin(2\pi T\xi)}{\pi\xi}$ | first zero at $\xi=1/(2T)$ |
| $\Lambda(x)=1-\lvert x\rvert$ on $\lvert x\rvert<1$ | $\operatorname{sinc}^2(\xi)$ | $=\Pi*\Pi$, so the transform squares; $1/\xi^2$ |
| $\Pi*\Pi*\Pi$ | $\operatorname{sinc}^3(\xi)$ | $1/\xi^3$; quadratic B-spline |
| $e^{-ax}H(x)$, $a>0$ | $\dfrac{1}{a+2\pi i\xi}$ | complex (not even); $\lvert\hat f\rvert$ is a Lorentzian |
| $e^{-a\lvert x\rvert}$, $a>0$ | $\dfrac{2a}{a^2+4\pi^2\xi^2}$ | real and even; corner $\Rightarrow$ $1/\xi^2$ |
| $e^{-\pi x^2}$ | $e^{-\pi\xi^2}$ | **its own transform** — only in this convention |
| $e^{-\pi a x^2}$, $a>0$ | $\dfrac{1}{\sqrt a}e^{-\pi\xi^2/a}$ | the scaling rule applied to the line above |
| $x\,e^{-\pi x^2}$ | $-i\,\xi\,e^{-\pi\xi^2}$ | real odd $\Rightarrow$ purely imaginary odd |
| $\delta(x)$ | $1$ | the **constant function** $1$: a spike holds every frequency equally |
| $\delta(x-a)$ | $e^{-2\pi i a\xi}$ | shifting a spike is a pure phase |
| $1$ | $\delta(\xi)$ | a DC hum is pure zero-frequency |
| $e^{2\pi i a x}$ | $\delta(\xi-a)$ | one pure wave, one sharp line |
| $\cos(2\pi\xi_0 x)$ | $\tfrac12\big[\delta(\xi-\xi_0)+\delta(\xi+\xi_0)\big]$ | symmetric real pair |
| $\sin(2\pi\xi_0 x)$ | $\tfrac{1}{2i}\big[\delta(\xi-\xi_0)-\delta(\xi+\xi_0)\big]$ | antisymmetric imaginary pair |
| $\delta(x-a)+\delta(x+a)$ | $2\cos(2\pi a\xi)$ | the cosine pair read backwards (duality) |
| $\operatorname{III}_T(x)$ | $\tfrac1T\operatorname{III}_{1/T}(\xi)$ | comb $\to$ comb, **reciprocal** spacing and weight $1/T$ |

Two free sanity checks on any transform: $\hat f(0)=\int f$ (the zero-frequency
component is the total area) and $f(0)=\int\hat f$.

*From* [2.1](lessons/02-01-series-to-fourier-transform.md), [2.2](lessons/02-02-properties-derivative-rule.md), [2.3](lessons/02-03-convolution-theorem.md), [2.4](lessons/02-04-plancherel-uncertainty.md), [3.3](lessons/03-03-fourier-transforms-distributions.md)

### Transform properties

You will almost never compute a transform from its integral twice. Know a handful
of pairs plus this table and every shifted, stretched, modulated, differentiated
cousin falls out by algebra. Constants below are locked to the course convention.

| Do this to $f$ | Transform becomes | Plain-English |
|---|---|---|
| $af+bg$ | $a\hat f+b\hat g$ | linearity |
| $f(x-a)$ | $e^{-2\pi i a\xi}\,\hat f(\xi)$ | **delay = linear phase**; $\lvert\hat f\rvert$ unchanged |
| $e^{2\pi i b x}f(x)$ | $\hat f(\xi-b)$ | **modulation**: multiply by a wave, slide the spectrum (AM radio) |
| $f(ax)$, $a\neq0$ | $\dfrac{1}{\lvert a\rvert}\hat f\!\big(\tfrac{\xi}{a}\big)$ | **squeeze in time = spread in frequency** (area conserved) |
| $f(-x)$ | $\hat f(-\xi)$ | the $a=-1$ case; no stray minus on the amplitude |
| $f'(x)$ | $2\pi i\xi\,\hat f(\xi)$ | **derivative rule** — calculus becomes arithmetic |
| $f^{(k)}(x)$ | $(2\pi i\xi)^k\,\hat f(\xi)$ | in particular $\partial_x^2\mapsto-4\pi^2\xi^2$ |
| $x\,f(x)$ | $-\dfrac{1}{2\pi i}\dfrac{d}{d\xi}\hat f(\xi)=\dfrac{i}{2\pi}\hat f{}'(\xi)$ | the dual rule — same statement seen from the other room |
| $f*g$ | $\hat f\cdot\hat g$ | **convolution theorem**: hard integral becomes a product |
| $f\cdot g$ | $\hat f*\hat g$ | the dual — product on one side is convolution on the other, **never the same side** |
| — | $\displaystyle\int\lvert f\rvert^2dx=\int\lvert\hat f\rvert^2d\xi$ | **Plancherel**: energy is conserved |
| — | $\langle f,g\rangle=\langle\hat f,\hat g\rangle$ | polarized (Parseval) form: inner products too, so the transform is unitary |

**Symmetry rules** (symmetry, not reality, controls the transform's reality):

| $f$ is… | $\hat f$ is… |
|---|---|
| real | conjugate-symmetric: $\hat f(-\xi)=\overline{\hat f(\xi)}$ |
| real and even | real and even |
| real and odd | purely imaginary and odd |

*From* [2.2](lessons/02-02-properties-derivative-rule.md), [2.3](lessons/02-03-convolution-theorem.md), [2.4](lessons/02-04-plancherel-uncertainty.md)

### Convolution facts

$$f*g=g*f,\qquad (f*g)*h=f*(g*h),\qquad \text{bilinear in each slot}$$
$$f*\delta=f,\qquad f*\delta_a=f(\cdot-a)\ \ (\text{an ideal delay})$$

Convolution **smooths** and **widens** — supports add. Each extra convolution
buys one more derivative of smoothness, visible as one more power of decay in the
spectrum ($\operatorname{sinc}\to\operatorname{sinc}^2\to\operatorname{sinc}^3$).

A filter can only reweight what's already there: any $\xi$ where the input has no
energy stays empty, and any $\xi$ with $\hat h(\xi)=0$ is killed forever.

*From* [2.3](lessons/02-03-convolution-theorem.md) *and* [3.1](lessons/03-01-dirac-delta-sifting.md)

### Uncertainty principle

You cannot be narrow in time and narrow in frequency at once. Plancherel fixes
the total energy, so shoving it into a thin time window leaves the frequency
energy nowhere to go but wide.

$$\Delta x\,\Delta\xi\ \ge\ \frac{1}{4\pi},\qquad\text{equality iff } f(x)=A\,e^{-\pi a x^2}\ (\text{a Gaussian, any width})$$

The width product is **scale-invariant**: stretching time by $s$ multiplies
$\Delta x$ by $s$ and divides $\Delta\xi$ by $s$, so no amount of squeezing gets
you under the floor.

**Convention translations of the same theorem:** angular frequency
$\Delta x\,\Delta\omega\ge\tfrac12$; quantum mechanics with $p=h\xi$,
$\Delta x\,\Delta p\ge\hbar/2$.

*From* [2.4](lessons/02-04-plancherel-uncertainty.md)

### Delta calculus

| Rule | Statement |
|---|---|
| sifting | $\displaystyle\int f(x)\delta(x-a)dx=f(a)$, and $0$ if $a$ lies outside the interval of integration |
| unit area | $\displaystyle\int_{-\infty}^{\infty}\delta(x)\,dx=1$ |
| scaling | $\delta(ax)=\dfrac{1}{\lvert a\rvert}\delta(x)$; in particular $\delta(-x)=\delta(x)$ |
| shift-and-scale | $\delta(ax-b)=\dfrac{1}{\lvert a\rvert}\delta\!\big(x-\tfrac{b}{a}\big)$ |
| composition | $\delta(g(x))=\displaystyle\sum_i\frac{\delta(x-x_i)}{\lvert g'(x_i)\rvert}$ over the **simple** zeros $x_i$ of $g$ |
| convolution identity | $f*\delta=f$, $f*\delta_a=f(\cdot-a)$ |
| derivatives | $\langle\delta^{(k)},\varphi\rangle=(-1)^k\varphi^{(k)}(0)$; e.g. $\langle\delta',\varphi\rangle=-\varphi'(0)$ |
| jump rule | a jump of size $J=g(a^+)-g(a^-)$ contributes $J\delta_a$: $\ g'=g'_{\mathrm{cl}}+J\,\delta_a$ |

The composition rule's $1/\lvert g'(x_i)\rvert$ weights are the "density of
states" factors that appear whenever a physical constraint is written as a delta.

*From* [3.1](lessons/03-01-dirac-delta-sifting.md) *and* [3.2](lessons/03-02-distributions-weak-derivatives.md)

### Sampling and reconstruction

Sampling is multiplication by a comb in time, hence **convolution with a comb in
frequency** — which just photocopies the spectrum at every multiple of $f_s$.

$$f_{\text{samp}}(t)=f(t)\operatorname{III}_{T_s}(t)\quad\Longrightarrow\quad \widehat{f_{\text{samp}}}(\xi)=f_s\sum_{k=-\infty}^{\infty}\hat f(\xi-kf_s)$$

**Nyquist–Shannon.** If $f$ is band-limited to $B$ and $f_s>2B$ (strict), the
replicas don't overlap, $f$ is completely determined by its samples, and

$$f(t)=\sum_{n=-\infty}^{\infty}f(nT_s)\,\operatorname{sinc}\!\Big(\frac{t-nT_s}{T_s}\Big).$$

Why sinc: snip out the baseband copy with an ideal low-pass box in frequency, and
multiplying by a box in frequency is convolving with a sinc in time — one sinc
dropped on each sample. It interpolates because $\operatorname{sinc}(m-n)=\delta_{mn}$.

If $f_s<2B$, use the aliasing formula in [Aliasing](#aliasing). The only fix is an
**anti-aliasing filter before the sampler**.

*From* [3.3](lessons/03-03-fourier-transforms-distributions.md) *and* [4.1](lessons/04-01-sampling-nyquist.md)

### DFT facts

$$X_k=\sum_{n=0}^{N-1}x_n\,\omega_N^{kn},\quad \omega_N=e^{-2\pi i/N};\qquad \sum_{n=0}^{N-1}\omega_N^{(k-l)n}=\begin{cases}N,&k\equiv l\!\!\pmod N\\ 0,&\text{else}\end{cases}$$

| Fact | Statement |
|---|---|
| bin $\to$ physical frequency | $f_k=\dfrac{k}{N}f_s$; bin $0$ is DC, bin $N/2$ is the Nyquist frequency $f_s/2$ |
| bins above $N/2$ | the **negative** frequencies; for real data $X_{N-k}=\overline{X_k}$ |
| magnitude vs. phase | $\lvert X_k\rvert$ says *which* wave is present; $\arg X_k$ says *when* it peaks (cosine real, sine imaginary) |
| FFT split | $X_k=E_k+\omega_N^k O_k$, $\ X_{k+N/2}=E_k-\omega_N^k O_k$, with $E,O$ the half-size DFTs of even/odd samples |
| cost | direct $\sim N^2$ multiplications; radix-2 FFT $\sim\tfrac N2\log_2 N$, i.e. $O(N\log N)$ |

The FFT returns the **exact same** $X_k$ — it is an algorithm for the DFT, not an
approximation or a different transform.

*From* [4.2](lessons/04-02-dft-fft.md)

### Heat and wave equations on an interval

Separate variables, let the boundary pick the modes, evolve each mode by its own
one-line rule, superpose. On $[0,L]$ with clamped ends the modes are
$\sin(n\pi x/L)$ with $\lambda_n=(n\pi/L)^2$, and $b_n$ are the Fourier **sine**
coefficients of the initial profile.

$$b_n=\frac{2}{L}\int_0^L f(x)\sin\!\Big(\frac{n\pi x}{L}\Big)dx$$

| Equation | Time factor | Solution |
|---|---|---|
| heat $u_t=\kappa u_{xx}$ | real exponential — **decay** | $u=\displaystyle\sum_n b_n\sin\!\big(\tfrac{n\pi x}{L}\big)e^{-\kappa(n\pi/L)^2 t}$ |
| wave $u_{tt}=c^2u_{xx}$ | sine/cosine — **oscillation, no decay** | $u=\displaystyle\sum_n \sin\!\big(\tfrac{n\pi x}{L}\big)\big[A_n\cos\omega_n t+B_n\sin\omega_n t\big]$, $\ \omega_n=\tfrac{n\pi c}{L}$ |

One time-derivative gives a first-order ODE in $t$ (decay); two give a
second-order one (ringing). The spatial factor is identical.

**Read off immediately:** heat decay rates go like $n^2$, so mode $10$ dies $100$
times faster than mode $1$ — diffusion is a low-pass filter in time, and any
initial roughness is erased the instant $t>0$. Wave frequencies $\omega_n=n\omega_1$
form an integer ladder, which is why a string sounds a definite pitch.

**d'Alembert in one line:** $\sin\tfrac{n\pi x}{L}\cos\omega_n t=\tfrac12\big[\sin\tfrac{n\pi(x-ct)}{L}+\sin\tfrac{n\pi(x+ct)}{L}\big]$ — every
standing wave is a right-mover plus a left-mover.

Released from rest ($u_t(x,0)=0$) means all $B_n=0$ and $A_n=b_n$.

*From* [4.3](lessons/04-03-heat-wave-equations.md)

## Assumed, not taught here

A Tier 1 course, so this list is short — but each of these is *used* here and
*derived* elsewhere.

| Fact | Where it's taught |
|---|---|
| Euler's formula $e^{i\theta}=\cos\theta+i\sin\theta$, complex modulus and conjugate | [complex-analysis 1.1](../complex-analysis/lessons/01-01-complex-numbers-geometry.md), [1.3](../complex-analysis/lessons/01-03-exponential-log-trig.md) |
| $n$-th roots of unity and their geometry (the DFT basis) | [complex-analysis 1.1](../complex-analysis/lessons/01-01-complex-numbers-geometry.md) |
| Angle-sum and double-angle identities (product-to-sum follows by adding them) | [trigonometry 3.2](../trigonometry/lessons/03-02-fundamental-identities.md) |
| Integration by parts — used in nearly every coefficient computation and in the derivative rule | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Improper integrals as limits, and when they converge | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| Swapping the order of a double integral (Fubini) — the step in the convolution-theorem proof | [calc-refresher 4.3](../calc-refresher/lessons/04-03-multiple-integrals.md) |
| The Gaussian integral $\int e^{-\alpha x^2}dx=\sqrt{\pi/\alpha}$ (polar-coordinates trick) | [calc-refresher 4.3](../calc-refresher/lessons/04-03-multiple-integrals.md) |
| Finite and infinite geometric sums (the $D_N$ telescoping, the root-of-unity sum) | [precalculus 3.3](../precalculus/lessons/03-03-series-and-infinite-geometric-sum.md) |
| Pointwise vs. uniform convergence; a uniform limit of continuous functions is continuous | [real-analysis 8.1](../real-analysis/lessons/08-01-pointwise-vs-uniform.md), [8.2](../real-analysis/lessons/08-02-what-uniform-convergence-preserves.md) |
| The Weierstrass $M$-test (used for every uniform-convergence claim on this card) | [real-analysis 8.2](../real-analysis/lessons/08-02-what-uniform-convergence-preserves.md) |
| A convergent series has terms tending to $0$; $p$-series convergence | [real-analysis 3.2](../real-analysis/lessons/03-02-convergence-tests.md), [calc-refresher 3.1](../calc-refresher/lessons/03-01-series-convergence-tests.md) |
| Cauchy–Schwarz inequality (Lesson 2.4's uncertainty proof leans on it; 1.2 does **not** state it) | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md), [functional-analysis 2.1](../functional-analysis/lessons/02-01-inner-products-cauchy-schwarz.md) |
| Orthogonal projection = least squares (the same normal-equations logic as $S_Nf$) | [linalg-refresher 4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| Completeness of $L^2$ and "the trig system is an orthonormal basis" — **stated, never proved** in [1.4](lessons/01-04-mean-square-parseval.md) | [functional-analysis 2.3](../functional-analysis/lessons/02-03-orthonormal-bases-fourier.md), projection theorem in [2.2](../functional-analysis/lessons/02-02-orthogonality-projection-theorem.md) |
| "Distribution = continuous linear functional on a test space" as dual-space machinery | [functional-analysis 3.2](../functional-analysis/lessons/03-02-dual-spaces-hahn-banach.md) |
| Solving a separable first-order ODE (the Gaussian's $\hat g{}'=-2\pi\xi\hat g$) | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| Solving $X''+\lambda X=0$ (the eigenvalue problem behind every mode in 4.3) | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Separation of variables for the heat and wave equations | [ode-refresher 4.2](../ode-refresher/lessons/04-02-intro-pdes-separation.md) |

**One genuine gap:** the **Riemann–Lebesgue lemma** ("the Fourier coefficients of
an integrable function tend to $0$") is invoked in the proof sketch of Dirichlet's
theorem in [1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md) and no
course in the library proves it. The $L^2$ case *is* proved here — it follows from
Bessel in [1.2](lessons/01-02-orthogonal-systems-projection.md) P3 — so lean on
that version. (Real-analysis 7.2's "Riemann–Lebesgue criterion" is a different
theorem, about which functions are Riemann integrable.)

## Pitfalls

### Conventions and constants

- **Never mix conventions.** Every constant on this card assumes the $2\pi$ is in the exponent: the derivative factor is $2\pi i\xi$ (not $i\xi$, not $2\pi\xi$), the uncertainty floor is $\tfrac{1}{4\pi}$, and $e^{-\pi x^2}$ is self-transforming. Under $\omega=2\pi\xi$ those become $i\omega$, $\tfrac12$, and $e^{-x^2/2}$ with a prefactor. *([2.1](lessons/02-01-series-to-fourier-transform.md), [2.2](lessons/02-02-properties-derivative-rule.md), [2.4](lessons/02-04-plancherel-uncertainty.md))*
- **$\int_{-\pi}^{\pi}\cos^2 nx\,dx=\pi$, not $2\pi$** — that $\pi$ is precisely the normalizer in the $a_n$ formula; get it wrong and every amplitude is off by $2\times$. *([1.1](lessons/01-01-periodic-functions-fourier-coefficients.md))*
- **The two inner-product normalizations differ across Module 1.** Lesson 1.2 uses $\int_{-\pi}^{\pi}f\bar g$; Lesson 1.4 uses $\tfrac{1}{2\pi}\int_{-\pi}^{\pi}f\bar g$. The reconstructed series is identical, but a coefficient copied between them is off by $\sqrt{2\pi}$. *([1.2](lessons/01-02-orthogonal-systems-projection.md), [1.4](lessons/01-04-mean-square-parseval.md))*
- **Don't drop the $\tfrac12$ on $a_0^2$ in real-form Parseval**, and don't confuse $a_0$ with the constant term $\tfrac{a_0}{2}$. The DC mode carries half-weight because $\cos 0x=1$ has twice the norm of the other cosines. *([1.4](lessons/01-04-mean-square-parseval.md))*
- **The $\tfrac1T$ in the comb identity is not decoration** — spacing *and* weight are both $1/T$. Drop it and Poisson summation and the energy bookkeeping both break. *([3.3](lessons/03-03-fourier-transforms-distributions.md))*
- **Symbols get reused.** $B$ is the box in Module 2 and the bandwidth in Module 4; $T$ is the period in 1.1, the sampling interval $T_s$ in 4.1, a distribution in 3.2, and the time factor in 4.3; $\omega$ is angular frequency in 2.1, a root of unity $\omega_N$ in 4.2, and a modal frequency $\omega_n$ in 4.3. Read the module, not just the letter.

### Series and convergence

- **Check even/odd symmetry before computing anything** — half your coefficients may be zero for free. *([1.1](lessons/01-01-periodic-functions-fourier-coefficients.md))*
- **The complex sum $\sum c_n e^{inx}$ is not complex-valued for real $f$**: $c_{-n}=\overline{c_n}$ makes the $\pm n$ terms conjugate. Negative frequencies are bookkeeping, not physical extras. *([1.1](lessons/01-01-periodic-functions-fourier-coefficients.md))*
- **At a jump the series reports the midpoint, not the function's value.** Redefining $f$ *at* the jump changes nothing — coefficients are integrals, blind to a single point. *([1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md))*
- **More terms never kill the Gibbs overshoot.** The bump narrows and migrates but keeps its $\approx0.0895$-of-the-jump height forever. Only its *width* shrinks — which is why mean-square convergence survives it. *([1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md), [1.4](lessons/01-04-mean-square-parseval.md))*
- **Pointwise convergence never upgrades itself to uniform at a jump.** Each $S_Nf$ is continuous, and a uniform limit of continuous functions is continuous. *([1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md))*
- **$D_N$ is not a nice bump.** Its total size $\tfrac{1}{2\pi}\int\lvert D_N\rvert$ grows like $\log N$ — that untameable tail *is* Gibbs, and it's why the Dirichlet kernel is not an approximate identity. *([1.3](lessons/01-03-convergence-pointwise-uniform-gibbs.md))*
- **Bessel is not Parseval.** Bessel's "$\le$" holds for *any* orthonormal system, including deficient ones; equality requires **completeness**, which is a theorem, not a definition. *([1.2](lessons/01-02-orthogonal-systems-projection.md))*
- **Mean-square convergence says nothing at any individual point.** Two functions differing on a zero-width set are indistinguishable in $L^2$. *([1.4](lessons/01-04-mean-square-parseval.md))*
- **"Orthogonal" means an integral vanishes**, not that two graphs look perpendicular. *([1.2](lessons/01-02-orthogonal-systems-projection.md))*

### Transforms and convolution

- **A real function need not have a real transform** — the one-sided exponential is the standing counterexample. *Symmetry*, not reality, controls it. *([2.1](lessons/02-01-series-to-fourier-transform.md))*
- **A delay changes only the phase**, never the magnitude spectrum: $\lvert\widehat{f(\cdot-a)}\rvert=\lvert\hat f\rvert$. *([2.2](lessons/02-02-properties-derivative-rule.md))*
- **Keep the absolute value in the scaling rule** $\tfrac{1}{\lvert a\rvert}$ — for $a<0$ the flipped limits supply it. *([2.2](lessons/02-02-properties-derivative-rule.md))*
- **Flip, don't just shift.** The convolution integrand is $g(x-y)$, never $g(y-x)$ or $g(x+y)$. The flip is invisible for even $g$ and bites the moment $g$ is asymmetric. *([2.3](lessons/02-03-convolution-theorem.md))*
- **Product and convolution are on opposite sides**: $\widehat{f*g}=\hat f\hat g$ but $\widehat{fg}=\hat f*\hat g$ — never the same side. *([2.3](lessons/02-03-convolution-theorem.md))*
- **An LTI filter cannot invent frequencies**, only reweight the ones already present; a frequency zeroed by $\hat h$ is gone for good. *([2.3](lessons/02-03-convolution-theorem.md))*
- **Not everything decays.** The box has jumps, so it isn't Schwartz and its sinc dies only like $1/\xi$ — slowly enough that $\int\lvert\operatorname{sinc}\rvert=\infty$ and inversion is only a conditional/limiting statement. *([2.1](lessons/02-01-series-to-fourier-transform.md))*
- **Plancherel needs finite energy**, not merely a convergent transform. A constant or a single sinusoid has infinite energy — those objects need Module 3. *([2.4](lessons/02-04-plancherel-uncertainty.md))*
- **Spreads are second moments of $\lvert f\rvert^2$**, not of $f$, and you must normalize the energy to $1$ first. *([2.4](lessons/02-04-plancherel-uncertainty.md))*

### Deltas and distributions

- **$\delta(0)$ is meaningless.** $\delta$ has no pointwise values; only $\int f\,\delta$ is defined. Likewise $\delta(x)^2$ is nonsense. Anything not ultimately inside a pairing with a smooth probe is suspect. Same for any distribution: it has actions, not values. *([3.1](lessons/03-01-dirac-delta-sifting.md), [3.2](lessons/03-02-distributions-weak-derivatives.md))*
- **A spike outside the interval contributes nothing.** $\int_a^b f\delta(x-c)dx=f(c)$ only when $c\in(a,b)$, else $0$ — and a spike sitting exactly on a limit is ambiguous, so avoid it. *([3.1](lessons/03-01-dirac-delta-sifting.md))*
- **Keep the absolute values** in $\delta(ax)=\tfrac{1}{\lvert a\rvert}\delta(x)$ and in the composition weights $1/\lvert g'(x_i)\rvert$; without them $\delta(-x)=-\delta(x)$, contradicting a symmetric positive-area spike. Composition also **fails at a double root** ($g'=0$). *([3.1](lessons/03-01-dirac-delta-sifting.md))*
- **The weak derivative's minus sign is the fingerprint of integration by parts.** Drop it and you get $H'=-\delta$ and every sign downstream is wrong. The Fourier transform, by contrast, slides across the pairing with **no** sign flip. *([3.2](lessons/03-02-distributions-weak-derivatives.md), [3.3](lessons/03-03-fourier-transforms-distributions.md))*
- **Compact support is load-bearing, not decoration** — it is the only reason the boundary term vanishes. (And it's exactly why the test class has to widen to $\mathcal S$ once transforms are involved.) *([3.2](lessons/03-02-distributions-weak-derivatives.md), [3.3](lessons/03-03-fourier-transforms-distributions.md))*
- **"Weak" describes the machinery, not a weaker conclusion** — the weak derivative *extends* the classical one and agrees with it whenever the classical one exists. *([3.2](lessons/03-02-distributions-weak-derivatives.md))*
- **$\hat\delta=1$ means the constant function $1$**, a flat spectrum across all $\xi$ — not the scalar $1$. *([3.3](lessons/03-03-fourier-transforms-distributions.md))*
- **Mind the modulation direction:** $e^{+2\pi i\xi_0x}\mapsto\delta(\xi-\xi_0)$ and $e^{-2\pi i\xi_0x}\mapsto\delta(\xi+\xi_0)$. Swap them and the sine's spectrum flips sign. *([3.3](lessons/03-03-fourier-transforms-distributions.md))*

### Sampling, DFT, and PDEs

- **Nyquist *rate* ($2B$, a sampling speed) is not the Nyquist *frequency* ($f_s/2$, a signal frequency).** Say "sample above the Nyquist rate." *([4.1](lessons/04-01-sampling-nyquist.md))*
- **$f_s=2B$ exactly is treacherous, not safe** — the copies touch and a tone sitting at $B$ lands on its own replica. The theorem needs the strict inequality; in practice leave a guard band. *([4.1](lessons/04-01-sampling-nyquist.md))*
- **Aliasing is irreversible and no post-processing undoes it.** Anti-aliasing must happen *before* the sampler. And a whole ladder of true frequencies produces identical samples, so the sampler cannot tell them apart. *([4.1](lessons/04-01-sampling-nyquist.md))*
- **Band-limited is an idealization** — sharp spectral edges force infinitely long tails, so real finite signals always alias a little. The game is pushing it below the noise floor. *([4.1](lessons/04-01-sampling-nyquist.md))*
- **A high bin index is not a high frequency.** Bins past $N/2$ are the negative frequencies; for real data bin $N-k$ is just the conjugate mirror of bin $k$. *([4.2](lessons/04-02-dft-fft.md))*
- **A single sinusoid gives one clean spike only if its frequency is an exact multiple of $f_s/N$** — otherwise its energy leaks across every bin. *([4.2](lessons/04-02-dft-fft.md))*
- **The FFT is not an approximation to the DFT**; it returns the identical bins, faster. *([4.2](lessons/04-02-dft-fft.md))*
- **Check whether the initial data is already a sine combination** before grinding out coefficient integrals — orthogonality guarantees the integral just re-derives what you can read off. *([4.3](lessons/04-03-heat-wave-equations.md))*
- **Heat decay rates are quadratic in $n$, not linear**: mode $10$ decays $100\times$ faster than mode $1$. *([4.3](lessons/04-03-heat-wave-equations.md))*
- **Don't mix the two clocks.** One time-derivative gives a real exponential (decay); two give sine/cosine (ringing, no decay). The spatial factor is the same. *([4.3](lessons/04-03-heat-wave-equations.md))*
- **A sine series is always $0$ at the endpoints** — that's the Dirichlet condition baked into the basis. For nonzero or unequal end temperatures, subtract the steady-state linear profile first and sine-expand the remainder. *([4.3](lessons/04-03-heat-wave-equations.md))*

# Fourier & Harmonic Analysis — Syllabus

> Mathematics · Tier 1 · ~14 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md), [ode-refresher](../ode-refresher/syllabus.md), [real-analysis](../real-analysis/syllabus.md) · Roadmap id: `fourier-analysis`

## Goal

Learn the one idea that reorganizes analysis, physics, and signal processing: any reasonable function is a superposition of pure waves, and switching to the wave picture turns hard problems (differentiation, convolution, PDEs) into easy ones. You'll compute Fourier series and transforms by hand, know exactly what "converges" means in the three senses that matter (pointwise, uniform, mean-square), tame the Dirac delta and a working slice of distribution theory, understand sampling and the DFT well enough to read an FFT spectrum, and cash it all out by solving the heat and wave equations.

Deliberately scoped: we take the Riemann-integral / classical road and treat $L^2$ as organizing intuition — the measure-theoretic completeness of $L^2$ and the projection theorem in full are `functional-analysis`. No abstract harmonic analysis on groups; wavelets get a one-sentence mention. This is the applied harmonic analysis a physicist, economist, or engineer actually uses, made honest.

## Dangerous Checklist

When you finish, you can:

- [ ] Compute the Fourier coefficients of a periodic function and reconstruct it as a series, choosing sine/cosine vs. complex-exponential form fluently
- [ ] Say precisely which mode of convergence (pointwise, uniform, or mean-square) holds for a given series, and explain why the Gibbs overshoot never goes away
- [ ] Use Parseval's identity to evaluate a numerical series (e.g. sum $1/n^2$) and to read a signal's energy off its spectrum
- [ ] Explain orthonormal function systems and "best approximation" as projection, without needing full Hilbert-space machinery
- [ ] Compute a Fourier transform from the definition, and apply the shift, scaling, modulation, and derivative rules to avoid recomputing
- [ ] State and use the convolution theorem to turn a convolution into a product (and back)
- [ ] Manipulate the Dirac delta correctly — its sifting property, derivatives, and Fourier transform — and say what a distribution actually is
- [ ] Apply the sampling theorem: find the Nyquist rate, recognize and predict aliasing, and reconstruct a band-limited signal
- [ ] Compute a small DFT by hand, explain what the FFT buys you, and interpret a magnitude spectrum
- [ ] Solve the heat and wave equations on an interval by separation of variables + Fourier series, and interpret the modes physically
- [ ] State the Fourier uncertainty principle and explain why a sharp pulse must have a broad spectrum

## Modules

### Module 1: Fourier series and convergence

Build the series, then confront the three genuinely different meanings of "the series equals the function."

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Periodic functions and Fourier coefficients | Compute $a_n,b_n$ (and complex $c_n$) for a given periodic function and reassemble the series | period and fundamental frequency, orthogonality of $\{\sin,\cos\}$, coefficient formulas, sine/cosine ↔ complex-exponential forms, even/odd symmetry |
| 1.2 | Orthogonal systems and the projection picture | See coefficients as inner products and partial sums as best $L^2$ approximations | function inner product $\langle f,g\rangle=\int f\bar g$, orthonormal systems, projection = best approximation, Bessel's inequality, the Hilbert-space viewpoint (light) |
| 1.3 | Convergence I: pointwise, uniform, and Gibbs | Predict where a series converges, when uniformly, and why jumps overshoot | Dirichlet kernel, Dirichlet's pointwise theorem, convergence to the midpoint at jumps, uniform convergence for smooth $f$, the Gibbs phenomenon (~9% overshoot) |
| 1.4 | Convergence II: mean-square and Parseval | Prove convergence in energy and turn it into numerical series and energy accounting | mean-square ($L^2$) convergence, completeness of the trig system (stated), Parseval's identity, evaluating $\sum 1/n^2$, decay of coefficients ↔ smoothness |

**Boss problem 1:** Take the square wave $f(x)=\operatorname{sgn}(x)$ on $(-\pi,\pi)$, extended $2\pi$-periodically. Derive its Fourier series $\frac{4}{\pi}\sum_{k\ge0}\frac{\sin((2k+1)x)}{2k+1}$ from the coefficient integrals, explain what value the series takes at $x=0$ and why, and describe the Gibbs overshoot near the jump. Then apply Parseval's identity to this series to prove $\sum_{k\ge0}\frac{1}{(2k+1)^2}=\frac{\pi^2}{8}$.

### Module 2: The Fourier transform and convolution

Let the period go to infinity: the sum of discrete modes becomes an integral over a continuum of frequencies, and the algebra gets even cleaner.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | From series to the Fourier transform | Derive $\hat f(\xi)=\int f(x)e^{-2\pi i x\xi}\,dx$ as the period-$\to\infty$ limit and compute first examples | period $\to\infty$ heuristic, forward/inverse transform, conventions (angular vs. ordinary frequency), transforms of the box, triangle, and one-sided exponential, the Schwartz class (light) |
| 2.2 | Properties and the derivative rule | Use symmetry, shift, scaling, modulation, and "derivative ↔ multiply by frequency" to avoid integrals | linearity, time/frequency shift, dilation/scaling, modulation, differentiation rule $\widehat{f'}=2\pi i\xi\,\hat f$, decay ↔ smoothness duality |
| 2.3 | Convolution and the convolution theorem | Turn a convolution into a product and read filtering as spectral shaping | convolution $f*g$, smoothing/averaging intuition, convolution theorem $\widehat{f*g}=\hat f\,\hat g$, filters and impulse response, approximate identities |
| 2.4 | Plancherel, energy, and the uncertainty principle | Conserve energy across domains and prove the sharp-pulse/broad-spectrum tradeoff | Plancherel/Parseval for the transform, the Gaussian as its own transform, energy spectral density, the Fourier uncertainty principle (statement + Gaussian equality case) |

**Boss problem 2:** Show the Gaussian $g(x)=e^{-\pi x^2}$ is its own Fourier transform (set up the ODE $\hat g{}'(\xi)=-2\pi\xi\,\hat g(\xi)$ from the derivative and multiplication rules and solve it). Then use the convolution theorem to show that convolving two Gaussians gives a Gaussian whose variance is the *sum* of the variances, and check that $g$ attains equality in the uncertainty principle — the tightest possible time–frequency spread. This Gaussian eigenfunction returns in `quantum-mechanics`.

### Module 3: The Dirac delta and distributions

Make the "infinitely tall, infinitely thin spike" rigorous — because sampling, PDEs, and quantum mechanics are unusable without it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Dirac delta and the sifting property | Manipulate $\delta$ as a limit of spikes and use $\int f(x)\delta(x-a)\,dx=f(a)$ correctly | delta as a limit of narrowing bumps, sifting/sampling property, $\delta$ as the identity for convolution, scaling $\delta(ax)$, the Heaviside step |
| 3.2 | Distributions and weak derivatives | Define a distribution by how it acts on test functions and differentiate things that aren't differentiable | test functions, distributions as continuous linear functionals, weak/distributional derivative, $H'=\delta$, derivative of $\delta$, why this rescues Fourier analysis |
| 3.3 | Fourier transforms of distributions | Transform constants, sinusoids, and the Dirac comb — the objects classical integrals can't reach | tempered distributions (light), $\hat 1=\delta$ and $\hat\delta=1$, transforms of $\cos,\sin$ as delta pairs, the Dirac comb and its self-duality (Poisson summation, informally) |

**Boss problem 3:** Working in the distribution sense, show that the derivative of the Heaviside step $H$ is $\delta$ by testing against a smooth compactly supported $\varphi$ and integrating by parts. Then compute the Fourier transform of $\cos(2\pi\xi_0 x)$ and of the Dirac comb $\sum_n\delta(x-nT)$, and explain in one sentence why the comb's self-duality is exactly the fact that a periodic sampling in time forces periodic replication in frequency — the hinge of Module 4.

### Module 4: Sampling, the DFT, and applications

Bring it to the computer and to physics: discretize, and then solve real equations.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Sampling and the Nyquist theorem | Find the Nyquist rate, recognize aliasing, and reconstruct a band-limited signal | band-limited signals, sampling as multiplication by a comb, spectral replication, Nyquist–Shannon theorem, aliasing, sinc interpolation/reconstruction |
| 4.2 | The DFT and a taste of the FFT | Compute a small DFT by hand and explain the $N\log N$ speedup and what a spectrum shows | discrete Fourier transform, roots of unity as a basis, DFT matrix, magnitude/phase spectrum, spectral leakage (brief), the FFT divide-and-conquer idea |
| 4.3 | Fourier methods for the heat and wave equations | Solve heat and wave problems on an interval by separation of variables + Fourier series | separation of variables, eigenmodes on $[0,L]$, heat equation (exponential mode decay), wave equation (standing waves, d'Alembert connection), reading the physics off the coefficients |

**Boss problem 4:** (a) A signal contains frequencies up to $B$ Hz and is sampled at rate $f_s$; give the Nyquist rate, and for $f_s$ below it show precisely which higher frequency a tone at $f_0$ aliases to. (b) By hand, compute the 4-point DFT of the sequence $(1,0,1,0)$ and interpret the two nonzero bins. (c) Solve the heat equation $u_t=\kappa u_{xx}$ on $[0,\pi]$ with $u(0,t)=u(\pi,t)=0$ and initial profile $u(x,0)=\sin x+\tfrac12\sin 3x$; write $u(x,t)$ and find the time for the $\sin 3x$ mode to decay to $1/e$ of its start. Note the bridge to `pdes` and the future `signals-systems`.

## Sources of truth

- Stein & Shakarchi, *Fourier Analysis: An Introduction* (ordering, the series→transform arc, classical rigor level)
- Körner, *Fourier Analysis* (intuition, convergence subtleties, Gibbs and the Dirichlet kernel)
- Bracewell, *The Fourier Transform and Its Applications* (transform conventions, the delta/comb calculus, sampling)
- Strang, *Computational Science and Engineering* (DFT/FFT and the PDE applications)

# Quantum Mechanics · Lesson 1.2: The wavefunction and the Born rule

> ⏱ ~15 min · Module 1: The quantum framework · Builds on: [1.1 Why quantum](#/lesson/quantum-mechanics/01-01-why-quantum.md) · Unlocks: 1.3 Hilbert space and Dirac notation

## Why this matters

Lesson 1.1 left us with a paradox: electrons interfere like waves but arrive like particles, one localized click at a time. Quantum mechanics resolves this with a single audacious move — it stops predicting *where the particle is* and predicts only *the odds of finding it there*. The carrier of those odds is the **wavefunction** $\psi(x,t)$, and the rule that turns it into probabilities is the **Born rule**. Everything downstream — energies, spectra, expectation values, tunneling rates — is extracted from $\psi$ by the machinery introduced here. If you can normalize a $\psi$ and read probabilities off it, you can already answer the first physical question quantum mechanics ever asks.

## The idea

Think of $\psi(x,t)$ as a **complex amplitude spread over space** — like the field of a wave, it has a magnitude and a phase at every point. It is *not* the particle, and it is *not* directly measurable. What you measure is where the particle turns up, and the recipe is: the **probability density** is the squared magnitude $|\psi(x,t)|^2$.

The word "density" is the whole point. $|\psi(x)|^2$ is not a probability — it's probability *per unit length*, like mass per unit length on a wire. To get an actual probability you integrate it over a region, exactly as you'd integrate a mass density to get a mass. A tall narrow $\psi$ means the particle is likely found in a small region; a broad flat $\psi$ means it could be almost anywhere.

Two consequences drop out immediately. First, the total probability of finding the particle *somewhere* must be $1$, so $\int|\psi|^2\,dx = 1$ — a **normalization** condition that a legal wavefunction must satisfy. Second, since only $|\psi|^2$ is observable, multiplying $\psi$ by a phase $e^{i\alpha}$ (a complex number of magnitude 1) changes nothing physical: **global phase is invisible.** The amplitude carries more information than the probability, but not all of it survives to the measurable world.

## The formal version

**The state.** The state of a particle in one dimension at time $t$ is a complex-valued function $\psi(x,t)$, the **wavefunction** (also *probability amplitude*). *In words: one complex number attached to every point in space, evolving in time.*

**The Born rule.** The probability of finding the particle in the infinitesimal interval $[x, x+dx]$ at time $t$ is
$$
dP = |\psi(x,t)|^2\,dx, \qquad P(a\le x\le b) = \int_a^b |\psi(x,t)|^2\,dx .
$$
*In words: square the magnitude to get a probability density, then integrate over the region you care about.* Here $|\psi|^2 = \psi^*\psi$, with $\psi^*$ the complex conjugate.

**Normalization.** A physical state must satisfy
$$
\int_{-\infty}^{\infty} |\psi(x,t)|^2\,dx = 1 .
$$
*In words: the particle is somewhere, so the odds over all space add to certainty.* This forces $\psi\to 0$ at infinity fast enough to be **square-integrable**. A $\psi$ whose integral diverges (a plane wave $e^{ikx}$, or anything not decaying) is **not a physical state** — it can only appear as an idealized limit, never as an actual particle.

**Expectation values.** Treating $|\psi|^2$ as a probability density, the mean position is
$$
\langle x\rangle = \int_{-\infty}^\infty x\,|\psi(x,t)|^2\,dx, \qquad \langle f(x)\rangle = \int_{-\infty}^\infty f(x)\,|\psi(x,t)|^2\,dx .
$$
*In words: it's the ordinary probability-weighted average from statistics, with $|\psi|^2$ as the weight.* $\langle x\rangle$ is the average of many measurements on identically prepared systems — not a prediction for any single one.

**Probability current and continuity.** Define the **probability current**
$$
j(x,t) = \frac{\hbar}{2mi}\left(\psi^*\frac{\partial \psi}{\partial x} - \psi\frac{\partial \psi^*}{\partial x}\right),
$$
where $\hbar$ is the reduced Planck constant and $m$ the particle's mass. It obeys the **continuity equation**
$$
\frac{\partial |\psi|^2}{\partial t} + \frac{\partial j}{\partial x} = 0 .
$$
*In words: probability behaves like an incompressible fluid — if the density in a region drops, it's because probability flowed out through the edges, carried by the current $j$; none is created or destroyed.* This is what *guarantees* normalization stays true for all time: integrate over all space and the current terms vanish at infinity, so $\frac{d}{dt}\int|\psi|^2\,dx = 0$. (The derivation uses the Schrödinger equation, which arrives in [2.1](#/lesson/quantum-mechanics/02-01-schrodinger-equation.md); for now, read it as the statement that probability is locally conserved.)

## Picture

![A normalized probability density |ψ(x)|² as a bump over x, with the probability of finding the particle in an interval [a,b] shown as the shaded area under the curve](assets/01-02-fig1.svg)

The height of the red curve at a point is *not* a probability — it's a density. The **shaded area** between $a$ and $b$ is the probability. The total area under the whole curve is fixed at $1$ by normalization.

## Worked examples

**Example 1 (mechanical — normalize a state).** A particle has $\psi(x) = A\,e^{-\lambda |x|}$ with $\lambda>0$ a real constant. Find $A$. Impose normalization:
$$
1 = \int_{-\infty}^{\infty} |A|^2 e^{-2\lambda|x|}\,dx = 2|A|^2\int_0^\infty e^{-2\lambda x}\,dx = 2|A|^2\cdot\frac{1}{2\lambda} = \frac{|A|^2}{\lambda},
$$
using the even symmetry of $e^{-2\lambda|x|}$ to fold the two halves together. So $|A|^2=\lambda$, and since global phase is free we take $A=\sqrt{\lambda}$. The normalized state is $\psi(x)=\sqrt{\lambda}\,e^{-\lambda|x|}$. (This sharp-peaked state is the exact ground state of a delta-function potential well — you'll meet it again in Module 2.)

**Example 2 (why you'd care — an average is not the likeliest spot).** For the same $\psi$, compute $\langle x\rangle$:
$$
\langle x\rangle = \int_{-\infty}^\infty x\,\lambda e^{-2\lambda|x|}\,dx = 0,
$$
because the integrand is **odd** (an odd $x$ times the even $|\psi|^2$) integrated over a symmetric range. The mean position is the origin — even though the origin is also the single *most likely* point (the peak of $|\psi|^2$). Here mean and mode coincide only because the state is symmetric; in a lopsided state they generally differ, and $\langle x\rangle$ can even sit where $|\psi|^2$ is small. The expectation value answers "average over many trials," not "where will this one land."

## Watch out

- You might think $|\psi(x)|^2$ *is* the probability of being at $x$. It isn't — it's a **density** (units of $1/\text{length}$), and it can exceed $1$. A probability only appears after you integrate over an interval. The probability of being at *exactly* one point is zero.
- You might think $\psi$ and $-\psi$, or $\psi$ and $i\psi$, are different physical states. They aren't: a global phase $e^{i\alpha}$ cancels in $|\psi|^2$ and is unobservable. **Relative** phase between two added-together pieces of $\psi$ *does* matter — that's what makes interference (1.1) happen — but an overall phase never does.
- You might think any $\psi$ satisfying the Schrödinger equation is allowed. Only **square-integrable** ones are physical states; a non-normalizable $\psi$ (a bare plane wave, or one that doesn't decay) describes no real particle and must be built into a normalizable wave packet before it means anything.
- You might read the continuity equation as "$|\psi|^2$ can't change." It can — it just can't change *without* a current moving probability in or out. Total probability is conserved; local density is not.

## One-liner

> The wavefunction is a complex amplitude whose squared magnitude is a probability *density* — normalize it, integrate it for probabilities, weight-average it for expectations, and never trust its overall phase.

## Problems

**P1 (🟢)** A particle is described by $\psi(x) = A\,e^{-\lambda|x|}$ with $\lambda = 2\ \mathrm{nm}^{-1}$. Find the normalization constant $A$ (with units), assuming $A$ real and positive.

**P2 (🟡)** For the normalized $\psi(x)=\sqrt{\lambda}\,e^{-\lambda|x|}$, (a) confirm $\langle x\rangle = 0$ and (b) compute the probability that the particle is found within $|x|\le 1/\lambda$ of the origin. Is your answer more or less than half? Explain in one sentence why that's the right side of $\tfrac12$.

**P3 (🔴, optional)** Show that any **purely real** wavefunction $\psi(x)$ has probability current $j(x)=0$ everywhere. Then, writing a general $\psi=R(x)\,e^{i\theta(x)}$ with $R,\theta$ real, show $j=\frac{\hbar}{m}R^2\,\theta'$, and use it to argue that a real $\psi$ carries zero average momentum $\langle p\rangle$. What physical situation does this describe? *(This is the seed of stationary states in [2.2](#/lesson/quantum-mechanics/02-02-stationary-states-time-evolution.md): probability that stands still.)*

<details>
<summary>Solutions</summary>

**P1** Normalization gives $\frac{|A|^2}{\lambda}=1$ (Example 1), so $|A|^2 = \lambda = 2\ \mathrm{nm}^{-1}$ and
$$
A = \sqrt{\lambda} = \sqrt{2}\ \mathrm{nm}^{-1/2} \approx 1.41\ \mathrm{nm}^{-1/2}.
$$
The units $\mathrm{nm}^{-1/2}$ are exactly what makes $|\psi|^2$ a density in $\mathrm{nm}^{-1}$ — a useful sanity check on any normalization.

**P2** (a) $\displaystyle\langle x\rangle=\int_{-\infty}^{\infty} x\,\lambda e^{-2\lambda|x|}\,dx=0$: the integrand is odd over a symmetric interval, so it cancels. (b)
$$
P\big(|x|\le \tfrac{1}{\lambda}\big) = \int_{-1/\lambda}^{1/\lambda}\lambda e^{-2\lambda|x|}\,dx
= 2\lambda\int_0^{1/\lambda} e^{-2\lambda x}\,dx
= 2\lambda\cdot\frac{1}{2\lambda}\Big(1-e^{-2\lambda\cdot(1/\lambda)}\Big) = 1 - e^{-2} \approx 0.865 .
$$
More than half — in fact about 86.5%. Because $|\psi|^2$ is sharply peaked at the origin and decays exponentially, most of the probability mass is packed near $x=0$, so a window one decay-length wide on each side already captures the lion's share.

**P3** With $\psi$ real, $\psi^*=\psi$, so
$$
j=\frac{\hbar}{2mi}\big(\psi\,\psi' - \psi\,\psi'\big)=0
$$
identically — the two terms are equal and cancel. For the general polar form $\psi=R e^{i\theta}$:
$$
\psi^*\psi' = Re^{-i\theta}\big(R' + iR\theta'\big)e^{i\theta} = RR' + iR^2\theta',
$$
and $\psi\,\psi^{*\prime}$ is its complex conjugate $RR' - iR^2\theta'$. Subtracting kills the real part and doubles the imaginary part:
$$
j=\frac{\hbar}{2mi}\big(2iR^2\theta'\big)=\frac{\hbar}{m}R^2\theta' = \frac{\hbar}{m}\,|\psi|^2\,\theta'(x).
$$
A real $\psi$ has $\theta = 0$ (or $\pi$) — constant — so $\theta'=0$ and $j=0$, consistent with the first part. **Current requires a phase that varies through space.** Since the average momentum satisfies $\langle p\rangle = m\int_{-\infty}^\infty j\,dx$ (the current, integrated, is the mean momentum), a real $\psi$ gives $\langle p\rangle = 0$. Physically this is a **standing wave**: probability that neither drifts left nor right, exactly what a bound stationary state looks like — a particle "trapped and going nowhere on average," like a string vibrating in place rather than a traveling pulse.

</details>

## Connections

- **Backward:** in [1.1](#/lesson/quantum-mechanics/01-01-why-quantum.md) the double slit added *amplitudes* and squared at the end; the Born rule is that recipe promoted to law, and it explains why the relative phase between paths — not their probabilities — produces the fringes.
- **Forward:** [1.3](#/lesson/quantum-mechanics/01-03-hilbert-space-dirac-notation.md) recasts $\int|\psi|^2dx=1$ as "$\psi$ is a unit vector in a Hilbert space," and $\langle x\rangle$ as an inner product — the same objects, in the language that scales to spin and multi-particle systems. The continuity equation gets its full derivation in [2.1](#/lesson/quantum-mechanics/02-01-schrodinger-equation.md).
- **Sideways (probability):** $|\psi|^2$ is an ordinary probability density and $\langle f(x)\rangle$ is the textbook expectation from `prob-stat-refresher`; the demand that an infinite-range density integrate to $1$ is precisely the improper-integral convergence you drilled in [calc-refresher 2.3](#/lesson/calc-refresher/02-03-improper-integrals-and-models.md).
- **Sideways (complex analysis):** the split $\psi = Re^{i\theta}$ into magnitude and phase, and the fact that only the phase *gradient* drives current, is the modulus–argument decomposition of `complex-analysis` doing physical work.

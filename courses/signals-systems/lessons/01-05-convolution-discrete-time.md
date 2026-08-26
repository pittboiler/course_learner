# Signals & Systems · Lesson 1.5: Convolution in discrete time

> ⏱ ~15 min · Module 1: Signals and LTI systems · Builds on: [1.2 The elementary signals](01-02-elementary-signals.md), [1.3 Systems and their properties](01-03-systems-and-properties.md), [1.4 Convolution in continuous time](01-04-convolution-continuous-time.md) · Unlocks: 2.1 (eigenfunctions and frequency response), 4.3 (difference equations and realizations)

## Why this matters

The convolution integral of [1.4](01-04-convolution-continuous-time.md) is a beautiful theorem you evaluate with pencil and paper. The convolution **sum** is a `for` loop. Every digital filter, every reverb plugin, every moving average on a stock price, every blur in an image editor is literally this sum being executed a few million times a second — multiply, add, shift, repeat. This lesson is where "an LTI system *is* its impulse response" stops being a slogan and becomes an algorithm.

There's a bonus. In continuous time we had to lean on $\delta(t)$, which is not a function at all but a distribution — a limit of ever-narrower spikes. In discrete time, $\delta[n]$ from [1.2](01-02-elementary-signals.md) is an honest, finite, perfectly ordinary sequence: one at $n=0$, zero everywhere else. So the *same derivation* runs here with no hand-waving and no limits. The discrete case is the clean one; the continuous case is the one that needs distribution theory to be made rigorous.

## The idea

Take any discrete signal $x[n]$ — just a list of numbers indexed by an integer $n$. Here is a statement so obvious it looks useless: $x$ is the sum of its own samples, each one parked at its own index. Sample $x[3]$ sits at index 3 and nowhere else; add up all such parked samples and you get $x$ back.

Now feed that decomposition into a linear, time-invariant system (an **LTI** system, in the sense of [1.3](01-03-systems-and-properties.md)). The system does one thing to a single unit impulse at the origin: it produces some output sequence we call the **impulse response** $h[n]$. Time-invariance says an impulse parked at index $k$ produces the *same* response, just slid over to start at $k$. Linearity says a scaled impulse produces a scaled response, and a sum of impulses produces the sum of the responses.

So: chop the input into impulses, replace each impulse by a shifted, scaled copy of $h$, and pile them up. That pile is the output. The "pile them up" step is the convolution sum.

The best mental model for what that sum actually computes: **it is long multiplication without carries.** Convolving two finite sequences is exactly multiplying two polynomials whose coefficients are those sequences. If you can multiply $123 \times 11$ on paper, you can convolve — you just skip the carrying step. That single analogy answers most questions people have about convolution, including how long the answer is.

## The formal version

**The sifting sum.** For every integer $n$,

$$x[n] \;=\; \sum_{k=-\infty}^{\infty} x[k]\,\delta[n-k].$$

*In words: any sequence equals the sum of its own samples, each held in place by a unit impulse.* This is not an approximation and not a limit — fix $n$, and every term with $k \neq n$ has $\delta[n-k]=0$, so the sum collapses to the single term $x[n]\cdot 1$. Compare [1.4](01-04-convolution-continuous-time.md), where the same step needed $\int x(\tau)\delta(t-\tau)\,d\tau$ and a distribution to justify it.

**The derivation.** Write the system as an operator $\mathcal{S}\{\cdot\}$ and define the impulse response $h[n] \equiv \mathcal{S}\{\delta[n]\}$. Then

$$y[n] = \mathcal{S}\Big\{\textstyle\sum_k x[k]\delta[n-k]\Big\} \;\overset{\text{linearity}}{=}\; \sum_k x[k]\,\mathcal{S}\{\delta[n-k]\} \;\overset{\text{time-inv.}}{=}\; \sum_k x[k]\,h[n-k].$$

Linearity moved the operator inside the sum and let each constant $x[k]$ out front; time-invariance turned $\mathcal{S}\{\delta[n-k]\}$ into $h[n-k]$. That's the whole proof:

$$\boxed{\;y[n] \;=\; (x \ast h)[n] \;=\; \sum_{k=-\infty}^{\infty} x[k]\,h[n-k]\;}$$

*In words: to get output sample $n$, weight every input sample $x[k]$ by how much impulse response is left over $n-k$ steps after it fired, and add.*

**Commutativity.** Substituting $m = n-k$ (so $k = n-m$) reindexes the sum into

$$y[n] = \sum_{m=-\infty}^{\infty} h[m]\,x[n-m],$$

so $x \ast h = h \ast x$ — flip whichever sequence is more convenient. Convolution is also associative and distributive over addition.

**The mechanics (flip, slide, multiply, sum).** Read $h[n-k]$ as a function of the dummy index $k$ with $n$ held fixed. The minus sign on $k$ **reverses** $h$; the $+n$ **shifts** the reversed copy right by $n$. So for each output index $n$ you: reverse $h$, slide it to position $n$, multiply it sample-by-sample against $x$ where they overlap, and add up the products. One slide position, one output number.

**Polynomial multiplication.** Tag each sample with a bookkeeping symbol: attach $z^{-n}$ to the sample at index $n$, and write $X(z)=\sum_n x[n]z^{-n}$, $H(z)=\sum_n h[n]z^{-n}$. When you multiply, the tags combine as $z^{-k}\cdot z^{-(n-k)} = z^{-n}$ — a sample of $x$ at $k$ times a sample of $h$ at $n-k$ lands at index $n$, which is precisely the convolution sum. Hence

$$Y(z) = X(z)\,H(z).$$

*In words: convolving sequences is multiplying their polynomials.* (That symbol $z$ becomes the z-transform in [4.1](04-01-z-transform-and-roc.md); here it's just an index-tracking device.) Two free consequences:

- **Length rule.** An $N$-point sequence convolved with an $M$-point sequence gives exactly $N+M-1$ points. (Degrees add: $(N-1)+(M-1) = N+M-2$, so indices $0$ through $N+M-2$.) Use it as an answer check every single time.
- **Sum rule.** Setting $z=1$ collapses each polynomial to the sum of its coefficients, so $\sum_n y[n] = \big(\sum_n x[n]\big)\big(\sum_n h[n]\big)$. A second free check.

**Causality and stability, read off $h$.** From [1.3](01-03-systems-and-properties.md), in the commuted form $y[n] = \sum_m h[m]x[n-m]$:

- **Causal** $\iff h[n]=0$ for $n<0$. *In words: if the impulse response has nothing before $n=0$, the sum never reaches for a future input.*
- **BIBO stable** $\iff \sum_{n=-\infty}^{\infty} |h[n]| < \infty$ (absolute summability). *In words: the total "weight" the system spreads over time must be finite.* Quick proof of sufficiency: if $|x[n]|\le B$ for all $n$, then $|y[n]| \le \sum_m |h[m]|\,|x[n-m]| \le B\sum_m|h[m]|$, which is a finite bound.

**Worked instance.** For $h[n] = a^n u[n]$ (a geometric decay switched on at $n=0$), $\sum_n |h[n]| = \sum_{n=0}^{\infty} |a|^n$, a geometric series. It converges to $\dfrac{1}{1-|a|}$ when $|a|<1$ and diverges otherwise. So this system is **stable iff $|a|<1$**, and always causal.

**Interconnections** (identical to the continuous case in [1.4](01-04-convolution-continuous-time.md)): two systems in **cascade** (output of one into the input of the next) form a single LTI system with $h = h_1 \ast h_2$, and because convolution commutes, the order doesn't matter. Two systems in **parallel** (same input, outputs added) form $h = h_1 + h_2$.

## Picture

![Three stem-plot panels showing the flipped sequence h[n-k] slid to n = 1, 2, 3 against x[k], with the overlapping products highlighted, and the resulting output stem plot y[n] = {1, 3, 5, 3}](assets/01-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — one convolution, three ways).** Convolve $x[n] = \{1,2,3\}$ (samples at $n=0,1,2$) with $h[n] = \{1,1\}$ (samples at $n=0,1$).

*Way 1 — flip and slide.* $h[n-k]$ has its two stems at $k=n-1$ and $k=n$. Slide it across $x$:

$$y[0]=1{\cdot}1=1,\quad y[1]=1{\cdot}1+2{\cdot}1=3,\quad y[2]=2{\cdot}1+3{\cdot}1=5,\quad y[3]=3{\cdot}1=3.$$

*Way 2 — polynomials.* $X(z)=1+2z^{-1}+3z^{-2}$ and $H(z)=1+z^{-1}$, so

$$Y(z) = (1+2z^{-1}+3z^{-2})(1+z^{-1}) = 1 + 3z^{-1} + 5z^{-2} + 3z^{-3}.$$

*Way 3 — long multiplication, no carries.* Write $123 \times 11$ and refuse to carry: $123$ shifted once is $1230$; adding column-wise gives $1,\,3,\,5,\,3$. (With carrying you'd get $1353$ — same digits here, because nothing exceeds 9.)

$$y[n] = \{1,\,3,\,5,\,3\}.$$

*Checks.* Length: $3+2-1 = 4$ points ✓. Sum: $(1+2+3)(1+1) = 12$ and $1+3+5+3=12$ ✓.

**Example 2 (why you'd care — a finite recipe with an infinite impulse response).** A system is specified not by a list of numbers but by a **difference equation** with feedback:

$$y[n] = x[n] + a\,y[n-1],$$

with the system initially at rest ($y[n]=0$ before the input starts). One multiply, one add, one memory cell — that is the entire hardware. What is its impulse response? Unroll by repeated substitution:

$$y[n] = x[n] + a\big(x[n-1] + a\,y[n-2]\big) = x[n] + a\,x[n-1] + a^2 x[n-2] + \cdots = \sum_{k=0}^{\infty} a^k x[n-k].$$

Compare that to the commuted convolution sum $y[n]=\sum_k h[k]x[n-k]$ and read off the answer term by term:

$$h[n] = a^n u[n].$$

*In words: a system you can build with one delay and one multiplier has an impulse response that never ends.* Kick it once and it rings forever (geometrically). This is the **IIR** (infinite impulse response) side of the FIR/IIR split: Example 1's $h=\{1,1\}$ is **FIR** — finite, no feedback, a fixed number of taps — while feedback buys you an infinite response for a constant amount of hardware. That tradeoff, and the block diagrams that implement it, are [4.3](04-03-difference-equations-realizations.md).

Stability comes free from the instance above: this system is BIBO stable exactly when $|a|<1$, with $\sum_n|h[n]| = 1/(1-|a|)$. At $a = 0.99$ it's stable but rings for hundreds of samples; at $a=1$ it becomes a running accumulator and a bounded input can drive it to infinity.

## Watch out

- **You might think $y[n] = x[n]\,h[n]$.** That's sample-by-sample multiplication — a time-varying gain, not an LTI system. Convolution deliberately *mixes across time*: output $n$ draws on inputs at $n, n-1, n-2, \dots$. Multiplying pointwise would give $\{1,2\}$ from Example 1, not $\{1,3,5,3\}$ — and the length rule immediately flags it, since the true answer has 4 points.
- **You might flip the wrong variable.** The reversal in $h[n-k]$ happens in the *dummy* index $k$, with $n$ frozen as the slide position. $h[n-k]$ and $h[k-n]$ are different sequences; only the first one comes out of the derivation.
- **You might think $h[n]\to 0$ means stable.** It doesn't. Take $h[n] = \frac{1}{n+1}u[n]$: the samples do decay to zero, but $\sum_{n\ge 0}\frac{1}{n+1}$ is the harmonic series, which diverges — so the system is unstable. Stability is about the *sum* of $|h[n]|$, not the limit of $h[n]$.

## One-liner

> Discrete convolution is long multiplication without carries — flip $h$, slide it, multiply the overlap, add — and an $N$-point input through an $M$-point impulse response always comes out $N+M-1$ points long.

## Problems

**P1 (🟢)** Compute $y = x \ast h$ for $x[n]=\{2,1,3\}$ (at $n=0,1,2$) and $h[n]=\{1,-1\}$ (at $n=0,1$). Verify your answer with both the length rule and the sum rule.

**P2 (🟡)** For each impulse response, state whether the system is causal and whether it is BIBO stable, with the summability computation that justifies the verdict.
(a) $h[n] = 2(-0.75)^n u[n]$  (b) $h[n] = u[n]$  (c) $h[n] = \dfrac{1}{n+1}u[n]$

**P3 (🔴)** A discrete system obeys $y[n] = x[n] - 0.5\,y[n-1]$, initially at rest. (a) Find $h[n]$ in closed form. (b) Is it stable? (c) Using convolution, find the output for $x[n] = \delta[n] + \delta[n-1]$ for $n = 0,1,2,3$, then check your four numbers by running the difference equation directly.

<details>
<summary>Solutions</summary>

**P1** Flip and slide, with $h[n-k]$ having stems at $k=n-1$ (value $-1$) and $k=n$ (value $1$):

$$y[0] = 2(1) = 2,\qquad y[1] = 2(-1) + 1(1) = -1,$$
$$y[2] = 1(-1) + 3(1) = 2,\qquad y[3] = 3(-1) = -3.$$

$$y[n] = \{2,\,-1,\,2,\,-3\} \quad\text{at } n = 0,1,2,3.$$

*Checks.* Length rule: $N+M-1 = 3+2-1 = 4$ points, and we have 4 ✓. Sum rule: $\big(\sum x\big)\big(\sum h\big) = (2+1+3)(1-1) = 6 \times 0 = 0$, and $2-1+2-3 = 0$ ✓. Polynomial cross-check: $(2 + z^{-1} + 3z^{-2})(1 - z^{-1}) = 2 - z^{-1} + 2z^{-2} - 3z^{-3}$ ✓. (This $h$ is a first difference; the sum of the output is forced to zero because a difference operator kills any constant offset.)

**P2**

(a) $h[n]=0$ for $n<0$ thanks to $u[n]$, so **causal**. Summability:

$$\sum_{n=0}^{\infty} \big|2(-0.75)^n\big| = 2\sum_{n=0}^{\infty}(0.75)^n = \frac{2}{1-0.75} = \frac{2}{0.25} = 8 < \infty.$$

**Stable** (this is $h[n]=a^nu[n]$ with $|a| = 0.75 < 1$).

(b) $h[n]=u[n]$ is zero for $n<0$, so **causal**. But $\sum_{n=0}^{\infty}|u[n]| = \sum_{n=0}^{\infty} 1 = \infty$, so **unstable**. Concretely this is the accumulator $y[n]=\sum_{k\le n}x[k]$; the bounded input $x[n]=u[n]$ produces $y[n]=n+1$, which grows without bound. (It is the discrete twin of the continuous integrator $h(t)=u(t)$.)

(c) **Causal** again ($u[n]$ makes it zero for $n<0$). Summability:

$$\sum_{n=0}^{\infty}\frac{1}{n+1} = 1 + \tfrac12 + \tfrac13 + \tfrac14 + \cdots$$

which is the harmonic series and diverges, so **unstable** — even though $h[n]\to 0$. Decay alone is never the test; the decay has to be fast enough to be summable.

**P3**

(a) Unroll the recursion with the system initially at rest, exactly as in Example 2 but with $a = -0.5$:

$$y[n] = x[n] - 0.5\,y[n-1] = x[n] - 0.5\,x[n-1] + 0.25\,x[n-2] - \cdots = \sum_{k=0}^{\infty}(-0.5)^k x[n-k],$$

so matching against $y[n] = \sum_k h[k]x[n-k]$ gives

$$h[n] = (-0.5)^n u[n].$$

(b) $\sum_{n=0}^{\infty}|(-0.5)^n| = \sum_{n=0}^{\infty}(0.5)^n = \dfrac{1}{1-0.5} = 2 < \infty$, so **stable** (consistent with $|a| = 0.5 < 1$).

(c) Convolving with $x[n]=\delta[n]+\delta[n-1]$ just copies and shifts, since $\delta \ast h = h$:

$$y[n] = h[n] + h[n-1].$$

$$y[0] = 1 + 0 = 1,\qquad y[1] = -0.5 + 1 = 0.5,$$
$$y[2] = 0.25 - 0.5 = -0.25,\qquad y[3] = -0.125 + 0.25 = 0.125.$$

*Check by running the recursion* $y[n] = x[n] - 0.5y[n-1]$ with $x = \{1,1,0,0\}$ and $y[-1]=0$:

$$y[0] = 1 - 0 = 1,\qquad y[1] = 1 - 0.5(1) = 0.5,$$
$$y[2] = 0 - 0.5(0.5) = -0.25,\qquad y[3] = 0 - 0.5(-0.25) = 0.125.$$

All four match the convolution result ✓.

Both routes agree. Note the closed form for $n \ge 1$ is $y[n] = (-0.5)^{n} + (-0.5)^{n-1} = 0.5\,(-0.5)^{n-1}$, which reproduces $0.5, -0.25, 0.125$ — and note the length rule does *not* apply here, because $h$ is infinitely long.

</details>

## Flashback

**From Lesson 1.4 (Convolution in continuous time):** Compute $y = x \ast h$ for $x(t) = e^{-3t}u(t)$ and $h(t) = u(t)$, and say in one sentence what this system does.

<details>
<summary>Solution</summary>

Use the convolution integral in the form that flips $h$:

$$y(t) = \int_{-\infty}^{\infty} x(\tau)\,h(t-\tau)\,d\tau.$$

Here $h(t-\tau) = u(t-\tau)$, which equals 1 for $\tau \le t$ and 0 otherwise, while $x(\tau) = e^{-3\tau}$ only for $\tau \ge 0$. So the two windows overlap on $0 \le \tau \le t$, which is empty for $t<0$. For $t \ge 0$:

$$y(t) = \int_{0}^{t} e^{-3\tau}\,d\tau = \left[-\tfrac13 e^{-3\tau}\right]_{0}^{t} = \tfrac13\left(1 - e^{-3t}\right).$$

$$y(t) = \tfrac13\left(1-e^{-3t}\right)u(t).$$

*Checks.* $y(0)=0$ ✓ (nothing has been accumulated yet), and $y(\infty) = \tfrac13 = \int_0^\infty e^{-3\tau}d\tau$ ✓ (the total area under the input). The system with $h(t)=u(t)$ is a **running integrator** — its output is the accumulated area of the input so far. That is exactly the continuous counterpart of P2(b)'s accumulator $h[n]=u[n]$, and it is unstable for the same reason: $\int|u(t)|dt = \infty$.

</details>

## Connections

- **Backward:** this is [1.4](01-04-convolution-continuous-time.md)'s derivation with $\int \to \sum$ — but cleaner, because [1.2](01-02-elementary-signals.md)'s $\delta[n]$ is a genuine sequence rather than a distribution, so the sifting step is exact bookkeeping instead of a limit. The causality and BIBO tests are [1.3](01-03-systems-and-properties.md)'s definitions specialized to $h$.
- **Forward:** [2.1](02-01-eigenfunctions-frequency-response.md) shows why complex exponentials survive this sum unchanged up to a scale factor, turning convolution into multiplication. The polynomial tag $z^{-n}$ becomes literal in [4.1](04-01-z-transform-and-roc.md), where $Y(z)=X(z)H(z)$ is a theorem rather than a bookkeeping trick, and the FIR/IIR distinction from Example 2 gets its block diagrams in [4.3](04-03-difference-equations-realizations.md). Beware: the DFT in [3.4](03-04-discrete-fourier-transform.md) multiplies spectra and gets *circular* convolution, which is not this operation.
- **Sideways:** the same "convolution in one domain equals multiplication in the other" statement is proved in `fourier-analysis` [2.3 Convolution theorem](../../fourier-analysis/lessons/02-03-convolution-theorem.md), and the distribution machinery we got to skip here is `fourier-analysis` [3.1 The Dirac delta and sifting](../../fourier-analysis/lessons/03-01-dirac-delta-sifting.md). Because convolution *is* polynomial multiplication, fast polynomial multiplication and fast convolution are the same problem — which is what makes the FFT of `fourier-analysis` [4.2](../../fourier-analysis/lessons/04-02-dft-fft.md) and [3.5](03-05-the-fft.md) an algorithmic bombshell rather than a curiosity.

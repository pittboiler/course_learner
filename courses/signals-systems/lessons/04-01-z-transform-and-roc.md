# Signals & Systems · Lesson 4.1: The z-transform and its ROC

> ⏱ ~15 min · Module 4: The z-transform and filtering · Builds on: [2.4 The Laplace transform and the ROC](02-04-laplace-transform-roc.md), [3.3 The discrete-time Fourier transform](03-03-discrete-time-fourier-transform.md), [1.5 Convolution in discrete time](01-05-convolution-discrete-time.md) · Unlocks: 4.2 (poles and zeros in the z-plane), 4.3 (difference equations and realizations)

## Why this matters

You already own this lesson. In [2.4](02-04-laplace-transform-roc.md) you learned that Laplace takes a continuous signal, spreads it over a complex plane, and hands you back three things at once: an algebraic expression, a set of poles, and a **region of convergence** that decides which signal the expression actually means. The z-transform does exactly that for $x[n]$ — and every single structural fact carries over, with one substitution: the $j\omega$ axis becomes the **unit circle**.

That is not a loose analogy. It is a change of coordinates, and once you see it, the whole discrete-time world snaps into the shape you already know: stability is a circle instead of a half-plane, delay is $z^{-1}$ instead of $e^{-sT}$, and convolution is still just multiplication. This lesson is where digital filter design ([4.4](04-04-filter-design-basics.md)) and discrete control (`control-systems`) get their plane to draw on.

## The idea

Here is the whole construction in one move. The DTFT of [3.3](03-03-discrete-time-fourier-transform.md) was

$$X(e^{j\Omega}) = \sum_{n=-\infty}^{\infty} x[n]\,e^{-j\Omega n},$$

where $\Omega$ is frequency in radians per sample. It works beautifully — as long as the sum converges, which requires $x[n]$ to not grow. Feed it $x[n] = 2^n u[n]$ and it diverges: pure oscillations $e^{-j\Omega n}$ have magnitude 1 and can never tame a growing signal.

Laplace fixed the same problem for $x(t)$ by letting the oscillation $e^{-j\omega t}$ grow a decaying envelope: $e^{-st} = e^{-\sigma t}e^{-j\omega t}$. Do the identical thing here. Replace the unit-magnitude number $e^{j\Omega}$ with an *arbitrary complex number* $z$, which we may as well write in polar form:

$$z = r e^{j\Omega}, \qquad r = |z| > 0.$$

Now $z^{-n} = r^{-n}e^{-j\Omega n}$ — an oscillation times a geometric envelope $r^{-n}$ you can dial to whatever you need. Pick $r$ big enough and even $2^n u[n]$ gets squashed into convergence.

So: **the z-transform is the DTFT with a knob on it.** The knob is $r = |z|$. The set of knob settings that make the sum converge is the ROC. And when the knob sits at $r = 1$ — that is, on the **unit circle** — the envelope is gone and you are looking at the plain DTFT again.

## The formal version

**Definition.** The (bilateral) **z-transform** of a discrete-time signal $x[n]$ is

$$\boxed{\;X(z) = \sum_{n=-\infty}^{\infty} x[n]\,z^{-n}\;}$$

for those complex $z$ where the sum converges. *In words: multiply each sample by $z$ raised to minus its index, and add everything up.*

Note the **negative exponent** — sample $n$ gets $z^{-n}$, not $z^{n}$. That convention is not cosmetic. It is chosen precisely so that *delaying a signal by one sample multiplies its transform by $z^{-1}$*, which makes $z^{-1}$ the universal symbol for "one-sample delay." In [4.3](04-03-difference-equations-realizations.md) it stops being a symbol and becomes a literal box in a block diagram, wired between an adder and a multiplier. This is the single most-used fact in Module 4.

**The unit circle is the DTFT.** Set $z = e^{j\Omega}$ (so $r = 1$):

$$X(z)\Big|_{z\,=\,e^{j\Omega}} = \sum_{n=-\infty}^{\infty} x[n]\,e^{-j\Omega n} = X(e^{j\Omega}),$$

which is *exactly* the DTFT of [3.3](03-03-discrete-time-fourier-transform.md), character for character. **The DTFT is the z-transform evaluated on the unit circle** — and that retroactively explains the strange notation $X(e^{j\Omega})$ you have been writing since 3.3. It was never "the DTFT of $e^{j\Omega}$"; it was always $X$, the z-transform, being handed the argument $z = e^{j\Omega}$.

It also explains the $2\pi$-periodicity for free: increasing $\Omega$ by $2\pi$ walks you once around the circle and returns you to the *same complex number* $z$. A function evaluated at the same point gives the same value. That is the whole proof. What looked in 3.3 like an odd algebraic accident is just the geometry of a circle.

**The ROC.** Convergence of $\sum_n |x[n]||z|^{-n}$ depends on $z$ only through $|z| = r$. So if some $z$ is in the region, so is every other $z$ with the same magnitude:

> The **region of convergence** is an **annulus** centered at the origin, $r_1 < |z| < r_2$, with $0 \le r_1 < r_2 \le \infty$.

*In words: the ROC is always a ring (possibly a disc with a punctured center, possibly everything outside a circle).* Compare 2.4, where the ROC was always a vertical **strip** $\sigma_1 < \mathrm{Re}\{s\} < \sigma_2$. Strip becomes ring.

**The workhorse pair, derived.** Let $x[n] = a^n u[n]$ with $a$ any complex constant. Since $u[n]$ kills all negative $n$,

$$X(z) = \sum_{n=0}^{\infty} a^n z^{-n} = \sum_{n=0}^{\infty}\left(a z^{-1}\right)^{n}.$$

That is a geometric series with ratio $az^{-1}$. It converges **iff** $|az^{-1}| < 1$, i.e. $|z| > |a|$, and then sums to $1/(1 - az^{-1})$:

$$\boxed{\;a^n u[n] \;\longleftrightarrow\; \frac{1}{1 - az^{-1}} = \frac{z}{z-a}, \qquad \text{ROC } |z| > |a|.\;}$$

Now the **companion**. Let $x[n] = -a^n u[-n-1]$ — the same geometric shape, but living entirely on $n \le -1$ and carrying a minus sign. Substituting $m = -n$:

$$X(z) = -\sum_{n=-\infty}^{-1} a^n z^{-n} = -\sum_{m=1}^{\infty} a^{-m}z^{m} = -\sum_{m=1}^{\infty}\left(\frac{z}{a}\right)^{m}.$$

This converges iff $|z/a| < 1$, i.e. $|z| < |a|$, to $-\dfrac{z/a}{1 - z/a} = \dfrac{z}{z-a}$.

**The same expression.** Two completely different signals — one decaying to the right, one running off to the left — with identical algebra, distinguished *only* by their ROC:

| $x[n]$ | $X(z)$ | ROC |
|---|---|---|
| $a^n u[n]$ | $\dfrac{1}{1-az^{-1}}$ | $\lvert z\rvert > \lvert a\rvert$ |
| $-a^n u[-n-1]$ | $\dfrac{1}{1-az^{-1}}$ | $\lvert z\rvert < \lvert a\rvert$ |

This is 2.4's lesson repeated in a new alphabet: **a z-transform is not an expression, it is a pair (expression, ROC).** Quote one without the other and you have said nothing.

**ROC properties** (each the discrete twin of a 2.4 property):

- The ROC is an annulus centered at the origin and contains **no poles** (a pole is where $X(z)$ blows up — convergence is impossible there). Poles sit *on* ROC boundaries.
- **Right-sided** $x[n]$ (zero for $n < N_1$) $\Rightarrow$ ROC is **outside the outermost pole**. Big $|z|$ shrinks $z^{-n}$ for large positive $n$.
- **Left-sided** $x[n]$ (zero for $n > N_2$) $\Rightarrow$ ROC is **inside the innermost pole**.
- **Two-sided** $\Rightarrow$ ROC is a genuine ring between two poles — or empty, in which case no z-transform exists.
- **Finite-length** $\Rightarrow$ the sum has finitely many terms, so it converges for **all** $z$, except possibly $z=0$ (killed by any positive-$n$ term) and $z=\infty$ (killed by any negative-$n$ term).

**ROC $\Longleftrightarrow$ causality.** A signal is **causal** ($x[n]=0$ for $n<0$) iff it is right-sided *and* starts no earlier than $n=0$:

> Causal $\iff$ the ROC is outside the outermost pole **and includes $z = \infty$.**

*In words: outside-the-outermost gets you right-sided; including infinity pins the start to $n \ge 0$.* For a rational $H(z)$, "includes $z=\infty$" means $H(\infty)$ is finite — numerator degree $\le$ denominator degree, no positive powers of $z$ left over.

**ROC $\Longleftrightarrow$ stability.** From [1.3](01-03-systems-and-properties.md), an LTI system is BIBO stable iff $\sum_n |h[n]| < \infty$. Evaluate the transform sum at $|z| = 1$:

$$\sum_{n}\left|h[n]z^{-n}\right|_{|z|=1} = \sum_n |h[n]|.$$

The two conditions are literally the same statement. So:

> $\boxed{\;\text{BIBO stable} \iff \text{the ROC contains the unit circle.}\;}$

*In words: stable means the DTFT exists — which means the transform converges where the DTFT lives.* Precisely the 2.4 rule "stable $\iff$ ROC contains the $j\omega$ axis," with the axis bent into a circle.

**Combine the two.** Causal forces the ROC outward from the outermost pole; stable forces that region to reach the unit circle. Both can hold only if every pole is already strictly inside:

> $\boxed{\;\text{Causal and stable} \iff \text{all poles lie strictly inside the unit circle, } |p_k| < 1.\;}$

This is the discrete counterpart of "**all poles in the open left half-plane**." And the correspondence is not a coincidence — it is a map. Sampling a continuous exponential $e^{st}$ every $T$ seconds gives $e^{sTn} = z^n$ with

$$z = e^{sT} \quad\Longrightarrow\quad |z| = e^{\sigma T}.$$

So $\sigma < 0 \iff |z| < 1$: **the left half-plane maps onto the inside of the unit circle**, and the $j\omega$ axis ($\sigma = 0$) maps onto the circle itself.

### The whole dictionary

| Continuous time | Discrete time |
|---|---|
| $X(s)=\int x(t)e^{-st}dt$ | $X(z)=\sum x[n]z^{-n}$ |
| $s = \sigma + j\omega$ | $z = re^{j\Omega}$ |
| $s$-plane | $z$-plane |
| $j\omega$ axis ($\sigma=0$) | unit circle ($r=1$) |
| On it, $X(j\omega)$ = the CTFT | On it, $X(e^{j\Omega})$ = the DTFT |
| ROC = vertical strip | ROC = annulus |
| Right-sided $\Rightarrow$ right of rightmost pole | Right-sided $\Rightarrow$ outside outermost pole |
| Left-sided $\Rightarrow$ left of leftmost pole | Left-sided $\Rightarrow$ inside innermost pole |
| Stable $\iff$ ROC contains $j\omega$ axis | Stable $\iff$ ROC contains unit circle |
| Causal + stable $\iff$ poles in LHP | Causal + stable $\iff$ poles inside unit circle |
| Delay by $T$: $\times\,e^{-sT}$ | Delay by $m$: $\times\,z^{-m}$ |
| $e^{-at}u(t) \leftrightarrow \frac{1}{s+a}$, $\mathrm{Re}\,s > -a$ | $a^nu[n] \leftrightarrow \frac{1}{1-az^{-1}}$, $\lvert z\rvert>\lvert a\rvert$ |

### Standard pairs

| $x[n]$ | $X(z)$ | ROC |
|---|---|---|
| $\delta[n]$ | $1$ | all $z$ |
| $\delta[n-m]$, $m>0$ | $z^{-m}$ | all $z$ except $z=0$ |
| $u[n]$ | $\dfrac{1}{1-z^{-1}}$ | $\lvert z\rvert>1$ |
| $a^n u[n]$ | $\dfrac{1}{1-az^{-1}}$ | $\lvert z\rvert>\lvert a\rvert$ |
| $-a^n u[-n-1]$ | $\dfrac{1}{1-az^{-1}}$ | $\lvert z\rvert<\lvert a\rvert$ |
| $n\,a^n u[n]$ | $\dfrac{az^{-1}}{(1-az^{-1})^{2}}$ | $\lvert z\rvert>\lvert a\rvert$ |
| $\cos(\Omega_0 n)u[n]$ | $\dfrac{1-\cos\Omega_0\,z^{-1}}{1-2\cos\Omega_0\,z^{-1}+z^{-2}}$ | $\lvert z\rvert>1$ |
| $\sin(\Omega_0 n)u[n]$ | $\dfrac{\sin\Omega_0\,z^{-1}}{1-2\cos\Omega_0\,z^{-1}+z^{-2}}$ | $\lvert z\rvert>1$ |

The two trig pairs come straight from Euler plus the workhorse pair. Writing $\cos(\Omega_0 n) = \tfrac12(e^{j\Omega_0 n}+e^{-j\Omega_0 n})$ and applying $a^nu[n]$ twice with $a = e^{\pm j\Omega_0}$ (both of magnitude 1, hence ROC $|z|>1$):

$$\tfrac12\!\left[\frac{1}{1-e^{j\Omega_0}z^{-1}}+\frac{1}{1-e^{-j\Omega_0}z^{-1}}\right] = \frac{\tfrac12\left[(1-e^{-j\Omega_0}z^{-1})+(1-e^{j\Omega_0}z^{-1})\right]}{(1-e^{j\Omega_0}z^{-1})(1-e^{-j\Omega_0}z^{-1})} = \frac{1-\cos\Omega_0\,z^{-1}}{1-2\cos\Omega_0\,z^{-1}+z^{-2}}.$$

The sine version is identical with $\tfrac{1}{2j}$ and a minus sign, whose numerator becomes $\tfrac{1}{2j}(e^{j\Omega_0}-e^{-j\Omega_0})z^{-1} = \sin\Omega_0\,z^{-1}$. The poles sit at $z = e^{\pm j\Omega_0}$ — **on** the unit circle, which is why an undying sinusoid is marginally stable, not stable.

### Properties

**Linearity.** $\alpha x[n] + \beta w[n] \leftrightarrow \alpha X(z) + \beta W(z)$, ROC $\supseteq$ the intersection of the two ROCs (it can be *larger* if a pole cancels).

**Time shift — the star of the show.** For integer $m$,

$$\boxed{\;x[n-m] \;\longleftrightarrow\; z^{-m}X(z)\;}$$

with the same ROC (possibly adding or removing $z=0$ or $z=\infty$). *In words: delaying by $m$ samples multiplies the transform by $z^{-m}$.* Proof, one line: $\sum_n x[n-m]z^{-n} \overset{k=n-m}{=} \sum_k x[k]z^{-(k+m)} = z^{-m}X(z)$.

**Convolution.** $x[n] * h[n] \leftrightarrow X(z)H(z)$, ROC $\supseteq$ the intersection. The convolution *sum* you ground through by hand in [1.5](01-05-convolution-discrete-time.md) becomes ordinary multiplication of two polynomials in $z^{-1}$. This is the same trade you made in [2.3](02-03-continuous-time-fourier-transform.md) and [2.4](02-04-laplace-transform-roc.md), and it is what makes $H(z)$ — the **system function** of [4.2](04-02-discrete-transfer-functions-z-plane.md) — worth defining at all.

## Picture

![Side-by-side z-plane and s-plane. Left: unit circle with poles at 0.5 and 2, the annulus 0.5 < |z| < 2 shaded as the ROC. Right: the jω axis with poles at −1 and 2, the strip −1 < Re s < 2 shaded. Both regions contain their respective stability contour, so both signals are stable but two-sided.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — a sum of two causal exponentials).** Find $X(z)$ and its ROC for

$$x[n] = \left(\tfrac12\right)^n u[n] + \left(-\tfrac13\right)^n u[n].$$

Apply the workhorse pair term by term with $a = \tfrac12$ and $a = -\tfrac13$:

$$X(z) = \frac{1}{1-\tfrac12 z^{-1}} + \frac{1}{1+\tfrac13 z^{-1}},$$

with ROCs $|z| > \tfrac12$ and $|z| > \tfrac13$. Linearity gives the intersection, $|z| > \tfrac12$ — the outermost pole wins, exactly as the right-sided rule predicts.

Read off the verdicts without computing anything else. Poles at $z = \tfrac12$ and $z = -\tfrac13$, both of magnitude $< 1$, so the ROC $|z|>\tfrac12$ **contains the unit circle**: stable. The ROC is outside the outermost pole and, since $X(\infty) = 1 + 1 = 2$ is finite, includes $z=\infty$: causal. Both boxes ticked, exactly as "all poles inside the unit circle" promised.

**Example 2 (why you'd care — one expression, three signals).** Take

$$X(z) = \frac{1}{1-\tfrac12 z^{-1}} + \frac{1}{1-2z^{-1}},$$

poles at $z = \tfrac12$ and $z = 2$. Written as a single fraction, $X(z) = \dfrac{2-\tfrac52 z^{-1}}{1-\tfrac52 z^{-1}+z^{-2}}$. That expression alone determines nothing. Three annuli avoid both poles, and each names a different signal:

- $|z| < \tfrac12$ — inside the innermost pole, so **left-sided**: $x[n] = -\left(\tfrac12\right)^n u[-n-1] - 2^n u[-n-1]$. Misses the unit circle $\Rightarrow$ unstable.
- $\tfrac12 < |z| < 2$ — a genuine ring, so **two-sided**: the $\tfrac12$ pole is right-sided and the $2$ pole is left-sided, giving $x[n] = \left(\tfrac12\right)^n u[n] - 2^n u[-n-1]$. Contains the unit circle $\Rightarrow$ **stable**, but not causal.
- $|z| > 2$ — outside the outermost pole, so **right-sided**: $x[n] = \left(\tfrac12\right)^n u[n] + 2^n u[n]$. Causal, but misses the unit circle $\Rightarrow$ unstable (that $2^n$ explodes).

This is the discrete replay of 2.4's three-panel s-plane figure, and it is the figure above. Note the trade: with a pole outside the unit circle you may have causality or stability, never both.

## Watch out

- **You might think $X(z)$ alone specifies the signal.** It does not, and this is the entire point of the ROC. $\frac{1}{1-2z^{-1}}$ is $2^n u[n]$ for $|z|>2$ and $-2^n u[-n-1]$ for $|z|<2$. Always transport the pair.
- **You might read poles off the $z^{-1}$ form and lose one.** $\frac{1}{1-az^{-1}}$ and $\frac{z}{z-a}$ are the same function, but the second makes it visible that there is also a **zero at $z=0$**. The $z^{-1}$ form is the right one for reading off delays; the $z$ form is the right one for counting poles and zeros. Convert before you draw a pole–zero map in [4.2](04-02-discrete-transfer-functions-z-plane.md).
- **You might import "poles in the left half-plane" verbatim.** In discrete time the left half of the z-plane means nothing. A pole at $z = -0.9$ is deep in the "left half" and perfectly stable, because $|-0.9| < 1$. What matters is **distance from the origin**, never which side.
- **You might expect $z^{+n}$.** The negative exponent in $z^{-n}$ is a deliberate choice so that delay $\to$ multiply by $z^{-1}$. Get the sign backwards and every block diagram in [4.3](04-03-difference-equations-realizations.md) runs in reverse.

## One-liner

> The z-transform is the DTFT with a magnitude knob $|z|$ on it: the unit circle is where the DTFT lives, the ROC is the annulus where the sum converges, and a system is causal *and* stable exactly when all its poles hide strictly inside that circle.

## Problems

**P1 (🟢)** A signal has $X(z) = \dfrac{1}{1-0.6z^{-1}}$. Give $x[n]$ for (a) ROC $|z|>0.6$ and (b) ROC $|z|<0.6$. For each, state whether the signal is causal and whether it is stable, with the reason.

**P2 (🟡)** An LTI system has impulse response $h[n]=\left(\tfrac12\right)^n u[n]$ and is driven by the unit step $x[n]=u[n]$. Use the convolution property to find the step response $y[n]$ in closed form, and check your answer against the convolution sum at $n=0,1,2$.

**P3 (🔴, optional)** $X(z) = \dfrac{1}{(1-0.4z^{-1})(1-2.5z^{-1})}$. List every possible ROC. For each, classify the signal as causal / stable. Then write $x[n]$ explicitly for the stable one.

<details>
<summary>Solutions</summary>

**P1** The pole is at $z = 0.6$; the two ROCs are the only two annuli avoiding it.

(a) ROC $|z| > 0.6$ is *outside* the pole, so the signal is right-sided, and the workhorse pair with $a = 0.6$ gives

$$x[n] = (0.6)^n u[n].$$

**Causal** (right-sided, and $X(\infty)=1$ is finite, so $z=\infty$ is in the ROC). **Stable**, because $|z|>0.6$ contains $|z|=1$. Direct check: $\sum_{n\ge0}(0.6)^n = 1/0.4 = 2.5 < \infty$ ✓.

(b) ROC $|z| < 0.6$ is *inside* the pole, so the signal is left-sided, and the companion pair gives

$$x[n] = -(0.6)^n u[-n-1].$$

**Not causal** — it is nonzero only for $n \le -1$. **Not stable**: $|z|<0.6$ excludes the unit circle. Direct check: $\sum_{n\le-1}(0.6)^n = \sum_{m\ge1}(0.6)^{-m} = \sum_{m\ge1}(1.667)^m$, which diverges ✓.

*Check.* Same expression, opposite verdicts on both counts — the ROC did all the work.

**P2** Transform each piece:

$$H(z) = \frac{1}{1-\tfrac12 z^{-1}},\ |z|>\tfrac12; \qquad X(z) = \frac{1}{1-z^{-1}},\ |z|>1.$$

Convolution becomes multiplication, with ROC the intersection $|z|>1$:

$$Y(z) = \frac{1}{(1-z^{-1})\left(1-\tfrac12 z^{-1}\right)}.$$

Partial fractions in the variable $v = z^{-1}$: write $Y = \dfrac{A}{1-v}+\dfrac{B}{1-\tfrac12 v}$, so $A\left(1-\tfrac12 v\right)+B(1-v) = 1$. Setting $v=1$: $A\cdot\tfrac12 = 1 \Rightarrow A = 2$. Setting $v=2$: $B(1-2)=1 \Rightarrow B=-1$.

Both terms take the *right-sided* inverse (ROC $|z|>1$ is outside both poles):

$$y[n] = \left(2-\left(\tfrac12\right)^n\right)u[n].$$

*Check against the convolution sum* $y[n]=\sum_{k=0}^{n}h[k]$ (convolving with a step is a running sum, from [1.5](01-05-convolution-discrete-time.md)):

- $n=0$: sum $=1$; formula $2-1=1$ ✓
- $n=1$: sum $=1+0.5=1.5$; formula $2-0.5=1.5$ ✓
- $n=2$: sum $=1+0.5+0.25=1.75$; formula $2-0.25=1.75$ ✓

And $y[n]\to 2$ as $n\to\infty$, matching the DC gain $H(z)|_{z=1} = 1/(1-\tfrac12) = 2$ ✓.

**P3** Poles at $z=0.4$ and $z=2.5$. Three annuli avoid both:

| ROC | Sidedness | Causal? | Stable? |
|---|---|---|---|
| $\lvert z\rvert<0.4$ | left-sided | no | no — excludes $\lvert z\rvert=1$ |
| $0.4<\lvert z\rvert<2.5$ | two-sided | no | **yes** — contains $\lvert z\rvert=1$ |
| $\lvert z\rvert>2.5$ | right-sided | yes | no — excludes $\lvert z\rvert=1$ |

For the stable (middle) one, partial-fraction in $v=z^{-1}$: $\dfrac{1}{(1-0.4v)(1-2.5v)} = \dfrac{A}{1-0.4v}+\dfrac{B}{1-2.5v}$, so $A(1-2.5v)+B(1-0.4v)=1$.

- $v = 1/0.4 = 2.5$: $A(1-6.25) = 1 \Rightarrow A = -\tfrac{1}{5.25} = -\tfrac{4}{21}$.
- $v = 1/2.5 = 0.4$: $B(1-0.16) = 1 \Rightarrow B = \tfrac{1}{0.84} = \tfrac{25}{21}$.

In the ring $0.4<|z|<2.5$, the inner pole ($0.4$) is inside the ROC's inner edge $\Rightarrow$ take its **right-sided** inverse; the outer pole ($2.5$) is outside $\Rightarrow$ take its **left-sided** inverse:

$$x[n] = -\tfrac{4}{21}(0.4)^n u[n] \;-\; \tfrac{25}{21}(2.5)^n u[-n-1].$$

*Check.* Setting $v=0$ in the partial fractions requires $A+B=1$: $-\tfrac{4}{21}+\tfrac{25}{21} = \tfrac{21}{21} = 1$ ✓. Sanity on the signal: it decays like $0.4^n$ going right and like $2.5^{n}\to0$ going left (since $n\to-\infty$ makes $2.5^n$ vanish), so it is absolutely summable — consistent with the stable verdict ✓.

</details>

## Flashback

**From Lesson 3.2 (Aliasing and reconstruction):** A pure tone at 700 Hz is sampled at $f_s = 500$ Hz. (a) What apparent frequency shows up in the samples? (b) What discrete-time frequency $\Omega$ (radians/sample) does the 700 Hz tone land on, and where is that on the unit circle?

<details>
<summary>Solution</summary>

(a) The Nyquist frequency is $f_s/2 = 250$ Hz, and 700 Hz is well above it, so the tone aliases. Fold it back by subtracting multiples of $f_s$ until the result lies in $[-250, 250]$:

$$700 - 500 = 200\ \text{Hz}, \qquad |200| \le 250 \ \checkmark$$

The samples are indistinguishable from a **200 Hz** tone.

(b) Discrete-time frequency is $\Omega = 2\pi f/f_s$:

$$\Omega = \frac{2\pi(700)}{500} = 2.8\pi \ \text{rad/sample}.$$

That is more than one full lap. Subtract $2\pi$ to land in the principal range $(-\pi,\pi]$:

$$\Omega = 2.8\pi - 2\pi = 0.8\pi \ \text{rad/sample}.$$

*Check.* Converting back: $f = \Omega f_s/(2\pi) = 0.8\pi(500)/(2\pi) = 200$ Hz — the same alias ✓.

And note what part (b) just re-derived in this lesson's language: $z = e^{j(2.8\pi)}$ and $z = e^{j(0.8\pi)}$ are **the same point on the unit circle**. Aliasing and the DTFT's $2\pi$-periodicity are one phenomenon — walking $2.8\pi$ radians around a circle puts you exactly where walking $0.8\pi$ does.

</details>

## Connections

- **Backward:** this is [2.4](02-04-laplace-transform-roc.md) transplanted — every ROC rule, the causality test, the stability test, and the "expression alone is ambiguous" warning carry over under $s \mapsto z = e^{sT}$, which bends the $j\omega$ axis into the unit circle and folds the left half-plane into its interior. The unit-circle restriction recovers [3.3](03-03-discrete-time-fourier-transform.md)'s DTFT exactly, and the convolution property retires the sums of [1.5](01-05-convolution-discrete-time.md).
- **Forward:** [4.2](04-02-discrete-transfer-functions-z-plane.md) turns $X(z)$ into the system function $H(z)$ and reads frequency response geometrically off pole–zero distances to the unit circle; [4.3](04-03-difference-equations-realizations.md) makes $z^{-1}$ a physical delay block; [4.4](04-04-filter-design-basics.md) places poles deliberately to shape a passband.
- **Sideways:** the same "sample the plane, exponentiate the map" trick governs discrete-time control design in [`control-systems`](../../control-systems/syllabus.md), where the Routh–Hurwitz left-half-plane test is replaced by a stay-inside-the-unit-circle test. The geometric series that generated the workhorse pair is the same one that sums a perpetuity in finance and a partition function in statistical mechanics — a growth ratio strictly less than 1 is the only hypothesis any of them need.

# Real Analysis · Lesson 8.3: Power series

> ⏱ ~15 min · Module 8: Sequences and series of functions · Builds on: [8.2 What uniform convergence preserves](08-02-what-uniform-convergence-preserves.md), [3.2 Convergence tests](03-02-convergence-tests.md) · Unlocks: `complex-analysis` (the handoff — see Connections)

## Why this matters

Nearly every function you actually compute with — $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$, the solutions of the differential equations physics runs on — is secretly an *infinite polynomial*. That's not a metaphor: it's a series $\sum a_n(x-c)^n$, and the whole reason it's safe to treat these functions like polynomials — differentiate them, integrate them, add them term by term — is a theorem, not a habit. This is the lesson where the two halves of the course fuse: the series machinery of Module 3 tells you *where* the infinite polynomial makes sense, and the uniform-convergence machinery of Module 8 tells you it behaves *exactly* like a finite one there. It's also the doorway out: redraw the picture with a complex variable and you've walked into `complex-analysis`.

## The idea

A polynomial is the friendliest object in analysis: continuous everywhere, differentiable everywhere, and you differentiate or integrate it one term at a time without a second thought. A **power series** is what you get by letting the polynomial run forever — $a_0 + a_1(x-c) + a_2(x-c)^2 + \cdots$.

The catch is that an infinite sum can diverge, so first you have to ask *where* it even names a number. The answer is astonishingly clean: there's a single radius $R$ around the center $c$: **inside** it the series converges (in fact absolutely), **outside** it diverges, and only the two boundary points are up for grabs. Not some scattered set of good points — an interval, symmetric about $c$.

And here's the miracle. On that interval of convergence the infinite polynomial keeps *all* the friendliness of a finite one: it's continuous, and you may differentiate and integrate it term by term, forever, getting new power series with the *same* radius. Why are you allowed to swap the infinite sum past a derivative or an integral? Because the series converges **uniformly** on every compact piece inside the radius — and uniform convergence is exactly the license [8.2](08-02-what-uniform-convergence-preserves.md) proved you need. Module 3 finds the interval; Module 8 makes it a polynomial.

## The formal version

**Power series.** A **power series about $c$** is a series of functions
$$\sum_{n=0}^{\infty} a_n (x-c)^n,$$
where the $a_n\in\mathbb{R}$ are the **coefficients** and $c\in\mathbb{R}$ is the **center**. Its sum is a function of $x$, defined wherever the series converges.

> In words: an infinite polynomial, measured by its displacement $x-c$ from the center.

**Radius of convergence.** For each power series there is a value $R\in[0,\infty]$, the **radius of convergence**, such that the series **converges absolutely** for $|x-c|<R$ and **diverges** for $|x-c|>R$. It is given by the **Cauchy–Hadamard formula**
$$\frac{1}{R} = \limsup_{n\to\infty} |a_n|^{1/n},$$
and when the simpler limit exists, equivalently $R = \lim_{n\to\infty}\left|\dfrac{a_n}{a_{n+1}}\right|$ (the ratio-test form). Conventions: $\tfrac10=\infty$ and $\tfrac1\infty=0$.

> In words: there's one magic distance $R$; step less than $R$ from the center and the series safely adds up, step more than $R$ and it blows up. The coefficients' growth rate sets $R$.

*Proof of the convergence-inside claim.* Fix $x$ with $|x-c|<R$ and pick $\rho$ with $|x-c|<\rho<R$. Since $\tfrac1R=\limsup|a_n|^{1/n}$ and $\tfrac1\rho>\tfrac1R$, for all large $n$ we have $|a_n|^{1/n}\le \tfrac1\rho$, i.e. $|a_n|\le \rho^{-n}$. Hence
$$|a_n(x-c)^n| = |a_n|\,|x-c|^n \le \left(\frac{|x-c|}{\rho}\right)^{n},$$
and $t:=|x-c|/\rho<1$, so $\sum t^n$ is a convergent **geometric series**. By the comparison test of [3.2](03-02-convergence-tests.md), $\sum|a_n(x-c)^n|$ converges — the series converges absolutely at $x$. (For $|x-c|>R$ the terms don't even go to $0$, so it diverges by the $n$th-term test.) $\blacksquare$

**Uniform convergence on compact subsets.** Let $0\le r<R$. On the closed interval $[c-r,\,c+r]$ the series converges **uniformly**.

> In words: not just at each point but *evenly* across any compact chunk sitting strictly inside the radius.

*Proof (Weierstrass M-test, from [8.2](08-02-what-uniform-convergence-preserves.md)).* For $x\in[c-r,c+r]$ we have $|x-c|\le r$, so $|a_n(x-c)^n|\le |a_n|r^n =: M_n$. Because $r<R$, the numerical series $\sum M_n=\sum|a_n|r^n$ converges (that's the convergence-inside claim applied at the real point $x=c+r$). The M-test then gives uniform convergence of $\sum a_n(x-c)^n$ on $[c-r,c+r]$. $\blacksquare$

**Continuity.** The sum $f(x)=\sum a_n(x-c)^n$ is **continuous** on the open interval $(c-R,\,c+R)$.

> In words: no jumps anywhere inside the radius.

*Why:* each partial sum is a polynomial, hence continuous; on any $[c-r,c+r]$ the convergence is uniform, and [8.2](08-02-what-uniform-convergence-preserves.md) says a uniform limit of continuous functions is continuous. Every point of $(c-R,c+R)$ lies in some such $[c-r,c+r]$, so $f$ is continuous throughout.

**Term-by-term differentiation and integration.** On $(c-R,c+R)$, the sum $f$ is differentiable with
$$f'(x) = \sum_{n=1}^{\infty} n\,a_n (x-c)^{n-1},$$
and an antiderivative is
$$\int f = \sum_{n=0}^{\infty} \frac{a_n}{n+1}(x-c)^{n+1} + C.$$
Both new series have the **same radius of convergence** $R$.

> In words: differentiate or integrate the infinite polynomial one term at a time, just like a finite one — and you stay inside the very same interval.

*Why the radius is unchanged, and why it's licensed.* The differentiated series has coefficients $b_{n-1}=n a_n$. Since $n^{1/n}\to 1$, $\limsup|n a_n|^{1/n}=\limsup|a_n|^{1/n}=\tfrac1R$: same radius. So the differentiated series *also* converges uniformly on every $[c-r,c+r]$, and [8.2](08-02-what-uniform-convergence-preserves.md)'s differentiation theorem — *if $f_n\to f$ pointwise and $f_n'\to g$ uniformly, then $f'=g$* — lets us pass the derivative inside the sum. Applying this over and over: **a power series is infinitely differentiable inside its radius**, and $a_n = f^{(n)}(c)/n!$ (it's its own Taylor series).

## Picture

![The real line centered at c: the interval (c-R, c+R) shaded as the convergence region, divergence outside, the two endpoints flagged with "?", and a nested compact interval [c-r, c+r] where convergence is uniform](assets/08-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — find the radius).** Take $\displaystyle\sum_{n=1}^\infty \frac{x^n}{n\,3^n}$ (center $c=0$, $a_n=\tfrac{1}{n3^n}$). Use the ratio form:
$$R=\lim_{n\to\infty}\left|\frac{a_n}{a_{n+1}}\right| = \lim_{n\to\infty}\frac{1/(n3^n)}{1/((n+1)3^{n+1})} = \lim_{n\to\infty}\frac{(n+1)3^{n+1}}{n3^n} = 3\lim_{n\to\infty}\frac{n+1}{n} = 3.$$
So it converges absolutely on $(-3,3)$ and diverges outside. **Endpoints are case-by-case:** at $x=3$ it's $\sum \tfrac1n$, the harmonic series — diverges; at $x=-3$ it's $\sum \tfrac{(-1)^n}{n}$, the alternating harmonic — converges (conditionally). Same radius, opposite verdicts at the two ends. The interval of convergence is $[-3,\,3)$.

**Example 2 (why you'd care — $\exp'=\exp$, cleanly).** Define
$$\exp(x) := \sum_{n=0}^{\infty} \frac{x^n}{n!}.$$
Radius: $R=\lim\left|\tfrac{a_n}{a_{n+1}}\right|=\lim\tfrac{1/n!}{1/(n+1)!}=\lim(n+1)=\infty$. So the series converges for *every* real $x$, and is infinitely differentiable everywhere. Differentiate term by term (licensed on all of $\mathbb{R}$ since $R=\infty$):
$$\exp'(x)=\sum_{n=1}^\infty \frac{n\,x^{n-1}}{n!} = \sum_{n=1}^\infty \frac{x^{n-1}}{(n-1)!} = \sum_{m=0}^\infty \frac{x^{m}}{m!} = \exp(x).$$
The series *is* its own derivative — a fully rigorous proof of $\exp'=\exp$, with no remainder term to bound. Contrast [6.3](06-03-taylor-theorem-remainder.md), where reaching $e^x$ meant showing the Lagrange remainder $\to 0$; here the series *is* the definition and differentiation is a one-line index shift. The same move handles
$$\sin x=\sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!},\qquad \cos x=\sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!}\quad(R=\infty\text{ each}),$$
and term-by-term differentiation gives $\sin'=\cos$, $\cos'=-\sin$ — the trig identities fall out of index bookkeeping. A function equal to a convergent power series near each point is called **analytic**; $\exp,\sin,\cos$ are analytic on all of $\mathbb{R}$.

## Watch out

- You might think the radius decides the endpoints too, but $|x-c|=R$ is genuinely **case-by-case**: a series can converge at both endpoints, one, or neither (Example 1 converges at $-3$, diverges at $+3$). The radius says *nothing* there — you must test each endpoint by hand with the tools of [3.2](03-02-convergence-tests.md) and Module 3.
- You might think convergence is uniform on the *whole* open interval $(c-R,c+R)$, but the theorem only promises uniform convergence on **compact** subsets $[c-r,c+r]$ with $r<R$ strictly. Near the far edge the convergence can slow without bound; $\sum x^n$ on $(-1,1)$ is the standard cautionary tale.
- You might think you can differentiate or integrate term by term anywhere, but the license holds **only inside $R$**. Outside, the series doesn't even converge — there's no function to differentiate. All the polynomial-like magic is an *interior* phenomenon.

## One-liner

> Inside its radius of convergence a power series is a polynomial in every way that matters — continuous, and differentiable and integrable term by term — because it converges uniformly on every compact piece within.

## Problems

**P1 (🟢)** Find the radius of convergence of $\displaystyle\sum_{n=0}^\infty \frac{(x-2)^n}{2^n}$, and identify the sum in closed form for $x$ inside it. (Center $c=2$.)

**P2 (🟡)** Starting from the geometric series $\dfrac{1}{1-x}=\sum_{n=0}^\infty x^n$ on $(-1,1)$, integrate term by term to derive a power series for $\ln(1-x)$, state its radius, and check the constant of integration.

**P3 (🔴, optional)** Let $f(x)=\sum_{n=0}^\infty \dfrac{x^n}{n^2+1}$. (a) Find its radius of convergence. (b) Show $f$ is continuous on $(-1,1)$ and, using an endpoint test, that the series in fact converges (absolutely) at *both* $x=\pm 1$. (c) Explain why part (b) does **not** by itself let you conclude the series converges *uniformly* on the closed interval $[-1,1]$ — and then name the theorem that, with a little more work, would.

<details>
<summary>Solutions</summary>

**P1** Coefficients $a_n=2^{-n}$, so $R=\lim\left|\tfrac{a_n}{a_{n+1}}\right|=\lim\tfrac{2^{-n}}{2^{-(n+1)}}=2$. (Or root form: $|a_n|^{1/n}=\tfrac12$, so $\tfrac1R=\tfrac12$.) It converges for $|x-2|<2$, i.e. on $(0,4)$. The sum is geometric with ratio $t=\tfrac{x-2}{2}$:
$$\sum_{n=0}^\infty \left(\frac{x-2}{2}\right)^n = \frac{1}{1-\frac{x-2}{2}} = \frac{2}{2-(x-2)} = \frac{2}{4-x},\qquad 0<x<4.$$

**P2** On $(-1,1)$ the geometric series converges uniformly on each $[-r,r]$, so we may integrate term by term from $0$ to $x$:
$$\int_0^x \frac{1}{1-t}\,dt = \sum_{n=0}^\infty \int_0^x t^n\,dt = \sum_{n=0}^\infty \frac{x^{n+1}}{n+1} = \sum_{k=1}^\infty \frac{x^k}{k}.$$
The left side is $\big[-\ln(1-t)\big]_0^x = -\ln(1-x)$. Hence
$$\ln(1-x) = -\sum_{k=1}^\infty \frac{x^k}{k} = -x-\frac{x^2}{2}-\frac{x^3}{3}-\cdots.$$
Radius: term-by-term integration preserves $R$, so $R=1$ (same as the geometric series). Constant check: at $x=0$ both sides are $0$, so the constant of integration is indeed $0$. ✓ (At $x=-1$ this recovers $\ln 2 = 1-\tfrac12+\tfrac13-\cdots$, the alternating harmonic sum.)

**P3** (a) $a_n=\tfrac{1}{n^2+1}$, and $|a_n|^{1/n}=(n^2+1)^{-1/n}\to 1$ since $(n^2+1)^{1/n}\to 1$ (take logs: $\tfrac{\ln(n^2+1)}{n}\to 0$). So $\tfrac1R=1$, $R=1$.

(b) Continuity on $(-1,1)$: on any $[-r,r]$ with $r<1$ the M-test with $M_n=\tfrac{r^n}{n^2+1}$ (and $\sum M_n\le\sum r^n<\infty$) gives uniform convergence, and each partial sum is a polynomial, so by [8.2](08-02-what-uniform-convergence-preserves.md) the sum is continuous on all of $(-1,1)$. Endpoints: at $x=1$ the series is $\sum \tfrac1{n^2+1}$, which converges by comparison with $\sum \tfrac1{n^2}$ (a convergent $p=2$ series, [3.2](03-02-convergence-tests.md)); at $x=-1$ it's $\sum \tfrac{(-1)^n}{n^2+1}$, which converges *absolutely* by the same comparison. So it converges at both endpoints.

(c) Convergence *at* each endpoint is a statement about a single point — a numerical series adding up — whereas *uniform* convergence on $[-1,1]$ is a statement about the whole family of partial sums approaching the sum evenly across the interval; pointwise convergence at every point (endpoints included) does not imply it. (The theorem that *does* upgrade this: since here $\sum|a_n|=\sum\tfrac1{n^2+1}<\infty$, the Weierstrass M-test with $M_n=\tfrac1{n^2+1}$ applies on the *closed* $[-1,1]$ — $|a_n x^n|\le M_n$ for $|x|\le 1$ — giving uniform convergence on all of $[-1,1]$. That extra summability is special to this series; **Abel's theorem** is the general tool for handling the endpoint.)

</details>

## Flashback

**From Lesson 3.2 (Convergence tests):** Determine whether $\displaystyle\sum_{n=1}^\infty \frac{n!}{n^n}$ converges. Say which test you reach for and why.

<details>
<summary>Solution</summary>

The factorial-over-power shape screams the **ratio test**. With $a_n=\tfrac{n!}{n^n}$,
$$\frac{a_{n+1}}{a_n} = \frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{n!} = \frac{(n+1)\,n^n}{(n+1)^{n+1}} = \frac{n^n}{(n+1)^n} = \left(\frac{n}{n+1}\right)^n = \frac{1}{\left(1+\frac1n\right)^n}.$$
As $n\to\infty$, $\left(1+\tfrac1n\right)^n\to e$, so the ratio $\to \tfrac1e < 1$. By the ratio test the series **converges**. (The root test also works and gives the same $\tfrac1e$ via $\tfrac{(n!)^{1/n}}{n}\to\tfrac1e$, but the ratio test is cleaner here because the factorial telescopes.) $\blacksquare$

</details>

## Connections

- **Backward:** this lesson is the payoff of the whole course fusing. The **completeness** of $\mathbb{R}$ (Module 1) made bounded monotone **sequences** converge (Module 2); partial sums turned sequences into **series** with convergence tests (Module 3, [3.2](03-02-convergence-tests.md)); and **uniform convergence** (Module 8, [8.2](08-02-what-uniform-convergence-preserves.md)) is what lets those series of functions inherit continuity and calculus. The Cauchy–Hadamard proof leaned on the root/comparison tests; the term-by-term theorems leaned on the M-test. Nothing here is new machinery — it's every layer of the course stacked and paying off at once.
- **Forward (the handoff to `complex-analysis`):** rewrite $\sum a_n(x-c)^n$ with a **complex** variable $z$ in place of $x$, and the radius of convergence becomes a genuine *disk* $|z-c|<R$ in the plane. Everything proved here survives verbatim — and now "differentiable" (complex-differentiable) turns out to be equivalent to "locally a power series," so **analyticity** becomes the central object rather than a lucky bonus. $\exp,\sin,\cos$ reunite through $e^{i\theta}=\cos\theta+i\sin\theta$, which is just these three series recombined. That is exactly where `complex-analysis` begins. You've finished real analysis; the next door is already open.
- **Sideways:** the "$a_n=f^{(n)}(c)/n!$" fact says a power series is its own Taylor series ([6.3](06-03-taylor-theorem-remainder.md)) — but now convergence *to* the function is automatic inside $R$, no remainder estimate required. In physics and `differential-equations`, power series are the default method for solving ODEs (Frobenius, special functions); the radius of convergence tells you how far from the center your solution is trustworthy.

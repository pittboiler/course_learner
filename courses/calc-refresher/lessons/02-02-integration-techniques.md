# Calculus Refresher · Lesson 2.2: Techniques that matter

> ⏱ ~15 min · Module 2: Integration · Builds on: [1.2 The rules, and why the chain rule is the big one](01-02-differentiation-rules.md), [2.1 The integral as accumulation, and the FTC](02-01-integral-as-accumulation.md) · Unlocks: 2.3 (improper integrals and integrals as models)

## Why this matters

The FTC (2.1) turned "compute this area" into "find an antiderivative" — but unlike differentiation, antidifferentiation has no algorithm. What it has is three moves that cover ~95% of what physics, economics, and probability will throw at you. The real skill isn't executing the moves (each is five lines); it's **recognizing which one an integral wants within ten seconds of looking at it**. That recognition reflex is what this lesson installs.

## The idea

Here's the organizing insight: **every integration technique is a differentiation rule from 1.2 running in reverse.**

- **Substitution** is the chain rule backwards: the chain rule *produces* integrands of the shape (outer function of a block) × (derivative of the block), so when you *see* that shape, you unwind it.
- **Integration by parts** is the product rule backwards: differentiation of a product leaves a two-term mess, so parts lets you trade one product-integral for a hopefully-easier one.
- **Partial fractions** is fraction addition backwards: someone combined simple fractions over a common denominator; you split them apart again so each piece is easy.

So the game is forensic: look at an integrand and ask *"what differentiation rule could have produced this?"* Run these questions **in order** — the order is the technique:

1. **Simplify first.** Can algebra reduce it to things you know? ($\int \frac{x^2+1}{x}\,dx$ is just $\int x\,dx + \int \frac{dx}{x}$ — no technique needed.)
2. **Substitution?** Is there an *inner function* whose derivative (up to a constant factor) appears as a factor in the integrand? If yes, substitute. Always check this **before** parts — many products are secretly substitutions.
3. **Parts?** Is it a genuine product of two *unrelated* pieces, one of which gets simpler when differentiated ($\ln x$, polynomials) while the other is happy to be integrated ($e^x$, $\sin$, $\cos$)?
4. **Partial fractions?** Is it a ratio of polynomials? Factor the bottom and split.

## The formal version

**Substitution (chain rule, reversed).** With $u = g(x)$, so $du = g'(x)\,dx$:

$$\int f(g(x))\,g'(x)\,dx = \int f(u)\,du.$$

In words: rename the inner block $u$, and if the block's derivative is standing next to it, the whole thing collapses to a one-variable integral in $u$. This is exactly $\frac{d}{dx}F(g(x)) = F'(g(x))\,g'(x)$ read right-to-left. For definite integrals, convert the limits too: $x = a$ becomes $u = g(a)$.

**Integration by parts (product rule, reversed).** For differentiable $u(x)$ and $v(x)$:

$$\int u\,dv = uv - \int v\,du.$$

In words: swap which factor carries the derivative, at the cost of a boundary term $uv$. It comes from integrating the product rule $(uv)' = u'v + uv'$ and rearranging. Choose $u$ = the factor that *improves* under differentiation (logs vanish into $1/x$, polynomials lose a degree; exponentials and sines merely cycle).

**Partial fractions (fraction addition, reversed).** If $\frac{p(x)}{q(x)}$ is *proper* (degree of $p$ < degree of $q$) and $q$ factors into distinct linear pieces:

$$\frac{p(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b},$$

and each piece integrates to a log. In words: undo the common-denominator addition, then integrate the simple fractions one at a time. Find $A$ fast by the **cover-up method**: multiply both sides by $(x-a)$ and set $x = a$. If the fraction isn't proper, polynomial long division first; if a quadratic factor won't split over the reals, that piece heads toward $\arctan$ (Stewart has the full catalog — distinct linear factors cover most of what you'll meet).

## Concrete instance

Run the checklist on $\displaystyle\int x\,e^{-x^2}\,dx$.

1. *Simplify?* No obvious algebra.
2. *Substitution?* Inner function candidate: $-x^2$ inside the exponential. Its derivative is $-2x$ — and there's an $x$ sitting right there as a factor, off only by the constant $-2$. **Substitution wins. Stop here.**
3. (We never even ask about parts — even though this is visibly a product. That's the point.)

Execute: let $u = -x^2$, so $du = -2x\,dx$, i.e. $x\,dx = -\tfrac{1}{2}\,du$:

$$\int x\,e^{-x^2}\,dx = -\frac{1}{2}\int e^{u}\,du = -\frac{1}{2}e^{u} + C = -\frac{1}{2}e^{-x^2} + C.$$

Check by differentiating: $\frac{d}{dx}\left(-\tfrac{1}{2}e^{-x^2}\right) = -\tfrac{1}{2}e^{-x^2}\cdot(-2x) = x\,e^{-x^2}$. ✓ Compare with $\int x\,e^{x}\,dx$: the inner function of $e^x$ is just $x$, whose derivative $1$ gives substitution nothing to eat — *that* one is a genuine product and wants parts (Example 2's cousin). Two integrals one symbol apart, two different techniques. Recognition, not ritual.

## Worked examples

**Example 1 (mechanical — partial fractions).** $\displaystyle\int \frac{5x-4}{x^2-x-2}\,dx$.

Checklist: no simplification; no inner-function-with-derivative (top is $5x-4$, derivative of bottom is $2x-1$ — not proportional); not a product; **ratio of polynomials, proper** (degree 1 < degree 2) → partial fractions. Factor: $x^2 - x - 2 = (x-2)(x+1)$, so

$$\frac{5x-4}{(x-2)(x+1)} = \frac{A}{x-2} + \frac{B}{x+1}.$$

Cover-up: multiply by $(x-2)$, set $x=2$: $A = \frac{5(2)-4}{2+1} = 2$. Multiply by $(x+1)$, set $x=-1$: $B = \frac{5(-1)-4}{-1-2} = 3$. Then

$$\int \frac{5x-4}{x^2-x-2}\,dx = 2\ln|x-2| + 3\ln|x+1| + C.$$

Sanity check by re-adding: $\frac{2(x+1) + 3(x-2)}{(x-2)(x+1)} = \frac{5x-4}{x^2-x-2}$. ✓

**Example 2 (why you'd care — parts computes an expected value).** A component fails at a random time $T$ with probability density $\lambda e^{-\lambda t}$ (the exponential distribution; $\lambda$ is the failure rate, in failures per hour). Its average lifetime is

$$E[T] = \int_0^\infty t\,\lambda e^{-\lambda t}\,dt.$$

Checklist: substitution finds nothing ($t$ is not the derivative of $-\lambda t$'s innards up to a constant... the leftover $t$ doesn't match). It's a true product — polynomial × exponential — and $t$ dies under differentiation: **parts**. Take $u = t$, $dv = \lambda e^{-\lambda t}\,dt$, so $du = dt$, $v = -e^{-\lambda t}$:

$$E[T] = \Big[-t\,e^{-\lambda t}\Big]_0^\infty + \int_0^\infty e^{-\lambda t}\,dt = 0 + \left[-\frac{1}{\lambda}e^{-\lambda t}\right]_0^\infty = \frac{1}{\lambda}.$$

(The boundary term vanishes because $e^{-\lambda t}$ crushes $t$ as $t \to \infty$; Lesson 2.3 makes that "$\to \infty$" rigorous.) A rate of $\lambda$ failures per hour gives a mean lifetime of $1/\lambda$ hours — this exact computation is the mean lifetime of a radioactive nucleus and the expected wait in a Poisson queue. Every expected value $\int t \cdot (\text{density})\,dt$ with an exponential-family density is parts earning its keep.

## Watch out

- You might think "I see a product, so integration by parts." But substitution outranks parts: $\int x e^{-x^2} dx$ is a product and parts makes it *worse*. Always hunt for an inner function's derivative first.
- You might think substitution is done once you've swapped $u$ in — but every $dx$ and every limit must convert too. Answering a definite integral in $u$-limits while writing $x$-limits (or back-substituting into limits that were already converted) is the classic silent error.
- You might think partial fractions applies to any fraction. It needs (a) a **proper** ratio — long-divide first if the numerator's degree is $\geq$ the denominator's — and (b) a *factorable* denominator. $\frac{2x}{x^2+1}$ has an irreducible bottom, and anyway the checklist catches it earlier: the top is the bottom's derivative, so it's a substitution ($\ln(x^2+1) + C$).

## One-liner

> Integration techniques are differentiation rules run in reverse — ask what rule *produced* the integrand: a chain-rule leftover wants substitution, a product with a dying factor wants parts, a ratio of polynomials wants to be split apart.

## Problems

**P1 (🟢)** Recognition drill — for each, name the technique (with the one-line reason from the checklist) and give the antiderivative:
(a) $\displaystyle\int \cos x \; e^{\sin x}\,dx$  (b) $\displaystyle\int x \sin x\,dx$  (c) $\displaystyle\int \frac{\ln x}{x}\,dx$ — careful, this one's a trap.

**P2 (🟡)** A population governed by logistic growth requires the integral $\displaystyle\int \frac{dx}{x(4-x)}$ (here $4$ is the carrying capacity in thousands). Evaluate it.

**P3 (🔴, optional)** Evaluate $\displaystyle\int e^x \cos x\,dx$. Hint: apply parts twice with the same choice pattern, and watch the original integral reappear — then treat that as an equation and solve for it.

<details>
<summary>Solutions</summary>

**P1**
(a) **Substitution** — inner function $\sin x$, and its derivative $\cos x$ is a factor. With $u = \sin x$, $du = \cos x\,dx$: $\int e^u\,du = e^{\sin x} + C$.
(b) **Parts** — genuine product, and $x$ dies under differentiation while $\sin x$ integrates happily. $u = x$, $dv = \sin x\,dx$, $du = dx$, $v = -\cos x$: $\int x\sin x\,dx = -x\cos x + \int \cos x\,dx = -x\cos x + \sin x + C$. Check: $\frac{d}{dx}(-x\cos x + \sin x) = -\cos x + x\sin x + \cos x = x\sin x$. ✓
(c) The trap: $\ln x$ usually screams "parts," but the checklist asks about substitution *first* — the inner function $\ln x$ has derivative $\frac{1}{x}$, which is right there as a factor. **Substitution**: $u = \ln x$, $du = \frac{dx}{x}$: $\int u\,du = \frac{1}{2}(\ln x)^2 + C$.

**P2** Ratio of polynomials, proper, factorable bottom → **partial fractions**:

$$\frac{1}{x(4-x)} = \frac{A}{x} + \frac{B}{4-x}.$$

Cover-up: multiply by $x$, set $x = 0$: $A = \frac{1}{4}$. Multiply by $(4-x)$, set $x = 4$: $B = \frac{1}{4}$. Then (mind the sign: $\int \frac{dx}{4-x} = -\ln|4-x|$ by the substitution $u = 4-x$):

$$\int \frac{dx}{x(4-x)} = \frac{1}{4}\ln|x| - \frac{1}{4}\ln|4-x| + C = \frac{1}{4}\ln\left|\frac{x}{4-x}\right| + C.$$

Check the split: $\frac{1}{4}\cdot\frac{(4-x) + x}{x(4-x)} = \frac{1}{x(4-x)}$. ✓ (Solving the logistic ODE by separation of variables is precisely this integral — that's the differential-equations payoff.)

**P3** Neither factor dies — $e^x$ and $\cos x$ both just cycle — so parts alone can't finish; the trick is that cycling brings the integral back. Let $I = \int e^x \cos x\,dx$. Parts with $u = \cos x$, $dv = e^x dx$ ($du = -\sin x\,dx$, $v = e^x$):

$$I = e^x\cos x + \int e^x \sin x\,dx.$$

Parts again, **same pattern** (trig as $u$): $u = \sin x$, $dv = e^x dx$:

$$\int e^x \sin x\,dx = e^x \sin x - \int e^x\cos x\,dx = e^x\sin x - I.$$

Substitute back: $I = e^x\cos x + e^x \sin x - I$, so $2I = e^x(\sin x + \cos x)$ and

$$I = \frac{e^x(\sin x + \cos x)}{2} + C.$$

Check: $\frac{d}{dx}\left[\frac{e^x(\sin x + \cos x)}{2}\right] = \frac{e^x(\sin x + \cos x) + e^x(\cos x - \sin x)}{2} = e^x\cos x$. ✓ (If you flip the $u$/$dv$ pattern between the two rounds, everything cancels to $I = I$ — true, useless.) Integrals of the shape $e^{at}\cos(\omega t)$ are the workhorse of driven oscillators and Fourier analysis; this trick is how they're all done.

</details>

## Flashback

**From Lesson 2.1 (The integral as accumulation, and the FTC):** Let $F(x) = \displaystyle\int_0^x e^{-t^2}\,dt$ (no closed form exists — and none is needed). Compute $F'(x)$, and then $\dfrac{d}{dx}\,F(x^2)$.

<details>
<summary>Solution</summary>

FTC I says differentiating an accumulation function returns the integrand at the upper limit: $F'(x) = e^{-x^2}$. For $F(x^2)$, the chain rule wraps around the FTC:

$$\frac{d}{dx}F(x^2) = F'(x^2)\cdot 2x = 2x\,e^{-(x^2)^2} = 2x\,e^{-x^4}.$$

Note the echo of this lesson: the answer has the "derivative of the inner function times outer evaluated at it" shape — exactly the fingerprint that substitution hunts for.

</details>

## Connections

- **Backward:** each technique is a rule from [1.2](01-02-differentiation-rules.md) inverted — substitution ↔ chain rule, parts ↔ product rule — and [2.1](02-01-integral-as-accumulation.md)'s FTC is the license to care about antiderivatives at all.
- **Forward:** Lesson 2.3 makes Example 2's $\int_0^\infty$ honest (when does the boundary term really vanish?) and turns physical descriptions into integrals — where you'll pick techniques under field conditions, not from a labeled exercise set.
- **Sideways (probability/econ):** Example 2 is the template for every expected value $E[T] = \int t \cdot f(t)\,dt$ — mean lifetimes, discounted cash flows $\int e^{-rt}\pi(t)\,dt$, option payoffs: parts, over and over.
- **Sideways (physics):** P3's $\int e^{x}\cos x$ pattern is the prototype Fourier-type integral — decomposing signals and solving driven oscillators in `mechanics-refresher` runs on exactly that cycle-twice-and-solve trick.

# Numerical Analysis · Lesson 1.3: Conditioning vs. Stability

> ⏱ ~15 min · Module 1: Error, Conditioning & Root-Finding · Builds on: [Lesson 1.2](01-02-cancellation-error-propagation.md) (cancellation & error propagation), [Lesson 1.1](01-01-floating-point-roundoff.md) ($\varepsilon_{\text{mach}}$) · Unlocks: [Lesson 1.4](01-04-bisection-fixed-point.md) (bisection & fixed-point iteration)

## Why this matters

When a computation returns a wrong answer there are exactly two suspects, and they demand opposite fixes. Either the **problem** was hypersensitive — a hair of change in the input swings the true answer wildly, so no algorithm on earth could have done better — or the **algorithm** manufactured error the problem didn't call for, and a smarter algorithm would rescue you. Confusing the two wastes days: you can rewrite an unstable routine ten times and never help an ill-conditioned problem, and you can chase "conditioning" when a two-line reformulation would fix everything. This lesson gives you the vocabulary — condition number, forward/backward error, backward stability — to assign blame correctly, and one master inequality that ties them together. It is the intellectual spine of the whole course.

## The idea

**Conditioning is a property of the problem. Stability is a property of the algorithm.** Keep those in separate mental boxes and most of numerical analysis snaps into focus.

The **condition number** $\kappa$ measures how much the *true* answer amplifies changes in the input. Feed the problem an input that is off by a relative sliver $\delta$; if the exact output moves by about $\kappa\,\delta$, then $\kappa$ is the amplification factor. A well-conditioned problem has small $\kappa$ (input noise stays quiet); an ill-conditioned problem has huge $\kappa$ (input noise explodes). This has nothing to do with how you compute — it's baked into the problem itself. Rounding your input to store it already costs you a relative $\varepsilon_{\text{mach}}$, and $\kappa$ says how badly even that irreducible error gets magnified.

Now the algorithm. Two ways to grade the answer it produced:

- **Forward error** — the honest question: *how wrong is my answer?* The relative gap between computed and true.
- **Backward error** — the sly question: *what problem did I actually solve?* The smallest input tweak that would make my computed answer the exact, correct answer to that tweaked problem.

An algorithm is **backward stable** when it always solves a problem right next door — backward error the size of rounding, no worse. That's the gold standard, because you can't sensibly ask for more than "you answered a question indistinguishable from the one I asked."

And here's the ledger that connects all three, the one line to carry out of this lesson:
$$\text{forward error} \ \lesssim\ \kappa \times \text{backward error}.$$
A backward-stable algorithm keeps backward error near $\varepsilon_{\text{mach}}$ — but if $\kappa$ is enormous, the forward error is still enormous. A perfect algorithm cannot save an ill-conditioned problem, and an ill-conditioned problem is not the algorithm's fault.

## The formal version

Take a problem "evaluate $f$ at input $x$," where $f$ is differentiable and $f(x)\neq 0$. Perturb the input relatively, $x \to x(1+\delta)$, and Taylor-expand:
$$f\big(x(1+\delta)\big) \approx f(x) + f'(x)\,x\delta.$$
The **relative** change in the output is therefore
$$\frac{f(x(1+\delta)) - f(x)}{f(x)} \approx \frac{x f'(x)}{f(x)}\,\delta.$$
The amplification of relative input error into relative output error is the **relative condition number**:
$$\boxed{\ \kappa(x) = \left|\frac{x\,f'(x)}{f(x)}\right|.\ }$$

*In words:* $\kappa$ is how many times bigger the output's relative error is than the input's relative error. $\kappa \approx 1$ is ideal; $\kappa \gg 1$ means the problem itself throws away precision before any algorithm runs.

**Well- vs. ill-conditioned.** A problem is *ill-conditioned* when $\kappa$ is large. Two archetypes generate almost every case you'll meet:

- **Subtracting near-equal numbers.** For $f(x)=x-c$ with $x\approx c$, $\ \kappa=\left|\tfrac{x}{x-c}\right|$, which blows up as $x\to c$. This is the *conditioning* face of the catastrophic cancellation you met in [Lesson 1.2](01-02-cancellation-error-propagation.md) — cancellation is what an ill-conditioned subtraction feels like at the bit level.
- **A root of a nearly-flat function.** If $x^*$ is a simple root of $g$ (so $g(x^*)=0$, $g'(x^*)\neq 0$) and you perturb the function by a small amount $\delta$, the root moves to $x^*+\Delta x$ with $g'(x^*)\Delta x + \delta \approx 0$, i.e.
$$\Delta x \approx -\frac{\delta}{g'(x^*)}.$$
So the root's sensitivity is $1/|g'(x^*)|$: a **flat** function (small slope at the root) is an **ill-conditioned** root-finding problem, because the crossing point slides far under a tiny nudge.

**Forward and backward error.** Let $\hat{f}$ denote what the algorithm actually computes. For input $x$ with true answer $f(x)$:
$$\text{(relative) forward error} = \frac{\lvert \hat f(x) - f(x)\rvert}{\lvert f(x)\rvert}, \qquad \text{(relative) backward error} = \min\left\{\frac{\lvert \tilde x - x\rvert}{\lvert x\rvert} : f(\tilde x) = \hat f(x)\right\}.$$

*In words:* forward error compares your answer to the truth; backward error finds the nearest input $\tilde x$ for which your answer is *exactly* right, and reports how far you had to move the question.

**Backward stability.** An algorithm $\hat f$ for $f$ is **backward stable** if for every $x$ there is a $\tilde x$ with
$$\hat f(x) = f(\tilde x) \quad\text{and}\quad \frac{\lvert \tilde x - x\rvert}{\lvert x\rvert} = O(\varepsilon_{\text{mach}}).$$

*In words:* the computed answer is the exact answer to a problem within rounding distance of the one you posed. That's the strongest realistic guarantee — it does **not** promise a small forward error, because it can't (see below).

**The master rule.** Combine the definitions. Writing $\hat f(x)=f(\tilde x)$ and expanding $f$ near $x$,
$$\frac{\lvert \hat f(x)-f(x)\rvert}{\lvert f(x)\rvert} = \frac{\lvert f(\tilde x)-f(x)\rvert}{\lvert f(x)\rvert} \approx \kappa(x)\cdot\frac{\lvert \tilde x - x\rvert}{\lvert x\rvert},$$
that is,
$$\text{forward error} \ \lesssim\ \kappa \times \text{backward error}.$$
For a backward-stable algorithm the backward error is $O(\varepsilon_{\text{mach}})$, so forward error $\lesssim \kappa\,\varepsilon_{\text{mach}}$. Blame is now assignable: **big forward error = (big $\kappa$: problem's fault) or (big backward error: algorithm's fault).** Rule out one and you've found the other.

## Concrete instance

**A well-conditioned problem wrecked by an unstable algorithm — and repaired.** Compute $f(x)=1-\cos x$ at $x=10^{-3}$.

*Step 1 — condition the problem.* $f'(x)=\sin x$, so
$$\kappa(x)=\left|\frac{x\sin x}{1-\cos x}\right|.$$
For small $x$, $\sin x\approx x$ and $1-\cos x\approx x^2/2$, giving $\kappa\approx \left|\dfrac{x\cdot x}{x^2/2}\right| = 2$. At $x=10^{-3}$ the true value is $f(x)=4.99999958\times10^{-7}$ and $\kappa\approx 2.0$. **The problem is beautifully conditioned** — a relative wobble in $x$ barely moves the answer.

*Step 2 — run the naive algorithm.* Compute $\operatorname{fl}(\cos x)$, then subtract from $1$. Now $\cos(10^{-3}) = 0.99999950000004\ldots$, and rounding it to double precision injects an absolute error of about $\varepsilon_{\text{mach}}\approx 1.1\times10^{-16}$. The subtraction $1-\operatorname{fl}(\cos x)$ is itself *exact* (the operands lie within a factor of two), so it introduces nothing new — but it also can't undo the damage: that $1.1\times10^{-16}$ absolute error now sits on top of a true result of size $5\times10^{-7}$, for a relative forward error of
$$\frac{1.1\times10^{-16}}{5\times10^{-7}} \approx 2\times10^{-10}.$$
You've dropped from ~16 correct digits to ~6 — about $\log_{10}\!\big(1/(5\times10^{-7})\big)\approx 6$ digits lost.

*Step 3 — read the ledger to assign blame.* Invert the master rule to recover the backward error from what we observed:
$$\text{backward error} \approx \frac{\text{forward error}}{\kappa} \approx \frac{2\times10^{-10}}{2} = 1\times10^{-10}.$$
That is *enormously* larger than $\varepsilon_{\text{mach}}\approx10^{-16}$. To explain the naive answer you'd have to pretend the input was wrong in its 10th digit — a perturbation a million times bigger than rounding. **The naive algorithm is not backward stable.** With $\kappa=2$ the problem was innocent; the algorithm is guilty.

*Step 4 — fix the algorithm, not the problem.* Use the identity $1-\cos x = 2\sin^2(x/2)$. Compute $\sin(5\times10^{-4})$ to full relative accuracy, square it, double it — no subtraction of near-equal numbers anywhere. Backward error drops back to $O(\varepsilon_{\text{mach}})$, the algorithm is backward stable, and since $\kappa\approx2$ the master rule now delivers a forward error of $\sim 2\varepsilon_{\text{mach}}$: all ~16 digits restored. Same problem, same $\kappa$; only the algorithm changed.

## Worked examples

**Example 1 (mechanical — reading $\kappa$ off two functions).**

*Square root, $f(x)=\sqrt{x}$.* Here $f'(x)=\tfrac{1}{2\sqrt x}$, so
$$\kappa=\left|\frac{x\cdot \tfrac{1}{2\sqrt x}}{\sqrt x}\right|=\left|\frac{x}{2x}\right|=\frac12.$$
Constant, everywhere. Square root is *better* than well-conditioned — it *halves* relative input error. No input makes it dangerous.

*A subtraction, $f(x)=x-1$.* Now $f'=1$ and $\kappa=\left|\tfrac{x}{x-1}\right|$. At $x=1.001$, $\kappa = \tfrac{1.001}{0.001}\approx 1001$. The problem is ill-conditioned precisely when $x\approx 1$ — the machine can't even *store* $x$ without a relative $\varepsilon_{\text{mach}}$ error, and $\kappa\approx1000$ turns that into a relative $10^{-13}$ error in the output before a single operation runs. This is why "subtract two things that are almost equal" is a red flag baked into the *problem*, independent of your code.

**Example 2 (why you'd care — a near-double root is an ill-conditioned root).** Consider finding the roots of
$$g(x) = (x-1)^2 - 10^{-6} = x^2 - 2x + (1-10^{-6}),$$
whose exact roots are $x = 1 \pm 10^{-3}$. The slope there is $g'(x) = 2(x-1) = \pm 2\times10^{-3}$ — small, because the parabola grazes the axis. Root sensitivity is $1/|g'(x^*)| = 1/(2\times10^{-3}) = 500$.

Now nudge the constant term by $\delta = +10^{-6}$ (a relative change of $10^{-6}$ in a coefficient of size $\approx 1$). The polynomial becomes $(x-1)^2$, a perfect double root at $x=1$: **both roots moved by $10^{-3}$**, an amplification of about $1000\times$ over the coefficient's $10^{-6}$ nudge — consistent with the sensitivity $500$ we computed (times two roots' worth of motion). A rounding-level wiggle in the input drags the roots a thousand times farther. No root-finder — bisection, Newton, anything — can locate these roots to more accuracy than the input coefficients carry. That's the *problem* being ill-conditioned, and it's exactly the near-double-root trap that will sabotage Newton's quadratic convergence in [Lesson 1.5](01-05-newton-secant.md).

## Watch out

- You might think a wrong answer proves your algorithm is buggy — but a *backward-stable* algorithm still returns garbage when $\kappa$ is huge. Before rewriting code, condition the problem: if $\kappa$ is astronomical, no algorithm will help and you must reformulate the *problem* (or accept the loss).
- You might think small backward error means small forward error — it doesn't. Backward stability guarantees you solved a *nearby problem exactly*, not that your answer is *near the true answer*. The gap between them is exactly the factor $\kappa$. "I solved the right question" and "I got the right answer" are different claims, and $\kappa$ is the exchange rate.
- You might think $\kappa$ describes your method — it describes the *problem and the input point*, full stop. The same function is well-conditioned at one $x$ and ill-conditioned at another ($f(x)=x-1$ above). Stability is the word for the algorithm; never say a problem is "unstable" or an algorithm is "ill-conditioned."

## One-liner

> Conditioning is the problem's fault and stability is the algorithm's — and forward error $\lesssim \kappa \times$ backward error is the ledger that tells you which one to blame.

## Problems

**P1 (🟢)** Compute the relative condition number $\kappa(x)=\lvert x f'(x)/f(x)\rvert$ for (a) $f(x)=x^n$ and (b) $f(x)=\ln x$. For each, state where (if anywhere) the problem is ill-conditioned, and give a one-line reason.

**P2 (🟡)** Consider evaluating $f(x)=e^x-1$ for very small $x>0$, via the naive algorithm "compute $\operatorname{fl}(e^x)$, then subtract $1$." (a) Show the *problem* is well-conditioned near $0$ by computing $\lim_{x\to 0}\kappa(x)$. (b) At $x=10^{-8}$, estimate the number of correct digits the naive algorithm loses, and state whether the loss is due to conditioning or instability. (c) Name a reformulation that fixes it.

**P3 (🔴, optional)** For $g(x)=x^3-2x-5$ (the module's boss polynomial), whose real root is $x^*\approx 2.0946$: (a) compute the root's condition number $1/\lvert g'(x^*)\rvert$ and say whether root-finding here is well- or ill-conditioned; (b) using the master rule, explain why even a crude, slowly-converging method like bisection will return an accurate root for *this* problem, whereas the near-double root of Example 2 defeats every method.

<details>
<summary>Solutions</summary>

**P1.**
(a) $f(x)=x^n \Rightarrow f'(x)=n x^{n-1}$, so
$$\kappa = \left|\frac{x\cdot n x^{n-1}}{x^n}\right| = \left|\frac{n x^n}{x^n}\right| = n.$$
Constant $n$ for all $x\neq 0$: well-conditioned for modest $n$. Squaring ($n=2$) doubles relative error, cubing triples it — never dangerous, but it explains why raising to a large power slowly erodes precision.

(b) $f(x)=\ln x \Rightarrow f'(x)=1/x$, so
$$\kappa = \left|\frac{x\cdot(1/x)}{\ln x}\right| = \left|\frac{1}{\ln x}\right|.$$
Ill-conditioned as $x\to 1$, where $\ln x\to 0$ and $\kappa\to\infty$ (e.g. $x=1.001$ gives $\ln x\approx 9.995\times10^{-4}$, $\kappa\approx 1000$). Reason: near $x=1$, $\ln x\approx x-1$, so evaluating $\ln$ *is* a subtraction of near-equal quantities — the cancellation archetype again.

**P2.**
(a) $f(x)=e^x-1$, $f'(x)=e^x$, so $\kappa(x)=\left|\dfrac{x e^x}{e^x-1}\right|$. Expand for small $x$: $e^x-1 = x+\tfrac{x^2}{2}+\cdots$ and $x e^x = x + x^2 + \cdots$, so
$$\kappa(x) = \frac{x + x^2 + \cdots}{x + \tfrac{x^2}{2}+\cdots} \xrightarrow{\;x\to0\;} 1.$$
The problem is well-conditioned ($\kappa\approx 1$).

(b) True value: $e^{10^{-8}}-1 \approx 10^{-8}$ (to leading order). The naive route computes $\operatorname{fl}(e^{10^{-8}})=\operatorname{fl}(1.00000001\ldots)$, which rounds with absolute error $\sim\varepsilon_{\text{mach}}\approx 10^{-16}$; the subtraction of $1$ is exact but leaves that $10^{-16}$ absolute error sitting on a result of size $10^{-8}$, a relative forward error of $\sim 10^{-16}/10^{-8} = 10^{-8}$. So about $8$ digits are lost (from ~16 down to ~8): $\log_{10}(1/10^{-8}) = 8$. Since $\kappa\approx 1$, the master rule says the backward error must be $\sim 10^{-8}\gg\varepsilon_{\text{mach}}$ — the algorithm is **not backward stable**. The loss is **instability**, not conditioning.

(c) Use the built-in `expm1(x)` (designed to be backward stable here), or the truncated series $x + \tfrac{x^2}{2}+\tfrac{x^3}{6}$, which for tiny $x$ is essentially $x$ to full accuracy — no cancellation.

**P3.**
(a) $g'(x)=3x^2-2$. At $x^*\approx 2.0946$: $x^{*2}\approx 4.3874$, so $g'(x^*)\approx 3(4.3874)-2 = 13.162 - 2 = 11.162$. Root condition number $= 1/|g'(x^*)| \approx 1/11.162 \approx 0.0896$. Since this is well below $1$, the root-finding problem is **well-conditioned**: a perturbation $\delta$ to $g$ moves the root by only $\approx 0.09\,\delta$ — the function crosses the axis steeply, so the crossing point barely budges.

(b) By the master rule, forward error $\lesssim \kappa\times$ backward error with $\kappa\approx 0.09$. Bisection's residual (how close $g$ is to $0$ at its returned point) plays the role of backward error, and it drives that residual to rounding level; multiplied by the tiny $\kappa$, the *forward* error in the root is tiny too. Slow convergence costs iterations, not accuracy. For Example 2's near-double root, $g'(x^*)\approx \pm 2\times10^{-3}$ gives root condition $\approx 500$, and a further squaring effect makes coefficient perturbations of size $\delta$ move the root like $\sqrt{\delta}$ — so a backward error of $\varepsilon_{\text{mach}}$ still yields a forward error near $\sqrt{\varepsilon_{\text{mach}}}\approx 10^{-8}$. The problem, not the method, caps the achievable accuracy.

</details>

## Flashback

**From [Lesson 1.2](01-02-cancellation-error-propagation.md) (catastrophic cancellation):** The smaller root of $x^2 - 100x + 1 = 0$ from the quadratic formula is $x_- = \dfrac{100 - \sqrt{100^2 - 4}}{2}$. (a) Explain why evaluating it this way loses precision, and estimate how many decimal digits vanish. (b) Reformulate the expression so no cancellation occurs, and give the accurate value.

<details>
<summary>Solution</summary>

(a) $\sqrt{100^2-4}=\sqrt{9996}\approx 99.979998$. The numerator $100 - 99.979998 \approx 0.020002$ subtracts two numbers of size $\approx 100$ to get a result of size $\approx 0.02$: catastrophic cancellation. Digits lost $\approx \log_{10}\!\big(100/0.02\big)=\log_{10}(5000)\approx 3.7$, so about **4 significant digits** evaporate.

(b) The roots multiply to $c/a = 1$, so the small root equals the reciprocal of the large one. Compute the large root by *addition* (no cancellation):
$$x_+ = \frac{100 + \sqrt{9996}}{2} \approx \frac{199.979998}{2} = 99.989999, \qquad x_- = \frac{c/a}{x_+} = \frac{1}{99.989999} \approx 0.0100010.$$
Equivalently, rationalize the numerator: $x_- = \dfrac{100-\sqrt{9996}}{2}\cdot\dfrac{100+\sqrt{9996}}{100+\sqrt{9996}} = \dfrac{4}{2\,(100+\sqrt{9996})} = \dfrac{2}{100+\sqrt{9996}}$. Either way the subtraction is gone and all digits survive. (Conditioning check: the *problem* "find the small root" is well-conditioned — the root is a smooth, gently-varying function of the coefficients — so this was pure algorithm instability, fixed by reformulation, exactly this lesson's theme.)

</details>

## Connections

- **Backward:** this lesson names what [Lesson 1.2](01-02-cancellation-error-propagation.md) showed by hand — catastrophic cancellation is the bit-level symptom of an ill-conditioned subtraction, and the reformulation trick is precisely how you make an algorithm backward stable. The irreducible $\varepsilon_{\text{mach}}$ input error from [Lesson 1.1](01-01-floating-point-roundoff.md) is what $\kappa$ amplifies.
- **Forward:** [Lesson 1.4](01-04-bisection-fixed-point.md) and [Lesson 1.5](01-05-newton-secant.md) put root conditioning to work — a flat function (small $g'$) is both an ill-conditioned root *and* the case where Newton stalls; the near-double root of Example 2 is the villain there. In Module 3, the matrix condition number $\kappa(A)$ generalizes this to solving $Ax=b$: the same master rule reappears as $\lVert \Delta x\rVert/\lVert x\rVert \lesssim \kappa(A)\cdot(\text{backward error})$.
- **Sideways:** the "solve the exact answer to a nearby problem" idea is the through-line of Trefethen & Bau — backward stability is the property every good factorization (LU, QR, Cholesky) is proved to have, and $\kappa(A^\top A)=\kappa(A)^2$ is exactly why the normal equations are avoided in favor of QR when fitting overdetermined data (`convex-optimization`'s least-squares setup leans on the same conditioning story).

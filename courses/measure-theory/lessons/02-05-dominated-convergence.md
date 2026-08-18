# Measure Theory · Lesson 2.5: The dominated convergence theorem

> ⏱ ~15 min · Module 2: The Lebesgue integral and the convergence theorems · Builds on: [Lesson 2.4](02-04-monotone-convergence-fatou.md) (monotone convergence & Fatou), [Lesson 2.3](02-03-general-lebesgue-integral.md) ($L^1$) · Unlocks: [Lesson 3.1](03-01-modes-of-convergence.md) (modes of convergence)

## Why this matters

You now have two limit theorems, but both are picky: monotone convergence needs an *increasing* sequence, Fatou only gives you an *inequality*. What you actually want in practice is the clean statement "the limit of the integrals is the integral of the limit," with no monotonicity and no loss. The **dominated convergence theorem** (DCT) delivers exactly that, at the cost of one hypothesis: a single integrable function that caps the whole sequence.

That one theorem is the workhorse of analysis. It is what lets you differentiate under an integral sign (the rigorous Leibniz rule), prove that characteristic functions and Fourier transforms are continuous, pass limits through expectations in `probability-theory`, and interchange limit and integral in a hundred routine computations without stopping to worry. Riemann integration cannot do any of this cleanly — this is the payoff Lebesgue's construction was built for.

## The idea

Recall the failures of [Lesson 2.4](02-04-monotone-convergence-fatou.md): the "moving bump" $g_n = n\,\mathbf{1}_{(0,1/n)}$ has $\int g_n = 1$ for every $n$, yet $g_n \to 0$ pointwise — mass escapes and the integral does not follow the limit. Why? Because there is no ceiling. The bumps grow taller and taller, and no *fixed* integrable function sits above all of them at once (the envelope $\sup_n g_n(x)$ blows up like $1/x$ near $0$, which is not integrable).

DCT says: **put a lid on it.** If there is one integrable function $g$ with $|f_n| \le g$ for *every* $n$ simultaneously, then mass can no longer leak — it is trapped under the finite "tent" $\int g < \infty$. Under that single condition, $\int f_n \to \int f$, no monotonicity required, and the convergence is even strong in the sense that $\int |f_n - f| \to 0$. The domination hypothesis is not decoration: it is *precisely* what rules out the moving-bump pathology.

## The formal version

Throughout, $(X, \mathcal{M}, \mu)$ is a measure space and "a.e." means "for $\mu$-almost every $x$."

**Dominated Convergence Theorem.** Let $f_n : X \to \mathbb{R}$ (or $\mathbb{C}$) be measurable with $f_n \to f$ a.e. Suppose there is a **single integrable** function $g \in L^1(\mu)$, *independent of $n$*, with
$$|f_n(x)| \le g(x) \quad \text{for a.e. } x, \text{ every } n.$$
Then $f \in L^1(\mu)$ and
$$\lim_{n\to\infty} \int_X f_n \, d\mu = \int_X f \, d\mu, \qquad \text{and moreover} \qquad \lim_{n\to\infty}\int_X |f_n - f|\, d\mu = 0.$$

*In words:* if every function in the sequence is trapped under one fixed integrable ceiling, you may pass the limit inside the integral — and the functions converge to $f$ not just pointwise but *in the mean*.

**Proof.** First, letting $n \to \infty$ in $|f_n| \le g$ gives $|f| \le g$ a.e., so $\int |f| \le \int g < \infty$ and $f \in L^1$. The trick is to feed Fatou's lemma two **nonnegative** sequences built from $g$:
$$g + f_n \ge 0 \quad\text{and}\quad g - f_n \ge 0 \qquad (\text{both a.e., since } |f_n| \le g).$$

Apply Fatou (Lesson 2.4) to $g + f_n \ge 0$. Since $g + f_n \to g + f$ a.e.,
$$\int (g + f) \;=\; \int \liminf_n (g + f_n) \;\le\; \liminf_n \int (g + f_n) \;=\; \int g + \liminf_n \int f_n.$$
Cancel the finite number $\int g$ from both sides:
$$\int f \;\le\; \liminf_n \int f_n. \tag{1}$$

Now apply Fatou to $g - f_n \ge 0$, which converges to $g - f$ a.e.:
$$\int (g - f) \;\le\; \liminf_n \int (g - f_n) \;=\; \int g - \limsup_n \int f_n,$$
using $\liminf(-a_n) = -\limsup a_n$. Cancelling $\int g$ and rearranging,
$$\limsup_n \int f_n \;\le\; \int f. \tag{2}$$

Combining (1) and (2): $\ \limsup_n \int f_n \le \int f \le \liminf_n \int f_n$. But $\liminf \le \limsup$ always, so all three are equal — the limit exists and equals $\int f$.

For the stronger conclusion, apply the *same argument* to $h_n := |f_n - f|$. Then $h_n \to 0$ a.e. and $h_n \le |f_n| + |f| \le 2g$, with $2g \in L^1$. So $h_n$ is dominated by the integrable function $2g$, and the result just proved gives $\int |f_n - f| = \int h_n \to \int 0 = 0$. $\blacksquare$

*(Equivalently: $2g - |f_n - f| \ge 0$, and Fatou applied to it yields $\int 2g \le \int 2g - \limsup \int|f_n-f|$, forcing $\limsup \int|f_n - f| \le 0$.)*

**Bounded Convergence Theorem (the finite-measure special case).** If $\mu(X) < \infty$, $f_n \to f$ a.e., and there is a *constant* $M$ with $|f_n| \le M$ for all $n$, then $\int f_n \to \int f$.

*In words:* on a finite-measure space, a uniform numerical bound is enough. This is just DCT with the dominator $g \equiv M$, which is integrable precisely because $\int_X M \, d\mu = M\,\mu(X) < \infty$ — the constant $M$ is *not* integrable when $\mu(X) = \infty$, which is exactly why the bound must be finite-measure here.

### Two corollaries you will use constantly

Let $f(x,t)$ be measurable in $x$ for each parameter $t$ in an interval, and set $F(t) = \int_X f(x,t)\, d\mu(x)$.

**Continuity under the integral sign.** If $t \mapsto f(x,t)$ is continuous at $t_0$ for a.e. $x$, and $|f(x,t)| \le g(x)$ for a $g \in L^1$ (all $t$ near $t_0$), then $F$ is continuous at $t_0$.
*Why:* take any $t_n \to t_0$; then $f(x,t_n) \to f(x,t_0)$ a.e., dominated by $g$, so $F(t_n) \to F(t_0)$ by DCT. (Sequences suffice to test continuity.)

**Differentiation under the integral sign (Leibniz rule).** Suppose $\partial_t f(x,t)$ exists for all $t$ (a.e. $x$) and is **dominated by a single integrable function**: $\big|\partial_t f(x,t)\big| \le g(x)$ with $g \in L^1$, for all $t$ in the interval. Then $F$ is differentiable and
$$F'(t) = \frac{d}{dt}\int_X f(x,t)\, d\mu(x) = \int_X \partial_t f(x,t)\, d\mu(x).$$
*Why:* the difference quotient $\dfrac{f(x, t+h_n) - f(x,t)}{h_n} \to \partial_t f(x,t)$ as $h_n \to 0$, and by the mean value theorem it equals $\partial_t f(x,\xi)$ for some $\xi$ between $t$ and $t+h_n$, hence is bounded by $g(x)$. DCT lets you pass the limit inside. **The dominating-derivative hypothesis is the whole content** — differentiating under the sign is illegal without it.

**A one-line beyond-DCT remark.** Domination is *sufficient* but not necessary for $\int|f_n - f| \to 0$. On a finite-measure space the sharp condition is **uniform integrability** — that $\int_E |f_n|\,d\mu$ can be made uniformly small by shrinking $\mu(E)$ — combined with convergence in measure (Vitali's convergence theorem). DCT is the easy, checkable special case where a fixed $g$ supplies the uniform integrability for free.

## Concrete instance

**A DCT interchange, start to finish.** Evaluate
$$L = \lim_{n\to\infty} \int_0^\infty \frac{n\sin(x/n)}{x\,(1+x^2)}\, dx.$$

*Pointwise limit.* Fix $x > 0$. As $n \to \infty$, $\ \dfrac{\sin(x/n)}{x/n} \to 1$, so
$$f_n(x) = \frac{n \sin(x/n)}{x(1+x^2)} = \frac{\sin(x/n)}{x/n}\cdot\frac{1}{1+x^2} \;\longrightarrow\; \frac{1}{1+x^2} =: f(x).$$

*Find the dominator.* Use the elementary bound $|\sin u| \le |u|$ with $u = x/n$: then $|n\sin(x/n)| \le n\cdot(x/n) = x$, so
$$|f_n(x)| = \frac{|n\sin(x/n)|}{x(1+x^2)} \le \frac{x}{x(1+x^2)} = \frac{1}{1+x^2} =: g(x).$$
This $g$ is **independent of $n$** and integrable: $\int_0^\infty \frac{dx}{1+x^2} = \big[\arctan x\big]_0^\infty = \tfrac{\pi}{2} < \infty$.

*Apply DCT and read off the answer.* The hypotheses hold, so
$$L = \int_0^\infty \lim_{n\to\infty} f_n(x)\, dx = \int_0^\infty \frac{dx}{1+x^2} = \frac{\pi}{2}.$$
The single integrable ceiling $g(x) = 1/(1+x^2)$ did all the work.

## Worked examples

**Example 1 (mechanical — bounded convergence on a finite interval).** Compute $\displaystyle \lim_{n\to\infty}\int_0^1 \frac{nx}{1+n^2 x^2}\, dx.$

For each fixed $x \in (0,1]$, $\ \dfrac{nx}{1+n^2x^2} = \dfrac{1}{n^{-1}x^{-1} + nx}\to 0$ (the $nx$ term dominates), and at $x=0$ the integrand is $0$; so $f_n \to 0$ a.e. on $[0,1]$. For the dominator, the calculus fact $\dfrac{a}{1+a^2} \le \tfrac12$ (with $a = nx$) gives $|f_n(x)| \le \tfrac12$ for all $n$ — a *constant* bound on the finite-measure space $[0,1]$. Bounded convergence applies:
$$\lim_{n\to\infty}\int_0^1 \frac{nx}{1+n^2x^2}\, dx = \int_0^1 0\, dx = 0.$$
Sanity check against a direct computation: $\int_0^1 \frac{nx}{1+n^2x^2}dx = \frac{1}{2n}\ln(1+n^2) \to 0$. ✓ Note the stronger DCT conclusion also holds here: $\int_0^1 |f_n - 0| = \int_0^1 f_n \to 0$.

**Example 2 (why you'd care — differentiating under the sign).** Evaluate $F(t) = \displaystyle\int_0^\infty e^{-x^2}\cos(tx)\, dx$ by differentiating in the parameter $t$.

*Justify the Leibniz rule with an explicit dominator.* The integrand $f(x,t) = e^{-x^2}\cos(tx)$ has $\partial_t f(x,t) = -x\,e^{-x^2}\sin(tx)$, and
$$\big|\partial_t f(x,t)\big| = x\,e^{-x^2}|\sin(tx)| \le x\,e^{-x^2} =: g(x),$$
independent of $t$, with $\int_0^\infty x e^{-x^2}\,dx = \big[-\tfrac12 e^{-x^2}\big]_0^\infty = \tfrac12 < \infty$. So $g \in L^1$ and the differentiation corollary gives
$$F'(t) = \int_0^\infty -x\,e^{-x^2}\sin(tx)\, dx.$$

*Turn it into an ODE.* Integrate by parts with $u = \sin(tx)$, $dv = -x e^{-x^2}dx$ (so $v = \tfrac12 e^{-x^2}$):
$$F'(t) = \underbrace{\Big[\tfrac12 e^{-x^2}\sin(tx)\Big]_0^\infty}_{=\,0} - \int_0^\infty \tfrac12 e^{-x^2}\cdot t\cos(tx)\, dx = -\frac{t}{2}\,F(t).$$
So $F'(t) = -\tfrac{t}{2}F(t)$, a separable ODE: $\ \frac{d}{dt}\ln F(t) = -\tfrac{t}{2}\ \Rightarrow\ F(t) = F(0)\,e^{-t^2/4}$. The initial value is the Gaussian integral $F(0) = \int_0^\infty e^{-x^2}dx = \tfrac{\sqrt{\pi}}{2}$. Therefore
$$\int_0^\infty e^{-x^2}\cos(tx)\, dx = \frac{\sqrt{\pi}}{2}\, e^{-t^2/4}.$$
A genuinely hard integral, cracked because DCT licensed one differentiation. This exact move — differentiate a Gaussian-against-oscillation integral under the sign — is how you compute Fourier transforms of Gaussians in `fourier-analysis` and characteristic functions in `probability-theory`.

## Watch out

- **You might think** a pointwise bound $|f_n(x)| \le g_n(x)$ that varies with $n$ is enough — but DCT demands *one fixed* $g$ dominating the *entire* sequence at once. The moving bump $n\mathbf{1}_{(0,1/n)}$ is bounded by itself for each $n$, yet its envelope $\sup_n |f_n|$ is not integrable, and the conclusion fails ($\int f_n = 1 \not\to 0$). No integrable lid $\Rightarrow$ no DCT.
- **You might think** boundedness of the $f_n$ always suffices — but a uniform constant bound only rescues you on **finite** measure (bounded convergence). On $\mathbb{R}$, $f_n = \tfrac1n \mathbf{1}_{[0,n]}$ satisfies $|f_n| \le 1$ and $f_n \to 0$ everywhere, yet $\int f_n = 1 \not\to 0$: the constant $1$ is not integrable on $\mathbb{R}$, so there is no valid dominator.
- **You might think** you can differentiate under the integral sign whenever the derivative exists pointwise — but without an integrable dominator $g \ge |\partial_t f|$, the interchange can be false. Always exhibit the dominating derivative; it is the hypothesis, not a formality.
- **You might think** DCT is weaker than monotone convergence — but neither implies the other. MCT allows $g = +\infty$ (unbounded increasing sequences, e.g. $f_n \uparrow \infty$) which DCT forbids; DCT allows non-monotone and sign-changing sequences which MCT forbids. They are complementary tools.

## One-liner

> Put one integrable lid on the whole sequence and the limit slides straight through the integral — pointwise, in the mean, and even under a derivative.

## Problems

**P1 (🟢)** Evaluate $\displaystyle \lim_{n\to\infty}\int_0^\infty \frac{\cos(x/n)}{1+x^2}\, dx$ using the dominated convergence theorem. State your dominator explicitly and check it is integrable.

**P2 (🟡)** For $t > 0$ define $F(t) = \displaystyle\int_0^1 x^t\, dx$. (a) Justify differentiating under the integral sign on any interval $t \ge t_0 > 0$ by exhibiting an integrable dominator for $\partial_t(x^t)$ on $(0,1)$. (b) Compute $F'(t)$ two ways — directly from the closed form $F(t) = \tfrac{1}{t+1}$, and as $\int_0^1 \partial_t(x^t)\,dx$ — and confirm they agree.

**P3 (🔴, optional)** Let $g_n = n\,\mathbf{1}_{(0,1/n)}$ on $(0,1)$ with Lebesgue measure. (a) Show $\int g_n = 1$ for every $n$ but $g_n \to 0$ a.e. (b) Prove that **no** integrable $g$ can dominate the whole sequence: show any $g$ with $g \ge g_n$ for all $n$ satisfies $g(x) \ge \lfloor 1/x \rfloor$ for $x \in (0,1)$, and deduce $\int_0^1 g = \infty$. (c) Which single hypothesis of DCT does this violate, and how does Fatou's lemma remain consistent here? *(This is exactly the borderline that Lesson 3.1 organizes into distinct modes of convergence.)*

<details>
<summary>Solutions</summary>

**P1** For each fixed $x$, $\cos(x/n) \to \cos 0 = 1$, so the integrand $\to \dfrac{1}{1+x^2}$ pointwise. Dominator: since $|\cos(x/n)| \le 1$ for all $n$,
$$\left|\frac{\cos(x/n)}{1+x^2}\right| \le \frac{1}{1+x^2} =: g(x), \qquad \int_0^\infty g = \big[\arctan x\big]_0^\infty = \frac{\pi}{2} < \infty.$$
$g$ is independent of $n$ and integrable, so DCT applies:
$$\lim_{n\to\infty}\int_0^\infty \frac{\cos(x/n)}{1+x^2}\, dx = \int_0^\infty \frac{dx}{1+x^2} = \frac{\pi}{2}. \qquad\blacksquare$$

**P2** (a) $\partial_t(x^t) = x^t \ln x$ (differentiating $x^t = e^{t\ln x}$). For $x \in (0,1)$ and any $t > 0$ we have $0 < x^t \le 1$, so
$$\big|\partial_t(x^t)\big| = x^t\,|\ln x| \le |\ln x| =: g(x) \quad \text{on } (0,1),$$
independent of $t$. And $g \in L^1(0,1)$: $\int_0^1 |\ln x|\,dx = \int_0^1 (-\ln x)\,dx = \big[x - x\ln x\big]_0^1 = 1 < \infty$ (the boundary term $x\ln x \to 0$ as $x \to 0^+$). So the Leibniz rule is justified for all $t \ge t_0$, hence for all $t > 0$.

(b) *Direct:* $F(t) = \int_0^1 x^t dx = \tfrac{1}{t+1}$, so $F'(t) = -\dfrac{1}{(t+1)^2}$.
*Under the sign:* $\displaystyle\int_0^1 x^t \ln x\, dx = \frac{d}{dt}\int_0^1 x^t\, dx = \frac{d}{dt}\,\frac{1}{t+1} = -\frac{1}{(t+1)^2}.$
The two agree. ✓ $\blacksquare$

**P3** (a) $\int_0^1 g_n = n \cdot \lambda\big((0,1/n)\big) = n \cdot \tfrac1n = 1$ for every $n$. For any fixed $x \in (0,1)$, once $n > 1/x$ we have $x \notin (0,1/n)$, so $g_n(x) = 0$ for all large $n$; hence $g_n(x) \to 0$. (At every point the sequence is eventually $0$, so it converges to $0$ everywhere on $(0,1)$.)

(b) Suppose $g \ge g_n$ for all $n$. Fix $x \in (0,1)$ and let $N = \lfloor 1/x \rfloor$, so $x \le 1/N$, i.e. $x \in (0, 1/N]$ — thus $x \in (0,1/n)$ for every $n \le N$, giving $g_n(x) = n$ for $n = 1, \dots, N$. In particular $g(x) \ge g_N(x) = N = \lfloor 1/x \rfloor \ge \tfrac1x - 1$. Therefore
$$\int_0^1 g\, dx \ge \int_0^1 \Big(\tfrac1x - 1\Big)\, dx = \Big[\ln x - x\Big]_0^1 = +\infty,$$
since $\ln x \to -\infty$ as $x \to 0^+$. So no dominator $g$ is integrable.

(c) It violates the **existence of a single integrable dominator** $g \in L^1$ — the one hypothesis of DCT — so DCT simply does not apply, and indeed $\int g_n = 1 \not\to 0 = \int \lim g_n$. Fatou's lemma stays consistent because it only asserts an *inequality*: $\int \liminf g_n = 0 \le \liminf \int g_n = 1$. The inequality holds (strictly), and mass escaping to a spike at the origin is exactly the phenomenon Fatou permits and DCT forbids. $\blacksquare$

</details>

## Flashback

**From [Lesson 2.4](02-04-monotone-convergence-fatou.md) (term-by-term integration via MCT):** For a series of *nonnegative* measurable functions, the monotone convergence theorem lets you swap sum and integral: $\int \sum_k u_k = \sum_k \int u_k$ (apply MCT to the increasing partial sums). Use this to evaluate
$$\int_0^\infty \frac{x}{e^x - 1}\, dx.$$

<details>
<summary>Solution</summary>

For $x > 0$, $\ e^{-x} \in (0,1)$, so expand as a geometric series:
$$\frac{x}{e^x - 1} = \frac{x\,e^{-x}}{1 - e^{-x}} = x\,e^{-x}\sum_{k=0}^\infty e^{-kx} = \sum_{n=1}^\infty x\,e^{-nx},$$
reindexing $n = k+1 \ge 1$. Every term $u_n(x) = x e^{-nx} \ge 0$, so MCT (via the partial-sum form) justifies integrating term by term:
$$\int_0^\infty \frac{x}{e^x-1}\, dx = \sum_{n=1}^\infty \int_0^\infty x\, e^{-nx}\, dx.$$
Each integral is a Gamma value: $\int_0^\infty x e^{-nx}\, dx = \dfrac{1}{n^2}$ (integrate by parts, or substitute $u = nx$ to get $\tfrac{1}{n^2}\int_0^\infty u e^{-u}du = \tfrac{1}{n^2}\Gamma(2) = \tfrac{1}{n^2}$). Hence
$$\int_0^\infty \frac{x}{e^x - 1}\, dx = \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}.$$
Nonnegativity is what makes the interchange free — no dominator needed, because MCT never asks for one. (This integral is the $s=2$ case of the identity $\int_0^\infty \frac{x^{s-1}}{e^x-1}dx = \Gamma(s)\zeta(s)$ behind the Planck black-body law.) $\blacksquare$

</details>

## Connections

- **Backward:** DCT is proved *from* Fatou's lemma ([Lesson 2.4](02-04-monotone-convergence-fatou.md)) applied to the two nonnegative sequences $g \pm f_n$ — Fatou's one-sided inequality, used twice, pinches to an equality. It completes the trio (monotone / Fatou / dominated) promised at the start of Module 2.
- **Forward:** [Lesson 3.1](03-01-modes-of-convergence.md) organizes exactly the borderline cases (P3's escaping bump, the typewriter sequence) into distinct *modes* — a.e., in measure, in $L^p$ — and the "$\int|f_n - f| \to 0$" conclusion of DCT is precisely convergence in $L^1$. The uniform-integrability remark becomes Vitali's theorem, the sharp version of DCT.
- **Sideways (`probability-theory`):** bounded convergence is the everyday tool for passing limits through expectations $\mathbb{E}[X_n] \to \mathbb{E}[X]$ (an expectation *is* a Lebesgue integral against a probability measure with $\mu(X)=1$), and differentiation under the integral sign is how you extract moments from a characteristic function $\varphi(t) = \mathbb{E}[e^{itX}]$.
- **Sideways (`fourier-analysis`):** continuity and differentiation under the integral, justified here, are what make the Fourier transform $\hat f(t) = \int f(x)e^{-itx}dx$ continuous and (given a dominating $x f(x)$) differentiable — Example 2 is the Gaussian's Fourier transform in disguise.

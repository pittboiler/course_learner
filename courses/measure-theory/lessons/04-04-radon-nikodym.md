# Measure Theory · Lesson 4.4: The Radon–Nikodym theorem

> ⏱ ~15 min · Module 4: Product measures, Radon–Nikodym, and differentiation · Builds on: [Lesson 4.3](04-03-signed-measures-decomposition.md) · Unlocks: [Lesson 4.5](04-05-lebesgue-differentiation.md)

## Why this matters

Open any probability text and you meet a random variable's **density** $f$: the object with $P(X\in E)=\int_E f\,d\lambda$. That density is not a definition handed down from nowhere — it is a *derivative of one measure with respect to another*, and this lesson is where it gets built and licensed. The same object reappears everywhere measures interact: the **likelihood ratio** in statistics, the change-of-measure factor in Girsanov's theorem, and — the deepest instance — **conditional expectation** $E[X\mid\mathcal{G}]$, which is *defined* as a Radon–Nikodym derivative. The theorem answers one crisp question: given two measures, when can I write the first as a density times the second, and how unique is that density?

## The idea

You want to express $\nu$ as "$f$ against $\mu$," meaning $\nu(E)=\int_E f\,d\mu$. Before asking *how*, ask *when it's even possible*. Integrating anything over a $\mu$-null set gives $0$. So if $\nu$ is to be an integral against $\mu$, then **every set $\mu$ ignores, $\nu$ must ignore too**. That single compatibility condition — "$\mu$ is blind here $\Rightarrow$ $\nu$ is blind here" — is called **absolute continuity**, written $\nu\ll\mu$.

The Radon–Nikodym theorem is the surprise: that obviously *necessary* condition is also *sufficient* (once both measures are σ-finite). Absolute continuity is the **only** obstruction. Pass that one test and a density $f=\frac{d\nu}{d\mu}$ exists, and is pinned down up to $\mu$-a.e. equality.

What if the test fails? Then $\nu$ carries mass exactly where $\mu$ sees nothing — think of a point mass $\delta_0$ sitting on a single point, which Lebesgue measure rates as size zero. That part can never be a density. The **Lebesgue decomposition** says every $\nu$ splits cleanly into the part that *does* have a density and a leftover singular part concentrated on a $\mu$-null set.

## The formal version

Fix a measurable space $(X,\mathcal{M})$ and two measures $\mu,\nu$ on it.

**Definition (absolute continuity).** $\nu$ is *absolutely continuous* with respect to $\mu$, written $\nu\ll\mu$, if for every $E\in\mathcal{M}$,
$$\mu(E)=0 \;\Longrightarrow\; \nu(E)=0.$$
*In words:* every $\mu$-null set is also $\nu$-null.

**Definition (mutual singularity).** $\nu$ and $\mu$ are *mutually singular*, written $\nu\perp\mu$, if $X=A\uplus B$ (a disjoint partition) with $\mu(A)=0$ and $\nu(B)=0$. *In words:* they live on disjoint sets — each is invisible to the other.

**The ε–δ characterization (for finite $\nu$).** If $\nu(X)<\infty$, then $\nu\ll\mu$ iff for every $\varepsilon>0$ there is a $\delta>0$ such that
$$\mu(E)<\delta \;\Longrightarrow\; \nu(E)<\varepsilon.$$
*In words:* small in $\mu$ forces small in $\nu$ — the quantitative version of "$\mu$-null $\Rightarrow$ $\nu$-null," and the reason the word "continuity" appears. (Finiteness of $\nu$ is essential; see **Watch out**.)

**Radon–Nikodym theorem.** Let $\mu,\nu$ be σ-finite with $\nu\ll\mu$. Then there is a measurable $f:X\to[0,\infty)$, **unique up to $\mu$-a.e. equality**, such that
$$\nu(E)=\int_E f\,d\mu \qquad\text{for every } E\in\mathcal{M}.$$
We write $f=\dfrac{d\nu}{d\mu}$, the **Radon–Nikodym derivative** (or **density**) of $\nu$ with respect to $\mu$.

*In words:* absolute continuity is exactly the license to write $\nu$ as a density against $\mu$, and the density is essentially unique.

**Consequences you'll use constantly.** With $f=\frac{d\nu}{d\mu}$, integration against $\nu$ becomes integration against $\mu$:
$$\int_X g\,d\nu \;=\; \int_X g\,\frac{d\nu}{d\mu}\,d\mu \qquad (g\ge 0 \text{ measurable, or } g\in L^1(\nu)).$$
And the derivatives compose like ordinary derivatives (all equalities hold $\mu$-a.e., assuming σ-finiteness and the stated absolute continuities):

| Rule | Statement |
|---|---|
| Linearity | $\dfrac{d(\nu_1+\nu_2)}{d\mu}=\dfrac{d\nu_1}{d\mu}+\dfrac{d\nu_2}{d\mu}$ |
| Chain rule | $\nu\ll\mu\ll\lambda \;\Rightarrow\; \dfrac{d\nu}{d\lambda}=\dfrac{d\nu}{d\mu}\cdot\dfrac{d\mu}{d\lambda}$ |
| Reciprocal | $\nu\ll\mu$ and $\mu\ll\nu \;\Rightarrow\; \dfrac{d\mu}{d\nu}=\left(\dfrac{d\nu}{d\mu}\right)^{-1}$ |

**Lebesgue decomposition.** Let $\mu,\nu$ be σ-finite. Then $\nu$ splits **uniquely** as
$$\nu=\nu_{ac}+\nu_s,\qquad \nu_{ac}\ll\mu,\quad \nu_s\perp\mu.$$
*In words:* the part of $\nu$ that has a $\mu$-density and the part concentrated on a $\mu$-null set separate cleanly, and this splitting is one-of-a-kind.

**The proof idea in one paragraph (von Neumann's Hilbert-space trick).** Reduce to finite measures and set $\rho=\mu+\nu$. The functional $L(g)=\int g\,d\nu$ is bounded and linear on $L^2(\rho)$ — since $\nu\le\rho$, Cauchy–Schwarz gives $|L(g)|\le \lVert g\rVert_{L^2(\rho)}\,\rho(X)^{1/2}$. The Riesz representation theorem (from `functional-analysis`) hands you an $h\in L^2(\rho)$ with $\int g\,d\nu=\int g\,h\,d\rho$ for all $g$. Testing $g=\mathbf{1}_E$ shows $0\le h\le 1$ $\rho$-a.e., and $\nu\ll\mu$ rules out $h=1$; rearranging $\int g(1-h)\,d\nu=\int g\,h\,d\mu$ reveals the density $f=\frac{h}{1-h}$. The σ-finite case is stitched together over a countable partition of $X$. That's the whole engine — no covering arguments, no sup-of-densities grind: just self-duality of a Hilbert space.

## Concrete instance

**(1) A density really is a derivative — the $\ll$ check.** On any $(X,\mathcal{M},\mu)$, fix a measurable $g\ge 0$ and *define* $\nu(E)=\int_E g\,d\mu$. Is $\nu\ll\mu$? If $\mu(E)=0$, then $\int_E g\,d\mu=0$ (an integral over a null set vanishes), so $\nu(E)=0$. Yes. By the uniqueness clause, the density the theorem produces is nothing other than $g$ itself:
$$\frac{d\nu}{d\mu}=g \quad(\mu\text{-a.e.}).$$
So the easy direction of Radon–Nikodym is "densities give absolutely continuous measures"; the hard direction is the converse.

**(2) A measure with no density — the Dirac mass.** On $(\mathbb{R},\mathcal{B}(\mathbb{R}))$ take Lebesgue measure $\lambda$ and the point mass $\delta_0$, defined by $\delta_0(E)=1$ if $0\in E$ and $0$ otherwise. Now $\lambda(\{0\})=0$ but $\delta_0(\{0\})=1$: a $\lambda$-null set carrying positive $\delta_0$-mass. So $\delta_0\not\ll\lambda$, and there can be **no** density: if $\delta_0(E)=\int_E f\,d\lambda$ held for some $f$, then $\lambda(\{0\})=0$ would force $\delta_0(\{0\})=\int_{\{0\}}f\,d\lambda=0$ — but it equals $1$. Contradiction.

In fact $\delta_0\perp\lambda$: split $\mathbb{R}=\{0\}\uplus(\mathbb{R}\setminus\{0\})$, where $\lambda(\{0\})=0$ and $\delta_0(\mathbb{R}\setminus\{0\})=0$. And the mixed measure $\nu=\lambda|_{[0,1]}+\delta_0$ shows the Lebesgue decomposition in miniature: $\nu_{ac}=\lambda|_{[0,1]}$ (density $\mathbf{1}_{[0,1]}$) and $\nu_s=\delta_0$ (the un-densifiable spike).

## Worked examples

**Example 1 (mechanical — read off a derivative, then use it).** On $([0,1],\lambda)$ let $\nu(E)=\int_E 2x\,d\lambda(x)$. By instance (1), $\nu\ll\lambda$ and $\frac{d\nu}{d\lambda}=2x$. This is a genuine probability measure: $\nu([0,1])=\int_0^1 2x\,dx=1$. To compute an integral against $\nu$, convert to $\lambda$:
$$\int_{[0,1]} x^2\,d\nu \;=\; \int_0^1 x^2\cdot\underbrace{2x}_{d\nu/d\lambda}\,dx \;=\; \int_0^1 2x^3\,dx \;=\; \tfrac{1}{2}.$$
No need to integrate "against $\nu$" directly — the derivative turns it into ordinary Lebesgue integration.

**Example 2 (why you'd care — the density *is* the pdf).** Let $P$ be a probability measure on $(\mathbb{R},\mathcal{B})$ that is absolutely continuous with respect to $\lambda$. Then $\frac{dP}{d\lambda}=f$ is exactly what probabilists call the **probability density function**. For the standard normal,
$$\frac{dP}{d\lambda}(x)=f(x)=\frac{1}{\sqrt{2\pi}}\,e^{-x^2/2},\qquad P(X\in E)=\int_E f\,d\lambda,$$
and the expectation of any $g(X)$ is the change-of-measure formula from above:
$$E[g(X)]=\int_{\mathbb{R}} g\,dP=\int_{\mathbb{R}} g(x)f(x)\,d\lambda(x).$$
This is the precise bridge to `probability-theory`: a probability is a measure with $P(X)=1$ (here $P(\mathbb{R})=1$), expectation is the Lebesgue integral, and "has a pdf" means precisely "$P\ll\lambda$." A distribution with an atom — say a coin that pays a fixed amount with probability $\tfrac12$ — has a $\delta$-spike, fails $\ll\lambda$, and has no pdf: exactly instance (2). Its Lebesgue decomposition separates the continuous part (a pdf) from the discrete part (point masses).

## Watch out

- **σ-finiteness is not decoration.** Let $\mu=\lambda$ on $[0,1]$ and $c$ = counting measure. Since $c(E)=0$ only for $E=\varnothing$, trivially $\lambda\ll c$. Yet no density exists: if $\lambda(E)=\int_E f\,dc=\sum_{x\in E}f(x)$, then testing singletons gives $f(x)=\lambda(\{x\})=0$ for all $x$, so $f\equiv 0$ and $\lambda\equiv 0$ — false. The theorem breaks because $c$ is **not σ-finite** on $[0,1]$ (an uncountable set is not a countable union of finite sets).
- **The ε–δ form needs $\nu$ finite.** On $(0,1)$ with $\mu=\lambda$, define $\nu$ by $\frac{d\nu}{d\lambda}=\frac1x$. Then $\nu\ll\lambda$, but the sets $E_n=(0,\tfrac1n)$ have $\lambda(E_n)\to 0$ while $\nu(E_n)=\int_0^{1/n}\frac1x\,dx=\infty$ for every $n$. No $\delta$ can control $\nu$ — because $\nu$ is infinite. The "$\mu(E)$ small $\Rightarrow$ $\nu(E)$ small" slogan is a *finite-$\nu$* statement.
- **$\ll$ is one-directional.** $\nu\ll\mu$ does **not** give $\mu\ll\nu$. On $\mathbb{R}$ let $\frac{d\nu}{d\lambda}=\mathbf{1}_{[0,1]}$, so $\nu\ll\lambda$. But $\nu([2,3])=0$ while $\lambda([2,3])=1>0$ — a $\nu$-null set that is not $\lambda$-null, so $\lambda\not\ll\nu$. The reciprocal rule applies only when **both** directions hold (then $\frac{d\nu}{d\mu}>0$ a.e.).
- **A derivative is an a.e. object.** $\frac{d\nu}{d\mu}$ is defined only up to $\mu$-a.e. equality — you may **not** speak of its value at a single point. ("Evaluating a pdf at a point" is a convenient fiction; only its integrals over sets are meaningful.)
- **Two senses of "absolutely continuous."** A measure being a.c. ($\nu\ll\mu$) and a *function* $F$ being absolutely continuous are related but not the same statement — Lesson 4.5 ties them together via $F(x)=\nu((-\infty,x])$ and the differentiation theorem.

## One-liner

> $\nu\ll\mu$ is the sole permission slip for writing $\nu$ as a density $\frac{d\nu}{d\mu}$ against $\mu$ — and that one density is the pdf, the likelihood ratio, and the conditional expectation all at once.

## Problems

**P1 (🟢)** On $([0,\infty),\lambda)$ define $\nu(E)=\int_E e^{-x}\,d\lambda(x)$.
(a) Show $\nu\ll\lambda$ and state $\frac{d\nu}{d\lambda}$.
(b) Compute $\nu([0,\ln 2])$ and $\nu([0,\infty))$.
(c) Using the density, compute $\int_{[0,\infty)} x\,d\nu$. (This is the mean of an $\mathrm{Exp}(1)$ random variable — a `probability-theory` bridge.)

**P2 (🟡)** On $([0,1],\lambda)$ suppose $\mu\ll\lambda$ with $\frac{d\mu}{d\lambda}=2x$, and define $\nu(E)=\int_E x\,d\mu(x)$.
(a) Justify the integration formula $\int_E x\,d\mu=\int_E x\cdot 2x\,d\lambda$ (say which theorem does the work).
(b) Use the chain rule to find $\frac{d\nu}{d\lambda}$, then verify your answer by computing $\nu([0,1])$ two independent ways.

**P3 (🔴, optional)** Two failures of "$\nu$ has a density."
(a) On $([0,1],\mathcal{B})$ with $\mu=\lambda$, let $\nu=\delta_{1/2}$. Prove $\nu\perp\lambda$ and prove no measurable $f$ satisfies $\nu(E)=\int_E f\,d\lambda$ for all Borel $E$.
(b) Give the Lebesgue decomposition of $\nu=\lambda|_{[0,1]}+3\,\delta_{1/2}$ with respect to $\lambda$: identify $\nu_{ac}$, its density, and $\nu_s$.

<details>
<summary>Solutions</summary>

**P1** (a) $e^{-x}\ge 0$ is measurable, so $\nu(E)=\int_E e^{-x}\,d\lambda$ defines a measure, and if $\lambda(E)=0$ then $\int_E e^{-x}\,d\lambda=0$, hence $\nu(E)=0$: thus $\nu\ll\lambda$. By the uniqueness clause of Radon–Nikodym, $\frac{d\nu}{d\lambda}=e^{-x}$.

(b) $\nu([0,\ln 2])=\int_0^{\ln 2} e^{-x}\,dx=\big[-e^{-x}\big]_0^{\ln 2}=1-e^{-\ln 2}=1-\tfrac12=\tfrac12.$ And $\nu([0,\infty))=\int_0^\infty e^{-x}\,dx=1$ — so $\nu$ is a probability measure.

(c) $\displaystyle\int_{[0,\infty)} x\,d\nu=\int_0^\infty x\,e^{-x}\,dx=\Gamma(2)=1!=1.$ (Integrate by parts: $\int_0^\infty x e^{-x}dx=[-xe^{-x}]_0^\infty+\int_0^\infty e^{-x}dx=0+1=1$.) The mean of an $\mathrm{Exp}(1)$ variable is $1$. ✓

**P2** (a) The identity $\int_E g\,d\mu=\int_E g\,\frac{d\mu}{d\lambda}\,d\lambda$ (here $g(x)=x$, $\frac{d\mu}{d\lambda}=2x$) is the change-of-measure/integration formula for Radon–Nikodym derivatives. It is proved by the standard machinery: it holds for indicators by definition of the density, extends to nonnegative simple functions by linearity, to nonnegative measurable $g$ by the **monotone convergence theorem** (Lesson 2.4) applied to a simple-function approximation from below, and to $L^1$ by splitting into positive and negative parts.

(b) Here $\frac{d\nu}{d\mu}=x$ (by instance (1), since $\nu(E)=\int_E x\,d\mu$). Chain rule:
$$\frac{d\nu}{d\lambda}=\frac{d\nu}{d\mu}\cdot\frac{d\mu}{d\lambda}=x\cdot 2x=2x^2.$$
Verify $\nu([0,1])$ two ways.
*Via the $\lambda$-density:* $\int_0^1 2x^2\,dx=\tfrac23.$
*Directly against $\mu$:* $\nu([0,1])=\int_0^1 x\,d\mu=\int_0^1 x\cdot 2x\,d\lambda=\int_0^1 2x^2\,dx=\tfrac23.$ ✓ Both give $\tfrac23$.

**P3** (a) *Singular:* partition $[0,1]=\{\tfrac12\}\uplus\big([0,1]\setminus\{\tfrac12\}\big)$. Then $\lambda(\{\tfrac12\})=0$ and $\delta_{1/2}([0,1]\setminus\{\tfrac12\})=0$, so $\nu\perp\lambda$ by definition. *No density:* suppose $\nu(E)=\int_E f\,d\lambda$ for all Borel $E$. Take $E=\{\tfrac12\}$: since $\lambda(\{\tfrac12\})=0$, the right side is $\int_{\{1/2\}}f\,d\lambda=0$, but the left side is $\delta_{1/2}(\{\tfrac12\})=1$. Contradiction, so no such $f$ exists. (Equivalently: $\nu\not\ll\lambda$ because the $\lambda$-null set $\{\tfrac12\}$ has $\nu$-mass $1$, and Radon–Nikodym's necessary condition fails.)

(b) Write $\nu=\underbrace{\lambda|_{[0,1]}}_{\ll\lambda}+\underbrace{3\,\delta_{1/2}}_{\perp\lambda}$. The first term is absolutely continuous with density $\mathbf{1}_{[0,1]}$; the second is singular (concentrated on the $\lambda$-null set $\{\tfrac12\}$). By uniqueness of the Lebesgue decomposition,
$$\nu_{ac}=\lambda|_{[0,1]},\quad \frac{d\nu_{ac}}{d\lambda}=\mathbf{1}_{[0,1]},\qquad \nu_s=3\,\delta_{1/2}.$$

</details>

## Flashback

**From Lesson 4.3 (signed measures and decomposition):** On $([0,1],\mathcal{B})$ define the signed measure $\nu(E)=\int_E (2x-1)\,d\lambda(x)$. Find a Hahn decomposition $[0,1]=P\uplus N$ into a positive and a negative set, write the Jordan decomposition $\nu=\nu^+-\nu^-$, and compute the total variation $|\nu|([0,1])$.

<details>
<summary>Solution</summary>

The integrand $2x-1$ is $\ge 0$ exactly when $x\ge\tfrac12$. So take the **Hahn decomposition**
$$P=[\tfrac12,1]\quad(\nu\ge 0\text{ here}),\qquad N=[0,\tfrac12)\quad(\nu\le 0\text{ here}).$$
The **Jordan parts** are the positive and negative pieces of the integrand:
$$\nu^+(E)=\int_E (2x-1)^+\,d\lambda=\int_{E\cap[1/2,1]}(2x-1)\,d\lambda,\qquad \nu^-(E)=\int_{E\cap[0,1/2]}(1-2x)\,d\lambda,$$
so $\frac{d\nu^+}{d\lambda}=(2x-1)^+$ and $\frac{d\nu^-}{d\lambda}=(2x-1)^-$ — note both Jordan parts are themselves absolutely continuous with respect to $\lambda$, which is the hook into today's lesson. The **total variation** has density $|2x-1|$:
$$|\nu|([0,1])=\int_0^1 |2x-1|\,dx=\int_0^{1/2}(1-2x)\,dx+\int_{1/2}^1(2x-1)\,dx=\tfrac14+\tfrac14=\tfrac12.$$
(Each piece: $\int_{1/2}^1(2x-1)\,dx=[x^2-x]_{1/2}^1=0-(-\tfrac14)=\tfrac14$, and by symmetry the other is $\tfrac14$.) As a sanity check $\nu([0,1])=\int_0^1(2x-1)\,dx=0=\nu^+([0,1])-\nu^-([0,1])=\tfrac14-\tfrac14$. ✓

</details>

## Connections

- **Backward (Lesson 4.3):** the Jordan parts $\nu^+,\nu^-$ and the total variation $|\nu|$ of a signed measure are the raw material here — Radon–Nikodym for a *signed* (or complex) measure $\nu\ll\mu$ is obtained by applying today's nonnegative theorem to $\nu^+$ and $\nu^-$ separately, giving a signed density $\frac{d\nu}{d\mu}=\frac{d\nu^+}{d\mu}-\frac{d\nu^-}{d\mu}$.
- **Forward (Lesson 4.5):** when $\mu=\lambda$ on $\mathbb{R}$, the Lebesgue differentiation theorem *recovers* the density as a genuine limit of averages, $\frac{d\nu}{d\lambda}(x)=\lim_{r\to 0}\frac{\nu(B_r(x))}{\lambda(B_r(x))}$ for $\lambda$-a.e. $x$ — this is the Fundamental Theorem of Calculus in Lebesgue form and the payoff of Boss problem 4.
- **Sideways (`probability-theory`):** the density $\frac{dP}{d\lambda}$ is the pdf; **conditional expectation** $E[X\mid\mathcal{G}]$ is defined as the Radon–Nikodym derivative of $E\mapsto\int_E X\,dP$ with respect to $P$ restricted to the sub-σ-algebra $\mathcal{G}$; and the change-of-measure factor $\frac{dQ}{dP}$ (likelihood ratio, Girsanov) is an R–N derivative.
- **Sideways (`functional-analysis`):** the slick proof is just the Riesz representation theorem on the Hilbert space $L^2(\mu+\nu)$ — Radon–Nikodym falls out of $L^2$ self-duality. The same theorem underlies the identification of the dual of $L^p$ with $L^q$.

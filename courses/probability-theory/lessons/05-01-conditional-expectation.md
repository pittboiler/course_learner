# Probability Theory · Lesson 5.1: Conditional expectation

> ⏱ ~15 min · Module 5: Conditional expectation and martingales · Builds on: [2.5](02-05-lp-spaces-inequalities.md), [1.2](01-02-sigma-algebras.md) · Unlocks: [5.2](05-02-conditional-expectation-properties.md)

## Why this matters

Every prediction, every filter, every fair-game argument in stochastic processes rests on one object: the best guess of a random quantity given partial information. Elementary probability only knows how to condition on a single *event* — "given that it rained." But information in practice is richer and messier: a trader sees prices up to today, a physicist knows the coarse-grained state but not the microstate, a statistician observes $Y$ and wants $X$. All of these are "condition on everything a partial observer can see," and that observer's knowledge is a **σ-algebra**, not an event. Conditional expectation $\mathbb E[X\mid\mathcal G]$ is the object that does this correctly, and it is the atom out of which martingales ([5.3](05-03-martingales.md)) — the whole back half of this course — are built.

## The idea

Start with what you know. In a first course, $\mathbb E[X\mid B]=\frac{\mathbb E[X\mathbf 1_B]}{\mathbb P(B)}$ is the average of $X$ restricted to the event $B$ — one number, the mean over that slice of the world. That's fine when your information is "did $B$ happen, yes or no." But real information partitions the world into *many* slices at once, and the honest object should tell you the conditional average *whichever slice you turn out to be in*. So it can't be a single number — it has to be a **function of which slice you land in**, i.e. a random variable.

Package the observer's knowledge as a σ-algebra $\mathcal G\subseteq\mathcal F$: the collection of events the observer can decide (can resolve as "happened" or "didn't"). Conditioning on $\mathcal G$ produces a new random variable $\mathbb E[X\mid\mathcal G]$ — the observer's best guess of $X$ using only what $\mathcal G$ can see. Two pictures pin down "best guess," and they agree:

- **Geometry (least squares).** Among all guesses the observer is *allowed* to make — the $\mathcal G$-measurable variables — pick the one closest to $X$ in mean-square distance. That's an orthogonal projection, exactly the "drop a perpendicular" move that $L^2$'s Hilbert-space geometry from [2.5](02-05-lp-spaces-inequalities.md) makes available.
- **Averages (bookkeeping).** Demand that the guess have the *same average as $X$ over every event the observer can resolve*. Nail the averages on all of $\mathcal G$ and you've nailed the function.

The first picture is the intuition; the second is the definition that survives even when $X$ isn't square-integrable.

## The formal version

**The $L^2$ projection (intuition first).** Fix a probability space $(\Omega,\mathcal F,\mathbb P)$ and a sub-σ-algebra $\mathcal G\subseteq\mathcal F$. Let $L^2(\mathcal G)$ be the $\mathcal G$-measurable, square-integrable random variables — a closed linear subspace of the Hilbert space $L^2=L^2(\mathcal F)$ with inner product $\langle U,V\rangle=\mathbb E[UV]$ from [2.5](02-05-lp-spaces-inequalities.md). For $X\in L^2$, define $\mathbb E[X\mid\mathcal G]$ as the **orthogonal projection** of $X$ onto $L^2(\mathcal G)$: the unique $Y\in L^2(\mathcal G)$ minimizing
$$\mathbb E\big[(X-Y)^2\big].$$

> In words: $\mathbb E[X\mid\mathcal G]$ is the best least-squares predictor of $X$ you can build out of information the observer actually has.

Projection means the error $X-Y$ is orthogonal to the whole subspace: $\mathbb E[(X-Y)Z]=0$ for every $Z\in L^2(\mathcal G)$. Taking $Z=\mathbf 1_A$ for $A\in\mathcal G$ turns that orthogonality into a statement about averages — which is exactly the general definition.

**The general definition (works for all integrable $X$).** Let $X$ be integrable, $\mathbb E|X|<\infty$. A **conditional expectation of $X$ given $\mathcal G$** is any random variable $Y$ such that

1. $Y$ is $\mathcal G$-measurable, and
2. (**partial averaging**) $\displaystyle\int_A Y\,d\mathbb P=\int_A X\,d\mathbb P\qquad\text{for every }A\in\mathcal G.$

Any such $Y$ is written $\mathbb E[X\mid\mathcal G]$.

> In words: $Y$ is built only from what $\mathcal G$ can see, and $Y$ has the *same total (hence the same average) as $X$ over every event the observer can resolve*. It matches $X$ event-by-event, at the resolution $\mathcal G$ allows.

**Uniqueness (proved).** Suppose $Y$ and $Y'$ both satisfy (1)–(2). Then $\int_A(Y-Y')\,d\mathbb P=0$ for all $A\in\mathcal G$. The set $A=\{Y-Y'>0\}$ is $\mathcal G$-measurable (both are $\mathcal G$-measurable), so $\int_A(Y-Y')\,d\mathbb P=0$; but the integrand is strictly positive on $A$, forcing $\mathbb P(A)=0$. Symmetrically $\mathbb P(Y-Y'<0)=0$. Hence $Y=Y'$ almost surely: $\mathbb E[X\mid\mathcal G]$ is unique **up to a null set**. $\blacksquare$

**Existence via Radon–Nikodym (stated, then applied).** The one theorem we borrow:

> **Radon–Nikodym.** If $\nu$ and $\mu$ are ($\sigma$-)finite measures on a measurable space with $\nu\ll\mu$ (meaning $\mu(A)=0\Rightarrow\nu(A)=0$: $\nu$ is *absolutely continuous* w.r.t. $\mu$), then there is a density $f\ge0$, the **Radon–Nikodym derivative** $f=\frac{d\nu}{d\mu}$, with $\nu(A)=\int_A f\,d\mu$ for all $A$. (For signed $\nu$ of finite total variation, $f$ is integrable, possibly of either sign.)

Apply it. Assume first $X\ge0$ integrable, and define a measure on the *smaller* space $(\Omega,\mathcal G)$ by
$$\nu(A)=\int_A X\,d\mathbb P,\qquad A\in\mathcal G.$$
This is a finite measure, and if $\mathbb P(A)=0$ then $\int_A X\,d\mathbb P=0$, so $\nu\ll\mathbb P|_{\mathcal G}$ (the restriction of $\mathbb P$ to $\mathcal G$). Radon–Nikodym hands back a $\mathcal G$-measurable density $Y=\frac{d\nu}{d\mathbb P|_{\mathcal G}}$ with $\int_A Y\,d\mathbb P=\nu(A)=\int_A X\,d\mathbb P$ for all $A\in\mathcal G$ — precisely (1)–(2). For general integrable $X$, split $X=X^+-X^-$ and subtract. **This is *why* conditional expectation exists in the required generality**, not just on $L^2$: R–N runs on all of $L^1$. $\blacksquare$

## Picture

![Left: X as a vector in L² dropping perpendicularly onto the subspace L²(𝒢); the foot of the perpendicular is E[X|𝒢] and the residual X−E[X|𝒢] is orthogonal to the plane. Right: conditioning on a partition, where E[X|𝒢] is the block-average of X.](assets/05-01-fig1.svg)

The residual $X-\mathbb E[X\mid\mathcal G]$ leaves the plane at a right angle: whatever $X$ has that $\mathcal G$ can't see is exactly the part orthogonal to the observer's world. The inset shows the special case that recovers elementary probability — on a partition, the projection is literally the block-by-block average.

## Worked examples

**Example 1 (mechanical — the elementary formula, recovered).** Let $\{B_1,B_2,\dots\}$ be a countable partition of $\Omega$ with each $\mathbb P(B_i)>0$, and $\mathcal G=\sigma(B_1,B_2,\dots)$. A $\mathcal G$-measurable variable is exactly one that is *constant on each block* $B_i$ (that's all $\mathcal G$ can resolve). So the guess must look like $Y=\sum_i c_i\mathbf 1_{B_i}$; we only need the constants. Partial averaging on $A=B_i$ gives
$$c_i\,\mathbb P(B_i)=\int_{B_i}Y\,d\mathbb P=\int_{B_i}X\,d\mathbb P=\mathbb E[X\mathbf 1_{B_i}]\ \Rightarrow\ c_i=\frac{\mathbb E[X\mathbf 1_{B_i}]}{\mathbb P(B_i)}=\mathbb E[X\mid B_i].$$
Therefore
$$\mathbb E[X\mid\mathcal G]=\sum_i\frac{\mathbb E[X\mathbf 1_{B_i}]}{\mathbb P(B_i)}\,\mathbf 1_{B_i}.$$
On block $B_i$ the new object *equals the old conditional expectation $\mathbb E[X\mid B_i]$* — the elementary number — and the σ-algebra version simply reports all of them at once, as a function of which block you are in. That is the inset in the figure.

**Example 2 (why you'd care — two structural extremes, and $\mathbb E[X\mid Y]$).**

*If $X$ is $\mathcal G$-measurable, then $\mathbb E[X\mid\mathcal G]=X$.* The observer can already see $X$ exactly, so the best guess is $X$ itself: take $Y=X$, which satisfies (1) trivially and (2) as an identity. No prediction needed.

*If $X$ is independent of $\mathcal G$, then $\mathbb E[X\mid\mathcal G]=\mathbb E[X]$, a constant.* The observer's information is useless for $X$, so the best guess collapses to the unconditional mean. Check: the constant $\mathbb E[X]$ is $\mathcal G$-measurable, and for $A\in\mathcal G$, independence gives $\int_A X\,d\mathbb P=\mathbb E[X\mathbf 1_A]=\mathbb E[X]\,\mathbb P(A)=\int_A \mathbb E[X]\,d\mathbb P$. Both conditions hold.

*Conditioning on a random variable* means $\mathbb E[X\mid Y]:=\mathbb E[X\mid\sigma(Y)]$, conditioning on the σ-algebra $\sigma(Y)$ that $Y$ generates ([2.1](02-01-random-variables-measurability.md)). Since $\sigma(Y)$-measurable functions are exactly the measurable functions *of $Y$* (the Doob–Dynkin fact), $\mathbb E[X\mid Y]=g(Y)$ for some measurable $g$ — the regression function. Concretely, if $(X,Y)$ has joint density $f(x,y)$, partial averaging forces $g(y)=\int x\,\frac{f(x,y)}{f_Y(y)}\,dx$, the familiar conditional mean, now derived rather than declared.

## Watch out

- You might think $\mathbb E[X\mid\mathcal G]$ is a number like $\mathbb E[X]$, but it is a **random variable** — a $\mathcal G$-measurable function on $\Omega$. Conditioning on an *event* returns a number; conditioning on a *σ-algebra* returns a function of "where you are." Collapsing them is the single most common early error.
- You might think it's a specific function, but it is defined **only up to almost-sure equality**: any two versions agree off a null set. Every identity involving $\mathbb E[X\mid\mathcal G]$ is an "a.s." statement, and you should read it that way by default.
- You might think you always need the projection picture, but that requires $X\in L^2$. The **definition and existence hold for every integrable $X$** ($L^1$) — Radon–Nikodym, not Hilbert-space geometry, is what carries the general case. Projection is the intuition; partial averaging is the load-bearing definition.
- "Conditioning on $Y$" is shorthand for conditioning on $\sigma(Y)$ — the information carried by $Y$, not the value of $Y$.

## One-liner

> $\mathbb E[X\mid\mathcal G]$ is the $\mathcal G$-measurable random variable that shares $X$'s average over every event $\mathcal G$ can see — the orthogonal projection of $X$ onto what the observer knows.

## Problems

**P1 (🟢)** Roll a fair die; let $X$ be the number shown and let $\mathcal G=\sigma(E)$ where $E=\{$the roll is even$\}$. Compute $\mathbb E[X\mid\mathcal G]$ explicitly as a random variable (its value on $E$ and on $E^c$).

**P2 (🟡)** Let $X\in L^2$ and let $\mathcal G\subseteq\mathcal F$. Using the projection characterization (error orthogonal to $L^2(\mathcal G)$), prove the **Pythagorean decomposition**
$$\mathbb E[X^2]=\mathbb E\big[(\mathbb E[X\mid\mathcal G])^2\big]+\mathbb E\big[(X-\mathbb E[X\mid\mathcal G])^2\big],$$
and deduce $\mathbb E\big[(\mathbb E[X\mid\mathcal G])^2\big]\le\mathbb E[X^2]$ (conditioning never increases the second moment).

**P3 (🔴, optional)** Let $U,V$ be i.i.d. with finite mean $m$, and set $S=U+V$. Show $\mathbb E[U\mid S]=\tfrac12 S$. (Hint: symmetry — argue $\mathbb E[U\mid S]=\mathbb E[V\mid S]$ first, then use linearity and the "$\mathcal G$-measurable ⇒ pulls out" extreme of Example 2 on $\mathbb E[S\mid S]$.)

<details>
<summary>Solutions</summary>

**P1** $\mathcal G=\{\varnothing,E,E^c,\Omega\}$ splits the world into "even" $E=\{2,4,6\}$ and "odd" $E^c=\{1,3,5\}$, each of probability $\tfrac12$. By Example 1, $\mathbb E[X\mid\mathcal G]$ is constant on each block, equal to the block average:
$$\text{on }E:\ \frac{2+4+6}{3}=4,\qquad\text{on }E^c:\ \frac{1+3+5}{3}=3.$$
So $\mathbb E[X\mid\mathcal G]=4\cdot\mathbf 1_E+3\cdot\mathbf 1_{E^c}$ — a random variable taking value $4$ when the roll is even and $3$ when odd. (Sanity check: its own mean is $\tfrac12\cdot4+\tfrac12\cdot3=3.5=\mathbb E[X]$, as partial averaging with $A=\Omega$ demands.)

**P2** Write $Y=\mathbb E[X\mid\mathcal G]$ and split $X=Y+(X-Y)$. Since $Y\in L^2(\mathcal G)$ and the error $X-Y$ is orthogonal to every element of $L^2(\mathcal G)$, in particular $\langle Y,\,X-Y\rangle=\mathbb E[Y(X-Y)]=0$. Then
$$\mathbb E[X^2]=\mathbb E\big[(Y+(X-Y))^2\big]=\mathbb E[Y^2]+2\underbrace{\mathbb E[Y(X-Y)]}_{=0}+\mathbb E[(X-Y)^2]=\mathbb E[Y^2]+\mathbb E[(X-Y)^2].$$
Both terms on the right are nonnegative, so dropping the second gives $\mathbb E[Y^2]\le\mathbb E[X^2]$, i.e. $\mathbb E\big[(\mathbb E[X\mid\mathcal G])^2\big]\le\mathbb E[X^2]$. (Geometrically: the projection is a leg, $X$ is the hypotenuse — the leg is never longer. This is the contraction that makes conditional expectation an $L^2$-contraction, and centering it turns into "conditioning never increases variance.")

**P3** First, $S=U+V$ is $\sigma(S)$-measurable, so $\mathbb E[S\mid S]=S$ (the "$\mathcal G$-measurable ⇒ itself" extreme). By linearity of conditional expectation,
$$S=\mathbb E[S\mid S]=\mathbb E[U\mid S]+\mathbb E[V\mid S].$$
Now symmetry: $(U,V)$ and $(V,U)$ have the same joint distribution (i.i.d.), and $S$ is symmetric in $U,V$, so $\mathbb E[U\mid S]$ and $\mathbb E[V\mid S]$ are the same function of $S$ — call it $g(S)$. Then $S=g(S)+g(S)=2g(S)$, giving $g(S)=\tfrac12 S$, i.e.
$$\mathbb E[U\mid S]=\tfrac12 S.$$
Knowing only the total, your best guess for each part is half — regardless of the common distribution. (Check the average: $\mathbb E[\tfrac12 S]=\tfrac12(m+m)=m=\mathbb E[U]$. ✓)

</details>

## Flashback

**From Lesson 2.5 ($L^p$ spaces and the key inequalities — $L^2$ as a Hilbert space):** For $X,Y\in L^2$ with inner product $\langle X,Y\rangle=\mathbb E[XY]$, prove the parallelogram law
$$\mathbb E[(X+Y)^2]+\mathbb E[(X-Y)^2]=2\,\mathbb E[X^2]+2\,\mathbb E[Y^2],$$
and say in one line why it certifies that $\|X\|_2=\sqrt{\mathbb E[X^2]}$ comes from an inner product — the very structure that let us define $\mathbb E[X\mid\mathcal G]$ as a projection.

<details>
<summary>Solution</summary>

Expand both squares inside the expectations using bilinearity of $\langle\cdot,\cdot\rangle$:
$$\mathbb E[(X+Y)^2]=\mathbb E[X^2]+2\mathbb E[XY]+\mathbb E[Y^2],\qquad \mathbb E[(X-Y)^2]=\mathbb E[X^2]-2\mathbb E[XY]+\mathbb E[Y^2].$$
Add them: the two $\pm2\mathbb E[XY]$ cross terms cancel, leaving
$$\mathbb E[(X+Y)^2]+\mathbb E[(X-Y)^2]=2\mathbb E[X^2]+2\mathbb E[Y^2].$$
*Why it matters:* the parallelogram law holds **iff** the norm is induced by an inner product. Its holding here certifies $\|\cdot\|_2$ is a genuine Hilbert-space norm (unlike $\|\cdot\|_p$ for $p\ne2$) — and that Hilbert structure, via completeness of $L^2$, is exactly what guarantees the orthogonal projection $\mathbb E[X\mid\mathcal G]$ onto the closed subspace $L^2(\mathcal G)$ exists. $\blacksquare$

</details>

## Connections

- **Backward:** this is [2.5](02-05-lp-spaces-inequalities.md)'s Hilbert-space geometry cashed in — "drop a perpendicular onto a closed subspace" is the entire $L^2$ picture — while the subspace itself, the $\mathcal G$-measurable variables, is built on the generated σ-algebra $\sigma(Y)$ and the σ-algebra-as-information reading from [1.2](01-02-sigma-algebras.md). Existence leans on Radon–Nikodym, the same absolute-continuity/density idea behind densities in [2.2](02-02-distributions-and-cdfs.md).
- **Forward:** [5.2](05-02-conditional-expectation-properties.md) turns the partial-averaging definition into the working toolkit — the tower property, taking out what is known, and conditional Jensen — and those properties are what make a martingale ([5.3](05-03-martingales.md)) "constant in conditional expectation," the definition of a fair game.
- **Sideways (statistics/econ):** $\mathbb E[X\mid Y]=g(Y)$ is the population regression function, and P2's Pythagorean split is the ANOVA/least-squares decomposition "total = explained + residual." In `micro-refresher`/`game-theory-refresher`, a Bayesian agent's posterior belief is a conditional expectation given the σ-algebra of what they've observed — updating *is* projecting onto available information.

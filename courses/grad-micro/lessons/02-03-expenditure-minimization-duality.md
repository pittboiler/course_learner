# Grad Microeconomics · Lesson 2.3: Expenditure minimization and duality

> ⏱ ~15 min · Module 2: Consumer theory · Builds on: [2.2 Utility maximization: Marshallian demand](02-02-utility-maximization-marshallian-demand.md) · Unlocks: [2.4 The Slutsky equation and comparative statics](02-04-slutsky-equation-comparative-statics.md)

## Why this matters

In 2.2 the consumer had a fixed budget and asked "how much happiness can I buy?" Flip the question: fix a target happiness and ask "what's the cheapest way to reach it?" That's the **expenditure-minimization problem (EMP)**, and it is not a different consumer — it is the *same* consumer viewed from the other side. The payoff is enormous. The EMP delivers a demand curve (**Hicksian demand**) along which utility, not income, is held fixed — exactly the object you need to isolate a pure substitution effect, which is why 2.4's Slutsky equation cannot even be stated without it. It delivers the **expenditure function**, whose derivatives *are* demands (Shephard's lemma) and whose curvature *proves* that compensated demand slopes down — no assumptions on preferences beyond what 2.1 already gave you. And the two problems are stitched together by a set of **duality identities** so tight that knowing any one of $\{V, e, x, h\}$ lets you reconstruct the other three. Producer theory (3.2) is this same lesson with "utility" renamed "output" and "expenditure" renamed "cost" — you are learning it once and using it twice.

## The idea

Picture a single indifference curve — the set of bundles giving exactly utility $\bar u$ — floating in the good-1/good-2 plane. Now take a budget line of slope $-p_1/p_2$ and slide it inward, toward the origin, keeping the slope fixed, until it is about to lose contact with that curve. The last point of contact is the cheapest bundle that still reaches $\bar u$. That tangency is the EMP, and the bundle it picks out is **Hicksian (compensated) demand** $h(p,\bar u)$; the dollar cost of that line, $p\cdot h$, is the **expenditure function** $e(p,\bar u)$.

Compare this to the UMP of 2.2, where you *fixed* a budget line and slid the indifference curves *outward* until one kissed it. Same tangency condition — MRS equals the price ratio — reached from opposite directions. Fix income, maximize utility; or fix utility, minimize cost. At the solution the two problems meet at the identical bundle, and that coincidence is the whole content of **duality**: the map from prices-and-income to a bundle, and the map from prices-and-utility to a bundle, are two doors into one room. Once you believe they meet, a dictionary of identities writes itself — and the derivative shortcuts (Roy's identity, Shephard's lemma) fall out of the envelope theorem you proved in 1.4.

## The formal version

Throughout, $p=(p_1,\dots,p_n)\gg 0$ is a price vector, $m>0$ income, $\bar u$ a target utility level, and $x\in\mathbb{R}^n_+$ a consumption bundle. Assume $u$ is continuous and (locally non-satiated) increasing, so constraints bind.

**The expenditure-minimization problem.**
$$e(p,\bar u) \;=\; \min_{x\ge 0}\; p\cdot x \quad\text{subject to}\quad u(x)\ge \bar u.$$
The minimizer is **Hicksian demand** $h(p,\bar u)$, so $e(p,\bar u)=p\cdot h(p,\bar u)$.
*In words:* $h$ is the cheapest bundle that still hits the utility target, and $e$ is what that bundle costs. Because utility (not income) is held fixed as prices move, $h$ is called *compensated* demand — as a price rises you are implicitly handed just enough extra cash to stay on the same indifference curve.

**The duality identities (the heart of the lesson).** For all $p\gg0$, $m>0$, $\bar u$:
$$e\big(p,\,V(p,m)\big)=m, \qquad V\big(p,\,e(p,\bar u)\big)=\bar u,$$
$$x(p,m)=h\big(p,\,V(p,m)\big), \qquad h(p,\bar u)=x\big(p,\,e(p,\bar u)\big).$$
*In words:* the minimum cost of reaching the utility that income $m$ buys is exactly $m$ (top-left); and the two demand systems are the *same function* once you line up their second arguments — Marshallian demand at income $m$ equals Hicksian demand at the utility that income delivers (bottom-left). $V$ and $e$ are inverses of each other in their scalar slot; $x$ and $h$ are relabelings of one bundle.

**Properties of the expenditure function.** $e(p,\bar u)$ is:
1. **Homogeneous of degree 1 in $p$:** $e(tp,\bar u)=t\,e(p,\bar u)$ for $t>0$. *In words:* double all prices, double the bill — the cheapest bundle doesn't change, only its price tag scales.
2. **Strictly increasing in $\bar u$**, and **nondecreasing in each $p_i$**. *In words:* wanting more costs more; nothing gets cheaper when a price goes up.
3. **Concave in $p$.** *In words:* the graph of $e$ over prices bulges upward-over-its-chords. Reason, in one line: $e(p,\bar u)=\min_x\{p\cdot x : u(x)\ge\bar u\}$ is a **minimum of functions that are linear in $p$** (each fixed bundle $x$ gives the linear map $p\mapsto p\cdot x$), and a pointwise min of linear functions is always concave.
4. **Continuous** in $(p,\bar u)$.

**Shephard's lemma.** If $e$ is differentiable in $p$ at $(p,\bar u)$, then
$$h_i(p,\bar u)=\frac{\partial e(p,\bar u)}{\partial p_i}.$$
*In words:* the Hicksian demand for good $i$ is just the price-derivative of the expenditure function. This is the **envelope theorem** of [1.4](01-04-envelope-theorem-duality.md): $e(p,\bar u)=p\cdot h(p,\bar u)$, and when you differentiate in $p_i$ the indirect terms $\sum_j p_j\,\partial h_j/\partial p_i$ vanish because the constraint holds with equality and the first-order conditions kill exactly that combination — only the *direct* term $h_i$ survives.

**The substitution matrix and the compensated law of demand.** Collect the price-derivatives of Hicksian demand into
$$S(p,\bar u)=D_p h(p,\bar u)=\Big[\tfrac{\partial h_i}{\partial p_j}\Big]=\Big[\tfrac{\partial^2 e}{\partial p_i\,\partial p_j}\Big].$$
Because $S$ is the Hessian of $e$ and $e$ is **concave** in $p$, $S$ is **symmetric and negative semidefinite (NSD)**. In particular every diagonal entry satisfies
$$\frac{\partial h_i}{\partial p_i}\le 0.$$
*In words:* the substitution matrix is the second-derivative matrix of a concave function, so its quadratic form is $\le 0$ in every direction ([linalg-refresher](../../linalg-refresher/syllabus.md)'s NSD tests) — and the diagonal being $\le0$ says **compensated demand always slopes down**: raise a good's price while holding utility fixed, and you never buy more of it. No such clean statement holds for Marshallian demand (Giffen goods exist) — the compensation is what buys the theorem. (Aside: $S$ is *singular*, with $Sp=0$, because $h$ is homogeneous of degree 0 in $p$ — Euler's theorem — so the price vector sits in its null space.)

## Picture

![The duality square: V and e on top (inverse value functions), Marshallian x and Hicksian h on the bottom, linked by Roy's identity on the left, Shephard's lemma on the right, the inverse identity across the top, and the identity substitution across the bottom.](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — Cobb–Douglas EMP, then verify every identity).** Take $u(x_1,x_2)=x_1^{a}x_2^{1-a}$ with $a\in(0,1)$. From 2.2 you already have the UMP outputs
$$x_1(p,m)=\frac{a\,m}{p_1},\quad x_2(p,m)=\frac{(1-a)m}{p_2},\qquad V(p,m)=m\Big(\frac{a}{p_1}\Big)^{a}\Big(\frac{1-a}{p_2}\Big)^{1-a}.$$

Now solve the EMP directly. Minimize $p_1x_1+p_2x_2$ subject to $x_1^{a}x_2^{1-a}=\bar u$. The tangency condition (MRS $=$ price ratio) is
$$\frac{a\,x_2}{(1-a)x_1}=\frac{p_1}{p_2}\ \Longrightarrow\ x_2=\frac{(1-a)p_1}{a\,p_2}\,x_1.$$
Substitute into the constraint $x_1^{a}x_2^{1-a}=\bar u$:
$$x_1\Big(\frac{(1-a)p_1}{a\,p_2}\Big)^{1-a}=\bar u\ \Longrightarrow\ \boxed{\,h_1=\bar u\Big(\frac{a\,p_2}{(1-a)p_1}\Big)^{1-a}\,},\qquad \boxed{\,h_2=\bar u\Big(\frac{(1-a)p_1}{a\,p_2}\Big)^{a}\,}.$$
Cost these out, $e=p_1h_1+p_2h_2$; both terms collapse to the same monomial $p_1^{a}p_2^{1-a}\bar u$ times a constant, and the constant simplifies (full algebra in P1) to
$$\boxed{\,e(p,\bar u)=\bar u\Big(\frac{p_1}{a}\Big)^{a}\Big(\frac{p_2}{1-a}\Big)^{1-a}\,}.$$

*Verify $e(p,V(p,m))=m$.* Substituting $\bar u=V(p,m)=m(a/p_1)^{a}((1-a)/p_2)^{1-a}$ into $e$,
$$e(p,V)=V\Big(\frac{p_1}{a}\Big)^{a}\Big(\frac{p_2}{1-a}\Big)^{1-a}=m\underbrace{\Big(\frac{a}{p_1}\Big)^{a}\Big(\frac{p_1}{a}\Big)^{a}}_{=1}\underbrace{\Big(\frac{1-a}{p_2}\Big)^{1-a}\Big(\frac{p_2}{1-a}\Big)^{1-a}}_{=1}=m.\ \checkmark$$
$V$ and $e$ are exact reciprocals in the way the identity demands.

*Verify Shephard's lemma, $\partial e/\partial p_1=h_1$.* With $e=\bar u\,a^{-a}(1-a)^{-(1-a)}p_1^{a}p_2^{1-a}$,
$$\frac{\partial e}{\partial p_1}=\bar u\,a^{-a}(1-a)^{-(1-a)}\cdot a\,p_1^{a-1}p_2^{1-a}=\bar u\,a^{1-a}(1-a)^{-(1-a)}p_1^{a-1}p_2^{1-a},$$
which is precisely $h_1=\bar u\big(a/(1-a)\big)^{1-a}(p_2/p_1)^{1-a}$. $\checkmark$ (This box is the machinery Boss Problem 2 asks you to run end-to-end.)

**Example 2 (why you'd care — the substitution matrix is NSD and symmetric).** Stay with the Cobb–Douglas $h$ above and build $S=D_p h$. Write $h_1=C\,p_1^{a-1}p_2^{1-a}$ and $h_2=D\,p_1^{a}p_2^{-a}$ with $C=\bar u\,a^{1-a}(1-a)^{-(1-a)}$, $D=\bar u\,a^{-a}(1-a)^{a}$. Then
$$\frac{\partial h_1}{\partial p_1}=(a-1)\frac{h_1}{p_1}<0,\qquad \frac{\partial h_2}{\partial p_2}=-a\,\frac{h_2}{p_2}<0,$$
so both **own-price** effects are negative — the compensated law of demand, confirmed. The cross-terms:
$$\frac{\partial h_1}{\partial p_2}=(1-a)\frac{h_1}{p_2}=C(1-a)\,p_1^{a-1}p_2^{-a},\qquad \frac{\partial h_2}{\partial p_1}=a\,\frac{h_2}{p_1}=D\,a\,p_1^{a-1}p_2^{-a}.$$
These are **equal**, because $C(1-a)=\bar u\,a^{1-a}(1-a)^{a}=Da$ — so $S$ is **symmetric**, exactly as "$S$ is a Hessian" predicts. Finally the determinant:
$$\det S=\frac{\partial h_1}{\partial p_1}\frac{\partial h_2}{\partial p_2}-\Big(\frac{\partial h_1}{\partial p_2}\Big)^2=a(1-a)\frac{h_1h_2}{p_1p_2}-a(1-a)\frac{h_1h_2}{p_1p_2}=0.$$
A symmetric $2\times2$ matrix with $\le0$ diagonal and $\det=0$ is **negative semidefinite** (its eigenvalues are $0$ and something $<0$). The zero eigenvalue is not an accident: it is the $Sp=0$ singularity from degree-0 homogeneity of $h$. So $S$ is symmetric, NSD, and singular — every property the general theory promised, made concrete.

## Watch out

- **You might think** Hicksian demand is something you can read off market data, **but actually** it isn't directly observable: it holds *utility* fixed as prices move, and utility is unmeasured. What a store sees is Marshallian demand, which holds *income* fixed. The two coincide only at the reference point where $m=e(p,\bar u)$; away from it they diverge by exactly the income effect (that gap is 2.4's Slutsky decomposition).
- **You might think** $e$ is convex in prices "like a cost curve," **but actually** it is **concave** in $p$. The intuition: as one price rises, the consumer *re-optimizes* — substitutes away from the pricey good — so expenditure rises more slowly than the naive "same bundle, higher price" line would suggest. Bending below that straight line is concavity. (Convexity would be the sign error that flips the compensated law of demand.)
- **You might think** $e$ and $h$ scale the same way in prices, **but actually** their homogeneity degrees differ: $e$ is homogeneous of **degree 1** in $p$ (double prices, double the bill), while $h$ is homogeneous of **degree 0** in $p$ (double all prices with utility fixed and the cheapest bundle is unchanged). Shephard's lemma is consistent with this — differentiating a degree-1 function in $p$ yields a degree-0 one.

## One-liner

> The EMP is the UMP read backwards: minimize cost to hit a utility target, and its value function $e(p,\bar u)$ is homogeneous degree 1, increasing, and *concave* in prices — concavity that makes Shephard's derivative $h_i=\partial e/\partial p_i$ slope downward, all for free.

## Problems

**P1 (🟢)** For $u=x_1^{a}x_2^{1-a}$, fill in the algebra Example 1 boxed: starting from $h_1,h_2$, compute $e=p_1h_1+p_2h_2$ and simplify it to $\bar u\,(p_1/a)^{a}(p_2/(1-a))^{1-a}$. Then verify Shephard's lemma for good 2, $\partial e/\partial p_2=h_2$.

**P2 (🟡)** Use only duality (no new optimization) to recover Hicksian demand from Marshallian demand for the same Cobb–Douglas consumer. That is, start from $x_1(p,m)=am/p_1$ and the identity $h(p,\bar u)=x(p,e(p,\bar u))$, and show you land back on $h_1=\bar u\,(a p_2/((1-a)p_1))^{1-a}$.

**P3 (🔴, optional)** Prove, in general (not Cobb–Douglas), that $e(p,\bar u)$ is concave in $p$ directly from the definition $e(p,\bar u)=\min_{x:\,u(x)\ge\bar u}p\cdot x$. Then explain in one sentence why concavity of $e$ forces the own-price Hicksian slope $\partial h_i/\partial p_i\le0$.

<details>
<summary>Solutions</summary>

**P1** With $h_1=\bar u\big(\tfrac{a}{1-a}\big)^{1-a}\big(\tfrac{p_2}{p_1}\big)^{1-a}$ and $h_2=\bar u\big(\tfrac{1-a}{a}\big)^{a}\big(\tfrac{p_1}{p_2}\big)^{a}$,
$$p_1h_1=\bar u\Big(\frac{a}{1-a}\Big)^{1-a}p_1^{a}p_2^{1-a},\qquad p_2h_2=\bar u\Big(\frac{1-a}{a}\Big)^{a}p_1^{a}p_2^{1-a}.$$
Both carry the common factor $p_1^{a}p_2^{1-a}\bar u$; add the bracketed constants. Writing $r=\tfrac{a}{1-a}$, they are $r^{1-a}+r^{-a}=r^{-a}(r+1)$, and $r+1=\tfrac{a}{1-a}+1=\tfrac{1}{1-a}$, so
$$r^{-a}(r+1)=\Big(\frac{1-a}{a}\Big)^{a}\frac{1}{1-a}=a^{-a}(1-a)^{a}(1-a)^{-1}=a^{-a}(1-a)^{-(1-a)}.$$
Hence $e=\bar u\,a^{-a}(1-a)^{-(1-a)}p_1^{a}p_2^{1-a}=\bar u\big(\tfrac{p_1}{a}\big)^{a}\big(\tfrac{p_2}{1-a}\big)^{1-a}$, as claimed.
Shephard for good 2: $\partial e/\partial p_2=\bar u\,a^{-a}(1-a)^{-(1-a)}p_1^{a}\cdot(1-a)p_2^{-a}=\bar u\,a^{-a}(1-a)^{a}p_1^{a}p_2^{-a}$, which is exactly $h_2=\bar u\big(\tfrac{1-a}{a}\big)^{a}(p_1/p_2)^{a}$. $\checkmark$

**P2** The identity says: evaluate Marshallian demand at the *income* that minimally buys $\bar u$, i.e. at $m=e(p,\bar u)$. From Example 1, $e(p,\bar u)=\bar u\big(\tfrac{p_1}{a}\big)^{a}\big(\tfrac{p_2}{1-a}\big)^{1-a}$. Then
$$h_1(p,\bar u)=x_1\big(p,e(p,\bar u)\big)=\frac{a\,e(p,\bar u)}{p_1}=\frac{a}{p_1}\,\bar u\Big(\frac{p_1}{a}\Big)^{a}\Big(\frac{p_2}{1-a}\Big)^{1-a}=\bar u\,a^{1-a}(1-a)^{-(1-a)}p_1^{a-1}p_2^{1-a}.$$
Rewriting $a^{1-a}(1-a)^{-(1-a)}p_1^{a-1}p_2^{1-a}=\big(\tfrac{a}{1-a}\big)^{1-a}\big(\tfrac{p_2}{p_1}\big)^{1-a}=\big(\tfrac{a\,p_2}{(1-a)p_1}\big)^{1-a}$, so $h_1=\bar u\big(\tfrac{a\,p_2}{(1-a)p_1}\big)^{1-a}$ — the same Hicksian demand as the direct EMP, obtained with zero new optimization. That is duality earning its keep.

**P3** Fix a utility target $\bar u$ and let $x^{0}=h(p^{0},\bar u)$, $x^{1}=h(p^{1},\bar u)$ be the cost-minimizing bundles at two price vectors. For any $\lambda\in[0,1]$ put $p^{\lambda}=\lambda p^{0}+(1-\lambda)p^{1}$. Whatever bundle $x^{\lambda}=h(p^{\lambda},\bar u)$ minimizes cost at $p^{\lambda}$ is *feasible* at both $p^0$ and $p^1$ (it satisfies $u(x^\lambda)\ge\bar u$), so by definition of the minimum $p^{0}\cdot x^{\lambda}\ge e(p^{0},\bar u)$ and $p^{1}\cdot x^{\lambda}\ge e(p^{1},\bar u)$. Therefore
$$e(p^{\lambda},\bar u)=p^{\lambda}\cdot x^{\lambda}=\lambda\,p^{0}\cdot x^{\lambda}+(1-\lambda)\,p^{1}\cdot x^{\lambda}\ \ge\ \lambda\,e(p^{0},\bar u)+(1-\lambda)\,e(p^{1},\bar u).$$
The value of the average price beats the average of the values — that is concavity. (This is the general form of the "min of linear functions" argument.)
One-sentence consequence: since $\partial h_i/\partial p_i=\partial^2 e/\partial p_i^2$ and a concave function has $\partial^2 e/\partial p_i^2\le0$, the own-price compensated slope is $\le0$. $\blacksquare$

</details>

## Flashback

**From Lesson 2.2 (Utility maximization: Marshallian demand):** A consumer has indirect utility $V(p_1,p_2,m)=\dfrac{m}{2}\,p_1^{-1/2}p_2^{-1/2}$. Use **Roy's identity** to recover the Marshallian demand for good 1, and identify the underlying preferences.

<details>
<summary>Solution</summary>

Roy's identity: $x_1=-\dfrac{\partial V/\partial p_1}{\partial V/\partial m}$. Compute the pieces:
$$\frac{\partial V}{\partial p_1}=\frac{m}{2}\Big(-\tfrac12\Big)p_1^{-3/2}p_2^{-1/2}=-\frac{m}{4}p_1^{-3/2}p_2^{-1/2},\qquad \frac{\partial V}{\partial m}=\frac12 p_1^{-1/2}p_2^{-1/2}.$$
Divide:
$$x_1=-\frac{-\tfrac{m}{4}p_1^{-3/2}p_2^{-1/2}}{\tfrac12 p_1^{-1/2}p_2^{-1/2}}=\frac{m}{4}p_1^{-3/2}p_2^{-1/2}\cdot\frac{2}{p_1^{-1/2}p_2^{-1/2}}=\frac{m}{2p_1}.$$
So $x_1=\dfrac{m}{2p_1}$ (and by symmetry $x_2=\dfrac{m}{2p_2}$): a spend-half-on-each rule, the signature of **Cobb–Douglas preferences with equal exponents**, $u=x_1^{1/2}x_2^{1/2}$ (i.e. $a=\tfrac12$). Sanity check against 2.2's formula $x_1=am/p_1$ with $a=\tfrac12$. $\checkmark$

</details>

## Connections

- **Backward ([1.4](01-04-envelope-theorem-duality.md)):** Shephard's lemma *is* the envelope theorem applied to the EMP — the price-derivative of a value function equals the partial of the Lagrangian, which is just the optimal bundle's $i$-th coordinate. Same move that turns the KKT multiplier into a shadow price.
- **Forward ([2.4](02-04-slutsky-equation-comparative-statics.md)):** the Slutsky equation $\dfrac{\partial x_i}{\partial p_j}=\dfrac{\partial h_i}{\partial p_j}-x_j\dfrac{\partial x_i}{\partial m}$ splits the observable (Marshallian) price response into the compensated (Hicksian) substitution term built here plus an income term — and the symmetry/NSD of $S$ carries over to become the integrability conditions on demand.
- **Sideways ([3.2](03-02-cost-minimization.md)):** cost minimization for a firm is the *identical* mathematics — "min $w\cdot z$ s.t. $f(z)\ge \bar q$" — with utility $u\to$ production $f$, prices $p\to$ input prices $w$, and $e\to$ the cost function $c(w,\bar q)$. Shephard's lemma reappears verbatim, now delivering conditional factor demands, and $c$ is likewise concave in input prices.
- **Sideways ([linalg-refresher](../../linalg-refresher/syllabus.md)):** "$S$ is negative semidefinite" is exactly the quadratic-form / principal-minor definiteness machinery — here it certifies downward-sloping compensated demand, and its symmetry is Young's theorem on the mixed partials of $e$.

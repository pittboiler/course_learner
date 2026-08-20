# Mathematical Microeconomics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Micro is one move repeated: **write down an optimization, take its first-order
condition, and then differentiate its value function.** Consumers maximize
utility on a budget; firms minimize cost and maximize profit; markets pick the
price that makes everyone's answers consistent. Everything below is that move —
the four consumer objects and the identities linking them, the firm's mirror
image of them, the market structures built on top, and the four ways the welfare
theorems fail.

## Notation

Symbols are reused across modules — the collisions are flagged, because they are
where mistakes actually happen.

| Symbol | Means | First used |
|---|---|---|
| $\succeq,\ \succ,\ \sim$ | "at least as good as", "strictly better", "indifferent" — a ranking, no numbers | [1.1](lessons/01-01-preferences-utility.md) |
| $u(x)$, $u_i$ | utility of a bundle; $u_i=\partial u/\partial x_i$ is good $i$'s marginal utility | [1.1](lessons/01-01-preferences-utility.md) |
| $\mathrm{MRS}_{12}$ | units of good 2 you'd trade away for one more unit of good 1, staying equally happy | [1.1](lessons/01-01-preferences-utility.md) |
| $p=(p_1,\dots,p_L)$ | goods prices (consumer side) | [1.2](lessons/01-02-utility-maximization-marshallian-demand.md) |
| $w$ | **wealth/income** in Modules 1–2; the **wage** in Module 3 — read the module | [1.2](lessons/01-02-utility-maximization-marshallian-demand.md) |
| $\lambda$ | Lagrange multiplier — here the marginal utility of wealth (utils per dollar) | [1.2](lessons/01-02-utility-maximization-marshallian-demand.md) |
| $x(p,w)$ | Marshallian (Walrasian) demand — what you buy at prices $p$ with wealth $w$ | [1.2](lessons/01-02-utility-maximization-marshallian-demand.md) |
| $v(p,w)$ | indirect utility — the best utility your wealth can reach at those prices | [1.2](lessons/01-02-utility-maximization-marshallian-demand.md) |
| $\bar u$ | a required utility level (the target in the dual problem) | [1.3](lessons/01-03-duality-expenditure-hicksian.md) |
| $e(p,\bar u)$ | expenditure function — cheapest bill that still buys happiness $\bar u$ | [1.3](lessons/01-03-duality-expenditure-hicksian.md) |
| $h(p,\bar u)$ | Hicksian (compensated) demand — what you buy when wealth is topped up to hold $\bar u$ | [1.3](lessons/01-03-duality-expenditure-hicksian.md) |
| $s_{ij}$, $S$ | substitution term $\partial h_i/\partial p_j$, and the Slutsky matrix collecting them | [1.4](lessons/01-04-slutsky-comparative-statics.md) |
| $L$, $L'$ | lotteries (probability distributions over outcomes) — **not** labor here | [2.1](lessons/02-01-expected-utility.md) |
| $\mathbb{E}_L[u]$ | expected utility of lottery $L$: the probability-weighted average of $u$ | [2.1](lessons/02-01-expected-utility.md) |
| $CE$ | certainty equivalent — the sure amount that feels exactly as good as the gamble | [2.2](lessons/02-02-risk-aversion.md) |
| $\pi$ | **risk premium** in 2.2; **profit** from 3.3 onward — the worst collision in the course | [2.2](lessons/02-02-risk-aversion.md) |
| $A(x)$, $R(x)$ | Arrow–Pratt absolute and relative risk aversion | [2.2](lessons/02-02-risk-aversion.md) |
| $\alpha$, $\gamma$ | the CARA parameter and the CRRA parameter | [2.2](lessons/02-02-risk-aversion.md) |
| $f(K,L)$ | production function — the most output that capital $K$ and labor $L$ can make | [3.1](lessons/03-01-technology-production.md) |
| $\mathrm{MP}_L$, $\mathrm{AP}_L$ | marginal product $f_L$ and average product $f/L$ of labor | [3.1](lessons/03-01-technology-production.md) |
| $\mathrm{MRTS}_{LK}$ | capital that exactly replaces one unit of labor — the firm's MRS | [3.1](lessons/03-01-technology-production.md) |
| $\sigma$ | elasticity of substitution — how easily one input stands in for the other | [3.1](lessons/03-01-technology-production.md) |
| $r$ | **rental rate of capital** in 3.2; also used as the degree of homogeneity of $f$ in 3.1 | [3.1](lessons/03-01-technology-production.md) |
| $c(w,r,q)$ | cost function — cheapest bill to produce output $q$ at input prices $(w,r)$ | [3.2](lessons/03-02-cost-minimization.md) |
| $MC$, $AVC$, $ATC$, $VC$, $F$ | marginal, average variable, average total cost; variable and fixed cost | [3.3](lessons/03-03-profit-maximization-supply.md) |
| $\pi(p,w)$ | profit function — maximized profit as a function of output and input prices | [3.3](lessons/03-03-profit-maximization-supply.md) |
| $\mathrm{CS}$, $\mathrm{PS}$, $\mathrm{TS}$, $DWL$ | consumer, producer, and total surplus; deadweight loss | [4.1](lessons/04-01-competition-welfare.md) |
| $P(q)$, $S(q)$ | inverse demand (marginal benefit) and inverse supply (marginal cost) of the $q$-th unit | [4.1](lessons/04-01-competition-welfare.md) |
| $MR$ | marginal revenue — added revenue from one more unit, net of the markdown on old units | [4.2](lessons/04-02-monopoly-price-discrimination.md) |
| $\varepsilon$ | price elasticity of demand, $\frac{dq}{dp}\frac{p}{q}<0$ | [4.2](lessons/04-02-monopoly-price-discrimination.md) |
| $\mathcal{L}$ | Lerner index $(p-MC)/p$ — the fractional markup (written $L$ in the lesson) | [4.2](lessons/04-02-monopoly-price-discrimination.md) |
| $BR_i(q_j)$ | firm $i$'s best-response function: its optimal output given the rival's | [4.3](lessons/04-03-oligopoly.md) |
| $\omega^i$, $\bar\omega$ | consumer $i$'s endowment, and the economy's total endowment | [5.1](lessons/05-01-general-equilibrium-welfare-theorems.md) |
| $O^A$, $O^B$ | the two origins of the Edgeworth box (bottom-left for $A$, top-right for $B$) | [5.1](lessons/05-01-general-equilibrium-welfare-theorems.md) |
| $MSB$, $MPC$, $MEC$, $MSC$ | marginal social benefit; marginal private, external, and social cost | [5.2](lessons/05-02-externalities-public-goods.md) |
| $MRT$, $G$ | marginal rate of transformation (cost of one more unit); public-good quantity | [5.2](lessons/05-02-externalities-public-goods.md) |
| $\beta$, $\theta_H,\theta_L$, $e^{\ast}$ | buyer's quality multiplier in the lemons market; worker types; signaling education | [5.3](lessons/05-03-asymmetric-information.md) |

## Definitions

### Rational preferences

A ranking you can apply to any pair of bundles and that never loops back on
itself. **Completeness:** for all $x,y$, $x\succeq y$ or $y\succeq x$.
**Transitivity:** $x\succeq y$ and $y\succeq z\implies x\succeq z$.

*Introduced:* [1.1](lessons/01-01-preferences-utility.md)

### Local nonsatiation

However good your bundle, something slightly better sits arbitrarily close — no
bliss point, no thick indifference bands. Weaker than monotonicity, and it is the
exact hypothesis that forces the budget to bind and that the First Welfare
Theorem runs on.

*Introduced:* [1.2](lessons/01-02-utility-maximization-marshallian-demand.md)

### Utility representation

A number attached to each bundle that rises exactly when the ranking says
"better." Rational **plus continuous** preferences always admit one (Debreu), and
it is pinned down only up to a strictly increasing relabeling — utility is
**ordinal**.

$$x\succeq y\iff u(x)\ge u(y),\qquad v=f\circ u\ \text{represents the same }\succeq\ \text{for any strictly increasing }f$$

*Introduced:* [1.1](lessons/01-01-preferences-utility.md)

### Marginal rate of substitution

The slope of an indifference curve: how much good 2 you'd give up for one more
unit of good 1 and feel no different. Ordinal — the relabeling factor $f'(u)$
cancels in the ratio, even though each $u_i$ separately does not survive.

$$\mathrm{MRS}_{12}=\frac{\partial u/\partial x_1}{\partial u/\partial x_2}=\left|\frac{dx_2}{dx_1}\right|_{u=\bar u}$$

*Introduced:* [1.1](lessons/01-01-preferences-utility.md)

### Quasi-concavity

A taste for averages: mixing two bundles is never worse than the worse of them.
Four equivalent statements — convex preferences, quasi-concave $u$, convex upper
contour sets, indifference curves bowed toward the origin.

$$u(\lambda x+(1-\lambda)y)\ \ge\ \min\{u(x),u(y)\}\iff \{x:u(x)\ge\bar u\}\ \text{convex}$$

*Introduced:* [1.1](lessons/01-01-preferences-utility.md)

### Marshallian demand

What you actually buy: the best bundle your wealth can afford at the going
prices. Single-valued when $u$ is strictly quasi-concave.

$$x(p,w)=\arg\max_{p\cdot x\le w}u(x)$$

*Introduced:* [1.2](lessons/01-02-utility-maximization-marshallian-demand.md)

### Indirect utility

Utility rewritten as a function of the market environment instead of the bundle —
how happy prices and wealth *let* you be.

$$v(p,w)=u\bigl(x(p,w)\bigr)=\max_{p\cdot x\le w}u(x)$$

*Introduced:* [1.2](lessons/01-02-utility-maximization-marshallian-demand.md)

### Expenditure function

The mirror image: the cheapest bill that still reaches a required happiness
$\bar u$. It is $v$'s inverse in its scalar argument.

$$e(p,\bar u)=\min_{u(x)\ge\bar u}p\cdot x=p\cdot h(p,\bar u)$$

*Introduced:* [1.3](lessons/01-03-duality-expenditure-hicksian.md)

### Hicksian demand

The bundle you'd buy if someone adjusted your wealth after every price change to
keep your utility exactly at $\bar u$ — demand with the income effect surgically
removed. Same *point* as Marshallian demand at a matched $(w,\bar u)$; different
*response* to prices.

$$h(p,\bar u)=\arg\min_{u(x)\ge\bar u}p\cdot x$$

*Introduced:* [1.3](lessons/01-03-duality-expenditure-hicksian.md)

### Substitution and income effects

A price fall moves you for two reasons. The **substitution effect** is the slide
along the *original* indifference curve to the new, flatter price ratio — always
toward the cheaper good. The **income effect** is the parallel shift out to the
true new budget once purchasing power is handed back — sign-free.

*Introduced:* [1.4](lessons/01-04-slutsky-comparative-statics.md)

### Normal, inferior, Giffen

**Normal:** you buy more of it when richer, $\partial x_i/\partial w>0$.
**Inferior:** less, $\partial x_i/\partial w<0$. **Giffen:** inferior *and* the
income effect beats the substitution effect, so $\partial x_i/\partial p_i>0$ —
demand rises with price. Every Giffen good is inferior; almost no inferior good
is Giffen.

*Introduced:* [1.4](lessons/01-04-slutsky-comparative-statics.md)

### Slutsky matrix

The table of compensated (Hicksian) price responses. Because each $h_i$ is the
price-derivative of $e$, this is literally the price-Hessian of the expenditure
function — which is why it is symmetric, negative semidefinite, and singular.

$$S=\bigl[s_{ij}\bigr]=\bigl[\partial h_i/\partial p_j\bigr]=D^2_{pp}e,\qquad S=S^\top,\quad v^\top Sv\le0,\quad Sp=0$$

*Introduced:* [1.4](lessons/01-04-slutsky-comparative-statics.md)

### Lottery

A bag of probabilities over outcomes; compound lotteries mix two bags with weight
$\alpha$.

$$L=(p_1,\dots,p_n),\ p_s\ge0,\ \textstyle\sum_s p_s=1;\qquad \alpha L+(1-\alpha)L'$$

*Introduced:* [2.1](lessons/02-01-expected-utility.md)

### Independence axiom

Mixing both sides of a comparison with the same third lottery, on the same odds,
cannot flip your ranking — the common branch is irrelevant. This is the axiom
that buys linearity in probabilities, and the one Allais violates.

$$L\succeq L'\iff \alpha L+(1-\alpha)L''\succeq\alpha L'+(1-\alpha)L''\qquad \alpha\in(0,1]$$

*Introduced:* [2.1](lessons/02-01-expected-utility.md)

### von Neumann–Morgenstern utility index

One number per *outcome*, averaged against the lottery's probabilities. Unlike
ordinal utility it is **cardinal**: unique only up to a **positive affine**
transform $au+b$, $a>0$ — a nonlinear relabeling destroys the representation.

$$L\succeq L'\iff \sum_s p_s\,u(x_s)\ \ge\ \sum_s q_s\,u(x_s)$$

*Introduced:* [2.1](lessons/02-01-expected-utility.md)

### Certainty equivalent and risk premium

$CE$ is what the gamble is *worth* to you as a sure amount; the risk premium
$\pi$ is how far that falls short of the gamble's mean — the dollars you'd burn
to make the risk go away.

$$u(CE)=\mathbb{E}[u(x)],\qquad \pi=\mathbb{E}[x]-CE\ \ge 0$$

*Introduced:* [2.2](lessons/02-02-risk-aversion.md)

### Arrow–Pratt coefficients

Curvature normalized by slope — the *invariant* strength of risk aversion
(raw $u''$ is not invariant, so it measures nothing). $A$ prices dollar gambles,
$R$ prices percentage gambles.

$$A(x)=-\frac{u''(x)}{u'(x)},\qquad R(x)=x\,A(x)$$

*Introduced:* [2.2](lessons/02-02-risk-aversion.md)

### Isoquant

Every input mix that makes exactly the same output — the producer's indifference
curve, i.e. a level set of $f$.

$$\{(K,L):f(K,L)=q_0\}$$

*Introduced:* [3.1](lessons/03-01-technology-production.md)

### Marginal rate of technical substitution

The isoquant's slope: capital that exactly replaces one worker. Ratio of marginal
products — the MRS with a hard hat on.

$$\mathrm{MRTS}_{LK}=\frac{f_L}{f_K}=-\frac{dK}{dL}\Big|_{f=q_0}$$

*Introduced:* [3.1](lessons/03-01-technology-production.md)

### Returns to scale

What happens when you scale **all** inputs by $t>1$ — a statement about the whole
ray from the origin, logically independent of whether any single input has
diminishing marginal product.

$$f(tK,tL)\ \gtrless\ t\,f(K,L)\ \Longleftrightarrow\ \text{increasing / constant / decreasing};\qquad f\ \text{homogeneous of degree }r\Rightarrow\text{verdict is }r\gtrless1$$

*Introduced:* [3.1](lessons/03-01-technology-production.md)

### Elasticity of substitution

How *curved* the isoquant is — how easily one input stands in for the other. Not
the same thing as the MRTS, which is only the slope at a point.

$$\sigma=\frac{d\ln(K/L)}{d\ln\mathrm{MRTS}_{LK}}\ \ge0;\qquad \sigma=\infty\ \text{perfect substitutes},\ \ \sigma=1\ \text{Cobb–Douglas},\ \ \sigma=0\ \text{Leontief}$$

*Introduced:* [3.1](lessons/03-01-technology-production.md)

### Cost function and conditional factor demand

The firm's expenditure function. **Conditional** because the demands are
conditioned on producing exactly $q$ — the cost function never sees the *output*
price.

$$c(w,r,q)=\min_{f(K,L)\ge q}\ wL+rK=wL(w,r,q)+rK(w,r,q)$$

*Introduced:* [3.2](lessons/03-02-cost-minimization.md)

### Profit function

Maximized profit as a function of the prices the firm faces. Its price-slopes are
the firm's whole behavior (Hotelling), and it is **convex** — the mirror of the
cost function's concavity.

$$\pi(p,w)=\max_{q\ge0}\ pq-c(w,q)$$

*Introduced:* [3.3](lessons/03-03-profit-maximization-supply.md)

### Competitive supply curve

The rising branch of marginal cost, cut off at the shutdown price — **not** the
whole $MC$ curve. Short run the cutoff is $\min AVC$ (fixed cost is sunk); long
run it is $\min ATC$ (exit becomes credible).

$$q(p,w):\ p=MC(q)\ \text{with}\ MC'\ge0,\ \ p\ge\text{cutoff};\qquad q=0\ \text{otherwise}$$

*Introduced:* [3.3](lessons/03-03-profit-maximization-supply.md)

### Consumer and producer surplus

$\mathrm{CS}$ is what buyers got minus what they paid; $\mathrm{PS}$ is what
sellers got minus what the units cost to make — i.e. **variable** profit, so
$\mathrm{PS}=\pi+F$.

$$\mathrm{CS}(q)=\int_0^{q}\bigl[P(s)-p\bigr]ds,\qquad \mathrm{PS}(q)=\int_0^{q}\bigl[p-S(s)\bigr]ds=pq-VC(q)$$

*Introduced:* [4.1](lessons/04-01-competition-welfare.md)

### Allocative efficiency and deadweight loss

Efficiency is the quantity where the marginal buyer's benefit equals the marginal
seller's cost; deadweight loss is the surplus of the trades a distortion
prevented — value never created, not cash misplaced.

$$P(q^{\ast})=S(q^{\ast});\qquad DWL=\left|\int_{q}^{q^{\ast}}\bigl[P(s)-S(s)\bigr]ds\right|$$

*Introduced:* [4.1](lessons/04-01-competition-welfare.md)

### Marginal revenue

The price on the new unit **minus** the markdown it forces on every unit you were
already selling. Strictly below price whenever demand slopes down.

$$MR(q)=\frac{d}{dq}\bigl[p(q)q\bigr]=p(q)+q\,p'(q)=p\left(1+\frac{1}{\varepsilon}\right)$$

*Introduced:* [4.2](lessons/04-02-monopoly-price-discrimination.md)

### Lerner index

The fractional markup of price over marginal cost — the cleanest scalar measure
of market power. Zero under competition; equals the reciprocal of the elasticity
at any price-setter's optimum.

$$\mathcal{L}=\frac{p-MC}{p}=\frac{1}{|\varepsilon|}\in[0,1]$$

*Introduced:* [4.2](lessons/04-02-monopoly-price-discrimination.md)

### Price discrimination, by degree

**First-degree:** a personal price per unit — efficient quantity, zero consumer
surplus. **Second-degree:** a menu (quantity discounts, versioning) that types
self-select from, because the firm can't observe them. **Third-degree:**
observable segments priced separately, equalizing $MR$ across them.

*Introduced:* [4.2](lessons/04-02-monopoly-price-discrimination.md)

### Best response and Nash equilibrium

A best response is a *rule*, not a number: "given what you do, here is my
optimum." A Nash equilibrium is the pair where both rules hold at once — nobody,
seeing the other's choice, wishes they had done differently.

$$q_i^{\ast}=BR_i(q_{-i}^{\ast})\ \text{ for every }i$$

*Introduced:* [4.3](lessons/04-03-oligopoly.md)

### Pareto efficiency and the contract curve

Efficient means no feasible reshuffle helps someone without hurting someone else
— and it says **nothing** about fairness. In an Edgeworth box with smooth convex
preferences it is tangency of the two indifference curves; the locus of all such
points is the contract curve.

$$\text{Pareto efficient}\iff \mathrm{MRS}^A_{12}=\mathrm{MRS}^B_{12}$$

*Introduced:* [5.1](lessons/05-01-general-equilibrium-welfare-theorems.md)

### Walrasian (competitive) equilibrium

A price vector at which everyone shops optimally — financing purchases by selling
their endowment — and every market happens to clear.

$$x^i=\arg\max_{p\cdot x\le p\cdot\omega^i}u^i(x)\ \ \text{for each }i,\qquad \textstyle\sum_i x^i=\bar\omega$$

*Introduced:* [5.1](lessons/05-01-general-equilibrium-welfare-theorems.md)

### Externality

A cost or benefit landing on someone who was not part of the transaction, so the
price carries only part of the story and the quantity comes out wrong.

$$MSC(q)=MPC(q)+MEC(q)\qquad(\text{positive externality: } MSB=MPB+MEB)$$

*Introduced:* [5.2](lessons/05-02-externalities-public-goods.md)

### Public good

**Non-rival** (my use doesn't diminish yours) and **non-excludable** (non-payers
can't be kept out). Everyone consumes the same $G$, so willingness to pay is
summed **vertically**, not horizontally.

*Introduced:* [5.2](lessons/05-02-externalities-public-goods.md)

### Adverse selection

Hidden **type**, *before* contracting. Pricing at the average drives the
above-average sellers out, which lowers the average, which drives more out — the
market ratchets down and can unravel completely.

*Introduced:* [5.3](lessons/05-03-asymmetric-information.md)

### Moral hazard

Hidden **action**, *after* contracting. Full insurance zeroes the agent's return
to effort, so the principal must expose the agent to output risk instead — the
insurance-versus-incentives trade-off.

*Introduced:* [5.3](lessons/05-03-asymmetric-information.md)

### Single crossing

The low type's indifference curves in (signal, wage) space are *steeper* than the
high type's, so any two cross exactly once. This — not any productive value of
the signal — is what makes a costly signal credible; kill it and no separating
equilibrium exists.

$$\frac{\partial c(e,\theta)}{\partial e}\ \text{strictly decreasing in }\theta\qquad\Bigl(c(e,\theta)=e/\theta\Rightarrow 1/\theta_L>1/\theta_H\Bigr)$$

*Introduced:* [5.3](lessons/05-03-asymmetric-information.md)

## Formulas and rules

### The consumer's two problems

$$\text{UMP:}\quad \max_x u(x)\ \text{s.t.}\ p\cdot x\le w\qquad\Longrightarrow\qquad x(p,w),\ v(p,w)$$
$$\text{EMP:}\quad \min_x p\cdot x\ \text{s.t.}\ u(x)\ge\bar u\qquad\Longrightarrow\qquad h(p,\bar u),\ e(p,\bar u)$$

Interior first-order conditions (both problems land on the same tangency):

$$\frac{\partial u/\partial x_i}{p_i}=\lambda\ \text{ for every }i \qquad\Longleftrightarrow\qquad \mathrm{MRS}_{ij}=\frac{p_i}{p_j}$$

Equal bang-per-buck across goods, and their common value is the marginal utility
of wealth, $\lambda=\partial v/\partial w$. At a **corner** ($x_i^{\ast}=0$) the
equality softens to $\dfrac{\partial u/\partial x_i}{p_i}\le\lambda$ — check the
interior solution is nonnegative before trusting tangency.

*From* [1.2](lessons/01-02-utility-maximization-marshallian-demand.md) *and* [1.3](lessons/01-03-duality-expenditure-hicksian.md)

### Moving between the four objects

$$e\bigl(p,v(p,w)\bigr)=w,\qquad v\bigl(p,e(p,\bar u)\bigr)=\bar u$$
$$x(p,w)=h\bigl(p,v(p,w)\bigr),\qquad h(p,\bar u)=x\bigl(p,e(p,\bar u)\bigr)$$
$$\text{Shephard:}\quad \frac{\partial e(p,\bar u)}{\partial p_i}=h_i(p,\bar u)\qquad\qquad \text{Roy:}\quad x_i(p,w)=-\frac{\partial v/\partial p_i}{\partial v/\partial w}$$

Both are the envelope theorem: differentiate a value function in a price and only
the *explicit* appearance of that price survives. Practical route: solve the UMP
→ get $v$ → invert in its scalar argument to get $e$ → differentiate to get $h$.

*From* [1.3](lessons/01-03-duality-expenditure-hicksian.md)

### Homogeneity and curvature of every value function

The single most useful sanity-check table in the course — a wrong degree or a
flipped concavity is almost always an algebra slip.

| Object | Homogeneous of degree | Shape in prices | Monotone |
|---|---|---|---|
| $x(p,w)$ | $0$ in $(p,w)$ | — | — |
| $v(p,w)$ | $0$ in $(p,w)$ | **quasi-convex** in $p$ | falling in $p$, rising in $w$ |
| $h(p,\bar u)$ | $0$ in $p$ | — | $\partial h_i/\partial p_i\le0$ |
| $e(p,\bar u)$ | $1$ in $p$ | **concave** in $p$ | rising in $\bar u$, nondecreasing in $p$ |
| $L,K$ (conditional) | $0$ in $(w,r)$ | — | $\partial L/\partial w\le0$ |
| $c(w,r,q)$ | $1$ in $(w,r)$ | **concave** in $(w,r)$ | nondecreasing in $w,r,q$ |
| $\pi(p,w)$ | $1$ in $(p,w)$ | **convex** in $(p,w)$ | rising in $p$, falling in $w_i$ |

Mnemonic: *minimized* value functions ($e$, $c$) are **concave** — you substitute
away from whatever got dear; *maximized* profit is **convex** — you re-optimize
toward whatever got lucrative. Homogeneity of degree 1 forces a zero eigenvalue:
$Hp=0$ by Euler's theorem, which is why $\det S=0$.

*From* [1.2](lessons/01-02-utility-maximization-marshallian-demand.md), [1.3](lessons/01-03-duality-expenditure-hicksian.md), [3.2](lessons/03-02-cost-minimization.md), [3.3](lessons/03-03-profit-maximization-supply.md)

### The standard utility families — closed forms

The lessons work these repeatedly and re-derive only pieces of them. Two goods
throughout; $0<a<1$.

| Utility | Marshallian demand | Indirect utility / expenditure |
|---|---|---|
| Cobb–Douglas $x_1^{a}x_2^{1-a}$ | $x_1=\dfrac{aw}{p_1}$, $x_2=\dfrac{(1-a)w}{p_2}$ | $v=\dfrac{a^a(1-a)^{1-a}\,w}{p_1^{a}p_2^{1-a}}$, $e=\dfrac{p_1^{a}p_2^{1-a}}{a^a(1-a)^{1-a}}\bar u$ |
| $u=x_1x_2$ (the $a=\tfrac12$ case) | $x_i=\dfrac{w}{2p_i}$ | $v=\dfrac{w^2}{4p_1p_2}$, $e=2\sqrt{\bar u\,p_1p_2}$ |
| Quasilinear $\ln x_1+x_2$ | $x_1=\dfrac{p_2}{p_1}$, $x_2=\dfrac{w-p_2}{p_2}$ | corner $x_2=0$, $x_1=w/p_1$ when $w<p_2$ |
| Perfect substitutes $ax_1+bx_2$ | all wealth on the better bang-per-buck; $\mathrm{MRS}=a/b$ constant | $\sigma=\infty$, straight indifference curves |
| Perfect complements $\min\{ax_1,bx_2\}$ | $x_1=\dfrac{bw}{bp_1+ap_2}$, $x_2=\dfrac{aw}{bp_1+ap_2}$ | $\sigma=0$, L-shaped, MRS undefined at the kink |
| CES $[\alpha x_1^{\rho}+(1-\alpha)x_2^{\rho}]^{1/\rho}$ | — | $\sigma=\dfrac{1}{1-\rho}$; $\rho\to0$ gives Cobb–Douglas |

Cobb–Douglas Hicksian demand follows from Shephard:
$h_1=\bar u\Bigl(\dfrac{a\,p_2}{(1-a)p_1}\Bigr)^{1-a}$,
$h_2=\bar u\Bigl(\dfrac{(1-a)p_1}{a\,p_2}\Bigr)^{a}$. Cobb–Douglas spends
**constant shares** $a$ and $1-a$ of wealth regardless of prices — the signature
of $\sigma=1$, and the reason its Marshallian cross-price effect is zero.

*From* [1.1](lessons/01-01-preferences-utility.md), [1.2](lessons/01-02-utility-maximization-marshallian-demand.md), [1.3](lessons/01-03-duality-expenditure-hicksian.md)

### Comparative statics: the Slutsky equation

$$\frac{\partial x_i}{\partial p_j}=\underbrace{\frac{\partial h_i}{\partial p_j}}_{\text{substitution}}-\underbrace{x_j\,\frac{\partial x_i}{\partial w}}_{\text{income}}$$

Evaluate everything at the matched point $w=e(p,\bar u)$, equivalently
$\bar u=v(p,w)$ — mixing base points corrupts the identity. Signing the own-price
case ($i=j$):

| Good type | Substitution term | Income term | Total $\partial x_i/\partial p_i$ |
|---|---|---|---|
| Normal | $\le0$ (always) | $<0$ | $<0$ — law of demand |
| Inferior, not Giffen | $\le0$ | $>0$, but small | $<0$ |
| Giffen | $\le0$ | $>0$ and dominant | $>0$ |

Homothetic preferences (Cobb–Douglas, CES) give $x_i=w\,g_i(p)$, so every good is
normal and **no Giffen good can exist**. Symmetry $s_{ij}=s_{ji}$ plus negative
semidefiniteness are the **integrability conditions**: they are exactly what
distinguishes a demand system that could have come from a maximizing consumer.

*From* [1.4](lessons/01-04-slutsky-comparative-statics.md)

### Risk: pricing a gamble

$$\mathbb{E}[u(x)]\le u\bigl(\mathbb{E}[x]\bigr)\quad(\text{Jensen; equality only for a sure thing})$$
$$u(CE)=\mathbb{E}[u(x)],\qquad \pi=\mathbb{E}[x]-CE,\qquad \boxed{\ \pi\approx\tfrac12\,A(w)\,\sigma^2\ }$$

The premium formula is a **second-order Taylor** result — exact only in the
small-risk limit. For a wide gamble solve $u(CE)=\mathbb{E}[u]$ exactly instead.

| Family | $u(x)$ | $A(x)$ | $R(x)$ |
|---|---|---|---|
| risk neutral | $x$ | $0$ | $0$ |
| CARA | $-e^{-\alpha x}$ | $\alpha$ (constant) | $\alpha x$ |
| CRRA | $\dfrac{x^{1-\gamma}}{1-\gamma}$ ($\gamma\ne1$) | $\gamma/x$ | $\gamma$ (constant) |
| log (CRRA, $\gamma=1$) | $\ln x$ | $1/x$ | $1$ |
| square root (CRRA, $\gamma=\tfrac12$) | $\sqrt{x}$ | $1/(2x)$ | $1/2$ |

"Agent 1 is more risk-averse than agent 2" has four equivalent readings:
$A_1\ge A_2$ everywhere; $u_1$ is a concave transform of $u_2$; $CE_1\le CE_2$ for
every gamble; $\pi_1\ge\pi_2$ for every gamble. **CRRA portfolio share** (small
risk, excess return mean $\mu$, variance $\sigma^2$, safe gross return $R_f$):
$\theta^{\ast}\approx\dfrac{\mu R_f}{\gamma\sigma^2}$ — wealth cancels, so a CRRA
investor holds a constant *fraction* in the risky asset.

*From* [2.1](lessons/02-01-expected-utility.md) *and* [2.2](lessons/02-02-risk-aversion.md)

### The firm: cost minimization and supply

$$\text{CMP:}\quad \min_{K,L}wL+rK\ \text{s.t.}\ f(K,L)\ge q\qquad\Longrightarrow\qquad \mathrm{MRTS}_{LK}=\frac{f_L}{f_K}=\frac{w}{r},\quad \frac{f_L}{w}=\frac{f_K}{r}$$
$$\text{Shephard (firm):}\ \ \frac{\partial c}{\partial w}=L(w,r,q),\quad \frac{\partial c}{\partial r}=K(w,r,q)\qquad\qquad \text{Hotelling:}\ \ \frac{\partial\pi}{\partial p}=q(p,w),\quad -\frac{\partial\pi}{\partial w_i}=x_i(p,w)$$

The multiplier on the output constraint is marginal cost:
$\lambda=w/f_L=r/f_K=\partial c/\partial q$. Profit maximization then sets
$p=MC(q^{\ast})$ with $MC'(q^{\ast})\ge0$.

| Technology | $\mathrm{MRTS}_{LK}$ | Cost function |
|---|---|---|
| Cobb–Douglas $K^{a}L^{b}$, $s=a+b$ | $\dfrac{b}{a}\dfrac{K}{L}$ | $c=s\,q^{1/s}\Bigl(\dfrac{w}{b}\Bigr)^{b/s}\Bigl(\dfrac{r}{a}\Bigr)^{a/s}$ |
| $f=\sqrt{KL}$ (the $a=b=\tfrac12$ case) | $K/L$ | $c=2q\sqrt{wr}$, $L=q\sqrt{r/w}$, $K=q\sqrt{w/r}$ |
| Leontief $\min\{K,L\}$ | undefined (kink) | $c=(w+r)q$, $K=L=q$ |

**Returns to scale set the shape of cost.** If $f$ is homogeneous of degree $t$,
then $c(w,r,q)=q^{1/t}c(w,r,1)$, so $AC\propto q^{(1-t)/t}$ and $MC/AC=1/t$:

$$t>1\ \text{(IRS)}\Rightarrow AC\ \text{falls};\qquad t=1\ \text{(CRS)}\Rightarrow AC\ \text{flat},\ c\ \text{linear in }q;\qquad t<1\ \text{(DRS)}\Rightarrow AC\ \text{rises}$$

**Euler's theorem** (differentiate $f(tK,tL)=t^rf(K,L)$ at $t=1$):
$Kf_K+Lf_L=r\,f$. Under CRS, paying each factor its marginal product exactly
exhausts output.

*From* [3.1](lessons/03-01-technology-production.md), [3.2](lessons/03-02-cost-minimization.md), [3.3](lessons/03-03-profit-maximization-supply.md)

### Cost-curve geometry

- $MC$ pierces $AVC$ and $ATC$ at their **minima** — that is where the cutoffs
  live, which is why "shutdown price" and "$MC$ crosses $AVC$" are the same fact.
- Short-run cost is never below long-run cost; the long-run curve is the **lower
  envelope** of the short-run family.
- $\mathrm{PS}=pq-VC=\pi+F$. Producer surplus and profit differ by fixed cost.
- Long run with free entry: $p^{LR}=\min ATC$, each firm at efficient scale
  $q_f=\arg\min ATC$ (where $MC=ATC$), economic profit zero, long-run supply
  horizontal.

*From* [3.2](lessons/03-02-cost-minimization.md), [3.3](lessons/03-03-profit-maximization-supply.md), [4.1](lessons/04-01-competition-welfare.md)

### Elasticity and marginal revenue

$$\varepsilon=\frac{dq}{dp}\frac{p}{q}<0,\qquad MR=p\left(1+\frac{1}{\varepsilon}\right),\qquad \frac{p-MC}{p}=\frac{1}{|\varepsilon|}$$

For **linear** inverse demand $p=a-bq$: $MR=a-2bq$ — same intercept, **twice the
slope**. A price-setter always operates where demand is **elastic**,
$|\varepsilon|>1$, because $\mathcal{L}\in(0,1)$. Third-degree discrimination
equalizes marginal revenue across segments, $MR_1=\cdots=MR_n=MC$, so the more
inelastic segment pays more.

*From* [4.2](lessons/04-02-monopoly-price-discrimination.md)

### Market structures side by side

One linear market — inverse demand $p=a-bQ$, constant marginal cost $c$, $a>c$ —
solved every way. This is the table Boss problem 4 is built on.

| Structure | Total $Q$ | Price | Profit |
|---|---|---|---|
| Perfect competition | $\dfrac{a-c}{b}$ | $c$ | $0$ |
| Monopoly | $\dfrac{a-c}{2b}$ | $\dfrac{a+c}{2}$ | $\dfrac{(a-c)^2}{4b}$ |
| Cournot, $n$ symmetric firms | $\dfrac{n(a-c)}{b(n+1)}$ | $\dfrac{a+nc}{n+1}$ | $\dfrac{(a-c)^2}{b(n+1)^2}$ each |
| Cournot duopoly ($n=2$) | $\dfrac{2(a-c)}{3b}$ | $\dfrac{a+2c}{3}$ | $\dfrac{(a-c)^2}{9b}$ each |
| Stackelberg (leader/follower) | $\dfrac{3(a-c)}{4b}$ | $\dfrac{a+3c}{4}$ | leader $\dfrac{(a-c)^2}{8b}$, follower $\dfrac{(a-c)^2}{16b}$ |
| Bertrand (homogeneous, equal $c$) | $\dfrac{a-c}{b}$ | $c$ | $0$ |
| First-degree discrimination | $\dfrac{a-c}{b}$ | personalized | all the surplus; $\mathrm{CS}=0$ |

Cournot best response: $BR_i(q_j)=\dfrac{a-c}{2b}-\dfrac{q_j}{2}$ — the monopoly
output shaded by half the rival's. Output ranks monopoly $<$ Cournot $<$
competition, price the reverse; $n\to\infty$ drives Cournot to competition. The
Stackelberg leader produces the *monopoly* quantity and beats its Cournot profit;
its commitment pushes the market **toward** competition.

*From* [4.1](lessons/04-01-competition-welfare.md), [4.2](lessons/04-02-monopoly-price-discrimination.md), [4.3](lessons/04-03-oligopoly.md)

### Surplus and deadweight-loss shortcuts

$$\mathrm{TS}(q)=\int_0^{q}\bigl[P(s)-S(s)\bigr]ds,\qquad \mathrm{TS}'(q)=P(q)-S(q)$$

With linear curves everything is a triangle: **base** is the quantity distortion
$|q^{\ast}-q|$, **height** is the price wedge (the tax $t$, or $p_m-MC$, or
$MEC$) at the distorted quantity, and $DWL=\tfrac12\times$ base $\times$ height.
Tax revenue and the monopolist's markup are **transfers**, not losses; only the
untraded units count.

*From* [4.1](lessons/04-01-competition-welfare.md), [4.2](lessons/04-02-monopoly-price-discrimination.md), [5.2](lessons/05-02-externalities-public-goods.md)

### The welfare theorems and their hypotheses

**1WT.** *Local nonsatiation* + price-taking $\Rightarrow$ every Walrasian
equilibrium allocation is Pareto efficient. No convexity, no differentiability.

**2WT.** Add *continuity* and *convexity* $\Rightarrow$ any Pareto-efficient
allocation can be supported as a Walrasian equilibrium after a lump-sum
redistribution of endowments. Convexity is what makes a separating price exist.

Practical recipe in an Edgeworth box: (i) set $\mathrm{MRS}^A=\mathrm{MRS}^B$ and
substitute feasibility $x^B=\bar\omega-x^A$ to get the contract curve; (ii)
normalize $p_2=1$, value each endowment at $w^i=p\cdot\omega^i$, write each
Marshallian demand, clear **one** market (the other clears by Walras' law); (iii)
check the equilibrium point sits on the contract curve. Only the price *ratio* is
determined — always normalize before solving.

*From* [5.1](lessons/05-01-general-equilibrium-welfare-theorems.md)

### Market failure and its repairs

$$\text{Market:}\ MSB(q^m)=MPC(q^m)\qquad\qquad \text{Efficient:}\ MSB(q^{\ast})=MSC(q^{\ast})$$
$$\text{Pigouvian tax:}\ \ t=MEC(q^{\ast})\qquad\qquad \text{Samuelson condition:}\ \ \sum_i MRS_i(G)=MRT(G)$$

Negative externality $\Rightarrow MSC>MPC\Rightarrow q^m>q^{\ast}$
(**over**production); positive externality flips every sign to
under-production. **Coase:** with clear property rights and costless bargaining
the efficient outcome results *regardless of who holds the right* — the
assignment moves only the surplus split. Public goods: sum willingness to pay
**vertically**; voluntary provision has each contributor stop at their own
$MRS_i=MRT$, hence free-riding and under-provision.

*From* [5.2](lessons/05-02-externalities-public-goods.md)

### Hidden information

$$\text{Lemons fixed point:}\qquad p=\beta\,\mathbb{E}[\,q\mid q\le p\,]$$

With $q$ uniform on $[0,\bar q]$ this is $p=\tfrac{\beta}{2}p$, so any $\beta<2$
unravels the market to $p=0$ even though every trade was efficient; the loss is
the whole gains-from-trade $(\beta-1)\mathbb{E}[q]$. Two-type version: a pooling
market survives only while the pooled price covers the *good* seller's
reservation value.

**Spence separating equilibrium** (types $\theta_H>\theta_L$, cost $e/\theta$,
wage = believed productivity):

$$\theta_L(\theta_H-\theta_L)\ \le\ e^{\ast}\ \le\ \theta_H(\theta_H-\theta_L)$$

Lower bound: the low type won't mimic. Upper bound: the high type still bothers.
The interval has width $(\theta_H-\theta_L)^2>0$ exactly because of single
crossing. The least-cost equilibrium takes the lower bound, and its cost
$\theta_L(1-\theta_L/\theta_H)$ is **pure deadweight** borne by the high type.

*From* [5.3](lessons/05-03-asymmetric-information.md)

## Assumed, not taught here

This is a Tier 0 refresher and it leans hard on `calc-refresher`. Everything
below is *used* in a lesson without being derived there.

| Fact | Where it's taught |
|---|---|
| Constrained optimization, $\nabla f=\lambda\nabla g$, and the Lagrangian recipe | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| The multiplier as a **shadow price**, $\lambda=df^{\ast}/dc$ — the envelope theorem in its scalar form, used here for Roy, Shephard, and Hotelling | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) (its P3 is the consumer problem in miniature) |
| Inequality constraints and complementary slackness (the corner solutions of 1.2 and 3.2) | [convex-optimization 3.3](../convex-optimization/lessons/03-03-kkt-conditions.md) |
| Level sets, gradients, and $\nabla u\perp$ indifference curve | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Implicit differentiation — the source of $\mathrm{MRS}=-dx_2/dx_1$ and $\mathrm{MRTS}=-dK/dL$ | [calc-refresher 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md) |
| First- and second-order conditions, concavity, and the second-derivative test | [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| Second-order Taylor expansion (the $\pi\approx\tfrac12A\sigma^2$ derivation, and the small-risk portfolio share) | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| The integral as accumulation — every surplus and deadweight-loss area | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Equality of mixed partials (Young/Clairaut), which gives Slutsky symmetry | stated in [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md); used here without proof |
| Negative semidefinite matrices, eigenvalues, and quadratic forms — the Slutsky matrix's structure | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md), [3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| $2\times2$ determinants and traces (signing $S$ and price-Hessians) | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Expectation and variance as operators | [prob-stat-refresher 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| Conditional expectation $\mathbb{E}[q\mid q\le p]$, and the uniform distribution | [prob-stat-refresher 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md), [2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Jensen's inequality and the convexity machinery behind it | [convex-optimization 1.3](../convex-optimization/lessons/01-03-convex-functions-epigraph.md) |
| Quasi-concavity as a general convexity notion (asserted in 1.1, used everywhere) | [convex-optimization 1.4](../convex-optimization/lessons/01-04-recognizing-convexity.md) |
| The separating-hyperplane theorem — the engine of the Second Welfare Theorem | [convex-optimization 1.1](../convex-optimization/lessons/01-01-convex-sets-separating-hyperplane.md) |
| Nash equilibrium and best responses (introduced heuristically in 4.3) | [game-theory-refresher 1.2](../game-theory-refresher/lessons/01-02-nash-equilibrium.md), [1.4](../game-theory-refresher/lessons/01-04-cournot-bertrand-applications.md) |
| Backward induction and subgame perfection (the Stackelberg solve) | [game-theory-refresher 2.1](../game-theory-refresher/lessons/02-01-extensive-form-backward-induction.md), [2.2](../game-theory-refresher/lessons/02-02-subgame-perfection-commitment.md) |
| Which signaling equilibrium survives (Bayesian updating, perfect Bayesian equilibrium) | [game-theory-refresher 3.3](../game-theory-refresher/lessons/03-03-signaling-pbe.md) |

Note: **Euler's theorem for homogeneous functions** is *not* assumed — it is
proved in [3.1](lessons/03-01-technology-production.md) P3 and reused throughout.

## Pitfalls

### Ordinal versus cardinal

- Utility numbers only *rank*: $u=10$ against $u=5$ never means "twice as good," and differences and ratios are meaningless. *([1.1](lessons/01-01-preferences-utility.md))*
- Diminishing marginal utility does **not** cause convex indifference curves — marginal utility is cardinal, the MRS and convexity are ordinal. You can have diminishing MRS with rising marginal utility. *([1.1](lessons/01-01-preferences-utility.md))*
- Under uncertainty the freedom shrinks: only a **positive affine** $au+b$ preserves a vNM index. Squaring or square-rooting it reverses lottery rankings. *([2.1](lessons/02-01-expected-utility.md))*
- For the same reason $u''$ measures nothing; only $A=-u''/u'$ and $R=xA$ are invariant. *([2.2](lessons/02-02-risk-aversion.md))*
- Transitivity and completeness are idealizations, not observations — framing and menu effects break them, and that is where grad micro starts. *([1.1](lessons/01-01-preferences-utility.md))*

### Optimization and corners

- Tangency $\mathrm{MRS}_{ij}=p_i/p_j$ is the **interior** condition. At a corner it becomes an inequality; imposing it blindly returns a negative quantity. Always check nonnegativity. *([1.2](lessons/01-02-utility-maximization-marshallian-demand.md))*
- Likewise $\mathrm{MRTS}=w/r$ needs a smooth, strictly convex isoquant. Leontief and any axis solution violate it — solve the cost problem directly there. *([3.2](lessons/03-02-cost-minimization.md))*
- $\lambda$ is a **rate with units** (utils per dollar for the consumer, dollars per unit of output for the firm), not bookkeeping. Its size says how badly the constraint binds. *([1.2](lessons/01-02-utility-maximization-marshallian-demand.md), [3.2](lessons/03-02-cost-minimization.md))*

### Duality and value functions

- $h$ and $x$ are the *same bundle* at a matched $(w,\bar u)$; they differ only in their **response** to a price change. That difference is the income effect. *([1.3](lessons/01-03-duality-expenditure-hicksian.md))*
- $e$ is **concave** in prices, not convex — substitution bends the minimum bill downward. Same for the firm's $c$ in $(w,r)$; profit $\pi$ is the **convex** twin. *([1.3](lessons/01-03-duality-expenditure-hicksian.md), [3.3](lessons/03-03-profit-maximization-supply.md))*
- $v$ is **quasi**-convex in $p$ — neither convex nor concave — and it falls in $p$, rises in $w$. Any "welfare gain from higher prices" is a sign error. *([1.2](lessons/01-02-utility-maximization-marshallian-demand.md))*
- Roy's identity's minus sign is not optional: drop it and demand comes out negative. *([1.3](lessons/01-03-duality-expenditure-hicksian.md))*
- The cost function knows input prices and $q$ — never the **output** price. That is what "conditional" means. *([3.2](lessons/03-02-cost-minimization.md))*
- Homogeneity of degree 1 for $c$ is in $(w,r)$, not in $q$: doubling $q$ multiplies cost by $2^{1/t}$, which equals $2$ only under CRS. *([3.2](lessons/03-02-cost-minimization.md))*

### Comparative statics

- Only **own**-price substitution is signed ($s_{ii}\le0$, forced by concavity of $e$). Cross terms are sign-free. *([1.4](lessons/01-04-slutsky-comparative-statics.md))*
- Slutsky symmetry is about **Hicksian** cross-effects. Marshallian cross-partials are generally *not* symmetric — the income terms differ. *([1.4](lessons/01-04-slutsky-comparative-statics.md))*
- Inferior does not imply Giffen: the income effect must actually *dominate*, which needs a large budget share. *([1.4](lessons/01-04-slutsky-comparative-statics.md))*
- Evaluate both sides at the same base point, $w=e(p,\bar u)$. Mixing base points corrupts the identity. *([1.4](lessons/01-04-slutsky-comparative-statics.md))*

### Risk

- Ranking by expected **dollars** is the theory only for linear $u$ (risk neutrality). Keep $u(\mathbb{E}[x])$ and $\mathbb{E}[u(x)]$ visibly distinct — the wedge between them *is* the risk premium. *([2.1](lessons/02-01-expected-utility.md), [2.2](lessons/02-02-risk-aversion.md))*
- CARA and CRRA are opposite bets: CARA fixes the *dollar* stake you'll take, CRRA the *percentage* stake. CRRA has absolute aversion **falling** with wealth. *([2.2](lessons/02-02-risk-aversion.md))*
- $\pi\approx\tfrac12A\sigma^2$ is a small-risk approximation; for a wide gamble solve $u(CE)=\mathbb{E}[u]$ exactly. *([2.2](lessons/02-02-risk-aversion.md))*
- $u(x_s)$ is a bookkeeping index, not felt pleasure — no interpersonal or hedonic meaning. *([2.1](lessons/02-01-expected-utility.md))*

### Technology and cost

- Diminishing marginal product and decreasing returns to scale are **independent**: $\sqrt{KL}$ has both marginal products falling yet constant returns. One varies a single input; the other scales all of them. *([3.1](lessons/03-01-technology-production.md))*
- A low MRTS says the isoquant is *flat there*; substitutability is its **curvature** $\sigma$. Two technologies can share an MRTS and sit at opposite ends of the $\sigma$ dial. *([3.1](lessons/03-01-technology-production.md))*
- In $K^{\alpha}L^{1-\alpha}$, the exponent $\alpha$ is a cost **share**, not a productivity level — that is $A$. *([3.1](lessons/03-01-technology-production.md))*
- Short-run cost is never below long-run cost. If you "beat" the long-run curve you mislabeled a fixed input as free. *([3.2](lessons/03-02-cost-minimization.md))*

### Supply, shutdown, and market power

- Supply is the **rising branch of $MC$ above the cutoff**, not the whole $MC$ curve. *([3.3](lessons/03-03-profit-maximization-supply.md))*
- Shutdown is not the same as zero profit: short run the firm operates at a loss while $p\ge\min AVC$ (fixed cost is sunk); zero profit is the *long-run* margin at $\min ATC$. *([3.3](lessons/03-03-profit-maximization-supply.md))*
- Entry drives economic **profit** to zero by driving price to minimum average total cost — not to zero. *([4.1](lessons/04-01-competition-welfare.md))*
- A monopolist does not "charge the highest price possible": it sets $MR=MC$, which always lands on the **elastic** part of demand. *([4.2](lessons/04-02-monopoly-price-discrimination.md))*
- Do not set $p=MC$ out of habit — that is the *competitive* quantity. The monopolist equates $MC$ to **marginal revenue**, then reads price off demand. *([4.2](lessons/04-02-monopoly-price-discrimination.md))*
- Price discrimination is about surplus *division*, not automatic surplus *destruction*: first-degree is efficient, third-degree is ambiguous. *([4.2](lessons/04-02-monopoly-price-discrimination.md))*
- Nash equilibrium is mutual best response, **not** equal or jointly maximized profit. The cartel point is off both reaction curves, which is exactly why it is unstable. *([4.3](lessons/04-03-oligopoly.md))*
- Firm count is not the whole story: two Bertrand price-setters with equal costs already deliver $p=c$. Conduct beats concentration. *([4.3](lessons/04-03-oligopoly.md))*
- The Stackelberg leader wins by **expanding past Cournot**, not by restraining output to hold the price up. Commitment, not restraint. *([4.3](lessons/04-03-oligopoly.md))*

### Welfare accounting

- $\mathrm{PS}$ is variable profit: $\mathrm{PS}=\pi+F$. It equals profit only when fixed cost is zero. *([4.1](lessons/04-01-competition-welfare.md))*
- $\mathrm{CS}$ is an exact welfare measure only under **quasilinearity**. With income effects the honest measures are compensating and equivalent variation from $e(p,\bar u)$, and the gap is precisely the Slutsky income term. *([4.1](lessons/04-01-competition-welfare.md), [1.4](lessons/01-04-slutsky-comparative-statics.md))*
- Deadweight loss is not cash that vanished — it is *trades that never happened*. Tax revenue and monopoly markup are transfers. *([4.1](lessons/04-01-competition-welfare.md))*
- Pareto efficiency says nothing about fairness: "one person gets everything" can be efficient. Distribution enters only through the Second Welfare Theorem's transfers. *([5.1](lessons/05-01-general-equilibrium-welfare-theorems.md))*
- Keep the two ingredient lists straight: 1WT needs only local nonsatiation and price-taking; **convexity** is what the 2WT needs (for a supporting price to exist). *([5.1](lessons/05-01-general-equilibrium-welfare-theorems.md))*
- Only the price **ratio** is pinned down — demand is homogeneous of degree 0. Normalize before solving. *([5.1](lessons/05-01-general-equilibrium-welfare-theorems.md))*

### Market failure and information

- A negative externality means the good is **over**-produced, not that $q^{\ast}=0$. Efficiency trims the tail; it rarely bans the activity. *([5.2](lessons/05-02-externalities-public-goods.md))*
- Set the Pigouvian tax at $MEC(q^{\ast})$ — the *efficient* quantity, not the market one. (With constant $MEC$ the distinction vanishes.) *([5.2](lessons/05-02-externalities-public-goods.md))*
- Coase needs *costless* bargaining and *clear* rights. With many affected parties those hypotheses fail; it is a benchmark, not a substitute for Pigou. *([5.2](lessons/05-02-externalities-public-goods.md))*
- Public goods sum **vertically** (same $G$ for everyone, add willingness to pay). Horizontal summation answers the private-good question. *([5.2](lessons/05-02-externalities-public-goods.md))*
- Adverse selection needs *hidden variation*, not bad products — raise quality uniformly and the same unravelling recurs one tier up. *([5.3](lessons/05-03-asymmetric-information.md))*
- Hidden **type** before contracting (adverse selection, fought by signaling and screening) is not hidden **action** after contracting (moral hazard, fought by incentive pay and deductibles). *([5.3](lessons/05-03-asymmetric-information.md))*
- A signal need not be productive; its sorting power is entirely the cost gap. And information transmitted is not value created — the separating equilibrium is informationally better yet resource-wasteful. *([5.3](lessons/05-03-asymmetric-information.md))*

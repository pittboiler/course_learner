# Grad Microeconomics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

First-year micro is one method applied five times: **write an optimization, check
its curvature, differentiate its value function, then ask what happens when the
information the model assumed goes missing.** This card carries the graduate
machinery — the choice axioms and their representation theorems, the four value
functions and the identities linking them, the welfare theorems with the exact
hypotheses each one needs, and the mechanism-design results with what each one
assumes. For the undergraduate treatment of the same objects — closed-form
demands, cost-curve geometry, the market-structure table, surplus pictures — open
[`micro-refresher`'s card](../micro-refresher/reference.md) instead of
re-deriving them here.

## Notation

Reused symbols are flagged; the collisions are where mistakes actually happen.

| Symbol | Means | First used |
|---|---|---|
| $\lambda x+(1-\lambda)y$ | convex combination — the segment from $y$ ($\lambda=0$) to $x$ ($\lambda=1$) | [1.1](lessons/01-01-convexity-concavity-quasiconcavity.md) |
| $H$, $\bar H$ | Hessian of second partials; **bordered** Hessian (gradient of the constraint wrapped around it) | [1.1](lessons/01-01-convexity-concavity-quasiconcavity.md) |
| $U_a=\{x:f(x)\ge a\}$ | upper contour ("at least this good") set — convex iff $f$ is quasiconcave | [1.1](lessons/01-01-convexity-concavity-quasiconcavity.md) |
| $\mathcal{L}$ | the Lagrangian — objective with each constraint priced by its multiplier | [1.2](lessons/01-02-unconstrained-equality-constrained-optimization.md) |
| $\lambda,\ \mu$ | multipliers = **shadow prices**: value gained per unit of constraint relaxed | [1.2](lessons/01-02-unconstrained-equality-constrained-optimization.md) |
| $V(\theta)$, $x^{*}(\theta)$ | **value function** (best attainable value at parameter $\theta$) and the maximizer attaining it | [1.4](lessons/01-04-envelope-theorem-duality.md) |
| $\Gamma:\Theta\rightrightarrows X$ | constraint **correspondence** — the feasible set as a set-valued map of the parameter | [1.5](lessons/01-05-monotone-comparative-statics-dynamic-programming.md) |
| $\beta\in(0,1)$ | discount factor; also the Bellman operator's contraction modulus | [1.5](lessons/01-05-monotone-comparative-statics-dynamic-programming.md) |
| $\succeq,\ \succ,\ \sim$ | "at least as good as", "strictly better", "indifferent" — a ranking, no numbers | [2.1](lessons/02-01-preferences-utility-representation.md) |
| $\mathrm{MRS}_{12}$ | units of good 2 traded for one more unit of good 1 at fixed utility | [2.1](lessons/02-01-preferences-utility-representation.md) |
| $B(p,m)$, $x(p,m)$ | budget set at prices $p\gg0$ and income $m$; the Marshallian demand it produces | [2.2](lessons/02-02-utility-maximization-marshallian-demand.md) |
| $V(p,m)$ | indirect utility — **same letter as the generic value function**, and that is the point | [2.2](lessons/02-02-utility-maximization-marshallian-demand.md) |
| $\bar u$ | a target utility level in the dual problem; in [5.4](lessons/05-04-moral-hazard-principal-agent.md) it is instead the agent's **reservation utility** | [2.3](lessons/02-03-expenditure-minimization-duality.md) |
| $e(p,\bar u)$, $h(p,\bar u)$ | expenditure function and Hicksian (compensated) demand | [2.3](lessons/02-03-expenditure-minimization-duality.md) |
| $S=[s_{ij}]$ | Slutsky / substitution matrix, $s_{ij}=\partial h_i/\partial p_j$; **$S$ is a coalition in [4.5](lessons/04-05-core-and-equivalence.md)** | [2.4](lessons/02-04-slutsky-equation-comparative-statics.md) |
| $A(x)$, $R(x)$ | Arrow–Pratt absolute and relative risk aversion | [2.5](lessons/02-05-choice-under-uncertainty.md) |
| $\mathrm{CE}$, $\pi$ | certainty equivalent, and the **risk premium** $\pi$ — which is *profit* from [3.3](lessons/03-03-profit-maximization-supply.md) onward | [2.5](lessons/02-05-choice-under-uncertainty.md) |
| $R^D$, $P^D$, $R$ | directly revealed preferred, strictly so, and the transitive closure of $R^D$ | [2.6](lessons/02-06-revealed-preference.md) |
| $Y\subseteq\mathbb{R}^n$, $y$ | production set and a **netput** plan: inputs negative, outputs positive | [3.1](lessons/03-01-production-sets-technology.md) |
| $\mathrm{MRTS}_{12}$, $\sigma$ | marginal rate of technical substitution $MP_1/MP_2$; elasticity of substitution | [3.1](lessons/03-01-production-sets-technology.md) |
| $w$, $c(w,q)$, $x(w,q)$ | input prices, the cost function, and conditional factor demand | [3.2](lessons/03-02-cost-minimization.md) |
| $\pi(p,w)$ | the profit function — maximized profit at output price $p$ and input prices $w$ | [3.3](lessons/03-03-profit-maximization-supply.md) |
| $\sum_j Y_j$ | **Minkowski sum** of production sets — the representative firm's technology | [3.4](lessons/03-04-aggregation-and-the-firm.md) |
| $CS$, $PS$, $DWL$ | consumer surplus, producer surplus, deadweight loss | [4.1](lessons/04-01-partial-equilibrium-surplus.md) |
| $\omega_i$, $\bar\omega$ | consumer $i$'s endowment and the economy's total endowment $\sum_i\omega_i$ | [4.2](lessons/04-02-edgeworth-box-walrasian-equilibrium.md) |
| $z(p)$, $\Delta$ | aggregate excess demand (demand minus endowment); the price simplex | [4.3](lessons/04-03-existence-walrasian-equilibrium.md) |
| $\mathcal{C}$, $\mathcal{C}_r$ | the core; the core of the $r$-fold replica economy | [4.5](lessons/04-05-core-and-equivalence.md) |
| $\theta\in\{\theta_L,\theta_H\}$ | a private **type** (ability, quality, willingness to pay) | [5.2](lessons/05-02-signaling.md) |
| $\mu(e)=\Pr(\theta_H\mid e)$ | the uninformed side's belief after seeing signal $e$ | [5.2](lessons/05-02-signaling.md) |
| $(q_i,t_i)$ | a menu item: quantity/quality $q$ and the transfer $t$ paid for it | [5.3](lessons/05-03-screening.md) |
| IC, IR | incentive compatibility (prefer your own deal) and individual rationality (prefer the deal to leaving) | [5.3](lessons/05-03-screening.md) |
| $p(a)$, $c(a)$ | probability of the good outcome under effort $a$, and effort's utility cost | [5.4](lessons/05-04-moral-hazard-principal-agent.md) |
| $(M,g)$, $f(\theta)$ | a mechanism (message space + outcome rule) and the social choice function it implements | [5.5](lessons/05-05-mechanism-design-markets.md) |
| $\varepsilon=\frac{dq}{dp}\frac{p}{q}$ | price elasticity of demand — always negative, so markups use $\lvert\varepsilon\rvert$ | [6.1](lessons/06-01-monopoly-price-discrimination.md) |
| $R_i(q_j)$ | firm $i$'s best-response (reaction) function to the rival's output | [6.2](lessons/06-02-oligopoly.md) |
| PMC, MED, SMC | private marginal cost, marginal external damage, social marginal cost $=$ PMC $+$ MED | [6.3](lessons/06-03-externalities-coase-theorem.md) |
| $G$, $\tau_i$, MRT | public-good quantity, consumer $i$'s personalized Lindahl price, marginal rate of transformation | [6.4](lessons/06-04-public-goods.md) |
| $F$, $\succeq_S$ | a social welfare function and the social ordering it outputs | [6.5](lessons/06-05-social-choice-welfare.md) |

## Definitions

### Convex set

A region with no dents: the straight segment between any two members stays inside.

$$x,y\in C,\ \lambda\in[0,1]\ \Longrightarrow\ \lambda x+(1-\lambda)y\in C$$

*Introduced:* [1.1](lessons/01-01-convexity-concavity-quasiconcavity.md)

### Concave function

A dome: chords sag below the graph, so the function of an average beats the
average of the function. ($f$ concave $\iff -f$ convex; strict if the inequality
is strict for $x\neq y$, $\lambda\in(0,1)$.)

$$f\big(\lambda x+(1-\lambda)y\big)\ \ge\ \lambda f(x)+(1-\lambda)f(y)$$

*Introduced:* [1.1](lessons/01-01-convexity-concavity-quasiconcavity.md)

### Quasiconcavity

Only the shape of the level sets, not the height: every "at least this good"
region is a single convex mesa. Survives **any** strictly increasing relabeling
of the output, which concavity does not — which is why it, and not concavity, is
what preferences deliver.

$$U_a=\{x:f(x)\ge a\}\ \text{convex for every }a \iff f\big(\lambda x+(1-\lambda)y\big)\ge\min\{f(x),f(y)\}$$

Concave $\Rightarrow$ quasiconcave; the converse fails ($xy$ on the positive
orthant, $x^3$ on $\mathbb{R}$).

*Introduced:* [1.1](lessons/01-01-convexity-concavity-quasiconcavity.md)

### Lagrange multiplier

The exchange rate between the constraint and the objective: how much optimal
value one more unit of the constrained resource buys. Bookkeeping in the algebra,
a **price** in the economics.

$$\mathcal{L}(x,\lambda)=f(x)-\lambda\big(g(x)-b\big),\qquad \nabla f(x^{*})=\lambda\,\nabla g(x^{*}),\qquad \frac{dV}{db}=\lambda^{*}$$

*Introduced:* [1.2](lessons/01-02-unconstrained-equality-constrained-optimization.md)

### Complementary slackness

You never pay for a constraint that isn't tight: each constraint either binds
with a positive shadow price, or is slack with a zero one — never both, never
neither.

$$\lambda_j^{*}\big(b_j-g_j(x^{*})\big)=0,\qquad \lambda_j^{*}\ge 0$$

*Introduced:* [1.3](lessons/01-03-inequality-constraints-kuhn-tucker.md)

### Constraint qualification

A regularity condition on the *constraints* (not the objective) without which a
genuine maximum can fail to be a KKT point at all. **Slater:** some strictly
interior feasible point exists ($g_j(\tilde x)<b_j$ for all $j$). **LICQ:** the
active constraints' gradients are linearly independent at $x^{*}$. The
equality-only version is just $\nabla g(x^{*})\neq 0$.

*Introduced:* [1.3](lessons/01-03-inequality-constraints-kuhn-tucker.md)

### Value function

The best you can do given the environment: maximize (or minimize) out the
choice, and what's left is a function of the parameters alone. Indirect utility,
expenditure, cost, and profit are all value functions — which is why one theorem
governs all four.

$$V(\theta)=\max_{x}f(x,\theta),\qquad x^{*}(\theta)=\arg\max_{x}f(x,\theta)$$

*Introduced:* [1.4](lessons/01-04-envelope-theorem-duality.md)

### Envelope theorem

At an optimum the ground is already flat, so re-optimizing after a small
parameter nudge buys nothing to first order: differentiate as if the choice were
frozen. Everything called a "lemma" in Modules 2–3 is this line in costume.

$$\frac{dV}{d\theta}=\frac{\partial f}{\partial\theta}\bigg|_{x=x^{*}(\theta)}, \qquad\text{constrained: }\ \frac{dV}{d\theta}=\frac{\partial\mathcal{L}}{\partial\theta}\bigg|_{x^{*},\lambda^{*}}$$

*Introduced:* [1.4](lessons/01-04-envelope-theorem-duality.md)

### Increasing differences (supermodularity)

Raising the parameter makes raising your choice pay more — complementarity, with
no derivatives required.

$$f(x'',\theta'')-f(x',\theta'')\ \ge\ f(x'',\theta')-f(x',\theta')\quad (x''\ge x',\ \theta''\ge\theta') \iff \frac{\partial^2 f}{\partial x\,\partial\theta}\ge 0\ (C^2)$$

*Introduced:* [1.5](lessons/01-05-monotone-comparative-statics-dynamic-programming.md)

### Topkis's monotonicity theorem

Complementarity alone forces the optimal choice to move *with* the parameter —
no concavity, no smoothness, no interior optimum needed. The ordinal, robust
alternative to signing $dx^{*}/d\theta$ through second-order conditions.

$$X\ \text{a lattice},\ f\ \text{has increasing differences}\ \Longrightarrow\ x^{*}(\theta)=\arg\max_{x\in X}f(x,\theta)\ \text{is nondecreasing in }\theta$$

*Introduced:* [1.5](lessons/01-05-monotone-comparative-statics-dynamic-programming.md)

### Maximum theorem (Berge)

If the objective is continuous and the feasible set moves continuously and stays
compact, the value moves continuously and the optimal choice cannot jump out of
nowhere. This is what makes demand continuous, and therefore what lets a fixed
point exist in [4.3](lessons/04-03-existence-walrasian-equilibrium.md).

$$f\ \text{continuous},\ \Gamma\ \text{continuous and compact-valued}\ \Longrightarrow\ V(\theta)=\max_{x\in\Gamma(\theta)}f(x,\theta)\ \text{continuous},\ x^{*}(\theta)\ \text{u.h.c.}$$

*Introduced:* [1.5](lessons/01-05-monotone-comparative-statics-dynamic-programming.md)

### Bellman equation

Bundle "everything from tomorrow on" into one number and an infinite-horizon
problem collapses to a single choice today. Because $\beta<1$ the update is a
contraction, so the value function exists, is unique, and can be iterated to.

$$V(s)=\max_{a\in\Gamma(s)}\Big\{r(s,a)+\beta\,V\big(g(s,a)\big)\Big\},\qquad \lVert V_n-V\rVert\le\beta^{\,n}\lVert V_0-V\rVert$$

*Introduced:* [1.5](lessons/01-05-monotone-comparative-statics-dynamic-programming.md)

### Rational preferences

The primitive of all choice theory: you can rank any two bundles, and your
rankings never cycle. Utility is a bookkeeping device layered on top, not the
object itself.

$$\textbf{Completeness: }\ x\succeq y\ \text{or}\ y\succeq x;\qquad \textbf{Transitivity: }\ x\succeq y,\ y\succeq z\ \Rightarrow\ x\succeq z$$

*Introduced:* [2.1](lessons/02-01-preferences-utility-representation.md)

### Continuity of preferences

Preferences don't jump: a limit of bundles you weakly preferred is still weakly
preferred. A **closedness** condition on contour sets — it neither requires nor
implies differentiable indifference curves.

$$\{y:y\succeq x\}\ \text{and}\ \{y:y\preceq x\}\ \text{are closed for every }x$$

*Introduced:* [2.1](lessons/02-01-preferences-utility-representation.md)

### Local nonsatiation

However good your bundle, something strictly better sits arbitrarily close — no
thick bands of indifference, no local bliss point. Weaker than monotonicity, and
it is the *only* thing Walras' law and the First Welfare Theorem actually need.

$$\forall x,\ \forall\varepsilon>0\ \ \exists y:\ \lVert y-x\rVert<\varepsilon\ \text{and}\ y\succ x$$

*Introduced:* [2.1](lessons/02-01-preferences-utility-representation.md)

### Convex preferences

A taste for diversification: averages are at least as good as the extremes they
average. Exactly quasiconcavity of any utility representing them.

$$\{y:y\succeq x\}\ \text{is convex} \iff u\ \text{quasiconcave} \iff \text{diminishing }\mathrm{MRS}$$

*Introduced:* [2.1](lessons/02-01-preferences-utility-representation.md)

### Debreu representation theorem

Coherent, non-jumpy preferences can always be recorded by an honest continuous
number. Continuity is load-bearing, not decoration: lexicographic preferences are
perfectly rational and admit **no** utility function.

$$\succeq\ \text{rational and continuous on }X\subseteq\mathbb{R}^n\ \Longrightarrow\ \exists\ u\ \text{continuous with}\ x\succeq y\iff u(x)\ge u(y)$$

*Introduced:* [2.1](lessons/02-01-preferences-utility-representation.md)

### Ordinality

Utility is unique only up to strictly increasing relabeling, so any property a
monotone transform can destroy — concavity, ratios, differences of utils — is
**not** a property of preferences. What survives is the indifference map and its
slopes.

$$f\ \text{strictly increasing}\ \Longrightarrow\ v=f\circ u\ \text{represents the same}\ \succeq$$

*Introduced:* [2.1](lessons/02-01-preferences-utility-representation.md)

### Utility maximization problem (UMP)

Buy the best bundle you can afford. Existence comes from compactness of the
budget set plus continuity (Weierstrass); uniqueness from *strict*
quasiconcavity; the budget binding from local nonsatiation.

$$\max_{x\in\mathbb{R}^n_+}u(x)\ \ \text{s.t.}\ \ p\cdot x\le m\quad\Longrightarrow\quad x(p,m),\ \ V(p,m)$$

Closed forms for the standard families live on the undergraduate card:
[micro-refresher](../micro-refresher/reference.md#the-standard-utility-families-closed-forms).

*Introduced:* [2.2](lessons/02-02-utility-maximization-marshallian-demand.md)

### Walras' law

Local nonsatiation means you never leave money unspent, so every budget binds —
and summed across consumers, the value of aggregate excess demand is identically
zero. Consequence: with $L$ goods, only $L-1$ markets are independent.

$$p\cdot x(p,m)=m\quad\text{(individual)},\qquad p\cdot z(p)=0\ \ \forall p\quad\text{(aggregate)}$$

*Introduced:* [2.2](lessons/02-02-utility-maximization-marshallian-demand.md), used hard in [4.3](lessons/04-03-existence-walrasian-equilibrium.md)

### Expenditure minimization problem (EMP)

The UMP read backwards: fix the happiness, minimize the bill. Its solution is
**Hicksian (compensated) demand** — the price response with utility, not income,
held fixed — and its value is the expenditure function.

$$e(p,\bar u)=\min_{x\ge0}p\cdot x\ \ \text{s.t.}\ \ u(x)\ge\bar u,\qquad h(p,\bar u)=\arg\min,\qquad e=p\cdot h$$

*Introduced:* [2.3](lessons/02-03-expenditure-minimization-duality.md)

### Slutsky matrix

The compensated price responses collected into one matrix. Because it is the
Hessian of the concave $e$, it is symmetric and negative semidefinite — and
because $h$ is homogeneous of degree zero, it is singular with $Sp=0$.

$$S=D_p h=\Big[\tfrac{\partial h_i}{\partial p_j}\Big]=\Big[\tfrac{\partial^2 e}{\partial p_i\partial p_j}\Big] = \Big[\tfrac{\partial x_i}{\partial p_j}+x_j\tfrac{\partial x_i}{\partial m}\Big]$$

*Introduced:* [2.4](lessons/02-04-slutsky-equation-comparative-statics.md)

### Integrability

The converse of Slutsky: symmetry and negative semidefiniteness are not just
consequences of rationality, they are its **entire** empirical content. Pass them
and preferences can be reconstructed; fail them and no utility function could
have produced the data.

$$p\cdot x=m,\ x\ \text{homog. degree }0,\ S\ \text{symmetric and NSD}\ \Longrightarrow\ \exists\ \text{quasiconcave}\ \succeq\ \text{generating}\ x$$

*Introduced:* [2.4](lessons/02-04-slutsky-equation-comparative-statics.md)

### Independence axiom

Mixing two options with the *same* third gamble in the *same* proportion can't
reverse your ranking. This is the axiom with teeth — it is what makes the value
of a lottery **linear in probabilities**, and it is the one people actually
violate (Allais).

$$L\succeq L'\iff \alpha L+(1-\alpha)L''\ \succeq\ \alpha L'+(1-\alpha)L''\qquad \alpha\in(0,1]$$

*Introduced:* [2.5](lessons/02-05-choice-under-uncertainty.md)

### Expected utility theorem (von Neumann–Morgenstern)

Complete, transitive, continuous, independence-respecting preferences over
lotteries are represented by the probability-weighted average of a **cardinal**
index $u$ on outcomes — pinned down only up to positive affine maps $au+b$
($a>0$), not arbitrary monotone ones.

$$L\succeq L'\iff \sum_i p_i\,u(x_i)\ \ge\ \sum_i p_i'\,u(x_i)$$

*Introduced:* [2.5](lessons/02-05-choice-under-uncertainty.md)

### Risk aversion

Preferring the sure mean to the gamble — which, via Jensen's inequality, is
exactly concavity of the vNM index. Its cash measure is the risk premium.
Arrow–Pratt magnitudes and the CARA/CRRA families are tabulated below and on the
[undergraduate card](../micro-refresher/reference.md#arrowpratt-coefficients).

$$u\ \text{concave}\iff \mathbb{E}[u(x)]\le u(\mathbb{E}[x])\iff \text{risk averse},\qquad u(\mathrm{CE})=\mathbb{E}[u(x)],\ \ \pi=\mathbb{E}[x]-\mathrm{CE}$$

*Introduced:* [2.5](lessons/02-05-choice-under-uncertainty.md)

### Stochastic dominance

Ranking gambles without knowing anyone's $u$. **FOSD:** mass shifted toward
higher outcomes, so *everyone who prefers more* agrees. **SOSD (equal means):**
$G$ is a mean-preserving spread of $F$, so *every risk-averse agent* prefers $F$.

$$\textbf{FOSD: } F(t)\le G(t)\ \forall t \iff \textstyle\int u\,dF\ge\int u\,dG\ \ \forall\ \text{increasing }u$$
$$\textbf{SOSD: } \textstyle\int_{-\infty}^{t}\big[G(s)-F(s)\big]ds\ge 0\ \forall t \iff \int u\,dF\ge\int u\,dG\ \ \forall\ \text{increasing concave }u$$

*Introduced:* [2.5](lessons/02-05-choice-under-uncertainty.md)

### Directly revealed preferred

You bought $x^t$ on a day when $x^s$ was also affordable. Affordability **plus**
choice — never price alone.

$$x^t\,R^D\,x^s \iff p^t\cdot x^s\le p^t\cdot x^t=m^t \qquad (\text{strict version } P^D:\ <)$$

*Introduced:* [2.6](lessons/02-06-revealed-preference.md)

### WARP, SARP, GARP

The wallet may not vote both ways. **WARP** forbids a two-observation reversal;
**SARP** forbids cycles through the transitive closure $R$; **GARP** is SARP's
tie-tolerant form, and it is the one Afriat needs.

$$\textbf{WARP: } x^t R^D x^s \Rightarrow \text{not } x^s R^D x^t; \qquad \textbf{SARP: } x^t R\, x^s \Rightarrow \text{not } x^s R^D x^t$$

With three or more goods, WARP on every *pair* does not rule out a 3-cycle — you
need SARP/GARP.

*Introduced:* [2.6](lessons/02-06-revealed-preference.md)

### Afriat's theorem

A no-cycles condition you can check on a spreadsheet *is* utility maximization —
and if any utility rationalizes the data, a continuous, strictly increasing,
concave one does. Rationality becomes falsifiable.

$$\text{GARP} \iff \text{rationalized by a locally nonsatiated }u \iff \text{rationalized by a continuous, increasing, concave }u$$

*Introduced:* [2.6](lessons/02-06-revealed-preference.md)

### Production set and netput

The firm's primitive is not a production function but a *list of everything it
can do*, signed: negative entries are inputs, positive entries are outputs. This
handles multi-output and joint production with no special pleading.

$$Y\subseteq\mathbb{R}^n,\qquad y=(-3,-2,5)\ \text{means "3 labor and 2 steel in, 5 cars out"}$$

*Introduced:* [3.1](lessons/03-01-production-sets-technology.md)

### The technology axioms

Each is a one-line geometric condition with an economic meaning.

| Axiom | Statement | Reads as |
|---|---|---|
| no free lunch | $Y\cap\mathbb{R}^n_+\subseteq\{0\}$ | can't make output from nothing |
| inaction | $0\in Y$ | the firm may shut down |
| free disposal | $y\in Y,\ y'\le y\Rightarrow y'\in Y$ | you can waste inputs or dump output |
| irreversibility | $y\in Y,\ y\neq0\Rightarrow -y\notin Y$ | can't run the process backwards |
| convexity | $y,y'\in Y,\ t\in[0,1]\Rightarrow ty+(1-t)y'\in Y$ | time-sharing is feasible; with $0\in Y$ this forces nonincreasing returns |

For a single-output firm with free disposal, **$Y$ convex $\iff f$ concave**
$\Rightarrow$ $f$ quasiconcave (convex input-requirement sets).

*Introduced:* [3.1](lessons/03-01-production-sets-technology.md)

### Cost function and conditional factor demand

The firm's technology repackaged as a spending curve, and the recipe behind it.
"Conditional" because it fixes a hypothetical output $q$ — it is the *producer's
Hicksian demand*, not what the firm actually buys.

$$c(w,q)=\min_{x\ge0}w\cdot x\ \ \text{s.t.}\ f(x)\ge q,\qquad x(w,q)=\arg\min,\qquad \lambda=\frac{\partial c}{\partial q}=MC$$

*Introduced:* [3.2](lessons/03-02-cost-minimization.md)

### Profit function

The value of the best feasible plan at market prices — a maximum of functions
linear in prices, hence **convex** in prices (the mirror of $e$ and $c$, which
are minima and hence concave).

$$\pi(p)=\max_{y\in Y}p\cdot y,\qquad \text{single output: }\ \pi(p,w)=\max_{q\ge0}\big[pq-c(w,q)\big]$$

*Introduced:* [3.3](lessons/03-03-profit-maximization-supply.md)

### Duality (recovering the primitive)

A valid value function contains the whole technology or preference that produced
it. Test a candidate by its homogeneity, curvature, and monotonicity; if it
passes, it *is* somebody's cost/profit function and you can reconstruct their
primitive from it.

$$Y=\big\{y:\ p\cdot y\le\pi(p)\ \text{for all }p\gg0\big\}$$

*Introduced:* [3.3](lessons/03-03-profit-maximization-supply.md) (and [3.2](lessons/03-02-cost-minimization.md) for the cost side)

### Representative firm

Industry supply behaves exactly as if one fictional firm with the **pooled**
technology chose it — because profit is linear in the netput under a common
price, so the sum of the best individual plans is the best joint plan. Nothing is
lost. Consumer demand gets no such miracle.

$$Y=\sum_j Y_j,\qquad \Pi(p)=\sum_j\pi_j(p)=\max_{y\in Y}p\cdot y,\qquad \sum_j y_j(p)=\arg\max_{y\in Y}p\cdot y$$

*Introduced:* [3.4](lessons/03-04-aggregation-and-the-firm.md)

### Quasilinear utility

One good is money itself, so it absorbs every income effect and demand for the
other good doesn't move with wealth. This is the *only* assumption under which
the surplus triangles are exact welfare rather than an approximation.

$$u(x,m)=v(x)+m,\quad v'>0,\ v''<0\ \Longrightarrow\ v'(x)=p,\quad \partial x/\partial w=0,\quad x=h$$

*Introduced:* [4.1](lessons/04-01-partial-equilibrium-surplus.md); undergraduate surplus pictures: [micro-refresher](../micro-refresher/reference.md#consumer-and-producer-surplus)

### Pure exchange economy

Consumers with endowments, no production, and allocations that merely re-shuffle
what is already owned. The Edgeworth box is the two-person case drawn with
Bruno's axes flipped, so one point names both bundles.

$$\text{feasible}\iff \sum_i x_i=\bar\omega=\sum_i\omega_i$$

*Introduced:* [4.2](lessons/04-02-edgeworth-box-walrasian-equilibrium.md)

### Pareto efficiency and the contract curve

No reshuffle makes someone better off without hurting someone. For interior,
convex, smooth cases that is exactly a tangency of indifference curves; the locus
of all such points is the contract curve (the Pareto set).

$$\mathrm{MRS}_A=\mathrm{MRS}_B \quad\text{(interior, convex, smooth)}$$

Efficiency is a *shockingly weak* bar — "one person owns everything" is Pareto
efficient.

*Introduced:* [4.2](lessons/04-02-edgeworth-box-walrasian-equilibrium.md)

### Walrasian (competitive) equilibrium

A price at which everyone independently buys their favourite affordable bundle
and the independent choices happen to add up to the total supply. **With
transfers** means the wealth levels $w_i$ may be reassigned, keeping
$\sum_i w_i=p\cdot\bar\omega$ fixed.

$$x_i^{*}\in\arg\max_{p\cdot x_i\le w_i}u_i(x_i)\quad\text{for each }i,\qquad \sum_i x_i^{*}=\bar\omega,\qquad w_i=p\cdot\omega_i\ \text{(no transfers)}$$

Only the price *ratio* is determined (demand is homogeneous of degree zero) —
normalize before solving.

*Introduced:* [4.2](lessons/04-02-edgeworth-box-walrasian-equilibrium.md)

### Aggregate excess demand

The whole economy compressed to one object: how much more of each good is wanted
than exists. An equilibrium is a price where nothing is in excess demand.

$$z(p)=\sum_i x_i(p,\,p\cdot\omega_i)-\sum_i\omega_i;\qquad p^{*}\ \text{equilibrium}\iff z(p^{*})\le0,\ \ z_l(p^{*})=0\ \text{where}\ p^{*}_l>0$$

*Introduced:* [4.3](lessons/04-03-existence-walrasian-equilibrium.md)

### Brouwer's fixed-point theorem

A continuous self-map of a nonempty compact convex set must leave some point
untouched. The auctioneer's price-adjustment rule is such a map on the price
simplex, and its fixed point is the equilibrium. (Set-valued demand needs
**Kakutani** instead — the fully general Arrow–Debreu form.)

$$K\ \text{nonempty, compact, convex},\ f:K\to K\ \text{continuous}\ \Longrightarrow\ \exists\,x^{*}:\ f(x^{*})=x^{*}$$

*Introduced:* [4.3](lessons/04-03-existence-walrasian-equilibrium.md)

### Blocking coalition and the core

A group that can walk out with **only its own endowment** and make every member
at least as well off, one strictly better, kills the allocation. The core is what
survives every such threat.

$$S\ \text{blocks } x \iff \exists (y_i)_{i\in S}:\ \sum_{i\in S}y_i=\sum_{i\in S}\omega_i,\ \ y_i\succeq_i x_i\ \forall i\in S,\ \ y_i\succ_i x_i\ \text{some }i$$

Singleton coalitions give individual rationality; the grand coalition gives
Pareto efficiency; intermediate coalitions do the extra pruning.

*Introduced:* [4.5](lessons/04-05-core-and-equivalence.md)

### Debreu–Scarf core convergence

Clone each consumer $r$ times: more agents means more coalitions means more
blocking, and the core shrinks. In the limit it contains **exactly** the
Walrasian allocations — price-taking is coalition-proofness, not an assumption
you have to swallow.

$$\mathcal{C}_1\supseteq\mathcal{C}_2\supseteq\cdots,\qquad \bigcap_{r\ge1}\mathcal{C}_r=\{\text{Walrasian equilibrium allocations}\}$$

Equal treatment (identical types get identical bundles in the core) is a
*theorem* under strict convexity, not an assumption.

*Introduced:* [4.5](lessons/04-05-core-and-equivalence.md)

### Gross substitutes

Raise any one price and excess demand for **every other** good rises — nothing is
a complement. Sufficient (not necessary) for a unique equilibrium, and for global
tâtonnement stability.

$$\frac{\partial z_i(p)}{\partial p_j}>0\quad\text{for all }i\neq j$$

*Introduced:* [4.6](lessons/04-06-uniqueness-stability-failure.md)

### Tâtonnement

The auctioneer's fable: raise the price of anything in excess demand, lower it
otherwise, and see whether the ODE settles. A **downward** zero-crossing is
stable, an **upward** one unstable — so stability and instability must alternate.

$$\frac{dp_i}{dt}=z_i(p);\qquad \text{scalar case: }z'(p^{*})<0\Rightarrow\text{stable},\quad z'(p^{*})>0\Rightarrow\text{unstable}$$

*Introduced:* [4.6](lessons/04-06-uniqueness-stability-failure.md)

### Sonnenschein–Mantel–Debreu

Continuity, homogeneity of degree zero, and Walras' law are the **only**
restrictions individual rationality imposes on aggregate excess demand — any
other continuous function obeying them is some standard economy's $z$. Individual
WARP and NSD leave no fingerprint on the aggregate, so uniqueness and stability
cannot be derived from micro-foundations.

*Introduced:* [4.6](lessons/04-06-uniqueness-stability-failure.md)

### Adverse selection

Hidden **type**, fixed before contracting. Price doesn't just set how much
trades, it selects *which types* trade — and always the ones their owners value
least, so the traded pool is worse than the population and the market can unravel
even though every trade would be mutually beneficial.

$$\text{WTP}(p)=(1+m)\,\mathbb{E}[q\mid q\le p]\quad\text{— the \emph{conditional} mean of the offered pool, never }\mathbb{E}[q]$$

*Introduced:* [5.1](lessons/05-01-adverse-selection-lemons.md)

### Single crossing (Spence–Mirrlees)

The engine of every sorting result: the two types' indifference curves cross at
most once, because one type's marginal willingness to trade the sorting variable
is uniformly larger. Without it, no signal and no menu can separate types.

$$\textbf{signaling } (e,w):\ c_e(e,\theta_H)<c_e(e,\theta_L)\ \text{— high type's curves \emph{flatter}}$$
$$\textbf{screening } (q,t):\ \theta_H v'(q)>\theta_L v'(q)\ \text{— high type's curves \emph{steeper}}$$

The sign flips only because education is a cost and quantity is a benefit; the
structural condition is the same.

*Introduced:* [5.2](lessons/05-02-signaling.md)

### Separating vs. pooling equilibrium

**Separating:** types choose distinct actions, so the uninformed side infers type
perfectly. **Pooling:** everyone hides in the crowd at one action and is paid the
population average. Both are perfect Bayesian equilibria; which survives depends
on off-path beliefs, which Bayes' rule leaves free.

$$\textbf{separating IC: } y_L-c(e_L,\theta_L)\ \ge\ y_H-c(e_H,\theta_L)\quad\text{and}\quad y_H-c(e_H,\theta_H)\ \ge\ y_L-c(e_L,\theta_H)$$

*Introduced:* [5.2](lessons/05-02-signaling.md)

### Intuitive Criterion (Cho–Kreps)

A belief refinement: if only the high type could conceivably gain from an
off-path action, the uninformed side should believe a deviator is the high type.
That single demand destroys pooling and every separating equilibrium except the
**least-cost** one (the smallest signal that still deters the low type).

*Introduced:* [5.2](lessons/05-02-signaling.md)

### Screening

The **uninformed** party moves first, posting a menu, and types sort themselves
by which item they pick. Same single-crossing engine as signaling, opposite order
of play.

$$\max\ \text{profit s.t. }\ \underbrace{\theta v(q_\theta)-t_\theta\ge0}_{\text{IR}},\ \ \underbrace{\theta v(q_\theta)-t_\theta\ge\theta v(q_{\theta'})-t_{\theta'}}_{\text{IC}}$$

*Introduced:* [5.3](lessons/05-03-screening.md)

### Information rent

What the principal must hand the high type purely because the type is hidden —
the extra surplus the high type would enjoy from the low type's bundle. Shrinking
$q_L$ shrinks the rent, which is exactly why the low type's contract is damaged.

$$\text{rent}=(\theta_H-\theta_L)\,v(q_L)$$

*Introduced:* [5.3](lessons/05-03-screening.md)

### Moral hazard

Hidden **action**, chosen *after* contracting. The principal can pay only on what
she sees (output), so to buy effort she must tilt pay with output — which loads
risk onto a risk-averse agent she would rather insure.

$$\underbrace{\mathbb{E}[u(w(q))\mid a_H]-c(a_H)\ \ge\ \bar u}_{\text{IR: sets the \emph{level}}},\qquad \underbrace{\mathbb{E}[u(w(q))\mid a_H]-c(a_H)\ \ge\ \mathbb{E}[u(w(q))\mid a_L]-c(a_L)}_{\text{IC: sets the \emph{slope}}}$$

*Introduced:* [5.4](lessons/05-04-moral-hazard-principal-agent.md)

### First best vs. second best

**First best** (effort observable): a risk-neutral principal absorbs all risk, so
the wage is flat at the certainty equivalent of "outside option plus effort
cost". **Second best** (effort hidden): pay must rise with output, and the excess
expected wage over the flat benchmark is precisely a risk premium — the agency
cost.

$$w^{FB}=u^{-1}\big(\bar u+c(a)\big),\qquad \text{agency cost}=\mathbb{E}[w\mid a_H]-\mathrm{CE}=\pi$$

With a risk-neutral agent the agency cost is **zero** — sell her the firm for a
fixed fee and incentive compatibility is automatic.

*Introduced:* [5.4](lessons/05-04-moral-hazard-principal-agent.md)

### Mechanism and direct mechanism

A mechanism is a rulebook: a message space plus an outcome rule. It is **direct**
if the only message is a report of your own type, and **incentive compatible** if
truthful reporting is an equilibrium of the game it induces.

$$(M,g),\ M=M_1\times\cdots\times M_n,\ g:M\to\text{outcomes};\qquad \text{direct}\iff M_i=\Theta_i$$

*Introduced:* [5.5](lessons/05-05-mechanism-design-markets.md)

### DSIC vs. BIC

**Dominant-strategy IC:** truth is optimal no matter what rivals report. **Bayesian
IC:** truth is optimal only in expectation, assuming rivals report truthfully and
the prior is right. DSIC is strictly stronger and strictly more robust — always
know which one a result gives you.

*Introduced:* [5.5](lessons/05-05-mechanism-design-markets.md)

### Revelation principle

Whatever any baroque mechanism achieves in equilibrium, a mechanism that just
*asks* achieves too — bolt the equilibrium strategies onto the rules and let the
machine do the shading. So the entire feasible set is described by IC and IR
constraints on truthful direct mechanisms.

$$f\ \text{implementable by some }(M,g)\ \Longrightarrow\ f\ \text{implementable by an IC direct mechanism, same outcome}$$

It is a **proof tool**, not a design prescription: real markets use indirect
formats for robustness and because direct mechanisms demand the designer know the
prior.

*Introduced:* [5.5](lessons/05-05-mechanism-design-markets.md)

### Externality

A real cost or benefit that lands on someone without passing through a price. Not
a story about irrational agents — everyone optimizes flawlessly against
*incomplete* prices.

$$\mathrm{SMC}(q)=\mathrm{PMC}(q)+\mathrm{MED}(q);\qquad P(q_{\text{priv}})=\mathrm{PMC},\quad P(q^{*})=\mathrm{SMC}$$

Negative externality $\Rightarrow$ overproduction; positive $\Rightarrow$
underproduction.

*Introduced:* [6.3](lessons/06-03-externalities-coase-theorem.md)

### Coase theorem

With well-defined property rights and costless bargaining, the parties reach the
efficient activity level **regardless of who holds the right**; the assignment
decides who pays whom, not how much is produced. It breaks with many parties
(holdout, free-riding) or private information.

*Introduced:* [6.3](lessons/06-03-externalities-coase-theorem.md)

### Pure public good

Non-rival (my consumption doesn't subtract from yours) **and** non-excludable
(you can't keep non-payers out). Two independent axes — a club good is non-rival
but excludable, a common-pool resource is rival but non-excludable.

|  | Excludable | Non-excludable |
|---|---|---|
| **Rival** | private good (apple) | common-pool resource (fishery) |
| **Non-rival** | club good (cinema) | **pure public good** (lighthouse) |

*Introduced:* [6.4](lessons/06-04-public-goods.md)

### Lindahl equilibrium

The public-good analogue of Walrasian prices: each consumer faces a
*personalized* per-unit price equal to their own marginal benefit, the prices sum
to marginal cost, and everyone then demands the same efficient quantity. Not
incentive compatible — everyone gains by understating $b_i'$.

$$b_i'(G)=\tau_i\ \ \text{for every }i,\qquad \sum_i\tau_i=c\ \Longrightarrow\ \sum_i b_i'(G)=c\ \ \text{(Samuelson)}$$

*Introduced:* [6.4](lessons/06-04-public-goods.md)

### Social welfare function (Arrow)

A machine that folds every individual's *ordering* into one social ordering,
which must itself be complete and transitive. Note the input is ordinal and
interpersonally non-comparable — that poverty is what Arrow's theorem is about.

$$F:(\succeq_1,\dots,\succeq_n)\longmapsto\ \succeq_S$$

*Introduced:* [6.5](lessons/06-05-social-choice-welfare.md)

### Condorcet winner and single-peakedness

A **Condorcet winner** beats every other option in a pairwise majority vote; with
three cyclic voters none exists. **Single-peaked** preferences — one ideal point
on a line, liking options less the farther away — kill the cycle, and then the
**median** voter's ideal is the Condorcet winner.

*Introduced:* [6.5](lessons/06-05-social-choice-welfare.md)

## Formulas and rules

### The optimization checklist

| Setting | Necessary condition | What makes it sufficient |
|---|---|---|
| unconstrained | $\nabla f(x^{*})=0$ | $H_f$ negative definite (local max); $f$ concave everywhere (global) |
| equality constraint | $\nabla f=\lambda\nabla g$ **and** $g=b$ | bordered-Hessian sign pattern; or $f$ concave on a convex feasible set |
| inequality constraints | the four KKT conditions below | $f$ concave, every $g_j$ convex $\Rightarrow$ **any** KKT point is a global max |

**KKT** for $\max f(x)$ s.t. $g_j(x)\le b_j$, $x_i\ge0$, with
$L=f(x)+\sum_j\lambda_j(b_j-g_j(x))$:

$$\textbf{(1) stationarity } \frac{\partial L}{\partial x_i}\le0,\ x_i\ge0,\ x_i\frac{\partial L}{\partial x_i}=0; \qquad \textbf{(2) primal feasibility } g_j(x^{*})\le b_j,\ x^{*}_i\ge0;$$
$$\textbf{(3) dual feasibility } \lambda_j^{*}\ge0; \qquad \textbf{(4) complementary slackness } \lambda_j^{*}\big(b_j-g_j(x^{*})\big)=0.$$

Guessing which constraints bind is fine; **verifying** all four is mandatory.
Necessity itself needs a constraint qualification.

*From* [1.2](lessons/01-02-unconstrained-equality-constrained-optimization.md) *and* [1.3](lessons/01-03-inequality-constraints-kuhn-tucker.md)

### Curvature tests

| Test | Verdict |
|---|---|
| $H$ negative semidefinite everywhere | $f$ concave (this is the *right* condition — NSD, not ND) |
| $H$ negative definite everywhere | $f$ strictly concave $\Rightarrow$ unique maximizer |
| $2\times2$ leading minors $f_{xx}<0$, $\det H>0$ | negative **definite** (alternating $-,+$) |
| $f_{xx}\le0,\ f_{yy}\le0,\ \det H\ge0$ | negative **semi**definite (leading minors alone do **not** certify this) |
| every $U_a$ convex / bordered-Hessian sign pattern | quasiconcave |
| $\det\bar H>0$ (with $n=2$, $m=1$) | constrained **max**; $\det\bar H<0$ constrained **min** |
| general $n,m$ | last $n-m$ leading minors of $\bar H$ alternate ending in $(-1)^n$ (max) or share sign $(-1)^m$ (min) |

*From* [1.1](lessons/01-01-convexity-concavity-quasiconcavity.md) *and* [1.2](lessons/01-02-unconstrained-equality-constrained-optimization.md)

### The four value functions and their envelope relations — one grid

Every "lemma" below is the envelope theorem with the parameter set to a price.
Learn the pattern once and all four rows are free.

| Problem | Value function | Choice recovered by | Formula |
|---|---|---|---|
| UMP: $\max u$ s.t. $p\cdot x\le m$ | $V(p,m)$ indirect utility | **Roy's identity** | $x_i=-\dfrac{\partial V/\partial p_i}{\partial V/\partial m}$ |
| EMP: $\min p\cdot x$ s.t. $u\ge\bar u$ | $e(p,\bar u)$ expenditure | **Shephard's lemma** | $h_i=\dfrac{\partial e}{\partial p_i}$ |
| CMP: $\min w\cdot x$ s.t. $f\ge q$ | $c(w,q)$ cost | **Shephard's lemma** | $x_i=\dfrac{\partial c}{\partial w_i}$ |
| PMP: $\max p\cdot y$ over $Y$ | $\pi(p,w)$ profit | **Hotelling's lemma** | $q=\dfrac{\partial\pi}{\partial p}$, $x_i=-\dfrac{\partial\pi}{\partial w_i}$ |

Supporting identities: $\partial V/\partial m=\lambda$ (marginal utility of
income), $\partial V/\partial p_i=-\lambda x_i$, and
$\lambda=\partial c/\partial q=MC$ in the firm's problem.

**Duality identities** tying the consumer's four objects into one square — know
any one and you can reconstruct the other three:

$$e\big(p,V(p,m)\big)=m,\qquad V\big(p,e(p,\bar u)\big)=\bar u$$
$$x(p,m)=h\big(p,V(p,m)\big),\qquad h(p,\bar u)=x\big(p,e(p,\bar u)\big)$$

The producer dictionary is the same theorem relabelled:
$u\to f$, $\bar u\to q$, $p\to w$, $h\to x(w,q)$, $e\to c$.

*From* [1.4](lessons/01-04-envelope-theorem-duality.md), [2.2](lessons/02-02-utility-maximization-marshallian-demand.md), [2.3](lessons/02-03-expenditure-minimization-duality.md), [3.2](lessons/03-02-cost-minimization.md), [3.3](lessons/03-03-profit-maximization-supply.md)

### Homogeneity and curvature of every value function

A wrong degree or a flipped curvature is almost always an algebra slip — check
here first.

| Object | Homogeneous of degree | Curvature in prices | Monotonicity |
|---|---|---|---|
| $x(p,m)$ | $0$ in $(p,m)$ | — | — |
| $V(p,m)$ | $0$ in $(p,m)$ | **quasiconvex** in $p$ | falling in $p$, rising in $m$ |
| $h(p,\bar u)$ | $0$ in $p$ | — | $\partial h_i/\partial p_i\le0$ |
| $e(p,\bar u)$ | $1$ in $p$ | **concave** in $p$ | rising in $\bar u$, nondecreasing in $p$ |
| $x(w,q)$ | $0$ in $w$ | — | $\partial x_i/\partial w_i\le0$ |
| $c(w,q)$ | $1$ in $w$ | **concave** in $w$ | nondecreasing in $w$ and in $q$ |
| $\pi(p,w)$ | $1$ in $(p,w)$ | **convex** in $(p,w)$ | rising in $p$, falling in $w_i$ |

Mnemonic: **minimized** value functions ($e$, $c$) are concave — you substitute
away from whatever got dear; **maximized** profit is convex — you re-optimize
toward whatever got lucrative. Hence the consumer's substitution matrix is
negative semidefinite while the profit Hessian is positive semidefinite: same
envelope fact, opposite sign. Degree-1 homogeneity forces a zero eigenvalue
(Euler: $Hp=0$), which is why $\det S=0$ in the two-good case.

*From* [2.3](lessons/02-03-expenditure-minimization-duality.md), [3.2](lessons/03-02-cost-minimization.md), [3.3](lessons/03-03-profit-maximization-supply.md)

### The Slutsky equation and what $S$ must satisfy

$$\frac{\partial x_i}{\partial p_j}=\underbrace{\frac{\partial h_i}{\partial p_j}}_{\text{substitution}}-\underbrace{x_j\,\frac{\partial x_i}{\partial m}}_{\text{income}} \qquad\Longleftrightarrow\qquad s_{ij}=\frac{\partial x_i}{\partial p_j}+x_j\frac{\partial x_i}{\partial m}$$

The income term is scaled by $x_j$ — the good whose *price moved* — not $x_i$.

| Property of $S$ | Why | What it buys |
|---|---|---|
| symmetric, $s_{ij}=s_{ji}$ | Young's theorem on $e$ | a testable restriction — asymmetry falsifies rationality |
| negative semidefinite | $e$ concave in $p$ | $s_{ii}\le0$: the **compensated** law of demand |
| singular, $Sp=0$ | $h$ homogeneous of degree $0$ (Euler) | $\det S=0$ always — don't expect strict definiteness |

$$\textbf{Giffen} \iff \frac{\partial x_i}{\partial p_i}>0 \iff x_i\left(-\frac{\partial x_i}{\partial m}\right)>\lvert s_{ii}\rvert$$

— which forces $\partial x_i/\partial m<0$: a Giffen good must be **inferior**
and hold a large budget share. Normal goods are never Giffen. Quasilinear goods
have $\partial x/\partial m=0$, so Marshallian $=$ Hicksian and the ordinary
demand curve *is* the substitution effect.

*From* [2.4](lessons/02-04-slutsky-equation-comparative-statics.md), [4.1](lessons/04-01-partial-equilibrium-surplus.md)

### Revealed preference in the smooth limit

Slutsky-compensate a price change ($w^1=p^1\cdot x^0$, so the old bundle is just
affordable) and WARP becomes exactly the negative-semidefiniteness of $S$:

$$\Delta p\cdot\Delta x\le0,\quad\text{strict if }x^1\neq x^0 \qquad\Longrightarrow\qquad \frac{\partial x_k}{\partial p_k}\bigg|_{\text{comp}}=s_{kk}\le0$$

WARP alone gives NSD; **symmetry** of $S$ is the strong-axiom (integrability)
half.

*From* [2.6](lessons/02-06-revealed-preference.md)

### Risk: measuring it and pricing it

$$A(x)=-\frac{u''(x)}{u'(x)},\qquad R(x)=-\frac{x\,u''(x)}{u'(x)}=x\,A(x),\qquad \pi\ \approx\ \tfrac12\,A(w)\,\sigma^2$$

$A$ governs bets of fixed **dollar** size, $R$ bets of a fixed **proportion** of
wealth. Both are invariant to the affine rescaling that raw $u''$ is not.

| Family | $u(x)$ | $A(x)$ | $R(x)$ |
|---|---|---|---|
| CARA | $-e^{-ax}$, $a>0$ | $a$ (constant) | $ax$ |
| CRRA | $\dfrac{x^{1-\gamma}}{1-\gamma}$ ($\gamma\neq1$), $\ln x$ ($\gamma=1$) | $\gamma/x$ | $\gamma$ (constant) |

For $u=\ln x$ the certainty equivalent is the **geometric mean** of the outcomes.
A risk-neutral insurer breaks even at the fair premium and can charge up to
$\mathbb{E}[x]-\mathrm{CE}$ more — that wedge $\pi$ is the whole insurance
business, and in [5.4](lessons/05-04-moral-hazard-principal-agent.md) it is the
whole agency cost.

*From* [2.5](lessons/02-05-choice-under-uncertainty.md)

### The firm: technology, cost curvature, and supply

$$\mathrm{MRTS}_{12}=\frac{MP_1}{MP_2}=\frac{w_1}{w_2}\ \text{(cost min)},\qquad \sigma=\frac{d\ln(x_2/x_1)}{d\ln\mathrm{MRTS}_{12}},\qquad p=MC(q)\ \text{(profit max)}$$

Returns to scale become the curvature of cost in output — for Cobb–Douglas with
degree $a+b$, $c\propto q^{1/(a+b)}$:

| Returns to scale | Cost in $q$ | Marginal cost | Competitive supply |
|---|---|---|---|
| decreasing ($a+b<1$) | convex | rising | a well-behaved upward curve |
| constant ($a+b=1$) | linear | flat | a **correspondence**; profit exactly zero |
| increasing ($a+b>1$) | concave | falling | no finite optimum exists |

$\sigma$ and returns to scale are independent dials: perfect substitutes
($\sigma=\infty$) and Leontief ($\sigma=0$) are both constant-returns; CES
$f=(\alpha x_1^{\rho}+(1-\alpha)x_2^{\rho})^{1/\rho}$ has $\sigma=1/(1-\rho)$,
with Cobb–Douglas ($\sigma=1$) in the middle.

**Second-order condition:** $\partial MC/\partial q\ge0$ at the chosen output,
and $p$ must clear minimum average variable cost or the answer is $q=0$.
**Aggregation:** add firm supplies *horizontally* (common price, quantities add);
the industry curve kinks and jumps at each firm's entry price. Long-run free
entry drives price to minimum average cost and profit to zero.

*From* [3.1](lessons/03-01-production-sets-technology.md), [3.2](lessons/03-02-cost-minimization.md), [3.3](lessons/03-03-profit-maximization-supply.md), [3.4](lessons/03-04-aggregation-and-the-firm.md); cost-curve geometry: [micro-refresher](../micro-refresher/reference.md#cost-curve-geometry)

### Partial-equilibrium surplus

$$CS(p^{*})=\int_0^{q^{*}}\big(P(q)-p^{*}\big)dq,\qquad PS(p^{*})=\int_0^{q^{*}}\big(p^{*}-C'(q)\big)dq=\pi+F$$

Total surplus is maximized where $P(q)=C'(q)$ — the competitive quantity. Any
wedge (a tax $t$, a monopoly markup, an unpriced external cost) that cuts trade
by $\Delta q$ burns

$$DWL=\tfrac12\,(\text{wedge})\times(\text{lost quantity}).$$

Incidence is set by relative elasticities, **never** by who writes the check.
These areas are exact welfare only under quasilinearity; otherwise the honest
measures are compensating and equivalent variation.

*From* [4.1](lessons/04-01-partial-equilibrium-surplus.md)

### Existence of Walrasian equilibrium — the recipe

Three properties of $z$, one normalization, one fixed point:

1. **Continuity** — from the maximum theorem, and it needs *strictly* convex
   preferences so demand is single-valued.
2. **Homogeneity of degree zero** — lets you normalize onto the simplex
   $\Delta=\{p\ge0:\sum_l p_l=1\}$, which is compact and convex.
3. **Walras' law** $p\cdot z(p)=0$ — from local nonsatiation.
4. **Boundary/desirability**: $z_l(p)\to+\infty$ as $p_l\to0$, keeping $p^{*}$ off
   the simplex boundary.

Apply the auctioneer's map and Brouwer:

$$g_l(p)=\frac{p_l+\max\{0,z_l(p)\}}{1+\sum_k\max\{0,z_k(p)\}},\qquad g(p^{*})=p^{*}\ \Longrightarrow\ p^{*}_l M=\max\{0,z_l(p^{*})\}$$

Multiply by $z_l$, sum, and Walras' law kills the left side, leaving a sum of
squares — so $z(p^{*})\le0$. Set-valued demand: swap Brouwer for **Kakutani**.

*From* [4.3](lessons/04-03-existence-walrasian-equilibrium.md)

### The two welfare theorems — exact hypotheses

|  | **First** | **Second** |
|---|---|---|
| Claim | every Walrasian equilibrium allocation is Pareto efficient | every Pareto-efficient allocation is a Walrasian equilibrium **with transfers** |
| Needs | **local nonsatiation only** | convex, continuous, locally nonsatiated preferences; $\bar\omega\gg0$ |
| Does **not** need | convexity, smoothness, divisibility, one good or a thousand | — |
| Engine | a Pareto improvement would cost more than society owns | disjoint convex sets admit a **separating hyperplane**; its normal *is* the price vector |
| Fails when | some cost or benefit is unpriced ([6.3](lessons/06-03-externalities-coase-theorem.md), [6.4](lessons/06-04-public-goods.md)) or information is asymmetric ([5.1](lessons/05-01-adverse-selection-lemons.md)) | preferences are nonconvex (no wall can be drawn), or lump-sum transfers are unavailable |

The asymmetry is the whole lesson: the first theorem is nearly assumption-free;
the second buys distributional freedom with convexity **and** lump-sum transfers
— and a lump-sum transfer requires observing types, which is exactly where Module
5 begins. "Supported with transfers" never means "is the equilibrium of the
original endowments", and Pareto efficiency says nothing about fairness.

*From* [4.4](lessons/04-04-two-welfare-theorems.md), previewed in [4.2](lessons/04-02-edgeworth-box-walrasian-equilibrium.md)

### Uniqueness and stability

| Question | Answer | Caveat |
|---|---|---|
| Does an equilibrium exist? | yes, under continuity + convexity ([4.3](lessons/04-03-existence-walrasian-equilibrium.md)) | the *only* structural promise the theory keeps |
| Is it unique? | yes if $z$ satisfies gross substitutes | sufficient, not necessary |
| Is it stable? | globally, under gross substitutes (Lyapunov $\dot V<0$) | Scarf: a unique equilibrium can be globally *unstable* |
| Does rationality force any of this? | **no** — Sonnenschein–Mantel–Debreu | so multiplicity and instability are generic, not exceptional |

Producer aggregation is clean ([3.4](lessons/03-04-aggregation-and-the-firm.md));
consumer aggregation needs Gorman preferences and generally fails. Never assume a
market demand curve slopes down or satisfies WARP.

*From* [4.6](lessons/04-06-uniqueness-stability-failure.md)

### The four information problems side by side

| | What's hidden | When | Who moves first | Fix / result |
|---|---|---|---|---|
| Adverse selection [5.1](lessons/05-01-adverse-selection-lemons.md) | type | before contracting | nobody designs | market can unravel; needs signals, screens, or warranties |
| Signaling [5.2](lessons/05-02-signaling.md) | type | before | the **informed** party | separation via a differentially costly action; deadweight signaling cost |
| Screening [5.3](lessons/05-03-screening.md) | type | before | the **uninformed** party | menu + self-selection; rent at the top, distortion at the bottom |
| Moral hazard [5.4](lessons/05-04-moral-hazard-principal-agent.md) | action | after | the principal (contract) | pay slopes up in output; agency cost $=$ risk premium |

All four run on the same two constraints — IC and IR — and, for the type
problems, on the same single-crossing condition.

### Screening: what binds, and the two headline results

Single crossing collapses four constraints to two:

$$\boxed{\ \text{IR}_L\ \text{binds}\quad\text{and}\quad\text{IC}_H\ \text{binds}\ }$$

The low type is squeezed to its outside option; the high type is held exactly
indifferent between truth and mimicking down. IR$_H$ and IC$_L$ come free — do
**not** impose all four.

$$\textbf{No distortion at the top: }\ \theta_H v'(q_H)=c\ \ \text{(the full-information condition)}$$
$$\textbf{Downward distortion at the bottom: }\ \theta_L v'(q_L)=c+\frac{\lambda}{1-\lambda}(\theta_H-\theta_L)v'(q_L)\ >\ c$$

With $v(q)=q-\tfrac12q^2$ and zero marginal cost this reads
$q_H=\theta_H$ and $q_L=\theta_L-\frac{\lambda}{1-\lambda}(\theta_H-\theta_L)$;
the low type is **excluded** entirely once that expression hits zero. More high
types (larger $\lambda$) $\Rightarrow$ more distortion, because each unit of
$q_L$ pays rent on a bigger mass.

*From* [5.3](lessons/05-03-screening.md); the same algebra is second-degree price discrimination in [6.1](lessons/06-01-monopoly-price-discrimination.md)

### Mechanism design: the results and what each assumes

| Result | Statement | Assumes | Fails / costs |
|---|---|---|---|
| **Revelation principle** | anything implementable is implementable by a truthful direct mechanism | an equilibrium concept fixed in advance (DSIC or BIC) | designer must know the prior for the BIC version; says nothing about robustness |
| **VCG / pivotal** | charge each agent the externality they impose $\Rightarrow$ truth is **dominant**, allocation efficient | quasilinear utility, transfers allowed | can run a budget **deficit**; vulnerable to **collusion** |
| **Vickrey (second-price)** | bidding your value is weakly dominant; highest value wins | private values, one object | the one-object instance of VCG |
| **Revenue equivalence (Myerson)** | any auction with the same allocation rule and zero payoff to a zero type raises the same expected revenue | independent private values, risk neutrality, symmetric bidders | first-price, second-price, all-pay all give $m(v)=v^2/2$ for two uniform bidders |
| **Myerson optimal auction** | revenue maximization deliberately **distorts** — reserve prices, withholding | known prior | efficiency and revenue are different objectives |
| **Gibbard–Satterthwaite** | with $\ge3$ outcomes, unrestricted preferences and **no transfers**, the only DSIC onto rules are dictatorships | no money | money is what rescues honest mechanism design |

*From* [5.5](lessons/05-05-mechanism-design-markets.md)

### Market structure side by side

Linear demand $p=a-bQ$, constant marginal cost $c$:

| Structure | Total $Q$ | Price | Deadweight loss |
|---|---|---|---|
| monopoly | $\dfrac{a-c}{2b}$ | $\dfrac{a+c}{2}$ | $\dfrac{(a-c)^2}{8b}$ (exactly half of profit) |
| Cournot, $n$ firms | $\dfrac{n(a-c)}{b(n+1)}$ | $\dfrac{a+nc}{n+1}$ | $\dfrac{(a-c)^2}{2b(n+1)^2}$ |
| Stackelberg duopoly | $\dfrac{3(a-c)}{4b}$ ($q_1=\frac{a-c}{2b}$, $q_2=\frac{a-c}{4b}$) | $\dfrac{a+3c}{4}$ | between Cournot and competition |
| Bertrand (homogeneous) | $\dfrac{a-c}{b}$ | $c$ | $0$ — two firms suffice |
| perfect competition | $\dfrac{a-c}{b}$ | $c$ | $0$ |

$$MR=p+q\,p'(q)<p;\quad\text{linear demand: same intercept, \textbf{double} the slope}$$
$$\textbf{Lerner: }\ \frac{p-MC}{p}=\frac{1}{\lvert\varepsilon\rvert}\ \text{(monopoly)},\qquad \frac{p-c}{p}=\frac{s_i}{\lvert\varepsilon\rvert}\ \text{(Cournot, share }s_i=1/n)$$
$$\textbf{Cournot best response: }\ q_i=R_i(q_j)=\frac{a-c}{2b}-\frac{q_j}{2}$$

A monopolist never operates where $\lvert\varepsilon\rvert\le1$. Cartel output
(half the monopoly quantity each) is **not** a one-shot Nash equilibrium — it is
a prisoner's dilemma, stable only under repetition. Degrees of price
discrimination: [micro-refresher](../micro-refresher/reference.md#price-discrimination-by-degree) — with the graduate reading that first-degree restores full efficiency
with zero consumer surplus, and second-degree *is* the screening problem above.

*From* [6.1](lessons/06-01-monopoly-price-discrimination.md), [6.2](lessons/06-02-oligopoly.md)

### Correcting externalities and providing public goods

$$\textbf{Pigouvian tax: }\ t=\mathrm{MED}(q^{*})\ \text{— evaluated at the \textbf{efficient} quantity, not the private one}$$
$$\textbf{Positive externality: }\ \text{subsidy }s=\text{marginal external benefit; the market \textbf{under}provides}$$
$$\textbf{Samuelson condition: }\ \sum_{i=1}^{n}\mathrm{MRS}_i=\mathrm{MRT}\quad\Longleftrightarrow\quad \sum_i b_i'(G)=c$$
$$\textbf{Voluntary (Nash) provision: }\ b_i'(G)=c\ \text{for each contributor separately}\ \Rightarrow\ G^N<G^{*}$$

Private goods aggregate **horizontally** (common price, add quantities); public
goods aggregate **vertically** (common quantity, add marginal valuations). With
$n$ identical consumers the efficient $G^{*}$ rises with $n$ while $G^N$ stays
put and each person's contribution falls like $1/n$ — free-riding gets
*relatively* worse as the group grows.

*From* [6.3](lessons/06-03-externalities-coase-theorem.md), [6.4](lessons/06-04-public-goods.md)

### Arrow's four axioms, and the four ways out

| Axiom | Demand |
|---|---|
| **U** unrestricted domain | $F$ defined on every logically possible profile |
| **P** weak Pareto | unanimous strict preference becomes society's |
| **IIA** independence of irrelevant alternatives | society's $x$-vs-$y$ verdict uses only individuals' $x$-vs-$y$ opinions |
| **D** non-dictatorship | no individual's strict preference always becomes society's |

> **Arrow's impossibility theorem.** With $\lvert X\rvert\ge3$, no social welfare
> function satisfies U, P, IIA, and D at once — U + P + IIA force a dictatorship.

Escapes, each relaxing exactly one axiom: **restrict the domain** (single-peaked
preferences $\Rightarrow$ median voter theorem), **use cardinal comparable
utility** (utilitarian $W=\sum_i u_i$, Rawlsian $W=\min_i u_i$ — both violate
IIA), **give up transitivity of the output** (plain majority rule, which then
cycles), or **accept manipulability** (Gibbard–Satterthwaite). Arrow is about
*coherence*; Gibbard–Satterthwaite is about *honesty* — twins, not identicals.

*From* [6.5](lessons/06-05-social-choice-welfare.md)

## Assumed, not taught here

A tier-2 course leans on its prerequisites rather than re-deriving them. Each
row names where the derivation actually lives.

| Fact | Where it's taught |
|---|---|
| Compactness, and that a continuous function on a compact set attains its max (Weierstrass) — the existence half of every optimization here | [real-analysis 4.2](../real-analysis/lessons/04-02-compactness-heine-borel.md), [5.2](../real-analysis/lessons/05-02-continuity-on-compact-sets.md) |
| Closed sets and convergent sequences — the content of "continuous preferences" | [real-analysis 4.1](../real-analysis/lessons/04-01-open-closed-limit-points.md), [2.1](../real-analysis/lessons/02-01-convergence-epsilon-n.md) |
| The Banach fixed-point (contraction mapping) theorem behind Bellman/value iteration | [real-analysis 2.4](../real-analysis/lessons/02-04-cauchy-sequences.md) |
| Countability of the rationals (why lexicographic preferences admit no utility) | [real-analysis 1.4](../real-analysis/lessons/01-04-countable-and-uncountable.md) |
| Definiteness of quadratic forms, eigenvalue signs, principal-minor tests — every second-order condition and the NSD/PSD verdicts on $S$ and $D^2\pi$ | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md), [3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| $2\times2$ determinants (bordered Hessians, signing $S$) | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Equality of mixed partials (Young/Clairaut) — the source of Slutsky symmetry | [calc-refresher](../calc-refresher/reference.md#mixed-partials-commute-clairaut) (stated on the card, used in [5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md)) |
| Lagrange multipliers as shadow prices, in scalar form | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| The integral as accumulation — every surplus, rent, and deadweight-loss area | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Second-order Taylor expansion — the $\pi\approx\tfrac12A\sigma^2$ derivation | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| The **separating hyperplane theorem** — the entire engine of the Second Welfare Theorem | [convex-optimization 1.1](../convex-optimization/lessons/01-01-convex-sets-separating-hyperplane.md) |
| Jensen's inequality (risk aversion $=$ concavity) | [convex-optimization 1.3](../convex-optimization/lessons/01-03-convex-functions-epigraph.md) |
| Slater's condition and the KKT theorem proved rather than stated | [convex-optimization 3.2](../convex-optimization/lessons/03-02-strong-duality-slater.md), [3.3](../convex-optimization/lessons/03-03-kkt-conditions.md) |
| Euler's theorem for homogeneous functions ($Hp=0$, hence $\det S=0$) | [micro-refresher 3.1](../micro-refresher/lessons/03-01-technology-production.md) |
| Closed-form demands, cost-curve geometry, surplus pictures, the undergraduate market-structure table | [micro-refresher's card](../micro-refresher/reference.md) |
| Expectation, variance, and conditional expectation on a truncated set, $\mathbb{E}[q\mid q\le p]$ — the lemons mechanism | [prob-stat-refresher 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md), [1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md), [2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Brouwer and Kakutani fixed-point theorems (used, never proved here) | [grad-game-theory 1.3](../grad-game-theory/lessons/01-03-brouwer-kakutani-fixed-points.md), [topology 6.5](../topology/lessons/06-05-fixed-points-applications.md) |
| Nash equilibrium and best responses (Cournot, Bertrand, contribution games) | [grad-game-theory 2.2](../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md), [game-theory-refresher 1.2](../game-theory-refresher/lessons/01-02-nash-equilibrium.md) |
| Backward induction and subgame perfection (the Stackelberg solve) | [grad-game-theory 3.2](../grad-game-theory/lessons/03-02-backward-induction-subgame-perfection.md) |
| Perfect Bayesian equilibrium, off-path beliefs, and the Intuitive Criterion | [grad-game-theory 4.4](../grad-game-theory/lessons/04-04-perfect-bayesian-sequential-equilibrium.md), [4.5](../grad-game-theory/lessons/04-05-signaling-games-refinements.md) |
| Repeated games and the folk theorem (why a cartel can hold) | [grad-game-theory 3.3](../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md), [3.4](../grad-game-theory/lessons/03-04-folk-theorems.md) |
| Auction equilibrium bidding and revenue equivalence, proved | [grad-game-theory 4.2](../grad-game-theory/lessons/04-02-auctions-equilibrium-bidding.md), [4.3](../grad-game-theory/lessons/04-03-revenue-equivalence-theorem.md) |
| The revelation principle, VCG, and Myerson's optimal auction, proved | [grad-game-theory 5.2](../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md), [5.3](../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md), [5.4](../grad-game-theory/lessons/05-04-bayesian-mechanism-design-optimal-auction.md) |
| Arrow and Gibbard–Satterthwaite, proved in full | [grad-game-theory 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md) |
| The core as a cooperative-game solution concept | [grad-game-theory 6.1](../grad-game-theory/lessons/06-01-coalitional-games-core.md) |
| Lyapunov functions and $\dot V<0$ stability arguments (tâtonnement) | [dynamical-systems 2.2](../dynamical-systems/lessons/02-02-lyapunov-functions.md) |
| **Gap:** the implicit function theorem, which is what guarantees a differentiable $x^{*}(\theta)$ before you differentiate a value function | *no course in this library derives it yet* — the nearest home is [real-analysis 6.1](../real-analysis/lessons/06-01-the-derivative-rigorously.md) |

## Pitfalls

### Curvature and optimization

- Concavity needs $H$ negative **semi**definite, not definite; negative definite is the stronger prize that buys a *unique* maximizer. *([1.1](lessons/01-01-convexity-concavity-quasiconcavity.md))*
- The leading-principal-minor test certifies definiteness only — for semidefiniteness you must check **all** principal minors. *([1.1](lessons/01-01-convexity-concavity-quasiconcavity.md))*
- Quasiconcavity does **not** make a critical point a maximum ($x^3$ on $\mathbb{R}$); it makes the maximizer set convex and, on a convex feasible set, the constrained optimum global. *([1.1](lessons/01-01-convexity-concavity-quasiconcavity.md))*
- Stationarity — $\nabla f=0$, or the tangency $\nabla f=\lambda\nabla g$ — holds at maxima, minima, **and** saddles alike. Never report a Lagrange solution as "the max" without curvature or global concavity. *([1.2](lessons/01-02-unconstrained-equality-constrained-optimization.md))*
- A KKT point is the global max only under concave objective **and** convex feasible set; maximize a *convex* function on a convex set and the interior KKT point is the *minimum*, with the true max at a corner. *([1.3](lessons/01-03-inequality-constraints-kuhn-tucker.md))*
- A slack constraint's multiplier is exactly zero, and every multiplier is $\ge0$ — a negative $\lambda$ means a sign convention went backwards. Guessing which constraints bind is fine; skipping the verification is not. *([1.3](lessons/01-03-inequality-constraints-kuhn-tucker.md))*
- Necessity of KKT needs a constraint qualification: without one, a genuine maximum can fail to be a KKT point at all ($\max x$ s.t. $x^3\le0$). *([1.3](lessons/01-03-inequality-constraints-kuhn-tucker.md))*
- Topkis needs a **lattice and complementarity**, not concavity — and the conclusion's direction flips if you re-order the choice set. *([1.5](lessons/01-05-monotone-comparative-statics-dynamic-programming.md))*
- The Bellman contraction hinges on $\beta<1$; at $\beta=1$ the operator need not contract and a unique bounded value function need not exist. *([1.5](lessons/01-05-monotone-comparative-statics-dynamic-programming.md))*

### Value functions and duality

- The envelope shortcut works **only** at an interior optimum where the first-order condition holds — at a corner or kink the indirect term is not zero. *([1.4](lessons/01-04-envelope-theorem-duality.md))*
- $dV/d\theta$ is already a *total* derivative; don't "add back" the re-optimization term you just proved was zero. *([1.4](lessons/01-04-envelope-theorem-duality.md))*
- Multipliers carry units — utils per dollar, output per unit of resource. A factor-of-$k$ surprise is usually a units mismatch between differently scaled constraints. *([1.4](lessons/01-04-envelope-theorem-duality.md))*
- $e$ and $c$ are **concave** in prices, not convex: the agent substitutes away from what got dear, so the bill rises more slowly than the naive fixed-bundle line. Getting the sign backwards flips the compensated law of demand. *([2.3](lessons/02-03-expenditure-minimization-duality.md), [3.2](lessons/03-02-cost-minimization.md))*
- $\pi$ is **convex** in prices — the mirror image, because it's a max rather than a min. Hence PSD profit Hessian versus NSD Slutsky matrix. *([3.3](lessons/03-03-profit-maximization-supply.md))*
- Homogeneity degrees differ between a value function and its derivative: $e$ is degree 1 in $p$ while $h=\partial e/\partial p$ is degree 0. *([2.3](lessons/02-03-expenditure-minimization-duality.md))*
- Shephard's lemma needs differentiability: at a kink (perfect substitutes at the switching price) the derivative and the substitution matrix simply don't exist. *([3.2](lessons/03-02-cost-minimization.md))*

### Preferences and demand

- A utility number measures *order*, not intensity: "$A$ is twice as good" is meaningless, and any strictly increasing relabel is an equally valid utility. Cardinality returns only under the vNM axioms. *([2.1](lessons/02-01-preferences-utility-representation.md), [2.5](lessons/02-05-choice-under-uncertainty.md))*
- "Continuous preferences" is a closedness condition on contour sets — it neither requires nor implies smooth indifference curves (Leontief is continuous and kinked). *([2.1](lessons/02-01-preferences-utility-representation.md))*
- Completeness is a strong behavioural assumption, not a free one: it forbids "I can't compare these". *([2.1](lessons/02-01-preferences-utility-representation.md))*
- **Local nonsatiation**, not strong monotonicity, is the workhorse — it is exactly what Walras' law and the First Welfare Theorem need. Without it the budget can fail to bind. *([2.1](lessons/02-01-preferences-utility-representation.md), [2.2](lessons/02-02-utility-maximization-marshallian-demand.md))*
- Scaling all prices *and* income changes nothing (degree-zero homogeneity, no money illusion) — real income changes come from prices and income moving *differently*. *([2.2](lessons/02-02-utility-maximization-marshallian-demand.md), [4.2](lessons/04-02-edgeworth-box-walrasian-equilibrium.md))*
- Roy's identity carries a **minus sign**: $\partial V/\partial p_i\le0$ and $\partial V/\partial m>0$, so the raw ratio is negative. *([2.2](lessons/02-02-utility-maximization-marshallian-demand.md))*
- Hicksian demand is **not observable** — it holds utility fixed, and utility is unmeasured. Shops see Marshallian demand; the two agree only at the reference point $m=e(p,\bar u)$. *([2.3](lessons/02-03-expenditure-minimization-duality.md))*
- In the Slutsky equation the income term is scaled by $x_j$ — the good whose *price moved* — not $x_i$. Own-price problems hide the error. *([2.4](lessons/02-04-slutsky-equation-comparative-statics.md))*
- Own-*substitution* effects are always $\le0$; own-*Marshallian* effects need not be (Giffen). "Demand curves slope down" is a fact about compensated demand. *([2.4](lessons/02-04-slutsky-equation-comparative-statics.md))*
- $S$ is negative **semi**definite with $\det S=0$ in the two-good case — expecting a strictly negative determinant makes you reject valid data. *([2.4](lessons/02-04-slutsky-equation-comparative-statics.md))*
- Consumer surplus is exact welfare only under quasilinearity; otherwise use compensating/equivalent variation, and remember $PS=\pi+F$ is not profit unless fixed cost is zero. *([4.1](lessons/04-01-partial-equilibrium-surplus.md))*

### Risk

- The vNM index is **cardinal**: only positive affine maps $au+b$ preserve the expected-utility form. Applying $\sqrt{\cdot}$ or squaring creates a *different agent*, which is why $A=-u''/u'$ and not raw $u''$ is the measure. *([2.5](lessons/02-05-choice-under-uncertainty.md))*
- Completeness, transitivity, and continuity are mild; **independence** is the load-bearing, empirically violated one (Allais). *([2.5](lessons/02-05-choice-under-uncertainty.md))*
- Concavity of $u$ *is the definition* of risk aversion, not evidence of irrationality — and it forces $\pi\ge0$ always. The $\pi\approx\tfrac12A\sigma^2$ approximation is only good for genuinely small risks. *([2.5](lessons/02-05-choice-under-uncertainty.md))*
- Equal means plus more spread is an **SOSD**, not an FOSD, ranking — it persuades risk-averse agents only. *([2.5](lessons/02-05-choice-under-uncertainty.md))*

### Revealed preference

- "Revealed preferred" needs affordability **plus** choice, never cheapness alone; a bundle costing exactly $m^t$ still counts as affordable. *([2.6](lessons/02-06-revealed-preference.md))*
- With three or more goods, WARP on every pair does not prevent a 3-cycle — Afriat needs SARP/GARP. *([2.6](lessons/02-06-revealed-preference.md))*
- Afriat gives *a* concave rationalizing utility, not *the* preferences; finite data pin utility down only on the observed bundles, and continuity/concavity/monotonicity are free gifts no dataset can falsify. *([2.6](lessons/02-06-revealed-preference.md))*

### Producer theory

- Returns to scale (global, all inputs together) is a different question from diminishing marginal product (local, one input): Cobb–Douglas with $a=b=0.6$ has increasing returns and diminishing marginal products. *([3.1](lessons/03-01-production-sets-technology.md))*
- $\mathrm{MRTS}_{12}=MP_1/MP_2$ — the subscripts order the ratio, and it is the *negative* of the isoquant slope. Flipping it inverts every tangency downstream. *([3.1](lessons/03-01-production-sets-technology.md))*
- Free disposal, no free lunch, and inaction are modelling **choices** to verify against a given $Y$, not theorems. And in $Y$ inputs are *negative* — mixing netput and production-function conventions mid-calculation guarantees a sign error. *([3.1](lessons/03-01-production-sets-technology.md))*
- Conditional factor demand $x(w,q)$ answers "cheapest way to make $q$" for every hypothetical $q$ — it is not what the firm actually hires until output is chosen in [3.3](lessons/03-03-profit-maximization-supply.md). Cost is homogeneous of degree 1 in $w$, **not** in $q$. *([3.2](lessons/03-02-cost-minimization.md))*
- $p=MC$ needs *rising* $MC$ there, and $p$ above minimum average variable cost. With constant returns supply is a correspondence and profit is zero; with increasing returns no finite optimum exists. *([3.3](lessons/03-03-profit-maximization-supply.md))*
- Add supply curves **horizontally** (vertical summation is for public goods), expect kinks and jumps at entry prices, and don't carry the clean producer aggregation over to demand — the representative firm is an as-if device, and consumers get no equivalent. *([3.4](lessons/03-04-aggregation-and-the-firm.md), [6.4](lessons/06-04-public-goods.md))*

### General equilibrium and welfare

- Only price *ratios* are determined — normalize (set a numéraire or use the simplex) before "solving", or you chase a free parameter forever. *([4.2](lessons/04-02-edgeworth-box-walrasian-equilibrium.md), [4.3](lessons/04-03-existence-walrasian-equilibrium.md))*
- Walras' law makes one market redundant: with $L$ goods you solve $L-1$ independent clearing equations. *([4.2](lessons/04-02-edgeworth-box-walrasian-equilibrium.md))*
- $\mathrm{MRS}_A=\mathrm{MRS}_B$ characterizes efficiency only for *interior*, *convex* cases; at a boundary it softens to an inequality (Kuhn–Tucker), and without convexity a tangency can be the worst mutual point. *([4.2](lessons/04-02-edgeworth-box-walrasian-equilibrium.md))*
- The endowment picks *which* efficient point the market reaches — a planner may choose any point on the contract curve, the market may not. *([4.2](lessons/04-02-edgeworth-box-walrasian-equilibrium.md))*
- Equilibrium requires $z(p^{*})\le0$, not $=0$: a good in genuine excess supply is allowed only if it is free. With positive prices and local nonsatiation, Walras' law forces exact clearing anyway. *([4.3](lessons/04-03-existence-walrasian-equilibrium.md))*
- Continuity of $z$ is the load-bearing hypothesis and it needs *strictly* convex preferences; a nonconvexity can make $z$ jump and destroy existence outright. *([4.3](lessons/04-03-existence-walrasian-equilibrium.md))*
- The first welfare theorem needs **only** local nonsatiation — kinks and nonconvexities don't touch it. Convexity is the *second* theorem's requirement, and dropping it can leave efficient points no price supports. *([4.4](lessons/04-04-two-welfare-theorems.md))*
- "Supported with transfers" is not "is the equilibrium of the original endowments": prices alone cannot slide the outcome along the contract curve, wealth must move — and lump-sum transfers require *observing types*. *([4.4](lessons/04-04-two-welfare-theorems.md))*
- Efficient $\neq$ fair: "one person owns everything" is Pareto efficient. All distributional content lives in the transfers. *([4.4](lessons/04-04-two-welfare-theorems.md))*
- A blocking coalition may use only **its own** pooled endowment. Individually rational + Pareto efficient is necessary but not sufficient for the core, and core $=$ Walrasian only in the replication limit. *([4.5](lessons/04-05-core-and-equivalence.md))*
- Existence $\not\Rightarrow$ uniqueness $\not\Rightarrow$ stability; gross substitutes is sufficient, not necessary; and tâtonnement is a fable in which no trade happens out of equilibrium. *([4.6](lessons/04-06-uniqueness-stability-failure.md))*

### Information

- Adverse selection is hidden **type** (fixed before contracting); moral hazard is hidden **action** (chosen after). Screening and signaling fight the first, incentive schemes the second — confusing them is the module's classic error. *([5.1](lessons/05-01-adverse-selection-lemons.md), [5.4](lessons/05-04-moral-hazard-principal-agent.md))*
- Willingness to pay depends on $\mathbb{E}[q\mid q\le p]$, the mean of the **offered** pool, never the population mean — and mutual gains from trade at every quality still don't guarantee any trade. *([5.1](lessons/05-01-adverse-selection-lemons.md))*
- A signal works because it is *differentially* costly, not merely costly: equal marginal costs kill single crossing and no separation exists. *([5.2](lessons/05-02-signaling.md))*
- Off-path beliefs are unconstrained by Bayes' rule, so signaling games have a continuum of equilibria — never report "the" equilibrium without naming the refinement. And a wage premium for a degree is consistent with schooling that teaches nothing. *([5.2](lessons/05-02-signaling.md))*
- Screening: only **two** constraints bind (IR of the low type, IC of the high type) — imposing all four over-determines the problem. *([5.3](lessons/05-03-screening.md))*
- "No distortion at the top" means *only* the top: every other type is distorted downward, and the rent goes to the informationally advantaged high type, not to whoever you'd pity. *([5.3](lessons/05-03-screening.md))*
- Competitive screening may have **no** equilibrium at all (Rothschild–Stiglitz cream-skimming), so don't assume a separating menu exists in a competitive market. *([5.3](lessons/05-03-screening.md))*
- In moral hazard it is **IC** that forces the wage spread; IR only sets the level. With a risk-neutral agent the agency cost is zero — all of it is a risk premium. And pay on any signal informative about effort, not on output alone. *([5.4](lessons/05-04-moral-hazard-principal-agent.md))*
- The revelation principle is about what's *achievable*, not what real markets should look like; DSIC is strictly stronger than BIC; efficiency (VCG) and revenue maximization (Myerson) are different objectives; and VCG can run a deficit and be gamed by coalitions. *([5.5](lessons/05-05-mechanism-design-markets.md))*

### Market power and market failure

- $MR<p$ for a monopolist — the gap is the markdown eaten on every inframarginal unit. For linear demand, $MR$ has the same intercept and **double** the slope. And keep the absolute value: the markup is $1/\lvert\varepsilon\rvert$, which forces $\lvert\varepsilon\rvert>1$ at the optimum. *([6.1](lessons/06-01-monopoly-price-discrimination.md))*
- Market power is not inherently inefficient: *perfect* price discrimination produces the efficient quantity with zero deadweight loss — and zero consumer surplus. Inefficiency is a feature of *uniform* pricing. *([6.1](lessons/06-01-monopoly-price-discrimination.md))*
- Third-degree discrimination needs **no arbitrage** between segments; allow resale and a single price re-emerges. *([6.1](lessons/06-01-monopoly-price-discrimination.md))*
- What firms compete *in* matters as much as how many there are: Cournot lands between monopoly and competition, Bertrand jumps straight to marginal-cost pricing with two firms. The Bertrand paradox needs homogeneous goods and no capacity limits. *([6.2](lessons/06-02-oligopoly.md))*
- The Stackelberg advantage is **commitment**, not timing — if the follower doubts the leader's output is irreversible, you are back at Cournot. *([6.2](lessons/06-02-oligopoly.md))*
- The Pigouvian tax is $\mathrm{MED}(q^{*})$, the damage at the *efficient* quantity; taxing at the private-quantity damage overshoots when marginal damage rises. *([6.3](lessons/06-03-externalities-coase-theorem.md))*
- Coase says the assignment of rights doesn't matter *for efficiency* — it fully determines who ends up richer. And nobody in an externality model is behaving irrationally; the price system is incomplete, which is why the cure is a price or a market. *([6.3](lessons/06-03-externalities-coase-theorem.md))*
- For a public good the efficiency condition is $\sum_i\mathrm{MRS}_i=\mathrm{MRT}$ — setting *your own* MRS equal to MRT is precisely the free-rider's mistake. Free-riding is individually optimal, not irrational. *([6.4](lessons/06-04-public-goods.md))*
- Non-rival and non-excludable are independent axes, and "public good" is a property of the *good*, not of who pays for it. Lindahl prices require truthful revelation everyone gains by refusing. *([6.4](lessons/06-04-public-goods.md))*
- Arrow does not say voting is useless — it says no rule satisfies all four axioms at once, and rules differ in *which* they sacrifice. It applies only to ordinal, interpersonally non-comparable preferences; cardinal comparable utility escapes by violating IIA. *([6.5](lessons/06-05-social-choice-welfare.md))*
- A Condorcet cycle is a real failure of majority rule, not an arithmetic glitch — recounting won't fix it, and single-peakedness is what rules it out. *([6.5](lessons/06-05-social-choice-welfare.md))*

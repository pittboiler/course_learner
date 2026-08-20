# Grad Game Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is one long argument in four movements: *equilibria exist* (convexity
→ correspondences → fixed points), *which equilibria survive scrutiny* (the
refinement ladder, from subgame perfection down to the intuitive criterion),
*what repetition and private information make possible* (folk theorems, auctions,
revenue equivalence), and *how to build a game that produces the outcome you want*
(the revelation principle, VCG, Myerson, and the walls those hit). The card is a
lookup surface for the hypotheses — which theorem needs compactness, which needs
convex *values*, which needs full dimensionality — because at this level the
hypotheses are the content.

**The undergraduate solution-concept ladder is not repeated here.** Dominance,
IESDS, best response, Nash, subgame, non-credible threat, minmax, types, common
prior, separating vs pooling, single crossing, the 2×2 zoo, and the Cournot /
Bertrand / Stackelberg formula sheet all live on the
[game-theory-refresher card](../game-theory-refresher/reference.md) — start there
and come back here for the graduate machinery.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\Delta(S_i)$, $\Delta_m$ | the simplex of mixed strategies over $S_i$ (or over $m$ pure actions) — a compact convex set whose corners are the pure strategies | [1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md) |
| $\operatorname{conv}(S)$ | convex hull — everything you can build by averaging points of $S$ (shrink-wrap $S$) | [1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md) |
| $a\cdot x = c$ | a hyperplane with normal $a$ — the flat wall that separates two convex bodies | [1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md) |
| $\varphi : X \rightrightarrows Y$ | a **correspondence**: each input gets a whole *set* of outputs (double arrow, not single) | [1.2](lessons/01-02-correspondences-berge-maximum-theorem.md) |
| $\operatorname{Gr}(\varphi)$ | the graph $\{(x,y) : y\in\varphi(x)\}$ — a region in the product, not a curve | [1.2](lessons/01-02-correspondences-berge-maximum-theorem.md) |
| $V(\theta)$, $x^{*}(\theta)$ | the value function and the argmax correspondence of a parameterized maximization | [1.2](lessons/01-02-correspondences-berge-maximum-theorem.md) |
| $x^{\top}\!Ay$ | expected payoff of a zero-sum game: row mixes $x$, column mixes $y$, column pays row | [1.4](lessons/01-04-zero-sum-minimax-lp-duality.md) |
| $u(x)$ vs $U(L)$ | the **Bernoulli index** on outcomes vs the expected utility of a *lottery*, $U(L)=\sum_i p_i u(x_i)$ | [1.5](lessons/01-05-expected-utility-vnm-axioms.md) |
| $CE$, $\pi$, $A(x)$ | certainty equivalent, risk premium $\mathbb{E}[x]-CE$, Arrow–Pratt coefficient $-u''/u'$ | [1.5](lessons/01-05-expected-utility-vnm-axioms.md) |
| $s_{-i}$, $\sigma_{-i}$ | "everyone except $i$" — the others' pure profile / mixed profile | [2.1](lessons/02-01-normal-form-dominance-rationalizability.md) |
| $\mathrm{BR}_i(\sigma_{-i})$ | the best-response **set** (never a point when there's a tie) | [2.2](lessons/02-02-nash-equilibrium-mixed-strategies.md) |
| $\operatorname{supp}(\sigma_i)$ | the actions $i$ actually plays with positive probability | [2.2](lessons/02-02-nash-equilibrium-mixed-strategies.md) |
| $p(s)$ | in Module 2, a **joint** distribution over full action profiles — the correlating device | [2.5](lessons/02-05-correlated-equilibrium.md) |
| $\mathcal{I}_i$, $I$ | player $i$'s information sets, and one of them — the nodes $i$ cannot tell apart | [3.1](lessons/03-01-extensive-form-behavior-strategies.md) |
| $\beta_i(\cdot\mid I)$ | a **behavior strategy**: a fresh independent randomization at each information set | [3.1](lessons/03-01-extensive-form-behavior-strategies.md) |
| $\delta$, $\delta^{*}$ | discount factor (or continuation probability), and the critical value above which cooperation holds | [3.3](lessons/03-03-repeated-games-finite-infinite.md) |
| $\underline{v}_i$ | player $i$'s **minmax** value — the floor the others can hold $i$ to | [3.4](lessons/03-04-folk-theorems.md) |
| $\mathcal{V}$ | the feasible set $\operatorname{conv}\{u(a) : a\in A\}$ of long-run payoff vectors | [3.4](lessons/03-04-folk-theorems.md) |
| $(S,d)$ | a bargaining problem: feasible utility pairs $S$ and the disagreement point $d$ | [3.5](lessons/03-05-bargaining.md) |
| $\theta_i$, $\Theta_i$, $p$ | a type, its type set, and the common prior over type profiles | [4.1](lessons/04-01-bayesian-games-bayes-nash.md) |
| $b(v)$ | equilibrium bid as a function of your private value | [4.2](lessons/04-02-auctions-equilibrium-bidding.md) |
| $Q(v)$, $m(v)$, $U(v)$ | **interim** win probability, expected payment, and expected surplus, all conditioned on your own value | [4.3](lessons/04-03-revenue-equivalence-theorem.md) |
| $(\sigma,\mu)$ | an **assessment**: strategies *plus* a belief system $\mu(\cdot\mid I)$ over the nodes of each information set | [4.4](lessons/04-04-perfect-bayesian-sequential-equilibrium.md) |
| $\succ_i$, $\succ_F$ | agent $i$'s strict ranking, and the social ranking a social welfare function returns | [5.1](lessons/05-01-social-choice-impossibility.md) |
| $f : \Theta \to X$ | a social choice function — the outcome the designer wants at each type profile | [5.2](lessons/05-02-revelation-principle-incentive-compatibility.md) |
| $t_i$, $h_i(\hat v_{-i})$ | agent $i$'s payment, and the Groves baseline that must not depend on $i$'s own report | [5.3](lessons/05-03-dominant-strategy-mechanisms-vcg.md) |
| $\psi_i(v)$, $r^{*}$ | virtual valuation $v-\frac{1-F_i(v)}{f_i(v)}$, and the reserve price solving $\psi(r^{*})=0$ | [5.4](lessons/05-04-bayesian-mechanism-design-optimal-auction.md) |
| $v$, $c$ | in bilateral trade, the buyer's value and the seller's cost — both private | [5.5](lessons/05-05-limits-of-efficient-design.md) |
| $v(S)$, $2^N$ | the characteristic function of a coalition, over the $2^{n}$ subsets of players | [6.1](lessons/06-01-coalitional-games-core.md) |
| $C(v)$, $\lambda_S$ | the core, and the balancing weights that certify it empty or not | [6.1](lessons/06-01-coalitional-games-core.md) |
| $\varphi_i(v)$ | in Module 6, the **Shapley value** of player $i$ (not a correspondence) | [6.2](lessons/06-02-shapley-value.md) |
| $\mu$, $\mu(m)$ | in Module 6, a **matching** and the partner it assigns to $m$ (not a belief) | [6.3](lessons/06-03-stable-matching-market-design.md) |
| $x$, $\dot x_i$ | a population **state** (strategy frequencies) and its replicator growth rate | [6.4](lessons/06-04-evolutionary-game-theory.md) |
| $R_i^{T}$, $z_T$ | external regret after $T$ rounds, and the empirical distribution of joint play | [6.5](lessons/06-05-learning-nash-program.md) |

**Three collisions to keep straight:** $v$ is the zero-sum *value* in 1.4, a
*characteristic function* in 6.1, and a *buyer's value* in 4.2–5.5; $\varphi$ is a
correspondence in Module 1 and the Shapley value in 6.2; $\mu$ is a belief system
in 4.4–4.5 and a matching in 6.3. Context, not the letter, disambiguates.

## Definitions

### Convex set

Whenever two points are in it, the whole segment joining them is too — no dents,
no holes. Mixed strategies form one; that is why fixed-point theorems apply.

$$x,y\in C,\ \lambda\in[0,1] \implies \lambda x + (1-\lambda)y \in C$$

*Introduced:* [1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md)

### Convex function

The graph never rises above its own chords (a valley that holds water); concave
is the upside-down version. **Different object from a convex set** — the bridge is
that $f$ is convex exactly when its epigraph $\{(x,t) : t\ge f(x)\}$ is a convex set.

$$f(\lambda x + (1-\lambda)y) \le \lambda f(x) + (1-\lambda)f(y)$$

*Introduced:* [1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md)

### Extreme point

A genuine corner: a point of $C$ that is *not* a nontrivial average of two other
points of $C$. Krein–Milman: a compact convex set is the hull of its extreme
points, and the simplex's extreme points are exactly the **pure strategies**.

*Introduced:* [1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md)

### Correspondence

A map that returns a *set* instead of a point — what "best response" really is,
because a tie makes every mixture of the tied actions optimal.

$$\varphi : X \rightrightarrows Y, \qquad \operatorname{Gr}(\varphi)=\{(x,y): y\in\varphi(x)\}$$

*Introduced:* [1.2](lessons/01-02-correspondences-berge-maximum-theorem.md)

### Upper hemicontinuity

The output set can't bulge outward in the limit: draw any open pouch around
$\varphi(x_0)$ and all nearby output sets fit inside it. This is the good behavior
optimization gives you for free.

$$\forall\, \text{open } V\supseteq\varphi(x_0)\ \exists\, U\ni x_0:\ \varphi(x)\subseteq V\ \ \forall x\in U$$

*Introduced:* [1.2](lessons/01-02-correspondences-berge-maximum-theorem.md)

### Lower hemicontinuity

The output set can't implode: every point of $\varphi(x_0)$ is approachable by
choices from nearby sets. Independent of uhc — an argmax is typically uhc and
*not* lhc. **Continuous** means both.

*Introduced:* [1.2](lessons/01-02-correspondences-berge-maximum-theorem.md)

### Closed graph

No sequence riding along the graph converges off it: limits of best choices are
best choices. When the range sits in a compact set this is *equivalent* to uhc
with closed values — and it is exactly Kakutani's third hypothesis.

$$x_n\to x_0,\ y_n\in\varphi(x_n),\ y_n\to y_0 \implies y_0\in\varphi(x_0)$$

*Introduced:* [1.2](lessons/01-02-correspondences-berge-maximum-theorem.md)

### Value of a zero-sum game

The one number both players can guarantee once they may randomize: the row's best
floor and the column's best ceiling meet there. The pair attaining it is a
**saddle point**.

$$x^{\top}\!Ay^{*} \le v \le (x^{*})^{\top}\!Ay \quad \text{for all } x\in\Delta_m,\ y\in\Delta_n$$

*Introduced:* [1.4](lessons/01-04-zero-sum-minimax-lp-duality.md)

### Bernoulli index

The number $u$ pinned on each *outcome*, whose probability-weighted average scores
a lottery. **Cardinal**: unique only up to $\tilde u = a\,u + b$ with $a>0$, so
differences and ratios carry real information — unlike ordinal consumer utility.

$$U(L)=\sum_i p_i\,u(x_i)$$

*Introduced:* [1.5](lessons/01-05-expected-utility-vnm-axioms.md)

### Certainty equivalent

The sure amount you'd swap the gamble for; the gap to the gamble's expected money
is the **risk premium**, and it is positive exactly when $u$ is concave.

$$u(CE)=\mathbb{E}[u(x)], \qquad \pi = \mathbb{E}[x]-CE$$

*Introduced:* [1.5](lessons/01-05-expected-utility-vnm-axioms.md)

### Mixed dominator

A strategy can be strictly beaten by a *mixture* of your other strategies even
when no single pure strategy beats it. "Dominated" quantifies over $\Delta(S_i)$,
not $S_i$ — checking pure alternatives only is the classic IESDS error.

$$u_i(\sigma_i, s_{-i}) > u_i(s_i, s_{-i}) \quad \text{for all } s_{-i}\in S_{-i}$$

*Introduced:* [2.1](lessons/02-01-normal-form-dominance-rationalizability.md)

### Best-response set (rationalizability, graduate form)

The rationalizable set is the largest product set $B=\prod_i B_i$ in which every
$s_i\in B_i$ is a best response to *some* belief supported on $B_{-i}$. Standard
rationalizability restricts to **independent** beliefs; with three or more players
that can make it strictly smaller than the IESDS survivors, which allow
**correlated** beliefs. With two players the two coincide.

*Introduced:* [2.1](lessons/02-01-normal-form-dominance-rationalizability.md)

### Correlated equilibrium

A joint distribution over *profiles* that a trusted device draws from, whispering
each player only their own coordinate — and obeying is optimal given what the
whisper tells you about everyone else. The constraints are **linear in $p$**,
which is why the whole set is a polytope.

$$\sum_{s_{-i}} p(s_i,s_{-i})\big[u_i(s_i,s_{-i}) - u_i(s_i',s_{-i})\big] \ \ge\ 0 \quad \forall i,\ s_i,\ s_i'$$

*Introduced:* [2.5](lessons/02-05-correlated-equilibrium.md)

### Behavior strategy

Carry one plan and flip an independent coin at each information set, instead of
drawing one complete plan up front (a mixed strategy). Kuhn's theorem says the
two are outcome-equivalent **under perfect recall**.

$$\beta_i : \mathcal{I}_i \to \Delta(A(I)), \qquad \beta_i(\cdot\mid I)\ \text{independent across } I$$

*Introduced:* [3.1](lessons/03-01-extensive-form-behavior-strategies.md)

### Perfect recall

You never forget your own past actions or anything you once knew: within any
information set of yours, your own earlier information sets and choices are
identical. Note this is *not* the same as perfect information — most games have
imperfect information and perfect recall.

*Introduced:* [3.1](lessons/03-01-extensive-form-behavior-strategies.md)

### Subgame

A self-contained game hanging off a single decision node, containing all its
descendants and **slicing no information set** — if it holds one node of a set it
holds them all. In perfect-information games every node starts one; with
non-singleton information sets there may be no proper subgame at all.

*Introduced:* [3.2](lessons/03-02-backward-induction-subgame-perfection.md)

### Minmax value

The floor the pack can hold you to: the *others move first*, choosing the profile
that boxes you in, and then you best-respond. The operator order is not
negotiable, and the minimizers may need to **mix** to achieve it.

$$\underline{v}_i = \min_{\sigma_{-i}}\ \max_{a_i}\ u_i(a_i,\sigma_{-i})$$

*Introduced:* [3.4](lessons/03-04-folk-theorems.md)

### Feasible and strictly individually rational

Achievable long-run payoffs are the *convex hull* of the stage outcome vectors —
the interior needs time-averaging or a public coin, no single outcome sits there.
"Strictly individually rational" means strictly above every player's minmax.

$$\mathcal{V}=\operatorname{conv}\{u(a): a\in A\}, \qquad v_i > \underline{v}_i \ \ \forall i$$

*Introduced:* [3.4](lessons/03-04-folk-theorems.md)

### Assessment

The equilibrium object once information is incomplete: strategies **and** a belief
system, proposed together and checked together. You do not find the strategies and
read off the beliefs afterward.

$$(\sigma,\mu), \qquad \mu(\cdot\mid I)\in\Delta(I)\ \text{for every information set } I$$

*Introduced:* [4.4](lessons/04-04-perfect-bayesian-sequential-equilibrium.md)

### Sequential rationality

At **every** information set — reached or not — the mover maximizes expected
payoff given her belief there and the others' strategies. This is what kills empty
threats when there are no subgames to prune.

*Introduced:* [4.4](lessons/04-04-perfect-bayesian-sequential-equilibrium.md)

### Consistency (sequential equilibrium)

Off-path beliefs must be limits of honest Bayesian updates under vanishing
trembles — not arbitrary. Formally: some totally mixed $\sigma^{k}\to\sigma$ whose
Bayes beliefs $\mu^{k}\to\mu$.

*Introduced:* [4.4](lessons/04-04-perfect-bayesian-sequential-equilibrium.md)

### Equilibrium-dominated type

At an off-path message $m$, a type that could not gain from sending $m$ even under
the *most favorable* rational response the receiver could give. The Intuitive
Criterion deletes such types from the off-path belief's support.

$$u_S^{*}(\theta) \ >\ \max_{a\in \mathrm{BR}(m)} u_S(\theta,m,a)$$

*Introduced:* [4.5](lessons/04-05-signaling-games-refinements.md)

### Strategy-proof (DSIC)

Truth is a **dominant** strategy: honest reporting is optimal whatever anyone else
reports, so no beliefs, no prior, no assumption that rivals are honest.

$$u_i\big(f(\theta_i,\theta_{-i}),\theta_i\big) \ \ge\ u_i\big(f(\theta_i',\theta_{-i}),\theta_i\big) \quad \forall\, \theta_i,\theta_i',\theta_{-i}$$

*Introduced:* [5.1](lessons/05-01-social-choice-impossibility.md) *(as strategy-proofness),* [5.2](lessons/05-02-revelation-principle-incentive-compatibility.md) *(as DSIC)*

### Bayesian incentive compatible (BIC)

Truth is only a *Bayes–Nash* best reply: optimal **in expectation** over rivals'
types, and only when those rivals report honestly too. Strictly weaker than DSIC.

$$\mathbb{E}_{\theta_{-i}}\big[u_i(f(\theta_i,\theta_{-i}),\theta_i)\big] \ \ge\ \mathbb{E}_{\theta_{-i}}\big[u_i(f(\theta_i',\theta_{-i}),\theta_i)\big]$$

*Introduced:* [5.2](lessons/05-02-revelation-principle-incentive-compatibility.md)

### Individual rationality (participation)

IC keeps you honest; IR keeps you in the room. **Ex post IR** holds after all types
are revealed; **interim IR** holds when you know only your own type. A perfectly
truthful mechanism nobody would enter is not feasible.

$$\text{ex post: } u_i(f(\theta),\theta_i)\ge \bar u_i(\theta_i); \qquad \text{interim: } \mathbb{E}_{\theta_{-i}}\big[u_i(f(\theta),\theta_i)\big]\ge \bar u_i(\theta_i)$$

*Introduced:* [5.2](lessons/05-02-revelation-principle-incentive-compatibility.md)

### Quasilinear utility

Value for the outcome, minus money, on the same scale — the assumption that lets
transfers buy the cardinal information Arrow's ordinal world forbids, and the
reason VCG escapes Gibbard–Satterthwaite.

$$u_i = v_i(x) - t_i$$

*Introduced:* [5.3](lessons/05-03-dominant-strategy-mechanisms-vcg.md)

### Virtual valuation

Your value docked by the information rent the designer is forced to concede to
keep higher types honest. Read $1-F(p)$ as a demand curve and $\psi$ is literally
its **marginal revenue**.

$$\psi_i(v) = v - \frac{1-F_i(v)}{f_i(v)}$$

*Introduced:* [5.4](lessons/05-04-bayesian-mechanism-design-optimal-auction.md)

### Regularity and ironing

$F_i$ is **regular** if $\psi_i$ is (weakly) increasing — then "allocate to the
highest virtual value" is monotone in value, hence implementable. If $\psi_i$ is
non-monotone you must **iron**: replace it by its monotone hull, which pools the
offending types under a flat allocation.

*Introduced:* [5.4](lessons/05-04-bayesian-mechanism-design-optimal-auction.md)

### Budget balance

Payments net to zero — the mechanism neither burns money nor needs an outside
subsidy. VCG generically fails it (it runs a deficit in public-goods settings),
and Myerson–Satterthwaite says that failure is unavoidable, not sloppy design.

*Introduced:* [5.3](lessons/05-03-dominant-strategy-mechanisms-vcg.md), *sharpened in* [5.5](lessons/05-05-limits-of-efficient-design.md)

### Characteristic function (TU game)

The worth $v(S)$ a coalition can **guarantee itself**, independent of what
outsiders do, in a currency freely divisible among its members. Not a Nash payoff:
it does not depend on the outsiders' strategies.

$$v : 2^{N}\to\mathbb{R}, \qquad v(\varnothing)=0$$

*Introduced:* [6.1](lessons/06-01-coalitional-games-core.md)

### Imputation

A split that wastes nothing and that no individual would refuse.

$$\sum_{i\in N} x_i = v(N) \quad(\text{efficiency}), \qquad x_i \ge v(\{i\}) \quad(\text{individual rationality})$$

*Introduced:* [6.1](lessons/06-01-coalitional-games-core.md)

### Core

The splits that survive *every* huddle: no coalition, of any size, can walk out and
guarantee its members more. Individual rationality is just the singleton case.

$$C(v)=\Big\{x : \textstyle\sum_{i\in N}x_i = v(N),\ \ \sum_{i\in S}x_i \ge v(S)\ \ \forall S\subseteq N\Big\}$$

*Introduced:* [6.1](lessons/06-01-coalitional-games-core.md)

### Balanced collection

Weights $\lambda_S\ge 0$ that keep every player fully employed across overlapping
part-time coalitions. The game is **balanced** if no such fractional patchwork can
out-produce the grand coalition.

$$\sum_{S\ni i}\lambda_S = 1\ \ \forall i \qquad\text{and}\qquad \sum_{S}\lambda_S\,v(S)\ \le\ v(N)$$

*Introduced:* [6.1](lessons/06-01-coalitional-games-core.md)

### Convex (supermodular) game

Joining a bigger group is worth more — increasing returns to membership. Convex
games are always balanced, so the core is nonempty and *large*, and the Shapley
value is its barycenter.

$$v(S\cup T) + v(S\cap T) \ \ge\ v(S) + v(T)$$

*Introduced:* [6.1](lessons/06-01-coalitional-games-core.md)

### Shapley value

Your fair share is your **average marginal contribution** over all $n!$ arrival
orders. A single point (fairness), where the core is a region (stability).

$$\varphi_i(v) = \sum_{S\subseteq N\setminus\{i\}} \frac{|S|!\,(n-|S|-1)!}{n!}\big[v(S\cup\{i\}) - v(S)\big]$$

*Introduced:* [6.2](lessons/06-02-shapley-value.md)

### Blocking pair and stable matching

Two agents not matched to each other who *both* prefer each other to their current
partners — one-sided longing is not a block. A matching with no blocking pair is
**stable**, and stability is exactly the core of the matching game.

$$w \succ_m \mu(m) \quad\text{and}\quad m \succ_w \mu^{-1}(w)$$

*Introduced:* [6.3](lessons/06-03-stable-matching-market-design.md)

### Evolutionarily stable strategy (ESS)

A population mix that repels any small band of mutants: either the incumbent beats
the mutant at the incumbent's own game, or it ties there and beats the mutant
*against the mutants*.

$$\text{(i)}\ u(x^{*},x^{*}) > u(y,x^{*}) \quad\text{or}\quad \text{(ii)}\ u(x^{*},x^{*}) = u(y,x^{*})\ \text{and}\ u(x^{*},y) > u(y,y)$$

*Introduced:* [6.4](lessons/06-04-evolutionary-game-theory.md)

### Replicator dynamics

Strategies earning above the population average grow; below it, shrink. Nobody
optimizes — it is pure bookkeeping on frequencies.

$$\dot x_i = x_i\big[(Ax)_i - x^{\top}\!Ax\big]$$

*Introduced:* [6.4](lessons/06-04-evolutionary-game-theory.md)

### External regret

How much you wish, in hindsight, that you'd played one *fixed* action the whole
time. An algorithm is **no-regret** if this vanishes against *any* opponent
sequence whatsoever.

$$R_i^{T} = \max_{a_i}\frac{1}{T}\sum_{t=1}^{T}u_i(a_i,a_{-i}^{t}) \;-\; \frac{1}{T}\sum_{t=1}^{T}u_i(a_i^{t},a_{-i}^{t})$$

*Introduced:* [6.5](lessons/06-05-learning-nash-program.md)

### Internal (swap) regret

The stronger promise: whenever you played $a$, you don't wish you'd played $a'$
instead *on exactly those rounds*. Vanishing internal regret is what pins the
empirical play down to the correlated-equilibrium polytope rather than the larger
coarse set.

*Introduced:* [6.5](lessons/06-05-learning-nash-program.md)

### Nash program

The standard of explanation demanding that every *cooperative* solution concept be
rebuilt as the equilibrium of an explicit *strategic* game. An agenda, not a single
theorem — Rubinstein's alternating offers implementing the Nash bargaining solution
is its flagship success.

*Introduced:* [6.5](lessons/06-05-learning-nash-program.md)

## Formulas and rules

### Existence theorems, with exact hypotheses

The spine of Module 1. Read the "breaks if you drop" column — at this level the
hypotheses *are* the theorem.

| Theorem | Hypotheses | Conclusion | Breaks if you drop |
|---|---|---|---|
| **Weierstrass** | $f$ continuous on a nonempty **compact** set | the max is attained | compactness → argmax empty (name-the-larger-integer) |
| **Separating hyperplane** | $A,B$ nonempty **disjoint convex**, $A$ **compact**, $B$ closed | $\exists\, a\neq 0,\ c$ with $a\cdot x \le c \le a\cdot y$, and it can be made strict | compactness → only non-strict separation (half-plane vs. region above a hyperbola) |
| **Supporting hyperplane** | $x_0$ a boundary point of convex $C$ | $a\cdot x \le a\cdot x_0$ for all $x\in C$ | convexity |
| **Berge's maximum** | $f$ **jointly continuous**; $C:\Theta\rightrightarrows X$ **continuous** (uhc *and* lhc), **compact-** and **nonempty-valued** | $V$ continuous; $x^{*}$ nonempty-, compact-valued, **uhc** | lhc of $C$ → the *value* can jump; note $x^{*}$ is never promised lhc |
| **Brouwer** | $K\subseteq\mathbb{R}^n$ nonempty **compact convex**; $f:K\to K$ **continuous** | some $x^{*}=f(x^{*})$ | compact → $x\mapsto x+1$ on $\mathbb{R}$; convex → $90^\circ$ rotation of a circle; continuous → a jump map on $[0,1]$ |
| **Kakutani** | same $K$; $\varphi:K\rightrightarrows K$ **nonempty-valued**, **convex-valued**, **closed graph** | some $x^{*}\in\varphi(x^{*})$ | convex values → $x\mapsto\{-\operatorname{sign}(x)\}$ leaps the diagonal |
| **Nash (1950)** | a **finite** normal-form game | at least one mixed-strategy equilibrium | finiteness (or the substitute below) |
| **Debreu–Fan–Glicksberg** | each $S_i$ **compact convex** in $\mathbb{R}^k$; each $u_i$ **continuous** and **quasiconcave in own $s_i$** | a pure-strategy equilibrium exists | continuity → Bertrand with tie-splitting; you cannot drop any of the three |

*From* [1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md), [1.2](lessons/01-02-correspondences-berge-maximum-theorem.md), [1.3](lessons/01-03-brouwer-kakutani-fixed-points.md), [2.3](lessons/02-03-existence-of-nash-equilibrium.md)

### The Kakutani application template

Memorize this — every equilibrium existence proof in economics is this list, with
one map swapped out.

1. **Domain.** $K=\prod_i \Delta(S_i)$, a product of simplices: nonempty, compact, convex ([1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md)).
2. **Map.** $\varphi(\sigma)=\prod_i \mathrm{BR}_i(\sigma_{-i})$ with $\mathrm{BR}_i(\sigma_{-i})=\arg\max_{\sigma_i} U_i(\sigma_i,\sigma_{-i})$.
3. **Nonempty-valued.** $U_i$ continuous, $\Delta(S_i)$ compact → Weierstrass.
4. **Convex-valued.** $U_i$ is **linear** in own mix, so the maximizers form a *face* of the simplex — precisely $\{\sigma_i : \operatorname{supp}(\sigma_i)\subseteq B_i(\sigma_{-i})\}$.
5. **Closed graph.** $\mathrm{BR}_i$ is an argmax of a continuous payoff over a compact set → uhc with closed values by **Berge**; products of closed-graph correspondences have closed graph.
6. **Conclude.** $\sigma^{*}\in\varphi(\sigma^{*})$ is a Nash equilibrium. Swap step 2 for the excess-demand map and you get [Walrasian existence](../grad-micro/lessons/04-03-existence-walrasian-equilibrium.md) instead.

*From* [1.3](lessons/01-03-brouwer-kakutani-fixed-points.md) *and* [2.3](lessons/02-03-existence-of-nash-equilibrium.md)

### Zero-sum games: minimax and LP duality

Weak duality is free; the minimax theorem is the statement that the gap closes
once you allow mixing.

$$\max_{x\in\Delta_m}\min_{y\in\Delta_n} x^{\top}\!Ay \ \le\ \min_{y\in\Delta_n}\max_{x\in\Delta_m} x^{\top}\!Ay \qquad\text{(weak duality — always)}$$
$$\max_{x}\min_{y} x^{\top}\!Ay \ =\ \min_{y}\max_{x} x^{\top}\!Ay \ =:\ v \qquad\text{(von Neumann — needs mixing)}$$

| Row player's LP (primal) | Column player's LP (dual) |
|---|---|
| $\max_{x,v} v$ s.t. $(x^{\top}\!A)_j \ge v\ \forall j$, $\sum_i x_i = 1$, $x\ge 0$ | $\min_{y,w} w$ s.t. $(Ay)_i \le w\ \forall i$, $\sum_j y_j = 1$, $y\ge 0$ |

**Strong LP duality** gives $v=w$, which *is* the minimax theorem — and strong LP
duality is itself a corollary of the separating hyperplane theorem, so the two
proofs are one theorem in two costumes.

**Complementary slackness = support.** A column that is strictly worse than the
value for the column player gets $y_j^{*}=0$; a row earning strictly less than $v$
gets $x_i^{*}=0$. Positive weight only on tight constraints.

**Solving a $2\times n$ game by hand:** draw each column's payoff as a line in the
row player's mixing probability $p$; the row player is guaranteed the **lower
envelope**; the value is the envelope's **peak**. Columns strictly above the peak
there are slack — drop them and solve the remaining $2\times 2$ by indifference.

*From* [1.4](lessons/01-04-zero-sum-minimax-lp-duality.md)

### Expected utility: the vNM axioms and what each buys

| Axiom | Says | Loss if dropped |
|---|---|---|
| **(A1)** completeness + transitivity | any two gambles are rankable, no cycles | no representation at all |
| **(A2)** continuity (Archimedean) | no gamble is infinitely better than another | representation by a real number fails |
| **(A3)** independence | mixing both sides with a common $L''$ can't flip your preference | the *linearity* in probabilities — the Allais paradox is exactly this violated |

$$L\succeq L' \iff \sum_i p_i u(x_i) \ge \sum_i q_i u(x_i), \qquad u \text{ unique up to } a\,u+b,\ a>0$$
$$U(\alpha L + (1-\alpha)L') = \alpha\,U(L) + (1-\alpha)\,U(L')$$

**Jensen** turns concavity of $u$ into risk aversion: $\mathbb{E}[u(x)] \le u(\mathbb{E}[x])$,
so $CE \le \mathbb{E}[x]$. Note $U$ is linear in the **probabilities** while $u$ bends
in the **money** — the two coexist and are the source of most confusion here.

*From* [1.5](lessons/01-05-expected-utility-vnm-axioms.md)

### Solving a finite game: support enumeration

For each candidate support pair $(S_1,S_2)$, run all three tests — the third is the
one people skip.

1. **Indifference.** $u_i(a,\sigma_j)=u_i(a',\sigma_j)$ for all $a,a'\in S_i$. Your mix is set by the **opponent's** indifference equation, never your own.
2. **Feasibility.** Every weight $\ge 0$ and each $\sigma_i$ sums to $1$. A negative weight means "no equilibrium on this support" — you do not clip it to zero.
3. **Outside condition.** $u_i(a,\sigma_j)\ \ge\ u_i(b,\sigma_j)$ for all $a\in S_i$, $b\notin S_i$. Candidates die here.

**Oddness (Wilson).** A *generic* finite game has a finite, **odd** number of
equilibria — a free completeness check. An even tally means you missed one or the
game is degenerate (exact ties can give a continuum).

**Complexity.** With $m$ actions each there are $(2^{m}-1)^{2}$ support pairs;
finding a Nash equilibrium is **PPAD-complete**. Lemke–Howson pivots between
"almost completely labeled" vertices of the best-response polytopes — simplex-method
geometry — and its path-pairing argument constructively re-proves oddness.

*From* [2.2](lessons/02-02-nash-equilibrium-mixed-strategies.md) *and* [2.4](lessons/02-04-computing-characterizing-equilibria.md)

### Where correlated equilibrium sits

| | defined by | computing one | reaches it |
|---|---|---|---|
| Nash | nonlinear fixed point (Kakutani) | PPAD-complete | fictitious play, in special classes only |
| **Correlated equilibrium** | **linear** inequalities → a polytope | a linear program (best CE, most egalitarian CE, …) | no-**internal**-regret learning, in *any* game |
| Coarse correlated equilibrium | weaker linear inequalities → a bigger polytope | LP | no-**external**-regret learning |

$$\text{Nash}\ \subseteq\ \text{CE}\ \subseteq\ \text{coarse CE}$$

Nash is the special case where the device's draws **factor**: $p(s)=\prod_i \sigma_i(s_i)$,
so your own recommendation tells you nothing about anyone else. **Public**
randomization is weaker still — after a public draw each player faces an ordinary
game, so public devices buy only *convex combinations of Nash payoffs*. Privacy of
the whisper is what buys the extra payoff.

*From* [2.5](lessons/02-05-correlated-equilibrium.md) *and* [6.5](lessons/06-05-learning-nash-program.md)

### Trees, credibility, and the one-shot deviation principle

| Tool | Statement | Requires |
|---|---|---|
| **Kuhn's theorem** | every mixed strategy has an outcome-equivalent behavior strategy, and conversely | **perfect recall** (fails for the absent-minded driver) |
| **Zermelo / Kuhn** | every finite **perfect-information** game has a pure SPE by backward induction; unique if no player is ever indifferent | finite horizon, perfect information |
| **One-shot deviation principle** | $s$ is an SPE $\iff$ no player gains by deviating *once* at any single information set and conforming thereafter | finite horizon **or** discounting (**continuity at infinity**) |

**Continuity at infinity, made concrete.** With $\delta\in(0,1)$ and $|g_t|\le\bar g$,
the tail from period $T$ is bounded by $\delta^{T}\bar g/(1-\delta)\to 0$, so any
profitable deviation has a *last* differing node to peel off. Without discounting,
an infinite deviation may have none and the principle can fail.

**Pure-strategy counts.** A pure strategy names an action at **every** information
set you own, reached or not: $|S_i| = \prod_{I\in\mathcal{I}_i}|A(I)|$. Merging two
nodes into one information set *reduces* the count (you can no longer condition).

$$\text{sequential eq.} \implies \text{PBE} \implies \text{SPE} \implies \text{Nash}$$

*From* [3.1](lessons/03-01-extensive-form-behavior-strategies.md) *and* [3.2](lessons/03-02-backward-induction-subgame-perfection.md)

### Repeated games: discounting algebra and the cooperation threshold

$$U = (1-\delta)\sum_{t=0}^{\infty}\delta^{t} g_t, \qquad \sum_{t=0}^{\infty}\delta^{t} = \frac{1}{1-\delta}, \qquad \frac{1-\delta^{k}}{1-\delta} = 1+\delta+\cdots+\delta^{k-1}$$

The $(1-\delta)$ normalizer puts the average payoff on the same axes as the stage
payoffs. Read $\delta$ as **patience** *or* as the **probability the relationship
continues**; if both apply, multiply them.

With $c$ = cooperation payoff, $T$ = one-shot temptation, $p$ = punishment payoff
(the stage NE), **grim trigger** is an SPE iff

$$\frac{c}{1-\delta} \ \ge\ T + \delta\,\frac{p}{1-\delta} \qquad\Longleftrightarrow\qquad \delta \ \ge\ \delta^{*} = \frac{T-c}{T-p}.$$

| Punishment | Threshold | Why |
|---|---|---|
| grim (forever) | $\delta^{*}=\dfrac{T-c}{T-p}$ | the maximal *credible* threat, hence the **lowest** bar |
| $k$ periods, then forgive | solves $c\,(1+\delta+\cdots+\delta^{k}) \ge T + p(\delta+\cdots+\delta^{k})$ | forgiveness shrinks the future loss, so it needs **more** patience |

**Credibility of the punishment** is free here because the punishment phase plays a
*stage Nash equilibrium* — a unilateral move away from it cannot pay.

**Finite horizon unravels.** If the stage game has a **unique** Nash equilibrium,
the unique SPE of the $T$-fold repetition plays it in every period, for any finite
$T$. What rescues cooperation is *multiplicity* in the stage game (reward/punish
with different last-period equilibria) or an *indefinite* horizon.

*From* [3.3](lessons/03-03-repeated-games-finite-infinite.md)

### Folk theorems — which threat, which equilibrium concept

Both versions target any $v\in\mathcal{V}$ with $v_i > \underline{v}_i$ for all $i$,
and both say: for $\delta$ close enough to $1$, some equilibrium averages $v$.

| Version | Equilibrium concept | Punishment used | Extra hypothesis |
|---|---|---|---|
| **Nash-threat folk theorem** | Nash equilibrium of the repeated game | minmax the deviator **forever** | none |
| **Subgame-perfect (Fudenberg–Maskin, 1986)** | subgame-perfect equilibrium | minmax for a **finite** stretch, then a phase that **rewards the punishers** | the feasible strictly-IR set is **full-dimensional** ($=n$) |

The SPE version needs the fix because minmaxing can be costly to the *punishers*,
so "forever" is not credible; full dimensionality is exactly the room to hand each
punisher a private bonus without lifting the deviator's floor.

**Information structure.** All of the above assumes **perfect monitoring** — everyone
sees the realized action profile each period. Folk theorems under imperfect public
or private monitoring are deliberately out of scope for this course (see the
[syllabus](syllabus.md)); the honest summary is that they still hold in the patient
limit under identifiability conditions, but the constructions are far harder.

*From* [3.4](lessons/03-04-folk-theorems.md)

### Bargaining: two routes to one split

**Axiomatic (Nash, 1950).** PAR (efficiency), SYM (identical players, identical
shares), INV (affine rescaling of either utility rescales the answer), IIA
(deleting unchosen options changes nothing) pin down *exactly one* rule:

$$f(S,d) = \arg\max_{u\in S,\, u\ge d}\ (u_1-d_1)(u_2-d_2), \qquad \text{generalized: } \arg\max\ (u_1-d_1)^{\alpha}(u_2-d_2)^{1-\alpha}$$

On the linear frontier $u_1+u_2=1$ with surplus $\sigma = 1-d_1-d_2$:

$$u_1^{*} = d_1 + \tfrac12\sigma \quad(\text{symmetric}), \qquad u_1^{*} = d_1 + \alpha\,\sigma \quad(\text{generalized}).$$

**Keep your disagreement value, split only the surplus.** IIA is the contested
axiom — replace it with monotonicity and you get **Kalai–Smorodinsky** instead.

**Strategic (Rubinstein, 1982).** Alternating offers, discount factors
$\delta_1,\delta_2$, unique SPE with *immediate* agreement:

$$v_1 = \frac{1-\delta_2}{1-\delta_1\delta_2}, \qquad v_2 = \frac{1-\delta_1}{1-\delta_1\delta_2}$$

**Patient limits (the Nash program).** With a common $\delta$, $v_1 = 1/(1+\delta)\to\tfrac12$.
With $\delta_i = e^{-r_i\Delta}$ and period length $\Delta\to 0^{+}$,

$$v_1 \to \frac{r_2}{r_1+r_2} = \alpha,$$

so **relative patience is the bargaining weight**: the strategic and axiomatic
answers coincide.

*From* [3.5](lessons/03-05-bargaining.md) *and* [6.5](lessons/06-05-learning-nash-program.md)

### Solving a Bayesian game

$$s_i^{*}(\theta_i) \in \arg\max_{a_i\in A_i}\ \sum_{\theta_{-i}} p(\theta_{-i}\mid\theta_i)\; u_i\big(a_i,\,s_{-i}^{*}(\theta_{-i}),\,(\theta_i,\theta_{-i})\big) \quad \text{for every } \theta_i$$

- A **strategy is a table**, one action per type — with $k$ types and $|A|$ actions there are $|A|^{k}$ pure strategies. Solve type by type, then check consistency.
- Beliefs come from conditioning the common prior: $p(\theta_{-i}\mid\theta_i)=p(\theta_i,\theta_{-i})/\sum_{\theta_{-i}'}p(\theta_i,\theta_{-i}')$. Independent types → the posterior is just the others' marginal; **correlated** types → your own draw is informative.
- **Three vantage points:** *ex ante* (before Nature moves, averaging over your own type too), **interim** (you know $\theta_i$ — this is where BNE is stated, and it binds type by type), *ex post* (all types revealed). Interim is strictly stronger than ex ante.
- **Existence is free:** treat "player $i$ of type $\theta_i$" as a separate agent and you have a finite normal-form game (the *agent-normal form*); Nash's theorem applies.
- **Cutoff strategies.** In one-dimensional-type entry/bidding problems, guess "act iff $\theta_i \le \theta^{*}$", compute the marginal type's indifference, and solve for $\theta^{*}$.

*From* [4.1](lessons/04-01-bayesian-games-bayes-nash.md)

### Auctions: independent private values, $n$ bidders, $v\sim U[0,1]$

| Format | Equilibrium behavior | Solution concept | Winner pays |
|---|---|---|---|
| Second-price (Vickrey) $\equiv$ English | $b(v)=v$ | **weakly dominant** — no prior, no $n$, no $F$ needed | second-highest bid |
| First-price $\equiv$ Dutch | $b(v)=\dfrac{n-1}{n}v$ | symmetric Bayes–Nash — depends on $n$ *and* $F$ | own bid |
| All-pay | $a(v)=\dfrac{n-1}{n}v^{n}$ | symmetric Bayes–Nash | own bid, **win or lose** |

**General $F$.** The symmetric increasing equilibrium of a first-price auction is
always the conditional-expected runner-up value:

$$b(v)=\mathbb{E}[Y\mid Y<v]=\frac{\int_0^{v} y\,dG(y)}{G(v)}, \qquad G(y)=F(y)^{n-1}$$

**Derivation trick.** Write surplus from mimicking type $z$ as $\Pi(z;v)=(v-b(z))G(z)$,
set $\partial_z\Pi|_{z=v}=0$, recognize the left side as $\frac{d}{dv}[b(v)G(v)]$,
and integrate with $b(0)=0$.

**Common values are different.** The winner's curse (winning means you were the
most optimistic estimator) is a *separate* reason to shade and is out of scope
here — IPV shading is about payment, not about learning bad news from winning.

*From* [4.2](lessons/04-02-auctions-equilibrium-bidding.md)

### Order statistics you need for auctions

The lessons use these constantly and state them only in passing. For $n$ i.i.d.
draws with CDF $F$ on $[0,1]$, and $Y = $ the max of $n-1$ rivals:

| Quantity | General $F$ | Uniform $U[0,1]$ |
|---|---|---|
| $\Pr(\text{you win with value } v)$ | $G(v)=F(v)^{n-1}$ | $v^{\,n-1}$ |
| density of $Y$ | $(n-1)F(y)^{n-2}f(y)$ | $(n-1)y^{\,n-2}$ |
| $\mathbb{E}[Y\mid Y<v]$ | $\int_0^{v}y\,dG(y)/G(v)$ | $\tfrac{n-1}{n}v$ |
| density of the 2nd-highest of $n$ | $n(n-1)F^{\,n-2}(1-F)f$ | $n(n-1)x^{\,n-2}(1-x)$ |
| $\mathbb{E}[\text{2nd-highest of } n]$ | — | $\dfrac{n-1}{n+1}$ |
| $\mathbb{E}[\max \text{ of } n]$ | — | $\dfrac{n}{n+1}$ |

So expected seller revenue in *any* efficient IPV auction with $U[0,1]$ values and
no reserve is $\frac{n-1}{n+1}$: $\tfrac13$ at $n=2$, $\tfrac12$ at $n=3$,
$\tfrac35$ at $n=4$.

*Used by* [4.2](lessons/04-02-auctions-equilibrium-bidding.md), [4.3](lessons/04-03-revenue-equivalence-theorem.md), [5.4](lessons/05-04-bayesian-mechanism-design-optimal-auction.md)

### Revenue equivalence and the envelope characterization

Incentive compatibility says imitating yourself is optimal, so the envelope
theorem kills the payment term and leaves only the allocation:

$$U(v)=\max_{z}\big[v\,Q(z)-m(z)\big] \implies \boxed{\,U'(v)=Q(v)\,} \implies U(v)=U(0)+\int_0^{v}Q(x)\,dx$$
$$m(v) = v\,Q(v) - U(0) - \int_0^{v} Q(x)\,dx$$

**Revenue Equivalence Theorem.** Two mechanisms with symmetric increasing
Bayes–Nash equilibria, the **same allocation rule** $Q(\cdot)$ and the **same
$U(0)$** charge every type the same expected payment, hence yield the same
expected revenue $R = n\,\mathbb{E}_v[m(v)]$.

**Two uses, one formula.** Forwards it gives revenue without solving the game;
backwards it *hands you the equilibrium bid* — for an all-pay auction the expected
payment simply *is* the bid, so $a(v)=v\,Q(v)-\int_0^{v}Q$ with no ODE to solve.

**It breaks when:** a binding **reserve price** (changes the allocation *and* the
low types' rent), **asymmetric** bidders (non-identical $F_i$), or **risk-averse**
bidders (who bid more in first-price, so first-price then raises strictly more).
Note it equates *expected* revenue only — realized payments differ sample by sample.

*From* [4.3](lessons/04-03-revenue-equivalence-theorem.md)

### The refinement hierarchy — what each one rules out

$$\text{sequential} \subseteq \text{PBE} \subseteq \text{SPE} \subseteq \text{Nash}$$

| Concept | Adds | Rules out | Blind spot |
|---|---|---|---|
| **Nash** | mutual best response | nothing dynamic | non-credible threats survive |
| **SPE** | Nash in every **subgame** | non-credible threats at nodes that start subgames | *toothless* under imperfect information — with non-singleton information sets there may be no proper subgame at all, so SPE collapses to Nash |
| **PBE** | an explicit belief system; **sequential rationality at every information set**; **Bayes wherever the denominator is positive** | empty threats off the path, and on-path play inconsistent with the true type distribution | Bayes gives $0/0$ off the path, so **off-path beliefs are free** — equilibria multiply |
| **Sequential (Kreps–Wilson)** | **consistency**: $\mu$ must be a limit of Bayes updates along totally mixed $\sigma^{k}\to\sigma$ | off-path beliefs no vanishing-tremble sequence could justify | many off-path beliefs are still limit-consistent — it narrows, it doesn't eliminate |
| **Intuitive Criterion (Cho–Kreps)** | delete **equilibrium-dominated** types from the off-path belief's support | pooling equilibria propped up by "a deviator must be the bad type" | it restricts *beliefs*, not strategies; and its bite depends on the numbers (a high enough prior can make the pool so good that nobody wants out) |

Selten's **trembling-hand perfection** is the normal-form cousin of sequential
equilibrium — same "robust to small mistakes" idea, applied to the payoff matrix
rather than the tree; in finite games a trembling-hand perfect equilibrium is
sequential and generically the two agree. (Myerson's *proper* equilibrium refines
trembling-hand further by requiring costlier mistakes to be less likely; it is not
developed in these lessons.)

*From* [4.4](lessons/04-04-perfect-bayesian-sequential-equilibrium.md) *and* [4.5](lessons/04-05-signaling-games-refinements.md)

### Signaling: how to solve one, and how to refine it

1. **Conjecture** a sender profile (separating, pooling, or semi-separating).
2. **On-path beliefs by Bayes:** $\mu(\theta\mid m)=p(\theta)\sigma(m\mid\theta)\big/\sum_{\theta'}p(\theta')\sigma(m\mid\theta')$. Pooling → the posterior *equals the prior*.
3. **Receiver's best response** at each on-path message, given that belief.
4. **Off-path beliefs:** free — pick the belief that makes the deterrent response optimal (usually pessimistic), and *say which one you picked*.
5. **Check both sender types** have no profitable deviation.
6. **Refine:** at each off-path $m$, delete every type $\theta$ whose equilibrium payoff exceeds its **best case** at $m$. If a surviving type then strictly prefers to deviate against the newly-forced belief, the equilibrium **fails** the Intuitive Criterion.

**Single crossing (Spence–Mirrlees)** is the precondition for any separation: the
signal must be *cheaper* for the type worth revealing ($c_H<c_L$), so their
indifference curves cross once. Equal costs → no separating equilibrium. And the
gap must be **large enough** — $c_H<c_L$ alone does not stop mimicry if the prize
exceeds the low type's cost. At the opposite extreme, **cheap talk** ($c_H=c_L=0$)
is a different theory (Crawford–Sobel).

*From* [4.5](lessons/04-05-signaling-games-refinements.md)

### Social choice: the three walls and the one escape

| Result | Setting | Statement |
|---|---|---|
| **Condorcet paradox** | $\ge 3$ alternatives, majority rule | pairwise majority can **cycle**, so no Condorcet winner need exist — and the agenda-setter then picks the winner |
| **Arrow** | social **welfare function** (rankings in, ranking out), $\lvert X\rvert\ge 3$ | U + P + IIA + D are inconsistent; equivalently U + P + IIA $\Rightarrow$ **dictatorship** |
| **Gibbard–Satterthwaite** | social **choice function** (rankings in, one winner out), $\lvert X\rvert\ge 3$ | onto + strategy-proof $\Rightarrow$ dictatorial; equivalently every non-dictatorial onto rule is **manipulable** |
| **Median voter** | **single-peaked** preferences on a line, $n$ odd | the median peak is a Condorcet winner, and "choose the median reported peak" is **strategy-proof** |

Arrow's axioms: **U** unrestricted domain, **P** weak Pareto, **IIA** the social
ranking of $x$ vs $y$ ignores every third option, **D** non-dictatorship. IIA is
the contested one and the engine of the proof (decisive-set contraction: Pareto
seeds a decisive coalition, IIA expands it to every pair, then contraction halves
it down to one person). Most "solutions to Arrow" are rejections of IIA.

**The two escapes used in this course:** restrict the **domain** (single-peakedness
→ median voter), or add **money** (quasilinear transfers → VCG, which sidesteps
Gibbard–Satterthwaite because that theorem assumes no transfers).

*From* [5.1](lessons/05-01-social-choice-impossibility.md)

### The revelation principle

*If $f$ is implementable in dominant strategies, the direct mechanism $f$ is DSIC.
If $f$ is implementable in Bayes–Nash equilibrium, the direct mechanism $f$ is BIC.*

**Proof in one line:** bolt the equilibrium strategies inside the box —
$\hat\theta \mapsto g(s^{*}(\hat\theta))$ — and lying to your own concierge means
having it play $s_i^{*}(\theta_i')$, which equilibrium already said was worse.

Three things it does **not** say:

- It does not claim real institutions are direct or that people report honestly — first-price auctions exist and everyone shades. It is a statement about what's *achievable*, not about the world.
- It does not create implementability: "*if* $f$ is implementable, *then* truthfully". Whether an IC + IR mechanism for your $f$ exists is the real question, and sometimes the answer is no.
- It gives **weak** implementation only: truth is *one* equilibrium of the direct mechanism, and other, non-truthful equilibria with different outcomes can coexist. **Full** implementation (every equilibrium yields $f$) is strictly stronger.

*From* [5.2](lessons/05-02-revelation-principle-incentive-compatibility.md)

### VCG: the efficient dominant-strategy mechanism

$$x^{*}(\hat v)\in\arg\max_{x\in X}\sum_{j}\hat v_j(x) \qquad\text{(efficient allocation)}$$
$$t_i = h_i(\hat v_{-i}) - \sum_{j\ne i}\hat v_j\big(x^{*}(\hat v)\big) \qquad\text{(Groves: } h_i \text{ must not depend on } \hat v_i)$$
$$t_i = \underbrace{\max_{x}\sum_{j\ne i}\hat v_j(x)}_{\text{others' welfare without } i} - \underbrace{\sum_{j\ne i}\hat v_j\big(x^{*}(\hat v)\big)}_{\text{others' welfare with } i} \qquad\text{(Clarke pivot / VCG)}$$

**Why truth is dominant:** $h_i$ is a constant to $i$, so $i$'s payoff is
$v_i(x)+\sum_{j\ne i}\hat v_j(x)$ — exactly what the planner maximizes, provided
$i$ reports honestly. Interests welded together.

**Computing a pivot payment:** two welfare numbers, both over *others only* —
others' best without you, minus others' actual with you. Your own value never
enters your bill directly. Non-pivotal agents (the outcome would have happened
anyway) pay **zero**.

| Property | VCG | Note |
|---|---|---|
| efficient | ✓ | maximizes welfare, **not** revenue |
| DSIC | ✓ | but only against *unilateral* deviations |
| individually rational, no positive transfers | ✓ | under nonnegative values and free disposal |
| budget-balanced | ✗ | generically runs a deficit in public-goods settings; you cannot rebate without breaking incentives |
| collusion- and shill-proof | ✗ | a losing coalition can coordinate; false-name bids shrink "the world without me" |

**One item → Vickrey.** Others' best without the winner is the runner-up's value,
others' welfare with the winner is $0$, so $t_1 = v_2$: the second-price auction is
VCG with one good. With $k$ identical items and unit demand, every winner pays the
highest *excluded* value — a uniform price.

*From* [5.3](lessons/05-03-dominant-strategy-mechanisms-vcg.md)

### Myerson's optimal auction

$$\text{expected revenue} = \mathbb{E}\Big[\sum_{i=1}^{n}\psi_i(v_i)\,q_i(v)\Big], \qquad \psi_i(v)=v-\frac{1-F_i(v)}{f_i(v)}$$

Maximize pointwise: **award to the highest virtual value, and only if it is
nonnegative.** The winner pays the lowest value she could have reported and still
won.

$$\text{winner}(v)=\arg\max_i \psi_i(v_i), \qquad \text{sell iff } \max_i\psi_i(v_i)\ge 0$$

**Symmetric + regular collapses to one number.** $\psi$ increasing means highest
$\psi$ = highest $v$, and $\psi\ge0$ means $v\ge r^{*}$, so the optimum is a
**second-price auction with reserve $r^{*}$**, where

$$\psi(r^{*})=0 \iff r^{*}-\frac{1-F(r^{*})}{f(r^{*})}=0.$$

| $F$ on $[0,1]$ | $\psi(v)$ | $r^{*}$ |
|---|---|---|
| $F(v)=v$ (uniform) | $2v-1$ | $\tfrac12$ |
| $F(v)=v^{2}$ | $\dfrac{3v^{2}-1}{2v}$ | $1/\sqrt{3}\approx 0.577$ |
| $v\sim U[0,2]$ | $2v-2$ | $1$ |

**The reserve is a monopoly price.** $\psi(r^{*})=0$ never mentions the other
bidders — it solves the single-buyer problem $\max_p\,p\,(1-F(p))$. So for $U[0,1]$
the reserve is $\tfrac12$ whether there are 2 bidders or 200; more rivals raise
*revenue*, not the reserve. Concretely at $n=2$, $U[0,1]$: revenue rises from
$\tfrac13$ (no reserve) to $\tfrac{5}{12}$ at $r^{*}=\tfrac12$.

**Optimal is not efficient**, on purpose: the reserve withholds the good from a
willing buyer, and with asymmetric bidders the *lower*-value bidder can win
(handicapping the strong bidder manufactures competition, and competition is
revenue).

*From* [5.4](lessons/05-04-bayesian-mechanism-design-optimal-auction.md)

### The design trilemma (Myerson–Satterthwaite)

Bilateral trade, buyer value $v\sim f$, seller cost $c\sim g$, independent, with
**overlapping supports**. Then no mechanism is simultaneously **BIC**, **interim
IR**, **budget-balanced**, and **ex-post efficient**.

$$\mathbb{E}[\text{budget surplus}] = \mathbb{E}\big[(v-c)\,p(v,c)\big] - \underbrace{(\text{buyer rent from } \tfrac{1-F}{f}) - (\text{seller rent from } \tfrac{G}{g})}_{\text{information rents BIC + IR force you to concede}}$$

Plug in $p=\mathbf{1}\{v>c\}$ and the surplus goes strictly **negative** — the
efficient rule needs a subsidy.

| Mechanism | Keeps | Sacrifices |
|---|---|---|
| **VCG** ([5.3](lessons/05-03-dominant-strategy-mechanisms-vcg.md)) | efficiency, IC, IR | budget balance (runs a deficit) |
| **Myerson** ([5.4](lessons/05-04-bayesian-mechanism-design-optimal-auction.md)) | IC, IR, budget | efficiency (reserve, exclusion) |
| **Chatterjee–Samuelson double auction** | IC, IR, budget | efficiency — and it is the *second-best* |

**The benchmark numbers** ($v,c\sim U[0,1]$): the linear-equilibrium double auction
bids $b(v)=\tfrac23 v+\tfrac1{12}$, asks $s(c)=\tfrac23 c+\tfrac14$, so it trades
**iff $v\ge c+\tfrac14$**. First-best gains from trade are $\mathbb{E}[(v-c)^{+}]=\tfrac16$;
the lost band costs $\tfrac{5}{192}$, i.e. $\tfrac{5}{32}\approx 15.6\%$ of all
available surplus.

**When it stops biting:** if the supports do *not* overlap (commonly-known gains
from trade), split-the-difference trades efficiently and voluntarily. This is the
precise failure of the [Coase theorem](../grad-micro/lessons/06-03-externalities-coase-theorem.md)
under two-sided private information.

*From* [5.5](lessons/05-05-limits-of-efficient-design.md)

### Cooperative games: core, balancedness, Shapley

**Core geometry, three players.** With $\sum_i x_i = v(N)$, each pair constraint
$x_i+x_j\ge v(\{i,j\})$ is equivalent to $x_k \le v(N)-v(\{i,j\})$: it slices off
the corner where the *excluded* player gets too much. Rewrite every constraint that
way and the core is a box intersected with the simplex.

**Bondareva–Shapley.** $C(v)\ne\varnothing$ **iff** the game is balanced. This is LP
strong duality: the core is the feasible set of "minimize $\sum_i x_i$ subject to
$\sum_{i\in S}x_i\ge v(S)$", and the $\lambda_S$ are the dual variables. To certify
an *empty* core, exhibit a balanced $\lambda$ with $\sum_S\lambda_S v(S) > v(N)$ —
for the 3-player majority game, $\lambda=\tfrac12$ on each pair does it.

**Superadditivity is not enough**: the 3-player majority game is superadditive and
has an empty core. **Convexity is** enough (convex ⇒ balanced ⇒ core nonempty, and
the Shapley value is the core's barycenter).

**Shapley value, two equivalent formulas** — the combinatorial weight is just the
fraction of arrival orders producing predecessor set $S$:

$$\varphi_i(v) = \sum_{S\subseteq N\setminus\{i\}}\frac{|S|!\,(n-|S|-1)!}{n!}\big[v(S\cup\{i\})-v(S)\big] = \frac{1}{n!}\sum_{\pi}\big[v(P_i^{\pi}\cup\{i\})-v(P_i^{\pi})\big]$$

**Compute it by axioms first.** Null player → $0$; interchangeable players → equal
shares; efficiency → the rest. Often you never touch the sum. For $n=3$, tabulating
all $6$ orders is faster than the weights.

| Application | Reading |
|---|---|
| **Airport / cost game** ($c(S)=\max_{i\in S}c_i$) | split each runway *segment* equally among the planes that use it |
| **Shapley–Shubik power index** | the fraction of orderings in which you are the **pivotal** vote turning a losing coalition winning — power is not proportional to weight |

*From* [6.1](lessons/06-01-coalitional-games-core.md) *and* [6.2](lessons/06-02-shapley-value.md)

### Gale–Shapley deferred acceptance

1. Each unmatched proposer proposes to his most-preferred receiver who hasn't rejected him.
2. Each receiver **tentatively holds** the best offer in hand (including whoever she already holds) and rejects the rest.
3. Repeat until nobody is rejected.

| Result | Statement |
|---|---|
| **Existence (Gale–Shapley, 1962)** | terminates in at most $n^{2}$ proposals and outputs a **stable** matching — so the matching core is *never* empty, unlike a general TU core |
| **Stability argument** | if $m$ prefers $w$ to his partner, he already proposed to $w$ and was rejected; a receiver's held partner only improves, so $w$ now has someone better — no block |
| **Proposer optimality** | the proposing side simultaneously gets its **best** achievable stable partner; the receiving side gets its **worst** (the stable set is a lattice with these two as the extremes) |
| **Strategy-proofness (Dubins–Freedman / Roth)** | truth is dominant for **proposers only**; receivers can gain by misreporting, and **no** stable mechanism is strategy-proof for both sides |

Always ask *who proposes* — the residency match switched to applicant-proposing
precisely because it matters.

*From* [6.3](lessons/06-03-stable-matching-market-design.md)

### Evolutionary dynamics

$$u(y,x)=y^{\top}\!Ax, \qquad \dot x_i = x_i\big[(Ax)_i - x^{\top}\!Ax\big]$$

**The folk theorem of evolutionary game theory:**

- every symmetric Nash equilibrium is a **rest point** (and so is every pure vertex, Nash or not);
- every **ESS is asymptotically stable** under the replicator dynamics;
- every **Lyapunov-stable rest point is a symmetric Nash equilibrium**.

$$\text{ESS} \subsetneq \text{symmetric Nash}$$

**Interior test.** For a *fully mixed* symmetric Nash $x^{*}$, every strategy ties
against $x^{*}$, so condition (i) is an equality and $x^{*}$ is an ESS **iff**

$$(x^{*}-y)^{\top}A\,(x^{*}-y) < 0 \quad\text{for all } y\ne x^{*}.$$

| Game | Rest points | Verdict |
|---|---|---|
| **Hawk–Dove**, $V<C$ | $p^{*}=V/C$ interior, plus $0,1$ | $p^{*}$ is an ESS and globally attracting; $\dot p = p(1-p)(V-Cp)/2$ |
| **Hawk–Dove**, $V>C$ | only $0,1$ in range | all-Hawk is the ESS (Hawk strictly dominates) |
| **Stag Hunt** ($3,3 / 2,2$) | $0$, $\tfrac23$, $1$ | both *pure* states are ESSs; $\tfrac23$ is the unstable threshold separating the basins |
| **Rock–Paper–Scissors** | center $(\tfrac13,\tfrac13,\tfrac13)$ | symmetric Nash but **not** an ESS; $A$ antisymmetric makes every quadratic form vanish, $x_Rx_Px_S$ is conserved, and trajectories are **closed orbits** |

A mixed ESS is a stable **polymorphism** — a population of pure types in those
proportions — not necessarily individuals rolling dice.

*From* [6.4](lessons/06-04-evolutionary-game-theory.md)

### Learning dynamics: what converges to what

**Fictitious play.** Best-respond to the opponent's empirical frequency
$\hat p_{-i}^{\,t}$. If the frequencies converge, the limit *is* a Nash
equilibrium — and convergence is guaranteed in exactly these classes:

- **zero-sum** games (Robinson, 1951)
- $2\times 2$ games (Miyasawa, 1961)
- **potential** games (Monderer–Shapley, 1996)
- dominance-solvable games

Outside them it can cycle forever (Shapley's $3\times3$ modified RPS). And even
when it converges, **convergence of empirical frequencies is not convergence of
play** — in matching pennies the realized actions cycle in ever-lengthening blocks
while the frequencies creep to $(\tfrac12,\tfrac12)$.

**No-regret (Hart–Mas-Colell, 2000).** Let $z_T$ be the empirical distribution of
*joint* play. Then

$$\text{all players no-\textbf{external}-regret} \implies \text{every limit point of } z_T \text{ is a coarse correlated equilibrium}$$
$$\text{all players no-\textbf{internal}-regret} \implies \text{every limit point of } z_T \text{ is a correlated equilibrium}$$

Multiplicative weights / Hedge and regret matching achieve $R_i^{T}=O(1/\sqrt{T})$.
Decentralized learners manufacture the correlating device out of **shared history**
— no referee needed. They do **not** generally reach Nash, which is consistent with
Nash being PPAD-hard.

*From* [6.5](lessons/06-05-learning-nash-program.md)

## Assumed, not taught here

This is a Tier 2 course, so the list is short — but every row is something the
lessons genuinely *use* without deriving.

| Fact | Where it's taught |
|---|---|
| Compactness (closed + bounded), and that a continuous function on a nonempty compact set attains its max | [real-analysis 4.2](../real-analysis/lessons/04-02-compactness-heine-borel.md), [5.2](../real-analysis/lessons/05-02-continuity-on-compact-sets.md) |
| The Intermediate Value Theorem (the 1-D proof of Brouwer) | [real-analysis 5.3](../real-analysis/lessons/05-03-intermediate-value-theorem.md) |
| Sequential reasoning with $\varepsilon$–$N$ limits and subsequences (the closed-graph arguments) | [real-analysis 2.1](../real-analysis/lessons/02-01-convergence-epsilon-n.md), [2.3](../real-analysis/lessons/02-03-subsequences-bolzano-weierstrass.md) |
| Geometric series $\sum_{t\ge0}\delta^{t}=\frac{1}{1-\delta}$ — every discounting computation | [real-analysis 3.1](../real-analysis/lessons/03-01-series-and-cauchy-criterion.md) |
| Conditional probability, Bayes' rule, and independence vs. correlation of draws | [probability-theory 3.1](../probability-theory/lessons/03-01-independence.md), [5.1](../probability-theory/lessons/05-01-conditional-expectation.md) |
| CDFs, densities, and expectations of transformed variables (every auction integral) | [probability-theory 2.2](../probability-theory/lessons/02-02-distributions-and-cdfs.md), [2.3](../probability-theory/lessons/02-03-lebesgue-integral-expectation.md) |
| Jensen's inequality (risk aversion, and the convexity arguments in 1.1) | [probability-theory 2.5](../probability-theory/lessons/02-05-lp-spaces-inequalities.md) |
| **Order statistics** of i.i.d. draws — the max, the second-highest, and conditional maxima | *no lesson in the library derives these.* The facts this course actually needs are tabulated above under [Order statistics you need for auctions](#order-statistics-you-need-for-auctions); the distributional groundwork is [probability-theory 2.2](../probability-theory/lessons/02-02-distributions-and-cdfs.md) |
| The **envelope theorem** in general form (used raw in 4.3, 5.4, 5.5) | [grad-micro 1.4](../grad-micro/lessons/01-04-envelope-theorem-duality.md) |
| Quasiconcavity, and why it makes argmax sets convex | [grad-micro 1.1](../grad-micro/lessons/01-01-convexity-concavity-quasiconcavity.md) |
| **Linear-programming duality** as a theorem (1.4 uses strong duality; 6.1's Bondareva–Shapley *is* LP duality) | *no lesson in the library proves it.* The primal–dual pair and complementary slackness this course needs are stated above under [Zero-sum games: minimax and LP duality](#zero-sum-games-minimax-and-lp-duality); the closest relative in the library is the Lagrangian/shadow-price duality of [grad-micro 1.3](../grad-micro/lessons/01-03-inequality-constraints-kuhn-tucker.md) |
| Rest points, phase lines, and asymptotic stability of an autonomous ODE (all of 6.4) | [ode-refresher 3.2](../ode-refresher/lessons/03-02-phase-portraits-stability.md) |
| The undergraduate solution-concept ladder — dominance, IESDS, Nash, subgames, types, separating vs pooling | [game-theory-refresher card](../game-theory-refresher/reference.md), built from [1.1](../game-theory-refresher/lessons/01-01-normal-form-dominance.md) onward |

## Pitfalls

### Convexity and correspondences

- Convex **set** and convex **function** are different objects; the only bridge is the epigraph. Don't call the simplex a convex function. *([1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md))*
- Separation needs a compactness/closedness hypothesis — two disjoint unbounded convex sets can fail to be *strictly* separated (a half-plane and the region above a hyperbola). *([1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md))*
- Linear ⇒ both convex and concave. That is a feature: it is why expected payoff is quasiconcave in your own mix and best responses are convex-valued. *([1.1](lessons/01-01-convex-sets-functions-separating-hyperplanes.md))*
- uhc and lhc are **independent**, not two names for continuity; an argmax is typically uhc and *not* lhc. *([1.2](lessons/01-02-correspondences-berge-maximum-theorem.md))*
- "uhc $\iff$ closed graph" needs the range inside a compact set — $\varphi(x)=\{1/x\}$ on $(0,\infty)$ has a closed graph and isn't uhc. In game theory strategy sets are compact, so use it freely. *([1.2](lessons/01-02-correspondences-berge-maximum-theorem.md))*
- Berge gives continuity of the **value**, only uhc of the **argmax**. The maximizer set genuinely jumps between tied optima. *([1.2](lessons/01-02-correspondences-berge-maximum-theorem.md))*

### Existence proofs

- Name the killed hypothesis before you trust a fixed-point theorem: compactness (shift on $\mathbb{R}$), convexity (rotating a circle), continuity (a jump map). *([1.3](lessons/01-03-brouwer-kakutani-fixed-points.md))*
- Kakutani needs convex values **and** a closed graph — uhc alone with non-convex values still leaps the diagonal. *([1.3](lessons/01-03-brouwer-kakutani-fixed-points.md))*
- A fixed point is **existence only** — not uniqueness, not a count, not an algorithm. Battle of the Sexes has three; Kakutani promised one. *([1.3](lessons/01-03-brouwer-kakutani-fixed-points.md), [2.3](lessons/02-03-existence-of-nash-equilibrium.md))*
- "Every game has a Nash equilibrium" is **false** — name-the-larger-integer has none (non-compact strategy set → empty best responses). Finiteness, or compact + continuous + quasiconcave, is the real hypothesis. *([2.3](lessons/02-03-existence-of-nash-equilibrium.md))*
- Mixing is not a modeling flourish: pure best responses form a non-convex scatter of vertices, and convexifying is the price of admission to the fixed-point theorems. *([1.3](lessons/01-03-brouwer-kakutani-fixed-points.md), [2.3](lessons/02-03-existence-of-nash-equilibrium.md))*
- When a game "has no equilibrium", suspect a **discontinuous** payoff (Bertrand tie-splitting) or a **non-compact** strategy set — almost always one of the two. *([2.3](lessons/02-03-existence-of-nash-equilibrium.md))*

### Solving games

- A strategy can be strictly dominated by a **mixture** when no pure strategy beats it. Always test mixed dominators. *([2.1](lessons/02-01-normal-form-dominance-rationalizability.md))*
- Elimination order is irrelevant for **strict** dominance (a theorem) and genuinely matters for **weak** — an iterated-weak "solution" is only defined once you fix and report the order. *([2.1](lessons/02-01-normal-form-dominance-rationalizability.md))*
- Rationalizable can be *smaller* than the IESDS survivors with three or more players, because standard rationalizability restricts beliefs to be independent while dominance allows correlated ones. With two players they coincide. *([2.1](lessons/02-01-normal-form-dominance-rationalizability.md))*
- Your mixing probabilities come from the **opponent's** indifference equation, never your own. Solving your own payoffs for your own weights is *the* classic sign error. *([2.2](lessons/02-02-nash-equilibrium-mixed-strategies.md), [2.4](lessons/02-04-computing-characterizing-equilibria.md))*
- Indifference is necessary, not sufficient: always check that no **benched** action beats the support payoff. This is where candidates die. *([2.2](lessons/02-02-nash-equilibrium-mixed-strategies.md), [2.4](lessons/02-04-computing-characterizing-equilibria.md))*
- A negative weight means "no equilibrium on this support", not "round it up to zero". *([2.4](lessons/02-04-computing-characterizing-equilibria.md))*
- Oddness assumes **genericity** — exact payoff ties can give a continuum. An even tally means a missed equilibrium *or* a hidden degeneracy. *([2.4](lessons/02-04-computing-characterizing-equilibria.md))*
- Finding no *pure* equilibrium is not finding no equilibrium; matching pennies has exactly one, and it's mixed. *([2.2](lessons/02-02-nash-equilibrium-mixed-strategies.md))*
- "Mixed" is an interpretation: deliberate randomization, opponents' *beliefs* about you, or a **population frequency** (which is 6.4's whole subject). Pick the one that fits the application. *([2.2](lessons/02-02-nash-equilibrium-mixed-strategies.md), [6.4](lessons/06-04-evolutionary-game-theory.md))*

### Zero-sum and correlation

- maxmin $=$ minmax only for **mixed** strategies; in pure strategies the gap is real and is exactly why you randomize. *([1.4](lessons/01-04-zero-sum-minimax-lp-duality.md))*
- Only the **value** is unique; optimal strategies need not be. Bet on the number, not the strategy. *([1.4](lessons/01-04-zero-sum-minimax-lp-duality.md))*
- "Security level $=$ equilibrium payoff" is a zero-sum-only coincidence; in general-sum games maxmin is typically strictly below your Nash payoff. *([1.4](lessons/01-04-zero-sum-minimax-lp-duality.md))*
- CE recommendations are **private**, and that privacy does the work — a *public* signal only buys convex combinations of Nash payoffs. *([2.5](lessons/02-05-correlated-equilibrium.md))*
- CE is defined by *linear* inequalities: reach for an LP, not a fixed-point theorem. Finding a CE that isn't Nash is the point, not a bug. *([2.5](lessons/02-05-correlated-equilibrium.md))*

### Trees, time, and threats

- A strategy must name an action at **every** information set you own, including unreached ones — those off-path entries *are* the threats credibility tests. *([3.1](lessons/03-01-extensive-form-behavior-strategies.md))*
- Imperfect **information** (you can't see others' moves — normal) is not imperfect **recall** (you've forgotten your own past — pathological). Kuhn's theorem needs the latter to hold. *([3.1](lessons/03-01-extensive-form-behavior-strategies.md))*
- A non-singleton information set means the player **cannot distinguish** those nodes — it is about knowledge, not indifference. *([3.1](lessons/03-01-extensive-form-behavior-strategies.md))*
- SPE $\subseteq$ Nash, not the reverse. Every SPE is Nash; the extra Nash equilibria are the ones resting on empty threats. *([3.2](lessons/03-02-backward-induction-subgame-perfection.md))*
- Backward induction needs **perfect information and a finite horizon**; the one-shot deviation principle needs **continuity at infinity** (a finite horizon or discounting). *([3.2](lessons/03-02-backward-induction-subgame-perfection.md))*
- Stating a threat doesn't make it real — it is credible only if executing it is optimal *at the node where it's tested*. *([3.2](lessons/03-02-backward-induction-subgame-perfection.md))*

### Repetition and folk theorems

- Finite repetition of a **unique-NE** stage game unravels completely, no matter how large $T$. What rescues real cooperation is *uncertainty about the end* (read $\delta$ as a continuation probability) or *multiple* stage equilibria. *([3.3](lessons/03-03-repeated-games-finite-infinite.md))*
- A **higher** $\delta$ makes cooperation *easier*, not harder — the punishment weighs more. *([3.3](lessons/03-03-repeated-games-finite-infinite.md))*
- The punishment must itself be an equilibrium of the continuation game, or subgame perfection kills it. A nastier threat that hurts the punisher is exactly what SPE was invented to rule out. *([3.3](lessons/03-03-repeated-games-finite-infinite.md), [3.4](lessons/03-04-folk-theorems.md))*
- Minmax is $\min_{\sigma_{-i}}\max_{a_i}$ — **others minimize first**. Swapping the operators gives the maximin, a different (weakly larger) number. *([3.4](lessons/03-04-folk-theorems.md))*
- The pack may need to **mix** to hold you down; pure-action minmax overstates your floor and wrongly shrinks the sustainable set. *([3.4](lessons/03-04-folk-theorems.md))*
- Minmax $\ne$ stage Nash payoff in general (they coincide in the PD by accident). Nash is a mutual best response; minmax is a hostile gang-up. *([3.4](lessons/03-04-folk-theorems.md))*
- The feasible set is the **convex hull**, not the finite list of outcome points — the interior needs time-averaging or a public coin. *([3.4](lessons/03-04-folk-theorems.md))*
- The folk theorem doesn't predict cooperation; it predicts *everything* above minmax, which is why "it's an equilibrium" stops being a sharp claim. *([3.4](lessons/03-04-folk-theorems.md))*

### Bargaining

- The disagreement point is half the answer: $u_1^{*}=d_1+\tfrac12\sigma$, so raising your fallback raises your share unit-for-unit. Distinguish $d$ (always binds) from a mid-game **outside option** (binds only when it exceeds the continuation value). *([3.5](lessons/03-05-bargaining.md))*
- **IIA** is the axiom to scrutinize; drop it for monotonicity and Kalai–Smorodinsky gives a different split. *([3.5](lessons/03-05-bargaining.md))*
- First-mover advantage is a *friction* effect and vanishes as $\delta\to1$ — don't over-read the asymmetry in $v_1$. *([3.5](lessons/03-05-bargaining.md))*
- INV means utility units are meaningless across people; interpersonal comparison enters only through $\alpha$ or through $d$. *([3.5](lessons/03-05-bargaining.md))*

### Types, beliefs, and refinements

- A Bayesian strategy is a **table over types**, not an action. Solve type by type. *([4.1](lessons/04-01-bayesian-games-bayes-nash.md))*
- Best response is in expectation over the **posterior** — with correlated types, using the prior instead of the conditional is the classic error. *([4.1](lessons/04-01-bayesian-games-bayes-nash.md))*
- The **interim** condition binds type by type; "good on average across my types" is the weaker *ex ante* view and is not enough. *([4.1](lessons/04-01-bayesian-games-bayes-nash.md))*
- The common prior is a modeling assumption, not a law — it rules out players who simply disagree about the odds. *([4.1](lessons/04-01-bayesian-games-bayes-nash.md))*
- Subgame perfection is usually **toothless** under incomplete information: few or no proper subgames, so it collapses to Nash. *([4.4](lessons/04-04-perfect-bayesian-sequential-equilibrium.md))*
- Bayes pins beliefs **only on the path**; off it you get $0/0$ and the freedom that breeds multiplicity. But *on*-path beliefs are forced — you cannot rescue an on-path failure with a clever off-path belief. *([4.4](lessons/04-04-perfect-bayesian-sequential-equilibrium.md))*
- Sequential rationality must hold at **every** information set, including off-path ones. *([4.4](lessons/04-04-perfect-bayesian-sequential-equilibrium.md))*
- "Perfect" sounds stronger, but sequential $\subseteq$ PBE — sequential equilibrium *adds* limit-consistency. *([4.4](lessons/04-04-perfect-bayesian-sequential-equilibrium.md))*
- Beliefs are **part of** the equilibrium object: propose $(\sigma,\mu)$ together and check both conditions jointly. *([4.4](lessons/04-04-perfect-bayesian-sequential-equilibrium.md))*
- The Intuitive Criterion restricts **beliefs**, not strategies; the equilibrium's collapse is a consequence. And its bite depends on the numbers — a high enough prior can make a pooling equilibrium survive. *([4.5](lessons/04-05-signaling-games-refinements.md))*
- Without single crossing there is no separating equilibrium — and single crossing alone isn't enough if the cost gap is too small to deter mimicry. *([4.5](lessons/04-05-signaling-games-refinements.md))*
- A signal being an equilibrium doesn't make it efficient: separation often burns real value to prove something the receiver already valued. *([4.5](lessons/04-05-signaling-games-refinements.md))*

### Auctions and revenue

- Second-price truthfulness is **dominant** (no prior, no $n$, no $F$); first-price shading is a **Bayes–Nash** equilibrium that depends on both. Different solution concepts — don't file them together. *([4.2](lessons/04-02-auctions-equilibrium-bidding.md))*
- In a Vickrey auction your bid decides *whether* you win; someone else's bid decides *what you pay*. That decoupling is the whole proof. *([4.2](lessons/04-02-auctions-equilibrium-bidding.md))*
- **More** bidders means **less** shading, not more: $\tfrac{n-1}{n}\to1$. Thin competition is what lets you lowball. *([4.2](lessons/04-02-auctions-equilibrium-bidding.md))*
- Revenue equivalence needs *both* hypotheses (same allocation **and** $U(0)=0$); a reserve, asymmetric bidders, or risk aversion each breaks it. *([4.3](lessons/04-03-revenue-equivalence-theorem.md))*
- Only **expected** revenue is equal; realized payments differ sample by sample. *([4.3](lessons/04-03-revenue-equivalence-theorem.md))*
- Optimal $\ne$ efficient. Myerson's reserve deliberately destroys surplus, and with asymmetric bidders the higher-value bidder can lose. *([5.4](lessons/05-04-bayesian-mechanism-design-optimal-auction.md))*
- The reserve solves a **single-agent** condition, so it doesn't depend on $n$ — more rivals raise revenue, not the reserve. *([5.4](lessons/05-04-bayesian-mechanism-design-optimal-auction.md))*
- **Regularity is a real hypothesis** — if $\psi$ isn't monotone the pointwise rule isn't implementable and you must iron. *([5.4](lessons/05-04-bayesian-mechanism-design-optimal-auction.md))*

### Social choice and mechanism design

- Arrow feeds on **ordinal, non-comparable** rankings; allow cardinal utility or money and you've left his world (that is exactly VCG's escape hatch). *([5.1](lessons/05-01-social-choice-impossibility.md))*
- Arrow (rankings in, ranking out, *inconsistent axioms*) and Gibbard–Satterthwaite (rankings in, one winner out, *manipulable*) are twins, not the same theorem. Keep the objects straight. *([5.1](lessons/05-01-social-choice-impossibility.md))*
- Single-peakedness restricts **preferences**, not alternatives, and the *whole profile* must be inside the domain — one double-peaked voter brings the cycle back. *([5.1](lessons/05-01-social-choice-impossibility.md))*
- Strategy-proof means truth is **dominant**, not merely a Nash equilibrium — which is precisely why it's so hard to get. *([5.1](lessons/05-01-social-choice-impossibility.md))*
- The revelation principle is about analysis, not description: "truthful WLOG" is not "the world is truthful", it does not *create* implementability, and it delivers only weak implementation. *([5.2](lessons/05-02-revelation-principle-incentive-compatibility.md))*
- IC without IR is not feasibility — a perfectly truthful mechanism with a crushing entry fee is one nobody enters. *([5.2](lessons/05-02-revelation-principle-incentive-compatibility.md))*
- DSIC $\subsetneq$ BIC: every dominant-strategy mechanism is Bayesian incentive compatible, never the reverse. *([5.2](lessons/05-02-revelation-principle-incentive-compatibility.md))*
- A Clarke payment is the externality on **others** — two welfare numbers over others only. Your own value never enters your bill directly. *([5.3](lessons/05-03-dominant-strategy-mechanisms-vcg.md))*
- DSIC is robustness to **unilateral** deviation only: VCG is notoriously open to **collusion** and **false-name (shill)** bids. *([5.3](lessons/05-03-dominant-strategy-mechanisms-vcg.md))*
- VCG maximizes **welfare**, not revenue, and is generically **not budget-balanced** — you cannot rebate the collected money without destroying incentives. *([5.3](lessons/05-03-dominant-strategy-mechanisms-vcg.md))*
- Myerson–Satterthwaite needs **overlapping supports**; with commonly-known gains from trade the impossibility evaporates. *([5.5](lessons/05-05-limits-of-efficient-design.md))*
- Its "inefficiency" is not clumsy engineering — it is what the *best possible* design must give up. And it is an **interim** statement about the whole rule, not an ex-post claim about one draw. *([5.5](lessons/05-05-limits-of-efficient-design.md))*
- You cannot escape by dropping incentive compatibility and "asking nicely"; the real escape hatches are compulsion (drop IR) or subsidy (drop BB). *([5.5](lessons/05-05-limits-of-efficient-design.md))*

### Cooperative games, matching, and dynamics

- The core demands $\sum_{i\in S}x_i\ge v(S)$ for **every** coalition, not just singletons — an individually rational split can still be blocked by a pair. *([6.1](lessons/06-01-coalitional-games-core.md))*
- Unlike Nash equilibrium, a stable division is **not** guaranteed: the core can be empty, and superadditivity is not enough (the 3-player majority game is the standing counterexample). *([6.1](lessons/06-01-coalitional-games-core.md))*
- $v(S)$ is what $S$ can guarantee **by itself**, independent of outsiders — it is not a Nash payoff. *([6.1](lessons/06-01-coalitional-games-core.md))*
- The Shapley value is a **point** (fairness); the core is a **region** (stability). The Shapley value can sit outside a nonempty core, and it is defined even when the core is empty. Convex games are where they agree. *([6.2](lessons/06-02-shapley-value.md))*
- Marginal contribution is **relational** — it depends on who is already in the room, which is exactly why you average over all $n!$ orders instead of evaluating one convenient coalition. *([6.2](lessons/06-02-shapley-value.md))*
- **Additivity** is the axiom doing the quiet heavy lifting (it's what makes $\varphi$ linear in $v$) — name it if asked which one you'd scrutinize. *([6.2](lessons/06-02-shapley-value.md))*
- Blocking needs **both** parties to prefer the deviation; one-sided longing is not a blocking pair. *([6.3](lessons/06-03-stable-matching-market-design.md))*
- "The Gale–Shapley matching" is ambiguous until you say **who proposes** — proposers get their best stable partner, receivers their worst. *([6.3](lessons/06-03-stable-matching-market-design.md))*
- Deferred acceptance is strategy-proof for **proposers only**, and no stable mechanism can be strategy-proof for both sides. *([6.3](lessons/06-03-stable-matching-market-design.md))*
- Every ESS is a symmetric Nash equilibrium, but not conversely — you must check the invasion inequality, and RPS's center fails it. *([6.4](lessons/06-04-evolutionary-game-theory.md))*
- Existence is not stability: replicator dynamics need not converge (RPS orbits forever), and ESS is only robustness to a **small** invasion. *([6.4](lessons/06-04-evolutionary-game-theory.md), [6.5](lessons/06-05-learning-nash-program.md))*
- Fictitious play converges to Nash **only** in the listed classes; stating it as a bare theorem is wrong (Shapley's $3\times3$ cycles). *([6.5](lessons/06-05-learning-nash-program.md))*
- No-regret learning reaches **correlated** equilibrium, not Nash. If you expected learning to deliver Nash, that expectation is the misconception. *([6.5](lessons/06-05-learning-nash-program.md))*
- "Learning" here is history-matching, not Bayesian updating over opponent *types* — a different animal from Module 4. *([6.5](lessons/06-05-learning-nash-program.md))*
- Convergence of empirical **frequencies** is not convergence of **play**: the frequencies can settle while the actions cycle in ever-longer blocks. *([6.5](lessons/06-05-learning-nash-program.md))*

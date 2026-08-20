# Game Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Game theory is one question asked at increasing levels of paranoia: *what does a
rational player do when the payoff depends on what other rational players do?*
Each solution concept below is an answer under a different assumption about what
players know — about each other's rationality, about the order of moves, about
each other's payoffs. The **solution-concept ladder** is the most-used entry on
this card: it tells you which concept the problem in front of you actually wants.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $N$, $n$ | the set of players, and how many there are | [1.1](lessons/01-01-normal-form-dominance.md) |
| $S_i$, $A_i$ | player $i$'s menu of pure strategies (static) / actions (dynamic) | [1.1](lessons/01-01-normal-form-dominance.md) |
| $s = (s_i, s_{-i})$ | a strategy profile, split into "mine" and "everyone else's" | [1.1](lessons/01-01-normal-form-dominance.md) |
| $u_i(s)$ | $i$'s payoff — a vNM utility, so averaging it is meaningful | [1.1](lessons/01-01-normal-form-dominance.md) |
| $\sigma_i \in \Delta(S_i)$ | a mixed strategy: a probability distribution over $S_i$ | [1.1](lessons/01-01-normal-form-dominance.md) |
| $BR_i(s_{-i})$ | the **set** of $i$'s best replies to what the others do | [1.2](lessons/01-02-nash-equilibrium.md) |
| $s^*$, $\sigma^*$ | an equilibrium profile (the star always means "in equilibrium") | [1.2](lessons/01-02-nash-equilibrium.md) |
| $p$, $q$ | Row's and Column's probability on their **first** listed action | [1.3](lessons/01-03-mixed-strategies.md) |
| $q_i$, $Q$, $\pi_i$ | firm $i$'s quantity, industry total, firm $i$'s profit | [1.4](lessons/01-04-cournot-bertrand-applications.md) |
| $p = a - bQ$, $c$ | inverse demand (intercept $a$, slope $b$) and constant marginal cost | [1.4](lessons/01-04-cournot-bertrand-applications.md) |
| $h$, $A(h)$ | an information set, and the actions available at it | [2.1](lessons/02-01-extensive-form-backward-induction.md) |
| $\iota(x)$ | the player who moves at node $x$ | [2.1](lessons/02-01-extensive-form-backward-induction.md) |
| $\delta \in (0,1)$ | discount factor — what one unit next period is worth today | [2.3](lessons/02-03-repeated-games-folk-theorem.md) |
| $\delta^*$ | the critical patience above which cooperation is sustainable | [2.3](lessons/02-03-repeated-games-folk-theorem.md) |
| $T, R, P, S$ | prisoner's-dilemma payoffs: temptation, reward, punishment, sucker | [2.3](lessons/02-03-repeated-games-folk-theorem.md) |
| $\underline v_i$ | minmax value — the worst the others can force on $i$ | [2.3](lessons/02-03-repeated-games-folk-theorem.md) |
| $\theta_i \in \Theta_i$ | $i$'s **type**: everything $i$ privately knows | [3.1](lessons/03-01-bayesian-games.md) |
| $P$, $p_i(\theta_{-i}\mid\theta_i)$ | the common prior over types, and $i$'s belief after learning $\theta_i$ | [3.1](lessons/03-01-bayesian-games.md) |
| $s_i:\Theta_i\to A_i$ | a type-contingent strategy — one action per possible self | [3.1](lessons/03-01-bayesian-games.md) |
| $v_i$, $b(v)$, $\beta$ | a bidder's private value, and the bid function mapping value to bid | [3.2](lessons/03-02-auctions.md) |
| $v_{(k)}$ | the $k$-th **highest** of $n$ values ($v_{(1)}$ top, $v_{(2)}$ runner-up) | [3.2](lessons/03-02-auctions.md) |
| $F$ | the common CDF the private values are drawn from | [3.2](lessons/03-02-auctions.md) |
| $m$, $a$, $\mu(t\mid m)$ | signal sent, response chosen, receiver's belief about the sender's type | [3.3](lessons/03-03-signaling-pbe.md) |
| $c_t$ | the per-unit signal cost borne by type $t$ (low for the "good" type) | [3.3](lessons/03-03-signaling-pbe.md) |
| $(S,d)$ | bargaining problem: feasible utility set and disagreement point | [4.1](lessons/04-01-bargaining.md) |
| $x^*$ | the proposer's share in the Rubinstein equilibrium | [4.1](lessons/04-01-bargaining.md) |
| $t_i$, $a^*$ | agent $i$'s transfer (payment), and the efficient decision | [4.2](lessons/04-02-mechanism-design.md) |

**Symbol collisions to keep straight:** $S$ is a strategy set in Module 1, the
*sucker* payoff in [2.3](lessons/02-03-repeated-games-folk-theorem.md), and the
*feasible set* in [4.1](lessons/04-01-bargaining.md). $P$ is a price in
[1.4](lessons/01-04-cournot-bertrand-applications.md), the *punishment* payoff in
[2.3](lessons/02-03-repeated-games-folk-theorem.md), and the *common prior* in
[3.1](lessons/03-01-bayesian-games.md). Read from context, not from the letter.

## Definitions

### Normal-form game

Players, the menus they pick from simultaneously, and a number scoring every
combination of picks. Everything in Module 1 is defined on this object.

$$G = \big(N,\ \{S_i\}_{i\in N},\ \{u_i\}_{i\in N}\big), \qquad u_i:\textstyle\prod_j S_j \to \mathbb{R}$$

*Introduced:* [1.1](lessons/01-01-normal-form-dominance.md)

### Strict dominance

You have another option that does better *no matter what anyone else does* — so
no belief, however paranoid, could justify the dominated one.

$$u_i(\sigma_i',\,s_{-i}) > u_i(s_i,\,s_{-i}) \quad \text{for every } s_{-i}$$

The dominating $\sigma_i'$ may be **mixed**: a strategy can be beaten by a
coin-flip between two others while no single pure strategy beats it.

*Introduced:* [1.1](lessons/01-01-normal-form-dominance.md)

### Weak dominance

Never worse, sometimes better: $\ge$ against every rival profile, with $>$ for at
least one. Weaker blade, and **order-dependent** when iterated.

*Introduced:* [1.1](lessons/01-01-normal-form-dominance.md)

### Best response

Given a specific belief about what the others do, this is what maximizes your own
payoff. A *set*, not a single strategy, because ties happen.

$$BR_i(s_{-i}) = \{\,s_i\in S_i : u_i(s_i,s_{-i}) \ge u_i(s_i',s_{-i}) \ \ \forall s_i'\in S_i\,\}$$

*Introduced:* [1.2](lessons/01-02-nash-equilibrium.md)

### IESDS

Iterated Elimination of Strictly Dominated Strategies: delete everyone's strictly
dominated strategies, then re-check in the smaller game, and repeat. Round $k$
consumes $k$ layers of common knowledge of rationality. **Order-independent.**

*Introduced:* [1.1](lessons/01-01-normal-form-dominance.md)

### Rationalizability

The strategies you could defend under *some* coherent belief — iteratively delete
never-best-responses. In a **two-player** game, never-best-response and strictly
dominated coincide, so rationalizable $=$ IESDS survivors.

*Introduced:* [1.1](lessons/01-01-normal-form-dominance.md)

### Nash equilibrium

A prophecy that survives being announced: told the outcome in advance, no player
wants to unilaterally change their own move.

$$s_i^* \in BR_i(s_{-i}^*) \ \ \forall i \qquad\Longleftrightarrow\qquad u_i(s_i^*, s_{-i}^*) \ge u_i(s_i', s_{-i}^*) \ \ \forall i,\ \forall s_i'$$

**Strict** if every inequality is strict for $s_i' \ne s_i^*$. Tests only
**unilateral** deviations — never joint ones.

*Introduced:* [1.2](lessons/01-02-nash-equilibrium.md)

### Mixed strategy

Roll a private die and let it choose your action. Payoffs extend by expectation,
which makes them **linear** in your own probabilities — the fact that runs all of
Module 1's mixing machinery.

$$\Delta(S_i) = \Big\{\sigma_i : S_i\to[0,1] \ \Big|\ \textstyle\sum_{s_i}\sigma_i(s_i)=1\Big\}$$

*Introduced:* [1.3](lessons/01-03-mixed-strategies.md)

### Support

The actions a mixed strategy plays with strictly positive probability. In
equilibrium every action in the support earns the *same* expected payoff; actions
outside it need only be weakly worse.

*Introduced:* [1.3](lessons/01-03-mixed-strategies.md)

### Extensive-form game

A rooted tree: who moves where, what they can do, what they know when they do it,
and payoffs at the leaves. Timing is part of the game, not decoration.

*Introduced:* [2.1](lessons/02-01-extensive-form-backward-induction.md)

### Information set

The nodes a mover cannot tell apart when choosing. Every node in an information
set must offer the same actions. **Perfect information** means every information
set is a singleton; a simultaneous move is a non-singleton one.

*Introduced:* [2.1](lessons/02-01-extensive-form-backward-induction.md)

### Strategy in an extensive-form game

Not a move — a *complete contingent plan*: one action at **every** information set
of yours, including the ones your own plan guarantees you never reach. Off-path
instructions are what make threats and promises expressible.

$$s_i : \{\text{$i$'s information sets}\}\to\text{actions}, \qquad \#\{\text{pure strategies of }i\} = \prod_{h} |A(h)|$$

*Introduced:* [2.1](lessons/02-01-extensive-form-backward-induction.md)

### Backward induction

Solve the last movers first (nothing follows them, so their choice is easy),
replace each solved node by its payoff, and fold the tree one layer at a time.

*Introduced:* [2.1](lessons/02-01-extensive-form-backward-induction.md)

### Subgame

A self-contained game-within-the-game you could hand a stranger: it starts at a
**singleton** information set and contains everything below it, never slicing an
information set in half. The whole tree is a subgame of itself.

*Introduced:* [2.2](lessons/02-02-subgame-perfection-commitment.md)

### Subgame-perfect equilibrium

Not just "no one wants to deviate at the start" but "everyone's plan is optimal
starting from every point in the tree" — so every threat is one you'd actually
carry out.

$$s \text{ is an SPE} \iff s|_{G'} \text{ is a Nash equilibrium of } G' \text{ for every subgame } G'$$

*Introduced:* [2.2](lessons/02-02-subgame-perfection-commitment.md)

### Non-credible threat

An off-path action that is optimal to *announce* only because it never has to be
executed. Nash keeps these; SPE deletes them. The whole gap between the two
concepts is exactly this set.

*Introduced:* [2.2](lessons/02-02-subgame-perfection-commitment.md)

### Commitment

Credibly destroying your own option to back down. Because a threat is powerful
only when credible, having *fewer* choices can raise your payoff — the engine of
first-mover advantage (Stackelberg) and, when unavailable, of the hold-up problem.

*Introduced:* [2.2](lessons/02-02-subgame-perfection-commitment.md)

### Discount factor

How much a unit of payoff next period is worth today.
Equivalently $\delta = \frac{1}{1+r}$ for interest rate $r$; a per-period
continuation probability plays the identical algebraic role.

*Introduced:* [2.3](lessons/02-03-repeated-games-folk-theorem.md)

### Grim trigger

"Cooperate while everyone always has; the first defection, punish forever." It is
subgame-perfect because the punishment phase — stage-Nash forever — is itself an
equilibrium, so the threat is one you'd genuinely carry out.

*Introduced:* [2.3](lessons/02-03-repeated-games-folk-theorem.md)

### Minmax value

The worst the pack can do to you when you defend yourself optimally. No
equilibrium can ever pay you less, which is why it is the floor in the Folk
Theorem.

$$\underline v_i = \min_{\sigma_{-i}}\ \max_{\sigma_i}\ u_i(\sigma_i,\sigma_{-i})$$

*Introduced:* [2.3](lessons/02-03-repeated-games-folk-theorem.md)

### Feasible and individually rational

**Feasible** = in the convex hull of the stage game's payoff profiles (reachable
by public randomization). **Strictly individually rational** =
$v_i > \underline v_i$ for every $i$. The Folk Theorem's target region is the
intersection of the two.

*Introduced:* [2.3](lessons/02-03-repeated-games-folk-theorem.md)

### Bayesian game

A game where you don't know others' payoffs, rewritten as one you do: Nature
draws a type profile from a shared distribution, each player privately sees their
own coordinate, then everyone moves.

$$\big(N,\ \{A_i\},\ \{\Theta_i\},\ P,\ \{u_i(a;\theta)\}\big)$$

*Introduced:* [3.1](lessons/03-01-bayesian-games.md)

### Type

Everything a player privately knows — their cost, their valuation, their
preferences — bundled into one label. Your strategy must specify an action for
each type you might be.

*Introduced:* [3.1](lessons/03-01-bayesian-games.md)

### Common prior

Everyone starts from the same distribution $P$ over type profiles (the Harsanyi
doctrine). Shared prior, **divergent posteriors**: after conditioning on private
information, players believe different things.

*Introduced:* [3.1](lessons/03-01-bayesian-games.md)

### Bayes–Nash equilibrium

Every *type* of every player best-responds in expectation, averaging over its
beliefs about rivals' types. It is ordinary Nash equilibrium played by
"type-agents," so existence carries over unchanged.

$$s_i^*(\theta_i)\in\arg\max_{a_i}\ \sum_{\theta_{-i}} p_i(\theta_{-i}\mid\theta_i)\, u_i\big(a_i, s_{-i}^*(\theta_{-i});\theta_i,\theta_{-i}\big)$$

*Introduced:* [3.1](lessons/03-01-bayesian-games.md)

### Independent private values

Each bidder knows their own value for the object and nobody else's; the values
are independent draws from one commonly known distribution. The baseline world
for every auction result on this card.

*Introduced:* [3.2](lessons/03-02-auctions.md)

### Perfect Bayesian equilibrium

Subgame perfection for games where the mover doesn't know which node they're at:
attach a **belief** to each information set, require best responses *given the
belief*, and require beliefs to follow Bayes' rule wherever play actually reaches.

- **(SR-receiver)** $a^*(m)\in\arg\max_a \sum_t \mu(t\mid m)\,u_R(t,m,a)$
- **(SR-sender)** $m^*(t)\in\arg\max_m u_S\big(t,m,a^*(m)\big)$
- **(Bayes, on-path only)** $\displaystyle \mu(t\mid m)=\frac{p(t)\,\mathbf{1}[m^*(t)=m]}{\sum_{t'}p(t')\,\mathbf{1}[m^*(t')=m]}$

*Introduced:* [3.3](lessons/03-03-signaling-pbe.md)

### Separating and pooling

**Separating:** different types send different signals, so Bayes forces
degenerate beliefs and the receiver learns the type. **Pooling:** all types send
the same signal, so the posterior equals the prior and nothing is learned.

*Introduced:* [3.3](lessons/03-03-signaling-pbe.md)

### Single-crossing

The costly signal is *cheaper for the type that gains from being identified*, so
there is a signal level the good type will pay for and the bad type won't. No
single-crossing, no credible separation.

*Introduced:* [3.3](lessons/03-03-signaling-pbe.md)

### Intuitive criterion

A refinement that disciplines the free off-path beliefs: if a type could never
gain by deviating to an off-path message even under the most favorable possible
response, the receiver may not put weight on that type there.

*Introduced:* [3.3](lessons/03-03-signaling-pbe.md)

### Nash bargaining solution

Split the pie so as to maximize the **product of both sides' gains over what they
get if talks fail**. The unique rule satisfying Pareto efficiency, symmetry,
scale invariance, and IIA.

$$f(S,d) = \arg\max_{(u_1,u_2)\in S,\ u\ge d}\ (u_1-d_1)(u_2-d_2)$$

*Introduced:* [4.1](lessons/04-01-bargaining.md)

### Disagreement point

What each side gets if no deal is struck — the outside option, and the source of
all bargaining leverage. Raise $d_i$ and $i$'s equilibrium share rises.

*Introduced:* [4.1](lessons/04-01-bargaining.md)

### Mechanism

Rules: each agent sends a message, a fixed outcome rule turns messages into a
decision and a set of payments. A **direct** mechanism's messages are just
reported types.

*Introduced:* [4.2](lessons/04-02-mechanism-design.md)

### Incentive compatibility

Truth-telling is an equilibrium. **DSIC** — truth is optimal whatever others
report (second-price auction). **BIC** — truth is optimal on average given others
report truthfully (first-price shading equilibrium). DSIC is strictly stronger.

$$v_i\big(a(\theta_i,\hat\theta_{-i})\big) - t_i(\theta_i,\hat\theta_{-i}) \ \ge\ v_i\big(a(\hat\theta_i,\hat\theta_{-i})\big) - t_i(\hat\theta_i,\hat\theta_{-i}) \quad \forall\, \hat\theta_i,\hat\theta_{-i}$$

*Introduced:* [4.2](lessons/04-02-mechanism-design.md)

### Revelation principle

Anything implementable is implementable **truthfully**: fold each agent's
equilibrium strategy into the rulebook and the new machine asks for your type and
plays your old strategy for you — so lying becomes pointless.

$$f = g\circ\sigma^* \quad\text{is incentive-compatible and yields the same outcome}$$

*Introduced:* [4.2](lessons/04-02-mechanism-design.md)

## Formulas and rules

### The solution-concept ladder

Read down the table until you hit the row whose "game form" matches the problem
in front of you. Each rung adds an assumption and deletes more predictions.

| Concept | Game form it lives on | What it requires | What it rules out | What it still permits |
|---|---|---|---|---|
| **Strict dominance / IESDS** | normal form | rationality, iterated to common knowledge of rationality | strategies no belief could justify | usually many profiles; beliefs need not be *correct* |
| **Rationalizability** | normal form | same; survivors are best replies to *some* belief | never-best-responses | with 2 players, exactly the IESDS survivors |
| **Nash equilibrium** | normal form (static, complete info) | beliefs are **correct** — mutual best response | profiles someone can beat by deviating **alone** | Pareto-inefficient outcomes; multiplicity; non-existence in pure strategies |
| **Mixed Nash** | finite normal form | randomization allowed; each support action is tied for best | nothing more than Nash | many equilibria; existence guaranteed but non-constructive |
| **Subgame-perfect (SPE)** | extensive form, complete info | Nash **in every subgame** — sequential rationality | non-credible off-path threats | multiplicity when payoffs tie; silent inside non-singleton information sets |
| **Bayes–Nash (BNE)** | static game, incomplete info | a common prior, and every **type** best-responds in expectation | strategies suboptimal for some type | no learning during play; inherits Nash's blindness to off-path credibility |
| **Perfect Bayesian (PBE)** | dynamic game, incomplete info | sequential rationality *given beliefs*, plus Bayes-consistency **on path** | responses no belief supports; incredible continuation play | off-path beliefs are **free** → multiplicity → refinements needed |
| **Dominant-strategy (DSIC)** | mechanisms / direct revelation | truth optimal against *any* rival report | all reliance on rivals' rationality | rarely available without money and quasilinear utility |

*From* [1.1](lessons/01-01-normal-form-dominance.md), [1.2](lessons/01-02-nash-equilibrium.md), [1.3](lessons/01-03-mixed-strategies.md), [2.2](lessons/02-02-subgame-perfection-commitment.md), [3.1](lessons/03-01-bayesian-games.md), [3.3](lessons/03-03-signaling-pbe.md), [4.2](lessons/04-02-mechanism-design.md)

### Nesting of the concepts

Each refinement is a *subset*, so a refinement can only ever shrink your list of
predictions — never add to it.

$$\{\text{dominant-strategy profiles}\}\ \subseteq\ \{\text{NE}\}\ \subseteq\ \{\text{rationalizable}\} \ \overset{n=2}{=}\ \{\text{IESDS survivors}\}$$
$$\{\text{SPE}\}\ \subseteq\ \{\text{NE}\}, \qquad \{\text{PBE}\}\ \subseteq\ \{\text{BNE}\}, \qquad \{\text{intuitive-criterion survivors}\}\ \subseteq\ \{\text{PBE}\}$$

Two consequences worth memorizing: **every NE survives IESDS**, so if IESDS
leaves a unique profile it *is* the unique NE; and **backward induction $\subsetneq$
Nash** in a tree, so counting Nash equilibria of the normal form always
over-counts the sensible predictions.

*From* [1.2](lessons/01-02-nash-equilibrium.md) *and* [2.1](lessons/02-01-extensive-form-backward-induction.md)

### Existence theorems

| Theorem | Statement | Fine print |
|---|---|---|
| **Nash (1950)** | every **finite** game has at least one equilibrium in mixed strategies | needs finiteness (or compact strategy sets with quasiconcave payoffs); non-constructive, via **Kakutani** applied to $\sigma\mapsto\prod_i BR_i(\sigma_{-i})$ |
| **Zermelo / Kuhn** | every finite **perfect-information** tree has a backward-induction solution, and it is a Nash equilibrium | unique outcome only if no player is ever indifferent between two terminal payoffs |
| **Kuhn (SPE)** | in a finite perfect-information game, SPE outcomes $=$ backward-induction outcomes | with simultaneous-move pockets you must use SPE, not node-by-node folding |
| **Rubinstein (1982)** | the alternating-offers game has a **unique** SPE; it is stationary and agreement is immediate | complete information; delay in reality comes from *incomplete* information |

The Kakutani argument works because $\prod_i\Delta(S_i)$ is compact and convex and
$BR$ is nonempty-, convex-valued and upper hemicontinuous — all three from the
**linearity** of expected payoffs in your own weights.

*From* [1.3](lessons/01-03-mixed-strategies.md), [2.1](lessons/02-01-extensive-form-backward-induction.md), [2.2](lessons/02-02-subgame-perfection-commitment.md), [4.1](lessons/04-01-bargaining.md)

### Solving a static game — the checklist

1. **Dominance first.** Try mixtures, not just pure strategies, as dominators. If IESDS leaves one profile, you're done: it is the unique NE.
2. **Best-response marks.** Mark Row's payoff-maximizing row in each column and Column's payoff-maximizing column in each row; cells with both marked are the pure NE. ("Mark and intersect" is the entire algorithm.)
3. **No pure NE, or you want all of them?** Mix. Solve the **indifference** equations.
4. **Continuous actions?** Differentiate: write each player's FOC, solve for $BR_i$, intersect. Check the SOC.

*From* [1.1](lessons/01-01-normal-form-dominance.md), [1.2](lessons/01-02-nash-equilibrium.md), [1.4](lessons/01-04-cournot-bertrand-applications.md)

### Indifference principle

You tune **your** mix to make the **opponent** indifferent — never yourself. Your
own indifference is what their mix arranges.

$$\sigma_i^*(s_i)>0 \ \Longrightarrow\ u_i(s_i,\sigma_{-i}^*) = \max_{s_i'} u_i(s_i',\sigma_{-i}^*)$$

For a $2\times2$ game with Row playing the top action w.p. $p$ and Column the
left action w.p. $q$:

- Set **Row's** two expected payoffs (which contain $q$) equal $\Rightarrow$ solves for $q^*$.
- Set **Column's** two expected payoffs (which contain $p$) equal $\Rightarrow$ solves for $p^*$.

Corollary worth remembering: each player's equilibrium mix is a function of the
**opponent's** payoffs alone. Change only your own payoffs and only *their* mix
moves.

*From* [1.3](lessons/01-03-mixed-strategies.md)

### The canonical 2×2 zoo

The games every problem set draws from. Payoffs are Row's; each is symmetric
unless noted.

| Game | Structure | Pure NE | Mixed NE | The moral |
|---|---|---|---|---|
| **Prisoner's Dilemma** | $T>R>P>S$; $D$ strictly dominant | $(D,D)$ only | — | unique NE, Pareto-dominated by $(C,C)$ |
| **Stag Hunt** | coordination, Pareto-ranked | $(S,S)$, $(H,H)$ | one | payoff-dominant $(S,S)$ vs risk-dominant $(H,H)$ |
| **Pure coordination** | aligned interests | both diagonal cells | one | multiplicity, not efficiency, is the problem |
| **Battle of the Sexes** | coordination **with conflict** | $(O,O)$, $(F,F)$ | one, Pareto-**worse** than either pure | fairness by randomizing costs everyone |
| **Chicken (anti-coordination)** | each wants the *opposite* | the two **off-diagonal** cells | one, symmetric | no symmetric pure equilibrium exists |
| **Matching Pennies** | zero-sum, pure conflict | **none** | $(\tfrac12,\tfrac12)$ each | opposed best responses live on disjoint diagonals — this is exactly why mixing exists |

*From* [1.2](lessons/01-02-nash-equilibrium.md) *and* [1.3](lessons/01-03-mixed-strategies.md)

### Oligopoly formula sheet

Inverse demand $p = a - bQ$, constant marginal cost $c$, $a>c$. These are the
numbers you should never re-derive under time pressure.

| Model | Quantity | Price | Profit (each) |
|---|---|---|---|
| Monopoly | $q^M = \dfrac{a-c}{2b}$ | $\dfrac{a+c}{2}$ | $\dfrac{(a-c)^2}{4b}$ |
| Cournot, $n$ firms | $q_i^* = \dfrac{a-c}{(n+1)b}$, $\ Q^* = \dfrac{n(a-c)}{(n+1)b}$ | $\dfrac{a+nc}{n+1}$ | $\dfrac{(a-c)^2}{(n+1)^2 b}$ |
| Cournot duopoly | $\dfrac{a-c}{3b}$ each | $\dfrac{a+2c}{3}$ | $\dfrac{(a-c)^2}{9b}$ |
| Stackelberg | leader $\dfrac{a-c}{2b}$, follower $\dfrac{a-c}{4b}$ | $\dfrac{a+3c}{4}$ | leader $\dfrac{(a-c)^2}{8b}$, follower $\dfrac{(a-c)^2}{16b}$ |
| Bertrand (homogeneous, equal $c$) | market splits | $p_1=p_2=c$ | $0$ |
| Perfect competition ($n\to\infty$) | $Q\to\dfrac{a-c}{b}$ | $p\to c$ | $\to 0$ |

Cournot best response: $BR_i(q_{-i}) = \dfrac{a-c}{2b} - \dfrac{Q_{-i}}{2}$ — a
rival unit crowds out **half** a unit of mine. Profit ordering with a leader:
$\tfrac18 > \tfrac19 > \tfrac1{16}$, i.e. leader $>$ Cournot $>$ follower.

**Tragedy of the commons** with value per animal $v(G)$, cost $c$:

$$\text{herder: } v(G) + g_i v'(G) - c = 0 \qquad\text{vs.}\qquad \text{planner: } v(G) + G\,v'(G) - c = 0$$

The single term difference ($g_i$ vs $G$) *is* the externality. With $v = a-G$:
$G^{\text{NE}} = \frac{n(a-c)}{n+1} > G^{\text{opt}} = \frac{a-c}{2}$ for $n\ge2$,
wedge $\frac{(a-c)(n-1)}{2(n+1)}$, and the rent fully dissipates as $n\to\infty$.

*From* [1.4](lessons/01-04-cournot-bertrand-applications.md) *and* [2.2](lessons/02-02-subgame-perfection-commitment.md)

### Discounting algebra

The three sums every repeated-game calculation reduces to. All require
$0<\delta<1$ (geometric convergence).

$$\sum_{t=0}^{\infty}\delta^t x = \frac{x}{1-\delta}, \qquad \sum_{t=1}^{\infty}\delta^t x = \frac{\delta x}{1-\delta}, \qquad \sum_{t=0}^{T-1}\delta^t x = \frac{x(1-\delta^T)}{1-\delta}$$

The **average per-period** value of a stream worth $V$ is $(1-\delta)V$ — that
normalization is what lets Folk-Theorem payoffs be compared to stage payoffs.

*From* [2.3](lessons/02-03-repeated-games-folk-theorem.md)

### The cooperation threshold

Compare "cooperate forever" against "grab the temptation once, then eat the
punishment forever":

$$\frac{\pi^{C}}{1-\delta} \ \ge\ \pi^{D} + \frac{\delta\,\pi^{P}}{1-\delta} \qquad\Longleftrightarrow\qquad \delta \ \ge\ \delta^* = \frac{\pi^{D}-\pi^{C}}{\pi^{D}-\pi^{P}}$$

with $\pi^{C}$ the cooperative payoff, $\pi^{D}$ the best one-shot deviation, and
$\pi^{P}$ the per-period punishment ($\pi^D > \pi^C > \pi^P$).

| Setting | $\delta^*$ |
|---|---|
| Prisoner's dilemma, grim trigger with $(D,D)$ | $\dfrac{T-R}{T-P}$ |
| Cournot duopoly collusion, reversion to Cournot | $\dfrac{9}{17}\approx0.53$ (from $\pi^{\text{coll}}=\tfrac K8$, $\pi^{\text{dev}}=\tfrac{9K}{64}$, $\pi^{\text{cournot}}=\tfrac K9$, $K=(a-c)^2$) |

$\delta^*$ **rises** with the temptation $\pi^D-\pi^C$ and **falls** with the
future stakes $\pi^C-\pi^P$: greedier windfalls or feebler punishments demand
more patience. Cournot's threshold exceeds the PD's precisely because reverting
to Cournot still pays positive profit — a milder punishment.

*From* [2.3](lessons/02-03-repeated-games-folk-theorem.md)

### Folk Theorem

Every feasible, strictly individually rational payoff profile $v$ (i.e. $v$ in
the convex hull with $v_i > \underline v_i$ for all $i$) is the average payoff of
some SPE, for all $\delta$ close enough to 1.

- **Friedman version:** any $v$ strictly Pareto-dominating a *stage-game Nash* profile is sustainable using that profile as the punishment — automatically credible.
- **Fudenberg–Maskin version:** reaches everything down to the **minmax** floor, under full dimensionality.
- **Finite horizon:** if the stage game has a unique Nash equilibrium $a^*$ and is repeated a known $T$ times, the unique SPE is $a^*$ in *every* period. Uncertainty about the end (continuation probability) restores cooperation; a known deadline does not.

*From* [2.3](lessons/02-03-repeated-games-folk-theorem.md)

### Solving a Bayesian game

1. **Solve the informed player type by type** — often one action is dominant *within* a type, which settles it immediately.
2. **The uninformed player averages** over the prior against the rivals' type-contingent actions.
3. **Continuum of types?** Same condition, integrated instead of summed; the strategy is a *function* of the type.

Interim belief (Bayes' rule on the common prior); independent types make the
posterior equal the prior:

$$p_i(\theta_{-i}\mid\theta_i) = \frac{P(\theta_i,\theta_{-i})}{\sum_{\theta_{-i}'} P(\theta_i,\theta_{-i}')}$$

**Interim $=$ ex-ante:** maximizing type by type and maximizing the whole
type-contingent plan give the same equilibria, because every type carries
positive weight in the ex-ante sum.

*From* [3.1](lessons/03-01-bayesian-games.md)

### Auctions (IPV, values uniform on $[0,1]$)

| Format | Equilibrium strategy | Winner pays | Expected revenue |
|---|---|---|---|
| Second-price (Vickrey) | $b_i = v_i$ — **weakly dominant** | $v_{(2)}$ | $\mathbb{E}[v_{(2)}] = \dfrac{n-1}{n+1}$ |
| First-price sealed-bid | $b(v)=\dfrac{n-1}{n}v$ (uniform only) | own bid $\dfrac{n-1}{n}v_{(1)}$ | $\dfrac{n-1}{n}\cdot\dfrac{n}{n+1} = \dfrac{n-1}{n+1}$ |

**General (any $F$):** bid what you'd expect the strongest rival to be worth,
*conditional on your winning*:

$$b(v) = \mathbb{E}\big[\text{highest of the other } n-1 \text{ values} \ \big|\ \text{all below } v\big]$$

**Order statistics of $n$ i.i.d. uniforms on $[0,1]$** — the course uses these
without deriving them:

$$\mathbb{E}[v_{(k)}] = \frac{n+1-k}{n+1}, \qquad \mathbb{E}[v_{(1)}]=\frac{n}{n+1}, \qquad \mathbb{E}[v_{(2)}]=\frac{n-1}{n+1}$$

For $n=2$: $\mathbb{E}[\max]=\tfrac23$, $\mathbb{E}[\min]=\tfrac13$, and
$b(v)=v/2$. Win probability with value $v$ against $n-1$ rivals: $v^{\,n-1}$.

**Revenue Equivalence Theorem.** Any IPV auction that (i) always awards the
object to the highest-value bidder and (ii) gives the lowest type zero expected
surplus yields the *same* expected revenue. Format changes *who pays what in
which state*, never the seller's average take.

*From* [3.2](lessons/03-02-auctions.md)

### Signaling: solving a PBE

1. **Receiver's threshold.** Compute the belief at which the receiver flips responses. In the two-type, two-response case with payoff 1 for matching, $h$ is optimal iff $\mu\ge\tfrac12$.
2. **On-path beliefs by Bayes.** Separating $\Rightarrow$ degenerate ($\mu\in\{0,1\}$). Pooling $\Rightarrow$ posterior $=$ prior.
3. **Check sender incentives** given the receiver's response *rule*.
4. **Off-path beliefs are free** — pick them to deter deviations (usually pessimistically), then state the full range that works.

**Spence, least-cost separating.** Types $\theta_H>\theta_L$, per-unit signal
costs $c_H<c_L$, wage $=$ identified productivity. Separation needs $e_L=0$ and

$$\frac{\theta_H-\theta_L}{c_L} \ \le\ e_H \ \le\ \frac{\theta_H-\theta_L}{c_H}$$

(lower bound: $L$ won't mimic; upper bound: $H$ still prefers signalling to
passing as $L$). The **least-cost** equilibrium takes the lower bound. With
$\theta_H=2,\theta_L=1,c_H=1,c_L=2$: $e_H=\tfrac12$ and $H$'s payoff is $\tfrac32$.

Pooling at $e=0$ pays the prior-weighted wage
$w_{\text{pool}} = \lambda\theta_H + (1-\lambda)\theta_L$ and survives only on
pessimistic off-path beliefs — which is exactly what the intuitive criterion
strips away.

*From* [3.3](lessons/03-03-signaling-pbe.md)

### Bargaining

| Object | Result |
|---|---|
| Nash solution, linear pie of size 1 | split the surplus **above** $d$ equally: $u_i = d_i + \tfrac12\big(1 - d_1 - d_2\big)$ |
| Symmetric case $d=(0,0)$ | fifty-fifty (also straight from AM–GM: $u_1u_2\le\tfrac14$ with equality iff $u_1=u_2$) |
| Rubinstein alternating offers | proposer keeps $x^* = \dfrac{1}{1+\delta}$, responder gets $\dfrac{\delta}{1+\delta}$; agreement is **immediate** |
| Self-consistency that pins it | $x^* = 1 - \delta x^*$ — offer the responder exactly their continuation value $\delta x^*$, no more, no less |
| Nash program | $\dfrac{1}{1+\delta}\to\tfrac12$ as $\delta\to1$: the strategic answer converges to the axiomatic one |
| First-mover premium | $\dfrac{1}{1+\delta}-\tfrac12$, strictly positive and **decreasing** in $\delta$ (derivative $-\,(1+\delta)^{-2}$) |

Nash's four axioms: **Pareto efficiency**, **symmetry**, **scale invariance**,
**IIA**. Drop IIA for a monotonicity axiom instead and you get the
Kalai–Smorodinsky solution — "the unique fair split" is unique only relative to
Nash's particular four.

*From* [4.1](lessons/04-01-bargaining.md)

### Mechanism design

**Quasilinear utility** (the domain where money can buy the truth):
$u_i = v_i(a) - t_i$.

**VCG / pivot (Clarke) payments.** Choose the efficient decision, then charge
each agent the harm their presence does to everyone else:

$$a^* \in \arg\max_{a\in A}\sum_{j\in N} v_j(a), \qquad t_i = \underbrace{\max_a \sum_{j\ne i} v_j(a)}_{\text{others' best without } i} - \underbrace{\sum_{j\ne i} v_j(a^*)}_{\text{others' value at } a^*}$$

Why it is DSIC: the first term doesn't depend on $i$'s report, so maximizing
$u_i$ is the same as maximizing total welfare $\sum_j v_j(a^*)$ — which the
machine already does, using $i$'s reported value. Agents who don't change the
decision pay nothing.

**Second-price auction $=$ VCG** with $A=$ "who gets the one good": the winner's
pivot payment is $v_{(2)}$ (the value society forgoes), losers pay $0$.

**The impossibility walls.**

| Theorem | Says | Escape hatch |
|---|---|---|
| **Arrow** | no rank-aggregation rule is simultaneously unanimous, IIA, and non-dictatorial | leave pure ordinal social choice |
| **Gibbard–Satterthwaite** | every onto, non-dictatorial social choice rule on $\ge3$ alternatives is **manipulable** | quasilinear utility + transfers (VCG), or a restricted domain (single-peaked $\Rightarrow$ median voter is strategy-proof) |
| **VCG budget** | efficiency + DSIC generically breaks **budget balance** (a bridge worth 12 costing 10 collects only 8) | outside subsidy, or give up one of the three |
| **Myerson–Satterthwaite** | bilateral trade cannot have efficiency + truth + budget balance + voluntary participation together | give up efficiency |

*From* [4.2](lessons/04-02-mechanism-design.md)

## Assumed, not taught here

This is a Tier 0 refresher: it *uses* the following without deriving them. Where
the fact is tabulated above, this table says where the **why** lives.

| Fact | Where it's taught |
|---|---|
| Expectation and its **linearity** — the reason mixed payoffs are linear in your own weights | [prob-stat-refresher 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| Conditional probability and Bayes' rule (the interim belief $p_i(\theta_{-i}\mid\theta_i)$, the PBE belief $\mu$) | [prob-stat-refresher 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) |
| Independence of random variables — used every time rivals' draws are multiplied | [prob-stat-refresher 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |
| The uniform distribution, CDFs and densities (the auction value distribution $F$) | [prob-stat-refresher 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| **Order statistics** $\mathbb{E}[v_{(k)}]$ — no course in the library derives these; the formulas are stated only on this card, built from the CDF machinery of | [prob-stat-refresher 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Geometric series $\sum\delta^t = \frac{1}{1-\delta}$ and why $\lvert\delta\rvert<1$ is needed | [calc-refresher 3.1](../calc-refresher/lessons/03-01-series-convergence-tests.md) |
| First- and second-order conditions for an unconstrained maximum (every Cournot/Stackelberg/Spence FOC) | [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| Lagrange multipliers (the Nash-product maximization in 4.1) | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| AM–GM inequality (the calculus-free route to the fifty-fifty split) | [micro-refresher 2.2](../micro-refresher/lessons/02-02-risk-aversion.md) |
| von Neumann–Morgenstern utility — why payoffs may be averaged at all | [micro-refresher 2.1](../micro-refresher/lessons/02-01-expected-utility.md) |
| Inverse demand, marginal cost, $MR=MC$ and monopoly output | [micro-refresher 4.2](../micro-refresher/lessons/04-02-monopoly-price-discrimination.md) |
| Cournot/Bertrand reaction curves, met heuristically before this course made the equilibrium concept explicit | [micro-refresher 4.3](../micro-refresher/lessons/04-03-oligopoly.md) |
| Pareto efficiency and Pareto dominance | [micro-refresher 5.1](../micro-refresher/lessons/05-01-general-equilibrium-welfare-theorems.md) |
| Externalities, public goods, free-riding (the commons and the VCG bridge) | [micro-refresher 5.2](../micro-refresher/lessons/05-02-externalities-public-goods.md) |
| Adverse selection and the economics of hidden information (Spence, Akerlof) | [micro-refresher 5.3](../micro-refresher/lessons/05-03-asymmetric-information.md) |
| Convex hull and convexity (the Folk Theorem's feasible set; the simplex as a convex set) | [convex-optimization 1.1](../convex-optimization/lessons/01-01-convex-sets-separating-hyperplane.md) |
| **Kakutani's fixed-point theorem** — stated and used for Nash existence, proved nowhere in this course | [grad-game-theory 1.3](../grad-game-theory/lessons/01-03-brouwer-kakutani-fixed-points.md) (a later course — the statement above is all you need here) |

## Pitfalls

### Dominance and rationalizability

- Always allow **mixed** dominators before declaring a strategy undominated — a pure strategy can be crushed by a coin flip between two others. *([1.1](lessons/01-01-normal-form-dominance.md))*
- "Dominated" compares two of *your own* strategies against the **same** rival profile, column by column — not against different ones. A strategy can contain the game's best-ever cell and still be dominated. *([1.1](lessons/01-01-normal-form-dominance.md))*
- Iterated **weak**-dominance elimination is **order-dependent**; there is no "the" weak-dominance solution. Strict dominance is order-independent and safe. *([1.1](lessons/01-01-normal-form-dominance.md))*
- Surviving IESDS means "defensible under some belief," not "optimal." It rarely predicts one outcome. *([1.1](lessons/01-01-normal-form-dominance.md))*

### Reading an equilibrium

- Nash does **not** mean good. The prisoner's dilemma's only equilibrium is the worst symmetric outcome; the concept is silent about joint improvements. *([1.2](lessons/01-02-nash-equilibrium.md), [1.4](lessons/01-04-cournot-bertrand-applications.md))*
- Verify deviations **one player at a time**, holding $s_{-i}^*$ fixed. A move where two players change together is not a test of Nash stability. *([1.2](lessons/01-02-nash-equilibrium.md))*
- A game can have one pure NE, several, or **none** (Matching Pennies). Non-existence in pure strategies is what forces mixing, not a mistake in your algebra. *([1.2](lessons/01-02-nash-equilibrium.md))*
- Equilibrium is *individual* optimality, not collective: the cartel/joint-profit point sits **off** every best-response curve, which is exactly why cartels are unstable. *([1.4](lessons/01-04-cournot-bertrand-applications.md))*

### Mixing

- You tune your mix to make the **opponent** indifferent. Solving "my indifference for my own probabilities" is the single most common error — your indifference equation contains *their* probabilities. *([1.3](lessons/01-03-mixed-strategies.md))*
- Actions outside the support need only be **weakly worse**, not tied. After solving, confirm no unplayed action strictly beats the equilibrium payoff. *([1.3](lessons/01-03-mixed-strategies.md))*
- Existence $\ne$ uniqueness $\ne$ constructiveness: Nash guarantees at least one equilibrium in a **finite** game, says nothing about how many, and gives no algorithm. *([1.3](lessons/01-03-mixed-strategies.md))*

### Continuous-action models

- More firms does not smoothly mean lower prices — under Cournot the price glides down with $n$, under Bertrand it **snaps** to $c$ at $n=2$. Diagnose the strategic variable before counting heads. *([1.4](lessons/01-04-cournot-bertrand-applications.md))*
- The commons is inefficient for a *structural* reason, not myopia: each herder weighs $g_i v'$ instead of $G v'$. Rationality plus an uncounted externality is enough. *([1.4](lessons/01-04-cournot-bertrand-applications.md))*

### Trees and credibility

- A strategy in a tree is a **plan for every information set**, off-path ones included. That is why a tree with 4 leaves can have 8 strategy profiles — and why threats are expressible at all. *([2.1](lessons/02-01-extensive-form-backward-induction.md))*
- Not every Nash equilibrium of a tree's normal form is sensible: the extras are propped up by irrational off-path play. Backward induction $\subsetneq$ Nash, and SPE is what closes the gap. *([2.1](lessons/02-01-extensive-form-backward-induction.md), [2.2](lessons/02-02-subgame-perfection-commitment.md))*
- Backward induction gives a *unique* outcome only if no player is ever indifferent between two terminal payoffs. *([2.1](lessons/02-01-extensive-form-backward-induction.md))*
- A subgame cannot start inside a **non-singleton** information set — you can't fold a simultaneous-move pocket node by node. That is why SPE, not raw folding, is the general definition. *([2.2](lessons/02-02-subgame-perfection-commitment.md))*
- "More options can't hurt me" is false in strategic settings: the ability to renege is what your opponent exploits. Commitment is worth something **only because it can't be undone**. *([2.2](lessons/02-02-subgame-perfection-commitment.md))*
- The first-mover gain is commitment to the *right* quantity, not commitment as such — committing to the Cournot number throws the advantage away. *([2.2](lessons/02-02-subgame-perfection-commitment.md))*

### Repetition and discounting

- A **known** finite horizon kills cooperation entirely — the unravelling reaches period 1, not just the endgame. Only genuine infinity or uncertainty about the end rescues it. *([2.3](lessons/02-03-repeated-games-folk-theorem.md))*
- A trigger's punishment cannot be arbitrarily harsh: to be subgame-perfect it must itself be an equilibrium of the continuation game. *([2.3](lessons/02-03-repeated-games-folk-theorem.md))*
- The Folk Theorem says cooperation is **available**, not inevitable — "always defect" and a continuum of other outcomes remain equilibria. It describes the equilibrium *set*; it selects nothing. *([2.3](lessons/02-03-repeated-games-folk-theorem.md))*

### Types and beliefs

- A Bayesian strategy is a **function of your type**, not an action; equilibrium is checked type by type. *([3.1](lessons/03-01-bayesian-games.md))*
- You never average over your *own* type — you know it. Only the uninformed side integrates over the hidden draw. *([3.1](lessons/03-01-bayesian-games.md))*
- A common **prior** does not mean common **posteriors**: after conditioning on private information, players genuinely disagree. *([3.1](lessons/03-01-bayesian-games.md))*
- With a non-singleton information set there is **no subgame**, so SPE is silent and you genuinely need beliefs — that is what PBE adds. *([3.3](lessons/03-03-signaling-pbe.md))*
- Bayes' rule pins down **on-path** beliefs only. Off-path beliefs are free, and choosing them is precisely how a pooling equilibrium is sustained or destroyed. Multiplicity here is information, not error. *([3.3](lessons/03-03-signaling-pbe.md))*
- Separation can be individually rational and collectively wasteful at once — the high type burns real resources purely to be distinguished. *([3.3](lessons/03-03-signaling-pbe.md))*

### Auctions and design

- Second-price truthfulness is **dominant**, not conditional on rivals being honest — that robustness is the whole point. *([3.2](lessons/03-02-auctions.md), [4.2](lessons/04-02-mechanism-design.md))*
- Shading moves the **price**, not the **allocation**: everyone shades by the same increasing factor, so the highest value still wins. *([3.2](lessons/03-02-auctions.md))*
- $b(v) = \frac{n-1}{n}v$ is **uniform-specific**. For any other $F$, use the runner-up conditional-expectation formula. *([3.2](lessons/03-02-auctions.md))*
- First-price does not out-earn second-price: shaded-own-bid and unshaded-runner-up cancel exactly. Trust revenue equivalence over intuition. *([3.2](lessons/03-02-auctions.md))*
- The revelation principle says truthful mechanisms are **without loss of generality**, not that they are better or that you must run one. *([4.2](lessons/04-02-mechanism-design.md))*
- VCG buys efficiency and dominant-strategy truth at the price of **budget balance** (and collusion-resistance). You cannot have all three. *([4.2](lessons/04-02-mechanism-design.md))*
- Gibbard–Satterthwaite dooms strategy-proof voting on *unrestricted* preferences over $\ge3$ options — it locates a wall, not a dead end. *([4.2](lessons/04-02-mechanism-design.md))*

### Bargaining

- The Nash solution splits the **gains over disagreement**, not total utility. The disagreement point is load-bearing, not decoration. *([4.1](lessons/04-01-bargaining.md))*
- The proposer's share is $\frac{1}{1+\delta}$, strictly above one half for every $\delta<1$ — impatience *is* the first-mover premium. *([4.1](lessons/04-01-bargaining.md))*
- Rubinstein predicts **immediate** agreement. Observed delay comes from incomplete information, which the complete-information baseline deliberately omits. *([4.1](lessons/04-01-bargaining.md))*
- IIA is the most contested of Nash's axioms; swap it for monotonicity and you get a different (Kalai–Smorodinsky) "fair" split. *([4.1](lessons/04-01-bargaining.md))*

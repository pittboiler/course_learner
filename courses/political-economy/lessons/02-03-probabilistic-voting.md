# Political Economy · Lesson 2.3: Probabilistic voting

> ⏱ ~15 min · Module 2: Electoral competition · Builds on: [2.1 The Downsian spatial model](02-01-the-downsian-spatial-model.md), [2.2 Multidimensional voting and chaos](02-02-multidimensional-voting-and-chaos.md) · Unlocks: [2.4 Valence and citizen-candidates](02-04-valence-and-citizen-candidates.md), [2.6 Electoral rules compared formally](02-06-electoral-rules-compared-formally.md)

## Why this matters

[2.2](02-02-multidimensional-voting-and-chaos.md) ended badly: with two or more policy dimensions the majority core is empty, and every platform loses to something ([McKelvey chaos theorem](../reference.md#mckelvey-chaos-theorem)). Dividing a budget among groups is the purest case, since any split can be beaten by shaving one group to pay two others. Yet real campaigns do not cycle forever. They settle on platforms, and those platforms systematically favour some groups over others. Probabilistic voting fixes both problems at once. Make voters slightly unpredictable and the election has an equilibrium in any number of dimensions, and that equilibrium is a weighted welfare optimum whose weights say who gets courted.

## The idea

In 2.1 a voter who is a hair closer to A votes for A with certainty. Real voters also care about things a platform cannot change: party identity, a candidate's face, religion, habit. Call that *ideology*. A voter picks A when A's policy advantage outweighs her ideological tilt toward B.

Now a small policy gift to a group moves only the members who were nearly indifferent. How many it moves depends on how many members sit near indifference, the *density* of ideology in that group. A group of committed partisans barely responds. A group of ideologically loose voters responds a lot. Those are the [swing voters](../reference.md#swing-voters), and a vote-hungry candidate pays them the most.

Smoothness is what saves equilibrium. Vote share now changes continuously with the platform, so there is no knife-edge to undercut, and the candidate's problem becomes an ordinary maximization.

## The model

**Players and payoffs.** Two candidates $A, B$. Voters belong to groups $g = 1, \dots, G$ with population shares $n_g$ ($\sum_g n_g = 1$). A policy $q$ lies in a compact convex set $Q$, possibly many-dimensional. Every member of group $g$ gets policy utility $u_g(q)$, concave in $q$. Voter $i$ in group $g$ also carries an ideological bias $\sigma_{ig}$ in favour of $B$, uniform on $[-\tfrac{1}{2\phi_g}, \tfrac{1}{2\phi_g}]$, so its density is $\phi_g$. An aggregate popularity shock $\delta$ in favour of $B$ is uniform on $[-\tfrac{1}{2\psi}, \tfrac{1}{2\psi}]$ with density $\psi$. This is the textbook version in Persson and Tabellini, *Political Economics*, of the model of Lindbeck and Weibull (1987, *Public Choice*).

**Timing and information.** (1) $A$ and $B$ simultaneously announce platforms $q_A, q_B$ and are committed to them. (2) $\delta$ and every $\sigma_{ig}$ are realized; candidates know only the distributions. (3) Everyone votes sincerely, with no abstention: $i$ votes $A$ iff

$$u_g(q_A) - u_g(q_B) > \sigma_{ig} + \delta.$$

(4) The majority winner implements her platform. Each candidate maximizes her probability of winning, $p_A$ for $A$ and $1 - p_A$ for $B$.

**Derivation.** Write $\Delta_g = u_g(q_A) - u_g(q_B)$.

1. *Group shares.* Given $\delta$, the fraction of group $g$ voting $A$ is $\Pr(\sigma_{ig} < \Delta_g - \delta) = \tfrac12 + \phi_g(\Delta_g - \delta)$, provided $|\Delta_g - \delta| \le \tfrac{1}{2\phi_g}$ (*interiority*: nobody's group is won or lost outright).
2. *Vote share.* Summing with weights $n_g$ and writing $\bar\phi = \sum_g n_g \phi_g$,
$$\pi_A = \tfrac12 + \textstyle\sum_g n_g \phi_g \Delta_g - \bar\phi\,\delta.$$
3. *Winning.* $A$ wins iff $\pi_A > \tfrac12$, that is iff $\delta < \tfrac{1}{\bar\phi}\sum_g n_g\phi_g\Delta_g$.
4. *Win probability.* Using the uniform $\delta$ (again inside its support),
$$p_A = \tfrac12 + \tfrac{\psi}{\bar\phi}\big[W(q_A) - W(q_B)\big], \qquad W(q) = \textstyle\sum_g n_g\,\phi_g\,u_g(q).$$

**Proposition ([probabilistic voting](../reference.md#probabilistic-voting) equilibrium).** Suppose interiority holds at every platform pair. Then $(q_A, q_B)$ is a Nash equilibrium iff both platforms maximize $W$ on $Q$. If $W$ is strictly concave, the equilibrium is unique and $q_A = q_B = q^*$.

*In words:* both candidates [converge](../reference.md#convergence), not to a median, but to the policy that maximizes group welfare weighted by group size times ideological density.

*Proof.*

1. By step 4, $A$'s payoff is $\tfrac12 + c\,[W(q_A) - W(q_B)]$ with $c = \psi/\bar\phi > 0$. For any fixed $q_B$ it is a strictly increasing affine function of $W(q_A)$.
2. So any $q^* \in \arg\max_Q W$ (nonempty: $Q$ compact, $W$ continuous) is a best response to every $q_B$. It is a dominant strategy.
3. $B$'s payoff $\tfrac12 - c\,[W(q_A) - W(q_B)]$ is increasing in $W(q_B)$; the same argument applies.
4. If $q_A \notin \arg\max W$, switching to $q^*$ raises $W(q_A)$ and so $p_A$ strictly. No such profile is an equilibrium. Likewise for $B$.
5. Strict concavity of $W$ makes the maximizer unique. ∎

Two remarks. The expected vote share is $E[\pi_A] = \tfrac12 + W(q_A) - W(q_B)$, so a vote-share maximizer chooses the same $q^*$: the distinction that mattered in [2.1](02-01-the-downsian-spatial-model.md) vanishes here. And nothing used the dimension of $Q$. Without the uniform assumption, payoffs remain continuous and, under concavity conditions, quasiconcave in one's own platform, which is what Debreu–Fan–Glicksberg existence needs ([`grad-game-theory` 2.3](../../grad-game-theory/lessons/02-03-existence-of-nash-equilibrium.md)). Peter Coughlin's work develops such general versions; which welfare function gets maximized depends on how the noise enters.

**Who gets courted.** Let $q$ be per-capita transfers $t_g \ge 0$ with budget $\sum_g n_g t_g = 1$ and a common concave $u$. Maximizing $W$ with multiplier $\lambda$ gives $n_g\phi_g u'(t_g) = \lambda n_g$, so

$$\phi_g\,u'(t_g) = \lambda \quad \text{for every group with } t_g > 0.$$

*In words:* the marginal utility of a transfer is lowest, so the transfer is highest, where ideology is densest. With $u = \ln$, $t_g = \phi_g / \bar\phi$.

**Core or swing?** Dixit and Londregan (1996, *Journal of Politics*) ask whether parties reward their base or the waverers. In their model each group is internally mixed in its party loyalties. When both parties deliver transfers equally well, both court the groups most responsive to favours, the swing-voter outcome. When each party delivers more effectively to its own supporters, each can favour its core, the "machine politics" outcome; in some cases a machine even taxes its core to buy other voters ([core and swing voter targeting](../reference.md#core-and-swing-voter-targeting)). A one-line version: if a dollar from party $P$ reaches group $g$ as $e_{Pg} \le 1$ dollars of consumption, $P$ maximizes $\sum_g n_g\phi_g u(e_{Pg}t_{Pg})$. Each party still has a dominant strategy, but the two now differ, so platforms diverge.

**Where the argument is weakest.** Interiority. The proposition needs every group to stay partly contested at every platform pair. That is a joint assumption about ideology and stakes: ideological spread must be wide relative to the utility a platform can move. Example 2 shows what happens without it. The uniform shape matters too: with other distributions the weight on group $g$ is the density at its indifference point, which shifts with the platforms, and existence needs enough randomness in party preferences, a condition Lindbeck and Weibull state for their own model. In the limit of no ideology at all we are back to 2.2's majority divide-the-dollar game, with no equilibrium.

## Picture

![A's vote share as A varies its transfer to group 1 from 0 to 4, with B fixed at the equilibrium platform of 2 to group 1 and two thirds to group 2. The solid curve, with densities 0.6 and 0.2, peaks at 0.5 at a transfer of 2 and stays below 0.5 everywhere else, reaching about 0.48 as the transfer goes to zero. The dashed curve, with densities 0.9 and 0.3, also has a local peak of 0.5 at 2 but rises to 0.530 as the transfer to group 1 goes to zero, because group 1 is then lost entirely and its losses stop growing.](assets/02-03-fig1.svg)

Both curves have the same interior peak, since only the *ratio* of densities sets $q^*$. The kinks are where group 1 is lost entirely. Left of the kink, cutting group 1 further costs nothing.

## Worked examples

**Example 1 (clean): a quarter of the voters get half the budget.** Two groups: $n_1 = \tfrac14$ with $\phi_1 = 0.6$ (loose ideology) and $n_2 = \tfrac34$ with $\phi_2 = 0.2$; $u = \ln$; budget $\tfrac14 t_1 + \tfrac34 t_2 = 1$.

- $\bar\phi = \tfrac14(0.6) + \tfrac34(0.2) = 0.3$, so $t_1^* = 0.6/0.3 = 2$ and $t_2^* = 0.2/0.3 = \tfrac23$. Group 1 receives $n_1 t_1^* = \tfrac12$ of the budget.
- Against $q^*$, an equal split $(1, 1)$ wins group 1 at rate $\tfrac12 + 0.6\ln\tfrac12 = 0.084$ and group 2 at $\tfrac12 + 0.2\ln\tfrac32 = 0.581$: vote share $0.457$ (at $\delta = 0$). With $\psi = 1$ its win probability is $\tfrac12 + \tfrac{1}{0.3}\cdot 0.15\ln\tfrac34 = 0.356$ (a numerical integration over $\delta$ agrees).
- Log utility breaks interiority near $t_g = 0$, so the proposition does not cover this case outright; a grid over every budget split confirms $t_1 = 2$ is still $A$'s best response to $q^*$, with share exactly $\tfrac12$.

The equal split is the unweighted utilitarian optimum for log utility. The equilibrium departs from it for one reason: group 1's votes are cheaper.

**Example 2 (interiority bites): the write-off.** Same groups, densities raised to $\phi_1 = 0.9$, $\phi_2 = 0.3$. The ratio is unchanged, so the first-order conditions still give $q^* = (2, \tfrac23)$, and it is still a *local* best response. Now let $A$ give group 1 almost nothing. Group 1's share hits its floor of 0 once $t_1 \le 2e^{-1/1.8} = 1.15$, and from there cuts are free. As $t_1 \to 0$, $t_2 \to \tfrac43$ and group 2's share rises to $\tfrac12 + 0.3\ln 2 = 0.708$. Vote share:

$$\tfrac34\big(\tfrac12 + 0.3\ln 2\big) = 0.531 > \tfrac12.$$

At $t_1 = 0.01$ it is already 0.530. So $q^*$ is not an equilibrium. The write-off beats $q^*$ exactly when $\tfrac34(\tfrac12 + \phi_2\ln 2) > \tfrac12$, i.e. $\phi_2 > 1/(6\ln 2) = 0.240$; Example 1's $0.2$ is safe, and the grid confirms nothing else beats $q^*$ there. Scale densities up further and the best deviation approaches $0.75$: buy the big group outright, which is 2.2's chaos returning.

## Watch out

- **You might think** the swing group is the evenly split one. Actually it is the *dense* one: many members near indifference per unit of utility. Shift a uniform group's ideology toward $A$ and, while it stays interior, its weight $\phi_g$ is unchanged.
- **You might think** "the equilibrium maximizes a welfare function" is a normative endorsement. Actually the weights are political responsiveness, not need or desert. Whether those weights are just is [`political-philosophy`](../../political-philosophy/lessons/05-01-why-democracy.md)'s question, and optimal weights are [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md)'s.
- **You might think** the result holds whenever voters are noisy. Actually it needs interiority, the hypothesis people drop (Example 2). With thin ideology a candidate can write a group off, and the smooth model's prediction fails.

## One-liner

> Make voters' ideology smooth and wide enough, and both candidates converge on the policy maximizing $\sum_g n_g\phi_g u_g$: groups are weighted by how many votes a unit of utility buys there, so swing groups get paid.

## Problems

**P1 (🟢)** *(Formal (a)–(c).)* Two equal groups ($n_1 = n_2 = \tfrac12$) have densities $\phi_1 = 0.1$ and $\phi_2 = 0.2$ and utility $u(t) = \sqrt{t}$ from per-capita transfers, with budget $\tfrac12 t_1 + \tfrac12 t_2 = 1$. Interiority holds.

(a) Find the equilibrium transfers.
(b) The density ratio is 2. What is the transfer ratio $t_2/t_1$, and why is it not 2? One sentence.
(c) A candidate facing $q^*$ instead offers $(1, 1)$. With $\delta = 0$, compute her vote share.

**P2 (🟡)** *(Formal (a)–(b).)*

(a) Prove: if every $n_g\phi_g > 0$, the equilibrium $q^*$ is Pareto efficient: no $q'$ makes every group at least as well off and some group strictly better off.
(b) Transfers with $u = \ln$, budget $\sum_g n_g t_g = 1$. Prove that every allocation $t^\circ$ with all $t^\circ_g > 0$ is the unique equilibrium for some densities, and give them.

**P3 (🔴, optional)** *(Formal (a) · Exegetical (b).)* Two equal groups, $\phi_1 = \phi_2 = 0.2$, $u = \sqrt{c}$ of delivered consumption $c$, per-capita budget 1 for each party. Party $A$'s local machine delivers each dollar to group 1 in full but only a quarter of each dollar to group 2; party $B$ is the mirror image.

(a) Find each party's equilibrium spending and delivered consumption, and group 1's vote share for $A$ at $\delta = 0$.
(b) An invented strategy memo: "The theory says money goes to swing voters, and our groups are equally swingy, so we must match our rival dollar for dollar in every group." In 100 words or fewer, name the model, the assumption the memo needs, and what the model predicts instead here. Would the prediction survive log utility?

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) First-order condition $\phi_g/(2\sqrt{t_g}) = \lambda$, so $t_g \propto \phi_g^2$. With the budget, $t_g = \phi_g^2 / \sum_h n_h\phi_h^2 = \phi_g^2/0.025$: $t_1^* = 0.01/0.025 = \mathbf{0.4}$ and $t_2^* = 0.04/0.025 = \mathbf{1.6}$. Budget: $0.2 + 0.8 = 1$. A grid over all splits confirms it.

(b) $t_2/t_1 = 4$: square-root utility's marginal utility falls slowly ($u' \propto t^{-1/2}$), so equalizing $\phi_g u'(t_g)$ needs $t$ to move with the *square* of the density.

(c) $\pi_A = \tfrac12 + W(1,1) - W(q^*)$. $W(1,1) = \tfrac12(0.1) + \tfrac12(0.2) = 0.15$; $W(q^*) = 0.05\sqrt{0.4} + 0.1\sqrt{1.6} = \sqrt{0.025} = 0.1581$. Share $= 0.65 - 0.1581 = \mathbf{0.492}$, a loss, as the proposition promises.

**Wrong turns:** Using $t \propto \phi$ (the log answer) for square-root utility. In (c), forgetting the $n_g$ weights.

---

**P2** *(Formal, strict.)*

(a) Let $w_g = n_g\phi_g > 0$, so $q^*$ maximizes $\sum_g w_g u_g$. Suppose $q'$ Pareto-dominates $q^*$: $u_g(q') \ge u_g(q^*)$ for all $g$, strictly for some $h$. Then $\sum_g w_g u_g(q') - \sum_g w_g u_g(q^*) \ge w_h[u_h(q') - u_h(q^*)] > 0$, contradicting maximality. ∎ (This is the standard fact that a positively weighted utilitarian maximum is Pareto efficient.)

(b) Set $\phi_g = c\,t^\circ_g$ for any $c > 0$ small enough that interiority holds. Then $W(t) = c\sum_g n_g t^\circ_g \ln t_g$, strictly concave. The first-order condition $\phi_g/t_g = \lambda$ holds at $t = t^\circ$ with $\lambda = c$, and the budget holds by assumption. By the proposition, $t^\circ$ is the unique equilibrium. ∎ So with log utility, *every* positive split is the equilibrium of some electorate; the model's content lies in the densities. (The script checks $t^\circ = (0.5, 1.5)$, $\phi = (0.025, 0.075)$.)

**Wrong turns:** In (a), arguing from vote shares rather than from the maximization. In (b), giving weights $\phi_g = t^\circ_g$ without checking interiority or uniqueness.

---

**P3** *(Formal (a) · Exegetical (b), both strict.)*

(a) $A$ maximizes $\sum_g n_g\phi_g\sqrt{e_{Ag}t_{Ag}}$; first-order condition $t_{Ag} \propto \phi_g^2 e_{Ag}$. With $e_A = (1, \tfrac14)$: $t_A = (\mathbf{1.6}, \mathbf{0.4})$, delivered $(1.6, 0.1)$. Mirror for $B$: spends $(0.4, 1.6)$, delivers $(0.1, 1.6)$. Each is dominant (a grid confirms $A$'s choice against any $B$). Group 1: $\Delta_1 = \sqrt{1.6} - \sqrt{0.1} = 0.949$, share for $A$ $= \tfrac12 + 0.2(0.949) = \mathbf{0.690}$ (interior, since $0.949 < 2.5$).

**Must hit, strict (b):**

- Model: probabilistic voting with Dixit and Londregan's unequal targeting ability.
- The memo needs equal delivery ability: only then do both parties spend the same way, on the densest groups.
- Here densities are equal but abilities differ, so each party spends four times as much where its machine delivers; platforms diverge and each courts its own core.
- Under log utility, $u(e t) = \ln e + \ln t$, so efficiency drops out of the first-order condition: each party spends $(1, 1)$. The tilt depends on curvature.

**Wrong turns:** Assuming targeting differences change the swing-voter *weights*; they change the price of utility, not $\phi_g$. Claiming the machine result holds for any utility: with this simple version it needs marginal utility to fall slowly, as with square-root utility.

**Model answer (b):** The memo uses probabilistic voting and assumes both parties deliver transfers equally well. Dixit and Londregan show that when each party delivers better to its own supporters, each can favour its core. Here our machine turns a dollar into a full dollar in group 1 but a quarter in group 2, so we should spend 1.6 and 0.4, not match the rival. With log utility the delivery rate drops out and we would split evenly.

</details>

## Flashback

**From Lesson [2.1](02-01-the-downsian-spatial-model.md) (The Downsian spatial model):** *(Formal (a)–(b).)* Two policy-motivated candidates with ideal points $\theta_A = 0$ and $\theta_B = 12$ and quadratic losses $u_j(q) = -(q - \theta_j)^2$ commit to platforms simultaneously. The median voter's ideal point is uniform on $[3, 9]$, and the candidate whose platform is nearer the realized median wins.

(a) Find the symmetric equilibrium platforms from A's first-order condition.

(b) Keep the median's range $[3, 9]$ but move the ideal points to $6 - a$ and $6 + a$. Show that for every $a > 0$ both platforms lie strictly inside $(3, 9)$, and find their limits as $a \to \infty$.

<details>
<summary>Solution</summary>

(a) Try $q_A = 6 - s$, $q_B = 6 + s$. A wins iff the median lies below the midpoint, so $\pi_A = \frac{(q_A + q_B)/2 - 3}{6}$, $\partial \pi_A / \partial q_A = \tfrac{1}{12}$, and $\pi_A = \tfrac12$ at the symmetric profile. The stake is $u_A(q_A) - u_A(q_B) = (6+s)^2 - (6-s)^2 = 24s$ and $u_A'(q_A) = -2(6 - s)$, so A's first-order condition is

$$\tfrac{1}{12}(24s) - \tfrac12 \cdot 2(6 - s) = 3s - 6 = 0,$$

giving $s^* = 2$ (the lesson's $s^* = ac/(a+c)$ with $a = 6$, $c = 3$). Platforms **4 and 8**, each winning with probability $\tfrac12$. A grid check confirms that A's best reply to 8 is 4 and B's to 4 is 8; best-reply iteration from 0 and 12 lands on $(4, 8)$, and a quarter-unit grid finds no other pure equilibrium.

(b) With $c = 3$, $s^* = \frac{3a}{a + 3}$. Since $a + 3 > a$, $s^* < 3$, so $q_A = 6 - s^* > 3$ and $q_B = 6 + s^* < 9$. Since $a + 3 > 3$, also $s^* < a$: each candidate moves inward from her ideal point. The profile is symmetric, so the midpoint stays at 6, inside the support, and the formula holds for every $a$. As $a \to \infty$, $s^* \to 3$ and the platforms tend to **3 and 9**, the edges of the median's range (at $a = 30$ they are already $3.27$ and $8.73$). However extreme the candidates, the uncertain median caps the divergence.

**Wrong turns:** Using a win-probability objective, which sends both candidates to 6. Carrying over the linear-loss answer (the edges 3 and 9) at finite $a$: quadratic losses give an interior first-order condition, and the edges are reached only in the limit.

</details>

## Connections

- **Backward:** [2.1](02-01-the-downsian-spatial-model.md)'s convergence returns, now in many dimensions and to a weighted-welfare point rather than the median; [2.2](02-02-multidimensional-voting-and-chaos.md)'s empty core is what the noise repairs, and Example 2 shows it creeping back. Smooth payoffs make the existence theorem of [`grad-game-theory` 2.3](../../grad-game-theory/lessons/02-03-existence-of-nash-equilibrium.md) applicable; the deterministic [Downsian model](../reference.md#downsian-model)'s jumps in vote share put it out of reach.
- **Forward:** [2.4](02-04-valence-and-citizen-candidates.md) adds a non-policy advantage, which in this model is a shift in $\delta$; [2.6](02-06-electoral-rules-compared-formally.md) puts the swing-group weights inside electoral districts (Persson–Tabellini); [5.4](05-04-the-political-economy-of-inequality.md) uses swing-group targeting to explain why redistribution need not follow the median voter.
- **Sideways:** $W$ is a weighted utilitarian objective with the same algebra as [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md)'s welfare weights, but the weights come from votes, not ethics. The smoothing trick is the same one random-utility choice models use: noise turns an all-or-nothing choice into a smooth probability.

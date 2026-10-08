# Political Economy · Lesson 4.3: Lobbying: protection for sale

> ⏱ ~15 min · Module 4: Accountability, interests and rents · Builds on: [4.1 Elections as accountability](04-01-elections-as-accountability.md), [3.2 Olson's logic of collective action](03-02-olsons-logic-of-collective-action.md) · Unlocks: [4.4 Regulatory capture](04-04-regulatory-capture.md), [4.5 Rent-seeking contests](04-05-rent-seeking-contests.md)

## Why this matters

A small open economy loses from every tariff: free trade maximizes its welfare. Yet tariffs are everywhere, and they are not random. Some industries get heavy protection, some get none, and a few are taxed. [4.1](04-01-elections-as-accountability.md) gave the voter a blunt instrument for disciplining the government. This lesson adds the people who hold a sharper one: organized interests that can pay for exactly the policy they want. Grossman and Helpman's *Protection for Sale* (1994, *American Economic Review*) turns that into a formula that predicts which industries are protected and by how much. It is the model [`conflict-and-bargaining`](../../conflict-and-bargaining/syllabus.md) cites for where a government's tariff preferences come from.

## The idea

Picture an auction where the bidders do not bid for an object. Each hands the government a price list, a *menu*: "if you set policy $p$, we pay you $C(p)$." The government then picks the policy that maximizes what it collects plus what it values about voters' welfare. This is a [menu auction](../reference.md#menu-auction) (Bernheim and Whinston, 1986, *Quarterly Journal of Economics*).

Two surprises follow. First, if each lobby's menu honestly tracks its stake, the policy chosen is the one that maximizes the *joint* payoff of the government and the organized lobbies. Unorganized people count only through the government's concern for welfare. Second, what each lobby pays is not its stake. It is pinned down by what the government could get by turning to the *other* lobbies. Payments divide the surplus; they do not move the policy.

Put the joint-payoff rule into a trade economy and the tariff on an industry rises when it is organized, when domestic output is large relative to imports (big gain to the lobby, small loss to consumers), and when import demand is inelastic (small deadweight loss).

## The game

**Economy** (Grossman–Helpman). A small economy faces fixed world prices $p_i^*$. A numeraire good is made from labor alone, one for one, so the wage is 1. Each of $n$ other goods $i$ is made from labor and a factor specific to sector $i$, in fixed supply; the factor's income is $\Pi_i(p_i)$ with $\Pi_i' = X_i$, domestic output. Everyone has the same quasilinear utility, so demand $D_i(p_i)$ has no income effects. Population has mass 1; each person owns at most one kind of specific factor. The government's only instruments are trade taxes and subsidies: domestic price $p_i = (1 + t_i)\,p_i^*$, so $t_i > 0$ is a tariff on an imported good. Revenue is rebated equally per head. Imports are $M_i = D_i - X_i$.

**Players.** Owners in an exogenous set $L$ of sectors are organized; $\alpha_L$ is the share of the population that owns a factor in an organized sector, and $I_i = 1$ if $i \in L$, else 0. $\Omega_i(p)$ is lobby $i$'s gross welfare, $\Omega(p)$ aggregate welfare. Nobody else contributes.

**Timing.** (1) Each lobby $i \in L$ simultaneously offers a schedule $C_i(p) \ge 0$. (2) The government chooses $p$ to maximize

$$G(p) = \sum_{i \in L} C_i(p) + a\,\Omega(p), \qquad a > 0,$$

and collects. Lobby $i$ gets $\Omega_i(p) - C_i(p)$. Information is complete, and promised contributions are paid.

*In words:* $a$ is the government's weight on a unit of welfare relative to a unit of contributions, the reduced form of the re-election motive in [4.1](04-01-elections-as-accountability.md).

A schedule is **truthful** if $C_i(p) = \max\{0,\ \Omega_i(p) - B_i\}$ for a constant $B_i$, the lobby's net payoff. Bernheim and Whinston showed that each lobby's best responses always include a truthful schedule, and that truthful equilibria are coalition-proof. Grossman and Helpman therefore focus on them.

**Lemma (joint maximization).** In a truthful equilibrium with policy $p^o$, $p^o$ maximizes $\sum_{i \in L} \Omega_i(p) + a\,\Omega(p)$.

*Proof.*
1. The government chooses $p^o$, so $\sum_i C_i(p^o) + a\Omega(p^o) \ge \sum_i C_i(p) + a\Omega(p)$ for every $p$.
2. Take each anchor $B_i$ to be lobby $i$'s equilibrium net payoff, as Grossman and Helpman do. Then $C_i(p^o) = \Omega_i(p^o) - B_i$, and truthfulness gives $C_i(p) \ge \Omega_i(p) - B_i$ for every $p$.
3. Substitute both into step 1. The constants $B_i$ cancel, leaving $\sum_i \Omega_i(p^o) + a\Omega(p^o) \ge \sum_i \Omega_i(p) + a\Omega(p)$. ∎

*In words:* honest menus make the government act as if it weighted organized people at $1 + a$ and everyone else at $a$.

**The tariff.** Differentiate the joint objective in $p_j$. Profits give $X_j$; consumer surplus gives $-D_j$; rebated revenue $(p_j - p_j^*)M_j$ gives $M_j + (p_j - p_j^*)M_j'$. Since $M_j = D_j - X_j$:

$$\frac{\partial \Omega}{\partial p_j} = (p_j - p_j^*)\,M_j',$$

$$\frac{\partial \sum_{L} \Omega_i}{\partial p_j} = I_j X_j + \alpha_L\big[-X_j + (p_j - p_j^*)M_j'\big].$$

Set the second plus $a$ times the first to zero and divide by $p_j$. For an imported good:

$$\frac{t_j}{1 + t_j} = \frac{I_j - \alpha_L}{a + \alpha_L}\cdot\frac{z_j}{e_j},$$

where $z_j = X_j / M_j$ is the output-to-imports ratio and $e_j = -M_j'\,p_j / M_j$ the import-demand elasticity, both at the equilibrium price.

*In words:* this is the [Grossman–Helpman tariff](../reference.md#grossman-helpman-tariff): organized sectors are protected and unorganized ones get import subsidies, by more when output is large relative to imports and import demand is inelastic, and by less when the government cares more about welfare.

Three readings. A deadweight-loss term $1/e_j$, a political term $(I_j - \alpha_L)/(a + \alpha_L)$, and a stake term $z_j$: a lobby gains $X_j$ per unit of price, while the deadweight loss scales with imports. The formula is an equation, not a closed form, since $z_j$ and $e_j$ are evaluated at the equilibrium price, as in the [`public-economics` 4.1](../../public-economics/lessons/04-01-the-ramsey-rule.md) inverse-elasticity rule. Contributions do not appear.

**Contributions.** Each lobby raises $B_i$, cutting every payment, until the government is just indifferent between $p^o$ and the best policy it could pick without lobby $i$'s money. So lobby $i$ nets at most its marginal contribution $J(L) - J(L \setminus i)$, where $J(S)$ is the maximum of the government's welfare term plus the gross stakes of lobbies in $S$.

**Informational lobbying.** Grossman–Helpman assume complete information. The other tradition has the lobby know something the government does not, say whether a measure really helps. Talk alone is cheap ([`grad-game-theory` 4.5](../../grad-game-theory/lessons/04-05-signaling-games-refinements.md)). Costly lobbying can carry [information](../reference.md#informational-lobbying) if the lobby's stake is larger when the measure is good. In a stripped-down version of Potters and van Winden (1992, *Public Choice*): stake $b_H$ in the good state, $b_L$ in the bad, lobbying cost $c$, and the government adopts if and only if it believes the state is good. Separation (lobby only in the good state) needs $b_L \le c \le b_H$. With $b_H = 10$, $b_L = 4$, a cost of 6 separates; 3 is cheap enough for the bad type to mimic; 12 is too dear for the good type.

**Where the argument is weakest.** The formula's political content sits in $L$ and $\alpha_L$, and the model takes both as given; which groups organize is [3.2](03-02-olsons-logic-of-collective-action.md)'s [Olson problem](../reference.md#olsons-logic). Critics also attack the contracts: explicit policy-contingent payments are illegal in most democracies, so the menu must be implicit and somehow enforced. Truthfulness itself is less fragile than it looks. Grossman and Helpman show the tariff formula holds for any schedules differentiable at the equilibrium. Without differentiability, Bernheim and Whinston's game has other Nash equilibria, and the policy is no longer pinned down. Goldberg and Maggi (1999, *American Economic Review*) found US cross-industry protection consistent with the formula, with a weight on welfare many times that on contributions; identification is [`empirical-political-economy`](../../empirical-political-economy/syllabus.md)'s.

## Picture

![Equilibrium tariff in percent against the government's weight on welfare a, with half the population organized and output-to-imports ratio equal to the import elasticity. The organized sector's tariff falls from above 50 percent toward zero as a rises, passing 33.3 percent at a equal to 1.5. The unorganized sector's import subsidy shrinks from about 30 percent toward zero, passing 20 percent at a equal to 1.5.](assets/04-03-fig1.svg)

Both curves fall toward free trade as $a$ grows: the deadweight loss gets heavier in the government's scales. Neither reaches zero for any finite $a$.

## Worked examples

**Example 1 (a menu auction).** A government chooses a steel tariff: free trade F, moderate M or high H. Payoffs are stylized, not derived from an economy. Its welfare term $a\Omega$ is 30, 26, 14. Steel producers' stake is 0, 12, 26; steel-using carmakers' stake is 14, 8, 0.

*Steel alone.* Joint totals F 30, M 38, H 40, so H. Steel must make H as attractive as F: it pays $30 - 14 = 16$ and nets 10.

*Both lobbies.* Joint totals F 44, M 46, H 40, so M. Without steel the best is F at 44; without carmakers, H at 40. Steel nets $46 - 44 = 2$ and pays $12 - 2 = 10$. Carmakers net $46 - 40 = 6$ and pay $8 - 6 = 2$. The truthful schedules are steel (0, 10, 24) and carmakers (8, 2, 0). The government's totals are 38 at F, M and H alike: indifferent, choosing M, and collecting 38 against 30 with no lobbies. A search over anchors finds no other truthful equilibrium, and no lobby gains by any deviation. A rival lobby moderated the policy and cut steel's net from 10 to 2.

**Example 2 (who is organized decides everything).** Take $a = 1.5$, $\alpha_L = 0.5$, and two sectors with $z = 2$, $e = 2$.

- Organized: $\tfrac{t}{1+t} = \tfrac{0.5}{2}\cdot 1 = \tfrac14$, so $t = \tfrac13$, a 33.3 percent tariff.
- Unorganized: $\tfrac{t}{1+t} = -\tfrac14$, so $t = -\tfrac15$, a 20 percent import subsidy. Lobby members consume that good and want it cheap.

Now organize every sector and every person: $\alpha_L = 1$, $I_j = 1$ for all $j$. Every numerator is $1 - 1 = 0$: **free trade**. The lobbies neutralize one another. That is the hypothesis biting: the same economy, with the same $a$, gives 33 percent or zero depending only on who is organized. A brute-force maximization of the joint objective in a linear economy confirms the formula, with $z$ and $e$ read at the optimum, in all three cases.

## Watch out

- **You might think** the biggest contributor gets the most protection. Actually the tariff formula has no contribution term. Policy maximizes the joint objective; payments are set by threat points, and a lobby can pay little because rivals' offers bound it (Example 1).
- **You might think** the formula explains which industries organize. It takes $L$ as given. Dropping that hypothesis silently turns a conditional prediction into a story of lobby power; Olson ([3.2](03-02-olsons-logic-of-collective-action.md)) must supply $L$.
- **You might think** universal organization makes lobbying harmless. It yields free trade only when $\alpha_L = 1$ *and* every sector is organized. With every sector organized but $\alpha_L < 1$, every organized sector is protected at the expense of those who own no specific factor.

## One-liner

> When lobbies bid with honest menus, the government maximizes its welfare term plus organized stakes, and the tariff is $\frac{I - \alpha_L}{a + \alpha_L}\cdot\frac{z}{e}$: organization, stake and elasticity set the protection, while payments only split the surplus.

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* In a Grossman–Helpman economy the government's weight on welfare is $a = 2.6$ and 40 percent of the population owns a factor in an organized sector. Three import-competing sectors have:

- A: organized, $z = 1.5$, $e = 3$
- B: organized, $z = 3$, $e = 3$
- C: unorganized, $z = 1.5$, $e = 3$

(a) Compute each sector's equilibrium ad valorem trade tax, and say in one sentence why B gets more than A.
(b) Holding $\alpha_L$, $z$ and $e$ fixed, find the weight $a$ at which B's tariff falls to 10 percent.

**P2 (🟡)** *(Formal (a)–(b).)* A government chooses F, M or H. Its welfare term is 20, 16, 6. A producer lobby's stake is 0, 9, 18; a user lobby's stake is 6, 2, 0. Both offer truthful schedules.

(a) Find the equilibrium policy, each lobby's payment and net payoff, and the government's payoff. Check that the government is willing to choose the policy.
(b) Remove the user lobby and recompute. In one sentence, say why a lobby that pays nothing in (a) still matters.

**P3 (🔴, optional)** *(Exegetical (a) · Formal (b).)* An invented trade-association statement: "Every industry in our country now has a registered lobby. Protection bought by one industry is bid away by the industries that buy from it, so organized lobbying is self-cancelling: it leaves trade free and costs the public nothing."

(a) In 100 words or fewer: which model is the statement relying on, and which two conditions must hold for "leaves trade free"?
(b) Suppose every sector is organized but only 60 percent of the population owns a specific factor, with $a = 2$ and $z/e = 1$ in every sector. Compute the equilibrium tariff and say who loses.

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) The political term for organized sectors is $\frac{1 - 0.4}{2.6 + 0.4} = \frac{0.6}{3} = 0.2$; for unorganized, $\frac{-0.4}{3} = -\frac{2}{15}$.

- A: $\frac{t}{1+t} = 0.2 \times \frac{1.5}{3} = 0.1$, so $t = \frac{0.1}{0.9} = \frac19 \approx 11.1$ percent.
- B: $\frac{t}{1+t} = 0.2 \times 1 = 0.2$, so $t = \frac14 = 25$ percent.
- C: $\frac{t}{1+t} = -\frac{2}{15} \times \frac12 = -\frac{1}{15}$, so $t = \frac{-1/15}{16/15} = -\frac{1}{16}$, a 6.25 percent import subsidy.

B's domestic output is twice as large relative to imports at the same elasticity, so its owners gain more per unit of price while the deadweight loss, which scales with imports, is no larger.

(b) A 10 percent tariff means $\frac{t}{1+t} = \frac{0.1}{1.1} = \frac{1}{11}$. Solve $\frac{0.6}{a + 0.4} = \frac{1}{11}$: $a + 0.4 = 6.6$, so $a = 6.2$.

**Wrong turns:** Reporting $t/(1+t)$ as the tariff (0.2 is 25 percent, not 20). Giving C a zero tariff: unorganized sectors are taxed when $\alpha_L > 0$, because lobby members consume the good.

---

**P2** *(Formal, strict.)*

(a) Joint totals (welfare term plus both stakes): F 26, M 27, H 24, so **M**. Without the producer, the best is F at $20 + 6 = 26$; without the user, M at $16 + 9 = 25$.

- Producer nets at most $27 - 26 = 1$, pays $9 - 1 = 8$.
- User nets at most $27 - 25 = 2$, which equals its stake at M, so it pays **0**.
- Joint check: together they net at most $27 - 20 = 7 \ge 3$. The script confirms these are the only truthful equilibrium payoffs.

Truthful schedules: producer (0, 8, 17), user (4, 0, 0). Government totals: F $20 + 4 = 24$, M $16 + 8 = 24$, H $6 + 17 = 23$. M ties F at the maximum, so the government is willing; its payoff is 24. No deviation pays: the producer could buy H only by paying 18, netting 0; the user could buy F by paying 4, netting 2, no better.

(b) Producer alone: joint totals F 20, M 25, H 24, so M again. The producer nets $25 - 20 = 5$ and pays 4; the government gets 20. The user's standing offer of 4 for F is what forces the producer to pay 8 rather than 4: an offer that is never collected still sets the price.

**Wrong turns:** Having each lobby pay its full stake (9 and 2): payments are set by the government's best alternative, not by stakes. Choosing the policy that maximizes the government's welfare term alone (F).

---

**P3** *(Exegetical (a), strict · Formal (b).)*

**Must hit, strict (a):**

- The model is Grossman–Helpman protection for sale: truthful menu auction, tariff $\frac{t}{1+t} = \frac{I - \alpha_L}{a + \alpha_L}\cdot\frac{z}{e}$.
- "Free trade" needs both every sector organized ($I_j = 1$ for all $j$) *and* every person a lobby member ($\alpha_L = 1$). A registered lobby in every industry gives only the first.
- "Costs the public nothing" is not implied: when $\alpha_L = 1$ the contributors *are* the public, and whatever they pay goes to politicians.

(b) $\frac{t}{1+t} = \frac{1 - 0.6}{2 + 0.6} = \frac{2}{13}$, so $t = \frac{2}{11} \approx 18.2$ percent in every sector. The 40 percent who own no specific factor lose: they pay higher prices on every good and receive no profit income. Lobby members gain in their own sector and lose as consumers in the others.

**Wrong turns:** Reading "every industry has a lobby" as $\alpha_L = 1$. Concluding the tariff is zero because every $I_j = 1$: the numerator is $1 - \alpha_L$, not 0.

**Model answer (a):** The statement relies on Grossman and Helpman's protection-for-sale model, where honest contribution menus lead the government to maximize its welfare term plus the organized stakes. Its free-trade result needs two conditions: every sector organized, and every person owning a factor in some organized sector. Registered lobbies in every industry deliver only the first. Even when both hold, the lobbies' payments come out of the public's pockets.

</details>

## Flashback

**From Lesson [4.1](04-01-elections-as-accountability.md) (Elections as accountability):** *(Formal (a)–(b).)* An incumbent faces Barro's sanctioning model. Each term she may take any rent up to $\bar R = 12$; office is worth $W = 3$ per term; she discounts at $\delta = \tfrac12$. The voter observes the rent and retains her if and only if it is at most a cutoff $\bar r$, and a removed politician never returns. (a) Find the voter's optimal cutoff, check the incumbent's constraint at it, and find the discount factor at and above which rents are zero. (b) Compare two reforms, each on its own: an audit office that caps the grab at $\bar R = 8$, or a pay rise, funded by voters, to $W = 5$. Which cuts rents more, and which gives the lower rents plus pay per term?

<details>
<summary>Solution</summary>

(a) $\bar r^* = (1-\delta)\bar R - \delta W = 6 - 1.5 = 4.5$. Check: complying forever at 4.5 gives $(4.5 + 3)/(1 - \tfrac12) = 15$; grabbing 12 once and being removed gives $12 + 3 = 15$. The constraint binds, and under any lower cutoff every incumbent grabs 12. Zero rents need $\delta \ge \bar R/(\bar R + W) = 12/15 = 0.8$.

(b) Audit: $\bar r^* = 0.5 \cdot 8 - 0.5 \cdot 3 = 2.5$ (check: $(2.5 + 3)/0.5 = 11 = 8 + 3$). Pay: $\bar r^* = 0.5 \cdot 12 - 0.5 \cdot 5 = 3.5$ (check: $(3.5 + 5)/0.5 = 17 = 12 + 5$). The audit cuts rents by 2, the pay rise by 1. Rents plus pay per term: 7.5 before, 5.5 with the audit, 8.5 with the pay rise. The audit wins on both counts. In general rents fall by $1 - \delta$ per unit cut from $\bar R$ and by $\delta$ per unit of pay, and each unit of pay costs voters a full unit.

**Wrong turns:** Writing the grab payoff as $\bar R$ alone: she holds office in the term she grabs, so it is $\bar R + W$. Calling the pay rise a saving because rents fall: rents plus pay rise from 7.5 to 8.5.

</details>

## Connections

- **Backward:** [4.1](04-01-elections-as-accountability.md) is the voter's lever on the government; here $a$ is its reduced form, and lobbies hold a second lever. [3.2](03-02-olsons-logic-of-collective-action.md) explains which groups can organize at all. Multiple principals offering one agent contracts is the common-agency cousin of [`grad-micro` 5.4](../../grad-micro/lessons/05-04-moral-hazard-principal-agent.md)'s principal–agent problem.
- **Forward:** [4.4](04-04-regulatory-capture.md) asks the same question of regulators, where [concentrated benefits and diffuse costs](../reference.md#concentrated-benefits-diffuse-costs) do the work. [4.5](04-05-rent-seeking-contests.md) is the contrast: lobbying as resources burned against rivals, not a transfer to the government. [`conflict-and-bargaining`](../../conflict-and-bargaining/syllabus.md) takes these tariff preferences as given when it models trade agreements.
- **Sideways:** the tariff formula is a political Ramsey rule. Like [`public-economics` 4.1](../../public-economics/lessons/04-01-the-ramsey-rule.md)'s inverse-elasticity rule and [`grad-micro` 6.1](../../grad-micro/lessons/06-01-monopoly-price-discrimination.md)'s Lerner markup, it sets a wedge inversely proportional to an elasticity; politics supplies the numerator.

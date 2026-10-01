# Decision Theory · Lesson 3.3: Decisions under ignorance

> ⏱ ~15 min · Module 3: Ambiguity and ignorance · Builds on: [1.1 Acts, states, outcomes](01-01-acts-states-outcomes.md), [3.1 The Ellsberg paradox](03-01-the-ellsberg-paradox.md), [3.2 Models of ambiguity](03-02-models-of-ambiguity.md) · Unlocks: [3.4 Choosing behind the veil](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)

## Why this matters

[3.2](03-02-models-of-ambiguity.md) shrank what you know about the probabilities to a *set* of priors. Push to the limit and the set is everything: you can list the states but say nothing about how likely any of them is. Decision theory then has a short list of classical rules, and they disagree with one another on simple tables. In 1954 John Milnor asked which reasonable-sounding conditions each rule breaks. The answer is a small impossibility result. Every rule gives up something, and the choice of rule is the choice of what to give up. Lesson [3.4](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) needs all of this, because Rawls's case for maximin behind the veil is a claim about which rule fits ignorance.

## The idea

A small biotech must commit to one of four programmes before a brand-new regulator announces its first rule: strict ($s_1$), moderate ($s_2$) or light ($s_3$). The regulator has no record and no one has a credible estimate. Payoffs in utils:

| | $s_1$ strict | $s_2$ moderate | $s_3$ light |
|---|---|---|---|
| A | 4 | 5 | 5 |
| B | 6 | 4 | 2 |
| C | 2 | 8 | 6 |
| D | 10 | 2 | 3 |

Five ways to choose without probabilities:

- **Pessimist:** look only at each act's worst case and take the best of those. A (worst case 4).
- **Optimist:** look only at best cases. D (best case 10).
- **Weighted temperament:** blend best and worst by how optimistic you are. A or D, depending on the weight.
- **Even-handed:** no reason to favour any state, so treat them as equally likely. C (average 16/3).
- **Regret-averse:** in each state, measure how far you fall short of the best act for that state, and keep the worst shortfall small. B.

Four rules, four different acts. None of them is obviously confused. The question is what each one is committed to.

## The formal version

**Setup.** A [decision matrix](../reference.md#decision-matrix) with acts $a_1,\dots,a_m$ (rows), states $s_1,\dots,s_n$ (columns), and utility $u_{ij}$ for act $a_i$ in state $s_j$. Under **ignorance** no probability over states is given, or even a set of them. Laplace, Hurwicz and regret add or subtract utilities, so they need $u$ to be cardinal, as built in [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md). Maximin and maximax need only an ordinal ranking of cells.

**The five rules.** Each scores every act and picks a highest score:

$$\begin{aligned}
\text{Maximin:}\quad & \min_j u_{ij}\\
\text{Maximax:}\quad & \max_j u_{ij}\\
\text{Hurwicz:}\quad & H_\alpha(a_i)=\alpha\max_j u_{ij}+(1-\alpha)\min_j u_{ij}\\
\text{Laplace:}\quad & \tfrac{1}{n}\textstyle\sum_j u_{ij}
\end{aligned}$$

*In words:* [maximin](../reference.md#maximin) (Wald's criterion) ranks acts by their worst case and maximax by their best. The [Hurwicz criterion](../reference.md#hurwicz-criterion) mixes the two with an **optimism index** $\alpha\in[0,1]$: $\alpha=0$ is maximin and $\alpha=1$ is maximax. The [Laplace rule](../reference.md#laplace-rule) is expected utility with equal probabilities, the **principle of insufficient reason** (as epistemology, it is the principle of indifference, examined in [`epistemology`](../../epistemology/syllabus.md) 5.4).

[Minimax regret](../reference.md#minimax-regret) (Savage, "The Theory of Statistical Decision", 1951) works on a second table. The **regret** of $a_i$ in $s_j$ is

$$r_{ij}=\max_k u_{kj}-u_{ij},$$

and the rule chooses an act minimizing $\max_j r_{ij}$. *In words: in each state, compare what you got with the best you could have got had you known the state; then keep your worst such shortfall as small as possible.* Note that $r_{ij}$ depends on the *other acts on the menu*, through the column best $\max_k u_{kj}$.

**Milnor's axioms** ("Games against nature", 1954). Milnor took a rule to be anything that ranks the rows of any matrix, and wrote down ten conditions. Four of them separate the classical rules:

- **Row adjunction:** adding a new act does not change the ranking of the old ones.
- **Column linearity:** adding a constant to every entry in one column does not change the ranking.
- **Column duplication:** adding a copy of an existing column does not change the ranking.
- **Convexity:** if two acts are ranked equal, an act paying their average in every state is not ranked below them.

*In words:* respectively, irrelevant options stay irrelevant; a state that is uniformly better or worse for everyone cannot change which act is better; splitting a state into two identical copies changes nothing; and you are not averse to flipping a coin between equally good options. The others are uncontroversial: a complete transitive ordering, symmetry (relabelling rows or columns changes nothing), strict dominance, continuity, invariance under positive affine rescaling, and a weak form of row adjunction. Milnor's Theorem 1, for choice among the listed acts:

| Rule | Fails |
|---|---|
| Laplace | column duplication |
| Maximin | column linearity |
| Hurwicz, $0<\alpha<1$ (and maximax) | column linearity, convexity |
| Minimax regret | row adjunction |

*In words: each rule satisfies everything except what its row lists.* His Theorem 2 makes this a trade-off rather than an accident. Ordering, symmetry, strict dominance, row adjunction and column linearity together *force* the Laplace rule, which fails column duplication. So the [Milnor axioms](../reference.md#milnor-axioms) are jointly unsatisfiable. Every rule for ignorance gives up row adjunction, column linearity or column duplication (or one of the basics). Milnor also noted that maximin, Hurwicz and minimax regret, unlike Laplace, can rank an act equal to one that weakly dominates it.

**Maximin against nature is not minimax in a game.** In a two-person zero-sum game ([`grad-game-theory` 1.4](../../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md)), the other player picks the column to make your payoff as low as possible. Your worst case is then what a rational opponent will actually deliver, and the minimax theorem guarantees the game's value (with mixed strategies). Nature is not trying to do anything. Maximin against nature is, in Milnor's gloss on Wald, playing as if nature were your opponent. That needs a separate justification.

**Where the argument is weakest.** The case against each rule is "it violates axiom X," and each axiom smuggles in a picture of the problem. Column duplication assumes the way states are counted is arbitrary. The Laplace defender denies that when a problem has a natural partition, and owes an account of which partition is natural. Column linearity, in Milnor's gloss, says nature has no prejudice for or against you. The maximin defender can reply that under real ignorance you have no right to assume that. Row adjunction assumes that what an act gets you does not depend on what you turned down. The regret theorist denies this, as in [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md): the forgone option is part of the outcome. So the axioms do not referee the dispute from outside. Picking an axiom to keep is already picking a side.

## Picture

![Two tables side by side. Left, payoffs for acts A to D across states s1 to s3, with each act's minimum, maximum and mean; A has the best minimum 4, D the best maximum 10, C the best mean 16 over 3. Right, the regret table obtained by subtracting each payoff from its column best of 10, 8 and 6; maximum regrets are 6, 4, 8 and 6, so B has the smallest](assets/03-03-fig1.svg)

One matrix, four rules, four winners. The regret table on the right is computed from the whole menu: change the menu and every number in it can move.

## Worked examples

**Example 1 (clean): all five rules.** From the table in "The idea":

- *Maximin:* worst cases $4,2,2,2$. Choose A.
- *Maximax:* best cases $5,6,8,10$. Choose D.
- *Laplace:* averages $14/3,\ 4,\ 16/3,\ 5$. Choose C.
- *Minimax regret:* column bests are $10,8,6$. Regret rows are A $(6,3,1)$, B $(4,4,4)$, C $(8,0,0)$, D $(0,6,3)$, with maxima $6,4,8,6$. Choose B.
- *Hurwicz:* each act's score is a line in $\alpha$:

$$\begin{aligned}
H_\alpha(A)&=4+\alpha, & H_\alpha(B)&=2+4\alpha,\\
H_\alpha(C)&=2+6\alpha, & H_\alpha(D)&=2+8\alpha.
\end{aligned}$$

A and D tie when $4+\alpha=2+8\alpha$, at $\alpha=2/7$. For $\alpha<2/7$ choose A; for $\alpha>2/7$ choose D. (D beats B and C for every $\alpha>0$.) *In words: Hurwicz never picks B or C at any temperament, because it reads only each act's extremes, and C's merit is having two good states rather than one.*

**Example 2 (hard): the menu changes the verdict.** Suppose programme D only became feasible late. With menu $\{A,B,C\}$, the column bests are $6,8,6$, so the regret rows are

$$\begin{aligned}
A&:(2,3,1), & \max&=3,\\
B&:(0,4,4), & \max&=4,\\
C&:(4,0,0), & \max&=4.
\end{aligned}$$

Minimax regret chooses A. Now D arrives, and the agent still does not choose it. But D raises the best available payoff in $s_1$ from 6 to 10. That adds 4 to the $s_1$ regret of A, B and C: A's maximum regret rises to 6, while B's stays at 4. The choice switches to B. An option you will not take has reversed your ranking of two you might. This is the violation of row adjunction (independence of irrelevant alternatives) in Milnor's table.

Here the rule strains, and each side pays. The critic says a ranking of A against B that turns on D is unstable: an agent can be steered by adding or removing options she would never pick. The regret theorist accepts the menu-dependence and calls it accurate. With D available, choosing A in a strict-regulation world means knowingly passing up 10, and that is a worse outcome than passing up 6. That keeps regret as part of the outcome, and so gives up the axiom. Its rivals keep the axiom and must say why forgone options are not part of what happens to you.

## Watch out

- **You might think** the Laplace rule *is* ignorance-respecting expected utility. It is expected utility with a particular prior, and that prior depends on how the states are cut. Split "strict" into "strict by statute" and "strict by guidance" with the same payoffs, and the Laplace average shifts. That is the column-duplication failure, the same partition problem as [1.1](01-01-acts-states-outcomes.md).
- **You might think** minimax regret minimizes your worst loss. It minimizes your worst shortfall *relative to the best act on this menu*, which is why it is menu-dependent. Maximin is the rule about worst outcomes.
- **You might think** maximin is vindicated by von Neumann's minimax theorem. That theorem concerns an opponent who chooses columns to hurt you. Against nature it supplies an analogy, not an argument.

## One-liner

> With no probabilities at all, every classical rule gives up one of Milnor's conditions: Laplace the way states are counted, maximin and Hurwicz column linearity, minimax regret independence from unchosen options; so choosing a rule means choosing which of these to lose.

## Problems

**P1 (🟢)** *(Formal (a) · Formal (b).)* Acts P, Q and R pay, across states $t_1,t_2,t_3$ (utils): P $=(1,4,9)$, Q $=(5,8,2)$, R $=(7,8,1)$.

(a) Find the choice under maximin, maximax, Laplace, Hurwicz with $\alpha=1/4$, and minimax regret. Show the regret table.
(b) Find every $\alpha\in[0,1]$ at which Hurwicz chooses P, and every one at which it chooses Q. Show that R, the Laplace choice, is chosen for no $\alpha$, and say in one sentence why.

**P2 (🟡)** *(Formal (a) · Formal (b) · Exegetical (c).)* A port authority chooses between X (expand the quay) and Y (raise the seawall). In state $s_1$ trade grows; in $s_2$ it stalls. Payoffs: X $=(8,1)$, Y $=(3,5)$.

(a) Find the choice under Laplace, maximin and minimax regret. Then a planner splits "trade stalls" into "stalls from recession" and "stalls from rerouting", with each act paying the same in both. Recompute all three rules on the $2\times3$ matrix.
(b) Return to the original $2\times2$ matrix. Add one constant to every entry of one column so that maximin's choice reverses, and check whether Laplace's and minimax regret's choices change.
(c) Name the Milnor axiom violated in (a) and the one violated in (b), and the rule that violates each. Two sentences.

**P3 (🔴, optional)** *(Exegetical (a) · Evaluative (b).)* From an invented county planning memo:

> "We have no credible estimates for the three flood scenarios, so the consultant recommends the plan with the best worst case. This is not timidity. Von Neumann proved that against an opponent the minimax strategy is the rational one, and nature is the ultimate opponent. The mathematics settles it."

(a) Name the move doing the work, and say exactly why the minimax theorem does not deliver the memo's conclusion. 100 words or fewer.
(b) Without the game-theory premise, give the strongest case for using maximin here and the strongest objection to it. 150 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) · Formal (b))*

(a) Worst cases are $1,2,1$, so maximin chooses Q. Best cases are $9,8,8$, so maximax chooses P. Averages are $14/3,\ 5,\ 16/3$, so Laplace chooses R. Hurwicz at $\alpha=1/4$:

$$\begin{aligned}
P&: \tfrac14(9)+\tfrac34(1)=3,\\
Q&: \tfrac14(8)+\tfrac34(2)=\tfrac72,\\
R&: \tfrac14(8)+\tfrac34(1)=\tfrac{11}{4},
\end{aligned}$$

so Q. Column bests are $7,8,9$:

| | $t_1$ | $t_2$ | $t_3$ | max |
|---|---|---|---|---|
| P | 6 | 4 | 0 | 6 |
| Q | 2 | 0 | 7 | 7 |
| R | 0 | 0 | 8 | 8 |

Minimax regret chooses P.

(b) $H_\alpha(P)=1+8\alpha$, $H_\alpha(Q)=2+6\alpha$, $H_\alpha(R)=1+7\alpha$. P and Q tie at $1+8\alpha=2+6\alpha$, so $\alpha=1/2$. Hurwicz chooses Q for $\alpha\le1/2$ and P for $\alpha\ge1/2$, with a tie at exactly $1/2$. R loses to P for every $\alpha>0$ ($1+7\alpha<1+8\alpha$), and at $\alpha=0$ it scores 1 against Q's 2. Why: Hurwicz sees only each act's best and worst, and R's high average comes from doing well in two states, which neither extreme registers.

**Must hit, strict (a):** all five choices (Q, P, R, Q, P); the regret table from column bests $7,8,9$.

**Must hit, strict (b):** the three lines; the switch at $\alpha=1/2$ with the tie noted; R never chosen, with the reason that Hurwicz ignores non-extreme payoffs.

**Wrong turns:** computing regret as the gap from each act's own best payoff instead of the column's best. Putting $\alpha$ on the worst case, which flips the answer to "P for $\alpha<1/2$"; fine if the convention is stated, wrong if mixed mid-solution.

---

**P2** *(Formal (a) · Formal (b) · Exegetical (c))*

(a) Original matrix. Laplace: $9/2$ vs $4$, choose X. Maximin: $1$ vs $3$, choose Y. Regret: column bests $8,5$; X $(0,4)$, Y $(5,0)$; maxima $4$ vs $5$, choose X.
Split matrix X $=(8,1,1)$, Y $=(3,5,5)$. Laplace: $10/3$ vs $13/3$, now Y. Maximin: still $1$ vs $3$, Y. Regret: column bests $8,5,5$; maxima still $4$ vs $5$, X. Only Laplace changed.

(b) **Accept:** any single-column shift that reverses maximin: add $c>2$ to $s_2$, or $c<-2$ to $s_1$. Model: add 3 to $s_2$, giving X $=(8,4)$, Y $=(3,8)$. Maximin: $4$ vs $3$, now X. Laplace: $6$ vs $11/2$, still X (the gap stays $1/2$). Regret: column bests $8,8$; X $(0,4)$, Y $(5,0)$; still X. A column shift moves every entry and that column's best equally, so averages shift together and regrets do not move.

(c) In (a), Laplace violates column duplication. In (b), maximin violates column linearity.

**Must hit, strict:** the three choices before and after the split, with only Laplace moving; a valid shift with the maximin reversal shown and Laplace and regret checked; the two axioms named with the right rules.

**Wrong turns:** shifting both columns, which is Milnor's overall linearity axiom, not column linearity, and changes no rule. Saying minimax regret also fails duplication: duplicated columns duplicate regrets, so the maximum is unchanged.

---

**P3** *(Exegetical (a) · Evaluative (b))*

**Must hit, strict (a):**

- The move doing the work is the equivocation on "opponent": nature is treated as an agent choosing the scenario to minimize the county's payoff.
- The minimax theorem is about a two-person zero-sum game, where the other player's interests are exactly opposed. There the worst case is what a rational opponent will deliver, and the guarantee holds over mixed strategies.
- Nature has no objective, so the theorem's premise fails. Maximin against nature needs an independent argument.

**Must hit, any verdict (b):**

- Maximin stated precisely: choose the plan whose worst scenario is best.
- A positive case that does not rely on the analogy. For example: no basis for probabilities, a catastrophic worst case, and little to gain from the better scenarios. (These are the kinds of conditions [3.4](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) tests.)
- The strongest objection: maximin ignores every column but the worst. It can reject a plan far better in every scenario but one for a tiny margin in that one, and it fails column linearity.
- Whether biting the bullet generalizes: does the defender accept maximin's verdict in cases where the stakes are small?

**Wrong turns:** answering (a) with "the memo is too pessimistic", which is a verdict, not a diagnosis. In (b), defending maximin by assuming the worst scenario is the likeliest, which smuggles probabilities back in.

**Model answer (a):** The memo's conclusion rests on "nature is the ultimate opponent." Von Neumann's theorem concerns a zero-sum game in which the other player picks a column to make your payoff as low as possible. Against such a player your worst case is what will happen, and the best guaranteed value (over mixed strategies) is rational to secure. Nature picks nothing to hurt the county, so the theorem's premise is false here. The memo borrows the theorem's authority through a metaphor.

**Model answer (b), one of several:** For maximin: with no credible probabilities, any weighting of the scenarios is invented. If the worst flood would cost lives the county cannot recover from, while the better scenarios differ only in convenience, securing the floor is what prudence asks. Against it: maximin lets one column decide everything. A plan costing slightly more in the worst flood but far less in the other two is rejected however large the difference, and adding a constant to one scenario's payoffs can flip the choice. Biting that bullet generalizes badly to low-stakes choices. So the defence holds only if the case really has the catastrophic, little-to-gain shape, and the burden is to show that it does.

</details>

## Flashback

**From Lesson [3.1](03-01-the-ellsberg-paradox.md) (The Ellsberg paradox):** *(Formal (a)–(b).)* Urn K holds 60 balls: 15 red and 45 black. Urn U holds 60 red and black balls in unknown mix. A bet names an urn and a colour and pays 100 dollars if a ball drawn from that urn has that colour, else 0. Let $p$ be a chooser's subjective probability that a ball from U is red, and let $u$ be any utility with $u(100) > u(0)$.

(a) Dana prefers K-red to U-red, and K-black to U-black. For which $p$ does expected utility endorse each choice taken alone? Show that no $p$ and no $u$ fit both.
(b) Kim prefers U-red to K-red, and K-black to U-black. Find every $p$ that makes Kim an expected-utility maximizer. Then, in one sentence: what does the contrast with Dana show about which choice pairs reveal ambiguity aversion?

<details>
<summary>Solution</summary>

Write $\Delta u = u(100) - u(0) > 0$. K-red wins with chance $15/60 = 1/4$ and K-black with $3/4$; U-red wins with $p$ and U-black with $1 - p$.

(a)

$$\begin{aligned}
EU(\text{K-red}) - EU(\text{U-red}) &= \Delta u\,(\tfrac14 - p),\\
EU(\text{K-black}) - EU(\text{U-black}) &= \Delta u\,\big(\tfrac34 - (1-p)\big) = \Delta u\,(p - \tfrac14).
\end{aligned}$$

The first choice alone fits every $p < 1/4$; the second alone fits every $p > 1/4$. The two differences are equal and opposite, so no $p$ makes both positive, and $\Delta u$ factors out, so no utility helps.

(b) U-red over K-red needs $p > 1/4$; K-black over U-black needs $p > 1/4$ as well. Kim fits every $p$ with $1/4 < p \le 1$, for instance the even estimate $p = 1/2$. Choosing the unknown urn once and the known urn once reveals nothing about ambiguity: only a pair that needs the belief about U to move against whichever bet is taken, as Dana's does, fits no single probability.

**Wrong turns:** setting $p = 1/2$ in (a) because U "looks symmetric"; the result has to hold for every $p$, which is the point. Taking the known urn's $1/4$ as Dana's $p$. Calling Kim ambiguity seeking for her first choice: one belief, $p > 1/4$, explains both of her choices.

</details>

## Connections

- **Backward:** the decision matrix and the partition problem are [1.1](01-01-acts-states-outcomes.md)'s; Laplace's column-duplication failure is that problem again. [3.2](03-02-models-of-ambiguity.md)'s maxmin expected utility is maximin over a set of priors. With every prior admitted it reduces to plain maximin, and with a single uniform prior it reduces to the Laplace rule. Regret as part of the outcome first appeared as a defence of Allais in [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md).
- **Forward:** [3.4](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) asks whether the veil of ignorance is ignorance at all, setting Rawls's maximin against Harsanyi's equal probabilities, which is the Laplace rule in a social setting. [`political-philosophy`](../../political-philosophy/syllabus.md) 2.3 runs maximin against expected utility as part of Rawls's argument.
- **Sideways:** minimax in zero-sum games is [`grad-game-theory` 1.4](../../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md); the principle of indifference behind Laplace, and its dependence on the partition, belongs to [`epistemology`](../../epistemology/syllabus.md) 5.4. Each Milnor axiom is a candidate crux in the sense of [`philosophical-method` 4.3](../../philosophical-method/lessons/04-03-finding-the-crux.md): two rules that disagree on a matrix disagree about which axiom to give up.

# Political Economy · Lesson 5.1: Legislative bargaining: Baron–Ferejohn

> ⏱ ~15 min · Module 5: Bargaining, coalitions and redistribution · Builds on: [3.5 Agenda setters and veto players](03-05-agenda-setters-and-veto-players.md), [`grad-game-theory` 3.5 Bargaining](../../grad-game-theory/lessons/03-05-bargaining.md) · Unlocks: [5.2 Coalition and government formation](05-02-coalition-and-government-formation.md), [5.3 The Meltzer–Richard model](05-03-the-meltzer-richard-model.md)

## Why this matters

A legislature has a fixed sum to spend on district projects, and any majority can pass any split. Social choice says this game has no stable answer: every division can be beaten by another that a different majority prefers. The three-player majority game of [`grad-game-theory` 6.1](../../grad-game-theory/lessons/06-01-coalitional-games-core.md) has an empty core. Real legislatures still pass budgets. David Baron and John Ferejohn ("Bargaining in Legislatures", *American Political Science Review*, 1989) closed the gap by modelling the *procedure*: who gets to propose, whether the proposal can be amended, what happens if it fails. With the procedure fixed, the game has a sharp prediction, and it says that the right to propose is worth a great deal.

## The idea

[Rubinstein bargaining](../../grad-game-theory/lessons/03-05-bargaining.md) has two players take turns, and the proposer's edge comes from the responder's impatience. As both grow patient, the edge disappears and the split tends to one half each.

A legislature changes two things. First, the proposer needs only a *majority*, not everyone. Second, who proposes next is a lottery. So a proposer can ignore half the chamber and buy the cheapest votes she needs. What is a vote worth? Exactly what its owner expects if she votes no: another session, in which she might be recognized herself or be bought by the next proposer. Because every member is competing to be bought, that price is low. The proposer keeps the rest. Unlike Rubinstein's first-mover edge, this advantage survives patience. The outsiders are what make it possible.

## The model

**The game ([Baron–Ferejohn bargaining](../reference.md#baron-ferejohn-bargaining), closed rule).** Legislators $i \in N = \{1, \dots, n\}$, $n \ge 3$ odd, divide a dollar. In each session $t = 0, 1, 2, \dots$:

1. Nature recognizes one member as proposer, each with probability $1/n$, independently across sessions.
2. The proposer offers a division $x = (x_1, \dots, x_n)$ with $x_j \ge 0$ and $\sum_j x_j = 1$.
3. Under the [closed rule](../reference.md#closed-and-open-rules), no amendment is allowed: all members vote yes or no at once. With at least $(n+1)/2$ yes votes, $x$ is enacted and the game ends. Otherwise the next session begins.

Member $j$'s payoff is $\delta^t x_j$ if $x$ passes in session $t$, and 0 if nothing ever passes, with discount factor $\delta \in (0, 1)$. Members are risk neutral, and the whole game is common knowledge. Members vote as if pivotal, that is, yes exactly when the offer beats the value of rejecting. This rules out silly equilibria in which everyone votes no because no single vote matters.

A strategy is **stationary** if what a member proposes and how she votes depend only on the current proposal, not on history or the session number. Write $v$ for a member's **ex ante value**: her expected payoff at the start of a session, before recognition.

**Proposition (Baron and Ferejohn's stationary equilibrium).** For every $\delta \in (0, 1)$ there is a stationary subgame-perfect equilibrium in which:

- the proposer offers $\delta/n$ to each of $(n-1)/2$ other members chosen at random and 0 to everyone else, keeping
$$x_{\text{prop}} = 1 - \delta\,\frac{n-1}{2n};$$
- each member votes yes if and only if her offer is at least $\delta/n$;
- the first proposal passes, and every member's ex ante value is $v = 1/n$.

*In words:* the proposer buys a bare majority at the price of a rejected proposal, which is one discounted equal share, and keeps everything else; the game is fair before the lottery and very unfair after it.

*Proof.* Fix the profile and suppose it gives every member the same ex ante value $v$.

1. *Voting.* A member who rejects a proposal that then fails enters a new session worth $v$, discounted: $\delta v$. If her vote is pivotal, yes beats no iff $x_j \ge \delta v$. That is her rule.
2. *Proposing.* A passing proposal needs $(n-1)/2$ yes votes besides the proposer's. By step 1, each costs at least $\delta v$, and all prices are equal, so the cheapest passing proposal pays exactly $\delta v$ to $(n-1)/2$ members and keeps $1 - \delta v\,\frac{n-1}{2}$. Buying more votes only costs more. A failing proposal is worth $\delta v$ to the proposer.
3. *Consistency.* A member is recognized with probability $1/n$. Otherwise, with probability $(n-1)/n$, she is one of $n - 1$ candidates for $(n-1)/2$ slots, so she is bought with probability $1/2$. Hence
$$v = \frac{1}{n}\Bigl(1 - \delta v\,\frac{n-1}{2}\Bigr) + \frac{n-1}{n}\cdot\frac{1}{2}\cdot\delta v.$$
The two $\delta v$ terms cancel, so $v = 1/n$, and the proposer keeps $1 - \delta(n-1)/(2n)$.
4. *Passing beats failing.* $1 - \delta\frac{n-1}{2n} > \frac{\delta}{n}$ because $\delta\frac{n+1}{2n} < 1$. So the proposer prefers her passing proposal to delay.
5. *Subgame perfection.* Payoffs are bounded and discounted, so the one-shot deviation principle ([`grad-game-theory` 3.2](../../grad-game-theory/lessons/03-02-backward-induction-subgame-perfection.md)) applies. Steps 1, 2 and 4 show that no single deviation at any node pays. ∎

**[Proposer power](../reference.md#proposer-power).** The proposer gets $1 - \delta\frac{n-1}{2n}$; a coalition partner gets $\delta/n$. As $\delta \to 1$ the proposer still keeps $\frac{n+1}{2n}$: two thirds with three members, and more than half however large the chamber. Contrast Rubinstein, where the proposer's $\frac{1}{1+\delta}$ tends to one half. The coalition is a [minimal winning coalition](../reference.md#minimal-winning-coalition) because every extra vote costs $\delta/n$ and buys nothing: the proposal already passes for sure. Under unanimity, by contrast, the proposer must pay all $n - 1$ others and keeps $1 - \delta\frac{n-1}{n}$. With $n = 2$ that is $1 - \delta/2$, Rubinstein with a random proposer.

The proposer is a [setter](../reference.md#setter-model), as in [3.5](03-05-agenda-setters-and-veto-players.md). The difference is the reversion point: here it is not a fixed status quo but the value of starting over, which the equilibrium itself determines.

**Unequal recognition.** If member $i$ is recognized with probability $p_i$, the same logic applies to values $v_i$ that can differ. A proposer buys the *cheapest* votes, those with the lowest $\delta v_j$. Then $v_i$ equals $p_i$ times what $i$ keeps as proposer, plus $\delta v_i$ times the probability that someone else buys her. Hülya Eraslan ("Uniqueness of Stationary Equilibrium Payoffs in the Baron–Ferejohn Model", *Journal of Economic Theory*, 2002) shows that stationary equilibrium payoffs are unique even when members differ in this way. Example 2 shows why the answer is not "power in proportion to recognition."

**The open rule, in outline.** Under an open rule, after a proposal is made another member is recognized. She may *move the previous question*, which forces a vote, or offer an amendment, which becomes the new proposal. Now the proposer must also keep the next recognized member from amending. Baron and Ferejohn find stationary equilibria in which the proposer offers benefits to more than a bare majority, keeps less, divides the dollar more equally, and in which agreement can be delayed. Later work (David Primo, *Public Choice*, 2007) found that the open-rule equilibrium admits several randomization strategies with slightly different payoffs, so treat the open-rule numbers as less settled than the closed-rule ones. How open and closed rules work in Congress is described in [`political-institutions` 4.2](../../political-institutions/lessons/04-02-committees-and-agenda-control.md).

**Where the argument is weakest.** The sharp prediction is a prediction about *stationary* equilibria. Baron and Ferejohn also show that with $n \ge 5$ and $\delta > \frac{n+2}{2(n-1)}$, *any* division of the dollar can be supported by a subgame-perfect equilibrium. History-dependent strategies punish a proposer who deviates by shutting her out of future coalitions, the same logic as the [folk theorems](../../grad-game-theory/lessons/03-04-folk-theorems.md). Stationarity is a selection, defended as simple, not derived. The other hypotheses are also strong. Recognition is exogenous, information is complete, voting is costless and as if pivotal, and the dollar is purely distributive, with no public good that a broad coalition would value. Drop the closed rule and the coalition grows. Make votes uncertain and buying extra votes becomes insurance. Without stationarity there is no single prediction left to test.

## Picture

![Proposer's share and each coalition partner's offer against the discount factor delta, for legislatures of 3, 5 and 7 members. The solid proposer-share lines fall from 1 at delta equals 0 to 2/3, 3/5 and 4/7 at delta equals 1. The dashed offer lines rise from 0 to 1/3, 1/5 and 1/7. The gap between solid and dashed lines stays large even at delta equals 1.](assets/05-01-fig1.svg)

The solid lines are $1 - \delta\frac{n-1}{2n}$ and the dashed lines $\delta/n$. Patience raises the price of a vote, but even as $\delta \to 1$ a vote costs only an equal share $1/n$, and the proposer needs only half the chamber.

## Worked examples

**Example 1 (clean): seven members, $\delta = 0.7$.** A vote costs $\delta v = 0.7/7 = 0.1$. The proposer needs $(7-1)/2 = 3$ partners, pays $0.3$, and keeps $0.7$. Her share is 7 times a partner's. Check the value: $v = \frac{1}{7}(0.7) + \frac{6}{7}\cdot\frac{1}{2}\cdot 0.1 = 0.1 + \frac{0.3}{7} = \frac{1}{7}$. Deviations: offering a partner less than 0.1 gets the proposal rejected, leaving the proposer $\delta v = 0.1$, far below 0.7; buying a fourth vote leaves her 0.6. A simulation of the game with these strategies gives each member about $0.1427$ in expectation, matching $1/7 \approx 0.1429$.

**Example 2 (the hypothesis bites): unequal recognition.** Three members, $\delta = 4/5$, and member 1 (the Speaker) is recognized with probability $1/2$, members 2 and 3 with $1/4$ each. Guess that the Speaker's vote is the expensive one, $v_1 > v_2 = v_3 = v$, so members 2 and 3 buy each other and the Speaker buys either at random.

- Member 2 is proposer with probability $1/4$ and keeps $1 - \delta v$. She is bought by the Speaker with probability $\tfrac12 \cdot \tfrac12$ and by member 3 with probability $\tfrac14$, each time receiving $\delta v$. So $v = \tfrac14(1 - \delta v) + \tfrac14\delta v + \tfrac14 \delta v$, giving $v = \frac{1}{4 - \delta} = \frac{5}{16}$.
- The Speaker is never bought: $v_1 = \tfrac12(1 - \delta v) = \frac{2-\delta}{4-\delta} = \frac38$.

Check the guess: $3/8 > 5/16$, so members 2 and 3 are right to skip the Speaker. Every proposer offers $\delta \cdot \tfrac{5}{16} = \tfrac14$ and keeps $\tfrac34$. A grid search over all stationary mixing strategies finds no other equilibrium payoffs. Twice the recognition probability buys only $6/5$ of the value. A member who is often the proposer is expensive to buy, so nobody buys her.

## Watch out

- **You might think** proposer power is a friction that vanishes with patience, as in Rubinstein. Actually the proposer keeps $\frac{n+1}{2n} > \frac12$ even as $\delta \to 1$, because she pays only half the chamber.
- **You might think** proposer power makes the game unfair. Ex ante every member's value is $1/n$. The inequality is after the lottery, and unequal recognition matters less than proportionally (Example 2).
- **You might think** the model predicts minimum winning coalitions and a large proposer share, full stop. That is the *stationary* closed-rule prediction. Without stationarity, any division is an equilibrium once $n \ge 5$ and $\delta$ is high enough. Under the open rule, coalitions grow. This is the hypothesis people drop.

## One-liner

> With random recognition and a closed rule, the proposer buys a bare majority at the price of starting over, $\delta/n$ a vote, and keeps $1 - \delta\frac{n-1}{2n}$: fair before the lottery, lopsided after it, and lopsided even with patient players.

## Problems

**P1 (🟢)** *(Formal.)* Three legislators divide a dollar under a closed rule with equal recognition and $\delta = 3/5$.

(a) Find the stationary equilibrium proposal, the proposer's share, and each member's ex ante value, and check that the values are consistent.
(b) Show that neither of these proposer deviations pays: offering her partner $0.15$; buying both other votes.
(c) Find the proposer's share as $\delta \to 1$, and say in one sentence why it does not tend to one half.

**P2 (🟡)** *(Formal.)* Three legislators, closed rule, $\delta = 3/4$. Member 1 is recognized with probability $1/5$, members 2 and 3 with $2/5$ each.

(a) Suppose proposers 2 and 3 always buy member 1's vote, and proposer 1 buys member 2 or member 3 with probability $1/2$ each. Compute the stationary values these strategies imply, and show that they contradict the proposers' choices.
(b) Show that values $v_1 = v_2 = v_3 = 1/3$ are consistent with equilibrium. Give each proposer's offer and share, and, assuming proposer 1 splits $1/2$–$1/2$ and proposers 2 and 3 mirror each other, find the probability that proposer 3 buys member 2's vote rather than member 1's.

**P3 (🔴, optional)** *(Exegetical.)* An invented memo from a committee chair's aide: "When the chair writes the district-projects bill, she should pay off as many members as she can. Every extra yes vote is insurance, and it costs her nothing, since members she leaves out get nothing anyway."

In 150 words or fewer: say what Baron and Ferejohn's closed-rule model predicts about coalition size and why, naming the features of the model that make an extra vote worthless to the proposer; then name two changes to the model under which the aide's advice could be right.

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) With $v = 1/3$, a vote costs $\delta v = \tfrac35 \cdot \tfrac13 = \tfrac15$. The proposer needs one partner, chosen at random, offers her $\tfrac15$, gives the third member 0, and keeps $\tfrac45$. Consistency: $v = \tfrac13 \cdot \tfrac45 + \tfrac23 \cdot \tfrac12 \cdot \tfrac15 = \tfrac{4}{15} + \tfrac{1}{15} = \tfrac13$. (Formula check: $1 - \delta\frac{n-1}{2n} = 1 - \tfrac35 \cdot \tfrac13 = \tfrac45$.)

(b) Offering $0.15 < \tfrac15$: both others reject, the proposal fails, and the proposer gets $\delta v = \tfrac15 < \tfrac45$. Buying both votes: she pays $\tfrac25$ and keeps $\tfrac35 < \tfrac45$. Neither pays.

(c) $1 - \tfrac13 = \tfrac23$. It stays above one half because the proposer pays only one of the two others, and each vote costs at most an equal share $1/3$, however patient members are.

**Wrong turns:** Pricing a vote at $v = 1/3$ instead of $\delta v$: rejection means waiting a session. Splitting the dollar among the coalition only, giving $\tfrac12$ each: the partner's price is set by her outside option, not by fairness.

---

**P2** *(Formal, strict.)*

(a) Write $v_2 = v_3 = v$. Member 1 proposes with probability $1/5$ and keeps $1 - \tfrac34 v$; she is bought by proposers 2 and 3, probability $4/5$, at $\tfrac34 v_1$. So $v_1 = \tfrac15(1 - \tfrac34 v) + \tfrac45 \cdot \tfrac34 v_1$. Member 2 proposes with probability $2/5$ and keeps $1 - \tfrac34 v_1$, and is bought only by proposer 1, probability $\tfrac15 \cdot \tfrac12$: $v = \tfrac25(1 - \tfrac34 v_1) + \tfrac{1}{10}\cdot\tfrac34 v$. Solving, $v_1 = 5/13$ and $v = 4/13$ (sum 1). Then $v_1 > v$: member 1's vote is the *most* expensive, so proposers 2 and 3 should buy each other, not member 1. Contradiction. (The opposite pure guess, that nobody buys member 1, gives $v_1 = 5/37 < v = 16/37$, which makes member 1 the cheapest; it fails too. So proposers must mix.)

(b) With equal values every vote costs $\tfrac34 \cdot \tfrac13 = \tfrac14$, so every proposer offers $\tfrac14$ to one partner and keeps $\tfrac34$, and is indifferent among partners, so mixing is optimal. Let $q_i$ be the probability that member $i$ is bought. Consistency requires $v_i = p_i \cdot \tfrac34 + q_i \cdot \tfrac14 = \tfrac13$, so $q_1 = \tfrac{11}{15}$ and $q_2 = q_3 = \tfrac{2}{15}$ (they sum to 1, one partner per session). Member 2 is bought by proposer 1 with probability $\tfrac15 \cdot \tfrac12 = \tfrac{1}{10}$ and by proposer 3 with probability $\tfrac25 \pi$, where $\pi$ is the probability that proposer 3 buys member 2. So $\tfrac{1}{10} + \tfrac25\pi = \tfrac{2}{15}$, giving $\pi = \tfrac{1}{12}$; proposer 3 buys member 1 with probability $\tfrac{11}{12}$. Check: $q_1 = 2 \cdot \tfrac25 \cdot \tfrac{11}{12} = \tfrac{11}{15}$. The weakest member is bought most often, which lifts her value from her recognition share $1/5$ to $1/3$.

**Wrong turns:** Assuming the member recognized least is always cheapest and stopping at the pure guess. Assuming values must be proportional to recognition probabilities. The payoffs here are unique (Eraslan); the mixing is not: proposer 1 may buy member 2 with any probability in $[1/3, 2/3]$ if proposers 2 and 3 adjust.

---

**P3** *(Exegetical, strict.)*

**Must hit, strict:**

- The prediction is a minimum winning coalition: the proposer buys exactly $(n-1)/2$ votes.
- Why: each vote costs its owner's continuation value $\delta v_j > 0$, so it is not free. With complete information and voting as if pivotal, a bare majority passes for sure, so an extra vote insures against nothing. Under the closed rule no one can amend.
- Two changes, any two of: uncertainty about how members will vote or whether they attend, which gives extra votes insurance value; an open rule, where a broader coalition deters amendment; a supermajority requirement; benefits that are partly a public good valued by all, so including members is cheap.

**Wrong turns:** Saying excluded members' votes are free because they "get nothing anyway." What a member gets if she is left out is not her price; her price is what she gets by voting the bill down. Citing fairness norms as part of the model; the model has none.

**Model answer:** The closed-rule model predicts a minimum winning coalition. Each yes vote must be paid its owner's value of rejecting the bill and starting over, $\delta v_j$, which is positive because she might be the next proposer or be bought by one. With complete information and members voting as if pivotal, a bare majority already passes the bill with certainty, and under the closed rule no one can amend it, so a further vote costs money and buys nothing. The aide would be right if votes were uncertain, so that extra votes insure passage, or under an open rule, where a broader coalition makes amendment less attractive. A supermajority requirement would also force a larger coalition.

</details>

## Flashback

**From Lesson [4.5](04-05-rent-seeking-contests.md) (Rent-seeking contests):** *(Formal (a)–(b).)* Two firms lobby for a port concession in a Tullock contest with $r = 1$, efforts sunk, everything common knowledge. The incumbent operator values the concession at $V_1 = 45$, a newcomer at $V_2 = 15$. An invented trade-press column: "The newcomer knows it will probably lose, so it rationally holds back: it gambles a smaller fraction of what the concession is worth to it than the incumbent does. Most of the money burned is the incumbent's." (a) Find each firm's equilibrium effort, winning probability and expected payoff, and the fraction of its own valuation each spends. (b) Show that for any $V_1 > V_2 > 0$ the two firms spend the same fraction of their own valuations. In one sentence, say which of the column's two claims survives.

<details>
<summary>Solution</summary>

(a) Total effort is $S = V_1V_2/(V_1 + V_2) = 675/60 = 11.25$. Efforts: $x_1 = V_1^2V_2/(V_1+V_2)^2 = 135/16 = 8.4375$ and $x_2 = V_1V_2^2/(V_1+V_2)^2 = 45/16 = 2.8125$. Winning probabilities $p_1 = 8.4375/11.25 = \tfrac34$ and $p_2 = \tfrac14$. Payoffs $\tfrac34 \cdot 45 - 8.4375 = 25.3125$ and $\tfrac14 \cdot 15 - 2.8125 = 0.9375$, matching $V_i^3/(V_1+V_2)^2$. Fractions of own valuation: $8.4375/45 = \tfrac{3}{16}$ and $2.8125/15 = \tfrac{3}{16}$. Payoffs are concave in own effort at $r = 1$, so the first-order conditions are sufficient; a grid search over each firm's deviations confirms both best replies.

(b) The first-order conditions are $V_1x_2 = S^2$ and $V_2x_1 = S^2$, so $V_1x_2 = V_2x_1$, that is, $x_1/V_1 = x_2/V_2$, and both equal $V_1V_2/(V_1+V_2)^2$. The first claim fails: the newcomer's discouragement shows in its absolute effort (2.8125 against 8.4375), not as a share of its stake. The second survives: efforts are proportional to valuations, so the incumbent supplies $V_1/(V_1 + V_2) = \tfrac34$ of the 11.25 burned.

**Wrong turns:** Applying the symmetric formula $x^* = rR(n-1)/n^2$ with $R = 45$ or $R = 15$: the weaker firm's discouragement also lowers the stronger firm's effort. Concluding the newcomer should stay out because it will probably lose: against positive rival effort its marginal payoff at zero is $V_2/x_1 - 1 > 0$, and it nets 0.9375 by entering.

</details>

## Connections

- **Backward:** the stationary equations are [`grad-game-theory` 3.5](../../grad-game-theory/lessons/03-05-bargaining.md)'s Rubinstein equations with a random proposer and a majority quota, and the proof is [3.2](../../grad-game-theory/lessons/03-02-backward-induction-subgame-perfection.md)'s one-shot deviation principle. The proposer is [3.5](03-05-agenda-setters-and-veto-players.md)'s setter with an endogenous reversion point. The multiplicity without stationarity is the [folk theorem](../../grad-game-theory/lessons/03-04-folk-theorems.md) logic again.
- **Forward:** [5.2](05-02-coalition-and-government-formation.md) uses the closed-rule split as the formateur premium and sets it against [Gamson's law](../reference.md#gamsons-law), which says parties split office in proportion to seats. [5.3](05-03-the-meltzer-richard-model.md) leaves the legislature and asks what tax rate a median voter chooses.
- **Sideways:** the empty core of the majority game ([`grad-game-theory` 6.1](../../grad-game-theory/lessons/06-01-coalitional-games-core.md)) is why a procedure is needed at all. The rules that decide who proposes and who may amend are described in [`political-institutions` 4.2](../../political-institutions/lessons/04-02-committees-and-agenda-control.md) and, for cabinets, [3.2](../../political-institutions/lessons/03-02-forming-governments-coalitions-and-minorities.md). Whether a division set by procedure is legitimate is [`political-philosophy`](../../political-philosophy/syllabus.md)'s question.

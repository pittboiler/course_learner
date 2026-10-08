# Political Economy · Lesson 5.2: Coalition and government formation

> ⏱ ~15 min · Module 5: Bargaining, coalitions and redistribution · Builds on: [5.1 Legislative bargaining: Baron–Ferejohn](05-01-legislative-bargaining-baron-ferejohn.md), [`grad-game-theory` 6.2](../../grad-game-theory/lessons/06-02-shapley-value.md), [`political-institutions` 3.2](../../political-institutions/lessons/03-02-forming-governments-coalitions-and-minorities.md) · Unlocks: [5.3 The Meltzer–Richard model](05-03-the-meltzer-richard-model.md)

## Why this matters

After a proportional election nobody has a majority, and two questions are open: which parties will govern together, and how they will split the ministries. [`political-institutions` 3.2](../../political-institutions/lessons/03-02-forming-governments-coalitions-and-minorities.md) described the procedure (formateurs, coalition agreements, investiture votes). This lesson gives the models. They disagree sharply, and the standoff, between "office follows seats" and "office follows bargaining position", is one of the cleanest open puzzles in positive political theory.

## The idea

Two families of answers.

**Count seats.** William Riker (*The Theory of Political Coalitions*, 1962) argued that winners should share the spoils among as few as possible, so the coalition that forms is just big enough to win. William Gamson ("A Theory of Coalition Formation", *American Sociological Review*, 1961) proposed that each partner expects a share of the payoff proportional to the resources it brings. Both treat a seat as a unit of power.

**Model the bargaining.** A seat is worth only what it does: complete a majority. A 25-seat party that turns a loser into a winner is as useful as a 30-seat party that does the same. And whoever writes the proposal can play the partners off against each other. [5.1](05-01-legislative-bargaining-baron-ferejohn.md)'s Baron–Ferejohn game, run on a parliament of parties, predicts a large bonus for the formateur and payoffs that ignore seat counts.

## The model

**Setting.** Parties $i \in N$ hold seats $w_i$; a coalition $C \subseteq N$ is *winning* if $\sum_{i \in C} w_i \ge q$, the quota (51 of 100 here). Office is a divisible unit ("portfolios"), worth 1 in total.

- A [minimal winning coalition](../reference.md#minimal-winning-coalition) is winning, and losing if any one member leaves. *In words:* nobody in it is surplus.
- A *minimum-size* coalition is a minimal winning coalition with the fewest total seats: Riker's prediction. His size principle is derived for $n$-person, zero-sum games with side payments, rational players and complete information; outside those hypotheses it is a conjecture.
- A [minimal connected winning coalition](../reference.md#minimal-connected-winning-coalition) (Robert Axelrod, *Conflict of Interest*, 1970) orders the parties on a left–right line. The coalition must be winning and *connected* (no gap on the line), and dropping any member must leave a coalition that loses or has a gap. *In words:* partners must be ideological neighbours, even if that means carrying a party the arithmetic does not need.
- [Gamson's law](../reference.md#gamsons-law): partner $i \in C$ receives $w_i / \sum_{j \in C} w_j$.

Seats are not power. Two seat distributions with the same list of winning coalitions are the same game; the smallest integers that reproduce the list are the [minimum integer voting weights](../reference.md#minimum-integer-voting-weights). The power index of [`grad-game-theory` 6.2](../../grad-game-theory/lessons/06-02-shapley-value.md) (the Shapley–Shubik index: the share of orderings in which a party is pivotal) depends only on that list. And with no veto party, the core of a majority game is empty ([`grad-game-theory` 6.1](../../grad-game-theory/lessons/06-01-coalitional-games-core.md)): any split can be undercut by a rival offer. So cooperative theory says who is powerful, but not who gets what.

**The bargaining game ([Baron–Ferejohn](../reference.md#baron-ferejohn-bargaining) with parties).** Each round one party is recognized as formateur, each with probability $1/|N|$. It proposes a split of the unit among parties. All parties vote; the split passes if the parties voting yes hold at least $q$ seats. If it passes, the game ends; if not, a new round begins and every payoff is discounted by $\delta \in (0,1)$. Everything is common knowledge, the rule is closed (no amendments), and the solution concept is stationary subgame-perfect equilibrium. Write $v_i$ for party $i$'s expected payoff at the start of a round (its *ex ante value*, as in 5.1). As in 5.1, a party votes yes if and only if its offer is at least $\delta v_i$, its value from rejecting.

**Lemma (bargaining produces minimal winning coalitions).** If every $v_j > 0$, every equilibrium proposal is made to a minimal winning coalition.

*Proof.* A formateur pays each partner $j$ at least $\delta v_j > 0$ and pays nothing to parties outside. If its coalition had a surplus member, dropping that member would keep the coalition winning and save $\delta v_j > 0$, which is a profitable deviation. ∎

The formateur minimizes the *price* $\sum_{j \in C,\, j \ne i} \delta v_j$, not the seat total. Minimal winning, yes; minimum-size, only by accident.

**Proposition.** Three parties, none with a majority alone, every pair a majority. In every stationary equilibrium:

1. the formateur proposes at once to one partner, offering $\delta/3$ and keeping $1 - \delta/3$;
2. each party's value is $v_i = 1/3$;
3. each of the three two-party coalitions forms with probability exactly $1/3$.

*In words:* seat counts do nothing beyond deciding which coalitions win. The formateur takes at least two-thirds, and Riker's minimum-size coalition is no likelier than the others.

*Proof.*

1. *No delay.* Values cannot sum to more than 1, so $v_j \le 1 - v_i$. Proposing to $j$ yields $1 - \delta v_j \ge 1 - \delta + \delta v_i > \delta v_i$, which beats waiting.
2. *Equal values are consistent.* If every $v_j = 1/3$, every partner costs $\delta/3$, so the formateur is indifferent among partners. Let $\pi_{ik}$ be the probability that formateur $i$ picks $k$. Party $k$ is formateur with probability $1/3$ and is someone else's partner with probability $\tfrac13 \sum_{i \ne k} \pi_{ik}$. So $v_k = \tfrac13(1 - \tfrac{\delta}{3}) + \tfrac{\delta}{3}\cdot\tfrac13\sum_{i\ne k}\pi_{ik}$, which equals $1/3$ exactly when $\sum_{i \ne k} \pi_{ik} = 1$ for every $k$.
3. *Uniqueness.* Hülya Eraslan (*Journal of Economic Theory*, 2002) proved that stationary equilibrium payoffs in Baron–Ferejohn games with one vote per player and a quota are unique. Our game is the one-vote majority game, since every pair wins, so $v = (\tfrac13, \tfrac13, \tfrac13)$ is the only possibility. (For three parties, a two-case check confirms it.)
4. *Coalition probabilities.* Label the parties 1, 2, 3 and write $a = \pi_{12}$. The three conditions $\sum_{i\ne k}\pi_{ik} = 1$ force $\pi_{23} = \pi_{31} = a$. Coalition $\{1,2\}$ forms when 1 proposes and picks 2, or 2 proposes and picks 1: probability $\tfrac13 a + \tfrac13(1 - a) = \tfrac13$. The same holds for each pair. ∎

The [formateur premium](../reference.md#formateur-premium) is the formateur's share minus its Gamson share. Since $1 - \delta/3 \ge 2/3$, the premium is positive whenever the formateur's Gamson share is below $2/3$.

**Where the argument is weakest.** Office is modelled as a divisible unit, but ministries are lumpy and come with policy. Parties care what a ministry *does*, not just how many they hold. Michael Laver and Kenneth Shepsle's [portfolio allocation](../reference.md#portfolio-allocation) model (*Making and Breaking Governments*, 1996) starts there. Each minister sets policy in its own jurisdiction, so a cabinet is a point on a grid of party ideal points, as in [2.2](02-02-multidimensional-voting-and-chaos.md)'s structure-induced equilibrium. Roughly, a *strong party* belongs to every cabinet a majority would prefer to the one in which it holds all the key portfolios, and so can veto every alternative. Random recognition is a second weak hypothesis: real formateurs are chosen by heads of state, usually from the largest party. Drop divisibility and the formateur's surplus has nothing to be paid in. Drop random recognition and the premium accrues to a predictable party.

## Picture

![Four stacked bars splitting the Birch and Cedar coalition's portfolios. By seats, Birch gets 0.545 and Cedar 0.455. By voting weight, each gets 0.5. In the bargaining equilibrium with Birch as formateur, Birch gets 0.733 and Cedar 0.267; with Cedar as formateur, the shares reverse.](assets/05-02-fig1.svg)

Same two parties, four answers: the bargaining split depends on who proposes, not on seats.

## Worked examples

**Example 1 (clean): three parties, any two win.** Alder 45, Birch 30, Cedar 25; $\delta = 0.8$.

- Minimal winning coalitions: all three pairs (75, 70, 55 seats). Minimum-size: Birch–Cedar, 55.
- Gamson: Birch–Cedar splits $6/11 \approx 0.545$ and $5/11 \approx 0.455$; Alder–Birch $3/5$ and $2/5$; Alder–Cedar $9/14$ and $5/14$.
- Shapley–Shubik: $1/3$ each. Minimum integer weights $(1,1,1)$: Alder's extra 15 seats over Birch buy nothing.
- Bargaining: formateur keeps $1 - 0.8/3 = 11/15 \approx 0.733$; partner gets $4/15 \approx 0.267$; each party's value is $1/3$. If Birch forms with Cedar, its premium over Gamson is $11/15 - 6/11 = 31/165 \approx 0.19$. Every Gamson share here is at most $9/14 \approx 0.64 < 2/3$, so every formateur gets a premium, whatever $\delta$.
- Axelrod, with the order Alder–Birch–Cedar: Alder–Cedar has a gap and is ruled out. Riker singles out Birch–Cedar; bargaining makes all three pairs equally likely.

To see a surplus partner, take four parties in left–right order W 40, X 8, Y 12, Z 40. Minimal winning coalitions: W–Y, Y–Z (52 each) and W–Z. The minimal connected winning coalitions are Y–Z and W–X–Y (60). X is arithmetically surplus, since W–Y wins without it, but without X, W–Y has a gap.

**Example 2 (the hypothesis bites): not every pair wins.** Apex 44, and three small parties with 22, 19 and 15; $\delta = 0.8$. Apex plus any small party wins; the three smalls together win (56); no two smalls do. Minimum integer weights are $(2,1,1,1)$ with quota 3, so the three smalls are interchangeable despite their different seats. The proposition's symmetry is gone.

Guess values $v_A = 2/5$ for Apex and $v_S = 1/5$ for each small party: proportional to voting weight. Check:

- Apex as formateur buys one small at $\delta v_S = 0.16$ and keeps $0.84$.
- A small formateur can buy Apex at $\delta v_A = 0.32$ or two smalls at $2 \times 0.16 = 0.32$. It is indifferent, keeps $0.68$, and picks Apex with probability $\pi$.
- Apex's value: $v_A = \tfrac14(0.84) + \tfrac34\,\pi\,(0.32)$. Setting this to $2/5$ gives $\pi = (3+\delta)/(6\delta) = 19/24$, which is a valid probability whenever $\delta \ge 3/5$. The smalls' values then follow from $v_A + 3v_S = 1$.

So the stationary equilibrium in which the small parties behave alike prices each party by its voting weight, not its seats. Pure strategies fail at $\delta = 0.8$. If smalls always picked Apex, Apex's value would be $11/20$ and it would cost more than two smalls. If they always picked smalls, Apex would be the cheaper partner. Gamson would give the 15-seat party $15/59 \approx 0.25$ of an Apex coalition; here every small partner gets $0.16$ and every small formateur $0.68$, seats regardless. James Snyder, Michael Ting and Stephen Ansolabehere ("Legislative Bargaining under Weighted Voting", *American Economic Review*, 2005) find expected payoffs proportional to voting weight in weighted Baron–Ferejohn games, with an exception they identify. With equal recognition, as here, it holds only for $\delta \ge 3/5$.

**The evidence.** Eric Browne and Mark Franklin (*American Political Science Review*, 1973) found portfolio shares tracking coalition seat shares closely and linearly. Paul Warwick and James Druckman (*European Journal of Political Research*, 2006) weighted portfolios by expert-rated importance and found the same, which they call perhaps the strongest empirical regularity in political science and a problem for proposer models. Ansolabehere, Snyder, Aaron Strauss and Ting (*American Journal of Political Science*, 2005) re-ran the test with minimum integer weights instead of seats. They found a substantial formateur bonus; in their working-paper estimates it is a third to a half of what the closed-rule model predicts. Theory has answers on both sides. Massimo Morelli's demand-bargaining model (*APSR*, 1999) yields splits proportional to bargaining power, with no proposer bonus; Jamie Carroll and Gary Cox (*AJPS*, 2007) argue that pre-election pacts precommit to proportional splits. Which effect dominates is contested; measurement belongs to [`empirical-political-economy`](../../empirical-political-economy/syllabus.md).

## Watch out

- **You might think** a minimal winning coalition is the smallest one, but actually "minimal" means no surplus member. Minimum-size is the extra, stronger condition Riker adds; bargaining delivers the first and not the second.
- **You might think** a party with more seats has more power, but actually only the list of winning coalitions matters: Alder (45) and Cedar (25) are interchangeable in Example 1, as are Example 2's three small parties.
- **You might think** the proposition shows a formateur premium always beats Gamson, but actually it needs the formateur's Gamson share to be below $1 - \delta/3$. A big formateur with a tiny partner can get less than its seat share.

## One-liner

> Seat-counting predicts the smallest coalition and seat-proportional splits; bargaining predicts minimal winning coalitions priced by voting weight plus a formateur bonus; the data look like Gamson's law until seats are replaced by voting weights, when a bonus appears.

## Problems

**P1 (🟢)** *(Formal.)* A 100-seat parliament (quota 51): Oak 30, Pine 28, Rowan 22, Sorrel 20.

(a) List the minimal winning coalitions and find Riker's minimum-size coalition.
(b) Compute each party's Shapley–Shubik index by counting, among the 24 orderings, those in which it is pivotal.
(c) Give the Gamson split of the minimum-size coalition, and name the two parties whose power is equal despite a six-seat gap.

**P2 (🟡)** *(Formal.)* Ash 46, Elm 34, Fir 20 (quota 51), Baron–Ferejohn with equal recognition and $\delta = 0.75$.

(a) State the formateur's and the partner's shares and each party's value.
(b) For each possible coalition and each choice of formateur, compute the formateur premium over Gamson's law. Which formateur–partner pair has the smallest premium?
(c) For that pair, find the $\delta$ at which the premium is zero.

**P3 (🔴, optional)** *(Formal (a) · Exegetical (b).)* Invented news analysis, attributed to no real outlet: "In Velmora (Dorn 48, Esk 40, Fal 12 of 100 seats), the tiny Fal party joined Dorn's government and took two-fifths of the ministries with one-fifth of the coalition's seats. Coalition theory says ministries follow seats, so Dorn was outmanoeuvred."

(a) Compute the Gamson split of Dorn–Fal, the three parties' Shapley–Shubik indices, and the Baron–Ferejohn split with Dorn as formateur at $\delta = 0.9$.
(b) In 100 words or fewer: which result does the analysis assume, what does the voting-weight view say about Fal's two-fifths, and what does the outcome fail to fit under each model?

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) Pairs: Oak–Pine 58 and Oak–Rowan 52 win; Oak–Sorrel 50 and every pair without Oak lose. Triples: Pine–Rowan–Sorrel (70) wins and loses if any member leaves (50, 48, 42). Any other winning triple contains a winning pair. Minimal winning coalitions: Oak–Pine, Oak–Rowan, Pine–Rowan–Sorrel. Minimum-size: Oak–Rowan, 52 seats.

(b) A party is pivotal in an ordering when its seats first lift the running total to 51 or more. Counting:

- Oak is pivotal 10 times: 4 in second place (after Pine or Rowan) and 6 in third.
- Pine is pivotal 6 times, Rowan 6 and Sorrel 2.

Indices: Oak $10/24 = 5/12$, Pine $1/4$, Rowan $1/4$, Sorrel $1/12$. They sum to 1. Minimum integer weights $(3,2,2,1)$ with quota 5 reproduce the game.

(c) Oak $30/52 = 15/26 \approx 0.577$, Rowan $22/52 = 11/26 \approx 0.423$. Pine (28) and Rowan (22) have equal power: each completes exactly the same coalitions.

**Wrong turns:** Calling Oak–Sorrel winning (it has 50, one short). Listing Oak–Pine–Rowan as minimal winning: drop Pine and Oak–Rowan still wins.

---

**P2** *(Formal, strict.)*

(a) Every pair wins and nobody wins alone, so the proposition applies. The formateur keeps $1 - 0.75/3 = 3/4$, the partner gets $1/4$, and each value is $1/3$. The partner accepts because $1/4 = \delta v_j$.

(b) Gamson shares: Ash–Elm $23/40$ and $17/40$; Ash–Fir $23/33$ and $10/33$; Elm–Fir $17/27$ and $10/27$. Premium $= 3/4 -$ Gamson share:

| Coalition | Formateur | Premium |
|---|---|---|
| Ash–Elm | Ash | $7/40 = 0.175$ |
| Ash–Elm | Elm | $13/40 = 0.325$ |
| Ash–Fir | Ash | $7/132 \approx 0.053$ |
| Ash–Fir | Fir | $59/132 \approx 0.447$ |
| Elm–Fir | Elm | $13/108 \approx 0.120$ |
| Elm–Fir | Fir | $41/108 \approx 0.380$ |

The smallest premium is Ash as formateur with Fir as partner.

(c) Solve $1 - \delta/3 = 23/33$: $\delta = 3 \cdot 10/33 = 10/11 \approx 0.909$. Above that, Ash would get less than its Gamson share as formateur.

**Wrong turns:** Using parliament-wide seat shares (0.46) instead of coalition shares for Gamson. Giving Ash a larger bargaining share because it has more seats: the formateur keeps $1 - \delta/3$ whoever it is.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) Gamson: Dorn $48/60 = 4/5$, Fal $1/5$. Every pair wins (88, 60, 52) and no party wins alone, so the Shapley–Shubik index is $1/3$ each and the minimum integer weights are $(1,1,1)$. Baron–Ferejohn with Dorn as formateur: Dorn keeps $1 - 0.9/3 = 0.7$, Fal gets $0.3$.

**Must hit, strict (b):**

- The analysis assumes Gamson's law, seat-proportional payoffs, and treats seats as bargaining power.
- On voting weight, Fal is Dorn's equal: one of three interchangeable parties. Its two-fifths is *less* than an equal half of the coalition's voting weight, so "outmanoeuvred" does not follow.
- Misfit: the split is far above Gamson's 1/5, and above Baron–Ferejohn's 0.3 for a partner at $\delta = 0.9$ (a partner never gets more than $1/3$). If Dorn was formateur, neither model fits exactly.

**Wrong turns:** Saying Fal must have been formateur (a formateur keeps at least 2/3 in the model, not 2/5). Treating "coalition theory" as one result: Gamson's law is an empirical regularity, and the bargaining models say something else.

**Model answer:** The analysis assumes Gamson's law: ministries proportional to seats, so Fal's fair share is 1/5. But every pair of Velmora's parties is a majority, so Fal's 12 seats carry the same voting weight as Dorn's 48. Measured by voting weight, Fal's two-fifths is below an equal half. Neither model fits exactly: Gamson predicts 1/5; Baron–Ferejohn with Dorn as formateur predicts 0.3 at $\delta = 0.9$, and never more than 1/3. The outcome sits between them. "Outmanoeuvred" is a verdict only the seat-based baseline supports.

</details>

## Flashback

**From Lesson [4.6](04-06-political-budget-cycles.md) (Political budget cycles):** *(Formal (a)–(b).)* Use the lesson's competence-signaling model. A mayor is competent with prior probability $\mu = \tfrac13$; office is worth $X = 3$ to her; a competent officeholder next term is worth $\Delta = 6$ to voters; a visible pre-election repaving drive of size $e$ has a hidden welfare cost of $e$ if she is competent and $2e$ if not ($c_H = 1$, $c_L = 2$). (a) Find the range of separating drives $e_H$, the least-cost drive $e^*$, and voters' net gain from the cycle at $e^*$ compared with a ban on pre-election drives. (b) Now suppose the town is stuck in a separating equilibrium that fails the Intuitive Criterion, with $e_H$ at the top of the range. Does the ban now help voters? Find the drive size above which the ban beats the cycle, and say in one sentence what this implies for an argument about bans that cites the model.

<details>
<summary>Solution</summary>

(a) $V_L = X - \mu\Delta = 3 - 2 = 1$ and $V_H = X + (1-\mu)\Delta = 3 + 4 = 7$, so separating drives run over $e_H \in [V_L/c_L,\ V_H/c_H] = [\tfrac12,\ 7]$, and $e^* = \tfrac12$. At $e^*$ the incompetent type is indifferent: mimicking gives $3 - 2 \cdot \tfrac12 = 2$, stepping aside gives $\mu\Delta = 2$. Only the competent type drives, so the expected distortion is $\mu c_H e^* = \tfrac16$. Separation raises the chance of a competent successor from $\tfrac13$ to $\tfrac13 + \tfrac23 \cdot \tfrac13 = \tfrac59$, worth $\tfrac29 \cdot 6 = \tfrac43$. Net gain from the cycle: $\tfrac43 - \tfrac16 = \tfrac76$.

(b) Yes. At $e_H = 7$ the competent type is indifferent ($3 + 6 - 7 = 2 = \mu\Delta$), and the distortion is $\tfrac13 \cdot 7 = \tfrac73$ against the same selection gain of $\tfrac43$: the ban wins by 1. The selection gain does not depend on $e_H$, so the ban wins iff $\mu c_H e_H > (1-\mu)\mu\Delta$, that is, $e_H > (1-\mu)\Delta/c_H = 4$: for every separating drive in $(4, 7]$. A grid over $e_H$ confirms the range and the cutoff. A welfare verdict on bans drawn from the model is only as good as the equilibrium selection behind it: the lesson's comparison uses the least-cost $e^*$, which the Intuitive Criterion picks, and under pessimistic off-path beliefs the same model can favour the ban.

**Wrong turns:** Charging voters for a distortion by both types: the incompetent type plays 0 in a separating equilibrium. Letting the selection gain grow with the drive: any separating drive already reveals the type fully, so a bigger one buys no more information.

</details>

## Connections

- **Backward:** [5.1](05-01-legislative-bargaining-baron-ferejohn.md)'s divide-the-dollar game, with one vote per legislator, becomes a weighted game among parties; the proposer's advantage is the formateur premium. The pivot idea is [`grad-game-theory` 6.2](../../grad-game-theory/lessons/06-02-shapley-value.md)'s Shapley–Shubik index, and the empty core of a majority game is [6.1](../../grad-game-theory/lessons/06-01-coalitional-games-core.md)'s.
- **Forward:** [5.3](05-03-the-meltzer-richard-model.md) returns to a single policy dimension and a decisive median voter, now choosing a tax rate. [5.4](05-04-the-political-economy-of-inequality.md) asks why observed redistribution may not follow that median's choice.
- **Sideways:** the procedures (informateurs, investiture rules, minority governments) are [`political-institutions` 3.2](../../political-institutions/lessons/03-02-forming-governments-coalitions-and-minorities.md)'s. Laver–Shepsle's ministerial jurisdictions are [2.2](02-02-multidimensional-voting-and-chaos.md)'s structure-induced equilibrium moved into the cabinet. Testing Gamson against the formateur premium is a measurement problem for [`empirical-political-economy`](../../empirical-political-economy/syllabus.md).

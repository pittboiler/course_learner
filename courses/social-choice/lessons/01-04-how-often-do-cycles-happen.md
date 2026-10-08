# Social Choice · Lesson 1.4: How often do cycles happen?

> ⏱ ~15 min · Module 1: The aggregation problem · Builds on: [1.1 Profiles, rules and the majority relation](01-01-profiles-rules-and-the-majority-relation.md), [1.3 Arrow as a map](01-03-arrow-as-a-map.md) · Unlocks: [2.1 Scoring rules](02-01-scoring-rules.md), [3.3 Single-peakedness: Black and Moulin](03-03-single-peakedness-black-and-moulin.md)

## Why this matters

Arrow and Condorcet say a majority *can* cycle. Riker's case against "the will of the people" and Mackie's reply ([`political-philosophy` 5.4](../../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md)) turn on how *often* it does. This lesson computes the standard numbers, proves the large-electorate limit, and shows that every one of them is a fact about a probability model of voters, not about majority rule. It ends with what a cycle buys whoever sets the agenda.

## The idea

To ask "how often", you need a distribution over profiles. The simplest is to let each voter draw a ranking uniformly at random, independently of everyone else. That is **[impartial culture](../reference.md#impartial-culture)** (IC): electorates as dice. It is a deliberately structureless model, and structure is what prevents cycles: if most voters agree on what the issue is, their rankings fall on a line and majority rule behaves (Module 3).

Under IC a cycle needs a near three-way stalemate in which each pairwise contest is won by a different coalition. With three voters that takes luck: the three must hold the three rotations of one cyclic order. With many voters the margins become approximately Gaussian, and the chance settles at a fixed number, about 8.8 percent for three alternatives. More alternatives push it up fast.

When a cycle does occur, the order of votes decides the winner. A chair who pairs the alternatives cleverly can deliver any member of the cycle.

## The result

**Setting.** Voters $N = \{1, \dots, n\}$, alternatives $A$ with $|A| = m$, strict rankings $\succ_i$. As in [1.1](01-01-profiles-rules-and-the-majority-relation.md), $n(x,y)$ is the number of voters ranking $x$ above $y$, the [majority relation](../reference.md#majority-relation) has $x \, M \, y$ iff $n(x,y) > n(y,x)$, and a [Condorcet winner](../reference.md#condorcet-winner) beats every other alternative under $M$.

**Cultures.** *Impartial culture:* $\succ_1, \dots, \succ_n$ are independent and uniform on the $m!$ rankings, so all $(m!)^n$ profiles are equally likely. *Impartial anonymous culture* (IAC): all *anonymous* profiles, the multisets that record only how many voters hold each ranking, are equally likely. The **[cycle probability](../reference.md#cycle-probability)** literature reports $P_{m,n}$, the probability of **no Condorcet winner**. For $m = 3$ and odd $n$, $M$ is a tournament on three vertices, which is either transitive or a 3-cycle, so "no Condorcet winner" and "cycle" coincide.

**Proposition 1.** $P_{3,3} = 12/216 = 1/18$.
*In words:* about one three-person committee in eighteen has no majority winner under IC.

Example 1 derives it by a method that generalizes to more alternatives.

**Theorem ([Guilbaud's limit](../reference.md#guilbauds-limit)).** Under IC with $m = 3$, as $n \to \infty$ through odd values,
$$P_{3,n} \longrightarrow \frac14 - \frac{3}{2\pi}\arcsin\frac13 \approx 0.0877.$$
*In words:* however large an IC electorate is, the chance of a three-way cycle tends to about 8.8 percent and stays there.

G.-Th. Guilbaud (1952) gave the value. The proof uses the central limit theorem ([`prob-stat-refresher` 3.3](../../prob-stat-refresher/lessons/03-03-central-limit-theorem.md)).

*Proof.* Label the alternatives $a, b, c$.

1. For voter $i$ let $s_i = (s_i^{ab}, s_i^{bc}, s_i^{ca})$, where $s_i^{xy} = +1$ if $i$ ranks $x$ above $y$ and $-1$ otherwise. The margin vector $S_n = \sum_i s_i$ has coordinates $n(a,b) - n(b,a)$, and so on.
2. Moments. Each coordinate is $+1$ in exactly 3 of the 6 rankings, so it has mean 0 and variance 1. Any two coordinates agree in 2 of the 6 rankings, so their covariance is $(2 - 4)/6 = -1/3$.
3. With $n$ odd, there is no Condorcet winner iff all three coordinates of $S_n$ have the same sign. If all are positive, $a \, M \, b \, M \, c \, M \, a$; if all are negative, the reverse cycle. If the signs are mixed, some alternative wins both of its contests. Check one case: $S^{ab} > 0$ and $S^{bc} < 0$ say that $a$ and $c$ both beat $b$, and the sign of $S^{ca}$ then makes $c$ or $a$ the winner.
4. The $s_i$ are i.i.d. with the moments of step 2, so $S_n/\sqrt n$ converges in distribution to $Z \sim \mathcal N(0, \Sigma)$, where $\Sigma$ has 1 on the diagonal and $-1/3$ off it. The boundary of the positive orthant has probability 0 under $Z$, so $P(S_n > 0) \to P(Z > 0)$, componentwise.
5. For a centred trivariate normal with correlations $\rho_{12}, \rho_{13}, \rho_{23}$, the classical orthant formula is
$$P(Z > 0) = \frac18 + \frac{\arcsin\rho_{12} + \arcsin\rho_{13} + \arcsin\rho_{23}}{4\pi}.$$
With every $\rho = -1/3$ this is $\tfrac18 - \tfrac{3}{4\pi}\arcsin\tfrac13 \approx 0.0439$.
6. The all-negative orthant has the same probability by symmetry. Adding the two gives the limit. ∎

**More alternatives.** No closed form is used here. The script estimates the IC limits by simulating the Gaussian limit of all pairwise margins, with standard errors under 0.001:

| | $m = 3$ | $m = 4$ | $m = 5$ | $m = 6$ | $m = 10$ |
|---|---|---|---|---|---|
| $n = 3$ (exact) | 1/18 | P1 below | 4/25 | | |
| $n \to \infty$ (approx.) | 0.088 | 0.175 | 0.252 | 0.315 | 0.488 |

**Agendas.** An *amendment agenda* is an ordering $(a_1, \dots, a_m)$ of $A$. Voters vote sincerely on $a_1$ against $a_2$, the winner meets $a_3$, and so on; the last survivor wins. Take $n$ odd, so $M$ is a tournament. The **[top cycle](../reference.md#top-cycle)** $T$ is the smallest nonempty set whose every member beats every non-member. (Such sets are nested, so the smallest is unique.) If a Condorcet winner $x$ exists, $T = \{x\}$.

**Theorem ([agenda control](../reference.md#agenda-control)).** (i) Every amendment agenda elects a member of $T$. (ii) Every member of $T$ wins under some agenda.
*In words:* the chair cannot elect an alternative outside the top cycle, and can elect anything inside it.

*Proof of (i).* Let $a_j$ be the first member of $T$ on the agenda. If $j = 1$, the running winner starts in $T$. Otherwise, at step $j$ it meets a running winner outside $T$ and beats it. From then on, every challenger outside $T$ loses to the running winner, and a challenger inside $T$ that wins is itself in $T$. So the final winner is in $T$. ∎

*Proof of (ii) for a 3-cycle.* Let $x \, M \, y$, $y \, M \, z$, $z \, M \, x$. The agenda $(z, y, x)$ goes: $y$ beats $z$, then $x$ beats $y$. Rotating the labels gives agendas for $y$ and $z$. ∎

For larger $T$: $T$ is strongly connected, and every strongly connected tournament has a Hamiltonian cycle (Camion, 1959). So there is a path $y_1, \dots, y_k = x$ through $T$ on which each $y_{j+1}$ beats $y_j$. Put the alternatives outside $T$ first, then $y_1, \dots, y_k$. The verification script checks the theorem on 3,000 random tournaments with 3 to 7 alternatives.

**Where the argument is weakest.** Neither result is about real electorates. Every number above is conditional on IC, and IC is not what anyone believes voters are. A theorem of Tsetlin, Regenwetter and Grofman (2003) concerns three alternatives and very large electorates, for cultures whose own pairwise majorities are not built to cycle. For those cultures, any departure from IC lowers the limiting cycle probability; they conjecture the same for more alternatives. Drop IC and the limit can be anything from 0 (Example 2) to 1 (a culture concentrated on the three rankings of one cyclic order). The agenda theorem assumes sincere voting. Voters who see the agenda coming can vote strategically, which changes the reachable set, and that analysis belongs to [`political-economy`](../../political-economy/syllabus.md).

## Picture

![Line chart of the probability of no Condorcet winner under impartial culture with three alternatives, for odd electorates from 1 to 51. It is 0 at one voter, 0.0556 at three, 0.0694 at five, and rises steadily to 0.0861 at 51, approaching a dashed horizontal line at Guilbaud's limit of 0.0877.](assets/01-04-fig1.svg)

*Exact values by dynamic programming over the three margins. The curve rises with every odd $n$ and never crosses 0.0877.*

## Worked examples

**Example 1 (clean): $P_{3,3}$ by conditioning.** There is at most one Condorcet winner, so the events "$x$ is the Condorcet winner" are disjoint, and by the symmetry of IC
$$P_{m,n} = 1 - m \cdot P(x \text{ is the Condorcet winner}).$$
Fix $x$. Voter $i$ puts $k_i$ of the other $m - 1$ alternatives below $x$, where $k_i$ is uniform on $\{0, \dots, m-1\}$, and given $k_i$ the set $B_i$ of alternatives below $x$ is a uniformly random $k_i$-subset. With $n = 3$, $x$ is the Condorcet winner iff every $y \neq x$ lies in at least two of $B_1, B_2, B_3$.

For $m = 3$ (others $y, z$; each $k_i \in \{0, 1, 2\}$, each triple with probability $1/27$):

- Two or three voters with $k_i = 2$: they cover $y$ and $z$ twice already. That is $3 \cdot 2 + 1 = 7$ ordered triples, each succeeding with probability 1.
- One $k = 2$ and two $k = 1$: the two singletons must differ, probability $1/2$. There are 3 such orderings, contributing $3/2$.
- Every other triple has $\sum k_i < 4$, too few to cover two alternatives twice.

So $P(x \text{ wins}) = (7 + 3/2)/27 = 17/54$, and $P_{3,3} = 1 - 3 \cdot 17/54 = 1/18$.

*Cross-check by counting.* A 3-voter cycle needs the three rotations of one cyclic order, one per voter. That gives 2 orientations times $3!$ assignments, so 12 of the $6^3 = 216$ profiles.

**Example 2 (the hypothesis bites): tilt the dice.** Keep independence but let the ranking $a \succ b \succ c$ have probability $0.20$ and each other ranking $0.16$. Each pairwise contest now leans the same way: $a$ is above $b$, $b$ above $c$ and $a$ above $c$ each with probability $0.52$. The script gives (exact to $n = 51$; simulated, to about $\pm 0.0003$, beyond):

| $n$ | 3 | 51 | 101 | 1,001 | 3,001 | 10,001 |
|---|---|---|---|---|---|---|
| IC | 0.0556 | 0.0861 | 0.087 | 0.088 | 0.088 | 0.088 |
| tilted | 0.0553 | 0.0853 | 0.085 | 0.055 | 0.012 | below 0.001 |

Small committees cannot tell the two cultures apart. Large electorates can: the law of large numbers drives every margin toward its expected sign, so $a$ becomes the Condorcet winner with probability tending to 1 (P3 proves this). A 2-point lean is invisible at 51 voters and decisive at 10,000.

IAC builds in correlation of a different kind: the whole electorate's mix of rankings is drawn at once. For $m = 3$ it gives $2/56 = 1/28$ at $n = 3$ (only the two "one voter per rotation" multisets cycle), against IC's $1/18$. Its large-$n$ limit simulates to 0.0626, close to $1/16$, against IC's 0.0877. Empirical studies of ballots and surveys (Regenwetter and coauthors, *Behavioral Social Choice*, 2006) and Mackie's case studies (*Democracy Defended*, 2003) report cycles as rare in real large electorates. That fits the direction of these models, but it is evidence about cultures, not a theorem.

## Watch out

- **You might think the parity of $n$ is a detail, but actually even electorates change the answer completely.** With ties, "no Condorcet winner" also counts every profile where a tie leaves no alternative strictly beating all the others. Under IC with $m = 3$, $P_{3,2} = 2/3$ and $P_{3,4} = 5/9$, against $1/18$ at $n = 3$. Quote odd-$n$ numbers or say how ties count.
- **You might think "probability of a cycle" and "probability of no Condorcet winner" are the same, but actually they split once $m \ge 4$.** Three losers can cycle beneath a Condorcet winner. The table reports $P_{m,n}$, the probability that $T$ has at least three members.
- **You might think IC is the worst case for any culture, but actually Tsetlin, Regenwetter and Grofman's result has a hypothesis.** It covers cultures whose own majorities are not cyclic, and it is proved for three alternatives. A culture that leans cyclic makes cycles more likely than IC, and in the limit nearly certain.

## One-liner

> Under dice-roll voters a three-way majority cycle has probability 1/18 with three voters and about 8.8 percent in the limit (Guilbaud), more with more options; any real lean in the electorate drives it toward zero, and when a cycle does occur the chair can pick any member of the top cycle.

## Problems

**P1 (🟡)** *(Formal.)* Under impartial culture with $m = 4$ alternatives and $n = 3$ voters, compute the exact probability that there is no Condorcet winner. Use the conditioning method of Example 1, and show the case table.

**P2 (🟡)** *(Formal (a)–(b).)* Nine voters rank $W, X, Y, Z$:

| Voters | Ranking |
|---|---|
| 4 | X ≻ Y ≻ W ≻ Z |
| 3 | Y ≻ Z ≻ X ≻ W |
| 2 | Z ≻ X ≻ W ≻ Y |

(a) Compute all six pairwise tallies, the majority relation and the top cycle.
(b) For each alternative, give an amendment agenda (an ordering of all four) under which it wins with sincere voting, or prove that none exists.

**P3 (🔴, optional)** *(Exegetical (a) · Formal (b).)* An invented op-ed: "Mathematicians proved long ago that majority rule cycles more often the more people vote. A town meeting can reach a coherent verdict; a nation of 300 million almost certainly cannot. Big democracies have no majority will to discover."

(a) Say exactly what is true in the first sentence, under which model, and what is false in the second. 100 words or fewer.
(b) Voters are i.i.d. draws from a culture in which, for some alternative $x$ and every $y \neq x$, $q_y = P(\text{a voter ranks } x \text{ above } y) > 1/2$. Prove that $P(x \text{ is the Condorcet winner}) \to 1$ as $n \to \infty$, for fixed $m$.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

At most one Condorcet winner exists, so $P_{4,3} = 1 - 4 \cdot P(x \text{ is the Condorcet winner})$. Each $k_i$ is uniform on $\{0, 1, 2, 3\}$, so each ordered triple has probability $1/64$. Given $k_i$, $B_i$ is a uniform $k_i$-subset of the other three alternatives. We need every $y \neq x$ in at least two of the $B_i$, which requires $\sum k_i \ge 6$.

| $k$'s (any order) | ordered triples | P(success given $k$) | contribution |
|---|---|---|---|
| two or three 3s | 10 | 1 | 10 |
| 3, 2, 2 | 3 | 2/3 | 2 |
| 3, 2, 1 | 6 | 1/3 | 2 |
| 2, 2, 2 | 1 | 2/9 | 2/9 |

Here is why each conditional probability holds:

- Two voters with $k = 3$ already cover everything twice.
- For 3, 2, 2: the full set covers each $y$ once. The two 2-subsets of a 3-set cover it iff they differ, probability $2/3$.
- For 3, 2, 1: the singleton must be the element missing from the 2-set, probability $1/3$.
- For 2, 2, 2: each 2-set misses one element, and every $y$ is covered twice iff the three missed elements are distinct, probability $3!/27 = 2/9$.
- All other triples (3, 1, 1; 3, 2, 0; 2, 2, 1; and below) have $\sum k_i \le 5$.

$$P(x \text{ wins}) = \frac{10 + 2 + 2 + 2/9}{64} = \frac{128/9}{64} = \frac29,$$
$$P_{4,3} = 1 - 4 \cdot \frac29 = \frac19.$$

Brute-force enumeration agrees: 1,536 of the $24^3 = 13{,}824$ profiles have no Condorcet winner. That is double the $m = 3$ value.

**Wrong turns:** treating "$y$ is below $x$" as independent across $y$ for one voter (it is not, since the $k_i$ alternatives are drawn together); forgetting the second $k = 3$ voter when counting ordered triples (there are 9 triples with exactly two 3s, plus 1 with three).

---

**P2** *(Formal (a)–(b).)*

(a) Tallies, with the winner first:

- $X$ beats $W$ 9–0.
- $Y$ beats $W$ 7–2.
- $Z$ beats $W$ 5–4.
- $X$ beats $Y$ 6–3.
- $Z$ beats $X$ 5–4.
- $Y$ beats $Z$ 7–2.

$M$: $X \, M \, Y$, $Y \, M \, Z$, $Z \, M \, X$, and all three beat $W$. There is no Condorcet winner. The top cycle is $T = \{X, Y, Z\}$.

(b) **Accept:** any agenda that checks out vote by vote.

- $X$: $(W, Y, Z, X)$. $Y$ beats $W$, $Y$ beats $Z$, $X$ beats $Y$.
- $Y$: $(W, X, Z, Y)$. $X$ beats $W$, $Z$ beats $X$, $Y$ beats $Z$.
- $Z$: $(W, X, Y, Z)$. $X$ beats $W$, $X$ beats $Y$, $Z$ beats $X$.
- $W$: no agenda works. $W$ loses every pairwise contest. Whatever its position, it takes part in at least one vote (as $a_1$ or $a_2$ against the other, or as a challenger), and it loses the first one. This is part (i) of the theorem, since $W \notin T$.

All 24 orderings elect $X$, $Y$ and $Z$ eight times each. Note also that all nine voters rank $X$ above $W$: the cycle is among the other three.

**Wrong turns:** scoring $Z$ against $W$ as a $Z$ landslide (the four $X \succ Y \succ W \succ Z$ voters put $W$ above $Z$, so it is 5–4); claiming $W$ can win by going last (it then faces the running winner, which beats it).

---

**P3** *(Exegetical (a), strict · Formal (b).)*

**Must hit, strict (a):**

- The true part holds only under impartial culture with $m$ fixed. There, the probability of no Condorcet winner rises with odd $n$ (1/18 at 3 voters, 0.0861 at 51) but converges to a bound: Guilbaud's 0.0877 for three options, roughly 0.17 for four and 0.25 for five. It never approaches certainty.
- "Almost certainly cannot" is false under IC, and in the opposite direction under any culture with a real lean. There a large $n$ makes a Condorcet winner nearly certain (part (b), Example 2).
- The claim silently assumes that voters are structureless dice; size magnifies whatever structure the culture has.

**Wrong turns:** conceding "almost certain" because IC's probability is increasing (it is increasing but bounded); arguing from Arrow, which says cycles are possible, not frequent.

**Model answer (a):** Under impartial culture with a fixed number of options, the chance of no majority winner does rise with electorate size. It rises to a ceiling, though: about 8.8 percent for three options (Guilbaud), about 17.5 percent for four. So even that model never makes a cycle "almost certain". Real electorates are not uniform dice, and with any consistent lean the law of large numbers makes a Condorcet winner more likely, not less, as the electorate grows.

(b) Fix $y \neq x$. Voters are i.i.d., so $n(x, y) \sim \text{Bin}(n, q_y)$. By the weak law of large numbers, $n(x,y)/n \to q_y > 1/2$ in probability. So $P\big(n(x,y) \le n/2\big) \to 0$. Now
$$P(x \text{ is not the Condorcet winner}) \le \sum_{y \neq x} P\big(n(x,y) \le n/2\big).$$
This is a sum of $m - 1$ terms, each tending to 0, so the left side tends to 0. ∎

Hoeffding's inequality gives the rate: each term is at most $e^{-2n(q_y - 1/2)^2}$.

**Wrong turns:** assuming independence across the pairs $y$ (the union bound needs none); proving only that the expected margin is positive, which does not by itself bound the probability.

</details>

## Flashback

**From Lesson [1.2](01-02-mays-theorem.md) (May's theorem):** *(Formal (a)–(b).)* A seven-member club votes on a motion $x$ against the status quo $y$; each member votes for, against, or abstains. The quorum is three votes cast (for or against). With a quorum, the larger side of the votes cast wins and equal sides tie.

(a) Version V: without a quorum the vote is void and recorded as a tie. Which of May's four conditions does V satisfy? For each failure, exhibit a pair of profiles.

(b) Version S: without a quorum the motion fails and $y$ stands. Same question.

<details>
<summary>Solution</summary>

**Worked arithmetic (a):** Write profiles as in 1.2, $D \in \{-1, 0, 1\}^7$, with $n_+$ votes for and $n_-$ against.

- *Decisiveness:* every profile gets exactly one of $x$, $y$, tie; a void is recorded as a tie, which is a verdict. Holds.
- *Anonymity:* the outcome depends only on $(n_+, n_-)$. Holds.
- *Neutrality:* reversing every vote swaps $n_+$ and $n_-$ and keeps the number cast, so a void stays a tie and otherwise the result flips. Holds.
- *Positive responsiveness fails:* $D = (1, 0, 0, 0, 0, 0, 0)$ has one vote cast, so $F(D) = 0$. Member 2 votes for: $D' = (1, 1, 0, 0, 0, 0, 0)$ has $D' \ge D$, $D' \ne D$, but only two votes cast, so $F(D') = 0$, where positive responsiveness demands $x$.

So V fails exactly one condition, which May's theorem says must happen to any rule that is not simple majority.

**Worked arithmetic (b):**

- *Decisiveness, anonymity:* as in (a). Hold.
- *Neutrality fails:* $D = (1, 0, 0, 0, 0, 0, 0)$ gives $y$ (no quorum), and $-D = (-1, 0, 0, 0, 0, 0, 0)$ also gives $y$, where neutrality requires $x$.
- *Positive responsiveness fails:* $D = (1, 1, -1, 0, 0, 0, 0)$ has three votes cast and $x$ wins 2 to 1, so $F(D) = 1$. Member 3 abstains instead: $D' = (1, 1, 0, 0, 0, 0, 0)$ has $D' \ge D$, $D' \ne D$, but two votes cast, so $y$ stands. A move toward $x$ defeats $x$.

All four checks, for both versions, were run by script on the $3^7 = 2{,}187$ profiles.

**Wrong turns:** calling the quorum a failure of decisiveness; "void, recorded as a tie" is one verdict (1.2's first Watch out). Saying V fails neutrality because a void "protects the status quo": in V it is a tie, symmetric in $x$ and $y$. In (b), stopping at neutrality: the positive-responsiveness failure is easy to miss because the move toward $x$ is an opponent of $x$ abstaining.

</details>

## Connections

- **Backward:** [1.1](01-01-profiles-rules-and-the-majority-relation.md) defined $M$ and the Condorcet winner, and its tournament fact (odd $n$, strict rankings) is why step 3 of the proof works. [1.3](01-03-arrow-as-a-map.md) located the cycle as the axiom majority rule gives up; this lesson measures it. The basic 3-voter cycle and the agenda trick are first seen in [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md).
- **Forward:** [3.3](03-03-single-peakedness-black-and-moulin.md) and [3.4](03-04-single-crossing-and-value-restriction.md) give the structural reason correlated cultures cycle less: on single-peaked or single-crossing profiles the probability is exactly zero. [2.3](02-03-condorcet-methods-and-kemeny.md)'s Condorcet methods must say what to do on the profiles counted here. The same law-of-large-numbers argument as P3 is the [Condorcet jury theorem](05-01-the-condorcet-jury-theorem.md).
- **Sideways:** these are the numbers [`political-philosophy` 5.4](../../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md)'s Riker–Mackie dispute runs on; its Halden council shows a chair electing a Pareto-dominated option from a 4-member top cycle. Guilbaud's proof is the multivariate central limit theorem of [`prob-stat-refresher` 3.3](../../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) plus an orthant integral. Agenda-setter models are [`political-economy`](../../political-economy/syllabus.md)'s.

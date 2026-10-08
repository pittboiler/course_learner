# Social Choice · Lesson 6.2: Grading ballots: range voting and majority judgment

> ⏱ ~15 min · Module 6: Richer inputs: approvals, grades and utilities · Builds on: [6.1 Approval voting](06-01-approval-voting.md), [3.1 Manipulation and the first half of Gibbard–Satterthwaite](03-01-manipulation-and-strategy-proofness.md) · Unlocks: [6.3 Utilities in, possibility out](06-03-utilities-in-possibility-out.md)

## Why this matters

An approval ballot has two grades. Give voters six, from "Reject" to "Excellent", and the rule can see intensity: who is loved, who is merely tolerated. [Range voting](../reference.md#range-voting) adds the grades up. [Majority judgment](../reference.md#majority-judgment) takes the median. Michel Balinski and Rida Laraki (2007, *PNAS*; book *Majority Judgment*, MIT Press, 2010) claim that the median rule escapes the impossibility theorems. This lesson proves what each rule does under strategy and what the escape assumes.

## The idea

Picture each grade as a hand on a rope. Under the mean, every hand pulls, and the farther you pull, the more you move it. So a strategic voter pulls as far as the scale allows: top grade for the candidate she wants, bottom grade for every rival. Range voting with strategic voters becomes approval voting.

Under the median, only the middle hand matters. If your grade is already above the middle, raising it does nothing, and lowering it can only pull the result *away* from you. A single voter can move the median at most one notch, to the next grade in the sorted list. That is real protection, but it covers one voter and one candidate's grade, not the final ranking.

Both rules also assume something rankings never needed. "Good" must mean the same thing on everyone's ballot.

## The result

**Setting.** Voters $N = \{1, \dots, n\}$, candidates $A$. A grade scale $\Lambda = \{0, 1, \dots, K\}$; here $K = 5$, with words Reject, Poor, Fair, Good, Very good, Excellent. Voter $i$ gives each candidate $x$ a grade $g_i(x) \in \Lambda$. The table of all grades is the *grade sheet*.

**Range voting** elects $\arg\max_x R(x)$, where $R(x) = \sum_{i \in N} g_i(x)$. *In words:* highest total (equivalently, highest mean) wins.

**Majority judgment.** Sort $x$'s grades from highest to lowest, $r_1(x) \ge r_2(x) \ge \dots \ge r_n(x)$. The **majority grade** is

$$\alpha(x) = r_{(n+1)/2}(x) \text{ for odd } n, \qquad \alpha(x) = r_{(n+2)/2}(x) \text{ for even } n.$$

*In words:* $\alpha(x)$ is the highest grade that a strict majority of voters give $x$ or better. For even $n$ that is the lower of the two middle grades. Higher majority grade wins. For ties, delete one copy of $\alpha(x)$ from each tied candidate's grades and recompute; repeat until they differ. The sequence of grades this produces is the **majority value**, and candidates are ranked by it lexicographically. Balinski and Laraki show it separates two candidates unless they received identical sets of grades.

A rule that reports the $k$-th highest grade $r_k(x)$ for a fixed $k$ is an **order function**; the majority grade is one.

**Proposition 1 (range collapses to approval).**

- (a) Suppose voter $i$ knows the others' totals $T(x)$ and ties are broken by a fixed order. If some ballot makes $w$ win, the ballot "$K$ for $w$, $0$ for everyone else" also makes $w$ win.
- (b) Suppose instead the totals are uncertain, and her ballot matters only in near-ties between two candidates $x, y$ at the top. Let $\pi_{xy}$ be the probability per point of margin of such a near-tie, and $u_x$ her utility for $x$. To first order her ballot $b$ gains $\sum_x b_x w_x$, where $w_x = \sum_{y \ne x} \pi_{xy}(u_x - u_y)$. Her best ballot therefore gives $K$ when $w_x > 0$ and $0$ when $w_x < 0$. When all $\pi_{xy}$ are equal, she gives $K$ exactly to the candidates above her mean utility.

*In words:* knowing the count or only the odds, a strategic range voter uses only the top and bottom grades: an approval ballot.

*Proof.* (a) Let $b$ elect $w$, and let $b^*$ be the extreme ballot. For each rival $y$, the margin of $w$ over $y$ moves from $T(w) + b_w - T(y) - b_y$ to $T(w) + K - T(y)$, which is at least as large because $b_w \le K$ and $b_y \ge 0$. A positive margin stays positive, and a zero margin that the tie order resolved for $w$ still does. (b) In an $x$–$y$ near-tie her ballot shifts the margin by $b_x - b_y$ and the stake is $u_x - u_y$, so the gain is $\sum_{\{x,y\}} \pi_{xy}(b_x - b_y)(u_x - u_y)$. Each pair contributes $b_x \pi_{xy}(u_x - u_y) + b_y \pi_{xy}(u_y - u_x)$, so the sum regroups as $\sum_x b_x w_x$. It is linear in each $b_x \in [0, K]$, so each $b_x$ is maximized at an endpoint. With equal $\pi_{xy} = \pi$, $w_x = \pi m (u_x - \bar u)$, where $m = |A|$ and $\bar u$ is her mean utility. ∎

That threshold is 6.1's Proposition 4 ([approval voting](../reference.md#approval-voting)), so everything 6.1 said about thresholds and polls now applies to range voting. An honest voter who uses the middle grades simply has less say than one who exaggerates.

**Proposition 2 (Balinski and Laraki: one voter against an order function).** Fix voter $i$, candidate $x$ and $k$, with $r = r_k(x)$. Change only $g_i(x)$, and let $r'$ be the new $k$-th highest grade.

- (a) If $g_i(x) > r$, then $r' \le r$. If $g_i(x) < r$, then $r' \ge r$.
- (b) $r_{k+1}(x) \le r' \le r_{k-1}(x)$, reading $r_0 = K$ and $r_{n+1} = 0$.
- (c) If $g_i(A) > g_i(B)$ but $\alpha(A) < \alpha(B)$, voter $i$ cannot both be able to raise $\alpha(A)$ and be able to lower $\alpha(B)$.

*In words:* a voter cannot drag a candidate's grade toward her own opinion; she can move it at most to a neighbouring grade in the sorted list; and she can help her preferred candidate or hurt its rival, never both.

*Proof.* (a) Since $r$ is the $k$-th highest, at most $k - 1$ grades exceed $r$, and $g_i(x)$ is one of them. Changing it cannot add a grade above $r$, so at most $k - 1$ grades exceed $r$ afterwards, and $r' \le r$. The other case is symmetric, counting grades below $r$. (b) Originally at least $k + 1$ grades are $\ge r_{k+1}$. One change leaves at least $k$, so $r' \ge r_{k+1}$. Symmetrically, at least $n - k + 2$ grades are $\le r_{k-1}$, so at least $n - k + 1$ remain, and $r' \le r_{k-1}$. (c) By (a), raising $\alpha(A)$ requires $g_i(A) \le \alpha(A)$, and lowering $\alpha(B)$ requires $g_i(B) \ge \alpha(B)$. Both together give $g_i(A) \le \alpha(A) < \alpha(B) \le g_i(B)$, contradicting $g_i(A) > g_i(B)$. ∎

Balinski and Laraki call (a) *strategy-proof-in-grading* and (c) *partially strategy-proof-in-ranking*. They prove the order functions are the only grade aggregators with property (a), and that no grade aggregator is fully [strategy-proof](../reference.md#strategy-proofness) in ranking. They also state that order functions are strategy-proof in grading for groups.

**Where the argument is weakest.** Two hypotheses carry the escape. First, Proposition 2 concerns one voter and the majority *grade*. The tie-break runs on the whole majority value, and coalitions can split the two jobs in (c). The problems below exploit both gaps. Second, and more basic, the grades must form a **common language**: voters must mean the same thing by "Good", and must grade on an absolute scale rather than relative to the menu. Each candidate's majority value depends only on its own grades, so adding or dropping a candidate never reorders the rest. That is the sense in which majority judgment escapes [Arrow's theorem](../reference.md#arrows-theorem). It is gone if voters grade relatively. Suppose each voter's grades are a fixed, strictly decreasing function of her ranking positions, best always Excellent, worst always Reject (possible with up to six candidates). Then the composite is a non-dictatorial, Pareto-respecting rule on rankings with three or more candidates, so by Arrow it violates [IIA](../reference.md#independence-of-irrelevant-alternatives). Whether real voters grade absolutely is an empirical question.

## Picture

![Grade sheet of Example 1, seven voters, three candidates, on a scale from Reject 0 to Excellent 5. Candidate A: three grades of 5, two of 1, two of 0; total 17, mean 2.43, majority grade Poor. Candidate B: three grades of 1, two of 2, two of 4; total 15, mean 2.14, majority grade Fair. Candidate C: three grades of 0, two of 2, two of 4; total 12, mean 1.71, majority grade Fair.](assets/06-02-fig1.svg)

The mean (blue) rewards A's three ecstatic fans; the median (red) asks what a majority will grant.

## Worked examples

**Example 1 (clean): the mean and the median disagree.** Seven voters grade A, B, C:

| Voters | A | B | C | Implied ranking |
|---|---|---|---|---|
| 3 | 5 | 1 | 0 | A ≻ B ≻ C |
| 2 | 0 | 2 | 4 | C ≻ B ≻ A |
| 2 | 1 | 4 | 2 | B ≻ C ≻ A |

*Range:* A $15 + 0 + 2 = 17$, B $3 + 4 + 8 = 15$, C $0 + 8 + 4 = 12$. **A wins.**

*Majority judgment:* sorted, A is 5, 5, 5, 1, 1, 0, 0, so $\alpha(A) = r_4 = 1$ (Poor). B is 4, 4, 2, 2, 1, 1, 1 and C is 4, 4, 2, 2, 0, 0, 0, so both have $\alpha = 2$ (Fair). Delete one 2 from each: B's fourth-highest of the remaining six (the lower middle) is 1, C's is 0. **B wins.**

On the implied rankings, B beats A 4–3 and C 5–2, so B is the [Condorcet winner](../reference.md#condorcet-winner). A loses to both B and C 4–3: range has elected the Condorcet loser on the strength of three fives.

*Exaggeration.* Take one C-voter, grades (0, 2, 4). The others' totals are A 17, B 13, C 8. No ballot of hers elects C, since C reaches at most 13. Grading B 5 instead of 2, with either (0, 5, 0) or (0, 5, 5), gives B 18 and beats A's 17. Her best response uses only 0 and 5, as Proposition 1 predicts. The (0, 5, 5) version is literally an approval ballot for {B, C}.

**Example 2 (the hypothesis bites): one voter moves majority judgment.** Same sheet, same C-voter, now under majority judgment, where B wins. She lowers B from 2 to 1. B's grades become 4, 4, 2, 1, 1, 1, 1, so $\alpha(B) = 1$, while $\alpha(C)$ stays 2. **C wins**, her favourite, with a one-notch lie.

Proposition 2 is not violated: her grade for B *equalled* $\alpha(B)$, so (a) did not apply, and she moved it one place, to $r_5 = 1$, as (b) allows. As (c) requires, she could not also have raised C, because her grade for C, 4, is above $\alpha(C) = 2$. Under range her best lie got her second choice; under majority judgment a smaller lie got her first. A rule that bounds how far one voter can move a grade does not thereby make manipulation rarer or less profitable.

## Watch out

- **You might think majority judgment escapes Gibbard–Satterthwaite.** The [Gibbard–Satterthwaite theorem](../reference.md#gibbard-satterthwaite-theorem) is stated for rules on rankings, but Gibbard's 1973 version covers any game form, including grade ballots. Balinski and Laraki's own theorem agrees. What majority judgment offers is Proposition 2's bounded, one-sided influence.
- **You might think Proposition 2 protects the outcome.** Its hypotheses are one voter and the majority grade. A voter below the median can still move the tie-break (P2), and two voters can each do one half of (c) (P3).
- **You might think the grade numbers are just labels.** Renumber Example 1's words as 0, 2, 4, 5, 6, 7, keeping their order. Range totals become A 25, B 26, C 20, and **B** now wins. The majority words are unchanged (Poor, Fair, Fair), since the $k$-th highest grade commutes with any order-preserving relabelling. Majority judgment needs a shared *order* of words; range voting also needs shared *distances* between them. This is the distinction [6.3](06-03-utilities-in-possibility-out.md) makes between level and unit comparability. The median has its own cost: with A graded 3, 3, 3, 1, 1 and B graded 4, 4, 2, 2, 2, majority judgment elects A, although four of five voters grade B higher.

## One-liner

> The mean gives every voter a lever, so strategic voters pull it all the way and range becomes approval; the median gives each voter a single notch, which bounds one voter's say over one grade but not the ranking, and both rules assume everyone grades in the same language.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** Five voters grade D, E, F from 0 to 5:

| Voter | D | E | F |
|---|---|---|---|
| 1 | 0 | 3 | 2 |
| 2 | 5 | 0 | 2 |
| 3 | 0 | 3 | 1 |
| 4 | 0 | 1 | 4 |
| 5 | 5 | 2 | 0 |

(a) Find the range winner and the majority-judgment winner, showing the tie-break.
(b) Find the Condorcet winner on the rankings the grades imply.

**P2 (🟡) *(Formal (a)–(b).)*** Same sheet. Ties under range are broken alphabetically.

(a) Voter 1 ranks E ≻ F ≻ D. Find a range ballot that elects E, and show that every such ballot gives E the top grade.
(b) Voter 4 ranks F ≻ E ≻ D. Under majority judgment, show she can neither raise F's majority grade nor lower E's, then find a change to one of her grades that elects F.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** Five voters grade A and B: voter 1 (1, 0), voter 2 (0, 4), voter 3 (5, 4), voter 4 (4, 4), voter 5 (2, 3).

(a) Find the majority-judgment winner. Voters 1 and 3 prefer A. Show that neither alone can make A win, and find a joint change of one grade each that does.
(b) An invented campaign memo says: "Under majority judgment a voter whose grade is above a candidate's majority grade can only pull it down. So no voter, and no organized bloc, can gain by misgrading." In 100 words or fewer, say what in the memo is true and where it fails.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) Range: D $0 + 5 + 0 + 0 + 5 = 10$, E $3 + 0 + 3 + 1 + 2 = 9$, F $2 + 2 + 1 + 4 + 0 = 9$. **Range winner D.**

Majority judgment, sorted high to low: D 5, 5, 0, 0, 0 gives $\alpha = 0$; E 3, 3, 2, 1, 0 gives $\alpha = 2$; F 4, 2, 2, 1, 0 gives $\alpha = 2$. E and F tie. Delete a 2 from each: E 3, 3, 1, 0 and F 4, 2, 1, 0; with four grades the majority grade is $r_3$, which is 1 for both. Delete the 1s: E 3, 3, 0 gives 3; F 4, 2, 0 gives 2. **MJ winner E**, majority value (2, 1, 3, …) against F's (2, 1, 2, …).

(b) Implied rankings: E ≻ F ≻ D, D ≻ F ≻ E, E ≻ F ≻ D, F ≻ E ≻ D, D ≻ E ≻ F. E beats D 3–2 (voters 1, 3, 4) and F 3–2 (voters 1, 3, 5). **E is the Condorcet winner.** D, which range elects, is ranked last by three of five voters.

**Wrong turns:** using the upper middle grade for the four-grade lists (3 for E, 2 for F), which happens to give E here but is not the rule. Forgetting to delete only *one* copy of the shared grade.

---

**P2** *(Formal (a)–(b).)*

(a) Without voter 1 the totals are D 10, E 6, F 7. The ballot (D 0, E 5, F 0) gives D 10, E 11, F 7: **E wins**. E's total is at most $6 + g$ and D's at least 10, so E needs $6 + g > 10$ (a tie at 10 goes to D alphabetically), hence $g = 5$, together with D 0 (D at 11 would win the tie) and F at most 4 (F at 11 loses the tie to E). So every winning ballot uses the top grade for E: exaggeration is forced. Her sincere 3 for E is worth nothing at the margin.

(b) F's grades sort 4, 2, 2, 1, 0, so $\alpha(F) = 2$, and her grade 4 is above it: by Proposition 2(a) she cannot raise it. E's sort 3, 3, 2, 1, 0, so $\alpha(E) = 2$, and her grade 1 is below it, so she cannot lower it. Now lower her E grade from 1 to 0. E becomes 3, 3, 2, 0, 0: majority grade still 2, but after deleting the 2 the lower middle of 3, 3, 0, 0 is 0. F after deleting its 2 is 4, 2, 1, 0, with lower middle 1. **F wins** on the tie-break, majority value (2, 1, …) against (2, 0, …). This is the only one-grade change that elects F.

**Wrong turns:** concluding from Proposition 2 that she is powerless. Proposition 2 protects the majority grade, not the majority value that breaks ties.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) A sorts 5, 4, 2, 1, 0, so $\alpha(A) = 2$. B sorts 4, 4, 4, 3, 0, so $\alpha(B) = 4$. **B wins.**

*Voter 3 alone.* Her A grade, 5, is above 2, so she cannot raise $\alpha(A)$ (Proposition 2(a)). She can lower $\alpha(B)$ only to $r_4(B) = 3$ (Proposition 2(b)), still above 2. B wins.

*Voter 1 alone.* Her B grade, 0, is below 4, so she cannot lower $\alpha(B)$. Raising her A grade lifts $\alpha(A)$ at most to $r_2(A) = 4$, a tie. Then the tie-break: with her A grade at 4 or 5, A's next majority grade is 2, while B's (from 4, 4, 3, 0) is 3. B wins.

*Jointly.* Voter 1 raises A to 4 and voter 3 lowers B to 0. A: 5, 4, 4, 2, 0, $\alpha = 4$. B: 4, 4, 3, 0, 0, $\alpha = 3$. **A wins.** (Any A grade of 4 or 5 from voter 1 with a B grade of 3 or less from voter 3 works.)

**Wrong turns:** asking voter 3 to raise A. She is already above A's median, which is exactly why the bloc needs voter 1.

**Must hit, strict (b):**

- True: Proposition 2(a). A voter above a candidate's majority grade cannot raise it, and Balinski and Laraki state the same for groups, for a single candidate's grade.
- False: the step from grades to outcomes. No grade rule is strategy-proof in ranking. A voter *at* the median can move it (Example 2), a voter below it can move the tie-break (P2(b)), and the "help or hurt, not both" limit binds one voter, so a bloc splits the jobs (P3(a)).

**Model answer (b):** The first sentence is Balinski and Laraki's strategy-proofness in grading, and it holds even for groups as far as one candidate's grade goes. The conclusion does not follow, because the outcome is a ranking. A voter whose grade equals the majority grade can lower it a notch, and a voter below it can shift the tie-break. One voter can help her favourite or hurt its rival but not both, while a bloc can do both: in (a), voter 1 raises A and voter 3 lowers B.

</details>

## Flashback

**From Lesson [5.3](05-03-epistemic-readings-of-aggregation.md) (Epistemic readings of aggregation):** *(Formal (a)–(b).)* Fifteen voters rank A, B, C: 6: A ≻ B ≻ C, 5: B ≻ C ≻ A, 4: C ≻ A ≻ B. Each judgment is independent across voters and pairs.

(a) Give the three pairwise tallies and the maximum-likelihood ranking under Condorcet's noise model with a common competence $p \in (\tfrac12, 1)$. At $p = 2/3$, find its likelihood ratio against the runner-up.
(b) Now every voter judges the pair $\{A, C\}$ correctly with probability $4/5$, and each of the other two pairs with probability $2/3$. Write the likelihood of a ranking $R$ as in the proof of 5.3's Theorem 1, find the maximum-likelihood ranking and its likelihood ratio against A ≻ B ≻ C, and say in one sentence which majority it overrules and why.

<details>
<summary>Solution</summary>

(a) A beats B 10–5 (the A ≻ B ≻ C and C ≻ A ≻ B voters), B beats C 11–4 (the A ≻ B ≻ C and B ≻ C ≻ A voters), C beats A 9–6 (the B ≻ C ≻ A and C ≻ A ≻ B voters): a cycle with margins 5, 7 and 3.

Agreement scores: A ≻ B ≻ C $10 + 11 + 6 = 27$; B ≻ C ≻ A $11 + 5 + 9 = 25$; C ≻ A ≻ B $9 + 10 + 4 = 23$; B ≻ A ≻ C 22; A ≻ C ≻ B 20; C ≻ B ≻ A 18. The likelihood is proportional to $\varphi^{a(R)}$ with $\varphi > 1$, so for every common $p$ the maximum-likelihood ranking is Kemeny's, **A ≻ B ≻ C**, which overrules the weakest majority, C over A. At $p = 2/3$, $\varphi = 2$ and the ratio against B ≻ C ≻ A is $2^{27 - 25} = 4$.

(b) Let $k_{xy}(R)$ be the number of voters agreeing with $R$ on the pair $\{x, y\}$. Then

$$\begin{aligned}
L(R) &= \prod_{\{x,y\}} p_{xy}^{k_{xy}}(1 - p_{xy})^{15 - k_{xy}}\\
&= \Big(\prod_{\{x,y\}} (1 - p_{xy})^{15}\Big) \prod_{\{x,y\}} \varphi_{xy}^{k_{xy}}, \quad \varphi_{xy} = \frac{p_{xy}}{1 - p_{xy}}.
\end{aligned}$$

The first factor is the same for every $R$. With $\varphi_{AC} = \frac{4/5}{1/5} = 4 = 2^2$ and $\varphi_{AB} = \varphi_{BC} = 2$, $L(R) \propto 2^{w(R)}$, where $w = k_{AB} + k_{BC} + 2k_{AC}$:

- B ≻ C ≻ A: $11 + 5 + 2 \cdot 9 = 34$
- A ≻ B ≻ C: $10 + 11 + 2 \cdot 6 = 33$
- C ≻ A ≻ B: $10 + 4 + 2 \cdot 9 = 32$
- B ≻ A ≻ C 28, C ≻ B ≻ A 27, A ≻ C ≻ B 26.

The maximum-likelihood ranking is **B ≻ C ≻ A**, with likelihood ratio $2^{34 - 33} = 2$ against A ≻ B ≻ C. It overrules A over B (10–5) instead of C over A (9–6): a majority on the pair voters judge more reliably is stronger evidence, so reversing C over A now costs $3 \times 2 = 6$ units of $\log 2$, more than the 5 it costs to reverse A over B. This is the weighted Kemeny rule that 5.3's Watch out mentions.

**Wrong turns:** weighting each agreement by $p$ (or by the ratio $\frac{4/5}{2/3}$) instead of by $\log \varphi$; only $\log 4 = 2 \log 2$ gives the right exchange rate. Assuming the answer must stay Kemeny's because 5.3's Theorem 1 holds "for every $p$": it holds for one $p$ common to all pairs.

</details>

## Connections

- **Backward:** Proposition 1 turns range voting into [6.1](06-01-approval-voting.md)'s approval voting, mean-utility threshold included. Proposition 2 is a bounded, partial cousin of the strategy-proofness in [3.1](03-01-manipulation-and-strategy-proofness.md), and its "at most one notch" argument is the same order-statistic reasoning that made the median rule strategy-proof in [3.3](03-03-single-peakedness-black-and-moulin.md). The common-language condition is where grading meets [1.3](01-03-arrow-as-a-map.md)'s map: it changes the input rather than dropping an axiom.
- **Forward:** [6.3](06-03-utilities-in-possibility-out.md) makes the comparability assumption explicit. The shared order of words that majority judgment needs is level comparability; the shared distances that range needs are unit comparability.
- **Sideways:** a grade of "Good" that means the same for every voter is an interpersonal comparison, the subject of [`decision-theory` 5.2](../../decision-theory/lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md). [3.1](03-01-manipulation-and-strategy-proofness.md) notes that Gibbard proved his theorem for general game forms, which is why grade ballots do not escape it; the median-voter argument in [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md) is Proposition 2(a) for peaks on a line.

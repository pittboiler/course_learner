# Political Economy · Lesson 2.5: Strategic voting and Duverger's law

> ⏱ ~15 min · Module 2: Electoral competition · Builds on: [1.2 Turnout and the paradox of voting](01-02-turnout-and-the-paradox-of-voting.md), [2.4 Valence and citizen-candidates](02-04-valence-and-citizen-candidates.md) · Unlocks: [2.6 Electoral rules compared formally](02-06-electoral-rules-compared-formally.md)

## Why this matters

Maurice Duverger (*Les partis politiques*, 1951) said plurality rule in single-member districts favours two parties, by arithmetic and because voters abandon candidates expected to lose. [`political-institutions` 2.3](../../political-institutions/lessons/02-03-duvergers-law-observed.md) reports that regularity and its exceptions. This lesson derives the voters' half as an equilibrium. The derivation says *when* two candidates must emerge, shows that *which* two is not fixed by preferences, and finds the one configuration in which a third survives.

## The idea

Your vote changes a plurality result only if it makes or breaks a tie for first. If everyone expects the race to be between A and B, a tie involving C is far less likely, and a ballot for C is almost surely wasted. So C's supporters vote for the lesser evil of A and B. Desertion shrinks C's share, confirming the expectation: polls showing A and B ahead are self-fulfilling.

Expect A and C to lead instead, and B's supporters desert. Both are equilibria of the same electorate. Preferences decide the winner *inside* a pair; expectations decide the pair.

## The model

**Setting.** One seat, plurality rule, candidates $A, B, C$, a large electorate whose distribution of types is common knowledge. A type is a utility vector $u = (u_A, u_B, u_C)$. With strict rankings we normalize first choice to 1, last to 0 and the middle to $v \in (0,1)$. Everyone votes (turnout is [1.2](01-02-turnout-and-the-paradox-of-voting.md)'s question) and cares only who wins this election. $S_j$ is candidate $j$'s expected vote share.

**Pivot probabilities** (Roger Myerson and Robert Weber, "A Theory of Voting Equilibria," *American Political Science Review*, 1993). Each voter holds $p_{jk} > 0$, the perceived probability that $j$ and $k$ tie for first. These are the three-candidate version of [1.2](01-02-turnout-and-the-paradox-of-voting.md)'s [pivot probability](../reference.md#pivot-probability). Myerson and Weber assume that in a close $j$–$k$ race a tie, a one-vote lead and a one-vote deficit are about equally likely, and that three-way ties are negligible.

**Lemma 1 ([prospective rating](../reference.md#prospective-rating)).** A ballot for $j$ has expected gain

$$R_j = \sum_{k \ne j} p_{jk}\,(u_j - u_k),$$

and under plurality a voter maximizes expected utility by voting for a candidate with the highest $R_j$.

*In words:* a vote is worth, summed over the races it could swing, how likely each race is times how much you care.

*Proof.* (1) A ballot for $j$ adds one to $j$'s count only, so it changes the winner only when $j$ is in a close race for first with some $k$. (2) By the equal-likelihood assumption, that event moves the winner from $k$ to $j$ with probability $p_{jk}$, a utility change of $u_j - u_k$. (3) Three-way ties are negligible, so these events add up, giving $R_j$. ∎

**Ordering condition.** Voters believe the polls. If $S_j < S_h$, then for any third candidate $k$, $p_{jk} \le \varepsilon\, p_{hk}$. A **voting equilibrium** is a vote distribution such that, for every $\varepsilon > 0$, some pivot probabilities satisfying the ordering condition make every type's ballot maximize $R_j$. As $\varepsilon \to 0$, rescale $p$ to sum to 1. Myerson and Weber show that the limit, $q$, puts weight only on races between the top two candidates, or among candidates tied for the top.

*In words:* a race involving someone who is behind is infinitely less likely than the same race with someone ahead.

Large electorates of independent ballots behave this way. With expected shares 45/35/20, the chance that A and C tie for first is 0.0025 times the chance that A and B tie when there are 100 other voters, and $3 \times 10^{-22}$ times it with 1,000.

**Theorem 1 ([Duverger's law](../reference.md#duvergers-law) as an equilibrium).** Suppose rankings are strict. In any voting equilibrium with $S_A \ge S_B > S_C$, $S_C = 0$: every voter votes for whichever of $A$ and $B$ she prefers.

*In words:* if the third-place candidate is strictly behind the second, nobody votes for her.

*Proof.*

1. $S_C < S_B$ and $S_C < S_A$, so the ordering condition gives $q_{AC} = q_{BC} = 0$ and $q_{AB} = 1$.
2. At $q$: $R_A = u_A - u_B$, $R_B = u_B - u_A$, and $R_C = 0$.
3. Rankings are strict, so $u_A \ne u_B$ and $\max(R_A, R_B) = |u_A - u_B| > 0 = R_C$.
4. $R$ is continuous in $p$, so the strict inequalities in step 3 hold for every rescaled $p$ near $q$, that is, for $\varepsilon$ small. Every voter casts a ballot for her preferred member of $\{A, B\}$, and $S_C = 0$. ∎

**Proposition 2 (multiplicity).** For each pair $\{j, k\}$, "everyone votes for whichever of $j$ and $k$ she prefers" is a voting equilibrium, provided both get some votes.

*Proof.* The third candidate's share is 0, below both. Choose positive $p$ with $p_{jk} = 1$ and every race involving the third candidate of order $\varepsilon^2$ or smaller, ordered to match the shares. Step 2 of Theorem 1 then gives each voter a strict best response that reproduces the assumed votes. ∎

So there are three [Duvergerian equilibria](../reference.md#duvergerian-equilibrium), as Thomas Palfrey ("A Mathematical Proof of Duverger's Law," in Peter Ordeshook, ed., *Models of Strategic Choice in Politics*, 1989) had already noted. In each, the winner is the head-to-head majority winner of the expected pair, so a [Condorcet winner](../../social-choice/lessons/01-01-profiles-rules-and-the-majority-relation.md) left out of the pair loses. This is [strategic voting](../reference.md#strategic-voting): plurality is manipulable ([`social-choice` 3.1](../../social-choice/lessons/03-01-manipulation-and-strategy-proofness.md)), and here the manipulation is coordinated.

**The escape hatch.** Theorem 1 needs $S_B > S_C$. If $S_B = S_C < S_A$, only $q_{BC}$ is forced to zero, and $\lambda = q_{AB} \in [0, 1]$ (with $q_{AC} = 1 - \lambda$) is pinned by nothing. A [non-Duvergerian equilibrium](../reference.md#non-duvergerian-equilibrium) can then keep three candidates alive: the opposition splits and the leader wins. Myerson and Weber exhibit one and show it survives small changes in the electorate, because $\lambda$ adjusts. In Palfrey's fully specified model, where each ballot is an independent draw, the multinomial fixes the pivot odds, and three-candidate equilibria survive only in knife-edge cases. Mark Fey ("Stability and Coordination in Duverger's Law," *APSR*, 1997) shows that they are unstable once voters update on polls: any drift sends the electorate to a Duvergerian equilibrium.

**The [M plus 1 rule](../reference.md#m-plus-one-rule)** (Gary Cox, *Making Votes Count*, 1997). The argument generalizes. In a district electing $M$ members, the decisive race is the one for the last seat, and supporters of candidates out of it desert. So at most $M + 1$ candidates or lists are viable. Under a majority runoff, $M$ is the number of first-round candidates who advance, so up to three are viable in the first round. Cox stresses that $M + 1$ is an upper bound, not a prediction, and that it needs assumptions about voters. Here they are visible: instrumental motives, shared accurate expectations, and races that might be close.

**Where the argument is weakest.** At the ordering condition: everyone reads the same accurate polls. Without it the result goes. If every pivot probability is equal, a voter's rating of her first choice beats that of her second by $3p(1 - v) > 0$, so everyone votes sincerely and nobody deserts. Even with it, Theorem 1 does not say which pair forms; focal points outside the model do (past results, party labels, polls, elites who coordinate before voters do). Voters building a party for next time, or expressing support, have payoffs $R_j$ omits.

## Picture

![Line chart of the cutoff above which a voter who ranks C first, A second and B last votes for A instead of C, against the number of other voters from 30 to 3,000 on a log scale. With expected shares 45, 35 and 20 percent the cutoff falls from 0.26 to essentially zero by 200 voters. With shares 40, 32 and 28 it falls from 0.75 to zero by about 1,500 voters. With shares 40, 30 and 30, B and C tied for second, it levels off near 0.68, just above a dashed line at 2/3.](assets/02-05-fig1.svg)

*Exact plurality count, independent ballots, coin-flip ties. When C is strictly third, even a voter who barely prefers A to B deserts once the electorate is large. When C is tied for second, a cutoff survives at any size: 2/3 by the Myerson–Weber score, near 0.68 in the exact count, whose one-vote margins are not quite symmetric.*

## Worked examples

**Example 1 (clean): the centre squeezed.** Candidates L (left), M (centre) and R (right):

| Share | Ranking |
|---|---|
| 30 | L ≻ M ≻ R |
| 12 | M ≻ L ≻ R |
| 20 | M ≻ R ≻ L |
| 38 | R ≻ M ≻ L |

Sincere votes give L 30, M 32, R 38: R wins. Head to head, M beats L 70–30 and R 62–38 (the Condorcet winner), and R beats L 58–42.

- **Pair {L, M}:** R's 38 desert to M. M 70, L 30. **M wins.**
- **Pair {M, R}:** L's 30 desert to M. M 62, R 38. **M wins.**
- **Pair {L, R}:** M's 12 go to L and its 20 go to R. R 58, L 42. **R wins.**

Check one best response. In {L, R}, an M ≻ L ≻ R voter has $q_{LR} = 1$, so $R_L = v - 0 = v > 0$ while $R_M = 0$. She votes L for every $v$. The third equilibrium shuts out the Condorcet winner and elects the sincere winner. An exact count with 1,500 voters and a 3 percent tremble confirms every best response in all three equilibria.

**Example 2 (the hypothesis bites): a divided opposition.**

| Share | Ranking | Share | Ranking |
|---|---|---|---|
| 22 | A ≻ B ≻ C | 12 | B ≻ A ≻ C |
| 18 | A ≻ C ≻ B | 18 | C ≻ B ≻ A |
| 18 | B ≻ C ≻ A | 12 | C ≻ A ≻ B |

Within each type, $v$ is uniform on $(0,1)$. Try $S_A > S_B = S_C$ with $\lambda = \tfrac12$. For a B ≻ A ≻ C voter,

$$R_B = \tfrac12(1 - v), \qquad R_A = \tfrac12(v - 1) + \tfrac12 v,$$

so she votes A if and only if $2v - 1 > 1 - v$, that is $v > \tfrac23$. C ≻ A ≻ B voters do the same by symmetry. A B ≻ C ≻ A voter has $R_B = \tfrac12$ against $R_C = \tfrac12 v$, so she stays with B, and A's own supporters stay with A. Shares:

$$S_A = 40 + \tfrac13(12 + 12) = 48, \qquad S_B = S_C = 18 + \tfrac23 \cdot 12 = 26.$$

The assumed tie is reproduced. **A wins with three candidates alive**: Theorem 1's hypothesis $S_B > S_C$ fails, and so does its conclusion.

Move one point, so that B ≻ C ≻ A has 19 and C ≻ B ≻ A has 17. In the Myerson–Weber model the equilibrium survives: $\lambda$ falls to about 0.488, a few B ≻ C ≻ A voters drift to C, and the shares are again about 48/26/26. In Palfrey's model the pivot odds cannot adjust; in Fey's, polls break the tie. The same electorate also has three Duvergerian equilibria: A beats B or C 52–48, and the pair {B, C} elects B 52–48 over the Condorcet winner A.

## Watch out

- **You might think** strategic voting means abandoning *small* parties, but actually it means abandoning parties *expected to be out of the decisive race*. In Example 1's {L, R} equilibrium the deserted party is the centre, the Condorcet winner.
- **You might think** Theorem 1 proves that plurality yields two candidates, but actually it needs a strict gap between second and third. With a tie for second, three candidates can survive in equilibrium (Example 2). Whether such equilibria matter turns on stability (Fey) and on which model of pivot probabilities you adopt. This is the hypothesis people drop.
- **You might think** Duvergerian equilibrium predicts which two parties survive, but actually every pair with support is an equilibrium. The pair is left to expectations, and linkage across districts ([`political-institutions` 2.3](../../political-institutions/lessons/02-03-duvergers-law-observed.md)) is a further step.

## One-liner

> Expected standings make races involving third place infinitely unlikely, so a third candidate's voters desert to the front-runners. Any pair can be the front-runners, and only a tie for second keeps a third candidate alive.

## Problems

**P1 (🟢)** *(Formal.)* Four groups rank candidates X, Y, Z:

| Share | Ranking |
|---|---|
| 40 | X ≻ Z ≻ Y |
| 25 | Y ≻ Z ≻ X |
| 20 | Z ≻ Y ≻ X |
| 15 | Z ≻ X ≻ Y |

(a) Find the sincere plurality winner and all three head-to-head results.
(b) List the three Duvergerian equilibria, with vote shares and winners.
(c) In the equilibrium with pair {X, Y}, show from prospective ratings that a Z ≻ X ≻ Y voter votes X for every $v \in (0,1)$.
(d) Prove that no Duvergerian equilibrium, in any electorate with strict rankings, elects a Condorcet loser.

**P2 (🟡)** *(Formal.)* Same model; within each type $v$ is uniform on $(0,1)$:

| Share | Ranking | Share | Ranking |
|---|---|---|---|
| 17 | A ≻ B ≻ C | 12 | B ≻ A ≻ C |
| 16 | A ≻ C ≻ B | 24 | C ≻ B ≻ A |
| 22 | B ≻ C ≻ A | 9 | C ≻ A ≻ B |

Look for an equilibrium with $S_A > S_B = S_C$, $q_{BC} = 0$, $q_{AB} = \lambda$ and $q_{AC} = 1 - \lambda$.
(a) Show that a B ≻ A ≻ C voter votes A if and only if $v > 2\lambda/(1+\lambda)$.
(b) Take as given that at $\lambda = \tfrac12$ the C ≻ A ≻ B cutoff is also $\tfrac23$, and that voters ranking B and C in their top two vote sincerely. Show that $\lambda = \tfrac12$ supports a non-Duvergerian equilibrium. Give the shares and the winner.
(c) Compare the winner with the head-to-head results, and say what this shows that P1(d) rules out for Duvergerian equilibria.

**P3 (🟡)** *(Exegetical.)* An invented op-ed: "Under proportional representation every vote helps elect someone, so strategic voting becomes impossible. Switch our five-member districts to PR and no voter will ever again have a reason to vote for anyone but her favourite." In 100 words or fewer, name the result the op-ed contradicts, say what it predicts for these districts, and say what the op-ed gets partly right.

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) Sincere: X 40, Z 35, Y 25. **X wins.** Head to head: X beats Y 55–45 (40 + 15). Z beats X 60–40 (25 + 20 + 15). Z beats Y 75–25 (40 + 20 + 15). Z is the Condorcet winner, Y the Condorcet loser.

(b) Everyone votes for her preferred member of the pair:

- {X, Y}: X 55, Y 45. **X wins.**
- {X, Z}: Z 60, X 40. **Z wins.**
- {Y, Z}: Z 75, Y 25. **Z wins.**

The first equilibrium shuts out the Condorcet winner Z, who has 35 percent of first preferences.

(c) In the {X, Y} equilibrium, $S_Z = 0$ is below both, so $q_{XY} = 1$ and $q_{XZ} = q_{YZ} = 0$. With $u_Z = 1$, $u_X = v$, $u_Y = 0$: $R_X = q_{XY}(v - 0) = v$, $R_Y = -v$, $R_Z = 0$. Since $v > 0$, $R_X > R_Z$. By continuity this holds for small $\varepsilon$, so she votes X.

(d) In a Duvergerian equilibrium on $\{j, k\}$, every voter votes for her preferred member of the pair (Theorem 1 or Proposition 2). The winner therefore wins the head-to-head majority vote between $j$ and $k$. A Condorcet loser loses every head-to-head vote, so it cannot be the winner in any pair it belongs to, and it receives no votes in a pair it does not belong to. ∎

**Wrong turns:** In (b), giving Z's voters to their first choice: in {X, Y}, Z's supporters vote X or Y. In (d), proving only that the Condorcet *winner* wins. That is false, as {X, Y} shows.

---

**P2** *(Formal, strict.)*

(a) $u_B = 1$, $u_A = v$, $u_C = 0$. Then $R_B = \lambda(1 - v) + q_{BC}(1) = \lambda(1 - v)$ and $R_A = \lambda(v - 1) + (1 - \lambda)v$. $R_A > R_B$ if and only if $v(2\lambda + 1 - \lambda) > 2\lambda$, that is $v > 2\lambda/(1 + \lambda)$. ∎

(b) At $\lambda = \tfrac12$ both cutoffs are $\tfrac23$, so one third of the B ≻ A ≻ C and C ≻ A ≻ B voters desert to A.

$$S_A = 17 + 16 + \tfrac13(12 + 9) = 40,$$
$$S_B = 22 + \tfrac23 \cdot 12 = 30, \qquad S_C = 24 + \tfrac23 \cdot 9 = 30.$$

The assumed ordering $S_A > S_B = S_C$ is reproduced, so this is an equilibrium. **A wins**, with all three candidates receiving votes. It is the only $\lambda$ that works: $S_B$ rises in $\lambda$ and $S_C$ falls, so they are equal at exactly one value.

(c) Head to head: B beats A 58–42, C beats A 55–45, and B beats C 51–49. A is the **Condorcet loser**, yet it wins the non-Duvergerian equilibrium. P1(d) showed that no Duvergerian equilibrium can do this. A split opposition lets the candidate a majority ranks last win, which coordination on any pair would prevent.

**Wrong turns:** Forgetting that B ≻ C ≻ A voters could desert to C. At $\lambda = \tfrac12$ their rating comparison is $\tfrac12$ against $\tfrac12 v$, so they stay, but at $\lambda < \tfrac12$ some would move. Concluding that A is popular because it leads: its lead comes from deserters, and it loses every head-to-head vote.

---

**P3** *(Exegetical, strict.)*

**Must hit, strict:**

- The op-ed contradicts Cox's $M + 1$ rule: in a district electing $M$ members, strategic desertion still operates, on the race for the last seat.
- For five-member districts, at most six lists are viable. Supporters of a list with no chance at the fifth seat have the same wasted-vote reason to desert, and legal thresholds sharpen it.
- Partly right: the bound loosens as $M$ grows. Concentration is weaker and the last-seat race is harder to forecast, so strategic voting is less frequent and less consequential. It is not impossible.

**Wrong turns:** Saying PR wastes no votes at all. Treating the mechanical effect (seats from votes) as if it were the psychological one (votes from expectations).

**Model answer:** The op-ed contradicts Cox's $M + 1$ rule. With five seats per district the decisive race is for the fifth seat, so at most six lists stay viable, and supporters of a list that cannot win it have the same wasted-vote reason to desert as third-party voters under plurality. A legal threshold adds another such cliff. What the op-ed gets partly right is that larger districts loosen the bound and make the last-seat race harder to forecast, so strategic voting is weaker and rarer. It is not impossible.

</details>

## Flashback

**From Lesson [2.3](02-03-probabilistic-voting.md) (Probabilistic voting):** *(Formal (a)–(c).)* A city race turns on one number, the share $q \in [0, 1]$ of a bond spent on transit. Three groups have quadratic utility $u_g(q) = -(q - x_g)^2$:

| Group | Share $n_g$ | Ideal point $x_g$ | Density $\phi_g$ |
|---|---|---|---|
| Homeowners | 0.3 | 0.2 | 0.4 |
| Renters | 0.4 | 0.3 | 0.3 |
| Commuters | 0.3 | 0.9 | 0.5 |

Ideological biases and the popularity shock are as in the lesson, candidates maximize their win probability, and interiority holds.

(a) Show that the equilibrium platform $q^*$ is a weighted mean of the ideal points. Compute it and compare it with the median ideal point.

(b) A runs on $q^*$ and B on the median ideal point. At $\delta = 0$, find A's share in each group and A's total vote share. Which groups does A lose?

(c) In one sentence: if all three densities were equal, where would the candidates converge, and is that the median?

<details>
<summary>Solution</summary>

(a) Both candidates maximize $W(q) = -\sum_g n_g\phi_g (q - x_g)^2$, which is strictly concave. With weights $w_g = n_g\phi_g$, the first-order condition $\sum_g w_g (q - x_g) = 0$ gives

$$q^* = \frac{\sum_g w_g x_g}{\sum_g w_g}.$$

Here $w = (0.12, 0.12, 0.15)$ with sum $0.39$, and $\sum_g w_g x_g = 0.024 + 0.036 + 0.135 = 0.195$, so $q^* = \mathbf{0.5}$. Cumulative shares are 0.3 and 0.7, so the median ideal point is the renters' **0.3**. Both candidates converge on 0.5, pulled toward the commuters, the densest group. A grid over $[0, 1]$ confirms the maximizer.

(b) $\Delta_g = u_g(0.5) - u_g(0.3)$ and A's share in group $g$ is $\tfrac12 + \phi_g\Delta_g$:

- Homeowners: $\Delta = -0.09 + 0.01 = -0.08$, share $0.5 - 0.032 = 0.468$.
- Renters: $\Delta = -0.04$, share $0.488$.
- Commuters: $\Delta = -0.16 + 0.36 = 0.20$, share $0.600$.

Total: $0.3(0.468) + 0.4(0.488) + 0.3(0.600) = \mathbf{0.5156}$. Check: $W(q) = W(q^*) - 0.39(q - q^*)^2$, so $\pi_A = \tfrac12 + 0.39(0.2)^2 = 0.5156$. A loses the homeowners and the renters, 70 percent of the electorate, and still wins: its narrow losses among homeowners and renters cost fewer votes than its wide win among the commuters gains. (Every $|\Delta_g|$ on $[0,1]$ is at most $0.81 \le 1/(2\phi_g)$, so the groups stay interior.)

(c) With equal densities $w_g \propto n_g$, so $q^* = \sum_g n_g x_g = 0.06 + 0.12 + 0.27 = 0.45$, the population **mean**, not the median 0.3: smooth noise with quadratic utility replaces the median voter by the average voter.

**Wrong turns:** Expecting convergence to the median because the policy is one-dimensional: that is 2.1's deterministic voting, not this model. Weighting ideal points by $\phi_g$ alone, which drops the group sizes and gives about 0.517. Judging the race by groups won rather than votes.

</details>

## Connections

- **Backward:** the pivot probability of [1.2](01-02-turnout-and-the-paradox-of-voting.md), now one for each pair of candidates. [2.4](02-04-valence-and-citizen-candidates.md) made the number of candidates an equilibrium of entry; this lesson makes it an equilibrium of voting. The best responses are those of a Bayesian game ([`grad-game-theory` 4.1](../../grad-game-theory/lessons/04-01-bayesian-games-bayes-nash.md)). Plurality's manipulability is [`social-choice` 3.1](../../social-choice/lessons/03-01-manipulation-and-strategy-proofness.md)'s.
- **Forward:** [2.6](02-06-electoral-rules-compared-formally.md) asks how the rule changes what candidates *promise*, taking the number of serious competitors from here. The threshold logic returns in [3.1](03-01-free-riding-and-threshold-games.md), where coordination on one of several equilibria is again the whole problem.
- **Sideways:** the observed regularity, wasted votes and party linkage are [`political-institutions` 2.3](../../political-institutions/lessons/02-03-duvergers-law-observed.md)'s, and magnitude and thresholds are its [2.2](../../political-institutions/lessons/02-02-district-magnitude-and-thresholds.md)'s. How much strategic voting actually occurs, and how to identify it, belongs to [`empirical-political-economy`](../../empirical-political-economy/syllabus.md).

# Social Choice · Lesson 2.3: Condorcet methods and Kemeny

> ⏱ ~15 min · Module 2: Voting rules and their axioms · Builds on: [1.1 Profiles, rules and the majority relation](01-01-profiles-rules-and-the-majority-relation.md), [2.2 Consistency and Young's characterization](02-02-consistency-and-youngs-characterization.md) · Unlocks: [2.4 Monotonicity and participation](02-04-monotonicity-and-participation.md), [5.3 Epistemic readings of aggregation](05-03-epistemic-readings-of-aggregation.md)

## Why this matters

[2.1](02-01-scoring-rules.md) showed that every scoring rule can pass over a Condorcet winner, and [2.2](02-02-consistency-and-youngs-characterization.md) showed the price of insisting on one: no Condorcet-consistent choice rule is consistent. Suppose you pay that price. A Condorcet winner, when it exists, settles the election, so the only real question is what to do on a cycle. This lesson gives three answers, shows they disagree on a 13-voter profile, and singles out the one, Kemeny's, that has both an axiomatic characterization and a statistical meaning.

## The idea

A majority cycle is a set of pairwise verdicts that no ranking can obey all at once ([1.4](01-04-how-often-do-cycles-happen.md) says how often that happens). Any social ranking must therefore overrule some majorities. The rules differ in which ones.

- **Copeland** counts head-to-head wins, like a round-robin league table. A 7–6 win counts the same as 13–0.
- **Maximin** judges each candidate by its worst contest: how many voters back it against its toughest opponent.
- **Kemeny** looks for the ranking that agrees with the voters on as many (voter, pair) judgments as possible. Equivalently, it overrules the cheapest set of majorities, where overruling a majority costs its margin.

The third has a second reading. If each voter is a noisy witness to a true ranking, Kemeny's ranking is the one that best explains what the witnesses said.

## The result

**Setting.** Voters $N = \{1, \dots, n\}$, alternatives $A$ with $|A| = m \ge 3$, a profile $\mathbf P = (\succ_1, \dots, \succ_n)$ of strict rankings. As in [1.1](01-01-profiles-rules-and-the-majority-relation.md), $n(x,y)$ counts voters ranking $x$ above $y$, and $x \, M \, y$ (the [majority relation](../reference.md#majority-relation)) means $n(x,y) > n(y,x)$. Write the **margin** $\mu(x,y) = n(x,y) - n(y,x)$.

**[Copeland](../reference.md#copeland)** (A. H. Copeland, 1951): $c(x) = \#\{y : x \, M \, y\} - \#\{y : y \, M \, x\}$; the winners maximize $c$. *In words:* wins minus losses.

**[Maximin](../reference.md#maximin)** (also called Simpson's rule or Simpson–Kramer): $s(x) = \min_{y \ne x} n(x,y)$; the winners maximize $s$. *In words:* a candidate is as strong as its weakest head-to-head.

**[Kendall tau distance](../reference.md#kendall-tau-distance)**: $d_K(\succ, R)$ is the number of pairs that rankings $\succ$ and $R$ order differently. **[Kemeny's rule](../reference.md#kemeny-rule)** (John Kemeny, 1959) scores each ranking $R$ of $A$ by

$$K(R) = \sum_{x \, R \, y} n(x,y) = n\tbinom{m}{2} - \sum_{i=1}^{n} d_K(\succ_i, R)$$

and returns the set of rankings with the highest score. *In words:* Kemeny's ranking agrees with the voters on the most pairs, equivalently sits at the least total distance from the ballots. (Each voter-pair either agrees with $R$ or doesn't; that gives the identity.) Its output is a set of rankings, so it is a **preference function**, not a social welfare function in Arrow's sense.

**Proposition 1 (margins form).** For every ranking $R$,

$$K(R) = \sum_{\{x,y\}} \max\big(n(x,y),\, n(y,x)\big) \;-\! \sum_{x M y,\ y R x} \mu(x,y).$$

*In words:* start from the score of obeying every majority, then pay each overruled majority's margin.

*Proof.* (1) For each pair, $R$ collects $n$ of whichever alternative it puts higher. (2) If $R$ agrees with the majority, or the pair is tied, that is the max. (3) If $x \, M \, y$ but $R$ puts $y$ higher, it collects $n(y,x) = n(x,y) - \mu(x,y)$. Sum over pairs. ∎

*Corollary.* If $M$ is itself a strict ranking (no ties, no cycles), it is the unique Kemeny ranking: every other ranking overrules some majority with positive margin.

**Proposition 2 (Copeland ties on four).** With $m = 4$, no pairwise ties and no Condorcet winner, at least two candidates share the top Copeland score. *Proof.* Six pairs give six wins in total. With no Condorcet winner, nobody has 3. If only one candidate had 2, the total would be at most $2 + 1 + 1 + 1 = 5 < 6$. ∎ *In words:* on four candidates, Copeland ties whenever there is a cycle at the top.

**[Young–Levenglick theorem](../reference.md#young-levenglick-theorem)** (H. P. Young and A. Levenglick, 1978, *SIAM J. Appl. Math.*). Call a preference function $F$:

- *neutral* if relabelling the alternatives relabels the output;
- *[consistent](../reference.md#consistency)* if, for disjoint electorates with $F(\mathbf P_1) \cap F(\mathbf P_2) \ne \varnothing$, the combined electorate gets $F(\mathbf P_1 + \mathbf P_2) = F(\mathbf P_1) \cap F(\mathbf P_2)$;
- *Condorcet* if (i) whenever $x \, M \, y$, no ranking in $F(\mathbf P)$ puts $y$ immediately above $x$, and (ii) whenever $x$ and $y$ tie, a ranking with $y$ immediately above $x$ is in $F(\mathbf P)$ exactly when the same ranking with the two swapped is (as paraphrased by William Zwicker).

Then Kemeny's rule is the **only** neutral, consistent, Condorcet preference function. *In words:* Kemeny is to Condorcet methods what scoring rules are to [Young's 1975 theorem](02-02-consistency-and-youngs-characterization.md): the one rule the axioms leave.

The existence half is short. Neutrality is clear. Consistency: $K$ is additive over electorates, so if some ranking maximizes both $K_1$ and $K_2$, the maximum of $K_1 + K_2$ is $\max K_1 + \max K_2$, attained exactly where both are. Condorcet (i) is a swap argument you will run in P2. Uniqueness is the hard part and is cited.

**Proposition 3 ([Kemeny as maximum likelihood](../reference.md#kemeny-as-maximum-likelihood); Young 1988, *APSR*).** Suppose there is a true ranking $R$, and each voter independently orders each pair as $R$ does with probability $p$, $\tfrac12 < p < 1$, conditioned on producing a ranking. Then $\Pr(\succ_i \mid R) = \varphi^{-d_K(\succ_i, R)}/Z$ with $\varphi = p/(1-p) > 1$ (Mallows' model). Kemeny's rankings are exactly the maximum-likelihood estimates of $R$.

*Proof.* (1) $Z = \sum_{\succ} \varphi^{-d_K(\succ, R)}$ does not depend on $R$: relabelling alternatives maps rankings to rankings and preserves $d_K$. (2) By independence, $\log \Pr(\mathbf P \mid R) = -n \log Z - \log\varphi \sum_i d_K(\succ_i, R)$. (3) Substituting the identity above, this equals $\log\varphi \cdot K(R)$ plus a constant. (4) $\log \varphi > 0$, so maximizing likelihood is maximizing $K$. ∎ *In words:* if voters are equally reliable, independent witnesses, Kemeny's ranking is the likeliest truth. Young argued that Condorcet's *Essai* (1785) had reached this answer in rough form; [5.3](05-03-epistemic-readings-of-aggregation.md) takes up the reading. (MLE itself: [`prob-stat-refresher` 4.1](../../prob-stat-refresher/lessons/04-01-estimation-and-mle.md).)

**Where the argument is weakest.** Proposition 3 needs a fact of the matter, independence, and one $p$ for every voter and every pair. Voters who read the same newspaper make correlated errors, the likelihood no longer factorizes, and Kemeny is no longer the MLE ([5.2](05-02-when-the-jury-theorem-fails.md) runs that failure for juries). If voters report preferences rather than judgments, there is no truth to estimate, and Kemeny rests on Young–Levenglick alone, whose consistency axiom is weaker than it looks (Example 2).

## Picture

![Majority tournament on four candidates from the 13-voter example. Arrows: C to D 8 to 5, D to A 9 to 4, A to B 9 to 4, B to C 9 to 4 drawn in red, and diagonals C to A 8 to 5 and D to B 9 to 4. The red arrow B over C is the only majority the Kemeny ranking C, D, A, B overrules, at a cost of 5 from a maximum score of 52.](assets/02-03-fig1.svg)

Two cycles, $A \to B \to C \to A$ and $B \to C \to D \to B$, share one arrow. Kemeny breaks both by overruling that arrow.

## Worked examples

**Example 1 (clean): three Condorcet methods, two winners.** Thirteen voters: 5: D ≻ A ≻ B ≻ C, 4: B ≻ C ≻ D ≻ A, 4: C ≻ A ≻ D ≻ B. The majorities and margins:

| Majority | A over B | B over C | C over A | C over D | D over A | D over B |
|---|---|---|---|---|---|---|
| Votes | 9–4 | 9–4 | 8–5 | 8–5 | 9–4 | 9–4 |
| Margin | 5 | 5 | 3 | 3 | 5 | 5 |

No Condorcet winner: each candidate loses at least once.

- *Copeland.* C beats A and D, loses to B: $c(C) = 1$. D beats A and B, loses to C: $c(D) = 1$. A and B score $-1$. Tie between C and D, as Proposition 2 promised.
- *Maximin.* Worst contests: A gets 4 (against D), B gets 4 (against A and D), C gets 4 (against B), D gets 5 (against C). **D wins.**
- *Kemeny.* The ceiling is $9+8+9+9+9+8 = 52$. Every ranking overrules an arrow of each cycle. Overruling B over C alone costs 5; otherwise you need one arrow from $\{A \to B, C \to A\}$ and one from $\{C \to D, D \to B\}$, at least $3 + 3 = 6$. The only ranking whose sole reversal is B over C is C ≻ D ≻ A ≻ B, scoring $52 - 5 = 47$; the runner-up D ≻ A ≻ B ≻ C overrules C over A and C over D and scores 46. **Kemeny ranks C first.**

Maximin picks D because D's worst defeat is narrow (5–8). Kemeny picks C because overruling the one majority B over C (margin 5) is cheaper than overruling C's two narrow wins over A and D ($3 + 3$). (Plurality and Borda both pick D here.)

**Example 2 (where the hypothesis bites): consistency is about rankings.** Electorate $E_1$: 2: A ≻ B ≻ C, 2: B ≻ C ≻ A, 2: C ≻ A ≻ B. Electorate $E_2$: 1: A ≻ C ≻ B, 2: B ≻ A ≻ C.

- $E_1$ is a symmetric cycle; Kemeny returns the three cyclic rankings A ≻ B ≻ C, B ≻ C ≻ A, C ≻ A ≻ B (score 10 each). Top candidates: {A, B, C}.
- $E_2$ has Condorcet winner B; Kemeny returns B ≻ A ≻ C alone (score 7). Top: B.
- The union has 9 voters: A beats B 5–4 and C 5–4, B beats C 6–3. The majority relation is the ranking A ≻ B ≻ C, so by the Corollary it is the unique Kemeny ranking. Top: **A**.

Read Kemeny as a choice rule ("elect the top of a Kemeny ranking") and consistency fails: the two electorates' winner sets meet in {B}, yet the union elects A. That is 2.2's theorem at work. Read it as Young and Levenglick do, as a preference function, and nothing fails: the two *sets of rankings* do not intersect, so consistency makes no demand. The theorem's consistency is real but weaker than the choice-rule version.

## Watch out

- **You might think the top of a Kemeny ranking inherits Kemeny's consistency.** It doesn't (Example 2). Young–Levenglick is a theorem about preference functions; drop that hypothesis and you are back under 2.2's impossibility.
- **You might think the MLE ranking names the likeliest winner.** It names the likeliest *ranking*. The candidate with the highest total probability of being best, summed over all rankings, is a different estimate; Young (1988) argued that for $p$ close to $\tfrac12$ that question leads to Borda, not Kemeny.
- **You might think Copeland usually picks a winner.** On four candidates it ties whenever there is no Condorcet winner (Proposition 2), and it never looks at margins: in Example 1, Copeland ranks D alongside C even though D's loss is narrower.

## One-liner

> On a cycle every ranking overrules someone; Kemeny overrules the fewest voter-pair judgments, which makes it the unique neutral, consistent Condorcet preference function and the maximum-likelihood ranking for independent, equally reliable voters.

## Problems

**P1 (🟢) *(Formal.)*** Seven voters: 3: D ≻ B ≻ C ≻ A, 2: B ≻ A ≻ C ≻ D, 2: C ≻ A ≻ D ≻ B. Find the Copeland winner set, the maximin winner, and the Kemeny ranking, and prove the Kemeny ranking is unique without listing all 24 rankings.

**P2 (🟡) *(Formal (a)–(b).)*** (a) Prove that if $x$ is a Condorcet winner, every Kemeny ranking puts $x$ first, even if the majority relation cycles among the other alternatives. (b) Adapt your argument to show every Kemeny ranking puts a Condorcet loser last.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** An invented campaign memo says: "Kemeny is just Borda with better branding: both average the voters' rankings into a consensus." (a) Compute the Borda scores (3, 2, 1, 0) for the P1 profile and compare the Borda ranking with the Kemeny ranking. (b) In 100 words or fewer, say what the memo gets right and what it gets wrong.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

Pairwise counts: B over A 5–2, B over C 5–2, C over A 5–2, D over B 5–2 (margins 3); A over D 4–3, C over D 4–3 (margins 1). No Condorcet winner.

Copeland: B beats A and C, loses to D: $+1$. C beats A and D, loses to B: $+1$. A beats D only: $-1$. D beats B only: $-1$. Winner set **{B, C}** (Proposition 2 predicted a tie).

Maximin: worst contests A 2, B 2 (against D), C 2 (against B), D 3 (against A and C). **D wins.**

Kemeny: ceiling $5+5+5+5+4+4 = 28$. Two cycles: D → B → C → D and D → B → A → D. Every ranking overrules an arrow of each. Overruling D over B costs 3. Otherwise it needs one of {B over C, C over D} and one of {B over A, A over D}; the cheapest choice is C over D plus A over D, cost $1 + 1 = 2$, and every other choice costs at least 4. So the minimum penalty is 2, achieved only by reversing exactly those two arrows, which forces D above A, B, C with B ≻ C ≻ A below: **D ≻ B ≻ C ≻ A, score 26**, unique. Check by distances: the three ballot types are at distance 0, 4, 4 from it, so $K = 7 \cdot 6 - (0 + 2 \cdot 4 + 2 \cdot 4) = 26$.

D, outside Copeland's winner set, tops Kemeny and maximin: both its defeats are 3–4.

**Wrong turns:** taking a Copeland winner as the Kemeny top; here the Kemeny top is outside Copeland's winner set. Claiming uniqueness from "26 is the highest I found" instead of from the penalty bound. Reading maximin as "fewest defeats": that is Copeland's question, and here A, B and C each have a worst contest of 2.

---

**P2** *(Formal (a)–(b).)*

(a) Suppose $R$ is a Kemeny ranking with $x$ not first. Let $y$ be the alternative immediately above $x$ in $R$, and let $R'$ swap them. Because $x$ and $y$ are adjacent, every other pair keeps its order, so

$$K(R') - K(R) = n(x,y) - n(y,x) = \mu(x,y) > 0,$$

since $x$ beats $y$. Then $R$ was not a maximizer, a contradiction. Nothing about the other pairs was used, so cycles among them do not matter. ∎

(b) If $z$ is a Condorcet loser and $R$ does not put it last, let $y$ be immediately below $z$. Swapping raises $K$ by $\mu(y,z) > 0$. ∎ (This is Young–Levenglick's condition (i) applied twice.)

**Wrong turns:** swapping $x$ with the top alternative when they are not adjacent; that reverses every pair involving the alternatives in between, and the change in $K$ is no longer one margin. Arguing "$R$ overrules a majority, so it is not optimal": on a cycle every ranking overrules some majority, so you need an improving move, not a violation.

---

**P3** *(Formal (a) · Exegetical (b), strict.)*

(a) Borda: A $0 + 4 + 4 = 8$; B $6 + 6 + 0 = 12$; C $3 + 2 + 6 = 11$; D $9 + 0 + 2 = 11$. Borda ranking B ≻ {C, D} ≻ A (C and D tied); Kemeny ranking D ≻ B ≻ C ≻ A. Different winners, B against D. (Check by 2.1: B's Borda score is $n(B,A) + n(B,C) + n(B,D) = 5 + 5 + 2 = 12$.)

**Must hit, strict (b):**

- Right: both read only the pairwise table $n(x,y)$; Borda's score is a row sum (2.1).
- Wrong: Borda ranks by average position, a mean; Kemeny minimizes total Kendall distance to the ballots, a median in ranking space, chosen jointly over all pairs.
- Consequence: Kemeny always ranks a Condorcet winner first (P2) and Borda need not (2.1); they can elect different candidates, as in (a).

**Wrong turns:** saying Kemeny ignores intensity while Borda uses it; both use the same counts. Saying they differ because Kemeny is consistent and Borda is not; Borda is consistent as a choice rule, Kemeny only as a preference function.

**Model answer (b):** The memo is right that both rules read nothing but the pairwise counts: a Borda score is the sum of a candidate's pairwise tallies. It is wrong that both "average". Borda orders candidates by mean position, so a big win can offset a loss. Kemeny picks the ranking at least total Kendall distance from the ballots, a median, which never overrules a Condorcet winner. On the P1 profile Borda elects B and Kemeny ranks D first.

</details>

## Flashback

**From Lesson [2.1](02-01-scoring-rules.md) (Scoring rules):** *(Formal (a)–(b).)* Eleven voters rank A, B, C, D, but you see only the pairwise tallies, written $n(x,y)$–$n(y,x)$ with $x$ the row:

| | B | C | D |
|---|---|---|---|
| **A** | 5–6 | 2–9 | 2–9 |
| **B** | | 8–3 | 6–5 |
| **C** | | | 9–2 |

(a) Without the ballots, compute every Borda $(3, 2, 1, 0)$ score and name the Borda winner.
(b) Name the Condorcet winner and the Condorcet loser, and check each against the mean Borda score used in the proof of 2.1's Corollary. Two sentences for (b).

<details>
<summary>Solution</summary>

(a) By 2.1's Theorem 1, $B(x) = \sum_{y \ne x} n(x,y)$. For the pairs where $x$ is the column, read the second number.

- A: $5 + 2 + 2 = 9$
- B: $6 + 8 + 6 = 20$
- C: $9 + 3 + 9 = 21$
- D: $9 + 5 + 2 = 16$

Total $66 = 11 \times 6$, as it must be. **C wins**, by one point.

(b) B beats A 6–5, C 8–3 and D 6–5, so **B is the Condorcet winner**; its 20 is above the mean $n(m-1)/2 = 11 \cdot 3 / 2 = 16.5$, as the mirror of the Corollary requires, but C's 21 is higher still. A loses all three contests (5–6, 2–9, 2–9), so **A is the Condorcet loser**, and its 9 is below 16.5, so Borda cannot elect it. C's two 9–2 routs outweigh its 3–8 loss to B: the mechanism of 2.1's Example 2.

**Wrong turns:** reading the first number for every pair, which credits D with $2 + 6 + 9$ instead of $9 + 5 + 2$. Concluding that B, being above the mean, must win: 2.1's argument shows only that a Condorcet winner is never ranked last.

</details>

## Connections

- **Backward:** [1.1](01-01-profiles-rules-and-the-majority-relation.md)'s majority relation is the input to all three rules; the basic cycle is [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md)'s. [2.1](02-01-scoring-rules.md)'s Borda score is a row sum of the same table Kemeny optimizes over. Young–Levenglick is the Condorcet-side twin of [2.2](02-02-consistency-and-youngs-characterization.md)'s Young theorem.
- **Forward:** [2.4](02-04-monotonicity-and-participation.md) shows Moulin's no-show theorem catches every Condorcet-consistent rule, these three included, once there are four or more alternatives and enough voters. [3.1](03-01-manipulation-and-strategy-proofness.md) manipulates them. [5.1](05-01-the-condorcet-jury-theorem.md)–[5.3](05-03-epistemic-readings-of-aggregation.md) develop Proposition 3's truth-tracking reading and its failures.
- **Sideways:** Proposition 3 is ordinary maximum likelihood ([`prob-stat-refresher` 4.1](../../prob-stat-refresher/lessons/04-01-estimation-and-mle.md)) with Kendall distance playing squared error's role. Finding the cheapest set of majorities to overrule is a weighted feedback-arc-set problem, computationally hard in general (Bartholdi, Tovey and Trick, 1989); the [syllabus](../syllabus.md) leaves complexity out.

# Social Choice · Lesson 2.4: Monotonicity and participation

> ⏱ ~15 min · Module 2: Voting rules and their axioms · Builds on: [2.1 Scoring rules](02-01-scoring-rules.md), [2.3 Condorcet methods and Kemeny](02-03-condorcet-methods-and-kemeny.md) · Unlocks: [3.1 Manipulation and the first half of Gibbard–Satterthwaite](03-01-manipulation-and-strategy-proofness.md)

## Why this matters

Two demands look too weak to need stating: more support for the winner should not make it lose, and casting a sincere ballot should not get you a worse result than staying home. Instant runoff, the ranked-ballot count taught in [`political-institutions` 1.2](../../political-institutions/lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), fails both, and that lesson left the construction to this one. Condorcet methods keep the first demand and, by Moulin's theorem, must give up the second once there are four candidates. Scoring rules keep both and pay elsewhere ([2.1](02-01-scoring-rules.md)). These two axioms sort Module 2's rules into three camps; picking a rule means picking which failure to accept.

## The idea

Instant runoff (IRV) is a sequence of eliminations that ends in a two-way majority contest. Who reaches the final depends on who goes out first, and that depends on the first-preference totals of the *losers*. Extra first preferences for the leader must come from somewhere. If they come from voters whose top choice was B, then B shrinks, B goes out instead of C, and C may be exactly the candidate who beats the leader head to head. The leader did not lose support; it lost its convenient opponent.

Turning out pulls the same lever. A few added ballots can lift a weak candidate just enough to survive a round, knocking out someone whose transfers would have saved the newcomers' preferred finalist.

A scoring rule has no such lever. Each ballot adds points to each candidate regardless of every other ballot, and there is no sequence for a ballot to reroute. The proofs below make that contrast exact.

## The result

**Setting.** Alternatives $A$, $|A| = m$. A profile $\mathbf P$ lists strict rankings, and its size $n$ may vary. A [social choice function](../reference.md#social-choice-function) $f$ returns one winner for every profile of every size, breaking ties by a fixed order of $A$ (it is *resolute*). For a ballot $\succ$, write $\mathbf P + \succ$ for $\mathbf P$ with that ballot added.

**[Monotonicity](../reference.md#monotonicity).** If $f(\mathbf P) = x$ and $\mathbf P'$ differs from $\mathbf P$ only in that some voters move $x$ up their rankings, each leaving the relative order of the other alternatives unchanged, then $f(\mathbf P') = x$.
*In words:* raising the winner can't make it lose.

**[Participation](../reference.md#participation).** For every profile $\mathbf P$ and every ballot $\succ$, either $f(\mathbf P + \succ) = f(\mathbf P)$ or $f(\mathbf P + \succ) \succ f(\mathbf P)$.
*In words:* by her own ranking, a voter never does strictly worse by voting than by abstaining.

A violation of participation is a **[no-show paradox](../reference.md#no-show-paradox)**. Adding $k$ identical ballots one at a time and applying participation at each step shows that a group casting the same ballot can't be hurt either; so a group failure refutes participation.

**[Instant runoff](../reference.md#instant-runoff).** While no remaining candidate has a majority of first preferences, eliminate the one with the fewest and pass its ballots to their next remaining choice. With three candidates IRV coincides with plurality with runoff (the top two advance to a majority vote), since eliminating the last of three leaves the top two. Every three-candidate counterexample below hits both rules.

**Proposition 1.** For every $m \ge 3$, IRV and plurality with runoff violate monotonicity and participation.

*Proof.* Example 1 exhibits a monotonicity failure with three candidates; P3's solution exhibits a participation failure. For $m > 3$, add candidates that every voter ranks below the original three. They have no first preferences and receive no transfers, so both rules discard them and the three-candidate count runs exactly as before. ∎

**Proposition 2.** Every [scoring rule](../reference.md#scoring-rule) with a fixed tie-break order satisfies participation.

*Proof.* Let $s_1 \ge \dots \ge s_m$ be the scoring vector, $S(z)$ and $S'(z)$ the scores of $z$ in $\mathbf P$ and $\mathbf P + \succ$, and $w = f(\mathbf P)$. Take any $y$ with $w \succ y$ on the added ballot.

1. The ballot gives the candidate in position $k$ exactly $s_k$ points. Since $w$ sits above $y$ and $s$ is non-increasing, $S'(w) - S(w) \ge S'(y) - S(y)$.
2. If $S(w) > S(y)$, step 1 gives $S'(w) > S'(y)$, so $y$ does not win.
3. If $S(w) = S(y)$, then $w$ precedes $y$ in the tie order, because $w$ won. Step 1 gives $S'(w) \ge S'(y)$, and a tie still goes to $w$, so $y$ does not win.
4. Hence the new winner is $w$ or a candidate the ballot ranks above $w$. ∎

*In words:* a ballot gives the candidates it ranks higher at least as many points as those it ranks lower, and nothing else moves.

**[Moulin's no-show theorem](../reference.md#moulins-no-show-theorem)** (Hervé Moulin, "Condorcet's principle implies the no show paradox," *Journal of Economic Theory*, 1988). Let $f$ be a resolute social choice function on variable electorates that is *Condorcet-consistent*: it elects the [Condorcet winner](../reference.md#condorcet-winner) whenever one exists. If $m \ge 4$ and $f$ must handle large enough electorates (Moulin's construction uses 25 voters), then $f$ violates participation.
*In words:* every rule that always crowns a Condorcet winner sometimes punishes a voter for showing up, once there are four candidates.

Three precise remarks.

- **The voter count is not sharp in Moulin.** Felix Brandt, Christian Geist and Dominik Peters (2017) showed by SAT solving that 12 voters suffice, and that 12 is tight: with four alternatives, some Condorcet-consistent rule satisfies participation on every electorate of at most 11 voters.
- **$m \ge 4$ is needed.** With three alternatives, maximin with a lexicographic tie-break satisfies participation (Moulin, same paper). Not every Condorcet method survives at $m = 3$: Copeland with an alphabetical tie-break fails on four voters plus one, in a case driven by the tie-break.
- **The theorem is about participation, not monotonicity.** Maximin and Copeland ([2.3](02-03-condorcet-methods-and-kemeny.md)) are monotone: raising $x$ changes only the pairs involving $x$, each in $x$'s favour, so $x$'s score can only rise and every rival's can only fall.

The proof is an explicit construction over many profiles, too long for ten minutes, and the 12-voter version was found by computer. Example 2 shows the theorem biting.

**Where the argument is weakest.** Resoluteness, and how a voter compares outcomes. Moulin's theorem concerns single winners under a fixed tie-break. For rules that return a set of winners, "worse" needs a convention for ranking sets, and the threshold moves with it: Brandt, Geist and Peters find 17 voters if a voter judges a set by its best member and 14 if by its worst. Second, the theorem says a paradox profile *exists*, not that it is common; how often real electorates land on one is an empirical question it does not touch. Third, participation is a demand, not a theorem. A Condorcet defender can read Moulin as a price worth paying; a defender of scoring rules reads it as a reason to give up Condorcet consistency. The theorem settles that the trade is forced, not which side of it to take.

## Picture

![Two panels of horizontal bar charts for the same 17-voter instant-runoff election. Before: round 1 has A 6, B 6, C 5, and C is eliminated; round 2 has A 11 and B 6, and A wins. After two voters move A to the top of their ballots: round 1 has A 8, B 4, C 5, and B is eliminated; round 2 has A 8 and C 9, and C wins. A dashed line marks the majority of 9.](assets/02-04-fig1.svg)

The only thing the two raising voters changed is which loser goes out first. That choice decides A's opponent in the final, and C beats A head to head.

## Worked examples

**Example 1 (clean): raising the winner makes it lose.** Seventeen voters: 6: A ≻ C ≻ B, 6: B ≻ C ≻ A, 5: C ≻ A ≻ B. A majority is 9.

- Round 1: A 6, B 6, C 5. C is out; its five ballots go to A.
- Round 2: A 11, B 6. **A wins.**

Now two of the B ≻ C ≻ A voters move A to the top, casting A ≻ B ≻ C. B stays above C on their ballots, so this is a legal raise of A.

- Round 1: A 8, B 4, C 5. B is out; its four remaining ballots go to C.
- Round 2: C 9, A 8. **C wins.**

A gained two first preferences and lost. Look at the pairs: before the change C beats A 11–6 and B 11–6, so C is the Condorcet winner, squeezed out in round 1 because it was almost everyone's second choice. The raise of A rescued C. An exhaustive search over every three-candidate profile and every raise of its winner finds no example with fewer than 17 voters in which no elimination and no final is tied. This one is as small as such a three-candidate example gets.

**Example 2 (the hypothesis bites): a Condorcet method punishes turnout.** Moulin needs $m \ge 4$, so take four candidates and seven voters: 3: A ≻ C ≻ B ≻ D, 2: C ≻ B ≻ D ≻ A, 2: B ≻ D ≻ A ≻ C. [Maximin](../reference.md#maximin) scores each $x$ by its worst pairwise tally, $\min_{y \ne x} n(x, y)$, where $n(x,y)$ counts voters ranking $x$ above $y$.

Now two voters with D ≻ A ≻ B ≻ C turn out. They prefer A to B.

| Candidate | Worst contest, 7 voters | Score | Worst contest, 9 voters | Score |
|---|---|---|---|---|
| A | vs B and vs D: 3 | **3** | vs D: 3 | 3 |
| B | vs C: 2 | 2 | vs A and vs C: 4 | **4** |
| C | vs A: 2 | 2 | vs A: 2 | 2 |
| D | vs B: 0 | 0 | vs B: 2 | 2 |

A wins 3 to 2 before; B wins 4 to 3 after. The newcomers rank A second and B third, so voting cost them a place. Neither electorate has a Condorcet winner (D beats A in both), which is what lets maximin's choice drift. The mechanism is visible in the table. Maximin reads each candidate's weakest contest. The new ballots lift B's weakest contest, against C, from 2 to 4. They leave A's weakest, against D, at 3, because they rank D above A.

With three candidates an exhaustive search finds nothing: every profile of up to 9 voters plus one ballot, under maximin with an alphabetical tie-break, satisfies participation, as Moulin's three-candidate result says it must.

## Watch out

- **You might think a monotonicity failure needs strategic voters.** Example 1's two voters didn't lie or plan anything. Any sincere shift of opinion toward the winner can trigger it. Deliberate misreporting is [3.1](03-01-manipulation-and-strategy-proofness.md)'s topic.
- **You might think Moulin's theorem says Condorcet methods are non-monotone.** It is about participation, an axiom about changing the electorate. Maximin and Copeland are monotone. And $m \ge 4$ is not decoration: with three candidates, maximin with a fixed tie-break satisfies participation. Dropping that hypothesis misstates the theorem.
- **You might think some rule escapes the trade.** Proposition 2 shows scoring rules keep participation, and [2.1](02-01-scoring-rules.md) shows what they give up: no scoring rule is Condorcet-consistent. With $m \ge 4$ Moulin makes the trade compulsory: on large enough electorates, a resolute rule can be Condorcet-consistent or satisfy participation, not both.

## One-liner

> Runoff rules can punish both support and turnout because a ballot can reroute the elimination order; scoring rules can't; Condorcet methods stay monotone but, with four or more candidates, must punish turnout somewhere.

## Problems

**P1 (🟢) *(Exegetical (a)–(b).)*** (a) State Moulin's no-show theorem with every hypothesis.
(b) In 100 words or fewer, give two independent reasons why it puts no constraint on the Borda count.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** (a) Prove that the Borda count with a fixed tie-break order is monotone. You may use [2.1](02-01-scoring-rules.md)'s identity $B(z) = \sum_{v \ne z} n(z, v)$.
(b) In two sentences, name the step of your proof that has no analogue for instant runoff, and say what instant runoff does at that point instead.

**P3 (🔴, optional) *(Formal.)*** Build a three-candidate IRV election and a group of at least two voters, all casting the same sincere ballot, whose turning out changes the winner from their second choice to their last. No elimination and no final may be decided by a tie. Show both counts.

<details>
<summary>Solutions</summary>

**P1** *(Exegetical (a)–(b), strict.)*

**Must hit, strict (a):**

- Hypotheses: $f$ is resolute (one winner, fixed tie-break) and defined on variable electorates; $f$ is Condorcet-consistent; $m \ge 4$; electorates large enough (Moulin's construction uses 25 voters; 12 suffice and are tight for four alternatives).
- Conclusion: some profile $\mathbf P$ and ballot $\succ$ with $f(\mathbf P) \succ f(\mathbf P + \succ)$. The voter would have done strictly better by abstaining.

**Must hit, strict (b):**

- Borda is not Condorcet-consistent, so the theorem's hypothesis fails and it says nothing about Borda. Witness: in Condorcet's 81-voter profile ([2.1](02-01-scoring-rules.md)), A is the Condorcet winner and Borda elects B.
- Independently, Proposition 2 proves that Borda, like every scoring rule, satisfies participation.

**Wrong turns:** stating the theorem for $m \ge 3$; maximin escapes at $m = 3$. Reading it as a converse ("a rule that fails participation must be Condorcet-consistent"), which IRV refutes. Saying Moulin shows Borda fails participation.

**Model answer:** (a) If a resolute social choice function on variable electorates always elects the Condorcet winner when one exists, and there are at least four alternatives and enough voters (25 in Moulin's construction, 12 at the tight bound), then for some profile and some voter, adding her sincere ballot yields a winner she ranks strictly below the winner without it. (b) First, Borda is not Condorcet-consistent: on Condorcet's 81 voters it elects B over the Condorcet winner A, so the theorem's hypothesis fails. Second, Proposition 2 shows Borda satisfies participation outright.

---

**P2** *(Formal (a) · Exegetical (b).)*

(a) Let $x = f(\mathbf P)$, and let $\mathbf P'$ raise $x$ on some ballots, leaving the relative order of the other alternatives unchanged on each. Write $n'$ and $B'$ for tallies and Borda scores in $\mathbf P'$.

1. For $y, z$ both different from $x$, no ballot changes its $y$-versus-$z$ order, so $n'(y, z) = n(y, z)$.
2. On each changed ballot $x$ only moves up, so for every $y \ne x$: $n'(x, y) \ge n(x, y)$ and $n'(y, x) \le n(y, x)$.
3. By the identity and step 2, $B'(x) = \sum_{v \ne x} n'(x, v) \ge B(x)$.
4. For $y \ne x$, by steps 1 and 2, $B'(y) = \sum_{v \ne x, y} n(y, v) + n'(y, x) \le B(y)$.
5. So $B'(x) - B'(y) \ge B(x) - B(y) \ge 0$ for every $y$. If the last inequality is strict, $x$ still beats $y$. If $B(x) = B(y)$, $x$ precedes $y$ in the tie order, and $B'(x) \ge B'(y)$ means $x$ still wins any tie with $y$. Hence $f(\mathbf P') = x$. ∎

(b) Step 4, where every rival's score depends only on its own tallies and can only fall, has no analogue. In IRV the raise changes the first-preference totals of *other* candidates (Example 1's B lost two), which can change who is eliminated and so who meets $x$ in the final.

**Wrong turns:** proving only that $x$'s score rises, without showing that no rival's rises. Forgetting the tie case in step 5. In (b), saying "IRV ignores lower preferences"; it uses them, through transfers, and that is exactly where the order of elimination enters.

---

**P3** *(Formal.)*

**Accept:** any three-candidate profile $\mathbf P$ and $k \ge 2$ identical added ballots such that IRV elects the ballot's second choice on $\mathbf P$ and its last choice on $\mathbf P$ plus the group, with every elimination and final decided without a tie, both counts shown.

**Model answer.** Nine voters: 4: B ≻ C ≻ A, 3: C ≻ B ≻ A, 2: A ≻ C ≻ B. A majority is 5.

- Round 1: A 2, B 4, C 3. A is out; both A ballots go to C.
- Round 2: C 5, B 4. **C wins.**

Two more voters with A ≻ C ≻ B turn out. Now there are 11 voters and a majority is 6.

- Round 1: A 4, B 4, C 3. C is out; its three ballots go to B.
- Round 2: B 7, A 4. **B wins.**

The newcomers moved the winner from C, their second choice, to B, their last. Their ballots saved A from elimination, which knocked out C, whose transfers went to B. An exhaustive search over every three-candidate profile and every added group finds no tie-free no-show paradox with fewer than 11 voters in total, so this is as small as such an example gets.

**Wrong turns:** keeping the majority threshold at 5 after the electorate grows to 11. Letting the round-1 elimination be a tie (A and B are tied at 4 in the second count, but neither is eliminated; C is the unique lowest). Adding ballots that rank the old winner first, which cannot produce this pattern.

</details>

## Flashback

**From Lesson [2.2](02-02-consistency-and-youngs-characterization.md) (Consistency and Young's characterization):** *(Formal (a) · Exegetical (b).)* A party picks its leader by instant runoff, counting two regions separately. North: 3: A ≻ B ≻ C, 2: B ≻ A ≻ C. South: 3: A ≻ C ≻ B, 2: B ≻ A ≻ C, 3: C ≻ B ≻ A. No count below involves a tie.

(a) Find the instant-runoff winner of North, of South, and of the merged 13-voter electorate, showing each round. Which axiom of 2.2 fails, and why does it bind here?

(b) In two sentences: what does (a) let you conclude about instant runoff in the language of Young's theorem, and which direction of the theorem does that conclusion use?

<details>
<summary>Solution</summary>

**Worked answer (a):**

- North (5 voters, a majority is 3): round 1 A 3, B 2, C 0. A has a majority: **A**.
- South (8 voters, a majority is 5): round 1 A 3, B 2, C 3. B is out, and both B ballots go to A. Round 2 A 5, C 3: **A**.
- Merged (13 voters, a majority is 7): 3: A ≻ B ≻ C, 3: A ≻ C ≻ B, 4: B ≻ A ≻ C, 3: C ≻ B ≻ A. Round 1 A 6, B 4, C 3. C is out, and its three ballots go to B. Round 2 B 7, A 6: **B**.

Consistency fails. North and South both elect $\{A\}$, so the intersection is nonempty and the axiom binds: the merged electorate must elect exactly $\{A\}$. It elects $\{B\}$. Because no count has a tie, the winner sets are these singletons however ties would have been handled. The mechanism is the elimination order: in South, B goes out and its voters carry A; merged, North's two B-first voters keep B above C, so C goes out instead and C's voters carry B past A.

**Must hit, strict (b):**

- Instant runoff is not a scoring rule, simple or composite: no system of points by rank, even with lexicographic tie-breaking vectors, reproduces it on every profile.
- That uses only the easy direction (every composite scoring rule is consistent, because scores add over disjoint electorates), by contraposition. The hard direction is not needed.

**Wrong turns:** citing 2.2's proposition on Condorcet extensions; instant runoff is not one (Example 1 above elects A over the Condorcet winner C), so the proposition is silent and the counterexample has to be built directly. Eliminating C in North's round 1: A already has a majority there. Blaming anonymity or neutrality: nothing in the count favours a voter or a name, and the failure lies in how electorates combine.

**Model answer (b):** Instant runoff is not a composite scoring rule, so no points-by-rank system, with or without tie-breaking vectors, can replicate it. The conclusion needs only the easy direction of Young's theorem, read contrapositively: composite scoring rules are consistent, and instant runoff is not.

</details>

## Connections

- **Backward:** [2.1](02-01-scoring-rules.md) supplied scoring rules and the identity P2 uses; Proposition 2 adds participation to their credentials, while 2.1 recorded the cost in Condorcet consistency. Like consistency in [2.2](02-02-consistency-and-youngs-characterization.md), participation is an axiom about changing the electorate, and scoring rules satisfy both. [2.3](02-03-condorcet-methods-and-kemeny.md) defined maximin and Copeland, the rules Example 2 and the remarks test.
- **Forward:** [3.1](03-01-manipulation-and-strategy-proofness.md) proves that strategy-proofness forces a strong form of monotonicity, so Example 1's failure is also a lever for manipulation; [3.2](03-02-proving-gibbard-satterthwaite.md) builds on that lemma. Boss problem 2 in the [syllabus](../syllabus.md) asks you to find an IRV monotonicity failure on its own 21-voter electorate.
- **Sideways:** counting AV and STV ballots is [`political-institutions` 1.2](../../political-institutions/lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md)'s; this lesson supplies the axioms it pointed to. Whether paradoxes like these undercut the authority of democratic outcomes is the argument of [`political-philosophy` 5.4](../../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md).

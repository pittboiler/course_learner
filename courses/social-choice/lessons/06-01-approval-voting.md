# Social Choice · Lesson 6.1: Approval voting

> ⏱ ~15 min · Module 6: Richer inputs: approvals, grades and utilities · Builds on: [2.2 Consistency and Young's characterization](02-02-consistency-and-youngs-characterization.md), [3.1 Manipulation and the first half of Gibbard–Satterthwaite](03-01-manipulation-and-strategy-proofness.md) · Unlocks: [6.2 Grading ballots: range voting and majority judgment](06-02-range-voting-and-majority-judgment.md)

## Why this matters

Every rule so far took rankings as input. [Approval voting](../reference.md#approval-voting) takes something else: each voter names the candidates she finds acceptable, as many as she likes, and the most-approved candidate wins. Steven Brams and Peter Fishburn (1978, *American Political Science Review*) argued it is the most sincere and least manipulable of the single-ballot rules that do not use rankings. This lesson proves the theorem behind that claim, states Fishburn's characterization, and shows the price: the outcome depends on where voters put their thresholds, and those depend on beliefs.

## The idea

A ranking says *in what order*. An approval ballot says *where the line is*. Two voters ranking A ≻ B ≻ C can honestly cast {A} or {A, B}. That freedom is approval voting's selling point and its weak spot.

The selling point is that if you really sort candidates into "fine" and "not fine", approving exactly the fine ones is your best ballot whatever anyone else does. The weak spot is that most voters have a middle. Whether to approve the compromise candidate depends on who you think will win. So "sincere approval voting" picks no single outcome. Depending on where voters draw their lines, it can elect the [Condorcet winner](../reference.md#condorcet-winner) or bury it.

## The result

**Setting.** Voters $N = \{1, \dots, n\}$, alternatives $A$ with $|A| = m$. Voter $i$ casts a ballot $B_i \subseteq A$. The **approval score** of $x$ is $s(x) = |\{i \in N : x \in B_i\}|$, and approval voting returns the set $\arg\max_{x \in A} s(x)$.

**[Sincere ballot](../reference.md#sincere-ballot).** Given voter $i$'s ranking $\succ_i$, the ballot $B_i$ is sincere if $x \in B_i$ and $y \succ_i x$ imply $y \in B_i$. *In words:* you approve everything above some line in your ranking, so you never approve a candidate while skipping one you like better.

**[Dichotomous preferences](../reference.md#dichotomous-preferences).** Voter $i$ splits $A$ into a good set $G_i$ and a bad set, and is indifferent within each. *In words:* every candidate is simply acceptable or not.

To compare ballots, break ties by a fair lottery and let each voter maximize expected utility ([`decision-theory` 1.3](../../decision-theory/lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md)). Ballot $B$ **weakly dominates** $B'$ if it is at least as good against every combination of other ballots and strictly better against at least one. Assume the electorate is large enough that the others can produce any vector of scores.

**Theorem 1 (Brams and Fishburn, 1978).**

- (a) With dichotomous preferences, approving exactly $G_i$ is weakly dominant: it does at least as well as any other ballot, whatever the others do.
- (b) With a strict ranking $a \succ_i b \succ_i c$ of three candidates, the undominated ballots are $\{a\}$ and $\{a, b\}$, so every undominated ballot is sincere.
- (c) With four or more candidates this fails: for $a \succ_i b \succ_i c \succ_i d$ the insincere ballot $\{a, c\}$ is undominated.

*In words:* a voter who sorts candidates into good and bad cannot gain by misreporting; with three candidates strategy never requires insincerity; with four it can.

*Proof.* **Lemma.** Fix everything except whether $x$ is on your ballot, and let $W$ be the winning set when it is not. Approving $x$ raises $s(x)$ by one and nothing else. So if $x \in W$ the winning set becomes $\{x\}$; if $x$ was exactly one vote behind the top it becomes $W \cup \{x\}$; otherwise nothing changes.

1. If $x$ is a best candidate for you, adding it never lowers your expected utility: $\{x\}$ is at least as good as a lottery over $W$, and adding a prize at least as good as the average cannot lower the average. By the mirror-image argument, removing a worst candidate never lowers it either.
2. (a) Start from any ballot. Add each good candidate, then remove each bad one, one at a time. Each good candidate is a best candidate and each bad one a worst, so by step 1 no move hurts. You end at $G_i$.
3. (b) A ballot without $a$ is weakly improved by adding $a$. The improvement is strict when $a$ is one vote behind a sole leader $y$, because a coin flip between $a$ and $y$ beats $y$. A ballot containing $c$ is weakly improved by dropping $c$, strictly when $c$ leads alone by one vote. So every undominated ballot contains $a$ and omits $c$, which leaves $\{a\}$ and $\{a, b\}$. Neither dominates the other, and both are sincere.
4. (c) Step 3's argument eliminates only ballots without $a$ or with $d$. Against each remaining ballot, some score vector makes $\{a, c\}$ strictly better. For example, it beats $\{a\}$ when $c$ and $d$ tie for the lead. ∎

**Theorem 2 (Fishburn, 1978; Alós-Ferrer, 2006).** Let a rule take any finite electorate, each voter casting a non-empty ballot, and return a non-empty set of winners. It is approval voting if and only if it satisfies:

- **Faithfulness:** with one voter, the winners are exactly her ballot.
- **[Consistency](../reference.md#consistency):** if two disjoint electorates have winner sets $W_1, W_2$ with $W_1 \cap W_2 \neq \emptyset$, the combined electorate's winner set is $W_1 \cap W_2$.
- **Cancellation:** if every candidate gets the same number of approvals, all candidates win.

*In words:* approval voting is the only way to read approval ballots that respects a lone voter, adds up across electorates and treats a perfectly balanced electorate as a tie. Fishburn's characterization also assumed neutrality; Carlos Alós-Ferrer showed it follows from the other three.

*Proof that approval voting satisfies them.* Faithfulness: one ballot gives score 1 to its members and 0 to everyone else. Cancellation: equal scores are all maximal. Consistency: scores add, $s = s_1 + s_2$. Let $M_1, M_2$ be the top scores in each electorate. A candidate in $W_1 \cap W_2$ scores $M_1 + M_2$, and no candidate can score more. A candidate reaches $M_1 + M_2$ only if it reaches $M_1$ and $M_2$, that is, only if it lies in $W_1 \cap W_2$. ∎ The converse is the substantive half; Alós-Ferrer's note gives a short proof. Consistency is the axiom [2.2](02-02-consistency-and-youngs-characterization.md) used to single out scoring rules. Approval voting is what it singles out when the ballot is a set.

**Proposition 3 (sincerity permits a lot).** If no candidate is ranked above $x$ by every voter, the sincere ballots "approve everything you rank at or above $x$" make $x$ the unique winner.

*Proof.* Every ballot contains $x$, so $s(x) = n$. A rival $y$ is on voter $i$'s ballot exactly when $y \succ_i x$, so $s(y) = n(y, x)$, the number ranking $y$ above $x$. By hypothesis $n(y, x) \le n - 1$. ∎ So a Condorcet winner can always be elected by sincere ballots. So can a Condorcet loser, provided no candidate Pareto-dominates it.

**Proposition 4 (where the threshold goes).** In a large electorate, suppose approving $x$ matters only in events where $x$ and one rival $y$ are tied, or one vote apart, at the top. Each such event has probability $\pi_{xy}$ and swings half a win, so approving $x$ changes expected utility by

$$\Delta_x = \tfrac12 \sum_{y \neq x} \pi_{xy}\,(u_x - u_y).$$

(i) If every $\pi_{xy}$ is equal, $\sum_{y \neq x}(u_x - u_y) = m(u_x - \bar u)$, where $\bar u$ is the voter's mean utility over all $m$ candidates. Approve $x$ iff $u_x > \bar u$.

(ii) **[Leader rule](../reference.md#leader-rule)** (Jean-François Laslier, 2009). Suppose a poll names a leader $\ell$ and a challenger $k$. A tie between $\ell$ and $k$ is far likelier than any other tie, and ties involving $\ell$ are far likelier than ties without it. Then the $y = \ell$ term dominates $\Delta_x$ for $x \neq \ell$, and the $y = k$ term dominates $\Delta_\ell$. Approve every candidate you prefer to $\ell$, and approve $\ell$ iff you prefer $\ell$ to $k$.

*In words:* a strategic approval voter never misorders anyone. Both rules give sincere ballots, and only the line moves.

**Where the argument is weakest.** Dichotomous preferences carry Theorem 1(a). Critics say few voters have them: most have a compromise candidate in the middle. Without the hypothesis, only (b) and (c) survive: strategy stays sincere with three candidates and may not with four. Proposition 4 says the best line depends on beliefs about the race, so the outcome depends on rankings *and* polls. Proposition 3 shows that sincerity alone barely constrains the result.

## Picture

![Left panel: utility bars for three voter groups over candidates L, C and R, with a dashed line at each group's mean utility. Four voters score L 10, C 4, R 0 and approve only L. Two voters score C 10, L 6, R 0 and approve C and L. Three voters score R 10, C 4, L 0 and approve only R. Right panel: approval tallies. Under mean thresholds L gets 6, R 3, C 2, and L wins. Under the leader rule with poll L and R, L gets 6, C 5, R 3. With poll L and C, C gets 5, L 4, R 3, and C wins.](assets/06-01-fig1.svg)

The compromise C sits just below two groups' lines (4 against a mean of 4.67). Once the poll makes C the alternative to L, voters move their lines to include it.

## Worked examples

**Example 1 (clean): a buried Condorcet winner.** Nine voters, utilities as in the figure:

- 4: L ≻ C ≻ R with $(u_L, u_C, u_R) = (10, 4, 0)$, mean $14/3$, so they approve {L}.
- 2: C ≻ L ≻ R with $(6, 10, 0)$, mean $16/3$, so they approve {C, L}.
- 3: R ≻ C ≻ L with $(0, 4, 10)$, mean $14/3$, so they approve {R}.

Every ballot is sincere. Approval scores: L $4 + 2 = 6$, R 3, C 2, so L wins. Head to head, C beats L 5–4 (the C- and R-voters) and beats R 6–3, so C is the Condorcet winner and finishes last on approvals. By Proposition 3, other sincere ballots elect C: L-voters approve {L, C}, C-voters {C}, R-voters {R, C}, and C scores 9 to L's 4 and R's 3. Same rankings, both profiles sincere, opposite results.

**Example 2 (the hypothesis bites): thresholds that respond to polls.** None of these voters is dichotomous, so Theorem 1(a) gives no dominant ballot. Let them follow the leader rule, updating on each result.

| Poll (leader, challenger) | L-voters | C-voters | R-voters | Scores L, C, R |
|---|---|---|---|---|
| L, R (from Example 1) | {L} | {C, L} | {R, C} | 6, 5, 3 |
| L, C | {L} | {C} | {R, C} | 4, 5, 3 |
| C, L | {L} | {C} | {R, C} | 4, 5, 3 |

In the first round the R-voters approve C because they prefer it to the leader L. In the second, the C-voters stop approving L once L's rival is C. The third poll returns the same ballots, a fixed point, and C, the Condorcet winner, wins. Every ballot in the table is sincere; strategy moved only the lines. Here it repaired Example 1's outcome, but one example does not show how generally that happens.

## Watch out

- **You might think approval voting is strategy-proof.** Theorem 1(a) needs dichotomous preferences, the hypothesis most often dropped. With a middle candidate your best ballot depends on the others' ballots (P3 below), which is exactly what strategy-proofness rules out.
- **You might think approval voting escapes Gibbard–Satterthwaite.** The [Gibbard–Satterthwaite theorem](../reference.md#gibbard-satterthwaite-theorem) concerns rules that take rankings. Fix a map from rankings to ballots, say "approve your top two", and the composite is a scoring rule ([2.1](02-01-scoring-rules.md)), manipulable like any other ([3.1](03-01-manipulation-and-strategy-proofness.md)). What approval voting buys is weaker: manipulation through the threshold, with no need to misorder anyone. On the dichotomous domain it is [strategy-proof](../reference.md#strategy-proofness), a domain restriction in the style of Module 3.
- **You might think "sincere approval voting" names an outcome.** It names a set of possible outcomes, which by Proposition 3 includes every candidate no rival Pareto-dominates.

## One-liner

> Approval voting is the consistent way to count sets, and it is strategy-proof when every voter's preferences really are good-or-bad; otherwise the outcome turns on where honest voters draw their lines, which turns on the polls.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** Twelve voters, four candidates, utilities $(u_W, u_X, u_Y, u_Z)$:

- 5 voters: $(10, 7, 5, 0)$
- 4 voters: $(0, 3, 8, 10)$
- 3 voters: $(2, 6, 10, 0)$

(a) Each voter approves exactly the candidates above her mean utility. Find the ballots, the approval winner, the plurality winner and the Condorcet winner.
(b) Voters now follow the leader rule, using (a)'s approval scores as the poll. Find the new ballots and the winner.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** (a) Build a profile with the fewest voters possible in which a candidate ranked first by a strict majority loses under approval voting, although every ballot is sincere and non-empty. Prove that fewer voters cannot do it.
(b) Does your profile show approval voting violating an axiom of Theorem 2? Two sentences.

**P3 (🔴, optional) *(Formal (a)–(c).)*** Vee ranks A ≻ B ≻ C with utilities 10, 7, 0. Ties are broken alphabetically.

(a) The other voters' ballots give A 5, B 6, C 3 approvals. Vee's mean-threshold ballot is {A, B}. Find the winner, then a sincere ballot that does strictly better for her.
(b) Now the others give A 3, B 6, C 7. Show that a sincere ballot different from the one in (a) is now optimal.
(c) Say which ballot the leader rule recommends in (a) and in (b), treating the others' scores as the poll.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) Means: $22/4 = 5.5$, $21/4 = 5.25$, $18/4 = 4.5$. Ballots: the 5 voters approve {W, X} (10 and 7 exceed 5.5; 5 does not); the 4 voters approve {Y, Z}; the 3 voters approve {X, Y}.

Approval scores: W 5, X $5 + 3 = 8$, Y $4 + 3 = 7$, Z 4. **Approval winner X.**

Plurality (first choices): W 5, Z 4, Y 3, X 0. **Plurality winner W.**

Pairwise: Y beats X 7–5 (the 4- and 3-voter groups), W 7–5, and Z 8–4. **Condorcet winner Y.** Three rules, three winners, and X wins approval without being anyone's first choice.

(b) Poll: leader X (8), challenger Y (7). The 5 voters prefer only W to X, and prefer X to Y, so they approve {W, X}. The 4 voters prefer Z and Y to X, and Y to X, so they approve {Y, Z}. The 3 voters prefer only Y to X, and Y to X, so they approve {Y}. Scores W 5, X 5, Y 7, Z 4. **Y wins**, the Condorcet winner.

**Wrong turns:** averaging over three candidates instead of all four. Giving X the 4-voter group's approvals: X is worth 3 to them, below their mean of 5.25.

---

**P2** *(Formal (a) · Exegetical (b).)*

**Accept:** a strict majority ranks $x$ first, every ballot is a non-empty top segment of its voter's ranking, some candidate outscores $x$, and an argument that one or two voters cannot do it.

(a) **Model answer:** three voters. Two rank A ≻ B ≻ C and approve {A, B}; one ranks B ≻ A ≻ C and approves {B}. All three ballots are sincere. Scores: A 2, B 3, C 0, so B wins although two of three voters rank A first (and A is therefore also the Condorcet winner).

*Fewer is impossible.* With one or two voters, a strict majority means every voter ranks $x$ first. A sincere non-empty ballot contains its voter's top candidate, so $s(x) = n$, the maximum possible, and nobody outscores $x$.

**Must hit, strict (b):**

- No: approval voting satisfies faithfulness, consistency and cancellation on every ballot profile (Theorem 2), so no profile can show a violation.
- Majority-winner and Condorcet consistency are properties of a rule that takes rankings. The failure lives in the step from rankings to ballots, the voters' thresholds, which Fishburn's axioms do not mention.

**Wrong turns:** building a profile where the loser is only a Condorcet winner, not a majority's first choice, which answers an easier question. Blaming consistency, which concerns combining electorates, not majorities.

---

**P3** *(Formal (a)–(c).)*

(a) With {A, B}: A 6, B 7, C 3, so **B wins** (utility 7). With {A}: A 6, B 6, C 3, a tie that A wins alphabetically (utility 10). Raising her line to approve only A is strictly profitable, and {A} is sincere. (Checking all eight ballots, the best payoff, 10, comes only from {A} and the insincere {A, C}.)

(b) With {A}: A 4, B 6, C 7, so **C wins** (utility 0). With {A, B}: A 4, B 7, C 7, a tie that B wins alphabetically (utility 7). No ballot gives A the win, since A can reach at most 4. The best payoff is 7, from {A, B} or {B}, so lowering her line to include B is now optimal. No single ballot is best against both (a) and (b), so she has no dominant ballot: approval voting is not strategy-proof for her.

(c) In (a) the leader is B and the challenger A: approve what she prefers to B, which is A, and not B, since she prefers A to B. Ballot {A}. In (b) the leader is C and the challenger B: approve A and B, and not C. Ballot {A, B}. The leader rule matches the optimum both times.

**Wrong turns:** treating Vee's own mean (17/3) as decisive. The mean rule assumes all ties equally likely, and here only one race is close. In (b), hunting for a ballot that elects A, which no ballot can.

</details>

## Flashback

**From Lesson [5.2](05-02-when-the-jury-theorem-fails.md) (When the jury theorem fails):** *(Formal (a)–(b).)* A safety board decides by simple majority whether to close a bridge. The bridge is unsafe ($U$) or sound ($S$), each with prior probability $\frac12$. Each member privately gets an alarm or a clear reading, independently given the state, with $\Pr(\text{alarm} \mid U) = \frac35$ and $\Pr(\text{clear} \mid S) = \frac45$. Each member wants to close iff her probability of $U$ exceeds $\frac12$. Exact fractions.

(a) Find a member's posterior on $U$ alone, for each reading. Then, on a three-member board whose other two members vote their readings, find each reading's pivotal posterior. Is voting one's reading a Bayes–Nash equilibrium?
(b) Find the pivotal posterior of a member with a clear reading on a five-member board, and say whether sincere voting survives. In one sentence, say why a split among the others is evidence here, when with 5.1's symmetric signals it would cancel.

<details>
<summary>Solution</summary>

Prior odds are 1. Likelihood ratios for $U$ against $S$: alarm $\frac{3/5}{1/5} = 3$, clear $\frac{2/5}{4/5} = \frac12$.

(a) Alone: alarm gives odds 3, posterior $\frac34$; clear gives odds $\frac12$, posterior $\frac13$. A lone member votes her reading.

Three members: a member is pivotal when the other two split, one alarm and one clear. That event has likelihood ratio

$$\frac{2 \cdot \frac35 \cdot \frac25}{2 \cdot \frac15 \cdot \frac45} = \frac{12/25}{8/25} = \frac32.$$

Alarm: odds $3 \cdot \frac32 = \frac92$, posterior $\frac{9}{11} > \frac12$, so close. Clear: odds $\frac12 \cdot \frac32 = \frac34$, posterior $\frac37 < \frac12$, so keep open. **Sincere voting is an equilibrium.**

(b) Five members: pivotal means the other four split 2–2. The binomial coefficients cancel, so the ratio is $(\frac32)^2 = \frac94$. Clear: odds $\frac12 \cdot \frac94 = \frac98$, posterior $\frac{9}{17} > \frac12$, so she should vote to close. **Sincere voting fails** (and keeps failing as the board grows, since the ratio is $(\frac32)^{(n-1)/2}$).

Why: each alarm–clear pair among the others has ratio $\frac{(3/5)(2/5)}{(1/5)(4/5)} = \frac32 \neq 1$ because an unsafe bridge triggers alarms less reliably than a sound one gives clear readings; with a common accuracy $p$ the pair's ratio is $\frac{p(1-p)}{(1-p)p} = 1$.

**Wrong turns:** treating the pivotal event as uninformative and keeping the lone posterior $\frac13$: that imports 5.1's symmetric cancellation. Using unanimity's pivot (all others vote to close): under majority rule the pivot is a tie among the others.

</details>

## Connections

- **Backward:** consistency is the axiom [2.2](02-02-consistency-and-youngs-characterization.md) used for scoring rules, now applied to set ballots. Theorem 1(a) is a strategy-proofness result on a restricted domain, like the single-peaked one in [3.3](03-03-single-peakedness-black-and-moulin.md), and it sits outside [3.1](03-01-manipulation-and-strategy-proofness.md)'s Gibbard–Satterthwaite setting because its inputs are not rankings. The pivot-probability reasoning in Proposition 4 is the same "act as if pivotal" logic [5.2](05-02-when-the-jury-theorem-fails.md) applied to strategic jurors.
- **Forward:** [6.2](06-02-range-voting-and-majority-judgment.md) gives voters a finer scale; strategic voters on a range ballot tend to push every grade to the top or bottom, which turns it back into approval voting. [6.3](06-03-utilities-in-possibility-out.md) asks what happens when the input is comparable utilities.
- **Sideways:** the mean-threshold voter is an expected-utility maximizer facing pivot events, the decision theory of [`decision-theory` 1.3](../../decision-theory/lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md). Gibbard–Satterthwaite as a statement is in [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md). Counting rules used in real elections is in [`political-institutions`](../../political-institutions/syllabus.md).

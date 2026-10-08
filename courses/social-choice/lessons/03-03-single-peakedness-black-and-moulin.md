# Social Choice · Lesson 3.3: Single-peakedness: Black and Moulin

> ⏱ ~15 min · Module 3: Strategy and restricted domains · Builds on: [3.2 Proving Gibbard–Satterthwaite](03-02-proving-gibbard-satterthwaite.md), [1.3 Arrow as a map](01-03-arrow-as-a-map.md) · Unlocks: [3.4 Single-crossing and value restriction](03-04-single-crossing-and-value-restriction.md)

## Why this matters

[3.2](03-02-proving-gibbard-satterthwaite.md) closed the door: on the unrestricted domain, every onto, strategy-proof rule with three or more possible outcomes is a dictatorship. Both Arrow and Gibbard–Satterthwaite assume that *every* profile of rankings can occur. [1.3](01-03-arrow-as-a-map.md) listed dropping that assumption as an escape route. This lesson takes it. When the alternatives sit on a line (tax rates, budgets, left to right) and every voter's ranking has one peak, majority rule produces a full transitive ranking, and a whole family of rules makes honesty a dominant strategy. Black's theorem gives the first; Moulin's phantom voters give the second.

## The idea

Put the options on a line. A voter is single-peaked if she has a favourite and, walking away from it in either direction, every step makes things worse. She may still compare a point two steps left with one step right however she likes. Only the order *along each side* is fixed.

Why should that kill cycles? A cycle needs some option to be someone's worst among three. Single-peakedness forbids exactly one of them: the one in the middle of the three on the line. If the middle option is never last for anyone, a majority cannot go round in a circle.

Strategy is the same story. Under the median of reported peaks, a voter whose peak lies left of the outcome can only move the median by reporting a peak to its right, and that pushes it further right, away from her. Moulin showed that "median of the peaks plus some fixed fake ballots" is essentially the only way to get this.

## The theorems

**Setting.** Voters $N = \{1, \dots, n\}$ with strict rankings $\succ_i$ of alternatives $A$, $|A| = m$; the profile is $\mathbf{P} = (\succ_1, \dots, \succ_n)$. $n(x,y)$ counts voters ranking $x$ above $y$, and the [majority relation](../reference.md#majority-relation) is $x \, M \, y$ iff $n(x,y) > n(y,x)$. With strict rankings $n(x,y) + n(y,x) = n$, so $x \, M \, y$ iff $n(x,y) > n/2$. The weak relation is $x \, R \, y$ iff $n(x,y) \ge n(y,x)$.

**Definition.** An *axis* is a strict linear order $<$ on $A$ (left to right). $\succ_i$ is [single-peaked](../reference.md#single-peaked-preferences) on $<$ if, with $p_i$ her top alternative (her *peak*),

$$p_i \le y < z \ \text{ or } \ z < y \le p_i \implies y \succ_i z.$$

*In words:* on each side of the peak, nearer is better. A profile is single-peaked if all $n$ rankings are single-peaked on one common axis. Only $2^{m-1}$ of the $m!$ rankings are single-peaked on a given axis (8 of 24 for $m = 4$).

**Lemma (never last).** If every ranking is single-peaked on $<$ and $x < y < z$, no voter ranks $y$ last among $\{x, y, z\}$.

*Proof.* If $p_i \le y$, then $p_i \le y < z$, so $y \succ_i z$. If $p_i \ge y$, then $x < y \le p_i$, so $y \succ_i x$. ∎

**Theorem 1 ([Black's theorem](../reference.md#blacks-theorem); Duncan Black, 1948).** Let $\mathbf{P}$ be single-peaked on a common axis. (a) For any $n$, $M$ is transitive. (b) If $n$ is odd, $M$ is also complete, so it is a strict ranking of all of $A$, and its top is the median peak.

*In words:* on a line, majority rule never cycles, and with an odd electorate it ranks every alternative, not just the winner.

*Proof.* (a) Suppose $x \, M \, y$ and $y \, M \, z$; we show $x \, M \, z$. Let $w$ be whichever of $x, y, z$ lies between the other two on the axis.

1. $w = y$. A voter with $x \succ_i y$ cannot rank $y$ last (Lemma), so $y \succ_i z$, hence $x \succ_i z$. So $n(x,z) \ge n(x,y) > n/2$.
2. $w = x$. A voter with $z \succ_i x$ has $x \succ_i y$ (Lemma), hence $z \succ_i y$. So $n(z,x) \le n(z,y) < n/2$, and $n(x,z) > n/2$.
3. $w = z$. A voter with $y \succ_i z$ has $z \succ_i x$ (Lemma), hence $y \succ_i x$. So $n(y,x) \ge n(y,z) > n/2$, contradicting $x \, M \, y$. This case cannot occur.

(b) With $n$ odd, $n(x,y) \ne n(y,x)$ for every pair, so $M$ is complete. A complete, transitive, asymmetric relation is a strict linear order. Its top beats everything, so it is the Condorcet winner, which the median voter theorem identifies as the median peak. ∎

The median voter theorem itself is [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md)'s: for an odd electorate the median peak beats every challenger, because the median voter sides with whichever half opposes it ([median voter theorem](../reference.md#median-voter-theorem)). Black's statement is stronger. It covers second place, third place, every pairwise vote, and so every agenda.

**Even $n$.** Part (a) never used oddness: $M$ stays transitive, so $R$ is [quasi-transitive](../reference.md#quasi-transitivity). But ties appear, and $R$ itself can fail transitivity (Example 2). There may be no strict Condorcet winner. The unbeaten alternatives are exactly those lying between the two middle peaks, endpoints included (checked by brute force on every profile with $n \in \{2, 4\}$ and $m \le 5$).

**Moulin.** Now let the alternatives be the points of an interval such as $[0, 10]$, every voter single-peaked on it, and let a rule $f$ pick one point. $f$ is *peak-only* if it depends on the profile only through the reported peaks $(p_1, \dots, p_n)$. Fix $k$ numbers $a_1, \dots, a_k$, the [phantom voters](../reference.md#phantom-voters), with $n + k$ odd. The [generalized median rule](../reference.md#generalized-median-rule) is

$$f(\mathbf{P}) = \operatorname{med}(p_1, \dots, p_n, a_1, \dots, a_k).$$

*In words:* add $k$ fake ballots that never change, and take the median of everything.

**Theorem 2 (Hervé Moulin, 1980, *Public Choice*).** On the single-peaked domain, a peak-only, anonymous rule is [strategy-proof](../reference.md#strategy-proofness) if and only if it is a generalized median with $n + 1$ phantoms. It is in addition Pareto efficient if and only if it is a generalized median with $n - 1$ phantoms.

*In words:* honest, symmetric rules on a line are medians with some fixed ballots added; $n + 1$ fake ballots can outvote everyone, $n - 1$ cannot.

Phantoms buy range. With $n$ odd, $(n+1)/2$ phantoms at each end give the plain median of peaks; all $n + 1$ at one point $c$ give the constant rule $c$. We prove the half of Theorem 2 that gets used: every generalized median is strategy-proof. The converse is Moulin's and is not proved here.

*Proof (any phantoms, any $n$).* Let $T = n + k$ and $h = (T-1)/2$. Sorting shows that an entry $x$ of a list of $T$ numbers is its median iff at most $h$ entries are $< x$ and at most $h$ are $> x$. Let $x = f(\mathbf{P})$ and take voter $i$ with $p_i < x$. She reports $r$ instead.

1. $r < x$. One entry below $x$ is replaced by another below $x$. Both counts are unchanged, so the outcome is still $x$.
2. $r \ge x$. Now at most $h - 1$ entries are below $x$, so the $(h+1)$-th smallest entry, the new outcome $y$, satisfies $y \ge x > p_i$. Since $x$ lies between $p_i$ and $y$ (or equals $y$), single-peakedness gives $x \succsim_i y$.

The case $p_i > x$ is the mirror image, and $p_i = x$ already gives her top choice. Since $f$ reads only peaks, misreporting the rest of the ranking changes nothing. ∎

**Where the argument is weakest.** The hypothesis is the domain: every voter single-peaked on one common axis. It is a joint claim about issues and people. It holds when an issue really is one-dimensional and nobody prefers both extremes to the middle. One voter who ranks "cut" and "grow" above "hold" breaks the never-last lemma for that triple, and cycles become possible again. With two policy dimensions the domain is gone ([3.4](03-04-single-crossing-and-value-restriction.md); spatial models in [`political-economy`](../../political-economy/syllabus.md)). Without the domain we are back on Gibbard–Satterthwaite's unrestricted domain, where only dictatorships are onto and strategy-proof. Theorem 2 adds two assumptions of its own: rules read only peaks, and voters are anonymous. Whether real electorates are single-peaked is an empirical question the theorems do not answer.

## Picture

![Rank of each alternative A to E for three voter types in Example 1, plotted along the axis. The two B-peaked voters rise to B and fall away on both sides; the one C-peaked voter rises to C and falls; the two E-peaked voters rise steadily to E. A dashed vertical line marks the median peak C. Every curve has one peak. The majority ranking is C, D, B, E, A.](assets/03-03-fig1.svg)

Each curve climbs to one peak and falls on both sides, though not symmetrically: the blue voters rank A (two steps left) above D (one step right).

## Worked examples

**Example 1 (clean): the whole majority relation.** Axis A < B < C < D < E (say, five budget levels). Five voters:

- 2: B ≻ C ≻ A ≻ D ≻ E
- 1: C ≻ D ≻ B ≻ E ≻ A
- 2: E ≻ D ≻ C ≻ B ≻ A

Each is single-peaked: the first, for instance, ranks C ≻ D ≻ E going right from its peak, and A is the only option to its left. Pairwise tallies $n(x,y)$–$n(y,x)$:

| | B | C | D | E |
|---|---|---|---|---|
| **A** | 0–5 | 0–5 | 2–3 | 2–3 |
| **B** | | 2–3 | 2–3 | 3–2 |
| **C** | | | 3–2 | 3–2 |
| **D** | | | | 3–2 |

C beats all four, D beats three, B two, E one, A none. $M$ is the strict ranking C ≻ D ≻ B ≻ E ≻ A, as Theorem 1(b) promises. The peaks are B, B, C, E, E, and the top is the median peak C. Notice that D, nobody's favourite, comes second and beats B, the favourite of two voters. Black's theorem orders the whole relation, not only the winner.

**Example 2 (the hypothesis bites): drop the median voter.** Remove the C ≻ D ≻ B ≻ E ≻ A voter; $n = 4$. B and C each beat A 4–0. **Every other pair ties 2–2.** So:

- $M = \{(B, A), (C, A)\}$, transitive, as part (a) says.
- $R$ is not transitive: A ties E, E ties B, but B beats A.
- No strict Condorcet winner. The unbeaten set is {B, C, D, E}, everything between the middle peaks B and E.

A generalized median picks one point anyway. Place A to E at positions 1 to 5 and use $n + 1 = 5$ phantoms at A, A, C, E, E. The nine entries sorted are A, A, B, B, C, E, E, E, E, with median C. The efficient version with $n - 1 = 3$ phantoms at A, C, E gives A, B, B, C, E, E, E, again C. The phantom at C acts as a standing tie-breaker, and by Theorem 2 nobody can game it.

## Watch out

- **You might think** single-peaked means "utility falls with distance," but actually it fixes only the order on each side of the peak. Comparisons across the peak are free (Example 1's blue voters). Neither theorem needs distances.
- **You might think** Black's theorem gives a strict social ranking for any electorate. Actually completeness needs odd $n$. With even $n$, ties appear, $R$ can be intransitive, and a strict Condorcet winner may not exist (Example 2). This is the hypothesis people drop.
- **You might think** the median of peaks is the only strategy-proof rule on a line. It is one member of Moulin's family. Phantoms can encode a status quo, a constant or an order statistic, and all of them are strategy-proof. Strategy-proofness alone does not single out the median.

## One-liner

> When everyone's ranking has one peak on a common line, the never-last middle kills majority cycles (Black), and medians padded with fixed phantom ballots are exactly the honest anonymous rules (Moulin).

## Problems

**P1 (🟢)** *(Formal (a)–(b) · Exegetical (c).)* A town board of five ranks three budget options: Cut (C), Hold (H), Grow (G).

- 2: H ≻ C ≻ G
- 1: C ≻ H ≻ G
- 1: G ≻ H ≻ C
- 1: H ≻ G ≻ C

(a) Up to reversal there are three axes on three alternatives. On which is the profile single-peaked? Justify using the never-last lemma.
(b) Compute all three pairwise tallies and the majority ranking, and check the top against the median peak.
(c) A memo says: "Since preferences on the board are single-peaked, Black's theorem guarantees majority rule will rank every option strictly, however many members the board has." Name the missing hypothesis and say what still holds without it. Two sentences.

**P2 (🟡)** *(Formal.)* Four voters are single-peaked on $[0, 10]$ with peaks 1, 4, 6 and 8. The rule is a generalized median with phantoms at 2, 5, 5, 9 and 10.

(a) Find the outcome.
(b) For each voter, find every outcome she can reach by changing her report, and show that none of them is better for her than the truthful outcome.

**P3 (🔴, optional)** *(Formal.)* (a) Prove: a generalized median with $n - 1$ phantoms always picks a point between the lowest and highest peak, and is therefore Pareto efficient on the single-peaked domain.
(b) Show that P2's rule, with 5 phantoms, is not Pareto efficient: give a peak profile where its outcome is Pareto-dominated.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c), all strict.)*

(a) On three alternatives the axis is fixed by its middle element, which must never be ranked last. Last places: G by the 2 H ≻ C ≻ G voters and the C ≻ H ≻ G voter (3); C by the other two (2). H is never last, so the profile is single-peaked on C – H – G and on no other axis, since C and G are each last for someone.

(b) C vs H: only the C ≻ H ≻ G voter prefers C, 1–4. C vs G: the three G-last voters prefer C, 3–2. H vs G: 4–1, only the G ≻ H ≻ C voter dissents. Majority ranking H ≻ C ≻ G, transitive. Peaks on the axis C, H, H, H, G; the median is H, the top.

**Must hit, strict (c):**

- The missing hypothesis is an odd number of voters. Completeness of the majority relation needs it.
- Without it, the strict majority relation is still transitive (quasi-transitivity) but ties can appear. Adding a sixth member G ≻ H ≻ C makes C vs G a 3–3 tie, though H still beats both (5–1, 4–2).

**Wrong turns:** Testing single-peakedness voter by voter on different axes. The axis must be common. In (c), saying cycles return with even $n$. They do not; only ties do.

---

**P2** *(Formal, strict.)*

(a) Sorted entries: 1, 2, 4, 5, 5, 6, 8, 9, 10. Nine entries, median is the 5th: **5**.

(b) Use the counting test ($h = 4$). Entries below 5: 1, 2, 4. Entries above: 6, 8, 9, 10.

- Peak 8. Lowering her report to $r < 5$ puts 4 entries below 5 and 3 above, so 5 is still the median. Any $r \ge 5$ leaves 5 as the median too (the two phantoms at 5 hold it). Reachable: only 5. No gain.
- Peak 6. Same argument: reachable only 5. No gain.
- Peak 1. Any $r < 5$ changes nothing. For $r \ge 5$ the median becomes the 5th of {2, 4, 5, 5, 6, 8, 9, 10, r}, which is 5 if $r = 5$, $r$ if $5 < r < 6$, and 6 if $r \ge 6$. Reachable: $[5, 6]$, all at or above 5 and so at least as far from 1 on the same side. No gain.
- Peak 4. Identical to peak 1: reachable $[5, 6]$, all no better than 5.

**Wrong turns:** Dropping the phantoms and taking the median of 1, 4, 6, 8, which is not even defined for $n = 4$. Thinking the peak-1 voter gains by reporting 0: entries below 5 are unchanged, so the outcome stays 5.

---

**P3** *(Formal, strict.)*

(a) There are $T = 2n - 1$ entries, and the median is the $n$-th smallest. Let $\underline p$ be the lowest peak. Only phantoms can lie below $\underline p$, and there are $n - 1$ of them, so the $n$-th smallest entry is at least $\underline p$. Symmetrically it is at most the highest peak $\overline p$. Now let $x \in [\underline p, \overline p]$ and $y \ne x$. If $y > x$, the voter with peak $\underline p \le x < y$ strictly prefers $x$; if $y < x$, the voter with peak $\overline p$ does. So no $y$ Pareto-dominates $x$. ∎

(b) **Accept:** any profile with every peak below 2 (the script checks that these are exactly the inefficient integer profiles). Model: all four peaks at 0. Entries 0, 0, 0, 0, 2, 5, 5, 9, 10; median 2. Every voter strictly prefers 0 to 2, so 2 is Pareto-dominated.

**Wrong turns:** In (a), arguing only that the outcome is between the phantoms; the phantoms can sit anywhere. In (b), choosing peaks on both sides of the outcome: then someone prefers it, and it is not dominated.

</details>

## Flashback

**From Lesson [3.1](03-01-manipulation-and-strategy-proofness.md) (Manipulation and the first half of Gibbard–Satterthwaite):** *(Exegetical (a) · Formal (b).)* An invented memo to a seven-member board: "We elect by Copeland, ties broken alphabetically. Copeland always elects a Condorcet winner when one exists, and raising the winner on a ballot can never unseat it. A rule that monotone gives no member a reason to misreport."

(a) In two sentences: what kind of monotonicity has the memo shown, and what does 3.1 say a rule nobody can game would need?
(b) The board's sincere ballots are 2: A ≻ B ≻ C, 2: B ≻ A ≻ C, 3: C ≻ B ≻ A. Find the Copeland winner, then a single voter and a misreport that gets her an outcome she strictly prefers.

<details>
<summary>Solution</summary>

**Must hit, strict (a):**

- The memo shows 2.4's weak monotonicity: raise the winner with everything else frozen. That much is true of Copeland.
- A rule nobody can game must be strongly monotone (3.1's Lemma 1; its P2 gives the converse): the winner survives *any* reshuffle in which nothing passes it. The memo has not shown that.
- Gibbard–Satterthwaite closes the question: Copeland with a tie-break is resolute, onto and non-dictatorial on three alternatives, so some voter can manipulate at some profile. Condorcet consistency is no defence.

(b) B beats A 5–2 and C 4–3, and A beats C 4–3. B is the Condorcet winner, with Copeland scores B 2, A 0, C −2, so **B wins**. One A ≻ B ≻ C voter reports A ≻ C ≻ B. Now C beats B 4–3, while B still beats A 5–2 and A beats C 4–3: a cycle, every Copeland score is 0, and the tie-break elects **A**, whom she prefers to B. She buried her second choice to manufacture a cycle. An exhaustive check finds no other profitable single-voter misreport. The two profiles also exhibit the strong-monotonicity failure: on her true ballot A is still on top, so nothing passes A, yet the sincere profile elects B.

**Wrong turns:** answering (a) with "monotone rules can't be manipulated": that confuses the weak property the memo has with the strong one Lemma 1 needs. In (b), looking for a C-voter's lie: no C-voter can unseat B.

**Model answer (a):** The memo shows only that raising the winner, with every other ballot frozen, cannot hurt it, which is 2.4's weak monotonicity. 3.1 shows that a rule nobody can game must be strongly monotone, keeping its winner however ballots are reshuffled so long as nothing passes it, and Gibbard–Satterthwaite says no resolute, onto, non-dictatorial rule on three alternatives, Copeland with its tie-break included, achieves that.

</details>

## Connections

- **Backward:** [3.1](03-01-manipulation-and-strategy-proofness.md)–[3.2](03-02-proving-gibbard-satterthwaite.md) proved that strategy-proofness on the unrestricted domain forces dictatorship. This lesson keeps strategy-proofness and gives up the domain, the escape route [1.3](01-03-arrow-as-a-map.md) mapped. The median voter theorem and its strategy-proofness example are [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md)'s; Black's theorem extends them from the winner to the whole relation.
- **Forward:** [3.4](03-04-single-crossing-and-value-restriction.md) generalizes the never-last lemma into Sen's value restriction, adds single-crossing, and shows a second dimension reopens cycles. [6.2](06-02-range-voting-and-majority-judgment.md)'s majority judgment is a median rule again, on grades instead of positions.
- **Sideways:** median-voter electoral competition and redistribution are [`political-economy`](../../political-economy/syllabus.md)'s. Moulin's rules are the money-free cousin of [`grad-game-theory` 5.3](../../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md)'s VCG mechanisms: both get dominant-strategy truth-telling, one from restricting preferences, the other from transfers.

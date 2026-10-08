# Social Choice · Lesson 2.1: Scoring rules

> ⏱ ~15 min · Module 2: Voting rules and their axioms · Builds on: [1.1 Profiles, rules and the majority relation](01-01-profiles-rules-and-the-majority-relation.md), [1.3 Arrow as a map](01-03-arrow-as-a-map.md) · Unlocks: [2.2 Consistency and Young's characterization](02-02-consistency-and-youngs-characterization.md), [2.3 Condorcet methods and Kemeny](02-03-condorcet-methods-and-kemeny.md)

## Why this matters

[1.3](01-03-arrow-as-a-map.md) read Arrow's theorem as a map: keep the unrestricted domain, Pareto and non-dictatorship, give up [independence of irrelevant alternatives](../reference.md#independence-of-irrelevant-alternatives), and rules appear. The largest family on that side of the wall counts positions: a first place earns so many points, a second place fewer, and the most points wins. Plurality, which elects the UK House of Commons ([`political-institutions` 1.1](../../political-institutions/lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md) counts it), is one; the Eurovision Song Contest's 12, 10, 8, …, 1 is another. This lesson proves the one pairwise guarantee Borda's rule has, and shows, with Condorcet's own example, the guarantee no point system can have.

## The idea

A ranking says more than a top choice, and a scoring rule spends that information as points. Every rule in the family is the same machine with a different price list, and on three candidates the price list is one dial: what a second place is worth relative to a first. Turn the dial on a single, fixed profile and the winner can pass through all three candidates (Picture).

The dial was the subject of an eighteenth-century quarrel at the Paris Academy of Sciences. Jean-Charles de Borda proposed equal steps between places (published 1784). Condorcet replied in his *Essai* (1785) that the right test is head-to-head majority, and built an 81-voter electorate on which no point system elects the head-to-head winner.

Equal steps have one hidden virtue. Ranking $x$ above $k$ rivals gives $x$ exactly $k$ Borda points, one per rival beaten on that ballot. So a Borda score is a count of pairwise victories summed over all pairs, and that is enough to keep out the candidate who loses every pairwise contest. It is not enough to let in the candidate who wins every one.

## The result

**Setting.** Voters $N = \{1, \dots, n\}$; alternatives $A$ with $|A| = m \ge 3$; a profile $\mathbf{P} = (\succ_1, \dots, \succ_n)$ of strict rankings. $r_i(x) \in \{1, \dots, m\}$ is the position of $x$ on voter $i$'s ballot (1 is top), and $n(x,y)$ is the number of voters ranking $x$ above $y$. Condorcet winners and losers are as in [1.1](01-01-profiles-rules-and-the-majority-relation.md).

**Definition ([scoring rule](../reference.md#scoring-rule)).** A scoring vector is $s = (s_1, \dots, s_m)$ with $s_1 \ge \dots \ge s_m$ and $s_1 > s_m$. The score of $x$ is

$$S_s(x; \mathbf{P}) = \sum_{i \in N} s_{r_i(x)},$$

and the winners are the alternatives of maximal score. *In words:* each ballot pays every candidate according to its place, and the richest wins. As stated this is a social choice correspondence (ties allowed); a tie-break makes it a function, and ranking everyone by score makes it a social welfare function. Three are named:

- [plurality](../reference.md#plurality): $(1, 0, \dots, 0)$;
- [Borda count](../reference.md#borda-count): $(m-1, m-2, \dots, 1, 0)$;
- [antiplurality](../reference.md#antiplurality): $(1, \dots, 1, 0)$, a vote against one candidate.

**Lemma 1 (only the shape matters).** For $a > 0$ and any $b$, the vector with entries $a s_k + b$ gives every candidate the score $a S_s(x) + nb$, so it ranks candidates identically. Hence for $m = 3$ every scoring rule equals $(1, s, 0)$ with $s = (s_2 - s_3)/(s_1 - s_3) \in [0, 1]$: plurality at $s = 0$, Borda at $s = \tfrac12$, antiplurality at $s = 1$. *In words:* on three candidates the whole family is one number, the price of a second place.

Every scoring rule is anonymous and neutral, and every one violates IIA: whether $x$ outscores $y$ depends on where the other candidates sit ([`political-philosophy` 5.4](../../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md) works a Borda case).

**Theorem 1 (Borda's pairwise identity).** For every profile of strict rankings and every $x \in A$,

$$B(x) = \sum_{y \ne x} n(x, y),$$

where $B$ is the Borda score. *In words:* a Borda score is the total, over all rivals, of the voters who prefer $x$ to that rival.

*Proof.*

1. On ballot $i$, $x$ at position $r$ earns $m - r$ Borda points, and exactly $m - r$ alternatives sit below it. So the points equal $\#\{y : x \succ_i y\}$.
2. Summing over ballots, $B(x) = \sum_{i \in N} \sum_{y \ne x} \mathbf{1}[x \succ_i y]$.
3. Exchanging the finite sums gives $\sum_{y \ne x} \sum_{i} \mathbf{1}[x \succ_i y] = \sum_{y \ne x} n(x,y)$. ∎

**Corollary.** Borda never elects a [Condorcet loser](../reference.md#condorcet-loser), not even in a tie.

*Proof.*

1. Rankings are strict, so $n(x,y) + n(y,x) = n$ for each pair. Summing Theorem 1 over all $x$ counts each of the $\binom{m}{2}$ pairs once with total $n$, so the mean Borda score is $n(m-1)/2$.
2. If $x$ is a Condorcet loser, $n(x,y) < n/2$ for every $y \ne x$, so $B(x) < (m-1)n/2$, strictly below the mean.
3. If one score is strictly below the mean, some score is strictly above it. That candidate outscores $x$. ∎

*In words:* the candidate who loses every head-to-head is below average on Borda, so someone beats it. The mirror argument puts a Condorcet winner strictly above average, so Borda never ranks it last. Above average is not first, though.

**Theorem 2 (Condorcet's 81 voters).** Take the profile 30: A ≻ B ≻ C, 1: A ≻ C ≻ B, 29: B ≻ A ≻ C, 10: B ≻ C ≻ A, 10: C ≻ A ≻ B, 1: C ≻ B ≻ A. A is the [Condorcet winner](../reference.md#condorcet-winner), yet under every scoring vector $S_s(B) \ge S_s(A)$, with equality only when $s_1 = s_2$.

*Proof.*

1. $n(A,B) = 30 + 1 + 10 = 41 > 40$ and $n(A,C) = 30 + 1 + 29 = 60 > 21$, so A is the Condorcet winner. (C loses 21–60 and 12–69: the Condorcet loser.)
2. Positions: A is first on 31 ballots, second on 39, third on 11. B is first on 39, second on 31, third on 11.
3. $S_s(B) - S_s(A) = (39 - 31)s_1 + (31 - 39)s_2 + (11 - 11)s_3 = 8(s_1 - s_2) \ge 0$. ∎

*In words:* B has eight more first places and A eight more seconds, so no price list that values a first at least as highly as a second lets A pass B. At $s_1 = s_2$ (antiplurality) they tie at 70; A never wins outright. This is [Condorcet's 81-voter example](../reference.md#condorcets-81-voter-example). Peter Fishburn (1974) extended it to every $m \ge 3$: there are profiles on which the Condorcet winner is outscored by at least $m - 2$ rivals under every scoring rule. So no scoring rule is Condorcet-consistent; [2.2](02-02-consistency-and-youngs-characterization.md) explains why with an axiom. Donald Saari's geometry of positional voting, which maps every outcome pattern the dial can produce, is named here only.

**Where the argument is weakest.** Both theorems are about complete, strict ballots: step 1 of the Corollary needs $n(x,y) + n(y,x) = n$. Real Borda-style ballots are often truncated, and the score then depends on a convention for unranked candidates that this lesson does not settle. The deeper attack is on what Theorem 1 does *not* say. Borda sums the sizes of pairwise majorities; majority rule reads only their signs. A Borda defender (Saari among them) reads the identity as Borda's credential: it weighs every pairwise contest. A Condorcet defender reads it as the indictment: a landslide over a weak third candidate can outweigh a narrow loss in the contest that matters. The identity is common ground; which reading is right is not settled by it.

## Picture

![Scores of three candidates as straight lines in the second-place weight s from 0 to 1, for the 13-voter profile of Example 1. A is flat at 7, B rises from 6 to 9, C rises from 0 to 10. A is highest for s below one third, B between one third and six sevenths, which includes Borda at one half, and C above six sevenths.](assets/02-01-fig1.svg)

On a fixed profile each score is linear in $s$, so the winner is the upper envelope of $m$ lines and changes only where two lines cross. Here the dial alone hands the election to each of the three candidates in turn.

## Worked examples

**Example 1 (clean): one profile, three winners.** Thirteen voters: 3: A ≻ B ≻ C, 4: A ≻ C ≻ B, 6: B ≻ C ≻ A.

Position counts: A is first 7 times, never second, third 6 times; B is first 6, second 3, third 4; C is first 0, second 10, third 3. Under $(1, s, 0)$:

$$S(A) = 7, \quad S(B) = 6 + 3s, \quad S(C) = 10s.$$

- Plurality ($s = 0$): A 7, B 6, C 0. **A wins.**
- Borda $(2, 1, 0)$: A 14, B 15, C 10. **B wins.** Check by Theorem 1: $B(\mathrm{B}) = n(\mathrm{B},\mathrm{A}) + n(\mathrm{B},\mathrm{C}) = 6 + 9 = 15$.
- Antiplurality ($s = 1$): A 7, B 9, C 10. **C wins.**

In general, B passes A when $6 + 3s > 7$, that is $s > \tfrac13$, and C passes B when $10s > 6 + 3s$, that is $s > \tfrac67$. So A wins on $[0, \tfrac13)$, B on $(\tfrac13, \tfrac67)$, C on $(\tfrac67, 1]$, with ties at the two break points.

Now the majority relation: A beats B 7–6 and C 7–6, so A is the Condorcet winner; C loses to A 6–7 and to B 4–9, so C is the Condorcet loser. Antiplurality elects the Condorcet loser here, which the Corollary forbids Borda to do. The profile did not choose the winner; the price of a second place did.

**Example 2 (where the hypothesis bites): losers are not winners.** The Corollary keeps a Condorcet *loser* out. Does Borda therefore let a Condorcet *winner* in? Run it on Condorcet's profile with Theorem 1:

$$\begin{aligned}
B(\mathrm{A}) &= n(\mathrm{A},\mathrm{B}) + n(\mathrm{A},\mathrm{C}) = 41 + 60 = 101,\\
B(\mathrm{B}) &= n(\mathrm{B},\mathrm{A}) + n(\mathrm{B},\mathrm{C}) = 40 + 69 = 109,
\end{aligned}$$

and $B(\mathrm{C}) = 21 + 12 = 33$. B wins by 8, because its 69–12 rout of C outweighs a one-vote loss to A. Delete C and Borda on two candidates is majority rule: A wins 41–40. The A-versus-B verdict turns on where C sits, which is exactly the IIA failure Arrow's map predicted for this whole family. Theorem 2 says no other point system rescues A either.

## Watch out

- **You might think a rule that never elects the Condorcet loser must elect the Condorcet winner when there is one.** They are independent properties. Borda has the first and not the second (Example 2); [2.3](02-03-condorcet-methods-and-kemeny.md)'s Condorcet methods have the second by construction.
- **You might think every sensible scoring rule keeps out the Condorcet loser.** Antiplurality elected one in Example 1, and plurality can too (P2). On three candidates Borda is the only rule in the family that never does (P3).
- **You might think Theorem 2 says A loses under every scoring rule.** It says A never wins *outright*: at $s_1 = s_2$ A and B tie at 70. And it is a fact about one profile; Fishburn's generalization is what makes it a fact about the family. Dropping "outright" or "on this profile" overstates it.

## One-liner

> A scoring rule is a price list for places; Borda's equal steps make its score a sum of pairwise wins, which keeps out the Condorcet loser but, as Condorcet's 81 voters show, no price list guarantees the Condorcet winner.

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* Nine voters rank four candidates: 2: B ≻ C ≻ A ≻ D, 2: B ≻ D ≻ A ≻ C, 2: C ≻ A ≻ D ≻ B, 3: D ≻ C ≻ A ≻ B.

(a) Find the plurality, Borda $(3, 2, 1, 0)$ and antiplurality winners.
(b) Find the Condorcet winner, if any, and check the Borda score of that candidate by Theorem 1.

**P2 (🟡)** *(Formal (a), counterexample · Formal (b), proof.)* Three candidates.

(a) Build a 7-voter profile in which one candidate is the unique plurality winner and also the Condorcet loser.
(b) Prove that no profile with fewer than 7 voters does this, and that no 8-voter profile does either.

**P3 (🔴, optional)** *(Formal.)* Show that for every $s \in [0, 1]$ with $s \ne \tfrac12$ there is a profile on which the rule $(1, s, 0)$ uniquely elects the Condorcet loser. Conclude, with the Corollary, which three-candidate scoring rules never elect a Condorcet loser. *Hint:* for $s > \tfrac12$ put the loser second on almost every ballot; for $s < \tfrac12$ put it first on just under half.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) Plurality: first places B 4, D 3, C 2, A 0. **B wins.**

Borda $(3,2,1,0)$:

- A: $2(1) + 2(1) + 2(2) + 3(1) = 11$
- B: $2(3) + 2(3) + 0 + 0 = 12$
- C: $2(2) + 0 + 2(3) + 3(2) = 16$
- D: $0 + 2(2) + 2(1) + 3(3) = 15$

Total $54 = 9 \times 6$. **C wins.**

Antiplurality: last places B 5, C 2, D 2, A 0, so scores $9 - \text{last}$: A 9, C 7, D 7, B 4. **A wins.**

(b) D against each rival: D ≻ A on the 2 B ≻ D ≻ A ≻ C and 3 D-first ballots, 5–4; D ≻ B on the 2 C ≻ A ≻ D ≻ B and 3 D-first ballots, 5–4; D ≻ C on the 2 B ≻ D ≻ A ≻ C and 3 D-first ballots, 5–4. **D is the Condorcet winner.** Theorem 1: $B(\mathrm{D}) = 5 + 5 + 5 = 15$, matching the tally. Four rules, four winners; Borda put the Condorcet winner second, as Theorem 2 allows.

**Wrong turns:** scoring antiplurality as "count of last places" and electing B (the most-vetoed candidate). Reading D's three first places as a plurality win: B has four.

---

**P2** *(Formal (a), counterexample · Formal (b), proof.)*

**Accept:** any 7-voter profile in which some $x$ has strictly more first places than each rival and loses both pairwise contests. One verified model answer:

(a) 3: A ≻ B ≻ C, 2: B ≻ C ≻ A, 2: C ≻ B ≻ A. Plurality A 3, B 2, C 2: A wins alone. Pairwise B beats A 4–3 and C beats A 4–3: A is the Condorcet loser. (B, beating C 5–2, is the Condorcet winner; Borda gives B 9, A 6, C 6, as the Corollary requires.)

(b) Let $x$ be the unique plurality winner with $k$ first places, among $n$ voters.

1. A voter who ranks $x$ first ranks no $y$ above $x$, so $n(y,x) \le n - k$. Being a Condorcet loser needs $n(y,x) > n/2$, hence $k < n/2$.
2. Uniqueness gives each of the two rivals at most $k - 1$ first places, so $n \le k + 2(k-1) = 3k - 2$, hence $k \ge (n+2)/3$.
3. So an integer $k$ must satisfy $(n+2)/3 \le k < n/2$. For $n = 1, 2, 3, 4$ the lower bound is at least the upper; for $n = 5$ the interval is $[2.33, 2.5)$, for $n = 6$ it is $[2.67, 3)$, for $n = 8$ it is $[3.33, 4)$: no integer in any of them. For $n = 7$ it is $[3, 3.5)$, so $k = 3$, as in (a). ∎

**Wrong turns:** proving only "$n > 4$" by treating $k$ as real; the integer constraint is what kills 5, 6 and 8. Letting a non-$x$ voter rank $x$ second in (a): with only 7 voters every non-$x$ voter must put $x$ last.

---

**P3** *(Formal.)*

**Accept:** any family of profiles with the stated property for each $s \ne \tfrac12$, with the Condorcet-loser check and the score inequality. One verified model answer, with C the loser:

*Case $s > \tfrac12$.* For $k \ge 1$: $k$: A ≻ C ≻ B, $k$: B ≻ C ≻ A, 1: A ≻ B ≻ C, 1: B ≻ A ≻ C ($n = 2k + 2$). Pairwise, A beats C $k + 2$ to $k$, and B likewise, so C is the Condorcet loser. Scores: $S(\mathrm{C}) = 2ks$ and $S(\mathrm{A}) = S(\mathrm{B}) = (k + 1) + s$. C wins uniquely iff $2ks > k + 1 + s$, iff $k(2s - 1) > 1 + s$, which holds for every integer $k > (1+s)/(2s - 1)$. At $s = \tfrac34$, $k = 4$: C 6, A and B $\tfrac{23}{4}$.

*Case $s < \tfrac12$.* For $j \ge 1$: $j$: C ≻ A ≻ B, $j$: C ≻ B ≻ A, $j + 1$: A ≻ B ≻ C, $j + 1$: B ≻ A ≻ C ($n = 4j + 2$). A beats C $2j + 2$ to $2j$, and B likewise. Scores: $S(\mathrm{C}) = 2j$ and $S(\mathrm{A}) = S(\mathrm{B}) = (j + 1) + s(2j + 1)$. C wins uniquely iff $j(1 - 2s) > 1 + s$, which holds for every integer $j > (1+s)/(1 - 2s)$. At $s = \tfrac14$, $j = 3$: C 6, A and B $\tfrac{23}{4}$.

*Conclusion.* Every $(1, s, 0)$ with $s \ne \tfrac12$ can elect a Condorcet loser; by the Corollary, $s = \tfrac12$ cannot. By Lemma 1, the three-candidate scoring rules that never elect a Condorcet loser are exactly Borda and its positive affine rescalings.

**Wrong turns:** checking only one rival: C must lose to A *and* B. Fixing one profile for all $s$: the required electorate grows without bound as $s \to \tfrac12$, because the needed $k$ or $j$ exceeds $(1+s)/|1 - 2s|$.

</details>

## Flashback

**From Lesson [1.3](01-03-arrow-as-a-map.md) (Arrow as a map):** *(Formal (a)–(b) · Exegetical (c).)* Five voters rank three alternatives. The **4-of-5 rule** sets $x \succ_F y$ iff at least four voters rank $x$ above $y$, and $x \sim_F y$ otherwise. Its output is complete, and it satisfies unrestricted domain, weak Pareto, IIA and non-dictatorship.

(a) Build a profile on which $\succ_F$ is not transitive.

(b) Prove that no voter has a veto.

(c) In two sentences: why is the rule a counterexample neither to Arrow's theorem nor to Gibbard's oligarchy theorem?

<details>
<summary>Solution</summary>

**Accept (a):** any five-voter profile with $x \succ_F y$ and $y \succ_F z$ but not $x \succ_F z$, counts shown.

**Worked arithmetic (a):** Model answer: 3: C ≻ A ≻ B, 1: A ≻ B ≻ C, 1: B ≻ C ≻ A. C is above A on the three C-first ballots and on B ≻ C ≻ A: 4 voters, so $C \succ_F A$. A is above B on the three C-first ballots and on A ≻ B ≻ C: 4 voters, so $A \succ_F B$. C is above B only on the three C-first ballots, so $C \sim_F B$. The strict part does not chain.

The shape is forced. The two sets of four voters overlap in at least three, each of whom ranks C ≻ A ≻ B; keeping $n(C, B) \le 3$ makes the overlap exactly three and pins the other two voters to A ≻ B ≻ C and B ≻ C ≻ A. By script, every failure on three alternatives is this profile up to relabelling.

**Worked arithmetic (b):** Fix voter $i$ and alternatives $x, y$. Let $i$ rank $x$ above $y$ and the other four rank $y$ above $x$. Then $n(y, x) = 4$, so $y \succ_F x$ against $i$'s strict preference, and $i$ cannot block it. For voter 1: 1: A ≻ B ≻ C, 4: B ≻ A ≻ C gives $B \succ_F A$.

**Must hit, strict (c):**

- Arrow's theorem constrains only rules whose output is a complete *transitive* ordering; (a) shows this output is not transitive, so the rule escapes by dropping O, as majority rule does.
- Gibbard's oligarchy theorem needs complete *quasi-transitive* output, and (a) refutes quasi-transitivity too. So the theorem does not apply, and the missing oligarchy (whose members would each hold the veto that (b) rules out) contradicts nothing.

**Wrong turns:** hunting for a strict cycle. With three alternatives there is none: each voter agrees with at most two arcs of a 3-cycle, so a strict cycle needs $4 \times 3 = 12$ agreements from at most $5 \times 2 = 10$. Reading (b) as a failure of non-dictatorship or of Pareto. Treating Gibbard's theorem as applying to any rule satisfying U, WP and IIA, without its hypothesis on the output.

**Model answer (c):** Arrow's theorem concerns rules whose output is complete and transitive, and (a) shows this one's is not, so the rule satisfies every other condition by giving up the ordering. Gibbard's theorem needs the strict part to be transitive, which (a) also refutes, so it does not force an oligarchy, and the absence of any veto in (b) is no contradiction.

</details>

## Connections

- **Backward:** [1.1](01-01-profiles-rules-and-the-majority-relation.md) supplied $n(x,y)$ and Condorcet winners and losers; Theorem 1 rewrites the Borda score in that language. [1.3](01-03-arrow-as-a-map.md) predicted that dropping IIA opens a family of rules, and Example 2 shows the IIA failure doing the work. Arrow's proof itself is [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md).
- **Forward:** [2.2](02-02-consistency-and-youngs-characterization.md) characterizes scoring rules by consistency and explains Theorem 2 structurally; [2.3](02-03-condorcet-methods-and-kemeny.md) builds the rules that do elect Condorcet winners; [3.1](03-01-manipulation-and-strategy-proofness.md) shows that the same sensitivity to third candidates lets Borda voters bury a rival.
- **Sideways:** the counting of plurality ballots, and its effects on party systems, is [`political-institutions` 1.1](../../political-institutions/lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md). Whether IIA failures of this kind damage the case for democracy is argued in [`political-philosophy` 5.4](../../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md).

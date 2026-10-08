# Social Choice · Lesson 3.4: Single-crossing and value restriction

> ⏱ ~15 min · Module 3: Strategy and restricted domains · Builds on: [3.3 Single-peakedness: Black and Moulin](03-03-single-peakedness-black-and-moulin.md), [1.1 Profiles, rules and the majority relation](01-01-profiles-rules-and-the-majority-relation.md) · Unlocks: [4.1 Sen's liberal paradox](04-01-sens-liberal-paradox.md)

## Why this matters

[3.3](03-03-single-peakedness-black-and-moulin.md) found one domain where majority rule is transitive: preferences [single-peaked](../reference.md#single-peaked-preferences) on a line of alternatives. Plenty of political choices have no such line. Kevin Roberts (1977) studied votes over linear income tax schedules, where each alternative is a tax rate paired with a transfer rather than a point on an obvious line, and still found a decisive middle voter, because the *voters* line up by income even though the options do not. This lesson proves that result in general ordinal form, then finds the condition under every such domain, Amartya Sen's value restriction (1966): exactly what a majority cycle needs. That shows why a second policy dimension brings cycles back.

## The idea

Line up the voters by income. Take any two tax packages. If some voter prefers the less redistributive one, everyone richer than her does too. So for every pair of options, the line of voters splits at a single cut point: one side prefers one option, the other side the other.

The voter in the middle of the line is always on the bigger side of the cut. Wherever the cut falls, more than half the line lies on her side of it. So majority rule simply copies her ranking. Her ranking is transitive, so the majority relation is too, and her favorite is the Condorcet winner. Nothing here assumes the options sit on a line; only the voters do.

Value restriction comes at it from the other end: what does a cycle need? A three-way cycle needs rock-paper-scissors voters: each option first for some voter, middle for some voter and last for some voter. Rule out any one of those nine (option, position) cells, in every triple, and cycles become impossible.

## The result

**Setting.** Voters $N = \{1, \dots, n\}$; alternatives $A$; voter $i$ has a strict ranking $\succ_i$; the profile is $\mathbf{P} = (\succ_1, \dots, \succ_n)$. $n(x,y)$ is the number of voters ranking $x$ above $y$, and the [majority relation](../reference.md#majority-relation) is $x \, M \, y$ iff $n(x,y) > n(y,x)$. With strict rankings and $n$ odd, $n(x,y) + n(y,x) = n$, so exactly one of $x \, M \, y$ and $y \, M \, x$ holds.

**Definition ([single-crossing](../reference.md#single-crossing)).** $\mathbf P$ is single-crossing if the voters can be labelled $1, \dots, n$ so that for every pair $x, y$ the set $S_{xy} = \{ i : x \succ_i y \}$ is an initial segment $\{1, \dots, k\}$ or a final segment $\{k, \dots, n\}$, empty and $N$ included.

*In words:* walking along one fixed line of voters, each pair's verdict flips at most once.

**Theorem 1 ([representative voter theorem](../reference.md#representative-voter-theorem)).** Let $\mathbf P$ be single-crossing in the order $1, \dots, n$, with $n$ odd, and let $m = (n+1)/2$. Then for all $x \neq y$, $x \, M \, y$ if and only if $x \succ_m y$.

*In words:* the majority relation *is* the middle voter's ranking, so it is transitive and her top choice is the Condorcet winner. (Roberts's version concerned linear tax schedules; Joshua Gans and Michael Smart, 1996, gave the general ordinal single-crossing condition and showed the median voter is decisive in every pairwise vote.)

*Proof.* Fix $x \neq y$.

1. By single-crossing, $S_{xy} = \{1, \dots, k\}$ or $S_{xy} = \{k, \dots, n\}$ for some $k$.
2. If $S_{xy} = \{1, \dots, k\}$: $m \in S_{xy} \iff k \ge m \iff |S_{xy}| \ge \tfrac{n+1}{2}$.
3. If $S_{xy} = \{k, \dots, n\}$: $m \in S_{xy} \iff k \le m \iff |S_{xy}| = n - k + 1 \ge n - m + 1 = \tfrac{n+1}{2}$.
4. For odd $n$, $|S_{xy}| \ge \tfrac{n+1}{2}$ iff $n(x,y) > n/2$ iff $n(x,y) > n(y,x)$. So $x \, M \, y \iff m \in S_{xy} \iff x \succ_m y$. ∎

With $n$ even, the same steps give: $x \, M \, y$ iff *both* middle voters $n/2$ and $n/2 + 1$ prefer $x$, and the pair ties when they disagree. So $M$ is the intersection of two rankings, hence transitive, but ties need not be (Watch out).

**Definition ([value restriction](../reference.md#value-restriction), Sen 1966).** A set of strict rankings is *value-restricted on the triple* $\{x, y, z\}$ if some alternative in the triple is never best, or never middle, or never worst among the three, in every ranking of the set. A profile is value-restricted if this holds on every triple.

*In words:* in every triple, one of the nine (alternative, position) cells is empty.

**Theorem 2 (Sen 1966, strict-ranking version).** If every ranking is strict, $n$ is odd and $\mathbf P$ is value-restricted, then $M$ is transitive.

*In words:* no cell left empty, no cycle possible.

*Proof.* $M$ is complete and asymmetric, so it is transitive iff no triple carries a [cycle](../reference.md#condorcet-cycle): if $x \, M \, y \, M \, z$ but not $x \, M \, z$, then $z \, M \, x$. Suppose a triple cycles and let $a$ be the alternative its restriction names; $x$ and $y$ are the other two. In a cycle each alternative beats exactly one and loses to exactly one.

1. *$a$ never worst.* $a$ loses to some $x$, so a majority has $x \succ_i a$. Since $a$ is not last, each of them ranks $x \succ_i a \succ_i y$. That majority gives $x \, M \, y$, so $x$ beats both others: no cycle.
2. *$a$ never best.* $a$ beats some $y$, so a majority has $a \succ_i y$. Since $a$ is not first, each ranks $x \succ_i a \succ_i y$, so again $x$ beats both: no cycle.
3. *$a$ never middle.* $a$ beats some $y$ and loses to some $x$. Voters with $a \succ_i y$ have $a$ not last, hence first; voters with $x \succ_i a$ have $a$ last. These are two disjoint majorities: impossible. ∎

**Theorem 3 (the converse, for a domain).** On a triple, a set $D$ of strict rankings fails value restriction iff it contains a *Latin square* (Ward's 1965 condition): three cyclic shifts such as $x \succ y \succ z$, $y \succ z \succ x$, $z \succ x \succ y$. One voter on each gives a cycle.

*In words:* value restriction is exactly the condition on *which rankings are allowed* that protects every odd electorate.

*Proof.* The six rankings split into two cyclic classes $C^+$ and $C^-$ (the even and odd rearrangements of a reference ranking). Each class puts every alternative in every position exactly once. If $D$ contains a class, every cell is filled and value restriction fails. Otherwise $D$ omits some $r \in C^+$ and some $s \in C^-$. The cells left empty by $C^+ \setminus \{r\}$ are exactly $r$'s three cells, and likewise for $s$. Now $s$ is $r$ with two positions swapped (the odd rearrangements of three things are the transpositions), so $r$ and $s$ agree in exactly one position. That cell is empty in $D$. ∎

**How the domains nest.** On an axis $x, y, z$, single-peakedness keeps $y$ off the bottom. A single-crossing profile on a triple walks part of one of two three-step paths from a ranking to its reverse; on $x \succ y \succ z \to x \succ z \succ y \to z \succ x \succ y \to z \succ y \succ x$ the alternative $y$ is never best, and on the other path it is never worst. So Theorem 2 contains the odd-$n$ case of Black's theorem ([3.3](03-03-single-peakedness-black-and-moulin.md)) and the transitivity half of Theorem 1, while neither of single-peakedness and single-crossing contains the other: Example 1 below is single-peaked on no axis, and the three rankings A ≻ B ≻ C ≻ D, B ≻ C ≻ D ≻ A, C ≻ B ≻ A ≻ D are single-peaked on the axis A, B, C, D yet single-crossing in no order.

**Where the argument is weakest.** Every theorem here restricts the *whole* profile, and the restriction is one-dimensional in disguise: single-crossing needs one ordering of voters that works for every pair, which is what income provides. Give policies two dimensions and Euclidean preferences and Latin squares return: P3 builds one from three voters in the plane. Charles Plott (1967) showed a point that beats every other needs a knife-edge symmetry of the other voters' ideal points around it; Richard McKelvey (1976) showed that without such a point, majority cycles connect every policy to every other, so an agenda-setter can reach anything. Both are owned by [`political-economy` 2.2](../../political-economy/lessons/02-02-multidimensional-voting-and-chaos.md). Without the restriction you are back on [Arrow's](01-03-arrow-as-a-map.md) unrestricted domain.

## Picture

![A grid with one row per pair of A, B, C, D and one column per voter in line order; each cell shows the preferred alternative, and every row changes shade at most once. The boxed fifth column, B over D over A over C, matches the majority winner of every row.](assets/03-04-fig1.svg)

One cut per row, so the middle column always lands on the bigger side.

## Worked examples

**Example 1 (clean): the middle voter decides everything.** Nine voters, in line order:

| Voters | Ranking |
|---|---|
| 1–3 | A ≻ B ≻ C ≻ D |
| 4 | A ≻ B ≻ D ≻ C |
| 5–6 | B ≻ D ≻ A ≻ C |
| 7–9 | D ≻ B ≻ C ≻ A |

*Single-crossing.* The voters preferring the first of each pair: A over B, $\{1,\dots,4\}$; A over C, $\{1,\dots,6\}$; A over D, $\{1,\dots,4\}$; B over C, everyone; B over D, $\{1,\dots,6\}$; C over D, $\{1, 2, 3\}$. Every set is an initial segment.

*Theorem 1.* Voter 5 ranks B ≻ D ≻ A ≻ C, so that is $M$: B beats A 5–4, D 6–3 and C 9–0; D beats A 5–4 and C 6–3; A beats C 6–3. B is the Condorcet winner, although plurality picks A (4 first places, against 3 for D and 2 for B).

*Not single-peaked.* A, C and D are each someone's last choice. On any axis a single-peaked voter's worst option is an endpoint, and an axis has only two.

**Example 2 (where the hypothesis bites): one line for all pairs.** Nine voters: 4 X ≻ Y ≻ Z, 3 Y ≻ Z ≻ X, 2 Z ≻ X ≻ Y. Each pair *separately* splits the voters into two blocs, so each could be put on a line with one crossing. But single-crossing needs a single line. The voters preferring Y to X are exactly the 3 Y ≻ Z ≻ X voters; those preferring X to Z are exactly the 4 X ≻ Y ≻ Z voters; those preferring Z to Y are exactly the 2 Z ≻ X ≻ Y voters. Each of these three disjoint, non-empty sets must be an end segment of the same line, and a line has two ends. So no order works.

Value restriction fails as well: the three rankings are a Latin square. The majority duly cycles: X beats Y 6–3, Y beats Z 7–2, Z beats X 5–4. Theorem 3 says only that *some* weights on a Latin square cycle. With weights 5, 1, 1 instead, the majority is the transitive X ≻ Y ≻ Z.

## Watch out

- **You might think single-crossing assumes the alternatives lie on a line.** It orders the *voters*; the alternatives can be tax schedules, and Example 1 is single-peaked on no axis.
- **You might think it's enough that each pair splits the voters at one point.** Any two-bloc split does that. The theorem needs one order of voters for all pairs (Example 2).
- **You might drop "$n$ odd".** With four voters A ≻ B ≻ C, A ≻ B ≻ C, B ≻ C ≻ A, C ≻ B ≻ A, single-peaked on A, B, C and value-restricted, B beats C 3–1 while A ties both B and C 2–2. Then "at least as good as" is not transitive: C ties A and A ties B, yet B strictly beats C. Sen's own theorem allows indifference and adds a parity condition on the voters who are not indifferent within the triple.

## One-liner

> Order the voters so every pair splits them once and the middle voter's ranking *is* the majority; more generally, a cycle needs a Latin square, and forbidding one cell per triple forbids cycles. A second dimension supplies Latin squares again.

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* Nine voters over W, X, Y, Z, listed in scrambled blocs: 1 Y ≻ Z ≻ X ≻ W; 2 W ≻ X ≻ Y ≻ Z; 3 Z ≻ Y ≻ X ≻ W; 1 X ≻ W ≻ Y ≻ Z; 2 X ≻ Y ≻ Z ≻ W.

(a) Order the five blocs so the profile is single-crossing, and for each of the six pairs list the positions of the voters preferring the alphabetically first alternative.

(b) Use Theorem 1 to write down the full majority relation and the Condorcet winner. Check X against Z by direct count, and compare with the plurality outcome.

**P2 (🟡)** *(Formal (a)–(b).)* Eleven voters: 4 E ≻ F ≻ G, 2 F ≻ G ≻ E, 3 G ≻ F ≻ E, 2 E ≻ G ≻ F.

(a) Which clause of value restriction holds? Check it is the only one. Compute $M$ with tallies and confirm it is transitive, as Theorem 2 says it must be.

(b) Prove that no ordering of the eleven voters makes the profile single-crossing, and that it is single-peaked on no axis. Conclude that value restriction is strictly weaker than both.

**P3 (🔴, optional)** *(Formal (a) · Exegetical (b).)* Three voters have Euclidean preferences in the plane (closer is better), with ideal points $v_1 = (0, 0)$, $v_2 = (8, 2)$, $v_3 = (2, 8)$. The policies on the table are $P = (2, 0)$, $Q = (7, 5)$, $R = (0, 6)$.

(a) Find each voter's ranking and show that the majority relation cycles.

(b) In 80 words or fewer: which structure from Theorem 3 do the three rankings form, which hypothesis of Theorems 1–2 does the planar setting break, and what do Plott's and McKelvey's results add?

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) Only the W ≻ X ≻ Y ≻ Z bloc prefers W to X, so it sits at one end; only the Z ≻ Y ≻ X ≻ W bloc prefers Z to Y, so it sits at the other. In between, order the blocs so W only falls and Z only rises in the rankings, which gives the order (or its reverse):

| Positions | Ranking |
|---|---|
| 1–2 | W ≻ X ≻ Y ≻ Z |
| 3 | X ≻ W ≻ Y ≻ Z |
| 4–5 | X ≻ Y ≻ Z ≻ W |
| 6 | Y ≻ Z ≻ X ≻ W |
| 7–9 | Z ≻ Y ≻ X ≻ W |

W over X: $\{1, 2\}$. W over Y: $\{1, 2, 3\}$. W over Z: $\{1, 2, 3\}$. X over Y: $\{1, \dots, 5\}$. X over Z: $\{1, \dots, 5\}$. Y over Z: $\{1, \dots, 6\}$. All initial segments.

(b) The fifth voter ranks X ≻ Y ≻ Z ≻ W, so $M$ is that ranking and X is the Condorcet winner. Tallies: X beats W 7–2, Y 5–4 and Z 5–4; Y beats W 6–3 and Z 6–3; Z beats W 6–3. Directly, X over Z: positions 1–5, so 5 against 4. Plurality ties X and Z at 3 first places each, ahead of W with 2 and Y with 1.

**Wrong turns:** taking the median of the *listed* order (the scrambled list is not single-crossing: W over X falls at positions 2–3). Counting blocs instead of voters when locating the fifth voter.

---

**P2** *(Formal (a)–(b).)*

(a) Positions (first, middle, last): E F G, F G E, G F E, E G F. E is first or last but never middle, so the never-middle clause holds for E. Every other cell is filled: each alternative is first somewhere and last somewhere, and F and G are both middle somewhere. E beats F with 4 + 2 = 6 of 11, E beats G with 6, and F beats G with 4 + 2 = 6. So $M$ is E ≻ F ≻ G, transitive, and E is the Condorcet winner, each win 6–5.

(b) The voters preferring E to F are the 4 E ≻ F ≻ G and 2 E ≻ G ≻ F voters; those preferring F to G are the 4 E ≻ F ≻ G and 2 F ≻ G ≻ E voters. In any single-crossing order both 6-voter sets are end segments. They differ, so they sit at opposite ends. Then they overlap in $6 + 6 - 11 = 1$ position, but they share the four E ≻ F ≻ G voters. Contradiction. Not single-peaked: G is last for the E ≻ F ≻ G voters, E for the F ≻ G ≻ E voters and F for the E ≻ G ≻ F voters, and an axis has only two endpoints. The profile is value-restricted with a transitive $M$, yet in neither smaller domain.

**Wrong turns:** reporting "never best" or "never worst" for some alternative without checking all four rankings. Proving non-single-crossing only for orders that keep identical voters together; the argument above covers every order.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) Squared distances (P, Q, R): voter 1, 4, 74, 36, so P ≻ R ≻ Q. Voter 2, 40, 10, 80, so Q ≻ P ≻ R. Voter 3, 64, 34, 8, so R ≻ Q ≻ P. P beats R (voters 1, 2), R beats Q (voters 1, 3), Q beats P (voters 2, 3), each 2–1: a cycle.

**Must hit, strict (b):**

- The rankings are a Latin square (cyclic shifts: P ≻ R ≻ Q, R ≻ Q ≻ P, Q ≻ P ≻ R), so value restriction fails on this triple.
- The plane provides no single order of voters, or of policies, that every pair respects: the one-dimensional structure behind Theorems 1–2 is gone.
- Plott: an undominated point needs a knife-edge symmetry of ideal points. McKelvey: without one, cycles link every policy to every other (agenda control). Both are cited to `political-economy`.

**Wrong turns:** comparing distances instead of squared distances and making an arithmetic slip; both give the same ranking. Saying the cycle shows Theorem 2 is false: its hypothesis fails here.

**Model answer (b):** The three rankings are cyclic shifts of one another, a Latin square, so the triple is not value-restricted. In two dimensions there is no single order of voters that every pair respects, which is what Theorems 1 and 2 need. Plott showed a policy that beats all others needs a knife-edge symmetry of the other ideal points; McKelvey showed that otherwise cycles connect every policy, so an agenda-setter can reach any outcome.

</details>

## Flashback

**From Lesson [3.2](03-02-proving-gibbard-satterthwaite.md) (Proving Gibbard–Satterthwaite):** *(Formal (a)–(b).)* The veto rule on A, B, C: each voter vetoes her last-ranked alternative, the fewest vetoes wins, and ties go to the alphabetically earlier alternative. Five voters: 2: B ≻ C ≻ A, 2: C ≻ B ≻ A, 1: B ≻ A ≻ C.

(a) Find $f(\mathbf{P})$. Run the lift-to-top construction: compute $f$ on $\mathbf{P}^{AB}$, $\mathbf{P}^{AC}$ and $\mathbf{P}^{BC}$, write $F(\mathbf{P})$, and show in one sentence that $F$ returns this same ranking at every profile.
(b) Name the first step of 3.2's Claim that fails, and say why the failure cannot be blamed on onto. Then exhibit a single-voter manipulation at $\mathbf{P}^{AB}$.

<details>
<summary>Solution</summary>

(a) Vetoes at $\mathbf{P}$: A 4, B 0, C 1, so $f(\mathbf{P}) = B$.

- $\mathbf{P}^{AB}$: all five ballots become B ≻ A ≻ C. C gets 5 vetoes, A and B none, and the tie goes to **A**.
- $\mathbf{P}^{AC}$: 4: C ≻ A ≻ B, 1: A ≻ C ≻ B. B gets 5 vetoes, and A wins the tie: **A**.
- $\mathbf{P}^{BC}$: 2: B ≻ C ≻ A, 2: C ≻ B ≻ A, 1: B ≻ C ≻ A. A gets 5 vetoes, and B wins the tie: **B**.

So $F(\mathbf{P})$ is A ≻ B ≻ C. In any $\mathbf{P}^{xy}$ the third alternative is everyone's last, so $x$ and $y$ both have zero vetoes and the tie-break decides: $F(\mathbf{P})$ is the alphabetical ranking at every profile.

(b) Step 1 holds: the lifted winner is always in the pair. **Step 2 (weak Pareto) fails**: all five voters rank B above A, yet $F(\mathbf{P})$ puts A over B. (Step 6 fails too: $f(\mathbf{P}) = B$ is not the top of $F(\mathbf{P})$.) Onto is not the culprit: A wins when everyone reports A ≻ B ≻ C, B wins at $\mathbf{P}$, and C wins at 2: C ≻ A ≻ B, 3: C ≻ B ≻ A (vetoes A 3, B 2, C 0). Since 3.1's Lemma 2 gives Pareto from strategy-proofness plus onto, strategy-proofness must fail. At $\mathbf{P}^{AB}$ any voter, whose true ranking is B ≻ A ≻ C, can report B ≻ C ≻ A: vetoes A 1, B 0, C 4, and B wins, which she prefers to A. Equivalently, lifting A and B moved nothing past B, so the lift lemma demands B, and the veto rule gives A. No single voter can gain at $\mathbf{P}$ itself; as in 3.2's Example 2, the manipulation sits along the lift.

**Wrong turns:** using 3.2's shortcut that a scoring rule's $F$ is the majority relation, which would give B ≻ C ≻ A; the shortcut needs $s_1 > s_2$, and the veto rule is $(1, 1, 0)$. Blaming onto, as for 3.2's two-winner rule $g$: the veto rule can elect all three alternatives.

</details>

## Connections

- **Backward:** Theorem 2 contains the odd-$n$ case of [3.3](03-03-single-peakedness-black-and-moulin.md)'s Black's theorem, since a single-peaked axis keeps its middle alternative off the bottom of every triple. Example 2's cycle is [1.1](01-01-profiles-rules-and-the-majority-relation.md)'s Condorcet cycle with weights, and under [1.4](01-04-how-often-do-cycles-happen.md)'s impartial culture every Latin square is available, which is why its cycle probabilities are positive. [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md) has the median voter theorem these results generalize.
- **Forward:** [4.1](04-01-sens-liberal-paradox.md) is Sen again, this time with no domain restriction available: the liberal paradox needs only a cycle. [`political-economy`](../../political-economy/syllabus.md) uses single-crossing to make the median-income voter decisive over a tax rate (Meltzer–Richard, its 5.3) and develops Plott and McKelvey (2.2).
- **Sideways:** single-crossing is the ordinal cousin of the Spence–Mirrlees condition in screening and signaling: types ordered so that indifference curves cross once. The same ordering of types that makes separation possible there makes the median voter decisive here.

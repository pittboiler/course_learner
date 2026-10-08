# Political Economy · Lesson 2.2: Multidimensional voting and chaos

> ⏱ ~15 min · Module 2: Electoral competition · Builds on: [2.1 The Downsian spatial model](02-01-the-downsian-spatial-model.md), [`social-choice` 1.4](../../social-choice/lessons/01-04-how-often-do-cycles-happen.md), [`social-choice` 3.4](../../social-choice/lessons/03-04-single-crossing-and-value-restriction.md) · Unlocks: [2.3 Probabilistic voting](02-03-probabilistic-voting.md), [3.5 Agenda setters and veto players](03-05-agenda-setters-and-veto-players.md)

## Why this matters

[2.1](02-01-the-downsian-spatial-model.md) put policy on a line, and the median voter won. Real budgets have at least two dimensions. This lesson shows that one extra dimension almost always leaves **no** policy that a majority cannot beat, that majority votes can then be chained to reach almost anywhere (McKelvey), and that the stability we actually observe has to come from somewhere other than preferences: from rules that restrict what can be proposed (Shepsle) or from voters who look ahead (the uncovered set).

## The idea

On a line, a status quo at the median is safe: any move goes left or right, and one half plus the median voter object. In the plane a move has a *direction*, and for almost any status quo some direction has a majority behind it. Any two voters agree on a compromise closer to both of them than the status quo.

So in two dimensions every policy is vulnerable, and the resulting cycles link every point to every other: whoever controls the order of votes controls the outcome. Equilibrium comes back only in two cases. One is a knife-edge arrangement of voters, Plott's symmetry. The other is an institution that rules out the threatening directions, such as voting on one issue at a time.

## The model

**Setting.** Voters $i \in N = \{1, \dots, n\}$ have ideal points $x_i \in \mathbb{R}^2$ and [Euclidean preferences](../reference.md#euclidean-and-quadratic-utility) $u_i(q) = -\lVert q - x_i \rVert$ over policies $q \in \mathbb{R}^2$: closer is better, and only distance matters. Policy $y$ **beats** $q$ if more than $n/2$ voters strictly prefer $y$. The [win-set](../reference.md#win-set) $W(q)$ is the set of points that beat $q$. The [majority core](../reference.md#majority-core) is the set of $q$ with $W(q) = \varnothing$, the points nothing beats. A core point is a Condorcet winner over the plane.

**Lemma 1 (compromise on a contract line).** Let $L$ be the line through $x_i$ and $x_j$, and let $p$ be the foot of the perpendicular from $q$ to $L$. If $q \notin L$, both $i$ and $j$ strictly prefer $p$ to $q$.

*Proof.* $x_i - p$ lies along $L$ and $q - p$ is perpendicular to it, so by Pythagoras $\lVert x_i - q \rVert^2 = \lVert x_i - p \rVert^2 + \lVert p - q \rVert^2 > \lVert x_i - p \rVert^2$. The same holds for $j$. ∎

*In words:* dropping straight onto the line between two voters moves closer to both of them.

**Proposition 1.** With three voters whose ideal points are not collinear, the core is empty.

*Proof.* Take any $q$. If $q$ lies on none of the three pairwise lines, Lemma 1 with any pair gives a point that beats it 2–1. Two of the lines meet only at an ideal point, so if $q$ is on a line at all, either it is on exactly one, or it is some $x_k$. In the first case use a different pair. In the second, $x_k$ is off the line through the other two (non-collinear), and Lemma 1 with that pair beats $x_k$. ∎

**Theorem 1 (the median-line test).** $q$ is in the core if and only if, for every direction $d$, at most $n/2$ ideal points lie strictly on the side of the line through $q$ that $d$ points to, that is, $\#\{i : (x_i - q) \cdot d > 0\} \le n/2$.

*In words:* $q$ is unbeatable exactly when every line through it splits the voters with no strict majority on either side.

*Proof.* ($\Leftarrow$) Suppose $y$ beats $q$ and let $d = y - q$. Voter $i$ prefers $y$ iff $\lVert x_i - y \rVert^2 < \lVert x_i - q \rVert^2$. Expanding, that is $(x_i - q) \cdot d > \lVert d \rVert^2 / 2 > 0$. So every supporter of $y$ lies strictly on the $d$ side, and there are more than $n/2$ of them, contradicting the hypothesis. ($\Rightarrow$) If some $d$ has more than $n/2$ voters with $(x_i - q)\cdot d > 0$, let $\varepsilon$ be small enough that $\varepsilon \lVert d \rVert^2 / 2$ is below every one of those positive products. Then by the same expansion all of them prefer $q + \varepsilon d$, which beats $q$. ∎

**Corollary ([Plott's conditions](../reference.md#plotts-conditions)).** Let $n$ be odd. If one voter's ideal point is $q$ and the other $n - 1$ voters pair off so that each pair's ideal points lie on opposite rays from $q$, then $q$ is in the core. Conversely, if exactly one voter sits at $q$ and $q$ is in the core, such a pairing exists.

*Proof.* Sufficiency: any line through $q$ puts at most one voter of each pair strictly on a given side, so at most $(n-1)/2 < n/2$. Necessity, sketched: with $n$ odd, a line through $q$ that contains no other ideal point must split the other $n - 1$ voters exactly in half. Rotate it. When it sweeps past a ray carrying $k$ voters, it also sweeps past the opposite ray, carrying $k'$; the halves stay equal only if $k = k'$. ∎

Charles Plott (1967, *American Economic Review*) gave this pairwise-symmetry condition for an odd electorate with smooth preferences. Move one voter a little and the pairing breaks, so with odd $n$ the core is empty for almost every configuration.

**[McKelvey's chaos theorem](../reference.md#mckelvey-chaos-theorem)** (Richard McKelvey, 1976, *Journal of Economic Theory*). With finitely many voters, Euclidean preferences in $\mathbb{R}^m$, $m \ge 2$, and pairwise majority rule: if the core is empty, then for any two policies $x$ and $y$ there is a finite sequence $x = z_0, z_1, \dots, z_k = y$ in which each $z_{j+1}$ beats $z_j$.

*In words:* without a core, the [top cycle](../../social-choice/lessons/01-04-how-often-do-cycles-happen.md) is the entire policy space, so a chair who sets the agenda and faces sincere voters can end anywhere, including at a point every voter thinks is worse than where they started. Norman Schofield (1978, *Review of Economic Studies*) extended the result to smooth preferences; we state it without proof. Example 1 builds a chain.

**Structure-induced equilibrium.** Kenneth Shepsle (1979, *American Journal of Political Science*) asked what institutions add. Suppose the legislature votes one dimension at a time (committee jurisdictions, germaneness rules), so an admissible amendment changes only one coordinate. Call preferences **separable** if each voter's ranking of $q_1$ values does not depend on where $q_2$ is fixed, and vice versa, and is single-peaked with peak $x_{i1}$ (resp. $x_{i2}$). Euclidean preferences are separable, since $\lVert q - x_i \rVert^2 = (q_1 - x_{i1})^2 + (q_2 - x_{i2})^2$.

**Proposition 2 ([structure-induced equilibrium](../reference.md#structure-induced-equilibrium)).** With $n$ odd, separable preferences and one-dimension-at-a-time amendments, $z^* = (\operatorname{med}_i x_{i1}, \operatorname{med}_i x_{i2})$ beats every admissible amendment.

*Proof.* An admissible $y$ differs from $z^*$ in one coordinate $k$. By separability each voter compares $y$ and $z^*$ by her single-peaked ranking on coordinate $k$ alone, with peak $x_{ik}$. By the [median voter theorem](../reference.md#median-voter-theorem) ([`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md)), the median peak $z^*_k$ beats every other value of coordinate $k$. ∎

*In words:* the rule, not the preferences, supplies the equilibrium: $z^*$ is usually beaten by a joint move along both axes, which the rule forbids. Without separability, each issue's median depends on where the other issue sits, and the outcome can depend on the order of votes; Shepsle's paper treats that case, and we do not.

**The [uncovered set](../reference.md#uncovered-set).** $y$ *covers* $x$ if $y$ beats $x$ and $y$ also beats everything $x$ beats. The uncovered set is the set of points nothing covers. It contains the core when the core is nonempty, and Nicholas Miller (1980, *American Journal of Political Science*) introduced it for tournaments. McKelvey (1986, *American Journal of Political Science*), assuming strictly quasi-concave preferences, showed that equilibrium outcomes under three quite different institutions lie in it: two-candidate competition in a large electorate, cooperative bargaining in small committees, and sophisticated voting when the agenda is set endogenously. He also showed that it is bounded, centered on a generalized median set, and smaller the more symmetric the ideal points. Chaos is what a sincere electorate and an all-powerful chair can reach; the uncovered set is the small central region forward-looking players settle in.

**Where the argument is weakest.** McKelvey's chains need voters who vote sincerely on each pair and a chair free to propose anything. Voters who see the agenda coming vote sophisticatedly, shrinking the reachable set to the uncovered set. Theorem 1 and Plott need exact Euclidean (or smooth) preferences and a fixed, finite electorate. Uncertainty about voters smooths vote shares and restores equilibrium ([2.3](02-03-probabilistic-voting.md)). Shepsle's equilibrium needs separability and a rule that sticks. William Riker objected that institutions are themselves chosen by majority, so the instability may reappear one level up, in fights over the rules.

## Picture

![Three voters at 2 comma 1, 8 comma 3 and 4 comma 8 in the plane, each with a circle through the issue-by-issue median z at 4 comma 3. The shaded win-set of z is the union of the lens-shaped overlaps of pairs of circles: a large lens toward the upper right, shared by voters 2 and 3, and two thin slivers. The point p at 4.4 comma 1.8, on the dashed line between voters 1 and 2, lies inside the lower sliver, so it beats z.](assets/02-02-fig1.svg)

Inside a voter's circle she prefers the point to $z$; a point beats $z$ when it lies inside two of the three circles. Wherever $z$ sits, the petals are never empty.

## Worked examples

**Example 1 (clean): the median by issue, beaten and then dragged away.** Voters $x_1 = (2,1)$, $x_2 = (8,3)$, $x_3 = (4,8)$. The issue medians are $\operatorname{med}(2,8,4) = 4$ and $\operatorname{med}(1,3,8) = 3$, so $z^* = (4,3)$. Under one-issue-at-a-time voting it is an equilibrium (Proposition 2).

Now allow a joint move. Project $z^*$ onto the line through $x_1$ and $x_2$: with direction $(6,2)$, $t = \frac{(2,2)\cdot(6,2)}{40} = \frac{2}{5}$, so $p = (2,1) + \frac{2}{5}(6,2) = (4.4, 1.8)$. Squared distances:

| | to $z^*$ | to $p$ |
|---|---|---|
| voter 1 | 8 | 6.4 |
| voter 2 | 16 | 14.4 |
| voter 3 | 25 | 38.6 |

Voters 1 and 2 each gain exactly $\lVert z^* - p \rVert^2 = 1.6$, as Lemma 1 says, and $p$ wins 2–1.

Chaos in action: each step below wins 2–1 (verified by script):

$$\begin{aligned}(4,3) &\to (8,6) \to (0,8) \to (6,-5) \\ &\to (16,3) \to (-8,10) \to (0,-12) \to (24,8).\end{aligned}$$

Seven votes carry the committee about 20.6 units from $z^*$, to a point every voter likes less than $z^*$ (squared distances 533, 281, 400 against 8, 16, 25).

**Example 2 (the hypothesis bites): Plott's knife-edge.** Five voters: $c = (5,5)$ and the pairs $(2,3), (8,7)$ and $(3,8), (7,2)$. Relative to $c$ these are $(-3,-2), (3,2)$ and $(-2,3), (2,-3)$: opposite rays. By the Corollary, $c$ is the core; a grid search finds nothing that beats it.

Move one voter from $(8,7)$ to $(8,9)$. In direction $d = (-1,1)$ the products $(x_i - c)\cdot d$ are now $0, 1, 1, 5, -5$, so three voters lie strictly on the $d$ side and Theorem 1 fails. Concretely, $y = (4.5, 5.5)$ beats $c$ 3–2: squared distances fall from 13 to 12.5 for $(2,3)$, from 25 to 24.5 for $(8,9)$, and from 13 to 8.5 for $(3,8)$. A grid search finds no core point after the move: two units of movement by one voter destroyed the equilibrium.

## Watch out

- **You might think** Proposition 1 shows that two dimensions always empty the core, but actually it needs an odd electorate. With $n$ even, ties keep points unbeaten. Every four voters in general position have a core point (P3). The odd-$n$ hypothesis is the one people drop when they quote Plott.
- **You might think** the issue-by-issue median is a Condorcet winner because it wins every vote on each issue. It is not: Example 1's $p$ beats it. It is an equilibrium only *relative to a rule* that bans joint amendments.
- **You might think** McKelvey predicts that legislatures wander. He showed what a chair *can* reach with sincere voters. With sophisticated voters or competing proposers, outcomes are pulled into the uncovered set.

## One-liner

> In two or more dimensions a policy survives majority rule only on Plott's knife-edge; otherwise majority votes can reach anywhere (McKelvey), and stability has to come from rules that restrict the agenda (Shepsle) or from players who look ahead (the uncovered set).

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* Three voters have Euclidean preferences with ideal points $A = (0,1)$, $B = (8,5)$, $C = (4,9)$. The status quo is $q = (3,5)$.

(a) Find the point $p$ on the line through $A$ and $B$ closest to $q$, and show by squared distances that $p$ beats $q$.
(b) Find the point $r$ on the line through $A$ and $C$ closest to $p$, and show that $r$ beats $p$. Then compare $q$ with $r$. What have you built?

**P2 (🟡)** *(Formal (a)–(b) · Exegetical (c).)* A three-member council sets parks spending $q_1$ and roads spending $q_2$. Utilities are separable quadratics $u_i(q) = -a_i (q_1 - x_{i1})^2 - b_i (q_2 - x_{i2})^2$:

- member 1: ideal $(1,7)$, weights $a = 1$, $b = 1$
- member 2: ideal $(5,2)$, weights $a = 1$, $b = 4$
- member 3: ideal $(8,5)$, weights $a = 4$, $b = 1$

(a) The council's rules allow amendments to one budget line at a time. Find the structure-induced equilibrium and show that no admissible amendment beats it.
(b) Show that $(6,4)$ beats it by majority.
(c) An invented memo: "The council has passed the same parks-and-roads budget for ten years, which proves this budget is what a majority of members prefers to any alternative." In two sentences, say what the memo assumes and which model explains the stability without that assumption.

**P3 (🔴, optional)** *(Formal (a)–(b).)* Four voters have Euclidean preferences with ideal points $A = (1,2)$, $B = (8,1)$, $C = (7,8)$, $D = (2,7)$.

(a) Find a point that no other point beats by strict majority (that is, by at least 3 of 4), and prove it with Theorem 1.
(b) A fifth voter joins at $E = (6,4)$. Show that your point from (a) is now beaten, by exhibiting a point that beats it.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) Direction of line $AB$: $(8,4)$, with $\lVert(8,4)\rVert^2 = 80$. $q - A = (3,4)$, so $t = \frac{(3,4)\cdot(8,4)}{80} = \frac{40}{80} = \frac12$ and $p = (0,1) + \frac12 (8,4) = (4,3)$, the midpoint of $AB$. Squared distances to $q$ / to $p$: $A$ 25 / 20, $B$ 25 / 20, $C$ 17 / 36. $A$ and $B$ prefer $p$: **$p$ beats $q$ 2–1**. Both gain $\lVert q - p \rVert^2 = 5$ (Lemma 1).

(b) Line $AC$ has direction $(4,8)$, $\lVert(4,8)\rVert^2 = 80$. $p - A = (4,2)$, $t = \frac{16 + 16}{80} = \frac25$, so $r = (0,1) + \frac25(4,8) = (1.6, 4.2)$. Squared distances to $p$ / to $r$: $A$ 20 / 12.8, $B$ 20 / 41.6, $C$ 36 / 28.8. $A$ and $C$ prefer $r$: **$r$ beats $p$ 2–1**. Now $q$ against $r$: $A$ 25 / 12.8 (prefers $r$), $B$ 25 / 41.6 (prefers $q$), $C$ 17 / 28.8 (prefers $q$). **$q$ beats $r$ 2–1.** So $p$ beats $q$, $r$ beats $p$ and $q$ beats $r$: a majority **cycle**, built from two contract-line moves.

**Wrong turns:** projecting onto the segment's midpoint by habit. That works for $AB$ only because $q$ happens to project there; for $AC$ the foot is at $t = 2/5$. Concluding that $r$ is "the winner" because it was last: $q$ beats it.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Utilities are separable and single-peaked in each coordinate, so Proposition 2 applies. Medians: $\operatorname{med}(1,5,8) = 5$ and $\operatorname{med}(7,2,5) = 5$, so $z^* = (5,5)$. A parks-only amendment $(y_1, 5)$ with $y_1 > 5$ is opposed by members 1 and 2, whose parks peaks are 1 and 5, both at or below 5; with $y_1 < 5$ by members 2 and 3. A roads-only amendment $(5, y_2)$ with $y_2 > 5$ is opposed by members 2 and 3 (peaks 2 and 5); with $y_2 < 5$ by members 1 and 3 (peaks 7 and 5). Every admissible amendment loses at least 2–1. The weights do not matter: separability means each coordinate is decided by its own peaks.

(b) Losses $a_i(q_1 - x_{i1})^2 + b_i(q_2 - x_{i2})^2$ at $(5,5)$ / at $(6,4)$:

- member 1: $16 + 4 = 20$ / $25 + 9 = 34$
- member 2: $0 + 4\cdot 9 = 36$ / $1 + 4 \cdot 4 = 17$
- member 3: $4 \cdot 9 + 0 = 36$ / $4 \cdot 4 + 1 = 17$

Members 2 and 3 prefer $(6,4)$: **it beats $z^*$ 2–1.** Member 3 trades a little roads money for a lot of parks money, member 2 the reverse; the one-line-at-a-time rule is what blocks the deal.

**Wrong turns:** using weighted medians in (a). The weights change how much each member cares, not where her peak on each issue is. Testing only small joint moves in (b): $(6,4)$ is a full unit on each axis.

**Must hit, strict (c):**

- The memo assumes the budget is a majority core (Condorcet winner over all budgets). In two dimensions that requires Plott's knife-edge and is almost never true; (b) shows a beating budget here.
- Shepsle's structure-induced equilibrium explains the stability: voting one line at a time makes the issue-by-issue median immune to every admissible amendment, although a joint change would win.

**Model answer (c):** The memo treats stability as evidence of a Condorcet winner, but with two budget lines a majority-proof budget needs Plott's symmetry and almost never exists; in fact $(6,4)$ beats this one. Stability is what Shepsle's structure-induced equilibrium predicts when amendments touch one line at a time: the rule blocks the joint deal, not the preferences.

---

**P3** *(Formal (a)–(b).)*

**Accept (a):** $(4,5)$, which is the only such point (a grid search finds no other). The proof must use Theorem 1 or an equivalent argument.

(a) $A$ and $C$ lie on $y = x + 1$; $B$ and $D$ on $y = 9 - x$. The diagonals meet where $x + 1 = 9 - x$, at $q = (4,5)$. $A - q = (-3,-3)$ and $C - q = (3,3)$ are opposite, as are $B - q = (4,-4)$ and $D - q = (-2,2)$. For any direction $d$, $(A - q)\cdot d$ and $(C - q)\cdot d$ have opposite signs or are both zero, so at most one of $A, C$ is strictly on the $d$ side; likewise for $B, D$. At most $2 = n/2$ voters are strictly on either side of every line through $q$, so by Theorem 1 nothing beats $q$ by a strict majority. Beating it needs 3 of 4, and no line through $q$ has 3 voters strictly on one side.

(b) With $E$, $n = 5$ and a strict majority is 3. In direction $d = (1,0)$, $B$, $C$ and $E$ lie strictly to the right of $x = 4$. Try $y = (5,5)$. Squared distances to $(4,5)$ / to $(5,5)$: $A$ 18 / 25, $B$ 32 / 25, $C$ 18 / 13, $D$ 8 / 13, $E$ 5 / 2. $B$, $C$ and $E$ prefer $(5,5)$: **it beats $(4,5)$ 3–2.** With $n$ odd, the Corollary would need a voter at the core point and the rest paired; $E$ has no partner, so there is no core.

**Wrong turns:** proposing the centroid $(4.5, 4.5)$ in (a). The line through it parallel to $AC$ has $A$, $C$ and $D$ strictly on one side, so it is beaten. Concluding from (a) that two dimensions do not matter: the four-voter core rests on ties, which is why the odd-$n$ hypothesis matters.

</details>

## Flashback

**From Lesson [1.4](01-04-persuasion-and-the-media.md) (Persuasion and the media):** *(Formal (a)–(c).)* Voters will decide on a county broadband bond. Approving a plan that succeeds is worth 3 to them, approving one that fails costs 1, and rejecting is worth 0; they currently think it succeeds with probability $\tfrac{1}{10}$. An invented memo from the county's development office: "We will commit in advance to an independent evaluation designed to come back favourable half the time, and a favourable report will leave voters at least 25 percent sure of success, which is enough to carry the vote. Voters come out ahead too: they get better information."

(a) Show that no evaluation design can do what the first sentence promises, and name the property it violates.

(b) Find the design that maximizes the probability that the bond passes, and that probability.

(c) Under that design, what is the voters' expected payoff, compared with a perfectly informative evaluation and with no evaluation?

<details>
<summary>Solution</summary>

(a) Approval is worth $3\mu' - (1 - \mu')$ at posterior $\mu'$, so the threshold is $\mu^* = \tfrac14$: the memo has the bar right. But Bayes plausibility gives $\Pr(\text{fav})\,\mu'(\text{fav}) \le \mu$, so a report sent with probability $\tfrac12$ leaves a posterior of at most $\frac{1/10}{1/2} = \tfrac15 < \tfrac14$. With only two reports the other also has probability $\tfrac12$ and the same bound: no report clears the bar, and the bond never passes. Beliefs cannot average above the prior.

(b) By the Theorem the maximum is $\mu/\mu^* = \frac{1/10}{1/4} = \boxed{\tfrac25}$. Design: report "favourable" whenever the plan would succeed, and with probability

$$q = \frac{\mu(1-\mu^*)}{(1-\mu)\mu^*} = \frac{(1/10)(3/4)}{(9/10)(1/4)} = \frac13$$

when it would fail. Then $\Pr(\text{fav}) = \tfrac{1}{10} + \tfrac{9}{10} \cdot \tfrac13 = \tfrac25$ and $\mu'(\text{fav}) = \frac{1/10}{2/5} = \tfrac14$, so voters approve. A grid search over all two-message designs finds the same maximum.

(c) Optimal design: every approval happens at posterior exactly $\tfrac14$, where approving is worth $3 \cdot \tfrac14 - \tfrac34 = 0$, so the voters' payoff is **0**. No evaluation: they reject, **0**. Perfectly informative evaluation: they approve only plans that succeed, $\tfrac{1}{10} \cdot 3 = $ **3/10**. "Voters come out ahead" fails for the design that maximizes passage: the county captures all the value of the information.

**Wrong turns:** Checking only that $\tfrac14$ is the right bar and accepting the memo: Bayes plausibility caps how often a report can carry a high posterior. In (c), counting the optimal design's payoff as positive because it passes some plans that succeed: each approval is made at a posterior where approving is worth nothing in expectation.

</details>

## Connections

- **Backward:** [2.1](02-01-the-downsian-spatial-model.md)'s median voter needed a line; Proposition 2 recovers it one coordinate at a time. [`social-choice` 3.4](../../social-choice/lessons/03-04-single-crossing-and-value-restriction.md) showed that three voters in the plane form a Latin square; this lesson is the full spatial version it pointed to. The top cycle and agenda control are [`social-choice` 1.4](../../social-choice/lessons/01-04-how-often-do-cycles-happen.md)'s; McKelvey says the top cycle can be everything.
- **Forward:** [2.3](02-03-probabilistic-voting.md) restores a Downsian equilibrium in many dimensions by making vote shares smooth. Without a core, two office-seeking candidates have no pure equilibrium: whatever $B$ offers, $A$ wins with a point in $W(q_B)$. [3.5](03-05-agenda-setters-and-veto-players.md) turns the chair's power into the setter model and the win-set into veto-player analysis.
- **Sideways:** [`political-institutions` 4.2](../../political-institutions/lessons/04-02-committees-and-agenda-control.md) describes the committee and germaneness rules that Shepsle's equilibrium formalizes. Whether McKelvey's result wounds democracy is Riker and Mackie's debate in [`political-philosophy` 5.4](../../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md). Lemma 1 is the orthogonal-projection fact from least squares: the residual is perpendicular to the line.

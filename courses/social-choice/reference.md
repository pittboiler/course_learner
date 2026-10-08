# Social Choice · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The course is the mathematics of folding many rankings, judgments, verdicts or populations into one choice, one
ranking or one allocation of seats. Arrow's theorem is the organizing map: every result here either drops one of his
conditions, restricts his domain, changes what is aggregated, or prices the change. Mid-problem, use the card three ways.
To place a rule or a claim, start at [Arrow's map](#arrows-map) and [Rules at a glance](#rules-at-a-glance). To check a
theorem's **hypotheses** (they are where most errors live: $m\ge3$, onto, odd $n$, strict ballots, variable electorates,
resoluteness), read its entry in [Theorems](#theorems): each gives the statement, a plain-English line, the proof idea and
what it does not say. For arithmetic, go to [Formulas](#formulas). Where the build's checks corrected the syllabus, the
card follows the lessons (e.g. Austen-Smith and Banks 1996; Sen's quasi-transitive possibility 1969; Balinski-Young
stated for $s\ge4$ only; Young's theorem assumes no ordering of the score vector).

## Notation

Symbols in first-appearance order. Plain $P$ and bold $\mathbf P$ differ: see [Notation warnings](#notation-warnings).

| Symbol | Means | First used |
|---|---|---|
| $N=\{1,\dots,n\}$, $A$, $m=\lvert A\rvert$ | voters, alternatives, number of alternatives | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| $\succ_i$, $\mathcal L(A)$, $\mathcal R(A)$ | voter $i$'s strict ranking; all strict rankings; all weak orders (ties allowed) | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| $\mathbf P=(\succ_1,\dots,\succ_n)$, $\mathcal D$ | a [profile](#profile); a domain of profiles | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| $F$, $f$, $C$ | [social welfare function](#social-welfare-function), [social choice function](#social-choice-function), correspondence | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| $\mathbf P^\sigma$, $\pi\mathbf P$ | voters permuted by $\sigma$; alternatives renamed by $\pi$ | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| $n(x,y)$ | number of voters ranking $x$ above $y$ | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| $M$, $R$ | strict and weak [majority relation](#majority-relation) | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| $D_i\in\{-1,0,1\}$, $n_+$, $n_-$ | May's two-option vote; counts for $x$ and for $y$ | [1.2](lessons/01-02-mays-theorem.md) |
| U, O, WP, IIA, ND | Arrow's conditions: [unrestricted domain](#unrestricted-domain), ordering, [weak Pareto](#weak-pareto), [IIA](#independence-of-irrelevant-alternatives), [non-dictatorship](#non-dictatorship) | [1.3](lessons/01-03-arrow-as-a-map.md) |
| $\succsim_F$, $\succ_F$, $\sim_F$ | social weak order, its strict part, its indifference | [1.3](lessons/01-03-arrow-as-a-map.md) |
| IC, IAC, $P_{m,n}$ | [impartial (anonymous) culture](#impartial-culture); probability of no Condorcet winner | [1.4](lessons/01-04-how-often-do-cycles-happen.md) |
| $T$ | [top cycle](#top-cycle) | [1.4](lessons/01-04-how-often-do-cycles-happen.md) |
| $r_i(x)$, $s=(s_1,\dots,s_m)$, $S_s(x)$ | position of $x$ on ballot $i$; scoring vector; [score](#scoring-rule) | [2.1](lessons/02-01-scoring-rules.md) |
| $B(x)$ | Borda score | [2.1](lessons/02-01-scoring-rules.md) |
| $\mathbf P_1+\mathbf P_2$, $k\mathbf P$ | union of disjoint electorates; every voter cloned $k$ times | [2.2](lessons/02-02-consistency-and-youngs-characterization.md) |
| $\mu(x,y)$ | margin $n(x,y)-n(y,x)$ | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| $c(x)$, $s(x)$ | [Copeland](#copeland) and [maximin](#maximin) scores | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| $d_K$, $K(R)$ | [Kendall tau distance](#kendall-tau-distance); [Kemeny](#kemeny-rule) score of ranking $R$ | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| $\varphi=p/(1-p)$, $Z$ | odds of a correct pairwise judgment; Mallows normaliser | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| $\mathbf P+\succ$ | profile with one ballot added | [2.4](lessons/02-04-monotonicity-and-participation.md) |
| $(\succ_i',\mathbf P_{-i})$ | voter $i$'s report replaced | [3.1](lessons/03-01-manipulation-and-strategy-proofness.md) |
| $\mathbf P^S$, $\mathbf P^{xy}$ | $S$ lifted to the top of every ballot ([lift-to-top](#lift-to-top-construction)) | [3.2](lessons/03-02-proving-gibbard-satterthwaite.md) |
| $<$, $p_i$, $a_j$ | axis; voter $i$'s peak; [phantom](#phantom-voters) ballots | [3.3](lessons/03-03-single-peakedness-black-and-moulin.md) |
| $S_{xy}$ | voters preferring $x$ to $y$ ([single-crossing](#single-crossing)) | [3.4](lessons/03-04-single-crossing-and-value-restriction.md) |
| $R$, $P$, $C(S)$ | social relation, its strict part, choice set ([acyclicity](#acyclicity)) | [4.1](lessons/04-01-sens-liberal-paradox.md) |
| $x=(x_1,x_2)$, $\rho_i$, $\Phi$, $a^*$, $\bar a$ | personal features; own-feature rank; potential; "both own way", "both give way" | [4.2](lessons/04-02-answers-to-sen.md) |
| $X$, $J_i$, $M$ | agenda, judgment set, proposition-wise majority ([judgment aggregation](#judgment-aggregation)) | [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md) |
| $N_\varphi(\mathbf J)$, $g$ | supporters of $\varphi$; count function | [4.4](lessons/04-04-the-list-pettit-impossibility.md) |
| $p$, $q=1-p$, $P_n$, $S_n$ | [competence](#competence); majority accuracy; number correct | [5.1](lessons/05-01-the-condorcet-jury-theorem.md) |
| $w_i$ | [Nitzan-Paroush weight](#nitzan-paroush-weights) $\log\frac{p_i}{1-p_i}$ | [5.1](lessons/05-01-the-condorcet-jury-theorem.md) |
| $C$, $p_c$, $\pi_c$ | circumstance; competence in it; its probability ([correlated voters](#correlated-voters)) | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| $\pi$, $q$, $o(x)$, $\sigma$, $\gamma_G,\gamma_I$ | prior of guilt; conviction threshold; odds $x/(1-x)$; mixing probability; convict probabilities ([unanimity juries](#unanimity-juries)) | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| E1-E5, $R^*$, $a(R)$ | jury-theorem premises; true ranking; agreement score | [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) |
| $B_i$, $s(x)$, $G_i$, $\ell$, $k$ | approval ballot; approval score; good set; poll leader; challenger | [6.1](lessons/06-01-approval-voting.md) |
| $g_i(x)$, $K$, $R(x)$, $r_k(x)$, $\alpha(x)$ | grade; top grade; range total; $k$-th highest grade; majority grade | [6.2](lessons/06-02-range-voting-and-majority-judgment.md) |
| $\mathbf u$, ONC, CNC, OLC, CUC, CFC | utility profile; [invariance classes](#invariance-classes) | [6.3](lessons/06-03-utilities-in-possibility-out.md) |
| $s$, $p_i$, $P$, $h$, $q_i$, $a_i$ | states, populations, total, house size, [quota](#quota), seats | [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md) |
| $r_i$, $L$, $D(a)$ | remainder; leftover seats; total deviation | [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md) |
| $\delta(k)$, $d$ | rounding threshold; divisor ([divisor method](#divisor-method)) | [7.2](lessons/07-02-divisor-methods-and-balinski-young.md) |

### Notation warnings

Letters are reused across modules. Read the meaning from the lesson in hand.

| Letter | Meanings |
|---|---|
| $P$ / $\mathbf P$ | bold: a profile (everywhere); plain: social strict preference (4.1), total population (7.1-7.2), $P_n$ jury accuracy, $P_{m,n}$ cycle probability |
| $R$ | weak majority relation (1.1); a candidate ranking (2.3, 5.3; $R^*$ true ranking); social relation (4.1); range total $R(x)$ (6.2) |
| $p$ | competence (Module 5); peak $p_i$ (3.3); population $p_i$ (Module 7); propositions $p$, $q$ (4.3-4.4) |
| $q$ | $1-p$ (5.1); conviction threshold (5.2); supermajority threshold (1.2); quota $q_i$ (Module 7) |
| $m$ | number of alternatives; but $n=2m+1$ in 5.1, and the middle voter $m=(n+1)/2$ in 3.4 |
| $s$ | scoring vector; maximin score $s(x)$ (2.3); approval score $s(x)$ (6.1); number of states (Module 7) |
| $d$ | dictator; divisor (7.2); margin $d=2k-n$ (5.3 Lemma 2); $d_K$ Kendall distance |
| $K$ | Kemeny score $K(R)$ (2.3); top grade (6.2); Feddersen-Pesendorfer constant (5.2) |
| $\pi$, $\sigma$ | permutations of alternatives and voters (1.1); $\pi$ prior (5.1-5.2), $\pi_{xy}$ pivot probabilities (6.1-6.2); $\sigma$ mixing probability (5.2) |
| $M$ | majority relation on alternatives; proposition-wise majority set (4.3) |
| $C$ | correspondence (1.1); choice set $C(S)$ (4.1); circumstance (5.2) |

## Orientation

### Arrows map

Arrow (U, O, WP, IIA, ND incompatible for $m\ge3$, finite $N$; [entry](#arrows-theorem)) read as a map of exits. Each
exit buys something and charges a toll.

| Escape route | What changes | Results in this course | Toll | Lessons |
|---|---|---|---|---|
| Two options only | $m=2$ | [May](#mays-theorem): majority is the unique fair rule | nothing at $m=2$; cycles at $m\ge3$ | [1.2](lessons/01-02-mays-theorem.md) |
| Weaken the ordering | transitivity to [quasi-transitivity](#quasi-transitivity) | Sen 1969 possibility (Pareto extension rule) | [oligarchy theorem](#oligarchy-theorem) | [1.3](lessons/01-03-arrow-as-a-map.md) |
| Drop IIA | read positions or margins | [scoring rules](#scoring-rule), [Young](#youngs-theorem); [Copeland](#copeland), [maximin](#maximin), [Kemeny](#kemeny-rule), [Young-Levenglick](#young-levenglick-theorem); [IRV](#instant-runoff) | no scoring rule is Condorcet-consistent; no Condorcet extension is consistent; [Moulin no-show](#moulins-no-show-theorem); IRV non-monotone; manipulation ([Gibbard-Satterthwaite](#gibbard-satterthwaite-theorem)) | [2.1](lessons/02-01-scoring-rules.md)-[2.4](lessons/02-04-monotonicity-and-participation.md), [3.1](lessons/03-01-manipulation-and-strategy-proofness.md)-[3.2](lessons/03-02-proving-gibbard-satterthwaite.md) |
| Restrict the domain | drop U | [Black](#blacks-theorem), [Moulin's generalized medians](#generalized-median-rule), [representative voter](#representative-voter-theorem), [value restriction](#value-restriction) | one-dimensional politics; a second dimension restores Latin squares | [3.3](lessons/03-03-single-peakedness-black-and-moulin.md)-[3.4](lessons/03-04-single-crossing-and-value-restriction.md) |
| Rights | strengthen ND to [minimal liberalism](#minimal-liberalism); only acyclicity | [Sen's liberal paradox](#sens-liberal-paradox), [Gibbard's paradox](#gibbards-paradox-of-rights), [game forms](#rights-as-game-forms) | a new impossibility, not an exit; game forms keep the inefficiency | [4.1](lessons/04-01-sens-liberal-paradox.md)-[4.2](lessons/04-02-answers-to-sen.md) |
| Judgments | aggregate propositions, not rankings | [doctrinal paradox](#doctrinal-paradox), [median property](#median-property), [List-Pettit](#list-pettit-impossibility), Dietrich-List (Arrow recovered) | a new impossibility; escapes give up anonymity, systematicity, completeness or domain | [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md)-[4.4](lessons/04-04-the-list-pettit-impossibility.md) |
| Truth-tracking | change the goal | [Condorcet jury theorem](#condorcet-jury-theorem), [Nitzan-Paroush](#nitzan-paroush-weights), [Kemeny as MLE](#kemeny-as-maximum-likelihood) | needs a truth, competence, independence, sincerity; [correlation](#correlated-voters), [pivotal voting](#strategic-voting-and-pivotality) break it | [5.1](lessons/05-01-the-condorcet-jury-theorem.md)-[5.3](lessons/05-03-epistemic-readings-of-aggregation.md) |
| Richer input | approvals, grades, utilities | [Brams-Fishburn](#brams-fishburn-sincerity-theorem), [Fishburn](#fishburns-characterization-of-approval-voting), [Balinski-Laraki](#balinski-laraki-strategy-claims), [utilitarian and leximin](#utilitarian-and-leximin-possibility) | dichotomous preferences; a common grading language; interpersonal comparability ([Sen's utility impossibility](#sens-utility-impossibility) without it) | [6.1](lessons/06-01-approval-voting.md)-[6.3](lessons/06-03-utilities-in-possibility-out.md) |
| Apportionment (a cousin) | integers in place of rankings | [Hamilton](#hamiltons-method), [divisor methods](#divisor-method), [Balinski-Young](#balinski-young-theorem) | quota or population monotonicity, for $s\ge4$ | [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md)-[7.2](lessons/07-02-divisor-methods-and-balinski-young.md) |

### Rules at a glance

As the lessons establish them. "—" means no lesson settles it; do not read it as yes or no. "Consistent" is
[consistency](#consistency) (reinforcement across electorates), not Condorcet consistency. Participation is for resolute
versions with a fixed tie-break.

| Rule | Condorcet-consistent? | Consistent? | Monotone? | Participation? | Lessons |
|---|---|---|---|---|---|
| [Plurality](#plurality) | no (can elect the Condorcet loser) | yes (scoring rule) | yes | yes | [2.1](lessons/02-01-scoring-rules.md), [2.4](lessons/02-04-monotonicity-and-participation.md) |
| [Borda](#borda-count) | no (81 voters); never elects the Condorcet loser | yes | yes | yes | [2.1](lessons/02-01-scoring-rules.md), [2.2](lessons/02-02-consistency-and-youngs-characterization.md), [2.4](lessons/02-04-monotonicity-and-participation.md) |
| [Antiplurality](#antiplurality) | no (can elect the Condorcet loser) | yes | yes | yes | [2.1](lessons/02-01-scoring-rules.md) |
| [Instant runoff](#instant-runoff) | no (can squeeze out the Condorcet winner) | — | no | no | [2.4](lessons/02-04-monotonicity-and-participation.md) |
| Plurality with runoff | no | — | no | no | [2.4](lessons/02-04-monotonicity-and-participation.md) |
| [Copeland](#copeland) | yes | no (Condorcet extension) | yes | no: fails at $m=3$ (alphabetical tie-break) and, by Moulin, at $m\ge4$ | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md), [2.4](lessons/02-04-monotonicity-and-participation.md) |
| [Maximin](#maximin) | yes | no (Condorcet extension) | yes | $m=3$ lexicographic: yes; $m\ge4$: no | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md), [2.4](lessons/02-04-monotonicity-and-participation.md) |
| [Kemeny](#kemeny-rule) | yes (ranks the Condorcet winner first) | as a preference function: yes; top-of-ranking choice: no | — | resolute top-of-ranking: no at $m\ge4$ (Moulin) | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md), [2.4](lessons/02-04-monotonicity-and-participation.md) |
| [Approval](#approval-voting) | no (sincere ballots can put the Condorcet winner last) | yes (Fishburn) | — | — | [6.1](lessons/06-01-approval-voting.md) |
| [Range](#range-voting) | no (can elect the Condorcet loser) | — | — | — | [6.2](lessons/06-02-range-voting-and-majority-judgment.md) |
| [Majority judgment](#majority-judgment) | no (can elect a candidate four of five voters grade lower than its rival) | — | — | — | [6.2](lessons/06-02-range-voting-and-majority-judgment.md) |

Other properties at a glance: every scoring rule violates IIA and is manipulable (burying for Borda); IRV is
manipulable by compromise and push-over; approval is strategy-proof only on dichotomous preferences; range collapses to
approval under strategic voting; majority judgment is strategy-proof in grading but not in ranking.

## Definitions

One entry per object, axiom or position, grouped by module. Plain-English line first, then the formal
statement, then where it is introduced and used. Theorems have their own section below.

**Module 1: the aggregation problem**

### Profile

The full contents of the ballot box: one strict ranking per voter.

Voters $N=\{1,\dots,n\}$, alternatives $A$ with $|A|=m$; $\mathcal L(A)$ is the set of strict rankings
(complete, transitive, antisymmetric). A profile is $\mathbf P=(\succ_1,\dots,\succ_n)\in\mathcal L(A)^n$, written in
tables as "5: C ≻ A ≻ D ≻ B" (five voters, that ranking). A **domain** $\mathcal D\subseteq\mathcal L(A)^n$ is the set
of profiles a rule must handle. An **anonymous profile** records only how many voters hold each ranking (the
object [impartial anonymous culture](#impartial-culture) draws). In 1.2 the two-alternative profile is a vote vector
$D\in\{-1,0,1\}^n$; in 6.1-6.3 ballots are approval sets, grades or utility functions instead.

*Introduced:* [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md)

### Social welfare function

Ballots in, a social ranking out.

$$F:\mathcal D\to\mathcal R(A)$$

where $\mathcal R(A)$ is the set of weak orders (complete, transitive, ties allowed). Arrow's version takes
$\mathcal D=\mathcal L(A)^n$, which builds [unrestricted domain](#unrestricted-domain) and social ordering into the
type. Contrast a **[social choice function](#social-choice-function)** (one winner) and a **social choice
correspondence** $C:\mathcal D\to 2^A\setminus\{\varnothing\}$ (a nonempty set of tied winners). A **preference
function** (2.3) returns a *set of rankings* (Kemeny's output). A **social decision function** (4.1) only needs an
acyclic strict part. A **social welfare functional** (6.3) takes utility profiles instead of rankings.

*Introduced:* [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md); used in
[1.3](lessons/01-03-arrow-as-a-map.md), [6.3](lessons/06-03-utilities-in-possibility-out.md)

### Social choice function

Ballots in, exactly one winner out.

$$f:\mathcal D\to A$$

A correspondence $C$ is **resolute** if $|C(\mathbf P)|=1$ for every $\mathbf P$; a resolute correspondence is a social
choice function. A **tie-breaking rule** (a fixed order of $A$, or voter 1's ballot) turns a correspondence into a
function, and the tie-break is part of $f$. Where it matters:

- On **variable electorates** (2.2, 2.4) $f$ is defined for every profile of every size.
- **Onto** (range $=A$) is a hypothesis of [Gibbard-Satterthwaite](#gibbard-satterthwaite-theorem).
- Resoluteness has a price: with $m=2$ and $n$ even no resolute rule is both anonymous and neutral (1.1 Example 2).

*Introduced:* [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md); used in
[2.4](lessons/02-04-monotonicity-and-participation.md), [3.1](lessons/03-01-manipulation-and-strategy-proofness.md)

### Anonymity

Only how many voters cast each ballot matters, not who cast it.

$$f(\mathbf P^\sigma)=f(\mathbf P)\quad\text{for every }\mathbf P\text{ and every permutation }\sigma\text{ of }N,$$

where $\mathbf P^\sigma=(\succ_{\sigma(1)},\dots,\succ_{\sigma(n)})$. With two alternatives it means $F$ depends only on
the counts $(n_+,n_-)$ (1.2 Step 1). Dictatorship, the casting vote and [Nitzan-Paroush weights](#nitzan-paroush-weights)
with unequal competence fail it; in judgment aggregation (4.4) it is the same condition on judgment sets. To refute
it, exhibit one profile and one reshuffle that moves the output.

*Introduced:* [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md); used in
[1.2](lessons/01-02-mays-theorem.md), [2.2](lessons/02-02-consistency-and-youngs-characterization.md),
[5.1](lessons/05-01-the-condorcet-jury-theorem.md)

### Neutrality

Rename the candidates and the outcome is renamed with them: no label is favoured.

$$f(\pi\mathbf P)=\pi(f(\mathbf P))\quad\text{for every }\mathbf P\text{ and every permutation }\pi\text{ of }A.$$

For two alternatives (1.2) it reads $F(-D)=-F(D)$, which forces an even split to be a tie. Alphabetical
tie-breaking, [supermajority rules](#supermajority-rule) and status-quo rules fail it. In judgment aggregation,
neutrality across propositions plus independence is [systematicity](#systematicity).

*Introduced:* [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md); used in
[1.2](lessons/01-02-mays-theorem.md), [2.2](lessons/02-02-consistency-and-youngs-characterization.md)

### Majority relation

Who wins each head-to-head.

$$n(x,y)=\#\{i:x\succ_i y\},\qquad x\,M\,y\iff n(x,y)>n(y,x),\qquad x\,R\,y\iff n(x,y)\ge n(y,x).$$

$M$ is the strict majority relation (always asymmetric), $R$ the weak one (always complete). The **margin** is
$\mu(x,y)=n(x,y)-n(y,x)$. With strict ballots $x\,M\,y\iff n(x,y)>n/2$.
**Prop 1 (1.1):** $n$ odd and strict ballots make $M$ a **tournament** (exactly one of $x\,M\,y$, $y\,M\,x$ for each
pair). Completeness, not transitivity: [McGarvey](#mcgarveys-theorem) realizes every tournament.

*Introduced:* [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md); used in
[1.4](lessons/01-04-how-often-do-cycles-happen.md), [2.3](lessons/02-03-condorcet-methods-and-kemeny.md),
[3.3](lessons/03-03-single-peakedness-black-and-moulin.md), [3.4](lessons/03-04-single-crossing-and-value-restriction.md)

### Condorcet winner

The alternative that beats every rival head-to-head.

$$x\text{ is the Condorcet winner}\iff x\,M\,y\text{ for every }y\ne x.$$

- At most one exists (asymmetry of $M$). It may not exist (a [cycle](#condorcet-cycle)).
- Its existence does **not** make $M$ transitive: three losers can cycle beneath it (1.1 Example 1).
- A rule is **Condorcet-consistent** (a [Condorcet extension](#condorcet-extension)) if it elects $\{x\}$ whenever
  $x$ is the Condorcet winner.
- Pairwise counts add over electorates, so a common Condorcet winner of two electorates is their union's (2.2).
- Which rules elect it: see [Rules at a glance](#rules-at-a-glance). No scoring rule always does
  ([Condorcet's 81 voters](#condorcets-81-voter-example)); sincere approval can elect it or rank it last (6.1); range
  voting can elect the Condorcet loser where majority judgment elects the Condorcet winner (6.2 Example 1).

*Introduced:* [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md); used in
[1.4](lessons/01-04-how-often-do-cycles-happen.md), [2.1](lessons/02-01-scoring-rules.md),
[2.4](lessons/02-04-monotonicity-and-participation.md), [6.1](lessons/06-01-approval-voting.md),
[6.2](lessons/06-02-range-voting-and-majority-judgment.md)

### Condorcet loser

The alternative that loses every head-to-head.

$$x\text{ is the Condorcet loser}\iff y\,M\,x\text{ for every }y\ne x.$$

At most one exists. Borda never elects one (and never ranks a Condorcet winner last); plurality and antiplurality
can. Among the three-candidate scoring rules $(1,s,0)$, only $s=1/2$ (Borda) never elects a Condorcet loser (proved
in 2.1, unattributed). Kemeny ranks it last (2.3).

*Introduced:* [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md); used in
[2.1](lessons/02-01-scoring-rules.md)

### Condorcet cycle

Head-to-head results that chase each other around.

$$x\,M\,y,\quad y\,M\,z,\quad z\,M\,x.$$

The basic three-voter cycle (the three rotations of one cyclic order, a **Latin square**) is
[`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md)'s. On a triple a cycle
needs the allowed rankings to contain a Latin square (3.4 Theorem 3), which is why [value
restriction](#value-restriction) blocks it. In judgment-aggregation terms the cycle is a size-3 minimally inconsistent
set on the preference agenda (4.3, [median property](#median-property)). 6.3 Example 1 builds a three-person utility
profile whose induced rankings cycle.

*Introduced:* [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md); used in
[3.4](lessons/03-04-single-crossing-and-value-restriction.md), [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md),
[6.3](lessons/06-03-utilities-in-possibility-out.md)

### Decisiveness

May's first condition: every vote pattern gets exactly one verdict, and "tie" counts as a verdict.

$F$ is defined on every $D\in\{-1,0,1\}^n$ and returns exactly one of $1$ ($x$), $-1$ ($y$), $0$ (tie).
**Decisive does not mean tie-free.** Majority ties whenever $n_+=n_-$ and is still decisive. Not to be confused with
a *decisive coalition* (Arrow, Sen): a set whose unanimous strict preference society copies.

*Introduced:* [1.2](lessons/01-02-mays-theorem.md)

### Positive responsiveness

From a win or a tie, any nudge toward $x$ makes $x$ win outright: one vote breaks any tie.

$$F(D)\in\{0,1\},\ D'\ge D,\ D'\ne D\ \Longrightarrow\ F(D')=1.$$

Strictly stronger than [monotonicity](#monotonicity) (which only forbids a nudge from *hurting* $x$). The "always
declare a tie" rule fails only this condition. A dictator with indifference allowed fails it too (an indifferent
dictator forces a tie no one can break).

*Introduced:* [1.2](lessons/01-02-mays-theorem.md)

### Supermajority rule

A change $x$ needs at least $q$ supporters; otherwise the status quo $y$ stands.

$$F(D)=\begin{cases}x & n_+\ge q\\ y&\text{otherwise}\end{cases}$$

Satisfies decisiveness, anonymity and positive responsiveness and fails **only neutrality** (checked for every $q$
with up to six voters). "More than half the membership, abstainers included" is a case of it: it counts abstainers
for $y$ (1.2 Example 2). So a supermajority is exactly the judgment that the two options deserve unequal treatment,
which May leaves open. In judgment aggregation the "more than $2n/3$ supporters" quota is the smallest consistent
threshold on the conjunctive agenda (4.4).

*Introduced:* [1.2](lessons/01-02-mays-theorem.md)

### Unrestricted domain

The rule must answer on every profile of strict rankings; no ballot box may be refused.

$F$ (or $f$) is defined on all of $\mathcal L(A)^n$. Restricting it is Module 3's escape (single-peaked,
single-crossing, value-restricted domains), Blau's answer to Sen (4.2: no meddlesome preferences) and the
dichotomous domain on which approval is strategy-proof (6.1). In judgment aggregation the analogue is **universal
domain** (every profile of complete consistent judgment sets).

*Introduced:* [1.3](lessons/01-03-arrow-as-a-map.md); used in [4.1](lessons/04-01-sens-liberal-paradox.md),
[4.2](lessons/04-02-answers-to-sen.md)

### Weak Pareto

If everyone strictly prefers $x$ to $y$, so does society.

$$x\succ_i y\ \text{for all }i\ \Longrightarrow\ x\succ_F y.$$

For a social choice function: if every voter ranks $x$ above $y$, then $f(\mathbf P)\ne y$. That form follows from
strategy-proofness plus onto (3.1 Lemma 2). The fixed-ranking rule fails it. **Conditional Pareto** (the line
associated with Sen 1976, 4.2) counts only the rights-respecting parts of preferences. **Strong Pareto** (no one
worse, someone better) is used in 6.3's characterizations.

*Introduced:* [1.3](lessons/01-03-arrow-as-a-map.md); used in [3.1](lessons/03-01-manipulation-and-strategy-proofness.md),
[4.1](lessons/04-01-sens-liberal-paradox.md), [4.2](lessons/04-02-answers-to-sen.md)

### Independence of irrelevant alternatives

Society's verdict on $x$ versus $y$ depends only on how each voter ranks $x$ against $y$.

If $\mathbf P$ and $\mathbf P'$ have every voter ordering $\{x,y\}$ the same way, then $F(\mathbf P)$ and $F(\mathbf P')$
order $\{x,y\}$ the same way.

- **Forbids** positional information (where $z$ sits between $x$ and $y$) and intensity information. Also forbids
  the Copeland ranking, which uses only pairwise majorities (1.3 P1). Every scoring rule violates it (2.1).
- **Not the spoiler condition.** IIA compares two *profiles* over the same $A$; "removing a loser should not change
  the winner" is about shrinking the menu.
- **Derived, not assumed,** in 3.2: strategy-proofness makes the lift-to-top relation satisfy IIA.
- **Utility form (6.3):** if every $u_i(x)$, $u_i(y)$ is unchanged, the verdict on $\{x,y\}$ is unchanged; weaker than
  Arrow's, equivalent in effect under CNC invariance.
- **Under majority judgment (6.2)** each candidate's majority value depends only on its own grades, provided grades
  are an absolute language.
- **Judgment-aggregation analogue:** independence, the collective verdict on a proposition depends only on who
  accepts it (4.4); add neutrality across propositions to get [systematicity](#systematicity).

*Introduced:* [1.3](lessons/01-03-arrow-as-a-map.md); used in [2.1](lessons/02-01-scoring-rules.md),
[3.2](lessons/03-02-proving-gibbard-satterthwaite.md), [4.4](lessons/04-04-the-list-pettit-impossibility.md),
[6.2](lessons/06-02-range-voting-and-majority-judgment.md), [6.3](lessons/06-03-utilities-in-possibility-out.md)

### Non-dictatorship

No voter whose strict preference society always copies.

There is no $d\in N$ with $x\succ_d y\Rightarrow x\succ_F y$ for every profile and every pair. Weaker than
[minimal liberalism](#minimal-liberalism) (4.1), which gives decisive power over a pair to at least two people.

*Introduced:* [1.3](lessons/01-03-arrow-as-a-map.md); used in [4.1](lessons/04-01-sens-liberal-paradox.md)

### Quasi-transitivity

"Strictly better than" chains; "as good as" need not.

$\succsim_F$ is quasi-transitive if its strict part $\succ_F$ is transitive; indifference may fail transitivity.

- **Sen (1969, *Review of Economic Studies*):** U, WP, IIA and ND are compatible with a complete quasi-transitive
  social relation. Standard witness: the **Pareto extension rule**, $x\succ_F y$ iff $x\succ_i y$ for all $i$,
  otherwise $x\sim_F y$.
- **The price** is the [oligarchy theorem](#oligarchy-theorem).
- **Majority on single-peaked profiles** is quasi-transitive for every $n$ (3.3): strict $M$ is transitive, while
  for even $n$ the weak relation $R$ can be intransitive.

*Introduced:* [1.3](lessons/01-03-arrow-as-a-map.md); used in [3.3](lessons/03-03-single-peakedness-black-and-moulin.md)

### Escape routes

The ways around Arrow, each with its own price. The table is [Arrow's map](#arrows-map).

Drop IIA (Module 2: scoring and Condorcet rules; price: manipulation, 3.1-3.2) · restrict the domain (Module 3) ·
weaken the ordering to quasi-transitivity (an oligarchy, 1.3) · change what is aggregated (rights and judgments,
Module 4) · change the goal (truth-tracking, Module 5) · richer input (approvals, grades, utilities, Module 6) ·
apportionment as a cousin with its own impossibility (Module 7). Applied to Sen in 4.2: restrict the domain (Blau),
restrict Pareto (Sen 1976), waivable rights (Gibbard 1974), game forms (Nozick and others), drop acyclicity.

*Introduced:* [1.3](lessons/01-03-arrow-as-a-map.md); used in [4.2](lessons/04-02-answers-to-sen.md)

### Impartial culture

Electorates as dice: a deliberately structureless model of voters, not data about them.

**IC:** $\succ_1,\dots,\succ_n$ independent and uniform on the $m!$ rankings, so all $(m!)^n$ profiles are equally
likely. **IAC:** all anonymous profiles (multisets) equally likely, which builds in correlation. 4.3 uses an analogue:
three judges uniform over the 8 consistent judgment sets on the tenure agenda are inconsistent with probability
$21/256$. 4.1 uses IC as a yardstick for meddlesome profiles.

*Introduced:* [1.4](lessons/01-04-how-often-do-cycles-happen.md); used in
[4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md)

### Cycle probability

$P_{m,n}$: the probability of **no Condorcet winner** under a culture (IC unless stated).

For $m=3$ and odd $n$, "no Condorcet winner" and "cycle" coincide; for $m\ge4$ they split (three losers can cycle
under a winner), and $P_{m,n}$ is the probability that the [top cycle](#top-cycle) has at least three members.
Values: see [cycle probability numbers](#cycle-probability-numbers). Any real lean in the culture drives the large-$n$
value toward 0 (law of large numbers; 1.4 Example 2); a culture concentrated on one cyclic order drives it to 1.

*Introduced:* [1.4](lessons/01-04-how-often-do-cycles-happen.md)

### Top cycle

The smallest nonempty set of alternatives each of which beats every outsider.

For odd $n$ ($M$ a tournament), the top cycle $T$ is the smallest nonempty set whose every member $M$-beats every
non-member. Such sets are nested, so the smallest is unique; $T=\{x\}$ when $x$ is the Condorcet winner. $T$ is
strongly connected. It is the set a chair can reach by [agenda control](#agenda-control).

*Introduced:* [1.4](lessons/01-04-how-often-do-cycles-happen.md)

**Module 2: voting rules and their axioms**

### Scoring rule

A price list for places: each ballot pays every candidate by its position, and the richest wins.

$$S_s(x;\mathbf P)=\sum_{i\in N}s_{r_i(x)},\qquad f_s(\mathbf P)=\arg\max_x S_s(x;\mathbf P),$$

where $r_i(x)$ is $x$'s position on ballot $i$ (1 is top). In 2.1 and 2.4 a scoring vector has
$s_1\ge\dots\ge s_m$ and $s_1>s_m$; **in Young's theorem (2.2) $s$ is any vector in $\mathbb R^m$**, decreasing or not.
A **composite** scoring rule maximizes $S^1$, breaks ties by $S^2$, and so on.

- **Only the shape matters (2.1 Lemma 1):** $as_k+b$ with $a>0$ ranks identically, so for $m=3$ every rule is
  $(1,s,0)$ with $s=(s_2-s_3)/(s_1-s_3)\in[0,1]$: plurality $s=0$, Borda $s=1/2$, antiplurality $s=1$.
- **What they have:** anonymous, neutral, consistent (2.2); participation with a fixed tie-break (2.4 Prop 2);
  monotone (2.4).
- **What they lack:** IIA (every one violates it); Condorcet consistency (no scoring rule, simple or composite, is a
  Condorcet extension, 2.2 Corollary).
- **Lift-to-top (3.2):** if $s_1>s_2$, the lift-to-top relation of the rule is pairwise majority (ties to the
  tie-break).
- **Grade and approval ballots (6.1):** any fixed ranking-to-approval-ballot map turns approval into a manipulable
  scoring rule.

*Introduced:* [2.1](lessons/02-01-scoring-rules.md); used in [2.2](lessons/02-02-consistency-and-youngs-characterization.md),
[2.4](lessons/02-04-monotonicity-and-participation.md), [3.2](lessons/03-02-proving-gibbard-satterthwaite.md)

### Plurality

One point for a first place, nothing else: $s=(1,0,\dots,0)$.

Can elect a Condorcet loser (2.1 P2). Elects the UK
House of Commons. Fails Condorcet consistency, satisfies participation (scoring rule). Ballot counting and party-system
effects are [`political-institutions` 1.1](../political-institutions/lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)'s.

*Introduced:* [2.1](lessons/02-01-scoring-rules.md)

### Borda count

Equal steps between places: $s=(m-1,m-2,\dots,1,0)$, proposed by Jean-Charles de Borda (published 1784).

- **Pairwise identity (2.1 Theorem 1):** $B(x)=\sum_{y\ne x}n(x,y)$, a sum of pairwise victories.
- **Never elects a Condorcet loser,** not even in a tie; never ranks a Condorcet winner last; need not elect the
  Condorcet winner ([81 voters](#condorcets-81-voter-example): A 101, B 109, C 33).
- **Drops IIA** (1.3 Example 1): moving C between B and A changes the A-versus-B verdict.
- **Manipulable by burying** (3.1): lower a rival without lowering your favourite.
- **Lift-to-top:** its lift-to-top relation is the majority relation (3.2 Examples 1-2).
- **Truncated ballots** need a convention for unranked candidates that the course does not settle.

*Introduced:* [2.1](lessons/02-01-scoring-rules.md); used in [1.3](lessons/01-03-arrow-as-a-map.md),
[3.1](lessons/03-01-manipulation-and-strategy-proofness.md), [3.2](lessons/03-02-proving-gibbard-satterthwaite.md)

### Antiplurality

A vote against one candidate: $s=(1,\dots,1,0)$ ($s=1$ in the $(1,s,0)$ family).

Can elect a Condorcet loser (2.1 Example 1). On Condorcet's 81 voters A and B tie at 70.

*Introduced:* [2.1](lessons/02-01-scoring-rules.md)

### Consistency

Also called reinforcement: whoever wins in both of two separate electorates wins the merged one, and nobody else
does.

$$f(\mathbf P_1)\cap f(\mathbf P_2)\ne\varnothing\ \Longrightarrow\ f(\mathbf P_1+\mathbf P_2)=f(\mathbf P_1)\cap f(\mathbf P_2),$$

for disjoint electorates, on **variable electorates** (on a fixed set of voters it has no content). Silent when the
parts' winner sets are disjoint.

- **Scoring rules** (simple or composite) satisfy it, because scores add.
- **No Condorcet extension** satisfies it for $m\ge3$ (2.2 Proposition, proved for $m=3$; Zwicker 2016 for general $m$).
- **For preference functions (2.3)** the sets are sets of *rankings*: Kemeny satisfies it, but "elect the top of a
  Kemeny ranking" does not (2.3 Example 2).
- **Approval voting** satisfies it on set ballots, as one of Fishburn's axioms (6.1).
- **Not** Condorcet consistency (a different axiom, about one electorate); **not** collective rationality (4.4).
- **Participation** is its one-voter cousin (2.4).

*Introduced:* [2.2](lessons/02-02-consistency-and-youngs-characterization.md); used in
[2.3](lessons/02-03-condorcet-methods-and-kemeny.md), [6.1](lessons/06-01-approval-voting.md)

### Continuity

The Archimedean property: enough copies of an electorate that elects $x$ outright swamp any fixed minority.

$$f(\mathbf P_2)=\{x\}\ \Longrightarrow\ \exists k:\ f(\mathbf P_1+j\mathbf P_2)=\{x\}\ \text{for all }j\ge k.$$

Separates simple from composite scoring rules: plurality with a Borda tie-break fails it (2.2 P3).

*Introduced:* [2.2](lessons/02-02-consistency-and-youngs-characterization.md)

### Condorcet extension

A Condorcet-consistent rule: it elects the Condorcet winner whenever one exists.

$$x\text{ is the Condorcet winner of }\mathbf P\ \Longrightarrow\ f(\mathbf P)=\{x\}.$$

Copeland, maximin and (the top of) Kemeny are Condorcet extensions; no scoring rule is.
**No Condorcet extension is consistent** for $m\ge3$ (2.2; proof for $m=3$: a doubled symmetric cycle merged with an
electorate whose Condorcet winner it overturns. Zwicker 2016, Prop. 2.5, for general $m$). **Moulin:** with $m\ge4$ and
large enough electorates, every resolute one violates [participation](#participation).

*Introduced:* [2.2](lessons/02-02-consistency-and-youngs-characterization.md); used in
[2.4](lessons/02-04-monotonicity-and-participation.md)

### Copeland

Wins minus losses in head-to-heads, like a round-robin league table (A. H. Copeland, 1951).

$$c(x)=\#\{y:x\,M\,y\}-\#\{y:y\,M\,x\}.$$

Ignores margins (a 7-6 win counts as 13-0). **2.3 Prop 2:** with $m=4$, no pairwise ties and no Condorcet winner,
Copeland always ties at the top (score sequences $(2,2,1,1)$ or $(2,2,2,0)$). Monotone (2.4). With $m=3$ and an
alphabetical tie-break it fails participation on four voters plus one, a tie-break-driven case (2.4). Violates IIA
though it reads only pairwise majorities (1.3 P1).

*Introduced:* [2.3](lessons/02-03-condorcet-methods-and-kemeny.md); used in [2.4](lessons/02-04-monotonicity-and-participation.md)

### Maximin

A candidate is as strong as its weakest head-to-head (also called Simpson's rule or Simpson-Kramer).

$$s(x)=\min_{y\ne x}n(x,y).$$

Condorcet-consistent and monotone. **Participation:** with $m=3$ and a lexicographic tie-break it satisfies
participation (Moulin 1988); with $m=4$ it fails (2.4 Example 2: two added voters ranking A over B switch the winner
from A to B, because they lift B's weakest contest and leave A's).

*Introduced:* [2.3](lessons/02-03-condorcet-methods-and-kemeny.md); used in [2.4](lessons/02-04-monotonicity-and-participation.md)

### Kendall tau distance

How many pairs two rankings order differently (Kendall 1938); equivalently the minimum number of adjacent swaps
between them.

$$d_K(\succ,R)=\#\{\{x,y\}:\succ\text{ and }R\text{ order }x,y\text{ differently}\}.$$

In Mallows' model it plays the role squared error plays for the normal distribution.

*Introduced:* [2.3](lessons/02-03-condorcet-methods-and-kemeny.md)

### Kemeny rule

The ranking that agrees with the voters on the most (voter, pair) judgments; equivalently, the one that overrules
the cheapest set of majorities, each costing its margin (John Kemeny, 1959).

$$K(R)=\sum_{x\,R\,y}n(x,y)=n\binom m2-\sum_i d_K(\succ_i,R).$$

Returns the **set** of rankings maximizing $K$: a **preference function**, not an Arrovian social welfare function.

- **Margins form** (2.3 Prop 1): see [Kemeny formulas](#kemeny-formulas).
- **Ranks** a Condorcet winner first and a Condorcet loser last.
- **If $M$ is a strict ranking,** it is the unique Kemeny ranking.
- **Characterized by** [Young-Levenglick](#young-levenglick-theorem).
- **Maximum-likelihood ranking** under Condorcet's noise model ([Young 1988](#kemeny-as-maximum-likelihood); 5.3).
- **Computationally hard** in general (weighted feedback arc set; Bartholdi, Tovey and Trick, 1989).

*Introduced:* [2.3](lessons/02-03-condorcet-methods-and-kemeny.md); used in
[5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

### Monotonicity

Raising the winner can't make it lose.

If $f(\mathbf P)=x$ and $\mathbf P'$ differs only in that some voters move $x$ up, leaving the relative order of the
others unchanged, then $f(\mathbf P')=x$.

- **Who has it:** every scoring rule, maximin and Copeland.
- **Who fails it:** IRV and plurality with runoff (2.4 Example 1: 17 voters, the smallest tie-free three-candidate
  case).
- **Not strategic:** a failure needs no strategic voter; sincere opinion shifts trigger it.
- **Its relatives:** much weaker than [strong monotonicity](#strong-monotonicity) (3.1) and than
  [positive responsiveness](#positive-responsiveness) (1.2).

*Introduced:* [2.4](lessons/02-04-monotonicity-and-participation.md) (named in [1.2](lessons/01-02-mays-theorem.md))

### Participation

By her own ranking, a voter never does strictly worse by voting than by abstaining.

$$f(\mathbf P+\succ)=f(\mathbf P)\quad\text{or}\quad f(\mathbf P+\succ)\succ f(\mathbf P)\qquad\text{for every }\mathbf P,\ \succ.$$

Defined for resolute rules on variable electorates; implies the group version (add identical ballots one at a time).
Every scoring rule with a fixed tie-break satisfies it (2.4 Prop 2). IRV fails it. With $m\ge4$
[Moulin](#moulins-no-show-theorem) makes it incompatible with Condorcet consistency on large enough electorates. For
set-valued rules "worse" needs a convention for comparing sets.

*Introduced:* [2.4](lessons/02-04-monotonicity-and-participation.md)

### No-show paradox

A violation of participation: adding sincere ballots that rank $x$ over $y$ switches the winner from $x$ to $y$.

IRV example with 9 voters plus 2 (2.4 P3); maximin with four candidates, 7 voters plus 2 (2.4 Example 2). With three
candidates and maximin under an alphabetical tie-break, an exhaustive search up to 9 voters plus one ballot finds none.

*Introduced:* [2.4](lessons/02-04-monotonicity-and-participation.md)

### Instant runoff

Eliminate the candidate with the fewest first preferences and transfer its ballots, until someone has a majority.

With three candidates IRV coincides with **plurality with runoff** (top two advance to a majority vote), so every
three-candidate counterexample hits both.

- **Fails monotonicity and participation** for every $m\ge3$ (2.4 Prop 1; extra candidates ranked below the original
  three change nothing).
- **Can squeeze out the Condorcet winner** in round 1 (2.4 Example 1).
- **Manipulable** by compromise and push-over (3.1).
- **Needs a tie-break** to be resolute.

AV and STV counting: [`political-institutions` 1.2](../political-institutions/lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md).

*Introduced:* [2.4](lessons/02-04-monotonicity-and-participation.md); used in
[3.1](lessons/03-01-manipulation-and-strategy-proofness.md)

**Module 3: strategy and restricted domains**

### Manipulation

With everyone else's ballots fixed, a lie gets voter $i$ an outcome $i$ truly prefers.

$$f(\succ_i',\mathbf P_{-i})\succ_i f(\mathbf P)\quad\text{for some report }\succ_i'.$$

Kinds: **burying** (Borda: lower a rival without lowering your favourite), **compromise** (IRV: rank a viable
candidate first so someone else goes out), **push-over** (IRV: rank a weak candidate first to change who survives).
Every manipulation exhibits a strong-monotonicity failure, and with a resolute rule the manipulable profile can depend
on the tie-break (3.1 Example 2).

*Introduced:* [3.1](lessons/03-01-manipulation-and-strategy-proofness.md)

### Strategy-proofness

No voter can manipulate at any profile: truth-telling is a (weakly) dominant strategy.

$$f(\succ_i',\mathbf P_{-i})\not\succ_i f(\mathbf P)\quad\text{for all }i,\ \mathbf P,\ \succ_i'.$$

It is dominant-strategy incentive compatibility ([`grad-game-theory` 5.2](../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md)).

- **Unrestricted domain, range at least 3:** only dictatorships ([Gibbard-Satterthwaite](#gibbard-satterthwaite-theorem)).
- **Two alternatives:** majority has it.
- **Single-peaked domain:** generalized medians have it ([Moulin](#generalized-median-rule)).
- **Approval voting:** has it only on the dichotomous domain (6.1).
- **Grade ballots:** Balinski-Laraki show no grade aggregator is strategy-proof in ranking, and order functions are the
  only ones strategy-proof in grading (6.2).
- **Money:** VCG escapes by adding transfers.

*Introduced:* [3.1](lessons/03-01-manipulation-and-strategy-proofness.md); used in
[3.2](lessons/03-02-proving-gibbard-satterthwaite.md), [3.3](lessons/03-03-single-peakedness-black-and-moulin.md),
[6.1](lessons/06-01-approval-voting.md), [6.2](lessons/06-02-range-voting-and-majority-judgment.md)

### Strong monotonicity

If the winner does not fall against anything in anyone's ranking, it still wins, however the rest is shuffled. Also
called Maskin monotonicity.

$$f(\mathbf P)=x\ \text{and}\ \big(x\succ_i y\Rightarrow x\succ_i' y\ \text{for all }i,y\big)\ \Longrightarrow\ f(\mathbf P')=x.$$

- **3.1 Lemma 1:** strategy-proofness implies it. Proof idea: change voters one at a time; if the outcome moves, the
  voter who moved it either lied to get the new outcome or could lie to get the old one back.
- **The converse** holds on the unrestricted domain (Muller-Satterthwaite 1977; 3.1 P2).
- **Much stronger than [monotonicity](#monotonicity):** Borda is monotone in 2.4's sense, but every Borda manipulation
  is a strong-monotonicity failure.
- **It drives 3.2** steps 3, 4 and 6 (lift lemma).
- **In implementation theory** it is the necessary condition for Nash implementation (Maskin, circulated 1977,
  published 1999).

*Introduced:* [3.1](lessons/03-01-manipulation-and-strategy-proofness.md); used in
[3.2](lessons/03-02-proving-gibbard-satterthwaite.md)

### Lift-to-top construction

Ask a choice rule who wins when each pair is lifted to the top of every ballot, and rank the pair that way.

$\mathbf P^S$ moves the members of $S$ to the top of every ballot, keeping each voter's order inside $S$ and inside the
rest; $\mathbf P^{xy}=\mathbf P^{\{x,y\}}$.

$$x\,F(\mathbf P)\,y\iff f(\mathbf P^{xy})=x.$$

- **Lift lemma:** if $f$ is strongly monotone, $f(\mathbf P)=w$ and $w\in S$, then $f(\mathbf P^S)=w$.
- **Claim (3.2):** for onto, strategy-proof $f$, $F$ is an Arrovian social welfare function into strict rankings
  (complete and asymmetric by Pareto; weak Pareto; IIA by strong monotonicity; transitive by one more lift), and
  $f(\mathbf P)$ is the top of $F(\mathbf P)$.
- **For a scoring rule with $s_1>s_2$,** $F$ is pairwise majority (ties to the tie-break). With odd $n$, step 4 fails
  exactly on cyclic profiles, so manipulation is the strategic shadow of Condorcet's paradox, though not its only
  source.

The textbook route, in this form due to Schmeidler and Sonnenschein (1978). Reny (2001) proves Arrow and GS together by
one direct argument instead.

*Introduced:* [3.2](lessons/03-02-proving-gibbard-satterthwaite.md)

### Single-peaked preferences

One favourite on a common line, and nearer is better on each side of it.

With axis $<$ on $A$ and peak $p_i$:

$$p_i\le y<z\ \text{ or }\ z<y\le p_i\ \Longrightarrow\ y\succ_i z.$$

A profile is single-peaked if all rankings are single-peaked on **one common** axis.

- **Order only:** fixes the order on each side of the peak; comparisons across the peak are free, and no distances
  are needed.
- **Few rankings:** only $2^{m-1}$ of the $m!$ rankings per axis (8 of 24 for $m=4$).
- **Never-last lemma:** for $x<y<z$, no voter ranks $y$ last among the three. Hence value restriction (3.4).
- **Worst options:** a single-peaked voter's worst option is an endpoint.
- **Breakers:** one voter preferring both extremes to the middle breaks it for that triple. Two policy dimensions
  with Euclidean preferences break it too.

*Introduced:* [3.3](lessons/03-03-single-peakedness-black-and-moulin.md); used in
[3.4](lessons/03-04-single-crossing-and-value-restriction.md)

### Phantom voters

Fixed fake ballots $a_1,\dots,a_k$ added to the reported peaks before taking a median.

With $n+k$ odd, $f=\operatorname{med}(p_1,\dots,p_n,a_1,\dots,a_k)$. Phantoms buy range and encode a status quo, a
constant or an order statistic:

| Phantoms | Rule |
|---|---|
| $(n+1)/2$ at each end ($n$ odd) | median of peaks |
| all $n+1$ at $c$ | constant $c$ |
| $n+1-k$ at the left end, $k$ at the right | $k$-th smallest peak |
| $n-1$ phantoms | outcome in $[\min p_i,\max p_i]$, so Pareto efficient |

*Introduced:* [3.3](lessons/03-03-single-peakedness-black-and-moulin.md)

### Single-crossing

Line the voters up so that every pair's verdict flips at most once along the line. It orders voters, not
alternatives.

$\mathbf P$ is single-crossing if voters can be labelled $1,\dots,n$ so that for every pair $x,y$,
$S_{xy}=\{i:x\succ_i y\}$ is an initial segment $\{1,\dots,k\}$ or a final segment $\{k,\dots,n\}$ (empty and $N$
included). **One order for all pairs**: each pair separately splitting the voters in two is not enough (3.4 Example 2).
Neither of single-peaked and single-crossing contains the other. Roberts (1977, linear tax schedules); Gans and Smart
(1996, general ordinal condition). Ordinal cousin of the Spence-Mirrlees condition.

*Introduced:* [3.4](lessons/03-04-single-crossing-and-value-restriction.md)

**Module 4: rights and reasons**

### Minimal liberalism

At least two people each get the last word on at least one pair, whichever way they rank it.

**(ML):** there are distinct $i,j$ and pairs $\{x,y\}$, $\{z,w\}$ with $i$ **decisive** over $\{x,y\}$
($x\succ_i y\Rightarrow x\,P\,y$ and $y\succ_i x\Rightarrow y\,P\,x$) and $j$ decisive over $\{z,w\}$.

Strictly stronger than [non-dictatorship](#non-dictatorship): a dictator and a second decisive person contradict each
other on a profile where they disagree. Much weaker than Gibbard's **libertarian claim** (everyone decisive over every
pair differing only in her own feature, 4.2). With only **one** right-holder there is no paradox: make her dictator.
Two people decisive over one distinct pair each give at most two verdicts, which cannot close a cycle.

*Introduced:* [4.1](lessons/04-01-sens-liberal-paradox.md); used in [4.2](lessons/04-02-answers-to-sen.md)

### Acyclicity

No strict social cycle $x_1\,P\,x_2\,P\cdots P\,x_k\,P\,x_1$: every menu has a best option.

A **collective choice rule** gives a complete reflexive $R$ with strict part $P$; its **choice set** is
$C(S)=\{x\in S:x\,R\,y\ \forall y\in S\}$. A **social decision function** has $C(S)\ne\varnothing$ for every nonempty
$S$ at every profile; on finite $A$ this is equivalent to acyclicity of $P$ (Sen, *Collective Choice and Social
Welfare*, 1970; the course proves only "cycle $\Rightarrow$ empty choice set", 4.1 Lemma 1). Weaker than
quasi-transitivity, which is weaker than transitivity. An acyclic relation need not be transitive (4.1 P1(b)).

*Introduced:* [4.1](lessons/04-01-sens-liberal-paradox.md); used in [4.2](lessons/04-02-answers-to-sen.md)

### Meddlesome preferences

Caring more about an outcome in someone else's protected sphere than about your own: ranking another's matter above
your own on the pairs that drive the cycle.

Sen's cycle needs them (in 4.1 Case 1, $i$ ranks $z$, an outcome in $j$'s sphere, above $x$ in her own).
**4.2 Theorem 3 (two persons, two-valued features, unconditional preferences):** rights plus weak Pareto force a cycle
iff both prefer "both give way" $\bar a$ to "both have their own way" $a^*$ (4 of 144 such profiles). Blau (1975, *Review
of Economic Studies*) is the standard citation for "no meddling, no conflict". Under impartial culture with rightless
extra voters, the cyclic share for 4.1's rule is $\tfrac1{18}(\tfrac12)^{n-2}$: a yardstick, not a frequency.

*Introduced:* [4.1](lessons/04-01-sens-liberal-paradox.md); used in [4.2](lessons/04-02-answers-to-sen.md)

### Rights as game forms

A right is a set of moves you may make, not a verdict on social states; the outcome is whatever the moves produce.

A game form gives each person a set of admissible strategies and an outcome function; rights are respected when
everyone may play any admissible strategy. No social ranking is constrained, so nothing can contradict. Nozick
(*Anarchy, State, and Utopia*, 1974, pp. 164-166); Gärdenfors (1981); Sugden (1985); Gaertner, Pattanaik and Suzumura
(1992).

- **Removes the contradiction, not the inefficiency:** Sen's case becomes a prisoner's dilemma (4.2 Example 1), and
  Gibbard's case has no pure-strategy equilibrium (Peleg 1998). A script over 576 two-value profiles: the rights
  relation cycles exactly when the game has no pure equilibrium.
- **Can disagree with Sen's reading** with no meddling and no Pareto conflict (4.2 Example 2, after GPS).
- **Sen's reply** ("Minimal Liberty", 1992): a game form must still say which strategies are admissible and why.
- **Variants of the impossibility survive** in game forms (Pattanaik 1996; Deb, Pattanaik and Razzolini 1997).

*Introduced:* [4.2](lessons/04-02-answers-to-sen.md)

### Judgment aggregation

Aggregating yes/no judgments on logically connected propositions instead of rankings.

An **agenda** $X$ is a finite set of propositions closed under negation. A **judgment set** $J_i\subseteq X$ is
**consistent** (some truth assignment makes it all true) and **complete** (contains $p$ or $\neg p$ for each pair). An
aggregation function $F$ maps profiles $(J_1,\dots,J_n)$ to a collective set.
**Proposition-wise majority:** $M=\{p\in X:|\{i:p\in J_i\}|>n/2\}$; odd $n$ with complete inputs gives a complete
$M$; consistency is the question. **Supporters:** $N_\varphi(\mathbf J)=\{i:\varphi\in J_i\}$.
A set is **minimally inconsistent** if inconsistent with every proper subset consistent.

*Conditions (4.4):*

- **Universal domain (UD):** every profile of complete consistent sets.
- **Collective rationality (CR):** complete and consistent output.
- **Anonymity (A):** permuting the voters does not change the output.
- **Independence:** the verdict on $\varphi$ depends only on $N_\varphi$.
- **[Systematicity](#systematicity) (S).**
- **Unanimity preservation.**

Escapes from [List-Pettit](#list-pettit-impossibility):

| Procedure | Keeps | Gives up |
|---|---|---|
| [premise-based](#premise-based-procedure) | UD, CR, A | independence on the conclusion, hence S |
| [conclusion-based](#conclusion-based-procedure) | consistency, A | completeness (premises undecided) |
| supermajority, more than $2n/3$ | consistency | completeness |
| sequential priority | UD, CR | independence; outcome depends on the order ([path dependence](#agenda-control)) |
| dictatorship | UD, CR, S | A |
| a rule built in 4.4 P3 | UD, CR, A, independence | neutrality across propositions, hence S |
| unidimensional alignment (List 2003) | majority consistent | UD |

*Introduced:* [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md); used in
[4.4](lessons/04-04-the-list-pettit-impossibility.md)

### Doctrinal paradox

Premise majorities and the conclusion majority disagree although every member accepts the doctrine linking them.

Kornhauser and Sager (1986, "Unpacking the Court", *Yale Law Journal*). Tenure example (4.3): conclusion
$c\leftrightarrow(t\wedge r\wedge s)$; three members each reject a different criterion, so $t$, $r$, $s$ each pass 2-1
and $t\wedge r\wedge s$ fails 0-3. With $k$ criteria and $k$ members: each premise passes $k-1$ to 1, the conclusion
fails 0 to $k$. On a conjunctive agenda the split runs one way only: "premises yes, conclusion no".

*Introduced:* [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md)

### Discursive dilemma

Proposition-wise majority on connected propositions returns an inconsistent set, with or without a premise/conclusion
split; the group must choose between responsiveness on conclusions and giving collective reasons.

Pettit (2001, "Deliberative Democracy and the Discursive Dilemma"). Example shape: majorities for $p$, $p\to q$ and
$\neg q$, or for $p$, $q$ and $\neg(p\wedge q)$ (step 5 of the [List-Pettit](#list-pettit-impossibility) proof). The
connecting rule can itself be on the agenda and in dispute. It bites only if collective reasons matter (precedent,
accountability, deliberation): Pettit's normative premise, not a theorem.

*Introduced:* [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md); used in
[4.4](lessons/04-04-the-list-pettit-impossibility.md)

### Premise-based procedure

Majority on each designated (logically independent) premise; derive the conclusion by logic.

- **Keeps** UD, CR and anonymity; consistent and complete for odd $n$.
- **Can override a unanimous conclusion** (4.3 tenure: tenure granted against a 0-3 vote).
- **Violates independence on the conclusion,** hence systematicity (4.4 Example 2): by design, the conclusion's
  verdict depends on the premises, not on its own supporters.
- **Truth-tracking (5.3):** neither it nor the conclusion-based procedure dominates on bare verdicts; Bovens and
  Rabinowicz (2006): premise-based is superior for "truth for the right reasons".

*Introduced:* [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md); used in
[4.4](lessons/04-04-the-list-pettit-impossibility.md), [5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

### Conclusion-based procedure

Each member reasons privately; majority on the conclusion only; premises left collectively undecided.

Consistent by construction, incomplete, gives no collective reasons. Courts that announce a disposition by an outcome
vote work this way. Listed under relaxing completeness (4.4). Can beat the premise-based procedure on bare-verdict
accuracy in some states (5.3).

*Introduced:* [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md); used in
[5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

### Systematicity

Same supporters, same verdict, for any two propositions across any two profiles: one test for every proposition.

$$N_\varphi(\mathbf J)=N_\psi(\mathbf J^*)\ \Longrightarrow\ \big(\varphi\in F(\mathbf J)\iff\psi\in F(\mathbf J^*)\big).$$

With $\varphi=\psi$ forced this is **independence** (the analogue of Arrow's IIA); systematicity = independence +
**neutrality across propositions**. With anonymity it reduces $F$ to a count function $g(|N_\varphi|)$, and
complementarity forces $g(n-k)=1-g(k)$: May's logic in judgment form. On the conjunctive agenda the neutrality half is
what does the damage: without it there is an escape (4.4 P3).

*Introduced:* [4.4](lessons/04-04-the-list-pettit-impossibility.md)

**Module 5: truth-tracking**

### Competence

A voter's probability of voting for the correct answer on a binary question (the same in both states in 5.1).

$p_i=\Pr(\text{voter }i\text{ votes correctly})$, $q=1-p$. The jury theorem needs a common $p>\tfrac12$ (premise E2 in
5.3). With unequal independent competences, the **average** must stay a fixed margin above a half (5.2 Prop 2); an
average above a half guarantees nothing for small $n$ (competences 0.95, 0.3, 0.3 average 0.517 but the majority is
right with probability 0.489). Below a half the theorem runs in reverse. Nobody measures $p-\tfrac12$ directly.

*Introduced:* [5.1](lessons/05-01-the-condorcet-jury-theorem.md); used in [5.2](lessons/05-02-when-the-jury-theorem-fails.md),
[5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

### Correlated voters

Errors with a common cause upstream of every vote: shared evidence, a briefing everyone read, opinion leaders,
factions. Five hundred reporters rewriting one wire story are one source.

- **Copying one leader:** if everyone copies one leader of competence $p$, then $P_n=p$ for every $n$ (5.1).
- **Common-cause theorem** (Dietrich and Spiekermann 2013; 5.2 Theorem 3): a random circumstance $C$ takes finitely
  many values; given the truth and $C=c$, votes are independent with competence $p_c$. Then for odd $n$
  $$\lim_{n\to\infty}P_n=\Pr\big(p_C>\tfrac12\big)+\tfrac12\Pr\big(p_C=\tfrac12\big).$$
  Proof idea: total probability over $c$, then the jury theorem or its reverse in each circumstance.
- **Correlation size is not what matters:** pairwise covariance of correctness is $\operatorname{Var}(p_C)$, but the
  limit turns on whether the circumstance can push competence below a half. A circumstance giving 0.6 or 0.9 still has
  limit 1 (5.2 Example 1).
- **Ladha (1992)** first reworked the theorem for pairwise-correlated votes.
- **Rousseau's factions (5.3):** blocs following one leader; 99 independent citizens at $p=0.65$ give 0.9989, three
  blocs of 33 give $P_3(0.65)=0.71825$.

*Introduced:* [5.1](lessons/05-01-the-condorcet-jury-theorem.md); used in [5.2](lessons/05-02-when-the-jury-theorem-fails.md),
[5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

### Condorcet noise model

A true ranking $R^*$; every voter orders every pair as $R^*$ does with probability $p\in(\tfrac12,1)$, independently
across voters and pairs.

With $N=n\binom m2$ voter-pair judgments and agreement score $a(R)=\sum_{x\text{ above }y\text{ in }R}n(x,y)$:

$$L(R)=(1-p)^N\varphi^{a(R)},\qquad\varphi=\frac p{1-p},\qquad\Pr(R\mid\mathbf P)\propto\varphi^{a(R)}\ \text{(uniform prior)}.$$

- **The MLE is Kemeny** (Young 1988; 5.3 Theorem 1).
- **Conditioning on transitive ballots** gives Mallows (1957), same MLE (normaliser independent of the centre).
- **Likeliest winner is a different estimate:** it depends on $p$, can reject a Condorcet winner, and tends to the
  Borda winner as $p\to\tfrac12$ (first-order expansion: $\varphi^a\approx1+(\varphi-1)a$).
- **Pair-dependent $p$** gives a weighted Kemeny rule; a non-uniform prior can move the posterior mode.

*Introduced:* [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) (Mallows form in [2.3](lessons/02-03-condorcet-methods-and-kemeny.md))

### Epistemic democracy

The view that democratic procedures are justified at least partly by tracking a procedure-independent correct answer.

The justification debate is [`political-philosophy` 5.1](../political-philosophy/lessons/05-01-why-democracy.md)'s
(Estlund's authority tenet). 5.3 supplies the formal premises (the [jury-theorem argument
form](#jury-theorem-argument-form)), the posterior for an outvoted citizen (Lemma 2: $\varphi^d/(1+\varphi^d)$, $d=2k-n$,
only the margin matters) and Landemore's use of [Hong-Page](#diversity-trumps-ability). Belief is not obedience: Lemma 2
gives a reason to believe, conditional on E1-E4, with a strength set by an unobserved $p$.

*Introduced:* [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) (named in [5.2](lessons/05-02-when-the-jury-theorem-fails.md))

**Module 6: richer inputs**

### Approval voting

Each voter approves any subset of candidates; most approvals wins (Brams and Fishburn, *APSR*, 1978).

$$s(x)=|\{i:x\in B_i\}|,\qquad\text{winners}=\arg\max_x s(x).$$

- **Characterized** by faithfulness, consistency and cancellation ([Fishburn](#fishburns-characterization-of-approval-voting)).
- **Strategy-proof only on the dichotomous domain** ([Brams-Fishburn](#brams-fishburn-sincerity-theorem)).
- **Sincere approval names a set of possible outcomes, not one:** any candidate that no rival Pareto-dominates,
  including a Condorcet winner and possibly a Condorcet loser, wins under some sincere profile (6.1 Prop 3).
  The Condorcet winner can finish last on sincere ballots (6.1 Example 1).
- **Strategic voters draw the line** at mean utility (equal pivot odds) or by the [leader rule](#leader-rule); either way
  they never misorder anyone.
- **Range voting collapses to it** under strategic voting (6.2).
- **Does not escape GS cleanly:** any fixed ranking-to-ballot map ("approve your top two") makes the composite a
  manipulable scoring rule.

*Introduced:* [6.1](lessons/06-01-approval-voting.md); used in [6.2](lessons/06-02-range-voting-and-majority-judgment.md)

### Sincere ballot

An approval ballot that is a top segment of the voter's ranking: never approve a candidate while skipping one you like
better.

$$x\in B_i\ \text{and}\ y\succ_i x\ \Longrightarrow\ y\in B_i.$$

With three candidates every undominated ballot is sincere; with four the insincere $\{a,c\}$ can be undominated
(Brams-Fishburn). Both strategic thresholds (mean utility, leader rule) give sincere ballots.

*Introduced:* [6.1](lessons/06-01-approval-voting.md)

### Dichotomous preferences

Every candidate is simply acceptable or not: a good set $G_i$ and a bad set, indifferent within each.

Approving exactly $G_i$ is weakly dominant under approval voting (Brams-Fishburn 1978). Critics: few voters have them;
most have a compromise candidate in the middle. A domain restriction in Module 3's style.

*Introduced:* [6.1](lessons/06-01-approval-voting.md)

### Leader rule

Given a poll leader $\ell$ and challenger $k$: approve every candidate you prefer to $\ell$, and approve $\ell$ iff you
prefer $\ell$ to $k$ (Jean-François Laslier, 2009, *Journal of Theoretical Politics*).

Derived (6.1 Prop 4(ii)) from pivot-probability reasoning when the $\ell$-$k$ tie is far likelier than any other and ties
involving $\ell$ far likelier than ties without it. Always sincere. Iterated on polls it can reach the Condorcet winner
(6.1 Example 2); one example does not show how generally.

*Introduced:* [6.1](lessons/06-01-approval-voting.md)

### Range voting

Grade every candidate on $\{0,\dots,K\}$; the highest total (equivalently mean) wins.

$$R(x)=\sum_i g_i(x).$$

**Collapses to approval** (6.2 Prop 1): (a) if a voter knows the others' totals, "top grade for $w$, bottom for everyone
else" elects $w$ whenever any ballot does; (b) under uncertain near-ties her gain is linear in each grade, so she uses
only $0$ and $K$, giving $K$ to candidates above her mean utility when pivot odds are equal. An honest voter who uses
middle grades has less say. **Needs shared distances** between grade words, not just their order: renumbering the words
order-preservingly can change the range winner. Can elect the Condorcet loser (6.2 Example 1). Normalized range is
relative utilitarianism (6.3 Example 2).

*Introduced:* [6.2](lessons/06-02-range-voting-and-majority-judgment.md); used in [6.3](lessons/06-03-utilities-in-possibility-out.md)

### Majority judgment

Elect the candidate with the highest median grade; break ties by the majority value (Michel Balinski and Rida Laraki,
*PNAS* 2007; *Majority Judgment*, MIT Press, 2010).

Sort $x$'s grades $r_1(x)\ge\dots\ge r_n(x)$. The **majority grade** is

$$\alpha(x)=r_{(n+1)/2}(x)\ (n\text{ odd}),\qquad\alpha(x)=r_{(n+2)/2}(x)\ (n\text{ even, the lower middlemost}).$$

The highest grade a strict majority gives $x$ or better.

- **Majority value:** delete one copy of $\alpha(x)$ from each tied candidate, recompute, repeat; rank
  lexicographically. It separates two candidates unless their grade sets are identical. The "majority gauge" of the
  book is not taught.
- **Order function:** reports $r_k(x)$ for a fixed $k$; $\alpha$ is one.
- **Strategy claims:** see [Balinski-Laraki](#balinski-laraki-strategy-claims).
- **Needs a common absolute grading language**, a shared *order* of words only: majority words commute with any
  order-preserving relabelling. If voters grade relative to the menu, Arrow forces an IIA violation (6.2).
- **Can elect a candidate four of five voters grade lower than its rival** (6.2 Watch out). A median rule, like 3.3's.

*Introduced:* [6.2](lessons/06-02-range-voting-and-majority-judgment.md)

### Social welfare functional

A social welfare function whose ballots are numbers (Sen 1970, *Collective Choice and Social Welfare*).

$F$ maps each utility profile $\mathbf u=(u_1,\dots,u_n)$, $u_i:A\to\mathbb R$, to a weak order $\succsim_{\mathbf u}$ on $A$.
Arrow's conditions restated: U (every utility profile), WP, **utility IIA** (if every $u_i(x)$, $u_i(y)$ is unchanged, the
verdict on $\{x,y\}$ is unchanged; weaker than Arrow's), ND.

*Introduced:* [6.3](lessons/06-03-utilities-in-possibility-out.md)

### Invariance classes

Which transformations of each person's utilities count as the same information. $F$ must give the same order on
equivalent profiles; more transformations, less information.

| Class | $\varphi_i(t)$ | Meaningful across people |
|---|---|---|
| ONC | any increasing $\varphi_i$, chosen separately | nothing |
| CNC | $a_it+b_i$, each $a_i>0$ separately | nothing |
| OLC | one increasing $\varphi$ for all | levels |
| CUC | $at+b_i$, one $a>0$ | units (gains and losses) |
| CFC | $at+b$, one $a$, one $b$ | levels and units |

Labels from Sen (1970, 1977); full table owned by [`decision-theory` 5.2](../decision-theory/lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md).
Majority judgment needs level comparability (shared order of grade words), range voting unit comparability (shared
distances). Results: [Sen's utility impossibility](#sens-utility-impossibility) under CNC/ONC; the
[utilitarian rule](#utilitarian-rule) under CUC; [leximin](#leximin) under OLC; under CFC both are meaningful and
choosing needs further axioms (Deschamps and Gevers 1978 characterize the pair).

*Introduced:* [6.3](lessons/06-03-utilities-in-possibility-out.md)

### Utilitarian rule

Add up the utilities.

$$x\succsim y\iff\sum_iu_i(x)\ge\sum_iu_i(y).$$

Satisfies U, WP, utility-IIA, anonymity (hence ND). Invariant under CUC (and CFC), **not** CNC or OLC: using a raw sum
asserts unit comparability. Characterized under CUC with anonymity and strong Pareto (d'Aspremont and Gevers 1977;
stated, not proved). Harsanyi's weighted sum ([`decision-theory` 5.1](../decision-theory/lessons/05-01-harsanyis-aggregation-theorem.md))
fixes the form; fixing the weights is a unit comparison.

*Introduced:* [6.3](lessons/06-03-utilities-in-possibility-out.md)

### Leximin

Compare the worst-off utilities; if tied, the second worst-off; and so on.

Satisfies U, WP, utility-IIA, anonymity (hence ND). Invariant under OLC (and CFC), **not** CUC: a common increasing
transformation commutes with sorting, but adding a constant to one person can reorder the minima. Characterized with an
equity axiom under OLC (Hammond 1976; d'Aspremont and Gevers 1977; stated, not proved). Maximin as justice is
[`political-philosophy` 2.3](../political-philosophy/lessons/02-03-rawls-the-two-principles-and-maximin.md)'s.

*Introduced:* [6.3](lessons/06-03-utilities-in-possibility-out.md)

**Module 7: apportionment**

### Quota

A state's exact entitlement if seats could be cut into fractions: its population share times the house size.

$$q_i=\frac{h\,p_i}{P}=\frac{p_i}{P/h},$$

with $P=\sum_ip_i$, standard divisor $P/h$ (population per seat), **lower quota** $\lfloor q_i\rfloor$ and **upper quota**
$\lceil q_i\rceil$. The quotas sum to $h$.

*Introduced:* [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md); used in [7.2](lessons/07-02-divisor-methods-and-balinski-young.md)

### Quota rule

No state is ever a whole seat or more from its exact entitlement.

$$\lfloor q_i\rfloor\le a_i\le\lceil q_i\rceil\quad\text{for every }i.$$

Hamilton always satisfies it. Divisor methods can violate it: Jefferson never below lower quota but can exceed upper;
Adams never above upper but can fall below lower; Webster and Hill-Huntington can break either side, but only with four
or more states for Webster (with three states Webster never violates quota). The Balinski-Young quota method (1975)
satisfies quota and is house monotone.

*Introduced:* [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md); used in [7.2](lessons/07-02-divisor-methods-and-balinski-young.md)

### Hamiltons method

Give each state its lower quota, then hand the leftover seats to the largest remainders (Hare largest remainders;
Alexander Hamilton, 1792; used by Congress as Vinton's method in the later nineteenth century).

With $r_i=q_i-\lfloor q_i\rfloor$, the $L=h-\sum_i\lfloor q_i\rfloor$ leftover seats go one each to the $L$ largest $r_i$.
**7.1 Prop 1:** it satisfies quota and **uniquely minimizes** $D(a)=\sum_i|a_i-q_i|$ (a minimizer must satisfy quota;
then each extra seat adds $1-2r_i$, smallest for the largest remainders). **7.1 Prop 2:** it fails house monotonicity,
population monotonicity and coherence for new states. Cause: any change in $h$ or $P$ rescales all quotas at once, and
large states' remainders move fastest. Counting: [`political-institutions` 1.3](../political-institutions/lessons/01-03-list-pr-quotas-and-largest-remainders.md).

*Introduced:* [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md)

### Alabama paradox

A failure of **house monotonicity**: the house grows by a seat, populations fixed, and a state loses a seat.

7.1 Example 1 (populations 150, 370, 480 thousand): Hamilton gives A 2 seats at $h=9$ and 1 at $h=10$, the only drop for
$h=4,\dots,14$. Impossible with two states (7.1 P2). History: after the 1880 census C. W. Seaton found Alabama got 8 seats
in a House of 299 and 7 in a House of 300. Divisor methods never show it.

*Introduced:* [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md)

### Population paradox

A failure of **population monotonicity**: state $i$ grows by a strictly larger factor than state $j$, yet $i$ loses a
seat while $j$ gains one.

7.1 uses fixed $h$; Balinski-Young's form (7.2) compares $(p,h)$ with $(p',h')$, house sizes allowed to differ:
if $p'_i/p'_j>p_i/p_j$, never $a'_i<a_i$ and $a'_j>a_j$. 7.1 Example 2: under Hamilton a state's **quota can rise and it
still loses a seat** (another state's floor dropped, opening an extra leftover seat). Virginia and Maine around 1900.
Divisor methods never exhibit it (7.2 Prop 1).

*Introduced:* [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md); used in [7.2](lessons/07-02-divisor-methods-and-balinski-young.md)

### New states paradox

A new state joins, the house grows by exactly the seats it receives, yet an old state's delegation changes.

The house grows by a whole number of seats, not by the new state's fractional quota, so the divisor moves and every old
quota is rescaled (7.1 P1). Oklahoma, 1907.

*Introduced:* [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md)

### Divisor method

Fix a price per seat, divide every population by it, round every quotient by one rule, and adjust the price until the
seats add up to $h$.

Thresholds $\delta(0)<\delta(1)<\cdots$ with $k\le\delta(k)\le k+1$; $x$ rounds to $k$ when $\delta(k-1)<x<\delta(k)$
($\delta(-1)=0$; at a threshold either neighbour).

$$a_i=\operatorname{round}(p_i/d)\quad\text{for any }d>0\text{ with }\textstyle\sum_ia_i=h.$$

| Method | $\delta(k)$ | Rounds | Quota | Bias (Balinski-Young) |
|---|---|---|---|---|
| [Jefferson](#jeffersons-method) (D'Hondt) | $k+1$ | down | never below lower quota | favours large states |
| Adams | $k$ | up | never above upper quota | favours small states |
| [Webster](#websters-method) (Sainte-Laguë) | $k+\tfrac12$ | nearest | either side, with 4+ states | unbiased |
| [Hill-Huntington](#hill-huntington-method) | $\sqrt{k(k+1)}$ | above the geometric mean | either side | leans slightly small |

**Seat by seat:** the next seat goes to the largest $p_i/\delta(a_i)$. **7.2 Prop 1:** every divisor method is population
monotone (across house sizes too) and house monotone (proved: a state's seats depend only on its own population and the
common price). Adams and Hill-Huntington have $\delta(0)=0$, so every state gets a seat. Party-list counting of D'Hondt
and Sainte-Laguë: [`political-institutions` 1.4](../political-institutions/lessons/01-04-list-pr-divisor-methods.md).

*Introduced:* [7.2](lessons/07-02-divisor-methods-and-balinski-young.md)

### Jeffersons method

The divisor method that rounds down: $\delta(k)=k+1$; the same arithmetic as D'Hondt.

Never violates lower quota (7.2 Prop 2: any working divisor has $d\le P/h$, so $p_i/d\ge q_i$); can exceed upper quota;
favours large states (largest state averages about $+0.39$ seats over quota in the lesson's simulation).

*Introduced:* [7.2](lessons/07-02-divisor-methods-and-balinski-young.md)

### Websters method

The divisor method that rounds to the nearest integer: $\delta(k)=k+\tfrac12$; the same arithmetic as Sainte-Laguë.

Unbiased in Balinski and Young's sense. Can violate quota **both ways** with four or more states (several small states
rounding the same way pile a whole seat onto or off one large state; 7.2 Example 2); with three states it never violates
quota, so it then has both quota and population monotonicity.

*Introduced:* [7.2](lessons/07-02-divisor-methods-and-balinski-young.md)

### Hill Huntington method

The divisor method that rounds at the geometric mean: $\delta(k)=\sqrt{k(k+1)}$ (method of equal proportions).

$\delta(0)=0$, so every state gets at least one seat. Census priority value for a state's $n$-th seat:
$p/\sqrt{n(n-1)}$. Adopted by Congress for the US House in 1941, after the 1940 census. Leans slightly toward small
states; can break quota on either side.

*Introduced:* [7.2](lessons/07-02-divisor-methods-and-balinski-young.md)

## Theorems

Ordered by module. Each entry: statement with all hypotheses, plain-English line, proof idea, what it does
not say, lessons.

**Module 1: the aggregation problem**

### McGarveys theorem

**Statement** (David McGarvey, *Econometrica*, 1953). Let $T$ be any tournament on a finite set $A$ with $m$
elements. Some profile of strict rankings with $n=m(m-1)$ voters has majority relation exactly $T$; adding one
voter gives an odd electorate with the same majority relation.

*In words:* pairwise majority can produce every pattern of head-to-head results, cycles included.

*Proof idea:* a two-voter gadget per arc $(x,y)$: $x\succ y\succ z_1\succ\dots\succ z_{m-2}$ and its "mirror"
$z_{m-2}\succ\dots\succ z_1\succ x\succ y$. It adds margin $+2$ on $\{x,y\}$ and $0$ on every other pair; margins add,
so one gadget per arc gives $M=T$. One extra voter moves each margin by $\pm1$ and keeps every sign.

*Does not say:* how often any pattern occurs (that is [1.4](#cycle-probability)), or that the voter count is small
(far fewer suffice: Stearns 1959, later Erdős and Moser). It **needs unrestricted domain**: on single-peaked
ballots the gadgets are unavailable and $M$ is forced transitive ([Black](#blacks-theorem)).

*Lessons:* [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md)

### Mays theorem

**Statement** (Kenneth May, *Econometrica*, 1952). Two alternatives; votes $D_i\in\{-1,0,1\}$ (indifference
allowed); a rule $F:\{-1,0,1\}^n\to\{-1,0,1\}$. $F$ satisfies [decisiveness](#decisiveness),
[anonymity](#anonymity), [neutrality](#neutrality) and [positive responsiveness](#positive-responsiveness) if and
only if

$$F(D)=\operatorname{sgn}(n_+-n_-)=\operatorname{sgn}\Big(\sum_i D_i\Big).$$

*In words:* with two options, majority rule is exactly the rule that always answers, treats voters alike, treats
options alike, and lets one vote break a tie.

*Proof idea:* anonymity makes $F$ a function of $(n_+,n_-)$; neutrality forces equal counts to a tie (the reversed
profile has the same counts but must get the negated verdict); a lead of $k$ is a tie plus $k$ nudges, so positive
responsiveness gives a win; neutrality turns a deficit into a loss.

*Independence:* each condition is dropped by one rule keeping the other three (checked on all 243 five-voter
profiles): no decision when everyone is indifferent (decisiveness); casting vote (anonymity); more than half of all
members (neutrality); always tie (positive responsiveness).

*Does not say:* anything about three or more options (pairwise majority keeps all four conditions on each pair and can
still cycle); who chose the two options; that majority is right ([5.1](#condorcet-jury-theorem) adds that majority is
also the most accurate rule when competences are equal and independent). Dropping neutrality leaves every
[supermajority rule](#supermajority-rule).

*Lessons:* [1.2](lessons/01-02-mays-theorem.md); cited in [5.1](lessons/05-01-the-condorcet-jury-theorem.md)

### Arrows theorem

**Statement** (Kenneth Arrow, *Social Choice and Individual Values*, 1951; canonical conditions from the 1963 second
edition). If $m\ge3$ and $N$ is finite, every social welfare function $F:\mathcal L(A)^n\to\mathcal R(A)$ (this
type builds in U and social ordering O) satisfying [weak Pareto](#weak-pareto) and
[IIA](#independence-of-irrelevant-alternatives) is dictatorial. The same holds with strict social rankings.

*In words:* with three or more options, a rule that always outputs a ranking, follows unanimity and looks only at
pairwise information hands all power to one voter.

*Proof idea (proof owned by [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md)):*
decisive coalitions. WP makes $N$ decisive; **field expansion** (U, IIA, transitivity, a third alternative) spreads
decisiveness for one pair to all pairs; **contraction** splits a decisive coalition so that one part is decisive;
finiteness ends the halving at one voter. $m\ge3$ is used in field expansion, transitivity in both steps, finiteness
in the halving: with infinitely many voters non-dictatorial rules exist.

*Each familiar rule drops one condition* (1.3 table, checked on all 216 three-voter three-alternative profiles):
majority drops O (cycles); Borda drops IIA; dictatorship drops ND; a fixed ranking drops WP; majority on
single-peaked profiles with odd $n$ drops U; the Pareto extension rule keeps only quasi-transitivity.

*Recovered elsewhere in this course:*

- **As a black box** in the proof of [Gibbard-Satterthwaite](#gibbard-satterthwaite-theorem) (3.2 step 5).
- **From judgment aggregation** (4.4): Dietrich-List (2007) and Dokow-Holzman (2010) show that on path-connected,
  non-simple, pair-negatable agendas, universal domain, collective rationality, independence and unanimity
  preservation force dictatorship; the preference agenda gives Arrow for strict orderings.
- **With utilities** ([Sen's utility version](#invariance-classes), 6.3): under CNC (hence ONC) invariance, U, WP and
  utility-IIA with $m\ge3$ force a dictator.
- **Majority judgment** (6.2): if grades are a fixed function of rankings, the composite is a ranking rule and Arrow
  forces an IIA violation.
- **Sen's liberal paradox** (4.1) needs neither IIA nor transitivity but strengthens non-dictatorship to minimal
  liberalism.

*Does not say:* that majority fails on every profile (on a profile with transitive $M$ it works); anything for $m=2$
(May); which condition to drop.

*Lessons:* [1.3](lessons/01-03-arrow-as-a-map.md); used in [3.2](lessons/03-02-proving-gibbard-satterthwaite.md),
[4.1](lessons/04-01-sens-liberal-paradox.md), [4.4](lessons/04-04-the-list-pettit-impossibility.md),
[6.2](lessons/06-02-range-voting-and-majority-judgment.md), [6.3](lessons/06-03-utilities-in-possibility-out.md)

### Oligarchy theorem

**Statement** (Allan Gibbard, 1969 manuscript, published 2014). If $m\ge3$, $N$ is finite, and $F$ satisfies U, WP and
IIA with a **complete quasi-transitive** output, then there is a nonempty set $O\subseteq N$ of oligarchs such that
(1) if every $i\in O$ has $x\succ_i y$ then $x\succ_F y$, and (2) if some $i\in O$ has $x\succ_i y$ then not
$y\succ_F x$.

*In words:* weakening transitivity to [quasi-transitivity](#quasi-transitivity) spreads Arrow's dictator into a
committee that is jointly decisive and whose members each hold a veto.

*Extremes:* $|O|=1$ is dictatorship; $O=N$ is the Pareto extension rule (everyone vetoes, society decides almost
nothing).

*Does not say:* that Sen's 1969 possibility is false; it prices it. Weakening the output relocates the concentration
of power rather than removing it.

*Lessons:* [1.3](lessons/01-03-arrow-as-a-map.md)

### Guilbauds limit

**Statement** (G.-Th. Guilbaud, 1952). Under impartial culture with $m=3$, as $n\to\infty$ through odd values,

$$P_{3,n}\longrightarrow\frac14-\frac{3}{2\pi}\arcsin\frac13\approx0.0877.$$

*In words:* however large a dice-roll electorate is, the chance of a three-way cycle settles at about 8.8 percent.

*Proof idea:* code each voter by the sign vector on $(ab,bc,ca)$; coordinates have mean 0, variance 1, covariance
$-1/3$. No Condorcet winner iff all three margin coordinates share a sign. Multivariate CLT plus the trivariate
orthant formula gives $\tfrac18-\tfrac{3}{4\pi}\arcsin\tfrac13$ per orthant; double it.

*Does not say:* anything about real electorates. Tsetlin, Regenwetter and Grofman (2003): for three alternatives and
large electorates, any departure from IC lowers the limit, for cultures whose own majorities are not built to cycle
(conjectured for more alternatives). Drop IC and the limit can be anywhere from 0 to 1.

*Lessons:* [1.4](lessons/01-04-how-often-do-cycles-happen.md)

### Agenda control

**Statement.** Sincere voting on an amendment agenda $(a_1,\dots,a_m)$ (running winner meets the next alternative),
$n$ odd. (i) Every agenda elects a member of the [top cycle](#top-cycle) $T$. (ii) Every member of $T$ wins under some
agenda.

*In words:* the chair cannot elect anything outside the top cycle and can elect anything inside it.

*Proof idea:* (i) once the first member of $T$ appears it beats the running winner, and outsiders never beat a
member of $T$. (ii) for a 3-cycle $x\,M\,y\,M\,z\,M\,x$ the agenda $(z,y,x)$ elects $x$; in general $T$ is strongly
connected, so it has a Hamiltonian cycle (Camion, 1959): put outsiders first, then walk the path ending at the target.

*Does not say:* anything about strategic voters, who change the reachable set ([`political-economy`](../political-economy/syllabus.md)).
In judgment aggregation the cousin is **path dependence**: sequential priority rules give different consistent
outcomes for different orders of deciding the propositions (4.4).

*Lessons:* [1.4](lessons/01-04-how-often-do-cycles-happen.md); cousin in
[4.4](lessons/04-04-the-list-pettit-impossibility.md)

**Module 2: voting rules and their axioms**

### Condorcets 81-voter example

**Statement** (Condorcet, *Essai*, 1785; 2.1 Theorem 2). The profile 30: A ≻ B ≻ C, 1: A ≻ C ≻ B, 29: B ≻ A ≻ C,
10: B ≻ C ≻ A, 10: C ≻ A ≻ B, 1: C ≻ B ≻ A has A as Condorcet winner (41-40 over B, 60-21 over C), yet for every
scoring vector

$$S_s(B)-S_s(A)=8(s_1-s_2)\ge0.$$

*In words:* B has eight more first places and A eight more seconds, so no price list that values a first at least as
much as a second lets A pass B.

*Proof idea:* A is first on 31 ballots, second on 39, third on 11; B is first on 39, second on 31, third on 11.
Subtract. Borda: A 101, B 109, C 33; delete C and A wins 41-40 (an IIA failure).

*Does not say:* that A loses under every scoring rule. At $s_1=s_2$ (antiplurality) A and B **tie** at 70: A never
wins *outright*. It is one profile; Peter Fishburn (1974) generalized it to every $m\ge3$: some profile with a
Condorcet winner gives at least $m-2$ rivals a higher score under every scoring rule.

*Lessons:* [2.1](lessons/02-01-scoring-rules.md)

### Youngs theorem

**Statement** (J. Smith 1973; H. Peyton Young 1975, "Social choice scoring functions", *SIAM J. Appl. Math.*). Let $f$
be a social choice correspondence on a fixed finite $A$ with a **variable electorate**.

1. $f$ is anonymous, neutral and [consistent](#consistency) iff it is a **composite** scoring rule.
2. $f$ is anonymous, neutral, consistent and [continuous](#continuity) iff it is a scoring rule $f_s$ for a single
   $s\in\mathbb R^m$.

*In words:* treat voters alike, treat candidates alike and respect agreement between electorates, and nothing is
left but adding up points by rank.

*Proof idea:* easy direction, scores add over disjoint electorates, so the merged maximizers are exactly the common
winners. Hard direction (sketched in 2.2): anonymity turns profiles into count vectors and union into addition;
consistency makes each "$x$ wins alone" set a convex cone; separating hyperplanes between cones are linear functionals,
and neutrality forces them to be differences $s_{r(x)}-s_{r(y)}$ of one shared vector. Without continuity a second
vector breaks ties on the hyperplane (composite rules).

*Does not say:* that $s$ is decreasing. **No ordering of the score vector is assumed or delivered**: the constant
vector passes all four axioms, and $s=(0,0,1)$ (most last places wins) is allowed. Decreasing scores need an extra
monotonicity condition; singling out Borda needs more axioms (Young 1974; Nitzan and Rubinstein 1981 for Borda's
ranking). Says nothing on a fixed electorate.

*Corollary:* no scoring rule, simple or composite, is a Condorcet extension.

*Lessons:* [2.2](lessons/02-02-consistency-and-youngs-characterization.md)

### Young-Levenglick theorem

**Statement** (H. P. Young and A. Levenglick, 1978, *SIAM J. Appl. Math.*). Among **preference functions** (profiles of
a variable electorate to nonempty sets of rankings), Kemeny's rule is the only one that is

- *neutral* (relabelling alternatives relabels the output),
- *consistent* (if $F(\mathbf P_1)\cap F(\mathbf P_2)\ne\varnothing$ then $F(\mathbf P_1+\mathbf P_2)=F(\mathbf P_1)\cap F(\mathbf P_2)$, as sets
  of rankings), and
- *Condorcet*: (i) if $x\,M\,y$, no output ranking puts $y$ immediately above $x$; (ii) if $x$ and $y$ tie, a ranking
  with $y$ immediately above $x$ is in the output exactly when the swapped ranking is (as paraphrased by Zwicker).

*In words:* Kemeny is to Condorcet methods what scoring rules are to Young's theorem: the one rule the axioms leave.

*Proof idea:* existence, $K$ is additive over electorates (consistency); swapping an adjacent overruled pair raises
$K$ (Condorcet (i), 2.3 P2). Uniqueness is cited.

*Does not say:* that the top of a Kemeny ranking is a consistent *choice* rule. It is not (2.3 Example 2): consistency
for rankings is weaker than for winners, so 2.2's impossibility still applies to winners.

*Lessons:* [2.3](lessons/02-03-condorcet-methods-and-kemeny.md); recalled in
[2.2](lessons/02-02-consistency-and-youngs-characterization.md)

### Kemeny as maximum likelihood

**Statement** (H. P. Young, "Condorcet's Theory of Voting", *APSR*, 1988; 2.3 Prop 3). Suppose a true ranking $R$
exists and each voter independently orders each pair as $R$ does with probability $p\in(\tfrac12,1)$, conditioned on
producing a ranking (Mallows' model, 1957):

$$\Pr(\succ_i\mid R)=\frac{\varphi^{-d_K(\succ_i,R)}}{Z},\qquad\varphi=\frac p{1-p}>1.$$

Then the Kemeny rankings are exactly the maximum-likelihood estimates of $R$.

*In words:* if voters are equally reliable, independent witnesses to a true ranking, Kemeny's ranking is the likeliest
truth.

*Proof idea:* $Z$ does not depend on $R$ (relabelling preserves $d_K$); the log-likelihood is a constant plus
$\log\varphi\cdot K(R)$; $\log\varphi>0$. 5.3 gets the same MLE without conditioning ([Condorcet noise
model](#condorcet-noise-model)).

*Does not say:* who the likeliest **winner** is. The candidate most probably best, summed over rankings, is a different
estimate; Young argued it leads to Borda for $p$ near $\tfrac12$, and 5.3 derives the drift to Borda itself. Needs a
fact of the matter, independence and one common $p$; correlated errors break the factorization.

*Lessons:* [2.3](lessons/02-03-condorcet-methods-and-kemeny.md); [5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

### Moulins no-show theorem

**Statement** (Hervé Moulin, "Condorcet's principle implies the no show paradox", *Journal of Economic Theory*, 1988).
Let $f$ be a **resolute** social choice function on **variable electorates** that is **Condorcet-consistent**. If
$m\ge4$ and $f$ must handle large enough electorates, $f$ violates [participation](#participation).

*In words:* every rule that always crowns a Condorcet winner sometimes punishes a voter for showing up, once there are
four candidates.

*The thresholds:* Moulin's construction uses 25 voters. Brandt, Geist and Peters (2017, by SAT solving): **12 voters
suffice and 12 is tight** (with four alternatives some Condorcet-consistent rule satisfies participation on every
electorate of at most 11). For set-valued rules: 17 voters if a voter judges a set by its best member, 14 if by its
worst.

*Proof idea:* an explicit construction over many profiles (not given in the course); 2.4 Example 2 shows the
phenomenon for maximin with four candidates.

*Does not say:* anything at $m=3$, where maximin with a lexicographic tie-break satisfies participation (Moulin, same
paper; Copeland with an alphabetical tie-break still fails, tie-break-driven). Nothing about **monotonicity**: maximin
and Copeland are monotone. Nothing about scoring rules, which are not Condorcet-consistent and keep participation.
Nothing about how often paradox profiles occur. Which side of the trade to take is left open.

*Lessons:* [2.4](lessons/02-04-monotonicity-and-participation.md)

**Module 3: strategy and restricted domains**

### Gibbard-Satterthwaite theorem

**Statement** (Allan Gibbard 1973; Mark Satterthwaite 1975, independently). Let $m\ge3$ and let $f$ be a **resolute**
social choice function on the **unrestricted domain** $\mathcal L(A)^n$ that is **onto**. If $f$ is
[strategy-proof](#strategy-proofness), then $f$ is dictatorial: some voter's top always wins.

*Range version:* if the range is $R$ with $|R|\ge3$, some voter's favourite *in $R$* always wins. With $|R|=2$ the
theorem says nothing (3.1 P3); with $m=2$ majority is strategy-proof, anonymous and neutral.

*In words:* when three or more alternatives can win, the only rule under which nobody ever gains by lying is a
dictatorship.

*Proof idea:* 3.1 shows strategy-proof implies [strong monotonicity](#strong-monotonicity) and, with onto, weak Pareto.
3.2 builds the [lift-to-top](#lift-to-top-construction) relation $F$: Pareto makes it complete and asymmetric, strong
monotonicity gives IIA (**derived, not assumed**) and transitivity, so Arrow (black box) gives a dictator $d$ of $F$;
the lift lemma puts $f(\mathbf P)$ on top of $F(\mathbf P)$, which is $d$'s top.

*Does not say:* that every voter can manipulate at every profile (only some voter at some profile; in 3.1 P1 only the
A-voters can gain), how often, or that the liar can find the lie (Bartholdi, Tovey and Trick 1989: computational
hardness for some rules). Says nothing for lotteries (Gibbard 1977: strategy-proof random rules are mixtures of
unilateral and duple rules; random dictatorship survives) or set-valued rules (Duggan and Schwartz 2000 need
assumptions on how voters rank sets).

*Escapes are its hypotheses:* restricted domains (3.3-3.4), money (VCG,
[`grad-game-theory` 5.3](../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md)), a range of two.
**Non-ranking ballots do not escape it cleanly**: Gibbard 1973 covers general game forms, so grade ballots (range, MJ)
are covered (6.2), and any fixed map from rankings to approval ballots gives a manipulable scoring rule (6.1).

*Lessons:* [3.1](lessons/03-01-manipulation-and-strategy-proofness.md), [3.2](lessons/03-02-proving-gibbard-satterthwaite.md);
used in [6.1](lessons/06-01-approval-voting.md), [6.2](lessons/06-02-range-voting-and-majority-judgment.md)

### Blacks theorem

**Statement** (Duncan Black, 1948; 3.3 Theorem 1). Let $\mathbf P$ be [single-peaked](#single-peaked-preferences) on a
common axis, strict rankings. (a) For **any** $n$, the strict majority relation $M$ is transitive. (b) If $n$ is
**odd**, $M$ is also complete: a strict ranking of all of $A$, with the median peak on top.

*In words:* on a line, majority rule never cycles, and with an odd electorate it ranks every alternative, not just the
winner.

*Proof idea:* the never-last lemma (the axis-middle of any triple is never anyone's worst of the three). For
$x\,M\,y$, $y\,M\,z$, case on which of $x,y,z$ is the axis-middle: each case either transfers a majority to $x$ over
$z$ or is impossible.

*Even $n$:* $M$ is still transitive, so $R$ is [quasi-transitive](#quasi-transitivity), but ties appear, $R$ can be
intransitive, and there may be no strict Condorcet winner; the unbeaten set is exactly the alternatives between the two
middle peaks (brute-force checked, $n\in\{2,4\}$, $m\le5$).

*Does not say:* that electorates are single-peaked (an empirical question), or anything with two policy dimensions
(Plott 1967, McKelvey 1976, owned by [`political-economy`](../political-economy/syllabus.md) 2.2). Second place in
$M$ can be nobody's favourite.

*Lessons:* [3.3](lessons/03-03-single-peakedness-black-and-moulin.md)

### Median voter theorem

**Statement.** With $n$ odd and single-peaked preferences on a common axis, the median peak is the Condorcet winner.

*In words:* the median voter sides with whichever half opposes any challenger, so the median peak beats everything.

*Owned by* [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md); recapped in 3.3,
where [Black's theorem](#blacks-theorem) extends it from the winner to the whole relation (every pairwise vote, so every
agenda). Its single-crossing analogue is the [representative voter theorem](#representative-voter-theorem); its
judgment-aggregation analogue is unidimensional alignment (List 2003: majority equals the median judge's set for odd
$n$, 4.3-4.4).

*Lessons:* [3.3](lessons/03-03-single-peakedness-black-and-moulin.md)

### Generalized median rule

**Statement** (Hervé Moulin, 1980, *Public Choice*; 3.3 Theorem 2). Alternatives are the points of an interval; every
voter single-peaked on it; $f$ picks one point. On this domain, a **peak-only, anonymous** rule is strategy-proof iff
it is a generalized median

$$f=\operatorname{med}(p_1,\dots,p_n,a_1,\dots,a_{n+1})$$

with $n+1$ fixed [phantoms](#phantom-voters). It is in addition **Pareto efficient** iff it is a generalized median with
$n-1$ phantoms.

*In words:* honest, symmetric rules on a line are medians padded with fixed ballots; $n+1$ fake ballots can outvote
everyone, $n-1$ cannot.

*Proof idea (proved direction: every generalized median, any phantoms, is strategy-proof):* an entry is the median iff
at most $h=(n+k-1)/2$ entries lie on each side. A voter left of the outcome either swaps one left entry for another
(no change) or reports at or right of it, which can only push the median further right, away from her. The converse is
Moulin's and is not proved in the course.

*Does not say:* that the median of peaks is the only strategy-proof rule (phantoms encode status quos, constants, order
statistics). Needs the single-peaked domain, peak-onliness and anonymity. Majority judgment (6.2) is a median rule
again, on grades.

*Lessons:* [3.3](lessons/03-03-single-peakedness-black-and-moulin.md)

### Representative voter theorem

**Statement** (Roberts 1977 for linear tax schedules; Gans and Smart 1996 in general; 3.4 Theorem 1). Let $\mathbf P$ be
[single-crossing](#single-crossing) in the order $1,\dots,n$ with $n$ odd, and let $m=(n+1)/2$. Then for all $x\ne y$,

$$x\,M\,y\iff x\succ_m y.$$

*In words:* the majority relation **is** the middle voter's ranking, so it is transitive and her top is the Condorcet
winner.

*Proof idea:* $S_{xy}$ is an initial or final segment; it contains the middle voter iff it has at least $(n+1)/2$
members, i.e. iff it is a majority.

*Even $n$:* $x\,M\,y$ iff **both** middle voters $n/2$ and $n/2+1$ prefer $x$; the pair ties when they disagree. $M$ is
transitive (an intersection of two rankings), but ties need not be.

*Does not say:* that alternatives lie on a line (only voters are ordered; 3.4 Example 1 is single-peaked on no axis).
Plurality can disagree (3.4 Example 1). Meltzer-Richard's use of it is [`political-economy`](../political-economy/syllabus.md)'s.

*Lessons:* [3.4](lessons/03-04-single-crossing-and-value-restriction.md)

### Value restriction

**Definition** (Amartya Sen, 1966, *Econometrica*). A set of strict rankings is value-restricted on a triple if some
alternative in it is never best, or never middle, or never worst among the three; a profile is value-restricted if this
holds on every triple. *In words:* in every triple one of the nine (alternative, position) cells is empty.

**Theorem 2 (Sen 1966, strict-ranking version).** Strict rankings, $n$ odd, value-restricted profile $\Rightarrow$ $M$
transitive. *Proof idea:* in a cycle each alternative beats one and loses to one; "never worst" or "never best" forces
the same majority to rank the third alternative over both others, and "never middle" demands two disjoint majorities.

**Theorem 3 (converse for a domain).** On a triple, a set of rankings fails value restriction iff it contains a
**Latin square** (three cyclic shifts; Ward's 1965 condition). One voter on each gives a cycle. *Proof idea:* the two
cyclic classes each fill every cell; omitting one ranking from each leaves one shared empty cell.

*Nesting:* single-peaked (axis-middle never worst) and single-crossing (on a triple, the middle-path alternative never
best or never worst) are both value-restricted, so Theorem 2 contains the odd-$n$ case of Black and the transitivity
half of the representative voter theorem.

*Does not say:* anything for even $n$ (four single-peaked, value-restricted voters can make $R$ intransitive). Sen's
own theorem allows indifference and adds a parity condition on the voters not indifferent within the triple. Theorem 3
says *some* weights on a Latin square cycle, not all.

*Lessons:* [3.4](lessons/03-04-single-crossing-and-value-restriction.md)

**Module 4: rights and reasons**

### Sens liberal paradox

**Statement** (Amartya Sen, "The Impossibility of a Paretian Liberal", *Journal of Political Economy*, 1970). With
$n\ge2$, no social decision function (complete reflexive $R$ with an [acyclic](#acyclicity) strict part) satisfies
[unrestricted domain](#unrestricted-domain) (U), [weak Pareto](#weak-pareto) (WP) and [minimal
liberalism](#minimal-liberalism) (ML). It holds on the strict-ranking domain too.

*In words:* if two people each control one private choice and unanimity always counts, some profile leaves society
with no best option.

*Proof idea:* cases on the two rights-pairs. Same pair: two decisive voters who disagree make $P$ symmetric.
One shared alternative $y$ ($i$ over $\{x,y\}$, $j$ over $\{y,z\}$): $i$: $z\succ x\succ y$, $j$: $y\succ z\succ x$,
everyone $z$ over $x$; rights give $x\,P\,y$ and $y\,P\,z$, Pareto gives $z\,P\,x$: a cycle, so an empty choice set.
Disjoint pairs: one more Pareto edge (4.1 P2).

*Compared with Arrow:* needs **no IIA and no transitivity**, only acyclicity, and works with two people; pays by
strengthening non-dictatorship to ML. Pareto never overrides a right on its own pair; the clash runs around a cycle
through pairs that belong to nobody.

*Does not say:* that liberty and efficiency always conflict (some profile in the unrestricted domain cycles; in 4.1's
three-alternative world 2 of 36 two-person profiles do). That one right clashes with Pareto (one right-holder can be a
dictator). Which premise to give up: see the [escape routes](#escape-routes) for Sen (Blau's domain restriction,
conditional Pareto, waivable rights, game forms, accepting cycles).

*Lessons:* [4.1](lessons/04-01-sens-liberal-paradox.md), [4.2](lessons/04-02-answers-to-sen.md)

### Gibbards paradox of rights

**Statement** (Allan Gibbard, *Journal of Economic Theory*, 1974; 4.2 Theorem 1). If at least two people each have a
personal feature with at least two values, no rule on the unrestricted domain satisfying the **libertarian claim**
(each person decisive over every pair of states differing only in her own feature) yields an acyclic relation at every
profile. **Weak Pareto is never used.**

*In words:* rights over your own life, read as verdicts on social states, contradict each other before unanimity
enters.

*Proof idea:* a conformist and a nonconformist each choose a jacket; each one's own-feature verdict flips with the
other's choice, and four rights verdicts close a cycle.

*When it fails:* **4.2 Lemma 2:** if every preference is **unconditional** (ranking of one's own feature independent of
others' features), the rights relation is acyclic (potential $\Phi(x)=\sum_i\rho_i(x_i)$ falls strictly along every
verdict). So Gibbard's paradox needs conditional preferences; Sen's needs mutual meddling (4.2 Theorem 3).

*Gibbard's repair:* waivable rights (decline to exercise, e.g. by contract), consistent with Pareto for any
preferences; the exact formal condition is not stated in the course.

*Does not say:* that minimal liberalism alone is inconsistent: the paradox uses the libertarian claim's breadth.
On the game-form reading it becomes "no pure-strategy equilibrium" (Peleg 1998).

*Lessons:* [4.2](lessons/04-02-answers-to-sen.md)

### Median property

**Statement** (Klaus Nehring and Clemens Puppe 2007; Franz Dietrich and Christian List 2007; 4.3 Theorem). An agenda has
the median property if every minimally inconsistent subset has at most two members. For **odd $n\ge3$**,
proposition-wise majority returns a consistent set at every profile iff the agenda has the median property.

*In words:* the paradox can happen exactly when the agenda contains three or more propositions that are jointly, but
not pairwise, incompatible.

*Proof idea:* (if) a minimal inconsistent subset of the majority set has size 1 or 2; two majorities intersect, so
some member would hold it. (only if) given a minimal inconsistent set of size $k\ge3$, three blocs of about $n/3$ each
reject a different member, so every member has a majority.

*Corollary:* on three alternatives "$x$ beats $y$", "$y$ beats $z$", "$z$ beats $x$" is a size-3 minimally
inconsistent set: the theorem predicts the [Condorcet cycle](#condorcet-cycle). The preference agenda on three
alternatives has minimal inconsistent sets of sizes 2 and 3.

*Does not say:* anything for even $n$: ties make $M$ incomplete, and on $\{p,p\to q,q\}$ four members can never produce
a strictly inconsistent majority (the "only if" fails there). Nested thresholds (damages above 10,000 / 50,000 /
100,000 dollars) have the property, and majority equals the median judge's set.

*Lessons:* [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md)

### List-Pettit impossibility

**Statement** (Christian List and Philip Pettit, *Economics and Philosophy*, 2002). Let
$X=\{p,\neg p,q,\neg q,p\wedge q,\neg(p\wedge q)\}$ with $p,q$ logically independent, and $n\ge2$. No aggregation
function satisfies universal domain, collective rationality, anonymity and [systematicity](#systematicity). The same
holds with $p\vee q$ or $p\to q$ in place of $p\wedge q$.

*In words:* treat members alike and propositions alike, and a group with two premises and a conclusion built from
them cannot always hold consistent views.

*Proof idea (the course's reconstruction):* (1) anonymity plus systematicity give a count function $g$; (2) completeness
and consistency give $g(n-k)=1-g(k)$; (3) even $n$: contradiction at $k=n/2$; (4) odd $n$: a profile where $\neg p$
and $p\wedge q$ have the same small count forces $g=$ majority; (5) a [discursive dilemma](#discursive-dilemma) profile
breaks majority. May plus the discursive dilemma.

*Generalization* (Dietrich and List 2007; Dokow and Holzman 2010; building on Nehring and Puppe): on path-connected,
non-simple, pair-negatable agendas, UD, CR, **independence** and unanimity preservation force a dictatorship; on the
preference agenda that is [Arrow's theorem](#arrows-theorem) for strict orderings.

*Does not say:* that group judgments are incoherent (each escape gives consistent judgments; see the
[judgment aggregation](#judgment-aggregation) table); that independence alone is fatal on *this* agenda (it is not;
neutrality does the damage here, though the generalization makes independence fatal on richer agendas). Needs $p$ and
$q$ logically independent. Group-agency reading (List and Pettit 2011): a group's attitudes must be partly autonomous
from its members' (paraphrased).

*Lessons:* [4.4](lessons/04-04-the-list-pettit-impossibility.md); previewed in
[4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md)

**Module 5: truth-tracking**

### Condorcet jury theorem

**Statement** (5.1). A binary question with one correct answer; $n=2m+1$ voters (odd), voting sincerely; the events
"voter $i$ is correct" are mutually independent, each with probability $p$. Majority accuracy is

$$P_n=\sum_{k=m+1}^{n}\binom nk p^kq^{n-k}.$$

If $p>\tfrac12$: (i) $P_{n+2}>P_n$ for every odd $n$; (ii) $P_n\to1$. If $p<\tfrac12$ both reverse ($P_n$ falls to 0;
in fact $P_n(1-p)=1-P_n(p)$, 5.2 Prop 1). If $p=\tfrac12$, $P_n=\tfrac12$.

*In words:* homogeneous, independent, better-than-chance voters make a strictly more reliable majority with every two
added, and an infallible one in the limit.

*Proof idea:* **two-voter step** $P_{n+2}-P_n=\binom{2m+1}m(pq)^{m+1}(2p-1)$: only a one-vote majority can flip; a
right one is lost if both newcomers err, a wrong one reversed if both are right. Limit by Chebyshev,
$1-P_n\le pq/\big(n(p-\tfrac12)^2\big)$; Hoeffding sharpens to $e^{-2n(p-1/2)^2}$. Even $n$ with a fair-coin tie-break:
$P_{2m}=P_{2m-1}$ (5.1 P2).

*Hypotheses as premises (5.3):* E1 truth, E2 competence above a half, E3 independence given the truth, E4 sincerity, E5
binary choice by simple majority. **What must be independent is correctness (errors), not votes**: votes are
positively correlated because all track one truth.

*Does not say:* that large groups are reliable (a limit, not a size: at $p=0.52$, 201 voters reach only 0.715); that
adding voters helps heterogeneous groups (an expert at 0.9 alone beats her plus two 0.6 amateurs under majority, 0.792;
5.1 Example 2); that accuracy gives authority (a further premise, [`political-philosophy` 5.1](../political-philosophy/lessons/05-01-why-democracy.md)).
The limit survives heterogeneity if every $p_i\ge\tfrac12+\varepsilon$ (Paroush 1998) or the average stays a fixed margin
above a half (5.2 Prop 2); **not** with a margin that shrinks (one infallible voter among coin-flippers slides toward
$\tfrac12$). Failures: [correlated voters](#correlated-voters), [strategic voting](#strategic-voting-and-pivotality),
$p<\tfrac12$.

*Lessons:* [5.1](lessons/05-01-the-condorcet-jury-theorem.md); failures [5.2](lessons/05-02-when-the-jury-theorem-fails.md);
argument form [5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

### Nitzan-Paroush weights

**Statement** (Shmuel Nitzan and Jacob Paroush 1982, *International Economic Review*; Lloyd Shapley and Bernard Grofman
1984). Voters with competences $p_i\in(0,1)$, correctness independent given the true answer, equal prior on the two
answers. Among **all** decision rules, accuracy is maximized by weighted majority with

$$w_i=\log\frac{p_i}{1-p_i}$$

(natural log; ties either way). An unequal prior $\pi$ on answer $A$ adds a phantom weight $\log\frac\pi{1-\pi}$ for $A$.

*In words:* weigh each voter by the log-odds of her being right: a coin-flipper counts for nothing, a near-infallible
voter for almost everything.

*Proof idea:* the best rule picks, at each vote vector, the answer with the larger joint probability; the likelihood
ratio is a product of odds, so take logs.

*Corollaries:* equal $p_i>\tfrac12$ gives equal weights, so simple majority is the most accurate rule: beside
[May](#mays-theorem), the fair rule and the accurate rule coincide exactly when competence is equal. Unequal competence
makes the accurate rule violate [anonymity](#anonymity). Two agreeing voters at $p$ override a third at $p_1$ iff
$p_1/(1-p_1)<\big(p/(1-p)\big)^2$.

*Does not say:* how to know the $p_i$; anything under correlation. It is naive Bayes with votes as features;
AdaBoost's weight $\tfrac12\ln\frac{1-\epsilon}\epsilon$ is half the log-odds, and a common factor never changes a
weighted vote.

*Lessons:* [5.1](lessons/05-01-the-condorcet-jury-theorem.md); cited in [5.2](lessons/05-02-when-the-jury-theorem-fails.md)

### Strategic voting and pivotality

**Statement.** A vote changes the outcome only on the **pivotal** event, so a best response conditions on it. A
truth-seeking voter who conditions on being pivotal may rationally vote against her own signal. **Austen-Smith and
Banks** (David Austen-Smith and Jeffrey Banks, "Information Aggregation, Rationality, and the Condorcet Jury Theorem",
*APSR*, 1996): sincere voting need not be a (Nash) equilibrium, **even under majority rule**.

*In words:* "if my vote matters at all, the others must have split this way", and that is evidence.

*Proof idea (5.2 Watch out):* with asymmetric signal accuracies, the one-one split among the other two jurors has a
likelihood ratio that is not 1, so a juror's pivotal posterior can flip her vote; with 5.1's symmetric signals a split
cancels exactly, which is why 5.1 never saw it.

*Does not say:* that strategic jurors are dishonest. They misreport *information* while sharing a goal (contrast 3.1's
manipulation, which misreports *preferences*). Hypothesis E4 is "vote your signal", not "be honest". Pivotality is the
same idea as the Clarke pivot ([`grad-game-theory` 5.3](../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md)).

*Lessons:* [5.2](lessons/05-02-when-the-jury-theorem-fails.md)

### Unanimity juries

**Statement** (5.2 Prop 4). Prior $\pi=\Pr(G)$; each of $n$ jurors gets a private signal correct with probability
$p\in(\tfrac12,1)$, independent given the state; each wants to convict iff her posterior of guilt exceeds $q$;
conviction needs all $n$ votes; $o(x)=x/(1-x)$. Sincere voting is a Bayes-Nash equilibrium iff

$$o(\pi)\Big(\frac p{1-p}\Big)^{n-2}\le o(q)\le o(\pi)\Big(\frac p{1-p}\Big)^n.$$

The left side grows without bound, so sincere voting **fails for every large enough jury** (it can hold for small
juries).

*In words:* under unanimity your vote counts only when everyone else voted guilty, which is strong evidence of guilt.

*Proof idea:* pivotal event = all $n-1$ others saw $g$; Bayes in odds form gives the two pivotal posteriors; require the
$i$-juror to acquit and the $g$-juror to convict.

*Feddersen-Pesendorfer* (Timothy Feddersen and Wolfgang Pesendorfer, "Convicting the Innocent", *APSR*, 1998): in the
symmetric mixed equilibrium $i$-jurors convict with probability $\sigma$ solving
$o(\pi)\frac{1-p}p(\gamma_G/\gamma_I)^{n-1}=o(q)$, with $\gamma_G=p+(1-p)\sigma$, $\gamma_I=(1-p)+p\sigma$. As $n\to\infty$,
$\sigma\to1$ and

$$\Pr(\text{convict innocent})=\gamma_I^n\to K^{-p/(2p-1)},\qquad K=\frac{o(q)\,\frac p{1-p}}{o(\pi)}.$$

Wrongful conviction **can dip** where mixing starts and then rises with jury size (5.2 Example 2); majority and other
non-unanimous rules keep both errors far lower in large juries.

*Does not say:* that strategic jurors are simply worse (sincere unanimity frees the guilty far more often), or that real
jurors behave this way: it assumes fully strategic Bayesian jurors with a common prior who do not talk. Coughlan (2000):
with mistrials and pre-vote communication modeled, sincere voting under unanimity can return.

*Lessons:* [5.2](lessons/05-02-when-the-jury-theorem-fails.md)

### Diversity trumps ability

**Statement** (Lu Hong and Scott Page, *PNAS*, 2004; hypotheses as the course paraphrases them, "roughly"). Agents are
search heuristics on a fixed landscape, working in relay. If the problem is hard for every individual, the pool is large
and varied enough that some agent can improve on any non-optimal point, and the best agent is unique, then with
probability approaching one a randomly drawn group outperforms a same-size group of the individually best agents.

*In words:* the best agents are near-copies and stall at the same points; a random group stalls less.

*Does not say:* anything about **voting** (agents relay a search; nobody votes), so it is not a jury theorem for diverse
voters. Thompson (*Notices of the AMS*, 2014): stripped down it restates its hypotheses, does not apply to real groups,
and randomness rather than diversity drives the simulations; Page replied (2015); later simulations found the effect
landscape-sensitive. Landemore (*Democratic Reason*, 2013) uses it for [epistemic democracy](#epistemic-democracy).

*Lessons:* [5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

**Module 6: richer inputs**

### Brams-Fishburn sincerity theorem

**Statement** (Steven Brams and Peter Fishburn, *APSR*, 1978; 6.1 Theorem 1, in the lesson's model: ties broken by a fair
lottery, expected-utility voters, an electorate large enough that the others can produce any score vector).

- (a) With [dichotomous preferences](#dichotomous-preferences), approving exactly the good set is weakly dominant.
- (b) With a strict ranking $a\succ b\succ c$ of three candidates, the undominated ballots are $\{a\}$ and $\{a,b\}$:
  every undominated ballot is sincere.
- (c) With four or more candidates this fails: for $a\succ b\succ c\succ d$ the insincere $\{a,c\}$ is undominated.

*In words:* a good-or-bad voter cannot gain by misreporting; with three candidates strategy never needs insincerity;
with four it can.

*Proof idea:* approving $x$ changes only $s(x)$: the winning set becomes $\{x\}$, gains $x$, or is unchanged. Adding a
best candidate or removing a worst never hurts; for (c), exhibit a score vector (e.g. $c$ and $d$ tied for the lead)
against each rival ballot.

*Does not say:* that approval voting is strategy-proof without dichotomous preferences (the best ballot then depends on
others' ballots).

*Lessons:* [6.1](lessons/06-01-approval-voting.md)

### Fishburns characterization of approval voting

**Statement** (Peter Fishburn, 1978; Carlos Alós-Ferrer, *Social Choice and Welfare*, 2006). For a rule taking any finite
electorate of non-empty set ballots to a non-empty winner set: it is approval voting iff it satisfies

- **faithfulness** (with one voter, the winners are exactly her ballot),
- **[consistency](#consistency)** (disjoint electorates whose winner sets meet: the union's winners are the
  intersection), and
- **cancellation** (if every candidate gets the same number of approvals, all win).

Fishburn also assumed neutrality; Alós-Ferrer showed it redundant.

*In words:* approval voting is the only way to read approval ballots that respects a lone voter, adds up across
electorates and treats a perfectly balanced electorate as a tie.

*Proof idea (easy direction only, in the course):* scores add over electorates, so a common winner attains $M_1+M_2$ and
only common winners do. The converse is cited.

*Does not say:* anything about ranking ballots; it is the set-ballot analogue of [Young's theorem](#youngs-theorem).

*Lessons:* [6.1](lessons/06-01-approval-voting.md)

### Balinski-Laraki strategy claims

**Statement** (Balinski and Laraki, *PNAS*, 2007; 6.2 Prop 2 for one voter and an order function $r_k$). Changing only
voter $i$'s grade $g_i(x)$ moves $r=r_k(x)$ to $r'$ with:

- (a) if $g_i(x)>r$ then $r'\le r$; if $g_i(x)<r$ then $r'\ge r$ (**strategy-proof-in-grading**);
- (b) $r_{k+1}(x)\le r'\le r_{k-1}(x)$: at most one notch in the sorted list;
- (c) if $g_i(A)>g_i(B)$ but $\alpha(A)<\alpha(B)$, she cannot both raise $\alpha(A)$ and lower $\alpha(B)$
  (**partially strategy-proof-in-ranking**).

Balinski and Laraki prove the order functions are the **only** grade aggregators strategy-proof in grading, that **no**
grade aggregator is fully strategy-proof in ranking, and state that order functions are group strategy-proof in grading.

*In words:* a voter cannot drag a candidate's grade toward her opinion, can move it at most one notch, and can help her
favourite or hurt its rival, never both.

*Proof idea:* counting grades above and below the $k$-th highest.

*Does not say:* that the outcome is protected. It is about one voter and one majority *grade*: a voter whose grade
equals the median can move it one notch and change the winner (6.2 Example 2); voters below the median can move the
tie-break; two voters can split the two jobs of (c). Grade ballots do not escape
[Gibbard-Satterthwaite](#gibbard-satterthwaite-theorem) (Gibbard 1973 covers game forms). The escape from Arrow rests on
a common absolute grading language.

*Lessons:* [6.2](lessons/06-02-range-voting-and-majority-judgment.md)

### Sens utility impossibility

**Statement** (Sen 1970, *Collective Choice and Social Welfare*; 6.3 Theorem 1). If $m\ge3$ and a
[social welfare functional](#social-welfare-functional) satisfies U, WP, utility-IIA and **CNC invariance**, it is
dictatorial. Since CNC $\subseteq$ ONC, the same holds under ONC.

*In words:* making each person's utility cardinal does not escape Arrow; only comparing people does.

*Proof idea (the course's reconstruction):* two-point affine matching (one $a_i>0$, $b_i$ per person) carries any utility
profile to any other with the same orders on a pair, so only orders on the pair matter; that induces an Arrovian rule on
weak-order profiles; Arrow gives a dictator; lift back. CNC is used once, through the separate choice of each $a_i$.

*Does not say:* that numbers are useless: deny CNC (allow level or unit comparisons) and possibility returns
([utilitarian and leximin possibility](#utilitarian-and-leximin-possibility)). Keep CNC and the remaining target is IIA:
normalizing each scale to $[0,1]$ (relative utilitarianism, Dhillon and Mertens 1999) keeps CNC, WP, anonymity and breaks
IIA (6.3 Example 2: a dazzling third option stretches one person's scale).

*Lessons:* [6.3](lessons/06-03-utilities-in-possibility-out.md)

### Utilitarian and leximin possibility

**Statement** (6.3 Theorem 2). The [utilitarian rule](#utilitarian-rule) and [leximin](#leximin) each satisfy U, WP,
utility-IIA and anonymity (hence ND). The sum respects **CUC**; leximin respects **OLC**. Characterizations (stated, not
proved): under CUC, anonymity and strong Pareto leave only the sum (d'Aspremont and Gevers 1977); under OLC an equity
axiom yields leximin (Hammond 1976; d'Aspremont and Gevers 1977).

*In words:* the comparison you grant decides the rule: units give the sum, levels give leximin.

*Proof idea:* under CUC every difference of sums is multiplied by one $a>0$; a common increasing $\varphi$ commutes with
sorting. ND: give $d$ the values $(1,0)$ at $(x,y)$ and another person $(0,2)$.

*Does not say:* that the raw sum is assumption-free (it asserts unit comparability), or which rule to pick under CFC.
Harsanyi ([`decision-theory` 5.1](../decision-theory/lessons/05-01-harsanyis-aggregation-theorem.md)) does not contradict
Sen: his weights are tied to one representation of each $u_i$.

*Lessons:* [6.3](lessons/06-03-utilities-in-possibility-out.md)

**Module 7: apportionment**

### Balinski Young theorem

**Statement** (Michel Balinski and H. Peyton Young, *Fair Representation*, 1982; 7.2 Theorem 3). If there are
$s\ge4$ states, no apportionment method is [population monotone](#population-paradox) and satisfies the
[quota rule](#quota-rule) on every problem.

*In words:* with four or more states, any method that never punishes relative growth will, for some populations and
house size, give some state a seat count outside its quota.

*Sharp:* with three states Webster's method never violates quota (brute-force check of 47,110 three-state houses), so it
has both properties. The course states **no house-size threshold**.

*Proof idea:* (i) under regularity conditions Balinski and Young state (notably order preservation: a more populous
state never gets fewer seats), the population-monotone methods are exactly the divisor methods; (ii) every divisor
method breaks quota on some four-state problem (several small states round the same way and their gains add to a seat
taken from, or given to, one large state). Gölz, Peters and Procaccia (2022) removed order preservation with a
five-state construction.

*Does not say:* that a given method will break quota on real censuses (existence only); that quota and house
monotonicity conflict (the Balinski-Young quota method of 1975 has both). Which property to give up is left open:
drop population monotonicity and keep quota (quota method; Hamilton keeps quota but also fails house monotonicity); drop
quota and keep both monotonicities (every divisor method); drop $s\ge4$ and Webster has everything.

*Lessons:* [7.2](lessons/07-02-divisor-methods-and-balinski-young.md); previewed in
[7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md)

## Arguments

The course's formal results are premises in wider arguments. These are the skeletons the lessons use, with the premise
critics attack. The theorems settle what follows from what; none of them settles which premise to give up.

### Jury theorem argument form

(E1) A correct answer exists, fixed independently of the vote. (E2) Each voter is right with probability $p>\tfrac12$.
(E3) Votes are independent given the truth. (E4) Each voter votes her judgment. (E5) Two options, simple majority.
∴ (C) Majority accuracy $P_n\to1$ ([jury theorem](#condorcet-jury-theorem)).

- **Further, separate step:** so the verdict has authority. Not supplied here
  ([`political-philosophy` 5.1](../political-philosophy/lessons/05-01-why-democracy.md), Estlund's authority tenet).
- **Who attacks which premise:**
  - **E1:** Riker's tradition, and anyone who doubts that "the best tax policy" has a truth value
    ([`political-philosophy` 5.4](../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md)).
    Without it Kemeny rests on Young-Levenglick alone, and the outvoted citizen has nothing to be mistaken about.
  - **E2:** heterogeneous or low competence (5.2).
  - **E3:** shared sources and factions (5.2; Rousseau II.3).
  - **E4:** strategic, pivotal voting (5.2).
  - **E5:** rankings (Kemeny as MLE) and compound questions (premise- versus conclusion-based) (5.3).
- **Defenders' move:** weaken the premises instead. Partial correlation or unequal competence shrinks "near-certain" to
  a bounded, model-dependent gain.

*Lessons:* [5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

### Rousseau through the jury theorem

Grofman and Feld ("Rousseau's General Will: A Condorcetian Perspective", *APSR*, 1988) read *Social Contract* II.3
and IV.2 as an informal jury theorem: the assembly asks whether a law conforms to the general will (E1, E5); citizens
judge without communicating (E3); the outvoted citizen learns he was mistaken.

1. **Factions are correlation.** Blocs following one leader: 99 independent citizens at $p=0.65$ give 0.9989; three
   blocs of 33 give 0.71825; one majority bloc gives 0.65, Rousseau's "particular opinion". No-factions is E3.
2. **The outvoted citizen is a Bayesian** (5.3 Lemma 2): posterior $\varphi^d/(1+\varphi^d)$, $d=2k-n$. A 55-45 vote gives
   0.599 at $p=0.51$ and 0.882 at $p=0.55$. The strength of "I was mistaken" is fixed by a competence nobody observes,
   and belief is not obedience.

Text and rival readings: [`history-of-political-thought` 4.4](../history-of-political-thought/lessons/04-04-rousseau-the-social-contract.md).

*Lessons:* [5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

### Borda versus Condorcet

Common ground: Borda's score is a sum of pairwise counts, $B(x)=\sum_{y\ne x}n(x,y)$ (2.1 Theorem 1).

- **Borda defender** (Saari among them): the identity is Borda's credential; it weighs every pairwise contest, and
  positions are a crude but honest measure of intensity.
- **Condorcet defender:** the identity is the indictment; a landslide over a weak third candidate can outweigh a narrow
  loss in the contest that matters. Majority reads only signs.
- **IIA defender:** a rule that reads positions rewards strategic placement of a rival's challenger (burying, 3.1).
- **The axioms behind the dispute.** Consistency plus anonymity and neutrality give scoring rules ([Young](#youngs-theorem)),
  and no Condorcet extension is consistent. With $m\ge4$, participation and Condorcet consistency cannot both hold
  ([Moulin](#moulins-no-show-theorem)). The theorems make the trade compulsory; which side to take is left open.
- **Epistemic tiebreak** (5.3): under Condorcet's noise model the likeliest *ranking* is Kemeny's, while the likeliest
  *winner* drifts to Borda as $p\to\tfrac12$.

*Lessons:* [1.3](lessons/01-03-arrow-as-a-map.md), [2.1](lessons/02-01-scoring-rules.md),
[2.2](lessons/02-02-consistency-and-youngs-characterization.md), [2.4](lessons/02-04-monotonicity-and-participation.md),
[5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

### Responsiveness versus reasons

Pettit's dilemma for a group facing a [discursive dilemma](#discursive-dilemma):

1. Proposition-wise majority on connected propositions can be inconsistent ([median property](#median-property)).
2. So the group must either decide the conclusion by its members' verdicts (conclusion-based) or derive it from
   majorities on the reasons (premise-based).
3. The first leaves the group without collective reasons; the second can override a unanimous verdict.
4. **Normative premise:** a group owes reasons (precedent, accountability, deliberation). ∴ It should be premise-based,
   accepting that its attitudes are partly autonomous from its members' (List and Pettit, *Group Agency*, 2011,
   paraphrased).

**Critics attack 4:** many courts owe only a verdict, and then nothing is paradoxical. The epistemic comparison (5.3)
does not settle it: neither procedure dominates on bare verdicts; premise-based wins for truth for the right reasons
(Bovens and Rabinowicz 2006). Deliberative versus aggregative democracy:
[`political-philosophy` 5.3](../political-philosophy/lessons/05-03-deliberative-vs-aggregative-democracy.md).

*Lessons:* [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md),
[4.4](lessons/04-04-the-list-pettit-impossibility.md), [5.3](lessons/05-03-epistemic-readings-of-aggregation.md)

## Formulas

Every quantity the lessons compute, grouped by job. Symbols as in [Notation](#notation).

### Pairwise count formulas

| Quantity | Formula | Lesson |
|---|---|---|
| strict ballots | $n(x,y)+n(y,x)=n$; $x\,M\,y\iff n(x,y)>n/2$ | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| margin | $\mu(x,y)=n(x,y)-n(y,x)$ | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| scoring rule | $S_s(x)=\sum_i s_{r_i(x)}$; $m=3$ normal form $(1,s,0)$, $s=\frac{s_2-s_3}{s_1-s_3}$ | [2.1](lessons/02-01-scoring-rules.md) |
| Borda as pairwise counts | $B(x)=\sum_{y\ne x}n(x,y)$ | [2.1](lessons/02-01-scoring-rules.md) |
| mean Borda score | $n(m-1)/2$ (Condorcet loser below it, Condorcet winner above it) | [2.1](lessons/02-01-scoring-rules.md) |
| 81 voters | $S_s(B)-S_s(A)=8(s_1-s_2)$ | [2.1](lessons/02-01-scoring-rules.md) |
| Copeland | $c(x)=\#\{y:x\,M\,y\}-\#\{y:y\,M\,x\}$ | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| maximin | $s(x)=\min_{y\ne x}n(x,y)$ | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| lifted pair, scoring rule | on $\mathbf P^{xy}$ with $a=n(x,y)$, $b=n(y,x)$: $x$ scores $as_1+bs_2$, $y$ scores $bs_1+as_2$ | [3.2](lessons/03-02-proving-gibbard-satterthwaite.md) |
| McGarvey count | $m(m-1)$ voters (two per arc), $+1$ for odd $n$ | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |

### Kemeny formulas

$$K(R)=\sum_{x\,R\,y}n(x,y)=n\binom m2-\sum_{i=1}^n d_K(\succ_i,R)$$

$$K(R)=\sum_{\{x,y\}}\max\big(n(x,y),n(y,x)\big)-\sum_{x\,M\,y,\ y\,R\,x}\mu(x,y)\qquad\text{(margins form)}$$

*In words:* start from the score of obeying every majority, pay each overruled majority's margin.

| Model | Formula | Lesson |
|---|---|---|
| Mallows | $\Pr(\succ_i\mid R)=\varphi^{-d_K(\succ_i,R)}/Z$, $\varphi=\frac p{1-p}$, $Z$ independent of $R$ | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| Condorcet noise model | $L(R)=(1-p)^N\varphi^{a(R)}$, $N=n\binom m2$, $a(R)=K(R)$ | [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) |
| posterior, uniform prior | $\Pr(R\mid\mathbf P)\propto\varphi^{a(R)}$ | [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) |
| likeliest winner, $p\to\tfrac12$ | $\varphi^a\approx1+(\varphi-1)a$, so $\Pr(x\text{ best})$ ranks $x$ by $B(x)$ to first order | [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) |

### Cycle probability numbers

Impartial culture, probability of no Condorcet winner $P_{m,n}$; odd $n$ unless stated.

| | $m=3$ | $m=4$ | $m=5$ | $m=6$ | $m=10$ |
|---|---|---|---|---|---|
| $n=3$ (exact) | $1/18$ | 1.4 P1 | $4/25$ | | |
| $n\to\infty$ (approx.) | $0.088$ (Guilbaud) | $0.175$ | $0.252$ | $0.315$ | $0.488$ |

- $m=3$: $1/18$ at $n=3$, rising with odd $n$ to $0.0861$ at $n=51$ and toward Guilbaud's limit.
- Even $n$, $m=3$ (ties counted): $2/3$ ($n=2$), $5/9$ ($n=4$).
- IAC, $m=3$: $1/28$ at $n=3$; large-$n$ limit simulates to $0.0626$, close to $1/16$.
- Conditioning identity: $P_{m,n}=1-m\cdot\Pr(x\text{ is the Condorcet winner})$.

**Guilbaud's limit and the orthant formula** (1.4; the orthant formula is stated there, not derived in any course):

$$\lim_{n\to\infty}P_{3,n}=\frac14-\frac3{2\pi}\arcsin\frac13\approx0.0877,\qquad
\Pr(Z>0)=\frac18+\frac{\arcsin\rho_{12}+\arcsin\rho_{13}+\arcsin\rho_{23}}{4\pi},$$

for a centred trivariate normal; the sign coordinates on $(ab,bc,ca)$ have correlations $-1/3$.

**Other counts:** $2^{m-1}$ single-peaked rankings per axis (3.3); 4.1's minimal liberal-Paretian rule cycles on 2 of 36
two-person profiles and on a share $\tfrac1{18}(\tfrac12)^{n-2}$ with $n-2$ rightless voters under IC; 4 of 144
unconditional two-value profiles force Sen's cycle (4.2); three judges uniform over the 8 consistent tenure-agenda sets
are inconsistent with probability $21/256$ (4.3).

### Jury accuracy formulas

| Quantity | Formula | Lesson |
|---|---|---|
| majority accuracy, $n=2m+1$ | $P_n=\sum_{k=m+1}^n\binom nk p^kq^{n-k}$ | [5.1](lessons/05-01-the-condorcet-jury-theorem.md) |
| two-voter step | $P_{n+2}-P_n=\binom{2m+1}m(pq)^{m+1}(2p-1)$ | [5.1](lessons/05-01-the-condorcet-jury-theorem.md) |
| Chebyshev bound | $1-P_n\le\dfrac{pq}{n(p-\frac12)^2}$ | [5.1](lessons/05-01-the-condorcet-jury-theorem.md) |
| Hoeffding bound | $1-P_n\le e^{-2n(p-1/2)^2}$ | [5.1](lessons/05-01-the-condorcet-jury-theorem.md) |
| reversal | $P_n(1-p)=1-P_n(p)$, $n$ odd | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| unequal competence | $\bar p_n\ge\tfrac12+\delta\Rightarrow P_n\ge1-\dfrac1{4n\delta^2}$ | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| common cause | $P_n=\sum_c\pi_cP_n(p_c)\to\Pr(p_C>\tfrac12)+\tfrac12\Pr(p_C=\tfrac12)$ | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| correctness covariance | $\operatorname{Var}(p_C)$; correlation $\operatorname{Var}(p_C)/\big(\bar p(1-\bar p)\big)$ | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| Nitzan-Paroush weight | $w_i=\log\frac{p_i}{1-p_i}$; prior adds $\log\frac\pi{1-\pi}$ | [5.1](lessons/05-01-the-condorcet-jury-theorem.md) |
| posterior for a $k$-of-$n$ side | $\dfrac{\varphi^d}{1+\varphi^d}$, $d=2k-n$, $\varphi=\frac p{1-p}$ | [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) |

**Premise- versus conclusion-based, three judges** (5.3; premise competence $r$, $Q=P_3(r)$):

| State | Premise-based | Conclusion-based |
|---|---|---|
| both premises true | $Q^2$ | $P_3(r^2)$ |
| both false | $1-(1-Q)^2$ | $P_3\big(1-(1-r)^2\big)$ |
| one true | $1-Q(1-Q)$ | $P_3\big(1-r(1-r)\big)$ |

### Strategic jury formulas

Odds $o(x)=x/(1-x)$; prior $\pi$; signal accuracy $p$; threshold $q$ (5.2).

$$\text{sincere BNE under unanimity}\iff o(\pi)\Big(\frac p{1-p}\Big)^{n-2}\le o(q)\le o(\pi)\Big(\frac p{1-p}\Big)^n$$

$$\gamma_G=p+(1-p)\sigma,\quad\gamma_I=(1-p)+p\sigma,\quad o(\pi)\frac{1-p}p\Big(\frac{\gamma_G}{\gamma_I}\Big)^{n-1}=o(q)$$

$$\gamma_I^n\to K^{-p/(2p-1)},\qquad K=\frac{o(q)\,\frac p{1-p}}{o(\pi)}$$

Pivotal odds under majority with asymmetric signals: multiply the private odds by the likelihood ratio of the others'
split (5.2 Watch out).

### Approval and grading formulas

| Quantity | Formula | Lesson |
|---|---|---|
| value of approving $x$ | $\Delta_x=\tfrac12\sum_{y\ne x}\pi_{xy}(u_x-u_y)$ | [6.1](lessons/06-01-approval-voting.md) |
| equal pivot odds | $\sum_{y\ne x}(u_x-u_y)=m(u_x-\bar u)$: approve iff $u_x>\bar u$ | [6.1](lessons/06-01-approval-voting.md) |
| range ballot gain | $\sum_xb_xw_x$, $w_x=\sum_{y\ne x}\pi_{xy}(u_x-u_y)$; each $b_x$ at $0$ or $K$ | [6.2](lessons/06-02-range-voting-and-majority-judgment.md) |
| majority grade | $\alpha=r_{(n+1)/2}$ ($n$ odd), $r_{(n+2)/2}$ ($n$ even) | [6.2](lessons/06-02-range-voting-and-majority-judgment.md) |
| one voter's reach | $r_{k+1}(x)\le r'\le r_{k-1}(x)$ | [6.2](lessons/06-02-range-voting-and-majority-judgment.md) |
| generalized median | $\operatorname{med}(p_1,\dots,p_n,a_1,\dots,a_k)$, $n+k$ odd; median iff at most $(n+k-1)/2$ entries on each side | [3.3](lessons/03-03-single-peakedness-black-and-moulin.md) |
| Gibbard potential | $\Phi(x)=\sum_i\rho_i(x_i)$ | [4.2](lessons/04-02-answers-to-sen.md) |
| judgment quota | accept iff more than $2n/3$ supporters: the smallest consistent threshold on the conjunctive agenda | [4.4](lessons/04-04-the-list-pettit-impossibility.md) |

### Apportionment formulas

| Quantity | Formula | Lesson |
|---|---|---|
| quota | $q_i=hp_i/P$; standard divisor $P/h$; $\sum_iq_i=h$ | [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md) |
| Hamilton | $r_i=q_i-\lfloor q_i\rfloor$; $L=h-\sum_i\lfloor q_i\rfloor=\sum_ir_i$ seats to the largest $r_i$ | [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md) |
| total deviation | $D(a)=\sum_i\lvert a_i-q_i\rvert=\sum_ir_i+\sum_{u_i=1}(1-2r_i)$ | [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md) |
| extra seat's effect | $h\to h+1$ raises $q_i$ by $p_i/P$ | [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md) |
| divisor method | $a_i=\operatorname{round}(p_i/d)$, $d$ chosen so $\sum_ia_i=h$; seat by seat: largest $p_i/\delta(a_i)$ | [7.2](lessons/07-02-divisor-methods-and-balinski-young.md) |
| Jefferson (floor) | $\delta(k)=k+1$; any working $d\le P/h$ | [7.2](lessons/07-02-divisor-methods-and-balinski-young.md) |
| Adams (ceiling) | $\delta(k)=k$ | [7.2](lessons/07-02-divisor-methods-and-balinski-young.md) |
| Webster (nearest) | $\delta(k)=k+\tfrac12$ | [7.2](lessons/07-02-divisor-methods-and-balinski-young.md) |
| Hill-Huntington (geometric mean) | $\delta(k)=\sqrt{k(k+1)}$; priority for the $n$-th seat $p/\sqrt{n(n-1)}$ | [7.2](lessons/07-02-divisor-methods-and-balinski-young.md) |

## Thinkers and texts

Who, when, where, and the claim this course uses. Ordered by the lesson that cites them first; titles and venues only
where the lessons give them.

| Who | Year | Work or venue | Claim used here | Lesson |
|---|---|---|---|---|
| Kenneth Arrow | 1951; 1963 | *Social Choice and Individual Values* (2nd ed. restates the conditions) | [Arrow's theorem](#arrows-theorem) | [1.3](lessons/01-03-arrow-as-a-map.md) |
| David McGarvey | 1953 | "A theorem on the construction of voting paradoxes", *Econometrica* | every tournament is a majority relation | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| Stearns; Erdős and Moser | 1959; later | — | far fewer voters suffice for McGarvey (no bounds stated) | [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| Kenneth May | 1952 | "A set of independent, necessary and sufficient conditions for simple majority decision", *Econometrica* | [May's theorem](#mays-theorem) | [1.2](lessons/01-02-mays-theorem.md) |
| Amartya Sen | 1966; 1969; 1970; 1976; 1992 | *Econometrica*; *Review of Economic Studies*; *JPE* and *Collective Choice and Social Welfare*; *Economica*; "Minimal Liberty", *Economica* | value restriction; quasi-transitive possibility; liberal paradox and utility impossibility; conditional Pareto line; reply to game forms | [1.3](lessons/01-03-arrow-as-a-map.md), [3.4](lessons/03-04-single-crossing-and-value-restriction.md), [4.1](lessons/04-01-sens-liberal-paradox.md), [4.2](lessons/04-02-answers-to-sen.md), [6.3](lessons/06-03-utilities-in-possibility-out.md) |
| Allan Gibbard | 1969 (publ. 2014); 1973; 1974; 1977 | manuscript; —; *JET*; *Econometrica* | oligarchy theorem; GS (general game forms); paradox of rights and waivable rights; strategy-proof random rules | [1.3](lessons/01-03-arrow-as-a-map.md), [3.1](lessons/03-01-manipulation-and-strategy-proofness.md), [3.2](lessons/03-02-proving-gibbard-satterthwaite.md), [4.2](lessons/04-02-answers-to-sen.md) |
| G.-Th. Guilbaud | 1952 | — | the $0.0877$ limit | [1.4](lessons/01-04-how-often-do-cycles-happen.md) |
| Camion | 1959 | — | strongly connected tournaments have Hamiltonian cycles | [1.4](lessons/01-04-how-often-do-cycles-happen.md) |
| Tsetlin, Regenwetter, Grofman | 2003 | *Social Choice and Welfare* | departures from IC lower the 3-alternative limit (non-cyclic cultures) | [1.4](lessons/01-04-how-often-do-cycles-happen.md) |
| Regenwetter et al.; Gerry Mackie | 2006; 2003 | *Behavioral Social Choice*; *Democracy Defended* | cycles reported rare in real large electorates (evidence, not theorem) | [1.4](lessons/01-04-how-often-do-cycles-happen.md) |
| Jean-Charles de Borda; Condorcet | 1784; 1785 | Borda's proposal; Condorcet's *Essai* | equal-step scoring; the 81-voter example | [2.1](lessons/02-01-scoring-rules.md) |
| Peter Fishburn | 1974; 1978 | — | Condorcet winner outscored by $m-2$ rivals under every scoring rule; approval characterization | [2.1](lessons/02-01-scoring-rules.md), [6.1](lessons/06-01-approval-voting.md) |
| Donald Saari | — | — | geometry of positional voting; a Borda defender (named only) | [2.1](lessons/02-01-scoring-rules.md) |
| J. Smith; H. Peyton Young | 1973; 1975 | *Econometrica*; "Social choice scoring functions", *SIAM J. Appl. Math.* | [Young's theorem](#youngs-theorem) | [2.2](lessons/02-02-consistency-and-youngs-characterization.md) |
| Young; Nitzan and Rubinstein | 1974; 1981 | "An axiomatization of Borda's rule"; *Public Choice* | singling out Borda takes more axioms (not stated) | [2.2](lessons/02-02-consistency-and-youngs-characterization.md) |
| William Zwicker | 2016 | "Introduction to the theory of voting" | no Condorcet extension is consistent, all $m\ge3$; Young-Levenglick paraphrase | [2.2](lessons/02-02-consistency-and-youngs-characterization.md), [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| A. H. Copeland; John Kemeny; Kendall; Mallows | 1951; 1959; 1938; 1957 | — | Copeland rule; Kemeny rule; Kendall tau; Mallows model | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| Young and Levenglick | 1978 | *SIAM J. Appl. Math.* | [Young-Levenglick](#young-levenglick-theorem) | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md) |
| H. Peyton Young | 1988 | "Condorcet's Theory of Voting", *APSR* | [Kemeny as MLE](#kemeny-as-maximum-likelihood); likeliest winner leads toward Borda | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md), [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) |
| Bartholdi, Tovey and Trick | 1989 | — | Kemeny and some manipulations computationally hard | [2.3](lessons/02-03-condorcet-methods-and-kemeny.md), [3.2](lessons/03-02-proving-gibbard-satterthwaite.md) |
| Hervé Moulin | 1980; 1988 | *Public Choice*; "Condorcet's principle implies the no show paradox", *JET* | generalized medians; no-show theorem; maximin participation at $m=3$ | [2.4](lessons/02-04-monotonicity-and-participation.md), [3.3](lessons/03-03-single-peakedness-black-and-moulin.md) |
| Brandt, Geist and Peters | 2017 | SAT solving | 12 voters suffice and are tight; 17 / 14 for set-valued rules | [2.4](lessons/02-04-monotonicity-and-participation.md) |
| Mark Satterthwaite | 1975 | — | GS for voting procedures, independently | [3.1](lessons/03-01-manipulation-and-strategy-proofness.md) |
| Muller and Satterthwaite | 1977 | *JET* | strong monotonicity implies strategy-proofness on the unrestricted domain | [3.1](lessons/03-01-manipulation-and-strategy-proofness.md) |
| Eric Maskin | circulated 1977, publ. 1999 | — | Maskin monotonicity necessary for Nash implementation | [3.1](lessons/03-01-manipulation-and-strategy-proofness.md) |
| Schmeidler and Sonnenschein; Philip Reny | 1978; 2001 | — | lift-to-top reduction of GS to Arrow; one direct proof of both | [3.2](lessons/03-02-proving-gibbard-satterthwaite.md) |
| Duggan and Schwartz | 2000 | *Social Choice and Welfare* | set-valued GS needs assumptions on ranking sets | [3.2](lessons/03-02-proving-gibbard-satterthwaite.md) |
| Duncan Black | 1948 | — | [Black's theorem](#blacks-theorem) | [3.3](lessons/03-03-single-peakedness-black-and-moulin.md) |
| Roberts; Gans and Smart | 1977; 1996 | *J. Public Econ.* | [representative voter theorem](#representative-voter-theorem) | [3.4](lessons/03-04-single-crossing-and-value-restriction.md) |
| Ward | 1965 | — | Latin-square condition | [3.4](lessons/03-04-single-crossing-and-value-restriction.md) |
| Charles Plott; Richard McKelvey | 1967; 1976 | — | knife-edge symmetry for a 2-D majority winner; cycles connect everything (owned by `political-economy` 2.2) | [3.4](lessons/03-04-single-crossing-and-value-restriction.md) |
| Julian Blau | 1975 | "Liberal Values and Independence", *Review of Economic Studies* | no meddlesome preferences, no conflict | [4.1](lessons/04-01-sens-liberal-paradox.md), [4.2](lessons/04-02-answers-to-sen.md) |
| Robert Nozick | 1974 | *Anarchy, State, and Utopia*, pp. 164-166 | rights are not rankings of states | [4.2](lessons/04-02-answers-to-sen.md) |
| Gärdenfors; Sugden; Gaertner, Pattanaik and Suzumura | 1981; 1985; 1992 | *Noûs*; —; "Individual Rights Revisited", *Economica* | rights as game forms | [4.1](lessons/04-01-sens-liberal-paradox.md), [4.2](lessons/04-02-answers-to-sen.md) |
| Bezalel Peleg; Pattanaik; Deb, Pattanaik and Razzolini | 1998; 1996; 1997 | — | Gibbard's paradox as no pure equilibrium; game-form impossibilities | [4.2](lessons/04-02-answers-to-sen.md) |
| Kornhauser and Sager | 1986 | "Unpacking the Court", *Yale Law Journal* | [doctrinal paradox](#doctrinal-paradox) | [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md) |
| Philip Pettit | 2001 | "Deliberative Democracy and the Discursive Dilemma" | [discursive dilemma](#discursive-dilemma) | [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md) |
| Nehring and Puppe; Dietrich and List | 2007 | — | [median property](#median-property) theorem | [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md) |
| Christian List | 2003 | *Mathematical Social Sciences* | unidimensional alignment | [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md), [4.4](lessons/04-04-the-list-pettit-impossibility.md) |
| List and Pettit | 2002; 2011 | *Economics and Philosophy*; *Group Agency* | [List-Pettit impossibility](#list-pettit-impossibility); group autonomy | [4.4](lessons/04-04-the-list-pettit-impossibility.md) |
| Dietrich and List; Dokow and Holzman | 2007; 2010 | "Arrow's theorem in judgment aggregation", *Social Choice and Welfare*; — | Arrow recovered on rich agendas | [4.4](lessons/04-04-the-list-pettit-impossibility.md) |
| Nitzan and Paroush; Shapley and Grofman | 1982; 1984 | *International Economic Review*; *Public Choice* | [log-odds weights](#nitzan-paroush-weights) | [5.1](lessons/05-01-the-condorcet-jury-theorem.md) |
| Jacob Paroush | 1998 | "Stay Away from Fair Coins" | the limit needs a fixed margin above a half | [5.1](lessons/05-01-the-condorcet-jury-theorem.md), [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| Krishna Ladha | 1992 | — | first jury theorem for pairwise-correlated votes | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| Dietrich and Spiekermann | 2013 | — | common-cause limit | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| Austen-Smith and Banks | 1996 | "Information Aggregation, Rationality, and the Condorcet Jury Theorem", *APSR* | [sincere voting need not be an equilibrium under majority](#strategic-voting-and-pivotality) | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| Feddersen and Pesendorfer | 1998 | "Convicting the Innocent", *APSR* | [unanimity juries](#unanimity-juries) convict the innocent more as they grow | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| Peter Coughlan | 2000 | — | mistrials and communication can restore sincere voting | [5.2](lessons/05-02-when-the-jury-theorem-fails.md) |
| Grofman and Feld | 1988 | "Rousseau's General Will: A Condorcetian Perspective", *APSR* | [Rousseau as a jury theorem](#rousseau-through-the-jury-theorem) | [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) |
| Bovens and Rabinowicz | 2006 | "Democratic Answers to Complex Questions", *Synthese* | premise-based better for truth for the right reasons | [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) |
| Hong and Page; Thompson; Landemore | 2004; 2014; 2013 | *PNAS*; *Notices of the AMS*; *Democratic Reason* | [diversity trumps ability](#diversity-trumps-ability) and its critique and use | [5.3](lessons/05-03-epistemic-readings-of-aggregation.md) |
| Brams and Fishburn | 1978 | *APSR* | [sincerity theorem](#brams-fishburn-sincerity-theorem) | [6.1](lessons/06-01-approval-voting.md) |
| Carlos Alós-Ferrer | 2006 | *Social Choice and Welfare* | neutrality redundant in Fishburn's characterization | [6.1](lessons/06-01-approval-voting.md) |
| Jean-François Laslier | 2009 | "The Leader Rule", *Journal of Theoretical Politics* | [leader rule](#leader-rule) | [6.1](lessons/06-01-approval-voting.md) |
| Michel Balinski and Rida Laraki | 2007; 2010 | *PNAS*; *Majority Judgment*, MIT Press | [majority judgment](#majority-judgment) and its strategy claims | [6.2](lessons/06-02-range-voting-and-majority-judgment.md) |
| d'Aspremont and Gevers; Hammond; Deschamps and Gevers | 1977; 1976; 1978 | *Review of Economic Studies*; *Econometrica*; — | utilitarian and leximin characterizations | [6.3](lessons/06-03-utilities-in-possibility-out.md) |
| Dhillon and Mertens | 1999 | *Econometrica* | relative utilitarianism | [6.3](lessons/06-03-utilities-in-possibility-out.md) |
| Alexander Hamilton; C. W. Seaton | 1792; 1880 | — | largest remainders; the Alabama computation | [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md) |
| Balinski and Young | 1975; 1982 | quota method; *Fair Representation* | quota plus house monotonicity is possible; [Balinski-Young](#balinski-young-theorem) | [7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md), [7.2](lessons/07-02-divisor-methods-and-balinski-young.md) |
| Gölz, Peters and Procaccia | 2022 | — | Balinski-Young without order preservation (five states) | [7.2](lessons/07-02-divisor-methods-and-balinski-young.md) |

## Assumed, not taught here

Every prerequisite the lessons use without deriving, with the course that teaches it. Built lessons are linked
directly; `political-economy`, not yet rebuilt, links to its syllabus. **Required by the syllabus Notes:** Arrow's proof
([`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md)) and vNM utility and
interpersonal comparability ([`decision-theory` 1.3](../decision-theory/lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md),
[5.2](../decision-theory/lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)); none of those courses
is a formal prerequisite.

**Proof technique and relations**

| Fact | Where it's taught |
|---|---|
| Complete, transitive, antisymmetric relations; weak orders | defined inline in [1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md); `proofs-primer` has **no relations lesson**. Its "unpack the definition" move (proving divisibility transitive) is [`proofs-primer` 2.1](../proofs-primer/lessons/02-01-direct-proof-definitions.md) |
| Implication, contrapositive (1.3's "drop one condition", 3.2 read contrapositively) | [`proofs-primer` 1.1](../proofs-primer/lessons/01-01-statements-connectives-implication.md) |
| Proof by cases and "without loss of generality" (May step 4, Sen's cases) | [`proofs-primer` 2.3](../proofs-primer/lessons/02-03-cases-and-wlog.md) |
| Induction (3.1 Lemma 1 changes one voter at a time) | [`proofs-primer` 3.3](../proofs-primer/lessons/03-03-induction.md) |
| Strongly connected components; a strongly connected tournament has a Hamiltonian cycle (Camion 1959) | components: [`algorithms` 3.2](../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md); Camion's theorem is cited in [1.4](lessons/01-04-how-often-do-cycles-happen.md), proved in no course |
| Separating hyperplane between disjoint convex cones (Young's hard direction) | [`grad-game-theory` 1.1](../grad-game-theory/lessons/01-01-convex-sets-functions-separating-hyperplanes.md) |

**Social choice and game theory owned elsewhere**

| Fact | Where it's taught |
|---|---|
| **Arrow's theorem, proof by decisive coalitions** (field expansion, contraction) | [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md) ([card](../grad-game-theory/reference.md#social-choice-the-three-walls-and-the-one-escape)); stated in welfare economics in [`grad-micro` 6.5](../grad-micro/lessons/06-05-social-choice-welfare.md) |
| The basic three-voter Condorcet cycle; the agenda trick | [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md) |
| Median voter theorem (odd $n$, single-peaked: median peak is the Condorcet winner) | [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md) |
| Gibbard-Satterthwaite statement in a mechanism-design setting | [`game-theory-refresher` 4.2](../game-theory-refresher/lessons/04-02-mechanism-design.md); [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md) |
| Revelation principle; strategy-proofness as dominant-strategy incentive compatibility | [`grad-game-theory` 5.2](../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md) |
| VCG and the Clarke pivot (money escapes GS) | [`grad-game-theory` 5.3](../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md) |
| Bayesian games and Bayes-Nash equilibrium (5.2's jurors) | [`game-theory-refresher` 3.1](../game-theory-refresher/lessons/03-01-bayesian-games.md) |
| Dominance and the prisoner's dilemma (4.2's game forms) | [`game-theory-refresher` 1.1](../game-theory-refresher/lessons/01-01-normal-form-dominance.md) |
| Single-crossing in screening (Spence-Mirrlees), the cousin of 3.4 | [`grad-micro` 5.3](../grad-micro/lessons/05-03-screening.md) |
| Plott, McKelvey, agenda setters, strategic agenda voting, Meltzer-Richard | [`political-economy`](../political-economy/syllabus.md) (2.2, 5.3) |
| Counting plurality and runoff ballots; AV and STV; Hare largest remainders; D'Hondt and Sainte-Laguë | [`political-institutions` 1.1](../political-institutions/lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [1.2](../political-institutions/lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](../political-institutions/lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.4](../political-institutions/lessons/01-04-list-pr-divisor-methods.md) |
| Measuring disproportionality of real allocations | [`political-institutions` 2.1](../political-institutions/lessons/02-01-measuring-outcomes.md) |

**Probability and statistics**

| Fact | Where it's taught |
|---|---|
| Conditional probability; Bayes's rule, odds form | [`prob-stat-refresher` 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) |
| Binomial distribution ($P_n$) | [`prob-stat-refresher` 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| Covariance and correlation (Guilbaud's $-1/3$; correlated jurors) | [`prob-stat-refresher` 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |
| Chebyshev's inequality; law of large numbers | [`prob-stat-refresher` 3.2](../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md) |
| Hoeffding's inequality (stated without proof in 5.1) | [`statistical-learning` 3.2](../statistical-learning/lessons/03-02-finite-classes-and-uniform-convergence.md) ([card](../statistical-learning/reference.md#hoeffdings-inequality)) |
| Central limit theorem | [`prob-stat-refresher` 3.3](../prob-stat-refresher/lessons/03-03-central-limit-theorem.md); the **multivariate** form and the trivariate orthant formula Guilbaud's proof uses are stated in [1.4](lessons/01-04-how-often-do-cycles-happen.md) (formula in [Cycle probability numbers](#cycle-probability-numbers)) and derived in no course |
| Maximum-likelihood estimation | [`prob-stat-refresher` 4.1](../prob-stat-refresher/lessons/04-01-estimation-and-mle.md) |
| Naive Bayes (Nitzan-Paroush as log-odds evidence); AdaBoost weights | [`machine-learning` 3.1](../machine-learning/lessons/03-01-naive-bayes.md), [2.7](../machine-learning/lessons/02-07-boosting.md) |

**Decision theory and welfare**

| Fact | Where it's taught |
|---|---|
| **vNM expected utility** (6.1's voters maximize it; cardinality in 6.3) | [`decision-theory` 1.3](../decision-theory/lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) |
| **Harsanyi's aggregation theorem** (weighted sum from Pareto indifference) | [`decision-theory` 5.1](../decision-theory/lessons/05-01-harsanyis-aggregation-theorem.md) ([card](../decision-theory/reference.md#harsanyis-aggregation-theorem)) |
| **Interpersonal comparability; the full invariance-class table**; extended preferences | [`decision-theory` 5.2](../decision-theory/lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) ([card](../decision-theory/reference.md#informational-bases)) |
| Utilitarian and Rawlsian social welfare functions as formulas | [`grad-micro` 6.5](../grad-micro/lessons/06-05-social-choice-welfare.md); [`public-economics` 5.1](../public-economics/lessons/05-01-the-linear-income-tax.md) |
| Ex ante Pareto, welfarism, laundering preferences; the doors version of Sen | [`philosophy-of-economics` 1.1](../philosophy-of-economics/lessons/01-01-welfarism-and-preference-satisfaction.md), [3.2](../philosophy-of-economics/lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |

**Political philosophy and texts**

| Fact | Where it's taught |
|---|---|
| Why democracy; epistemic democracy and Estlund's authority tenet (the step from accuracy to authority) | [`political-philosophy` 5.1](../political-philosophy/lessons/05-01-why-democracy.md) |
| Does social choice wound democracy? Riker and Mackie | [`political-philosophy` 5.4](../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md) |
| Deliberative versus aggregative democracy | [`political-philosophy` 5.3](../political-philosophy/lessons/05-03-deliberative-vs-aggregative-democracy.md) |
| Mill's self-regarding sphere; legal moralism | [`political-philosophy` 3.2](../political-philosophy/lessons/03-02-mills-harm-principle.md), [3.3](../political-philosophy/lessons/03-03-paternalism-and-legal-moralism.md) |
| Nozick's rights as side constraints | [`political-philosophy` 2.4](../political-philosophy/lessons/02-04-nozick-entitlement-and-the-challenge-to-patterns.md); [`ethics` 2.4](../ethics/lessons/02-04-constraints-and-options.md) |
| Rawls's maximin as justice | [`political-philosophy` 2.3](../political-philosophy/lessons/02-03-rawls-the-two-principles-and-maximin.md) |
| Aristotle's summation argument | [`history-of-political-thought` 1.4](../history-of-political-thought/lessons/01-04-aristotle-constitutions-citizens-and-the-polity.md) |
| Rousseau's *Social Contract* II.3, IV.2 | [`history-of-political-thought` 4.4](../history-of-political-thought/lessons/04-04-rousseau-the-social-contract.md) |
| Peer disagreement; pooling credences | [`epistemology` 4.5](../epistemology/lessons/04-05-peer-disagreement.md), [5.5](../epistemology/lessons/05-05-bayesian-disagreement-and-higher-order-evidence.md) |

## Pitfalls

Every lesson's "Watch out", deduped, grouped by theme. Dropped hypotheses first: they are the commonest error.

### Traps with dropped hypotheses

- **$m\ge3$.** Arrow and Gibbard-Satterthwaite need three or more alternatives that can **win** (onto, or range at
  least 3), not three names on the ballot; with two possible winners a rule can be strategy-proof and non-dictatorial,
  and at $m=2$ May gives a rule with everything. *([1.3](lessons/01-03-arrow-as-a-map.md), [3.1](lessons/03-01-manipulation-and-strategy-proofness.md), [3.2](lessons/03-02-proving-gibbard-satterthwaite.md))*
- **Onto.** GS's Pareto lemma takes a profile where $x$ wins; without onto it fails. With ties left unbroken $f$ is not
  a function into $A$ at all. *([3.1](lessons/03-01-manipulation-and-strategy-proofness.md))*
- **$m\ge4$ in Moulin.** With three candidates maximin with a fixed tie-break satisfies participation. *([2.4](lessons/02-04-monotonicity-and-participation.md))*
- **Odd $n$.** An odd electorate makes $M$ complete, not transitive, and does not guarantee a Condorcet winner. Black's
  completeness, the representative voter's single middle voter, Sen's strict-ranking value restriction, the median-property
  theorem and the jury theorem all use odd $n$; with even $n$ ties appear, $R$ can be intransitive, and judgment
  majorities can be incomplete. *([1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md), [3.3](lessons/03-03-single-peakedness-black-and-moulin.md), [3.4](lessons/03-04-single-crossing-and-value-restriction.md), [4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md))*
- **Even electorates and resoluteness.** With $m=2$ and $n$ even, a resolute rule cannot be both anonymous and neutral:
  every tie-break spends one, which is why May's theorem is stated for a correspondence. *([1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md))*
- **Quote odd-$n$ cycle numbers, or say how ties count.** Under IC with $m=3$, $P_{3,2}=2/3$ and $P_{3,4}=5/9$ against
  $1/18$ at $n=3$. *([1.4](lessons/01-04-how-often-do-cycles-happen.md))*
- **Strict ballots.** Borda's pairwise identity and its Condorcet-loser corollary need complete strict ballots;
  truncated ballots need an unsettled convention. *([2.1](lessons/02-01-scoring-rules.md))*
- **Variable electorates.** Consistency compares elections of different sizes; on a fixed set of voters it has no
  content and Young's theorem says nothing. *([2.2](lessons/02-02-consistency-and-youngs-characterization.md))*
- **Two right-holders.** Sen needs two; with one, make her dictator and everything holds. *([4.1](lessons/04-01-sens-liberal-paradox.md))*
- **$s\ge4$ states.** With three, Webster has quota and population monotonicity together. *([7.2](lessons/07-02-divisor-methods-and-balinski-young.md))*
- **Logically independent premises.** If $p$ entails $q$, $p\wedge q$ says no more than $p$ and odd-$n$ majority is
  consistent. *([4.4](lessons/04-04-the-list-pettit-impossibility.md))*

### Traps with independence conditions

- **IIA is not the spoiler condition.** Arrow's IIA compares two profiles over the same $A$; "removing a losing candidate
  should not change the winner" shrinks the menu. Check which a claim uses. *([1.3](lessons/01-03-arrow-as-a-map.md))*
- **IIA forbids more than intensity:** it also rules out the Copeland ranking, which uses only pairwise majorities. *([1.3](lessons/01-03-arrow-as-a-map.md))*
- **GS does not assume IIA; it derives it** (3.2 step 3), so objections to IIA as a normative demand do not touch it. *([3.2](lessons/03-02-proving-gibbard-satterthwaite.md))*
- **Systematicity is not IIA for judgments.** IIA's analogue is independence; systematicity adds neutrality across
  propositions, and on the conjunctive agenda that extra is what does the damage. On richer agendas independence alone
  forces dictatorship (Dietrich-List). *([4.4](lessons/04-04-the-list-pettit-impossibility.md))*
- **Utility IIA is weaker than Arrow's** (it fixes numbers, not just orders), but equivalent in effect under CNC. *([6.3](lessons/06-03-utilities-in-possibility-out.md))*
- **What the jury theorem needs independent is correctness, not votes.** Votes are positively correlated because all
  track one truth. *([5.1](lessons/05-01-the-condorcet-jury-theorem.md))*

### Traps with consistency and monotonicity

- **Consistency is not Condorcet consistency.** Consistency (reinforcement) is about merging electorates; Condorcet
  consistency about electing the Condorcet winner. Scoring rules have the first, Condorcet extensions the second, and no
  rule has both. *([2.2](lessons/02-02-consistency-and-youngs-characterization.md))*
- **Two electorates with the same Condorcet winner cannot merge into a different one:** pairwise counts add.
  Counterexamples to consistency need a part without a Condorcet winner. *([2.2](lessons/02-02-consistency-and-youngs-characterization.md))*
- **Kemeny's consistency is for rankings.** The top of a Kemeny ranking is not a consistent choice rule. *([2.3](lessons/02-03-condorcet-methods-and-kemeny.md))*
- **"Scoring rule" in Young's theorem is not "sensible scoring rule":** any $s\in\mathbb R^m$ passes, including the
  constant vector and $(0,0,1)$. *([2.2](lessons/02-02-consistency-and-youngs-characterization.md))*
- **Never electing the Condorcet loser does not mean electing the Condorcet winner** (Borda has the first, not the
  second); among $(1,s,0)$ rules only Borda never elects the loser. *([2.1](lessons/02-01-scoring-rules.md))*
- **Condorcet's 81 voters: A never wins outright,** but ties B at $s_1=s_2$; and it is one profile until Fishburn's
  generalization. *([2.1](lessons/02-01-scoring-rules.md))*
- **Moulin is about participation, not monotonicity:** maximin and Copeland are monotone. *([2.4](lessons/02-04-monotonicity-and-participation.md))*
- **A monotonicity failure needs no strategic voter;** sincere shifts of opinion trigger it. *([2.4](lessons/02-04-monotonicity-and-participation.md))*
- **Monotone is not strongly monotone:** Borda is monotone in 2.4's sense, and every Borda manipulation is a
  strong-monotonicity failure. *([3.1](lessons/03-01-manipulation-and-strategy-proofness.md))*
- **Decisive does not mean tie-free;** a tie is a verdict. Positive responsiveness is stronger than monotonicity. *([1.2](lessons/01-02-mays-theorem.md))*
- **May's dictator fails two conditions** (anonymity and positive responsiveness, when indifference is allowed). *([1.2](lessons/01-02-mays-theorem.md))*
- **Copeland usually ties on four candidates** without a Condorcet winner, and never reads margins. *([2.3](lessons/02-03-condorcet-methods-and-kemeny.md))*

### Traps with escaping Arrow and Gibbard-Satterthwaite

- **"Escapes Arrow" claims must name the dropped condition and its price.** Weakening transitivity yields an oligarchy;
  dropping IIA yields manipulation; restricting the domain yields one-dimensional politics; cardinal utility without
  comparability escapes nothing (Sen's utility impossibility). *([1.3](lessons/01-03-arrow-as-a-map.md), [6.3](lessons/06-03-utilities-in-possibility-out.md))*
- **Arrow does not say majority fails on every profile;** on a profile with transitive $M$ majority works. *([1.3](lessons/01-03-arrow-as-a-map.md))*
- **GS says some voter can manipulate at some profile,** not every voter at every profile. *([3.1](lessons/03-01-manipulation-and-strategy-proofness.md))*
- **$F(\mathbf P)$ has $f(\mathbf P)$ on top only for a strategy-proof $f$;** the gap is a manipulation. *([3.2](lessons/03-02-proving-gibbard-satterthwaite.md))*
- **Approval and grade ballots do not cleanly escape GS.** Gibbard 1973 covers general game forms; a fixed
  ranking-to-ballot map makes approval a manipulable scoring rule; approval is strategy-proof only on the dichotomous
  domain. *([6.1](lessons/06-01-approval-voting.md), [6.2](lessons/06-02-range-voting-and-majority-judgment.md))*
- **Majority judgment's Arrow escape needs a common absolute grading language;** relative grading brings back an IIA
  violation. *([6.2](lessons/06-02-range-voting-and-majority-judgment.md))*
- **Cardinal utility does not escape Arrow; comparability does.** Using a raw sum asserts unit comparability. *([6.3](lessons/06-03-utilities-in-possibility-out.md))*
- **The information class says which rules are meaningful, not which to pick;** under CFC both sum and leximin are. *([6.3](lessons/06-03-utilities-in-possibility-out.md))*
- **Dropping full transitivity is not a free lunch:** the oligarchy theorem relocates power. *([1.3](lessons/01-03-arrow-as-a-map.md))*

### Traps with domains

- **Single-peaked fixes only the order on each side of the peak;** cross-peak comparisons are free, and no distances
  are needed. *([3.3](lessons/03-03-single-peakedness-black-and-moulin.md))*
- **The median of peaks is not the only strategy-proof rule on a line;** phantoms give a family. *([3.3](lessons/03-03-single-peakedness-black-and-moulin.md))*
- **Single-crossing orders voters, not alternatives,** and needs one order for all pairs; each pair splitting the voters
  in two is not enough. *([3.4](lessons/03-04-single-crossing-and-value-restriction.md))*
- **McGarvey is exactly as strong as unrestricted domain.** *([1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md))*
- **A Condorcet winner does not make $M$ transitive;** three losers can cycle beneath it. "Cycle" and "no Condorcet
  winner" split once $m\ge4$. *([1.1](lessons/01-01-profiles-rules-and-the-majority-relation.md), [1.4](lessons/01-04-how-often-do-cycles-happen.md))*
- **IC is not the worst case for every culture:** Tsetlin-Regenwetter-Grofman covers non-cyclic cultures and three
  alternatives; a culture leaning cyclic makes cycles more likely. *([1.4](lessons/01-04-how-often-do-cycles-happen.md))*

### Traps with rights and judgments

- **Sen is not Arrow with liberalism for non-dictatorship:** it uses no IIA and no transitivity and works with two
  people; minimal liberalism is strictly stronger than non-dictatorship. *([4.1](lessons/04-01-sens-liberal-paradox.md))*
- **Pareto never overrides a right on its own pair;** the clash runs around a cycle through pairs nobody owns. *([4.1](lessons/04-01-sens-liberal-paradox.md))*
- **Sen does not say liberty and efficiency always conflict;** with unconditional two-value preferences it takes mutual
  meddling (4 profiles in 144). *([4.2](lessons/04-02-answers-to-sen.md))*
- **Gibbard's paradox does not show minimal liberalism inconsistent;** it needs the libertarian claim's breadth. *([4.2](lessons/04-02-answers-to-sen.md))*
- **Game forms remove the contradiction, not the inefficiency** (a prisoner's dilemma) or the missing equilibrium. *([4.2](lessons/04-02-answers-to-sen.md))*
- **The doctrinal paradox needs nobody to reason badly;** aggregation manufactures the inconsistency. *([4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md))*
- **Premise-based voting is not a free fix:** it can override a unanimous verdict and gives up independence on the
  conclusion. *([4.3](lessons/04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md), [4.4](lessons/04-04-the-list-pettit-impossibility.md))*
- **List-Pettit does not show group judgments incoherent;** each escape gives consistent judgments at a stated price. *([4.4](lessons/04-04-the-list-pettit-impossibility.md))*

### Traps with truth-tracking

- **"More voters, more accuracy" is a theorem about identical voters;** adding voters can lower accuracy when
  competence differs, and the limit needs a fixed margin above a half. *([5.1](lessons/05-01-the-condorcet-jury-theorem.md), [5.2](lessons/05-02-when-the-jury-theorem-fails.md))*
- **A limit is not a size:** at $p=0.52$, 201 voters reach only 0.715. *([5.1](lessons/05-01-the-condorcet-jury-theorem.md))*
- **Not every correlation caps accuracy;** what breaks the theorem is a positive chance of a misleading circumstance. *([5.2](lessons/05-02-when-the-jury-theorem-fails.md))*
- **Strategic voting is not a quirk of unanimity** (Austen-Smith and Banks: majority rule too), and strategic jurors
  are not dishonest. *([5.2](lessons/05-02-when-the-jury-theorem-fails.md))*
- **"Kemeny is the MLE" is conditional** on Condorcet's model exactly: one $p$, independence, uniform prior. *([5.3](lessons/05-03-epistemic-readings-of-aggregation.md))*
- **The likeliest ranking is not the likeliest winner;** the latter drifts toward Borda as $p\to\tfrac12$. *([2.3](lessons/02-03-condorcet-methods-and-kemeny.md), [5.3](lessons/05-03-epistemic-readings-of-aggregation.md))*
- **A posterior is a reason to believe, not to obey,** and its strength turns on an unobserved $p$. *([5.3](lessons/05-03-epistemic-readings-of-aggregation.md))*
- **Hong-Page is not a jury theorem:** its agents relay a search; nobody votes. *([5.3](lessons/05-03-epistemic-readings-of-aggregation.md))*

### Traps with ballots and seats

- **"Sincere approval voting" names a set of outcomes,** including every candidate no rival Pareto-dominates. *([6.1](lessons/06-01-approval-voting.md))*
- **Balinski-Laraki's protection covers one voter and one grade,** not the outcome; a smaller lie can be more profitable
  under majority judgment than under range. *([6.2](lessons/06-02-range-voting-and-majority-judgment.md))*
- **Grade numbers are not just labels for range voting:** it needs shared distances, majority judgment only a shared
  order. *([6.2](lessons/06-02-range-voting-and-majority-judgment.md))*
- **The Alabama paradox indicts Hamilton's way of meeting quota, not quota:** the quota method is house monotone. *([7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md))*
- **The population paradox does not need the loser's quota to fall.** *([7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md))*
- **A new state's fair share is not added to the house as a fraction;** the divisor moves. *([7.1](lessons/07-01-quotas-hamilton-and-the-paradoxes.md))*
- **Divisor methods pay in quota:** Jefferson only overshoots, Adams only undershoots, Webster and Hill-Huntington can
  do either. *([7.2](lessons/07-02-divisor-methods-and-balinski-young.md))*
- **Balinski-Young is an existence claim,** not a forecast for a real census. *([7.2](lessons/07-02-divisor-methods-and-balinski-young.md))*

---

## Conventions

- **One card per course**, covering all 24 lessons; every lesson file is cited somewhere on it.
- **Theorem entries** give the statement with every hypothesis, a plain-English line, the proof idea, what the theorem
  does **not** say, and the lessons. Where a lesson only cites a result, the entry says "stated, not proved".
- **The card follows the lessons and the build's checks over the syllabus** where they differ: Austen-Smith and Banks
  (1996) for strategic jurors; Sen's quasi-transitive possibility dated 1969; Moulin's no-show theorem for $m\ge4$ with
  25 voters in Moulin and 12 sufficient (Brandt-Geist-Peters); Balinski-Young stated for $s\ge4$ with no house-size
  threshold; the Balinski-Laraki book dated 2010; Young's theorem with no ordering of the score vector; Fishburn's
  approval axioms as faithfulness, consistency and cancellation; no relations lesson in `proofs-primer`.
- **Headings are anchors.** Lessons link `../reference.md#slug`; renaming a `###` heading breaks them.
- **No prose dollar signs**: money is written "10,000 dollars".
- **Open book.** Quizzes and reviews never ask for a definition or statement this card holds; they ask you to use it.

# Philosophy of Economics · Lesson 3.2: The limits of Pareto and the compensation tests

> ⏱ ~15 min · Module 3: Efficiency and cost-benefit analysis · Builds on: [3.1 The Pareto principle](03-01-the-pareto-principle.md), [1.1 Welfarism and preference satisfaction](01-01-welfarism-and-preference-satisfaction.md) · Unlocks: [3.3 Cost-benefit analysis and the value of a life](03-03-cost-benefit-analysis-and-the-value-of-a-life.md), [3.4 CBA's critics and defenders](03-04-cbas-critics-and-defenders.md)

## Why this matters

[3.1](03-01-the-pareto-principle.md) sold the [Pareto principle](../reference.md#pareto-principle) as the minimal value judgment: if everyone prefers $x$ to $y$, society should too. This lesson finds two places where even that judgment misleads, and then follows economists to the fix they adopted for the policies Pareto cannot rank, which is nearly all of them. The fix, the compensation test, is the logic inside every cost-benefit analysis in [3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md). Its value judgments are less minimal than they look, and one of its versions can contradict itself.

## The idea

Two farmers, Ann and Bob, disagree about the weather. Ann puts the chance of rain tomorrow at 70%, Bob at 30%. They agree a bet: if it rains Bob pays Ann 50 dollars, if not Ann pays Bob 50, and each pays a broker 5 dollars to hold the stakes. Each expects to gain, so both prefer the bet to no bet. The Pareto principle says society should prefer it too.

Should it? The bet moves 50 dollars from one farmer to the other and burns 10 on fees. Its whole appeal rests on beliefs that cannot both be right. Philippe Mongin calls this [spurious unanimity](../reference.md#spurious-unanimity): agreement on a preference that rests on disagreement about the reasons for it. The principle counts the "yes" twice and never asks why each was given.

That is one crack. Pareto has two more limits, and then a gap that economists tried to close:

- **Rights.** Amartya Sen's [liberal paradox](../reference.md#liberal-paradox) (1970) shows that the weak Pareto principle, a minimal liberty and an unrestricted domain of preferences cannot all hold. Give each of two people the final say over one private matter of their own, such as the colour of their own front door. Let each care more about the other's door than about their own. Then each person's right, applied to their own door, and a unanimous preference over the doors together produce a cycle with no best choice. The proof and the escapes belong to [`social-choice`](../../social-choice/syllabus.md) 4.1-4.2. The lesson here: Pareto takes every preference as input, including preferences about other people's lives, which is the [laundering](../reference.md#laundered-preferences) question of [1.1](01-01-welfarism-and-preference-satisfaction.md) again.
- **Risk.** The [ex ante Pareto](../reference.md#ex-ante-and-ex-post-pareto) principle respects what each person prefers among lotteries. The ex post version respects how things turn out. They come apart. Peter Diamond (1967) pressed that a fair coin flip for an indivisible good beats handing it to one person outright, though both lotteries are ranked equal by a planner who just sums expected utilities. That debate belongs to [`decision-theory`](../../decision-theory/syllabus.md) 5.2. The bet adds a second source of divergence: different beliefs.
- **Silence.** Almost every policy leaves someone worse off, and there Pareto has nothing to say.

## The argument

The **compensation argument**, reconstructed from Nicholas Kaldor and John Hicks (both 1939, *Economic Journal*), who were answering Lionel Robbins's case (*An Essay on the Nature and Significance of Economic Science*, 1932) that interpersonal comparisons of utility are not scientific.

1. **Welfare economics must rank policies that have losers**, or it can recommend almost nothing.
2. **Interpersonal comparisons of utility are value judgments**, outside economics as a science.
3. **A change can enlarge what is available** without any such comparison. If the gainers could fully compensate the losers and still be ahead, the new state contains a Pareto improvement on the old one. *In words:* the pie got bigger, whoever ends up eating it.
4. **Whether compensation is actually paid is a separate question about distribution**, for politics to settle.

∴ **C.** Economics can recommend any change that passes a compensation test without comparing utilities across persons.

**The tests.** Let a state $S$ be an allocation, and let $\bar S$ be its **utility-possibility frontier**: the best utility pairs reachable by redistributing $S$'s total goods. Write $s$ for the utility pair $S$ actually delivers.

- **Kaldor:** $B$ beats $A$ if some redistribution of $B$'s goods makes everyone at least as well off as at $a$, and someone better off. *In words:* $a$ lies strictly inside $\bar B$, so the winners could pay off the losers.
- **Hicks:** $B$ beats $A$ if no redistribution of $A$'s goods does that relative to $b$. *In words:* the losers could not bribe the winners to stay put.
- **Scitovsky (1941):** $B$ beats $A$ only if it passes both tests.

Together these make up the [Kaldor-Hicks criterion](../reference.md#kaldor-hicks-criterion). Hicks's test for $B$ over $A$ is the denial of Kaldor's test for $A$ over $B$. So if Kaldor's test passes in both directions, Hicks's fails in both.

**The value judgment in the technique.** A compensation test is still a judgment about distribution. It treats a change as good when the gains, measured in what the gainers could hand over, exceed the losses. In practice that becomes summed willingness to pay, which counts a dollar to a rich winner the same as a dollar to a poor loser ([3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md)). It also ranks only relative to the status quo $a$. The rival premise is that losers have claims a potential payment does not meet. I. M. D. Little (*A Critique of Welfare Economics*, 1950) argued that a recommendation must also judge the distribution it actually produces. That is [potential versus actual compensation](../reference.md#potential-and-actual-compensation). If compensation is paid, the change is a plain Pareto improvement and the test adds nothing. If it is not paid, someone loses, and the test has not said why that is acceptable.

**Where the argument is weakest.** Premise 3, twice. First, "the pie got bigger" assumes the size of the pie is well defined. Tibor Scitovsky showed it is not: when frontiers cross, each state can pass Kaldor's test against the other (Example 1). Paul Samuelson's repair (1950) ranks $B$ above $A$ only if $\bar B$ lies outside $\bar A$ everywhere, and that criterion is silent about most real policies. Second, a critic says premise 3 smuggles in the comparison premise 2 ruled out: preferring a hypothetical payment to an actual loss is a judgment that the winners' gains outweigh the losers' losses. Defenders reply with Louis Kaplow and Steven Shavell (1994): redistribute through the tax system, which does it more cheaply than distorting each project, and judge projects on efficiency alone. That reply depends on an institutional premise: that the tax system really does the redistributing.

## The frontiers

![Two straight utility-possibility frontiers with Ann's utility on the horizontal axis and Bob's on the vertical. Frontier of A runs from 3 on Bob's axis to 9 on Ann's; frontier of B runs from 6 on Bob's axis to 3 on Ann's; they cross at 1.8 and 2.4. Point a at 0.9 and 2.7 sits on A's frontier inside B's, with an arrow up to 1 and 4 on B's frontier. Point b at 2.5 and 1 sits on B's frontier inside A's, with an arrow to 3 and 2 on A's frontier.](assets/03-02-fig1.svg)

Example 1 drawn. Each status-quo point lies inside the *other* state's frontier, and that can happen only because the frontiers cross. If $\bar B$ lay everywhere outside $\bar A$, then $b$, which lies on $\bar B$, could not be strictly inside $\bar A$, and $A$ could never beat $B$.

## Worked examples

**Example 1 (clean): a Scitovsky reversal.** Illustrative numbers. Ann has $u_1 = 3x_1 + y_1$ and Bob has $u_2 = x_2 + 2y_2$, so Ann cares relatively more for good $x$ and Bob for good $y$. Policy $A$ yields 3 units of $x$ and no $y$; policy $B$ yields 3 units of $y$ and no $x$.

*Frontiers.* In $A$, $u_1 = 3x_1$ and $u_2 = 3 - x_1$, so $\bar A$: $u_1 + 3u_2 = 9$. In $B$, $u_1 = y_1$ and $u_2 = 2(3 - y_1)$, so $\bar B$: $2u_1 + u_2 = 6$. They cross where both hold: $u_1 = 1.8$, $u_2 = 2.4$.

*Status quo points.* Each policy hands most of its good to the person who values it less. At $A$, $x_1 = 0.3$, so $a = (0.9,\ 2.7)$. At $B$, $y_1 = 2.5$, so $b = (2.5,\ 1)$.

*$B$ beats $A$ on Kaldor's test.* Check $a$ against $\bar B$: $2(0.9) + 2.7 = 4.5 < 6$, so $a$ is strictly inside. Concretely, redistribute $B$'s goods to $y_1 = 1$, $y_2 = 2$, giving $(1,\ 4)$, which beats $a$ for both.

*$A$ beats $B$ on Kaldor's test.* Check $b$ against $\bar A$: $2.5 + 3(1) = 5.5 < 9$, strictly inside. Redistribute $A$'s goods to $x_1 = 1$, $x_2 = 2$, giving $(3,\ 2)$, which beats $b$ for both.

So Kaldor's test says move from $A$ to $B$, and once there, move back. Hicks's test passes in neither direction, and Scitovsky's double criterion ranks neither. The test was supposed to measure the pie apart from distribution. Here the verdict depends on which distribution you start from ([Scitovsky reversal](../reference.md#scitovsky-reversal)).

**Example 2 (hard): the spurious-unanimity bet.** Back to the farmers. Each gains 50 or loses 50, then pays 5.

*Each by her own lights.* Ann expects $0.7(50) - 0.3(50) - 5 = 15$ dollars. Bob, who puts no rain at 70%, expects $0.7(50) - 0.3(50) - 5 = 15$. Ex ante Pareto endorses the bet.

*Under any one probability.* Let $q$ be a single probability of rain that both use. Then Ann expects $100q - 55$ and Bob expects $45 - 100q$, which sum to $-10$ for every $q$. No shared belief makes both gain. At $q = 0.5$ both expect to lose 5.

*Ex post.* If it rains Ann nets 45 and Bob loses 55; if not, the reverse. One of them is wrong in either state.

Two readings either side can defend. On the first, ex ante Pareto stands: these are adults acting on their own beliefs, and overriding them is paternalism about credences, the same worry as [2.3](02-03-nudges-and-behavioural-welfare-economics.md)'s about tastes. On the second, Itzhak Gilboa, Dov Samet and David Schmeidler (2004, *Journal of Political Economy*) restrict the Pareto principle to choices on which people share beliefs. Mongin (2016, *Economics and Philosophy*) diagnoses the general flaw: unanimity on a preference built from opposite reasons carries no normative force, as when two countries each go to war confident of winning. The crux is whether a person's beliefs, like her tastes, are hers to have respected, or are claims about the world that society may assess.

## Watch out

- **You might think the Kaldor-Hicks criterion avoids interpersonal comparison.** It avoids comparing *utilities*. Applied as a sum of willingness to pay, it weighs everyone's dollars equally, and that is a distributional value judgment.
- **You might think passing a compensation test means the losers are compensated.** "Could compensate" is a conceptual claim about the frontier. "Will compensate" is an empirical claim about politics. "Need not compensate" is a normative claim. The argument needs all three, and only the first is economics.
- **You might think a spurious-unanimity bet fails the Pareto principle.** It passes the ex ante principle; that is the objection. What it fails is every version that evaluates with a single shared probability.

## One-liner

> Pareto counts every preference and every belief as given, and the compensation tests extend it by pretending losers are paid; when frontiers cross, the pretence ranks $B$ over $A$ and $A$ over $B$.

## Problems

**P1 (🟢) *(Formal (a) · Exegetical (b).)*** Illustrative numbers. Cal has $u_1 = 4x_1 + y_1$ and Dee has $u_2 = x_2 + y_2$. Policy $A$ yields 2 units of $x$, split $x_1 = 0.25$, $x_2 = 1.75$. Policy $B$ yields 4 units of $y$, split $y_1 = 3.5$, $y_2 = 0.5$.

(a) Give each status-quo utility pair and the equation of each utility-possibility frontier. Show that each policy passes Kaldor's test against the other by giving a redistribution that beats the status quo for both people. Say which policy Scitovsky's double criterion ranks higher.
(b) Suppose $B$ is adopted and the redistribution you found in (a) is actually carried out. Say in two sentences what the Kaldor test then adds to the Pareto principle.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** Eve thinks a start-up has a 60% chance of success; Finn thinks 20%. They sign a contract: if it succeeds Finn pays Eve 120 dollars, if it fails Eve pays Finn 80 dollars, and each pays a lawyer 6 dollars. Both are risk-neutral.

(a) Compute each person's expected gain on their own beliefs. Then let $q$ be a single shared probability of success, and show that no $q$ gives both a non-negative expected gain.
(b) Does the ex ante Pareto principle endorse the contract? Say what the Gilboa-Samet-Schmeidler restriction says about it and why. Three sentences or fewer.

**P3 (🔴, optional) *(Exegetical.)*** An **invented** memo from a regional transport office, not the words of any real agency:

> "The bypass passes the Kaldor-Hicks test: drivers gain 40 million dollars in time savings and the residents along the route lose 25 million in noise and property value. The winners could compensate the losers and still be 15 million ahead. Whether to pay them is a political question; economically, the bypass is efficient and should be built."

A residents' group replies that a payment no one makes is no answer to a loss someone suffers. Name the premise of the compensation argument the group must deny, say whether the dispute over it is empirical, conceptual or normative, and say what argument or evidence would move each side. 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) · Exegetical (b), both strict.)*

**Must hit, strict (a):**

- Status quo: $a = (4 \times 0.25,\ 1.75) = (1,\ 1.75)$; $b = (3.5,\ 0.5)$.
- In $A$, $u_1 = 4x_1$ and $u_2 = 2 - x_1$, so $\bar A$: $u_1 + 4u_2 = 8$. In $B$, $u_1 = y_1$ and $u_2 = 4 - y_1$, so $\bar B$: $u_1 + u_2 = 4$. They cross at $(8/3,\ 4/3)$.
- $B$ beats $A$ (Kaldor): $1 + 1.75 = 2.75 < 4$, so $a$ is inside $\bar B$. For example $y_1 = 1.5$, $y_2 = 2.5$ gives $(1.5,\ 2.5)$, better for both than $(1,\ 1.75)$.
- $A$ beats $B$ (Kaldor): $3.5 + 4(0.5) = 5.5 < 8$, so $b$ is inside $\bar A$. For example $x_1 = 1$, $x_2 = 1$ gives $(4,\ 1)$, better for both than $(3.5,\ 0.5)$.
- Hicks fails both ways, so Scitovsky's double criterion ranks neither.

**Must hit, strict (b):** once compensation is paid, the outcome is an actual Pareto improvement on $a$, which the Pareto principle already endorses. The Kaldor test adds something only when compensation is *not* paid, and that is exactly the case the Pareto principle leaves unranked.

**Wrong turns:** any redistribution on the frontier works if it beats the status quo for *both*, so $(1.5,\ 2.5)$ is one answer among many; a point that beats it for only one person fails. Testing $a$ against its own frontier $\bar A$ (it lies on it) instead of against $\bar B$.

**Model answer:** (a) $a = (1, 1.75)$, $b = (3.5, 0.5)$; $\bar A$: $u_1 + 4u_2 = 8$, $\bar B$: $u_1 + u_2 = 4$. $B$'s goods can give $(1.5, 2.5)$, which beats $a$; $A$'s goods can give $(4, 1)$, which beats $b$. Each passes Kaldor against the other, and Scitovsky ranks neither. (b) With compensation paid the move is a Pareto improvement, so the test adds nothing. Its work is done only in cases where someone is left worse off.

---

**P2** *(Formal (a) · Exegetical (b), both strict.)*

**Must hit, strict (a):**

- Eve: $0.6(120) - 0.4(80) - 6 = 72 - 32 - 6 = 34$ dollars.
- Finn: $0.8(80) - 0.2(120) - 6 = 64 - 24 - 6 = 34$ dollars.
- With a shared $q$: Eve expects $120q - 80(1-q) - 6 = 200q - 86$, Finn $80(1-q) - 120q - 6 = 74 - 200q$. The sum is $-12$ for every $q$. Eve needs $q \ge 0.43$ and Finn needs $q \le 0.37$, which cannot both hold.

**Must hit, strict (b):**

- Yes: each strictly prefers the contract on their own beliefs, so it is an ex ante Pareto improvement.
- Gilboa, Samet and Schmeidler apply the Pareto principle only where people share the relevant beliefs. Here they do not, so the principle is silent.
- The reason: the unanimity rests on beliefs that cannot both be accurate, which is Mongin's spurious unanimity. Under any shared belief the contract is a transfer that burns 12 dollars of fees.

**Wrong turns:** reading "the sum is negative" as showing the Pareto principle *rejects* the contract; the ex ante principle endorses it, which is the objection. Using Eve's 60% for Finn's expectation.

**Model answer:** (a) Each expects 34 dollars on their own beliefs. With a shared $q$, Eve needs $200q \ge 86$ and Finn $200q \le 74$, so no $q$ works, and the expected gains always sum to $-12$. (b) Ex ante Pareto endorses the contract, since both prefer it. Gilboa, Samet and Schmeidler would withhold the endorsement, because the principle is restricted to cases of shared belief and here the unanimity comes from opposite beliefs, at most one of them accurate.

---

**P3** *(Exegetical, strict on the premise; the verdict is not graded.)*

**Must hit, strict:**

- The premise denied is premise 4: that whether compensation is paid is a separate question, so a potential Pareto improvement can be recommended without it. Granting premise 3's arithmetic (a 15-million surplus) is compatible with the group's objection.
- The dispute is mixed and the answer must say so. The normative core: do the losers have a claim against *this project*, or only against the overall distribution? The empirical part: whether, as the Kaplow-Shavell reply needs, the tax and transfer system in fact offsets such losses.
- What moves each side. The memo's author is moved by evidence that losers of projects like this are systematically not compensated, or are already poor, so "politics will handle it" fails. The group is moved by an argument that project-by-project compensation is costlier than redistributing through taxes, and that across many projects most people come out ahead.

**Wrong turns:** naming "whether the bypass is efficient" as the crux; both sides can grant the 15 million. Treating the group as denying that interpersonal comparisons are value judgments (premise 2): its complaint is about who bears the loss, not about how to measure it.

**Model answer, one of several:** The group denies premise 4, that payment is a separate political question. It grants the 15-million surplus and holds that losers have a claim against the project that imposes the loss. That claim is normative, but the memo's defence is empirical: it assumes the tax system offsets such losses. The author would be moved by evidence that residents in such cases are never compensated and are poorer than the drivers. The group would be moved by an argument that compensating every project is more costly than redistributing through taxes, so that a policy of building efficient projects leaves nearly everyone ahead over time.

</details>

## Flashback

**From Lesson [2.3](02-03-nudges-and-behavioural-welfare-economics.md) (Nudges and behavioural welfare economics):** *(Formal (a)–(b) · Exegetical (c).)* Illustrative data. A worker picks a pension contribution rate: none ($N$), 5 percent ($F$) or 10 percent ($T$).

| Situation | Menu | Ancillary condition | Chosen |
|---|---|---|---|
| $G_1$ | $\{N,F,T\}$ | active choice, contributions start today | $F$ |
| $G_2$ | $\{N,F,T\}$ | default $T$, contributions start today | $T$ |
| $G_3$ | $\{N,F\}$ | active choice, contributions start in a year | $F$ |

(a) Using Bernheim and Rangel's $P^*$ on the domain $\{G_1,G_2,G_3\}$, find every ranked pair and the welfare optima.
(b) The analyst adds $G_4$: menu $\{N,F,T\}$, default $N$, contributions start today, chosen $N$. Redo (a).
(c) In two sentences: explain why enlarging the welfare-relevant domain can never add a pair to $P^*$, and say what the analyst would need, on Bernheim and Rangel's terms, to drop $G_4$ again.

<details>
<summary>Solution</summary>

(a) Check each pair against every situation containing both.

- $N$ vs $F$: shared $G_1,G_2,G_3$, choices $F,T,F$. $N$ is never chosen, so $F\,P^*\,N$.
- $N$ vs $T$: shared $G_1,G_2$ ($G_3$ lacks $T$), choices $F,T$. $N$ is never chosen, so $T\,P^*\,N$.
- $F$ vs $T$: shared $G_1,G_2$. $F$ is chosen in $G_1$ and $T$ in $G_2$, so neither ranks the other.

$P^*=\{(F,N),(T,N)\}$; the optima are $F$ and $T$.

(b) In $G_4$, $N$ is chosen with both $F$ and $T$ available, which breaks $F\,P^*\,N$ and $T\,P^*\,N$. $F$ vs $T$ stays ambiguous. $P^*$ is empty and all three options are optima.

**Must hit, strict (c):**

- $x\,P^*\,y$ requires that $y$ go unchosen in *every* counted situation containing both, so each added situation adds a condition: it can break a pair, never create one. More counted frames, more silence.
- To drop $G_4$ the analyst needs evidence from outside choice that the $N$ choice was a mistake (she never opened the contribution page, misread what the default meant). Neither its disagreement with the other choices nor a view about which self is reflective will do; the latter is Thaler and Sunstein's premise, not Bernheim and Rangel's.

**Wrong turns:** using $G_3$ to rank $T$ against anything: $T$ is not on its menu. Reading (b) as making $N$ best: it becomes one optimum among three. Dropping $G_4$ because its choice is the odd one out: disagreement across frames is what $P^*$ records as ambiguity, not evidence of error.

**Model answer:** (a) $F\,P^*\,N$ and $T\,P^*\,N$; optima $F$ and $T$. (b) $P^*$ is empty; all three are optima. (c) A pair is ranked only if every counted situation agrees, so adding situations can only remove agreements, never supply them. Dropping $G_4$ needs non-choice evidence that she erred there, such as logs showing she submitted without looking at the rate.

</details>

## Connections

- **Backward:** [3.1](03-01-the-pareto-principle.md) stated the Pareto principle and its silence on distribution; this lesson shows it can mislead even where it speaks. The liberal paradox's meddlesome preferences are [1.1](01-01-welfarism-and-preference-satisfaction.md)'s laundering problem at the level of society. Example 2's question, whose beliefs to respect, parallels [2.3](02-03-nudges-and-behavioural-welfare-economics.md)'s question about whose tastes to respect. Each frontier is the set of Pareto-optimal utility pairs a state's goods allow, the optimality whose market version is the first welfare theorem of [`grad-micro` 4.4](../../grad-micro/lessons/04-04-two-welfare-theorems.md).
- **Forward:** [3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md) puts the Kaldor test into practice as summed willingness to pay, with distributional weights as one answer to the dollar-equals-dollar premise. [3.4](03-04-cbas-critics-and-defenders.md) asks whether a compensation test is a criterion of rightness or only a decision procedure.
- **Sideways:** [`social-choice`](../../social-choice/syllabus.md) 4.1-4.2 proves Sen's paradox and states the escapes. [`decision-theory`](../../decision-theory/syllabus.md) 5.1-5.2 owns Harsanyi's theorem, Diamond's objection and ex ante versus ex post Pareto. The compensating variation behind willingness to pay is in [`public-economics` 2.3](../../public-economics/lessons/02-03-excess-burden-and-the-harberger-triangle.md). [`ethics` 1.3](../../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md)'s separateness of persons is the deepest form of the objection that a gain to some does not cancel a loss to others.

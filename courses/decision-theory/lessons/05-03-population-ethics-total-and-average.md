# Decision Theory · Lesson 5.3: Population ethics I: total and average

> ⏱ ~15 min · Module 5: Aggregating people · Builds on: [5.1 Harsanyi's aggregation theorem](05-01-harsanyis-aggregation-theorem.md), [5.2 Interpersonal comparison and social welfare functions](05-02-interpersonal-comparison-and-social-welfare-functions.md) · Unlocks: [5.4 Population ethics II: escape routes](05-04-population-ethics-escape-routes.md)

## Why this matters

Every social welfare function in [5.1](05-01-harsanyis-aggregation-theorem.md) and [5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md) ranked outcomes for a fixed list of people. Real choices change the list: climate policy, family policy, a war, a debt that shapes who meets whom. Once the number of people varies, "maximize welfare" splits into rival rules that agreed while the number was fixed, and each of the two simplest yields a conclusion its own defenders call hard to accept. This lesson computes both and says which principle each one gives up.

## The idea

Draw a population as a box: width is the number of people, height is how well each life goes. The area is total welfare. Now compare a narrow tall box with a wide flat one.

The **total view** compares areas. Make the box wide enough and a flat box wins, however tall the narrow one. The **average view** compares heights. It never trades height for width, but it judges an added life by whether it beats the current average, not by whether it is worth living. Each verdict is a few lines of arithmetic. The philosophy is in deciding which arithmetic is the wrong one.

Fix a zero first. A life at welfare 0 is the **neutral level**: neither worth living nor worth avoiding, for the person who lives it. Positive welfare means a life worth living; negative means a life worse than none.

## The formal version

A **population** $X$ is a finite list of welfare levels $w_1, \dots, w_N$, one per person who ever lives in that outcome, on a scale [comparable across persons](../reference.md#interpersonal-comparability) in level and unit (the comparability bases of [5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md)). Write $N(X)$ for its size.

$$\begin{aligned}
T(X) &= \sum_{i=1}^{N(X)} w_i,\\
\bar w(X) &= \frac{T(X)}{N(X)}.
\end{aligned}$$

*In words:* $T$ is the box's area, $\bar w$ its height.

- **[Total view](../reference.md#total-view):** $X$ is at least as good as $Y$ iff $T(X) \ge T(Y)$. *In words:* more total welfare is better, whoever has it. Henry Sidgwick took this side in *The Methods of Ethics*.
- **[Average view](../reference.md#average-view):** $X$ is at least as good as $Y$ iff $\bar w(X) \ge \bar w(Y)$. *In words:* a better life for the typical person is better, however many people there are.

**Fact 1 (same number, same verdict).** If $N(X) = N(Y)$, the two views rank $X$ and $Y$ identically, since $\bar w = T/N$ with the same positive $N$. *In words:* the views disagree only in **variable-population** comparisons, which is why Harsanyi's fixed-population theorem in [5.1](05-01-harsanyis-aggregation-theorem.md) never had to choose.

**Fact 2 (the repugnant conclusion).** Let $X$ have $n$ people at welfare $w > 0$, and let $0 < \varepsilon < w$. A population $Z$ of $m$ people at $\varepsilon$ has $T(Z) > T(X)$ iff $m > nw/\varepsilon$. *In words:* for any population of excellent lives, the total view ranks above it some larger population of lives barely worth living. Derek Parfit named this the [repugnant conclusion](../reference.md#repugnant-conclusion) (*Reasons and Persons*, 1984, Part IV).

**Fact 3 (the marginal rule for averages).** Add $k$ people at welfare $v$ to $X$, giving $X'$. Then

$$\bar w(X') - \bar w(X) = \frac{k\,\bigl(v - \bar w(X)\bigr)}{N(X) + k}.$$

*In words:* the average rises iff the newcomers are above the existing average. Whether their lives are worth living ($v > 0$) does not enter.

Fact 3 gives the average view's two bad cases. If $0 < v < \bar w(X)$, adding a good life makes things worse. If $\bar w(X) < v < 0$, adding a life worse than nothing makes things better. Parfit pressed the second as the **hell** case. And because $\bar w(X)$ counts everyone who ever lives, whether a birth today is good depends on how well the ancient Egyptians lived, a dependence the literature calls the Egyptology objection.

**Why not just refuse the question?** One might hold a **person-affecting** principle: an outcome is worse only if it is worse *for* someone. Then a merely possible person can never be wronged by not existing, and most of population ethics dissolves. The [non-identity problem](../reference.md#non-identity-problem) blocks that exit. Large policies, and many single procreative choices, change *who* is born, so a person born under the worse option is not worse off than she would have been: under the other option she would not exist. [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) runs this on a century-old war debt, and [`philosophy-of-economics` 4.3](../../philosophy-of-economics/lessons/04-03-uncertainty-the-long-run-and-future-people.md) on depletion and discounting. Neither lesson is repeated here. Parfit's response was an impersonal comparison of outcomes. His same-number version settles the cases in those lessons, but by Fact 1 it cannot choose between total and average. For that one must compare populations of different sizes.

The **[procreative asymmetry](../reference.md#procreative-asymmetry)**, discussed by Jan Narveson and later Jeff McMahan, is the intuition many bring to that comparison: there is a strong reason not to create a person whose life would be miserable, and no comparable reason to create a person because her life would be good. Neither view delivers it. The total view counts both halves symmetrically: adding $v$ adds $v$. The average view looks at the sign of $v - \bar w(X)$, not of $v$.

**The argument for a variable-population axiology,** reconstructed:

1. Some choices that change who exists are worse than their alternatives (conceiving a child knowing she will fare worse than a child you could conceive later).
2. In such choices no one is worse off than she would otherwise have been (non-identity).
3. So some outcomes are worse impersonally, not by being worse for anyone.
4. Some such choices also change how many people exist.

∴ **C.** Ethics needs a ranking of populations of different sizes, and total and average are its two simplest candidates.

**Where the argument is weakest.** Premise 3 and the step to C. Premise 3 follows only if "worse" must mean "worse for someone in comparison with how she would otherwise be". Wide person-affecting views ([5.4](05-04-population-ethics-escape-routes.md)) compare the people who exist under each option without matching them by identity. Non-comparative accounts of harm, and contractualist views, locate the wrong without any impersonal ranking. Each of these escapes premise 3 at a cost that 5.4 prices. And C's "simplest candidates" is not "only candidates": critical-level and variable-value views, also in 5.4, were built to avoid both views' results.

## Picture

![Two panels of boxes whose width is the number of people and height the welfare per person. Top panel: A is 500 people at 80 with total 40,000; B is 1,500 at 40 with total 60,000; Z is 8,000 at 10 with total 80,000. Total view ranks Z over B over A; average view ranks A over B over Z. Bottom panel, below the zero line: H is 1,000 people at minus 50; adding 1,000 people at minus 10 raises the average to minus 30 while the total falls to minus 60,000.](assets/05-03-fig1.svg)

Area is total, height is average. The top row is Fact 2 in miniature; the bottom row is Fact 3's hell case.

## Worked examples

**Example 1 (clean): three populations.** $A$: 500 people at 80. $B$: 1,500 at 40. $Z$: 8,000 at 10.

$$\begin{aligned}
T(A) &= 500 \times 80 = 40{,}000, & \bar w(A) &= 80,\\
T(B) &= 1{,}500 \times 40 = 60{,}000, & \bar w(B) &= 40,\\
T(Z) &= 8{,}000 \times 10 = 80{,}000, & \bar w(Z) &= 10.
\end{aligned}$$

Total: $Z > B > A$. Average: $A > B > Z$. Every step toward $Z$ doubles or more the population and halves or worse the welfare, and the total view endorses each one. Push Fact 2 to its limit: with $\varepsilon = 1$, any $m > 500 \times 80 / 1 = 40{,}000$ people at welfare 1 beat $A$ on total. Same-number check: $A$ against 250 people at 100 plus 250 at 50 gives totals 40,000 vs 37,500 and averages 80 vs 75, the same verdict.

**Example 2 (hard): where the average view strains.** $H$ is 1,000 people at $-50$, lives worse than none. Option: add 1,000 more at $-10$, also worse than none.

$$\begin{aligned}
\bar w(H') &= \frac{1{,}000(-50) + 1{,}000(-10)}{2{,}000} = -30,\\
T(H') &= -50{,}000 - 10{,}000 = -60{,}000.
\end{aligned}$$

By Fact 3 the average rises by $1{,}000(-10 - (-50))/2{,}000 = 20$. The average view calls it an improvement to create a thousand people whose lives are not worth living; the total view calls it worse by 10,000. The mirror case: add 100 people at 60 to $A$. Each life is good, but the average falls from 80 to $46{,}000/600 = 76\tfrac{2}{3}$, so the average view calls it worse.

Each view keeps one principle and drops another. The total view keeps **negative addition** (adding only lives worse than none, others unchanged, makes things worse) and **separability** (the value of an addition does not depend on the welfare of people it does not affect). It gives up avoiding the repugnant conclusion. The average view avoids the repugnant conclusion and gives up both principles. A defender of either can bite the bullet. A total utilitarian can say our intuitions about huge numbers and lives "barely worth living" are unreliable. An averagist can say hell cases are remote. Whether the bullet generalizes depends on the defence. The debunking reply is general, but the averagist cannot borrow it, since hell involves no huge numbers. The remoteness reply would excuse any theory's bad cases.

## Watch out

- **You might think the repugnant conclusion is about miserable lives.** The lives in $Z$ are worth living, at a positive level. The worry is that quantity outweighs quality without limit, not that misery is endorsed.
- **You might think the average view is the safe fallback.** It avoids one result by making the value of a life depend on everyone else's, which is what generates hell and Egyptology.
- **You might think non-identity favours the total view.** It shows only that some comparisons must be impersonal. Same-number cases cannot separate total from average (Fact 1).

## One-liner

> Fix the number of people and total and average agree; let it vary and the total view trades height for width without limit while the average view judges each new life against everyone else's, so each must give up a principle the other keeps.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** $C$: 300 people at 60. $D$: 900 at 25. $E$: $C$ plus 200 more people at 15.

(a) Rank $C$, $D$, $E$ by the total view and by the average view.
(b) What is the smallest number of people at welfare 3 whose population beats $D$ on the total view?

**P2 (🟡) *(Formal (a)–(b).)*** (a) Construct two populations $X$ and $Y$ such that the total view ranks $X$ strictly above $Y$ and the average view ranks $Y$ strictly above $X$.
(b) Prove that if every life in both populations is worth living, any such $X$ has more people than $Y$. Then show by example that this can fail if lives may be worse than none.

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)*** Invented case. A couple can conceive a child now, during a temporary condition that would leave that child's life at welfare 40, or in three months, when a different child would be conceived, with welfare 70. Either way exactly one child is born, and nothing else differs.

(a) Can a narrow person-affecting principle ("worse only if worse for someone") say conceiving now is worse? What do the total and average views say? Two sentences each.
(b) A critic: "So person-affecting principles fail, and the total view follows." Name the gap in this inference, and say what accepting the total view on these grounds would commit the critic to. 120 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) $T(C) = 300 \times 60 = 18{,}000$ and $\bar w(C) = 60$. $T(D) = 900 \times 25 = 22{,}500$ and $\bar w(D) = 25$. $T(E) = 18{,}000 + 200 \times 15 = 21{,}000$ over 500 people, so $\bar w(E) = 21{,}000/500 = 42$.

(b) Need $3m > 22{,}500$, so $m > 7{,}500$: at least 7,501 people.

**Must hit, strict (a)–(b):**

- Total: $D > E > C$ (22,500, 21,000, 18,000).
- Average: $C > E > D$ (60, 42, 25). Adding 200 good lives to $C$ improves it on total and worsens it on average, Fact 3 with $15 < 60$.
- 7,501, not 7,500: at 7,500 the totals tie.

**Wrong turns:** averaging the group averages, $(60 + 15)/2 = 37.5$, instead of weighting by numbers. Answering 7,500.

---

**P2** *(Formal (a)–(b).)*

**Accept (a):** any pair with $T(X) > T(Y)$ and $\bar w(X) < \bar w(Y)$.

**Model answer (a):** $X$: 400 people at 30, so $T = 12{,}000$, $\bar w = 30$. $Y$: 100 at 90, so $T = 9{,}000$, $\bar w = 90$.

(b) Write $T = N\bar w$. Suppose $N(X)\bar w(X) > N(Y)\bar w(Y)$ and $\bar w(X) < \bar w(Y)$. If all lives are worth living, both averages are positive, so

$$N(X) > N(Y)\,\frac{\bar w(Y)}{\bar w(X)} > N(Y),$$

since $\bar w(Y)/\bar w(X) > 1$. With lives worse than none: $X$ is 1 person at $-10$ ($T = -10$, $\bar w = -10$) and $Y$ is 5 people at $-5$ ($T = -25$, $\bar w = -5$). Total prefers $X$, average prefers $Y$, and $X$ has fewer people.

**Must hit, strict (b):**

- The division step uses $\bar w(X) > 0$; that is where "worth living" enters.
- Same-size pairs are impossible by Fact 1, so in the positive case $X$ must be strictly larger.
- The counterexample has negative averages: a total view prefers fewer bad lives, an averagist prefers more but less bad ones, the hell structure.

**Wrong turns:** citing Fact 1 alone as the proof; it rules out equal sizes but not $N(X) < N(Y)$. Dividing by $\bar w(X)$ without noting its sign.

---

**P3** *(Exegetical (a) · Evaluative (b).)*

**Must hit, strict (a):**

- No. The child conceived now would not exist under the other option, so she is not worse off than she would otherwise have been, and the later child is never made worse off either. A narrow person-affecting principle finds no victim (non-identity).
- Total and average agree, since one child is born either way (Fact 1): both rank waiting higher, 70 against 40 in the child's contribution.

**Must hit, any verdict (b):**

- The gap: (a) shows only that *some* impersonal comparison is needed, and only for same-number cases. A same-number principle, the average view, or a wide person-affecting view all condemn conceiving now. Nothing in the case selects the total view.
- The commitment: the total view extends to variable numbers, so it brings the repugnant conclusion (Fact 2) and the claim that creating a happy person is good in itself, against the procreative asymmetry.
- Either verdict passes: the critic may accept those commitments, or the reader may deny the inference, if the reason is stated.

**Wrong turns:** saying the narrow principle condemns conceiving now because "the child could have had 70": the child who would have had 70 is a different child. Saying average and total disagree here.

**Model answer (b), one of several:** The case refutes the narrow person-affecting principle only if conceiving now is worse, and even then it shows only that some outcomes are impersonally worse when the numbers are equal. With equal numbers total and average agree, and a wide person-affecting view also prefers waiting, so the case cannot select the total view. A critic who adopts it anyway buys its variable-number verdicts: some vast population of barely worthwhile lives beats any small flourishing one, and there is a reason to create happy people just because they would be happy. She may accept both, but they come from the extension, not from the case.

</details>

## Flashback

**From Lesson [5.1](05-01-harsanyis-aggregation-theorem.md) (Harsanyi's aggregation theorem):** *(Formal (a)–(b) · Exegetical (c).)* Cy and Dee face four outcomes, with vNM utilities

| | $a$ | $b$ | $c$ | $d$ |
|---|---|---|---|---|
| Cy, $u_1$ | 1 | 0 | 0.8 | 0.6 |
| Dee, $u_2$ | 0 | 1 | 0.4 | 0.55 |

Let $L$ be the lottery giving $b$ with probability $\tfrac14$ and $c$ with probability $\tfrac34$.

(a) Show that both people are indifferent between $L$ and $d$, and write the equation Pareto indifference then imposes on a vNM social utility $W$.
(b) Society is also indifferent between $a$ and $d$. Find $a_1 : a_2$ in $W = a_1u_1 + a_2u_2$ (in smallest integers) and society's ranking of the four outcomes.
(c) A planner scores each outcome by the worse-off person's utility, $\min(u_1, u_2)$, and ranks lotteries by the expected score. Show that this violates the equation from (a), and name the premise of the theorem the planner keeps and the one she drops. Two sentences.

<details>
<summary>Solution</summary>

(a) Cy: $\tfrac14(0) + \tfrac34(0.8) = 0.6 = u_1(d)$. Dee: $\tfrac14(1) + \tfrac34(0.4) = 0.55 = u_2(d)$. So Pareto indifference requires

$$W(d) = \tfrac14\,W(b) + \tfrac34\,W(c).$$

(b) $a \sim d$ gives $a_1 = 0.6a_1 + 0.55a_2$, so $0.4a_1 = 0.55a_2$ and $a_1 : a_2 = 11 : 8$. With $W = 11u_1 + 8u_2$:

$$\begin{aligned}
W(a) &= 11, & W(b) &= 8,\\
W(c) &= 8.8 + 3.2 = 12, & W(d) &= 6.6 + 4.4 = 11.
\end{aligned}$$

Ranking: $c$, then $a \sim d$, then $b$. Check (a): $\tfrac14(8) + \tfrac34(12) = 11 = W(d)$.

**Must hit, strict (c):** scores $a = 0$, $b = 0$, $c = 0.4$, $d = 0.55$, so $W(L) = \tfrac14(0) + \tfrac34(0.4) = 0.3 < 0.55 = W(d)$: society strictly prefers $d$ to $L$ although Cy and Dee are each indifferent. Ranking lotteries by expected score keeps premise 2 (society is vNM-rational) and drops premise 3 (Pareto indifference), which is why no choice of weights can reproduce it.

**Wrong turns:** taking the mixture of $b$ and $c$ with probabilities reversed ($\tfrac34$ on $b$), which matches neither person's utility for $d$. Reading 11 : 8 as "Cy counts for more", when it is a fact about these two scales. Saying the planner drops premise 2: she computes expected values, so her social ranking is linear in probabilities.

</details>

## Connections

- **Backward:** [5.1](05-01-harsanyis-aggregation-theorem.md) derived a weighted sum for a fixed population; this lesson asks what the sum becomes when the population varies. [3.4](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)'s equiprobability chooser maximizes the *average*, which is why the veil is sometimes read as an argument for the average view once numbers vary. [`ethics` 1.1](../../ethics/lessons/01-01-classical-utilitarianism.md) gives the classical sum that the total view extends.
- **Forward:** [5.4](05-04-population-ethics-escape-routes.md) builds Parfit's mere addition paradox from these two views and tests critical-level, person-affecting and intransitive escapes. [6.3](06-03-moral-uncertainty.md) asks what to do when unsure which population axiology is true.
- **Sideways:** [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) and [`philosophy-of-economics` 4.3](../../philosophy-of-economics/lessons/04-03-uncertainty-the-long-run-and-future-people.md) apply the non-identity problem to public debt and to discounting and point here for the axiology. The utilitarian welfare function $W = \sum_i u_i$ of [`grad-micro` 6.5](../../grad-micro/lessons/06-05-social-choice-welfare.md) is the total view with $N$ held fixed.

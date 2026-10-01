# Decision Theory · Lesson 3.4: Choosing behind the veil: Rawls vs Harsanyi

> ⏱ ~15 min · Module 3: Ambiguity and ignorance · Builds on: [3.3 Decisions under ignorance](03-03-decisions-under-ignorance.md), [3.2 Models of ambiguity](03-02-models-of-ambiguity.md), [`philosophical-method` 3.3](../../philosophical-method/lessons/03-03-thought-experiments.md) · Unlocks: [5.1 Harsanyi's aggregation theorem](05-01-harsanyis-aggregation-theorem.md), [5.2 Interpersonal comparison](05-02-interpersonal-comparison-and-social-welfare-functions.md)

## Why this matters

Two of the twentieth century's most cited arguments in political philosophy use the same thought experiment and reach opposite conclusions. Choose the rules of your society without knowing who you will be in it. John Harsanyi says a rational chooser picks the arrangement with the highest **average** utility. John Rawls says she protects the **worst** position. Neither disputes the setup. They dispute which decision rule applies to it, and that is a question in this course's territory. Module 3 has built every tool needed: [maximin](../reference.md#maximin) and the Laplace rule from [3.3](03-03-decisions-under-ignorance.md), sets of priors from [3.2](03-02-models-of-ambiguity.md). This lesson runs them on the veil and finds the premise the two sides split on.

## The idea

Behind the veil you know the menu of social arrangements and what each position in each arrangement gets. You do not know which position is yours. As [`philosophical-method` 3.3](../../philosophical-method/lessons/03-03-thought-experiments.md) puts it, the veil is a thought experiment whose stipulations do the arguing. So the question is what exactly is stipulated.

**Harsanyi (1953; developed against Rawls in 1975):** you have an *equal chance* of being any person. Then choosing a society is choosing a lottery, the lottery's [expected utility](../reference.md#expected-utility) is the society's average utility, and a rational chooser maximizes it. Impartiality becomes risk.

**Rawls (*A Theory of Justice*, 1971, §26):** the veil is thicker than that. You have no basis for any probabilities, the stakes are your whole life prospects, and some arrangements put people below a level no one could accept. Under those conditions you rank arrangements by how their worst position fares. Impartiality becomes ignorance.

Same table, same chooser, two decision rules. The disagreement is whether the veil is [risk or uncertainty](../reference.md#risk-and-uncertainty), the distinction [3.1](03-01-the-ellsberg-paradox.md) took from Knight.

## The formal version

**Setup.** Arrangements $a$; positions $i=1,\dots,n$, with population shares $s_i$ ($\sum_i s_i=1$); $x_i(a)$ is what a person in position $i$ gets under $a$ (income, or an index of goods); $u$ is a utility function over $x$.

**Harsanyi's rule** (the [equiprobability model](../reference.md#equiprobability-model)). Being equally likely to be any *person* puts probability $s_i$ on position $i$:

$$V_H(a)=\sum_{i=1}^n s_i\,u\big(x_i(a)\big).$$

*In words: a society is worth its population-weighted average utility; with equal shares, the plain average.*

**Rawls's rule.** $$V_R(a)=\min_i\,x_i(a).$$

*In words: a society is worth what its worst-off position gets.* Rawls breaks ties by the next-worst position (leximin), and applies the rule to primary goods (rights, opportunities, income, wealth), not to utility.

**The bridge.** Let the chooser be risk averse over income, with constant relative risk aversion $\eta\ge 0$: $u(x)=x^{1-\eta}/(1-\eta)$, and $u(x)=\ln x$ at $\eta=1$. With equal shares, her certainty equivalent for arrangement $a$ is the **power mean** of its incomes of order $r=1-\eta$, namely $M_r(a)=\big(\tfrac1n\sum_i x_i(a)^r\big)^{1/r}$ (and the geometric mean at $r=0$):

$$\begin{aligned}
\eta=0&:\ \text{arithmetic mean},\\
\eta=1&:\ \text{geometric mean},\\
\eta=2&:\ \text{harmonic mean},\\
\eta\to\infty&:\ \min_i x_i(a).
\end{aligned}$$

*In words: maximin is the limit of Harsanyi's rule as risk aversion over income grows without bound, though no finite $\eta$ reaches it.* The [3.2](03-02-models-of-ambiguity.md) lens gives a second bridge: [maxmin expected utility](../reference.md#maxmin-expected-utility) over the single prior "equal chances" is Harsanyi; over *every* prior on positions it is Rawls.

**[Rawls's three conditions](../reference.md#rawls-conditions-for-maximin)** (§26, paraphrased). Maximin is rational when (1) there is no basis, or a very insecure one, for probabilities; (2) the chooser cares little for gains above the minimum she can guarantee; (3) the rejected options risk outcomes she could not accept. Rawls says outright that maximin is *not* in general a suitable rule under uncertainty. His claim is that the veil, specifically, meets all three.

**The exchange in brief.** Harsanyi's objection is that maximin, taken seriously, forbids ordinary life: any act with a tiny chance of disaster (taking a better job across the country, crossing a street) loses to staying put, however large the gain. Rawls's reply is that the veil is not ordinary life. The choice is made once, for a whole life, with no second try, and staking one's basic liberties and livelihood on an invented probability would be reckless.

**Harsanyi's argument**, reconstructed:

1. Behind the veil the chooser does not know which person she will be.
2. With no reason to favour any person, she should give each the same probability.
3. A rational chooser facing known probabilities maximizes [expected utility](../reference.md#expected-utility) (the vNM axioms).
4. Her vNM utilities for being person $i$ in arrangement $a$ are comparable across persons.

∴ She chooses the arrangement with the highest average utility.

**Which axiom each side gives up.** Rawls rejects premise 2 (condition 1) and, by working in primary goods, premise 4. Read as a ranking of lotteries, maximin breaks vNM **continuity**: with outcomes 72 ≻ 16 ≻ 3, a lottery giving 72 with chance $p$ and 3 otherwise has worst outcome 3 for every $p<1$, so it sits below a sure 16, and at $p=1$ it is above. No $p$ makes the two indifferent. Harsanyi's chooser applies the Laplace rule to persons, which breaks Milnor's **column duplication** ([3.3](03-03-decisions-under-ignorance.md)). Under the veil, though, a duplicated column is another person, and Harsanyi counts that as the point.

**Where the argument is weakest.** For Harsanyi it is premise 2, which can be read two ways. Read epistemically, it is the principle of insufficient reason, which [3.3](03-03-decisions-under-ignorance.md) showed is contested. Read morally, "equal chances" just *means* each person counts equally. That reading is strong, but then the chooser's risk attitude is doing moral work, and a reason is owed for being risk neutral in utility rather than averse. For Rawls it is the conditions themselves. The thick veil is Rawls's design, so "the veil meets condition 1" holds by stipulation. Condition 2 is a strongly concave attitude to income, which Harsanyi can either absorb into $u$ (the bridge above) or call unmotivated. The crux is how the thought experiment should be built, and decision theory alone cannot settle that.

## Picture

![Bar chart of three social arrangements, each split into a worst, middle and best third. Flat F gives 16, 16, 16 with average 16 and minimum 16. Ladder L gives 12, 18, 27 with average 19 and minimum 12. Boom B gives 3, 24, 72 with average 33 and minimum 3. Each minimum bar is outlined in red and each average is a dashed blue line](assets/03-04-fig1.svg)

Harsanyi reads the blue lines; Rawls reads the red bars. The two rules agree only when the society with the best floor also has the best average.

## Worked examples

**Example 1 (clean): both verdicts and the cost of maximin.** Society is three equal thirds; incomes in thousands of dollars a year are as in the figure. Take $u(x)=x$.

| | worst | middle | best | average | minimum |
|---|---|---|---|---|---|
| F | 16 | 16 | 16 | 16 | 16 |
| L | 12 | 18 | 27 | 19 | 12 |
| B | 3 | 24 | 72 | 33 | 3 |

Harsanyi picks B (33). Rawls picks F (16). The [cost of maximin](../reference.md#maximin) in Harsanyi's currency is $33-16=17$ thousand per head, about half of B's average. Rawls's defender reads it the other way round: B buys that average by putting a third of society at 3.

**Example 2 (hard): how much risk aversion turns Harsanyi into Rawls?** Raise $\eta$ and rank by power means.

- $\eta=0$: averages 16, 19, 33. **B.**
- $\eta=1$: compare products (geometric mean = cube root of the product): F $4096=16^3$, L $5832=18^3$, B $5184$, so geometric means 16, 18, 17.31. **L.**
- $\eta=2$: harmonic means $3/\sum_i(1/x_i)$. F 16; L $\tfrac{3}{1/12+1/18+1/27}=\tfrac{324}{19}\approx17.05$; B $\tfrac{3}{1/3+1/24+1/72}=\tfrac{54}{7}\approx7.71$. **L.**

Solving numerically, with a grid as a check, the choice switches from B to L at $\eta\approx0.95$ and from L to F at $\eta\approx3.30$. Beyond that the chooser agrees with Rawls on this table.

Here the tool strains. The concave transform is legitimate only if the entries are *income*. If they are already vNM utilities, as Harsanyi's premise 4 has them, then curving them again is no longer expected utility in those utilities, and Harsanyi says it double counts. So the entries decide the issue. Over income, the two theorists differ in degree ($\eta$ around 3.3 here). Over well-being, they differ in kind.

## Watch out

- **You might think** equiprobability puts equal weight on each *position*. It puts equal weight on each *person*. If a tenth of society is poor, Harsanyi gives that position probability 0.1, not $1/n$.
- **You might think** Rawls defends maximin as the rational rule under uncertainty in general. He denies it. The claim is local: the veil's three features license it there.
- **You might think** Harsanyi needs a mysterious interpersonal utility scale. He needs one, but it is not mysterious to him. Comparability comes from the chooser's own preferences over being one person or another. Whether such preferences carry moral weight is [5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md)'s question.

## One-liner

> Behind the veil Harsanyi sees a fair lottery and maximizes the average; Rawls sees no lottery at all and protects the floor; the dispute is whether the veil is risk or ignorance, and over income it is also about how risk averse to be.

## Problems

**P1 (🟢)** *(Formal (a)–(b) · Exegetical (c).)* An invented society has two classes: laborers, 75% of the population, and proprietors, 25%. Incomes (thousands of dollars a year), listed as (laborers, proprietors): X = (10, 90), Y = (18, 30), Z = (16, 60). Take $u(x)=x$.

(a) Find Harsanyi's choice, Rawls's choice, and the cost of maximin in average income per head.
(b) Let the laborers' share be $s$. For which $s$ does Harsanyi's chooser pick each arrangement? For which $s$ does she agree with Rawls?
(c) Rawls's veil hides even $s$. Which of his three conditions does that secure, and what does Harsanyi put in place of knowing $s$? Two sentences.

**P2 (🟡)** *(Exegetical (a) · Evaluative (b).)* An invented valley must choose, before a lottery assigns plots, how scarce irrigation water is shared among family farms. The hydrology is new and no one can say how likely dry or wet years are, or which plots will be favoured. Under rule R every plot gets enough to keep the family on its land. Under rule S the best plots prosper and the worst lose their farms. All the families are commercial growers whose plans (new equipment, children's schooling, expansion) depend on earning well above subsistence.

(a) Which of Rawls's three conditions does the case meet, and which does it fail? Cite the detail that decides each.
(b) Does maximin still have a claim here? State the strongest case for and against in 120 words or fewer. Any verdict passes.

**P3 (🔴, optional)** *(Formal (a) · Evaluative (b).)* A critic says: "Maximin is just expected utility with risk aversion turned up too high. It is always the more cautious choice, and it always costs average welfare." Society is three equal thirds, with incomes A = (11, 11, 100) and C = (10, 50, 50).

(a) Find the choice under maximin, under Harsanyi with $u(x)=x$, and under Harsanyi with $u(x)=\ln x$.
(b) Which parts of the critic's claim does (a) refute? Then say what the case shows about "turning up risk aversion" as the bridge from Harsanyi to Rawls. 100 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c))*

(a) Averages: X $=0.75(10)+0.25(90)=30$; Y $=0.75(18)+0.25(30)=21$; Z $=0.75(16)+0.25(60)=27$. Harsanyi picks **X**. Minima 10, 18, 16: Rawls picks **Y**. Cost of maximin: $30-21=9$ thousand per head.

(b) Averages as functions of $s$:

$$\begin{aligned}
V(X)&=90-80s,\\
V(Y)&=30-12s,\\
V(Z)&=60-44s.
\end{aligned}$$

Z beats X iff $36s>30$, i.e. $s>5/6$. Y beats Z iff $32s>30$, i.e. $s>15/16$. Y beats X iff $s>15/17$, which is implied. So X for $s<5/6$, Z for $5/6<s<15/16$, Y for $s>15/16$. Harsanyi agrees with Rawls only when more than 93.75% are laborers. (Ties at the boundaries.)

(c) Condition 1, no basis for probabilities. Harsanyi replaces knowledge of $s$ with equal chances of being each *person*, which works out to probabilities equal to the population shares, or to equal weights where the shares too are unknown.

**Must hit, strict (a)–(b):** population-weighted averages, not $\tfrac12$ per class; X and Y; cost 9; the three regimes with thresholds $5/6$ and $15/16$.

**Must hit, strict (c):** condition 1 named; equiprobability over persons, not classes.

**Wrong turns:** giving each class probability $\tfrac12$ (averages 50, 24, 38, which also yields X but by the wrong rule); reporting $15/17$ as the agreement threshold, which ignores Z.

---

**P2** *(Exegetical (a) · Evaluative (b))*

(a) Condition 1 is **met**: no basis for probabilities ("no one can say how likely"). Condition 3 is **met**: under S the worst plots lose their farms, an outcome the families could not accept. Condition 2 **fails**: the growers care a great deal about gains above the guaranteed minimum.

**Must hit, strict (a):** all three conditions classified, each tied to a detail of the case.

**Must hit, any verdict (b):**

- State whether Rawls needs all three conditions jointly, or whether 1 and 3 suffice.
- Run the rival rule: without probabilities, what does Harsanyi's chooser assign, and on what ground (insufficient reason, or impartiality)?
- Name what is given up: maximin gives up continuity (no chance of avoiding ruin can be traded for gains), while equal-chance averaging gives up protection of the floor.

**Wrong turns:** treating condition 2 as met because R is "safe" (the condition concerns the chooser's attitude, not the rule's output); writing a verdict without saying what the failed condition does to the argument.

**Model answer (b), one of several:** For maximin: ruin is irreversible, and with no probabilities, any figure for the chance of avoiding it is invented. A rule that guarantees no family loses its land is defensible even for people who want more, because what they want more *for* depends on keeping the farm. Against: Rawls built the case for maximin on three conditions together, and here the chooser plainly cares about the surplus that S makes possible. If conditions 1 and 3 alone suffice, then maximin follows whenever ruin is possible and probabilities are unknown. That is a broad, very cautious rule that Rawls himself declined to defend in general.

---

**P3** *(Formal (a) · Evaluative (b))*

(a) Maximin: minima 11 and 10, so **A**. Linear: averages $122/3\approx40.67$ and $110/3\approx36.67$, so **A**. Log: compare products, $11\cdot11\cdot100=12{,}100$ against $10\cdot50\cdot50=25{,}000$, so **C** (geometric means about 22.96 and 29.24). A grid over $\eta$ gives A for $\eta<0.29$, C for $0.29<\eta<8.27$, and A again above $8.27$.

**Must hit, strict (a):** A, A, C, each with its arithmetic.

**Must hit, any verdict (b):**

- "Always costs average welfare" is refuted: maximin's pick A has the higher average.
- "Always the more cautious choice" is refuted: the log chooser takes C, which has the much smaller spread; maximin takes the arrangement with two thirds at 11.
- What it shows: the path from Harsanyi to Rawls is not monotone (A, then C, then A), so maximin is not risk aversion "turned up" in the usual sense. It is insensitivity to everything above the floor.

**Wrong turns:** reading "cautious" as "higher minimum" only, which makes the claim true by definition; computing the log comparison with sums of incomes instead of products.

**Model answer (b), one of several:** Both claims fail. Maximin picks A, which has the higher average, so here it costs nothing. And a log-utility Harsanyi chooser prefers C, whose spread is far smaller, while maximin accepts two thirds of society at 11 to gain one unit on the floor. Risk aversion means disliking spread across the whole distribution. Maximin looks only at the bottom entry. Raising $\eta$ ends at maximin, but along the way the chooser cares about the middle position, which maximin ignores. The bridge exists only as a limit.

</details>

## Flashback

**From Lesson [3.2](03-02-models-of-ambiguity.md) (Models of ambiguity):** *(Formal (a)–(b) · Exegetical (c).)* A farmer plants one field before the season. States: wet ($W$) or dry ($D$). Her evidence puts the probability of wet anywhere in $[1/3,\ 1/2]$, and her set of priors $C$ is that whole interval. In utils, crop $f$ pays $(12, 0)$ across $(W, D)$, crop $g$ pays $(0, 8)$, and planting half of each, $h$, pays the state-by-state average $(6, 4)$.

(a) Compute the maxmin expected utility of $f$, $g$ and $h$.
(b) Under alpha-maxmin over the same $C$, find every $\alpha$ for which $h$ is strictly better than both $f$ and $g$.
(c) Show that an expected-utility agent with any single prior never ranks $h$ strictly above both $f$ and $g$. Then, in two sentences: name the Gilboa–Schmeidler axiom that the maxmin agent's ranking in (a) displays, and say why certainty independence permits that ranking while full independence forbids it.

<details>
<summary>Solution</summary>

Write $q$ for the probability of wet. Each expected utility is linear in $q$, so its minimum and maximum over $C$ sit at the endpoints $q = 1/3$ and $q = 1/2$.

(a)

$$\begin{aligned}
E_q[f] &= 12q, & \min_C &= 4,\\
E_q[g] &= 8(1-q), & \min_C &= 4,\\
E_q[h] &= 4 + 2q, & \min_C &= \tfrac{14}{3}.
\end{aligned}$$

$f \sim g$ at 4, and $h$, worth $14/3$, beats both.

(b) The maxima are $6$ for $f$ (at $q = 1/2$), $16/3$ for $g$ (at $q = 1/3$) and $5$ for $h$ (at $q = 1/2$). So

$$\begin{aligned}
V_\alpha(f) &= 4\alpha + 6(1-\alpha) = 6 - 2\alpha,\\
V_\alpha(g) &= 4\alpha + \tfrac{16}{3}(1-\alpha) = \tfrac{16}{3} - \tfrac43\alpha,\\
V_\alpha(h) &= \tfrac{14}{3}\alpha + 5(1-\alpha) = 5 - \tfrac13\alpha.
\end{aligned}$$

$h$ beats $f$ iff $5 - \tfrac13\alpha > 6 - 2\alpha$, that is $\alpha > 3/5$; $h$ beats $g$ iff $\alpha > 1/3$. So $h$ beats both exactly when $3/5 < \alpha \le 1$.

(c) For a single prior $q$, $E_q[h] = \tfrac12 E_q[f] + \tfrac12 E_q[g]$, an average, which cannot exceed both terms.

**Must hit, strict (c):**

- The axiom is uncertainty aversion: $f \sim g$, yet their half-and-half mixture is strictly better. Mixing hedges, because $f$'s worst prior ($q = 1/3$) is $g$'s best.
- Certainty independence only protects mixtures with a *constant* act, and $g$ is not constant. Full independence would apply with $g$ as the common ingredient: from $f \sim g$ it gives $\tfrac12 f + \tfrac12 g \sim \tfrac12 g + \tfrac12 g = g$, contradicting $h \succ g$.

**Wrong turns:** scoring each crop by its worst *outcome* (0 for both $f$ and $g$), which is maximin, not maxmin EU. Taking the minimum of $h$ as the average of the minima of $f$ and $g$ (4): $f$ and $g$ bottom out at different priors, and that is the hedge. In (b), stopping at the $f$ comparison and forgetting $g$, or the reverse.

</details>

## Connections

- **Backward:** the rules are [3.3](03-03-decisions-under-ignorance.md)'s, where the cost of maximin and Laplace's column-duplication failure were first shown; maxmin over a set of priors is [3.2](03-02-models-of-ambiguity.md)'s; the risk/uncertainty line is [3.1](03-01-the-ellsberg-paradox.md)'s. CRRA and certainty equivalents are [`grad-micro` 2.5](../../grad-micro/lessons/02-05-choice-under-uncertainty.md)'s.
- **Forward:** [5.1](05-01-harsanyis-aggregation-theorem.md) gives Harsanyi's *other* argument for averaging (1955), which needs no veil at all. [5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md) asks what comparability each rule needs (maximin: levels; averaging: units) and treats prioritarianism as a stopping point between them.
- **Sideways:** Rawls's theory itself (original position, primary goods, the difference principle) is [`political-philosophy`](../../political-philosophy/syllabus.md) 2.2–2.3, which computes maximin against expected utility on small tables and cites this lesson for Harsanyi. The moral objection behind the thick veil, that summing across lives ignores the separateness of persons, is [`ethics` 1.3](../../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md). The same two rules set welfare weights in [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md).

# Decision Theory · Lesson 5.1: Harsanyi's aggregation theorem

> ⏱ ~15 min · Module 5: Aggregating people · Builds on: [1.3 The vNM theorem and how utility is built](01-03-the-vnm-theorem-and-how-utility-is-built.md), [3.4 Choosing behind the veil: Rawls vs Harsanyi](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) · Unlocks: [5.2 Interpersonal comparison and social welfare functions](05-02-interpersonal-comparison-and-social-welfare-functions.md), [5.3 Population ethics I: total and average](05-03-population-ethics-total-and-average.md)

## Why this matters

Utilitarians add up well-being across people, and critics from Rawls to Scanlon say adding is exactly the mistake ([`ethics` 1.3](../../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md), [`ethics` 5.2](../../ethics/lessons/05-02-contractualism-what-no-one-could-reasonably-reject.md)). In 1955 John Harsanyi offered something stranger than an argument for adding: a *theorem*. If each person and society itself choose among risky prospects by the [vNM axioms](../reference.md#vnm-axioms), and society respects unanimous indifference, then society's utility **must** be a weighted sum of individual utilities. That is the strongest formal case for aggregation anyone has made. This lesson states the theorem, proves it on a small case, and then asks the question its critics pressed: what exactly has been proved?

## The idea

Think of each person's vNM utility as a ruler that measures lotteries, and society's utility as one more ruler. All of these rulers are *linear in probabilities*: the value of a coin flip between two outcomes is the average of their values. That one property is the vNM theorem of [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md).

Now add a modest condition. If you could change the social lottery in a way that **no one** can detect, since every person's ruler reads the same before and after, then society's ruler should not move either. Harsanyi showed that linear rulers plus that condition leave society no freedom except to be a weighted sum of the individual rulers. The moral content looks as if it was never put in. It was, and the work is to find where.

## The formal version

**Setup.** A finite set $X$ of social outcomes; lotteries $L$ over $X$; persons $i = 1, \dots, n$. Write $u_i(L)$ for person $i$'s expected utility of $L$, and $W(L)$ for society's.

1. **Individual vNM.** Each person's preferences over lotteries satisfy the vNM axioms, so are represented by $u_i(L) = \sum_{x} L(x)\,u_i(x)$, where $L(x)$ is the probability $L$ gives outcome $x$.
2. **Social vNM.** Society's preferences over lotteries satisfy them too, so are represented by $W(L) = \sum_x L(x)\,W(x)$.
3. **[Pareto indifference](../reference.md#pareto-indifference).** If $u_i(L) = u_i(L')$ for every $i$, then $W(L) = W(L')$. *In words:* if everyone is indifferent, so is society.

**[Harsanyi's aggregation theorem](../reference.md#harsanyis-aggregation-theorem)** (*Journal of Political Economy*, 1955). Under 1–3 there are numbers $a_1, \dots, a_n$ and $c$ with
$$W(L) = \sum_{i=1}^{n} a_i\,u_i(L) + c \quad \text{for every lottery } L.$$
*In words:* society's utility is a weighted sum of individual utilities, plus a constant that does nothing. Strengthen 3 to strong Pareto (if no one is worse off and someone is better off, society prefers it), and assume the individual utilities are not linear combinations of one another, and the weights are all positive and unique up to a common positive factor.

**Why it is true.** Every function in sight is linear in the probabilities. Pareto indifference says that any change in the lottery that leaves every $u_i$ unchanged leaves $W$ unchanged. A standard linear-algebra fact finishes the job: if every direction that all of $u_1, \dots, u_n$ (and the constant function) ignore is also ignored by $W$, then $W$ is a linear combination of them. Example 1 does this by hand.

**What it does not settle.**

- **The weights.** The theorem says *some* weights. Nothing in 1–3 makes them equal.
- **The scales.** By [affine uniqueness](../reference.md#affine-uniqueness), person $i$'s preferences are represented equally well by $k\,u_i + m$ for any $k > 0$. The same social preference then carries weight $a_i / k$ on the new scale. So "equal weights" has no content until someone fixes whose unit equals whose, which is [interpersonal comparability](../reference.md#interpersonal-comparability), the problem [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) left open and [5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md) takes up.

**From theorem to utilitarianism.** Harsanyi read the result as support for utilitarianism. Reconstructed:

1. Each person's preferences satisfy the vNM axioms.
2. A rational, impartial society's preferences over lotteries satisfy them too.
3. Pareto indifference.
4. So social utility is $\sum_i a_i u_i + c$ (the theorem).
5. Impartiality requires equal weights, on scales made comparable across persons.
6. Each $u_i$ measures person $i$'s well-being.

∴ **C.** Society should maximize the sum of individual expected well-being: utilitarianism.

**Where the argument is weakest.** Premises 5 and 6 do the moral work, and the theorem supplies neither. Amartya Sen (1977) pressed premise 6. A vNM utility function is built from choices among gambles ([1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md)), so it encodes a person's attitude to risk. Nothing makes it a measure of how much an outcome matters to her. A theorem about representing preferences is not a theorem about welfare, so the conclusion is "weighted sum of vNM utilities", and calling that utilitarianism is a further step. John Weymark (1991) reconstructed the dispute along these lines. Defenders reply that if well-being is what a fully informed, prudent person's preferences track, then vNM utility is the natural measure of it, and no rival scale has better credentials. Premise 2 is the egalitarian's target. A society that cares how utility is *spread* may refuse to rank lotteries by expected value, and so give up independence at the social level. Peter Diamond's case against exactly this ([5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md)) shows the cost of keeping it. Harsanyi's answer was that a society has no more exemption from rationality under risk than a person does. Either way, the verdict rests on which axiom is given up.

## Picture

![Two-person utility plane, Ana's utility across and Ben's up. Four outcomes: w at 1 and 0, x at 0 and 1, y at 0.6 and 0.6, z at 0.3 and 0.8. A red segment joins x and y, and its midpoint, the coin flip between them, sits exactly on z. Three parallel dashed social iso-lines for weights 8 to 7: W equals 7 through x, W equals 8 through w and z, W equals 9 through y.](assets/05-01-fig1.svg)

Each outcome is a point in utility space. A lottery between outcomes lands on the segment joining them, because every utility is linear in probabilities. The coin flip between $x$ and $y$ lands exactly on $z$, so no one can tell them apart, and Pareto indifference forces society to agree. Society's preferences then become parallel straight iso-lines, the picture of a weighted sum.

## Worked examples

**Example 1 (clean): the theorem by hand.** Ana and Ben face four outcomes. Utilities are normalized so each person's best is 1 and worst is 0:

| | $w$ | $x$ | $y$ | $z$ |
|---|---|---|---|---|
| Ana, $u_1$ | 1 | 0 | 0.6 | 0.3 |
| Ben, $u_2$ | 0 | 1 | 0.6 | 0.8 |

*Pareto indifference bites once.* Let $L$ be a fair coin flip between $x$ and $y$. Ana: $\tfrac12(0) + \tfrac12(0.6) = 0.3 = u_1(z)$. Ben: $\tfrac12(1) + \tfrac12(0.6) = 0.8 = u_2(z)$. Both are indifferent between $L$ and $z$, so society must be:
$$W(z) = \tfrac12 W(x) + \tfrac12 W(y).$$

*That constraint is the theorem.* Society's $W$ is four numbers, one per outcome, and the constraint leaves three degrees of freedom. The functions $u_1$, $u_2$ and the constant 1 each satisfy the constraint (check $u_1$: $0.3 = \tfrac12(0 + 0.6)$), and none is a combination of the others. So their combinations $a_1 u_1 + a_2 u_2 + c$ fill all three degrees of freedom, and every admissible $W$ is one of them.

*One social judgment fixes the weights.* Suppose society is indifferent between $w$ and $z$. Then
$$a_1(1) + a_2(0) = a_1(0.3) + a_2(0.8),$$
so $0.7\,a_1 = 0.8\,a_2$ and $a_1 : a_2 = 8 : 7$. With $W = 8u_1 + 7u_2$: $w = 8$, $x = 7$, $y = 4.8 + 4.2 = 9$, $z = 2.4 + 5.6 = 8$. Society ranks $y$ first, then $w \sim z$, then $x$.

**Example 2 (hard): what a weight is worth.** Ben's preferences are represented equally well by $v_2 = \tfrac12 u_2$. A planner told "use weights 8 : 7" applies them to $u_1$ and $v_2$:

- $w$: $8(1) + 7(0) = 8$
- $x$: $8(0) + 7(0.5) = 3.5$
- $y$: $8(0.6) + 7(0.3) = 4.8 + 2.1 = 6.9$
- $z$: $8(0.3) + 7(0.4) = 2.4 + 2.8 = 5.2$

Now $w$, Ana's favourite, wins, where before $y$ did. Nothing about anyone's preferences changed. The society of Example 1 is represented on the new scale by weights $8 : 14$, which reproduce $8, 7, 9, 8$ exactly. A weight is a rate of exchange between two units, and the units were chosen arbitrarily. [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) showed rescaling flipping a comparison between two siblings. The same freedom here moves a whole social ranking. This is where the theorem strains as an argument for utilitarianism. Its form is forced, but the weights only make sense once the scales are tied together by a premise from outside the theorem.

## Watch out

- **You might think the theorem proves utilitarianism.** It proves that society's utility is *some* weighted sum of vNM utilities. Equal weights need comparable scales, and calling the sum "welfare" needs Sen's disputed premise.
- **You might think Pareto indifference is too weak to matter.** In Example 1 it was one equation, and that equation forced the whole weighted-sum form. With three outcomes and two people whose utilities are independent, the form is automatic. The condition does its work as outcomes outnumber people.
- **You might think a non-aggregative view just picks small weights.** Scanlon's individualist restriction ([`ethics` 5.2](../../ethics/lessons/05-02-contractualism-what-no-one-could-reasonably-reject.md)) compares complaints pairwise and does not rank lotteries by any one utility function. That denies premise 2, not the theorem.

## One-liner

> vNM-rational people plus a vNM-rational society plus unanimity in indifference force a weighted sum; which weights, on whose scale, measuring what, the theorem leaves to you.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** Three people rate four outcomes:

| | $p$ | $q$ | $r$ | $s$ |
|---|---|---|---|---|
| $u_1$ | 1 | 0 | 0.5 | 0 |
| $u_2$ | 0 | 1 | 0 | 1 |
| $u_3$ | 0 | 1 | 1 | 0.5 |

Society satisfies premises 1–3, so $W = a_1u_1 + a_2u_2 + a_3u_3 + c$. Society is indifferent between $p$ and $q$, and between $r$ and $s$.

(a) Find $a_1 : a_2 : a_3$ and society's value for each outcome.
(b) A fifth outcome $t$ gives utilities $(0.7,\ 0.4,\ 0.3)$. Does society prefer $t$ to $p$? Which of the five outcomes would equal weights on these scales rank first?

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** Two people, three outcomes: $u_1 = (1,\ 0,\ 0.5)$ and $u_2 = (0.2,\ 1,\ 0.6)$ on outcomes $A, B, C$. A planner maximizes $u_1 + u_2$.

(a) Find the planner's choice. Person 2's preferences are equally well represented by $v_2 = 3u_2 - 1$. Find the choice under equal weights on $u_1$ and $v_2$. Say which part of the transformation changed the verdict, and give weights on $(u_1, v_2)$ that reproduce the planner's original ranking.
(b) In two sentences: what does (a) show Harsanyi's theorem does not settle, and what further premise would give "equal weights" a definite meaning?

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)*** An **invented** op-ed, not the words of any real person:

> "Economists settled this in 1955. Harsanyi proved that any rational society that respects its citizens' preferences must add up their happiness with equal weight. The egalitarian who would trade some total happiness for a fairer spread is not making a moral claim. She is making a mathematical error."

(a) Name two things the op-ed attributes to the theorem that it does not prove. Two sentences.
(b) An egalitarian wants to rank lotteries over outcomes by something other than a weighted sum of vNM utilities. Name the premise of the theorem she must give up, or explain how she can avoid giving up any. Say what her choice costs her and whether the cost generalizes. 120 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b), strict.)*

(a) Values with general weights: $W(p) = a_1$, $W(q) = a_2 + a_3$, $W(r) = 0.5a_1 + a_3$, $W(s) = a_2 + 0.5a_3$ (dropping $c$).

- $p \sim q$: $a_1 = a_2 + a_3$.
- $r \sim s$: $0.5a_1 + a_3 = a_2 + 0.5a_3$, so $0.5a_1 + 0.5a_3 = a_2$.
- Substitute the first: $0.5a_2 + 0.5a_3 + 0.5a_3 = a_2$, so $a_3 = 0.5a_2$, and $a_1 = 1.5a_2$.

So $a_1 : a_2 : a_3 = 3 : 2 : 1$. Values: $p = 3$, $q = 2 + 1 = 3$, $r = 1.5 + 1 = 2.5$, $s = 2 + 0.5 = 2.5$.

(b) $W(t) = 3(0.7) + 2(0.4) + 1(0.3) = 2.1 + 0.8 + 0.3 = 3.2 > 3$, so society prefers $t$ to $p$, and to every other outcome. Equal weights give the sums $p = 1$, $q = 2$, $r = 1.5$, $s = 1.5$, $t = 1.4$, so $q$ ranks first. Same people, same preferences, a different best outcome: the weights carry the verdict.

**Wrong turns:** treating $c$ as a weight to solve for; it shifts every value equally and drops out. Reading 3 : 2 : 1 as "person 1 matters three times as much": it is a fact about these scales, not about persons.

---

**P2** *(Formal (a) · Exegetical (b), both strict.)*

(a) $u_1 + u_2$: $A = 1.2$, $B = 1$, $C = 1.1$. The planner picks $A$.

$v_2 = 3u_2 - 1$ gives $(-0.4,\ 2,\ 0.8)$. Then $u_1 + v_2$: $A = 0.6$, $B = 2$, $C = 1.3$. Now $B$ wins.

The shift $-1$ lowers every outcome's total by 1 and changes nothing; the factor 3 does all the work. Weights $(1, \tfrac13)$ on $(u_1, v_2)$ give $u_1 + \tfrac13(3u_2 - 1) = u_1 + u_2 - \tfrac13$: $A = \tfrac{13}{15}$, $B = \tfrac23$, $C = \tfrac{23}{30}$, the original ranking.

**Must hit, strict (b):**

- The theorem fixes the *form* of social utility but not the weights, and a weight means something only relative to a choice of each person's unit; rescaling one person's utility changes what "equal weights" recommends.
- What is needed is interpersonal comparability of utility *differences* (unit comparability): a premise that one person's unit gain is as large as another's. It comes from outside the vNM construction.

**Wrong turns:** blaming the $-1$ shift. Saying the theorem is therefore false; it is true, and silent on this.

**Model answer (b):** The theorem forces a weighted sum but leaves the weights open, and since each person's vNM scale has a free unit, equal weights on one choice of scales are unequal weights on another. "Equal weights" gets a definite meaning only with a premise of unit comparability across persons, which no individual's choices among gambles can supply.

---

**P3** *(Exegetical (a), strict · Evaluative (b), any verdict.)*

**Must hit, strict (a):** any two of

- **Equal weights.** The theorem gives some weights; equality needs an impartiality premise plus interpersonal comparability.
- **Happiness.** The theorem is about vNM utilities, which represent preferences over gambles; that they measure happiness or welfare is Sen's disputed premise 6.
- **Error.** The conclusion follows only from premise 2, that society is vNM-rational over lotteries. Denying a premise is not a mathematical error.

**Must hit, any verdict (b):**

- State her options precisely. Either deny premise 2 (society may violate independence over lotteries, as Diamond's case suggests), or deny premise 6: keep the theorem but hold that well-being is a concave transform of vNM utility, so a fairer spread of *welfare* can still be a weighted sum of vNM utilities.
- Name the cost of the option chosen. Denying 2: society can face the dynamic-inconsistency and money-pump worries individuals face when they break independence. Denying 6: she owes an account of well-being on a scale other than the one choices reveal.
- Say whether the cost generalizes: whether her reasons for exempting society from independence would also exempt individuals.

**Wrong turns:** answering that she should deny Pareto indifference without saying why indifference by everyone could leave society non-indifferent. Saying the theorem forbids caring about equality at all, when it only forbids doing so through social risk preferences while holding 6.

**Model answer (b), one of several:** She can keep every premise of the theorem and deny 6. If well-being is a concave function of vNM utility, an egalitarian ranking of welfare may still be a weighted sum of vNM utilities, and the op-ed's "error" disappears. The cost is that she needs a measure of well-being independent of the choices that built $u_i$, and so far nobody has a measure most philosophers accept. If she instead denies premise 2, society may prefer a fair lottery to its expectation, and it inherits the sequential-choice worries that independence's defenders press. Whether that cost generalizes depends on whether the reason, that society cares how outcomes are spread across people, has an analogue in a single life. If it has none, the exemption is principled.

</details>

## Flashback

**From Lesson [4.3](04-03-causal-decision-theory.md) (Causal decision theory):** *(Formal (a)–(b) · Exegetical (c).)* Ida decides whether to treat (T) or wait (W). Treatment costs 5; recovery is worth 100; nothing else matters. She sorts the world into four dependency hypotheses, each settling what both acts would do: $K_1$, she recovers either way; $K_2$, only if treated; $K_3$, only if she waits (the treatment backfires); $K_4$, neither way. Her unconditional credences are $P(K_1, K_2, K_3, K_4) = (0.3,\ 0.2,\ 0.1,\ 0.4)$. But a dread that comes with the incurable strain also pushes patients towards treatment, so her credences conditional on each act are

| | $K_1$ | $K_2$ | $K_3$ | $K_4$ |
|---|---|---|---|---|
| $P(K \mid T)$ | 0.15 | 0.15 | 0.1 | 0.6 |
| $P(K \mid W)$ | 0.45 | 0.25 | 0.1 | 0.2 |

(The rows average to the unconditional credences if she thinks she treats with chance $\tfrac12$.)

(a) Compute Lewis's causal expected utility $U$ of each act. Above what cost of treatment would CDT wait?
(b) Compute the evidential value $V$ of each act. Which does EDT recommend, and by how much?
(c) In one sentence: why may CDT use the unconditional $P(K)$ here, and what feature of the case makes the two theories split?

<details>
<summary>Solution</summary>

(a) Treating yields recovery under $K_1$ and $K_2$; waiting under $K_1$ and $K_3$:

$$\begin{aligned}
U(T) &= -5 + 100(0.3 + 0.2) = 45,\\
U(W) &= 100(0.3 + 0.1) = 40.
\end{aligned}$$

Treat, by 5. In general $U(T) - U(W) = 100\,[P(K_2) - P(K_3)] - \text{cost} = 10 - \text{cost}$, so CDT waits once the cost exceeds 10.

(b) Same outcomes, act-conditional weights:

$$\begin{aligned}
V(T) &= -5 + 100(0.15 + 0.15) = 25,\\
V(W) &= 100(0.45 + 0.1) = 55.
\end{aligned}$$

EDT waits, by 30. (Check: $\tfrac12(0.15) + \tfrac12(0.45) = 0.3$, and likewise for each column.)

**Must hit, strict (c):** a dependency hypothesis already settles what each act would bring about, so her act cannot influence which one is true; the theories split because treating is *evidence* of $K_4$ (through the dread, a common cause) without causing it, so $P(K \mid A) \ne P(K)$.

**Wrong turns:** counting recovery under $K_3$ for treating, or under $K_2$ for waiting, which treats a dependency hypothesis as a plain state rather than a rule for both acts. Using the conditional rows in (a), which is EDT again. Reading EDT's verdict as evidence that treatment harms her: $K_3$'s credence is 0.1 on both rows.

</details>

## Connections

- **Backward:** [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) built each $u_i$ from standard gambles and showed its unit is free, which is why the weights here float. The "linear in probabilities" property is the vNM theorem stated in [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md). [3.4](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) is Harsanyi's other route to averaging, through the veil; the theorem needs no veil and no equiprobability.
- **Forward:** [5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md) supplies the comparability bases the weights need, and works Diamond's objection to premise 2. [5.3](05-03-population-ethics-total-and-average.md) asks what to add when the number of people changes. [6.3](06-03-moral-uncertainty.md)'s expected choiceworthiness has the same shape, a weighted sum of theories' scores, and the same problem of fixing units across them.
- **Sideways:** the utilitarian $W = \sum_i u_i$ as a [social welfare function](../reference.md#social-welfare-function) is in [`grad-micro` 6.5](../../grad-micro/lessons/06-05-social-choice-welfare.md); Harsanyi escapes [Arrow](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md) because he uses cardinal information from preferences over lotteries, not bare rankings. The weights $a_i$ are the theory behind [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md)'s welfare weights. [`ethics` 1.1](../../ethics/lessons/01-01-classical-utilitarianism.md) shows Mill needing the additivity of goods that Harsanyi derives; [`ethics` 5.2](../../ethics/lessons/05-02-contractualism-what-no-one-could-reasonably-reject.md) is the view that refuses to aggregate, and [`social-choice`](../../social-choice/syllabus.md) aggregates judgments rather than utilities.

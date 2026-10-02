# Political Philosophy · Lesson 2.1: Utilitarianism as a principle for institutions

> ⏱ ~15 min · Module 2: Justice and distribution · Builds on: [1.3 Fair play, gratitude and associative obligation](01-03-fair-play-gratitude-and-associative-obligation.md), [`ethics` 1.3 Justice and the separateness of persons](../../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md) · Unlocks: [2.2 Rawls I: the original position](02-02-rawls-the-original-position.md)

## Why this matters

Module 1 asked whether the state may rule at all. Module 2 asks a different question: granted that it rules, how should its institutions divide the benefits and burdens of living together? The first serious answer, and the one every later theory defines itself against, is utilitarian: arrange institutions to make total well-being as large as possible. This lesson asks what that principle implies when its target is a tax code rather than a sheriff, and whether the famous objections to utilitarianism survive the change of target.

## The idea

**The subject changes.** Rawls (*A Theory of Justice*, 1971, §2) argued that the primary subject of justice is the [basic structure](../reference.md#basic-structure): the way the major institutions (the constitution, property and contract law, markets, the family) assign rights and duties and divide the gains of cooperation. Its effects are profound and present from birth: it fixes which starting places exist and what each one leads to. A theory of justice in this sense is a standard for that structure, not a rule for individual choices.

Utilitarianism as a moral theory belongs to [`ethics` 1.1](../../ethics/lessons/01-01-classical-utilitarianism.md): the right act maximizes the sum of well-being. As a theory of justice it says: **the just basic structure is the one under which the sum of well-being is greatest.** Mill already put it in institutional terms. Equal concern for everyone's happiness, he wrote,

> "involves an equal claim to all the means of happiness, except in so far as the inevitable conditions of human life, and the general interest, in which that of every individual is included, set limits to the maxim" (*Utilitarianism*, 1863, ch. V).

That sentence holds the whole lesson: a presumption of equal means, and a limit set by the general interest.

**Why the target matters.** Robert Goodin (*Utilitarianism as a Public Philosophy*, 1995) argued that what makes utilitarianism a poor guide to private life makes it a good guide for officials. A friend who calculates is cold; a ministry that does not calculate is negligent. Officials choose **general policies** for millions of people they will never meet, so impersonality is a duty of their office rather than a vice. And the classic counterexamples are mostly one-off, secret acts (the sheriff who frames a drifter). A policy is public and repeated, so it cannot be secret, and its effects on trust count in its own sum. On Goodin's view the most damaging objections are aimed at the wrong level.

## The argument

**The utilitarian case for redistribution.** Let $c_i$ be person $i$'s income and $u(c)$ the well-being it buys.

- **P1 (Normative).** The basic structure should maximize $W=\sum_i u(c_i)$, the sum of well-being. *In words:* everybody counts for one, nobody for more than one, and the total is what institutions answer to.
- **P2 (Empirical).** Income has [diminishing marginal utility](../reference.md#diminishing-marginal-utility): $u$ is increasing and concave, so an extra 1,000 dollars buys less well-being the more you already have.
- **P3 (Epistemic).** People's $u$ functions should be treated as the same. Either they are roughly similar, or, as Abba Lerner argued (*The Economics of Control*, 1944), the state cannot tell who is the more efficient converter of income into well-being.
- **P4 (Formal).** Given P2 and P3, moving income from a richer to a poorer person raises $W$, because the poorer person's marginal utility is higher.
- **P5 (Empirical).** Transfers leak: taxes blunt incentives and administration costs money, so a dollar taken delivers less than a dollar. This is Arthur Okun's [leaky bucket](../reference.md#leaky-bucket) (*Equality and Efficiency*, 1975).

∴ **C.** The basic structure should redistribute from richer to poorer up to the point where the marginal gain to the recipient, net of leakage, equals the marginal loss to the payer, and no further.

*In words:* utilitarianism is egalitarian about income, and it stops short of full equality exactly as far as the leak requires.

**The formal tool.** Take two people, richer R and poorer P, with $u(c)=\ln c$, so the marginal utility is $u'(c)=1/c$. A transfer $t$ is taken from R, and a fraction $\lambda$ leaks away, so P receives $(1-\lambda)t$:

$$W(t)=\ln(y_R-t)+\ln\big(y_P+(1-\lambda)t\big).$$

Setting $W'(t)=0$ gives $\dfrac{1}{y_R-t}=\dfrac{1-\lambda}{y_P+(1-\lambda)t}$, so

$$t^*=\frac{(1-\lambda)\,y_R-y_P}{2(1-\lambda)},\qquad \frac{c_P}{c_R}=1-\lambda .$$

*In words:* the utilitarian stops when the poorer person has $1-\lambda$ times the richer person's income, and transfers nothing at all once $\lambda \ge 1-y_P/y_R$.

**Lerner's argument, in miniature.** Split 100 between two people. One has $u=2\ln c$, the other $u=\ln c$, and the state does not know who is who, each assignment equally likely. The expected sum for a split $(x,100-x)$ is $1.5[\ln x+\ln(100-x)]$, maximized at $x=50$. If the state *knew* who was the better converter, it would give that person $66.67$.

**Where the argument is weakest.** P3, and with it the equality conclusion. Amartya Sen ("Equality of What?", Tanner Lecture, 1979) pressed the case of a disabled person who gets less well-being from each dollar than others do. Utilitarianism must then give him *less*, since a dollar does more good elsewhere. The critic's point is that the egalitarian conclusion never came from concern for persons. It came from a contingent fact about utility functions, or from the state's ignorance of them, and it reverses when the facts or the knowledge change. The utilitarian replies that such cases are rare at the level of policy, and that a disability often raises a person's marginal need for income (care, equipment) rather than lowering it. Whether that reply holds is partly empirical; [2.5](02-05-equality-of-what.md) takes up the deeper question of what the currency of justice should be.

## The picture

![Two hump-shaped curves showing the gain in total utility as a transfer from a person with 120 thousand dollars to one with 30 thousand grows from 0 to 90. With no leak the curve peaks at a transfer of 45, where each has 75. With a 25 percent leak the curve is lower and peaks at 40, where incomes are 80 and 60, and it turns negative before the transfer reaches 90](assets/02-01-fig1.svg)

Example 1's numbers. The leak does two things: it lowers the whole curve, and it moves the best transfer left, so the optimum stops short of equality.

## Worked examples

**Example 1 (clean): diminishing marginal utility makes the sum redistributive.** Invented numbers. In the Republic of Varden, household R earns 120 thousand dollars and household P earns 30 thousand, with $u=\ln c$.

*No leak* ($\lambda=0$). The first thousand moved gains about $1/30-1/120=0.025$ units of utility. Then $t^*=(120-30)/2=45$, and each ends with 75: full equality, because with identical concave $u$ the sum is largest when marginal utilities are equal.

*A 25 percent leak* ($\lambda=0.25$). Then $t^*=(0.75\times120-30)/(2\times0.75)=60/1.5=40$. R keeps 80; P receives $0.75\times40=30$ and ends with 60. Check: $60/80=0.75=1-\lambda$. Moving beyond 40 lowers the sum, since each further dollar costs R more well-being than its 75 cents gives P. And at any leak of 75 percent or more ($1-30/120$), the utilitarian transfers nothing.

So the principle delivers a definite, moderate egalitarianism, and its stopping rule is set entirely by marginal utilities and leakage. Equality is valued only as a means to the sum.

**Example 2 (hard): concentrated losses, diffuse gains.** Invented numbers. Varden (5 million people) can close the hospital in its remote Kessel region (40,000 people) and spend the savings on national bowel-cancer screening. The ministry projects 6 extra deaths a year in Kessel from longer emergency journeys, and 20 deaths a year averted by screening nationwide. The sum says close: 14 lives a year net. Kessel's own share of the screening benefit is about $20\times40{,}000/5{,}000{,}000=0.16$ deaths averted, so Kessel bears a net loss of about 5.84 deaths a year while the rest of the country gains 19.84.

*The separateness objection, at the institutional level.* [`ethics` 1.3](../../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md) owns the objection: a cost to one person is not compensated by a gain to another, and a sum treats the two as one ledger ([separateness of persons](../reference.md#separateness-of-persons)). Rawls (§5) said classical utilitarianism extends one person's principle of rational choice to society as a whole. Here is what changes when the target is an institution:

- *It weakens.* No victim is identified in advance; the 6 deaths are statistical. Ex ante, a policy that spreads risks evenly can maximize *each* person's expected well-being as well as the sum, so everyone gains in prospect. That is Goodin's point made precise.
- *It strengthens where the risk is not spread.* Kessel residents know who they are, and that the policy makes their own prospects worse. The ex ante defence works only behind ignorance of who will lose; a region is not ignorant. And the basic structure is not something a person can leave or choose; its effects run through a whole life.

*The utilitarian's rule-level reply.* Ask not "close this hospital?" but "what rule for siting services maximizes welfare over time?" Mill named the reason a rule should protect people: "The interest involved is that of security, to every one's feelings the most vital of all interests" (*Utilitarianism*, ch. V). A standing rule that any region may be stripped whenever the sum gains would erode the security of expectations everywhere. So a utilitarian constitution adopts guarantees: minimum access standards, compensation for concentrated losses.

*Where it stops giving a verdict.* The reply makes Kessel's protection depend on the size of the security effect. If screening averted 200 deaths rather than 20, the same rule-level reasoning would likely license the closure. The critic says that is the point: protection that rises and falls with the numbers is not the protection a separate person is owed. The utilitarian says no theory protects anyone at any cost. That dispute is not settled by the arithmetic.

## Watch out

- **You might think a utilitarian basic structure aims at equality, but actually it aims at the sum.** Equal incomes fall out only when utility functions are identical (or unknown) and nothing leaks. Equality is a by-product of P2 and P3, not a value in P1.
- **You might think a just basic structure is thereby a legitimate state, but actually justice and [legitimacy](../reference.md#justification-and-legitimacy) are different properties.** Module 1's vocabulary still applies: an institution can maximize welfare and lack the right to rule, or have the right to rule and be unjust. Showing that the sum is maximized establishes a *justification* for the arrangement, not authority or a duty to obey it.
- **You might think "redistribution raises total welfare" means "everyone is better off", but actually a rise in the sum is not a Pareto improvement.** Household R loses in Example 1. The two are claims of different kinds: one about a total, one about each person.

## One-liner

> As a principle for institutions, utilitarianism redistributes because a dollar does more for the poor, stops where the leak eats the gain, and meets the separateness objection weakened when losers are anonymous and strengthened when they know who they are.

## Problems

**P1 (🟢) *(Formal (a)-(c) · Exegetical (d).)*** Invented numbers. Two households have incomes $y_R=90$ and $y_P=10$ (thousand dollars), with $u=\ln c$. (a) With no leak, find the utilitarian-optimal transfer and final incomes. (b) Now half of every dollar transferred leaks away ($\lambda=0.5$). Find $t^*$, both final incomes, and the ratio $c_P/c_R$. (c) Find the smallest leak at which the utilitarian transfers nothing. (d) In two sentences: in (b), why does the utilitarian stop with P still far poorer than R, and does that show the principle is indifferent to equality?

**P2 (🟡) *(Exegetical (a)-(b).)*** Diagnose. An **invented** memo from the Varden Treasury on a winter fuel payment, not the words of any real person or agency:

> (i) "Each 100 dollars buys more well-being for a pensioner on 9,000 dollars a year than for one on 60,000, so the payment should go to the first: that is how the budget does the most good."
> (ii) "Even where a better-off household would gain more well-being from the payment, say because its house is larger and colder, the poorer household should still come first, because a gain matters more the worse off the person who receives it."
> (iii) "Pensioners who paid in for forty years have earned the payment; those who did not contribute have no claim to it."
> (iv) "Since the scheme raises total well-being, every household is better off under it."

(a) For (i)-(iii), name the principle each sentence uses: utilitarian, prioritarian or desert-based. One line each. (b) Say what is wrong with (iv), and which kind of claim it confuses with which. Two sentences.

**P3 (🔴, optional) *(Evaluative.)*** Invented case. To fund larger pensions for every later generation, the Republic of Varden adopts the retirement rule that maximizes total well-being. It cuts the promised pensions of one cohort, those now aged 50 to 55, by a third, with no compensation; the sum of well-being across all cohorts rises. Give the strongest version of the separateness-of-persons objection to this rule *as an institutional rule*, then the strongest utilitarian reply. 150 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)-(c) — strict · Exegetical (d) — strict)*

(a) With $\lambda=0$, $t^*=(90-10)/2=40$. Both end with 50.

(b) $t^*=\dfrac{0.5\times90-10}{2\times0.5}=35$. R keeps $90-35=55$; P receives $0.5\times35=17.5$ and ends with $27.5$. Ratio $27.5/55=0.5=1-\lambda$. Check the first-order condition: $1/55\approx0.0182$ and $0.5/27.5\approx0.0182$, equal.

(c) The transfer is zero when $(1-\lambda)y_R\le y_P$, i.e. $\lambda\ge1-10/90=8/9\approx0.889$. Equivalently, at $t=0$ the marginal gain $-1/90+(1-\lambda)/10$ is positive only while $1-\lambda>1/9$.

**Must hit, strict (a)-(c):**

- $t^*=40$, incomes $(50,50)$.
- $t^*=35$, incomes $55$ and $27.5$, ratio $0.5$.
- Transfers stop at a leak of $8/9$, about 89 percent.

**Must hit, strict (d):**

- The stopping point is where R's marginal utility loss equals P's marginal gain after the leak; beyond it, each further dollar lowers the sum.
- The principle values equality only instrumentally: it equalizes when doing so raises the sum (as in (a)), and stops when it does not. Not "indifferent", but not valuing equality for its own sake.

**Wrong turns:** forgetting the leak in P's income (writing $10+35=45$); answering (d) with "utilitarianism doesn't care about distribution", when (a) shows it equalizes fully with no leak.

**Model answer (d):** The utilitarian stops at 35 because past that point each dollar taken costs R more well-being than the 50 cents that reach P add. That shows equality is a means for the principle, pursued exactly as far as it raises the sum, not that the principle ignores distribution: with no leak it equalizes completely.

---

**P2** *(Exegetical (a)-(b) — strict)*

**Must hit, strict (a):**

- (i) **Utilitarian.** The recipient is chosen because the money produces more total well-being there (diminishing marginal utility).
- (ii) **Prioritarian.** It weights gains by how badly off the recipient is, and holds that weighting even against a larger well-being gain elsewhere; that is what separates it from (i) ([`ethics` 1.3](../../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md), $\sum f(u_i)$ with $f$ concave).
- (iii) **Desert-based.** The claim rests on a fact about the recipient's past conduct (contribution), not on well-being or need.

**Must hit, strict (b):**

- (iv) moves from a claim about a total (the sum rose) to a claim about each person (everyone gained), which is a Pareto claim.
- A rise in the sum is compatible with some households losing; the households that fund the payment, or that are excluded under (iii), may be worse off.

**Wrong turns:** calling (ii) utilitarian because it mentions well-being (the giveaway is "even where a better-off household would gain more"); calling (ii) egalitarian, when it says nothing about the gap between households, only about how badly off the recipient is; calling (iii) utilitarian because contributory schemes may have good incentive effects (the sentence gives no such reason).

**Model answer (b):** Sentence (iv) slides from an aggregate claim (total well-being rises) to a distributive one about every household (each is better off), which is the Pareto condition, a different and much stronger claim. The sum can rise while taxpayers who fund the payment, or households denied it, end up worse off.

---

**P3** *(Evaluative — graded on moves, not verdict)*

**Accept:** any answer that states the objection in a form that uses features of an institutional rule, not of a one-off act, and gives a reply that engages that form.

**Must hit, any verdict:**

- The objection in institutional form: the losers are an identifiable group who know their prospects fall, so the ex ante "everyone gains in expectation" defence is unavailable; the cut is uncompensated; and a pension system is part of the basic structure, which people cannot opt out of and which shapes whole lives.
- The reply at strength: the rule-level move (a welfare-maximizing *rule* for pensions would protect settled expectations, because security, in Mill's sense, is a large part of welfare), or the claim that every pension reform burdens some cohort and no rule escapes trade-offs between cohorts.
- Where it stops: the reply's protection is contingent on the size of the security effect relative to the gain, so it can be outweighed. Either side should say whether that contingency is acceptable.

**Wrong turns:** running the sheriff case instead of the pension rule; treating the objection as "utilitarianism ignores the cohort" (the cohort's losses are counted; the charge is that they are merged into a total); assuming the rule-level reply automatically forbids the cut.

**Model answer, one of several:** The objection: this is not a secret act but a public rule that singles out a known cohort. Its members cannot leave the pension system, they planned their lives around its promise, and nothing returns to them from later generations' gains. Since they know who they are, the defence that everyone gains in prospect fails. The sum treats their loss as offset by others' gains, which is exactly the merging of lives the separateness objection rejects. The reply: a welfare-maximizing pension rule would not permit uncompensated mid-career cuts, because the security of settled expectations is among the largest goods a pension system provides; a rule allowing such cuts would make every cohort's plans precarious. The cut fails the utilitarian test properly applied. The limit: if the later gains were large enough, the reply would permit it.

</details>

## Flashback

**From Lesson [1.3](01-03-fair-play-gratitude-and-associative-obligation.md) (Fair play, gratitude and associative obligation):** *(Exegetical (a) · Evaluative (b).)* Counterexample. Invented case. Six households live on Tollan Lane, a private road, and five of them founded a rota that keeps it clear of snow. Juno buys the sixth house. She signs up for the rota's text alerts and drives the cleared lane every winter morning, knowing that the clearing is her neighbours' work. The founders set the rota: each founding household clears one morning a month, and each newcomer household four mornings a week. (a) Show that Juno's benefit passes Simmons's acceptance test. One sentence. (b) On Hart's principle, those who benefit from others' compliance with a scheme owe a compliance similar to theirs. Use the case to show that accepting a benefit is not enough to make Juno owe the share the scheme assigns her. Name the missing condition, and say what, if anything, she owes instead. 100 words or fewer. Any verdict on what she owes passes.

<details>
<summary>Solution</summary>

**Must hit, strict (a):**

- She sought the benefit out and took it willingly and knowingly, aware that it came from others' cooperation. So it is accepted, not merely received.

**Must hit, any verdict (b):**

- Acceptance is met, yet Juno plainly does not owe four mornings a week. The missing condition is that the burdens be fairly shared: Klosko states it outright, and Hart's requirement of similar submission builds it in. Fair play binds you to a fair share, not to whatever share the scheme assigns.
- State what she owes, with a reason. On fair play, at most a share like the founders', about one morning a month, or one set by some other fair standard such as use. A Nozickian may say she owes nothing, since acceptance without agreement does not bind on his view. Either verdict passes if it is argued.
- Where the principle stops: it requires a fair share but does not say what makes a share fair, whether equal mornings per household or shares by number of cars.

**Wrong turns:** calling the benefit merely received because the lane would be cleared anyway (she sought it out). Concluding that an unfair quota means she owes nothing at all, without arguing for it. Reading her sign-up as consent to the quota: she joined an alert list, not the rota's terms.

**Model answer, one of several:** (a) Juno signed up for the alerts and uses the lane knowing that her neighbours clear it, so on Simmons's test she accepts the benefit. (b) Acceptance is satisfied, yet she does not owe four mornings a week while the founders do one a month. Fair play requires that the burdens be fairly shared, as Klosko says and as Hart's requirement of similar submission implies. What Juno owes is a share like the others', about one morning a month. The principle does not settle whether "like" means equal per household or in proportion to use.

</details>

## Connections

- **Backward:** [1.3](01-03-fair-play-gratitude-and-associative-obligation.md) asked whether benefits from a cooperative scheme create a duty to share its burdens; this lesson asks how a scheme should divide them. Utilitarianism as a moral theory is [`ethics` 1.1](../../ethics/lessons/01-01-classical-utilitarianism.md); the separateness objection and the diminishing-marginal-utility reply are [`ethics` 1.3](../../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md), whose promise of a lesson on utilitarianism for institutions this is.
- **Forward:** [2.2](02-02-rawls-the-original-position.md) builds Rawls's alternative on the claim that utilitarianism ignores the distinction between persons; [2.3](02-03-rawls-the-two-principles-and-maximin.md) sets maximin against the utilitarian sum; [2.5](02-05-equality-of-what.md) takes up Sen's challenge to welfare as the currency of justice; [2.6](02-06-luck-relations-priority-and-sufficiency.md) develops prioritarianism.
- **Sideways:** $W=\sum_i u_i$ is the utilitarian social welfare function of [`grad-micro` 6.5](../../grad-micro/lessons/06-05-social-choice-welfare.md) and [`decision-theory` 5.2](../../decision-theory/lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md), where interpersonal comparison (P3's assumption) is formalized. The leaky bucket also appears in [`philosophy-of-economics` 3.1](../../philosophy-of-economics/lessons/03-01-the-pareto-principle.md) as the price of equality, and [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md) derives the optimal linear tax with the welfare weights $g_i$ as inputs: the utilitarian answer to "which weights?" is that a household's weight is its marginal utility of income.

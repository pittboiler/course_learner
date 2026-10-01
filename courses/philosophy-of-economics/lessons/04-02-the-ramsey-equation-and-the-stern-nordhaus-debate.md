# Philosophy of Economics · Lesson 4.2: The Ramsey equation and the Stern-Nordhaus debate

> ⏱ ~15 min · Module 4: Discounting the future · Builds on: [4.1 Why discount?](04-01-why-discount.md), [3.3 Cost-benefit analysis and the value of a life](03-03-cost-benefit-analysis-and-the-value-of-a-life.md) · Unlocks: [4.3 Uncertainty, the long run, and future people](04-03-uncertainty-the-long-run-and-future-people.md)

## Why this matters

In 2006 the Stern Review told the British government that climate change justified large, immediate cuts in emissions. In 2007 William Nordhaus, builder of the DICE climate-economy model, replied in the *Journal of Economic Literature* that the Review's verdict rests above all on its near-zero time discounting, not on its climate science. The Review discounted the future at about 1.4 percent a year; Nordhaus's model used about 5.5. Both numbers come out of one equation with three inputs. This lesson builds the equation, says which inputs are forecasts and which are ethics, and locates the dispute exactly.

## The idea

[4.1](04-01-why-discount.md) split a discount rate into two reasons for valuing a later dollar less. Pure time preference counts later *welfare* for less just because it is later. Growth discounting counts a later *dollar* for less because the people who get it will be richer, so it does them less good. The [Ramsey equation](../reference.md#ramsey-equation) adds the two:

$$r=\delta+\eta g.$$

Here $r$ is the social discount rate for consumption, $\delta$ the rate of [pure time preference](../reference.md#pure-time-preference), $g$ the growth rate of consumption per head, and $\eta$ the [elasticity of marginal utility](../reference.md#elasticity-of-marginal-utility): how fast an extra dollar's value falls as people get richer. *In words:* a dollar next year is worth less by the impatience term plus "how much richer" times "how much richness matters".

**Notation.** [`grad-macro` 2.3](../../grad-macro/lessons/02-03-ramsey-cass-koopmans.md) writes $\rho$ for time preference, $\sigma$ for the curvature of utility and $\delta$ for *depreciation*; [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) writes $r=\rho+\sigma g$. This course follows the Stern-Nordhaus literature: $\delta$ and $\eta$.

Of the three inputs, $g$ is a forecast. $\delta$ is a value judgment, the one 4.1 argued over. $\eta$ is the interesting one, because it is both.

## The argument

**Deriving the equation.** Take a social welfare function $W=\int_0^\infty e^{-\delta t}\,u(c_t)\,dt$ with $u(c)=c^{1-\eta}/(1-\eta)$, so $u'(c)=c^{-\eta}$. The value today of one extra unit of consumption at date $t$, relative to one now, is the social discount factor

$$\frac{e^{-\delta t}\,u'(c_t)}{u'(c_0)}=e^{-\delta t}\Big(\frac{c_t}{c_0}\Big)^{-\eta}=e^{-\delta t}e^{-\eta g t}=e^{-(\delta+\eta g)t}.$$

*In words:* discount the welfare at $\delta$, then convert welfare to dollars at a rate that falls as consumption grows. The same equation is the Keynes-Ramsey rule $\dot c/c=(r-\delta)/\eta$ of [`grad-macro` 2.3](../../grad-macro/lessons/02-03-ramsey-cass-koopmans.md) solved for $r$: on an optimal path, the return on capital equals the rate at which society should discount consumption.

**$\eta$, twice over.** First, it is a curvature: $\eta=-c\,u''(c)/u'(c)$, so doubling consumption divides marginal utility by $2^{\eta}$. Second, inside an additive social welfare function the weight on a dollar to anyone with consumption $c$ is $c^{-\eta}$, so $\eta$ is **inequality aversion**. That is the same parameter that set the [distributional weights](../reference.md#distributional-weights) of [3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md). Across generations, a richer future gets less weight per dollar for exactly the reason a richer contemporary does. (Because $u$ also ranks gambles, $\eta$ is the coefficient of relative risk aversion too.) Partha Dasgupta pressed the point: $\delta$ governs how we weigh people *because of their date*; $\eta$ governs how we weigh people *because of their consumption*, whatever their date.

**Two ways to set the parameters** ([prescriptive and descriptive discounting](../reference.md#prescriptive-and-descriptive-discounting)):

- *Prescriptive* (the Stern Review). Choose $\delta$ and $\eta$ by ethical argument. The Review held that pure time preference is defensible only as the probability that humanity ceases to exist, set $\delta=0.1$ percent on that basis, and took $\eta=1$ (log utility). With its growth forecast of 1.3 percent this gives $r=1.4$ percent, as Nordhaus reports.
- *Descriptive* (Nordhaus). Choose parameters so the model reproduces the real returns on capital and the saving rates actually observed, because climate investment competes with other investments and should earn what they earn. His model used $\delta=1.5$ percent and $\eta=2$, giving about 5.5 percent with its projected growth.

**The step that makes calibration bite.** Nordhaus observed that $\delta$ and $\eta$ cannot be chosen independently if the model must match the observed return: one equation, two unknowns. To get a 4 percent return with growth of 1.3 percent, $\eta=1$ needs $\delta=2.7$ percent; $\delta=0$ needs $\eta\approx 3$. He ran his model with Stern's $\delta=0.1$ percent and $\eta=3$: the return was about 5.6 percent and the near-term carbon price nearly matched his standard run. So markets pin down $r$, never its split.

**Why calibrating to markets is itself a normative choice.** The descriptive approach does not escape ethics; it imports a premise: *the right rate for society's investment in the far future is the rate today's markets pay.* That premise needs (i) that observed returns reflect an economy on an optimal path, (ii) that market rates, set by today's savers about their own lives, carry authority over trade-offs between generations, and (iii) that the existing distribution is the baseline to be respected. Nordhaus defends the method partly by rejecting the alternative: a world planner imposing the Review's parameters, especially on sovereign states bargaining over emissions, is "Government House" utilitarianism (Sen and Williams's phrase for an elite applying a morality the governed need not share). He also concedes that $\eta$ reflects social choices about inequality across generations and cannot simply be read off individual risk preferences.

**Where the argument is weakest.** For the prescriptive side, the premise that an ethically chosen $\eta$ is acceptable *in all its implications*. Dasgupta (2007) accepted the Review's $\delta$ but not its $\eta$. He showed that with $\delta=0.1$ percent, $\eta=1$ and a 4 percent return in a simple economy without technical progress, the current generation should save 97.5 percent of its output (Example 2). He judged $\eta$ between 2 and 4 more acceptable. The defender replies that "absurd" is the present generation's verdict on its own sacrifice, the very partiality the low $\delta$ was meant to correct. For the descriptive side, the weak premise is (ii): the critic says a market rate is an aggregate of present people's impatience, and calling it "the" rate presupposes the answer to the ethical question it was meant to avoid.

## The picture

![Two downward-sloping lines on a log scale showing the present value of 1 million dollars of damage in year 100 against pure time preference from 0 to 3 percent, with growth 1.5 percent. The eta 1 line falls from about 226,000 to about 12,000; the eta 2 line falls from about 52,000 to about 2,900. A dashed line shows that eta 2 with delta 0 and eta 1 with delta 1.5 give the same 3 percent rate and the same present value, about 52,000](assets/04-02-fig1.svg)

On a log scale each line is straight: every point of $\delta$ cuts the value by the same factor. Raising $\eta$ from 1 to 2 shifts the whole line down by as much as 1.5 points of $\delta$. With growth at 1.5 percent, a unit of $\eta$ is worth 1.5 points of pure time preference, which is why a zero-$\delta$ view does not guarantee a low rate.

## Worked examples

**Example 1 (clean): rates and present values.** Illustrative numbers. Damage of 1 million dollars arrives in year 100; consumption grows at $g=1.5$ percent. Using $PV=D/(1+r)^{T}$ ([present value](../reference.md#present-value)):

| $\delta$ | $\eta$ | $r=\delta+\eta g$ | $PV$ |
|---|---|---|---|
| 0 | 1.5 | 2.25% | 108,061 dollars |
| 1 | 1.5 | 3.25% | 40,831 dollars |
| 0 | 2.5 | 3.75% | 25,188 dollars |

The first row is the calibration William Cline used in 1992 ($\delta=0$, $\eta=1.5$), as Dasgupta notes. Adding one point of $\delta$ divides the value by 2.65; adding one unit of $\eta$ instead divides it by 4.29, because it adds $g=1.5$ points to $r$. In the second row, pure time preference supplies $1/3.25$, about 31 percent, of the rate; the rest is growth discounting, which a $\delta=0$ ethicist accepts.

**Example 2 (hard): reading the equation backwards.** The Ramsey equation also prescribes saving. In an economy where capital returns a constant $r$ (output $rK$) and no technical progress, an optimal plan grows consumption at $g=(r-\delta)/\eta$, and the saving rate is $s=g/r=(r-\delta)/(\eta r)$. With Dasgupta's numbers, $\delta=0.1$ and $r=4$ percent:

- $\eta=1$: $s=3.9/4=97.5$ percent.
- $\eta=2$: $s=3.9/8=48.75$ percent.
- $\eta=3$: $s=3.9/12=32.5$ percent.

Here the tool strains. Parameters chosen to value climate damages also dictate how much the present must save for every purpose. A prescriptivist must either accept the 97.5 percent, or treat its unacceptability as evidence against $\eta=1$ and so let intuitions about the present's sacrifice revise an ethical parameter. The descriptivist turns the same arithmetic around: since nobody saves 97.5 percent, the observed economy is not run on $\delta=0.1$, $\eta=1$. Whether that matters depends on whether observed behaviour should be the standard.

## Watch out

- **You might think the Stern-Nordhaus gap is a dispute about $\delta$, but actually** $\eta$ can do $\delta$'s work: Nordhaus's run with $\delta=0.1$ and $\eta=3$ reproduced his market-calibrated results. What a descriptivist fixes is $r$.
- **You might think "the market rate is 5 percent" settles the discount rate, but actually** it mixes kinds of claim. That capital earns 5 percent is empirical. That this return is the opportunity cost of climate spending is conceptual and contestable. That society *should* discount at it is normative.
- **You might think $\eta$ is empirical because it can be estimated from risk-taking, but actually** a household's attitude to its own gambles and a society's weighting of richer and poorer generations are different questions that happen to share a parameter in CRRA utility.

## One-liner

> $r=\delta+\eta g$: a forecast ($g$) times a parameter that is both curvature and inequality aversion ($\eta$), plus pure impatience ($\delta$); Stern chose the ethics and got 1.4 percent, Nordhaus matched markets and got 5.5, and since markets pin only $r$, choosing to match them is itself an ethical choice.

## Problems

**P1 (🟢) *(Formal.)*** Illustrative numbers: $\delta=0.5$ percent, $\eta=1.5$, $g=1.8$ percent. (a) Compute $r$ and the present value of 500,000 dollars of damage 80 years from now. (b) Holding $\delta$ and $g$ fixed, what $\eta$ makes that present value 20,000 dollars? (c) What share of the rate in (a) is pure time preference?

**P2 (🟡) *(Exegetical (a) · Evaluative (b).)*** An **invented** passage from a consultancy's appraisal manual, not the words of any real person or agency:

> "Our survey of 3,000 households (invented) finds relative risk aversion of about 2. We therefore set $\eta=2$ in the Ramsey equation. Unlike $\delta$, $\eta$ is an empirical fact about preferences, not an ethical choice."

(a) Name the two roles $\eta$ plays in the social discount rate besides measuring risk aversion, and the step the manual takes without argument. Three sentences. (b) Should the $\eta$ in the discount rate equal the inequality aversion used in a project's distributional weights ([3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md))? Any verdict. 150 words or fewer.

**P3 (🔴, optional) *(Formal (a) · Evaluative (b).)*** Illustrative numbers: capital returns $r=5$ percent, there is no technical progress, and $\delta=0.5$ percent. (a) Using $s=(r-\delta)/(\eta r)$, compute the optimal saving rate for $\eta=1$ and $\eta=2.5$, and the $\eta$ that gives a 25 percent saving rate. (b) Dasgupta argues that a parameter implying a 90-plus percent saving rate must be wrong. A defender of $\eta=1$ replies that such saving is what impartiality between generations demands, and that our sense of absurdity is the defective telescope of [4.1](04-01-why-discount.md). Name the crux in 100 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c) · strict)*

(a) $r=0.5+1.5\times1.8=0.5+2.7=3.2$ percent. $PV=500{,}000/1.032^{80}\approx 40{,}234$ dollars.

(b) The required rate satisfies $(1+r)^{80}=500{,}000/20{,}000=25$, so $r=25^{1/80}-1\approx 4.106$ percent. Then $\eta=(4.106-0.5)/1.8\approx 2.0$.

(c) $0.5/3.2\approx 15.6$ percent; the other 84.4 percent is growth discounting.

**Must hit, strict:** $r=3.2$ percent; PV about 40,200 dollars; $\eta\approx 2.0$; about 16 percent from $\delta$.

**Wrong turns:** multiplying $\eta$ by $\delta$ instead of $g$; in (b), solving for the rate correctly but forgetting to subtract $\delta$ before dividing by $g$ (giving $\eta\approx 2.28$).

**Model answer:** (a) 3.2 percent; about 40,234 dollars. (b) The rate must be about 4.11 percent, so $\eta\approx 2.0$. (c) About 16 percent of the rate is impatience; the rest is the judgment that richer people gain less from a dollar.

---

**P2** *(Exegetical (a) — strict · Evaluative (b) — graded on moves, not verdict)*

**Must hit, strict (a):**

- $\eta$ is the elasticity of marginal utility: how fast a dollar's value falls as consumption rises.
- It is also inequality aversion: in an additive social welfare function the weight on a dollar to someone with consumption $c$ is $c^{-\eta}$, here applied between richer and poorer generations.
- The unargued step: from a household's attitude to its own gambles to a society's weighting of generations. Sharing a CRRA parameter does not make these one attitude, so "empirical, not ethical" does not follow.

**Must hit, any verdict (b):**

- The case for equality, at strength: a dollar to a richer person counts for less whether she is richer because of her place or her date; using one $\eta$ across persons and another across time is Dasgupta's charge of inconsistency.
- A case against, at strength: one may hold that inequality between contemporaries, who share institutions and can be wronged by one another, matters differently from inequality between generations who never coexist; or that the future's greater wealth is uncertain, so the same $\eta$ does different work.
- Whether the position generalizes: if they must be equal, a low $\eta$ for climate commits an appraiser to weak distributional weights in every project, and a high one to strong weights.

**Wrong turns:** answering (a) with "time preference": that is $\delta$. Treating (b) as answered by the fact that the formulas share a symbol.

**Model answer (b), one of several:** Yes. The weight $c^{-\eta}$ says how much a dollar does for someone given what she already has, and nothing in that judgment refers to when she lives. An appraiser who uses $\eta=1$ to discount climate damages but $\eta=2$ to weight a road project between rich and poor districts is valuing a dollar differently depending on whether the richer recipient lives later or lives elsewhere, and owes a reason. The best reason on offer is that obligations between contemporaries arise from shared institutions, which future people do not yet share with us. If that reason fails, consistency forces one number, and whichever one is chosen settles both questions at once.

---

**P3** *(Formal (a) — strict · Evaluative (b) — graded on moves, not verdict)*

(a) $\eta=1$: $s=4.5/5=90$ percent. $\eta=2.5$: $s=4.5/12.5=36$ percent. For $s=25$ percent: $\eta=4.5/(0.25\times5)=3.6$.

**Must hit, strict (a):** 90 percent; 36 percent; $\eta=3.6$.

**Must hit, any verdict (b):**

- The crux is methodological, not the value of $\delta$ (both sides can accept a small $\delta$): whether the unacceptability of a parameter's implications for the present generation is admissible evidence against the parameter.
- Dasgupta's side treats considered judgments about cases as data that can revise a principle; the defender treats those judgments as the bias the principle exists to correct.
- What would move either side: an independent test of whether the judgment is partial, such as whether it survives when one does not know which generation one belongs to.

**Wrong turns:** making the crux "$\delta$ versus $\eta$": the reply concedes the arithmetic. Saying the 90 percent shows $\eta=1$ is inconsistent; it shows only that it is demanding.

**Model answer (b), one of several:** Both accept the arithmetic and a near-zero $\delta$. They split over evidence: Dasgupta lets the intuition that a generation should not nearly starve itself count against $\eta=1$, while the defender says that intuition comes from the present generation judging its own case and so is the telescope's distortion. The crux is whether such intuitions are admissible as evidence. A test that strips out partiality, judging behind ignorance of one's generation, would bear on it.

</details>

## Flashback

**From Lesson [3.4](03-04-cbas-critics-and-defenders.md) (CBA's critics and defenders):** *(Formal (a)–(b) · Exegetical (c).)* Illustrative numbers. An agency's reference VSL is 12 million dollars at an income of 90,000 dollars a head. A poorer region has income 15,000 a head, and the VSL's income elasticity is $\varepsilon=0.6$, so a differentiated VSL is $\mathrm{VSL}_i=12\,(y_i/90{,}000)^{\varepsilon}$ million. (a) Compute the poorer region's differentiated VSL. By what factor does applying the uniform 12 million VSL there multiply the region's own willingness to pay, and what inequality aversion $\eta$ in weights $g_i\propto c_i^{-\eta}$ gives that same relative weight (treat income as consumption)? (b) The agency's road appraisals use $\eta=1.2$. Apply that relative weight (richer region's weight 1) to the poorer region's own WTP: what VSL results? (c) In two sentences: what value judgment does calling the uniform VSL "neutral" hide, and what must a defender of uniformity claim to make it principled rather than a by-product of $\varepsilon$?

<details>
<summary>Solution</summary>

(a) $\mathrm{VSL}_P=12\times(15{,}000/90{,}000)^{0.6}=12\times 6^{-0.6}=12/2.930\approx 4.10$ million. The uniform VSL multiplies that by $12/4.10=6^{0.6}\approx 2.93$. The weight ratio is $g_P/g_R=(90{,}000/15{,}000)^{\eta}=6^{\eta}$, so $6^{\eta}=6^{0.6}$ and $\eta=0.6$: a uniform VSL is a distributional weight with $\eta=\varepsilon$.

(b) The weight is $6^{1.2}\approx 8.59$, so the weighted VSL is $4.10\times 8.59=12\times 6^{1.2-0.6}=12\times 6^{0.6}\approx 35.2$ million, almost three times the uniform figure.

**Must hit, strict (a)–(b):** about 4.10 million; factor about 2.93; $\eta=0.6$, equal to $\varepsilon$; about 35.2 million at $\eta=1.2$.

**Must hit, strict (c):**

- The hidden judgment: a uniform VSL weights the poorer region's WTP with an inequality aversion exactly equal to the VSL's income elasticity, an empirical parameter silently fixing a normative one. By the agency's own road-appraisal $\eta$ it *underweights* the poor region.
- A principled defence must leave the WTP-and-weights frame: claim that lives are valued equally as a matter of equal standing (a constraint, in Kelman's or Anderson's spirit), not as weighted WTP; or argue directly that $\eta=\varepsilon$ is the right inequality aversion.

**Wrong turns:** treating the uniform VSL as the unweighted baseline, when the unweighted P1-and-P2 answer is the differentiated 4.10 million. In (b), multiplying the uniform 12 million by 8.59 instead of the region's own 4.10.

**Model answer (c):** Calling the uniform VSL neutral hides an inequality aversion of 0.6, chosen by nobody, which falls out of an estimated elasticity and is lower than the 1.2 the agency defends elsewhere. A defender must either deny that lives saved are weighted WTP at all, holding that equal lives get equal value as a matter of equal standing, or argue that 0.6 is the right inequality aversion on its merits.

</details>

## Connections

- **Backward:** [4.1](04-01-why-discount.md) separated discounting utility from discounting consumption; the Ramsey equation puts the first at $\delta$ and the second at $\eta g$. The weights $c^{-\eta}$ are [3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md)'s distributional weights, and the equation is the Keynes-Ramsey rule of [`grad-macro` 2.3](../../grad-macro/lessons/02-03-ramsey-cass-koopmans.md) read normatively. [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) applied the same split to public debt.
- **Forward:** [4.3](04-03-uncertainty-the-long-run-and-future-people.md) asks what happens when $r$ itself is uncertain, and what a discount rate, however chosen, cannot settle about obligations to future people.
- **Sideways:** $\eta$ as inequality aversion is the concavity of a social welfare function in [`decision-theory`](../../decision-theory/syllabus.md) 5.2 and the source of welfare weights in [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md). The "Government House" charge returns to the democratic standing of experts' parameters, a question for [`political-philosophy`](../../political-philosophy/syllabus.md).

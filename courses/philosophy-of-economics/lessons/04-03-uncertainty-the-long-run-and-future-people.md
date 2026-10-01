# Philosophy of Economics · Lesson 4.3: Uncertainty, the long run, and future people

> ⏱ ~15 min · Module 4: Discounting the future · Builds on: [4.1 Why discount?](04-01-why-discount.md), [4.2 The Ramsey equation and the Stern-Nordhaus debate](04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) · Unlocks: [5.1 Commodification](05-01-commodification.md)

## Why this matters

[4.2](04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) ended with two calibrations of the [Ramsey equation](../reference.md#ramsey-equation) $r=\delta+\eta g$ that disagree by a factor of fifty about a century-distant harm. Nobody knows which growth rate the next century will deliver, and economists disagree about $\delta$. Weitzman's answer is that uncertainty about the rate is itself a reason to discount the far future at a *lower* rate, falling toward the lowest rate you think possible. This lesson runs that argument, finds the choice hidden inside it, and then asks what no discount rate can settle: what we owe people who do not yet exist.

## The idea

Suppose the rate that will hold for the next few centuries is either low or high, and you cannot tell which. A harm 300 years away is worth a modest sum today if the rate is low and next to nothing if it is high. Average those two *present values* and the low-rate world dominates the average, because the high-rate world has shrunk its contribution to almost zero. The further out you look, the more completely the low-rate scenario takes over. So the single rate that reproduces the average falls with the horizon, toward the lowest rate in play.

The trick is in the order of operations. Averaging *rates* and then discounting gives one answer. Averaging *discount factors* gives another, and the gap grows with the horizon, because compounding is convex.

## The argument

**Weitzman's argument for declining rates**, reconstructed from "Why the Far-Distant Future Should Be Discounted at Its Lowest Possible Rate" (*Journal of Environmental Economics and Management*, 1998).

1. **The discount rate $r$ is uncertain: scenario $i$ has rate $r_i$ with probability $p_i$, and whichever holds persists over the whole horizon.** *In words:* we do not know whether the future is a slow-growth or a fast-growth world, and we will not find out year by year.
2. **A future amount should be valued at its expected present value.** *In words:* the planner averages over scenarios what the amount is worth *today*.
3. **Discount factors are convex in the rate**, so the expected factor exceeds the factor at the expected rate, and the gap widens with the horizon.

∴ **C.** The [certainty-equivalent discount rate](../reference.md#certainty-equivalent-discount-rate) declines with the horizon and tends to the lowest rate with positive probability.

**The formal tool.** With annual compounding, the certainty-equivalent discount factor and rate at horizon $t$ are

$$A(t)=\sum_i p_i\,(1+r_i)^{-t},\qquad R(t)=A(t)^{-1/t}-1.$$

*In words:* average the factors, then ask which single constant rate would produce that average. As $t$ grows, the term with the smallest $r_i$ shrinks slowest and eventually carries almost all of $A(t)$, so $R(t)\to\min_i r_i$. Note that $R(1)$ is close to, but slightly below, the mean rate.

**[Gamma discounting](../reference.md#gamma-discounting).** In "Gamma Discounting" (*American Economic Review*, 2001), Weitzman emailed economists one question: what real rate should be used to discount the costs and benefits of climate-mitigation projects? The 2,160 answers ran from minus 3 to plus 27 percent, with a mean of about 4 percent and a standard deviation of about 3. He fitted a gamma distribution to them and treated the spread as uncertainty about the rate. His sliding scale runs from about 4 percent for the immediate future through 3, 2 and 1 percent to about zero for horizons beyond a few centuries.

**Catastrophe.** Weitzman later argued that with fat-tailed uncertainty about catastrophic climate outcomes, expected-utility cost-benefit analysis can break down, because the tail can dominate everything (his "dismal theorem", *Review of Economics and Statistics*, 2009). That is a claim about the limits of the framework, named here, not taught.

**What discounting cannot settle.** All of this ranks futures by a weighted sum of their welfare. Two questions lie outside that sum.

- *Who is harmed?* Large policies change who is born. A person who would not exist under the alternative policy is not worse off for the one chosen, so a person-affecting complaint finds no victim. This is the [non-identity problem](../reference.md#non-identity-problem), which [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) runs on public debt. A discounted welfare sum does not have this problem, since it counts whoever exists. In exchange, it must say how to compare populations of different sizes, which is population ethics ([`decision-theory`](../../decision-theory/syllabus.md) 5.3-5.4).
- *Is a sum the right form at all?* Rawls's just savings principle (*A Theory of Justice*, 1971, §44) treats what each generation owes the next as a constraint chosen without knowing which generation one belongs to, not a sum to maximize. Rights and threshold views similarly forbid leaving future people below a decent minimum, whatever the present value. The discounter's reply: any choice among policies trades present costs against future ones, so it implies weights; a discount rate only makes them explicit.

**Where the argument is weakest.** Premise 2, and premise 1's reading of uncertainty. Averaging present values treats today's dollar as the safe unit. Average *future* values instead and the same uncertainty yields a *rising* rate (Example 2). Gollier and Weitzman (*Economics Letters*, 2010) reconciled the two by weighting each scenario by the marginal utility of consumption in it, which brings back a declining rate under standard assumptions. So the conclusion rests on a welfare model, not on arithmetic alone. Premise 1 also does work. Gamma discounting turns *disagreement* among experts, much of it about the normative parameter $\delta$, into a *probability*. A critic says that moral disagreement is not a lottery over states of the world, and that averaging factors hands the long run to the most patient respondent.

## The declining rate

![Certainty-equivalent rate against horizon from 0 to 400 years. The blue curve, for a rate of 2 percent with probability 0.3 or 6 percent with probability 0.7, starts at 4.77 percent, is 3.19 percent at 100 years and approaches the dashed lowest-rate line at 2 percent. The red curve, a gamma distribution with mean 3.96 and standard deviation 2.94 percent, starts near 3.9 percent and falls to about 1 percent at 400 years](assets/04-03-fig1.svg)

The blue curve is Example 1. The red curve is the average certainty-equivalent rate under a gamma distribution with the survey's reported mean and spread (continuous compounding); its lowest possible rate is zero, so it keeps falling.

## Worked examples

**Example 1 (clean): two growth worlds.** Illustrative numbers. Take [4.2](04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)'s equation with $\delta=0$ and $\eta=2$. Growth will be 1 percent a year (so $r=2$ percent) with probability 0.3, or 3 percent ($r=6$ percent) with probability 0.7. The mean rate is $0.3(2)+0.7(6)=4.8$ percent.

At $t=1$: $A=0.3/1.02+0.7/1.06=0.29412+0.66038=0.95449$, so $R=4.77$ percent.

At $t=100$: $1.02^{-100}=0.13803$ and $1.06^{-100}=0.002947$, so $A=0.3(0.13803)+0.7(0.002947)=0.04141+0.00206=0.04347$, and $R=0.04347^{-1/100}-1=3.19$ percent. The low-growth world, with probability 0.3, now supplies 95 percent of $A$.

At $t=400$: $R=2.31$ percent, closing on 2.

So 1 million dollars of damage a century away is worth $43{,}473$ dollars today, against $1.048^{-100}\times 10^6=9{,}202$ dollars at the mean rate: almost five times as much. The value judgment sits in $\delta=0$ and $\eta=2$; the decline itself is arithmetic once premises 1 and 2 are granted.

**Example 2 (hard): the Weitzman-Gollier puzzle.** Same scenarios. A project costs 1 dollar today and pays $X$ dollars in 100 years. When is it worth doing?

*Average present values (Weitzman).* Do it if $X\cdot A(100)\ge 1$, so $X\ge 1/0.04347=23.0$.

*Average future values (Gollier).* The dollar spent today would have grown to $(1+r)^{100}$ in each scenario. The expected compound factor is $0.3(1.02^{100})+0.7(1.06^{100})=0.3(7.245)+0.7(339.30)=2.17+237.51=239.7$. Do it if $X\ge 239.7$. The implied rate is $239.7^{1/100}-1=5.63$ percent, and it *rises* toward 6 percent with the horizon.

Same probabilities, same rates, and the break-even payoffs differ by a factor of ten. The [Weitzman-Gollier puzzle](../reference.md#weitzman-gollier-puzzle) shows that "average over the uncertainty" is not one instruction. Which date's dollar counts as certain is a choice about whose consumption the risk falls on. Gollier and Weitzman's resolution makes that choice through marginal utility, which needs $\eta$, which [4.2](04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) showed is a value judgment twice over.

## Watch out

- **You might think a declining rate means the planner grows more patient, but actually [pure time preference](../reference.md#pure-time-preference) $\delta$ is fixed in Example 1.** The decline comes from averaging over uncertainty, not from a changing attitude to time.
- **You might think "lowest possible rate" means a likely low rate, but actually it means the lowest with *any* positive probability.** Add a 1 percent chance of a 0.5 percent rate to Example 1, and at long enough horizons $R(t)$ falls toward 0.5 percent.
- **You might think gamma discounting resolves an empirical uncertainty, but actually its input mixes kinds of claim.** Forecasts of growth are empirical; disagreement about $\delta$ is normative. Treating the second as a probability distribution is itself a normative choice.

## One-liner

> Average discount factors, not rates, and uncertainty about a persistent rate makes the far future's rate fall toward the lowest possible one; but which value you average is a welfare choice, and whether future people's claims are a discounted sum at all is a question no rate can answer.

## Problems

**P1 (🟢) *(Formal.)*** Illustrative numbers. The persistent rate is 1, 4 or 7 percent, each with probability 1/3. (a) Compute the certainty-equivalent discount factor and rate at 1, 50 and 200 years (annual compounding). (b) Compute the present value of 1 million dollars of damage 200 years away, first at the certainty-equivalent factor, then at the mean rate of 4 percent. (c) What does $R(t)$ tend to, and what share of $A(200)$ comes from the 1 percent scenario?

**P2 (🟡) *(Exegetical (a) · Evaluative (b).)*** An **invented** memo from a regional planning board, not the words of any real person or agency:

> "Our three advisers recommend discount rates of 1, 3 and 6 percent. Treating each view as equally likely, we split the difference and discount every horizon at their average, 3.33 percent. This gives each adviser equal weight at every horizon."

(a) Without computing, say whether 3.33 percent overstates or understates the certainty-equivalent rate at 150 years, and why; then say whether the memo's last sentence would be true of Weitzman's method instead. Three sentences. (b) The advisers disagree mainly about pure time preference. Give the strongest case for averaging their views as if they were probabilities, then the best reply. Any verdict passes. 150 words or fewer.

**P3 (🔴, optional) *(Exegetical (a)–(b).)*** Invented case. A country can adopt policy D (deplete a resource: higher consumption now, lower well-being for those alive in 250 years) or policy C (conserve). The choice changes who is born, so different people live in 250 years under each. An economist runs a cost-benefit analysis with a declining certainty-equivalent rate and finds D passes. A philosopher replies: "What we owe future people is not a matter of discounting at all." (a) Name the single premise on which they disagree, and say what argument could move either side. Two sentences. (b) Which of the two faces the non-identity problem in this case, and why does the other not? Two sentences.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c) · strict)*

(a) $t=1$: $A=(0.990099+0.961538+0.934579)/3=0.962072$, so $R=0.962072^{-1}-1=3.94$ percent.

$t=50$: $1.01^{-50}=0.608039$, $1.04^{-50}=0.140713$, $1.07^{-50}=0.033948$, so $A=0.782700/3=0.260900$ and $R=0.2609^{-1/50}-1=2.72$ percent.

$t=200$: $1.01^{-200}=0.136686$, $1.04^{-200}=0.000392$, $1.07^{-200}=0.0000013$, so $A=0.137079/3=0.045693$ and $R=0.045693^{-1/200}-1=1.55$ percent.

(b) At the certainty-equivalent factor: $0.045693\times 10^6=45{,}693$ dollars. At 4 percent: $1.04^{-200}\times 10^6=392$ dollars. The certainty-equivalent value is about 117 times larger.

(c) $R(t)\to 1$ percent. At 200 years the 1 percent scenario supplies $0.045562/0.045693=99.7$ percent of $A$.

**Must hit, strict:** $R$ of 3.94, 2.72 and 1.55 percent; present values of about 45,700 and 392 dollars; limit 1 percent, share about 99.7 percent.

**Wrong turns:** averaging the three rates and discounting at 4 percent (that is the memo's error in P2); using $R=-\ln A/t$ (continuous) while compounding annually, which gives 1.54 rather than 1.55 percent at 200 years; accept it if the convention is stated.

---

**P2** *(Exegetical (a), strict · Evaluative (b), graded on moves, not verdict)*

**Must hit, strict (a):**

- 3.33 percent overstates the certainty-equivalent rate at 150 years: discount factors are convex in the rate, so the average factor exceeds the factor at the average rate, and the gap grows with the horizon (the certainty-equivalent rate at 150 years is about 1.7 percent, heading toward 1).
- The memo's last sentence is false of Weitzman's method too: averaging factors gives each view equal probability, but at long horizons the 1 percent adviser's factor dominates the average, so the most patient view effectively decides.

**Must hit, any verdict (b):**

- The case for averaging, at strength: under moral uncertainty a planner who does not know which $\delta$ is correct should hedge across the views in proportion to her credence in each, as she would under empirical uncertainty; refusing to aggregate means silently picking one adviser.
- A reply that engages it: disagreement about a normative parameter is not a lottery over states of the world, so there may be no fact the probabilities track; or the choice to average factors rather than rates (or future values) is itself a value judgment the averaging was meant to avoid, and it hands the long run to the lowest rate.
- Whether it generalizes: if normative disagreement may be averaged here, it may be averaged everywhere (over $\eta$, over distributional weights), and the most extreme view in any panel gains leverage.

**Wrong turns:** answering (a) as if averaging rates were Weitzman's method; treating the advisers' spread as a forecast error that more data would shrink, when it is a dispute about $\delta$.

**Model answer (b), one of several:** The case for averaging: the board does not know which adviser has the ethics right, and a rational agent uncertain between hypotheses weights each by its credibility rather than betting everything on one. Refusing to aggregate is not neutral; it just picks a winner without saying so. The reply: a credence that $\delta$ "is" 1 percent presupposes a moral fact the board is uncertain about, and many who disagree about pure time preference deny there is such a fact to be uncertain of. Even granting the credences, the method of aggregation is a further choice: averaging factors makes the 1 percent adviser decisive for any long-run project, averaging future values makes the 6 percent adviser decisive, and nothing in the advisers' views picks between them. If the move is licensed here, it is licensed for every contested parameter.

---

**P3** *(Exegetical (a)–(b), strict on the identification; either side may be favoured in the "what could move it" clause)*

**Must hit, strict (a):**

- The crux: whether obligations to future people are fully captured by the value of outcomes, summed (with weights) across time. The economist affirms it; the philosopher denies it, holding that some obligations (a fair share, a threshold, a just savings constraint) bind regardless of present value.
- What could move either side: an argument that any choice among policies implies trade-off weights anyway (moves the philosopher toward the sum), or a case where a sum licenses an intolerable bequest that a constraint forbids (moves the economist toward constraints).

**Must hit, strict (b):**

- A person-affecting version of the philosopher's view faces non-identity: those born under D would not exist under C, so D makes none of them worse off than they would otherwise have been, and no one has a complaint.
- The economist's welfare sum does not: it compares the well-being of whoever lives under each policy, impersonally, so it can count D's lower well-being without a victim (though it then owes an account of population ethics if the numbers differ).

**Wrong turns:** naming "the discount rate is too high" as the crux, when the philosopher rejects the discounting frame, not its parameter; saying the non-identity problem defeats every objection to D, when impersonal and contractualist versions of the philosopher's view survive it.

**Model answer:** (a) They disagree about whether what we owe the people of 250 years from now is a weighted term in a sum of welfare across time or a constraint that holds whatever that sum says; the economist could be moved by a case where the sum endorses an intolerable bequest, the philosopher by the argument that choosing D or C commits one to weights anyway. (b) The philosopher's view, read as a complaint on behalf of particular people, faces non-identity, because no one born under D would have existed under C and so none is worse off for D. The economist's sum does not, because it compares well-being levels across outcomes impersonally rather than asking whether anyone is worse off than they would have been.

</details>

## Flashback

**From Lesson [4.1](04-01-why-discount.md) (Why discount?):** *(Formal (a) · Exegetical (b).)* Illustrative numbers. A coastal project costs 50,000 dollars now and yields 300,000 dollars of consumption in 60 years. The market return is 3.5 percent a year. A planner takes $\delta=0$, $\eta=1.2$ and growth $g=1.5$ percent, so the consumption discount factor is $(1+g)^{-\eta T}$.

(a) Compute what the 50,000 dollars would become if invested at the market return for 60 years, and the project's present value under the planner's discount factor. What does each test recommend?

(b) The alternative investment would be placed in a fund that each future parliament may spend as it likes. In two sentences: what must be true for the opportunity-cost verdict to leave the people of year 60 better off, and which earlier test is the argument an instance of?

<details>
<summary>Solution</summary>

(a) Invested at market: $50{,}000\times1.035^{60}=393{,}905$ dollars, more than the project's 300,000, so the opportunity-cost test says **reject**: invest at market and hand the future the larger sum. Under the planner's factor: $D=1.015^{-1.2\times60}=1.015^{-72}=0.34233$, so the present value is $300{,}000\times0.34233=102{,}699$ dollars, about twice the cost, so consumption discounting says **accept**. The two tests disagree because the planner's consumption rate, $1.015^{1.2}-1=1.80$ percent, is below the market's 3.5 percent.

**Must hit, strict:**

- (a) About 393,900 dollars at market (reject); present value about 102,700 dollars (accept).
- (b) The opportunity-cost verdict protects the future only if the alternative investment is actually made, left to compound for 60 years, and actually passed on to the people who would have received the project's benefits; a fund each parliament may spend gives no such guarantee.
- (b) The argument is a potential-compensation test, the Kaldor-Hicks test of [3.2](03-02-the-limits-of-pareto-and-the-compensation-tests.md) run across time: the future *could* be made better off, which is not the same as *being* made better off.

**Wrong turns:** taking $\delta=0$ to mean no discounting, and valuing the benefit at the full 300,000 dollars; growth still discounts consumption. Using $\eta=1$ ($1.015^{-60}$, a present value near 122,700) instead of the stated 1.2. In (b), answering that the market return might change: that is a forecasting worry, not the condition the argument needs.

**Model answer:** (a) The 50,000 dollars would grow to about 393,900 dollars at market, so the opportunity-cost test rejects the project; the planner values its benefit at about 102,700 dollars today, double the cost, so consumption discounting accepts it. (b) The rejection leaves the people of year 60 better off only if the 50,000 dollars is really invested, kept invested for 60 years, and handed to them, which a fund open to every future parliament does not secure. It is the Kaldor-Hicks potential-compensation test applied across generations, with the same gap between compensation that could be paid and compensation that is.

</details>

## Connections

- **Backward:** [4.1](04-01-why-discount.md) separated discounting utility from discounting consumption; Weitzman's argument concerns the consumption rate, and leaves $\delta$ where 4.1 left it. [4.2](04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) supplied $r=\delta+\eta g$, whose uncertain $g$ generates Example 1. Expected value over scenarios is the expected-utility machinery of [`grad-micro` 2.5](../../grad-micro/lessons/02-05-choice-under-uncertainty.md).
- **Forward:** Module 5 leaves time behind and asks which things markets should allocate at all, starting with [5.1](05-01-commodification.md). Population ethics, which the welfare sum owes in P3, is taught in [`decision-theory`](../../decision-theory/syllabus.md) 5.3-5.4.
- **Sideways:** the debt thread. [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) applies the same discount factor and the same non-identity problem to public debt left to the unborn, and [6.1](../../philosophy-of-debt/lessons/06-01-the-earth-belongs-to-the-living.md) gives Jefferson's claim that the earth belongs to the living, a constraint view of intergenerational duty in the philosopher's style of P3.

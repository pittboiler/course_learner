# Public Economics · Lesson 6.3: New dynamic public finance: the inverse Euler equation

> ⏱ ~15 min · Module 6: Capital taxation · Builds on: [5.2 The Mirrlees problem](05-02-the-mirrlees-problem.md), [6.1 Atkinson-Stiglitz](06-01-atkinson-stiglitz.md), [6.2 Chamley-Judd](06-02-chamley-judd-and-the-exploding-wedge.md) · Unlocks: [7.2 Optimal unemployment insurance](07-02-optimal-unemployment-insurance-baily-chetty.md)

## Why this matters

[6.1](06-01-atkinson-stiglitz.md) said: with a good nonlinear income tax and separable preferences, leave savings alone. [6.2](06-02-chamley-judd-and-the-exploding-wedge.md) said a capital tax that never ends becomes an ever-larger tax on the future. Both results come from models where nobody learns anything new about themselves after they start saving. Real people do: a career stalls, a skill goes out of date, a back gives out. Once your future earning power is both *risky* and *private*, the constrained-efficient allocation has a positive savings wedge. This lesson finds it. The approach, called the new dynamic public finance, treats the Mirrlees problem of [5.2](05-02-the-mirrlees-problem.md) as a problem that plays out over time.

## The idea

Picture a planner insuring young workers against the chance that their skill falls later in life. Full insurance would give everyone the same old-age consumption whatever happens. But skill is private, so a worker who stays productive could claim to have lost his skill, work less, and still collect. To stop that, the planner insures only partly: people who turn out productive and keep working consume more than people who don't.

Now let the worker save on his own. Saving is self-insurance. It is worth the most in the state where consumption is low, which is exactly the state a shirker lands in. So the worker who plans to claim "my skill fell" has the strongest reason to save beforehand, and a pile of savings makes that claim cheaper to live on. Saving and shirking go together. By making saving a little less attractive, the planner makes the lie less attractive, and can then offer more insurance.

A miniature, with invented numbers. Next year the worker will consume 0.5 if his skill falls (one chance in four) and 1.5 otherwise. Left to split consumption so that one more unit now and one more unit later feel equally valuable, he consumes less today, and so saves more, than the planner would choose for him. The gap is the savings wedge, and one inequality, Jensen's, produces it.

## The formal version

**Model.** Two periods. In period 1 everyone is identical, has resources $W$, and consumes $c_1$. At the start of period 2 each worker privately learns a skill (hourly wage) $\theta$, drawn from a known distribution. A worker with skill $\theta$ earns pre-tax income $y(\theta)=\theta\,l$ by working $l$ hours and consumes $c_2(\theta)$. Lifetime utility is

$$u(c_1)+\beta\,\mathbb{E}\Big[u\big(c_2(\theta)\big)-h\big(y(\theta)/\theta\big)\Big],$$

with $u$ increasing and concave, $h$ the increasing, convex disutility of hours, $\beta$ the discount factor, and $\mathbb{E}$ the expectation over $\theta$. Resources carry across periods at gross return $R$. The planner (the government as a [Mirrlees](../reference.md#mirrlees-problem) designer) picks $c_1$ and a menu $\{c_2(\theta),y(\theta)\}$ to maximize expected utility, subject to the resource constraint $c_1+\mathbb{E}[c_2(\theta)-y(\theta)]/R\le W$ and to [incentive compatibility](../reference.md#incentive-compatibility) in period 2: every type prefers its own bundle to any other type's.

**Result: the [inverse Euler equation](../reference.md#inverse-euler-equation)** (Rogerson 1985, *Econometrica*, for repeated moral hazard; Golosov, Kocherlakota and Tsyvinski 2003, *Review of Economic Studies*, for private skills). At an interior optimum

$$\frac{1}{u'(c_1)}=\frac{1}{\beta R}\,\mathbb{E}\left[\frac{1}{u'\big(c_2(\theta)\big)}\right].$$

*In words:* the planner equalizes the *resource cost* of delivering utility across periods, not the marginal utility of consumption.

**Proof by perturbation.** Raise $u(c_2(\theta))$ by a small $\delta$ in *every* state and lower $u(c_1)$ by $\beta\delta$. Expected utility is unchanged. Incentive compatibility is untouched, because every period-2 bundle gains the same $\delta$, so no type's ranking of the menu moves. (This step uses the separability of consumption from labor.) Period 1 frees $\beta\delta/u'(c_1)$ units of goods; period 2 needs $\delta/u'(c_2(\theta))$ extra units in state $\theta$, costing $\mathbb{E}[\delta/u'(c_2)]/R$ today. At an optimum this move can't free up resources:

$$\frac{\beta}{u'(c_1)}=\frac{1}{R}\,\mathbb{E}\left[\frac{1}{u'(c_2)}\right],$$

which rearranges to the inverse Euler equation. *In words:* $1/u'$ is the goods cost of one util, and the planner sets its discounted expectation equal across periods.

**The [savings wedge](../reference.md#savings-wedge).** The worker's own condition for saving at return $R$ is the standard Euler equation $u'(c_1)=\beta R\,\mathbb{E}[u'(c_2)]$ ([`grad-macro` 1.3](../../grad-macro/lessons/01-03-euler-transversality.md)). Define the implicit tax $\tau_s$ on the gross return $R$ by

$$u'(c_1)=(1-\tau_s)\,\beta R\,\mathbb{E}\big[u'(c_2)\big],\qquad\text{so}\qquad 1-\tau_s=\frac{1}{\mathbb{E}[1/u'(c_2)]\;\mathbb{E}[u'(c_2)]}.$$

*In words:* $\tau_s$ is the tax on saving that would make the planner's allocation the worker's own choice.

The function $x\mapsto 1/x$ is convex, so Jensen's inequality gives $\mathbb{E}[1/u'(c_2)]\ge 1/\mathbb{E}[u'(c_2)]$, with equality only if $u'(c_2)$ is the same in every state. Hence

$$u'(c_1)<\beta R\,\mathbb{E}\big[u'(c_2)\big]\quad\text{and}\quad\tau_s>0\qquad\text{whenever } c_2 \text{ varies with } \theta.$$

*In words:* at the planner's allocation a unit saved is worth more tomorrow than it costs today, so the worker wants to save more than the planner allows.

And $c_2$ must vary. If it didn't, a productive worker could report low skill, work less and consume the same, so incentive compatibility forces a spread. Private, evolving skill is what makes $\tau_s$ positive. Separability, the assumption [Atkinson-Stiglitz](../reference.md#atkinson-stiglitz) leaned on, still holds here.

## Picture

![The convex curve one over m plotted against marginal utility m. A chord joins the points for next-period consumption 1.5 and 0.5. Above the mean marginal utility of 1 the chord sits at 1.25, the inverse Euler current consumption, while the curve sits at 1, the standard Euler current consumption](assets/06-03-fig1.svg)

This is Example 1 under log utility, where $1/u'(c)=c$. The red dot on the chord is $\mathbb{E}[1/u']$, the planner's $c_1$. The blue dot on the curve is $1/\mathbb{E}[u']$, the worker's. The vertical gap between them is the wedge, and it grows with the spread of $c_2$.

## Worked examples

**Example 1 (clean): the wedge.** Invented numbers: $u=\ln c$, $\beta R=1$, and the planner's allocation gives $c_2=0.5$ with probability $1/4$ (skill fell) and $c_2=1.5$ with probability $3/4$. With log utility $1/u'(c)=c$.

- *Inverse Euler:* $c_1=\mathbb{E}[c_2]=\tfrac14(0.5)+\tfrac34(1.5)=1.25$.
- *Standard Euler:* $1/c_1=\mathbb{E}[1/c_2]=\tfrac14(2)+\tfrac34(\tfrac23)=1$, so $c_1=1$.
- *Wedge:* $1-\tau_s=1/(1.25\times1)=0.8$, so $\tau_s=0.2$. Check: at $c_1=1.25$, $u'(c_1)=0.8$ while $\beta R\,\mathbb{E}[u'(c_2)]=1$. Saving is worth 25 percent more than it costs, and a 20 percent tax on the gross return closes exactly that gap.

Facing no tax, this worker would consume 1 rather than 1.25 today and carry the difference forward: a buffer against the bad draw. The planner wants him to hold a smaller buffer, because the buffer is what makes "my skill fell" affordable.

**Example 2 (why you'd care): implementing it, and its limits.** Savings are hard to police, so the wedge has to come from a tax. A flat 20 percent tax on the gross return would do it in Example 1, but Kocherlakota (2005, *Econometrica*) showed a stranger option. A linear tax on wealth, with a rate that depends on the worker's period-2 earnings, can implement the optimum with **zero expected revenue**: a [zero expected wealth tax](../reference.md#zero-expected-wealth-tax). In this two-period setting the rate in state $\theta$ is

$$1-\tau(\theta)=\frac{u'(c_1)}{\beta R\,u'\big(c_2(\theta)\big)}.$$

*In words:* the after-tax return is high where consumption turns out high, and low where it turns out low.

In Example 1, $1-\tau(\theta)=c_2(\theta)/c_1$:

- low earnings: $1-\tau=0.5/1.25=0.4$, a 60 percent tax on the gross return;
- high earnings: $1-\tau=1.5/1.25=1.2$, a 20 percent subsidy.

The expected rate is $\tfrac14(0.6)+\tfrac34(-0.2)=0$, and the inverse Euler equation guarantees this in general, since $\mathbb{E}[1-\tau]=\frac{u'(c_1)}{\beta R}\,\mathbb{E}[1/u'(c_2)]=1$. The worker's Euler equation now holds exactly: $\mathbb{E}[(1-\tau)u'(c_2)]=\tfrac14(0.4)(2)+\tfrac34(1.2)(\tfrac23)=0.8=u'(c_1)$. The tax still discourages saving, because it bites hardest in the state where a unit of wealth is worth most. And it hits the save-and-shirk plan head on. Whoever saves and then reports low earnings loses 60 percent of the gross return.

The limits are real. The scheme needs individual wealth to be observed and linked to earnings. Its schedule, which taxes wealth most when earnings are low, looks nothing like any actual capital tax. And how large the gains are is a quantitative question: Farhi and Werning (2012, *Journal of Political Economy*) found that once general-equilibrium effects on the interest rate are counted, the welfare gain from the savings distortion is relatively small in their benchmark calibration. Which risks society should insure, and how heavily to weigh the unlucky, stays with the welfare objective, an input here ([`decision-theory`](../../decision-theory/syllabus.md), [`political-philosophy`](../../political-philosophy/syllabus.md)).

## Watch out

- **You might think a positive savings wedge means a positive tax on capital income, but actually the wedge is an implicit marginal distortion.** Kocherlakota's implementation delivers it with an average tax of zero.
- **You might think this refutes Atkinson-Stiglitz, but actually it relaxes a different assumption.** Separability still holds; what changed is that skill is revealed *after* the saving decision, so saving interacts with the incentive problem.
- **You might think the convex function is $1/u'(c)$ as a function of $c$, but actually Jensen is applied to $1/x$ as a function of marginal utility.** With CRRA $\gamma<1$, $c^{\gamma}$ is concave in $c$, yet the wedge is still positive.
- **You might think uncertainty alone creates the wedge, but actually uncertainty the planner can insure fully does not.** With observable skills, $c_2$ would not vary and $\tau_s=0$. The wedge comes from risk that is private *and* only partly insurable.

## One-liner

> When future skill is risky and private, saving is self-insurance that makes shirking affordable, so the planner equalizes $1/u'$ across time, and Jensen's inequality turns that into a positive savings wedge.

## Problems

**P1 (🟢) *(Formal.)*** Invented numbers: $\beta R=1$ and $u(c)=-1/c$ (CRRA with relative risk aversion 2, so $u'(c)=c^{-2}$). The planner's allocation gives $c_2=0.5$, $1$ or $2$ with probabilities $1/4$, $1/2$ and $1/4$. (a) Find the current consumption $c_1$ implied by the inverse Euler equation and by the standard Euler equation. (b) Find the savings wedge $\tau_s$, defined as a tax on the gross return. (c) Keep the same $c_2$ distribution but switch to $u=\ln c$. Find $\tau_s$ and say in one sentence why it is smaller.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** (a) Show that if the planner's $c_2$ is the same in every state, the inverse Euler and standard Euler equations coincide and $\tau_s=0$. Then show that $\tau_s>0$ whenever $c_2$ takes at least two values with positive probability. (b) This lesson's preferences, $u(c)-h(y/\theta)$, are weakly separable between consumption and labor, yet the optimal savings wedge is positive. Which assumption behind [6.1](06-01-atkinson-stiglitz.md)'s zero-savings-tax result fails here, and why does its failure give the planner a reason to discourage saving? Two sentences.

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** Invented numbers: $\beta R=1$, $u'(c)=c^{-2}$, and the planner's allocation gives $c_2=1$ or $c_2=2$ with equal probability. (a) Find $c_1$ from the inverse Euler equation. (b) Find the Kocherlakota tax rate $\tau(\theta)$ on the gross return in each state, and check that its expected value is zero and that the worker's Euler equation $u'(c_1)=\beta R\,\mathbb{E}[(1-\tau)u'(c_2)]$ holds. (c) Find the uniform tax on the gross return that would have the same effect on saving, and explain in two sentences how a tax that averages zero can discourage saving.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) With $u'(c)=c^{-2}$, $1/u'(c)=c^2$. Inverse Euler: $c_1^2=\mathbb{E}[c_2^2]=\tfrac14(0.25)+\tfrac12(1)+\tfrac14(4)=\tfrac{25}{16}$, so $c_1=1.25$. Standard Euler: $c_1^{-2}=\mathbb{E}[c_2^{-2}]=\tfrac14(4)+\tfrac12(1)+\tfrac14(0.25)=\tfrac{25}{16}$, so $c_1=0.8$.

(b) $1-\tau_s=\dfrac{1}{\mathbb{E}[c_2^2]\,\mathbb{E}[c_2^{-2}]}=\dfrac{1}{(25/16)^2}=\dfrac{256}{625}=0.4096$, so $\tau_s=\tfrac{369}{625}\approx0.590$. Check: at $c_1=1.25$, $u'(c_1)=0.64$, and $0.4096\times\tfrac{25}{16}=0.64$.

(c) With log utility, $\mathbb{E}[c_2]=\tfrac98$ and $\mathbb{E}[1/c_2]=\tfrac14(2)+\tfrac12(1)+\tfrac14(0.5)=\tfrac98$, so $1-\tau_s=\tfrac{64}{81}$ and $\tau_s=\tfrac{17}{81}\approx0.210$. It is smaller because marginal utility varies less across the same consumption spread when curvature is lower, so the Jensen gap between $\mathbb{E}[1/u']$ and $1/\mathbb{E}[u']$ shrinks.

**Wrong turns:** applying the inverse Euler equation to $c_2$ itself, $c_1=\mathbb{E}[c_2]=1.125$, which holds only for log utility; defining the wedge on the net interest rate rather than the gross return.

---

**P2** *(Formal (a) · Exegetical (b).)*

(a) If $c_2=\bar c$ in every state, $\mathbb{E}[1/u'(c_2)]=1/u'(\bar c)$ and $\mathbb{E}[u'(c_2)]=u'(\bar c)$. The inverse Euler equation becomes $1/u'(c_1)=1/(\beta R\,u'(\bar c))$, which is the standard Euler equation $u'(c_1)=\beta R\,u'(\bar c)$, and $1-\tau_s=1/\big(u'(\bar c)^{-1}u'(\bar c)\big)=1$. If $c_2$ takes two or more values, then so does $u'(c_2)$, since $u'$ is strictly decreasing. Jensen's inequality for the strictly convex $1/x$ is then strict, $\mathbb{E}[1/u']>1/\mathbb{E}[u']$, so $\mathbb{E}[1/u']\,\mathbb{E}[u']>1$ and $\tau_s>0$.

**Must hit, strict (b):**

- The failing assumption: in Atkinson-Stiglitz each person's skill is fixed and known when saving is chosen (no uncertainty about it). Here skill is revealed only after the saving decision and is private. Naming separability as the failure is wrong, since it holds.
- The mechanism: saving is self-insurance that is worth most in the low-skill state, so it makes misreporting skill cheaper; discouraging saving relaxes the incentive constraint.

**Wrong turns:** answering "non-separability", which the stem rules out; answering "the income tax is not optimal", when the planner here uses the fully optimal nonlinear menu.

**Model answer (b):** Atkinson-Stiglitz assumes skill is known before anyone saves, while here it is risky and privately revealed after the saving decision, so separability is not enough. Savings then act as private insurance against a low skill draw, which makes claiming low skill cheaper, and a wedge on saving relaxes that incentive constraint and lets the planner insure more.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) $c_1^2=\mathbb{E}[c_2^2]=\tfrac12(1)+\tfrac12(4)=2.5$, so $c_1=\sqrt{2.5}\approx1.581$, and $u'(c_1)=1/2.5=0.4$.

(b) $1-\tau(\theta)=\dfrac{u'(c_1)}{u'(c_2(\theta))}=\dfrac{c_2(\theta)^2}{2.5}$. Low state: $1-\tau=0.4$, so $\tau=0.6$. High state: $1-\tau=1.6$, so $\tau=-0.6$, a 60 percent subsidy. Expected rate: $\tfrac12(0.6)+\tfrac12(-0.6)=0$. Worker's Euler equation: $\tfrac12(0.4)(1)+\tfrac12(1.6)(0.25)=0.2+0.2=0.4=u'(c_1)$.

(c) Without the tax, $\mathbb{E}[u'(c_2)]=\tfrac12(1)+\tfrac12(0.25)=0.625$. The uniform rate solves $0.4=(1-\tau_s)(0.625)$, so $\tau_s=0.36$, matching $1-1/\big(\mathbb{E}[c_2^2]\,\mathbb{E}[c_2^{-2}]\big)=1-1/(2.5\times0.625)=0.36$.

**Must hit, strict (c):**

- The tax is high exactly in the state where marginal utility is high, so it removes wealth when wealth is worth most; its utility-weighted expectation is positive even though its plain expectation is zero.
- The effect on saving runs through that covariance with $u'(c_2)$, not through average revenue.

**Wrong turns:** concluding from the zero mean that saving is undistorted; computing $1-\tau$ as $c_2/c_1$, which is the log-utility formula.

**Model answer (c):** The tax takes 60 percent of the return in the low-consumption state, where each unit is worth four times as much in utility as in the high state, and pays a 60 percent subsidy where units are worth little. Weighted by marginal utility, the saver expects to lose, so saving is discouraged exactly as much as by a uniform 36 percent tax, while the tax raises no revenue on average.

</details>

## Flashback

**From Lesson [6.1](06-01-atkinson-stiglitz.md) (Atkinson-Stiglitz: should savings be taxed at all?):** *(Formal (a)–(b) · Exegetical (c).)* Invented numbers. Everyone's goods utility is $\ln x_1+2\ln x_2$, weakly separable from labor. Producer prices are 1 for both goods. A worker with net income 120 dollars faces a 33.1 percent tax on good 2 only ($q_2=1.331$) and no tax on good 1. (a) Find the uniform tax rate $t$ on *both* goods that leaves this worker exactly as well off, with his net income still 120. (b) Find the revenue under each scheme, and say whether a mimicker who also spends 120 is better or worse off after the switch. (c) Now suppose good 2 is childcare, needed more the more hours you work, so separability fails. In one sentence: should a compensated tax or a compensated subsidy fall on it, and why?

<details>
<summary>Solution</summary>

(a) With these weights a worker spends $1/3$ of his budget on good 1 and $2/3$ on good 2, so goods utility is $3\ln B-\ln q_1-2\ln q_2+\text{const}$. The two schemes give equal utility when $(1+t)^3=1.331^2$, so $1+t=1.331^{2/3}=1.21$ and $t=21$ percent.

(b) *Good 2 taxed:* the basket is $x_1=40$ and $x_2=80/1.331=60.11$, so revenue is $0.331\times60.11=19.89$. *Uniform 21 percent:* the basket is $x_1=40/1.21=33.06$ and $x_2=80/1.21=66.12$, so revenue is $0.21\times99.17=20.83$. That is the same as cutting net income to $120/1.21=99.17$ with no commodity taxes at all. Revenue rises by $0.93$, the excess burden of the differentiated tax. The mimicker has the same 120, faces the same prices and has the same $\phi$, so he buys the same basket and his goods utility is unchanged. The incentive constraint does not move.

**Must hit, strict (c):**

- The genuine low type works more hours than a mimicker who earns the same income, so he buys *more* childcare.
- A compensated tax would then hit the low type harder than the mimicker and make mimicking more attractive. The screening motive calls for a compensated **subsidy**, which is Corlett-Hague run in reverse: subsidize goods complementary with work.

**Model answer (c):** Subsidize it: the mimicker works fewer hours and buys less childcare than the person he imitates, so a compensated subsidy helps the genuine low type more than the mimicker and slackens the high type's incentive constraint.

**Wrong turns:** finding $t$ by matching revenue instead of utility; taking the uniform rate to be the average of 33.1 percent and zero; carrying 6.1's "tax the good complementary with leisure" over to childcare without noticing that childcare goes with work, which flips the sign.

</details>

## Connections

- **Backward:** the period-2 menu is [5.2](05-02-the-mirrlees-problem.md)'s screening problem, and the perturbation works because shifting every bundle by the same utility leaves [incentive compatibility](../reference.md#incentive-compatibility) intact. [6.1](06-01-atkinson-stiglitz.md) is the case with no new information after saving; this lesson adds that information and gets a wedge.
- **Forward:** [7.2](07-02-optimal-unemployment-insurance-baily-chetty.md) faces the same trade-off between insurance and incentives in a single period, with job loss in place of a skill shock and a sufficient-statistics formula in place of a full planner problem.
- **Sideways:** the inverse Euler equation first appeared in Rogerson's repeated moral hazard problem, the dynamic version of [`grad-micro` 5.4](../../grad-micro/lessons/05-04-moral-hazard-principal-agent.md): a firm paying a worker over time wants to restrict the worker's private saving for the same reason. [`grad-macro` 5.2](../../grad-macro/lessons/05-02-precautionary-saving.md) used Jensen on $u'$ to show uninsured risk *raises* saving; here Jensen on $1/u'$ shows the planner wants saving held *below* what the worker would choose. Farhi and Werning measure the gains in an incomplete-markets economy of the kind built in the Aiyagari model of [`grad-macro` 6.4](../../grad-macro/lessons/06-04-heterogeneous-agent-taste.md).

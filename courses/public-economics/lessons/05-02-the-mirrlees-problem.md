# Public Economics · Lesson 5.2: The Mirrlees problem

> ⏱ ~15 min · Module 5: Optimal income taxation · Builds on: [5.1 The linear income tax](05-01-the-linear-income-tax.md), [`grad-micro` 5.3 Screening](../../grad-micro/lessons/05-03-screening.md), [`grad-game-theory` 5.2 The revelation principle](../../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md) · Unlocks: [5.3 The Saez formula](05-03-the-saez-formula.md), [6.1 Atkinson-Stiglitz](06-01-atkinson-stiglitz.md), [6.3 The inverse Euler equation](06-03-the-inverse-euler-equation.md)

## Why this matters

[5.1](05-01-the-linear-income-tax.md) chose the best flat rate. But why flat? The government could post *any* schedule of tax against income: brackets, phase-outs, credits. James Mirrlees (1971, *RES*) asked what the best schedule is when the government sees what you earn but not what you *could* earn. His answer turned redistribution into a screening problem, and it is the frame every later lesson in this module, and Module 6, works inside. Its most famous by-product is a paradox: the very top earner should face a zero marginal rate.

## The idea

Two people, Low and High. High earns more per hour. If the government could see hourly skill, it would tax skill itself: a lump sum on High, a transfer to Low, and everyone works the efficient amount. That kind of tax destroys nothing, because nobody can change their skill to dodge it.

The government sees only earnings. So High has an escape: work fewer hours, earn exactly what Low earns, and collect Low's transfer. The skill tax collapses. Whatever package the government offers, High must prefer his own.

Here is the trick, the same one [`grad-micro` 5.3](../../grad-micro/lessons/05-03-screening.md) played. To make Low's package less tempting to High, shrink it: ask Low to earn a little less, and give him a little less. Starting from Low's efficient hours, the first few he gives up cost him almost nothing, since at the margin his time was worth exactly what it earned. High, imitating Low, would lose the same consumption but win back fewer hours, because he earns each dollar faster. The shrunken package tempts High less, so the government can take more from High without triggering the imitation. That shrinkage is a **marginal tax on Low**. High, whom nobody wants to imitate, is left undistorted.

## The formal version

**Setup.** Types $i\in\{L,H\}$ with wages (skills) $w_L<w_H$ and population shares $\pi_L,\pi_H$ summing to one. A type-$i$ worker earning pre-tax income $y$ and consuming $c$ gets

$$U_i=c-h\!\left(\frac{y}{w_i}\right),\qquad h(\ell)=\tfrac12\ell^2,$$

where $\ell=y/w_i$ is hours and $h$ the disutility of work. Quasilinearity is an assumption: it removes income effects, so a bundle's attractiveness depends only on hours. The government sees $y$, not $w_i$. It offers a menu of bundles $(y_i,c_i)$; by the revelation principle ([`grad-game-theory` 5.2](../../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md)) no tax schedule can do better. By the [taxation principle](../reference.md#taxation-principle), a menu is a schedule $T(y)=y-c$, with every income off the menu taxed so heavily that no one chooses it. The [Mirrlees problem](../reference.md#mirrlees-problem) is

$$\begin{aligned}&\max\ \sum_i \pi_i\, g_i\, U_i\quad\text{s.t.}\quad \sum_i\pi_i(y_i-c_i)\ge 0,\\ &U_H\ge c_L-h(y_L/w_H),\qquad U_L\ge c_H-h(y_H/w_L).\end{aligned}$$

*In words:* maximize weighted welfare subject to budget balance and [incentive compatibility](../reference.md#incentive-compatibility): each type prefers its own bundle, evaluated with its own wage. The $g_i$ are [social marginal welfare weights](../reference.md#social-marginal-welfare-weights), averaging one ($\pi_Lg_L+\pi_Hg_H=1$); with quasilinear utility they are simply the value society puts on a dollar to each type. They are inputs, not conclusions: which weights are right belongs to [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md) and [`political-philosophy`](../../political-philosophy/syllabus.md). Unlike the monopolist of `grad-micro` 5.3, the government faces no participation constraint (nobody opts out of the tax code); the budget constraint pins the levels instead.

**Single crossing.** In the $(y,c)$ plane, type $i$'s indifference curve has slope $dc/dy=h'(y/w_i)/w_i=y/w_i^2$, the extra consumption needed to earn one more dollar. It falls with $w_i$: High's curves are flatter everywhere, so two types' curves cross once ([single crossing](../reference.md#single-crossing)). *In words:* earning another dollar hurts the skilled less.

**Implicit marginal rate.** Facing a smooth schedule, a worker sets $1-T'(y)$ equal to that slope, the marginal rate of substitution. So define

$$\tau_i\equiv 1-\mathrm{MRS}_i,\qquad \mathrm{MRS}_i=\frac{h'(y_i/w_i)}{w_i\,u'(c_i)}=\frac{y_i}{w_i^2}\ \text{here}.$$

*In words:* the [implicit marginal tax rate](../reference.md#implicit-marginal-tax-rate) is the wedge between what one more dollar of earnings is worth to the worker in consumption and the dollar itself. Laissez-faire has $y_i=w_i^2$ and $\tau_i=0$.

**Solution.** Suppose redistribution runs toward Low ($g_H<1$), so High's IC binds and Low's is slack. With multipliers $\lambda$ on the budget and $\mu$ on High's IC, the $c$ conditions are $\pi_Hg_H+\mu=\lambda\pi_H$ and $\pi_Lg_L-\mu=\lambda\pi_L$. Adding them gives $\lambda=1$, so $\mu=\pi_H(1-g_H)$. The $y$ conditions give

$$\frac{y_H}{w_H^2}=1,\qquad \frac{\tau_L}{1-\tau_L}=\frac{\pi_H}{\pi_L}\,(1-g_H)\left(1-\frac{w_L^2}{w_H^2}\right).$$

*In words:* High works the efficient amount ([no distortion at the top](../reference.md#no-distortion-at-the-top)); Low's rate rises with the mass of High relative to Low (the rent saved per unit of distortion), with how little society values High's dollar, and with the skill gap. Stiglitz (1982, *JPubE*) worked out this two-type model along the whole Pareto frontier. If the weights favored High ($g_H>1$), Low's IC would bind instead and High's labor would be distorted *upward* (Problem 2).

## Picture

![The income-consumption plane with the no-tax diagonal. The low type's indifference curve is tangent at its bundle L, near income 3.1, with slope 0.78. The high type's flatter indifference curve passes through both L and the high type's bundle H at income 9, where its slope is 1. A dot on the diagonal at income 4 marks the low type's laissez-faire bundle](assets/05-02-fig1.svg)

This is Example 1 under maximin. One red curve through both bundles *is* the binding IC: High is exactly indifferent. L sits above the diagonal (a net transfer) and left of laissez-faire (distorted); H sits below it (a net tax) with slope 1, undistorted.

## Worked examples

**Example 1 (the model on a clean case).** Invented economy: $w_L=2$, $w_H=3$, $\pi_L=\tfrac23$, $\pi_H=\tfrac13$. Laissez-faire: $y_L=4$, $y_H=9$, utilities 2 and 4.5.

*Why the skill tax fails.* A maximin government with full information would keep $y=(4,9)$ and equalize utilities: $c_L=4.83$, $c_H=7.33$, both utilities $2.83$. But High, earning 4 instead, would need only $4/3$ hours, and get $4.83-\tfrac12(4/3)^2=3.94>2.83$. He imitates.

*Solve with IC,* under three objectives. Here $\pi_H/\pi_L=\tfrac12$ and $1-w_L^2/w_H^2=\tfrac59$:

| Objective | $g_L,\ g_H$ | $\tau_L$ | $y_L$ | $c_L$ | $c_H$ | $U_L$ |
|---|---|---|---|---|---|---|
| Utilitarian | 1, 1 | 0 | 4 | 4 | 9 | 2 |
| Weighted | 1.25, 0.5 | $5/41=0.122$ | 3.51 | 4.07 | 7.88 | 2.53 |
| Maximin | 1.5, 0 | $5/23=0.217$ | 3.13 | 3.77 | 7.72 | 2.54 |

In every row $y_H=9$. For maximin: $\tau_L/(1-\tau_L)=\tfrac12\cdot1\cdot\tfrac59=\tfrac5{18}$, so $\tau_L=\tfrac5{23}$ and $y_L=4(1-\tfrac5{23})=3.13$. Binding IC gives $c_H-c_L=(9^2-3.13^2)/18=3.96$, and the budget $\tfrac23c_L+\tfrac13c_H=\tfrac23(3.13)+3$ then gives the consumptions. With quasilinear utility the utilitarian has no reason to redistribute, so laissez-faire is optimal (it is one of many optima: any lump-sum reshuffle that keeps IC leaves utilitarian welfare unchanged).

Read the table down its columns. The weights never touch High's income: $y_H=9$ in every row. The less society values High's dollar, the more it wants from High, and the only way to get it without imitation is to push Low's income further below 4. The rate on Low is the price of the rent extracted from High, paid in Low's forgone output.

*Verify IC both ways (maximin).* High: own bundle $7.72-\tfrac12(9/3)^2=3.22$; Low's bundle $3.77-\tfrac12(3.13/3)^2=3.22$: indifferent, as binding requires. Low: own $2.54$; High's bundle $7.72-\tfrac12(9/2)^2=-2.40$. Slack.

*As a tax schedule:* $T(3.13)=-0.64$ (a transfer) and $T(9)=1.28$; the budget checks: $\tfrac23(-0.64)+\tfrac13(1.28)=0$. High pays positive tax at a zero marginal rate. The price of hidden skill: Low's utility is $2.54$ against $2.83$ with full information, though still above laissez-faire's 2.

**Example 2 (why you'd care: the zero top rate).** Add a third type, $w=(2,3,4)$, equal shares, maximin. Repeating the derivation with a multiplier on each adjacent downward IC (the binding ones, as a numerical check with all six ICs confirms) gives

$$\frac{\tau_k}{1-\tau_k}=\frac{M_k}{\pi_k}\left(1-\frac{w_k^2}{w_{k+1}^2}\right),\qquad M_k=\sum_{j>k}\pi_j(1-g_j).$$

*In words:* the rate at skill $k$ weighs the revenue from everyone *above* ($M_k$) against the distortion at $k$ (its mass $\pi_k$). Here $M=(\tfrac23,\tfrac13,0)$, so

$$\tau_1=\tfrac{10}{19}=0.526,\qquad \tau_2=\tfrac7{23}=0.304,\qquad \tau_3=0.$$

The rate falls toward the top and hits zero there, because at the top $M=0$: raising the marginal rate on the last dollar anyone earns collects nothing from anyone above and only distorts. Sadka (1976, *RES*) and Seade (1977, *JPubE*) proved the continuous version: with a bounded skill distribution, the marginal rate at the very top is zero. Read it carefully. It is a statement about one point, not about high incomes in general, and the top earner still pays a large *average* tax. Whether it should steer real policy is [5.3](05-03-the-saez-formula.md)'s question.

## Watch out

- **You might think the implicit rate is the tax paid, but actually it is a slope.** In Example 1 Low *receives* 0.64 yet faces a 22 percent marginal rate; High pays 1.28 at a zero marginal rate.
- **You might think "no distortion at the top" means the rich are taxed lightly, but actually it concerns the type nobody wants to imitate.** Reverse the weights and the binding IC flips, putting the distortion on High (Problem 2).
- **You might think the low type's distortion hurts it for nothing, but actually it relaxes High's IC,** freeing revenue that the objective values more than Low's lost hours.
- **You might think the government must learn who is skilled, but actually it never does.** It needs the distribution of skills to design the menu; each worker then reveals his type by his choice, and the menu is built so that telling the truth pays.
- **You might carry over `grad-micro`'s binding IR, but actually there is none:** the budget constraint sets the levels.

## One-liner

> Hidden skill turns redistribution into screening: tax the able through the menu, not the rate, by shrinking the bundles below them, so every rate is positive except at the top, where no one is left to screen.

## Problems

**P1 (🟢) *(Formal.)*** An invented economy has the lesson's utility $c-\tfrac12(y/w)^2$ with $w_L=2$, $w_H=4$, $\pi_L=0.8$, $\pi_H=0.2$, and weights with $g_H=0.4$. (a) Find $g_L$, $\tau_L$, $y_L$ and $y_H$ at the optimum. (b) A reform would set Low's implicit marginal rate at 20 percent. What $g_H$ would make that optimal, and what is the highest $\tau_L$ that any nonnegative weights can justify in this economy?

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** Keep Example 1's economy ($w=(2,3)$, $\pi=(\tfrac23,\tfrac13)$), but now take the weights $g_L=0.9$, $g_H=1.2$ as given. (a) Which incentive constraint binds? Find $y_L$, $y_H$ and both implicit marginal rates. (b) In two sentences, state the general rule for which type is left undistorted, and why.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** (a) In Example 1's economy under maximin ($g_H=0$), keep the wages but let the population share of High vary. At what $\pi_H$ does Low's implicit rate reach 50 percent, and what is $y_L$ then? (b) In [`grad-micro` 5.3](../../grad-micro/lessons/05-03-screening.md), the monopolist's low-type quantity is $q_L=\theta_L-\frac{\lambda}{1-\lambda}(\theta_H-\theta_L)$, where $\lambda$ is the share of high types. Map each factor of this lesson's $\tau_L$ formula onto that problem, say which objective in this lesson corresponds to the monopolist, and name what replaces the monopolist's binding IR$_L$.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) Weights average one: $0.8\,g_L+0.2(0.4)=1$, so $g_L=0.92/0.8=1.15$. With $\pi_H/\pi_L=0.25$ and $1-w_L^2/w_H^2=1-\tfrac4{16}=0.75$:

$$\frac{\tau_L}{1-\tau_L}=0.25\times0.6\times0.75=0.1125,\qquad \tau_L=\frac{0.1125}{1.1125}=\frac9{89}=0.101.$$

Then $y_L=w_L^2(1-\tau_L)=4\times\tfrac{80}{89}=3.60$ and $y_H=w_H^2=16$ (no distortion at the top).

(b) A 20 percent rate needs $\tau_L/(1-\tau_L)=0.25$, so $0.25\,(1-g_H)(0.75)=0.25$, giving $1-g_H=\tfrac43$ and $g_H=-\tfrac13$: a negative weight on High, which no nonnegative weighting supplies. The largest rate comes from $g_H=0$ (maximin): $\tau_L/(1-\tau_L)=0.1875$, so $\tau_L=\tfrac3{19}=0.158$.

**Wrong turns:** forgetting $\pi_H/\pi_L$ (using 0.2 or leaving it out); plugging in $1-w_L/w_H$ instead of the squared ratio; setting $\tau_L/(1-\tau_L)$ equal to 0.2 rather than converting the 20 percent rate.

---

**P2** *(Formal (a) · Exegetical (b).)*

(a) Now $g_H>1$: society values High's dollar above average, so the government wants to move resources toward High, and it is **Low** who would imitate. Low's IC binds, $U_L=c_H-\tfrac12(y_H/w_L)^2$, with multiplier $\mu=\pi_H(g_H-1)=\tfrac13(0.2)=\tfrac1{15}$ (equivalently $\pi_L(1-g_L)$, again with $\lambda=1$).

- Low's labor is undistorted: $y_L=w_L^2=4$, $\tau_L=0$.
- High's $y$ condition: $\pi_Hg_H\,y_H/9-\mu\,y_H/4=\pi_H$, that is, $y_H(0.1333-0.05)=1$, so $y_H=12$.
- $\mathrm{MRS}_H=12/9=\tfrac43$, so $\tau_H=1-\tfrac43=-\tfrac13$: a marginal *subsidy*, and High works more than the efficient 9.

Check: the budget and Low's binding IC give $c_L=1.33$, $c_H=17.33$; Low gets $1.33-2=-0.67$ from its own bundle and $17.33-\tfrac12(12/2)^2=-0.67$ from High's (binding); High gets $9.33$ from its own and $0.44$ from Low's (slack).

**Must hit, strict (b):**

- The undistorted type is the one whose IC binds, the would-be imitator: nobody wants its bundle, so distorting it buys nothing.
- The type being imitated has its bundle distorted in the direction that makes it less attractive to the imitator (Low's income down when High imitates; High's income up when Low imitates), and which type imitates is set by the direction of redistribution.

**Wrong turns:** assuming High's IC binds because High is "the top"; reporting $\tau_H=+\tfrac13$ by computing $\mathrm{MRS}-1$ instead of $1-\mathrm{MRS}$.

**Model answer (b):** The type that would like to imitate the other (the one the weights redistribute away from) has a binding IC and faces a zero marginal rate, because nobody wants its bundle. The other type's bundle is distorted in whichever direction makes it less tempting to the imitator, which is downward for Low when High imitates and upward for High when Low imitates.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) Under maximin, $\tau_L/(1-\tau_L)=\frac{\pi_H}{1-\pi_H}\cdot\tfrac59$. A 50 percent rate needs this ratio to equal 1, so $\pi_H/(1-\pi_H)=\tfrac95$ and $\pi_H=\tfrac9{14}=0.643$. Then $y_L=4(1-\tfrac12)=2$.

**Must hit, strict (b):**

- $\pi_H/\pi_L$ is the monopolist's $\lambda/(1-\lambda)$: the mass of rent saved per unit of distortion at the bottom.
- $1-w_L^2/w_H^2$ plays the role of $\theta_H-\theta_L$: how much more the imitator gains from the low bundle, which is the rent at stake.
- $1-g_H$ equals 1 for the monopolist, who puts no weight on the high type's surplus; that is maximin ($g_H=0$) here.
- The government has no participation constraint; the budget constraint replaces IR$_L$ in pinning the levels.

**Wrong turns:** mapping $\lambda$ to the budget multiplier rather than to the population share; saying the tax problem also has a binding IR for Low.

**Model answer (b):** $\pi_H/\pi_L$ is $\lambda/(1-\lambda)$, and the squared skill gap $1-w_L^2/w_H^2$ does the work of $\theta_H-\theta_L$, the size of the rent the imitator could grab. The factor $1-g_H$ equals one for a monopolist, who values the high type's surplus at zero, so the maximin government is the monopolist's case. Nobody can refuse the tax system, so there is no IR; the budget constraint pins the levels instead.

</details>

## Flashback

**From Lesson [4.3](04-03-production-efficiency-diamond-mirrlees.md) (Production efficiency: Diamond-Mirrlees):** *(Formal (a)–(b) · Exegetical (c).)* Invented numbers. Competitive, constant-returns firms make a final good from labor (wage 1) and an intermediate input $m$, which is itself made one-for-one from labor, so the untaxed input price is 1. At input price $p_m$ the final good's unit cost is $p_m^{1/4}$, and the cost-minimizing inputs per unit of output are $m=\kappa/(4p_m)$ and $L=3\kappa/4$, where $\kappa$ is that unit cost. The final good's consumer price is 1.10 in every case below, and consumers buy 50 units at that price. (a) What unit tax on $m$ raises the consumer price from 1 to 1.10? Per unit of output, find the tax revenue, the real resources used ($m+L$), and the share of the 0.10 wedge that is wasted. (b) The input tax is replaced by a tax on the final good that keeps its price at 1.10. Find total revenue under each tax, and explain the difference. (c) Now suppose the final good is sold by firms the tax authority cannot see, though they buy $m$ from registered suppliers. In one sentence, does (b)'s replacement still work, and which condition of the Diamond-Mirrlees theorem fails?

<details>
<summary>Solution</summary>

(a) Unit cost must reach 1.10, so $p_m=1.1^4=1.4641$: a tax of 0.4641 per unit of $m$, about 46 percent. Per unit of output, $m=1.1/(4\times1.4641)=0.1878$ and $L=3(1.1)/4=0.825$, so resources used are 1.0128 and revenue is $0.4641\times0.1878=0.0872$. Check: $1.0128+0.0872=1.10$, the consumer price. Of the 0.10 wedge, 0.0128, about 13 percent, is resources wasted on the wrong input mix.

(b) The input tax raises $50\times0.0872=4.36$. The final-good tax of 0.10 leaves firms at the least-cost mix ($m=0.25$, $L=0.75$, resources exactly 1) and raises $50\times0.10=5.00$. Consumers face the same price and buy the same 50 units either way, so the 0.64 gap is pure gain: it equals $50\times0.0128$, the production waste turned into revenue.

**Must hit, strict (c):**

- No: the replacement needs a tax on the final good, and those sellers cannot be taxed, so the input tax may be the only handle on that base.
- Condition (i) fails: the government cannot set the consumer price of every final good independently.

**Model answer (c):** It no longer works, because the final-good tax cannot reach invisible sellers, so the input tax is the only way to tax that consumption; the theorem's condition that every final good can be taxed directly has failed.

**Wrong turns:** computing revenue with the untaxed input mix ($0.4641\times0.25=0.116$), which exceeds the whole 0.10 wedge; treating the input tax as a final-good tax in disguise, which holds only with fixed proportions.

</details>

## Connections

- **Backward:** [5.1](05-01-the-linear-income-tax.md) restricted the schedule to a straight line; this lesson frees it. The IC-and-single-crossing machinery is [`grad-micro` 5.3](../../grad-micro/lessons/05-03-screening.md) with the government as the screener and skill as the type, and $\mu$ is a Kuhn-Tucker multiplier ([`grad-micro` 1.3](../../grad-micro/lessons/01-03-inequality-constraints-kuhn-tucker.md)). The lump-sum skill tax is the first-best that [2.3](02-03-excess-burden-and-the-harberger-triangle.md) said has no excess burden, now shown to be unavailable.
- **Forward:** [5.3](05-03-the-saez-formula.md) replaces types with an observable income distribution and a perturbation, and explains why the zero top rate says little about real top rates. [5.4](05-04-participation-and-the-eitc.md) handles the bottom, where the choice to work at all matters. [6.1](06-01-atkinson-stiglitz.md) asks, inside this very model, whether commodity or savings taxes can add anything; [6.3](06-03-the-inverse-euler-equation.md) makes skill risky and dynamic.
- **Sideways:** the revelation principle is [`grad-game-theory` 5.2](../../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md). Which weights to feed in (utilitarian, maximin, anything between) is for [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md), [`decision-theory`](../../decision-theory/syllabus.md) and [`political-philosophy`](../../political-philosophy/syllabus.md); this course only computes what each implies.

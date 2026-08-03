# Grad Microeconomics · Lesson 5.3: Screening

> ⏱ ~15 min · Module 5: Information economics · Builds on: [5.2 Signaling](05-02-signaling.md) · Unlocks: [5.4 Moral hazard and the principal–agent problem](05-04-moral-hazard-principal-agent.md)

## Why this matters

In signaling, the person who knows their type moves first, burning money to prove they're good. Screening flips the table: the **uninformed** party moves first. An insurer who can't see your risk, a monopolist who can't see your willingness to pay, an employer who can't see your ability — each designs a *menu* of deals so cleverly that you sort yourself by which one you pick. Choose the gold plan and you've confessed you're high-value; choose the bronze and you've confessed the opposite. This one idea — self-selection through a menu — is the engine behind insurance tiers, airline fare classes, versioned software, and (next chapter) second-degree price discrimination. It is also where a startling piece of theory lives: the best-off type gets a perfectly efficient deal, and everyone below them gets deliberately damaged goods.

## The idea

You run a firm facing two kinds of customers, "high" and "low," but you can't tell them apart at the door. You could post one price, but you'll leave money on the table. Instead you offer two packages and let each customer *reveal itself by choosing*.

The catch is that a high-value customer would love to grab the cheap package meant for the low type — pay little, get a bit less, still come out ahead. So the menu has to be built so that **each type strictly prefers the package designed for it**. That's the whole art. Two forces pin the menu down:

- **Participation (IR):** each type must prefer its package to walking away.
- **Incentive compatibility (IC):** each type must prefer *its own* package to the *other's*.

Here's the punchline you should hold onto before any algebra. To stop the high type from slumming it in the low type's deal, you make the low type's deal *worse* — smaller, stingier — so it's less tempting to imitate. That's cheap for you because each unit of shrinkage costs the low type only a little but saves you a lot on the high type's rent. So the low type ends up with a **distorted** (too-small) contract, while the high type gets the **efficient** one plus a cash bonus — an **information rent** — that you pay purely to keep them honest. Distortion at the bottom, no distortion at the top, rent at the top. Everything below is just making that precise.

## The formal version

A principal offers a menu $\{(q_L, t_L), (q_H, t_H)\}$ — one bundle per type. Read $q$ as "quantity/quality of the good" and $t$ as "the transfer the customer pays." A customer of type $\theta \in \{\theta_L, \theta_H\}$ with $\theta_H > \theta_L$ has quasilinear payoff

$$U(\theta) = \theta\,v(q) - t,$$

where $v$ is increasing and concave (more quantity is good, with diminishing returns) and $\theta$ scales how much this type values the good. **In words:** higher types get more gross value from the same quantity, and everyone dislikes paying.

The principal picks the menu to maximize expected profit subject to four constraints:

$$\underbrace{\theta_L v(q_L) - t_L \ge 0}_{\text{IR}_L}, \qquad \underbrace{\theta_H v(q_H) - t_H \ge 0}_{\text{IR}_H},$$

$$\underbrace{\theta_H v(q_H) - t_H \ge \theta_H v(q_L) - t_L}_{\text{IC}_H}, \qquad \underbrace{\theta_L v(q_L) - t_L \ge \theta_L v(q_H) - t_H}_{\text{IC}_L}.$$

**In words:** IR says each type accepts rather than take its outside option (normalized to $0$); IC says each type prefers its own bundle, evaluated *with its own $\theta$*, to the bundle meant for the other type.

**Single-crossing (Spence–Mirrlees), inherited from 5.2.** In $(q,t)$ space, a type's indifference curve has slope $\theta v'(q)$, which is *increasing in $\theta$*: the high type's indifference curves are everywhere steeper, so any two types' curves cross **at most once**. **In words:** the high type is always willing to pay more for one extra unit of quantity than the low type is.

Single-crossing collapses four constraints to two. The ones that bind are:

$$\boxed{\text{IR}_L \text{ binds} \quad\text{and}\quad \text{IC}_H \text{ binds.}}$$

**In words:** the *low* type is squeezed to its outside option (it earns no surplus), and the *high* type is held exactly indifferent between telling the truth and mimicking the low type. The other two constraints (IR$_H$, IC$_L$) come along for free — the high type does better than walking away because it always *could* have grabbed the low bundle, and the low type has no urge to reach up for the high bundle it can't afford to enjoy.

With IR$_L$ and IC$_H$ binding, solving the principal's problem yields the two headline results:

- **No distortion at the top:** $q_H$ is set at the *efficient* level, where marginal value meets marginal cost, exactly as full information would dictate.
- **Downward distortion at the bottom:** $q_L$ is set *below* its efficient level, and the high type collects an information rent equal to $(\theta_H - \theta_L)\,v(q_L)$.

The trade-off is transparent in that rent formula: shrinking $q_L$ shrinks the rent you owe the high type (good) but destroys efficient trade with the low type (bad). You stop shrinking where those two marginal effects balance.

## Picture

![Menu of two contracts in (quantity, payment) space: the low type's bundle L distorted below its efficient quantity on the low type's zero-surplus curve, the high type's bundle H at the efficient quantity on the high type's binding incentive-compatibility curve](assets/05-03-fig1.svg)

The blue curve is the low type's indifference curve through the origin — its zero-surplus (IR-binding) locus, and $L$ sits right on it. The red curve is the high type's indifference curve running through *both* $L$ and $H$: that single curve passing through both bundles is IC$_H$ binding drawn as a picture — the high type is exactly indifferent between the two. $H$ sits at the efficient quantity $q_H = \theta_H$; $L$ has been dragged left of its own efficient point $q_L^*$, and that leftward gap is the distortion you impose to shrink the high type's temptation.

## Worked examples

**Example 1 (nonlinear pricing — the full algebra).** A monopolist with zero marginal cost sells to two types with $v(q) = q - \tfrac12 q^2$, so payoff is $U(\theta) = \theta q - \tfrac12 q^2 - t$. A fraction $\lambda$ of buyers are high type $\theta_H$, the rest low type $\theta_L$. Profit is $\lambda t_H + (1-\lambda) t_L$.

Impose the two binding constraints. From IR$_L$ at equality, $t_L = \theta_L q_L - \tfrac12 q_L^2$. From IC$_H$ at equality,

$$t_H = \theta_H q_H - \tfrac12 q_H^2 - \big[\theta_H q_L - \tfrac12 q_L^2 - t_L\big] = \theta_H q_H - \tfrac12 q_H^2 - (\theta_H - \theta_L)q_L,$$

where the last term $(\theta_H - \theta_L)q_L$ is exactly the **information rent**. Substitute both transfers into expected profit:

$$\Pi = \lambda\Big[\theta_H q_H - \tfrac12 q_H^2 - (\theta_H - \theta_L)q_L\Big] + (1-\lambda)\Big[\theta_L q_L - \tfrac12 q_L^2\Big].$$

Now optimize. In $q_H$: $\ \partial\Pi/\partial q_H = \lambda(\theta_H - q_H) = 0 \Rightarrow q_H = \theta_H$ — the efficient quantity, **no distortion at the top**. In $q_L$:

$$\frac{\partial \Pi}{\partial q_L} = -\lambda(\theta_H - \theta_L) + (1-\lambda)(\theta_L - q_L) = 0 \;\Rightarrow\; q_L = \theta_L - \frac{\lambda}{1-\lambda}(\theta_H - \theta_L) \;<\; \theta_L.$$

Downward distortion, and it's worse the more high types there are (larger $\lambda$) — because each shrink of $q_L$ pays off on a bigger mass of rents.

*Numbers.* Take $\theta_H = 2$, $\theta_L = 1$, $\lambda = \tfrac13$. Then $q_H = 2$ (efficient) and $q_L = 1 - \tfrac{1/3}{2/3}(1) = \tfrac12$ (efficient would be $1$). Transfers: $t_L = 1\cdot\tfrac12 - \tfrac12\cdot\tfrac14 = 0.375$ and $t_H = 4 - 2 - (1)(\tfrac12) = 1.5$. Check the rent: the high type's surplus is $\theta_H q_H - \tfrac12 q_H^2 - t_H = 4 - 2 - 1.5 = 0.5 = (\theta_H-\theta_L)q_L$. ✓ The low type earns $0$. ✓ These are exactly the bundles $L=(0.5,\,0.375)$ and $H=(2,\,1.5)$ in the figure.

**Example 2 (insurance — Rothschild–Stiglitz, and why pooling dies).** Two risk types, high-risk (loss probability $p_H$) and low-risk ($p_L < p_H$), each choosing a contract = (premium, coverage). The high-risk type values coverage more at every point (single-crossing again: its indifference curves in premium–coverage space are steeper), so it is the "top" type here.

The separating menu mirrors Example 1: the **high-risk type gets full, efficient coverage**, and the **low-risk type gets partial coverage** — deliberately under-insured so the high-risk type isn't tempted to buy the low-risk contract. The binding constraint is the high-risk type's IC: it's held just indifferent between full coverage at its fair (high) premium and the skimpy low-risk contract.

Why not just *pool* everyone on one average-priced contract? Because a competitor can **cream-skim**. Given any pooling contract, single-crossing guarantees there's a nearby contract with slightly less coverage at a lower price that *only the low-risk type* prefers. A rival offers it, scoops up all the low risks, and leaves the original insurer holding only high risks at a premium priced for the average — a guaranteed loss. So no pooling contract survives competition. Worse, RS showed the *separating* equilibrium can also fail to exist: if high-risk types are rare, the low types are so mildly distorted that a pooling deal would beat the separating menu for them, and the cream-skimming/pooling cycle never settles. A famous nonexistence result — the market may have **no** equilibrium at all.

## Watch out

- **Screening vs. signaling — who moves first.** Screening = the *uninformed* party moves first with a menu, and types self-select. Signaling (5.2) = the *informed* party moves first, burning a costly action to reveal itself. Same single-crossing math, opposite order of play. If someone hands you a contract menu and you pick, that's screening.
- **"No distortion at the top" is only the top.** It's tempting to over-remember it as "no distortion." Exactly one type — the highest — gets the efficient contract. *Every* other type is distorted downward. In a two-type model that's a 50/50 split of the intuition, but in a continuum only the very top point is undistorted.
- **The rent goes to the informed, high type — not to whoever you'd pity.** The information rent is paid to the type the principal is *afraid will mimic*, i.e. the high type with the informational advantage. The low type is squeezed to zero surplus. Screening does not protect the little guy.
- **Only two constraints bind — don't carry all four.** Trying to impose IR$_H$ and IC$_L$ as equalities too will over-determine the problem and give nonsense. Single-crossing is what lets you drop them; use it.
- **Existence is not guaranteed.** Unlike the clean monopoly-screening problem, competitive screening (Rothschild–Stiglitz) may have no equilibrium. Don't assume a separating menu always exists in a competitive market.

## One-liner

> Offer a menu so each type sorts itself: give the top type the efficient deal plus a rent to keep it honest, and damage everyone else's deal just enough to make mimicry not worth it.

## Problems

**P1 (🟢)** In Example 1's menu with $\theta_H=2$, $\theta_L=1$, verify directly that the high type does *not* want to deviate to the low bundle and the low type does *not* want to deviate to the high bundle. (Compute each type's payoff at each bundle.)

**P2 (🟡)** Keep $\theta_H=2$, $\theta_L=1$ but let the fraction of high types $\lambda$ vary. Find the threshold $\lambda^*$ above which the monopolist optimally **excludes** the low type entirely ($q_L = 0$). Interpret: what does a large $\lambda$ do to the value of serving low types, and how does this echo the Rothschild–Stiglitz nonexistence worry?

**P3 (🔴, optional)** Show the "no distortion at the top" result in general for the $U=\theta v(q)-t$ model with concave $v$ and marginal cost $c$ per unit. That is: with IR$_L$ and IC$_H$ binding, prove the profit-maximizing $q_H$ solves $\theta_H v'(q_H) = c$ (the full-information / efficient condition), while $q_L$ solves a condition with an extra rent term that pushes it below efficiency.

<details>
<summary>Solutions</summary>

**P1** Bundles: $L=(q_L,t_L)=(0.5,\,0.375)$, $H=(q_H,t_H)=(2,\,1.5)$. Payoff of type $\theta$ at a bundle $(q,t)$ is $\theta q - \tfrac12 q^2 - t$.

*High type ($\theta_H=2$):* at $H$, $\;2(2)-\tfrac12(4)-1.5 = 4-2-1.5 = 0.5$. At $L$, $\;2(0.5)-\tfrac12(0.25)-0.375 = 1-0.125-0.375 = 0.5$. Equal — the high type is exactly indifferent, which is IC$_H$ binding. It weakly prefers $H$; break the tie in the principal's favor. ✓ (No *strict* gain from deviating.)

*Low type ($\theta_L=1$):* at $L$, $\;1(0.5)-\tfrac12(0.25)-0.375 = 0.5-0.125-0.375 = 0$. At $H$, $\;1(2)-\tfrac12(4)-1.5 = 2-2-1.5 = -1.5 < 0$. The low type strictly prefers $L$ (and would rather walk away than take $H$). ✓ IC$_L$ holds with room to spare — it never binds.

**P2** From Example 1, $q_L = \theta_L - \frac{\lambda}{1-\lambda}(\theta_H-\theta_L) = 1 - \frac{\lambda}{1-\lambda}(1)$. Exclusion begins when $q_L = 0$:

$$1 - \frac{\lambda}{1-\lambda} = 0 \;\Rightarrow\; \frac{\lambda}{1-\lambda} = 1 \;\Rightarrow\; \lambda^* = \tfrac12.$$

For $\lambda > \tfrac12$ the unconstrained formula gives $q_L<0$, which is infeasible, so the optimum sets $q_L=0$: the low type is dropped and the monopolist sells only to high types at the efficient, full-surplus-extracting contract. *Interpretation:* a bigger $\lambda$ means the rent $(\theta_H-\theta_L)q_L$ is paid on a larger mass, so any coverage extended to low types is expensive in forgone rent extraction; past $\lambda^*$ it's not worth serving them at all. This is the same tension behind RS nonexistence: when high types are *rare* (small $\lambda$) the low type is barely distorted and a pooling deal can undercut the separating menu; when high types are *common*, serving low types is so costly that the market tips toward excluding/pooling them. Either way, the mix of types decides whether a clean separating outcome is stable.

**P3** Payoff of type $\theta$: $\theta v(q) - t$. Binding constraints:
- IR$_L$: $t_L = \theta_L v(q_L)$.
- IC$_H$: $t_H = \theta_H v(q_H) - (\theta_H - \theta_L)v(q_L)$ (substitute $t_L$ into $\theta_H v(q_H)-t_H = \theta_H v(q_L)-t_L$, as in Example 1).

Profit with per-unit cost $c$: $\Pi = \lambda\,(t_H - c q_H) + (1-\lambda)\,(t_L - c q_L)$. Substitute:

$$\Pi = \lambda\Big[\theta_H v(q_H) - (\theta_H-\theta_L)v(q_L) - c q_H\Big] + (1-\lambda)\Big[\theta_L v(q_L) - c q_L\Big].$$

FOC in $q_H$: $\;\lambda\big[\theta_H v'(q_H) - c\big] = 0 \Rightarrow \theta_H v'(q_H) = c$. That is precisely the efficient condition (marginal value = marginal cost), so **no distortion at the top**. ✓

FOC in $q_L$:

$$-\lambda(\theta_H-\theta_L)v'(q_L) + (1-\lambda)\big[\theta_L v'(q_L) - c\big] = 0 \;\Rightarrow\; \theta_L v'(q_L) = c + \frac{\lambda}{1-\lambda}(\theta_H-\theta_L)v'(q_L).$$

The right side exceeds $c$ (the extra term is the marginal rent saved by shrinking $q_L$), so $\theta_L v'(q_L) > c$. Since $v$ is concave ($v'$ decreasing), $v'(q_L)$ being *larger* than the efficient level $c/\theta_L$ means $q_L$ is *smaller* than efficient — **downward distortion at the bottom**. ✓

</details>

## Flashback

**From Lesson 5.2 (Signaling):** Worker types differ in the cost of acquiring education $e$: a type-$\theta$ worker earning wage $w$ has payoff $w - \dfrac{e^2}{2\theta}$, with $\theta_H > \theta_L$. (a) Compute the marginal rate of substitution between wage and education (how much extra wage a type needs to accept one more unit of education) and show it satisfies single-crossing. (b) In the resulting separating arrangement, which type's incentive constraint binds, and which type earns no informational advantage?

<details>
<summary>Solution</summary>

(a) Hold payoff fixed, $w - \frac{e^2}{2\theta} = \bar U$. The indifference curve in $(e,w)$ space has slope

$$\frac{dw}{de}\Big|_{\bar U} = \frac{\partial}{\partial e}\!\left(\frac{e^2}{2\theta}\right) = \frac{e}{\theta}.$$

This is the wage premium a type demands per extra unit of education. It is *decreasing* in $\theta$: the high type's indifference curves are **flatter** (education is cheaper for it), so any two types' curves cross exactly once — single-crossing / Spence–Mirrlees holds. (Note the mirror to screening: in signaling's $(e,w)$ space the high type's curves are *flatter*, because education is a *cost*; in screening's $(q,t)$ space the high type's curves are *steeper*, because quantity is a *benefit*. Same structural condition, sign flipped by whether the screening variable helps or hurts.)

(b) Because education is cheaper for the high type, the tempting deviation is the *low* type wanting to masquerade as high by over-acquiring education — no, run it carefully: the separating contract must stop the **low** type from grabbing the high wage by faking the high education level. So it is the **low type's** IC that binds, and the high type must acquire *enough* education that the low type finds imitation not worth the cost. The **low type** earns no informational rent (it's held to its full-information payoff); the high type collects the surplus from being credibly identified. This is the exact analogue of screening's binding-constraint pair — the type that would gain by mimicking is the one whose IC pins the menu, and the mimicked type is squeezed.

</details>

## Connections

- **Backward:** single-crossing (Spence–Mirrlees) is imported wholesale from [5.2](05-02-signaling.md); there it sorts types by a costly action they choose, here it makes a menu self-selecting. The optimization is Kuhn–Tucker from [1.3](01-03-inequality-constraints-kuhn-tucker.md) — identifying the two binding constraints among four is exactly a complementary-slackness argument.
- **Forward:** [5.4](05-04-moral-hazard-principal-agent.md) keeps the principal–agent frame but hides the *action* instead of the *type* (moral hazard), trading insurance against incentives rather than efficiency against rent. [5.5](05-05-mechanism-design-markets.md) generalizes screening: the revelation principle says *any* mechanism is equivalent to a menu with IC + IR constraints — screening is mechanism design with one designer and private types.
- **Sideways (within this course):** second-degree price discrimination in [6.1](06-01-monopoly-price-discrimination.md) *is* the Example 1 problem — a monopolist screening buyers by quantity/quality is the textbook nonlinear-pricing model, and it echoes Boss Problem 5's insurance-vs-incentives trade-off.
- **Sideways (cross-course):** the IC and IR constraints are the backbone of mechanism design in [grad-game-theory](../../grad-game-theory/syllabus.md) — auctions and public-goods mechanisms are screening problems where the "menu" is an allocation-and-payment rule and truth-telling is the binding IC. See also the [syllabus](../syllabus.md) capstone on the revelation principle.

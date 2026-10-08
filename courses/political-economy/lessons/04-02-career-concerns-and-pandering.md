# Political Economy · Lesson 4.2: Career concerns and pandering

> ⏱ ~15 min · Module 4: Accountability, interests and rents · Builds on: [4.1 Elections as accountability](04-01-elections-as-accountability.md), [`grad-game-theory` 4.5](../../grad-game-theory/lessons/04-05-signaling-games-refinements.md) · Unlocks: [4.6 Political budget cycles](04-06-political-budget-cycles.md)

## Why this matters

[4.1](04-01-elections-as-accountability.md) gave the voter a stick: a re-election cutoff that the incumbent meets to keep office. That model has voters hold to a retrospective rule fixed in advance. This lesson drops the rule. Voters simply re-elect whoever *looks* best, and the incumbent manages how she looks. Two results follow. Reputation buys effort for free, but less of it as tenure lengthens and none in a final term. Reputation also buys distortion: an incumbent who knows the unpopular policy is right may choose the popular one. Both feed straight into the term-limits debate.

## The idea

**Career concerns.** A new mayor's ability is unknown. Voters see her city's results, which mix ability, effort and luck, and they credit good results partly to ability. So effort today raises tomorrow's reputation, and she works with no contract at all. But voters know she has this incentive. They expect the extra effort and subtract it before crediting her. In equilibrium she works hard and fools nobody. She works anyway, because slacking would make her look worse than her ability. Economists call this *signal jamming*: she cannot stop pushing on the signal, even though the push is fully anticipated.

**Pandering.** Now the incumbent knows something voters do not: which of two policies is right. Voters lean towards one of them. A good incumbent who learns that the other one is right faces a choice. Doing the right thing makes her look like a bad type, because voters expect a good type to choose what *they* think is right. If office is worth more than the policy stake, she gives the public what it wants.

## The models

### Career concerns: the signal-jamming model

This is a two-period stripped-down version of Holmström, "Managerial Incentive Problems: A Dynamic Perspective" (*Review of Economic Studies* 66(1), 1999), with the wage reread as the value of reputation.

**Game.** An incumbent of unknown ability $\eta \sim N(m_0, \sigma_\eta^2)$, unknown to her and to voters alike, serves periods $t = 1, 2$. Each period she picks hidden effort $a_t \ge 0$ at cost $c(a_t)$, with $c$ strictly convex and $c'(0) = 0$. Voters observe performance

$$y_t = \eta + a_t + \varepsilon_t, \qquad \varepsilon_t \sim N(0, \sigma_\varepsilon^2) \text{ i.i.d.}$$

Her period-2 payoff from reputation is $\lambda\, m_1$, where $m_1 = E[\eta \mid y_1]$ is voters' posterior mean ability and $\lambda > 0$ is what a unit of reputation is worth (re-election chances, a later office). She discounts at $\delta$. No contract conditions on $y_1$.

**Updating.** $\eta$ and $y_1$ are jointly normal, so $E[\eta \mid y_1]$ is linear with slope $\operatorname{Cov}(\eta, y_1)/\operatorname{Var}(y_1)$. If voters believe effort was $\hat a_1$,

$$m_1 = m_0 + \kappa\,(y_1 - \hat a_1 - m_0), \qquad \kappa = \frac{\sigma_\eta^2}{\sigma_\eta^2 + \sigma_\varepsilon^2}.$$

*In words:* voters subtract the effort they expect, then credit a share $\kappa$ of the surprise to ability; $\kappa$ is large when ability is uncertain and luck is small.

**Proposition 1 ([career concerns](../reference.md#career-concerns)).** The equilibrium is unique: $a_2^* = 0$ and $c'(a_1^*) = \delta \lambda \kappa$. With $c(a) = a^2/2$, $a_1^* = \delta\lambda\kappa$.

*In words:* the incumbent works until the marginal cost of effort equals the discounted reputation it buys, and does nothing when there is no future.

*Proof.*

1. *Period 2.* Nothing follows, so effort only costs: $a_2^* = 0$.
2. *Period 1, given a conjecture $\hat a_1$.* Her expected payoff is $-c(a_1) + \delta\lambda\,E[m_1]$, and $E[m_1] = m_0 + \kappa(a_1 - \hat a_1)$, because $E[y_1] = m_0 + a_1$. This is strictly concave in $a_1$, so her best response solves $c'(a_1) = \delta\lambda\kappa$, which does not depend on $\hat a_1$.
3. *Equilibrium.* Voters' conjecture must be correct, $\hat a_1 = a_1$. Step 2 gives a unique such $a_1$. ∎

Step 3 is the [signal-jamming](../reference.md#signal-jamming) point. In equilibrium $E[m_1] = m_0$: on average she gains no reputation. Yet any lower effort would lower $E[m_1]$ below $m_0$. Voters value a unit of output at 1, so the first best is $c'(a^{FB}) = 1$. With $\lambda = 1$ (Holmström's case, where the wage is expected output), two periods always underprovide, since $\delta\kappa < 1$.

**Longer careers.** With $T$ periods and fixed ability, write $\rho = \sigma_\eta^2/\sigma_\varepsilon^2$. After $k$ observations, each counts with weight $\kappa_k = \rho/(1 + k\rho)$ in voters' posterior mean. Effort in period $t$ moves every later reputation:

$$c'(a_t^*) = \lambda \sum_{s=t+1}^{T} \delta^{\,s-t}\,\kappa_{s-1}.$$

The sum has fewer and smaller terms as $t$ grows. Effort falls with tenure and is zero in the final period. That is Holmström's fixed-ability pattern, and it is how career concerns speak to [term limits](../reference.md#term-limits): a term-limited incumbent is in her final period.

### Pandering: a binary-policy model

A stripped-down model in the spirit of Canes-Wrone, Herron and Shotts, "Leadership and Pandering: A Theory of Executive Policymaking" (*American Journal of Political Science* 45(3), 2001), and Maskin and Tirole, "The Politician and the Judge: Accountability in Government" (*American Economic Review* 94(4), 2004).

**Game.**

- A state $\omega \in \{0, 1\}$ with common prior $p = \Pr(\omega = 1) > \tfrac12$. Action 1 is the *popular* one: voters would choose it on their prior.
- The incumbent is *congruent* with probability $\mu$: she wants policy $x = \omega$, worth $b > 0$ to her. Otherwise she is *dissonant*: she wants $x = 1 - \omega$ and cares only about policy, so she plays $x = 1 - \omega$. (Maskin and Tirole let that type be strategic too; freezing it leaves one strategic incumbent.)
- The incumbent observes $\omega$ and picks $x$. Voters see $x$; with probability $q$ they also learn $\omega$ before the election.
- Re-election is worth $W$ to a congruent incumbent. Voters re-elect iff their posterior $\mu'$ that she is congruent exceeds $\mu$, the probability for a fresh challenger; ties go to the challenger. A revealed right policy is credited to a congruent type, the only type that ever chooses it.

Re-electing on $\mu' > \mu$ is optimal for voters: next term a congruent official is right for sure and a dissonant one never.

**Proposition 2 ([pandering](../reference.md#pandering)).** A congruent incumbent who learns $\omega = 0$ chooses the popular action $x = 1$ iff

$$(1 - 2q)\,W > b.$$

She is truthful iff $(1 - 2q)W < b$. In state 1 she is always truthful.

*In words:* she panders when office is worth more than the policy stake and voters are unlikely to learn the truth before the election; if $q \ge \tfrac12$ she never panders.

*Proof.* Let $s$ be the probability that she plays $x = 0$ in state 0.

1. *Unrevealed $x = 1$ is good news.* A congruent type plays it with probability $p + (1-p)(1-s) \ge p$, a dissonant type with probability $1 - p < p$. The likelihood ratio favours congruence, so $\mu' > \mu$: re-elected.
2. *Unrevealed $x = 0$ is bad news.* Its posterior is $\mu(1-p)s / [\mu(1-p)s + (1-\mu)p] < \mu$, since $(1-p)s < p$. Defeated.
3. *Revealed right policy:* only a congruent type picks it, so $\mu' = 1$: re-elected. *Revealed wrong policy:* $\mu' = \mu(1-s)/[\mu(1-s) + 1 - \mu] \le \mu$: defeated.
4. *Payoffs in state 0.* Truth: $b + qW$ (re-elected only if revealed). Pandering: $(1 - q)W$ (re-elected only if not revealed). Compare. In state 1 truth gives $b + W$, deviating gives 0. ∎

At equality she is indifferent. If ties went to the incumbent instead, a fully pooling pandering equilibrium would also survive whenever $(1-q)W \ge b$ (step 3 at $s = 0$ gives $\mu' = \mu$ exactly). The tie rule is a modelling choice, not an innocent one.

**Term limits, both models.** A final-term incumbent has $W = 0$ and no future reputation. She never panders, and she does no career-concern effort. Voters also lose the chance to remove a dissonant type, which is [4.1](04-01-elections-as-accountability.md)'s [sanctioning and selection](../reference.md#sanctioning-and-selection) problem. That trade-off is the term-limits question; the models price both sides, not the verdict.

**Where the argument is weakest.** Both results ride on what voters can see and infer. Career concerns need effort and ability to be perfect substitutes in a public signal. If effort affects something voters do not measure, reputation buys the wrong effort. Pandering needs voters' prior to be informative about who is congruent and the outcome to arrive late. Change who the bad type is and the sign flips: if it always picks the popular action, an unrevealed $x = 1$ becomes bad news and the unpopular action becomes the way to look congruent. Canes-Wrone, Herron and Shotts find both directions: re-election incentives can reward an unpopular policy that serves voters, and can also reward one that is unpopular and against their interests. Without these information assumptions, neither the free effort nor the pandering distortion is pinned down.

## Picture

![Equilibrium effort plotted against the ratio of ability variance to noise variance, discount factor 0.9. The two-period first-term curve rises toward 0.9 and stays below the dashed first-best line at 1. The three-period first-term curve crosses the first-best line at a ratio of about 2.72 and reaches 1.08 at ratio 4. The three-period second-term curve stays near 0.4. Final-term effort is zero throughout.](assets/04-02-fig1.svg)

Effort rises with $\rho$: the noisier the luck, the less a result says about ability, and the less it is worth working for. Longer horizons stack reputational returns in the first term.

## Worked examples

**Example 1 (clean): two periods.** $\sigma_\eta^2 = 3$, $\sigma_\varepsilon^2 = 1$, $\delta = 0.9$, $\lambda = 1$, $c(a) = a^2/2$. Then $\kappa = 3/4$ and $a_1^* = 0.9 \times 0.75 = 0.675$, below first best $a^{FB} = 1$. Suppose $m_0 = 2$ and voters see $y_1 = 3.875$. They compute

$$m_1 = 2 + 0.75\,(3.875 - 0.675 - 2) = 2 + 0.75 \times 1.2 = 2.9.$$

A voter who forgot that effort is in $y_1$ would compute $2 + 0.75 \times 1.875 \approx 3.41$. A simulation with the equilibrium effort confirms $E[m_1] = m_0 = 2$: the effort is real, the reputational gain is zero on average.

**Example 2 (the hypothesis bites): a longer career.** "Career concerns underprovide effort" is a two-period result. Take three periods with $\sigma_\eta^2 = 4$, $\sigma_\varepsilon^2 = 1$ ($\rho = 4$), $\delta = 0.9$, $\lambda = 1$. The weights are $\kappa_1 = 4/5$, $\kappa_2 = 4/9$. So

$$a_1^* = 0.9 \cdot \tfrac45 + 0.81 \cdot \tfrac49 = 0.72 + 0.36 = 1.08, \qquad a_2^* = 0.9 \cdot \tfrac49 = 0.4, \qquad a_3^* = 0.$$

The newcomer *overworks*: $1.08 > 1$. With $\delta = 0.9$, three-period first-term effort exceeds the first best for every $\rho$ above about 2.72 (the figure). Her first result shapes two later reputations, so it is worth more than its output. A grid search over all three efforts finds no profitable deviation.

**Pandering numbers.** $W = 4$, $b = 1$, $q = 1/4$. Truth in state 0 pays $1 + 1 = 2$; pandering pays $3$. She panders, and does so whenever $q < (1 - b/W)/2 = 3/8$. With $\mu = 1/2$ and $p = 4/5$, the first-term policy is right with probability $\mu = 0.5$ under truth-telling but only $\mu p = 0.4$ under pandering.

## Watch out

- **You might think** voters are fooled by the hard-working newcomer. In equilibrium they are not: they subtract the expected effort, and her expected reputation gain is zero. The effort is real; the deception is not.
- **You might think** pandering requires a bad politician. In Proposition 2 the panderer is the *good* type, acting against her own information to be recognised as good. The distortion comes from what voters can infer, not from her preferences.
- **You might think** reputation always pushes effort down relative to the first best. That is the two-period case. With more periods, early effort can exceed it (Example 2). The horizon is the hypothesis people drop.

## One-liner

> Reputation buys effort voters fully anticipate, falling to zero in a final term, and buys popular policies from good incumbents whenever office outweighs the policy stake and voters will not learn the truth before the election.

## Problems

**P1 (🟢)** *(Formal.)* A two-period career-concerns model with $\lambda = 1$ and $c(a) = a^2/2$: ability variance $\sigma_\eta^2 = 2$, noise variance $\sigma_\varepsilon^2 = 3$, $\delta = 0.8$.

(a) Find the first-period effort $a_1^*$.
(b) Better auditing halves the noise variance. Find the new $a_1^*$.
(c) Back in the setting of (a), with $m_0 = 10$, voters observe $y_1 = 11.32$. Find their posterior mean ability $m_1$.

**P2 (🟡)** *(Formal.)* In the pandering model, $\mu = 0.6$, $p = 0.7$, $W = 3$, $b = 2$.

(a) For which revelation probabilities $q$ does a congruent incumbent in state 0 pander? Classify $q = 0.1$ and $q = 0.2$.
(b) For each of the two equilibria in (a), find the probability that the first-term policy is right.

**P3 (🟡)** *(Exegetical.)* An invented op-ed: "In her first term our new governor delivered the best results in a decade. Ability like that is rare. Re-elect her and expect the same for eight more years." In 150 words or fewer, name the model the op-ed ignores, the two inferences it gets wrong, and what that model predicts for her later terms.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c).)*

(a) $\kappa = 2/(2+3) = 2/5$. $a_1^* = \delta\kappa = 0.8 \times 0.4 = 0.32$.

(b) $\kappa = 2/(2 + 1.5) = 4/7$. $a_1^* = 0.8 \times 4/7 = 16/35 \approx 0.457$. Less noise makes results more informative about ability, so effort is worth more.

(c) Voters subtract the equilibrium effort: $m_1 = 10 + 0.4\,(11.32 - 0.32 - 10) = 10 + 0.4 \times 1 = 10.4$.

**Wrong turns:** In (c), not subtracting effort, giving $10 + 0.4 \times 1.32 = 10.528$: voters know she worked. Using $\sigma_\varepsilon^2/(\sigma_\eta^2 + \sigma_\varepsilon^2)$ as the weight on the signal; that is the weight on the prior.

---

**P2** *(Formal (a)–(b).)*

(a) She panders iff $(1 - 2q)W > b$, that is $1 - 2q > 2/3$, $q < 1/6$. At $q = 0.1$: $(0.8)(3) = 2.4 > 2$, **panders** (truth pays $2 + 0.3 = 2.3$, pandering $2.7$). At $q = 0.2$: $(0.6)(3) = 1.8 < 2$, **truthful** (truth pays $2.6$, pandering $2.4$).

(b) Truthful: a congruent incumbent is always right, a dissonant one never, so the policy is right with probability $\mu = 0.6$. Pandering: the congruent type is right only in state 1, so the probability is $\mu p = 0.42$. Pandering costs voters $\mu(1 - p) = 0.18$ in first-term accuracy.

**Wrong turns:** Answering (a) with $W > b$, which is the $q = 0$ case: the chance of exposure before the election cuts both ways (truth is rewarded, pandering punished), hence the factor $1 - 2q$. In (b), multiplying by $p$ in the truthful case too.

---

**P3** *(Exegetical, strict.)*

**Must hit, strict:**

- The model is career concerns (Holmström signal jamming). First-term results mix ability, effort and luck.
- Wrong inference 1: crediting all of the result to ability. Rational voters subtract the effort a newcomer is expected to supply and credit only a share $\kappa$ of the remaining surprise.
- Wrong inference 2: projecting first-term results forward. Effort falls with tenure as reputation becomes harder to move, and is zero in a final term. Later output should fall even if ability is high.

**Wrong turns:** Saying the governor fooled voters. In equilibrium the extra effort is anticipated. Reading the model as saying she is not able. It says the result overstates the ability *inferred*, not that ability is low.

**Model answer:** The op-ed ignores the career-concerns model. A first-term result is ability plus effort plus luck, and a new incumbent works hardest because her reputation is most movable. Voters who reason correctly subtract that expected effort and treat only part of the remaining surprise as ability, so "best in a decade" is weaker evidence of rare ability than the op-ed claims. Second, the model predicts effort falls with tenure as voters become surer of her, and vanishes in a final term, so even an able governor's later results should regress. Expecting "the same for eight more years" confuses a temporary incentive with a permanent trait.

</details>

## Flashback

**From Lesson [3.5](03-05-agenda-setters-and-veto-players.md) (Agenda setters and veto players):** *(Formal (a)–(b).)* A committee with ideal $g = 64$ has jurisdiction over a bill; the floor median is at $m = 40$; utility is Euclidean and everything is common knowledge. Compare two rules. *Gatekeeping:* the committee either keeps the gates closed, so the status quo $q$ stands, or opens them, and an open floor then enacts $m$; a committee indifferent between $q$ and $m$ opens. *Closed rule:* the committee proposes any $x$, and the floor accepts iff $x$ is at least as close to $m$ as $q$ is. (a) Find the enacted policy under each rule for $q = 10, 30, 50, 80, 95$. (b) For which status quos $q \in [0, 120]$ is the floor median strictly better off under the closed rule? Two sentences on why.

<details>
<summary>Solution</summary>

(a) *Gatekeeping.* The committee opens iff $m$ is at least as close to 64 as $q$ is: $24 \le \lvert q - 64 \rvert$, i.e. iff $q \le 40$ or $q \ge 88$. Otherwise $q$ stands.

*Closed rule.* This is the setter model with $s = 64 > m = 40$, kink at $2m - s = 16$: the outcome is 64 for $q \le 16$ or $q \ge 64$, $80 - q$ for $16 < q < 40$, and $q$ itself for $40 \le q < 64$.

| $q$ | gatekeeping | closed rule |
|---|---|---|
| 10 | 40 | 64 |
| 30 | 40 | 50 |
| 50 | 50 | 50 |
| 80 | 80 | 64 |
| 95 | 40 | 64 |

(b) Exactly **$64 < q < 88$**. For $q \le 40$ or $q \ge 88$ gatekeeping hands the median her ideal, so she cannot do better. For $40 \le q \le 64$ both rules leave $q$ in place. For $64 < q < 88$ the gatekeeper bottles $q$ up, while a proposing committee offers its ideal 64, which the floor accepts because $64$ is 24 from her and $q$ is farther. Gatekeeping is purely negative power: it can block moves toward the median but never move policy, so a status quo beyond the committee's own ideal, which both the committee and the median would like moved left, stays put. (The committee is never worse off under the closed rule; a brute-force search over proposals confirms each closed-rule entry.)

**Wrong turns:** Assuming the closed rule must hurt the floor because it gives the committee more power: the committee gains, but at $q = 80$ so does the median. Reusing the lesson's protected set $(2g - m,\ m]$, which is for a committee left of the median; here the committee is on the right and the unchanged set under gatekeeping is $[40, 88)$.

</details>

## Connections

- **Backward:** [4.1](04-01-elections-as-accountability.md) built accountability on a committed cutoff; here re-election follows beliefs, as in a signaling game ([`grad-game-theory` 4.5](../../grad-game-theory/lessons/04-05-signaling-games-refinements.md), with equilibrium beliefs from [`grad-game-theory` 4.4](../../grad-game-theory/lessons/04-04-perfect-bayesian-sequential-equilibrium.md)). The explicit-contract benchmark is [`grad-micro` 5.4](../../grad-micro/lessons/05-04-moral-hazard-principal-agent.md).
- **Forward:** [4.6](04-06-political-budget-cycles.md) turns competence signaling into pre-election budget manipulation. The term-limits question returns in Boss 4.
- **Sideways:** Maskin and Tirole's alternative to an accountable politician is an insulated official, their "judge"; insulation levers such as central bank independence are described in [`political-institutions` 6.2](../../political-institutions/lessons/06-02-delegation-and-oversight.md). Holmström's own setting is the market for managers, where the wage is the market's estimate of ability.

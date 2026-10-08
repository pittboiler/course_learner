# Political Economy · Lesson 4.6: Political budget cycles

> ⏱ ~15 min · Module 4: Accountability, interests and rents · Builds on: [4.1 Elections as accountability](04-01-elections-as-accountability.md), [4.2 Career concerns and pandering](04-02-career-concerns-and-pandering.md) · Unlocks: [5.1 Legislative bargaining: Baron–Ferejohn](05-01-legislative-bargaining-baron-ferejohn.md), [`empirical-political-economy`](../../empirical-political-economy/syllabus.md)

## Why this matters

Governments cut taxes, open bridges and raise pensions just before elections, then tighten afterwards. The obvious story is that voters are fooled. But the accountability models of [4.1](04-01-elections-as-accountability.md) assume voters who reason, and a reasoning voter should discount a pre-election gift. This lesson asks when [political budget cycles](../reference.md#political-budget-cycles) survive rational voters, and what they then mean. There are three answers. Each leaves a different fingerprint in the data, and each implies a different verdict on banning the cycle.

## The idea

**Fooled voters (opportunistic).** If people form expectations from the past, an incumbent can run the economy hot before the vote and pay the bill afterwards. Voters with short memories reward the boom, so it recurs every term.

**Informed voters reading a signal (competence).** Suppose an incumbent knows how good she is at running the government and voters do not. A competent government can deliver a visible pre-election boost more cheaply, say a tax cut funded by efficiency rather than by gutting maintenance. Then the boost *is* information. Voters reward it because it is evidence, and the incompetent type will not pay the higher price to copy it. The cycle is the cost of a [signal](../../grad-game-theory/lessons/04-05-signaling-games-refinements.md), as in Spence.

**Informed voters facing an uncertain winner (partisan).** Parties differ in the inflation they want. Wages are set before anyone knows who wins. Whoever wins surprises the half of the market that bet on the other side. The cycle comes *after* the election, and its sign depends on the winner.

## The models

Throughout, $x_t$ is the output gap, $\pi_t$ inflation and $\pi_t^e$ its expectation when wages were set. Output responds only to surprises, as in the expectations-augmented Phillips curve of [`grad-macro` 6.2](../../grad-macro/lessons/06-02-policy-rules-taylor-principle.md):

$$x_t = a\,(\pi_t - \pi_t^e), \qquad a > 0.$$

**1. Opportunistic cycles (William Nordhaus, "The Political Business Cycle," *Review of Economic Studies*, 1975).** Nordhaus's voters have adaptive expectations and judge the incumbent mostly on recent outcomes. Here is a two-period caricature of his result ([opportunistic cycles](../reference.md#opportunistic-cycles)). Let $\pi_t^e = \pi_{t-1}$, terms last two periods, and the voter looks only at the pre-election period. The incumbent raises inflation by $k$ in that period, so $x = ak$. After the election she returns inflation to its old level, but expectations have caught up, so $x = -ak$. Output averages zero over the term, and the voter rewards a boom she pays for later. The pattern needs voters who never learn it. That is the assumption rational expectations removes, and with it the opportunistic cycle in output.

**2. Competence signaling (Kenneth Rogoff and Anne Sibert, "Elections and Macroeconomic Policy Cycles," *Review of Economic Studies*, 1988; Rogoff, "Equilibrium Political Budget Cycles," *American Economic Review*, 1990).** Rogoff's cycle is multidimensional: before elections, spending tilts toward highly visible items. The stripped two-type version below keeps the signaling logic ([competence signaling](../reference.md#competence-signaling)).

- *Players.* An incumbent and a representative voter.
- *Types.* The incumbent is competent ($H$) with prior probability $\mu$, else incompetent ($L$). She knows her type; the voter does not.
- *Timing.* Before the election the incumbent picks a visible boost $e \ge 0$. The voter sees $e$, forms the posterior $\mu'$ that she is competent, and retains her or elects a challenger, competent with probability $\mu$.
- *Payoffs.* The boost is a distortion whose hidden welfare cost is $c_\theta e$, with $0 < c_H < c_L$ (single crossing: cheaper for the competent). A competent officeholder in the next term is worth $\Delta > 0$ to voters. The incumbent maximizes voters' welfare plus a private value of office $X$ if she holds it (an assumption of this version).

Only differences matter, so measure a type's payoff from being retained against being replaced. The competent incumbent gains $V_H = X + (1-\mu)\Delta$: office, plus a better successor than a random challenger. The incompetent gains only $V_L = X - \mu\Delta$: office, minus the chance that a challenger would have done better.

**Proposition (least-cost separation).** Suppose $V_L > 0$. Separating perfect Bayesian equilibria, in which $H$ plays $e_H > 0$ and $L$ plays 0, exist exactly for $e_H \in [V_L/c_L,\ V_H/c_H]$. Only

$$e^* = \frac{V_L}{c_L} = \frac{X - \mu\Delta}{c_L}$$

survives the Intuitive Criterion. In non-election periods $e = 0$.

*In words:* the competent incumbent distorts just enough that the incompetent one would not copy her, and only when a vote is coming.

*Proof.*

1. In a separating equilibrium Bayes' rule gives $\mu' = 1$ after $e_H$ and $\mu' = 0$ after 0. The voter retains iff $\mu' \ge \mu$, so she retains after $e_H$ and replaces after 0. Off path, beliefs $\mu' = 0$ deter every other $e$.
2. $L$ does not mimic iff the cost exceeds her gain from office: $c_L e_H \ge V_L$.
3. $H$ does not drop to 0 iff $c_H e_H \le V_H$. No other $e$ beats 0 for either type, since it costs more and still loses.
4. Steps 2 and 3 give the interval. It is nonempty because $V_H > V_L$ and $c_H < c_L$.
5. Take $e_H > e^*$ and any $e \in (e^*, e_H)$. For $L$, $V_L - c_L e < 0$: even if retained she does worse than in equilibrium, so she is equilibrium-dominated at $e$. The Intuitive Criterion then puts belief 1 on $H$ at $e$, so $e$ wins re-election, and $H$ gains $c_H(e_H - e) > 0$ by deviating. Only $e^*$ survives, as in [`grad-game-theory` 4.5](../../grad-game-theory/lessons/04-05-signaling-games-refinements.md).
6. Without an election the voter's belief changes no action, so the boost buys nothing and $e = 0$. ∎

If $V_L \le 0$ the incompetent type would rather step aside, and there is no distortion at all.

**Is the cycle bad for voters?** Compare $e^*$ with a rule that bans the boost. The ban saves the expected distortion $\mu c_H e^*$, since only competent types distort. But the ban leaves the voter uninformed, so the next officeholder is competent with probability $\mu$ instead of $\mu + (1-\mu)\mu$. Signaling wins iff

$$(1-\mu)\mu\Delta > \mu c_H e^* \iff (1-\mu)\Delta > \frac{c_H}{c_L}(X - \mu\Delta).$$

Rogoff's own conclusion is in this spirit: efforts to suppress the cycle can impede the transmission of information, or push incumbents to costlier signals.

**3. Rational partisan cycles (Alberto Alesina, "Macroeconomic Policy in a Two-Party System as a Repeated Game," *Quarterly Journal of Economics*, 1987).** Two parties, $L$ and $R$, deliver inflation $\pi_L > \pi_R$ once in office. This is a reduced form: in Alesina's model the rates come from different weights on output in the discretionary problem of [`grad-macro` 6.2](../../grad-macro/lessons/06-02-policy-rules-taylor-principle.md). Wage contracts are signed before the election, which $L$ wins with probability $p$. Rational expectations give $\pi^e = p\pi_L + (1-p)\pi_R$, so ([rational partisan cycles](../reference.md#rational-partisan-cycles))

$$x_L = a(1-p)(\pi_L - \pi_R) > 0, \qquad x_R = -ap(\pi_L - \pi_R) < 0.$$

*In words:* a left victory brings a boom and a right victory a recession, each as large as the surprise. Once contracts are reset, $\pi^e$ equals the winner's rate and $x = 0$ for the rest of the term. The expected gap is zero and its variance is $a^2 p(1-p)(\pi_L - \pi_R)^2$, largest in a close race.

**Where the argument is weakest.** The signaling account needs voters to observe the boost but not its cost until after the vote, and needs competence to persist into the next term; take away either and there is nothing to signal. It also leans on single crossing. If a boost can be bought with borrowing that costs both types the same, separation rests entirely on the competent type valuing office more; with a purely office-motivated incumbent ($V_H = V_L = X$) the interval collapses to the knife-edge $e_H = X/c$, where the incompetent type is indifferent. The partisan account needs contracts that span the election and real uncertainty about the winner; indexed or post-election wage setting removes it. The evidence is mixed by sample: fiscal cycles show up far more in panels of newer democracies than of established ones (Adi Brender and Allan Drazen, *Journal of Monetary Economics*, 2005), and Nordhaus-style output cycles are hard to find in rich-country data. How those estimates are identified, and how far they hold, is [`empirical-political-economy`](../../empirical-political-economy/syllabus.md)'s question.

## Picture

![Three timelines over eight periods, with an election after every second period. Top, Nordhaus: the output gap is plus 1 in each pre-election period and minus 1 in each post-election period. Middle, Rogoff: a competent incumbent's visible boost is 2/3 in each pre-election period and 0 otherwise. Bottom, Alesina with a one-half chance of either party winning: the output gap is plus 1 in the period after a left victory, minus 1 after a right victory, and 0 in the second period of every term.](assets/04-06-fig1.svg)

The three fingerprints differ in timing and in what moves. Nordhaus moves output before the vote, Rogoff moves a fiscal instrument before the vote, and Alesina moves output *after* it, with a sign set by the winner.

## Worked examples

**Example 1 (clean): the least-cost signal.** Let $\mu = 1/2$, $X = 4$, $\Delta = 4$, $c_H = 1$, $c_L = 3$. Then $V_L = 4 - 2 = 2$ and $V_H = 4 + 2 = 6$, so separating equilibria run over $e_H \in [2/3, 6]$ and $e^* = 2/3$.

Check $L$ at $e^*$: mimicking gives $X - c_L e^* = 4 - 2 = 2$, and stepping aside gives $\mu\Delta = 2$. The constraint binds. Check $H$: $X + \Delta - c_H e^* = 22/3$, against 2 from not signaling.

Voters: the expected distortion is $\mu c_H e^* = 1/3$. Separation raises the chance of a competent successor from $1/2$ to $3/4$, worth $(1/4)\cdot 4 = 1$. Net gain to voters from the cycle: $2/3$.

**Example 2 (the hypothesis bites): who expected whom.** Let $\pi_L = 7$, $\pi_R = 3$ (percent) and $a = 1/2$.

| | $p = 1/2$ | $p = 9/10$ |
|---|---|---|
| $\pi^e$ | 5 | 6.6 |
| $x$ if $L$ wins | $+1$ | $+0.2$ |
| $x$ if $R$ wins | $-1$ | $-1.8$ |
| variance of $x$ | 1 | 0.36 |

A near-certain left victory produces almost no boom. An upset produces a deep recession. In both columns the expected gap is zero. Now sign the contracts after the vote: $\pi^e$ equals the winner's rate and the cycle disappears. The hypothesis carrying the result is the timing of contracts, not anything about voters.

## Watch out

- **You might think** a pre-election boost proves voters are myopic. Actually in the signaling model voters are fully rational and the boost is an equilibrium they read correctly. Myopia is Nordhaus's assumption, not a fact the cycle reveals.
- **You might think** banning pre-election boosts must help voters. Actually it removes the signal. In Example 1 the ban saves $1/3$ and loses $1$. The ban wins only when $X$ is large, so incompetent incumbents cling hard and $e^*$ is expensive.
- **You might think** the partisan cycle is just an opportunistic cycle with labels. Actually it runs *after* the election, has opposite signs for the two parties, and needs no fooled voters. It does need wage contracts set before the result is known; that is the hypothesis people drop.

## One-liner

> A pre-election boost can be a fooled voter's reward (Nordhaus), a competent incumbent's costly signal set just high enough to deter mimics, $e^* = (X - \mu\Delta)/c_L$ (Rogoff), or the surprise left by an uncertain winner, $x = a(1-p)(\pi_L - \pi_R)$ after a left victory (Alesina); only the first needs voters to be wrong.

## Problems

**P1 (🟢)** *(Formal.)* In the competence-signaling model of this lesson, let $\mu = 0.4$, $X = 5$, $\Delta = 5$, $c_H = 2$, $c_L = 4$.

(a) Find the range of separating boosts $e_H$ and the least-cost one $e^*$. Check both types' constraints at $e^*$.
(b) Compare voters' expected welfare under $e^*$ with a rule that bans the boost.
(c) Holding the other parameters fixed, find the value of $X$ above which voters prefer the ban, and the value at or below which no distortion occurs.

**P2 (🟡)** *(Formal.)* Party $L$ delivers 8 percent inflation and party $R$ 2 percent. Output follows $x = 0.6(\pi - \pi^e)$, and wage contracts are signed before an election that $L$ wins with probability $p = 1/4$.

(a) Find $\pi^e$, the output gap after each outcome, and the expected gap.
(b) Find the variance of the post-election output gap, the $p$ that maximizes it and the maximum.
(c) What is the output gap in the second period of the term, after contracts reset? Why?

**P3 (🟡)** *(Exegetical.)* An invented reform memo reads: *"Every pre-election tax cut is a bribe paid with voters' own money. A fiscal rule freezing visible spending and taxes for the twelve months before each election will end this at no cost to voters."* In 150 words or fewer: which model does the memo assume, what does the signaling model say a rational voter loses under the rule, and what condition decides whether the rule helps?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $V_L = X - \mu\Delta = 5 - 2 = 3$ and $V_H = X + (1-\mu)\Delta = 5 + 3 = 8$. Separating boosts: $e_H \in [V_L/c_L,\ V_H/c_H] = [3/4,\ 4]$, so $e^* = 3/4$.

At $e^*$, $L$ mimicking gives $X - c_L e^* = 5 - 3 = 2$, equal to stepping aside, $\mu\Delta = 2$: the constraint binds. $H$ gets $X + \Delta - c_H e^* = 10 - 1.5 = 8.5$, against 2 from not signaling.

(b) Expected distortion: $\mu c_H e^* = 0.4 \cdot 2 \cdot 0.75 = 0.6$. Selection gain: the competent-successor probability rises from $0.4$ to $0.4 + 0.6 \cdot 0.4 = 0.64$, worth $0.24 \cdot 5 = 1.2$. Voters gain $0.6$ from the cycle, so they prefer it to the ban.

(c) The ban wins iff $c_H(X - \mu\Delta)/c_L > (1-\mu)\Delta$, i.e. $(X - 2)/2 > 3$, i.e. $X > 8$. At $X = 8$ voters are indifferent (cost and gain both 1.2). No distortion occurs when $V_L \le 0$, i.e. $X \le \mu\Delta = 2$.

**Wrong turns:** Writing $L$'s outside option as 0 rather than $\mu\Delta$: the incumbent cares about voters' welfare, so a competent challenger is worth something to her. Charging voters the distortion of both types, when only $H$ boosts in a separating equilibrium.

---

**P2** *(Formal.)*

(a) $\pi^e = 0.25 \cdot 8 + 0.75 \cdot 2 = 3.5$. If $L$ wins, the surprise is $4.5$ and $x = 0.6 \cdot 4.5 = 2.7$. If $R$ wins, the surprise is $-1.5$ and $x = -0.9$. Expected gap: $0.25 \cdot 2.7 - 0.75 \cdot 0.9 = 0$.

(b) $\operatorname{Var}(x) = a^2 p(1-p)(\pi_L - \pi_R)^2 = 0.36 \cdot 0.1875 \cdot 36 = 2.43$. Since $p(1-p)$ peaks at $p = 1/2$, the maximum is $0.36 \cdot 0.25 \cdot 36 = 3.24$.

(c) Zero. New contracts embed the winner's known rate, so $\pi = \pi^e$ and there is no surprise.

**Wrong turns:** Expecting the likely winner to cause the larger swing: the *unlikely* winner causes it. Computing a second-period boom from the inflation level rather than the surprise.

---

**P3** *(Exegetical.)*

**Must hit, strict:**

- The memo assumes Nordhaus-style voters, who are fooled by the boost (adaptive expectations, short memory), or at least that the boost carries no information.
- In the signaling model (Rogoff, Rogoff–Sibert) a rational voter reads the boost as evidence of competence, and the incompetent type does not copy it. The rule makes both types look alike, so the voter loses the ability to select: the competent-successor probability falls from $\mu + (1-\mu)\mu$ to $\mu$.
- The rule helps iff the expected distortion exceeds the selection gain: $\mu c_H e^* > (1-\mu)\mu\Delta$. It may also push incumbents to costlier, less visible signals.

**Wrong turns:** Saying the signaling model shows cycles are always good: it gives a condition. Treating the partisan model as the memo's target: a ban on pre-election fiscal moves does nothing to a post-election inflation surprise.

**Model answer:** The memo assumes the opportunistic model: voters are fooled by a pre-election tax cut. In the signaling model they are not. A competent government can afford the cut more cheaply, the incompetent one will not pay to copy it, and voters re-elect on that evidence. Freezing fiscal policy makes the two types indistinguishable, so voters keep or replace the incumbent blind, and the chance of a competent government next term falls from $\mu + (1-\mu)\mu$ to $\mu$. The rule helps only if the expected distortion, $\mu c_H e^*$, exceeds that selection gain, $(1-\mu)\mu\Delta$; this happens when office is so valuable that the deterrent signal is costly. Incumbents may also shift to costlier signals the rule does not cover.

</details>

## Flashback

**From Lesson [4.4](04-04-regulatory-capture.md) (Regulatory capture):** *(Formal (a)–(b).)* A city commission sets the taxi fare $p$. Demand is $Q = 26 - p$ (thousand trips), marginal cost is $c$ per trip with no fixed cost, drivers' profit is $\pi = (p - c)Q$ and riders' surplus is $CS = Q^2/2$. The commission maximizes political support $M = \alpha \ln \pi + (1 - \alpha)\ln CS$, where $\alpha \in (0, 1)$ is the drivers' weight. When fuel costs pushed $c$ from 6 to 10, it raised the fare from 8 to 11.6. (a) Find $\alpha$ from the first fare and check that the model predicts the second. What fraction of the cost rise reached the fare, and what fraction would have under a monopolist and under competition? (b) A ride-hailing app then permanently cuts demand to $Q = 22 - p$, with $c = 10$. Predict the regulated fare and the monopoly fare, and say in one sentence how the regulated fare's response compares with the two benchmarks.

<details>
<summary>Solution</summary>

(a) With $Q = a - p$, the first-order condition $\alpha\,\pi'(p)/\pi = 2(1-\alpha)/(a - p)$ reduces to $\alpha(a - 2p + c) = 2(1-\alpha)(p - c)$, so $p^* = c + \alpha\,\frac{a - c}{2}$: the fraction $\alpha$ of the monopoly markup. The first fare gives $8 = 6 + 10\alpha$, so $\alpha = \tfrac15$. At $c = 10$ the model predicts $10 + \tfrac15 \cdot 8 = 11.6$, the observed fare. The fare rose by 3.6 for a cost rise of 4: pass-through $0.9 = 1 - \alpha/2$. A monopolist's fare $(26 + c)/2$ goes from 16 to 18 (pass-through $\tfrac12$); the competitive fare is $c$ (pass-through 1). Support is concave in $p$, so the first-order condition gives the maximum; a grid search agrees at all three demand-cost pairs.

(b) The regulated fare is $10 + \tfrac15 \cdot \tfrac{22 - 10}{2} = 11.2$, down 0.4. The monopoly fare is $(22 + 10)/2 = 16$, down 2. The competitive fare stays at 10. Check the tangency: at 11.2, $\pi = 1.2 \times 10.8 = 12.96$, and $-M_p/M_\pi = 9.6 = \pi'(11.2) = 32 - 22.4$. The regulated fare moves $\alpha/2 = \tfrac{1}{10}$ per unit of lost demand, between competition's 0 and monopoly's $\tfrac12$: the commission spreads the loss over drivers and riders, the same buffering it applied to the cost shock.

**Wrong turns:** Leaving the fare at 11.6 because costs did not change: demand enters the support function through both profit and riders' surplus. Reading the pass-through of 0.9 as proof of a public-interest commission: it pins the drivers' weight at $\tfrac15$ only given the log form of $M$, and a different support function would read the same two fares differently.

</details>

## Connections

- **Backward:** the voter here does what Fearon's selecting voter does in [4.1](04-01-elections-as-accountability.md) ([sanctioning and selection](../reference.md#sanctioning-and-selection)): she retains on beliefs about type. [4.2](04-02-career-concerns-and-pandering.md) has the same desire to look competent, but there the politician does not know her own type ([career concerns](../reference.md#career-concerns), signal jamming); here she does, and the tool is the separating equilibrium of [`grad-game-theory` 4.5](../../grad-game-theory/lessons/04-05-signaling-games-refinements.md).
- **Forward:** [5.1](05-01-legislative-bargaining-baron-ferejohn.md) turns from how much is spent to how the budget is divided. [`empirical-political-economy`](../../empirical-political-economy/syllabus.md) tests these timing predictions and reports where they hold.
- **Sideways:** the partisan model is the Kydland–Prescott inflation bias of [`grad-macro` 6.2](../../grad-macro/lessons/06-02-policy-rules-taylor-principle.md) with two governments instead of one. Central-bank independence, which removes discretion, also removes the partisan cycle in that model. Whether fiscal rules are legitimate limits on elected governments is [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md)'s question.

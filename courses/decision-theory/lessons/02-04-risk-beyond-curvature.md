# Decision Theory · Lesson 2.4: Risk beyond curvature: non-expected-utility theories

> ⏱ ~15 min · Module 2: Subjective probability, Savage, and the independence axiom · Builds on: [1.2 From expected value to expected utility](01-02-from-expected-value-to-expected-utility.md), [2.3 The Allais paradox and the sure-thing principle](02-03-the-allais-paradox-and-the-sure-thing-principle.md) · Unlocks: [3.1 The Ellsberg paradox](03-01-the-ellsberg-paradox.md), [3.2 Models of ambiguity](03-02-models-of-ambiguity.md)

## Why this matters

Inside expected-utility theory there is exactly one place to put caution: the shape of $u$. Risk aversion *is* concavity ([1.2](01-02-from-expected-value-to-expected-utility.md); the Arrow–Pratt machinery is [`micro-refresher` 2.2](../../micro-refresher/lessons/02-02-risk-aversion.md)'s). [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md) showed that the Allais choices fit *no* utility function, concave or not. So either those choosers are making a mistake, or there is a second dimension of risk attitude that expected utility has no room for. This lesson builds the model that adds that dimension, computes with it, and then separates it from a famous rival that answers a different question: not how one *should* choose, but how people *do*.

## The idea

Read any gamble as a ladder. You are guaranteed its worst outcome. With some probability you climb one rung higher; with a smaller probability, another rung; and so on. Expected utility values each climb at its utility gain times the probability of making it. That is the same number as the usual $\sum p\,u$, just added up from the bottom.

Now picture two people who value money identically, dollar for dollar, but differ in temperament. One takes a 60 percent chance of climbing a rung at 60 percent of its value. The other, cautious about the whole shape of the bet, counts a 60 percent chance as worth only 36 percent of the rung. Nothing about how much either one *values* the outcomes differs. What differs is how much weight the better possibilities get against the worse ones.

That second ingredient is the **risk function**. It lets an agent care about global features of a gamble (its minimum, its spread, how likely it is to leave her at the bottom) and not only about the average of its outcomes' values. Expected utility cannot represent such an agent unless it reads the caution back into $u$ as diminishing marginal value. Lara Buchak (*Risk and Rationality*, 2013) argues that this mislabels it.

## The formal version

**Risk-weighted expected utility.** Let gamble $g$ yield outcomes $x_1, \dots, x_n$, ordered from worst to best, so $u(x_1) \le \dots \le u(x_n)$, where $u$ is the agent's utility. Let $P(\ge x_i)$ be the probability of getting $x_i$ or better. Then

$$\mathrm{REU}(g) = u(x_1) + \sum_{i=2}^{n} r\big(P(\ge x_i)\big)\,\big(u(x_i) - u(x_{i-1})\big).$$

The **risk function** $r:[0,1]\to[0,1]$ is non-decreasing with $r(0)=0$ and $r(1)=1$. *In words:* you get the worst outcome for sure, and each further step up counts at its utility gain times a *risk-weighted* chance of getting it ([risk-weighted expected utility](../reference.md#risk-weighted-expected-utility)).

Three facts do most of the work.

1. **$r(p) = p$ gives back expected utility.** Summing the steps with their raw probabilities rearranges into $\sum_i P(x_i)\,u(x_i)$.
2. **Convex $r$ is risk-avoidant.** If $r(p) \le p$ throughout (for example $r(p) = p^2$), every step up is discounted below its probability, so the worse outcomes loom larger. Concave $r$, like $p^{0.5}$, is risk-inclined ([risk function](../reference.md#risk-function)).
3. **Two outcomes.** For a gamble paying $H$ with probability $p$ and $L<H$ otherwise,
$$\mathrm{REU} = u(L) + r(p)\,\big(u(H) - u(L)\big).$$
*In words:* the floor, plus the jump weighted by $r(p)$ instead of $p$.

**Its pedigree.** The formula is the rank-dependent form John Quiggin introduced in economics (1982, as "anticipated utility"); [rank-dependent utility](../reference.md#rank-dependent-utility) weights cumulative probabilities, not individual ones, which is what keeps it from ever preferring a stochastically dominated gamble. Buchak's contribution is the interpretation and its foundation. Her probabilities are the agent's own credences, derived from preference in the style of [2.2](02-02-probability-from-preference.md), and $r$ represents a rational agent's attitude to risk, on a par with her values ($u$) and her beliefs ($p$). Her representation theorem keeps Savage's machinery but weakens the [sure-thing principle](../reference.md#sure-thing-principle): roughly, it must hold only between acts that rank the states in the same order (comonotonic acts).

**The axiom given up.** Independence, in its unrestricted form. That is exactly what lets REU fit the Allais pattern, as Example 2 shows.

**Why curvature is not enough: Buchak's argument.**

1. Under expected utility, a risk attitude can be expressed only through the shape of $u$.
2. The shape of $u$ is fixed by how much the agent values each outcome: by its marginal value to her.
3. An agent can value money linearly over some range yet still prefer a sure thing to a fair gamble on that range, because she cares about the gamble's global shape.
4. Some such patterns, Allais among them, fit no $u$ at all.

∴ Expected utility misdescribes some reasonable risk attitudes, and a second parameter is needed. *In words:* "how much do I want this outcome?" and "how much does the chance of the bad outcome weigh with me?" are separate questions, and expected utility answers both with one curve.

**Where the argument is weakest.** Premise 2. It assumes $u$ measures something prior to risky choice, a *realist* reading of utility ([realism and constructivism about utility](../reference.md#realism-and-constructivism-about-utility), [1.4](01-04-what-a-representation-theorem-shows.md)). On the constructivist reading that the vNM construction suggests, $u$ just *is* whatever function represents her choices among gambles. Then "she values money linearly but avoids risk" has no content: a concave $u$ is her risk aversion, and nothing is mislabelled. That defence protects the EU theorist only where some $u$ fits. Premise 4 is not touched by it: Allais choices still fit none. So the dispute then returns to [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md)'s question of whether violating independence is a mistake.

**Prospect theory: a description, not a norm.** Kahneman and Tversky's prospect theory (1979; the cumulative version, Tversky and Kahneman 1992) predicts what people choose ([prospect theory](../reference.md#prospect-theory)). Its three ingredients:

- **Reference points.** Outcomes are coded as gains and losses from a reference point (often the status quo), not as final wealth.
- **Loss aversion.** The value function is concave for gains, convex for losses, and steeper for losses: their 1992 estimate makes a loss weigh about 2.25 times an equal gain.
- **Probability weighting.** Small probabilities are overweighted and moderate-to-large ones underweighted, an inverse-S curve. The 1979 version weighted each outcome's probability separately, which can favour dominated gambles; the 1992 version weights cumulative probabilities, rank-dependently, like REU.

Its authors offered it as a fit to data, and loss aversion and reference dependence are not usually defended as requirements of rationality; [`philosophy-of-economics` 2.2](../../philosophy-of-economics/lessons/02-02-the-behavioural-challenge.md) uses reference dependence in exactly that descriptive spirit. Keep the three claims apart: rank-dependence is a *formal* family; prospect theory is a *descriptive* claim built from it; REU is a *normative* claim about it.

## Picture

![Decision weight r of p plotted against p from 0 to 1. The dashed diagonal r equals p is expected utility. The convex curve p squared lies below the diagonal, giving 0.25 at p one half, and is risk-avoidant. The concave curve p to the power 0.5 lies above it, giving 0.71 at one half, and is risk-inclined. An inverse-S prospect-theory weight lies above the diagonal for small p and below it for large p, crossing near 0.34](assets/02-04-fig1.svg)

Below the diagonal, every chance of climbing a rung counts for less than its probability. The inverse-S curve is the *descriptive* fit and crosses the diagonal; the normative REU agent of this lesson is the red curve.

## Worked examples

**Example 1 (clean): pricing a gamble with no curvature.** Let $u(x) = x$ (linear in dollars) and $r(p) = p^2$. Gamble $g$ pays 0 with probability 0.2, 50 with 0.3, and 200 with 0.5. On the ladder, $P(\ge 50) = 0.8$ and $P(\ge 200) = 0.5$:

$$\begin{aligned}
\mathrm{REU}(g) &= 0 + r(0.8)(50-0) + r(0.5)(200-50)\\
&= 0.64\times 50 + 0.25\times 150\\
&= 32 + 37.5 = 69.5.
\end{aligned}$$

Expected utility, the same ladder with $r(p) = p$, gives $0.8\times50 + 0.5\times150 = 115$, which equals $0.3\times50 + 0.5\times200$. Since $u$ is linear, her certainty equivalent is 69.5 dollars against the expected-value maximizer's 115. On a plain coin flip between 0 and 200, the two-outcome formula gives $r(0.5)\times200 = 50$: she would sell it for 50 dollars although every dollar is worth the same to her. Expected utility could produce that price only by bending $u$.

**Example 2 (hard): Allais rationalized, and what it costs.** Take [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md)'s gambles, prizes in dollars over 100 tickets: A is 2,000 for sure. B is 0 (tickets 1–3), 6,000 (4–20), 2,000 (21–100). C is 2,000 on tickets 1–20, else 0. D is 6,000 on tickets 4–20, else 0. Normalize $u(0) = 0$, $u(2{,}000) = 1$, $u(6{,}000) = v > 1$. Under expected utility, A over B needs $1 > 0.17v + 0.80$, so $v < 20/17$, while D over C needs $0.17v > 0.20$, so $v > 20/17$: no $v$ does both.

Now give her $r(p) = p^2$. In B, $P(\ge 2{,}000) = 0.97$ and $P(\ge 6{,}000) = 0.17$:

$$\begin{aligned}
\mathrm{REU}(B) &= r(0.97)\cdot 1 + r(0.17)(v-1)\\
&= 0.9409 + 0.0289\,(v-1).
\end{aligned}$$

A over B iff $0.0289(v-1) < 0.0591$, that is, $v < 880/289 \approx 3.045$. For the second pair, $\mathrm{REU}(C) = r(0.2) = 0.04$ and $\mathrm{REU}(D) = r(0.17)\,v = 0.0289v$. So D over C iff $v > 400/289 \approx 1.384$. Both hold for

$$\tfrac{400}{289} < v < \tfrac{880}{289},$$

an open interval (a grid over $v$ confirms it). 2.3's value $v = 7/5$ sits inside it: $\mathrm{REU}(B) = 0.95246 < 1$ and $\mathrm{REU}(D) = 0.04046 > 0.04$. The certainty in A is worth more to her than its probability-weighted share, because $r(0.97) = 0.9409$ discounts B's near-certainty heavily, while 0.17 and 0.20 are both far from certainty and squaring barely separates them.

Where it strains: fitting a pattern with an extra free function is cheap, and a fit is a *descriptive* success. REU's *normative* claim needs more, and it has a price. An agent who violates independence can be led, in sequential choices, to plan one thing and then do another, or to pay to avoid free information. [3.2](03-02-models-of-ambiguity.md) works that objection for ambiguity. Defenders of REU reply that the kind of sequential consistency those arguments demand already presupposes independence.

## Watch out

- **You might think REU just distorts probabilities.** It distorts *cumulative* probabilities: the weight attaches to "this outcome or better", so it depends on an outcome's rank. Transforming each outcome's own probability instead can rank a gamble above one that dominates it. That is the defect of the 1979 version of prospect theory, which rank-dependence removes.
- **You might think convex $r$ is risk-seeking because the curve "bends up".** Convex $r$ lies *below* the diagonal, so it shrinks every chance of doing better: risk-avoidant. Check with $r(0.5)$: 0.25 for $p^2$.
- **You might think prospect theory and REU are rivals for the same job.** One predicts behaviour, including loss aversion that no one calls rational; the other claims to permit a pattern. Data that refute prospect theory leave REU untouched, and a rationality argument against REU leaves prospect theory's fit untouched.

## One-liner

> Expected utility makes the curve of $u$ carry both how much you want each outcome and how much risk worries you; risk-weighted expected utility splits off the second into $r$, buying Allais at the price of unrestricted independence, while prospect theory uses the same machinery only to describe.

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* An agent has risk function $r(p) = p^{3/2}$. Lottery $L$ pays 0 dollars with probability $7/16$, 100 with $5/16$, and 400 with $1/4$. Set $u(0) = 0$, $u(100) = 1$, $u(400) = v > 1$.

(a) Compute $\mathrm{REU}(L)$ as a function of $v$, and find every $v$ for which she strictly prefers 100 dollars for sure to $L$. Do the same for an expected-utility maximizer with the same $u$.
(b) Suppose her utility is linear in money, so $v = 4$. Which does each agent choose, and what does the comparison show? Two sentences.

**P2 (🟡)** *(Exegetical (a)–(b).)* An **invented** paragraph from a finance blog, not the words of any real author:

> "Prospect theory beats expected utility at predicting what investors do, so it is the better theory of rational investing. Loss-averse investors are simply more rational than economists assumed. And since Quiggin and Buchak use the same formula, their work just confirms Kahneman and Tversky."

(a) Name the conflation in the first two sentences, using the lesson's three kinds of claim. Two sentences.
(b) What is wrong with the third sentence? Say what the shared formula is and what each author does with it. Three sentences or fewer.

**P3 (🔴, optional)** *(Formal (a) · Exegetical (b).)* Ana strictly prefers 40 dollars for sure to a fair coin flip paying 100 or 0. An EU theorist says this shows her utility of money is concave. A Buchak-style theorist says Ana may value money linearly and avoid risk.

(a) Normalize $u(0) = 0$, $u(100) = 1$. What must hold of $u(40)$ for an expected-utility model to fit her choice? With linear $u$, $u(x) = x/100$, what must hold of $r(1/2)$ for an REU model to fit? Is $r(p) = p^2$ enough?
(b) Find the crux: the single premise the two theorists split on over this one choice, and what further choices of Ana's could put pressure on the EU side. 120 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b))*

(a) Order the outcomes 0 < 100 < 400. Then $P(\ge 100) = 5/16 + 4/16 = 9/16$ and $P(\ge 400) = 1/4$, with $r(9/16) = (9/16)^{3/2} = 27/64$ and $r(1/4) = (1/4)^{3/2} = 1/8$.

$$\begin{aligned}
\mathrm{REU}(L) &= 0 + \tfrac{27}{64}(1 - 0) + \tfrac18(v - 1)\\
&= \tfrac{19}{64} + \tfrac{v}{8}.
\end{aligned}$$

The sure 100 is worth 1, so she prefers it iff $\tfrac{19}{64} + \tfrac{v}{8} < 1$, i.e. $v < \tfrac{45}{8} = 5.625$.

Expected utility: $\mathrm{EU}(L) = \tfrac{5}{16}\cdot 1 + \tfrac14 v$, so the sure 100 wins iff $\tfrac{5}{16} + \tfrac{v}{4} < 1$, i.e. $v < \tfrac{11}{4} = 2.75$. (Both bounds confirmed on a grid.)

(b) At $v = 4$: $\mathrm{REU}(L) = 51/64 \approx 0.797 < 1$, so the REU agent takes the sure 100; $\mathrm{EU}(L) = 21/16 > 1$, so the EU agent takes $L$. With money valued linearly, only the risk function produces the safe choice; an EU model of the same choice would need $v < 2.75$, a concave $u$.

**Must hit, strict (a)–(b):** $r$ applied to the *cumulative* probabilities $9/16$ and $1/4$; $\mathrm{REU} = 19/64 + v/8$; thresholds $v < 45/8$ (REU) and $v < 11/4$ (EU); at $v = 4$ the choices split.

**Wrong turns:** applying $r$ to $5/16$, the probability of exactly 100, instead of $9/16$. Applying $r$ to the bottom outcome too: the floor counts in full.

---

**P2** *(Exegetical (a)–(b))*

**Must hit, strict (a):**

- The first sentence moves from a **descriptive** success (better prediction) to a **normative** conclusion (a better theory of rational choice).
- The second treats a descriptive parameter (loss aversion) as a norm; prospect theory is not offered as a standard of rationality, and predictive fit is no evidence that a pattern is rational.

**Must hit, strict (b):**

- The shared formula is rank-dependent weighting of **cumulative** probabilities (decision weights on "this outcome or better").
- Quiggin introduced it as a model of choice in economics; Buchak gives it a normative reading, with subjective probabilities and $r$ as a permissible attitude; cumulative prospect theory adds reference points, loss aversion and an inverse-S weight to describe behaviour.
- A shared *formal* structure confirms nothing between them: the claims are of different kinds, and evidence for one is not evidence for another.

**Wrong turns:** saying Buchak endorses loss aversion: REU has no reference point and no loss aversion. Saying prospect theory is "irrational", which grades a description as if it were a norm.

**Model answer:** (a) The blog infers a normative conclusion from descriptive fit: a model that predicts investors well tells you what they do, not what they ought to do. Calling loss-averse investors "more rational" grades a descriptive parameter as a norm, which prospect theory never claimed to be. (b) Quiggin, Buchak and cumulative prospect theory share a formal device, weights on cumulative probabilities. Quiggin uses it to model choice, Buchak to claim that a risk-avoidant $r$ is rationally permissible, and Kahneman and Tversky, with reference points and loss aversion added, to describe behaviour. Sharing a formula makes the claims neither confirm nor compete with each other.

---

**P3** *(Formal (a) · Exegetical (b))*

(a) EU: $u(40) > \tfrac12 u(100) + \tfrac12 u(0) = \tfrac12$. With $u(40) = 0.4$ under linearity, this fails, so EU needs $u$ concave enough that $u(40) > 1/2$.

REU with linear $u$: $\mathrm{REU}(\text{flip}) = u(0) + r(\tfrac12)(1 - 0) = r(\tfrac12)$, against $u(40) = 0.4$. So she prefers the sure 40 iff $r(\tfrac12) < 0.4$. With $r(p) = p^2$, $r(\tfrac12) = 0.25 < 0.4$: enough (her certainty equivalent for the flip is 25 dollars).

**Must hit, strict (b):**

- One choice violates no axiom, so independence is **not** the crux here; both models fit.
- The crux is whether $u$ has content independent of choices among gambles: **realism vs constructivism about utility** (Buchak's premise 2). If $u$ is constructed from her gamble choices, "linear $u$ with risk avoidance" and "concave $u$" are one fact described twice.
- Pressure on the EU side: independent evidence of linear valuation (riskless trade-offs), or further choices that fit no single concave $u$, such as an Allais-type pattern, which would force the EU theorist to call her mistaken.

**Wrong turns:** naming independence as the crux of this single choice. Saying the EU theorist must deny that Ana is rational: EU fits her choice easily.

**Model answer:** Both models fit Ana's choice, so no axiom is at stake yet. The theorists split on whether her utility function describes anything beyond her choices among gambles. The EU theorist, reading $u$ constructively, says a concave $u$ simply is her preference for the sure 40. The Buchak-style theorist, reading $u$ realistically, says $u$ measures how much she values money, which could be linear, so the caution must go elsewhere. Evidence that would pressure the EU side: riskless trade-offs showing linear valuation, or a later Allais-type pattern that no single $u$ fits, at which point the EU theorist must call Ana mistaken rather than redescribe her.

</details>

## Flashback

**From Lesson [2.2](02-02-probability-from-preference.md) (Probability from preference):** *(Formal (a)–(b) · Exegetical (c).)* A farmer faces three states next season: Drought, Normal and Flood, with credences 0.2, 0.6 and 0.2. Her utility of money is linear, but money is worth twice as much to her in a drought: in the notation $\lambda_s u(x)$, $\lambda_{\text{Drought}} = 2$ and $\lambda_{\text{Normal}} = \lambda_{\text{Flood}} = 1$.

(a) Three policies each pay 1,200 dollars in one state and nothing otherwise. Find the sure amount she takes as equivalent to each.
(b) An analyst assumes state-independent linear utility and reads her credences off these three prices. What numbers does he report, and do they sum to 1? Which states does he overrate and which underrate? Why is Flood misread, when money is worth the same to her there as in a Normal year?
(c) Could any further choice of hers, among acts paying money on these three states, expose the analyst's error? One sentence.

<details>
<summary>Solution</summary>

(a) A sure amount $c$ arrives in every state, so it is worth $c\,(0.2 \cdot 2 + 0.6 \cdot 1 + 0.2 \cdot 1) = 1.2\,c$. Each policy is worth $P(s)\,\lambda_s \cdot 1200$:

$$\begin{aligned} \text{Drought: } 1.2\,c &= 0.2 \cdot 2 \cdot 1200 = 480 \;\Rightarrow\; c = 400,\\ \text{Normal: } 1.2\,c &= 0.6 \cdot 1 \cdot 1200 = 720 \;\Rightarrow\; c = 600,\\ \text{Flood: } 1.2\,c &= 0.2 \cdot 1 \cdot 1200 = 240 \;\Rightarrow\; c = 200. \end{aligned}$$

(b) Dividing each price by 1,200, he reports $\tfrac13$, $\tfrac12$ and $\tfrac16$, which sum to 1. These are $Q(s) = P(s)\lambda_s / \sum_t P(t)\lambda_t$, the products $0.4, 0.6, 0.2$ divided by $1.2$. He overrates Drought ($\tfrac13$ against $\tfrac15$) and underrates Normal ($\tfrac12$ against $\tfrac35$) and Flood ($\tfrac16$ against $\tfrac15$). Flood is misread because the reading is normalized: the drought weight inflates the total 1.2 that every state's product is divided by, so a state with $\lambda_s = 1$ shrinks too.

**Must hit, strict (c):** no. She values every act at $\sum_s P(s)\lambda_s u(f(s))$, which is proportional to $\sum_s Q(s) u(f(s))$, so she ranks every act exactly as a state-independent agent with credence $Q$ would; choices fix only the products $P(s)\lambda_s$, and because $Q$ is itself a probability no coherence check flags it. Only evidence from outside her choices (the forecast she cites, say) can separate her credence from her state-dependent values.

**Wrong turns:** forgetting that the sure amount is also received in every state, which gives $c = 480$ for the drought policy. Assuming the Flood reading is correct because $\lambda_{\text{Flood}} = 1$. Expecting the analyst's numbers to fail to sum to 1, so that an additivity check would catch the error.

</details>

## Connections

- **Backward:** [1.2](01-02-from-expected-value-to-expected-utility.md) made risk aversion concavity; this lesson asks whether it must be. [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md) showed Allais violates independence; REU is the model that keeps the choices and gives up the axiom. The constructivist reply turns on [1.4](01-04-what-a-representation-theorem-shows.md). Arrow–Pratt and the Marschak–Machina triangle, where Allais shows up as fanning indifference lines, are [`micro-refresher` 2.2](../../micro-refresher/lessons/02-02-risk-aversion.md) and [`micro-refresher` 2.1](../../micro-refresher/lessons/02-01-expected-utility.md).
- **Forward:** [3.1](03-01-the-ellsberg-paradox.md) breaks the sure-thing principle again, this time because probabilities are unknown, not because of risk. [3.2](03-02-models-of-ambiguity.md)'s maxmin expected utility is the ambiguity analogue of a convex $r$, and carries the dynamic-consistency objection that REU faces too.
- **Sideways:** [`philosophy-of-economics` 2.2](../../philosophy-of-economics/lessons/02-02-the-behavioural-challenge.md) leans on reference dependence and leaves prospect theory to this lesson; its question of whether an anomaly is the chooser's mistake or the model's is the same normative/descriptive split. Finding the one premise two theorists split on is [`philosophical-method` 4.3](../../philosophical-method/lessons/04-03-finding-the-crux.md)'s move.

# Political Economy · Lesson 4.4: Regulatory capture

> ⏱ ~15 min · Module 4: Accountability, interests and rents · Builds on: [3.2 Olson's logic of collective action](03-02-olsons-logic-of-collective-action.md), [4.3 Lobbying: protection for sale](04-03-lobbying-protection-for-sale.md) · Unlocks: [4.5 Rent-seeking contests](04-05-rent-seeking-contests.md)

## Why this matters

The textbook case for regulation is market failure: a natural monopoly overcharges, so a commission caps its price. The record that made economists doubt that story was full of regulators who raised prices, blocked entry and cartelized industries that had been competitive. The theory of [regulatory capture](../reference.md#regulatory-capture) asks the positive question behind those cases. If regulation is a good supplied by politicians to whoever bids for it most effectively, what does it look like? The surprising answer is that a captured regulator still does not hand the industry everything it wants.

## The idea

George Stigler ("The Theory of Economic Regulation," *Bell Journal of Economics and Management Science*, 1971) treated regulation as a transfer of wealth sold in a political market. Producers are few, each with a large stake; consumers are many, each with a small one. That is [3.2](03-02-olsons-logic-of-collective-action.md)'s asymmetry, here as [concentrated benefits and diffuse costs](../reference.md#concentrated-benefits-diffuse-costs): the few organize and inform themselves, the many stay rationally ignorant, so the few win.

Sam Peltzman ("Toward a More General Theory of Regulation," *Journal of Law and Economics*, 1976) formalized Stigler and found a catch. Consumers are weak, not absent. Each extra dollar of price costs the regulator a few votes. So a regulator who maximizes political support stops short of the monopoly price, and also stops short of the competitive one. The spoils are shared. Which industry gets regulated, and how prices respond to costs, follows from where the regulator sits between the two corners.

## The model

**Players and timing.** One regulator chooses a price $p$ for an industry with demand $Q(p)$ and costs it cannot change. Profit is $\pi(p)$, single-peaked at the monopoly price $p_m$ and zero at the competitive price $p_c$ (marginal cost, with no fixed cost). Consumers and producers are not strategic. They reward or punish the regulator according to their wealth.

**Objective.** The regulator maximizes political support

$$M(p, \pi), \qquad M_p < 0, \quad M_\pi > 0,$$

with diminishing returns ($M_{pp} < 0$, $M_{\pi\pi} < 0$) and no cross effects ($M_{p\pi} = 0$), following Peltzman. *In words:* higher prices lose consumer votes, higher profits win producer support, each at a falling rate. Peltzman first builds $M$ from a vote count: beneficiaries' support minus losers' opposition, each a probability that rises with the per-capita stake. $M(p,\pi)$ is his reduced form. Call this the [Peltzman model](../reference.md#peltzman-model).

**Proposition (the Peltzman optimum).** Let $V(p) = M(p, \pi(p))$ with $\pi$ concave. Then (i) the optimal price $p^*$ satisfies

$$-\frac{M_p}{M_\pi} = \pi'(p^*),$$

(ii) $p^* < p_m$, and (iii) $p^* > p_c$ whenever producers' marginal support at zero profit exceeds consumers' marginal opposition, $M_\pi\,\pi'(p_c) > -M_p$ there.

*In words:* the regulator raises the price until the votes lost from consumers per dollar of extra profit equal the votes that dollar buys from producers, which happens strictly between competition and monopoly.

*Proof.*

1. $V'(p) = M_p + M_\pi\,\pi'(p)$ by the chain rule.
2. $V''(p) = M_{pp} + 2M_{p\pi}\pi' + M_{\pi\pi}(\pi')^2 + M_\pi\pi''$. With $M_{p\pi} = 0$, $M_{pp}, M_{\pi\pi} < 0$, $M_\pi > 0$ and $\pi'' \le 0$, every term is non-positive and the first is negative, so $V$ is strictly concave. Any interior root of $V'$ is the unique maximum, which gives (i).
3. For $p \ge p_m$, $\pi'(p) \le 0$, so $V'(p) \le M_p < 0$. Lowering the price raises support. Hence $p^* < p_m$, which is (ii).
4. At $p_c$, $V'(p_c) = M_p + M_\pi\pi'(p_c) > 0$ by the hypothesis of (iii), so raising the price from $p_c$ raises support. By concavity $p^* > p_c$. ∎

Pure producer protection ($p^* = p_m$) needs $M_p = 0$: consumers who never notice. Pure consumer protection needs producers whose support does not respond to profit. Stigler's capture is the first corner. Peltzman's point is that it is a corner.

**Becker: the same logic with both sides organized.** Gary Becker ("A Theory of Competition among Pressure Groups for Political Influence," *Quarterly Journal of Economics*, 1983) drops the vote-maximizing regulator and lets groups produce pressure. In his equilibrium, the transfer depends on each group's efficiency at producing pressure, on group size, and on the deadweight cost of taxes and subsidies. A sketch of the key effect: if raising a transfer $T$ gives the winners less than a dollar per dollar and costs the losers more than a dollar, then a larger deadweight loss lowers the winners' marginal return to pressure and raises the losers'. Equilibrium [pressure-group competition](../reference.md#pressure-group-competition) therefore restrains inefficient transfers. Becker reads this as reconciling the market-failure and interest-group views of government.

**Laffont–Tirole: capture through information (outline).** Jean-Jacques Laffont and Jean Tirole ("The Politics of Government Decision-Making: A Theory of Regulatory Capture," *Quarterly Journal of Economics*, 1991) put an agency between Congress and the firm. The firm knows its cost; the agency sometimes learns it; Congress learns only what the agency reports. A low-cost firm gains an information rent if the agency hides the evidence, so it will pay for silence. Suppose a dollar passed to the agency is worth $k \le 1$ to it, because side deals are costly and risky. Then to buy honesty, Congress must reward a report by at least $k$ times the firm's stake. Congress's cheaper response is to shrink the stake. It makes the firm's incentive scheme lower-powered, so less rides on what the agency reveals. This is [information-based capture](../reference.md#information-based-capture): capture is deterred in equilibrium, and the threat shapes the rules. The paper also finds that interest groups are more powerful when they favor inefficient regulation, where inefficiency is measured by the information gap between the industry and Congress.

**The revolving door and the media.** A regulator's future industry job is a deferred side payment in Laffont–Tirole's sense. Yeon-Koo Che (*RAND Journal of Economics*, 1995) showed the sign can flip: a regulator who wants an industry job may regulate harder to display her skill. Which effect dominates is an empirical question for [`empirical-political-economy`](../../empirical-political-economy/syllabus.md). Timothy Besley and Andrea Prat ("Handcuffs for the Grabbing Hand?," *American Economic Review*, 2006) extend capture to the watchdog. An incumbent can buy the media's silence about bad performance, and the structure of the media market determines how costly that is. Hence [media capture](../reference.md#media-capture) undermines the [electoral accountability](../reference.md#electoral-accountability) of [4.1](04-01-elections-as-accountability.md); the demand side of slant is in [1.4](01-04-persuasion-and-the-media.md).

**Where the argument is weakest.** The support function $M$. Peltzman deliberately leaves its shape open and sets aside who gets what share. So the model only pins $p^*$ inside the interval between the two corners, and any observed regulated price in that interval fits it. Without a micro-founded $M$, "the regulator serves the public" and "the regulator serves whoever delivers support" predict the same price level. The testable content is in comparative statics: which industries get regulated, and how prices respond to cost and demand shocks. A critic can also attack the single vote-maximizing regulator. Most regulation is done by appointed agencies, and with an agency in the middle you are in Laffont–Tirole's world, where outcomes turn on information, not votes.

## Picture

![Industry profit plotted against the regulated price. A blue profit hill rises from zero at the competitive price 4 to a peak of 16 at the monopoly price 8 and falls to zero at 12. Three red iso-support curves rise to the right. The solid one is tangent to the hill at the Peltzman optimum, price 6 and profit 12. A dashed lower-support curve passes through the monopoly point, and a dotted higher-support curve misses the hill entirely. The Cournot duopoly point sits on the hill just right of the optimum.](assets/04-04-fig1.svg)

Support rises toward the upper left, with lower prices and higher profit. The regulator climbs to the highest iso-support curve the profit hill touches. That tangency is condition (i): the curve's slope $-M_p/M_\pi$ equals the hill's slope $\pi'(p)$.

## Worked examples

**Example 1 (clean): a log support function.** Linear demand $Q = a - p$, constant marginal cost $c$, so $\pi = (p - c)(a - p)$ and consumer surplus $CS = (a-p)^2/2$. Let

$$M = \alpha \ln \pi + (1 - \alpha)\ln CS, \qquad \alpha \in (0, 1),$$

where $\alpha$ is producers' political weight. The first-order condition is

$$\frac{\alpha\,(a - 2p + c)}{(p - c)(a - p)} = \frac{2(1-\alpha)}{a - p},$$

which simplifies to $\alpha(a - 2p + c) = 2(1-\alpha)(p - c)$, so

$$p^* = c + \alpha\,\frac{a - c}{2}.$$

The regulated markup is the fraction $\alpha$ of the monopoly markup $(a-c)/2$. With $a = 12$, $c = 4$, $\alpha = \tfrac12$: $p^* = 6$, profit 12, consumer surplus 18, against monopoly price 8. Check (i): $M_\pi = \alpha/\pi = 1/24$ and $M_p = -2(1-\alpha)/(a-p) = -1/6$, so $-M_p/M_\pi = 4 = \pi'(6)$.

Cost pass-through is $dp^*/dc = 1 - \alpha/2 = 3/4$, between a monopolist's $1/2$ and competition's $1$. Raising $c$ from 4 to 5 moves $p^*$ from 6 to $27/4$.

**Example 2 (the hypothesis bites): which industries get regulated?** The political gain from regulating is $V(p^*) - V(p_0)$, where $p_0$ is the unregulated price. Because $V$ is concave, the gain grows with the distance from $p^*$. Keep $\alpha = \tfrac12$:

| Unregulated market | $p_0$ | Gain in support |
|---|---|---|
| Monopoly | 8 | $\tfrac12\ln\tfrac{27}{16} \approx 0.262$ |
| Cournot duopoly, price $(a + 2c)/3$ | $20/3$ | $\approx 0.033$ |
| Competition | 4 | unbounded (zero profit buys no support under log) |

The duopoly, already near the middle, is worth an eighth as much as the monopoly. That is Peltzman's prediction: natural monopolies and competitive industries attract regulation; oligopolies, less. (Cournot pricing is [`grad-micro` 6.2](../../grad-micro/lessons/06-02-oligopoly.md)'s.)

Now drop Peltzman's hypothesis that consumers' marginal opposition is positive. With $\alpha = 1$, Stigler's pure capture, $p^* = 8$, the monopoly price, and the gain from regulating a monopoly is zero. In this corner the regulator cartelizes competitive industries but gains nothing by touching a natural monopoly. In the model, regulating a utility pays only if consumers carry some weight.

## Watch out

- **You might think** a regulator who sets a price between what the firm asked for and what consumer advocates demanded is serving the public. Actually that is exactly what a support-maximizing regulator does. "Both sides unhappy" does not distinguish capture from public interest.
- **You might think** capture means the industry gets the monopoly outcome. That requires consumers' marginal opposition to be zero ($M_p = 0$), the hypothesis people drop when they quote Stigler. With any positive weight, the captured price lies strictly below $p_m$.
- **You might think** Laffont–Tirole predict bribes. In their model capture is anticipated: Congress makes the contracts collusion-proof, paying the agency and lowering the stakes, so no side deal is worth making. The trace of capture is low-powered incentives, not observed payments.

## One-liner

> A regulator selling policy for political support stops between competition and monopoly, so the spoils are shared, and capture shows up in which industries get regulated and how prices move, not in the price level alone.

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* A water utility faces demand $Q = 30 - p$ and marginal cost 6. The regulator's support is $M = \ln \pi + 2\ln Q$: every unit consumers get earns some goodwill.

(a) Find the regulated price, the profit there, and the competitive and monopoly prices.
(b) A new fixed cost of 64 arrives (marginal cost unchanged). Find the new regulated price and profit. How much of the 64 do consumers absorb, and what happens to the monopoly price?

**P2 (🟡)** *(Exegetical.)* A state raises the training required of licensed dog groomers from 300 to 1,200 hours, citing animal safety. Critics call it capture. In 120 words or fewer: (a) name one effect that both the public-interest and the Stigler explanations predict, so it cannot decide between them; (b) name two observables that would discriminate, and say which way each points.

**P3 (🔴, optional)** *(Formal (a)–(b) · Exegetical (c).)* An electricity utility faces $Q = 50 - p$, marginal cost 10 and a fixed cost of 175. It asked for a price of 30; consumer advocates asked for 10. The commission set 25 and announced: "A rate that disappoints both the utility and its critics is the mark of a regulator serving the public interest."

(a) Find the price that maximizes total surplus subject to the utility covering its costs, and the utility's profit at 25.
(b) Show that a regulator maximizing $M = \ln \pi + \kappa \ln Q$ chooses 25 for some $\kappa > 0$, and find $\kappa$.
(c) In 80 words or fewer: which model does the announcement ignore, and what assumption is doing its work?

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) $\pi = (p - 6)(30 - p)$, $\pi' = 36 - 2p$, and $d\ln Q/dp = -1/(30-p)$. The first-order condition is

$$\frac{36 - 2p}{(p-6)(30-p)} = \frac{2}{30 - p} \implies 36 - 2p = 2(p - 6) \implies p^* = 12.$$

Profit is $6 \times 18 = 108$. Competitive price 6, monopoly price $(30 + 6)/2 = 18$. The markup is half the monopoly markup. $V$ is concave (both logs of concave positive functions), so this is the maximum; a grid search agrees.

(b) Now $\pi = (p-6)(30-p) - 64$. The condition becomes $(36 - 2p)(30 - p) = 2[(p-6)(30-p) - 64]$, which rearranges to $p^2 - 42p + 392 = 0$, with roots 14 and 28. At 28 profit is $-20$, outside the domain, so $p^* = 14$, with profit $8 \times 16 - 64 = 64$. Had the price stayed at 12, profit would be $108 - 64 = 44$. Profit falls by 44 instead of 64: consumers absorb **20** through the higher price. The monopoly price stays 18, since a fixed cost does not move $\pi'$. This is Peltzman's buffering: the regulator spreads a loss over both groups.

**Wrong turns:** In (a), treating $M$ as total surplus and setting $p = 6$. In (b), keeping $p = 12$ because "fixed costs don't affect prices." That is true for the monopolist, but the regulator's objective depends on the profit level.

---

**P2** *(Exegetical, strict.)*

**Must hit, strict:**

- (a) Both predict fewer entrants, higher prices and higher incumbent incomes. Any quality standard raises costs. These effects cannot decide the question.
- (b) Two discriminating observables, each with its direction. For example: whether incumbents are grandfathered (exempting those already practising points to capture, since a safety rationale binds everyone); whether measured harm to animals (injury complaints, insurance claims) falls after the rule (a fall supports public interest, no change supports capture); who lobbied for the rule (the groomers' association, not animal-welfare groups, points to capture); whether stringency across states tracks the organization of incumbents rather than injury rates.

**Wrong turns:** Offering "prices rose" as evidence of capture. Offering "the board says it is about safety" as evidence: both theories predict that statement.

---

**P3** *(Formal (a)–(b) · Exegetical (c), all strict.)*

(a) Total surplus falls with $p$ above marginal cost (its derivative is $-(p - 10)$), so the welfare-maximizing break-even price is the lowest price with $\pi \ge 0$. Solve $(p - 10)(50 - p) = 175$: $p^2 - 60p + 675 = 0$, roots 15 and 45. The answer is **15**. At 25 profit is $15 \times 25 - 175 = 200$, a rent above break-even.

(b) The condition is $\pi'(p)/\pi = \kappa/(50 - p)$. At 25: $\pi' = 60 - 50 = 10$, $\pi = 200$, so $10/200 = \kappa/25$ and $\kappa = 5/4$. A grid search confirms 25 maximizes $\ln\pi + \tfrac54\ln Q$, and 25 lies below the monopoly price 30, as the proposition requires.

**Must hit, strict (c):**

- The model ignored is Peltzman's: a support-maximizing regulator also sets a price strictly between the firm's request and the competitive level.
- The assumption doing the work is that only a public-interest regulator would weigh both sides. (a) shows the public-interest price is 15, not 25.

**Wrong turns:** In (a), answering 10 (the utility then loses its fixed cost) or 30. In (c), calling the commission captured: the announcement fails as evidence, but 25 is consistent with several models.

**Model answer (c):** The announcement ignores Peltzman's model, in which a regulator maximizing political support also disappoints both sides by pricing strictly between competition and monopoly. It assumes that only a public-interest regulator compromises. Here the public-interest break-even price is 15, so 25 leaves the utility a rent of 200, which fits a support-maximizer giving producers weight $\kappa = 5/4$.

</details>

## Flashback

**From Lesson [4.2](04-02-career-concerns-and-pandering.md) (Career concerns and pandering):** *(Formal (a) · Exegetical (b).)* A permit commissioner decides whether to approve a pipeline. Approval is popular: the reappointment committee's prior that the pipeline is safe is above one half. She knows whether it is safe. She is either congruent, wanting the right decision, a stake worth $b = 2$ to her, or dissonant, always taking the wrong one. Reappointment is worth $W = 5$ to her. The committee reappoints iff its posterior that she is congruent exceeds that of a fresh appointee, ties going to the newcomer, and with probability $q$ it learns before the hearing whether the pipeline was safe. An invented staff memo: "The commissioner approved the pipeline although her own engineers found it unsafe. Only an official who does not share the public's interest would do that. Requiring the engineering report to be published before her hearing would not help: more scrutiny only increases the pressure to please the public."

(a) For which $q$ does a congruent commissioner who knows the pipeline is unsafe approve it? Classify the current $q = 0.1$ and $q = 0.4$, its value under the publication rule, giving both payoffs in each case.
(b) In two sentences, name the memo's two errors.

<details>
<summary>Solution</summary>

(a) Rejecting pays $b + qW$: the policy stake, plus reappointment only if the committee learns she was right, since an unexposed rejection of the popular option is bad news about her type. Approving pays $(1-q)W$: reappointment only if she is not found out. She approves iff $(1 - 2q)W > b$, that is $q < (1 - \tfrac25)/2 = 0.3$. At $q = 0.1$, rejecting pays $2 + 0.5 = 2.5$ and approving pays $4.5$: **she panders**. At $q = 0.4$, rejecting pays $2 + 2 = 4$ and approving pays $3$: **she is truthful**. Neither the prior nor the share of congruent officials enters the cutoff.

**Must hit, strict (b):**

- First error: at $q = 0.1$ approving against her own information is exactly what a *congruent* commissioner does (and a dissonant one does it too), so the approval is no evidence she is dissonant. The panderer is the good type.
- Second error: scrutiny works against pandering, not for it. Raising $q$ raises the payoff to the right decision, $b + qW$, and lowers the payoff to pandering, $(1-q)W$; publication moves $q$ past 0.3 and ends pandering.

**Wrong turns:** Using $W > b$ as the pandering condition, which is the $q = 0$ case, and concluding that no amount of scrutiny helps. Accepting the memo's first claim because she "chose popularity over safety": in the model that choice reveals her incentive, not her type.

**Model answer:** The memo infers dissonance from an approval that a congruent commissioner also makes at $q = 0.1$, because rejecting the popular option looks like dissonance unless the truth surfaces before the hearing. And scrutiny cuts against pandering: publication raises $q$ to 0.4, past the cutoff of 0.3, so rejecting now pays 4 against approving's 3.

</details>

## Connections

- **Backward:** the producer–consumer asymmetry is [3.2](03-02-olsons-logic-of-collective-action.md)'s [Olson's logic](../reference.md#olsons-logic) applied to a regulated market. [4.3](04-03-lobbying-protection-for-sale.md) priced influence through contribution schedules; here influence is a reduced-form support function. Laffont–Tirole's agency is the hidden-information contract of [`grad-micro` 5.4](../../grad-micro/lessons/05-04-moral-hazard-principal-agent.md) with a third tier, and the media channel undermines [4.1](04-01-elections-as-accountability.md)'s accountability.
- **Forward:** [4.5](04-05-rent-seeking-contests.md) prices the resources groups burn competing for the rent the regulator creates. `institutions-and-development` takes capture to autocracy, and [`empirical-political-economy`](../../empirical-political-economy/syllabus.md) owns the evidence on revolving doors and media capture.
- **Sideways:** [`political-institutions` 6.2](../../political-institutions/lessons/06-02-delegation-and-oversight.md) notes that fire-alarm oversight hears the regulated industry first. That is the channel through which the organized side's $M_\pi$ outweighs the diffuse side's $M_p$. Whether a regulator *should* weigh the industry at all is [`public-economics`](../../public-economics/syllabus.md)'s question.

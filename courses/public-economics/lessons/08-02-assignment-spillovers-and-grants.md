# Public Economics · Lesson 8.2: Assignment, spillovers, and grants

> ⏱ ~15 min · Module 8: Fiscal federalism · Builds on: [8.1 Tiebout: voting with your feet](08-01-tiebout-voting-with-your-feet.md), [1.1 The Samuelson rule beyond quasilinearity](01-01-the-samuelson-rule-beyond-quasilinearity.md), [2.4 The marginal cost of public funds](02-04-second-best-and-the-marginal-cost-of-public-funds.md) · Unlocks: [8.3 Tax competition](08-03-tax-competition.md)

## Why this matters

Every federation has to decide who runs the schools, who builds the roads and who pays. [8.1](08-01-tiebout-voting-with-your-feet.md) showed that mobile residents can sort into towns that suit their tastes. This lesson asks the designer's question: which goods should be left to local governments at all, and when the center pays part of a local bill, what form should the money take? The answers are a trade-off (tailoring against spillovers), a Pigouvian subsidy with a new name (the matching grant), and one of public finance's most persistent empirical puzzles (the flypaper effect).

## The idea

Two invented towns want parks. Hilltown's residents value them highly and Rivertown's much less. If each town decides for itself, Hilltown builds a big park and Rivertown a small one, each at the size its own residents would pay for. If a national ministry must pick one size for both, it picks something in between: Hilltown gets too little park and Rivertown too much. Tailoring beats uniformity. That is the core of Oates's case for decentralization.

Now suppose half of Rivertown's park users drive over from Hilltown. Rivertown's council counts only its own residents' benefit, so it builds too small a park: part of the value leaks across the border, uncounted. The center can fix this without taking over. It offers to pay a share of every dollar Rivertown spends on the park, which lowers the park's price to Rivertown by exactly the share of benefit that leaks out. That is a **matching grant**, and it is Pigou's subsidy for a positive externality in federal clothing.

A plain cash transfer, a **lump-sum grant**, cannot do this job, because it does not change what one more unit of park costs the town. But a lump sum is the better gift if the goal is only to make the town better off: the town can spend it on whatever it values most. And that sets up the puzzle. Theory says a town treats a lump-sum grant like a rise in its residents' income. The data say grant money stays in the public budget far more than income does: money sticks where it hits.

## The formal version

**Setup.** Jurisdictions $i=1,\dots,n$ each provide a local public good $G_i$ at constant unit cost $c$. The total marginal benefit of $G_i$, summed over everyone who uses it, is $\mathrm{MB}_i(G_i)$, decreasing. Benefits are measured in money (quasilinear), so surplus is $\int \mathrm{MB}_i - cG_i$. Efficiency is the [Samuelson rule](../reference.md#samuelson-rule) applied across borders: $\mathrm{MB}_i(G_i^*)=c$, with every beneficiary counted.

**Decentralization theorem (Oates 1972, *Fiscal Federalism*).** Suppose (i) no spillovers, so each town's residents receive all of $\mathrm{MB}_i$; (ii) no economies of scale, so the cost of $G_i$ does not depend on who provides it; and (iii) the center, whether for lack of information or for political reasons, must provide a uniform level $\bar G$ everywhere. Then

$$\sum_i\Big[\textstyle\int_0^{G_i^*}\mathrm{MB}_i-cG_i^*\Big]\;\ge\;\sum_i\Big[\textstyle\int_0^{\bar G}\mathrm{MB}_i-c\bar G\Big]\quad\text{for every }\bar G,$$

with strict inequality whenever the $G_i^*$ differ. *In words:* [local provision tailored to local demand](../reference.md#oates-decentralization-theorem) is at least as good as any one-size-fits-all central level, and strictly better when tastes differ. The proof is one line: each $G_i^*$ maximizes town $i$'s own surplus, so it beats $\bar G$ town by town.

With linear marginal benefit $\mathrm{MB}_i=a_i-G$, tailored provision is $G_i^*=a_i-c$, the best uniform level is $\bar G=\bar a-c$ (where $\bar a$ is the mean of the $a_i$), and

$$\text{loss from uniformity}=\tfrac12\sum_i (a_i-\bar a)^2 .$$

*In words:* the cost of centralizing grows with the square of how much towns differ.

**Spillovers.** Now let a share $\sigma\in(0,1)$ of each town's marginal benefit accrue to outsiders, so residents get $(1-\sigma)\,\mathrm{MB}_i$. This is an [interjurisdictional spillover](../reference.md#interjurisdictional-spillover). A town that counts only its own residents sets $(1-\sigma)\,\mathrm{MB}_i(G_i)=c$, which is below the efficient level. In the linear case, it provides $G_i=a_i-c/(1-\sigma)$, short of $G_i^*$ by $c\sigma/(1-\sigma)$, at a loss of $\tfrac12\big(c\sigma/(1-\sigma)\big)^2$ per town. Oates's trade-off is the comparison between this loss and the uniformity loss above: heterogeneity favors decentralizing, spillovers favor centralizing.

**Matching grant.** If the center pays a share $m$ of every unit, the town's price falls to $(1-m)c$ and it sets $(1-\sigma)\,\mathrm{MB}_i=(1-m)c$. Efficiency requires $\mathrm{MB}_i=c$, so

$$m^*=\sigma .$$

*In words:* the Pigouvian [matching grant](../reference.md#matching-grant) pays exactly the share of the benefit that leaks out. It is [`grad-micro` 6.3](../../grad-micro/lessons/06-03-externalities-coase-theorem.md)'s Pigouvian subsidy with the town as the agent. It keeps decentralization's tailoring and removes the spillover loss. The catch is that the center must know $\sigma$, and each grant dollar is raised by distorting taxes, at a cost of $\lambda>1$ per dollar, where $\lambda$ is the [marginal cost of public funds](../reference.md#marginal-cost-of-public-funds) of [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md).

**Lump-sum vs matching at equal cost.** Treat the community as one consumer with income $Y$ who buys private consumption $x$ (price 1) and $G$ (price 1), with convex preferences. A [lump-sum grant](../reference.md#lump-sum-grant) $L$ gives the budget $x+G=Y+L$, a parallel shift. A matching rate $m$ gives $x+(1-m)G=Y$, a rotation. Suppose the two cost the center the same, $L=mG_m$, where $(x_m,G_m)$ is the community's choice under matching. Then:

1. The community weakly prefers the lump sum. $x_m+G_m=Y+mG_m=Y+L$, so the matching bundle is affordable under the lump sum.
2. The matching grant buys more $G$: $G_m\ge G_L$. At the matching bundle the community's marginal rate of substitution of $x$ for $G$ is $1-m<1$, while the lump-sum line trades them one for one. So along the lump-sum line the community wants less $G$ and more $x$.

*In words:* a lump sum is worth more to the recipient, and a matching grant buys more of the good per dollar of the center's money. Which one the center wants depends on whether its aim is to help the town or to change what the town does. With Cobb-Douglas preferences $\alpha\ln x+(1-\alpha)\ln G$, demands are $G_L=(1-\alpha)(Y+L)$ and $G_m=(1-\alpha)Y/(1-m)$, and matching leaves $x$ at $\alpha Y$.

**The flypaper effect.** Standard theory says a lump-sum grant to a community enters exactly as residents' income does: in the budget, only $Y+L$ matters. So a dollar of grant should raise public spending by the same few cents as a dollar of residents' income. Hines and Thaler (1995, *Journal of Economic Perspectives*) put the theoretical figure at roughly 5 to 10 cents and report estimates of the grant effect that are much larger, sometimes close to a full dollar. The name comes from the phrase in their paper: "money sticks where it hits". This is the [flypaper effect](../reference.md#flypaper-effect). Three families of explanations:

- **Fiscal illusion:** voters see the average price of public spending fall and treat the grant as a price cut.
- **Agency:** officials who like larger budgets spend the grant rather than pass it back as a tax cut. Inman (2008, NBER Working Paper 14579) reviews the candidate explanations and concludes that political institutions and officials' incentives fit best. The models are [`political-economy`](../../political-economy/syllabus.md) Module 4's.
- **Measurement:** grants are not random. Knight (2002, *American Economic Review*) instruments federal highway grants with the political power of states' congressional delegations and finds that the grants *crowd out* state spending, by roughly 0.88 to 1.12 dollars per grant dollar. For that program, the flypaper effect disappears once endogeneity is addressed.

## Picture

![Budget lines in the plane of the local public good G, horizontal, and private consumption x, vertical. A dashed no-grant line x plus G equals 200 with the chosen point at G 60, x 140. A green lump-sum line x plus G equals 230 with the chosen point at G 69, x 161. A red matching line x plus two thirds G equals 200 with the chosen point at G 90, x 140, which also lies on the green line. The green indifference curve lies just above the red one.](assets/08-02-fig1.svg)

This is Example 1. The red matching point sits on the green lump-sum line, so the lump sum could have bought it, and the community chose something else that it likes better. The lump-sum grant moves the chosen point up and slightly right. The matching grant moves it straight right.

## Worked examples

**Example 1 (clean): the same money, two ways.** An invented community has $u=0.7\ln x+0.3\ln G$ and income 200, with both goods priced at 1. With no grant, $G=0.3\times200=60$ and $x=140$.

- *Lump sum of 30:* $G=0.3\times230=69$ and $x=161$. Only 9 of the 30 goes to $G$, the same 30 percent the community spends from any dollar of its own income. The rest is effectively a local tax cut.
- *Matching grant costing 30:* $G_m=60/(1-m)$ and the cost is $mG_m=60m/(1-m)=30$, so $m=1/3$. Then $G=90$, $x=140$, and the center pays $30$.
- *Comparison:* utility is $0.7\ln161+0.3\ln69=4.8272$ under the lump sum and $0.7\ln140+0.3\ln90=4.8091$ under matching. A lump sum of $25.87$ would give the matching utility, so the matching grant is worth to the community about 14 percent less than it costs the center. It raises $G$ by 30, though, against 9 for the lump sum.

If the center's reason for paying is a spillover, the extra $G$ is the point. If it is not, the matching grant just distorts the local price.

**Example 2 (why you'd care): the Oates trade-off, and the grant that dissolves it.** The two towns from the idea, invented: $\mathrm{MB}=22-G$ in Hilltown and $10-G$ in Rivertown, cost $c=4$.

- *Tailored, no spillovers:* $G^*=(18,6)$. *Uniform:* $\bar G=16-4=12$ in both towns, with a loss of $\tfrac12(6^2+6^2)=36$.
- *Decentralized with spillover share $\sigma=1/4$:* each town supplies $4\sigma/(1-\sigma)=4/3$ too little, giving $(50/3,\,14/3)$ at a loss of $2\times\tfrac12(4/3)^2=16/9\approx1.78$. Decentralize.
- *Where it flips:* the losses are equal when $2\times\tfrac12\big(4\sigma/(1-\sigma)\big)^2=36$, that is, when $4\sigma/(1-\sigma)=6$, so $\sigma=3/5$. There Rivertown's own choice has fallen to zero. For larger spillovers, uniform central provision beats unaided decentralization.
- *With a matching rate $m=\sigma$:* both towns choose $(18,6)$ at any $\sigma$, and the loss is zero. At $\sigma=1/4$ the center pays $\tfrac14\times4\times(18+6)=24$. That is a transfer, not a resource cost, apart from its excess burden $(\lambda-1)\times24$.

So the textbook assignment rule is to decentralize goods whose benefits stay local, centralize or subsidize those whose benefits spread, and keep redistribution central, because mobile residents undo local redistribution ([8.1](08-01-tiebout-voting-with-your-feet.md), [8.3](08-03-tax-competition.md)). The matching grant is how a federation keeps tailoring without paying the spillover loss.

## Watch out

- **You might think a matching grant is just a more targeted gift, but actually it is a price change.** It has a substitution effect, and that effect is its whole job when there is a spillover and its whole cost when there is not.
- **You might think the Pigouvian matching rate is the spillover as a share of *residents'* benefit, but actually it is the share of the *total* benefit.** If outsiders get half as much as residents, $\sigma=1/3$, not $1/2$.
- **You might think the flypaper effect proves grants raise spending, but actually a naive regression can manufacture it.** If the center sends more money where tastes for public spending are high, grants and spending move together even when grants crowd out local effort. That is why the credible estimates, such as Knight's, use instruments ([`econometrics` 3.6](../../econometrics/lessons/03-06-instrumental-variables.md)).
- **You might think the decentralization theorem says centralization is inefficient, but actually it assumes the center must be uniform.** An omniscient center could tailor too. The theorem is about what a center constrained by information or politics can do.

## One-liner

> Decentralize what stays local, pay a matching share equal to what leaks out, give lump sums when you want to help rather than to steer, and do not expect a town to spend grant money like its residents' own.

## Problems

**P1 (🟢) *(Formal.)*** An invented county has utility $0.6\ln x+0.4\ln G$ over private consumption $x$ and a local public good $G$, with income 150 and both goods priced at 1. (a) The state offers to pay one quarter of every unit of $G$. Find $G$, $x$ and the state's outlay. (b) The state instead gives a lump sum equal to that outlay. Find $G$ and $x$, show which grant the county prefers (utilities to four decimals), and find the lump sum that would leave the county exactly as well off as the matching grant.

**P2 (🟡) *(Formal (a)–(c) · Exegetical (d).)*** An invented town builds a riverside trail of length $G$ at cost 8 per unit. Its residents' marginal benefit is $24-G$ per unit. Visitors from a neighboring town get a marginal benefit of $(24-G)/2$. Benefits are in dollars (quasilinear), and all solutions are interior. (a) What length does the town choose? (b) Find the efficient length and the deadweight loss of the town's choice. (c) Find the Pigouvian matching rate and the center's outlay at it. (d) Why would a lump-sum grant of the same size leave the trail at the length in (a)? Two sentences.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b)–(c).)*** An invented panel of states: an OLS regression finds that each extra dollar of per-capita residents' income raises state spending per capita by 0.08, and each extra dollar of per-capita unconditional federal grants raises it by 0.60. (a) What grant coefficient does standard theory predict, and why? Two sentences. (b) Give two explanations of the gap, one sentence each. (c) Suppose the federal formula sends more money to states whose voters like public spending. In which direction does that bias the 0.60, and what research design would address it? Two sentences.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) The county's price of $G$ is $3/4$. Cobb-Douglas spends 40 percent of income on $G$: $\tfrac34 G=0.4\times150=60$, so $G=80$ and $x=0.6\times150=90$. The state pays $\tfrac14\times80=20$.

(b) With a lump sum of 20, income is 170: $G=0.4\times170=68$ and $x=102$. Utilities: $0.6\ln102+0.4\ln68=4.4628$ against $0.6\ln90+0.4\ln80=4.4527$, so the county prefers the lump sum. The matching bundle costs $90+80=170$, which is affordable under the lump sum, so this had to happen. The lump sum $E$ that matches the matching utility solves $0.6\ln(0.6(150+E))+0.4\ln(0.4(150+E))=4.4527$, so $E=18.29$: the matching grant is worth 1.71 less to the county than it costs the state. It raises $G$ by 20, against 8 for the lump sum.

**Wrong turns:** computing the lump-sum outcome with income $150$ and price $3/4$ (mixing the two budgets); taking the equivalent lump sum to be 20 because the costs are equal, which is exactly the claim the problem shows to be false.

---

**P2** *(Formal (a)–(c) · Exegetical (d).)*

(a) The town sets $24-G=8$, so $G=16$.

(b) Total marginal benefit is $\tfrac32(24-G)$. Setting it equal to 8 gives $G=24-16/3=56/3\approx18.67$. The deadweight loss is the triangle between total marginal benefit and cost from 16 to $56/3$: $\tfrac12\times\tfrac32\times(8/3)^2=16/3\approx5.33$.

(c) Visitors get one-third of the total marginal benefit, $\tfrac12/\tfrac32$, so $m^*=\sigma=1/3$. The town's price becomes $16/3$, and $24-G=16/3$ gives $G=56/3$, as required. The center's outlay is $\tfrac13\times8\times\tfrac{56}{3}=448/9\approx49.78$.

**Must hit, strict (d):**

- A lump sum does not change the town's marginal price, so the town still equates residents' marginal benefit to the full cost 8.
- With quasilinear benefits there is no income effect either, so $G$ stays at exactly 16.

**Wrong turns:** setting $m=1/2$ because visitors get "half" (that is their benefit relative to residents, not their share of the total); forgetting the factor $\tfrac32$ in the triangle's slope.

**Model answer (d):** The trail's length is set where residents' marginal benefit equals the price the town pays per unit, and a lump sum leaves that price at 8. With quasilinear benefits the extra money has no income effect on $G$, so it all goes to residents' private consumption and the trail stays at 16.

---

**P3** *(Formal (a) · Exegetical (b)–(c).)*

(a) 0.08. The grant enters the community's budget exactly like residents' income, since only $Y+L$ matters, so spending should respond to a grant dollar as it does to an income dollar.

**Must hit, strict (b):** any two of the following, each with its mechanism.

- Fiscal illusion: voters read the grant as a fall in the price of public spending.
- Agency: officials who prefer larger budgets keep the grant in the budget rather than return it as a tax cut ([`political-economy`](../../political-economy/syllabus.md) Module 4).
- Endogeneity (credit if given in (b) or (c)): the estimate is biased, not the behavior.

**Must hit, strict (c):**

- Upward: the grant is correlated with an unobserved taste for spending that raises spending on its own, so the 0.60 mixes the grant's effect with that taste.
- A fix: instrument the grant with something that moves it but not tastes, such as the political power of the state's delegation (Knight 2002, which found near dollar-for-dollar crowd-out for highway grants), or use a formula-driven discontinuity or difference-in-differences.

**Wrong turns:** predicting a grant coefficient of 1 because "the grant is for spending" (it is unconditional, so it is fungible); calling the bias downward.

**Model answer (c):** The 0.60 is biased upward, because the states that get more grant money also want more public spending for reasons of their own. An instrument that shifts grants but not tastes, such as the power of the state's congressional delegation as in Knight (2002), separates the two.

</details>

## Flashback

**From Lesson [7.3](07-03-tagging-ordeals-and-in-kind-benefits.md) (Targeting transfers: tagging, ordeals, and in-kind benefits):** *(Formal.)* Invented numbers: 400 households, 100 of them needy, with weights $g_N=2$ and $g_R=2/3$ (they average one). The government offers a basic flat that costs 9,000 dollars a year to supply. A needy household values living in it at 6,000 dollars a year; a non-needy household values it at $-3{,}000$, because moving in means giving up better housing. Utility is quasilinear and a household claims only if it gains. (a) Who claims? Compute $\Delta W=\sum_i s_i[g_i(b-c_i)-b]$ and the lowest $g_N$ at which the program beats doing nothing. (b) Now tenants may sublet the flat for 8,000 dollars a year. Who claims, and what is $\Delta W$ under these weights and under maximin?

<details>
<summary>Solution</summary>

(a) Only the 100 needy claim; the non-needy would lose 3,000. The implicit claim cost is $c_N=b-v_N=9{,}000-6{,}000=3{,}000$, so
$$\Delta W=100\,[2\times6{,}000-9{,}000]=300{,}000 .$$
The program beats nothing iff $g_N\times6{,}000>9{,}000$, that is $g_N>3/2$ (equivalently $c_N/b=1/3<1-1/g_N$).

(b) Subletting makes the flat worth 8,000 to anyone: the needy sublet too, since 8,000 beats 6,000, and all 400 households claim. The program now costs $400\times9{,}000=3{,}600{,}000$, and
$$\begin{aligned}\Delta W&=100\,(2\times8{,}000-9{,}000)+300\,\big(\tfrac23\times8{,}000-9{,}000\big)\\&=700{,}000-1{,}100{,}000=-400{,}000 .\end{aligned}$$
Under maximin ($g_N=4$, $g_R=0$) it is $100\times23{,}000-300\times9{,}000=-400{,}000$ as well. Resale turns the flat into a universal cash grant of 8,000 that costs 9,000, and a universal grant is worth zero whatever the weights, so all that is left is the 1,000 burned per household. This is the matching-grant logic of this lesson in miniature: an earmarked transfer steers only if it cannot be turned back into cash.

**Wrong turns:** counting the needy's 3,000 gap between cost and value as a transfer rather than a loss; in (b), keeping the needy's value at 6,000 when subletting offers them 8,000.

</details>

## Connections

- **Backward:** efficiency here is the [Samuelson rule](../reference.md#samuelson-rule) of [1.1](01-01-the-samuelson-rule-beyond-quasilinearity.md) with the sum taken across borders. The matching grant is [`grad-micro` 6.3](../../grad-micro/lessons/06-03-externalities-coase-theorem.md)'s Pigouvian subsidy. That a lump sum is spent like income is [1.2](01-02-voluntary-provision-and-crowding-out.md)'s neutrality logic, and the flypaper effect is its empirical failure. The cost of the center's grant money is [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s $\lambda$. [8.1](08-01-tiebout-voting-with-your-feet.md)'s sorting is what makes tailored provision valuable.
- **Forward:** [8.3](08-03-tax-competition.md) finds a spillover on the tax side: when towns tax mobile capital, each town's tax pushes capital to its neighbors. That is a fiscal externality, with the same underprovision as here and the same case for coordination.
- **Sideways:** how federations actually divide taxes and grants, and vertical fiscal imbalance, are described in [`political-institutions`](../../political-institutions/syllabus.md) 5.2. The agency explanation of the flypaper effect uses [`political-economy`](../../political-economy/syllabus.md) Module 4's models. The credible flypaper estimates use [`econometrics` 3.6](../../econometrics/lessons/03-06-instrumental-variables.md)'s instrumental variables. A lump sum beating a price subsidy of equal cost is the same revealed-preference argument as cash against in-kind transfers in [7.3](07-03-tagging-ordeals-and-in-kind-benefits.md).

# Public Economics · Lesson 8.3: Tax competition

> ⏱ ~15 min · Module 8: Fiscal federalism · Builds on: [8.1 Tiebout: voting with your feet](08-01-tiebout-voting-with-your-feet.md), [8.2 Assignment, spillovers, and grants](08-02-assignment-spillovers-and-grants.md), [2.2 The Harberger model](02-02-general-equilibrium-incidence-the-harberger-model.md), [2.4 The marginal cost of public funds](02-04-second-best-and-the-marginal-cost-of-public-funds.md) · Unlocks: [`political-economy`](../../political-economy/syllabus.md), [`institutions-and-development`](../../institutions-and-development/syllabus.md)

## Why this matters

In [8.1](08-01-tiebout-voting-with-your-feet.md) mobility was the hero: residents moving between towns revealed their demand for public goods. Make *capital* the mobile thing and taxed at source, and mobility turns into a problem. Every town that raises its tax on capital drives some of it next door, so each town sees its tax base as fragile and taxes too little. That is the logic behind "race to the bottom" worries about corporate tax rates, and behind the 2021 OECD/G20 agreement on a 15 percent global minimum tax. This lesson builds the model, finds the wedge, and then shows the case where the same competition is a feature, not a bug.

## The idea

Four identical towns fund a park with a tax on the machines (capital) used in town. The total stock of machines is fixed, and owners put them wherever the after-tax return is highest.

Suppose all four raise the tax together. No machine moves: there is nowhere untaxed to go. Every dollar of tax becomes a dollar of park, and residents (who own the land and the machines) pay a dollar for it. Towns set the tax where one more dollar of park is worth one dollar to residents: the efficient rule.

Now suppose one town raises its tax alone. Some machines leave for the other three. Its residents still lose about a dollar, since lower local wages and a lower return on their machines absorb the tax, but its revenue rises by *less* than a dollar, because the base shrank. Each park dollar now looks expensive, so the town stops early.

Here is the catch: the machines that left did not vanish. They landed in the other three towns and raised *their* revenue. That gain is real, but the town that caused it does not count it. Every town does the same, all four end up with low taxes, no machine actually moved in the end, and every park is too small. This is a **fiscal externality**: one government's tax changes another's tax base.

## The formal version

**Model** ([tax competition](../reference.md#tax-competition) in a textbook quadratic version of Zodrow and Mieszkowski (1986, *Journal of Urban Economics*) and Wilson (1986, same journal), who established the underprovision result).

- $n$ identical towns. Each has an immobile factor (land or labor) owned by its residents, and its residents own $\bar k$ units of capital, invested wherever they like. World capital $n\bar k$ is fixed.
- Output in town $i$ is $f(k_i) = a k_i - \tfrac b2 k_i^2$, with $k_i$ the capital employed there, so capital's marginal product is $f'(k_i) = a - b k_i$ ($a, b > 0$).
- Town $i$ levies a **source tax** $t_i$ per unit of capital employed in it. Capital moves until its net return $\rho$ is equal everywhere: $a - bk_i - t_i = \rho$.
- Residents' private consumption is the immobile factor's income plus the return on their capital: $x_i = [f(k_i) - f'(k_i)k_i] + \rho\bar k = \tfrac b2 k_i^2 + \rho \bar k$. The public good is the revenue, $G_i = t_i k_i$. Utility is $x_i + \theta\ln G_i$ with $\theta > 0$.
- Competitive firms; each town takes the others' taxes as given (Nash).

*In words:* a fixed pie of mobile capital, towns that tax it where it is used, and residents who care about private consumption and the local public good.

**Capital flows.** Summing the arbitrage condition over towns and using $\sum_j k_j = n\bar k$ gives $\rho = a - b\bar k - \bar t$, where $\bar t$ is the average tax. So when town $i$ raises $t_i$ alone,

$$\frac{dk_i}{dt_i} = -\frac{n-1}{nb},\qquad \frac{dk_j}{dt_i} = \frac{1}{nb}\ (j\ne i),\qquad \frac{d\rho}{dt_i} = -\frac1n.$$

*In words:* the capital town $i$ loses is spread evenly over the other $n-1$ towns, and the world net return falls by a $1/n$ share of the tax increase.

**Who pays.** At a symmetric point ($t_i = t$, $k_i = \bar k$), residents' wages fall by $\bar k\,\frac{n-1}{n}$ and their capital income by $\bar k\,\frac1n$, so $dx_i/dt_i = -\bar k$. Revenue rises by only

$$\frac{dR_i}{dt_i} = \bar k - t\,\frac{n-1}{nb}.$$

*In words:* residents bear the whole tax, as in the [open economy incidence](../reference.md#open-economy-incidence) of [2.2](02-02-general-equilibrium-incidence-the-harberger-model.md), but part of what they pay leaks out with the departing capital.

**Nash tax.** Town $i$ sets $\theta\,\frac{dR_i/dt_i}{G} = \bar k$, that is

$$\frac{\theta}{G} = \frac{\bar k}{\bar k - t\,(n-1)/(nb)} \equiv \mathrm{MCPF}^{\text{private}} > 1,$$

$$t^N = \frac{\theta\,\bar k}{\bar k^2 + \theta\,(n-1)/(nb)}.$$

*In words:* each town runs the [modified Samuelson rule](../reference.md#modified-samuelson-rule) of [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md) with a [marginal cost of public funds](../reference.md#marginal-cost-of-public-funds) above one, because from where it sits the base is elastic.

**Coordinated tax.** If all towns move together, no capital moves, $dR = \bar k = -dx$, and the [Samuelson rule](../reference.md#samuelson-rule) holds exactly: $\theta/G = 1$, so $G^* = \theta$ and $t^* = \theta/\bar k$. (Set $n = 1$ in $t^N$ to get the same thing.)

**The externality.** Town $i$'s increase raises each other town's revenue by $t\cdot\frac{1}{nb}$, a total of $t\frac{n-1}{nb}$: *exactly* the leak in $dR_i/dt_i$. Other towns' private consumption does not move at the symmetric point: their wages rise by $\bar k/n$ and their capital income falls by $\bar k/n$. So the only thing town $i$ ignores is the [fiscal externality](../reference.md#fiscal-externality), and from society's view the MCPF is exactly one.

*In words:* the social cost of a park dollar is one dollar; each town perceives more because it counts its neighbors' gain as its own loss.

## Picture

![Line chart of the Nash tax on capital against the number of competing towns: it starts at the coordinated level 20 with one town, falls to 10 with two, 8 with four, and approaches 20 over 3 as the number of towns grows, while the coordinated tax stays flat at 20; the gap between them is shaded](assets/08-03-fig1.svg)

Parameters from Example 1 ($\theta = 200$, $\bar k = 10$, $b = 1$). The first competitor does most of the damage; the tax falls toward a positive floor, not to zero, because each town's capital demand has a finite slope.

## Worked examples

**Example 1 (the model): four towns.** Invented numbers: $\theta = 200$, $\bar k = 10$, $b = 1$, $a = 60$, $n = 4$.

- Coordinated: $t^* = 200/10 = 20$, $G^* = 200$. Net return $\rho = 60 - 10 - 20 = 30 > 0$, so capital stays invested.
- Nash: $t^N = \dfrac{200\cdot 10}{100 + 200\cdot\frac34} = \dfrac{2000}{250} = 8$, so $G = 80$.
- Check the private MCPF: $dR_i/dt_i = 10 - 8\cdot\tfrac34 = 4$ against residents' cost 10, so $\mathrm{MCPF}^{\text{private}} = 2.5$, and indeed $\theta/G = 200/80 = 2.5$.
- The externality at the Nash point: a unit rise in town 1's tax sends $\tfrac14$ unit of capital to each of the other towns, raising each one's revenue by $8\cdot\tfrac14 = 2$, a total of 6. Town 1's own revenue rises by 4. Together that is 10, the residents' cost: socially, nothing leaks.
- Welfare: moving every town from 8 to 20 costs each town $12\times 10 = 120$ of private consumption and raises $\theta\ln G$ by $200\ln 2.5 \approx 183.26$. Coordination gains about 63.26 per town.

With $n = 2$ the Nash tax is 10; as $n\to\infty$ it falls to $\theta\bar k/(\bar k^2 + \theta/b) = 20/3$. In the symmetric equilibrium no capital moves at all; the whole loss is the parks that were never built.

**Example 2 (why you'd care): when competition helps, and how to coordinate.** The inefficiency above assumes towns maximize residents' welfare. Brennan and Buchanan (1980, *The Power to Tax*) argued that governments behave more like a revenue-maximizing **Leviathan**, and that fiscal decentralization is a constitutional device to restrain it. In the same economy a Leviathan maximizes $t_i k_i$:

- Competing: $\bar k + t\,\frac{dk_i}{dt_i} = 0$ gives $t^L = nb\bar k/(n-1) = 40/3 \approx 13.33$, revenue about 133.33 per town.
- Colluding: with capital fixed in total, a joint Leviathan can tax away the whole net return, $t = a - b\bar k = 50$ (where $\rho = 0$; capital owners would rather hold idle machines than accept a negative return), revenue 500 per town.

Now the fiscal externality is the residents' friend: it cuts the take from 500 to 133 per town. Which picture fits is an empirical question about governments, not a theorem; Edwards and Keen (1996, *European Economic Review*) blend the two objectives and show, roughly, that coordination helps residents only if the share of each marginal revenue dollar that is wasted is small relative to the excess burden of taxation. See [Leviathan](../reference.md#leviathan) and [`political-economy`](../../political-economy/syllabus.md), which owns models of what governments maximize.

Two policy levers change the base itself. A **residence tax** hits residents' capital income wherever it is invested; the base, capital *owned*, does not flee when the rate rises, so a residence-based system restores the Samuelson rate (but needs information about foreign income, and fails if owners move). A **source tax**, as above, is the one that competes; see [source and residence taxation](../reference.md#source-and-residence-taxation). The opposite bias, **tax exporting**, appears when outsiders own the local capital: part of a source tax falls on them through $\rho$, and towns tax *too much*. In the symmetric model the two forces net out except for the fiscal externality. The OECD/G20 Pillar Two agreement (October 2021) is a partial fix of the coordinating kind: a 15 percent minimum effective rate for large multinationals, enforced by top-up taxes elsewhere. A floor removes the bottom of the race without harmonizing rates.

## Watch out

- **You might think a race to the bottom ends at zero, but actually** in this model it stops at a positive floor ($20/3$ in Example 1): towns have no other instrument and each town's capital demand is not infinitely elastic. The rate goes to zero only if each town is too small to move the world return $\rho$ and it can tax the immobile factor instead.
- **You might think low-tax towns gain by attracting capital, but actually** in the symmetric Nash equilibrium every town cuts, no capital moves, and all that remains is a smaller public good.
- **You might think the towns are making a mistake, but actually** each one computes its own MCPF correctly. The inefficiency is an externality, like [3.1](03-01-taxes-standards-and-tradable-permits.md)'s pollution, and the cure is the same: make each town face the social cost (coordination, a floor, or a matching grant as in [8.2](08-02-assignment-spillovers-and-grants.md)).
- **You might think competition is always bad, but actually** whether it helps depends on the government's objective: it hurts a benevolent planner and restrains a Leviathan.

## One-liner

> A town that taxes mobile capital pushes part of its base into its neighbors' coffers and never counts that gain, so every town sees public funds as dearer than they are and underprovides; coordinate if governments serve residents, compete if they serve themselves.

## Problems

**P1 (🟢) *(Formal.)*** Invented numbers. In the model of this lesson, $n = 5$ towns, $b = 2$, $\bar k = 8$, and every town currently levies $t = 6$ (not necessarily a Nash equilibrium). Town 1 raises its tax slightly. Per unit of tax increase, compute (a) the change in capital employed in town 1 and in each other town; (b) the revenue gain of each other town, the total fiscal externality, and town 1's own revenue gain; (c) the change in town 1's residents' private consumption, and the MCPF town 1 perceives versus the social one.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Invented numbers. Three identical towns ($n = 3$) with $b = 2$, $\bar k = 5$, $a = 60$ and utility $x + 100\ln G$ tax capital at source. (a) Find the coordinated tax and $G$, and the Nash tax and $G$. (b) How much does each town gain, in units of $x$, if all move from Nash to the coordinated tax? (c) Suppose instead each town taxes its *residents'* capital income at $T$ per unit owned, wherever invested (owners cannot move). What is the Nash $T$, and why, in two sentences?

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** Same economy as P2, but each government maximizes its own revenue. Capital owners may hold capital idle, so the net return $\rho$ cannot fall below zero. (a) Find the revenue-maximizing tax and revenue per town when the three compete, and when they collude on a common tax. (b) Using P2 and (a), in at most three sentences: under which government objective does competition help residents, and why does the same fiscal externality cut the other way under the other objective?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $dk_1/dt_1 = -\frac{n-1}{nb} = -\frac{4}{10} = -0.4$. Each other town gains $\frac{1}{nb} = 0.1$.

(b) Each other town's revenue rises by $t\times 0.1 = 0.6$; the total fiscal externality is $4\times 0.6 = 2.4$. Town 1's revenue rises by $\bar k - 2.4 = 5.6$.

(c) At the symmetric point residents lose $\bar k = 8$ of private consumption (wages fall by $8\times\tfrac45 = 6.4$, capital income by $8\times\tfrac15 = 1.6$). Perceived MCPF $= 8/5.6 = 10/7 \approx 1.43$. Social MCPF $= 8/(5.6 + 2.4) = 1$: counting the neighbors' revenue, every dollar residents pay reaches some public budget.

**Wrong turns:** counting only the capital loss and forgetting that $\rho$ falls too, which splits residents' loss into wage and capital-income parts; treating the neighbors' revenue gain as a transfer that "cancels" in town 1's calculation (it is exactly what town 1 leaves out).

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Coordinated: $t^* = \theta/\bar k = 100/5 = 20$, $G^* = 100$ (net return $60 - 10 - 20 = 30 \ge 0$). Nash:

$$t^N = \frac{100\cdot 5}{25 + 100\cdot\frac{2}{3\cdot 2}} = \frac{500}{175/3} = \frac{60}{7}\approx 8.57,\qquad G = \frac{300}{7}\approx 42.86.$$

Check: perceived MCPF $= 5/(5 - \tfrac{60}{7}\cdot\tfrac13) = 7/3$, and $\theta/G = 100/(300/7) = 7/3$.

(b) Private consumption falls by $(20 - \tfrac{60}{7})\times 5 = \tfrac{400}{7}\approx 57.14$; $100\ln G$ rises by $100\ln\tfrac73 \approx 84.73$. Gain about 27.59 per town.

**Must hit, strict (c):**

- $T = 20$, the Samuelson rate ($G = 100$).
- The base, capital owned by residents, does not change when $T$ rises (capital's location is untouched), so residents' cost and revenue both rise by $\bar k$ per unit and there is no fiscal externality.

**Wrong turns:** using $n$ in place of $n-1$ in the capital outflow; comparing taxes instead of utilities in (b) (the gain is the utility difference, not $12\times 5$).

**Model answer (c):** The Nash residence tax is 20, the same as the coordinated source tax. A residence tax falls on capital owned, which no rate change can move, so each town's revenue rises one-for-one with what its residents pay and the private MCPF is one.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) Competing: maximize $t_i k_i$; at the symmetric point $\bar k - t\frac{n-1}{nb} = 0$, so $t^L = \frac{nb\bar k}{n-1} = \frac{3\cdot 2\cdot 5}{2} = 15$, revenue $75$ per town ($\rho = 60 - 10 - 15 = 35 \ge 0$). Colluding on a common $t$: up to $t = a - b\bar k = 50$ all capital stays employed and revenue $5t$ rises; above 50, $\rho = 0$, capital falls to $k = (60 - t)/2$ and revenue $t(60-t)/2$ is falling (its peak would be at $t = 30$). So $t = 50$, revenue 250 per town.

**Must hit, strict (b):**

- Competition helps residents when governments maximize revenue (Leviathan): it cuts the tax from 50 to 15.
- Under a benevolent objective the same externality makes each town treat public funds as dearer than they are, pushing $t$ from 20 to $60/7$ and costing about 27.59 per town.
- The mechanism is identical (a town's tax pushes base to its neighbors and it ignores their gain); only whether a lower tax is good for residents differs.

**Wrong turns:** letting the colluding Leviathan push $t$ above 50 with $\rho < 0$ (owners would withhold capital); concluding that competition is simply good or bad without naming the objective.

**Model answer (b):** When governments maximize revenue, competition helps residents, because the capital flight each government fears restrains its take from 50 to 15 per unit. When governments maximize residents' welfare, the same fiscal externality makes each treat a park dollar as costing 7/3 dollars, so taxes fall from 20 to about 8.57 and residents lose about 27.59 each. The externality is the same; the objective decides whether restraint is a cure or a disease.

</details>

## Flashback

**From Lesson [8.1](08-01-tiebout-voting-with-your-feet.md) (Tiebout: voting with your feet):** *(Formal.)* Invented numbers. Identical houses in two adjacent towns each rent for 26,000 dollars a year, and the discount rate is 4 percent. Northside levies a property tax of 1 percent of house value; Southside levies 1.5 percent and spends more on schools, which the marginal buyer values at $B$ dollars a year. Use $P=(R+B)/(r+\tau)$, with $B=0$ for Northside's baseline. (a) Find the $B$ at which houses sell for the same price in both towns, and that price. (b) Southside then raises its rate to 2 percent, permanently, with services unchanged. Find the new Southside price and the loss to whoever owns a Southside house at the announcement.

<details>
<summary>Solution</summary>

(a) Northside: $P=26{,}000/(0.04+0.01)=520{,}000$. Equal prices need $(26{,}000+B)/0.055=520{,}000$, so $B=28{,}600-26{,}000=2{,}600$. Check: at 520,000 Southside's extra half-point of tax is $0.005\times520{,}000=2{,}600$ a year, exactly the value of the extra services. Prices equalize when the tax gap buys what it costs the marginal buyer.

(b) $P=28{,}600/(0.04+0.02)\approx476{,}667$, so the owner at the announcement loses about 43,333. A later buyer pays the lower price and is compensated in full. The immobile asset bears the tax, which is why this lesson's residents, who own the immobile factor, bear a source tax on capital.

**Wrong turns:** holding the tax bill at its old dollar amount and capitalizing the extra 2,600 at $1/r$ (65,000), which ignores that the bill falls with the price under an ad valorem tax; setting $B$ so that tax *rates* match rather than prices.

</details>

## Connections

- **Backward:** the fiscal externality is [8.2](08-02-assignment-spillovers-and-grants.md)'s spillover in a new place, a benefit to neighbors one town ignores, and the private MCPF is [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s. Residents bearing the whole source tax is [2.2](02-02-general-equilibrium-incidence-the-harberger-model.md)'s open-economy incidence, and [8.1](08-01-tiebout-voting-with-your-feet.md) is the case where mobility helps rather than hurts.
- **Forward:** what governments actually maximize, and how voters discipline them, is [`political-economy`](../../political-economy/syllabus.md); how states build the capacity to tax at all is [`institutions-and-development`](../../institutions-and-development/syllabus.md).
- **Sideways:** tax competition is a Nash equilibrium with a public-goods externality between governments, a many-player cousin of the prisoner's dilemma in [`grad-game-theory` 2.2](../../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md); the minimum-tax floor is the classic fix of changing the players' payoffs. Cross-border capital mobility is also why [6.2](06-02-chamley-judd-and-the-exploding-wedge.md)'s capital-tax debate is partly settled by what other countries do.

## Closing the course

One question, asked eight ways: *where is the wedge, who bears it, and is the cure cheaper than the disease?*

- **Public goods (1):** the wedge is between each person's private benefit and the sum; the free rider escapes it, and truthful revelation costs budget balance or participation.
- **Incidence and excess burden (2):** the wedge is the tax; the less elastic side and, in general equilibrium, the immobile factor bear it, and the triangle is what nobody receives.
- **Externality instruments (3):** the wedge is marginal damage; one price minimizes abatement cost, uncertainty picks prices or quantities, and the revenue side shifts the rate.
- **Commodity taxes (4):** spread the wedges to shrink compensated demands equally, adjusted for who buys, and keep them off production.
- **Income taxes (5):** hidden skill makes the wedge a screening device; its size comes from $g$, $e$ and $a$.
- **Capital (6):** a savings wedge compounds; it is zero, exploding or positive depending on separability, commitment and risk.
- **Social insurance (7):** selection and moral hazard set the wedges; mandates and subsidies, Baily-Chetty's sufficient statistics, and tags and ordeals price the cure.
- **Federalism (8):** mobility can sort residents efficiently, a matching grant prices the benefit that leaks across a border, and taxes on mobile capital become a game between governments.

Next: [`political-economy`](../../political-economy/syllabus.md) for which policies get chosen, [`institutions-and-development`](../../institutions-and-development/syllabus.md) for fiscal capacity, [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md) for which welfare weights to plug in, and [`economics-of-debt`](../../economics-of-debt/lessons/05-01-the-government-budget-constraint.md) for the borrowing side of the budget.

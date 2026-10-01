# Public Economics · Lesson 3.1: Taxes, standards, and tradable permits

> ⏱ ~15 min · Module 3: Choosing an externality instrument · Builds on: [`grad-micro` 6.3 Externalities and the Coase theorem](../../grad-micro/lessons/06-03-externalities-coase-theorem.md), [2.3 Excess burden and the Harberger triangle](02-03-excess-burden-and-the-harberger-triangle.md), [`grad-micro` 1.4 The envelope theorem](../../grad-micro/lessons/01-04-envelope-theorem-duality.md) · Unlocks: [3.2 Prices vs quantities](03-02-prices-vs-quantities.md), [3.3 Pigou in a second-best world](03-03-pigou-in-a-second-best-world.md)

## Why this matters

[`grad-micro` 6.3](../../grad-micro/lessons/06-03-externalities-coase-theorem.md) fixed an externality with one firm and one tax: set the tax equal to marginal external damage at the efficient quantity, and the firm's own optimization does the rest. Real pollution comes from thousands of sources whose costs of cleaning up differ by orders of magnitude, and the regulator knows none of them. So the question stops being *how much* pollution and becomes *who* should cut it. This lesson shows that a tax and a permit market both answer that question at least cost without the regulator learning anything about any firm, while the intuitive rule "everyone cuts the same amount" wastes money whenever firms differ. That result is why cap-and-trade exists.

## The idea

Two invented plants must together cut 60 tons of emissions. For plant 1, each extra ton cut costs as many dollars as tons it has already cut: the 10th ton costs 10, the 40th costs 40. Plant 2's costs rise twice as fast: its 10th ton costs 20.

The "fair-looking" rule is 30 tons each. But look at the last ton: plant 1's 30th ton costs 30 dollars, plant 2's costs 60. Move one ton of cutting from plant 2 to plant 1 and you save about 30 dollars with the same total cut. Keep shifting until the last ton costs the same at both plants: plant 1 cuts 40 (its last ton costs 40), plant 2 cuts 20 (its last ton costs $2\times 20 = 40$). Total cost falls from 1,350 dollars to 1,200.

Now the trick. Suppose the regulator knows none of these numbers and just charges 40 dollars for every ton emitted. Each plant cuts while cutting is cheaper than paying: plant 1 stops at 40, plant 2 at 20. The price did the shifting on its own. A permit market does the same thing in reverse: print tickets for the allowed emissions, let the plants trade them, and whichever plant can cut cheaply sells tickets to the one that can't, until the ticket price equals both plants' last-ton cost.

## The formal version

**Setup.** Firms $i = 1,\dots,N$ are competitive in the permit market (price-takers). Firm $i$ would emit $\bar e_i$ unregulated; it abates $a_i \ge 0$ and emits $e_i = \bar e_i - a_i$. Abatement cost $C_i(a_i)$ is increasing and convex, with **[marginal abatement cost](../reference.md#marginal-abatement-cost)** $\mathrm{MAC}_i(a_i) = C_i'(a_i)$, increasing. Damage depends only on total emissions, so a ton is a ton wherever it is cut. The regulator has chosen a total abatement target $A$ (the choice of $A$ is grad-micro's Pigou problem; this lesson takes it as given).

**Least-cost abatement.** Minimize $\sum_i C_i(a_i)$ subject to $\sum_i a_i = A$. The Lagrangian condition, at an interior solution, is

$$\mathrm{MAC}_i(a_i) = \mu \quad \text{for every } i, \qquad \frac{d}{dA}\Big(\min \textstyle\sum_i C_i\Big) = \mu.$$

*In words:* the cheapest way to hit a target equalizes the cost of the last ton across all sources, and that common marginal cost $\mu$ is the shadow price of the target, what one more ton of required abatement adds to total cost (the envelope theorem of [`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md)). This is **[least cost abatement](../reference.md#least-cost-abatement)**; Baumol and Oates (1971, *Swedish Journal of Economics*) made it the benchmark for comparing instruments.

**A uniform emissions tax.** Charge $t$ per ton emitted. Firm $i$ minimizes $C_i(a_i) + t(\bar e_i - a_i)$, so $\mathrm{MAC}_i(a_i) = t$. Set $t = \mu$ and the firms land on the least-cost allocation.

*In words:* every firm faces the same price for a ton, so every firm's last ton costs the same.

**[Tradable permits](../reference.md#tradable-permits).** Issue $E = \sum_i \bar e_i - A$ permits, one per ton, giving firm $i$ an initial allocation $\omega_i \ge 0$ with $\sum_i \omega_i = E$. At permit price $p$, firm $i$ minimizes

$$C_i(a_i) + p\,(\bar e_i - a_i - \omega_i),$$

buying permits if $e_i > \omega_i$ and selling if $e_i < \omega_i$. The first-order condition is $\mathrm{MAC}_i(a_i) = p$, and market clearing $\sum_i e_i = E$ forces $\sum_i a_i = A$, so $p = \mu$.

*In words:* the permit price plays the tax's role, and the cap hits the target by construction.

**Montgomery's theorem.** Montgomery (1972, *Journal of Economic Theory*) proved that a competitive permit market reaches the least-cost allocation **for any initial allocation** $\omega$.

*In words:* $\omega_i$ enters firm $i$'s cost only as the lump sum $-p\,\omega_i$, so it moves money but not the first-order condition. This is Coase ([`grad-micro` 6.3](../../grad-micro/lessons/06-03-externalities-coase-theorem.md)) with the transaction costs removed by a market: who holds the rights decides who pays whom, not who abates.

**Auctioned vs grandfathered.** Auctioning every permit (or taxing every ton) raises $\mu E$ for the government. Giving permits away free in proportion to past emissions ("grandfathering") raises nothing and hands the same $\mu E$ to the incumbents as an asset. Abatement is identical; revenue and distribution are not. What the government could do with $\mu E$ is [3.3](03-03-pigou-in-a-second-best-world.md)'s subject.

**The [uniform standard](../reference.md#uniform-standard).** Require $a_i = A/N$ of every firm. Then $\mathrm{MAC}_i(A/N)$ differs across firms whenever their costs differ, and total cost exceeds the minimum.

*In words:* a standard fixes *quantities* firm by firm; to fix them at least cost the regulator would need to know every $\mathrm{MAC}_i$. The tax needs only one number, and the permit market needs only the cap.

**Linear case, used below.** With $\mathrm{MAC}_i = c_i a_i$ ($c_i > 0$ the slope), $a_i = \mu/c_i$, so $\mu = A\big/\sum_i (1/c_i)$ and least cost is $\mu A/2$.

## Picture

![Back-to-back marginal abatement cost curves for two plants sharing 60 tons of abatement. Firm 1's MAC rises from the left, firm 2's rises from the right. They cross at 40 tons for firm 1 and 20 for firm 2, where both marginal costs are 40. At a uniform standard of 30 each the marginal costs are 30 and 60, and the shaded triangle of area 150 between the curves is the extra cost of the standard](assets/03-01-fig1.svg)

Read firm 1's abatement left to right and firm 2's right to left, so every point on the axis splits the 60 tons. The shaded triangle is the waste: every ton moved from plant 2 to plant 1 between 30 and 40 saves the vertical gap between the curves, and those savings sum to $\tfrac12 \times 10 \times 30 = 150$, exactly $1{,}350 - 1{,}200$. It is the abatement analogue of the [Harberger triangle](../reference.md#harberger-triangle) of [2.3](02-03-excess-burden-and-the-harberger-triangle.md): a loss that grows with the square of the misallocation.

## Worked examples

**Example 1 (three firms, three instruments; invented numbers).** Firms have $\mathrm{MAC}_1 = a_1$, $\mathrm{MAC}_2 = 2a_2$, $\mathrm{MAC}_3 = 4a_3$, each would emit 30 tons unregulated (90 in all), and the target is $A = 42$.

*Least cost and the tax.* $\sum 1/c_i = 1 + \tfrac12 + \tfrac14 = \tfrac74$, so $\mu = 42/(7/4) = 24$ and $a = (24, 12, 6)$. Costs are $\tfrac12 c_i a_i^2 = 288, 144, 72$: 504 in all, equal to $\mu A/2$. A tax of 24 per ton produces exactly this.

*The standard.* Fourteen tons each gives MACs of 14, 28 and 56, and cost $\tfrac12(14^2)(1+2+4) = 686$. The standard wastes 182, about 36 percent above least cost.

*Permits.* The cap is $90 - 42 = 48$, and firms emit $6, 18, 24$. With 16 permits each, firm 1 sells 10 for 240 dollars, firm 2 buys 2 for 48, firm 3 buys 8 for 192. Net costs: $288 - 240 = 48$, $144 + 48 = 192$, $72 + 192 = 264$, summing to 504. Hand all 48 permits to firm 1 instead: it sells 42 for 1,008, and net costs become $-720$, $576$ and $648$, still summing to 504 with the same abatement. Auction them all and the government collects $24 \times 48 = 1{,}152$ while the firms pay $504 + 1{,}152 = 1{,}656$. Same tons cut in every case; only the checks change.

**Example 2 (the US sulfur dioxide market).** Title IV of the 1990 Clean Air Act Amendments capped sulfur dioxide from power plants, Phase I starting in 1995 and Phase II in 2000, with a final cap of 8.95 million tons by 2010, about half of the power sector's 1980 emissions (US EPA). Each allowance authorized one ton. Almost all allowances were given free to existing plants on the basis of historical fuel use; a small share was auctioned each year and the proceeds were returned to the plants pro rata, so the auction was revenue-neutral and in effect a price-discovery device. By Montgomery, that free allocation should not have changed who abated, and the program is usually read as confirming it: plants that could switch cheaply to low-sulfur coal cut more and sold allowances to those that could not. Schmalensee and Stavins (2013, *Journal of Economic Perspectives*) add that railroad deregulation, by making low-sulfur western coal cheap to ship, did much of the work, a reminder that the market allocates abatement, it does not make it cheap. What the free allocation did change was the 8.95-million-ton asset's owner: the plants, not the Treasury.

## Watch out

- You might think a uniform standard is the "equal burden" choice, but actually it only equalizes *tons*: in Example 1 firm 3's last ton costs 56 while firm 1's costs 14. Equal tons and equal cost per ton are different allocations, and only the second is least cost.
- You might think giving permits away free makes firms abate less, but actually a permit a firm holds costs it the price it could sell it for, so the free permit is a lump-sum gift that leaves the margin untouched. The exceptions are real and specific: a firm with market power in the permit market (Hahn 1984, *Quarterly Journal of Economics*), for which the allocation shifts its incentive to move the price, and allocations updated on a firm's own future emissions or output, which pay it to emit.
- You might think the tax and the permit market are always interchangeable, but actually the equivalence here uses certainty: the tax fixes $\mu$ and lets $A$ follow, the cap fixes $A$ and lets $\mu$ follow. When costs are uncertain they diverge, which is [3.2](03-02-prices-vs-quantities.md).

## One-liner

> Least cost means equal marginal abatement costs everywhere; one price, whether a tax or a permit market, delivers it without the regulator knowing any firm's costs, and handing the permits out free changes who gets paid, not who cuts.

## Problems

**P1 (🟢) *(Formal.)*** Three invented firms have $\mathrm{MAC}_1 = 3a_1$, $\mathrm{MAC}_2 = 4a_2$ and $\mathrm{MAC}_3 = 12a_3$ and must together abate $A = 48$. (a) Find the least-cost split, the uniform tax that achieves it, and the total abatement cost. (b) Find the total cost of a uniform standard of 16 each and the saving from the tax.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** The firms of P1 would each emit 40 tons unregulated; the regulator caps emissions at 72 and runs a competitive permit market. (a) Find each firm's permit trade and total compliance cost (abatement cost plus net permit spending) when (i) each firm is given 24 permits free, and (ii) all 72 permits are auctioned. How much does the government raise in each case? (b) Firm 3 lobbies to be given all 72 permits free, saying "with the permits in hand we can put off the costly scrubbers." Given that firm 3 is one of many small firms in the permit market, is the claim right? Name the two circumstances under which a free allocation *would* change abatement. Three sentences.

**P3 (🔴, optional) *(Formal.)*** $N$ firms have linear MACs $\mathrm{MAC}_i = c_i a_i$ and must abate $A$ in total. (a) Show that the cost of the uniform standard divided by least cost equals $\bar c \cdot \overline{(1/c)}$, the mean slope times the mean of the reciprocal slopes, and that this ratio is at least 1, with equality only if all slopes are equal. (b) With two firms of slopes 1 and $k \ge 1$, how large must $k$ be for the standard to cost twice the least cost?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $\sum 1/c_i = \tfrac13 + \tfrac14 + \tfrac1{12} = \tfrac23$, so $\mu = 48/(2/3) = 72$. Then $a_1 = 72/3 = 24$, $a_2 = 72/4 = 18$, $a_3 = 72/12 = 6$, summing to 48. A tax of 72 per ton achieves it. Costs are $\tfrac12 c_i a_i^2 = 864, 648, 216$, total 1,728 (check: $\mu A/2 = 72 \times 48/2 = 1{,}728$).

(b) At 16 each the MACs are 48, 64 and 192, and cost is $\tfrac12 (16^2)(3 + 4 + 12) = 128 \times 19 = 2{,}432$. The tax saves $2{,}432 - 1{,}728 = 704$.

**Wrong turns:** setting the tax at the average of the standard's MACs, or at any single firm's MAC under the standard, instead of solving $\sum_i \mu/c_i = A$; forgetting the $\tfrac12$ in the cost of a linear MAC.

---

**P2** *(Formal (a) · Exegetical (b).)*

(a) The permit price is $\mu = 72$ and abatement is P1's $(24, 18, 6)$ under any allocation, so emissions are $16, 22, 34$ (total 72).

(i) Firm 1 sells 8 permits (receives 576), firm 2 sells 2 (receives 144), firm 3 buys 10 (pays 720). Compliance costs: $864 - 576 = 288$, $648 - 144 = 504$, $216 + 720 = 936$, total 1,728. The government raises nothing.

(ii) Firms pay $72 \times (16, 22, 34) = 1{,}152,\ 1{,}584,\ 2{,}448$. Compliance costs: $2{,}016$, $2{,}232$, $2{,}664$, total 6,912. The government raises $72 \times 72 = 5{,}184$, which is the whole difference.

**Must hit, strict (b):**

- No: a price-taking firm abates until its MAC equals the permit price whatever it holds, because using a permit it owns forgoes 72 dollars of sales. Given all 72, firm 3 still abates 6 and sells 38 permits; its compliance cost is $216 - 72 \times 38 = -2{,}520$, a transfer, not a change in abatement.
- Exception 1: market power in the permit market (Hahn 1984): a large holder's allocation changes whether it wants to push the price up (as a net seller) or down (as a net buyer), so abatement is least-cost only if its allocation equals its least-cost emissions.
- Exception 2: allocations that depend on the firm's own future emissions or output ("updating"), which make emitting today earn permits tomorrow and so act as a subsidy on the margin.

**Wrong turns:** treating a free permit as costless to use (the opportunity-cost error); in (a), reporting firm 3's abatement changing with the allocation.

**Model answer (b):** The claim is wrong for a price-taking firm: a permit it holds is worth 72 dollars on the market, so it still abates until its MAC is 72 (6 tons) and sells the other 38 permits, and the gift only changes who is paid. An allocation would change abatement if firm 3 had market power in the permit market, because then its holdings change its interest in moving the price (Hahn 1984). It would also change abatement if the allocation were updated on firm 3's own future emissions or output, since then emitting more today earns more permits later.

---

**P3** *(Formal.)*

(a) Least cost: $\mu = A/\sum_i (1/c_i)$ and cost $\mu A/2 = A^2 \big/ \big(2\sum_i 1/c_i\big)$. Standard: $a_i = A/N$ and cost $\tfrac12 (A/N)^2 \sum_i c_i$. The ratio is

$$\frac{(A/N)^2 \sum_i c_i \,/\, 2}{A^2 / \big(2 \sum_i 1/c_i\big)} = \frac{\sum_i c_i}{N} \cdot \frac{\sum_i 1/c_i}{N} = \bar c \cdot \overline{(1/c)}.$$

By the AM-HM inequality, $\bar c \ge N/\sum_i (1/c_i) = 1/\overline{(1/c)}$, so the ratio is at least 1, with equality iff all $c_i$ are equal. (Checks: slopes 1, 2, 4 give $\tfrac73 \cdot \tfrac7{12} = \tfrac{49}{36} = 686/504$; P1's slopes give $\tfrac{19}{3} \cdot \tfrac29 = \tfrac{38}{27} = 2{,}432/1{,}728$.) The target $A$ cancels: the waste is a pure measure of cost heterogeneity.

(b) The ratio is $\tfrac{1+k}{2} \cdot \tfrac{1 + 1/k}{2} = \tfrac{(1+k)^2}{4k}$. Setting it to 2 gives $k^2 - 6k + 1 = 0$, so $k = 3 + 2\sqrt2 \approx 5.83$ (the other root is below 1). Slopes differing by a factor of about six double the cost of the standard.

**Wrong turns:** comparing the standard with least cost at a fixed MAC rather than a fixed $A$; in (b), reading the ratio as linear in $k$ and answering $k = 3$ (which gives $16/12 \approx 1.33$).

</details>

## Flashback

**From Lesson [2.3](02-03-excess-burden-and-the-harberger-triangle.md) (Excess burden and the Harberger triangle):** *(Formal (a)–(b) · Exegetical (c).)* An invented good has pre-tax spending of 400 million dollars a year and a fixed producer price. A study reports that a 10 percent ad valorem tax on it causes an excess burden of 1.4 million dollars a year. Use the Harberger approximation throughout, and approximate revenue by the rate times pre-tax spending. (a) What compensated demand elasticity does the study's figure imply? (b) At what rate would the excess burden reach 7 percent of revenue, and how large is it there? (c) It turns out the study's elasticity was the *uncompensated* one, and the good is normal. Is the true excess burden at 10 percent above or below 1.4 million dollars? One sentence with the reason.

<details>
<summary>Solution</summary>

(a) With $\mathrm{EB}\approx\tfrac12\tau^2\lvert\varepsilon^c\rvert\,px$ (in millions): $1.4=\tfrac12(0.1)^2\lvert\varepsilon^c\rvert(400)=2\lvert\varepsilon^c\rvert$, so $\varepsilon^c=-0.7$.

(b) With $R\approx\tau\,px$, the burden per dollar is $\mathrm{EB}/R\approx\tfrac12\tau\lvert\varepsilon^c\rvert=0.35\,\tau$, which is $0.07$ at $\tau=0.2$. There $\mathrm{EB}=\tfrac12(0.2)^2(0.7)(400)=5.6$ million on revenue of about 80 million: doubling the rate quadruples the burden.

**Must hit, strict (c):**

- Below 1.4 million.
- For a normal good the income effect adds to the substitution effect, so the uncompensated elasticity is larger in magnitude than the compensated one, and only the compensated response measures the loss.

**Model answer (c):** Below, because for a normal good the uncompensated response includes an income effect pointing the same way as substitution, so it overstates the compensated elasticity that alone drives excess burden.

**Wrong turns:** dropping the $\tfrac12$ (giving 0.35) or forgetting to square the rate (giving 0.07) in (a); in (c), answering "above" on the thought that the income effect is an extra loss, when a lump-sum tax has the same income effect and wastes nothing.

</details>

## Connections

- **Backward:** [`grad-micro` 6.3](../../grad-micro/lessons/06-03-externalities-coase-theorem.md) chose the level of pollution with one firm; this lesson distributes a given level across many, and Montgomery's allocation irrelevance is its Coase theorem made operational by a market. The standard's waste triangle is the geometry of [2.3](02-03-excess-burden-and-the-harberger-triangle.md)'s Harberger triangle.
- **Forward:** [3.2](03-02-prices-vs-quantities.md) breaks the tax-permit equivalence with cost uncertainty; [3.3](03-03-pigou-in-a-second-best-world.md) asks what the auction revenue $\mu E$ is worth when the rest of the tax system distorts, the [marginal cost of public funds](../reference.md#marginal-cost-of-public-funds) of [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md).
- **Sideways:** the permit price is the Lagrange multiplier on the cap, the shadow-price reading of [`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md). Why grandfathering is so common despite forgoing revenue is a question about lobbying and incumbents, which belongs to [`political-economy`](../../political-economy/syllabus.md). The macroprudential version of a Pigouvian tax, on borrowing rather than emissions, is [`economics-of-debt` 4.4](../../economics-of-debt/lessons/04-04-overborrowing.md).

# Operations Research · Lesson 4.4: Inventory — EOQ & the newsvendor

> ⏱ ~15 min · Module 4: Queueing & Inventory · Builds on: [4.1 Poisson arrivals & Little's law](04-01-poisson-arrivals-littles-law.md), [`prob-stat-refresher` 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md) · Unlocks: [4.5 A taste of simulation & nonlinear programming](04-05-simulation-nonlinear-taste.md)

## Why this matters

Every warehouse, hospital pharmacy, bakery, and semiconductor fab is running an inventory policy right now, whether or not anyone wrote it down. Two formulas — one deterministic, one stochastic — cover a startling share of those decisions, and they are the last piece of this course's stochastic-modeling toolkit. The first, **EOQ**, answers "how much do I order at a time?" and comes with a bonus property that is arguably the most useful managerial fact in this whole course: *you can be badly wrong and barely pay for it.* The second, the **newsvendor**, answers "how many do I stock for a one-shot bet against random demand?" and reduces to reading a single quantile off a distribution. Neither appears anywhere else in this library.

## The idea

Inventory exists for one reason: **supply and demand are not synchronized**. Your supplier ships in truckloads on Tuesdays; your customers buy three units at a time, all week. The stock sitting on the shelf is the buffer that absorbs the mismatch.

That buffer is not free. Holding it burns capital, warehouse space, insurance, and spoilage. But *not* holding it is also not free: you re-order more often (paying setup, paperwork, and freight each time), or you run out and lose the sale. **Every inventory model in existence is a trade-off between the cost of having too much and the cost of having too little.** Everything else is detail about which costs and which uncertainty.

Two canonical cases split the field:

- **Repeated ordering, steady demand.** You sell roughly the same amount every week, forever, and you re-order whenever you run low. The only question is *batch size*: many small orders (low stock, high ordering cost) or few big ones (high stock, low ordering cost). That's **EOQ**.
- **One order, random demand.** You order once, the demand happens once, and then it's over — the newspapers are yesterday's, the fashion season ended, the concert happened. Leftovers are nearly worthless and shortages are lost sales. That's the **newsvendor**.

The first is a calculus problem. The second is a probability problem. Both come down to balancing a cost of excess against a cost of shortage — the first *per year*, the second *at the margin of one more unit*.

## The formal version

### EOQ: the deterministic model

**The assumptions, stated honestly up front.** EOQ is a caricature, and you should know exactly which lies it tells:

1. Demand is a known constant rate $D$ (units per year).
2. Replenishment is **instantaneous**: the whole order $Q$ (units) appears at once.
3. **No shortages** are permitted — you always order in time.
4. A fixed **ordering cost** $S$ (dollars per order) is paid each time you order, regardless of size.
5. A **holding cost** $H$ (dollars per unit per year) is charged on stock you're sitting on.
6. Unit purchase price is constant — no quantity discounts.

Under these, the stock level traces a **sawtooth**: it starts at $Q$, falls in a straight line at slope $D$ down to exactly $0$, then jumps back to $Q$ (see the Picture). Because each segment is a straight line from $Q$ to $0$, the *time-average* height of a segment is the average of its endpoints:

$$\bar{I} = \frac{Q + 0}{2} = \frac{Q}{2}.$$

*In words: with steady demand and instant refill, you hold half a batch on average.* That's the average of a triangle's height, not an assumption — and every cycle is identical, so the long-run average equals the one-cycle average.

Each cycle consumes $Q$ units, so there are $D/Q$ cycles (orders) per year. Annual cost is therefore

$$TC(Q) = \underbrace{\frac{D}{Q}\,S}_{\text{ordering}} \;+\; \underbrace{\frac{Q}{2}\,H}_{\text{holding}}.$$

*In words: orders per year times cost per order, plus average stock times cost of carrying a unit for a year.* The tension is visible: raising $Q$ shrinks the first term and grows the second.

**Optimize.** $TC$ is a sum of a convex decreasing term and a linear term, hence convex on $Q > 0$, so the stationary point is the global minimum ([`convex-optimization` 2.1](../../convex-optimization/lessons/02-01-convex-problem-local-global.md)). Differentiate:

$$TC'(Q) = -\frac{DS}{Q^2} + \frac{H}{2} = 0 \quad\Longrightarrow\quad Q^2 = \frac{2DS}{H} \quad\Longrightarrow\quad \boxed{\,Q^* = \sqrt{\frac{2DS}{H}}\,}$$

(and $TC''(Q) = 2DS/Q^3 > 0$, confirming a minimum).

**The elegant consequence.** Substitute $Q^*$ back into each half separately:

$$\frac{DS}{Q^*} = DS\sqrt{\frac{H}{2DS}} = \sqrt{\frac{DSH}{2}}, \qquad \frac{Q^*H}{2} = \frac{H}{2}\sqrt{\frac{2DS}{H}} = \sqrt{\frac{DSH}{2}}.$$

They are **equal**. So

$$TC(Q^*) = 2\sqrt{\frac{DSH}{2}} = \sqrt{2DSH}.$$

*In words: at the economic order quantity you spend exactly as much ordering as you spend holding.* Use this as a check on every EOQ answer you ever compute — if your two halves don't match, you made an arithmetic error.

**Robustness — the fact worth remembering longest.** Suppose you order $Q = kQ^*$ for some factor $k > 0$ instead of the optimum. Because each half of $TC(Q^*)$ equals $\tfrac12 TC(Q^*)$, and the ordering half scales as $1/k$ while the holding half scales as $k$:

$$\frac{TC(kQ^*)}{TC(Q^*)} = \frac{1}{2}\left(k + \frac{1}{k}\right).$$

*In words: the cost penalty depends only on the ratio by which you missed, and it is second-order small.* At $k = 1.2$ the ratio is $\tfrac12(1.2 + 0.8\overline{3}) = 1.0167$ — a 20 percent error in quantity costs 1.7 percent in money. Note also that $k$ and $1/k$ give the *same* penalty: ordering half the EOQ and ordering double the EOQ are equally bad.

**Reorder point.** EOQ says *how much*; it doesn't say *when*, because it pretends delivery is instant. In practice an order takes a lead time $L$ to arrive, so you place it when the stock on hand has fallen to the amount you'll consume while waiting:

$$R = D_{\text{daily}} \times L \;+\; \text{safety stock},$$

with $D_{\text{daily}}$ the demand per day and $L$ the lead time in days. The safety stock is the newsvendor logic below applied to lead-time demand uncertainty: hold enough extra that the probability of running dry during the wait is acceptably small. The reorder point is what makes EOQ operational — $Q^*$ and $R$ together are a complete policy: *when stock hits $R$, order $Q^*$.*

**A Little's-law reading.** [Lesson 4.1](04-01-poisson-arrivals-littles-law.md) says $L = \lambda W$ for any stable system, and a warehouse is a system: units arrive, wait on the shelf, depart. Here the "population" is the average inventory $Q/2$, the throughput is $D$, and the wait is the average time a unit sits on the shelf. So $Q/2 = D \times W$, i.e. $W = Q/(2D)$. Inverting, **inventory turns** $= D/(Q/2) = 1/W$. Inventory turns and average shelf time are the same number upside down — a merchant saying "we turn stock 12 times a year" and an engineer saying "average dwell time is one month" are making the identical statement.

### The newsvendor: one order against random demand

The story: you order $Q$ units *once*, before seeing demand. Demand $D$ is a random variable. Leftovers are dumped at a salvage value; unmet demand is a lost sale. Newspapers, fresh croissants, flu vaccine batches, fashion season buys, event catering, seats held for a flight.

Two costs, defined per unit:

- **Underage cost** $c_u$ (dollars per unit of unmet demand): what you lose by being one unit short. Typically the lost margin, selling price minus purchase cost, plus any goodwill penalty.
- **Overage cost** $c_o$ (dollars per unit left over): what you lose by having one unit too many. Typically purchase cost minus salvage value.

**The result.** Let $F$ be the cumulative distribution function of demand. Stock up to

$$\boxed{\,P(D \le Q^*) = F(Q^*) = \frac{c_u}{c_u + c_o}\,}$$

*In words: order the quantity sitting at the critical-ratio quantile of the demand distribution.* The fraction $c_u/(c_u+c_o)$ is called the **critical ratio**; it is a probability between 0 and 1, and it is also exactly the in-stock probability (service level) you end up providing.

**Derive it by the marginal argument** — far more illuminating than calculus. Stand at some stocking level $Q$ and ask: *should I add one more unit?*

- That extra unit **helps** only if demand turns out to exceed $Q$ — otherwise it just sits there. That happens with probability $1 - F(Q)$, and when it does it saves an underage of $c_u$.
- That extra unit **hurts** if demand falls short of $Q$, which happens with probability $F(Q)$, costing an overage of $c_o$.

Expected marginal benefit minus expected marginal cost:

$$c_u\bigl(1 - F(Q)\bigr) - c_o F(Q).$$

This is positive (keep adding) for small $Q$ and negative (stop) for large $Q$, since $F$ is nondecreasing. Set it to zero:

$$c_u = (c_u + c_o)F(Q) \quad\Longrightarrow\quad F(Q^*) = \frac{c_u}{c_u+c_o}. \qquad \blacksquare$$

The formula is now obvious rather than memorized: it's the point where the odds of needing the unit have dropped to match the cost ratio.

**Discrete demand.** With demand on a grid, the same expression gives the exact profit increment from the $Q$-th unit,

$$\pi(Q) - \pi(Q-1) = c_u\,P(D \ge Q) - c_o\,P(D \le Q-1),$$

which is decreasing in $Q$. So the rule becomes: **order the smallest $Q$ with $F(Q) \ge$ critical ratio.** Not the nearest — the smallest that reaches or passes it.

**The intuition worth keeping.** A **high** critical ratio (stockouts expensive, leftovers cheap) pushes $Q^*$ *above* mean demand; a **low** one pushes it below. A bakery deliberately under-stocks croissants — an unsold croissant is a total write-off while a missed sale costs only a couple of dollars of margin — and sells out most days on purpose. A hospital blood bank does the reverse: a stockout can be fatal, an expired unit costs a few hundred dollars, so the critical ratio sits near 0.99 and the fridge is deliberately overfull.

## Picture

![Two panels: at left the EOQ sawtooth showing inventory falling from Q to zero and jumping back, with the average level Q over 2 and the reorder point marked; at right the annual cost curve versus order quantity, with the ordering and holding components crossing at the optimum and a shaded flat region around it](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (EOQ, and how much precision is worth — boss problem 4(c)).** A repair shop uses a part at $D = 1200$ units per year. Each order costs $S = 50$ dollars to place; holding costs $H = 3$ dollars per unit per year.

$$Q^* = \sqrt{\frac{2DS}{H}} = \sqrt{\frac{2(1200)(50)}{3}} = \sqrt{\frac{120000}{3}} = \sqrt{40000} = 200 \text{ units.}$$

$$TC(Q^*) = \sqrt{2DSH} = \sqrt{2(1200)(50)(3)} = \sqrt{360000} = 600 \text{ dollars per year.}$$

*Check by the equal-halves property.* Ordering: $\frac{1200}{200}\times 50 = 6 \times 50 = 300$ dollars. Holding: $\frac{200}{2}\times 3 = 100 \times 3 = 300$ dollars. Equal, and they sum to 600. Both answers confirmed.

Now the robustness. With these numbers $TC(Q) = \frac{60000}{Q} + 1.5Q$. Order 20 percent above EOQ, $Q = 240$:

$$TC(240) = \frac{1200}{240}\times 50 + \frac{240}{2}\times 3 = 250 + 360 = 610 \text{ dollars,}$$

which is $610/600 = 1.0167$ — **1.7 percent** above the minimum, for a 20 percent error in the decision. Tabulating the whole neighbourhood (each row computed directly from $TC(Q) = 60000/Q + 1.5Q$, and matching $\tfrac12(k + 1/k)$):

| $k = Q/Q^*$ | $Q$ | ordering | holding | total | penalty |
|---|---|---|---|---|---|
| 0.50 | 100 | 600 | 150 | 750 | 25.0 percent |
| 0.70 | 140 | 428.57 | 210 | 638.57 | 6.4 percent |
| 0.80 | 160 | 375 | 240 | 615 | 2.5 percent |
| 0.90 | 180 | 333.33 | 270 | 603.33 | 0.6 percent |
| 1.00 | 200 | 300 | 300 | 600 | — |
| 1.10 | 220 | 272.73 | 330 | 602.73 | 0.5 percent |
| 1.20 | 240 | 250 | 360 | 610 | 1.7 percent |
| 1.50 | 300 | 200 | 450 | 650 | 8.3 percent |
| 2.00 | 400 | 150 | 600 | 750 | 25.0 percent |

**The managerial conclusion.** Anything within roughly 20 percent of EOQ is essentially free. So: agonizing over whether the ordering cost is 45 or 55 dollars is wasted effort, because $Q^*$ moves as $\sqrt{S}$ and the cost moves as the *square* of the resulting error. And if the supplier ships pallets of 240, take the pallet — the convenience is worth far more than 10 dollars a year. What EOQ *cannot* absorb is a structural error: a quantity discount, a shortage penalty, or demand that isn't remotely steady changes the model, not just the number.

**Example 2 (newsvendor, discrete — and verifying the optimum by hand).** A stall makes fresh sandwiches in batches. Each batch costs 2 dollars to produce and sells for 5 dollars; anything unsold at close goes to a discounter for 0.50 dollars.

$$c_u = 5 - 2 = 3 \text{ dollars}, \qquad c_o = 2 - 0.50 = 1.50 \text{ dollars}, \qquad \text{critical ratio} = \frac{3}{3 + 1.5} = \frac{3}{4.5} = 0.6\overline{6}.$$

Demand (batches) has this distribution:

| $d$ | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|
| $P(D = d)$ | 0.15 | 0.20 | 0.30 | 0.20 | 0.15 |
| $F(d)$ | 0.15 | 0.35 | 0.65 | 0.85 | 1.00 |

The smallest $Q$ with $F(Q) \ge 0.667$ is $Q^* = 11$, since $F(10) = 0.65$ falls just short and $F(11) = 0.85$ clears it. Notice how close the call is — that near-tie is exactly why we verify.

*Verification by direct expected profit.* With revenue $5\,E[\min(D,Q)]$, salvage $0.5\,E[(Q-D)^+]$, and cost $2Q$:

- $Q = 10$: $E[\min(D,10)] = 8(0.15) + 9(0.20) + 10(0.65) = 1.2 + 1.8 + 6.5 = 9.5$; $E[(10-D)^+] = 2(0.15) + 1(0.20) = 0.5$. So $\pi = 5(9.5) + 0.5(0.5) - 20 = 47.5 + 0.25 - 20 = 27.75$.
- $Q = 11$: $E[\min(D,11)] = 8(0.15) + 9(0.20) + 10(0.30) + 11(0.35) = 1.2 + 1.8 + 3.0 + 3.85 = 9.85$; $E[(11-D)^+] = 3(0.15) + 2(0.20) + 1(0.30) = 1.15$. So $\pi = 5(9.85) + 0.5(1.15) - 22 = 49.25 + 0.575 - 22 = 27.825$.
- $Q = 12$: $E[\min(D,12)] = E[D] = 10.0$; $E[(12-D)^+] = 4(0.15) + 3(0.20) + 2(0.30) + 1(0.20) = 2.0$. So $\pi = 5(10) + 0.5(2) - 24 = 50 + 1 - 24 = 27.00$.

$27.75 < 27.825 > 27.00$, so $Q^* = 11$ is genuinely the maximum. **Cross-check against the marginal formula:** $\pi(11) - \pi(10) = 3\,P(D \ge 11) - 1.5\,P(D \le 10) = 3(0.35) - 1.5(0.65) = 1.05 - 0.975 = +0.075$, matching $27.825 - 27.75$. And $\pi(12) - \pi(11) = 3(0.15) - 1.5(0.85) = 0.45 - 1.275 = -0.825$, matching $27.00 - 27.825$. Both increments reproduce exactly. Make this your habit: the marginal formula and the brute-force table must agree.

**Example 3 (newsvendor, continuous).** A retailer buys a jacket for 40 dollars, sells it for 100, and clears leftovers at 20. Season demand is Normal with mean $\mu = 500$ and standard deviation $\sigma = 80$.

$$c_u = 100 - 40 = 60, \qquad c_o = 40 - 20 = 20, \qquad \text{critical ratio} = \frac{60}{80} = 0.75.$$

Read the 0.75 quantile of the standard normal — the upper quartile, $z_{0.75} \approx 0.674$ (from [`prob-stat-refresher` 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md); we import the normal quantile rather than re-deriving it):

$$Q^* = \mu + z\sigma = 500 + 0.674(80) = 500 + 53.9 \approx 554 \text{ jackets.}$$

Stock **above** the mean, because a stockout costs three times what a markdown does. The retailer will be in stock 75 percent of seasons by design.

*Verification by the marginal condition.* The expected gain from the next unit is $g(Q) = c_u(1 - F(Q)) - c_o F(Q) = 60 - 80F(Q)$.

- At $Q = 554$: $F = 0.75$ by construction, so $g = 60 - 60 = 0$. Stationary.
- At $Q = 500$ (the mean): $F = 0.5$, so $g = 60 - 40 = +20 > 0$ — still worth adding units, so the mean is too low.
- At $Q = 600$: $z = (600-500)/80 = 1.25$, $F(1.25) = 0.8944$, so $g = 60 - 80(0.8944) = -11.55 < 0$ — too many.

The sign flips from positive to negative across 554, bracketing the optimum. Confirmed.

## Watch out

- **You might think EOQ's fake assumptions make it useless.** Half true. Its *numeric* inputs can be badly wrong and the flatness absorbs it — but a *structural* violation is different in kind. Quantity discounts, allowed backorders, non-instant replenishment, or seasonal demand each require a different model, not a corrected $Q^*$. Know which kind of error you're making.
- **You might mismatch time units.** $D$ and $H$ must be on the same clock. If $D$ is annual, $H$ must be dollars per unit *per year*; feeding a monthly holding cost into an annual demand inflates $Q^*$ by $\sqrt{12}$. Similarly $D_{\text{daily}}$, not $D$, goes into the reorder point.
- **You might set $c_u$ to the selling price.** It's the lost **margin** (price minus cost), not the revenue — you didn't buy the unit, so you didn't spend the cost either. Symmetrically, $c_o$ is purchase cost minus *salvage*, not the full purchase cost, unless leftovers are truly worth zero.
- **You might read the critical ratio as a profit margin.** It's a probability. It lands on the horizontal axis of the demand distribution's CDF, and the answer $Q^*$ is a quantity, not a percentage. And on a discrete demand grid, round *up* to the smallest $Q$ with $F(Q) \ge$ critical ratio — rounding to the nearest can hand you a strictly worse answer.

## One-liner

> Order $\sqrt{2DS/H}$, the point where ordering cost equals holding cost and the total is so flat that being 20 percent off costs 2 percent; and for a one-shot bet, stock to the $c_u/(c_u+c_o)$ quantile of demand, the level where the odds of needing one more unit finally drop below its cost.

## Problems

**P1 (🟢)** A distributor sells $D = 2000$ units per year of a part. Each order costs $S = 40$ dollars to place and holding costs $H = 4$ dollars per unit per year. (a) Find $Q^*$ and the resulting annual cost, and verify with the equal-halves check. (b) The supplier only ships in cartons of 250. What does taking the carton cost per year, in dollars and in percent?

**P2 (🟡)** A flower stall buys bouquets for 12 dollars and sells them for 30; unsold bouquets are donated (salvage 0). Demand is:

| $d$ | 20 | 21 | 22 | 23 | 24 |
|---|---|---|---|---|---|
| $P(D=d)$ | 0.15 | 0.25 | 0.30 | 0.20 | 0.10 |

Find the critical ratio and the optimal order quantity, then verify it by computing the expected profit at $Q^*-1$, $Q^*$, and $Q^*+1$.

**P3 (🔴)** A hospital wants a 98 percent in-stock probability for a blood product whose weekly demand is Normal with $\mu = 120$ units and $\sigma = 25$. (a) What weekly order does that imply? (b) Working the newsvendor formula *backwards*, what ratio $c_u/c_o$ is the hospital implicitly asserting? Comment on whether that's plausible.

<details>
<summary>Solutions</summary>

**P1** (a)

$$Q^* = \sqrt{\frac{2(2000)(40)}{4}} = \sqrt{\frac{160000}{4}} = \sqrt{40000} = 200 \text{ units}, \qquad TC(Q^*) = \sqrt{2(2000)(40)(4)} = \sqrt{640000} = 800 \text{ dollars/year.}$$

*Equal-halves check.* Ordering $= \frac{2000}{200}\times 40 = 10 \times 40 = 400$; holding $= \frac{200}{2}\times 4 = 100 \times 4 = 400$. Equal, summing to 800. ✓

(b) With $Q = 250$:

$$TC(250) = \frac{2000}{250}\times 40 + \frac{250}{2}\times 4 = 8 \times 40 + 125 \times 4 = 320 + 500 = 820 \text{ dollars/year.}$$

That's 20 dollars a year more, or $820/800 = 1.025$ — **2.5 percent**. *Cross-check with the ratio formula:* $k = 250/200 = 1.25$, and $\tfrac12(1.25 + 1/1.25) = \tfrac12(1.25 + 0.80) = \tfrac12(2.05) = 1.025$. ✓ Take the carton; 20 dollars a year does not justify fighting the supplier's packaging.

**P2** Underage $c_u = 30 - 12 = 18$ dollars (lost margin); overage $c_o = 12 - 0 = 12$ dollars.

$$\text{critical ratio} = \frac{18}{18+12} = \frac{18}{30} = 0.60.$$

The CDF is $F(20) = 0.15$, $F(21) = 0.40$, $F(22) = 0.70$, $F(23) = 0.90$, $F(24) = 1.00$. The smallest $Q$ with $F(Q) \ge 0.60$ is $Q^* = \mathbf{22}$.

*Verification by expected profit,* $\pi(Q) = 30\,E[\min(D,Q)] - 12Q$ (no salvage term):

- $Q = 21$: $E[\min(D,21)] = 20(0.15) + 21(0.85) = 3 + 17.85 = 20.85$, so $\pi = 30(20.85) - 12(21) = 625.5 - 252 = 373.5$.
- $Q = 22$: $E[\min(D,22)] = 20(0.15) + 21(0.25) + 22(0.60) = 3 + 5.25 + 13.2 = 21.45$, so $\pi = 30(21.45) - 264 = 643.5 - 264 = 379.5$.
- $Q = 23$: $E[\min(D,23)] = 20(0.15) + 21(0.25) + 22(0.30) + 23(0.30) = 3 + 5.25 + 6.6 + 6.9 = 21.75$, so $\pi = 30(21.75) - 276 = 652.5 - 276 = 376.5$.

$373.5 < 379.5 > 376.5$, so 22 is the maximum. ✓

*Marginal cross-check.* $\pi(22) - \pi(21) = 18\,P(D\ge 22) - 12\,P(D \le 21) = 18(0.60) - 12(0.40) = 10.8 - 4.8 = +6.0$, matching $379.5 - 373.5$. And $\pi(23) - \pi(22) = 18(0.30) - 12(0.70) = 5.4 - 8.4 = -3.0$, matching $376.5 - 379.5$. ✓

**P3** (a) A 98 percent in-stock probability means $F(Q^*) = 0.98$, so $z_{0.98} \approx 2.054$:

$$Q^* = 120 + 2.054(25) = 120 + 51.35 = 171.35 \to \mathbf{172} \text{ units per week}$$

(round up — with a discrete requirement you take the smallest quantity that reaches the service level). Note the safety stock is 52 units on a mean of 120: **43 percent** above average demand, which is what a near-certain service level costs.

(b) Invert the critical-ratio rule. Setting $\frac{c_u}{c_u + c_o} = 0.98$ and dividing through by $c_o$:

$$\frac{c_u}{c_u + c_o} = 0.98 \;\Longrightarrow\; c_u = 0.98c_u + 0.98c_o \;\Longrightarrow\; 0.02\,c_u = 0.98\,c_o \;\Longrightarrow\; \frac{c_u}{c_o} = \frac{0.98}{0.02} = 49.$$

*Check:* with $c_u = 49c_o$, the ratio is $49/(49+1) = 0.98$. ✓ The hospital is asserting that running out of a unit is **49 times** as costly as letting one expire. For a blood product where a stockout can mean a preventable death and an expired unit costs a few hundred dollars, that is not merely plausible — it is probably conservative. This is the clearest illustration of the lesson's intuition: the critical ratio is a *statement of values*, and stating a service level and stating a cost ratio are the same act.

</details>

## Flashback

**From Lesson 4.3 (M/M/c, pooling & networks) — fresh variant, three servers this time.** A parts depot has three identical inspectors, each serving at $\mu = 6$ jobs per hour. Jobs arrive Poisson at a total rate of 15 per hour. Compare (a) splitting the stream into three dedicated lines of 5 per hour, each an independent M/M/1, against (b) pooling all three inspectors behind a single M/M/3 queue fed by all 15 per hour. Give $W_q$ for each and the improvement factor.

<details>
<summary>Solution</summary>

**(a) Three independent M/M/1 stations.** Each sees $\lambda = 5$, $\mu = 6$, so $\rho = 5/6 \approx 0.8333$ and

$$L_q = \frac{\rho^2}{1-\rho} = \frac{25/36}{1/6} = \frac{25}{6} \approx 4.167 \text{ jobs}, \qquad W_q = \frac{L_q}{\lambda} = \frac{25/6}{5} = \frac{5}{6} \text{ hours} = 50 \text{ minutes.}$$

(Direct route: $W_q = \rho/(\mu - \lambda) = 0.8333/1 = 0.8333$ h. Agrees.)

**(b) One pooled M/M/3.** Now $\lambda = 15$, $c = 3$, $\mu = 6$, offered load $a = \lambda/\mu = 2.5$, utilization $\rho = \lambda/(c\mu) = 15/18 = 5/6$ — the *same* utilization, so the comparison is fair; pooling is not smuggling in extra capacity. With $1 - \rho = 1/6$:

$$\sum_{n=0}^{2}\frac{a^n}{n!} = 1 + 2.5 + \frac{6.25}{2} = 6.625, \qquad \frac{a^3}{3!\,(1-\rho)} = \frac{15.625}{6 \times (1/6)} = 15.625,$$

$$P_0 = \bigl[6.625 + 15.625\bigr]^{-1} = \frac{1}{22.25} = \frac{4}{89} \approx 0.04494.$$

Erlang-C and the queue wait:

$$C = P_0\,\frac{a^3}{3!\,(1-\rho)} = 0.04494 \times 15.625 \approx 0.7022, \qquad W_q = \frac{C}{c\mu - \lambda} = \frac{0.7022}{18 - 15} \approx 0.2341 \text{ hours} \approx 14.0 \text{ minutes.}$$

*Check by a second route.* $L_q = C\,\dfrac{\rho}{1-\rho} = 0.7022 \times \dfrac{5/6}{1/6} = 0.7022 \times 5 = 3.511$, and Little's law gives $W_q = L_q/\lambda = 3.511/15 = 0.2341$ hours. ✓ Agrees.

**Pooling wins by a factor of $50/14.0 \approx 3.6$.** The reason is the same as always: in the split system an inspector can sit idle while a job waits in *someone else's* line — capacity that exists but cannot be reached. Pooling destroys those unreachable idle moments. Note the gain is larger here than in a two-server comparison, because with three separate lines there are more ways for capacity to be stranded.

</details>

## Connections

- **Backward:** the average-inventory identity $Q/2 = D \times W$ is [Little's law from 4.1](04-01-poisson-arrivals-littles-law.md) applied to a shelf, and "inventory turns" is just $1/W$. The safety-stock term in the reorder point is the newsvendor rule applied to lead-time demand. The convexity that licenses "set the derivative to zero" is imported from [`convex-optimization` 2.1](../../convex-optimization/lessons/02-01-convex-problem-local-global.md).
- **Forward:** [4.5](04-05-simulation-nonlinear-taste.md) simulates the cases these formulas can't close — lumpy demand, correlated lead times, multiple products sharing a warehouse. Multi-period stochastic inventory, where you re-order every period and carry stock forward, is a Markov decision process in the sense of [3.4](03-04-stochastic-dynamic-programming.md); its optimal policy is the base-stock rule, the newsvendor's repeated cousin.
- **Sideways (sensitivity):** the flatness of EOQ near $Q^*$ is the same phenomenon as [2.2's](02-02-shadow-prices-sensitivity.md) allowable ranges — at a smooth optimum the first-order term vanishes, so cost errors are second order in the decision error. It is also why LP shadow prices are more actionable than optimal vectors: near the optimum, *what you do* matters less than *what it's worth*. In finance the same "flat near the optimum" argument is why textbook mean-variance portfolios are notoriously unstable in weights while barely varying in achieved utility.

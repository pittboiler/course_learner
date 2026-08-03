# Grad Game Theory · Lesson 5.4: Bayesian mechanism design and the optimal auction

> ⏱ ~15 min · Module 5: Mechanism design · Builds on: [5.3 Dominant-strategy mechanisms: VCG](05-03-dominant-strategy-mechanisms-vcg.md) · Unlocks: [5.5 The limits of efficient design](05-05-limits-of-efficient-design.md)

## Why this matters

VCG (Lesson 5.3) answered *how do I run an auction that puts the good in the right hands?* — the **efficient** benchmark. But a seller usually isn't a benevolent planner; she wants **money**. Those two goals diverge: to squeeze out more revenue you will sometimes deliberately *refuse to sell* to a willing buyer, or hand the good to someone who values it *less*. Myerson's 1981 optimal-auction theorem is the crown jewel of the field because it turns "design for maximum expected revenue" into a single, computable rule — and reveals that the familiar reserve price at Sotheby's is exactly this rule in disguise. It also quietly unifies auctions with **monopoly pricing** (`grad-micro`): the reserve is a markup, and the object we're about to define is nothing but marginal revenue.

## The idea

You're selling one good to $n$ bidders with independent private values $v_i \sim F_i$. You may design *any* mechanism — any rules for bids, allocation, and payments — as long as bidders play a Bayes–Nash (equivalently, by the revelation principle of 5.2, a truthful direct) equilibrium. Which one maximizes your expected take?

The trap is that payments and incentives are tangled: charge more and bidders shade their reports. The escape is the **envelope characterization** from 4.3. In *any* incentive-compatible mechanism, a bidder's expected payment is not a free knob — it is pinned down by the **allocation rule** alone (up to the rent you leave the lowest type). A bidder who wins more often as her value rises must be *left* some surplus — her **information rent** — precisely because she could always imitate a slightly lower type. So the seller doesn't choose payments; she chooses *who wins*, and the payments follow.

Feed that back into expected revenue and something magical drops out. The seller's expected revenue equals the expected **virtual value** of whoever receives the good, where

$$\psi_i(v) = v - \frac{1 - F_i(v)}{f_i(v)}.$$

Read it as **value minus information rent**: the true value $v$, docked by the hazard-rate term $\tfrac{1-F_i}{f_i}$ (the reciprocal of the hazard rate $f/(1-F)$), which is the surplus you're forced to concede to keep higher types honest. So to maximize revenue: **give the good to the bidder with the highest virtual value — but only if that virtual value is nonnegative.** If everyone's virtual value is negative, keep it. That single "keep-it" threshold *is* the reserve price.

## The formal version

**Myerson's revenue formula.** Fix a direct mechanism with allocation rule $q = (q_1,\dots,q_n)$, where $q_i(v)$ is the probability bidder $i$ wins at reported profile $v=(v_1,\dots,v_n)$. If it is Bayesian incentive compatible (BIC) and individually rational (IR) with the lowest type getting zero surplus, then the seller's expected revenue is

$$\mathbb{E}\!\left[\sum_{i=1}^n \psi_i(v_i)\,q_i(v)\right], \qquad \psi_i(v) = v - \frac{1-F_i(v)}{f_i(v)}.$$

In words: expected revenue is the expected virtual value of the winner — the physical value the good creates, minus the information rents all bidders extract. Payments have vanished from the formula; only *who wins* remains.

**The optimal auction.** To maximize that expectation, maximize the bracket pointwise, at every profile $v$: award the good to whoever has the largest virtual value, and withhold it if all virtual values are negative.

$$\text{winner}(v) = \arg\max_i \psi_i(v_i), \quad \text{sell only if } \max_i \psi_i(v_i) \ge 0.$$

In words: run a "virtual-value auction" with a floor at zero. The winner's payment is the smallest value she could have reported and still won (the threshold price that makes truth-telling optimal).

**Regularity.** Call $F_i$ **regular** if $\psi_i$ is (weakly) increasing. Then the pointwise-optimal rule is monotone in each bidder's value, so it *is* implementable (BIC), and we're done. If $\psi_i$ is non-monotone, the pointwise rule isn't monotone and can't be truthfully implemented; you must **iron** — replace $\psi_i$ by its "monotone hull" over the offending region (constant $\psi$ = a flat, pooled allocation). We'll assume regularity throughout.

**The symmetric case = second-price with a reserve.** If bidders are symmetric ($F_i = F$, so $\psi_i = \psi$) and regular, then "highest $\psi$" means "highest $v$" (since $\psi$ is increasing), and "$\psi \ge 0$" means "$v \ge r^*$" where

$$\psi(r^*) = 0 \quad\Longleftrightarrow\quad r^* - \frac{1 - F(r^*)}{f(r^*)} = 0.$$

In words: the optimal auction is just a **second-price (Vickrey) auction with reserve price $r^*$** — the highest bidder wins provided she clears $r^*$, and pays the larger of $r^*$ and the second-highest value. All the sophistication collapses into one extra number: the reserve.

## Picture

![Virtual valuation psi(v) = 2v - 1 for the uniform U[0,1], a straight line crossing zero at v = 1/2; values below 1/2 have negative virtual value and the seller withholds the good](assets/05-04-fig1.svg)

## Worked examples

**Example 1 (the uniform reserve — Boss Problem 5).** Two bidders, $v_i \sim U[0,1]$ i.i.d. Here $F(v)=v$, $f(v)=1$, so

$$\psi(v) = v - \frac{1-v}{1} = 2v - 1.$$

This is regular ($\psi' = 2 > 0$). The reserve solves $\psi(r^*) = 2r^* - 1 = 0$, so $r^* = \tfrac12$. The optimal auction is a **second-price auction with reserve $\tfrac12$**: sell to the higher bidder if she bids at least $\tfrac12$; she pays $\max\{\tfrac12,\ \text{other bid}\}$. Note the reserve does *not* depend on $n$ — for the uniform it is always $\tfrac12$ (we'll see why in Watch out).

*Does the reserve actually pay?* Compute expected revenue $R(r)$ of the second-price auction with reserve $r$, $n=2$:

- **Exactly one value above $r$** (probability $2r(1-r)$): that bidder wins and pays $r$. Contribution $2r(1-r)\cdot r = 2r^2(1-r)$.
- **Both above $r$** (winner pays the *second*-highest, i.e. $\min(v_1,v_2)$): contribution $\int_r^1\!\!\int_r^1 \min(x,y)\,dx\,dy$. By symmetry this is $\int_r^1 (y^2 - r^2)\,dy = \tfrac13 - r^2 + \tfrac{2}{3}r^3$.

Adding, with $2r^2(1-r) = 2r^2 - 2r^3$:

$$R(r) = \Big(2r^2 - 2r^3\Big) + \Big(\tfrac13 - r^2 + \tfrac{2}{3}r^3\Big) = \tfrac13 + r^2 - \tfrac{4}{3}r^3.$$

Sanity check: $R(0) = \tfrac13$ — the no-reserve second-price revenue (the expected second-highest of two uniforms). Maximize: $R'(r) = 2r - 4r^2 = 2r(1 - 2r) = 0$ at $r^* = \tfrac12$ (and $R'' = 2 - 8r < 0$ there) — **the direct optimization reproduces the virtual-value answer.** The revenue at the optimum:

$$R\!\left(\tfrac12\right) = \tfrac13 + \tfrac14 - \tfrac{4}{3}\cdot\tfrac18 = \tfrac13 + \tfrac14 - \tfrac16 = \frac{4 + 3 - 2}{12} = \frac{5}{12} \approx 0.417.$$

The reserve lifts revenue from $\tfrac13 \approx 0.333$ to $\tfrac{5}{12}$, a gain of $\tfrac{1}{12}$. That gain is bought with occasional inefficiency: when both values fall below $\tfrac12$, a willing buyer walks away empty-handed.

**Example 2 (asymmetry — the higher value can lose).** Now bidder 1 is *strong*, $v_1 \sim U[0,2]$, and bidder 2 is *weak*, $v_2 \sim U[0,1]$. Virtual valuations:

$$\psi_1(v) = v - \frac{1 - v/2}{1/2} = v - (2 - v) = 2v - 2, \qquad \psi_2(v) = 2v - 1.$$

Both are regular. The optimal auction gives the good to the larger $\psi$, if nonnegative. Take the profile $v_1 = 1.1$, $v_2 = 0.9$. The **higher value is bidder 1** (efficiency, and VCG, would award him the good). But the virtual values say otherwise:

$$\psi_1(1.1) = 2(1.1) - 2 = 0.2, \qquad \psi_2(0.9) = 2(0.9) - 1 = 0.8.$$

Since $\psi_2 > \psi_1 \ge 0$, the **weak bidder 2 wins**, despite valuing the good *less*. Why would a revenue-seeker do this? The strong bidder leaves a big information rent (his value is drawn from a wider distribution, so he's used to winning cheaply); handicapping him — demanding a stiffer virtual hurdle — forces him to bid more aggressively when he *does* win. Favoring the underdog manufactures competition, and competition is revenue. This is flatly at odds with efficiency: VCG would never discriminate like this. Optimal design does, on purpose.

## Watch out

- **Optimal ≠ efficient.** The Myerson auction maximizes *revenue*, not welfare. Its reserve deliberately destroys surplus — in Example 1, whenever both values lie in $(0,\tfrac12)$ the good is withheld from someone who wants it. Never call the optimal auction "the best auction" without saying *best for whom*.
- **Allocation is by virtual value, not value.** With asymmetric bidders the highest-value bidder can lose (Example 2). Only in the *symmetric* regular case does "highest $\psi$" coincide with "highest $v$", collapsing to second-price-with-reserve. Don't smuggle the symmetric intuition into an asymmetric problem.
- **The reserve is a single-agent condition — hence independent of $n$ for the uniform.** Solving $\psi(r^*) = 0$ never mentions the other bidders; it's the value at which *one* buyer's virtual value turns positive, i.e. the price a monopolist would post to a lone customer. So for $U[0,1]$, $r^* = \tfrac12$ whether there are 2 bidders or 200. More rivals raise *revenue* (the second price climbs) but not the *reserve*.
- **Regularity is a real hypothesis.** If $\psi$ isn't monotone, "allocate to the highest $\psi$" isn't monotone in value and can't be made truthful — you must **iron** the virtual value flat over the bad region (pooling those types). Skip regularity checks at your peril; some textbook distributions (certain bimodal ones) fail it.
- **Virtual value = marginal revenue.** Treat $1 - F(p)$ as a demand curve (fraction of buyers with value $\ge p$). Then $\psi(p)$ is exactly the marginal revenue of that demand. "Sell iff $\psi \ge 0$" is "produce while marginal revenue $\ge$ marginal cost ($=0$)" — the monopolist's rule. The reserve is a monopoly markup (Bulow–Roberts).

## One-liner

> The optimal auction awards the good to the highest *virtual* value $\psi(v) = v - \tfrac{1-F}{f}$ above a floor of zero — a second-price auction with reserve $r^*$ (where $\psi(r^*)=0$) when bidders are symmetric — trading a slice of efficiency for revenue.

## Problems

**P1 (🟢)** A single buyer has value $v \sim U[0,1]$; the seller (zero cost) posts one take-it-or-leave-it price $p$. Write expected revenue as a function of $p$, maximize it, and confirm the optimal price equals the reserve $r^*$ from Example 1. Then say in one sentence why this makes the reserve "a monopoly price."

**P2 (🟡)** Values are drawn from $F(v) = v^2$ on $[0,1]$ (so buyers skew high). (a) Compute the virtual valuation $\psi(v)$. (b) Verify regularity. (c) Find the optimal reserve $r^*$.

**P3 (🔴, optional)** Return to Example 2 (strong $v_1 \sim U[0,2]$, weak $v_2 \sim U[0,1]$). Characterize *every* value profile at which the weak bidder wins the good **despite having the lower value**. Give the inequality on $(v_1, v_2)$ and interpret it.

<details>
<summary>Solutions</summary>

**P1** The buyer purchases iff $v \ge p$, which has probability $1 - F(p) = 1 - p$. Expected revenue is

$$R(p) = p\,(1 - p).$$

Then $R'(p) = 1 - 2p = 0 \Rightarrow p^* = \tfrac12$, matching $r^* = \tfrac12$. Equivalently, the first-order condition $1 - 2p = 0$ is exactly $\psi(p) = 2p - 1 = 0$: **posting the optimal monopoly price and setting the reserve are the same computation.** The reserve is a monopoly price because it solves the single-buyer problem — the seller pretends the winner is her only customer and charges the value at which marginal revenue $\psi$ hits her (zero) marginal cost.

**P2** (a) $F(v) = v^2$, so $f(v) = 2v$ and

$$\psi(v) = v - \frac{1 - v^2}{2v} = \frac{2v^2 - (1 - v^2)}{2v} = \frac{3v^2 - 1}{2v} = \frac{3v}{2} - \frac{1}{2v}.$$

(b) $\psi'(v) = \tfrac32 + \tfrac{1}{2v^2} > 0$ for all $v \in (0,1]$, so $\psi$ is strictly increasing — **regular**.

(c) $\psi(r^*) = 0 \Rightarrow 3(r^*)^2 - 1 = 0 \Rightarrow r^* = \tfrac{1}{\sqrt{3}} \approx 0.577$. Higher than the uniform's $\tfrac12$: because value is concentrated toward the top, the seller can afford a stiffer floor.

**P3** With $\psi_1(v_1) = 2v_1 - 2$ and $\psi_2(v_2) = 2v_2 - 1$, bidder 2 wins iff $\psi_2 \ge \psi_1$ and $\psi_2 \ge 0$:

$$2v_2 - 1 \ge 2v_1 - 2 \;\Longleftrightarrow\; v_2 \ge v_1 - \tfrac12, \qquad \text{and} \qquad v_2 \ge \tfrac12.$$

"Despite the lower value" adds $v_2 < v_1$. Combining, the weak bidder wins with the lower value exactly on

$$\boxed{\,v_1 - \tfrac12 \le v_2 < v_1, \quad v_2 \ge \tfrac12.\,}$$

Interpretation: whenever the strong bidder edges out the weak one by less than $\tfrac12$ (and the weak bidder clears her own reserve), the handicap on bidder 1 — his fatter information rent, encoded as the extra "$-1$" in $\psi_1$ versus "$-\tfrac12$" in $\psi_2$ — flips the allocation. The strong bidder must beat the weak one by a full half-unit of value to actually win. (Check with Example 2: $v_1 = 1.1, v_2 = 0.9$ gives $0.6 \le 0.9 < 1.1$ and $0.9 \ge \tfrac12$ ✓.)

</details>

## Flashback

**From Lesson 4.3 (Revenue equivalence theorem):** Two bidders, values i.i.d. $U[0,1]$, no reserve. (a) Using the fact that any efficient IPV auction earns the seller the *expected second-highest value*, compute the expected revenue of the second-price auction. (b) Confirm the first-price auction, with equilibrium bid $b(v) = \tfrac12 v$, yields the same. (c) In one sentence, explain how Lesson 5.4's optimal reserve escapes this equivalence.

<details>
<summary>Solution</summary>

(a) The second-highest of two i.i.d. $U[0,1]$ draws is $\min(v_1, v_2)$, whose mean is $\int_0^1 \Pr(\min > t)\,dt = \int_0^1 (1-t)^2\,dt = \tfrac13$. So expected revenue is $\tfrac13$.

(b) In the first-price auction the winner is the *higher* bidder and pays her own bid $\tfrac12 v_{(2)}$ where $v_{(2)} = \max(v_1, v_2)$. The max has mean $\int_0^1 \Pr(\max > t)\,dt = \int_0^1 (1 - t^2)\,dt = \tfrac23$, so expected revenue is $\tfrac12 \cdot \tfrac23 = \tfrac13$. **Identical** — revenue equivalence: the format doesn't matter, only the allocation (efficient) and the lowest type's rent (zero) do.

(c) Revenue equivalence holds across auctions with the *same allocation*; the optimal reserve *changes the allocation* — it withholds the good when both values are below $\tfrac12$ — so it steps outside the equivalence class and earns strictly more ($\tfrac{5}{12} > \tfrac13$).

</details>

## Connections

- **Backward:** the whole edifice rests on the [4.3](04-03-revenue-equivalence-theorem.md) envelope/IC characterization — payments determined by allocation, surplus = integral of the interim win probability. That is where $\tfrac{1-F}{f}$ enters as the information-rent term. The revelation principle of 5.2 is what lets us restrict to truthful direct mechanisms in the first place; see the module [syllabus](../syllabus.md).
- **Contrast (5.3, VCG):** VCG is the *efficient* benchmark — allocate by true value, in dominant strategies. Myerson is the *revenue* benchmark — allocate by virtual value, in Bayes–Nash. Symmetric bidders make VCG a plain second-price auction and Myerson a second-price auction *with reserve*; the reserve is the entire difference between efficiency and revenue maximization.
- **Forward:** [5.5](05-05-limits-of-efficient-design.md) pushes on the efficiency-vs-revenue tension to its breaking point — the Myerson–Satterthwaite theorem, where *no* mechanism can be simultaneously efficient, budget-balanced, and voluntary once there is two-sided private information.
- **Sideways (micro):** the reserve *is* a monopoly markup and the virtual valuation *is* marginal revenue (P1, Watch out) — the auction-design and monopoly-screening chapters of [grad-micro](../../grad-micro/syllabus.md) are the same optimization wearing different clothes.
- **Sideways (probability):** the machinery is order statistics (winner = a max, price = a conditional order statistic) and the hazard rate — the term $\tfrac{1-F}{f}$ is the reciprocal hazard, the object that also governs failure times and Mills ratios in [probability-theory](../../probability-theory/syllabus.md).

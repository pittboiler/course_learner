# Grad Microeconomics · Lesson 6.1: Monopoly and price discrimination

> ⏱ ~15 min · Module 6: Market structure, externalities, and welfare · Builds on: [5.5 Mechanism design in markets](05-05-mechanism-design-markets.md) · Unlocks: [6.2 Oligopoly](06-02-oligopoly.md)

## Why this matters

Competition was the hero of Module 4: price equals marginal cost, and the invisible hand delivers the surplus-maximizing quantity for free (the First Welfare Theorem). Module 6 is the rogues' gallery — the structural reasons that machinery breaks. The first and cleanest villain is the **monopolist**: one seller who faces the entire downward-sloping demand curve and therefore *chooses* the price by choosing how much to withhold. That single change — you move the price when you move your output — rewrites the firm's first-order condition, opens a wedge between price and marginal cost, and carves a deadweight-loss triangle out of the surplus you learned to measure in [4.1](04-01-partial-equilibrium-surplus.md). The same pricing power, wielded more finely, becomes **price discrimination** — and its most sophisticated form turns out to be exactly the screening problem of [5.3](05-03-screening.md) wearing a merchant's apron. This lesson is the benchmark the whole module measures against, and it seeds the monopoly corner of Boss Problem 6.

## The idea

A competitive firm is a *price-taker*: it's so small that selling one more unit doesn't budge the market price, so it just checks "does this unit's price cover its marginal cost?" and produces until $p = MC$.

A monopolist is a *price-maker*. It is the whole supply side, so the demand curve is its personal menu: to sell more, it must lower the price — and lower it **on every unit, not just the last one**. That is the entire story. Selling one extra widget brings in its price, yes, but it also shaves a little off the price of all the widgets you were already selling. So the true revenue from one more unit — **marginal revenue** — is *less* than the price. The monopolist stops where marginal revenue meets marginal cost, which happens at a *smaller* quantity and a *higher* price than competition would give.

Because it produces too little, some units that buyers value above their cost never get made. That forgone surplus is the deadweight loss — the efficiency price of market power. And how much power? It depends on how desperate the buyers are: if demand is nearly vertical (inelastic), the monopolist can jack up the price with little loss of sales, so the markup is huge. If demand is nearly flat (elastic), even a small markup drives customers away, so the monopolist behaves almost competitively. Markup is the mirror image of elasticity.

## The formal version

**The monopolist's problem.** Let $q$ be output, let inverse demand be $p(q)$ (the price at which quantity $q$ clears, downward-sloping: $p'(q) < 0$), and let $c(q)$ be total cost with marginal cost $MC(q) = c'(q)$. The monopolist maximizes profit

$$\max_{q \ge 0}\; \pi(q) = p(q)\,q - c(q).$$

The first-order condition is

$$\underbrace{p(q) + q\,p'(q)}_{MR(q)} \;=\; \underbrace{c'(q)}_{MC(q)}.$$

**In words:** produce until the revenue from the last unit equals its cost. The left side is **marginal revenue** $MR(q) = \dfrac{d}{dq}\big[p(q)q\big]$: the price you collect on the new unit, $p(q)$, plus the loss $q\,p'(q) < 0$ you take on all the *inframarginal* units whose price just dropped. Since $q\,p'(q) < 0$, we always have $MR(q) < p(q)$ — marginal revenue lies strictly below the demand curve.

**The Lerner index (the markup rule).** Factor $MR$ using the price elasticity of demand $\varepsilon = \dfrac{dq}{dp}\dfrac{p}{q} < 0$:

$$MR = p\left(1 + \frac{q\,p'(q)}{p}\right) = p\left(1 + \frac{1}{\varepsilon}\right) = p\left(1 - \frac{1}{|\varepsilon|}\right).$$

Setting $MR = MC$ and rearranging gives the **Lerner index**:

$$\frac{p - MC}{p} = \frac{1}{|\varepsilon|}.$$

**In words:** the proportional markup of price over marginal cost equals the reciprocal of the demand elasticity. Less elastic demand (small $|\varepsilon|$) → bigger markup. As $|\varepsilon| \to \infty$ (perfectly elastic, i.e. competitive), the markup vanishes and $p \to MC$. Note this also forces the monopolist to operate where $|\varepsilon| > 1$: if demand were inelastic, $MR$ would be negative and cutting output would raise revenue *and* cut cost.

**Efficiency loss.** The competitive benchmark solves $p(q) = MC(q)$, giving $q^{c} > q^{m}$. The monopoly restricts output to $q^m$, and the units in $(q^m, q^c)$ — each worth $p(q) > MC(q)$ to society — go unproduced. Their lost surplus is the **deadweight loss**, the triangle-ish region between demand and $MC$ from $q^m$ to $q^c$, measured with exactly the surplus tools of [4.1](04-01-partial-equilibrium-surplus.md).

**Price discrimination.** Charging one price leaves surplus on the table. A monopolist who can charge different prices captures more:

- **First-degree (perfect):** charge each unit its exact willingness to pay — the whole area under demand. The monopolist produces the *efficient* quantity $q^c$ (it no longer has to withhold, because lowering the price on the last unit costs it nothing on the earlier ones) and extracts **all** surplus. **No deadweight loss, maximal inequality.**
- **Second-degree (nonlinear pricing):** you can't observe a buyer's type, so you offer a *menu* — quantity discounts, bundles, versions — and let buyers self-select. This is precisely the **screening** problem of [5.3](05-03-screening.md): the same incentive-compatibility (IC) and individual-rationality (IR) constraints, the same *information rent* left to high types, the same *no distortion at the top*.
- **Third-degree (group pricing):** you observe a buyer's group (student vs. business, weekday vs. weekend) and set a separate price per segment. Optimality equalizes marginal revenue across segments at the common marginal cost, $MR_A = MR_B = MC$, which by the Lerner rule means **the less elastic segment pays more** (the inverse-elasticity rule).

## Picture

![A monopoly diagram: downward demand, marginal revenue below it, flat marginal cost; monopoly output set where MR=MC, price read up on demand, with consumer surplus, the profit rectangle, and the deadweight-loss triangle out to the competitive quantity all shaded](assets/06-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — linear demand, constant marginal cost).** Inverse demand $p = a - bq$, constant marginal cost $MC = c$ (no fixed cost), with $a > c$. Revenue is $R = (a-bq)q = aq - bq^2$, so

$$MR = a - 2bq.$$

Notice $MR$ has the same intercept $a$ but *twice the slope* of demand — a fact worth memorizing for linear demand. Set $MR = MC$:

$$a - 2bq^m = c \;\Rightarrow\; q^m = \frac{a - c}{2b}, \qquad p^m = a - bq^m = \frac{a + c}{2}.$$

Profit is $\pi = (p^m - c)q^m = \dfrac{(a-c)^2}{4b}$. The competitive quantity solves $p = c$: $\;q^c = \dfrac{a-c}{b} = 2q^m$ — monopoly produces exactly *half* the efficient quantity here. Deadweight loss is the triangle of base $(q^c - q^m)$ and height $(p^m - c)$:

$$DWL = \tfrac{1}{2}\,(p^m - c)(q^c - q^m) = \tfrac{1}{2}\cdot\frac{a-c}{2}\cdot\frac{a-c}{2b} = \frac{(a-c)^2}{8b}.$$

The DWL is exactly *half* the monopolist's profit — a memorable linear-case fact.

Put in numbers: $a = 120$, $b = 1$, $c = 20$ (the figure). Then $q^m = 50$, $p^m = 70$, $\pi = 50 \cdot 50 = 2500$, $q^c = 100$, and $DWL = \tfrac12(50)(50) = 1250$. Verify the Lerner index: markup $\dfrac{p^m - c}{p^m} = \dfrac{50}{70} = \dfrac{5}{7}$. Elasticity at the monopoly point: $\dfrac{dq}{dp} = -\dfrac1b = -1$, so $|\varepsilon| = 1\cdot\dfrac{p^m}{q^m} = \dfrac{70}{50} = 1.4$, and $\dfrac{1}{|\varepsilon|} = \dfrac{1}{1.4} = \dfrac{5}{7}$. ✓ The two routes agree.

**Example 2 (why you'd care — third-degree price discrimination).** A monopolist serves two separate markets with constant $MC = 20$ and no arbitrage between them. Inverse demands:

$$\text{Market A:}\quad p_A = 100 - q_A, \qquad \text{Market B:}\quad p_B = 80 - 2q_B.$$

Set marginal revenue equal to marginal cost *in each market separately* (the segments share only the cost side):

$$MR_A = 100 - 2q_A = 20 \;\Rightarrow\; q_A = 40,\; p_A = 60,$$
$$MR_B = 80 - 4q_B = 20 \;\Rightarrow\; q_B = 15,\; p_B = 50.$$

Market A pays **60**, market B pays **50** — and this is the inverse-elasticity rule, not an accident. Check elasticities at the chosen points: $|\varepsilon_A| = 1\cdot\dfrac{60}{40} = 1.5$ while $|\varepsilon_B| = \dfrac12\cdot\dfrac{50}{15} = 1.67$. Market A is the *less elastic* segment, so it bears the *higher* price. Confirm via Lerner: $\dfrac{60-20}{60} = \dfrac{2}{3} = \dfrac{1}{1.5}$ ✓ and $\dfrac{50-20}{50} = \dfrac{3}{5} = \dfrac{1}{1.67}$ ✓. The whole logic of third-degree discrimination: squeeze the captive audience, discount for the price-sensitive one.

## Watch out

- **You might think marginal revenue equals price (it does under competition), but** for a monopolist $MR = p + q\,p'(q) < p$ — strictly below the demand curve. That gap is not a typo or a sign slip: it is the loss you eat on every inframarginal unit when you cut the price to sell one more. For linear demand the $MR$ curve has the *same intercept and double the slope* of demand.
- **You might think monopoly is always inefficient, but** *perfect* (first-degree) price discrimination produces the efficient quantity $q^c$ with **zero** deadweight loss — it is efficient-but-unequal: the pie is as large as competition's, but the monopolist eats all of it. Inefficiency is a feature of *uniform* pricing, not of market power per se.
- **You might think second-degree discrimination is a different topic from Module 5, but** offering a menu and letting buyers self-select *is* the screening problem of [5.3](05-03-screening.md): identical IC/IR constraints, identical information rents, identical no-distortion-at-the-top. Recognizing that saves you from re-deriving it.
- **You might think third-degree discrimination just needs different demand curves, but** it also needs **no arbitrage** between segments. If low-price buyers can resell to high-price buyers, the two markets collapse into one and a single price re-emerges. Separability of the segments is the load-bearing assumption.
- **You might drop the absolute value in the markup rule, but** the Lerner index is $\dfrac{1}{|\varepsilon|}$; elasticity itself is negative, and a "markup" of $\dfrac{1}{\varepsilon} < 0$ is nonsense. And it forces $|\varepsilon| > 1$ at the optimum: no monopolist prices on the inelastic part of demand.

## One-liner

> A monopolist sets $MR = MC$ below the demand curve, marking price over cost by $\tfrac{1}{|\varepsilon|}$ and burning a deadweight-loss triangle — unless it can price-discriminate, in which case perfect discrimination restores efficiency while taking every crumb of surplus.

## Problems

**P1 (🟢)** A monopolist faces inverse demand $p = 200 - 4q$ with constant marginal cost $MC = 40$ and no fixed cost. Find the monopoly quantity, price, and profit; find the competitive quantity; compute the deadweight loss; and verify the Lerner index equals $1/|\varepsilon|$ at the monopoly point.

**P2 (🟡)** A monopolist with constant $MC = 10$ sells in two non-arbitrageable markets: $p_1 = 60 - q_1$ and $p_2 = 40 - q_2$. Find the profit-maximizing price and quantity in each market. Which segment faces the higher price, and does the inverse-elasticity rule explain it? Compute $|\varepsilon|$ in each market to confirm.

**P3 (🔴, optional)** A monopolist faces $p = 100 - q$ with constant $MC = 20$. (a) Under a single uniform price, find $q^m, p^m$, profit, and deadweight loss. (b) Now suppose the monopolist can practice *perfect first-degree* price discrimination. What quantity does it produce, what is its profit, and what is the deadweight loss? (c) Compare (a) and (b) in one sentence: what happens to efficiency, and what happens to consumer surplus?

<details>
<summary>Solutions</summary>

**P1** Demand $p = 200 - 4q$, so $MR = 200 - 8q$. Set $MR = MC$:

$$200 - 8q = 40 \;\Rightarrow\; q^m = 20, \qquad p^m = 200 - 4(20) = 120.$$

Profit (no fixed cost): $\pi = (p^m - MC)\,q^m = (120 - 40)(20) = 1600.$

Competitive quantity solves $p = MC$: $\;200 - 4q = 40 \Rightarrow q^c = 40.$

Deadweight loss is the triangle of base $q^c - q^m = 20$ and height $p^m - MC = 80$:

$$DWL = \tfrac12 (80)(20) = 800.$$

Lerner check: markup $= \dfrac{120 - 40}{120} = \dfrac{80}{120} = \dfrac{2}{3}$. Elasticity at the monopoly point: $\dfrac{dq}{dp} = -\dfrac14$, so $|\varepsilon| = \dfrac14 \cdot \dfrac{p^m}{q^m} = \dfrac14 \cdot \dfrac{120}{20} = \dfrac{3}{2}$, and $\dfrac{1}{|\varepsilon|} = \dfrac{2}{3}$. ✓

**P2** Constant $MC = 10$ in both markets; solve each separately.

Market 1: $MR_1 = 60 - 2q_1 = 10 \Rightarrow q_1 = 25,\; p_1 = 60 - 25 = 35.$
Market 2: $MR_2 = 40 - 2q_2 = 10 \Rightarrow q_2 = 15,\; p_2 = 40 - 15 = 25.$

Market 1 faces the higher price (35 vs. 25). Elasticities at the optimum, using $\dfrac{dq}{dp} = -1$ in each:

$$|\varepsilon_1| = 1 \cdot \frac{35}{25} = 1.4, \qquad |\varepsilon_2| = 1 \cdot \frac{25}{15} = 1.67.$$

Market 1 is the less elastic segment, so the inverse-elasticity rule predicts it bears the higher markup — and it does. Confirm with Lerner: $\dfrac{35-10}{35} = \dfrac{25}{35} = \dfrac{5}{7} \approx 0.714 = \dfrac{1}{1.4}$ ✓; $\dfrac{25-10}{25} = \dfrac{15}{25} = 0.6 = \dfrac{1}{1.67}$ ✓.

**P3** Demand $p = 100 - q$, $MC = 20$.

(a) Uniform pricing: $MR = 100 - 2q = 20 \Rightarrow q^m = 40,\; p^m = 60$. Profit $= (60 - 20)(40) = 1600$. Competitive quantity: $100 - q = 20 \Rightarrow q^c = 80$. Deadweight loss:

$$DWL = \tfrac12\,(p^m - MC)(q^c - q^m) = \tfrac12 (40)(40) = 800.$$

(b) Perfect first-degree discrimination: the monopolist charges each unit its willingness to pay, so it keeps producing as long as demand price exceeds $MC$ — i.e. up to the efficient quantity $q = q^c = 80$. Its profit equals the *entire* surplus between the demand curve and $MC$:

$$\pi^{1st} = \int_0^{80}\big[(100 - q) - 20\big]\,dq = \int_0^{80}(80 - q)\,dq = \Big[80q - \tfrac{q^2}{2}\Big]_0^{80} = 6400 - 3200 = 3200.$$

Equivalently, the triangle $\tfrac12(100 - 20)(80) = \tfrac12(80)(80) = 3200$. Deadweight loss is **0** (every socially valuable unit is produced), and consumer surplus is **0** (every buyer pays exactly their valuation).

(c) Perfect discrimination *doubles* profit (1600 → 3200) and *eliminates* the deadweight loss (800 → 0), restoring full efficiency — but it does so by transferring every last dollar of consumer surplus to the monopolist. Efficient, maximally unequal.

</details>

## Flashback

**From Lesson 4.1 (Partial equilibrium and surplus):** A competitive market has demand $q^d = 90 - 3p$ and supply $q^s = 3p$. A per-unit tax $t = 6$ is levied on sellers. Find the buyer's price, the seller's price, the traded quantity, and the deadweight loss.

<details>
<summary>Solution</summary>

No-tax equilibrium: $90 - 3p = 3p \Rightarrow 90 = 6p \Rightarrow p^* = 15$, $q^* = 45$.

With the tax, buyers pay $p^d$ and sellers keep $p^s = p^d - 6$. Clear the market:

$$90 - 3p^d = 3(p^d - 6) = 3p^d - 18 \;\Rightarrow\; 108 = 6p^d \;\Rightarrow\; p^d = 18,\quad p^s = 12.$$

Quantity: $q_t = 90 - 3(18) = 36$ (check supply: $3(12) = 36$ ✓). The tax cut trade from 45 to 36, so $\Delta q = 9$, and the deadweight-loss triangle has base $t = 6$ and height $\Delta q = 9$:

$$DWL = \tfrac12\,t\,\Delta q = \tfrac12 (6)(9) = 27.$$

The wedge between $p^d$ and $p^s$ is exactly $t = 6$, and the surplus on the 9 units no longer traded — each worth more to a buyer than it cost a seller — vanishes. This is the *same* triangle a monopoly carves, only there the wedge is $p^m - MC$ instead of a tax.

</details>

## Connections

- **Backward:** the deadweight-loss triangle and the surplus areas are exactly the tools of [4.1](04-01-partial-equilibrium-surplus.md) — monopoly is that lesson's tax wedge with the "tax" being the firm's own markup $p^m - MC$. Marginal revenue and marginal cost come from the firm's optimization in [3.3](03-03-profit-maximization-supply.md); the efficiency of the competitive benchmark is the First Welfare Theorem of Module 4.
- **Forward:** [6.2](06-02-oligopoly.md) reopens the market to a *few* sellers — Cournot output competition interpolates between this monopoly (one firm) and perfect competition (many firms), and Boss Problem 6 quantifies exactly that convergence in deadweight loss. Externalities in [6.3](06-03-externalities-coase-theorem.md) are another wedge between private and social marginal cost, analyzed with the same triangle.
- **Sideways (within the course):** second-degree price discrimination *is* the screening problem of [5.3](05-03-screening.md) — menu design, self-selection, information rents, no distortion at the top — and both descend from the mechanism-design logic of [5.5](05-05-mechanism-design-markets.md). First-degree discrimination is the full-surplus-extraction benchmark those models measure rents against.
- **Sideways (cross-course):** for the undergraduate-level monopoly picture and the intuition without the elasticity algebra, see [`micro-refresher`](../../micro-refresher/syllabus.md); the perpetuity-style improper integral behind cumulative surplus is [`calc-refresher` 2.3](../../calc-refresher/lessons/02-03-improper-integrals-and-models.md).
- Full module map: [syllabus](../syllabus.md).

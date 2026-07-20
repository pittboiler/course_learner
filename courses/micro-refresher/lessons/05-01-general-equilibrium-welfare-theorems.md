# Mathematical Microeconomics · Lesson 5.1: General equilibrium and the welfare theorems

> ⏱ ~15 min · Module 5: Equilibrium and market failure · Builds on: [1.2 Utility maximization and Marshallian demand](01-02-utility-maximization-marshallian-demand.md), [4.1 Perfect competition and welfare](04-01-competition-welfare.md) · Unlocks: 5.2 (externalities and public goods)

## Why this matters

Everything before Module 4 studied **one** market, or **one** agent, in isolation. But a real economy is a web of interlocking markets, and the deep questions are about the whole web at once: does a set of prices exist that clears *every* market simultaneously? If it does, is the resulting allocation any *good*? The two **welfare theorems** are the sharpest answers economics has ever produced — Adam Smith's "invisible hand" turned into theorems, complete with the fine print that says exactly when the hand works and when it fails (all of Module 5's market failures are violations of that fine print). This is the theoretical summit of the course, and it runs on machinery you already own: the tangency $\mathrm{MRS}=p_1/p_2$ from [1.2](01-02-utility-maximization-marshallian-demand.md) and the surplus logic of [4.1](04-01-competition-welfare.md).

## The idea

Strip the economy to its bones: two people, $A$ and $B$; two goods; a fixed total supply of each (no production — they just trade what they start with, their **endowments**). Draw it as a rectangle whose width is the total amount of good 1 and whose height is the total of good 2 — the **Edgeworth box**. Any single point in the box is a complete description of who-has-what: measure $A$'s bundle from the bottom-left corner, and $B$'s from the top-right corner, upside down. Because the box is exactly the size of the total supply, every point automatically hands out all the goods — the two bundles always sum to the totals.

Now overlay each person's indifference curves. An allocation is **Pareto efficient** if you cannot make one person happier without making the other worse off — no more win-win trades are left on the table. Geometrically that is a *tangency*: where $A$'s indifference curve just kisses $B$'s, their willingness-to-trade rates agree, and any move helps one only by hurting the other. The set of all such tangencies is the **contract curve**, snaking from one corner to the other.

Separately, imagine an auctioneer calls out a price ratio. Each person, taking prices as given, sells some of their endowment and buys their favorite affordable bundle — exactly the [1.2](01-02-utility-maximization-marshallian-demand.md) consumer problem, with the budget line pinned through the endowment. A **Walrasian (competitive) equilibrium** is a price ratio at which the two shopping lists happen to be mutually consistent: both markets clear. The punchline — the **First Welfare Theorem** — is that this equilibrium always lands *on the contract curve*. Self-interested trading at common prices, with no coordination, exhausts every gain from trade.

## The formal version

**A pure-exchange economy.** Two consumers $i\in\{A,B\}$, two goods. Consumer $i$ has a utility function $u^i$ and an **endowment** $\omega^i=(\omega^i_1,\omega^i_2)\in\mathbb{R}^2_+$ (the bundle they start with). Aggregate supply is $\bar\omega=(\bar\omega_1,\bar\omega_2)=\omega^A+\omega^B$. An **allocation** $(x^A,x^B)$ is **feasible** if $x^A+x^B=\bar\omega$ — it redistributes exactly what exists.

*In words: nothing is produced or destroyed; trade just moves the fixed pile around. Feasibility is why the whole story fits inside one box of dimensions $\bar\omega_1\times\bar\omega_2$.*

**Pareto efficiency.** A feasible allocation $(x^A,x^B)$ is **Pareto efficient** if there is no other feasible $(y^A,y^B)$ with $u^A(y^A)\ge u^A(x^A)$ and $u^B(y^B)\ge u^B(x^B)$, at least one strict.

*In words: no feasible reshuffle makes someone strictly better off while harming no one. It says nothing about fairness — giving one person everything can be Pareto efficient.*

**Efficiency ⟺ equal MRS ⟺ contract curve.** Recall the marginal rate of substitution $\mathrm{MRS}^i_{12}=\dfrac{\partial u^i/\partial x_1}{\partial u^i/\partial x_2}$ — the units of good 2 that $i$ will trade for one unit of good 1 at no change in utility (the indifference-curve slope, [1.2](01-02-utility-maximization-marshallian-demand.md)). For an **interior** allocation with smooth, convex (quasi-concave) preferences,

$$\text{Pareto efficient}\iff \mathrm{MRS}^A_{12}=\mathrm{MRS}^B_{12}.$$

*In words: efficiency is tangency of the two indifference curves. If the rates differed — say $A$ values good 1 more than $B$ does — they could swap and both climb; only when the rates match is every win-win exhausted.* The locus of all such points is the **contract curve**, running from $O^A$ to $O^B$.

**Walrasian equilibrium.** Prices $p=(p_1,p_2)\gg 0$ and a feasible allocation $(x^A,x^B)$ form a **Walrasian equilibrium** if each $x^i$ solves consumer $i$'s problem at those prices, with wealth equal to the **value of their endowment**:

$$x^i=\arg\max_{x\ge 0}\ u^i(x)\quad\text{s.t.}\quad p\cdot x\le p\cdot\omega^i,\qquad\text{and}\qquad x^A+x^B=\bar\omega.$$

*In words: everyone shops optimally at common prices, financing purchases by selling their endowment, and when the dust settles supply equals demand in both goods.* At an interior solution each consumer's tangency [1.2](01-02-utility-maximization-marshallian-demand.md) gives $\mathrm{MRS}^i_{12}=p_1/p_2$, so automatically $\mathrm{MRS}^A_{12}=p_1/p_2=\mathrm{MRS}^B_{12}$. (By Walras' law, if one market clears the other must too — value in equals value out — so we hunt for a *single* price ratio.)

**First Welfare Theorem (1WT).** *If preferences are locally nonsatiated, every Walrasian equilibrium allocation is Pareto efficient.*

*Proof (contradiction).* Let $(x^A,x^B;p)$ be an equilibrium and suppose some feasible $(y^A,y^B)$ Pareto-dominates it. If $u^i(y^i)>u^i(x^i)$, then $y^i$ was unaffordable — $p\cdot y^i>p\cdot\omega^i$ — else $i$ would have bought it. If $u^i(y^i)=u^i(x^i)$, then $p\cdot y^i\ge p\cdot\omega^i$: were $y^i$ *cheaper*, local nonsatiation would put a strictly preferred bundle within budget, contradicting optimality of $x^i$. Summing over $i$, with at least one strict inequality,

$$p\cdot(y^A+y^B)>p\cdot(\omega^A+\omega^B)=p\cdot\bar\omega.$$

But feasibility forces $y^A+y^B=\bar\omega$, so $p\cdot(y^A+y^B)=p\cdot\bar\omega$ — contradiction. $\blacksquare$

*In words: a Pareto improvement would have to cost more than the economy is worth, yet use the same goods — impossible. Notice how little it assumes: just local nonsatiation and price-taking. No convexity, no differentiability.*

**Second Welfare Theorem (2WT).** *If, in addition, preferences are continuous, convex, and locally nonsatiated, then any Pareto-efficient allocation $x^*$ can be supported as a Walrasian equilibrium after a suitable lump-sum redistribution of endowments — there exist prices $p^*\neq 0$ such that with wealth $p^*\cdot x^{*i}$, each consumer's optimum is exactly $x^{*i}$, and markets clear.*

*In words: pick whatever efficient outcome you consider fair; the market can implement it, provided you first hand out the right lump-sum wealth. Efficiency and distribution decouple — the price system delivers efficiency, and lump-sum transfers handle who-gets-what.* The engine is the separating-hyperplane theorem: **convexity** is what guarantees a price line exists that separates the two "preferred" sets at $x^*$. Drop convexity and the supporting price can fail to exist — one honest limit of the theorem. (Also honest: truly *lump-sum* transfers — independent of behavior — are nearly impossible in practice, which is why redistribution usually distorts. And both theorems assume complete markets and **no externalities** — precisely what [5.2](05-02-externalities-public-goods.md) breaks.)

## Picture

![An Edgeworth box with A's origin at the bottom-left and B's at the top-right; A's and B's indifference curves are tangent at the equilibrium E, which lies on the contract curve running corner to corner; the budget/price line passes through the endowment ω and E with slope minus the price ratio](assets/05-01-fig1.svg)

The box is the economy $u^A=(x^A_1)^{2/3}(x^A_2)^{1/3}$, $u^B=(x^B_1)^{1/3}(x^B_2)^{2/3}$, each endowed with $(3,3)$, so $\bar\omega=(6,6)$. The endowment $\omega$ sits at the center; trading at the equilibrium price ratio $p_1/p_2=1$ moves the economy along the price line to $E=\big(x^A=(4,2),\,x^B=(2,4)\big)$, where the red and blue indifference curves are tangent. That tangency is the contract curve passing through $E$ — the First Welfare Theorem made visible: the competitive trade landed on the efficient locus. (This is the economy of the Worked examples.)

## Worked examples

**Example 1 (mechanical — the contract curve).** Take the boxed economy above. The two marginal rates of substitution are

$$\mathrm{MRS}^A=\frac{\partial u^A/\partial x_1}{\partial u^A/\partial x_2}=\frac{\tfrac23 (x^A_1)^{-1/3}(x^A_2)^{1/3}}{\tfrac13 (x^A_1)^{2/3}(x^A_2)^{-2/3}}=2\,\frac{x^A_2}{x^A_1},\qquad \mathrm{MRS}^B=\tfrac12\,\frac{x^B_2}{x^B_1}.$$

Efficiency sets them equal. Substitute $x^B=\bar\omega-x^A=(6-x^A_1,\,6-x^A_2)$:

$$2\,\frac{x^A_2}{x^A_1}=\frac12\,\frac{6-x^A_2}{6-x^A_1}\ \Longrightarrow\ 4x^A_2(6-x^A_1)=x^A_1(6-x^A_2)\ \Longrightarrow\ \boxed{x^A_2=\frac{2x^A_1}{8-x^A_1}.}$$

That is the contract curve, running from $O^A$ (at $x^A_1=0$, $x^A_2=0$) to $O^B$ (at $x^A_1=6$, $x^A_2=6$). It is a genuine *curve*, not a diagonal, because the two consumers weight the goods differently.

**Example 2 (why you'd care — solve the equilibrium and watch 1WT fire).** Now find the competitive prices. Normalize $p_2=1$ and write $p=p_1$. Each endowment is worth $w^i=p\cdot 3+1\cdot 3=3p+3$. Cobb–Douglas demand (constant expenditure shares, [1.2](01-02-utility-maximization-marshallian-demand.md) P1) gives

$$x^A_1=\tfrac23\,\frac{w^A}{p}=\tfrac23\,\frac{3p+3}{p},\qquad x^B_1=\tfrac13\,\frac{w^B}{p}=\tfrac13\,\frac{3p+3}{p}.$$

Clear good 1 ($x^A_1+x^B_1=6$): $\ \dfrac{3p+3}{p}=6\Rightarrow 3p+3=6p\Rightarrow p=1$. So $p_1/p_2=1$. Then $x^A=(4,2)$, $x^B=(2,4)$ (good 2 clears automatically, by Walras' law — check: $2+4=6$ ✓). Finally test efficiency: plug $x^A=(4,2)$ into the Example 1 contract curve: $\dfrac{2\cdot 4}{8-4}=\dfrac{8}{4}=2=x^A_2$ ✓. The equilibrium sits exactly on the contract curve — the First Welfare Theorem, computed. Equivalently $\mathrm{MRS}^A=2\cdot\tfrac24=1=p_1/p_2$ and $\mathrm{MRS}^B=\tfrac12\cdot\tfrac42=1$.

## Watch out

- You might think Pareto efficiency means *fair*. It does not — it is silent on distribution. "$A$ gets everything, $B$ starves" can be Pareto efficient (no reshuffle helps $B$ without hurting $A$). The 2WT is the theorem that *adds* a distributional choice on top, via transfers.
- You might think the First Welfare Theorem needs convexity or smooth demand. It needs only **local nonsatiation** and price-taking — the proof above never differentiated anything. Convexity is what the *Second* theorem needs (for the separating price to exist), and existence of equilibrium in the first place. Keep the two ingredient-lists straight.
- You might think equilibrium prices are pinned down as numbers. Only the **ratio** is — demand is homogeneous of degree 0 ([1.2](01-02-utility-maximization-marshallian-demand.md)), so scaling all prices leaves choices unchanged. Always normalize (here $p_2=1$) before "solving for $p$."

## One-liner

> In an Edgeworth box, efficiency is tangency of the two indifference curves (equal MRS = the contract curve); competitive trade always lands there (1WT), and any efficient point can be reached by pricing after a lump-sum reshuffle (2WT) — efficiency and distribution, cleanly separated.

## Problems

Use the economy $u^A=(x^A_1)^{1/2}(x^A_2)^{1/2}$, $u^B=(x^B_1)^{1/3}(x^B_2)^{2/3}$, with endowments $\omega^A=(4,0)$ and $\omega^B=(0,6)$ (so $\bar\omega=(4,6)$: $A$ owns all of good 1, $B$ all of good 2).

**P1 (🟢)** Write $\mathrm{MRS}^A$ and $\mathrm{MRS}^B$ as functions of the bundles, then impose $\mathrm{MRS}^A=\mathrm{MRS}^B$ to derive the contract-curve equation $x^A_2=f(x^A_1)$. Check that it runs from $O^A$ to $O^B$.

**P2 (🟡)** Solve for the Walrasian equilibrium: normalize $p_2=1$, write each consumer's Marshallian demand, clear the market for good 1, and report the price ratio and allocation. Then verify the equilibrium lies on your P1 contract curve — the First Welfare Theorem in action.

**P3 (🔴)** Second Welfare Theorem. A planner wants to implement the efficient allocation $x^{*A}=(3,\,3.6)$, $x^{*B}=(1,\,2.4)$. (a) Confirm it is on the contract curve. (b) Find the price ratio $p^*_1/p^*_2$ that supports it. (c) Find a lump-sum redistribution of the endowment that decentralizes it, and verify each consumer's demand, market clearing, and $\mathrm{MRS}^A=p^*_1/p^*_2=\mathrm{MRS}^B$.

<details>
<summary>Solutions</summary>

**P1** With $u^A=(x^A_1)^{1/2}(x^A_2)^{1/2}$ and $u^B=(x^B_1)^{1/3}(x^B_2)^{2/3}$,

$$\mathrm{MRS}^A=\frac{\tfrac12(x^A_1)^{-1/2}(x^A_2)^{1/2}}{\tfrac12(x^A_1)^{1/2}(x^A_2)^{-1/2}}=\frac{x^A_2}{x^A_1},\qquad \mathrm{MRS}^B=\frac{\tfrac13(x^B_1)^{-2/3}(x^B_2)^{2/3}}{\tfrac23(x^B_1)^{1/3}(x^B_2)^{-1/3}}=\frac12\,\frac{x^B_2}{x^B_1}.$$

Substitute feasibility $x^B=(4-x^A_1,\,6-x^A_2)$ and set the two equal:

$$\frac{x^A_2}{x^A_1}=\frac12\,\frac{6-x^A_2}{4-x^A_1}\ \Longrightarrow\ 2x^A_2(4-x^A_1)=x^A_1(6-x^A_2)\ \Longrightarrow\ 8x^A_2-2x^A_1x^A_2=6x^A_1-x^A_1x^A_2.$$

Collect: $8x^A_2-x^A_1x^A_2=6x^A_1\Rightarrow x^A_2(8-x^A_1)=6x^A_1$, so

$$\boxed{x^A_2=\frac{6x^A_1}{8-x^A_1}.}$$

Endpoints: $x^A_1=0\Rightarrow x^A_2=0$ ($O^A$); $x^A_1=4\Rightarrow x^A_2=24/4=6$ ($O^B$, since $\bar\omega=(4,6)$). ✓ *Check:* at the interior point $x^A_1=2$, $x^A_2=12/6=2$, giving $x^B=(2,4)$, and $\mathrm{MRS}^A=2/2=1$, $\mathrm{MRS}^B=\tfrac12\cdot\tfrac42=1$ — equal. ✓

**P2** Normalize $p_2=1$, $p=p_1$. Endowment values: $w^A=p\cdot 4+1\cdot 0=4p$, $w^B=p\cdot 0+1\cdot 6=6$. Marshallian demands (Cobb–Douglas shares $\tfrac12,\tfrac12$ for $A$; $\tfrac13,\tfrac23$ for $B$):

$$x^A_1=\tfrac12\,\frac{4p}{p}=2,\qquad x^B_1=\tfrac13\,\frac{6}{p}=\frac{2}{p}.$$

Clear good 1: $x^A_1+x^B_1=4\Rightarrow 2+\dfrac{2}{p}=4\Rightarrow \dfrac{2}{p}=2\Rightarrow p=1$. So

$$\boxed{\frac{p_1}{p_2}=1,\qquad x^A=(2,2),\quad x^B=(2,4).}$$

(Good 2 clears by Walras' law: $x^A_2=\tfrac12\cdot 4p/1=2$ at $p=1$, $x^B_2=\tfrac23\cdot 6=4$, sum $=6$ ✓.) **On the contract curve?** From P1, $x^A_1=2\Rightarrow x^A_2=\dfrac{6\cdot 2}{8-2}=\dfrac{12}{6}=2$ ✓ — matches $x^A=(2,2)$. The competitive equilibrium is Pareto efficient. *Check:* $\mathrm{MRS}^A=2/2=1=p_1/p_2$ and $\mathrm{MRS}^B=\tfrac12\cdot\tfrac42=1$. ✓

**P3** (a) **Efficient?** Plug $x^{*A}_1=3$ into P1: $\dfrac{6\cdot 3}{8-3}=\dfrac{18}{5}=3.6=x^{*A}_2$ ✓. And $x^{*B}=\bar\omega-x^{*A}=(4-3,\,6-3.6)=(1,2.4)$ ✓ feasible. On the contract curve.

(b) **Supporting price** $=$ the common MRS at $x^*$: $\mathrm{MRS}^A=\dfrac{x^{*A}_2}{x^{*A}_1}=\dfrac{3.6}{3}=1.2$. (Cross-check $\mathrm{MRS}^B=\tfrac12\cdot\dfrac{2.4}{1}=1.2$ ✓.) So

$$\boxed{\frac{p^*_1}{p^*_2}=1.2=\frac{6}{5}}\qquad\text{— take }p^*=(6,5).$$

Note this differs from P2's ratio of $1$: a *different* efficient point requires *different* prices.

(c) **Redistribution.** Each consumer must be able to just afford their target bundle, i.e. wealth $w^{*i}=p^*\cdot x^{*i}$:

$$w^{*A}=6\cdot 3+5\cdot 3.6=18+18=36,\qquad w^{*B}=6\cdot 1+5\cdot 2.4=6+12=18.$$

Any endowment split with these values (at $p^*$) works; the aggregate value is $p^*\cdot\bar\omega=6\cdot4+5\cdot6=54=36+18$ ✓. A concrete lump-sum reshuffle: give $\omega'^A=(1,6)$ (value $6+30=36$) and $\omega'^B=(3,0)$ (value $18$); totals $(1+3,\,6+0)=(4,6)=\bar\omega$ ✓. **Verify demands** at $p^*=(6,5)$:

$$x^A_1=\tfrac12\,\frac{36}{6}=3,\ \ x^A_2=\tfrac12\,\frac{36}{5}=3.6;\qquad x^B_1=\tfrac13\,\frac{18}{6}=1,\ \ x^B_2=\tfrac23\,\frac{18}{5}=2.4.$$

These are exactly $x^{*A},x^{*B}$. **Market clearing:** $(3+1,\,3.6+2.4)=(4,6)=\bar\omega$ ✓. **MRS equalization:** $\mathrm{MRS}^A=3.6/3=1.2$, $\mathrm{MRS}^B=\tfrac12(2.4/1)=1.2$, both $=p^*_1/p^*_2=6/5$ ✓. The planner reached a chosen efficient allocation purely through lump-sum transfers plus competitive pricing — the Second Welfare Theorem, executed.

</details>

## Flashback

**From Lesson 1.2 (Utility maximization and Marshallian demand):** A single consumer has $u(x_1,x_2)=x_1^{1/4}x_2^{3/4}$, faces prices $p_1=1$, $p_2=2$, and has wealth $w=8$. Find the optimal bundle and confirm the tangency $\mathrm{MRS}_{12}=p_1/p_2$ holds there.

<details>
<summary>Solution</summary>

Cobb–Douglas spends fixed shares: $x_1=\alpha\,\dfrac{w}{p_1}=\tfrac14\cdot\dfrac{8}{1}=2$, $\ x_2=(1-\alpha)\dfrac{w}{p_2}=\tfrac34\cdot\dfrac{8}{2}=3$. Budget check: $1\cdot 2+2\cdot 3=8=w$ ✓ (Walras' law). Tangency:

$$\mathrm{MRS}_{12}=\frac{\partial u/\partial x_1}{\partial u/\partial x_2}=\frac{\alpha}{1-\alpha}\,\frac{x_2}{x_1}=\frac{1/4}{3/4}\cdot\frac{3}{2}=\frac13\cdot\frac32=\frac12=\frac{p_1}{p_2}.\ \checkmark$$

The consumer's internal trade-off equals the market's — the same tangency each consumer obeys inside the Edgeworth box, which is why equilibrium forces $\mathrm{MRS}^A=p_1/p_2=\mathrm{MRS}^B$. ✓

</details>

## Connections

- **Backward:** the equilibrium condition $\mathrm{MRS}^i=p_1/p_2$ is nothing but each consumer's [1.2](01-02-utility-maximization-marshallian-demand.md) tangency, imposed simultaneously; the "gains from trade exhausted" story is [4.1](04-01-competition-welfare.md)'s surplus maximization stated for a two-person economy without money on one side. The First Welfare Theorem is the general-equilibrium upgrade of "competitive markets maximize total surplus."
- **Forward:** [5.2](05-02-externalities-public-goods.md) attacks the fine print — externalities make private $\mathrm{MRS}$ diverge from the social one, so the equilibrium leaves the contract curve and 1WT fails; [5.3](05-03-asymmetric-information.md) breaks the *complete-markets* assumption. Every "market failure" in Module 5 is a violated hypothesis of a theorem proved here.
- **Sideways (the recurring bridge):** the **separating-hyperplane / supporting-price** argument behind the Second Welfare Theorem is the same convex-duality skeleton as the Lagrange multiplier of [1.2](01-02-utility-maximization-marshallian-demand.md) and the shadow prices of cost minimization ([3.2](03-02-cost-minimization.md)) — a supporting price *is* a multiplier for a convex feasibility set. Convexity is the load-bearing hypothesis in all three.

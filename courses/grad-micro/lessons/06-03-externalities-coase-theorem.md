# Grad Microeconomics · Lesson 6.3: Externalities and the Coase theorem

> ⏱ ~15 min · Module 6: Market structure, externalities, and welfare · Builds on: [6.2 Oligopoly](06-02-oligopoly.md) · Unlocks: [6.4 Public goods](06-04-public-goods.md)

## Why this matters

The First Welfare Theorem ([4.4](04-04-two-welfare-theorems.md)) promised that competitive markets deliver efficient allocations — but its fine print assumed every cost and benefit is priced. Break that assumption and the theorem breaks with it. A factory that dumps smoke over its neighbors, a vaccinated person who shields the unvaccinated, a beekeeper whose hives pollinate the next farm: in each case one agent's action lands on another's payoff *without passing through a price*. This lesson names that failure (an **externality**), locates the exact wedge it opens between private and social incentives, and studies the two classic repairs — a **Pigouvian tax** that reprices the missing cost, and the **Coase theorem**, which says that with clear property rights and costless bargaining the parties fix it themselves. It is the template for every "market failure" argument you will ever make.

## The idea

Imagine a firm choosing how much to produce. It compares its own marginal benefit (what it can sell the unit for) against its own marginal cost — the labor, materials, energy it pays for. It stops when those balance. Perfectly rational. But if producing that unit also dumps a ton of soot onto the town downwind, there is a *real cost* being borne — just not by the firm. The firm's private ledger is missing an entry. It keeps producing units whose true (social) cost exceeds their worth, because the part of the cost it doesn't pay is invisible to its optimization.

That is the whole disease in one sentence: **the private optimum ignores a cost (or benefit) that is real but unpriced, so it diverges from the social optimum.** For a negative externality like pollution the missing entry is a cost, so the market *overproduces*; for a positive externality like vaccination the missing entry is a benefit to others, so the market *underproduces*. Nobody is being irrational — each agent optimizes correctly against the prices they face. The prices are just incomplete.

Two ways to fix it. **Pigou's way:** have the government levy a tax equal to the harm the firm imposes on others, so the missing cost reappears on the firm's ledger — now private and social costs coincide, and the firm's own optimization lands on the efficient quantity. **Coase's way:** notice that the town and the firm both have money on the table — the town would gladly pay the firm to cut back, or the firm would pay the town for the right to pollute. If they can bargain freely and someone clearly *owns* the right (to clean air, or to pollute), they will strike whatever deal exhausts the gains from trade, which is precisely the efficient outcome — no government needed. Coase's twist: *who* owns the right changes who pays whom, but not the quantity produced.

## The formal version

Consider a good produced in quantity $q$, with (inverse) demand $P(q)$ giving the marginal benefit of the $q$-th unit, and a firm with **private marginal cost** $\mathrm{PMC}(q)$. Each unit produced inflicts an external harm on third parties; call the **marginal external damage** $\mathrm{MED}(q) \ge 0$.

**Social marginal cost.**

$$\mathrm{SMC}(q) = \mathrm{PMC}(q) + \mathrm{MED}(q).$$

**In words:** the true cost to society of one more unit is what the firm pays *plus* what it forces onto everyone else. $\mathrm{MED}$ is the entry missing from the firm's books.

**The two optima.** The market produces where price equals the cost the firm actually faces; efficiency requires price to equal the cost society actually bears:

$$P(q_{\text{priv}}) = \mathrm{PMC}(q_{\text{priv}}), \qquad P(q^*) = \mathrm{SMC}(q^*).$$

**In words:** the competitive firm sets marginal benefit equal to *private* marginal cost, giving $q_{\text{priv}}$; the planner sets marginal benefit equal to *social* marginal cost, giving the efficient $q^*$. Since $\mathrm{SMC} > \mathrm{PMC}$ for a negative externality, the SMC curve sits above PMC and crosses demand sooner: $q_{\text{priv}} > q^*$. The market overproduces.

**Deadweight loss.** Every unit between $q^*$ and $q_{\text{priv}}$ is one whose social cost exceeds its benefit. The waste is the accumulated gap:

$$\mathrm{DWL} = \int_{q^*}^{q_{\text{priv}}} \big(\mathrm{SMC}(q) - P(q)\big)\,dq.$$

**In words:** add up, over the overproduced units, how much each one's true cost overshoots what buyers were willing to pay. This is the same surplus-triangle machinery from [4.1](04-01-partial-equilibrium-surplus.md) and [6.1](06-01-monopoly-price-discrimination.md), now measuring harm rather than monopoly waste.

**Pigouvian tax.** Levy a per-unit tax

$$t = \mathrm{MED}(q^*)$$

— the marginal external damage evaluated **at the efficient quantity**. The firm now faces cost $\mathrm{PMC}(q) + t$, sets $P(q) = \mathrm{PMC}(q) + t$, and — because at $q^*$ this reads $P(q^*) = \mathrm{PMC}(q^*) + \mathrm{MED}(q^*) = \mathrm{SMC}(q^*)$ — produces exactly $q^*$. **In words:** taxing each unit by the harm it does forces the firm to internalize that harm; its private optimum slides onto the social one. (For a positive externality the same logic gives a *subsidy* equal to the marginal external benefit, pushing production *up* to $q^*$.)

**Coase theorem.** *If property rights over the externality are well-defined and the parties can bargain at zero transaction cost, then they reach the efficient outcome $q^*$ regardless of which party holds the rights; the assignment of rights determines the distribution of surplus (who pays whom), not the level of activity.*

**In words:** as long as *someone* owns the right and deals are free to make, money will change hands until every mutually beneficial trade is done — and "all gains from trade exhausted" is exactly the definition of efficiency. Give the firm the right to pollute and the victims buy reductions from it; give the victims the right to clean air and the firm buys permission — either way the activity settles at $q^*$. Only the direction of the checks differs.

## Picture

![Private marginal cost and social marginal cost against demand: the market stops at q_priv where demand meets PMC, but efficiency is at the smaller q* where demand meets SMC; the deadweight-loss triangle sits between them and a Pigouvian tax equal to the marginal damage lifts PMC up to SMC](assets/06-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — the wedge, the loss, and the tax).** A chemical plant faces inverse demand and private marginal cost

$$P(q) = 100 - q, \qquad \mathrm{PMC}(q) = 20 + q,$$

and each unit dumps effluent causing constant marginal external damage $\mathrm{MED} = 12$. So $\mathrm{SMC}(q) = 32 + q$.

*Private quantity* ($P = \mathrm{PMC}$): $100 - q = 20 + q \Rightarrow 80 = 2q \Rightarrow q_{\text{priv}} = 40$, at price $60$.

*Efficient quantity* ($P = \mathrm{SMC}$): $100 - q = 32 + q \Rightarrow 68 = 2q \Rightarrow q^* = 34$, where buyers value the unit at $P(34) = 66$.

*Deadweight loss.* The gap $\mathrm{SMC}(q) - P(q) = (32+q) - (100-q) = 2q - 68$ runs from $0$ at $q=34$ to $2(40)-68 = 12$ at $q=40$ — a triangle of base $40-34 = 6$ and height $12$:

$$\mathrm{DWL} = \tfrac{1}{2}\,(6)(12) = 36.$$

*Pigouvian tax.* $t = \mathrm{MED}(q^*) = 12$. Check: the taxed firm sets $100 - q = (20 + q) + 12 = 32 + q$, giving $q = 34 = q^*$. The tax exactly regenerates the missing 12-per-unit cost and erases the 36 of waste. (Since damage is constant here, $\mathrm{MED}$ is the same everywhere; when it varies with $q$, you *must* use its value at $q^*$ — see Watch out.)

**Example 2 (Coase — same outcome, different pockets).** A factory sits upstream of a fishery. The factory's pollution level $q$ raises its profit but poisons the fish. The factory's **marginal benefit** from the $q$-th unit of pollution is $\mathrm{MB}(q) = 6 - q$ (it pollutes because abating is costly, so pollution is worth a shrinking amount up to $q = 6$). The fishery's **marginal damage** is constant, $\mathrm{MD} = 2$.

*Efficient level.* Pollute while the factory's benefit beats the fishery's harm: $\mathrm{MB} = \mathrm{MD} \Rightarrow 6 - q = 2 \Rightarrow q^* = 4$. Social net benefit $\int_0^q(6-s)\,ds - 2q = 6q - \tfrac{q^2}{2} - 2q$ is maximized at $q = 4$, worth $16 - 8 = 8$.

*Rights to the factory (it may pollute freely).* Left alone it sets $\mathrm{MB} = 0$, i.e. $q = 6$. But units $5$ and $6$ are worth less to the factory ($\mathrm{MB} < 2$) than the $2$ of harm they cause, so the fishery pays the factory to drop them. Any per-unit payment between $\mathrm{MB}$ and $2$ makes both parties richer, so they cut back to $q = 4$ — below that, $\mathrm{MB} > 2$ and the fishery won't pay enough to move the factory. A representative deal: the fishery pays the factory $3$ to go from $6$ to $4$; the factory's payoff rises from $18$ (its benefit $B(6)=18$) to $B(4) + 3 = 16 + 3 = 19$, and the fishery's improves from $-12$ to $-8 - 3 = -11$. Both gain; $q = 4$.

*Rights to the fishery (no pollution without consent).* The default is $q = 0$. Now the factory pays for permission. For each unit up to $4$, its benefit ($\mathrm{MB} > 2$) exceeds the $2$ compensation the fishery demands, so the deal goes through; past $4$ it doesn't. They land at $q = 4$ again. A representative deal: the factory pays $12$ for the right to pollute at level $4$; the factory nets $B(4) - 12 = 16 - 12 = 4$, the fishery nets $-8 + 12 = +4$.

**Same activity level $q^* = 4$ under either assignment** — that is Coase. What changed is the money: with the factory owning the right it ends up at $19$ and the fishery at $-11$; with the fishery owning it, $4$ and $+4$. Rights are a *distribution* lever, not an *efficiency* lever.

*Where this breaks.* Replace the single fishery with ten thousand downstream households and the bargain collapses — each holds out for a bigger share, or free-rides hoping others pay, and no one can strike the deal (transaction costs, the holdout/free-rider problem). Or let the factory privately know its true abatement cost while the households only guess: with asymmetric information the parties haggle inefficiently and may fail to trade at all — the same incomplete-information bargaining failure studied in [`grad-game-theory`](../../grad-game-theory/syllabus.md). Coase is a benchmark that tells you *when* markets self-correct, not a promise that they always do.

## Watch out

- **You might think the tax equals the market-level damage $\mathrm{MED}(q_{\text{priv}})$ — but it's $\mathrm{MED}(q^*)$, the damage at the *efficient* quantity.** When marginal damage rises with output, taxing at the (larger) private-quantity damage overshoots and pushes production below $q^*$. Set the price of harm at the quantity you *want*, not the one you're trying to leave.
- **You might think Coase means "assigning rights doesn't matter" — but it only doesn't matter for *efficiency*.** Who holds the right fully determines who ends up richer. Telling a pollution victim "Coase says the outcome is efficient either way" is cold comfort when the alternative assignment would have transferred thousands of dollars to them.
- **You might think an externality is a story about irrational or greedy agents — but everyone here is optimizing flawlessly.** The failure is in the price system (a real cost is unpriced), not in anyone's head. This is why the cure is a price (a tax) or a market (Coasean bargaining), not an exhortation to behave.
- **You might think positive externalities need fixing too little to bother — but they are *underprovided* and call for a subsidy.** Vaccination, R&D, and education generate benefits their producers can't capture, so the market stops short of $q^*$; the mirror-image Pigouvian instrument is a per-unit *subsidy* equal to the marginal external *benefit*.

## One-liner

> An externality is a real cost or benefit the price system forgot; a Pigouvian tax reprices it at the efficient quantity, and Coasean bargaining reprices it privately — reaching efficiency no matter who owns the right, though the right decides who pays.

## Problems

**P1 (🟢)** A power plant faces inverse demand $P(q) = 90 - 2q$ and private marginal cost $\mathrm{PMC}(q) = 10 + q$; each unit causes constant marginal external damage $\mathrm{MED} = 15$. Find $q_{\text{priv}}$, the efficient $q^*$, the deadweight loss at $q_{\text{priv}}$, and the Pigouvian tax that restores efficiency.

**P2 (🟡)** A beekeeper's hives pollinate a neighboring orchard: each colony the beekeeper keeps confers a marginal external *benefit* $\mathrm{MEB} = 8$ on the orchard. The beekeeper's private marginal benefit from colonies is $\mathrm{PMB}(q) = 40 - 4q$ and marginal cost is $\mathrm{MC}(q) = 10 + 2q$. Find the beekeeper's private number of colonies and the socially efficient number, and state the per-colony subsidy that closes the gap. (Watch the sign: a positive externality means the market does what?)

**P3 (🔴, optional)** Two roommates share a room. Ann wants to play loud music; the noise costs Ben. Ann's marginal benefit from hours of music is $\mathrm{MB}(h) = 10 - h$; Ben's marginal cost is $\mathrm{MC}(h) = 2h$.
(a) Find the efficient number of hours $h^*$.
(b) Suppose the lease gives Ben the right to silence. Show that they bargain to $h^*$, and give a total payment from Ann to Ben that leaves both at least as well off as at $h = 0$.
(c) Now suppose instead Ann has the right to play as much as she likes. What is $h$ if they *don't* bargain, and to what $h$ do they bargain? Who pays whom? Confirm the efficient level is unchanged.

<details>
<summary>Solutions</summary>

**P1** *Private:* $P = \mathrm{PMC}$: $90 - 2q = 10 + q \Rightarrow 80 = 3q \Rightarrow q_{\text{priv}} = \tfrac{80}{3} \approx 26.67$.
*Efficient:* $\mathrm{SMC}(q) = \mathrm{PMC}(q) + 15 = 25 + q$; set $P = \mathrm{SMC}$: $90 - 2q = 25 + q \Rightarrow 65 = 3q \Rightarrow q^* = \tfrac{65}{3} \approx 21.67$.
*DWL:* the gap $\mathrm{SMC}(q) - P(q) = (25 + q) - (90 - 2q) = 3q - 65$ runs from $0$ at $q^* = \tfrac{65}{3}$ to $3\cdot\tfrac{80}{3} - 65 = 80 - 65 = 15$ at $q_{\text{priv}}$. Base $= \tfrac{80}{3} - \tfrac{65}{3} = 5$, height $= 15$:
$$\mathrm{DWL} = \tfrac{1}{2}(5)(15) = 37.5.$$
*Tax:* $t = \mathrm{MED}(q^*) = 15$ (damage is constant). Check: taxed firm sets $90 - 2q = (10 + q) + 15 = 25 + q$, giving $q = \tfrac{65}{3} = q^*$. ✓

**P2** A positive externality means the market **underprovides** — the beekeeper ignores the orchard's gain, so we expect too few colonies.
*Private:* the beekeeper sets private marginal benefit equal to marginal cost, $\mathrm{PMB} = \mathrm{MC}$: $40 - 4q = 10 + 2q \Rightarrow 30 = 6q \Rightarrow q_{\text{priv}} = 5$.
*Efficient:* social marginal benefit is $\mathrm{SMB}(q) = \mathrm{PMB}(q) + \mathrm{MEB} = 48 - 4q$; set $\mathrm{SMB} = \mathrm{MC}$: $48 - 4q = 10 + 2q \Rightarrow 38 = 6q \Rightarrow q^* = \tfrac{38}{6} \approx 6.33 > 5$. ✓ (more colonies, as predicted.)
*Subsidy:* pay the beekeeper $s = \mathrm{MEB} = 8$ per colony. Then she maximizes with benefit $\mathrm{PMB} + 8 = 48 - 4q$ against $\mathrm{MC}$, i.e. $48 - 4q = 10 + 2q$, giving $q = \tfrac{38}{6} = q^*$. ✓

**P3** (a) Efficient hours set Ann's marginal benefit equal to Ben's marginal cost: $10 - h = 2h \Rightarrow 10 = 3h \Rightarrow h^* = \tfrac{10}{3} \approx 3.33$.

(b) *Ben owns silence,* so default is $h = 0$. Ann pays Ben for hours. For each hour up to $h^*$, Ann's benefit ($\mathrm{MB} = 10 - h$) exceeds Ben's cost ($\mathrm{MC} = 2h$) — check at $h < \tfrac{10}{3}$: $10 - h > 2h$ — so both gain from allowing it; past $h^*$ the cost exceeds the benefit and they stop. They bargain to $h^* = \tfrac{10}{3}$.
Ann's total benefit over $[0, h^*]$: $\int_0^{10/3}(10 - h)\,dh = 10\cdot\tfrac{10}{3} - \tfrac{1}{2}\left(\tfrac{10}{3}\right)^2 = \tfrac{100}{3} - \tfrac{50}{9} = \tfrac{300 - 50}{9} = \tfrac{250}{9} \approx 27.8$.
Ben's total cost: $\int_0^{10/3} 2h\,dh = \left(\tfrac{10}{3}\right)^2 = \tfrac{100}{9} \approx 11.1$.
Any payment $T$ from Ann to Ben with $\tfrac{100}{9} \le T \le \tfrac{250}{9}$ leaves both weakly better than at $h = 0$ (where both had payoff $0$). For instance $T = \tfrac{175}{9} \approx 19.4$ (splitting the surplus of $\tfrac{250}{9} - \tfrac{100}{9} = \tfrac{150}{9}$ evenly): Ann nets $\tfrac{250}{9} - \tfrac{175}{9} = \tfrac{75}{9} > 0$, Ben nets $\tfrac{175}{9} - \tfrac{100}{9} = \tfrac{75}{9} > 0$. ✓

(c) *Ann owns the right to play.* With no bargaining she plays until her *own* marginal benefit hits zero: $10 - h = 0 \Rightarrow h = 10$. But for hours above $h^* = \tfrac{10}{3}$, Ben's marginal cost ($2h$) exceeds Ann's marginal benefit ($10 - h$), so Ben pays Ann to cut back; every such hour removed is worth more to Ben than to Ann. They bargain down to $h^* = \tfrac{10}{3}$ — the same efficient level. Now **Ben pays Ann** (the reverse of (b)). The efficient number of hours is unchanged; only the direction of payment flipped, exactly as Coase predicts.

</details>

## Flashback

**From Lesson 4.1 (Partial equilibrium and surplus):** A competitive market has inverse demand $P = 50 - q$ and inverse supply (marginal cost) $P = 10 + q$. The government imposes a per-unit tax $\tau = 8$ collected from sellers. Find the pre-tax equilibrium, the post-tax quantity and the prices paid by buyers and received by sellers, and the deadweight loss the tax creates.

<details>
<summary>Solution</summary>

*Pre-tax:* $50 - q = 10 + q \Rightarrow 40 = 2q \Rightarrow q_0 = 20$, price $p_0 = 30$.

*Post-tax:* sellers now need to receive their marginal cost, so the price buyers pay must cover $\mathrm{MC} + \tau$: set demand equal to supply-plus-tax, $50 - q = (10 + q) + 8 = 18 + q \Rightarrow 32 = 2q \Rightarrow q_\tau = 16$. Buyers pay $P^b = 50 - 16 = 34$; sellers receive $P^s = 34 - 8 = 26$. (Check: $P^b - P^s = 8 = \tau$. ✓)

*Deadweight loss:* the tax kills the $q_0 - q_\tau = 4$ units whose benefit exceeded their cost. The wedge on those units is $\tau = 8$, tapering to zero at $q_0$:
$$\mathrm{DWL} = \tfrac{1}{2}\,\tau\,(q_0 - q_\tau) = \tfrac{1}{2}(8)(4) = 16.$$
Note the mirror image of this lesson: here a tax on an *un*-distorted market *creates* a wedge and DWL of 16; a Pigouvian tax on an *externality*-distorted market *removes* one. Same triangle, opposite sign — a tax is efficient exactly when it prices a genuine external cost.

</details>

## Connections

- **Backward:** this is the headline exception to the First Welfare Theorem ([4.4](04-04-two-welfare-theorems.md)) — the competitive allocation is efficient *only* when all costs and benefits are priced, and an externality is precisely an unpriced one. The DWL triangle and surplus accounting are the [4.1](04-01-partial-equilibrium-surplus.md) machinery reused, the same triangle you drew for monopoly waste in [6.1](06-01-monopoly-price-discrimination.md).
- **Forward:** [6.4](06-04-public-goods.md) is the externality pushed to its extreme — a public good is non-rival and non-excludable, so one person's provision spills *entirely* onto everyone, and the free-riding that broke Coase with many parties becomes the central problem (the Samuelson condition is the SMC = SMB rule with the benefits summed over all consumers).
- **Sideways (game theory):** the Coasean bargain is a cooperative-surplus split, and its failure modes — holdout with many parties, and inefficiency under asymmetric information — are the bargaining problems of [`grad-game-theory`](../../grad-game-theory/syllabus.md); "the parties can't reach the efficient deal when values are private" is the same result that dooms first-best mechanism design.
- **Sideways (environmental economics):** Pigouvian taxes are carbon taxes, and Coasean rights are cap-and-trade permits — two live policy instruments that are just the two repairs in this lesson wearing regulatory clothing. The intuition-level version of all of it is in [`micro-refresher`](../../micro-refresher/syllabus.md).

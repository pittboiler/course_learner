# Grad Game Theory · Lesson 5.2: The revelation principle and incentive compatibility

> ⏱ ~15 min · Module 5: Mechanism design · Builds on: [5.1 Social choice and impossibility](05-01-social-choice-impossibility.md) · Unlocks: [5.3 Dominant-strategy mechanisms: VCG](05-03-dominant-strategy-mechanisms-vcg.md)

## Why this matters

Mechanism design is game theory run backwards. In ordinary game theory the rules are given and you solve for behavior; here you get to *choose the rules* — the auction format, the voting procedure, the tax schedule — so that self-interested equilibrium play delivers an outcome you want. The trouble is the design space is monstrous: a mechanism can ask for any messages at all (bids, rankings, sealed envelopes, cryptographic commitments), and for each you must re-solve the induced game. The **revelation principle** cuts this Gordian knot in one stroke: whatever outcome *any* mechanism can achieve in equilibrium, a dead-simple "just tell me your type, honestly" mechanism achieves too. So you may study only truthful direct mechanisms — a class carved out by clean algebraic constraints — and lose nothing. Every major result downstream (VCG, Myerson's optimal auction, the Gibbard–Satterthwaite wall) is proved inside this simplification.

## The idea

You privately know your *type* $\theta_i$ — your value for the object, your cost, your preferences. A mechanism is a game the designer builds; in equilibrium you don't blurt out $\theta_i$, you play some clever strategy $\sigma_i^*(\theta_i)$: you shade your bid, you vote strategically, you posture. Solving that game is the hard part.

Here is the trick. Imagine hiring a perfectly loyal concierge who knows the mechanism cold. You tell the concierge your true type, and it executes your equilibrium strategy $\sigma_i^*(\theta_i)$ for you — it does the optimal shading and posturing on your behalf. Now bolt that concierge *inside* the mechanism. The new machine says: "Report your type; I'll play the old equilibrium for you." Would you ever lie to your own concierge? No — lying makes it act as if you were a different type, i.e. play $\sigma_i^*(\theta_i')$, which by definition of "equilibrium" was worse for the true you than $\sigma_i^*(\theta_i)$. So **honesty becomes optimal**, and because the concierge reproduces exactly what you'd have done anyway, the outcome is unchanged.

That is the whole revelation principle: fold the equilibrium strategies into the mechanism, and strategic misreporting collapses into honest reporting. Any implementable outcome is implementable truthfully.

## The formal version

**Setup.** Agents $i = 1,\dots,n$. Agent $i$ has a private **type** $\theta_i \in \Theta_i$; write $\theta = (\theta_i, \theta_{-i}) \in \Theta = \prod_i \Theta_i$, splitting $i$'s type from the others' $\theta_{-i}$. Outcomes live in a set $X$, and agent $i$'s utility is $u_i(x, \theta_i)$ over outcomes $x \in X$. A **social choice function** $f : \Theta \to X$ is the outcome the designer wishes to see at each type profile.

**Mechanism.** A mechanism is $\Gamma = (M_1, \dots, M_n, g)$: a **message space** $M_i$ for each agent and an **outcome function** $g : M_1 \times \cdots \times M_n \to X$. Agents send messages $m_i$; the mechanism returns $g(m)$. A **strategy** is a map $s_i : \Theta_i \to M_i$ (what you send as a function of what you know).

*In words:* the designer picks what agents are allowed to say and how those sayings turn into an outcome; agents pick what to say given their type.

**Direct mechanism.** The special case $M_i = \Theta_i$: agents report a type, and $g = f$. Here the honest strategy is $s_i(\theta_i) = \theta_i$.

**Two equilibrium notions.** Fix a mechanism and a strategy profile $s^* = (s_1^*, \dots, s_n^*)$.

- $s^*$ is a **dominant-strategy equilibrium** if each $s_i^*(\theta_i)$ is a best message *no matter what others send*: for all $\theta_i$, all rival messages $m_{-i}$, and all deviations $m_i'$,
$$u_i\big(g(s_i^*(\theta_i), m_{-i}),\, \theta_i\big) \;\ge\; u_i\big(g(m_i', m_{-i}),\, \theta_i\big).$$
- $s^*$ is a **Bayes–Nash equilibrium (BNE)** if, given a common prior on $\theta$ and others playing $s_{-i}^*$, each $s_i^*(\theta_i)$ is a best message *in expectation over rivals' types*: for all $\theta_i$ and deviations $m_i'$,
$$\mathbb{E}_{\theta_{-i}}\Big[u_i\big(g(s_i^*(\theta_i), s_{-i}^*(\theta_{-i})),\, \theta_i\big)\Big] \;\ge\; \mathbb{E}_{\theta_{-i}}\Big[u_i\big(g(m_i', s_{-i}^*(\theta_{-i})),\, \theta_i\big)\Big].$$

*In words:* dominant-strategy means optimal against every conceivable rival play; Bayes–Nash means optimal only on average against rivals who are themselves playing the equilibrium. Dominant is the stronger, belief-free notion.

**Implementation.** $f$ is **implementable in dominant strategies** (resp. **in BNE**) if there exists a mechanism $\Gamma$ with a dominant-strategy (resp. Bayes–Nash) equilibrium $s^*$ such that $g(s^*(\theta)) = f(\theta)$ for all $\theta$.

**Incentive compatibility (the truthful case).** A direct mechanism $f$ is:

- **Dominant-strategy incentive compatible (DSIC / strategy-proof)** if truth-telling is a dominant strategy — for all $i$, $\theta_i$, misreport $\theta_i'$, and $\theta_{-i}$,
$$u_i\big(f(\theta_i, \theta_{-i}),\, \theta_i\big) \;\ge\; u_i\big(f(\theta_i', \theta_{-i}),\, \theta_i\big).$$
- **Bayesian incentive compatible (BIC)** if truth-telling is a Bayes–Nash equilibrium — for all $i$, $\theta_i$, $\theta_i'$,
$$\mathbb{E}_{\theta_{-i}}\big[u_i(f(\theta_i, \theta_{-i}), \theta_i)\big] \;\ge\; \mathbb{E}_{\theta_{-i}}\big[u_i(f(\theta_i', \theta_{-i}), \theta_i)\big].$$

*In words:* IC means you never regret reporting your true type — DSIC no matter what others report, BIC on average when others report honestly too.

**Revelation Principle.** *If $f$ is implementable in dominant strategies, then the direct mechanism $f$ is DSIC. If $f$ is implementable in Bayes–Nash equilibrium, then the direct mechanism $f$ is BIC.*

*In words:* anything achievable by some elaborate mechanism is achievable by a truthful direct one. Truthful direct mechanisms are without loss of generality.

**Proof (dominant-strategy version).** Suppose $\Gamma = (M, g)$ has a dominant-strategy equilibrium $s^*$ with $g(s^*(\theta)) = f(\theta)$. The direct mechanism is exactly the concierge: on report profile $\hat\theta$ it outputs $g(s^*(\hat\theta)) = f(\hat\theta)$. Fix $i$, true type $\theta_i$, misreport $\theta_i'$, and any rival reports $\theta_{-i}$. Because $s_i^*(\theta_i)$ is a *dominant* message in $\Gamma$, it beats the message $s_i^*(\theta_i')$ against the particular rival messages $m_{-i} = s_{-i}^*(\theta_{-i})$:
$$u_i\big(g(s_i^*(\theta_i), s_{-i}^*(\theta_{-i})), \theta_i\big) \ge u_i\big(g(s_i^*(\theta_i'), s_{-i}^*(\theta_{-i})), \theta_i\big).$$
The left side is $u_i(f(\theta_i,\theta_{-i}),\theta_i)$ and the right is $u_i(f(\theta_i',\theta_{-i}),\theta_i)$ — exactly the DSIC inequality. The Bayes–Nash version is identical after taking $\mathbb{E}_{\theta_{-i}}$ and using that rivals report truthfully (so they play $s_{-i}^*(\theta_{-i})$). $\blacksquare$

**Individual rationality (participation).** IC makes honesty optimal *for those who play*; you still need agents to show up. Let $\bar u_i(\theta_i)$ be $i$'s outside-option utility. The direct mechanism $f$ is:

- **Ex post IR** if $u_i(f(\theta), \theta_i) \ge \bar u_i(\theta_i)$ for all $i$ and all $\theta$ (no regret after everything is revealed);
- **Interim IR** if $\mathbb{E}_{\theta_{-i}}[u_i(f(\theta), \theta_i)] \ge \bar u_i(\theta_i)$ for all $i,\theta_i$ (no regret at the moment you know only your own type).

*In words:* IC keeps you honest; IR keeps you in the room. A designer's feasible set is the social choice functions satisfying IC **and** IR — and thanks to the revelation principle, that is a search over functions $f$ obeying algebraic inequalities, not a search over all conceivable games.

## Picture

![Two parallel paths from types to outcome: the top path runs types through agents' equilibrium strategies and an arbitrary mechanism; the bottom path runs types straight through a truthful direct mechanism that folds the strategies in; both yield the identical outcome f of theta](assets/05-02-fig1.svg)

The top path is the messy real world: types in, agents strategize, a complicated mechanism spits out an outcome. The bottom path folds the strategizing into the box — agents just report their types honestly — and lands on the *same* $f(\theta)$. The revelation principle says the bottom path always exists whenever the top one does.

## Worked examples

**Example 1 (fold a first-price auction into a truthful direct mechanism).** One object, $n$ bidders, values $v_i$ drawn independently and uniformly on $[0,1]$; type $\theta_i = v_i$. The first-price sealed-bid auction (highest bid wins, winner pays own bid) has a well-known symmetric Bayes–Nash equilibrium in which each bidder shades to
$$b(v) = \tfrac{n-1}{n}\, v.$$
Nobody bids truthfully here — the mechanism is not direct. Build its concierge. The **direct mechanism**: each bidder reports $r_i$; the box computes bids $\tfrac{n-1}{n} r_i$, awards the object to the highest reporter, and charges the winner $\tfrac{n-1}{n} r_i$.

Is honest reporting a BNE? Suppose rivals report truthfully and you have value $v$ but report $r$. Let $y = \max_{j\ne i} v_j$, whose CDF is $F(y) = y^{\,n-1}$ (the max of $n-1$ uniforms). Since $b$ is increasing, you win exactly when $r > y$, and then you pay $\tfrac{n-1}{n} r$. Your expected utility is
$$U(r; v) = \Pr(y < r)\Big(v - \tfrac{n-1}{n} r\Big) = r^{\,n-1}\Big(v - \tfrac{n-1}{n} r\Big).$$
Differentiate:
$$\frac{\partial U}{\partial r} = (n-1)r^{\,n-2}\Big(v - \tfrac{n-1}{n} r\Big) + r^{\,n-1}\Big(-\tfrac{n-1}{n}\Big) = (n-1)r^{\,n-2}\big(v - r\big).$$
This is positive for $r < v$ and negative for $r > v$, so $U$ is maximized at $r = v$: **reporting your true value is optimal.** Truth-telling is a Bayes–Nash equilibrium of the direct mechanism, and by construction the allocation (highest value wins) and the expected payments are identical to the original first-price auction. We converted a non-truthful mechanism into an outcome-equivalent BIC one — exactly as the theorem promises.

**Example 2 (second-price auction is DSIC and IR — verified from scratch).** Same object, but now a **direct** mechanism that is truthful on the nose: each bidder reports $r_i$, the highest reporter wins and pays the *second-highest* report (the Vickrey auction). Claim: honest reporting is a *dominant* strategy, so this $f$ is DSIC.

Fix bidder $i$ with value $v$; let $p = \max_{j \ne i} r_j$ be the best rival report — *whatever it is, and whatever strategies produced it.* Reporting truthfully means "win iff $v > p$, and then pay $p$." Compare against any report $r$:

- If $v \ge p$: truthful wins and nets $v - p \ge 0$. Any $r$ that also wins pays the same $p$ (price depends on rivals, not on you) → same $v-p$. Any $r$ that loses nets $0 \le v - p$. Truth is at least as good.
- If $v < p$: truthful loses and nets $0$. Any $r$ that wins must pay $p > v$, netting $v - p < 0$. Truth is at least as good.

In every case truth weakly beats every alternative, *regardless of $p$* — that is dominance, so the mechanism is **DSIC**. Individual rationality is immediate with a zero outside option: the winner pays at most its own value ($p \le v$), so surplus $v - p \ge 0$; losers get $0$. Hence it is **ex post IR**. This is the seed of VCG in [5.3](05-03-dominant-strategy-mechanisms-vcg.md): make truth-telling dominant by charging each agent the harm it imposes on others — here, the price it forces the runner-up out at.

## Watch out

- **The principle is about analysis, not description.** It does *not* claim real institutions are direct or that people report honestly — first-price auctions exist and everyone shades. It says: for any outcome you could reach with a messy mechanism, an outcome-equivalent truthful one *exists on paper*, so you may restrict attention to those when hunting for what's achievable. Don't read "truthful WLOG" as "the world is truthful."
- **DSIC is strictly stronger than BIC.** Dominant-strategy truthfulness needs no beliefs about others (Example 2 held for *any* rival reports); Bayesian truthfulness leans on the prior and on rivals also being honest (Example 1's optimum assumed truthful rivals). The second-price auction is DSIC; the folded first-price auction is only BIC. Every DSIC mechanism is BIC, never the reverse.
- **IC alone is not enough — you also need IR.** A mechanism can be perfectly truthful and still be one nobody would enter (e.g. truthful but with a crushing entry fee). Feasibility is IC *and* IR; dropping participation quietly cheats.
- **The principle simplifies implementability, it does not create it.** It says "*if* $f$ is implementable, *then* it is truthfully implementable." It never asserts your desired $f$ is achievable. Whether an IC (+IR) mechanism for $f$ exists is the real question — and sometimes the answer is no (Gibbard–Satterthwaite in [5.1](05-01-social-choice-impossibility.md); revenue limits in Myerson's theory, [5.4](05-04-bayesian-mechanism-design-optimal-auction.md)).
- **Truthful is only *an* equilibrium — weak vs. full implementation.** The revelation principle makes honesty *one* equilibrium of the direct mechanism (weak implementation); the same mechanism can harbor *other*, non-truthful equilibria with different outcomes (Problem 3). Guaranteeing *every* equilibrium yields $f$ (full implementation) is a stronger demand the principle does not meet — which is one reason dominance, where honesty beats everything, is prized.

## One-liner

> Any outcome some mechanism can reach in equilibrium, a "just report your type honestly" mechanism reaches too — so study incentive-compatible direct mechanisms and lose nothing.

## Problems

**P1 (🟢)** A tempting "direct first-price" mechanism for one object: each bidder reports $r_i$, the highest reporter wins and pays *its own report* $r_i$. Show this is **not** DSIC (indeed not even truthfully a BNE) by exhibiting a profitable misreport for a bidder with value $v$ who would win. What does the revelation principle correctly predict must be adjusted to make a first-price-style outcome truthful? (Recall Example 1.)

**P2 (🟡)** A single agent has value $\theta \in \{1, 3\}$ for a good, each type equally likely. A direct mechanism assigns a probability $q(\theta)$ of receiving the good and a payment $t(\theta)$; utility is $u = \theta\, q - t$. Consider $q(1) = 0,\ t(1) = 0,\ q(3) = 1,\ t(3) = t$. Find all payments $t$ making the mechanism **IC** (truthful) and **IR** (outside option $0$). Which single constraint pins the *lowest* admissible $t$, and which economic force does it represent?

**P3 (🔴, optional)** In the *second-price* direct mechanism of Example 2 (DSIC), show that truth-telling is not the only Bayes–Nash equilibrium: exhibit an asymmetric equilibrium in which the allocation is wrong (a fixed bidder always wins irrespective of values). Explain why this does not contradict DSIC, and connect it to the "weak vs. full implementation" caveat.

<details>
<summary>Solutions</summary>

**P1** Suppose rivals report truthfully and bidder $i$ has value $v$ and is the highest, i.e. $v > y := \max_{j\ne i} r_j$. Reporting truthfully ($r_i = v$) wins and pays $v$, netting $v - v = 0$. Now report $r_i = y + \varepsilon$ for small $\varepsilon > 0$ with $y + \varepsilon < v$: still the highest reporter, so $i$ still wins, but now pays only $y + \varepsilon$, netting $v - (y+\varepsilon) > 0$. A strictly profitable underreport exists, so truth is not optimal — the mechanism is not IC (not DSIC, and not even truthfully a BNE). The revelation principle predicts the fix: to make a *first-price allocation* truthful you cannot charge the report itself; you must **decouple the payment from the report** so that shading buys nothing. Example 1 does exactly this — it charges $\tfrac{n-1}{n} r$ while the equilibrium bid function absorbs the shading — turning the payment into one the agent can't game by lying.

**P2** With a single agent the "others" are absent, so IC is just: each type prefers its own bundle to the other's.

*Type 3 truthful vs. mimicking type 1:* truth gives $3\cdot 1 - t = 3 - t$; mimicking gives $3\cdot 0 - 0 = 0$. IC requires $3 - t \ge 0$, i.e. $t \le 3$.

*Type 1 truthful vs. mimicking type 3:* truth gives $1\cdot 0 - 0 = 0$; mimicking gives $1\cdot 1 - t = 1 - t$. IC requires $0 \ge 1 - t$, i.e. $t \ge 1$.

*IR (outside option 0):* type 3 gets $3 - t \ge 0 \Rightarrow t \le 3$; type 1 gets $0 \ge 0$, always fine.

Combining: $t \in [1, 3]$. The lower bound $t \ge 1$ comes from the **type-1 IC constraint** — the low type must not be tempted to claim to be high and grab the good. This is the *downward information rent* force: to stop the high-value type's imitators you would love to charge more, but stopping the low type from posing as high caps how the transfers can be set. (The upper bound $t \le 3$ is the high type's IC and IR agreeing — don't charge more than the good is worth to them.)

**P3** Consider the report profile: bidder $1$ reports $r_1 = 1$ (the top of the value range, above every possible rival value), and every other bidder $j \ne 1$ reports $r_j = 0$. Check it is a Bayes–Nash equilibrium of the direct mechanism.

- *Bidder 1:* wins for sure and pays the second-highest report $= 0$, netting $v_1 \ge 0$. Deviating to any other report either still wins at price $0$ (same payoff) or loses (payoff $0 \le v_1$). No profitable deviation.
- *Bidder $j \ne 1$:* currently loses, nets $0$. To win, $j$ must report above $r_1 = 1$, then pay the second-highest report $= r_1 = 1 > v_j$, netting $v_j - 1 < 0$. Staying at $0$ is optimal.

So this is a Nash equilibrium, and its allocation is *wrong*: bidder 1 always wins, even when some rival values the object more. This does **not** contradict DSIC: DSIC says truth is a *dominant* strategy, i.e. a best response to *everything* — but a best response need not be a *strict* one, and other players can coordinate on a different mutual best response. Here bidders $j$ are playing weakly dominated reports (reporting $0$ regardless of value), which happen to also be best responses given bidder 1's aggressive report. The revelation principle only guarantees truth is *one* equilibrium (weak implementation); it does not rule out these others. **Full implementation** — every equilibrium yielding $f$ — is a strictly stronger requirement, and its absence here is exactly why we value dominance: truth-telling is never *worse*, even if the mechanism admits worse-behaved equilibria too.

</details>

## Flashback

**From Lesson 4.2 (First-price auctions and Bayes–Nash equilibrium):** Two bidders, values drawn independently and uniformly on $[0,1]$, first-price sealed-bid auction. Guess a symmetric increasing equilibrium bid function $b(v)$ and find it. (This is the $n = 2$ case whose concierge we folded in Example 1.)

<details>
<summary>Solution</summary>

Suppose the rival bids $b(\cdot)$, increasing, and you have value $v$ but bid as if your value were $z$, i.e. bid $b(z)$. You win when the rival's value is below $z$ (probability $z$, uniform), and then pay $b(z)$:
$$U(z; v) = z\,(v - b(z)).$$
First-order condition at the truthful optimum $z = v$ (symmetric equilibrium requires bidding your own value's amount is best):
$$\frac{\partial U}{\partial z} = (v - b(z)) + z(-b'(z)) = 0 \quad\text{at } z = v \;\Longrightarrow\; v - b(v) - v\,b'(v) = 0.$$
This is the linear ODE $v\,b'(v) + b(v) = v$, i.e. $\frac{d}{dv}\big(v\,b(v)\big) = v$. Integrate: $v\,b(v) = \tfrac{1}{2}v^2 + C$; the boundary condition $b(0) = 0$ forces $C = 0$, so
$$b(v) = \tfrac{1}{2} v.$$
Each bidder shades to half their value — matching $\tfrac{n-1}{n}v$ at $n = 2$. Expected payment and the "highest value wins" allocation are precisely what Example 1's direct mechanism reproduces truthfully.

</details>

## Connections

- **Backward:** [5.1](05-01-social-choice-impossibility.md)'s Gibbard–Satterthwaite theorem is *why* IC matters — with three-plus alternatives, the only strategy-proof, onto, non-dictatorial social choice rule doesn't exist, so manipulation is unavoidable and the design problem is to live within IC constraints, not to wish them away. The revelation principle is what lets GS be stated as "no non-trivial DSIC rule" rather than "no non-manipulable mechanism of any kind."
- **Backward:** the equilibrium notions folded in here — Bayes–Nash play and shaded auction bids — are from Module 4 (Bayesian games and auctions, e.g. [4.2](04-02-auctions-equilibrium-bidding.md)); the revelation principle needs a pre-existing equilibrium to collapse.
- **Forward:** [5.3](05-03-dominant-strategy-mechanisms-vcg.md) builds DSIC mechanisms directly — VCG makes truth dominant by internalizing externalities, generalizing Example 2's second-price rule. [5.4](05-04-bayesian-mechanism-design-optimal-auction.md) works entirely inside BIC: Myerson characterizes IC by a monotone allocation plus an envelope/integral payment formula, then optimizes revenue over it — the revelation principle is what makes "optimize over all auctions" tractable as "optimize over BIC direct mechanisms."
- **Sideways (grad-micro):** this is the same revelation principle and incentive-compatibility machinery, told in market language — screening, monopoly price discrimination, and optimal taxation are IC+IR programs over direct mechanisms. See [grad-micro](../../grad-micro/syllabus.md); Problem 2's single-agent screen is the atom of the monopolist's second-degree price-discrimination problem there.
- **Sideways (foundations):** the private-signal correlating device of [2.5](02-05-correlated-equilibrium.md) was a stripped-down mechanism — a distribution over outcomes with obedience (incentive) constraints; a designer choosing that device to serve an objective is mechanism design, and the game-theory vocabulary of types and Bayes–Nash play traces back to the [game-theory-refresher](../../game-theory-refresher/syllabus.md).
- [syllabus](../syllabus.md)

# Game Theory · Lesson 4.2: Mechanism design and social choice

> ⏱ ~15 min · Module 4: Bargaining and mechanism design · Builds on: [3.2 Auctions](03-02-auctions.md), [3.1 Bayesian games](03-01-bayesian-games.md) · Unlocks: grad game theory, mechanism design (course complete)

## Why this matters

Every lesson so far handed you a game and asked *how will it be played?* Mechanism design runs the film backward: **fix the outcome you want, then engineer the game whose equilibrium produces it** — knowing the players hold private information and will lie whenever lying pays. This is the branch of game theory that actually builds things: auction houses that sell spectrum efficiently, matching markets for doctors and kidneys, voting rules, tax schemes. It is also where you meet the walls: two impossibility theorems (Arrow, Gibbard–Satterthwaite) that say some perfectly reasonable design goals are simply unachievable, and one beautiful positive result (VCG) that says with money on the table you can buy back the truth. This capstone ties the whole course — dominance, Bayes–Nash, auctions — into one design problem.

## The idea

A **mechanism** is a set of rules: each agent sends a message, and a fixed outcome rule turns the messages into a decision (who gets the good, whether the bridge gets built, who pays what). The designer picks the rules; the agents, holding private *types*, play the resulting game. The designer's nightmare is that agents misreport — the second-price auction from [3.2](03-02-auctions.md) was the miracle case where honesty was a *dominant* strategy, and the whole subject is the search for more miracles like it.

Three ideas organize everything.

**Incentive compatibility.** A mechanism is incentive-compatible if truth-telling is an equilibrium — nobody gains by lying. Two strengths: **dominant-strategy** (DSIC — truth is optimal *whatever* others report, like the second-price auction) and the weaker **Bayesian** (BIC — truth is optimal *on average*, given others report truthfully).

**The revelation principle.** Here is the move that makes the field tractable. Suppose *some* clever mechanism, played at equilibrium, produces the outcomes you want. Then there is an equivalent **direct** mechanism — one where agents just report their type — in which *honest reporting* is an equilibrium and the outcomes are identical. Why: whatever strategic translation "type → equilibrium message" the agents were doing, fold that translation into the rules themselves. The new machine asks for your type and then plays your old equilibrium strategy on your behalf. Lying about your type to this machine would be lying to your own best strategy — pointless. So: **anything implementable is implementable truthfully.** You never have to search over baroque message games; you only study truthful direct mechanisms. That is the picture below.

**The externality trick (VCG).** How do you *make* honesty optimal in general? Charge each agent the harm their presence imposes on everyone else — the **externality**. Then each agent's private objective becomes aligned with *total* welfare, so maximizing their own payoff means telling the truth that lets the designer maximize the whole. The second-price auction is exactly this in the one-good case: the winner pays the runner-up value, which is precisely the value the rest of society loses by not getting the good.

## The formal version

**Environment.** Agents $N=\{1,\dots,n\}$. A set of possible decisions (alternatives) $A$. Agent $i$ privately knows a **type** $\theta_i$ that fixes a valuation $v_i(a,\theta_i)$ over decisions; we write $v_i(a)$ when the type is understood. Utility is **quasilinear**: if decision $a$ is taken and $i$ pays a transfer $t_i$, then

$$u_i = v_i(a) - t_i.$$

> In words: everyone values outcomes in the same currency as money, and payments subtract one-for-one. This is the domain where money can be used to bribe out the truth.

**Mechanism.** Message spaces $M_1,\dots,M_n$ and an outcome rule $(a,t): M_1\times\cdots\times M_n \to A\times\mathbb{R}^n$. A **direct** mechanism sets $M_i =$ the type space, so a message is a reported type $\hat\theta_i$.

**Incentive compatibility (DSIC).** A direct mechanism is dominant-strategy incentive-compatible if for every agent $i$, every true type $\theta_i$, every lie $\hat\theta_i$, and every report profile $\hat\theta_{-i}$ of the others,

$$v_i\big(a(\theta_i,\hat\theta_{-i})\big) - t_i(\theta_i,\hat\theta_{-i}) \;\ge\; v_i\big(a(\hat\theta_i,\hat\theta_{-i})\big) - t_i(\hat\theta_i,\hat\theta_{-i}).$$

> In words: reporting your true type beats every lie, no matter what anyone else says. Truth is a dominant strategy.

**Revelation principle.** If a mechanism $M$ with equilibrium strategy profile $\sigma^*$ implements a social choice outcome, then the direct mechanism $f = g\circ\sigma^*$ (take reported types, apply everyone's equilibrium strategy, run $M$'s outcome rule $g$) is incentive-compatible and yields the same outcome for every type profile.

> In words: to check what's achievable, you may restrict attention, with no loss, to direct mechanisms in which honesty is an equilibrium.

**The VCG (Vickrey–Clarke–Groves) mechanism.** Choose the **efficient** decision given the reports,

$$a^* \in \arg\max_{a\in A}\ \sum_{j\in N} v_j(a),$$

and charge agent $i$ the **pivot (Clarke) payment**

$$t_i \;=\; \underbrace{\max_{a}\sum_{j\ne i} v_j(a)}_{\text{others' best without }i} \;-\; \underbrace{\sum_{j\ne i} v_j(a^*)}_{\text{others' value at }a^*}.$$

> In words: $i$ pays exactly the drop in *everyone else's* welfare caused by $i$'s presence tilting the decision — the externality $i$ imposes. Agents who don't change the decision pay nothing.

**Why VCG is DSIC.** The first term of $t_i$ doesn't depend on $i$'s report, so maximizing $u_i = v_i(a^*) - t_i$ over what $i$ reports is the same as maximizing $v_i(a^*) + \sum_{j\ne i} v_j(a^*) = \sum_{j} v_j(a^*)$ — total welfare. The mechanism maximizes exactly that sum, using $i$'s *reported* $v_i$; so $i$ can do no better than report the truth and let the machine optimize the whole pie, a slice of which is $i$'s. Truth is dominant. VCG is also efficient by construction. The second-price auction is VCG with $A=$ "who gets the one good" (see P1).

**The two impossibility walls.** Drop money — pure *ordinal* social choice, agents report rankings of $\ge 3$ alternatives — and truthful efficiency collapses.

- **Arrow's theorem.** No rule aggregating individual rankings into a social ranking can simultaneously satisfy unanimity (if everyone prefers $x$ to $y$, so does society), independence of irrelevant alternatives (society's $x$-vs-$y$ ranking depends only on individuals' $x$-vs-$y$ rankings), and non-dictatorship. *In words: every "fair-looking" rank-aggregation axiom set forces a dictator.*
- **Gibbard–Satterthwaite.** Every social choice rule that is onto ($\ge 3$ alternatives can each win) and non-dictatorial is **manipulable** — some voter, at some profile, gains by misreporting their ranking. *In words: outside of dictatorship, strategy-proof voting is impossible.*

These are why incentive constraints *bite*: the revelation principle says "study truthful mechanisms," and GS says in the ordinal world the *only* truthful one is a dictatorship. The escape hatches are exactly quasilinear utility with transfers (VCG buys truth with money) or restricted preference domains (single-peaked preferences → the median-voter rule is strategy-proof). Mechanism design lives in those escape hatches.

## Picture

![Two-lane diagram: top lane shows agents playing an equilibrium strategy into an arbitrary mechanism to produce outcome x; a downward fold absorbs the equilibrium strategy into the rules, producing the bottom lane, a direct mechanism into which agents report their type truthfully and get the same outcome x](assets/04-02-fig1.svg)

The revelation principle as a fold: the top lane is any mechanism whose equilibrium $\sigma^*$ maps types to messages and yields outcome $x$; push $\sigma^*$ down into the rulebook and you get the bottom lane — a direct mechanism $f = g\circ\sigma^*$ where reporting your type honestly is an equilibrium and the outcome is unchanged. Every achievable outcome sits in the bottom lane, so that is the only lane you must study.

## Worked examples

**Example 1 (mechanical — second-price is VCG).** One good, values $v_1=10, v_2=7, v_3=4$. Efficient decision: give it to bidder 1 (highest value). Bidder 1's pivot payment: others' best welfare without bidder 1 is "give the good to bidder 2," worth $7$; others' welfare at the actual outcome (bidder 1 holds it, others get nothing) is $0$. So $t_1 = 7 - 0 = 7$ — the second-highest value, exactly the second-price rule. Bidders 2 and 3 don't change the allocation (bidder 1 still wins without them), so their pivot payments are $0$. The winner pays the externality; losers pay nothing.

**Example 2 (why you'd care — VCG runs a deficit).** A shared bridge costs $C=10$ to build; two towns value it privately at $v_1=8, v_2=4$. Efficient to build iff $v_1+v_2 \ge C$: here $12 \ge 10$, so build. Charge each town its externality on the other-plus-budget. Without town 1, town 2 alone ($v_2=4 < 10$) would not build, so society-minus-1 is at welfare $0$; with the build, society-minus-1 gets $v_2 - C = 4-10 = -6$. Town 1's pivot payment is $0-(-6)=6$. Symmetrically town 2 pays $0-(v_1-C)=0-(-2)=2$. Truth is dominant (P2), the right decision is made — but the towns pay $6+2 = 8 < 10$. **VCG collects too little to fund the good**; an outside subsidy of $2$ is needed. Efficiency and dominant-strategy truth-telling are bought at the cost of budget balance — you can't have all three.

## Watch out

- You might think the revelation principle says "honest mechanisms are *better*." It doesn't — it says they're *without loss of generality*. Some real mechanisms (an ascending auction) are chosen for transparency or simplicity; the principle only guarantees a truthful *equivalent* exists for analysis, not that you must run it.
- You might think VCG solves mechanism design outright. It gives efficiency + DSIC, but generically fails **budget balance** (Example 2's deficit; in other settings, a surplus you must burn to preserve incentives) and can be vulnerable to collusion. The Myerson–Satterthwaite theorem shows for bilateral trade you can't even get efficiency + truth + budget balance + voluntary participation together.
- You might think Gibbard–Satterthwaite dooms all voting. It dooms *strategy-proof* voting on unrestricted preferences over $\ge 3$ options. Restrict the domain (single-peaked preferences) and the median rule is strategy-proof; add money and leave pure ranking, and VCG works. The theorem locates the wall, not a dead end.
- Don't conflate DSIC and BIC. Second-price is DSIC (robust to *any* rival behavior); the first-price auction's shading equilibrium is only BIC (optimal *given* rivals also play the equilibrium). Both "implement," but DSIC is the stronger, more robust guarantee.

## One-liner

> Mechanism design is reverse game theory — fix the outcome, build the game; the revelation principle lets you study only truthful direct mechanisms, VCG makes truth dominant by charging each agent the externality they impose, and Arrow / Gibbard–Satterthwaite mark the outcomes no rule can reach.

## Problems

**P1 (🟢)** One indivisible good, $n$ bidders with private values $v_1,\dots,v_n$; VCG selects the efficient allocation (good to the highest value) and charges pivot payments. (a) Show the resulting rule is exactly the second-price auction: the winner pays $v_{(2)}$ (the second-highest value) and losers pay $0$. (b) Reprove that truthful bidding is a dominant strategy directly, and interpret the winner's payment as the externality imposed on the others.

**P2 (🟡)** Two agents decide whether to build a public good ($d\in\{0,1\}$) costing $C=10$; private values are $v_1=8$, $v_2=4$, quasilinear utility $u_i = v_i\,d - t_i$. Build efficiently iff $v_1+v_2\ge C$. (a) Construct the VCG/pivotal payments $t_1,t_2$ where "others' welfare" at decision $d$ is $d\,(v_j - C)$. (b) Verify the decision is efficient and that neither agent can gain by misreporting (check each agent's incentive to flip the build decision). (c) Exhibit the budget shortfall $C - (t_1+t_2)$ and say what it means.

**P3 (🔴)** Borda count on three alternatives $\{a,b,c\}$: each voter's 1st/2nd/3rd choice scores $2/1/0$; highest total wins, ties broken alphabetically ($a\prec b\prec c$). Three voters have true rankings V1: $a\succ b\succ c$; V2: $b\succ a\succ c$; V3: $b\succ a\succ c$. (a) Find the sincere winner. (b) Show V1 can misreport to obtain a strictly preferred outcome — an instance of Gibbard–Satterthwaite manipulability. (c) Connect this to why the revelation principle restricts attention to *truthful* mechanisms, and why the escape from GS is money or restricted domains.

<details>
<summary>Solutions</summary>

**P1** (a) Relabel so $v_1 \ge v_2 \ge \cdots \ge v_n$, so the efficient allocation gives the good to bidder 1 and $v_{(1)}=v_1$, $v_{(2)}=v_2$. Pivot payment of the winner (bidder 1): "others' best welfare without bidder 1" is achieved by giving the good to the highest remaining value, worth $v_2$; "others' welfare at the actual allocation" is $0$ (bidder 1 holds the good, nobody else gets value). So $t_1 = v_2 - 0 = v_2 = v_{(2)}$. For a loser $i\ge 2$: without $i$, the good still goes to bidder 1, so others' best welfare is $v_1$; at the actual allocation others (including bidder 1) also get $v_1$. So $t_i = v_1 - v_1 = 0$. This is precisely the second-price rule.

(b) *Dominance.* Fix the highest rival bid $m$. In this VCG/second-price rule you win iff your bid tops $m$ and then pay $m$, so your surplus is $v-m$ if you win, $0$ if you lose. Bidding $b=v$ wins exactly when $v > m$, i.e. exactly the auctions where $v-m>0$; it never wins a losing-value ($v<m$) auction. Overbidding ($b>v$) differs from truthful only for $m\in(v,b)$, where you now win but pay $m>v$ for surplus $v-m<0$ instead of $0$ — never better, sometimes worse. Underbidding ($b<v$) differs only for $m\in(b,v)$, where you now lose a good worth surplus $v-m>0$ — never better, sometimes worse. Hence $b=v$ weakly dominates every alternative, *whatever* $m$ is; truth is a dominant strategy.

*Externality reading.* The winner pays $v_{(2)}$. If the winner had been absent, the good would have gone to the runner-up, generating value $v_{(2)}$ for the rest of society; because the winner took it, that value is forgone. So $v_{(2)}$ is exactly the welfare loss the winner inflicts on everyone else — the externality. Losers change nothing about the allocation, impose no externality, and pay $0$. This is VCG in one good.

Check: with $v_1=10,v_2=7,v_3=4$, $t_1 = 7 = v_{(2)}$, $t_2=t_3=0$, matching Example 1, and truth-telling is dominant for each bidder by the case analysis. ✓

**P2** Write $d^*$ for the efficient decision and use "others' welfare at $d$" $= W_{-i}(d) = d\,(v_j - C)$ (the whole cost is charged against the society-minus-$i$ objective, one standard convention), with pivot payment $t_i = \max_d W_{-i}(d) - W_{-i}(d^*)$.

Efficiency: total welfare of building is $v_1+v_2-C = 8+4-10 = 2 > 0$, so $d^*=1$ (build).

(a) Agent 1: $W_{-1}(d) = d\,(v_2 - C) = d\,(4-10) = -6d$, maximized at $d=0$ giving $0$; at $d^*=1$ it is $-6$. So $t_1 = 0 - (-6) = 6$. Agent 2: $W_{-2}(d) = d\,(v_1-C) = d\,(8-10) = -2d$, maximized at $d=0$ giving $0$; at $d^*=1$ it is $-2$. So $t_2 = 0-(-2) = 2$.

(b) *Efficiency* was shown: building yields social surplus $2>0$, and the mechanism builds. *Incentives.* Truthful payoffs: $u_1 = v_1\cdot 1 - t_1 = 8-6 = 2$; $u_2 = 4-2 = 2$. Could agent 1 gain by lying? The only lever is flipping the decision to $d=0$ (report $\hat v_1$ with $\hat v_1 + 4 < 10$, i.e. $\hat v_1<6$). Then $d=0$, so $t_1 = \max_d W_{-1}(d) - W_{-1}(0) = 0 - 0 = 0$ and $u_1 = 0 - 0 = 0 < 2$. Reporting higher can't change the already-built decision or lower the fixed first term, so truth is optimal. Symmetrically, agent 2 flipping to no-build gives $u_2 = 0 < 2$. Neither gains — truth is (weakly) dominant, as VCG guarantees.

(c) Payments collected: $t_1 + t_2 = 6 + 2 = 8$. The good costs $C = 10$. Budget shortfall $= C - (t_1+t_2) = 10 - 8 = 2 > 0$: the pivot taxes fall short of funding the project by $2$, which must come from an outside subsidy. VCG delivers efficiency and dominant-strategy honesty but cannot also balance its budget — the impossibility that shadows public-good provision.

Check: each agent pays the externality on the other (agent 1 forces a build that costs agent 2 a net $6$; agent 2 forces one costing agent 1 a net $2$), both prefer truth, the efficient build occurs, and $8 < 10$ confirms the unavoidable deficit. ✓

**P3** Borda scores (2 for 1st, 1 for 2nd, 0 for 3rd).

(a) *Sincere.* V1 $a\succ b\succ c$: $a{=}2,b{=}1,c{=}0$. V2 $b\succ a\succ c$: $a{=}1,b{=}2,c{=}0$. V3 $b\succ a\succ c$: $a{=}1,b{=}2,c{=}0$. Totals: $a = 2+1+1 = 4$, $b = 1+2+2 = 5$, $c = 0$. Winner: $b$ (score 5). V1's true ranking is $a\succ b\succ c$, so V1 gets its *second* choice.

(b) *Manipulation.* V1 misreports $a \succ c \succ b$ (sincere ranking of the others unchanged), contributing $a{=}2, c{=}1, b{=}0$. New totals: $a = 2+1+1 = 4$, $b = 0+2+2 = 4$, $c = 1+0+0 = 1$. Now $a$ and $b$ tie at $4$; the alphabetical tiebreak ($a\prec b$) selects $a$. V1 truly prefers $a\succ b$, so by lying V1 moves the winner from its 2nd choice $b$ to its 1st choice $a$ — a strict gain. Borda is manipulable. (The rule is non-dictatorial — V1's top choice $a$ was *not* the sincere winner — and onto, so this is exactly the situation Gibbard–Satterthwaite guarantees must exist.)

(c) The revelation principle says: to know what social outcomes are *achievable*, study only mechanisms in which truth is an equilibrium — because any equilibrium of any mechanism can be re-expressed as truthful play of a direct one. GS then delivers the bad news for pure ordinal voting: on $\ge 3$ alternatives the *only* strategy-proof (truthful) non-dictatorial rule doesn't exist — every non-dictatorial rule, Borda included, has a profile where honesty is not a best response. So in the world of rankings-without-money, the set of truthfully implementable, non-dictatorial rules is empty. The escapes are precisely the ones this lesson built: move to **quasilinear utility with transfers**, where VCG charges externalities and makes truth dominant, or **restrict the domain** (single-peaked preferences), where the median-voter rule is strategy-proof. Money and domain structure are what buy back the incentive compatibility that GS says pure voting cannot have.

Check: sincere winner $b$ (V1's 2nd), manipulated winner $a$ (V1's 1st) via the tie-break — a strict improvement from lying, confirming manipulability; and the connection is that the revelation principle's focus on truthful mechanisms makes GS's non-existence result exactly a statement about the reachable design space. ✓

</details>

## Flashback

**From Lesson 3.2 (Auctions):** First-price sealed-bid auction, $n=4$ bidders, values i.i.d. uniform on $[0,1]$, symmetric equilibrium. (a) Give the equilibrium bid function $b(v)$. (b) A bidder draws $v=0.8$: what does she bid, and what is her probability of winning? (c) Compute the seller's expected revenue and verify it matches the second-price auction's $\mathbb{E}[v_{(2)}]$.

<details>
<summary>Solution</summary>

(a) The symmetric first-price equilibrium under uniform values shades by $\frac{n-1}{n}$: with $n=4$, $b(v) = \frac{n-1}{n}v = \frac{3}{4}v$.

(b) $b(0.8) = \frac34(0.8) = 0.6$. She wins iff all $3$ rivals have lower values; each is below $0.8$ with probability $0.8$ (uniform), independently, so $\Pr[\text{win}] = 0.8^{\,3} = 0.512$.

(c) The winner is the highest bidder, value $v_{(1)}$, paying $\frac34 v_{(1)}$. Using $\mathbb{E}[v_{(1)}] = \frac{n}{n+1} = \frac{4}{5}$, expected revenue $= \frac34 \cdot \frac45 = \frac{3}{5}$. Second-price revenue is $\mathbb{E}[v_{(2)}] = \frac{n+1-2}{n+1} = \frac{n-1}{n+1} = \frac{3}{5}$. They match — revenue equivalence, as required.

Check: $\frac{n-1}{n+1}\big|_{n=4} = \frac{3}{5}$ from both formats, and $b(0.8)=0.6<0.8$ confirms shading below value. ✓

</details>

## Connections

- **Backward:** this inverts [3.2](03-02-auctions.md) — the second-price auction's dominant-strategy honesty is no longer a lucky fact but the flagship instance of VCG (P1), and revenue equivalence becomes a *design constraint* on what any efficient truthful auction can extract. The dominance argument is still pure [1.1](01-01-normal-form-dominance.md) reasoning, and the private-type structure is [3.1](03-01-bayesian-games.md)'s Bayesian game with the designer now choosing the rules.
- **Forward:** `grad-game-theory` opens with the optimization and fixed-point machinery that proves *existence* of the equilibria the revelation principle folds into direct mechanisms, and develops optimal (revenue-maximizing) mechanisms — Myerson's auction — beyond the efficient VCG benchmark here. This lesson completes the Tier 0 refresher.
- **Sideways (economics/social choice):** Arrow and Gibbard–Satterthwaite are the theoretical backbone of voting theory and welfare economics; VCG's externality pricing is the same logic as Pigouvian taxes in public economics — charge each actor the social cost they impose — and the median-voter escape from GS is the workhorse model of political economy.

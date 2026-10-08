# Political Economy · Lesson 3.3: The commons and common-pool resources

> ⏱ ~15 min · Module 3: Collective action and the choice of rules · Builds on: [3.1 Free riding and threshold games](03-01-free-riding-and-threshold-games.md), [3.2 Olson's logic of collective action](03-02-olsons-logic-of-collective-action.md) · Unlocks: [3.4 Constitutions and the choice of rules](03-04-constitutions-and-the-choice-of-rules.md)

## Why this matters

Fisheries, aquifers, grazing land, irrigation canals, the atmosphere as a carbon sink: each is a [common-pool resource](../reference.md#common-pool-resource), where what one user takes is gone for the others, yet keeping users out is costly. The standard prediction is ruin. Garrett Hardin's 1968 *Science* essay named it the tragedy of the commons and called for mutually agreed coercion; the policy menu that followed was state control or private property. Elinor Ostrom's *Governing the Commons* (1990) documented communities that had managed such resources for centuries without either. This lesson gives the models on both sides: the one-shot tragedy, Gordon's open-access dissipation, and the repeated game in which restraint can be an equilibrium. It then reads Ostrom's design principles as terms in that game's incentive constraint, and marks where they go beyond it.

## The idea

A pasture is a public good with one twist. In [3.1](03-01-free-riding-and-threshold-games.md)–[3.2](03-02-olsons-logic-of-collective-action.md) the free rider fails to *add*; on a commons she fails to *hold back*. Each extra cow is all hers, while the thinner grass is shared by everyone. So everyone overgrazes.

Two things change the story. First, who can enter. If anyone can bring cows, entry continues until grazing earns nothing, and the pasture's value is competed away. Second, time. Villagers who share a pasture for generations can say "graze your quota, or we all go back to the free-for-all". If the free-for-all is bad enough and the future matters enough, the threat makes the quota stick. Ostrom's design principles read naturally as answers to the questions that threat raises. Who counts as a villager? How do we know someone cheated? What exactly happens to her?

## The model

**Players and stage game.** Users $i = 1, \dots, n$ each choose extraction $e_i \ge 0$, with total $E = \sum_j e_j$. The static commons is [`game-theory-refresher` 1.4](../../game-theory-refresher/lessons/01-04-cournot-bertrand-applications.md)'s: each user counts the crowding she does to her own share and ignores the rest, so the Nash equilibrium over-extracts ([tragedy of the commons](../reference.md#tragedy-of-the-commons)).

**Gordon: open access.** H. Scott Gordon (1954, *Journal of Political Economy*) asked what happens to the resource's rent. Let effort $E$ yield $Y(E)$ (increasing, concave), shared in proportion to effort, and let effort cost $w$ per unit. User $i$ earns $\frac{e_i}{E}Y(E) - w e_i$. Her first-order condition, at the symmetric point $e_i = E/n$, is

$$\frac{1}{n}\,Y'(E) + \Big(1 - \frac{1}{n}\Big)\frac{Y(E)}{E} = w.$$

*In words:* each user acts on a weighted average of the marginal product (weight $1/n$) and the average product (weight $1 - 1/n$). A sole owner ($n = 1$) sets marginal product equal to cost, which maximizes the rent $Y(E) - wE$. As $n \to \infty$, or under free entry, users enter until the *average* product equals cost, so $Y(E) = wE$ and the rent is zero. That is [rent dissipation](../reference.md#rent-dissipation). With $Y = A\sqrt{E}$ the rent left is $(2n-1)/n^2$ of the sole owner's: 75% at $n = 2$, 36% at $n = 5$, 19% at $n = 10$. Gordon's point is that the waste comes from the absence of exclusion, not from fishers' character.

**The repeated commons.** Now fix the $n$ users and repeat the stage game forever, with common discount factor $\delta \in (0,1)$, payoffs common knowledge, and every extraction observed at the end of each period. The users agree on a quota $e^C$. Write $v^C$ for each user's stage payoff when all keep it, $v^D$ for the best one-period payoff of a user who breaks it while the others keep it, and $v^N$ for the stage-Nash payoff, with $v^D > v^C > v^N$. (These are [`grad-game-theory` 3.3](../../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md)'s $T$, $c$, $p$.) *Grim trigger:* extract $e^C$ while everyone always has; after any deviation, extract the stage-Nash amount forever.

**Proposition.** Grim trigger is a subgame-perfect equilibrium if and only if

$$\delta \;\ge\; \delta^* = \frac{v^D - v^C}{v^D - v^N}.$$

*In words:* restraint holds when the user is patient enough that the stream of lost cooperation outweighs one period of grabbing ([critical discount factor](../reference.md#critical-discount-factor)).

*Proof.*

1. By the one-shot deviation principle ([`grad-game-theory` 3.3](../../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md)) it suffices to check single deviations at every history.
2. After a deviation, everyone plays the stage Nash equilibrium forever. A one-period departure cannot raise this period's payoff (it is a stage best response) and does not change the future, so it does not pay. The punishment is credible.
3. On the cooperative path, conforming yields $v^C/(1-\delta)$. The best one-shot deviation yields $v^D$ now and $v^N$ forever after: $v^D + \delta v^N/(1-\delta)$.
4. Conforming is optimal iff $(1-\delta)(v^D - v^C) \le \delta(v^C - v^N)$, which rearranges to $\delta \ge \delta^*$. ∎

**The linear commons.** Take user payoffs $u_i = e_i(A - E)$, net of extraction cost. Then the stage Nash amount is $A/(n+1)$ each, and the efficient total $A/2$ split equally is the quota $e^C = A/(2n)$. The best deviation against it is $e = A(n+1)/(4n)$. Substituting,

$$\delta^*(n) = \frac{(n+1)^2}{n^2 + 6n + 1},$$

which rises from $9/17$ at $n = 2$ toward 1.

**Ostrom's principles in the constraint.** Ostrom's eight principles, paraphrased: (1) clearly defined boundaries, of the users and of the resource; (2) rules congruent with local conditions, with costs matched to benefits; (3) collective-choice arrangements, so most users can help change the rules; (4) monitoring by users or by monitors accountable to them; (5) graduated sanctions; (6) cheap, accessible conflict resolution; (7) outside authorities recognize the users' right to organize; (8) nested enterprises, governance in layers. Read the condition in step 4, *today's temptation* $(1-\delta)(v^D - v^C)$ against *tomorrow's loss* $\delta(v^C - v^N)$, and several of them map onto [Ostrom's design principles](../reference.md#ostroms-design-principles) term by term:

- **Boundaries → $n$**, and whether $n$ is fixed at all. A larger group raises $\delta^*(n)$. Unbounded entry is Gordon's limit.
- **Monitoring → detection.** Step 3 assumed every deviation is seen. If it is caught only with probability below 1, the loss side shrinks (P2 derives by how much).
- **Graduated sanctions → the punishment's form.** Replace grim trigger with *fine, then forgive*: a detected violator pays a fine $s$ next period and cooperation resumes; refusing to pay triggers reversion. She will not violate if $\delta s \ge v^D - v^C$, and will pay if $s \le (v^C - v^N)/(1-\delta)$. Such an $s$ exists iff $\delta \ge \delta^*$. The threshold is the *same*. The fine does not relax the constraint; it keeps one violation from destroying the cooperative path.
- **Collective choice and congruence → the quota $e^C$.** The folk theorem ([`grad-game-theory` 3.4](../../grad-game-theory/lessons/03-04-folk-theorems.md)) makes many quotas sustainable. Choosing among them is rule-making, which the model leaves open.
- **Recognition of rights → $\delta$.** $\delta$ includes the chance the arrangement survives to next period. An outside authority that may override local rules lowers it.

**Where the argument is weakest.** The repeated-game reading takes the rules as given and punishment as free: everyone sees everything, and the punisher's own interest carries out the reversion. Ostrom's cases put effort exactly there. Someone must pay to watch and to sanction, which is a second-order collective-action problem. The rules themselves are argued over, revised (principle 3) and nested inside larger jurisdictions (principle 8). Her later laboratory work with Walker and Gardner (1992, *American Political Science Review*) varied whether subjects could talk and whether they could sanction each other, levers whose effect the basic theory with selfish players discounts as cheap talk or costly punishment. Remove fixed rules and costless monitoring, and the proposition says nothing about which communities succeed. Remove an infinite horizon or patience above $\delta^*$, and it predicts the tragedy.

## Picture

![Critical discount factor for the full quota in the linear commons, plotted against the number of users from 2 to 20. The curve rises from 0.53 at two users toward 1, crossing a dashed line at patience 0.7 between seven and eight users. At four users it is 0.610, below the line, so the quota holds; at ten users it is 0.752, above the line, so the full quota fails.](assets/03-03-fig1.svg)

Above the curve, the efficient quota is self-enforcing. With patience fixed at 0.7, it holds up to $n = 7$ ($\delta^* = 0.696$) and fails from $n = 8$ ($0.717$). This is what "clear boundaries" buys in the model.

## Worked examples

**Example 1 (clean): four users.** $A = 40$, $n = 4$.

- Stage Nash: $e = 40/5 = 8$ each, $E = 32$, $v^N = 8 \cdot 8 = 64$.
- Quota: $E = 20$, $e^C = 5$, $v^C = 5 \cdot 20 = 100$.
- Best deviation: the others take 15, so she maximizes $e(25 - e)$, giving $e = 12.5$ and $v^D = 156.25$.

$$\delta^* = \frac{156.25 - 100}{156.25 - 64} = \frac{56.25}{92.25} = \frac{25}{41} \approx 0.610.$$

At $\delta = 25/41$ both sides equal 256.25 exactly; at $\delta = 0.6$ deviating wins (252.25 against 250). For the fine at $\delta = 0.7$, the window is $s \in [56.25/0.7,\ 36/0.3] = [80.4,\ 120]$. At $\delta = 0.5$ the window is empty ($112.5 > 72$), as the threshold says.

**Example 2 (the hypothesis bites): the boundary leaks.** Keep $A = 40$ and $\delta = 0.7$, but let the group grow. At $n = 10$, $\delta^* = 121/161 \approx 0.752 > 0.7$, so the efficient quota unravels. That does not force the stage Nash. The group can adopt a laxer quota, and the best symmetric quota grim trigger can sustain solves the incentive constraint with equality. The table shows the best total extraction and the share of the cooperative gain $v^C - v^N$ it keeps (efficient total 20):

| $n$ | Nash total | best sustainable total | gain kept |
|---|---|---|---|
| 4 | 32.0 | 20.0 | 100% |
| 10 | 36.4 | 22.1 | 98% |
| 20 | 38.1 | 27.3 | 84% |
| 50 | 39.2 | 33.4 | 52% |
| 100 | 39.6 | 36.3 | 31% |

Gordon's dissipation returns gradually rather than at a cliff. Each newcomer raises the temptation and the best sustainable rule drifts toward the free-for-all. (Harsher credible punishments than Nash reversion can do better; the table is for grim trigger.)

## Watch out

- **You might think** the static tragedy predicts ruin for every commons. It predicts it for a one-shot game, or for open access. Ostrom's cases are bounded groups in long relationships, a different game. Whether her evidence *refutes* Hardin or *confirms* the repeated-game reading is the evaluative question. That the two models rest on different hypotheses is not in dispute.
- **You might think** gentler sanctions must make cooperation harder to sustain, or harsher ones easier. In the perfect-monitoring model, fine-then-forgive has exactly grim trigger's threshold. Their difference appears only once mistakes and misperceived violations are possible, a hypothesis the proposition drops.
- **You might think** "commons" means common property. Gordon's model is *open access*, where no one can be excluded. A bounded community with rules is a *common-property regime*, and Ostrom's principle 1 is precisely the move from one to the other.

## One-liner

> One-shot or open, a commons dissipates its rent; bounded and repeated, restraint holds when $\delta \ge (v^D - v^C)/(v^D - v^N)$. Ostrom's principles set the terms of that inequality: who is in, who sees, what a violation costs. They also do the work the inequality assumes away.

## Problems

**P1 (🟢)** *(Formal.)* Three households draw from a well. Each draws 3 units (restrain) or 5 (overdraw), and each unit is worth $20 - E$, where $E$ is the total drawn this period.

(a) Show that overdrawing is a dominant strategy in the stage game and that the outcome is Pareto-dominated by universal restraint.
(b) The game repeats forever with discount factor $\delta$. Find the $\delta^*$ above which grim trigger sustains universal restraint.

**P2 (🟡)** *(Formal.)* Keep the setting of the Proposition, but now a deviation is detected, and publicly revealed at the end of the period it occurs, only with probability $\pi \in (0, 1]$, independently each period. Once a deviation is detected, all users revert to the stage Nash forever. Undetected deviations go unpunished.

(a) Show that grim trigger is subgame-perfect iff $\delta \ge \delta^*(\pi) = \dfrac{g}{g + \pi}$, where $g = \dfrac{v^D - v^C}{v^C - v^N}$, and check that $\pi = 1$ recovers the Proposition.
(b) With P1's payoffs, find $\delta^*(1/2)$, and the smallest $\pi$ that sustains restraint at $\delta = 0.8$.

**P3 (🔴, optional)** *(Evaluative.)* Pick one of Ostrom's design principles that you think the repeated-game reading of this lesson cannot capture, or argue that none escapes it. In 150 words or fewer, say what the principle requires, which assumption of the model it touches, and whether a richer game could absorb it.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) A household's payoff is $m(20 - m - T)$, where $m$ is its draw and $T$ the others' total.

| others' total $T$ | restrain (3) | overdraw (5) |
|---|---|---|
| 6 | 33 | 45 |
| 8 | 27 | 35 |
| 10 | 21 | 25 |

In general overdraw minus restrain is $(75 - 5T) - (51 - 3T) = 24 - 2T > 0$ for $T \le 10$, so overdrawing is dominant. All overdraw: $E = 15$, each gets $5 \cdot 5 = 25$. All restrain: $E = 9$, each gets $3 \cdot 11 = 33 > 25$. So the equilibrium is Pareto-dominated.

(b) $v^C = 33$, $v^D = 45$ (overdraw while the other two restrain), $v^N = 25$.

$$\delta^* = \frac{45 - 33}{45 - 25} = \frac{12}{20} = \frac{3}{5}.$$

Check at $\delta = 3/5$: conforming gives $33/0.4 = 82.5$, and deviating gives $45 + 0.6 \cdot 25/0.4 = 82.5$.

**Wrong turns:** Using the sucker payoff (21) in place of $v^N$. Grim trigger punishes with the stage Nash, so after a deviation everyone overdraws. Comparing $v^D$ with $v^C$ alone and concluding no $\delta$ works.

---

**P2** *(Formal.)*

(a) Punishment histories are as before: stage Nash forever, so no one-shot deviation pays. On the cooperative path, conforming gives $V^C = v^C/(1-\delta)$. A one-shot deviation gives $v^D$ now. With probability $\pi$ it is detected and the user gets $V^N = v^N/(1-\delta)$ from next period. With probability $1 - \pi$ it is not, and play returns to the cooperative path with continuation $V^C$. No deviation pays iff

$$v^C + \delta V^C \ge v^D + \delta\big[\pi V^N + (1-\pi)V^C\big] \iff v^D - v^C \le \frac{\delta\pi}{1-\delta}\,(v^C - v^N).$$

Divide by $v^C - v^N$: $\delta\pi/(1-\delta) \ge g$, that is, $\delta(g + \pi) \ge g$, so $\delta \ge g/(g + \pi)$. After an undetected deviation the state is the same as before it, so by the one-shot deviation principle this also rules out deviating for several periods. At $\pi = 1$: $g/(g+1) = (v^D - v^C)/(v^D - v^N)$, the Proposition.

(b) $g = 12/8 = 3/2$. $\delta^*(1/2) = 1.5/2 = 3/4$. At $\delta = 0.8$ the condition is $\pi \ge g(1-\delta)/\delta = 1.5 \cdot 0.2/0.8 = 3/8$. Check at $\delta = 0.8$, $\pi = 3/8$: both sides equal 165.

**Wrong turns:** Dropping the $(1-\pi)$ branch: an undetected cheater returns to the cooperative path $V^C$, not to zero. Guessing $\delta^*(\pi) = \delta^*/\pi$, which at $\pi = 1/2$ gives 1.2, an impossible discount factor.

---

**P3** *(Evaluative.)*

**Must hit, any verdict:**

- State the principle accurately (e.g. principle 3: users who are affected can take part in changing the operational rules).
- Name the model assumption it touches: fixed rules and quota, costless and automatic punishment, perfect or exogenous monitoring, a fixed $n$, or a constant $\delta$.
- Say whether an extension absorbs it (a prior rule-choice stage, costly monitoring, noise with forgiving punishments, endogenous $\delta$), and what that extension would still leave out, or why it leaves nothing out.

**Wrong turns:** Treating "the model can be extended" as settling the matter without naming the extension. Misstating the model, e.g. saying grim trigger needs an external enforcer. Its punishment is self-enforcing (step 2 of the proof).

**Model answer, one of several:** Principle 3 asks that most users affected by the rules can take part in modifying them. The repeated game fixes the quota and the punishment before play, and the folk theorem says only that many quotas are sustainable. It is silent on which one a group picks and on whether users comply more with a rule they helped make. A richer game could add a prior bargaining stage, which [3.4](03-04-constitutions-and-the-choice-of-rules.md) begins. But Ostrom's claim is partly about legitimacy and about adjusting to local knowledge over time, which a game with known, fixed payoffs cannot express. So the principle is partly absorbable and partly not.

</details>

## Flashback

**From Lesson [3.1](03-01-free-riding-and-threshold-games.md) (Free riding and threshold games):** *(Formal.)* An invented claim: "Make a public good more valuable and it becomes more likely to be provided." Test it on a threshold good. Four members; the good is provided iff at least two contribute; each contributor pays $c$, with no refund; each member values the good at $V$. (a) Show that $p = \tfrac14$ is a symmetric mixed equilibrium when $c/V = 27/64$, that $p = \tfrac15$ is one after $V$ rises so that $c/V = 48/125$, and that each is the lower of the game's two symmetric mixed equilibria. (b) Compute the probability that the good is provided at each, and say in two sentences why the claim fails here and where it holds.

<details>
<summary>Solution</summary>

(a) With $n = 4$ and $k = 2$, a member is pivotal when exactly one of the other three contributes: $\pi(p) = \binom31 p(1-p)^2 = 3p(1-p)^2$, and $p$ is an equilibrium iff $\pi(p) = c/V$. Check: $\pi(\tfrac14) = 3 \cdot \tfrac14 \cdot \tfrac{9}{16} = \tfrac{27}{64}$ and $\pi(\tfrac15) = 3 \cdot \tfrac15 \cdot \tfrac{16}{25} = \tfrac{48}{125}$. $\pi$ is single-peaked at $\hat p = \tfrac{k-1}{n-1} = \tfrac13$ with $\pi(\tfrac13) = \tfrac49 \approx 0.444$, above both ratios, so each case has two roots. $\tfrac14$ and $\tfrac15$ lie below $\tfrac13$, so each is the lower one, the tipping point. (The upper roots are about 0.424 and 0.488.)

(b) The good is provided iff at least two of the four contribute: $1 - (1-p)^4 - 4p(1-p)^3$.

- $p = \tfrac14$: $1 - \tfrac{81}{256} - \tfrac{108}{256} = \tfrac{67}{256} \approx 0.262$.
- $p = \tfrac15$: $1 - \tfrac{256}{625} - \tfrac{256}{625} = \tfrac{113}{625} \approx 0.181$.

The more valuable good is provided *less* often. At the lower root $\pi$ is rising, so a smaller cost-to-value ratio is met at a smaller $p$: members need less assurance before contributing pays, the tipping point slides down, and each contributes less often. At the upper root $\pi$ is falling, and there the claim holds: $p$ rises from about 0.424 to 0.488 and provision from about 0.566 to 0.669. (Holding $c$ fixed, each member's expected payoff at the lower root even falls, from $\tfrac{10}{27}c$ to $\tfrac{13}{48}c$.)

**Wrong turns:** Assuming every equilibrium moves the same way as $V$: the direction depends on the slope of $\pi$ at the root. Writing $\pi(p) = p(1-p)^2$: any one of the three others can be the lone contributor, hence the factor 3.

</details>

## Connections

- **Backward:** the stage game is [`game-theory-refresher` 1.4](../../game-theory-refresher/lessons/01-04-cournot-bertrand-applications.md)'s commons. The equilibrium tools are [`grad-game-theory` 3.3](../../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md)–[3.4](../../grad-game-theory/lessons/03-04-folk-theorems.md). The rival-but-non-excludable category is [`grad-micro` 6.4](../../grad-micro/lessons/06-04-public-goods.md)'s. [3.1](03-01-free-riding-and-threshold-games.md) and [3.2](03-02-olsons-logic-of-collective-action.md) gave the provision side of the same problem, and [Olson's](../reference.md#olsons-logic) small-group advantage reappears here as $\delta^*(n)$.
- **Forward:** [3.4](03-04-constitutions-and-the-choice-of-rules.md) treats choosing the rules as its own optimization, the step this lesson's Proposition takes as given. [3.5](03-05-agenda-setters-and-veto-players.md)'s status quo is the "reversion" again, this time in a legislature.
- **Sideways:** Locke's claim that an enclosed acre outyields a common one ([`history-of-political-thought` 4.1](../../history-of-political-thought/lessons/04-01-locke-against-filmer-and-property.md)) is the sole-owner answer that Gordon formalized and that Ostrom denied was the only one. [`social-theory` 6.2](../../social-theory/lessons/06-02-rational-choice-sociology.md) meets the second-order problem in Coleman's account of norms, where sanctioning is itself a public good. Collusion in a repeated oligopoly is this lesson with firms for herders.

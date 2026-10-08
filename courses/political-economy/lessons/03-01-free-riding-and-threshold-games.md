# Political Economy · Lesson 3.1: Free riding and threshold games

> ⏱ ~15 min · Module 3: Collective action and the choice of rules · Builds on: [1.2 Turnout and the paradox of voting](01-02-turnout-and-the-paradox-of-voting.md), [`public-economics` 1.1](../../public-economics/lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md), [`grad-game-theory` 2.4](../../grad-game-theory/lessons/02-04-computing-characterizing-equilibria.md) · Unlocks: [3.2 Olson's logic of collective action](03-02-olsons-logic-of-collective-action.md), [3.3 The commons](03-03-the-commons-and-common-pool-resources.md)

## Why this matters

A petition forces a referendum only with enough signatures. A strike works only if most of the shift walks out. A levee gets built only if enough villages pay in. [`public-economics` 1.1](../../public-economics/lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) told you when such a good is *worth* providing: the Samuelson condition, summed marginal benefit against marginal cost. It says nothing about whether anyone will pay. Module 3 asks the political question: when does a group act on an interest every member shares? This lesson builds the two workhorse games. The answer turns on what members expect of each other, and on a number from [1.2](01-02-turnout-and-the-paradox-of-voting.md): the probability that your own contribution is decisive.

## The idea

Two stories of failure, different in kind.

In the first, each contribution adds a little to a good everyone enjoys, and costs its maker more than the little she gets back. Whatever the others do, she does better keeping her money. That is the [free-rider problem](../reference.md#free-rider-problem) in pure form: a dominant strategy, followed by all, to everyone's loss.

In the second, the good comes in one lump. The referendum is held or it is not. Now your contribution matters only if it is the one that carries the count over the line. If plenty of others are giving, you can free ride. If almost nobody is, your gift is wasted. You give only when you expect to be decisive, so the outcome hangs on expectations. Lumpy goods can be provided in equilibrium, which the first story rules out. They also have an equilibrium in which nobody moves. Which one a group lands in is the political question.

## The games

**Game 1: the [n-person prisoner's dilemma](../reference.md#n-person-prisoners-dilemma).** Players $i \in N = \{1, \dots, n\}$ choose simultaneously $a_i \in \{0, 1\}$ (1 = contribute). Each contribution costs its maker $c$ and gives every member, the maker included, a benefit $b$. With $m = \sum_j a_j$ contributors, $u_i = b\,m - c\,a_i$. Assume $b < c < nb$.

**Claim 1.** Not contributing is strictly dominant, so the unique Nash equilibrium is $m = 0$. Yet universal contribution gives each player $nb - c > 0$.

*In words:* each gift costs its giver more than it returns to her but less than it returns to the group, so everyone keeps her money and everyone is worse off.

*Proof.* Switching $a_i$ from 0 to 1 changes $u_i$ by $b - c < 0$, whatever the others do. ∎

The condition $nb > c$ is the Samuelson condition for this good. Hardin read Olson's problem as exactly this game ("Collective action as an agreeable n-prisoners' dilemma", *Behavioral Science*, 1971). With $n = 10$, $b = 1$, $c = 3$: each gift costs its giver 2 on net, and universal giving pays everyone 7 instead of 0.

**Game 2: the [threshold public good](../reference.md#threshold-public-goods).** Same players and choices. A good worth $V$ to every member is provided if and only if at least $k$ contribute, with $1 \le k \le n$. Each contributor pays $c$, $0 < c < V$, *whether or not the good is provided* (no refund). Moves are simultaneous; $n, k, V, c$ are common knowledge.

$$u_i = V \cdot \mathbf{1}[m \ge k] - c\,a_i.$$

This is Palfrey and Rosenthal's game ("Participation and the provision of discrete public goods: a strategic analysis", *Journal of Public Economics*, 1984, with $V$ normalized to 1). Two corners have their own names. $k = 1$ is Diekmann's [volunteer's dilemma](../reference.md#volunteers-dilemma) (*Journal of Conflict Resolution*, 1985): someone must call the police. $k = n$ is an [assurance game](../reference.md#assurance-game), an $n$-player version of the stag hunt in [`grad-game-theory` 2.4](../../grad-game-theory/lessons/02-04-computing-characterizing-equilibria.md), after the assurance problem Sen posed (*Quarterly Journal of Economics*, 1967).

**Pivot lemma.** Let $j$ be the number of *other* contributors. Contributing changes $i$'s payoff by

$$\Delta(j) = V \cdot \mathbf{1}[j = k - 1] - c.$$

*In words:* contribute exactly when the others are one short.

*Proof.* If $j \ge k$, the good is provided either way, so contributing only costs $c$. If $j \le k - 2$, it is provided neither way: again $-c$. If $j = k - 1$, contributing turns 0 into $V$. ∎

The two ways of not being pivotal are the two problems. $j \ge k$ is free riding; $j \le k - 2$ is futility, which only assurance about others cures.

**Proposition 1 (pure equilibria; Palfrey–Rosenthal).** A pure profile is a Nash equilibrium if and only if exactly $k$ players contribute, or $k \ge 2$ and nobody does. There are $\binom{n}{k}$ provision equilibria, plus one no-provision equilibrium when $k \ge 2$.

*In words:* the good is provided with no slack, by a group of precisely the right size, or not at all.

*Proof.* Let $m$ be the number of contributors and apply the lemma.

1. $m = k$. A contributor has $j = k - 1$, so quitting loses $V - c > 0$. A non-contributor has $j = k$, so joining loses $c$. Equilibrium.
2. $m > k$. A contributor has $j = m - 1 \ge k$; quitting saves $c$. Not an equilibrium.
3. $1 \le m < k$. A contributor has $j = m - 1 \le k - 2$; quitting saves $c$. Not an equilibrium.
4. $m = 0$. Everyone has $j = 0$. If $k \ge 2$ then $j \le k - 2$, so nobody gains by starting: equilibrium. If $k = 1$ then $j = k - 1$, and anyone gains $V - c$ by volunteering: not an equilibrium. ∎

**Proposition 2 (symmetric mixed equilibria).** Let every player contribute with probability $p \in (0, 1)$. Then $j \sim \text{Binomial}(n-1, p)$, and the [pivot probability](../reference.md#pivot-probability) is

$$\pi(p) = \binom{n-1}{k-1}\, p^{k-1} (1-p)^{n-k}.$$

$p$ is a symmetric mixed equilibrium if and only if $V\,\pi(p) = c$.

*In words:* the chance of being decisive, times the prize, exactly pays for the contribution.

*Proof.* By the lemma, the expected gain from contributing is $\mathbb{E}[\Delta(j)] = V\pi(p) - c$. Mixing is a best response if and only if this is zero. ∎

How many solutions? For $2 \le k \le n - 1$, $\pi(0) = \pi(1) = 0$ and

$$\frac{d}{dp} \ln \pi(p) = \frac{k-1}{p} - \frac{n-k}{1-p},$$

which is positive below $\hat p = \tfrac{k-1}{n-1}$ and negative above. So $\pi$ is single-peaked at $\hat p$: two symmetric mixed equilibria if $c/V < \pi(\hat p)$, one if equal, none if greater. For $k = 1$, $\pi = (1-p)^{n-1}$ falls from 1 to 0: exactly one. For $k = n$, $\pi = p^{n-1}$ rises from 0 to 1: exactly one. (Palfrey and Rosenthal also characterize partly mixed equilibria, with some players contributing for sure and others abstaining for sure. We use only the fully symmetric ones.)

**Large groups.** Let the threshold grow with the group, $k/n$ fixed. Then $\pi(\hat p)$ is the largest point probability of a binomial with $n - 1$ trials, and it shrinks like $1/\sqrt{n}$. For any fixed $c/V > 0$, the symmetric mixed equilibria vanish once $n$ is large, a limit Palfrey and Rosenthal draw. What survives is no provision, or provision by a precisely identified set of $k$.

**Where the argument is weakest.** The provision equilibria of Proposition 1 are asymmetric: everyone must know *which* $k$ members pay. The game contains nothing that says who. A symmetric, anonymous group has no way to choose, and when it is large its only symmetric equilibrium is no provision. So the gloomy verdict on large groups rests on the absence of a coordination device: a leader, assigned roles, a designated "minimal contributing set" (van de Kragt, Orbell and Dawes, *American Political Science Review*, 1983). Add one and the exactly-$k$ equilibria are back in reach. Two further hypotheses carry weight. Identical $V$ and $c$, common knowledge: with privately known costs, strategies become cutoffs in a Bayesian game ([`grad-game-theory` 4.1](../../grad-game-theory/lessons/04-01-bayesian-games-bayes-nash.md)) and the clean counts above no longer apply. No refund: Palfrey and Rosenthal show that with refunds the pure equilibria include all those without, and each no-refund mixed equilibrium has a refund counterpart with more expected contributors.

## Picture

![The benefit of contributing, V times the pivot probability, plotted against the probability p that each other member contributes, with V equal to 27. The solid curve for five members and threshold three rises from zero to a peak of about 10.1 at p one half and falls back to zero. It crosses the horizontal cost line at 8 twice, at p one third, a tipping point, and at p two thirds, a stable point. A dashed curve for eleven members and threshold six peaks at about 6.6 and never reaches the cost line.](assets/03-01-fig1.svg)

Between the crossings, contributing beats abstaining, so play drifts up. Below $1/3$ contributing is futile and $p$ slides to 0; above $2/3$ others suffice and $p$ slides back. The low crossing is a watershed (the assurance side), the high one an attractor (the free-rider side). These are heuristic adjustment dynamics, not an equilibrium refinement.

## Worked examples

**Example 1 (clean): five members, threshold three.** $n = 5$, $k = 3$, $V = 27$, $c = 8$.

*Pure.* Since $k \ge 2$, nobody contributing is an equilibrium. So is every profile with exactly three contributors: $\binom{5}{3} = 10$ of them, in each of which contributors get $27 - 8 = 19$ and the other two get 27.

*Mixed.* $\pi(p) = 6p^2(1-p)^2$, peaking at $\hat p = 1/2$ with $\pi = 3/8$. Since $27 \cdot 3/8 = 10.125 > 8$, there are two roots:

$$27 \cdot 6\,p^2(1-p)^2 = 8 \iff p(1-p) = \tfrac{2}{9} \iff p \in \left\{\tfrac13, \tfrac23\right\}.$$

At $p = 1/3$ the good is provided with probability $P(\text{Bin}(5, \tfrac13) \ge 3) = 51/243 = 17/81 \approx 0.21$, and each player's expected payoff is 3. At $p = 2/3$ it is provided with probability $64/81 \approx 0.79$, payoff 16. Both lose to the pure provision equilibria, where even a contributor gets 19. Randomizing wastes contributions in both directions: too many, or too few.

**Example 2 (the hypothesis bites): grow the group.** Keep $V = 27$, $c = 8$, and make the threshold a majority, $k = (n+1)/2$, so $\hat p = 1/2$.

| $n$ | $k$ | $\pi(\hat p)$ | $V\pi(\hat p)$ | symmetric mixed eq. |
|---|---|---|---|---|
| 5 | 3 | 0.375 | 10.13 | two |
| 11 | 6 | 0.246 | 6.64 | none |
| 21 | 11 | 0.176 | 4.76 | none |
| 101 | 51 | 0.080 | 2.15 | none |
| 1001 | 501 | 0.025 | 0.68 | none |

At $n = 11$, $\pi(1/2) = \binom{10}{5}/2^{10} = 63/256$, and the benefit never reaches the cost. The game still has $\binom{11}{6} = 462$ provision equilibria plus no provision. But an anonymous group of eleven that plays symmetrically can only play no provision. This is the turnout problem of [1.2](01-02-turnout-and-the-paradox-of-voting.md) in another key. Its [participation games](../reference.md#participation-games) are two threshold games glued together, each team's threshold set by the other team's turnout, and the same shrinking pivot probability is what starves the calculus of voting.

## Watch out

- **You might think** a threshold good is just an $n$-person prisoner's dilemma with lumps. Actually it has no dominant strategy: contributing is a best response whenever you are pivotal, so provision can be an equilibrium. The prisoner's dilemma has no provision equilibrium at all.
- **You might think** the $\binom{n}{k}$ provision equilibria mean the problem solves itself. They are asymmetric and need everyone to know who pays. Drop the coordination device and an anonymous large group is left with no provision (Example 2). This is the hypothesis people drop.
- **You might think** large groups always kill the mixed equilibria. The vanishing result needs the threshold to grow with $n$. Hold $k = 3$ fixed and $\pi(\hat p)$ falls toward the Poisson limit $2e^{-2} \approx 0.271$, never below it. Example 2's $c/V = 8/27 \approx 0.296$ is above that, but any $c/V < 0.271$ keeps two mixed equilibria at every group size.

## One-liner

> A lumpy public good is worth paying for only when you are pivotal, so groups provide it with no slack or not at all, and in large anonymous groups the only symmetric outcome is nobody.

## Problems

**P1 (🟢)** *(Formal.)* Four neighbours share a street light that is installed if and only if at least three of them pay. Each values the light at 8; paying costs 3 and is not refunded.

(a) Find every pure-strategy Nash equilibrium.
(b) Find every symmetric mixed equilibrium, and say which one is the tipping point.

**P2 (🟡)** *(Formal (a) · Exegetical (b).)* An invented NGO memo: "The clinic needs 300 of our 1,000 members to pledge 50 dollars each; pledges are collected whether or not we reach 300. Every member values the clinic at 1,000 dollars, so its benefits (a million dollars) dwarf its cost (15,000). Rational members will see this and pledge. All we need to do is announce the target."

(a) Treat it as Game 2 with members contributing independently with a common probability. The largest possible pivot probability here is about 0.028. Is there a symmetric mixed equilibrium?
(b) In 150 words or fewer: name the model the memo relies on, the step it gets wrong, and two changes to the campaign that the model says would help.

**P3 (🔴, optional)** *(Formal.)* The volunteer's dilemma: $k = 1$, $0 < c < V$, $n \ge 2$.

(a) Find the symmetric mixed equilibrium $p_n$.
(b) Prove that $p_n$ strictly decreases in $n$, and that the probability nobody volunteers strictly increases in $n$, with limit $c/V$.
(c) With $c/V = 1/4$, compute $p_n$ and the probability nobody volunteers for $n = 2$ and $n = 5$.

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) $n = 4$, $k = 3$, $V = 8$, $c = 3$. By Proposition 1: nobody pays (since $k \ge 2$, a lone payer cannot reach 3), and each of the $\binom{4}{3} = 4$ profiles with exactly three payers. Five pure equilibria. Check one: a payer has two other payers, so she is pivotal and quitting loses $8 - 3 = 5$; the non-payer already has the light, so paying loses 3.

(b) $\pi(p) = \binom{3}{2} p^2 (1-p) = 3p^2(1-p)$, single-peaked at $\hat p = 2/3$ with $8\pi(2/3) = 32/9 \approx 3.56 > 3$, so there are two roots. Set $24p^2(1-p) = 3$:

$$8p^3 - 8p^2 + 1 = 0 \iff (2p - 1)(4p^2 - 2p - 1) = 0,$$

so $p = 1/2$ or $p = (1 + \sqrt5)/4 \approx 0.809$; the third root, $(1 - \sqrt5)/4$, is negative. At $p = 1/2$ expected payoffs from paying and not paying are both 1, and the light goes up with probability $5/16$. At $p \approx 0.809$ both are about 4.24. The gain $8\pi(p) - 3$ is negative below $1/2$ (at 0.3 it is $-1.49$), positive between the roots (at 0.7, $+0.53$), negative above $0.809$ (at 0.9, $-1.06$). So $p = 1/2$ is the tipping point.

**Wrong turns:** Writing $\pi(p) = p^3$, the probability that *everyone else* pays: with $k = 3$ of 4 you need exactly two of the other three. Forgetting the no-provision equilibrium, or listing "all four pay", where each payer could quit and still get the light.

---

**P2** *(Formal (a) · Exegetical (b), both strict.)*

(a) $c/V = 50/1000 = 0.05$. A symmetric mixed equilibrium needs $V\pi(p) = c$, i.e. $\pi(p) = 0.05$ for some $p$. The maximum of $\pi$ is about 0.028 (at $p = 299/999$), below 0.05, so **no**. The only equilibria are nobody pledging and the $\binom{1000}{300}$ profiles in which exactly 300 named members pledge.

**Must hit, strict (b):**

- The model is the threshold (step-level) public good with no refund: Game 2.
- The memo's step from "benefits exceed costs" (the Samuelson-style test, a million against 15,000) to "members will pledge" is the error. Efficiency is not equilibrium; a member pledges only if she expects to be pivotal.
- Equilibrium selection: nobody pledging is an equilibrium too, and by (a) an anonymous group has no symmetric equilibrium with pledging. Announcing a target picks no one.
- Two fixes, each tied to a hypothesis: designate who pays (a minimal contributing set or assigned roles, giving the coordination the exactly-300 equilibria need), and refund pledges if 300 is missed (removes the futility loss; Palfrey–Rosenthal's refund result). Publishing a running count also bears on beliefs about pivotality.

**Wrong turns:** Calling it a prisoner's dilemma: here pledging *is* a best response when one is pivotal, and provision equilibria exist. Saying members "irrationally" fail to pledge: in the no-pledge equilibrium nobody errs.

**Model answer (b):** The memo assumes a threshold public good: the clinic exists only if 300 pledge, and pledges are lost if it fails. It moves from efficiency (a million dollars of benefit against 15,000 of cost) to behaviour, but a member pledges only when she expects hers to be decisive. Nobody pledging is an equilibrium, and with 1,000 anonymous members the pivot probability never exceeds 0.028, below the 0.05 cost-to-value ratio, so there is no symmetric equilibrium with pledging at all. The equilibria that provide the clinic require exactly 300 *identified* members. So the campaign should assign or recruit a named contributing set, and refund pledges if the target is missed, which removes the fear of paying for nothing.

---

**P3** *(Formal, strict.)*

(a) With $k = 1$, $\pi(p) = (1-p)^{n-1}$, so $V(1-p)^{n-1} = c$ gives $p_n = 1 - (c/V)^{1/(n-1)}$. Write $r = c/V \in (0, 1)$.

(b) As $n$ rises, $1/(n-1)$ falls. For $0 < r < 1$, $r^x$ is strictly decreasing in $x$, so $r^{1/(n-1)}$ strictly rises and $p_n$ strictly falls. Nobody volunteers with probability $(1 - p_n)^n = r^{n/(n-1)}$. The exponent $n/(n-1) = 1 + 1/(n-1)$ strictly falls toward 1, so $r^{n/(n-1)}$ strictly rises toward $r^1 = c/V$. ∎ Adding bystanders lowers each one's willingness enough that the group as a whole does worse.

(c) $r = 1/4$. $n = 2$: $p_2 = 3/4$, nobody volunteers with probability $(1/4)^2 = 1/16$. $n = 5$: $p_5 = 1 - (1/4)^{1/4} = 1 - 1/\sqrt2 \approx 0.293$, nobody with probability $(1/4)^{5/4} \approx 0.177$.

**Wrong turns:** Claiming the probability *someone* volunteers rises with $n$ because there are more potential volunteers: the individual probability falls faster. Using $\pi(p) = 1 - (1-p)^{n-1}$, the chance that at least one other volunteers, which is the probability of *not* being pivotal.

</details>

## Flashback

**From Lesson [2.5](02-05-strategic-voting-and-duvergers-law.md) (Strategic voting and Duverger's law):** *(Formal (a)–(c).)* A plurality election among A, B and C. A voter ranks C ≻ A ≻ B, with $u_C = 1$, $u_A = v \in (0, 1)$ and $u_B = 0$, and holds pivot probabilities $p_{AB}, p_{AC}, p_{BC} > 0$, three-way ties negligible, as in the lesson.

(a) From prospective ratings, show that she never votes B, and that she votes A rather than C if and only if
$$v > \frac{2p_{AC} + p_{BC}}{p_{AB} + 2p_{AC}}.$$

(b) Find the cutoff at $(p_{AB}, p_{AC}, p_{BC}) = (0.010, 0.003, 0.001)$. Then let the polls put C third, $p_{AC} = p_{BC} = \varepsilon\,p_{AB}$, and find the cutoff's limit as $\varepsilon \to 0$.

(c) Find the cutoff when all three pivot probabilities are equal, and name the hypothesis of Theorem 1 this case drops. One sentence.

<details>
<summary>Solution</summary>

(a) Summing over the races each ballot could swing:

$$R_A = p_{AB}\,v + p_{AC}(v - 1), \qquad R_B = -p_{AB}\,v - p_{BC} < 0, \qquad R_C = p_{AC}(1 - v) + p_{BC} > 0.$$

So $R_C > R_B$ and B is never her best ballot. $R_A > R_C$ if and only if $v(p_{AB} + 2p_{AC}) > 2p_{AC} + p_{BC}$, which is the stated cutoff. ∎

(b) $(0.006 + 0.001)/(0.010 + 0.006) = 7/16 = \mathbf{0.4375}$: a voter with $v = 0.4$ stays with C, one with $v = 0.5$ deserts to A. In the family, the cutoff is $3\varepsilon/(1 + 2\varepsilon)$ (at $\varepsilon = 0.01$ it is $1/34 \approx 0.029$), which tends to **0**. In the limit every C ≻ A ≻ B voter deserts to A, however slightly she prefers A to B: Theorem 1's desertion.

(c) With all three equal to $p$ the cutoff is $3p/3p = \mathbf{1}$, so no $v \in (0, 1)$ clears it and she votes sincerely ($R_C - R_A = 3p(1 - v) > 0$). The dropped hypothesis is the ordering condition: shared expectations from the polls that make any race involving the third-placed candidate infinitely less likely than the race between the top two.

**Wrong turns:** Leaving the $p_{BC}$ term out of $R_C$: a ballot for C can also swing a B–C race, where she gains $u_C - u_B = 1$. Leaving the $p_{AC}$ term out of $R_A$: in an A–C race a ballot for A costs her $1 - v$. Reading (b)'s positive cutoff at fixed $p$ as a refutation of Theorem 1, which concerns the limit $\varepsilon \to 0$.

</details>

## Connections

- **Backward:** The pivot probability is [1.2](01-02-turnout-and-the-paradox-of-voting.md)'s, and its participation games are threshold games with the threshold set by the other team. Efficient provision is [`public-economics` 1.1](../../public-economics/lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md)'s Samuelson condition; voluntary provision of a *continuous* good, with its contributor set, is [`public-economics` 1.2](../../public-economics/lessons/01-02-voluntary-provision-and-crowding-out.md). The $k = n$ case is [`grad-game-theory` 2.4](../../grad-game-theory/lessons/02-04-computing-characterizing-equilibria.md)'s stag hunt and its selection problem.
- **Forward:** [3.2](03-02-olsons-logic-of-collective-action.md) asks which groups escape free riding, by size, by unequal shares and by selective incentives. [3.3](03-03-the-commons-and-common-pool-resources.md) repeats the dilemma over time on a shared resource, where the future can enforce restraint.
- **Sideways:** [`comparative-politics`](../../comparative-politics/syllabus.md) 6.2 takes the collective action of revolt, and its cascades, from this module; [`social-theory` 6.2](../../social-theory/lessons/06-02-rational-choice-sociology.md) points to this module for rational-choice accounts of turnout and collective action.

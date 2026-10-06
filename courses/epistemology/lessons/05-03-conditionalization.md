# Epistemology · Lesson 5.3: Conditionalization

> ⏱ ~15 min · Module 5: Bayesian epistemology · Builds on: [5.1 Credences and probabilism](05-01-credences-and-probabilism.md), [5.2 Dutch books and accuracy](05-02-dutch-books-and-accuracy.md) · Unlocks: [5.4 The problem of priors](05-04-the-problem-of-priors.md), [5.5 Bayesian disagreement and higher-order evidence](05-05-bayesian-disagreement-and-higher-order-evidence.md)

## Why this matters

[5.1](05-01-credences-and-probabilism.md) and [5.2](05-02-dutch-books-and-accuracy.md) were about a snapshot: what your credences should look like at one moment. But belief is a process. You learn things, and the question every scientist, juror and spam filter faces is how a coherent state should *change*. Bayes' theorem, from [prob-stat-refresher 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md), is a fact about one probability function: it relates $\Pr(H \mid E)$ to $\Pr(E \mid H)$. It says nothing about time. The claim that tomorrow's credence in $H$ *should equal* today's credence in $H$ given $E$ is an extra norm, a rule of rational change. This lesson states that rule, gives the Dutch book argument for it, and extends it to the common case where experience makes nothing certain.

## The idea

Picture your credences as sand spread over a map of possibilities, total amount 1. Learning $E$ for certain means every possibility where $E$ is false is ruled out. Conditionalization says: sweep the sand off the ruled-out region, then scale up what remains so it sums to 1 again. Do nothing else. In particular, don't move sand *within* the surviving region. If you thought, before the evidence, that the $H$-and-$E$ worlds were one and a half times as likely as the not-$H$-and-$E$ worlds, you think so after.

That last clause is the whole content of the rule. A rival update plan, one that reshuffles sand among the surviving worlds, is not incoherent at any single moment. Each of its snapshots can obey the axioms. The trouble is that the plan, taken as a whole, can be exploited by someone who knows it in advance. That is the diachronic Dutch book.

Sometimes experience doesn't rule anything out. You glance at a fabric by candlelight and come away fairly sure, but not certain, that it's green. Richard Jeffrey's generalization (*The Logic of Decision*, 1965, which uses exactly that candlelight case) lets experience push sand *between* regions of a partition while leaving the proportions inside each region alone.

## The math

Write $\mathrm{cr}_0$ for your credence function before the learning experience and $\mathrm{cr}_1$ for it after; both are probability functions over the same propositions, as [probabilism](../reference.md#probabilism) requires.

**1. Strict conditionalization.** If between $t_0$ and $t_1$ you learn $E$ with certainty, and nothing else, and $\mathrm{cr}_0(E) > 0$, then for every $H$:

$$\mathrm{cr}_1(H) = \mathrm{cr}_0(H \mid E) = \frac{\mathrm{cr}_0(H \wedge E)}{\mathrm{cr}_0(E)}.$$

*In words:* your new credence in anything is your old credence in it on the supposition of what you learned. This is [strict conditionalization](../reference.md#strict-conditionalization).

In odds form (the tool from [philosophical-method 2.4](../../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md), now read as a rule for change rather than a fact about one function):

$$\frac{\mathrm{cr}_1(H)}{\mathrm{cr}_1(\neg H)} = \frac{\mathrm{cr}_0(H)}{\mathrm{cr}_0(\neg H)} \times \frac{\mathrm{cr}_0(E \mid H)}{\mathrm{cr}_0(E \mid \neg H)}.$$

*In words:* new odds are old odds times the likelihood ratio, where both factors are yesterday's credences.

Three consequences follow directly from the definition.

- **Rigidity.** For any $H$, $\mathrm{cr}_1(H \mid E) = \mathrm{cr}_0(H \mid E)$: the proportions inside $E$ don't move. ([rigidity](../reference.md#rigidity))
- **Commutativity.** Conditioning on $E$ and then on $F$ gives the same result as $F$ then $E$, because both equal conditioning on $E \wedge F$.
- **Certainty is permanent.** Once $\mathrm{cr}(E) = 1$, every later strict update keeps it at 1. A conditionalizer can never unlearn, and a proposition given credence 0 can never be revived. That is a reason some Bayesians urge **regularity** (no credence 0 for any contingent proposition), and a reason others say strict conditionalization idealizes away from real evidence.

**2. The diachronic Dutch book** ([diachronic Dutch book](../reference.md#diachronic-dutch-book)). David Lewis constructed it; Paul Teller first reported it in print (1973), and Lewis's own version appeared in 1999. As in [5.2](05-02-dutch-books-and-accuracy.md), a bet on $X$ at price $c$ for stake $S$ costs $cS$ and pays $S$ if $X$ is true, and an agent regards it as fair, to buy or sell, when $c$ is her credence. Utility is assumed linear in money, the assumption [decision-theory 2.2](../../decision-theory/lessons/02-02-probability-from-preference.md) flags.

**Theorem.** Suppose $\mathrm{cr}_0(E) = e$ with $0 < e < 1$, $\mathrm{cr}_0(H \mid E) = p$, and the agent's plan is to adopt $\mathrm{cr}_1(H) = r \neq p$ if she learns $E$. A bookie who knows the plan can offer bets she regards as fair, at the time each is offered, that guarantee her a net loss of $e\,|p - r|\,S$.

*Proof* (case $r < p$; for $r > p$ swap buyer and seller in bets 1 and 3). At $t_0$:

- Bet 1: she buys a conditional bet on $H$ given $E$ for $pS$: it pays $S$ if $H \wedge E$, and is called off with her money refunded if $\neg E$. Fair by $\mathrm{cr}_0(H \mid E) = p$.
- Bet 2: she buys a bet paying $(p - r)S$ if $E$, at price $e(p - r)S$. Fair by $\mathrm{cr}_0(E) = e$.

At $t_1$, only if $E$ has been learned:

- Bet 3: she sells a bet paying $S$ if $H$, for $rS$. Fair by $\mathrm{cr}_1(H) = r$.

If $E$ is false, bet 1 is refunded, bet 3 never happens, and bet 2 loses its price: net $-e(p-r)S$. If $E$ is true, bets 1 and 3 together give $-pS + rS$ whatever $H$'s truth value (the payouts of $S$ on $H$ cancel), and bet 2 gives $(1-e)(p-r)S$. Net:

$$-(p - r)S + (1 - e)(p - r)S = -e(p - r)S. \qquad \blacksquare$$

*In words:* a plan to move off your conditional credence lets a bookie hedge the first half of the trade against the second, and charge you for the hedge.

The converse also holds: no such strategy books an agent who conditionalizes, and Brian Skyrms (1987) extended the converse to Jeffrey's rule below.

**3. Jeffrey conditionalization.** Let $\{E_1, \dots, E_n\}$ be a partition (exactly one is true), and suppose experience directly changes your credences over it to new values $q_1, \dots, q_n$ (summing to 1), and changes nothing else directly. Then

$$\mathrm{cr}_1(H) = \sum_{i} q_i \, \mathrm{cr}_0(H \mid E_i).$$

*In words:* reweight the cells to the new values, keep the proportions inside each cell, and add up. This is [Jeffrey conditionalization](../reference.md#jeffrey-conditionalization). The rule is equivalent to rigidity on the partition, $\mathrm{cr}_1(H \mid E_i) = \mathrm{cr}_0(H \mid E_i)$ for every $i$, and it reduces to strict conditionalization when one $q_i = 1$. Unlike strict updates, Jeffrey updates do **not** commute in general: if two experiences set $\mathrm{cr}(E)$ to 0.75 and then to 0.5, you end at 0.5; in the other order, at 0.75. (Recording each experience as a likelihood-ratio multiplier on the odds, rather than as a target value, restores commutativity.)

**Where the argument is weakest.** The step from "a bookie who knows your plan can book you" to "your plan is irrational." Three attacks. Bas van Fraassen noted that the argument assumes the agent's alternative rule is *fixed at* $t_0$; an agent who has no plan, and simply finds herself with credence $r$ at $t_1$, gives the bookie nothing to exploit in advance, so the argument at best condemns *planning* to deviate. Critics, Christensen among them, ask whether vulnerability to a clever bookie shows an epistemic defect at all or only a practical exposure, the same "pragmatic vs epistemic" worry [5.2](05-02-dutch-books-and-accuracy.md) raised for synchronic books. And the theorem assumes you learn one member of a partition with certainty; J. Dmitri Gallow (2019) argues that when evidence isn't partitional, conditionalizing can itself be booked. Defenders reply that a plan is just a disposition, and that a disposition guaranteeing loss by your own lights is a defect in it, whoever notices. Accuracy-based arguments for conditionalization (that it minimizes expected inaccuracy) are the main attempt to drop the bookie altogether.

## The picture

![Three horizontal bars split into four cells for H and E, not-H and E, H and not-E, not-H and not-E. The prior bar has widths 0.24, 0.16, 0.06 and 0.54. After learning E for certain, the not-E cells vanish and the E cells become 0.6 and 0.4. After a Jeffrey shift to credence 0.75 in E, the cells become 0.45, 0.3, 0.025 and 0.225. Inside E the ratio of H to not-H stays 3 to 2 throughout](assets/05-03-fig1.svg)

Strict conditionalization deletes and renormalizes; Jeffrey conditionalization reweights. Both leave the inside of each cell alone.

## Worked examples

**Example 1 (clean case: update, then the book against a deviator).** A prospector's credences over $H$ (the seam holds ore) and $E$ (the field assay comes back positive):

| | $E$ | $\neg E$ |
|---|---|---|
| $H$ | 0.24 | 0.06 |
| $\neg H$ | 0.16 | 0.54 |

So $\mathrm{cr}_0(E) = 0.40$, $\mathrm{cr}_0(H) = 0.30$, and $\mathrm{cr}_0(H \mid E) = 0.24/0.40 = 0.6$. The assay is positive. Conditionalizing gives $\mathrm{cr}_1(H) = 0.6$. Check by odds: prior odds $0.30 : 0.70 = 3:7$; likelihood ratio $\frac{0.24/0.30}{0.16/0.70} = \frac{0.8}{0.2286} = 3.5$; posterior odds $\frac{3}{7} \times 3.5 = \frac32$, which is probability $\frac{3}{5} = 0.6$.

Now a second prospector shares the table but plans to "stay cautious": on a positive assay she will adopt $\mathrm{cr}_1(H) = 0.5$. So $p = 0.6$, $r = 0.5$, $e = 0.4$; take $S = 100$ dollars. The book, from her side:

| World | Bet 1: buy 100 on $H$ given $E$ for 60 | Bet 2: buy 10 on $E$ for 4 | Bet 3 ($t_1$): sell 100 on $H$ for 50 | Net |
|---|---|---|---|---|
| $H \wedge E$ | $+40$ | $+6$ | $-50$ | $-4$ |
| $\neg H \wedge E$ | $-60$ | $+6$ | $+50$ | $-4$ |
| $\neg E$ | 0 (refunded) | $-4$ | not offered | $-4$ |

She loses 4 dollars in every world, which is $e(p - r)S = 0.4 \times 0.1 \times 100$. Each bet looked fair to her at the moment she took it.

**Example 2 (hard case: an assay you can't quite read).** Same prospector, but the assay strip is smudged and she ends up only 75 percent sure it reads positive. She learned no proposition for certain, so strict conditionalization has nothing to conditionalize on. Jeffrey's rule, with $\mathrm{cr}_0(H \mid \neg E) = 0.06/0.60 = 0.1$:

$$\mathrm{cr}_1(H) = 0.75 \times 0.6 + 0.25 \times 0.1 = 0.475.$$

The cells become $0.45, 0.30, 0.025, 0.225$ (the figure's third bar).

Where it strains. First, the rule takes the new value $0.75$ as an *input*; nothing in the theory says what a given look at a smudge should produce, so the hardest step of learning sits outside the formalism. Second, the rule applies only if rigidity holds. Suppose the assayer also remarks that smudging of this kind happens mostly on ore-bearing samples. Then the experience bears on $H$ directly, not just through $E$, so $\mathrm{cr}_1(H \mid E)$ should no longer be 0.6, and Jeffrey's formula gives the wrong answer. The fix is to refine the partition (to cells like "positive and smudged"), but which partition the experience "acts on" is again a judgment the rule doesn't supply.

## Watch out

- **You might think conditionalization just is Bayes' theorem, but actually** the theorem is a synchronic identity within one probability function. Conditionalization is a diachronic norm linking two functions, and it needs its own argument, which is what the diachronic book tries to supply.
- **You might think the diachronic book shows the deviating agent is incoherent at some moment, but actually** each of her snapshots obeys the axioms. The fault the argument finds is in the plan connecting them, and it needs a bookie who knows the plan.
- **You might think Jeffrey conditionalization lets experience change anything it likes, but actually** it changes only the credences over the partition and holds every conditional credence on a cell fixed. When an experience bears on $H$ other than through the partition, the rule doesn't apply.

## One-liner

> Learn $E$ for certain and your new credence is your old credence given $E$; learn $E$ only partly and reweight the cells without touching their insides. Deviate by plan, and a bookie who knows the plan can take your money.

## Problems

**P1 (🟢) *(Formal (a)–(c))*** A birder glimpses a bird at dusk. Her partition is $S_1$ (warbler), $S_2$ (vireo), $S_3$ (flycatcher), with prior credences $0.5, 0.3, 0.2$. Let $H$ be "the bird is a migrant", with $\mathrm{cr}_0(H \mid S_1) = 0.9$, $\mathrm{cr}_0(H \mid S_2) = 0.4$, $\mathrm{cr}_0(H \mid S_3) = 0.1$. The glimpse shifts her credences over the partition to $0.2, 0.6, 0.2$ and affects nothing else directly.

(a) Find $\mathrm{cr}_0(H)$ and, by Jeffrey conditionalization, $\mathrm{cr}_1(H)$.

(b) Find $\mathrm{cr}_1(S_2 \wedge H)$ and verify that rigidity holds on $S_2$.

(c) Find $\mathrm{cr}_0(S_1 \mid H)$ and $\mathrm{cr}_1(S_1 \mid H)$ as exact fractions. Does rigidity require these to be equal? One sentence.

**P2 (🟡) *(Formal (a)–(b))*** An auditor has $\mathrm{cr}_0(E) = 0.5$ that a ledger shows a transfer to an offshore account ($E$) and $\mathrm{cr}_0(H \mid E) = 0.3$ that the firm committed fraud ($H$) given that it does. Her stated plan: "If the ledger shows the transfer, I'll go to 0.45 on fraud."

(a) With stake $S = 100$ dollars, give the three bets a bookie should offer (which side she takes, the price, when), and a table of her net in the worlds $H \wedge E$, $\neg H \wedge E$ and $\neg E$.

(b) State her guaranteed loss and check it against the theorem's formula.

**P3 (🔴, optional) *(Formal (a) · Evaluative (b))*** Same auditor as P2, but she now tells the bookie only that, on seeing the transfer, her credence in fraud will be *at least* 0.40; the exact value is up to her on the day.

(a) The bookie uses the P2 strategy with bet 2 paying 10 dollars on $E$ (price 5), and at $t_1$ sells her a 100-dollar bet on $H$ at whatever credence $r \ge 0.40$ she then has. Show her net is negative in every world for every such $r$, and give the smallest guaranteed loss.

(b) A student in seminar says: "So the trick only works if the bookie knows something about my plan. I just won't have one. The diachronic book shows exploitability, not irrationality." In 150 words or fewer: does the student's reply defeat the argument for conditionalization as a norm? State which premise of the argument the reply targets and what defending conditionalization against it costs. Any verdict.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c))*

(a) $\mathrm{cr}_0(H) = 0.5(0.9) + 0.3(0.4) + 0.2(0.1) = 0.45 + 0.12 + 0.02 = 0.59$.

$\mathrm{cr}_1(H) = 0.2(0.9) + 0.6(0.4) + 0.2(0.1) = 0.18 + 0.24 + 0.02 = 0.44$.

(b) $\mathrm{cr}_1(S_2 \wedge H) = q_2 \, \mathrm{cr}_0(H \mid S_2) = 0.6 \times 0.4 = 0.24$, so $\mathrm{cr}_1(H \mid S_2) = 0.24/0.6 = 0.4 = \mathrm{cr}_0(H \mid S_2)$. Rigidity holds, as it must: the rule builds it in.

(c) $\mathrm{cr}_0(S_1 \mid H) = \dfrac{0.45}{0.59} = \dfrac{45}{59} \approx 0.763$. $\mathrm{cr}_1(S_1 \mid H) = \dfrac{0.18}{0.44} = \dfrac{9}{22} \approx 0.409$. No: rigidity fixes credences in $H$ *given each cell*, not credences in cells given $H$, which move whenever the cell weights move.

**Wrong turns:** reweighting the prior $\mathrm{cr}_0(H)$ instead of the conditional credences; treating rigidity as "all conditional credences stay fixed", which (c) refutes.

---

**P2** *(Formal (a)–(b))*

Here $p = 0.3$, $r = 0.45 > p$, $e = 0.5$, so buyer and seller swap in bets 1 and 3; she still *buys* bet 2.

(a)

- Bet 1 ($t_0$): she **sells** a conditional bet on $H$ given $E$ for 30: she receives 30 and pays 100 if $H \wedge E$; refunded if $\neg E$. Fair at $p = 0.3$.
- Bet 2 ($t_0$): she **buys** a bet paying $(r - p) \times 100 = 15$ if $E$, for $0.5 \times 15 = 7.5$. Fair at $e = 0.5$.
- Bet 3 ($t_1$, only if $E$): she **buys** a bet paying 100 if $H$, for 45. Fair at $r = 0.45$.

| World | Bet 1 | Bet 2 | Bet 3 | Net |
|---|---|---|---|---|
| $H \wedge E$ | $+30 - 100 = -70$ | $+15 - 7.5 = +7.5$ | $-45 + 100 = +55$ | $-7.5$ |
| $\neg H \wedge E$ | $+30$ | $+7.5$ | $-45$ | $-7.5$ |
| $\neg E$ | 0 | $-7.5$ | not offered | $-7.5$ |

(b) A sure loss of 7.50 dollars. Formula: $e\,|p - r|\,S = 0.5 \times 0.15 \times 100 = 7.5$. ✓

**Wrong turns:** keeping the $r < p$ sides from the lesson's proof, which turns the net in $E$-worlds into a gain; having her *sell* bet 2 (then the $\neg E$ world is a gain).

---

**P3** *(Formal (a) · Evaluative (b))*

(a) With $p = 0.3$, bet 1 sold for 30, bet 2 bought (pays 10 on $E$, price 5), bet 3 bought for $100r$:

- $E$ worlds: bets 1 and 3 net $30 - 100r$ whether or not $H$ (the 100-dollar payouts cancel), and bet 2 nets $+5$. Total $35 - 100r \le 35 - 40 = -5$ for every $r \ge 0.40$.
- $\neg E$: bet 1 refunded, no bet 3, bet 2 loses 5. Total $-5$.

So she loses at least 5 dollars in every world (exactly 5 if $r = 0.40$; 10 if $r = 0.45$; 35 if $r = 0.70$). The bookie needed only the direction of her deviation and a bound on its size, not the exact plan.

**Must hit, any verdict (b):**

- Name the targeted premise: that the agent's update rule is fixed and knowable at $t_0$ (van Fraassen's point), or equivalently the bridge from "exploitable by a bookie who knows the plan" to "irrational".
- Note what (a) shows: the bookie needs only partial knowledge, so having *some* settled disposition to deviate in a known direction is enough.
- Say what the defence costs: either it treats a disposition as a plan whether or not the agent announces one (so "I won't have a plan" means "I have no predictable disposition", which is hard to square with being a reasoner at all), or it concedes that the book shows only practical exposure and must rest the norm on something else, such as an accuracy argument.

**Wrong turns:** claiming the student is refuted by (a) alone (the student can still say "no disposition at all"); claiming the synchronic and diachronic books stand or fall together (the synchronic book needs no knowledge of a plan).

**Model answer (b), one of several:** The reply targets the premise that the agent's alternative rule is fixed at $t_0$, so that the bookie can build bet 2 in advance. Part (a) narrows the escape: the bookie needs only to know which way, and by at least how much, she is disposed to deviate. So "I won't have a plan" must mean "nothing about my future credence is predictable from my present state", which buys immunity at the cost of making her updates arbitrary. The defender can say any stable disposition is a plan, and a plan that guarantees loss by its owner's lights is defective whether or not anyone exploits it. That reply keeps the norm but concedes that the evidence for it is pragmatic. A defender who wants a purely epistemic norm must turn to accuracy arguments, which drop the bookie.

</details>

## Flashback

**From Lesson [5.1](05-01-credences-and-probabilism.md) (Credences and probabilism):** *(Formal (a)–(b) · Exegetical (c).)* A raffle has $N$ tickets and exactly **four** winning tickets, every set of four equally likely. A Lockean believer has threshold $t = 0.92$; let $L_i$ be "ticket $i$ loses". (a) Find the smallest $N$ at which she believes, of each ticket, that it loses. Check the boundary case. (b) At that $N$ she holds tickets 1 and 2. Find $\mathrm{cr}(L_1 \wedge L_2)$ exactly, and say whether she believes that both her tickets lose. (c) In one sentence: on Martin Smith's normic-support view, may she believe $L_1$ at any $N$, and why?

<details>
<summary>Solution</summary>

(a) Each ticket loses with credence $1 - \tfrac{4}{N}$. She believes each $L_i$ iff $1 - \tfrac{4}{N} > 0.92$, iff $\tfrac{4}{N} < 0.08$, iff $N > \tfrac{4}{0.08} = 50$. At $N = 50$, $\mathrm{cr}(L_i) = 1 - \tfrac{4}{50} = 0.92$, not greater than $t$, so she suspends. Smallest $N = 51$, where $\mathrm{cr}(L_i) = \tfrac{47}{51} \approx 0.9216 > 0.92$.

(b) Both lose iff all four winners come from the other 49 tickets:

$$\mathrm{cr}(L_1 \wedge L_2) = \frac{\binom{49}{4}}{\binom{51}{4}} = \frac{47 \times 46}{51 \times 50} = \frac{2162}{2550} = \frac{1081}{1275} \approx 0.848.$$

Since $0.848 < 0.92$, she does not believe both lose, though she believes each does: conjunction closure already fails at two conjuncts, with no contradiction in view.

**Must hit, strict (c):**

- No, at any $N$: normic support requires that her evidence make $L_1$'s falsity abnormal, something that would need explaining, and a ticket's winning a fair raffle needs no explaining however improbable it is.

**Wrong turns:** using $1 - \tfrac1N$ as if there were one winner (gives $N = 13$); answering $N = 50$ by ignoring the strict inequality; in (b), squaring $\tfrac{47}{51}$ to get about $0.849$, which treats the two tickets as independent when they are not; in (c), saying normic support licenses the belief once $N$ is large enough, which is the Lockean answer.

</details>

## Connections

- **Backward:** [5.1](05-01-credences-and-probabilism.md) made credences the object of study and [5.2](05-02-dutch-books-and-accuracy.md) argued they should be probabilities at each moment; this lesson adds a norm across moments. The odds-form rule is [philosophical-method 2.4](../../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md)'s, which promised that epistemology would ask whether degrees of belief *ought* to obey it; the diachronic book is that argument.
- **Forward:** conditionalization fixes how to move but not where to start: given the rule, every difference between two agents with the same evidence lies in their priors, which is [5.4](05-04-the-problem-of-priors.md). [5.5](05-05-bayesian-disagreement-and-higher-order-evidence.md) asks whether pooling two agents' credences commutes with conditionalizing them, and whether evidence about your own reliability can be conditionalized on at all. [`philosophy-of-science`](../../philosophy-of-science/syllabus.md) builds Bayesian confirmation on this rule.
- **Sideways:** the diachronic book is a cousin of the dynamic-consistency problems in [decision-theory 1.4](../../decision-theory/lessons/01-04-what-a-representation-theorem-shows.md), where a myopic agent's plan and later choice come apart and a sophisticated one plans around it. Bayes' theorem itself is [prob-stat-refresher 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md)'s; Bayesian filtering in engineering is repeated conditionalization with a model of how the state moves between updates.

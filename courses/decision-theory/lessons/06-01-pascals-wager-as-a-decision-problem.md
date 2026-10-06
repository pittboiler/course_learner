# Decision Theory · Lesson 6.1: Pascal's wager as a decision problem

> ⏱ ~15 min · Module 6: The edges of expected value · Builds on: [1.1 Acts, states, outcomes](01-01-acts-states-outcomes.md), [1.2 From expected value to expected utility](01-02-from-expected-value-to-expected-utility.md), [1.3 The vNM theorem and how utility is built](01-03-the-vnm-theorem-and-how-utility-is-built.md) · Unlocks: [6.2 Fanaticism and tiny probabilities](06-02-fanaticism-and-tiny-probabilities.md), [6.3 Moral uncertainty](06-03-moral-uncertainty.md)

## Why this matters

Ian Hacking ("The Logic of Pascal's Wager", *American Philosophical Quarterly*, 1972) treated the wager as the first well-understood contribution to decision theory. It was written before anyone had a name for expected value. It is also the first argument to put an infinite payoff into a [decision matrix](../reference.md#decision-matrix), and three centuries later decision theory still has no settled way to handle one. Whether God exists, and whether belief can be chosen at all, belong to [`philosophy-of-religion`](../../philosophy-of-religion/syllabus.md) [5.3](../../philosophy-of-religion/lessons/05-03-pragmatic-arguments-the-wager-and-the-will-to-believe.md). This lesson owns the formal side: three arguments, three matrices, and the three objections that test each one.

## The idea

Pascal addresses a reader who says reason cannot settle whether God exists, and who concludes that the honest course is to suspend judgment. Pascal's answer is that suspending judgment is not on the menu: "Yes; but you must wager. It is not optional. You are embarked." (*Pensées* §233, Trotter translation). Living as a believer and living as an unbeliever are the two available acts, and not choosing is one of them.

So treat it as a bet. The world is in one of two states, God exists or not. Your act is to wager for God, which means living so as to cultivate belief, or to wager against. Pascal's first pass is a slogan: "If you gain, you gain all; if you lose, you lose nothing." That is a dominance claim. When the reader objects that a believing life costs something, Pascal shifts to counting chances and stakes. That is an expectation claim. Then he notices that with an infinite prize the chances barely matter. Hacking separated [Pascal's wager](../reference.md#pascals-wager) into three distinct arguments, each with its own premises and its own exposure to objection.

Every objection in this lesson attacks one of four things: the table's two columns, the probability fed in, the infinite entry, or the claim that "wager for God" is the only act that captures it.

## The formal version

**The matrix.** Acts $W$ (wager for God) and $A$ (wager against). States $G$ (God exists) and $\neg G$. Utilities:

| | $G$ | $\neg G$ |
|---|---|---|
| $W$ | $H$ | $f_1$ |
| $A$ | $f_2$ | $f_3$ |

Here $H$ is the value of salvation, and $f_1, f_2, f_3$ are finite. Let $p = P(G)$ be your credence that God exists. Wagering does not cause God to exist, so the states are not act-dependent in either sense from [1.1](01-01-acts-states-outcomes.md).

**1. The argument from dominance.** If $f_1 \ge f_3$ (a believing life loses nothing if there is no God) and $H > f_2$, then $W$ weakly [dominates](../reference.md#dominance) $A$: never worse, better in $G$. *In words: wagering for God cannot hurt and might help, so no probability is needed.* It needs "you lose nothing", and Pascal himself concedes the believer gives up some pleasures, so $f_1 < f_3$ and dominance fails.

**2. The argument from expectation.** Take $p = \tfrac12$ and finite stakes in "lives". Staking one life to win two is a fair bet ($\tfrac12 \cdot 2 = 1$); to win three, it is favourable ($\tfrac12 \cdot 3 = \tfrac32 > 1$). *In words: with even chances, a prize worth more than twice the stake makes the bet worth taking.* It needs $p = \tfrac12$, which the reader who thinks God unlikely will not grant.

**3. The argument from dominating expectation.** Let $H = \infty$ and $p > 0$. Then

$$\begin{aligned}
EU(W) &= p \cdot \infty + (1-p) f_1 = \infty,\\
EU(A) &= p f_2 + (1-p) f_3 < \infty.
\end{aligned}$$

*In words: any nonzero chance of an infinite prize swamps every finite cost, so $W$ maximizes [expected utility](../reference.md#expected-utility) whatever your credence, as long as it is not zero.* This is the argument most philosophers mean by "the wager", and it is the one the objections target.

**The finite threshold.** With $H$ finite, put $c = f_3 - f_1 > 0$ (the cost of a believing life if there is no God) and $g = H - f_2$ (the gain if there is). Then $EU(W) - EU(A) = pg - (1-p)c$, so wagering wins if and only if

$$p > p^* = \frac{c}{g + c}.$$

*In words: the wager needs a credence above the cost's share of the total stakes.* As $H \to \infty$, $p^* \to 0$, but for every finite $H$ the threshold is positive. Only infinity makes the conclusion hold for *every* positive credence.

**Three objections.** The [many-gods objection](../reference.md#many-gods-objection) (Diderot already in 1746) says the two columns are too few. Add a jealous god who rewards only *its* worshippers, and $W$ no longer dominates anything. With infinite payoffs in several columns, expected utility either ties the rival wagers or becomes undefined (Example 2). This is [1.1](01-01-acts-states-outcomes.md)'s partition problem with infinite stakes.

The [mixed-strategy objection](../reference.md#mixed-strategy-objection) (Antony Duff, *Analysis*, 1986; developed by Alan Hájek, *Philosophical Review*, 2003) says the conclusion does not single out $W$. Any strategy with *some* positive chance of ending at $W$, such as wagering only if a die shows 6, has expected utility $\tfrac16 p \cdot \infty + (\text{finite terms}) = \infty$, the same as $W$. So does doing nothing, if you give any positive probability to coming to believe anyway. Expected utility cannot tell them apart.

**Infinite utility and the vNM axioms.** The vNM theorem delivers a *real-valued* $u$ ([1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md)), so an outcome worth $\infty$ is already outside it. The axiom that fails is **continuity**: for salvation $S$ and finite outcomes $x \succ y$, it demands some $\alpha \in (0,1)$ with $\alpha S + (1-\alpha) y \sim x$. But every $\alpha > 0$ makes the lottery infinitely good, so none does. *In words: no chance of salvation is small enough to be traded against a finite good.* The infinite expected-utility ranking also clashes with the [independence axiom](../reference.md#independence-axiom). If $W \succ A$, independence (mixing both sides with $W$) gives $W \succ \tfrac16 W + \tfrac56 A$, yet both have expected utility $\infty$.

**Which axiom each side gives up.** The wagerer who keeps $H = \infty$ gives up continuity, and with it a ranking that respects independence among strategies. The critic who keeps the vNM axioms must make $H$ finite, which means [bounded](../reference.md#bounded-utility) or at least finite utility, and then the wager wins only above $p^*$. The many-gods objection attacks no axiom. It attacks the premise that $\{G, \neg G\}$ is the right partition.

**Where the argument is weakest.** The dominating-expectation argument has four premises, and each is contested. (i) The partition: the wagerer must give every rival god zero credence, or a credence ratio that infinity then erases. (ii) The credence: $p > 0$ is needed, and a credence of zero or an infinitesimal one blocks it. (iii) The arithmetic: infinite utility breaks continuity, makes every mixed strategy equally good, and so leaves the argument unable to recommend $W$ in particular. Replies exist, such as ranking strategies first by their probability of salvation, but each builds a new decision theory rather than applying the old one. (iv) The act: wagering must be something you can do, and whether belief can be willed is [`philosophy-of-religion`](../../philosophy-of-religion/syllabus.md) [5.3](../../philosophy-of-religion/lessons/05-03-pragmatic-arguments-the-wager-and-the-will-to-believe.md)'s question. On the other side, critics who bound utility owe an account of why a bounded scale is correct ([6.2](06-02-fanaticism-and-tiny-probabilities.md)).

## Picture

![Log-log graph of the threshold credence p star against the finite value of salvation H, using Example 1 payoffs, where a believing life costs 5 if there is no God. The curve falls from about one third at H equal to 10 to about 5 billionths at H equal to a billion. The region above the curve, where wagering wins, is shaded. A dashed horizontal line marks credence 0.001 and meets the curve at H equal to 4,995. A dot marks H equal to one million, where p star equals 1 over 200,001.](assets/06-01-fig1.svg)

The threshold $p^* = 5/(H+5)$ for Example 1's payoffs. Every finite $H$ leaves some positive credences below the curve. Pascal's argument from dominating expectation is what you get when the curve is allowed to reach the axis.

## Worked examples

**Example 1 (clean): a finite heaven.** Let $H = 1{,}000{,}000$, $f_1 = 95$, $f_2 = 0$, $f_3 = 100$. So a believing life costs $c = 5$ if there is no God, and the gain if there is one is $g = 1{,}000{,}000$. The threshold:

$$p^* = \frac{5}{1{,}000{,}005} = \frac{1}{200{,}001} \approx 5.0 \times 10^{-6}.$$

At credence $p = 0.001$:

$$\begin{aligned}
EU(W) &= 0.001(1{,}000{,}000) + 0.999(95) = 1{,}094.905,\\
EU(A) &= 0.999(100) = 99.9.
\end{aligned}$$

Wagering wins by a wide margin. But a credence of one in a million loses, and no finite $H$ rescues every credence. The dominance argument is unavailable from the start, since $f_1 < f_3$.

**Example 2 (hard): two jealous gods.** Gods $G_1$ and $G_2$ each reward only their own worshippers with $+\infty$ and punish everyone else with $-\infty$. Give them credences $0.02$ and $0.01$, and $\neg G$ the rest. Acts: $W_1$, $W_2$, $A$. Then

$$EU(W_1) = 0.02(\infty) + 0.01(-\infty) + 0.97 f_1,$$

which is $\infty - \infty$: undefined. The same holds for $W_2$, and $EU(A) = -\infty$. Here the tool strains. The expectation rule cannot rank $W_1$ above $W_2$ even though $G_1$ is twice as likely. Intuitively, worshipping the likelier god looks better, but that judgment comes from comparing probabilities of salvation, not from expected utility. Problem P2 shows the finite-punishment version, where the two wagers tie.

## Watch out

- **You might think the many-gods objection is just "other religions exist".** Its formal point is narrower: once there is a column where $W$ does worse than some rival, dominance is gone, and with infinite payoffs in several columns expectation stops ranking the wagers. It is [1.1](01-01-acts-states-outcomes.md)'s partition problem.
- **You might think a huge finite $H$ does the same work as $H = \infty$.** It does not. Every finite $H$ leaves a positive threshold $p^*$, so a sufficiently skeptical agent rationally declines. Only infinity removes the threshold, and infinity is what breaks continuity.
- **You might think the wager argues that God exists.** It gives a practical reason to *act*, at a fixed credence. Nothing in the matrix changes $p$.

## One-liner

> Pascal's wager is three arguments: dominance (needs "lose nothing"), expectation (needs even odds), and dominating expectation (needs an infinite prize), and the infinite prize that rescues the third also breaks continuity, ties every mixed strategy, and leaves rival gods unranked.

## Problems

**P1 (🟢)** *(Formal (a)–(c).)* Take $H = 6{,}000$, $f_1 = 70$, $f_2 = 0$, $f_3 = 100$.

(a) Find the threshold credence $p^*$ as an exact fraction.
(b) Your credence is $p = 0.001$. For which $H$ (keeping the $f$'s fixed) does wagering win?
(c) Is there any finite $H$ for which wagering wins at every positive credence? One sentence, with the reason.

**P2 (🟡)** *(Formal (a)–(b) · Exegetical (c).)* Two jealous gods. States $G_1$, $G_2$, $N$ (neither) with credences $0.02$, $0.01$, $0.97$. Each god gives its own worshippers $H$ and gives everyone else $-10{,}000$. Worshipping either god yields 90 if neither exists; abstaining ($A$) yields 100.

(a) With $H = 10{,}000$, compute $EU(W_1)$, $EU(W_2)$ and $EU(A)$, and give the verdict.
(b) Now let $H = \infty$ with the punishment still $-10{,}000$. Compute the three expected utilities. What happened to the 2 : 1 credence ratio?
(c) Does any act dominate another in this matrix? Say in two sentences which of Pascal's three argument forms survives the third column and which does not.

**P3 (🔴, optional)** *(Formal (a) · Exegetical (b) · Evaluative (c).)* Strategy $D$: roll a fair die and wager for God only if it shows 6.

(a) With P1's payoffs and $p = 0.01$, compute $EU(W)$, $EU(A)$ and $EU(D)$ exactly. Then set $H = \infty$ and compare $EU(W)$ with $EU(D)$.
(b) Which vNM axiom does an outcome of infinite utility violate, and which axiom requires $W \succ D$ once $W \succ A$? Three sentences.
(c) A wagerer replies: rank strategies first by their probability of salvation, and use finite expected utility only to break ties. Does this escape the mixed-strategy objection, and what does it give up? 80 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c))*

(a) $c = f_3 - f_1 = 30$ and $g = H - f_2 = 6{,}000$, so

$$p^* = \frac{30}{6{,}030} = \frac{1}{201}.$$

(b) Wagering wins iff $0.001 > 30/(H + 30)$, that is, $H + 30 > 30{,}000$, so $H > 29{,}970$. At $H = 29{,}970$ the threshold is exactly $1/1{,}000$ and the acts tie.

(c) No. For every finite $H$, $p^* = 30/(H+30) > 0$, so any credence below it makes abstaining better. For example, $H = 10^6$ gives $p^* = 3/100{,}003$.

**Must hit, strict:** $p^* = 1/201$; $H > 29{,}970$ (strict); "no", because $p^*$ is positive for every finite $H$.

**Wrong turns:** using $H$ instead of $g = H - f_2$ (harmless here since $f_2 = 0$, but wrong in general). Answering (c) "yes, a large enough $H$": that fixes the credence first, which the question does not.

---

**P2** *(Formal (a)–(b) · Exegetical (c))*

(a)

$$\begin{aligned}
EU(W_1) &= 0.02(10{,}000) + 0.01(-10{,}000) + 0.97(90)\\
&= 200 - 100 + 87.3 = 187.3,\\
EU(W_2) &= -200 + 100 + 87.3 = -12.7,\\
EU(A) &= -200 - 100 + 97 = -203.
\end{aligned}$$

Worship $G_1$, the likelier god.

(b) $EU(W_1) = 0.02(\infty) - 100 + 87.3 = \infty$ and $EU(W_2) = 0.01(\infty) - 200 + 87.3 = \infty$, while $EU(A) = -203$. Both wagers beat abstaining, but they tie. The 2 : 1 ratio no longer matters, since twice infinity is infinity.

(c) No act dominates. $W_1$ beats $A$ under $G_1$, ties under $G_2$, and loses under $N$ (90 vs 100). $W_1$ and $W_2$ each win in one god's column and lose in the other's.

**Must hit, strict:**

- (a) 187.3, −12.7, −203; verdict $W_1$.
- (b) $\infty, \infty, -203$; the credence ratio is erased.
- (c) No dominance, with a column cited. Dominance does not survive. Dominating expectation survives only as "wager for *some* god" and cannot choose between gods. Expectation with $p = \tfrac12$ no longer applies, since there are three states.

**Wrong turns:** claiming in (b) that $W_1$ still wins "because it is likelier". That is a probability-of-salvation comparison, not expected utility. Claiming $W_1$ dominates $A$ because it is never worse under a god, forgetting the $N$ column.

---

**P3** *(Formal (a) · Exegetical (b) · Evaluative (c))*

(a) With $H = 6{,}000$, $f_1 = 70$, $f_2 = 0$, $f_3 = 100$ and $p = \tfrac1{100}$:

$$\begin{aligned}
EU(W) &= 0.01(6{,}000) + 0.99(70) = 129.3,\\
EU(A) &= 0.99(100) = 99,\\
EU(D) &= \tfrac16(129.3) + \tfrac56(99) = 104.05.
\end{aligned}$$

So $W \succ D \succ A$, and $EU(W) - EU(D) = \tfrac56(129.3 - 99) = 25.25$. With $H = \infty$, $EU(W) = \infty$ and $EU(D) = \tfrac16\cdot\infty + \tfrac56(99) = \infty$, a tie.

**Must hit, strict (a):** 129.3, 99, 104.05 exactly; $W$ beats $D$ by 25.25 when $H$ is finite; a tie at $\infty$ when $H$ is infinite.

**Must hit, strict (b):**

- Continuity: for salvation $S$ and finite $x \succ y$, no $\alpha \in (0,1)$ makes $\alpha S + (1-\alpha)y \sim x$, since every such lottery is infinitely good.
- Independence: from $W \succ A$, mixing both with $W$ gives $W \succ \tfrac16 W + \tfrac56 A = D$.
- The infinite expected-utility ranking says $W \sim D$, contradicting that.

**Must hit, any verdict (c):**

- It escapes: $W$ gives salvation with probability $0.01$, $D$ with $\tfrac1{600}$, $A$ with 0, so $W$ ranks first.
- The cost, stated precisely: a lexical ranking violates continuity openly, and has no real-valued expected-utility representation.
- Whether the cost generalizes: the rule makes any gain in the chance of salvation, however tiny, outweigh any finite cost. That is the fanaticism [6.2](06-02-fanaticism-and-tiny-probabilities.md) examines.

**Wrong turns:** in (b), naming completeness or transitivity. The infinite ranking is complete and transitive. In (c), treating the lexical rule as ordinary expected utility "with infinity handled properly".

**Model answer (c), one of several:** It escapes. Ranked by chance of salvation, $W$ (0.01) beats $D$ (1/600), which beats $A$ (0). The price is that the rule is lexical: no finite good can outweigh any increase in the chance of salvation, which is a deliberate denial of continuity and of an expected-utility representation. A defender says that is exactly the right structure for an infinite good. A critic says it licenses paying any finite cost for a one-in-a-billion gain in the chance of salvation.

</details>

## Flashback

**From Lesson [5.3](05-03-population-ethics-total-and-average.md) (Population ethics I: total and average):** *(Formal (a)–(b) · Exegetical (c).)* Population $P$ is 400 people at welfare 50. Population $Q$ is 600 people at $-20$, lives worse than none. In each case the option is to add 100 new people, all at welfare $v$, leaving everyone else unchanged.

(a) Take $v = 30$. Using the marginal rule for averages, find the change in $P$'s average and in $P$'s total.
(b) For $P$, and then for $Q$, find every $v$ at which the total view and the average view strictly disagree about adding the 100, and say which view approves.
(c) Now take $v = -10$ for both populations. Give the average view's verdict on each, and name the two principles 5.3 says the total view keeps and the average view gives up, tying each to one of these verdicts. Two sentences.

<details>
<summary>Solution</summary>

(a) By the marginal rule, with $N(P) = 400$ and $\bar w(P) = 50$:

$$\Delta\bar w = \frac{100\,(30 - 50)}{500} = -4,$$

so the average falls from 50 to 46 (check: $23{,}000/500 = 46$). The total rises by $100 \times 30 = 3{,}000$, from 20,000 to 23,000.

(b) The total view approves exactly when $v > 0$. The average view approves exactly when $v$ exceeds the existing average.

- $P$: they disagree for $0 < v < 50$. The total view approves (good lives added) and the average view disapproves (below the average of 50).
- $Q$: they disagree for $-20 < v < 0$. The average view approves (above the average of $-20$) and the total view disapproves (lives worse than none added).

At $v = 0$ or $v$ equal to the existing average, one view is indifferent, so there is no strict disagreement.

**Must hit, strict (c):**

- Verdicts: $P$'s average falls to $19{,}000/500 = 38$, so worse. $Q$'s average rises to $-13{,}000/700 = -\tfrac{130}{7} \approx -18.57$, so better. The total view calls both worse, by 1,000.
- Negative addition (adding only lives worse than none makes things worse) is violated in $Q$, the hell structure.
- Separability (an addition's value does not depend on unaffected people) is violated by the pair: the same 100 newcomers are a loss next to $P$ and a gain next to $Q$.

**Wrong turns:** treating $v > 0$ as the average view's test. Its threshold is the existing average, which is why the bands in (b) sit on opposite sides of zero. Averaging 50 and 30 to get 40 in (a), which ignores the 4 : 1 head count. Calling the $P$ verdict at $v = -10$ a violation of negative addition: there the average view agrees that the addition is worse.

</details>

## Connections

- **Backward:** the matrix and the dominance test are [1.1](01-01-acts-states-outcomes.md)'s, and the many-gods objection is its partition problem with infinite stakes. [1.2](01-02-from-expected-value-to-expected-utility.md) met infinite expectations in the St. Petersburg game and bounded utility as one cure. [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) used continuity to calibrate every prize, and this lesson exhibits the prize it cannot calibrate.
- **Forward:** [6.2](06-02-fanaticism-and-tiny-probabilities.md) drops the theology and keeps the structure: tiny probabilities of huge finite stakes, Pascal's mugging and fanaticism. [6.3](06-03-moral-uncertainty.md) runs expected-value reasoning over moral theories, where the same swamping by one huge value reappears.
- **Sideways:** [`philosophy-of-religion`](../../philosophy-of-religion/syllabus.md) [5.3](../../philosophy-of-religion/lessons/05-03-pragmatic-arguments-the-wager-and-the-will-to-believe.md) takes this lesson's matrices as given and asks whether belief can be chosen and whether wagered belief is the belief that would be rewarded. Separating Hacking's three arguments is reconstruction as in [`philosophical-method` 1.3](../../philosophical-method/lessons/01-03-reconstruction-and-charity.md), and naming which premise each objection attacks is [finding the crux](../../philosophical-method/lessons/04-03-finding-the-crux.md).

# Decision Theory · Lesson 4.1: Newcomb's problem

> ⏱ ~15 min · Module 4: Newcomb's problem and the causal-evidential split · Builds on: [1.1 Acts, states, outcomes](01-01-acts-states-outcomes.md), [3.3 Decisions under ignorance](03-03-decisions-under-ignorance.md), [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) · Unlocks: [4.2 Evidential decision theory](04-02-evidential-decision-theory.md), [4.3 Causal decision theory](04-03-causal-decision-theory.md)

## Why this matters

Lesson [1.1](01-01-acts-states-outcomes.md) ended with a warning: the dominance argument needs the states to "not depend on" your act, and that phrase has two readings. [Newcomb's problem](../reference.md#newcombs-problem) is the case built to pull them apart. Two principles that every earlier lesson treated as allies, dominance and expected utility, give opposite answers. Each answer has serious defenders, and philosophers remain divided over which is right. This lesson sets out both arguments at full strength and finds the exact premise where they collide. Module 4 is then the fight over that premise.

## The idea

The puzzle is due to the physicist William Newcomb. Robert Nozick published it in 1969, in a volume of essays in honor of Carl Hempel, as a conflict between two principles of choice.

There are two boxes. The clear one visibly holds a modest sum. The opaque one holds either a large sum or nothing. You may take the opaque box alone ("one-box") or both boxes ("two-box"). The catch is a predictor with an excellent track record. Yesterday it predicted your choice. If it predicted one-boxing, it put the large sum in the opaque box. If it predicted two-boxing, it left the box empty. The boxes are now sealed, and nothing you do can change their contents.

**The two-boxer's case.** The money is already there or it isn't. If the box is full, taking both gets you the large sum plus the modest one. If it is empty, taking both gets you the modest sum instead of nothing. Imagine a friend standing behind the boxes who can see inside. Whatever she sees, she is silently urging you to take both. Leaving free money on the table cannot be rational.

**The one-boxer's case.** Look at the record. Nearly everyone who took one box walked away with the large sum. Nearly everyone who took both got only the modest one. You have every reason to expect the same pattern to hold for you. So the choice with the higher expected payoff, given everything you know, is one box. Refusing it out of attachment to an argument means expecting to end up poorer.

Both arguments use the same table. They disagree about what probabilities go in it.

## The formal version

**Setup.** The clear box holds $T > 0$ dollars. The opaque box holds $M > T$ if the predictor predicted one-boxing, and $0$ otherwise. Take money as utility, so $u$ is linear. States: $F$ (opaque box full) and $E$ (empty). Acts: $\text{One}$ and $\text{Two}$. The [decision matrix](../reference.md#decision-matrix):

| | $F$ | $E$ |
|---|---|---|
| One | $M$ | $0$ |
| Two | $M+T$ | $T$ |

**The dominance argument.** Two-boxing beats one-boxing by exactly $T$ in each column, so Two strictly [dominates](../reference.md#dominance) One. Nozick's **dominance principle**: never choose a dominated act. *In words: whatever is in the box, the clear box is a bonus.*

**The expected-utility argument.** Nozick's **expected-utility principle**: choose the act with the highest [expected utility](../reference.md#expected-utility), weighting each state by its probability *given the act*. Let

$$\Delta = P(F \mid \text{One}) - P(F \mid \text{Two}),$$

the amount by which one-boxing raises your credence that the box is full. Then

$$\begin{aligned}
EU(\text{One}) &= P(F\mid\text{One})\,M,\\
EU(\text{Two}) &= P(F\mid\text{Two})\,(M+T) + P(E\mid\text{Two})\,T\\
&= P(F\mid\text{Two})\,M + T,\\
EU(\text{One}) - EU(\text{Two}) &= \Delta M - T.
\end{aligned}$$

*In words: one-boxing wins exactly when the evidence it carries about the big box, $\Delta$, times the big prize outweighs the sure bonus $T$.*

**The threshold.** Suppose the predictor is right with the same probability $p$ whatever you choose: $P(F\mid\text{One}) = P(E\mid\text{Two}) = p$. Then $\Delta = 2p - 1$, and one-boxing wins if and only if

$$p > p^* = \frac{M+T}{2M} = \frac{1}{2} + \frac{T}{2M}.$$

*In words: the predictor must beat a coin flip by half the ratio of the small prize to the large one.* With $r = T/M$, $p^* = (1+r)/2$. As $r \to 0$ the threshold falls toward $1/2$, so a barely-better-than-chance predictor is enough. As $r \to 1$ it rises toward $1$, so no fallible predictor is enough.

**Where they collide.** Recall the dominance argument as reconstructed in [1.1](01-01-acts-states-outcomes.md):

1. Exactly one of the states obtains, and which one does not depend on what I choose.
2. In every state, Two yields a better outcome than One.
3. If I knew which state obtained, I should choose Two.

∴ **C.** I should choose Two.

Premises 2 and 3 are not in dispute. Everything turns on premise 1. In 1.1, independence meant $P(s\mid a) = P(s)$. Under that condition $\Delta = 0$, so $EU(\text{One}) - EU(\text{Two}) = -T$, and the two principles agree. Newcomb's problem is built so that the two readings of "does not depend on" come apart:

- **Causally**, premise 1 is true. The contents were fixed yesterday, so the states are not [act-dependent](../reference.md#act-dependent-states) in the causal sense.
- **Evidentially**, premise 1 is false. Your choice is strong evidence about what was predicted, so $\Delta > 0$.

This is the course's signature move: name the principle each side gives up. The **two-boxer** reads premise 1 causally. She keeps dominance over causally fixed states, and so gives up weighting states by act-conditional probabilities whenever the act only *indicates* the state rather than causing it. The **one-boxer** reads premise 1 evidentially. She keeps act-conditional weighting, and so gives up the dominance principle for states that are causally fixed but evidentially dependent on the act. These two positions become [evidential decision theory](../reference.md#evidential-decision-theory) ([4.2](04-02-evidential-decision-theory.md)) and [causal decision theory](../reference.md#causal-decision-theory) ([4.3](04-03-causal-decision-theory.md)).

**Where the argument is weakest.** Each argument is weakest exactly where the other is strongest. The expected-utility argument treats your act as news about a state it cannot affect. Critics call this "managing the news": one-boxing makes you an agent whom you can expect to be rich, but it makes no money. The dominance argument has its own exposure. As $p \to 1$ the two-boxer predictably ends up with about $T$ while the one-boxer ends up with about $M$, and she must call that outcome rational. Each side also charges the other with begging the question. Hold the contents fixed, and two-boxing is obviously right. Hold the correlation fixed, and one-boxing is obviously right. The setup itself also needs one premise both sides accept: that a reliable predictor of a free choice is at least coherent, which some philosophers doubt.

## Picture

![Graph of expected payoff against p, the chance the prediction matches your act, with a big prize of 10,000 and a small prize of 1,000. The one-box line rises from 0 to 10,000. The two-box line falls from 11,000 to 1,000. They cross at p equal to 0.55, where both are worth 5,500, and the region to the right is shaded as one box wins. At p equal to 0.9 the values are 9,000 for one box and 2,000 for two boxes.](assets/04-01-fig1.svg)

The two acts' expected payoffs against the predictor's reliability, with $M =$ 10,000 and $T =$ 1,000. The lines cross at $p^* = 0.55$. Dominance would draw no such picture, because it never consults $p$.

## Worked examples

**Example 1 (clean): the threshold.** Take $M = 10{,}000$, $T = 1{,}000$ and a predictor right 90% of the time whatever you choose. The matrix:

| | $F$ | $E$ |
|---|---|---|
| One | 10,000 | 0 |
| Two | 11,000 | 1,000 |

Two wins each column by 1,000. Now the expected values:

$$\begin{aligned}
EU(\text{One}) &= 0.9(10{,}000) = 9{,}000,\\
EU(\text{Two}) &= 0.1(11{,}000) + 0.9(1{,}000) = 2{,}000.
\end{aligned}$$

Here $\Delta = 0.9 - 0.1 = 0.8$ and $\Delta M - T = 8{,}000 - 1{,}000 = 7{,}000$, matching the difference. The threshold is $p^* = 11{,}000/20{,}000 = 0.55$. A predictor right only 60% of the time would already favor one box on this argument, giving 6,000 against 5,000.

**Example 2 (hard): a track record is not a reliability.** A "predictor" has filled the opaque box for every one of its past players, and 90% of them one-boxed. Its hit rate is 90%. But it is not responding to anything about you: $P(F\mid\text{One}) = P(F\mid\text{Two}) = 1$. So $\Delta = 0$, $EU(\text{One}) = 10{,}000$ and $EU(\text{Two}) = 11{,}000$. Both arguments say take both boxes.

Change the case so that the predictor is right about 90% of one-boxers but only 60% of two-boxers. Then $P(F\mid\text{One}) = 0.9$ and $P(F\mid\text{Two}) = 0.4$, so $\Delta = 0.5$. Expected utility gives 9,000 against $0.4(10{,}000) + 1{,}000 = 5{,}000$, a gap of $\Delta M - T = 4{,}000$, and one-boxing wins. Its overall hit rate depends on how many players one-box, and that rate plays no part in the calculation.

Here the tool strains. The expected-utility argument needs your credence in $F$ conditional on *your* act, for someone exactly like you. Whether your act is evidence at all depends on what the predictor tracks and what you already know about yourself. If you already know the feature it reads, your act may tell you nothing new. That is the opening for the tickle defence in [4.2](04-02-evidential-decision-theory.md).

## Watch out

- **You might think Newcomb's dominance argument fails the way the rehearsal argument did in [1.1](01-01-acts-states-outcomes.md).** In the rehearsal case your act *caused* the state, and every theory agreed. Here nothing you do affects the contents. Premise 1 is true on one reading and false on the other, so the argument is contested, not refuted.
- **You might think $p$ in the threshold is the predictor's track record.** It is $P(\text{prediction matches}\mid\text{your act})$, assumed equal across acts. A track record can be high while $\Delta = 0$ (Example 2). The general condition is $\Delta M > T$.
- **You might think one-boxing needs backward causation or an infallible predictor.** It needs neither. The expected-utility argument requires only $p > p^*$, and no one-boxer claims the choice changes the box. The threshold does assume utility linear in money. With concave utility the comparison changes, though the dominance verdict does not.

## One-liner

> Newcomb's problem is a case where your choice is evidence about a state it cannot cause: dominance reads independence causally and takes both boxes, expected utility reads it evidentially and takes one once $\Delta M > T$.

## Problems

**P1 (🟢)** *(Formal (a)–(c).)* The opaque box holds 600 dollars or nothing; the clear box holds 150. The predictor is right with probability $p$ whatever you choose. Money is utility.

(a) Compute $EU(\text{One})$ and $EU(\text{Two})$ at $p = 0.8$.
(b) Find the threshold $p^*$ above which the expected-utility argument favors one box.
(c) Now fix $p = 0.9$ and let the clear box hold $T$ instead of 150. For which $T$ does the expected-utility argument favor one box? What does the dominance argument recommend for those same $T$?

**P2 (🟡)** *(Exegetical (a) · Evaluative (b).)*

(a) Using the three-premise dominance argument above, say which premise the one-boxer denies, and on which reading of "does not depend on" the two-boxer accepts it. Then name the principle each side gives up. Three sentences.
(b) The two-boxer's friend argument: a friend who can see into the opaque box would, whatever she saw, want you to take both. Give the one-boxer's best reply, and say whether the friend argument begs the question against her. 120 words or fewer. Any verdict passes.

**P3 (🔴, optional)** *(Formal (a)–(b) · Evaluative (c).)* Transparent Newcomb. Both boxes are clear. The big box holds 600 dollars if the predictor predicted that you would take only the big box *on seeing it full*; otherwise it is empty. The small box holds 150. The predictor gets your policy right with probability 0.9.

(a) You see the big box full. Give the payoff of each act. Do dominance and expected utility, conditioning on what you see, agree?
(b) Before the boxes are filled, compare the expected payoffs of two policies: A, "take only the big box if it is full, take both if it is empty", and B, "always take both".
(c) In 80 words or fewer: what does the gap between (a) and (b) put pressure on? Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c))*

(a) With $M = 600$ and $T = 150$:

$$\begin{aligned}
EU(\text{One}) &= 0.8(600) = 480,\\
EU(\text{Two}) &= 0.2(750) + 0.8(150) = 150 + 120 = 270.
\end{aligned}$$

Check: $\Delta = 0.8 - 0.2 = 0.6$, and $\Delta M - T = 360 - 150 = 210 = 480 - 270$.

(b) $p^* = (600 + 150)/(2 \cdot 600) = 750/1{,}200 = 5/8 = 0.625$.

(c) At $p = 0.9$, $\Delta = 0.8$, so one box wins iff $0.8(600) > T$, that is, $T < 480$. At $T = 480$ the two acts tie at 540. Dominance recommends two boxes for every $T > 0$, since Two beats One by $T$ in each column.

**Must hit, strict:** both expected values with the conditional weights; $p^* = 0.625$; $T < 480$ (strict); dominance favors Two for every positive $T$.

**Wrong turns:** weighting both acts by the same probability of a full box, which gives Two the win by $T$ for every probability. Writing $EU(\text{Two})$ as $0.8(750)$, which uses the one-boxer's chance of a full box.

---

**P2** *(Exegetical (a) · Evaluative (b))*

**Must hit, strict (a):**

- The one-boxer denies premise 1 on its evidential reading: your choice changes your credence in the state ($\Delta > 0$).
- The two-boxer accepts it on its causal reading: the contents were fixed before the choice.
- The two-boxer gives up act-conditional weighting where the act is only evidence; the one-boxer gives up dominance over causally fixed states.

**Must hit, any verdict (b):**

- The friend argument stated precisely: it evaluates acts from a viewpoint where the state is known, so it is premise 3 of the dominance argument in vivid form.
- The one-boxer's reply: you lack the friend's information. Your choice is evidence about what she sees, so her advice in each state does not settle what you, uncertain, should do. The friend herself would bet that a one-boxer finds the box full.
- A judgement on begging the question, with a reason: it does if it assumes that only causally fixed states matter, and it does not if the state-by-state preference is independently compelling.

**Wrong turns:** answering (b) by asserting that the predictor makes the box full "because" you one-box, which concedes backward causation, a claim no one-boxer needs. Treating the friend argument as a new premise rather than a restatement of premise 3.

**Model answer (b), one of several:** The friend knows the state; I don't. Her advice is right for anyone who knows what is in the box. My question is what to do when my own choice is my best evidence about what is in the box. She would also bet heavily that a one-boxer finds it full. The argument begs the question if it is offered against the one-boxer, because the one-boxer's whole claim is that state-by-state reasoning is valid only when the act carries no evidence about the state. Two-boxers reply that it is not question-begging: the intuition that you should do what a better-informed well-wisher would want is independent support for premise 3. Either way, the dispute is over premise 1, not premise 3.

---

**P3** *(Formal (a)–(b) · Evaluative (c))*

(a) Seeing the box full, one box gives 600 and both give 750. The state is now known, so expected utility conditional on what you see is 600 against 750. Two boxes win on both arguments, and they agree.

(b) Policy A: with probability 0.9 the predictor reads A correctly and fills the box, and you take 600. With probability 0.1 it misreads and leaves the box empty, and you take both for 150. So A is worth $0.9(600) + 0.1(150) = 555$.

Policy B: with probability 0.9 it reads B correctly and leaves the box empty, giving 150. With probability 0.1 it misreads and fills the box, and you take both for 750. So B is worth $0.9(150) + 0.1(750) = 210$.

**Must hit, strict (a)–(b):** 600 vs 750 with both arguments agreeing; 555 vs 210 with each branch traced.

**Must hit, any verdict (c):**

- The act that wins at the moment of choice (two boxes) belongs to the policy that does worse in advance.
- The question this raises: should rational choice evaluate acts at the moment of choice, or the policies or dispositions that generate them?
- Each side's cost: act evaluation leaves the agent predictably poorer, while policy evaluation tells the agent to pass up 150 she can see.

**Wrong turns:** claiming in (a) that one-boxing wins on expected utility because the predictor is reliable. Once you see the box full there is nothing left to learn about it. Computing B as if the predictor always fills the box.

**Model answer (c), one of several:** Once the box is seen, every theory that evaluates acts takes both. Yet agents with policy A expect 555 and agents with policy B expect 210. That pressures the assumption that rationality is a property of acts at the moment of choice. Perhaps it belongs to policies or dispositions. The cost of that view is visible: it tells you to leave 150 untouched. The newer theories named in [4.4](04-04-hard-cases-for-both.md) take this step.

</details>

## Flashback

**From Lesson [3.3](03-03-decisions-under-ignorance.md) (Decisions under ignorance):** *(Formal (a)–(b) · Exegetical (c).)* A choice under ignorance over states $w_1, w_2, w_3$, with no probabilities. Utilities: J $= (1, 9, 5)$, K $= (9, 1, 5)$, and L $= (5, 5, 5)$, which pays the average of J and K in every state.

(a) Find the choice under maximin, Laplace and minimax regret. Show the regret table.
(b) With the optimism index $\alpha$ on the best case, $H_\alpha = \alpha\max + (1-\alpha)\min$, find every $\alpha$ at which Hurwicz ranks L strictly below both J and K.
(c) Name the Milnor axiom that (b) violates, and say in one sentence why Hurwicz's scoring produces the violation.

<details>
<summary>Solution</summary>

(a) Worst cases $1, 1, 5$: maximin chooses L. Averages $15/3 = 5$ for all three: Laplace ties J, K and L. Column bests are $9, 9, 5$:

| | $w_1$ | $w_2$ | $w_3$ | max |
|---|---|---|---|---|
| J | 8 | 0 | 0 | 8 |
| K | 0 | 8 | 0 | 8 |
| L | 4 | 4 | 0 | 4 |

Minimax regret chooses L.

(b) J and K both have maximum 9 and minimum 1, so $H_\alpha(J) = H_\alpha(K) = 1 + 8\alpha$; $H_\alpha(L) = 5$. L is strictly below both iff $1 + 8\alpha > 5$, that is $1/2 < \alpha \le 1$. At $\alpha = 1/2$ all three tie, and below it L is chosen.

**Must hit, strict (c):**

- Convexity: J and K are ranked equal, so an act paying their average in every state must not be ranked below them, and for $\alpha > 1/2$ it is.
- Hurwicz reads only each act's extremes, and averaging J with K pulls the best case down from 9 to 5 as well as the worst case up from 1 to 5; an optimist weights the lost top more than the raised floor.

**Wrong turns:** putting $\alpha$ on the worst case, which turns the answer into $\alpha < 1/2$; fine only if the convention is stated and kept. Computing regret from each act's own best payoff rather than the column's best. Naming column linearity: no column was shifted here.

</details>

## Connections

- **Backward:** [1.1](01-01-acts-states-outcomes.md) gave the dominance argument and flagged the two readings of premise 1; this lesson is the case that forces a choice between them. $P(F\mid\text{One})$ is ordinary conditioning from [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md). [3.3](03-03-decisions-under-ignorance.md) chose without probabilities, where dominance is the least contested tool; Newcomb is where even dominance becomes contested.
- **Forward:** [4.2](04-02-evidential-decision-theory.md) makes the one-boxer's principle a theory (Jeffrey's conditional expected utility) and tests it on medical cases. [4.3](04-03-causal-decision-theory.md) makes the two-boxer's principle a theory, using [dependency hypotheses](../reference.md#dependency-hypothesis), and takes up the "why ain'cha rich?" exchange. [4.4](04-04-hard-cases-for-both.md) builds cases that embarrass each.
- **Sideways:** a one-shot prisoner's dilemma against a near-copy of yourself has the same structure. Defection strictly dominates, as in [`grad-game-theory` 3.3](../../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md), but your choice is evidence about your twin's. David Lewis argued in 1979 that the prisoner's dilemma is a Newcomb problem. Finding the crux ([`philosophical-method` 4.3](../../philosophical-method/lessons/04-03-finding-the-crux.md)) is exactly what "Where they collide" does: two valid arguments, one shared table, one premise read two ways.

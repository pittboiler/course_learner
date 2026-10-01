# Decision Theory · Lesson 4.3: Causal decision theory

> ⏱ ~15 min · Module 4: Newcomb's problem and the causal-evidential split · Builds on: [4.1 Newcomb's problem](04-01-newcombs-problem.md), [4.2 Evidential decision theory](04-02-evidential-decision-theory.md), [1.1 Acts, states, outcomes](01-01-acts-states-outcomes.md) · Unlocks: [4.4 Hard cases for both](04-04-hard-cases-for-both.md), [5.1 Harsanyi's aggregation theorem](05-01-harsanyis-aggregation-theorem.md)

## Why this matters

[Evidential decision theory](../reference.md#evidential-decision-theory) ([4.2](04-02-evidential-decision-theory.md)) ranks an act by the news it would bring: how good you expect the world to be, given that you learn you did it. In the smoking lesion that tells you to abstain from a harmless pleasure because smoking is a symptom, and in [Newcomb's problem](../reference.md#newcombs-problem) it tells you to take one box. Causal decision theory says that is choosing to look good rather than to do good. This lesson builds the rival: expected utility computed with what your act would *bring about*, holding fixed what it cannot touch. Then it states the most famous objection to it, "if you're so smart, why ain'cha rich?", and the reply, at full strength.

## The idea

Two questions you can ask about an act:

1. *If I learn that I did A, what should I expect?* That is the evidential question.
2. *If I were to do A, what would happen?* That is the causal question.

Usually they have the same answer. If I learn that I pressed the brake, I expect the car to slow, and pressing it would slow the car. They come apart only when the act is evidence for something it does not cause. That happens when a common cause sits upstream of both the act and the outcome, as with the lesion behind smoking and cancer, or the predictor's reading of your character behind both your choice and the box's contents.

[Causal decision theory](../reference.md#causal-decision-theory) (CDT) answers question 2. Its recipe: split the world by everything you cannot affect, give each such state your *unconditional* credence, and let your act change only what lies downstream of it. In Newcomb's problem the contents of the opaque box were fixed yesterday. Whatever your credence that it is full, taking the clear box as well adds its contents. So CDT takes both boxes, and it does so for every credence you might have.

## The formal version

**Notation.** Acts $A$; outcomes valued by utility $u$; $P$ is your credence. Run the Newcomb case with the opaque box holding $M=1{,}000$ dollars if the predictor foresaw one-boxing (else nothing) and the clear box holding $T=50$. Money is utility.

**The evidential value, for contrast** ([4.2](04-02-evidential-decision-theory.md)). Over states $S$,

$$V(A)=\sum_S P(S\mid A)\,u(A,S).$$

*In words: weight each state by how likely it is given that you do A.*

**Lewis's formulation.** A [dependency hypothesis](../reference.md#dependency-hypothesis) $K$ is a maximally specific proposition about how the things you care about do and would depend causally on your present options (Lewis, "Causal Decision Theory", *Australasian Journal of Philosophy*, 1981). Because it settles what each act would do, your act cannot influence which $K$ is true. Causal expected utility is

$$U(A)=\sum_K P(K)\,u(A\wedge K).$$

*In words: the same sum as expected utility, but the weights are unconditional credences over the ways the world could causally respond to you.* [1.1](01-01-acts-states-outcomes.md) built dependency hypotheses for the rehearsal case ("well either way", "well only if I rehearse", "badly either way"). There the dependence was causal, so the evidential and causal theories agreed.

**Gibbard and Harper's formulation** ("Counterfactuals and Two Kinds of Expected Utility", 1978) weights outcomes by the probability of a counterfactual:

$$U(A)=\sum_S P(A \mathbin{\Box\!\!\to} S)\,u(A,S),$$

where $A \mathbin{\Box\!\!\to} S$ reads "if I were to do A, S would obtain". *In words: replace "S, given that I do A" with "S, if I were to do A".*

**Joyce's formulation** (*The Foundations of Causal Decision Theory*, 1999) keeps Jeffrey's machinery and swaps the conditional probability $P(\cdot\mid A)$ for a probability *image* $P^A$. Imaging moves each not-A world's credence to the A-worlds causally nearest to it, rather than renormalizing over the A-worlds you already had. *In words: suppose A by imagining it brought about, not by learning it.* The three formulations agree on every case in this lesson.

**Causal partitions with downstream effects.** When the act does cause something, Skyrms's version (*Causal Necessity*, 1980) partitions by factors $K$ outside your influence, and lets the act work inside each:

$$U(A)=\sum_K P(K)\sum_C P(C\mid A\wedge K)\,u(A\wedge C).$$

*In words: hold fixed what you can't affect at its unconditional credence, then condition on your act for whatever it can affect.* Problem 1 uses it.

**Newcomb, causally.** The dependency hypotheses are "full" and "empty"; each settles the outcome of both acts. Let $q$ be your credence that the box is full:

$$\begin{aligned}
U(\text{one}) &= q\,M = 1{,}000\,q,\\
U(\text{two}) &= q\,(M+T)+(1-q)\,T = 1{,}000\,q+50.
\end{aligned}$$

*In words: two-boxing is ahead by exactly the clear box's 50, whatever $q$ is.* This is [dominance](../reference.md#dominance) returned with a licence. Dominance needed states the act cannot influence, and CDT's states are *defined* so that it cannot.

**Where the theories split.** If $P(K\mid A)=P(K)$ for every $K$ and $A$, then $V=U$ and both reduce to Savage's expected utility. They diverge exactly when the act is evidence about a state it does not cause.

**The argument for two-boxing**, reconstructed:

1. The box's contents are causally independent of my choice.
2. Whatever the contents, taking both boxes gets me 50 more than taking one would.
3. A rational choice is the one whose consequences are best, given everything outside my control.

∴ Take both boxes.

**Where the argument is weakest.** Premise 3, and the word "given". The evidentialist accepts 1 and 2 and denies that the right weights are unconditional. By the time you choose, your choice is the best evidence you have about the predictor's reading of you, and a theory that refuses to use that evidence evaluates your act with credences you know are wrong. CDT's cost shows twice. First, it imports causation or counterfactuals as primitives, which Jeffrey's theory was designed to do without. Second, it needs a credence over the $K$s at the moment of choice, and that credence can itself shift as you lean towards one act; [4.4](04-04-hard-cases-for-both.md) shows how it can then fail to settle. The axiom each side gives up: the evidentialist gives up dominance over causally independent states; the causalist gives up evaluating an act by everything learning it would tell you.

## Picture

![Two panels. Left: causal expected utility against q, the credence the opaque box is full. One box rises from 0 to 1,000 and two boxes from 50 to 1,050, two parallel lines 50 apart. Right: evidential value against predictor reliability p. One box rises from 0 to 1,000, two boxes falls from 1,050 to 50, and they cross at p = 0.525](assets/04-03-fig1.svg)

The same case, two theories. Left: CDT's lines never meet, so no credence about the box changes its verdict. Right: EDT's lines cross at $p=(M+T)/(2M)=0.525$, [4.1](04-01-newcombs-problem.md)'s threshold formula applied to these amounts. Above it, the act that is better news is one box.

## Worked examples

**Example 1 (clean): the [smoking lesion](../reference.md#smoking-lesion), causally.** A gene $G$ causes both a taste for smoking and cancer; smoking itself causes nothing. Smoking is worth $+10$, cancer $-100$. $P(\text{cancer}\mid G)=0.8$, $P(\text{cancer}\mid \neg G)=0.1$, and your unconditional credence is $P(G)=0.2$. But smokers mostly have the gene: $P(G\mid\text{smoke})=0.6$, $P(G\mid\text{abstain})=0.1$. These fit together if you think you smoke with chance 0.2, since $0.2(0.6)+0.8(0.1)=0.2$.

*CDT.* The gene is the causal partition. Unconditionally, $P(\text{cancer})=0.2(0.8)+0.8(0.1)=0.24$, the same whichever act you pick:

$$\begin{aligned}
U(\text{smoke}) &= 10-100(0.24)=-14,\\
U(\text{abstain}) &= -100(0.24)=-24.
\end{aligned}$$

Smoke, by exactly the 10 that smoking is worth, for every value of $P(G)$.

*Naive EDT.* $P(\text{cancer}\mid\text{smoke})=0.6(0.8)+0.4(0.1)=0.52$ and $P(\text{cancer}\mid\text{abstain})=0.1(0.8)+0.9(0.1)=0.17$, so $V(\text{smoke})=10-52=-42$ and $V(\text{abstain})=-17$. Abstain. Most people, including many evidentialists, find CDT's verdict right here, which is why [4.2](04-02-evidential-decision-theory.md)'s tickle defence works to bring EDT into line. Newcomb has the same causal structure, with the predictor's reading of you as the common cause, so the causalist presses: the cases are alike, so the verdicts should be alike.

**Example 2 (hard): "why ain'cha rich?"** Run Newcomb many times with a predictor of reliability $p=0.9$. One-boxers find the box full 90% of the time and average $0.9(1{,}000)=900$. Two-boxers find it full 10% of the time and average $0.1(1{,}050)+0.9(50)=150$. The one-boxer's [taunt](../reference.md#why-aint-cha-rich), which gives David Lewis's short 1981 paper its title ("Why Ain'cha Rich?", *Noûs*): if your theory is so rational, why do its followers predictably walk away with a sixth of what mine do?

At full strength, the taunt says that a theory of rational choice exists to serve your interests. A theory whose devotees reliably do worse, in a situation they fully understand, has misidentified what rationality is for.

The causalist reply, at full strength: compare each two-boxer with *herself*, not with a one-boxer. Each two-boxer faced a box already filled or emptied; had she taken one box, she would have got 50 less, averaging $0.1(1{,}000)=100$ instead of 150. Each one-boxer, had she taken both, would have got 50 more. The one-boxers are richer because the predictor *pays for a disposition*, the disposition to make what CDT calls the irrational choice. A game can reward irrationality, just as a billionaire can pay people for believing something false. That the believers end up richer does not show their belief was rational.

The tool strains here. Both sides compute the same numbers. The dispute is over which comparison counts: across agents of different types (the one-boxer's), or between the options one agent actually had (the causalist's).

## Watch out

- **You might think** CDT ignores the predictor's accuracy. It uses it, in the credence $q$, but it never lets your own choice update $q$ as a reason for that choice. The lines in the picture are parallel, not absent.
- **You might think** CDT and EDT disagree whenever states depend on acts. If the dependence is causal, as in [1.1](01-01-acts-states-outcomes.md)'s rehearsal case, they agree. They split only when an act is evidence without being a cause.
- **You might think** the causalist reply concedes that two-boxers end up poorer by their own lights. It does not: by CDT's standard, every two-boxer did 50 better than her one alternative. The disagreement is over the standard, and naming it is the crux.

## One-liner

> Causal decision theory weights outcomes by what your act would bring about, not by what it would reveal, so it two-boxes at every credence and answers "why ain'cha rich?" with "because the game paid the irrational".

## Problems

**P1 (🟢)** *(Formal (a)–(b) · Exegetical (c).)* A gene $K$ (carriers have $P(K)=0.3$ unconditionally) raises the risk of a disease worth $-100$. A supplement costs 2 and causally lowers the risk: $P(\text{disease})$ is 0.5 for carriers who take it and 0.6 for carriers who don't; 0.05 for non-carriers who take it and 0.1 for non-carriers who don't. Carriers are drawn to the supplement: $P(K\mid\text{take})=0.6$, $P(K\mid\text{not})=0.15$.

(a) Compute causal expected utility of taking and not taking it, using the causal partition by $K$.
(b) Compute the evidential value of each act.
(c) Which theory recommends what, and which single feature of the case makes them diverge? One or two sentences.

**P2 (🟡)** *(Exegetical.)* For each invented case, say whether EDT and CDT agree or diverge in their *values*, and why, in one sentence each.

(a) A voter is sure her single vote will not change the outcome, but she believes that people who think like her vote the way she does, so her choice is evidence of how the election goes.
(b) A candidate decides whether to wear a suit to an interview; wearing it raises her chance of an offer, and nothing else links the suit to the offer.
(c) Newcomb's problem with a predictor known to be right exactly half the time.

**P3 (🔴, optional)** *(Formal (a) · Evaluative (b).)* Newcomb with $M=1{,}000$ and $T=50$ is played many times; the predictor is right with probability 0.8.

(a) Compute the average payout of one-boxers and of two-boxers, and the average that two-boxers would have received, by CDT's counterfactual, had each of them taken one box instead.
(b) Steelman the "why ain'cha rich?" argument for one-boxing, then give the causalist's best reply. 150 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c))*

(a) Hold $P(K)=0.3$ fixed and let the act work within each cell:

$$\begin{aligned}
U(\text{take}) &= -2-100\,[0.3(0.5)+0.7(0.05)]\\
&= -2-100(0.185)=-20.5,\\
U(\text{not}) &= -100\,[0.3(0.6)+0.7(0.1)]\\
&= -100(0.25)=-25.
\end{aligned}$$

Take, by 4.5. In fact for any credence $k$ in $K$, $U(\text{take})-U(\text{not})=3+5k>0$, so CDT takes it however likely you think you are a carrier.

(b) Condition the gene on the act:

$$\begin{aligned}
V(\text{take}) &= -2-100\,[0.6(0.5)+0.4(0.05)]\\
&= -2-100(0.32)=-34,\\
V(\text{not}) &= -100\,[0.15(0.6)+0.85(0.1)]\\
&= -100(0.175)=-17.5.
\end{aligned}$$

Don't take, by 16.5. (Consistency: $P(K)=0.3$ matches a 1/3 chance of taking, since $\tfrac13(0.6)+\tfrac23(0.15)=0.3$.)

(c) CDT takes the supplement; naive EDT refuses it. They diverge because taking it is *evidence* of carrying the gene, which the act does not cause; the supplement's real causal benefit is outweighed, evidentially, by the bad news.

**Must hit, strict (a):** unconditional $P(K)=0.3$ in both acts; the cost of 2 on the take branch; $-20.5$ against $-25$.

**Must hit, strict (b):** $P(K\mid\text{act})$ in place of $P(K)$; $-34$ against $-17.5$.

**Must hit, strict (c):** opposite verdicts; the act–gene correlation without causation as the source.

**Wrong turns:** using $P(K\mid\text{take})$ in the causal computation, which is just EDT again. Dropping the supplement's causal effect, as if this were the pure smoking lesion: CDT conditions on the act *within* each $K$ cell.

---

**P2** *(Exegetical)*

(a) **Diverge.** Her vote causes nothing, but it is evidence about how like-minded people vote, so EDT sees good news in voting and CDT sees only the cost.

(b) **Agree.** The suit causes the offer and nothing else correlates them, so learning that she wore it and making her wear it shift the probability of an offer by the same amount.

(c) **Agree.** A predictor right half the time makes the choice no evidence about the box, $P(\text{full}\mid\text{one})=P(\text{full}\mid\text{two})=P(\text{full})$, so $V=U$ and both take two boxes.

**Must hit, strict:** diverge, agree, agree; each reason stated as evidence without causation (a), causal dependence only (b), no evidential dependence (c).

**Wrong turns:** calling (b) a divergence because the state depends on the act: causal dependence is exactly what CDT's partition handles. Calling (c) a divergence because it is "a Newcomb case": with no correlation there is nothing for EDT to condition on.

---

**P3** *(Formal (a) · Evaluative (b))*

(a) One-boxers: $0.8(1{,}000)=800$. Two-boxers: the box is full only when the predictor erred, so $0.2(1{,}050)+0.8(50)=250$. Had each two-boxer taken one box with her box unchanged, she would have received 50 less: $0.2(1{,}000)=200$.

**Must hit, strict (a):** 800, 250 and 200, with the two-boxers' box contents held fixed in the counterfactual.

**Must hit, any verdict (b):**

- The argument stated precisely: one-boxers predictably and knowingly end up richer (800 against 250), and a theory of choice should not reliably make its followers worse off.
- The reply stated precisely: the right comparison is between the options one agent had, and there each two-boxer beat her alternative (250 against 200); the predictor rewards a disposition, so the game rewards what CDT calls irrationality.
- The premise in dispute named: whether rationality is judged by comparing types of agent or by comparing an agent's available acts, with dominance and the evidential principle as the axioms at stake.

**Wrong turns:** treating (a) as settling (b): both sides accept all three numbers. Saying the reply concedes one-boxing is better "for her": it denies she could have been a one-boxer facing a full box.

**Model answer (b), one of several:** Rationality is the policy that serves your ends, and in a case you understand completely, one-boxers average 800 and two-boxers 250. A theory that knowingly sends its followers home with less than a third of what its rivals get has mistaken a calculation for a goal. The causalist replies that the averages compare different people facing different boxes. Each two-boxer, with the box she actually faced, got 50 more than taking one box would have given her: 250 rather than 200. The one-boxers are rich because the predictor pays people disposed to leave money on the table, and a game that pays for irrationality makes the irrational rich. The crux is which comparison rationality answers to: across agents, as the argument assumes, or across one agent's options, as the reply does.

</details>

## Flashback

**From Lesson [4.1](04-01-newcombs-problem.md) (Newcomb's problem):** *(Formal (a)–(b).)* The opaque box holds 4,000 dollars or nothing; the clear box holds 500. Money is utility. The predictor fills the box for 60% of one-boxers and leaves it empty for 50% of two-boxers, so $P(F \mid \text{One}) = 0.6$ and $P(F \mid \text{Two}) = 0.5$. Of its past players, 80% one-boxed.

(a) Compute $EU(\text{One})$ and $EU(\text{Two})$ with act-conditional weights, and check the gap against $\Delta M - T$. Which act does the expected-utility argument favour?
(b) A colleague computes the predictor's overall hit rate, plugs it into $p^* = (M+T)/(2M)$, and concludes one-boxing wins. Reproduce his numbers, say what is wrong, and find how high $P(F \mid \text{One})$ would have to be, with $P(F \mid \text{Two})$ held at 0.5, for one-boxing to win.

<details>
<summary>Solution</summary>

(a) With $M = 4{,}000$ and $T = 500$:

$$\begin{aligned}
EU(\text{One}) &= 0.6(4{,}000) = 2{,}400,\\
EU(\text{Two}) &= 0.5(4{,}500) + 0.5(500) = 2{,}500.
\end{aligned}$$

$\Delta = 0.6 - 0.5 = 0.1$, and $\Delta M - T = 400 - 500 = -100 = 2{,}400 - 2{,}500$. Two boxes win, so here the expected-utility argument agrees with dominance.

(b) Hit rate: $0.8(0.6) + 0.2(0.5) = 0.58$. Threshold: $p^* = 4{,}500/8{,}000 = 0.5625$. Since $0.58 > 0.5625$, he says one box. The formula assumes the predictor is right with the same probability $p$ whichever act you take; this one is not, and a hit rate depends on how many players one-box, which plays no part in your calculation. The general condition is $\Delta M > T$, so with $P(F \mid \text{Two}) = 0.5$ one-boxing needs $\Delta > 500/4{,}000 = 0.125$, that is $P(F \mid \text{One}) > 0.625$.

**Wrong turns:** using the hit rate 0.58 as $P(F \mid \text{One})$, which gives 2,320 and still two boxes but for the wrong reason. Weighting both acts by the same chance of a full box, which makes Two win by $T$ automatically and hides the evidential reading of premise 1 altogether.

</details>

## Connections

- **Backward:** [1.1](01-01-acts-states-outcomes.md) found that dominance needs states the act cannot influence and built dependency hypotheses by hand; CDT makes that construction the theory. [4.1](04-01-newcombs-problem.md) set the clash, and [4.2](04-02-evidential-decision-theory.md) gave the rival that conditions on the act. Conditional probability itself is [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md).
- **Forward:** [4.4](04-04-hard-cases-for-both.md) turns the tables: cases where CDT's unconditional credence shifts as you deliberate, and ratifiability as a repair for both theories. [5.1](05-01-harsanyis-aggregation-theorem.md) returns to Savage-style expected utility, where states are act-independent and the two theories coincide.
- **Sideways:** Deciding which comparison "being better off" answers to is a crux in the sense of [`philosophical-method` 4.3](../../philosophical-method/lessons/04-03-finding-the-crux.md). The ex ante versus ex post Pareto split in [`philosophy-of-economics` 3.2](../../philosophy-of-economics/lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) is a cousin: which comparison of prospects counts.

# Epistemology · Lesson 5.2: Dutch books and accuracy

> ⏱ ~15 min · Module 5: Bayesian epistemology · Builds on: [5.1 Credences and probabilism](05-01-credences-and-probabilism.md) · Unlocks: [5.3 Conditionalization](05-03-conditionalization.md), [5.4 The problem of priors](05-04-the-problem-of-priors.md)

## Why this matters

[5.1](05-01-credences-and-probabilism.md) stated [probabilism](../reference.md#probabilism): credences ought to obey the probability axioms. It did not say why. Two arguments carry almost all the weight in the literature. The first is pragmatic: incoherent credences regard as fair a package of bets that loses money however the world turns out. The second is purely epistemic: incoherent credences are further from the truth than some coherent credences, *whatever* the truth is. This lesson builds the books, proves the second result in the simplest case, and locates the premise each argument cannot do without.

## The idea

Read your credence in $A$ the way [5.1](05-01-credences-and-probabilism.md)'s [betting interpretation](../reference.md#betting-interpretation) does: the price at which you regard a ticket paying 1 dollar if $A$ as fair, willing to buy it *or* sell it at that price. Now suppose your credence in rain is 0.6 and your credence in no rain is also 0.6. A bookie sells you both tickets for 1.20 dollars. Exactly one of them pays, so you collect 1 dollar. You have lost 20 cents, and you could have known that before looking out the window. That package is a **[Dutch book](../reference.md#dutch-book)**: a set of bets, each fair by your own lights, that together guarantee a loss.

The accuracy argument drops the bookie. Picture your credence pair as a point in the plane, and the two ways the world can go as the corners $(1,0)$ (rain) and $(0,1)$ (no rain). Being accurate means being close to the corner that is actual. Coherent credences lie on the segment joining the corners; your $(0.6, 0.6)$ lies off it. Drop a perpendicular onto the segment: the foot is closer to *both* corners. Whichever world is actual, you could have been more accurate, and you could have known that in advance too.

## The math

**Bets.** A bet on $A$ at price $\pi$ with stake $S$ pays the agent

$$S\,(\mathbb{1}_A - \pi),$$

where $\mathbb{1}_A$ is 1 if $A$ is true and 0 if not. $S > 0$ means she buys (pays $\pi S$, collects $S$ if $A$); $S < 0$ means she sells. At her price $\pi = \mathrm{cr}(A)$, where $\mathrm{cr}(A)$ is her credence in $A$, she counts the bet fair at either sign of $S$.

**[Dutch book theorem](../reference.md#dutch-book-theorem)** (sketched by Ramsey, "Truth and Probability", 1926; developed by de Finetti, 1937). If $\mathrm{cr}$, defined on a finite set of propositions, violates non-negativity, normality or finite additivity, there is a finite set of bets, each at her prices, whose total payoff is negative in every possible world.

*In words:* any violation of the axioms can be turned into a sure loss built only from bets she calls fair.

**[Converse Dutch book theorem](../reference.md#converse-dutch-book-theorem)** (proved independently by Kemeny, 1955, and Lehman, 1955). If $\mathrm{cr}$ satisfies the axioms, no finite set of bets at her prices guarantees a loss.

*In words:* coherence is exactly the condition of being unbookable, so the argument cannot be turned against the coherent agent too.

The constructions are in Example 1. Each violation has a direction, and the bookie trades against it: where her prices for the cells of a partition sum to more than 1, he sells her every ticket; where they sum to less, he buys every ticket from her.

**Accuracy.** Let $A_1, \dots, A_n$ be the propositions she has credences in, and let a world $w$ assign $w(A_i) = 1$ if $A_i$ is true there and 0 if not. The **[Brier score](../reference.md#brier-score)** (introduced by Brier in 1950 to score weather forecasters) measures inaccuracy:

$$B(\mathrm{cr}, w) = \sum_{i=1}^{n} \big(\mathrm{cr}(A_i) - w(A_i)\big)^2 .$$

*In words:* the squared distance between your credences and the truth-values; lower is better, 0 is omniscience.

**[Accuracy dominance](../reference.md#accuracy-dominance) theorem** (de Finetti, 1974, for the Brier score; Joyce, "A Nonpragmatic Vindication of Probabilism", 1998, for a broad class of inaccuracy measures; Predd and five coauthors, 2009, for every continuous, strictly proper measure). (i) Every incoherent $\mathrm{cr}$ is *strictly dominated*: some coherent $\mathrm{cr}'$ has lower inaccuracy in every world. (ii) No coherent $\mathrm{cr}$ is even weakly dominated.

*In words:* incoherence guarantees avoidable inaccuracy; coherence never does.

**Proof, two-cell case.** Take the agenda $\{A, \neg A\}$ and write $c = (x, y) = (\mathrm{cr}(A), \mathrm{cr}(\neg A))$ with $x, y \in [0,1]$. The two worlds are $w_A = (1,0)$ and $w_{\neg A} = (0,1)$, and $B(c, w) = |c - w|^2$. The coherent credences are the points of the segment $L = \{(t, 1-t) : 0 \le t \le 1\}$, which contains both worlds.

*(i)* Suppose $x + y \ne 1$. Set $\delta = (x + y - 1)/2 \ne 0$ and

$$p = (x - \delta,\ y - \delta) = \left(\tfrac{1 + x - y}{2},\ \tfrac{1 - x + y}{2}\right).$$

Its coordinates sum to 1, and since $x - y \in [-1, 1]$ both lie in $[0,1]$: $p$ is coherent. Now $c - p = (\delta, \delta)$, while for any $q \in L$ the vector $p - q$ is $k(1, -1)$ for some number $k$. Their dot product is $\delta \cdot k - \delta \cdot k = 0$, so they are orthogonal, and expanding $|c - q|^2 = |(c - p) + (p - q)|^2$ gives Pythagoras:

$$|c - q|^2 = |c - p|^2 + |p - q|^2 = 2\delta^2 + |p - q|^2 .$$

Put $q = w_A$ and then $q = w_{\neg A}$. For both worlds $w$,

$$B(c, w) = B(p, w) + 2\delta^2 > B(p, w).$$

So $p$ strictly dominates $c$, by the same margin $2\delta^2$ in each world.

*(ii)* Let $p = (t, 1-t)$ be coherent and $q$ any credence pair. Since $p = t\,w_A + (1-t)\,w_{\neg A}$, $p$'s own expectation of $q$'s inaccuracy is

$$\begin{aligned} &t\,|q - w_A|^2 + (1-t)\,|q - w_{\neg A}|^2 \\ &= |q - p|^2 + \big(t\,|p - w_A|^2 + (1-t)\,|p - w_{\neg A}|^2\big), \end{aligned}$$

by the same expansion (the cross terms cancel because $t(w_A - p) + (1-t)(w_{\neg A} - p) = 0$). If $q$ were no worse than $p$ in both worlds, the left side would be at most the bracket, forcing $|q - p|^2 \le 0$, so $q = p$. Nothing distinct from $p$ weakly dominates it. $\blacksquare$

*In words:* off the coherent line, the perpendicular foot beats you everywhere; on it, the Brier score makes each coherent point expect itself to be best, so nothing can beat it everywhere. That self-expectation property is **[strict propriety](../reference.md#strict-propriety)**, and step (ii) is where the proof spends it.

**Where the argument is weakest.** Each argument has one load-bearing premise. The Dutch book needs a bridge from betting to belief. Its defenders (notably Christensen, "Dutch-Book Arguments Depragmatized", 1996) say the sure loss is only a symptom: incoherent credences evaluate one and the same package as both fair and a certain loss, which is an inconsistency in the credences themselves, whether or not anyone bets. A critic replies that the evaluation of a package as the sum of its bets (the **[package principle](../reference.md#package-principle)**) holds only if utility is linear in money and bets do not interact, the assumption [`decision-theory` 2.2](../../decision-theory/lessons/02-02-probability-from-preference.md) flagged. The accuracy argument needs the Brier score, or at least strict propriety. Its defenders (Joyce, in a 2009 paper) motivate propriety as the demand that a coherent credence never recommend abandoning itself. A critic replies that "expected inaccuracy by your own lights" already uses probabilities, so the premise that selects the score presupposes the coherence it was meant to vindicate; and that dominance reasoning fails when the credences can affect what they are about (Caie and Greaves, both 2013).

## The picture

![Unit square with credence in A on the horizontal axis and credence in not-A on the vertical. A blue diagonal segment from the corner world not-A at 0,1 to the corner world A at 1,0 is the line of coherent credences. A red point c at 0.9, 0.3 lies above the line; a black perpendicular drops from it to a green point p at 0.8, 0.2 on the line, marked with a right angle. Labels give Brier scores: c scores 0.10 if A and 1.30 if not-A, p scores 0.08 if A and 1.28 if not-A. A thick green band on the line from about 0.78 to 0.81 marks the only coherent points that beat c in both worlds](assets/05-02-fig1.svg)

The red dashed lines are the distances that get squared into $c$'s scores. Each world is on the line, so the right angle at $p$ makes $p$ closer to both corners. The green band is narrow: most coherent points do not beat $c$.

## Worked examples

**Example 1 (clean): three books, stake 10 dollars per ticket.**

*Overcount.* $\mathrm{cr}(R) = 0.6$, $\mathrm{cr}(\neg R) = 0.6$. The bookie sells her both tickets.

| World | Paid | Collected | Net |
|---|---|---|---|
| $R$ | 12 | 10 | $-2$ |
| $\neg R$ | 12 | 10 | $-2$ |

*Undercount.* $\mathrm{cr}(R) = 0.3$, $\mathrm{cr}(\neg R) = 0.4$. Now he *buys* both tickets from her for $3 + 4 = 7$, and exactly one pays him 10. She loses 3 in every world. (The same move books $\mathrm{cr}(\top) < 1$, where $\top$ is the tautology; and if $\mathrm{cr}(A) < 0$, she will sell the $A$ ticket at a negative price, paying to take on a possible debt.)

*Additivity.* $A$ and $B$ are incompatible, with $\mathrm{cr}(A) = 0.2$, $\mathrm{cr}(B) = 0.3$, but $\mathrm{cr}(A \vee B) = 0.6$. She prices the disjunction above its parts, so he sells her the $A \vee B$ ticket for 6 and buys the $A$ and $B$ tickets from her for $2 + 3 = 5$.

| World | Cash | Ticket payouts | Net |
|---|---|---|---|
| $A$ | $-6 + 5$ | $+10 - 10$ | $-1$ |
| $B$ | $-6 + 5$ | $+10 - 10$ | $-1$ |
| neither | $-6 + 5$ | $0$ | $-1$ |

The payouts cancel in every world, so the loss is just the price gap, $6 - 5 = 1$.

**Example 2 (hard): the dominance, and a score that breaks it.** Take $c = (0.9, 0.3)$, the figure's point. Then $\delta = 0.1$ and $p = (0.8, 0.2)$.

$$B(c, w_A) = 0.1^2 + 0.3^2 = 0.10$$

$$B(p, w_A) = 0.2^2 + 0.2^2 = 0.08$$

$$B(c, w_{\neg A}) = 0.9^2 + 0.7^2 = 1.30$$

$$B(p, w_{\neg A}) = 0.8^2 + 0.8^2 = 1.28$$

Both gaps are $0.02 = 2\delta^2$, as the proof predicts. Now swap in the **absolute score**, $\sum_i |\mathrm{cr}(A_i) - w(A_i)|$. Then $c$ scores $0.1 + 0.3 = 0.4$ if $A$ and $0.9 + 0.7 = 1.6$ if $\neg A$, and $p$ scores $0.2 + 0.2 = 0.4$ and $0.8 + 0.8 = 1.6$: a tie in both worlds. In fact any pair $(x,y)$ in the square scores $(1 - x) + y$ and $x + (1 - y)$, which always total 2, so a coherent point beating $c$ in one world must lose in the other. Under this score no coherent point strictly dominates $c$. The absolute score is not strictly proper, and the theorem says nothing about it. The argument for probabilism is only as strong as the argument for the score.

## Watch out

- **You might think the Dutch book predicts that incoherent people go broke.** It shows only that their credences sanction a losing package. A real agent can decline; whether that matters is the debate above.
- **You might think the projection is the only coherent improvement, or that any coherent point will do.** Neither. For $c = (0.9, 0.3)$, coherent points with $\mathrm{cr}(A)$ from about 0.78 to 0.81 dominate it; $(0.4, 0.6)$ scores 0.72 if $A$, far worse than $c$'s 0.10.
- **You might think the theorem tells you which coherent credences to hold.** It rules out incoherence and nothing else. $(1, 0)$ is coherent and maximally inaccurate if $\neg A$. Which coherent function to start from is [5.4](05-04-the-problem-of-priors.md)'s problem.

## One-liner

> Incoherent credences can be booked for a sure loss and are beaten on accuracy in every world; coherent ones can be neither, provided bets add up and inaccuracy is measured by a strictly proper score.

## Problems

**P1 (🟢) *(Formal.)*** Before a match, an invented analyst, Ilse, has credences 0.40 in a home win, 0.25 in a draw and 0.20 in an away win (exactly one will happen), and 0.75 in "home win or draw". Bets are on tickets paying 20 dollars.

(a) Name the two ways her credences violate the axioms.
(b) Construct a book against the first violation using only the three outcome tickets. State each trade and her net in every outcome.
(c) Construct a separate book against the second violation, and state her net in every outcome.

**P2 (🟡) *(Formal.)*** An agent has $\mathrm{cr}(A) = 0.2$ and $\mathrm{cr}(\neg A) = 0.4$.

(a) Compute her Brier inaccuracy in each world.
(b) Find the coherent pair the two-cell proof constructs, compute its inaccuracy in each world, and verify that the improvement in each world equals $2\delta^2$.
(c) Show that the coherent pair $(0.35, 0.65)$ does *not* dominate her.

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)*** An invented forum post:

> "Dutch book arguments are a parlour trick. I never bet, so nobody can book me, so my credences can be whatever I like. And the accuracy argument is the same trick with a fancier payoff table: swap money for 'inaccuracy points' and you have the bookie back."

(a) In one sentence, name the premise of the Dutch book argument the first two sentences attack, and say whether the depragmatized version (Christensen) needs it.
(b) In 150 words or fewer: does accuracy dominance escape the "I just won't bet" objection, or does it, as the post says, bring the bookie back? Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c))*

(a) The outcomes form a partition, but $0.40 + 0.25 + 0.20 = 0.85 < 1$ (normality and additivity fail together on the partition). And additivity fails on the disjunction: $\mathrm{cr}(H \vee D) = 0.75 \ne \mathrm{cr}(H) + \mathrm{cr}(D) = 0.65$.

(b) The partition is undercounted, so the bookie **buys** all three tickets from her at her prices: she receives $20(0.40 + 0.25 + 0.20) = 8 + 5 + 4 = 17$. Exactly one ticket pays, so she pays out 20.

| Outcome | Received | Paid out | Net |
|---|---|---|---|
| home | 17 | 20 | $-3$ |
| draw | 17 | 20 | $-3$ |
| away | 17 | 20 | $-3$ |

(c) She prices $H \vee D$ above $H$ and $D$ together, so the bookie **sells** her the $H \vee D$ ticket for $20 \times 0.75 = 15$ and **buys** the $H$ and $D$ tickets from her for $8 + 5 = 13$. Cash: $-15 + 13 = -2$.

| Outcome | Cash | Payouts to her | Payouts by her | Net |
|---|---|---|---|---|
| home | $-2$ | 20 | 20 | $-2$ |
| draw | $-2$ | 20 | 20 | $-2$ |
| away | $-2$ | 0 | 0 | $-2$ |

**Wrong turns:** selling her the outcome tickets in (b), which would *win* her 3 in every outcome; the trade direction always goes against the error. Treating 0.75 vs 0.65 as an overcount of the partition rather than an additivity failure on a disjunction.

---

**P2** *(Formal (a)–(c))*

(a) $B(c, w_A) = (0.2 - 1)^2 + (0.4 - 0)^2 = 0.64 + 0.16 = 0.80$. $B(c, w_{\neg A}) = 0.2^2 + (0.4 - 1)^2 = 0.04 + 0.36 = 0.40$.

(b) $\delta = (0.2 + 0.4 - 1)/2 = -0.2$, so $p = (0.2 + 0.2,\ 0.4 + 0.2) = (0.4, 0.6)$.

$B(p, w_A) = 0.6^2 + 0.6^2 = 0.72$ and $B(p, w_{\neg A}) = 0.4^2 + 0.4^2 = 0.32$.

Improvements: $0.80 - 0.72 = 0.08$ and $0.40 - 0.32 = 0.08$, and $2\delta^2 = 2(0.04) = 0.08$. Lower in both worlds, so $p$ strictly dominates.

(c) With $q = (0.35, 0.65)$: $B(q, w_A) = 0.65^2 + 0.65^2 = 0.845 > 0.80$. It is better if $\neg A$ ($0.35^2 + 0.35^2 = 0.245 < 0.40$) but worse if $A$, so it does not dominate. (For reference, the coherent points that do dominate have $\mathrm{cr}(A)$ between about 0.368 and 0.447.)

**Wrong turns:** a sign slip giving $p = (0, 0.2)$, which is not coherent; always check the coordinates sum to 1. Concluding from (b) that every coherent point dominates.

---

**P3** *(Exegetical (a) · Evaluative (b))*

**Must hit, strict (a):**

- The attacked premise: that the defect of incoherent credences consists in (or is shown by) actual exposure to losing transactions. The depragmatized version does not need it: it locates the defect in the credences' evaluating a sure-loss package as fair, which holds whether or not she ever bets.

**Must hit, any verdict (b):**

- State what accuracy dominance compares: credence functions scored against truth-values, with no transaction, counterparty or opportunity to decline.
- Say what remains structurally similar: a scoring function plus dominance reasoning, so the "payoff table" analogy is apt in form.
- Name where the cost relocates: from the bet-to-belief bridge to the choice of inaccuracy measure (strict propriety; Example 2's absolute score) and to dominance reasoning.
- Say whether the refusal objection has an analogue: one cannot "decline" to be accurate or inaccurate, since one's credences are scored by the world whether or not anyone offers a bet.

**Wrong turns:** answering (b) by repeating Christensen's reply, which defends the Dutch book, not the accuracy argument. Claiming the accuracy argument needs no premise about the score.

**Model answer (b), one of several:** It escapes the refusal objection, because there is nothing to refuse. Inaccuracy is a relation between your credences and the truth; the world scores you whether or not a bookie shows up, so "I never bet" is no defence. The post is right about the form: both arguments pick a payoff and apply dominance. But the payoff is different in kind, and that changes where the argument is vulnerable. The Dutch book's weak point is the bridge from what you would pay to what you believe; the accuracy argument's is why inaccuracy should be measured by a strictly proper score at all, since the absolute score yields no dominance. So the bookie does not come back; the question "why this scoring rule?" takes his place.

</details>

## Flashback

**From Lesson [4.5](04-05-peer-disagreement.md) (Peer disagreement):** *(Exegetical.)* Find the crux. Ines and Rafe are chess coaches of equal strength, with equally good records at endgame analysis. Each spends an hour on the same endgame position. Ines concludes that White has a forced win; Rafe concludes that the position is a draw. An invented exchange:

> **Ines:** I've rechecked my winning line three times and every Black defence loses. So Rafe has missed something, and I'm staying near certain.
>
> **Rafe:** Your rechecks use the very analysis we disagree about. Before we compared, neither of us had any reason to think the other more likely to slip on a position like this. You should be as unsure as I now am.

(a) Which numbered premise of 4.5's conciliationist argument must Ines deny, and what principle does it state? Two sentences. (b) Name one kind of fact Ines could learn that would let her discount Rafe *without* violating that principle, with an example. Two sentences. (c) Ines replies: "Fine, I'll take the total evidence view, which lets me stay put." Does that view, as 4.5 states it, give her that? Two sentences.

<details>
<summary>Solution</summary>

**Must hit, strict (a):**

- Premise 2, Independence: her reasons for discounting a peer's view must not depend on the disputed reasoning itself.
- "I've rechecked my line, so Rafe has missed something" discounts him by rerunning the disputed analysis, which is exactly what Independence forbids.

**Must hit, strict (b):**

- A fact about Rafe's circumstances established independently of the disputed analysis: impairment, distraction, or a difference in the evidence he worked from.
- Example: she learns his diagram was misprinted with a pawn on the wrong square, so he analysed a different position (which also means they were not sharing the evidence, so not peers on this occasion).

**Must hit, strict (c):**

- Only conditionally. On the total evidence view she may move only a little *if* her reading of the position was in fact the correct one and the first-order evidence is rich; Rafe's verdict still counts as higher-order evidence, so she must move somewhat.
- It gives her no rule she can apply from the inside: whether she is the one who read the position correctly is what the disagreement puts in doubt, so "I'll stay put" does not follow from adopting the view.

**Wrong turns:** in (a), saying Ines denies premise 1, peerhood (she does not claim to be the better analyst; she infers Rafe's error from her own line); in (b), offering "Rafe's line has a flaw I can spot", which is the disputed analysis again; in (c), identifying the total evidence view with the right-reasons view.

</details>

## Connections

- **Backward:** [5.1](05-01-credences-and-probabilism.md) stated probabilism and the betting interpretation; the axioms themselves are [prob-stat-refresher 1.1](../../prob-stat-refresher/lessons/01-01-sample-spaces-events-axioms.md)'s. [`decision-theory` 2.2](../../decision-theory/lessons/02-02-probability-from-preference.md) read credence off preference and flagged the linear-utility assumption the package principle needs; [`decision-theory` 1.4](../../decision-theory/lessons/01-04-what-a-representation-theorem-shows.md)'s money pump is the Dutch book's cousin on the preference side.
- **Forward:** [5.3](05-03-conditionalization.md) books an agent across time, against an update plan rather than a snapshot. [5.4](05-04-the-problem-of-priors.md) takes up what coherence leaves open. [`philosophy-of-science`](../../philosophy-of-science/syllabus.md) builds Bayesian confirmation on probabilism and cites both arguments.
- **Sideways:** strict propriety is the property [`statistical-learning` 2.2](../../statistical-learning/lessons/02-02-logistic-regression-and-classification.md) needs for a classifier's outputs to be probabilities: a loss whose minimizer is the true probability. Cross-entropy has it, the hinge loss does not, exactly as the Brier score has it and the absolute score does not.

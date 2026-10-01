# Decision Theory · Lesson 3.2: Models of ambiguity

> ⏱ ~15 min · Module 3: Ambiguity and ignorance · Builds on: [3.1 The Ellsberg paradox](03-01-the-ellsberg-paradox.md), [2.3 The Allais paradox and the sure-thing principle](02-03-the-allais-paradox-and-the-sure-thing-principle.md) · Unlocks: [3.3 Decisions under ignorance](03-03-decisions-under-ignorance.md), [3.4 Choosing behind the veil: Rawls vs Harsanyi](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)

## Why this matters

[3.1](03-01-the-ellsberg-paradox.md) proved that the [Ellsberg](../reference.md#ellsberg-paradox) choices fit no single probability. That leaves two options: call the choices a mistake, or build a theory in which they are coherent. This lesson builds the main such theory, maxmin expected utility, and its generalization, alpha-maxmin. It then states the strongest case that the theory is not a theory of rationality at all: an agent who follows it will sometimes refuse free information.

## The idea

Recall 3.1's urn: 100 balls, 35 red, 65 black or yellow in unknown proportion. A Bayesian must commit to one number for the black balls. Suppose you can't honestly say more than "somewhere between 20 and 50". Then don't pretend. Keep the whole set of probabilities your evidence allows, and judge each bet by how it does across that set.

Which point in the set? A cautious agent scores each bet at its *worst* member. A bet on red wins with chance 0.35 whatever the black count, so its worst case is 0.35. A bet on black could win with chance 0.5, but its worst case is 0.2. Red wins. The same reasoning prefers black-or-yellow (a known 0.65) to red-or-yellow (anywhere from 0.5 to 0.8). Both Ellsberg choices fall out, with no inconsistency in the beliefs. The probabilities were never inconsistent; there were just too many of them.

## The formal version

**Setting.** $S$ is a finite set of states; an act $f$ assigns a consequence $f(s)$ to each state $s$; $u$ is a utility function on consequences; $E_P[u(f)] = \sum_s P(s)\,u(f(s))$ is the [expected utility](../reference.md#expected-utility) of $f$ under the probability $P$. Let $C$ be a nonempty, closed, convex set of probabilities on $S$.

**Maxmin expected utility** (Itzhak Gilboa and David Schmeidler, 1989):

$$V(f) = \min_{P \in C} E_P[u(f)].$$

*In words:* evaluate each act by its expected utility under the least favourable probability you consider possible, and choose the act whose worst case is best. If $C$ holds a single $P$, this is ordinary expected utility. If $C$ holds every probability on $S$, the worst case puts all weight on the worst state, and this is the maximin rule of [3.3](03-03-decisions-under-ignorance.md). [Maxmin EU](../reference.md#maxmin-expected-utility) lies between them.

**The representation theorem.** Gilboa and Schmeidler work in a framework where acts can be mixed state by state. They keep ordering, continuity and monotonicity, and replace full independence with two weaker axioms:

- **Certainty independence:** mixing two acts with the *same constant act* never reverses the ranking. *In words:* independence survives only when the common ingredient carries no ambiguity of its own.
- **Uncertainty aversion:** if $f \sim g$, then the half-and-half mixture of $f$ and $g$ is at least as good as $f$. *In words:* you like hedging, because blending two bets whose ambiguities offset can leave a mixture less ambiguous than either.

These axioms hold if and only if preferences maximize $V$ for some $u$ (unique up to positive affine transformation) and a unique closed convex $C$. The axiom given up is the one 3.1 found Ellsberg breaking: full independence, the mixture form of Savage's [sure-thing principle](../reference.md#sure-thing-principle).

**Alpha-maxmin.** Why weight only the worst case?

$$V_\alpha(f) = \alpha \min_{P \in C} E_P[u(f)] + (1-\alpha) \max_{P \in C} E_P[u(f)], \quad 0 \le \alpha \le 1.$$

*In words:* average the worst and best expected utilities, with $\alpha$ the weight on pessimism. $\alpha = 1$ is maxmin EU; $\alpha = 0$ is pure optimism. Paolo Ghirardato, Fabio Maccheroni and Massimo Marinacci (2004) gave a framework in which $C$ measures the ambiguity the agent *perceives* and $\alpha$ her *attitude* to it ([alpha-maxmin](../reference.md#alpha-maxmin)). Hurwicz's optimism index in 3.3 is the same idea applied to outcomes instead of expectations.

**Belief or decision rule?** The set $C$ has a second reading in epistemology: [imprecise credence](../reference.md#imprecise-credence), on which a rational belief state is itself a set of probability functions when the evidence is thin (Isaac Levi, James Joyce). A precise credence is one number per proposition ([`epistemology`](../../epistemology/syllabus.md) 5.1); an imprecise one is the set $C$, and as a decision model it is owned here. It does not fix a decision rule. Levi's rule permits any act that maximizes expected utility under *some* member of $C$. Maxmin picks the act best under the worst member. Rivals that drop sets of priors altogether include Schmeidler's (1989) Choquet expected utility, which uses a non-additive capacity, and the smooth model of Peter Klibanoff, Massimo Marinacci and Sujoy Mukerji (2005).

**The case against ambiguity aversion** (in the form pressed by Nabil Al-Najjar and Jonathan Weinstein, 2009):

1. For an expected-utility agent, [free information](../reference.md#value-of-information) can never lower the value of a decision (I. J. Good, 1967). *In words:* look before you leap; looking costs nothing.
2. A rational agent never strictly prefers to remain ignorant of free, relevant information, and never pays to avoid it.
3. A maxmin agent who updates each prior in $C$ by Bayes's rule, and chooses at each point by what lies ahead, sometimes strictly prefers ignorance (Example 2).

∴ **C.** Maxmin expected utility, so updated, is not a standard of rationality.

The axioms in play: Peter Hammond (1988) argued that **dynamic consistency** (you carry out the plan you made) and **consequentialism** (at each point, only what lies ahead matters) together force independence. Ellsberg choosers violate independence, so they must give up one of the two.

**Where the argument is weakest.** Premise 2 leans on premise 1, and premise 1 is a theorem *of* expected utility. Good's proof uses the very independence structure the ambiguity theorist rejects, so treating it as a constraint on any rational agent may beg the question. Defenders also have exits. A *sophisticated* chooser foresees her later choice and so declines the information. A *resolute* chooser (Edward McClennen, 1990) commits to her plan and gives up consequentialism. A third option replaces prior-by-prior updating with another rule. Each exit has a cost. Gilboa, Andrew Postlewaite and Schmeidler (2009) go further and deny that rationality means Savage's axioms at all. On their view a choice is irrational only if the agent, shown the analysis, would want to change it, and many Ellsberg choosers do not. Critics answer that paying to avoid free information is just such an analysis, and Adam Elga (2010) presses a parallel case against imprecise credence: an agent can reject each of two bets whose combination is a sure gain.

## Picture

![Line chart. Horizontal axis: number of black balls from 0 to 65 among the 65 non-red. Vertical axis: chance each bet wins. Red is flat at 0.35, black-or-yellow flat at 0.65, black rises from 0 to 0.65, red-or-yellow falls from 1 to 0.35. A shaded band marks the prior set from 20 to 50 black balls. Dots mark each bet's worst case inside the band: red 0.35, black 0.20 at 20, red-or-yellow 0.50 at 50, black-or-yellow 0.65.](assets/03-02-fig1.svg)

Each line is a bet's expected utility (prize 1 util) as a function of the unknown composition. A single-prior agent reads every line at one vertical slice; at $b = 35$ she is indifferent within both Ellsberg pairs. The maxmin agent reads each line at its own lowest point inside the band, and the two ambiguous bets (the dashed lines) bottom out at opposite ends of the band. That is why no single slice reproduces her choices.

## Worked examples

**Example 1 (clean): maxmin and alpha-maxmin on 3.1's urn.** 3.1's Example 2 let the experimenter pick any $b$ from 0 to 65; here the evidence narrows it. $C$: the black count $b$ ranges over 20 to 50; a winning bet pays 1 util, so each value is a chance of winning.

| Bet | Wins with chance | Worst case | Best case |
|---|---|---|---|
| Red ($f_1$) | $35/100$ | $0.35$ | $0.35$ |
| Black ($f_2$) | $b/100$ | $0.20$ ($b=20$) | $0.50$ ($b=50$) |
| Red or yellow ($f_3$) | $(100-b)/100$ | $0.50$ ($b=50$) | $0.80$ ($b=20$) |
| Black or yellow ($f_4$) | $65/100$ | $0.65$ | $0.65$ |

Maxmin: $0.35 > 0.20$ and $0.65 > 0.50$, so red over black and black-or-yellow over red-or-yellow. Those are the Ellsberg choices.

Alpha-maxmin:

$$\begin{aligned}
V_\alpha(\text{Black}) &= 0.2\alpha + 0.5(1-\alpha) = 0.5 - 0.3\alpha,\\
V_\alpha(\text{Red or yellow}) &= 0.5\alpha + 0.8(1-\alpha) = 0.8 - 0.3\alpha.
\end{aligned}$$

Red beats black iff $0.35 > 0.5 - 0.3\alpha$, that is $\alpha > 1/2$. Black-or-yellow beats red-or-yellow iff $0.65 > 0.8 - 0.3\alpha$, again $\alpha > 1/2$. Any $\alpha > 1/2$ yields the Ellsberg pattern, any $\alpha < 1/2$ the reverse (ambiguity seeking), and $\alpha = 1/2$ yields indifference in both pairs, as an EU agent with $b = 35$ would.

**Example 2 (hard): refusing free information.** Same agent, $\alpha = 1$. Ex ante she takes black-or-yellow (0.65) over red-or-yellow (0.50). Now the host offers, free, to say whether the drawn ball is yellow before she commits.

*If yellow:* both bets win. She doesn't care.

*If not yellow:* black-or-yellow is now a bet on black, red-or-yellow a bet on red. Updating each prior by Bayes's rule, with $35 + b$ non-yellow balls:

$$\begin{aligned}
\min_{b} P(\text{red} \mid \text{not yellow}) &= \min_b \tfrac{35}{35+b} = \tfrac{35}{85} = \tfrac{7}{17} \approx 0.41,\\
\min_{b} P(\text{black} \mid \text{not yellow}) &= \min_b \tfrac{b}{35+b} = \tfrac{20}{55} = \tfrac{4}{11} \approx 0.36.
\end{aligned}$$

She bets on red.

*The plan, judged ex ante.* Learning first means she ends up holding "win on red or yellow", worth $\min_b (100-b)/100 = 0.50$. Choosing now is worth 0.65. She strictly prefers not to learn, and if she can only choose after the host speaks, she would pay up to $0.65 - 0.50 = 0.15$ util to choose first. An EU agent, for any single $b$ from 0 to 65, never loses by learning (checked case by case, as Good's theorem guarantees). The source is the update: conditional on not-yellow, her worst case for black sits at $b = 20$. Ex ante, the worst case for the plan sits at $b = 50$. The worst-case prior shifts with the information, so the plan and the choice she will actually make come apart. That is [dynamic inconsistency](../reference.md#dynamic-inconsistency).

## Watch out

- **You might think maxmin EU is the maximin rule.** Maximin looks at the worst *outcome*. Maxmin EU looks at the worst *expected utility* over a set of probabilities, and with a singleton set it is plain expected utility. Maximin is the special case where $C$ is every probability.
- **You might think the width of $C$ measures ambiguity aversion.** In alpha-maxmin, $C$ is the ambiguity perceived and $\alpha$ the attitude to it. Example 1's set gives the Ellsberg pattern for every $\alpha > 1/2$ and its reverse below, so the same set fits opposite attitudes.
- **You might think the information-refuser is confused about the facts.** She predicts her own later choice correctly, and her beliefs never err. The trouble is structural: ambiguity aversion, prior-by-prior updating and consequentialism cannot all hold together.

## One-liner

> Keep a set of probabilities and score each act by its worst expected utility, and the Ellsberg choices become coherent; the price is that the worst case moves when you learn, so you may pay not to look.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** A firm faces three demand states $s_1, s_2, s_3$. Two forecasts disagree: $P = (1/2,\ 1/4,\ 1/4)$ and $Q = (1/6,\ 1/3,\ 1/2)$. The firm treats every mixture as possible, so $C = \{\lambda P + (1-\lambda) Q : 0 \le \lambda \le 1\}$. Three plans give utilities $f = (10, 6, 2)$, $g = (0, 6, 14)$, $h = (6, 6, 6)$ across the states.

(a) Compute each plan's maxmin expected utility over $C$ and say which the firm chooses.
(b) Under alpha-maxmin, find the value of $\alpha$ at which the choice switches, and the choice on each side.
(c) At $\alpha = 1/2$ each plan's value equals its expected utility under the single midpoint prior $\tfrac12 P + \tfrac12 Q$. In two sentences, say why, and what this shows about reading $\alpha$ as an ambiguity attitude.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** An urn holds 50 balls: 20 green and 30 white or purple, with the number of white $w$ anywhere from 5 to 25. A winning bet pays 1 util. The agent maximizes maxmin expected utility over that set and updates every prior by Bayes's rule.

(a) Compute her maxmin values for "white or purple" and "green or purple". She is then offered, free, the news of whether the ball is purple before she chooses. Find what she chooses after "not purple", the ex ante value of learning first, and the largest sure fee in utils she would pay to choose before the news.
(b) Three sentences or fewer: say what an expected-utility agent with any single value of $w$ would pay to *avoid* the news, and why; then say how a resolute chooser avoids the fee and which assumption she gives up.

**P3 (🔴, optional) *(Evaluative.)*** An **invented** op-ed, not the words of any real author:

> "Ambiguity aversion is a bias, like the gambler's fallacy. An agent who would pay to avoid free information is not cautious but confused, and decision theory should correct her, not model her."

Steelman ambiguity aversion as rational against this op-ed, then give the op-ed's best rejoinder. 150 words or fewer in total.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c), all strict.)*

(a) Expected utility is linear in $\lambda$, so its minimum over $C$ is at $P$ or $Q$.

$$\begin{aligned}
E_P[f] &= 5 + 1.5 + 0.5 = 7, & E_Q[f] &= \tfrac{10}{6} + 2 + 1 = \tfrac{14}{3},\\
E_P[g] &= 0 + 1.5 + 3.5 = 5, & E_Q[g] &= 0 + 2 + 7 = 9,\\
E_P[h] &= 6, & E_Q[h] &= 6.
\end{aligned}$$

Maxmin values: $f$: $14/3 \approx 4.67$; $g$: $5$; $h$: $6$. The firm chooses $h$.

(b) $V_\alpha(g) = 5\alpha + 9(1-\alpha) = 9 - 4\alpha$; $V_\alpha(f) = \tfrac{14}{3}\alpha + 7(1-\alpha) = 7 - \tfrac{7}{3}\alpha$; $V_\alpha(h) = 6$. Since $9 - 4\alpha > 7 - \tfrac{7}{3}\alpha$ for every $\alpha \le 1$, $g$ always beats $f$. And $g$ beats $h$ iff $9 - 4\alpha > 6$, that is $\alpha < 3/4$. So the firm chooses $g$ for $\alpha < 3/4$, $h$ for $\alpha > 3/4$, and is indifferent between them at $\alpha = 3/4$.

**Must hit, strict (a)–(b):**

- The minimum over a segment of priors is at an endpoint, because EU is linear in the prior.
- Maxmin values $14/3$, $5$, $6$; choice $h$.
- Switch at $\alpha = 3/4$: $g$ below, $h$ above; $f$ is never chosen.

**Must hit, strict (c):**

- $E_{\lambda P + (1-\lambda)Q} = \lambda E_P + (1-\lambda) E_Q$, so at $\lambda = 1/2$ the midpoint EU is the average of the two endpoint EUs, which are the min and max. That average is $V_{1/2}$. Check: $g$ gives 7 both ways.
- So with a two-forecast $C$, a 1/2-maxmin agent is behaviourally a single-prior EU agent. Whether $\alpha$ expresses aversion depends on the shape of $C$, not on $\alpha$ alone.

**Wrong turns:** taking the minimum of the *outcomes* (0 for $g$), which is maximin, not maxmin EU. Testing interior mixtures and missing that the endpoints suffice.

**Model answer:** (a) $14/3$, $5$, $6$; choose $h$. (b) Choose $g$ if $\alpha < 3/4$, $h$ if $\alpha > 3/4$. (c) EU is linear in the prior, so the midpoint prior's EU is the average of the endpoint EUs, which is exactly $V_{1/2}$. Here $\alpha = 1/2$ is ambiguity neutrality, but only because $C$ is a segment; $\alpha$ is an attitude relative to a given $C$.

---

**P2** *(Formal (a) · Exegetical (b), both strict.)*

(a) White or purple wins on 30 balls whatever $w$ is: $30/50 = 3/5$. Green or purple wins on $20 + (30 - w)$ balls, worst at $w = 25$: $25/50 = 1/2$. She prefers white or purple.

After "not purple" there are $20 + w$ balls, and her two bets become a bet on white and a bet on green:

$$\begin{aligned}
\min_w P(\text{green} \mid \text{not purple}) &= \min_w \tfrac{20}{20+w} = \tfrac{20}{45} = \tfrac{4}{9},\\
\min_w P(\text{white} \mid \text{not purple}) &= \min_w \tfrac{w}{20+w} = \tfrac{5}{25} = \tfrac{1}{5}.
\end{aligned}$$

She bets on green. If purple, both win. So learning first leaves her holding "green or purple", worth $1/2$ ex ante. Choosing first is worth $3/5$. She pays any fee $c$ with $3/5 - c > 1/2$, so up to $1/10$ util.

**Must hit, strict (a):** $3/5$ and $1/2$; green after not-purple ($4/9 > 1/5$); plan worth $1/2$; maximum fee $1/10$.

**Must hit, strict (b):**

- Nothing: for a single prior the news can only raise or keep the expected value of her choice (Good's theorem), so she would never pay to avoid it.
- A resolute chooser commits to the ex ante plan, bets on white after "not purple", and so keeps the $3/5$ without paying.
- She gives up consequentialism: her choice at the node depends on the plan she made, not only on what lies ahead.

**Wrong turns:** updating only the single worst ex ante prior ($w = 25$), which gives green $20/45$ and white $25/45$, so white; that is not prior-by-prior updating and it hides the inconsistency. Saying the resolute chooser gives up Bayesian updating: she keeps her conditional beliefs and overrides the choice they recommend.

**Model answer:** (a) $3/5$ vs $1/2$; after "not purple" green ($4/9$) beats white ($1/5$), so the learn-first plan is green or purple, worth $1/2$; the fee is up to $1/10$. (b) An EU agent pays nothing, since free information never lowers her expected value. A resolute chooser sticks with white after "not purple", giving up consequentialism.

---

**P3** *(Evaluative; the verdict is not graded.)*

**Must hit, any verdict:**

- The disanalogy, or the case for the analogy: the gambler's fallacy is a false belief about chances, while the ambiguity-averse agent holds no false belief. Her "error", if any, is in how she acts on thin evidence.
- Name the axiom: the op-ed relies on Good's theorem, which presupposes independence (the sure-thing principle); the steelman can charge it with begging the question, or concede it and give up consequentialism (resolute choice) or prior-by-prior updating.
- A positive reason on the steelman side: a single precise prior claims information the agent lacks, and maxmin protects her against the composition she cannot rule out.
- The rejoinder must engage the steelman's best point, for example that the information-refuser pays a real, exploitable cost for no change in her evidence, or that resolute choice simply means acting against her own preferences at the node.

**Wrong turns:** arguing that ambiguity aversion is common, so rational: that is descriptive. Treating "violates Savage's axioms" as decisive without defending the axioms.

**Model answer, one of several:** *Steelman:* The gambler's fallacy is a false belief; the ambiguity-averse agent has none. When her evidence fixes a proportion only within a range, a single prior would invent precision she lacks. The op-ed's charge rests on Good's theorem, which assumes the independence axiom at issue, so it begs the question. And she can avoid the fee by resolute choice, committing to her plan. *Rejoinder:* Resolution means doing at the node what she then judges worse, so either way she acts against her own considered evaluation. A theory under which an agent who understands her situation pays to keep her evidence poorer has given up the one thing evidence is for.

</details>

## Flashback

**From Lesson [2.4](02-04-risk-beyond-curvature.md) (Risk beyond curvature: non-expected-utility theories):** *(Formal (a)–(b).)* Three agents value money linearly, $u(x) = x$, and differ only in their risk functions: $r(p) = p^2$, $r(p) = p$, and $r(p) = \sqrt{p}$. Gamble $G$ pays 0 dollars with probability 0.36, 60 with 0.48, and 100 with 0.16.

(a) Compute each agent's risk-weighted expected utility of $G$, which is her certainty equivalent in dollars.
(b) Each is offered 40 dollars for sure instead of $G$. Who takes it? In one sentence, say which property of $r$ sorts the three.

<details>
<summary>Solution</summary>

(a) Order the outcomes $0 < 60 < 100$. The cumulative probabilities are $P(\ge 60) = 0.48 + 0.16 = 0.64$ and $P(\ge 100) = 0.16$, so

$$\mathrm{REU}(G) = 0 + r(0.64)(60 - 0) + r(0.16)(100 - 60).$$

$$\begin{aligned}
r(p) = p^2:&\quad 0.4096(60) + 0.0256(40) = 24.576 + 1.024 = 25.6,\\
r(p) = p:&\quad 0.64(60) + 0.16(40) = 38.4 + 6.4 = 44.8,\\
r(p) = \sqrt{p}:&\quad 0.8(60) + 0.4(40) = 48 + 16 = 64.
\end{aligned}$$

The middle line is expected value: $0.48(60) + 0.16(100) = 44.8$.

(b) Only the $p^2$ agent takes the sure 40 ($25.6 < 40$); the other two keep $G$ ($44.8$ and $64$). Convex $r$ lies below the diagonal and discounts every chance of climbing a rung, so it is risk-avoidant; concave $r$ lies above it and is risk-inclined; with $u$ linear in all three, the whole difference comes from $r$.

**Wrong turns:** applying $r$ to each outcome's own probability (0.48 and 0.16) instead of the cumulative 0.64 and 0.16; for $p^2$ that gives 14.848 on the ladder. Weighting the floor too: the worst outcome counts in full. Calling $p^2$ risk-seeking because the curve "bends up".

</details>

## Connections

- **Backward:** [3.1](03-01-the-ellsberg-paradox.md) proved the Ellsberg choices fit no single prior; maxmin EU fits them with a set. The axiom given up is [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md)'s sure-thing principle in mixture form. [2.4](02-04-risk-beyond-curvature.md) relaxed independence for *risk* with known probabilities; this lesson relaxes it for *ambiguity*. 3.1's P3 committee, which ranked whole portfolios, is a resolute chooser in miniature. Whether the representation theorem makes the set of priors real belief or a bookkeeping device is [1.4](01-04-what-a-representation-theorem-shows.md)'s question again.
- **Forward:** [3.3](03-03-decisions-under-ignorance.md) takes $C$ to its limit, every probability, where maxmin EU becomes the maximin rule and the Hurwicz index plays the part of $\alpha$. [3.4](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) asks whether the veil of ignorance is ambiguity, which would favour Rawls's caution, or equiprobable risk, as Harsanyi claims.
- **Sideways:** maxmin EU is a zero-sum game against a nature that picks the prior after you pick the act, the logic of [`grad-game-theory` 1.4](../../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md). What a precise credence is, and the probabilism that imprecise credence relaxes, belong to [`epistemology`](../../epistemology/syllabus.md) 5.1.

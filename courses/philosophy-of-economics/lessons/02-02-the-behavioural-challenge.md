# Philosophy of Economics · Lesson 2.2: The behavioural challenge

> ⏱ ~15 min · Module 2: Rationality, choice and nudges · Builds on: [2.1 Preference and revealed preference](02-01-preference-and-revealed-preference.md) · Unlocks: [2.3 Nudges and behavioural welfare economics](02-03-nudges-and-behavioural-welfare-economics.md), [4.1 Why discount?](04-01-why-discount.md)

## Why this matters

[2.1](02-01-preference-and-revealed-preference.md) left welfare economics resting on one inference: a person's choices are evidence of her preferences, and her preferences are evidence of her welfare. That inference needs choices to hang together. Decades of experiments say they often do not. The same option, described two ways, is chosen and rejected. The same pair of rewards is ranked one way next month and the other way today. The same two gambles are ranked one way when people choose and the other when they set prices.

One reading says these people are making mistakes, so their choices can be overruled for their own good. The other says the economist's model of them is wrong, so the fix is a better model, not a correction of the person. Which reading you take decides whether there is anything for [2.3](02-03-nudges-and-behavioural-welfare-economics.md)'s nudges to fix. This lesson states both at full strength and introduces the one formal tool the library does not yet have: the quasi-hyperbolic, or beta-delta, model of present bias.

## The idea

Three findings carry the challenge.

**Framing.** In Tversky and Kahneman's "Asian disease" problem (1981, *Science*), 600 people are expected to die of an outbreak. One group chooses between program A, which saves 200 for sure, and program B, which saves all 600 with probability 1/3 and no one otherwise. Most pick A. A second group gets the same programs described by deaths: under C, 400 die for sure; under D, no one dies with probability 1/3 and all 600 die otherwise. Most pick D. A and C are the same program, as are B and D, and every program saves 200 in expectation. The choice flips with the description. That is a [framing effect](../reference.md#framing-effect): a violation of **description invariance**, the requirement that logically equivalent descriptions of one option get the same choice.

**Preference reversals.** Lichtenstein and Slovic (1971) offered pairs of bets: a safe one with a high chance of a small prize and a long shot with a small chance of a big prize. Many subjects chose the safe bet but, asked separately, set a higher selling price on the long shot. Grether and Plott (1979, *AER*) set out to explain the result away with incentives and controls, and it survived. That is a [preference reversal](../reference.md#preference-reversal): a violation of **procedure invariance**, the requirement that choosing and pricing reveal one ranking.

**Present bias.** The pattern, in illustrative numbers: asked today, a person prefers 120 in thirteen months to 100 in a year; asked a year from now, she takes the 100. Exponential discounting, the economist's default since Samuelson, cannot produce that switch. Strotz (1956) saw the problem, and Laibson (1997, *QJE*) gave it the form now standard.

Reference dependence sits under all three: people value outcomes as gains and losses from a reference point, not as final states, which is how "saves 200" and "400 die" become different options in the mind. Prospect theory (Kahneman and Tversky 1979) models this as a *description*, and [`decision-theory`](../../decision-theory/syllabus.md) 2.4 owns it. Here the question is what the findings do to welfare inference.

## The argument

**The formal tool.** In the [quasi-hyperbolic model](../reference.md#quasi-hyperbolic-discounting) (Phelps and Pollak 1968 for generations; Laibson 1997 for one person), the self at date $t$ ranks consumption streams by

$$U_t = u(c_t) + \beta\sum_{k=1}^{\infty}\delta^k\,u(c_{t+k}), \qquad 0<\beta\le 1,\ 0<\delta<1,$$

where $u$ is the per-period utility, $\delta$ the per-period discount factor and $\beta$ an extra discount on everything that is not now. *In words:* the future is discounted at a steady rate, plus one extra cut for not being today. With $\beta=1$ this is exponential discounting.

Preferences are **time-consistent** when a plan the date-0 self would choose for date $t$ is still the date-$t$ self's choice once date $t$ arrives ([time inconsistency](../reference.md#time-inconsistency)). Exponential discounting is time-consistent: between two dated rewards the ratio of their weights, $\delta^{t'}/\delta^{t}$, does not depend on when you look. Under beta-delta the ratio is $\delta^{t'-t}$ when both are in the future but $\beta\delta^{t'-t}$ once the earlier one is now, so the ranking can flip on that date. A **naive** agent thinks his future selves will follow his plan; a **sophisticated** one predicts their deviations and may pay to prevent them (O'Donoghue and Rabin 1999, *AER*) ([naive and sophisticated agents](../reference.md#naive-and-sophisticated-agents)).

**The irrationality argument**, as the behavioural welfare economist runs it:

1. **Rationality includes invariance.** A rational agent's ranking of options does not depend on how they are described, on whether she chooses or prices, or, if her tastes and information are unchanged, on the date she is asked.
2. **The findings violate invariance.** In each case one person (or a matched population) ranks the same options both ways.
3. **The options really are the same.** No information, risk, menu or circumstance differs between the frames, procedures or dates.
4. **A violation among identical options is a mistake.** At least one of the two choices fails to track what the person prefers.

∴ **C.** Some observed choices are mistakes, so choice cannot be read straight off as welfare. *In words:* if one person ranks one pair both ways, the data cannot both be her preference.

The argument treats the axioms as **norms**: standards choices ought to meet. Read as **descriptions** (hypotheses about what people do), the same data show only that the hypothesis is false. [`decision-theory`](../../decision-theory/syllabus.md) 1.4 asks which status the axioms have. Here it decides the verdict: a falsified description is the theorist's error, a violated norm is the chooser's.

**The rival: a misspecified model.** It comes in three forms, each attacking a different premise.

- *The options differ (against P3).* A speaker's choice of frame carries information: describing a program by lives saved can signal that saving is the expected baseline (Sher and McKenzie 2006, *Cognition*). A reward now differs from one next month in risk, and if the hazard of losing a promised reward is itself uncertain, a rational agent's discounting can look hyperbolic (Sozou 1998).
- *Enrich the model (against P1's status).* Gul and Pesendorfer ("The Case for Mindless Economics", 2008) hold that economics is a theory of choice, not of hidden mental states. An anomaly is a reason to model choice better, for instance with preferences over *menus* that include a cost of resisting temptation (their "Temptation and Self-Control", 2001, *Econometrica*), which explains paying for commitment with no inconsistency at all.
- *No single self (against P4).* If the date-0 and date-1 selves are two agents with different interests, the reversal is a conflict, not an error, and nothing says which self speaks for the person.

**Where the argument is weakest.** P4, through what it presupposes. Calling one of two conflicting choices a mistake assumes there is a true, frame-free, date-free preference underneath for the choice to miss. Infante, Lecouteux and Sugden (2016) call this the "inner rational agent" and argue that behavioural economics has evidence of no such thing: the data show context-dependent choice, and positing a hidden coherent chooser behind it is the neoclassical model kept alive by assumption. The defender replies that people themselves, reflecting calmly, disown their framed and impulsive choices, and that this disavowal is evidence of a preference the choices missed. Whether reflective endorsement can carry that weight is [2.3](02-03-nudges-and-behavioural-welfare-economics.md)'s question.

## The reversal

![Value of 100 at date 5 and of 120 at date 6 seen from evaluation dates 0 to 5. Under exponential discounting the later reward stays 1.14 times the sooner at every date. Under beta-delta the later reward leads until date 4, then the sooner reward jumps to 100 at date 5 and overtakes the later reward at 79.8](assets/02-02-fig1.svg)

Illustrative numbers from Example 1. Dashed lines never cross; solid lines cross once, at the date the sooner reward becomes immediate.

## Worked examples

**Example 1 (clean): a beta-delta reversal.** Take $\beta=0.7$, $\delta=0.95$, linear utility, and a choice between 100 at date 5 and 120 at date 6.

*At date 0* both rewards are in the future, so both carry $\beta$:

$$0.7\times0.95^5\times100 = 0.7\times0.7738\times100 = 54.16,$$

$$0.7\times0.95^6\times120 = 0.7\times0.7351\times120 = 61.75.$$

She plans to wait for 120.

*At date 5* the 100 is now and loses no $\beta$:

$$100 \quad\text{vs}\quad 0.7\times0.95\times120 = 79.8.$$

She takes the 100. The plan made at date 0 is abandoned at date 5.

*An exponential discounter* ($\beta=1$, same $\delta$) compares $0.95^{5-\tau}\times100$ with $0.95^{6-\tau}\times120$ from any date $\tau$. Their ratio is $0.95\times1.2=1.14$ at every $\tau$, so the 120 wins from every date, including date 5 (114 vs 100).

The reversal is not special to 120. With these parameters, a later reward $X$ is planned for but abandoned whenever $\delta X>100>\beta\delta X$, that is, $105.26 < X < 150.38$.

The value judgment in the technique: writing the model this way calls the date-0 ranking "patient" and the date-5 ranking "biased". The algebra is symmetric. Nothing in it says which self's $U_t$ is the welfare criterion; that is a normative premise added on top.

**Example 2 (hard): a preference reversal and the money pump.** Illustrative bets, not the experimenters' own: the safe bet pays 4 dollars with probability 35/36; the long shot pays 16 dollars with probability 11/36. Expected values are $\tfrac{35}{36}\times4 = 3.89$ and $\tfrac{11}{36}\times16 = 4.89$. A subject chooses the safe bet over the long shot but prices the long shot at 4.50 dollars and the safe bet at 3.50.

The irrationality reading has a pump. Suppose her stated prices are what she would both pay and accept. Sell her the long shot for 4.50. She swaps it for the safe bet, which she chooses over it. Buy the safe bet back for 3.50. She ends where she began, with no bet, 1 dollar poorer, and the cycle repeats.

Here the tool strains, twice. First, the pump assumes one price serves as both buying and selling price; once willingness to pay and willingness to accept come apart, as they routinely do, the cycle may not close. Second, and worse for welfare economics, the two procedures give two rankings, and a cost-benefit analysis that values things by stated prices ([willingness to pay](../reference.md#willingness-to-pay)) inherits whichever one its survey happened to elicit. Tversky, Slovic and Kahneman (1990, *AER*) traced most reversals to **scale compatibility**: a pricing task makes the money amounts loom larger. On that diagnosis neither ranking is the error; each is an artefact of its question, and "her real preference between the bets" may have no answer. The irrationality reading needs a fact the evidence does not supply.

## Watch out

- **You might think the Asian disease data show people are irrational.** The data show something empirical: choices shift with the description. "Irrational" adds a conceptual claim (the two descriptions present the same option, with no information in the frame) and a normative one (description invariance binds). Each can be denied without disputing a single datum.
- **You might think beta-delta is hyperbolic discounting.** It is *quasi*-hyperbolic: after the first period, discounting is exponential, so the ranking of two future rewards flips only when the earlier one becomes immediate (the figure's single jump). True hyperbolic discounting, $1/(1+kt)$ with a positive constant $k$, lets preferences drift continuously. And note the notation: here $\delta$ is a per-period *factor* (0.95); [4.1](04-01-why-discount.md) writes $\delta$ for a *rate* of pure time preference.
- **You might think present bias is the same time inconsistency as the capital levy.** In [`public-economics` 6.2](../../public-economics/lessons/06-02-chamley-judd-and-the-exploding-wedge.md) and [`economics-of-debt` 8.1](../../economics-of-debt/lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) the government's preferences never change; what changes is that capital or care becomes sunk. Present bias is inconsistency in the *preferences* themselves. Both call for commitment, for different reasons.

## One-liner

> Framing, preference reversals and present bias show that one person ranks the same options both ways; whether that is her mistake or the model's depends on whether the options really are the same and whether there is a true preference underneath for her choices to miss.

## Problems

**P1 (🟢) *(Formal.)*** A person has quasi-hyperbolic preferences with $\beta=0.6$, $\delta=1$, and linear utility. Going to the gym at date 1 costs her 10 (effort, at date 1) and yields a health benefit of 14 (at date 2). Not going yields 0.

(a) At date 0, does she plan to go at date 1? At date 1, does she go? Show both values.
(b) Keeping $\delta=1$, for which values of $\beta$ does this reversal occur?
(c) Show that an exponential discounter with $\delta=0.9$ ($\beta=1$) makes the same decision at date 0 and date 1, and say why that must hold.

**P2 (🟡) *(Exegetical (a) · Evaluative (b).)*** An **invented** memo from a consumer-protection office, not the words of any real agency:

> "Subscribers shown a health plan described as 'approves 90 percent of claims' signed up at twice the rate of subscribers shown 'denies 10 percent of claims'. The descriptions are logically equivalent, so one group chose against its true preferences. Insurers should be required to use the 'denies' wording, which shows subscribers their real risk."

(a) Which reading of the framing effect does the memo assume, and which premise of the lesson's irrationality argument does it take for granted? Name one further assumption its recommendation needs that the data cannot supply. Two or three sentences.
(b) In 100 words or fewer, state the strongest misspecified-model reading of the same data and say what it does to the recommendation. Any verdict passes.

**P3 (🔴, optional) *(Formal (a) · Evaluative (b).)*** Every January (date 0) a worker says he will save his March bonus. The bonus arrives at date 1: spent then, it gives him 100; saved, it gives him 125 at date 2. Utility is linear, $\delta=1$, and he has quasi-hyperbolic preferences with unknown $\beta$. In January he pays a fee of 5, at once, for an account that saves the bonus automatically.

(a) Assume he is sophisticated. For which $\beta$ do all three facts fit: he prefers saving when planning at date 0, he correctly foresees that without the account he would spend at date 1, and he pays the fee?
(b) A critic says the fee proves present bias, and so a mistake at date 1. In 120 words or fewer, give a reading on which paying the fee is fully rational, and say whether the fee alone can tell that reading apart from present bias. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal — strict.)*

**Must hit, strict:**

- (a) Date 0: both the cost and the benefit are in the future, so both carry $\beta$: $0.6\times(-10)+0.6\times14 = -6+8.4 = 2.4 > 0$. She plans to go. Date 1: the cost is now, the benefit is not: $-10+0.6\times14 = -10+8.4 = -1.6 < 0$. She skips.
- (b) With $\delta=1$ the date-0 value is $\beta(14-10)=4\beta>0$ for every $\beta>0$, so she always plans to go. At date 1 she goes iff $14\beta\ge10$. So the reversal occurs iff $\beta<10/14=5/7\approx0.714$.
- (c) Date 0: $0.9\times(-10)+0.9^2\times14 = -9+11.34 = 2.34$. Date 1: $-10+0.9\times14 = -10+12.6 = 2.6$. Both positive, so she plans to go and goes. It must hold because the date-0 value is exactly $\delta$ times the date-1 value ($2.34 = 0.9\times2.6$), and multiplying by a positive number cannot change a sign.

**Wrong turns:** applying $\beta$ to the date-1 cost when evaluating at date 1 (the cost is then immediate). Using $\beta^k$ for a reward $k$ periods away; $\beta$ applies once to everything not now. In (b), giving $\beta\le5/7$: at exactly $5/7$ she is indifferent at date 1, so a strict reversal needs $\beta<5/7$.

---

**P2** *(Exegetical (a) — strict · Evaluative (b) — graded on moves, not verdict.)*

**Must hit, strict (a):**

- The **irrationality** reading: it treats the gap as a violation of description invariance and infers that one group chose against a true preference.
- It takes **P3** for granted: that the two descriptions present the same option, with no information carried by the wording (and, behind P4, that a frame-free true preference exists).
- The further assumption: that the "denies" frame is the undistorted one. The data show the two frames diverge, not which side errs; picking a frame needs a separate argument, such as evidence about which wording people understand better.

**Must hit, any verdict (b):**

- A misspecified-model reading stated precisely: the frame is an attribute of the choice situation (it leaks information about the insurer, or sets a reference point), so the two groups did not face the same option.
- Its consequence for the memo: no group chose against its preferences, so the mandate cannot be justified as restoring them; it changes the signal or the reference point.
- Whether the recommendation can survive on other grounds (comprehension, honesty in marketing), and so whether the dispute matters to the policy at all.

**Wrong turns:** answering that the "denies" wording is obviously more honest: both statements are true, and that is the point. Treating "twice the rate" as itself showing irrationality, which mistakes the empirical finding for the normative verdict.

**Model answer (b), one of several:** An insurer chooses how to describe its plan, and its choice is evidence. A plan advertised by approvals invites the inference that approval is the norm; one advertised by denials invites the inference that denials are worth worrying about. Subscribers who respond differently are responding to different evidence, not choosing inconsistently. On this reading no one chose against their preferences, so the memo's justification fails. Mandating "denies" wording does not reveal true preferences; it swaps one signal for another. The mandate might still be defended as clearer disclosure, but that is a different argument, and it would need evidence of comprehension, not of divergence.

---

**P3** *(Formal (a) — strict · Evaluative (b) — graded on moves, not verdict.)*

**Must hit, strict (a):**

- Planning at date 0: saving is worth $\beta\times125$ and spending $\beta\times100$, so he prefers saving for every $\beta>0$.
- Spending at date 1 without the account: $100 > \beta\times125$ iff $\beta < 0.8$.
- Paying the fee: with the account he gets $-5+125\beta$; without it, foreseeing that he will spend, he gets $100\beta$. He pays iff $25\beta>5$, that is, $\beta>0.2$.
- So all three fit iff $0.2<\beta<0.8$. (A naive agent would not pay at all, since he expects to save anyway, so the fee also signals sophistication.)

**Accept (b):** any reading on which a time-consistent agent strictly prefers the smaller menu; temptation costs are the standard one.

**Must hit, any verdict (b):**

- The reading stated precisely: for instance Gul and Pesendorfer's preferences over menus, in which having the tempting option available is itself costly (resisting takes effort), so removing it is worth paying for, with no change of preference between dates.
- Why the fee rules out the *plain* consistent model: an agent with fixed preferences and no temptation never strictly pays to remove an option, since he could simply not use it.
- Whether the fee discriminates: both temptation and present bias predict it, so the fee alone cannot decide between them. What might: what he does when he cannot commit, or whether he reports the spending as an error afterwards.

**Wrong turns:** offering uncertainty about future needs as the rational reading: uncertainty gives options value, so it predicts he would *refuse* to pay. In (a), forgetting that the fee is paid at date 0, now, and so carries no $\beta$.

**Model answer (b), one of several:** On Gul and Pesendorfer's model he ranks menus, not just outcomes. A menu containing "spend the bonus" is worse than one without it, even if he would save, because resisting costs him something. He pays 5 to avoid that cost. His preferences never change between January and March, so nothing he does is a mistake. The fee does refute the simplest consistent model, since an untempted agent never pays to lose an option. But temptation and present bias both predict the fee, so it cannot decide between them. The critic's "mistake" needs more: a date-1 choice he later disowns.

</details>

## Flashback

**From Lesson [1.3](01-03-capabilities-as-a-welfare-metric.md) (Capabilities as a welfare metric):** *(Formal (a) · Exegetical (b).)* Two illustrative districts have (health, education, income) indices E = (0.92, 0.84, 0.36) and F = (0.64, 0.64, 0.64).

(a) Compute each district's power mean $M_r$ with equal weights at $r=1$ (arithmetic), $r=0$ (geometric) and $r=-1$ (harmonic, $M_{-1}=3/\sum_k 1/I_k$), and the minimum index (the limit $r\to-\infty$). Say which district ranks first under each.
(b) In two sentences: what single indexing choice decides the ranking here, and which of these aggregators sits closest to a Nussbaum-style threshold view, and why?

<details>
<summary>Solution</summary>

(a) F is perfectly balanced, so every mean of F is 0.640. For E:

- $r=1$: $(0.92+0.84+0.36)/3=2.12/3=0.707$. **E first.**
- $r=0$: $(0.92\times0.84\times0.36)^{1/3}=0.2782^{1/3}=0.653$. **E first.**
- $r=-1$: $3/(1.087+1.190+2.778)=3/5.055=0.593$. **F first.**
- Minimum: E $=0.36$, F $=0.64$. **F first.**

The ranking flips between $r=0$ and $r=-1$ (the tie is at $r\approx-0.22$).

**Must hit, strict (a):** 0.707, 0.653, 0.593 and 0.36 for E against 0.640 for F throughout; E first under the arithmetic and geometric means, F first under the harmonic mean and the minimum.

**Must hit, strict (b):**

- The deciding choice is the **substitutability parameter** $r$ (equivalently the elasticity $\sigma=1/(1-r)$): the list, the weights and the goalposts are the same on every line, and only how far E's strong health and education may compensate for its weak income changes.
- The **minimum** sits closest to a threshold view: below a threshold no surplus in one capability offsets a shortfall in another, and the minimum lets nothing offset the weakest dimension.

**Wrong turns:** reading the reversal as showing one mean is the accurate one; that "imbalance should be penalized" is a normative claim the arithmetic cannot settle. Computing the harmonic mean as the reciprocal of the arithmetic mean. Naming the geometric mean as closest to Nussbaum because "a zero anywhere zeroes the index": it still lets E's health and education buy back its income above zero.

**Model answer:** (a) as above: E leads at $r=1$ and $r=0$, F leads at $r=-1$ and under the minimum. (b) The ranking turns only on $r$, that is, on how readily one dimension may stand in for another, which is a value judgment about substitutability and not a fact about either district. The minimum is closest to Nussbaum's thresholds, because it treats a shortfall in the weakest capability as uncompensable, while every finite mean lets strength elsewhere make up for it.

</details>

## Connections

- **Backward:** [2.1](02-01-preference-and-revealed-preference.md) made choice evidence of preference; this lesson asks what happens when the evidence contradicts itself. Sen's menu dependence there is one more invariance a rational agent was supposed to satisfy. The preference axioms are [grad-micro 2.1](../../grad-micro/lessons/02-01-preferences-utility-representation.md)'s, the expected values are [grad-micro 2.5](../../grad-micro/lessons/02-05-choice-under-uncertainty.md)'s, and choosing from one pair both ways is the inconsistency [grad-micro 2.6](../../grad-micro/lessons/02-06-revealed-preference.md)'s WARP rules out.
- **Forward:** [2.3](02-03-nudges-and-behavioural-welfare-economics.md) takes the conflict between the date-0 and date-5 selves as given and asks whose ranking policy should respect, and what Bernheim and Rangel do when no ranking is unambiguous. [4.1](04-01-why-discount.md) asks whether *any* pure time preference is rational, which is the question beta-delta leaves aside by taking $\delta$ as given. [6.2](06-02-friedmans-as-if-and-its-critics.md) returns to these findings as a test of Friedman's claim that false assumptions do not matter.
- **Sideways:** [`decision-theory`](../../decision-theory/syllabus.md) 1.4 asks whether the axioms are norms or descriptions, 2.3 runs the Allais paradox, the classic violation of independence, and 2.4 owns prospect theory. Government time inconsistency is [`public-economics` 6.2](../../public-economics/lessons/06-02-chamley-judd-and-the-exploding-wedge.md)'s capital levy and [`economics-of-debt` 8.1](../../economics-of-debt/lessons/08-01-forgiveness-commitment-and-the-fresh-start.md)'s debt relief. [`philosophy-of-debt` 3.2](../../philosophy-of-debt/lessons/03-02-predatory-lending-and-usury-caps.md) leaves present bias in high-cost borrowing to this lesson.

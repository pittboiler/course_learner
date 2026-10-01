# Decision Theory · Lesson 1.3: The vNM theorem and how utility is built

> ⏱ ~15 min · Module 1: Expected utility and what it claims · Builds on: [1.2 From expected value to expected utility](01-02-from-expected-value-to-expected-utility.md), [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md) · Unlocks: [1.4 What a representation theorem shows](01-04-what-a-representation-theorem-shows.md), [2.2 Probability from preference](02-02-probability-from-preference.md)

## Why this matters

[1.2](01-02-from-expected-value-to-expected-utility.md) replaced money with utility and never said where the utility numbers come from. You have seen the von Neumann–Morgenstern theorem stated three times, in [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md), [`micro-refresher` 2.1](../../micro-refresher/lessons/02-01-expected-utility.md) and [`grad-micro` 2.5](../../grad-micro/lessons/02-05-choice-under-uncertainty.md), and never seen why it is true. This lesson builds the utility function out of choices and runs the proof's skeleton. You will then know exactly which axiom does which job. That tells you where each later paradox in this course hits, and what the resulting numbers can and cannot mean.

## The idea

You calibrate a thermometer by fixing two points: water freezes at 0 and boils at 100. A reading of 37 then means "37 percent of the way between the fixed points". The vNM construction calibrates preference the same way, using **probability** as the ruler.

Fix the best prize on the table, say 100 dollars, and the worst, say nothing. For any prize in between, say 20 dollars, ask: what chance $p$ of winning 100 dollars (else nothing) would make you exactly indifferent between that gamble and 20 dollars for sure? If your answer is 0.35, then 20 dollars sits 0.35 of the way up your scale. That number is its utility. The question is called the [standard gamble](../reference.md#standard-gamble).

Do this once for every prize. Now any lottery, however complicated, can be rewritten with each prize replaced by its standard gamble. What results is one big gamble between best and worst. You prefer whichever lottery gives you the bigger chance of the best prize, and that chance is exactly its expected utility. That is the whole theorem. The axioms are what make each rewriting step legitimate.

## The formal version

**Recap, not re-teach.** A lottery is a probability distribution over a finite set $X$ of prizes, and $\succeq$ is a preference over lotteries. The four [vNM axioms](../reference.md#vnm-axioms) are completeness, transitivity, **continuity** and **independence** (statements in [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md)). The theorem says they hold if and only if some $u: X \to \mathbb{R}$ ranks lotteries by $U(L) = \sum_i p_i\,u(x_i)$, with $u$ unique up to $a\,u + c$, $a > 0$. That is a [representation theorem](../reference.md#representation-theorem): a formal claim that a structure on preferences can be described by numbers. Whether it gives anyone a reason to choose this way is [1.4](01-04-what-a-representation-theorem-shows.md)'s question.

**Setup.** Let $b$ be a best prize and $w$ a worst, with $b \succ w$. For $p \in [0,1]$ write

$$G_p = \text{the lottery giving } b \text{ with probability } p, \text{ else } w.$$

*In words:* $G_p$ is the standard gamble at odds $p$.

**Lemma (monotonicity).** $G_p \succ G_q$ if and only if $p > q$. *In words:* a bigger chance of the best prize is better. This follows from independence: $G_p$ mixes $b$ into $G_q$, and $b \succ G_q$.

**Step 1: calibrate (continuity).** For each prize $x$ there is exactly one $p_x$ with $x \sim G_{p_x}$. Continuity gives at least one; the lemma rules out two. Define $u(x) := p_x$, so $u(w) = 0$ and $u(b) = 1$. *In words:* a prize's utility is the chance of the best prize that it is worth.

**Step 2: substitute (independence).** In a lottery $L$ giving $x_i$ with probability $p_i$, swap $x_1$ for $G_{u(x_1)}$. Independence, applied to the indifference $x_1 \sim G_{u(x_1)}$ with the rest of $L$ as the common part, says the new lottery is indifferent to $L$. Repeat for every prize, one swap per prize.

**Step 3: compound.** The result is a two-stage lottery: first draw $x_i$, then run its standard gamble. Its only final prizes are $b$ and $w$, and

$$\Pr(b) = \sum_i p_i\,u(x_i) = U(L).$$

Treating the two-stage lottery as the one-stage $G_{U(L)}$ is the [reduction of compound lotteries](../reference.md#reduction-of-compound-lotteries). In the mixture formulation of [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md) it is built into what a lottery is; other presentations list it as a separate axiom. Either way, $L \sim G_{U(L)}$.

**Step 4: compare (transitivity and the lemma).**

$$L \succeq M \iff G_{U(L)} \succeq G_{U(M)} \iff U(L) \ge U(M).$$

*In words:* every lottery is equivalent to one standard gamble, and standard gambles are ranked by their odds. So lotteries are ranked by expected utility.

**Uniqueness.** Suppose $v$ also represents $\succeq$ in expected-utility form. Since $x \sim G_{u(x)}$,

$$v(x) = u(x)\,v(b) + \big(1 - u(x)\big)\,v(w) = a\,u(x) + c,$$

with $a = v(b) - v(w) > 0$ and $c = v(w)$. Conversely, any $a\,u + c$ with $a > 0$ gives $\sum_i p_i(a\,u(x_i) + c) = a\,U(L) + c$, which ranks every pair the same way. That is [affine uniqueness](../reference.md#affine-uniqueness). *In words:* the zero and the unit are free choices, as on a thermometer. Everything else is fixed by the agent's choices.

**What [cardinal utility](../reference.md#cardinal-utility) licenses.** Only statements that survive every $a\,u + c$:

- **Meaningful:** order of prizes; comparisons of utility *differences* for one agent ("20 to 50 is a bigger step than 50 to 100"), since $a$ multiplies every difference and $c$ cancels.
- **Not meaningful:** ratios of levels ("twice as good"), since adding $c$ changes them; the sign of a utility, since $c$ moves the zero; and any comparison **across agents**, since each person's $a$ and $c$ are chosen independently. That is the problem of [interpersonal comparability](../reference.md#interpersonal-comparability).

**Where the argument is weakest.** Each step leans on one premise, and each premise has an objector.

- Step 2 uses independence once per prize. The Allais choices ([2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md)) amount to refusing one such swap: the agent agrees $x \sim G_{p_x}$ and still minds which one sits inside a larger gamble.
- Step 1 needs continuity. If some outcome is infinitely worse than any gain, such as death against a free coffee, no $p_x$ exists. The defender replies that people accept tiny risks of death for small conveniences every time they cross a street.
- Step 3 assumes only final probabilities matter. An agent who cares how risk is staged, who enjoys suspense or hates a second draw, rejects reduction.
- The setup needs a best and a worst prize. With unboundedly good prizes there is no top of the ruler, which is [1.2](01-02-from-expected-value-to-expected-utility.md)'s case for bounded utility seen from the other side.

## The picture

![Utility of four prizes plotted against dollars. Points at 0, 20, 50 and 100 dollars have utilities 0, 0.35, 0.7 and 1, joined by a dotted line that bows above a dashed risk-neutral diagonal. A second axis on the right shows the rescaled utility v equal to 40 u minus 10, running from minus 10 to 30, so the same points read minus 10, 4, 18 and 30.](assets/01-03-fig1.svg)

Each dot is one standard-gamble answer, from Example 1's agent. The dots bow above the diagonal, so she is risk averse: 50 dollars is worth a 0.7 chance at 100 dollars, not 0.5. The red axis relabels the same dots with $v = 40u - 10$. Nothing about her choices changes, which is what affine uniqueness says.

## Worked examples

**Example 1 (clean): build, rank, rescale.** Fern's prizes are 0, 20, 50 and 100 dollars. She is indifferent between 20 for sure and $G_{0.35}$, and between 50 for sure and $G_{0.7}$. So $u = (0,\ 0.35,\ 0.7,\ 1)$. Rank three lotteries:

- $A$: 100 or 20, 50–50. $U(A) = 0.5(1) + 0.5(0.35) = 0.675$.
- $B$: 50 for sure. $U(B) = 0.7$.
- $C$: 100, 50 or 0 with probabilities 0.4, 0.4, 0.2. $U(C) = 0.4(1) + 0.4(0.7) + 0 = 0.68$.

So $B \succ C \succ A$. Step 3 says, for instance, that $C$ is worth exactly a 0.68 chance at 100 dollars.

*Rescale affinely,* $v = 40u - 10$, so $v = (-10,\ 4,\ 18,\ 30)$:

$$\begin{aligned} V(A) &= 0.5(30) + 0.5(4) = 17,\\ V(B) &= 18,\\ V(C) &= 0.4(30) + 0.4(18) + 0.2(-10) = 17.2. \end{aligned}$$

Same order. *Now square instead,* $u^2 = (0,\ 0.1225,\ 0.49,\ 1)$. Squaring keeps the order of the prizes, but

$$\begin{aligned} A &: 0.5(1) + 0.5(0.1225) = 0.56125,\\ B &: 0.49,\\ C &: 0.4(1) + 0.4(0.49) = 0.596. \end{aligned}$$

Now $C \succ A \succ B$, and the sure 50 has gone from first to last. Squaring order-preserves the prizes and still describes a different, risk-loving agent. That is the difference between ordinal and cardinal utility.

**Example 2 (hard): the scale that looks shared.** Fern's brother Gus answers the same questions on the same 0–100 dollar ruler, and his $u_G(50) = 0.55$. A parent with one 50-dollar gift to give reasons: "Fern's utility for 50 is 0.7 and Gus's is 0.55, so she gains more." The numbers look comparable because both are probabilities of the same prize.

But Gus's preferences are equally well represented by $v_G = 1.5\,u_G$, and the theorem gives no reason to prefer either scale. On that scale his gain is $1.5 \times 0.55 = 0.825 > 0.7$, and the verdict flips. Setting each person's best to 1 and worst to 0, sometimes called the zero-one rule, is a further premise: it treats the step from nothing to 100 dollars as equally large for both siblings. Gus may have a rent bill due and Fern may not. The construction measures each person's attitude to risk over his or her own prizes. It does not measure how much anything matters to one person compared with another. Whether some further premise could license that comparison is [5.1](05-01-harsanyis-aggregation-theorem.md)–[5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md)'s question.

## Watch out

- **You might think the standard gamble measures how much you like a prize.** It measures what risk of the worst outcome you would bear to get the best. Two people with equal enjoyment of 50 dollars but different nerves report different $p_x$.
- **You might think "50 dollars gives Fern twice the utility of 20" is a finding.** It is an artefact of putting the zero at 0 dollars: on the $v$ scale the ratio is $18/4 = 4.5$. Comparisons of *differences* survive rescaling; ratios of levels do not.
- **You might think the proof shows people do, or should, choose this way.** It shows that *if* preferences satisfy the axioms, *then* this $u$ represents them. Whether anyone's preferences satisfy them is descriptive (2.3, [2.4](02-04-risk-beyond-curvature.md)); whether they ought to is normative ([1.4](01-04-what-a-representation-theorem-shows.md)).

## One-liner

> Fix the best and worst prizes, price every other prize as a chance of the best, and independence plus reduction turn any lottery into one such chance, which is its expected utility: unique up to a zero and a unit, and silent about comparisons between people.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** Dana's prizes are 0, 10, 40 and 80 dollars, and she satisfies the vNM axioms. She is indifferent between 10 dollars for sure and a 0.2 chance of 80 dollars (else 0), and between 40 dollars for sure and a 0.65 chance of 80 dollars (else 0).

(a) Normalize $u(0) = 0$, $u(80) = 1$. Give $u(10)$ and $u(40)$, and rank these lotteries: $K$, 80 or 10 dollars, 50–50; $M$, a 0.75 chance of 40 dollars, else 0; $N$, 40 dollars for sure; $R$, a 0.7 chance of 80 dollars, else 0.
(b) Find the probability $q$ that makes Dana indifferent between 40 dollars for sure and "80 dollars with probability $q$, else 10 dollars".

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** Use Dana's utility from P1: $u = (0,\ 0.2,\ 0.65,\ 1)$ for 0, 10, 40 and 80 dollars.

(a) Compare $R$ (a 0.7 chance of 80, else 0) with $N$ (40 for sure) under $u$, under $5u + 2$, and under $\sqrt{u}$.
(b) In two sentences: which of Dana's own stated indifferences does $\sqrt{u}$ get wrong, and which step of the construction explains why only affine rescalings are allowed?

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)*** Take Fern from Example 1: $u = (0,\ 0.35,\ 0.7,\ 1)$ for 0, 20, 50 and 100 dollars.

(a) For each claim, say whether vNM utility alone makes it meaningful, in one sentence each. (i) "For Fern, going from 20 to 50 dollars is a bigger gain than going from 50 to 100." (ii) "50 dollars is twice as good for Fern as 20 dollars." (iii) "20 dollars has positive utility for Fern." (iv) "Fern gets more out of 50 dollars than Gus, whose $u(50)$ is 0.55."
(b) An **invented** hospital memo, not the words of any real body: "Standard-gamble scores are probabilities, and a probability means the same thing for every patient. So a patient whose score rises by 0.3 gains more than one whose score rises by 0.2, and we should treat the first." Steelman the memo, then give the strongest reply, in 120 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) By Step 1, $u(10) = 0.2$ and $u(40) = 0.65$. Then

$$\begin{aligned} U(K) &= 0.5(1) + 0.5(0.2) = 0.6,\\ U(M) &= 0.75(0.65) = 0.4875,\\ U(N) &= 0.65,\\ U(R) &= 0.7(1) = 0.7. \end{aligned}$$

So $R \succ N \succ K \succ M$.

(b) Indifference needs $q(1) + (1-q)(0.2) = 0.65$, so $0.8q = 0.45$ and $q = 9/16 = 0.5625$.

**Must hit, strict (a)–(b):** the utilities are the indifference probabilities themselves; the four values and the ranking; the equation in (b) and $q = 9/16$.

**Wrong turns:** ranking by expected money ($R$ pays 56 dollars in expectation, $K$ 45, $N$ 40, $M$ 30), which puts $K$ above $N$; Dana's risk aversion reverses that pair. In (b), writing $q = 0.65$, which forgets that the losing branch now pays 10 dollars, worth 0.2, not 0.

---

**P2** *(Formal (a) · Exegetical (b).)*

(a) Under $u$: $U(R) = 0.7 > U(N) = 0.65$, so $R \succ N$. Under $5u + 2$, with values $(2,\ 3,\ 5.25,\ 7)$: $0.7(7) + 0.3(2) = 5.5 > 5.25$. Same verdict. Under $\sqrt{u}$: $R$ scores $0.7(1) + 0.3(0) = 0.7$ and $N$ scores $\sqrt{0.65} \approx 0.806$, so $N \succ R$. The ranking reverses.

**Must hit, strict (b):**

- $\sqrt{u}$ misdescribes Dana's calibration indifference between 40 dollars and the 0.65 gamble: it scores the gamble $0.65(1) + 0.35(0) = 0.65$ and the sure 40 dollars about $0.806$, so it predicts a strict preference where she reported indifference.
- The explanation is Step 1 together with the uniqueness argument: since $x \sim G_{u(x)}$, any expected-utility representation $v$ must satisfy $v(x) = a\,u(x) + c$, and $\sqrt{0.65}$ is not $0.65$ on a scale where 0 and 80 dollars keep the values 0 and 1.

**Wrong turns:** saying $\sqrt{u}$ fails because it is not increasing (it is increasing, and keeps the order of the prizes). Saying the problem is that $\sqrt{u}$ "changes risk attitude" without naming the indifference it contradicts.

**Model answer:** $\sqrt{u}$ predicts that Dana strictly prefers 40 dollars to a 0.65 chance at 80 dollars ($0.806 > 0.65$), but that is one of the indifferences her utility was built from. Calibration fixes each $u(x)$ as an indifference probability, so any other expected-utility scale must be $a\,u + c$, and the square root is not of that form.

---

**P3** *(Exegetical (a), strict · Evaluative (b), any verdict.)*

**Must hit, strict (a):**

- (i) Meaningful. It compares two utility differences for one agent ($0.35$ against $0.3$), and every $a\,u + c$ multiplies both by $a$. It even has behavioural content: it holds exactly when $u(50) > \tfrac12 u(20) + \tfrac12 u(100)$, which is Fern's preference for $B$ over $A$ in Example 1 ($0.7 > 0.675$).
- (ii) Not meaningful. The ratio is $0.7/0.35 = 2$ on $u$ but $18/4 = 4.5$ on $v = 40u - 10$.
- (iii) Not meaningful. The sign depends on the zero: on $u - 0.5$, 20 dollars scores $-0.15$.
- (iv) Not meaningful from vNM alone. Fern's and Gus's scales can be rescaled independently, as Example 2 shows.

**Must hit, any verdict (b):**

- Steelman at full strength: in health the endpoints really are shared (full health and death are the same states for every patient), so anchoring everyone's scale at them is not arbitrary.
- Name the premise the reply attacks: that equal standard-gamble endpoints are equally good *for each patient*. The vNM theorem does not supply it.
- Say whether biting the bullet generalizes: accepting the zero-one rule here commits the memo to treating the same step as equally weighty for everyone, in every allocation it scores this way.

**Wrong turns:** replying that standard-gamble scores are "subjective" and so useless; they are fully determined by each patient's choices. Concluding that comparison across patients is impossible in principle; the point is that it needs a premise beyond the theorem, not that no premise could supply it.

**Model answer (b), one of several:** Steelman: the scale's endpoints, full health and death, are the same for every patient, so a probability of reaching full health is a common unit, and anchoring at shared states is a reasonable convention. Reply: the score records what risk of death a patient would accept, which depends on how much each patient has to lose. Someone with dependants and someone without can value the same endpoints very differently. Treating 0.3 for one as larger than 0.2 for another adds the premise that the step from death to full health is equally large for both. The memo may defend that premise, but the theorem does not supply it.

</details>

## Flashback

**From Lesson [1.1](01-01-acts-states-outcomes.md) (Acts, states, outcomes):** *(Formal (a)–(b) · Exegetical (c).)* A landlord can repair a roof before storm season ($R$) or leave it ($D$). Utilities: the repair costs 3; a leak costs 30. Her surveyor puts the chance of a leak at 0.1 if she repairs and $q$ if she does not.

(a) Write the $2 \times 2$ matrix on the states "leak" and "no leak", say which act dominates and how, and compute both expected utilities at $q = 0.35$, using the chance that goes with each act.
(b) Find every $q$ at which repairing has the higher expected utility.
(c) In one sentence: why does the dominance in (a) not settle the choice?

<details>
<summary>Solution</summary>

(a) States leak $L$ and no leak $N$:

| | $L$ | $N$ |
|---|---|---|
| $R$ | $-33$ | $-3$ |
| $D$ | $-30$ | $0$ |

$D$ is better by 3 in each column, so it strictly dominates. At $q = 0.35$:

$$\begin{aligned} EU(R) &= 0.1(-33) + 0.9(-3) = -3.3 - 2.7 = -6, \\ EU(D) &= 0.35(-30) + 0.65(0) = -10.5. \end{aligned}$$

$R$ is better by 4.5.

(b) $EU(R) = -6$ does not depend on $q$, and $EU(D) = -30q$. Repairing is better exactly when $-6 > -30q$, that is, $q > 0.2$.

**Must hit, strict (c):** the states are act-dependent (repairing changes the chance of a leak), so premise 1 of the dominance argument fails and winning each column proves nothing.

**Wrong turns:** writing the repair-and-leak cell as $-30$, forgetting that she pays for the repair either way. Using one unconditional chance of a leak for both rows: then $D$ wins by exactly 3 for every chance, which is the dominance argument again. In (b), answering $q > 0.1$ because "the repair must at least lower the risk"; it must lower it by enough to cover its cost.

</details>

## Connections

- **Backward:** [1.2](01-02-from-expected-value-to-expected-utility.md) used utility functions; this lesson shows where one comes from, and why bounded utility is what keeps the ruler's top end in place. [1.1](01-01-acts-states-outcomes.md)'s outcomes are the prizes here, with the states replaced by known probabilities. The theorem's statement and the ordinal-versus-cardinal contrast are in [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md) and [`micro-refresher` 2.1](../../micro-refresher/lessons/02-01-expected-utility.md).
- **Forward:** [1.4](01-04-what-a-representation-theorem-shows.md) asks whether the $u$ built here measures anything beyond preference, and whether the axioms bind. [2.2](02-02-probability-from-preference.md) runs a calibration in the other direction, recovering probabilities from preferences. [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md) is a refusal of Step 2's [independence axiom](../reference.md#independence-axiom). [5.1](05-01-harsanyis-aggregation-theorem.md) and [5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md) take up the interpersonal comparison that Example 2 shows the theorem leaves open.
- **Sideways:** [`philosophy-of-economics` 2.1](../../philosophy-of-economics/lessons/02-01-preference-and-revealed-preference.md) runs the realism-versus-constructivism dispute for preference that 1.4 runs for utility. [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md)'s welfare weights are one way of supplying the cross-person premise that Example 2 says a planner needs.

# Decision Theory · Lesson 5.2: Interpersonal comparison and social welfare functions

> ⏱ ~15 min · Module 5: Aggregating people · Builds on: [5.1 Harsanyi's aggregation theorem](05-01-harsanyis-aggregation-theorem.md), [1.3 The vNM theorem and how utility is built](01-03-the-vnm-theorem-and-how-utility-is-built.md) · Unlocks: [5.3 Population ethics I: total and average](05-03-population-ethics-total-and-average.md)

## Why this matters

[5.1](05-01-harsanyis-aggregation-theorem.md) proved that a society obeying the vNM axioms and Pareto indifference must add up weighted individual utilities, and left the weights open. [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) showed why: each person's vNM scale has its own free zero and unit. This lesson asks what you have to *add* to the data before any social welfare function means anything, and finds that utilitarianism and maximin need different things. It then puts risk back in and shows that no social ranking can keep ex ante Pareto, social expected utility and a concern for fair chances all at once.

## The idea

Two thermometers, one in Celsius and one in Fahrenheit, can each tell you whether *its own* room got warmer. Neither tells you which room is warmer, or whether a 3-degree rise in one is bigger than a 3-degree rise in the other, until you know how the scales line up. Utilities are like that, but with no published conversion.

Different social rules need different parts of the conversion. "Help whoever is worst off" needs to know *who is lower*: levels must line up, units need not. "Maximize the total" needs to know *whose gain is bigger*: units must line up, zeros need not. So the choice between utilitarianism and maximin is partly a choice about which comparisons you think are real.

Then add risk. A kidney can go to one of two patients. Giving it to Ines and holding a fair lottery give the same expected total. Many people think the lottery is fairer. A planner who maximizes expected total welfare cannot agree, and one who does agree must give up an axiom.

## The formal version

**Setting.** $n$ people; outcomes $x, y, \dots$; $u_i(x)$ is person $i$'s utility at $x$, and $\mathbf u(x) = (u_1(x), \dots, u_n(x))$. A [social welfare function](../reference.md#social-welfare-function) ranks outcomes by a number $W(\mathbf u(x))$. Grad-micro's formulas ([`grad-micro` 6.5](../../grad-micro/lessons/06-05-social-choice-welfare.md)) are $W = \sum_i u_i$ (utilitarian) and $W = \min_i u_i$ (maximin).

**Invariance.** Suppose the facts fix utilities only up to a class $\Phi$ of transformations $u_i \mapsto \varphi_i(u_i)$. Then a ranking by $W$ is meaningful only if it survives every transformation in $\Phi$. *In words:* if two equally valid descriptions of the same people give opposite verdicts, the verdict was about the description.

**[Informational bases](../reference.md#informational-bases)** (Amartya Sen, 1970 and 1977; the standard labels):

| Basis | Permitted transformations | What it lets you compare across people | Supports |
|---|---|---|---|
| CNC: cardinal, non-comparable | $a_i u_i + b_i$, each $a_i > 0$ chosen separately | nothing | no non-dictatorial rule |
| OLC: ordinal, level-comparable | $\varphi(u_i)$, one increasing $\varphi$ for all | who is better off | maximin, leximin |
| CUC: cardinal, unit-comparable | $a u_i + b_i$, one $a > 0$ | whose gain is bigger | utilitarian sum |
| CFC: cardinal, fully comparable | $a u_i + b$, one $a > 0$ and one $b$ | both | both, and mixtures |
| RFC: ratio-scale, fully comparable | $a u_i$, one $a > 0$ | both, plus a meaningful zero | power and log prioritarian |

*In words:* the further down the table, the more is assumed comparable and the more social welfare functions become meaningful.

vNM alone gives CNC ([interpersonal comparability](../reference.md#interpersonal-comparability), 1.3's Example 2). Sen showed that Arrow's impossibility ([`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md)) survives cardinality: with CNC, Arrow's conditions still leave only dictatorship. Comparability, not cardinality, is what escapes it. Under OLC the sum is not invariant but the minimum is, and Peter Hammond (1976) and Claude d'Aspremont and Louis Gevers (1977) characterized leximin from an equity axiom on that basis. Under CUC the sum's ranking is invariant but the minimum's is not, and d'Aspremont and Gevers characterized utilitarianism there. Each rule is blind to exactly the information the other needs.

**[Prioritarianism](../reference.md#prioritarianism)** as a formula:

$$W = \sum_i f(u_i), \quad f \text{ increasing and strictly concave.}$$

*In words:* a unit of well-being counts for more the worse off its recipient is. [`ethics` 1.3](../../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md) runs it with $f = \sqrt{\ }$; whether priority is the right shape for justice belongs to [`political-philosophy`](../../political-philosophy/syllabus.md) 2.6. The formal point here: with $f(u) = \sqrt u$ or $\log u$, multiplying everyone by a common $a$ rescales or shifts $W$ and preserves the ranking, but adding a constant does not. Prioritarianism needs RFC, a zero that means the same for everyone. The family $f_\eta(u) = u^{1-\eta}/(1-\eta)$ (with $f_1 = \log$) runs from utilitarian at $\eta = 0$ toward maximin as $\eta \to \infty$, so $\eta$ is inequality aversion: the parameter of [`philosophy-of-economics` 4.2](../../philosophy-of-economics/lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) and the welfare weights of [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md).

**Risk: ex ante and ex post.** [`philosophy-of-economics` 3.2](../../philosophy-of-economics/lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) teaches the split between [ex ante and ex post Pareto](../reference.md#ex-ante-and-ex-post-pareto) and the spurious-unanimity cases; here is the formal core. For a lottery $L$ over outcomes, two ways to make a prioritarian of risk:

$$\begin{aligned}
W_{\text{post}}(L) &= E_L\Big[\textstyle\sum_i f(u_i)\Big],\\
W_{\text{ante}}(L) &= \textstyle\sum_i f\big(E_L[u_i]\big).
\end{aligned}$$

*In words:* the ex post view applies priority to how lives turn out and then takes expectations; the ex ante view applies priority to each person's prospects.

**A corollary of 5.1.** Assume each person's vNM utility is the well-being measure $W$ uses. If society ranks lotteries by expected utility and satisfies [Pareto indifference](../reference.md#pareto-indifference) over lotteries, Harsanyi's theorem makes its ranking $E_L[\sum_i a_i u_i]$. *In words:* such a society sees each person's expected utility and nothing else. It is blind to correlation across people, so it cannot be strictly averse to ex post inequality, and it cannot prefer a fair lottery to a sure allocation with the same expected total. Three conditions, keep any two: **social expected utility** (independence at the social level), **ex ante Pareto**, and **a concern for equality or fair chances**. $W_{\text{post}}$ keeps the first and can violate the second; $W_{\text{ante}}$ keeps the second and violates the first; Harsanyi's sum gives up the third.

**The argument.** (1) A social verdict is meaningful only if invariant under the transformations the information permits. (2) Choice data deliver only CNC. (3) Under CNC no non-dictatorial rule meets Arrow's conditions. ∴ Every working social welfare function rests on a comparability premise that choice data do not supply.

**Where the argument is weakest.** Premise 2's "only". Harsanyi held that people make interpersonal comparisons through *extended preferences* ("I'd rather be her in her situation than him in his"), and a substantive theory of well-being ([`ethics` 1.2](../../ethics/lessons/01-02-what-is-good-for-a-person.md)) could fix levels and units directly. The conclusion then becomes a challenge, not an impossibility: name the source of your comparisons. The trilemma has its own soft spot: it depends on how outcomes are individuated. If "received the kidney through a fair lottery" counts as a different outcome from "was handed it", Diamond's choices no longer break independence. John Broome discusses this redescription; the worry, as in [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md), is that if every violation can be redescribed away, independence constrains nothing.

## Picture

![Two-person utility space, both axes from 0 to 10. A straight blue utilitarian line u1 plus u2 equals 8, a dashed green prioritarian curve square root of u1 plus square root of u2 equals 4 bowed toward the origin, and a red L-shaped maximin contour with its corner at 4, 4 all pass through the point Y at 4, 4. The point X at 1, 9 lies above the utilitarian line, exactly on the prioritarian curve, and outside the maximin corner to the left.](assets/05-02-fig1.svg)

Three iso-welfare curves through $Y = (4, 4)$. Points above the blue line beat $Y$ for the utilitarian; on the green curve tie it for the prioritarian; only points up and to the right of the red corner beat it for maximin. $X = (1, 9)$ is better, equal and worse for the three: Example 1.

## Worked examples

**Example 1 (clean): which verdicts survive.** $X = (1, 9)$, $Y = (4, 4)$.

- Utilitarian: $10 > 8$, so $X$. Maximin: $4 > 1$, so $Y$. Prioritarian with $\sqrt{\ }$: $1 + 3 = 4 = 2 + 2$, a tie.
- *A CUC transformation:* add 6 to person 1's utilities. $X = (7, 9)$, $Y = (10, 4)$. Sums $16 > 14$: utilitarian unchanged, since each sum shifted by 6. Minima $7 > 4$: maximin flips to $X$. Prioritarian: $\sqrt 7 + 3 \approx 5.65$ against $\sqrt{10} + 2 \approx 5.16$: the tie breaks toward $X$. Only the sum survives.
- *An OLC transformation:* replace every utility by its natural log. Comparing sums of logs is comparing products: $1 \times 9 = 9 < 16 = 4 \times 4$, so the utilitarian now picks $Y$. Minima: $\log 1 = 0 < \log 4$, so maximin still picks $Y$. Only the minimum survives.
- *An RFC transformation:* double everything. $\sqrt 2 + \sqrt{18} = 4\sqrt 2 = 2\sqrt 8$: the prioritarian tie survives.

Notice that the utilitarian applied to $\log u$ *is* a prioritarian with $f = \log$. If only levels are comparable, "utilitarian" and "prioritarian" are not yet different claims.

**Example 2 (hard): [Diamond's objection](../reference.md#diamonds-objection) with a kidney.** Peter Diamond (1967), commenting on Harsanyi. Ines and Jun each get 10 with the kidney, 0 without. $G_I$ gives it to Ines, $G_J$ to Jun, $L$ is a fair coin flip.

$$\begin{aligned}
\text{Harsanyi, equal weights: } & G_I = 10,\ G_J = 10,\ L = \tfrac12(10) + \tfrac12(10) = 10,\\
W_{\text{post}},\ f = \sqrt{\ }: \ & G_I = \sqrt{10},\ G_J = \sqrt{10},\ L = \sqrt{10} \approx 3.16,\\
W_{\text{ante}},\ f = \sqrt{\ }: \ & G_I = \sqrt{10} \approx 3.16,\ L = \sqrt 5 + \sqrt 5 \approx 4.47.
\end{aligned}$$

The sum is indifferent, which is Diamond's complaint: it cannot see that Jun gets no chance under $G_I$. So is $W_{\text{post}}$, because every outcome of the lottery is someone getting the kidney. Only $W_{\text{ante}}$ prefers $L$, and it pays: $G_I \sim G_J$, yet their half-and-half mixture $L$ is strictly better, which [independence](../reference.md#independence-axiom) forbids. Diamond accepted that: society should not obey the sure-thing principle.

Now the other horn. Lottery $C$: a coin flip gives both 10 or both 0. Lottery $A$: one gets 10 and the other 0, at random. Each person's expected utility is 5 under both, so Pareto indifference demands $C \sim A$. An ex post egalitarian who ranks by $E[\min_i u_i]$ scores $C = 5$ and $A = 0$. To care that $A$ guarantees an unequal outcome, she must give up ex ante Pareto.

## Watch out

- **You might think vNM's cardinal utility gives the utilitarian what she needs.** It gives CNC: each person's own differences are comparable, no one's against anyone else's. Unit comparability is a further premise.
- **You might think any concern for the worse off answers Diamond.** Ex post views, prioritarian or egalitarian, are indifferent to the coin flip, because its outcomes are as unequal as handing the kidney over. Only ex ante views see the fairness, and they are the ones that break independence.
- **You might think maximin is more modest because it ignores magnitudes.** It needs less *cardinal* information but a different comparison, of levels, which is no less a value-laden claim about whose life is lower.

## One-liner

> Utilitarianism needs comparable units, maximin comparable levels, priority a common zero; and under risk you can keep ex ante Pareto, social expected utility or fair chances, but not all three.

## Problems

**P1 (🟢) *(Formal (a) · Exegetical (b).)*** Three people; $P = (1, 7, 10)$ and $Q = (4, 5, 6)$.

(a) Rank $P$ and $Q$ by the utilitarian sum and by maximin. Then apply $T_1$: $u_1 \mapsto 2u_1 + 5$, $u_2 \mapsto 2u_2$, $u_3 \mapsto 2u_3 - 8$; and separately $T_2$: replace every utility by its natural log. For each transformation, say which ranking survives.
(b) In one sentence each, name the informational basis $T_1$ and $T_2$ belong to, and the comparability each social welfare function needs.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** (a) Three policies give three people $A = (36, 16, 1)$, $B = (25, 16, 9)$, $C = (12, 12, 12)$. Rank them by the utilitarian sum, the prioritarian sum with $f = \sqrt{\ }$, and maximin.
(b) Kai, whose vNM utility is his well-being, alone faces a choice: $R$ gives 0 or 25 with equal chances, $S$ gives 9 for sure. Everyone else is unaffected. Which does Kai prefer? Compute $W_{\text{post}}$ and $W_{\text{ante}}$ with $f = \sqrt{\ }$ for both.
(c) Two sentences: which principle does the view that disagrees with Kai violate, and why can the other not violate it here?

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** One dose, three patients: Pia, Quinn and Rosa. The recipient gets 12, the others 0. $G_P$ gives the dose to Pia; $L$ draws a name uniformly at random.

(a) Compute the equal-weight Harsanyi values and the $W_{\text{ante}}$ values with $f = \sqrt{\ }$ for $G_P$ and $L$. Show that the $W_{\text{ante}}$ verdict cannot be represented by any social expected utility.
(b) Find the crux between Diamond and a defender of Harsanyi's sum: the axiom one accepts and the other rejects. Then state the redescription reply and its cost. 120 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) · Exegetical (b), both strict.)*

(a) Sums: $P = 18 > 15 = Q$. Minima: $Q = 4 > 1 = P$.

$T_1$: $P \mapsto (7, 14, 12)$, $Q \mapsto (13, 10, 4)$. Sums $33 > 27$, so the utilitarian ranking survives (the gap doubles from 3 to 6). Minima $7 > 4$, so maximin flips to $P$.

$T_2$: sums of logs compare products, $1 \times 7 \times 10 = 70 < 120 = 4 \times 5 \times 6$, so the utilitarian ranking flips to $Q$. Minima $\log 1 = 0 < \log 4$, so maximin still picks $Q$.

**Must hit, strict (a):** 18 vs 15 and 4 vs 1; under $T_1$, 33 vs 27 (sum survives) and 7 vs 4 (maximin flips); under $T_2$, 70 vs 120 (sum flips) and minimum survives.

**Must hit, strict (b):**

- $T_1$ has one common unit $a = 2$ and separate shifts: CUC. $T_2$ is one increasing function for everyone: OLC.
- The utilitarian sum needs unit comparability; maximin needs level comparability.

**Wrong turns:** calling $T_1$ "just a rescaling" and expecting everything to survive: the separate shifts move levels. Summing raw logs as decimals is fine, but a rounding slip can hide that $\log 70 < \log 120$; comparing products avoids it.

**Model answer:** (a) Utilitarian $P$, maximin $Q$. $T_1$ keeps the utilitarian verdict and flips maximin; $T_2$ flips the utilitarian verdict and keeps maximin. (b) $T_1$ is CUC, $T_2$ is OLC. The sum needs comparable units; the minimum needs comparable levels.

---

**P2** *(Formal (a)–(b) · Exegetical (c), all strict.)*

(a) Sums: $A = 53$, $B = 50$, $C = 36$. Prioritarian: $A = 6 + 4 + 1 = 11$, $B = 5 + 4 + 3 = 12$, $C = 3\sqrt{12} \approx 10.39$. Minima: $A = 1$, $B = 9$, $C = 12$. Utilitarian $A > B > C$; prioritarian $B > A > C$; maximin $C > B > A$. Three rules, three winners.

(b) Kai: $E[R] = \tfrac12(0) + \tfrac12(25) = 12.5 > 9$, so he prefers $R$.

$$\begin{aligned}
W_{\text{post}}(R) &= \tfrac12\sqrt 0 + \tfrac12\sqrt{25} = 2.5, & W_{\text{post}}(S) &= \sqrt 9 = 3,\\
W_{\text{ante}}(R) &= \sqrt{12.5} \approx 3.54, & W_{\text{ante}}(S) &= 3.
\end{aligned}$$

$W_{\text{post}}$ picks $S$; $W_{\text{ante}}$ picks $R$.

**Must hit, strict (c):**

- $W_{\text{post}}$ overrides the only affected person's own preference between lotteries, so it violates ex ante Pareto.
- $W_{\text{ante}}$ applies an increasing $f$ to each person's expected utility, so it ranks one person's prospects exactly as that person does and cannot violate it.

**Wrong turns:** in (a), stopping at "$A$ and $B$ are close" without noticing each rule picks a different policy. In (b), computing $\sqrt{E[R]}$ for the ex post view: ex post takes $f$ *before* the expectation.

**Model answer:** (a) $A$, $B$, $C$ win under the utilitarian, prioritarian and maximin rules. (b) Kai prefers $R$ (12.5 vs 9); $W_{\text{post}}$: 2.5 vs 3, picks $S$; $W_{\text{ante}}$: 3.54 vs 3, picks $R$. (c) The ex post view violates ex ante Pareto. The ex ante view applies an increasing function to Kai's own expected utility, so it must agree with him.

---

**P3** *(Formal (a), strict · Exegetical (b), strict on the crux; the verdict is not graded.)*

(a) Harsanyi: $G_P = 12 + 0 + 0 = 12$; $L$ gives each an expected 4, total 12. Indifferent.

$W_{\text{ante}}$: $G_P = \sqrt{12} \approx 3.46$; $L = 3\sqrt 4 = 6$. $L$ is strictly better.

By symmetry $G_P$, $G_Q$, $G_R$ all score $\sqrt{12}$, so they are indifferent, and $L = \tfrac13 G_P + \tfrac13 G_Q + \tfrac13 G_R$. Under expected utility a mixture of indifferent lotteries has the same value as each of them, so no social expected utility can rank $L$ strictly above $G_P$.

**Must hit, strict (a):** 12 and 12; 3.46 and 6; the indifference of the three $G$s plus $L$ as their mixture; independence (social expected utility) is what fails.

**Must hit, strict (b):**

- The crux is independence (the sure-thing principle) applied to society's ranking of lotteries. Both sides accept ex ante Pareto; Diamond rejects social independence, the Harsanyi defender keeps it.
- The redescription reply: make "received the dose by fair lottery" part of the outcome, so $L$'s outcomes differ from $G_P$'s and independence is not violated.
- Its cost: if outcomes can always be cut finely enough to absorb any pattern, independence no longer constrains choice (2.3's worry about regret).

**Wrong turns:** locating the crux in Pareto; the sum and $W_{\text{ante}}$ both satisfy ex ante Pareto here. Saying an ex post prioritarian sides with Diamond: it scores every option $\sqrt{12}$.

**Model answer:** (a) Harsanyi 12 and 12; ex ante $\sqrt{12} \approx 3.46$ against 6. The three sure allocations tie and $L$ is their equal mixture, so preferring $L$ breaks independence. (b) Both accept ex ante Pareto. They split over social independence: Diamond gives it up to value fair chances; the defender keeps it and accepts indifference. The defender can redescribe outcomes to include how the dose was allocated. That saves independence, but at the price that the axiom then rules out nothing a fine enough redescription can absorb.

</details>

## Flashback

**From Lesson [4.4](04-04-hard-cases-for-both.md) (Hard cases for both):** *(Formal (a)–(b) · Exegetical (c).)* Death in Damascus, lopsided. Death predicts your city with reliability $0.8$ and waits there. Surviving is worth 100, dying 0, and Aleppo adds a bonus $b$ either way. A deliberational causalist's credence that she will go to Damascus is $c$, so Death is in Damascus with probability $0.8c+0.2(1-c)$ and in Aleppo otherwise.

(a) With $b=12$, write $U(\text{Damascus})$ and $U(\text{Aleppo})$ as functions of $c$. Find the equilibrium credence $c^*$ where they are equal, and say which way deliberation pushes $c$ on each side of it.
(b) Find the smallest $b$ at which deliberation comes to rest on a pure act. Which act, and how does that threshold relate to that act's ratifiability?
(c) At $b=12$, what does evidential decision theory recommend, and what does the deliberational causalist give up that it does not? Two sentences.

<details>
<summary>Solution</summary>

(a) Let $d=0.2+0.6c$, the probability Death is in Damascus. You survive Damascus with probability $1-d$ and Aleppo with probability $d$:

$$\begin{aligned}
U(\text{Damascus}) &= 100(0.8-0.6c)=80-60c,\\
U(\text{Aleppo}) &= 100(0.2+0.6c)+12=32+60c.
\end{aligned}$$

They are equal when $120c=48$, so $c^*=2/5$, where both are worth 56. For $c>2/5$ Aleppo is better, so she leans Aleppo and $c$ falls; for $c<2/5$ Damascus is better and $c$ rises. The equilibrium $c^*=2/5$ is stable, and the bonus has pulled it below the symmetric $1/2$.

(b) In general the curves cross at $80-60c=20+b+60c$, so $c^*=(60-b)/120$. That reaches 0 at $b=60$. For $b\ge60$, Aleppo wins at every $c$ and deliberation rests at $c=0$, a firm choice of Aleppo. This is exactly Aleppo's ratifiability condition: having decided on Aleppo, Death is there with probability 0.8, so $U_A(\text{Aleppo})=20+b$ against $U_A(\text{Damascus})=80$, and $20+b\ge80$ iff $b\ge60$. At $b=12$ neither act is ratifiable: Aleppo gives 32 against 80, Damascus 20 against 92.

**Must hit, strict (c):**

- Evidential decision theory chooses Aleppo: going to either city makes Death 0.8 likely to be there, so $V(\text{Damascus})=20$ and $V(\text{Aleppo})=32$, a stable verdict won by exactly $b$.
- The deliberational causalist ends in a credence of $2/5$ on Damascus, not an act, so she gives up the promise that a theory always names a pure act.

**Wrong turns:** taking Death's location as 0.8 or 0.2 regardless of $c$ in (a): in the deliberational model it moves with your credence, which is what produces the equilibrium. Putting the bonus on Damascus's side, or dropping it from Aleppo's side of the ratifiability test, which gives a threshold of 0 or 80 instead of 60. Calling the evidentialist's verdict unstable: it does not depend on $c$ at all.

**Model answer (c):** Evidential decision theory picks Aleppo, 32 to 20, since either trip makes Death's presence equally likely and only the bonus differs. The deliberational causalist keeps causal value and stability but, at $b=12$, outputs a credence of 2/5 on Damascus instead of a choice.

</details>

## Connections

- **Backward:** [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md)'s Example 2 showed vNM leaves interpersonal scales free; this lesson says which freedoms each social welfare function must remove. [5.1](05-01-harsanyis-aggregation-theorem.md)'s theorem is the source of the trilemma, and Diamond's objection attacks its social independence premise, the same axiom [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md) tested in one person. [3.4](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)'s veil dispute assumed level or unit comparability without naming it.
- **Forward:** [5.3](05-03-population-ethics-total-and-average.md) and [5.4](05-04-population-ethics-escape-routes.md) need RFC or at least a meaningful zero: whether adding a life "worth living" helps depends on where zero sits. [6.3](06-03-moral-uncertainty.md)'s intertheoretic comparison is the same normalization problem across moral theories instead of persons.
- **Sideways:** Arrow's theorem is [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md); this lesson is why it fails once comparisons are allowed. [`philosophy-of-economics` 3.2](../../philosophy-of-economics/lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) owns ex ante vs ex post Pareto and spurious unanimity; [`philosophy-of-economics` 4.2](../../philosophy-of-economics/lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)'s $\eta$ and [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md)'s welfare weights are the prioritarian $f_\eta$ at work. Prioritarianism as a theory of justice is [`political-philosophy`](../../political-philosophy/syllabus.md) 2.6.

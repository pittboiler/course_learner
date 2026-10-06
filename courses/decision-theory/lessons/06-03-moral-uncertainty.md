# Decision Theory · Lesson 6.3: Moral uncertainty

> ⏱ ~15 min · Module 6: The edges of expected value · Builds on: [6.2 Fanaticism and tiny probabilities](06-02-fanaticism-and-tiny-probabilities.md), [5.2 Interpersonal comparison and social welfare functions](05-02-interpersonal-comparison-and-social-welfare-functions.md) · Unlocks: peer disagreement in [`epistemology`](../../epistemology/syllabus.md) [4.5](../../epistemology/lessons/04-05-peer-disagreement.md)

## Why this matters

Every lesson so far held the values fixed and let the facts be uncertain. Jackson's doctor in [ethics 1.5](../../ethics/lessons/01-05-modern-consequentialism.md) did not know which drug cures, but she knew that curing is good. Now remove that comfort. You are fairly sure eating meat is permissible, but not sure. "Do what the true theory says" is no help when you cannot tell which theory is true. This lesson puts the two leading rules for acting under moral uncertainty side by side, computes both, and finds the one quantity that decides between them. That quantity is an exchange rate between theories, and neither theory supplies it.

## The idea

Nadia (an invented case) puts 70 percent credence on a view, $T_1$, on which animals' interests count for little, and 30 percent on a view, $T_2$, on which they count heavily. She can eat meat as usual (A), cut back (B) or go vegan (C). $T_1$ mildly prefers A. $T_2$ strongly prefers C.

**Rule 1: [my favourite theory](../reference.md#my-favourite-theory).** Act on the theory you find most credible. That is $T_1$, so A. Johan Gustafsson and Olle Torpman (*Pacific Philosophical Quarterly*, 2014) defend it: it needs no comparison of value across theories, and it chooses consistently over time, while its rivals, they argue, either face moral money pumps or need comparisons no one can make non-arbitrarily.

**Rule 2: [maximize expected choiceworthiness](../reference.md#expected-choiceworthiness).** Treat theories as states and their verdicts as utilities, and hedge. Ted Lockhart (2000) proposed an early version; William MacAskill, Krister Bykvist and Toby Ord (*Moral Uncertainty*, 2020) give the developed one. A 30 percent chance that you are doing something gravely wrong can outweigh a 70 percent chance of a small loss.

Rule 2 needs something Rule 1 does not. It needs $T_2$'s "gravely" to be bigger than $T_1$'s "mildly" *in a common unit*. That is [intertheoretic comparison](../reference.md#intertheoretic-comparison). Each theory ranks options on its own scale, and nothing inside $T_1$ says what one of its units is worth in $T_2$'s. [5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md) met the same gap between people.

**A historical cousin.** [Moral theology 4.1](../../moral-theology/lessons/04-01-casuistry-and-the-probabilism-controversy.md) traces a two-century Catholic dispute over when you may follow an opinion favouring liberty against one favouring the law. **Probabiliorism** allows liberty only when it is the more probable opinion. Like my favourite theory, it lets which opinion is more probable decide, and stakes do not enter. **Compensationism** weighs the doubt against a proportionate reason for acting. Like expected choiceworthiness, it lets how much is at stake count alongside how likely each side is. These are cousins, not twins. The manualists ranked opinions about whether one law binds, "probable" meant *backed by serious reasons*, not a numerical credence, and no system assigned cardinal choiceworthiness to whole theories.

## The formal version

**Setup.** Theories $T_1, \dots, T_n$ with credences $C(T_i) \ge 0$ summing to 1. A set of options $\mathcal{O}$. Each theory supplies a **choiceworthiness function** $CW_i : \mathcal{O} \to \mathbb{R}$. *In words:* $CW_i(A)$ is how strongly $T_i$ favours A; higher is better.

**My favourite theory (MFT).** Let $T_{i^*}$ be the theory with the highest credence. Choose an option that $T_{i^*}$ ranks best (Gustafsson and Torpman: one it permits). *In words:* find your best-supported theory and obey it.

**Maximize expected choiceworthiness (MEC).**

$$EC(A) = \sum_{i=1}^{n} C(T_i)\, CW_i(A).$$

*In words:* Savage's formula ([2.1](02-01-savages-framework.md)) with theories in the place of states.

**The scale problem.** Suppose each $CW_i$ is meaningful only up to a positive affine transformation $a_i CW_i + b_i$, as a vNM utility is ([affine uniqueness](../reference.md#affine-uniqueness), [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md)). The shift $b_i$ is harmless: it adds $C(T_i)\,b_i$ to every option's $EC$. The unit is not. With two theories, fix $T_1$'s unit and let $T_2$'s be scaled by $k > 0$:

$$EC_k(A) = C(T_1)\, CW_1(A) + C(T_2)\, k\, CW_2(A).$$

*In words:* $k$ is the exchange rate, the number of $T_1$ units one $T_2$ unit is worth, and the verdict can turn on it.

**[Variance normalization](../reference.md#variance-normalization)** (Owen Cotton-Barratt, MacAskill and Ord, *Journal of Philosophy*, 2020). Let $\sigma_i$ be the standard deviation of $CW_i$ across the options, each weighted equally, and use $CW_i / \sigma_i$. With two theories that is the same as setting

$$k = \sigma_1 / \sigma_2 .$$

*In words:* give every theory an equal say, measured by how much it cares about the differences among the options.

**The regress and the belief side.** If you are unsure whether MEC or MFT is right, you need a rule for *that* uncertainty, and then for uncertainty about that rule. Some philosophers deny the project starts. Elizabeth Harman argues that false moral beliefs do not excuse, so moral uncertainty changes nothing about what you ought to do. Brian Weatherson argues that aiming at rightness *as such*, rather than at what makes acts right, is a kind of fetishism. Where the credences come from is the belief-side analogue: when a peer you respect disagrees, should you move toward her? That is peer disagreement ([`epistemology`](../../epistemology/syllabus.md) [4.5](../../epistemology/lessons/04-05-peer-disagreement.md)), applied to morality in [ethics 6.6](../../ethics/lessons/06-06-moral-knowledge-and-disagreement.md).

**The argument for MEC.**

1. Rational choice under uncertainty maximizes expectation.
2. Moral uncertainty is uncertainty like any other.
3. Theories' choiceworthiness lies on one cardinal scale, up to a common unit.

∴ Choose the option with the highest $EC$.

**Where the argument is weakest.** Premise 3. Many theories are merely ordinal, and absolutist theories with exceptionless constraints may admit no finite choiceworthiness at all. For theories that are cardinal, the unit is fixed by stipulation, and Example 2 shows the stipulation can decide the case. MFT keeps its distance from premise 3 and pays elsewhere. It gives up **sensitivity to stakes**: a huge difference under a 49 percent theory counts for nothing. With that goes **invariance to how theories are individuated**: split $T_1$ into two variants at 35 percent each, and $T_2$ becomes the favourite. MEC, in turn, inherits [fanaticism](../reference.md#fanaticism) ([6.2](06-02-fanaticism-and-tiny-probabilities.md)): a low-credence theory with enormous stakes can dominate.

## Picture

![Expected choiceworthiness of three diets plotted against k, the weight on the second theory's unit, from 0 to 3. Meat as usual is flat at 4.2. Cutting back rises from 2.8 with slope 2.4. Vegan rises from 0 with slope 3.6. Meat as usual wins below k equals 7/12, cutting back between 7/12 and 7/3, vegan above 7/3. Dots mark k equals 1/2, the variance-normalized value, and k equals 1, the raw numbers.](assets/06-03-fig1.svg)

Every value of $k$ is a different answer to "how much does $T_2$'s scale count?" The variance-normalized point sits just left of the first crossing, and the raw numbers sit inside B's region.

## Worked examples

**Example 1 (clean): Nadia's verdicts and the $k$-ranges.** Choiceworthiness (illustrative numbers):

| | A meat | B cut back | C vegan |
|---|---|---|---|
| $T_1$ (0.7) | 6 | 4 | 0 |
| $T_2$ (0.3) | 0 | 8 | 12 |

*MFT:* $T_1$ is favourite, and its best option is A.

*MEC with the raw numbers ($k = 1$):*

$$\begin{aligned}
EC(A) &= 0.7(6) = 4.2,\\
EC(B) &= 0.7(4) + 0.3(8) = 5.2,\\
EC(C) &= 0.3(12) = 3.6.
\end{aligned}$$

B wins. Hedging picks the option neither theory ranks first.

*Ranges.* In general $EC_k(A) = 4.2$, $EC_k(B) = 2.8 + 2.4k$ and $EC_k(C) = 3.6k$. B beats A when $2.4k > 1.4$, that is $k > 7/12$. C beats B when $1.2k > 2.8$, that is $k > 7/3$. So A wins for $k < 7/12$, B for $7/12 < k < 7/3$, and C for $k > 7/3$. The A-C tie at $k = 7/6$ falls inside B's region and decides nothing.

**Example 2 (where it strains): normalize Nadia's theories.** $T_1$'s values $(6, 4, 0)$ have mean $10/3$ and variance $56/9$. $T_2$'s values $(0, 8, 12)$ have mean $20/3$ and variance $224/9$, four times as much. So $\sigma_2 = 2\sigma_1$ and $k = 1/2$:

$$EC(A) = 4.2,\quad EC(B) = 2.8 + 1.2 = 4.0,\quad EC(C) = 1.8.$$

A wins, by 0.2. "Equal say" flips the raw verdict back to MFT's. Two lessons follow. First, $k = 1$ was never neutral: it was this lesson's choice of numbers. Second, the normalization depends on the menu. Add an option $T_1$ thinks atrocious, and $\sigma_1$ grows, so $T_1$'s voice shrinks. An option nobody chooses can then reverse the ranking of two that someone might (P2). That gives up independence of irrelevant alternatives, the [Milnor condition](../reference.md#milnor-axioms) minimax regret gave up in [3.3](03-03-decisions-under-ignorance.md). Defenders reply by normalizing over a fixed background set of options rather than the menu at hand. That restores independence, at the price of choosing the set.

## Watch out

- **You might think MFT needs no comparisons at all.** It needs no comparison of *units*. It still needs credences across theories and a way to count theories, and the count can change the favourite.
- **You might think the raw numbers ($k = 1$) are a neutral default.** "Six" under $T_1$ and "six" under $T_2$ mean the same only given a bridging principle. Setting $k = 1$ is a substantive claim of comparability.
- **You might think variance normalization is assumption-free.** "Equal say" is a fairness ideal among theories, and its verdict moves with the option set.

## One-liner

> Hedge across moral theories and you need an exchange rate between them; my favourite theory refuses to set one and ignores the stakes, expected choiceworthiness sets one and its verdict moves with it.

## Problems

**P1 (🟢) *(Formal (a), (b).)*** An invented ethics committee has credence 0.75 in theory $T_1$ and 0.25 in $T_2$. Policies X, Y and Z have choiceworthiness 6, 5 and 0 under $T_1$, and 0, 4 and 12 under $T_2$. (a) Give the MFT verdict, and the MEC verdict with the raw numbers. (b) Scale $T_2$'s choiceworthiness by $k > 0$ and find the range of $k$ on which each policy wins.

**P2 (🟡) *(Formal (a), (b) · Exegetical (c).)*** Credence 0.8 in $T_1$, 0.2 in $T_2$. Option A scores 2 under $T_1$ and 0 under $T_2$; option B scores 0 under $T_1$ and 20 under $T_2$. (a) Find the MEC verdict with the raw numbers, and with variance normalization over $\{A, B\}$. (b) Option D joins the menu, scoring $-8$ under $T_1$ and 4 under $T_2$. Redo the variance-normalized MEC over $\{A, B, D\}$. (c) Name the condition from 3.3 that (a)–(b) show is violated, and one repair. **One sentence each.**

**P3 (🔴) *(Exegetical (a) · Evaluative (b).)*** An invented exchange on a hospital ward:

> **Hana:** "Even if I'm only 10 percent sure the strict view is right that lying to a patient is gravely wrong, the stakes on that view dwarf the small comfort the lie buys on the welfare view. So I shouldn't lie."
>
> **Omar:** "'Dwarf' compares one theory's verdict with another's on a scale neither theory contains. On the theory I find most credible, this lie is permissible, so I may tell it."

(a) Name the single premise they split on, and what each rule gives up to keep its side. **Two sentences.** (b) Say what argument or case would move each of them. Any verdict. **100 words or fewer.**

<details>
<summary>Solutions</summary>

**P1** *(Formal (a), (b).)*

**Must hit, strict (a):**

- MFT: $T_1$ (0.75) is favourite; its best policy is X.
- MEC raw: $EC(X) = 0.75(6) = 4.5$; $EC(Y) = 0.75(5) + 0.25(4) = 3.75 + 1 = 4.75$; $EC(Z) = 0.25(12) = 3$. Y wins.

**Must hit, strict (b):**

- $EC_k(X) = 4.5$, $EC_k(Y) = 3.75 + k$, $EC_k(Z) = 3k$.
- Y beats X iff $k > 0.75$. Z beats Y iff $2k > 3.75$, that is $k > 15/8$.
- X wins for $k < 3/4$, Y for $3/4 < k < 15/8$, Z for $k > 15/8$.

**Wrong turns:** reporting the X-Z tie at $k = 3/2$ as a boundary; it lies inside Y's region, where Y beats both. Scaling $T_1$ instead of $T_2$, which inverts the thresholds.

**Model answer:** (a) MFT picks X; MEC with raw numbers picks Y (4.75 against 4.5 and 3). (b) X for $k < 3/4$, Y for $3/4 < k < 15/8$, Z for $k > 15/8$.

---

**P2** *(Formal (a), (b) · Exegetical (c).)*

**Must hit, strict (a):**

- Raw: $EC(A) = 0.8(2) = 1.6$, $EC(B) = 0.2(20) = 4$. B wins.
- Normalized over $\{A, B\}$: $T_1$'s values $(2, 0)$ have mean 1 and $\sigma_1 = 1$; $T_2$'s $(0, 20)$ have mean 10 and $\sigma_2 = 10$. So $k = 1/10$: $EC(A) = 1.6$, $EC(B) = 0.2 \times \tfrac{1}{10} \times 20 = 0.4$. A wins.

**Must hit, strict (b):**

- $T_1$: $(2, 0, -8)$, mean $-2$, deviations $4, 2, -6$, variance $56/3$.
- $T_2$: $(0, 20, 4)$, mean 8, deviations $-8, 12, -4$, variance $224/3$.
- Ratio $1/4$, so $k = 1/2$: $EC(A) = 1.6$, $EC(B) = 0.2 \times \tfrac12 \times 20 = 2$, $EC(D) = 0.8(-8) + 0.2 \times \tfrac12 \times 4 = -6$. B wins; D is chosen by no one.

**Must hit, strict (c):** independence of irrelevant alternatives (Milnor's row adjunction): adding D, which is not chosen, reverses the ranking of A and B. Repair: normalize over a fixed background set of options instead of the current menu.

**Wrong turns:** dividing by the variance instead of the standard deviation (this gives $k = 1/100$ in (a)). Treating D as irrelevant because no one chooses it, and so reusing $k = 1/10$ in (b).

**Model answer:** (a) Raw MEC picks B (4 against 1.6); variance-normalized MEC over the pair picks A (1.6 against 0.4). (b) Over the three options $k = 1/2$, and B wins with 2 against 1.6 and $-6$. (c) Independence of irrelevant alternatives fails, since an unchosen option flipped A and B; normalizing over a fixed background set restores it.

---

**P3** *(Exegetical (a) · Evaluative (b), any verdict.)*

**Must hit, strict (a):**

- The crux is intertheoretic unit comparability (premise 3): whether "gravely wrong" on one theory and "small comfort" on another lie on a common scale.
- Hana's MEC keeps stakes-sensitivity and pays with the comparability assumption, plus exposure to fanaticism if the strict view's wrong is unbounded. Omar's MFT avoids comparison and gives up stakes-sensitivity and invariance to how theories are individuated.

**Must hit, any verdict (b):**

- A move for Hana: show the comparison is arbitrary. An absolutist view may give no finite number, and any chosen normalization can flip the verdict.
- A move for Omar: a case where his favourite wins by a hair while the rival sees a catastrophe, or splitting his favourite into two variants so that it stops being the favourite.

**Wrong turns:** grading the verdict on lying. Saying they disagree about the credences; both can accept 10 percent.

**Model answer (b), one of several:** Hana should be moved by the scale problem in its strongest form. Her strict view forbids lying absolutely, so it has no finite choiceworthiness to weigh, and with any finite stand-in the verdict depends on a normalization she chose. Omar should be moved by stakes. Suppose his favourite were 51 percent likely and called the lie barely better, while the rival at 49 percent called it monstrous. MFT would ignore the 49 percent entirely. And if the welfare view split into two variants he would have to reconsider whether it is still his favourite, though nothing about the patient changed.

</details>

## Flashback

**From Lesson [6.1](06-01-pascals-wager-as-a-decision-problem.md) (Pascal's wager as a decision problem):** *(Formal (a)–(b) · Exegetical (c).)* A wager matrix with a finite heaven and a finite hell. Wagering for God yields $H = 2{,}000$ if God exists and $f_1 = 40$ if not. Wagering against yields $f_2 = -500$ if God exists and $f_3 = 50$ if not.

(a) Find the threshold credence $p^*$ as an exact fraction. What threshold would you get by mistakenly using $H$ in place of the gain $g$?
(b) Your credence is $p = \tfrac{1}{300}$. Which act wins? Holding $H$, $f_1$ and $f_3$ fixed, how severe must the punishment $f_2 = -x$ be for wagering to win at this credence?
(c) Now change only $f_1$ to 50. Which of Pascal's three arguments goes through, what credence does it need, and what did Pascal himself concede that rules this case out? Two sentences.

<details>
<summary>Solution</summary>

(a) The cost is $c = f_3 - f_1 = 10$ and the gain is $g = H - f_2 = 2{,}500$, so

$$p^* = \frac{10}{2{,}510} = \frac{1}{251}.$$

Using $H$ instead gives $10/2{,}010 = 1/201$, too high: escaping the punishment is part of what wagering gains.

(b) Since $\tfrac{1}{300} < \tfrac{1}{251}$, wagering against wins:

$$\begin{aligned}
EU(W) &= \tfrac{2{,}000}{300} + \tfrac{299}{300}(40) \approx 46.53,\\
EU(A) &= \tfrac{-500}{300} + \tfrac{299}{300}(50) \approx 48.17.
\end{aligned}$$

With $f_2 = -x$, wagering wins iff $\tfrac{1}{300} > \tfrac{10}{2{,}010 + x}$, that is $2{,}010 + x > 3{,}000$, so $x > 990$. At $x = 990$ the acts tie.

**Must hit, strict (c):**

- With $f_1 = f_3 = 50$, $W$ weakly dominates $A$ (equal if there is no God, 2,000 against $-500$ if there is), so the argument from dominance goes through and needs no credence at all. In expectation $W$ wins at every $p > 0$, since $p^* = 0/2{,}500 = 0$, with no infinite prize.
- Pascal conceded that a believing life gives up some pleasures, so $f_1 < f_3$, which is the case in (a)–(b).

**Wrong turns:** the $1/201$ threshold from dropping $f_2$. Answering (b) with $x \ge 990$: at 990 the acts tie. Saying (c) needs $H = \infty$: dominance needs only "lose nothing".

</details>

## Connections

- **Backward:** MEC is expected utility ([1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md)) with theories as states. Its scale problem is [5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md)'s unit comparability between people, moved up to theories. Variance normalization's menu-dependence is [3.3](03-03-decisions-under-ignorance.md)'s independence of irrelevant alternatives. A low-credence theory with vast stakes is [6.2](06-02-fanaticism-and-tiny-probabilities.md)'s fanatic in moral form.
- **Forward:** where credences in theories come from is peer disagreement in [`epistemology`](../../epistemology/syllabus.md) [4.5](../../epistemology/lessons/04-05-peer-disagreement.md). Boss 6 asks for expected choiceworthiness and its exchange-rate ranges on a fresh table.
- **Sideways:** [moral theology 4.1](../../moral-theology/lessons/04-01-casuistry-and-the-probabilism-controversy.md) ran the stakes-versus-probability dispute two centuries early (probabiliorism, compensationism). [Ethics 6.6](../../ethics/lessons/06-06-moral-knowledge-and-disagreement.md) asks whether moral disagreement undermines moral knowledge. Finding the premise Hana and Omar split on is [finding the crux](../../philosophical-method/lessons/04-03-finding-the-crux.md).

## Closing the course

Every module ended the same way: a dispute that looked like a clash of intuitions turned out to be a choice of which axiom to give up.

- **Module 1:** expected utility needs completeness, transitivity, continuity and independence. Taming every St. Petersburg game costs unbounded utility, and the theorem alone gives no reason to obey its axioms.
- **Module 2:** the Allais chooser gives up the sure-thing principle, or else denies that "the same outcome" stays the same across lotteries.
- **Module 3:** the Ellsberg chooser gives up the sure-thing principle for beliefs, or else a single prior. Under ignorance, every rule gives up one of Milnor's conditions, and behind the veil the question is whether you face risk or ignorance.
- **Module 4:** causal decision theory gives up evidential expected value, and evidential decision theory gives up causal dominance. Ratifiability shows that some cases leave no stable act.
- **Module 5:** Harsanyi's theorem turns vNM rationality plus Pareto indifference into a weighted sum, and the weights need a comparability premise it cannot supply. In population ethics you accept the repugnant conclusion or give up mere addition, impersonal improvement, or the transitivity of "better than".
- **Module 6:** an infinite prize breaks continuity. Resisting fanaticism costs either unbounded utility or the right to count every probability. Hedging across moral theories needs intertheoretic comparability, and refusing to hedge gives up sensitivity to stakes.

Where to go next: credence and disagreement in [`epistemology`](../../epistemology/syllabus.md); Rawls in full in [`political-philosophy`](../../political-philosophy/syllabus.md); aggregation of judgments in [`social-choice`](../../social-choice/syllabus.md); the wager's religious question in [`philosophy-of-religion`](../../philosophy-of-religion/syllabus.md); utility and welfare in practice in [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md); and the moral theories you have been hedging between in [`ethics`](../../ethics/syllabus.md).

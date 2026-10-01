# Decision Theory · Lesson 1.2: From expected value to expected utility

> ⏱ ~15 min · Module 1: Expected utility and what it claims · Builds on: [1.1 Acts, states, outcomes](01-01-acts-states-outcomes.md) · Unlocks: [1.3 The vNM theorem and how utility is built](01-03-the-vnm-theorem-and-how-utility-is-built.md), [2.4 Risk beyond curvature](02-04-risk-beyond-curvature.md), [6.2 Fanaticism and tiny probabilities](06-02-fanaticism-and-tiny-probabilities.md)

## Why this matters

[1.1](01-01-acts-states-outcomes.md) put decisions into tables. The first rule anyone proposes for choosing from a table is to weight each payoff by its probability and take the act with the highest average. One coin game breaks that rule. The fix Bernoulli offered is the ancestor of every utility function in economics, and it raises two questions this course keeps returning to. The game can be rebuilt so that the fix fails again. And the obvious repair, bounded utility, has costs of its own, which come back in [6.2](06-02-fanaticism-and-tiny-probabilities.md) as fanaticism.

## The idea

A fair coin is tossed until it first lands heads. If that happens on toss $n$, you win $2^n$ dollars: 2 if heads comes at once, 4 if on the second toss, 8 on the third, and so on. What would you pay to play?

Each possible ending contributes the same amount to the average: probability $2^{-n}$ times prize $2^n$ is 1 dollar, for every $n$. There are infinitely many endings, so the [expected value](../reference.md#expected-value) is infinite. An expected-value maximizer should pay any finite price to play: her house, her savings, a billion dollars. Almost nobody will pay more than a few tens of dollars. This is the [St. Petersburg game](../reference.md#st-petersburg-game). Nicolaus Bernoulli posed a version of it in a 1713 letter to Pierre Rémond de Montmort. It takes its name from the journal of the St. Petersburg Academy, where his cousin Daniel Bernoulli published a solution in 1738.

Daniel's diagnosis was that a dollar is not worth the same to everyone at every level. An extra thousand dollars means a great deal to someone who has nothing and little to a millionaire. So average the *value* of the outcomes, not their dollar amounts. If value grows slowly enough with money, the huge prizes in the far tail stop dominating, and the game is worth a modest sum. Gabriel Cramer had made the same move a decade earlier, in a 1728 letter to Nicolaus, using a square-root rule. Daniel proposed a logarithm.

Keep three claims apart from the start. *Descriptive:* people will not pay much to play. *Normative:* a rational person should not pay much. *Formal:* an expected-utility maximizer with a suitably concave utility will not pay much. Bernoulli's fix proves the third. Whether it explains the first or justifies the second is a separate question.

## The formal version

A **lottery** $L$ gives outcome $x_i$ with probability $p_i$, where $i = 1, 2, \dots$ indexes the outcomes and the $p_i$ sum to 1. Outcomes here are dollar amounts.

**Expected value:**

$$\mathrm{EV}(L) = \sum_i p_i\, x_i .$$

*In words:* the long-run average payout per play.

**[Expected utility](../reference.md#expected-utility).** Fix a utility function $u$ assigning a real number to each outcome. Then

$$\mathrm{EU}(L) = \sum_i p_i\, u(x_i).$$

*In words:* average the outcomes' values, not their sizes. Choose the lottery with the highest EU. With $u(x) = x$ this is expected-value maximization again. [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) shows how $u$ is built from choices; here take it as given.

**[Certainty equivalent](../reference.md#certainty-equivalent).** For increasing $u$, the $\mathrm{CE}(L)$ is the sure amount with the same utility as the lottery: $u(\mathrm{CE}) = \mathrm{EU}(L)$. *In words:* the most this agent would pay for $L$, ignoring her other wealth.

**[Risk aversion](../reference.md#risk-aversion) as concavity.** A concave $u$ makes $\mathrm{CE}(L) < \mathrm{EV}(L)$ for every non-degenerate lottery (Jensen's inequality). The Arrow-Pratt measures of how strongly $u$ bends belong to [`grad-micro` 2.5](../../grad-micro/lessons/02-05-choice-under-uncertainty.md) and are not repeated here.

**The capped game.** No casino can pay an unlimited amount. If it pays at most $2^K$, the tosses $n = 1, \dots, K$ each still contribute 1 dollar, and every later ending, with total probability $2^{-K}$, pays $2^K$:

$$\mathrm{EV}_K = K + 2^{-K}\cdot 2^K = K + 1 .$$

*In words:* the expected payout grows only with the number of doublings the bank can afford. A cap of $2^{30}$, about 1.07 billion dollars, gives an expected value of 31 dollars.

**The [super-Petersburg game](../reference.md#super-petersburg-game).** Karl Menger (1934) showed that concavity alone does not save expected utility. Suppose $u$ is unbounded above. Then for each $n$ there is a prize $x_n$ with $u(x_n) \ge 2^n$. Pay $x_n$ when the first head comes on toss $n$:

$$\mathrm{EU} = \sum_{n\ge1} 2^{-n} u(x_n) \ \ge\ \sum_{n\ge1} 1 = \infty .$$

*In words:* for any unbounded utility function, some game grows its prizes fast enough to outrun it. The only way to rule out every such game is a [bounded utility](../reference.md#bounded-utility) function: a ceiling $B$ with $u(x) \le B$ for all $x$. Then $\mathrm{EU}(L) \le B$ for every lottery.

**The argument.** Bernoulli's case, reconstructed:

1. **P1.** A rational price for the St. Petersburg game is finite and modest.
2. **P2.** Expected-value maximization prices it at infinity.
3. **P3.** Under expected-utility maximization with a suitable concave $u$, the price is finite.
4. **C.** So rational choice maximizes expected utility, not expected value.

**Where the argument is weakest.** P3 holds for each fixed $u$ only against *this* game. Menger's construction shows that every unbounded $u$ faces a game with infinite expected utility. So the conclusion holds up only if utility is bounded, and bounded utility has costs (Example 2). P1 is also less secure than it looks. The capped game shows that a realistic bank already brings the expected value down to about 31 dollars. The low price people offer may also reflect distrust of tiny probabilities rather than the shrinking value of money, which is a different diagnosis ([6.2](06-02-fanaticism-and-tiny-probabilities.md)). Finally, one function $u$ now does two jobs: it measures how much more money is worth and how much the agent dislikes spread. Whether those must be the same curve is the question of [2.4](02-04-risk-beyond-curvature.md).

## Picture

![Two panels. Left: expected payout of the St. Petersburg game against the cap exponent K, a straight line EV equals K plus 1, with points marked at K equals 10 giving 11 dollars and K equals 30, a cap of about 1.07 billion dollars, giving 31 dollars. Right: the square-root utility curve over payouts from 0 to 12 dollars, with a dashed horizontal line at expected utility 2.41 meeting the curve above a certainty equivalent of 5.83 dollars, although the expected payout of the uncapped game is infinite.](assets/01-02-fig1.svg)

Left: capping the bank tames expected value, but only slowly; each doubling of the cap adds 1 dollar. Right: a concave utility tames the uncapped game directly. The certainty equivalent is read off where the curve reaches the game's expected utility.

## Worked examples

**Example 1 (clean): Cramer's square root.** Let $u(x) = \sqrt{x}$ and play the uncapped game.

$$\mathrm{EU} = \sum_{n\ge1} 2^{-n}\sqrt{2^n} = \sum_{n\ge1} 2^{-n/2} = \frac{2^{-1/2}}{1 - 2^{-1/2}} = \frac{1}{\sqrt2 - 1} = \sqrt2 + 1 \approx 2.414 .$$

The certainty equivalent solves $\sqrt{\mathrm{CE}} = \sqrt2 + 1$:

$$\mathrm{CE} = (\sqrt2+1)^2 = 3 + 2\sqrt2 \approx 5.83 \text{ dollars}.$$

So the square-root agent prices a game with infinite expected value at under 6 dollars. (Cramer's own version paid $2^{n-1}$, half our prizes, which halves the CE to about 2.9.)

**Example 2 (hard): Menger's game against Bernoulli's log, and the price of a ceiling.** Take $u(x) = \log_2 x$. Let the game pay $2^{2^n}$ dollars when the first head comes on toss $n$: 4, 16, 256, 65,536, then about 4.3 billion. Then $u(x_n) = 2^n$, and

$$\mathrm{EU} = \sum_{n\ge1} 2^{-n}\cdot 2^n = 1 + 1 + 1 + \cdots = \infty .$$

The paradox is back in full: the log agent should give up any finite sum to play.

Now bound utility: $u(x) = 1 - 2^{-x/1000}$, which rises toward 1 and never reaches it. Every lottery has EU below 1, so every lottery has a finite CE. For Menger's game the computation gives $\mathrm{EU} \approx 0.149$ and $\mathrm{CE} \approx 234$ dollars. The game is tamed.

Here is the cost. Offer this agent a fair coin flip: lose 1,000 dollars on tails, win $G$ dollars on heads, with $G$ as large as you like. With $u(0) = 0$,

$$\mathrm{EU} = \tfrac12\big(1 - 2^{1}\big) + \tfrac12\big(1 - 2^{-G/1000}\big) = -\tfrac12\cdot 2^{-G/1000} < 0 .$$

She refuses for every $G$, a trillion included, because the most heads can add is $\tfrac12$ while tails costs exactly $\tfrac12$. This is not peculiar to the formula. For any utility bounded above, some finite loss is large enough that no gain on a coin flip can offset it. The bounded-utility theorist must accept that, or argue that our intuitions about trillions are not trustworthy evidence. The unbounded theorist must accept Menger's game instead. Neither side escapes for free: the split is over whether utility may be unbounded, which is where [6.2](06-02-fanaticism-and-tiny-probabilities.md) picks the question up with lives instead of dollars.

## Watch out

- **You might think the St. Petersburg game shows people are risk averse.** It shows only that their price is far below the expected value. Concave utility, a finite bank, and ignoring tiny probabilities all predict that, and they are different explanations.
- **You might think a more concave $u$, such as a logarithm, finally solves the paradox.** Every unbounded $u$, however concave, has a super-Petersburg game. Only a bound rules them all out.
- **You might think a certainty equivalent is a fact about the lottery.** It is a fact about the lottery *and* the agent's $u$. The same game is worth 5.83 dollars to the square-root agent and nothing finite to the log agent facing Menger's version.

## One-liner

> Bernoulli replaced averaging dollars with averaging utility, which tames one game; Menger showed that only a utility ceiling tames them all, and the ceiling makes you refuse a coin flip with an unlimited upside.

## Problems

**P1 (🟢) *(Formal.)*** A coin is tossed until the first head. If that comes on toss $n$, the game pays $3^n$ dollars.

(a) Show that the expected value is infinite. Then compute the expected value when the casino pays at most $3^{10} = 59{,}049$ dollars, as an exact fraction.
(b) Find the certainty equivalent of the uncapped game for an agent with $u(x) = \ln x$. You may use $\sum_{n\ge1} n\,2^{-n} = 2$.

**P2 (🟡) *(Formal (a) · Exegetical (b).)***

(a) Construct a game of the coin-tossing kind whose expected utility is infinite for an agent with $u(x) = \sqrt{x}$. Show the sum.
(b) A reader concludes: "So square roots are too gentle; a logarithm would have been safe." In two sentences, say why no unbounded utility function is safe, and what the only general escape is.

**P3 (🔴, optional) *(Formal (a) · Evaluative (b).)*** An agent has $u(x) = 1 - 2^{-x/100}$, where $x$ is her gain in dollars (so $u(0) = 0$). She is offered a gamble: with probability $\tfrac34$ she wins $G$ dollars, and with probability $\tfrac14$ she loses $L$ dollars.

(a) Find the smallest loss $L$ at which she refuses the gamble for every gain $G$, however large.
(b) A critic calls (a) a reductio of bounded utility. A defender replies that unbounded utility must swallow Menger's game instead. Say which axiom or assumption each side keeps and which it gives up, and whether each side's bitten bullet generalizes. 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) Toss $n$ contributes $2^{-n}\cdot 3^n = (3/2)^n$, a growing term, so the sum diverges. With the cap, tosses 1 to 10 contribute $\sum_{n=1}^{10}(3/2)^n$ and every later ending (probability $2^{-10}$) pays $3^{10}$:

$$\begin{aligned}
\mathrm{EV}_{10} &= \sum_{n=1}^{10}\left(\tfrac32\right)^n + \left(\tfrac32\right)^{10} = 3\left[\left(\tfrac32\right)^{10} - 1\right] + \left(\tfrac32\right)^{10} \\
&= 4\left(\tfrac32\right)^{10} - 3 = \frac{59049}{256} - 3 = \frac{58281}{256} \approx 227.66 \text{ dollars}.
\end{aligned}$$

(b) $u(3^n) = n\ln 3$, so

$$\mathrm{EU} = \ln 3 \sum_{n\ge1} n\,2^{-n} = 2\ln 3 = \ln 9 .$$

So $\ln \mathrm{CE} = \ln 9$ and $\mathrm{CE} = 9$ dollars.

**Must hit, strict:** the divergence argument (terms do not shrink); the tail term $3^{10}\cdot 2^{-10}$ in the capped sum; $\mathrm{EU} = 2\ln 3$ and $\mathrm{CE} = 9$.

**Wrong turns:** dropping the tail term, which gives $\approx 170.00$ instead of $227.66$. Reporting $\mathrm{EU} = \ln 9$ as the price instead of exponentiating to 9 dollars.

---

**P2** *(Formal (a) · Exegetical (b), both strict.)*

**Accept:** any prizes $x_n$ with $\sum_n p_n\sqrt{x_n} = \infty$, shown by a sum whose terms do not shrink to zero or that is otherwise shown to diverge.

(a) Model answer: pay $4^n$ dollars if the first head comes on toss $n$. Then $\sqrt{4^n} = 2^n$ and

$$\mathrm{EU} = \sum_{n\ge1} 2^{-n}\cdot 2^n = \sum_{n\ge1} 1 = \infty .$$

**Must hit, strict (b):**

- Menger's construction works for *any* unbounded $u$: choose $x_n$ with $u(x_n) \ge 2^n$, which exists because $u$ is unbounded, and the expected utility diverges. For the log, $x_n = 2^{2^n}$ does it.
- The only general escape is a utility function bounded above.

**Wrong turns:** thinking more curvature helps; concavity slows $u$ down, but if it never levels off at a ceiling, a fast enough prize sequence catches it. Answering with a cap on the casino: that changes the game, not the theory.

**Model answer (b):** Every unbounded utility function, however concave, faces a game whose prizes are chosen to have utility $2^n$, so its expected utility diverges; the log is beaten by prizes of $2^{2^n}$. Only a utility function with a finite ceiling rules out every such game.

---

**P3** *(Formal (a) · Evaluative (b).)*

(a) With $u(0) = 0$ she accepts only if

$$\mathrm{EU} = \tfrac34\big(1 - 2^{-G/100}\big) + \tfrac14\big(1 - 2^{L/100}\big) = 1 - \tfrac14\, 2^{L/100} - \tfrac34\, 2^{-G/100} > 0 .$$

As $G$ grows, $2^{-G/100}$ falls toward 0, so EU rises toward $1 - \tfrac14 2^{L/100}$ but never reaches it. If $2^{L/100} \ge 4$, EU is negative for every $G$. That is $L \ge 200$, so the smallest such loss is **200 dollars**. For any $L < 200$, a large enough $G$ makes EU positive.

**Must hit, strict (a):** the supremum over $G$ is $1 - \tfrac14 2^{L/100}$, not attained; refusal for all $G$ iff $2^{L/100} \ge 4$; $L = 200$.

**Must hit, any verdict (b):**

- Both sides keep expected-utility maximization. The bounded side gives up unbounded utility; the unbounded side gives up a finite value for every lottery (and with it, comparisons among games like Menger's).
- The bounded side's bullet generalizes: *every* utility bounded above refuses some fair-odds gamble with unlimited upside.
- The unbounded side's bullet generalizes too: *every* unbounded $u$ faces a game it values infinitely, so it must pay any finite price.
- State what would move each side, e.g. whether intuitions about astronomically large gains are reliable evidence.

**Wrong turns:** answering $L > 200$ (at exactly 200 she already refuses, since EU stays strictly negative). In (b), declaring a winner without saying what each side gives up, or treating the cap on the casino as a third answer to a question about utility.

**Model answer (b), one of several:** Both keep expected-utility maximization and disagree about one assumption, whether $u$ may be unbounded. The critic keeps unboundedness and so must give infinite value to Menger's game, paying any finite price for it. That bullet generalizes to every unbounded $u$. The defender bounds $u$ and so must refuse a 1-in-4 loss of 200 dollars against any gain whatever. That bullet also generalizes, to every utility bounded above. The defender can say our intuitions about trillions are untrustworthy, since we never handle such sums. The critic can say an infinite valuation is worse than a strange refusal. Neither reply removes the other side's cost. The question is which intuition is weaker evidence.

</details>

## Connections

- **Backward:** [1.1](01-01-acts-states-outcomes.md) gave the table; this lesson gives the first rule for choosing from it with probabilities attached. The divergent expectation is the same series as the divergent mean noted in [`probability-theory` 2.3](../../probability-theory/lessons/02-03-lebesgue-integral-expectation.md); here it is a question about what to pay.
- **Forward:** [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) builds $u$ from choices instead of assuming it. [2.4](02-04-risk-beyond-curvature.md) asks whether risk attitude must live in the curvature of $u$. [6.2](06-02-fanaticism-and-tiny-probabilities.md) returns to bounded utility when the stakes are lives and the probabilities are tiny.
- **Sideways:** certainty equivalents, risk premia and the Arrow-Pratt coefficients are worked in [`grad-micro` 2.5](../../grad-micro/lessons/02-05-choice-under-uncertainty.md) and [`micro-refresher` 2.2](../../micro-refresher/lessons/02-02-risk-aversion.md). The expected-value reasoning in [`ethics` 1.5](../../ethics/lessons/01-05-modern-consequentialism.md) inherits the same choice between averaging outcomes and averaging their value.

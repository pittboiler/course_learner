# Grad Game Theory · Lesson 1.5: Expected utility and the von Neumann–Morgenstern axioms

> ⏱ ~15 min · Module 1: Mathematical foundations · Builds on: [1.4 Zero-sum games, minimax, and LP duality](01-04-zero-sum-minimax-lp-duality.md) · Unlocks: [2.1 Normal-form games, dominance, and rationalizability](02-01-normal-form-dominance-rationalizability.md)

## Why this matters

Every game we solve from here on has players maximizing an *expected payoff*: a mixed strategy is a lottery over your actions, an opponent's type is a lottery over who you're facing, and Nature deals random moves. We will write payoffs as $\sum_i p_i \, u(x_i)$ — the probability-weighted average of utility numbers — and treat maximizing it as obviously the rational thing to do. But that is not obvious. Why should a rational agent rank risky prospects by the *expectation* of some number, rather than by variance, worst case, or anything else? The von Neumann–Morgenstern (vNM) theorem is the answer: it pins down exactly which preferences over lotteries admit an expected-utility representation, and the crucial payoff for game theory is that such a representation is **linear in the probabilities**. That linearity is what makes a mixed-strategy payoff a straight-line function of the mixing weights — the fact every indifference condition and best-response computation in Module 2 leans on.

## The idea

Start with **outcomes** — deterministic prizes: 10 dollars, an apple, "you win the match." A **lottery** is a probability distribution over outcomes: "40% chance of 100 dollars, 60% chance of nothing." A rational agent has preferences $\succeq$ not just over outcomes but over *lotteries* — she can say which gambles she'd rather face.

The question is: can we summarize those preferences with a single number attached to each lottery, so "prefer" means "bigger number"? If the number is allowed to be *anything*, sure — that's just ordinal utility. The vNM demand is far stronger and far more useful: we want a number $u(x)$ on each **outcome** such that a lottery's value is the **average** of those numbers, weighted by its probabilities. Then comparing gambles reduces to comparing expectations of a fixed prize-scale.

The miracle is that a short list of "obviously reasonable" consistency conditions on $\succeq$ forces exactly this form. And once payoffs are expectations of a fixed $u$, mixing two lotteries mixes their values *linearly*: a lottery that is "$\alpha$ of gamble $L$ and $1-\alpha$ of gamble $L'$" is worth $\alpha$ (value of $L$) $+ (1-\alpha)$ (value of $L'$). Straight line in $\alpha$. Hold that thought — it is the whole reason this lesson exists in a game theory course.

## The formal version

Let $X$ be a finite set of outcomes. A **lottery** $L$ assigns probability $p_i \ge 0$ to outcome $x_i$, with $\sum_i p_i = 1$; the set of all lotteries is the simplex $\Delta(X)$. An agent has a preference relation $\succeq$ on $\Delta(X)$ ($\succ$ strict, $\sim$ indifferent). The vNM axioms:

- **(A1) Completeness & transitivity.** For all $L, L'$: either $L \succeq L'$ or $L' \succeq L$ (or both), and $\succeq$ is transitive.
  *In words: the agent can rank any two gambles, and her rankings don't cycle.*
- **(A2) Continuity (Archimedean).** If $L \succ L' \succ L''$, there exist $\alpha, \beta \in (0,1)$ with $\alpha L + (1-\alpha)L'' \succ L' \succ \beta L + (1-\beta)L''$.
  *In words: no lottery is infinitely better than another — a small enough chance of the best prize, mixed into the worst, can be tuned to sit just above or just below any middle prospect.*
- **(A3) Independence.** For all $L, L', L''$ and all $\alpha \in (0,1]$: $\quad L \succeq L' \iff \alpha L + (1-\alpha)L'' \succeq \alpha L' + (1-\alpha)L''$.
  *In words: mixing both sides with the same third lottery $L''$, in the same proportion, doesn't flip your preference — the common ingredient is irrelevant because you only ever "get" it in the same way on either side.*

**Expected Utility Theorem (von Neumann–Morgenstern).** $\succeq$ satisfies (A1)–(A3) **if and only if** there is a function $u : X \to \mathbb{R}$ (the **Bernoulli index**) such that for all lotteries $L = (p_i)$, $L' = (q_i)$,

$$L \succeq L' \iff U(L) := \sum_i p_i \, u(x_i) \;\ge\; \sum_i q_i \, u(x_i) =: U(L').$$

*In words: the axioms are exactly the price of admission for scoring each outcome with a number and ranking gambles by expected score.* Moreover $u$ is **unique up to a positive affine transformation**: $\tilde u = a\,u + b$ with $a > 0$ represents the same $\succeq$, and no other transformations do.

*In words: only the scale and zero-point of $u$ are free (like Celsius vs. Fahrenheit) — the numbers carry real information beyond their order, so $u$ is **cardinal**, not merely ordinal.*

**Linearity in probabilities.** $U$ is linear on $\Delta(X)$: for any lotteries $L, L'$ and $\alpha \in [0,1]$,

$$U\big(\alpha L + (1-\alpha)L'\big) = \alpha\,U(L) + (1-\alpha)\,U(L').$$

*In words: the value of a mix is the mix of the values — this is $U$'s defining structural feature and the one Module 2 cashes in.*

**Risk attitudes.** When outcomes are money and $u$ is concave, Jensen's inequality gives $U(L) = \mathbb{E}[u(x)] \le u(\mathbb{E}[x])$: the agent prefers the sure mean to the gamble — she is **risk averse**. The **certainty equivalent** $CE$ solves $u(CE) = \mathbb{E}[u(x)]$ (the sure amount she'd swap the gamble for), and the **risk premium** is $\pi = \mathbb{E}[x] - CE \ge 0$. The local intensity of risk aversion is the **Arrow–Pratt coefficient** $A(x) = -\,u''(x)/u'(x)$.

## Picture

![Concave utility u=√x over a 50–50 gamble: expected utility (the chord) sits below u(E[x]), and the certainty equivalent CE lies left of E[x] by the risk premium π](assets/01-05-fig1.svg)

*The chord between $(x_1, u(x_1))$ and $(x_2, u(x_2))$ is the expected utility of the 50–50 gamble; its height at $\mathbb{E}[x]$ is $\mathbb{E}[u(x)]$. Because $u$ is concave the chord lies below the curve, so $\mathbb{E}[u(x)] < u(\mathbb{E}[x])$ — that vertical gap is risk aversion, and reading the chord's height back across to the curve locates the certainty equivalent $CE < \mathbb{E}[x]$.*

## Worked examples

**Example 1 (Bernoulli index, certainty equivalent, and cardinality).** Let $u(x) = \sqrt{x}$ and consider the gamble $L$: win $\$1$ or $\$9$, each with probability $\tfrac12$.

Expected utility and expected money:
$$U(L) = \tfrac12\sqrt{1} + \tfrac12\sqrt{9} = \tfrac12(1) + \tfrac12(3) = 2, \qquad \mathbb{E}[x] = \tfrac12(1)+\tfrac12(9) = 5.$$
Certainty equivalent: $u(CE) = 2 \Rightarrow \sqrt{CE} = 2 \Rightarrow CE = 4$. Risk premium $\pi = \mathbb{E}[x] - CE = 5 - 4 = 1$. She'd trade this gamble for a sure $\$4$, sacrificing $\$1$ of expected value to shed the risk — exactly the picture above.

*Cardinality check.* Rescale to $\tilde u = 3u + 7$ (so $a=3>0$, $b=7$). Then $\tilde U(L) = \tfrac12(3\sqrt1+7) + \tfrac12(3\sqrt9+7) = \tfrac12(10) + \tfrac12(16) = 13$, and $\tilde u(CE) = 3\sqrt{4}+7 = 13$ too. Same $CE$, same ranking of every lottery — the affine transform is invisible to choices. But a *nonlinear* relabeling like $u^2 = x$ would change $CE$ (it would make her risk-neutral), so not every order-preserving relabel is allowed: only affine ones. That is what "cardinal" means.

**Example 2 (linearity in probabilities — the game-theory payoff).** Take two lotteries over the same three outcomes with $u$-values $u(x_1)=0,\ u(x_2)=1,\ u(x_3)=4$:
$$L = (0.5,\, 0.5,\, 0),\qquad L' = (0,\, 0,\, 1).$$
So $U(L) = 0.5(0) + 0.5(1) + 0(4) = 0.5$ and $U(L') = 4$. Now form the mix $M = \alpha L + (1-\alpha)L'$. Its probability vector is $\big(0.5\alpha,\ 0.5\alpha,\ 1-\alpha\big)$, so
$$U(M) = 0.5\alpha(0) + 0.5\alpha(1) + (1-\alpha)(4) = 0.5\alpha + 4(1-\alpha) = 4 - 3.5\alpha.$$
Compare $\alpha U(L) + (1-\alpha)U(L') = 0.5\alpha + 4(1-\alpha) = 4 - 3.5\alpha$. **Identical.** $U$ is exactly affine in the mixing weight $\alpha$ — a straight line, no curvature.

This is precisely the structure of a mixed strategy: if a player mixes between pure strategies with weights $\alpha, 1-\alpha$, her expected payoff is the same weighted average of the pure-strategy payoffs. That linearity is why a best response is attained at a vertex or along a flat face of the simplex, and why the **indifference conditions** of [2.2 Nash equilibrium and mixed strategies](02-02-nash-equilibrium-mixed-strategies.md) — "make the opponent indifferent across the strategies in her support" — are legitimate: the payoff to each pure strategy enters $U$ linearly, so equalizing them equalizes everything on that support.

## Watch out

- **You might think** vNM utility is like the utility from consumer theory, where only the ordering matters. **Actually** it is **cardinal**: differences and ratios of the numbers encode risk preferences, and only positive affine transforms $a\,u+b$ ($a>0$) preserve the represented $\succeq$. Consumer/ordinal utility survives *any* increasing relabeling; a vNM index does not (see [grad-micro](../../grad-micro/syllabus.md), where ordinal demand theory and this cardinal risk theory are contrasted head-on).
- **You might think** "expected utility" means utility is linear in the prize. **Actually** it is linear in the **probabilities**, not the outcomes: $u(x)$ can (and for a risk-averse agent must) bend as a function of $x$, while $U$ is always a flat linear function of the lottery weights. Concavity of $u$ in $x$ and linearity of $U$ in $p$ coexist — the figure shows both at once.
- **You might think** the independence axiom is as innocent as completeness. **Actually** it is the load-bearing and the contested one. The **Allais paradox** exhibits sensible people whose choices violate it (they treat a common outcome differently when it is a *certainty* than when it is merely likely), and no vNM $u$ can rationalize those choices — which is exactly why expected-utility theory is a *model*, powerful but falsifiable, not a law of thought.

## One-liner

> The vNM axioms (completeness, transitivity, continuity, and above all independence) are exactly what it takes to score outcomes with a cardinal $u$ and rank gambles by $\sum_i p_i\,u(x_i)$ — a value that is linear in the probabilities, which is precisely what makes a mixed-strategy payoff a straight line in the mixing weights.

## Problems

**P1 (🟢)** An agent has Bernoulli index $u(x) = \ln x$ over wealth (in dollars) and faces a 50–50 gamble between $\$100$ and $\$400$. Compute her expected utility, certainty equivalent, and risk premium. Is she risk averse? Justify in one sentence using the shape of $u$.

**P2 (🟡)** Outcomes have $u$-values $u(a)=0,\ u(b)=2,\ u(c)=10$. Lottery $P=(0.2,\,0.8,\,0)$ over $(a,b,c)$ and lottery $Q=(0,\,0.5,\,0.5)$. (a) Which does the agent prefer? (b) For the mix $R_\lambda = \lambda P + (1-\lambda)Q$, write $U(R_\lambda)$ as a function of $\lambda$ and confirm it is affine. (c) At what $\lambda$, if any, is the agent indifferent between $R_\lambda$ and $P$?

**P3 (🔴, optional — Allais)** Consider outcomes $\$0,\ \$1\text{M},\ \$5\text{M}$. Many people choose $A = (\text{get } \$1\text{M for sure})$ over $B = (0.10:\$5\text{M},\ 0.89:\$1\text{M},\ 0.01:\$0)$, **and** choose $D = (0.10:\$5\text{M},\ 0.90:\$0)$ over $C = (0.11:\$1\text{M},\ 0.89:\$0)$. Show that *no* vNM index $u$ (normalize $u(0)=0$, $u(5\text{M})=1$) can rank $A\succ B$ and $D\succ C$ simultaneously. Which axiom is being violated?

<details>
<summary>Solutions</summary>

**P1** Expected utility: $U = \tfrac12\ln 100 + \tfrac12\ln 400$. Since $\ln 100 = \ln 100$ and $\ln 400 = \ln 100 + \ln 4$, we get $U = \ln 100 + \tfrac12\ln 4 = \ln 100 + \ln 2 = \ln 200$. Certainty equivalent: $\ln(CE) = \ln 200 \Rightarrow CE = \$200$. Expected money $\mathbb{E}[x] = \tfrac12(100)+\tfrac12(400) = 250$, so risk premium $\pi = 250 - 200 = \$50$. She is **risk averse**: $\ln$ is strictly concave ($u''(x) = -1/x^2 < 0$), so by Jensen $\mathbb{E}[\ln x] < \ln \mathbb{E}[x]$ and $CE < \mathbb{E}[x]$. (Neatly, $CE = \sqrt{100\cdot 400}=200$ is the *geometric* mean — what $\ln$ utility always returns.)

**P2** (a) $U(P) = 0.2(0) + 0.8(2) + 0(10) = 1.6$; $U(Q) = 0(0)+0.5(2)+0.5(10) = 6$. So $Q \succ P$.
(b) $R_\lambda$ has probability vector $\big(0.2\lambda,\ 0.8\lambda + 0.5(1-\lambda),\ 0.5(1-\lambda)\big)$. Then
$$U(R_\lambda) = 0.2\lambda(0) + \big(0.8\lambda+0.5(1-\lambda)\big)(2) + 0.5(1-\lambda)(10).$$
Or just use linearity directly: $U(R_\lambda) = \lambda U(P) + (1-\lambda)U(Q) = 1.6\lambda + 6(1-\lambda) = 6 - 4.4\lambda$. Affine in $\lambda$. ✓ (Both routes agree.)
(c) Indifferent between $R_\lambda$ and $P$ means $U(R_\lambda) = U(P) = 1.6$: solve $6 - 4.4\lambda = 1.6 \Rightarrow 4.4\lambda = 4.4 \Rightarrow \lambda = 1$. Only the degenerate mix $R_1 = P$ itself — sensible, since $Q$ is strictly better, so any positive weight on $Q$ strictly raises the value above $U(P)$.

**P3** Let $u(0)=0$, $u(5\text{M})=1$, and write $u_1 := u(1\text{M}) \in (0,1)$. Expected utilities:
$$U(A) = u_1,\qquad U(B) = 0.10(1) + 0.89\,u_1 + 0.01(0) = 0.10 + 0.89\,u_1.$$
$A \succ B$ requires $u_1 > 0.10 + 0.89\,u_1$, i.e. $0.11\,u_1 > 0.10$, i.e. $u_1 > 10/11$.
$$U(C) = 0.11\,u_1,\qquad U(D) = 0.10(1) + 0.90(0) = 0.10.$$
$D \succ C$ requires $0.10 > 0.11\,u_1$, i.e. $u_1 < 10/11$.
The two demands are $u_1 > 10/11$ **and** $u_1 < 10/11$ — contradictory, so no vNM $u$ represents both choices. The violation is of **independence** (A3): $A,B$ differ from $C,D$ only by replacing a common $0.89$ chance of $\$1\text{M}$ with a common $0.89$ chance of $\$0$; independence says that shared change can't flip the preference, yet people flip it — because in $A$ the $\$1\text{M}$ is a *certainty* and its psychological pull vanishes once it's merely probable.

</details>

## Flashback

**From Lesson 1.4 (Zero-sum games, minimax, and LP duality):** A $2\times 2$ zero-sum game has payoff matrix (row player's gains)
$$M = \begin{pmatrix} 3 & 0 \\ 1 & 4 \end{pmatrix}.$$
Find the row player's optimal mixed strategy $(p, 1-p)$, the column player's optimal mix, and the value of the game. (Hint: at the optimum the row player's mix makes the column player *indifferent* between her two pure columns — the same indifference-plus-linearity logic this lesson just justified.)

<details>
<summary>Solution</summary>

Let the row player choose row 1 with probability $p$. Because payoffs are linear in $p$ (Example 2's linearity, now applied to strategy mixing), the column player's expected loss to each column is a straight line in $p$; the row player picks $p$ to equalize the two columns so the column player can't exploit either.

Column 1 (entries $3, 1$): expected payoff to row $= 3p + 1(1-p) = 1 + 2p$.
Column 2 (entries $0, 4$): expected payoff to row $= 0\cdot p + 4(1-p) = 4 - 4p$.
Equalize: $1 + 2p = 4 - 4p \Rightarrow 6p = 3 \Rightarrow p = \tfrac12$. Value $= 1 + 2(\tfrac12) = 2$.

For the column player, let her play column 1 with probability $q$. Row 1: $3q + 0(1-q) = 3q$. Row 2: $1\cdot q + 4(1-q) = 4 - 3q$. Equalize: $3q = 4 - 3q \Rightarrow q = \tfrac23$. Check value: $3(\tfrac23) = 2$. ✓

So row plays $(\tfrac12,\tfrac12)$, column plays $(\tfrac23,\tfrac13)$, and the value is $2$ — and by minimax/LP duality (1.4) these guarantees meet: $\max_p\min_q = \min_q\max_p = 2$.

</details>

## Connections

- **Backward:** the linearity of $U$ in the mixing weights is why the minimax computation in [1.4](01-04-zero-sum-minimax-lp-duality.md) reduces to a linear program at all — each player's payoff is linear in her own mixing probabilities, so best responses live on the boundary of the simplex ([1.1](01-01-convex-sets-functions-separating-hyperplanes.md)'s convexity). Continuity of $U$ also feeds the fixed-point machinery of [1.3](01-03-brouwer-kakutani-fixed-points.md).
- **Forward:** [2.2 Nash equilibrium and mixed strategies](02-02-nash-equilibrium-mixed-strategies.md) writes every payoff as an expected utility and derives the support/indifference conditions straight from this linearity; [4.1 Bayesian games](04-01-bayesian-games-bayes-nash.md) takes expectations over opponents' *types*, and revenue equivalence in [4.3](04-03-revenue-equivalence-theorem.md) is an envelope argument over these same expected utilities.
- **Sideways (economics):** choice under uncertainty, the Arrow–Pratt measures $-u''/u'$, and the ordinal-vs-cardinal distinction are developed in full in [grad-micro](../../grad-micro/syllabus.md) — this lesson borrows only what the game theory needs.
- **Sideways (probability):** the expectation operator and Jensen's inequality that power the risk-aversion story are the tools of [probability-theory](../../probability-theory/syllabus.md); the concave-transform-of-a-mean phenomenon here is Jensen wearing an economics costume.

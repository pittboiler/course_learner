# Grad Microeconomics · Lesson 2.5: Choice under uncertainty

> ⏱ ~15 min · Module 2: Consumer theory · Builds on: [2.4 The Slutsky equation and comparative statics](02-04-slutsky-equation-comparative-statics.md) · Unlocks: [2.6 Revealed preference](02-06-revealed-preference.md)

## Why this matters

Everything in Module 2 so far assumed the consumer knows exactly what each bundle delivers. But the interesting decisions — buying insurance, holding stocks, drilling a well, accepting a job with a bonus — are choices among **gambles**, where the outcome is realized only after you commit. To do welfare economics over risk you need a theory of preference over probability distributions, and you need it to be *tractable*: ideally the value of a gamble should be an average of the values of its outcomes. The expected utility theorem says that under four axioms it is exactly that, and — this is the payoff — the *curvature* of the function being averaged is a complete measurement of the agent's attitude toward risk. Risk aversion stops being a vibe and becomes $-u''/u'$, a number you can compute, compare across people, and price. This is the machinery behind the insurance market, portfolio choice, and the risk–incentive tension you'll solve in [5.4](05-04-moral-hazard-principal-agent.md).

## The idea

A **lottery** is just a probability distribution over outcomes: "$\tfrac12$ chance of 200 dollars, $\tfrac12$ chance of 50 dollars." We want preferences over lotteries. The naive move — rank a lottery by its *expected dollar payoff* — is wrong, because 100 dollars for sure is not the same experience as a coin flip between 200 and 0, even though both average 100. Most people take the sure thing. So the ranking must depend on the whole spread, not just the mean.

The trick that makes this workable: assign each **outcome** a number $u(x)$, then value a lottery by the **average of those numbers**, weighted by probability. That's expected utility. The genius is that all the risk attitude gets packed into the *shape* of $u$. If $u$ is concave — a dome, diminishing returns to wealth — then the utility of the average outcome beats the average of the utilities, so the sure thing wins and the agent is **risk averse**. That single geometric fact, $u$ concave, *is* risk aversion (it's [Jensen's inequality](01-01-convexity-concavity-quasiconcavity.md) from Lesson 1.1, cashed in). The more curved $u$ is, the more the agent fears spread, and the more she'll pay to shed it. That "how much she'll pay" is a dollar figure — the risk premium — and the whole lesson is learning to read it off the curvature of $u$.

## The formal version

**Lotteries.** Fix outcomes $x_1,\dots,x_n$ (say, wealth levels). A simple lottery is $L=(p_1,\dots,p_n)$ with $p_i\ge 0$, $\sum_i p_i =1$, where $p_i$ is the probability of $x_i$. Preferences $\succeq$ rank lotteries. For continuous outcomes, a lottery is a distribution $F$.

**The von Neumann–Morgenstern axioms.** $\succeq$ is assumed:

1. **Complete** and **transitive** — the rationality of Lesson 2.1, now over lotteries.
2. **Continuous** — small changes in probabilities don't flip strict rankings (no lexicographic jumps).
3. **Independent** — for all lotteries $L, L', L''$ and $\alpha\in(0,1]$,
$$L \succeq L' \iff \alpha L + (1-\alpha)L'' \ \succeq\ \alpha L' + (1-\alpha)L''.$$
*In words:* mixing both options with the *same* third gamble $L''$, in the *same* proportion, can't reverse your preference — the shared component is irrelevant to the comparison. This is the axiom with teeth, and the one people actually violate (see below).

**Expected Utility Theorem (von Neumann–Morgenstern).** If $\succeq$ satisfies 1–3, there exists a function $u$ on outcomes — the **Bernoulli** (or vNM) **utility index** — such that
$$L \succeq L' \iff U(L):=\sum_i p_i\,u(x_i) \ \ge\ \sum_i p_i'\,u(x_i) \qquad\Big(\text{continuous case: } U(F)=\textstyle\int u\,dF\Big).$$
*In words:* rational, continuous, independence-respecting preferences are represented by an expected-utility functional — a value that is **linear in the probabilities**. That linearity is the fingerprint of the independence axiom, and it's what makes the theory computable.

**Cardinality.** $U$ is a representation, so any strictly increasing transform preserves the *ranking of lotteries* — but only **positive affine** transforms $\tilde u = a\,u + b$ (with $a>0$) preserve the **expected-utility form** $\sum p_i \tilde u(x_i)$. So $u$ is **cardinal**: pinned down up to choice of zero and unit, like temperature. This is the sharp break from the *ordinal* utility of Lesson 2.1, where any monotone relabeling was fair game. Here a nonlinear relabel like $u\mapsto\sqrt{u}$ changes the agent's risk attitude — it is a *different* person.

**Risk aversion = concavity.** An agent is **risk averse** if she (weakly) prefers the expected value of any lottery, received for sure, to the lottery itself. By Jensen's inequality,
$$u \text{ concave} \iff \mathbb{E}[u(x)] \le u(\mathbb{E}[x]) \text{ for every lottery} \iff \text{risk averse.}$$
*In words:* averaging outcomes and then taking utility beats taking utility and then averaging — exactly the "chord sags below the dome" of Lesson 1.1. (Convex $u$ ⇒ risk loving; linear $u$ ⇒ risk neutral, ranks by mean alone.)

**Certainty equivalent and risk premium.** The **certainty equivalent** $\mathrm{CE}$ is the sure amount that matches the gamble:
$$u(\mathrm{CE}) = \mathbb{E}[u(x)].$$
The **risk premium** is $\pi = \mathbb{E}[x] - \mathrm{CE}$. *In words:* $\mathrm{CE}$ is what the gamble is *worth* to this agent as a cash figure; $\pi$ is the discount she accepts below the fair mean to be rid of the risk. For concave $u$, $\pi\ge 0$ always.

**Arrow–Pratt measures.** The **coefficient of absolute risk aversion** and of **relative risk aversion** are
$$A(x) = -\frac{u''(x)}{u'(x)}, \qquad R(x) = -\frac{x\,u''(x)}{u'(x)} = x\,A(x).$$
*In words:* $A$ measures curvature normalized by slope — the honest, transform-invariant amount of concavity (the raw $u''$ isn't invariant to the affine rescaling, but the ratio is). $A$ governs attitudes toward bets of fixed *dollar* size; $R$ toward bets of fixed *proportion* of wealth.

**Small-risk approximation.** For a gamble with mean $\mathbb{E}[x]=w$ and small variance $\sigma^2$, a second-order Taylor expansion gives
$$\boxed{\;\pi \ \approx\ \tfrac12\, A(w)\,\sigma^2\;}$$
*Derivation.* Write the outcome as $w+\varepsilon$ with $\mathbb{E}[\varepsilon]=0$, $\mathrm{Var}(\varepsilon)=\sigma^2$. Expand each side of $u(w-\pi)=\mathbb{E}[u(w+\varepsilon)]$:
$$\underbrace{u(w)-u'(w)\,\pi}_{\text{LHS, first order}} \ \approx\ \mathbb{E}\!\left[u(w)+u'(w)\varepsilon+\tfrac12 u''(w)\varepsilon^2\right] \ =\ u(w)+\tfrac12 u''(w)\,\sigma^2,$$
using $\mathbb{E}[\varepsilon]=0$. Cancel $u(w)$ and solve: $\pi \approx -\tfrac12\,\dfrac{u''(w)}{u'(w)}\,\sigma^2=\tfrac12 A(w)\sigma^2$. *In words:* the price of risk is half the curvature times the variance — risk aversion times spread.

**The two canonical families.**

- **CARA** (constant absolute risk aversion): $u(x)=-e^{-ax}$, $a>0$. Then $A(x)=a$ (constant), $R(x)=ax$. Fixed appetite for dollar gambles regardless of wealth — the same 100-dollar bet feels identical to a millionaire and a pauper.
- **CRRA** (constant relative risk aversion): $u(x)=\dfrac{x^{1-\gamma}}{1-\gamma}$ for $\gamma\neq 1$, and $u(x)=\ln x$ for $\gamma=1$. Then $R(x)=\gamma$ (constant), $A(x)=\gamma/x$. Fixed appetite for *proportional* gambles — attitudes toward "double-or-halve" don't depend on scale. The workhorse of finance and macro.

**Stochastic dominance (ranking gambles without knowing $u$).** Two partial orders that hold for *classes* of agents:

- **First-order (FOSD):** $F$ dominates $G$ iff $F(t)\le G(t)$ for all $t$ (its CDF lies weakly to the right) iff $\int u\,dF \ge \int u\,dG$ for **every increasing** $u$. *In words:* $F$ shifts probability mass toward higher outcomes, so *anyone who prefers more* prefers $F$ — no risk assumption needed.
- **Second-order (SOSD), equal means:** $F$ dominates $G$ iff $\int_{-\infty}^{t}\!\big[G(s)-F(s)\big]\,ds \ge 0$ for all $t$ iff $\int u\,dF\ge\int u\,dG$ for **every increasing concave** $u$. Equivalently $G$ is a **mean-preserving spread** of $F$. *In words:* same mean, more spread — so *every risk-averse agent* dislikes $G$.

**The independence axiom's bite (one line).** The famous **Allais paradox** — most people's choices between a certain prize and a lottery reverse when both are mixed with a common chance of getting nothing — is a direct, empirically robust violation of independence, which is why independence (not rationality) is the axiom under fire and why non-expected-utility theories exist.

## Picture

![A concave utility curve u(x) over wealth. The chord between the two outcomes x1 and x2 lies below the curve; its midpoint gives E[u(x)] while the curve gives the higher u(E[x]) — their vertical gap is the Jensen gap. The certainty equivalent CE sits where the curve reaches the height E[u(x)], to the left of E[x], and the horizontal gap between CE and E[x] is the risk premium π.](assets/02-05-fig1.svg)

Read it as a machine: the two black dots are the gamble's outcomes; the red chord is the *lottery's* value $\mathbb{E}[u(x)]$ (linear in probabilities, so it lives on the straight line); the curve above the chord is the value of the *sure mean* $u(\mathbb{E}[x])$. The concavity forces curve-above-chord — that's risk aversion — and the horizontal distance from $\mathrm{CE}$ back to $\mathbb{E}[x]$ is the cash the agent forfeits to escape the flip.

## Worked examples

**Example 1 (mechanical — log utility, double-or-halve).** An agent with $u(x)=\ln x$ has wealth 100 and faces a 50/50 gamble that either doubles her wealth to 200 or halves it to 50. Find her risk measures, certainty equivalent, and risk premium, and check the small-risk formula.

*Risk measures.* $u'=1/x$, $u''=-1/x^2$, so
$$A(x)=-\frac{u''}{u'}=\frac{1/x^2}{1/x}=\frac1x,\qquad R(x)=x\,A(x)=1.$$
Constant $R=1$: log utility is CRRA with $\gamma=1$, as promised.

*Certainty equivalent.* 
$$\mathbb{E}[u]=\tfrac12\ln 200+\tfrac12\ln 50=\tfrac12\ln(200\cdot 50)=\tfrac12\ln 10000=\ln 100.$$
So $\ln \mathrm{CE}=\ln 100 \Rightarrow \mathrm{CE}=100=\sqrt{200\cdot 50}$ — for log utility the certainty equivalent is the **geometric mean** of the outcomes. The expected wealth is $\mathbb{E}[x]=\tfrac12(200)+\tfrac12(50)=125$, so
$$\pi = \mathbb{E}[x]-\mathrm{CE}=125-100=25\text{ dollars.}$$
She'd trade this coin flip for 100 dollars cash, forfeiting 25 of the 125 average — that's how much a symmetric double-or-halve bet costs a log agent.

*Small-risk check.* $A(125)=1/125=0.008$; $\sigma^2=\tfrac12(200-125)^2+\tfrac12(50-125)^2=5625$. Then $\tfrac12 A\sigma^2=\tfrac12(0.008)(5625)=22.5$, versus the exact $25$. Close, and the gap is honest: a $\pm 60\%$ swing is *not* a small risk, so the quadratic approximation is only in the ballpark. Shrink the bet and the two numbers converge.

**Example 2 (why you'd care — willingness to pay for insurance).** An agent with $u(x)=\sqrt{x}$ has wealth 100. With probability $\tfrac12$ a mishap destroys 51 of it (wealth $\to 49$); otherwise nothing happens (wealth $\to 100$). How much would she pay for full insurance, and how does that compare to the actuarially fair premium?

*Value of the risky position.*
$$\mathbb{E}[u]=\tfrac12\sqrt{49}+\tfrac12\sqrt{100}=\tfrac12(7)+\tfrac12(10)=8.5 \ \Rightarrow\ \mathrm{CE}=8.5^2=72.25.$$
The gamble is worth 72.25 dollars of certain wealth to her.

*Maximum premium.* Full insurance converts her wealth to a sure number. She'll pay any premium $P$ leaving her at least as well off as staying uninsured, i.e. $u(100-P)\ge \mathbb{E}[u]$, so $100-P\ge \mathrm{CE}$ and
$$P_{\max}=100-\mathrm{CE}=100-72.25=27.75\text{ dollars.}$$

*Compare to fair.* The expected loss is $\tfrac12(51)=25.5$, so an actuarially fair premium is 25.5. The wedge
$$P_{\max}-\text{fair}=27.75-25.5=2.25=\underbrace{74.5}_{\mathbb{E}[x]}-\underbrace{72.25}_{\mathrm{CE}}=\pi$$
is exactly the risk premium. *That wedge is the insurer's entire business model:* a risk-neutral insurer breaks even at 25.5 and can charge up to 27.75, pocketing the risk-averse client's $\pi=2.25$ as margin. This is the *insurance* half of the risk–incentive tradeoff — in [5.4](05-04-moral-hazard-principal-agent.md) the same concave agent will want full insurance from her employer, but hiding it behind unobservable effort forces the principal to leave some risk on her to preserve incentives.

## Watch out

- **You might think** vNM utility is ordinal like the utility of Lesson 2.1, so you can apply any monotone transform, **but actually** it is **cardinal**: only positive affine maps $a\,u+b$ ($a>0$) preserve the expected-utility form. Applying $u\mapsto\sqrt{u}$ or $u\mapsto u^2$ *changes the risk attitude* — it makes a genuinely different agent. That's why $A=-u''/u'$ (invariant to affine rescaling) is the right measure and raw $u''$ is not.
- **You might think** all four axioms are equally innocent, **but actually** completeness/transitivity/continuity are mild, and **independence** is the load-bearing, controversial one — the Allais paradox violates it systematically. Linearity-in-probabilities lives or dies with independence.
- **You might think** a concave $u$ means the agent is being "irrational" about diminishing marginal utility, **but actually** concavity of the vNM index is *the definition* of risk aversion, full stop — nothing irrational about preferring a sure 100 to a coin flip over 0 and 200. And for any concave $u$ the risk premium satisfies $\pi\ge 0$: a risk-averse agent never pays to *add* fair risk.

## One-liner

> Under the vNM axioms a gamble is worth the probability-weighted average of a cardinal index $u$; the concavity of $u$ — measured by $-u''/u'$ — is risk aversion, and it cashes out as a dollar risk premium $\pi\approx\tfrac12 A\sigma^2$.

## Problems

**P1 (🟢)** An agent with $u(x)=\ln x$ and wealth 100 faces a 50/50 gamble ending at wealth 144 or 64. Find the certainty equivalent and the risk premium. (Hint: log ⇒ CE is a geometric mean.)

**P2 (🟡)** An agent with $u(x)=\sqrt{x}$ and wealth 400 takes a 50/50 bet to win or lose 100 (ending at 500 or 300). Compute the exact risk premium $\pi$, then compute the small-risk approximation $\tfrac12 A(\mathbb{E}[x])\sigma^2$ and compare.

**P3 (🔴, optional)** Lottery $A$ pays 100 for sure. Lottery $B$ pays 60 or 140, each with probability $\tfrac12$. (a) Show $A$ and $B$ have the same mean. (b) Argue that *every* risk-averse agent weakly prefers $A$, and name the dominance relation involved. (c) For $u(x)=\ln x$, find how large a sure fee the agent would pay to swap $B$ for $A$. (d) Does $A$ first-order stochastically dominate $B$? Explain in one sentence.

<details>
<summary>Solutions</summary>

**P1** $u'=1/x$, so this is CRRA with $R=1$. 
$$\mathbb{E}[u]=\tfrac12\ln 144+\tfrac12\ln 64=\tfrac12\ln(144\cdot 64)=\tfrac12\ln 9216=\ln\sqrt{9216}=\ln 96.$$
Hence $\mathrm{CE}=96$ (the geometric mean $\sqrt{144\cdot 64}=\sqrt{9216}=96$). Expected wealth $\mathbb{E}[x]=\tfrac12(144)+\tfrac12(64)=104$, so
$$\pi=104-96=8\text{ dollars.}$$

**P2** For $u=\sqrt{x}=x^{1/2}$: $u'=\tfrac12 x^{-1/2}$, $u''=-\tfrac14 x^{-3/2}$, so
$$A(x)=-\frac{u''}{u'}=\frac{\tfrac14 x^{-3/2}}{\tfrac12 x^{-1/2}}=\frac{1}{2x}.$$
*Exact:* $\mathbb{E}[u]=\tfrac12\sqrt{500}+\tfrac12\sqrt{300}=\tfrac12(22.3607)+\tfrac12(17.3205)=19.8406$, so $\mathrm{CE}=19.8406^2=393.65$. With $\mathbb{E}[x]=400$,
$$\pi=400-393.65=6.35\text{ dollars.}$$
*Approximation:* $A(400)=\tfrac{1}{800}=0.00125$ and $\sigma^2=100^2=10000$, so
$$\tfrac12 A\sigma^2=\tfrac12(0.00125)(10000)=6.25.$$
Exact 6.35 vs. approximate 6.25 — agreement to about 1.5%, because a $\pm 25\%$ bet is nearly (not quite) "small."

**P3** (a) $\mathbb{E}[A]=100$; $\mathbb{E}[B]=\tfrac12(60)+\tfrac12(140)=100$. Same mean. 
(b) $B$ is a **mean-preserving spread** of $A$ (same mean, strictly more spread), so $A$ **second-order stochastically dominates** $B$. Concretely, by Jensen $\mathbb{E}[u(B)]\le u(\mathbb{E}[B])=u(100)=u(A)$ for every concave $u$; every risk-averse agent weakly prefers $A$. 
(c) $\mathbb{E}[u(B)]=\tfrac12\ln 60+\tfrac12\ln 140=\tfrac12\ln 8400=\ln\sqrt{8400}=\ln 91.652$. So $\mathrm{CE}_B=91.65$, and the risk premium is $\pi=100-91.65=8.35$. She would pay any sure fee up to **8.35 dollars** to replace $B$ with the certain 100. 
(d) No: $B$ sometimes pays 140 > 100, so its CDF is *not* everywhere to the right of $A$'s — neither lottery FOSD-dominates the other. The ranking is available only to risk-averse agents (SOSD), not to all increasing $u$.

</details>

## Flashback

**From Lesson 2.2 (Utility maximization: Marshallian demand):** For Cobb–Douglas utility $u(x,y)=x^{1/4}y^{3/4}$ with prices $p_x,p_y$ and income $m$, derive the Marshallian demands $x^*(p_x,p_y,m)$ and $y^*(p_x,p_y,m)$.

<details>
<summary>Solution</summary>

Maximize $u$ subject to $p_x x+p_y y=m$. The tangency condition is $\mathrm{MRS}=$ price ratio:
$$\mathrm{MRS}=\frac{u_x}{u_y}=\frac{\tfrac14 x^{-3/4}y^{3/4}}{\tfrac34 x^{1/4}y^{-1/4}}=\frac{1}{3}\,\frac{y}{x}=\frac{p_x}{p_y}\ \Rightarrow\ p_y y=3\,p_x x.$$
Substitute into the budget line: $p_x x + 3p_x x = m \Rightarrow 4p_x x = m$, giving
$$x^*=\frac{1}{4}\frac{m}{p_x},\qquad y^*=\frac{3}{4}\frac{m}{p_y}.$$
The Cobb–Douglas signature: each good's expenditure share equals its exponent ($\tfrac14$ and $\tfrac34$), and demand for each good is independent of the *other* good's price. Quasiconcavity of $u$ (Lesson 1.1) is what guarantees this interior tangency is the global optimum.

</details>

## Connections

- **Backward ([1.1](01-01-convexity-concavity-quasiconcavity.md)):** risk aversion *is* concavity of $u$ via Jensen — the "chord below the dome" picture, now carrying a dollar price ($\pi$). Note the contrast with [2.1](02-01-preferences-utility-representation.md): there utility was **ordinal** (any monotone relabel), here the vNM index is **cardinal** (affine relabels only), because probabilities let us measure spread.
- **Forward ([5.4](05-04-moral-hazard-principal-agent.md)):** the insurance calculation of Example 2 is the *insurance* pole of moral hazard. A risk-averse agent wants full coverage; when her effort is hidden, the principal must expose her to residual risk to keep incentives alive — the optimal contract is a compromise priced with exactly these tools.
- **Sideways ([prob-stat-refresher](../../prob-stat-refresher/syllabus.md) / [probability-theory](../../probability-theory/syllabus.md)):** everything here rides on expectation, variance, and Jensen's inequality — expected utility is a linear functional on distributions, and stochastic dominance is a statement about CDFs and their integrals.
- **Sideways ([grad-game-theory](../../grad-game-theory/syllabus.md)):** a mixed strategy is a lottery over actions, and payoffs to mixed strategies are *expected* vNM utilities — the linearity-in-probabilities proved here is precisely what makes best responses to mixed strategies well defined.

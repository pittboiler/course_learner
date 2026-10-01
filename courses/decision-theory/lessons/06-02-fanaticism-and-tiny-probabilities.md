# Decision Theory · Lesson 6.2: Fanaticism and tiny probabilities

> ⏱ ~15 min · Module 6: The edges of expected value · Builds on: [1.2 From expected value to expected utility](01-02-from-expected-value-to-expected-utility.md), [6.1 Pascal's wager as a decision problem](06-01-pascals-wager-as-a-decision-problem.md) · Unlocks: [6.3 Moral uncertainty](06-03-moral-uncertainty.md)

## Why this matters

[6.1](06-01-pascals-wager-as-a-decision-problem.md) needed infinite utility to make the wager work. This lesson shows that infinity was never needed. Finite but enormous stakes, held at a tiny probability, swamp every ordinary consideration in an expected-value sum. That is a live problem for anyone who ranks charities, research programmes or policies by expected lives saved, because the long-shot option with an astronomical payoff keeps winning. [1.2](01-02-from-expected-value-to-expected-utility.md) left a choice between bounded and unbounded utility. Here that choice returns with a third option: ignore tiny probabilities altogether. All three cost something, and the job is to say exactly what.

## The idea

**[Pascal's mugging](../reference.md#pascals-mugging)** (Nick Bostrom, "Pascal's Mugging", *Analysis*, 2009; Eliezer Yudkowsky named the problem in a 2007 blog post). In Bostrom's dialogue a mugger with no weapon asks Pascal for his wallet. In return he promises, by magic, a reward of happy days so vast that it outweighs Pascal's tiny credence that he will deliver. Pascal's utility is linear in happy days and unbounded. Whatever probability he names, the mugger names a reward big enough, and Pascal hands over the wallet.

The structure is the point. If your credence that the promise is kept is $\varepsilon > 0$, and the cost is $c$, any reward above $c/\varepsilon$ wins. The mugger controls the reward. You control only $\varepsilon$, and unless $\varepsilon$ shrinks at least as fast as the promises grow, you lose.

**[Fanaticism](../reference.md#fanaticism)** is the general verdict. Hayden Wilkinson ("In Defence of Fanaticism", *Ethics*, 2022) defines it, roughly, as follows: for any tiny probability and any sure finite good, some finite prize is large enough that a gamble with only that probability of winning it beats the sure thing. Expected-value reasoning with unbounded value implies fanaticism. There are three responses: accept it, bound utility, or refuse to count tiny probabilities.

## The formal version

**Fanaticism.** Let $\varepsilon > 0$ be a probability and $v > 0$ a value. Compare

$$\begin{aligned}
L_{\text{risky}} &: \ V \text{ with probability } \varepsilon, \text{ else } 0,\\
L_{\text{safe}} &: \ v \text{ for certain}.
\end{aligned}$$

Fanaticism says that for every $\varepsilon$ and $v$ there is a finite $V$ with $L_{\text{risky}}$ better than $L_{\text{safe}}$. *In words:* no probability is too small to be outweighed by a large enough prize. Expected value delivers it at once: $\varepsilon V > v$ iff $V > v/\varepsilon$.

**The continuum argument** (Wilkinson). The case for fanaticism does not need expected value.

1. **P1 ([Minimal Tradeoffs](../reference.md#minimal-tradeoffs)).** There is a fixed ratio $r < 1$ such that any gamble "$v$ with probability $p$" is beaten by "some larger prize with probability $rp$". *In words:* a very slightly lower chance can always be made up by a much bigger prize.
2. **P2 (Transitivity).** If each gamble in a chain is better than the one before, the last is better than the first.
3. **C.** Fanaticism. Start from $v$ at probability near 1 and apply P1 repeatedly. After $n$ steps the probability is below any $\varepsilon$ you like, since $r^n \to 0$. P2 links the ends.

With $r = 0.999999$, reaching $\varepsilon = 10^{-12}$ takes about 27.6 million steps, each of which looks like an improvement.

**Exit A: [bounded utility](../reference.md#bounded-utility).** Let $u$ rise toward a ceiling $B$ it never reaches, with $u(0) = 0$. Paying the mugger costs $c$ for sure and returns $V$ with probability $\varepsilon$:

$$\mathrm{EU}(\text{pay}) = \varepsilon\, u(V - c) + (1-\varepsilon)\, u(-c) \ <\ \varepsilon B + (1-\varepsilon)\, u(-c).$$

So the agent refuses every offer iff

$$\varepsilon \ \le\ \varepsilon^* = \frac{-u(-c)}{B - u(-c)} .$$

*In words:* below a threshold credence set by the cost and the ceiling, no promise is big enough. The price is the one paid in [1.2](01-02-from-expected-value-to-expected-utility.md): the same ceiling refuses well-founded long shots too, and it denies P1.

**Exit B: [probability discounting](../reference.md#probability-discounting).** Bradley Monton ("How to Avoid Maximizing Expected Utility", *Philosophers' Imprint*, 2019) calls it *Nicolausian discounting*, after Nicolaus Bernoulli: treat small probabilities as zero, then maximize expected value. The naive rule fixes a threshold $t$, drops every outcome whose probability is below $t$, and sums the rest. Three results follow; each is checked in the problems or below.

- **Weak dominance fails, always.** If two prospects differ only on an event of probability below $t$, the rule values them equally, even when one is better there and no worse anywhere. Any rule that gives sub-threshold events zero weight has this feature.
- **Strict [dominance](../reference.md#dominance) fails for the naive rule.** Split a good event into pieces that pay slightly different amounts, each below $t$. The whole gain vanishes, while a worse prospect paying one amount on the whole event keeps its value (P2).
- **[Independence](../reference.md#independence-axiom) fails.** With $t = 1/1000$, let $L$ pay 1 with probability $0.002$, else 0. The rule values $L$ at $0.002$, so $L$ beats 0 for sure. Mix each with 0 at weight $\tfrac34$. Now $L$'s prize has probability $0.0005 < t$, and the mixture is valued at 0, the same as the mixed sure thing. A strict preference has become indifference.

Kosonen (*Philosophy and Phenomenological Research*, 2024) argues that these violations let a discounter be money-pumped.

**Where the argument is weakest.** Each position's weak point is the premise its rivals attack. The fanatic leans on Minimal Tradeoffs applied 27 million times. Each single step is intuitive, but the anti-fanatic can say that intuitions about one step say nothing about the chain. The bounded theorist must say where the ceiling sits, and Wilkinson argues that rejecting fanaticism makes rankings depend on unaffected background events, an updated form of Parfit's "Egyptology" objection. The discounter must choose a threshold and a way of carving outcomes, and the verdicts change with both. No exit is free; the dispute is over which axiom to give up: unbounded value with Minimal Tradeoffs, or dominance with independence.

## Picture

![A log-log graph. Horizontal axis: credence that the mugger delivers, from 10 to the minus 12 up to 1. Vertical axis: smallest winning offer, from 10 squared to 10 to the 14. A straight blue line, the unbounded linear agent, falls from 10 to the 14 at credence 10 to the minus 12 to 100 at credence 1. A red curve, the bounded agent, follows the blue line at high credences but bends upward and rises without limit as credence falls toward a dashed vertical line at about 1 in 14,427, below which no offer wins.](assets/06-02-fig1.svg)

The mugger asks for 100 units. For the unbounded agent, every credence has a price, $V = 100/\varepsilon$, and the blue line runs off the chart. The bounded agent, $u(x) = 1 - 2^{-x/1{,}000{,}000}$, agrees with her at ordinary credences. Near $\varepsilon^* \approx 1/14{,}427$ her required offer rises without limit, and below it no offer wins.

## Worked examples

**Example 1 (clean): the mugging, both ways.** The mugger asks for $c = 100$ units of value; your credence that he delivers is $\varepsilon = 10^{-9}$.

*Unbounded, linear $u$:* $\mathrm{EV}(\text{pay}) = 10^{-9}V - 100 > 0$ iff $V > 10^{11}$. He offers $10^{12}$ and you pay.

*Bounded:* $u(x) = 1 - 2^{-x/10^6}$, so $B = 1$ and $-u(-100) = 2^{0.0001} - 1 \approx 6.93\times10^{-5}$. Then

$$\varepsilon^* = \frac{2^{0.0001}-1}{2^{0.0001}} = 1 - 2^{-0.0001} \approx 6.93\times10^{-5} \approx \frac{1}{14{,}427}.$$

Since $10^{-9} < \varepsilon^*$, you refuse every offer. At $\varepsilon = 10^{-4}$, just above the threshold, you pay only for $V \gtrsim 1.70$ million where the linear agent needs 1 million. The ceiling bites only near the threshold, and below it completely.

**Example 2 (hard): the [Pasadena game](../reference.md#pasadena-game) in ethics** (Harris Nover and Alan Hájek, 2004). Toss a fair coin until the first head, on toss $n$. If $n$ is odd, a policy creates $2^n/n$ units of value; if even, it destroys $2^n/n$. Read units as lives and this is a St. Petersburg-style prospect a totalist must evaluate. Outcome $n$ contributes

$$2^{-n}\cdot(-1)^{n-1}\frac{2^n}{n} = \frac{(-1)^{n-1}}{n},$$

so in the natural order the sum is $1 - \tfrac12 + \tfrac13 - \cdots = \ln 2 \approx 0.693$. But the series converges only conditionally. Taking two positive terms per negative gives $\tfrac32\ln 2 \approx 1.040$, and one positive per two negatives gives $\tfrac12\ln 2 \approx 0.347$. Any value is reachable. Outcomes have no privileged order, so the game has no expected value at all, rather than a large one.

Run the three exits. A bounded $u$ makes the sum converge absolutely, so order stops mattering and the game gets a value. Discounting at $t = 1/1000$ keeps tosses $n \le 9$ (since $2^{-9} \ge t > 2^{-10}$) and returns $1879/2520 \approx 0.746$, a value that shifts with $t$. The fanatic, with unbounded value, has no verdict. Here the strain falls on expected value itself, not on fanaticism.

## Watch out

- **You might think the mugging needs infinite utility, like the wager.** Every number in it is finite. Fanaticism is a finite phenomenon; infinity only made [6.1](06-01-pascals-wager-as-a-decision-problem.md) more dramatic.
- **You might think you can just set your credence low enough.** Credence must fall at least as fast as the promised reward grows. A credence of $1/V$ for every promise of $V$ is a substantive commitment, not a free fix, and Bostrom's mugger asks you to state yours first.
- **You might think probability discounting just *is* bounded utility.** Bounded utility keeps dominance and independence and gives up Minimal Tradeoffs. Discounting keeps value linear and gives up weak dominance and independence. Same verdict on the mugger, different axioms surrendered.

## One-liner

> If value is unbounded and expected value rules, a big enough promise beats any tiny probability; to escape you must bound value, ignore small chances at the price of dominance, or deny that a slightly smaller chance can always be bought with a much bigger prize.

## Problems

**P1 (🟢)** *(Formal (a)–(c).)* A mugger asks for 10 units of value and promises $V$ units tomorrow.

(a) With linear utility and credence $\varepsilon = 10^{-6}$ that he delivers, find the smallest offer at which paying is worthwhile.
(b) Now let $u(x) = \dfrac{x}{x + 1000}$ for $x > -1000$, which is increasing and bounded above by 1. Find the largest credence $\varepsilon^*$ at which you refuse every offer, and confirm you refuse at $\varepsilon = 10^{-6}$.
(c) With the same $u$ and $\varepsilon = 1/50$, find exactly which offers $V$ make paying worthwhile.

**P2 (🟡)** *(Formal (a) · Exegetical (b).)* A discounter uses the naive rule with $t = 1/1000$: drop every outcome whose probability is below $t$, and sum probability times value over the rest.

(a) Construct prospects $A$ and $B$ over the same states such that $A$ is at least as good as $B$ in every state and strictly better on an event of probability $1/500$, yet the discounter strictly prefers $B$. Give both discounted values.
(b) In two sentences: does renormalizing (dividing by the probability of the outcomes kept) repair your example, and which principle does even the best-behaved rule giving sub-threshold events zero weight still violate?

**P3 (🔴, optional)** *(Formal (a) · Evaluative (b).)* Each of 50 independent offers pays 1 unit with probability $0.9992$ and costs 2,000 units with probability $0.0008$. The discounter from P2 evaluates offers one at a time.

(a) Compute one offer's expected value and its discounted value, and say what the discounter does with each offer. Then treat all 50 as one package. Compute its expected value and the probabilities of no loss and of exactly one loss, and show that the discounter's own rule rejects the package. You may use $0.9992^{50} \approx 0.96077$ and $50(0.0008)(0.9992)^{49} \approx 0.03846$; outcomes with two or more losses each have probability below $t$.
(b) Steelman probability discounting against the objection that (a) exposes, then give the strongest reply. 150 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c))*

(a) $\mathrm{EV}(\text{pay}) = \varepsilon(V - 10) + (1-\varepsilon)(-10) = \varepsilon V - 10$. This is positive iff $V > 10/10^{-6} = 10^{7}$. Paying is worthwhile for any offer above 10 million.

(b) $u(-10) = -10/990 = -1/99$ and $B = 1$, so

$$\varepsilon^* = \frac{1/99}{1 + 1/99} = \frac{1}{100}.$$

At $\varepsilon = 10^{-6}$ the best paying can do is approach $10^{-6}\cdot 1 + (1 - 10^{-6})(-1/99) \approx -0.0101 < 0$, so you refuse every offer. At exactly $\varepsilon = 1/100$ that bound is 0 and never reached, so you still refuse; $\varepsilon^* = 1/100$ is the largest such credence.

(c) Pay iff $\tfrac{1}{50}u(V - 10) + \tfrac{49}{50}\left(-\tfrac{1}{99}\right) > 0$, i.e.

$$\begin{aligned}
u(V-10) &> \tfrac{49}{99},\\
\frac{V - 10}{V + 990} &> \frac{49}{99},\\
99V - 990 &> 49V + 48{,}510,\\
V &> 990.
\end{aligned}$$

At $V = 990$, EU is exactly 0, so the answer is every $V > 990$.

**Must hit, strict (a)–(c):** $V > 10^7$; $u(-10) = -1/99$ and $\varepsilon^* = 1/100$ from the refusal condition $\varepsilon B + (1-\varepsilon)u(-c) \le 0$; $V > 990$, strict.

**Wrong turns:** writing the success outcome as $u(V)$ instead of $u(V - 10)$; the payer has handed over 10 either way. In (b), treating $\varepsilon^*$ as the point where some offer wins: at $\varepsilon^*$ the supremum is 0 but no offer attains it.

---

**P2** *(Formal (a) · Exegetical (b))*

**Accept:** any $A$, $B$ with $A \ge B$ state by state, $A > B$ on an event of probability $1/500$ (or more), and discounted value of $B$ above that of $A$. The working construction splits $A$'s gain into distinct outcomes each below $t$, while $B$'s gain sits on one outcome at or above $t$.

(a) Model answer. Let event $E$, probability $0.002$, be split into $E_1, E_2, E_3$ with probabilities $0.0009$, $0.0009$, $0.0002$. $B$ pays 1 on all of $E$ and 0 elsewhere. $A$ pays 2, 3, 4 on $E_1, E_2, E_3$ and 0 elsewhere. $A$ beats $B$ on $E$ and ties elsewhere. The discounter keeps only outcomes with probability at least $t$:

$$\begin{aligned}
D(A) &= 0.998\times 0 = 0,\\
D(B) &= 0.002\times 1 + 0.998 \times 0 = 0.002.
\end{aligned}$$

So $B$ is strictly preferred, although $A$'s true expected value, $0.0053$, is larger.

(b) No: renormalizing divides $A$'s kept probability $0.998$ into 0, still 0, and leaves $B$ at $0.002$, since all of $B$'s outcomes are kept. Even a rule that blocks this splitting trick still violates weak dominance, because improving a prospect only on an event of probability below $t$ leaves its value unchanged.

**Must hit, strict (a):** dominance shown state by state; each of $A$'s gaining outcomes below $t$; both discounted values.

**Must hit, strict (b):** renormalization does not help (values 0 and 0.002); weak dominance is violated by any rule giving sub-threshold events zero weight.

**Wrong turns:** giving $A$ the same prize on every piece of $E$. That makes "$A$'s prize" a single outcome of probability $0.002 \ge t$, which is kept. Discounting *states* rather than outcomes is a different rule; say which you use.

---

**P3** *(Formal (a) · Evaluative (b))*

(a) One offer:

$$\begin{aligned}
\mathrm{EV} &= 0.9992(1) - 0.0008(2000) = 0.9992 - 1.6 = -0.6008,\\
D &= 0.9992 \quad (\text{the loss, at } 0.0008 < t, \text{ is dropped}).
\end{aligned}$$

The discounter accepts each offer, though each loses money on average. The package has $\mathrm{EV} = 50(-0.6008) = -30.04$. With $k$ losses it pays $50 - 2001k$. No loss: probability $0.96077$, value 50. Exactly one loss: probability $0.03846 \ge t$, value $-1951$. Outcomes with $k \ge 2$ are dropped. So

$$\begin{aligned}D(\text{package}) &\approx 0.96077(50) - 0.03846(1951)\\ &\approx 48.04 - 75.04 = -27.00 < 0,\end{aligned}$$

and the discounter rejects the package she accepts piece by piece. The chance of at least one loss is $1 - 0.96077 \approx 0.039$, about 39 times the threshold.

**Must hit, strict (a):** $-0.6008$ and $0.9992$; accept each; $-30.04$; the one-loss outcome kept at $0.03846$; discounted package value $\approx -27.0$; the inconsistency stated.

**Must hit, any verdict (b):**

- State discounting at full strength: ignoring negligible risks is what every practical reasoner does, and it blocks the mugger without giving up linear value.
- Name what the objection attacks: the verdict depends on how choices are bundled, which also shows up as the independence violation.
- Give a reply either side must answer, e.g. apply the threshold to the agent's whole life of choices, or accept that bundling matters.
- Say whether the bitten bullet generalizes: any fixed threshold faces some bundle that crosses it.

**Wrong turns:** treating the package's $-30.04$ as the discounter's own verdict; her rule gives $-27.0$, and that is what makes the inconsistency internal. In (b), declaring fanaticism true or false instead of assessing discounting.

**Model answer (b), one of several:** Steelman: no one can attend to every one-in-a-million risk, and a theory that obliges us to pay muggers is worse than one that ignores what is practically negligible. Discounting keeps value linear and blocks the mugger at once. The reply: negligibility is not a property of a risk but of how choices are carved. Fifty negligible risks make a 4% risk, so the discounter accepts each offer and rejects them all together. The verdict then depends on bookkeeping. The discounter can apply the threshold to her lifetime's prospects, but then she needs her whole future to decide today, and over a long life almost nothing stays below the threshold. The bullet generalizes: every fixed threshold has a bundle that crosses it.

</details>

## Flashback

**From Lesson [5.4](05-04-population-ethics-escape-routes.md) (Population ethics II: escape routes):** *(Formal (a) · Exegetical (b).)* A is 300 people at welfare 80. A+ is A plus 300 extra people at 20, affecting no one in A. B is the same 600 people as A+, all at 60. A critical-level view scores a population by $V_c=\sum_i(u_i-c)$ with $c\ge0$.

(a) Write $V_c(A^+)-V_c(A)$ and $V_c(B)-V_c(A)$ as functions of $c$. Find every $c$ at which the view denies premise 1 (mere addition), and every $c$ at which it ranks B above A.
(b) Take $c=30$. Give the view's ranking of the three populations, and say in two sentences what this shows about *where* the critical-level view's block on the repugnant conclusion comes from.

<details>
<summary>Solution</summary>

(a) Each added or changed life contributes $u-c$:

$$\begin{aligned}
V_c(A^+)-V_c(A)&=300(20-c)\\
&=6{,}000-300c,\\
V_c(B)-V_c(A)&=600(60-c)-300(80-c)\\
&=12{,}000-300c.
\end{aligned}$$

Premise 1 fails (A+ worse than A) iff $c>20$. B beats A iff $c<40$. So for $20<c<40$ the view denies mere addition yet still ranks B above A.

(b) At $c=30$:

$$\begin{aligned}
V_{30}(A)&=300(50)=15{,}000,\\
V_{30}(A^+)&=15{,}000+300(-10)=12{,}000,\\
V_{30}(B)&=600(30)=18{,}000.
\end{aligned}$$

Ranking: $B>A>A^+$. Denying premise 1 breaks the paradox's chain, but it does not stop this step's destination from winning: B is better than A by direct comparison. What blocks the repugnant conclusion is that Z's lives sit below $c$ and so score negative; the work is done by where $c$ sits relative to the barely-worth-living level, not by the failure of mere addition as such.

**Must hit, strict (a):** both differences with the per-person $u-c$ bookkeeping; $c>20$ and $c<40$; the overlap $20<c<40$ noted.

**Must hit, strict (b):** 15,000, 12,000, 18,000 and $B>A>A^+$; the block on Z comes from Z's lives falling below $c$, not from denying premise 1 alone.

**Wrong turns:** subtracting $c$ only for the extras when comparing B with A (all 600 lives in B are scored against $c$, and A's 300 against $c$ too). Concluding that once premise 1 fails the view must rank A above B: premise 1's failure removes one route to B, not B's direct advantage. Using totals or averages: the total view ranks $B>A^+>A$ at every step, and the average view ranks $A>B>A^+$ (80, 60, 50), neither of which is asked.

**Model answer (b):** At $c=30$ the view ranks $B>A>A^+$: it rejects mere addition yet still prefers B to A outright. So rejecting premise 1 is not what saves it from Z; what saves it is that a Z-like population, whose lives sit below 30, has negative value, which is exactly the feature that also yields the sadistic conclusion.

</details>

## Connections

- **Backward:** [1.2](01-02-from-expected-value-to-expected-utility.md) set up bounded against unbounded utility with Menger's game; the mugging is the same choice with lives instead of dollars. [6.1](06-01-pascals-wager-as-a-decision-problem.md) is the infinite limit of the mugging.
- **Forward:** [6.3](06-03-moral-uncertainty.md) faces fanaticism one level up: a theory that assigns enormous stakes can dominate expected choiceworthiness even at low credence.
- **Sideways:** the expected-value reasoning in [`ethics` 1.5](../../ethics/lessons/01-05-modern-consequentialism.md) is what fanaticism stretches to its limit, and the long-run stakes in [`philosophy-of-economics` 4.3](../../philosophy-of-economics/lessons/04-03-uncertainty-the-long-run-and-future-people.md) are where it bites in practice. Steelmanning a view you find absurd before replying is [`philosophical-method` 4.2](../../philosophical-method/lessons/04-02-steelmanning-and-the-burden-of-proof.md)'s method.

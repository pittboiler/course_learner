# Political Economy · Lesson 1.2: Turnout and the paradox of voting

> ⏱ ~15 min · Module 1: Voters: preferences, turnout and information · Builds on: [1.1 From ballots to policy space](01-01-from-ballots-to-policy-space.md) · Unlocks: [1.3 Rational ignorance and the swing voter's curse](01-03-rational-ignorance-and-the-swing-voters-curse.md), [3.1 Free riding and threshold games](03-01-free-riding-and-threshold-games.md)

## Why this matters

[1.1](01-01-from-ballots-to-policy-space.md) gave each voter preferences over policy. Every model after it assumes she turns up and votes them. Why would she? One ballot almost never decides anything, and voting costs time. Downs (*An Economic Theory of Democracy*, 1957) saw that the simplest rational-choice account predicts almost nobody votes, while tens of millions do. This lesson computes exactly how small the chance of deciding is, shows where that number comes from, and looks at the models built to escape it.

## The idea

Your vote changes the outcome only when everyone else splits evenly. In a big electorate that event has two enemies. Size: even in a dead heat, an exact tie is one outcome among thousands of near-ties. Imbalance: if the race leans even slightly, the count piles up around the expected margin and an exact tie becomes astronomically unlikely. So the expected benefit of voting is a large stake times a tiny probability, and it loses to a modest cost.

Three escapes then appear. Votes are strategic choices, and their value depends on who else votes. People may act as members of groups rather than as lone individuals. And voting may carry a payoff of its own.

## The model

**The calculus.** A citizen gains $B$ (in units of her own utility) if her candidate A wins rather than B. Let $P$ be the probability that her vote changes the outcome, $C$ her cost of voting, and $D$ any payoff from the act of voting itself. Riker and Ordeshook ("A Theory of the Calculus of Voting," *American Political Science Review*, 1968) wrote the return to voting as

$$R = PB - C + D,$$

and she votes iff $R > 0$. *In words:* vote when the expected policy gain plus the satisfaction of voting beats the cost. Downs's version has $D = 0$. With $D = 0$ and $P$ tiny, $R < 0$ for any plausible $B$ and $C$: the [paradox of voting](../reference.md#paradox-of-voting). The [calculus of voting](../reference.md#calculus-of-voting) is just that inequality.

**The pivot event.** You plus $n$ others, $n$ even. Each other votes A with probability $p \in (0,1)$, independently, and B otherwise (for now, everybody votes); $p$ is known. Majority rule, ties by coin flip. With $n$ even, your vote for A matters only when the others tie at $n/2$ each, where it turns a coin flip into a sure win. So the expected gain is $\tfrac12 P B$ with [pivot probability](../reference.md#pivot-probability)

$$P = \binom{n}{n/2}\big(p(1-p)\big)^{n/2}.$$

**Proposition 1 (how small is $P$?).** As $n \to \infty$,

$$P \approx \sqrt{\frac{2}{\pi n}}\; e^{-n\,\Delta(p)}, \qquad \Delta(p) = -\tfrac12 \ln\!\big(4p(1-p)\big) \ge 0,$$

with equality in $\Delta$ only at $p = \tfrac12$, and $\Delta(p) = 2\varepsilon^2 + 4\varepsilon^4 + \dots$ for $p = \tfrac12 + \varepsilon$.

*In words:* in a dead heat the chance of a tie falls like one over root $n$; off a dead heat it falls exponentially, at a rate that grows with the square of the lean.

*Proof.*

1. Factor out the fair-coin case: $P = \binom{n}{n/2} 2^{-n} \cdot \big(4p(1-p)\big)^{n/2}$, since $2^{-n} \cdot 4^{n/2} = 1$.
2. Stirling's formula $m! = \sqrt{2\pi m}\,(m/e)^m (1 + O(1/m))$ gives $\big((n/2)!\big)^2 \approx \pi n \,\big(n/(2e)\big)^{n}$, so
$$\binom{n}{n/2} = \frac{n!}{\big((n/2)!\big)^2} \approx \frac{\sqrt{2\pi n}\,(n/e)^n}{\pi n\,(n/2e)^n} = 2^n \sqrt{\frac{2}{\pi n}}.$$
3. Write $4p(1-p) = 1 - (2p-1)^2$. This is $< 1$ unless $p = \tfrac12$, so $\big(4p(1-p)\big)^{n/2} = e^{-n\Delta(p)}$ with $\Delta > 0$.
4. With $p = \tfrac12 + \varepsilon$, $\Delta = -\tfrac12\ln(1 - 4\varepsilon^2)$, and $-\ln(1-x) = x + x^2/2 + \dots$ gives $\Delta = 2\varepsilon^2 + 4\varepsilon^4 + \dots$ ∎

$\Delta(p)$ is the Kullback–Leibler divergence of a fair coin from a $p$-coin: the large-deviations price of the count landing at $\tfrac12$ when it is centred at $p$. A binomial refresher is in [`prob-stat-refresher` 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md).

**Participation games.** Proposition 1 treats everyone else's behaviour as fixed. But if few others vote, $P$ rises, which pulls people in. Palfrey and Rosenthal ("A Strategic Calculus of Voting," *Public Choice*, 1983) made turnout an equilibrium. Two teams of known sizes; each member votes for her team or abstains; win pays 1, tie $\tfrac12$, loss 0; voting costs $c$; complete information. A voter who mixes must be indifferent:

$$c = \tfrac12\Big[\Pr(\text{others tie}) + \Pr(\text{own side trails by one})\Big],$$

because her vote turns a tie into a win, or a one-vote loss into a tie. *In words:* $P$ is now endogenous, set by everyone's mixing ([participation games](../reference.md#participation-games); the indifference logic is [`grad-game-theory` 2.2](../../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md)'s).

A miniature: team A has one member, team B two, $c = \tfrac38$. A check of all eight pure profiles finds no equilibrium. Let A vote with probability $q_A$ and each B member with $q_B$. A's vote matters if B casts 0 or 1 votes, so her gain is $\tfrac12(1 - q_B^2)$; a B member's gain is $\tfrac12(1 - q_B + q_A q_B)$. Setting each to $c$ gives $q_B = \sqrt{1-2c} = \tfrac12$ and $q_A = 1 - \sqrt{1-2c} = \tfrac12$. Half of everyone votes though the cost is three-eighths of the stake, and the lone A member wins with probability $5/16$, coin flips included.

Palfrey and Rosenthal show that complete-information equilibria can sustain substantial turnout even when costs are fairly high. Their sequel ("Voter Participation and Strategic Uncertainty," *American Political Science Review*, 1985) adds private information about others' costs and preferences. In large electorates, only voters whose net cost of voting is near zero or negative then participate. The strategic escape works in small electorates and fades in large ones.

**Group-based turnout.** Coate and Conlin ("A Group Rule-Utilitarian Approach to Voter Turnout," *American Economic Review*, 2004), building on Harsanyi's rule utilitarianism, let each side's supporters follow the rule "vote iff your cost is below $\gamma_g$," with the cutoff $\gamma_g$ chosen to maximize the group's total expected welfare given the other side's rule. An equilibrium is a pair of mutually best-responding cutoffs. The logic in one stylized line (not their exact specification): a group of $N_g$ members with stake $b$ each sets the marginal member's cost equal to $N_g b$ times the effect of one more vote on the win probability. The group's stake grows with $n$, so it offsets the shrinking per-vote effect. They fit the model to Texas local liquor referenda and report that it beats a simple expressive-voting model ([group-based turnout](../reference.md#group-based-turnout)).

**Ethical voters.** Feddersen and Sandroni ("A Theory of Participation in Elections," *American Economic Review*, 2006) take an electorate in which no vote is pivotal. Ethical agents get a payoff from doing their part, and their part is fixed by the rule that would best serve their side if all ethical agents of their type followed it. Unlike a fixed $D$, the obligation is endogenous: it responds to closeness, stakes and costs. The model predicts high turnout with comparative statics that look strategic ([ethical voters](../reference.md#ethical-voters)).

**Where the argument is weakest.** The exponential collapse rests on a known $p$ and independent votes. Nobody knows $p$ to four decimals. Average the tie probability over any smooth belief $g$ about $p$ and the exponential factor washes out: $P \approx g(\tfrac12)/n$ (Chamberlain and Rothschild, *Journal of Economic Theory*, 1981; Example 2). That is far larger than $e^{-n\Delta}$, but still small for a national electorate. The paradox survives, and the critic's real target becomes the other hypothesis: that $B$ is a private stake weighed by a lone individual. Group-based and ethical-voter models drop exactly that.

## Picture

![Log base ten of the tie probability against the number of other voters, from 0 to 10,000. With a fifty-fifty race the curve falls slowly to about minus 2.1. At p equal to 0.51 it falls to about minus 3. At p equal to 0.55 it drops almost linearly to about minus 24.](assets/01-02-fig1.svg)

On a log scale, $e^{-n\Delta}$ is a straight line with slope proportional to $\Delta(p)$. At $p = 0.51$ the line is there but shallow ($\Delta \approx 0.0002$ per voter); at $p = 0.55$ it is 25 times steeper.

## Worked examples

**Example 1 (clean): a city of 10,001.** You plus $n = 10{,}000$ others; $B = 1{,}000$, $C = 1$, $D = 0$. Exact values (by script) and the value $\tfrac12 PB$:

| $p$ | $P$ exact | $\tfrac12 PB$ | vote? |
|---|---|---|---|
| 0.50 | 0.00798 | 3.99 | yes |
| 0.505 | 0.00484 | 2.42 | yes |
| 0.51 | 0.00108 | 0.54 | no |
| 0.55 | $1.2 \times 10^{-24}$ | $6 \times 10^{-22}$ | no |

Proposition 1 at $p = 0.505$: $\Delta \approx 2(0.005)^2 = 5 \times 10^{-5}$, so $P \approx 0.00798\, e^{-0.5} = 0.00484$. At $p = 0.55$ the quadratic approximation $2\varepsilon^2$ gives $1.5 \times 10^{-24}$; the exact $\Delta = 0.005025$ gives the right $1.2 \times 10^{-24}$. Now scale up to $n = 10^8$: even in a dead heat $P \approx 8.0 \times 10^{-5}$, so voting pays only if $B > 25{,}000$ times the cost, and at $p = 0.51$, $P$ is about $10^{-8692}$.

**Example 2 (the hypothesis bites): uncertain $p$.** Same city, but you believe $p$ is uniform on $[0.45, 0.55]$, so $g = 10$ on that interval. Averaging the tie probability over $p$ gives $P = 0.0009999$, which matches $10/(n+1)$. Why: if $p$ were uniform on $[0,1]$, the Beta integral $\int_0^1 \binom{n}{k} p^k (1-p)^{n-k}\,dp = \tfrac{1}{n+1}$ makes every count equally likely, and a density $g$ near $\tfrac12$ scales that by $g(\tfrac12)$. Your vote is worth $\tfrac12 PB = 0.50 < 1$: less than in a known dead heat (3.99), and about $10^{21}$ times more than at a known $p = 0.55$. At $n = 10^8$, $P = 10^{-7}$ and you need $B > 2 \times 10^7$. Uncertainty kills the exponential collapse but leaves the paradox.

## Watch out

- **You might think** "the" chance of deciding an election has one formula. It depends entirely on the model: about $\sqrt{2/(\pi n)}$ in a known dead heat, exponentially small at a known lean, about $g(\tfrac12)/n$ under uncertainty. Quoting the binomial collapse while forgetting it assumes a known $p$ is the hypothesis people drop.
- **You might think** participation games rescue the pivot-based theory everywhere. Palfrey and Rosenthal's high-turnout equilibria use complete information; with private information about costs, large-electorate turnout comes only from those with near-zero or negative net costs.
- **You might think** adding $D$ settles the paradox. A free $D$ fits any turnout. Critics read that as giving up the explanation, defenders as naming a real motive; the ethical-voter model is one attempt to give $D$ content that the data can test.

## One-liner

> A vote decides only a tie, and ties are rare like $1/\sqrt n$ in a dead heat, exponentially rare at a known lean, and like $1/n$ under uncertainty; so in a large electorate the chance of deciding cannot by itself pay for the trip to the polls.

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* A town referendum: you plus $n = 400$ others. Each other votes yes with probability $p$, independently. You gain $B = 60$ if yes wins; voting costs $C = 1$; $D = 0$; ties are a coin flip.

(a) Using Proposition 1, find the value of voting at $p = \tfrac12$ and at $p = 0.55$, and say whether you vote in each case.
(b) At $p = \tfrac12$, find the largest even $n$ at which you still vote.

**P2 (🟡)** *(Formal (a)–(c).)* A participation game: two teams of two. Win pays 1, tie $\tfrac12$ (coin flip), loss 0; voting costs $c = \tfrac{7}{18}$; complete information.

(a) Show that "everyone votes" is an equilibrium and "nobody votes" is not.
(b) Find every symmetric mixed equilibrium, in which each of the four voters votes with the same probability $q \in (0,1)$.
(c) Give the expected number of voters in each.

**P3 (🔴, optional)** *(Evaluative.)* An invented column: "The odds that your ballot decides a national election are smaller than the odds of being struck by lightning on the way to the polls. Anyone who votes is therefore acting irrationally." In 150 words or fewer, assess the column's use of "rational."

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) The value of voting is $\tfrac12 PB = 30P$. At $p = \tfrac12$: $P \approx \sqrt{2/(400\pi)} = 0.03989$ (exact 0.03987), so the value is $1.197$ (exact $1.196$) $> 1$: **vote**. At $p = 0.55$: $4p(1-p) = 0.99$ and $0.99^{200} = 0.1340$, so $P \approx 0.03989 \times 0.1340 = 0.00535$ (exact 0.00534). The value is $0.160 < 1$: **abstain**.

(b) Vote iff $30\sqrt{2/(\pi n)} \ge 1$, i.e. $n \le 1800/\pi = 572.96$. So **$n = 572$**. The exact binomial agrees: the value is $1.0004$ at $n = 572$ and $0.9987$ at $n = 574$.

**Wrong turns:** using $PB$ instead of $\tfrac12 PB$ (with $n$ even, your vote converts a coin flip into a win, not a loss into a win). Using $e^{-2n\varepsilon^2}$ here is fine ($e^{-2} = 0.1353$ versus $0.1340$), but it drifts as the lean grows.

---

**P2** *(Formal, strict.)*

(a) Everyone votes: 2–2 tie, each gets $\tfrac12 - \tfrac{7}{18} = \tfrac19$. A voter who abstains loses 1–2 and gets 0 $< \tfrac19$, so no one deviates. Nobody votes: each gets $\tfrac12$; a lone voter wins 1–0 and gets $1 - \tfrac{7}{18} = \tfrac{11}{18} > \tfrac12$, so this is not an equilibrium. (A check of all 16 pure profiles finds "everyone votes" is the only pure equilibrium.)

(b) Take a member of team A. Among the others, her teammate votes with probability $q$ and the two opponents each with probability $q$. She is decisive on a tie (0–0 or 1–1) or a one-vote deficit (0–1 or 1–2):

$$\Pr = (1-q)^3 + 2q^2(1-q) + 2q(1-q)^2 + q^3 = 1 - q + q^2.$$

Indifference: $\tfrac12(1 - q + q^2) = \tfrac{7}{18}$, so $q^2 - q + \tfrac29 = 0$ and **$q = \tfrac13$ or $q = \tfrac23$**. (Two roots exist exactly when $\tfrac38 < c < \tfrac12$.)

(c) Expected voters $4q$: **$\tfrac43$** and **$\tfrac83$** of 4.

**Wrong turns:** counting only ties and forgetting the one-vote deficit. Giving her own team a $\operatorname{Bin}(2, q)$ count: she is not one of her own "others."

---

**P3** *(Evaluative, verdict-neutral.)*

**Must hit, any verdict:**

- Separate the two senses: instrumental rationality (choosing the best act given one's preferences and beliefs) versus a claim about what those preferences must be (only one's own stake, earned through pivotality).
- State what the model assumes: $R = PB - C$ with $D = 0$, $B$ a private stake, the voter deciding alone; and note the lightning figure depends on the pivot model (known lean versus uncertainty).
- Name the assumption the verdict turns on (private $B$, individual decision or $D = 0$) and say what dropping it does (group rule, ethical voters, duty), including whether the replacement has testable content.

**Model answer, one of several:** The column shows only that voting fails one model: a lone voter who values nothing but her own stake, earned through her pivot probability. Rationality in that model means maximizing $PB - C$, and with $P$ tiny that recommends abstaining. But rationality is consistency between ends and acts, not a list of permitted ends. A voter who values doing her part (Feddersen–Sandroni), or who follows the rule that serves her group best (Coate–Conlin), can be fully rational and still vote. So the verdict turns on whether $B$ must be a private stake decided alone. A defender of the column can reply that the rescue models change the preferences until the behaviour fits. The test is whether they predict something the simple model does not: for example, more turnout in close races and when more is at stake.

</details>

## Connections

- **Backward:** [1.1](01-01-from-ballots-to-policy-space.md) gave the voter a $B$: the gap between her utilities at the two platforms. [`social-choice` 5.2](../../social-choice/lessons/05-02-when-the-jury-theorem-fails.md) conditioned jurors' votes on being pivotal; [`social-choice` 6.1](../../social-choice/lessons/06-01-approval-voting.md) used pivot probabilities to set strategic approval ballots.
- **Forward:** [1.3](01-03-rational-ignorance-and-the-swing-voters-curse.md) asks what a voter should know, and conditions on the pivot event in a different way. Participation is the political case of [3.1](03-01-free-riding-and-threshold-games.md)'s threshold games and [3.2](03-02-olsons-logic-of-collective-action.md)'s group-size logic. [5.4](05-04-the-political-economy-of-inequality.md) asks what income-skewed turnout does to redistribution.
- **Sideways:** whether high or low turnout makes a democracy more legitimate is [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md)'s question, not this course's. Evidence on closeness and turnout is `empirical-political-economy`'s ([syllabus](../../empirical-political-economy/syllabus.md)).

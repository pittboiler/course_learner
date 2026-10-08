# Political Economy · Lesson 4.5: Rent-seeking contests

> ⏱ ~15 min · Module 4: Accountability, interests and rents · Builds on: [4.3 Lobbying: protection for sale](04-03-lobbying-protection-for-sale.md), [4.4 Regulatory capture](04-04-regulatory-capture.md), [3.3 The commons and common-pool resources](03-03-the-commons-and-common-pool-resources.md) · Unlocks: [4.6 Political budget cycles](04-06-political-budget-cycles.md), [`conflict-and-bargaining`](../../conflict-and-bargaining/syllabus.md)

## Why this matters

A government that hands out a scarce import licence, a monopoly franchise or a tariff creates a prize. [4.3](04-03-lobbying-protection-for-sale.md) priced the contributions that buy such favours; [4.4](04-04-regulatory-capture.md) asked whom regulators end up serving. This lesson asks what the *scramble* for the prize costs. If firms burn real resources (lawyers, lobbyists, idle capacity built to qualify for quotas) to win a transfer, those resources are a social loss on top of the usual deadweight triangle. How much is burned is a number you can compute, and the answer runs from almost nothing to the whole prize depending on one parameter.

## The idea

Gordon Tullock's point ("The Welfare Costs of Tariffs, Monopolies, and Theft", *Western Economic Journal*, 1967) is that transfers are not free to arrange. A burglary moves a television from one house to another, a pure transfer, yet society pays for locks and for burglars' time. Likewise the monopoly profit rectangle, which textbook welfare analysis treats as a mere transfer, attracts spending by everyone who wants to be the monopolist. Anne Krueger ("The Political Economy of the Rent-Seeking Society", *American Economic Review*, 1974) named the activity [rent seeking](../reference.md#rent-seeking) and documented it in import-licensing regimes such as India's, where allocating licences by capacity could draw investment in plant that added no output. Richard Posner ("The Social Costs of Monopoly and Regulation", *Journal of Political Economy*, 1975) went furthest: if obtaining a monopoly is itself a competitive activity with constant costs, expected profit from the scramble is zero, so the whole rectangle is spent.

Posner assumed the answer. Tullock's later model ("Efficient Rent Seeking", 1980, in Buchanan, Tollison and Tullock, eds., *Toward a Theory of the Rent-Seeking Society*) derives it from a game. Think of a raffle: each unit of effort buys a ticket, and the prize goes to the holder of the winning ticket. Spending more raises your odds but never guarantees the win, so with a few rivals nobody spends the whole prize. Make the contest more decisive, so that a small spending edge buys a large edge in odds, and spending rises toward the prize.

## The model

**Players and payoffs.** $n \ge 2$ risk-neutral contestants each value a rent $R > 0$. Simultaneously, each chooses an effort $x_i \ge 0$, measured in the same units as $R$ and sunk whether or not she wins. Everything is common knowledge. Player $i$ wins with probability given by the [contest success function](../reference.md#contest-success-function)

$$p_i(x) = \frac{x_i^r}{\sum_{j=1}^n x_j^r}, \qquad r > 0,$$

with $p_i = 1/n$ if every effort is zero. *In words:* your odds are your share of the field's "weighted effort"; the exponent $r$ measures how decisive spending is. At $r = 1$ it is the raffle; as $r \to \infty$ the top spender wins for sure, which is the all-pay auction. Her payoff is $\pi_i = p_i R - x_i$. This is the [Tullock contest](../reference.md#tullock-contest).

**Proposition 1 (symmetric equilibrium).** The profile in which every player exerts

$$x^* = \frac{rR(n-1)}{n^2}$$

is a Nash equilibrium if and only if $r \le \frac{n}{n-1}$. Total effort is $nx^* = rR\frac{n-1}{n}$, so the share of the rent dissipated is

$$D = \frac{r(n-1)}{n}.$$

*In words:* each contestant spends a fraction $r(n-1)/n^2$ of the prize, and together they burn a fraction $r(n-1)/n$, which reaches the whole prize exactly at the edge of existence.

*Proof.* Fix the others at $x > 0$ and write $Y = \sum_{j \ne i} x_j^r = (n-1)x^r$. Player $i$'s winning probability as a function of her own effort $z$ is $p(z) = z^r/(z^r + Y)$.

1. *First-order condition.* $p'(z) = rYz^{r-1}/(z^r+Y)^2$. At $z = x$, $z^r + Y = nx^r$, so $p'(x) = r(n-1)/(n^2 x)$. Setting $Rp'(x) = 1$ gives $x^* = rR(n-1)/n^2$.
2. *Shape of $p$.* Differentiating again, $p''(z)$ has the sign of $(r-1)Y - (r+1)z^r$. If $r \le 1$ this is negative for all $z > 0$, so $p$ is concave, $\pi$ is concave in $z$, and the first-order condition is sufficient. Equilibrium exists for every $r \le 1$.
3. *If $r > 1$*, $p''$ is positive below $z^r = Y\frac{r-1}{r+1}$ and negative above it: $p'$ rises then falls. Hence $\pi'(z) = Rp'(z) - 1$ crosses zero at most twice, and $\pi$ has at most one interior local maximum. Player $i$'s best response is either that local maximum or $z = 0$.
4. *The candidate is the local maximum.* At $z = x^*$, $z^r = Y/(n-1)$, which lies in the concave region iff $\frac{1}{n-1} > \frac{r-1}{r+1}$, that is, iff $r(n-2) < n$. Since $\frac{n}{n-1} < \frac{n}{n-2}$, this holds whenever $r \le \frac{n}{n-1}$.
5. *Participation.* Effort zero against positive rivals wins nothing and costs nothing, so it pays 0. The equilibrium payoff is $\frac{R}{n} - x^* = \frac{R}{n^2}\bigl(n - r(n-1)\bigr)$, which is $\ge 0$ iff $r \le \frac{n}{n-1}$. If $r > \frac{n}{n-1}$, the candidate pays less than 0 and the deviation to zero is profitable.
6. *Zero is not an equilibrium:* against all-zero rivals, any tiny effort wins for sure. ∎

For $r = 1$ the symmetric equilibrium is also the only one. In any equilibrium with $k \ge 2$ active players, each active first-order condition reads $R\,S_{-i} = S^2$, with $S$ total effort and $S_{-i}$ everyone else's, so all active efforts are equal and $S = R(k-1)/k < R$. An inactive player's marginal payoff at zero is $R/S - 1 > 0$, so she enters. A single active player would cut her effort toward zero and still win, so $k = 1$ fails too.

**[Rent dissipation](../reference.md#rent-dissipation).** $D$ rises with $n$ and with $r$. With $r = 1$ and free entry ($n \to \infty$), $D \to 1$: Posner's full dissipation. With $r < 1$, $D \to r$ even with unlimited entry: spending is not decisive enough to burn the whole prize. With few contestants, dissipation is partial. Above the boundary, the symmetric pure equilibrium disappears; for two players with $r > 2$, Baye, Kovenock and de Vries (*Public Choice*, 1994) show that a symmetric mixed-strategy equilibrium exists and the rent is fully dissipated in expectation. It can never be more: each contestant can guarantee 0 by staying out, so in any equilibrium expected total spending is at most $R$. Full dissipation is the all-pay auction's answer ([`grad-game-theory` 4.3](../../grad-game-theory/lessons/04-03-revenue-equivalence-theorem.md) solves an all-pay auction).

**[Asymmetric contests](../reference.md#asymmetric-contests).** Let $n = 2$, $r = 1$, with valuations $V_1 > V_2$. Payoffs are $\pi_i = \frac{x_i}{x_1 + x_2}V_i - x_i$, concave in own effort. With $S = x_1 + x_2$, the first-order conditions are

$$\frac{V_1 x_2}{S^2} = 1, \qquad \frac{V_2 x_1}{S^2} = 1.$$

Dividing, $x_1/x_2 = V_1/V_2$. Then $x_2 = S^2/V_1$ and $x_1 = S^2/V_2$; adding, $S = S^2\bigl(\tfrac{1}{V_1} + \tfrac{1}{V_2}\bigr)$, so

$$S = \frac{V_1V_2}{V_1+V_2}, \qquad x_1 = \frac{V_1^2V_2}{(V_1+V_2)^2}, \qquad x_2 = \frac{V_1V_2^2}{(V_1+V_2)^2}.$$

Then $p_1 = V_1/(V_1+V_2)$, and $\pi_i = V_i^3/(V_1+V_2)^2$.

*In words:* the player who values the prize more spends more and wins more often, but in proportion; total spending is half the harmonic mean of the two values, so a lopsided contest dissipates a smaller share of the larger prize than an even one. The weaker player is discouraged, and the stronger player then need not spend much.

**Where the argument is weakest.** Everything runs through the contest success function, and $r$ is a reduced form: it stands for whatever technology turns spending into political favour, which no one observes. The model's dissipation can be anywhere from near zero to the whole prize as $r$ and $n$ vary, so "rent seeking wastes $D$ of the rent" is only as good as an estimate of $r$. The welfare reading adds a second hypothesis: that effort is a real resource cost. If the "effort" is a bribe or a campaign contribution, it is a transfer to the official, as in [4.3](04-03-lobbying-protection-for-sale.md)'s [menu auction](../reference.md#menu-auction), and the social loss is only the resources spent arranging it. Risk neutrality, a fixed set of contestants and a commonly known prize are further hypotheses; drop them and the dissipation formula changes, though the logic of step 5 (spending stops where the marginal contestant breaks even) survives.

## Picture

![Share of the rent dissipated in the symmetric equilibrium against the number of contestants n from 2 to 10, for exponents r of 0.5, 1 and 1.25. The r equals 0.5 curve rises from 0.25 toward 0.5; the r equals 1 curve rises from 0.5 toward 1; the r equals 1.25 curve rises from 0.625 and reaches full dissipation at n equals 5, after which no symmetric pure equilibrium exists.](assets/04-05-fig1.svg)

Each curve is $D = r(n-1)/n$. More rivals and a more decisive contest both raise the share burned, but only the boundary case reaches the whole rent with finitely many players.

## Worked examples

**Example 1 (clean): four lobbies, two technologies.** A licence worth $R = 160$ (million units). Four firms compete.

- $r = 1$: $x^* = 1 \cdot 160 \cdot 3/16 = 30$ each; total 120, so $D = 3/4$; each firm expects $40 - 30 = 10$. The boundary is $n/(n-1) = 4/3 \ge 1$, so this is an equilibrium (a grid search over one firm's deviations confirms 30 is the best reply).
- $r = 1/2$: $x^* = 15$ each, total 60, $D = 3/8$, payoff $40 - 15 = 25$. Halving decisiveness halves the waste.

**Example 2 (the hypothesis bites): a too-decisive contest.** Two firms, $R = 120$, $r = 3$. The first-order condition gives $x^* = 3 \cdot 120 \cdot 1/4 = 90$ each, and step 4 holds ($n = 2$), so 90 is a local maximum of each firm's payoff. But the payoff there is $60 - 90 = -30$: total spending would be 180, more than the prize. Spending zero pays 0, so the profile is not an equilibrium. The first-order condition found a local peak in a valley below the zero line. Here $r = 3 > 2 = n/(n-1)$, and the equilibrium is in mixed strategies, with expected spending equal to the prize, not above it.

**Example 3 (asymmetry).** Two firms value a franchise at $V_1 = 30$ and $V_2 = 20$, $r = 1$. Then $S = 600/50 = 12$, $x_1 = 7.2$, $x_2 = 4.8$, $p_1 = 0.6$, $\pi_1 = 10.8$, $\pi_2 = 3.2$. Spending is 40 percent of the strong firm's value. The franchise also goes to the lower-value firm with probability 0.4, an expected misallocation of $0.4 \times 10 = 4$: a second cost the triangle-and-rectangle accounting misses.

## Watch out

- **You might think** solving the first-order condition finds the equilibrium, but actually for $r > 1$ it finds only a local maximum. The participation check $r \le n/(n-1)$ is the hypothesis people drop (Example 2).
- **You might think** rent seeking always burns the whole rent, as Posner assumed, but actually the Tullock contest gives full dissipation only with free entry at $r = 1$, at the boundary $r = n/(n-1)$, or (for two players) in the mixed equilibria above it. Few contestants, $r < 1$ or unequal valuations all leave part of the rent with the contestants.
- **You might think** every dollar of lobbying is a dollar of social waste, but actually a bribe or contribution is a transfer; only resources consumed in arranging it are lost.

## One-liner

> Contestants for a political prize spend $r(n-1)/n$ of it in a symmetric Tullock contest, a share that reaches the whole prize only with free entry or at the edge of existence, where the pure equilibrium gives way to mixed strategies.

## Problems

**P1 (🟢)** *(Formal.)* Two firms compete for a broadcasting licence by lobbying, with $r = 1$. Firm 1 values the licence at 80, firm 2 at 20.

(a) Find each firm's equilibrium effort, winning probability and expected payoff.
(b) What fraction of firm 1's valuation is spent in total, and what is the expected loss from the licence going to the firm that values it less?

**P2 (🟡)** *(Formal.)* Three firms compete for a rent $R = 90$ with contest success function exponent $r$.

(a) For $r = 1.2$: check that the symmetric equilibrium exists, and find each firm's effort, total effort, each firm's expected payoff and the share dissipated.
(b) For $r = 1.6$: show that the symmetric first-order-condition profile is not an equilibrium, naming the profitable deviation.
(c) What is the largest $r$ for which a symmetric pure equilibrium exists with three firms, and what are effort and dissipation there?

**P3 (🔴, optional)** *(Exegetical.)* An invented finance-ministry memo: "Our import quotas generate licence rents worth 2 percent of GDP. Since many firms lobby for the licences, the whole 2 percent is wasted, on top of the deadweight triangle. Abolishing the quotas would therefore save at least 2 percent of GDP."

In 150 words or fewer: name the result the memo relies on, state the conditions under which the Tullock contest delivers it, and give two features of the licence contest that would make the waste smaller than 2 percent.

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) With $r = 1$ and $V_1 = 80$, $V_2 = 20$: total effort $S = V_1V_2/(V_1+V_2) = 1600/100 = 16$. Efforts $x_1 = V_1^2V_2/(V_1+V_2)^2 = 128000/10000 = 12.8$ and $x_2 = V_1V_2^2/(V_1+V_2)^2 = 32000/10000 = 3.2$ (check: ratio $4 = V_1/V_2$, sum 16). Winning probabilities $p_1 = 12.8/16 = 0.8$, $p_2 = 0.2$. Payoffs $\pi_1 = 0.8 \cdot 80 - 12.8 = 51.2$ and $\pi_2 = 0.2 \cdot 20 - 3.2 = 0.8$ (matching $V_i^3/(V_1+V_2)^2$). Each payoff is concave in own effort at $r = 1$, so the first-order conditions are sufficient; a grid search over each firm's deviations confirms the best replies 12.8 and 3.2.

(b) Total spending 16 is $16/80 = 1/5$, or 20 percent of firm 1's valuation (in general $V_2/(V_1+V_2)$). The licence goes to firm 2 with probability 0.2, losing $80 - 20 = 60$ of value when it does: expected misallocation $0.2 \times 60 = 12$.

**Wrong turns:** Using the symmetric formula with $R = 80$ (giving 20 each): the weak firm is discouraged, and the strong firm responds by spending less too. Reporting dissipation as 16 out of 100, the sum of the valuations; only one firm gets the licence.

---

**P2** *(Formal, strict.)*

(a) Existence needs $r \le n/(n-1) = 3/2$; $1.2 \le 1.5$, and the local condition $r(n-2) = 1.2 < 3$ holds. Effort $x^* = rR(n-1)/n^2 = 1.2 \cdot 90 \cdot 2/9 = 24$. Total 72. Payoff $90/3 - 24 = 6$. Dissipation $72/90 = 0.8 = r(n-1)/n$.

(b) Now $x^* = 1.6 \cdot 90 \cdot 2/9 = 32$, total 96, more than the rent. Each firm's payoff at the candidate is $30 - 32 = -2$. Deviating to zero effort wins nothing and pays 0, which beats $-2$. So the profile is not an equilibrium ($1.6 > 1.5$).

(c) $r = n/(n-1) = 3/2$. Then $x^* = 1.5 \cdot 90 \cdot 2/9 = 30$, total 90, payoff $30 - 30 = 0$, dissipation 1: the whole rent is spent, and each firm is just indifferent to dropping out.

**Wrong turns:** Stopping at the first-order condition in (b) and reporting 32 as the equilibrium. Checking only the local second-order condition, which holds at $r = 1.6$ ($1.6 < 3$) and so cannot rule the profile out; the failure is participation.

---

**P3** *(Exegetical, strict.)*

**Must hit, strict:**

- The memo relies on Posner's full-dissipation claim: competition for the rent drives expected profit to zero, so the whole rent is spent.
- In the Tullock contest that needs free entry with $r = 1$ ($D = (n-1)/n \to 1$), or a contest at the boundary $r = n/(n-1)$ (or, with two players, beyond it, in mixed strategies). It also needs the spending to be a real resource cost.
- Two features that cut the waste, any two of: few licence-seekers (fixed small $n$); $r < 1$, where $D \to r$ even with unlimited entry; unequal valuations across firms; spending that takes the form of bribes or contributions, which are transfers rather than waste.

**Wrong turns:** Saying the memo double-counts the deadweight triangle. The triangle and the dissipated rectangle are separate losses; the problem is the size claimed for the rectangle. Treating "many firms lobby" as enough: with $r < 1$ many firms still burn only about a fraction $r$ of the rent.

**Model answer:** The memo relies on Posner's full-dissipation result: if competition for licences is open and costless to enter, expected profit is zero and the whole rent is burned. Tullock's contest delivers this only in special cases: free entry with $r = 1$, where dissipation $(n-1)/n$ tends to 1, or a contest so decisive that $r$ reaches $n/(n-1)$. It also requires the lobbying to consume real resources. If only a few firms can bid, dissipation is $r(n-1)/n$, well below 1; if $r < 1$, it tends only to $r$; if firms value licences unequally, spending falls further. And if the "lobbying" is bribes or contributions, much of it is a transfer to officials, not waste. In the model, then, 2 percent of GDP is a ceiling on the cost of the scramble, since no equilibrium spends more than the rent, not a floor.

</details>

## Flashback

**From Lesson [4.3](04-03-lobbying-protection-for-sale.md) (Lobbying: protection for sale):** *(Formal (a)–(b).)* A farm lobby knows whether a proposed irrigation subsidy is good policy; the government does not. If the subsidy is adopted, the lobby gains 12 when it is good and 5 when it is bad. Lobbying is visible and costs the lobby $c$; the government adopts if and only if it believes the subsidy is good. (a) For which costs is there an equilibrium in which the lobby lobbies only when the subsidy is good? Check both types' incentives at $c = 8$. (b) An ethics rule caps lobbying spending at 4. In two sentences: why can no such separating equilibrium survive, and what does lobbying tell the government if the lobby then lobbies in both states?

<details>
<summary>Solution</summary>

(a) In the candidate equilibrium the government reads lobbying as "good" and adopts, and silence as "bad" and rejects. The good-state lobby lobbies iff $12 - c \ge 0$; the bad-state lobby stays out iff $5 - c \le 0$. Separation therefore needs $5 \le c \le 12$. At $c = 8$: the good-state lobby nets $12 - 8 = 4 > 0$ and lobbies; a bad-state lobby that copied it would net $5 - 8 = -3 < 0$, so it stays out.

(b) At any cost of 4 or less, a bad-state lobby that copies the good-state lobby gains $5 - c \ge 1 > 0$, so it mimics, and lobbying can no longer mark the good state. If the lobby lobbies in both states, Bayes' rule leaves the government's belief at its prior: lobbying tells it nothing, and it decides as if no lobby existed.

**Wrong turns:** Checking only the good type's constraint and reporting $c \le 12$. Treating the cap as a gain for the government because it lowers wasted spending: here the spending is what makes the message credible. That is the contrast with this lesson's contests, where the effort buys nothing but a better chance at the rent.

</details>

## Connections

- **Backward:** Free entry until expected profit is zero is [3.3](03-03-the-commons-and-common-pool-resources.md)'s open-access dissipation of a fishery's rent, now applied to a rent the state creates. [4.3](04-03-lobbying-protection-for-sale.md)'s menu auction treats lobbying as payment to the government; this lesson treats it as resources burned in competition with rivals. Which groups organize to compete at all is [3.2](03-02-olsons-logic-of-collective-action.md)'s question.
- **Forward:** [4.6](04-06-political-budget-cycles.md) turns from interest groups to incumbents' own manipulation of policy. [`conflict-and-bargaining`](../../conflict-and-bargaining/syllabus.md) reuses the contest success function for arming, where "effort" is weapons and the prize is territory or a share of output.
- **Sideways:** as $r \to \infty$ the contest becomes the all-pay auction of [`grad-game-theory` 4.3](../../grad-game-theory/lessons/04-03-revenue-equivalence-theorem.md); the same structure models patent races and sports tournaments. Whether the waste matters for the legitimacy of the state that created the rent is a question for [`political-philosophy`](../../political-philosophy/syllabus.md).

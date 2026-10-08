# Political Economy · Lesson 1.3: Rational ignorance and the swing voter's curse

> ⏱ ~15 min · Module 1: Voters: preferences, turnout and information · Builds on: [1.2 Turnout and the paradox of voting](01-02-turnout-and-the-paradox-of-voting.md), [`social-choice` 5.2](../../social-choice/lessons/05-02-when-the-jury-theorem-fails.md) · Unlocks: [1.4 Persuasion and the media](01-04-persuasion-and-the-media.md)

## Why this matters

Most voters know little about the policies they vote on. Is that a failure of citizenship or a sensible response to incentives? Anthony Downs (*An Economic Theory of Democracy*, 1957) argued the second: information costs time, and one vote rarely decides anything, so ignorance is rational. This lesson makes that precise, then adds a twist from Timothy Feddersen and Wolfgang Pesendorfer ("The Swing Voter's Curse," *American Economic Review*, 1996). An uninformed voter who cares only about getting the right outcome may do best by **staying home**. If partisans are on the ballot, she may do best by voting **against** what she believes.

## The idea

Your vote matters only when it is pivotal: it breaks a tie or creates one. So the only question a voter needs to answer is "what is true *in the event that my vote counts*?"

Downs's half is about acquiring information. Learning which option is right changes your payoff only if you are pivotal, and [1.2](01-02-turnout-and-the-paradox-of-voting.md) showed how rare that is. Multiply a small value by a tiny probability and the value of information falls below the cost of a few hours' reading.

The curse is about using what you lack. Suppose some other voters *know* which option is right and vote accordingly. When is the vote close enough for you to matter? Often when the informed voters are pushing one way and you are about to push the other. Your vote then overrides someone who knows more. A voter who reasons this through abstains and lets the informed decide. Partisans change the arithmetic. If a bloc votes B whatever the truth, the informed may be too few to overcome it, and an uninformed vote for A can cancel a partisan vote and hand the decision back to the informed.

## The model

**Setup.** Two states of the world, $\omega \in \{A, B\}$, and two alternatives with the same names. The prior is $\mu = \Pr(\omega = A)$. Voters are of three kinds:

- **Independents** get payoff 1 if the outcome matches the state and 0 otherwise (common values).
- **Partisans:** $m_A$ always vote A and $m_B$ always vote B.
- Each independent is **informed** (learns $\omega$) with probability $q$, independently, and otherwise knows only $\mu$.

Everything except $\omega$ and who is informed is common knowledge. Each voter votes A, votes B or abstains, at no cost. The alternative with more votes wins; a tie is broken by a fair coin. The solution concept is Bayes–Nash equilibrium ([`grad-game-theory` 4.1](../../grad-game-theory/lessons/04-01-bayesian-games-bayes-nash.md)). Informed independents vote $\omega$, which is weakly dominant. The strategic question is what an **uninformed** independent does.

**Proposition 1 ([rational ignorance](../reference.md#rational-ignorance); Downs).** Suppose the other $n$ voters' ballots are independent of $\omega$ and $n$ is even, so they tie with probability $\pi_t$ (your [pivot probability](../reference.md#pivot-probability), as in 1.2). Your stake is $v$: the outcome is worth $v$ to you if it matches the state, 0 otherwise. Uninformed, you vote for the likelier state. The value of perfect information is

$$V = \pi_t \, v \, \big(1 - \max(\mu, 1 - \mu)\big) \le \tfrac12 \pi_t v.$$

*In words:* information pays only in the tie, and even there it only fixes the mistakes your prior would have made.

*Proof.* With $n$ even, the margin among the others is either 0 or at least 2. If it is at least 2, the outcome does not depend on your vote. If it is 0, your vote decides: informed, you are right for sure (payoff $v$); uninformed, you are right with probability $\max(\mu, 1-\mu)$. Since the others' ballots are independent of $\omega$, the tie carries no information about $\omega$, so $V = \pi_t\big(v - v\max(\mu, 1-\mu)\big)$. ∎

A million others in a dead heat give $\pi_t = 0.000798$ (exact; $\sqrt{2/(\pi n)}$ agrees to three figures). With $v = 2{,}000$ units and $\mu = 0.7$, $V = 0.479$ units. You would pay at most that for perfect information, and voting itself was free. Downs's point is that this holds even for a voter who cares a great deal about the outcome.

The hypothesis "ballots independent of $\omega$" is exactly what fails once others are informed. Then the pivotal event itself carries information.

**Lemma ([conditioning on pivotality](../reference.md#conditioning-on-pivotality)).** Let $d$ be the others' margin, A votes minus B votes. For an uninformed independent,

$$\Delta_A \equiv \mathbb{E}[u \mid \text{vote A}] - \mathbb{E}[u \mid \text{abstain}] = \tfrac12\Big[\mu \Pr(d \in \{0,-1\} \mid A) - (1-\mu)\Pr(d \in \{0,-1\} \mid B)\Big].$$

So voting A beats abstaining iff $\Pr(\omega = A \mid d \in \{0, -1\}) > \tfrac12$.

*In words:* compare the options only in the events where your vote changes something, and use your posterior *given* those events, not your prior.

*Proof.*

1. If $d \ge 1$, A wins either way; if $d \le -2$, B wins either way. Your vote changes nothing.
2. If $d = 0$, abstaining gives A with probability $\tfrac12$ and voting A gives A for sure. If $d = -1$, abstaining gives B and voting A gives a tie. Either way, voting A moves probability $\tfrac12$ from B to A.
3. That move gains $\tfrac12$ in state A and loses $\tfrac12$ in state B. Weight by $\Pr(\omega)\Pr(d \in \{0,-1\} \mid \omega)$ and sum. Dividing by $\Pr(d \in \{0,-1\})$ turns the sign condition into the posterior condition. ∎

The same argument for voting B uses $d \in \{0, 1\}$.

**Proposition 2 (the [swing voter's curse](../reference.md#swing-voters-curse), no partisans).** Let $m_A = m_B = 0$, $n \ge 1$ other independents, $0 < q < 1$ and $\mu \ge \tfrac12$. "Informed independents vote $\omega$, uninformed independents abstain" is a Bayes–Nash equilibrium iff

$$(2\mu - 1)(1 - q) \le nq(1 - \mu).$$

*In words:* once you expect even one or two informed voters, staying home beats voting for the side you think likelier.

*Proof.* Let $k$ be the number of informed others, so $P_0 = (1-q)^n$ and $P_1 = nq(1-q)^{n-1}$ are the chances that $k = 0$ and $k = 1$. Every vote cast by others is informed, so $d = k$ in state A and $d = -k$ in state B.

1. Voting A is pivotal in state A iff $k = 0$, and in state B iff $k \in \{0, 1\}$. By the Lemma, $\Delta_A = \tfrac12\big[(2\mu - 1)P_0 - (1-\mu)P_1\big]$.
2. $\Delta_A \le 0$ iff $(2\mu-1)P_0 \le (1-\mu)P_1$. Divide by $(1-q)^{n-1}$ to get the condition.
3. Voting B: pivotal in state B iff $k = 0$, in state A iff $k \in \{0,1\}$, so $\Delta_B = \tfrac12\big[(1-\mu)P_0 - \mu(P_0 + P_1)\big] < 0$, since $1 - \mu \le \mu$ and $P_1 > 0$.
4. Informed voters cannot gain by deviating: voting $\omega$ never makes the outcome worse. ∎

Feddersen and Pesendorfer's own model is larger: a random electorate of partisans, independents and voters who abstain anyway. Their Proposition 1 says that an uninformed independent who is *indifferent between voting A and voting B* strictly prefers abstaining, so no equilibrium has the uninformed mixing between the two alternatives. The published proof contained an error; Mark Fey and Jaehoon Kim's comment in the same journal supplies a correct one. In large electorates they find substantial abstention, yet the outcome almost always matches the full-information outcome: [full-information equivalence](../reference.md#full-information-equivalence). With all uninformed abstaining, Proposition 2's electorate is right with probability $1 - \tfrac12(1-q)^n$, which tends to 1.

**Where the argument is weakest.** The curse needs three things: common values among independents; voters labelled "informed" who really are right; and fully Bayesian voters who know $q$, $\mu$ and the partisan counts. If "informed" voters share a misleading source, deferring to them is no safeguard ([`social-choice` 5.2](../../social-choice/lessons/05-02-when-the-jury-theorem-fails.md)'s common causes). If independents want different things, the pivotal event no longer says who is *right*, only who is *winning*. A laboratory test (Marco Battaglini, Rebecca Morton and Thomas Palfrey, *Review of Economic Studies*, 2010) found subjects abstaining and compensating for partisans roughly as predicted, though incompletely. Whether mass electorates reason this way is for [`empirical-political-economy`](../../empirical-political-economy/syllabus.md).

## Picture

![Posterior probability of state A conditional on the voter being pivotal, plotted against the number n of other independents from 0 to 20, with prior 3/4 and each other independent informed with probability 1/5. The curve starts at the prior 0.75 at n equal to 0 and falls steadily, crossing the dashed line at one half exactly at n equal to 8, and reaches one third at n equal to 20. Left of 8, voting A beats abstaining; right of 8, abstaining wins.](assets/01-03-fig1.svg)

The prior never changes; the pivotal posterior does. Each extra potentially informed voter makes "my vote counts" more likely to mean "I am about to cancel an informed B vote."

## Worked examples

**Example 1 (clean): the curse with a strong prior.** Take $\mu = \tfrac34$, $q = \tfrac15$, no partisans. The threshold is $n^* = \frac{(2\mu-1)(1-q)}{q(1-\mu)} = \frac{(1/2)(4/5)}{(1/5)(1/4)} = 8$. At $n = 10$:

- $P_0 = (4/5)^{10} = 0.1074$ and $P_1 = 10 \cdot \tfrac15 (4/5)^9 = 0.2684$.
- Pivotal posterior $\Pr(A \mid \text{pivotal}) = \frac{\mu P_0}{\mu P_0 + (1-\mu)(P_0 + P_1)} = \frac{6}{13} = 0.4615$, below $\tfrac12$ although the prior is $\tfrac34$.
- Probability of a correct outcome: abstain $1 - \tfrac12(4/5)^{10} = 0.9463$; vote A $0.9396$; vote B $0.8188$.

At $n = 5$ the order flips: vote A $0.8669$, abstain $0.8362$. With few voters, the chance that nobody else knows anything is large, and your prior is the best information in the room.

**Example 2 (the hypothesis bites): one partisan.** Now $\mu = \tfrac25$ (B is likelier), two other independents with $q = \tfrac12$ whose uninformed types abstain, and one B-partisan. You are uninformed. Enumerating the four informed/uninformed patterns in each state:

| Your action | Correct, state A | Correct, state B | Overall |
|---|---|---|---|
| Vote A | 7/8 | 7/8 | **0.875** |
| Abstain | 1/2 | 1 | 0.800 |
| Vote B | 1/8 | 1 | 0.650 |

Vote A, for the alternative you think *less* likely. Your A vote cancels the partisan, so the informed decide whenever at least one exists. Comparing $\tfrac78$ with $1 - \tfrac{\mu}{2}$, voting A is best iff $\mu > \tfrac14$. Remove the partisan and the order reverses to Proposition 2's: abstain $0.875$, vote B $0.800$, vote A $0.700$. Partisans turn the curse's advice from "stay home" into "offset them." In Feddersen and Pesendorfer's large electorates the uninformed likewise compensate for the partisan imbalance, some voting against it and the rest abstaining.

## Watch out

- **You might think** an uninformed voter should vote her prior when she has one, **but actually** the relevant probability is the posterior given that her vote is pivotal. In Example 1 a prior of $\tfrac34$ becomes $\tfrac{6}{13}$.
- **You might think** the swing voter's curse says "the uninformed should abstain," **but actually** Proposition 2 assumes no partisans and enough informed voters. With a partisan bloc, the same logic says vote against the bloc, even against your prior (Example 2). This is the hypothesis people drop.
- **You might think** the "swing voter" here is [2.3](02-03-probabilistic-voting.md)'s swing voter, **but actually** that is an ideologically uncommitted group that candidates target with transfers. Here it is an independent with common values and no information. Same words, different models.

## One-liner

> Information pays only when you are pivotal, which is almost never (Downs); and when others know more, being pivotal means you are about to overrule them, so the uninformed should abstain, or offset the partisans (Feddersen–Pesendorfer).

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* Two B-partisans and three other independents, each informed with probability $\tfrac12$; uninformed others abstain. You are an uninformed independent with prior $\mu = \tfrac13$. Majority rule, coin-flip ties.

(a) Compute the probability of a correct outcome if you vote A, abstain, or vote B.
(b) Show that voting A is your best action for **every** prior $\mu > 0$. Use the pivotal events, not the totals.

**P2 (🟡)** *(Formal (a)–(b).)* Three independents (you and two others) and one B-partisan. $\mu = \tfrac12$, $q = \tfrac12$. In a symmetric strategy, an uninformed independent votes A with probability $\sigma$ and abstains otherwise; informed independents vote $\omega$.

(a) Find the $\sigma^*$ that makes an uninformed independent indifferent between voting A and abstaining, and check that voting B is worse there.
(b) Compute the probability of a correct outcome when all three independents use $\sigma^*$, and compare it with $\sigma = 0$ and $\sigma = 1$.

**P3 (🟡)** *(Exegetical.)* An invented newspaper column: "A fifth of registered voters skipped the water-bond referendum, and the exit polls show they were the least informed. Laziness, plain and simple. If they had bothered to vote their gut, the result would have been more representative and more likely right."

In 150 words or fewer: name the model that offers a rival reading of the abstention, state the assumptions under which it predicts exactly this pattern, and say what fact about the electorate would make "vote their gut" bad advice and what fact would make "stay home" bad advice.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) Condition on the state. Let $k \sim \text{Bin}(3, \tfrac12)$ be the number of informed others.

- **State B.** B has at least 2 votes and A at most your 1, so B wins whatever you do: correct with probability 1 for all three actions.
- **State A.** A gets $k$ votes, plus yours. Vote A: $k + 1$ against 2, A wins iff $k \ge 2$, ties iff $k = 1$, so $\tfrac12 + \tfrac12 \cdot \tfrac38 = \tfrac{11}{16}$. Abstain: $k$ against 2, wins iff $k = 3$, ties iff $k = 2$, so $\tfrac18 + \tfrac12 \cdot \tfrac38 = \tfrac{5}{16}$. Vote B: $k$ against 3, only a tie at $k = 3$, so $\tfrac{1}{16}$.

With $\mu = \tfrac13$: vote A $\tfrac13 \cdot \tfrac{11}{16} + \tfrac23 = \tfrac{43}{48} = 0.896$; abstain $\tfrac{37}{48} = 0.771$; vote B $\tfrac{11}{16} = 0.688$.

(b) In state B your vote is never pivotal: the others' margin is at most $-2$. So $\Pr(d \in \{0,-1\} \mid B) = 0$, and the Lemma gives $\Delta_A = \tfrac12 \mu \Pr(d \in \{0,-1\} \mid A) > 0$ for every $\mu > 0$. Pivotal events for A occur with $k \in \{1, 2\}$, probability $\tfrac34$, so $\Delta_A = \tfrac38\mu$ (check: $\tfrac{43}{48} - \tfrac{37}{48} = \tfrac18 = \tfrac38 \cdot \tfrac13$). Voting B also loses to voting A: in state A it lowers the probability of a correct outcome from $\tfrac{11}{16}$ to $\tfrac{1}{16}$, and in state B nothing changes. A vote for A costs nothing in the state where A is wrong.

**Wrong turns:** Voting B because the prior favours B. The prior is irrelevant when one state contains no pivotal event. Counting the partisans as informed votes.

---

**P2** *(Formal (a)–(b).)*

(a) With $\mu = \tfrac12$ the Lemma says: indifferent iff $\Pr(d \in \{0,-1\} \mid A) = \Pr(d \in \{0,-1\} \mid B)$.

- **State A.** Each other independent votes A with probability $a = \tfrac12 + \tfrac12\sigma = \tfrac{1+\sigma}{2}$, else abstains; the partisan votes B. With $X$ A votes, $d = X - 1 \in \{0, -1\}$ iff $X \le 1$: probability $1 - a^2$.
- **State B.** Each other votes A with probability $\tfrac{\sigma}{2}$, B with $\tfrac12$, abstains with $\tfrac{1-\sigma}{2}$. Then $d = Y - 1 - Z$ with $Y$ the A votes and $Z$ the independents' B votes, and $d \in \{0,-1\}$ iff $Y - Z \in \{1, 0\}$: probability $\tfrac{(1-\sigma)^2}{4} + \tfrac{\sigma}{2} + \tfrac{\sigma(1-\sigma)}{2}$.

Setting them equal and multiplying by 4: $3 - 2\sigma - \sigma^2 = 1 + 2\sigma - \sigma^2$, so $\boxed{\sigma^* = \tfrac12}$. Both pivotal probabilities equal $\tfrac{7}{16}$. At $\sigma^*$: vote A and abstain both give a correct outcome with probability $\tfrac{13}{16}$; vote B gives $\tfrac58$, worse. At $\sigma = 0$ voting A strictly wins ($\tfrac78$ vs $\tfrac34$); at $\sigma = 1$ abstaining does ($\tfrac78$ vs $\tfrac34$). So neither pure strategy is an equilibrium, and a grid search over all symmetric mixtures of A, B and abstention finds only $\sigma^* = \tfrac12$.

(b) Probability of a correct outcome, everyone at the same $\sigma$: $\sigma = 0$: $\tfrac{27}{32} = 0.844$. $\sigma^* = \tfrac12$: $\tfrac{57}{64} = 0.891$. $\sigma = 1$: $\tfrac{27}{32} = 0.844$. Partial offsetting does better than either no offsetting or full offsetting: three uninformed A votes would swamp the informed.

**Wrong turns:** Writing the state-B pivotal event as "$Y = Z$" only, forgetting $d = -1$. Treating $\sigma^*$ as the share of uninformed who "believe A": they all share the same belief, and the mixing is what keeps each indifferent.

---

**P3** *(Exegetical, strict.)*

**Must hit, strict:**

- Names the swing voter's curse (Feddersen–Pesendorfer): an uninformed voter with common values abstains because when her vote is pivotal it is likely overriding an informed vote.
- States its assumptions: voters share the goal of getting the right answer; some others are informed and vote that information; voters condition on pivotality. Abstention is then a best response at zero voting cost, not laziness.
- "Vote their gut" is bad advice when informed voters are numerous enough to decide without them (Proposition 2's condition). "Stay home" is bad advice when a partisan bloc outnumbers the informed: then uninformed votes against the bloc help (Example 2). It is also bad when the "informed" share a misleading source.

**Wrong turns:** Citing Downs's paradox of voting. The column's abstainers are the *least informed*, which is the curse's signature; a voting-cost story alone does not predict that the least informed are the ones who stay home. Saying the model proves the abstainers were right: it shows abstention *can* be a best response under its assumptions.

**Model answer, one of several:** The swing voter's curse reads the same pattern as reasoning, not laziness. If voters share the goal of a correct decision and some are informed, an uninformed voter's ballot matters only when the vote is close, which is when it is most likely cancelling an informed vote; abstaining leaves the decision to those who know more, even when voting costs nothing. "Vote their gut" is bad advice when enough informed voters turn out to decide alone. "Stay home" is bad advice when a partisan bloc on the bond outnumbers the informed, so that uninformed votes against it restore their influence, or when the "informed" all learned from the same misleading source.

</details>

## Flashback

**From Lesson [1.1](01-01-from-ballots-to-policy-space.md) (From ballots to policy space):** *(Formal (a)–(b).)* Three voters choose a tax rate $t \in (0, 1]$ that funds a public good $G = t\bar y$ per head, where $\bar y$ is mean income. Voter $i$ has utility $(1 - t)y_i + a_i \ln G$, with incomes $y = (20, 40, 60)$ and tastes for the good $a = (18, 4, 24)$. (a) Show that each induced preference over $t$ is single-peaked, find each peak, and find the Condorcet winner. (b) Show that the profile is not single-crossing in income by exhibiting one pair of rates. Then, in two sentences, say why a Condorcet winner exists anyway and why the median earner does not get her rate.

<details>
<summary>Solution</summary>

(a) Since $\ln G = \ln t + \ln \bar y$, voter $i$'s induced utility is $u_i(t) = (1-t)y_i + a_i \ln t$ plus a constant. Then $u_i''(t) = -a_i/t^2 < 0$: strictly concave, so single-peaked. The first-order condition $-y_i + a_i/t = 0$ gives $t_i = a_i/y_i$, all inside $(0, 1]$:

- peaks 0.9 (income 20), 0.1 (income 40), 0.4 (income 60).

Three voters, single-peaked on one axis: by Black's theorem the median peak, **$t = 0.4$**, the richest voter's, is the Condorcet winner. Check: against 0.1, the voters with peaks 0.9 and 0.4 prefer 0.4, a 2–1 win; against 0.9, the voters with peaks 0.1 and 0.4 prefer 0.4. A grid over $(0, 1]$ confirms 0.4 is the only rate that beats every other.

(b) Order the voters by income: 20, 40, 60. Between 0.1 and 0.4, the voters who prefer the higher rate have incomes 20 and 60, which is neither an initial nor a final segment, so single-crossing in income fails. A Condorcet winner exists anyway because Black's theorem needs only single-peakedness on one axis, which concavity delivers; single-crossing in income was a sufficient condition, not a necessary one. Dividing $u_i$ by $y_i$ shows each voter ranks rates by $-t + (a_i/y_i)\ln t$, so the voters line up by the single trait $a_i/y_i$, taste relative to income (which sets her tax price), and the median of that trait (0.4) decides, while the median earner has the lowest ratio, 0.1.

**Wrong turns:** Reporting the median earner's peak, 0.1, as the outcome: 1.1's Proposition licenses that only when income alone orders the voters. Concluding from the failure of single-crossing in income that majority rule must cycle.

</details>

## Connections

- **Backward:** [1.2](01-02-turnout-and-the-paradox-of-voting.md) computed the pivot probability; Proposition 1 prices information with it. The Lemma is the pivotal reasoning of [`social-choice` 5.2](../../social-choice/lessons/05-02-when-the-jury-theorem-fails.md)'s strategic jurors, moved from a jury with a verdict threshold to an election with abstention and partisans. Bayes' rule is [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md).
- **Forward:** [1.4](01-04-persuasion-and-the-media.md) asks who supplies the information voters lack, and how a sender who commits to a test can steer them. [2.3](02-03-probabilistic-voting.md)'s swing voters are a different object (Watch out).
- **Sideways:** full-information equivalence is the strategic answer to [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md)'s epistemic case for democracy: a large electorate can be right even when most of it knows nothing, *if* the uninformed defer. The curse is the voting cousin of the winner's curse in common-value auctions: winning, like being pivotal, is news about what others know.

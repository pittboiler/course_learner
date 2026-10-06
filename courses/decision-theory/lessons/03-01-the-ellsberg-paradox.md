# Decision Theory · Lesson 3.1: The Ellsberg paradox

> ⏱ ~15 min · Module 3: Ambiguity and ignorance · Builds on: [2.1 Savage's framework](02-01-savages-framework.md), [2.3 The Allais paradox and the sure-thing principle](02-03-the-allais-paradox-and-the-sure-thing-principle.md) · Unlocks: [3.2 Models of ambiguity](03-02-models-of-ambiguity.md), [3.3 Decisions under ignorance](03-03-decisions-under-ignorance.md)

## Why this matters

The Allais chooser of [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md) had probabilities handed to her and weighed them oddly. The Ellsberg chooser is stranger: no probability assignment fits her choices at all, not even a wrong one. Savage's theorem ([2.1](02-01-savages-framework.md)) promised that anyone who obeys his postulates acts *as if* she had a probability for every event. Ellsberg found a choice pattern, common and stable, that refuses the "as if". It is the reason the next three lessons exist. An insurer pricing a risk with no track record, a central bank facing a new kind of shock, or a planner weighing a climate tipping point is choosing in the same position.

## The idea

Two urns, each with 100 red and black balls. The first has exactly 50 of each. The second has an unknown mix. You win 100 dollars if you draw red. Which urn do you draw from?

Most people pick the known urn. Fine: perhaps you suspect the unknown urn is short on red. Now the prize goes on **black**. Most people pick the known urn again. But if preferring the known urn for red meant you thought red was less than a 50% chance in the unknown urn, then black must be *more* than 50% there, and you should now want the unknown urn. Preferring the known urn both times means you hold no probability for the unknown urn at all.

Keynes had used essentially this pair of urns (white and black balls, no prize) in his *Treatise on Probability* (1921, ch. VI) to separate a probability from the evidence behind it. Both urns give each colour a probability of one half, but the first judgement rests on far more knowledge. He called that difference the [weight of evidence](../reference.md#weight-of-evidence):

> "New evidence will sometimes decrease the probability of an argument, but it will always increase its 'weight.'" (Keynes, *Treatise on Probability*, ch. VI §1)

Frank Knight, the same year, drew a related line between chances you can measure and chances you cannot ([risk and uncertainty](../reference.md#risk-and-uncertainty)):

> "a measurable uncertainty, or 'risk' proper, as we shall use the term, is so far different from an unmeasurable one that it is not in effect an uncertainty at all." (Knight, *Risk, Uncertainty and Profit*, 1921, ch. I)

Daniel Ellsberg ("Risk, Ambiguity, and the Savage Axioms", *Quarterly Journal of Economics*, 1961) turned the distinction into choices that bite on Savage's axioms. He called the unknown urn's condition **ambiguity**: probabilities that rest on thin or conflicting evidence. Preferring bets with known chances is [ambiguity aversion](../reference.md#ambiguity-aversion).

Keep three claims apart. *Descriptive*: many subjects choose this way, though not all. *Formal*: no probability fits, and a named postulate fails. *Normative*: whether that makes the choices irrational is open, and 3.2 takes it up.

## The formal version

**The three-colour urn.** An urn holds $N$ balls: $k$ red, and $N - k$ that are black or yellow in unknown proportion. A bet pays a prize $x$ if the drawn ball's colour is among those named, else 0. With $u(x) = 1$ and $u(0) = 0$, the four acts are:

| Act | Red | Black | Yellow |
|---|---|---|---|
| $f_1$: bet on red | 1 | 0 | 0 |
| $f_2$: bet on black | 0 | 1 | 0 |
| $f_3$: bet on red or yellow | 1 | 0 | 1 |
| $f_4$: bet on black or yellow | 0 | 1 | 1 |

The **[Ellsberg pattern](../reference.md#ellsberg-paradox)** is $f_1 \succ f_2$ and $f_4 \succ f_3$, where $\succ$ is strict preference. *In words:* bet on the colour whose share you know, both times. $f_1$ wins with chance $k/N$ and $f_4$ with chance $(N-k)/N$, both known. $f_2$ and $f_3$ have chances anywhere in a range.

**Claim 1 (no probability).** Let $p_R, p_B, p_Y$ be any subjective probabilities of the three colours and $u$ any utility with $u(x) > u(0)$. Then

$$
\begin{aligned}
EU(f_1) - EU(f_2) &= \big(u(x) - u(0)\big)(p_R - p_B),\\
EU(f_4) - EU(f_3) &= \big(u(x) - u(0)\big)(p_B - p_R).
\end{aligned}
$$

*In words:* the two differences are equal and opposite, so no probability and no utility make both choices maximize expected utility. The proof never uses $p_R = k/N$, and the curvature of $u$ cancels, because every bet has the same two outcomes.

**Claim 2 (the postulate).** Savage's P2, the [sure-thing principle](../reference.md#sure-thing-principle): for acts $f, g, f', g'$ and an event $E$, if $f = f'$ and $g = g'$ on $E$, while $f = g$ and $f' = g'$ off $E$, then $f \succeq g$ if and only if $f' \succeq g'$. *In words:* where two acts agree, what they agree on cannot matter to the choice between them.

Take $E$ = {red, black}. On $E$, $f_1 = f_3$ and $f_2 = f_4$. On yellow, $f_1$ and $f_2$ both pay 0, and $f_3$ and $f_4$ both pay 1. P2 therefore requires $f_1 \succeq f_2$ exactly when $f_3 \succeq f_4$. The Ellsberg pattern has $f_1 \succ f_2$ and $f_4 \succ f_3$. P2 fails.

This is the postulate Allais broke, but at a deeper point. In Savage's system P2 is what makes "more likely than", read off bets as in [2.2](02-02-probability-from-preference.md), behave additively, and that is what lets a [subjective probability](../reference.md#subjective-probability) exist. The two-urn version breaks P2 too, once the states are pairs (colour in the known urn, colour in the unknown urn). The three-colour urn just shows it in one table.

**Why the pattern tempts.** Yellow is not inert. Adding yellow to both bets turns the ambiguous bet ($f_2$) into the unambiguous one ($f_4$), and the unambiguous one ($f_1$) into the ambiguous one ($f_3$). The common column *complements* what it is added to. P2 says it cannot matter. An ambiguity-averse chooser says that is exactly why it matters.

**Where the argument is weakest.** The proof is valid, so pressure falls on two premises. First, the framing: Claims 1–2 assume the urn's mix is a state of the world fixed independently of which bet you take (Example 2 shows what happens if not). Second, the step from "violates P2" to "irrational" needs P2 as a norm. Its defenders say yellow pays the same under both acts, so attending to it is a mistake, as Savage argued about Allais. Its critics say P2 assumes the value of a bet on one event is separable from what happens on the others, and that the separability is precisely what a chooser who cares about the quality of her evidence denies. That is the same axiom under the same two readings as in [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md), with beliefs rather than risk attitudes at stake.

## Picture

![A plot of each bet's chance of winning against b, the number of black balls among the 65 non-red balls, from 0 to 65. Bet on red is flat at 0.35; bet on black rises from 0 to 0.65; bet on black or yellow is flat at 0.65; bet on red or yellow falls from 1 to 0.35. Both pairs cross at b equals 35. Red beats black only to the left of 35, and black or yellow beats red or yellow only to the right.](assets/03-01-fig1.svg)

Example 1's urn: 100 balls, 35 red, 65 black or yellow. The two shaded regions meet at $b = 35$ and never overlap. Any single estimate of $b$ endorses at most one half of the Ellsberg pattern.

## Worked examples

**Example 1 (clean): the 35-red urn.** The prize is 100 dollars. Let $b$ be the number of black balls, so yellow is $65 - b$.

- $P(f_1) = 35/100$, $P(f_2) = b/100$. So $f_1 \succ f_2$ needs $b < 35$.
- $P(f_4) = 65/100$, $P(f_3) = (35 + 65 - b)/100 = (100 - b)/100$. So $f_4 \succ f_3$ needs $65 > 100 - b$, that is $b > 35$.

No $b$ does both. Notice something about each choice taken alone. At the symmetric estimate $b = 32.5$, expected utility *recommends* $f_1$ ($0.35 > 0.325$) and recommends $f_3$ ($0.675 > 0.65$). So the first Ellsberg choice is consistent with expected utility, and only the second departs from it. A single choice never reveals ambiguity aversion. The pair does.

**Example 2 (hard): the suspicious subject.** Asked to defend her choices, a subject says: "I assumed the experimenter fills the urn after hearing my bet, to make me lose." Grant her that. Then the mix is the worst one for whichever bet she takes:

| Bet | Worst mix | Chance of winning |
|---|---|---|
| $f_1$ red | any | $0.35$ |
| $f_2$ black | $b = 0$ | $0$ |
| $f_3$ red or yellow | $b = 65$ | $0.35$ |
| $f_4$ black or yellow | any | $0.65$ |

Both Ellsberg choices now maximize expected utility. No postulate fails, because this is no longer a Savage problem: the probability of black depends on the act, so the states are [act-dependent](../reference.md#act-dependent-states), the same flaw that broke dominance arguments in [1.1](01-01-acts-states-outcomes.md).

This is where the analysis strains. Ellsberg's defenders close the loophole by design: seal the mix before any bet, or let the subject name which colour counts as "black" after the urn is filled. Suspicion then has no target, and the question becomes whether the pattern survives. Both sides can read a surviving pattern. An expected-utility theorist calls it a distrust heuristic carried into a setting where it does no work: a descriptive fact, not a reason. An ambiguity theorist calls the worst-case calculation a reasonable policy whenever the evidence leaves the mix open, distrust or no distrust. That policy, made precise, is [maxmin expected utility](../reference.md#maxmin-expected-utility) (3.2). The crux is Keynes's: can the *weight* of the evidence behind a probability properly affect a choice, beyond the probability itself?

## Watch out

- **You might think Ellsberg is just Allais again.** Both break P2. But the Allais chooser has given probabilities and an attitude to risk that expected utility cannot capture ([2.4](02-04-risk-beyond-curvature.md)). The Ellsberg chooser has no probability to have an attitude about. Allais is about valuing risk; Ellsberg is about belief.
- **You might think concave utility explains it.** Every bet pays the same two prizes, so $u(x) - u(0)$ factors out of every comparison. Risk aversion in the sense of [`micro-refresher` 2.2](../../micro-refresher/lessons/02-02-risk-aversion.md) is irrelevant.
- **You might think ambiguity aversion is just a pessimistic probability.** A fixed pessimistic belief about black, say $p_B$ small, gives $f_1 \succ f_2$ but then also $f_3 \succ f_4$. The pessimism has to switch with the bet, as in Example 2, and no single prior switches.

## One-liner

> Ellsberg's choosers prefer known chances twice over in a way no probability can fit, so either the sure-thing principle binds belief as well as risk, or the weight of evidence behind a probability can rationally count.

## Problems

**P1 (🟢) *(Formal (a) · Exegetical (b).)*** A bag holds 80 balls: 30 white, and 50 green or purple in unknown mix. For any number $c$, act $f_c$ pays 100 dollars on white, 0 on green and $c$ dollars on purple; act $g_c$ pays 0 on white, 100 dollars on green and $c$ dollars on purple. Abe chooses $f_0$ over $g_0$ and $g_{100}$ over $f_{100}$.

(a) For any subjective probabilities $p_W, p_G, p_P$ and any utility $u$ with $u(100) > u(0)$, show that $EU(f_c) - EU(g_c)$ does not depend on $c$. Conclude that no probability and utility make Abe an expected-utility maximizer.
(b) Name the Savage postulate Abe violates. In one sentence, say what setting $c = 100$ does to the ambiguity of $g$.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An **invented** memo from a pension fund's investment committee, not the words of any real fund:

> "Zone 1's hurricane landfall rate is well documented at 20% a season. Zone 2 is newly developed coast with no reliable record; our models put its landfall chance anywhere from 5% to 35%. We will buy bond A, which pays 1 million dollars unless a hurricane lands in Zone 1, rather than bond B, which pays 1 million unless one lands in Zone 2. For our hedging book we will likewise buy contract C, paying 1 million if a hurricane lands in Zone 1, rather than contract D, paying 1 million if one lands in Zone 2. All four cost the same. Unknown risks deserve a margin of safety."

(a) Let $q$ be a single probability of Zone 2 landfall. For which $q$ does an expected-utility maximizer with any increasing utility choose A over B? Which of those $q$ lie inside the models' range?
(b) Show that no $q$ makes both of the committee's choices maximize expected utility.
(c) In two sentences: is Zone 2 landfall risk or uncertainty in Knight's sense? If the committee's best single estimate for Zone 2 were also 20%, what would still differ between the two judgements in Keynes's terms?

**P3 (🔴, optional) *(Formal (a) · Evaluative (b).)*** A trustee replies to P2's memo: "Say we hold B and D. If we pay 10,000 dollars to swap B for A, and another 10,000 to swap D for C, we end up holding A and C, which pays exactly what B and D paid in every state, and we are 20,000 dollars poorer."

(a) Show that holding A and C together, and holding B and D together, each pays 1 million dollars in every state.
(b) Steelman the committee's reply, name the premise of the trustee's argument that the reply denies, and say whether an argument of the trustee's form would also tell against the Allais pattern. 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) · Exegetical (b), both strict.)*

(a) Write $\Delta u = u(100) - u(0) > 0$.

$$
\begin{aligned}
EU(f_c) &= p_W\,u(100) + p_G\,u(0) + p_P\,u(c),\\
EU(g_c) &= p_W\,u(0) + p_G\,u(100) + p_P\,u(c),\\
EU(f_c) - EU(g_c) &= \Delta u\,(p_W - p_G).
\end{aligned}
$$

The $p_P\,u(c)$ terms cancel, so the difference is the same for every $c$. Abe's first choice needs it positive ($c = 0$) and his second needs it negative ($c = 100$). Both cannot hold, whatever $p_W, p_G, p_P$ and $u$.

**Must hit, strict (b):**

- P2, the sure-thing principle: $f_c$ and $g_c$ agree on purple, and on {white, green} $f_0 = f_{100}$ and $g_0 = g_{100}$, so P2 ties the two choices together.
- At $c = 100$, $g$ pays on green or purple, a known 50 of 80 balls (chance $5/8$), while $f$ pays on white or purple, a chance anywhere from $3/8$ to $1$. Setting $c = 100$ makes $g$ the unambiguous bet.

**Wrong turns:** using $p_W = 3/8$ in (a); the result holds for any subjective $p_W$, which is the point. Answering "the vNM independence axiom" in (b): that is the lottery analogue, but there are no given probabilities here, which is why Savage's P2 is the postulate at issue.

**Model answer:** (a) The difference is $(u(100) - u(0))(p_W - p_G)$ for every $c$, so it cannot be positive at $c = 0$ and negative at $c = 100$. (b) P2. With $c = 100$, $g$ wins on 50 known balls of 80, while $f$'s chance depends on the unknown purple count.

---

**P2** *(Formal (a)–(b) · Exegetical (c), all strict.)*

Write $\Delta u = u(1\text{M}) - u(0) > 0$.

(a) A wins with chance $0.8$ and B with chance $1 - q$, so

$$
EU(A) - EU(B) = \Delta u\,\big(0.8 - (1 - q)\big) = \Delta u\,(q - 0.2).
$$

A beats B exactly when $q > 0.2$. Inside the models' range of 5% to 35%, that is $0.2 < q \le 0.35$.

(b) C wins with chance $0.2$ and D with chance $q$, so $EU(C) - EU(D) = \Delta u\,(0.2 - q)$, and C beats D exactly when $q < 0.2$. No $q$ is both above and below $0.2$. This is the two-urn Ellsberg pattern: Zone 1 is the known urn.

**Must hit, strict (c):**

- Knight: uncertainty, or at least far toward it, since no record or class of like cases measures the chance. An answer that calls it partly measurable because the models bound it is acceptable if it says why.
- Keynes: the probability would be the same, 20%, but the *weight* of evidence behind the Zone 2 judgement would be much lower, because it rests on far less relevant knowledge.

**Wrong turns:** in (a), using the models' midpoint 20% and concluding indifference; the question asks for the set of $q$. In (c), treating "uncertainty" as "a probability nobody has written down"; Knight's line is about whether the chance can be measured at all.

**Model answer (c):** Zone 2 landfall is Knightian uncertainty: there is no record from which to measure it. Even at a 20% best estimate, the Zone 2 judgement would carry less Keynesian weight than the Zone 1 judgement, since it rests on much less evidence.

---

**P3** *(Formal (a) · Evaluative (b).)*

(a) A pays unless Zone 1 landfall and C pays exactly if Zone 1 landfall; B and D are the same for Zone 2.

| Zone 1 | Zone 2 | A + C | B + D |
|---|---|---|---|
| no landfall | no landfall | 1M + 0 | 1M + 0 |
| no landfall | landfall | 1M + 0 | 0 + 1M |
| landfall | no landfall | 0 + 1M | 1M + 0 |
| landfall | landfall | 0 + 1M | 0 + 1M |

Each pair pays 1 million dollars in every state, so the trustee's endpoint is 1 million for sure, minus 20,000 in fees.

**Must hit, any verdict (b):**

- State the committee's reply at full strength: it ranks *holdings*, not bets one at a time. B and D held together pay 1 million for sure, so they carry no ambiguity, and an ambiguity-averse agent who looks at the whole book will not pay to swap either. It pays a premium for A over B only when B would be held alone.
- Name the premise denied: that the value of a bet in isolation fixes its value as part of a portfolio. That is separability, the same idea as P2 (what the rest of the holding pays cannot change the ranking of one part).
- Say whether it generalizes: arguments of the same form exist against independence violators, so the Allais pattern faces them too ([1.4](01-04-what-a-representation-theorem-shows.md)'s money pumps), and the same reply is available there.
- Either verdict passes. The trustee can press that an agent whose rankings depend on the rest of her book must track the whole book through time, which is where 3.2's dynamic-consistency worry starts. The committee can reply that a fund does exactly that.

**Wrong turns:** treating (a) as showing the committee is irrational; it shows only that piecewise swaps lose money for an agent who evaluates each swap separately. Replying that "the fees are small"; the argument is about a sure loss, whatever its size.

**Model answer (b), one of several:** The committee does not value bets one at a time. It ranks whole holdings, and B plus D already pays 1 million in every state, so it carries no ambiguity and the committee would pay nothing to swap it piece by piece. The pump runs only on an agent who prices each swap as though nothing else were held. The trustee's argument therefore needs a separability premise: a bet's value alone is its value inside a portfolio. That premise is P2's idea in another form, and ambiguity aversion denies it, because the bets hedge each other's ambiguity. The same form of argument can be run against the Allais pattern, with the same reply open. The cost of the reply is real: the committee must evaluate its book as a whole and stick to that plan over time, and whether that can always be done is the question 3.2 takes up.

</details>

## Flashback

**From Lesson [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md) (The Allais paradox and the sure-thing principle):** *(Formal (a)–(b).)* Prizes are 0, 4,000 and 10,000 dollars. A pays 4,000 with chance 30% and 10,000 with chance 70%. B pays 10,000 with chance 95% and nothing with chance 5%. C pays 4,000 with chance 30%, else nothing. D pays 10,000 with chance 25%, else nothing. A subject chooses A over B and D over C.

(a) Lay the four gambles out on one 100-ticket table with three ticket ranges. Show, without normalizing $u$, that no expected-utility function produces both choices, and say which column is the common consequence.
(b) Normalize $u(0) = 0$, $u(4{,}000) = 1$, $u(10{,}000) = v$. At what $v$ does an expected-utility agent switch between the pairs' options? Which pair of choices does an agent with $u(x) = \sqrt{x}$ make?

<details>
<summary>Solution</summary>

(a) Ticket ranges 1–5, 6–30, 31–100:

| | 1–5 | 6–30 | 31–100 |
|---|---|---|---|
| A | 4,000 | 4,000 | 10,000 |
| B | 0 | 10,000 | 10,000 |
| C | 4,000 | 4,000 | 0 |
| D | 0 | 10,000 | 0 |

Check: B pays nothing on 5 tickets and 10,000 on 95; C pays 4,000 on 30; D pays 10,000 on 25. With $u_0, u_4, u_{10}$ the utilities of 0, 4,000 and 10,000:

$$\begin{aligned}
EU(A)-EU(B) &= 0.30\,u_4-0.25\,u_{10}-0.05\,u_0,\\
EU(C)-EU(D) &= 0.30\,u_4-0.25\,u_{10}-0.05\,u_0.
\end{aligned}$$

A over B needs this number positive; D over C needs it negative. No $u$ does both. The common consequence is the 31–100 column: 10,000 for both acts in pair 1, nothing for both in pair 2. The pattern violates P2, the sure-thing principle.

(b) The common difference is $0.30 - 0.25v$, so the switch is at $v = 6/5$: A and C for $v < 6/5$, B and D for $v > 6/5$. With $u(x) = \sqrt{x}$, $v = \sqrt{10{,}000}/\sqrt{4{,}000} = \sqrt{2.5} \approx 1.58 > 6/5$, so B and D (expected utilities 88.97 against 95 in pair 1, 18.97 against 25 in pair 2). Concave utility moves both choices together; it cannot split them.

**Wrong turns:** a table in which A and B do not share the 31–100 column, which hides the cancellation. Thinking a common-consequence violation needs the common column to be the middle prize, or a sure thing: here it is the top prize, and A is attractive only because it carries no chance of zero. Answering (b) with a separate threshold for each pair.

</details>

## Connections

- **Backward:** Claim 2 runs Savage's P2 from [2.1](02-01-savages-framework.md) on a new case, and it is the postulate the Allais choices broke in [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md). The "no probability fits" result is the failure of [2.2](02-02-probability-from-preference.md)'s method of reading credences off bets. Example 2's escape is [1.1](01-01-acts-states-outcomes.md)'s act-dependent states.
- **Forward:** [3.2](03-02-models-of-ambiguity.md) models the pattern with a set of priors and maxmin expected utility, which formalizes Example 2's worst-case calculation, and states the case against ambiguity aversion that P3 opens. [3.3](03-03-decisions-under-ignorance.md) goes to the limit where no probabilities are available at all. [3.4](03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) asks whether a veil of ignorance is risk or uncertainty in Knight's sense.
- **Sideways:** Keynes also discussed the unknown urn as a puzzle for the principle of indifference, which assigns it one half ([`epistemology`](../../epistemology/syllabus.md) [5.4](../../epistemology/lessons/05-04-the-problem-of-priors.md)); his point in ch. VI is that indifference can fix the probability but not the weight. For the expected-utility algebra behind Claim 1, see [`micro-refresher` 2.1](../../micro-refresher/lessons/02-01-expected-utility.md).

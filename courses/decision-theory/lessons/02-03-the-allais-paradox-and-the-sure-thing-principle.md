# Decision Theory · Lesson 2.3: The Allais paradox and the sure-thing principle

> ⏱ ~15 min · Module 2: Subjective probability, Savage, and the independence axiom · Builds on: [2.1 Savage's framework](02-01-savages-framework.md), [`micro-refresher` 2.1](../../micro-refresher/lessons/02-01-expected-utility.md) · Unlocks: [2.4 Risk beyond curvature](02-04-risk-beyond-curvature.md), [3.1 The Ellsberg paradox](03-01-the-ellsberg-paradox.md)

## Why this matters

Savage's theorem in [2.1](02-01-savages-framework.md) rests on one postulate more than any other: the [sure-thing principle](../reference.md#sure-thing-principle). If it holds, preferences over gambles are linear in probability and expected utility follows. In Paris in 1952, Maurice Allais put a pair of choices to the conference, and Savage himself answered them the "wrong" way. Most people still do. This lesson asks what that shows: a mistake that the right picture corrects, or a principle that was never a requirement of rationality.

## The idea

Two choices, prizes in dollars:

- **Pair 1.** A: 2,000 for sure. B: 6,000 with chance 17%, 2,000 with chance 80%, nothing with chance 3%.
- **Pair 2.** C: 2,000 with chance 20%, else nothing. D: 6,000 with chance 17%, else nothing.

The common pattern is A and D. In pair 1, a sure 2,000 is worth more than a 3% risk of walking away empty-handed, however big the upside. In pair 2 you will probably get nothing either way, so 17% at 6,000 beats 20% at 2,000.

That pattern fits no expected-utility function. [`micro-refresher` 2.1](../../micro-refresher/lessons/02-01-expected-utility.md) did the algebra for Allais's own numbers (Problem 3): the two choices demand opposite inequalities between the same two terms. This lesson does it with fresh numbers, then asks the philosopher's question.

Savage's answer was a picture. Run all four gambles off **one** draw from 100 numbered tickets. On tickets 21 to 100, A and B both pay 2,000 and C and D both pay nothing. Whatever you choose, those tickets do not care. On tickets 1 to 20 the two pairs are *identical*: 2,000 against "0 or 6,000". So if A beats B, C should beat D. The A-and-D chooser is, on this view, letting a column that does not discriminate between her options decide between them.

## The formal version

**The postulate.** In Savage's framework ([2.1](02-01-savages-framework.md)), acts $f,g$ map states $s$ to consequences, and $E$ is an event (a set of states) with complement $E^c$. The **sure-thing principle** (P2) says: if $f,g$ agree on $E^c$, and $f',g'$ agree with $f,g$ respectively on $E$ and with each other on $E^c$, then

$$f\succeq g \iff f'\succeq g'.$$

*In words: where two acts give the same thing, what they give there cannot affect which one you prefer.* Its lottery-level twin is the vNM [independence axiom](../reference.md#independence-axiom): for lotteries $L,L',L''$ and $\alpha\in(0,1]$, $L\succeq L'$ iff $\alpha L+(1-\alpha)L''\succeq \alpha L'+(1-\alpha)L''$.

**The violation.** Write $u_0,u_2,u_6$ for the utilities of 0, 2,000 and 6,000. Expected utility subtracts the same column from both sides:

$$\begin{aligned}
EU(A)-EU(B) &= 0.20\,u_2-0.17\,u_6-0.03\,u_0,\\
EU(C)-EU(D) &= 0.20\,u_2-0.17\,u_6-0.03\,u_0.
\end{aligned}$$

*In words: the two differences are the same number, so expected utility must rank A over B exactly when it ranks C over D.* The pattern A and D needs that number to be positive and negative at once. No $u$ does it, with any normalization: this is the [Allais paradox](../reference.md#allais-paradox), a **common-consequence** violation (the common consequence is the 80% column).

**A second violation.** The [common-ratio effect](../reference.md#common-ratio-effect), which Kahneman and Tversky (1979) documented as part of what they called the certainty effect: scale both winning probabilities in a pair down by the same factor and the preference flips. If $G=\alpha E+(1-\alpha)\delta_0$ and $H=\alpha F+(1-\alpha)\delta_0$, where $\delta_0$ is "nothing for sure", then

$$EU(G)-EU(H)=\alpha\,\big(EU(E)-EU(F)\big),$$

so the signs must match. *In words: mixing both options with the same chance of nothing shrinks the gap but cannot reverse it.* Problem 2 works a case.

**Three kinds of claim, kept apart.**

1. *Descriptive:* most subjects choose A and D. Robust since the 1950s.
2. *Formal:* that pattern violates P2 and independence. A theorem, settled above.
3. *Normative:* the pattern is a mistake. This is the open question.

**Savage's argument for 3**, reconstructed:

1. All four gambles can be settled by one ticket draw without changing any gamble's probabilities.
2. Within each pair, tickets 21 to 100 pay the same.
3. On tickets 1 to 20, pair 1 and pair 2 are identical.
4. (P2) A rational ranking of two acts depends only on the states where they differ.

∴ A rational agent prefers A to B iff she prefers C to D.

Savage reports in *The Foundations of Statistics* (1954) that he first chose A-and-D-style options himself, then, looking at the ticket table, reversed his preference in the second pair and judged that he had corrected an error. He kept the sure thing.

**Two reasons offered for the pattern.** [Regret](../reference.md#regret-and-disappointment) (Loomes and Sugden 1982; Bell 1982): you compare what you got with what the rejected act would have paid. Choosing B and drawing ticket 2, you *know* A would have paid 2,000. **Disappointment** (Bell 1985; Loomes and Sugden 1986): you compare what you got with what *your own* gamble led you to expect. A zero from B, which paid something 97% of the time, stings; a zero from D was the likely result. Each names a feeling that differs between the pairs.

**Where the argument is weakest.** Premise 4, at the point where it meets premise 3. "Identical on tickets 1 to 20" assumes a consequence is fixed by the money alone. If the zero on tickets 1 to 3 is really "nothing, against a 97% expectation" in B and "nothing, against a 17% hope" in D, then the columns are not identical and P2 is not violated at all: the disappointment theorist redescribes the outcomes. Allais held that his choices were reasonable, and this is one way to say why: certainty is a property of the *whole* act, which no single column records. The cost is on the other side: if outcomes may be redescribed by anything about the act, P2 forbids nothing. One standard reply is that redescription must be disciplined by which differences it is rational to care about, and that relocates the dispute rather than settling it. Each side gives something up: the Savage side gives up the authority of the considered pattern; the Allais side gives up P2, or keeps it at the price of outcomes individuated by the whole gamble.

## Picture

![A table of four gambles A, B, C and D over three ticket ranges, 1 to 3, 4 to 20 and 21 to 100. A pays 2,000, 2,000, 2,000. B pays 0, 6,000, 2,000. C pays 2,000, 2,000, 0. D pays 0, 6,000, 0. The first two columns are boxed as identical in both pairs; the last column is shaded as the same within each pair](assets/02-03-fig1.svg)

Savage's ticket table for the lesson's gambles. The shaded column is what P2 tells you to ignore; once it goes, pair 1 and pair 2 are the same choice. The same violation drawn in probability space is the fanning of indifference lines in the Marschak-Machina triangle of [`micro-refresher` 2.1](../../micro-refresher/lessons/02-01-expected-utility.md).

## Worked examples

**Example 1 (clean): reading the table.** Probabilities from ticket counts: B pays nothing on 3 tickets, 6,000 on 17 and 2,000 on 80, matching its description; C pays 2,000 on tickets 1 to 20 (20%); D pays 6,000 on tickets 4 to 20 (17%). Normalize $u_0=0$ and $u_2=1$, and let $u_6=v$. Then

$$EU(A)-EU(B)=0.20-0.17v=EU(C)-EU(D).$$

An expected-utility agent picks A and C if $v<20/17\approx1.18$, and B and D if $v>20/17$. The threshold is the same for both pairs, which is P2 doing its work: whatever her risk attitude (the curvature of $u$), the two choices move together.

**Example 2 (hard): regret and the shape of the draw.** Model a regret-averse agent who compares two acts state by state with $Q(d)=d+3d^3$, where $d$ is her utility minus the rejected act's utility on that state, and picks the act whose expected $Q$ is positive. Take $u_0=0$, $u_2=1$, $u_6=1.4$. (Expected utility alone would choose B and D: $1.038>1$ and $0.238>0.2$.)

*Pair 1.* A is sure, so the draw's shape is irrelevant:

$$\begin{aligned}
&0.03\,Q(1)+0.17\,Q(-0.4)\\
&\quad=0.03(4)+0.17(-0.592)=0.01936>0.
\end{aligned}$$

She takes A: the 3% chance of regretting a lost sure 2,000 is weighted heavily by the cubic term.

*Pair 2, independent draws.* C and D are separate lotteries. The joint chances are 0.034 (C wins, D wins), 0.166 (only C), 0.136 (only D) and 0.664 (neither):

$$\begin{aligned}
&0.166\,Q(1)+0.034\,Q(-0.4)+0.136\,Q(-1.4)\\
&\quad=0.664-0.020128-1.309952=-0.66608.
\end{aligned}$$

She takes D. That is the Allais pattern, from a coherent model of a real emotion.

*Pair 2, Savage's table.* Now C and D share the draw, and the regret sum is term for term the pair-1 sum, $+0.01936$: she takes C. On the table her choices line up, exactly as Savage said they should. Here the tool strains. Savage's table does not just display the Allais gambles; it changes them, by correlating C and D. The regret theorist says that is a different problem and she answers it consistently. The Savage side says a gamble's value should depend only on its own outcomes and their chances, not on how it is correlated with the act you turned down. Regret theory pays for its answer elsewhere: comparing acts pairwise in this way can produce intransitive choices, so it gives up transitivity rather than P2.

## Watch out

- **You might think** the sure-thing principle says "prefer the sure thing." It is about *common* consequences: whatever two acts share on an event, sure or not, drops out. The A-and-D chooser obeys "prefer certainty" and breaks P2.
- **You might think** concave utility can explain Allais, since it explains risk aversion. Example 1 shows why it cannot: any $u$, however curved, sets one threshold for both pairs. Risk attitudes that care about the whole shape of a gamble need the models of [2.4](02-04-risk-beyond-curvature.md).
- **You might think** Savage's self-correction proves the pattern is an error. It proves that one theorist, on reflection, endorsed P2 over his first answer. Many subjects shown the table keep their choices; whether their reflection or his is the authoritative one is the normative question, not evidence about it.

## One-liner

> Whatever two acts give you on the same tickets cannot decide between them: that is the sure-thing principle, the Allais pattern breaks it, and the dispute is whether "the same" outcome stays the same when it was a sure thing on one side and a long shot on the other.

## Problems

**P1 (🟢)** *(Formal (a) · Exegetical (b).)* Prizes are 0, 1,000 and 3,000 dollars. J pays 1,000 for sure. K pays 3,000 with chance 12%, 1,000 with chance 85%, nothing with chance 3%. L pays 1,000 with chance 15%, else nothing. M pays 3,000 with chance 12%, else nothing. A subject chooses J over K and M over L.

(a) Lay the four gambles out on one 100-ticket table with three ticket ranges, and show algebraically, without normalizing $u$, that no expected-utility function produces both choices.
(b) Which of Savage's postulates does the pattern violate, and which column of your table does that postulate say should not matter? One or two sentences.

**P2 (🟡)** *(Formal.)* E pays 1,500 dollars for sure; F pays 2,500 with chance 75%, else nothing. G pays 1,500 with chance 20%, else nothing; H pays 2,500 with chance 15%, else nothing. A subject chooses E over F and H over G.

(a) With $u(0)=0$, show that no expected-utility function produces both choices.
(b) Write G and H as mixtures $\alpha X+(1-\alpha)\delta_0$ of E and F with "nothing for sure", find $\alpha$, and say which axiom the pattern violates and how.

**P3 (🔴, optional)** *(Formal (a) · Evaluative (b).)* A regret agent compares acts $X,Y$ by $R(X,Y)=\sum_s p_s\,\psi(x_s,y_s)$, summing over states $s$ with probabilities $p_s$, where $\psi(x,y)$ is how she feels getting $x$ when the rejected act paid $y$, and $\psi(x,x)=0$. She picks $X$ when $R(X,Y)>0$.

(a) On your P1 ticket table, show that $R(J,K)=R(L,M)$, so on that table she cannot choose both J and M.
(b) Steelman a regret-based defence of choosing J and M when the four gambles are separate, independently drawn lotteries, and give Savage's best reply. 150 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) · Exegetical (b))*

(a) Ticket ranges 1–3, 4–15, 16–100:

| | 1–3 | 4–15 | 16–100 |
|---|---|---|---|
| J | 1,000 | 1,000 | 1,000 |
| K | 0 | 3,000 | 1,000 |
| L | 1,000 | 1,000 | 0 |
| M | 0 | 3,000 | 0 |

Check: K gives 0 on 3 tickets, 3,000 on 12, 1,000 on 85; L gives 1,000 on 15; M gives 3,000 on 12. With $u_0,u_1,u_3$ the utilities of 0, 1,000 and 3,000:

$$\begin{aligned}
EU(J)-EU(K) &= 0.15\,u_1-0.12\,u_3-0.03\,u_0,\\
EU(L)-EU(M) &= 0.15\,u_1-0.12\,u_3-0.03\,u_0.
\end{aligned}$$

J over K needs this number positive; M over L needs it negative. No $u$ does both.

**Must hit, strict (a):** a table whose ranges reproduce all four distributions; the two differences shown equal (the 16–100 column cancels); the contradiction stated.

**Must hit, strict (b):** P2, the sure-thing principle (independence in the vNM framing); the 16–100 column, which is the same within each pair.

**Wrong turns:** a table where K and M do not share the 1–3 and 4–15 columns, which hides the identity. Naming the ordering postulate or P4: the pattern is transitive and involves no probability judgement.

---

**P2** *(Formal)*

(a) E over F: $u(1500)>0.75\,u(2500)$. H over G: $0.15\,u(2500)>0.20\,u(1500)$; divide by 0.20 to get $0.75\,u(2500)>u(1500)$. The two inequalities contradict each other.

(b) $\alpha=0.2$: $G=0.2E+0.8\delta_0$ (1,500 with chance 0.2), and $H=0.2F+0.8\delta_0$ (2,500 with chance $0.2\times0.75=0.15$, nothing with chance $0.2\times0.25+0.8=0.85$). Independence says mixing E and F with the same $\delta_0$ in the same proportion cannot reverse their ranking; the subject's ranking reverses. Equivalently, with any $u(0)$, $EU(G)-EU(H)=0.2\,\big(EU(E)-EU(F)\big)$, so the signs must agree.

**Must hit, strict:** both inequalities and the contradiction; $\alpha=0.2$ with the mixture checked against H's probabilities; independence named, with the reversal under a common mixture as the violation.

**Wrong turns:** calling it a common-consequence violation: no column is shared; both probabilities are scaled by the same ratio. Arguing from expected money (F and H have the higher expected value in each pair, 1,875 and 375): that is not the contradiction, since an expected-utility agent may rationally prefer E.

---

**P3** *(Formal (a) · Evaluative (b))*

(a) Using the P1 table:

$$\begin{aligned}
R(J,K) &= 0.03\,\psi(1000,0)+0.12\,\psi(1000,3000)+0.85\,\psi(1000,1000),\\
R(L,M) &= 0.03\,\psi(1000,0)+0.12\,\psi(1000,3000)+0.85\,\psi(0,0).
\end{aligned}$$

The last terms are both zero, so $R(J,K)=R(L,M)$. If it is positive she picks J and L; if negative, K and M. J with M is impossible.

**Must hit, strict (a):** the state-by-state sums written out; $\psi(x,x)=0$ used to kill the common column; the conclusion that choices match across pairs.

**Must hit, any verdict (b):**

- The defence stated precisely: with separate draws, rejecting the sure J guarantees that a zero from K comes with knowing J would have paid, while a zero from M usually comes alongside a zero from L, so the expected regret differs between the pairs.
- Savage's reply stated precisely: the value of a gamble should depend only on its own outcomes and their chances, so a correlation with the rejected act is irrelevant; or regret is a feeling that rationality should discount.
- The axiom each side gives up: the regret theorist gives up the independence of an act's value from the rejected act (and, in general, transitivity); Savage's side gives up regret as a legitimate component of the outcome.

**Wrong turns:** claiming the ticket table "refutes" regret: (a) shows only that regret makes no difference when the draw is shared. Treating the defence as descriptive ("people do feel regret") when the question is normative.

**Model answer (b), one of several:** Regret is not noise; it is part of what happens to me. If I reject a sure 1,000 for K and draw a losing ticket, I end with nothing *and* the certain knowledge that I threw away 1,000. If I reject L for M in separate draws and lose, L most likely lost too. The consequences of the two zeros differ, so choosing J and M is consistent with caring about what actually happens. Savage's reply: a gamble's worth is fixed by what it pays and how likely, and the pairing with a rejected gamble is an accident of presentation. An agent whose ranking of K changes with how it is correlated with something she did not choose can be led into intransitive choices. The defence holds if feelings about forgone options are legitimate outcomes; it fails if rational value is a property of each act alone.

</details>

## Flashback

**From Lesson [2.1](02-01-savages-framework.md) (Savage's framework):** *(Formal (a)–(b) · Exegetical (c).)* A fund manager faces three states, Slump, Flat and Boom, with probabilities $\tfrac14, \tfrac14, \tfrac12$. Payoffs are in utility units. She ranks acts by mean minus a variance penalty, $V(f) = \mu_f - \tfrac{1}{20}\sigma_f^2$, where $\mu_f$ and $\sigma_f^2$ are the mean and variance of $f$'s payoff. Act $f$ pays $(40, 0, c)$ and act $g$ pays $(10, 10, c)$ on (Slump, Flat, Boom), so they agree on Boom.

(a) Compute $V(f)$ and $V(g)$ for $c = 0$ and for $c = 40$. Which act does she choose in each case?
(b) Find the Boom payoff $c$ at which she is indifferent. How would an expected-utility maximizer, with these probabilities and payoffs as utilities, rank $f$ against $g$ as $c$ varies?
(c) Which Savage postulate does her rule violate, and on which event? An objector says: "Mean-variance is just expected utility with a quadratic utility, so it cannot violate any Savage postulate." What is wrong with that? Two sentences.

<details>
<summary>Solution</summary>

(a) At $c = 0$:

$$\begin{aligned} \mu_f &= \tfrac14(40) = 10,\\ \sigma_f^2 &= \tfrac14(30)^2 + \tfrac14(10)^2 + \tfrac12(10)^2 = 300,\\ V(f) &= 10 - 15 = -5;\\ \mu_g &= \tfrac14(10) + \tfrac14(10) = 5,\\ \sigma_g^2 &= \tfrac14(5)^2 + \tfrac14(5)^2 + \tfrac12(5)^2 = 25,\\ V(g) &= 5 - 1.25 = 3.75. \end{aligned}$$

She chooses $g$. At $c = 40$:

$$\begin{aligned} \mu_f &= 30,\\ \sigma_f^2 &= \tfrac14(10)^2 + \tfrac14(30)^2 + \tfrac12(10)^2 = 300,\\ V(f) &= 30 - 15 = 15;\\ \mu_g &= 25,\\ \sigma_g^2 &= \tfrac14(15)^2 + \tfrac14(15)^2 + \tfrac12(15)^2 = 225,\\ V(g) &= 25 - 11.25 = 13.75. \end{aligned}$$

She chooses $f$.

(b) In general $\mu_f = 10 + c/2$ and $\mu_g = 5 + c/2$, and

$$\begin{aligned} \sigma_f^2 &= \tfrac{c^2}{4} - 10c + 300,\\ \sigma_g^2 &= \tfrac{c^2}{4} - 5c + 25,\\ V(f) - V(g) &= 5 - \tfrac{1}{20}(275 - 5c) = \tfrac{c}{4} - \tfrac{35}{4}. \end{aligned}$$

She is indifferent at $c = 35$, takes $g$ below it and $f$ above it. For the expected-utility maximizer, $EU(f) - EU(g) = \tfrac14(40 - 10) + \tfrac14(0 - 10) = 5$ for every $c$: the Boom term cancels, and she takes $f$ whatever the shared payoff.

**Must hit, strict (c):**

- **P2, the sure-thing principle**, on the event $E$ = {Slump, Flat}: $f$ and $g$ are $f_E h$ and $g_E h$ with $h$ paying $c$ on Boom, and changing the shared Boom payoff from 0 to 40 reverses her ranking.
- Expected utility with $u(x) = x - kx^2$ is $\mu - k\,\mathbb{E}[x^2]$, linear in the probabilities, so it obeys P2; mean-variance is $\mu - k\,\mathbb{E}[x^2] + k\mu^2$, and the squared mean is not an expectation, so the shared Boom payoff shifts each act's mean differently and does not cancel.

**Wrong turns:** weighting the three states equally when computing variances. Naming P3 or P4: no consequence's ranking changes across states, and no bet on events is involved. Reading (b) as showing the manager is irrational: the computation shows only that her rule breaks P2; whether that is a defect is this lesson's question.

</details>

## Connections

- **Backward:** [2.1](02-01-savages-framework.md) stated P2 as one postulate among seven; here it is the one under fire. The algebra for Allais's own gambles and the probability triangle are [`micro-refresher` 2.1](../../micro-refresher/lessons/02-01-expected-utility.md)'s; [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md) states independence. Whether any axiom is a norm at all is [1.4](01-04-what-a-representation-theorem-shows.md)'s question, and this lesson is its hardest test.
- **Forward:** [2.4](02-04-risk-beyond-curvature.md) builds the models that rationalize the pattern (rank-dependent and risk-weighted expected utility) and owns prospect theory as description. [3.1](03-01-the-ellsberg-paradox.md) breaks P2 again, this time with unknown probabilities instead of known ones.
- **Sideways:** [`philosophy-of-economics` 2.2](../../philosophy-of-economics/lessons/02-02-the-behavioural-challenge.md) asks the same "mistake or misspecified model?" question of framing and preference reversals. Finding which premise a dispute turns on is [`philosophical-method` 4.3](../../philosophical-method/lessons/04-03-finding-the-crux.md)'s method; here the crux is how finely outcomes are individuated.

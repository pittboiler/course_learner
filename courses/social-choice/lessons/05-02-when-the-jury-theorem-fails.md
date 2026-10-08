# Social Choice · Lesson 5.2: When the jury theorem fails

> ⏱ ~15 min · Module 5: Truth-tracking · Builds on: [5.1 The Condorcet jury theorem](05-01-the-condorcet-jury-theorem.md), [`game-theory-refresher` 3.1](../../game-theory-refresher/lessons/03-01-bayesian-games.md) · Unlocks: [5.3 Epistemic readings of aggregation](05-03-epistemic-readings-of-aggregation.md)

## Why this matters

[5.1](05-01-the-condorcet-jury-theorem.md) proved that a large majority of independent voters, each right with probability $p > 1/2$, is almost surely right. The epistemic argument for democracy ([`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md)) borrows that conclusion and inherits every hypothesis. This lesson breaks them one at a time and computes the damage: competence below a half, unequal competence, shared causes of error, and voters who reason about when their vote counts.

## The idea

Majorities are accurate for the reason an average of noisy measurements is: errors point different ways and cancel. That needs independent errors, and voters who each lean toward the truth, however slightly.

A newsroom of 500 reporters who all rewrite the same wire story is one source, not 500: if the story is wrong one day in five, so is the newsroom, however large. That is correlation, a common cause upstream of every vote.

Strategic failure is subtler. Under unanimity, your vote changes the verdict only when every other juror voted to convict. A juror who reasons "if my vote matters at all, eleven people saw evidence of guilt" may rationally convict despite her own doubt. Nobody lies; each conditions on the one event where her vote counts.

## The results

**Setup.** A yes-or-no question has a correct answer (H1). Voter $i$ is right with probability $p_i$, her [competence](../reference.md#competence). [5.1](05-01-the-condorcet-jury-theorem.md) assumed (H2) a common $p > 1/2$, (H3) votes independent given the truth, and (H4) everyone votes her own private evidence. $P_n$ is the probability that a majority of $n$ voters ($n$ odd) is right. $X_i = 1$ if voter $i$ is right and 0 otherwise, and $S = \sum_i X_i$.

**Proposition 1 (competence below a half).** For odd $n$, $P_n(1-p) = 1 - P_n(p)$. So if $p < 1/2$, $P_n \to 0$.

*In words:* the theorem runs in reverse; a large electorate of slightly misled voters is almost surely wrong.

*Proof.* Relabel each vote's "right" as "wrong". The event "more than half right at competence $1-p$" becomes "more than half wrong at competence $p$", the complement of "more than half right", since odd $n$ allows no tie. The limit is 5.1's theorem applied to $1-p > 1/2$. ∎

**Proposition 2 (unequal competence).** Let $X_1, \dots, X_n$ be independent with means $p_1, \dots, p_n$ and average $\bar p_n = \frac1n \sum_i p_i$. If $\bar p_n \ge \frac12 + \delta$ for a fixed $\delta > 0$, then $P_n \ge 1 - \frac{1}{4n\delta^2}$, so $P_n \to 1$.

*In words:* independent voters need not be equally good; their average must stay a fixed margin above a half.

*Proof.*

1. $E[S] = n\bar p_n$, and by independence $\operatorname{Var}(S) = \sum_i p_i(1-p_i) \le n/4$, since $p(1-p) \le 1/4$.
2. If the majority fails, $S \le n/2$, so $E[S] - S \ge n\bar p_n - n/2 \ge n\delta$.
3. By Chebyshev's inequality ([`prob-stat-refresher` 3.2](../../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md)), that has probability at most $\frac{n/4}{n^2\delta^2} = \frac{1}{4n\delta^2}$. ∎

The margin cannot be dropped (Jacob Paroush, 1998, "Stay Away from Fair Coins"). One infallible voter among $n-1$ coin-flippers has $\bar p_n = \frac12 + \frac{1}{2n}$, above a half for every $n$, yet the majority is right with probability $\frac34$ at $n = 3$, $0.623$ at $n = 11$ and $0.540$ at $n = 101$, sliding toward $\frac12$. For small $n$ an average above a half guarantees nothing: competences $(0.95, 0.3, 0.3)$ average $0.517$, but the majority is right with probability $0.489$. The best response to known unequal competence is weighting, 5.1's [Nitzan–Paroush weights](../reference.md#nitzan-paroush-weights).

**Theorem 3 (common causes; Franz Dietrich and Kai Spiekermann, 2013).** A random circumstance $C$ (the shared evidence, a briefing everyone read, how hard the case is) takes finitely many values $c$ with probabilities $\pi_c$. Given the truth and $C = c$, votes are independent with common competence $p_c$. Then for odd $n$,

$$\lim_{n \to \infty} P_n = \Pr\big(p_C > \tfrac12\big) + \tfrac12 \Pr\big(p_C = \tfrac12\big).$$

*In words:* a big majority is right exactly when the circumstance leans toward the truth, so accuracy tends to the chance of that, not to 1.

*Proof.*

1. By total probability, $P_n = \sum_c \pi_c P_n(p_c)$, where $P_n(p_c)$ is 5.1's independent-voter accuracy.
2. For each $c$: $P_n(p_c) \to 1$ if $p_c > \frac12$ (5.1); $P_n(p_c) \to 0$ if $p_c < \frac12$ (Proposition 1); and $P_n(\frac12) = \frac12$ for every odd $n$ (Proposition 1 with $p = 1 - p$).
3. A finite sum of convergent sequences converges to the sum of the limits. ∎

The circumstance makes votes [correlated](../reference.md#correlated-voters) even given the truth: two voters' correctness has covariance $\operatorname{Var}(p_C)$. Krishna Ladha (1992) first reworked the jury theorem for pairwise-correlated votes. Theorem 3 shows the limit turns on whether the circumstance can push competence below a half, not on the size of the correlation (Example 1).

**Proposition 4 (sincere voting under unanimity).** The defendant is guilty ($G$) or innocent ($I$), with prior $\pi = \Pr(G)$. Each of $n$ jurors gets a private signal $g$ or $i$, correct with probability $p \in (\frac12, 1)$, independently given the state. Each juror wants to convict iff her probability of guilt exceeds $q$, her threshold of reasonable doubt. Conviction needs all $n$ votes. Write odds as $o(x) = x/(1-x)$. Sincere voting (convict iff $g$) is a Bayes–Nash equilibrium ([`game-theory-refresher` 3.1](../../game-theory-refresher/lessons/03-01-bayesian-games.md)) iff

$$o(\pi)\Big(\frac{p}{1-p}\Big)^{n-2} \le o(q) \le o(\pi)\Big(\frac{p}{1-p}\Big)^{n}.$$

The left side grows without bound in $n$, so sincere voting fails for every large enough jury.

*In words:* under unanimity your vote counts only when everyone else voted guilty, and that is strong evidence of guilt.

*Proof.*

1. If another juror acquits, the verdict is acquittal whatever you do. Your vote matters only on the **pivotal** event: all $n-1$ others vote convict. So a best response maximizes expected payoff conditional on that event ([strategic voting and pivotality](../reference.md#strategic-voting-and-pivotality)).
2. If the others vote sincerely, the pivotal event means all of them saw $g$. It has probability $p^{n-1}$ given $G$ and $(1-p)^{n-1}$ given $I$.
3. Bayes' rule in odds form ([`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md)): with your own $i$, posterior odds are $o(\pi) \cdot \frac{1-p}{p} \cdot \big(\frac{p}{1-p}\big)^{n-1} = o(\pi)\big(\frac{p}{1-p}\big)^{n-2}$. With $g$ the factor is $\big(\frac{p}{1-p}\big)^{n}$.
4. Sincere voting is a best response iff the $i$-juror weakly prefers to acquit (odds $\le o(q)$) and the $g$-juror weakly prefers to convict (odds $\ge o(q)$). ∎

David Austen-Smith and Jeffrey Banks (1996) showed that sincere voting need not be an equilibrium even under majority rule (Watch out). Timothy Feddersen and Wolfgang Pesendorfer (1998) worked out what replaces it on [unanimity juries](../reference.md#unanimity-juries): jurors with an innocent signal convict with some probability $\sigma$, and wrongful convictions stop shrinking (Example 2).

**Where the argument is weakest.** In the hypotheses that replace H3 and H4. Theorem 3's damage is $\Pr(p_C < \frac12)$, and nobody has measured that for an electorate. Defenders say open debate keeps misleading circumstances rare; critics, that shared media make them common. Proposition 4 assumes fully strategic Bayesian jurors with a common prior who vote without talking. Peter Coughlan (2000) argues that once mistrials and pre-vote communication are modeled, sincere voting under unanimity can return. Without that model, Proposition 4 is a conjecture about behavior, not a theorem about juries.

## Picture

![Chance the majority is right against the number of voters, odd n from 1 to 1001 on a log scale. A blue curve for independent voters with competence 0.595 rises from 0.595 to essentially 1 by n equal to 101. A red curve for the common-cause model with the same average competence rises much more slowly and levels off at a dashed line at 0.8. A dashed green curve for a common-cause model whose competence is 0.6 or 0.9 starts at 0.75 and also reaches 1.](assets/05-02-fig1.svg)

Same average competence, different fates. Red: Example 1's cases, capped at the 0.8 chance a case is not misleading. Green: correlated but never misleading, so it still reaches 1.

## Worked examples

**Example 1 (clean): three kinds of case.** A panel hears three kinds of case. Clear cases (half of them): each member is right with $p_C = 0.7$. Murky (30 percent): $p_C = 0.55$. Misleading (20 percent), where the evidence points the wrong way: $p_C = 0.4$. Average competence is $0.5(0.7) + 0.3(0.55) + 0.2(0.4) = 0.595$.

- $n = 11$: $P_{11} = 0.5(0.9218) + 0.3(0.6331) + 0.2(0.2465) = 0.700$. Independent voters at $p = 0.595$ give $0.742$.
- $n = 101$: $0.757$, against $0.973$.
- Limit, by Theorem 3: $\Pr(p_C > \frac12) = 0.5 + 0.3 = 0.8$. Independent voters go to 1; at $n = 1001$ they miss with probability below $10^{-9}$.

The pairwise correlation between two members' correctness is $\operatorname{Var}(p_C)/\big(\bar p(1 - \bar p)\big) = 61/1071 \approx 0.057$: small, yet it caps accuracy at 0.8. Now let the circumstance give $p_C = 0.6$ or $0.9$, equally likely. The correlation is $3/25 = 0.12$, twice as large, but $p_C > \frac12$ always, so the limit is 1 (the green curve).

**Example 2 (the hypothesis bites): a unanimity jury.** Prior $\pi = \frac12$, signal accuracy $p = \frac34$, threshold $q = \frac45$. So $o(\pi) = 1$, $\frac{p}{1-p} = 3$ and $o(q) = 4$.

- Alone, a juror with signal $i$ puts guilt at $\frac14$.
- $n = 3$: pivotal odds are $3^1 = 3 \le 4$ with $i$ and $3^3 = 27 \ge 4$ with $g$. Sincere voting is an equilibrium, though the $i$-juror's pivotal posterior is already $\frac34$. An innocent defendant is convicted with probability $(\frac14)^3 = \frac{1}{64} \approx 0.0156$.
- $n = 4$: odds $3^2 = 9 > 4$, posterior $\frac{9}{10} > \frac45$. An $i$-juror who believes the others vote sincerely should convict, so sincere voting fails for every $n \ge 4$.

In the symmetric equilibrium Feddersen and Pesendorfer study, $g$-jurors convict and $i$-jurors convict with probability $\sigma$ that leaves them indifferent at the pivot. A juror votes convict with probability $\gamma_G = p + (1-p)\sigma$ if the defendant is guilty and $\gamma_I = (1-p) + p\sigma$ if innocent, and $\sigma$ solves

$$o(\pi) \cdot \frac{1-p}{p} \cdot \Big(\frac{\gamma_G}{\gamma_I}\Big)^{n-1} = o(q).$$

| Jury size $n$ | $\sigma$ | Convicts the innocent, $\gamma_I^n$ | Acquits the guilty, $1 - \gamma_G^n$ | Convicts the innocent if all were sincere |
|---|---|---|---|---|
| 3 | 0 (sincere) | 0.0156 | 0.578 | 0.0156 |
| 4 | 0.121 | 0.0135 | 0.629 | 0.0039 |
| 6 | 0.345 | 0.0173 | 0.658 | 0.00024 |
| 12 | 0.633 | 0.0209 | 0.685 | $6 \times 10^{-8}$ |
| 100 | 0.951 | 0.0237 | 0.708 | $6 \times 10^{-61}$ |

After a dip at $n = 4$, where mixing starts, wrongful conviction rises with every added juror. In the limit $\sigma \to 1$. Put $t = 1 - \sigma$; then $\gamma_G/\gamma_I \approx 1 + (2p-1)t$, so the indifference condition forces $(n-1)(2p-1)t \to \ln K$ with $K = o(q)\,\frac{p}{1-p}\big/o(\pi) = 12$. Hence

$$\gamma_I^n \approx e^{-npt} \to K^{-p/(2p-1)} = 12^{-3/2} \approx 0.0241,$$

and the guilty go free with probability tending to $1 - 12^{-1/2} \approx 0.711$. Strategic jurors are not simply worse: sincere unanimity at $n = 12$ would free the guilty 96.8 percent of the time. Feddersen and Pesendorfer's comparison is across rules: majority and many non-unanimous rules keep both errors far lower in large juries.

## Watch out

- **You might think any correlation caps the theorem, but actually** Theorem 3's limit is 1 whenever the circumstance never pushes competence below a half (Example 1's 0.6-or-0.9 case). What breaks the theorem is a positive chance of a misleading circumstance, which H3 silently ruled out.
- **You might think strategic voting is a quirk of unanimity, but actually** Austen-Smith and Banks found it under majority rule. Three jurors, prior $\frac12$, threshold $\frac12$, asymmetric signals: $\Pr(g \mid G) = \frac{9}{10}$, $\Pr(i \mid I) = \frac35$. Alone, signal $g$ gives guilt $\frac{9}{13}$ and $i$ gives $\frac17$, so a lone juror votes her signal. Under majority rule she is pivotal when the others split one–one, which has likelihood ratio $\frac{(9/10)(1/10)}{(2/5)(3/5)} = \frac38$. A $g$-juror's pivotal odds are $\frac{9/10}{2/5} \cdot \frac38 = \frac{27}{32} < 1$, so she should acquit. With 5.1's symmetric signals a split cancels exactly, which is why 5.1 never saw this.
- **You might think strategic jurors are dishonest, but actually** each is a truth-seeker conditioning on the event in which her vote matters. H4 says "vote your signal", not "be honest".

## One-liner

> Majorities track truth only when errors cancel: a shared misleading cause caps accuracy at the chance it is absent, and voters who condition on being pivotal stop voting their evidence.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** A five-member board votes by majority. With probability $\rho = \frac14$ a consultant's report reaches every member and each votes as it says; the report is right with probability $r = \frac35$. Otherwise members vote independently, each right with probability $0.65$.

(a) Find one member's probability of being right, and the board's.
(b) The consultant claims a large enough board will be right 95 percent of the time. Find the limit of the board's accuracy as it grows, and the largest $\rho$ (with $r$ and $0.65$ fixed) for which the claim could hold.

**P2 (🟡) *(Formal (a)–(c).)*** A tribunal convicts only unanimously. The prior probability of guilt is $\frac13$; each member's private signal is correct with probability $\frac45$, independently given the truth; a member wants to convict iff her probability of guilt exceeds $\frac34$. Exact fractions.

(a) For a member with an innocent signal on a three-member tribunal, find her posterior alone, and conditional on being pivotal when the other two vote their signals.
(b) Is sincere voting a Bayes–Nash equilibrium with three members? Check both signals.
(c) Find the smallest tribunal size at which sincere voting fails, and the pivotal posterior there.

**P3 (🟡) *(Formal (a) · Exegetical (b).)*** An invented court-reform memo: "Under unanimity an innocent defendant is convicted only if every juror errs. Jurors are right four times in five, so a twelve-person jury convicts the innocent with probability $(1/5)^{12}$, about 4 in a billion, and every juror we add makes wrongful conviction rarer."

(a) Check the memo's arithmetic on its own assumption. Then, with prior $\frac12$ and threshold $q = \frac{9}{10}$, find the pivotal posterior of a juror with an innocent signal on a twelve-person jury whose other members vote their signals. Is sincere voting an equilibrium?
(b) In 100 words or fewer: name the assumption the memo needs, say what Feddersen and Pesendorfer's equilibrium implies for its two claims, and say what would have to be true of real juries for the memo to stand.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) One member: $\rho r + (1-\rho)(0.65) = 0.15 + 0.4875 = 0.6375$.

Board: with probability $\frac14$ all five follow the report, so the board is right with probability $\frac35$. Otherwise it is 5.1's $P_5(0.65)$:

$$P_5(0.65) = 0.3364 + 0.3124 + 0.1160 = 0.7648,$$

(the terms for 3, 4 and 5 correct votes). Board accuracy $= 0.15 + 0.75(0.7648) = 0.7236$.

(b) This is Theorem 3 with three circumstances: report right (all vote right, competence 1, probability 0.15), report wrong (competence 0, probability 0.1), no report (competence 0.65, probability 0.75). The limit is $0.15 + 0.75 = 0.9$, so 95 percent is out of reach at any size. In general the limit is $1 - \rho(1 - r)$; it reaches 0.95 iff $\rho(0.4) \le 0.05$, i.e. $\rho \le \frac18$.

**Wrong turns:** applying 5.1 to the average competence 0.6375 and concluding the board tends to 1. Forgetting that the report-right case contributes 0.15 at every size, which gives a limit of 0.75.

---

**P2** *(Formal (a)–(c).)* Here $o(\pi) = \frac12$, $\frac{p}{1-p} = 4$, $o(q) = 3$.

(a) Alone: odds $\frac12 \cdot \frac14 = \frac18$, posterior $\frac19$. Pivotal ($n = 3$): odds $\frac12 \cdot 4^{1} = 2$, posterior $\frac23$.

(b) Yes. The $i$-member: $\frac23 \le \frac34$, so acquitting is a best response. The $g$-member: odds $\frac12 \cdot 4^3 = 32$, posterior $\frac{32}{33} \ge \frac34$, so convicting is. Both signals vote sincerely.

(c) $n = 4$: $i$-odds $\frac12 \cdot 4^2 = 8$, posterior $\frac89 > \frac34$, so the $i$-member should convict and sincere voting fails. It holds at $n = 2$ ($\frac13$ and $\frac89$) and $n = 3$, so 4 is the smallest size.

**Wrong turns:** treating the pivotal event as uninformative and answering $\frac19$ in (a). Using exponent $n - 1$ instead of $n - 2$: your own $i$ signal cancels one of the others' $g$ signals.

---

**P3** *(Formal (a) · Exegetical (b), strict.)*

(a) $(\frac15)^{12} = \frac{1}{244{,}140{,}625} \approx 4.1 \times 10^{-9}$: correct if every juror votes her signal. Pivotal odds with $i$ at $n = 12$: $1 \cdot 4^{10} = 1{,}048{,}576$, posterior $\approx 0.999999 > 0.9$. She should convict, so sincere voting is not an equilibrium (with these numbers it already fails at $n = 4$).

**Must hit, strict (b):**

- The memo needs H4, sincere voting: each vote reports the juror's own signal regardless of pivotality.
- Under unanimity that is not an equilibrium for these numbers. In Feddersen and Pesendorfer's equilibrium wrongful conviction is not a product of independent errors; it stays bounded away from zero (here about 0.0069 at $n = 12$, roughly 1.7 million times the memo's figure) and rises with each added juror from $n = 4$ on (toward about 0.0084), so both claims fail.
- For the memo to stand, real jurors would have to vote their own reading of the evidence without conditioning on being pivotal, or the procedure would have to change (Coughlan's mistrials and communication).

**Wrong turns:** attacking the arithmetic, which is right on its assumption. Naming independence (H3): the signals here are independent given the truth; what fails is the step from signals to votes.

**Model answer (b):** The memo assumes jurors vote their own signals. Under unanimity a juror's vote matters only when the other eleven voted guilty, which makes guilt nearly certain, so an innocent-signal juror should convict. In Feddersen and Pesendorfer's equilibrium wrongful conviction is about 0.007 at twelve jurors, not 4 in a billion, and it grows, not shrinks, as jurors are added. The memo stands only if jurors ignore pivotal reasoning or the rule adds mistrials or deliberation.

</details>

## Flashback

**From Lesson [4.4](04-04-the-list-pettit-impossibility.md) (The List–Pettit impossibility):** *(Formal (a)–(b).)* A six-member panel judges the agenda $\{p, \neg p, q, \neg q, p\wedge q, \neg(p\wedge q)\}$, each member holding a complete consistent set. Rule $T_t$ accepts a proposition iff at least $t$ members accept it.

(a) Give a profile on which $T_4$, a two-thirds rule, returns an inconsistent set, and name the inconsistent propositions.
(b) Prove that $T_5$ never returns an inconsistent set. $T_5$ satisfies universal domain, anonymity and systematicity, so the List–Pettit theorem says it must fail collective rationality: exhibit a profile showing how.

<details>
<summary>Solution</summary>

(a) Two members $pq$, two $p\bar q$, two $\bar p q$. Supporters: $p$ has 4, $q$ has 4, and $\neg(p\wedge q)$ has $2 + 2 = 4$ (the $p\bar q$ and $\bar p q$ members); $\neg p$, $\neg q$ and $p \wedge q$ have 2 each. $T_4$ returns $\{p, q, \neg(p\wedge q)\}$: inconsistent.

(b) Every minimal inconsistent subset of this agenda has at most three members: $\{\varphi, \neg\varphi\}$, $\{\neg p, p\wedge q\}$, $\{\neg q, p\wedge q\}$ and $\{p, q, \neg(p\wedge q)\}$. If $T_5$ returned an inconsistent set, it would accept one of these. Each accepted proposition is rejected by at most $6 - 5 = 1$ member, so at most 3 members reject any of them, and some member accepts all of them. That member's own set would be inconsistent: contradiction. (By script: $T_5$ is consistent on all $4^6 = 4096$ profiles; $T_4$ is inconsistent on 90.)

So $T_5$ must fail completeness. Three $pq$ and three $\bar p\bar q$: every proposition has exactly 3 supporters, $T_5$ accepts nothing, and the output contains neither $p$ nor $\neg p$.

**Wrong turns:** reading 4.4's "more than $2n/3$" as "at least two-thirds": at $n = 6$ two-thirds is 4, exactly (a)'s failure, and the safe threshold is 5. Checking only pairs $\{\varphi, \neg\varphi\}$: the three-member set $\{p, q, \neg(p\wedge q)\}$ is what pushes the bound to $2n/3$. Saying $T_5$ violates systematicity: it applies one count test to every proposition, so it keeps anonymity and systematicity, which leaves completeness as the only casualty.

</details>

## Connections

- **Backward:** [5.1](05-01-the-condorcet-jury-theorem.md) proved the theorem under H1–H4; this lesson is its failure table. [4.4](04-04-the-list-pettit-impossibility.md)'s premise-based procedure gave up systematicity; [5.3](05-03-epistemic-readings-of-aggregation.md) asks whether it buys accuracy. Bayes' rule in odds form is [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md); equilibrium with private signals is [`game-theory-refresher` 3.1](../../game-theory-refresher/lessons/03-01-bayesian-games.md).
- **Forward:** [5.3](05-03-epistemic-readings-of-aggregation.md) takes the argument form apart: which of H1–H4 an [epistemic democrat](../reference.md#epistemic-democracy) needs, and Hong and Page's claim that diversity beats ability.
- **Sideways:** [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md) uses the [Condorcet jury theorem](../reference.md#condorcet-jury-theorem) as a premise; its shared-error example is Theorem 3 with two circumstances. Pivotality is the same idea as the Clarke pivot in [`grad-game-theory` 5.3](../../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md): your input matters only where it changes the outcome. [3.1](03-01-manipulation-and-strategy-proofness.md)'s manipulation misreports *preferences*; strategic jurors misreport *information* while sharing a goal. A common cause is the common factor of finance: diversification removes independent risk, never the shared one. Independence of sources is also the hinge of [`epistemology` 4.5](../../epistemology/lessons/04-05-peer-disagreement.md)'s swamping by many agreeing peers.

# Social Choice · Lesson 5.1: The Condorcet jury theorem

> ⏱ ~15 min · Module 5: Truth-tracking · Builds on: [1.2 May's theorem](01-02-mays-theorem.md), [4.3 The doctrinal paradox and the discursive dilemma](04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md) · Unlocks: [5.2 When the jury theorem fails](05-02-when-the-jury-theorem-fails.md), [5.3 Epistemic readings of aggregation](05-03-epistemic-readings-of-aggregation.md)

## Why this matters

Modules 1–4 treated votes as preferences: there was nothing to get right, only something to aggregate fairly. Now suppose there *is* a fact (the defendant is guilty, the bridge is sound) and each vote is a noisy reading of it. Condorcet's *Essai sur l'application de l'analyse à la probabilité des décisions rendues à la pluralité des voix* (1785) proved that a majority of independent, better-than-chance voters is more reliable than any one of them, and almost infallible when large. [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md) uses this as a premise in the epistemic case for democracy and promises the proof here. This lesson gives the proof, then asks what the most accurate rule is when voters are *not* equally competent.

## The idea

One witness who is right 65% of the time is a coin with a bias. Three such witnesses voting by majority are wrong only when at least two err, which is rarer than one erring: 71.8% accuracy. The errors are independent, so they rarely line up. Add voters and the fraction voting correctly concentrates around 65%, comfortably above the half it needs.

The proof is short because only one kind of event matters. Adding two voters can change the majority's verdict only if the old majority was a *one-vote* majority. A one-vote right majority is lost if both newcomers err; a one-vote wrong majority is reversed if both are right. The second is likelier when $p > 1/2$.

Then drop equal competence. One expert and two amateurs: should the amateurs ever outvote her? The answer is a weighted vote, and the right weight is not competence itself but its log-odds.

## The theorem

**Setting.** A binary question with exactly one correct answer. $n$ voters, $n$ odd, each votes sincerely for one option. Voter $i$'s **[competence](../reference.md#competence)** is the probability $p$ that she votes correctly (write $q = 1-p$). Let $X_i = 1$ if voter $i$ is correct and $0$ otherwise, and $S_n = X_1 + \dots + X_n$. The majority is right iff $S_n \ge m+1$ where $n = 2m+1$, so its **accuracy** is

$$P_n = \sum_{k=m+1}^{n} \binom{n}{k} p^k q^{n-k}.$$

*In words:* add up the binomial chances ([`prob-stat-refresher` 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)) of every count of correct voters that is a majority.

**Theorem ([Condorcet jury theorem](../reference.md#condorcet-jury-theorem)).** Suppose the events $\{X_i = 1\}$ are mutually independent and each has probability $p$. If $p > 1/2$, then (i) $P_{n+2} > P_n$ for every odd $n$, and (ii) $P_n \to 1$ as $n \to \infty$. If $p < 1/2$, both reverse: $P_n$ strictly falls and tends to $0$. If $p = 1/2$, $P_n = 1/2$ for all $n$.

*In words:* homogeneous, independent, better-than-chance voters make a strictly more reliable majority with every two you add, and an infallible one in the limit.

**Lemma (the two-voter step).** For $n = 2m+1$,

$$P_{n+2} - P_n = \binom{2m+1}{m}(pq)^{m+1}(2p-1).$$

*Proof.*

1. Voters $n+1$ and $n+2$ change $S$ by $0$, $1$ or $2$, while the majority threshold rises from $m+1$ to $m+2$. So if $S_n \ge m+2$ the new majority is still right, and if $S_n \le m-1$ it is still wrong. Only $S_n \in \{m, m+1\}$ can flip.
2. If $S_n = m+1$ (right by one vote), the new majority is wrong iff both newcomers err: probability $\binom{2m+1}{m+1}p^{m+1}q^m \cdot q^2$, lost from $P_n$.
3. If $S_n = m$ (wrong by one vote), the new majority is right iff both newcomers are right: probability $\binom{2m+1}{m}p^m q^{m+1} \cdot p^2$, gained. The newcomers are independent of the first $n$, so the products are legitimate.
4. Since $\binom{2m+1}{m+1} = \binom{2m+1}{m}$, gain minus loss is $\binom{2m+1}{m}p^{m+1}q^{m+1}(p - q)$, and $p - q = 2p-1$. ∎

Part (i) and the reversal for $p<1/2$ follow: the sign of the step is the sign of $2p-1$, and at $p = 1/2$ the step is $0$ with $P_1 = 1/2$.

*Proof of (ii).* $\mathbb E[S_n/n] = p$ and $\mathrm{Var}(S_n/n) = pq/n$. The majority errs only if $S_n/n < 1/2$, which requires $|S_n/n - p| > p - \tfrac12$. By Chebyshev's inequality (the proof of the law of large numbers in [`prob-stat-refresher` 3.2](../../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md)),

$$1 - P_n \le \frac{pq}{n\,(p-\tfrac12)^2} \to 0.$$

∎

Hoeffding's inequality, stated here without proof, sharpens this to $1 - P_n \le e^{-2n(p-1/2)^2}$: the error falls exponentially in $n$, at a rate set by $(p - \tfrac12)^2$. For $p$ near $1/2$ that rate is tiny.

**Unequal competence.** Now voter $i$ has competence $p_i \in (0,1)$; the two answers are equally likely a priori, and voters' correctness is independent given which answer is true. A *decision rule* is any map from vote vectors to an answer.

**Theorem ([Nitzan–Paroush weights](../reference.md#nitzan-paroush-weights); Shmuel Nitzan and Jacob Paroush 1982, Lloyd Shapley and Bernard Grofman 1984).** Among all decision rules, the probability of a correct decision is maximized by weighted majority with weights

$$w_i = \log \frac{p_i}{1-p_i}:$$

choose the answer whose supporters' weights sum to more (natural log; ties broken either way).

*In words:* weigh each voter by the log-odds of her being right, so a coin-flipper counts for nothing and a near-infallible voter for almost everything.

*Proof.* Call the answers $A$ and $B$ and let $\theta$ be the true one.

1. For a rule $f$, $\Pr(\text{correct}) = \sum_{v} \Pr(v,\ \theta = f(v))$, summing over vote vectors $v$.
2. Each term is at most $\max_{t \in \{A,B\}} \Pr(v, \theta = t)$, so every rule's accuracy is at most $\sum_v \max_t \Pr(v, \theta = t)$, attained by any rule that picks a maximizing $t$ at every $v$.
3. By independence and the equal prior, $\Pr(v, \theta = A) = \tfrac12 \prod_{i \in V_A} p_i \prod_{i \in V_B}(1-p_i)$, where $V_A, V_B$ are the voters for $A$ and $B$; $\Pr(v, \theta = B)$ swaps $p_i$ and $1-p_i$ throughout.
4. Their ratio is $\prod_{i \in V_A}\frac{p_i}{1-p_i} \big/ \prod_{i \in V_B}\frac{p_i}{1-p_i}$. Taking logs, $A$ is a maximizer iff $\sum_{V_A} w_i \ge \sum_{V_B} w_i$. ∎

Two corollaries. With equal $p_i > 1/2$ the weights are equal, so simple majority is the most accurate rule; read beside [May's theorem](../reference.md#mays-theorem) ([1.2](01-02-mays-theorem.md)), the fair rule and the accurate rule coincide exactly when competence is equal. With unequal $p_i$, maximum accuracy requires giving up [anonymity](../reference.md#anonymity). (An unequal prior $\pi$ on $A$ adds a phantom weight $\log\frac{\pi}{1-\pi}$ for $A$.)

**Where the argument is weakest.** Independence. Jurors hear the same evidence, voters read the same newspapers, and a shared mistake hits everyone at once. In the extreme case where every voter copies one leader of competence $p$, the majority is right exactly when the leader is, so $P_n = p$ for every $n$: no growth at all. Between the extremes, accuracy can stall below 1 ([correlated voters](../reference.md#correlated-voters), [5.2](05-02-when-the-jury-theorem-fails.md)). The other hypotheses are also substantive: a correct answer must exist, voters must vote sincerely, and $p > 1/2$ is an empirical claim that the same arithmetic punishes when it fails.

## Picture

![Majority accuracy against the odd number of voters from 1 to 201. With competence 0.65 the curve passes 0.85 by 11 voters and is at 0.999 by 101. With 0.55 it climbs slowly through 0.633 at 11 and 0.764 at 51 to 0.844 at 101. With 0.52 it reaches only 0.715 at 201. A dashed green Hoeffding lower bound for 0.65 sits well below its exact curve until about 101 voters.](assets/05-01-fig1.svg)

All three curves rise, as the theorem promises, but the rate is everything: $p = 0.52$ needs far more than 201 voters to beat $0.9$. The dashed Hoeffding floor is a guarantee, not an estimate, and it is conservative.

## Worked examples

**Example 1 (clean): the step at $p = 0.65$.** Here $q = 0.35$, $pq = 0.2275$, $2p - 1 = 0.3$.

- $P_1 = 0.65$. $P_3 = p^3 + 3p^2q = 0.274625 + 0.443625 = 0.71825$.
- Lemma with $m = 1$: $P_5 = P_3 + 3(pq)^2(0.3) = 0.71825 + 0.046581 = 0.764831$.
- Lemma with $m = 2$: $P_7 = P_5 + 10(pq)^3(0.3) = 0.764831 + 0.035324 = 0.800154$.

The gains shrink because $(pq)^{m+1}$ falls faster than $\binom{2m+1}{m}$ grows: $4pq < 1$ whenever $p \neq 1/2$. At $n = 101$ the exact accuracy is $0.99901$; Hoeffding guarantees at least $0.98938$, Chebyshev only $0.89989$.

**Example 2 (the homogeneity hypothesis bites): an expert and two amateurs.** Competences $0.9$, $0.6$, $0.6$.

- *Simple majority* is right if the expert is right and not both amateurs err, or the expert errs and both amateurs are right: $0.9(1 - 0.16) + 0.1(0.36) = 0.756 + 0.036 = 0.792$.
- *Log-odds weights:* $\log 9 \approx 2.197$ and $\log 1.5 \approx 0.405$ each. The amateurs together weigh $0.811 < 2.197$, so the optimal rule follows the expert: accuracy $0.9$. A brute-force check over all 256 rules on three votes confirms $0.9$ is the maximum.

So adding two amateurs to the expert under simple majority *costs* $0.108$ in accuracy. The expert should be overridden by two agreeing amateurs iff her odds fall below theirs combined: $\frac{p_1}{1-p_1} < 1.5^2 = 2.25$, that is $p_1 < 9/13 \approx 0.692$. At $p_1 = 0.65$, simple majority is optimal, with accuracy $0.672$.

## Watch out

- **You might think the theorem assumes votes are independent, but actually it assumes *correctness* is.** Votes are positively correlated, because every voter tracks the same truth. What must be independent is each voter's error, equivalently her vote given which answer is true. That is the hypothesis shared evidence attacks.
- **You might think "more voters, more accuracy" holds for any electorate above 50% on average, but actually monotonicity is a theorem about identical voters.** Example 2 shows adding voters can lower accuracy. The *limit* survives some heterogeneity: if every voter's competence is at least $\tfrac12 + \varepsilon$ for a fixed $\varepsilon > 0$, Hoeffding's bound still gives $P_n \to 1$ (Paroush 1998). Step-by-step monotonicity does not survive.
- **You might think the theorem says large groups are reliable, but actually it gives a limit, not a size.** At $p = 0.52$, 201 voters reach only $0.715$. Whether a real body is "large enough" depends on $p - \tfrac12$, which nobody measures directly.

## One-liner

> Independent, equally competent, better-than-chance voters make majority accuracy rise with every two added and tend to 1; when competence differs, the most accurate rule weighs each voter by her log-odds of being right.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** (a) Each voter is right with $p = 0.8$, independently. Compute $P_3$ and $P_5$ from the binomial sum, showing the terms, and check $P_5$ with the lemma.
(b) At $p = 0.55$ the exact smallest odd $n$ with $P_n \ge 0.99$ is $539$. Find the smallest odd $n$ at which Hoeffding's bound $1 - P_n \le e^{-2n(p - 1/2)^2}$ *guarantees* $0.99$, and estimate the smallest $n$ with the normal approximation $P_n \approx \Phi\big((p - \tfrac12)\sqrt n / \sqrt{pq}\big)$, using $\Phi^{-1}(0.99) \approx 2.326$. Which number is a guarantee and which an estimate?

**P2 (🟡) *(Formal (a)–(b).)*** Allow even $n$, with ties broken by a fair coin. Competence $p$, independence as in the theorem.
(a) Prove that $P_{2m} = P_{2m-1}$ for every $m \ge 1$.
(b) Conclude that for $p > 1/2$, $P_n$ is non-decreasing in all $n \ge 1$, and say which steps are strict.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** A five-member review panel: two senior members with competence $0.8$ and three juniors with $0.65$. Equal prior; correctness independent.
(a) Give the log-odds weights, describe the optimal rule in one sentence, and compute its accuracy and the accuracy of simple majority exactly.
(b) An invented memo proposes weights "proportional to each member's accuracy record," that is $0.8$ and $0.65$, "so the seniors get their due." Show this rule decides every case exactly as simple majority does, and say in 80 words or fewer what the Nitzan–Paroush theorem says about the right scale for weights.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b))*

(a) $q = 0.2$. $P_3 = p^3 + 3p^2q = 0.512 + 0.384 = 0.896$.

$P_5 = p^5 + 5p^4q + 10p^3q^2 = 0.32768 + 0.4096 + 0.2048 = 0.94208$.

Lemma with $m = 1$: $P_5 - P_3 = 3(pq)^2(2p-1) = 3(0.16)^2(0.6) = 0.04608$, and $0.896 + 0.04608 = 0.94208$.

(b) Hoeffding: need $e^{-2n(0.05)^2} \le 0.01$, i.e. $n \ge \ln 100 / 0.005 = 921.03$, so the smallest odd $n$ is $923$. It is a guarantee: the exact accuracy there is $0.99884$.

Normal: need $0.05\sqrt n / \sqrt{0.2475} \ge 2.326$, i.e. $n \ge 2.326^2 (0.2475)/0.0025 \approx 535.8$, so about $537$. It is an estimate, and here it is slightly optimistic: the exact values are $P_{537} = 0.98994$ and $P_{539} = 0.99006$.

**Wrong turns:** using $p - \tfrac12 = 0.55$ instead of $0.05$. Calling Hoeffding's $923$ "the answer": a bound tells you $n$ suffices, not that smaller $n$ fails.

---

**P2** *(Formal (a)–(b))*

(a) Let $n = 2m - 1$ and add one voter. As in the lemma, the verdict can change only if the first $2m-1$ split $m$ to $m-1$.

- If $m$ are right and the newcomer errs (probability $\binom{2m-1}{m}p^m q^{m-1}\cdot q$), a right verdict becomes a coin flip: accuracy falls by half that, $\tfrac12\binom{2m-1}{m}p^m q^m$.
- If $m-1$ are right and the newcomer is right (probability $\binom{2m-1}{m-1}p^{m-1}q^{m}\cdot p$), a wrong verdict becomes a coin flip: accuracy rises by $\tfrac12\binom{2m-1}{m-1}p^m q^m$.

Since $\binom{2m-1}{m} = \binom{2m-1}{m-1}$, the changes cancel and $P_{2m} = P_{2m-1}$. ∎

(b) For $p > 1/2$, $P_{2m+1} > P_{2m-1}$ by the lemma, and $P_{2m} = P_{2m-1}$ by (a). So $P_{2m-1} = P_{2m} < P_{2m+1}$: steps from odd to even are flat, steps from even to odd are strict. That is why the textbook statement uses odd $n$.

**Wrong turns:** forgetting the coin, so that a tie counts as wrong, which makes $P_{2m} < P_{2m-1}$. Counting cases where the newcomer cannot change the verdict.

---

**P3** *(Formal (a) · Exegetical (b), strict)*

(a) Seniors: $\log 4 \approx 1.386$; juniors: $\log \tfrac{13}{7} \approx 0.619$. Two seniors weigh $2.773$, three juniors $1.857$.

Rule: if the seniors agree, follow them; if they split, their weights cancel and the juniors' majority decides.

Optimal accuracy: seniors agree and are right with probability $0.8^2 = 16/25$; they split with probability $2(0.8)(0.2) = 8/25$, and then the juniors' majority is right with probability $P_3 = 0.71825 = 2873/4000$ (Example 1). Total $16/25 + (8/25)(2873/4000) = 10873/12500 = 0.86984$.

Simple majority, by the number of seniors right:

- both ($16/25$), need at least one junior: $1 - 0.35^3 = 7657/8000$;
- one ($8/25$), need at least two juniors: $2873/4000$;
- none ($1/25$), need all three: $0.65^3 = 2197/8000$.

Total $(122512 + 45968 + 2197)/200000 = 170677/200000 = 0.853385$.

(b) Weights $0.8, 0.8, 0.65, 0.65, 0.65$ total $3.55$, so a side wins with more than $1.775$. Any three members weigh at least $3(0.65) = 1.95 > 1.775$ and any two at most $1.6 < 1.775$. So the side with three or more votes always wins: exactly simple majority.

**Must hit, strict (b):**

- The optimal weights are log-odds, $\log\frac{p_i}{1-p_i}$, not competences.
- Log-odds are $0$ at $p = 1/2$ and unbounded as $p \to 1$, so they separate a $0.8$ voter from a $0.65$ voter far more ($1.386$ vs $0.619$, a ratio above 2) than $0.8$ vs $0.65$ does.

**Wrong turns:** assuming any unequal weights must change some outcome. Taking the log-odds rule to be "the seniors dictate": they decide only when they agree.

**Model answer (b):** Weights $0.8$ and $0.65$ make any three members outweigh any two, so the memo's rule is simple majority with accuracy $0.853385$. Nitzan and Paroush show the accuracy-maximizing weights are log-odds, $\log\frac{p}{1-p}$: about $1.386$ for a senior and $0.619$ for a junior. That scale counts a coin-flipper as zero and grows without bound as competence nears 1, and it raises accuracy to $0.86984$.

</details>

## Flashback

**From Lesson [4.3](04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md) (The doctrinal paradox and the discursive dilemma):** *(Formal (a)–(b).)* Fire investigators vote proposition by proposition on the agenda $k$ "the fire started in the kitchen", $g$ "it started in the garage", $t$ "it started in the attic", with negations. Each investigator holds a consistent, complete judgment set, and the number of investigators $n$ is odd.

(a) The background fact is that the fire started in exactly one of the three rooms. Give a five-member profile on which proposition-wise majority returns an inconsistent set, and name a minimally inconsistent subset of it. Then show that every inconsistent majority set on this agenda is that same set.

(b) An investigator points out that the fire may have started somewhere else, so the background fact becomes "in at most one of the three rooms". Use 4.3's Nehring–Puppe theorem to prove that proposition-wise majority is now consistent at every profile.

<details>
<summary>Solution</summary>

**Worked answer:**

(a) Members 1–2 accept $k, \neg g, \neg t$; members 3–4 accept $\neg k, g, \neg t$; member 5 accepts $\neg k, \neg g, t$. Tallies: $k$ 2–3, $g$ 2–3, $t$ 1–4. The majority set is $\{\neg k, \neg g, \neg t\}$, inconsistent with "exactly one", and minimally so: drop any one of the three, say $\neg t$, and "it started in the attic" satisfies the rest.

No majority set can accept two rooms: two majorities intersect, and a member accepting both $k$ and $g$ would be inconsistent (steps 4–5 of 4.3's proof). With $n$ odd the majority set is complete, so it accepts exactly one room, which is consistent, or none, which gives $\{\neg k, \neg g, \neg t\}$. The paradox is exactly a plurality split with no room backed by a majority.

(b) Under "at most one", the minimally inconsistent sets are the pairs $\{k, g\}$, $\{k, t\}$, $\{g, t\}$ and each $\{x, \neg x\}$. The triple $\{\neg k, \neg g, \neg t\}$ is now consistent: the fire started elsewhere. Every minimally inconsistent set has at most two members, so the agenda has the median property, and by the theorem proposition-wise majority is consistent for every odd $n$ and every profile. A brute-force check of all profiles with 3, 5 and 7 members agrees.

**Wrong turns:** in (b), still counting $\{\neg k, \neg g, \neg t\}$ as inconsistent; weakening the background fact is exactly what removes the size-3 clash. In (a), making some investigator name two rooms, or none: under "exactly one" that set is inconsistent and not an admissible input. Applying the theorem without $n$ odd: with even $n$ a tie leaves the majority set incomplete.

</details>

## Connections

- **Backward:** [1.2](01-02-mays-theorem.md)'s May's theorem singles out simple majority on fairness grounds; the corollary here shows it is also the accuracy-maximizing rule exactly when competence is equal. [4.3](04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md)'s premise- and conclusion-based procedures are two ways of aggregating judgments that can both be read as truth-tracking, and [5.3](05-03-epistemic-readings-of-aggregation.md) compares their accuracy.
- **Forward:** [5.2](05-02-when-the-jury-theorem-fails.md) breaks independence (opinion leaders, common shocks), lets competence vary or fall below a half, and makes voters strategic, so that sincere voting stops being an equilibrium. [5.3](05-03-epistemic-readings-of-aggregation.md) reads the theorem as an argument about democracy and asks what it does and does not show.
- **Sideways:** the normative argument that uses this theorem belongs to [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md); Aristotle's summation argument, often cited as a forerunner but working by a different mechanism, is [`history-of-political-thought` 1.4](../../history-of-political-thought/lessons/01-04-aristotle-constitutions-citizens-and-the-polity.md). The Nitzan–Paroush rule is naive Bayes with votes as features ([`machine-learning` 3.1](../../machine-learning/lessons/03-01-naive-bayes.md)): independent evidence adds in log-odds. AdaBoost's classifier weight $\tfrac12\ln\frac{1-\epsilon}{\epsilon}$ ([`machine-learning` 2.7](../../machine-learning/lessons/02-07-boosting.md)) is half that log-odds weight for a weak learner with error $\epsilon$, and a common factor never changes a weighted vote.

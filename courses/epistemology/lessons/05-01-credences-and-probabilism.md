# Epistemology · Lesson 5.1: Credences and probabilism

> ⏱ ~15 min · Module 5: Bayesian epistemology · Builds on: [1.2 Sensitivity and safety](01-02-sensitivity-and-safety.md), [3.2 Denying closure](03-02-denying-closure.md) · Unlocks: [5.2 Dutch books and accuracy](05-02-dutch-books-and-accuracy.md), [5.3 Conditionalization](05-03-conditionalization.md)

## Why this matters

Everything so far treated belief as on or off: you believe the barn is a barn, or you don't. But you are more confident that 2 + 2 = 4 than that it will rain tomorrow, and more confident of that than that your ticket wins. Module 5 takes those degrees seriously. This lesson says what a degree of belief is, states the norm that Bayesians say governs degrees (they should be probabilities), and then asks how degrees connect to the all-or-nothing belief of Modules 1 to 4. The obvious connection, "believe what you are confident enough in", runs straight into two paradoxes.

## The idea

A **credence** is how confident you are that something is true, on a scale from 0 (certain it is false) to 1 (certain it is true). One way to make the number concrete: ask what you would pay for a ticket that pays 1 dollar if the claim is true and nothing otherwise, where you would be just as happy to sell the ticket at that price as to buy it. If 30 cents is your break-even price for "rain tomorrow", your credence in rain is 0.3.

Credences seem to need a structure. If you are 0.3 confident of rain, you had better be 0.7 confident of no rain; and you cannot be more confident that it rains *and* is windy than that it rains. **Probabilism** is the claim that this structure is exactly the probability calculus.

Now link degrees to flat-out belief. The natural bridge: believe whatever you are confident enough in. Pick a bar, say 0.95. Hold a ticket in a 1,000-ticket raffle and you are 0.999 confident it loses, so you believe it loses. The same goes for every ticket. You are also certain some ticket wins. Your beliefs cannot all be true.

## The argument

**Credence and the betting interpretation.** Let $\mathcal{F}$ be a set of propositions closed under $\neg$, $\wedge$, $\vee$, and write $\mathrm{cr}(A)$ for an agent's [credence](../reference.md#credence) in $A \in \mathcal{F}$. On the [betting interpretation](../reference.md#betting-interpretation), associated with Frank Ramsey ("Truth and Probability", written 1926, published 1931) and Bruno de Finetti (1937), $\mathrm{cr}(A)$ is the agent's **fair price** for a bet paying 1 unit if $A$ and 0 otherwise: the price at which she would buy or sell it.

*In words:* a credence is the break-even price of a 1-dollar ticket on the proposition.

How such numbers can be read off choices, and why that needs a utility scale, is [decision-theory 2.2](../../decision-theory/lessons/02-02-probability-from-preference.md)'s topic; it is not re-run here. Four standard objections show why most epistemologists treat the betting price as a *measure* of credence, not its definition. (i) **Utility is not linear in money:** a risk-averse agent's prices understate her confidence (decision-theory 2.2's 225-dollar example). (ii) **Reluctance to bet:** someone who finds gambling distasteful has credences but no betting prices. (iii) **No two-sided price:** someone who will buy only below one price and sell only above a higher one has no single fair price to read. (iv) **Observer effects:** betting on $A$ can change whether $A$ (a bet that you will finish the marathon changes your incentive to finish), so the price reports something other than your prior confidence. Some propositions also cannot be settled ("humanity dies out"), so their bets never pay.

**Probabilism.** A rational agent's credences satisfy, for all $A, B \in \mathcal{F}$:

1. **Non-negativity:** $\mathrm{cr}(A) \ge 0$.
2. **Normality:** $\mathrm{cr}(\top) = 1$, where $\top$ is any tautology.
3. **Finite additivity:** if $A$ and $B$ are mutually exclusive, $\mathrm{cr}(A \vee B) = \mathrm{cr}(A) + \mathrm{cr}(B)$.

*In words:* rational credences are probabilities.

These are the Kolmogorov axioms of [prob-stat-refresher 1.1](../../prob-stat-refresher/lessons/01-01-sample-spaces-events-axioms.md), reread as norms on a mind. [Probabilism](../reference.md#probabilism) is the normative claim; the axioms are its content. Two consequences do most of the work below. Since $A$ and $\neg A$ are exclusive and $A \vee \neg A = \top$, additivity and normality give

$$\mathrm{cr}(\neg A) = 1 - \mathrm{cr}(A).$$

And if $A$ entails $B$, then $B$ is the exclusive disjunction of $A$ and $B \wedge \neg A$, so $\mathrm{cr}(B) = \mathrm{cr}(A) + \mathrm{cr}(B \wedge \neg A) \ge \mathrm{cr}(A)$. In particular $\mathrm{cr}(A \wedge B) \le \mathrm{cr}(A)$.

*In words:* a conjunction can never earn more confidence than either conjunct.

Why credences *should* obey these is [5.2](05-02-dutch-books-and-accuracy.md)'s question (Dutch books, accuracy). Imprecise credence, which replaces one probability with a set of them when evidence is thin, relaxes probabilism's one-number assumption; as a decision model it is owned by [decision-theory 3.2](../../decision-theory/lessons/03-02-models-of-ambiguity.md).

**The Lockean thesis.** Write $\mathrm{Bel}(p)$ for "the agent believes $p$". For a fixed threshold $t$ with $\tfrac12 \le t < 1$:

$$\mathrm{Bel}(p) \iff \mathrm{cr}(p) > t.$$

*In words:* believing is being confident enough. Richard Foley (1992) named this the [Lockean thesis](../reference.md#lockean-thesis), after Locke's degrees of assent. Split it: **sufficiency** (if $\mathrm{cr}(p) > t$, believe $p$) and **necessity** (believe $p$ only if $\mathrm{cr}(p) > t$).

**The lottery paradox** (Henry Kyburg, 1961). A fair lottery has $N$ tickets and exactly one winner. Let $L_i$ be "ticket $i$ loses". The [lottery paradox](../reference.md#lottery-paradox) is that three principles cannot all hold:

- P1 (Lockean sufficiency). Believe $p$ whenever $\mathrm{cr}(p) > t$.
- P2 ([conjunction closure](../reference.md#conjunction-closure)). If $\mathrm{Bel}(p)$ and $\mathrm{Bel}(q)$, then $\mathrm{Bel}(p \wedge q)$.
- P3 (no contradictions). Never believe a proposition you are certain is false.
- P4 (the setup). $\mathrm{cr}(L_i) = 1 - \tfrac1N$ for each $i$, and $\mathrm{cr}(\neg(L_1 \wedge \dots \wedge L_N)) = 1$.
- C. If $1 - \tfrac1N > t$, P1 to P4 are inconsistent.

*Proof.* By P1 and P4 the agent believes every $L_i$ and believes $\neg(L_1 \wedge \dots \wedge L_N)$. Applying P2 $N$ times, she believes $L_1 \wedge \dots \wedge L_N \wedge \neg(L_1 \wedge \dots \wedge L_N)$, a contradiction, against P3. The condition $1 - \tfrac1N > t$ rearranges to

$$N > \frac{1}{1-t}.$$

*In words:* any fixed threshold short of certainty is beaten by a big enough lottery.

**The preface paradox** (David Makinson, 1965). An author has carefully checked each of the $n$ claims $E_1, \dots, E_n$ in her book and believes each; in the preface she says that, being human, she has surely made a mistake somewhere. Formally: if the claims are independent and each has credence $c$, then

$$\mathrm{cr}(E_1 \wedge \dots \wedge E_n) = c^n,$$

which falls toward 0 as $n$ grows. Once $c > t$ and $1 - c^n > t$, Lockean sufficiency alone has her believe each $E_i$ and believe that not all are true. That belief set cannot all be true, and the [preface paradox](../reference.md#preface-paradox) is that it seems *rational* anyway: here is a case where the right attitude looks inconsistent.

**The responses**, each stated as the premise it gives up.

- **Drop conjunction closure (P2).** Kyburg's own response: rational belief is not closed under conjunction, so believing each $L_i$ never commits you to their conjunction. The cost: reasoning from several beliefs to their conjunction stops being automatically safe (the multi-premise worry of [3.2](03-02-denying-closure.md)).
- **Drop the fixed-threshold Lockean thesis.** Hannes Leitgeb's stability theory ("The Stability Theory of Belief", 2014) keeps closure and a Lockean link, but lets the threshold depend on the agent's credences: believe $p$ iff your credence in $p$ stays high on every way of learning something compatible with $p$. Martin Smith (*Between Probability and Certainty*, 2016) replaces the threshold with **normic support**: your evidence must make $p$'s falsity *abnormal*, something that would need explaining. A lottery win needs no explaining, so lottery beliefs fail, however probable; this echoes the safety verdict of [1.2](01-02-sensitivity-and-safety.md).
- **Eliminate belief.** Richard Jeffrey argued that a Bayesian needs only credences; "belief" is a coarse summary with no norms of its own. The cost: the knowledge, assertion and justification of Modules 1 to 4 were all stated for flat-out belief.
- **Raise the threshold to 1.** Then no lottery is big enough, but nothing short of certainty is believed, which is close to Descartes.

**Where the argument is weakest.** P1, read as a claim about rationality rather than arithmetic. The paradoxes need sufficiency: high credence *makes* belief rational. A critic says that is exactly what the lottery refutes. Many epistemologists hold that you are not justified in believing your ticket lost, though you are 0.999 confident, while you may believe the newspaper's report of the result at lower credence. If belief answers to something other than probability (normality, safety, knowledge), the lottery is not a paradox but a counterexample to sufficiency. The defender replies that the preface pulls the other way: there, believing each well-checked claim looks plainly rational, so whatever is wrong is closure or consistency, not the threshold. Which case you take as fixed point decides which principle goes.

## The picture

![Line chart of the credence that all n independent claims are true, each at credence 0.98, for n from 0 to 150. The curve starts at 1 and decays. A red dashed line at 0.9 marks the belief threshold; the curve is still above it at n equals 5. It falls below one half at n equals 35. A green dashed line at 0.1 marks where the agent comes to believe some claim is false, which the curve reaches at n equals 114.](assets/05-01-fig1.svg)

Credence $0.98$ per claim, threshold $t = 0.9$. The Lockean author believes the whole book only while it has 5 or fewer claims; from 114 claims on she also believes it contains an error.

## Worked examples

**Ex 1 (clean: the lottery threshold).** A Lockean believer has $t = 0.95$. With $N$ tickets she believes each $L_i$ iff $1 - \tfrac1N > 0.95$, iff $N > \tfrac{1}{0.05} = 20$. So:

- $N = 20$: $\mathrm{cr}(L_i) = 0.95$, not *greater* than $t$. She suspends on each ticket; no paradox.
- $N = 21$: $\mathrm{cr}(L_i) = \tfrac{20}{21} \approx 0.952 > 0.95$. She believes all 21 and is certain one is false. With closure she believes a contradiction.
- $N = 1{,}000$: $\mathrm{cr}(L_i) = 0.999$, far over the bar.

The verdict per principle: sufficiency fires on every ticket; closure then produces a belief in a contradiction; P3 forbids it. Something must go at every $N \ge 21$.

**Ex 2 (hard: the preface, where closure is not the culprit).** A field guide makes $n = 200$ independent claims, each at credence $0.98$; $t = 0.9$.

$$\mathrm{cr}(\text{all true}) = 0.98^{200} \approx 0.0176.$$

$$\mathrm{cr}(\text{some claim false}) \approx 1 - 0.0176 = 0.9824.$$

Sufficiency has the author believe all 200 claims ($0.98 > 0.9$) and believe the book contains an error ($0.9824 > 0.9$). No closure step was used, and the set is already jointly inconsistent. So Kyburg's escape (drop closure) does not touch this case: either rational belief sets can be inconsistent, or the author should not believe some of her own well-checked claims. Many who discuss the case, Makinson included, take the first option; the second must say which claim she should give up, when all 200 are on a par. The stability theory gives an answer that depends on how the claims are partitioned, which its critics count as a cost.

## Watch out

- **You might think the lottery and preface are the same paradox, but** they press on different principles. Many deny that you should believe your ticket lost at all, so the lottery pressures sufficiency; nearly everyone thinks the author should believe her claims, so the preface pressures consistency.
- **You might think probabilism says what your credences should be, but** it only constrains how they hang together. Credence 0.01 in rain and 0.99 in no rain is coherent, whatever the sky looks like; which coherent function to have is [5.4](05-04-the-problem-of-priors.md)'s problem.
- **You might think the betting interpretation is the definition of credence, but** the four objections show betting prices can come apart from confidence. Most Bayesians treat credence as a mental state and betting as one way to measure it.

## One-liner

> Credences should be probabilities; but no fixed threshold turns probabilities into beliefs without either a lottery or a preface making those beliefs inconsistent.

## Problems

**P1 (🟢) *(Formal.)*** A coherent forecaster has $\mathrm{cr}(R) = 0.4$ for rain tomorrow, $\mathrm{cr}(W) = 0.3$ for high wind, and $\mathrm{cr}(R \wedge W) = 0.15$.

(a) Using only the three axioms and the consequences derived in the lesson, find $\mathrm{cr}(R \wedge \neg W)$, $\mathrm{cr}(R \vee W)$ and $\mathrm{cr}(\neg R \wedge \neg W)$. Show which axiom each step uses.
(b) A second forecaster keeps $\mathrm{cr}(R) = 0.4$ but reports $\mathrm{cr}(R \wedge W) = 0.45$. In one sentence, which consequence of probabilism does she violate?

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** A Lockean believer has threshold $t = 0.96$.

(a) She holds one ticket in a fair raffle of $N$ tickets with one winner. What is the smallest $N$ at which she believes, of each ticket, that it loses? Check the boundary case.
(b) She keeps an archive catalogue of $n$ entries, each correct with independent credence $0.995$. Find the largest $n$ for which she believes the whole catalogue is correct, and the smallest $n$ for which she believes it contains an error.
(c) Take the catalogue at $n = 300$. Say which of these she believes by the Lockean thesis: each entry; "all entries are correct"; "some entry is wrong". Then show, in two sentences, that adding conjunction closure makes her violate the *necessity* half of the Lockean thesis.

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)*** Diagnose this invented forum post:

> "Credence just *is* betting price. I'd never bet on whether my brother's surgery succeeds, so I have no credence about it at all. And for rain tomorrow, I'll pay at most 40 cents for a ticket paying a dollar if it rains, but I'll only sell you one for 60 cents. So my credence in rain is both 0.4 and 0.6, which proves credences don't have to be probabilities."

(a) Name the two objections from the lesson's list that the post runs into, one sentence each, and the step where the post treats a measure as a definition.
(b) In 120 words or fewer: does the 40/60 spread show that the poster's credence is imprecise, or only that betting prices fail to measure a precise credence? Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal)*

(a) $R$ is the exclusive disjunction of $R \wedge W$ and $R \wedge \neg W$, so by finite additivity

$$\mathrm{cr}(R \wedge \neg W) = 0.4 - 0.15 = 0.25.$$

$R \vee W$ is the exclusive disjunction of $R \wedge \neg W$ and $W$, so by finite additivity

$$\mathrm{cr}(R \vee W) = 0.25 + 0.3 = 0.55.$$

$\neg R \wedge \neg W$ is $\neg(R \vee W)$, so by the complement rule (from additivity and normality)

$$\mathrm{cr}(\neg R \wedge \neg W) = 1 - 0.55 = 0.45.$$

(b) $R \wedge W$ entails $R$, so probabilism requires $\mathrm{cr}(R \wedge W) \le \mathrm{cr}(R) = 0.4$; 0.45 violates the entailment (conjunction) consequence.

**Wrong turns:** adding $0.4 + 0.3 = 0.7$ for $R \vee W$ ($R$ and $W$ are not exclusive; the overlap is counted twice). Saying (b) violates non-negativity or normality directly: it violates their joint consequence via additivity.

---

**P2** *(Formal (a)–(b) · Exegetical (c))*

(a) She believes each $L_i$ iff $1 - \tfrac1N > 0.96$, iff $N > \tfrac{1}{0.04} = 25$. At $N = 25$, $\mathrm{cr}(L_i) = \tfrac{24}{25} = 0.96$, not greater than $t$. So the smallest is $N = 26$ ($\tfrac{25}{26} \approx 0.9615$).

(b) She believes "all correct" iff $0.995^n > 0.96$, iff $n < \dfrac{\ln 0.96}{\ln 0.995} \approx 8.14$. Check: $0.995^8 \approx 0.9607 > 0.96$, $0.995^9 \approx 0.9559$. Largest $n = 8$.

She believes "some entry wrong" iff $1 - 0.995^n > 0.96$, iff $0.995^n < 0.04$, iff $n > \dfrac{\ln 0.04}{\ln 0.995} \approx 642.16$. Check: $1 - 0.995^{642} \approx 0.95997$, $1 - 0.995^{643} \approx 0.96017$. Smallest $n = 643$.

**Must hit, strict (c):**

- Each entry: believed ($0.995 > 0.96$).
- "All correct": $0.995^{300} \approx 0.222$, not believed. "Some wrong": $\approx 0.778$, not believed either; she suspends on both.
- Closure: from her 300 beliefs, conjunction closure forces belief in "all correct", whose credence $0.222 < 0.96$; necessity says she may believe it only if credence exceeds $0.96$, so the two principles conflict here even though no contradiction is believed.

**Wrong turns:** answering $N = 25$ in (a) by ignoring the strict inequality. In (c), saying she believes "some entry is wrong" because it is more likely than not: the bar is 0.96, not one half.

---

**P3** *(Exegetical (a) · Evaluative (b))*

**Must hit, strict (a):**

- **Reluctance to bet:** refusing to bet on the surgery shows an unwillingness to gamble on that matter, not an absence of confidence; she presumably still hopes, fears and plans as someone with a credence.
- **No two-sided price:** the betting interpretation needs a price at which she would *both* buy and sell; a 40/60 spread means that price is not defined, so the number cannot be read off.
- The measure-as-definition step is the first sentence: "credence just *is* betting price". Both conclusions follow only if betting prices define credence rather than measure it.

**Must hit, any verdict (b):**

- State both readings: imprecise credence (her confidence is genuinely the interval from 0.4 to 0.6, a set of probabilities, as in decision-theory 3.2) versus a precise credence plus a betting-specific fact (risk aversion, fear of being exploited by a better-informed counterparty, transaction costs).
- Name what would decide between them: whether the spread survives when the betting confounds are removed (small stakes, no informed counterparty, no dislike of gambling), or shows up in non-betting behaviour such as comparative judgments.
- Note that even the imprecise reading does not show credences "don't have to be probabilities": each member of the set is a probability.

**Wrong turns:** treating the spread as an *incoherence*: both numbers are prices for rain, not credences in rain and its negation, so no axiom is broken. Concluding the betting interpretation is simply refuted without saying what replaces it as a measure.

**Model answer (b), one of several:** The spread alone cannot tell. Market makers quote spreads around precise estimates because they fear trading with someone who knows more, and a poster facing a stranger online has the same reason; a risk-averse bettor would also shade both prices. If those confounds are removed and she still cannot say whether rain is more or less likely than 0.5, and her other judgments (comparisons with a coin, with a 45 percent forecast) are equally indeterminate, the imprecise reading fits better. Either way probabilism survives in some form: the imprecise view replaces one probability with a set of them, it does not abandon probability.

</details>

## Flashback

**From Lesson [4.4](04-04-testimony.md) (Testimony):** *(Exegetical (a) · Evaluative (b).)* Apply to a new case. Mira reads one anonymous comment under a local news story: "The ferry to the island is cancelled on Saturday for hull repairs." The comment has no name, no posting history and no rating; nothing in it strikes her as odd, and she has no other evidence either way. It is true: the commenter read the ferry company's notice. Stipulate that local reductionism requires positive non-testimonial reasons bearing on *this speaker's* competence and sincerity, and that "nothing seems off" is not such a reason. (a) Is Mira justified in believing the ferry is cancelled on local reductionism? On anti-reductionism? One sentence each, naming the condition each verdict turns on. (b) A critic calls the anti-reductionist verdict gullibility. Give the anti-reductionist's best reply and what it costs. 60 words or fewer; any verdict.

<details>
<summary>Solution</summary>

**Must hit, strict (a):**

- Local reductionism: not justified. The condition is positive reasons about this speaker on this occasion, and by stipulation she has none (no identity, record, or evidence of competence or sincerity).
- Anti-reductionism: justified. The condition is the absence of defeaters, and she has no reason to doubt this commenter or this claim.

**Must hit, any verdict (b):**

- Name the premise the charge attacks: that the absence of defeaters suffices for justification, with no positive reasons required.
- Give a reply: the entitlement is a defeasible default, not belief in everything (Reid's credulity is "limited and restrained by experience"), and Mira would drop the belief at the first defeater; or Burge's ground, that intelligible assertion comes from a rational source and so carries a priori entitlement.
- Say the cost: the view must grant justification to a belief resting on a single anonymous assertion with no track record, which is exactly the verdict the critic finds too permissive.

**Wrong turns:** counting "ferry notices are routine" as a reason about this speaker (the stipulation excludes it, and it concerns the kind of claim, not the commenter); saying Mira is justified *because* the comment is true (truth is no condition of either view); running global reductionism instead of local.

**Model answer (b), one of several:** Default trust is not credulity without limit: Mira's belief is held on condition that no defeater appears, and a hint of trolling or a conflicting report would remove it. Testimony is a basic source, like perception, and needs no prior vouching. The cost: an unknown voice on the internet then justifies by default, a verdict the critic counts as the problem.

</details>

## Connections

- **Backward:** lottery beliefs were [1.2](01-02-sensitivity-and-safety.md)'s test for sensitivity and safety; here they become a paradox about rational belief rather than knowledge. The compounding of risk across premises was [3.2](03-02-denying-closure.md)'s argument against multi-premise closure; the preface is that argument with belief in place of knowledge. Odds-form updating in [philosophical-method 2.4](../../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md) assumed credences were probabilities; this lesson states the assumption.
- **Forward:** [5.2](05-02-dutch-books-and-accuracy.md) argues for probabilism twice, with sure-loss books and with accuracy; [5.3](05-03-conditionalization.md) asks how credences should change; [5.4](05-04-the-problem-of-priors.md) asks which coherent credences to start with.
- **Sideways:** [decision-theory 2.2](../../decision-theory/lessons/02-02-probability-from-preference.md) derives the same probabilities from preferences, and [decision-theory 3.2](../../decision-theory/lessons/03-02-models-of-ambiguity.md) relaxes them to sets; the axioms themselves are [prob-stat-refresher 1.1](../../prob-stat-refresher/lessons/01-01-sample-spaces-events-axioms.md)'s.

# Philosophy of Science · Lesson 3.3: Replication, error statistics, and severe testing

> ⏱ ~15 min · Module 3: Statistical evidence and the values of science · Builds on: [3.2](03-02-the-likelihood-principle.md), [3.1](03-01-two-schools-of-statistical-inference.md), [`econometrics` 2.7](../../econometrics/lessons/02-07-multiple-testing-specification-search.md) · Unlocks: [3.4](03-04-values-and-inductive-risk.md)

## Why this matters

In 2015 the Open Science Collaboration re-ran 100 experimental and correlational studies from three psychology journals, in high-powered designs. Of the originals, 97 percent had significant results; of the replications, 36 percent did, and the replication effects were about half the original size (*Science*, 2015). That table is the [replication crisis](../reference.md#replication-crisis). Two readers can agree on every number and disagree about what went wrong; this lesson computes each diagnosis and finds the premise that separates them.

## The idea

A smoke detector with a 5 percent false-alarm rate says little about whether a given alarm means fire, until you know how often this building has a fire and how often the detector catches one. That is the first diagnosis: a test's error rate is a fact about the test, and how much to believe a flagged finding depends also on the field it came from.

The second diagnosis says that picture starts in the wrong place. The 5 percent is a promise about one detector read once. Check twenty detectors and report the one that sounded, or keep testing until one sounds, and the 5 percent no longer describes what you did. What failed, on this view, is not the base rate but the capacity of the procedure to come up empty.

[3.2](03-02-the-likelihood-principle.md) taught that on the [likelihood principle](../reference.md#likelihood-principle) the sampling plan is irrelevant to what the data say; here that disagreement becomes a question about what a discipline should change. [`econometrics` 2.7](../../econometrics/lessons/02-07-multiple-testing-specification-search.md) owns the arithmetic of many tests, cited here and put to work.

## The math

Notation: $P(\cdot)$ is an ideal agent's credence function (`epistemology`'s $\mathrm{cr}$); $P(x;\theta)$ with a semicolon is the sampling probability of $x$ under a fixed parameter value $\theta$. $\Phi$ is the standard normal CDF. A test has level $\alpha$ and power $1-\beta$.

**1. Positive predictive value** (John Ioannidis, "Why Most Published Research Findings Are False", *PLoS Medicine*, 2005). In a field where a fraction $\pi$ of the tested hypotheses are true, with pre-study odds $R = \pi/(1-\pi)$, the [positive predictive value](../reference.md#positive-predictive-value) is

$$\mathrm{PPV} = \frac{(1-\beta)\pi}{(1-\beta)\pi + \alpha(1-\pi)} = \frac{(1-\beta)R}{R - \beta R + \alpha}.$$

*In words:* of all the significant results the field produces, the share that come from true hypotheses. In odds form ([`philosophical-method` 2.4](../../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md)), post-study odds $= R \times (1-\beta)/\alpha$: a significant result multiplies the odds by power over level.

The [false discovery proportion](../reference.md#false-discovery-proportion) is $1 - \mathrm{PPV}$, so `econometrics` 2.7's screening answer of 0.36 is a PPV of 0.64. PPV is a property of a *field* (its mix of hypotheses and its tests); FDR control is a property of a *procedure* (Benjamini–Hochberg, under the conditions `econometrics` 2.7 states).

**2. Bias.** Ioannidis adds $u$, the [bias term](../reference.md#ioannidis-bias-term): the proportion of analyses that would not have been findings but are reported as findings anyway.

$$\mathrm{PPV}_u = \frac{(1-\beta)R + u\beta R}{R + \alpha - \beta R + u - u\alpha + u\beta R}.$$

*In words:* bias is a second route to a "finding". It raises the false-positive rate to $\alpha' = \alpha + u(1-\alpha)$ and the hit rate to $(1-\beta) + u\beta$, and the formula is the odds calculation run with those rates.

**3. Forking paths.** Joseph Simmons, Leif Nelson and Uri Simonsohn ("False-Positive Psychology", *Psychological Science*, 2011) showed by simulation that undisclosed flexibility can make finding a nonexistent effect more likely than not. They named the flexibility "researcher degrees of freedom"; `econometrics` 2.7 calls the same territory the "specification garden" and does the arithmetic of $1-(1-\alpha)^m$. Andrew Gelman and Eric Loken's [forking paths](../reference.md#forking-paths) (2013) sharpens it: no one need run many analyses. One analysis is enough if its details were contingent on the data, so that different data would have led to a different, equally reasonable analysis. They state this as a frequentist point about hypothetical repetitions.

**4. Severity.** Deborah Mayo (*Error and the Growth of Experimental Knowledge*, 1996; *Statistical Inference as Severe Testing*, 2018; with Aris Spanos, 2006) makes the [severity requirement](../reference.md#severity-requirement) the core of her [error statistics](../reference.md#severe-testing): data give good grounds for a claim only if they agree with it and the procedure would, with high probability, have produced a result agreeing less well with it were the claim false. For $\bar X$ normal with known $\sigma$, testing $H_0: \mu \le \mu_0$ against $\mu > \mu_0$, after a rejection at observed mean $\bar x_{\text{obs}}$:

$$\mathrm{SEV}(\mu > \mu_1) = P(\bar X \le \bar x_{\text{obs}};\ \mu = \mu_1) = \Phi\!\left(\frac{\bar x_{\text{obs}} - \mu_1}{\sigma/\sqrt{n}}\right).$$

*In words:* if $\mu$ were only $\mu_1$, how probably would the study have given a smaller mean than it did? ($\mu_1$ is the worst case among values making the claim false.) At $\mu_1 = \mu_0$ this equals $1 - p$; for bolder claims it falls. Severity descends from Popper's [severe tests](02-01-popper-conjectures-and-refutations.md) by keeping the falsificationist orientation and turning the risk of refutation into a computed error probability.

**5. The two diagnoses.**

*Bayesian.* The trouble is base rates and weak evidence. Daniel Benjamin and 71 co-authors ("Redefine Statistical Significance", *Nature Human Behaviour*, 2018) report that a two-sided $p$ near 0.05 corresponds to [Bayes factors](../reference.md#bayes-factor) of only about 2.5 to 3.4 for $H_1$ under reasonable alternatives, and $p = 0.005$ to about 14 to 26, and they cite evidence that prior odds in psychology may be only about 1:10. Their proposal is [a lower threshold](../reference.md#lowering-the-significance-threshold): 0.005 for claims of new discoveries, with results between 0.005 and 0.05 called "suggestive"; keeping 80 percent power then needs about 70 percent more subjects.

*Error-statistical.* The fault is not the method but that selection effects (hunting, in Mayo's usage, not 3.2's) destroyed its supposed capacities; a hunted result was not tested severely, whatever its printed $p$. Mayo also objects to the screening model itself (*Statistical Inference as Severe Testing*; "High error rates in discussions of error rates", 2016). It treats a hypothesis as a random draw from an urn, which she grants for high-throughput screening and denies elsewhere. She asks which urn, and holds that even a known frequency of truths among hypotheses answers a question about screening rates, not how well this hypothesis has been probed.

*Official statements.* The ASA's 2016 statement, issued by its Board, gives six principles, among them that $p$-values do not measure the probability that the hypothesis is true. A 2019 editorial in *The American Statistician* urged dropping "statistically significant"; it is not ASA policy. The ASA president convened a Task Force over concern that it would be mistaken for policy, and that group's 2021 statement (*Annals of Applied Statistics*) says properly applied $p$-values and significance tests should not be abandoned.

**6. The live disagreement about [pre-registration](../reference.md#pre-registration).** `econometrics` 2.7 calls it "bookkeeping". On the likelihood principle, with the whole data in hand, what the analyst intended changes nothing about what they say, so pre-registration is bookkeeping in the strict sense: it records what the data are, including the data a hidden search left out. Error statistics disagrees. The plan fixes the procedure, the procedure fixes the error probabilities, and the error probabilities are what make a result evidence. Same numbers, different plan: different severity.

**Where the argument is weakest.** The premise under most pressure is that the relevant sampling distribution is fixed by what the analyst *would* have done on other data. The objection, from the [likelihood principle](../reference.md#likelihood-principle): that counterfactual is often unknowable, it depends on states of mind, and it makes two analysts with identical data report different evidence. The reply: selection is a physical feature of how the numbers came to be reported, it can be observed or pre-registered, and a standard that ignores it lets a hunted result count in full. The error statistician concedes that where the paths cannot be reconstructed she has no number. The likelihoodist or Bayesian concedes that the fix then falls on the prior, which must be low enough to do what the correction would have done, and Mayo's urn question asks where that prior comes from.

## The picture

![Two curves of the share of significant results that are true against the base rate of true hypotheses on a log axis, at alpha 0.05. The curve for power 0.9 crosses one half at a base rate of 1 in 19 and the curve for power 0.2 crosses one half at a base rate of 1 in 5.](assets/03-03-fig1.svg)

A fixed 5 percent level means different things in different fields: at low power a significant result is more likely true than not only once one tested hypothesis in five is true.

## Worked examples

**Example 1 (clean case: a field's PPV).** A field tests hypotheses of which one in five is true ($\pi = 1/5$, so $R = 1/4$), at power 0.5 and $\alpha = 0.05$. Per 1,000 hypotheses:

| | Significant | Not significant | Total |
|---|---|---|---|
| True | 100 | 100 | 200 |
| False | 40 | 760 | 800 |

So $\mathrm{PPV} = 100/140 = 5/7 \approx 0.714$, and the false discovery proportion is $2/7 \approx 0.286$ even though every test ran at 5 percent. Odds form: $\tfrac14 \times (0.5/0.05) = \tfrac14 \times 10 = 5:2$, the same answer. With $u = 0.2$, the odds become $\tfrac14 \times 0.6/0.24 = 5:8$ and $\mathrm{PPV}_u = 5/13 \approx 0.385$: from nearly three in four to under two in five.

**Example 2 (hard case: one result, two claims, and an unknown denominator).** A tutoring program is tested for a positive score gain $\mu$: $H_0: \mu \le 0$ against $\mu > 0$, with $\sigma = 12$, $n = 144$, one pre-specified outcome. The observed mean is $\bar x_{\text{obs}} = 2.4$, so the standard error is 1, $z = 2.4$, $p = 0.0082$: rejected at $\alpha = 0.025$.

| Claim | $\mathrm{SEV}$ | Reading |
|---|---|---|
| $\mu > 0$ | $\Phi(2.4) = 0.992$ | passed severely (and $1 - p$) |
| $\mu > 1$ | $\Phi(1.4) = 0.919$ | passed severely |
| $\mu > 2$ | $\Phi(0.4) = 0.655$ | weak |
| $\mu > 3$ | $\Phi(-0.6) = 0.274$ | poor |

The same result severely tests "$\mu > 1$" and not "$\mu > 3$": if $\mu$ were only 3, a mean as low as 2.4 would turn up just 27 percent of the time, so the result has not ruled that value out. Severity also separates what a $p$-value conflates: at $n = 14{,}400$ (standard error 0.1) a mean of 0.24 gives the same $z$, yet $\mathrm{SEV}(\mu > 1) \approx 1.5\times10^{-14}$ and $\mathrm{SEV}(\mu > 0.1) = 0.919$.

Now the strain. Suppose 2.4 was the best of eight independent outcomes. With no effect anywhere, the best of eight falls at or below 2.4 with probability $\Phi(2.4)^8 = 0.936$, so severity for "this outcome improved" drops to about 0.936 and the adjusted $p$ is 0.064. If nobody can say how many paths were open, there is no sampling distribution and the account stops giving a number. The error statistician says: then the claim has not passed a severe test, and that is the verdict. A Bayesian with flat priors says: the posterior that $\mu > 0$ for this outcome is 0.992 however many outcomes were searched, because this outcome's likelihood is unchanged; a sceptical prior shrinking effects toward zero does the correcting and needs no count of paths. The error statistician calls the unchanged 0.992 the symptom; the Bayesian calls it the reason the prior is where the work belongs.

## Watch out

- **You might think 36 percent replication means 36 percent of those findings were true, but actually** a replication rate mixes truth with replication power and fidelity. A failure to reach significance is not a demonstration of falsity.
- **You might think severity is the probability the claim is true, but actually** it is an error probability about the procedure: how probably the result would have been lower were the claim false. In this normal model the number equals a flat-prior posterior; the two part as soon as selection enters (Example 2).
- **You might think error statistics defends the 0.05 ritual, but actually** it rejects the binary reading: a significant result licenses only the discrepancies it passed severely, and a marginal $p$ in a huge sample may license almost none.

## One-liner

> PPV says what a significant result is worth given a field's base rate; severity says what it probed given how it was produced; the crisis looks different depending on which of those you take to be a fact about evidence.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c))*** A field has pre-study odds $R = 1:3$, and a tested hypothesis comes out significant with probability $0.6$ if true and $0.05$ if false, independently of every other test.

(a) State the likelihood ratio of a significant result, the post-study odds, the PPV as an exact fraction, and the false discovery proportion.

(b) Now let $u = 0.1$ be the proportion of analyses that would not have been findings but are reported as findings anyway. Compute $\mathrm{PPV}_u$ exactly with the printed formula, then check it by the inflated-rates route.

(c) One sentence: what does $u$ change that no single paper's printed $p$-value can show?

**P2 (🟡) *(Formal (a)–(c))*** A single pre-specified one-sided test of $H_0: \mu \le 0$ against $\mu > 0$, with $\bar X$ normal, known $\sigma = 10$, $n = 400$, and $\bar x_{\text{obs}} = 1.1$. Reject when $\bar x_{\text{obs}}$ exceeds the critical value $1.96$ standard errors above 0 ($\alpha = 0.025$).

(a) Give the standard error, $z$, the one-sided $p$, and the decision.

(b) Compute $\mathrm{SEV}(\mu > 0.25)$ and $\mathrm{SEV}(\mu > 1)$, and in one sentence each say whether the result warrants that claim (treat 0.9 or above as high, below 0.7 as poor).

(c) Find the largest $\mu_1$ with $\mathrm{SEV}(\mu > \mu_1) \ge 0.95$, and name the familiar interval endpoint it equals.

**P3 (🔴) *(Exegetical (a)–(b) · Evaluative (c))*** Find the crux. A field's published significant results replicate at a low rate. Bayesian diagnosis: most tested hypotheses were implausible and $p$-values near 0.05 carry little evidence. Error-statistical diagnosis: flexible, selected analyses destroyed the capacity of the tests to find flaws. Both agree the literature cannot be taken at face value.

(a) One sentence each: state each diagnosis's account of why the published results fail, and the remedy that follows from it.

(b) Two sentences: name the single premise that separates them, and say which side must deny it. Use Example 2's eight-outcome search to make the premise concrete.

(c) 150 words or fewer: say what argument or evidence could move someone on that premise, and what each side would have to concede if it moved.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c))*

(a) Likelihood ratio of a significant result $= 0.6/0.05 = 12$. Post-study odds $= \tfrac13 \times 12 = 4$, i.e. $4:1$, so $\mathrm{PPV} = 4/5 = 0.8$ and the false discovery proportion is $1/5$. Check with the printed formula: $\dfrac{0.6 \times 1/3}{1/3 - 0.4/3 + 0.05} = \dfrac{0.2}{0.25} = 0.8$.

(b) With $\beta = 0.4$, $R = 1/3$, $u = 0.1$:

$$\text{numerator} = 0.6\cdot\tfrac13 + 0.1\cdot0.4\cdot\tfrac13 = \tfrac{15}{75} + \tfrac{1}{75} = \tfrac{16}{75},$$

$$\text{denominator} = \tfrac13 + \tfrac{1}{20} - \tfrac{2}{15} + \tfrac{1}{10} - \tfrac{1}{200} + \tfrac{1}{75} = \tfrac{215}{600} = \tfrac{43}{120},$$

$$\mathrm{PPV}_u = \frac{16/75}{43/120} = \frac{1920}{3225} = \frac{128}{215} \approx 0.595.$$

Inflated-rates check: $\alpha' = 0.05 + 0.1(0.95) = 0.145$; hit rate $0.6 + 0.1(0.4) = 0.64$; odds $\tfrac13 \times \tfrac{0.64}{0.145} = \tfrac{128}{87}$; so $\mathrm{PPV}_u = \tfrac{128}{128+87} = \tfrac{128}{215}$. A tenth of analyses going astray takes the PPV from 0.8 to 0.595 (false discovery proportion $87/215 \approx 0.405$).

**Must hit, strict (c):**

- $u$ changes how the reported result was produced, so it changes the procedure's real error rates; the $p$-value printed on the page is computed as if the analysis were fixed in advance, and so looks the same whether or not bias occurred.

**Wrong turns:** using $\pi = 1/3$ for $R = 1:3$ (the base rate is $1/4$, and it is $R$ that enters the printed formula as written). Adding $u$ to $\alpha$ without the factor $(1 - \alpha)$.

---

**P2** *(Formal (a)–(c))*

(a) Standard error $= 10/\sqrt{400} = 0.5$; $z = 1.1/0.5 = 2.2$; one-sided $p = 1 - \Phi(2.2) = 0.0139$; the critical mean is $1.96 \times 0.5 = 0.98$, and $1.1 > 0.98$, so reject $H_0$.

(b) $\mathrm{SEV}(\mu > 0.25) = \Phi\!\left(\tfrac{1.1 - 0.25}{0.5}\right) = \Phi(1.7) = 0.955$: high. Were $\mu$ only 0.25, a mean as high as 1.1 would have been very unlikely, so the result has probed that discrepancy and the claim passes.

$\mathrm{SEV}(\mu > 1) = \Phi\!\left(\tfrac{1.1 - 1}{0.5}\right) = \Phi(0.2) = 0.579$: poor. Were $\mu$ only 1, a mean as high as 1.1 would be unremarkable (it would occur 42 percent of the time), so the result does not warrant "$\mu > 1$" even though the test rejected.

(c) Set $\Phi\!\left(\tfrac{1.1 - \mu_1}{0.5}\right) = 0.95$, so $\tfrac{1.1 - \mu_1}{0.5} = 1.645$ and $\mu_1 = 1.1 - 1.645(0.5) \approx 0.278$. Severity at $\mu_1$ is decreasing in $\mu_1$, so this is the largest such value. It is the lower endpoint of the one-sided 95 percent confidence interval for $\mu$ ([`prob-stat-refresher` 4.2](../../prob-stat-refresher/lessons/04-02-confidence-intervals.md)).

**Wrong turns:** computing the upper tail $P(\bar X > 1.1; \mu = 0.25)$, which gives 0.045, a small number that reads as the opposite answer. Computing power at the cutoff instead of severity at the observed mean.

---

**P3** *(Exegetical (a)–(b) · Evaluative (c))*

**Must hit, strict (a):**

- Bayesian: low prior odds multiplied by a modest Bayes factor leave a low posterior, so a significant result never warranted belief; remedy: a stricter threshold or priors and Bayes factors in the analysis.

- Error-statistical: the published error probabilities were not the procedure's real ones because selection went unreported, so the claims passed no severe test; remedy: make the procedure auditable (pre-registration, full reporting, tests designed so that a flaw would show).

**Accept (b):** either of the following, stated as a premise one side must deny:

- that what data say about a hypothesis depends on the error probabilities of the procedure that produced them. The error statistician affirms it; the likelihoodist and the Bayesian must deny it. In Example 2 the eight-outcome search lowers severity from 0.992 to 0.936 while leaving the outcome's likelihood, and a flat-prior posterior, untouched.

- that a base rate among hypotheses bears on how well a particular hypothesis has been tested. The Bayesian affirms it; Mayo denies it. In Example 2 the base rate of working programs is what the sceptical prior brings in, and it is the feature severity does not use.

**Must hit, any verdict (c):**

- Name a consideration that bears on the premise, rather than restating a side: for example, whether selection can be reconstructed in practice, or a case where the two standards give opposite advice.

- State what the error statistician would concede if moved (that a severity number needs a procedure that can be reconstructed) and what the Bayesian would concede (that a prior which absorbs selection needs a defensible source).

**Wrong turns:** naming "they disagree about $p$-values" as the crux: both sides can compute a $p$-value. Treating the crux as settled by the replication table: the table is common ground. Awarding the win to one side in (b), which asks only for the premise.

**Model answer (c), one of several:** A case with identical data on the reported outcome, one pre-registered and one found by search, puts the premise in plain view. Someone who holds that the two reports carry the same evidence should say why the search does not matter even though it was a mechanism for producing exactly this kind of report; if she is moved, she concedes that the likelihood is not the whole story, or that a searched outcome must carry a lower prior, and she then owes a defensible source for it. Someone who holds that they differ should say how she assesses a report whose search cannot be reconstructed; if she is moved, she concedes that her account has nothing to say there, or that it can say only "not severely tested". Neither concession ends the dispute. Each shows where the work has to go.

</details>

## Flashback

**From Lesson [3.1](03-01-two-schools-of-statistical-inference.md) (Two schools of statistical inference):** *(Formal (a) · Exegetical (b).)* A numismatist assays one coin (invented, written for this problem) and gets a silver band $x$ from 1 to 5, higher meaning more silver. $H_0$: a modern fake, usually low in silver. $H_1$: a genuine issue, whose fixed fineness mostly lands in band 3.

| $x$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $P(x;H_0)$ | 0.50 | 0.30 | 0.10 | 0.06 | 0.04 |
| $P(x;H_1)$ | 0.05 | 0.15 | 0.50 | 0.20 | 0.10 |

(a) A rejection region is any set of bands fixed in advance. Among regions with $\alpha \le 0.10$, find the most powerful, with its $\alpha$ and power, and give the power of $\{4, 5\}$.

(b) The coin reads band 5. Give Fisher's $p$, taking $T = x$. One sentence each: what the rule in (a) outputs and means for Neyman; what Fisher makes of $p$; why the two come apart.

<details>
<summary>Solution</summary>

(a) By the [Neyman–Pearson lemma](../reference.md#neyman-pearson-tests), rank the bands by $P(x;H_1)/P(x;H_0)$:

$$\text{band } 1:\ \tfrac{1}{10}, \qquad 2:\ \tfrac12, \qquad 3:\ 5, \qquad 4:\ \tfrac{10}{3}, \qquad 5:\ \tfrac52.$$

Band 3 uses the whole level, since adding band 4 would give $\alpha = 0.16$. So $R = \{3\}$, with $\alpha = 0.10$ and power $0.50$. The other nonempty regions within the level are $\{4\}$, $\{5\}$ and $\{4, 5\}$, with powers $0.20$, $0.10$ and $0.30$.

(b) $p = P(T \ge 5;\, H_0) = 0.04$.

**Must hit, strict (b):**

- Neyman: band 5 lies outside $R$, so the rule retains $H_0$: act as if the coin is fake, at known risk $\beta = 0.50$. A decision, not a finding.

- Fisher: graded evidence against $H_0$. Either it fails or a 1-in-25 coincidence has occurred; no alternative is named.

- The split: $p$ orders outcomes by $T$ under $H_0$ alone, while the rule orders them by likelihood ratio, which needs $H_1$. Band 5 is rarer than band 3 under $H_0$, yet its ratio is $\tfrac52$ against 5.

At band 3 the pair reverses: $p = 0.20$, and the rule rejects. The hybrid's equivalence of $p \le \alpha$ with landing in $R$ assumes $R$ is the upper tail of $T$.

**Wrong turns:** choosing $\{4, 5\}$ because high bands look extreme (same $\alpha$, power only 0.30). Calling 0.04 the error rate of this decision. Reading "retain" as having shown the coin is fake.

**Model answer (b):** $p = 0.04$. The rule retains $H_0$: for Neyman, act as if fake, at a 0.50 risk of so treating a genuine coin. Fisher reports that the fake hypothesis fails or a 1-in-25 coincidence occurred, with no rival named. They differ because $p$ ranks outcomes under $H_0$ alone and the rule ranks them by how much better $H_1$ predicts them.

</details>

## Connections

- **Backward:** [3.2](03-02-the-likelihood-principle.md) supplied the likelihood principle that turns "pre-registration is bookkeeping" into a real disagreement, and [2.1](02-01-popper-conjectures-and-refutations.md) gave severe tests the name that severity inherits; [3.1](03-01-two-schools-of-statistical-inference.md) said what $\alpha$ and power are.
- **Forward:** [3.4](03-04-values-and-inductive-risk.md) asks who chooses a threshold like 0.05 or 0.005, and whether that choice is a value judgment. The tools for reading a literature's credibility (funnel plots, $p$-curves, registered reports, the arithmetic of significance filtering) belong to [`empirical-political-economy`](../../empirical-political-economy/syllabus.md) 6.3.
- **Sideways:** the replication crisis is specification search at the scale of a discipline, in [`econometrics` 2.7](../../econometrics/lessons/02-07-multiple-testing-specification-search.md); the base-rate arithmetic is [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) and [`philosophical-method` 2.4](../../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md); the same selection effect, with held-out data as the correction, is the winner's curse in [`machine-learning` 4.1](../../machine-learning/lessons/04-01-model-selection-and-cross-validation.md).

# Philosophy of Science · Lesson 3.2: The likelihood principle

> ⏱ ~15 min · Module 3: Statistical evidence and the values of science · Builds on: [3.1](03-01-two-schools-of-statistical-inference.md), [`prob-stat-refresher` 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) · Unlocks: [3.3](03-03-replication-error-statistics-and-severe-testing.md)

## Why this matters

Two analysts share one record: ten flips of a suspect coin, 8 heads and 2 tails, the tenth flip a tail. One reports a one-sided $p$ of 0.0547 and says fairness survives at 5 percent. The other, who knows the experimenter planned to stop at the second tail, reports 0.0195 and says it does not. Neither made an arithmetic mistake. Whether that is a scandal or exactly right depends on what you think evidence is, and this lesson is where Module 3's schools collide.

## The idea

A [p-value](../reference.md#p-value) ([3.1](03-01-two-schools-of-statistical-inference.md); computed in [`prob-stat-refresher` 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md)) adds up the probability of outcomes at least as extreme as yours. Most of those outcomes never happened, and which ones count depends on the plan that produced the data. Change the plan and the set of might-have-beens changes with it.

The rival idea: to judge what data say about a parameter, ask only how well each value of it predicted what actually occurred. Two plans that yield the same heads and tails give functions of the parameter that differ by a constant, so on this view the plan is no part of the evidence.

The whole dispute in one question: are the outcomes that did not happen part of the evidence?

## The math

Notation. $P(x;\theta)$ is the sampling probability of data $x$ at a fixed parameter value $\theta$. $P(x\mid\theta)$ appears only in Bayesian passages, where $P(\cdot)$ is an ideal agent's credence (`epistemology`'s $\mathrm{cr}$).

**1. The [law of likelihood](../reference.md#law-of-likelihood)** (Ian Hacking, *Logic of Statistical Inference*, 1965; Richard Royall, *Statistical Evidence*, 1997). For simple hypotheses $H_1, H_2$ that each fix the probability of $x$:

$$x \text{ favours } H_1 \text{ over } H_2 \iff P(x;H_1) > P(x;H_2), \qquad \mathrm{LR} = \frac{P(x;H_1)}{P(x;H_2)} \text{ measures how much.}$$

*In words:* whichever hypothesis made what happened more probable is better supported, by exactly that factor. Royall separates [three questions](../reference.md#royalls-three-questions): what do I believe, what should I do, and what does this observation say about $H_1$ versus $H_2$? The law answers only the third; belief needs priors ([odds form](../../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md)) and action needs losses. A warning on names: [`philosophy-of-religion` 3.1](../../philosophy-of-religion/lessons/03-01-from-design-to-fine-tuning.md), following Elliott Sober, calls this law "the likelihood principle". Here that name belongs to the next, stronger thesis.

**2. The [likelihood principle](../reference.md#likelihood-principle).** For two experiments on the same parameter $\theta$, if outcomes $x$ and $y$ satisfy $P(x;\theta) = c\,P(y;\theta)$ for all $\theta$ and some constant $c > 0$, then $x$ and $y$ carry the same evidence about $\theta$.

*In words:* experiments whose [likelihood functions](../../prob-stat-refresher/lessons/04-01-estimation-and-mle.md) match up to a constant say the same thing. The law says how to read a likelihood function; the principle says it is all there is to read.

**3. [Stopping rules](../reference.md#stopping-rule).** A coin has $P(\text{heads}) = \theta$. Design A flips a fixed $n$ times, and the number of heads is binomial:

$$P(H = h;\theta) = \binom{n}{h}\theta^h(1-\theta)^{n-h}.$$

Design B flips until the $r$-th tail, and the number of flips $N$ has the [waiting-time negative binomial](../reference.md#waiting-time-negative-binomial) law:

$$P(N = n;\theta) = \binom{n-1}{r-1}\theta^{n-r}(1-\theta)^{r}, \qquad n = r, r+1, \dots$$

*In words:* the last flip is the $r$-th tail, and the other $r-1$ tails fall anywhere in the first $n-1$ flips. For $h$ heads and $t$ tails, both likelihoods are proportional to $\theta^h(1-\theta)^t$; the standard reference is Lindley and Phillips (1976). So the principle treats the two records as one body of evidence, while a p-value sums over two different sample spaces. Fisher's p-values and Neyman and Pearson's error rates are defined over the sample space, so they violate the principle. A likelihoodist's comparison and a Bayesian's posterior (prior times likelihood, renormalized) do not. Each camp counts that as the point.

**4. [Birnbaum's argument](../reference.md#birnbaums-argument)** (Allan Birnbaum, 1962; stated, not proved here). **Sufficiency:** outcomes with the same value of a sufficient statistic carry the same evidence. **Conditionality** (David Cox, 1958): if a random device chose which experiment to run, the evidence is that of the experiment actually run. Birnbaum claimed that together they entail the likelihood principle.

*In words:* two principles most frequentists accept seem to commit them to the one they reject. Deborah Mayo (*Statistical Science*, 2014) argues the derivation fails: data can violate the likelihood principle while honouring both premises. A. P. Dawid (2014) and Greg Gandenberger (2015) defend versions of it. Birnbaum himself came to reject the principle (1969), holding that likelihood could not control the chance of erroneous interpretation.

**5. [Optional stopping](../reference.md#optional-stopping).** Peek at a two-sided z-test on normal data, known variance, at nominal level 0.05, and stop at the first "significant" look. With $k$ equally spaced looks (Armitage, McPherson and Rowe, 1969), the chance of a false rejection is:

| looks $k$ | 1 | 2 | 5 | 10 | 20 | 100 | $\to\infty$ |
|---|---|---|---|---|---|---|---|
| actual $\alpha$ | 0.050 | 0.083 | 0.142 | 0.193 | 0.248 | 0.374 | 1 |

*In words:* the nominal level describes one look. A procedure that keeps looking has a higher error rate, and with unlimited looks it rejects a true null with certainty (the law of the iterated logarithm).

This is not Doob's [optional stopping theorem](../../probability-theory/lessons/05-04-stopping-times-optional-stopping.md), which says no quitting rule lifts a fair game's expected fortune. Here the looks are aimed at $|z|$, which is no martingale. The bridge is the likelihood ratio: if $H_2$ is true, $\mathrm{LR}_n$ after $n$ observations *is* a martingale, and Royall (1997, crediting Robbins 1970) records the consequence:

$$P\big(\mathrm{LR}_n \ge k \text{ for some } n;\ H_2\big) \le \frac1k.$$

*In words:* if $H_2$ is true, the chance the data ever favour the false $H_1$ by a factor $k$ is at most $1/k$, however long you look. On a fair coin, the chance that $\mathrm{LR}(0.7 : 0.5)$ ever reaches 8 within 4,000 flips is 0.107, under the bound 0.125, while a z-test checked after every flip from 10 to 1,000 reaches 1.96 with probability 0.466. The bound needs $H_1$ fixed in advance: maximized over $\theta$, a look with $|z| = 1.96$ already gives $\mathrm{LR} = e^{z^2/2} = 6.83$, and repeated looks eventually reach it.

**6. [Bayes factors](../reference.md#bayes-factor).** With $\pi_i$ the prior over $\theta$ inside hypothesis $H_i$,

$$B_{01}(x) = \frac{P(x\mid H_0)}{P(x\mid H_1)}, \qquad P(x\mid H_i) = \int P(x\mid\theta)\,\pi_i(\theta)\,d\theta,$$

a ratio of two [marginal likelihoods](../reference.md#marginal-likelihood). If both hypotheses are points, the integrals disappear and $B_{01}$ is the law's LR.

*In words:* how much better one hypothesis predicted the data, each prediction averaged over that hypothesis's own uncertainty.

**7. [Lindley's paradox](../reference.md#lindleys-paradox)** (Dennis Lindley, 1957, following Harold Jeffreys). Under a point null against a continuous alternative, fix $z$ and let $n$ grow: $B_{01}\to\infty$ while the p-value stays put.

*In words:* a "significant" $z$ becomes, in a large enough sample, ever stronger support for the null.

**8. [Observation selection effects](../reference.md#observation-selection-effects).** Arthur Eddington's ichthyologist (*The Philosophy of Physical Science*, 1939, ch. II) catches nothing under two inches and generalizes. Told his net cannot hold smaller creatures, he answers, in effect, that what the net cannot catch is not a fish. Eddington's own moral is "selective subjectivism": physics selects its knowledge through our sensory and intellectual equipment. Sober ("The Design Argument", 2004) turned the net into a likelihood point: if its smallest hole is 10 inches, *every fish caught exceeds 10 inches* has probability 1 on every hypothesis about the lake, so $\mathrm{LR} = 1$. How data were collected can change the likelihood itself, which is what separates a selection effect from a stopping rule. [`philosophy-of-religion` 3.2](../../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md) runs the fine-tuning case and the firing squad.

**Where the argument is weakest.** The contested step is the identification of evidence with the likelihood function, whether reached through Birnbaum or postulated. The strongest objection (Mayo, and Birnbaum's own later view): an account that cannot register optional stopping cannot say when a procedure would have produced an alarm anyway, and error probabilities are what make data a test at all. The strongest reply: error rates describe a procedure across data nobody saw, and the $1/k$ bound shows the evidence measure itself is not inflated by peeking. The likelihoodist concedes that the guarantee covers only hypotheses fixed in advance. The frequentist concedes that identical data can earn different reports depending on a plan that may never have been acted on.

## The picture

![Top panel: two curves in theta, 45 times theta to the eighth times one minus theta squared and 9 times the same expression, both peaking at 0.8, one five times the height of the other. Bottom panels: the fair-coin sampling distribution of heads under each design, with the upper tail from 8 heads shaded, giving p values 7/128 and 5/256](assets/03-02-fig1.svg)

One shape, two heights, so every comparison of two values of $\theta$ comes out the same; the designs disagree only over the red bars, which beyond the bar at 8 are outcomes neither experiment produced.

## Worked examples

**Example 1 (clean case: 8 heads, 2 tails).** Test $\theta = \tfrac12$, one-sided toward heads.

- Design A, 10 flips: $L_A(\theta) = \binom{10}{2}\theta^8(1-\theta)^2 = 45\,\theta^8(1-\theta)^2$, and $p_A = P(H\ge 8) = \frac{45+10+1}{1024} = \frac{7}{128} \approx 0.0547$.
- Design B, flip until the second tail, which came on flip 10: $L_B(\theta) = \binom{9}{1}\theta^8(1-\theta)^2 = 9\,\theta^8(1-\theta)^2$, and "more extreme" means a longer wait: $p_B = P(N\ge 10) = P(\text{at most 1 tail in the first 9 flips}) = \frac{1+9}{512} = \frac{5}{256} \approx 0.0195$.

$L_A = 5\,L_B$ at every $\theta$, so both give the estimate $\hat\theta = 0.8$ and $\mathrm{LR}(0.8 : 0.5) = 6.87$. With a flat prior, both give the posterior $\mathrm{Beta}(9,3)$ and $B_{01} = \frac{495}{1024} \approx 0.483$ for the fair coin against uniform $\theta$. The frequentist reads two procedures with two error rates, so different p-values are exactly right. The likelihoodist and the Bayesian read one body of evidence reported twice. (The Bayesian's agreement assumes the prior stays fixed: Jeffreys's rule builds a prior from the sampling model, giving $\mathrm{Beta}(\tfrac12,\tfrac12)$ under A and the improper $\mathrm{Beta}(\tfrac12,0)$ under B, so it reimports the design.)

**Example 2 (hard case: Lindley's paradox).** $H_0: \theta = \tfrac12$ against $H_1$: $\theta$ uniform on $[0,1]$. Under $H_1$ the probability of $k$ heads in $n$ flips is $\binom{n}{k}\int_0^1 \theta^k(1-\theta)^{n-k}\,d\theta = \frac{1}{n+1}$ for every $k$, so

$$B_{01} = (n+1)\binom{n}{k}2^{-n}.$$

Hold $z = (k - n/2)/\sqrt{n/4}$ at exactly 2:

| $n$ | $k$ | share $k/n$ | exact two-sided $p$ | $B_{01}$ | $P(H_0\mid x)$, prior 1:1 |
|---|---|---|---|---|---|
| 36 | 24 | 0.667 | 0.065 | 0.674 | 0.403 |
| 100 | 60 | 0.600 | 0.057 | 1.10 | 0.523 |
| 400 | 220 | 0.550 | 0.051 | 2.17 | 0.684 |
| 10,000 | 5,100 | 0.510 | 0.047 | 10.8 | 0.915 |
| 1,000,000 | 501,000 | 0.501 | 0.046 | 108 | 0.991 |

(The normal-approximation $p$ is 0.0455 in every row; the exact binomial value drifts toward it.) The same $z$ moves from favouring $H_1$ by about 1.5 to favouring $H_0$ by 108. Here the account stops giving one verdict. The Bayesian says a share of 0.501 is what $H_0$ predicts, while the uniform alternative spread its bet over every share. The frequentist replies that the prior did the work: make $H_1$ uniform on $[0.49, 0.51]$ and $B_{01}$ at $n = 10^6$ falls to 2.2; make $H_1$ the point $\theta = 0.501$ and it is 0.135. The frequentist then reports the interval $0.501 \pm 0.00098$ and lets the size of the discrepancy speak ([3.3](03-03-replication-error-statistics-and-severe-testing.md) on severity). Which prior, and whether a point null is a serious hypothesis, is where they part; the arithmetic does not decide it.

## Watch out

- **You might think the likelihood principle says how data were gathered never matters, but actually** the plan matters whenever it changes the likelihood: a net that cannot hold small fish, or a stopping rule that depends on $\theta$ beyond the data. The principle rules out only differences that leave the likelihood unchanged.
- **You might think one of the two analysts must be wrong, but actually** each computed a correct probability about her own sample space. Whether that probability is the evidence is the dispute.
- **You might think a Bayes factor simply corrects the p-value, but actually** it answers a different question and inherits the prior over the alternative: Example 2's three priors give 108, 2.2 and 0.135.

## One-liner

> Two plans can give the same likelihood and different p-values: the principle says the plan cannot matter, the frequentist says the plan is what an error rate is about, and the theorem that claimed to settle it is itself disputed.

## Problems

**P1 (🟢)** *(Formal (a) · Exegetical (b))* **Formal model.** A conservator opens a box of 12 archive tapes. $H_1$: 8 of them are corrupted; $H_2$: 3 of them are. She draws 3 tapes uniformly at random without replacement, and exactly 2 are corrupted.

(a) Compute $\mathrm{LR} = P(x;H_1)/P(x;H_2)$ exactly.

(b) One line each: what does the law of likelihood say about this result, and what is one thing it does not say?

**P2 (🟡)** *(Formal (a) · Formal and Exegetical (b))* **Formal model.** A classifier labels nine tremors, each independently correct with probability $\theta$; test $H_0: \theta = \tfrac12$. Seven labels are correct and two incorrect, the ninth label being incorrect. The designs: (i) label exactly 9 tremors; (ii) label until the second incorrect label.

(a) Compute the one-sided p-value toward *more correct labels* under each design, as exact fractions.

(b) Compute the one-sided p-value toward *more incorrect labels* under each design. In two sentences: say what you find and why it happens.

**P3 (🔴)** *(Evaluative)* **Steelman and reply.** A trial of 100 patients reports a two-sided $p = 0.04$ at its single planned analysis. After publication the lead investigator mentions that she had privately resolved to stop at patient 50 and report had that interim look been significant at nominal 0.05. It was not, so she ran to 100. Should her unspoken intention change what the data say about the treatment? Give the strongest case for each answer and say what each answer costs. Any verdict; 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) · Exegetical (b))*

(a) Hypergeometric sampling, since draws are without replacement. Both probabilities have the same denominator $\binom{12}{3} = 220$:

$$P(x;H_1) = \frac{\binom{8}{2}\binom{4}{1}}{220} = \frac{28 \cdot 4}{220} = \frac{112}{220} = \frac{28}{55}, \qquad P(x;H_2) = \frac{\binom{3}{2}\binom{9}{1}}{220} = \frac{3 \cdot 9}{220} = \frac{27}{220}.$$

$$\mathrm{LR} = \frac{112}{27} \approx 4.15.$$

**Must hit, strict (b):**

- The law says this result favours $H_1$ over $H_2$, by a factor of $112/27$.
- It does not say that $H_1$ is true or probable (that needs priors), or what to do (that needs losses); nor does it compare either to a third hypothesis, say 5 corrupted tapes.

**Wrong turns:** using sampling with replacement, which gives $\frac{4/9}{9/64} = \frac{256}{81} \approx 3.16$. Reading $\mathrm{LR} \approx 4$ as "$H_1$ is four times as likely as $H_2$", which needs a prior.

**Model answer (b):** The result favours $H_1$ over $H_2$ by a factor of $112/27 \approx 4.15$. It does not say $H_1$ is probably true, which would need priors.

---

**P2** *(Formal (a) · Formal and Exegetical (b))*

(a) Design (i), 9 labels fixed:

$$P(\text{correct} \ge 7) = \frac{\binom{9}{7} + \binom{9}{8} + \binom{9}{9}}{2^9} = \frac{36 + 9 + 1}{512} = \frac{23}{256} \approx 0.0898.$$

Design (ii), stop at the second incorrect label. "More correct labels" means a longer wait, $N \ge 9$, i.e. at most one incorrect label in the first 8:

$$P(N \ge 9) = \frac{\binom{8}{0} + \binom{8}{1}}{2^8} = \frac{9}{256} \approx 0.0352.$$

(b) Design (i): $P(\text{incorrect} \ge 2) = 1 - \frac{\binom{9}{0}+\binom{9}{1}}{512} = 1 - \frac{10}{512} = \frac{251}{256} \approx 0.980$. Design (ii): the extreme direction now means the second incorrect label came *early*, $N \le 9$. Summing the waiting-time pmf, $\sum_{m=2}^{9}(m-1)\,2^{-m} = \frac{251}{256}$, the same value.

**Must hit, strict (b):**

- The two p-values are equal in this direction, unlike in (a).
- The reason is an identity of events: "the second incorrect label arrives by label 9" and "at least two of the first 9 labels are incorrect" are the same event, so the two p-values are the probability of one event.

**Wrong turns:** assuming the two designs must disagree in every direction. In (a), counting $N \ge 9$ as "at most one incorrect in 9" rather than in the first 8: the ninth label is the one that stopped the run.

**Model answer (b):** Both p-values equal $\frac{251}{256} \approx 0.980$. They coincide because "the second incorrect label arrives by label 9" and "at least two of the first 9 are incorrect" are the same event, whereas in (a) the extreme tail ran through waits that the fixed design never contemplates.

---

**P3** *(Evaluative)*

**Must hit, any verdict:**

- State the "no" case through the likelihood: the 100 outcomes have one likelihood function whether or not an interim plan existed, so on the principle nothing about the evidence has changed.
- State the "yes" case through error rates: the procedure actually in force was a two-look plan, whose false-rejection chance at nominal 0.05 is about 0.083 (this lesson's table, $k = 2$), so the reported $p = 0.04$ misdescribes the procedure.
- Name what the "no" answer gives up: a built-in way to register that data-dependent stopping raises the false-alarm rate.
- Name what the "yes" answer gives up: identical records would carry different evidence depending on a mental state that was never acted on and that nobody can inspect.

**Wrong turns:** treating this as only an ethics question about concealment, which leaves untouched what the data say. Claiming her intention changes the likelihood (it does not, unless the rule depends on $\theta$ beyond the data). Concluding either way without naming a cost; a verdict without its cost is not the task.

**Model answer, one of several:** For "no": the data are the same 100 outcomes, and their likelihood does not depend on what she would have done at 50, a plan never executed. On the likelihood principle the intention is no more evidence about the drug than her mood. The price is an account that cannot, by itself, register that a practice of peeking raises false alarms. For "yes": a p-value describes a procedure, and she was running a two-look procedure with error rate near 0.083, so 0.04 overstates it. The price is that evidence now depends on a private resolution nobody could detect, so two identical trials can differ only in what went on in an investigator's head. Which price is worse turns on whether evidence is about these data or about the method that produced them.

</details>

## Flashback

**From Lesson [2.6](02-06-demarcation-after-popper.md) (Demarcation after Popper):** *(Exegetical (a)–(b).)* A blinded hospital trial: strangers pray for some cardiac patients, and recovery does not differ. Three letters follow (trial and letters invented, written for this problem).

> **Letter 1.** Science by its nature cannot deal with the supernatural, so this trial shows nothing either way.

> **Letter 2.** Those who say intercession changes recovery predicted a difference. None appeared, which counts against what they said.

> **Letter 3.** God answers prayer, but in ways that make no observable difference to any study.

(a) Which reading of [methodological naturalism](../reference.md#methodological-naturalism) does each of Letters 1 and 2 express, and what does each make of the null result? Two sentences.

(b) Headline: "Science shows no God answers prayer." What does Letter 3 do to the trial's reach, and does either reading license the headline? Two sentences.

<details>
<summary>Solution</summary>

**Must hit, strict (a):**

- Letter 1 is the *intrinsic* reading: science by its nature cannot deal with the supernatural, so it can rule such a cause neither in nor out, and its silence is not evidence.

- Letter 2 is the *provisory* reading, which Boudry, Blancke and Braeckman (2010) defend: the rule is evidence-based and revocable, so a supernatural claim predicting an observable difference can be tested and disconfirmed.

**Must hit, strict (b):**

- Letter 3 makes the cause one said to make no observable difference, which is beyond experiment on either reading. At most the trial reaches the claim that predicted a difference.

- Neither licenses the headline, since neither reading says whether there is such a cause.

**Wrong turns:** treating the provisory reading as metaphysical naturalism, when it is a working rule inside the sciences. Reading any letter as a verdict that prayer is pseudoscience, which none of them says. Calling Letter 3 an [immunizing strategy](../reference.md#immunizing-strategies) without asking whether the doctrine held this before the trial, as [`apologetics-foundations` 4.2](../../apologetics-foundations/lessons/04-02-evolution-design-and-the-human-person.md) says of primary causation.

**Model answer:** (a) Letter 1 is the intrinsic reading: science cannot deal with the supernatural at all, so the null result is silence, not evidence. Letter 2 is the provisory reading: a supernatural claim that predicts an observable difference can be tested, and this result counts against it. (b) Letter 3 makes the cause one with no observable difference, which is beyond experiment on either reading, so the trial reaches only the claim that predicted a difference. Neither reading licenses the headline, because neither says whether there is such a cause.

</details>

## Connections

- **Backward:** [3.1](03-01-two-schools-of-statistical-inference.md) gave the two schools and what a p-value means to each; this lesson asks what each must care about. [`prob-stat-refresher` 4.1](../../prob-stat-refresher/lessons/04-01-estimation-and-mle.md) and [4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) are the computations. The log-likelihood-ratio measure of [1.3](01-03-confirmation-as-probability-raising.md) is the law of likelihood written as a confirmation measure, and [1.6](01-06-simplicity-and-curve-fitting.md) builds the marginal likelihood a Bayes factor compares.
- **Forward:** [3.3](03-03-replication-error-statistics-and-severe-testing.md) takes up the error-statistical reply: severity as the answer to Mayo's objection above, and pre-registration as the place where the stopping-rule dispute becomes institutional.
- **Sideways:** [`philosophy-of-religion` 3.1](../../philosophy-of-religion/lessons/03-01-from-design-to-fine-tuning.md) and [3.2](../../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md) run the law of likelihood, under the other name, on design and fine-tuning. [`probability-theory` 5.4](../../probability-theory/lessons/05-04-stopping-times-optional-stopping.md) owns the martingale theorem that shares a name with optional stopping here. [`econometrics` 2.7](../../econometrics/lessons/02-07-multiple-testing-specification-search.md) lists when to stop collecting data among the researcher degrees of freedom, and [`planetary-science` 6.2](../../planetary-science/lessons/06-02-demographics-selection-effects.md) treats selection effects as routine survey science.

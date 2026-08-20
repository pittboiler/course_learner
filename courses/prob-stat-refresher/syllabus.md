# Probability & Statistics — Syllabus

> Tier 0 · 13 lessons · Prereqs: [`calc-refresher`](../calc-refresher/syllabus.md) · Roadmap id: `prob-stat-refresher`

## Goal

Build probabilistic fluency — reasoning correctly about uncertainty — and then the inference that turns data into claims. Covers the probability axioms and Bayes, random variables with their expectations and named distributions, the two limit theorems (LLN and CLT) that make statistics work, and the core of inference: estimation, confidence intervals, and hypothesis testing. This is the foundation for `game-theory-refresher`, `probability-theory` (the measure-theoretic sequel), and every empirical field. Deliberately skipped: measure-theoretic foundations (that's `probability-theory`), heavy combinatorics, and the zoo of specialized tests beyond the ones that teach the logic.

## Dangerous Checklist

When you finish, you can:

- [ ] Use the probability axioms and counting to compute event probabilities
- [ ] Apply conditional probability and Bayes' theorem, and avoid the base-rate fallacy
- [ ] Describe a random variable by its pmf/pdf and CDF
- [ ] Compute expectation, variance, and moments, and use their linearity rules
- [ ] Recognize and use the standard discrete distributions (Bernoulli, binomial, geometric, Poisson)
- [ ] Work with continuous distributions (uniform, exponential, normal), integrating densities for probabilities
- [ ] Handle joint distributions: covariance, correlation, and independence
- [ ] State and apply the Law of Large Numbers and the Central Limit Theorem
- [ ] Estimate a parameter (including by maximum likelihood) and describe its sampling distribution
- [ ] Construct and interpret a confidence interval
- [ ] Run a hypothesis test and interpret a p-value honestly
- [ ] Say why $s^2$ divides by $n-1$, and where the chi-square and $t$ distributions come from

## Modules

### Module 1: Probability foundations

The rules of uncertainty, and the one theorem people get wrong.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Sample spaces, events, and the axioms | Model an experiment and compute probabilities by the rules and by counting | sample space, event, axioms, equally likely outcomes, counting |
| 1.2 | Conditional probability, independence, and Bayes | Update beliefs on evidence and dodge the base-rate trap | conditional probability, independence, law of total probability, Bayes' theorem |
| 1.3 | Random variables and their distributions | Attach numbers to outcomes and describe them with pmf/pdf and CDF | random variable, pmf/pdf, CDF, discrete vs. continuous |

**Boss problem 1:** A diagnostic-test (or spam-filter) scenario — apply Bayes' theorem to get the posterior probability, then show numerically how the base rate dominates the answer.

### Module 2: Expectation and the standard distributions

Summaries of a random variable, and the named families worth memorizing.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Expectation, variance, and moments | Compute the center and spread, and use linearity of expectation | expectation, linearity, variance, standard deviation, moments |
| 2.2 | The discrete family | Recognize which discrete distribution a situation calls for | Bernoulli, binomial, geometric, Poisson (and the Poisson limit) |
| 2.3 | The continuous family | Integrate densities to get probabilities; know the normal cold | uniform, exponential (memorylessness), normal, standardizing (z-scores) |

**Boss problem 2:** A queueing/arrivals scenario — model counts with Poisson and waiting times with exponential, compute an expectation and a tail probability, and connect the two distributions.

### Module 3: Dependence and the limit theorems

How variables move together, and why averages become predictable.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Joint distributions, covariance, and correlation | Handle two variables at once and quantify how they co-move | joint/marginal distributions, covariance, correlation, independence vs. uncorrelated |
| 3.2 | Sums of random variables and the Law of Large Numbers | Add random variables and see the sample mean settle down | variance of sums, i.i.d., sample mean, (weak) Law of Large Numbers |
| 3.3 | The Central Limit Theorem | Explain why the normal distribution is everywhere | CLT, normal approximation, standard error, continuity correction |

**Boss problem 3:** Use the CLT to approximate the probability that a sample mean (or a sum, e.g. total of many dice) falls in a range — with a continuity correction — and compare against the exact answer to see the approximation's quality.

### Module 4: Statistical inference

Turning data into defensible claims.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Estimation, MLE, and sampling distributions | Estimate a parameter and describe how the estimate itself varies | estimator, bias, sample mean/variance, maximum likelihood, sampling distribution |
| 4.2 | Confidence intervals | Build and correctly interpret an interval estimate | confidence interval, margin of error, $t$ vs. $z$, interpretation |
| 4.3 | Hypothesis testing | Run a test and read a p-value without fooling yourself | null/alternative, test statistic, p-value, significance, errors & power (intro) |
| 4.4 | Sampling distributions: chi-square and Student's $t$ | Justify the $n-1$ divisor and the $t$ multiplier the rest of Module 4 used on trust | degrees of freedom, unbiasedness of $s^2$, chi-square, Student's $t$, heavy tails, $t\to z$ |

**Boss problem 4:** From a sample, estimate a mean (with its MLE where relevant), build a confidence interval, and test a hypothesis about it — then state precisely what the interval and the p-value do and do not claim.

## Sources of truth

- Blitzstein & Hwang, *Introduction to Probability* (probability register, Bayes, distributions)
- Wasserman, *All of Statistics* (inference, concision, the LLN/CLT framing)
- Ross, *A First Course in Probability* (worked-example and problem style)

## Syllabus notes

- **2026-08-20 — Module 4 gained lesson 4.4 (chi-square, $s^2$, and Student's $t$).**
  The reference-card retrofit flagged two facts this course *used* but nothing in
  the library *taught*: the unbiasedness of $s^2$ under the $n-1$ divisor
  (asserted in 4.1) and Student's $t$ with its degrees of freedom (relied on by
  4.2 and 4.3). 4.4 closes both. Nothing renumbered; the course is now 13 lessons.
  Boss problem 4 is unchanged — it can now also ask *why* the $t$ multiplier is
  the one it is.

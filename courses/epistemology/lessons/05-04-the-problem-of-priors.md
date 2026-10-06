# Epistemology · Lesson 5.4: The problem of priors

> ⏱ ~15 min · Module 5: Bayesian epistemology · Builds on: [5.3 Conditionalization](05-03-conditionalization.md), [5.2 Dutch books and accuracy](05-02-dutch-books-and-accuracy.md), [4.3 Answering Hume](04-03-answering-hume.md) · Unlocks: [5.5 Bayesian disagreement and higher-order evidence](05-05-bayesian-disagreement-and-higher-order-evidence.md)

## Why this matters

Lessons 5.2 and 5.3 gave two norms with real arguments behind them: credences should be probabilities, and on learning $E$ they should move by [strict conditionalization](../reference.md#strict-conditionalization). Grant both, and an agent's whole future opinion is fixed by two things: what she learns, and the credences she started with. The norms say nothing about the second. Two coherent conditionalizers who see the same evidence can end anywhere, if they started far enough apart. [4.2](04-02-humes-problem-of-induction.md) found that Hume's problem, put in probabilities, moves into the prior. This lesson asks what, if anything, constrains a prior, and tests the three standard answers: nothing beyond coherence, a principle of indifference, and "it washes out".

## The idea

Notation. $\mathrm{cr}(A)$ is an agent's credence in $A$; a **prior** is her credence function before the evidence at issue arrives; $\Pr$ is objective probability (chance). The [subjective and objective Bayesian](../reference.md#subjective-and-objective-bayesianism) positions split on how much more than coherence a prior must satisfy.

- **Subjective Bayesianism** (de Finetti, Savage; Jeffrey and van Fraassen in this camp): any coherent prior is permissible. Rationality governs how you move, not where you start. The best defenders add that this is not "anything goes", because a probabilistic prior already rules out a great deal and shared evidence pulls coherent agents together.
- **Objective Bayesianism** (Harold Jeffreys, Carnap, E. T. Jaynes's maximum entropy, and more recently Jon Williamson): coherence is too weak. Where evidence does not favour one possibility, credence should be spread as evenly as the evidence permits, and known chances must be respected. Its defenders' point is that science's objectivity cannot rest on a permission to start anywhere.

Three candidate constraints are on the table. **Indifference** says what to do with no evidence. The **principal principle** says what to do with evidence about chances. **Merging of opinions** says that, given enough shared evidence, it may not matter.

## The math

**1. The principle of indifference.** Keynes named it (*A Treatise on Probability*, 1921), and it descends from Laplace's classical theory of probability (it is also called the principle of insufficient reason).

$$\text{If the evidence favours none of } A_1,\dots,A_n \text{ over another, then } \mathrm{cr}(A_i) = \tfrac{1}{n} \text{ for each } i.$$

*In words:* with no reason to prefer one possibility over another, give them equal credence. For a continuous quantity, the principle says to spread credence uniformly over its range: the [principle of indifference](../reference.md#principle-of-indifference).

The trouble is that "the possibilities" can be described in more than one way. Joseph Bertrand's chord paradoxes (*Calcul des probabilités*, 1889) made the point for geometry. Bas van Fraassen's [cube factory](../reference.md#cube-factory) (*Laws and Symmetry*, 1989) makes it with nothing but a cube. A factory makes cubes with side length $s$ between 0 and 1 foot; you know nothing else. How likely is $s \le \tfrac12$?

- Indifferent over side length, $s$ uniform on $(0,1]$: $\mathrm{cr}(s \le \tfrac12) = \tfrac12$.
- Indifferent over face area, $s^2$ uniform on $(0,1]$: $s \le \tfrac12$ iff $s^2 \le \tfrac14$, so $\mathrm{cr} = \tfrac14$.
- Indifferent over volume, $s^3$ uniform on $(0,1]$: $s \le \tfrac12$ iff $s^3 \le \tfrac18$, so $\mathrm{cr} = \tfrac18$.

*In words:* one event, three equally "ignorant" descriptions, three credences. The principle, applied to every description, demands credences no probability function can have. The discrete case is no safer: [decision-theory 3.3](../../decision-theory/lessons/03-03-decisions-under-ignorance.md) showed the Laplace rule changing its verdict when one column is split in two, Keynes's own urn of unknown composition, which indifference assigns one half, is the puzzle [decision-theory 3.1](../../decision-theory/lessons/03-01-the-ellsberg-paradox.md) raises for Ellsberg; an urn of unknown colours gets credence $\tfrac12$ in "red" under the partition red/not-red and $\tfrac13$ under red/white/black.

**2. The principal principle** (David Lewis, "A Subjectivist's Guide to Objective Chance", 1980). For a reasonable initial credence function $\mathrm{cr}$, a proposition $A$, a chance value $x$, and evidence $E$ that is **admissible** (it bears on $A$ only by bearing on $A$'s chance):

$$\mathrm{cr}\big(A \mid \Pr(A) = x \wedge E\big) = x.$$

*In words:* if you knew the chance of $A$ were $x$, your credence in $A$ should be $x$, unless you have information that goes around the chance, such as a reliable report of the outcome. The [principal principle](../reference.md#principal-principle) is accepted by subjectivists and objectivists alike. It constrains priors only where chances are in play and known, so it leaves the cube factory exactly where it was.

**3. Merging of opinions.** David Blackwell and Lester Dubins ("Merging of Opinions with Increasing Information", 1962) proved, roughly: if two agents' priors over the possible infinite data sequences are **mutually absolutely continuous** (each gives probability zero to exactly the events the other does), and both conditionalize on the same growing data, then each is certain that their predictions about the future will become arbitrarily close. Haim Gaifman and Marc Snir (1982) proved related results for credences over rich languages. This is [merging of opinions](../reference.md#merging-of-opinions).

A concrete case with a proof. Let $\theta$ be an unknown success rate and let an agent's prior be the beta distribution $\mathrm{Beta}(a,b)$ with $a,b > 0$, whose mean is $a/(a+b)$; think of it as $a$ phantom successes and $b$ phantom failures. After $h$ successes in $n$ trials, conditionalization gives posterior mean $m = (a+h)/(a+b+n)$ ([prob-stat-refresher 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) for Bayes' theorem). Then

$$m - \frac{h}{n} = \frac{a n - (a+b)h}{n(a+b+n)}.$$

Since $0 \le h \le n$, the numerator lies between $-bn$ and $an$, so

$$\left| m - \frac{h}{n} \right| \le \frac{\max(a,b)}{a+b+n}.$$

*In words:* every beta prior's estimate is pinned within $\max(a,b)/(a+b+n)$ of the observed frequency, so any two such agents' estimates differ by at most the sum of their bounds, which goes to zero as $n$ grows.

The limit has a hard edge. By Bayes' theorem, $\mathrm{cr}(H \mid E) = \mathrm{cr}(E \mid H)\,\mathrm{cr}(H)/\mathrm{cr}(E)$, so if $\mathrm{cr}(H) = 0$ then $\mathrm{cr}(H \mid E) = 0$ for every $E$ with $\mathrm{cr}(E) > 0$. *In words:* a hypothesis given credence zero can never be learned by conditionalizing.

**Grue as a priors problem.** A prior that treats "all emeralds are green" and "all emeralds are [grue](../reference.md#grue)" alike will conditionalize the same green emeralds into opposite forecasts for unexamined ones, because every observation so far has the same likelihood under both. Conditionalization cannot break the tie; only the prior can, which is why [`philosophy-of-science`](../../philosophy-of-science/syllabus.md) 1.2 treats the new riddle partly as a question about priors.

**Where the argument is weakest.** The convergence answer rests on its conditions, and each is where real disagreement lives. Mutual absolute continuity requires the two agents to agree, in advance, on which hypotheses are possible at all; read at the level of hypotheses, it requires shared likelihoods, so it does not cover agents who model the data differently; and it delivers agreement in the limit, with each agent certain of merging *by her own lights* (and, in Blackwell and Dubins's form, with countable additivity assumed). The subjectivist replies that this is enough: disagreement that survives shared evidence is disagreement about possibility, which no rule of updating was ever going to settle. The objectivist replies that this concedes the point: a posterior today depends on a prior nothing rationally fixed, and "in the long run" is cold comfort for a verdict needed now.

## The picture

![Credence that a cube's side is at most s, for s from 0 to 1 foot, under three priors. Uniform on side length gives a straight line, uniform on face area gives s squared, uniform on volume gives s cubed. A dashed vertical line at s equals one half crosses them at one half, one quarter and one eighth](assets/05-04-fig1.svg)

The three curves agree only at the endpoints. "Know nothing about the cube" does not pick one.

## Worked examples

**Example 1 (clean case: two beta priors merge).** Two horticulturists, Priya and Wen, estimate the germination rate $\theta$ of a new seed stock. Priya's prior is $\mathrm{Beta}(1,1)$, uniform, mean $\tfrac12$. Wen trusts the supplier's catalogue: $\mathrm{Beta}(9,1)$, mean $0.9$. Both see the same trials, with 60 percent germinating:

| Trials $n$ | Germinated $h$ | Priya $\frac{1+h}{2+n}$ | Wen $\frac{9+h}{10+n}$ | Gap |
|---|---|---|---|---|
| 0 | 0 | 0.5 | 0.9 | 0.4 |
| 20 | 12 | 13/22 ≈ 0.591 | 21/30 = 0.7 | 0.109 |
| 200 | 120 | 121/202 ≈ 0.599 | 129/210 ≈ 0.614 | 0.015 |
| 2,000 | 1,200 | 1201/2002 ≈ 0.5999 | 1209/2010 ≈ 0.6015 | 0.0016 |

The bound predicts it: Wen is within $9/(10+n)$ of the observed 0.6, which is $0.3$ at $n=20$ and about $0.0045$ at $n = 2{,}000$. Two coherent starting points, wildly apart, become indistinguishable for practical purposes. This is the subjectivist's best case.

**Example 2 (hard case: a zero prior never recovers).** Suppose the stock's rate is one of 0.4, 0.6, 0.8. Priya gives each $\tfrac13$. Wen, sure the catalogue cannot be that wrong, gives 0.4 credence zero and splits the rest evenly. In 20 trials, 8 germinate. The likelihood ratio of 0.4 to 0.6 is

$$\left(\frac{0.4}{0.6}\right)^{8} \left(\frac{0.6}{0.4}\right)^{12} = \left(\frac32\right)^{4} \approx 5.06,$$

and of 0.8 to 0.6 it is $(4/3)^8 / 2^{12} \approx 0.0024$. Priya's posterior is about $(0.835,\ 0.165,\ 0.0004)$, predicting 0.433 for the next seed. Wen's is $(0,\ 0.998,\ 0.002)$, predicting 0.600. After 40 of 100, Priya is at 0.9997 on 0.4 and predicts 0.400; Wen is at certainty on 0.6, the hypothesis the data most favour *among those she allowed*. Her zero is permanent, so the theorem's mutual-continuity condition fails and nothing guarantees merging. The convergence answer does not stop here with a wrong verdict; it stops giving one.

## Watch out

- **You might think the principle of indifference is a neutral default, but actually** it is neutral only relative to a choice of variable or partition, and that choice is not given by ignorance. Defenders such as Jaynes try to fix the choice by symmetry (invariance under the problem's transformations), and the cube factory is the standard test of whether such symmetry is always available.
- **You might think merging means priors don't matter, but actually** the theorem governs agents who already agree on what is possible and on the likelihoods, and only in the limit. At any finite $n$, Example 1's gap is real, and Example 2's never closes.
- **You might think subjectivism lets any belief count as rational, but actually** it constrains priors by coherence and the principal principle and fixes every later step by conditionalization. Its permissiveness is about the starting point only.

## One-liner

> Coherence and conditionalization fix how you learn but not where you start; indifference picks a start only after you pick a description, and convergence rescues you only from priors that already agree on what is possible.

## Problems

**P1 (🟢) *(Formal (a)–(c))*** A test car covers a 1 km track at an unknown constant speed $v$ between 50 and 100 km/h, so its lap time is $t = 3600/v$ seconds, between 36 and 72. You know nothing else.

(a) Applying indifference to speed ($v$ uniform on $[50, 100]$), find $\mathrm{cr}(v \le 75)$.

(b) Applying indifference to lap time ($t$ uniform on $[36, 72]$), find $\mathrm{cr}(v \le 75)$.

(c) For a cutoff $x$ in $[50, 100]$, write each prior's $\mathrm{cr}(v \le x)$ as a function of $x$, and find every $x$ at which they agree.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c))*** Three archivists estimate the proportion $\theta$ of letters in a collection that carry a date. Ada's prior is $\mathrm{Beta}(2,2)$; Bram's is $\mathrm{Beta}(1,9)$. Carys is sure most letters are undated: her prior is uniform on $[0, \tfrac12]$ and zero above.

(a) A sample of 50 letters has 30 dated; a later sample of 500 has 300 dated. Give Ada's and Bram's posterior means after each, and the gap between them.

(b) For any sample, what is Carys's posterior credence that $\theta > \tfrac12$? Show that when the observed frequency $h/n$ exceeds $\tfrac12$, her posterior density on $[0, \tfrac12]$ is increasing, and say where her posterior mean goes as $n$ grows with $h/n$ fixed at 0.6.

(c) In two sentences: which condition of the Blackwell–Dubins theorem holds between Ada and Bram but fails between Ada and Carys?

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b))*** Read this invented memo from a hospital's analytics lead.

> "Our team should stop arguing about priors. With enough data, everyone's prior washes out, so the choice is a formality. And when data are scarce, we use a flat prior over the parameter, which is objective because it favours no outcome."

(a) The memo makes two claims. For each, name the result or principle it relies on and one condition the claim needs that the memo does not mention. Two sentences per claim.

(b) Is a flat prior over the parameter "objective"? Give the strongest case for each answer and say what each costs. Any verdict; 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c))*

(a) $\mathrm{cr}(v \le 75) = \dfrac{75 - 50}{100 - 50} = \dfrac12$.

(b) $v \le 75$ iff $t \ge 3600/75 = 48$. With $t$ uniform on $[36,72]$: $\mathrm{cr}(t \ge 48) = \dfrac{72 - 48}{72 - 36} = \dfrac{24}{36} = \dfrac23$.

(c) Speed-uniform: $\mathrm{cr}(v \le x) = \dfrac{x - 50}{50}$. Time-uniform: $v \le x$ iff $t \ge 3600/x$, so $\mathrm{cr}(v \le x) = \dfrac{72 - 3600/x}{36}$. Set them equal and multiply through by $1800x$:

$$36x(x - 50) = 50x(72) - 180000$$

$$36x^2 - 5400x + 180000 = 0$$

$$x^2 - 150x + 5000 = 0, \quad (x - 50)(x - 100) = 0.$$

They agree only at $x = 50$ and $x = 100$, the endpoints, where both give 0 and 1. At every interior cutoff they disagree (e.g. $x = 60$: $\tfrac15$ vs $\tfrac13$; $x = 90$: $\tfrac45$ vs $\tfrac89$), the time-uniform prior always giving more credence to low speeds.

**Wrong turns:** in (b), using $t \le 48$ (a slower car takes *longer*, so $v \le 75$ is $t \ge 48$, giving $\tfrac13$). Treating the disagreement at 75 as a one-off rather than checking every cutoff.

---

**P2** *(Formal (a)–(b) · Exegetical (c))*

(a) Posterior mean of $\mathrm{Beta}(a,b)$ after $h$ of $n$ is $(a+h)/(a+b+n)$.

- $n = 50$, $h = 30$: Ada $32/54 = 16/27 \approx 0.593$; Bram $31/60 \approx 0.517$; gap $\approx 0.076$.
- $n = 500$, $h = 300$: Ada $302/504 = 151/252 \approx 0.599$; Bram $301/510 \approx 0.590$; gap $\approx 0.009$.

(b) Zero, for every sample: her prior gives $\theta > \tfrac12$ credence 0, and conditionalizing preserves zero ($\mathrm{cr}(H \mid E) = \mathrm{cr}(E \mid H)\,\mathrm{cr}(H)/\mathrm{cr}(E) = 0$). On $[0, \tfrac12]$ her posterior density is proportional to $L(\theta) = \theta^h (1-\theta)^{n-h}$, since her prior is flat there. Its log-derivative is

$$\frac{h}{\theta} - \frac{n-h}{1-\theta},$$

which is positive iff $\theta < h/n$. With $h/n > \tfrac12$, every $\theta$ in $[0, \tfrac12)$ satisfies this, so the density is increasing on her whole support. As $n$ grows with $h/n = 0.6$, the ratio $L(\tfrac12)/L(\theta)$ blows up for any fixed $\theta < \tfrac12$, so her mass piles up at $\tfrac12$ and her posterior mean tends to 0.5, never to 0.6. (Numerically: about 0.468 at $n = 50$, 0.495 at $n = 500$, 0.4995 at $n = 5{,}000$.)

**Must hit, strict (c):**

- Mutual absolute continuity: Ada and Bram both give positive prior probability to every interval of $(0,1)$, so they agree on what has probability zero, and their estimates converge.
- Carys gives probability zero to $\theta > \tfrac12$ where Ada does not, so the condition fails and nothing guarantees merging; here it does not happen.

**Wrong turns:** saying Carys's mean tends to 0.6 "because the data swamp the prior": data cannot move mass onto a region given zero. Naming "shared likelihoods" as the failed condition: all three use the same binomial likelihood.

---

**P3** *(Exegetical (a) · Evaluative (b))*

**Must hit, strict (a):**

- "Washes out" relies on merging-of-opinions results (Blackwell and Dubins). It needs priors that agree on which hypotheses have probability zero (mutual absolute continuity) and shared likelihoods, and it gives agreement only in the long run, not at the sample sizes in hand.
- "Flat is objective" relies on the principle of indifference. It needs a privileged parameterization: a prior flat over a parameter is not flat over a nonlinear transform of it (a rate and its square, a speed and a time), so "favours no outcome" depends on which description was chosen.

**Must hit, any verdict (b):**

- State the case for "objective": a flat prior respects the evidential symmetry the analyst actually has, and where a problem's symmetries pick out a parameter (Jaynes's invariance arguments, maximum entropy under stated constraints) the choice is not arbitrary.
- State the case against: the cube factory and Bertrand show the same ignorance yields incompatible flat priors; unless something beyond ignorance selects the parameter, "flat" encodes a choice.
- Say what each costs: the objectivist must supply the selecting principle and accept cases where none is available; the subjectivist must accept that the prior is a judgment, defended by argument, not by the label "objective".

**Wrong turns:** treating (a)'s first claim as simply false (merging is a theorem; the memo overstates its scope). Grading the flat prior as wrong because "priors are subjective": that is a verdict, not a move.

**Model answer (b), one of several:** For "objective": with no evidence distinguishing values of the parameter, spreading credence evenly encodes exactly that evidential state, and in many problems the parameter is natural, a proportion of patients, say, on which a symmetry argument settles the choice. That costs the objectivist a selection principle she must defend case by case, and cases like the cube factory where symmetry fails to pick. Against: flat over a rate is not flat over its odds or its square, so "favours no outcome" holds only for the outcomes as one description carves them; the prior expresses a modelling judgment. That costs the critic the ability to call any prior uniquely correct, and puts the burden on sensitivity analysis rather than on a principle. Either way, the memo's word "objective" is doing work it has not earned.

</details>

## Flashback

**From Lesson [5.2](05-02-dutch-books-and-accuracy.md) (Dutch books and accuracy):** *(Formal (a)–(b) · Exegetical (c).)* A harbour ferry tomorrow will be exactly one of early ($E$), on time ($O$) or late ($L$). Noor's credences are $\mathrm{cr}(E) = 0.6$, $\mathrm{cr}(O) = 0.4$, $\mathrm{cr}(L) = 0.3$. (a) Build a Dutch book against her using tickets that pay 10 dollars, and give her net in each outcome. (b) Extend 5.2's two-cell construction to three cells: set $\delta = (\text{sum of her credences} - 1)/3$ and subtract $\delta$ from each credence to get $p$. Check that $p$ is coherent, compute the Brier inaccuracy of her credences $c$ and of $p$ in each of the three worlds, and state the margin in terms of $\delta$. In one sentence, say why the margin is the same in every world. (c) A friend concludes: "So $p$ is the credence function Noor ought to adopt." Does the dominance theorem show that? Two sentences.

<details>
<summary>Solution</summary>

(a) Her prices sum to $0.6 + 0.4 + 0.3 = 1.3 > 1$, so the bookie **sells** her all three tickets: she pays $6 + 4 + 3 = 13$ dollars. Exactly one ticket pays 10.

| Outcome | Paid | Collected | Net |
|---|---|---|---|
| early | 13 | 10 | $-3$ |
| on time | 13 | 10 | $-3$ |
| late | 13 | 10 | $-3$ |

(b) $\delta = (1.3 - 1)/3 = 0.1$, so $p = (0.5,\ 0.3,\ 0.2)$: all coordinates in $[0,1]$, summing to 1, so coherent. The worlds are $w_E = (1,0,0)$, $w_O = (0,1,0)$, $w_L = (0,0,1)$.

$$B(c, w_E) = 0.4^2 + 0.4^2 + 0.3^2 = 0.41, \qquad B(p, w_E) = 0.5^2 + 0.3^2 + 0.2^2 = 0.38$$

$$B(c, w_O) = 0.6^2 + 0.6^2 + 0.3^2 = 0.81, \qquad B(p, w_O) = 0.5^2 + 0.7^2 + 0.2^2 = 0.78$$

$$B(c, w_L) = 0.6^2 + 0.4^2 + 0.7^2 = 1.01, \qquad B(p, w_L) = 0.5^2 + 0.3^2 + 0.8^2 = 0.98$$

The margin is $0.03 = 3\delta^2$ in every world, so $p$ strictly dominates $c$. Why constant: $c - p = (\delta, \delta, \delta)$ is perpendicular to the plane of coherent credences (coordinates summing to 1), which contains $p$ and every world, so Pythagoras gives $B(c, w) = B(p, w) + 3\delta^2$ for each $w$.

**Must hit, strict (c):**

- No. The theorem shows only that $c$ is dominated, and $p$ is not the only coherent function that dominates it: $(0.51,\ 0.30,\ 0.19)$ scores $0.3662$, $0.7862$, $1.0062$, also below $c$ in every world.
- More basically, the theorem rules out incoherence and nothing else; which coherent credences to hold is left open, and that is this lesson's problem of priors.

**Wrong turns:** in (a), buying the tickets from her, which would hand her a sure gain of 3 (the bookie trades against the overcount); in (b), subtracting $\delta = 0.3$ (the whole excess) from each credence, which gives a negative coordinate; in (c), treating the perpendicular foot as uniquely recommended because it is the closest coherent point.

</details>

## Connections

- **Backward:** [5.3](05-03-conditionalization.md) fixed the update rule, which is why everything left open lives in the prior. [4.2](04-02-humes-problem-of-induction.md) showed indifference over patterns and indifference over a rate giving opposite inductive verdicts, and [4.3](04-03-answering-hume.md) left Hume's problem open; this lesson relocates it to the choice of prior and names grue there. [5.2](05-02-dutch-books-and-accuracy.md)'s coherence norms are the only constraint subjectivists insist on.
- **Forward:** [5.5](05-05-bayesian-disagreement-and-higher-order-evidence.md) asks what agents with different priors should do when they meet before the data can wash anything out. [`philosophy-of-science`](../../philosophy-of-science/syllabus.md) uses priors for grue and simplicity; [`philosophy-of-religion`](../../philosophy-of-religion/syllabus.md) meets the problem whenever an argument for or against God needs a prior, and the fine-tuning argument's uniform distribution over a constant's range is a principle-of-indifference move.
- **Sideways:** [statistical-learning 2.5](../../statistical-learning/lessons/02-05-regularization-as-a-bayesian-prior.md) reads a regularization penalty as a prior, an inductive bet chosen before the data. The Laplace rule in [decision-theory 3.3](../../decision-theory/lessons/03-03-decisions-under-ignorance.md) is indifference applied to action.

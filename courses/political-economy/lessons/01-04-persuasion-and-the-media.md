# Political Economy · Lesson 1.4: Persuasion and the media

> ⏱ ~15 min · Module 1: Voters - preferences, turnout and information · Builds on: [1.3 Rational ignorance and the swing voter's curse](01-03-rational-ignorance-and-the-swing-voters-curse.md), [`grad-game-theory` 4.5](../../grad-game-theory/lessons/04-05-signaling-games-refinements.md) · Unlocks: [2.1 The Downsian spatial model](02-01-the-downsian-spatial-model.md), [4.2 Career concerns and pandering](04-02-career-concerns-and-pandering.md), [4.4 Regulatory capture](04-04-regulatory-capture.md)

## Why this matters

[1.3](01-03-rational-ignorance-and-the-swing-voters-curse.md) took voters' information as given. It is not given. Governments choose which audits to commission, campaigns choose which polls to release, agencies choose how a pilot program is evaluated. This lesson asks how much a designer of information can move a fully rational electorate, and answers exactly: the [Bayesian persuasion](../reference.md#bayesian-persuasion) model of Emir Kamenica and Matthew Gentzkow ("Bayesian Persuasion," *American Economic Review*, 2011). It then turns to the outlets that carry the information and asks why news slants.

## The idea

A city wants voters to approve a rail line. Voters think it pays off with probability 2/5 and will approve only if they become 4/5 sure. The city cannot lie and cannot change what voters believe *on average*: a rational voter's expected posterior equals her prior. What the city can do is choose the *test*.

Full disclosure (a perfect test) gets approval only when the line truly pays off: probability 2/5. Silence gets nothing. But a test that always passes a good line, and passes a bad one some of the time, creates a "pass" that leaves voters exactly 4/5 sure. That is just enough to approve. Every bit of extra certainty spent on the "pass" is wasted, so the designer spends none. The trick is to pool as many bad states as possible with the good ones, subject to the pass still clearing the bar.

The catch is commitment. The test must be fixed *before* anyone knows the result. A minister who decides what to say after seeing the data is in a different game, and there, as we will prove, she persuades no one.

## The model

**Players and timing.**

1. The state is $\omega \in \{G, B\}$ (the project is good or bad), with common prior $\mu = \Pr(G)$.
2. The sender (government, campaign, agency) publicly commits to a *signal*: a finite set of messages $M$ and probabilities $\pi(m \mid \omega)$.
3. Nature draws $\omega$, then $m$ from $\pi(\cdot \mid \omega)$.
4. The receiver (here the decisive voter; [1.1](01-01-from-ballots-to-policy-space.md) is why one voter can stand in for a majority) sees $\pi$ and $m$, forms the posterior $\mu'(m) = \Pr(G \mid m)$ by Bayes's rule, and approves or rejects.

Common knowledge: the prior and the signal. **Payoffs.** Approval pays the receiver $1 - \mu^*$ if $G$ and $-\mu^*$ if $B$; rejection pays 0. So approval is worth $\mu' - \mu^*$ in expectation and she approves iff $\mu' \ge \mu^*$, with ties broken toward approval (Kamenica–Gentzkow's sender-preferred convention). The sender gets 1 from approval in either state. Assume $\mu < \mu^*$: uninformed, the voter rejects.

**Lemma 1 ([Bayes plausibility](../reference.md#bayes-plausibility)).** For any signal, $\sum_m \Pr(m)\, \mu'(m) = \mu$.

*In words:* information can spread beliefs out, but it cannot move their average.

*Proof.* $\Pr(m)\,\mu'(m) = \Pr(m, G) = \mu\,\pi(m \mid G)$. Summing over $m$ gives $\mu \sum_m \pi(m \mid G) = \mu$. ∎

Kamenica–Gentzkow also prove the converse: any distribution of posteriors averaging to $\mu$ is produced by some signal. So the designer may choose posteriors directly, subject only to the mean.

**Theorem (threshold receiver).** The maximal approval probability is $\mu / \mu^*$. It is attained by the signal with messages $\{g, b\}$ that sends $g$ always in state $G$ and with probability

$$q = \frac{\mu\,(1-\mu^*)}{(1-\mu)\,\mu^*}$$

in state $B$.

*In words:* you can get approval with probability prior over threshold, and no more, by passing every good project and just enough bad ones that a pass leaves the voter exactly at her bar.

*Proof.*

1. Let $A$ be the set of messages after which the voter approves, and $a = \Pr(A)$. On $A$, $\mu'(m) \ge \mu^*$ (her decision rule); off $A$, $\mu'(m) \ge 0$.
2. By Lemma 1, $\mu = \sum_m \Pr(m)\mu'(m) \ge \sum_{m \in A} \Pr(m)\mu'(m) \ge a\,\mu^*$. Hence $a \le \mu/\mu^*$.
3. For the stated signal, $\Pr(g) = \mu + (1-\mu)q = \mu/\mu^*$ (substitute $q$), and $\mu'(g) = \mu/\Pr(g) = \mu^*$, so the voter approves after $g$. After $b$, which only state $B$ sends, $\mu'(b) = 0$. Since $\mu < \mu^*$, $q < 1$. The bound is attained. ∎

**Corollary.** Under this signal the voter's expected payoff is $\Pr(g)(\mu^* - \mu^*) = 0$, exactly her payoff with no information. Full disclosure would give her $\mu(1-\mu^*) > 0$. The sender captures all the value of the information.

**The general result: [concavification](../reference.md#concavification).** Let $\hat v(\mu')$ be the sender's expected payoff when the receiver holds posterior $\mu'$ (here a step: 0 below $\mu^*$, 1 from $\mu^*$ on). Its *concave closure* $V$ is the smallest concave function lying above $\hat v$. Kamenica and Gentzkow show that the value of an optimal signal is $V(\mu)$, and that the sender gains from persuasion iff $V(\mu) > \hat v(\mu)$.

*In words:* draw the sender's payoff as a function of the voter's belief, stretch a tight rubber band over it from above, and read the band's height at the prior.

The proof is Lemma 1 plus its converse: the achievable payoffs are exactly the averages of $\hat v$ over distributions of posteriors with mean $\mu$, and the best such average is the upper envelope of the convex hull of the graph. In our case $V(\mu') = \min(\mu'/\mu^*, 1)$, which is the Theorem.

**No commitment: [cheap talk](../reference.md#cheap-talk).** Now let the sender observe $\omega$ first and then send any message, costlessly, with no commitment. This is the setting of Vincent Crawford and Joel Sobel ("Strategic Information Transmission," *Econometrica*, 1982), which [`grad-game-theory` 4.5](../../grad-game-theory/lessons/04-05-signaling-games-refinements.md) notes as the costless extreme of signaling. Solution concept: perfect Bayesian equilibrium ([`grad-game-theory` 4.4](../../grad-game-theory/lessons/04-04-perfect-bayesian-sequential-equilibrium.md)).

**Lemma 2.** If $\mu < \mu^*$ and the sender wants approval in both states, every equilibrium has approval probability 0.

*Proof.*

1. Let $\alpha(m)$ be the voter's approval probability after message $m$. Both sender types want to maximize $\alpha$, so every message either type sends with positive probability attains the same value $\bar\alpha = \max_m \alpha(m)$.
2. If $\bar\alpha > 0$, the voter approves with positive probability after every message sent, so every on-path posterior is at least $\mu^*$.
3. By Lemma 1 (which holds for any strategy profile), the posteriors average to $\mu < \mu^*$. Contradiction. So $\bar\alpha = 0$. ∎

*In words:* a sender whose message is chosen after the facts, and who wants the same thing whatever the facts, is not believed. Babbling is all that is left.

**[Media slant](../reference.md#media-slant).** News outlets are senders too, but they answer to their audience. Two demand-side models:

- Sendhil Mullainathan and Andrei Shleifer ("The Market for News," *American Economic Review*, 2005) assume readers *like* news that confirms their beliefs. Competition then lowers prices but not slant: on issues where readers agree, outlets slant the same way; on divisive issues they segment and slant toward opposite sides, though a reader of all of them could recover an accurate picture.
- Matthew Gentzkow and Jesse Shapiro ("Media Bias and Reputation," *Journal of Political Economy*, 2006) keep readers Bayesian. A reader unsure of an outlet's quality treats a report matching her prior as evidence of quality, so outlets slant toward priors to build reputation. Slant falls when the truth is revealed quickly and with competition.

A toy version of the second mechanism (the lesson's own numbers): a reader puts 3/4 on state $R$ and 1/2 on the outlet being accurate; an accurate outlet reports the truth, an inaccurate one flips a coin. A report of $R$ raises her belief in the outlet's accuracy to $\tfrac{(1/2)(3/4)}{(1/2)(3/4) + (1/2)(1/2)} = 3/5$; a report of $L$ lowers it to $1/3$. Agreeing with the reader looks like competence.

On the evidence, Gentzkow and Shapiro ("What Drives Media Slant?", *Econometrica*, 2010) find that U.S. newspapers' measured slant responds strongly to readers' politics and much less to owners'. Identification is the business of [`empirical-political-economy`](../../empirical-political-economy/syllabus.md). Supply-side slant, where the government buys the outlet, is media capture, and it belongs to [4.4](04-04-regulatory-capture.md).

**Where the argument is weakest.** The hypothesis is *commitment*: the sender fixes the test before the state is known and cannot quietly redesign or bury it. Real evaluations come close to this (a pre-registered trial, a statutory audit) or not at all (a press office). Without commitment we are in cheap talk, and Lemma 2 drives the sender's value to zero when interests conflict this sharply. Two further assumptions do work: a single receiver whose threshold the sender knows (with many voters seeing one public signal, the sender must choose whom to target; see P2), and a common prior. Drop the common prior and "persuasion" partly becomes exploiting disagreement, a different model.

## Picture

![The sender's payoff as a function of the voter's posterior. A red step is 0 for posteriors below the threshold 4/5 and 1 from 4/5 on. A blue dashed line, the concave closure, rises straight from the origin to the point at 4/5 and height 1, then stays flat. A green dotted line from the origin to the point at 1 and height 1 shows full disclosure. At the prior 2/5 the three values are 1/2 for the optimal signal, 2/5 for full disclosure and 0 for no information.](assets/01-04-fig1.svg)

Persuasion is choosing two posteriors that average to the prior. Full disclosure splits 2/5 into 0 and 1 and averages the red step along the green chord. The optimal signal splits it into 0 and 4/5, the corner of the step, and reads the blue line instead.

## Worked examples

**Example 1 (clean): the rail referendum.** $\mu = 2/5$, $\mu^* = 4/5$.

- Optimal signal: $q = \frac{(2/5)(1/5)}{(3/5)(4/5)} = \frac{1}{6}$. So $\Pr(g) = \frac25 + \frac35 \cdot \frac16 = \frac12$, and $\mu'(g) = \frac{2/5}{1/2} = \frac45$. Approval probability $1/2 = \mu/\mu^*$.
- Full disclosure: approval exactly when $G$, probability $2/5$. No information: 0.
- Voter's expected payoff: optimal signal 0, full disclosure $\frac25 \cdot \frac15 = \frac{2}{25}$, no information 0.

A script maximizing over every two-message signal on a grid of 121 by 121 probabilities finds the same maximum, 1/2. The city's best test is deliberately noisy, and it is noisy only on bad projects.

**Example 2 (the hypothesis bites): the minister who decides afterwards.** Same numbers, but the minister reads the engineers' report and then speaks. By Lemma 2, approval is 0. A grid search over two-message strategies for both sender types and the voter's responses (probabilities in steps of 1/20) finds only equilibria with approval 0. Commitment is worth exactly 1/2 to her here.

Suppose instead the report is verifiable, so she cannot fake it but can withhold it. A good-state minister always releases, since a released good report earns approval. So silence means $B$, and approval is $2/5$: full disclosure in effect. Hard evidence restores some value; only commitment to a *noisy* test restores all of it.

## Watch out

- **You might think** persuasion means deceiving voters. Actually every voter is Bayesian, knows the design, and is right on average (Lemma 1). The sender gains by choosing *which* states to pool, not by biasing beliefs.
- **You might think** the result applies whenever a government controls information. The hypothesis people drop is commitment. A press office that chooses its message after seeing the data is in cheap talk (Lemma 2), and one that can bury verifiable reports gets at most full disclosure.
- **You might think** media slant proves biased owners. Both demand-side models produce slant with profit-maximizing owners and no political agenda at all. Which force dominates in a given market is an empirical question.

## One-liner

> A sender who commits to a test can win approval with probability prior over threshold, by passing every good case and just enough bad ones to leave the voter exactly indifferent; without commitment, the same sender is ignored.

## Problems

**P1 (🟢)** *(Formal.)* A health agency wants a council to adopt a screening program that works with probability $1/3$. The council gains 1 if it adopts a working program, loses 1 if it adopts a failing one, and gets 0 if it does not adopt. The agency wants adoption in either case and commits to a trial design before the trial runs.

(a) Find the council's adoption threshold, the trial design that maximizes the probability of adoption, and that probability.
(b) What is the adoption probability under a perfectly informative trial? Explain the gap in one sentence using the concave closure.
(c) Compute the council's expected payoff under the optimal design, the perfectly informative trial and no trial.

**P2 (🟡)** *(Formal.)* A party releases one public report on its tax plan. Voters believe the plan is sound with probability $3/10$. Moderates, 60 percent of voters, back the plan iff their posterior is at least $1/2$; skeptics, 40 percent, iff it is at least $3/4$. The party commits to the report's design and maximizes the expected share of voters who back the plan.

(a) Find the maximal expected share and a design that attains it.
(b) Moderates are now 80 percent and skeptics 20 percent. Redo (a).
(c) Above what moderate share does the party target the moderates?

**P3 (🔴, optional)** *(Exegetical.)* An invented memo from a city communications office: "We should publish the full results of every safety inspection of the new bridge. Full transparency will maximize public support, since voters reward openness. And if an early inspection looks bad, we can simply hold it back until the next one comes in." In 150 words or fewer: name the model the memo relies on without saying so, say what that model implies about the first claim, and say what the last sentence does to the model's key assumption.

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) Adoption is worth $\mu'(1) + (1-\mu')(-1) = 2\mu' - 1$, so the threshold is $\mu^* = 1/2$. With $\mu = 1/3$:

$$q = \frac{(1/3)(1/2)}{(2/3)(1/2)} = \frac12.$$

Design: report "pass" whenever the program works, and with probability $1/2$ when it fails. Then $\Pr(\text{pass}) = \frac13 + \frac23 \cdot \frac12 = \frac23$ and $\mu'(\text{pass}) = \frac{1/3}{2/3} = \frac12$, so the council adopts. Adoption probability $2/3 = \mu/\mu^*$, the maximum by the Theorem (a grid search over two-message designs agrees).

(b) $1/3$: adoption only when the program works. Full disclosure splits the prior into posteriors 0 and 1 and averages the step along the chord from $(0,0)$ to $(1,1)$; the concave closure runs from $(0,0)$ to $(1/2, 1)$, which lies above that chord at the prior. Information beyond the threshold is wasted on the agency.

(c) Optimal design: after "pass" the posterior is exactly $1/2$, so adoption is worth $2 \cdot \frac12 - 1 = 0$; after "fail" the council rejects. Payoff **0**. Perfect trial: adopt only working programs, payoff $\frac13 \cdot 1 = $ **1/3**. No trial: the council rejects, payoff **0**.

**Wrong turns:** Setting $q$ so the posterior after "pass" is 1: that is full disclosure. Computing the council's payoff under the optimal design as positive because it "sometimes adopts good programs": every adoption happens at posterior exactly $1/2$, where adoption is worth nothing in expectation.

---

**P2** *(Formal, strict.)*

**Accept:** in (a) and (b), any design inducing the stated pair of posteriors with the stated probabilities.

The party's payoff as a function of the posterior: $\hat v = 0$ below $1/2$, $s$ (the moderate share) on $[1/2, 3/4)$, and 1 from $3/4$. With a binary state, two posteriors suffice, and the lower one should be 0. Splitting the prior $3/10$ into $0$ and $t$ puts probability $\frac{3/10}{t}$ on $t$.

(a) $s = 3/5$. Target $1/2$: $\frac{3/10}{1/2} \cdot \frac35 = \frac35 \cdot \frac35 = \frac{9}{25}$. Target $3/4$: $\frac{3/10}{3/4} \cdot 1 = \frac25$. Maximum **2/5**, by targeting the skeptics. Design: "sound" always if sound, and with probability $q = \frac{(3/10)(1/4)}{(7/10)(3/4)} = \frac17$ if not. Then $\Pr(\text{sound}) = \frac{3}{10} + \frac{7}{10}\cdot\frac17 = \frac25$ and the posterior is $3/4$, so everyone backs it.

(b) $s = 4/5$. Target $1/2$: $\frac35 \cdot \frac45 = \frac{12}{25}$. Target $3/4$: $\frac25$. Maximum **12/25**, by targeting the moderates: $q = \frac{(3/10)(1/2)}{(7/10)(1/2)} = \frac37$, $\Pr(\text{sound}) = \frac35$, posterior $1/2$. A grid search over all two-posterior splits confirms both maxima.

(c) Targeting moderates gives $\frac{\mu}{1/2}\,s = 2\mu s$; targeting skeptics gives $\frac{\mu}{3/4} = \frac{4\mu}{3}$. Moderates are targeted iff $s > 2/3$.

**Wrong turns:** Using two signals, one per bloc: the report is public, so every voter sees the same posterior. Assuming the bigger bloc is always the target: a bloc with a lower threshold is cheaper to reach but worth less, and at 60 percent the skeptics' "everyone backs it" outweighs it.

---

**P3** *(Exegetical, strict.)*

**Must hit, strict:**

- The model is Bayesian persuasion (Kamenica–Gentzkow): the office is a sender designing the information voters receive.
- On the first claim: full transparency is the perfectly informative signal, and when voters' prior is below their approval threshold it yields support with probability equal to the prior, below the prior-over-threshold that a committed noisier design achieves. "Voters reward openness" is outside the model, which has no preference for openness.
- The last sentence removes commitment: the office decides what to release after seeing the result. Rational voters who know this read a withheld report as bad news, so support falls to at most what full disclosure gives; the persuasion value needs a design fixed before results are known.

**Wrong turns:** Calling the plan deceptive and stopping there: the point is that it fails on its own terms with Bayesian voters. Treating "hold it back" as harmless delay: it is a choice made after the state is known.

**Model answer, one of several:** The memo is implicitly a Bayesian persuasion problem: the office designs the signal voters see. In that model full disclosure is not support-maximizing. If voters' prior that the bridge is safe is below the level at which they back it, full disclosure wins support only when the bridge is safe, while a committed test that also passes some unsafe states can win support with probability prior over threshold. Openness earns nothing extra unless voters value it directly, which the model does not assume. The last sentence abandons the model's key assumption, commitment: holding back bad reports is a decision made after the result is known. Bayesian voters who expect it treat silence as bad news, so the plan yields at most the full-disclosure outcome.

</details>

## Flashback

**From Lesson [1.2](01-02-turnout-and-the-paradox-of-voting.md) (Turnout and the paradox of voting):** *(Formal.)* A participation game with a lone dissenter: team A has one member, team B has three. Each player votes for her team or abstains; a win pays 1, a tie $\tfrac12$ (coin flip), a loss 0; voting costs $c = \tfrac14$; complete information. (a) Find the equilibrium in which A's member votes with probability $q_A \in (0,1)$ and each B member with the same probability $q_B \in (0,1)$. (b) Find the probability that team A wins (coin flips included) and the expected number of voters.

<details>
<summary>Solution</summary>

(a) A's vote matters when B casts 0 votes (a tie becomes a win) or 1 vote (a one-vote loss becomes a tie), each worth $\tfrac12$. Her indifference condition:

$$\tfrac12\big[(1-q_B)^3 + 3q_B(1-q_B)^2\big] = \tfrac12(1-q_B)^2(1+2q_B) = \tfrac14.$$

The left side has derivative $-3q_B(1-q_B) < 0$, so it has one root in $(0,1)$, and $q_B = \tfrac12$ is it: $\tfrac12 \cdot \tfrac14 \cdot 2 = \tfrac14$. A B member's "others" are her two teammates and A. If A abstains, she matters only when both teammates abstain (0–0). If A votes, she matters when one teammate votes (a 1–1 tie) or none does (a one-vote deficit). Her condition:

$$\tfrac12\big[(1-q_B)^2 + 2q_A q_B(1-q_B)\big] = \tfrac14.$$

At $q_B = \tfrac12$ this is $\tfrac12\big(\tfrac14 + \tfrac{q_A}{2}\big) = \tfrac14$, so $q_A = \tfrac12$. **Everyone votes with probability $\tfrac12$.** (A script finds no pure equilibrium among the 16 profiles, and no other solution with both probabilities in $(0,1)$.)

(b) All 16 profiles are equally likely. A wins outright only if she votes and no B member does: $\tfrac{1}{16}$. A tie happens if she votes and exactly one B member does ($\tfrac{3}{16}$) or nobody votes ($\tfrac{1}{16}$): $\tfrac14$. So A's side wins with probability $\tfrac{1}{16} + \tfrac12 \cdot \tfrac14 = \tfrac{3}{16}$. Expected voters: $\tfrac12 + 3 \cdot \tfrac12 = 2$ of 4.

**Wrong turns:** Solving each side's condition for its *own* probability. A's indifference pins $q_B$ and B's pins $q_A$: each side mixes so as to keep the *other* side indifferent. Counting only ties: A's condition becomes $\tfrac12(1-q_B)^3 = \tfrac14$ and gives the wrong $q_B$.

</details>

## Connections

- **Backward:** [1.3](01-03-rational-ignorance-and-the-swing-voters-curse.md) asked what a voter does with the information she has; this lesson asks who designs it. Signaling with costly messages is [`grad-game-theory` 4.5](../../grad-game-theory/lessons/04-05-signaling-games-refinements.md); this lesson's Lemma 2 is that lesson's costless extreme, and the equilibria are perfect Bayesian ([4.4](../../grad-game-theory/lessons/04-04-perfect-bayesian-sequential-equilibrium.md)).
- **Forward:** [4.2](04-02-career-concerns-and-pandering.md)'s pandering politicians face voters who read actions as signals, the reverse direction of persuasion; [4.4](04-04-regulatory-capture.md) takes up media capture by the government; [4.6](04-06-political-budget-cycles.md) asks what pre-election policy reveals about competence.
- **Sideways:** choosing a distribution of posteriors subject to Bayes plausibility is mechanism design in miniature. As in the revelation principle ([`grad-game-theory` 5.2](../../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md)), the optimal signal can use one message per action, each a recommendation the voter is willing to follow ("pass" means approve). Whether a government *should* design information this way is a question for [`political-philosophy`](../../political-philosophy/syllabus.md).

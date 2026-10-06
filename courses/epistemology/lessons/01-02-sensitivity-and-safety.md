# Epistemology · Lesson 1.2: Sensitivity and safety

> ⏱ ~15 min · Module 1: What knowledge is · Builds on: [1.1 Repairing JTB](01-01-repairing-jtb.md), [metaphysics 4.2 Counterfactual causation](../../metaphysics/lessons/04-02-counterfactual-causation.md) · Unlocks: [1.3 Why knowledge?](01-03-why-knowledge.md), [2.4 Reliabilism](02-04-reliabilism.md), [3.2 Denying closure](03-02-denying-closure.md)

## Why this matters

[1.1](01-01-repairing-jtb.md) ended with a diagnosis: in every Gettier case the belief is true by luck, and patching the *evidence* never removes the luck. The repairs in this lesson stop looking at evidence and look sideways, at other possible worlds. A belief that is only luckily true would have been false, or would have gone wrong, if things had been slightly different. Two ways of making that precise, **sensitivity** and **safety**, sound almost identical and come apart sharply. Where they come apart decides what you can say to the skeptic in Module 3 and whether you can know your lottery ticket lost.

## The idea

Henry drives through [fake barn county](../reference.md#fake-barn-case) ([1.1](01-01-repairing-jtb.md)) and happens to look at the one real barn. Two diagnoses of what went wrong:

- **His belief doesn't track the truth.** Had there been no barn there, only a façade, he would still have believed "barn". His belief would not have *noticed* the difference. That is **sensitivity**: if $p$ were false, you wouldn't believe it.
- **He could easily have been wrong.** In many situations just like his, with a façade in front of him, he believes "barn" falsely. That is **safety**: you couldn't easily have believed $p$ falsely.

Both are verdicts about **close possible worlds**: worlds that differ from the actual one only a little. You have the machinery already: a counterfactual "if $A$ were the case, $B$ would be" is true when $B$ holds in the closest worlds where $A$ holds ([metaphysics 4.2](../../metaphysics/lessons/04-02-counterfactual-causation.md), Lewis's similarity semantics; on what the worlds *are*, [metaphysics 3.2](../../metaphysics/lessons/03-02-what-possible-worlds-are.md)).

The difference: sensitivity looks only at the **nearest worlds where $p$ is false**, however far away they are. Safety looks at **all the close worlds where you believe $p$**, and asks whether $p$ is true in each.

## The argument

Write $B_M p$ for "S believes $p$ by method $M$" and $A \;\Box\!\!\rightarrow\; C$ for the counterfactual "if $A$ were the case, $C$ would be".

**Sensitivity** (Robert Nozick, *Philosophical Explanations*, 1981):

$$\neg p \;\Box\!\!\rightarrow\; \neg B_M p$$

*In words:* in the nearest worlds where $p$ is false and S uses method $M$, S does not believe $p$. Nozick's full **tracking account** says S knows $p$ iff $p$ is true, S believes it, it is sensitive, and it meets a fourth condition, adherence (if $p$ were true, S would believe it). [Card: sensitivity](../reference.md#sensitivity).

**Safety** (Ernest Sosa, "How to Defeat Opposition to Moore", 1999; Timothy Williamson, *Knowledge and Its Limits*, 2000; Duncan Pritchard, *Epistemic Luck*, 2005). Let $C$ be the set of worlds close to the actual world $@$:

$$\forall w \in C:\ B_M p \text{ at } w \;\to\; p \text{ at } w$$

*In words:* in every close world where S believes $p$ by the same method, $p$ is true. Sosa and Williamson require *all* close worlds; Pritchard's weaker version requires *nearly all*, and all of the very closest. [Card: safety](../reference.md#safety).

Safety is roughly the counterfactual $B_M p \;\Box\!\!\rightarrow\; p$, the **contrapositive** of sensitivity. For material conditionals the contrapositive is equivalent. For counterfactuals it is not: $A \;\Box\!\!\rightarrow\; C$ does not entail $\neg C \;\Box\!\!\rightarrow\; \neg A$, because the first is settled by the nearest $A$-worlds and the second by the nearest $\neg C$-worlds, which can be very different places. So the two conditions can disagree.

The case for making one of them necessary for knowledge runs on luck:

1. **Knowledge excludes luck in the truth of the belief.** *In words:* the lesson of Gettier and fake barns ([1.1](01-01-repairing-jtb.md)).
2. **A belief is luckily true iff, formed the same way, it is false in close worlds.** *In words:* luck is a modal notion: what is lucky could easily have gone otherwise.
3. **∴ A known belief is true in the close worlds where it is formed the same way (safety).**

Sensitivity replaces 2 with "a belief is luckily true iff it would still be held were it false". Note how the modal conditions meet Zagzebski's dilemma from [1.1](01-01-repairing-jtb.md): since the actual world counts among the close worlds, safety plus belief *entails* truth, so the recipe of adding good luck to a justified false belief has no foothold.

**Where the argument is weakest.** Premise 2, and specifically the word *close*. Closeness is not probability: a critic points out that an unlikely event (a bin bag snagging, a ticket winning) may happen in a world very similar to ours. Unless the safety theorist can say what makes a world close without first deciding which beliefs are knowledge, the condition is circular, and its verdicts are only as good as an ordering nobody has fully specified.

## The picture

![Two panels of concentric circles, each with the actual world at the centre and an inner disc of close worlds. Left panel, the belief that I am not a brain in a vat: every close world has the belief true, and the only world where it is false is far out, so the belief is insensitive but safe. Right panel, the belief that my ticket will lose: the world where the ticket wins lies inside the close disc, so the belief is insensitive and unsafe.](assets/01-02-fig1.svg)

Sensitivity asks about the red dot *wherever it is*. Safety asks only whether a red dot is inside the blue disc.

## Worked examples

**Example 1 (sensitivity, and why it needs methods).** Nozick's own case: a grandmother sees that her grandson is well when he visits; had he been sick or dead, the family would have told her he was well, to spare her. Run plain sensitivity: in the nearest world where he is not well, she believes he is well (on the family's say-so). Insensitive, so no knowledge. Wrong verdict: looking at a healthy grandson is a fine way to know he is well. Nozick's fix is **method-relativity**: hold fixed the method actually used. In the nearest world where he is ill *and she sees him*, she sees he is ill and doesn't believe he is well. Sensitive. [Card: method-relativity](../reference.md#method-relativity). The price arrives in [2.4](02-04-reliabilism.md): a method can be described at many grains ("looking", "looking at a relative in good light", "visual perception"), and verdicts flip with the description.

Then the case that pulls the conditions apart. Sosa's **garbage chute**: you drop a trash bag down your building's chute and believe it is now in the basement. Had it snagged on the way, you would still believe it reached the basement, so the belief is **insensitive**. But snagging doesn't happen in close worlds, Sosa holds, so the belief is **safe**, and we count it as knowledge. [Card: garbage chute case](../reference.md#garbage-chute-case). The same profile fits "I am not a brain in a vat" (left panel): insensitive, since a BIV would believe it too, but safe, since BIV worlds are remote. That divergence is the point of Sosa's title, "How to Defeat Opposition to Moore", and the reason sensitivity theorists end up denying closure ([3.2](03-02-denying-closure.md)).

Sensitivity can also over-generate knowledge. **Kripke's red barn** (published in *Philosophical Troubles*, 2011): suppose all of the county's façades are green and the one real barn is red. Henry's belief "there is a red barn" is sensitive (had it not been a red barn, he'd have been looking at a green façade and not believed it), but "there is a barn" is not. Sensitivity then says he knows there is a red barn but not that there is a barn. [Card: red barn objection](../reference.md#red-barn-objection).

**Example 2 (the lottery: probability is not safety).** Your ticket is one of $N = 1{,}000{,}000$ in a fair draw. Before the result,

$$\Pr(\text{your ticket loses}) = 1 - \tfrac{1}{N} = 0.999999.$$

Most people judge you do not *know* it lost. Sensitivity agrees: in the nearest world where it wins, you still believe it lost. Safety agrees too, on Pritchard's reading: the winning world is close, because all it takes is a few balls falling differently. Now compare reading the result in a newspaper with a misprint rate above one in a million. Intuitively that does give knowledge, and Pritchard's account says so: a misprint needs a lot to go differently, so misprint worlds are further out. [Card: lottery belief](../reference.md#lottery-belief).

Here the view strains. The verdict depends entirely on the closeness ordering, and the ordering was chosen to fit the verdict. Push on it. The world where you parked your car last night and it was stolen differs from ours by one thief's decision; is that world close? If it is, you don't know where your car is. If it isn't, why is the winning-ticket world close? Safety gives clean verdicts once you fix closeness, and stops giving them as soon as you ask how closeness is fixed.

## Watch out

- **You might think safety is just sensitivity rewritten, but** counterfactuals don't contrapose. Sensitivity consults the nearest not-$p$ worlds wherever they are; safety consults the close belief-worlds. The BIV belief passes one and fails the other.
- **You might think a highly probable belief is a safe one, but** safety is about similarity, not frequency. A one-in-a-million event can happen in a world almost exactly like ours (the lottery), and a theory that equated closeness with probability would have to count the lottery belief as known.
- **You might think sensitivity and safety assess the believer's evidence, but** they assess the world around the belief. Henry and a twin with identical experiences, driving through a county with no façades, differ in both conditions. That makes both externalist conditions, the dispute of [1.4](01-04-internalism-and-externalism.md).

## One-liner

> Sensitivity asks whether your belief would notice if it were false; safety asks whether you could easily have been wrong; the BIV belief and the garbage chute fail the first and pass the second.

## Problems

**P1 (🟢) *(Exegetical (a)-(b).)*** Nadia believes that her ferry will dock at Port Ellery ($p$), because the captain announced it. Stipulate four worlds, ranked by closeness to the actual world (rank 0); a world is **close** if its rank is 2 or less. In every world Nadia forms her belief, if at all, by the announcement.

| World | Rank | Is $p$ true? | Does Nadia believe $p$? |
|---|---|---|---|
| $W_0$ (actual) | 0 | yes | yes |
| $W_1$: engine fault, captain announces a diversion to Port Marrow | 1 | no | no |
| $W_2$: harbour closes after the announcement, ferry diverts | 2 | no | yes |
| $W_3$: captain misreads the schedule | 6 | no | yes |

(a) Is the belief sensitive? (b) Is it safe in Sosa's and Williamson's strong sense? One sentence each, naming the world(s) your verdict turns on.

**P2 (🟡) *(Evaluative.)*** Build a case in which a belief is safe (true in every close world where it is formed the same way) but is clearly not knowledge. Say why it is safe, why it is not knowledge, and what amendment to safety would exclude it. 150 words or fewer.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b) · Evaluative (c).)*** Marek holds a ticket in a fair draw of 10,000,000 tickets; the draw has happened but he hasn't seen the result. He also parked on a street where, the city reports, a parked car is stolen on about 1 night in 50,000. (a) Compute the probability that each of his beliefs "my ticket lost" and "my car is where I parked it" is true, and the ratio of their chances of error. (b) Give the sensitivity verdict on each belief. (c) A safety theorist says the ticket belief is unsafe and the car belief safe. Is the lottery verdict a feature of safety or a bug? Any verdict; 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Exegetical (a)-(b))*

**Must hit, strict (a):**

- Sensitive. The nearest not-$p$ world is $W_1$ (rank 1), and there Nadia does not believe $p$. Sensitivity consults only the nearest not-$p$ worlds, so $W_2$ and $W_3$ are irrelevant to it.

**Must hit, strict (b):**

- Not safe. $W_2$ is close (rank 2) and Nadia believes $p$ there while $p$ is false; strong safety requires truth in *every* close world where she believes. $W_3$ is irrelevant (not close).

**Wrong turns:** using $W_3$ for either verdict; calling the belief insensitive because *some* not-$p$ world has the belief ($W_2$), when only the nearest one counts. This is the reverse divergence from the BIV belief: sensitive but unsafe.

**Model answer:** (a) Sensitive: in $W_1$, the nearest world where $p$ is false, she doesn't believe $p$. (b) Unsafe: $W_2$ is a close world in which she believes $p$ falsely.

---

**P2** *(Evaluative)*

**Accept:** any case in which (i) the method is specified, (ii) the belief is true in every close world where it is formed that way, for a stated reason, and (iii) the truth is plainly not owed to the believer's cognitive grip on it.

**Must hit, any verdict:**

- Show safety is met, by naming why no close same-method world has the belief false.
- Say what is missing for knowledge (no connection between method and truth).
- Name an amendment and what it costs, e.g. require safety across *similar propositions* formed by the same method, or require the truth to be creditable to the agent's ability (forward to [2.5](02-05-virtue-epistemology.md)).

**Wrong turns:** offering an insensitive-but-safe case like the garbage chute, which Sosa counts as knowledge; building a case where the belief is false in some close world (that is unsafe, so no counterexample).

**Model answer, one of several:** Lena, who knows no number theory, guesses that $2^{61}-1$ is prime. It is (a Mersenne prime). Since a mathematical truth holds in every possible world, there is no world, close or far, in which her belief is false: it is trivially safe. But a guess is not knowledge. The amendment: safety must hold for the *method across nearby propositions*: by guessing, she would just as easily have believed $2^{59}-1$ prime, and it isn't. That restores the verdict, at the cost of having to say which propositions count as "nearby", a new closeness ordering on contents.

---

**P3** *(Formal (a) · Exegetical (b) · Evaluative (c))*

**(a) Formal.**

$$\Pr(\text{ticket lost}) = 1 - \tfrac{1}{10{,}000{,}000} = 0.9999999$$

$$\Pr(\text{car still there}) = 1 - \tfrac{1}{50{,}000} = 0.99998$$

Ratio of error chances: $\dfrac{1/50{,}000}{1/10{,}000{,}000} = 200$. The car belief is 200 times more likely to be false than the ticket belief.

**Must hit, strict (b):**

- Both insensitive. In the nearest world where his ticket won, he still believes it lost (he hasn't seen the result); in the nearest world where the car was stolen, he still believes it is where he parked it. Sensitivity treats the two alike, so if it denies the lottery knowledge, it denies the car knowledge too.

**Must hit, any verdict (c):**

- State the safety verdict and what supports it: closeness is similarity, and the winning world differs from ours only in how the balls fell.
- Face the probability fact from (a): the safe belief is the *less* probable one.
- Either defend a principled closeness ordering that separates the cases, or say what is lost by admitting the ordering is fitted to the verdicts.

**Wrong turns:** answering that the lottery belief is unsafe "because it is improbable to be true" (it is the more probable belief); claiming sensitivity separates the cases.

**Model answer (c), one of several:** A feature, with a bill attached. Knowledge seems to be absent when your evidence is purely statistical, however strong, and present when it comes from a source connected to the fact, like a newspaper report, even with a higher error rate. Safety explains that pattern: what makes a belief lucky is how little would have to change for it to be false, not how probable it is. The bill is the car case. One thief's choice seems as small a change as a few balls falling differently. If the safety theorist cannot say why the theft world is further out, the lottery verdict is a bug: the ordering is fitted to our intuitions rather than explaining them.

</details>

## Connections

- **Backward:** the Gettier cases and fake barns of [1.1](01-01-repairing-jtb.md) motivate both conditions; the closeness ordering is the one Lewis built for counterfactuals in [metaphysics 4.2](../../metaphysics/lessons/04-02-counterfactual-causation.md), and it inherits that lesson's question of what fixes the similarity weights.
- **Forward:** [1.3](01-03-why-knowledge.md) asks what knowledge adds to true belief, and Williamson's safety reappears there inside knowledge-first epistemology. Method-relativity becomes the generality problem in [2.4](02-04-reliabilism.md). Sensitivity's failure on "I am not a BIV" is the engine of closure denial in [3.2](03-02-denying-closure.md), and safety is what lets the Moorean in [3.3](03-03-moore-and-the-dogmatist.md) claim to know the skeptical hypothesis false. Lottery beliefs return with credences in [5.1](05-01-credences-and-probabilism.md).
- **Sideways:** the lottery belief can rest on odds of a million to one, overwhelming evidence in the sense of [philosophical-method 2.4](../../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md), and still fail safety. The same gap between purely statistical and individualized evidence is the legal puzzle of convicting on "naked statistics", which is why safety-style conditions get discussed in the philosophy of evidence law.

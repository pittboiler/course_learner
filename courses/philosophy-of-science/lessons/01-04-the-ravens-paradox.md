# Philosophy of Science · Lesson 1.4: The ravens paradox

> ⏱ ~15 min · Module 1: Induction and confirmation · Builds on: [1.1](01-01-from-hume-to-a-logic-of-confirmation.md), [1.3](01-03-confirmation-as-probability-raising.md), [`philosophical-method` 2.4](../../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md) · Unlocks: [1.5](01-05-the-problem-of-old-evidence.md)

## Why this matters

[`econometrics` 5.4](../../econometrics/lessons/05-04-censoring-truncation-sample-selection.md) taught you that a wage equation fitted on the people who chose to work answers a different question from one fitted on everybody: how the data reached you is part of the data. Confirmation theory spent decades asking whether an observation supports a generalization without saying how the observation was collected. The [ravens paradox](../reference.md#ravens-paradox) is where that bill came due: two premises nearly everyone accepts prove that a white shoe is evidence about birds.

## The idea

You want to test "every raven is black". You can catch ravens and look at their colour. Or you can catch non-black things and check that none is a raven. The second search really is a test of the same claim, which is why the white shoe has a case. The Bayesian explanation of why it feels absurd: that search is nearly hopeless, since non-black things are so many and ravens so few that the next non-black thing was going to be a non-raven almost whatever the ravens are like.

On that way of thinking, what a shoe is worth depends on how far things could have gone otherwise, and that depends on **how the object reached you**. A shoe you already know to be a shoe was never at risk of being a white raven, so, if the rival leaves non-ravens alone, learning its colour tests nothing. A black raven drawn at random, in a world that might hold far more ravens than you supposed, can even count against the claim.

[1.1](01-01-from-hume-to-a-logic-of-confirmation.md) stated Nicod's criterion and the equivalence condition; this lesson runs them to their conclusion. The arithmetic is the odds form of [`philosophical-method` 2.4](../../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md): evidence moves you by the ratio of how expected it was on each hypothesis.

## The math

**Notation.** $P$ is an ideal agent's credence function, `epistemology`'s $\mathrm{cr}$, updated by [conditionalization](../../epistemology/lessons/05-03-conditionalization.md). One object $a$ is examined. $R$: $a$ is a raven. $B$: $a$ is black. $H$: every raven is black. $\mathrm{LR}$ is a likelihood ratio for $H$ against a named rival. With one hypothesis and one prior, the [difference](../reference.md#difference-measure), [log-ratio](../reference.md#log-ratio-measure) and [log-likelihood-ratio](../reference.md#log-likelihood-ratio-measure) measures of [1.3](01-03-confirmation-as-probability-raising.md) all rise with the posterior, so they rank evidence alike.

**1. The paradox** (Carl Hempel, "Studies in the Logic of Confirmation", *Mind*, 1945, section 5).

- **P1.** An object that is $F$ and $G$ confirms "every $F$ is $G$" (the positive clause of [Nicod's criterion](../reference.md#nicods-criterion)).
- **P2.** What confirms a hypothesis confirms anything logically equivalent to it (the [equivalence condition](../reference.md#equivalence-condition)).
- **P3.** "Every raven is black" is logically equivalent to "every non-black thing is a non-raven".
- **∴ C.** A non-black non-raven confirms "every raven is black".

*In words:* a white shoe is an instance of the contrapositive, and the contrapositive says the same thing. Yet Nicod's other clause, as [1.1](01-01-from-hume-to-a-logic-of-confirmation.md) gave it, calls a non-raven neutral. A further equivalence extends C to anything but a non-black raven (Hempel, "A Note on the Paradoxes of Confirmation", *Mind*, 1946).

**2. Hempel's bullet.** [Hempel accepted C](../reference.md#hempels-reply-to-the-ravens) and blamed the intuition. (Logically, the generalization forbids one kind of object, so it bears on every object, not only ravens.) "All sodium salts burn yellow" is equivalent to "whatever does not burn yellow is no sodium salt". Hold ice in a colourless flame: no yellow, and nothing learned, because you already knew ice holds no sodium. Burn an unidentified lump, see no yellow, and find by analysis that it holds no sodium: the hypothesis ran a risk and survived. His rule, which he calls a "methodological fiction", is to judge $E$ as though it were your whole evidence for $H$.

*In words:* for Hempel, the report "non-black non-raven", taken alone, confirms; a shoe already known to be a shoe confirms nothing.

**3. The [standard Bayesian solution](../reference.md#standard-bayesian-solution-to-the-ravens).** Janina Hosiasson-Lindenbaum ("On Confirmation", *Journal of Symbolic Logic*, 1940) gave an early probabilistic treatment, five years before Hempel's *Mind* paper. (Hempel dated his first brief statement of the paradox to 1937; Peter Vranas reads that as a foreshadowing and finds her paper stating it in print first, crediting Hempel.) The canonical modern form draws $a$ at random and assumes:

- **A1.** $P(R\mid H)=P(R)$: learning $H$ does not change how likely $a$ is to be a raven.
- **A2.** $P(\neg B\mid H)=P(\neg B)$: nor how likely it is to be non-black.
- **A3.** $P(\neg B)\gg P(R)$: non-black things vastly outnumber ravens.

Given $H$ the cell $R\wedge\neg B$ is empty, so $P(R\wedge B\mid H)=P(R)$ and $P(\neg R\wedge\neg B\mid H)=P(\neg B)$. Bayes' theorem gives

$$\frac{P(H\mid R\wedge B)}{P(H)}=\frac{1}{P(B\mid R)},\qquad \frac{P(H\mid \neg R\wedge\neg B)}{P(H)}=\frac{1}{P(\neg R\mid\neg B)}.$$

Since $1-P(B\mid R)=\frac{P(R\wedge\neg B)}{P(R)}$ and $1-P(\neg R\mid\neg B)=\frac{P(R\wedge\neg B)}{P(\neg B)}$, whenever $P(R\wedge\neg B)>0$ both ratios exceed 1, and the first exceeds the second exactly when $P(\neg B)>P(R)$.

*In words:* both confirm, the black raven by more, and under A3 the shoe's share is negligible.

**4. What the assumptions do.** Vranas ("Hempel's Raven Paradox: A Lacuna in the Standard Bayesian Solution", *British Journal for the Philosophy of Science*, 2004) showed that A2 is for practical purposes necessary for the shoe's confirming to a minute degree, and argued that nothing supports it. Replace it with an assumption that looks just as natural: the rival recolours ravens and leaves every non-raven alone. Then $P(\neg R\wedge\neg B\mid H)=P(\neg R\wedge\neg B)$, and a randomly drawn white shoe confirms nothing at all (an observation the SEP credits to Mat Coakley).

*In words:* the shoe's sign depends on what you assume the rival leaves fixed.

**5. The route.** Let a rival make $w$ of $N_R$ ravens white, and let $N$ be the non-black non-ravens under $H$. Call the A1–A2 rival **frozen margins** (raven and non-black totals fixed, so $w$ non-black non-ravens turn black) and section 4's rival **frozen non-ravens**. Paul Horwich (*Probability and Evidence*, 1982) made the [route of collection](../reference.md#sampling-procedure-and-the-ravens) part of the evidence. Each entry is an $\mathrm{LR}$ for $H$ against the rival:

| Draw from, finding | Frozen non-ravens | Frozen margins |
|---|---|---|
| ravens; black | $N_R/(N_R-w)$ | $N_R/(N_R-w)$ |
| non-black things; a non-raven | $(N+w)/N$ | $N/(N-w)$ |
| non-ravens; non-black | $1$ | $N/(N-w)$ |
| everything; non-black non-raven | $1$ | $N/(N-w)$ |

*In words:* the third row is Hempel's ice. Frozen non-ravens makes it neutral. A1 and A2 force it to confirm, since $P(\neg B\mid\neg R\wedge H)=P(\neg B)/P(\neg R)>P(\neg B\mid\neg R)$. So a credence function meeting A1 and A2 cannot also make a known shoe neutral: the standard solution's tiny positive shoe comes with a tiny positive known shoe.

**6. [Good's case](../reference.md#goods-black-raven-case).** I. J. Good, "The White Shoe Is a Red Herring" (*British Journal for the Philosophy of Science*, 1967), not his value-of-information theorem of that year ([`decision-theory` 3.2](../../decision-theory/lessons/03-02-models-of-ambiguity.md)). His bird is the crow. You know you are in one of two worlds. World 1: 100 black crows, no others, 1,000,000 other birds. World 2: 1,000 black crows, 1 white crow, 1,000,000 other birds. A bird drawn uniformly from your world is a black crow; $H$ holds only in world 1.

$$\mathrm{LR}=\frac{100/1{,}000{,}100}{1{,}000/1{,}001{,}001}=\frac{1{,}001{,}001}{10{,}001{,}000}\approx 0.1001$$

*In words:* a positive instance counts against $H$ by about 10 to 1, with no contrapositive in sight. Good's diagnosis: $\mathrm{LR}(\text{black crow})=\mathrm{LR}(\text{crow})\times\mathrm{LR}(\text{black}\mid\text{crow})$, and only the last factor must exceed 1.

Hempel answered ("The White Shoe: No Red Herring", same journal, 1967) that P1 concerns an evidence sentence taken alone, and Good's case uses far stronger information, so it misses P1. The reply concedes that Nicod's criterion without background is a different thing from confirmation given background, the only kind a working scientist has. Good (1968) pressed on with an infinitely intelligent newborn who thinks crows unlikely to exist, so $H$ likely, and lowers $H$ on learning of a black one. Fitelson and Hawthorne (2010) report Patrick Maher's Carnapian counterexample to P1 on empty background (2004), and note that Hempel's formal definition is monotonic, so it cannot separate the shoe alone from the known shoe.

**Where the argument is weakest.** Take the Bayesian's A2. The strongest objection is Vranas's: nothing licenses treating "all ravens are black" as irrelevant to how much of the world is non-black. Horwich had added that A2 makes a black non-raven count against $H$ ($\mathrm{LR}=Q/(Q+w)<1$ for $Q$ black non-ravens), a cost Vranas thinks Bayesians can absorb, since it is minute too. The strongest reply is Fitelson and Hawthorne's "How Bayesian Confirmation Theory Handles the Paradox of the Ravens" (2010): the comparative verdict needs no independence at all, only conditions on how much likelier non-black is than raven under each hypothesis and on how often ravens are black if $H$ is false. That reply concedes the shoe's sign: it explains why a raven beats a shoe, not whether a shoe confirms. Vranas concedes that the two probabilities in A2 may also be equal: he shows A2 unsupported, not false.

## The picture

![Three two-by-two tables of counts for raven or non-raven against black or non-black. In the H world the raven row is 1,200 and 0 and the non-raven row is 13,998,800 and 6,000,000. The rival with frozen non-ravens changes only the raven row to 900 and 300. The rival with frozen margins also moves 300 objects into the black non-raven cell, leaving 5,999,700 non-black non-ravens](assets/01-04-fig1.svg)

The white-shoe cell is identical in the first two tables and 300 smaller in the third, and that difference alone separates neutrality from a sliver of confirmation.

## Worked examples

**Example 1 (clean case: both likelihood ratios).** Take the figure's world: 20,000,000 objects, 1,200 ravens, 6,000,000 non-black things, and a rival that whitens 300 ravens with both totals frozen, so A1 and A2 hold against that rival. Start at even odds between the two, and draw an object at random.

- Black raven: $\mathrm{LR}=1200/900=4/3$. Posterior $4/7\approx0.571$. Check: $P(B\mid R)=\tfrac12+\tfrac12\cdot\tfrac34=\tfrac78$, and $1/P(B\mid R)=8/7=(4/7)/(1/2)$.
- Non-black non-raven: $\mathrm{LR}=6{,}000{,}000/5{,}999{,}700=20000/19999\approx1.00005$. Posterior $20000/39999\approx0.50001$.

Measured by $\ln\mathrm{LR}$, the raven is worth about 5,750 shoes. The shoe confirms, far too little to notice.

**Example 2 (hard case: the same bird, two routes).** Use Good's worlds. Drawn from all birds, a black crow has $\mathrm{LR}\approx0.1001$, against $H$. Drawn from the crows alone, it has $\mathrm{LR}=1/(1000/1001)=1001/1000$, for $H$. Same bird, same cell, opposite verdicts: this is the structure of Tomás and Ilse in [`philosophy-of-religion` 3.2](../../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md).

Now suppose your notebook says "black crow" and not how you came by it. If $q$ is your credence that the bird was a random draw from all birds, and otherwise from the crows, then

$$\mathrm{LR}(q)=\frac{q/10001+(1-q)}{1000q/1001001+1000(1-q)/1001},$$

which exceeds 1 exactly when $q$ is below about $0.526$. This is where the account stops. Without a credence about the route, the report has no likelihood and no verdict. The Bayesian says that is right: a record that omits how it was made is incomplete, and its evidential force is undefined until someone models the omission. Hempel's side says this is what giving up the report-alone relation costs: a logic of confirmation was meant to say what a report supports, and here that depends on autobiography.

## Watch out

- **You might think the Bayesian solution proves the shoe confirms, but actually** the sign is an output of A1 and A2. Freeze the non-ravens instead and the shoe's likelihood ratio is exactly 1.
- **You might think Good refuted Hempel, but actually** Hempel denied that a case built on background information reaches P1 as he meant it. Good refuted the unrestricted version, on which an instance confirms given any background.
- **You might think the contrapositive causes the trouble, but actually** Bayesians keep P2 and P3, since logically equivalent hypotheses get equal probability. Good's case uses no contrapositive at all.
- **You might think a black raven must help, but actually** only the factor for finding a known raven black is guaranteed to; the fact that a raven turned up at all can count against $H$.

## One-liner

> Relative to background, what an instance does for a generalization depends on what the rival leaves fixed and on how the object reached you: a white shoe can count a little or not at all, and a black raven can count for or against.

## Problems

**P1 (🟢) *(Formal (a)–(c))*** **Formal model.** A drawer holds 2,000 invoices. A summary sheet, correct whichever hypothesis below is true, records that 50 invoices are over the spending limit and 400 are unsigned. $H$: every over-limit invoice is signed. The rival: exactly 10 over-limit invoices are unsigned. Every draw is uniform.

(a) You draw from the 50 over-limit invoices and find it signed. Compute the likelihood ratio for $H$ against the rival.

(b) You draw from the 1,950 under-limit invoices and find it unsigned. Compute the likelihood ratio for $H$ against the rival.

(c) One line: why is the answer to (b) not 1?

**P2 (🟡) *(Formal (a) · Exegetical (b))*** **Counterexample.** You know you hold one of two hoards of coins, A or B, and give each positive prior probability. $H$: every counterfeit in your hoard is lead-cored. Every draw is uniform.

(a) Build the two hoards, each as three counts (lead-cored counterfeits, other counterfeits, genuine coins), so that $H$ is true of A and false of B, and a coin drawn from your whole hoard that proves a lead-cored counterfeit has likelihood ratio (A : B) of at most 1/5. Show the arithmetic. Then give the likelihood ratio (A : B) for a draw made from the counterfeits alone and found lead-cored.

(b) Two sentences: which premise of the paradox does your case attack, and does Hempel's 1967 reply accept that it reaches that premise?

**P3 (🔴) *(Exegetical (a) · Evaluative (b))*** **Find the crux.** Hempel and a Bayesian who grants A1–A3 both say that a white shoe confirms "every raven is black".

(a) Name the one premise of the paradox they disagree about, and say what each holds about it.

(b) Say what argument or result would move each of them off that position. Any verdict.

**150 words or fewer in total.**

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c))*

The sheet fixes both margins, so the two worlds are:

| | signed | unsigned |
|---|---|---|
| $H$: over limit | 50 | 0 |
| $H$: under limit | 1,550 | 400 |
| Rival: over limit | 40 | 10 |
| Rival: under limit | 1,560 | 390 |

(a) Under $H$ the chance of signed is $50/50=1$; under the rival it is $40/50=4/5$. So $\mathrm{LR}=1/(4/5)=5/4$.

(b) Under $H$ the chance of unsigned is $400/1950$; under the rival it is $390/1950$. So $\mathrm{LR}=400/390=40/39\approx1.026$.

(c) The sheet fixes the unsigned total at 400, so the 10 unsigned over-limit invoices in the rival world must come out of the under-limit unsigned cell, which falls from 400 to 390.

**Wrong turns:** answering 1 in (b) by analogy with a shoe known to be a shoe; neutrality needs the under-limit cells to be the same in both worlds, and here the sheet forbids that. Letting the rival's unsigned total rise to 410: that contradicts the sheet.

---

**P2** *(Formal (a) · Exegetical (b))*

**Accept:** any counts with at least one lead-cored counterfeit in each hoard, $H$ true of A, at least one other counterfeit in B, and the ratio at most 1/5. What makes it work is that lead-cored counterfeits are a far larger share of B than of A.

(a) For example, A: 20, 0, 10,000. B: 200, 5, 10,000.

$$\mathrm{LR}(A:B)=\frac{20/10020}{200/10205}=\frac{20\times10205}{10020\times200}=\frac{2041}{20040}\approx0.102\le\frac15.$$

Drawing from the counterfeits alone, the chance of lead-cored is $1$ in A and $200/205$ in B, so $\mathrm{LR}=205/200=41/40$, above 1. In general it is (B's counterfeits)/(B's lead-cored counterfeits), which exceeds 1 for any admissible B.

**Must hit, strict (b):**

- The premise attacked is P1, the positive clause of Nicod's criterion, not P2 or P3: no contrapositive is used.
- Hempel's 1967 reply does not accept that it reaches P1, since P1 concerns the evidence sentence taken alone, and this case uses the background story of the two hoards.

**Wrong turns:** a hoard pair in which the rival simply adds an unleaded counterfeit and no more lead-cored ones, which makes the ratio exceed 1 instead; claiming the case attacks the equivalence condition; saying Hempel concedes the point because a positive instance has disconfirmed.

**Model answer (b):** The case attacks P1, since a lead-cored counterfeit is a positive instance and it lowers the probability of $H$. Hempel would deny that it reaches P1 as he meant it, because P1 is about the report taken alone, and my verdict depends on knowing that the hoard is one of two specified hoards.

---

**P3** *(Exegetical (a) · Evaluative (b))*

**Must hit, strict (a):**

- The shared "confirms" is shallow: Hempel's is a relation of an evidence sentence, taken alone, to a hypothesis; the Bayesian's is $P(H\mid E\wedge K)>P(H\mid K)$, relative to background $K$ and to how $E$ was obtained.
- The premise is P1, read as holding of an evidence sentence by itself. Hempel affirms it. The Bayesian denies it as a general truth, citing a $K$ (Good's) on which an instance counts against $H$, and treats the shoe's sign as a product of assumptions about $K$.
- Not P2 or P3: both keep them.

**Must hit, any verdict (b):**

- State what would move Hempel: a defensible credence function with no empirical background on which an instance disconfirms (Good's newborn gestures at one; Maher offers one), or the charge that his own formal definition cannot separate the report alone from the known shoe.
- State what would move the Bayesian: a principled report-alone relation that validates P1, or a showing that relativity to $K$ and route leaves no verdict where science needs one.

**Wrong turns:** treating them as disagreeing about whether the shoe confirms, since on A1–A3 they agree; naming the equivalence condition as the crux; reporting that Good refuted Hempel as settled, which assumes the contested reading of P1.

**Model answer, one of several:** The premise is P1, read as a relation between an evidence sentence taken alone and a generalization. Hempel holds it: the shoe confirms, and the contrary intuition comes from adding what we also know. The Bayesian denies it as a general truth: confirmation is $P(H\mid E\wedge K)>P(H\mid K)$, Good gives a $K$ on which an instance counts against $H$, and the shoe's sign comes from assumptions about what the rival leaves fixed. Both keep P2 and P3. Hempel would be moved by a defensible credence function with no empirical background on which an instance disconfirms; Maher offers one on a Carnapian function. The Bayesian would be moved by a principled report-alone relation that validates P1, or by showing that relativity to $K$ and route leaves no verdict where science needs one.

</details>

## Flashback

**From Lesson [1.2](01-02-the-new-riddle-of-induction.md) (The new riddle of induction):** *(Exegetical (a)–(b).)* Mill, *A System of Logic*, Book III, ch. III §2 (8th ed., New York: Harper, 1882):

> Some phenomena are always seen to recur in the very same combinations in which we met with them at first; … while some … we unexpectedly find detached from some of the elements with which we had hitherto found them conjoined, and united to others of quite a contrary description.

A lab ledger (invented, written for this problem): every strip examined before a past date $t$ was amber, and every strip first examined since was violet.

(a) Coin *amlet* on the pattern of [grue](../reference.md#grue), so that every strip is amlet. Which of the passage's two classes holds the ledger in English, and which with *amlet*? One line each.

(b) Mill's sort takes for granted what the [new riddle](../reference.md#new-riddle-of-induction) questions. Name it, and say what Goodman's symmetry adds. 50 words or fewer.

<details>
<summary>Solution</summary>

**Must hit, strict:**

- (a) The definition has two clauses split on "examined before $t$", the second covering everything else, never-examined strips included.
- (a) In English the ledger is in the second class: at $t$ the strips are "detached" from amber and "united" to violet.
- (a) With *amlet* it is in the first class: every strip is amlet, "the very same combinations", with no switch.
- (b) Taken for granted: what counts as "the very same", that is, a description of the phenomena under which recurrence and change can be read off.
- (b) Added: change is relative to the vocabulary, and no test on the form of a predicate's definition separates amber from amlet.

**Wrong turns:** writing the second clause as "examined after $t$", which leaves a never-examined strip with no verdict. Saying a strip turned violet at $t$: each strip keeps its colour, and the ledger sorts strips by when they were examined. Saying *amlet* is out because it mentions a date, which is Carnap's reply and the thing the symmetry answers. Reading (b) as a verdict on Mill's whole logic: the question is what this sort needs.

**Model answer:**

(a) $x$ is amlet iff $x$ is examined before $t$ and amber, or $x$ is not so examined and violet. In English, the second class: amber gives way to violet at $t$. With *amlet*, the first: one predicate, no switch.

(b) The sort assumes a description under which "the very same" can be read off. Goodman's symmetry makes change relative to vocabulary: the ledger is uniform in one and switches in the other, and no test on a definition's form privileges either.

</details>

## Connections

- **Backward:** [1.1](01-01-from-hume-to-a-logic-of-confirmation.md) supplied Nicod's criterion and the equivalence condition, and predicted this collision. [1.3](01-03-confirmation-as-probability-raising.md) supplied the measures, which agree here because the prior is fixed. [`philosophical-method` 2.4](../../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md) is the odds form, with the caution that its likelihood ratio is against $\neg H$ where this lesson's is against a named rival.
- **Forward:** [1.5](01-05-the-problem-of-old-evidence.md) asks what happens when the evidence was already certain. [3.2](03-02-the-likelihood-principle.md) returns to how data reach you: here the route changes the likelihoods, so every school agrees it matters; with stopping rules the likelihood function stays proportional, and the schools divide.
- **Sideways:** [`philosophy-of-religion` 3.2](../../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md) has the same sampling structure in Tomás, Ilse and the firing squad, and [`econometrics` 5.4](../../econometrics/lessons/05-04-censoring-truncation-sample-selection.md) is route-dependence as an estimation problem. A false friend: the I. J. Good of [`decision-theory` 3.2](../../decision-theory/lessons/03-02-models-of-ambiguity.md) is his value-of-information theorem, not the white shoe.

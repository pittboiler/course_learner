# Genetics · Lesson 1.4: Pedigrees & human inheritance

> ⏱ ~15 min · Module 1: Transmission Genetics — Mendel & Its Extensions · Builds on: [1.3](01-03-epistasis-pleiotropy.md), [1.1](01-01-mendels-laws-probability.md) · Unlocks: 2.1 (the chromosomal basis of inheritance)

## Why this matters

You cannot do a testcross on a human. No controlled matings, no thousand offspring, no choosing the parents — you get whatever families exist, usually three generations, often fewer than ten informative individuals, and frequently one crucial person who died before anyone thought to ask.

So human genetics developed a different method: **read the mode of inheritance off the pattern, then compute probabilities conditioned on everything you observed.** The second half is Bayes' theorem, and it is what a genetic counsellor actually does — the number they give a couple is a posterior probability, and getting it right requires using *all* the evidence, including the evidence that consists of children who are unaffected.

## The idea

**Pedigree conventions.** Squares are male, circles female, filled symbols affected, a horizontal line between symbols is a mating, a vertical line drops to offspring, generations are Roman numerals and individuals within a generation Arabic numerals. A diamond is unspecified sex; a diagonal slash means deceased; a double horizontal line is a consanguineous mating.

**Five modes, five fingerprints.** The mode is read from the pattern, and each has a diagnostic tell:

| Mode | Tell | Watch for |
|---|---|---|
| **Autosomal dominant** | affected in **every generation**; ~half of an affected parent's children affected; **male-to-male transmission occurs** | skipping = incomplete penetrance ([1.3](01-03-epistasis-pleiotropy.md)) |
| **Autosomal recessive** | **skips generations**; unaffected parents have affected children; both sexes equally | consanguinity raises the risk sharply ([4.3](04-03-inbreeding-relatedness-structure.md)) |
| **X-linked recessive** | **far more males**; affected males' daughters are all carriers; **never father-to-son** | an affected male's sons are all unaffected |
| **X-linked dominant** | affected females roughly 2× males; **an affected father has ALL daughters affected and NO sons** | this is the cleanest single signature in pedigree reading |
| **Mitochondrial** | **affected mothers pass to all children; affected fathers to none** | variable severity from heteroplasmy |

**The two decisive negative observations.** Most of pedigree reading is elimination, and two observations do most of the work:

1. **Male-to-male transmission rules out anything X-linked.** A father gives his son a Y, never his X. One father–son pair settles it.
2. **An affected father with an unaffected daughter rules out X-linked dominant.** He gives every daughter his only X, which carries the allele.

**Then compute the probability.** Once the mode is known, the question is always "what is the chance this specific person carries it," and the answer must use everything observed. Someone whose sibling is affected has a prior of $\tfrac23$ of being a carrier — *not* $\tfrac12$, because being unaffected already eliminates the $\tfrac14$ that would have been $aa$. Having three unaffected children then lowers it further, because a carrier couple would probably have had an affected one by now.

**That last step is the one people skip**, and it changes counselling numbers substantially.

## The formal version

**The $\tfrac23$ rule.** From $Aa \times Aa$, offspring are $\tfrac14 AA : \tfrac12 Aa : \tfrac14 aa$. Conditioning on being unaffected removes the $aa$ class:

$$P(Aa \mid \text{unaffected}) = \frac{1/2}{1/4 + 1/2} = \boxed{\tfrac23}$$

*In words: among the unaffected children of two carriers, two-thirds are carriers.* This is the single most-used number in human genetics and the commonest place to lose a factor.

**Bayes' theorem, in the layout counsellors actually use.** Set out a table with one column per hypothesis:

| | $H_1$: carrier | $H_2$: not carrier |
|---|---|---|
| **Prior** | $P(H_1)$ | $P(H_2)$ |
| **Conditional** — probability of the observed evidence given the hypothesis | $P(E\mid H_1)$ | $P(E \mid H_2)$ |
| **Joint** = prior × conditional | $J_1$ | $J_2$ |
| **Posterior** | $J_1/(J_1+J_2)$ | $J_2/(J_1+J_2)$ |

$$P(H_1 \mid E) = \frac{P(H_1)\,P(E\mid H_1)}{P(H_1)P(E\mid H_1) + P(H_2)P(E\mid H_2)}$$

*In words: weight each hypothesis by how well it explains what you saw, then renormalize.* The layout matters because it forces you to write the conditional for **both** hypotheses, and forgetting the second is the standard error.

**What counts as evidence.** Unaffected children are evidence. So is an unaffected brother, a normal biochemical test with known sensitivity, and a negative carrier screen with a known detection rate. All enter as conditional probabilities.

**Sex linkage, formally.** For an X-linked recessive with allele frequency $q$ in the population:

$$P(\text{affected male}) = q, \qquad P(\text{affected female}) = q^{2} .$$

*In words: a male has one X, so he shows whatever it carries — he is **hemizygous**.* For $q = 0.01$ that is 1 in 100 males and 1 in 10,000 females: **a hundredfold excess of affected males**, which is exactly the pedigree tell. (The Hardy–Weinberg reasoning behind these two lines is derived in [general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md) and pushed further in [evolution-ecology 1.3](../../evolution-ecology/lessons/01-03-hardy-weinberg-testable-null.md).)

**Dosage compensation, and why female carriers are not always unaffected.** Females inactivate one X in each cell early in development, at random and heritably — a **Barr body** ([molecular-cell-biology 4.1](../../molecular-cell-biology/lessons/04-01-chromatin-packaging-regulation.md) supplies the mechanism, [3.5](03-05-eukaryotic-regulatory-logic-epigenetics.md) the inheritance patterns). Every female is therefore a **mosaic** of two cell populations, and a carrier of an X-linked recessive can show symptoms if the inactivation happened to skew toward silencing her good copy. This is why "carrier females are unaffected" is a useful rule with real exceptions, and why calico cats are female.

## Picture

![A three-generation pedigree with standard symbols, annotated with the diagnostic features of each inheritance mode: a male-to-male transmission arrow labelled as ruling out X-linkage, an affected father with all daughters affected and no sons affected labelled as the X-linked dominant signature, a generation skip labelled as either autosomal recessive or incomplete penetrance, and a double line marking a consanguineous mating. Beside it, the Bayes table layout with prior, conditional, joint and posterior rows filled in for a carrier calculation.](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — eliminate modes from a pedigree).** A condition appears in a family as follows: generation I has an affected father and unaffected mother; all four of their daughters are affected and none of their two sons; in generation III, an affected woman married to an unaffected man has two affected sons, one affected daughter and one unaffected daughter. Determine the mode.

Work through the eliminations:

- **Affected father → all daughters affected, no sons affected.** This is the X-linked dominant signature, and it is essentially decisive: he gives every daughter his single X (which carries the allele) and every son his Y.
- **Rule out autosomal dominant:** an autosomal dominant father would affect sons and daughters about equally. Four out of four daughters and zero out of two sons is $P = (1/2)^6 = 1/64$ under autosomal dominance — unlikely, and combined with the mechanism, dismissed.
- **Rule out X-linked recessive:** the trait appears in every generation and affects more females than males. X-linked *recessive* shows the opposite excess.
- **Rule out mitochondrial:** an affected father transmitted to his daughters. Mitochondrial inheritance is strictly maternal, so an affected father transmits to **no one**.
- **Check generation III:** an affected woman ($X^{A}X^{a}$, since she is affected and the allele is rare) married to an unaffected man ($X^{a}Y$) should give half her children affected, either sex. Observed: 3 of 4 affected, both sexes. ✓ Consistent.

$$\textbf{X-linked dominant.}$$

**The generation-I observation did nearly all the work.** One affected father with several children of both sexes is the most informative single family structure in pedigree analysis, because it separates X-linked dominant from every other mode in one step.

**Example 2 (why you'd care — the counselling number, done with all the evidence).** Cystic fibrosis is autosomal recessive. A woman's brother is affected; both her parents are unaffected. She has three unaffected children with a man whose carrier risk is the population figure of $1/25$. She is pregnant. What is the probability the baby is affected?

**Step 1 — her prior.** Her parents must both be carriers ($Aa \times Aa$, since they are unaffected with an affected son). She is unaffected, so by the $\tfrac23$ rule:

$$P(\text{she is } Aa) = \tfrac23 .$$

**Step 2 — update on three unaffected children.** This is the step usually skipped. If she is a carrier and her husband is a carrier, each child had a $\tfrac14$ chance of being affected. But we do not know he is a carrier, so handle both hypotheses properly.

Simplify by asking first: what is the joint prior that **both** are carriers?

$$P(\text{both carriers}) = \tfrac23 \times \tfrac1{25} = \tfrac{2}{75} = 0.02667 .$$

Now Bayes on the evidence $E = $ "three unaffected children":

| | $H_1$: both carriers | $H_2$: not both carriers |
|---|---|---|
| Prior | $0.02667$ | $0.97333$ |
| $P(E \mid H)$ | $\left(\tfrac34\right)^{3} = 0.4219$ | $1$ |
| Joint | $0.01125$ | $0.97333$ |
| **Posterior** | $\dfrac{0.01125}{0.98458} = \mathbf{0.01143}$ | $0.98857$ |

**Step 3 — the answer.**

$$P(\text{baby affected}) = P(\text{both carriers} \mid E) \times \tfrac14 = 0.01143 \times 0.25 = \mathbf{0.00286}, \ \text{about 1 in 350}.$$

**Compare with the naive calculation** that ignores the three unaffected children:

$$\tfrac23 \times \tfrac1{25} \times \tfrac14 = 0.00667, \ \text{about 1 in 150}.$$

**Using all the evidence more than halves the estimated risk.** Three unaffected children are genuine evidence against both parents being carriers — a carrier couple would have had a 58 percent chance of at least one affected child by now, and they did not. This is exactly the calculation a counsellor performs, and it is why the family history questionnaire asks about *every* child, not just the affected ones.

**One caveat worth stating.** In practice the husband would be offered a carrier screen, and a negative result with a 90 percent detection rate would enter the same table as another conditional probability, dropping his posterior carrier risk from $1/25$ to about $1/240$ — and the final answer with it. **Every piece of evidence is a column entry, and the method does not change.**

## Watch out

- **You might use $\tfrac12$ for the carrier risk of an unaffected sibling.** It is $\tfrac23$. Being unaffected has already eliminated the $aa$ class, and the conditioning is the whole point.
- **You might ignore unaffected children.** They are evidence. A carrier couple that has had four unaffected children is meaningfully less likely to be a carrier couple than one that has had none.
- **You might rule out dominance because a generation was skipped.** Incomplete penetrance ([1.3](01-03-epistasis-pleiotropy.md)) does exactly that, and an unaffected obligate carrier is common in dominant pedigrees.
- **You might forget that males are hemizygous.** An X-linked recessive shows in every male who carries it, and the male-to-female ratio of affected individuals is $1/q$ — huge for a rare allele.
- **You might assume a female carrier is always unaffected.** Random X-inactivation makes every female a mosaic, and skewed inactivation produces symptomatic carriers — a real clinical phenomenon, not a curiosity.
- **You might read a small pedigree as conclusive.** With four children, "no male-to-male transmission" could easily be chance. Absence of a signature in a small family is weak evidence; its presence is strong.

## One-liner

> Read the mode from the pattern — male-to-male transmission kills X-linkage, an affected father with all daughters affected proves X-linked dominant — then compute with Bayes, and remember that unaffected children are evidence too.

## Problems

**P1 (🟢)** For each observation, state which modes of inheritance it **rules out**: (a) an affected father has an affected son; (b) two unaffected parents have an affected daughter; (c) an affected mother has six children, all affected; (d) an affected father has four daughters, all affected, and three sons, none affected.

**P2 (🟡)** Tay-Sachs is autosomal recessive. A man's sister died of it; his parents are unaffected. He marries a woman from a population where the carrier frequency is $1/30$. (a) What is his prior carrier probability? (b) They have two unaffected children. Compute the posterior probability that both parents are carriers. (c) What is the probability their third child is affected, and how does it compare with the estimate that ignores the two unaffected children?

**P3 (🔴, bridges to 2.1 and to clinical genetics)** A woman's maternal grandfather had haemophilia A (X-linked recessive). Her mother is unaffected, and she herself is unaffected and has two unaffected sons. (a) What is her mother's carrier probability, and why is it certain rather than probabilistic? (b) Compute the woman's prior carrier probability, then update it on her two unaffected sons using Bayes. (c) She is pregnant with a third son. What is the probability he is affected? (d) A clotting-factor assay detects 80 percent of carrier females; her result is normal. Recompute her carrier probability and the risk to the son.

<details>
<summary>Solutions</summary>

**P1 (a)** Male-to-male transmission rules out **X-linked recessive**, **X-linked dominant**, and **mitochondrial** (fathers transmit no mitochondria). Leaves autosomal dominant or recessive.

**(b)** Unaffected parents with an affected child rules out all **dominant** modes with complete penetrance — **autosomal dominant** and **X-linked dominant** — and rules out **mitochondrial** (an unaffected mother would not transmit). Leaves autosomal recessive or, if the child is female, X-linked recessive (father would have to be affected, so check).

**(c)** All six children affected from an affected mother is consistent with **mitochondrial** inheritance and is the signature of it. It does not formally *rule out* anything — an autosomal dominant mother has a $(1/2)^6 = 1/64$ chance of the same result — but it makes mitochondrial by far the best-supported.

**(d)** Four for four daughters and zero for three sons rules out **autosomal dominant** and **autosomal recessive** (both predict roughly equal sexes), rules out **X-linked recessive** (affected daughters would require a carrier mother and are rare), and rules out **mitochondrial** (fathers transmit to no one). This is the **X-linked dominant** signature. Under autosomal dominance the probability of this exact split is $(1/2)^7 = 1/128$.

**P2 (a)** His parents are obligate carriers (unaffected, affected daughter). He is unaffected, so by the $\tfrac23$ rule:

$$P(\text{he is a carrier}) = \mathbf{\tfrac23}.$$

**(b)** Joint prior that both are carriers:

$$\tfrac23 \times \tfrac1{30} = \tfrac{2}{90} = 0.02222 .$$

| | both carriers | not both |
|---|---|---|
| Prior | 0.02222 | 0.97778 |
| $P(\text{2 unaffected} \mid H)$ | $(3/4)^2 = 0.5625$ | 1 |
| Joint | 0.012500 | 0.97778 |
| **Posterior** | $\dfrac{0.01250}{0.99028} = \mathbf{0.01262}$ | 0.98738 |

**(c)** $$P(\text{third child affected}) = 0.01262 \times \tfrac14 = \mathbf{0.00316}, \ \text{about 1 in 317}.$$

Ignoring the two unaffected children:

$$\tfrac23 \times \tfrac1{30} \times \tfrac14 = 0.00556, \ \text{about 1 in 180}.$$

Using the evidence lowers the risk by a factor of **1.76**. (With three unaffected children it would be a factor of 2.3, and the effect grows with each one — each unaffected child multiplies the carrier-couple hypothesis by another $3/4$.)

**P3 (a)** Her mother is an **obligate carrier**, with probability **1**. Her grandfather was affected ($X^{h}Y$), and a father gives his only X to every daughter — so his daughter (the woman's mother) necessarily received $X^{h}$. There is no chance involved: it is a deduction from the transmission rule, not a probability.

**(b)** Prior: her carrier mother is $X^{H}X^{h}$, and she received one of those two X's at random:

$$P(\text{carrier})_{\text{prior}} = \tfrac12 .$$

Update on two unaffected sons. A carrier mother gives each son an affected X with probability $\tfrac12$, so $P(\text{a son is unaffected} \mid \text{she is a carrier}) = \tfrac12$.

| | $H_1$: carrier | $H_2$: non-carrier |
|---|---|---|
| Prior | 0.5 | 0.5 |
| $P(\text{2 unaffected sons}\mid H)$ | $(1/2)^2 = 0.25$ | 1 |
| Joint | 0.125 | 0.5 |
| **Posterior** | $\dfrac{0.125}{0.625} = \mathbf{0.2}$ | 0.8 |

Her carrier risk falls from 50 percent to **20 percent**. Note how much stronger this evidence is than in the autosomal case: each unaffected *son* multiplies the carrier hypothesis by $\tfrac12$ rather than $\tfrac34$, because a son directly reveals which X he got. **Sons are far more informative than daughters in an X-linked pedigree**, which is why counsellors ask specifically about them.

**(c)** $$P(\text{third son affected}) = P(\text{she is a carrier}) \times \tfrac12 = 0.2 \times 0.5 = \mathbf{0.10}.$$

**(d)** Add the assay as another piece of evidence. A carrier has a 20 percent chance of a normal result (100 − 80 percent detection); a non-carrier always has a normal result.

Start from the posterior of (b) as the new prior — this is legitimate because the two pieces of evidence are independent:

| | carrier | non-carrier |
|---|---|---|
| Prior (from b) | 0.2 | 0.8 |
| $P(\text{normal assay}\mid H)$ | 0.2 | 1.0 |
| Joint | 0.04 | 0.80 |
| **Posterior** | $\dfrac{0.04}{0.84} = \mathbf{0.0476}$ | 0.9524 |

$$P(\text{third son affected}) = 0.0476 \times \tfrac12 = \mathbf{0.0238}, \ \text{about 1 in 42}.$$

**The whole sequence is worth looking at as a chain:** 50 percent from the pedigree alone, 20 percent after two unaffected sons, 4.8 percent after a normal assay — and the risk to the pregnancy falls from 25 percent to 2.4 percent, a tenfold change. **Each piece of evidence is a column in the same table, and none of them may be left out.** This is the actual arithmetic of genetic counselling, and it is why the family and test history is collected exhaustively before any number is quoted.

</details>

## Flashback

**From Lesson 1.3 (epistasis and penetrance):** A dominant condition is 60 percent penetrant. An affected woman ($Aa$; the allele is rare) marries an unaffected man from the general population. (a) What fraction of their children will carry the allele, and what fraction will be affected? (b) They have four children, none affected. What is the probability that at least one of them nonetheless carries the allele? (c) In one sentence, say why (b) matters clinically.

<details>
<summary>Solution</summary>

**(a)** Each child inherits $A$ with probability $\tfrac12$, and shows the phenotype with probability 0.6 given that:

$$P(\text{carries}) = \mathbf{0.50}, \qquad P(\text{affected}) = 0.5 \times 0.6 = \mathbf{0.30}.$$

**(b)** Per child, $P(\text{unaffected}) = 0.70$, of which the carrier part is $P(\text{carries and unaffected}) = 0.5 \times 0.4 = 0.20$. So given that a child is unaffected:

$$P(\text{carrier} \mid \text{unaffected}) = \frac{0.20}{0.70} = 0.2857 .$$

For four unaffected children, at least one carrier:

$$P(\ge 1) = 1 - (1 - 0.2857)^{4} = 1 - (0.7143)^{4} = 1 - 0.2603 = \mathbf{0.740}.$$

**(c)** Because there is a **74 percent chance that at least one of these apparently healthy children can still transmit the condition to their own offspring** — so unaffected children in an incompletely penetrant dominant pedigree cannot be reassured and told their line is clear, and each of them individually carries a 29 percent risk of being a silent transmitter.

</details>

## Connections

- **Backward:** [1.3](01-03-epistasis-pleiotropy.md)'s penetrance is what makes dominant pedigrees skip generations; the $\tfrac23$ rule is [1.1](01-01-mendels-laws-probability.md)'s $1{:}2{:}1$ with one class removed by conditioning.
- **Forward:** [2.1](02-01-chromosomal-basis-sex-linkage.md) puts the chromosomal mechanism under sex linkage and dosage compensation; [4.3](04-03-inbreeding-relatedness-structure.md) quantifies what a consanguineous mating does to recessive risk; [4.5](04-05-human-genetics-genome-medicine.md) replaces pedigree inference with sequencing and asks what is gained and lost.
- **Sideways:** Bayes' theorem is [prob-stat-refresher 2.4](../../prob-stat-refresher/syllabus.md); X-inactivation as a chromatin phenomenon is [molecular-cell-biology 4.1](../../molecular-cell-biology/lessons/04-01-chromatin-packaging-regulation.md) and as an inheritance pattern is [3.5](03-05-eukaryotic-regulatory-logic-epigenetics.md).

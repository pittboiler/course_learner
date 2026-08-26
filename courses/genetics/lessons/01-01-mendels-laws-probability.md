# Genetics · Lesson 1.1: Mendel's laws as probability

> ⏱ ~15 min · Module 1: Transmission Genetics — Mendel & Its Extensions · Builds on: [general-biology 3.1](../../general-biology/lessons/03-01-mendel-monohybrid-cross.md), [general-biology 2.5](../../general-biology/lessons/02-05-mitosis-meiosis.md) · Unlocks: 1.2 (when dominance breaks down)

## Why this matters

[general-biology 3.1](../../general-biology/lessons/03-01-mendel-monohybrid-cross.md) taught you Mendel with Punnett squares, and Punnett squares are a trap. They work beautifully for one gene, tolerably for two, and by three genes you are drawing a 64-cell grid to answer a question that takes one line of multiplication.

The whole of transmission genetics is a probability calculation, and Mendel's two laws are statements about probability, not about squares. Once you see them that way, three-gene crosses, pedigree probabilities, and the linkage analysis of Module 2 all become the same small toolkit — and you never draw a grid again.

## The idea

**Mendel's two laws, stated as probability.**

- **Segregation.** A heterozygote $Aa$ produces gametes carrying $A$ or $a$ with probability $\tfrac12$ each. *This is meiosis I: the two homologues separate, and which one a gamete gets is a fair coin* ([general-biology 2.5](../../general-biology/lessons/02-05-mitosis-meiosis.md)).
- **Independent assortment.** For genes on different chromosomes, which allele a gamete gets at one locus is **independent** of which it gets at another. *This is the random orientation of each bivalent at the metaphase plate — each chromosome pair flips its own coin.*

**And that is the whole content.** Everything else is the algebra of independent events.

**Two rules do all the work.**

- **Product rule.** Independent events: multiply. "$A$ *and* $B$" $\Rightarrow P(A)\times P(B)$.
- **Sum rule.** Mutually exclusive outcomes: add. "$A$ *or* $B$" $\Rightarrow P(A) + P(B)$.

The skill is deciding which one applies, and the tell is the word in the question: **and → multiply, or → add**.

**The gene-by-gene method.** For a cross involving several genes, treat each gene as a separate one-gene cross, compute the probability you want at that gene, and multiply. A cross $AaBbCc \times AaBbCc$ asked for $P(A\_\,bb\,C\_)$ is

$$\underbrace{\tfrac34}_{A\_} \times \underbrace{\tfrac14}_{bb} \times \underbrace{\tfrac34}_{C\_} = \tfrac{9}{64},$$

which takes ten seconds. The 64-cell Punnett square gives the same answer in ten minutes.

## The formal version

**Notation.** $A$ is a dominant allele, $a$ its recessive counterpart. $A\_$ means "$AA$ or $Aa$" — the dominant phenotype without committing to a genotype. A **testcross** is a cross to a fully recessive individual, which is the standard way to read a gamete distribution directly.

**The one-gene monohybrid results, which you should know cold:**

| Cross | Genotype ratio | Phenotype ratio |
|---|---|---|
| $Aa \times Aa$ | $1\,AA : 2\,Aa : 1\,aa$ | $3 : 1$ |
| $Aa \times aa$ (testcross) | $1\,Aa : 1\,aa$ | $1 : 1$ |
| $Aa \times AA$ | $1\,AA : 1\,Aa$ | all dominant |
| $AA \times aa$ | all $Aa$ | all dominant |

**Why the testcross matters.** In $Aa \times aa$ the recessive parent contributes only $a$, so **the offspring phenotypes are a direct readout of the heterozygous parent's gametes.** That is the entire reason testcrosses are used, and it is why linkage mapping in [2.2](02-02-linkage-recombination.md) is built on them.

**Dihybrid and beyond.** For $n$ independently assorting heterozygous genes, a self-cross $\underbrace{AaBb\ldots}_{n} \times \underbrace{AaBb\ldots}_{n}$ gives:

| Quantity | Formula | $n=1$ | $n=2$ | $n=3$ |
|---|---|---|---|---|
| Gamete types per parent | $2^{n}$ | 2 | 4 | 8 |
| Punnett square cells | $4^{n}$ | 4 | 16 | **64** |
| Distinct genotypes | $3^{n}$ | 3 | 9 | 27 |
| Distinct phenotypes | $2^{n}$ | 2 | 4 | 8 |
| Phenotype ratio | $(3{:}1)^{\otimes n}$ | $3{:}1$ | $9{:}3{:}3{:}1$ | $27{:}9{:}9{:}9{:}3{:}3{:}3{:}1$ |

*In words: the famous $9{:}3{:}3{:}1$ is not a fact about two genes — it is $(3{:}1)$ multiplied by itself.* $9 = 3\times3$, $3 = 3\times1$, $1 = 1\times1$. Seeing that is the whole point of this lesson, and it is what makes the modified ratios of [1.3](01-03-epistasis-pleiotropy.md) readable rather than memorized.

**The binomial, for "how many of $n$ offspring."** If each offspring independently has probability $p$ of a phenotype, the probability that exactly $k$ of $n$ show it is

$$\boxed{\;P(k) = \binom{n}{k} p^{k} (1-p)^{n-k}\;}$$

*In words: choose which $k$ offspring, then multiply the probabilities.* This is where students most often go wrong, because "three of four children are affected" is not the same question as "the first three are affected."

**Chi-square, for "does the data fit?"** With observed counts $O_i$ and expected $E_i$:

$$\chi^{2} = \sum_i \frac{(O_i - E_i)^{2}}{E_i}, \qquad \mathrm{df} = (\text{number of classes}) - 1 .$$

Reject the model if $\chi^2$ exceeds the critical value (3.84 for 1 df, 7.81 for 3 df, at $p = 0.05$). *In words: how far off is the data, measured in units of how far off you should expect it to be by chance?* This is the tool that will detect linkage in [2.2](02-02-linkage-recombination.md), because linked genes fail the independent-assortment prediction.

## Picture

![A meiotic cell with two chromosome pairs, showing the two equally likely orientations of the bivalents at metaphase I and the four resulting gamete types in equal proportion, establishing independent assortment as a consequence of random spindle attachment. Beside it, the 9:3:3:1 ratio built as an outer product of two 3:1 ratios, drawn as a two-by-two grid whose cells are labelled 3 times 3, 3 times 1, 1 times 3, 1 times 1.](assets/01-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — a trihybrid without a grid).** In a cross $AaBbCc \times AaBbCc$, find (a) $P(aabbcc)$, (b) $P(A\_B\_C\_)$, (c) $P(\text{exactly two dominant phenotypes out of the three genes})$.

Treat each gene separately. Per gene: $P(\text{dominant phenotype}) = \tfrac34$, $P(\text{recessive}) = \tfrac14$.

(a) $$P(aabbcc) = \tfrac14 \times \tfrac14 \times \tfrac14 = \mathbf{\tfrac{1}{64}}.$$

(b) $$P(A\_B\_C\_) = \tfrac34 \times \tfrac34 \times \tfrac34 = \mathbf{\tfrac{27}{64}}.$$

(c) "Exactly two dominant" means one specific gene is recessive and the other two dominant — and there are $\binom{3}{1} = 3$ choices of which gene. Each such outcome has probability $\left(\tfrac34\right)^2\left(\tfrac14\right)$:

$$P = 3 \times \tfrac{9}{16} \times \tfrac14 = \mathbf{\tfrac{27}{64}}.$$

**Check the whole distribution.** The number of dominant phenotypes is binomial with $n = 3$, $p = \tfrac34$:

$$\tfrac{1}{64} + \tfrac{9}{64} + \tfrac{27}{64} + \tfrac{27}{64} = \tfrac{64}{64} = 1 \ \checkmark$$

and those four numbers, $1{:}9{:}27{:}27$, are exactly the $27{:}9{:}9{:}9{:}3{:}3{:}3{:}1$ ratio collapsed by symmetry. **The trihybrid ratio is the binomial expansion of $(3+1)^3$**, which is why you never need to memorize it.

**Example 2 (why you'd care — a family-planning question, done right).** Two parents are both carriers of cystic fibrosis ($Cc \times Cc$). They plan four children. (a) What is the probability that exactly one is affected? (b) That at least one is affected? (c) They have already had three unaffected children — what is the probability the fourth is affected?

Per child, $P(\text{affected } cc) = \tfrac14$, independently.

(a) Binomial with $n = 4$, $k = 1$, $p = \tfrac14$:

$$P(1) = \binom{4}{1}\left(\tfrac14\right)^{1}\left(\tfrac34\right)^{3} = 4 \times \tfrac14 \times \tfrac{27}{64} = \tfrac{27}{64} = \mathbf{0.422}.$$

(b) Complement of "none affected":

$$P(\ge 1) = 1 - \left(\tfrac34\right)^{4} = 1 - \tfrac{81}{256} = \tfrac{175}{256} = \mathbf{0.684}.$$

(c) $$\mathbf{\tfrac14}.$$

**Part (c) is the one that matters clinically**, and it is the one people get wrong. Each conception is an independent meiotic event; gametes do not keep score. The intuition that a family is "due" an affected child — or, worse, that having had three unaffected children makes the fourth safer — is the gambler's fallacy, and genetic counsellors spend real time correcting it.

**Note the asymmetry that makes it feel wrong.** Before any children, $P(\text{exactly one affected in four}) = 0.42$; after three unaffected, $P(\text{the fourth is affected}) = 0.25$. Both are correct, and they answer different questions. *Conditioning on what has already happened changes the question, not the coin.*

## Watch out

- **You might reach for a Punnett square.** For more than two genes it is a waste of time and a source of arithmetic errors. Do each gene separately and multiply — always.
- **You might confuse "and" with "or."** $P(AA \text{ or } Aa) = \tfrac14 + \tfrac12$ (sum rule, mutually exclusive); $P(A\_ \text{ and } B\_) = \tfrac34 \times \tfrac34$ (product rule, independent). Reading the conjunction in the question is most of the work.
- **You might forget the binomial coefficient.** "Exactly two of four affected" is $\binom{4}{2}p^2(1-p)^2$, not $p^2(1-p)^2$ — the latter is the probability of one *specific* birth order, which is six times smaller.
- **You might think independent assortment is a law of genes.** It is a law of **chromosomes**, and it holds only for genes on different ones. Module 2 is entirely about what happens when it fails.
- **You might treat a dominant phenotype as a genotype.** $A\_$ is $\tfrac23$ $Aa$ and $\tfrac13$ $AA$ among the dominant offspring of $Aa \times Aa$ — that $\tfrac23$ shows up constantly in pedigree problems ([1.4](01-04-pedigrees-human-inheritance.md)).

## One-liner

> Mendel's laws say meiosis flips a fair coin per locus and a separate one per chromosome pair — so every transmission-genetics question is the product rule wearing a costume, and $9{:}3{:}3{:}1$ is just $3{:}1$ squared.

## Problems

**P1 (🟢)** In a cross $AaBbCcDd \times AaBbCcDd$ (all genes assorting independently), find (a) $P(aabbccdd)$, (b) $P(A\_B\_ccdd)$, (c) the number of distinct phenotypes among the offspring.

**P2 (🟡)** A plant of unknown genotype with the dominant phenotype for a single gene is testcrossed to $aa$ and produces 8 offspring, all showing the dominant phenotype. (a) If the plant were $Aa$, what is the probability of this result? (b) Would you conclude the plant is $AA$? State your reasoning as a hypothesis test, and say what result would have settled it immediately.

**P3 (🔴, bridges to Module 2)** A dihybrid $AaBb$ is testcrossed and gives 1000 offspring: $AB$ 410, $ab$ 400, $Ab$ 95, $aB$ 95. (a) What ratio does independent assortment predict, and what counts? (b) Compute $\chi^2$ with 3 degrees of freedom and compare with the critical value 7.81. (c) State your conclusion and name the phenomenon responsible — and say which two of the four classes are the informative ones.

<details>
<summary>Solutions</summary>

**P1 (a)** Four independent genes, each contributing $\tfrac14$:

$$\left(\tfrac14\right)^{4} = \mathbf{\tfrac{1}{256}}.$$

**(b)** $$\tfrac34 \times \tfrac34 \times \tfrac14 \times \tfrac14 = \tfrac{9}{256} = \mathbf{0.035}.$$

**(c)** Two phenotypes per gene, four genes: $2^{4} = \mathbf{16}$.

**P2 (a)** If the plant is $Aa$, each testcross offspring has $P(\text{dominant}) = \tfrac12$:

$$P(\text{all 8 dominant} \mid Aa) = \left(\tfrac12\right)^{8} = \tfrac{1}{256} = \mathbf{0.0039}.$$

**(b)** Set it up as a hypothesis test. $H_0$: the plant is $Aa$. Under $H_0$ the observed result has probability 0.0039, well below the conventional 0.05 threshold, so **reject $H_0$ and conclude the plant is $AA$.**

State the logic carefully, because this is the shape of every genetic inference: you have not *proved* $AA$. You have shown that $Aa$ makes the data very unlikely. With 8 offspring you can reject $Aa$ at $p < 0.005$; with only 3 offspring you could not, since $(1/2)^3 = 0.125 > 0.05$.

**What would have settled it immediately:** a **single recessive offspring**. One $aa$ offspring from a testcross proves the parent carried an $a$ allele and is therefore $Aa$ — a definitive result from one observation, whereas the negative conclusion is only ever probabilistic. **Genetics is asymmetric this way: one informative individual can prove a genotype, while no number of uninformative ones can.**

**P3 (a)** Independent assortment predicts a testcross ratio of $1{:}1{:}1{:}1$, so 250 of each class out of 1000.

**(b)**

| Class | $O$ | $E$ | $(O-E)$ | $(O-E)^2/E$ |
|---|---|---|---|---|
| $AB$ | 410 | 250 | $+160$ | $25600/250 = 102.4$ |
| $ab$ | 400 | 250 | $+150$ | $22500/250 = 90.0$ |
| $Ab$ | 95 | 250 | $-155$ | $24025/250 = 96.1$ |
| $aB$ | 95 | 250 | $-155$ | $24025/250 = 96.1$ |

$$\chi^{2} = 102.4 + 90.0 + 96.1 + 96.1 = \mathbf{384.6}.$$

Against a critical value of 7.81 at 3 df, this is not close — $p$ is astronomically small.

**(c)** **Reject independent assortment.** The two genes are **linked** — they lie on the same chromosome, so they do not assort independently and the parental combinations are over-represented.

The informative classes are the **rare** ones, $Ab$ and $aB$: these are the **recombinants**, produced only when a crossover occurred between the two loci during meiosis. Their frequency is the entire quantitative content of the result:

$$\text{recombination frequency} = \frac{95 + 95}{1000} = 0.19 = \mathbf{19\ \text{map units}},$$

which is exactly the calculation [2.2](02-02-linkage-recombination.md) is built on. Note also what the *abundant* classes tell you: $AB$ and $ab$ are the parental combinations, so the dihybrid parent's genotype was $AB/ab$ — the two dominant alleles were on the same homologue (coupling), not on opposite ones.

</details>

## Connections

- **Backward:** meiosis from [general-biology 2.5](../../general-biology/lessons/02-05-mitosis-meiosis.md) is the physical mechanism; segregation is anaphase I and independent assortment is random bivalent orientation.
- **Forward:** [1.2](01-02-when-dominance-breaks-down.md) and [1.3](01-03-epistasis-pleiotropy.md) keep this probability engine and change only what the genotypes *look like*; [2.2](02-02-linkage-recombination.md) is what happens when independent assortment fails.
- **Sideways:** the product and sum rules and the binomial are [prob-stat-refresher 1.1–1.3](../../prob-stat-refresher/syllabus.md); the chi-square goodness-of-fit test reappears for Hardy–Weinberg in [evolution-ecology 1.3](../../evolution-ecology/lessons/01-03-hardy-weinberg-testable-null.md).

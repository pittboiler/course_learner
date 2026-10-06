# Epistemology · Lesson 5.5: Bayesian disagreement and higher-order evidence

> ⏱ ~15 min · Module 5: Bayesian epistemology · Builds on: [4.5 Peer disagreement](04-05-peer-disagreement.md), [5.3 Conditionalization](05-03-conditionalization.md), [5.1 Credences and probabilism](05-01-credences-and-probabilism.md) · Unlocks: [`philosophy-of-science`](../../philosophy-of-science/syllabus.md), [`social-choice`](../../social-choice/syllabus.md)

## Why this matters

[4.5](04-05-peer-disagreement.md) asked what you should do when an equally competent peer, with the same evidence, reaches a different verdict, and stated the answers in prose: conciliate, stand firm, weigh the total evidence. Module 5 now gives you the tools to state them as rules on credences and test them. Two questions come out sharp. First, if conciliating means combining two credence functions into one, which combination rule is coherent with [conditionalization](05-03-conditionalization.md)? Second, the peer's disagreement is a special case of something more general: evidence that you may have reasoned badly. What should a calculation of yours be worth once you learn there is a real chance your head was not working when you did it?

## The idea

**Pooling.** "Split the difference" is a rule: average the two credences. Generalized, it is **linear pooling**: the group credence in any proposition is a weighted average of the individuals' credences in it ([linear pooling](../reference.md#linear-pooling)). The alternative is **geometric pooling**: take a weighted geometric mean of the credences each agent gives to each *world* (each cell of a fine partition), then rescale so the results sum to one ([geometric pooling](../reference.md#geometric-pooling)). On a single proposition the two usually land close together. They come apart on structure.

Statisticians catalogued the rules and their properties long before epistemologists took them up (Genest and Zidek's 1986 survey is the standard map). Two properties matter here:

- **Marginalization.** Pool on a fine partition, then add cells together, and you get the same answer as pooling on the coarse partition directly. Linear pools have this property trivially; geometric pools do not.
- **External Bayesianity** (Madansky's term, 1964). If everyone learns the same evidence, pooling and then conditionalizing gives the same result as conditionalizing and then pooling ([external Bayesianity](../reference.md#external-bayesianity)). Geometric pools have it; linear pools do not. Genest, McConway and Schervish (1986) showed that the externally Bayesian pools are, under mild conditions, the geometric kind.

So the simplest model of conciliation fails to commute with the update rule Module 5 defended. Russell, Hawthorne and Buchak ("Groupthink", 2015) take conditionalization as a fixed constraint on group credence, prove impossibility results for averaging under it, and examine geometric rules that satisfy it. Easwaran, Fenton-Glynn, Hitchcock and Velasco ("Updating on the Credences of Others", 2016) go further: treat a peer's credence as *evidence* and conditionalize on it. Their rule, **upco**, multiplies odds ([upco rule](../reference.md#upco-rule)):

$$\frac{\mathrm{cr}^{+}(A)}{1-\mathrm{cr}^{+}(A)} = \frac{p}{1-p}\cdot\frac{q}{1-q},$$

where $p$ is your credence in $A$, $q$ your peer's, and $\mathrm{cr}^{+}$ your credence after hearing hers. *In words:* her odds act as a likelihood ratio on yours. It is exactly Bayesian when both of you started at even odds and drew on independent evidence. Upco produces **synergy**: two peers at 0.6 do not stay at 0.6. Each moves to $0.36/(0.36+0.16) = 9/13 \approx 0.69$. Agreement is evidence too, which averaging can never register.

**Higher-order evidence.** [Higher-order evidence](../reference.md#higher-order-evidence) is evidence about whether you have evaluated your evidence well: you were sleep-deprived, drugged, or at altitude, or a peer disagrees. David Christensen ("Higher-Order Evidence", 2010) stressed its oddity: it bears on $p$ only by way of a claim about *you*. The standard illustration is the hypoxic pilot, built from cases of Adam Elga's and Christensen's: a pilot calculates that his fuel suffices, then learns that at this altitude there is a serious chance he is hypoxic, a condition that degrades reasoning while leaving it feeling clear.

Two answers:

- **Calibrationism** (Roger White, "On Treating Oneself and Others as Thermometers", 2009; developed by Christensen): treat your own judgment as an instrument, and set your credence by how often an instrument in your condition gets it right ([calibrationism](../reference.md#calibrationism)).
- **Level-splitting** (Maria Lasonen-Aarnio, "Higher-Order Evidence and the Limits of Defeat", 2014; also Williamson and Weatherson): the first-order evidence still supports $p$ as strongly as it did; the higher-order evidence rationally lowers only your credence that you reasoned well ([level-splitting](../reference.md#level-splitting)).

The cost of level-splitting is **epistemic akrasia**: being confident that $p$ while being confident that your evidence does not support $p$ ([epistemic akrasia](../reference.md#epistemic-akrasia)). Sophie Horowitz ("Epistemic Akrasia", 2014) argued that such states are irrational: the akratic agent who turns out right must regard herself as lucky to have believed what she did. Level-splitters reply that the alternative makes rational credence depend on misleading evidence about what rationality requires.

## The math

Fix a finite set of worlds $\omega_1,\dots,\omega_n$ and agents $1,\dots,k$ with credence functions $\mathrm{cr}_i$ and weights $w_i \ge 0$, $\sum_i w_i = 1$.

$$L(A) = \sum_i w_i\,\mathrm{cr}_i(A)$$

$$G(\omega) = \frac{\prod_i \mathrm{cr}_i(\omega)^{w_i}}{\sum_{\omega'} \prod_i \mathrm{cr}_i(\omega')^{w_i}}, \qquad G(A) = \sum_{\omega \in A} G(\omega).$$

**Theorem.** $G$ is externally Bayesian: for evidence $E$ with $G(E) > 0$ and every $\mathrm{cr}_i(E) > 0$, pooling the posteriors $\mathrm{cr}_i(\cdot \mid E)$ gives $G(\cdot \mid E)$.

**Proof.** Write $\mathbf{1}_E(\omega)$ for 1 if $\omega \in E$ and 0 otherwise. Each posterior is $\mathrm{cr}_i(\omega \mid E) = \mathrm{cr}_i(\omega)\,\mathbf{1}_E(\omega)/\mathrm{cr}_i(E)$. So the numerator of the pooled posterior at $\omega$ is

$$\prod_i \left(\frac{\mathrm{cr}_i(\omega)\,\mathbf{1}_E(\omega)}{\mathrm{cr}_i(E)}\right)^{w_i} = \frac{\mathbf{1}_E(\omega)^{\sum_i w_i}}{\prod_i \mathrm{cr}_i(E)^{w_i}}\prod_i \mathrm{cr}_i(\omega)^{w_i}.$$

Since $\sum_i w_i = 1$, $\mathbf{1}_E(\omega)^{1} = \mathbf{1}_E(\omega)$. The factor $1/\prod_i \mathrm{cr}_i(E)^{w_i}$ does not depend on $\omega$, so normalizing removes it. What remains is proportional to $\mathbf{1}_E(\omega)\prod_i \mathrm{cr}_i(\omega)^{w_i}$, which is proportional to $G(\omega)$ on $E$ and zero off it. Normalized, that is $G(\omega \mid E)$. ∎

*In words:* conditionalizing multiplies each agent's credences by the same zero-one factor, and a geometric mean passes a common factor straight through.

**Why the linear pool fails.** Expand $L(A \mid E) = \sum_i w_i\,\mathrm{cr}_i(A \cap E)/L(E)$:

$$L(A \mid E) = \sum_i \frac{w_i\,\mathrm{cr}_i(E)}{\sum_j w_j\,\mathrm{cr}_j(E)}\;\mathrm{cr}_i(A \mid E).$$

*In words:* pool-then-update is a linear pool of the posteriors with the weights shifted toward whoever found $E$ more probable. Update-then-pool keeps the old weights. They are guaranteed to agree only when every agent gave $E$ the same credence (or a single agent has all the weight).

**Calibration as a formula.** Let $c$ be the credence your first-order reasoning outputs, $h$ your credence that you are impaired, and $b$ the rate at which impaired reasoners' conclusions of this kind are true. If unimpaired outputs are calibrated and impairment is independent of whether $p$ is true, the law of total probability gives

$$\mathrm{cr}(p) = (1-h)\,c + h\,b.$$

The level-splitter keeps $\mathrm{cr}(p) = c$ whenever $c$ is what the evidence actually supports.

**Where the argument is weakest.** The case against linear pooling assumes that a conciliating agent's credences must commute with conditionalization, as if the pair were one Bayesian agent. A critic denies that. Pool-then-update reweights toward whoever predicted the evidence better, and that is arguably what a group *should* do: the evidence is information about the peers' reliability, which is higher-order evidence again. The defender of the commutation requirement replies that otherwise the order in which a group learns and deliberates changes its verdict, and that order is arbitrary. The geometric escape has its own price, too: it gives up marginalization, and lets any one agent's zero veto a world.

## The picture

![Two horizontal credence lines from 0 to 1. Top line, before evidence, credence in world w1: Sol at 0.20, Rhea at 0.60, the linear pool at 0.40 and the geometric pool at 0.39. Bottom line, after both learn that w3 is ruled out: Sol at 0.33, Rhea at 0.86, linear update then pool at 0.595, linear pool then update at 0.615, and geometric at 0.634 whichever order is used](assets/05-05-fig1.svg)

Two red dots on the bottom line where there should be one: that gap is the failure of external Bayesianity. The green dot is the same in either order.

## Worked examples

**Example 1 (clean): two peers, three worlds.** Rhea and Sol give worlds $(\omega_1, \omega_2, \omega_3)$ credences $(0.6, 0.1, 0.3)$ and $(0.2, 0.4, 0.4)$. Equal weights.

*Linear.* $L = (0.4, 0.25, 0.35)$. Both learn $E = \{\omega_1, \omega_2\}$. Pool then update: $L(\omega_1 \mid E) = 0.4/0.65 = 8/13 \approx 0.615$. Update then pool: Rhea's posterior is $(6/7, 1/7)$, Sol's is $(1/3, 2/3)$, so $\tfrac12(6/7 + 1/3) = 25/42 \approx 0.595$. They differ. The reweighting formula explains the gap: $\mathrm{cr}_{\text{Rhea}}(E) = 0.7$ and $\mathrm{cr}_{\text{Sol}}(E) = 0.6$, so pool-then-update weights the posteriors $7/13$ and $6/13$, and $\tfrac{7}{13}\cdot\tfrac67 + \tfrac{6}{13}\cdot\tfrac13 = \tfrac{8}{13}$.

*Geometric.* Unnormalized: $\sqrt{0.12}, \sqrt{0.04}, \sqrt{0.12} \approx 0.346, 0.200, 0.346$; normalized $G \approx (0.388, 0.224, 0.388)$. Then on $E$, $G(\omega_1 \mid E) = 0.346/0.546 \approx 0.634$. The other order: $\sqrt{(6/7)(1/3)} = \sqrt{2/7} \approx 0.535$ and $\sqrt{(1/7)(2/3)} = \sqrt{2/21} \approx 0.309$, giving $0.535/0.843 \approx 0.634$. Same, as the theorem says.

**Example 2 (hard): the pilot's discount.** A pilot's careful calculation gives credence $c = 0.99$ that his fuel reaches the alternate airport. He then learns there is a one-in-two chance he is hypoxic, and that hypoxic pilots' fuel conclusions of this kind are right half the time ($b = 0.5$). Calibration: $\mathrm{cr} = 0.5(0.99) + 0.5(0.5) = 0.745$.

Now the strain. Suppose his calculation was in fact flawless. The calibrationist still requires 0.745, a credence that misrepresents what his evidence supports; Christensen accepts that higher-order evidence can force an agent to fall short of *some* rational ideal. The level-splitter lets him keep 0.99, but then he holds "the fuel suffices" at 0.99 alongside credence one half that he is in no state to judge it: akrasia. And a ground controller who has rechecked his numbers gets no discount at all from the same fact about his blood oxygen. Neither view yields a verdict free of cost, and the formula is silent on where $b$ comes from.

## Watch out

- **You might think splitting the difference *is* the equal weight view.** The equal weight view ([4.5](04-05-peer-disagreement.md)) says to give a peer's opinion the same weight as your own. Linear averaging is one way to do that. Upco with symmetric treatment is another, and it can move both peers *beyond* their shared credence.
- **You might think geometric pooling simply wins.** It buys external Bayesianity by losing marginalization: the pooled credence in a proposition can change when you merely split one of its cells more finely.
- **You might think higher-order evidence is just more evidence about $p$.** It bears on $p$ only through a claim about the reasoner, so the same fact can be strong evidence for the pilot and none for the controller.

## One-liner

> Splitting the difference fails to commute with conditionalization and geometric pooling commutes at the price of marginalization; evidence that you may have reasoned badly forces a choice between a calibrated discount and akratic confidence.

## Problems

**P1 (🟢) *(Formal.)*** Kofi and Mira give worlds $(\omega_1, \omega_2, \omega_3)$ credences $(0.5, 0.3, 0.2)$ and $(0.1, 0.3, 0.6)$. Use equal weights.

(a) Compute the linear and geometric pools (three decimals).
(b) Both learn $E = \{\omega_1, \omega_2\}$. Verify, by computing both orders, that the geometric pool's credence in $\omega_1$ is the same whether they pool first or conditionalize first. Give the exact value.
(c) Now coarsen: let $B = \{\omega_2, \omega_3\}$, so each agent has credences only over $\{\omega_1, B\}$. Compute the geometric pool's credence in $\omega_1$ on the coarse partition and compare it with (a). Which property does this show the geometric pool lacks? Does the linear pool pass the same test?

**P2 (🟡) *(Formal (a) · Exegetical (b) · Evaluative (c).)*** Yusra is navigating a yacht at night after 30 hours awake. Her chart work gives credence 0.95 that the current course clears a reef. The yacht's fatigue monitor then reports a 30 percent chance that she is impaired, and impaired navigators' conclusions of this kind are right half the time.

(a) What credence does the calibration formula give? Assume her unimpaired judgment is calibrated and impairment is independent of where the reef is.
(b) She instead keeps 0.95 while giving 0.3 to "I am impaired". Which view permits this, and what is the resulting combination called? Two sentences.
(c) In 120 words or fewer, find the crux between the calibrationist and the level-splitter on her case: the single claim one side must deny, and what would move each side. Any verdict passes.

**P3 (🔴) *(Formal (a) · Exegetical (b).)*** A risk team's memo reads:

> Our two analysts work separately. This quarter they put 0.9 and 0.6 on the merger closing, so we report 0.75. Last quarter both said 0.85, so we reported 0.85; when people agree there is nothing to adjust.

(a) What does upco recommend in each quarter (as the credence of someone who starts at the first analyst's number and updates on the second's)? Three decimals.
(b) In 100 words or fewer, diagnose the memo: what does averaging assume about the two reports that upco denies, and what fact about the analysts' evidence would decide which rule fits?

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c))*

(a) Linear: $(0.3, 0.3, 0.4)$. Geometric: $\sqrt{0.05}, \sqrt{0.09}, \sqrt{0.12} \approx 0.2236, 0.3000, 0.3464$, sum $0.8700$, so $G \approx (0.257, 0.345, 0.398)$.

(b) Pool then update: $G(\omega_1 \mid E) = \dfrac{\sqrt{0.05}}{\sqrt{0.05} + \sqrt{0.09}} = \dfrac{0.2236}{0.5236} \approx 0.427$.

Update then pool: Kofi's posterior is $(5/8, 3/8)$, Mira's $(1/4, 3/4)$. Geometric: $\sqrt{5/32} \approx 0.3953$ and $\sqrt{9/32} \approx 0.5303$, so $0.3953/0.9256 \approx 0.427$.

Exact: dividing through by $\sqrt{0.01}$, both orders give $\dfrac{\sqrt5}{\sqrt5 + 3} \approx 0.427$.

(c) Coarse credences: Kofi $(0.5, 0.5)$, Mira $(0.1, 0.9)$. Geometric: $\dfrac{\sqrt{0.05}}{\sqrt{0.05} + \sqrt{0.45}} = \dfrac{1}{1+3} = 0.25$, against $0.257$ from the fine pool. So the geometric pool fails **marginalization**: the answer depends on how finely the other worlds are divided. The linear pool passes: $\tfrac12(0.5 + 0.1) = 0.3$ on either partition.

**Wrong turns:** forgetting to normalize the geometric pool (reporting $0.224$ for $\omega_1$). In (c), computing $1/(1+3)$ as $1/3$.

---

**P2** *(Formal (a) · Exegetical (b) · Evaluative (c))*

(a) $\mathrm{cr} = 0.7(0.95) + 0.3(0.5) = 0.665 + 0.15 = 0.815$.

**Must hit, strict (b):**

- Level-splitting permits it (first-order credence fixed by first-order evidence; the higher-order evidence lowers only her credence that she reasoned well).
- The combination is **epistemic akrasia** (high confidence in $p$ with substantial confidence that her evidence or reasoning does not support it).

**Must hit, any verdict (c):**

- A crux stated as one claim, e.g. whether evidence about her reliability can change what her chart evidence supports (calibrationist: yes, rational credence must bracket reasoning she has reason to distrust; level-splitter: no).
- What would move the calibrationist: a case where calibrating forces a sound reasoner off the credence her evidence supports with no gain in accuracy, pressed as a cost the view cannot absorb.
- What would move the level-splitter: an argument that akratic states are irrational, such as Horowitz's point that the akratic agent must treat her own correctness as luck.

**Wrong turns:** treating the 30 percent as evidence about the reef rather than about her. Grading the views on which credence is closer to the truth, which no one knows.

**Model answer (c), one of several:** The crux is whether higher-order evidence defeats first-order support. The calibrationist says Yusra's credence must answer to everything she knows, including a 30 percent chance that her chart work is unreliable, so 0.95 is no longer rational. The level-splitter says her chart work supports 0.95 if it was done right, and the monitor bears only on whether she should believe it was. The calibrationist should move if it can be shown that discounting systematically pulls good reasoners away from their evidence with nothing gained. The level-splitter should move if akrasia proves incoherent: if Yusra cannot consistently act on 0.95 while expecting to be wrong more often than 0.95 implies.

---

**P3** *(Formal (a) · Exegetical (b))*

(a) This quarter: odds $9 \times 1.5 = 13.5$, so $13.5/14.5 \approx 0.931$, against the memo's $0.75$. Last quarter: $\dfrac{0.85^2}{0.85^2 + 0.15^2} = \dfrac{0.7225}{0.745} = \dfrac{289}{298} \approx 0.970$, against $0.85$.

**Must hit, strict (b):**

- Averaging treats the reports as two estimates of one quantity drawn from the *same* evidence, so agreement adds nothing and a lower report pulls the higher one down.
- Upco treats each report as *independent* evidence, a likelihood ratio, so agreement compounds and even a 0.6 report counts as evidence *for* the merger (anything above even odds does).
- The deciding fact: how far the analysts' evidence overlaps. Shared data and methods favour averaging; independent sources favour upco. "Work separately" is a claim about procedure, not about their sources.

**Wrong turns:** calling upco's 0.931 an overreaction without noting that it is exactly Bayesian under its assumptions. Saying the memo is wrong because 0.75 is "between" the reports; being between them is precisely what averaging guarantees and upco rejects.

**Model answer (b):** The memo assumes the analysts' numbers are two readings of one body of evidence, so the right report is their mean and agreement is idle. Upco assumes each analyst saw independent evidence and started from even odds, so each report multiplies the odds: 0.6 is weak evidence for closing, and two 0.85s are much stronger than one. Which fits depends on whether their evidence overlaps. If both read the same filings and models, averaging is closer to right; if they rely on separate sources, the memo is throwing information away.

</details>

## Flashback

**From Lesson [5.3](05-03-conditionalization.md) (Conditionalization):** *(Formal (a)–(b) · Exegetical (c).)* A restorer is unsure whether a panel's varnish is original ($E$). Her credences: $\mathrm{cr}_0(E) = 0.5$, $\mathrm{cr}_0(H \mid E) = 0.8$ and $\mathrm{cr}_0(H \mid \neg E) = 0.2$, where $H$ is "the panel is by the workshop's master". Two inspections each bear only on $E$: under raking light (experience A) she would come to 0.7 in $E$ from her prior, and under ultraviolet (experience B) she would come to 0.4 in $E$ from her prior.

(a) Record each experience as a target value for $\mathrm{cr}(E)$ and apply Jeffrey conditionalization in the order A then B, and in the order B then A. Give her final credence in $H$ each way.

(b) Instead record each experience as the factor by which it multiplies her odds on $E$. Find both factors, apply them in either order, and give the final $\mathrm{cr}(E)$ and $\mathrm{cr}(H)$ as exact fractions.

(c) In one sentence: why does (a) depend on order while (b) does not?

<details>
<summary>Solution</summary>

**Worked arithmetic (a):** Jeffrey's rule here is $\mathrm{cr}(H) = 0.8\,\mathrm{cr}(E) + 0.2\,(1 - \mathrm{cr}(E))$, and rigidity keeps $0.8$ and $0.2$ fixed through every update. A then B: after A, $0.7(0.8) + 0.3(0.2) = 0.62$; after B, $0.4(0.8) + 0.6(0.2) = 0.44$. B then A: $0.44$, then $0.62$. Final credence $0.44$ one way and $0.62$ the other.

**Worked arithmetic (b):** Prior odds on $E$ are $1$. A takes them to $0.7/0.3 = 7/3$, so its factor is $7/3$; B takes them to $0.4/0.6 = 2/3$, so its factor is $2/3$. Either order: $1 \times \tfrac73 \times \tfrac23 = \tfrac{14}{9}$, so $\mathrm{cr}(E) = \tfrac{14}{23} \approx 0.609$ and

$$\mathrm{cr}(H) = \tfrac{14}{23}(0.8) + \tfrac{9}{23}(0.2) = \tfrac{11.2 + 1.8}{23} = \tfrac{13}{23} \approx 0.565.$$

**Must hit, strict (c):**

- A target value fixes where $\mathrm{cr}(E)$ ends up regardless of where it started, so the later experience overwrites the earlier one; a factor records how much the experience *shifts* the odds, and multiplication commutes.

**Wrong turns:** in (a), averaging the two targets or reweighting $\mathrm{cr}_0(H)$ instead of the conditional credences; in (b), multiplying probabilities (0.7 × 0.4) instead of odds, or computing B's factor relative to the post-A credence rather than the prior.

**Model answer (c):** Each target value says "end at 0.7" or "end at 0.4" whatever the starting point, so whichever comes last wins; each factor says "multiply the odds by this much", and two multiplications give the same product in either order.

</details>

## Connections

- **Backward:** [4.5](04-05-peer-disagreement.md) stated conciliationism, the steadfast view and total evidence in prose; this lesson makes conciliation a pooling rule. [5.3](05-03-conditionalization.md)'s conditionalization is the constraint pooling is tested against. [5.4](05-04-the-problem-of-priors.md)'s merging of opinions is the long-run case: shared data drive disagreeing priors together, while pooling asks what to do now.
- **Forward:** [`philosophy-of-science`](../../philosophy-of-science/syllabus.md) builds Bayesian confirmation theory on Module 5. Judgment aggregation, where majority votes on logically linked propositions go incoherent, is [`social-choice`](../../social-choice/syllabus.md)'s. Religious diversity as a disagreement problem belongs to [`philosophy-of-religion`](../../philosophy-of-religion/syllabus.md) 5.5.
- **Sideways:** Harsanyi's theorem ([decision-theory 5.1](../../decision-theory/lessons/05-01-harsanyis-aggregation-theorem.md)) makes social *utility* a weighted sum; linear pooling is the same move for credence. Upco's synergy is the logic of [Condorcet's jury theorem](../../political-philosophy/lessons/05-01-why-democracy.md), and both depend on independence.

## Closing the course

The course began with a broken analysis of knowledge and has ended with a formal account of rational credence. Along the way it built a toolkit, not a verdict. You can state a theory of knowledge or justification as explicit conditions and run it on a case. You can lay out the regress and the closure argument and say which premise each response denies. You can tell an a priori question from a modal one, and say what each answer to Hume concedes. And you can build a Dutch book, prove accuracy dominance, conditionalize on certain and uncertain evidence, and pool credences.

Two downstream courses lean on this directly. [`philosophy-of-science`](../../philosophy-of-science/syllabus.md) turns Module 5 into confirmation theory. [`philosophy-of-religion`](../../philosophy-of-religion/syllabus.md) uses Modules 1–2 for evidentialism and reformed epistemology, 4.5 for religious diversity, and Module 5 for the priors and odds behind arguments for God.

What remains open is the seam this lesson ended on: how evidence about our own reliability should bear on what our evidence supports. Internalism and externalism, skepticism, disagreement and calibration all meet there, and no one has closed it.

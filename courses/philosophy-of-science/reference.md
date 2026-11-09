# Philosophy of Science · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The course asks what licenses the inferences science runs on: what makes evidence confirm a
hypothesis, what a failed test refutes, what a p-value or a Bayes factor reports, when a story
explains, and how much of a successful theory to believe. It takes no side. Every school is stated
as its defenders state it, with the premise its critics attack, and no entry records a verdict. Use
the card mid-problem to find what a word means ([Terms](#terms)), a position and its traps
([Positions and distinctions](#positions-and-distinctions)), a measure with its symbols defined
([Formulas and computations](#formulas-and-computations)), an argument's premises in outline
([Arguments](#arguments)), or who said what and when ([Thinkers and texts](#thinkers-and-texts)).
Topics another course owns are listed with their owners in
[Assumed, not taught here](#assumed-not-taught-here), and the recurring traps are in
[Pitfalls](#pitfalls).

## Terms

Technical vocabulary in first-appearance order, glossed as the lessons gloss it. Terms with a full
entry below link to it. *First used* is the first lesson that uses the term in this sense; titles,
forward pointers and passing uses in another sense don't count. Letters get reused ($R$ has several
jobs across the course), so read a letter with its lesson.

| Term | Means | First used |
|---|---|---|
| logic of confirmation | a relation between evidence report and hypothesis, fixed by logical form and checkable like a proof (Hempel's project) | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| [instance](#instance-confirmation) | for "All $F$ are $G$", an object that is $F$ and $G$ | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| [auxiliaries](#auxiliary-hypotheses), background $K$ | the further assumptions a hypothesis needs in order to yield a testable prediction | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| Hempel's conditions | the rules Hempel (1945) required of any notion of support: [entailment](#entailment-condition), [special consequence](#special-consequence-condition), [equivalence](#equivalence-condition), [special consistency](#consistency-condition); he rejected [converse consequence](#converse-consequence-condition) | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| [collapse, triviality](#hempels-triviality-result) | the result that every report confirms every hypothesis | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| conjunction, conjunct | a statement of the form "$A$ and $B$", and one of its parts | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| [tacking](#tacking-problem) | adding an unrelated statement $X$ to a hypothesis and collecting its hypothetico-deductive confirmation | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| idle conjunct | a conjunct the derivation of the evidence $E$ does not need; which conjunct counts as idle depends on the wording | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| [grue](#grue) | examined before time $t$ and green, or not so examined and blue | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| [projectible](#projectibility) | a hypothesis entitled to be extended to unexamined cases: positive instances, no counterinstances, undetermined cases left, every conflicting rival overridden | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| [lawlike](#lawlike-and-accidental-generalizations) | confirmed by its instances and supports counterfactuals, true or not ([4.4](lessons/04-04-laws-in-the-sciences.md) glosses it "a law if true") | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| [accidental generalization](#lawlike-and-accidental-generalizations) | even if true, not confirmed by its instances and supports no counterfactual | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| [positional](#positional-and-qualitative-predicates) | a predicate whose definition names a particular time or place | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| [purely qualitative](#positional-and-qualitative-predicates) | a predicate whose definition names no particular time or place | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| bleen | examined before $t$ and blue, or not so examined and green | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| [entrenched](#entrenchment) | actually projected in the past, by this predicate or any with the same extension | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| overridden | beaten by a conflicting hypothesis with the same record and better entrenched predicates | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| projection | inference from examined to unexamined cases | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| [underspecification](#underspecification) | many predictors equally good on held-out data from the training domain, differing in deployment (D'Amour and colleagues, 2020) | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| [nonprojectible](#projectibility) | Goodman's category: a hypothesis and a conflicting one are both live and neither is overridden | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| firmness | Carnap's name for a hypothesis's probability given the evidence: [absolute confirmation](#absolute-confirmation) | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| increase in firmness | Carnap's name for the rise in probability the evidence produces: [incremental confirmation](#incremental-confirmation) | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| credence function $P$ | the probability function over hypotheses and evidence, `epistemology`'s $\mathrm{cr}$; $\Pr$ stays reserved for chance | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| $\mathrm{LR}$ | the likelihood ratio $P(E \mid H)/P(E \mid \neg H)$, always stated as against $\neg H$ or against a named rival | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| LR against a named rival | $P(E \mid H)/P(E \mid \text{rival})$ with definite likelihoods: free of priors, but a different quantity from LR against $\neg H$ | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| white shoe | stock example of a non-black non-raven | [1.4](lessons/01-04-the-ravens-paradox.md) |
| methodological fiction | Hempel's stipulation that $E$ is treated as the whole evidence for $H$ | [1.4](lessons/01-04-the-ravens-paradox.md) |
| frozen margins | this lesson's label for a rival that makes some ravens white while keeping the raven total and the non-black total fixed, so some non-black non-ravens turn black | [1.4](lessons/01-04-the-ravens-paradox.md) |
| frozen non-ravens | this lesson's label for a rival that recolours ravens and changes no non-raven cell | [1.4](lessons/01-04-the-ravens-paradox.md) |
| [route of collection](#sampling-procedure-and-the-ravens) | how the object reached the observer: drawn from ravens, from non-black things, from non-ravens, or from everything | [1.4](lessons/01-04-the-ravens-paradox.md) |
| [old evidence](#problem-of-old-evidence) | evidence the agent already knows with certainty before seeing what a hypothesis says about it | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| [logical omniscience](#logical-omniscience) | credence 1 in every logical truth, and so in every entailment | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| [counterfactual credence](#counterfactual-solution) $P^{-E}$ | the credence function the agent would have had if she had not known $E$ | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| $L$, $R$ | in this lesson, the sentences "$H$ with the background entails $E$" and "$H$ with the background entails $\neg E$", given credences of their own ([logical learning](#logical-learning-solution)) | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| modus ponens (for $L$, $R$) | the constraint $P(E \mid H \wedge L) = 1$ and $P(E \wedge H \wedge R) = 0$ | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| $S$ | in this lesson, $\neg L \wedge \neg R$: $H$ is silent on $E$ | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| [problem of new theories](#problem-of-new-theories) | a hypothesis no one has conceived has no prior | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| standing support | the relation $E$ bears to $H$ whether or not anyone still needs $E$ | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| [use-novelty](#use-novelty) | data used to construct a hypothesis cannot test it | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| adjustable parameter, $k$ | a number a family of curves leaves free to be set by the data; $k$ counts them | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| [family of curves](#curve-fitting-problem) | a set of curves sharing a form, such as all straight lines | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| $\hat L$ | the maximized likelihood: the highest probability any member of a family gives the $n$ data points | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| LIN, PAR | $y = a + bx$ plus noise; $y = a + bx + cx^2$ plus noise | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| [marginal likelihood](#marginal-likelihood) | $P(x \mid H)$ averaged over the prior inside $H$: a family's fit averaged over what it might have said | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| [Occam factor](#bayesian-occam-factor) | for a sharp peak, the fraction of prior range that survives the data; best fit times this is the marginal likelihood (MacKay) | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| characteristic width | the width whose product with the peak equals the area under it; $\sqrt{2\pi}$ standard deviations for a Gaussian | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| consistency (of a selection rule) | selecting the true family with probability approaching 1 as the sample size $n$ grows | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| held-out error | mean squared error on data not used in fitting | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| [modus tollens](#modus-tollens-asymmetry) | from "if $P$ then $Q$" and "not $Q$", infer "not $P$" | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [strictly universal statement](#strictly-universal-and-existential-statements) | an all-statement unrestricted in space and time | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [purely existential statement](#strictly-universal-and-existential-statements) | a there-is statement unrestricted in space and time | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [falsifiable](#falsifiability) | some possible report would contradict the theory | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [basic statement](#basic-statement) | a singular report, "there is an X at place and time Y" | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [potential falsifier](#potential-falsifiers) | a possible basic statement the theory rules out | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [demarcation problem](#demarcation-problem) | what, if anything, separates science from pseudoscience and other non-science | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [non-science](#pseudoscience-bad-science-and-non-science) | inquiry or practice aiming at something other than empirical knowledge of the world; no defect implied ([2.6](lessons/02-06-demarcation-after-popper.md) sorts it from pseudoscience and bad science) | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [bold conjecture](#bold-conjecture) | a theory of high content and so low probability | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [corroboration](#corroboration) | a report of survival of severe tests; not a probability | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| severe test | a serious attempt to refute a theory, where failure was a live possibility | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| falsified | a contradicting report has been accepted and a reproducible effect established | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| reproducible effect | what Popper (*The Logic of Scientific Discovery*, §22) requires before a theory counts as falsified | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [conventionalist stratagem](#conventionalist-stratagem) | a rescue that costs the theory its testability | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [immunizing strategies](#immunizing-strategies) | moves shielding a doctrine from counterevidence and criticism; recent writers' term for such rescues | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| relying versus preferring | Popper's 1974 answer on prediction: rely on no theory, but since you must choose, prefer the best tested | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| [confirmational holism](#confirmational-holism) | hypotheses are tested only in groups | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| [holist underdetermination](#holist-underdetermination) | start from a failed test: more than one revision restores fit | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| [contrastive underdetermination](#contrastive-underdetermination) | start from the evidence: more than one theory fits it | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| reductio (reduction to absurdity) | refuting a claim by deriving a contradiction from it | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| *experimentum crucis*, [crucial experiment](#crucial-experiment) | an experiment supposed to refute one rival and thereby prove the other | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| emission theory | light as projectiles, on the Newtonian model (Duhem's emission system) | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| [good sense](#good-sense) (*bon sens*) | Duhem's judgment beyond logic about which hypothesis to give up | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| [web of belief](#web-of-belief) | all accepted statements as one connected fabric | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| recalcitrant experience | an experience that conflicts with what the web predicts | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| [empirically equivalent theories](#empirically-equivalent-theories) | rivals with the same observational consequences | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| ampliative rules | rules of good reasoning that go beyond deductive logic | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| [normal science](#normal-science) | puzzle-solving under an accepted paradigm | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| puzzle | a problem with an assured solution, where failure reflects on the solver | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [paradigm](#paradigm) | what a community shares (broad sense) or a model solved problem (narrow sense) | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [disciplinary matrix](#disciplinary-matrix) | the shared whole of a community's commitments | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| symbolic generalization | a formal or formalizable expression the community accepts, such as $f = ma$ | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [exemplar](#exemplar) | a concrete solved problem met in training | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [pre-paradigm period](#pre-paradigm-period) | rival schools, no single paradigm | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [anomaly](#anomaly-and-crisis) | nature failing to fit paradigm-induced expectation | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [crisis](#anomaly-and-crisis) | confidence in the practice itself shaken, its symptom a multiplying of versions of the theory | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [scientific revolution](#scientific-revolution) | replacement of one paradigm by a rival | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [Kuhn loss](#kuhn-loss) | explanatory power lost in a revolution | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [theory-ladenness](#theory-ladenness-of-observation) | dependence of observation on prior belief; later writers separate what observers perceive, what they attend to, and what their reports mean | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [gestalt switch](#gestalt-switch) | the duck-rabbit flip, used as a likeness for paradigm change | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [tenacity](#tenacity-and-proliferation) | keeping a theory despite difficulties (Feyerabend's label) | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [proliferation](#tenacity-and-proliferation) | developing rivals alongside it (Feyerabend's label) | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| [incommensurable](#incommensurability) | having no common measure; not the same as incomparable | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [methodological incommensurability](#methodological-incommensurability) | rivals disagree over problems and standards of solution | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [semantic incommensurability](#semantic-incommensurability) | rival theories' key terms do not translate without loss | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [partial denotation](#partial-denotation) | a term partly referring to two things (Field 1973) | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [local incommensurability](#local-and-taxonomic-incommensurability) | untranslatability confined to a small cluster of interdefined terms | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [taxonomic incommensurability](#local-and-taxonomic-incommensurability) | untranslatability from a re-sorting of kinds | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| no-overlap principle | Kuhn: categories cross-classifying the same objects cannot be merged into one taxonomy | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| translation versus interpretation | Kuhn: rendering an old lexicon word for word versus learning it, as a bilingual does | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [accuracy](#five-values-of-theory-choice) (a value) | agreement of a theory's consequences with experiment and observation | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [consistency](#five-values-of-theory-choice) (a value) | internal, and with other accepted theories | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [scope](#five-values-of-theory-choice) (a value) | consequences extending beyond the data a theory was built for | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [simplicity](#five-values-of-theory-choice) (a value) | ordering otherwise confused phenomena; which sense is disputable | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [fruitfulness](#five-values-of-theory-choice) | disclosing new phenomena or relations for further research | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| ["no neutral algorithm"](#choice-without-an-algorithm) | Kuhn's phrase for the absence of a decision procedure that returns one answer for all | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| judgment versus taste | judgment can be discussed and defended, matters of taste cannot (Kuhn 1977) | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| [research programme](#methodology-of-research-programmes) | a series of theories sharing a hard core, the unit Lakatos appraises | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| [hard core](#hard-core) | the claims kept fixed across a programme by decision | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| [protective belt](#protective-belt) | auxiliary hypotheses revised to absorb anomalies | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| [degenerating](#degenerating-problem-shift) | a shift that is not both theoretically and empirically progressive: its repairs only absorb old failures | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| [counterinduction](#counterinduction) | developing hypotheses that contradict well-established theories or results | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| [negative heuristic](#positive-and-negative-heuristic) | the rule forbidding refutations aimed at the core | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| [positive heuristic](#positive-and-negative-heuristic) | a partly articulated plan for rebuilding the belt | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| [theoretically progressive](#progressive-problem-shift) | a repair that predicts some novel fact | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| [novel fact](#novel-prediction) | first, a fact not yet known and unexpected on rivals; on Zahar's relaxed reading, a known fact the programme's core was not built to fit | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| [empirically progressive](#progressive-problem-shift) | some of that excess content is corroborated | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| excess content | what the new theory predicts beyond its predecessor | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| instant rationality | Lakatos's phrase for what his methodology does not offer | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| ["anything goes"](#methodological-anarchism) | Feyerabend's conclusion that a rule which never inhibits progress must be empty; a 1987 preface says it is no principle he holds | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| [natural interpretation](#natural-interpretations) | an idea fused with observation so that it goes unnoticed | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| operative motion | motion with perceptible effects; the natural interpretation in the tower argument is that all motion is operative | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| anamnesis | Feyerabend's name for Galileo presenting new principles as things his readers already knew | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| definers | those who want necessary and sufficient conditions for science | [2.6](lessons/02-06-demarcation-after-popper.md) |
| [cluster theorists](#cluster-accounts-of-science) | those who give up the definition and keep the distinction | [2.6](lessons/02-06-demarcation-after-popper.md) |
| [eliminativists](#demise-of-the-demarcation-problem) | those who, following Laudan, drop the distinction and ask only whether a claim is well supported | [2.6](lessons/02-06-demarcation-after-popper.md) |
| [bad science](#pseudoscience-bad-science-and-non-science) | a real scientific attempt that fails | [2.6](lessons/02-06-demarcation-after-popper.md) |
| [pseudoscience](#pseudoscience-bad-science-and-non-science) | unscientific claims belonging to a doctrine whose leading advocates present it as the best available knowledge of its subject | [2.6](lessons/02-06-demarcation-after-popper.md) |
| [essential characteristics](#mclean-v-arkansas) | the *McLean* court's phrase for its five marks, read as individually necessary | [2.6](lessons/02-06-demarcation-after-popper.md) |
| epistemic heterogeneity | Laudan's term for how widely the activities called science differ in support | [2.6](lessons/02-06-demarcation-after-popper.md) |
| [intrinsic methodological naturalism](#methodological-naturalism) | science by its nature cannot address the supernatural | [2.6](lessons/02-06-demarcation-after-popper.md) |
| [provisory methodological naturalism](#methodological-naturalism) | natural causes as an evidence-based, revocable commitment | [2.6](lessons/02-06-demarcation-after-popper.md) |
| semicolon notation $P(x;\theta)$ | sampling probability of data $x$ at a fixed parameter value $\theta$; $P(x \mid \theta)$ appears only in Bayesian passages | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| [reference class](#reference-class-problem) | the population within which relative frequencies are taken; $R$ in [4.2](lessons/04-02-causal-explanation.md) | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| null hypothesis $H_0$ | the hypothesis under test, put up to be nullified; need not mean "no effect" (Gigerenzer 2004 on Fisher) | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| statistic $T$ | a function of the data whose distribution under $H_0$ is known | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| rejection region $R$ | the set of outcomes on which a [Neyman-Pearson](#neyman-pearson-tests) rule rejects $H_0$, fixed before the data | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| $\alpha$ (the level) | the probability, under $H_0$, of landing in $R$: how often you will tolerate a false alarm | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| $\beta$ | the probability, under the alternative $H_1$, of not landing in $R$ | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| power | $1 - \beta$ | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| acceptance procedure | an inspection routine for a supplier's consignments; Fisher's name for what he says Neyman turned the significance test into | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| fiducial argument | Fisher's attempt to obtain a probability statement about a parameter without a prior | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| credible interval | an interval holding a stated posterior probability, with the data held fixed | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| null ritual | Gigerenzer's name for the routine of a single null, 5 percent, always | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| [conditional and unconditional error rate](#coxs-two-instruments) | the error rate of a rule given which experiment was actually run, and averaged over a randomizing device such as Cox's coin | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| likelihood function | the probability of the data as a function of the parameter, with the data held fixed: $\theta \mapsto P(x;\theta)$ (`prob-stat-refresher` 4.1) | [3.2](lessons/03-02-the-likelihood-principle.md) |
| simple hypothesis | one that fixes the probability of every outcome | [3.2](lessons/03-02-the-likelihood-principle.md) |
| [stopping rule](#stopping-rule) | the rule that says when data collection ends | [3.2](lessons/03-02-the-likelihood-principle.md) |
| sample space | the set of outcomes the experiment could have produced; set by the design | [3.2](lessons/03-02-the-likelihood-principle.md) |
| [peeking](#optional-stopping) | running a test at interim points with the intention of stopping if significant | [3.2](lessons/03-02-the-likelihood-principle.md) |
| actual $\alpha$ | the chance of false rejection for the whole procedure, as against the nominal per-look level | [3.2](lessons/03-02-the-likelihood-principle.md) |
| point null | a hypothesis fixing a parameter at one value | [3.2](lessons/03-02-the-likelihood-principle.md) |
| [selection effect](#observation-selection-effects) | here, when the data-collection process alters the probability of the data; in [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md), Mayo's usage, a change in a procedure's error probabilities caused by how results were chosen for reporting | [3.2](lessons/03-02-the-likelihood-principle.md) |
| base rate $\pi$ | the fraction of tested hypotheses that are true; in [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), the proportion of approximately true theories among the candidates | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| pre-study odds $R$ | true hypotheses to false ones among those a field tests: $\pi/(1-\pi)$ | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| [positive predictive value](#positive-predictive-value) (PPV) | the share of a field's significant results that are true | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| [false discovery proportion](#false-discovery-proportion) | 1 minus PPV | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| [bias term](#ioannidis-bias-term) $u$ | the proportion of analyses that would not have been findings but are reported as findings | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| researcher degrees of freedom | undisclosed analytic flexibility (Simmons, Nelson and Simonsohn) | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| specification garden | `econometrics` 2.7's name for the same territory | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| [forking paths](#forking-paths) | data-contingent analysis choices that create hidden comparisons without any fishing | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| [severity](#severe-testing) | how probably the procedure would have produced a result agreeing less well with a claim, were the claim false | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| [value-free ideal](#value-free-ideal) | non-epistemic values should stay out of gathering evidence and accepting hypotheses | [3.4](lessons/03-04-values-and-inductive-risk.md) |
| [epistemic value](#epistemic-and-non-epistemic-values) | a value meant to bear on whether a theory is true, such as accuracy, scope, simplicity | [3.4](lessons/03-04-values-and-inductive-risk.md) |
| [non-epistemic (contextual) value](#epistemic-and-non-epistemic-values) | the rest: safety, profit, justice | [3.4](lessons/03-04-values-and-inductive-risk.md) |
| [inductive risk](#argument-from-inductive-risk) | the chance of error in accepting or rejecting a hypothesis (Hempel's term) | [3.4](lessons/03-04-values-and-inductive-risk.md) |
| [acceptance, Levi's two senses](#levis-reply) | deciding what to believe in the search for truth versus deciding how to act | [3.4](lessons/03-04-values-and-inductive-risk.md) |
| internal stages of inquiry | choosing a method, characterizing data, interpreting results | [3.4](lessons/03-04-values-and-inductive-risk.md) |
| [direct role](#direct-and-indirect-roles-for-values) | a value serving as a reason in itself for a claim or an action | [3.4](lessons/03-04-values-and-inductive-risk.md) |
| [indirect role](#direct-and-indirect-roles-for-values) | a value helping settle how much evidence is enough, given uncertainty | [3.4](lessons/03-04-values-and-inductive-risk.md) |
| [manipulable objectivity](#senses-of-objectivity) | you can reliably use the result to do something else | [3.5](lessons/03-05-objectivity.md) |
| [convergent objectivity](#convergent-objectivity) | independent routes reach the same result | [3.5](lessons/03-05-objectivity.md) |
| [detached objectivity](#detached-objectivity) | wishes do not stand in for evidence | [3.5](lessons/03-05-objectivity.md) |
| [value-free objectivity](#senses-of-objectivity) | no values enter the reasoning at all | [3.5](lessons/03-05-objectivity.md) |
| [value-neutral objectivity](#senses-of-objectivity) | a balanced position across contested values | [3.5](lessons/03-05-objectivity.md) |
| [procedural objectivity](#procedural-objectivity) | the same outcome whoever runs the process | [3.5](lessons/03-05-objectivity.md) |
| [concordant objectivity](#concordant-objectivity) | competent observers, polled separately, agree | [3.5](lessons/03-05-objectivity.md) |
| [interactive objectivity](#interactive-objectivity) | agreement reached by arguing it out | [3.5](lessons/03-05-objectivity.md) |
| [mechanical objectivity](#mechanical-objectivity) | the effort to take the human hand out of the image (Daston and Galison) | [3.5](lessons/03-05-objectivity.md) |
| [transformative criticism](#critical-contextual-empiricism) | criticism that can change what a community accepts (Longino's term) | [3.5](lessons/03-05-objectivity.md) |
| [venues, uptake, public standards](#longinos-four-norms), [tempered equality](#tempered-equality) | Longino's four norms: recognized places for criticism, beliefs actually shifting in response, public standards for judging it, and equal intellectual authority that can be lost by failing to engage | [3.5](lessons/03-05-objectivity.md) |
| [strong objectivity](#strong-objectivity) | scrutinizing the knowers as rigorously as the known (Harding) | [3.5](lessons/03-05-objectivity.md) |
| [truth-seeking clones](#division-of-cognitive-labour) | scientists who each join the likeliest programme | [3.5](lessons/03-05-objectivity.md) |
| [credit-seekers](#division-of-cognitive-labour) | scientists who each maximize expected credit | [3.5](lessons/03-05-objectivity.md) |
| focal-animal sampling | recording what a chosen individual does for a fixed period (Altmann 1974) | [3.5](lessons/03-05-objectivity.md) |
| individualist about objectivity | holds that objectivity is achieved by a single reasoner, colleagues only helping | [3.5](lessons/03-05-objectivity.md) |
| nomological | lawful; involving a law of nature | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| antecedent conditions | particular facts cited alongside laws | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| [explanans](#explanans-and-explanandum) | the premises, laws and conditions, that do the explaining | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| [explanandum](#explanans-and-explanandum) | the sentence describing what is explained | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| [nomic expectability](#nomic-expectability) | being expected on the basis of laws | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| statistical probability | a long-run relative frequency in a class, not a credence | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| [knowledge situation](#maximal-specificity) $K$ | everything accepted at the time, to which inductive-statistical explanation is relative | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| objectively homogeneous class | a class with no relevant split left, on which Salmon says an explanation should turn ([4.2](lessons/04-02-causal-explanation.md) partitions into such cells) | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| incomplete explanation | an account that leaves laws or conditions tacit, such as a car overturning because a tyre blew out (Hempel and Oppenheim 1948) | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| difference-makers | the factors whose change would have changed the outcome | [4.2](lessons/04-02-causal-explanation.md) |
| [intervention](#interventionism) | sets the variable, snaps the arrows into it, touches nothing else except downstream (`metaphysics` 4.2) | [4.2](lessons/04-02-causal-explanation.md) |
| [statistically relevant](#statistical-relevance) | changes the probability of the outcome $O$ within the reference class | [4.2](lessons/04-02-causal-explanation.md) |
| [screening off](#screening-off) | given $G$, factor $F$ adds nothing about the outcome $O$ | [4.2](lessons/04-02-causal-explanation.md) |
| [causal process](#causal-processes-and-mark-transmission) | a process able to carry a mark with no further help | [4.2](lessons/04-02-causal-explanation.md) |
| [pseudo-process](#causal-processes-and-mark-transmission) | a moving pattern that cannot carry a mark, such as the spot from a rotating spotlight | [4.2](lessons/04-02-causal-explanation.md) |
| [mark](#causal-processes-and-mark-transmission) | a local modification of a process | [4.2](lessons/04-02-causal-explanation.md) |
| conserved quantity | a quantity such as charge or momentum that current physics says is conserved | [4.2](lessons/04-02-causal-explanation.md) |
| [mechanism](#mechanisms) | "entities and activities" organized to produce regular change from set-up to termination (Machamer, Darden and Craver) | [4.2](lessons/04-02-causal-explanation.md) |
| [invariance](#invariance) | continued holding of a generalization under interventions on its variables | [4.2](lessons/04-02-causal-explanation.md) |
| [explanatory depth](#explanatory-depth) | how much an explanation says about what the explanandum depends on | [4.2](lessons/04-02-causal-explanation.md) |
| what-if-things-had-been-different questions | Woodward's term for questions about how the explanandum would have differed under changes in the explanans | [4.2](lessons/04-02-causal-explanation.md) |
| scope (of a generalization) | how many kinds of system a generalization applies to; not depth | [4.2](lessons/04-02-causal-explanation.md) |
| [structural equation](#structural-equations) | an equation for one variable in terms of its direct causes and an unmodelled cause $U$ | [4.2](lessons/04-02-causal-explanation.md) |
| do-notation $\mathrm{do}(B{=}b)$ | $B$ set to $b$ by an intervention | [4.2](lessons/04-02-causal-explanation.md) |
| [functional equivalent](#functional-explanation) | another item that could meet the same need; in [4.4](lessons/04-04-laws-in-the-sciences.md), an alternative the same selection pressures could yield | [4.2](lessons/04-02-causal-explanation.md) |
| [etiological](#etiological-function) | concerning the history that produced something | [4.2](lessons/04-02-causal-explanation.md) |
| [constitutive](#systemic-function) | concerning how parts make up a whole | [4.2](lessons/04-02-causal-explanation.md) |
| [unification](#unification-account) | reducing what must be accepted as given | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| [consilience](#consilience-of-inductions) | Whewell's "jumping together" of inductions from different classes of fact | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| [argument pattern](#argument-patterns) | a schematic form of derivation with rules for filling its blanks | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| stringent | of a pattern: restricting what may instantiate it | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| [spurious unification](#spurious-unification) | apparent unification by a pattern that fits anything | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| [explanatory store](#explanatory-store) | the best-unifying set of patterns for the beliefs $K$ accepted at a time | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| [non-causal explanation](#non-causal-explanation) | an explanation resting on a non-causal, often mathematical, premise | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| [why-question](#why-questions) | a question with topic, contrast class and relevance relation | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| topic $P_k$ | what is being asked about | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| [contrast class](#contrast-class) $X$ | the alternatives set against the topic | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| [relevance relation](#relevance-relation) $R$ | the kind of fact wanted in reply | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| direct answer | "$P_k$, in contrast to the rest of $X$, because $A$", with $A$ bearing $R$ to the topic and contrast class | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| pragmatic virtue | a virtue concerning a theory's use, not its truth | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| [explanatory pluralism](#explanatory-pluralism) | no single account covers all explanation | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| law | traditionally, a generalization that supports counterfactuals, can explain its instances, and licenses projection | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| [ceteris paribus](#ceteris-paribus-laws) | "other things equal": comparative if other factors are held fixed, exclusive if disturbing factors are absent | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| proviso | a clause excluding disturbing factors (Hempel 1988) | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| [weak and strong contingency](#evolutionary-contingency-thesis) | Beatty's two senses: the conditions that made a trait common can change; the same conditions and selection pressures can yield functionally equivalent alternatives | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| necessity test | whether anything in nature necessitates a generalization; the test Beatty applies | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| [tendency law](#tendency-laws), capacity | Mill's law and Cartwright's capacity: what a cause contributes in every case, outweighed or not | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| [stability of conditions, strength of determination](#pragmatic-laws) | Mitchell's two dimensions, on which generalizations vary continuously | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| segregation distorter | a gene that biases its own transmission | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Hardy–Weinberg | genotype frequencies $p^2$, $2pq$, $q^2$ after one generation of random mating, with $p$, $q$ the allele frequencies, under Mendelian inheritance and no selection, mutation or migration | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| [reduction](#nagelian-reduction) (Nagelian) | connecting a theory's terms to another's and deriving its laws | [4.5](lessons/04-05-reduction-and-emergence.md) |
| [special sciences](#autonomy-of-the-special-sciences) | every science except physics, in Fodor's usage | [4.5](lessons/04-05-reduction-and-emergence.md) |
| connectability | each new term is tied to the reducing theory by an added assumption, a [bridge law](#bridge-laws) | [4.5](lessons/04-05-reduction-and-emergence.md) |
| derivability | the laws follow deductively from the reducing theory, bridges and boundary conditions | [4.5](lessons/04-05-reduction-and-emergence.md) |
| homogeneous reduction | one needing no bridges because no new terms appear | [4.5](lessons/04-05-reduction-and-emergence.md) |
| [token physicalism](#token-physicalism) | each particular event is physical | [4.5](lessons/04-05-reduction-and-emergence.md) |
| natural kind of physics | a kind that figures in physics's laws; the partner Fodor's bridge law would need for each special-science kind | [4.5](lessons/04-05-reduction-and-emergence.md) |
| [realizer](#multiple-realizability) | the physical kind that makes a higher-level kind instantiated on an occasion | [4.5](lessons/04-05-reduction-and-emergence.md) |
| closed disjunction, open-ended realizers | a fixed list of bases versus an open-ended one (Fodor 1997) | [4.5](lessons/04-05-reduction-and-emergence.md) |
| constructionism | Anderson's term for the claim that knowing fundamental laws lets you rebuild large aggregates | [4.5](lessons/04-05-reduction-and-emergence.md) |
| glider | five-cell pattern in Conway's Game of Life that returns to its shape every 4 generations, shifted one cell diagonally | [4.5](lessons/04-05-reduction-and-emergence.md) |
| R-pentomino | five-cell Game of Life seed that settles only after 1,103 generations | [4.5](lessons/04-05-reduction-and-emergence.md) |
| [scientific realism](#scientific-realism) | belief that our best theories are approximately true of a mind-independent world, unobservables included | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| [instrumentalism](#instrumentalism) | theories are tools, not descriptions | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| mature theory | a well-established, predictively successful theory in an established field | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| [approximate truth](#approximate-truth) | being close enough to right about what a theory describes, without being strictly true | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| [observable](#observable-and-unobservable) | what unaided human senses could perceive in favourable conditions; in [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md), what a suitably placed member of the human community would perceive unaided | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| meta-level inference | an inference whose hypothesis is about theories and whose evidence is their record | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| [premise-circular](#circularity-charge) | the conclusion is among the premises | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| [rule-circular](#circularity-charge) | the conclusion concerns a rule of inference the argument itself uses | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| false-success rate $f$ | $P(S \mid \neg T)$: the probability that a theory that is not approximately true ($\neg T$) is empirically successful ($S$) | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| [likeliest explanation](#likeliest-and-loveliest) | the best warranted | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| [loveliest explanation](#likeliest-and-loveliest) | the one that would give most understanding if true | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| [wholesale argument](#wholesale-and-retail-arguments) | about science at large | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| [retail argument](#wholesale-and-retail-arguments) | about a particular theory on particular evidence | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| central term | a theoretical term a theory's explanations turn on; if it fails to refer, Laudan says the theory cannot be approximately true | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| [cumulative count](#turnover-fallacy) | a tally of all theories ever accepted, as against the share accepted at a given moment | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| [reliability](#false-positives-objection) (Lewis) | a test is reliable when its false-positive and false-negative rates are both small | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| [*divide et impera*](#selective-realism) | Psillos's name for the selective move: split the theory, credit only what earned the success | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| *partie explicative* | Duhem's "explanatory part" of a theory, which he calls parasitic | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| [new induction](#unconceived-alternatives) | Stanford's induction over inquirers' repeated failure to conceive well-supported rivals | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| calx | a metal's residue after calcination, in modern terms usually an oxide | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| inflammable air | eighteenth-century name for hydrogen and other flammable gases | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| drag factor | $1 - 1/n^2$, with $n$ the refractive index: from Fresnel's 1818 posit that a moving transparent body carries along only its excess ether | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| idle parts | parts of a theory that make no difference to its success | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| [meta-induction](#pessimistic-induction) | an induction over a record, of past theories or past explanations; the pessimistic induction is one | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| [structure](#structural-realism) | the pattern of relations among a set of objects, considered apart from what the objects are | [5.3](lessons/05-03-structural-realism.md) |
| [Fresnel coefficients](#fresnel-equations) $r$, $t$ | reflected and transmitted amplitude divided by incident amplitude, for vibration across the plane of incidence ($s$) or in it ($p$) | [5.3](lessons/05-03-structural-realism.md) |
| modal structure | what depends on what, and what would happen if conditions were otherwise | [5.3](lessons/05-03-structural-realism.md) |
| [relata](#relations-without-relata) | the things a relation holds between | [5.3](lessons/05-03-structural-realism.md) |
| [isomorphism](#isomorphism) | a one-to-one correspondence under which two members are related exactly when their correlates are | [5.3](lessons/05-03-structural-realism.md) |
| extensional (of relations) | fixed by which pairs a relation holds of, every set of pairs counting as a relation | [5.3](lessons/05-03-structural-realism.md) |
| [Ramsey sentence](#ramsey-sentence) | a theory with its theoretical terms replaced by quantified variables | [5.3](lessons/05-03-structural-realism.md) |
| natural relation | a relation restricted by naturalness or causal role, not just by which pairs it holds of | [5.3](lessons/05-03-structural-realism.md) |
| [fictitious relation](#newman-objection) | in Newman's objection, a fake: a bare list of the pairs a relation holds of | [5.3](lessons/05-03-structural-realism.md) |
| [empirical adequacy](#empirical-adequacy) | everything a theory says about what can be observed is true | [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| "saves the phenomena" | van Fraassen's tag for empirical adequacy | [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| [acceptance](#acceptance-and-belief) (van Fraassen) | belief that a theory is empirically adequate plus a commitment to meet new phenomena inside its framework | [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| [entity realism](#entity-realism) | belief warranted by use of the entity as a tool, without belief in any theory of it (Hacking) | [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| [grid argument](#grid-argument) | the same shape across sizes and through unrelated microscopes would otherwise be a coincidence | [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| [natural ontological attitude](#natural-ontological-attitude) | accept science's checked results on the footing of everyday truths, and stop (Fine) | [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |

## Positions and distinctions

**Module 1: Induction and confirmation**

### Instance confirmation

**A generalization is supported by the cases that fit it.** The first candidate for a logic of confirmation: a relation between an evidence report and a hypothesis, fixed by logical form and checkable like a proof (Carl Hempel's project in the 1940s). Its classic form is [Nicod's criterion](#nicods-criterion). Hempel's own definition builds on the same idea: evidence report $E$ confirms hypothesis $H$ when $E$ entails what $H$ says about the objects $E$ mentions.

- **It cannot climb from cases to theories.** No piston reading is an instance of kinetic theory, and telescope sightings are not instances of Newton's gravitation. [Hypothetico-deductivism](#hypothetico-deductivism) is the candidate that climbs.
- **Form does not fix how much.** Mill (*A System of Logic*, Book III, ch. III §3) sets "a single instance", which sometimes suffices, against "myriads of concurring instances", which sometimes do not. His neighbouring example points to background knowledge of how variable a kind is, and Hempel's logic sets background aside on purpose.
- **It depends on which predicates you allow:** see [grue](#grue).

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md)

### Nicod's criterion

**For "All $F$ are $G$": an object that is $F$ and $G$ confirms it, an object that is $F$ and not $G$ refutes it, and an object that is not $F$ is neutral. Only the $F$s matter.** From Jean Nicod, *Le problème logique de l'induction* (a 1923 Paris thesis, printed 1924); named by Hempel.

- **Who says what.** Nicod states the first two clauses and (Peter Vranas reports) denies that an object with neither property confirms. Full neutrality for non-$F$s is the standard reading.
- **Yes or no, not how much.** Mill's chemist and crows are exactly what a yes-or-no relation on instances cannot register.
- **In the ravens,** the positive clause is premise P1, and the conclusion collides with the neutrality clause ([ravens paradox](#ravens-paradox)). [Good's case](#goods-black-raven-case) attacks the positive clause directly.
- **In the new riddle,** it is the form-only rule that [grue](#grue) breaks: the rule does not read the predicates.

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.2](lessons/01-02-the-new-riddle-of-induction.md), [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.4](lessons/01-04-the-ravens-paradox.md)

### Entailment condition

**Proof is the limiting case of support: if $E$ logically entails $H$, then $E$ confirms $H$.** First of the conditions in Carl Hempel, "Studies in the Logic of Confirmation" (*Mind*, 1945), which any notion of confirmation must obey. $E$ is an evidence report, $H$ a hypothesis, and $A \vDash B$ means $B$ follows logically from $A$. Hempel accepted it.

- **[Hypothetico-deductivism](#hypothetico-deductivism) violates it.** $E \vDash A$ does not give $A \wedge K \vDash E$, so a report need not H-D-confirm what it proves.
- **Step one of [Hempel's triviality result](#hempels-triviality-result).**

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md)

### Special consequence condition

**Support flows down to whatever the hypothesis commits you to: if $E$ confirms $H$ and $H \vDash H'$, then $E$ confirms $H'$.** Hempel 1945; he accepted it. Support moves from stronger to weaker. ($E$ evidence, $H, H'$ hypotheses, $\vDash$ logical consequence.)

- **Which sense of "confirms".** It holds of [absolute confirmation](#absolute-confirmation) at any threshold, since $H \vDash H'$ gives $P(H' \mid E) \ge P(H \mid E)$ for a credence function $P$, and it fails of [incremental confirmation](#incremental-confirmation). Carnap charged (*Logical Foundations of Probability*, 1950, §87) that Hempel's conditions ran the two together.
- **A worked failure.** A conjunction $H \wedge X$ can be raised while its conjunct $X$ is not, though $H \wedge X \vDash X$ ([1.3](lessons/01-03-confirmation-as-probability-raising.md), the tack in a deck).
- **[Hypothetico-deductivism](#hypothetico-deductivism) violates it, and has to.** H-D plus special consequence would confirm any consistent $X$ by way of the [tacking problem](#tacking-problem). The price is the next-instance gap.

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.3](lessons/01-03-confirmation-as-probability-raising.md)

### Equivalence condition

**Rewording cannot change what supports a hypothesis: if $E$ confirms $H$ and $H$ is logically equivalent to $H'$, then $E$ confirms $H'$.** Hempel 1945; he accepted it. It is the special case of [special consequence](#special-consequence-condition) where $H$ and $H'$ entail each other. ($E$ an evidence report, $H$ and $H'$ hypotheses.)

- **Premise P2 of the [ravens paradox](#ravens-paradox).** Bayesians keep it, since logically equivalent hypotheses get equal probability.
- **It bites the repairs to tacking:** whether a conjunct is idle turns out to depend on the wording ([tacking problem](#tacking-problem)).

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.4](lessons/01-04-the-ravens-paradox.md)

### Consistency condition

**Evidence cannot back both of two rivals that cannot both be true.** Hempel's special consistency condition (1945): if consistent $E$ confirms $H$, and $H$ is incompatible with $H'$, then $E$ does not confirm $H'$. He accepted it. ($E$ an evidence report, $H$ and $H'$ hypotheses.)

- **Which sense of "confirms".** It holds of [absolute confirmation](#absolute-confirmation) for a threshold of at least $\tfrac12$, and fails of [incremental confirmation](#incremental-confirmation).
- **The collapse never uses it,** so giving it up would not stop [Hempel's triviality result](#hempels-triviality-result).

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md)

### Converse consequence condition

**Support flows up to any stronger theory containing the hypothesis: if $E$ confirms $H$ and $H' \vDash H$, then $E$ confirms $H'$.** It looks as natural as Hempel's other four. Hempel (1945) rejected it. ($E$ an evidence report, $H, H'$ hypotheses, $\vDash$ logical consequence.)

- **Mind the direction.** [Special consequence](#special-consequence-condition) goes from stronger to weaker; this goes from weaker to stronger.
- **[Hypothetico-deductivism](#hypothetico-deductivism) satisfies it by construction.** Carnap held it true of neither "makes highly probable" nor "makes more probable".
- **Rejecting it is not free.** Hempel's list survives, but his logic has no way up: support travels from a report to what it instantiates and down to consequences, so telescope sightings cannot reach Newton's gravitation.
- **Restricting it** is the Schurz and Gemes route: only the relevant parts of a theory earn credit ([tacking problem](#tacking-problem)).

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md)

### Hempel's triviality result

**Let support flow both up and down and it reaches anything: every report confirms every hypothesis.** Hempel 1945. ($E$ any report, $H$ any hypothesis.) Route one uses three conditions:

1. $E \vDash E$, so $E$ confirms $E$ ([entailment](#entailment-condition)).
2. $E \wedge H \vDash E$, so $E$ confirms $E \wedge H$ ([converse consequence](#converse-consequence-condition)).
3. $E \wedge H \vDash H$, so $E$ confirms $H$ ([special consequence](#special-consequence-condition)).

Route two needs only entailment and converse consequence:

1. $E \vDash E \vee H$, so $E$ confirms $E \vee H$ (entailment).
2. $H \vDash E \vee H$, and $E$ confirms $E \vee H$, so $E$ confirms $H$ (converse consequence).

- **So dropping special consequence alone does not stop the collapse.**
- **Hempel's exit:** keep entailment, special consequence, equivalence and special consistency, and reject converse consequence.
- **Carnap's diagnosis:** "confirms" is ambiguous between "makes highly probable" and "makes more probable", so the collapse runs different relations together. The qualitative theorist replies that, minus the condition Hempel rejected, the list is true of one relation, and that a logic of support should not wait on probabilities nobody can state.

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md)

### Hypothetico-deductivism

**A theory is supported when what it predicts comes true: the hypothesis, with its auxiliaries, predicted $E$, and the auxiliaries could not have done it alone.** H-D, for hypothesis $H$, evidence report $E$ and background assumptions $K$ with $H \wedge K$ consistent:

$$E \text{ H-D-confirms } H \text{ relative to } K \iff H \wedge K \vDash E \text{ and } K \not\vDash E.$$

- **Its form** is affirming the consequent ([`philosophical-method` 1.4](../philosophical-method/lessons/01-04-argument-forms-and-formal-fallacies.md)) with "so $H$" weakened to "so $H$ gains support".
- **It is not abduction** ([`philosophical-method` 2.1](../philosophical-method/lessons/02-01-inference-to-the-best-explanation.md)). H-D runs forward from hypothesis to prediction and compares no rivals; abduction runs backward from a surprise and must beat them.
- **It reaches theories** [Nicod's criterion](#nicods-criterion) cannot: kinetic theory plus a dilute-gas auxiliary entails that volume rises with temperature at fixed pressure, so a piston reading confirms it.
- **Conditions:** it satisfies [converse consequence](#converse-consequence-condition) and violates [entailment](#entailment-condition) and [special consequence](#special-consequence-condition).
- **Silent on statistical hypotheses.** "This coefficient is 0.3" entails no sample.
- **The next-instance gap.** The law's successes do not H-D-confirm "the next $F$ is $G$", because that prediction does not entail the old data.
- **Its main trouble** is the [tacking problem](#tacking-problem).
- **Probability recovers its positive cases:** if $H \vDash E$ and $P(E) < 1$, then $E$ incrementally confirms $H$ ([1.3](lessons/01-03-confirmation-as-probability-raising.md)).

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.3](lessons/01-03-confirmation-as-probability-raising.md)

### Tacking problem

**Any statement can ride along on a successful prediction.** Also called the problem of irrelevant conjunction. For hypothesis $H$, background $K$ and evidence $E$: if $H \wedge K \vDash E$ and $K \not\vDash E$, then for any $X$ consistent with $H \wedge K$ we have $H \wedge X \wedge K \vDash E$, so $E$ [H-D-confirms](#hypothetico-deductivism) $H \wedge X$. Clark Glymour, "Hypothetico-Deductivism Is Hopeless" (*Philosophy of Science*, 1980), pressed this failure of relevance.

- **Tacking alone delivers only the conjunction.** Reaching $X$ by itself takes [special consequence](#special-consequence-condition), which H-D rejects.
- **Two replies from H-D's defenders.** Theo Kuipers (*From Instrumentalism to Constructive Realism*, 2000): the conjunction is confirmed, $X$ alone is not, so the credit stays with $H$. Gerhard Schurz ("Relevant Deduction", 1991) and Ken Gemes (on content parts and natural axiomatizations, 1993; "Hypothetico-Deductivism: Incomplete But Not Hopeless", *Erkenntnis*, 2005): restrict the definition so that only the relevant parts of a theory earn credit.
- **"Idle" depends on the wording.** $H \wedge X$ is logically equivalent to $(X \to H) \wedge X$, and in that package neither conjunct yields $E$ without the other. The restriction route owes a privileged way of writing a theory down. Kuipers needs no test of idleness.
- **With amounts.** Suppose $H \vDash E$, $P(E) < 1$ and $P(H \wedge X) > 0$, and let $d$, $r$, $l$ be the [difference](#difference-measure), [log-ratio](#log-ratio-measure) and [log-likelihood-ratio](#log-likelihood-ratio-measure) measures. Then

$$r(H \wedge X, E) = \ln\frac{1}{P(E)} = r(H,E), \qquad d(H \wedge X, E) = P(X \mid H)\, d(H,E),$$

and $l(H \wedge X, E) < l(H,E)$ when $P(X \mid H) < 1$.

- **All three stay positive,** so the Bayesian inherits tacking in its qualitative form, while incremental confirmation blocks the worst result ($X$ alone confirmed). Hawthorne and Fitelson (2004) extend the $d$ and $l$ results from entailment to any $X$ with $P(E \mid H \wedge X) = P(E \mid H)$, given that $E$ confirms $H$.
- **On $r$ a tack costs nothing.** Its defender: both hypotheses entail $E$, so $E$ cannot tell them apart. Its critics (Rosenkrantz 1981; Gillies 1986): the further a hypothesis outruns its evidence, the less that evidence should support it.

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.5](lessons/01-05-the-problem-of-old-evidence.md)

### New riddle of induction

**One record fits generalizations that disagree about every unexamined case, so the question is which inferences from past to future count as induction at all.** Nelson Goodman, *Fact, Fiction, and Forecast* (1955); his first version (1946) used marbles drawn by VE day. Hume's old problem asks whether induction is justified ([`epistemology` 4.2](../epistemology/lessons/04-02-humes-problem-of-induction.md)). Hume's "the future will be conformable to the past" says little until you name the respect.

- **The argument in outline.** If confirmation depends only on logical form, the record confirms "all emeralds are green" and "all emeralds are [grue](#grue)" alike. These give incompatible verdicts on any emerald not examined before $t$. An adequate account does not give both equal support. So confirmation does not depend on logical form alone.
- **The symmetry.** A predicate is [positional](#positional-and-qualitative-predicates) only relative to a choice of primitives, so no test on the form of a predicate's definition separates green from grue. It is commonly agreed that this finishes any purely syntactic theory of confirmation.
- **What does the separating is open:** [entrenchment](#entrenchment), [natural kinds](#natural-kinds), or a prior.
- **The prior route.** With $P$ an ideal agent's credence, $H$ "all emeralds are green", $H^*$ "all emeralds are grue", $E$ the colours on record and $K$ which emeralds were examined before $t$, each hypothesis with $K$ entails $E$, so

$$\frac{P(H \mid E \wedge K)}{P(H^* \mid E \wedge K)} = \frac{P(H \mid K)}{P(H^* \mid K)}.$$

- **The data leave the odds where the prior put them** ([`epistemology` 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md)). The subjective Bayesian says coherence is all rationality asks; critics call that entrenchment by another name. The objective Bayesian wants more, but indifference needs a vocabulary. The best reply is that priors carry background knowledge; the rejoinder is that this background came from earlier projections, so the chain ends at a first prior.
- **The weakest step** is from the symmetry to "no difference that matters". Objection: green things share a reflectance and an emerald's colour has a cause. Reply: every physical fact is stated in some vocabulary, and "reflectance" has a twin. The objector concedes that the asymmetry comes from substantive science or metaphysics, never from logic; Goodman concedes that green and grue do differ, and that the symmetry shows only that form cannot reveal how.

*Lessons:* [1.2](lessons/01-02-the-new-riddle-of-induction.md), [1.4](lessons/01-04-the-ravens-paradox.md)

### Grue

**A predicate true of things examined before a date $t$ just in case they are green, and of all other things just in case they are blue.** Nelson Goodman. Every emerald in the notebook is grue by the definition alone. **Bleen** is the partner, added against Carnap: true of things examined before $t$ just in case they are blue, and of other things just in case they are green.

| Predicate | if examined before $t$, means | otherwise, means |
|---|---|---|
| grue | green | blue |
| bleen | blue | green |
| green | grue | bleen |
| blue | bleen | grue |

- **No grue emerald changes colour.** An emerald examined last year is green and grue for good; the hypothesis sorts emeralds by whether they were examined in time. "Change" is itself relative to vocabulary: to a grue-speaker, "all emeralds are green" is the hypothesis with a switch in it.
- **The second clause is "not so examined",** not "examined after $t$". Things never examined fall under it.
- **It reappears under Akaike.** Forster and Sober's derivation assumes a "uniformity of nature", one curve generating old data and new, so Hume and grue are still in the room ([1.6](lessons/01-06-simplicity-and-curve-fitting.md)).

*Lessons:* [1.2](lessons/01-02-the-new-riddle-of-induction.md), [1.4](lessons/01-04-the-ravens-paradox.md), [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Projectibility

**A projectible hypothesis is one we are willing to extend to unexamined cases.** Goodman (1955): a hypothesis is projectible when it has positive instances, no counterinstances and undetermined cases left, and every conflicting rival is overridden. A rival is overridden when it has the same record and worse [entrenched](#entrenchment) predicates.

- **Nonprojectible** is Goodman's category for a live conflict with no winner: neither hypothesis overrides the other.
- **Projectible does not mean true.** If a blue emerald turns up in 2090, "all emeralds are green" was projectible until then.
- **Kim's use in 4.5.** A heterogeneously realized kind has heterogeneous powers and is not projectible, as with jade ([multiple realizability](#multiple-realizability), [causal inheritance principle](#causal-inheritance-principle)). There the word applies to kinds, not hypotheses.

*Lessons:* [1.2](lessons/01-02-the-new-riddle-of-induction.md), [4.5](lessons/04-05-reduction-and-emergence.md)

### Lawlike and accidental generalizations

**Lawlike statements are confirmed by their instances and support counterfactuals; accidental ones, even when true, do neither.** Goodman's pair (1955): one piece of copper conducting electricity raises your confidence that all copper does, while one man in the room being a third son does nothing for the claim that all are, though the logical form is the same. [Grue](#grue) sharpens this: two generalizations, all instances shared.

- **Lawlike is not true.** It marks what instances can confirm, true or not; [4.4](lessons/04-04-laws-in-the-sciences.md) glosses it as "a law if true".
- **Hempel's contrast (4.1).** That every member of the Greensbury School Board for 1964 was bald is accidental and explains no member's baldness; that gases expand when heated at constant pressure is a law and explains an expansion. Hempel conceded he had no satisfactory criterion.
- **4.4 loosens the tie to confirmation.** Stated strictly, the claim that only lawlike statements are confirmed by their instances fails. After nine heads on a fair coin, "all ten land heads" has risen from $\tfrac{1}{1024}$ to $\tfrac12$ with the tenth flip still even (Dretske 1977). If fifty men in a room say they are third sons, expecting the next to say so is reasonable (Jackson and Pargetter 1980).
- **What does not make a statement accidental:** naming a place, having no instances, or being false. A perfect record does not make it lawlike. The test in [4.4](lessons/04-04-laws-in-the-sciences.md) is [counterfactual support](#counterfactual-support).
- **The metaphysics** of the difference is [`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md).

*Lessons:* [1.2](lessons/01-02-the-new-riddle-of-induction.md), [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.4](lessons/04-04-laws-in-the-sciences.md)

### Positional and qualitative predicates

**A positional predicate is one whose definition names a particular time or place; a purely qualitative one does not.** Rudolf Carnap, "On the Application of Inductive Logic" (1947), answering Goodman's 1946 version: inductive logic should use purely qualitative predicates, so positional ones are out.

- **Goodman's reply.** A predicate is positional only relative to a choice of primitive predicates. Start from [grue and bleen](#grue), and green is the one whose definition names $t$.
- **Trap: "just ban predicates that mention dates".** That is Carnap's reply, and the symmetry answers it: such a ban needs a privileged list of primitives.
- **Moving the test from definitions to use.** Green can be applied by looking, grue only by someone who also knows when the thing was examined. The test is usually credited to R. G. Swinburne ("Grue", *Analysis*, 1968), reported in 1.2 at second hand.

*Lessons:* [1.2](lessons/01-02-the-new-riddle-of-induction.md)

### Entrenchment

**How far a predicate, or any predicate with the same extension, has actually been projected.** Goodman (1955). When conflicting hypotheses have the same record, the one with better entrenched predicates overrides the other ([projectibility](#projectibility)).

- **It describes practice.** Goodman held that inductive rules and inferences are justified by adjustment to each other ([`philosophical-method` 3.4](../philosophical-method/lessons/03-04-intuitions-and-reflective-equilibrium.md)).
- **Goodman does not put green and grue on a par.** He holds that projecting green is legitimate and projecting grue is not, and locates the difference in the history of our projections.
- **Cost.** A record of use promises nothing about the world, and a new predicate starts empty unless it inherits from a parent.

*Lessons:* [1.2](lessons/01-02-the-new-riddle-of-induction.md)

### Natural kinds

**Groupings that real similarities in the world pick out, offered as the reason some predicates can be projected.** W. V. Quine, "Natural Kinds" (1969): induction runs on similarity; we inherit a sense of similarity; natural selection gives some reason to expect it to track real groupings; mature sciences then replace the general notion with specific ones.

- **Not Lewis's natural properties** ([`metaphysics` 1.3](../metaphysics/lessons/01-03-universals-the-realists-case.md)), which are elite in the world whatever any creature's psychology.
- **Cost.** The Darwinian story is itself a product of induction, so it explains our success from inside science.
- **Biological species are the hard case.** A species need have no genetic sequence shared by all and only its members. Ghiselin and Hull treat species as individuals. Richard Boyd (1991, 1999) keeps them as kinds by trading essences for "homeostatic property clusters" held together by gene flow and shared selection.

*Lessons:* [1.2](lessons/01-02-the-new-riddle-of-induction.md)

### No free lunch

**Averaged over every labelling of the unseen points, every learner's off-sample error is exactly one half.** Proved in [`statistical-learning` 1.4](../statistical-learning/lessons/01-04-no-free-lunch-and-inductive-bias.md); cited here as grue's formal cousin. With $m$ unexamined emeralds there are $2^m$ labellings consistent with the notebook, each one a grue-style predicate.

- **What the two share:** no data-driven learner escapes choosing which regularities to project.
- **Where the analogy stops.** The theorem fixes the labels and averages over targets. Goodman needs two hypotheses and no average, and asks what makes a labelling "the same as before". Translate green/blue labels into grue/bleen and every unseen label flips: the uniform average cannot notice, because translation only permutes the labellings, while a learner that prefers constant labellings reverses its forecast.

*Lessons:* [1.2](lessons/01-02-the-new-riddle-of-induction.md)

### Underspecification

**A training procedure can return several models that score the same on held-out data from the old source and disagree on a new one.** Named by D'Amour and colleagues (2020). In 1.2 it is grue in practice: held-out images from the old machines are more of the pre-$t$ notebook.

- **On the riddle's answers.** Entrenchment finds no history of projection for learned features, so neither model overrides the other. Natural kinds favours whichever tracks the disease, once someone shows which. The training procedure is the only prior in the pipeline, and it produced both models.
- **Labelling a batch from the new scanner** breaks this tie and leaves the next scanner open.

*Lessons:* [1.2](lessons/01-02-the-new-riddle-of-induction.md)

### Incremental confirmation

**$E$ makes $H$ more probable.** Carnap's second sense of "confirms" (*Logical Foundations of Probability*, 1950), which he named increase in firmness in the preface to the 1962 second edition. For a credence function $P$, hypothesis $H$, evidence $E$ and background $K$:

$$E \text{ confirms } H \text{ relative to } K \iff P(H \mid E \wedge K) > P(H \mid K).$$

- **Neither sense implies the other.** A long shot can climb from 1 in 400 to 1 in 40: the evidence helped, and you should not believe the hypothesis. A solid theory can slip from 0.95 to 0.90: the evidence hurt, and you go on believing it. Compare [absolute confirmation](#absolute-confirmation).
- **Whether $E$ confirms $H$ does not depend on the gauge.** [Difference](#difference-measure), [log-ratio](#log-ratio-measure) and [log-likelihood-ratio](#log-likelihood-ratio-measure) measures are all positive, all zero, or all negative together; only the ranking is contested ([measure sensitivity](#measure-sensitivity)).
- **Hempel's conditions.** [Special consequence](#special-consequence-condition), [special consistency](#consistency-condition) and [converse consequence](#converse-consequence-condition) all fail of it.
- **It is premise P1** of Glymour's argument in the [problem of old evidence](#problem-of-old-evidence).
- **Trap:** a confirmed hypothesis need not be acceptable ([confirmation and acceptance](#confirmation-and-acceptance)).

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.5](lessons/01-05-the-problem-of-old-evidence.md)

### Absolute confirmation

**$H$ is probable enough once $E$ is in.** Carnap's first sense of "confirms" (1950), the "makes highly probable" of [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), which he named firmness in the 1962 preface. For a credence function $P$, hypothesis $H$, evidence $E$, background $K$ and a fixed threshold $t$:

$$E \text{ confirms } H \text{ relative to } K \iff P(H \mid E \wedge K) > t.$$

- **The inequality is strict:** a posterior of exactly $t$ does not confirm.
- **Hempel's conditions.** [Special consequence](#special-consequence-condition) holds of it at any threshold, and [special consistency](#consistency-condition) for $t \ge \tfrac12$. [Converse consequence](#converse-consequence-condition) does not hold.
- **Cost.** $E$ can confirm $H$ while lowering it: learning that a die roll is even lowers "not six" from $\tfrac56$ to $\tfrac23$, yet at $t = \tfrac12$ confirms it. "Confirms" then no longer means that $E$ helped.
- **Here $t$ is a threshold,** not the date $t$ of [grue](#grue).

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.3](lessons/01-03-confirmation-as-probability-raising.md)

### Difference measure

**How many points of probability $E$ adds to $H$.** For a credence function $P$, hypothesis $H$ and evidence $E$, with $0 < P(H) < 1$, $P(E) > 0$ and $P(E \mid \neg H) > 0$ (1.3's standing assumptions):

$$d(H,E) = P(H \mid E) - P(H).$$

- **Advocates, on Fitelson's 1999 list:** Earman and Rosenkrantz.
- **Principle that pins it down** (Crupi, Chater and Tentori, 2013): how confirmation behaves across exclusive alternatives.
- **On a tack** it scales the boost by $P(X \mid H)$ ([tacking problem](#tacking-problem)).
- **Same sign as the other two, different order** ([measure sensitivity](#measure-sensitivity)).

*Lessons:* [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.4](lessons/01-04-the-ravens-paradox.md), [1.5](lessons/01-05-the-problem-of-old-evidence.md), [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Log-ratio measure

**The log of the factor by which $E$ raises $H$.** With natural logs, for a credence function $P$, hypothesis $H$ and evidence $E$, and by [Bayes' theorem](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md):

$$r(H,E) = \ln\frac{P(H \mid E)}{P(H)} = \ln\frac{P(E \mid H)}{P(E)}.$$

- **Advocates, on Fitelson's 1999 list:** Horwich and Milne.
- **Principle that pins it down** (Crupi, Chater and Tentori, 2013): ranking hypotheses on fixed evidence by $P(E \mid H)$.
- **Blind to the strength of an entailing hypothesis.** Anything entailing $E$ has $r = -\ln P(E)$, so a [tack](#tacking-problem) costs nothing, and a curve built to fit $E$ ties with a law that predicted it ([1.5](lessons/01-05-the-problem-of-old-evidence.md)).
- **Capped by the prior:** $r(H,E) \le \ln(1/P(H))$, because a posterior cannot exceed 1. A high prior leaves $H$ little room to grow.
- **Changing the base** changes neither sign nor order.

*Lessons:* [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.4](lessons/01-04-the-ravens-paradox.md), [1.5](lessons/01-05-the-problem-of-old-evidence.md), [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Log-likelihood-ratio measure

**The log of how much better $H$ predicted $E$ than its negation did.** With natural logs, for a credence function $P$, hypothesis $H$ and evidence $E$:

$$l(H,E) = \ln\frac{P(E \mid H)}{P(E \mid \neg H)}.$$

Inside the log sits $\mathrm{LR} = P(E \mid H)/P(E \mid \neg H)$, the likelihood ratio against $\neg H$. It is fixed by the prior $p = P(H)$ and the posterior $q = P(H \mid E)$:

$$\mathrm{LR} = \frac{q/(1-q)}{p/(1-p)}, \qquad l(H,E) = \ln\frac{q(1-p)}{p(1-q)} = r(H,E) - r(\neg H,E),$$

with $r$ the [log-ratio measure](#log-ratio-measure).

- **It scores $H$'s rise and $\neg H$'s fall together,** where $r$ watches $H$ alone.
- **Advocates, on Fitelson's 1999 list:** Good and Schum.
- **Principle that pins it down** (Crupi, Chater and Tentori, 2013): leaving an item's strength untouched by conditionally independent items already in hand, which is why [`philosophical-method` 2.4](../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md) could multiply them.
- **That lesson's claim** that this ratio, and only it, is the strength of the evidence is a commitment to $l$, and it is the commitment under test in [1.3](lessons/01-03-confirmation-as-probability-raising.md).
- **Trap: $l$ is not free of the prior.** $P(E \mid \neg H)$ averages the likelihoods of $H$'s rivals, weighted by their priors. A ratio against a named rival with definite likelihoods is free of priors, but it is a different quantity: the [law of likelihood](#law-of-likelihood). Always say which: [1.4](lessons/01-04-the-ravens-paradox.md)'s ratios are against a named rival.

*Lessons:* [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.4](lessons/01-04-the-ravens-paradox.md)

### Measure sensitivity

**An argument about confirmation is measure-sensitive when its validity varies with the measure used.** Branden Fitelson, "The Plurality of Bayesian Measures of Confirmation and the Problem of Measure Sensitivity" (1999), made this a charge.

With prior $p = P(H)$ and posterior $q = P(H \mid E)$, each measure ($d$ [difference](#difference-measure), $r$ [log-ratio](#log-ratio-measure), $l$ [log-likelihood-ratio](#log-likelihood-ratio-measure)) is a way of contouring the $(p, q)$ square. With $p$ fixed all three increase with $q$; with $q$ fixed all three fall as $p$ rises. Disagreement needs both to differ. The lesson's cases:

| Case | $p \to q$ | $d$ | $r$ | $l$ |
|---|---|---|---|---|
| A | $\tfrac14 \to \tfrac12$ | $\tfrac14$ | $\ln 2 \approx 0.693$ | $\ln 3 \approx 1.099$ |
| B | $\tfrac12 \to \tfrac45$ | $\tfrac{3}{10}$ | $\ln\tfrac85 \approx 0.470$ | $\ln 4 \approx 1.386$ |
| D | $\tfrac{1}{20} \to \tfrac15$ | $\tfrac{3}{20}$ | $\ln 4 \approx 1.386$ | $\ln\tfrac{19}{4} \approx 1.558$ |

$d$ and $l$ rank B above A, while $r$ ranks A above B. $r$ and $l$ rank D above B, while $d$ ranks B above D.

- **Instances.** Rosenkrantz's treatment of tacking goes through on $d$ alone among these three, as does Eells's treatment of grue.
- **Trap: "strongly confirms" reports nothing until a measure is named.** Only the sign is measure-free.
- **The doubt.** One quantity, degree of confirmation, may not be what the measures estimate. Howson (2000) and Kyburg and Teng (2001) take the plurality as grounds for doubting the quantitative project.
- **The replies.** Crupi, Chater and Tentori (2013): each family is pinned down by one principle, so choosing a measure is choosing a principle, which can be argued. Hájek and Joyce (2008): the measures may capture different, compatible notions of support.
- **What each side concedes.** The monist, that two rival principles must each be argued down. The pluralist, that "$E$ confirms $H$ more than $E'$ confirms $H'$" has no truth value until a measure is named.

*Lessons:* [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.5](lessons/01-05-the-problem-of-old-evidence.md)

### Confirmation and acceptance

**Being confirmed is not being acceptable: a hypothesis can rise and still be a long shot.** [Incremental confirmation](#incremental-confirmation) is compatible with a posterior of 1 in 40. The [Lockean thesis](../epistemology/lessons/05-01-credences-and-probabilism.md) ties belief to the level of the posterior, never to its rise.

- **Even a high posterior is a further step from acceptance.** [3.4](lessons/03-04-values-and-inductive-risk.md) examines that step ([argument from inductive risk](#argument-from-inductive-risk)), and [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) separates [acceptance and belief](#acceptance-and-belief).
- **The conflation runs both ways.** A low posterior does not show that the evidence confirmed nothing.
- **Howson's use.** A curve built to fit the data can be confirmed by them and still end with a tiny posterior, so no extra rule against fitted hypotheses is needed ([use-novelty](#use-novelty)).

*Lessons:* [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.5](lessons/01-05-the-problem-of-old-evidence.md)

### Law of likelihood

**Data favour the hypothesis that made them more probable, by exactly that factor.** Ian Hacking, *Logic of Statistical Inference* (1965); Richard Royall, *Statistical Evidence* (1997). For simple hypotheses $H_1, H_2$ that each fix the probability of data $x$, with $P(x;H)$ the sampling probability of $x$ under $H$:

$$x \text{ favours } H_1 \text{ over } H_2 \iff P(x;H_1) > P(x;H_2), \qquad \mathrm{LR} = \frac{P(x;H_1)}{P(x;H_2)} \text{ measures how much.}$$

- **It answers only one of [Royall's three questions](#royalls-three-questions):** what this observation says about $H_1$ versus $H_2$. Belief needs priors and action needs losses.
- **Name clash.** [`philosophy-of-religion` 3.1](../philosophy-of-religion/lessons/03-01-from-design-to-fine-tuning.md), following Elliott Sober, calls this law "the likelihood principle". In this course that name belongs to the stronger [likelihood principle](#likelihood-principle).
- **Not the ratio inside $l$.** The ratio against a named rival is free of priors. The ratio against $\neg H$ in the [log-likelihood-ratio measure](#log-likelihood-ratio-measure) has a denominator averaged over rivals by their priors.

*Lessons:* [1.3](lessons/01-03-confirmation-as-probability-raising.md), [3.2](lessons/03-02-the-likelihood-principle.md), [3.4](lessons/03-04-values-and-inductive-risk.md)

### Ravens paradox

**Two widely accepted premises imply that a white shoe is evidence about birds.** Carl Hempel, "Studies in the Logic of Confirmation" (*Mind*, 1945, section 5).

1. An object that is $F$ and $G$ confirms "every $F$ is $G$" (the positive clause of [Nicod's criterion](#nicods-criterion)).
2. What confirms a hypothesis confirms anything logically equivalent to it (the [equivalence condition](#equivalence-condition)).
3. "Every raven is black" is logically equivalent to "every non-black thing is a non-raven".
4. So a non-black non-raven confirms "every raven is black".

- **The collision.** Nicod's other clause, as [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) gave it, calls a non-raven neutral.
- **It spreads.** A further equivalence extends the conclusion to anything but a non-black raven (Hempel, "A Note on the Paradoxes of Confirmation", *Mind*, 1946).
- **Dating.** Hempel dated his first brief statement to 1937. Peter Vranas reads that as a foreshadowing and finds Hosiasson-Lindenbaum's 1940 paper stating the paradox in print first, crediting Hempel.
- **Trap: the contrapositive is not the source of the trouble.** Bayesians keep premises 2 and 3, and [Good's case](#goods-black-raven-case) uses no contrapositive at all.
- **The responses:** [Hempel's reply](#hempels-reply-to-the-ravens), the [standard Bayesian solution](#standard-bayesian-solution-to-the-ravens), and the [route of collection](#sampling-procedure-and-the-ravens).

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.4](lessons/01-04-the-ravens-paradox.md)

### Hempel's reply to the ravens

**Hempel accepted the conclusion and blamed the intuition: the report "non-black non-raven", taken alone, confirms, and a shoe already known to be a shoe confirms nothing.** Hempel (1945). His rule, which he calls a "methodological fiction", is to judge a report as though it were your whole evidence for the hypothesis.

- **The sodium example.** That all sodium salts burn yellow is logically equivalent to the claim that whatever does not burn yellow is no sodium salt. Hold ice in a colourless flame: no yellow, and nothing learned, because you already knew ice holds no sodium. Burn an unidentified lump, see no yellow, and find by analysis that it holds no sodium: the hypothesis ran a risk and survived.
- **Logical form.** The generalization forbids one kind of object, so it bears on every object, not only ravens.
- **Against Good** ("The White Shoe: No Red Herring", *British Journal for the Philosophy of Science*, 1967): the premise concerns an evidence sentence taken alone, and [Good's case](#goods-black-raven-case) uses far stronger information, so it misses the premise. This concedes that Nicod's criterion without background differs from confirmation given background, the only kind a working scientist has.
- **Pressure on the reply.** Patrick Maher's Carnapian counterexample on empty background (2004), and the observation that Hempel's formal definition is monotonic, so it cannot separate the shoe alone from the known shoe (both as reported by Fitelson and Hawthorne, 2010).
- **The cost named by each side.** Bayesians say a report without a route is incomplete; Hempel's side says a logic of confirmation was meant to say what a report supports ([route of collection](#sampling-procedure-and-the-ravens)).

*Lessons:* [1.4](lessons/01-04-the-ravens-paradox.md)

### Standard Bayesian solution to the ravens

**Under three assumptions a randomly drawn black raven confirms "every raven is black", and a non-black non-raven confirms it by a far smaller amount.** Janina Hosiasson-Lindenbaum ("On Confirmation", *Journal of Symbolic Logic*, 1940) gave an early probabilistic treatment. In the canonical modern form, one object $a$ is drawn at random. $R$: $a$ is a raven. $B$: $a$ is black. $H$: every raven is black. $P$ is an ideal agent's credence.

- **A1.** $P(R \mid H) = P(R)$.
- **A2.** $P(\neg B \mid H) = P(\neg B)$.
- **A3.** $P(\neg B) \gg P(R)$: non-black things vastly outnumber ravens.

Given $H$ the cell $R \wedge \neg B$ is empty, and Bayes' theorem gives

$$\frac{P(H \mid R \wedge B)}{P(H)} = \frac{1}{P(B \mid R)}, \qquad \frac{P(H \mid \neg R \wedge \neg B)}{P(H)} = \frac{1}{P(\neg R \mid \neg B)}.$$

Whenever $P(R \wedge \neg B) > 0$ both ratios exceed 1, and the first exceeds the second exactly when $P(\neg B) > P(R)$.

- **The shoe's sign is an output of A1 and A2,** not a theorem of probability. Replace A2 with a rival that recolours ravens and leaves every non-raven alone, and a randomly drawn white shoe confirms nothing at all (an observation the SEP credits to Mat Coakley).
- **Vranas's lacuna** ("Hempel's Raven Paradox: A Lacuna in the Standard Bayesian Solution", *BJPS*, 2004). A2 is for practical purposes necessary for the shoe's confirming to a minute degree, and nothing supports it. He shows it unsupported, not false.
- **A cost of A2** (Paul Horwich, 1982). It makes a black non-raven count against $H$. Vranas thinks Bayesians can absorb this, since the effect is minute too.
- **A known shoe.** A1 and A2 force a non-raven found non-black to confirm: $P(\neg B \mid \neg R \wedge H) = P(\neg B)/P(\neg R) > P(\neg B \mid \neg R)$ whenever $P(R \wedge \neg B) > 0$. So a credence function meeting A1 and A2 cannot also make a known shoe neutral.
- **The comparative verdict without independence** (Fitelson and Hawthorne, "How Bayesian Confirmation Theory Handles the Paradox of the Ravens", 2010). It needs only conditions on how much likelier non-black is than raven under each hypothesis, and on how often ravens are black if $H$ is false. This explains why a raven beats a shoe, not whether a shoe confirms.
- **Choice of measure.** With one hypothesis and one prior, $d$, $r$ and $l$ all rise with the posterior, so they rank evidence alike. Fitelson finds the usual comparative step valid on those three but not on every relevance measure.

*Lessons:* [1.4](lessons/01-04-the-ravens-paradox.md)

### Sampling procedure and the ravens

**How the object reached you changes the likelihoods, so the same object can carry different evidential weight.** Paul Horwich (*Probability and Evidence*, 1982) made the route of collection part of the evidence. Let a rival to $H$ make $w$ of the $N_R$ ravens white, and let $N$ be the non-black non-ravens under $H$. **Frozen non-ravens:** the rival recolours ravens and changes no non-raven. **Frozen margins:** the raven and non-black totals are fixed, so $w$ non-black non-ravens turn black (the rival on which A1 and A2 of the [standard solution](#standard-bayesian-solution-to-the-ravens) hold). With $H$ "every raven is black", each entry is a likelihood ratio ($\mathrm{LR}$) for $H$ against the rival:

| Draw from, finding | Frozen non-ravens | Frozen margins |
|---|---|---|
| ravens; black | $N_R/(N_R-w)$ | $N_R/(N_R-w)$ |
| non-black things; a non-raven | $(N+w)/N$ | $N/(N-w)$ |
| non-ravens; non-black | $1$ | $N/(N-w)$ |
| everything; non-black non-raven | $1$ | $N/(N-w)$ |

- **The third row is Hempel's ice.** Frozen non-ravens makes it neutral; A1 and A2 force it to confirm.
- **The same bird by two routes.** In [Good's worlds](#goods-black-raven-case), a black crow drawn from all birds has $\mathrm{LR} \approx 0.1001$, against $H$. Drawn from the crows alone, it has $\mathrm{LR} = 1001/1000$, for $H$.
- **A record that omits the route.** Without a credence about how the object was obtained, the report has no likelihood and no verdict. The Bayesian says that is right: such a record is incomplete. Hempel's side says this is what giving up the report-alone relation costs.
- **Not the stopping-rule dispute.** Here the route changes the likelihoods, so every school agrees it matters. With [stopping rules](#stopping-rule) the likelihood function stays proportional ([3.2](lessons/03-02-the-likelihood-principle.md)).
- **Same structure elsewhere:** sample selection in [`econometrics` 5.4](../econometrics/lessons/05-04-censoring-truncation-sample-selection.md); Tomás, Ilse and the firing squad in [`philosophy-of-religion` 3.2](../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md).

*Lessons:* [1.4](lessons/01-04-the-ravens-paradox.md)

### Good's black raven case

**A pair of possible worlds in which a randomly drawn black crow counts against "all crows are black": a positive instance can disconfirm, with no contrapositive in sight.** I. J. Good, "The White Shoe Is a Red Herring" (*British Journal for the Philosophy of Science*, 1967); his bird is the crow. You know you are in one of two worlds. World 1: 100 black crows, no others, 1,000,000 other birds. World 2: 1,000 black crows, 1 white crow, 1,000,000 other birds. A bird drawn uniformly from your world is a black crow. With $H$ "all crows are black", true only in world 1, the likelihood ratio for $H$ is

$$\mathrm{LR} = \frac{100/1{,}000{,}100}{1{,}000/1{,}001{,}001} = \frac{1{,}001{,}001}{10{,}001{,}000} \approx 0.1001.$$

- **Good's diagnosis.** $\mathrm{LR}(\text{black crow}) = \mathrm{LR}(\text{crow}) \times \mathrm{LR}(\text{black} \mid \text{crow})$, and only the last factor must exceed 1. The fact that a crow turned up at all can count against $H$.
- **Trap: "Good refuted Hempel".** Good refuted the unrestricted version, on which an instance confirms given any background. [Hempel denied](#hempels-reply-to-the-ravens) that a case built on background information reaches the premise as he meant it.
- **Good's follow-up** (1968). An infinitely intelligent newborn thinks crows unlikely to exist, so $H$ likely, and lowers $H$ on learning of a black one.
- **A false friend.** Not Good's value-of-information theorem of the same year ([`decision-theory` 3.2](../decision-theory/lessons/03-02-models-of-ambiguity.md)).

*Lessons:* [1.4](lessons/01-04-the-ravens-paradox.md)

### Problem of old evidence

**Evidence you already know cannot raise anything on the standard account, yet known evidence seems to confirm theories.** Clark Glymour, *Theory and Evidence* (1980), the chapter "Why I Am Not a Bayesian". For an ideal agent's credence $P$, hypothesis $H$ and evidence $E$:

$$P(E) = 1 \implies P(H \mid E) = P(H),$$

so on [incremental confirmation](#incremental-confirmation) there is no rise to measure.

- **The canonical case.** On 18 November 1915 Einstein told the Prussian Academy that his theory of gravitation accounted for the slow turning of Mercury's orbit, an excess Le Verrier had reported in 1859 and that Newcomb's later reductions put near 43 arc seconds per century. Nobody had taken a new measurement.
- **"Old" means old to the agent:** known before she saw what the hypothesis said about it. A report gathering dust in an archive is new evidence the day she reads it.
- **Earman's version** (*Bayes or Bust?*, 1992) aims the same case at the update rule: Einstein gathered no data, so conditionalization leaves his credence fixed, and yet it rose, rightly.
- **Trap: softening certainty does not help.** Since $P(H \mid E) \le P(H)/P(E)$, at $P(E) = 0.999$ the evidence can multiply a credence by at most about 1.001. Jeffrey conditionalization ([`epistemology` 5.3](../epistemology/lessons/05-03-conditionalization.md)) needs a new experience that never came.
- **The weakest joint.** The definition says what $E$ adds now; the verdict on Mercury may concern a standing relation of support. The objection: the zero is correct and the verdict equivocates (James Joyce, *The Foundations of Causal Decision Theory*, 1999, counts several concepts of confirmation as equally legitimate). The reply: then the definition has gone silent on the very relation the datum concerns. The objector concedes that standing support still needs an account; the reply concedes that the zero is right about what $E$ adds now.
- **The repairs.** The [counterfactual solution](#counterfactual-solution) targets the standing relation, the [logical learning solution](#logical-learning-solution) the event of 1915. The [problem of new theories](#problem-of-new-theories) is a neighbouring trouble.

*Lessons:* [1.5](lessons/01-05-the-problem-of-old-evidence.md)

### Logical omniscience

**A probability function gives credence 1 to every logical truth, so every entailment is already priced in and a derivation can teach nothing.** It follows from the normality axiom of [`epistemology` 5.1](../epistemology/lessons/05-01-credences-and-probabilism.md). It stands behind both Glymour's and Earman's versions of the [problem of old evidence](#problem-of-old-evidence).

- **The [logical learning solution](#logical-learning-solution) drops it.**
- **The worry about dropping it.** Bas van Fraassen (1988) argues that, under weak assumptions, a credence below 1 in a logical truth contradicts the probabilism the model assumes.

*Lessons:* [1.5](lessons/01-05-the-problem-of-old-evidence.md)

### Counterfactual solution

**Score the evidence against the credences you would have had if you had not known it.** Colin Howson, "The 'Old Evidence' Problem" (1991). For hypothesis $H$ and evidence $E$, with $P^{-E}$ the credence function the agent would have had without knowing $E$:

$$E \text{ confirms } H \iff P^{-E}(H \mid E) > P^{-E}(H).$$

- **Cost.** $E$ is entangled with the rest of what the agent believes, so subtracting it is no single operation, and nothing fixes which beliefs leave with it.
- **It can need a prior that is missing.** Had she not known $E$, an analyst would never have written down a curve built from $E$, so $P^{-E}$ of that curve does not exist and has to be stipulated. That is the [problem of new theories](#problem-of-new-theories) again.
- **Not a softening.** It leaves today's credences alone and runs the test on a different function.
- **Later history.** Jan Sprenger (2015) keeps a counterfactual element in a combined solution. Howson himself later judged (2017) that subjective Bayesianism cannot solve the problem, and moved toward a non-subjective version.

*Lessons:* [1.5](lessons/01-05-the-problem-of-old-evidence.md), [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Logical learning solution

**What the scientist learned, on this repair, was not the old fact but the connection: that the theory entails it.** Daniel Garber, Richard Jeffrey and Ilkka Niiniluoto (all 1983). For hypothesis $H$ and old evidence $E$, give credences to two further sentences, $L$, "$H$ with the background entails $E$", and $R$, "$H$ with the background entails $\neg E$", subject to modus ponens:

$$P(E \mid H \wedge L) = 1, \qquad P(E \wedge H \wedge R) = 0.$$

The claim is $P(H \mid L) > P(H)$. For an agent certain of $E$, the second condition forces $P(H \wedge R) = 0$.

- **Garber showed such models can be written down,** not that the rise is guaranteed.
- **Jeffrey's constraint** $P(L \vee R) = 1$ (she is sure $H$ settles $E$ one way or the other) gives $P(H \mid L) = P(H)/P(L)$: the less you expected the connection, the more it counts. The closed form needs an empty silent column.
- **Earman's weaker condition.** He objected that no one in 1915 had reason to be that sure. With $S = \neg L \wedge \neg R$ ("$H$ is silent on $E$"), he requires only $P(H \mid L) > P(H \mid S)$.
- **Cost.** What was learned is a logical fact, not the perihelion, which Earman presses as a change of subject (Glymour had anticipated and criticized this escape in 1980). In the model $E$ appears only as the reason one cell is empty. Whether that counts as the data confirming the theory is the dispute.
- **It must drop [logical omniscience](#logical-omniscience),** and van Fraassen's objection follows.
- **Bridge.** The reply about necessary moral truths in [`philosophy-of-religion` 3.3](../philosophy-of-religion/lessons/03-03-moral-arguments.md) is this move applied to a necessary truth.

*Lessons:* [1.5](lessons/01-05-the-problem-of-old-evidence.md)

### Problem of new theories

**A hypothesis nobody has conceived has no prior at all, so conditionalization cannot say what happens when it arrives.** Before general relativity was conceived it had no place in anyone's space of hypotheses. John Earman's physics student (*Bayes or Bust?*, 1992) hears that it entails the perihelion in her first class, forms a credence in the new theory on the spot, and lowers her credence in Newton.

- **Missing differs from zero.** A zero never recovers ([`epistemology` 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md)).
- **Conditionalization governs change, not formation,** and it cannot license the drop in Newton, since she had no earlier credence to move.
- **A reply.** Confine credence to the possibilities under consideration and preserve the ratios among those that remain (Shimony 1970; Salmon 1990; Wenmackers and Romeijn 2016).
- **Trap: this is not old evidence under another name.** Old evidence concerns certain evidence and a hypothesis already in the space; this concerns a hypothesis with no credence at all. Real cases often have both.
- **In Kuhn's dispute** ([2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)): priors can wash out only given shared likelihoods and a theory already in the probability space.

*Lessons:* [1.5](lessons/01-05-the-problem-of-old-evidence.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Use-novelty

**The view that data used to build a hypothesis could not have counted against it, and so tested nothing.** The use-novelty tradition: Elie Zahar and John Worrall, after Lakatos.

- **The test case** ([1.5](lessons/01-05-the-problem-of-old-evidence.md), the curve built from the data). A fitted curve entails its data by construction, so the [counterfactual solution](#counterfactual-solution) says those data confirm it, with the same [log-ratio score](#log-ratio-measure) as a law that predicted them. Use-novelty says they did not test it.
- **Howson's answer** ("Fitting Your Theory to the Facts", 1990): no such rule is needed, because the prior already discounts the fitted curve, and [confirmation is not acceptance](#confirmation-and-acceptance).
- **As working practice:** cross-validation in [`machine-learning` 4.1](../machine-learning/lessons/04-01-model-selection-and-cross-validation.md), where held-out data must not have been used in the fit.
- **In a methodology of science:** one reading of [novel prediction](#novel-prediction).

*Lessons:* [1.5](lessons/01-05-the-problem-of-old-evidence.md)

### Novel prediction

**A fact a theory predicts and was not built to fit.** Lakatos's test of whether a repair earns its keep ([2.5](lessons/02-05-lakatos-and-feyerabend.md)): a shift is [theoretically progressive](#progressive-problem-shift) if it predicts some novel fact.

- **Two readings.** Temporal: a fact not yet known and unexpected on rivals. Relaxed (Elie Zahar 1973, then Lakatos and Zahar 1975): a known fact counts if the programme's core was not built to fit it. On the relaxed reading Mercury's long-known perihelion counts for general relativity.
- **Trap: accommodation is not novelty.** A repair that merely fits more data does not qualify, since Lakatos asks for a corroborated prediction the repair was not built from.
- **An ancestor.** Whewell's timing condition on the [consilience of inductions](#consilience-of-inductions) ([4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)): a hypothesis built to fit both classes earns nothing extra.
- **In the realism debate.** Novel prediction is the success that premise 1 of the [no-miracles argument](#no-miracles-argument) leans on hardest ([5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)).
- **Related:** [use-novelty](#use-novelty), the general rule about data used in construction.

*Lessons:* [1.5](lessons/01-05-the-problem-of-old-evidence.md), [2.5](lessons/02-05-lakatos-and-feyerabend.md), [3.1](lessons/03-01-two-schools-of-statistical-inference.md), [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Occam's razor

**Do not posit more than the phenomena require: a rule about what you may assert, not a claim that the simplest theory is true.** The person is Ockham; "Occam" survives in the name of the razor and the [Occam factor](#bayesian-occam-factor). Ockham's own rule ([`ancient-medieval-philosophy` 8.4](../ancient-medieval-philosophy/lessons/08-04-ockham-nominalism-and-the-razor.md)): do not posit a thing without a reason from self-evidence, experience or authority. Newton's Rule I (*Principia*, Book III, tr. Motte, 1729) admits "no more causes of natural things, than such as are both true and sufficient to explain their appearances".

- **"True and sufficient"** caps causes at what the phenomena require, and says nothing about taking a worse fit for a simpler form.
- **Newton's warrant is a claim about Nature.** The accounts in [1.6](lessons/01-06-simplicity-and-curve-fitting.md) try to earn the preference without it.
- **"Simple" names several things:** [ontological parsimony and economy](#ontological-parsimony-and-economy).

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Ontological parsimony and economy

**Parsimony counts entities or kinds, economy counts assumptions, and they come apart.** An instance: in [`apologetics-foundations` 2.2](../apologetics-foundations/lessons/02-02-answering-the-atheist-philosophers.md), Oppy counts kinds of commitment and the theist counts unexplained primitives.

- **Statisticians count a third thing, adjustable parameters.** A circular orbit is "simpler" than an ellipse without positing fewer planets.
- **Whether counting parameters measures simplicity** is the premise under most pressure in [1.6](lessons/01-06-simplicity-and-curve-fitting.md) ([sub-family problem](#sub-family-problem)).
- **Other uses of simplicity:** one of Kuhn's [five values](#five-values-of-theory-choice); Popper's rival moral, simpler as more [falsifiable](#falsifiability); an explanatory virtue in [`philosophical-method` 2.1](../philosophical-method/lessons/02-01-inference-to-the-best-explanation.md).

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Curve-fitting problem

**Fit alone always votes for the wiggliest candidate, so any preference for a smoother curve comes from elsewhere.** Any $n$ points with distinct $x$-values lie exactly on a polynomial of degree $n-1$, and among nested families $\hat L$, a family's largest likelihood on the data, can only rise with $k$, its number of adjustable parameters.

- **Two stories about why fewer knobs help.** The tailor: a family with fewer knobs chases less noise, so it predicts better ([predictive accuracy](#predictive-accuracy), [Akaike's criterion](#akaike-information-criterion)). The forecasters: a flexible family could have accommodated almost anything, so what happens counts for little in its favour ([marginal likelihood](#marginal-likelihood), [Occam factor](#bayesian-occam-factor)).
- **The tailor is about prediction, the forecasters about probability.** They usually agree; [BIC](#bayesian-information-criterion) shows where they do not.

*Lessons:* [1.5](lessons/01-05-the-problem-of-old-evidence.md), [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Overfitting

**A curve with many knobs memorizes its data's noise, so it fits those data better and predicts fresh data worse.** Taught in [`statistical-learning` 1.3](../statistical-learning/lessons/01-03-overfitting-and-train-validation-test.md) and [`machine-learning` 1.2](../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md). It is the tailor's story of the [curve-fitting problem](#curve-fitting-problem), and claims nothing about the world.

- **A family containing the truth can still lose.** In [1.6](lessons/01-06-simplicity-and-curve-fitting.md)'s example the true form is a parabola, degree 7 has the best fit and the worst scores, and the false straight line beats it: the line's bias costs less than six extra parameters' variance.

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Predictive accuracy

**How well a family of curves, once fitted to one data set, predicts a fresh data set from the same source.** Hirotugu Akaike (1973); for philosophers, Malcolm Forster and Elliott Sober, "How to Tell When Simpler, More Unified, or Less Ad Hoc Theories Will Provide More Accurate Predictions" (*BJPS*, 1994). Fit family $F$ to data set $D_1$, getting best member $\hat\theta(D_1)$, and score that curve on a fresh $D_2$ of $n$ points, averaging over data sets:

$$A(F) = \frac{1}{n}\,\mathbb{E}_{D_1,D_2}\Big[\ln P\big(D_2 ; \hat\theta(D_1)\big)\Big].$$

- **A property of a fitted family, not a mark of truth.** A false family can have the higher predictive accuracy.
- **Estimated by** [Akaike's criterion](#akaike-information-criterion).

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Akaike information criterion

**Fit corrected for the number of parameters: an estimate of how well a fitted family will predict.** Akaike (1973). Under regularity conditions, for large $n$, $(\ln\hat L - k)/n$ is an unbiased estimate of [predictive accuracy](#predictive-accuracy), where $k$ is the family's number of adjustable parameters and $\hat L$ its largest likelihood on $n$ data points. Equivalently,

$$\mathrm{AIC} = 2k - 2\ln\hat L, \qquad \text{lower wins}.$$

Forster and Sober write the first form, a quantity to maximize; AIC is $-2n$ times it.

- **Why $k$.** The estimate was chosen on the data that score it, inflating $\ln\hat L$ by about $k/2$, and it falls short on fresh data by another $k/2$. With Gaussian errors of known standard deviation $\sigma$, the expected value $\mathbb{E}[\mathrm{AIC}]$ equals expected held-out deviance exactly, even for a false family ([`statistical-learning` 2.1](../statistical-learning/lessons/02-01-linear-regression-as-learning.md)'s optimism identity).
- **Trap: it does not assume nature is simple.** $k$ counts only because there is error: in least-squares form the score is residual sum of squares $+\,2k\sigma^2$, and at $\sigma = 0$ only fit is left. Forster and Sober call simplicity an "epistemic epiphenomenon". Their Appendix A does assume a "uniformity of nature": one curve generates old data and new.
- **Trap: the winner is not the family most likely to be true.** A win licenses using the family, not believing it.
- **Not consistent for the true family.** Let the simpler of two nested families be true, with one spurious parameter. AIC keeps it with probability $P(\chi^2_1 > 2) = 0.157$ however large $n$ gets, where $\chi^2_1$ is a chi-squared variable on one degree of freedom. Forster and Sober reply that AIC never set out to estimate the dimension. Its strength is prediction when no candidate is exactly right (Shibata, 1981).
- **Its hardest objection:** the [sub-family problem](#sub-family-problem).

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Marginal likelihood

**How probable a family made the data, averaged over its parameters by its prior.** A family $M$ with a prior $P(\theta \mid M)$ over its parameters $\theta$ predicts data $D$, so it can be scored as one hypothesis:

$$P(D \mid M) = \int P(D \mid \theta, M)\,P(\theta \mid M)\,d\theta.$$

- **A flexible family spreads its prior over many data sets** and pays for the ones that did not occur ([Occam factor](#bayesian-occam-factor)).
- **An exact case.** For a particular sequence of $h$ heads in $n$ tosses, with a uniform prior on the chance of heads, it is $h!\,(n-h)!/(n+1)!$.
- **It needs a prior:** Bayesians say a family with no prior predicts nothing. Forster and Sober reply that without a principled weighting a family has no well-defined likelihood.
- **Ingredient of the** [Bayes factor](#bayes-factor).

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md), [3.2](lessons/03-02-the-likelihood-principle.md)

### Bayesian Occam factor

**The fraction of a parameter's prior range that survives the data: the price a flexible family pays.** David MacKay, *Information Theory, Inference, and Learning Algorithms* (2003, ch. 28). For family $M$ and data $D$, a sharp peak, $\hat L$ the best fit and the $\sigma$s characteristic widths:

$$P(D \mid M) \approx \hat L \times \frac{\sigma_{\text{post}}}{\sigma_{\text{prior}}}.$$

- **Trap: it is not a prior favouring simple families.** It lives in the likelihood $P(D \mid M)$, works at equal prior odds, and changes with the prior's width.
- **"One extra parameter" does not fix the penalty; the prior does.** On 59 heads in 100 tosses, fair coin against free coin, the exact Occam factor under a uniform prior is 0.1224 and the [Bayes factor](#bayes-factor) for the fair coin is 1.60. Under $\mathrm{Beta}(5,5)$, a prior concentrated near $\tfrac12$, it is 0.76, and the verdict flips; under $\mathrm{Beta}(\tfrac12,\tfrac12)$, flat in a different coordinate, it is 2.46.
- **The mirror image of the [sub-family problem](#sub-family-problem):** the factor is a ratio of widths, and a width is chosen.

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Bayesian information criterion

**An approximation to the log marginal likelihood, charging $\ln n$ per parameter.** Gideon Schwarz (1978). For family $M$ with $k$ adjustable parameters, $\hat L$ its largest likelihood on data $D$, and $n$ data points:

$$\mathrm{BIC} = k\ln n - 2\ln\hat L, \qquad \ln P(D \mid M) \approx \ln\hat L - \tfrac{k}{2}\ln n.$$

BIC is $-2$ times an approximate log [marginal likelihood](#marginal-likelihood).

- **Where the penalty comes from.** Each parameter's posterior width shrinks like $n^{-1/2}$. The penalty comes from an integral's shrinking width and estimates no optimism, so the remark in [`statistical-learning` 2.1](../statistical-learning/lessons/02-01-linear-regression-as-learning.md) that every criterion is the same correction holds for AIC and not for BIC.
- **Where it parts from AIC.** If the simpler of two nested families is true, BIC keeps one spurious parameter with probability $P(\chi^2_1 > \ln n)$ ($\chi^2_1$ a chi-squared variable on one degree of freedom): 0.032 at $n = 100$, 0.0024 at $n = 10{,}000$. So BIC is consistent for the true family, if it is among the candidates. Forster and Sober read such splits as differences of aim.
- **Trap: it does not always penalize harder than AIC.** It charges $\ln n$ per parameter against AIC's 2, so it is the lighter penalty for $n \le 7$.

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Bayes factor

**The ratio of two hypotheses' marginal likelihoods: how much better one predicted the data, each prediction averaged over that hypothesis's own uncertainty.** [3.2](lessons/03-02-the-likelihood-principle.md)'s definition, with $\pi_i$ the prior over the parameter $\theta$ inside hypothesis $H_i$ and $x$ the data:

$$B_{01}(x) = \frac{P(x \mid H_0)}{P(x \mid H_1)}, \qquad P(x \mid H_i) = \int P(x \mid \theta)\,\pi_i(\theta)\,d\theta.$$

- **If both hypotheses are points,** the integrals disappear and $B_{01}$ is the likelihood ratio of the [law of likelihood](#law-of-likelihood).
- **It depends on the prior inside the composite hypothesis** ([Occam factor](#bayesian-occam-factor)). Under a point null against a continuous alternative, hold the test statistic fixed and let the sample size grow: $B_{01}$ grows without bound while the p-value stays put ([Lindley's paradox](#lindleys-paradox)).
- **Say which way it runs.** [1.6](lessons/01-06-simplicity-and-curve-fitting.md) reports one for the fair coin ($B_{01}$); [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) reports them for $H_1$.

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md), [3.2](lessons/03-02-the-likelihood-principle.md), [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)

### Nested-family problem

**Because every line is a parabola with $c = 0$, the simpler family can never be the more probable of the two.** LIN is $y = a + bx$ plus noise and PAR is $y = a + bx + cx^2$ plus noise, with $a, b, c$ adjustable. LIN entails PAR, so for any evidence $D$ and credence $P$:

$$P(\mathrm{LIN} \mid D) \le P(\mathrm{PAR} \mid D).$$

Popper (*The Logic of Scientific Discovery*, 1959) turned this against Harold Jeffreys's "simplicity postulate"; Forster and Sober (§7) press it on Bayesians generally.

- **First Bayesian reply.** Compare LIN with PAR minus LIN ($c \ne 0$), a disjoint rival a prior may rank freely. A continuous prior on $c$ gives $c = 0$ probability zero, so LIN needs a point mass. Forster and Sober answer that this changes the question and leaves the ranking unjustified.
- **Second Bayesian reply.** Leave priors alone: $P(D \mid \mathrm{LIN})$ may exceed $P(D \mid \mathrm{PAR})$, because entailment constrains probabilities, not likelihoods.

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Simplicity as a prior

**A penalty shrinking coefficients toward zero is a prior crediting smooth curves before any data.** [`statistical-learning` 2.5](../statistical-learning/lessons/02-05-regularization-as-a-bayesian-prior.md) showed that a penalty is a negative log-prior without saying "simplicity"; [1.6](lessons/01-06-simplicity-and-curve-fitting.md) makes the step.

- **It inherits [the problem of priors](../epistemology/lessons/05-04-the-problem-of-priors.md).**
- **"Simplest" depends on coordinates.** MAP estimates (the posterior's highest point) are not reparameterization-invariant: the language-relativity [entrenchment](#entrenchment) met.
- **Swinburne accepts the cost** (*Epistemic Justification*, 2001): simplicity is a fundamental a priori guide to truth.
- **Trap: this is not the [Occam factor](#bayesian-occam-factor),** which lives in the likelihood. The [nested-family problem](#nested-family-problem) limits how a prior can rank nested families.

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

### Sub-family problem

**Freeze a parameter at its best-fit value and the fit stands while the parameter count falls, so AIC rates the frozen family higher, down to a single curve with $k = 0$.** Forster and Sober (§6), who say it threatens any parameter count. ($k$ is the number of adjustable parameters.)

- **Their reply.** That estimate is unbiased across data sets but known to be too high for a family built from these data, so distrust such families, whoever built them and whenever.
- **Trap: the common gloss "fix the family before seeing the data"** is not their answer; on their view timing and authorship are not the issue.
- **What it attacks:** the premise, shared by the Akaikean and Bayesian accounts, that counting adjustable parameters measures simplicity. The Bayesian mirror image is that the [Occam factor](#bayesian-occam-factor) is a ratio of widths, and a width is chosen.
- **What each concedes.** The Akaikean, that $k$ alone cannot decide. The Bayesian, that the prior, not simplicity, does the work.

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md), [2.2](lessons/02-02-duhem-quine-and-underdetermination.md)

**Module 2: Falsification, paradigms, and research programmes**

### Falsificationism

**Science runs on conjecture and attempted refutation, with no inductive inference anywhere.** Karl
Popper, *Logik der Forschung* (Vienna, autumn 1934, imprint 1935; in English *The Logic of Scientific
Discovery*, 1959, below *LSD*) and *Conjectures and Refutations* (1963). He accepts
[Hume's argument](../epistemology/lessons/04-02-humes-problem-of-induction.md) that past instances
cannot support the next case, and denies that science ever needed the inference: guess boldly, deduce
what the guess forbids, go looking for it. It is a fifth answer to the four in
[`epistemology` 4.3](../epistemology/lessons/04-03-answering-hume.md).

- **Four premises** (skeleton under Arguments): no finite set of reports entails a
  [strictly universal statement](#strictly-universal-and-existential-statements); a failed prediction
  refutes [deductively](#modus-tollens-asymmetry); natural laws are prohibitions; conjecture, deduction
  and elimination are enough for science to learn from experience.
- **Where logic stops, Popper names decisions:** accept a [basic statement](#basic-statement); count a
  theory falsified only by a reproducible effect (*LSD* §22); admit an
  [auxiliary](#auxiliary-hypotheses) only if testability rises;
  treat the [sufficiently improbable](#problem-of-probabilistic-hypotheses) as prohibited.
- **The premise 2.1 presses:** the fourth, at the moment someone has to act
  ([Salmon's objection](#salmons-objection-to-corroboration)).
- **Against Kuhn:** Popper prizes the readiness to give a theory up. Kuhn reports that scientists
  rarely show it and argues that they should not ([normal science](#normal-science)).
- **Trap: one contrary observation does not kill a theory for Popper.** He required an accepted basic
  statement, a reproducible effect and a judgment about auxiliaries.
  [Naive falsificationism](#naive-and-sophisticated-falsificationism) is Lakatos's label.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Falsifiability

**A theory is falsifiable if some possible report would contradict it.** Popper, *LSD* §21: a theory is
empirical if it divides all possible [basic statements](#basic-statement) into two non-empty classes,
those it permits and those it rules out, its [potential falsifiers](#potential-falsifiers). It is a
criterion of [demarcation](#demarcation-problem), not of meaning.

| Popper's three cases (*Conjectures and Refutations*, ch. 1) | The charge, and they differ |
|---|---|
| Einstein | Took a risk: eclipse plates showing no shift would refute it |
| Freud and Adler | He could think of no behaviour either theory forbade, so the confirmations their admirers cited counted for nothing |
| Marx | Early predictions *were* testable and *were* falsified; followers then reinterpreted theory and evidence until they agreed |

- **Both verdicts are disputed.** Adolf Grünbaum (1984) argued that Freud stated refutable claims and
  that the real weakness is clinical evidence contaminated by the analyst's suggestion. Maurice
  Cornforth (1968) rejected Popper's picture of Marxism as dogma.
- **It sorts statements and cannot say which statement *is* the theory.** Popper on Darwinism: not
  testable, a metaphysical research programme, since "survivors survive" comes close to tautology (1974
  autobiography; *Unended Quest*, 1976). In a 1977 lecture at Darwin College (*Dialectica*, 1978) he
  changed his mind about its testability and logical status. A schema forbids little and its instances
  forbid a lot.
- **In the demarcation debate:** one of Overton's [five marks](#mclean-v-arkansas), not the whole
  *McLean* test. Popper also held that a doctrine loses its standing when its defenders refuse to
  accept falsification.
- **Trap: falsifiable does not mean false or already tested.** It is a property of logical form. A
  theory can be falsifiable and true, falsifiable and never tested, or falsified and still empirical.
- **Trap: possible reports, not obtainable ones.** Weak instruments or an experiment nobody has run
  remove no potential falsifier. Untested is not untestable.
- **Trap: unfalsifiable does not mean worthless or meaningless.** Popper says non-testable ideas can be
  important and can become testable. His charge is that they cannot claim empirical backing in the
  scientific sense.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.6](lessons/02-06-demarcation-after-popper.md)

### Demarcation problem

**What, if anything, separates science from pseudoscience and other non-science?** Popper's answer,
[falsifiability](#falsifiability), opened the modern debate; [2.6](lessons/02-06-demarcation-after-popper.md)
asks whether any line can be drawn.

| Who | The proposed mark |
|---|---|
| Popper | Some possible observation would contradict the theory |
| Kuhn | A tradition of puzzle-solving ([normal science](#normal-science)) |
| Lakatos | Judged over a programme's record: [degenerating](#degenerating-problem-shift) repairs are the mark against it |
| Overton, in [*McLean*](#mclean-v-arkansas) | Five marks, each stated as essential |

After them, three camps. **Definers** want necessary and sufficient conditions.
**[Cluster theorists](#cluster-accounts-of-science)** give up the definition and keep the distinction.
**Eliminativists**, following [Laudan](#demise-of-the-demarcation-problem), drop the distinction and ask
only whether a claim is well supported.

- **Trap: "not science" covers three things.** See
  [pseudoscience, bad science and non-science](#pseudoscience-bad-science-and-non-science); non-science
  implies no defect.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.6](lessons/02-06-demarcation-after-popper.md)

### Modus tollens asymmetry

**No finite run of instances entails a universal statement, but one accepted counter-instance entails
that it is false.** With $T$ a theory, $I$ initial conditions, $O$ a prediction and $\vDash$ "entails":

$$T \wedge I \vDash O, \qquad \neg O \quad\therefore\quad \neg(T \wedge I)$$

The step from a failed prediction is deductively valid, so it needs no defence against Hume (Popper,
*LSD*). The form itself is [modus tollens](../philosophical-method/lessons/01-04-argument-forms-and-formal-fallacies.md).

- **A limit Popper stated himself** (*LSD* §15): "there are white ravens" cannot be falsified, since no
  finite search contradicts it, and one find verifies it. Universal and existential statements are
  logical mirror images, and laws sit on the universal side.
- **Trap: the conclusion is the negation of a conjunction.** The test convicts the package, and logic
  does not say which member ([Duhem-Quine thesis](#duhem-quine-thesis)).

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.2](lessons/02-02-duhem-quine-and-underdetermination.md)

### Strictly universal and existential statements

**Statements unrestricted in place and time: *all A are B* and *there is an A that is B*.** Popper,
*LSD* §15. Natural laws have the strictly universal form, which makes them prohibitions: energy
conservation says there is no perpetual motion machine.

| Form | Can a finite record verify it? | Can a finite record contradict it? |
|---|---|---|
| Strictly universal | No | Yes |
| Purely existential ("somewhere, at some time") | Yes: one find | No: no finite search rules it out |

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Basic statement

**A singular report of the form *there is an X at place and time Y*, the kind of statement a
falsification rests on.** Popper, *LSD* ch. V.

- **Accepted by decision.** Testing must stop somewhere. A community accepts a report as a jury reaches
  a verdict, open to appeal. Experience can motivate the decision but does not justify it.
- **Trap: possible versus accepted.** [Falsifiability](#falsifiability) is defined over all possible
  basic statements. Falsification needs an accepted one, and a reproducible effect: stray reports do
  not falsify (*LSD* §22).

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Potential falsifiers

**The possible basic statements a theory rules out.** Popper, *LSD* §21. A theory is
[falsifiable](#falsifiability) exactly when this class is not empty, and a theory that says more
forbids more.

- **2.1's clean case, the 1919 eclipse.** General relativity gives a deflection at the Sun's edge of
  $\delta = 4GM/(c^2 R) \approx 1.75$ arc-seconds, where $M$ and $R$ are the Sun's mass and radius, $G$
  the gravitational constant and $c$ the speed of light. Any report of a deflection outside the error
  band is a potential falsifier: no shift at all, or half the value, about $0.875$, which Popper's own
  footnote concedes can be had classically if light is treated as particles.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Bold conjecture

**A theory that says a lot and so risks a lot, forbidding more than its rivals.** For any probability
function $P$, if $T_1$ entails $T_2$ then $P(T_1) \le P(T_2)$. So, Popper concludes, a science aiming
at probability would aim at saying nothing. His example (*LSD* §36): that every planetary orbit is a
circle entails that each is an ellipse, not conversely, so it forbids more.

- **Simplicity.** Popper equates it with degree of falsifiability (*LSD* §43), a rival moral to
  [1.6](lessons/01-06-simplicity-and-curve-fitting.md).
- **Against probability-raising.** His content argument treats the rise in probability of
  [1.3](lessons/01-03-confirmation-as-probability-raising.md) as the wrong target.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Corroboration

**A report of how a theory has stood up to severe tests: how it has done, and nothing about how it
will do.** A severe test is a serious attempt to refute the theory. Popper insists corroboration is not
a probability, and (1974 "Autobiography") that it reports past performance and cannot predict future
performance.

- **Against hypothetico-deductivism.** [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md)
  counts a success as confirmation. Popper refuses unless the test was severe, and then calls it
  corroboration.
- **Descendant:** Deborah Mayo's [severe testing](#severe-testing).
- **Trap: not confirmation renamed.** Popper surrendered the word "confirmation" because it had come to
  imply probability. He seeks well-corroborated theories, not highly probable ones.
- **Trap: corroborated is neither proved nor made probable.** No finite record entails a universal
  statement.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Salmon's objection to corroboration

**If corroboration reports only the past, it gives no reason to prefer a theory for prediction; if it
bears on the future, induction is back.** Wesley Salmon, "Rational Prediction" (1981). Elimination
leaves infinitely many unrefuted theories with incompatible predictions, and a prediction needs one as
its premise.

| Response | Content |
|---|---|
| J. W. N. Watkins (1968) | An agent who must choose has nothing else to go on. Salmon: a coin is something else |
| Popper, "Replies to My Critics" (1974) | Separate relying from preferring: rely on no theory, but since you must choose, prefer the best tested, because a proposal ignoring those theories will not survive criticism and nothing is more rational than critical discussion |
| Lakatos (1974) | Asked Popper for a "whiff of 'inductivism'" to connect the method to its aim |

- **What each side owes.** Popper's reply concedes that the preference carries no claim about success;
  accepting Lakatos's whiff would give up the premise that nothing inductive has to be added. Salmon
  concedes that refutation is deductive and is left owing the justification of induction that
  [`epistemology` 4.3](../epistemology/lessons/04-03-answering-hume.md) left open.
- **Trap: Salmon does not demand certainty.** He disclaims that; he wants some rational basis.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Problem of probabilistic hypotheses

**A probability statement rules out no finite sequence, so strictly it cannot be falsified.** "This
coin is fair": 1,000 heads running has probability $2^{-1000}$, about $10^{-301}$, tiny and not zero.
Popper (*LSD* §§65, 68) grants that such statements are strictly unfalsifiable and adds a decision: a
repeatable regularity may not be put down to a pile-up of chance. In effect, the sufficiently
improbable is treated as prohibited.

- **Bridge:** a significance threshold is the same kind of decision
  ([3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)).

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Auxiliary hypotheses

**The further assumptions (instruments, initial conditions, other theory) a hypothesis needs before it
predicts anything.** With $H$ the hypothesis, $A_1, \dots, A_n$ the auxiliaries and $O$ an observable
result: $(H \wedge A_1 \wedge \dots \wedge A_n) \vDash O$. Duhem (1906) counts among them the
propositions used to establish that the effect failed.

- **Popper's rule** (*LSD* §§19–20): an auxiliary is acceptable only if it raises the system's
  testability. Pauli's exclusion principle passes.
- **Lakatos's name:** the [protective belt](#protective-belt), which takes the blame so the
  [hard core](#hard-core) need not.
- **Cases.** OPERA's neutrinos: the 730 km baseline, the GPS time transfer, the cable delays, the
  proton-timing chain. Prout: that chemically purified chlorine is one kind of thing. 2.2's opening
  contrast is Uranus and Mercury, one move about an unseen planet with opposite fates.
- **Trap: an auxiliary is not ad hoc just by being added.** That is a judgment about what the addition
  does ([ad hoc hypothesis](#ad-hoc-hypothesis)).

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md), [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Ad hoc hypothesis

**A rescue that saves a theory and gives nothing new to test.** For Popper (*LSD* §§19–20) it is one of
the [conventionalist stratagems](#conventionalist-stratagem): an auxiliary that does not raise the
system's testability. His own example of a failure, the FitzGerald–Lorentz contraction, he withdrew in
a footnote after Grünbaum showed it had testable consequences.

| Whose test | A patch is ad hoc when |
|---|---|
| Popper | It adds no testable *content* |
| [`philosophical-method` 2.1](../philosophical-method/lessons/02-01-inference-to-the-best-explanation.md) | It has no independent *support* |
| Lakatos | It is a belt repair that predicts nothing new |

- **Trap: these come apart.** A patch can add testable content and have no support yet. On Popper's
  account it has simply earned no corroboration.
- **Trap: protecting the hard core is not the charge.** The
  [negative heuristic](#positive-and-negative-heuristic) requires that protection. Ad hocness attaches
  to belt repairs.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Conventionalist stratagem

**A move that saves a threatened theory from refutation at the price of its testability.** Popper,
*LSD* §§19–20 ("conventionalist twist" in *Conjectures and Refutations*, ch. 1). A threatened theory
can always be saved: by an [ad hoc](#ad-hoc-hypothesis) hypothesis, by redefining a term, by doubting
the experimenter or the theorist. Popper's method bans these by decision.

- **His case:** the charge against Marxism, that followers made the theory irrefutable after its
  predictions failed. [`social-theory` 2.3](../social-theory/lessons/02-03-capitalism-and-the-test-of-history.md)
  reports it and leaves its assessment to this course.
- **Trap: the phrase "immunizing" is not Popper's.** Recent writers say
  [immunizing strategies](#immunizing-strategies); *LSD* says stratagem.
- **Trap: not every rescue is a stratagem.** An auxiliary that raises testability is permitted.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Naive and sophisticated falsificationism

**Lakatos's three-way sorting of falsificationist views, from conclusive disproof by experience to
elimination only by a better rival.** Imre Lakatos (1970).

| Tier | Claim |
|---|---|
| Dogmatic | Experience can conclusively disprove a theory |
| Naive methodological | Test statements are accepted by decision, then one clash eliminates a theory |
| Sophisticated | A theory is eliminated only by a rival that keeps its successes and adds corroborated content |

- **Sophisticated falsificationism** keeps Popper's ban on ad hoc rescue in spirit and moves it from the
  single theory to the [series](#methodology-of-research-programmes).
- **Trap: "naive falsificationism" is Lakatos's label, not Popper's description of himself.**
- **Trap: the [weak thesis](#duhem-quine-thesis) does not refute Popper.** A conjunction really is falsified, and his
  method already permits auxiliaries that add testable content and bans those that do not.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Duhem-Quine thesis

**A later label fusing two claims: that a failed test refutes only a conjunction, and that any statement
can be kept come what may.**

| Term | Claim | Starts from | Whose |
|---|---|---|---|
| Weak thesis | A failed test refutes only a conjunction | A failed test | Duhem, for physics |
| Strong thesis | Any statement can be kept, any revised | A failed test | Quine |
| [Contrastive underdetermination](#contrastive-underdetermination) | The same evidence supports more than one theory | A body of evidence | Duhem's second point; van Fraassen |

- **Weak thesis.** Pierre Duhem, *La Théorie physique* (1906), Part II, ch. VI, §II. From
  $(H \wedge A_1 \wedge \dots \wedge A_n) \vDash O$ and $\neg O$, at least one conjunct is false. Of
  experiment: "it does not point out to him which one must be changed" (p. 307, lesson's translation).
  That limits experiment. It does not make every choice as good, and something must go.
- **Duhem's scope is physics.** He contrasts physiology, where theory can wait outside the laboratory
  (pp. 296–99), though the physiologist reading a thermometer has trusted a physicist (p. 300).
- **Strong thesis.** W. V. O. Quine, "Two Dogmas of Empiricism" (1951): statements face experience only
  as a body, logic and mathematics included ([web of belief](#web-of-belief)). A recalcitrant experience
  requires some adjustment and no particular one, so any statement can be held true "come what may" and
  none is immune.
- **The label.** Duhem never asserted the strong thesis and refused to carry his analysis past physics.
  The 1951 paper did not cite Duhem; a footnote in the 1953 reprint did. Lakatos (1970) used "strong" for
  something more, that no rational rule selects among revisions, which Quine does not assert.
- **Pressure on the strong thesis.** Grünbaum ("The Duhemian Argument", 1960): if the rescuing auxiliary
  may be anything, the claim is trivial; if it must be substantive, nothing general guarantees one.
  Laudan (1990): logically possible is not rationally defensible, so the thesis alone yields no parity
  among revisions. The Quinean grants that most rescues are absurd and that simplicity and conservatism
  guide revision, and holds that those standards sit inside the web.
- **Trap: not one shared claim.** Duhem's is the weak thesis for physics; Quine's the strong one for
  everything.
- **Trap: underdetermination does not make theory choice arbitrary.** That needs a premise neither
  states: that all logically open revisions are equally defensible.
- **Trap: say "Duhem-Quine".** [`ancient-medieval-philosophy` 7.1](../ancient-medieval-philosophy/lessons/07-01-faith-reason-and-the-paris-crisis.md)
  uses "Duhem's thesis" for a different claim, about 1277.

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Confirmational holism

**Hypotheses meet evidence only in groups, never one at a time.** Duhem (1906) for physics; Quine (1951)
for all belief. This course owns holism about testing. The web itself is taught in
[`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md), and
[`metaphysics` 1.2](../metaphysics/lessons/01-02-abstract-objects.md) uses the holism as a premise.

- **Trap: holism about testing is not holism about meaning.** The second is what drives
  [semantic incommensurability](#semantic-incommensurability).

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md)

### Web of belief

**Quine's picture of everything we accept as one connected fabric, tested only as a whole.** "Two Dogmas
of Empiricism" (1951), taught in [`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md).
What 2.2 adds is its role as the unit of test: Duhem's package has no outer edge, and logic is one of the
strands.

- **Standards inside the web.** Simplicity and conservatism guide revision, and because they sit in the
  web they cannot be a court outside it.
- **What each side concedes** (2.2). The Quinean: read as logic, "come what may" is idle, and pragmatic
  standards do the work. The critic: those standards are not certified from outside practice, so
  "irrational" means "by our present lights".

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md)

### Holist underdetermination

**Start from a failed test: more than one revision restores fit.** It asks which belief to give up. Its
source is the [weak thesis](#duhem-quine-thesis).

- **Used in [3.5](lessons/03-05-objectivity.md):** Longino's first premise, that data count as evidence
  only given background assumptions.
- **Trap: "open" is not "recommended".** Neither thesis ranks the moves it leaves open. That is the job
  of [good sense](#good-sense) or of pragmatic standards.
- **Trap: not the sceptic's underdetermination.** The premise in
  [`epistemology` 3.1](../epistemology/lessons/03-01-the-closure-argument.md), that your evidence does not
  favour your belief over a deceiver hypothesis, has a different target.

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [3.5](lessons/03-05-objectivity.md)

### Contrastive underdetermination

**Start from a body of evidence: more than one theory fits it.** Duhem's second point (1906, §III) and
van Fraassen. Proof by elimination needs a complete list of rivals, and "the physicist is never sure of
having exhausted all imaginable suppositions" (p. 312, lesson's translation).

- **The extreme case** is [empirically equivalent theories](#empirically-equivalent-theories); the
  [transient](#transient-underdetermination) case is taken up in
  [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md).
- **In [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md):** the threat the no-miracles
  argument is meant to answer.
- **Trap: it comes apart from [holist underdetermination](#holist-underdetermination).** Knowing which
  conjunct to blame would not tell you how many rivals the evidence supports, and the reverse holds too.

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Crucial experiment

**An experiment meant to refute one of two rivals and thereby prove the other.** Duhem (1906, §III)
denies that physics has one. It would copy the geometer's reductio, but the geometer has two
contradictories and the physicist two candidates: "the truth of a physical theory is not decided by
heads or tails" (p. 312, lesson's translation).

- **His case:** Foucault's 1850 result that light travels slower in water. It condemned the emission
  *system*, not the bare idea of light as projectiles, and it did not establish waves in an ether, since
  Maxwell had supplied a third option.
- **Trap: a separate argument from the weak thesis.** §III grants for the moment that only one hypothesis
  in each system is in doubt and presses on anyway. What it denies is proof by elimination.

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md)

### Good sense

**Duhem's name for the judgment, beyond logic, that decides which hypothesis to give up.** *Bon sens*
(1906, Part II, ch. VI, §X). Some choices contradict nothing and are still unreasonable: "pure logic is
not the only rule of our judgments" (pp. 356–57, lesson's translation). He grants that such reasons are
vague and do not reach all minds at once.

- **A Bayesian attempt.** Jon Dorling (1979) treats the allocation of blame by credences; on 2.2's
  illustrative numbers blame lands hardest on the less credible conjunct. A friend of good sense calls
  this its vindication. A critic says the priors are the good sense over again
  ([`epistemology` 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md)).
- **Kuhn's [five values](#five-values-of-theory-choice)** are the fullest attempt to say what such
  judgment appeals to.
- **Trap: unreasonable is not illogical.** That is the distinction Duhem is drawing.

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Empirically equivalent theories

**Rival theories with the same observational consequences: the extreme case of contrastive
underdetermination.** Bas van Fraassen, *The Scientific Image* (1980). Let $T_v$ be Newton's mechanics and
gravitation plus the claim that the centre of the system moves at constant velocity $v$ through absolute
space. Newton's laws cannot detect uniform motion of the whole, so every $T_v$ has the same observable
consequences.

- **Does it stay equivalent?** Add the nineteenth-century auxiliary of an ether at rest in absolute
  space, and $T_0$ and $T_v$ predict different interferometer fringes. On
  [Laudan and Leplin's](#laudan-leplin-objections) view that is the point. The defender replies that a
  contraction absorbed the null result, so there need only be some equivalent at each time. Kyle Stanford
  replies that $T_v$ tacks on a quantity the theory itself says is undetectable, so delete it.
- **Left open in 2.2:** whether $T_0$ and $T_v$ are rival theories or one theory with an idle variable.
- **Trap: Stanford's rivals are not these.** His are
  [transient](#transient-underdetermination): further evidence could separate them
  ([5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)).
- **Trap: not a premise of constructive empiricism.** Gideon Rosen (1994) pointed out that the data fit
  "adequate so far" as well as "adequate", so such an argument would undercut the belief van Fraassen
  keeps ([5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)).

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Laudan-Leplin objections

**Two attacks on the argument from empirical equivalence: equivalence is unstable, and equal consequences
are not equal evidence.** Larry Laudan and Jarrett Leplin, "Empirical Equivalence and Underdetermination"
(*Journal of Philosophy*, 1991).

1. The observable shifts with instruments, and predictions need auxiliaries that get replaced, so
   equivalence holds only relative to a state of science.
2. A theory can be supported by a result it does not entail, and a result it does entail may support it
   not at all (their case: boys assigned scripture reading reach puberty).

- **The second works even if equivalence is granted.**
- **A separate point:** Laudan (1990), logically possible is not rationally defensible.

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md)

### Unconceived alternatives

**On Stanford's reading of the record, the evidence of the day has repeatedly fit radically different
theories that nobody had yet conceived.** P. Kyle Stanford, *Exceeding Our Grasp* (2006), taught in
[5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md). Its root in this module is
Duhem's premise that no physicist can know the list of rivals is complete, joined to the
[bad-lot](#bad-lot-argument) worry of
[`philosophical-method` 2.1](../philosophical-method/lessons/02-01-inference-to-the-best-explanation.md).

- **How it bears on realism** is 5.2's business.
- **Trap: not the [empirically equivalent theories](#empirically-equivalent-theories) of 2.2.** His are
  [transient](#transient-underdetermination): further evidence could separate them.

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Normal science

**Puzzle-solving inside an accepted paradigm: a failed puzzle reflects on the solver, not on the rules.**
Thomas Kuhn, *The Structure of Scientific Revolutions* (1962; Postscript 1969). The work is fixing the
facts the theory says matter, matching theory to fact, and extending theory to new cases.

- **Description or prescription?** Feyerabend (1970) could not tell, and suspected the ambiguity was
  deliberate. Kuhn ("Reflections on My Critics", 1970) says both at once: behaviour, then function
  (commitment buys depth, sensitivity to violations, and a filter against distraction), then no substitute,
  then a conditional "ought" (skeleton under Arguments). The Postscript admits a circle and denies it is
  vicious.
- **Objections.** [Tenacity and proliferation](#tenacity-and-proliferation) attacks the no-substitute
  premise. Popper ("Normal Science and Its Dangers", 1970) grants that normal science exists, disputes
  that it is typical, and calls the dogmatically trained normal scientist a danger to science.
- **Progress.** Later theories are better puzzle-solvers, so science progresses; Kuhn denies that this
  makes them nearer the truth ([2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)).
- **Demarcation.** For Kuhn a science is a tradition of puzzle-solving
  ([2.6](lessons/02-06-demarcation-after-popper.md)).
- **Trap: normal science does test things.** Proposed puzzle-solutions are tested and can fail. What is
  not on trial is the paradigm they work within.
- **Trap: a famous or expensive confirmation is still normal science** if it matches fact to theory
  inside the framework.

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md), [2.6](lessons/02-06-demarcation-after-popper.md)

### Paradigm

**What a scientific community shares that sets its puzzles and its standards for solving them.** Kuhn
(1962) used the word loosely: Margaret Masterman (1970) counted "not less than twenty-one" senses, and the
Postscript, citing her, reports twenty-two. Kuhn then split it into the
[disciplinary matrix](#disciplinary-matrix) and the [exemplar](#exemplar).

- **Standards move with it.** Many seventeenth-century readers found Newton's gravitation defective for
  naming no mechanism. Once it was the paradigm, lacking a mechanism stopped being an objection
  ([methodological incommensurability](#methodological-incommensurability)).
- **Trap: not just a widely held theory.** That is the loose sense, as in
  [`geology` 2.1](../geology/lessons/02-01-evidence-for-drift.md)'s "working paradigm". Kuhn's core sense
  is the shared solved problem, and replacing one changes what counts as a problem and as a solution.
- **Trap: Thomas Kuhn is not the Harold Kuhn of Kuhn–Tucker.**

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Disciplinary matrix

**Everything a specialist community holds in common: the broad sense of "paradigm".** Kuhn, Postscript
(1969). Its elements are symbolic generalizations ($f = ma$, force equals mass times acceleration), models
(gas molecules as tiny elastic billiard balls), values, and [exemplars](#exemplar).

- **Whose matrix?** Paradigms belong to communities, which are small: around a hundred people and
  sometimes under twenty-five, so one field can house many.

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Exemplar

**A concrete solved problem met in training, which teaches you to see new problems as versions of it: the
narrow sense of "paradigm".** Kuhn, Postscript (1969); he later called this sense the book's most original
and least understood idea. Nobody learns $f = ma$ as a rule. You learn to see free fall and the pendulum
as versions of it, as you learned
[difference-in-differences](../econometrics/lessons/04-03-difference-in-differences.md) from worked cases.

- **After a revolution, new exemplars.** Lavoisier's *Traité élémentaire de chimie* (1789) supplies them,
  built on the balance.

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Pre-paradigm period

**A field's stage of rival schools, before any one achievement sets the standard.** Kuhn (1962):
electricity before Franklin had almost as many views as experimenters. Once one achievement wins, normal
science starts.

- **Kuhn's defence of commitment** points here: before consensus, foundations were argued endlessly and
  little accumulated.
- **Trap: the Postscript corrects the label.** Each school had a paradigm. What was missing was a single
  one.

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Anomaly and crisis

**Anomaly: nature fails to fit what the paradigm led you to expect. Crisis: an anomaly goes deep enough
to shake confidence in the practice itself.** Kuhn (1962).

- **Most anomalies get absorbed.** For about sixty years after Newton, the predicted motion of the Moon's
  perigee was half the observed value; around 1750 Clairaut showed that the fault lay in the mathematics.
- **Sharp expectations make anomalies.** The weight gain on burning became a sharp anomaly only once
  exact weighing made the expectation exact.
- **Symptom of crisis:** versions of the theory multiply. By the early 1770s there were almost as many
  versions of phlogiston as chemists working on gases.
- **Three exits.** Normal science solves the problem after all; the problem is shelved for a later
  generation; or a rival arrives. Only the third is a [revolution](#scientific-revolution).
- **Trap: duration does not make a crisis.** Lost confidence in the practice does. The Moon's perigee
  lasted sixty years without one.
- **Trap: crisis is the usual prelude, not a prerequisite** (Postscript), at the price of turning the
  cycle into a tendency.

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Scientific revolution

**A rival paradigm replaces the old one, changing what counts as a problem and as a solution.** Kuhn
(1962). He holds that a paradigm is never dropped without a replacement, and denies that revolutions are
purely cumulative ([Kuhn loss](#kuhn-loss)).

- **Clean case: oxygen,** stage by stage, in 2.3. Lavoisier's sealed note (1772), Priestley's gas (1774),
  Lavoisier's distinct constituent (by 1777), which Priestley never accepted.
- **Hard case: continental drift** ([`geology` 2.1](../geology/lessons/02-01-evidence-for-drift.md)). Parts
  fit. Three things strain: whose paradigm (Naomi Oreskes, 1999, documents Europeans receptive long before
  Americans), what crisis (the decisive anomalies came from new ocean surveys), and whether the resistance
  was reasonable, which Kuhn's description cannot sort.
- **Trap: size is not the test.** What must change is the models, the exemplars and what counts as a
  solution, not the headline.
- **Trap: "no rule compels the choice" is not "the choice is irrational".** See
  [choice without an algorithm](#choice-without-an-algorithm).

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Kuhn loss

**Explanatory power given up when one paradigm replaces another.** The idea is Kuhn's; the label is later
writers'. Case: phlogiston's account of why metals are alike is lost with Lavoisier's chemistry.

- **It does not stop Kuhn calling science progressive,** since later theories are better puzzle-solvers
  ([2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)). It is one reason the question of
  [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) is hard.

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Gestalt switch

**Kuhn's likening of a change of paradigm to the duck-rabbit flip, a likeness he limits himself.** A
gestalt subject can flip back and forth and knows the lines on the page never changed. A card subject has
an experimenter to say what was there all along. A scientist has neither, and does not see a thing *as*
something else, he says, but simply sees it.

- **In [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md):** the perception strand of
  [incommensurability](#incommensurability), where proponents work in "different worlds".

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Theory-ladenness of observation

**What an observer sees or reports depends partly on what she already believes.** N. R. Hanson, *Patterns
of Discovery* (1958, ch. I), asks whether Tycho and Kepler, watching the dawn, see the same thing, and
argues that seeing is more than having a retinal image. In Bruner and Postman's 1949 experiment, subjects
shown trick cards, such as a red six of spades, at first named them as normal cards.

- **Three claims under one label** (later writers): theory can affect what observers perceive, what they
  attend to, and what their reports mean.
- **Feyerabend's version** is the [natural interpretation](#natural-interpretations).
- **Used elsewhere:** [`philosophical-method` 3.4](../philosophical-method/lessons/03-04-intuitions-and-reflective-equilibrium.md)
  takes it as a premise in defending intuitions as evidence.
- **Trap: laden is not determined.** Bruner and Postman's subjects mostly did come to see the trick card,
  and Priestley and Lavoisier, holding rival theories, reported closely similar measurements. Expectation
  shapes observation, and observation can still defeat it.

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md), [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Tenacity and proliferation

**Holding on to a theory despite trouble, while rivals are developed alongside it.** Paul Feyerabend,
"Consolations for the Specialist" (1970): growth comes from their interplay, several tenaciously held
rivals running at once and exposing troubles the others hide. So monopoly is not required, and Kuhn's
separation of quiet periods from proliferating ones collapses.

- **Its target:** the premise of Kuhn's defence that no other way of organizing research would do the
  jobs commitment does.
- **Kuhn's strongest reply:** the record before consensus, and small communities, so one field can house
  many.
- **What each concedes.** Kuhn's "ought" holds only in the absence of an alternative, a condition he
  states himself. Feyerabend keeps tenacity, so some resistance is functional on his account too.

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Incommensurability

**Having no common measure. Said of rival theories, it does not mean they cannot be compared.** The
metaphor: no unit fits a whole number of times into both the side and the diagonal of a square, and you
can still say which is longer. *Structure* (1962) bundled three breakdowns.

| Strand | What breaks | Kuhn's case |
|---|---|---|
| [Standards](#methodological-incommensurability) | Which problems a theory must solve, and what counts as solving them | Newton's gravitation and the missing mechanism |
| [Concepts](#semantic-incommensurability) | The same word does different work | Mass |
| Perception | Proponents work in "different worlds", a phrase he prefaced by saying he could not explain the sense further | The [gestalt switch](#gestalt-switch) |

- **Kuhn's later form** is [local and taxonomic](#local-and-taxonomic-incommensurability).
- **Trap: incommensurable is not incomparable.** Comparison goes on. What fails is point-by-point
  comparison in one neutral language.
- **Trap: "different worlds" does not mean scientists change nature.** Kuhn hedged the phrase and denied
  the constructivist reading. Paul Hoyningen-Huene reads it as a change in the phenomenal world, with the
  world-in-itself untouched.
- **Trap: another use of the word.** In [`ethics` 4.5](../ethics/lessons/04-05-the-new-natural-law-theory.md)
  and [`philosophy-of-economics` 3.4](../philosophy-of-economics/lessons/03-04-cbas-critics-and-defenders.md)
  it applies to goods with no common scale. Here it relates theories.

*Lessons:* [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md), [2.6](lessons/02-06-demarcation-after-popper.md)

### Semantic incommensurability

**Key terms of rival theories mean different things, so the theories cannot be translated into each other
without loss.** Kuhn (1962). A theoretical term gets its meaning from the laws it figures in; a revolution
changes those laws; so no neutral language allows point-by-point comparison. His case: Newton's mass is
conserved, Einstein's can be converted into energy, and measurements of the two coincide only at low
relative speeds.

| Reply | Who | Claim |
|---|---|---|
| Reference | Israel Scheffler, *Science and Subjectivity* (1967) | Sense can shift while reference holds, and comparing theories for truth needs only reference |
| [Partial denotation](#partial-denotation) | Hartry Field (1973) | Newton's "mass" partially denoted two quantities |
| No scheme | Donald Davidson, "On the Very Idea of a Conceptual Scheme" (1974) | A language we could not translate at all is one we could not recognize as a language, and interpreting anyone means assuming they mostly speak truly by our lights |

- **Kuhn narrowed the thesis:** [local and taxonomic incommensurability](#local-and-taxonomic-incommensurability).

*Lessons:* [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Methodological incommensurability

**Rival paradigms disagree about which problems a theory must solve and what counts as solving them.**
Kuhn (1962). Many seventeenth-century readers found Newton's gravitation defective because it named no
mechanism. Once it was the paradigm, lacking a mechanism stopped being an objection, and Coulomb's law
gained from resembling it.

- **Trap: a claim about standards, not meanings.** It would survive even if every term translated.

*Lessons:* [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Local and taxonomic incommensurability

**Kuhn's later, narrower thesis: only a small cluster of interdefined terms fails to translate, because a
revolution re-sorts kinds.** "Commensurability, Comparability, Communicability" (given in 1982, printed
1983) for the local form; later essays, collected in *The Road Since Structure* (2000), for the taxonomic.

- **Case.** Ptolemy's "planet" included the Sun and not the Earth, Copernicus's the reverse.
- **No-overlap principle.** Categories that cross-classify the same objects cannot be merged into one
  taxonomy.
- **Translation is not interpretation.** You cannot render the old lexicon word for word, but you can
  learn it, as a bilingual does. This is his reply to critics like Davidson.
- **Trap: it narrows what fails to translate and does not restore convergence on truth.** Kuhn went on
  denying that later theories are nearer the truth.

*Lessons:* [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Partial denotation

**A term can fail to pick out one quantity and instead partly refer to two.** Hartry Field, "Theory Change
and the Indeterminacy of Reference" (1973): Newton's "mass" determinately denoted neither relativistic
mass nor proper mass, and partially denoted both. One of three replies to
[semantic incommensurability](#semantic-incommensurability).

*Lessons:* [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Five values of theory choice

**Accuracy, consistency, scope, simplicity and fruitfulness: standards every scientist shares and nobody
can rank mechanically.** Kuhn, "Objectivity, Value Judgment, and Theory Choice", in *The Essential Tension*
(1977).

| Value | What it asks |
|---|---|
| Accuracy | Agreement with experience, which can split area by area |
| Consistency | Internal, and with other accepted theories |
| Scope | Consequences beyond what the theory was built to explain |
| Simplicity | Depends on what you count (computing a position, or explaining gross features) |
| Fruitfulness | Whether it leads on to new results, often unknowable at the time |

- **Each is imprecise, they conflict, and nothing assigns their weights,** which yields
  [choice without an algorithm](#choice-without-an-algorithm).
- **Worked in 2.4:** Copernicus against Ptolemy as of 1543, and wave against emission in 1818. On Kuhn's
  scoring the values fix what the two sides must argue about without settling it.
- **Do they track truth or convenience?** Kuhn calls them constitutive of science, many realists treat
  them as evidential ([5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)), and van Fraassen
  disputes that ([5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)). In
  [3.4](lessons/03-04-values-and-inductive-risk.md) they are the examples of epistemic values.
- **Relatives.** Three of the five match the virtues in
  [`philosophical-method` 2.1](../philosophical-method/lessons/02-01-inference-to-the-best-explanation.md);
  its "fit with background" is external consistency, and accuracy sits in its P2. Explanatory coherence
  ([`epistemology` 2.3](../epistemology/lessons/02-03-coherentism.md)) is a natural sixth candidate.
- **Trap: do not read a value's verdict from who won.**

*Lessons:* [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md), [3.4](lessons/03-04-values-and-inductive-risk.md)

### Choice without an algorithm

**The values influence a choice without determining it, so no procedure returns one answer for everyone.**
"No neutral algorithm" is Kuhn's phrase (1969 Postscript). The slack, he says, permits "rational men to
disagree" (1977), and it spreads across a community the risk of backing something new. The claim that such
a choice is rational rests on a further premise: a choice is rational if it rests on reasons drawn from
public, shared standards and stays open to argument, whether or not an algorithm produced it.

**Salmon's bridge** ("Rationality and Objectivity in Science, or Tom Kuhn Meets Tom Bayes", 1990). With
$T_1, T_2$ rival theories, $E$ the evidence and $P$ a credence,

$$\frac{P(T_1\mid E)}{P(T_2\mid E)} = \frac{P(T_1)\,P(E\mid T_1)}{P(T_2)\,P(E\mid T_2)}.$$

Fit lives in the likelihoods; plausibility judgments (simplicity, symmetry, analogy) set the priors. It
says where disagreement lives and is not offered as an algorithm. Priors can wash out only given shared
likelihoods and a theory already in the probability space ([new theories](#problem-of-new-theories)).

- **Objection at that premise.** A standard that licenses opposite verdicts on the same evidence is no
  standard, and since Kuhn lets biography and personality shape the weights, what decides is not a reason.
  **Reply:** demanding an algorithm would condemn every judgment-based practice, and weights are trained
  and argued over. The defender concedes that individual rationality underdetermines the choice. The
  critic concedes that nobody has produced the algorithm.
- **A sharper form:** Samir Okasha (2011) treats the five values as voters ranking theories and imports
  [Arrow's theorem](../grad-game-theory/lessons/05-01-social-choice-impossibility.md).
- **Trap: "no algorithm" is not "no reasons".** The Postscript says denying an algorithm leaves good
  reasons standing.

*Lessons:* [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Charge of relativism

**The accusation that if standards, meanings and observation all shift with the paradigm, nothing is left
to adjudicate.** Dudley Shapere's 1964 review stressed the relativist implications. Scheffler (1967)
defended objectivity against a picture on which paradigm change escapes deliberation. Lakatos (1970)
called Kuhn's account "mob psychology".

- **Kuhn's replies.** He narrowed the [semantic thesis](#local-and-taxonomic-incommensurability). He said
  what theory choice runs on, the [five values](#five-values-of-theory-choice), and that judgment can be
  discussed and defended as matters of taste cannot. He rejected the extreme form of the charge: later
  theories are better puzzle-solvers, so science progresses.
- **Trap: Kuhn did not say science is irrational.** His reply is that the charge reads "no rule" as "no
  reason". Whether reasons without a rule are enough is the live question.
- **Trap: progress is not nearness to truth.** He denied that better puzzle-solving makes a theory nearer
  the truth.
- **A different target:** the self-refutation of global relativism is
  [`ancient-medieval-philosophy` 1.3](../ancient-medieval-philosophy/lessons/01-03-the-sophists-and-socrates.md).

*Lessons:* [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Methodology of research programmes

**Judge a line of theories, not a single theory, by whether its repairs predict new facts that arrive.**
Imre Lakatos, "Falsification and the Methodology of Scientific Research Programmes" (in Lakatos and
Musgrave, eds., *Criticism and the Growth of Knowledge*, 1970). The unit of appraisal is a series
$T_1, T_2, \dots$ sharing a [hard core](#hard-core), which is his response to the point of
[2.2](lessons/02-02-duhem-quine-and-underdetermination.md) that a failed prediction refutes only the
conjunction of core and auxiliaries.

- **The question changes.** Not "was this theory refuted?" but "which programme is going somewhere?"
  One programme supersedes another by a comparison of records (skeleton under Arguments).
- **No "instant rationality".** A programme may take decades to get off the ground, and a stalled one
  can recover.
- **Where the criteria stop: dark matter and MOND** (2.5). David Merritt (2020) and Patrick Duerr and
  William Wolf (2023) run the same test and disagree. The criteria supply no exchange rate between
  progress in two domains, no deadline after which null searches count, and no verdict on a programme
  this young except long hindsight.
- **Applied elsewhere:** Marxism, in [`social-theory` 2.3](../social-theory/lessons/02-03-capitalism-and-the-test-of-history.md).
- **Trap: "programme" is a term of art** for a series of theories sharing a core, not a plan of work.

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Hard core

**The claims every theory in a research programme shares and its workers decide not to touch.** Lakatos
(1970). The fixity is a decision. Example: Prout's claim (1815) that atomic weights are whole-number
multiples of hydrogen's, the elements being built from it.

- **Trap: protecting it is not what makes a programme ad hoc.** The
  [negative heuristic](#positive-and-negative-heuristic) requires that protection.
- **Trap: the grades apply to repairs inside a programme.** A move aimed at the core leaves the programme:
  it starts a rival or abandons this one.

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Protective belt

**The [auxiliary hypotheses](#auxiliary-hypotheses) around a hard core, which take the blame when a
prediction fails and get rebuilt.** Lakatos (1970). Each repair keeps the core and changes the belt, under
the [positive heuristic](#positive-and-negative-heuristic).

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Positive and negative heuristic

**Negative: do not aim refutations at the hard core. Positive: a partly articulated plan for rebuilding
the belt.** Lakatos (1970). The core is off limits by decision, and a good programme knows its next moves
before the anomalies arrive.

- **Contested use:** Duerr and Wolf (2023) answer Merritt that MOND's relativistic extensions were
  assembled by trial and error, with no real positive heuristic.
- **Trap: the heuristics are decisions, not evidence.**

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Progressive problem shift

**A repair that predicts some new fact, and some of what it predicts arrives.** Lakatos (1970). A shift
$T_n \to T_{n+1}$ is:

- **theoretically progressive** if $T_{n+1}$ predicts some [novel fact](#novel-prediction);
- **empirically progressive** if some of that excess content is corroborated;
- **progressive** if both hold, and [degenerating](#degenerating-problem-shift) otherwise.

**Novelty** began as temporal: a fact not yet known and unexpected on rivals. Elie Zahar (1973), then
Lakatos and Zahar (1975), relaxed it: a known fact counts if the programme's core was not built to fit it.

**Lakatos's own case: Prout.** Frederick Soddy's isotopes (1913) gave the repair content. Aston's mass
spectrograph split chlorine in 1920 into masses near 35 and 37 in about a 3:1 ratio, and
$(3 \times 35 + 1 \times 37)/4 = 35.5$, the measured atomic weight. (What survives is Prout's idea, not his
formula.)

- **Trap: a repair that fits more data is not thereby progressive.** Lakatos asks for a corroborated
  prediction the repair was not built from. Accommodation is not novelty.

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Degenerating problem shift

**A repair that fails either condition: it predicts nothing new, or nothing it predicts arrives.** Lakatos
(1970); the two conditions are under [progressive problem shift](#progressive-problem-shift). A programme
whose repairs only absorb old failures is the central case.

- **Prout, 1860.** After Jean Stas called the law contradicted by experiment, the obvious repair, that the
  chlorine must still be impure, absorbs the anomaly and predicts nothing anyone can check.
- **Demarcation.** Lakatos's test turns on programmes, so a programme can be scientific in one decade and
  not the next ([2.6](lessons/02-06-demarcation-after-popper.md)).
- **Trap: "degenerating" does not mean "abandon it".** It grades a record, a grade is indexed to a date,
  and a degenerating programme can recover. Lakatos allowed that one may stay with it, honestly labelled
  ([appraisal and advice](#appraisal-and-advice)).
- **Trap: a bold repair whose prediction fails** is theoretically progressive and still degenerating on
  the two-condition definition.

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md), [2.6](lessons/02-06-demarcation-after-popper.md)

### Appraisal and advice

**Lakatos's separation of grading a programme's record from telling scientists what to do.** The best
reply to [Feyerabend's dilemma](#methodological-anarchism): methodology grades, and a scientist may
rationally stay with a degenerating programme if she says honestly that it is one. In "History of Science
and Its Rational Reconstructions" (1971) editors may refuse to publish it.

- **What it concedes** (2.5): the grades are retrospective, and institutional refusal brings the deadline
  back.
- **History of the exchange.** Lakatos died in 1974, and his surviving letters to Feyerabend contain no
  counterargument. Musgrave (1976) tried one on his behalf.

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Methodological anarchism

**Feyerabend's challenge: for any rule of method, great science has broken it and advanced by breaking it,
so a rule that never inhibits progress must be empty.** Paul Feyerabend, *Against Method* (1975; third
edition 1993), dedicated to Lakatos, "Friend and Fellow-Anarchist". The only rule left is "anything goes":
a reductio on the demand for a universal method (skeleton under Arguments).

- **The deadline dilemma against Lakatos** (1975, ch. 16). Either the standards carry a deadline or they
  do not. With one, they condemn programmes that would have recovered, the fault Lakatos found in Popper.
  Without one, they forbid nothing, and "degenerating" orders no one to do anything: anarchism in disguise.
  Lakatos's best reply is [appraisal and advice](#appraisal-and-advice).
- **What Feyerabend concedes** (2.5): his first premise needs the rationalist's own list of great science,
  so it refutes a demand and supplies no method. His Galileo is itself disputed (Machamer 1973; Chalmers
  1986).
- **Trap: "anything goes" is not his rule of method.** It is what remains if you insist on one rule for
  every case. Chapter 1 asserts it. A preface dated 1987 says the phrase is no principle he holds, only a
  rationalist's "terrified exclamation" on looking closely at history. Whether a positive view lies
  underneath is disputed.

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Counterinduction

**Developing hypotheses that contradict well-established theories or results.** Feyerabend, *Against
Method* (1975). He holds it is needed because a [natural interpretation](#natural-interpretations) can be
exposed only from outside, by provisionally keeping a theory the facts contradict.

- **Trap: not Salmon's rule.** The rule of inferring the reverse of the observed frequency, set against induction
  in [`epistemology` 4.3](../epistemology/lessons/04-03-answering-hume.md), shares the word and nothing else.

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Natural interpretations

**Ideas so fused with seeing that it takes effort to notice they are there.** Feyerabend, *Against Method*
(1975). In the [tower argument](#tower-argument) the report "the stone falls straight down" carries the
idea that all motion is "operative", meaning it has perceptible effects.

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Tower argument

**The Aristotelians' argument that a stone dropped from a tower lands at its foot, so the earth stands
still.** If the earth turned, the foot would move away during the fall and the stone would land far from
it. Galileo, in the *Dialogue* of 1632, accepted what is seen and disputed what it shows, replacing
"operative" motion with the relativity of motion (motion shared by stone, tower and observer shows
nothing) and a principle of circular inertia, which keeps the stone with the tower.

- **Feyerabend's use.** He stresses that no new observation was involved, that neither principle had
  independent support at the time, and that Galileo presented them as things his readers already knew
  ("anamnesis"). His moral is [counterinduction](#counterinduction). His reading is disputed (Machamer 1973;
  Chalmers 1986).
- **Trap: the argument is the Aristotelians',** Galileo's is the reply, and Feyerabend's is the diagnosis.
- **The events** are [`church-history` 7.3](../church-history/lessons/07-03-the-galileo-affair.md).

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Pseudoscience, bad science and non-science

**Three ways of being "not science": aiming elsewhere, trying and failing, and posing as the reliable
account.** Sven Ove Hansson (1996, 2013).

| Category | Test | Examples in 2.6 |
|---|---|---|
| Non-science | Aims elsewhere; no defect implied | Mathematics, metaphysics, religion |
| Bad science | A real attempt that fails | An artefact, a sloppy study |
| Pseudoscience | Unscientific, and part of a doctrine its leading advocates present as the best available knowledge of its subject | Homeopathy, Velikovsky |

- **The doctrine clause** separates the biochemist with one bad experiment from the one who spends a career
  producing sloppy experiments for a single unorthodox thesis.
- **Trap: "pseudoscience" does not mean false or unorthodox.** Marshall and Warren were unorthodox and
  right, and the *McLean* court said an unaccepted theory of comets seeding life on Earth met its marks.
- **Trap: Hansson's 1996 and 2013 account is a definition, not a [cluster account](#cluster-accounts-of-science).**
  The multi-item list is his of 1983.

*Lessons:* [2.6](lessons/02-06-demarcation-after-popper.md)

### McLean v. Arkansas

**The 1982 federal ruling that struck down Arkansas's balanced-treatment Act and wrote five marks of science
into its opinion.** *McLean v. Arkansas Board of Education*, 529 F. Supp. 1255, 1267 (E.D. Ark. 1982), Judge
William R. Overton; heard in December 1981, decided 5 January 1982. Decided under the Establishment Clause.
The five "essential characteristics":

1. guided by natural law;
2. explanatory by reference to natural law;
3. testable against the empirical world;
4. conclusions tentative, not necessarily the final word;
5. falsifiable.

- **Reading it.** "Essential" makes each mark necessary, so failing one is enough. "(Ruse and other science
  witnesses)" says it is a finding drawn from testimony. The list mixes three kinds of thing: marks 1 and 2
  concern what an explanation appeals to, marks 3 and 5 its logical relation to evidence, and mark 4 how
  conclusions are held.
- **Laudan** ("Science at the Bar: Causes for Concern", 1982). Marks 3 to 5 are too weak: creationism's
  specific claims are testable, have been tested and are false. Dogmatism describes advocates, not doctrines.
  Marks 1 and 2 are too strong: Newton's gravity and plate tectonics would fail.
- **Ruse** ("Pro Judice", 1982). The case required a verdict of non-science, because bad science is not
  unconstitutional; and a geologist who lacks a law still seeks one, whereas a miracle is outside law by its
  nature.
- **Trap: the court did not rule that religion and science conflict.** Bishops of several churches were
  among the plaintiffs, and the opinion says evolution does not presuppose the absence of a creator.
- **Trap: *McLean* did not adopt Popper's criterion.** Falsifiability is one mark of five.
- **Trap: Laudan was attacking the reasoning, not the result.** See
  [the demise of the demarcation problem](#demise-of-the-demarcation-problem).

*Lessons:* [2.6](lessons/02-06-demarcation-after-popper.md)

### Kitzmiller v. Dover

**The 2005 federal ruling that intelligent design is not science, on three grounds of its own.** *Kitzmiller
v. Dover* cited *McLean* and held that ID invokes supernatural causation, that its irreducible-complexity
argument repeats a "contrived dualism", and that its attacks on evolution have been refuted. The court added
that ID's arguments may be true, and took no position on that.

- **What a ruling does.** It binds the parties and fixes what "science" means for that legal purpose.
- **Trap: it did not apply Overton's five marks as a test.**
- **ID itself** belongs to [`apologetics-foundations` 4.2](../apologetics-foundations/lessons/04-02-evolution-design-and-the-human-person.md).

*Lessons:* [2.6](lessons/02-06-demarcation-after-popper.md)

### Daubert factors

**The US Supreme Court's non-exclusive factors for admitting scientific expert testimony.** *Daubert v.
Merrell Dow Pharmaceuticals* (1993) quotes Popper, then lists testing, peer review, error rates and general
acceptance, and refuses a definitive checklist.

- **Why 2.6 cites it:** the law itself later moved to a multi-factor practice.

*Lessons:* [2.6](lessons/02-06-demarcation-after-popper.md)

### Demise of the demarcation problem

**Laudan's argument that no line around science is worth drawing: ask only how well a claim is supported.**
Larry Laudan, "The Demise of the Demarcation Problem" (1983). A criterion must give necessary and sufficient
conditions and be a reason for belief; every candidate since Aristotle has failed one test or the other; what
gets called science varies widely in support ("epistemic heterogeneity"); and what we need to know about a
claim can be asked without mentioning science. So "pseudoscience" does only emotive work (skeleton under
Arguments).

- **Pressure point: the first premise.** Nobody can define "game" either, and we sort games without trouble.
  The reply keeps the premise's second half: however fuzzy the category, it must be a reason for belief.
- **What each side concedes** (2.6). The cluster theorist: no bright line, and the label never replaces
  checking the evidence. Laudan's side: an honest error and a shielded doctrine, equally unsupported, get the
  same answer.
- **Trap: Laudan was no friend of creationism and no relativist.** He agreed with the *McLean* result and
  thought creationism's claims false. He wanted them rejected as unsupported rather than as unscientific.

*Lessons:* [2.6](lessons/02-06-demarcation-after-popper.md)

### Cluster accounts of science

**Give up the definition and keep the distinction: science is a family of activities sharing overlapping
features.** John Dupré, *The Disorder of Things* (1993): a Wittgensteinian family, every science having some
of a set of features and none needing all. Massimo Pigliucci (2013) denies Laudan's demand for necessary and
sufficient conditions: concepts this complex are not definable that way, and they sort cases anyway.

- **A precursor.** Paul Thagard on astrology (1978) gives a two-part test: a pseudoscience has failed to
  progress, and its practitioners make little effort to fix its problems, compare it with rivals, or weigh
  disconfirmations evenly. His multi-criterion view is later (1988).
- **What it returns is a profile.** On string theory (2.6): high on mathematical integration and open
  self-criticism, low on empirical contact, with no principled weighting to say how much rigour offsets
  missing data.
- **What the features are for,** cluster theorists answer: they track whether a community will correct
  itself ([immunizing strategies](#immunizing-strategies)).

*Lessons:* [2.6](lessons/02-06-demarcation-after-popper.md)

### Immunizing strategies

**Moves that shield a doctrine from criticism and counterevidence.** Maarten Boudry and Johan Braeckman
(2011). This is the conduct at issue when a shielded doctrine is told apart from an honest error, and the
recent writers' word for what Popper called a [conventionalist stratagem](#conventionalist-stratagem).

- **Trap: check the history before making the charge.** Ask whether the doctrine held the claim before the
  trouble arose ([3.2](lessons/03-02-the-likelihood-principle.md)).

*Lessons:* [2.6](lessons/02-06-demarcation-after-popper.md), [3.2](lessons/03-02-the-likelihood-principle.md)

### Methodological naturalism

**The working rule, inside the natural sciences, that natural phenomena are to be explained by natural
causes, whatever one believes about anything else.** The narrow sense of
[`apologetics-foundations` 3.1](../apologetics-foundations/lessons/03-01-naturalism-at-its-best.md). Boudry,
Blancke and Braeckman (2010) separate two grounds for it.

| Reading | Ground | What follows for a supernatural cause |
|---|---|---|
| Intrinsic | Science by its nature cannot deal with the supernatural | It can rule such a cause neither in nor out, and its silence is not evidence |
| Provisory (which they defend) | An evidence-based and revocable commitment | A supernatural claim predicting an observable difference can be tested and disconfirmed |

- **On either reading,** a cause said to make no observable difference is beyond experiment, as
  [`apologetics-foundations` 4.2](../apologetics-foundations/lessons/04-02-evolution-design-and-the-human-person.md)
  says of primary causation.
- **Trap: neither reading says whether there is such a cause.**
- **Trap: the provisory reading is not metaphysical naturalism.** It is a working rule inside the sciences
  ([3.2](lessons/03-02-the-likelihood-principle.md)).

*Lessons:* [2.6](lessons/02-06-demarcation-after-popper.md), [3.2](lessons/03-02-the-likelihood-principle.md)

**Module 3: Statistical evidence and the values of science**

### Frequency and degree of belief

**The two main readings of probability: how often something happens in a long run of trials, or how strongly to expect it.**

On the frequency view (von Mises and others) a probability is a relative frequency in a long series of like events, so $P(H_0)$, a probability for the hypothesis $H_0$, has no meaning: a hypothesis is true or false once and for all and there is no series to count. On the degree-of-belief view ([epistemology 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md)) it has one. The root of the Module 3 dispute.

Notation for the module: $P(x;\theta)$, with a semicolon, is the sampling probability of data $x$ under a fixed parameter value $\theta$. $P(x\mid\theta)$ and the credence $P(\cdot)$ appear only in Bayesian passages.

- **A coin's one-half reads either way.** "The probability that this hypothesis is true" reads only the second way.
- **Both Fisher and Neyman-Pearson start from probabilities of data under a fixed hypothesis,** so both must say which series of data they mean ([reference-class problem](#reference-class-problem)).
- Probability in physics belongs to [philosophy-of-physics](../philosophy-of-physics/syllabus.md).

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md)

### Reference-class problem

**One event belongs to many series with different frequencies, and the frequency definition does not say which series fixes its probability.**

The standing debt of the frequency view (Reichenbach 1949); Hájek (2007) argues that every interpretation owes it.

- **It appears inside a single test:** in [Cox's two instruments](#coxs-two-instruments), do the relevant repetitions include every coin-and-reading run, or only the runs on the instrument used? The definition of an error rate does not say.

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md)

### Significance test

**Fisher's test of one null hypothesis: how surprising would these data be if it held? No alternative is named.**

Given a null $H_0$ and a statistic $T$ whose distribution under $H_0$ is known, compute the [p-value](#p-value). A small $p$ is graded evidence against $H_0$; a large $p$ does not establish it. With no alternative, power has no place. R. A. Fisher, *Statistical Methods for Research Workers* (1925); "The Arrangement of Field Experiments" (1926); "Statistical Methods and Scientific Induction" (1955); *Statistical Methods and Scientific Inference* (1956).

The test ends in a disjunction, not in a probability of the hypothesis (1926, p. 504):

> "Either there is something in the treatment, or a coincidence has occurred such as does not occur more than once in twenty trials."

- **The 5 percent line moves across his writings.** 1925, p. 47: "it is convenient to take this point as a limit". 1926, p. 504: "set a low standard of significance at the 5 per cent. point, and ignore entirely all results which fail to reach this level". 1956: no working scientist keeps one fixed level for every case. The Fisher who only ever graded evidence is too tidy.
- **One significant result does not make a fact.** In 1926 a fact is established only if a properly designed experiment rarely fails to give that level of significance.
- **His charge against Neyman (1955):** the significance test had been recast as an acceptance procedure, the inspection of a supplier's consignments, where repeated sampling and two kinds of error make sense. A scientist has one body of data and reaches provisional conclusions.
- **Fisher refused the word "accept" for a significance test.** Compare [Neyman-Pearson tests](#neyman-pearson-tests).

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md)

### p-value

**The probability, if the null hypothesis were true, of a statistic at least as extreme as the one observed.**

$$p = P(T \ge t;\, H_0)$$

$T$ is the test statistic and $t$ its observed value. The correct reading belongs to [prob-stat-refresher 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) and [econometrics 2.3](../econometrics/lessons/02-03-hypothesis-tests-confidence-intervals.md), which write $P(\cdot\mid H_0)$; that bar is notation, since to a frequentist $H_0$ is not an event. In 3.1 Example 1, $z = 2$ gives $p = 1 - \Phi(2) = 0.0228$, with $\Phi$ the standard normal CDF.

Lesson 3.2 adds: a p-value adds up the probability of outcomes at least as extreme as yours, most of which never happened. It is defined over the sample space, and the plan that produced the data decides which outcomes count ([stopping rule](#stopping-rule)).

- **Not the probability that $H_0$ is true.** On the frequency reading $H_0$ has no probability at all. A Bayesian can compute one, and it takes a prior.
- **Not the error rate of this rejection.** The error rate belongs to the rule: $\alpha$ is set before the data and stays put whatever $p$ comes out.

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md), [3.2](lessons/03-02-the-likelihood-principle.md)

### Neyman-Pearson tests

**A decision rule between two hypotheses: fix how often you will tolerate a false alarm, then miss as little as that allows.**

Jerzy Neyman and Egon Pearson, "On the Problem of the Most Efficient Tests of Statistical Hypotheses" (1933). Two hypotheses, and a rejection region $R$ fixed before the data:

$$\alpha = P(X \in R;\, H_0), \qquad \beta = P(X \notin R;\, H_1), \qquad \text{power} = 1 - \beta.$$

Fix $\alpha$, then choose $R$ to maximize power.

**Neyman-Pearson lemma** (named, not proved): for two point hypotheses the best $R$ rejects for large values of $P(x;H_1)/P(x;H_0)$.

**The decision reading.** The output is a decision: reject, or accept, meaning act as if. $\alpha$ and $\beta$ are the two error rates, and $\alpha$ was to be set by weighing the two errors. [Rudner's argument](#argument-from-inductive-risk) asks whose weighing that is.

**Neyman's reply to Fisher** ("Note on an Article by Sir Ronald Fisher", 1956): without alternatives and both error rates no purely probabilistic theory of tests is possible, and power is what decides whether a failure to reject can count as confirmation.

- **"Accept $H_0$" does not mean believing it.** It means acting as if it were true, at a known risk $\beta$.
- **The standard picture is too tidy here too.** Neyman is not the 5 percent pedant: his $\alpha$ was to be chosen by weighing the errors.
- **Worked (3.1 Example 1):** $\mu_0 = 40$, $\mu_1 = 44$, standard error 1.5, one-sided $\alpha = 0.05$ give cutoff $c = 40 + 1.645(1.5) = 42.4675$, power $\Phi\big((44-c)/1.5\big) = 0.847$, $\beta = 0.153$.

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md), [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md), [3.4](lessons/03-04-values-and-inductive-risk.md)

### Inductive behaviour

**Neyman's view that a test gives a rule of conduct that errs rarely in the long run, not knowledge about the single hypothesis tested.**

The 1933 paper sets aside knowing whether any single hypothesis is true or false and seeks rules of conduct that keep one from being wrong too often in the long run. "Inductive behaviour" is Neyman's later name for this. Pearson, replying to Fisher in 1955, left the phrase to Neyman.

**The pressure point** is the bridge from a property of a repeated procedure to the case in hand.

- **Fisher's objection:** a rule's long-run record says nothing about this result unless this result is a fair member of that run, and science has no factory of repeats.
- **Neyman's reply:** probability supplies nothing beyond the record, so the honest claim concerns the policy, as with any instrument trusted for its reliability.
- **What each concedes:** the reply, that the theory is silent on whether this hypothesis is true; the objection, that "evidence against $H_0$" with no rival leaves open what the evidence favours.
- **Attribution:** do not assign the phrase to the 1933 paper or to Pearson.

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md)

### Confidence level

**The long-run proportion of intervals from a given recipe that cover the fixed true parameter.**

Neyman (1937). A 95 percent interval comes from a recipe that covers the fixed parameter in 95 percent of repetitions. The meaning belongs to [prob-stat-refresher 4.2](../prob-stat-refresher/lessons/04-02-confidence-intervals.md); this course uses it.

- **Fisher:** substituting the observed numbers into that probability statement is plain logic (his fiducial argument).
- **Neyman:** a probability statement about random variables generally fails once they are replaced by their values. On his reading the 95 belongs to the recipe and not to the interval in hand.
- **A credible interval is a different object:** a posterior probability with the data held fixed, and it can cover poorly at a fixed truth ([statistical-learning 2.5](../statistical-learning/lessons/02-05-regularization-as-a-bayesian-prior.md), Example 2: 2.8 percent).

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md)

### Textbook hybrid

**The blend taught in most courses: Fisher's single null and p-value joined to Neyman-Pearson's yes-or-no decision at a conventional 5 percent.**

Gerd Gigerenzer ("Mindless Statistics", 2004) calls the routine the "null ritual". [prob-stat-refresher 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) is this hybrid: "you disbelieve $H_0$" is Fisher, while its pre-set threshold and error table are Neyman-Pearson. [econometrics 2.3](../econometrics/lessons/02-03-hypothesis-tests-confidence-intervals.md) leans to Neyman.

The algebra is seamless where $R$ is the upper tail of the statistic: $p \le \alpha$ exactly when the statistic lands in $R$. What the hybrid adds is a reading: $p$ as this rejection's error rate, and the verdict at $\alpha$ as a strength of evidence.

- **Gigerenzer's charge is that both parties would have refused it.** Fisher's 1926 line ("ignore entirely", see [significance test](#significance-test)) complicates that for him.
- **Where the equivalence fails:** $p$ orders outcomes by $T$ under $H_0$ alone, while the most powerful rule orders them by likelihood ratio, which needs $H_1$. They can differ ([3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md), Flashback).

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md)

### Cox's two instruments

**A coin chooses a precise or a crude instrument and you know which; error rates averaged over both can part from those of the instrument actually used.**

D. R. Cox, "Some Problems Connected with Statistical Inference" (1958). The numbers are 3.1's, not Cox's: instrument A reads $\mu$ plus normal noise with $\sigma_A = 1$, B with $\sigma_B = 10$; one reading $x$; $H_0: \mu = 0$ against $H_1: \mu = 10$.

| Quantity | Value |
|---|---|
| Most powerful test of overall level 0.05 | reject if $x > 5.08$ on A or $x > 12.82$ on B |
| Its levels conditional on the instrument | about $2 \times 10^{-7}$ on A, $0.100$ on B |
| Its power | 0.695 (0.630 for a plain 5 percent test on each) |
| $x = 13$ on B, unconditional $p$ | $\tfrac12(0 + 0.0968) = 0.0484$ |
| $x = 13$ on B, $p$ on the instrument used | $1 - \Phi(1.3) = 0.0968$ |

- **Cox:** the average over the instrument not used is irrelevant to interpreting this reading. A Fisherian conditions too.
- **Defenders of the unconditional rule:** it suits cases where the long-run record is the point, such as acceptance sampling; nothing in the theory forbids conditioning; and against $\mu = 10$ a reading of 3 on A (conditional $p = 0.0013$) is $e^{20}$ times likelier under $H_0$, so retaining it is defensible.
- **Lehmann** (*JASA*, 1993): no universal answer exists and context must decide.
- **Forward:** Cox's intuition becomes the conditionality premise of [Birnbaum's argument](#birnbaums-argument).

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md)

### Royall's three questions

**What do I believe, what should I do, and what does this observation say about one hypothesis versus another?**

Richard Royall, *Statistical Evidence* (1997). The [law of likelihood](#law-of-likelihood) answers only the third; belief needs priors ([odds form](../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md)) and action needs losses.

- **A likelihood ratio near 4 does not make one hypothesis four times as likely as the other.** That is the first question, and it needs a prior.

*Lessons:* [3.2](lessons/03-02-the-likelihood-principle.md)

### Likelihood principle

**Outcomes whose likelihood functions match up to a constant carry the same evidence about the parameter.**

For two experiments on the same parameter $\theta$, with outcomes $x$ and $y$ and some constant $c > 0$:

$$P(x;\theta) = c\,P(y;\theta) \ \text{ for all } \theta \quad\Longrightarrow\quad x \text{ and } y \text{ carry the same evidence about } \theta.$$

The law of likelihood says how to read a likelihood function; the principle says it is all there is to read.

**What it bears on.** Anything defined over the sample space, such as a tail probability or an error rate, can differ between two such outcomes. Anything computed from the likelihood function alone cannot. Lesson 3.2, section 3, says which reports are which, and each camp counts that as the point. Whether a Bayesian analysis keeps to it depends on how the prior is set: Jeffreys's rule builds the prior from the sampling model and so reimports the design (3.2 Example 1).

**The contested step** is identifying evidence with the likelihood function, whether reached through [Birnbaum](#birnbaums-argument) or postulated.

- **Strongest objection** (Mayo, and Birnbaum's own later view): an account that cannot register optional stopping cannot say when a procedure would have produced an alarm anyway, and error probabilities are what make data a test at all.
- **Strongest reply:** error rates describe a procedure across data nobody saw, and the $1/k$ bound ([optional stopping](#optional-stopping)) shows the evidence measure itself is not inflated by peeking.
- **What each concedes:** the likelihoodist, that the guarantee covers only hypotheses fixed in advance; the frequentist, that identical data can earn different reports depending on a plan that may never have been acted on.

Traps:

- **Not the [law of likelihood](#law-of-likelihood).** [philosophy-of-religion 3.1](../philosophy-of-religion/lessons/03-01-from-design-to-fine-tuning.md), following Sober, calls that law "the likelihood principle". In this course the name belongs to this stronger thesis.
- **It does not say how data were gathered never matters.** The plan matters whenever it changes the likelihood: a net that cannot hold small fish, or a stopping rule that depends on $\theta$ beyond the data.
- **Used in 3.3** to show why calling [pre-registration](#pre-registration) bookkeeping is a position and not a platitude.

*Lessons:* [3.2](lessons/03-02-the-likelihood-principle.md), [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md), [3.4](lessons/03-04-values-and-inductive-risk.md)

### Stopping rule

**The rule fixing when data collection ends; it sets the sample space.**

A coin has $P(\text{heads}) = \theta$. Design A flips a fixed $n$ times, and the number of heads $H$ is binomial:

$$P(H = h;\theta) = \binom{n}{h}\theta^h(1-\theta)^{n-h}.$$

Design B flips until the $r$-th tail, and the number of flips has the [waiting-time negative binomial](#waiting-time-negative-binomial) law. For $h$ heads and $t$ tails, both likelihoods are proportional to $\theta^h(1-\theta)^t$ (standard reference: Lindley and Phillips, 1976), while a p-value sums over two different sample spaces.

Worked (3.2 Example 1): 8 heads, 2 tails, the tenth flip a tail; test $\theta = \tfrac12$, one-sided toward heads.

| | Design A: 10 flips | Design B: until the second tail |
|---|---|---|
| Likelihood | $45\,\theta^8(1-\theta)^2$ | $9\,\theta^8(1-\theta)^2$ |
| "More extreme" | $H \ge 8$ | a longer wait, $N \ge 10$ |
| One-sided $p$ | $\tfrac{7}{128} \approx 0.0547$ | $\tfrac{5}{256} \approx 0.0195$ |

The likelihoods differ by the constant 5 at every $\theta$, so both give $\hat\theta = 0.8$ and $\mathrm{LR}(0.8:0.5) = 6.87$.

- **To say what a school does with a stopping rule, ask what its report is defined over.** The card does not tabulate the verdicts.
- **Neither analyst need be wrong.** Each computed a correct probability about her own sample space. Whether that probability is the evidence is the dispute.
- **A stopping rule that depends on $\theta$ beyond the data does change the likelihood.** So does a [selection effect](#observation-selection-effects).

*Lessons:* [3.2](lessons/03-02-the-likelihood-principle.md)

### Waiting-time negative binomial

**The law of the number of flips until the $r$-th tail.**

$$P(N = n;\theta) = \binom{n-1}{r-1}\theta^{n-r}(1-\theta)^{r}, \qquad n = r, r+1, \dots$$

$\theta$ is the probability of heads. The last flip is the $r$-th tail, and the other $r-1$ tails fall anywhere in the first $n-1$ flips. Proportional to the binomial likelihood when the counts agree.

- **The tail event:** $N \ge n$ is "at most $r-1$ tails in the first $n-1$ flips". The flip that stops the run is not among them.
- The library otherwise meets this family only as a count model.

*Lessons:* [3.2](lessons/03-02-the-likelihood-principle.md)

### Birnbaum's argument

**Two principles most frequentists accept seem to commit them to the one they reject.**

Allan Birnbaum (1962); stated, not proved, in this course.

- **Sufficiency:** outcomes with the same value of a sufficient statistic carry the same evidence.
- **Conditionality** (Cox, 1958): if a random device chose which experiment to run, the evidence is that of the experiment actually run.
- **Claim:** together they entail the [likelihood principle](#likelihood-principle).

Status:

- **Mayo** (*Statistical Science*, 2014) argues the derivation fails: data can violate the likelihood principle while honouring both premises.
- **Dawid** (2014) and **Gandenberger** (2015) defend versions of it.
- **Birnbaum himself came to reject the principle** (1969), holding that likelihood could not control the chance of erroneous interpretation.

*Lessons:* [3.2](lessons/03-02-the-likelihood-principle.md)

### Optional stopping

**Stopping data collection at a data-dependent moment, such as the first look at which a test comes out "significant".**

A two-sided z-test on normal data with known variance, nominal level 0.05, $k$ equally spaced looks, stopping at the first significant one (the setting of Armitage, McPherson and Rowe, 1969; the values are 3.2's):

| looks $k$ | 1 | 2 | 5 | 10 | 20 | 100 | $\to\infty$ |
|---|---|---|---|---|---|---|---|
| actual $\alpha$ | 0.050 | 0.083 | 0.142 | 0.193 | 0.248 | 0.374 | 1 |

The nominal level describes one look. With unlimited looks the procedure rejects a true null with certainty (the law of the iterated logarithm).

**The likelihood-ratio bound.** With $\mathrm{LR}_n = P(x_1,\dots,x_n;H_1)/P(x_1,\dots,x_n;H_2)$: if $H_2$ is true, $\mathrm{LR}_n$ is a martingale, and (Royall 1997, crediting Robbins 1970)

$$P\big(\mathrm{LR}_n \ge k \text{ for some } n;\ H_2\big) \le \frac1k.$$

If $H_2$ is true, the chance the data ever favour the false $H_1$ by a factor $k$ is at most $1/k$, however long you look. On a fair coin, $\mathrm{LR}(0.7:0.5)$ reaches 8 within 4,000 flips with probability 0.107 (bound 0.125); a z-test checked after every flip from 10 to 1,000 reaches 1.96 with probability 0.466.

- **The bound needs $H_1$ fixed in advance.** Maximized over $\theta$, a look with $|z| = 1.96$ already gives $\mathrm{LR} = e^{z^2/2} = 6.83$, and repeated looks eventually reach it.
- **Not Doob's [optional stopping theorem](../probability-theory/lessons/05-04-stopping-times-optional-stopping.md),** which says no quitting rule lifts a fair game's expected fortune. Here the looks are aimed at $|z|$, which is no martingale.

*Lessons:* [3.2](lessons/03-02-the-likelihood-principle.md)

### Lindley's paradox

**At fixed $z$, the Bayes factor swings toward a point null as $n$ grows, while the p-value stays put.**

Dennis Lindley (1957), following Harold Jeffreys. Under a point null against a continuous alternative, fix $z$ and let $n$ grow: the [Bayes factor](#bayes-factor) $B_{01} = P(x\mid H_0)/P(x\mid H_1) \to \infty$.

Worked (3.2 Example 2): $H_0: \theta = \tfrac12$ against $\theta$ uniform on $[0,1]$. Under $H_1$ the probability of $k$ heads in $n$ flips is $1/(n+1)$ for every $k$, so $B_{01} = (n+1)\binom{n}{k}2^{-n}$. Hold $z = (k - n/2)/\sqrt{n/4}$ at exactly 2:

| $n$ | 36 | 100 | 400 | 10,000 | 1,000,000 |
|---|---|---|---|---|---|
| share $k/n$ | 0.667 | 0.600 | 0.550 | 0.510 | 0.501 |
| $B_{01}$ | 0.674 | 1.10 | 2.17 | 10.8 | 108 |

The normal-approximation $p$ is 0.0455 in every row; the exact two-sided binomial value drifts from 0.065 to 0.046.

- **Bayesian reading:** a share of 0.501 is what $H_0$ predicts, while the uniform alternative spread its bet over every share.
- **Frequentist reading:** the prior did the work. At $n = 10^6$, $H_1$ uniform on $[0.49, 0.51]$ gives $B_{01} = 2.2$, and the point $\theta = 0.501$ gives 0.135. The frequentist reports the interval $0.501 \pm 0.00098$ and lets the size of the discrepancy speak.
- **Where they part:** which prior, and whether a point null is a serious hypothesis. The arithmetic does not decide it.
- **A Bayes factor is not a corrected p-value.** It answers a different question and inherits the prior over the alternative.

*Lessons:* [3.2](lessons/03-02-the-likelihood-principle.md)

### Observation selection effects

**How data were collected can change the likelihood of what is observed.**

Arthur Eddington's ichthyologist (*The Philosophy of Physical Science*, 1939, ch. II) catches nothing under two inches and generalizes. Told his net cannot hold smaller creatures, he answers, in effect, that what the net cannot catch is not a fish. Eddington's own moral is "selective subjectivism": physics selects its knowledge through our sensory and intellectual equipment.

Sober ("The Design Argument", 2004) turned the net into a likelihood point. If its smallest hole is 10 inches, *every fish caught exceeds 10 inches* has probability 1 on every hypothesis about the lake, so $\mathrm{LR} = 1$.

- **Selection effect against stopping rule:** a selection effect changes the likelihood itself; a [stopping rule](#stopping-rule) that depends only on the data does not.
- **Attribution:** Eddington gives no mesh size and draws no moral about sampling bias. The likelihood form is Sober's.
- **Two uses of "selection effect" in Module 3.** Here it changes the likelihood. In [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md), in Mayo's usage, it is a change in a procedure's error probabilities caused by how results were chosen for reporting, and the reported outcome's likelihood can stay the same.
- **Applications:** fine-tuning and the firing squad, [philosophy-of-religion 3.2](../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md); routine survey science, [planetary-science 6.2](../planetary-science/lessons/06-02-demographics-selection-effects.md).

*Lessons:* [3.2](lessons/03-02-the-likelihood-principle.md)

### Replication crisis

**The finding, across psychology and the medical and social sciences, that many published significant results do not recover under repetition.**

The table: Open Science Collaboration (*Science*, 2015) re-ran 100 experimental and correlational studies from three psychology journals in high-powered designs. Of the originals, 97 percent had significant results; of the replications, 36 percent did; replication effects were about half the original size. Two readers can agree on every number and disagree about what went wrong.

- **Bayesian diagnosis:** base rates and weak evidence. See [positive predictive value](#positive-predictive-value) and [the lower threshold](#lowering-the-significance-threshold).
- **Error-statistical diagnosis:** selection effects have destroyed the capacities the method is supposed to have, whatever the printed $p$. See [severe testing](#severe-testing).
- **A 36 percent replication rate is not a PPV of 0.36.** It mixes truth with replication power and fidelity, and a failure to reach significance is not a demonstration of falsity.
- **The official statements are three different things.** 2016: the ASA Board's statement of six principles, among them that $p$-values do not measure the probability that the hypothesis is true. 2019: an editorial in *The American Statistician* urging an end to "statistically significant"; not ASA policy. 2021: a Task Force convened by the ASA president over concern the editorial would be mistaken for policy; its statement (*Annals of Applied Statistics*) says properly applied $p$-values and significance tests should not be abandoned.

*Lessons:* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)

### Positive predictive value

**Of the significant results a field produces, the share that come from true hypotheses.**

John Ioannidis, "Why Most Published Research Findings Are False" (*PLoS Medicine*, 2005). With $\pi$ the fraction of tested hypotheses that are true, $R = \pi/(1-\pi)$ the pre-study odds, $\alpha$ the level and $1-\beta$ the power:

$$\mathrm{PPV} = \frac{(1-\beta)\pi}{(1-\beta)\pi + \alpha(1-\pi)} = \frac{(1-\beta)R}{R - \beta R + \alpha}.$$

In odds form ([philosophical-method 2.4](../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md)), post-study odds $= R \times (1-\beta)/\alpha$: a significant result multiplies the odds by power over level. PPV reaches one half at the base rate $\pi^* = \alpha/(\alpha + 1 - \beta)$; at $\alpha = 0.05$ that is $1/19$ for power 0.9 and $1/5$ for power 0.2.

Worked (3.3 Example 1): $\pi = 1/5$, power 0.5, $\alpha = 0.05$. Per 1,000 hypotheses, 100 true and 40 false results are significant, so $\mathrm{PPV} = 5/7 \approx 0.714$. Odds: $\tfrac14 \times 10 = 5:2$.

- **A property of a field, not of a procedure:** its mix of hypotheses and its tests.
- **Mayo's objection to the screening model** (*Statistical Inference as Severe Testing*; "High error rates in discussions of error rates", 2016): it treats a hypothesis as a random draw from an urn, which she grants for high-throughput screening and denies elsewhere. She asks which urn, and holds that a frequency of truths among hypotheses, even if known, answers a question about screening rates and not how well this hypothesis has been probed.

*Lessons:* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)

### False discovery proportion

**The share of a set of significant results that are false: $1 - \mathrm{PPV}$.**

[econometrics 2.7](../econometrics/lessons/02-07-multiple-testing-specification-search.md)'s screening answer of 0.36 is a PPV of 0.64. In 3.3 Example 1 it is $2/7 \approx 0.286$ even though every test ran at 5 percent.

- **Not FDR control,** which is a guarantee about a procedure (Benjamini-Hochberg, under the conditions econometrics 2.7 states).

*Lessons:* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)

### Ioannidis bias term

**$u$: the proportion of analyses that would not have been findings but are reported as findings anyway.**

$$\mathrm{PPV}_u = \frac{(1-\beta)R + u\beta R}{R + \alpha - \beta R + u - u\alpha + u\beta R}.$$

Symbols as in [positive predictive value](#positive-predictive-value). Bias is a second route to a "finding": it raises the false-positive rate to $\alpha' = \alpha + u(1-\alpha)$ and the hit rate to $(1-\beta) + u\beta$, and the formula is the odds calculation run with those rates.

Worked (3.3 Example 1 with $u = 0.2$): odds $\tfrac14 \times 0.6/0.24 = 5:8$, so $\mathrm{PPV}_u = 5/13 \approx 0.385$.

- **Keep the factor $(1-\alpha)$:** $u$ is not simply added to $\alpha$.

*Lessons:* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)

### Forking paths

**One analysis is enough for a multiple-comparisons problem if its details were contingent on the data, so that different data would have led to a different, equally reasonable analysis.**

Andrew Gelman and Eric Loken (2013), stated as a frequentist point about hypothetical repetitions. It sharpens Joseph Simmons, Leif Nelson and Uri Simonsohn ("False-Positive Psychology", *Psychological Science*, 2011), who showed by simulation that undisclosed flexibility can make finding a nonexistent effect more likely than not, and named it "researcher degrees of freedom". [econometrics 2.7](../econometrics/lessons/02-07-multiple-testing-specification-search.md) calls the territory the "specification garden" and owns the arithmetic of $1-(1-\alpha)^m$ for $m$ tests.

Worked (3.3 Example 2): the best of $k$ independent $z$ statistics is at or below $z$ with probability $\Phi(z)^k$. The best of 8 at $z = 2.4$ gives $0.936$, so an adjusted $p$ of 0.064.

- **"I only ran one analysis" is no answer on this diagnosis.**
- **If nobody can say how many paths were open,** there is no sampling distribution and severity gives no number ([severe testing](#severe-testing)).

*Lessons:* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)

### Pre-registration

**Fixing the analysis plan before seeing the data.**

The live disagreement, stated from both sides. [econometrics 2.7](../econometrics/lessons/02-07-multiple-testing-specification-search.md) calls it "bookkeeping".

- **On the [likelihood principle](#likelihood-principle):** with the whole data in hand, what the analyst intended changes nothing about what they say. Pre-registration is bookkeeping in the strict sense: it records what the data are, including the data a hidden search left out.
- **On error statistics:** the plan fixes the procedure, the procedure fixes the error probabilities, and the error probabilities are what make a result evidence. Same numbers, different plan: different severity.

**The premise under most pressure** is that the relevant sampling distribution is fixed by what the analyst *would* have done on other data.

- **Objection:** that counterfactual is often unknowable, depends on states of mind, and makes two analysts with identical data report different evidence.
- **Reply:** selection is a physical feature of how the numbers came to be reported, it can be observed or pre-registered, and a standard that ignores it lets a hunted result count in full.
- **What each concedes:** the error statistician, that where the paths cannot be reconstructed she has no number; the likelihoodist or Bayesian, that the fix then falls on the prior, which must be low enough to do what the correction would have done.

Tools for reading a literature's credibility, registered reports among them: [empirical-political-economy](../empirical-political-economy/syllabus.md) 6.3.

*Lessons:* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)

### Lowering the significance threshold

**The proposal to move the default threshold for claims of new discoveries from 0.05 to 0.005.**

Daniel Benjamin and 71 co-authors, "Redefine Statistical Significance" (*Nature Human Behaviour*, 2018). Their report: a two-sided $p$ near 0.05 corresponds to [Bayes factors](#bayes-factor) of only about 2.5 to 3.4 for $H_1$ under reasonable alternatives, and $p = 0.005$ to about 14 to 26; they cite evidence that prior odds in psychology may be only about 1:10. Results between 0.005 and 0.05 would be called "suggestive". By their estimate, keeping 80 percent power needs about 70 percent more subjects.

- **It belongs to the Bayesian diagnosis** of the [replication crisis](#replication-crisis): the trouble is base rates and weak evidence.
- **A Bayes-factor reading depends on the alternative assumed** ([Lindley's paradox](#lindleys-paradox)).

*Lessons:* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)

### Severe testing

**Mayo's account on which a result is evidence for a claim to the extent that the procedure was capable of revealing the claim to be false.**

Deborah Mayo's error statistics: *Error and the Growth of Experimental Knowledge* (1996); *Statistical Inference as Severe Testing* (2018); with Aris Spanos (2006). It descends from Popper's severe tests ([2.1](lessons/02-01-popper-conjectures-and-refutations.md)), keeping the falsificationist orientation and turning the risk of refutation into a computed error probability. The core is the [severity requirement](#severity-requirement).

**Her diagnosis of the crisis:** the fault is not the method but that selection effects have destroyed the capacities it is supposed to have. A hunted result was not tested severely, whatever its printed $p$.

**Where it strains** (3.3 Example 2, best of eight outcomes). If nobody can say how many paths were open, the account stops giving a number; the error statistician says the claim has then not passed a severe test, and that is the verdict. A Bayesian with flat priors says the posterior for this outcome is unchanged however many were searched, because its likelihood is unchanged, and a sceptical prior does the correcting with no count of paths. The error statistician calls the unchanged number the symptom; the Bayesian calls it the reason the prior is where the work belongs.

- **It does not defend the 0.05 ritual.** It rejects the binary reading: a significant result licenses only the discrepancies it passed severely, and a marginal $p$ in a huge sample may license almost none.

*Lessons:* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)

### Severity requirement

**Data give good grounds for a claim only if they agree with it and the procedure would, with high probability, have produced a result agreeing less well with it were the claim false.**

Paraphrased from Mayo. For $\bar X$ normal with known $\sigma$, sample size $n$, testing $H_0: \mu \le \mu_0$ against $\mu > \mu_0$, with observed mean $\bar x_{\text{obs}}$ and $\Phi$ the standard normal CDF:

After a rejection, for the claim $\mu > \mu_1$:

$$\mathrm{SEV}(\mu > \mu_1) = P(\bar X \le \bar x_{\text{obs}};\ \mu = \mu_1) = \Phi\!\left(\frac{\bar x_{\text{obs}} - \mu_1}{\sigma/\sqrt{n}}\right).$$

After a non-rejection, for the claim $\mu \le \mu_1$ (a result agreeing less well is now a larger mean; [3.5](lessons/03-05-objectivity.md), Flashback):

$$\mathrm{SEV}(\mu \le \mu_1) = P(\bar X > \bar x_{\text{obs}};\ \mu = \mu_1) = 1 - \Phi\!\left(\frac{\bar x_{\text{obs}} - \mu_1}{\sigma/\sqrt{n}}\right).$$

$\mu_1$ is the worst case among values making the claim false. At $\mu_1 = \mu_0$ the first equals $1 - p$ and the second equals $p$.

Worked (3.3 Example 2): $\sigma = 12$, $n = 144$, $\bar x_{\text{obs}} = 2.4$, one pre-specified outcome.

| Claim | $\mu > 0$ | $\mu > 1$ | $\mu > 2$ | $\mu > 3$ |
|---|---|---|---|---|
| $\mathrm{SEV}$ | $\Phi(2.4) = 0.992$ | $\Phi(1.4) = 0.919$ | $\Phi(0.4) = 0.655$ | $\Phi(-0.6) = 0.274$ |

- **Severity is an error probability about the procedure, not the probability the claim is true.** In this normal model the number equals a flat-prior posterior; the two part as soon as selection enters.
- **It separates what a $p$-value conflates:** at $n = 14{,}400$ a mean of 0.24 gives the same $z$, yet $\mathrm{SEV}(\mu > 1) \approx 1.5\times10^{-14}$.

*Lessons:* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md), [3.5](lessons/03-05-objectivity.md)

### Value-free ideal

**Moral, political and economic values may pick the question and decide what to do with the answer, but must stay out of the core of inquiry: gathering evidence and accepting hypotheses.**

The target of Rudner and of Heather Douglas (*Science, Policy, and the Value-Free Ideal*, 2009). It rests on the line between [epistemic and non-epistemic values](#epistemic-and-non-epistemic-values).

- **Two things to keep apart:** the normative ideal, and the factual claim that value-free acceptance is possible.
- **A defence:** Gregor Betz ("In Defence of the Value Free Ideal", 2013) argues that scientists can largely avoid contextual value judgments by stating how uncertain their evidential claims are. Katie Steele ("The Scientist *qua* Policy Advisor Makes Value Judgments", 2012) holds that putting uncertainty into a report takes value judgments of its own.
- **In Douglas's map (3.5)** value-free is one of [eight senses of objectivity](#senses-of-objectivity), and the one she rejects as an ideal: the threat is values masked, not removed.
- **Not Weber's value freedom** ([social-theory 1.3](../social-theory/lessons/01-03-understanding-webers-interpretive-method.md)), which forbids passing off a verdict on what is good as a finding about what happens. You can keep Weber's rule and still have Rudner's problem.

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md), [3.5](lessons/03-05-objectivity.md)

### Epistemic and non-epistemic values

**Epistemic values are meant to bear on whether a theory is true; non-epistemic (also called contextual) values are the rest: safety, profit, justice.**

Kuhn's [five values](#five-values-of-theory-choice) are the standard example of the first. The [value-free ideal](#value-free-ideal) rests on this line.

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md)

### Argument from inductive risk

**Accepting a hypothesis requires deciding the evidence is strong enough, and how strong depends on how serious a mistake would be, so the scientist as scientist makes value judgments.**

Richard Rudner, "The Scientist *qua* Scientist Makes Value Judgments" (*Philosophy of Science*, 1953).

1. **P1.** The scientist as scientist accepts or rejects hypotheses.
2. **P2.** No hypothesis is ever completely verified, so accepting one requires deciding that the evidence is strong enough.
3. **P3.** How strong is strong enough depends on how serious a mistake would be, in what Rudner calls the "typically ethical sense".

∴ **C.** The scientist as scientist makes value judgments.

In statistics, he says, the decision is the choice of a significance or confidence level. His examples: a drug's toxic ingredient against a lot of belt buckles; the Manhattan Project's chain reaction.

**Hempel** ("Science and Human Values", 1960, reprinted in *Aspects of Scientific Explanation*, 1965) named the risk and drew the line later writers use: values have no logical bearing on whether evidence supports a hypothesis, but a rule of acceptance has no clear meaning until the four outcomes (accepted or rejected, true or false) are assigned values. In pure research, he suggested, those are the aims of knowledge.

**Who attacks what:** [Jeffrey](#jeffreys-reply) denies P1, [Levi](#levis-reply) denies P3, [Douglas](#direct-and-indirect-roles-for-values) accepts C and limits what follows from it.

- **It does not license believing what suits you.** For Rudner the cost of error bears only on how much evidence is enough, never on what the evidence shows. Hempel and Douglas keep that line.
- **The standard-of-proof parallel** (criminal against civil) is in [philosophical-method 4.2](../philosophical-method/lessons/04-02-steelmanning-and-the-burden-of-proof.md).

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md)

### Jeffrey's reply

**Scientists should not accept hypotheses: they should report probabilities and let each user apply their own costs.**

Richard Jeffrey, not Harold Jeffreys of the Bayes factor. "Valuation and Acceptance of Scientific Hypotheses" (1956).

1. **J1.** The cost of wrongly accepting $H$ depends on what will be done if $H$ is accepted.
2. **J2.** Nothing in $H$ says what will be done. A vaccine lot free of active virus might guide a physician with a child or a veterinarian with a pet monkey, and a lawlike hypothesis has endless uses.
3. **J3.** No single acceptance suits every use, and taking the strictest standard is wrong for all the others.

∴ **JC.** Acceptance is not the scientist's business. The scientist should supply a probability, and each user should apply their own costs.

- **Not a finished value-free science of probabilities.** The paper is a reductio of acceptance. He says the probabilistic view is not fully satisfactory, and that its difficulties, Rudner's objection among them, may be fatal to it.
- **Where it presses:** defenders of P1 must grant him that "accepted" is relative to a use. His side must say what remains of science if nothing is ever accepted: he notes that textbooks state Maxwell's equations with no degree of confirmation attached.
- **Worked:** the [expected-loss threshold](#expected-loss-threshold) shows one probability and two uses.

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md)

### Rudner's reply and the regress

**To determine that the degree of confirmation is $p$ just is to accept the hypothesis that it is $p$, so the value decision comes back.**

Rudner anticipated the objection (1953), and his reply is one step. Jeffrey answered (1956) that accepting claims about probabilities is no more the scientist's business than accepting any others.

- **The regress is later.** Probabilities of probabilities is Douglas's development (2009, as reported by Tobias Henschen). Do not attribute a regress to Rudner's own text.
- **Henschen** ("How Strong Is the Argument from Inductive Risk?", 2021) reports that most writers think Jeffrey and Levi refuted, then argues otherwise: the chain of probabilities ends in practice.
- **The upstream version:** Rudner's side replies that any reported number rests on accepted models, data and categories ([inductive risk throughout inquiry](#inductive-risk-throughout-inquiry)).

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md)

### Levi's reply

**Deciding what to believe in the search for truth differs from deciding how to act, and standards for the first do not shift with the practical cost of an error.**

Isaac Levi, "Must the Scientist Make Value Judgments?" (1960), on the standards of inference a scientist takes on by joining the profession; "On the Seriousness of Mistakes" (1962), where the epistemic values come in. He keeps acceptance, against [Jeffrey](#jeffreys-reply), and denies P3 of [Rudner's argument](#argument-from-inductive-risk) for it.

- **A second reading:** Henschen (2021) takes Levi to charge an ambiguity between P2 (deciding what to believe) and P3 (deciding how to act).

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md)

### Direct and indirect roles for values

**Direct: a value is itself a reason for a claim or an action. Indirect: a value only helps settle how much evidence is enough, given uncertainty.**

Heather Douglas, "Inductive Risk and Values in Science" (*Philosophy of Science*, 2000); *Science, Policy, and the Value-Free Ideal* (2009). Her two moves are an extension ([inductive risk throughout inquiry](#inductive-risk-throughout-inquiry)) and this restriction.

- **Direct role legitimate:** choosing problems; deciding what to do with results; limiting methods on ethical grounds (no experiments on people without consent).
- **Inside the reasoning** (characterizing data, interpreting results, accepting claims): direct role barred, indirect role permitted.

Her conclusion is limited: where error has no foreseeable non-epistemic consequences (she cites research on atom beams), such values need not enter.

- **"Direct" does not mean "illegitimate".** For Douglas it depends on the stage: a review board forbidding a harmful design uses values directly and legitimately.
- **Elliott's doubt** ("Direct and Indirect Roles for Values in Science", 2011): the line may not be policeable. Is a conservative model caution, or reasoning to a foregone conclusion? Calling borderline slides malignant because a missed cancer is worse, and calling them malignant because you want the chemical regulated, can produce identical calls on every slide.
- **Douglas's side answers** that the reasons differ, and disclosure can audit them.

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md), [4.1](lessons/04-01-the-deductive-nomological-model.md)

### Inductive risk throughout inquiry

**Inductive risk arises in choosing a method, characterizing data and interpreting results, not only at acceptance.**

Douglas (2000). Judgments precede any reported probability, and those upstream calls never reach the user: her answer to [Jeffrey](#jeffreys-reply).

Her case: a 1978 dioxin study by Richard Kociba and colleagues at Dow Chemical. The same female rat liver slides, at 10 ng/kg/day, were read at least three times:

| Reading | Tumorous livers, of 50 | Controls, of 86 | Excess over control |
|---|---|---|---|
| The study's authors, 1978 | 20 | 9 | 0.30 |
| Robert Squire for the EPA, 1980 | 27 | 16 | 0.35 |
| Seven pathologists assembled by a contractor at the paper industry's request, 1990 | 9 | 2 | 0.16 |

A pathologist must call the borderline slides one way or the other, and each policy trades false negatives against false positives. The value enters in the data, before any probability exists.

- **Not three applications of one standard:** the 1990 team used a revised classification scheme and settled disagreements by majority vote.
- **Blinding helps only so far:** it can shield individual calls from their consequences, but signs of acute toxicity at the higher doses identified those groups through the microscope.
- **A value-free defender** would report the borderline count separately and leave it to the reader, Jeffrey's plan applied to data. Douglas replies that the categories themselves were chosen.

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md)

### Expected-loss threshold

**Accept $H$ exactly when its probability exceeds $L_A/(L_A + L_R)$: the bar rises with the cost of wrongly accepting.**

$L_A$ is the loss from accepting a false $H$, $L_R$ the loss from rejecting a true one (a loss is a [utility](../decision-theory/lessons/01-02-from-expected-value-to-expected-utility.md) with its sign flipped), and $p$ the probability of $H$. Accepting has expected loss $(1-p)L_A$ and rejecting has $pL_R$, so

$$\text{accept} \iff p > t = \frac{L_A}{L_A + L_R}.$$

Worked (3.4 Example 1): 20 bolts; $H$ says the batch is good (each fails with probability $1/20$), otherwise each fails with probability $1/4$; prior $9/10$; $k$ failures; $L_R = 1$. Null: the batch is good, so $\alpha$ is the chance of rejecting a good batch.

| $k$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $p_k = P(H \mid k)$ | 0.9990 | 0.9938 | 0.9621 | 0.8002 | 0.3874 |

| Use | $L_A$ | $t$ | Accepts up to | $\alpha$ | $\beta$ |
|---|---|---|---|---|---|
| Garden fence | 3 | 0.75 | $k = 3$ | 0.016 | 0.225 |
| Rail bridge | 99 | 0.99 | $k = 1$ | 0.264 | 0.024 |

At $k = 2$: same evidence, same probability, opposite decisions. A test at 26 percent minimizes expected loss for the bridge, and no convention picked that level.

- **Jeffrey says** publish $p_2$ and stop. **Rudner's side says** $p_2$ already stands on an accepted model, prior and test rig.

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md)

### Senses of objectivity

**On Douglas's map, "objective" names several distinct achievements, which do not reduce to one another.**

Heather Douglas, "The Irreducible Complexity of Objectivity" (*Synthese*, 2004): eight senses, sorted by where you look. Here the word describes a process of inquiry and says how far you may trust what comes out of it.

| Where you look | Sense | Means | Threat |
|---|---|---|---|
| Interaction with the world | Manipulable | you can reliably use the result to do something else | works once, cannot be reused |
| | [Convergent](#convergent-objectivity) | independent routes reach the same result | routes share a hidden error |
| One person's reasoning | [Detached](#detached-objectivity) | wishes do not stand in for evidence | wishes replace evidence |
| | Value-free | no values enter at all | values masked, not removed |
| | Value-neutral | a balanced position across contested values | balancing against a view that deserves none |
| A social process | [Procedural](#procedural-objectivity) | the same outcome whoever runs it | values or errors built into the rule |
| | [Concordant](#concordant-objectivity) | competent observers, polled separately, agree | observers share a bias |
| | [Interactive](#interactive-objectivity) | agreement reached by arguing it out | who gets a seat, by whose standards |

She argues that none reduces to another, that each comes in degrees, and that one can be present while others are absent.

**Worked (3.5 Example 1, illustrative):** lead in tap water. A fixed published method is procedural; plasma mass spectrometry agreeing with furnace absorption is convergent; readers agreeing unprompted is concordant; a sceptic's question about bottle washing, argued out until practice changes, is interactive. Let every bottle be contaminated the same way, and procedural objectivity is intact while the convergence is only apparent.

**Beyond Douglas's list:** [mechanical objectivity](#mechanical-objectivity) has a history (Daston and Galison). Theodore Porter (*Trust in Numbers*, 1995) reads rule-bound quantification as what institutions reach for when personal trust is unavailable. Robert Merton (1942) described science's ethos as institutional norms: universalism, communism, disinterestedness, organized scepticism. That is a claim about a community, not about anyone's state of mind.

- **"Objective" does not mean "value-free".** Value-free is one of the eight, and the one she rejects as an ideal.
- **Other uses in the library are not this topic:** [objective chance and objective Bayesianism](../epistemology/lessons/05-04-the-problem-of-priors.md), [Weber's 1904 essay](../social-theory/lessons/01-03-understanding-webers-interpretive-method.md), [objective-list welfare](../philosophy-of-economics/lessons/01-01-welfarism-and-preference-satisfaction.md).

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Convergent objectivity

**Independent routes to a result reach the same result.**

Douglas (2004), first mode: interaction with the world. The label is her own (she cites Kosso 1989 for the idea). Its force depends entirely on the independence of the routes.

- **The failure:** routes that share one cause of error give only apparent convergence.
- **Not merging of opinions** ([epistemology 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md)), a theorem about reasoners conditionalizing on the *same* data. Convergence needs *different* routes.
- **Not [concordant](#concordant-objectivity):** agreement among routes, as against agreement among people.
- **Forward:** [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) asks convergence to carry more weight (Perrin's independent routes to Avogadro's number). Douglas's sense is deliberately agnostic on that step. The [jury theorem](../social-choice/lessons/05-01-the-condorcet-jury-theorem.md) needs independence in the same way.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Detached objectivity

**Wishes do not stand in for evidence in a person's reasoning.**

Douglas (2004), second mode: one person's reasoning.

- **Not value-free objectivity.** It forbids only wishes replacing evidence, and leaves values free to settle which errors matter. It is the neighbouring sense she defends.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Procedural objectivity

**The same outcome results whoever carries out the process.**

Douglas (2004), third mode: a social process. She borrows the label from Megill (1994). Reproducibility in [analytical-chemistry 4.5](../analytical-chemistry/lessons/04-05-sampling-method-validation.md) is how a chemist measures it. Pre-registering a regression and running it exactly as filed is an instance.

- **It removes individual judgment, not values or errors,** which can be built into the rule itself.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Concordant objectivity

**Competent observers, polled separately, agree.**

Douglas (2004), third mode. No discussion is involved.

- **Limit:** a bias all the observers share.
- **Against [convergent](#convergent-objectivity):** agreement among people, not among routes. Six people reading one film use one route.
- **Against [interactive](#interactive-objectivity):** polled separately, not argued out.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Interactive objectivity

**Agreement reached by arguing it out, with participants working to find the sources of their disagreement.**

Douglas (2004), third mode; she names Longino as its developer. [Critical contextual empiricism](#critical-contextual-empiricism) gives the sense its conditions.

- **The tension she stresses:** discussion needs shared standards, but high and uniform standards reduce the diversity that catches shared bias. The threat is who gets a seat, by whose standards.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Mechanical objectivity

**The effort to take the human hand out of the scientific image.**

Lorraine Daston and Peter Galison ("The Image of Objectivity", 1992; *Objectivity*, 2007) follow it through nineteenth-century science. It is a historical ideal and not one of Douglas's eight; [procedural objectivity](#procedural-objectivity) is its close cousin.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Critical contextual empiricism

**Evidence depends on background assumptions, and objectivity is how far a community's criticism of those assumptions reaches.**

Helen Longino, *Science as Social Knowledge* (1990); *The Fate of Knowledge* (2002). The numbering is 3.5's reconstruction:

1. **P1.** Data count as evidence for a hypothesis only given background assumptions ([holist underdetermination](#holist-underdetermination); absent stellar parallax read two ways in the sixteenth century).
2. **P2.** Chains of justification end in assumptions for which no evidence is at hand.
3. **P3.** No inquirer stands outside all such assumptions, so none can reliably judge the ones she herself holds.
4. **P4.** People who do not share an assumption can bring it to light and test it.
5. **P5.** So the only check on arbitrary preference at that point is critical interaction among people holding different assumptions.

∴ **C.** A method is objective to the degree that it permits what Longino calls "transformative criticism". Objectivity belongs first to a community's practice, and comes in degrees. [Her four norms](#longinos-four-norms) say what that practice needs.

**Where it is weakest: P5, and the word "critical".**

- **Miriam Solomon** (*Social Empiricism*, 2001) grants that rationality is a community matter but locates it in how the causes of belief are distributed across scientists, whether or not they ever talk.
- **Kevin Zollman's network models** (2007): densely connected groups can lock onto the wrong answer.
- **A Longinian reply** (reconstructed): a distribution of effort says nothing about assumptions shared across every programme, and interaction in her 2002 sense reaches into observation and reasoning, not only talk about finished results.
- **What each concedes:** the critic, that spreading effort cannot expose what everyone assumes; Longino, that a community meeting all four norms may still share a false assumption.

**Hard case (3.5 Example 2): field primatology before the mid-1970s.** Opportunistic notes over-recorded the dramatic, chiefly male conflict and mating. Jeanne Altmann's 1974 paper developed focal-animal sampling; Sarah Hrdy's work on female strategies (*The Langurs of Abu*, 1977) came as the proportion of women in the field rose. The accounts read it differently, and the case does not separate Longino from the individualist, since both predict uptake once the sampling argument is made.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Longino's four norms

**What a community's criticism needs in order to work: venues, uptake, public standards, tempered equality.**

The names are from *The Fate of Knowledge* (2002).

| Norm | Requires |
|---|---|
| Venues | recognized places for criticism |
| Uptake | beliefs actually shift in response to criticism |
| Public standards | publicly accessible standards by which criticism is judged |
| [Tempered equality](#tempered-equality) | any perspective starts with a capacity to contribute, and can lose that standing |

The 1990 list reads: recognized avenues for criticism, shared standards, community response, equality of intellectual authority.

- **The norms make criticism possible and cannot make it occur.** They come in degrees, and cannot say in advance which assumption is the hidden one or how much diversity is enough.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Tempered equality

**Any perspective starts with a capacity to contribute, and can lose that standing by failing to engage or respond to criticism.**

Longino (2002), the fourth of her [four norms](#longinos-four-norms), refining the "equality of intellectual authority" of 1990.

- **It does not mean every opinion counts the same.** Standing starts open and is lost by refusing to engage, and criticism answers to public standards.
- **The 2002 norm says how standing is lost.** Her 1990 condition, as the SEP reports it, is equality among qualified practitioners. Whether an entry qualification can count as tempering is left open; a community's own standards decide who counts as competent ([interactive objectivity](#interactive-objectivity)).

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Standpoint epistemology

**Where you stand changes what you can notice, and some subordinated positions, once critically worked out, carry a contingent advantage in seeing what an arrangement hides.**

Nancy Hartsock ("The Feminist Standpoint", 1983) adapted a Marxist model; Sandra Harding (*Whose Science? Whose Knowledge?*, 1991) drew the methodological moral.

1. **S1.** What an inquirer can notice depends on her social position.
2. **S2.** Those on the receiving end of an arrangement can have a contingent advantage in seeing what it hides, once that position has been critically worked out.

∴ **C.** Inquiry should start from those positions and scrutinize its own practices as rigorously as its objects ([strong objectivity](#strong-objectivity)).

- **It does not say the oppressed are automatically right.** Alison Wylie (2003) reports a consensus against automatic privilege: the advantage is contingent and achieved, not issued with membership.
- **The live objection** (Longino, 1993): no non-circular test says which standpoint is advantaged on which question.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Strong objectivity

**Scrutinize knowers and their communities as rigorously as the objects of knowledge.**

Sandra Harding (1991). It is the conclusion of the [standpoint](#standpoint-epistemology) argument, and she counts neutrality as the weaker kind.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Division of cognitive labour

**A community can do better by spreading researchers across rival programmes than by having everyone pick the best bet, and credit-seekers can produce that spread.**

Philip Kitcher, "The Division of Cognitive Labor" (*Journal of Philosophy*, 1990). The chance function, the numbers and the equal split of credit below are 3.5's own, not his. Ten scientists, two rival programmes, exactly one on the right track: A with probability $q_A = 7/10$, B with $q_B = 3/10$. If $k$ people work on the right programme it delivers with probability $1 - 2^{-k}$, so $p_i(k) = q_i(1 - 2^{-k})$. With $n$ on A, the community's chance of success is

$$V(n) = p_A(n) + p_B(10 - n).$$

| Split (A/B) | Who produces it | $V$ |
|---|---|---|
| 10/0 | truth-seeking clones: each joins the likeliest programme | $\tfrac{7}{10}\cdot\tfrac{1023}{1024} \approx 0.699$ |
| 7/3 | credit-seekers: each maximizes expected credit $p(k)/k$, credit split equally within the winning programme | $\tfrac{245}{256} \approx 0.957$ |
| 6/4 | community optimum, by enumeration | $\tfrac{621}{640} \approx 0.970$ |

- **It holds for some distributions of chance, not all:** raise $q_A$ to $9/10$ and credit-seekers crowd onto A as well.
- **Zollman (2018):** a truth-seeker content for *anyone* to find the answer needs no credit to spread out.
- **It needs no deliberation at all,** which is the pressure it puts on [critical contextual empiricism](#critical-contextual-empiricism). It concerns the spread of effort, not the detection of assumptions.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

**Module 4: Explanation, laws, and reduction**

### Deductive-nomological model

**To explain an event is to show, by a valid deduction from true general laws and particular conditions, that it had to happen.**

Carl Hempel and Paul Oppenheim, "Studies in the Logic of Explanation" (*Philosophy of Science*, 1948), reprinted in Hempel's *Aspects of Scientific Explanation* (1965). "Nomological" means lawful.

$$\begin{array}{ll} C_1, C_2, \ldots, C_k & \text{statements of antecedent conditions} \\ L_1, L_2, \ldots, L_r & \text{general laws} \\ \hline E & \text{description of the phenomenon to be explained} \end{array}$$

- **R1.** $E$ follows deductively from the explanans.
- **R2.** The explanans includes general laws, and the derivation needs them.
- **R3.** The explanans is testable, at least in principle.
- **R4.** Every sentence of the explanans is true.

The case for it runs through [nomic expectability](#nomic-expectability): a sound argument from laws and conditions is the strongest ground for expecting an event; only [lawlike generalizations](#lawlike-and-accidental-generalizations) can serve; and causal talk adds no further ingredient, "cause" being shorthand for "covered by a law", the regularity view of [`metaphysics` 4.1](../metaphysics/lessons/04-01-humes-challenge-and-the-regularity-theory.md).

Hempel's contrast: that every member of the Greensbury School Board for 1964 was bald is accidental and explains no member's baldness; that gases expand when heated at constant pressure is a law and explains an expansion. He conceded he had no satisfactory criterion for the difference.

**Worked (4.1 Example 1, their own oar).** $L_1$: the law of refraction. $L_2$: water is optically denser than air. $C_1$: part of the oar is in the water, part in the air. $C_2$: the oar is, near enough, straight. $E$: to the observer the submerged part appears bent upward. Drop $L_1$ and the derivation collapses, which is what R2 asks.

- **The four are necessary conditions, in Hempel and Oppenheim's word.** [The flagpole](#flagpole-and-shadow) passes all four. It attacks the further claim that meeting them is enough.
- **R2 asks only that the *law* be required.** No condition says every factor the law mentions must matter to the outcome ([hexed salt](#hexed-salt)).
- **R4 is truth, not high confirmation.** Otherwise an account would be a correct explanation at one time and stop being one later. An explanation from a law later shown false was never correct. That premise is behind the explanation paradox in [`philosophy-of-economics` 6.3](../philosophy-of-economics/lessons/06-03-how-possibly-models-and-credible-worlds.md).
- **Nobody has to write out the deduction.** An account of a car overturning because a tyre blew out is an *incomplete* explanation, with the laws left tacit. The schema says what a full explanation would contain.
- **No clash with [`philosophical-method` 1.1](../philosophical-method/lessons/01-01-what-an-argument-is.md).** That lesson sorts explanation from argument by job, Hempel by logical form.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.2](lessons/04-02-causal-explanation.md)

### Explanans and explanandum

**The explanans does the explaining: the laws and conditions. The explanandum is the description of what gets explained.**

In the [D-N schema](#deductive-nomological-model) the $C$s and $L$s together are the explanans and $E$ is the explanandum (Hempel and Oppenheim, 1948).

- **The explanans may be all laws.** R2 allows it, which is how the model also covers deriving a law from more general laws.
- **On their usage, an explanans later found false never explained** (R4).

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md)

### Nomic expectability

**To understand why an event occurred is to see that, given how things work, it was to be expected.**

Salmon's later name for the first premise of the case for the [D-N model](#deductive-nomological-model), and the idea behind the [I-S model](#inductive-statistical-model) too.

**The objection.** Expectability and explanation come apart in both directions: [the flagpole](#flagpole-and-shadow) and [the pills](#birth-control-pills-case) give expectation without explanation, [paresis](#paresis-case) explanation without expectation, and what is missing in each looks like causal relevance.

**Hempel's reply.** These are pragmatic complaints. The model admits many useless explanations, and whether one is useful to a given asker is not something logical analysis can settle. And to say that the shadow does not cause the pole repeats the very word an empiricist wanted analysed.

**What each side concedes.** The critic owes an account of causation that does not take it as primitive ([4.2](lessons/04-02-causal-explanation.md); [`metaphysics` 4.1](../metaphysics/lessons/04-01-humes-challenge-and-the-regularity-theory.md)–[4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md)). Hempel's side must accept that "explanation" in his sense includes the shadow explaining the pole, so that the model no longer tracks what a why-question asks.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md)

### Explanation-prediction symmetry

**Explanation and prediction have one logical form and differ only in whether you already know the outcome.**

Hempel and Oppenheim (1948): the same analysis covers both, and the difference is pragmatic, whether $E$ is known before or after the premises are given. State the same premises before anyone looks and you have a prediction. Two halves:

1. No account fully explains an event unless, had its premises been available in time, it could have predicted that event. Pressed by [paresis](#paresis-case).
2. What could predict could explain. Pressed by [the barometer](#barometer-case), if "the barometer drops, a storm comes" is a law.

**Bridge.** A good forecasting regressor is the barometer, and potential outcomes ([`econometrics` 3.1](../econometrics/lessons/03-01-potential-outcomes-identification.md)) is one way of saying what forecasting leaves out.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md)

### Inductive-statistical model

**If the law is only statistical, the deduction weakens to a strong inductive argument: the event is made very likely rather than certain.**

Hempel, "Deductive-Nomological vs. Statistical Explanation" (1962); *Aspects* (1965).

$$\begin{array}{l} p(G \mid F) = r \\ Fb \\ \hline Gb \quad [r] \end{array}$$

$p$ is statistical probability, a long-run relative frequency in a class and not a credence. $F$ and $G$ are properties, $b$ is the individual, and $[r]$ marks inductive support rather than deduction. Two extra demands: the [high-probability requirement](#high-probability-requirement) and [maximal specificity](#maximal-specificity).

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### High-probability requirement

**In an I-S explanation $r$ must be high, since that is the sense in which the event was to be expected.**

Part of Hempel's [I-S model](#inductive-statistical-model). It applies his general demand that an acceptable explanation of a particular event show it was to be expected, at least with reasonable probability.

- **[Paresis](#paresis-case) became the standard objection,** though Scriven aimed that case at symmetry.
- **Compare [statistical relevance](#statistical-relevance),** which locates a case in its cell however low that cell's probability.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md)

### Maximal specificity

**You may not cite a broad statistic when you know a narrower class the individual falls into that says otherwise.**

Hempel's requirement on the [I-S model](#inductive-statistical-model): if everything accepted at the time puts $b$ in a narrower class $F_1 \subset F$, it must also supply a statistical law for $G$ in $F_1$ with the same value $r$, unless that law is a bare theorem of probability.

**Worked (4.1 Example 2, Hempel's penicillin).** John Jones has a streptococcal infection, takes penicillin and recovers quickly. $F$ is infection plus penicillin, $G$ quick recovery, $p(G \mid F) = r$ near 1, and $K$ is everything accepted at the time. If $K$ says nothing narrower, the explanation stands. If $K$ grows to include that his strain is penicillin-resistant, he falls in a subclass $F_1$ where recovery is improbable, the requirement fails, and the explanation is withdrawn.

- **Statistical explanation is relative to a knowledge situation.** Nothing about Jones changed, only what we know. Deductive explanation is not relative in this way: if all $F$ are $G$, every subclass of $F$ is $G$ too.
- **Withdrawn is not "never explained".** The I-S explanation stood relative to what was then accepted. A deductive explanans found false never explained (R4).
- **Where it stops.** Jones recovered anyway. The narrowest accepted class containing him makes recovery unlikely, so relative to $K$ the model offers no I-S explanation of it, and cannot say whether that means an undiscovered factor or plain chance.
- **Hempel:** relativity to $K$ is unavoidable, so the verdict can only be that no explanation is available relative to what we now know.
- **Salmon:** relativizing to knowledge is the wrong shape. An explanation should turn on objectively homogeneous classes, and the requirement as stated does not even block his case of colds clearing up within a week after vitamin C, since no narrower class differs.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Flagpole and shadow

**The same laws take you from a pole's height to its shadow and from the shadow back to the height, and nobody thinks the shadow is why the pole is that tall.**

Height, the sun's elevation and the straight-line propagation of light entail the shadow's length: explanatory. The same laws entail the height from the shadow: not. R1 to R4 hold both ways. The defect is asymmetry. Salmon in 1970 calls it Bromberger's example; Sylvain Bromberger pressed the asymmetry in "Why-Questions" (1966).

- **It does not show that one of R1 to R4 is false.** It passes all four, which is the point.
- **Hempel's reply** is at [nomic expectability](#nomic-expectability).
- **Kitcher (4.3).** An "origin and development" pattern traces any object's dimensions to how it arose and changed. Adding a shadow pattern adds a pattern and no conclusions; swapping it in loses every object without a suitable shadow. So height-from-shadow falls outside the [explanatory store](#explanatory-store), with no primitive notion of cause.
- **Van Fraassen's tower (4.3).** For a tower built to cast a shadow of a chosen length, the shadow explains the height. Kitcher and Salmon (1987) reply that a desire for the shadow explains the height, not the shadow.
- **4.2 does not run the [intervention test](#interventionism) on the flagpole.** It leaves that to you.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.2](lessons/04-02-causal-explanation.md), [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Barometer case

**A sudden barometer drop forecasts the storm and does not explain it.**

Michael Scriven (*Science*, 1959). If "the barometer drops, a storm comes" is a law, prediction without explanation breaks the second half of [symmetry](#explanation-prediction-symmetry). [`metaphysics` 4.1](../metaphysics/lessons/04-01-humes-challenge-and-the-regularity-theory.md) met it as the asymmetry problem for the regularity theory.

**Computed (4.2 Example 1, invented numbers).** Pressure drops ($D$) on a fifth of days. The needle falls ($B$) with probability 0.9 after a drop and 0.1 otherwise. A storm ($S$) follows with probability 0.7 after a drop and 0.1 otherwise. Given $D$, needle and storm are independent.

- **Relevance.** $P(S)=0.22$ and $P(S\mid B)=67/130\approx0.515$, so the needle is relevant.
- **[Screening off](#screening-off).** $P(S\mid B\wedge D)=0.7=P(S\mid D)$ and $P(S\mid B\wedge\neg D)=0.1=P(S\mid\neg D)$, neither equal to 0.515.
- **The limit.** The chain $B\to D\to S$, with $P(B)=0.26$, $P(D\mid B)=9/13$, $P(D\mid\neg B)=1/37$ and the same storm probabilities, generates the identical joint distribution. The frequencies cannot choose. [Structural equations](#structural-equations) give the two graphs different predictions.

**Verdicts in 4.2, on "the needle explains the storm".** Relevance: out, once $D$ is in the partition. Process: out, no process runs from needle to storm. Intervention: out, set the needle and the storm is unmoved.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.2](lessons/04-02-causal-explanation.md)

### Hexed salt

**All table salt with a dissolving spell cast on it dissolves: true, the law is needed for the derivation, and the hex is idle.**

Henry Kyburg (1965). The defect is irrelevance, as in [`metaphysics` 4.1](../metaphysics/lessons/04-01-humes-challenge-and-the-regularity-theory.md).

- **R2 does not exclude it.** R2 asks only that the *law* be required for the derivation, and it is. No condition says every factor the law mentions must matter. That silence is the gap.

**Verdicts in 4.2.** Relevance: out, the hex shifts nothing. Process: no verdict, salt is a causal process either way. Intervention: out, unhexed salt dissolves too.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.2](lessons/04-02-causal-explanation.md)

### Birth-control pills case

**A man takes his wife's birth-control pills and does not become pregnant: the derivation is valid and the pills make no difference.**

Wesley Salmon, "Statistical Explanation" (1970, reprinted 1971). Jones took his wife's birth-control pills, and no man who regularly does so becomes pregnant, so Jones did not. Valid, true, law essential. Men never become pregnant, with or without the pills.

**Verdicts in 4.2.** Relevance: out, the pills shift nothing for men. Process: no verdict, he metabolizes them. Intervention: out, stop the pills and nothing changes.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.2](lessons/04-02-causal-explanation.md)

### Paresis case

**Paresis occurs only after untreated latent syphilis, most people with untreated latent syphilis never develop it, and medicine still cites the syphilis as the explanation.**

Michael Scriven (1959). His point was explanation without predictability, against the first half of [symmetry](#explanation-prediction-symmetry). The case became the standard objection to the [high-probability requirement](#high-probability-requirement).

- **It cuts the other way from the rest of 4.1's cases.** The others say the schema is met and nothing is explained. This one says something is explained and the schema is not met.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md)

### Statistical relevance

**A factor explains by shifting the odds of the outcome in the relevant class, even if the outcome stays improbable.**

Wesley Salmon, "Statistical Explanation" (1970, reprinted 1971). It stops treating explanations as arguments. With $P$ relative frequency, $R$ a reference class and $O$ the outcome, factor $F$ is relevant iff

$$P(O\mid R\wedge F)\neq P(O\mid R).$$

An explanation partitions $R$ into cells differing in the probability of $O$, with no relevant split left, and locates the case in a cell, however low its probability. It descends from the regularity theory ([`metaphysics` 4.1](../metaphysics/lessons/04-01-humes-challenge-and-the-regularity-theory.md)).

- **What shifts the odds may be a symptom, and the odds cannot always say.** Different causal structures yield the same relevance relations ([barometer](#barometer-case)). By 1978 Salmon denied that relevant factors alone explain.
- **Relevant overall does not mean it stays in the partition.** A factor [screened off](#screening-off) drops out.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Screening off

**Once you know the deeper factor, the symptom tells you nothing more about the outcome.**

Salmon's tool against symptoms. With $P$, $R$ and $O$ as in [statistical relevance](#statistical-relevance), $G$ screens off $F$ from $O$ iff

$$P(O\mid R\wedge F\wedge G)=P(O\mid R\wedge G)\neq P(O\mid R\wedge F).$$

Numbers at the [barometer](#barometer-case).

- **It does not identify the cause.** It locates a variable in a pattern of frequencies that a fork and a chain share.
- **A perfect indicator breaks it.** If the needle tracked pressure perfectly, neither would screen off the other.
- **Check both cells.** The barometer's equalities are shown given $D$ and given $\neg D$.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Causal-mechanical explanation

**To explain an event is to trace the processes and interactions leading to it, showing where it sits in the world's causal structure.**

Wesley Salmon, *Scientific Explanation and the Causal Structure of the World* (1984). The basic notion is the [causal process](#causal-processes-and-mark-transmission).

- **Absences,** where nothing is transmitted, are a standing difficulty.
- **Christopher Hitchcock (1995).** A cue ball carries momentum and a chalk mark alike, so the network cannot say which property matters. A wire shows where influence can travel, not which property mattered.
- **Salmon conceded in 1997** that processes and relevance relations are each indispensable.
- **On 4.2's cases,** it rules out the [needle](#barometer-case) and gives no verdict on the [hex](#hexed-salt) or the [pills](#birth-control-pills-case).

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Causal processes and mark transmission

**A causal process can carry a mark with no further help; a pseudo-process cannot.**

Put a red filter at a rotating spotlight and the beam stays red out to the wall. Put red cellophane on the wall and the moving spot is red only there, so the spot is a pseudo-process (Salmon, 1984). Phil Dowe (1992; *Physical Causation*, 2000) replaced the capacity to carry a mark with possession of a conserved quantity, and Salmon adopted a modified version.

- **Tracing a process shows that influence could travel that way.** It does not say which of the process's properties did the work ([Hitchcock](#causal-mechanical-explanation)).

*Lessons:* [4.2](lessons/04-02-causal-explanation.md), [4.4](lessons/04-04-laws-in-the-sciences.md)

### Mechanisms

**Say what the parts do and how they are arranged to produce the result.**

Peter Machamer, Lindley Darden and Carl Craver, "Thinking about Mechanisms" (2000): "entities and activities" organized to produce regular change from set-up to termination. Following Anscombe, they name specific activities instead of analysing cause in general, and they need no laws, which suits the life sciences.

**Woodward (2002).** Naming activities leaves relevance unsaid. He requires each part's behaviour to fall under a generalization [invariant](#invariance) under interventions.

**The mechanist against the interventionist.** A randomized trial can show that a drug makes a difference and say nothing of how. Craver ("When Mechanistic Models Explain", 2006) calls such input-output claims sketches. Bogen (2005) and Machamer (2004) add that what-ifs need something actual behind them.

**The interventionist's reply.** Learning a mechanism is learning more dependencies, one per component, so the demand is for [depth](#explanatory-depth) and not for a different kind of thing, and what grounds a what-if is further science.

**What each concedes.** The interventionist: a bare effect explains shallowly. The mechanist: interventions are how relevance among parts gets established, and a stopping rule for detail is still owed (Craver and Kaplan, 2020). Open: whether organization and actual production add anything a complete list of dependencies would omit.

- **The word varies.** In [`social-theory` 1.4](../social-theory/lessons/01-04-testing-a-social-explanation.md), "mechanism" is the looser chain of steps through what people do.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Interventionism

**$X$ causes $Y$ if some possible intervention on $X$ would change $Y$: wiggle it and watch.**

James Woodward, *Making Things Happen* (2003): $X$ causes $Y$ iff some possible intervention on $X$ would change $Y$ or its probability distribution. The claim is contrastive: $X$'s being $x$ rather than $x'$ makes $Y$ differ. An intervention ([`metaphysics` 4.2](../metaphysics/lessons/04-02-counterfactual-causation.md)) sets the variable, snaps the arrows into it, and touches nothing else except downstream.

**The account of explanation built on it (4.2).** A causal explanation cites [invariant](#invariance) relations showing how the explanandum would have differed had its difference-makers differed. The difference-makers are what an explanation should name; what made no difference it should leave out. The premise under most pressure is that dependence under intervention is enough for explaining ([mechanisms](#mechanisms)).

- **An intervention need not be feasible.** Woodward requires only a well-grounded theory of what would happen if it occurred.
- **Not everything called an experiment is an intervention.** The procedure must change $Y$ by no route except through $X$. Randomization cuts the arrows into treatment and does nothing about extra routes out of the assignment.
- **It leaves aside what causation is.** Interventionist verdicts are model-relative and reduce nothing ([`metaphysics` 4.2](../metaphysics/lessons/04-02-counterfactual-causation.md)).
- **It is not the thesis that all explanation is causal.** Woodward allows non-causal explanation (2018; [non-causal explanation](#non-causal-explanation)).
- **Bridge.** $Y_i(d)$ in [`econometrics` 3.1](../econometrics/lessons/03-01-potential-outcomes-identification.md) is the value $Y_i$ takes under an intervention setting treatment to $d$, and randomization is the paradigm intervention.
- **On 4.2's cases,** it rules out the [needle](#barometer-case), the [hex](#hexed-salt) and the [pills](#birth-control-pills-case).

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Structural equations

**One breakable line per mechanism, so that an intervention replaces one line and leaves the rest alone.**

Woodward's machinery, shared with Pearl. For the [barometer](#barometer-case), with each $U$ an unmodelled cause and each $f$ a function:

$$D=U_D,\qquad B=f_B(D,U_B),\qquad S=f_S(D,U_S).$$

Intervening replaces the line for $B$ with $B=b$, written $\mathrm{do}(B{=}b)$. Then

$$P(S\mid\mathrm{do}(B{=}1))=\sum_{d}P(S\mid B{=}1,D{=}d)\,P(D{=}d)=0.7(0.2)+0.1(0.8)=0.22.$$

The chain $B\to D\to S$ would give 0.515. One table, two graphs, two predictions.

In statistics and epidemiology this sum is the working tool: given a graph, it says what to adjust for to estimate an effect from observational data (Spirtes, Glymour and Scheines, 1993; Pearl, 2000). It says what to compute, not what causation is.

- **For a variable $X$ and an outcome $Y$, $P(Y\mid X)$ is not $P(Y\mid\mathrm{do}(X{=}1))$.** Intervening replaces the line for $X$, so whatever used to drive $X$ keeps its own distribution.
- **Naive comparison against effect.** For the needle, $P(S\mid B)-P(S\mid\neg B)=192/481\approx0.399$, the effect is 0, and all of it is selection term in the sense of [`econometrics` 3.1](../econometrics/lessons/03-01-potential-outcomes-identification.md).

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Invariance

**A generalization is invariant if it keeps holding when its variables are changed by interventions, over some range.**

For Woodward a generalization explains only if invariant under some interventions. Hooke's law holds until the spring deforms, gravitation over a far wider range, and neither needs to be an exceptionless law. It comes in degrees. Lucas's 1976 critique says relations like the Phillips curve lack it under changes of policy ([`grad-macro` 4.5](../grad-macro/lessons/04-05-nk-phillips-curve.md)).

**In place of laws (4.4).** James Woodward and Christopher Hitchcock (2003) replace laws with generalizations invariant under interventions over some range, allowing that this may be read as reconceiving lawhood. On that view Mendel's law explains because it is invariant across the crosses at issue.

- **Invariant does not mean exceptionless.** For Woodward a generalization can hold over a narrow range and still explain within it.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md), [4.4](lessons/04-04-laws-in-the-sciences.md)

### Explanatory depth

**The best explanation tells you the most about what would have differed.**

Hitchcock and Woodward (2003) count answers to Woodward's "what-if-things-had-been-different" questions. Newton beats Galileo's $v=gt$ (speed $v$ after time $t$ at constant acceleration $g$) on a falling body, because he says how the fall depends on Earth's mass and the distance.

- **Scope alone adds nothing.** Galileo's law conjoined with Boyle's says no more about what a gas's pressure depends on.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Functional explanation

**Explaining a trait or part by what it does: "hearts are there to pump blood."**

Carl Hempel ("The Logic of Functional Analysis", 1959) argued that inferring a trait from the need it meets affirms the consequent, since a functional equivalent might meet it. Ernest Nagel (*The Structure of Science*, 1961) read such claims as necessary conditions: no chlorophyll, no starch. Then the question changed: [etiological function](#etiological-function), [selected-effect function](#selected-effect-function), [systemic function](#systemic-function).

**Is it causal?** On Wright's reading yes, through the history of earlier tokens. On Cummins's it is what Salmon (1984) called constitutive explanation, how parts make up a whole: the parts interact causally, but their relation to the whole is usually counted non-causal.

**Where the accounts stop.** A brand-new beneficial mutation has a Cummins function and no selected one, and a heart's thump gets a Cummins function once someone picks a capacity it serves. Selection theorists say only history makes sense of a heart that fails at its job; Cummins rejects the demand.

- **In social science,** the version with Elster's loop is [`social-theory` 1.2](../social-theory/lessons/01-02-functional-explanation-and-its-critics.md).

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Etiological function

**A part's function is the effect that explains why the part is there.**

Larry Wright, "Functions" (1973): the function of X is Z iff X is there because it does Z, and Z is a consequence of X's being there. On this reading a function claim is causal, through the history of earlier tokens.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Selected-effect function

**A part's function is the effect it was selected for.**

Selected-effect theories (Millikan, 1984; Neander, 1991) fill the "because" in [Wright's definition](#etiological-function) with selection.

- **A brand-new beneficial mutation has no selected function.**
- **Malfunction.** Selection theorists say only history makes sense of a heart that fails at its job.
- **Aristotle's successor?** He argued from "always or for the most part" that natural regularities are coincidences or for an end ([`ancient-medieval-philosophy` 3.2](../ancient-medieval-philosophy/lessons/03-02-nature-and-the-four-causes.md)). Selected-effect function is the Darwinian successor: either the third option he left out, a regular result with nobody aiming, or what "for the sake of" turns out to mean. That is disputed.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Systemic function

**A function statement explains a system's capacity by decomposing it, not why the part is there.**

Robert Cummins, "Functional Analysis" (1975), against [Wright](#etiological-function): traits arise by mutation, so a function statement does not say why the part is there. This is what Salmon (1984) called constitutive explanation.

- **Liberal.** A brand-new beneficial mutation has a Cummins function, and a heart's thump gets one once someone picks a capacity it serves.
- **Malfunction.** Cummins rejects the demand that an account of function make sense of a heart that fails at its job.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Unification account

**To explain is to reduce what must be accepted as given, deriving much from few stringent patterns.**

Michael Friedman ("Explanation and Scientific Understanding", 1974): understanding grows as the number of independently acceptable assumptions falls, which is what the kinetic theory does for the gas laws. His count broke down (Kitcher 1976; Salmon adds that nearly any law splits into separately supported halves). Philip Kitcher ("Explanatory Unification", 1981; "Explanatory Unification and the Causal Structure of the World", 1989) counted [patterns](#argument-patterns) of derivation instead: a derivation explains if and only if it instantiates a pattern in the [explanatory store](#explanatory-store).

**Kitcher's 1989 addition.** No causal order stands behind this for explanations to answer to, because our causal judgments are downstream of the systematizing.

**What its defenders say it buys,** beyond [4.2](lessons/04-02-causal-explanation.md)'s causal accounts: explanations of laws by laws, room for [non-causal cases](#non-causal-explanation), thrift about causation, and a treatment of [the flagpole](#flagpole-and-shadow).

**Where the pressure falls: Eric Barnes (1992).** Take time-symmetric mechanics applied to a closed system. Deriving the planets' present state from their future state uses the same pattern and the same kind of premise as deriving the future from the present, so the two are equally unified, yet only one seems to explain. The strongest reply, open to a unificationist though not Kitcher's own: fundamental time-symmetric physics has no explanatory direction, and the asymmetry we feel comes from elsewhere. That concedes that unification alone does not deliver every causal judgment. The critic concedes that direction is not written into those equations, and owes an account of where it comes from.

- **Stronger than a virtue.** [`philosophical-method` 2.1](../philosophical-method/lessons/02-01-inference-to-the-best-explanation.md) lists explanatory scope as one virtue of a hypothesis. The claim here is that unification is what explaining *is*.
- **Not Whewell.** See [consilience](#consilience-of-inductions).

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md), [4.5](lessons/04-05-reduction-and-emergence.md)

### Consilience of inductions

**A hypothesis built to fit one kind of fact turns out, unforeseen, to fit a different kind: for Whewell, a test of its truth.**

William Whewell, *The Philosophy of the Inductive Sciences* (1840), vol. II, Book XI, ch. V, art. 11, p. 230:

> "No false supposition could, after being adjusted to one class of phenomena, so exactly represent a different class, when the agreement was unforeseen and uncontemplated."

Three phrases from the passage decide what it claims.

- **"A kind different"** rules out more instances of the same kind.
- **"Adjusted to one class … unforeseen and uncontemplated"** adds a timing condition: a hypothesis built to fit both classes earns nothing extra. An ancestor of [novel prediction](#novel-prediction).
- **"The point where truth resides"** shows the kind of claim, a test of truth. Despite his word "explain", Whewell is not saying what an explanation is.

His showpiece is Newton: the inverse-square attraction inferred from Kepler's third law gave the first two as well, and gravitation inferred from perturbations also delivered the precession of the equinoxes.

- **Consilience and Kitcher's unification are not one idea.** Whewell's is a test of truth with a timing condition. Kitcher's is an account of what explaining is, with no timing clause.
- **His word "certain"** is what the pessimistic induction of [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) tests.

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Argument patterns

**One form of derivation, used again and again: a schematic argument whose blanks are governed by filling instructions.**

Philip Kitcher (1981, 1989). A pattern unifies only if it is **stringent**, restricting what may instantiate it ([spurious unification](#spurious-unification)). Example: the "origin and development" pattern, which traces any object's dimensions to how it arose and changed ([flagpole](#flagpole-and-shadow)).

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Spurious unification

**A pattern that fits anything unifies nothing.**

The worry behind Kitcher's stringency requirement. The lesson's illustration: "it had to be so", applied to anything, fits everything.

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Explanatory store

**The best systematization of what we accept at a time.**

Kitcher's $E(K)$ is the set of [argument patterns](#argument-patterns) that best unifies $K$, the beliefs accepted at a time: most conclusions, fewest patterns, greatest stringency. A derivation explains if and only if it instantiates a pattern in $E(K)$.

- **No exchange rate.** Kitcher offers no general formula for trading off the three criteria.

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Pragmatic theory of explanation

**An explanation is an answer to a question somebody actually asked, and context decides which question that is.**

Bas van Fraassen, *The Scientific Image* (1980), ch. 5. An explanation is an answer to a [why-question](#why-questions), and context, not theory and fact alone, fixes the [contrast class](#contrast-class) and the [relevance relation](#relevance-relation). So being an explanation is a three-term relation among theory, fact and context, and explanatory power is a pragmatic virtue, no further reason to believe a theory true ([5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)). His tower story is at [flagpole and shadow](#flagpole-and-shadow).

**The objection.** Kitcher and Salmon ("Van Fraassen on Explanation", 1987): nothing restricts $R$. Define "astral influence" and the stars explain the hour of a death; for any true $A$ and $P$, some relation makes $A$ explain $P$.

**The reply.** Context includes current science, which excludes astral influence.

**The rejoinder.** Then a scientific explanation is any that uses accepted science and an accepted relation, which gives no help when scientists dispute whether a true model explains. Van Fraassen's side answers that if no non-trivial constraint exists, lacking one is no fault.

- **He does not say anything explains anything.** He requires a true answer that favours the topic and beats its rivals. "Anything" is Kitcher and Salmon's charge about the unconstrained $R$, and whether his conditions suffice is the dispute.
- **Contrast-sensitivity alone does not refute Hempel and Salmon.** A contrast class only says which explanandum is wanted, and they can accept that. The pragmatic thesis needs more: with the explanandum fully fixed, whether $A$ explains it still varies with interests.
- **Open list.** [`ancient-medieval-philosophy` 3.2](../ancient-medieval-philosophy/lessons/03-02-nature-and-the-four-causes.md) gave a thing as many causes as there are kinds of why-question. Here the list of kinds stays open.

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Why-questions

**What you are asking about, rather than what, and what would count as an answer.**

Van Fraassen (1980, ch. 5) writes a why-question as a triple:

$$Q = \langle P_k, X, R \rangle$$

$P_k$ is the topic, $X$ the [contrast class](#contrast-class), $R$ the [relevance relation](#relevance-relation). A direct answer says "$P_k$, in contrast to the rest of $X$, because $A$", with $A$ bearing $R$ to $\langle P_k, X\rangle$. It is judged by whether $A$ is true, how far it favours $P_k$ over the rest of $X$, and how it fares against rival answers.

- **Keep the slots apart.** $A$ is the answer. $R$ is the *kind* of fact sought, and $X$ holds alternatives to the topic, not candidate causes.

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Contrast class

**The alternatives the topic is set against: why this, rather than what?**

$X$ in a [why-question](#why-questions). An answer favours $P_k$ over the rest of $X$. Lesson 4.3 turns the "$x$ rather than $x'$" of [interventionism](#interventionism) into a contrast class.

**Worked (4.3 Example 1).** The topic is that the sky is blue, $R$ is physical cause, $X$ varies. Physics in [`atmospheric-science` 3.4](../atmospheric-science/lessons/03-04-scattering-rayleigh-mie-aerosols.md).

| Blue rather than | Answer |
|---|---|
| red | Rayleigh scattering grows as $\lambda^{-4}$, where $\lambda$ is wavelength |
| black, as on the Moon | there is air to scatter sunlight |
| violet | not scattering, since by $\lambda^{-4}$ violet at 400 nm out-scatters blue at 450 nm by $(450/400)^4 \approx 1.60$; the Sun emits less violet and our eyes are weak there |

The complete answer to the first row points the wrong way on the third.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md), [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Relevance relation

**The kind of fact wanted in reply: cause, function, mathematical dependence, and so on.**

$R$ in a [why-question](#why-questions), fixed by context. The dispute with Kitcher and Salmon is whether anything but context limits it ([pragmatic theory](#pragmatic-theory-of-explanation)).

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Explanatory pluralism

**Decline to pick: more than one kind of thing counts as explaining.**

Wesley Salmon ("Scientific Explanation: Causation and Unification", 1990) treats exposing mechanisms and unifying as two complementary virtues. Others note that practice varies by field: biologists often seek mechanisms, physicists laws.

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Non-causal explanation

**An explanation in which a premise that causes nothing, often a mathematical one, seems to do the work.**

**Worked (4.3 Example 2, the honeycomb).** Why are comb cells hexagonal in cross-section, rather than square or triangular? A standard answer (Lyon and Colyvan 2008) combines two premises. Selection favoured cells using less wax. And by Thomas Hales's honeycomb theorem (2001), the regular hexagonal grid has the least perimeter of all ways to divide a plane into equal areas. At unit area the perimeters are 4.56 (triangle), 4 (square) and 3.72 (hexagon): 6.9 percent less wall than squares. Only one premise is non-causal, so this is not a *purely* mathematical explanation.

- **Unification.** One stringent pattern, "a cost is selected down; a theorem says which form minimizes it", re-usable across traits. But counting patterns cannot say whether the theorem explains or merely book-keeps.
- **Causal.** The theorem causes nothing. You can intervene on wax cost, but the dependence of perimeter on shape is non-contingent (Woodward 2018). Michael Strevens (2018) replies that the mathematics only represents constraints on causal processes, so the explanation stays causal. The causal account says what selection did, but not why a theorem seems to be what answers "rather than squares".
- **Pragmatic.** Van Fraassen says these are two questions: why hexagons rather than squares, and how this comb got its shape (still disputed since D'Arcy Thompson's packing idea). His critics reply that each question, once fixed, still has one correct answer.

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Counterfactual support

**A law tells you what would have happened had things been different; an accident does not.**

Two true statements about one lift: everyone in it is wearing a coat; everyone in it is pulled toward the floor. Had a coatless courier stepped in, the first fails and the second doesn't. Traditionally a law does three jobs an accident can't: it supports counterfactuals, it can explain its instances, and those instances license **projection** to unexamined cases. That is the [lawlike and accidental](#lawlike-and-accidental-generalizations) split of [1.2](lessons/01-02-the-new-riddle-of-induction.md).

**How tightly lawhood ties to confirmation is open.** Nelson Goodman (*Fact, Fiction, and Forecast*, 1955) held that only lawlike statements are confirmed by their instances. Two counterexamples press it.

- **Dretske (1977).** Once a fair coin's first nine flips land heads, "all ten land heads" has risen from $1/1024$ to $1/2$, with the tenth flip still even.
- **Jackson and Pargetter (1980).** If fifty men in a room say they are third sons, expecting the next to say so is reasonable, against 1.2's example.

Armstrong and Dretske keep a stronger link: projection to the unexamined runs through a law inferred as the best explanation of the instances. Sober and van Fraassen reply that with the right background beliefs almost anything can be confirmed.

- **The test leans on background belief.** The record cannot separate the two generalizations in [Popper's moa](#poppers-moa).
- **The three jobs may come apart** ([pragmatic laws](#pragmatic-laws)).

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md)

### Gold and uranium spheres

**Two true generalizations of the same form: no gold sphere is a mile across, and no uranium-235 sphere is either. Only the second is enforced.**

Stated and scored on all three theories of laws in [`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md) Example 2: every gold sphere is less than a mile in diameter; every uranium-235 sphere is less than a mile in diameter. A uranium sphere that size is many critical masses and cannot persist. The gold claim is an accident of how much gold there is and what anyone did with it.

In 4.4 the pair is a point on the map of generalizations: scope and necessity are separate axes, since the gold spheres are universal and accidental.

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md)

### Popper's moa

**A true universal generalization that is no law: a virus saw to it that no moa reached fifty, though moas could have lived longer.**

Karl Popper, *The Logic of Scientific Discovery* (1959, appendix \*x). He supposes that the moa, an extinct New Zealand bird, could live sixty years or more in good conditions, but that a virus saw to it that no moa ever reached fifty. Then "all moas die before fifty" is true of every moa, and it is no law. The partner generalization is the lesson's and not Popper's, supposing physiology forbids a moa that old.

| Generalization | Had the virus been absent | Verdict |
|---|---|---|
| Die before fifty | some would have passed fifty | accidental |
| Die before five hundred | none would have reached it | lawlike |

Same form, same subject, both true. Every dead moa is an instance of both, so the record cannot separate them: the separating is done by what we believe about moa bodies.

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md)

### Ceteris paribus laws

**A generalization qualified by "other things equal", because without the hedge it has exceptions.**

A clause is *comparative* if other factors are held fixed and *exclusive* if disturbing factors are absent (Gerhard Schurz, 2002; Cartwright's "other things being right").

**Why the hedge is wanted.** Stated without one, generalizations outside physics are false: Mendel's first law meets genes that bias their own transmission, the law of demand meets Giffen goods. Nancy Cartwright (*How the Laws of Physics Lie*, 1983) extends this to physics: Snell's law holds only in isotropic media, and laws read as statements of fact are false, while amended to be true they cover few cases. Earman and Roberts reject that extension.

**What it faces and the replies.** The [falsity-or-triviality dilemma](#falsity-or-triviality-dilemma). Give the hedge content: [independent confirmability](#independent-confirmability-condition); Marc Lange (*Natural Laws in Scientific Practice*, 2000), who ties the hedge to a discipline's policy about which interferers matter, not to excuses added afterwards; or [tendencies](#tendency-laws). Deny that contingency disqualifies: [Sober](#evolutionary-contingency-thesis), [Mitchell](#pragmatic-laws). Drop the word: [invariance](#invariance).

- **Not "usually".** Earman, Roberts, Pietroski and Rey all treat it as a condition. Reading it as high probability is a rival proposal (Schurz's normality theory).
- **Not a [tendency law](#tendency-laws).** The first exempts cases. The second says the cause operates in every case, even when outweighed.
- **Dispositional essentialism** makes hedged laws the expected case, through masking ([`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md)).
- **A toy case (4.5).** In Conway's Life, the autonomist says a [glider](#weak-and-strong-emergence)'s law, holding wherever the neighbourhood is empty and supporting counterfactuals, is what a ceteris paribus law looks like.
- **The law of demand** is 4.4's hard case. Whether it is a law, and whether it explains, the lesson leaves to Boss 4(d).

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md), [4.5](lessons/04-05-reduction-and-emergence.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Falsity-or-triviality dilemma

**The hedge that saves the claim empties it.**

Make the exclusion a finite list and the law is strict and probably false. Leave it open, "unless something interferes", and it says that any $A$ is a $B$ unless it isn't, for properties $A$ and $B$. This is Marc Lange's statement (1993) of a problem he credits to Hempel's 1988 paper on provisos.

**The hard line.** John Earman and John Roberts ("Ceteris Paribus, There Is No Problem of Provisos", 1999; with Smith, 2002): fundamental physics, if true, has proviso-free laws, and hedged sentences lack clear content and cannot be tested.

The dilemma is one premise of a composite case that only fundamental physics has laws. Earman and Roberts press that premise and the one before it (unhedged, the claims are false), Beatty the [contingency](#evolutionary-contingency-thesis) premise. No one author holds all of it.

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Independent confirmability condition

**A ceteris paribus law is non-vacuous if every failure is explained by something you could confirm apart from that failure.**

Paul Pietroski and Georges Rey (1995). With $A$ and $B$ the properties the law connects, it is non-vacuous when $A$ and $B$ are otherwise nomological, every $A$ that is not $B$ has its failure explained by a factor confirmable independently of that failure, and the law explains something.

**The objection.** Earman and Roberts answer that a hedged "all spherical bodies conduct electricity" passes, since molecular structure explains each failure.

- **"Explained by some factor" is not enough.** The factor must be confirmable apart from the failure.

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md)

### Tendency laws

**The law states what a cause contributes in every case, outweighed or not.**

Mill's tendency laws and Cartwright's capacities remove the exemption that a ceteris paribus clause grants. The owner of tendencies is [`philosophy-of-economics` 6.1](../philosophy-of-economics/lessons/06-01-idealization-and-isolation.md). Peter Lipton (1999) objects that specifying what triggers a tendency brings the clause back.

- **Not a [ceteris paribus law](#ceteris-paribus-laws).** The two disagree about a Giffen good: on Mill's reading the substitution effect is a tendency present in every case, outweighed in Giffen cases; on a ceteris paribus reading those cases are exempted.

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Evolutionary contingency thesis

**Distinctively biological generalizations describe contingent outcomes of evolution: replay evolution and the rule differs.**

John Beatty (1995): generalizations about the living world are either just mathematics, physics or chemistry, or distinctively biological, and then they describe contingent outcomes of evolution. Nothing in nature necessitates them.

- **Weakly contingent:** the conditions that made a trait common can change.
- **Strongly contingent:** the same conditions and selection pressures can yield functionally equivalent alternatives.

**Sober's reply** ("Two Outbreaks of Lawlessness in Recent Philosophy of Biology", 1997). If historical conditions $I$ made "if $F$ then $G$" true, the law is the conditional (if $I$ obtains, then thereafter if $F$ then $G$), which need not be contingent. He leaves open that a law may be a priori. He reports agreeing with Beatty that there are no empirical laws of evolution, and differing on what a law may be.

**Mendel's law (4.4 Example 2).** Fair segregation is itself a genetic trait under selection, and segregation distorters exist. On Beatty's thesis nothing necessitates the even split, so it is no law. Nothing in the thesis denies that it explains a given cross.

- **Not the metaphysician's "contingent".** The best-system and necessitation accounts already make the laws of physics metaphysically contingent. Beatty means contingent on evolutionary history, which is how he keeps those laws and denies biology's.
- **Is the dispute verbal?** ([`philosophical-method` 3.2](../philosophical-method/lessons/03-02-distinctions-and-verbal-disputes.md).) Beatty holds that the word "law" marks a real difference in what nature necessitates. [Mitchell](#pragmatic-laws) denies that the difference is one of kind.

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Pragmatic laws

**Lawhood is not all-or-nothing: generalizations vary continuously in how stable their conditions are and how strongly those conditions determine the result.**

Sandra Mitchell ("Pragmatic Laws", 1997; *Biological Complexity and Integrative Pluralism*, 2003). Against [Beatty](#evolutionary-contingency-thesis): physics is contingent too, since Fourier's law of heat conduction presumes a universe out of thermal equilibrium.

**Her objection to the strict view.** The three jobs of a law ([counterfactual support](#counterfactual-support)) come apart. Mendel's law explains and projects across a wide but bounded range while failing the necessity test, so a definition only fundamental physics can meet is a stipulation that leaves biology's success unexplained.

**The strongest reply.** If lawhood comes in degrees it stops marking a difference in what nature does, and "law" becomes a compliment.

**What each concedes.** Mitchell: physics and biology may still occupy distinct regions of her space. The strict side: most working science then explains and projects without laws, which puts the burden on the [D-N model](#deductive-nomological-model)'s requirement of a law.

- **She does not call every useful generalization a law.** She rejects extending the title by decree as firmly as the all-or-nothing norm.
- **On Mendel:** it functions as a law over a known range, and the range is what you must know before relying on it.
- **Against the theories of laws.** Her target is a single test for lawhood; the lesson adds that each theory at [better best system](#better-best-system) offers one, so on her approach the question which fits is misposed.

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md)

### Better best system

**A best-system account run separately for each science, in that science's own vocabulary.**

Jonathan Cohen and Craig Callender (2009): each science gets its own vocabulary, so Mendel's law can be biology's. John Roberts (2008) replies that nobody weighs simplicity against strength among rival true systems.

**How the three theories of laws fit scientific practice.** The theories themselves belong to [`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md).

- **Best system.** As above. Armstrong's charge that Humean laws cannot explain their instances gets Barry Loewer's reply (2012): the mosaic grounds the laws metaphysically, and the laws explain the mosaic scientifically, so no circle arises.
- **Necessitation $N(F,G)$.** It gives projection a direct route through the necessitation relation between properties $F$ and $G$. But most generalizations biologists and economists use are then laws only derivatively, if at all.
- **Dispositional essentialism.** Masking makes hedged laws the expected case. But its fundamental laws are necessary and Beatty's generalizations are not, so biology's rules come out as arrangements of powers.

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md)

### Nagelian reduction

**Say what the old science's words come to in the new one's vocabulary, then show that the old laws follow as theorems.**

Ernest Nagel, *The Structure of Science* (1961), ch. 11. It is the [D-N model](#deductive-nomological-model) aimed at a law instead of an event, so it inherits the charge that derivation is not explanation. A secondary theory $T_S$ reduces to a primary theory $T_P$ when:

- **N1. Connectability.** Each term of $T_S$ absent from $T_P$ is tied to terms of $T_P$ by an added assumption, a [bridge law](#bridge-laws).
- **N2. Derivability.** From $T_P$, the bridge laws and boundary conditions, the laws of $T_S$ follow deductively.
- **N3. Non-formal conditions.** The premises are independently well supported, and $T_P$ suggests ways to extend or correct $T_S$. A valid deduction from an arbitrary stipulation is no reduction.

If $T_S$ adds no new terms the reduction is *homogeneous* and needs no bridges.

**Correction.** Kenneth Schaffner's model and Nagel's own 1970 paper let the derived law be a corrected approximation of the old one, answering Paul Feyerabend's 1962 charge that the model left no room for correction.

**Worked (4.5 Example 1).** For $N$ molecules of mass $m$ bouncing elastically in volume $V$, with $\langle v^2\rangle$ the mean squared speed and $\langle E_k\rangle = \tfrac12 m\langle v^2\rangle$ the mean kinetic energy:

$$p = \frac{1}{3}\frac{N}{V}\,m\langle v^2\rangle, \quad\text{so}\quad pV = \frac{2}{3}N\langle E_k\rangle.$$

"Temperature" is not a word of mechanics, so N1 demands a bridge, $\langle E_k\rangle = \tfrac32 k_BT$, with $k_B$ Boltzmann's constant. Substituting gives $pV = Nk_BT$, which meets N2. What it needed is at [bridge laws](#bridge-laws).

- **Reduction does not abolish what it reduces.** Temperature is still real after kinetic theory. Phlogiston, which was dropped, is replacement.
- **The challenge from physically unlike realizers** is at [multiple realizability](#multiple-realizability).

*Lessons:* [4.5](lessons/04-05-reduction-and-emergence.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Bridge laws

**The added statements that tie a term of the old science to terms of the new one.**

N1 of [Nagel's model](#nagelian-reduction). Nagel lists three things a bridge might be: a meaning connection, a convention, or a factual hypothesis.

**What the temperature bridge $\langle E_k\rangle = \tfrac32 k_BT$ needed (4.5 Example 1).**

- **Factual, on the lesson's reading.** Thermometers fixed "temperature" long before anyone connected it to molecular motion, so the link could have been false.
- **Restricted.** It holds for a dilute gas at equilibrium. Radiation and nuclear spins have temperatures with no such story, and the general link is $1/T = \partial S/\partial E$, for entropy $S$ and energy $E$. Lawrence Sklar and John Bickle press the moral: temperature, the showcase reduction, is itself multiply realized.
- **Extra premises.** The second law needs a probabilistic assumption mechanics does not supply, a matter for [`philosophy-of-physics`](../philosophy-of-physics/syllabus.md).

**Must a bridge be a biconditional?** [Fodor's target](#multiple-realizability) demands one physical partner per kind. Robert Richardson (1979) argued that Nagel's derivability needs only one-way links, physical sufficient conditions for each higher predicate, so the derivation can run realizer by realizer. Elliott Sober and Jeremy Butterfield (2011) add that a disjunctive bridge blocks neither deduction nor explanation, though Butterfield reads Nagel himself as wanting the bridge's physical side to be a working term of the reducing theory.

*Lessons:* [4.5](lessons/04-05-reduction-and-emergence.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Token physicalism

**Every event a special science describes is a physical event: nothing non-physical is being smuggled in.**

The first premise of Fodor's argument ("Special Sciences", 1974; see [multiple realizability](#multiple-realizability)).

- **Anti-reductionists grant it.** Fodor and Putnam both do. Of the views in 4.5, only [strong emergence](#weak-and-strong-emergence) says physics must be supplemented by further fundamental laws.
- **What exists, and what explains.** The two questions [`social-theory` 1.1](../social-theory/lessons/01-01-individuals-and-social-facts.md) separated for societies. Almost everyone in 4.5 says only physical things exist. The fight is over what explains.

*Lessons:* [4.5](lessons/04-05-reduction-and-emergence.md)

### Multiple realizability

**One higher-level kind, many physically unlike ways of being it.**

"This routine sorts its input" is true of a run on a phone, on a mainframe, and by a room of clerks with index cards. Jerry Fodor ("Special Sciences", *Synthese*, 1974) extends Hilary Putnam's case against mind-brain identity. For a special-science law $S_1x \to S_2y$, Fodor's target demands

$$S_1x \leftrightarrow P_1x, \qquad S_2y \leftrightarrow P_2y, \qquad P_1x \to P_2y,$$

where each $S_i$ is a special-science kind, each $P_i$ a kind of physics, the biconditionals are [bridge laws](#bridge-laws), and the last is a law of physics.

1. **P1.** Every event a special science describes is a physical event ([token physicalism](#token-physicalism)).
2. **P2.** Reduction requires a bridge law pairing each special-science kind with a single natural kind of physics.
3. **P3.** Many special-science kinds are realized by physically heterogeneous kinds, open-endedly.
4. **P4.** A disjunction of heterogeneous physical kinds is not a natural kind of physics and appears in no law of physics.

∴ **C.** Such laws do not reduce, though P1 stands ([autonomy](#autonomy-of-the-special-sciences)).

**Where the pressure falls: P2.** The challenge is at [bridge laws](#bridge-laws). The strongest reply is that Fodor's worry was never validity: a deduction telling a different physical story for each case shows that the law holds without showing why it holds across cases. The Nagelian concedes that such a reduction is local and gets its unity from the higher kind. The Fodorian concedes that multiple realizability does not block derivation, so the conclusion has become a thesis about explanation.

**Kim and Shapiro.** [Causal inheritance](#causal-inheritance-principle), [local reduction](#local-reduction), [Shapiro's dilemma](#shapiros-dilemma).

- **It is one premise.** Multiple realizability alone does not refute reduction. Temperature is multiply realized and is the textbook reduction. The argument also needs P2 and P4. The Fodorian's reply on temperature: there the realizers share a kind physics does recognize, a slope of entropy.
- **Not the same as weak emergence.** One asks how many physical bases there are, the other whether there is a shortcut ([emergence](#weak-and-strong-emergence)).
- **Elsewhere.** The universality of critical exponents in [`stat-mech` 5.4](../stat-mech/lessons/05-04-critical-exponents-universality.md) is multiple realization in physics. On the mental, [`philosophy-of-mind`](../philosophy-of-mind/syllabus.md).

*Lessons:* [4.5](lessons/04-05-reduction-and-emergence.md)

### Autonomy of the special sciences

**The sciences above physics have laws physics will never state, though physics describes every event.**

Jerry Fodor, "Special Sciences" (*Synthese*, 1974). "Special sciences" means every science but physics, in his usage. It is the conclusion of the argument at [multiple realizability](#multiple-realizability). His illustration is a monetary exchange, the sort of event Gresham's law covers.

**The explanatory arm.** Hilary Putnam ("Philosophy and Our Mental Life", 1975): a square peg fits a square hole and not a round one because of rigidity and geometry. A derivation from the peg's particles would be true of this peg alone and would bury what matters.

**Replies.** Elliott Sober (1999): higher levels buy breadth, lower levels depth, and no objective rule ranks them. In genetics, Philip Kitcher (1984) says chromosome behaviour at meiosis is the explanatory kind and molecular redescription fragments it, and Kenneth Waters (1990) replies that the molecular detail can explain better.

- **Weak emergence does not settle it.** In Conway's Life the reductionist says every fact is a cell fact and "glider" is a label that fails as soon as the glider hits something. The autonomist says a law that holds wherever the neighbourhood is empty, and supports counterfactuals, is what a [ceteris paribus law](#ceteris-paribus-laws) looks like. No fact about the grid divides them.

*Lessons:* [4.5](lessons/04-05-reduction-and-emergence.md)

### Causal inheritance principle

**An instance of a realized kind has just the causal powers of its realizer on that occasion.**

Jaegwon Kim, "Multiple Realization and the Metaphysics of Reduction" (1992). With it, a heterogeneously realized kind has heterogeneous powers and is not [projectible](#projectibility). The conclusion he draws is at [local reduction](#local-reduction).

*Lessons:* [4.5](lessons/04-05-reduction-and-emergence.md)

### Local reduction

**The honest laws hold one type of realizer at a time, and those can reduce.**

Jaegwon Kim (1992). Jade is two minerals, jadeite and nephrite. If every confirming sample of "jade is green" proved to be jadeite, nephrite would be untested. Add [causal inheritance](#causal-inheritance-principle), and the honest laws are local, one per type of realizer.

**Fodor's answer (1997).** Jade is a closed disjunction, while a functional kind's realizers are open-ended and its instances lawfully alike under the higher description.

*Lessons:* [4.5](lessons/04-05-reduction-and-emergence.md)

### Shapiro's dilemma

**Realizers that share what does the job are not multiple; realizers that differ in it have few laws in common.**

Lawrence Shapiro (2000) adds a test and a dilemma.

- **The test.** Steel and aluminium corkscrews are not different realizations, since they differ in nothing that pulls corks.
- **The dilemma.** If realizers share the job-relevant properties they are not multiple. If they differ in them, few laws hold of both.

*Lessons:* [4.5](lessons/04-05-reduction-and-emergence.md)

### Weak and strong emergence

**Weak: fixed by the parts and still surprising, or with no shortcut. Strong: a fact no knowledge of the parts could ever deliver.**

**Strong emergence** (David Chalmers, "Strong and Weak Emergence", 2006). A phenomenon arises from a low-level domain, but truths about it are not deducible even in principle from low-level truths. Complete physics would leave the fact open, so further fundamental laws are needed. Chalmers counts consciousness as the one clear case. Brian McLaughlin (1992) finds no evidence of any such configurational forces.

**Weak emergence.** For Chalmers, truths about the phenomenon are deducible but unexpected. Mark Bedau ("Weak Emergence", 1997) is stricter: a macrostate is weakly emergent just when it can be derived from the microdynamics and external conditions, but only by simulation.

**Background.** Mill's *System of Logic* (8th ed., 1882, III.vi) contrasts forces that add with chemistry: "Not a trace of the properties of hydrogen or of oxygen is observable in those of their compound, water." C. D. Broad (1925) built this into a doctrine, and quantum chemistry and molecular biology later eroded its examples.

**P. W. Anderson** ("More Is Different", *Science*, 1972) accepts reduction and rejects its supposed converse, which he calls "constructionism": knowing the fundamental laws does not let you rebuild large aggregates from them. A crystal or a superconductor lacks the symmetry of its own laws, and sharp phase transitions are defined only as particle number goes to infinity.

**Worked (4.5 Example 2, Conway's Game of Life, 1970).** A live cell survives with two or three live neighbours, a dead cell wakes with exactly three, and every other cell ends up dead. A **glider** has five cells and returns to its own shape every 4 generations, shifted one cell diagonally, so at generation $4k$ it has moved $(k,k)$. The **R-pentomino**, also five cells, churns for 1,103 generations before its population settles at 116, with 6 gliders flying off. The lesson's run of the definitions:

| | Strong | Chalmers-weak | Bedau-weak |
|---|---|---|---|
| Lone glider | no | yes | no: four generations and an induction give every future position |
| R-pentomino | no | yes | yes: as far as anyone knows, you have to run it |

The glider is Chalmers's own example.

**Where it strains.** Bedau insists his modality is not about our ignorance: what matters is whether a shortcut derivation exists. Yet nobody has proved that none exists for the R-pentomino. What is proved is general: Life can embed a universal computer, so no algorithm decides stabilization for arbitrary seeds.

- **Anderson does not reject reductionism.** He accepts reduction and rejects construction.
- **Weakly emergent does not mean [multiply realized](#multiple-realizability).** The two terms answer different questions: is there a shortcut, and how many physical bases are there?
- **Weak emergence does not settle [autonomy](#autonomy-of-the-special-sciences).**
- **Applied to the mental** in [`philosophy-of-mind`](../philosophy-of-mind/syllabus.md).

*Lessons:* [4.5](lessons/04-05-reduction-and-emergence.md)

**Module 5: Scientific realism**

### Scientific realism

**Our best theories are roughly right about the world, including the parts nobody can see.** The view bundles [three theses](#three-theses-of-realism): a mind-independent world, a literal reading of theories, and approximate truth for the mature, successful ones. You can keep the first two and reject the third, and much of the debate lives in that gap. Bas van Fraassen states the view he opposes this way (*The Scientific Image*, 1980): science aims at a literally true story, and acceptance is belief in that story.

- **Trap: not "our theories are true".** The epistemic thesis says mature theories are [approximately true](#approximate-truth). Many realists grant that most past theories, and perhaps our best ones strictly speaking, are false.
- **Trap: the first two theses are not distinctive.** Van Fraassen keeps the semantic one.
- **The options.** Standard realism believes all of a mature theory, approximately; [selective](#selective-realism), [structural](#structural-realism) and [entity](#entity-realism) realism each believe part of it. [Constructive empiricism](#constructive-empiricism) stops at the observable, [instrumentalism](#instrumentalism) denies the literal reading, and the [natural ontological attitude](#natural-ontological-attitude) declines to add a gloss.

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Three theses of realism

**Realism joins a claim about the world, a claim about meaning and a claim about knowledge, which can be held or denied separately.** Stathis Psillos, *Scientific Realism: How Science Tracks Truth* (1999), Introduction.

- **Metaphysical.** The world science studies exists independently of minds. Denied by idealism, and by neo-Kantian views that tie the studied world to our frameworks.
- **Semantic.** Theoretical claims are read literally, as true or false, including claims about unobservables: "electron" talk means what it says. Denied by classical [instrumentalism](#instrumentalism).
- **Epistemic.** Mature, predictively successful theories are approximately true, so what they posit, or something close to it, exists. Denied by [constructive empiricism](#constructive-empiricism), which keeps the semantic thesis.

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Observable and unobservable

**Observable is what unaided human senses could perceive in favourable conditions; unobservable is what they could not.** That is 5.1's working line. Van Fraassen's criterion in 5.4: something is observable if a member of the human community, suitably placed, would perceive it unaided. Realism gives the line no epistemic weight; its opponents do.

- **Trap: observable is not observed.** A rock on the far side of the Moon is observable whether or not anyone has looked. An electron is unobservable however many tracks it leaves.
- **The object decides, not the instrument.** Jupiter's moons are observable because an astronaut near Jupiter could see them unaided. A red blood cell is not, since nobody can stand anywhere from which it is visible unaided.
- **The line is drawn from inside science.** No astronaut has been to Jupiter: that the moons could be seen is something our best theories of moons and eyes tell us. Monton and van Fraassen (2003) accept that circle as unavoidable.
- **Pressed by** [Maxwell's continuum](#maxwells-continuum) (the line is arbitrary), [entity realism](#entity-realism) (it is in the wrong place), and Paul Churchland (1985), who asks why size should matter when distance does not: things too far to see count as observable because we could go there, things too small do not because we cannot shrink, and that is a contingent fact about human bodies.
- **At full scale:** Wilfrid Sellars's contrast of the manifest and scientific images asks which picture says what exists ([`phenomenology-and-personalism` 1.4](../phenomenology-and-personalism/lessons/01-04-the-lifeworld-and-the-crisis-of-the-sciences.md)).

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### No-miracles argument

**Approximate truth is the best explanation of science's success; a false theory's success would be a miracle.** Hilary Putnam's claim (*Mathematics, Matter and Method*, 1975, p. 73) compared philosophies: realism alone does not make the success of science a miracle. He credited Richard Boyd, whose version ("The Current Status of Scientific Realism", 1984) starts from method: scientific methods lean on background theories, and their reliability is best explained by those theories being approximately true.

In outline: mature theories are strikingly successful, above all in [novel prediction](#novel-prediction), and that is surprising (P1); if they were approximately true, their success would be a matter of course (P2); no rival explains that success as well (P3); so, provisionally, mature theories are approximately true (C).

- **Trap: not an induction.** It does not project the next case from past cases; it infers what would account for a whole pattern. The [pessimistic induction](#pessimistic-induction) is the induction. The schema is [`philosophical-method` 2.1](../philosophical-method/lessons/02-01-inference-to-the-best-explanation.md).
- **It is meta-level:** the hypothesis is about theories, the evidence is their record.
- **Ancestors.** Whewell: consilience never yet testified for a hypothesis "afterwards discovered to be false" (*The Philosophy of the Inductive Sciences*, 1840, vol. II). Darwin: "a false theory" could hardly explain so much ([4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)).
- **Attacks, by target.** [Selection](#selection-reply-to-no-miracles) denies the surprise in P1. The [bad lot](#bad-lot-argument) questions P3's step from best to true. The [circularity charge](#circularity-charge) questions the form. The [base-rate objection](#base-rate-objection) denies that C follows.
- **Weakest point, per 5.1:** P3, at the step from "best" to "true". The realist concedes that the inference is only as strong as the case that the field of rivals was adequate. The doubter concedes that the virtues have guided successful practice, and owes an account of why virtues that do not track truth would track empirical success so well.
- **Later uses.** The reductio form of the [pessimistic induction](#pessimistic-induction) withdraws the premise it needs. Worrall grants it as P1 of [structural realism](#structural-realism). 5.4 runs it at the scale of one instrument: why does a machine designed from a story work so well if the story is idle?

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md), [5.3](lessons/05-03-structural-realism.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Selection reply to no-miracles

**Theories compete and only the successful survive, so their success is no more surprising than that surviving organisms are adapted.** Van Fraassen, *The Scientific Image* (1980), p. 40. It attacks P1 of the [no-miracles argument](#no-miracles-argument): only theories that latch onto observable regularities survive, and that needs no truth about the unobservable.

- **Realist reply.** Selection explains why the survivors as a class are successful, not why this theory is.

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Circularity charge

**The no-miracles argument uses inference to the best explanation to vindicate inference to the best explanation, the very step a doubter questions.** Larry Laudan (1981) and Arthur Fine ("The Natural Ontological Attitude", 1984).

- **Reply: rule-circular, not premise-circular.** Psillos (1999, ch. 4), after Braithwaite: no premise says the rule is reliable. Rule-circularity, he holds, is not vicious if using the rule does not guarantee a favourable result and there is no specific reason to doubt it.
- **The cost he grants.** The argument justifies the rule from inside and will not convert someone who has already rejected it.
- **General treatment:** rule-circularity and Salmon's counterinductive rule are [`epistemology` 4.3](../epistemology/lessons/04-03-answering-hume.md).

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Base-rate objection

**Success cannot tell you how likely truth is until you know how rare truth was among the candidates.** Colin Howson, *Hume's Problem* (2000), ch. 3; Peter Lipton, *Inference to the Best Explanation*, 2nd ed. (2004), pp. 196–198; P. D. Magnus and Craig Callender, "Realist Ennui and the Base Rate Fallacy" (2004). Read "miracle" as "very improbable". $P$ is a credence function. For a candidate theory, $T$ is "approximately true", $S$ is "empirically successful", $s = P(S \mid T)$, $f = P(S \mid \neg T)$ is the false-success rate, and $\pi = P(T)$ is the base rate among candidates. Then

$$P(T \mid S) = \frac{s\pi}{s\pi + f(1-\pi)}, \qquad P(T \mid S) \ge \tfrac12 \iff \pi \ge \frac{f}{s+f}.$$

The argument states two of the three numbers: P2 says $s$ is high, and the miracle talk says $f$ is low.

- **5.1's invented figures.** $s = 0.9$, $f = 0.1$, $\pi = 0.02$ give $9/58 \approx 0.155$, with threshold $0.1$. At $f = 0.01$ the posterior is $90/139 \approx 0.647$ and the threshold $1/91 \approx 0.011$.
- **Trap: it does not show successful theories are probably false.** It shows that $s$ and $f$ do not fix the posterior. It gives no reason to think $\pi$ is small.
- **What are the candidates?** The formula gives a verdict once $\pi$ and $f$ are fixed; nothing in it says which population is right.
  - Psillos (*Knowing the Structure of Nature*, 2009) grants the base rate cannot be measured, because "theory", "success" and "approximate truth" do not individuate a countable population, and he reads "miracle" as unexplained, not improbable.
  - Howson ("Exhuming the No-Miracles Argument", 2013) answers that without a prior the argument delivers no high posterior.
  - Leah Henderson (2017) denies that theories are sampled at random.
  - Richard Dawid and Stephan Hartmann (2018): $P(T \mid S) > \tfrac12$ whenever $P(S) > 2f$, where $P(S) = s\pi + f(1-\pi)$, trading $\pi$ for the success rate of selected theories.
  - Keith Dyck (2023) replies that selection raises $f$ too.
  - As 5.1 leaves it, each side lacks the number; neither has shown it small or large.
- **Turned around** against the pessimist: the [false positives objection](#false-positives-objection).
- **Background.** Bayes on a rare condition is [`prob-stat-refresher` 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md); the odds form is [`philosophical-method` 2.4](../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md).

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Bad lot argument

**The best theory on hand may be only the best of a bad lot.** Van Fraassen, *Laws and Symmetry* (1989), p. 143: ranking the theories on hand shows nothing unless the truth is likely to be among them, a privilege nobody has established. He counts simplicity and explanatory power as reasons to use a theory, not to believe it. The target is P3 of the [no-miracles argument](#no-miracles-argument).

- **Reply: good enough as well as best** (Alan Musgrave, 1988; Lipton, "Is the Best Good Enough?", 1993), so that winning a poor field earns nothing.
- **See also:** [`philosophical-method` 2.1](../philosophical-method/lessons/02-01-inference-to-the-best-explanation.md), which named the best of a bad lot, and [unconceived alternatives](#unconceived-alternatives).

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Likeliest and loveliest

**The likeliest explanation is the best warranted; the loveliest is the one that would give most understanding if true.** Peter Lipton, *Inference to the Best Explanation* (2nd ed., 2004). The loveliest is not by definition the likeliest, and the inference needs the first to guide us to the second.

- **The open question:** do the explanatory virtues track truth, or only convenience? The course leaves it open.

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Wholesale and retail arguments

**Wholesale arguments concern science at large; retail arguments concern particular theories on particular evidence.** Magnus and Callender (2004) draw the moral that wholesale arguments are stuck, and that the arguments worth having are retail.

- **The retail example.** Jean Perrin began counting microscopic grains at different heights in a suspension in 1908, and by about 1912 could reach Avogadro's number by thirteen routes in close agreement, among them Brownian motion, the blue of the sky and radioactivity. Wilhelm Ostwald, long an opponent of atoms, conceded. 5.1 calls this atom-realism's best case, and notes that even it needs a prior of its own.
- **Particular theories** go to [`philosophy-of-physics`](../philosophy-of-physics/syllabus.md).

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Pessimistic induction

**Many successful theories of the past had central terms that refer to nothing, so success is no reliable mark of truth.** The modern locus is Larry Laudan, "A Confutation of Convergent Realism" (*Philosophy of Science*, 1981), with [his list](#laudans-list). He never calls his argument an induction; the label descends from Hilary Putnam (*Meaning and the Moral Sciences*, 1978). The literature reconstructs it two ways.

- **As an induction.** Many past successful theories had central terms that, by current lights, do not refer, so they were not even approximately true (P1). Ours are no different in kind (P2). So probably ours will go the same way (C1).
- **As a reductio** (Psillos's and Lewis's reading). Assume a successful theory is probably approximately true (P3). Then current successful theories are (P4). Then past theories that differ from them fundamentally were not (P5). Many such past theories were successful (P6). So success is not a reliable mark of approximate truth (C2).
- **Trap: C2 says nothing about whether today's theories are false.** It withdraws the premise the [no-miracles argument](#no-miracles-argument) needs.
- **Trap: Laudan's stated target** is the realist's step from success to approximate truth. The prediction about current theories belongs to the later induction reading.
- **Trap: the mood is not Poincaré's.** His man of the world "sees ruins piled upon ruins" and speaks of "the bankruptcy of science" (*Science and Hypothesis*, W. J. Greenstreet's translation, 1905, ch. X). Poincaré's own word for this scepticism is "superficial".
- **Four replies.** *Shrink the base:* count only mature sciences and novel predictions (Psillos, 1999); Laudan had pre-empted this, since "maturity" risks being defined so that it cannot fail, and the ethers are mathematical physics, which Putnam grants is mature. *Count differently:* the [turnover fallacy](#turnover-fallacy). *Mind the false positives:* the [false positives objection](#false-positives-objection). *Divide the theory:* [selective realism](#selective-realism), which denies P5.
- **Weakest point, per 5.2:** P5, read as all-or-nothing. The realist concedes that success does not warrant a theory whole. The pessimist concedes that a discredited central term does not settle what the theory got right.

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md), [5.3](lessons/05-03-structural-realism.md)

### Laudan's list

**Twelve once-successful theories whose central terms, by current lights, do not refer.** Laudan 1981, p. 33: crystalline spheres, humoral medicine, the effluvial theory of static electricity, catastrophist geology, phlogiston, caloric, the vibratory theory of heat, vital forces, the electromagnetic and optical ethers (two entries), circular inertia, spontaneous generation. He says it could be extended "ad nauseam", and for each successful theory we now think refers, he estimates half a dozen that do not (p. 35).

- **It feeds both forms** of the [pessimistic induction](#pessimistic-induction).
- **What it is aimed at:** the realist's inference that explanatory success makes a theory probably [approximately true](#approximate-truth), together with the claim that a theory cannot be approximately true if its central terms fail to refer.

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Approximate truth

**Close enough to right about what a theory describes, without being strictly true.** The epistemic thesis of [realism](#three-theses-of-realism) is stated with it. The lessons use the notion without giving it a formal definition.

- **Why reference matters.** The claim at issue in [Laudan's list](#laudans-list) is that a theory cannot be approximately true if its central terms fail to refer.
- **Saving reference.** Psillos argues that "luminiferous ether" referred to the electromagnetic field (1999, ch. 12); Laudan (1984) charges that reference then comes too cheap.

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Turnover fallacy

**A cumulative head count of rejected theories gets read as the rate at any one moment.** Marc Lange, "Baseball, Pessimistic Inductions and the Turnover Fallacy" (*Analysis*, 2002). P1 of the induction is a cumulative count, and rejected theories turn over faster, so the past holds more of them than a snapshot would.

- **His illustration.** Of 542 major-league managers from 1876 through 1990, only 176 (32%) had winning records; yet in six of the eight seasons he sampled, most managers then in office went on to winning records.
- **What the induction needs, he says:** that at most past moments most accepted theories were false.
- **Reply.** Juha Saatsi ("On the Pessimistic Induction and Two Fallacies", *Philosophy of Science*, 2005): turnover cannot touch the timeless C2 of the [reductio form](#pessimistic-induction).

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### False positives objection

**Successful false theories can outnumber successful true ones while the test rarely errs, if true theories were scarce.** Peter Lewis, "Why the Pessimistic Induction Is a Fallacy" (*Synthese*, 2001): reliability is a matter of error rates. So P6 of the [reductio form](#pessimistic-induction) may show that true theories were scarce, not that the test is bad. This is the [base-rate objection](#base-rate-objection) turned around.

- **5.2's illustration (its numbers, not Lewis's).** Of 1,000 past theories, 40 are approximately true, and success marks three-quarters of the true ones and 5% of the false ones. Successful false theories outnumber successful true ones, 48 to 30, while the test errs on only 5% of false theories.
- **Reply.** Saatsi (2005): no non-arbitrary class of false, unsuccessful theories exists to fix Lewis's rate.

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Selective realism

**Believe only the parts of a successful theory that earned its success.** It denies P5 of the [reductio form](#pessimistic-induction). Stathis Psillos (*Scientific Realism*, 1999, chs. 5–6) calls the move *divide et impera*: success warrants the constituents that earned it, and those survive. Kitcher's [working posits](#working-and-presuppositional-posits) and Psillos's [indispensability test](#indispensability-test) are ways of finding those constituents.

- **Forerunner.** Pierre Duhem (*La Théorie physique*, 1906, Part I, ch. III): "it is not to this parasitic explanatory part [*partie explicative*] that the theory owes its power and its fruitfulness" (lesson's translation).
- **Trap: not the same as structural realism.** Structure is one way of drawing the line ([5.3](lessons/05-03-structural-realism.md)). Psillos says his divide et impera is not meant to capture Worrall's distinction between structure and content.
- **Two pressures on it:** the [hindsight objection](#hindsight-objection) and [unconceived alternatives](#unconceived-alternatives). Both ask how the line gets drawn.
- **Contested in the cases.** Hasok Chang (2003) disputes Psillos's reading of caloric. Chang's *Is Water H2O?* (2012) holds that phlogiston was abandoned too rashly, at a cost to chemistry later rebuilt as electrons and chemical potential. The realist replies that the test asks for retention in the current image, not in the next theory, and that electrons are not phlogiston. The critic replies that the current image is then doing all the selecting.

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md), [5.3](lessons/05-03-structural-realism.md)

### Working and presuppositional posits

**Working posits do the problem-solving; presuppositional posits only seem to be required for that problem-solving to be true.** Philip Kitcher, *The Advancement of Science* (1993). Working posits are the putative referents of terms in a theory's problem-solving schemata. Presuppositional posits merely seem to be required for those schemata to be true.

- **Clean case: the bright spot.** Fresnel's derivation sums contributions from each point of an open wavefront, with phases set by path length. What the medium is made of does not enter. So the wave is a working posit and the ether is presupposed, on the thought that something had to be waving.
- **Hard case: phlogiston.** The term occurs in the schema that generated Joseph Priestley's 1783 prediction that a calx heated in inflammable air would turn back into metal. So by Kitcher's own definition it is a working posit. He can retreat to his view that some tokens of a term refer and others do not.
- **The sort is by role in the schema,** not by the posit's later fate.

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Indispensability test

**A hypothesis is indispensable to a prediction if the rest of the derivation cannot yield it and no other available, non-ad-hoc hypothesis could stand in.** Psillos, *Scientific Realism* (1999), ch. 5, for his [divide et impera](#selective-realism).

- **On the bright spot:** the wave is indispensable and the elastic-solid model of the medium is not.
- **On phlogiston it turns on a date.** Lavoisier reinterpreted Priestley's experiment as the calx giving up its oxygen to the inflammable air, but only by using Cavendish's new work on the production of water. Was that rival "available" when Priestley reasoned?

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Hindsight objection

**Working parts get identified by what survived, so the test runs only backward and gives no guidance about today's posits.** P. Kyle Stanford (2003, 2006): a realist needs a criterion usable before the successor arrives.

- **Psillos's answer.** Scientists sorted their commitments at the time; he cites Lavoisier, Laplace and Carnot on caloric.
- **Counter.** Laudan had already recalled James Clerk Maxwell's judgment that the ether was better confirmed than any other theoretical entity (1981, p. 27).
- **Where 5.2 stops.** The verdict depends on which success is listed, on whether "available" means 1783 or now, and on how loose retention may be. Selective realists say careful case studies discipline those choices. Critics such as Chang and Stanford say those choices are the problem.

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Transient underdetermination

**Rivals equally supported by the evidence in hand, though further evidence could separate them.** The rivals in Stanford's argument from [unconceived alternatives](#unconceived-alternatives) (*Exceeding Our Grasp*, 2006) are of this kind. 5.2 sets out how they bear on [selective realism](#selective-realism).

- **Trap: not the [empirically equivalent theories](#empirically-equivalent-theories) of 2.2.** Stanford doubts that a general case for equivalents has been made.

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Structural realism

**A successful theory gets the relations right and may be wrong or silent about what stands in them.** John Worrall, "Structural Realism: The Best of Both Worlds?" (*Dialectica*, 1989): grant the [no-miracles argument](#no-miracles-argument) and the [pessimistic induction](#pessimistic-induction) together, and say that what science gets right is structure. Like [selective realism](#selective-realism) it keeps part of a theory, but it draws the line at relations, not at working posits.

In outline: novel success is a reason to think a theory has latched onto something about the unobservable (P1); such theories have been replaced by successors that reject their central entities (P2); across the change, more than the empirical content carries over and less than the account of what light is, namely the relations, which Worrall calls "form or structure" (P3); so the success is credited to the shared structure (P4); so believe what our best theories say about structure, and withhold belief about what stands in the relations (C).

- **The showcase:** [Fresnel's equations](#fresnel-equations).
- **Two versions:** [epistemic](#epistemic-structural-realism) and [ontic](#ontic-structural-realism).
- **Forerunner.** Poincaré: "Fresnel's theory of optics did not perish. Parts of it are yet alive, and their mutual relations are still the same" (*Science and Hypothesis*, W. J. Greenstreet's translation, 1905, ch. XII, p. 213). The caveat: the same chapter says mathematical theories aim "not to reveal to us the real nature of things" (p. 211).
- **Weakest point, per 5.3:** P3. Structure must be thin enough to survive theory change and thick enough to say something. Read purely, the [Newman objection](#newman-objection) bears on it. Read with its physical interpretation, Psillos (1995) replies that structure and nature form a continuum, since mature science defines properties by the laws they obey, so the position either fails or collapses into ordinary realism.
- **Trap: not instrumentalism.** The relations are said to hold of the unobservable world, where the [constructive empiricist](#constructive-empiricism) withholds belief.
- **Trap: not letter for letter.** Defenders claim less: well-confirmed relations among phenomena are retained, sometimes only as a limiting case of the successor. Critics (Stanford 2003; Chakravartty 2004) answer that structure is often lost too.
- **Trap: the name.** Unrelated to Kenneth Waltz's structural realism in [`international-relations`](../international-relations/syllabus.md) 2.2.

*Lessons:* [5.3](lessons/05-03-structural-realism.md)

### Fresnel equations

**How much of a light wave's amplitude is reflected and transmitted at a boundary: formulas that outlived the theory they were derived from.** Light passes from refractive index $n_1$ to $n_2$, arriving at angle $\theta_1$ from the normal and leaving at $\theta_2$, with $n_1\sin\theta_1=n_2\sin\theta_2$. Let $r$ and $t$ be the reflected and transmitted amplitudes divided by the incident amplitude, for vibration across the plane of incidence ($s$) or in it ($p$):

$$r_s=-\frac{\sin(\theta_1-\theta_2)}{\sin(\theta_1+\theta_2)},\qquad r_p=\frac{\tan(\theta_1-\theta_2)}{\tan(\theta_1+\theta_2)},$$

$$t_s=\frac{2\sin\theta_2\cos\theta_1}{\sin(\theta_1+\theta_2)},\qquad t_p=\frac{2\sin\theta_2\cos\theta_1}{\sin(\theta_1+\theta_2)\cos(\theta_1-\theta_2)}.$$

A positive coefficient means the transverse electric field, for $s$, or magnetic field, for $p$, keeps its direction.

- **History.** Fresnel gave these in a memoir read to the Académie des Sciences in January 1823, with $r$ and $t$ as ratios of displacements in an elastic ether whose density varies between media. Maxwell's theory (1865) has no such solid. Hendrik Lorentz first derived the equations from electromagnetic principles in 1875, and there the same formulas are ratios of field amplitudes.
- **One number, two mechanisms ($s$ case).** With $a=n_1\cos\theta_1$ and $b=n_2\cos\theta_2$, Fresnel's conditions are $1+r_s=t_s$ (continuous ether displacement along the boundary) and $a(1-r_s^2)=b\,t_s^2$ (energy). Maxwell's are $1+r_s=t_s$ and $a(1-r_s)=b\,t_s$ (continuous electric and magnetic components along the boundary). Either way $r_s=(a-b)/(a+b)$.
- **Brewster's angle** is the case $r_p=0$, where $\theta_1+\theta_2=90^\circ$ ([`waves-optics` 4.3](../waves-optics/lessons/04-03-polarization.md)).
- **The physics:** [`waves-optics` 2.4](../waves-optics/lessons/02-04-light-as-em-wave.md) and [`em-refresher` 4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md).

*Lessons:* [5.3](lessons/05-03-structural-realism.md)

### Epistemic structural realism

**There are things with natures behind the relations, and we can know only the relations.** ESR. Worrall's 1989 paper left open which he meant; he has since made his view explicitly epistemic. An older source is Bertrand Russell's *The Analysis of Matter* (1927): from percepts "it is only structure that we can validly infer" (p. 254). Most ESR defenders hold that objects with natures are ontologically prior to their relations; Morganti (2004) stays agnostic about that.

- **Trap: ESR and [OSR](#ontic-structural-realism) do not dispute the history.** They agree on what carried over. They differ on whether anything lies behind it.
- **Cousins.** Rae Langton's Kant, on which we know things only by their relations and powers ([`modern-philosophy` 6.1](../modern-philosophy/lessons/06-01-transcendental-idealism-and-the-thing-in-itself.md)); Elie Zahar's explicitly Kantian structural realism; the quiddities of [`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md).

*Lessons:* [5.3](lessons/05-03-structural-realism.md)

### Ontic structural realism

**There is nothing behind the relations to know: structure is what there is.** OSR. James Ladyman ("What Is Structural Realism?", 1998) objected that restricting belief leaves the ontological discontinuity where it was. He urged a metaphysical revision, developed with Steven French (2003) and Don Ross (*Every Thing Must Go*, 2007): science describes modal structure, what depends on what and what would happen if, and individual objects are derivative or absent.

- **Objections.** [Relations without relata](#relations-without-relata). Van Fraassen (2006): with nothing non-structural, the difference between physical and mathematical structure disappears.
- **Against Newman.** Ladyman and Ross say modal structure was never a set of pairs, so the [construction](#newman-objection) misses its target.
- **Trap.** Only OSR's eliminative form denies that ordinary objects exist.
- **Handoff.** The further motivations, from the identity of quantum particles and spacetime points, are [`philosophy-of-physics`](../philosophy-of-physics/syllabus.md) 6.2–6.3.

*Lessons:* [5.3](lessons/05-03-structural-realism.md)

### Relations without relata

**The charge that ontic structural realism posits relations with nothing for them to relate.** Chakravartty 1998; Psillos 2001, against [OSR](#ontic-structural-realism), on which individual objects are derivative or absent.

- **Compare** the charge against a world of pure powers in [`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md).

*Lessons:* [5.3](lessons/05-03-structural-realism.md)

### Isomorphism

**A one-to-one correspondence under which two members are related exactly when their correlates are.** Two systems have the same structure when an isomorphism links them. For a set $A$ with relation $S$ and a set $X$ with relation $R$: a bijection $f:A\to X$ such that $(a,b)\in S$ exactly when $(f(a),f(b))\in R$.

- **Newman's example** (1928, p. 139, note): four people, $A$ knows $B$, $B$ knows $C$, $C$ knows $D$, $D$ knows $A$, and the other two pairs are strangers. Four dots on a circle, joined to their neighbours, have the same structure.
- **Counting copies.** A structure $W$ has $n!/|\mathrm{Aut}(W)|$ copies on $n$ labelled objects, where $|\mathrm{Aut}(W)|$ counts its symmetries. Newman's four-cycle has $4!/8 = 3$ copies among the $2^{16}=65{,}536$ binary relations on four objects, a relation being any subset of the ordered pairs.
- **Trap: it needs a bijection,** so the condition is the right number of objects.

*Lessons:* [5.3](lessons/05-03-structural-realism.md)

### Newman objection

**A claim of pure structure is true of any set with the right number of members, so it says little beyond how many things there are.** M. H. A. Newman (*Mind*, 1928), aimed at Russell. The claim at issue: there is some relation $R$ on the world's objects under which they have structure $W$, and nothing more is known of $R$. A relation is fixed by which pairs it holds of, and every set of pairs is a relation.

*The lemma.* Let $W$ be a set $A$ with relation $S$, let $X$ be any set with as many members as $A$, and let $f:A\to X$ be a bijection. Put $R=\{(f(a),f(b)):(a,b)\in S\}$. Then $(a,b)\in S$ exactly when $(f(a),f(b))\in R$, so $f$ is an [isomorphism](#isomorphism). In Newman's words: "Any collection of things can be organised so as to have the structure W, provided there are the right number of them" (p. 144).

- **Trap: he did not prove structural knowledge impossible.** The lemma concerns only the claim that *some* relation has structure $W$. He says the statements that matter concern the structure set up "by a given, definite, relation" (p. 140), and his own repair is a relation we know directly.
- **"But $R$ is a fake."** Newman's reply (p. 146): a relation such as "denoted by letters of different alphabets" is a description, not a list, so excluding "fictitious" relations does not help. He held that no criterion could rank relations known only by which pairs they relate, so "important" would have to be a primitive quality of the world, and that to know a relation's character is already to know something not structural.
- **Replies.** The relations must be natural or causal (Melia and Saatsi 2006), or modal and not mere sets of pairs (Ladyman and Ross 2007).
- **What is agreed.** The lemma stands on every side; what is disputed is whether any structural realist should have meant the thin claim. The defender concedes that something beyond pure structure is then known, which was Newman's own conclusion. The critic concedes that a structural claim about a definite relation is not trivial, and that the difference between Fresnel's equations and his ether is real even without a sharp line.
- **Russell** wrote to Newman on 24 April 1928 accepting the point; scholars dispute how much he gave up.
- **Trap: the name.** M. H. A. Newman, the Cambridge mathematician, not John Henry Newman.

*Lessons:* [5.3](lessons/05-03-structural-realism.md)

### Ramsey sentence

**A theory with its theoretical terms replaced by existentially quantified variables.** William Demopoulos and Michael Friedman (1985) applied the [Newman objection](#newman-objection) to it: given a consistent theory and enough objects, the Ramsey sentence is true if the theory's observational consequences are.

*Lessons:* [5.3](lessons/05-03-structural-realism.md)

### Constructive empiricism

**Read a theory literally, believe what it says about the observable, and take no stand on the rest.** Bas van Fraassen, *The Scientific Image* (1980): science can be understood as aiming at [empirical adequacy](#empirical-adequacy), with [acceptance](#acceptance-and-belief) involving only that belief.

In outline: a theory's claims about unobservables are true or false, read literally (P1); truth entails empirical adequacy and not conversely, and adequacy covers all observable phenomena, noticed or not (P2); experiment, theory choice and explanation need only acceptance, with simplicity and explanatory power as pragmatic virtues ([4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)) (P3); experience is the only source of information about the world (P4; his 1985 statement, and *The Empirical Stance*, 2002, recasts empiricism as a stance). No epistemic rule, he says, tells you that you may as well "hang for a sheep" as for a lamb.

- **Trap: it does not say electrons do not exist.** It leaves "there are electrons" true or false and takes no stand.
- **Trap: it is not a ban.** It is a thesis about science's aim and what acceptance involves. Van Fraassen (1998) allows someone to believe more than science requires, so a constructive empiricist may believe in electrons; accepting a theory does not require it.
- **Trap: not [instrumentalism](#instrumentalism).** The story stays a story, true or false.
- **Trap: [empirically equivalent rivals](#empirically-equivalent-theories) are no premise.** Gideon Rosen (1994) pointed out that the data fit "adequate so far" as well as "adequate", so that argument would undercut the belief he keeps.
- **Weakest point, per 5.4:** P4, joined to the [line](#observable-and-unobservable). Critics add that belief in adequacy already outruns all experience, so modesty cannot be what stops it at the line. The reply: the line is no claim about the world's joints, it tracks what experience can bear on, and stopping at the merely *observed* would leave no reason to run an experiment nobody has run (Monton and van Fraassen, 2003). The empiricist concedes that the line is not forced on anyone; it expresses what warrant she will act on. The realist concedes that belief past the line adds exposure to error and no observable consequence.

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Empirical adequacy

**A theory is empirically adequate if everything it says about what can be observed is true: it "saves the phenomena".** Van Fraassen, *The Scientific Image* (1980).

- **Weaker than truth, and still bold.** Truth entails adequacy and not conversely. Adequacy covers every observable event, past or future, watched or not.
- **Trap: [observable](#observable-and-unobservable) is not observed.** That is why critics ask what stops it at the line.

*Lessons:* [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Acceptance and belief

**To accept a theory is to believe it empirically adequate and to commit to working inside it; belief in the rest of its story is no part of that.** Van Fraassen, *The Scientific Image* (1980). Acceptance has two parts: the belief that the theory is [empirically adequate](#empirical-adequacy), and a commitment to meet new phenomena inside its framework. On realism as he states it, acceptance is belief in a literally true story.

- **5.4's picture.** An auditor signs off that the books agree with every receipt, including receipts nobody has pulled yet, and has no view on the chief executive's story of why profits rose.
- **Not the distinction of 1.3:** there [confirmation and acceptance](#confirmation-and-acceptance) separates a probability claim from a decision to accept.

*Lessons:* [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Instrumentalism

**Theories are tools for organizing and predicting observations, not descriptions of hidden things.** It denies the semantic thesis of [realism](#three-theses-of-realism). Ernst Mach, *The Science of Mechanics* (McCormack's translation, 1893), calls the atomic theory "a mathematical model for facilitating the mental reproduction of facts". Friedman's 1953 essay, on its usual reading, takes that attitude to economic assumptions ([`philosophy-of-economics` 6.2](../philosophy-of-economics/lessons/06-02-friedmans-as-if-and-its-critics.md)).

- **Trap: not [constructive empiricism](#constructive-empiricism).** A constructive empiricist keeps the literal reading: "atoms exist" is a claim, one she neither affirms nor denies. Because her belief stops at the observable, some commentators still file her under instrumentalism.

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Maxwell's continuum

**Looking through a vacuum, a windowpane, spectacles, binoculars and microscopes forms a continuous series, so no non-arbitrary line separates observation from theory.** Grover Maxwell, "The Ontological Status of Theoretical Entities" (1962). In outline: the series is continuous, from a vacuum through a low-power and a high-power microscope (M1); so no non-arbitrary line separates observation from theory, and any cut shifts with the job at hand (M2); what exists cannot depend on such a line (M3); so the observable–unobservable distinction carries no ontological weight (C).

- **Van Fraassen's reply.** "Observable" is vague, and a vague predicate is usable if it has clear cases and clear non-cases. He also grants C: his line marks nothing about what exists, only what experience can speak to.
- **Trap: the name.** Grover Maxwell, not James Clerk Maxwell.

*Lessons:* [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Entity realism

**Believe in the unobservable things you can use as tools, without believing any theory of them.** Ian Hacking, *Representing and Intervening* (1983). In outline: experimenters build devices that exploit an entity's causal powers to interfere in something more hypothetical (H1); one cannot rely on a thing's causal powers, year after year, while withholding belief that it exists (H2); so belief in such entities is warranted, without belief in any theory of them (C). Of electrons: "if you can spray them", then they are real.

- **The cases.** First, a Stanford experiment that changed the charge on a superconducting niobium ball by spraying it with electrons or positrons, which uses only the charge. Then PEGGY II, a source of electrons with aligned spins built at the Stanford Linear Accelerator Center in the late 1970s and fired at deuterium to probe the weak neutral current: the electrons are the probe, not under test, and several causal properties are relied on at once.
- **Objection.** Margaret Morrison (1990), David Resnik (1994) and others: you cannot build the gun, or say what leaves it, without a theoretical account of what is happening inside. Hacking's side replies that only a few well-understood causal generalizations are needed, and that reference to the entity can stay fixed while theories of it change. The critic answers that those generalizations are theory, in small print.
- **Constructive empiricist's reply.** "We manipulated electrons" describes the device in the language of an accepted theory; what is observed is that the machine does what the theory says.
- **Where 5.4 stops.** No agreed test separates a low-level causal claim from a theoretical one. Hacking owes a reason why his sliver of theory is knowledge and the rest is not. The constructive empiricist owes an account of why a machine designed from a story works so well if the story is idle.
- **Trap: a successful manipulation does not vindicate the theory.** Entity realism detaches the two.
- **Trap: it is a sufficient condition.** Nobody has sprayed Jupiter's moons.

*Lessons:* [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Grid argument

**A grid made in one shape at smaller and smaller sizes keeps that shape through microscopes built on unrelated physical processes; otherwise that is a gigantic coincidence.** Hacking, *Representing and Intervening* (1983), for microscopes.

- **Van Fraassen's reply (1985).** Appealing to how the grid was made assumes the manufacture succeeded, and the coincidence argument assumes persistent agreement must have a true explanation.

*Lessons:* [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Natural ontological attitude

**Accept science's checked results on the footing of everyday truths, as both sides already do, and stop.** Arthur Fine, *The Shaky Game* (1986). "Really true" and "merely adequate" are glosses science does not need.

- **Trap: not a third theory of science.** It is the refusal to add one, and whether a refusal can be stable is the dispute with Musgrave.
- **Objection.** Alan Musgrave (1989): it is either empty or realism.

*Lessons:* [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

## Formulas and computations

Every quantity the lessons compute, grouped by job, with symbols defined in each group. Unless a group says otherwise, $P$ is an ideal agent's credence function (`epistemology` writes $\mathrm{cr}$). In Module 3, $P(x;\theta)$ with a semicolon is the sampling probability of data $x$ at a fixed parameter value $\theta$. Logs are natural.

### Formulas: Deductive and qualitative confirmation

$H$ is a hypothesis, $E$ an evidence report, $K$ background, $X$ any conjunct consistent with $H \wedge K$; $\vDash$ means "entails".

**Hypothetico-deductive confirmation.** $E$ H-D-confirms $H$ relative to $K$ iff

$$H \wedge K \vDash E \quad\text{and}\quad K \not\vDash E, \quad\text{with } H \wedge K \text{ consistent.}$$

**Repackaging.** Why "idle conjunct" depends on wording: $T \wedge X \equiv (X \to T) \wedge X$, and in the second package neither conjunct yields the prediction alone.

**Raising versus high probability, on a fair die.** $E = \{1,2,3\}$, $H = \{2\}$, $H' = \{2,4,6\}$. Then $P(H) = \tfrac16$ and $P(H \mid E) = \tfrac13$, while $P(H') = \tfrac12$ and $P(H' \mid E) = \tfrac13$. So $E$ raises $H$ and lowers what $H$ entails: special consequence fails of "makes more probable". It holds of "makes highly probable", since $H \vDash H'$ gives $P(H' \mid E) \ge P(H \mid E)$.

**The tie grue leaves.** If $H \wedge K$ and $H^* \wedge K$ each entail $E$, the data leave the odds where the prior put them:

$$\frac{P(H \mid E \wedge K)}{P(H^* \mid E \wedge K)} = \frac{P(H \mid K)}{P(H^* \mid K)}.$$

**Labellings.** $2^m$ labellings of $m$ unexamined cases are consistent with the record: the count behind [no free lunch](#no-free-lunch).

*From* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.2](lessons/01-02-the-new-riddle-of-induction.md)

### Formulas: Confirmation measures

Three gauges of how far $E$ moved $H$, with background suppressed. Write $p = P(H)$ and $q = P(H \mid E)$.

| Name | Definition | Reads |
|---|---|---|
| Incremental confirmation | $P(H \mid E \wedge K) > P(H \mid K)$ | $E$ raises $H$ |
| Absolute confirmation | $P(H \mid E \wedge K) > t$ | the posterior clears a threshold $t$ |
| [Difference measure](#difference-measure) | $d(H,E) = P(H \mid E) - P(H)$ | the rise in probability |
| [Log-ratio measure](#log-ratio-measure) | $r(H,E) = \ln\frac{P(H \mid E)}{P(H)} = \ln\frac{P(E \mid H)}{P(E)}$ | the factor by which probability grew |
| [Log-likelihood-ratio measure](#log-likelihood-ratio-measure) | $l(H,E) = \ln\frac{P(E \mid H)}{P(E \mid \neg H)}$ | the factor by which the odds grew |

**Odds recovery.** Divide Bayes' theorem for $H$ by Bayes' theorem for $\neg H$:

$$\mathrm{LR} = \frac{P(E \mid H)}{P(E \mid \neg H)} = \frac{q/(1-q)}{p/(1-p)}, \qquad l(H,E) = \ln\frac{q(1-p)}{p(1-q)} = r(H,E) - r(\neg H,E).$$

**Sign agreement.** $d$, $r$ and $l$ are positive together, zero together and negative together, because $P(E)$ is a weighted average of $P(E \mid H)$ and $P(E \mid \neg H)$. Only the sign is free of the choice of measure.

**Ceiling on the ratio.** $r(H,E) \le \ln(1/P(H))$.

**Tacking on each measure.** With $H \vDash E$, $P(E) < 1$ and $P(H \wedge X) > 0$:

$$r(H \wedge X, E) = \ln\frac{1}{P(E)} = r(H,E), \qquad d(H \wedge X, E) = P(X \mid H)\, d(H,E), \qquad l(H \wedge X, E) < l(H,E) \text{ if } P(X \mid H) < 1.$$

**The lesson's cases.**

| Case | Prior to posterior | $d$ | $r$ | $l$ |
|---|---|---|---|---|
| A | $\tfrac14 \to \tfrac12$ | $\tfrac14$ | $\ln 2$ | $\ln 3$ |
| B | $\tfrac12 \to \tfrac45$ | $\tfrac{3}{10}$ | $\ln\tfrac85$ | $\ln 4$ |
| D | $\tfrac{1}{20} \to \tfrac15$ | $\tfrac{3}{20}$ | $\ln 4$ | $\ln\tfrac{19}{4}$ |

D beats B on $r$ and $l$ and loses on $d$.

*From* [1.3](lessons/01-03-confirmation-as-probability-raising.md). Odds form from [philosophical-method 2.4](../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md) ([card](../philosophical-method/reference.md#the-odds-rule)).

### Formulas: Ravens

One object $a$ is examined. $R$: $a$ is a raven. $B$: $a$ is black. $H$: every raven is black. $\mathrm{LR}$ is a likelihood ratio for $H$ against a named rival.

**Assumptions of the [standard Bayesian solution](#standard-bayesian-solution-to-the-ravens).** A1: $P(R \mid H) = P(R)$. A2: $P(\neg B \mid H) = P(\neg B)$. A3: $P(\neg B) \gg P(R)$. Given A1 and A2:

$$\frac{P(H \mid R \wedge B)}{P(H)} = \frac{1}{P(B \mid R)}, \qquad \frac{P(H \mid \neg R \wedge \neg B)}{P(H)} = \frac{1}{P(\neg R \mid \neg B)},$$

$$1 - P(B \mid R) = \frac{P(R \wedge \neg B)}{P(R)}, \qquad 1 - P(\neg R \mid \neg B) = \frac{P(R \wedge \neg B)}{P(\neg B)}.$$

So when $P(R \wedge \neg B) > 0$ both ratios exceed 1, and the first exceeds the second exactly when $P(\neg B) > P(R)$.

**A known non-raven under A1 and A2.** $P(\neg B \mid \neg R \wedge H) = P(\neg B)/P(\neg R) > P(\neg B \mid \neg R)$, so a known non-raven found non-black confirms: neutrality there needs a different assumption.

**Route of collection.** A rival makes $w$ of $N_R$ ravens white; $N$ is the number of non-black non-ravens under $H$. "Frozen margins" keeps the raven and non-black totals fixed (the A1 and A2 rival). "Frozen non-ravens" leaves every non-raven alone. Each entry is an $\mathrm{LR}$ for $H$:

| Draw from, finding | Frozen non-ravens | Frozen margins |
|---|---|---|
| ravens; black | $N_R/(N_R - w)$ | $N_R/(N_R - w)$ |
| non-black things; a non-raven | $(N + w)/N$ | $N/(N - w)$ |
| non-ravens; non-black | $1$ | $N/(N - w)$ |
| everything; non-black non-raven | $1$ | $N/(N - w)$ |

A black non-raven under A2, with $Q$ black non-ravens: $\mathrm{LR} = Q/(Q + w) < 1$ (the point Vranas reports from Horwich).

**[Good's case](#goods-black-raven-case).** World 1 has 100 black crows, no others, 1,000,000 other birds. World 2 has 1,000 black crows, 1 white crow, 1,000,000 other birds. $H$ is world 1. A bird drawn uniformly from all the birds is a black crow:

$$\mathrm{LR} = \frac{100/1{,}000{,}100}{1{,}000/1{,}001{,}001} = \frac{1{,}001{,}001}{10{,}001{,}000} \approx 0.1001.$$

Good's decomposition: $\mathrm{LR}(\text{black crow}) = \mathrm{LR}(\text{crow}) \times \mathrm{LR}(\text{black} \mid \text{crow})$, and only the last factor must exceed 1. Drawn from the crows alone, the same bird has $\mathrm{LR} = 1001/1000$.

**Uncertain route.** With credence $q$ that the draw was from all the birds and $1 - q$ that it was from the crows,

$$\mathrm{LR}(q) = \frac{q/10001 + (1-q)}{1000q/1001001 + 1000(1-q)/1001},$$

which exceeds 1 for $q$ below about 0.526.

*From* [1.4](lessons/01-04-the-ravens-paradox.md)

### Formulas: Old evidence

$H$ is a hypothesis, $E$ evidence.

**The zero.** $P(E) = 1 \Rightarrow P(H \mid E) = P(H)$, since $P(H \wedge \neg E) \le P(\neg E) = 0$.

**Softened certainty.** $P(H \mid E) \le P(H)/P(E)$, so at $P(E) = 0.999$ the evidence multiplies a credence by at most about 1.001.

**Counterfactual solution.** With $P^{-E}$ the credence function the agent would have had without knowing $E$:

$$E \text{ confirms } H \iff P^{-E}(H \mid E) > P^{-E}(H).$$

**Logical learning model.** $L$: $H$ with the background entails $E$. $R$: it entails $\neg E$. $S = \neg L \wedge \neg R$: $H$ is silent on $E$. Modus ponens is imposed as

$$P(E \mid H \wedge L) = 1, \qquad P(E \wedge H \wedge R) = 0.$$

| Added constraint | Whose | Delivers |
|---|---|---|
| none | Garber | such models exist; no guaranteed rise |
| $P(L \vee R) = 1$ | Jeffrey | $P(H \mid L) = P(H)/P(L)$ (needs an empty silent column) |
| $P(H \mid L) > P(H \mid S)$ | Earman | $P(H \mid L) > P(H)$ |

**Deductive evidence on the log-ratio measure.** $H \vDash E \Rightarrow r(H,E) = -\ln P(E)$.

*From* [1.5](lessons/01-05-the-problem-of-old-evidence.md)

### Formulas: Model selection and simplicity

$F$ is a family of curves, $k$ its number of adjustable parameters, $\hat L$ its largest likelihood on $n$ data points, $\hat\theta(D_1)$ its best member on data set $D_1$. LIN is $y = a + bx$ plus noise; PAR is $y = a + bx + cx^2$ plus noise.

**[Predictive accuracy](#predictive-accuracy).** $D_2$ is a fresh data set from the same source:

$$A(F) = \frac{1}{n}\,\mathbb{E}_{D_1,D_2}\Big[\ln P\big(D_2; \hat\theta(D_1)\big)\Big].$$

**[Akaike's criterion](#akaike-information-criterion).** Under regularity conditions, for large $n$, $\widehat{A}(F) = (\ln\hat L - k)/n$ is an unbiased estimate of $A(F)$; equivalently

$$\mathrm{AIC} = 2k - 2\ln\hat L = -2n\,\widehat{A}(F), \qquad \text{lower wins.}$$

**The exact special case.** Gaussian regression with known $\sigma$, fixed design and squared bias $B^2$:

$$\text{expected held-out MSE} = \sigma^2\Big(1 + \frac{k}{n}\Big) + B^2 = \frac{\mathbb{E}[\mathrm{RSS} + 2k\sigma^2]}{n}.$$

**[Marginal likelihood](#marginal-likelihood) and the [Occam factor](#bayesian-occam-factor).** $\sigma$s are characteristic widths:

$$P(D \mid M) = \int P(D \mid \theta, M)\,P(\theta \mid M)\,d\theta \;\approx\; \hat L \times \frac{\sigma_{\text{post}}}{\sigma_{\text{prior}}}.$$

**[BIC](#bayesian-information-criterion).** $\mathrm{BIC} = k\ln n - 2\ln\hat L$, with $\ln P(D \mid M) \approx \ln\hat L - \tfrac{k}{2}\ln n$.

**Keeping one spurious parameter, when the simpler nested family is true.** AIC keeps it with probability $P(\chi^2_1 > 2) = 0.157$ at every $n$. BIC keeps it with probability $P(\chi^2_1 > \ln n)$: 0.032 at $n = 100$, 0.0024 at $n = 10{,}000$. BIC charges $\ln n$ per parameter against AIC's 2, so it is the lighter penalty for $n \le 7$.

**[Nested families](#nested-family-problem).** LIN entails PAR, so $P(\mathrm{LIN} \mid D) \le P(\mathrm{PAR} \mid D)$ for every $D$.

**Coin Bayes factor.** $h$ heads in $n$ flips, a fair coin against a uniform prior on the bias: $B_{01} = (n+1)\binom{n}{h}2^{-n}$.

*From* [1.6](lessons/01-06-simplicity-and-curve-fitting.md). Optimism identity from [statistical-learning 2.1](../statistical-learning/lessons/02-01-linear-regression-as-learning.md).

### Formulas: Falsification, blame and theory choice

**Falsifying a conjunction.** With theory $T$, initial conditions $I$ and prediction $O$: from $T \wedge I \vdash O$ and $\neg O$, infer $\neg(T \wedge I)$. With a hypothesis and auxiliaries:

$$(H \wedge A_1 \wedge \dots \wedge A_n) \vDash O, \quad \neg O \;\therefore\; \neg(H \wedge A_1 \wedge \dots \wedge A_n).$$

**Content and probability.** If $T_1 \vdash T_2$ then $T_1$ forbids at least as much and $P(T_1) \le P(T_2)$.

**A probabilistic hypothesis forbids no sequence.** $P(1{,}000 \text{ heads} \mid \text{fair coin}) = 2^{-1000} \approx 10^{-301}$.

**The eclipse prediction.** With $G$ the gravitational constant, $M$ and $R$ the Sun's mass and radius, $c$ the speed of light, the deflection at the Sun's edge is $\delta = 4GM/(c^2 R) \approx 1.75$ arc-seconds; half that value is about 0.875.

**Blame allocation.** $H$ and $A$ independent; $E$ impossible given $H \wedge A$ and equally likely in each other case:

$$P(H \mid E) = \frac{P(H)(1 - P(A))}{1 - P(H)P(A)}, \qquad P(A \mid E) = \frac{(1 - P(H))P(A)}{1 - P(H)P(A)}.$$

The lesson's illustrative numbers (not Dorling's own): $P(H) = 0.99$, $P(A) = 0.9$ give $99/109 \approx 0.91$ and $9/109 \approx 0.08$.

**Salmon's ratio form.** For rival theories $T_1, T_2$ and evidence $E$:

$$\frac{P(T_1 \mid E)}{P(T_2 \mid E)} = \frac{P(T_1)\,P(E \mid T_1)}{P(T_2)\,P(E \mid T_2)}.$$

**Two worked cases from programmes.** Chlorine as a 3:1 mixture of masses near 35 and 37: $(3 \times 35 + 1 \times 37)/4 = 35.5$. MOND's mass-speed law: $v^4 = GMa_0$, with $a_0 \approx 1.2 \times 10^{-10}\ \mathrm{m/s^2}$.

*From* [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md), [2.5](lessons/02-05-lakatos-and-feyerabend.md). The physics of the deflection is [relativity 6.2](../relativity/lessons/06-02-orbits-precession-light-bending.md).

### Formulas: Error rates and significance

$H_0$ and $H_1$ are the null and the alternative, $T$ a test statistic with observed value $t$, $R$ a rejection region, $\Phi$ the standard normal CDF.

| Quantity | Formula | Belongs to |
|---|---|---|
| p-value | $p = P(T \ge t;\, H_0)$ | the outcome |
| Significance level | $\alpha = P(X \in R;\, H_0)$ | the rule |
| Error of the second kind | $\beta = P(X \notin R;\, H_1)$ | the rule |
| Power | $1 - \beta$ | the rule, at an alternative |

**Neyman-Pearson lemma.** The most powerful test rejects for large $P(x;H_1)/P(x;H_0)$.

**Link between the two.** $p \le \alpha$ exactly when the statistic lands in $R$, for $R$ the upper tail of $T$.

**Example 1, the fertilizer.** 36 plots, $\sigma = 9$, standard error 1.5, $\mu_0 = 40$, $\mu_1 = 44$, $\bar x = 43$. Fisher: $z = (43 - 40)/1.5 = 2$, $p = 0.0228$. Neyman-Pearson at $\alpha = 0.05$, one-sided: $c = 40 + 1.645(1.5) = 42.4675$; power $\Phi\big((44 - c)/1.5\big) = \Phi(1.022) = 0.847$; $\beta = 0.153$.

**Example 2, [Cox's two instruments](#coxs-two-instruments).** A fair coin picks instrument A ($\sigma_A = 1$) or B ($\sigma_B = 10$); $H_0: \mu = 0$ against $H_1: \mu = 10$. The unconditional p-value averages over the coin:

$$p = \tfrac12\big[P(X \ge x; \text{A}) + P(X \ge x; \text{B})\big].$$

The most powerful test of overall level 0.05 rejects if $x > 5.08$ on A or $x > 12.82$ on B. Conditional on the instrument, its levels are about $2 \times 10^{-7}$ on A and $0.100$ on B; its power is 0.695, against 0.630 for a plain 5 percent test on each. At $x = 13$ on B the averaged p-value is 0.0484 against 0.0968 on the instrument used.

*From* [3.1](lessons/03-01-two-schools-of-statistical-inference.md). The reading of a p-value is [prob-stat-refresher 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md).

### Formulas: Likelihood and stopping rules

$\theta$ is a parameter, $x, y$ outcomes, $H_1, H_2$ simple hypotheses.

**[Law of likelihood](#law-of-likelihood).** $x$ favours $H_1$ over $H_2$ iff $P(x;H_1) > P(x;H_2)$, and $\mathrm{LR} = P(x;H_1)/P(x;H_2)$ measures how much.

**[Likelihood principle](#likelihood-principle).** $P(x;\theta) = c\,P(y;\theta)$ for all $\theta$ and some $c > 0$ implies that $x$ and $y$ carry the same evidence about $\theta$.

**Two designs for the same coin.** $P(\text{heads}) = \theta$.

$$\text{Fixed } n: \quad P(H = h;\theta) = \binom{n}{h}\theta^h(1-\theta)^{n-h}.$$

$$\text{Until the } r\text{-th tail}: \quad P(N = n;\theta) = \binom{n-1}{r-1}\theta^{n-r}(1-\theta)^{r}, \quad n = r, r+1, \dots$$

For $h$ heads and $t$ tails both are proportional to $\theta^h(1-\theta)^t$.

**The lesson's case, 8 heads and 2 tails, one-sided toward heads.** Ten flips: $L_A = 45\,\theta^8(1-\theta)^2$, $p_A = \tfrac{7}{128} \approx 0.0547$. Until the second tail: $L_B = 9\,\theta^8(1-\theta)^2$, $p_B = \tfrac{5}{256} \approx 0.0195$. So $L_A = 5L_B$ at every $\theta$; $\mathrm{LR}(0.8 : 0.5) = 6.87$; against a uniform alternative, $B_{01} = \tfrac{495}{1024} \approx 0.483$.

**[Optional stopping](#optional-stopping).** Two-sided z-test on normal data, known variance, nominal level 0.05, stopping at the first significant look among $k$:

| Looks $k$ | 1 | 2 | 5 | 10 | 20 | 100 | $\to\infty$ |
|---|---|---|---|---|---|---|---|
| Actual $\alpha$ | 0.050 | 0.083 | 0.142 | 0.193 | 0.248 | 0.374 | 1 |

**Likelihood-ratio bound.** With $H_1$ fixed in advance and $H_2$ true, $P(\mathrm{LR}_n \ge k \text{ for some } n;\ H_2) \le 1/k$. On a fair coin, $\mathrm{LR}(0.7 : 0.5)$ reaches 8 within 4,000 flips with probability 0.107 (bound 0.125). A z-test checked after every flip from 10 to 1,000 reaches 1.96 with probability 0.466.

**Maximized ratio.** At statistic $z$ the maximized likelihood ratio is $e^{z^2/2}$ (6.83 at $z = 1.96$). It does not obey the $1/k$ bound.

**[Bayes factor](#bayes-factor).** With $\pi_i$ the prior over $\theta$ inside $H_i$:

$$B_{01}(x) = \frac{P(x \mid H_0)}{P(x \mid H_1)}, \qquad P(x \mid H_i) = \int P(x \mid \theta)\,\pi_i(\theta)\,d\theta.$$

**Coin under a uniform prior.** $\binom{n}{k}\int_0^1 \theta^k(1-\theta)^{n-k}\,d\theta = \tfrac{1}{n+1}$, so $B_{01} = (n+1)\binom{n}{k}2^{-n}$.

**[Lindley's paradox](#lindleys-paradox).** Fix $z$ and let $n$ grow: $B_{01} \approx (n+1)\sqrt{2/(\pi n)}\,e^{-z^2/2}$ (here $\pi$ is the circle constant). At exactly $z = 2$:

| $n$ | 36 | 100 | 400 | 10,000 | 1,000,000 |
|---|---|---|---|---|---|
| Exact two-sided $p$ | 0.065 | 0.057 | 0.051 | 0.047 | 0.046 |
| $B_{01}$ | 0.674 | 1.10 | 2.17 | 10.8 | 108 |

*From* [3.2](lessons/03-02-the-likelihood-principle.md). Likelihood functions are [prob-stat-refresher 4.1](../prob-stat-refresher/lessons/04-01-estimation-and-mle.md).

### Formulas: Replication and severity

A field tests hypotheses of which a fraction $\pi$ are true, with pre-study odds $R = \pi/(1-\pi)$, level $\alpha$ and power $1 - \beta$.

**[Positive predictive value](#positive-predictive-value).** The [false discovery proportion](#false-discovery-proportion) is $1 - \mathrm{PPV}$.

$$\mathrm{PPV} = \frac{(1-\beta)\pi}{(1-\beta)\pi + \alpha(1-\pi)} = \frac{(1-\beta)R}{R - \beta R + \alpha}, \qquad \text{post-study odds} = R \times \frac{1-\beta}{\alpha}.$$

**Break-even base rate.** $\mathrm{PPV}$ reaches $\tfrac12$ at $\pi^* = \alpha/(\alpha + 1 - \beta)$. At level 0.05 that is $1/19$ at power 0.9 and $1/5$ at power 0.2.

**[Bias](#ioannidis-bias-term).** $u$ is the proportion of analyses that would not have been findings but are reported as findings anyway:

$$\mathrm{PPV}_u = \frac{(1-\beta)R + u\beta R}{R + \alpha - \beta R + u - u\alpha + u\beta R}, \qquad \alpha' = \alpha + u(1-\alpha), \qquad \text{hit rate}' = (1-\beta) + u\beta.$$

**Worked (Example 1).** $\pi = 1/5$, power $1/2$, level 0.05: $\mathrm{PPV} = 5/7$, false discovery proportion $2/7$. With $u = 1/5$: $\mathrm{PPV}_u = 5/13$.

**[Severity](#severity-requirement)** for the claim $\mu > \mu_1$, with sample mean $\bar X$, observed $\bar x_{\text{obs}}$, known $\sigma$, sample size $n$:

$$\mathrm{SEV}(\mu > \mu_1) = P(\bar X \le \bar x_{\text{obs}};\ \mu = \mu_1) = \Phi\!\left(\frac{\bar x_{\text{obs}} - \mu_1}{\sigma/\sqrt{n}}\right).$$

At $\mu_1 = \mu_0$ this equals $1 - p$. It falls as $\mu_1$ rises.

**Selection.** The best of $k$ independent $z$-statistics is at or below $z$ with probability $\Phi(z)^k$.

**Worked (Example 2).** $\sigma = 12$, $n = 144$, $\bar x = 2.4$: SEV is 0.992, 0.919, 0.655 and 0.274 for $\mu > 0, 1, 2, 3$. If 2.4 was the best of eight outcomes, $\Phi(2.4)^8 = 0.936$ and the adjusted $p$ is 0.064.

*From* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md). Screening arithmetic and multiple testing are [econometrics 2.7](../econometrics/lessons/02-07-multiple-testing-specification-search.md) ([card](../econometrics/reference.md#multiple-testing-arithmetic)).

### Formulas: Inductive risk

$H$ is the hypothesis, $k$ the data, $p_k = P(H \mid k)$. $L_A$ is the loss from accepting when $H$ is false; $L_R$ the loss from rejecting when it is true.

**[Expected-loss threshold](#expected-loss-threshold).** Accepting has expected loss $(1 - p_k)L_A$ and rejecting has $p_k L_R$, so

$$\text{accept iff } p_k > t = \frac{L_A}{L_A + L_R}.$$

**The bolt example.** 20 bolts; a good batch fails each with probability $1/20$, a bad one with probability $1/4$; $P(\text{good}) = 9/10$; $k$ failures. Posterior odds are $9 \cdot (1/5)^k (19/15)^{20-k}$.

| $k$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $p_k$ | 0.9990 | 0.9938 | 0.9621 | 0.8002 | 0.3874 |

With $L_R = 1$: garden fence, $L_A = 3$, $t = 0.75$, accept iff $k \le 3$ (null "batch good": $\alpha = 0.0159$, $\beta = 0.2252$). Rail bridge, $L_A = 99$, $t = 0.99$, accept iff $k \le 1$ ($\alpha = 0.2642$, $\beta = 0.0243$).

*From* [3.4](lessons/03-04-values-and-inductive-risk.md). A loss is a utility with its sign flipped: [decision-theory 1.2](../decision-theory/lessons/01-02-from-expected-value-to-expected-utility.md).

### Formulas: Division of cognitive labour

The chance function, the numbers and the equal split of credit are the lesson's, not Kitcher's. $N = 10$ scientists, $n$ on programme A, rivals mutually exclusive, $q_A = 7/10$, $q_B = 3/10$.

$$V(n) = p_A(n) + p_B(N - n), \qquad p_i(k) = q_i(1 - 2^{-k}), \qquad \text{expected credit per head} = p(k)/k.$$

| Split A/B | Who lands there | $V$ |
|---|---|---|
| 10/0 | truth-seeking clones | $\tfrac{7}{10}\cdot\tfrac{1023}{1024} \approx 0.699$ |
| 7/3 | credit-seekers (the unique equilibrium) | $\tfrac{245}{256} \approx 0.957$ |
| 6/4 | the community optimum | $\tfrac{621}{640} \approx 0.970$ |

Gaps to the optimum: $17/1280 \approx 0.013$ for credit-seekers, $555/2048 \approx 0.27$ for clones. At $q_A = 9/10$ the equilibrium is 10/0.

*From* [3.5](lessons/03-05-objectivity.md)

### Formulas: Explanation schemata and causal structure

**[D-N schema](#deductive-nomological-model).** Conditions $C_1, \dots, C_k$ and laws $L_1, \dots, L_r$ entail the explanandum $E$: $C_1, \ldots, C_k;\ L_1, \ldots, L_r \vdash E$.

**[I-S schema](#inductive-statistical-model).** $p$ is a statistical probability, $F, G$ properties, $b$ the individual, $[r]$ inductive support:

$$p(G \mid F) = r,\quad Fb \;\Rightarrow\; Gb\ [r], \qquad r \text{ high}.$$

**[Maximal specificity](#maximal-specificity).** If what is accepted, $K$, implies $b \in F_1 \subset F$, then $K$ must imply $p(G \mid F_1) = r_1$ with $r_1 = r$, unless that statement is a theorem of probability.

**[Statistical relevance](#statistical-relevance) and [screening off](#screening-off).** $O$ outcome, $R$ reference class, $F, G$ factors:

$$P(O \mid R \wedge F) \neq P(O \mid R); \qquad P(O \mid R \wedge F \wedge G) = P(O \mid R \wedge G) \neq P(O \mid R \wedge F).$$

**[Structural equations](#structural-equations) for the barometer.** $D$ pressure drop, $B$ barometer reading, $S$ storm, $U$s independent noise:

$$D = U_D, \qquad B = f_B(D, U_B), \qquad S = f_S(D, U_S).$$

**Adjustment under the fork.** $P(S \mid \mathrm{do}(B{=}b)) = \sum_d P(S \mid B{=}b, D{=}d)\,P(D{=}d)$.

**The lesson's invented numbers.** $P(D) = 0.2$, $P(B \mid D) = 0.9$, $P(B \mid \neg D) = 0.1$, $P(S \mid D) = 0.7$, $P(S \mid \neg D) = 0.1$. Then $P(S) = 0.22$, $P(B) = 0.26$, $P(S \mid B) = 67/130 \approx 0.515$, $P(S \mid \mathrm{do}(B{=}1)) = 0.22$; the naive comparison is $192/481 \approx 0.399$. The chain $B \to D \to S$ with $P(D \mid B) = 9/13$ and $P(D \mid \neg B) = 1/37$ has the same joint distribution.

**[Why-question](#why-questions).** $Q = \langle P_k, X, R \rangle$: topic, [contrast class](#contrast-class), [relevance relation](#relevance-relation). $E(K)$ is the [explanatory store](#explanatory-store) over beliefs $K$.

**Non-causal and mixed cases.** Rayleigh scattering, violet at 400 nm against blue at 450 nm: $(450/400)^4 \approx 1.60$. Perimeter of a regular $n$-gon of unit area: $2\sqrt{n\tan(\pi/n)}$, giving 4.56 (triangle), 4 (square), 3.72 (hexagon), so the hexagon saves 6.9 percent of wall against squares.

*From* [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.2](lessons/04-02-causal-explanation.md), [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md). Potential outcomes are [econometrics 3.1](../econometrics/lessons/03-01-potential-outcomes-identification.md) ([card](../econometrics/reference.md#potential-outcomes)).

### Formulas: Laws, reduction and emergence

**Hardy-Weinberg** (used as a test case for biological laws in 4.4 P3): genotype frequencies $p^2$, $2pq$, $q^2$.

**What Fodor's target demands.** For a special-science law $S_1x \to S_2y$, [bridge laws](#bridge-laws) $S_1x \leftrightarrow P_1x$ and $S_2y \leftrightarrow P_2y$, and a physical law $P_1x \to P_2y$.

**Temperature in kinetic theory.** $p$ pressure, $V$ volume, $N$ molecules of mass $m$, $k_B$ Boltzmann's constant:

$$p = \frac{1}{3}\frac{N}{V}\,m\langle v^2\rangle, \quad pV = \frac{2}{3}N\langle E_k\rangle; \qquad \langle E_k\rangle = \frac{3}{2}k_B T \;\text{ gives }\; pV = N k_B T.$$

The general link, for entropy $S$ and energy $E$: $1/T = \partial S/\partial E$.

**Game of Life.** A glider returns to its shape every 4 generations, shifted one cell diagonally: at generation $4k$ it has moved $(k,k)$. The R-pentomino stabilizes at generation 1,103 with population 116 and 6 gliders flying off.

*From* [4.4](lessons/04-04-laws-in-the-sciences.md), [4.5](lessons/04-05-reduction-and-emergence.md). The stat-mech definitions are [stat-mech 1.4](../stat-mech/lessons/01-04-temperature-pressure-chemical-potential.md).

### Formulas: Base rates for realism

$T$: a theory is approximately true. $S$: it is successful. $s = P(S \mid T)$, $f = P(S \mid \neg T)$, $\pi = P(T)$.

$$P(T \mid S) = \frac{s\pi}{s\pi + f(1-\pi)}.$$

**Threshold.** $P(T \mid S) \ge \tfrac12 \iff \pi \ge \dfrac{f}{s+f}$.

**Bound on the false-success rate at fixed $\pi$.** $f \le \dfrac{s\pi}{1-\pi}$.

**Dawid and Hartmann.** $P(S) > 2f \Rightarrow P(T \mid S) > \tfrac12$, with $P(S) = s\pi + f(1-\pi)$.

**After $n$ conditionally independent successes.** Posterior odds $= \dfrac{\pi}{1-\pi}\left(\dfrac{s}{f}\right)^{n}$.

**The lesson's invented numbers.** $s = 0.9$:

| $\pi$ | $f$ | $P(T \mid S)$ |
|---|---|---|
| 0.001 | 0.1 | $1/112 \approx 0.009$ |
| 0.02 | 0.1 | $9/58 \approx 0.155$ |
| 0.02 | 0.01 | $90/139 \approx 0.647$ |
| 0.2 | 0.1 | $9/13 \approx 0.692$ |
| 0.2 | 0.3 | $3/7 \approx 0.429$ |

Thresholds at $s = 0.9$: $\pi = 0.1$ at $f = 0.1$, and $\pi = 1/91 \approx 0.011$ at $f = 0.01$.

**Lewis's illustration (the lesson's numbers).** 1,000 past theories, 40 approximately true; success marks three-quarters of the true and 5 percent of the false: $40 \times \tfrac34 = 30$ true successes, $960 \times \tfrac{1}{20} = 48$ false successes, $P(\text{true} \mid \text{success}) = \tfrac{30}{78} = \tfrac{5}{13}$.

**Lange's head count.** $176/542 \approx 32$ percent of major-league managers from 1876 through 1990 had winning records, a cumulative share that is not a moment-by-moment rate.

**Partial drag, the 5.2 case.** For refractive index $n$ and medium speed $v$: drag factor $1 - 1/n^2$, speed $c/n + v(1 - 1/n^2)$, and

$$u = \frac{c/n + v}{1 + v/(nc)} = \frac{c}{n} + v\Big(1 - \frac{1}{n^2}\Big) + O(v^2/c).$$

*From* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md). Bayes' theorem on a screening test is [prob-stat-refresher 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md).

### Formulas: Structure and its survival

**[Fresnel's equations](#fresnel-equations)** at angles of incidence and refraction $\theta_1, \theta_2$, for polarizations $s$ and $p$:

$$r_s = -\frac{\sin(\theta_1 - \theta_2)}{\sin(\theta_1 + \theta_2)}, \qquad r_p = \frac{\tan(\theta_1 - \theta_2)}{\tan(\theta_1 + \theta_2)},$$

$$t_s = \frac{2\sin\theta_2\cos\theta_1}{\sin(\theta_1 + \theta_2)}, \qquad t_p = \frac{2\sin\theta_2\cos\theta_1}{\sin(\theta_1 + \theta_2)\cos(\theta_1 - \theta_2)}.$$

**Two derivations, s-polarization.** With $a = n_1\cos\theta_1$ and $b = n_2\cos\theta_2$:

| Theory | Boundary conditions |
|---|---|
| Fresnel's elastic ether | $1 + r = t$, $\ a(1 - r^2) = b\,t^2$ |
| Maxwell's field | $1 + r = t$, $\ a(1 - r) = b\,t$ |

Both give $r_s = (a - b)/(a + b)$. Worked: $n_1 = 1$, $n_2 = 39/25$, $\sin\theta_1 = 3/5$, $\sin\theta_2 = 5/13$ gives $r_s = -2/7$, $t_s = 5/7$.

**[Newman's](#newman-objection) lemma.** For a relation $S$ on $A$ and a bijection $f : A \to X$, the relation $R = \{(f(a), f(b)) : (a,b) \in S\}$ on $X$ has the structure of $S$. So what is needed is the right number of objects.

**Counting.** Copies of a structure $W$ on $n$ labelled objects: $n!/|\mathrm{Aut}(W)|$. Binary relations on $n$ objects: $2^{n^2}$. On four objects: $2^{16} = 65{,}536$ relations in $3{,}044$ isomorphism types; the 4-cycle has $4!/8 = 3$ copies.

*From* [5.3](lessons/05-03-structural-realism.md). The wave physics is [waves-optics 2.4](../waves-optics/lessons/02-04-light-as-em-wave.md) and [em-refresher 4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md).

## Arguments

The canonical arguments as premise skeletons, each at the strength its defenders would recognize. Labels follow the lessons' own numbering where they have one. A skeleton says what the lesson teaches; running it on a hard case is your job.

**Module 1: Induction and confirmation**

### Argument: Hempel's triviality result

Route 1, using three conditions:

1. **P1.** $E$ entails $E$, so $E$ confirms $E$ (entailment).
2. **P2.** $E \wedge H$ entails $E$, so $E$ confirms $E \wedge H$ (converse consequence).
3. **P3.** $E \wedge H$ entails $H$, so $E$ confirms $H$ (special consequence).
4. **C.** Every report confirms every hypothesis.

Route 2, using two: $E$ entails $E \vee H$, so $E$ confirms $E \vee H$ (entailment); $H$ entails $E \vee H$, so $E$ confirms $H$ (converse consequence). So dropping special consequence alone does not stop the collapse.

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md)

### Argument: Tacking

1. **P1.** $H \wedge K$ entails $E$ and $K$ alone does not.
2. **P2.** For any $X$ consistent with $H \wedge K$, $H \wedge X \wedge K$ entails $E$.
3. **C.** $E$ H-D-confirms $H \wedge X$.

Further step, needing special consequence: $H \wedge X$ entails $X$, so $E$ confirms $X$. Related gap: $H$ entails "the next $F$ is $G$", but that prediction does not entail the old data, so the old data do not H-D-confirm it.

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md)

### Argument: The new riddle

1. **P1.** If confirmation depends only on logical form, "all $F$ are $G$" is confirmed by its positive instances, whatever $F$ and $G$ are.
2. **P2.** Every emerald examined before $t$ and found green is grue.
3. **P3.** So if form alone decides, the record confirms "all emeralds are green" and "all emeralds are grue" alike, and these give incompatible verdicts on any emerald not examined before $t$.
4. **P4.** An adequate account of confirmation does not give both equal support.
5. **C1.** Confirmation does not depend on logical form alone.

Against Carnap's repair: **P5.** A predicate is positional only relative to a choice of primitive predicates. **C2.** No test on the form of a predicate's definition separates green from grue.

*Weakest joint:* the step from P5 to no difference that matters. Objection: reflectance and causes are asymmetric. Reply: each physical fact is stated in a vocabulary with its own twin.

*Lessons:* [1.2](lessons/01-02-the-new-riddle-of-induction.md)

### Argument: Is there one degree of confirmation

The target premise is that one quantity, degree of confirmation, is what the measures estimate. Objection: there is no privileged gauge, so perhaps no quantity. Reply: the sign is common, and each family is characterized by a principle, so the choice can be argued; or accept pluralism. The monist concedes that the rival principles must be argued down. The pluralist concedes that comparative claims have no truth value until a measure is named.

*Lessons:* [1.3](lessons/01-03-confirmation-as-probability-raising.md)

### Argument: The ravens paradox

1. **P1.** An object that is $F$ and $G$ confirms "every $F$ is $G$" (positive clause of Nicod's criterion).
2. **P2.** What confirms a hypothesis confirms anything logically equivalent to it (equivalence condition).
3. **P3.** "Every raven is black" is logically equivalent to "every non-black thing is a non-raven".
4. **C.** A non-black non-raven confirms "every raven is black".

*Lessons:* [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.4](lessons/01-04-the-ravens-paradox.md)

### Argument: Replies and counterattacks on the ravens

- **Hempel's reply.** The premises concern the report taken alone. The intuition imports the knowledge that the object is no raven. So the conclusion stands.
- **Standard Bayesian solution.** From A1 and A2 the posterior-to-prior ratios are $1/P(B \mid R)$ and $1/P(\neg R \mid \neg B)$; A3 makes the second near 1 ([formulas](#formulas-ravens)).
- **Vranas's lacuna.** A2 is for practical purposes necessary for the shoe's confirming to a minute degree; no adequate defence of A2 exists; so that verdict is unsupported.
- **Good's counterexample.** A pair of worlds plus a uniform draw gives a likelihood ratio of about 0.1 for a positive instance; so P1 is false given that background.
- **Hempel's rejoinder.** Good's case concerns a stronger evidence sentence, not the report alone, so it misses P1 as Hempel meant it.

*Lessons:* [1.4](lessons/01-04-the-ravens-paradox.md)

### Argument: Glymour on old evidence

1. **P1.** $E$ confirms $H$ for an agent at $t$ iff $P_t(H \mid E) > P_t(H)$.
2. **P2.** If the agent knows $E$ at $t$, then $P_t(E) = 1$.
3. **P3.** If $P(E) = 1$, then $P(H \mid E) = P(H)$.
4. **P4.** Mercury's excess perihelion advance, long known, was strong evidence for general relativity when Einstein derived it.
5. **C.** At least one premise must go.

Responses are in [counterfactual solution](#counterfactual-solution) and [logical learning solution](#logical-learning-solution). *Earman's complaint against logical learning:* it delivers a rise in credence on a logical fact, not support by the datum. *Weakest joint:* P1 defines what $E$ adds now, while P4 may concern a standing relation of support.

*Lessons:* [1.5](lessons/01-05-the-problem-of-old-evidence.md)

### Argument: Akaike on simplicity

1. **P1.** Fit on the same data overstates accuracy by about $k$ in log-likelihood.
2. **P2.** So $(\ln\hat L - k)/n$ estimates predictive accuracy.
3. **C.** Fewer parameters can be better, for a reason that needs no claim that nature is simple.

Two objections. **Nested families:** every line is a parabola with $c = 0$, so LIN entails PAR, so no coherent probability function ranks LIN above PAR. **Sub-families:** freezing a parameter at its best-fit value leaves $\hat L$ unchanged and lowers $k$, so AIC rates the frozen family higher, down to a single curve with $k = 0$.

*Lessons:* [1.6](lessons/01-06-simplicity-and-curve-fitting.md)

**Module 2: Falsification, paradigms, and research programmes**

### Argument: Popper's answer to Hume

1. **P1.** No finite set of reports entails a strictly universal statement.
2. **P2.** A failed prediction deductively refutes the conjunction that yielded it.
3. **P3.** Laws are strictly universal, hence prohibitions.
4. **P4.** Conjecture, deduction and elimination suffice for learning from experience.
5. **C.** Science needs no inductive inference.

*Content argument.* If $T_1$ entails $T_2$ then $T_1$ forbids at least as much and is no more probable. So, Popper concludes, a science aiming at probability would aim at saying nothing, and science aims at bold conjectures.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Argument: Salmon's dilemma for corroboration

1. Unrefuted theories conflict in what they predict, and a prediction needs one of them as a premise.
2. Corroboration reports only the past.
3. If it bears on the future, induction is back.
4. If it does not, no rational basis for preference has been given.

*Popper's reply:* rely on no theory; since one must choose, prefer the best tested, since proposals ignoring those theories will not survive criticism, and nothing is more rational than critical discussion.

*Lessons:* [2.1](lessons/02-01-popper-conjectures-and-refutations.md)

### Argument: Duhem and Quine

**Weak thesis (Duhem, for physics).**

1. **P1.** A physical hypothesis $H$ entails an observable $O$ only together with auxiliaries $A_1, \dots, A_n$.
2. **P2.** $\neg O$ is observed.
3. **C1.** At least one conjunct is false, and logic does not say which.

**Against the crucial experiment.**

4. **P3.** A crucial experiment would turn refutation into proof: eliminate one of two rivals and the other is established.
5. **P4.** That needs a list of rivals known to be complete, and no physicist can know that.
6. **C2.** No experiment proves a physical hypothesis by elimination.

**Strong thesis (Quine, for everything).**

7. **P5.** Statements face experience only as a body: the unit of test is the whole web, logic and mathematics included.
8. **P6.** A recalcitrant experience requires some adjustment and no particular one.
9. **C3.** Any statement can be held true given drastic enough adjustments elsewhere, and none is immune to revision.

*Grünbaum's dilemma against C3:* either the rescuing auxiliary may be anything, and C3 is trivial, or it must be substantive, and nothing general guarantees one exists.

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md)

### Argument: Laudan and Leplin on empirical equivalence

1. Observability and auxiliaries change, so empirical equivalence holds only relative to a state of science.
2. Support is not exhausted by consequences, so equivalence does not entail equal support.

*Lessons:* [2.2](lessons/02-02-duhem-quine-and-underdetermination.md)

### Argument: Kuhn's functional case for normal science

1. **P1 (behaviour).** Members of a mature field work long inside one paradigm, charge failed puzzles to the solver or a fixable detail, and give the paradigm up only in crisis and only for a rival.
2. **P2 (function).** That conduct buys depth, sensitivity to violations, and a filter so that only what goes to the core forces change.
3. **P3 (no substitute).** No other way of organizing research would do those jobs.
4. **C (conditional norm).** If the aim is to improve scientific knowledge, scientists should behave essentially as they do, resistance included.

*Weakest premise:* P3. Objections: Feyerabend (tenacity plus proliferation), Popper (the normal scientist as a danger). Reply: the record before consensus; paradigm communities are small, so one field can house many.

*Lessons:* [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md)

### Argument: Incommensurability and the five values

**Semantic thesis.**

1. **P1.** A theoretical term gets its meaning from the laws it figures in.
2. **P2.** A revolution changes those laws.
3. **C1.** Key terms cannot be translated without loss, so there is no neutral language for point-by-point comparison.

**Choice without an algorithm.**

4. **P3.** Five values are shared.
5. **P4.** Each is imprecise.
6. **P5.** They conflict, and nothing assigns weights.
7. **C2.** They influence without determining.
8. **P6.** A choice is rational if it rests on reasons from public shared standards and stays open to argument.
9. **C3.** Theory choice can be rational without compelling one answer.

*Davidson:* a language we could not translate at all is one we could not recognize as a language; interpretation requires assuming others mostly speak truly by our lights; so there is no principled line between difference of scheme and difference of belief. *Objection at P6:* a standard licensing opposite verdicts on the same evidence is no standard. *Reply:* demanding an algorithm condemns every judgment-based practice, and weights are trained and argued over.

*Lessons:* [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md)

### Argument: Lakatos's methodology

1. **P1.** A failed prediction refutes only the conjunction of core and auxiliaries.
2. **P2.** So the unit of appraisal is a series of theories sharing a hard core, under a negative and a positive heuristic.
3. **P3.** A shift is theoretically progressive if the later theory predicts a novel fact, empirically progressive if some of that excess is corroborated, progressive if both, degenerating otherwise.
4. **P4.** One programme supersedes another by a comparison of records, and a stalled programme can recover.
5. **C.** Rational theory change is a comparison of programmes' records over time.

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Argument: Feyerabend against method

**Reductio on universal rules.**

1. **F1.** For any rule of method, some episode widely counted as great science broke it, and advanced by breaking it.
2. **F2.** A rule that would have blocked such an episode inhibits progress.
3. **FC.** A rule that never inhibits progress must be empty: the only one left is "anything goes".

**Deadline dilemma.** Either a methodology's standards carry a deadline or they do not. With one, they condemn programmes that recover. Without one, they forbid nothing.

**The [tower argument](#tower-argument) (the Aristotelians').** A dropped stone lands at the tower's foot; if the earth turned it would land far from the foot; so the earth does not turn. Feyerabend's analysis: the premise carries the natural interpretation that all motion is operative.

*Lessons:* [2.5](lessons/02-05-lakatos-and-feyerabend.md)

### Argument: Laudan on the demise of demarcation

1. **P1.** A demarcation criterion must give necessary and sufficient conditions for scientific status, and having that status must be a reason for belief.
2. **P2.** Since Aristotle every candidate (certainty, method, verifiability, falsifiability) has, Laudan says, failed one test or the other.
3. **P3.** What gets called science varies widely in how well supported it is.
4. **P4.** What we need to know about a claim is how well supported it is, and we can ask that without mentioning science.
5. **C.** No demarcation is worth having, and "pseudoscience" does only emotive work.

*Weakest point:* P1. Objection: complex concepts are not definable by necessary and sufficient conditions and still sort cases. Reply: the category must still be a reason for belief beyond the direct question of support. Counter: cluster features track whether a community will correct itself.

*Lessons:* [2.6](lessons/02-06-demarcation-after-popper.md)

**Module 3: Statistical evidence and the values of science**

### Argument: Fisher against Neyman

**Fisher's charge (1955).**

1. Neyman reinterprets the significance test as an acceptance procedure.
2. Repeated sampling, errors of the second kind and inductive behaviour make sense for acceptance procedures.
3. A scientist has one body of data and draws provisional conclusions, with no such repeated population.
4. So those notions do not belong in the logic of scientific inference.

**Neyman's reply (1956).**

1. A test problem must specify alternatives as well as a null.
2. Without error rates of both kinds no purely probabilistic theory of tests is possible.
3. Power is what decides whether non-rejection counts as confirmation.
4. So the second kind of error is indispensable.

**The substitution dispute.** Fisher: $P(\bar X - ts < \mu < \bar X + ts) = 0.95$ is a theorem, so substituting observed values is plain logic. Neyman: a probability statement about random variables generally fails when they are replaced by their values.

**The bridge premise (weakest point).** A property of a repeated procedure is carried over to the case in hand. Fisher's objection: only if this result is a fair member of that run. Neyman's reply: probability supplies nothing beyond the record, and the honest claim concerns the policy.

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md)

### Argument: Cox's case for conditioning

1. The coin shows which instrument was used.
2. The error rate averaged over the coin includes an instrument not used.
3. That average seems irrelevant to interpreting this reading.
4. So evaluate the reading conditionally on the instrument.

*Reply:* the unconditional rule suits long-run settings, the theory does not forbid conditioning, and against the stated alternative the rule's verdicts are defensible.

*Lessons:* [3.1](lessons/03-01-two-schools-of-statistical-inference.md)

### Argument: The likelihood principle and its critics

- **[Birnbaum](#birnbaums-argument)** (stated, not proved in the lesson). Sufficiency; conditionality; therefore the likelihood principle.
- **From sample-space dependence.** An account that ignores sample-space dependence cannot register optional stopping; error probabilities are what make data a test; so evidence is not exhausted by the likelihood.
- **Reply.** Error rates describe a procedure across unobserved data; the likelihood-ratio bound shows the evidence measure is not inflated by peeking; so a p-value's sensitivity to plans is not evidential.
- **Selection effect in likelihood form.** If the collection procedure makes the observation certain on each hypothesis, then the likelihood ratio is 1, whatever the catch looks like.

*Lessons:* [3.2](lessons/03-02-the-likelihood-principle.md)

### Argument: Two diagnoses of the replication crisis

**Base-rate diagnosis.**

1. A field's significant results mix true positives and false positives.
2. Their proportion depends on the base rate, power and level.
3. In many fields the base rate is low.
4. So a significant result often is not true. Remedy: raise the bar.

**Error-statistical diagnosis.**

1. A result is evidence only if the procedure could have detected the flaw.
2. Selection effects destroy that capacity while leaving the printed $p$ unchanged.
3. So hunted results are not severely tested. Remedy: make procedures auditable.

**Likelihoodist objection to severity.** What the data say is fixed by likelihoods; severity depends on counterfactual analyses that may be unknowable; so severity is no measure of evidence. *Reply:* selection is an observable feature of how results came to be reported.

*Lessons:* [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md)

### Argument: Rudner on inductive risk

1. **P1.** The scientist as scientist accepts or rejects hypotheses.
2. **P2.** No hypothesis is completely verified, so acceptance needs a decision that the evidence is strong enough.
3. **P3.** How strong is strong enough depends on how serious a mistake would be.
4. **C.** The scientist as scientist makes value judgments.

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md)

### Argument: Replies to Rudner

- **[Jeffrey](#jeffreys-reply).** The cost of error depends on the act; the hypothesis does not fix the act; no single acceptance suits every use; so report probabilities. (His paper is a reductio of acceptance, not a finished position.)
- **[Rudner's rejoinder](#rudners-reply-and-the-regress).** Reporting that the probability is $p$ is accepting a hypothesis about it, and acceptance takes a value decision.
- **[Levi](#levis-reply).** Acceptance as belief is governed by standards that do not vary with practical stakes.
- **[Douglas](#direct-and-indirect-roles-for-values).** Extension: inductive risk arises at every internal stage. Restriction: inside the reasoning, values may play an indirect role and not a direct one.

*Lessons:* [3.4](lessons/03-04-values-and-inductive-risk.md)

### Argument: Longino on objectivity

1. **P1.** Data are evidence only given background assumptions.
2. **P2.** Chains of justification end in assumptions with no evidence at hand.
3. **P3.** No inquirer stands outside all assumptions, so none can reliably judge the ones she holds.
4. **P4.** People not sharing an assumption can bring it to light and test it.
5. **P5.** So the only check on arbitrary preference at that point is critical interaction among people holding different assumptions.
6. **C.** A method is objective to the degree it permits transformative criticism.

*The crux with the individualist is P3;* Solomon's and Zollman's pressure is on P5. The numbering is the lesson's reconstruction.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

### Argument: Standpoint, reconstructed

1. **S1.** What an inquirer can notice depends on social position.
2. **S2.** Those on the receiving end of an arrangement can have a contingent advantage in seeing what it hides, once critically worked out.
3. **C.** Inquiry should start from those positions and scrutinize its own practices as rigorously as its objects.

*Lessons:* [3.5](lessons/03-05-objectivity.md)

**Module 4: Explanation, laws, and reduction**

### Argument: The case for the D-N model

1. **P1.** Understanding is seeing that the event was to be expected.
2. **P2.** A sound argument from laws and conditions shows that (conditions R1 to R4).
3. **P3.** Only lawlike generalizations serve.
4. **P4.** Causal talk adds no further ingredient.
5. **C.** Explanation is such an argument, and explanation and prediction share a form.

*Objection, at P1:* expectability and explanation come apart in both directions. *Reply:* the complaints are pragmatic, and a causal diagnosis is empty without an analysis of cause. The conditions: R1, the explanandum follows deductively; R2, the explanans includes general laws and the derivation needs them; R3, the explanans is testable; R4, every sentence of the explanans is true.

*Lessons:* [4.1](lessons/04-01-the-deductive-nomological-model.md)

### Argument: Interventionist case for causal explanation

1. **P1.** An explanation must cite what the explanandum depends on and omit what it doesn't.
2. **P2.** Statistical relevance is not yet dependence.
3. **P3.** A physical connection is not yet dependence.
4. **P4.** Mechanisms add parts and organization, and still need a test of relevance.
5. **P5.** Dependence is what would change under an intervention.
6. **P6.** A generalization explains only if invariant under some interventions, and explains more deeply the more it says about dependence.
7. **C.** A causal explanation cites invariant relations showing how the explanandum would have differed had its difference-makers differed.

*Weakest point:* P5 as sufficient for explaining (mechanist and actual-production objections). *Reply:* mechanisms are more dependencies, and what grounds a what-if is further science.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Argument: Hempel on functional analysis

The system functions; that requires condition $n$; trait $i$ would secure $n$; so $i$ is present. This affirms the consequent unless $i$ is indispensable, and functional equivalents deny that it is.

*Lessons:* [4.2](lessons/04-02-causal-explanation.md)

### Argument: Unification

1. **P1.** Understanding is having fewer facts accepted as ultimate.
2. **P2.** That is achieved by re-using argument patterns.
3. **P3.** The patterns must be stringent.
4. **P4.** The store is the best-unifying pattern set for what is believed.
5. **C.** A derivation explains iff it instantiates a pattern in the store.

Kitcher's addition: causal judgments derive from systematization. *Barnes's objection:* retrodictive derivations are as unified as predictive ones, yet only predictive ones seem to explain.

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Argument: The pragmatic theory of explanation

1. **P1.** An explanation is an answer to a why-question.
2. **P2.** A why-question is a triple: topic, contrast class, relevance relation.
3. **P3.** A direct answer has a fixed form and is judged by truth, favouring and comparison.
4. **P4.** Context fixes the contrast class and the relevance relation.
5. **C.** Being an explanation is a three-term relation, and explanatory power is pragmatic.

*Kitcher and Salmon:* the relevance relation is unconstrained, so for any true answer and topic some relation makes the one explain the other. *Reply:* context includes current science. *Rejoinder:* then the account is deflationary and gives no guidance in live disputes.

*Lessons:* [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md)

### Argument: Only fundamental physics has laws

A composite, and the lesson's own assembly.

1. **P1.** A law supports counterfactuals, can explain, and licenses projection.
2. **P2.** Stated without a hedge, generalizations outside physics are false.
3. **P3.** With a hedge, the claim is false or empty.
4. **P4.** In biology the generalizations are also contingent.
5. **C.** Outside fundamental physics there are generalizations that hold within limits, and no laws.

*Weakest:* P1, which packs three jobs into one category with one line. *[Falsity-or-triviality dilemma](#falsity-or-triviality-dilemma):* with a finite list of interferers the law is strict and probably false; with an open clause it is empty. *Earman and Roberts against Pietroski and Rey:* a generalization whose antecedent is irrelevant to its consequent satisfies the independent-confirmability condition, since each failure has an independently confirmable explanation.

*Lessons:* [4.4](lessons/04-04-laws-in-the-sciences.md)

### Argument: Fodor against reduction

1. **P1.** Every event a special science describes is a physical event.
2. **P2.** Reduction requires a bridge law pairing each special-science kind with a single natural kind of physics.
3. **P3.** Many special-science kinds are realized by physically heterogeneous kinds, open-endedly.
4. **P4.** A disjunction of heterogeneous physical kinds is not a natural kind of physics and appears in no law of physics.
5. **C.** Such laws do not reduce, though P1 stands.

*Weakest:* P2 (Richardson, Sober, Butterfield). *Reply:* a case-by-case deduction shows that the law holds without showing why. *Kim:* jade is disjunctive and not projectible; causal inheritance makes a heterogeneously realized kind causally heterogeneous; so laws are local and reducible. *The crux:* whether physically heterogeneous systems can be lawfully alike under a higher description, or whether such likeness is accident. *Shapiro's dilemma:* if realizers share the relevant properties they are not multiple; if they differ in them, they share few laws.

*Lessons:* [4.5](lessons/04-05-reduction-and-emergence.md)

**Module 5: Scientific realism**

### Argument: No miracles

A meta-level inference to the best explanation.

1. **P1.** Mature theories are strikingly successful, above all in novel prediction, and that is surprising.
2. **P2.** If those theories were approximately true, their success would be a matter of course.
3. **P3.** No rival explains that success as well; a false theory's success would be a miracle.
4. **C.** Provisionally, mature theories are approximately true.

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Argument: Replies to no miracles

- **Selection reply.** Only successful theories survive, so success is no surprise. Attacks P1.
- **Circularity charge.** The argument's form is the rule whose reliability is in question, so a doubter of the rule has been given no reason.
- **Rule-circular defence.** No premise asserts that the rule is reliable; rule-circularity is not vicious when using the rule does not guarantee a favourable result and there is no specific reason to doubt it.
- **Bad lot.** Ranking the theories on hand shows nothing unless the truth is likely to be among them, and that privilege has not been shown.
- **Base-rate objection.** High $s$ and low $f$ do not fix $P(T \mid S)$; the argument needs a premise about $\pi$ that it does not state; $\pi$ may be unavailable.

*Lessons:* [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md)

### Argument: Pessimistic induction, two forms

**As an induction.**

1. **P1.** Many past successful theories had central terms that, by current lights, do not refer, so they were not even approximately true.
2. **P2.** Our successful theories are no different in kind.
3. **C1.** Probably ours will go the same way, so we should not believe them approximately true.

**As a reductio.**

4. **P3.** Assume that a successful theory is probably approximately true.
5. **P4.** Then our current successful theories are probably approximately true.
6. **P5.** If they are, past theories that differ from them fundamentally were not.
7. **P6.** Many such past theories were successful.
8. **C2.** So success is not a reliable mark of approximate truth.

The label is later; Laudan never calls his argument an induction. *Lange's needed premise for the induction:* at most past moments, most of the theories then accepted are false by current lights.

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Argument: Divide et impera and its critics

- **[Selective realism](#selective-realism).** Success is earned by particular constituents; those constituents are retained; so P5 fails for them.
- **[Hindsight objection](#hindsight-objection).** The working parts are identified by what survived, and a test identified that way cannot be applied prospectively, so it gives no guidance about current posits.
- **Stanford's new induction.** Repeatedly, inquirers could conceive of only a few well-supported theories while radically different ones were equally supported by the same evidence; we are inquirers of the same kind; so probably such alternatives exist now.

*Lessons:* [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md)

### Argument: Worrall's structural realism

1. **P1 (no miracles).** Novel predictive success is a reason to think a theory has latched onto something about the unobservable world.
2. **P2 (theory change).** Theories with that success have been replaced by successors that reject their central entities.
3. **P3 (continuity).** Across the change, more than the empirical content carries over and less than the account of what the thing is: the relations.
4. **P4 (diagnosis).** So the success is credited to the structure both theories share, not to what each says about natures.
5. **C.** Believe the structure, and withhold on what stands in the relations.

*Lessons:* [5.3](lessons/05-03-structural-realism.md)

### Argument: Newman's objection

1. **P1.** A pure structural claim says: there is some relation $R$ with structure $W$, and nothing more is known of $R$.
2. **P2.** Relations are extensional: any set of pairs is a relation.
3. **P3 (lemma).** Any set of the right size carries a relation with structure $W$.
4. **C.** The claim says only how many objects there are.

*The resulting dilemma:* pure structure is trivial (Newman); interpreted structure is not separable from nature (Psillos).

*Lessons:* [5.3](lessons/05-03-structural-realism.md)

### Argument: Van Fraassen's constructive empiricism

1. **P1.** Theories are literally true or false.
2. **P2.** Truth entails empirical adequacy, not conversely.
3. **P3.** Experiment, choice and explanation need only acceptance.
4. **P4.** Experience is the only source of information about the world.
5. **C.** Science can be understood as aiming at empirical adequacy, with acceptance involving only that belief.

*Weakest point:* P4 joined to the line. Churchland objects, and critics add that belief in adequacy already outruns experience. *Reply:* the line tracks what experience can bear on.

*Lessons:* [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

### Argument: Maxwell's continuum and Hacking's manipulation

**Maxwell.** **M1.** There is a continuous series of lookings. **M2.** There is no non-arbitrary line between observation and theory. **M3.** What exists cannot depend on such a line. **C.** The distinction carries no ontological weight.

**Hacking.** **H1.** Experimenters build devices exploiting an entity's causal powers to interfere in something more hypothetical. **H2.** One cannot rely on those powers while withholding belief in the entity. **C.** Belief in the entity is warranted without belief in any theory of it.

*Lessons:* [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md)

## Thinkers and texts

Alphabetical. The thesis column is the lessons' one-line version, not a verdict. Dates are of the works the lessons cite. Modern works are paraphrased here; public-domain texts are quoted only in the lessons that use them.

| Who | When | Key work | One-line thesis as the lessons give it | Lessons |
|---|---|---|---|---|
| Hirotugu Akaike | 1973 | "Information Theory and an Extension of the Maximum Likelihood Principle" | a criterion as an estimator of predictive accuracy | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| Jeanne Altmann | 1974 | "Observational Study of Behavior: Sampling Methods" | focal-animal sampling | [3.5](lessons/03-05-objectivity.md) |
| P. W. Anderson | 1972 | "More Is Different" | accepts reduction and rejects construction | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Eric Barnes | 1992 | "Explanatory Unification and the Problem of Asymmetry" | retrodictive derivations are as unified as predictive ones | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| John Beatty | 1995 | paper on biological generalizations | the evolutionary contingency thesis | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Mark Bedau | 1997 | paper on weak emergence | weak emergence as what you can only learn by simulating | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Daniel Benjamin and 71 co-authors | 2018 | "Redefine Statistical Significance" | the 0.005 proposal | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| John Bickle | 2003 | work on molecular mechanisms | conserved molecular mechanisms; temperature as multiply realized | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Allan Birnbaum | 1962; 1969 | "On the Foundations of Statistical Inference" | sufficiency plus conditionality entail the likelihood principle; he later rejected the principle | [3.2](lessons/03-02-the-likelihood-principle.md) |
| Maarten Boudry (with Braeckman; with Blancke and Braeckman) | 2011; 2010 | papers on pseudoscience and on naturalism | immunizing strategies; intrinsic and provisory grounds for methodological naturalism | [2.6](lessons/02-06-demarcation-after-popper.md) |
| Richard Boyd | 1984; 1991; 1999 | "The Current Status of Scientific Realism"; "Realism, Anti-Foundationalism and the Enthusiasm for Natural Kinds"; "Homeostasis, Species, and Higher Taxa" | reliability of theory-dependent method explained by approximate truth; natural kinds as homeostatic property clusters | [1.2](lessons/01-02-the-new-riddle-of-induction.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| Percy Bridgman | 1927 | *The Logic of Modern Physics* | a concept is synonymous with a set of operations | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| C. D. Broad | 1925 | British emergentism | British emergentism at its fullest | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Sylvain Bromberger | 1966 | "Why-Questions" | pressed the explanatory asymmetry; Salmon calls the flagpole his | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| Jerome Bruner and Leo Postman | 1949 | "On the Perception of Incongruity: A Paradigm" | the trick-card experiment | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| Jeremy Butterfield | 2011 | papers on emergence and reduction | emergence is compatible with Nagelian reduction | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Rudolf Carnap | 1947; 1950, 2nd ed. 1962 | "On the Application of Inductive Logic"; *Logical Foundations of Probability* | inductive logic should use qualitative predicates (answering Goodman's 1946 version); firmness versus increase in firmness, and the charge that Hempel ran them together | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.2](lessons/01-02-the-new-riddle-of-induction.md), [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| Nancy Cartwright | 1983 | *How the Laws of Physics Lie* | laws read as statements of fact are false; amended to be true they cover few cases | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Anjan Chakravartty | 1998; 2004 | papers on structural realism | relations need relata; structure is often lost too | [5.3](lessons/05-03-structural-realism.md) |
| David Chalmers | 2006 | paper on strong and weak emergence | strong and weak emergence | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Hasok Chang | 2003; 2010; 2012 | "The Hidden History of Phlogiston"; *Is Water H2O? Evidence, Realism and Pluralism* | contests the caloric case; phlogiston was abandoned too rashly | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| Paul Churchland | 1985 | "The Ontological Status of Observables" | the size-distance objection and the humanoids | [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| Mat Coakley | reported in SEP | observation on the ravens | with non-raven cells independent of $H$, a black raven confirms and a non-black non-raven does not | [1.4](lessons/01-04-the-ravens-paradox.md) |
| Jonathan Cohen and Craig Callender | 2009 | paper on the best system | the better best system | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| John Conway | 1970 | the Game of Life | the lesson's test bed for emergence | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Maurice Cornforth | 1968 | *The Open Philosophy and the Open Society* | Marxist reply to Popper | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| D. R. Cox | 1958 | "Some Problems Connected with Statistical Inference" | two instruments; weak conditionality | [3.1](lessons/03-01-two-schools-of-statistical-inference.md), [3.2](lessons/03-02-the-likelihood-principle.md) |
| Crupi, Chater and Tentori | 2013 | "New Axioms for Probability and Likelihood Ratio Measures" | axiomatic characterizations of the measures | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| Robert Cummins | 1975 | "Functional Analysis" | the systemic account of function | [4.2](lessons/04-02-causal-explanation.md) |
| Alexander D'Amour and colleagues | 2020 | "Underspecification Presents Challenges for Credibility in Modern Machine Learning" | names held-out-equivalent predictors that differ in deployment | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| Charles Darwin | 6th ed. 1872 | *The Origin of Species* | states a test his theory could fail (ch. VI); a theory's reach over several classes of fact as evidence of truth (ch. XV) | [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.5](lessons/02-05-lakatos-and-feyerabend.md), [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| Lorraine Daston and Peter Galison | 1992; 2007 | papers and a book on objectivity | the history of objectivity; mechanical objectivity | [3.5](lessons/03-05-objectivity.md) |
| Donald Davidson | 1974 | "On the Very Idea of a Conceptual Scheme" | no untranslatable scheme can be identified | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| A. P. Dawid | 2014 | discussion of Mayo, *Statistical Science* | defends Birnbaum's argument against Mayo's reading | [3.2](lessons/03-02-the-likelihood-principle.md) |
| Richard Dawid and Stephan Hartmann | 2018 | "The No Miracles Argument without the Base Rate Fallacy" | a condition on $P(S)$ that fixes the posterior above one half | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| William Demopoulos and Michael Friedman | 1985 | critical notice of Russell | Newman applied to Ramsey sentences | [5.3](lessons/05-03-structural-realism.md) |
| Jon Dorling | 1979 | "Bayesian Personalism, the Methodology of Scientific Research Programmes, and Duhem's Problem" | Bayesian allocation of blame between hypothesis and auxiliary | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| Heather Douglas | 2000; 2004; 2009 | "Inductive Risk and Values in Science"; "The Irreducible Complexity of Objectivity"; *Science, Policy, and the Value-Free Ideal* | inductive risk at every internal stage; direct and indirect roles; eight irreducible senses of objectivity | [3.4](lessons/03-04-values-and-inductive-risk.md), [3.5](lessons/03-05-objectivity.md) |
| Phil Dowe | 1992; 2000 | *Physical Causation* | causal processes defined by conserved quantities | [4.2](lessons/04-02-causal-explanation.md) |
| Fred Dretske | 1977 | "Laws of Nature" | laws as relations among universals | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Patrick Duerr and William Wolf | 2023 | "Methodological Reflections on the MOND/Dark Matter Debate" | Lakatos's criteria applied to MOND | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| Pierre Duhem | 1906 | *La Théorie physique* | physical hypotheses are tested only in groups; no crucial experiment; good sense decides; the representative part survives and the explanatory part falls | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| John Dupré | 1993 | *The Disorder of Things* | science as a family resemblance | [2.6](lessons/02-06-demarcation-after-popper.md) |
| Keith Dyck | 2023 | "On No-Miracles and the Base-Rate Fallacy" | moving to the selected population raises $f$ too | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| John Earman | 1992 | *Bayes or Bust?* | old evidence as a problem for conditionalization; the problem of new theories | [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| John Earman and John Roberts | 1999; with Smith, 2002 | "Ceteris Paribus, There Is No Problem of Provisos" | the hard line on ceteris paribus laws | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Arthur Eddington | 1939 | *The Philosophy of Physical Science*, ch. II | the ichthyologist's net; selective subjectivism | [3.2](lessons/03-02-the-likelihood-principle.md) |
| Paul Feyerabend | 1962; 1970; 1975, 3rd ed. 1993 | "Explanation, Reduction and Empiricism"; "Consolations for the Specialist"; *Against Method* | co-originator of incommensurability; tenacity with proliferation; no rule of method survives the history of great science | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md), [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| Hartry Field | 1973 | "Theory Change and the Indeterminacy of Reference" | partial denotation | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| Arthur Fine | 1984; 1986 | "The Natural Ontological Attitude"; *The Shaky Game* | the circularity charge; the natural ontological attitude | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| R. A. Fisher | 1925; 1926; 1955; 1956 | *Statistical Methods for Research Workers*; "The Arrangement of Field Experiments"; "Statistical Methods and Scientific Induction"; *Statistical Methods and Scientific Inference* | the significance test and the p-value as evidence against a null | [3.1](lessons/03-01-two-schools-of-statistical-inference.md), [3.4](lessons/03-04-values-and-inductive-risk.md) |
| Branden Fitelson | 1999; with Hawthorne, 2010 | "The Plurality of Bayesian Measures of Confirmation and the Problem of Measure Sensitivity"; "How Bayesian Confirmation Theory Handles the Paradox of the Ravens" | many confirmation arguments silently depend on the measure; a comparative ravens verdict without independence | [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.4](lessons/01-04-the-ravens-paradox.md) |
| Jerry Fodor | 1974; 1997 | "Special Sciences" and its 1997 sequel | autonomy of the special sciences | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Malcolm Forster and Elliott Sober | 1994 | "How to Tell When Simpler, More Unified, or Less Ad Hoc Theories Will Provide More Accurate Predictions" | Akaike solves the curve-fitting problem as a matter of predictive accuracy | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| Augustin Fresnel | memoir read January 1823 | reflection and refraction equations from an elastic-ether model | the case structural realism is built on | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md), [5.3](lessons/05-03-structural-realism.md) |
| Michael Friedman | 1974 | "Explanation and Scientific Understanding" | understanding as reduction of independent assumptions | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| Greg Gandenberger | 2015 | "A New Proof of the Likelihood Principle" | restates Birnbaum's argument to meet the objections | [3.2](lessons/03-02-the-likelihood-principle.md) |
| Daniel Garber | 1983 | "Old Evidence and Logical Omniscience in Bayesian Confirmation Theory" | the entailment as an extra atom | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| Andrew Gelman and Eric Loken | 2013 | "The garden of forking paths" | multiple comparisons without fishing | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| Ken Gemes | 1993 | "Hypothetico-Deductivism, Content and the Natural Axiomatization of Theories" | a content-part restriction on H-D | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| Michael Ghiselin and David Hull | 1974; 1976, 1978 | "A Radical Solution to the Species Problem"; "Are Species Really Individuals?"; "A Matter of Individuality" | species are individuals | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| Gerd Gigerenzer | 1993; 2004 | "Mindless Statistics" | the textbook hybrid and the "null ritual" | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| Donald Gillies | 1986 | "In Defense of the Popper-Miller Argument" | the log-ratio measure fails on deductive evidence | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| Clark Glymour | 1980 | "Hypothetico-Deductivism Is Hopeless"; *Theory and Evidence*, the chapter "Why I Am Not a Bayesian" | H-D cannot secure relevance; known evidence confirms nothing on the Bayesian definition | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| I. J. Good | 1967; 1968 | "The White Shoe Is a Red Herring"; "The White Shoe qua Herring Is Pink" | a positive instance can disconfirm | [1.4](lessons/01-04-the-ravens-paradox.md) |
| Nelson Goodman | Athlone 1954, Harvard 1955 | *Fact, Fiction, and Forecast* | which predicates we project is the real problem of induction, and the answer lies in entrenchment; only lawlike statements are confirmed by their instances | [1.2](lessons/01-02-the-new-riddle-of-induction.md), [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Adolf Grünbaum | 1960; 1984 | "The Duhemian Argument"; *The Foundations of Psychoanalysis* | the rescuing-auxiliary claim is trivial or unproved; Freud's claims are falsifiable and their clinical evidence contaminated | [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| Ian Hacking | 1965; 1983 | *Logic of Statistical Inference*; *Representing and Intervening* | named the law of likelihood; entity realism by manipulation | [3.2](lessons/03-02-the-likelihood-principle.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| Alan Hájek | 2007 | paper on the reference class | every interpretation owes the reference-class problem | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| Alan Hájek and James Joyce | 2008 | "Confirmation" | pluralism about measures | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| Thomas Hales | 2001 | "The Honeycomb Conjecture" | the theorem in the honeycomb explanation | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| Norwood Russell Hanson | 1958 | *Patterns of Discovery* | theory-ladenness of seeing | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| Sven Ove Hansson | 1996; 2013 | definition of pseudoscience | not scientific, and presented as the most reliable knowledge of its subject | [2.6](lessons/02-06-demarcation-after-popper.md) |
| Sandra Harding | 1991 | *Whose Science? Whose Knowledge?* | strong objectivity | [3.5](lessons/03-05-objectivity.md) |
| Nancy Hartsock | 1983 | "The Feminist Standpoint" | standpoint on a Marxist model | [3.5](lessons/03-05-objectivity.md) |
| James Hawthorne and Branden Fitelson | 2004 | "Re-solving Irrelevant Conjunction with Probabilistic Independence" | $d$ and $l$ penalize an irrelevant conjunct; $r$ does not | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| Carl G. Hempel (with Paul Oppenheim, 1948) | 1945; 1946; 1948; 1959; 1960, reprinted 1965; 1965; 1967; 1988 | "Studies in the Logic of Confirmation"; "A Note on the Paradoxes of Confirmation"; "Studies in the Logic of Explanation"; "The Logic of Functional Analysis"; "Science and Human Values"; *Aspects of Scientific Explanation*; "The White Shoe: No Red Herring"; "Provisoes: A Problem Concerning the Inferential Function of Scientific Theories" | a formal logic of confirmation with adequacy conditions; accepted the ravens conclusion and blamed imported background; D-N and I-S models; named inductive risk; the problem of provisos | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.4](lessons/01-04-the-ravens-paradox.md), [3.4](lessons/03-04-values-and-inductive-risk.md), [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.2](lessons/04-02-causal-explanation.md), [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Leah Henderson | 2017 | "The No Miracles Argument and the Base Rate Fallacy" | a reply to the base-rate objection through random sampling | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| Christopher Hitchcock | 1995 | "Discussion: Salmon on Explanatory Relevance" | process connections do not say which property matters | [4.2](lessons/04-02-causal-explanation.md) |
| Arthur Holmes | in print by 1931 | "Radioactivity and Earth Movements" | mantle convection | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| Paul Horwich | 1982 | *Probability and Evidence* | how evidence is collected matters to what it confirms | [1.4](lessons/01-04-the-ravens-paradox.md) |
| Janina Hosiasson-Lindenbaum | 1940 | "On Confirmation" | an early probabilistic treatment of the ravens | [1.4](lessons/01-04-the-ravens-paradox.md) |
| Colin Howson | 1990; 1991; 2000; 2013; 2017 | "Fitting Your Theory to the Facts"; "The 'Old Evidence' Problem"; *Hume's Problem*; "Exhuming the No-Miracles Argument"; "Putting on the Garber Style? Better Not" | counterfactual credences; doubt about the quantitative project; the base-rate fallacy in the no-miracles argument; later doubt that subjective Bayesianism can solve old evidence | [1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.5](lessons/01-05-the-problem-of-old-evidence.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| Paul Hoyningen-Huene | no date in the lesson | reading of Kuhn | "different worlds" as a change in the phenomenal world | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| Sarah Hrdy | 1977 | *The Langurs of Abu* | female reproductive strategies | [3.5](lessons/03-05-objectivity.md) |
| David Hume | no date in the lesson | *An Enquiry concerning Human Understanding*, Section IV | quoted for the premise of the riddle; the problem itself is owned elsewhere | [1.2](lessons/01-02-the-new-riddle-of-induction.md) |
| John Ioannidis | 2005 | "Why Most Published Research Findings Are False" | a screening model of a field's findings, with a bias term | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| Frank Jackson and Robert Pargetter | 1980 | paper on projection | third sons: accidental generalizations can project | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Richard Jeffrey (not Harold Jeffreys) | 1956; 1983 | "Valuation and Acceptance of Scientific Hypotheses"; "Bayesianism with a Human Face" | the scientist assigns probabilities; a closed form for logical learning | [1.5](lessons/01-05-the-problem-of-old-evidence.md), [3.4](lessons/03-04-values-and-inductive-risk.md) |
| Harold Jeffreys (not Richard Jeffrey) | 1939; 3rd ed. 1961 | *Theory of Probability* | the simplicity postulate; anticipates Lindley; argued continental drift physically impossible | [1.6](lessons/01-06-simplicity-and-curve-fitting.md), [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md), [3.2](lessons/03-02-the-likelihood-principle.md) |
| James Joyce | 1999 | *The Foundations of Causal Decision Theory*, ch. 6 | several legitimate concepts of confirmation | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| Jaegwon Kim | 1992 | paper on multiple realization | jade, causal inheritance, local reduction | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Philip Kitcher | 1981; 1984; 1989; 1990; 1993 | "Explanatory Unification"; work on genetics; "Explanatory Unification and the Causal Structure of the World"; "The Division of Cognitive Labor"; *The Advancement of Science* | explanation as argument patterns, causal order derivative; credit can distribute effort better than truth-seeking; working versus presuppositional posits | [3.5](lessons/03-05-objectivity.md), [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md), [4.5](lessons/04-05-reduction-and-emergence.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| Thomas S. Kuhn (not Harold W. Kuhn) | 1962; Postscript 1969, 2nd ed. 1970; 1970; 1977; given 1982, printed 1983; 2000 | *The Structure of Scientific Revolutions*; "Reflections on My Critics"; *The Essential Tension*; "Commensurability, Comparability, Communicability"; *The Road Since Structure* | science alternates normal and revolutionary phases; theory choice is guided by shared values, without an algorithm | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| Theo Kuipers | 2000 | *From Instrumentalism to Constructive Realism* | the tacked conjunction is confirmed but the credit stays with the hypothesis | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| Henry Kyburg | 1965; with Teng, 2001 | comment on Salmon; *Uncertain Inference* | the salt with the dissolving spell; doubt about the quantitative project | [1.3](lessons/01-03-confirmation-as-probability-raising.md), [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| James Ladyman | 1998; with French, 2003; with Ross, 2007 | "What Is Structural Realism?"; *Every Thing Must Go* | ontic structural realism | [5.3](lessons/05-03-structural-realism.md) |
| Imre Lakatos | 1970; 1974; with Zahar, 1975 | "Falsification and the Methodology of Scientific Research Programmes"; "Popper on Demarcation and Induction" | replaced Popper's appraisal of single theories with appraisal of series; labelled naive falsificationism; asked Popper for a "whiff of 'inductivism'" | [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md), [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| Marc Lange | 1993; 2000; 2002 | *Natural Laws in Scientific Practice*; "Baseball, Pessimistic Inductions and the Turnover Fallacy" | the ceteris paribus dilemma stated; stability; cumulative counts overstate turnover | [4.4](lessons/04-04-laws-in-the-sciences.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| Rae Langton | 1998 | *Kantian Humility* | a cousin of epistemic structural realism | [5.3](lessons/05-03-structural-realism.md) |
| Larry Laudan | 1981; 1982; 1983; 1990; with Leplin, 1991 | "A Confutation of Convergent Realism"; "Science at the Bar"; "The Demise of the Demarcation Problem"; "Demystifying Underdetermination"; "Empirical Equivalence and Underdetermination" | history shows success without reference or approximate truth; drop the demarcation and assess the support; logical possibility is not rational defensibility | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [2.6](lessons/02-06-demarcation-after-popper.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| E. L. Lehmann | 1993 | "The Fisher, Neyman-Pearson Theories of Testing Hypotheses: One Theory or Two?" | no universal answer between the schools; nothing in the theory forbids conditioning | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| Urbain Le Verrier; Simon Newcomb | 1859; later reductions | reports of Mercury's perihelion | reported the excess advance; later reductions near 43 arc seconds per century | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| Isaac Levi | 1960; 1962 | "Must the Scientist Make Value Judgments?"; "On the Seriousness of Mistakes" | acceptance as belief against acceptance as action | [3.4](lessons/03-04-values-and-inductive-risk.md) |
| Peter Lewis | 2001 | "Why the Pessimistic Induction Is a Fallacy" | a reliable test can have mostly false successes where true theories are scarce | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| Dennis Lindley (with Phillips, 1976) | 1957; 1976 | "A Statistical Paradox"; "Inference for a Bernoulli Process (a Bayesian View)" | fixed $z$, growing $n$, Bayes factor toward the null; the standard coin example of stopping-rule dependence | [3.2](lessons/03-02-the-likelihood-principle.md) |
| Peter Lipton | 1991, 2nd ed. 2004; 1993; 1999 | *Inference to the Best Explanation*; "Is the Best Good Enough?"; "All Else Being Equal" | likeliest versus loveliest; dispositional accounts bring the clause back | [4.4](lessons/04-04-laws-in-the-sciences.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| Barry Loewer | 2012 | on explaining laws | metaphysical and scientific explanation of laws | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Helen Longino | 1990; 2002 | *Science as Social Knowledge*; *The Fate of Knowledge* | objectivity as a community's critical practice | [3.5](lessons/03-05-objectivity.md) |
| Hendrik Lorentz | 1875 | derivation of Fresnel's equations | first derivation from electromagnetic principles | [5.3](lessons/05-03-structural-realism.md) |
| Robert Lucas | 1976 | "Econometric Policy Evaluation: A Critique" | estimated relations are not invariant to policy | [4.2](lessons/04-02-causal-explanation.md) |
| Lyon and Colyvan | 2008 | "The Explanatory Power of Phase Spaces" | the standard treatment of the honeycomb case as mathematics in biological explanation | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| Ernst Mach | English 1893 | *The Science of Mechanics* | atoms as mental artifices | [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| Peter Machamer, Lindley Darden, Carl Craver | 2000 | "Thinking about Mechanisms" | explanation by entities and activities | [4.2](lessons/04-02-causal-explanation.md) |
| David MacKay | 2003 | *Information Theory, Inference, and Learning Algorithms* | the Occam factor | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| P. D. Magnus and Craig Callender | 2004 | "Realist Ennui and the Base Rate Fallacy" | wholesale and retail arguments | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| Patrick Maher | 2004 | reported in Fitelson and Hawthorne | a Carnapian counterexample to Nicod on empty background | [1.4](lessons/01-04-the-ravens-paradox.md) |
| Margaret Masterman | 1970 | "The Nature of a Paradigm" | "not less than twenty-one" senses of paradigm (the Postscript reports twenty-two) | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| Grover Maxwell (not James Clerk) | 1962 | "The Ontological Status of Theoretical Entities" | the continuum argument | [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| James Clerk Maxwell (not Grover) | 1865 | electromagnetic theory of light | the successor to the ether in the structural realist's case | [5.3](lessons/05-03-structural-realism.md) |
| Deborah Mayo | 1996; with Spanos, 2006; 2014; 2018 | *Error and the Growth of Experimental Knowledge*; "On the Birnbaum Argument for the Strong Likelihood Principle"; *Statistical Inference as Severe Testing* | severity and error statistics; the Birnbaum derivation fails | [3.2](lessons/03-02-the-likelihood-principle.md), [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| Brian McLaughlin | 1992 | essay on British emergentism | its rise and fall | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Joseph Melia and Juha Saatsi | 2006 | paper on the Ramsey sentence | natural relations | [5.3](lessons/05-03-structural-realism.md) |
| Robert Merton | 1942 | essay on the norms of science | norms of science | [3.5](lessons/03-05-objectivity.md) |
| Mordehai Milgrom; David Merritt | 1983; 2020 | MOND papers; *A Philosophical Approach to MOND* | modified Newtonian dynamics, and its appraisal as a programme | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| John Stuart Mill | 8th ed. 1882 | *A System of Logic*, Book III | why one instance sometimes suffices and myriads do not; heteropathic laws | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [1.4](lessons/01-04-the-ravens-paradox.md), [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.4](lessons/04-04-laws-in-the-sciences.md), [4.5](lessons/04-05-reduction-and-emergence.md) |
| Ruth Millikan; Karen Neander | 1984; 1991 | *Language, Thought, and Other Biological Categories*; "Functions as Selected Effects" | selected-effect function | [4.2](lessons/04-02-causal-explanation.md) |
| Peter Milne | 1996 | paper defending the log-ratio measure as the one true measure | defends $r$ | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| Sandra Mitchell | 1997; 2003 | *Philosophy of Science* 64 (Supplement), and a book | pragmatic laws, integrative pluralism | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Alan Musgrave | 1985; 1988 | realist papers | critic of van Fraassen and of the natural ontological attitude; the good-enough requirement | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| Ernest Nagel | 1961 | *The Structure of Science* | reduction as derivation with connecting assumptions; functions as necessary conditions | [4.2](lessons/04-02-causal-explanation.md), [4.5](lessons/04-05-reduction-and-emergence.md) |
| M. H. A. Newman (not John Henry Newman) | 1928 | "Mr. Russell's 'Causal Theory of Perception'" | pure structure says only how many objects there are | [5.3](lessons/05-03-structural-realism.md) |
| Isaac Newton | Motte's English 1729 | *Principia*, Book III, Rule I | no more causes than are true and sufficient | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| Jerzy Neyman (with Egon Pearson, 1933) | 1933; 1937; 1956; 1957 | "On the Problem of the Most Efficient Tests of Statistical Hypotheses"; "Note on an Article by Sir Ronald Fisher" | error rates of both kinds; confidence intervals; "inductive behaviour" (his label, not Pearson's or the 1933 paper's) | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| Jean Nicod | 1923 thesis, printed 1924 | *Le problème logique de l'induction* | instances are the two direct modes in which a fact bears on a law | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md) |
| Ilkka Niiniluoto | 1983 | "Novel Facts and Bayesianism" | logical learning | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| William of Ockham | 14th c. | *Ordinatio*; *Summa Logicae* | do not posit without a reason from self-evidence, experience or authority | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| Samir Okasha | 2011 | "Theory Choice and Social Choice: Kuhn versus Arrow" | Arrow's theorem applied to the five values | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| Open Science Collaboration | 2015 | the 100-study replication project, *Science* | how many findings replicated | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| Naomi Oreskes | 1999 | *The Rejection of Continental Drift* | drift was rejected on standards of practice | [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md) |
| William R. Overton | 1982 | judge, *McLean v. Arkansas* | five marks of science | [2.6](lessons/02-06-demarcation-after-popper.md) |
| Egon S. Pearson | 1955 | "Statistical Concepts in Their Relation to Reality" | left "inductive behaviour" to Neyman | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| Jean Perrin | 1908; about 1912 | Brownian-motion experiments; routes to Avogadro's number | thirteen routes in close agreement | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| Paul Pietroski and Georges Rey | 1995 | paper on ceteris paribus | saving ceteris paribus laws from vacuity | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Massimo Pigliucci | 2013 | "The Demarcation Problem: A (Belated) Response to Laudan" | science as a cluster notion | [2.6](lessons/02-06-demarcation-after-popper.md) |
| Henri Poincaré | 1902; Greenstreet's translation 1905 | *Science and Hypothesis* | reports the "bankruptcy of science" and rejects it; forerunner of structural realism | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md), [5.3](lessons/05-03-structural-realism.md) |
| Karl Popper | 1934 (imprint 1935); 1959; 1963; 1970; 1972; 1976 | *Logik der Forschung*, *The Logic of Scientific Discovery*; *Conjectures and Refutations*; "Normal Science and Its Dangers"; *Objective Knowledge*; *Unended Quest* | science is conjecture and refutation; falsifiability demarcates science; simpler means more falsifiable | [1.6](lessons/01-06-simplicity-and-curve-fitting.md), [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md), [2.6](lessons/02-06-demarcation-after-popper.md), [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Theodore Porter | 1995 | *Trust in Numbers* | rule-bound quantification and trust | [3.5](lessons/03-05-objectivity.md) |
| William Prout; Jean Stas; Frederick Soddy; Francis Aston | 1815-16; 1860; 1913; 1919, 1920 | hypothesis of whole-number atomic weights; twenty years' measurements against it; isotopes; mass spectrograph | the lesson's worked programme | [2.5](lessons/02-05-lakatos-and-feyerabend.md) |
| Stathis Psillos | 1995; 1999; 2009 | "Is Structural Realism the Best of Both Worlds?"; *Scientific Realism: How Science Tracks Truth*; *Knowing the Structure of Nature* | structure and nature form a continuum; rule-circular defence; divide et impera; the base rate cannot be measured | [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md), [5.3](lessons/05-03-structural-realism.md) |
| Hilary Putnam | 1967; 1975; 1978 | *Mathematics, Matter and Method*; "Philosophy and Our Mental Life"; *Meaning and the Moral Sciences* | multiple realizability and the peg; realism alone does not make success a miracle; the worry about failed reference | [4.5](lessons/04-05-reduction-and-emergence.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| W. V. O. Quine | 1951, reprint 1953; 1969 | "Two Dogmas of Empiricism"; "Natural Kinds" | the unit of empirical significance is the whole of science; induction runs on similarity | [1.2](lessons/01-02-the-new-riddle-of-induction.md), [2.2](lessons/02-02-duhem-quine-and-underdetermination.md) |
| Hans Reichenbach | 1949 | frequency theory | the reference-class problem | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| Robert Richardson | 1979 | paper on reduction | one-way bridges | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Herbert Robbins | 1970 | "Statistical Methods Related to the Law of the Iterated Logarithm" | the likelihood-ratio bound under unlimited looks | [3.2](lessons/03-02-the-likelihood-principle.md) |
| John Roberts | 2008 | *The Law-Governed Universe* | replies to the better best system: nobody weighs simplicity against strength | [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Roger Rosenkrantz | 1981; 1994 | *Foundations and Applications of Inductive Probability*; "Bayesian Confirmation: Paradise Regained" | the tacking identity for $d$ | [1.3](lessons/01-03-confirmation-as-probability-raising.md) |
| Richard Royall | 1997 | *Statistical Evidence: A Likelihood Paradigm* | separates belief, action and evidence | [3.2](lessons/03-02-the-likelihood-principle.md) |
| Richard Rudner | 1953 | "The Scientist qua Scientist Makes Value Judgments" | accepting a hypothesis requires a value judgment | [3.4](lessons/03-04-values-and-inductive-risk.md) |
| Michael Ruse | 1977; testified 1981; ed. 1988, updated 1996 | "Karl Popper's Philosophy of Biology"; *But Is It Science?* | Popper misdescribes selection theory; creation science is not science | [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.6](lessons/02-06-demarcation-after-popper.md) |
| Bertrand Russell | 1927 | *The Analysis of Matter* | knowledge of the unperceived is structural | [5.3](lessons/05-03-structural-realism.md) |
| Juha Saatsi | 2005 | "On the Pessimistic Induction and Two Fallacies" | the reductio escapes both fallacy charges | [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| Wesley Salmon | 1970, reprinted 1971; 1981; 1984; with Kitcher, 1987; 1989; 1990 | "Statistical Explanation"; "Rational Prediction"; *Scientific Explanation and the Causal Structure of the World*; "Van Fraassen on Explanation"; *Four Decades of Scientific Explanation*; "Rationality and Objectivity in Science, or Tom Kuhn Meets Tom Bayes"; "Scientific Explanation: Causation and Unification" | corroboration cannot justify choosing a theory for prediction; statistical relevance, then causal processes; causal and unifying explanation are complementary | [2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md), [4.1](lessons/04-01-the-deductive-nomological-model.md), [4.2](lessons/04-02-causal-explanation.md), [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| Kenneth Schaffner | no date in the lesson | model of reduction | the corrected reduced theory | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Israel Scheffler | 1967 | *Science and Subjectivity* | defended objectivity and reference-continuity against Kuhn | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| Gerhard Schurz | 1991; 2002 | "Relevant Deduction"; paper on ceteris paribus | a relevance restriction on H-D; comparative and exclusive clauses, the normality reading | [1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md), [4.4](lessons/04-04-laws-in-the-sciences.md) |
| Gideon Schwarz | 1978 | "Estimating the Dimension of a Model" | BIC as a large-sample approximation | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| Michael Scriven | 1959; 1962 | paper in *Science*; 1962 essay | barometer and paresis counterexamples; the inkwell | [4.1](lessons/04-01-the-deductive-nomological-model.md) |
| Dudley Shapere | 1964 | review of *Structure* | stressed relativist implications | [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| Lawrence Shapiro | 2000 | paper on multiple realization | the relevance test and the dilemma | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Ritei Shibata | 1981 | "An Optimal Selection of Regression Variables" | AIC's asymptotic optimality for prediction when no candidate is exact | [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| Joseph Simmons, Leif Nelson, Uri Simonsohn | 2011 | "False-Positive Psychology" | undisclosed flexibility | [3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md) |
| Lawrence Sklar | no date in the lesson | on temperature | temperature's heterogeneity | [4.5](lessons/04-05-reduction-and-emergence.md) |
| Elliott Sober | 1997; 1999; 2004 | "Two Outbreaks of Lawlessness in Recent Philosophy of Biology"; paper on multiple realizability; "The Design Argument" | a priori conditional laws; breadth versus depth; the net and fine-tuning as observation selection effects | [3.2](lessons/03-02-the-likelihood-principle.md), [4.4](lessons/04-04-laws-in-the-sciences.md), [4.5](lessons/04-05-reduction-and-emergence.md) |
| Miriam Solomon | 2001 | *Social Empiricism* | rationality located in the distribution of decision vectors | [3.5](lessons/03-05-objectivity.md) |
| Jan Sprenger | 2015 | "A Novel Solution to the Problem of Old Evidence" | combines logical learning with a counterfactual element | [1.5](lessons/01-05-the-problem-of-old-evidence.md) |
| P. Kyle Stanford | 2003; 2006 | "No Refuge for Realism"; *Exceeding Our Grasp* | unconceived alternatives; rivals that tack on undetectable claims are not serious | [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md), [5.3](lessons/05-03-structural-realism.md) |
| R. G. Swinburne | 1968; 2001 | "Grue" (*Analysis*), reported second hand; *Epistemic Justification* | qualitative versus locational predicates; simplicity as a fundamental a priori principle | [1.2](lessons/01-02-the-new-riddle-of-induction.md), [1.6](lessons/01-06-simplicity-and-curve-fitting.md) |
| Paul Thagard | 1978 | "Why Astrology Is a Pseudoscience" | a two-part test: fails to progress, and how the community behaves | [2.6](lessons/02-06-demarcation-after-popper.md) |
| Bas van Fraassen | 1980; 1988; 1989; 2002; 2006 | *The Scientific Image* (ch. 5 on explanation); "The Problem of Old Evidence"; *Laws and Symmetry*; *The Empirical Stance* | constructive empiricism; explanation as answer to a why-question in context; the selection reply; the bad lot; logical learning contradicts probabilism under weak assumptions | [1.5](lessons/01-05-the-problem-of-old-evidence.md), [2.2](lessons/02-02-duhem-quine-and-underdetermination.md), [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.3](lessons/05-03-structural-realism.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| Richard von Mises | no date in the lesson | frequency theory | probability as relative frequency in a long series | [3.1](lessons/03-01-two-schools-of-statistical-inference.md) |
| Peter B. M. Vranas | 2004 | "Hempel's Raven Paradox: A Lacuna in the Standard Bayesian Solution" | the independence assumption is undefended | [1.4](lessons/01-04-the-ravens-paradox.md) |
| J. W. N. Watkins | 1968 | "Non-inductive corroboration" | replied to Salmon's worry for the Popperian side | [2.1](lessons/02-01-popper-conjectures-and-refutations.md) |
| Kenneth Waters | 1990 | paper on genetics and reduction | genetics as a test of reduction | [4.5](lessons/04-05-reduction-and-emergence.md) |
| William Whewell | 1840 | *The Philosophy of the Inductive Sciences* | consilience as a test of truth | [4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md), [5.1](lessons/05-01-realism-and-the-no-miracles-argument.md) |
| James Woodward | 2002; 2003; with Hitchcock, 2003 | *Making Things Happen* | causation and explanation through interventions and invariance | [4.2](lessons/04-02-causal-explanation.md), [4.4](lessons/04-04-laws-in-the-sciences.md) |
| John Worrall (not Tim Worrall) | 1978; 1989 | essay on Popper and research programmes; "Structural Realism: The Best of Both Worlds?" | use-novelty; retained relations as what survives | [1.5](lessons/01-05-the-problem-of-old-evidence.md), [5.3](lessons/05-03-structural-realism.md) |
| Larry Wright | 1973 | "Functions" | the etiological account of function | [4.2](lessons/04-02-causal-explanation.md) |
| Alison Wylie | 2003 | "Why Standpoint Matters" | the standpoint advantage is contingent and achieved | [3.5](lessons/03-05-objectivity.md) |
| Elie Zahar | 1973 | "Why Did Einstein's Programme Supersede Lorentz's?" | use-novelty, heuristic novelty; explicitly Kantian structural realism | [1.5](lessons/01-05-the-problem-of-old-evidence.md), [2.5](lessons/02-05-lakatos-and-feyerabend.md), [5.3](lessons/05-03-structural-realism.md) |
| Kevin Zollman | 2007; 2018 | papers on network structure and the credit economy | pressure on the case for critical interaction | [3.5](lessons/03-05-objectivity.md) |

## Assumed, not taught here

The lessons use these without deriving them, or hand them to the course that owns them. Each row points at the owner; "card" links go to the owner's reference card. A syllabus link means the owning course is not yet built.

| Fact | Where it's taught |
|---|---|
| Hume's problem of induction; the uniformity principle; the inductive, pragmatic, dissolution and externalist answers | [epistemology 4.2](../epistemology/lessons/04-02-humes-problem-of-induction.md) ([card](../epistemology/reference.md#humes-problem-of-induction)), [4.3](../epistemology/lessons/04-03-answering-hume.md) ([card](../epistemology/reference.md#uniformity-principle)) |
| Rule-circularity and Salmon's counterinductive rule | [epistemology 4.3](../epistemology/lessons/04-03-answering-hume.md) |
| Hume's *Enquiry* read historically; custom and the sceptical solution | [modern-philosophy 4.3](../modern-philosophy/lessons/04-03-induction-and-the-sceptical-solution.md) |
| Credences, probabilism and the normality axiom; the Lockean thesis; Richard Jeffrey's view that a Bayesian needs only credences | [epistemology 5.1](../epistemology/lessons/05-01-credences-and-probabilism.md) ([card](../epistemology/reference.md#lockean-thesis)) |
| Dutch book and accuracy arguments for the axioms | [epistemology 5.2](../epistemology/lessons/05-02-dutch-books-and-accuracy.md) ([card](../epistemology/reference.md#dutch-book)) |
| Conditionalization, the permanence of certainty, Jeffrey conditionalization | [epistemology 5.3](../epistemology/lessons/05-03-conditionalization.md) ([card](../epistemology/reference.md#strict-conditionalization)) |
| The problem of priors; the principle of indifference; degree-of-belief probability; objective chance and objective Bayesianism; merging of opinions; why a credence of zero never recovers | [epistemology 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md) ([card](../epistemology/reference.md#merging-of-opinions)) |
| Pooling credences once there is a group | [epistemology 5.5](../epistemology/lessons/05-05-bayesian-disagreement-and-higher-order-evidence.md) |
| Peer disagreement on shared evidence | [epistemology 4.5](../epistemology/lessons/04-05-peer-disagreement.md) |
| Quine's web in the theory of the a priori | [epistemology 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md) |
| Explanatory coherence | [epistemology 2.3](../epistemology/lessons/02-03-coherentism.md) |
| The sceptic's underdetermination premise, a different target from 2.2's | [epistemology 3.1](../epistemology/lessons/03-01-the-closure-argument.md) |
| The H-D idea in reasoning about the sceptic's hypothesis | [epistemology 3.3](../epistemology/lessons/03-03-moore-and-the-dogmatist.md) |
| Stakes bearing on knowledge; global relativism cited | [epistemology 3.4](../epistemology/lessons/03-04-contextualism-and-its-rivals.md) |
| Odds form of Bayes' theorem; the likelihood ratio against $\neg H$ | [philosophical-method 2.4](../philosophical-method/lessons/02-04-weighing-evidence-in-odds-form.md) ([card](../philosophical-method/reference.md#the-odds-rule)) |
| Inference to the best explanation as a pattern; explanatory virtues; the ungenerated rival and the best of a bad lot; "ad hoc" as no independent support | [philosophical-method 2.1](../philosophical-method/lessons/02-01-inference-to-the-best-explanation.md) ([card](../philosophical-method/reference.md#inference-to-the-best-explanation)) |
| Argument forms and fallacies: modus tollens, affirming the consequent | [philosophical-method 1.4](../philosophical-method/lessons/01-04-argument-forms-and-formal-fallacies.md) |
| Argument and explanation as different jobs | [philosophical-method 1.1](../philosophical-method/lessons/01-01-what-an-argument-is.md) ([card](../philosophical-method/reference.md#argument-and-explanation)) |
| Reflective equilibrium; theory-laden observation as a premise about intuitions | [philosophical-method 3.4](../philosophical-method/lessons/03-04-intuitions-and-reflective-equilibrium.md) ([card](../philosophical-method/reference.md#reflective-equilibrium)) |
| Verbal disputes | [philosophical-method 3.2](../philosophical-method/lessons/03-02-distinctions-and-verbal-disputes.md) ([card](../philosophical-method/reference.md#verbal-dispute)) |
| Standards of proof as a separate dial | [philosophical-method 4.2](../philosophical-method/lessons/04-02-steelmanning-and-the-burden-of-proof.md) |
| Probability axioms | [prob-stat-refresher 1.1](../prob-stat-refresher/lessons/01-01-sample-spaces-events-axioms.md) ([card](../prob-stat-refresher/reference.md#kolmogorov-axioms)) |
| Conditional probability, Bayes' theorem, base rates in a screening test | [prob-stat-refresher 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) ([card](../prob-stat-refresher/reference.md#bayes-theorem)) |
| Likelihood functions and maximum likelihood | [prob-stat-refresher 4.1](../prob-stat-refresher/lessons/04-01-estimation-and-mle.md) ([card](../prob-stat-refresher/reference.md#likelihood-and-maximum-likelihood)) |
| Confidence intervals | [prob-stat-refresher 4.2](../prob-stat-refresher/lessons/04-02-confidence-intervals.md) ([card](../prob-stat-refresher/reference.md#confidence-interval)) |
| Hypothesis tests; the correct reading of a p-value; "fail to reject"; $\alpha$ and $\beta$ as a payoff matrix | [prob-stat-refresher 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) ([card](../prob-stat-refresher/reference.md#p-value)) |
| t-tests in regression; a test as a decision rule with a controlled error rate | [econometrics 2.3](../econometrics/lessons/02-03-hypothesis-tests-confidence-intervals.md) |
| Multiple testing, specification search, the "specification garden", pre-registration as practice | [econometrics 2.7](../econometrics/lessons/02-07-multiple-testing-specification-search.md) ([card](../econometrics/reference.md#multiple-testing-arithmetic)) |
| Potential outcomes; randomization | [econometrics 3.1](../econometrics/lessons/03-01-potential-outcomes-identification.md) ([card](../econometrics/reference.md#potential-outcomes)) |
| The randomization test as sharp-null inference | [econometrics 2.6](../econometrics/lessons/02-06-bootstrap-and-few-clusters.md) |
| Omitted-variable bias (bridge to ceteris paribus clauses) | [econometrics 3.4](../econometrics/lessons/03-04-omitted-variable-bias.md) |
| Simultaneity; difference-in-differences (named in 2.3's opener and exemplars) | [econometrics 3.5](../econometrics/lessons/03-05-measurement-error-and-simultaneity.md), [4.3](../econometrics/lessons/04-03-difference-in-differences.md) |
| Sample selection as an estimation problem | [econometrics 5.4](../econometrics/lessons/05-04-censoring-truncation-sample-selection.md) |
| The no-free-lunch theorem and inductive bias | [statistical-learning 1.4](../statistical-learning/lessons/01-04-no-free-lunch-and-inductive-bias.md) |
| Overfitting | [statistical-learning 1.3](../statistical-learning/lessons/01-03-overfitting-and-train-validation-test.md), [machine-learning 1.2](../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) |
| The optimism correction | [statistical-learning 2.1](../statistical-learning/lessons/02-01-linear-regression-as-learning.md) ([card](../statistical-learning/reference.md#optimism-of-the-training-error)) |
| Logistic regression as linear in the log-odds | [statistical-learning 2.2](../statistical-learning/lessons/02-02-logistic-regression-and-classification.md) |
| Regularization as a Bayesian prior; the credible-versus-confidence gap computed | [statistical-learning 2.5](../statistical-learning/lessons/02-05-regularization-as-a-bayesian-prior.md) |
| Cross-validation, model selection, the winner's curse | [machine-learning 4.1](../machine-learning/lessons/04-01-model-selection-and-cross-validation.md) |
| A worked AIC and BIC split | [biophysics 4.6](../biophysics/lessons/04-06-single-molecule-inference.md) |
| Theories of laws (best system, necessitation, dispositional essentialism); the powers analysis of causation; the gold and uranium spheres; masking; quiddities; simplicity in the best-system account | [metaphysics 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md) |
| The regularity theory of causation; the barometer and hexed salt as problems for it | [metaphysics 4.1](../metaphysics/lessons/04-01-humes-challenge-and-the-regularity-theory.md) ([card](../metaphysics/reference.md#the-regularity-theory-of-causation)) |
| Counterfactual analysis of causation; preemption; what an intervention is; Woodward-style intervention as an analysis | [metaphysics 4.2](../metaphysics/lessons/04-02-counterfactual-causation.md) ([card](../metaphysics/reference.md#counterfactual-causation)) |
| Natural properties, sparse and abundant | [metaphysics 1.3](../metaphysics/lessons/01-03-universals-the-realists-case.md) |
| Confirmational holism as a premise; indispensability; idealization deferred | [metaphysics 1.2](../metaphysics/lessons/01-02-abstract-objects.md) ([card](../metaphysics/reference.md#the-indispensability-argument)) |
| Non-causal "because"; grounding; realization as a small-g relation | [metaphysics 2.4](../metaphysics/lessons/02-04-essence-and-grounding.md) ([card](../metaphysics/reference.md#grounding)) |
| The law of likelihood under the name "likelihood principle"; design against a named rival | [philosophy-of-religion 3.1](../philosophy-of-religion/lessons/03-01-from-design-to-fine-tuning.md) |
| Fine-tuning, the firing squad, Tomás and Ilse: observation selection applied | [philosophy-of-religion 3.2](../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md) |
| A likelihood ratio of 1 for necessary moral truths | [philosophy-of-religion 3.3](../philosophy-of-religion/lessons/03-03-moral-arguments.md) |
| William James's two duties | [philosophy-of-religion 5.3](../philosophy-of-religion/lessons/05-03-pragmatic-arguments-the-wager-and-the-will-to-believe.md) |
| Flew's "Theology and Falsification" | [philosophy-of-religion 1.1](../philosophy-of-religion/lessons/01-01-which-god-and-what-an-argument-must-do.md) |
| Expected utility | [decision-theory 1.2](../decision-theory/lessons/01-02-from-expected-value-to-expected-utility.md) |
| Minimax regret and Wald's minimax | [decision-theory 3.3](../decision-theory/lessons/03-03-decisions-under-ignorance.md) |
| Reading probability off preference | [decision-theory 2.2](../decision-theory/lessons/02-02-probability-from-preference.md) |
| Good's value-of-information theorem (the other Good 1967) | [decision-theory 3.2](../decision-theory/lessons/03-02-models-of-ambiguity.md) |
| Weber's value freedom and value relevance; his objectivity essay of 1904; Gresham's law stated | [social-theory 1.3](../social-theory/lessons/01-03-understanding-webers-interpretive-method.md) |
| Individualism and holism in social science | [social-theory 1.1](../social-theory/lessons/01-01-individuals-and-social-facts.md) |
| Functional explanation in social science; Elster's loop | [social-theory 1.2](../social-theory/lessons/01-02-functional-explanation-and-its-critics.md) |
| "Mechanism" as a chain of steps through what people do | [social-theory 1.4](../social-theory/lessons/01-04-testing-a-social-explanation.md) |
| Popper and Lakatos applied to Marxism; the Wright case | [social-theory 2.3](../social-theory/lessons/02-03-capitalism-and-the-test-of-history.md) |
| Kuhn's reception in the social sciences | [social-theory](../social-theory/syllabus.md) |
| Multiple realizability of the mental (2.2), weak and strong emergence applied to mind (2.3); functionalism, supervenience; reasons as causes | [philosophy-of-mind](../philosophy-of-mind/syllabus.md) |
| Interpretations of quantum mechanics; spacetime substantivalism; probability in statistical mechanics and in physics; ontic structural realism in particles and fields (6.2-6.3); the evidential problem of many-worlds; laws in fundamental physics | [philosophy-of-physics](../philosophy-of-physics/syllabus.md) |
| Idealization and tendency laws | [philosophy-of-economics 6.1](../philosophy-of-economics/lessons/06-01-idealization-and-isolation.md) |
| Friedman's "as if" instrumentalism; finding the value judgment inside a technique | [philosophy-of-economics 6.2](../philosophy-of-economics/lessons/06-02-friedmans-as-if-and-its-critics.md) |
| How-possibly models, credible worlds, the explanation paradox | [philosophy-of-economics 6.3](../philosophy-of-economics/lessons/06-03-how-possibly-models-and-credible-worlds.md) |
| Objective-list welfare (another use of "objective"); incommensurable goods | [philosophy-of-economics 1.1](../philosophy-of-economics/lessons/01-01-welfarism-and-preference-satisfaction.md), [3.4](../philosophy-of-economics/lessons/03-04-cbas-critics-and-defenders.md) |
| The Galileo affair as history; Bellarmine on saving the appearances | [church-history 7.3](../church-history/lessons/07-03-the-galileo-affair.md) |
| The Galileo affair as a test case | [apologetics-catholic-claims 7.1](../apologetics-catholic-claims/lessons/07-01-the-inquisition-and-the-galileo-affair.md), [apologetics-foundations 4.1](../apologetics-foundations/lessons/04-01-the-conflict-thesis-tested-in-both-directions.md) |
| Ockham's own principle | [ancient-medieval-philosophy 8.4](../ancient-medieval-philosophy/lessons/08-04-ockham-nominalism-and-the-razor.md) |
| Aristotle's demand that a demonstration give the cause | [ancient-medieval-philosophy 3.1](../ancient-medieval-philosophy/lessons/03-01-predication-categories-and-the-syllogism.md) |
| Aristotle's four causes; "always or for the most part" | [ancient-medieval-philosophy 3.2](../ancient-medieval-philosophy/lessons/03-02-nature-and-the-four-causes.md) |
| The universals dispute behind species realism | [ancient-medieval-philosophy 8.1](../ancient-medieval-philosophy/lessons/08-01-porphyrys-questions-universals-to-aquinas.md) |
| Atomism before Perrin | [ancient-medieval-philosophy 1.2](../ancient-medieval-philosophy/lessons/01-02-zeno-and-the-atomists.md) |
| Protagoras and self-refuting relativism | [ancient-medieval-philosophy 1.3](../ancient-medieval-philosophy/lessons/01-03-the-sophists-and-socrates.md) |
| "Duhem's thesis" about 1277, a different claim | [ancient-medieval-philosophy 7.1](../ancient-medieval-philosophy/lessons/07-01-faith-reason-and-the-paris-crisis.md) |
| Berkeley's immaterialism | [modern-philosophy 3.4](../modern-philosophy/lessons/03-04-berkeley-immaterialism.md) |
| Langton's Kant and things in themselves | [modern-philosophy 6.1](../modern-philosophy/lessons/06-01-transcendental-idealism-and-the-thing-in-itself.md) |
| Moral realism and the companions-in-guilt form | [ethics 6.1](../ethics/lessons/06-01-moral-realism.md) |
| Incommensurable goods | [ethics 4.5](../ethics/lessons/04-05-the-new-natural-law-theory.md) |
| Arrow's theorem | [grad-game-theory 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md), [social-choice 1.3](../social-choice/lessons/01-03-arrow-as-a-map.md) |
| The jury theorem and shared-error threats | [social-choice 5.1](../social-choice/lessons/05-01-the-condorcet-jury-theorem.md), [5.2](../social-choice/lessons/05-02-when-the-jury-theorem-fails.md) |
| The compensated law of demand as a theorem; Giffen goods | [grad-micro 2.4](../grad-micro/lessons/02-04-slutsky-equation-comparative-statics.md) |
| The Phillips curve and expectations | [grad-macro 4.5](../grad-macro/lessons/04-05-nk-phillips-curve.md) |
| Doob's optional stopping theorem | [probability-theory 5.4](../probability-theory/lessons/05-04-stopping-times-optional-stopping.md) |
| Reading a literature's credibility (funnel plots, $p$-curves, registered reports) | [empirical-political-economy](../empirical-political-economy/syllabus.md) |
| Repeatability and reproducibility of a method | [analytical-chemistry 4.5](../analytical-chemistry/lessons/04-05-sampling-method-validation.md) |
| Mercury's perihelion and light bending, the calculation | [relativity 6.2](../relativity/lessons/06-02-orbits-precession-light-bending.md) |
| Michelson and Morley | [relativity 1.1](../relativity/lessons/01-01-postulates-simultaneity.md) |
| Relativistic velocity addition | [relativity 1.2](../relativity/lessons/01-02-lorentz-transformations.md) |
| The Newtonian limit | [relativity 5.5](../relativity/lessons/05-05-newtonian-limit-redshift.md) |
| The law of refraction | [waves-optics 3.1](../waves-optics/lessons/03-01-reflection-refraction-snell.md) |
| Light as an electromagnetic wave | [waves-optics 2.4](../waves-optics/lessons/02-04-light-as-em-wave.md), [em-refresher 4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md) |
| Brewster's angle | [waves-optics 4.3](../waves-optics/lessons/04-03-polarization.md) |
| Fresnel's formula in a ray tracer | [computer-graphics 3.4](../computer-graphics/lessons/03-04-whitted-ray-tracing-reflection-refraction.md) |
| Rayleigh scattering and the blue sky | [atmospheric-science 3.4](../atmospheric-science/lessons/03-04-scattering-rayleigh-mie-aerosols.md) |
| Temperature as a derivative of a counting function; the caloric equation of state | [stat-mech 1.4](../stat-mech/lessons/01-04-temperature-pressure-chemical-potential.md) |
| Universality of critical exponents | [stat-mech 5.4](../stat-mech/lessons/05-04-critical-exponents-universality.md) |
| Neutrino oscillations (a confirmed prediction) | [nuclear-particle-physics 5.4](../nuclear-particle-physics/lessons/05-04-neutrinos-oscillations.md) |
| Continental drift, the history | [geology 2.1](../geology/lessons/02-01-evidence-for-drift.md) |
| Seafloor stripes and reversals | [geophysics 3.4](../geophysics/lessons/03-04-magnetic-anomalies-reversals.md) |
| Hardy-Weinberg as a null model | [evolution-ecology 1.3](../evolution-ecology/lessons/01-03-hardy-weinberg-testable-null.md) |
| Competition, the niche, and null models | [evolution-ecology 4.1](../evolution-ecology/lessons/04-01-competition-and-the-niche.md) |
| Mendel's laws as probability | [genetics 1.1](../genetics/lessons/01-01-mendels-laws-probability.md) |
| Selection effects in exoplanet demographics | [planetary-science 6.2](../planetary-science/lessons/06-02-demographics-selection-effects.md) |
| Intelligent design and primary causation | [apologetics-foundations 4.2](../apologetics-foundations/lessons/04-02-evolution-design-and-the-human-person.md) |
| Two naturalisms; the Oppenheim-Putnam programme; the naturalist's record | [apologetics-foundations 3.1](../apologetics-foundations/lessons/03-01-naturalism-at-its-best.md) |
| Ross's determinacy argument borrowing grue's finite-fit point | [apologetics-foundations 3.2](../apologetics-foundations/lessons/03-02-reason.md) |
| Counting commitments, Oppy and the theist; "best explanation" accused of hiding a prior | [apologetics-foundations 2.2](../apologetics-foundations/lessons/02-02-answering-the-atheist-philosophers.md) |
| Van Fraassen's empirical stance in apologetics | [apologetics-foundations 8.3](../apologetics-foundations/lessons/08-03-apologetics-in-a-secular-age.md) |
| Falsifiability and the ad hoc charge turned on doctrine | [apologetics-catholic-claims 6.6](../apologetics-catholic-claims/lessons/06-06-development-or-corruption.md) |
| Church teaching on creation and evolution | [creation-grace-last-things 1.4](../creation-grace-last-things/lessons/01-04-creation-and-evolution-in-church-teaching.md) |
| An unseen perturber as a *quia* demonstration | [thomistic-synthesis 3.1](../thomistic-synthesis/lessons/03-01-demonstrating-that-god-exists.md) |
| Husserl on the lifeworld; Sellars's two images | [phenomenology-and-personalism 1.4](../phenomenology-and-personalism/lessons/01-04-the-lifeworld-and-the-crisis-of-the-sciences.md) |
| Popper's *Open Society* on Plato | [history-of-political-thought 1.1](../history-of-political-thought/lessons/01-01-platos-republic-justice-in-city-and-soul.md) |
| Establishment Clause tests | [constitutional-law](../constitutional-law/syllabus.md) |
| Waltz's structural realism in international relations, an unrelated doctrine | [international-relations](../international-relations/syllabus.md) |
| Analyticity; reference and meaning change in general | [philosophy-of-language-and-logic](../philosophy-of-language-and-logic/syllabus.md) |

## Pitfalls

Each is a wrong belief and its correction, one line, grouped by theme.

### Trap: Confirmation as logic

- **"Nicod's criterion says how much a case supports."** It is yes or no, so it cannot register Mill's chemist and crows. *([1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md))*
- **"Tacking shows the irrelevant conjunct is confirmed."** Tacking delivers only the conjunction; reaching $X$ alone takes special consequence, which H-D rejects. *([1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md))*
- **"H-D just is inference to the best explanation."** H-D has no comparative clause. *([1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md))*
- **"Dropping special consequence stops the collapse."** Entailment and converse consequence collapse on their own. *([1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md))*
- **"An idle conjunct is easy to spot."** It is wording-dependent unless a privileged formulation is given. *([1.1](lessons/01-01-from-hume-to-a-logic-of-confirmation.md))*

### Trap: Grue and projection

- **"A grue emerald turns blue at $t$."** None does, and "change" is relative to vocabulary. *([1.2](lessons/01-02-the-new-riddle-of-induction.md))*
- **"Just ban predicates that mention dates."** That is Carnap's reply, and it needs a privileged list of primitives. *([1.2](lessons/01-02-the-new-riddle-of-induction.md))*
- **"Goodman puts green and grue on a par."** He holds that projecting green is legitimate and locates the difference in the history of projection. *([1.2](lessons/01-02-the-new-riddle-of-induction.md))*
- **"Projectible means true."** A hypothesis can be projectible and false; lawlike likewise marks what instances can confirm, true or not. *([1.2](lessons/01-02-the-new-riddle-of-induction.md))*

### Trap: Measures

- **"A confirmed hypothesis is one you should accept."** Incremental confirmation is compatible with a posterior of 1 in 40; acceptance is a further step. *([1.3](lessons/01-03-confirmation-as-probability-raising.md))*
- **"'Strongly confirms' reports a fact about the evidence."** Only the sign is measure-free; a magnitude claim must name its measure. *([1.3](lessons/01-03-confirmation-as-probability-raising.md))*
- **"$l$ is free of the prior."** $P(E \mid \neg H)$ averages the rivals' likelihoods by their priors. Only a ratio against a named rival with definite likelihoods is free of priors, and that is a different quantity. *([1.3](lessons/01-03-confirmation-as-probability-raising.md))*

### Trap: Ravens

- **"The Bayesian solution proves the shoe confirms."** The sign is an output of A1 and A2; with non-ravens frozen the likelihood ratio is exactly 1. *([1.4](lessons/01-04-the-ravens-paradox.md))*
- **"Good refuted Hempel."** He refuted the unrestricted version, on which an instance confirms given any background; Hempel denied that this reaches P1 as he meant it. *([1.4](lessons/01-04-the-ravens-paradox.md))*
- **"The contrapositive causes the trouble."** Bayesians keep P2 and P3, and Good's case uses no contrapositive. *([1.4](lessons/01-04-the-ravens-paradox.md))*
- **"A black raven must help."** Only the factor for finding a known raven black is guaranteed to; a raven turning up at all can count against $H$. *([1.4](lessons/01-04-the-ravens-paradox.md))*
- **"A known shoe is neutral on the standard solution."** A1 and A2 force it to confirm; neutrality needs a different assumption. *([1.4](lessons/01-04-the-ravens-paradox.md))*

### Trap: Old evidence

- **"Set $P(E) = 0.999$ and the problem vanishes."** The multiplier is capped at about 1.001, and Jeffrey conditionalization needs a new experience that never came. *([1.5](lessons/01-05-the-problem-of-old-evidence.md))*
- **"Logical learning says the data confirmed the theory."** The model's confirmer is a logical fact; whether that counts is the dispute. *([1.5](lessons/01-05-the-problem-of-old-evidence.md))*
- **"New theories are old evidence renamed."** One concerns a certain $E$ and a hypothesis already in the space; the other, a hypothesis with no credence. *([1.5](lessons/01-05-the-problem-of-old-evidence.md))*
- **"Old means old on the calendar."** It means old to the agent: an unread report is new evidence. *([1.5](lessons/01-05-the-problem-of-old-evidence.md))*

### Trap: Simplicity and model selection

- **"AIC assumes nature is simple."** Its penalty exists because data are noisy, and a false family can have the higher predictive accuracy. *([1.6](lessons/01-06-simplicity-and-curve-fitting.md))*
- **"The AIC winner is the family most likely to be true."** AIC ranks estimated predictive accuracy, which licenses using the family, not believing it. *([1.6](lessons/01-06-simplicity-and-curve-fitting.md))*
- **"BIC always penalizes harder."** It charges $\ln n$ against AIC's 2, so it is lighter for $n \le 7$. *([1.6](lessons/01-06-simplicity-and-curve-fitting.md))*
- **"The Occam factor is a prior favouring simple families."** It lives in the likelihood $P(D \mid M)$, works at equal prior odds, and changes with the prior's width. *([1.6](lessons/01-06-simplicity-and-curve-fitting.md))*
- **"Fix the family before seeing the data and the sub-family problem goes away."** Forster and Sober say the issue has nothing to do with when or by whom a family is built. *([1.6](lessons/01-06-simplicity-and-curve-fitting.md))*

### Trap: Popper

- **"One contrary observation kills a theory, for Popper."** He required an accepted basic statement, a reproducible effect and a judgment about auxiliaries; "naive falsificationism" is Lakatos's label. *([2.1](lessons/02-01-popper-conjectures-and-refutations.md), [2.2](lessons/02-02-duhem-quine-and-underdetermination.md))*
- **"Falsifiable means false or already tested."** It is a property of logical form; a falsified statement is still empirical. *([2.1](lessons/02-01-popper-conjectures-and-refutations.md))*
- **"Unfalsifiable means worthless or meaningless."** Such ideas can matter and can become testable; they cannot claim empirical backing in the scientific sense. *([2.1](lessons/02-01-popper-conjectures-and-refutations.md))*
- **"Corroboration is confirmation renamed."** Popper gave up the word because it had come to imply probability. *([2.1](lessons/02-01-popper-conjectures-and-refutations.md))*
- **"Popper's 'ad hoc' is the ordinary one."** His test is added testable content; `philosophical-method`'s is independent support. *([2.1](lessons/02-01-popper-conjectures-and-refutations.md))*
- **"Marx, Freud and Adler get one charge."** Against Marxism it is rescue after refutation; against psychoanalysis, no possible refutation. *([2.1](lessons/02-01-popper-conjectures-and-refutations.md))*

### Trap: Underdetermination

- **"The Duhem-Quine thesis is one claim the two men shared."** Duhem claimed the weak thesis for physics, Quine the strong one for everything. *([2.2](lessons/02-02-duhem-quine-and-underdetermination.md))*
- **"The weak thesis refutes Popper."** A conjunction really is falsified, and his method permits auxiliaries that add testable content. *([2.2](lessons/02-02-duhem-quine-and-underdetermination.md))*
- **"Underdetermination makes theory choice arbitrary."** That needs a premise neither states: all logically open revisions are equally defensible. *([2.2](lessons/02-02-duhem-quine-and-underdetermination.md))*
- **"Holist and contrastive underdetermination are one problem."** Knowing which conjunct to blame would not say how many rivals the evidence supports. *([2.2](lessons/02-02-duhem-quine-and-underdetermination.md))*
- **"Stanford's rivals are the empirically equivalent theories of 2.2."** His are transient, and he doubts a general case for equivalents has been made. *([5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md))*

### Trap: Kuhn

- **"Kuhn said science is irrational."** He denied that a rule compels the choice, and said that denying an algorithm leaves good reasons standing. *([2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md), [2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md))*
- **"A paradigm is a widely held theory."** That is the loose sense; the core sense is the shared solved problem. *([2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md))*
- **"Normal science tests nothing."** Puzzle-solutions are tested and can fail; the paradigm is not on trial. *([2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md))*
- **"Theory-laden means you see what your theory predicts."** Expectation shapes observation, and observation can still defeat it. *([2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md))*
- **"A long-standing anomaly is a crisis."** Duration does not make one; loss of confidence in the practice does. *([2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md))*
- **"A famous or expensive confirmed prediction is a revolution."** It is normal science. *([2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md))*
- **"Incommensurable means incomparable."** What fails is point-by-point comparison in one neutral language. *([2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md))*
- **"'Different worlds' means scientists change nature."** Kuhn hedged the phrase and denied the constructivist reading. *([2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md))*
- **"The late taxonomic view restores convergence on truth."** It narrows what fails to translate; Kuhn went on denying that later theories are nearer the truth. *([2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md))*
- **"Read a value's verdict from who won."** Accuracy split between oxygen and phlogiston. *([2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md))*

### Trap: Lakatos and Feyerabend

- **"'Anything goes' is Feyerabend's rule of method."** It is what remains if you insist on one rule for every case; the later preface disowns it as a principle. *([2.5](lessons/02-05-lakatos-and-feyerabend.md))*
- **"Protecting the hard core is what makes a programme ad hoc."** The negative heuristic requires that protection; the charge attaches to belt repairs that predict nothing new. *([2.5](lessons/02-05-lakatos-and-feyerabend.md))*
- **"Degenerating means abandon it."** It grades a record, and a degenerating programme can recover. *([2.5](lessons/02-05-lakatos-and-feyerabend.md))*
- **"A repair that fits more data is progressive."** Lakatos asks for a corroborated prediction the repair was not built from. *([2.5](lessons/02-05-lakatos-and-feyerabend.md))*

### Trap: Demarcation

- **"The *McLean* court ruled that religion and science conflict."** It ruled that Act 590 violated the Establishment Clause. *([2.6](lessons/02-06-demarcation-after-popper.md))*
- **"Pseudoscience means false or unorthodox."** Neither is the test. *([2.6](lessons/02-06-demarcation-after-popper.md))*
- **"*McLean* adopted Popper's criterion."** Falsifiability is one mark of five. *([2.6](lessons/02-06-demarcation-after-popper.md))*
- **"Laudan was a friend of creationism or a relativist."** He agreed with the result and wanted its claims rejected as unsupported rather than as unscientific. *([2.6](lessons/02-06-demarcation-after-popper.md))*

### Trap: p-values and error rates

- **"A p-value is the error rate of this rejection."** The error rate belongs to the rule: $\alpha$ stays fixed whatever $p$ comes out. *([3.1](lessons/03-01-two-schools-of-statistical-inference.md))*
- **"A p-value is the probability that $H_0$ is true."** On the frequency reading $H_0$ has no probability at all; a Bayesian can compute one, with a prior. *([3.1](lessons/03-01-two-schools-of-statistical-inference.md))*
- **"'Accept $H_0$' means believing it."** For Neyman it means acting as if it were true at a known risk $\beta$; Fisher refused the word for a significance test. *([3.1](lessons/03-01-two-schools-of-statistical-inference.md))*
- **"Fisher was the p-value purist and Neyman the 5 percent pedant."** The 1926 Fisher ignored results short of 5 percent, and Neyman's $\alpha$ was to be set by weighing the two errors. *([3.1](lessons/03-01-two-schools-of-statistical-inference.md))*
- **"'Inductive behaviour' is Pearson's phrase, or the 1933 paper's."** It is Neyman's later label. *([3.1](lessons/03-01-two-schools-of-statistical-inference.md))*

### Trap: Likelihood and stopping

- **"The likelihood principle says how data were gathered never matters."** The plan matters whenever it changes the likelihood; the principle rules out only differences that leave it unchanged. *([3.2](lessons/03-02-the-likelihood-principle.md))*
- **"One of two analysts with different p-values must be wrong."** Each computed a correct probability about her own sample space; whether that is the evidence is the dispute. *([3.2](lessons/03-02-the-likelihood-principle.md))*
- **"A Bayes factor simply corrects the p-value."** It answers a different question and inherits the prior over the alternative. *([3.2](lessons/03-02-the-likelihood-principle.md))*
- **"The $1/k$ bound covers any likelihood ratio."** It needs the alternative fixed in advance; the maximized ratio does not obey it. *([3.2](lessons/03-02-the-likelihood-principle.md))*

### Trap: Replication and severity

- **"36 percent replication means 36 percent of those findings were true."** A replication rate mixes truth with replication power and fidelity. *([3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md))*
- **"Severity is the probability the claim is true."** It is an error probability about the procedure; it matches a flat-prior posterior only in the unselected normal model. *([3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md))*
- **"Error statistics defends the 0.05 ritual."** It rejects the binary reading: a significant result licenses only the discrepancies it passed severely. *([3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md))*
- **"The 2019 editorial is ASA policy."** It is an editorial; the ASA's own statement is the 2016 one. *([3.3](lessons/03-03-replication-error-statistics-and-severe-testing.md))*

### Trap: Values and inductive risk

- **"Rudner licenses believing what suits you."** The cost of error bears only on how much evidence is enough, never on what the evidence shows. *([3.4](lessons/03-04-values-and-inductive-risk.md))*
- **"Weber's value freedom is the value-free ideal."** Weber forbids passing off a verdict on what is good as a finding; the ideal bans non-epistemic values from acceptance. *([3.4](lessons/03-04-values-and-inductive-risk.md))*
- **"Jeffrey offers a finished, value-free science of probabilities."** His paper is a reductio of acceptance, and he says the view's difficulties may be fatal to it. *([3.4](lessons/03-04-values-and-inductive-risk.md))*
- **"A direct role is an illegitimate one."** For Douglas it depends on the stage; only inside the reasoning is it barred. *([3.4](lessons/03-04-values-and-inductive-risk.md))*

### Trap: Objectivity

- **"Convergent objectivity is merging of opinions."** Merging concerns reasoners conditionalizing on the same data; convergence needs different routes and draws its force from their independence. *([3.5](lessons/03-05-objectivity.md))*
- **"Objective means value-free."** Value-free is one of Douglas's eight, and the one she rejects as an ideal. *([3.5](lessons/03-05-objectivity.md))*
- **"Standpoint theory says the oppressed are automatically right."** Current defenders reject automatic privilege; the live objection is that no non-circular test says which standpoint is advantaged. *([3.5](lessons/03-05-objectivity.md))*
- **"Tempered equality means every opinion counts the same."** Standing starts open and is lost by refusing to engage. *([3.5](lessons/03-05-objectivity.md))*
- **"Concordant and convergent are the same; so are concordant and interactive."** Agreement among people versus among routes; polled separately versus argued out. *([3.5](lessons/03-05-objectivity.md))*

### Trap: Explanation

- **"The flagpole shows one of R1 to R4 is false."** It passes all four; it attacks the claim that meeting them is enough. *([4.1](lessons/04-01-the-deductive-nomological-model.md))*
- **"R2 excludes the hexed salt."** R2 asks only that the law be required for the derivation. *([4.1](lessons/04-01-the-deductive-nomological-model.md))*
- **"R4 means well confirmed."** Hempel and Oppenheim require truth. *([4.1](lessons/04-01-the-deductive-nomological-model.md))*
- **"Hempel requires scientists to write out deductions."** Ordinary explanations are incomplete, with the laws left tacit. *([4.1](lessons/04-01-the-deductive-nomological-model.md))*
- **"25 percent of untreated syphilitics develop paresis."** Do not state that figure; the lesson gives none and says most never develop it. *([4.1](lessons/04-01-the-deductive-nomological-model.md))*
- **"Screening off identifies the cause."** A fork and a chain share the pattern. *([4.2](lessons/04-02-causal-explanation.md))*
- **"An intervention must be feasible."** Woodward requires only a well-grounded theory of what would happen if it occurred. *([4.2](lessons/04-02-causal-explanation.md))*
- **"Anything called an experiment is an intervention."** The procedure must change $Y$ by no route except through $X$. *([4.2](lessons/04-02-causal-explanation.md))*
- **"Invariant means exceptionless."** A generalization can hold over a narrow range and still explain within it. *([4.2](lessons/04-02-causal-explanation.md))*
- **"Van Fraassen says anything explains anything."** That is Kitcher and Salmon's charge; he requires a true answer that favours the topic and beats its rivals. *([4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md))*
- **"Contrast-sensitivity refutes Hempel and Salmon."** The pragmatic thesis needs interest-relativity with the explanandum fully fixed. *([4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md))*
- **"Consilience and Kitcher's unification are one idea."** One is a test of truth with a timing condition; the other an account of what explaining is. *([4.3](lessons/04-03-unification-and-the-pragmatics-of-explanation.md))*

### Trap: Laws

- **"A ceteris paribus law is a tendency law."** The first exempts cases; the second says the cause operates in every case, even when outweighed. *([4.4](lessons/04-04-laws-in-the-sciences.md))*
- **"Beatty's 'contingent' is the metaphysician's."** He means contingent on evolutionary history. *([4.4](lessons/04-04-laws-in-the-sciences.md))*
- **"Mitchell calls every useful generalization a law."** She rejects extending the title by decree. *([4.4](lessons/04-04-laws-in-the-sciences.md))*
- **"Ceteris paribus means usually."** Reading it as high probability is a rival proposal, Schurz's normality theory. *([4.4](lessons/04-04-laws-in-the-sciences.md))*

### Trap: Reduction and emergence

- **"Reduction abolishes what it reduces."** Temperature is still real after kinetic theory; phlogiston's fate is replacement. *([4.5](lessons/04-05-reduction-and-emergence.md))*
- **"Multiple realizability alone refutes reduction."** Temperature is multiply realized and is the textbook reduction; the argument also needs P2 and P4. *([4.5](lessons/04-05-reduction-and-emergence.md))*
- **"Anti-reductionists deny that physics covers everything."** Fodor and Putnam grant token physicalism; of these views only strong emergence adds further fundamental laws. *([4.5](lessons/04-05-reduction-and-emergence.md))*
- **"'More Is Different' rejects reductionism."** Anderson accepts reduction and rejects construction. *([4.5](lessons/04-05-reduction-and-emergence.md))*
- **"Weakly emergent means multiply realized."** One concerns a shortcut, the other how many physical bases. *([4.5](lessons/04-05-reduction-and-emergence.md))*

### Trap: Realism and its critics

- **"Realism says our theories are true."** The epistemic thesis says mature theories are approximately true; the other two theses are not distinctive. *([5.1](lessons/05-01-realism-and-the-no-miracles-argument.md))*
- **"The no-miracles argument is an induction over the record."** It is an inference to the best explanation of the record; the pessimistic induction is the induction. *([5.1](lessons/05-01-realism-and-the-no-miracles-argument.md))*
- **"The base-rate objection shows successful theories are probably false."** It shows $s$ and $f$ do not fix the posterior, and gives no reason to think $\pi$ small. *([5.1](lessons/05-01-realism-and-the-no-miracles-argument.md))*
- **"Observable means observed."** A rock on the far side of the Moon is observable unwatched; adequacy covers every observable event. *([5.1](lessons/05-01-realism-and-the-no-miracles-argument.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md))*
- **"Laudan argued today's theories are probably false."** His stated target is the step from success to approximate truth; the prediction belongs to the later induction reading. *([5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md))*
- **"Poincaré holds the 'bankruptcy of science'."** He gives it to the man of the world and calls the scepticism superficial. *([5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md))*
- **"Selective realism is structural realism."** Structure is one way of drawing the line, and Psillos says his move is not meant to capture Worrall's. *([5.2](lessons/05-02-the-pessimistic-induction-and-selective-realism.md))*

### Trap: Structural realism and empiricism

- **"Structural realism is instrumentalism with better manners."** The relations are said to hold of the unobservable world, beyond empirical adequacy. *([5.3](lessons/05-03-structural-realism.md))*
- **"Newman proved structural knowledge impossible."** The lemma concerns only the claim that some relation has structure $W$; a claim about a given, definite relation is untouched. *([5.3](lessons/05-03-structural-realism.md))*
- **"Any set with enough members will do."** An isomorphism needs a bijection, so the condition is the right number of objects. *([5.3](lessons/05-03-structural-realism.md))*
- **"The equations must survive letter for letter."** Defenders claim less: a relation may be retained as a limiting case. Critics answer that structure is often lost too. *([5.3](lessons/05-03-structural-realism.md))*
- **"ESR and OSR dispute the history."** They agree on what carried over and differ on whether anything lies behind it. *([5.3](lessons/05-03-structural-realism.md))*
- **"Constructive empiricism says electrons do not exist."** It takes no stand, and does not forbid believing more than science requires. *([5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md))*
- **"A successful manipulation vindicates the theory."** Entity realism detaches the two, and manipulation is offered as sufficient, not necessary. *([5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md))*
- **"The natural ontological attitude is a third theory of science."** It is the refusal to add one, and whether a refusal can be stable is the dispute. *([5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md))*

### Trap: Names and false friends

- **Harold Jeffreys and Richard Jeffrey.** Prior-based Bayesian statistics; the reply to Rudner. *([1.6](lessons/01-06-simplicity-and-curve-fitting.md), [3.4](lessons/03-04-values-and-inductive-risk.md))*
- **Two Good 1967 items.** The white-shoe note and the value-of-information theorem. *([1.4](lessons/01-04-the-ravens-paradox.md))*
- **A likelihood ratio against $\neg H$ or a named rival.** `philosophical-method` 2.4 has the first; the ravens and 3.2 the second. *([1.3](lessons/01-03-confirmation-as-probability-raising.md), [1.4](lessons/01-04-the-ravens-paradox.md))*
- **"Duhem's thesis".** `ancient-medieval-philosophy` 7.1 uses the phrase for a claim about 1277; do not use it for the testing claim. *([2.2](lessons/02-02-duhem-quine-and-underdetermination.md))*
- **"Likelihood principle" in `philosophy-of-religion`.** That course's name for what 3.2 calls the law of likelihood. *([3.2](lessons/03-02-the-likelihood-principle.md))*
- **Optional stopping here and Doob's theorem.** Different things; see `probability-theory` 5.4. *([3.2](lessons/03-02-the-likelihood-principle.md))*
- **"Incommensurable" of goods.** In `ethics` 4.5 and `philosophy-of-economics` 3.4 it means no common scale of value. *([2.4](lessons/02-04-kuhn-incommensurability-and-theory-choice.md))*
- **Two Maxwells, two Newmans, two Worralls.** Grover Maxwell has the continuum and James Clerk Maxwell the field equations; M. H. A. Newman has the objection, not John Henry; John Worrall is the structural realist, not Tim. *([5.3](lessons/05-03-structural-realism.md), [5.4](lessons/05-04-constructive-empiricism-and-entity-realism.md))*
- **Waltz's structural realism.** International relations, unrelated. *([5.3](lessons/05-03-structural-realism.md))*
- **Thomas S. Kuhn and Harold W. Kuhn.** The first wrote *Structure*. *([2.3](lessons/02-03-kuhn-normal-science-and-revolutions.md))*

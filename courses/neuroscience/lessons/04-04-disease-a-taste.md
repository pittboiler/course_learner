# Neuroscience · Lesson 4.4: Disease, a taste

> ⏱ ~15 min · Module 4: Learning, memory & cognition · Builds on: [4.3](04-03-attention-decision-making.md), [3.5](03-05-motor-control-correction.md) · Unlocks: 4.5 (methods, a taste)

## Why this matters

This is not a neurology lesson. It is a lesson about **inference**, and disease is the material.

Almost everything the course has told you about how the brain works was learned from something that broke. Broca's patient, H.M. ([4.2](04-02-memory-systems.md)), the basal ganglia model ([3.5](03-05-motor-control-correction.md)) — the field's foundational results are damage results. So the question worth asking is not "what are the diseases?" but **what does a broken mechanism actually license you to conclude about a working one, and where does that inference quietly fail?**

The answer turns out to depend enormously on *the level at which the disease's mechanism is specified*. For one condition in this lesson, a circuit model made a therapeutic prediction and the prediction came true. For another, we have a name, a drug that helps, and no mechanism at all. **Those two situations look similar in a textbook and are epistemically nothing alike**, and the whole point of the lesson is to be able to tell them apart. You should finish more sceptical than you started.

## The idea

**Start with what a lesion result is, stated precisely.** You damage structure $M$; behaviour $B$ disappears. What have you learned?

$$\text{damage to } M \;\Rightarrow\; B \text{ lost} \qquad\Longrightarrow\qquad M \text{ is } \mathbf{necessary} \text{ for } B \text{ in the intact system}$$

*In words: the system needed that part. Nothing more.*

**Necessity is a shockingly weak claim, and it is almost always over-read.** Remove a car's fuel pump and it will not move; the fuel pump does not implement locomotion. Every claim of the form "region $M$ computes $B$", "region $M$ represents $B$", "$B$ is localized to $M$" is strictly stronger than the lesion evidence supports.

**The sharpest demonstration of this is not from biology.** Jonas and Kording (2017) applied standard systems-neuroscience methods to a MOS 6502 microprocessor running *Donkey Kong* — a system whose mechanism is known exactly, down to the transistor. Lesioning transistors one at a time identified a set of "Donkey Kong transistors" that broke that game while leaving others running. It is a clean, reproducible, statistically solid localization result. **It tells you nothing whatsoever about how the chip works.** The methods that produce our best neuroscience produced, on a system we fully understand, an answer that was not wrong so much as not an explanation.

**Three corrections have to be applied to every disease-based inference**, and each one is a real phenomenon, not a caveat:

1. **Degeneration is never confined to one cell type.** The disease you name after one population has already touched several others.
2. **The deficit you measure is the deficit *after* compensation.** Nervous systems adapt continuously to their own decay, so symptoms appear at a **compensation threshold**, not a damage threshold — and by then most of the damage is done. This is quantitative, and we will compute it.
3. **A treatment that works does not validate the mechanism it was designed around.** Aspirin relieves headache; headaches are not caused by prostaglandin excess in any interesting sense. This correction is the one that has done the most damage in psychiatry.

**Now the organizing move.** Arrange the four cases along a single axis — *how well is the mechanism specified?* — and the axis does the teaching. As you move rightward, the honest verb weakens from **explains** to **is associated with**, and the amount you may conclude from the disease shrinks with it.

## The formal version

### 1. Parkinson's disease — the success case

**The mechanism.** Progressive loss of dopaminergic neurons in the substantia nigra pars compacta, which project to the striatum. Read straight off [3.5](03-05-motor-control-correction.md)'s model: dopamine sets the balance between the direct ("go") and indirect ("no-go") pathways, so **losing dopamine biases the basal ganglia toward no-go, and the output nuclei over-inhibit thalamus and cortex.**

*In words: selection-by-disinhibition still works, but the release is too weak and too slow.* The model predicts bradykinesia (slowness), rigidity, and difficulty initiating movement — and that is the clinical picture.

**Two therapeutic predictions, both made and both confirmed.** If the problem is a missing molecule, replace it: L-DOPA, the dopamine precursor, crosses the blood–brain barrier where dopamine cannot, and is given with a peripheral decarboxylase inhibitor so it is converted centrally. If the problem is a circuit stuck in over-inhibition, intervene at the node the model says is overactive: **deep brain stimulation of the subthalamic nucleus or internal globus pallidus.** DBS was not stumbled upon; the target was chosen from the circuit diagram.

$$\boxed{\;\text{The best example in the field of a circuit model earning a therapy.}\;}$$

**Now the honest limits, which matter more than the success.** L-DOPA treats the symptom and **does not slow the degeneration by one day**; after years, most patients develop levodopa-induced dyskinesias — involuntary movements caused by the treatment. And the non-motor features — REM sleep behaviour disorder, loss of smell, constipation, depression, later cognitive decline — often **precede motor onset by years**, and the basal ganglia circuit model does not explain a single one of them. The model is right about the part it describes and silent about most of the disease.

### 2. Epilepsy — the balance case

**The mechanism, one level up.** [2.2](02-02-neurotransmitters-receptors.md) and [2.6](02-06-circuit-motifs-computation.md) established that cortex runs in a regime of large, nearly cancelling excitation and inhibition. A seizure is what happens when the cancellation fails: **recurrent excitation escapes inhibitory control and becomes positive feedback**, recruiting neighbours faster than inhibition can restrain them, producing hypersynchronous activity that spreads.

*In words: the network's loop gain, normally held just below one, transiently exceeds one.* Note that this is a **network-dynamics** claim, not a molecular one — there need be no broken molecule anywhere.

**The evidence that the framing is real is pharmacological.** Anticonvulsants act, with remarkable consistency, on exactly the levers the E–I account names:

| Lever | Mechanism | Example |
|---|---|---|
| Reduce Na$^+$ channel availability | use-dependent block, so high-frequency firing is suppressed preferentially | phenytoin, carbamazepine, lamotrigine |
| Potentiate GABA-A | benzodiazepines raise channel opening *frequency*; barbiturates raise opening *duration* | diazepam, phenobarbital |
| Block T-type Ca$^{2+}$ channels | removes the thalamic burst rhythm | ethosuximide, for absence seizures |

**The use-dependence is the elegant part**: a drug that binds inactivated Na$^+$ channels preferentially suppresses a runaway high-frequency discharge while leaving normal firing nearly untouched. That is a mechanistically targeted therapy in the strong sense.

**Two honest qualifications.** First, roughly **one patient in three does not become seizure-free on medication**, which is a large fraction for a mechanism we claim to understand. Second — the counterintuitive one — **not every seizure is too little inhibition.** Interneuron networks coupled by gap junctions ([2.4](02-04-electrical-synapses.md)) are excellent synchronizers, and synchronous inhibition followed by synchronous rebound can *drive* rhythmic population activity. Interneuron firing can *increase* at seizure onset. Not every drug fits either: levetiracetam's target turned out to be a synaptic vesicle protein, SV2A, which no E–I reasoning predicted.

### 3. Alzheimer's disease — the contested case

**The amyloid cascade hypothesis** says the initiating event is accumulation of the amyloid-β peptide, cleaved from amyloid precursor protein (APP) by β- and γ-secretase, with tau tangles, synapse loss and neurodegeneration downstream.

**The genetic support is genuinely strong, and it should be stated fairly.** Every gene in which mutations *cause* autosomal-dominant early-onset Alzheimer's — APP itself, presenilin-1, presenilin-2 — sits in the amyloid production pathway. People with Down syndrome carry three copies of chromosome 21 and therefore of APP, and develop Alzheimer's pathology at very high rates and unusually early. And a rare APP variant that *reduces* amyloid production is **protective** against Alzheimer's. Genetics rarely points this consistently at one pathway.

**And the problem is equally real.** Therapies that clear amyloid do clear it — anti-amyloid antibodies remove plaque from the brain nearly completely on PET imaging — but the clinical benefit is **a fraction of a point on an 18-point clinical rating scale over 18 months**, alongside a real risk of amyloid-related imaging abnormalities (brain swelling and microhaemorrhage). Meanwhile **tau burden and its spread correlate with cognitive decline far better than plaque burden does**, and a substantial fraction of cognitively normal elderly people carry heavy plaque loads.

**The inference to hold onto:** near-complete removal of $X$ producing only marginal change in $Y$ is evidence against $X$ being the proximate cause of $Y$ — *or* evidence that the intervention came too late, after the cascade had become self-sustaining. **Those two readings are not distinguishable from the trial data**, which is exactly why the field has not settled.

**What does line up cleanly is the deficit pattern.** Degeneration begins in entorhinal cortex and hippocampus, so [4.2](04-02-memory-systems.md) predicts the profile in advance: severe anterograde episodic amnesia, with procedural learning and long-established semantic knowledge relatively spared early. The taxonomy built from H.M. correctly predicts the shape of a completely different disease. **That is a real success — of the memory model, not of the amyloid model.**

### 4. Depression and schizophrenia — the hard case

**Begin with the single most important thing to understand about these conditions: they are defined by symptom clusters, not by mechanism.** A diagnosis of major depressive disorder or schizophrenia is a statement about a pattern of experience and behaviour meeting agreed criteria. It is not a statement about a lesion, a molecule, or a circuit — because none is known.

**This has a hard consequence for research.** DSM-5 major depressive disorder requires at least five of nine criterion symptoms, at least one of which must be depressed mood or loss of interest. Count the qualifying symptom sets:

$$\underbrace{\sum_{k=5}^{9}\binom{9}{k}}_{\text{all sets of size} \ge 5} - \underbrace{\sum_{k=5}^{7}\binom{7}{k}}_{\text{sets containing neither core symptom}} = 256 - 29 = \boxed{227}$$

*In words: there are 227 distinct symptom profiles that all carry the same diagnosis.* And by the pigeonhole principle, **two people can both meet criteria while sharing exactly one symptom.** They are then in the same study arm, prescribed from the same list, and counted in the same outcome.

**Be clear about what this does and does not mean.** It does *not* mean the suffering is not real, not severe, or not treatable — depression and schizophrenia are among the most disabling conditions in medicine, and the treatments we have, imperfect as they are, save lives. It means the **category** is a clinical instrument, not a natural kind, and using it as though it were one is why mechanism-hunting has gone slowly. We quantify the cost of that in Example 2.

**Depression: the monoamine hypothesis and the evidence against its simple form.** The hypothesis — depression as a deficiency of serotonin, noradrenaline or dopamine — arose from pharmacological accident in the 1950s and was reinforced when SSRIs worked. **The observation that refutes the simple version is a timing argument, and it is decisive:** an SSRI raises extracellular serotonin within hours, but clinical improvement takes weeks. If the disorder were a serotonin deficit and the drug corrects the deficit, **there is nothing for the delay to be.** No acute pharmacology can explain a multi-week lag; only something slow and downstream can. Add that acutely depleting tryptophan does not make never-depressed people depressed, and the deficiency account in its textbook form does not survive.

*What replaced it is less tidy and more honest.* **Neuroplasticity accounts** hold that chronic stress reduces synaptic density and dendritic complexity in prefrontal and hippocampal circuits and that antidepressants act by promoting synaptic remodelling — which is inherently slow, matching the delay. **Network accounts** describe altered interaction between default-mode and control networks rather than a molecule. And **ketamine** — an NMDA receptor antagonist producing antidepressant effects within hours, via downstream synaptogenesis — is itself the strongest argument that the slow monoamine story was never the mechanism. None of these is established. Roughly a third of patients remit on the first antidepressant tried; treatment is still, in practice, sequential empiricism.

**Schizophrenia: two hypotheses and what each explains.** The **dopamine hypothesis** rests on a genuinely strong correlation — the clinical potency of antipsychotic drugs tracks their affinity for the D2 receptor — supported by amphetamine-induced psychosis. Its modern form localizes the abnormality to *presynaptic* striatal dopamine synthesis capacity rather than receptor number. **Its limit is stark: D2 blockade treats positive symptoms (hallucinations, delusions) and does relatively little for the negative and cognitive symptoms**, which are what most determine long-term function.

The **glutamate / NMDA-hypofunction hypothesis** exists because of what dopamine cannot do. NMDA receptor antagonists — ketamine, phencyclidine — produce in healthy volunteers positive symptoms *and* negative *and* cognitive ones; dopamine agonists produce only the positive. The proposed mechanism ties directly to [2.2](02-02-neurotransmitters-receptors.md): NMDA hypofunction on fast-spiking parvalbumin interneurons **disinhibits** pyramidal cells, shifting excitation–inhibition balance and disrupting the gamma-band synchrony those interneurons generate. That is an E–I account of a psychiatric disorder, and it is the right shape of hypothesis — **but it is a hypothesis, not a finding.**

**The genetics constrains the ambition.** Schizophrenia is highly heritable — twin estimates are around 80 percent — yet the risk is **spread across hundreds of common variants of individually tiny effect**; the largest genome-wide studies implicate on the order of 300 loci, with typical odds ratios near 1.05 to 1.1, and common variants together account for roughly a quarter of liability. A few rare variants carry much larger risk (the 22q11.2 deletion is the classic), and one of the strongest common signals — complement component C4, at the MHC locus — points at **synaptic pruning**, tying back to [2.5](02-05-development-and-wiring.md). **No genetic, imaging or biochemical measure is diagnostic for either condition.** A polygenic score is a population statistic; it is not a test.

### The inferential lesson, stated formally

Four rules, each one a correction to a step people actually take:

1. **Necessity is not implementation.** Lesion evidence supports "the system needed $M$", never "$M$ computes $B$".
2. **Specificity is assumed, not observed.** Degeneration crosses cell types; a drug's *molecular* selectivity says nothing about its *spatial* selectivity.
3. **Compensation biases every measurement.** The observed deficit is the residual after adaptation, $D_{\text{obs}} = D_{\text{true}} - C$, so symptom onset marks the failure of compensation, not the onset of damage.
4. **Therapeutic success is not mechanistic confirmation.** It shows the system is *modifiable* at that point. Nothing else.

## Picture

![A single chart placing four conditions along a horizontal arrow running from mechanism well specified on the left to mechanism unknown on the right. For each condition the chart gives the level at which it is understood, which earlier lesson it tests, what its treatment targets, and the honest limit of the account. Parkinson's disease is understood from molecule to circuit to symptom and its two treatments were model predictions, yet neither slows degeneration. Epilepsy is understood as circuit and network dynamics and its drugs act on the predicted levers, yet a third of patients remain drug-resistant. Alzheimer's disease has a proposed molecule of contested causal role, cleared almost completely by antibodies for a clinical gain of a fraction of a point. Depression and schizophrenia, drawn in a dashed box, are symptom clusters with no mechanism and no biomarker, treated by drugs found empirically. A caption states that moving rightward the honest verb weakens from explains to is associated with.](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (circuit reserve — why symptom onset is the wrong clock).** Post-mortem series consistently find that motor signs of Parkinson's appear only after roughly 50–60 percent of substantia nigra dopaminergic neurons are lost and striatal dopamine has fallen by 70–80 percent. Model the loss as exponential, $S(t) = e^{-kt}$, where $S$ is the surviving fraction of nigral neurons. Take diagnosis at $S = 0.40$ and suppose that a patient examined 15 years after diagnosis has $S = 0.15$. (a) Find $k$ and the neuron half-life. (b) How long did degeneration run before diagnosis? (c) What does this say about neuroprotective drug trials?

**(a)** Over the 15 years after diagnosis the surviving fraction falls by a factor

$$\frac{S(t_1)}{S(t_0)} = \frac{0.15}{0.40} = 0.375 = e^{-15k} \;\Longrightarrow\; k = \frac{-\ln 0.375}{15} = \frac{0.9808}{15} = \mathbf{0.0654\ \text{yr}^{-1}} .$$

$$t_{1/2} = \frac{\ln 2}{k} = \frac{0.6931}{0.0654} = \mathbf{10.6\ \text{years}} .$$

**(b)** Running the clock back from a full complement, $S = 1$, to diagnosis at $S = 0.40$:

$$t_{\text{prodrome}} = \frac{\ln(1/0.40)}{k} = \frac{0.9163}{0.0654} = \mathbf{14.0\ \text{years}} .$$

And the first 20 percent of neurons — a substantial loss by any standard — was gone by

$$t = \frac{\ln(1/0.8)}{k} = \frac{0.2231}{0.0654} = 3.4\ \text{years}.$$

**The model, fitted only to post-diagnosis decline, independently reproduces the observed prodrome**: hyposmia, constipation and REM sleep behaviour disorder do in fact precede motor onset by roughly a decade, and REM sleep behaviour disorder is now used as a prodromal marker precisely because of this interval.

**(c) This is correction 3 with numbers on it.** The threshold at $S = 0.40$ is **not a damage threshold; it is a compensation threshold.** Surviving terminals raise dopamine turnover, reduce reuptake, and postsynaptic receptors upregulate — the circuit works hard to look normal, and it succeeds until it cannot. **The consequence for therapeutics is brutal: a trial of a drug meant to protect neurons, begun at diagnosis, has already missed 14 years and 60 percent of its substrate.** Even a perfect neuroprotectant, started then, could only freeze a patient at the level of impairment they already have. This is a leading explanation for why disease-modifying trials in neurodegeneration keep failing — and the same argument applies to the amyloid trials in Example 3's territory, where the "too late" reading of the negative results is live for exactly this reason.

**Example 2 (what a symptom-defined category costs you, in sample size).** Suppose that among everyone meeting criteria for a symptom-defined diagnosis, a mechanistically homogeneous subgroup making up a fraction $\pi = 0.25$ has a genuinely large abnormality on some biomarker — a mean shift of $d = 1.2$ standard deviations — and the other 75 percent are unaffected on that measure. You run a conventional case–control study on the whole diagnostic category. (a) What effect size do you measure? (b) How many participants per group do you need at 80 percent power? (c) Compare with a study of the pure subgroup. (d) Interpret.

**(a)** The pooled case group is a mixture; its mean shift is the mixture average:

$$d_{\text{obs}} = \pi d = 0.25 \times 1.2 = \mathbf{0.30} .$$

(The mixture also *inflates* the case-group variance, by $\pi(1-\pi)d^2 = 0.27$, so the true standardized effect is a little smaller still — the estimate below is optimistic.)

**(b)** For a two-sample comparison at $\alpha = 0.05$ two-sided and 80 percent power, the standard requirement per group is

$$n \approx \frac{2\left(z_{0.975} + z_{0.80}\right)^2}{d^2} = \frac{2(1.96 + 0.84)^2}{d^2} = \frac{15.7}{d^2} .$$

$$n_{\text{mixed}} = \frac{15.7}{0.30^2} = \frac{15.7}{0.09} = \mathbf{175\ \text{per group}} .$$

**(c)** $$n_{\text{pure}} = \frac{15.7}{1.2^2} = \frac{15.7}{1.44} = \mathbf{11\ \text{per group}} .$$

$$\frac{n_{\text{mixed}}}{n_{\text{pure}}} = \frac{1}{\pi^2} = \frac{1}{0.0625} = \mathbf{16\times} .$$

$$\boxed{\;\text{Required sample size scales as } \pi^{-2}: \text{ halving the purity of your cases quadruples the study.}\;}$$

**(d)** Two conclusions, and the second is the sharper one.

First, **an impure category does not merely blur a result, it can hide it entirely.** A mechanism that is unmissable in the right 25 percent of patients looks like a weak trend in the whole group — and in a field where studies of 40 patients are common, it looks like nothing at all.

Second, **even a "highly significant" group difference at $d_{\text{obs}} = 0.30$ is clinically worthless as a test.** The area under the ROC curve for a single normally-distributed marker is $\Phi(d/\sqrt{2})$, so here

$$\text{AUC} = \Phi\!\left(\frac{0.30}{1.414}\right) = \Phi(0.212) = 0.58 .$$

Barely above the 0.50 of a coin flip. **This is why "no biomarker is diagnostic" and "hundreds of significant case–control findings exist" are both true at once**, and it is not a paradox: significance is about the mean, diagnosis is about the overlap, and with heterogeneous categories the overlap is nearly total. The proposed fix — grouping patients by measured biology rather than by symptom checklist — is the right idea and has not yet delivered a diagnosis.

## Watch out

- **You might think a lesion tells you what a structure does.** It tells you the system needed it. The transistor experiment gives statistically solid localization results for a chip whose actual mechanism they completely fail to reveal — and the methods were ours.
- **You might treat an effective drug as confirmation of the mechanism it targets.** L-DOPA works and does not slow the disease; SSRIs work and serotonin deficiency is not the mechanism; antipsychotics work and D2 excess does not explain negative symptoms. **Efficacy shows the system is modifiable at that point. That is the entire content of the inference.**
- **You might read symptom onset as disease onset.** It is a compensation threshold. By the time Parkinson's is diagnosable, roughly 14 years and most of the vulnerable neurons are gone — which is a fact about *when to intervene*, not just about pathology.
- **You might assume a diagnostic category is a natural kind.** 227 symptom profiles carry the same diagnosis of major depressive disorder, and two patients can share exactly one symptom. Mechanism-hunting inside such a category pays a $\pi^{-2}$ tax in sample size.
- **You might think high heritability implies a findable mechanism.** Schizophrenia is around 80 percent heritable and the risk is spread over hundreds of loci with odds ratios near 1.1. Heritability tells you variance is genetic; it does not promise a pathway, and it certainly does not promise a drug target.
- **You might expect a broken system to reveal its design.** It reveals its *failure mode*, which is filtered through whatever compensation the system managed first.

## One-liner

> A disease tells you what the brain needed, not what it did — and the four cases run from Parkinson's, where a circuit model earned two therapies, to depression and schizophrenia, where we have a name, a drug that helps, and no mechanism.

## Problems

**P1 (🟢)** Nigral neurons are lost exponentially, $S(t) = e^{-kt}$. In a patient, imaging shows the surviving fraction falls from 0.50 to 0.25 over 8 years. (a) Find $k$. (b) If motor symptoms appear at $S = 0.45$, how long had degeneration been running at that moment? (c) A neuroprotective drug that halves $k$ is started at symptom onset. How many extra years pass before this patient reaches $S = 0.20$, compared with no treatment?

**P2 (🟡, bridges to [prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md))** A candidate blood biomarker is shifted by $d = 1.6$ SD in a biologically distinct subgroup that makes up 20 percent of patients carrying a symptom-based diagnosis. (a) What effect size does a whole-category case–control study measure? (b) How many per group are needed at 80 percent power ($n \approx 15.7/d^2$)? (c) Compute the AUC, $\Phi(d/\sqrt{2})$, using $\Phi(0.23) = 0.591$. (d) The study runs with 60 per group, finds no significant difference, and the authors conclude the biomarker is not involved. State precisely what is wrong with that conclusion.

**P3 (🔴, bridges to [4.5](04-05-methods-a-taste.md))** A drug that blocks receptor $X$ relieves symptom $Y$ in a majority of patients. A paper concludes that $Y$ is caused by excessive $X$ signalling. (a) Name the inference error formally and give the counterexample from this lesson that is strongest against it. (b) Which single clinical observation about antidepressants refutes the analogous claim for depression, and why is a timing argument decisive where a correlational one is not? (c) An optogenetics experiment shows that driving neurons in region $R$ reliably produces symptom $Y$ in mice. Does that establish that $R$ implements $Y$? State what it does establish, and one reason the demonstration is weaker than it appears.

<details>
<summary>Solutions</summary>

**P1 (a)** The surviving fraction halves over 8 years, so 8 years is the half-life:

$$\frac{0.25}{0.50} = 0.5 = e^{-8k} \;\Longrightarrow\; k = \frac{\ln 2}{8} = \frac{0.6931}{8} = \mathbf{0.0866\ \text{yr}^{-1}} .$$

**(b)** From $S = 1$ down to $S = 0.45$:

$$t = \frac{\ln(1/0.45)}{k} = \frac{0.7985}{0.0866} = \mathbf{9.2\ \text{years}} .$$

**Over nine years of silent degeneration before the first symptom** — the compensation threshold again.

**(c)** Untreated, from $S = 0.45$ to $S = 0.20$:

$$\Delta t = \frac{\ln(0.45/0.20)}{k} = \frac{\ln 2.25}{0.0866} = \frac{0.8109}{0.0866} = 9.4\ \text{years}.$$

With $k' = k/2 = 0.0433\ \text{yr}^{-1}$, the same interval takes

$$\Delta t' = \frac{0.8109}{0.0433} = 18.7\ \text{years}, \qquad \text{gain} = 18.7 - 9.4 = \mathbf{9.3\ \text{extra years}} .$$

Exactly doubling the remaining time, as it must — halving a rate constant doubles every interval.

**The point worth extracting:** this drug is enormously valuable *and* it cannot restore anything. Starting at symptom onset, the patient keeps the 55 percent of neurons already lost. **A neuroprotectant's benefit is bounded entirely by when you start it**, which is why prodromal markers such as REM sleep behaviour disorder and hyposmia are of such interest — they are the only way to start the clock earlier.

**P2 (a)** $$d_{\text{obs}} = \pi d = 0.20 \times 1.6 = \mathbf{0.32} .$$

**(b)** $$n = \frac{15.7}{0.32^2} = \frac{15.7}{0.1024} = 153.3 \;\rightarrow\; \mathbf{154\ \text{per group}} .$$

For comparison, the pure subgroup would need $15.7/1.6^2 = 15.7/2.56 = 6.1$, i.e. **7 per group**. The exact ratio of the unrounded requirements is

$$\frac{153.3}{6.1} = 25 = \pi^{-2} = \frac{1}{0.04}$$

— exactly the $\pi^{-2}$ scaling, as it must be.

**(c)** $$\text{AUC} = \Phi\!\left(\frac{0.32}{\sqrt2}\right) = \Phi(0.226) \approx \Phi(0.23) = \mathbf{0.59} .$$

Essentially useless for classifying an individual, even if the group difference were established beyond doubt.

**(d) The conclusion commits the standard error of reading a non-significant result as evidence of absence.** Three specific faults:

1. **The study was underpowered by design.** It needs about 154 per group and has 60, giving power well below 50 percent for the effect actually present. A null result was the most likely outcome *whether or not the biomarker is involved*, so it carries almost no evidential weight.
2. **The quantity estimated is not the quantity of interest.** The study estimates the mean shift across a heterogeneous category. The scientific claim is about a mechanism in a subgroup. **These come apart by a factor of $\pi$, and no sample size fixes a mismatched estimand.**
3. **The correct conclusion is bounded, not null**: the data are consistent with any effect up to roughly the upper confidence limit, which here comfortably includes $d = 0.32$. Report the interval, not the verdict.

**What should have been done:** stratify in advance by an independent biological measure and test within strata, or use the biomarker to *define* the group and ask whether that group differs clinically — inverting the direction of inference. This is the whole argument for biology-first patient stratification in psychiatry.

**P3 (a) The error is inferring a causal deficit or excess from a therapeutic response** — treating "intervening on $X$ changes $Y$" as "abnormal $X$ caused $Y$". Formally, an intervention shows the system is **modifiable** at $X$; it establishes that $X$ lies somewhere on a causal path *into* $Y$, which is compatible with $X$ being entirely normal in patients. The clean counterexample is **L-DOPA**: replacing dopamine relieves bradykinesia and the causal lesion is neuronal death upstream, which L-DOPA does not touch — and correspondingly, **the drug does not slow the disease at all.** (Aspirin and headache makes the same point outside neuroscience.)

**(b) The therapeutic delay.** An SSRI blocks reuptake and raises extracellular serotonin within hours, but clinical improvement takes weeks. If depression were a serotonin deficit and the drug corrected it, **there would be nothing for the delay to consist of** — so the antidepressant effect must involve something slow and downstream (synaptic remodelling, network reorganization, transcriptional change), not the acute serotonin increase.

**Why the timing argument is decisive where correlation is not:** a correlational finding (serotonin metabolite levels differ between groups) is vulnerable to confounding, reverse causation and heterogeneity — all the problems of P2. The delay is instead a **within-mechanism inconsistency**: it takes the hypothesis's own proposed cause and its own proposed effect and shows they are separated by weeks. That refutation needs no control group and no effect size, only a clock. **Arguments from timescale are among the most robust available in biology**, which is why the same style of argument works throughout this course — for example, in showing that a metabotropic cascade cannot be carrying a millisecond message ([2.2](02-02-neurotransmitters-receptors.md)).

**(c) No.** What the experiment establishes is **sufficiency**: activity in $R$, at that moment, in that pattern, is sufficient to produce $Y$. That is genuinely more than a lesion gives you — necessity and sufficiency are different claims and both are worth having — but it is still not implementation. Stimulating the fuel pump does not show it computes locomotion.

**Two reasons it is weaker than it looks**, either of which suffices:

1. **The imposed pattern is not a natural one.** Optogenetic drive typically activates a population synchronously and at a rate the circuit never produces on its own. Sufficiency demonstrated with an unnatural input tells you what the *downstream* circuit does when hit hard, not what $R$ normally sends it.
2. **Sufficiency does not localize.** $R$'s output passes through many structures, and the symptom may be generated entirely downstream — $R$ merely being an available switch. Establishing implementation requires showing that the *natural* activity in $R$ carries the relevant variable, that perturbing it in a naturalistic pattern shifts behaviour in the predicted graded direction, and ideally that a model of what $R$ computes predicts responses to new stimuli.

[4.5](04-05-methods-a-taste.md) takes this up as the central methodological point: measurement buys correlation, perturbation buys causation, and neither on its own buys explanation.

</details>

## Flashback

**From Lesson 4.1 (synaptic plasticity: LTP and LTD):** A cell receives two excitatory inputs, A and B, each starting at weight $w = 1.00$ (arbitrary units). A stimulation protocol delivers 200 pairings in which input A always spikes 12 ms **before** the postsynaptic spike, and input B always spikes 24 ms **after** it. Use the STDP window with $\Delta t = t_{\text{post}} - t_{\text{pre}}$, $A_+ = 0.60$ percent, $\tau_+ = 15$ ms, $A_- = 0.30$ percent, $\tau_- = 30$ ms, and apply each pairing multiplicatively.

(a) Compute $\Delta w$ per pairing for A and for B. (b) Compute both weights after the 200 pairings and their ratio. (c) Synaptic scaling now restores the cell's total excitatory weight to its original 2.00. Give the scaled weights, state the ratio, and say in one sentence what the scaling preserved and what it discarded.

<details>
<summary>Solution</summary>

**(a)** Input A has $\Delta t = +12$ ms (pre before post, the causal ordering), input B has $\Delta t = -24$ ms (post before pre):

$$\Delta w_A = +0.60\,e^{-12/15} = 0.60 \times e^{-0.800} = 0.60 \times 0.4493 = \mathbf{+0.2696\ \text{percent}}$$

$$\Delta w_B = -0.30\,e^{-24/30} = -0.30 \times e^{-0.800} = -0.30 \times 0.4493 = \mathbf{-0.1348\ \text{percent}}$$

The two exponents are deliberately equal ($12/15 = 24/30 = 0.8$), so the whole difference between the inputs is the amplitude ratio $A_+/A_- = 2$. **Input B is twice as far from the spike in time and still gets exactly half the magnitude — the wider depression lobe is what buys that.**

**(b)** Compounding 200 pairings:

$$w_A = (1.002696)^{200} = e^{200\ln(1.002696)} = e^{200 \times 0.0026924} = e^{0.5385} = \mathbf{1.713}$$

$$w_B = (0.998652)^{200} = e^{200\ln(0.998652)} = e^{200 \times (-0.0013489)} = e^{-0.2698} = \mathbf{0.764}$$

$$\frac{w_A}{w_B} = \frac{1.713}{0.764} = \mathbf{2.244}$$

**A per-pairing difference of 0.40 percent, caused by nothing but spike order, has produced a 2.24-fold difference in synaptic strength in under a minute of stimulation.** Note the ratio is $e^{0.5385+0.2698} = e^{0.8083}$ — the log-ratio is exactly additive in the two lobe contributions, which is what multiplicative updating buys you.

**(c)** The total is $1.713 + 0.764 = 2.477$, so every weight is multiplied by

$$\alpha = \frac{2.00}{2.477} = 0.8075 \;\Longrightarrow\; w_A' = 1.713 \times 0.8075 = \mathbf{1.384}, \qquad w_B' = 0.764 \times 0.8075 = \mathbf{0.617}$$

Total $= 2.00$ ✓, and the ratio is $1.384/0.617 = \mathbf{2.24}$ — **unchanged.**

**Scaling discarded the absolute strengths and preserved the relative pattern**, which is the whole point: what STDP wrote is the *comparison* between A and B, and multiplication is the unique operation that resets the cell's total drive while leaving every such comparison intact.

</details>

## Connections

- **Backward:** every case here is a stress test of an earlier model — [3.5](03-05-motor-control-correction.md)'s basal ganglia for Parkinson's, [2.2](02-02-neurotransmitters-receptors.md) and [2.6](02-06-circuit-motifs-computation.md)'s excitation–inhibition balance for epilepsy and for the schizophrenia hypotheses, [4.2](04-02-memory-systems.md)'s memory taxonomy for the Alzheimer's deficit pattern, [2.5](02-05-development-and-wiring.md)'s synaptic pruning for the C4 finding, and [2.4](02-04-electrical-synapses.md)'s coupled interneurons for the seizures that inhibition helps cause.
- **Forward:** [4.5](04-05-methods-a-taste.md) is this lesson's inferential problem restated as a toolkit — measurement gives correlation, perturbation gives causation, and the section on lesions, optogenetics and connectomics is where the four rules above get applied to instruments rather than diseases.
- **Sideways:** the power and estimand argument in Example 2 is [prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) applied to a real research programme — the mixture dilution factor $\pi$ is why underpowered heterogeneous studies dominate a literature. The compensation threshold is a negative-feedback controller masking a disturbance until its authority is exhausted, which is exactly the framing of [physiology 1.1](../../physiology/lessons/01-01-homeostasis-feedback-control.md): **a well-regulated variable is the last one to reveal that something is wrong.**

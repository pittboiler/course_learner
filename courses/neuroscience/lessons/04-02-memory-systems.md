# Neuroscience · Lesson 4.2: Memory systems

> ⏱ ~15 min · Module 4: Learning, memory & cognition · Builds on: [4.1](04-01-plasticity-ltp-ltd.md), [3.5](03-05-motor-control-correction.md) · Unlocks: 4.3 (attention & decision-making)

## Why this matters

[4.1](04-01-plasticity-ltp-ltd.md) gave you a mechanism for changing a synapse. It is tempting to stop there and say: memory is stored in synaptic weights, done. But that answer is too coarse to be useful, because it does not predict a single thing about what a person with a damaged brain can and cannot remember.

**The organizing claim of this lesson is that "memory" is not one thing.** It is several dissociable systems with different substrates, different learning rules, different timescales, and — this is the part that makes it testable — **different failure modes**. And the evidence is *lesion* evidence, which is why the case studies below are not anecdote. A single patient who cannot form a new memory of a conversation while steadily improving at a motor skill is a **logical proof** that at least two independent systems exist, no matter what any theory says.

There is also a payoff you will use immediately. You are studying this course with spaced repetition. The last section explains, from consolidation mechanics, why the app's schedule works — and why it would fail if it did the obvious thing instead.

## The idea

**Start with H.M.** In 1953 a man with intractable epilepsy had his medial temporal lobes removed bilaterally — hippocampus, amygdala, and surrounding entorhinal and perirhinal cortex. The seizures improved. What happened to his memory is the single most informative result in the history of the subject, because of the *pattern* of what broke.

| Observation | What it rules out |
|---|---|
| Could not form new memories of events or facts (**severe anterograde amnesia**) | The hippocampus is not optional for declarative learning |
| Could hold a number in mind for as long as he rehearsed it (**intact working memory**) | Short-term maintenance is a **separate system**, not "the first stage" of long-term memory |
| Remembered his childhood in detail (**intact remote memory**) | The hippocampus is **not where old memories live** |
| Lost memories from the years just before surgery, not the distant past (**temporally graded retrograde amnesia**) | Memories *move*: they start hippocampus-dependent and stop being so |
| Improved at mirror-drawing across days while denying he had ever done the task (**preserved procedural learning**) | Skill learning is a **different system** with a different substrate |
| Normal IQ, language, personality | Memory is not a byproduct of general intelligence |

**Read the fifth row again.** He got measurably better at a task, day after day, and each day insisted he had never tried it. **The learning and the memory of learning came apart.** No prior theory of memory predicted that, and any theory that survives it must have at least two boxes in it.

**The honest caveat, stated up front:** one patient, with a surgical lesion that was never precisely characterized until an MRI decades later, carried more theoretical weight than one case ever should. Everything above has since been replicated in other amnesic patients and in animal lesion work — which is the only reason to trust it. Treat H.M. as the discovery, not the evidence.

**The taxonomy that fell out of it:**

- **Declarative** memory — things you can *declare*. Split into **episodic** (a particular event, located in time and place: what you ate yesterday) and **semantic** (facts stripped of their acquisition context: Paris is the capital of France). Medial temporal lobe at first.
- **Non-declarative** memory — everything expressed through *performance* rather than report: **procedural** skills (striatum, cerebellum), **priming** (neocortex), **classical conditioning** (amygdala for emotional, cerebellum for motor), **habituation** (reflex pathways).

**And now the convergence worth noticing.** [3.5](03-05-motor-control-correction.md) closed with three learning systems distinguished by their teaching signals — cerebellum learning from *error*, basal ganglia from *reward*, cortex from *statistics*. That taxonomy was built from motor control. This one was built from amnesia. **They line up**: procedural/skill learning sits in exactly the striatal and cerebellar machinery 3.5 described, and declarative memory sits in the structure neither of them used. Two independent lines of evidence carving at the same joint is the strongest thing you get in this field.

## The formal version

### Working memory is a process, not a store

**Working memory is maintained activity, not a stored trace.** During a delay period — hold this location in mind for four seconds — prefrontal and parietal neurons fire persistently, at elevated rates, for the whole delay. That is [2.6](02-06-circuit-motifs-computation.md)'s recurrent-excitation motif doing its job: a population that excites itself can sustain a state after its input is gone.

*In words: long-term memory is a change in the wiring; working memory is a pattern of activity running on wiring that has not changed.*

Three consequences follow, and each is a real difference in kind:

1. **It is metabolically ongoing.** It costs spikes every millisecond it persists.
2. **It is interruptible.** A distractor, or anything that disrupts the attractor, erases it. Synaptic traces do not have this property.
3. **It is capacity-limited** in a way synaptic storage is not — a handful of items, because independent attractor states must not overlap enough to merge.

This is why H.M. had normal digit span. Nothing in an active recurrent loop requires a hippocampus.

### Consolidation, in two senses that are constantly conflated

**Synaptic consolidation** (minutes to hours): the transition from early to late LTP at a given synapse — protein synthesis, transcription, structural change ([4.1](04-01-plasticity-ltp-ltd.md)). *Local to the synapse. Blocked by a protein-synthesis inhibitor given shortly after learning; unaffected by the same drug given a day later.*

**Systems consolidation** (weeks to years): reorganization across *structures*, so a memory that initially required the hippocampus for retrieval comes to be supported by neocortex alone.

*In words: the first is one synapse making a change permanent; the second is the whole brain moving a memory to a different address. They share a name and nothing else.*

**Systems consolidation is exactly what the graded retrograde amnesia measures.** If hippocampal dependence decays with the age of the memory, then a lesion at time $T$ destroys access to memories formed shortly before $T$ and spares those formed long before. That is the temporal gradient — a prediction of the model, and the observation that motivated it.

### Why a two-speed architecture is necessary, not merely observed

Here is the argument that makes the standard model more than a redescription. Consider a single network learning by gradient-style updates: with learning rate $\varepsilon$, each exposure to a pattern moves the weights a fraction $\varepsilon$ of the way toward the solution for *that* pattern,

$$\mathbf{w} \leftarrow \mathbf{w} + \varepsilon\,(\mathbf{w}^* - \mathbf{w}), \qquad \text{so after } k \text{ exposures} \quad \lVert \mathbf{w} - \mathbf{w}^* \rVert = (1-\varepsilon)^k \lVert \mathbf{w}_0 - \mathbf{w}^* \rVert .$$

*In words: how fast a network learns something new is exactly how fast it destroys what it already knew, because both are the same weight movement.*

Now impose the biological constraint: **an episode happens once.** To learn from one exposure you need $\varepsilon \approx 1$. But $\varepsilon \approx 1$ means the very next episode overwrites it — **catastrophic interference**, and it is not a bug in a particular model, it is what "learning fast" means in a shared set of weights.

$$\boxed{\;\text{one-shot learning and interference-free storage cannot coexist in one network}\;}$$

**The resolution is two networks with two learning rates.** A fast learner ($\varepsilon$ large, sparse and highly separated codes so different episodes barely share weights) captures the episode immediately. A slow learner ($\varepsilon$ small, distributed overlapping codes that support generalization) is trained by **interleaved replay** from the fast store — the new episode presented over and over, shuffled among old material, so the slow network extracts structure without any single episode dominating.

The hippocampus is the fast learner. Neocortex is the slow one. **Replay** is the interleaving mechanism: during slow-wave sleep and quiet rest, hippocampal place-cell sequences from the waking day are reactivated, compressed in time, and reinstated in cortex.

**This is the same constraint machine learning ran into independently**, and solved the same way — experience replay buffers in reinforcement learning exist because online learning from a correlated stream is unstable, and rehearsal-based methods exist because continual learning forgets ([machine-learning](../../machine-learning/syllabus.md)). Two fields, two decades apart, forced to the same architecture by the same arithmetic.

### Index, pattern separation, pattern completion

What does the hippocampus actually store? On the standard account, not the content but an **index**: a sparse pointer binding together the cortical modules that were co-active during the episode. Retrieval means reinstating the index, which reinstates the cortical pattern.

Two complementary operations make this work, and they are in tension:

- **Pattern separation** (dentate gyrus): map similar inputs to *dissimilar* sparse codes, so today's breakfast does not overwrite yesterday's. A very large number of granule cells, very few active at once.
- **Pattern completion** (CA3, densely recurrent): from a *partial* cue, recover the whole stored pattern — an autoassociative attractor network, which is what makes a smell recover a whole scene.

**You need both, and each degrades the other.** Too much separation and no cue ever retrieves anything; too much completion and every experience merges into its neighbours. The two-stage anatomy — separate in DG, complete in CA3 — is one of the clearest cases where a circuit's structure follows from a computational requirement. Place cells and grid cells are this indexing machinery instantiated for space, which is why spatial memory is the easiest kind to study.

### Reconsolidation, and memory as reconstruction

**Reactivating a consolidated memory can return it to a labile, protein-synthesis-dependent state.** Block synthesis at that moment and the *reactivated* memory is impaired — even though it had been stable for weeks.

*In words: retrieving a memory is not reading a file; it is opening it for editing.*

If that is right, then every recollection is partly a reconstruction from the current state of the system, and each retrieval can alter the trace. This fits the eyewitness-memory literature uncomfortably well. The clinical hope — weakening traumatic memories by reactivating them under a blocker — is real but the human results have been inconsistent, and the boundary conditions on when reconsolidation occurs at all are still disputed. Hold it as a well-supported phenomenon with an unsettled scope.

**Forgetting, correspondingly, is a feature.** Interference, decay, and demonstrated *active* forgetting mechanisms are not failures of an archival system; they are what makes generalization possible. A system that stored every episode verbatim would be a system that could never notice that two of them were instances of the same thing.

## Picture

![Panel a is a taxonomy tree of long-term memory. The root splits into declarative memory, which splits into episodic memory supported by hippocampus and medial temporal lobe and semantic memory supported by medial temporal lobe then neocortex, and non-declarative memory, which splits into procedural learning supported by striatum and cerebellum, priming supported by neocortex, conditioning supported by amygdala and cerebellum, and habituation supported by reflex pathways. The declarative branch is coloured to mark what H.M. could no longer form, and the non-declarative branch to mark what he learned normally with no recollection of learning it. Panel b plots hippocampal dependence decaying and neocortical representation rising against the age of a memory on a logarithmic axis from hours to decades, with the crossover marked, and beneath the axis a band showing the consequence: memories formed shortly before a bilateral medial temporal lesion are lost while remote ones are spared.](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — reading a taxonomy off a lesion).** H.M. produced six observations. Draw one conclusion from each, and note what the *set* establishes that no single observation does.

| Observation | Conclusion |
|---|---|
| Cannot recall a conversation from 10 minutes ago | Hippocampus is **required to form** new declarative memories |
| Recalls his childhood address | Hippocampus is **not the storage site** for old ones |
| Loses the years just before surgery | Declarative memories are hippocampus-dependent **for a limited period**, then are not |
| Digit span normal | Working memory is a **separate system** |
| Mirror-drawing improves across days | Procedural learning has a **different substrate** |
| Denies ever having done the task | The skill and the episode of acquiring it are **stored separately** |

**What the set establishes:** rows 1 and 2 together are the whole standard model in embryo — a structure that is necessary for *encoding* and unnecessary for *retrieval* of remote material can only be a temporary participant, which forces something like systems consolidation. Row 3 then measures the time course of that participation. **A single dissociation would not have done this.** If H.M. had only failed declarative tasks, the obvious alternative — that declarative tasks are simply harder, and the lesion caused a general deficit — would still be alive. It takes the *pattern* to kill it, and a genuine double dissociation to kill it dead (P1).

**Example 2 (why you'd care — the arithmetic that forces two systems).** Take a cortical network with learning rate $\varepsilon = 0.01$ per exposure.

(a) **How many exposures does it need to learn a pattern?** From $(1-\varepsilon)^k$, closing 95 percent of the gap needs

$$k = \frac{\ln 0.05}{\ln 0.99} = \frac{-2.996}{-0.01005} = 298 \approx 300 \text{ exposures}.$$

A single exposure closes 1 percent of the gap. **One-shot episodic learning is flatly impossible at this learning rate.**

(b) **So raise the learning rate.** Set $\varepsilon = 1$: one exposure lands exactly on $\mathbf{w}^*$ for that pattern. But the same equation says the *next* pattern also lands exactly on its own solution — from the same weights. The first is gone. **The learning rate that buys one-shot encoding is precisely the learning rate that guarantees overwriting.**

(c) **Therefore two networks.** The fast one takes $\varepsilon \approx 1$ and pays for it with sparse, minimally-overlapping codes so that "overwriting" affects almost no shared weights — that is pattern separation, and it is why the dentate gyrus looks the way it does. The slow one keeps $\varepsilon = 0.01$, and gets its 300 exposures **from replay**, spread over nights, interleaved with old material so it never sees a run of correlated examples.

(d) **The model earns its keep by predicting the gradient.** If cortical learning needs a few hundred interleaved reinstatements and replay delivers them at some finite nightly rate, then hippocampal dependence must fall off *gradually over weeks to years* — not switch off at some fixed age. **The temporal gradient in panel (b) is not an extra assumption; it is $(1-\varepsilon)^k$ read as a function of time.** And it predicts something further, which is P3: replay bandwidth is finite, so the system must *choose* what to consolidate.

### Why spaced repetition works — the payoff

Take the crudest model that respects consolidation. Let retrievability decay exponentially after a study event,

$$R(t) = e^{-t/\tau},$$

where $t$ is time since the last successful retrieval and $\tau$ is a stability parameter, and let the rule be: **a retrieval that succeeds but is *effortful* — say $R < 0.9$ at the moment of testing — doubles $\tau$; a retrieval made while the item is still fully available does essentially nothing.** Each successful retrieval resets $R$ to 1.

The mechanistic reading: effortful retrieval reinstates the trace strongly enough to trigger another round of synaptic consolidation and another slice of cortical exposure. Restudying an item you already have available reinstates nothing, so it consolidates nothing — **which is the testing effect**, and why re-reading feels productive and is not.

Start at $\tau_0 = 1$ day. Review at day 1: $R = e^{-1} = 0.368 < 0.9$, so the retrieval is effortful and $\tau \to 2$ days. The next review should therefore fall about 2 days later — **and the optimal schedule expands geometrically because $\tau$ does.** P2 runs this to 30 days and compares it against cramming.

## Watch out

- **You might think the hippocampus stores memories.** It is required to *form* declarative memories and to retrieve *recent* ones. Remote memories survive its removal, which is why H.M. could describe his childhood. It is closer to an index than an archive.
- **You might treat "consolidation" as one process.** Synaptic consolidation (minutes to hours, protein synthesis at one synapse) and systems consolidation (weeks to years, reorganization across structures) share a word and nothing else. Papers routinely rely on you to disambiguate from context.
- **You might think short-term memory is the front end of long-term memory** — that things pass through it on the way in. H.M. had normal working memory and no new long-term memories, so it is a parallel system, not a gateway.
- **You might read "declarative versus procedural" as "conscious versus unconscious."** The clean definition is *how the memory is expressed*: by report, or by performance. Awareness usually tracks that split, but it is a correlate, not the criterion.
- **You might expect a retrieved memory to be unchanged by retrieving it.** Reconsolidation says retrieval opens the trace for editing. Memory is reconstructive, and confidence in a recollection is a poor guide to its fidelity.
- **You might think forgetting is a design flaw.** A system that retained every episode verbatim could never generalize. Interference and active forgetting are the price of extracting structure — and structure is what the slow cortical learner exists to find.

## One-liner

> Memory is several systems, not one — and the reason is arithmetic: no single network can learn from one exposure without overwriting what it knew, so the brain runs a fast hippocampal indexer that replays into a slow cortical learner, which is why H.M. lost new facts but kept his skills and his childhood, and why spacing your reviews beats cramming them.

## Problems

**P1 (🟢)** Suppose two patients perform a probabilistic classification task (cards predict weather; no single cue is reliable, so the mapping must be learned from feedback over many trials).

- **Patient A** has bilateral medial temporal damage. Over 50 trials her accuracy rises from chance to well above it. Afterwards she cannot describe the cards, the task, or the session.
- **Patient B** has early striatal dopaminergic degeneration. His accuracy stays at chance across the 50 trials. Afterwards he describes the cards, the instructions, and the experimenter in detail.

(a) Name the memory system each patient has lost and the one each has retained. (b) This pattern has a name — give it, and explain why it is stronger evidence than Patient A's result alone. (c) Which lesson's machinery predicts Patient B's deficit?

**P2 (🟡, uses the model from the Worked examples)** Retrievability decays as $R(t) = e^{-t/\tau}$ with $t$ measured from the last successful retrieval; a successful retrieval resets $R$ to 1, and doubles $\tau$ if $R < 0.9$ at the moment of testing (otherwise $\tau$ is unchanged). Start with $\tau_0 = 1$ day.

(a) You review on days 1, 3 and 7. Compute $R$ at each review and $\tau$ after it. (b) What is $R$ at day 30? (c) A classmate does three reviews 10 minutes apart on day 0 instead. Compute his $R$ at day 30. (d) From the model, when should the *next* review be scheduled, and what schedule does that generate?

**P3 (🔴, bridges to machine learning)** Take the cortical learner of Example 2, $\varepsilon = 0.01$, needing about 300 interleaved reinstatements to consolidate one episode. Suppose hippocampal replay has a nightly budget of $B = 600$ episode-reinstatements, and roughly 30 memorable episodes are experienced per day.

(a) If the budget were shared equally among the day's 30 episodes, how long would one take to consolidate, and what happens to the backlog? (b) What is the maximum number of episodes per night that can be fully consolidated, and what fraction of experience is that? (c) State the design conclusion, and name the neural signal from [3.5](03-05-motor-control-correction.md) that plausibly implements it. (d) Name the corresponding problem and fix in machine learning.

<details>
<summary>Solutions</summary>

**P1 (a)** **Patient A** has lost declarative memory (hippocampus / medial temporal lobe) and retained non-declarative procedural learning: she acquires the stimulus–response mapping through feedback while forming no episodic record of doing so. **Patient B** has lost procedural/habit learning (striatum, feedback-driven) and retained declarative memory: he can report everything about the session and has learned nothing from it.

**(b)** This is a **double dissociation**. Patient A alone is a *single* dissociation, and single dissociations have a standing alternative explanation: perhaps declarative tasks are simply harder, or more sensitive to any brain damage, so a general deficit would produce her pattern. Patient B rules that out, because he shows the *opposite* deficit on the *same* task.

$$\text{A: declarative impaired, procedural spared}$$
$$\text{B: procedural impaired, declarative spared}$$

**No single-resource account can generate both.** If one system were a harder version of the other, damage would always impair the harder one first, in the same direction, in every patient. Getting both directions forces at least two independent substrates — which is the whole logic of lesion inference, and the reason the taxonomy in the figure is a finding rather than a convention.

**(c)** [3.5](03-05-motor-control-correction.md). The basal ganglia learn from a **reward-prediction error** carried by dopamine; degeneration of the dopaminergic input removes the teaching signal, so feedback-driven habit learning fails while nothing about the medial temporal system is touched. Note that this makes Patient B's deficit a *prediction* of 3.5's model, not just a correlation.

**P2 (a)** Work forward, resetting the clock at each review.

| Review | Elapsed since last | $\tau$ before | $R$ at review | Effortful? | $\tau$ after |
|---|---|---|---|---|---|
| Day 1 | 1 d | 1 d | $e^{-1} = 0.368$ | yes | 2 d |
| Day 3 | 2 d | 2 d | $e^{-2/2} = e^{-1} = 0.368$ | yes | 4 d |
| Day 7 | 4 d | 4 d | $e^{-4/4} = e^{-1} = 0.368$ | yes | 8 d |

**Notice that $R$ is 0.368 at every review.** The intervals 1, 2, 4 days were chosen to track $\tau$, so each test lands at the same retrievability. That is not a coincidence in the model — it is what an expanding schedule *is*.

**(b)** From day 7 the elapsed time to day 30 is 23 days with $\tau = 8$ days:

$$R(30) = e^{-23/8} = e^{-2.875} = \mathbf{0.056}, \ \text{about } 5.6 \text{ percent}.$$

**(c)** Three reviews at 10, 20 and 30 minutes, with $\tau_0 = 1\ \text{day} = 1440$ min:

$$R = e^{-10/1440} = 0.993, \qquad e^{-20/1440} = 0.986, \qquad e^{-30/1440} = 0.979 .$$

All three exceed 0.9, so **not one of them is effortful** and $\tau$ stays at 1 day. At day 30:

$$R(30) = e^{-30/1} = e^{-30} \approx 9\times10^{-14} \approx \mathbf{0}.$$

**Same three reviews, same total effort, and the retention differs by more than twelve orders of magnitude in the model.** The model exaggerates (real forgetting is closer to a power law, and massed practice is not literally worthless), but the direction and the mechanism are right: **a review only counts when the item was hard to retrieve, and cramming guarantees that none of them are.**

**(d)** The model says: schedule the next review at $t \approx \tau$.

- Review much **earlier** ($R$ near 1) and the retrieval is not effortful, so $\tau$ does not grow — the review is wasted, which is (c).
- Review much **later** ($R$ near 0) and retrieval fails outright, so there is no successful retrieval to consolidate.
- Testing at $t = \tau$ puts $R = e^{-1} \approx 0.37$ — hard, but recoverable.

Since each success doubles $\tau$, the resulting intervals are

$$1,\ 2,\ 4,\ 8,\ 16,\ 32\ \text{days} \ldots$$

**an expanding geometric schedule, which is exactly what spaced-repetition software implements** — and, on this account, why it works: it is a controller holding retrievability at a fixed setpoint while the stability it is measuring grows underneath it.

**P3 (a)** Equal sharing gives each of the 30 episodes

$$\frac{600}{30} = 20 \ \text{reinstatements per night}, \qquad \frac{300}{20} = \mathbf{15\ \text{nights}} \ \text{per episode}.$$

But 30 *new* episodes arrive every day while each old one still needs 15 nights of service. The arrival rate is 30 per day and the equal-sharing service rate is $30/15 = 2$ episodes completed per day. **Demand exceeds capacity by a factor of 15, so the backlog grows without bound** and nothing ever finishes.

**(b)** The budget supports

$$\frac{600}{300} = \mathbf{2\ \text{episodes fully consolidated per night}},$$

out of about 30 experienced:

$$\frac{2}{30} = 0.067, \ \text{about } \mathbf{7\ \text{percent}}.$$

**(c) Replay cannot be uniform — it must be selective, and the selection is the interesting part.** With bandwidth this scarce, a system that replayed at random would consolidate a representative sample of a day, most of which is not worth keeping. The prediction is that replay should be **prioritized by expected value**: novelty, surprise, emotional salience, and reward.

That is what is observed — replay is biased toward rewarded locations and salient events — and the plausible signal is **dopaminergic reward-prediction error** from [3.5](03-05-motor-control-correction.md), the same quantity that trains the basal ganglia, here acting as a *tag* marking which experiences are worth the consolidation budget. It also connects downward to [4.1](04-01-plasticity-ltp-ltd.md): synaptic tagging and capture is the synapse-level version of the same idea — mark now, consolidate later, and only where marked.

**(d)** In machine learning the problem is **catastrophic forgetting** in continual learning, and the fix is the same: a **replay buffer**. Deep reinforcement learning stores transitions and samples them repeatedly and out of order, precisely to break the correlations in the online stream that would otherwise destabilize learning — and **prioritized experience replay** samples them in proportion to their prediction error, which is (c) with the biology removed ([machine-learning](../../machine-learning/syllabus.md)).

**The convergence is the point.** Neither field borrowed this from the other; both were forced into it by the same fact about shared weights. When an engineering constraint and a lesion syndrome imply the same architecture, the architecture is probably about the problem rather than about the substrate.

</details>

## Flashback

**From Lesson 3.2 (Vision):** An ON-centre retinal ganglion cell sums its inputs linearly. The centre carries total weight $+4$ spread uniformly over the centre disc; the surround annulus carries total weight $-4$ spread uniformly over it. Light intensity is $I$ where illuminated and 0 elsewhere, and the response is the weighted sum.

(a) Response to uniform illumination of the whole field at $I = 1$? (b) At $I = 10$? (c) An edge falls so that the entire centre is on the bright side ($I=1$) and exactly half the surround is bright. Response? (d) A neighbouring cell of the same type sits just on the dark side: its centre is entirely dark, and half its surround is bright. Response? (e) What is the cell reporting, and what does that buy the optic nerve?

<details>
<summary>Solution</summary>

**(a)** $$r = (+4)(1) + (-4)(1) = \mathbf{0}.$$

**(b)** $$r = (+4)(10) + (-4)(10) = \mathbf{0}.$$

**A tenfold change in illumination produces no response at all.** The balanced centre and surround cancel for any spatially uniform input.

**(c)** Centre fully bright contributes $+4$; half the surround bright contributes $(-4)(0.5) = -2$:

$$r = +4 - 2 = \mathbf{+2}.$$

**(d)** Centre dark contributes 0; half the surround bright contributes $-2$:

$$r = 0 - 2 = \mathbf{-2}.$$

| Stimulus | Response |
|---|---|
| Uniform, $I=1$ | 0 |
| Uniform, $I=10$ | 0 |
| Cell just inside the bright side of an edge | $+2$ |
| Cell just inside the dark side of an edge | $-2$ |

**(e)** The cell reports **local spatial contrast** — a discrete second-derivative, or difference-of-Gaussians, operator — and is blind to absolute luminance. The population signal is therefore near zero across the interiors of uniform regions and swings positive-then-negative across a border, which is why a step edge is transmitted as a bright-side overshoot and a dark-side undershoot (Mach bands: the perceptual readout of rows 3 and 4).

**What it buys the optic nerve is bandwidth.** Natural images are strongly correlated in space — a pixel's best predictor is its neighbour — so transmitting raw intensity means transmitting the same value over and over. Sending only the *deviations from local prediction* is **redundancy reduction**, and it matters because roughly a hundred million photoreceptors must be funnelled into on the order of a million optic-nerve fibres. Uniform regions cost almost nothing to transmit, and the bits go where the information is: the edges.

</details>

## Connections

- **Backward:** [4.1](04-01-plasticity-ltp-ltd.md) supplies the synapse-level mechanism this lesson organizes into systems — late-LTP protein synthesis *is* synaptic consolidation, and synaptic tagging is the local version of P3's prioritized replay. [2.6](02-06-circuit-motifs-computation.md)'s recurrent excitation is what makes working memory possible without changing a single weight. [3.5](03-05-motor-control-correction.md)'s three teaching signals and this lesson's taxonomy are the same partition found twice.
- **Forward:** [4.3](04-03-attention-decision-making.md) needs working memory as maintained activity — the delay-period attractor is where accumulated evidence and task set are held. [4.4](04-04-disease-a-taste.md) reads Alzheimer's onset off this taxonomy: entorhinal and hippocampal degeneration first predicts anterograde episodic loss with spared procedural learning, and that is what is seen.
- **Sideways:** the fast/slow two-learner architecture is complementary learning systems, and it is the same constraint that produced replay buffers and rehearsal methods in [machine-learning](../../machine-learning/syllabus.md). The pattern-separation/pattern-completion trade in DG and CA3 is a sparse-coding and autoassociative-memory problem in exactly the sense those fields mean it. And the spacing model in P2 is a controller holding a state estimate at a setpoint — [3.5](03-05-motor-control-correction.md)'s framing applied to your own study schedule. See the [syllabus](../syllabus.md) for where Module 4 goes next.

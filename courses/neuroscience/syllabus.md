# Neuroscience — Syllabus

> Life Sciences · Tier 2 · ~21 lessons · Prereqs: [molecular-cell-biology](../molecular-cell-biology/syllabus.md) · Roadmap id: `neuroscience`

## Goal

Understand how the brain computes — from a single ion channel to a decision. You will be able to derive why a neuron sits at −65 mV, how it fires and propagates a spike, how synapses transmit and adapt, how sensory and motor systems encode the world, and how plasticity stores memory. It deliberately skips clinical-neurology depth and heavy computational-neuroscience modeling — diseases and methods get a taste, not a residency.

## Dangerous Checklist

When you finish, you can:

- [ ] Compute a Nernst equilibrium potential and a Goldman resting potential from ion concentrations, and predict how a concentration change shifts them
- [ ] Explain the action potential mechanistically — which channels open when, and why it is all-or-none and one-directional
- [ ] Sketch and interpret the Hodgkin–Huxley equations, naming what each gating variable does
- [ ] Estimate how far a passive signal spreads and why myelination speeds conduction, using length and time constants
- [ ] Trace the chemical synapse from vesicle release to postsynaptic response, and distinguish ionotropic from metabotropic action
- [ ] Predict whether a train of EPSPs reaches threshold via spatial and temporal summation
- [ ] Explain how developing axons find their targets and how activity refines wiring
- [ ] Read a center-surround receptive field and say what feature it detects
- [ ] Describe how vision, audition, and touch transduce physical energy into spike codes, and what a rate vs. timing code buys you
- [ ] Follow a motor command from cortex to muscle and explain the roles of cerebellum and basal ganglia in correcting it
- [ ] Explain LTP/LTD and why the NMDA receptor is a coincidence detector, and relate it to spike-timing-dependent plasticity
- [ ] Match a memory type to its brain system, and name the core lesion evidence

## Modules

### Module 1: The neuron & the action potential

Build the neuron from the membrane up: how a voltage arises, becomes a spike, and travels.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The neuron as a device | Name the parts and the signaling logic that make a neuron a computing unit | soma/dendrite/axon, input–integrate–output, ion gradients, membrane as capacitor |
| 1.2 | The resting membrane potential | Derive V_rest from ion gradients and predict its shifts | Nernst equation, Goldman–Hodgkin–Katz, K⁺ dominance, Na⁺/K⁺ pump |
| 1.3 | The action potential | Explain the spike as a channel dance that is all-or-none and refractory | voltage-gated Na⁺/K⁺ channels, threshold, depolarize–repolarize, refractory period |
| 1.4 | The Hodgkin–Huxley model | Read the HH equations and say what each gating variable does | m/h/n gates, conductances, the current-balance equation, why it fits |
| 1.5 | Cable theory & conduction | Estimate passive spread and explain saltatory conduction | length & time constants, passive decay, myelin, nodes of Ranvier, velocity |

**Boss problem 1:** Given intracellular/extracellular concentrations for K⁺, Na⁺, and Cl⁻ and relative permeabilities $P_K:P_{Na}:P_{Cl}=1:0.04:0.45$, compute each Nernst potential and the Goldman resting potential at 37 °C. Then extracellular K⁺ is doubled: recompute $V_{rest}$, state which direction it moves, and explain in one sentence whether this makes the neuron more or less excitable and why.

### Module 2: Synapses, wiring & circuits

How neurons talk, how they get wired to the right partners, and what simple circuits compute.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Chemical synaptic transmission | Trace release from Ca²⁺ influx to postsynaptic current | vesicles, Ca²⁺ trigger, quantal release, reuptake, synaptic delay |
| 2.2 | Neurotransmitters & receptors | Distinguish fast ionotropic from slow metabotropic signaling | glutamate/GABA, AMPA/NMDA, GPCRs, second messengers, E/I balance |
| 2.3 | Synaptic integration | Predict whether combined inputs reach threshold | EPSP/IPSP, spatial & temporal summation, τ, dendritic computation |
| 2.4 | Electrical synapses | Say when gap junctions beat chemical synapses | connexons, bidirectional/fast coupling, synchronization |
| 2.5 | Neural development & wiring | Explain how an axon finds its target and how activity refines it | growth cones, guidance cues, chemoaffinity, activity-dependent pruning |
| 2.6 | Circuit motifs & computation | Recognize what feedforward/feedback inhibition and gain control buy a circuit | E/I motifs, lateral inhibition, gain, recurrent loops (a taste) |

**Boss problem 2:** A neuron has resting potential −65 mV, threshold −50 mV, and membrane time constant $\tau = 15$ ms. A single excitatory input produces a 4 mV EPSP that decays as $\Delta V(t)=4\,e^{-t/\tau}$ mV. One presynaptic axon fires a regular train at 100 Hz. Assuming EPSPs sum linearly and the cell does not fire, estimate the steady-state depolarization and state whether the cell crosses threshold. Then explain in one sentence how a feedforward-inhibitory interneuron arriving 2 ms later could veto the spike.

### Module 3: Sensory & motor systems

How the brain turns physical energy into codes, and codes back into movement.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Transduction & neural coding | Compare rate vs. timing codes and read a receptive field | sensory transduction, rate/temporal/population codes, receptive fields, adaptation |
| 3.2 | Vision | Trace light from retina to cortex and explain edge detection | photoreceptors, center-surround, ON/OFF, retinotopy, V1 orientation |
| 3.3 | Audition & somatosensation | Explain frequency and body maps and mechanotransduction | cochlea/tonotopy, hair cells, mechanoreceptors, somatotopic maps |
| 3.4 | Motor systems | Follow a command from cortex to muscle | motor units, spinal reflex arcs, corticospinal tract, recruitment |
| 3.5 | Motor control & correction | Explain how cerebellum and basal ganglia shape movement | feedback vs. feedforward control, cerebellar learning, action selection |

**Boss problem 3:** A retinal ganglion cell has an ON-center/OFF-surround receptive field: center weight +2 (radius 1 unit), surround weight −1 (annulus, total weight −2). A bright edge covers exactly half the field (all of one side). Compute the cell's response and compare it to the response under uniform full-field illumination; explain in one sentence why this circuit "detects edges" and ignores flat light. Then, given a reflex arc with 1.0 m total conduction path and axon conduction velocity 60 m/s, estimate the minimum reflex latency (ignore synaptic delay), and say why myelination matters here.

### Module 4: Learning, memory & cognition

How experience rewires synapses to store memory — plus a taste of cognition, disease, and methods.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Synaptic plasticity: LTP & LTD | Explain why the NMDA receptor is a coincidence detector | Hebbian rule, NMDA Mg²⁺ block, Ca²⁺ threshold, AMPA trafficking, STDP |
| 4.2 | Memory systems | Match a memory type to its brain system | declarative vs. procedural, hippocampus, H.M., consolidation |
| 4.3 | Attention & decision-making | Describe how the brain selects and commits (a taste) | selective attention, evidence accumulation, drift-diffusion intuition |
| 4.4 | Disease, a taste | Connect a symptom to a broken mechanism | Parkinson's (dopamine), epilepsy (E/I), depression/schizophrenia sketch |
| 4.5 | Methods, a taste | Match a question to the tool that answers it | patch clamp, EEG/fMRI, optogenetics, calcium imaging, connectomics |

**Boss problem 4:** The NMDA receptor passes current only when glutamate is bound AND the membrane is depolarized enough to expel the Mg²⁺ block. Using this, explain why a plasticity protocol that pairs a weak presynaptic input with a strong postsynaptic depolarization induces LTP, while the presynaptic input alone does not. Then sketch the spike-timing-dependent plasticity rule: state what happens when the presynaptic spike precedes the postsynaptic spike by a few ms vs. the reverse, and tie each case back to NMDA-receptor Ca²⁺ influx.

## Sources of truth

- Kandel et al., *Principles of Neural Science* — canonical terminology and rigor level
- Purves et al., *Neuroscience* — systems and development framing
- Bear, Connors & Paradiso, *Neuroscience: Exploring the Brain* — intuition-first explanations
- Dayan & Abbott, *Theoretical Neuroscience* — for the Hodgkin–Huxley model and neural coding

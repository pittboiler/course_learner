# Quantum Computing · Lesson 6.3: Sampling, advantage, and verification

> ⏱ ~15 min · Module 6: Complexity and the real machine · Builds on: [6.1 (BQP and the complexity landscape)](06-01-bqp-and-the-complexity-landscape.md), [1.4 (two qubits and entanglement)](01-04-two-qubits-tensor-products-and-entanglement.md) · Unlocks: [6.4 (variational algorithms)](06-04-variational-algorithms-vqe-and-qaoa.md)

## Why this matters

In 2019 Google announced "quantum supremacy." The claim made front pages, and it has been contested, narrowed, and recomputed ever since. Understanding exactly what was and was not shown is the best available exercise in reading a quantum computing result critically — which is the skill this module exists to install.

The short version. The experiments are real and the physics is impressive. What they demonstrate is that a quantum device can **sample from a probability distribution** that appears hard to sample classically. What they do not demonstrate is that the samples are useful, that the claim can be verified without doing the classical computation it says is impossible, or that the advantage survives a better classical algorithm. On the last point the record is poor: **every claimed runtime advantage has been substantially reduced by subsequent classical work.**

Two ideas make this a lesson rather than a news summary. First, **sampling is a different kind of task** from deciding or computing, and it admits complexity-theoretic hardness arguments that decision problems do not. Second, **verification is the binding constraint**: the only known way to check these experiments is to simulate them classically, which is circular.

## The idea

The task is deliberately useless, and that is the point. Build a random circuit on $n$ qubits with $d$ layers of random gates, run it, and measure all $n$ qubits. Repeat a few million times. You now hold samples from the output distribution of that circuit.

Why is this hard classically? Because computing even a single output probability requires summing over $2^n$ paths ([6.1](06-01-bqp-and-the-complexity-landscape.md) P2), and there is complexity-theoretic evidence — not proof — that *approximately sampling* from such a distribution is hard for classical machines. Specifically, an efficient classical sampler would collapse parts of the polynomial hierarchy, which nobody believes.

Why was the task chosen to be useless? Because it maximizes the hardness per unit of quantum resource. Sampling problems have hardness arguments that decision problems lack, and random circuits are the least structured thing you can run, so there is nothing for a clever classical algorithm to exploit. **It is an experiment designed to be hard, not an experiment designed to be useful.**

Then comes the difficulty that dominates everything. How do you know the device did it right? A noisy device samples from *some* distribution, and you must check it is close to the intended one. The standard tool is **cross-entropy benchmarking**: compare how often the observed samples land on high-probability outcomes, where "high-probability" is determined by **classically simulating the circuit.** So verification requires the simulation that the experiment claims is infeasible. In the 2019 experiment the fidelity was about 0.002 — the device produced the intended distribution two times in a thousand, with noise the rest — and even establishing that number needed enormous classical effort on smaller instances plus extrapolation.

## The formal version

> **Random circuit sampling (RCS).** Draw a circuit $C$ at random from a fixed distribution (typically alternating layers of random two-qubit gates on a planar grid). The task is to output samples from a distribution $q$ with $\lVert q - p_C\rVert$ small, where $p_C(x) = \lvert\langle x\vert C\vert0^n\rangle\rvert^2$.

> **The hardness evidence.** Exactly computing $p_C(x)$ is $\#\mathrm{P}$-hard. Under plausible conjectures, approximately sampling from $p_C$ in classical polynomial time would imply $\mathrm{P}^{\#\mathrm{P}} = \mathrm{BPP}^{\mathrm{NP}}$, collapsing the polynomial hierarchy.

In words: the hardness is conditional, resting on a conjecture about *average-case* hardness of these amplitudes that is weaker than the worst-case result. It is respectable evidence, not a theorem about the experiment.

> **Cross-entropy benchmarking (XEB).** With samples $x_1,\dots,x_S$ from the device,
> $$\mathcal F_{\text{XEB}} = 2^n\left\langle p_C(x_i)\right\rangle - 1,$$
> which is 0 for uniform output and 1 for perfect sampling from $p_C$. Computing it requires the classical amplitudes $p_C(x_i)$.

> **The verification problem.** XEB is the only practical fidelity estimator for RCS, and it needs classical simulation of the circuit. So the experiment is verifiable exactly in the regime where it is classically simulable — and unverifiable in the regime where it claims advantage.

In words: there is no efficiently verifiable quantum advantage demonstration of this kind. Some of the field's most interesting recent work is on finding tasks that are both hard and checkable, with certified randomness generation the leading candidate.

Now the record, which is the part worth memorizing — and the questions to ask of any such claim are on the card as [the claim-auditing checklist](../reference.md#the-claim-auditing-checklist):

| experiment | claim | subsequent classical work |
|---|---|---|
| Google 2019, 53 qubits | 10,000 years classically | 2.5 days (IBM, tensor-network + disk) |
| same, fidelity 0.002 | — | hours to days (Pan–Zhang 2021, tensor contraction) |
| USTC Jiuzhang 2020, photonic | astronomically large advantage | narrowed substantially by improved classical samplers |
| USTC Zuchongzhi 2021, 60 qubits | harder instance | partially spoofed |
| Google 2023, 70 qubits | 47 years classically | contested |

> **The pattern.** Classical simulation algorithms — tensor-network contraction exploiting the circuit's limited entanglement, plus clever use of disk and the device's own low fidelity — have improved faster than the quantum hardware, repeatedly. The devices remain impressive; the *runtime advantages* have not held.

One clarification about what the classical spoofs exploit:

> **Low fidelity is a classical opening.** A device sampling at fidelity $\mathcal F = 0.002$ is producing the target distribution 0.2 percent of the time and noise otherwise. A classical algorithm need only match that fidelity, not simulate perfectly — and matching a nearly-noise distribution is far easier. Several spoofing results turn on exactly this.

## Picture

![A table of five advantage experiments with three columns: the experiment, the claim, and the classical rebuttal. Google's 2019 53-qubit run claimed 10,000 years classically and was answered with 2.5 days by IBM using a tensor network; the same run's fidelity of 0.002 was answered with hours to days by Pan and Zhang in 2021; the USTC Jiuzhang photonic experiment of 2020 claimed a factor of ten to the twenty-fourth and was narrowed by better algorithms; USTC's 2021 60-qubit Zuchongzhi run was partially spoofed; and Google's 2023 70-qubit run claiming 47 years is contested. Below, a list of what a sampling experiment shows in green — that the device produces samples from a distribution no classical computer can efficiently reproduce, probably — and what it does not show in red: that the samples are useful, that the result can be verified without classical simulation, or that the advantage survives better classical algorithms. A side note explains the verification problem: cross-entropy benchmarking estimates fidelity by comparing observed samples to simulated amplitudes, so verifying the claim needs the very simulation it claims is impossible.](assets/06-03-fig1.svg)

The right-hand note is the intellectual heart of the lesson. **A demonstration whose verification requires the thing it claims to be impossible is epistemically awkward**, and recognizing that structure is worth more than any of the individual numbers in the table.

## Worked examples

**Example 1 — why low fidelity makes the classical side's job easier.**

Suppose a device samples with XEB fidelity $\mathcal F$. A reasonable model of its output is

$$q = \mathcal F\,p_C + (1-\mathcal F)\,u,$$

where $u$ is the uniform distribution — the device gets it right a fraction $\mathcal F$ of the time and produces noise otherwise.

Now consider a classical spoofer. It does not need to reproduce $p_C$; it needs to produce *any* distribution with the same XEB score. One cheap strategy: simulate a **truncated** version of the circuit — drop some gates, or contract the tensor network approximately — obtaining an approximation $\tilde p$ with $\lVert\tilde p - p_C\rVert$ moderate, then output samples from

$$\tilde q = \tilde{\mathcal F}\,\tilde p + (1-\tilde{\mathcal F})\,u.$$

The cost of computing $\tilde p$ falls steeply as the allowed error grows, so matching $\mathcal F = 0.002$ is *hundreds of times* cheaper than simulating faithfully.

Put concretely for the 2019 experiment:

| task | classical cost |
|---|---|
| exact simulation of the 53-qubit, 20-cycle circuit | the original 10,000-year figure |
| simulation to fidelity 0.002 | days, then hours, as algorithms improved |

**The device's own imperfection lowered the bar it set.** This is the single most important asymmetry in reading advantage claims: a fidelity of 0.002 sounds like a detail and is actually most of the argument. It also means the advantage is not monotone in device quality — a *better* device would be harder to spoof, which is why later experiments emphasized fidelity as much as qubit count.

**Example 2 — what would count as a real, useful advantage.**

Set out the criteria explicitly, since this is the checklist to apply to any future claim.

| criterion | RCS 2019 | what a real advantage needs |
|---|---|---|
| Hard for classical computers | conjecturally yes, narrowed in practice | yes, with margin that survives algorithmic progress |
| **Verifiable** without classical simulation | **no** | yes |
| **Useful** — answers a question someone asked | **no** | yes |
| Robust to noise | fidelity 0.002 sufficed | typically needs error correction |

Nothing currently demonstrated meets all four. Two directions are genuinely promising:

*Certified randomness.* RCS can be turned into a protocol producing bits certified to be random, verifiable by a client with modest classical resources under cryptographic assumptions. This ticks "verifiable" and "useful" — randomness has customers — and is the nearest thing to a useful application of sampling advantage. A version has been demonstrated.

*Simulation of a physical system.* [6.2](06-02-hamiltonian-simulation.md) is hard classically, verifiable in some cases by comparison with experiment or with a different method, and genuinely wanted. The catch is that it needs error correction and therefore the machines of [5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md).

And it is worth naming the honest counterweight to all the skepticism: **the experiments did something no classical device has matched cheaply, and they did it repeatedly at increasing scale.** The 2019 device really does produce, in seconds, samples that took the world's best classical effort days to match — and matching required specialized algorithms, supercomputers, and years of work. That is a meaningful scientific result about controllable quantum systems. It is simply not a computation, and the gap between "meaningful physics" and "useful computation" is where most of the public confusion lives.

## Watch out

- You might think "quantum supremacy" means quantum computers beat classical ones at something useful. It means a specific sampling task was performed faster than the best-known classical method at the time. **Both qualifiers matter**, and the second has failed repeatedly.
- You might think the classical rebuttals disprove the hardness conjecture. They do not: they show the *constant factors and the fidelity allowance* left far more room than claimed. The asymptotic conjecture that RCS is classically hard remains plausible and untouched.
- You might think a higher qubit count automatically means a stronger claim. Fidelity matters at least as much, since low fidelity is what spoofers exploit (Example 1). A 70-qubit run at fidelity $10^{-3}$ may be easier to match than a 53-qubit run at fidelity $10^{-1}$.
- You might think the verification problem is a technicality that better engineering will fix. It is structural: XEB needs amplitudes, amplitudes need simulation. Escaping it requires a *different task* — one with an efficiently checkable answer — which is why certified randomness and interactive proof protocols are the active research direction rather than bigger random circuits.

## One-liner

> These experiments sample from a distribution nobody can cheaply reproduce, compute nothing anyone wanted, and can only be verified by the classical simulation they claim is impossible.

## Problems

**P1 (🟢)** Explain in your own words why the cross-entropy benchmarking fidelity cannot be computed without classical simulation of the circuit, and state the consequence for verifying an advantage claim. Then explain what "fidelity 0.002" means operationally about the device's output.

**P2 (🟡)** A device samples with XEB fidelity $\mathcal F$, so its output is modelled as $q = \mathcal F p_C + (1-\mathcal F)u$. (a) Explain why a classical spoofer only needs to match $\mathcal F$, not simulate $p_C$ faithfully. (b) Explain qualitatively why the classical cost of approximating $p_C$ falls as the allowed error grows, referring to tensor-network truncation. (c) State which direction a device should improve to make spoofing harder, and why that is the opposite of what a naive reading of the claim would suggest.

**P3 (🔴, optional)** Evaluate a hypothetical claim. A company announces that its 200-qubit device sampled from a random circuit's output distribution in 4 minutes, and that the best classical method would take 3 million years. The device's reported XEB fidelity is $5\times10^{-4}$. (a) List the four questions you would ask before accepting the claim as a demonstration of useful quantum advantage. (b) Explain which single reported number most undermines the "3 million years" figure, and why. (c) Describe what modification to the experiment would make the result verifiable, and name one task that would make it useful.

<details>
<summary>Solutions</summary>

**P1** *Why XEB needs simulation.* The formula is

$$\mathcal F_{\text{XEB}} = 2^n\left\langle p_C(x_i)\right\rangle - 1,$$

an average of the **ideal** output probabilities $p_C(x_i) = \lvert\langle x_i\vert C\vert0^n\rangle\rvert^2$ evaluated at the samples the device produced. Those ideal probabilities are not observable — they are properties of the intended circuit, obtainable only by computing the amplitude $\langle x_i\vert C\vert0^n\rangle$, which is precisely the classical simulation task in question.

*The consequence.* Verification is possible only where simulation is possible. In the advantage regime the fidelity is estimated by simulating *smaller* circuits, fitting a model of per-gate error, and extrapolating. That extrapolation is a modelling assumption, not a measurement, and it is where a determined critic focuses.

*What fidelity 0.002 means.* The device's output distribution is, to a good approximation, 0.2 percent the intended distribution and 99.8 percent uniform noise. Out of every thousand samples, roughly two carry the quantum signal. The signal is detectable because it biases the average of $p_C$ measurably above the uniform baseline, but the device is overwhelmingly producing garbage.

**P2**

(a) XEB is the only accepted score, and it is a single scalar. A spoofer that produces *any* distribution scoring $\mathcal F$ on XEB has matched the experiment by the experiment's own measure. It need not reproduce $p_C$ pointwise, need not get the high-probability outcomes right in detail, and need not be close to $p_C$ in total variation distance — it only needs the average of $p_C$ over its samples to come out right. That is a much weaker requirement, and weaker requirements are cheaper.

(b) A tensor-network simulation contracts the circuit's tensors, and the cost is set by the **bond dimension** — how much entanglement is retained across the contraction cuts. Truncating small Schmidt coefficients reduces the bond dimension, cutting cost steeply (often polynomially in the bond dimension, which itself can be reduced a lot for a small error), at the price of an approximate amplitude. Since the required accuracy is set by the target fidelity, and the target fidelity is $10^{-3}$ rather than 1, the permissible truncation is aggressive. This is the same "low-entanglement states are classically simulable" mechanism noted in [1.4](01-04-two-qubits-tensor-products-and-entanglement.md).

(c) **Improve fidelity**, not qubit count. A device at fidelity 0.5 forces the classical side to simulate accurately, which is exponentially more expensive than matching 0.002. The naive reading — "more qubits means a stronger claim" — is wrong because the classical cost of *approximate* simulation at low fidelity does not grow the way exact simulation does. The right summary is that the hardness of spoofing depends on $n$, depth, **and** $\mathcal F$ jointly, and the field's own emphasis shifted toward fidelity for exactly this reason.

**P3**

(a) The four questions:

1. **Is the task hard, with margin?** What is the best classical algorithm's cost *today*, computed by a party with an incentive to find a faster one? The 3-million-year figure should be read as "the cost of the classical method we happened to consider," and history says it falls.
2. **Is the result verifiable?** How was the fidelity established — measured directly, or extrapolated from smaller circuits via an error model? If extrapolated, the claim rests on the model.
3. **Is it useful?** Does anyone want samples from this distribution? For random circuit sampling the answer is no, unless it is wrapped in a certified-randomness protocol.
4. **Is the comparison fair?** Was the classical baseline given comparable engineering effort, memory, and hardware budget? Early comparisons pitted a purpose-built quantum device against a straightforward classical algorithm.

(b) **The fidelity, $5\times10^{-4}$.** It means the device produces the intended distribution about one time in two thousand. A classical spoofer therefore needs only to reach that fidelity, and as Example 1 and P2 establish, approximating to fidelity $5\times10^{-4}$ is dramatically cheaper than exact simulation — typically by many orders of magnitude. The "3 million years" figure almost certainly describes the cost of *exact* simulation, which is not the task the device performed. This single number is the standard reason such figures collapse.

(c) *Making it verifiable.* Replace the bare sampling task with an **interactive protocol** that has an efficiently checkable output. The leading construction is certified randomness: the client sends a cryptographically generated challenge circuit, the device returns samples fast enough to rule out classical simulation, and the client verifies a small number of them and applies a cryptographic argument to certify entropy. Verification cost is modest and the guarantee is meaningful. Alternatively, use an interactive proof protocol based on a trapdoor claw-free function, which allows a fully classical client to verify quantumness.

*Making it useful.* Two candidates. **Certified randomness** itself has customers — lotteries, cryptographic key generation, public randomness beacons — and the certification is exactly what a classical source cannot provide. Or move to **Hamiltonian simulation** ([6.2](06-02-hamiltonian-simulation.md)): compute a dynamical quantity for a molecule or lattice model that classical methods cannot reach, verifiable against experiment or against a different classical approximation in overlapping regimes. That is the direction with real customers, and it needs error correction ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)) rather than more raw qubits.

</details>

## Connections

- **Backward:** the hardness of computing amplitudes is the path-sum argument of [6.1](06-01-bqp-and-the-complexity-landscape.md) P2; the reason tensor networks can spoof low-fidelity output is that limited entanglement makes states classically representable, which is the Schmidt-rank observation of [1.4](01-04-two-qubits-tensor-products-and-entanglement.md). Shot-noise limits on estimating XEB are [1.3](01-03-measurement-and-the-born-rule.md).
- **Forward:** [6.4](06-04-variational-algorithms-vqe-and-qaoa.md) is the other thing NISQ devices are asked to do, and it faces a different pair of obstacles. [6.6](06-06-resource-estimation-and-the-state-of-the-field.md) puts these experiments on the same axis as the fault-tolerant estimates and shows how far apart they are.
- **Sideways:** cross-entropy is the Kullback–Leibler-style score of [`information-theory` 1.4](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md), and the whole verification difficulty is an instance of the general problem of checking a computation you cannot repeat — the motivation for interactive proofs and delegated computation in [`computational-complexity`](../../computational-complexity/syllabus.md).

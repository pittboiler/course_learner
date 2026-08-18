# Quantum Optics & Photonics · Lesson 4.1: The quantum beam splitter & Hong–Ou–Mandel

> ⏱ ~15 min · Module 4: Cavity QED, entanglement & applications · Builds on: [3.6 Single-photon sources & photodetection](03-06-single-photon-sources-photodetection.md), [2.4 Hanbury Brown–Twiss](02-04-hanbury-brown-twiss.md) · Unlocks: [4.2 Cavity QED & the Jaynes–Cummings model](04-02-cavity-qed-jaynes-cummings.md)

## Why this matters

A half-silvered mirror is the simplest optical component there is — and when you feed it *single photons* instead of laser beams, it becomes the beating heart of photonic quantum technology. Send one photon in and it creates a **path superposition**: a photon that is genuinely "both ways at once," the raw material of a qubit. Send *two* identical photons in, one from each side, and something with no classical explanation happens — they refuse to come out separately. This effect, the **Hong–Ou–Mandel (HOM) dip**, is how every lab on earth measures whether two photons are truly identical, and it's the interference at the core of linear-optical quantum gates, Bell-state measurements, and photonic entanglement. If HBT ([2.4](02-04-hanbury-brown-twiss.md)) was one detector watching intensity correlations, HOM is what happens *inside* the interferometer, at the amplitude level.

## The idea

Think of a 50:50 beam splitter (BS) as a fair coin for light: each photon that arrives either passes straight through (**transmit**) or bounces off (**reflect**), 50/50. For *one* photon that's the whole story — except quantum mechanics forbids you from saying *which* happened. The photon exits in a superposition of both output paths. That superposition is a path qubit.

Now the twist. Put one photon into **each** input port and ask: how often does one photon come out each side (a *coincidence*)? Classically you'd reason: there are two ways to get a coincidence — **both photons transmit**, or **both photons reflect** — each with probability $\tfrac12\times\tfrac12=\tfrac14$, so coincidences happen $\tfrac12$ the time. But photons are amplitudes, not marbles. If the two photons are *truly indistinguishable* — same color, same arrival time, same polarization, same spatial mode — then "both transmit" and "both reflect" are two routes to the **exact same final state**, and you must add their *amplitudes* before squaring. Those two amplitudes turn out to have opposite signs. They cancel. Coincidences drop to **zero**: the photons always leave together, in a bunch, out one side or the other. Make them distinguishable again — delay one, or rotate its polarization — and the interference washes out, coincidences climb back to $\tfrac12$. That rise-and-fall as you scan the delay is the HOM dip.

## The formal version

**The beam splitter as a unitary.** A BS takes two input modes with annihilation operators $\hat a$ (port 1) and $\hat b$ (port 2) and produces two output modes $\hat c,\hat d$. For a lossless 50:50 splitter we adopt the (real, symmetric) convention

$$\hat c = \tfrac{1}{\sqrt2}(\hat a + \hat b), \qquad \hat d = \tfrac{1}{\sqrt2}(\hat a - \hat b).$$

*In words: each output is an equal blend of the two inputs; the minus sign in $\hat d$ is the phase flip that reflection off one face costs.* This must be **unitary** — it has to preserve the commutators so the outputs are still legitimate photon modes. Check: $[\hat c,\hat c^\dagger]=\tfrac12([\hat a,\hat a^\dagger]+[\hat b,\hat b^\dagger])=\tfrac12(1+1)=1$, and $[\hat c,\hat d^\dagger]=\tfrac12([\hat a,\hat a^\dagger]-[\hat b,\hat b^\dagger])=\tfrac12(1-1)=0$ ✓. Inverting the relations gives the rule we actually use, which sends **input creation operators** to output ones:

$$\hat a^\dagger \to \tfrac{1}{\sqrt2}(\hat c^\dagger + \hat d^\dagger), \qquad \hat b^\dagger \to \tfrac{1}{\sqrt2}(\hat c^\dagger - \hat d^\dagger).$$

Here $\hat a^\dagger$ creates a photon in port $a$, and so on. Since the vacuum $|0\rangle$ is unchanged by the BS, we transform any input state by writing it with creation operators on $|0\rangle$ and substituting.

**One photon in.** A single photon in port $a$ is $|1\rangle_a|0\rangle_b=\hat a^\dagger|0\rangle$. Substitute:

$$\hat a^\dagger|0\rangle \;\to\; \tfrac{1}{\sqrt2}(\hat c^\dagger+\hat d^\dagger)|0\rangle = \tfrac{1}{\sqrt2}\big(|1\rangle_c|0\rangle_d + |0\rangle_c|1\rangle_d\big).$$

*In words: the photon goes one way or the other with equal amplitude — never splitting in half — an equal superposition of the two output paths.* This is the path qubit: measure and you find it in $c$ or $d$ with probability $\tfrac12$ each, but until you do it is genuinely both.

**Two photons in — Hong–Ou–Mandel.** Now one photon in *each* port: $|1\rangle_a|1\rangle_b=\hat a^\dagger \hat b^\dagger|0\rangle$. Substitute both operators and expand, remembering $\hat c^\dagger$ and $\hat d^\dagger$ commute:

$$\hat a^\dagger \hat b^\dagger \;\to\; \tfrac12(\hat c^\dagger+\hat d^\dagger)(\hat c^\dagger-\hat d^\dagger) = \tfrac12\big(\hat c^{\dagger 2} - \hat c^\dagger\hat d^\dagger + \hat d^\dagger\hat c^\dagger - \hat d^{\dagger 2}\big) = \tfrac12\big(\hat c^{\dagger 2} - \hat d^{\dagger 2}\big).$$

The two cross terms — $-\hat c^\dagger\hat d^\dagger$ and $+\hat d^\dagger\hat c^\dagger$ — are **exactly the coincidence amplitudes** (one photon in $c$, one in $d$), and they **cancel**. Using $\hat c^{\dagger 2}|0\rangle=\sqrt2\,|2\rangle_c$:

$$|1\rangle_a|1\rangle_b \;\to\; \tfrac{1}{\sqrt2}\big(|2\rangle_c|0\rangle_d - |0\rangle_c|2\rangle_d\big).$$

*In words: both photons always exit the same port — either both into $c$ or both into $d$ — never one each.* The probability of a coincidence is zero. This is **photon bunching by two-photon interference**: the "both-transmit" and "both-reflect" paths destructively interfere.

**The dip and visibility.** In practice you scan a relative delay $\tau$ between the two photons. At $\tau=0$ they are indistinguishable and coincidences vanish; as $|\tau|$ grows past the photon coherence time they become distinguishable and the coincidence rate returns to its classical $\tfrac12$. The resulting dip in coincidences-vs-$\tau$ is the HOM dip, and its **depth measures indistinguishability**: a dip all the way to zero means perfectly identical photons. Quantitatively, if the two photons' internal states (temporal/spectral/polarization profile) overlap with amplitude $v=|\langle\phi_a|\phi_b\rangle|$, the coincidence probability is $P_\text{cc}=\tfrac12(1-v^2)$ — a dip of **visibility** $v^2$ (Problem 3).

## Picture

![Top: two indistinguishable photons enter a 50:50 beam splitter; the both-transmit and both-reflect coincidence amplitudes cancel, leaving the bunched output ½(|2,0⟩−|0,2⟩). Bottom: the Hong–Ou–Mandel coincidence rate dips to zero at zero delay τ and returns to ½ for large delay.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — one photon, where does it go?).** Feed $|1\rangle_a|0\rangle_b$ into the BS. From the rule, the output is $\tfrac{1}{\sqrt2}(|1\rangle_c|0\rangle_d+|0\rangle_c|1\rangle_d)$. A detector on port $c$ fires with probability $|\tfrac{1}{\sqrt2}|^2=\tfrac12$; likewise port $d$. The two never fire together — there is only one photon. Notice the *symmetric* convention put no relative phase on the single-photon superposition; a photon from port $b$ instead gives $\tfrac{1}{\sqrt2}(|1\rangle_c|0\rangle_d-|0\rangle_c|1\rangle_d)$, the orthogonal path qubit. That relative sign is the entire resource a Mach–Zehnder interferometer exploits.

**Example 2 (why you'd care — reading a source's purity off the dip).** You build a single-photon source ([3.6](03-06-single-photon-sources-photodetection.md)) and want to know if successive photons are truly identical — a prerequisite for using them in a photonic quantum computer. Split the source's output into two paths, delay one by $\tau$, and recombine them on a BS while counting coincidences. Sweep $\tau$. If you see coincidences fall to zero at $\tau=0$, the photons are perfectly indistinguishable ($v=1$). If the dip only reaches, say, $0.35$ of the $\tfrac12$ baseline — i.e. $P_\text{cc}(0)=0.325$ — then $\tfrac12(1-v^2)=0.325\Rightarrow v^2=0.35$, so the photons are only $\sqrt{0.35}\approx0.59$ indistinguishable in amplitude. The HOM dip is a direct, calibration-free ruler for photon quality, which is why it appears in essentially every single-photon-source paper.

## Watch out

- **You might think the photons "collide" or repel.** They don't interact at all — the BS is linear optics, no nonlinearity. The bunching is pure *amplitude interference* between two indistinguishable histories, not a force. Bosons statistically "prefer" the same state, but the mechanism here is the cancelling cross terms, full stop.
- **You might think HOM is just HBT again.** In [2.4](02-04-hanbury-brown-twiss.md) two detectors measured intensity correlations $g^{(2)}$ of *one* beam. HOM interferes two *separate* input photons on a beam splitter — it is a **two-photon amplitude** effect with no classical analog, whereas the HBT bunching of thermal light has a perfectly classical (intensity-fluctuation) explanation.
- **The dip depth is about indistinguishability, not photon number.** A shallow dip does not mean you have fewer photons — it means your two photons differ in color, timing, or polarization. Number purity ($g^{(2)}(0)\approx0$) and indistinguishability (deep HOM dip) are *separate* benchmarks; a good source needs both.
- **Conventions vary.** Some texts put the reflection phase as a factor of $i$ (giving $\hat c=\tfrac{1}{\sqrt2}(\hat a+i\hat b)$). The physics — cancelling coincidences — is identical; only the bookkeeping of signs and $i$'s changes. Pick one and stay consistent, as we do here.

## One-liner

> Feed one identical photon into each side of a 50:50 beam splitter and the "both-transmit" and "both-reflect" amplitudes cancel — coincidences vanish, the photons always exit together, and the depth of that dip measures how identical they are.

## Problems

**P1 (🟢)** A single photon enters port $a$ of a 50:50 beam splitter (our convention), the other port empty. Write the output state, and give the probabilities that (i) detector $c$ clicks, (ii) detector $d$ clicks, (iii) both click.

**P2 (🟡)** Starting from $|1\rangle_a|1\rangle_b=\hat a^\dagger\hat b^\dagger|0\rangle$, carry out the operator substitution explicitly, show the coincidence terms cancel, and state the normalized output state. What is the probability of detecting one photon in each output port?

**P3 (🔴)** *(Boss Problem 4a rehearsal.)* Now the two input photons are only *partially* indistinguishable: each carries an internal profile, with overlap $v=|\langle\phi_a|\phi_b\rangle|$ (so $v=1$ identical, $v=0$ fully distinguishable), $0\le v\le1$. Treating the internal label as an extra tag on the creation operators, show that the coincidence probability is $P_\text{cc}=\tfrac12(1-v^2)$, and identify the dip visibility.

<details>
<summary>Solutions</summary>

**P1** Substitute $\hat a^\dagger\to\tfrac{1}{\sqrt2}(\hat c^\dagger+\hat d^\dagger)$ into $|1\rangle_a|0\rangle_b=\hat a^\dagger|0\rangle$:

$$|\psi_\text{out}\rangle=\tfrac{1}{\sqrt2}(\hat c^\dagger+\hat d^\dagger)|0\rangle=\tfrac{1}{\sqrt2}\big(|1\rangle_c|0\rangle_d+|0\rangle_c|1\rangle_d\big).$$

Probabilities are amplitudes squared: (i) $P(c)=\big|\tfrac{1}{\sqrt2}\big|^2=\tfrac12$; (ii) $P(d)=\tfrac12$; (iii) both click: impossible, $P=0$ — there is only one photon, and the state has no $|1\rangle_c|1\rangle_d$ component. (Check: $\tfrac12+\tfrac12=1$ ✓, the photon is certainly somewhere.)

**P2** Substitute both operators, $\hat a^\dagger\to\tfrac{1}{\sqrt2}(\hat c^\dagger+\hat d^\dagger)$ and $\hat b^\dagger\to\tfrac{1}{\sqrt2}(\hat c^\dagger-\hat d^\dagger)$:

$$\hat a^\dagger\hat b^\dagger|0\rangle\to\tfrac12(\hat c^\dagger+\hat d^\dagger)(\hat c^\dagger-\hat d^\dagger)|0\rangle=\tfrac12\big(\hat c^{\dagger 2}-\hat c^\dagger\hat d^\dagger+\hat d^\dagger\hat c^\dagger-\hat d^{\dagger 2}\big)|0\rangle.$$

Since $[\hat c^\dagger,\hat d^\dagger]=0$, the middle terms $-\hat c^\dagger\hat d^\dagger+\hat d^\dagger\hat c^\dagger=0$ cancel — and those were precisely the amplitudes for one photon in each port. Left with $\tfrac12(\hat c^{\dagger 2}-\hat d^{\dagger 2})|0\rangle$. Using $\hat c^{\dagger 2}|0\rangle=\sqrt{2}\,|2\rangle_c$ (from $\hat c^{\dagger n}|0\rangle=\sqrt{n!}\,|n\rangle$):

$$|\psi_\text{out}\rangle=\tfrac12\big(\sqrt2\,|2\rangle_c|0\rangle_d-\sqrt2\,|0\rangle_c|2\rangle_d\big)=\tfrac{1}{\sqrt2}\big(|2\rangle_c|0\rangle_d-|0\rangle_c|2\rangle_d\big).$$

The probability of one photon in each port (a coincidence) is **zero**: there is no $|1\rangle_c|1\rangle_d$ term. (Check normalization: $\big|\tfrac{1}{\sqrt2}\big|^2+\big|{-}\tfrac{1}{\sqrt2}\big|^2=\tfrac12+\tfrac12=1$ ✓.)

**P3** Tag each creation operator with its internal state; the spatial-mode transformation acts on the port index and leaves the internal profile riding along:

$$\hat a^\dagger_{\phi_a}\to\tfrac{1}{\sqrt2}(\hat c^\dagger_{\phi_a}+\hat d^\dagger_{\phi_a}),\qquad \hat b^\dagger_{\phi_b}\to\tfrac{1}{\sqrt2}(\hat c^\dagger_{\phi_b}-\hat d^\dagger_{\phi_b}).$$

Expand $\hat a^\dagger_{\phi_a}\hat b^\dagger_{\phi_b}|0\rangle$; the coincidence part is the cross terms (one photon in $c$, one in $d$):

$$|\chi\rangle=\tfrac12\big(\hat c^\dagger_{\phi_b}\hat d^\dagger_{\phi_a}-\hat c^\dagger_{\phi_a}\hat d^\dagger_{\phi_b}\big)|0\rangle.$$

Because the profiles differ, the two terms no longer cancel — they are not the same state. Compute $P_\text{cc}=\langle\chi|\chi\rangle$. Photons in different spatial modes ($c$ vs $d$) are orthogonal and their operators commute; within one mode the internal overlap is $\langle\phi_a|\phi_b\rangle=v$ (real, WLOG). The four terms:

$$\langle\chi|\chi\rangle=\tfrac14\Big[\underbrace{\langle\phi_b|\phi_b\rangle\langle\phi_a|\phi_a\rangle}_{1}-\underbrace{\langle\phi_b|\phi_a\rangle\langle\phi_a|\phi_b\rangle}_{v^2}-\underbrace{\langle\phi_a|\phi_b\rangle\langle\phi_b|\phi_a\rangle}_{v^2}+\underbrace{\langle\phi_a|\phi_a\rangle\langle\phi_b|\phi_b\rangle}_{1}\Big]$$

$$=\tfrac14\big(2-2v^2\big)=\tfrac12(1-v^2).$$

So $P_\text{cc}=\tfrac12(1-v^2)$. Limits: $v=1$ (identical) $\Rightarrow P_\text{cc}=0$, the full dip; $v=0$ (distinguishable) $\Rightarrow P_\text{cc}=\tfrac12$, the classical baseline. The dip **visibility** is $\dfrac{P_\text{max}-P_\text{min}}{P_\text{max}}=\dfrac{\tfrac12-\tfrac12(1-v^2)}{\tfrac12}=v^2$. (Check: for the identical case this recovers Problem 2's zero coincidences ✓.)

</details>

## Flashback

**From Lesson 2.3 (Photon statistics & $g^{(2)}$):** The bunched HOM output $\tfrac{1}{\sqrt2}(|2\rangle_c|0\rangle_d-|0\rangle_c|2\rangle_d)$ contains a two-photon Fock state $|2\rangle$. Compute the equal-time second-order coherence $g^{(2)}(0)=\dfrac{\langle\hat n(\hat n-1)\rangle}{\langle\hat n\rangle^2}$ for a single-mode Fock state $|n\rangle$, then evaluate it for $|2\rangle$ and classify the light (bunched, coherent, or antibunched).

<details>
<summary>Solution</summary>

For $|n\rangle$, $\hat n|n\rangle=n|n\rangle$ exactly (no fluctuation), so $\langle\hat n\rangle=n$ and $\langle\hat n(\hat n-1)\rangle=n(n-1)$. Thus

$$g^{(2)}(0)=\frac{n(n-1)}{n^2}=1-\frac{1}{n}.$$

For $|2\rangle$: $g^{(2)}(0)=1-\tfrac12=\tfrac12<1$. Since $g^{(2)}(0)<1$, the light is **antibunched** — a purely nonclassical value (classical fields obey $g^{(2)}(0)\ge1$; coherent light sits at exactly $1$, thermal/bunched at $2$). Sanity check: $|1\rangle$ gives $g^{(2)}(0)=0$, a perfect single photon that can never produce a coincidence, exactly the single-photon-source ideal from [3.6](03-06-single-photon-sources-photodetection.md). ✓

</details>

## Connections

- **Backward:** the whole calculation is bookkeeping with the harmonic-oscillator ladder operators $\hat a^\dagger,\hat c^\dagger$ — the quantized-mode machinery from [3.1 Quantizing the EM field](03-01-quantizing-em-field.md) and the same ladder you met in quantum mechanics. The $g^{(2)}$ flashback ties directly to [2.3 Photon statistics & $g^{(2)}$](02-03-photon-statistics-g2.md) and the HBT setup of [2.4](02-04-hanbury-brown-twiss.md).
- **Forward:** HOM interference is the entangling mechanism in linear-optical quantum computing and Bell-state measurements — the two-photon amplitude cancellation reappears when we build photonic gates in [4.4 Entangled photons & Bell tests](04-04-entangled-photons-bell-tests.md) and the applications survey [4.5](04-05-quantum-information-taste.md). The path-superposition single-photon result is the qubit that quantum information rides on (see the [quantum-computing](../../quantum-computing/syllabus.md) course).
- **Sideways:** the visibility $v^2$ of the dip is the *indistinguishability* of the photons — the same notion of "which-path information erases interference" that governs the double slit and the Mach–Zehnder. Perfect interference requires perfectly erased which-path information, here enforced by making the two photons identical in every degree of freedom.

# Philosophy of Physics · Lesson 1.2: Decoherence and what it does not do

> ⏱ ~15 min · Module 1: The measurement problem · Builds on: [1.1](01-01-the-measurement-problem-as-a-trilemma.md), [`quantum-mechanics` 5.4](../../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md), [`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md) · Unlocks: [1.3](01-03-copenhagen-qbism-and-relational-views.md), [2.1](02-01-bohmian-mechanics.md), [2.3](02-03-many-worlds-branching.md)

## Why this matters

A dust grain of radius $10^{-5}$ cm, floating in room air, loses interference between positions about $10^{-13}$ cm apart within roughly a microsecond: that is Joos and Zeh's 1985 model, as reported in Bacciagaluppi's Stanford Encyclopedia entry on decoherence. [`quantum-mechanics` 5.4](../../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md) draws the moral that "the environment just measures" superpositions for us and leaves a diagonal $\rho$, and [`quantum-computing` 5.1](../../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md) adds that "nothing non-unitary happens in the universe". If both are right, has ordinary physics solved the [measurement problem](../reference.md#measurement-problem) of [1.1](01-01-the-measurement-problem-as-a-trilemma.md)? This lesson computes what decoherence does and finds that it answers one question, which quantity looks definite, and leaves the other, why one value, to the interpretations.

## The idea

A superposition shows interference only if its two versions can be brought back together with nothing anywhere telling them apart. Now let air molecules bounce off a grain that is "here and there". A molecule that hits the grain "here" flies off slightly differently from one that hits it "there", so each version leaves its own record in the air. To make the versions interfere you would now have to line up the records too, every molecule in phase. Nothing has been destroyed. The superposition has spread from the grain into a correlation between grain and air, where no experiment on the grain alone can find it. That spreading is [decoherence](../reference.md#decoherence).

The grain's own state, its [reduced density matrix](../reference.md#reduced-density-matrix), is built by the partial trace of [`quantum-mechanics` 5.4](../../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md) and [`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md); this lesson uses it without rebuilding it. After decoherence it looks exactly like a coin flip. Quantum-computing 2.2 showed that half of an entangled pair and a coin flip have the same density matrix and that nothing done to the half can tell them apart. The question here is whether the same matrix means the same world. Bernard d'Espagnat's terms mark the difference: in a **proper mixture** each member of the ensemble is in one state and we do not know which; an **improper mixture** is the state of a part of an entangled whole, and the whole still contains both ([proper and improper mixtures](../reference.md#proper-and-improper-mixtures)).

Two problems then come apart. Why do objects look definite in position rather than in some superposition of positions? That is the [preferred-basis problem](../reference.md#preferred-basis-problem), and decoherence answers it: air couples to position, so position states are the ones that survive being recorded. Why one position rather than both? That is the [and-or problem](../reference.md#and-or-problem), and decoherence does not touch it.

## The argument

**Conventions.** Spin states $|{\uparrow}\rangle, |{\downarrow}\rangle$, with matrix rows and columns in the order $(\uparrow, \downarrow)$. The system starts in $\alpha|{\uparrow}\rangle + \beta|{\downarrow}\rangle$ with $|\alpha|^2 + |\beta|^2 = 1$, the environment in $|E_0\rangle$. The environment's normalized record states are $|E_\uparrow\rangle, |E_\downarrow\rangle$, with overlap $\eta = \langle E_\uparrow|E_\downarrow\rangle$ (antilinear in the first slot). $\eta = 1$: the records are identical, the environment has learned nothing. $\eta = 0$: perfect records.

**D1 (recording).** The interaction leaves $|{\uparrow}\rangle$ and $|{\downarrow}\rangle$ alone and copies them: $U|{\uparrow}\rangle|E_0\rangle = |{\uparrow}\rangle|E_\uparrow\rangle$, $U|{\downarrow}\rangle|E_0\rangle = |{\downarrow}\rangle|E_\downarrow\rangle$. [Linearity](../reference.md#linear-dynamics), claim (B) of [Maudlin's trilemma](../reference.md#maudlins-trilemma), gives
$$|\Psi\rangle = \alpha|{\uparrow}\rangle|E_\uparrow\rangle + \beta|{\downarrow}\rangle|E_\downarrow\rangle.$$
*In words:* the environment joins 1.1's von Neumann chain, and both terms ride along.

**D2 (the reduced state).** With $\mathrm{Tr}_E(|a\rangle\langle a'| \otimes |e\rangle\langle e'|) = |a\rangle\langle a'|\,\langle e'|e\rangle$ (quantum-mechanics 5.4's rule; quantum-computing 2.2's $\mathrm{tr}_B$ is the same map),
$$\rho_S = \mathrm{Tr}_E\,|\Psi\rangle\langle\Psi| = \begin{pmatrix} |\alpha|^2 & \alpha\beta^*\eta^* \\ \alpha^*\beta\,\eta & |\beta|^2 \end{pmatrix}.$$
The $(\uparrow,\downarrow)$ entry comes from $|{\uparrow}\rangle\langle{\downarrow}| \otimes |E_\uparrow\rangle\langle E_\downarrow|$, which picks up $\langle E_\downarrow|E_\uparrow\rangle = \eta^*$. *In words:* the diagonal (the Born weights) is untouched; the coherence is multiplied by how alike the two records are.

**D3 (records multiply).** If the environment is $N$ fragments, each recording independently, $|E_\uparrow\rangle = \bigotimes_k |e^{(k)}_\uparrow\rangle$ and likewise for $\downarrow$, so $\eta = \prod_{k=1}^{N} \langle e^{(k)}_\uparrow|e^{(k)}_\downarrow\rangle$. One weak record barely dents the coherence; many drive it to zero exponentially. A phase-flip channel with $1-2p$ equal to a fragment's overlap gives the same reduced state ([`quantum-computing` 5.1](../../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md)). *In words:* each scattered molecule is a blurry witness, and blurry witnesses add up.

**D4 (proper and improper; d'Espagnat, *Conceptual Foundations of Quantum Mechanics*, 1971; 2nd ed. 1976).** At $\eta = 0$, $\rho_S = \mathrm{diag}(|\alpha|^2, |\beta|^2)$: the matrix of the proper mixture "$\uparrow$ with probability $|\alpha|^2$, $\downarrow$ with $|\beta|^2$". So $\mathrm{Tr}(\rho_S A)$ is the same in both cases for every observable $A$ on the system alone. But $|\Psi\rangle$ is still pure. *In words:* nothing done to the system alone can tell "one of the two, unknown which" from "part of a whole that contains both".

**D5 (pointer states; Zurek, 1981, 1982).** Inputs $|{\uparrow}\rangle$ and $|{\downarrow}\rangle$ end in product states and stay pure for every $\eta$; every superposition of them becomes entangled and loses purity. The interaction, not an observer, picks the basis in which $\rho_S$ goes diagonal. Zurek named this [einselection](../reference.md#einselection) (environment-induced superselection; review 2003). *In words:* how the environment couples decides which quantity looks definite, which solves the preferred-basis problem.

Now the argument, as the Stanford entry runs it (§2.1) with Bell's terms ("Against 'Measurement'", 1990):

**P1.** Decoherence is derived from (B), linear evolution of system, apparatus and environment together. *In words:* it is a consequence of the Schrödinger equation, not a change to it.

**P2.** So afterwards the global state is still $\alpha|{\uparrow}\rangle|A_\uparrow\rangle|E_\uparrow\rangle + \beta|{\downarrow}\rangle|A_\downarrow\rangle|E_\downarrow\rangle$, with $A$ the apparatus. *In words:* both readings are still in the state.

**P3.** If the wavefunction is complete, claim (A), that state is the whole truth about the world. *In words:* nothing outside it settles which reading occurred.

**P4.** The decohered $\rho_S$ is an improper mixture (D4), so reading it as "$\uparrow$ or $\downarrow$, unknown which" is not licensed by $\rho_S$ while the global state holds both. *In words:* the matrix of a coin flip is not a coin flip. Discussing Gottfried's textbook, Bell granted that dropping the off-diagonal terms is harmless [FAPP](../reference.md#fapp), "for all practical purposes", but said that read without hunting for probabilities, the diagonal state describes terms that coexist, "and", not alternatives, "or"; the habit of treating lost coherence as turning one into the other had always puzzled him.

**P5.** A determinate outcome, claim (C), requires that the world contain one reading, not both. *In words:* "or" is what experience reports.

**∴ C.** Decoherence alone, with (A) and (B), does not deliver (C). It explains why the readings no longer interfere and which readings they are (D5), and leaves the and-or problem. *In words:* every solution has to add something to decoherence, if only a new reading of (C).

What they add: Bohmians ([2.1](02-01-bohmian-mechanics.md)) deny (A) and let decoherence keep empty wave packets away from the occupied one (Bohm, 1952, Part II); Everettians ([2.3](02-03-many-worlds-branching.md)) deny P5 and take the branches decoherence defines as worlds; collapse theories ([2.2](02-02-collapse-theories-grw-and-csl.md)) deny (B) and need decoherence less; the views of [1.3](01-03-copenhagen-qbism-and-relational-views.md) deny that the trilemma is posed correctly. Decoherence is physics all of them use, which is why it cannot choose among them. The sibling lessons' "they are the same object" ([`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md)), "only $\rho$ is physical" (quantum-mechanics 5.4) and "nothing non-unitary happens" (quantum-computing 5.1) are exact as claims about every measurement on the subsystem alone, which is what those lessons need. As claims about the world, the first two would decide the proper-improper question, which their lessons had no need to address, and the third assumes (B), which GRW denies.

**Where the argument is weakest.** P5. The Everettian (Zeh, Saunders, Wallace's *The Emergent Multiverse*, 2012) says each decohered branch contains one determinate reading, so "and" is the right answer: decoherence plus (A) and (B) is already a solution. Strongest objection: branches are defined only FAPP, since $\eta$ never reaches exactly zero and the branch decomposition is approximate, so the ontology inherits the vagueness Bell charged against "measurement"; and a theory on which every outcome occurs owes an account of probability ([2.4](02-04-many-worlds-the-probability-problem.md)). Strongest reply (Wallace, "Everett and Structure", 2003): emergent structure is always approximate, as quasi-particles such as phonons are, and exactness is owed only at the fundamental level, where the axioms are (A) and (B) and mention no measurement. The critic concedes that decoherence fixes branches as well as any emergent structure is fixed; the Everettian concedes that (C) is reinterpreted as determinacy within a branch, not derived as a single outcome.

## The picture

![Three two by two density matrices for the same spin at overlap 1, 0.5 and 0. The diagonal entries 0.20 and 0.80 never change; the off-diagonal entries shrink from 0.40i to 0.20i to zero and purity falls from 1 to 0.76 to 0.68; the last matrix is labelled as the same matrix as a proper mixture, and a band below notes that spin plus environment stays one pure state throughout](assets/01-02-fig1.svg)

As the records sharpen, only the off-diagonal entries move, and the endpoint is a proper mixture's matrix, while the joint state never stops being a superposition.

## Worked examples

**Example 1 (clean case: a spin decoheres).** Take $\alpha = 1/\sqrt5$, $\beta = 2i/\sqrt5$, so $|\alpha|^2 = 1/5$, $|\beta|^2 = 4/5$ and $\alpha\beta^* = -2i/5$. By D2,
$$\rho_S(\eta) = \begin{pmatrix} 1/5 & -\tfrac{2i}{5}\eta^* \\ \tfrac{2i}{5}\eta & 4/5 \end{pmatrix}, \qquad \mathrm{Tr}\,\rho_S^2 = \frac{17 + 8|\eta|^2}{25}.$$

- $\eta = 1$: $\rho_S = |\psi\rangle\langle\psi|$, purity 1. The environment holds no record, and an interference experiment on the spin shows the full superposition.

- $\eta = 0$: $\rho_S = \mathrm{diag}(1/5, 4/5)$, purity $17/25 = 0.68$, the proper mixture's matrix.

- Pointer check: start the spin in $|{\uparrow}\rangle$ instead and $\rho_S = |{\uparrow}\rangle\langle{\uparrow}|$ at every $\eta$. Only superpositions of the recorded basis lose purity.

What follows: every spin measurement now has the statistics of a coin weighted 1/5 to 4/5. What does not: the global state is still $|\Psi\rangle$, with both terms.

**Example 2 (hard case: getting the coherence back).** Let the environment be one qubit, $|E_\uparrow\rangle = |0\rangle$, $|E_\downarrow\rangle = |1\rangle$, so $\eta = 0$ and the interaction is a CNOT. Compare $|\Psi\rangle = \tfrac{1}{\sqrt5}|{\uparrow}\rangle|0\rangle + \tfrac{2i}{\sqrt5}|{\downarrow}\rangle|1\rangle$ with the proper mixture of $|{\uparrow}\rangle|0\rangle$ (weight 1/5) and $|{\downarrow}\rangle|1\rangle$ (weight 4/5). Both give the spin $\mathrm{diag}(1/5, 4/5)$ and the qubit $\mathrm{diag}(1/5, 4/5)$. Now measure the joint observable $\sigma_y \otimes \sigma_x$, using $\sigma_y|{\uparrow}\rangle = i|{\downarrow}\rangle$, $\sigma_y|{\downarrow}\rangle = -i|{\uparrow}\rangle$:
$$\langle\Psi|\sigma_y\otimes\sigma_x|\Psi\rangle = 2\,\mathrm{Im}(\alpha^*\beta) = \tfrac45, \qquad \text{proper mixture: } 0.$$
The $4/5$ is exactly $2|\rho_{\uparrow\downarrow}|$ before decoherence: the coherence that left the spin sits whole in a correlation. Undoing the CNOT returns the spin to $\alpha|{\uparrow}\rangle + \beta|{\downarrow}\rangle$, a routine recoherence in a quantum computer.

Where it strains: replace the qubit by $10^{23}$ air molecules. The joint observable still exists, $|{\uparrow}\rangle\langle{\downarrow}| \otimes |E_\uparrow\rangle\langle E_\downarrow|$ plus its adjoint, but measuring it means controlling every molecule. Decoherence gives no verdict on whether the grain's superposition is "still there". Everett and Bohm say yes: the joint coherence is real, for the Bohmian carried by an empty packet that will never again guide anything. GRW says no: collapses destroy it, so an ideal interference test on a large enough body would come out differently, one reason collapse models are testable. An operationalist says a difference no feasible experiment reveals is no physical difference; realists reply that "feasible" and "possible in principle" are not the same, and the theory itself says the observable exists.

## Watch out

- **You might think** decoherence is collapse, **but actually** it suppresses interference in the subsystem while the global superposition survives. Collapse removes a term; decoherence relocates the coherence.

- **You might think** an improper mixture is a proper one because the matrices match, **but actually** they differ in the global state and in joint statistics (Example 2). Only the proper one licenses "one of these, we don't know which".

- **You might think** that picking the basis picks the outcome, **but actually** einselection says which quantity looks definite (position, $\uparrow$ versus $\downarrow$), not which value obtains.

- **You might think** decoherence derives the Born rule, **but actually** the diagonal entries are $|\alpha|^2$ and $|\beta|^2$ by construction, and reading $\mathrm{Tr}(\rho A)$ as outcome statistics is the [Born rule](../../quantum-mechanics/lessons/01-02-wavefunction-born-rule.md). Derivations from entanglement (Zurek's envariance, 2005) or from decision theory are [2.4](02-04-many-worlds-the-probability-problem.md)'s subject.

## One-liner

> Decoherence moves a superposition's coherence from the system into its correlations with the environment, which fixes which quantity looks definite but leaves the world, by the Schrödinger equation alone, with every outcome still in it.

## Problems

**P1 (🟢)** *(Diagnose: Exegetical (a)–(c).)* An invented column by Emeric Pask in the *Brightling Review* (invented, written for this problem):

> Quantum physics has quietly retired its oddest rule. There is no mysterious collapse: the environment measures the system. Stray photons and air molecules check the needle's position billions of times a second, and by checking they settle which reading is the real one. That is why every needle you have ever seen points at one number. The odds come free as well: once the checking is done, the numbers left on the diagonal of the needle's density matrix simply are the probabilities of each reading.

(a) The column gets one thing right. Say what decoherence does explain about the needle, and name the problem that is. One line.

(b) Name the conflation in the third sentence, quote the words that commit it, and say what the global state contains after the checking. Two sentences.

(c) What does the last sentence assume rather than derive? One line.

**P2 (🟡)** *(Formal model: Formal (a)–(b) · Exegetical (c).)* A spin $\alpha|{\uparrow}\rangle + \beta|{\downarrow}\rangle$ is struck by molecules one at a time. Each collision leaves the molecule in one of two states, depending on the spin, whose overlap is a real number $c$ with $0 < c < 1$; the molecules are independent. After $N$ collisions, $\eta = c^N$.

(a) For $c = 0.9$, find the smallest $N$ for which $|\rho_{\uparrow\downarrow}|$ is below one millionth of its starting value. Show the computation.

(b) Repeat for $c = 0.99$, and say in one line why ten times weaker distinguishability per collision costs about ten times as many collisions.

(c) Say what your numbers show about the spin, and two things they do not show. Two sentences.

**P3 (🔴)** *(Find the crux: Exegetical (a) · Evaluative (b).)* An Everettian (Wallace, *The Emergent Multiverse*, 2012) and a Bohmian (Dürr, Goldstein and Zanghì, 1992) each call decoherence indispensable to their account of a measurement.

(a) What does each need decoherence to do? One line each.

(b) David Deutsch (1996) charged that pilot-wave theories are parallel-universe theories in "chronic denial". Name the single premise on which the two sides divide, and say what argument, not experiment, would move each side. 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Exegetical (a)–(c).)*

**Must hit, strict (a):** decoherence explains why the needle never shows interference between positions, and why position is the quantity that looks definite: the environment couples to position, so position states are the robust pointer states (einselection). That is the preferred-basis problem.

**Must hit, strict (b):**

- The conflation is between selecting a basis (which quantity looks definite) and selecting an outcome (which value obtains): the preferred-basis problem passed off as the and-or problem.

- Words: "by checking they settle which reading is the real one" (accept also "the environment measures the system", which smuggles in that a measurement has a result).

- After the checking, the needle-plus-environment state is still a superposition of every reading, each correlated with its own environmental record; the needle's reduced state is an improper mixture.

**Must hit, strict (c):** the Born rule. The diagonal entries are $|\alpha|^2$ and $|\beta|^2$ by construction, and reading them as probabilities of outcomes presupposes the rule, and, on the column's reading, a single reading for the probability to be about.

**Wrong turns:** answering (b) with "decoherence destroys the superposition", which is a different error and the opposite of the truth; saying the column is wrong that the environment interacts constantly, which it has right; saying in (c) that the probabilities are wrong, when the numbers are right and only their derivation is claimed falsely.

**Model answer:** (a) Why the needle never shows interference between positions and why position is what looks definite: the preferred-basis problem, solved by einselection. (b) It conflates selecting a basis with selecting an outcome: "by checking they settle which reading is the real one". After the checking the global state still contains every reading, each with its own record in the environment. (c) It assumes the Born rule, and that one reading occurs, rather than deriving either.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

By D2, $|\rho_{\uparrow\downarrow}| = |\alpha\beta^*|\,|\eta|$, so the fraction of the starting coherence left after $N$ collisions is $|\eta| = c^N$, whatever $\alpha$ and $\beta$ are. We need the smallest integer $N$ with $c^N < 10^{-6}$, that is $N > \ln(10^{-6})/\ln c = 13.8155/(-\ln c)$.

(a) $-\ln 0.9 = 0.10536$, so $N > 131.13$ and $N = 132$. Check: $0.9^{131} = 1.013 \times 10^{-6}$, still above; $0.9^{132} = 9.12 \times 10^{-7}$, below.

(b) $-\ln 0.99 = 0.010050$, so $N > 1374.63$ and $N = 1375$. Check: $0.99^{1374} = 1.006 \times 10^{-6}$; $0.99^{1375} = 9.96 \times 10^{-7}$. For $c$ near 1, $-\ln c \approx 1 - c$, so $N \approx 13.8/(1-c)$: cutting the per-collision distinguishability $1 - c$ by ten multiplies $N$ by about ten (here 10.4).

**Must hit, strict (a)–(b):** the fraction is $c^N$ independent of the amplitudes; the logarithm step with the inequality direction right ($\ln c < 0$ flips it); the integer rounded up, 132 and 1375; the $1 - c$ scaling.

**Must hit, strict (c):**

- Shows: interference on the spin alone becomes unobservable after a modest number of individually weak records, exponentially fast.

- Does not show (any two): that any term has gone, since the diagonal is unchanged and the global state is still pure; that $\eta$ ever reaches exactly zero, so the mixture is improper and approximate at every finite $N$; which outcome occurs, or that one does.

**Wrong turns:** rounding 131.13 down to 131; computing $\ln(10^{-6})/\ln(0.9)$ with the sign lost and getting a negative $N$; reading "below a millionth" as a statement about the diagonal entries; concluding in (c) that after 132 collisions the spin "is" up or down.

**Model answer (c):** The numbers show that coherence on the spin decays exponentially, so a few hundred weak records already make interference on the spin unobservable. They do not show that either term of the superposition has gone, since the joint state stays pure and $\eta = c^N$ is never exactly zero, and they say nothing about which outcome occurs.

---

**P3** *(Exegetical (a) · Evaluative (b).)*

**Must hit, strict (a):**

- Everettian: decoherence defines the branches, quasi-classical structures in the universal wavefunction that are stable and almost dynamically independent, and it supplies the preferred basis that Everett's theory was long charged with lacking.

- Bohmian: decoherence (of the kind that separates packets in configuration space, which an approximate position record does) keeps the packets apart, so the actual configuration is guided by one effective wavefunction and the empty packets never again affect it: effective collapse.

**Must hit, any verdict (b):**

- The premise: whether the wavefunction's decohered structure is by itself enough to be a world with observers in it. This is the question of (A), completeness, asked of the decohered state. The Everettian says yes, so the Bohmian's empty packets contain observers too (Deutsch 1996; Brown and Wallace 2005). The Bohmian says no: matter is the particles, the primitive ontology, and the wavefunction only guides them (Maudlin 2010).

- Say why no experiment decides it: in quantum equilibrium the two theories make the same predictions.

- What would move each: for the Everettian, a successful argument that structure in the wavefunction cannot by itself be matter in space (the primitive-ontology demand of [2.1](02-01-bohmian-mechanics.md)); for the Bohmian, a successful argument that the particles do no explanatory work the pattern does not, which is functionalism about worlds, as functional organization is said to make a mind.

**Wrong turns:** locating the disagreement in whether decoherence occurs, which both accept; saying the Bohmian denies that the empty packets exist, when they are real parts of the wavefunction with no particles in them; treating Deutsch's charge as a verdict rather than one side's premise.

**Model answer (b), one of several:** Both accept the same decohered wavefunction; they divide over whether its structure suffices to be a world. The Everettian is a functionalist about worlds: a stable, autonomous pattern that behaves like a quasi-classical world is one, so the packets the Bohmian calls empty contain observers as real as ours, and the particles are idle (Deutsch; Brown and Wallace). The Bohmian denies the premise: the wavefunction is a guiding field, and what is in space, what observers are made of, is the particle configuration, so an empty packet is structure without matter (Maudlin). Since the theories agree in quantum equilibrium, only argument can move them. The Everettian would move if functionalism failed for worlds, for instance if a pattern in a field over configuration space could not be matter in three-dimensional space. The Bohmian would move if positing particles explained nothing that the pattern alone does not.

</details>

## Connections

- **Backward:** the trilemma, the von Neumann chain and Bell's complaint about "measurement" are [1.1](01-01-the-measurement-problem-as-a-trilemma.md); decoherence is (B) run on one more system. The density matrix, the partial trace and the "same object" point are [`quantum-mechanics` 5.4](../../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md) and [`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md); channels and Stinespring, the engineering view of the same entanglement, are [`quantum-computing` 5.1](../../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md).

- **Forward:** [1.3](01-03-copenhagen-qbism-and-relational-views.md) asks whether the and-or problem is badly posed; [2.1](02-01-bohmian-mechanics.md) uses decoherence for effective collapse, [2.2](02-02-collapse-theories-grw-and-csl.md) replaces it with real collapse, [2.3](02-03-many-worlds-branching.md) builds branches from it, and [2.4](02-04-many-worlds-the-probability-problem.md) asks what the Born weights mean once every branch is real.

- **Sideways:** Wallace's branches are emergent in the sense of [`philosophy-of-science` 4.5](../../philosophy-of-science/lessons/04-05-reduction-and-emergence.md) and real patterns in Dennett's sense ([`philosophy-of-mind` 4.1](../../philosophy-of-mind/lessons/04-01-intentionality-and-folk-psychology.md)). Decoherence is also an arrow: records spread forward in time from a low-entanglement past (Al-Khalili and Chen, 2024), the quantum cousin of the entropy arrow in [5.4](05-04-boltzmann-entropy-and-the-past-hypothesis.md), and error correction in [`quantum-computing` 5.2](../../quantum-computing/lessons/05-02-the-three-qubit-codes.md) works because the record of an error is relocated, not lost.
